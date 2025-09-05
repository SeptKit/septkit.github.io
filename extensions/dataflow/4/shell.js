(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.relative{position:relative}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.left-\\[80\\%\\]{left:80%}.btn-active{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn-active{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn-active{--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);isolation:isolate}.-z-1{z-index:-1}.z-1{z-index:1}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-\\[9px\\]{margin-right:9px}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.min-h-\\[500px\\]{min-height:500px}.btn-wide{width:100%;max-width:16rem}.btn-block{width:100%}.w-52{width:calc(var(--spacing)*52)}.w-\\[20\\%\\]{width:20%}.w-\\[20px\\]{width:20px}.w-full{width:100%}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-rows-\\[100px_1fr\\]{grid-template-rows:100px 1fr}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.self-center{align-self:center}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.btn-dash:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}@media (hover:none){.btn-dash:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-white{color:var(--color-white)}.btn-link{--btn-border:#0000;--btn-bg:#0000;--btn-fg:var(--color-primary);--btn-noise:none;--btn-shadow:"";outline-color:currentColor;text-decoration-line:underline}.btn-link:is(.btn-active,:hover,:active:focus,:focus-visible){--btn-border:#0000;--btn-bg:#0000;text-decoration-line:underline}@media (hover:none){.btn-link:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){text-decoration-line:none}}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-lg{--fontsize:1.125rem;--btn-p:1.25rem;--size:calc(var(--size-field,.25rem)*12)}.btn-md{--fontsize:.875rem;--btn-p:1rem;--size:calc(var(--size-field,.25rem)*10)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xl{--fontsize:1.375rem;--btn-p:1.5rem;--size:calc(var(--size-field,.25rem)*14)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-info{--btn-color:var(--color-info);--btn-fg:var(--color-info-content)}.btn-neutral{--btn-color:var(--color-neutral);--btn-fg:var(--color-neutral-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}.btn-success{--btn-color:var(--color-success);--btn-fg:var(--color-success-content)}.btn-warning{--btn-color:var(--color-warning);--btn-fg:var(--color-warning-content)}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ui(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) n[o] = 1;
  return (o) => o in n;
}
const Pe = {}, Yn = [], St = () => {
}, el = () => !1, No = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hi = (e) => e.startsWith("onUpdate:"), st = Object.assign, Fi = (e, n) => {
  const o = e.indexOf(n);
  o > -1 && e.splice(o, 1);
}, tl = Object.prototype.hasOwnProperty, Ne = (e, n) => tl.call(e, n), le = Array.isArray, Xn = (e) => Dr(e) === "[object Map]", tr = (e) => Dr(e) === "[object Set]", js = (e) => Dr(e) === "[object Date]", de = (e) => typeof e == "function", Ge = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", Le = (e) => e !== null && typeof e == "object", _a = (e) => (Le(e) || de(e)) && de(e.then) && de(e.catch), va = Object.prototype.toString, Dr = (e) => va.call(e), nl = (e) => Dr(e).slice(8, -1), ba = (e) => Dr(e) === "[object Object]", Vi = (e) => Ge(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vr = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Io = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, rl = /-(\w)/g, yn = Io(
  (e) => e.replace(rl, (n, o) => o ? o.toUpperCase() : "")
), ol = /\B([A-Z])/g, Pn = Io(
  (e) => e.replace(ol, "-$1").toLowerCase()
), wa = Io((e) => e.charAt(0).toUpperCase() + e.slice(1)), gi = Io(
  (e) => e ? `on${wa(e)}` : ""
), hn = (e, n) => !Object.is(e, n), po = (e, ...n) => {
  for (let o = 0; o < e.length; o++)
    e[o](...n);
}, Ni = (e, n, o, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: o
  });
}, vo = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let Ls;
const Ao = () => Ls || (Ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ke(e) {
  if (le(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++) {
      const s = e[o], a = Ge(s) ? ul(s) : Ke(s);
      if (a)
        for (const l in a)
          n[l] = a[l];
    }
    return n;
  } else if (Ge(e) || Le(e))
    return e;
}
const il = /;(?![^(]*\))/g, sl = /:([^]+)/, al = /\/\*[^]*?\*\//g;
function ul(e) {
  const n = {};
  return e.replace(al, "").split(il).forEach((o) => {
    if (o) {
      const s = o.split(sl);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function Gi(e) {
  let n = "";
  if (Ge(e))
    n = e;
  else if (le(e))
    for (let o = 0; o < e.length; o++) {
      const s = Gi(e[o]);
      s && (n += s + " ");
    }
  else if (Le(e))
    for (const o in e)
      e[o] && (n += o + " ");
  return n.trim();
}
const ll = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", cl = /* @__PURE__ */ Ui(ll);
function Ea(e) {
  return !!e || e === "";
}
function fl(e, n) {
  if (e.length !== n.length) return !1;
  let o = !0;
  for (let s = 0; o && s < e.length; s++)
    o = Mr(e[s], n[s]);
  return o;
}
function Mr(e, n) {
  if (e === n) return !0;
  let o = js(e), s = js(n);
  if (o || s)
    return o && s ? e.getTime() === n.getTime() : !1;
  if (o = Bt(e), s = Bt(n), o || s)
    return e === n;
  if (o = le(e), s = le(n), o || s)
    return o && s ? fl(e, n) : !1;
  if (o = Le(e), s = Le(n), o || s) {
    if (!o || !s)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(n).length;
    if (a !== l)
      return !1;
    for (const f in e) {
      const p = e.hasOwnProperty(f), m = n.hasOwnProperty(f);
      if (p && !m || !p && m || !Mr(e[f], n[f]))
        return !1;
    }
  }
  return String(e) === String(n);
}
function qi(e, n) {
  return e.findIndex((o) => Mr(o, n));
}
const Oa = (e) => !!(e && e.__v_isRef === !0), Qe = (e) => Ge(e) ? e : e == null ? "" : le(e) || Le(e) && (e.toString === va || !de(e.toString)) ? Oa(e) ? Qe(e.value) : JSON.stringify(e, xa, 2) : String(e), xa = (e, n) => Oa(n) ? xa(e, n.value) : Xn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (o, [s, a], l) => (o[yi(s, l) + " =>"] = a, o),
    {}
  )
} : tr(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((o) => yi(o))
} : Bt(n) ? yi(n) : Le(n) && !le(n) && !ba(n) ? String(n) : n, yi = (e, n = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bt(e) ? `Symbol(${(o = e.description) != null ? o : n})` : e
  );
};
var dl = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_de192231-b27e-4d4d-8f54-ff8d1432043e", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_de192231-b27e-4d4d-8f54-ff8d1432043e", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1755", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:13098", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17488684197", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "b64cbba3879d9556ba558eca802af205c8680f1d", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_a121ddd0-ca5c-4112-8b94-d26d2644a45e", INVOCATION_ID: "716ace471b3b4779bf29cf032447a1d7", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "19", GITHUB_TRIGGERING_ACTOR: "NikoStu", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005626", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "b64cbba3879d9556ba558eca802af205c8680f1d", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NikoStu", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_de192231-b27e-4d4d-8f54-ff8d1432043e", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "96774653", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_de192231-b27e-4d4d-8f54-ff8d1432043e", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_de192231-b27e-4d4d-8f54-ff8d1432043e", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let pt;
class pl {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pt, !n && pt && (this.index = (pt.scopes || (pt.scopes = [])).push(
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
      const o = pt;
      try {
        return pt = this, n();
      } finally {
        pt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pt, pt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pt = this.prevScope, this.prevScope = void 0);
  }
  stop(n) {
    if (this._active) {
      this._active = !1;
      let o, s;
      for (o = 0, s = this.effects.length; o < s; o++)
        this.effects[o].stop();
      for (this.effects.length = 0, o = 0, s = this.cleanups.length; o < s; o++)
        this.cleanups[o]();
      if (this.cleanups.length = 0, this.scopes) {
        for (o = 0, s = this.scopes.length; o < s; o++)
          this.scopes[o].stop(!0);
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
function hl() {
  return pt;
}
let ke;
const _i = /* @__PURE__ */ new WeakSet();
class Ta {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pt && pt.active && pt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, _i.has(this) && (_i.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Sa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bs(this), Na(this);
    const n = ke, o = Nt;
    ke = this, Nt = !0;
    try {
      return this.fn();
    } finally {
      Ia(this), ke = n, Nt = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        Yi(n);
      this.deps = this.depsTail = void 0, Bs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? _i.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ii(this) && this.run();
  }
  get dirty() {
    return Ii(this);
  }
}
let Ra = 0, br, wr;
function Sa(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = wr, wr = e;
    return;
  }
  e.next = br, br = e;
}
function $i() {
  Ra++;
}
function Wi() {
  if (--Ra > 0)
    return;
  if (wr) {
    let n = wr;
    for (wr = void 0; n; ) {
      const o = n.next;
      n.next = void 0, n.flags &= -9, n = o;
    }
  }
  let e;
  for (; br; ) {
    let n = br;
    for (br = void 0; n; ) {
      const o = n.next;
      if (n.next = void 0, n.flags &= -9, n.flags & 1)
        try {
          n.trigger();
        } catch (s) {
          e || (e = s);
        }
      n = o;
    }
  }
  if (e) throw e;
}
function Na(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Ia(e) {
  let n, o = e.depsTail, s = o;
  for (; s; ) {
    const a = s.prevDep;
    s.version === -1 ? (s === o && (o = a), Yi(s), ml(s)) : n = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = a;
  }
  e.deps = n, e.depsTail = o;
}
function Ii(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (Aa(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function Aa(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Nr) || (e.globalVersion = Nr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ii(e))))
    return;
  e.flags |= 2;
  const n = e.dep, o = ke, s = Nt;
  ke = e, Nt = !0;
  try {
    Na(e);
    const a = e.fn(e._value);
    (n.version === 0 || hn(a, e._value)) && (e.flags |= 128, e._value = a, n.version++);
  } catch (a) {
    throw n.version++, a;
  } finally {
    ke = o, Nt = s, Ia(e), e.flags &= -3;
  }
}
function Yi(e, n = !1) {
  const { dep: o, prevSub: s, nextSub: a } = e;
  if (s && (s.nextSub = a, e.prevSub = void 0), a && (a.prevSub = s, e.nextSub = void 0), o.subs === e && (o.subs = s, !s && o.computed)) {
    o.computed.flags &= -5;
    for (let l = o.computed.deps; l; l = l.nextDep)
      Yi(l, !0);
  }
  !n && !--o.sc && o.map && o.map.delete(o.key);
}
function ml(e) {
  const { prevDep: n, nextDep: o } = e;
  n && (n.nextDep = o, e.prevDep = void 0), o && (o.prevDep = n, e.nextDep = void 0);
}
let Nt = !0;
const Ca = [];
function Kt() {
  Ca.push(Nt), Nt = !1;
}
function Ut() {
  const e = Ca.pop();
  Nt = e === void 0 ? !0 : e;
}
function Bs(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const o = ke;
    ke = void 0;
    try {
      n();
    } finally {
      ke = o;
    }
  }
}
let Nr = 0;
class gl {
  constructor(n, o) {
    this.sub = n, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!ke || !Nt || ke === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ke)
      o = this.activeLink = new gl(ke, this), ke.deps ? (o.prevDep = ke.depsTail, ke.depsTail.nextDep = o, ke.depsTail = o) : ke.deps = ke.depsTail = o, Pa(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const s = o.nextDep;
      s.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = s), o.prevDep = ke.depsTail, o.nextDep = void 0, ke.depsTail.nextDep = o, ke.depsTail = o, ke.deps === o && (ke.deps = s);
    }
    return o;
  }
  trigger(n) {
    this.version++, Nr++, this.notify(n);
  }
  notify(n) {
    $i();
    try {
      dl.NODE_ENV;
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      Wi();
    }
  }
}
function Pa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let s = n.deps; s; s = s.nextDep)
        Pa(s);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ai = /* @__PURE__ */ new WeakMap(), An = Symbol(
  ""
), Ci = Symbol(
  ""
), Ir = Symbol(
  ""
);
function it(e, n, o) {
  if (Nt && ke) {
    let s = Ai.get(e);
    s || Ai.set(e, s = /* @__PURE__ */ new Map());
    let a = s.get(o);
    a || (s.set(o, a = new Xi()), a.map = s, a.key = o), a.track();
  }
}
function Yt(e, n, o, s, a, l) {
  const f = Ai.get(e);
  if (!f) {
    Nr++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if ($i(), n === "clear")
    f.forEach(p);
  else {
    const m = le(e), A = m && Vi(o);
    if (m && o === "length") {
      const x = Number(s);
      f.forEach((C, K) => {
        (K === "length" || K === Ir || !Bt(K) && K >= x) && p(C);
      });
    } else
      switch ((o !== void 0 || f.has(void 0)) && p(f.get(o)), A && p(f.get(Ir)), n) {
        case "add":
          m ? A && p(f.get("length")) : (p(f.get(An)), Xn(e) && p(f.get(Ci)));
          break;
        case "delete":
          m || (p(f.get(An)), Xn(e) && p(f.get(Ci)));
          break;
        case "set":
          Xn(e) && p(f.get(An));
          break;
      }
  }
  Wi();
}
function $n(e) {
  const n = we(e);
  return n === e ? n : (it(n, "iterate", Ir), xt(e) ? n : n.map(Ze));
}
function Co(e) {
  return it(e = we(e), "iterate", Ir), e;
}
const yl = {
  __proto__: null,
  [Symbol.iterator]() {
    return vi(this, Symbol.iterator, Ze);
  },
  concat(...e) {
    return $n(this).concat(
      ...e.map((n) => le(n) ? $n(n) : n)
    );
  },
  entries() {
    return vi(this, "entries", (e) => (e[1] = Ze(e[1]), e));
  },
  every(e, n) {
    return qt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return qt(this, "filter", e, n, (o) => o.map(Ze), arguments);
  },
  find(e, n) {
    return qt(this, "find", e, n, Ze, arguments);
  },
  findIndex(e, n) {
    return qt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return qt(this, "findLast", e, n, Ze, arguments);
  },
  findLastIndex(e, n) {
    return qt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return qt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return bi(this, "includes", e);
  },
  indexOf(...e) {
    return bi(this, "indexOf", e);
  },
  join(e) {
    return $n(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return bi(this, "lastIndexOf", e);
  },
  map(e, n) {
    return qt(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return mr(this, "pop");
  },
  push(...e) {
    return mr(this, "push", e);
  },
  reduce(e, ...n) {
    return Ks(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return Ks(this, "reduceRight", e, n);
  },
  shift() {
    return mr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return qt(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return mr(this, "splice", e);
  },
  toReversed() {
    return $n(this).toReversed();
  },
  toSorted(e) {
    return $n(this).toSorted(e);
  },
  toSpliced(...e) {
    return $n(this).toSpliced(...e);
  },
  unshift(...e) {
    return mr(this, "unshift", e);
  },
  values() {
    return vi(this, "values", Ze);
  }
};
function vi(e, n, o) {
  const s = Co(e), a = s[n]();
  return s !== e && !xt(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.value && (l.value = o(l.value)), l;
  }), a;
}
const _l = Array.prototype;
function qt(e, n, o, s, a, l) {
  const f = Co(e), p = f !== e && !xt(e), m = f[n];
  if (m !== _l[n]) {
    const C = m.apply(e, l);
    return p ? Ze(C) : C;
  }
  let A = o;
  f !== e && (p ? A = function(C, K) {
    return o.call(this, Ze(C), K, e);
  } : o.length > 2 && (A = function(C, K) {
    return o.call(this, C, K, e);
  }));
  const x = m.call(f, A, s);
  return p && a ? a(x) : x;
}
function Ks(e, n, o, s) {
  const a = Co(e);
  let l = o;
  return a !== e && (xt(e) ? o.length > 3 && (l = function(f, p, m) {
    return o.call(this, f, p, m, e);
  }) : l = function(f, p, m) {
    return o.call(this, f, Ze(p), m, e);
  }), a[n](l, ...s);
}
function bi(e, n, o) {
  const s = we(e);
  it(s, "iterate", Ir);
  const a = s[n](...o);
  return (a === -1 || a === !1) && Ji(o[0]) ? (o[0] = we(o[0]), s[n](...o)) : a;
}
function mr(e, n, o = []) {
  Kt(), $i();
  const s = we(e)[n].apply(e, o);
  return Wi(), Ut(), s;
}
const vl = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), ka = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
);
function bl(e) {
  Bt(e) || (e = String(e));
  const n = we(this);
  return it(n, "has", e), n.hasOwnProperty(e);
}
class Da {
  constructor(n = !1, o = !1) {
    this._isReadonly = n, this._isShallow = o;
  }
  get(n, o, s) {
    if (o === "__v_skip") return n.__v_skip;
    const a = this._isReadonly, l = this._isShallow;
    if (o === "__v_isReactive")
      return !a;
    if (o === "__v_isReadonly")
      return a;
    if (o === "__v_isShallow")
      return l;
    if (o === "__v_raw")
      return s === (a ? l ? Ua : Ka : l ? Ba : La).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(s) ? n : void 0;
    const f = le(n);
    if (!a) {
      let m;
      if (f && (m = yl[o]))
        return m;
      if (o === "hasOwnProperty")
        return bl;
    }
    const p = Reflect.get(
      n,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      tt(n) ? n : s
    );
    return (Bt(o) ? ka.has(o) : vl(o)) || (a || it(n, "get", o), l) ? p : tt(p) ? f && Vi(o) ? p : p.value : Le(p) ? a ? Ha(p) : zi(p) : p;
  }
}
class Ma extends Da {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, o, s, a) {
    let l = n[o];
    if (!this._isShallow) {
      const m = _n(l);
      if (!xt(s) && !_n(s) && (l = we(l), s = we(s)), !le(n) && tt(l) && !tt(s))
        return m ? !1 : (l.value = s, !0);
    }
    const f = le(n) && Vi(o) ? Number(o) < n.length : Ne(n, o), p = Reflect.set(
      n,
      o,
      s,
      tt(n) ? n : a
    );
    return n === we(a) && (f ? hn(s, l) && Yt(n, "set", o, s) : Yt(n, "add", o, s)), p;
  }
  deleteProperty(n, o) {
    const s = Ne(n, o);
    n[o];
    const a = Reflect.deleteProperty(n, o);
    return a && s && Yt(n, "delete", o, void 0), a;
  }
  has(n, o) {
    const s = Reflect.has(n, o);
    return (!Bt(o) || !ka.has(o)) && it(n, "has", o), s;
  }
  ownKeys(n) {
    return it(
      n,
      "iterate",
      le(n) ? "length" : An
    ), Reflect.ownKeys(n);
  }
}
class ja extends Da {
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
const wl = /* @__PURE__ */ new Ma(), El = /* @__PURE__ */ new ja(), Ol = /* @__PURE__ */ new Ma(!0), xl = /* @__PURE__ */ new ja(!0), Pi = (e) => e, uo = (e) => Reflect.getPrototypeOf(e);
function Tl(e, n, o) {
  return function(...s) {
    const a = this.__v_raw, l = we(a), f = Xn(l), p = e === "entries" || e === Symbol.iterator && f, m = e === "keys" && f, A = a[e](...s), x = o ? Pi : n ? bo : Ze;
    return !n && it(
      l,
      "iterate",
      m ? Ci : An
    ), {
      // iterator protocol
      next() {
        const { value: C, done: K } = A.next();
        return K ? { value: C, done: K } : {
          value: p ? [x(C[0]), x(C[1])] : x(C),
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
function lo(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Rl(e, n) {
  const o = {
    get(a) {
      const l = this.__v_raw, f = we(l), p = we(a);
      e || (hn(a, p) && it(f, "get", a), it(f, "get", p));
      const { has: m } = uo(f), A = n ? Pi : e ? bo : Ze;
      if (m.call(f, a))
        return A(l.get(a));
      if (m.call(f, p))
        return A(l.get(p));
      l !== f && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && it(we(a), "iterate", An), Reflect.get(a, "size", a);
    },
    has(a) {
      const l = this.__v_raw, f = we(l), p = we(a);
      return e || (hn(a, p) && it(f, "has", a), it(f, "has", p)), a === p ? l.has(a) : l.has(a) || l.has(p);
    },
    forEach(a, l) {
      const f = this, p = f.__v_raw, m = we(p), A = n ? Pi : e ? bo : Ze;
      return !e && it(m, "iterate", An), p.forEach((x, C) => a.call(l, A(x), A(C), f));
    }
  };
  return st(
    o,
    e ? {
      add: lo("add"),
      set: lo("set"),
      delete: lo("delete"),
      clear: lo("clear")
    } : {
      add(a) {
        !n && !xt(a) && !_n(a) && (a = we(a));
        const l = we(this);
        return uo(l).has.call(l, a) || (l.add(a), Yt(l, "add", a, a)), this;
      },
      set(a, l) {
        !n && !xt(l) && !_n(l) && (l = we(l));
        const f = we(this), { has: p, get: m } = uo(f);
        let A = p.call(f, a);
        A || (a = we(a), A = p.call(f, a));
        const x = m.call(f, a);
        return f.set(a, l), A ? hn(l, x) && Yt(f, "set", a, l) : Yt(f, "add", a, l), this;
      },
      delete(a) {
        const l = we(this), { has: f, get: p } = uo(l);
        let m = f.call(l, a);
        m || (a = we(a), m = f.call(l, a)), p && p.call(l, a);
        const A = l.delete(a);
        return m && Yt(l, "delete", a, void 0), A;
      },
      clear() {
        const a = we(this), l = a.size !== 0, f = a.clear();
        return l && Yt(
          a,
          "clear",
          void 0,
          void 0
        ), f;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((a) => {
    o[a] = Tl(a, e, n);
  }), o;
}
function Po(e, n) {
  const o = Rl(e, n);
  return (s, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? s : Reflect.get(
    Ne(o, a) && a in s ? o : s,
    a,
    l
  );
}
const Sl = {
  get: /* @__PURE__ */ Po(!1, !1)
}, Nl = {
  get: /* @__PURE__ */ Po(!1, !0)
}, Il = {
  get: /* @__PURE__ */ Po(!0, !1)
}, Al = {
  get: /* @__PURE__ */ Po(!0, !0)
}, La = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), Ka = /* @__PURE__ */ new WeakMap(), Ua = /* @__PURE__ */ new WeakMap();
function Cl(e) {
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
function Pl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Cl(nl(e));
}
function zi(e) {
  return _n(e) ? e : ko(
    e,
    !1,
    wl,
    Sl,
    La
  );
}
function kl(e) {
  return ko(
    e,
    !1,
    Ol,
    Nl,
    Ba
  );
}
function Ha(e) {
  return ko(
    e,
    !0,
    El,
    Il,
    Ka
  );
}
function co(e) {
  return ko(
    e,
    !0,
    xl,
    Al,
    Ua
  );
}
function ko(e, n, o, s, a) {
  if (!Le(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const l = Pl(e);
  if (l === 0)
    return e;
  const f = a.get(e);
  if (f)
    return f;
  const p = new Proxy(
    e,
    l === 2 ? s : o
  );
  return a.set(e, p), p;
}
function zn(e) {
  return _n(e) ? zn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function _n(e) {
  return !!(e && e.__v_isReadonly);
}
function xt(e) {
  return !!(e && e.__v_isShallow);
}
function Ji(e) {
  return e ? !!e.__v_raw : !1;
}
function we(e) {
  const n = e && e.__v_raw;
  return n ? we(n) : e;
}
function Dl(e) {
  return !Ne(e, "__v_skip") && Object.isExtensible(e) && Ni(e, "__v_skip", !0), e;
}
const Ze = (e) => Le(e) ? zi(e) : e, bo = (e) => Le(e) ? Ha(e) : e;
function tt(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Rt(e) {
  return Ml(e, !1);
}
function Ml(e, n) {
  return tt(e) ? e : new jl(e, n);
}
class jl {
  constructor(n, o) {
    this.dep = new Xi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? n : we(n), this._value = o ? n : Ze(n), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const o = this._rawValue, s = this.__v_isShallow || xt(n) || _n(n);
    n = s ? n : we(n), hn(n, o) && (this._rawValue = n, this._value = s ? n : Ze(n), this.dep.trigger());
  }
}
function Cn(e) {
  return tt(e) ? e.value : e;
}
const Ll = {
  get: (e, n, o) => n === "__v_raw" ? e : Cn(Reflect.get(e, n, o)),
  set: (e, n, o, s) => {
    const a = e[n];
    return tt(a) && !tt(o) ? (a.value = o, !0) : Reflect.set(e, n, o, s);
  }
};
function Fa(e) {
  return zn(e) ? e : new Proxy(e, Ll);
}
class Bl {
  constructor(n, o, s) {
    this.fn = n, this.setter = o, this._value = void 0, this.dep = new Xi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Nr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return Sa(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return Aa(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function Kl(e, n, o = !1) {
  let s, a;
  return de(e) ? s = e : (s = e.get, a = e.set), new Bl(s, a, o);
}
const fo = {}, wo = /* @__PURE__ */ new WeakMap();
let In;
function Ul(e, n = !1, o = In) {
  if (o) {
    let s = wo.get(o);
    s || wo.set(o, s = []), s.push(e);
  }
}
function Hl(e, n, o = Pe) {
  const { immediate: s, deep: a, once: l, scheduler: f, augmentJob: p, call: m } = o, A = (ae) => a ? ae : xt(ae) || a === !1 || a === 0 ? Xt(ae, 1) : Xt(ae);
  let x, C, K, M, D = !1, G = !1;
  if (tt(e) ? (C = () => e.value, D = xt(e)) : zn(e) ? (C = () => A(e), D = !0) : le(e) ? (G = !0, D = e.some((ae) => zn(ae) || xt(ae)), C = () => e.map((ae) => {
    if (tt(ae))
      return ae.value;
    if (zn(ae))
      return A(ae);
    if (de(ae))
      return m ? m(ae, 2) : ae();
  })) : de(e) ? n ? C = m ? () => m(e, 2) : e : C = () => {
    if (K) {
      Kt();
      try {
        K();
      } finally {
        Ut();
      }
    }
    const ae = In;
    In = x;
    try {
      return m ? m(e, 3, [M]) : e(M);
    } finally {
      In = ae;
    }
  } : C = St, n && a) {
    const ae = C, Ae = a === !0 ? 1 / 0 : a;
    C = () => Xt(ae(), Ae);
  }
  const Ee = hl(), me = () => {
    x.stop(), Ee && Ee.active && Fi(Ee.effects, x);
  };
  if (l && n) {
    const ae = n;
    n = (...Ae) => {
      ae(...Ae), me();
    };
  }
  let ye = G ? new Array(e.length).fill(fo) : fo;
  const xe = (ae) => {
    if (!(!(x.flags & 1) || !x.dirty && !ae))
      if (n) {
        const Ae = x.run();
        if (a || D || (G ? Ae.some((Ce, Ie) => hn(Ce, ye[Ie])) : hn(Ae, ye))) {
          K && K();
          const Ce = In;
          In = x;
          try {
            const Ie = [
              Ae,
              // pass undefined as the old value when it's changed for the first time
              ye === fo ? void 0 : G && ye[0] === fo ? [] : ye,
              M
            ];
            ye = Ae, m ? m(n, 3, Ie) : (
              // @ts-expect-error
              n(...Ie)
            );
          } finally {
            In = Ce;
          }
        }
      } else
        x.run();
  };
  return p && p(xe), x = new Ta(C), x.scheduler = f ? () => f(xe, !1) : xe, M = (ae) => Ul(ae, !1, x), K = x.onStop = () => {
    const ae = wo.get(x);
    if (ae) {
      if (m)
        m(ae, 4);
      else
        for (const Ae of ae) Ae();
      wo.delete(x);
    }
  }, n ? s ? xe(!0) : ye = x.run() : f ? f(xe.bind(null, !0), !0) : x.run(), me.pause = x.pause.bind(x), me.resume = x.resume.bind(x), me.stop = me, me;
}
function Xt(e, n = 1 / 0, o) {
  if (n <= 0 || !Le(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), n--, tt(e))
    Xt(e.value, n, o);
  else if (le(e))
    for (let s = 0; s < e.length; s++)
      Xt(e[s], n, o);
  else if (tr(e) || Xn(e))
    e.forEach((s) => {
      Xt(s, n, o);
    });
  else if (ba(e)) {
    for (const s in e)
      Xt(e[s], n, o);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Xt(e[s], n, o);
  }
  return e;
}
var cn = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_de192231-b27e-4d4d-8f54-ff8d1432043e", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_de192231-b27e-4d4d-8f54-ff8d1432043e", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1755", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:13098", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17488684197", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "b64cbba3879d9556ba558eca802af205c8680f1d", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_a121ddd0-ca5c-4112-8b94-d26d2644a45e", INVOCATION_ID: "716ace471b3b4779bf29cf032447a1d7", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "19", GITHUB_TRIGGERING_ACTOR: "NikoStu", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005626", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "b64cbba3879d9556ba558eca802af205c8680f1d", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NikoStu", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_de192231-b27e-4d4d-8f54-ff8d1432043e", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "96774653", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_de192231-b27e-4d4d-8f54-ff8d1432043e", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_de192231-b27e-4d4d-8f54-ff8d1432043e", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const Er = [];
let wi = !1;
function Fl(e, ...n) {
  if (wi) return;
  wi = !0, Kt();
  const o = Er.length ? Er[Er.length - 1].component : null, s = o && o.appContext.config.warnHandler, a = Vl();
  if (s)
    nr(
      s,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((l) => {
          var f, p;
          return (p = (f = l.toString) == null ? void 0 : f.call(l)) != null ? p : JSON.stringify(l);
        }).join(""),
        o && o.proxy,
        a.map(
          ({ vnode: l }) => `at <${Ou(o, l.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const l = [`[Vue warn]: ${e}`, ...n];
    a.length && l.push(`
`, ...Gl(a)), console.warn(...l);
  }
  Ut(), wi = !1;
}
function Vl() {
  let e = Er[Er.length - 1];
  if (!e)
    return [];
  const n = [];
  for (; e; ) {
    const o = n[0];
    o && o.vnode === e ? o.recurseCount++ : n.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return n;
}
function Gl(e) {
  const n = [];
  return e.forEach((o, s) => {
    n.push(...s === 0 ? [] : [`
`], ...ql(o));
  }), n;
}
function ql({ vnode: e, recurseCount: n }) {
  const o = n > 0 ? `... (${n} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, a = ` at <${Ou(
    e.component,
    e.type,
    s
  )}`, l = ">" + o;
  return e.props ? [a, ...$l(e.props), l] : [a + l];
}
function $l(e) {
  const n = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((s) => {
    n.push(...Va(s, e[s]));
  }), o.length > 3 && n.push(" ..."), n;
}
function Va(e, n, o) {
  return Ge(n) ? (n = JSON.stringify(n), o ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? o ? n : [`${e}=${n}`] : tt(n) ? (n = Va(e, we(n.value), !0), o ? n : [`${e}=Ref<`, n, ">"]) : de(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = we(n), o ? n : [`${e}=`, n]);
}
function nr(e, n, o, s) {
  try {
    return s ? e(...s) : e();
  } catch (a) {
    Do(a, n, o);
  }
}
function Ht(e, n, o, s) {
  if (de(e)) {
    const a = nr(e, n, o, s);
    return a && _a(a) && a.catch((l) => {
      Do(l, n, o);
    }), a;
  }
  if (le(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Ht(e[l], n, o, s));
    return a;
  }
}
function Do(e, n, o, s = !0) {
  const a = n ? n.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: f } = n && n.appContext.config || Pe;
  if (n) {
    let p = n.parent;
    const m = n.proxy, A = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; p; ) {
      const x = p.ec;
      if (x) {
        for (let C = 0; C < x.length; C++)
          if (x[C](e, m, A) === !1)
            return;
      }
      p = p.parent;
    }
    if (l) {
      Kt(), nr(l, null, 10, [
        e,
        m,
        A
      ]), Ut();
      return;
    }
  }
  Wl(e, o, a, s, f);
}
function Wl(e, n, o, s = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ct = [];
let jt = -1;
const Jn = [];
let fn = null, Wn = 0;
const Ga = /* @__PURE__ */ Promise.resolve();
let Eo = null;
function qa(e) {
  const n = Eo || Ga;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Yl(e) {
  let n = jt + 1, o = ct.length;
  for (; n < o; ) {
    const s = n + o >>> 1, a = ct[s], l = Ar(a);
    l < e || l === e && a.flags & 2 ? n = s + 1 : o = s;
  }
  return n;
}
function Qi(e) {
  if (!(e.flags & 1)) {
    const n = Ar(e), o = ct[ct.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= Ar(o) ? ct.push(e) : ct.splice(Yl(n), 0, e), e.flags |= 1, $a();
  }
}
function $a() {
  Eo || (Eo = Ga.then(Ya));
}
function Xl(e) {
  le(e) ? Jn.push(...e) : fn && e.id === -1 ? fn.splice(Wn + 1, 0, e) : e.flags & 1 || (Jn.push(e), e.flags |= 1), $a();
}
function Us(e, n, o = jt + 1) {
  for (; o < ct.length; o++) {
    const s = ct[o];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ct.splice(o, 1), o--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Wa(e) {
  if (Jn.length) {
    const n = [...new Set(Jn)].sort(
      (o, s) => Ar(o) - Ar(s)
    );
    if (Jn.length = 0, fn) {
      fn.push(...n);
      return;
    }
    for (fn = n, Wn = 0; Wn < fn.length; Wn++) {
      const o = fn[Wn];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    fn = null, Wn = 0;
  }
}
const Ar = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ya(e) {
  const n = St;
  try {
    for (jt = 0; jt < ct.length; jt++) {
      const o = ct[jt];
      o && !(o.flags & 8) && (cn.NODE_ENV !== "production" && n(o), o.flags & 4 && (o.flags &= -2), nr(
        o,
        o.i,
        o.i ? 15 : 14
      ), o.flags & 4 || (o.flags &= -2));
    }
  } finally {
    for (; jt < ct.length; jt++) {
      const o = ct[jt];
      o && (o.flags &= -2);
    }
    jt = -1, ct.length = 0, Wa(), Eo = null, (ct.length || Jn.length) && Ya();
  }
}
let gt = null, Xa = null;
function Oo(e) {
  const n = gt;
  return gt = e, Xa = e && e.type.__scopeId || null, n;
}
function zl(e, n = gt, o) {
  if (!n || e._n)
    return e;
  const s = (...a) => {
    s._d && Xs(-1);
    const l = Oo(n);
    let f;
    try {
      f = e(...a);
    } finally {
      Oo(l), s._d && Xs(1);
    }
    return f;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function $t(e, n) {
  if (gt === null)
    return e;
  const o = Bo(gt), s = e.dirs || (e.dirs = []);
  for (let a = 0; a < n.length; a++) {
    let [l, f, p, m = Pe] = n[a];
    l && (de(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Xt(f), s.push({
      dir: l,
      instance: o,
      value: f,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return e;
}
function Sn(e, n, o, s) {
  const a = e.dirs, l = n && n.dirs;
  for (let f = 0; f < a.length; f++) {
    const p = a[f];
    l && (p.oldValue = l[f].value);
    let m = p.dir[s];
    m && (Kt(), Ht(m, o, 8, [
      e.el,
      p,
      e,
      n
    ]), Ut());
  }
}
const Jl = Symbol("_vte"), Ql = (e) => e.__isTeleport;
function Zi(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Zi(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kn(e, n) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    st({ name: e.name }, n, { setup: e })
  ) : e;
}
function za(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Or(e, n, o, s, a = !1) {
  if (le(e)) {
    e.forEach(
      (D, G) => Or(
        D,
        n && (le(n) ? n[G] : n),
        o,
        s,
        a
      )
    );
    return;
  }
  if (xr(s) && !a) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Or(e, n, o, s.component.subTree);
    return;
  }
  const l = s.shapeFlag & 4 ? Bo(s.component) : s.el, f = a ? null : l, { i: p, r: m } = e, A = n && n.r, x = p.refs === Pe ? p.refs = {} : p.refs, C = p.setupState, K = we(C), M = C === Pe ? () => !1 : (D) => Ne(K, D);
  if (A != null && A !== m && (Ge(A) ? (x[A] = null, M(A) && (C[A] = null)) : tt(A) && (A.value = null)), de(m))
    nr(m, p, 12, [f, x]);
  else {
    const D = Ge(m), G = tt(m);
    if (D || G) {
      const Ee = () => {
        if (e.f) {
          const me = D ? M(m) ? C[m] : x[m] : m.value;
          a ? le(me) && Fi(me, l) : le(me) ? me.includes(l) || me.push(l) : D ? (x[m] = [l], M(m) && (C[m] = x[m])) : (m.value = [l], e.k && (x[e.k] = m.value));
        } else D ? (x[m] = f, M(m) && (C[m] = f)) : G && (m.value = f, e.k && (x[e.k] = f));
      };
      f ? (Ee.id = -1, mt(Ee, o)) : Ee();
    }
  }
}
Ao().requestIdleCallback;
Ao().cancelIdleCallback;
const xr = (e) => !!e.type.__asyncLoader, Ja = (e) => e.type.__isKeepAlive;
function Zl(e, n) {
  Qa(e, "a", n);
}
function ec(e, n) {
  Qa(e, "da", n);
}
function Qa(e, n, o = et) {
  const s = e.__wdc || (e.__wdc = () => {
    let a = o;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Mo(n, s, o), o) {
    let a = o.parent;
    for (; a && a.parent; )
      Ja(a.parent.vnode) && tc(s, n, o, a), a = a.parent;
  }
}
function tc(e, n, o, s) {
  const a = Mo(
    n,
    e,
    s,
    !0
    /* prepend */
  );
  es(() => {
    Fi(s[n], a);
  }, o);
}
function Mo(e, n, o = et, s = !1) {
  if (o) {
    const a = o[e] || (o[e] = []), l = n.__weh || (n.__weh = (...f) => {
      Kt();
      const p = jr(o), m = Ht(n, o, e, f);
      return p(), Ut(), m;
    });
    return s ? a.unshift(l) : a.push(l), l;
  }
}
const Qt = (e) => (n, o = et) => {
  (!Pr || e === "sp") && Mo(e, (...s) => n(...s), o);
}, nc = Qt("bm"), Za = Qt("m"), rc = Qt(
  "bu"
), oc = Qt("u"), ic = Qt(
  "bum"
), es = Qt("um"), sc = Qt(
  "sp"
), ac = Qt("rtg"), uc = Qt("rtc");
function lc(e, n = et) {
  Mo("ec", e, n);
}
const cc = Symbol.for("v-ndc");
function mn(e, n, o, s) {
  let a;
  const l = o, f = le(e);
  if (f || Ge(e)) {
    const p = f && zn(e);
    let m = !1, A = !1;
    p && (m = !xt(e), A = _n(e), e = Co(e)), a = new Array(e.length);
    for (let x = 0, C = e.length; x < C; x++)
      a[x] = n(
        m ? A ? bo(Ze(e[x])) : Ze(e[x]) : e[x],
        x,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let p = 0; p < e; p++)
      a[p] = n(p + 1, p, void 0, l);
  } else if (Le(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (p, m) => n(p, m, void 0, l)
      );
    else {
      const p = Object.keys(e);
      a = new Array(p.length);
      for (let m = 0, A = p.length; m < A; m++) {
        const x = p[m];
        a[m] = n(e[x], x, m, l);
      }
    }
  else
    a = [];
  return a;
}
const ki = (e) => e ? wu(e) ? Bo(e) : ki(e.parent) : null, Tr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ st(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => ki(e.parent),
    $root: (e) => ki(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => tu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qa.bind(e.proxy)),
    $watch: (e) => Pc.bind(e)
  })
), Ei = (e, n) => e !== Pe && !e.__isScriptSetup && Ne(e, n), fc = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: o, setupState: s, data: a, props: l, accessCache: f, type: p, appContext: m } = e;
    let A;
    if (n[0] !== "$") {
      const M = f[n];
      if (M !== void 0)
        switch (M) {
          case 1:
            return s[n];
          case 2:
            return a[n];
          case 4:
            return o[n];
          case 3:
            return l[n];
        }
      else {
        if (Ei(s, n))
          return f[n] = 1, s[n];
        if (a !== Pe && Ne(a, n))
          return f[n] = 2, a[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (A = e.propsOptions[0]) && Ne(A, n)
        )
          return f[n] = 3, l[n];
        if (o !== Pe && Ne(o, n))
          return f[n] = 4, o[n];
        Di && (f[n] = 0);
      }
    }
    const x = Tr[n];
    let C, K;
    if (x)
      return n === "$attrs" && it(e.attrs, "get", ""), x(e);
    if (
      // css module (injected by vue-loader)
      (C = p.__cssModules) && (C = C[n])
    )
      return C;
    if (o !== Pe && Ne(o, n))
      return f[n] = 4, o[n];
    if (
      // global properties
      K = m.config.globalProperties, Ne(K, n)
    )
      return K[n];
  },
  set({ _: e }, n, o) {
    const { data: s, setupState: a, ctx: l } = e;
    return Ei(a, n) ? (a[n] = o, !0) : s !== Pe && Ne(s, n) ? (s[n] = o, !0) : Ne(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (l[n] = o, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: o, ctx: s, appContext: a, propsOptions: l }
  }, f) {
    let p;
    return !!o[f] || e !== Pe && Ne(e, f) || Ei(n, f) || (p = l[0]) && Ne(p, f) || Ne(s, f) || Ne(Tr, f) || Ne(a.config.globalProperties, f);
  },
  defineProperty(e, n, o) {
    return o.get != null ? e._.accessCache[n] = 0 : Ne(o, "value") && this.set(e, n, o.value, null), Reflect.defineProperty(e, n, o);
  }
};
function Hs(e) {
  return le(e) ? e.reduce(
    (n, o) => (n[o] = null, n),
    {}
  ) : e;
}
let Di = !0;
function dc(e) {
  const n = tu(e), o = e.proxy, s = e.ctx;
  Di = !1, n.beforeCreate && Fs(n.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: f,
    watch: p,
    provide: m,
    inject: A,
    // lifecycle
    created: x,
    beforeMount: C,
    mounted: K,
    beforeUpdate: M,
    updated: D,
    activated: G,
    deactivated: Ee,
    beforeDestroy: me,
    beforeUnmount: ye,
    destroyed: xe,
    unmounted: ae,
    render: Ae,
    renderTracked: Ce,
    renderTriggered: Ie,
    errorCaptured: _t,
    serverPrefetch: Dn,
    // public API
    expose: At,
    inheritAttrs: Zt,
    // assets
    components: Ct,
    directives: vt,
    filters: rr
  } = n;
  if (A && pc(A, s, null), f)
    for (const Me in f) {
      const _e = f[Me];
      de(_e) && (s[Me] = _e.bind(o));
    }
  if (a) {
    const Me = a.call(o, o);
    Le(Me) && (e.data = zi(Me));
  }
  if (Di = !0, l)
    for (const Me in l) {
      const _e = l[Me], ft = de(_e) ? _e.bind(o, o) : de(_e.get) ? _e.get.bind(o, o) : St, dt = !de(_e) && de(_e.set) ? _e.set.bind(o) : St, Tt = zt({
        get: ft,
        set: dt
      });
      Object.defineProperty(s, Me, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (bt) => Tt.value = bt
      });
    }
  if (p)
    for (const Me in p)
      eu(p[Me], s, o, Me);
  if (m) {
    const Me = de(m) ? m.call(o) : m;
    Reflect.ownKeys(Me).forEach((_e) => {
      vc(_e, Me[_e]);
    });
  }
  x && Fs(x, e, "c");
  function We(Me, _e) {
    le(_e) ? _e.forEach((ft) => Me(ft.bind(o))) : _e && Me(_e.bind(o));
  }
  if (We(nc, C), We(Za, K), We(rc, M), We(oc, D), We(Zl, G), We(ec, Ee), We(lc, _t), We(uc, Ce), We(ac, Ie), We(ic, ye), We(es, ae), We(sc, Dn), le(At))
    if (At.length) {
      const Me = e.exposed || (e.exposed = {});
      At.forEach((_e) => {
        Object.defineProperty(Me, _e, {
          get: () => o[_e],
          set: (ft) => o[_e] = ft
        });
      });
    } else e.exposed || (e.exposed = {});
  Ae && e.render === St && (e.render = Ae), Zt != null && (e.inheritAttrs = Zt), Ct && (e.components = Ct), vt && (e.directives = vt), Dn && za(e);
}
function pc(e, n, o = St) {
  le(e) && (e = Mi(e));
  for (const s in e) {
    const a = e[s];
    let l;
    Le(a) ? "default" in a ? l = ho(
      a.from || s,
      a.default,
      !0
    ) : l = ho(a.from || s) : l = ho(a), tt(l) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (f) => l.value = f
    }) : n[s] = l;
  }
}
function Fs(e, n, o) {
  Ht(
    le(e) ? e.map((s) => s.bind(n.proxy)) : e.bind(n.proxy),
    n,
    o
  );
}
function eu(e, n, o, s) {
  let a = s.includes(".") ? hu(o, s) : () => o[s];
  if (Ge(e)) {
    const l = n[e];
    de(l) && gn(a, l);
  } else if (de(e))
    gn(a, e.bind(o));
  else if (Le(e))
    if (le(e))
      e.forEach((l) => eu(l, n, o, s));
    else {
      const l = de(e.handler) ? e.handler.bind(o) : n[e.handler];
      de(l) && gn(a, l, e);
    }
}
function tu(e) {
  const n = e.type, { mixins: o, extends: s } = n, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: f }
  } = e.appContext, p = l.get(n);
  let m;
  return p ? m = p : !a.length && !o && !s ? m = n : (m = {}, a.length && a.forEach(
    (A) => xo(m, A, f, !0)
  ), xo(m, n, f)), Le(n) && l.set(n, m), m;
}
function xo(e, n, o, s = !1) {
  const { mixins: a, extends: l } = n;
  l && xo(e, l, o, !0), a && a.forEach(
    (f) => xo(e, f, o, !0)
  );
  for (const f in n)
    if (!(s && f === "expose")) {
      const p = hc[f] || o && o[f];
      e[f] = p ? p(e[f], n[f]) : n[f];
    }
  return e;
}
const hc = {
  data: Vs,
  props: Gs,
  emits: Gs,
  // objects
  methods: _r,
  computed: _r,
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
  components: _r,
  directives: _r,
  // watch
  watch: gc,
  // provide / inject
  provide: Vs,
  inject: mc
};
function Vs(e, n) {
  return n ? e ? function() {
    return st(
      de(e) ? e.call(this, this) : e,
      de(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function mc(e, n) {
  return _r(Mi(e), Mi(n));
}
function Mi(e) {
  if (le(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++)
      n[e[o]] = e[o];
    return n;
  }
  return e;
}
function lt(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function _r(e, n) {
  return e ? st(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Gs(e, n) {
  return e ? le(e) && le(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : st(
    /* @__PURE__ */ Object.create(null),
    Hs(e),
    Hs(n ?? {})
  ) : n;
}
function gc(e, n) {
  if (!e) return n;
  if (!n) return e;
  const o = st(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    o[s] = lt(e[s], n[s]);
  return o;
}
function nu() {
  return {
    app: null,
    config: {
      isNativeTag: el,
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
    de(s) || (s = st({}, s)), a != null && !Le(a) && (a = null);
    const l = nu(), f = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const A = l.app = {
      _uid: yc++,
      _component: s,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: tf,
      get config() {
        return l.config;
      },
      set config(x) {
      },
      use(x, ...C) {
        return f.has(x) || (x && de(x.install) ? (f.add(x), x.install(A, ...C)) : de(x) && (f.add(x), x(A, ...C))), A;
      },
      mixin(x) {
        return l.mixins.includes(x) || l.mixins.push(x), A;
      },
      component(x, C) {
        return C ? (l.components[x] = C, A) : l.components[x];
      },
      directive(x, C) {
        return C ? (l.directives[x] = C, A) : l.directives[x];
      },
      mount(x, C, K) {
        if (!m) {
          const M = A._ceVNode || It(s, a);
          return M.appContext = l, K === !0 ? K = "svg" : K === !1 && (K = void 0), e(M, x, K), m = !0, A._container = x, x.__vue_app__ = A, Bo(M.component);
        }
      },
      onUnmount(x) {
        p.push(x);
      },
      unmount() {
        m && (Ht(
          p,
          A._instance,
          16
        ), e(null, A._container), delete A._container.__vue_app__);
      },
      provide(x, C) {
        return l.provides[x] = C, A;
      },
      runWithContext(x) {
        const C = Qn;
        Qn = A;
        try {
          return x();
        } finally {
          Qn = C;
        }
      }
    };
    return A;
  };
}
let Qn = null;
function vc(e, n) {
  if (et) {
    let o = et.provides;
    const s = et.parent && et.parent.provides;
    s === o && (o = et.provides = Object.create(s)), o[e] = n;
  }
}
function ho(e, n, o = !1) {
  const s = et || gt;
  if (s || Qn) {
    let a = Qn ? Qn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return o && de(n) ? n.call(s && s.proxy) : n;
  }
}
const ru = {}, ou = () => Object.create(ru), iu = (e) => Object.getPrototypeOf(e) === ru;
function bc(e, n, o, s = !1) {
  const a = {}, l = ou();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), su(e, n, a, l);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  o ? e.props = s ? a : kl(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function wc(e, n, o, s) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: f }
  } = e, p = we(a), [m] = e.propsOptions;
  let A = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const x = e.vnode.dynamicProps;
      for (let C = 0; C < x.length; C++) {
        let K = x[C];
        if (jo(e.emitsOptions, K))
          continue;
        const M = n[K];
        if (m)
          if (Ne(l, K))
            M !== l[K] && (l[K] = M, A = !0);
          else {
            const D = yn(K);
            a[D] = ji(
              m,
              p,
              D,
              M,
              e,
              !1
            );
          }
        else
          M !== l[K] && (l[K] = M, A = !0);
      }
    }
  } else {
    su(e, n, a, l) && (A = !0);
    let x;
    for (const C in p)
      (!n || // for camelCase
      !Ne(n, C) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((x = Pn(C)) === C || !Ne(n, x))) && (m ? o && // for camelCase
      (o[C] !== void 0 || // for kebab-case
      o[x] !== void 0) && (a[C] = ji(
        m,
        p,
        C,
        void 0,
        e,
        !0
      )) : delete a[C]);
    if (l !== p)
      for (const C in l)
        (!n || !Ne(n, C)) && (delete l[C], A = !0);
  }
  A && Yt(e.attrs, "set", "");
}
function su(e, n, o, s) {
  const [a, l] = e.propsOptions;
  let f = !1, p;
  if (n)
    for (let m in n) {
      if (vr(m))
        continue;
      const A = n[m];
      let x;
      a && Ne(a, x = yn(m)) ? !l || !l.includes(x) ? o[x] = A : (p || (p = {}))[x] = A : jo(e.emitsOptions, m) || (!(m in s) || A !== s[m]) && (s[m] = A, f = !0);
    }
  if (l) {
    const m = we(o), A = p || Pe;
    for (let x = 0; x < l.length; x++) {
      const C = l[x];
      o[C] = ji(
        a,
        m,
        C,
        A[C],
        e,
        !Ne(A, C)
      );
    }
  }
  return f;
}
function ji(e, n, o, s, a, l) {
  const f = e[o];
  if (f != null) {
    const p = Ne(f, "default");
    if (p && s === void 0) {
      const m = f.default;
      if (f.type !== Function && !f.skipFactory && de(m)) {
        const { propsDefaults: A } = a;
        if (o in A)
          s = A[o];
        else {
          const x = jr(a);
          s = A[o] = m.call(
            null,
            n
          ), x();
        }
      } else
        s = m;
      a.ce && a.ce._setProp(o, s);
    }
    f[
      0
      /* shouldCast */
    ] && (l && !p ? s = !1 : f[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Pn(o)) && (s = !0));
  }
  return s;
}
const Ec = /* @__PURE__ */ new WeakMap();
function au(e, n, o = !1) {
  const s = o ? Ec : n.propsCache, a = s.get(e);
  if (a)
    return a;
  const l = e.props, f = {}, p = [];
  let m = !1;
  if (!de(e)) {
    const x = (C) => {
      m = !0;
      const [K, M] = au(C, n, !0);
      st(f, K), M && p.push(...M);
    };
    !o && n.mixins.length && n.mixins.forEach(x), e.extends && x(e.extends), e.mixins && e.mixins.forEach(x);
  }
  if (!l && !m)
    return Le(e) && s.set(e, Yn), Yn;
  if (le(l))
    for (let x = 0; x < l.length; x++) {
      const C = yn(l[x]);
      qs(C) && (f[C] = Pe);
    }
  else if (l)
    for (const x in l) {
      const C = yn(x);
      if (qs(C)) {
        const K = l[x], M = f[C] = le(K) || de(K) ? { type: K } : st({}, K), D = M.type;
        let G = !1, Ee = !0;
        if (le(D))
          for (let me = 0; me < D.length; ++me) {
            const ye = D[me], xe = de(ye) && ye.name;
            if (xe === "Boolean") {
              G = !0;
              break;
            } else xe === "String" && (Ee = !1);
          }
        else
          G = de(D) && D.name === "Boolean";
        M[
          0
          /* shouldCast */
        ] = G, M[
          1
          /* shouldCastTrue */
        ] = Ee, (G || Ne(M, "default")) && p.push(C);
      }
    }
  const A = [f, p];
  return Le(e) && s.set(e, A), A;
}
function qs(e) {
  return e[0] !== "$" && !vr(e);
}
const ts = (e) => e[0] === "_" || e === "$stable", ns = (e) => le(e) ? e.map(Lt) : [Lt(e)], Oc = (e, n, o) => {
  if (n._n)
    return n;
  const s = zl((...a) => (cn.NODE_ENV !== "production" && et && !(o === null && gt) && (o && (o.root, et.root)), ns(n(...a))), o);
  return s._c = !1, s;
}, uu = (e, n, o) => {
  const s = e._ctx;
  for (const a in e) {
    if (ts(a)) continue;
    const l = e[a];
    if (de(l))
      n[a] = Oc(a, l, s);
    else if (l != null) {
      const f = ns(l);
      n[a] = () => f;
    }
  }
}, lu = (e, n) => {
  const o = ns(n);
  e.slots.default = () => o;
}, cu = (e, n, o) => {
  for (const s in n)
    (o || !ts(s)) && (e[s] = n[s]);
}, xc = (e, n, o) => {
  const s = e.slots = ou();
  if (e.vnode.shapeFlag & 32) {
    const a = n.__;
    a && Ni(s, "__", a, !0);
    const l = n._;
    l ? (cu(s, n, o), o && Ni(s, "_", l, !0)) : uu(n, s);
  } else n && lu(e, n);
}, Tc = (e, n, o) => {
  const { vnode: s, slots: a } = e;
  let l = !0, f = Pe;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? o && p === 1 ? l = !1 : cu(a, n, o) : (l = !n.$stable, uu(n, a)), f = n;
  } else n && (lu(e, n), f = { default: 1 });
  if (l)
    for (const p in a)
      !ts(p) && f[p] == null && delete a[p];
}, mt = Kc;
function Rc(e) {
  return Sc(e);
}
function Sc(e, n) {
  const o = Ao();
  o.__VUE__ = !0;
  const {
    insert: s,
    remove: a,
    patchProp: l,
    createElement: f,
    createText: p,
    createComment: m,
    setText: A,
    setElementText: x,
    parentNode: C,
    nextSibling: K,
    setScopeId: M = St,
    insertStaticContent: D
  } = e, G = (g, w, L, H = null, U = null, F = null, Z = void 0, X = null, W = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !gr(g, w) && (H = en(g), bt(g, U, F, !0), g = null), w.patchFlag === -2 && (W = !1, w.dynamicChildren = null);
    const { type: B, ref: se, shapeFlag: J } = w;
    switch (B) {
      case Lo:
        Ee(g, w, L, H);
        break;
      case vn:
        me(g, w, L, H);
        break;
      case xi:
        g == null && ye(w, L, H, Z);
        break;
      case $e:
        Ct(
          g,
          w,
          L,
          H,
          U,
          F,
          Z,
          X,
          W
        );
        break;
      default:
        J & 1 ? Ae(
          g,
          w,
          L,
          H,
          U,
          F,
          Z,
          X,
          W
        ) : J & 6 ? vt(
          g,
          w,
          L,
          H,
          U,
          F,
          Z,
          X,
          W
        ) : (J & 64 || J & 128) && B.process(
          g,
          w,
          L,
          H,
          U,
          F,
          Z,
          X,
          W,
          tn
        );
    }
    se != null && U ? Or(se, g && g.ref, F, w || g, !w) : se == null && g && g.ref != null && Or(g.ref, null, F, g, !0);
  }, Ee = (g, w, L, H) => {
    if (g == null)
      s(
        w.el = p(w.children),
        L,
        H
      );
    else {
      const U = w.el = g.el;
      w.children !== g.children && A(U, w.children);
    }
  }, me = (g, w, L, H) => {
    g == null ? s(
      w.el = m(w.children || ""),
      L,
      H
    ) : w.el = g.el;
  }, ye = (g, w, L, H) => {
    [g.el, g.anchor] = D(
      g.children,
      w,
      L,
      H,
      g.el,
      g.anchor
    );
  }, xe = ({ el: g, anchor: w }, L, H) => {
    let U;
    for (; g && g !== w; )
      U = K(g), s(g, L, H), g = U;
    s(w, L, H);
  }, ae = ({ el: g, anchor: w }) => {
    let L;
    for (; g && g !== w; )
      L = K(g), a(g), g = L;
    a(w);
  }, Ae = (g, w, L, H, U, F, Z, X, W) => {
    w.type === "svg" ? Z = "svg" : w.type === "math" && (Z = "mathml"), g == null ? Ce(
      w,
      L,
      H,
      U,
      F,
      Z,
      X,
      W
    ) : Dn(
      g,
      w,
      U,
      F,
      Z,
      X,
      W
    );
  }, Ce = (g, w, L, H, U, F, Z, X) => {
    let W, B;
    const { props: se, shapeFlag: J, transition: ie, dirs: ue } = g;
    if (W = g.el = f(
      g.type,
      F,
      se && se.is,
      se
    ), J & 8 ? x(W, g.children) : J & 16 && _t(
      g.children,
      W,
      null,
      H,
      U,
      Oi(g, F),
      Z,
      X
    ), ue && Sn(g, null, H, "created"), Ie(W, g, g.scopeId, Z, H), se) {
      for (const ve in se)
        ve !== "value" && !vr(ve) && l(W, ve, null, se[ve], F, H);
      "value" in se && l(W, "value", null, se.value, F), (B = se.onVnodeBeforeMount) && Mt(B, H, g);
    }
    ue && Sn(g, null, H, "beforeMount");
    const pe = Nc(U, ie);
    pe && ie.beforeEnter(W), s(W, w, L), ((B = se && se.onVnodeMounted) || pe || ue) && mt(() => {
      B && Mt(B, H, g), pe && ie.enter(W), ue && Sn(g, null, H, "mounted");
    }, U);
  }, Ie = (g, w, L, H, U) => {
    if (L && M(g, L), H)
      for (let F = 0; F < H.length; F++)
        M(g, H[F]);
    if (U) {
      let F = U.subTree;
      if (w === F || gu(F.type) && (F.ssContent === w || F.ssFallback === w)) {
        const Z = U.vnode;
        Ie(
          g,
          Z,
          Z.scopeId,
          Z.slotScopeIds,
          U.parent
        );
      }
    }
  }, _t = (g, w, L, H, U, F, Z, X, W = 0) => {
    for (let B = W; B < g.length; B++) {
      const se = g[B] = X ? dn(g[B]) : Lt(g[B]);
      G(
        null,
        se,
        w,
        L,
        H,
        U,
        F,
        Z,
        X
      );
    }
  }, Dn = (g, w, L, H, U, F, Z) => {
    const X = w.el = g.el;
    let { patchFlag: W, dynamicChildren: B, dirs: se } = w;
    W |= g.patchFlag & 16;
    const J = g.props || Pe, ie = w.props || Pe;
    let ue;
    if (L && Nn(L, !1), (ue = ie.onVnodeBeforeUpdate) && Mt(ue, L, w, g), se && Sn(w, g, L, "beforeUpdate"), L && Nn(L, !0), (J.innerHTML && ie.innerHTML == null || J.textContent && ie.textContent == null) && x(X, ""), B ? At(
      g.dynamicChildren,
      B,
      X,
      L,
      H,
      Oi(w, U),
      F
    ) : Z || _e(
      g,
      w,
      X,
      null,
      L,
      H,
      Oi(w, U),
      F,
      !1
    ), W > 0) {
      if (W & 16)
        Zt(X, J, ie, L, U);
      else if (W & 2 && J.class !== ie.class && l(X, "class", null, ie.class, U), W & 4 && l(X, "style", J.style, ie.style, U), W & 8) {
        const pe = w.dynamicProps;
        for (let ve = 0; ve < pe.length; ve++) {
          const Oe = pe[ve], qe = J[Oe], Ye = ie[Oe];
          (Ye !== qe || Oe === "value") && l(X, Oe, qe, Ye, U, L);
        }
      }
      W & 1 && g.children !== w.children && x(X, w.children);
    } else !Z && B == null && Zt(X, J, ie, L, U);
    ((ue = ie.onVnodeUpdated) || se) && mt(() => {
      ue && Mt(ue, L, w, g), se && Sn(w, g, L, "updated");
    }, H);
  }, At = (g, w, L, H, U, F, Z) => {
    for (let X = 0; X < w.length; X++) {
      const W = g[X], B = w[X], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gr(W, B) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? C(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          L
        )
      );
      G(
        W,
        B,
        se,
        null,
        H,
        U,
        F,
        Z,
        !0
      );
    }
  }, Zt = (g, w, L, H, U) => {
    if (w !== L) {
      if (w !== Pe)
        for (const F in w)
          !vr(F) && !(F in L) && l(
            g,
            F,
            w[F],
            null,
            U,
            H
          );
      for (const F in L) {
        if (vr(F)) continue;
        const Z = L[F], X = w[F];
        Z !== X && F !== "value" && l(g, F, X, Z, U, H);
      }
      "value" in L && l(g, "value", w.value, L.value, U);
    }
  }, Ct = (g, w, L, H, U, F, Z, X, W) => {
    const B = w.el = g ? g.el : p(""), se = w.anchor = g ? g.anchor : p("");
    let { patchFlag: J, dynamicChildren: ie, slotScopeIds: ue } = w;
    ue && (X = X ? X.concat(ue) : ue), g == null ? (s(B, L, H), s(se, L, H), _t(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      L,
      se,
      U,
      F,
      Z,
      X,
      W
    )) : J > 0 && J & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (At(
      g.dynamicChildren,
      ie,
      L,
      U,
      F,
      Z,
      X
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || U && w === U.subTree) && fu(
      g,
      w,
      !0
      /* shallow */
    )) : _e(
      g,
      w,
      L,
      se,
      U,
      F,
      Z,
      X,
      W
    );
  }, vt = (g, w, L, H, U, F, Z, X, W) => {
    w.slotScopeIds = X, g == null ? w.shapeFlag & 512 ? U.ctx.activate(
      w,
      L,
      H,
      Z,
      W
    ) : rr(
      w,
      L,
      H,
      U,
      F,
      Z,
      W
    ) : Mn(g, w, W);
  }, rr = (g, w, L, H, U, F, Z) => {
    const X = g.component = $c(
      g,
      H,
      U
    );
    if (Ja(g) && (X.ctx.renderer = tn), Wc(X, !1, Z), X.asyncDep) {
      if (U && U.registerDep(X, We, Z), !g.el) {
        const W = X.subTree = It(vn);
        me(null, W, w, L);
      }
    } else
      We(
        X,
        g,
        w,
        L,
        U,
        F,
        Z
      );
  }, Mn = (g, w, L) => {
    const H = w.component = g.component;
    if (Lc(g, w, L))
      if (H.asyncDep && !H.asyncResolved) {
        Me(H, w, L);
        return;
      } else
        H.next = w, H.update();
    else
      w.el = g.el, H.vnode = w;
  }, We = (g, w, L, H, U, F, Z) => {
    const X = () => {
      if (g.isMounted) {
        let { next: J, bu: ie, u: ue, parent: pe, vnode: ve } = g;
        {
          const Xe = du(g);
          if (Xe) {
            J && (J.el = ve.el, Me(g, J, Z)), Xe.asyncDep.then(() => {
              g.isUnmounted || X();
            });
            return;
          }
        }
        let Oe = J, qe;
        Nn(g, !1), J ? (J.el = ve.el, Me(g, J, Z)) : J = ve, ie && po(ie), (qe = J.props && J.props.onVnodeBeforeUpdate) && Mt(qe, pe, J, ve), Nn(g, !0);
        const Ye = Ws(g), at = g.subTree;
        g.subTree = Ye, G(
          at,
          Ye,
          // parent may have changed if it's in a teleport
          C(at.el),
          // anchor may have changed if it's in a fragment
          en(at),
          g,
          U,
          F
        ), J.el = Ye.el, Oe === null && Bc(g, Ye.el), ue && mt(ue, U), (qe = J.props && J.props.onVnodeUpdated) && mt(
          () => Mt(qe, pe, J, ve),
          U
        );
      } else {
        let J;
        const { el: ie, props: ue } = w, { bm: pe, m: ve, parent: Oe, root: qe, type: Ye } = g, at = xr(w);
        Nn(g, !1), pe && po(pe), !at && (J = ue && ue.onVnodeBeforeMount) && Mt(J, Oe, w), Nn(g, !0);
        {
          qe.ce && // @ts-expect-error _def is private
          qe.ce._def.shadowRoot !== !1 && qe.ce._injectChildStyle(Ye);
          const Xe = g.subTree = Ws(g);
          G(
            null,
            Xe,
            L,
            H,
            g,
            U,
            F
          ), w.el = Xe.el;
        }
        if (ve && mt(ve, U), !at && (J = ue && ue.onVnodeMounted)) {
          const Xe = w;
          mt(
            () => Mt(J, Oe, Xe),
            U
          );
        }
        (w.shapeFlag & 256 || Oe && xr(Oe.vnode) && Oe.vnode.shapeFlag & 256) && g.a && mt(g.a, U), g.isMounted = !0, w = L = H = null;
      }
    };
    g.scope.on();
    const W = g.effect = new Ta(X);
    g.scope.off();
    const B = g.update = W.run.bind(W), se = g.job = W.runIfDirty.bind(W);
    se.i = g, se.id = g.uid, W.scheduler = () => Qi(se), Nn(g, !0), B();
  }, Me = (g, w, L) => {
    w.component = g;
    const H = g.vnode.props;
    g.vnode = w, g.next = null, wc(g, w.props, H, L), Tc(g, w.children, L), Kt(), Us(g), Ut();
  }, _e = (g, w, L, H, U, F, Z, X, W = !1) => {
    const B = g && g.children, se = g ? g.shapeFlag : 0, J = w.children, { patchFlag: ie, shapeFlag: ue } = w;
    if (ie > 0) {
      if (ie & 128) {
        dt(
          B,
          J,
          L,
          H,
          U,
          F,
          Z,
          X,
          W
        );
        return;
      } else if (ie & 256) {
        ft(
          B,
          J,
          L,
          H,
          U,
          F,
          Z,
          X,
          W
        );
        return;
      }
    }
    ue & 8 ? (se & 16 && wt(B, U, F), J !== B && x(L, J)) : se & 16 ? ue & 16 ? dt(
      B,
      J,
      L,
      H,
      U,
      F,
      Z,
      X,
      W
    ) : wt(B, U, F, !0) : (se & 8 && x(L, ""), ue & 16 && _t(
      J,
      L,
      H,
      U,
      F,
      Z,
      X,
      W
    ));
  }, ft = (g, w, L, H, U, F, Z, X, W) => {
    g = g || Yn, w = w || Yn;
    const B = g.length, se = w.length, J = Math.min(B, se);
    let ie;
    for (ie = 0; ie < J; ie++) {
      const ue = w[ie] = W ? dn(w[ie]) : Lt(w[ie]);
      G(
        g[ie],
        ue,
        L,
        null,
        U,
        F,
        Z,
        X,
        W
      );
    }
    B > se ? wt(
      g,
      U,
      F,
      !0,
      !1,
      J
    ) : _t(
      w,
      L,
      H,
      U,
      F,
      Z,
      X,
      W,
      J
    );
  }, dt = (g, w, L, H, U, F, Z, X, W) => {
    let B = 0;
    const se = w.length;
    let J = g.length - 1, ie = se - 1;
    for (; B <= J && B <= ie; ) {
      const ue = g[B], pe = w[B] = W ? dn(w[B]) : Lt(w[B]);
      if (gr(ue, pe))
        G(
          ue,
          pe,
          L,
          null,
          U,
          F,
          Z,
          X,
          W
        );
      else
        break;
      B++;
    }
    for (; B <= J && B <= ie; ) {
      const ue = g[J], pe = w[ie] = W ? dn(w[ie]) : Lt(w[ie]);
      if (gr(ue, pe))
        G(
          ue,
          pe,
          L,
          null,
          U,
          F,
          Z,
          X,
          W
        );
      else
        break;
      J--, ie--;
    }
    if (B > J) {
      if (B <= ie) {
        const ue = ie + 1, pe = ue < se ? w[ue].el : H;
        for (; B <= ie; )
          G(
            null,
            w[B] = W ? dn(w[B]) : Lt(w[B]),
            L,
            pe,
            U,
            F,
            Z,
            X,
            W
          ), B++;
      }
    } else if (B > ie)
      for (; B <= J; )
        bt(g[B], U, F, !0), B++;
    else {
      const ue = B, pe = B, ve = /* @__PURE__ */ new Map();
      for (B = pe; B <= ie; B++) {
        const Ue = w[B] = W ? dn(w[B]) : Lt(w[B]);
        Ue.key != null && ve.set(Ue.key, B);
      }
      let Oe, qe = 0;
      const Ye = ie - pe + 1;
      let at = !1, Xe = 0;
      const Pt = new Array(Ye);
      for (B = 0; B < Ye; B++) Pt[B] = 0;
      for (B = ue; B <= J; B++) {
        const Ue = g[B];
        if (qe >= Ye) {
          bt(Ue, U, F, !0);
          continue;
        }
        let re;
        if (Ue.key != null)
          re = ve.get(Ue.key);
        else
          for (Oe = pe; Oe <= ie; Oe++)
            if (Pt[Oe - pe] === 0 && gr(Ue, w[Oe])) {
              re = Oe;
              break;
            }
        re === void 0 ? bt(Ue, U, F, !0) : (Pt[re - pe] = B + 1, re >= Xe ? Xe = re : at = !0, G(
          Ue,
          w[re],
          L,
          null,
          U,
          F,
          Z,
          X,
          W
        ), qe++);
      }
      const Ln = at ? Ic(Pt) : Yn;
      for (Oe = Ln.length - 1, B = Ye - 1; B >= 0; B--) {
        const Ue = pe + B, re = w[Ue], nn = Ue + 1 < se ? w[Ue + 1].el : H;
        Pt[B] === 0 ? G(
          null,
          re,
          L,
          nn,
          U,
          F,
          Z,
          X,
          W
        ) : at && (Oe < 0 || B !== Ln[Oe] ? Tt(re, L, nn, 2) : Oe--);
      }
    }
  }, Tt = (g, w, L, H, U = null) => {
    const { el: F, type: Z, transition: X, children: W, shapeFlag: B } = g;
    if (B & 6) {
      Tt(g.component.subTree, w, L, H);
      return;
    }
    if (B & 128) {
      g.suspense.move(w, L, H);
      return;
    }
    if (B & 64) {
      Z.move(g, w, L, tn);
      return;
    }
    if (Z === $e) {
      s(F, w, L);
      for (let J = 0; J < W.length; J++)
        Tt(W[J], w, L, H);
      s(g.anchor, w, L);
      return;
    }
    if (Z === xi) {
      xe(g, w, L);
      return;
    }
    if (H !== 2 && B & 1 && X)
      if (H === 0)
        X.beforeEnter(F), s(F, w, L), mt(() => X.enter(F), U);
      else {
        const { leave: J, delayLeave: ie, afterLeave: ue } = X, pe = () => {
          g.ctx.isUnmounted ? a(F) : s(F, w, L);
        }, ve = () => {
          J(F, () => {
            pe(), ue && ue();
          });
        };
        ie ? ie(F, pe, ve) : ve();
      }
    else
      s(F, w, L);
  }, bt = (g, w, L, H = !1, U = !1) => {
    const {
      type: F,
      props: Z,
      ref: X,
      children: W,
      dynamicChildren: B,
      shapeFlag: se,
      patchFlag: J,
      dirs: ie,
      cacheIndex: ue
    } = g;
    if (J === -2 && (U = !1), X != null && (Kt(), Or(X, null, L, g, !0), Ut()), ue != null && (w.renderCache[ue] = void 0), se & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const pe = se & 1 && ie, ve = !xr(g);
    let Oe;
    if (ve && (Oe = Z && Z.onVnodeBeforeUnmount) && Mt(Oe, w, g), se & 6)
      jn(g.component, L, H);
    else {
      if (se & 128) {
        g.suspense.unmount(L, H);
        return;
      }
      pe && Sn(g, null, w, "beforeUnmount"), se & 64 ? g.type.remove(
        g,
        w,
        L,
        tn,
        H
      ) : B && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !B.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== $e || J > 0 && J & 64) ? wt(
        B,
        w,
        L,
        !1,
        !0
      ) : (F === $e && J & 384 || !U && se & 16) && wt(W, w, L), H && Ft(g);
    }
    (ve && (Oe = Z && Z.onVnodeUnmounted) || pe) && mt(() => {
      Oe && Mt(Oe, w, g), pe && Sn(g, null, w, "unmounted");
    }, L);
  }, Ft = (g) => {
    const { type: w, el: L, anchor: H, transition: U } = g;
    if (w === $e) {
      Lr(L, H);
      return;
    }
    if (w === xi) {
      ae(g);
      return;
    }
    const F = () => {
      a(L), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (g.shapeFlag & 1 && U && !U.persisted) {
      const { leave: Z, delayLeave: X } = U, W = () => Z(L, F);
      X ? X(g.el, F, W) : W();
    } else
      F();
  }, Lr = (g, w) => {
    let L;
    for (; g !== w; )
      L = K(g), a(g), g = L;
    a(w);
  }, jn = (g, w, L) => {
    const {
      bum: H,
      scope: U,
      job: F,
      subTree: Z,
      um: X,
      m: W,
      a: B,
      parent: se,
      slots: { __: J }
    } = g;
    $s(W), $s(B), H && po(H), se && le(J) && J.forEach((ie) => {
      se.renderCache[ie] = void 0;
    }), U.stop(), F && (F.flags |= 8, bt(Z, g, w, L)), X && mt(X, w), mt(() => {
      g.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, wt = (g, w, L, H = !1, U = !1, F = 0) => {
    for (let Z = F; Z < g.length; Z++)
      bt(g[Z], w, L, H, U);
  }, en = (g) => {
    if (g.shapeFlag & 6)
      return en(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = K(g.anchor || g.el), L = w && w[Jl];
    return L ? K(L) : w;
  };
  let or = !1;
  const oe = (g, w, L) => {
    g == null ? w._vnode && bt(w._vnode, null, null, !0) : G(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      L
    ), w._vnode = g, or || (or = !0, Us(), Wa(), or = !1);
  }, tn = {
    p: G,
    um: bt,
    m: Tt,
    r: Ft,
    mt: rr,
    mc: _t,
    pc: _e,
    pbc: At,
    n: en,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: _c(oe)
  };
}
function Oi({ type: e, props: n }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : o;
}
function Nn({ effect: e, job: n }, o) {
  o ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Nc(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function fu(e, n, o = !1) {
  const s = e.children, a = n.children;
  if (le(s) && le(a))
    for (let l = 0; l < s.length; l++) {
      const f = s[l];
      let p = a[l];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = a[l] = dn(a[l]), p.el = f.el), !o && p.patchFlag !== -2 && fu(f, p)), p.type === Lo && (p.el = f.el), p.type === vn && !p.el && (p.el = f.el);
    }
}
function Ic(e) {
  const n = e.slice(), o = [0];
  let s, a, l, f, p;
  const m = e.length;
  for (s = 0; s < m; s++) {
    const A = e[s];
    if (A !== 0) {
      if (a = o[o.length - 1], e[a] < A) {
        n[s] = a, o.push(s);
        continue;
      }
      for (l = 0, f = o.length - 1; l < f; )
        p = l + f >> 1, e[o[p]] < A ? l = p + 1 : f = p;
      A < e[o[l]] && (l > 0 && (n[s] = o[l - 1]), o[l] = s);
    }
  }
  for (l = o.length, f = o[l - 1]; l-- > 0; )
    o[l] = f, f = n[f];
  return o;
}
function du(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : du(n);
}
function $s(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Ac = Symbol.for("v-scx"), Cc = () => ho(Ac);
function gn(e, n, o) {
  return pu(e, n, o);
}
function pu(e, n, o = Pe) {
  const { immediate: s, deep: a, flush: l, once: f } = o, p = st({}, o), m = n && s || !n && l !== "post";
  let A;
  if (Pr) {
    if (l === "sync") {
      const M = Cc();
      A = M.__watcherHandles || (M.__watcherHandles = []);
    } else if (!m) {
      const M = () => {
      };
      return M.stop = St, M.resume = St, M.pause = St, M;
    }
  }
  const x = et;
  p.call = (M, D, G) => Ht(M, x, D, G);
  let C = !1;
  l === "post" ? p.scheduler = (M) => {
    mt(M, x && x.suspense);
  } : l !== "sync" && (C = !0, p.scheduler = (M, D) => {
    D ? M() : Qi(M);
  }), p.augmentJob = (M) => {
    n && (M.flags |= 4), C && (M.flags |= 2, x && (M.id = x.uid, M.i = x));
  };
  const K = Hl(e, n, p);
  return Pr && (A ? A.push(K) : m && K()), K;
}
function Pc(e, n, o) {
  const s = this.proxy, a = Ge(e) ? e.includes(".") ? hu(s, e) : () => s[e] : e.bind(s, s);
  let l;
  de(n) ? l = n : (l = n.handler, o = n);
  const f = jr(this), p = pu(a, l.bind(s), o);
  return f(), p;
}
function hu(e, n) {
  const o = n.split(".");
  return () => {
    let s = e;
    for (let a = 0; a < o.length && s; a++)
      s = s[o[a]];
    return s;
  };
}
const kc = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${yn(n)}Modifiers`] || e[`${Pn(n)}Modifiers`];
function Dc(e, n, ...o) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Pe;
  let a = o;
  const l = n.startsWith("update:"), f = l && kc(s, n.slice(7));
  f && (f.trim && (a = o.map((x) => Ge(x) ? x.trim() : x)), f.number && (a = o.map(vo)));
  let p, m = s[p = gi(n)] || // also try camelCase event handler (#2249)
  s[p = gi(yn(n))];
  !m && l && (m = s[p = gi(Pn(n))]), m && Ht(
    m,
    e,
    6,
    a
  );
  const A = s[p + "Once"];
  if (A) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[p])
      return;
    e.emitted[p] = !0, Ht(
      A,
      e,
      6,
      a
    );
  }
}
function mu(e, n, o = !1) {
  const s = n.emitsCache, a = s.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let f = {}, p = !1;
  if (!de(e)) {
    const m = (A) => {
      const x = mu(A, n, !0);
      x && (p = !0, st(f, x));
    };
    !o && n.mixins.length && n.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !p ? (Le(e) && s.set(e, null), null) : (le(l) ? l.forEach((m) => f[m] = null) : st(f, l), Le(e) && s.set(e, f), f);
}
function jo(e, n) {
  return !e || !No(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Ne(e, n[0].toLowerCase() + n.slice(1)) || Ne(e, Pn(n)) || Ne(e, n));
}
function Ws(e) {
  const {
    type: n,
    vnode: o,
    proxy: s,
    withProxy: a,
    propsOptions: [l],
    slots: f,
    attrs: p,
    emit: m,
    render: A,
    renderCache: x,
    props: C,
    data: K,
    setupState: M,
    ctx: D,
    inheritAttrs: G
  } = e, Ee = Oo(e);
  let me, ye;
  try {
    if (o.shapeFlag & 4) {
      const ae = a || s, Ae = cn.NODE_ENV !== "production" && M.__isScriptSetup ? new Proxy(ae, {
        get(Ce, Ie, _t) {
          return Fl(
            `Property '${String(
              Ie
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ce, Ie, _t);
        }
      }) : ae;
      me = Lt(
        A.call(
          Ae,
          ae,
          x,
          cn.NODE_ENV !== "production" ? co(C) : C,
          M,
          K,
          D
        )
      ), ye = p;
    } else {
      const ae = n;
      cn.NODE_ENV, me = Lt(
        ae.length > 1 ? ae(
          cn.NODE_ENV !== "production" ? co(C) : C,
          cn.NODE_ENV !== "production" ? {
            get attrs() {
              return co(p);
            },
            slots: f,
            emit: m
          } : { attrs: p, slots: f, emit: m }
        ) : ae(
          cn.NODE_ENV !== "production" ? co(C) : C,
          null
        )
      ), ye = n.props ? p : Mc(p);
    }
  } catch (ae) {
    Rr.length = 0, Do(ae, e, 1), me = It(vn);
  }
  let xe = me;
  if (ye && G !== !1) {
    const ae = Object.keys(ye), { shapeFlag: Ae } = xe;
    ae.length && Ae & 7 && (l && ae.some(Hi) && (ye = jc(
      ye,
      l
    )), xe = Zn(xe, ye, !1, !0));
  }
  return o.dirs && (xe = Zn(xe, null, !1, !0), xe.dirs = xe.dirs ? xe.dirs.concat(o.dirs) : o.dirs), o.transition && Zi(xe, o.transition), me = xe, Oo(Ee), me;
}
const Mc = (e) => {
  let n;
  for (const o in e)
    (o === "class" || o === "style" || No(o)) && ((n || (n = {}))[o] = e[o]);
  return n;
}, jc = (e, n) => {
  const o = {};
  for (const s in e)
    (!Hi(s) || !(s.slice(9) in n)) && (o[s] = e[s]);
  return o;
};
function Lc(e, n, o) {
  const { props: s, children: a, component: l } = e, { props: f, children: p, patchFlag: m } = n, A = l.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? Ys(s, f, A) : !!f;
    if (m & 8) {
      const x = n.dynamicProps;
      for (let C = 0; C < x.length; C++) {
        const K = x[C];
        if (f[K] !== s[K] && !jo(A, K))
          return !0;
      }
    }
  } else
    return (a || p) && (!p || !p.$stable) ? !0 : s === f ? !1 : s ? f ? Ys(s, f, A) : !0 : !!f;
  return !1;
}
function Ys(e, n, o) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    if (n[l] !== e[l] && !jo(o, l))
      return !0;
  }
  return !1;
}
function Bc({ vnode: e, parent: n }, o) {
  for (; n; ) {
    const s = n.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = n.vnode).el = o, n = n.parent;
    else
      break;
  }
}
const gu = (e) => e.__isSuspense;
function Kc(e, n) {
  n && n.pendingBranch ? le(e) ? n.effects.push(...e) : n.effects.push(e) : Xl(e);
}
const $e = Symbol.for("v-fgt"), Lo = Symbol.for("v-txt"), vn = Symbol.for("v-cmt"), xi = Symbol.for("v-stc"), Rr = [];
let yt = null;
function Se(e = !1) {
  Rr.push(yt = e ? null : []);
}
function Uc() {
  Rr.pop(), yt = Rr[Rr.length - 1] || null;
}
let Cr = 1;
function Xs(e, n = !1) {
  Cr += e, e < 0 && yt && n && (yt.hasOnce = !0);
}
function yu(e) {
  return e.dynamicChildren = Cr > 0 ? yt || Yn : null, Uc(), Cr > 0 && yt && yt.push(e), e;
}
function De(e, n, o, s, a, l) {
  return yu(
    z(
      e,
      n,
      o,
      s,
      a,
      l,
      !0
    )
  );
}
function Sr(e, n, o, s, a) {
  return yu(
    It(
      e,
      n,
      o,
      s,
      a,
      !0
    )
  );
}
function _u(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gr(e, n) {
  return e.type === n.type && e.key === n.key;
}
const vu = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: n,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ge(e) || tt(e) || de(e) ? { i: gt, r: e, k: n, f: !!o } : e : null);
function z(e, n = null, o = null, s = 0, a = null, l = e === $e ? 0 : 1, f = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && vu(n),
    ref: n && mo(n),
    scopeId: Xa,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: gt
  };
  return p ? (rs(m, o), l & 128 && e.normalize(m)) : o && (m.shapeFlag |= Ge(o) ? 8 : 16), Cr > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  yt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && yt.push(m), m;
}
const It = Hc;
function Hc(e, n = null, o = null, s = 0, a = null, l = !1) {
  if ((!e || e === cc) && (e = vn), _u(e)) {
    const p = Zn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return o && rs(p, o), Cr > 0 && !l && yt && (p.shapeFlag & 6 ? yt[yt.indexOf(e)] = p : yt.push(p)), p.patchFlag = -2, p;
  }
  if (ef(e) && (e = e.__vccOpts), n) {
    n = Fc(n);
    let { class: p, style: m } = n;
    p && !Ge(p) && (n.class = Gi(p)), Le(m) && (Ji(m) && !le(m) && (m = st({}, m)), n.style = Ke(m));
  }
  const f = Ge(e) ? 1 : gu(e) ? 128 : Ql(e) ? 64 : Le(e) ? 4 : de(e) ? 2 : 0;
  return z(
    e,
    n,
    o,
    s,
    a,
    f,
    l,
    !0
  );
}
function Fc(e) {
  return e ? Ji(e) || iu(e) ? st({}, e) : e : null;
}
function Zn(e, n, o = !1, s = !1) {
  const { props: a, ref: l, patchFlag: f, children: p, transition: m } = e, A = n ? Vc(a || {}, n) : a, x = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: A,
    key: A && vu(A),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && l ? le(l) ? l.concat(mo(n)) : [l, mo(n)] : mo(n)
    ) : l,
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
    patchFlag: n && e.type !== $e ? f === -1 ? 16 : f | 16 : f,
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
    ssContent: e.ssContent && Zn(e.ssContent),
    ssFallback: e.ssFallback && Zn(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && s && Zi(
    x,
    m.clone(x)
  ), x;
}
function bu(e = " ", n = 0) {
  return It(Lo, null, e, n);
}
function go(e = "", n = !1) {
  return n ? (Se(), Sr(vn, null, e)) : It(vn, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? It(vn) : le(e) ? It(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _u(e) ? dn(e) : It(Lo, null, String(e));
}
function dn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zn(e);
}
function rs(e, n) {
  let o = 0;
  const { shapeFlag: s } = e;
  if (n == null)
    n = null;
  else if (le(n))
    o = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const a = n.default;
      a && (a._c && (a._d = !1), rs(e, a()), a._c && (a._d = !0));
      return;
    } else {
      o = 32;
      const a = n._;
      !a && !iu(n) ? n._ctx = gt : a === 3 && gt && (gt.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else de(n) ? (n = { default: n, _ctx: gt }, o = 32) : (n = String(n), s & 64 ? (o = 16, n = [bu(n)]) : o = 8);
  e.children = n, e.shapeFlag |= o;
}
function Vc(...e) {
  const n = {};
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    for (const a in s)
      if (a === "class")
        n.class !== s.class && (n.class = Gi([n.class, s.class]));
      else if (a === "style")
        n.style = Ke([n.style, s.style]);
      else if (No(a)) {
        const l = n[a], f = s[a];
        f && l !== f && !(le(l) && l.includes(f)) && (n[a] = l ? [].concat(l, f) : f);
      } else a !== "" && (n[a] = s[a]);
  }
  return n;
}
function Mt(e, n, o, s = null) {
  Ht(e, n, 7, [
    o,
    s
  ]);
}
const Gc = nu();
let qc = 0;
function $c(e, n, o) {
  const s = e.type, a = (n ? n.appContext : e.appContext) || Gc, l = {
    uid: qc++,
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
    scope: new pl(
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
    propsOptions: au(s, a),
    emitsOptions: mu(s, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Pe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Pe,
    data: Pe,
    props: Pe,
    attrs: Pe,
    slots: Pe,
    refs: Pe,
    setupState: Pe,
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
  return l.ctx = { _: l }, l.root = n ? n.root : l, l.emit = Dc.bind(null, l), e.ce && e.ce(l), l;
}
let et = null, To, Li;
{
  const e = Ao(), n = (o, s) => {
    let a;
    return (a = e[o]) || (a = e[o] = []), a.push(s), (l) => {
      a.length > 1 ? a.forEach((f) => f(l)) : a[0](l);
    };
  };
  To = n(
    "__VUE_INSTANCE_SETTERS__",
    (o) => et = o
  ), Li = n(
    "__VUE_SSR_SETTERS__",
    (o) => Pr = o
  );
}
const jr = (e) => {
  const n = et;
  return To(e), e.scope.on(), () => {
    e.scope.off(), To(n);
  };
}, zs = () => {
  et && et.scope.off(), To(null);
};
function wu(e) {
  return e.vnode.shapeFlag & 4;
}
let Pr = !1;
function Wc(e, n = !1, o = !1) {
  n && Li(n);
  const { props: s, children: a } = e.vnode, l = wu(e);
  bc(e, s, l, n), xc(e, a, o || n);
  const f = l ? Yc(e, n) : void 0;
  return n && Li(!1), f;
}
function Yc(e, n) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fc);
  const { setup: s } = o;
  if (s) {
    Kt();
    const a = e.setupContext = s.length > 1 ? zc(e) : null, l = jr(e), f = nr(
      s,
      e,
      0,
      [
        e.props,
        a
      ]
    ), p = _a(f);
    if (Ut(), l(), (p || e.sp) && !xr(e) && za(e), p) {
      if (f.then(zs, zs), n)
        return f.then((m) => {
          Js(e, m);
        }).catch((m) => {
          Do(m, e, 0);
        });
      e.asyncDep = f;
    } else
      Js(e, f);
  } else
    Eu(e);
}
function Js(e, n, o) {
  de(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : Le(n) && (e.setupState = Fa(n)), Eu(e);
}
function Eu(e, n, o) {
  const s = e.type;
  e.render || (e.render = s.render || St);
  {
    const a = jr(e);
    Kt();
    try {
      dc(e);
    } finally {
      Ut(), a();
    }
  }
}
const Xc = {
  get(e, n) {
    return it(e, "get", ""), e[n];
  }
};
function zc(e) {
  const n = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Xc),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Bo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fa(Dl(e.exposed)), {
    get(n, o) {
      if (o in n)
        return n[o];
      if (o in Tr)
        return Tr[o](e);
    },
    has(n, o) {
      return o in n || o in Tr;
    }
  })) : e.proxy;
}
const Jc = /(?:^|[-_])(\w)/g, Qc = (e) => e.replace(Jc, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Zc(e, n = !0) {
  return de(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Ou(e, n, o = !1) {
  let s = Zc(n);
  if (!s && n.__file) {
    const a = n.__file.match(/([^/\\]+)\.\w+$/);
    a && (s = a[1]);
  }
  if (!s && e && e.parent) {
    const a = (l) => {
      for (const f in l)
        if (l[f] === n)
          return f;
    };
    s = a(
      e.components || e.parent.type.components
    ) || a(e.appContext.components);
  }
  return s ? Qc(s) : o ? "App" : "Anonymous";
}
function ef(e) {
  return de(e) && "__vccOpts" in e;
}
const zt = (e, n) => Kl(e, n, Pr), tf = "3.5.17";
let Bi;
const Qs = typeof window < "u" && window.trustedTypes;
if (Qs)
  try {
    Bi = /* @__PURE__ */ Qs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const xu = Bi ? (e) => Bi.createHTML(e) : (e) => e, nf = "http://www.w3.org/2000/svg", rf = "http://www.w3.org/1998/Math/MathML", Wt = typeof document < "u" ? document : null, Zs = Wt && /* @__PURE__ */ Wt.createElement("template"), of = {
  insert: (e, n, o) => {
    n.insertBefore(e, o || null);
  },
  remove: (e) => {
    const n = e.parentNode;
    n && n.removeChild(e);
  },
  createElement: (e, n, o, s) => {
    const a = n === "svg" ? Wt.createElementNS(nf, e) : n === "mathml" ? Wt.createElementNS(rf, e) : o ? Wt.createElement(e, { is: o }) : Wt.createElement(e);
    return e === "select" && s && s.multiple != null && a.setAttribute("multiple", s.multiple), a;
  },
  createText: (e) => Wt.createTextNode(e),
  createComment: (e) => Wt.createComment(e),
  setText: (e, n) => {
    e.nodeValue = n;
  },
  setElementText: (e, n) => {
    e.textContent = n;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Wt.querySelector(e),
  setScopeId(e, n) {
    e.setAttribute(n, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, n, o, s, a, l) {
    const f = o ? o.previousSibling : n.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; n.insertBefore(a.cloneNode(!0), o), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      Zs.innerHTML = xu(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const p = Zs.content;
      if (s === "svg" || s === "mathml") {
        const m = p.firstChild;
        for (; m.firstChild; )
          p.appendChild(m.firstChild);
        p.removeChild(m);
      }
      n.insertBefore(p, o);
    }
    return [
      // first
      f ? f.nextSibling : n.firstChild,
      // last
      o ? o.previousSibling : n.lastChild
    ];
  }
}, sf = Symbol("_vtc");
function af(e, n, o) {
  const s = e[sf];
  s && (n = (n ? [n, ...s] : [...s]).join(" ")), n == null ? e.removeAttribute("class") : o ? e.setAttribute("class", n) : e.className = n;
}
const ea = Symbol("_vod"), uf = Symbol("_vsh"), lf = Symbol(""), cf = /(^|;)\s*display\s*:/;
function ff(e, n, o) {
  const s = e.style, a = Ge(o);
  let l = !1;
  if (o && !a) {
    if (n)
      if (Ge(n))
        for (const f of n.split(";")) {
          const p = f.slice(0, f.indexOf(":")).trim();
          o[p] == null && yo(s, p, "");
        }
      else
        for (const f in n)
          o[f] == null && yo(s, f, "");
    for (const f in o)
      f === "display" && (l = !0), yo(s, f, o[f]);
  } else if (a) {
    if (n !== o) {
      const f = s[lf];
      f && (o += ";" + f), s.cssText = o, l = cf.test(o);
    }
  } else n && e.removeAttribute("style");
  ea in e && (e[ea] = l ? s.display : "", e[uf] && (s.display = "none"));
}
const ta = /\s*!important$/;
function yo(e, n, o) {
  if (le(o))
    o.forEach((s) => yo(e, n, s));
  else if (o == null && (o = ""), n.startsWith("--"))
    e.setProperty(n, o);
  else {
    const s = df(e, n);
    ta.test(o) ? e.setProperty(
      Pn(s),
      o.replace(ta, ""),
      "important"
    ) : e[s] = o;
  }
}
const na = ["Webkit", "Moz", "ms"], Ti = {};
function df(e, n) {
  const o = Ti[n];
  if (o)
    return o;
  let s = yn(n);
  if (s !== "filter" && s in e)
    return Ti[n] = s;
  s = wa(s);
  for (let a = 0; a < na.length; a++) {
    const l = na[a] + s;
    if (l in e)
      return Ti[n] = l;
  }
  return n;
}
const ra = "http://www.w3.org/1999/xlink";
function oa(e, n, o, s, a, l = cl(n)) {
  s && n.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ra, n.slice(6, n.length)) : e.setAttributeNS(ra, n, o) : o == null || l && !Ea(o) ? e.removeAttribute(n) : e.setAttribute(
    n,
    l ? "" : Bt(o) ? String(o) : o
  );
}
function ia(e, n, o, s, a) {
  if (n === "innerHTML" || n === "textContent") {
    o != null && (e[n] = n === "innerHTML" ? xu(o) : o);
    return;
  }
  const l = e.tagName;
  if (n === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const p = l === "OPTION" ? e.getAttribute("value") || "" : e.value, m = o == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(o);
    (p !== m || !("_value" in e)) && (e.value = m), o == null && e.removeAttribute(n), e._value = o;
    return;
  }
  let f = !1;
  if (o === "" || o == null) {
    const p = typeof e[n];
    p === "boolean" ? o = Ea(o) : o == null && p === "string" ? (o = "", f = !0) : p === "number" && (o = 0, f = !0);
  }
  try {
    e[n] = o;
  } catch {
  }
  f && e.removeAttribute(a || n);
}
function pn(e, n, o, s) {
  e.addEventListener(n, o, s);
}
function pf(e, n, o, s) {
  e.removeEventListener(n, o, s);
}
const sa = Symbol("_vei");
function hf(e, n, o, s, a = null) {
  const l = e[sa] || (e[sa] = {}), f = l[n];
  if (s && f)
    f.value = s;
  else {
    const [p, m] = mf(n);
    if (s) {
      const A = l[n] = _f(
        s,
        a
      );
      pn(e, p, A, m);
    } else f && (pf(e, p, f, m), l[n] = void 0);
  }
}
const aa = /(?:Once|Passive|Capture)$/;
function mf(e) {
  let n;
  if (aa.test(e)) {
    n = {};
    let s;
    for (; s = e.match(aa); )
      e = e.slice(0, e.length - s[0].length), n[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pn(e.slice(2)), n];
}
let Ri = 0;
const gf = /* @__PURE__ */ Promise.resolve(), yf = () => Ri || (gf.then(() => Ri = 0), Ri = Date.now());
function _f(e, n) {
  const o = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= o.attached)
      return;
    Ht(
      vf(s, o.value),
      n,
      5,
      [s]
    );
  };
  return o.value = e, o.attached = yf(), o;
}
function vf(e, n) {
  if (le(n)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, n.map(
      (s) => (a) => !a._stopped && s && s(a)
    );
  } else
    return n;
}
const ua = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bf = (e, n, o, s, a, l) => {
  const f = a === "svg";
  n === "class" ? af(e, s, f) : n === "style" ? ff(e, o, s) : No(n) ? Hi(n) || hf(e, n, o, s, l) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : wf(e, n, s, f)) ? (ia(e, n, s), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && oa(e, n, s, f, l, n !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(n) || !Ge(s)) ? ia(e, yn(n), s, l, n) : (n === "true-value" ? e._trueValue = s : n === "false-value" && (e._falseValue = s), oa(e, n, s, f));
};
function wf(e, n, o, s) {
  if (s)
    return !!(n === "innerHTML" || n === "textContent" || n in e && ua(n) && de(o));
  if (n === "spellcheck" || n === "draggable" || n === "translate" || n === "autocorrect" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (n === "width" || n === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return ua(n) && Ge(o) ? !1 : n in e;
}
const er = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return le(n) ? (o) => po(n, o) : n;
};
function Ef(e) {
  e.target.composing = !0;
}
function la(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
const Jt = Symbol("_assign"), ca = {
  created(e, { modifiers: { lazy: n, trim: o, number: s } }, a) {
    e[Jt] = er(a);
    const l = s || a.props && a.props.type === "number";
    pn(e, n ? "change" : "input", (f) => {
      if (f.target.composing) return;
      let p = e.value;
      o && (p = p.trim()), l && (p = vo(p)), e[Jt](p);
    }), o && pn(e, "change", () => {
      e.value = e.value.trim();
    }), n || (pn(e, "compositionstart", Ef), pn(e, "compositionend", la), pn(e, "change", la));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, oldValue: o, modifiers: { lazy: s, trim: a, number: l } }, f) {
    if (e[Jt] = er(f), e.composing) return;
    const p = (l || e.type === "number") && !/^0\d/.test(e.value) ? vo(e.value) : e.value, m = n ?? "";
    p !== m && (document.activeElement === e && e.type !== "range" && (s && n === o || a && e.value.trim() === m) || (e.value = m));
  }
}, fa = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, n, o) {
    e[Jt] = er(o), pn(e, "change", () => {
      const s = e._modelValue, a = kr(e), l = e.checked, f = e[Jt];
      if (le(s)) {
        const p = qi(s, a), m = p !== -1;
        if (l && !m)
          f(s.concat(a));
        else if (!l && m) {
          const A = [...s];
          A.splice(p, 1), f(A);
        }
      } else if (tr(s)) {
        const p = new Set(s);
        l ? p.add(a) : p.delete(a), f(p);
      } else
        f(Tu(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: da,
  beforeUpdate(e, n, o) {
    e[Jt] = er(o), da(e, n, o);
  }
};
function da(e, { value: n, oldValue: o }, s) {
  e._modelValue = n;
  let a;
  if (le(n))
    a = qi(n, s.props.value) > -1;
  else if (tr(n))
    a = n.has(s.props.value);
  else {
    if (n === o) return;
    a = Mr(n, Tu(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const yr = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: n, modifiers: { number: o } }, s) {
    const a = tr(n);
    pn(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => o ? vo(kr(f)) : kr(f)
      );
      e[Jt](
        e.multiple ? a ? new Set(l) : l : l[0]
      ), e._assigning = !0, qa(() => {
        e._assigning = !1;
      });
    }), e[Jt] = er(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: n }) {
    pa(e, n);
  },
  beforeUpdate(e, n, o) {
    e[Jt] = er(o);
  },
  updated(e, { value: n }) {
    e._assigning || pa(e, n);
  }
};
function pa(e, n) {
  const o = e.multiple, s = le(n);
  if (!(o && !s && !tr(n))) {
    for (let a = 0, l = e.options.length; a < l; a++) {
      const f = e.options[a], p = kr(f);
      if (o)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? f.selected = n.some((A) => String(A) === String(p)) : f.selected = qi(n, p) > -1;
        } else
          f.selected = n.has(p);
      else if (Mr(kr(f), n)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function kr(e) {
  return "_value" in e ? e._value : e.value;
}
function Tu(e, n) {
  const o = n ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : n;
}
const Of = /* @__PURE__ */ st({ patchProp: bf }, of);
let ha;
function xf() {
  return ha || (ha = Rc(Of));
}
const Tf = (...e) => {
  const n = xf().createApp(...e), { mount: o } = n;
  return n.mount = (s) => {
    const a = Sf(s);
    if (!a) return;
    const l = n._component;
    !de(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = o(a, !1, Rf(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, n;
};
function Rf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sf(e) {
  return Ge(e) ? document.querySelector(e) : e;
}
var Nf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function If(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _o = { exports: {} }, Af = _o.exports, ma;
function Cf() {
  return ma || (ma = 1, function(e, n) {
    (function(o, s) {
      e.exports = s();
    })(Af, function() {
      var o = function(t, r) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
          i.__proto__ = u;
        } || function(i, u) {
          for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (i[c] = u[c]);
        })(t, r);
      }, s = function() {
        return (s = Object.assign || function(t) {
          for (var r, i = 1, u = arguments.length; i < u; i++) for (var c in r = arguments[i]) Object.prototype.hasOwnProperty.call(r, c) && (t[c] = r[c]);
          return t;
        }).apply(this, arguments);
      };
      function a(t, r, i) {
        for (var u, c = 0, d = r.length; c < d; c++) !u && c in r || ((u = u || Array.prototype.slice.call(r, 0, c))[c] = r[c]);
        return t.concat(u || Array.prototype.slice.call(r));
      }
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Nf, f = Object.keys, p = Array.isArray;
      function m(t, r) {
        return typeof r != "object" || f(r).forEach(function(i) {
          t[i] = r[i];
        }), t;
      }
      typeof Promise > "u" || l.Promise || (l.Promise = Promise);
      var A = Object.getPrototypeOf, x = {}.hasOwnProperty;
      function C(t, r) {
        return x.call(t, r);
      }
      function K(t, r) {
        typeof r == "function" && (r = r(A(t))), (typeof Reflect > "u" ? f : Reflect.ownKeys)(r).forEach(function(i) {
          D(t, i, r[i]);
        });
      }
      var M = Object.defineProperty;
      function D(t, r, i, u) {
        M(t, r, m(i && C(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, u));
      }
      function G(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), D(t.prototype, "constructor", t), { extend: K.bind(null, t.prototype) };
        } };
      }
      var Ee = Object.getOwnPropertyDescriptor, me = [].slice;
      function ye(t, r, i) {
        return me.call(t, r, i);
      }
      function xe(t, r) {
        return r(t);
      }
      function ae(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Ae(t) {
        l.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Ce(t, r) {
        if (typeof r == "string" && C(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var i = [], u = 0, c = r.length; u < c; ++u) {
            var d = Ce(t, r[u]);
            i.push(d);
          }
          return i;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var y = t[r.substr(0, h)];
          return y == null ? void 0 : Ce(y, r.substr(h + 1));
        }
      }
      function Ie(t, r, i) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          ae(typeof i != "string" && "length" in i);
          for (var u = 0, c = r.length; u < c; ++u) Ie(t, r[u], i[u]);
        } else {
          var d, h, y = r.indexOf(".");
          y !== -1 ? (d = r.substr(0, y), (h = r.substr(y + 1)) === "" ? i === void 0 ? p(t) && !isNaN(parseInt(d)) ? t.splice(d, 1) : delete t[d] : t[d] = i : Ie(y = !(y = t[d]) || !C(t, d) ? t[d] = {} : y, h, i)) : i === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = i;
        }
      }
      function _t(t) {
        var r, i = {};
        for (r in t) C(t, r) && (i[r] = t[r]);
        return i;
      }
      var Dn = [].concat;
      function At(t) {
        return Dn.apply([], t);
      }
      var pe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(At([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return l[t];
      }), Zt = new Set(pe.map(function(t) {
        return l[t];
      })), Ct = null;
      function vt(t) {
        return Ct = /* @__PURE__ */ new WeakMap(), t = function r(i) {
          if (!i || typeof i != "object") return i;
          var u = Ct.get(i);
          if (u) return u;
          if (p(i)) {
            u = [], Ct.set(i, u);
            for (var c = 0, d = i.length; c < d; ++c) u.push(r(i[c]));
          } else if (Zt.has(i.constructor)) u = i;
          else {
            var h, y = A(i);
            for (h in u = y === Object.prototype ? {} : Object.create(y), Ct.set(i, u), i) C(i, h) && (u[h] = r(i[h]));
          }
          return u;
        }(t), Ct = null, t;
      }
      var rr = {}.toString;
      function Mn(t) {
        return rr.call(t).slice(8, -1);
      }
      var We = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Me = typeof We == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[We]) && r.apply(t);
      } : function() {
        return null;
      };
      function _e(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var ft = {};
      function dt(t) {
        var r, i, u, c;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === ft && typeof t == "string") return [t];
          if (c = Me(t)) {
            for (i = []; !(u = c.next()).done; ) i.push(u.value);
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
      var Tt = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ue = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Et = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ue), bt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(t, r) {
        this.name = t, this.message = r;
      }
      function Lr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(i) {
          return r[i].toString();
        }).filter(function(i, u, c) {
          return c.indexOf(i) === u;
        }).join(`
`);
      }
      function jn(t, r, i, u) {
        this.failures = r, this.failedKeys = u, this.successCount = i, this.message = Lr(t, r);
      }
      function wt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(i) {
          return r[i];
        }), this.failuresByPos = r, this.message = Lr(t, this.failures);
      }
      G(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), G(jn).from(Ft), G(wt).from(Ft);
      var en = Et.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), or = Ft, oe = Et.reduce(function(t, r) {
        var i = r + "Error";
        function u(c, d) {
          this.name = i, c ? typeof c == "string" ? (this.message = "".concat(c).concat(d ? `
 ` + d : ""), this.inner = d || null) : typeof c == "object" && (this.message = "".concat(c.name, " ").concat(c.message), this.inner = c) : (this.message = bt[r] || i, this.inner = null);
        }
        return G(u).from(or), t[r] = u, t;
      }, {});
      oe.Syntax = SyntaxError, oe.Type = TypeError, oe.Range = RangeError;
      var tn = ue.reduce(function(t, r) {
        return t[r + "Error"] = oe[r], t;
      }, {}), ir = Et.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = oe[r]), t;
      }, {});
      function g() {
      }
      function w(t) {
        return t;
      }
      function L(t, r) {
        return t == null || t === w ? r : function(i) {
          return r(t(i));
        };
      }
      function H(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function U(t, r) {
        return t === g ? r : function() {
          var i = t.apply(this, arguments);
          i !== void 0 && (arguments[0] = i);
          var u = this.onsuccess, c = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var d = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? H(u, this.onsuccess) : u), c && (this.onerror = this.onerror ? H(c, this.onerror) : c), d !== void 0 ? d : i;
        };
      }
      function F(t, r) {
        return t === g ? r : function() {
          t.apply(this, arguments);
          var i = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? H(i, this.onsuccess) : i), u && (this.onerror = this.onerror ? H(u, this.onerror) : u);
        };
      }
      function Z(t, r) {
        return t === g ? r : function(i) {
          var u = t.apply(this, arguments);
          m(i, u);
          var c = this.onsuccess, d = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = r.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? H(c, this.onsuccess) : c), d && (this.onerror = this.onerror ? H(d, this.onerror) : d), u === void 0 ? i === void 0 ? void 0 : i : m(u, i);
        };
      }
      function X(t, r) {
        return t === g ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function W(t, r) {
        return t === g ? r : function() {
          var i = t.apply(this, arguments);
          if (i && typeof i.then == "function") {
            for (var u = this, c = arguments.length, d = new Array(c); c--; ) d[c] = arguments[c];
            return i.then(function() {
              return r.apply(u, d);
            });
          }
          return r.apply(this, arguments);
        };
      }
      ir.ModifyError = jn, ir.DexieError = Ft, ir.BulkError = wt;
      var B = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function se(t) {
        B = t;
      }
      var J = {}, ie = 100, pe = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, A(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, A(r), t];
      }(), ue = pe[0], Et = pe[1], pe = pe[2], Et = Et && Et.then, ve = ue && ue.constructor, Oe = !!pe, qe = function(t, r) {
        nn.push([t, r]), at && (queueMicrotask(Au), at = !1);
      }, Ye = !0, at = !0, Xe = [], Pt = [], Ln = w, Ue = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: g, pgp: !1, env: {}, finalize: g }, re = Ue, nn = [], bn = 0, Br = [];
      function te(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = re;
        if (typeof t != "function") {
          if (t !== J) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Uo(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function i(u, c) {
          try {
            c(function(d) {
              if (u._state === null) {
                if (d === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && Bn();
                d && typeof d.then == "function" ? i(u, function(y, v) {
                  d instanceof te ? d._then(y, v) : d.then(y, v);
                }) : (u._state = !0, u._value = d, is(u)), h && Kn();
              }
            }, Uo.bind(null, u));
          } catch (d) {
            Uo(u, d);
          }
        }(this, t);
      }
      var Ko = { get: function() {
        var t = re, r = Fr;
        function i(u, c) {
          var d = this, h = !t.global && (t !== re || r !== Fr), y = h && !on(), v = new te(function(E, T) {
            Ho(d, new os(as(u, t, h, y), as(c, t, h, y), E, T, t));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return i.prototype = J, i;
      }, set: function(t) {
        D(this, "then", t && t.prototype === J ? Ko : { get: function() {
          return t;
        }, set: Ko.set });
      } };
      function os(t, r, i, u, c) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = i, this.reject = u, this.psd = c;
      }
      function Uo(t, r) {
        var i, u;
        Pt.push(r), t._state === null && (i = t._lib && Bn(), r = Ln(r), t._state = !1, t._value = r, u = t, Xe.some(function(c) {
          return c._value === u._value;
        }) || Xe.push(u), is(t), i && Kn());
      }
      function is(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var i = 0, u = r.length; i < u; ++i) Ho(t, r[i]);
        var c = t._PSD;
        --c.ref || c.finalize(), bn === 0 && (++bn, qe(function() {
          --bn == 0 && Fo();
        }, []));
      }
      function Ho(t, r) {
        if (t._state !== null) {
          var i = t._state ? r.onFulfilled : r.onRejected;
          if (i === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++bn, qe(Iu, [i, t, r]);
        } else t._listeners.push(r);
      }
      function Iu(t, r, i) {
        try {
          var u, c = r._value;
          !r._state && Pt.length && (Pt = []), u = B && r._consoleTask ? r._consoleTask.run(function() {
            return t(c);
          }) : t(c), r._state || Pt.indexOf(c) !== -1 || function(d) {
            for (var h = Xe.length; h; ) if (Xe[--h]._value === d._value) return Xe.splice(h, 1);
          }(r), i.resolve(u);
        } catch (d) {
          i.reject(d);
        } finally {
          --bn == 0 && Fo(), --i.psd.ref || i.psd.finalize();
        }
      }
      function Au() {
        wn(Ue, function() {
          Bn() && Kn();
        });
      }
      function Bn() {
        var t = Ye;
        return at = Ye = !1, t;
      }
      function Kn() {
        var t, r, i;
        do
          for (; 0 < nn.length; ) for (t = nn, nn = [], i = t.length, r = 0; r < i; ++r) {
            var u = t[r];
            u[0].apply(null, u[1]);
          }
        while (0 < nn.length);
        at = Ye = !0;
      }
      function Fo() {
        var t = Xe;
        Xe = [], t.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = Br.slice(0), i = r.length; i; ) r[--i]();
      }
      function Kr(t) {
        return new te(J, !1, t);
      }
      function Be(t, r) {
        var i = re;
        return function() {
          var u = Bn(), c = re;
          try {
            return sn(i, !0), t.apply(this, arguments);
          } catch (d) {
            r && r(d);
          } finally {
            sn(c, !1), u && Kn();
          }
        };
      }
      K(te.prototype, { then: Ko, _then: function(t, r) {
        Ho(this, new os(null, null, t, r, re));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, i = arguments[1];
        return typeof r == "function" ? this.then(null, function(u) {
          return (u instanceof r ? i : Kr)(u);
        }) : this.then(null, function(u) {
          return (u && u.name === r ? i : Kr)(u);
        });
      }, finally: function(t) {
        return this.then(function(r) {
          return te.resolve(t()).then(function() {
            return r;
          });
        }, function(r) {
          return te.resolve(t()).then(function() {
            return Kr(r);
          });
        });
      }, timeout: function(t, r) {
        var i = this;
        return t < 1 / 0 ? new te(function(u, c) {
          var d = setTimeout(function() {
            return c(new oe.Timeout(r));
          }, t);
          i.then(u, c).finally(clearTimeout.bind(null, d));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && D(te.prototype, Symbol.toStringTag, "Dexie.Promise"), Ue.env = ss(), K(te, { all: function() {
        var t = dt.apply(null, arguments).map(Vr);
        return new te(function(r, i) {
          t.length === 0 && r([]);
          var u = t.length;
          t.forEach(function(c, d) {
            return te.resolve(c).then(function(h) {
              t[d] = h, --u || r(t);
            }, i);
          });
        });
      }, resolve: function(t) {
        return t instanceof te ? t : t && typeof t.then == "function" ? new te(function(r, i) {
          t.then(r, i);
        }) : new te(J, !0, t);
      }, reject: Kr, race: function() {
        var t = dt.apply(null, arguments).map(Vr);
        return new te(function(r, i) {
          t.map(function(u) {
            return te.resolve(u).then(r, i);
          });
        });
      }, PSD: { get: function() {
        return re;
      }, set: function(t) {
        return re = t;
      } }, totalEchoes: { get: function() {
        return Fr;
      } }, newPSD: rn, usePSD: wn, scheduler: { get: function() {
        return qe;
      }, set: function(t) {
        qe = t;
      } }, rejectionMapper: { get: function() {
        return Ln;
      }, set: function(t) {
        Ln = t;
      } }, follow: function(t, r) {
        return new te(function(i, u) {
          return rn(function(c, d) {
            var h = re;
            h.unhandleds = [], h.onunhandled = d, h.finalize = H(function() {
              var y, v = this;
              y = function() {
                v.unhandleds.length === 0 ? c() : d(v.unhandleds[0]);
              }, Br.push(function E() {
                y(), Br.splice(Br.indexOf(E), 1);
              }), ++bn, qe(function() {
                --bn == 0 && Fo();
              }, []);
            }, h.finalize), t();
          }, r, i, u);
        });
      } }), ve && (ve.allSettled && D(te, "allSettled", function() {
        var t = dt.apply(null, arguments).map(Vr);
        return new te(function(r) {
          t.length === 0 && r([]);
          var i = t.length, u = new Array(i);
          t.forEach(function(c, d) {
            return te.resolve(c).then(function(h) {
              return u[d] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[d] = { status: "rejected", reason: h };
            }).then(function() {
              return --i || r(u);
            });
          });
        });
      }), ve.any && typeof AggregateError < "u" && D(te, "any", function() {
        var t = dt.apply(null, arguments).map(Vr);
        return new te(function(r, i) {
          t.length === 0 && i(new AggregateError([]));
          var u = t.length, c = new Array(u);
          t.forEach(function(d, h) {
            return te.resolve(d).then(function(y) {
              return r(y);
            }, function(y) {
              c[h] = y, --u || i(new AggregateError(c));
            });
          });
        });
      }), ve.withResolvers && (te.withResolvers = ve.withResolvers));
      var ze = { awaits: 0, echoes: 0, id: 0 }, Cu = 0, Ur = [], Hr = 0, Fr = 0, Pu = 0;
      function rn(t, r, i, u) {
        var c = re, d = Object.create(c);
        return d.parent = c, d.ref = 0, d.global = !1, d.id = ++Pu, Ue.env, d.env = Oe ? { Promise: te, PromiseProp: { value: te, configurable: !0, writable: !0 }, all: te.all, race: te.race, allSettled: te.allSettled, any: te.any, resolve: te.resolve, reject: te.reject } : {}, r && m(d, r), ++c.ref, d.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = wn(d, t, i, u), d.ref === 0 && d.finalize(), u;
      }
      function Un() {
        return ze.id || (ze.id = ++Cu), ++ze.awaits, ze.echoes += ie, ze.id;
      }
      function on() {
        return !!ze.awaits && (--ze.awaits == 0 && (ze.id = 0), ze.echoes = ze.awaits * ie, !0);
      }
      function Vr(t) {
        return ze.echoes && t && t.constructor === ve ? (Un(), t.then(function(r) {
          return on(), r;
        }, function(r) {
          return on(), Fe(r);
        })) : t;
      }
      function ku() {
        var t = Ur[Ur.length - 1];
        Ur.pop(), sn(t, !1);
      }
      function sn(t, r) {
        var i, u = re;
        (r ? !ze.echoes || Hr++ && t === re : !Hr || --Hr && t === re) || queueMicrotask(r ? (function(c) {
          ++Fr, ze.echoes && --ze.echoes != 0 || (ze.echoes = ze.awaits = ze.id = 0), Ur.push(re), sn(c, !0);
        }).bind(null, t) : ku), t !== re && (re = t, u === Ue && (Ue.env = ss()), Oe && (i = Ue.env.Promise, r = t.env, (u.global || t.global) && (Object.defineProperty(l, "Promise", r.PromiseProp), i.all = r.all, i.race = r.race, i.resolve = r.resolve, i.reject = r.reject, r.allSettled && (i.allSettled = r.allSettled), r.any && (i.any = r.any))));
      }
      function ss() {
        var t = l.Promise;
        return Oe ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function wn(t, r, i, u, c) {
        var d = re;
        try {
          return sn(t, !0), r(i, u, c);
        } finally {
          sn(d, !1);
        }
      }
      function as(t, r, i, u) {
        return typeof t != "function" ? t : function() {
          var c = re;
          i && Un(), sn(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            sn(c, !1), u && queueMicrotask(on);
          }
        };
      }
      function Vo(t) {
        Promise === ve && ze.echoes === 0 ? Hr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + Et).indexOf("[native code]") === -1 && (Un = on = g);
      var Fe = te.reject, En = "￿", Vt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", us = "String expected.", Hn = [], Gr = "__dbnames", Go = "readonly", qo = "readwrite";
      function On(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var ls = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function qr(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = vt(r))[t], r;
        };
      }
      function cs() {
        throw oe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ge(t, r) {
        try {
          var i = fs(t), u = fs(r);
          if (i !== u) return i === "Array" ? 1 : u === "Array" ? -1 : i === "binary" ? 1 : u === "binary" ? -1 : i === "string" ? 1 : u === "string" ? -1 : i === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(c, d) {
                for (var h = c.length, y = d.length, v = h < y ? h : y, E = 0; E < v; ++E) if (c[E] !== d[E]) return c[E] < d[E] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              }(ds(t), ds(r));
            case "Array":
              return function(c, d) {
                for (var h = c.length, y = d.length, v = h < y ? h : y, E = 0; E < v; ++E) {
                  var T = ge(c[E], d[E]);
                  if (T !== 0) return T;
                }
                return h === y ? 0 : h < y ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function fs(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = Mn(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function ds(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function $r(t, r, i) {
        var u = t.schema.yProps;
        return u ? (r && 0 < i.numFailures && (r = r.filter(function(c, d) {
          return !i.failures[d];
        })), Promise.all(u.map(function(c) {
          return c = c.updatesTable, r ? t.db.table(c).where("k").anyOf(r).delete() : t.db.table(c).clear();
        })).then(function() {
          return i;
        })) : i;
      }
      var ps = (je.prototype._trans = function(t, r, i) {
        var u = this._tx || re.trans, c = this.name, d = B && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(E, T, _) {
          if (!_.schema[c]) throw new oe.NotFound("Table " + c + " not part of transaction");
          return r(_.idbtrans, _);
        }
        var y = Bn();
        try {
          var v = u && u.db._novip === this.db._novip ? u === re.trans ? u._promise(t, h, i) : rn(function() {
            return u._promise(t, h, i);
          }, { trans: u, transless: re.transless || re }) : function E(T, _, N, b) {
            if (T.idbdb && (T._state.openComplete || re.letThrough || T._vip)) {
              var O = T._createTransaction(_, N, T._dbSchema);
              try {
                O.create(), T._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === en.InvalidState && T.isOpen() && 0 < --T._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), T.close({ disableAutoOpen: !1 }), T.open().then(function() {
                  return E(T, _, N, b);
                })) : Fe(S);
              }
              return O._promise(_, function(S, R) {
                return rn(function() {
                  return re.trans = O, b(S, R, O);
                });
              }).then(function(S) {
                if (_ === "readwrite") try {
                  O.idbtrans.commit();
                } catch {
                }
                return _ === "readonly" ? S : O._completion.then(function() {
                  return S;
                });
              });
            }
            if (T._state.openComplete) return Fe(new oe.DatabaseClosed(T._state.dbOpenError));
            if (!T._state.isBeingOpened) {
              if (!T._state.autoOpen) return Fe(new oe.DatabaseClosed());
              T.open().catch(g);
            }
            return T._state.dbReadyPromise.then(function() {
              return E(T, _, N, b);
            });
          }(this.db, t, [this.name], h);
          return d && (v._consoleTask = d, v = v.catch(function(E) {
            return console.trace(E), Fe(E);
          })), v;
        } finally {
          y && Kn();
        }
      }, je.prototype.get = function(t, r) {
        var i = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Fe(new oe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return i.core.get({ trans: u, key: t }).then(function(c) {
            return i.hook.reading.fire(c);
          });
        }).then(r);
      }, je.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (p(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = f(t);
        if (r.length === 1) return this.where(r[0]).equals(t[r[0]]);
        var i = this.schema.indexes.concat(this.schema.primKey).filter(function(y) {
          if (y.compound && r.every(function(E) {
            return 0 <= y.keyPath.indexOf(E);
          })) {
            for (var v = 0; v < r.length; ++v) if (r.indexOf(y.keyPath[v]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(y, v) {
          return y.keyPath.length - v.keyPath.length;
        })[0];
        if (i && this.db._maxKey !== En) {
          var d = i.keyPath.slice(0, r.length);
          return this.where(d).equals(d.map(function(v) {
            return t[v];
          }));
        }
        !i && B && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function c(y, v) {
          return ge(y, v) === 0;
        }
        var h = r.reduce(function(_, v) {
          var E = _[0], T = _[1], _ = u[v], N = t[v];
          return [E || _, E || !_ ? On(T, _ && _.multi ? function(b) {
            return b = Ce(b, v), p(b) && b.some(function(O) {
              return c(N, O);
            });
          } : function(b) {
            return c(N, Ce(b, v));
          }) : T];
        }, [null, null]), d = h[0], h = h[1];
        return d ? this.where(d.name).equals(t[d.keyPath]).filter(h) : i ? this.filter(h) : this.where(r).equals("");
      }, je.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, je.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, je.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, je.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, je.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, je.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, je.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, je.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, p(t) ? "[".concat(t.join("+"), "]") : t));
      }, je.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, je.prototype.mapToClass = function(t) {
        var r, i = this.db, u = this.name;
        function c() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof cs && (function(v, E) {
          if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
          function T() {
            this.constructor = v;
          }
          o(v, E), v.prototype = E === null ? Object.create(E) : (T.prototype = E.prototype, new T());
        }(c, r = t), Object.defineProperty(c.prototype, "db", { get: function() {
          return i;
        }, enumerable: !1, configurable: !0 }), c.prototype.table = function() {
          return u;
        }, t = c);
        for (var d = /* @__PURE__ */ new Set(), h = t.prototype; h; h = A(h)) Object.getOwnPropertyNames(h).forEach(function(v) {
          return d.add(v);
        });
        function y(v) {
          if (!v) return v;
          var E, T = Object.create(t.prototype);
          for (E in v) if (!d.has(E)) try {
            T[E] = v[E];
          } catch {
          }
          return T;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), t;
      }, je.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          m(this, t);
        });
      }, je.prototype.add = function(t, r) {
        var i = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = t;
        return d && c && (h = qr(d)(t)), this._trans("readwrite", function(y) {
          return i.core.mutate({ trans: y, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(y) {
          return y.numFailures ? te.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            Ie(t, d, y);
          } catch {
          }
          return y;
        });
      }, je.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Ce(t, this.schema.primKey.keyPath), t === void 0 ? Fe(new oe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, je.prototype.put = function(t, r) {
        var i = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = t;
        return d && c && (h = qr(d)(t)), this._trans("readwrite", function(y) {
          return i.core.mutate({ trans: y, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(y) {
          return y.numFailures ? te.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            Ie(t, d, y);
          } catch {
          }
          return y;
        });
      }, je.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(i) {
          return r.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(u) {
            return $r(r, [t], u);
          }).then(function(u) {
            return u.numFailures ? te.reject(u.failures[0]) : void 0;
          });
        });
      }, je.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: ls }).then(function(i) {
            return $r(t, null, i);
          });
        }).then(function(r) {
          return r.numFailures ? te.reject(r.failures[0]) : void 0;
        });
      }, je.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(i) {
          return r.core.getMany({ keys: t, trans: i }).then(function(u) {
            return u.map(function(c) {
              return r.hook.reading.fire(c);
            });
          });
        });
      }, je.prototype.bulkAdd = function(t, r, i) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (i = i || (c ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && c) throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && y ? t.map(qr(E)) : t;
          return u.core.mutate({ trans: h, type: "add", keys: c, values: E, wantResults: d }).then(function(O) {
            var _ = O.numFailures, N = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return d ? N : b;
            throw new wt("".concat(u.name, ".bulkAdd(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, je.prototype.bulkPut = function(t, r, i) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (i = i || (c ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && c) throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && y ? t.map(qr(E)) : t;
          return u.core.mutate({ trans: h, type: "put", keys: c, values: E, wantResults: d }).then(function(O) {
            var _ = O.numFailures, N = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return d ? N : b;
            throw new wt("".concat(u.name, ".bulkPut(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, je.prototype.bulkUpdate = function(t) {
        var r = this, i = this.core, u = t.map(function(h) {
          return h.key;
        }), c = t.map(function(h) {
          return h.changes;
        }), d = [];
        return this._trans("readwrite", function(h) {
          return i.getMany({ trans: h, keys: u, cache: "clone" }).then(function(y) {
            var v = [], E = [];
            t.forEach(function(_, N) {
              var b = _.key, O = _.changes, S = y[N];
              if (S) {
                for (var R = 0, I = Object.keys(O); R < I.length; R++) {
                  var P = I[R], k = O[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (ge(k, b) !== 0) throw new oe.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Ie(S, P, k);
                }
                d.push(N), v.push(b), E.push(S);
              }
            });
            var T = v.length;
            return i.mutate({ trans: h, type: "put", keys: v, values: E, updates: { keys: u, changeSpecs: c } }).then(function(_) {
              var N = _.numFailures, b = _.failures;
              if (N === 0) return T;
              for (var O = 0, S = Object.keys(b); O < S.length; O++) {
                var R, I = S[O], P = d[Number(I)];
                P != null && (R = b[I], delete b[I], b[P] = R);
              }
              throw new wt("".concat(r.name, ".bulkUpdate(): ").concat(N, " of ").concat(T, " operations failed"), b);
            });
          });
        });
      }, je.prototype.bulkDelete = function(t) {
        var r = this, i = t.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: t }).then(function(c) {
            return $r(r, t, c);
          });
        }).then(function(h) {
          var c = h.numFailures, d = h.lastResult, h = h.failures;
          if (c === 0) return d;
          throw new wt("".concat(r.name, ".bulkDelete(): ").concat(c, " of ").concat(i, " operations failed"), h);
        });
      }, je);
      function je() {
      }
      function sr(t) {
        function r(h, y) {
          if (y) {
            for (var v = arguments.length, E = new Array(v - 1); --v; ) E[v - 1] = arguments[v];
            return i[h].subscribe.apply(null, E), t;
          }
          if (typeof h == "string") return i[h];
        }
        var i = {};
        r.addEventType = d;
        for (var u = 1, c = arguments.length; u < c; ++u) d(arguments[u]);
        return r;
        function d(h, y, v) {
          if (typeof h != "object") {
            var E;
            y = y || X;
            var T = { subscribers: [], fire: v = v || g, subscribe: function(_) {
              T.subscribers.indexOf(_) === -1 && (T.subscribers.push(_), T.fire = y(T.fire, _));
            }, unsubscribe: function(_) {
              T.subscribers = T.subscribers.filter(function(N) {
                return N !== _;
              }), T.fire = T.subscribers.reduce(y, v);
            } };
            return i[h] = r[h] = T;
          }
          f(E = h).forEach(function(_) {
            var N = E[_];
            if (p(N)) d(_, E[_][0], E[_][1]);
            else {
              if (N !== "asap") throw new oe.InvalidArgument("Invalid event config");
              var b = d(_, w, function() {
                for (var O = arguments.length, S = new Array(O); O--; ) S[O] = arguments[O];
                b.subscribers.forEach(function(R) {
                  Ae(function() {
                    R.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function ar(t, r) {
        return G(r).from({ prototype: t }), r;
      }
      function Fn(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function $o(t, r) {
        t.filter = On(t.filter, r);
      }
      function Wo(t, r, i) {
        var u = t.replayFilter;
        t.replayFilter = u ? function() {
          return On(u(), r());
        } : r, t.justLimit = i && !u;
      }
      function Wr(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var i = r.getIndexByKeyPath(t.index);
        if (!i) throw new oe.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return i;
      }
      function hs(t, r, i) {
        var u = Wr(t, r.schema);
        return r.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: u, range: t.range } });
      }
      function Yr(t, r, i, u) {
        var c = t.replayFilter ? On(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var d = {}, h = function(y, v, E) {
            var T, _;
            c && !c(v, E, function(N) {
              return v.stop(N);
            }, function(N) {
              return v.fail(N);
            }) || ((_ = "" + (T = v.primaryKey)) == "[object ArrayBuffer]" && (_ = "" + new Uint8Array(T)), C(d, _) || (d[_] = !0, r(y, v, E)));
          };
          return Promise.all([t.or._iterate(h, i), ms(hs(t, u, i), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return ms(hs(t, u, i), On(t.algorithm, c), r, !t.keysOnly && t.valueMapper);
      }
      function ms(t, r, i, u) {
        var c = Be(u ? function(d, h, y) {
          return i(u(d), h, y);
        } : i);
        return t.then(function(d) {
          if (d) return d.start(function() {
            var h = function() {
              return d.continue();
            };
            r && !r(d, function(y) {
              return h = y;
            }, function(y) {
              d.stop(y), h = g;
            }, function(y) {
              d.fail(y), h = g;
            }) || c(d.value, d, function(y) {
              return h = y;
            }), h();
          });
        });
      }
      var ur = (gs.prototype.execute = function(t) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var i = r.add;
          if (p(i)) return a(a([], p(t) ? t : [], !0), i).sort();
          if (typeof i == "number") return (Number(t) || 0) + i;
          if (typeof i == "bigint") try {
            return BigInt(t) + i;
          } catch {
            return BigInt(0) + i;
          }
          throw new TypeError("Invalid term ".concat(i));
        }
        if (r.remove !== void 0) {
          var u = r.remove;
          if (p(u)) return p(t) ? t.filter(function(c) {
            return !u.includes(c);
          }).sort() : [];
          if (typeof u == "number") return Number(t) - u;
          if (typeof u == "bigint") try {
            return BigInt(t) - u;
          } catch {
            return BigInt(0) - u;
          }
          throw new TypeError("Invalid subtrahend ".concat(u));
        }
        return i = (i = r.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? r.replacePrefix[1] + t.substring(i.length) : t;
      }, gs);
      function gs(t) {
        this["@@propmod"] = t;
      }
      var Du = (Te.prototype._read = function(t, r) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, Fe.bind(null, i.error)) : i.table._trans("readonly", t).then(r);
      }, Te.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Fe.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Te.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = On(r.algorithm, t);
      }, Te.prototype._iterate = function(t, r) {
        return Yr(this._ctx, t, r, this._ctx.table.core);
      }, Te.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
        return t && m(i, t), r._ctx = i, r;
      }, Te.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Te.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(i) {
          return Yr(r, t, i, r.table.core);
        });
      }, Te.prototype.count = function(t) {
        var r = this;
        return this._read(function(i) {
          var u = r._ctx, c = u.table.core;
          if (Fn(u, !0)) return c.count({ trans: i, query: { index: Wr(u, c.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var d = 0;
          return Yr(u, function() {
            return ++d, !1;
          }, i, c).then(function() {
            return d;
          });
        }).then(t);
      }, Te.prototype.sortBy = function(t, r) {
        var i = t.split(".").reverse(), u = i[0], c = i.length - 1;
        function d(v, E) {
          return E ? d(v[i[E]], E - 1) : v[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(v, E) {
          return ge(d(v, c), d(E, c)) * h;
        }
        return this.toArray(function(v) {
          return v.sort(y);
        }).then(r);
      }, Te.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(i) {
          var u = r._ctx;
          if (u.dir === "next" && Fn(u, !0) && 0 < u.limit) {
            var c = u.valueMapper, d = Wr(u, u.table.core.schema);
            return u.table.core.query({ trans: i, limit: u.limit, values: !0, query: { index: d, range: u.range } }).then(function(y) {
              return y = y.result, c ? y.map(c) : y;
            });
          }
          var h = [];
          return Yr(u, function(y) {
            return h.push(y);
          }, i, u.table.core).then(function() {
            return h;
          });
        }, t);
      }, Te.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Fn(r) ? Wo(r, function() {
          var i = t;
          return function(u, c) {
            return i === 0 || (i === 1 ? --i : c(function() {
              u.advance(i), i = 0;
            }), !1);
          };
        }) : Wo(r, function() {
          var i = t;
          return function() {
            return --i < 0;
          };
        })), this;
      }, Te.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), Wo(this._ctx, function() {
          var r = t;
          return function(i, u, c) {
            return --r <= 0 && u(c), 0 <= r;
          };
        }, !0), this;
      }, Te.prototype.until = function(t, r) {
        return $o(this._ctx, function(i, u, c) {
          return !t(i.value) || (u(c), r);
        }), this;
      }, Te.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Te.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Te.prototype.filter = function(t) {
        var r;
        return $o(this._ctx, function(i) {
          return t(i.value);
        }), (r = this._ctx).isMatch = On(r.isMatch, t), this;
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
        return r.keysOnly = !r.isMatch, this.each(function(i, u) {
          t(u.key, u);
        });
      }, Te.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Te.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, u) {
          t(u.primaryKey, u);
        });
      }, Te.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(u, c) {
          i.push(c.key);
        }).then(function() {
          return i;
        }).then(t);
      }, Te.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Fn(r, !0) && 0 < r.limit) return this._read(function(u) {
          var c = Wr(r, r.table.core.schema);
          return r.table.core.query({ trans: u, values: !1, limit: r.limit, query: { index: c, range: r.range } });
        }).then(function(u) {
          return u.result;
        }).then(t);
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(u, c) {
          i.push(c.primaryKey);
        }).then(function() {
          return i;
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
        return $o(this._ctx, function(c) {
          var u = c.primaryKey.toString(), c = C(r, u);
          return r[u] = !0, !c;
        }), this;
      }, Te.prototype.modify = function(t) {
        var r = this, i = this._ctx;
        return this._write(function(u) {
          var c, d, h;
          h = typeof t == "function" ? t : (c = f(t), d = c.length, function(I) {
            for (var P = !1, k = 0; k < d; ++k) {
              var j = c[k], V = t[j], Y = Ce(I, j);
              V instanceof ur ? (Ie(I, j, V.execute(Y)), P = !0) : Y !== V && (Ie(I, j, V), P = !0);
            }
            return P;
          });
          var y = i.table.core, _ = y.schema.primaryKey, v = _.outbound, E = _.extractKey, T = 200, _ = r.db._options.modifyChunkSize;
          _ && (T = typeof _ == "object" ? _[y.name] || _["*"] || 200 : _);
          function N(I, j) {
            var k = j.failures, j = j.numFailures;
            O += I - j;
            for (var V = 0, Y = f(k); V < Y.length; V++) {
              var q = Y[V];
              b.push(k[q]);
            }
          }
          var b = [], O = 0, S = [], R = t === ys;
          return r.clone().primaryKeys().then(function(I) {
            function P(j) {
              var V = Math.min(T, I.length - j), Y = I.slice(j, j + V);
              return (R ? Promise.resolve([]) : y.getMany({ trans: u, keys: Y, cache: "immutable" })).then(function(q) {
                var $ = [], ee = [], Q = v ? [] : null, ne = R ? Y : [];
                if (!R) for (var he = 0; he < V; ++he) {
                  var be = q[he], fe = { value: vt(be), primKey: I[j + he] };
                  h.call(fe, fe.value, fe) !== !1 && (fe.value == null ? ne.push(I[j + he]) : v || ge(E(be), E(fe.value)) === 0 ? (ee.push(fe.value), v && Q.push(I[j + he])) : (ne.push(I[j + he]), $.push(fe.value)));
                }
                return Promise.resolve(0 < $.length && y.mutate({ trans: u, type: "add", values: $ }).then(function(He) {
                  for (var ce in He.failures) ne.splice(parseInt(ce), 1);
                  N($.length, He);
                })).then(function() {
                  return (0 < ee.length || k && typeof t == "object") && y.mutate({ trans: u, type: "put", keys: Q, values: ee, criteria: k, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < j }).then(function(He) {
                    return N(ee.length, He);
                  });
                }).then(function() {
                  return (0 < ne.length || k && R) && y.mutate({ trans: u, type: "delete", keys: ne, criteria: k, isAdditionalChunk: 0 < j }).then(function(He) {
                    return $r(i.table, ne, He);
                  }).then(function(He) {
                    return N(ne.length, He);
                  });
                }).then(function() {
                  return I.length > j + V && P(j + T);
                });
              });
            }
            var k = Fn(i) && i.limit === 1 / 0 && (typeof t != "function" || R) && { index: i.index, range: i.range };
            return P(0).then(function() {
              if (0 < b.length) throw new jn("Error modifying one or more objects", b, O, S);
              return I.length;
            });
          });
        });
      }, Te.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Fn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(ys) : this._write(function(i) {
          var u = t.table.core.schema.primaryKey, c = r;
          return t.table.core.count({ trans: i, query: { index: u, range: c } }).then(function(d) {
            return t.table.core.mutate({ trans: i, type: "deleteRange", range: c }).then(function(v) {
              var y = v.failures, v = v.numFailures;
              if (v) throw new jn("Could not delete some values", Object.keys(y).map(function(E) {
                return y[E];
              }), d - v);
              return d - v;
            });
          });
        });
      }, Te);
      function Te() {
      }
      var ys = function(t, r) {
        return r.value = null;
      };
      function Mu(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function ju(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function ht(t, r, i) {
        return t = t instanceof vs ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(r), t;
      }
      function Vn(t) {
        return new t.Collection(t, function() {
          return _s("");
        }).limit(0);
      }
      function Xr(t, r, i, u) {
        var c, d, h, y, v, E, T, _ = i.length;
        if (!i.every(function(O) {
          return typeof O == "string";
        })) return ht(t, us);
        function N(O) {
          c = O === "next" ? function(R) {
            return R.toUpperCase();
          } : function(R) {
            return R.toLowerCase();
          }, d = O === "next" ? function(R) {
            return R.toLowerCase();
          } : function(R) {
            return R.toUpperCase();
          }, h = O === "next" ? Mu : ju;
          var S = i.map(function(R) {
            return { lower: d(R), upper: c(R) };
          }).sort(function(R, I) {
            return h(R.lower, I.lower);
          });
          y = S.map(function(R) {
            return R.upper;
          }), v = S.map(function(R) {
            return R.lower;
          }), T = (E = O) === "next" ? "" : u;
        }
        N("next"), t = new t.Collection(t, function() {
          return an(y[0], v[_ - 1] + u);
        }), t._ondirectionchange = function(O) {
          N(O);
        };
        var b = 0;
        return t._addAlgorithm(function(O, S, R) {
          var I = O.key;
          if (typeof I != "string") return !1;
          var P = d(I);
          if (r(P, v, b)) return !0;
          for (var k = null, j = b; j < _; ++j) {
            var V = function(Y, q, $, ee, Q, ne) {
              for (var he = Math.min(Y.length, ee.length), be = -1, fe = 0; fe < he; ++fe) {
                var He = q[fe];
                if (He !== ee[fe]) return Q(Y[fe], $[fe]) < 0 ? Y.substr(0, fe) + $[fe] + $.substr(fe + 1) : Q(Y[fe], ee[fe]) < 0 ? Y.substr(0, fe) + ee[fe] + $.substr(fe + 1) : 0 <= be ? Y.substr(0, be) + q[be] + $.substr(be + 1) : null;
                Q(Y[fe], He) < 0 && (be = fe);
              }
              return he < ee.length && ne === "next" ? Y + $.substr(Y.length) : he < Y.length && ne === "prev" ? Y.substr(0, $.length) : be < 0 ? null : Y.substr(0, be) + ee[be] + $.substr(be + 1);
            }(I, P, y[j], v[j], h, E);
            V === null && k === null ? b = j + 1 : (k === null || 0 < h(k, V)) && (k = V);
          }
          return S(k !== null ? function() {
            O.continue(k + T);
          } : R), !1;
        }), t;
      }
      function an(t, r, i, u) {
        return { type: 2, lower: t, upper: r, lowerOpen: i, upperOpen: u };
      }
      function _s(t) {
        return { type: 1, lower: t, upper: t };
      }
      var vs = (Object.defineProperty(Je.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Je.prototype.between = function(t, r, i, u) {
        i = i !== !1, u = u === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (i || u) && (!i || !u) ? Vn(this) : new this.Collection(this, function() {
            return an(t, r, !i, !u);
          });
        } catch {
          return ht(this, Vt);
        }
      }, Je.prototype.equals = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return _s(t);
        });
      }, Je.prototype.above = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return an(t, void 0, !0);
        });
      }, Je.prototype.aboveOrEqual = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return an(t, void 0, !1);
        });
      }, Je.prototype.below = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return an(void 0, t, !1, !0);
        });
      }, Je.prototype.belowOrEqual = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return an(void 0, t);
        });
      }, Je.prototype.startsWith = function(t) {
        return typeof t != "string" ? ht(this, us) : this.between(t, t + En, !0, !0);
      }, Je.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : Xr(this, function(r, i) {
          return r.indexOf(i[0]) === 0;
        }, [t], En);
      }, Je.prototype.equalsIgnoreCase = function(t) {
        return Xr(this, function(r, i) {
          return r === i[0];
        }, [t], "");
      }, Je.prototype.anyOfIgnoreCase = function() {
        var t = dt.apply(ft, arguments);
        return t.length === 0 ? Vn(this) : Xr(this, function(r, i) {
          return i.indexOf(r) !== -1;
        }, t, "");
      }, Je.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = dt.apply(ft, arguments);
        return t.length === 0 ? Vn(this) : Xr(this, function(r, i) {
          return i.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, t, En);
      }, Je.prototype.anyOf = function() {
        var t = this, r = dt.apply(ft, arguments), i = this._cmp;
        try {
          r.sort(i);
        } catch {
          return ht(this, Vt);
        }
        if (r.length === 0) return Vn(this);
        var u = new this.Collection(this, function() {
          return an(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(d) {
          i = d === "next" ? t._ascending : t._descending, r.sort(i);
        };
        var c = 0;
        return u._addAlgorithm(function(d, h, y) {
          for (var v = d.key; 0 < i(v, r[c]); ) if (++c === r.length) return h(y), !1;
          return i(v, r[c]) === 0 || (h(function() {
            d.continue(r[c]);
          }), !1);
        }), u;
      }, Je.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.noneOf = function() {
        var t = dt.apply(ft, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return ht(this, Vt);
        }
        var r = t.reduce(function(i, u) {
          return i ? i.concat([[i[i.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.inAnyRange = function(I, r) {
        var i = this, u = this._cmp, c = this._ascending, d = this._descending, h = this._min, y = this._max;
        if (I.length === 0) return Vn(this);
        if (!I.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && c(P[0], P[1]) <= 0;
        })) return ht(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", oe.InvalidArgument);
        var v = !r || r.includeLowers !== !1, E = r && r.includeUppers === !0, T, _ = c;
        function N(P, k) {
          return _(P[0], k[0]);
        }
        try {
          (T = I.reduce(function(P, k) {
            for (var j = 0, V = P.length; j < V; ++j) {
              var Y = P[j];
              if (u(k[0], Y[1]) < 0 && 0 < u(k[1], Y[0])) {
                Y[0] = h(Y[0], k[0]), Y[1] = y(Y[1], k[1]);
                break;
              }
            }
            return j === V && P.push(k), P;
          }, [])).sort(N);
        } catch {
          return ht(this, Vt);
        }
        var b = 0, O = E ? function(P) {
          return 0 < c(P, T[b][1]);
        } : function(P) {
          return 0 <= c(P, T[b][1]);
        }, S = v ? function(P) {
          return 0 < d(P, T[b][0]);
        } : function(P) {
          return 0 <= d(P, T[b][0]);
        }, R = O, I = new this.Collection(this, function() {
          return an(T[0][0], T[T.length - 1][1], !v, !E);
        });
        return I._ondirectionchange = function(P) {
          _ = P === "next" ? (R = O, c) : (R = S, d), T.sort(N);
        }, I._addAlgorithm(function(P, k, j) {
          for (var V, Y = P.key; R(Y); ) if (++b === T.length) return k(j), !1;
          return !O(V = Y) && !S(V) || (i._cmp(Y, T[b][1]) === 0 || i._cmp(Y, T[b][0]) === 0 || k(function() {
            _ === c ? P.continue(T[b][0]) : P.continue(T[b][1]);
          }), !1);
        }), I;
      }, Je.prototype.startsWithAnyOf = function() {
        var t = dt.apply(ft, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? Vn(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + En];
        })) : ht(this, "startsWithAnyOf() only works with strings");
      }, Je);
      function Je() {
      }
      function kt(t) {
        return Be(function(r) {
          return lr(r), t(r.target.error), !1;
        });
      }
      function lr(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var cr = "storagemutated", Yo = "x-storagemutated-1", un = sr(null, cr), Lu = (Dt.prototype._lock = function() {
        return ae(!re.global), ++this._reculock, this._reculock !== 1 || re.global || (re.lockOwnerFor = this), this;
      }, Dt.prototype._unlock = function() {
        if (ae(!re.global), --this._reculock == 0) for (re.global || (re.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            wn(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, Dt.prototype._locked = function() {
        return this._reculock && re.lockOwnerFor !== this;
      }, Dt.prototype.create = function(t) {
        var r = this;
        if (!this.mode) return this;
        var i = this.db.idbdb, u = this.db._state.dbOpenError;
        if (ae(!this.idbtrans), !t && !i) switch (u && u.name) {
          case "DatabaseClosedError":
            throw new oe.DatabaseClosed(u);
          case "MissingAPIError":
            throw new oe.MissingAPI(u.message, u);
          default:
            throw new oe.OpenFailed(u);
        }
        if (!this.active) throw new oe.TransactionInactive();
        return ae(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Be(function(c) {
          lr(c), r._reject(t.error);
        }), t.onabort = Be(function(c) {
          lr(c), r.active && r._reject(new oe.Abort(t.error)), r.active = !1, r.on("abort").fire(c);
        }), t.oncomplete = Be(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && un.storagemutated.fire(t.mutatedParts);
        }), this;
      }, Dt.prototype._promise = function(t, r, i) {
        var u = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Fe(new oe.ReadOnly("Transaction is readonly"));
        if (!this.active) return Fe(new oe.TransactionInactive());
        if (this._locked()) return new te(function(d, h) {
          u._blockedFuncs.push([function() {
            u._promise(t, r, i).then(d, h);
          }, re]);
        });
        if (i) return rn(function() {
          var d = new te(function(h, y) {
            u._lock();
            var v = r(h, y, u);
            v && v.then && v.then(h, y);
          });
          return d.finally(function() {
            return u._unlock();
          }), d._lib = !0, d;
        });
        var c = new te(function(d, h) {
          var y = r(d, h, u);
          y && y.then && y.then(d, h);
        });
        return c._lib = !0, c;
      }, Dt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Dt.prototype.waitFor = function(t) {
        var r, i = this._root(), u = te.resolve(t);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return u;
        }) : (i._waitingFor = u, i._waitingQueue = [], r = i.idbtrans.objectStore(i.storeNames[0]), function d() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (r.get(-1 / 0).onsuccess = d);
        }());
        var c = i._waitingFor;
        return new te(function(d, h) {
          u.then(function(y) {
            return i._waitingQueue.push(Be(d.bind(null, y)));
          }, function(y) {
            return i._waitingQueue.push(Be(h.bind(null, y)));
          }).finally(function() {
            i._waitingFor === c && (i._waitingFor = null);
          });
        });
      }, Dt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new oe.Abort()));
      }, Dt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (C(r, t)) return r[t];
        var i = this.schema[t];
        if (!i) throw new oe.NotFound("Table " + t + " not part of transaction");
        return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), r[t] = i;
      }, Dt);
      function Dt() {
      }
      function Xo(t, r, i, u, c, d, h, y) {
        return { name: t, keyPath: r, unique: i, multi: u, auto: c, compound: d, src: (i && !h ? "&" : "") + (u ? "*" : "") + (c ? "++" : "") + bs(r), type: y };
      }
      function bs(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function zo(t, r, i) {
        return { name: t, primKey: r, indexes: i, mappedClass: null, idxByName: (u = function(c) {
          return [c.name, c];
        }, i.reduce(function(c, d, h) {
          return h = u(d, h), h && (c[h[0]] = h[1]), c;
        }, {})) };
        var u;
      }
      var fr = function(t) {
        try {
          return t.only([[]]), fr = function() {
            return [[]];
          }, [[]];
        } catch {
          return fr = function() {
            return En;
          }, En;
        }
      };
      function Jo(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(i) {
          return i[r];
        } : function(i) {
          return Ce(i, r);
        } : function(i) {
          return Ce(i, t);
        };
        var r;
      }
      function ws(t) {
        return [].slice.call(t);
      }
      var Bu = 0;
      function dr(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function Ku(t, r, v) {
        function u(R) {
          if (R.type === 3) return null;
          if (R.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var b = R.lower, O = R.upper, S = R.lowerOpen, R = R.upperOpen;
          return b === void 0 ? O === void 0 ? null : r.upperBound(O, !!R) : O === void 0 ? r.lowerBound(b, !!S) : r.bound(b, O, !!S, !!R);
        }
        function c(N) {
          var b, O = N.name;
          return { name: O, schema: N, mutate: function(S) {
            var R = S.trans, I = S.type, P = S.keys, k = S.values, j = S.range;
            return new Promise(function(V, Y) {
              V = Be(V);
              var q = R.objectStore(O), $ = q.keyPath == null, ee = I === "put" || I === "add";
              if (!ee && I !== "delete" && I !== "deleteRange") throw new Error("Invalid operation type: " + I);
              var Q, ne = (P || k || { length: 1 }).length;
              if (P && k && P.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (ne === 0) return V({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(ut) {
                ++He, lr(ut);
              }
              var be = [], fe = [], He = 0;
              if (I === "deleteRange") {
                if (j.type === 4) return V({ numFailures: He, failures: fe, results: [], lastResult: void 0 });
                j.type === 3 ? be.push(Q = q.clear()) : be.push(Q = q.delete(u(j)));
              } else {
                var $ = ee ? $ ? [k, P] : [k, null] : [P, null], ce = $[0], rt = $[1];
                if (ee) for (var ot = 0; ot < ne; ++ot) be.push(Q = rt && rt[ot] !== void 0 ? q[I](ce[ot], rt[ot]) : q[I](ce[ot])), Q.onerror = he;
                else for (ot = 0; ot < ne; ++ot) be.push(Q = q[I](ce[ot])), Q.onerror = he;
              }
              function ao(ut) {
                ut = ut.target.result, be.forEach(function(Rn, mi) {
                  return Rn.error != null && (fe[mi] = Rn.error);
                }), V({ numFailures: He, failures: fe, results: I === "delete" ? P : be.map(function(Rn) {
                  return Rn.result;
                }), lastResult: ut });
              }
              Q.onerror = function(ut) {
                he(ut), ao(ut);
              }, Q.onsuccess = ao;
            });
          }, getMany: function(S) {
            var R = S.trans, I = S.keys;
            return new Promise(function(P, k) {
              P = Be(P);
              for (var j, V = R.objectStore(O), Y = I.length, q = new Array(Y), $ = 0, ee = 0, Q = function(be) {
                be = be.target, q[be._pos] = be.result, ++ee === $ && P(q);
              }, ne = kt(k), he = 0; he < Y; ++he) I[he] != null && ((j = V.get(I[he]))._pos = he, j.onsuccess = Q, j.onerror = ne, ++$);
              $ === 0 && P(q);
            });
          }, get: function(S) {
            var R = S.trans, I = S.key;
            return new Promise(function(P, k) {
              P = Be(P);
              var j = R.objectStore(O).get(I);
              j.onsuccess = function(V) {
                return P(V.target.result);
              }, j.onerror = kt(k);
            });
          }, query: (b = E, function(S) {
            return new Promise(function(R, I) {
              R = Be(R);
              var P, k, j, $ = S.trans, V = S.values, Y = S.limit, Q = S.query, q = Y === 1 / 0 ? void 0 : Y, ee = Q.index, Q = Q.range, $ = $.objectStore(O), ee = ee.isPrimaryKey ? $ : $.index(ee.name), Q = u(Q);
              if (Y === 0) return R({ result: [] });
              b ? ((q = V ? ee.getAll(Q, q) : ee.getAllKeys(Q, q)).onsuccess = function(ne) {
                return R({ result: ne.target.result });
              }, q.onerror = kt(I)) : (P = 0, k = !V && "openKeyCursor" in ee ? ee.openKeyCursor(Q) : ee.openCursor(Q), j = [], k.onsuccess = function(ne) {
                var he = k.result;
                return he ? (j.push(V ? he.value : he.primaryKey), ++P === Y ? R({ result: j }) : void he.continue()) : R({ result: j });
              }, k.onerror = kt(I));
            });
          }), openCursor: function(S) {
            var R = S.trans, I = S.values, P = S.query, k = S.reverse, j = S.unique;
            return new Promise(function(V, Y) {
              V = Be(V);
              var ee = P.index, q = P.range, $ = R.objectStore(O), $ = ee.isPrimaryKey ? $ : $.index(ee.name), ee = k ? j ? "prevunique" : "prev" : j ? "nextunique" : "next", Q = !I && "openKeyCursor" in $ ? $.openKeyCursor(u(q), ee) : $.openCursor(u(q), ee);
              Q.onerror = kt(Y), Q.onsuccess = Be(function(ne) {
                var he, be, fe, He, ce = Q.result;
                ce ? (ce.___id = ++Bu, ce.done = !1, he = ce.continue.bind(ce), be = (be = ce.continuePrimaryKey) && be.bind(ce), fe = ce.advance.bind(ce), He = function() {
                  throw new Error("Cursor not stopped");
                }, ce.trans = R, ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = function() {
                  throw new Error("Cursor not started");
                }, ce.fail = Be(Y), ce.next = function() {
                  var rt = this, ot = 1;
                  return this.start(function() {
                    return ot-- ? rt.continue() : rt.stop();
                  }).then(function() {
                    return rt;
                  });
                }, ce.start = function(rt) {
                  function ot() {
                    if (Q.result) try {
                      rt();
                    } catch (ut) {
                      ce.fail(ut);
                    }
                    else ce.done = !0, ce.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ce.stop();
                  }
                  var ao = new Promise(function(ut, Rn) {
                    ut = Be(ut), Q.onerror = kt(Rn), ce.fail = Rn, ce.stop = function(mi) {
                      ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = He, ut(mi);
                    };
                  });
                  return Q.onsuccess = Be(function(ut) {
                    Q.onsuccess = ot, ot();
                  }), ce.continue = he, ce.continuePrimaryKey = be, ce.advance = fe, ot(), ao;
                }, V(ce)) : V(null);
              }, Y);
            });
          }, count: function(S) {
            var R = S.query, I = S.trans, P = R.index, k = R.range;
            return new Promise(function(j, V) {
              var Y = I.objectStore(O), q = P.isPrimaryKey ? Y : Y.index(P.name), Y = u(k), q = Y ? q.count(Y) : q.count();
              q.onsuccess = Be(function($) {
                return j($.target.result);
              }), q.onerror = kt(V);
            });
          } };
        }
        var d, h, y, T = (h = v, y = ws((d = t).objectStoreNames), { schema: { name: d.name, tables: y.map(function(N) {
          return h.objectStore(N);
        }).map(function(N) {
          var b = N.keyPath, R = N.autoIncrement, O = p(b), S = {}, R = { name: N.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: b == null, compound: O, keyPath: b, autoIncrement: R, unique: !0, extractKey: Jo(b) }, indexes: ws(N.indexNames).map(function(I) {
            return N.index(I);
          }).map(function(j) {
            var P = j.name, k = j.unique, V = j.multiEntry, j = j.keyPath, V = { name: P, compound: p(j), keyPath: j, unique: k, multiEntry: V, extractKey: Jo(j) };
            return S[dr(j)] = V;
          }), getIndexByKeyPath: function(I) {
            return S[dr(I)];
          } };
          return S[":id"] = R.primaryKey, b != null && (S[dr(b)] = R.primaryKey), R;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = T.schema, E = T.hasGetAll, T = v.tables.map(c), _ = {};
        return T.forEach(function(N) {
          return _[N.name] = N;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(N) {
          if (!_[N]) throw new Error("Table '".concat(N, "' not found"));
          return _[N];
        }, MIN_KEY: -1 / 0, MAX_KEY: fr(r), schema: v };
      }
      function Uu(t, r, i, u) {
        var c = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (u = Ku(r, c, u), t.dbcore.reduce(function(d, h) {
          return h = h.create, s(s({}, d), h(d));
        }, u)) };
      }
      function zr(t, u) {
        var i = u.db, u = Uu(t._middlewares, i, t._deps, u);
        t.core = u.dbcore, t.tables.forEach(function(c) {
          var d = c.name;
          t.core.schema.tables.some(function(h) {
            return h.name === d;
          }) && (c.core = t.core.table(d), t[d] instanceof t.Table && (t[d].core = c.core));
        });
      }
      function Jr(t, r, i, u) {
        i.forEach(function(c) {
          var d = u[c];
          r.forEach(function(h) {
            var y = function v(E, T) {
              return Ee(E, T) || (E = A(E)) && v(E, T);
            }(h, c);
            (!y || "value" in y && y.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? D(h, c, { get: function() {
              return this.table(c);
            }, set: function(v) {
              M(this, c, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[c] = new t.Table(c, d));
          });
        });
      }
      function Qo(t, r) {
        r.forEach(function(i) {
          for (var u in i) i[u] instanceof t.Table && delete i[u];
        });
      }
      function Hu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function Fu(t, r, i, u) {
        var c = t._dbSchema;
        i.objectStoreNames.contains("$meta") && !c.$meta && (c.$meta = zo("$meta", Os("")[0], []), t._storeNames.push("$meta"));
        var d = t._createTransaction("readwrite", t._storeNames, c);
        d.create(i), d._completion.catch(u);
        var h = d._reject.bind(d), y = re.transless || re;
        rn(function() {
          return re.trans = d, re.transless = y, r !== 0 ? (zr(t, i), E = r, ((v = d).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(T) {
            return T ?? E;
          }) : te.resolve(E)).then(function(T) {
            return N = T, b = d, O = i, S = [], T = (_ = t)._versions, R = _._dbSchema = Zr(0, _.idbdb, O), (T = T.filter(function(I) {
              return I._cfg.version >= N;
            })).length !== 0 ? (T.forEach(function(I) {
              S.push(function() {
                var P = R, k = I._cfg.dbschema;
                eo(_, P, O), eo(_, k, O), R = _._dbSchema = k;
                var j = Zo(P, k);
                j.add.forEach(function(ee) {
                  ei(O, ee[0], ee[1].primKey, ee[1].indexes);
                }), j.change.forEach(function(ee) {
                  if (ee.recreate) throw new oe.Upgrade("Not yet support for changing primary key");
                  var Q = O.objectStore(ee.name);
                  ee.add.forEach(function(ne) {
                    return Qr(Q, ne);
                  }), ee.change.forEach(function(ne) {
                    Q.deleteIndex(ne.name), Qr(Q, ne);
                  }), ee.del.forEach(function(ne) {
                    return Q.deleteIndex(ne);
                  });
                });
                var V = I._cfg.contentUpgrade;
                if (V && I._cfg.version > N) {
                  zr(_, O), b._memoizedTables = {};
                  var Y = _t(k);
                  j.del.forEach(function(ee) {
                    Y[ee] = P[ee];
                  }), Qo(_, [_.Transaction.prototype]), Jr(_, [_.Transaction.prototype], f(Y), Y), b.schema = Y;
                  var q, $ = Tt(V);
                  return $ && Un(), j = te.follow(function() {
                    var ee;
                    (q = V(b)) && $ && (ee = on.bind(null, null), q.then(ee, ee));
                  }), q && typeof q.then == "function" ? te.resolve(q) : j.then(function() {
                    return q;
                  });
                }
              }), S.push(function(P) {
                var k, j, V = I._cfg.dbschema;
                k = V, j = P, [].slice.call(j.db.objectStoreNames).forEach(function(Y) {
                  return k[Y] == null && j.db.deleteObjectStore(Y);
                }), Qo(_, [_.Transaction.prototype]), Jr(_, [_.Transaction.prototype], _._storeNames, _._dbSchema), b.schema = _._dbSchema;
              }), S.push(function(P) {
                _.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(_.idbdb.version / 10) === I._cfg.version ? (_.idbdb.deleteObjectStore("$meta"), delete _._dbSchema.$meta, _._storeNames = _._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : P.objectStore("$meta").put(I._cfg.version, "version"));
              });
            }), function I() {
              return S.length ? te.resolve(S.shift()(b.idbtrans)).then(I) : te.resolve();
            }().then(function() {
              Es(R, O);
            })) : te.resolve();
            var _, N, b, O, S, R;
          }).catch(h)) : (f(c).forEach(function(T) {
            ei(i, T, c[T].primKey, c[T].indexes);
          }), zr(t, i), void te.follow(function() {
            return t.on.populate.fire(d);
          }).catch(h));
          var v, E;
        });
      }
      function Vu(t, r) {
        Es(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var i = Zr(0, t.idbdb, r);
        eo(t, t._dbSchema, r);
        for (var u = 0, c = Zo(i, t._dbSchema).change; u < c.length; u++) {
          var d = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(v) {
              B && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(v.src)), Qr(y, v);
            });
          }(c[u]);
          if (typeof d == "object") return d.value;
        }
      }
      function Zo(t, r) {
        var i, u = { del: [], add: [], change: [] };
        for (i in t) r[i] || u.del.push(i);
        for (i in r) {
          var c = t[i], d = r[i];
          if (c) {
            var h = { name: i, def: d, recreate: !1, del: [], add: [], change: [] };
            if ("" + (c.primKey.keyPath || "") != "" + (d.primKey.keyPath || "") || c.primKey.auto !== d.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = c.idxByName, v = d.idxByName, E = void 0;
              for (E in y) v[E] || h.del.push(E);
              for (E in v) {
                var T = y[E], _ = v[E];
                T ? T.src !== _.src && h.change.push(_) : h.add.push(_);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([i, d]);
        }
        return u;
      }
      function ei(t, r, i, u) {
        var c = t.db.createObjectStore(r, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return u.forEach(function(d) {
          return Qr(c, d);
        }), c;
      }
      function Es(t, r) {
        f(t).forEach(function(i) {
          r.db.objectStoreNames.contains(i) || (B && console.debug("Dexie: Creating missing table", i), ei(r, i, t[i].primKey, t[i].indexes));
        });
      }
      function Qr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Zr(t, r, i) {
        var u = {};
        return ye(r.objectStoreNames, 0).forEach(function(c) {
          for (var d = i.objectStore(c), h = Xo(bs(E = d.keyPath), E || "", !0, !1, !!d.autoIncrement, E && typeof E != "string", !0), y = [], v = 0; v < d.indexNames.length; ++v) {
            var T = d.index(d.indexNames[v]), E = T.keyPath, T = Xo(T.name, E, !!T.unique, !!T.multiEntry, !1, E && typeof E != "string", !1);
            y.push(T);
          }
          u[c] = zo(c, h, y);
        }), u;
      }
      function eo(t, r, i) {
        for (var u = i.db.objectStoreNames, c = 0; c < u.length; ++c) {
          var d = u[c], h = i.objectStore(d);
          t._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var v = h.indexNames[y], E = h.index(v).keyPath, T = typeof E == "string" ? E : "[" + ye(E).join("+") + "]";
            !r[d] || (E = r[d].idxByName[T]) && (E.name = v, delete r[d].idxByName[T], r[d].idxByName[v] = E);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function Os(t) {
        return t.split(",").map(function(r, i) {
          var d = r.split(":"), u = (c = d[1]) === null || c === void 0 ? void 0 : c.trim(), c = (r = d[0].trim()).replace(/([&*]|\+\+)/g, ""), d = /^\[/.test(c) ? c.match(/^\[(.*)\]$/)[1].split("+") : c;
          return Xo(c, d || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(d), i === 0, u);
        });
      }
      var Gu = (Gn.prototype._createTableSchema = zo, Gn.prototype._parseIndexSyntax = Os, Gn.prototype._parseStoresSpec = function(t, r) {
        var i = this;
        f(t).forEach(function(u) {
          if (t[u] !== null) {
            var c = i._parseIndexSyntax(t[u]), d = c.shift();
            if (!d) throw new oe.Schema("Invalid schema for table " + u + ": " + t[u]);
            if (d.unique = !0, d.multi) throw new oe.Schema("Primary key cannot be multiEntry*");
            c.forEach(function(h) {
              if (h.auto) throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new oe.Schema("Index must have a name and cannot be an empty string");
            }), c = i._createTableSchema(u, d, c), r[u] = c;
          }
        });
      }, Gn.prototype.stores = function(i) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, i) : i;
        var i = r._versions, u = {}, c = {};
        return i.forEach(function(d) {
          m(u, d._cfg.storesSource), c = d._cfg.dbschema = {}, d._parseStoresSpec(u, c);
        }), r._dbSchema = c, Qo(r, [r._allTables, r, r.Transaction.prototype]), Jr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], f(c), c), r._storeNames = f(c), this;
      }, Gn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = W(this._cfg.contentUpgrade || g, t), this;
      }, Gn);
      function Gn() {
      }
      function ti(t, r) {
        var i = t._dbNamesDB;
        return i || (i = t._dbNamesDB = new Gt(Gr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function ni(t) {
        return t && typeof t.databases == "function";
      }
      function ri(t) {
        return rn(function() {
          return re.letThrough = !0, t();
        });
      }
      function oi(t) {
        return !("from" in t);
      }
      var nt = function(t, r) {
        if (!this) {
          var i = new nt();
          return t && "d" in t && m(i, t), i;
        }
        m(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function pr(t, r, i) {
        var u = ge(r, i);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (oi(t)) return m(t, { from: r, to: i, d: 1 });
          var c = t.l, u = t.r;
          if (ge(i, t.from) < 0) return c ? pr(c, r, i) : t.l = { from: r, to: i, d: 1, l: null, r: null }, Ts(t);
          if (0 < ge(r, t.to)) return u ? pr(u, r, i) : t.r = { from: r, to: i, d: 1, l: null, r: null }, Ts(t);
          ge(r, t.from) < 0 && (t.from = r, t.l = null, t.d = u ? u.d + 1 : 1), 0 < ge(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, c && !t.l && hr(t, c), u && i && hr(t, u);
        }
      }
      function hr(t, r) {
        oi(r) || function i(u, v) {
          var d = v.from, h = v.to, y = v.l, v = v.r;
          pr(u, d, h), y && i(u, y), v && i(u, v);
        }(t, r);
      }
      function xs(t, r) {
        var i = to(r), u = i.next();
        if (u.done) return !1;
        for (var c = u.value, d = to(t), h = d.next(c.from), y = h.value; !u.done && !h.done; ) {
          if (ge(y.from, c.to) <= 0 && 0 <= ge(y.to, c.from)) return !0;
          ge(c.from, y.from) < 0 ? c = (u = i.next(y.from)).value : y = (h = d.next(c.from)).value;
        }
        return !1;
      }
      function to(t) {
        var r = oi(t) ? null : { s: 0, n: t };
        return { next: function(i) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && ge(i, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || ge(i, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function Ts(t) {
        var r, i, u = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), c = 1 < u ? "r" : u < -1 ? "l" : "";
        c && (r = c == "r" ? "l" : "r", i = s({}, t), u = t[c], t.from = u.from, t.to = u.to, t[c] = u[c], i[c] = u[r], (t[r] = i).d = Rs(i)), t.d = Rs(t);
      }
      function Rs(i) {
        var r = i.r, i = i.l;
        return (r ? i ? Math.max(r.d, i.d) : r.d : i ? i.d : 0) + 1;
      }
      function no(t, r) {
        return f(r).forEach(function(i) {
          t[i] ? hr(t[i], r[i]) : t[i] = function u(c) {
            var d, h, y = {};
            for (d in c) C(c, d) && (h = c[d], y[d] = !h || typeof h != "object" || Zt.has(h.constructor) ? h : u(h));
            return y;
          }(r[i]);
        }), t;
      }
      function ii(t, r) {
        return t.all || r.all || Object.keys(t).some(function(i) {
          return r[i] && xs(r[i], t[i]);
        });
      }
      K(nt.prototype, ((Et = { add: function(t) {
        return hr(this, t), this;
      }, addKey: function(t) {
        return pr(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(i) {
          return pr(r, i, i);
        }), this;
      }, hasKey: function(t) {
        var r = to(this).next(t).value;
        return r && ge(r.from, t) <= 0 && 0 <= ge(r.to, t);
      } })[We] = function() {
        return to(this);
      }, Et));
      var xn = {}, si = {}, ai = !1;
      function ro(t) {
        no(si, t), ai || (ai = !0, setTimeout(function() {
          ai = !1, ui(si, !(si = {}));
        }, 0));
      }
      function ui(t, r) {
        r === void 0 && (r = !1);
        var i = /* @__PURE__ */ new Set();
        if (t.all) for (var u = 0, c = Object.values(xn); u < c.length; u++) Ss(h = c[u], t, i, r);
        else for (var d in t) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(d);
          y && (d = y[1], y = y[2], (h = xn["idb://".concat(d, "/").concat(y)]) && Ss(h, t, i, r));
        }
        i.forEach(function(v) {
          return v();
        });
      }
      function Ss(t, r, i, u) {
        for (var c = [], d = 0, h = Object.entries(t.queries.query); d < h.length; d++) {
          for (var y = h[d], v = y[0], E = [], T = 0, _ = y[1]; T < _.length; T++) {
            var N = _[T];
            ii(r, N.obsSet) ? N.subscribers.forEach(function(R) {
              return i.add(R);
            }) : u && E.push(N);
          }
          u && c.push([v, E]);
        }
        if (u) for (var b = 0, O = c; b < O.length; b++) {
          var S = O[b], v = S[0], E = S[1];
          t.queries.query[v] = E;
        }
      }
      function qu(t) {
        var r = t._state, i = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Fe(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, c = Math.round(10 * t.verno), d = !1;
        function h() {
          if (r.openCanceller !== u) throw new oe.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new te(function(N, b) {
            if (h(), !i) throw new oe.MissingAPI();
            var O = t.name, S = r.autoSchema || !c ? i.open(O) : i.open(O, c);
            if (!S) throw new oe.MissingAPI();
            S.onerror = kt(b), S.onblocked = Be(t._fireOnBlocked), S.onupgradeneeded = Be(function(R) {
              var I;
              T = S.transaction, r.autoSchema && !t._options.allowEmptyDB ? (S.onerror = lr, T.abort(), S.result.close(), (I = i.deleteDatabase(O)).onsuccess = I.onerror = Be(function() {
                b(new oe.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (T.onerror = kt(b), R = R.oldVersion > Math.pow(2, 62) ? 0 : R.oldVersion, _ = R < 1, t.idbdb = S.result, d && Vu(t, T), Fu(t, R / 10, T, b));
            }, b), S.onsuccess = Be(function() {
              T = null;
              var R, I, P, k, j, V = t.idbdb = S.result, Y = ye(V.objectStoreNames);
              if (0 < Y.length) try {
                var q = V.transaction((k = Y).length === 1 ? k[0] : k, "readonly");
                if (r.autoSchema) I = V, P = q, (R = t).verno = I.version / 10, P = R._dbSchema = Zr(0, I, P), R._storeNames = ye(I.objectStoreNames, 0), Jr(R, [R._allTables], f(P), P);
                else if (eo(t, t._dbSchema, q), ((j = Zo(Zr(0, (j = t).idbdb, q), j._dbSchema)).add.length || j.change.some(function($) {
                  return $.add.length || $.change.length;
                })) && !d) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), V.close(), c = V.version + 1, d = !0, N(y());
                zr(t, q);
              } catch {
              }
              Hn.push(t), V.onversionchange = Be(function($) {
                r.vcFired = !0, t.on("versionchange").fire($);
              }), V.onclose = Be(function($) {
                t.on("close").fire($);
              }), _ && (j = t._deps, q = O, V = j.indexedDB, j = j.IDBKeyRange, ni(V) || q === Gr || ti(V, j).put({ name: q }).catch(g)), N();
            }, b);
          }).catch(function(N) {
            switch (N?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < c) return c = 0, y();
            }
            return te.reject(N);
          });
        }
        var v, E = r.dbReadyResolve, T = null, _ = !1;
        return te.race([u, (typeof navigator > "u" ? te.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(N) {
          function b() {
            return indexedDB.databases().finally(N);
          }
          v = setInterval(b, 100), b();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], te.resolve(ri(function() {
            return t.on.ready.fire(t.vip);
          })).then(function N() {
            if (0 < r.onReadyBeingFired.length) {
              var b = r.onReadyBeingFired.reduce(W, g);
              return r.onReadyBeingFired = [], te.resolve(ri(function() {
                return b(t.vip);
              })).then(N);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(N) {
          r.dbOpenError = N;
          try {
            T && T.abort();
          } catch {
          }
          return u === r.openCanceller && t._close(), Fe(N);
        }).finally(function() {
          r.openComplete = !0, E();
        }).then(function() {
          var N;
          return _ && (N = {}, t.tables.forEach(function(b) {
            b.schema.indexes.forEach(function(O) {
              O.name && (N["idb://".concat(t.name, "/").concat(b.name, "/").concat(O.name)] = new nt(-1 / 0, [[[]]]));
            }), N["idb://".concat(t.name, "/").concat(b.name, "/")] = N["idb://".concat(t.name, "/").concat(b.name, "/:dels")] = new nt(-1 / 0, [[[]]]);
          }), un(cr).fire(N), ui(N, !0)), t;
        });
      }
      function li(t) {
        function r(d) {
          return t.next(d);
        }
        var i = c(r), u = c(function(d) {
          return t.throw(d);
        });
        function c(d) {
          return function(v) {
            var y = d(v), v = y.value;
            return y.done ? v : v && typeof v.then == "function" ? v.then(i, u) : p(v) ? Promise.all(v).then(i, u) : i(v);
          };
        }
        return c(r)();
      }
      function oo(t, r, i) {
        for (var u = p(t) ? t.slice() : [t], c = 0; c < i; ++c) u.push(r);
        return u;
      }
      var $u = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema, c = {}, d = [];
          function h(_, N, b) {
            var O = dr(_), S = c[O] = c[O] || [], R = _ == null ? 0 : typeof _ == "string" ? 1 : _.length, I = 0 < N, I = s(s({}, b), { name: I ? "".concat(O, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: I, keyTail: N, keyLength: R, extractKey: Jo(_), unique: !I && b.unique });
            return S.push(I), I.isPrimaryKey || d.push(I), 1 < R && h(R === 2 ? _[0] : _.slice(0, R - 1), N + 1, b), S.sort(function(P, k) {
              return P.keyTail - k.keyTail;
            }), I;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), c[":id"] = [r];
          for (var y = 0, v = u.indexes; y < v.length; y++) {
            var E = v[y];
            h(E.keyPath, 0, E);
          }
          function T(_) {
            var N, b = _.query.index;
            return b.isVirtual ? s(s({}, _), { query: { index: b.lowLevelIndex, range: (N = _.query.range, b = b.keyTail, { type: N.type === 1 ? 2 : N.type, lower: oo(N.lower, N.lowerOpen ? t.MAX_KEY : t.MIN_KEY, b), lowerOpen: !0, upper: oo(N.upper, N.upperOpen ? t.MIN_KEY : t.MAX_KEY, b), upperOpen: !0 }) } }) : _;
          }
          return s(s({}, i), { schema: s(s({}, u), { primaryKey: r, indexes: d, getIndexByKeyPath: function(_) {
            return (_ = c[dr(_)]) && _[0];
          } }), count: function(_) {
            return i.count(T(_));
          }, query: function(_) {
            return i.query(T(_));
          }, openCursor: function(_) {
            var N = _.query.index, b = N.keyTail, O = N.isVirtual, S = N.keyLength;
            return O ? i.openCursor(T(_)).then(function(I) {
              return I && R(I);
            }) : i.openCursor(_);
            function R(I) {
              return Object.create(I, { continue: { value: function(P) {
                P != null ? I.continue(oo(P, _.reverse ? t.MAX_KEY : t.MIN_KEY, b)) : _.unique ? I.continue(I.key.slice(0, S).concat(_.reverse ? t.MIN_KEY : t.MAX_KEY, b)) : I.continue();
              } }, continuePrimaryKey: { value: function(P, k) {
                I.continuePrimaryKey(oo(P, t.MAX_KEY, b), k);
              } }, primaryKey: { get: function() {
                return I.primaryKey;
              } }, key: { get: function() {
                var P = I.key;
                return S === 1 ? P[0] : P.slice(0, S);
              } }, value: { get: function() {
                return I.value;
              } } });
            }
          } });
        } });
      } };
      function ci(t, r, i, u) {
        return i = i || {}, u = u || "", f(t).forEach(function(c) {
          var d, h, y;
          C(r, c) ? (d = t[c], h = r[c], typeof d == "object" && typeof h == "object" && d && h ? (y = Mn(d)) !== Mn(h) ? i[u + c] = r[c] : y === "Object" ? ci(d, h, i, u + c + ".") : d !== h && (i[u + c] = r[c]) : d !== h && (i[u + c] = r[c])) : i[u + c] = void 0;
        }), f(r).forEach(function(c) {
          C(t, c) || (i[u + c] = r[c]);
        }), i;
      }
      function fi(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var Wu = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema.primaryKey;
          return s(s({}, i), { mutate: function(c) {
            var d = re.trans, h = d.table(r).hook, y = h.deleting, v = h.creating, E = h.updating;
            switch (c.type) {
              case "add":
                if (v.fire === g) break;
                return d._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "put":
                if (v.fire === g && E.fire === g) break;
                return d._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "delete":
                if (y.fire === g) break;
                return d._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "deleteRange":
                if (y.fire === g) break;
                return d._promise("readwrite", function() {
                  return function _(N, b, O) {
                    return i.query({ trans: N, values: !1, query: { index: u, range: b }, limit: O }).then(function(S) {
                      var R = S.result;
                      return T({ type: "delete", keys: R, trans: N }).then(function(I) {
                        return 0 < I.numFailures ? Promise.reject(I.failures[0]) : R.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : _(N, s(s({}, b), { lower: R[R.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  }(c.trans, c.range, 1e4);
                }, !0);
            }
            return i.mutate(c);
            function T(_) {
              var N, b, O, S = re.trans, R = _.keys || fi(u, _);
              if (!R) throw new Error("Keys missing");
              return (_ = _.type === "add" || _.type === "put" ? s(s({}, _), { keys: R }) : s({}, _)).type !== "delete" && (_.values = a([], _.values)), _.keys && (_.keys = a([], _.keys)), N = i, O = R, ((b = _).type === "add" ? Promise.resolve([]) : N.getMany({ trans: b.trans, keys: O, cache: "immutable" })).then(function(I) {
                var P = R.map(function(k, j) {
                  var V, Y, q, $ = I[j], ee = { onerror: null, onsuccess: null };
                  return _.type === "delete" ? y.fire.call(ee, k, $, S) : _.type === "add" || $ === void 0 ? (V = v.fire.call(ee, k, _.values[j], S), k == null && V != null && (_.keys[j] = k = V, u.outbound || Ie(_.values[j], u.keyPath, k))) : (V = ci($, _.values[j]), (Y = E.fire.call(ee, V, k, $, S)) && (q = _.values[j], Object.keys(Y).forEach(function(Q) {
                    C(q, Q) ? q[Q] = Y[Q] : Ie(q, Q, Y[Q]);
                  }))), ee;
                });
                return i.mutate(_).then(function(k) {
                  for (var j = k.failures, V = k.results, Y = k.numFailures, k = k.lastResult, q = 0; q < R.length; ++q) {
                    var $ = (V || R)[q], ee = P[q];
                    $ == null ? ee.onerror && ee.onerror(j[q]) : ee.onsuccess && ee.onsuccess(_.type === "put" && I[q] ? _.values[q] : $);
                  }
                  return { failures: j, results: V, numFailures: Y, lastResult: k };
                }).catch(function(k) {
                  return P.forEach(function(j) {
                    return j.onerror && j.onerror(k);
                  }), Promise.reject(k);
                });
              });
            }
          } });
        } });
      } };
      function Ns(t, r, i) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var u = [], c = 0, d = 0; c < r.keys.length && d < t.length; ++c) ge(r.keys[c], t[d]) === 0 && (u.push(i ? vt(r.values[c]) : r.values[c]), ++d);
          return u.length === t.length ? u : null;
        } catch {
          return null;
        }
      }
      var Yu = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var i = t.table(r);
          return s(s({}, i), { getMany: function(u) {
            if (!u.cache) return i.getMany(u);
            var c = Ns(u.keys, u.trans._cache, u.cache === "clone");
            return c ? te.resolve(c) : i.getMany(u).then(function(d) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? vt(d) : d }, d;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), i.mutate(u);
          } });
        } };
      } };
      function Is(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function As(t, r) {
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
        var r = t.schema.name, i = new nt(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(u, c, d) {
          if (re.subscr && c !== "readonly") throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(re.querier));
          return t.transaction(u, c, d);
        }, table: function(u) {
          var c = t.table(u), d = c.schema, h = d.primaryKey, _ = d.indexes, y = h.extractKey, v = h.outbound, E = h.autoIncrement && _.filter(function(b) {
            return b.compound && b.keyPath.includes(h.keyPath);
          }), T = s(s({}, c), { mutate: function(b) {
            function O(Q) {
              return Q = "idb://".concat(r, "/").concat(u, "/").concat(Q), k[Q] || (k[Q] = new nt());
            }
            var S, R, I, P = b.trans, k = b.mutatedParts || (b.mutatedParts = {}), j = O(""), V = O(":dels"), Y = b.type, ee = b.type === "deleteRange" ? [b.range] : b.type === "delete" ? [b.keys] : b.values.length < 50 ? [fi(h, b).filter(function(Q) {
              return Q;
            }), b.values] : [], q = ee[0], $ = ee[1], ee = b.trans._cache;
            return p(q) ? (j.addKeys(q), (ee = Y === "delete" || q.length === $.length ? Ns(q, ee) : null) || V.addKeys(q), (ee || $) && (S = O, R = ee, I = $, d.indexes.forEach(function(Q) {
              var ne = S(Q.name || "");
              function he(fe) {
                return fe != null ? Q.extractKey(fe) : null;
              }
              function be(fe) {
                return Q.multiEntry && p(fe) ? fe.forEach(function(He) {
                  return ne.addKey(He);
                }) : ne.addKey(fe);
              }
              (R || I).forEach(function(fe, rt) {
                var ce = R && he(R[rt]), rt = I && he(I[rt]);
                ge(ce, rt) !== 0 && (ce != null && be(ce), rt != null && be(rt));
              });
            }))) : q ? ($ = { from: ($ = q.lower) !== null && $ !== void 0 ? $ : t.MIN_KEY, to: ($ = q.upper) !== null && $ !== void 0 ? $ : t.MAX_KEY }, V.add($), j.add($)) : (j.add(i), V.add(i), d.indexes.forEach(function(Q) {
              return O(Q.name).add(i);
            })), c.mutate(b).then(function(Q) {
              return !q || b.type !== "add" && b.type !== "put" || (j.addKeys(Q.results), E && E.forEach(function(ne) {
                for (var he = b.values.map(function(ce) {
                  return ne.extractKey(ce);
                }), be = ne.keyPath.findIndex(function(ce) {
                  return ce === h.keyPath;
                }), fe = 0, He = Q.results.length; fe < He; ++fe) he[fe][be] = Q.results[fe];
                O(ne.name).addKeys(he);
              })), P.mutatedParts = no(P.mutatedParts || {}, k), Q;
            });
          } }), _ = function(O) {
            var S = O.query, O = S.index, S = S.range;
            return [O, new nt((O = S.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : t.MAX_KEY)];
          }, N = { get: function(b) {
            return [h, new nt(b.key)];
          }, getMany: function(b) {
            return [h, new nt().addKeys(b.keys)];
          }, count: _, query: _, openCursor: _ };
          return f(N).forEach(function(b) {
            T[b] = function(O) {
              var S = re.subscr, R = !!S, I = Is(re, c) && As(b, O) ? O.obsSet = {} : S;
              if (R) {
                var P = function($) {
                  return $ = "idb://".concat(r, "/").concat(u, "/").concat($), I[$] || (I[$] = new nt());
                }, k = P(""), j = P(":dels"), S = N[b](O), R = S[0], S = S[1];
                if ((b === "query" && R.isPrimaryKey && !O.values ? j : P(R.name || "")).add(S), !R.isPrimaryKey) {
                  if (b !== "count") {
                    var V = b === "query" && v && O.values && c.query(s(s({}, O), { values: !1 }));
                    return c[b].apply(this, arguments).then(function($) {
                      if (b === "query") {
                        if (v && O.values) return V.then(function(he) {
                          return he = he.result, k.addKeys(he), $;
                        });
                        var ee = O.values ? $.result.map(y) : $.result;
                        (O.values ? k : j).addKeys(ee);
                      } else if (b === "openCursor") {
                        var Q = $, ne = O.values;
                        return Q && Object.create(Q, { key: { get: function() {
                          return j.addKey(Q.primaryKey), Q.key;
                        } }, primaryKey: { get: function() {
                          var he = Q.primaryKey;
                          return j.addKey(he), he;
                        } }, value: { get: function() {
                          return ne && k.addKey(Q.primaryKey), Q.value;
                        } } });
                      }
                      return $;
                    });
                  }
                  j.add(i);
                }
              }
              return c[b].apply(this, arguments);
            };
          }), T;
        } });
      } };
      function Cs(t, r, i) {
        if (i.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return i.numFailures === u ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(c, d) {
          return !(d in i.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(c, d) {
          return !(d in i.failures);
        })), r);
      }
      function di(t, r) {
        return i = t, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < ge(i, u.lower) : 0 <= ge(i, u.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? ge(t, r.upper) < 0 : ge(t, r.upper) <= 0));
        var i, u;
      }
      function Ps(t, r, N, u, c, d) {
        if (!N || N.length === 0) return t;
        var h = r.query.index, y = h.multiEntry, v = r.query.range, E = u.schema.primaryKey.extractKey, T = h.extractKey, _ = (h.lowLevelIndex || h).extractKey, N = N.reduce(function(b, O) {
          var S = b, R = [];
          if (O.type === "add" || O.type === "put") for (var I = new nt(), P = O.values.length - 1; 0 <= P; --P) {
            var k, j = O.values[P], V = E(j);
            I.hasKey(V) || (k = T(j), (y && p(k) ? k.some(function(Q) {
              return di(Q, v);
            }) : di(k, v)) && (I.addKey(V), R.push(j)));
          }
          switch (O.type) {
            case "add":
              var Y = new nt().addKeys(r.values ? b.map(function(ne) {
                return E(ne);
              }) : b), S = b.concat(r.values ? R.filter(function(ne) {
                return ne = E(ne), !Y.hasKey(ne) && (Y.addKey(ne), !0);
              }) : R.map(function(ne) {
                return E(ne);
              }).filter(function(ne) {
                return !Y.hasKey(ne) && (Y.addKey(ne), !0);
              }));
              break;
            case "put":
              var q = new nt().addKeys(O.values.map(function(ne) {
                return E(ne);
              }));
              S = b.filter(function(ne) {
                return !q.hasKey(r.values ? E(ne) : ne);
              }).concat(r.values ? R : R.map(function(ne) {
                return E(ne);
              }));
              break;
            case "delete":
              var $ = new nt().addKeys(O.keys);
              S = b.filter(function(ne) {
                return !$.hasKey(r.values ? E(ne) : ne);
              });
              break;
            case "deleteRange":
              var ee = O.range;
              S = b.filter(function(ne) {
                return !di(E(ne), ee);
              });
          }
          return S;
        }, t);
        return N === t ? t : (N.sort(function(b, O) {
          return ge(_(b), _(O)) || ge(E(b), E(O));
        }), r.limit && r.limit < 1 / 0 && (N.length > r.limit ? N.length = r.limit : t.length === r.limit && N.length < r.limit && (c.dirty = !0)), d ? Object.freeze(N) : N);
      }
      function ks(t, r) {
        return ge(t.lower, r.lower) === 0 && ge(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function zu(t, r) {
        return function(i, u, c, d) {
          if (i === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = ge(i, u)) === 0) {
            if (c && d) return 0;
            if (c) return 1;
            if (d) return -1;
          }
          return u;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(i, u, c, d) {
          if (i === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = ge(i, u)) === 0) {
            if (c && d) return 0;
            if (c) return -1;
            if (d) return 1;
          }
          return u;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function Ju(t, r, i, u) {
        t.subscribers.add(i), u.addEventListener("abort", function() {
          var c, d;
          t.subscribers.delete(i), t.subscribers.size === 0 && (c = t, d = r, setTimeout(function() {
            c.subscribers.size === 0 && _e(d, c);
          }, 3e3));
        });
      }
      var Qu = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(i, u, c) {
          var d, h, y = t.transaction(i, u, c);
          return u === "readwrite" && (h = (d = new AbortController()).signal, c = function(v) {
            return function() {
              if (d.abort(), u === "readwrite") {
                for (var E = /* @__PURE__ */ new Set(), T = 0, _ = i; T < _.length; T++) {
                  var N = _[T], b = xn["idb://".concat(r, "/").concat(N)];
                  if (b) {
                    var O = t.table(N), S = b.optimisticOps.filter(function(ne) {
                      return ne.trans === y;
                    });
                    if (y._explicit && v && y.mutatedParts) for (var R = 0, I = Object.values(b.queries.query); R < I.length; R++) for (var P = 0, k = (Y = I[R]).slice(); P < k.length; P++) ii((q = k[P]).obsSet, y.mutatedParts) && (_e(Y, q), q.subscribers.forEach(function(ne) {
                      return E.add(ne);
                    }));
                    else if (0 < S.length) {
                      b.optimisticOps = b.optimisticOps.filter(function(ne) {
                        return ne.trans !== y;
                      });
                      for (var j = 0, V = Object.values(b.queries.query); j < V.length; j++) for (var Y, q, $, ee = 0, Q = (Y = V[j]).slice(); ee < Q.length; ee++) (q = Q[ee]).res != null && y.mutatedParts && (v && !q.dirty ? ($ = Object.isFrozen(q.res), $ = Ps(q.res, q.req, S, O, q, $), q.dirty ? (_e(Y, q), q.subscribers.forEach(function(ne) {
                        return E.add(ne);
                      })) : $ !== q.res && (q.res = $, q.promise = te.resolve({ result: $ }))) : (q.dirty && _e(Y, q), q.subscribers.forEach(function(ne) {
                        return E.add(ne);
                      })));
                    }
                  }
                }
                E.forEach(function(ne) {
                  return ne();
                });
              }
            };
          }, y.addEventListener("abort", c(!1), { signal: h }), y.addEventListener("error", c(!1), { signal: h }), y.addEventListener("complete", c(!0), { signal: h })), y;
        }, table: function(i) {
          var u = t.table(i), c = u.schema.primaryKey;
          return s(s({}, u), { mutate: function(d) {
            var h = re.trans;
            if (c.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(d);
            var y = xn["idb://".concat(r, "/").concat(i)];
            return y ? (h = u.mutate(d), d.type !== "add" && d.type !== "put" || !(50 <= d.values.length || fi(c, d).some(function(v) {
              return v == null;
            })) ? (y.optimisticOps.push(d), d.mutatedParts && ro(d.mutatedParts), h.then(function(v) {
              0 < v.numFailures && (_e(y.optimisticOps, d), (v = Cs(0, d, v)) && y.optimisticOps.push(v), d.mutatedParts && ro(d.mutatedParts));
            }), h.catch(function() {
              _e(y.optimisticOps, d), d.mutatedParts && ro(d.mutatedParts);
            })) : h.then(function(v) {
              var E = Cs(0, s(s({}, d), { values: d.values.map(function(T, _) {
                var N;
                return v.failures[_] ? T : (T = (N = c.keyPath) !== null && N !== void 0 && N.includes(".") ? vt(T) : s({}, T), Ie(T, c.keyPath, v.results[_]), T);
              }) }), v);
              y.optimisticOps.push(E), queueMicrotask(function() {
                return d.mutatedParts && ro(d.mutatedParts);
              });
            }), h) : u.mutate(d);
          }, query: function(d) {
            if (!Is(re, u) || !As("query", d)) return u.query(d);
            var h = ((E = re.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", _ = re, y = _.requery, v = _.signal, E = function(O, S, R, I) {
              var P = xn["idb://".concat(O, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[R])) return [null, !1, P, null];
              var k = S[(I.query ? I.query.index.name : null) || ""];
              if (!k) return [null, !1, P, null];
              switch (R) {
                case "query":
                  var j = k.find(function(V) {
                    return V.req.limit === I.limit && V.req.values === I.values && ks(V.req.query.range, I.query.range);
                  });
                  return j ? [j, !0, P, k] : [k.find(function(V) {
                    return ("limit" in V.req ? V.req.limit : 1 / 0) >= I.limit && (!I.values || V.req.values) && zu(V.req.query.range, I.query.range);
                  }), !1, P, k];
                case "count":
                  return j = k.find(function(V) {
                    return ks(V.req.query.range, I.query.range);
                  }), [j, !!j, P, k];
              }
            }(r, i, "query", d), T = E[0], _ = E[1], N = E[2], b = E[3];
            return T && _ ? T.obsSet = d.obsSet : (_ = u.query(d).then(function(O) {
              var S = O.result;
              if (T && (T.res = S), h) {
                for (var R = 0, I = S.length; R < I; ++R) Object.freeze(S[R]);
                Object.freeze(S);
              } else O.result = vt(S);
              return O;
            }).catch(function(O) {
              return b && T && _e(b, T), Promise.reject(O);
            }), T = { obsSet: d.obsSet, promise: _, subscribers: /* @__PURE__ */ new Set(), type: "query", req: d, dirty: !1 }, b ? b.push(T) : (b = [T], (N = N || (xn["idb://".concat(r, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[d.query.index.name || ""] = b)), Ju(T, b, y, v), T.promise.then(function(O) {
              return { result: Ps(O.result, d, N?.optimisticOps, u, T, h) };
            });
          } });
        } });
      } };
      function io(t, r) {
        return new Proxy(t, { get: function(i, u, c) {
          return u === "db" ? r : Reflect.get(i, u, c);
        } });
      }
      var Gt = (Ve.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new oe.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new oe.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, i = r.filter(function(u) {
          return u._cfg.version === t;
        })[0];
        return i || (i = new this.Version(t), r.push(i), r.sort(Hu), i.stores({}), this._state.autoSchema = !1, i);
      }, Ve.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || re.letThrough || this._vip) ? t() : new te(function(i, u) {
          if (r._state.openComplete) return u(new oe.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new oe.DatabaseClosed());
            r.open().catch(g);
          }
          r._state.dbReadyPromise.then(i, u);
        }).then(t);
      }, Ve.prototype.use = function(t) {
        var r = t.stack, i = t.create, u = t.level, c = t.name;
        return c && this.unuse({ stack: r, name: c }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: i, level: u ?? 10, name: c }), t.sort(function(d, h) {
          return d.level - h.level;
        }), this;
      }, Ve.prototype.unuse = function(t) {
        var r = t.stack, i = t.name, u = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(c) {
          return u ? c.create !== u : !!i && c.name !== i;
        })), this;
      }, Ve.prototype.open = function() {
        var t = this;
        return wn(Ue, function() {
          return qu(t);
        });
      }, Ve.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = Hn.indexOf(this);
        if (0 <= r && Hn.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new te(function(i) {
          t.dbReadyResolve = i;
        }), t.openCanceller = new te(function(i, u) {
          t.cancelOpen = u;
        }));
      }, Ve.prototype.close = function(i) {
        var r = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new oe.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new oe.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Ve.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new te(function(c, d) {
          function h() {
            r.close(t);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = Be(function() {
              var v, E, T;
              v = r._deps, E = r.name, T = v.indexedDB, v = v.IDBKeyRange, ni(T) || E === Gr || ti(T, v).delete(E).catch(g), c();
            }), y.onerror = kt(d), y.onblocked = r._fireOnBlocked;
          }
          if (i) throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
        });
      }, Ve.prototype.backendDB = function() {
        return this.idbdb;
      }, Ve.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ve.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Ve.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ve.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ve.prototype, "tables", { get: function() {
        var t = this;
        return f(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ve.prototype.transaction = function() {
        var t = (function(r, i, u) {
          var c = arguments.length;
          if (c < 2) throw new oe.InvalidArgument("Too few arguments");
          for (var d = new Array(c - 1); --c; ) d[c - 1] = arguments[c];
          return u = d.pop(), [r, At(d), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Ve.prototype._transaction = function(t, r, i) {
        var u = this, c = re.trans;
        c && c.db === this && t.indexOf("!") === -1 || (c = null);
        var d, h, y = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(E) {
            if (E = E instanceof u.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return E;
          }), t == "r" || t === Go) d = Go;
          else {
            if (t != "rw" && t != qo) throw new oe.InvalidArgument("Invalid transaction mode: " + t);
            d = qo;
          }
          if (c) {
            if (c.mode === Go && d === qo) {
              if (!y) throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              c = null;
            }
            c && h.forEach(function(E) {
              if (c && c.storeNames.indexOf(E) === -1) {
                if (!y) throw new oe.SubTransaction("Table " + E + " not included in parent transaction.");
                c = null;
              }
            }), y && c && !c.active && (c = null);
          }
        } catch (E) {
          return c ? c._promise(null, function(T, _) {
            _(E);
          }) : Fe(E);
        }
        var v = (function E(T, _, N, b, O) {
          return te.resolve().then(function() {
            var S = re.transless || re, R = T._createTransaction(_, N, T._dbSchema, b);
            if (R.explicit = !0, S = { trans: R, transless: S }, b) R.idbtrans = b.idbtrans;
            else try {
              R.create(), R.idbtrans._explicit = !0, T._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === en.InvalidState && T.isOpen() && 0 < --T._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), T.close({ disableAutoOpen: !1 }), T.open().then(function() {
                return E(T, _, N, null, O);
              })) : Fe(k);
            }
            var I, P = Tt(O);
            return P && Un(), S = te.follow(function() {
              var k;
              (I = O.call(R, R)) && (P ? (k = on.bind(null, null), I.then(k, k)) : typeof I.next == "function" && typeof I.throw == "function" && (I = li(I)));
            }, S), (I && typeof I.then == "function" ? te.resolve(I).then(function(k) {
              return R.active ? k : Fe(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return I;
            })).then(function(k) {
              return b && R._resolve(), R._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return R._reject(k), Fe(k);
            });
          });
        }).bind(null, this, d, h, c, i);
        return c ? c._promise(d, v, "lock") : re.trans ? wn(re.transless, function() {
          return u._whenReady(v);
        }) : this._whenReady(v);
      }, Ve.prototype.table = function(t) {
        if (!C(this._allTables, t)) throw new oe.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Ve);
      function Ve(t, r) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var u = Ve.dependencies;
        this._options = r = s({ addons: Ve.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var c, d, h, y, v, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: g, dbReadyPromise: null, cancelOpen: g, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        E.dbReadyPromise = new te(function(_) {
          E.dbReadyResolve = _;
        }), E.openCanceller = new te(function(_, N) {
          E.cancelOpen = N;
        }), this._state = E, this.name = t, this.on = sr(this, "populate", "blocked", "versionchange", "close", { ready: [W, g] }), this.once = function(_, N) {
          var b = function() {
            for (var O = [], S = 0; S < arguments.length; S++) O[S] = arguments[S];
            i.on(_).unsubscribe(b), N.apply(i, O);
          };
          return i.on(_, b);
        }, this.on.ready.subscribe = xe(this.on.ready.subscribe, function(_) {
          return function(N, b) {
            Ve.vip(function() {
              var O, S = i._state;
              S.openComplete ? (S.dbOpenError || te.resolve().then(N), b && _(N)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(N), b && _(N)) : (_(N), O = i, b || _(function R() {
                O.on.ready.unsubscribe(N), O.on.ready.unsubscribe(R);
              }));
            });
          };
        }), this.Collection = (c = this, ar(Du.prototype, function(I, R) {
          this.db = c;
          var b = ls, O = null;
          if (R) try {
            b = R();
          } catch (P) {
            O = P;
          }
          var S = I._ctx, R = S.table, I = R.hook.reading.fire;
          this._ctx = { table: R, index: S.index, isPrimKey: !S.index || R.schema.primKey.keyPath && S.index === R.schema.primKey.name, range: b, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: S.or, valueMapper: I !== w ? I : null };
        })), this.Table = (d = this, ar(ps.prototype, function(_, N, b) {
          this.db = d, this._tx = b, this.name = _, this.schema = N, this.hook = d._allTables[_] ? d._allTables[_].hook : sr(null, { creating: [U, g], reading: [L, w], updating: [Z, g], deleting: [F, g] });
        })), this.Transaction = (h = this, ar(Lu.prototype, function(_, N, b, O, S) {
          var R = this;
          _ !== "readonly" && N.forEach(function(I) {
            I = (I = b[I]) === null || I === void 0 ? void 0 : I.yProps, I && (N = N.concat(I.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = _, this.storeNames = N, this.schema = b, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = sr(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new te(function(I, P) {
            R._resolve = I, R._reject = P;
          }), this._completion.then(function() {
            R.active = !1, R.on.complete.fire();
          }, function(I) {
            var P = R.active;
            return R.active = !1, R.on.error.fire(I), R.parent ? R.parent._reject(I) : P && R.idbtrans && R.idbtrans.abort(), Fe(I);
          });
        })), this.Version = (y = this, ar(Gu.prototype, function(_) {
          this.db = y, this._cfg = { version: _, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, ar(vs.prototype, function(_, N, b) {
          if (this.db = v, this._ctx = { table: _, index: N === ":id" ? null : N, or: b }, this._cmp = this._ascending = ge, this._descending = function(O, S) {
            return ge(S, O);
          }, this._max = function(O, S) {
            return 0 < ge(O, S) ? O : S;
          }, this._min = function(O, S) {
            return ge(O, S) < 0 ? O : S;
          }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new oe.MissingAPI();
        })), this.on("versionchange", function(_) {
          0 < _.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(_) {
          !_.newVersion || _.newVersion < _.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(_.oldVersion / 10));
        }), this._maxKey = fr(r.IDBKeyRange), this._createTransaction = function(_, N, b, O) {
          return new i.Transaction(_, N, b, i._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(_) {
          i.on("blocked").fire(_), Hn.filter(function(N) {
            return N.name === i.name && N !== i && !N._state.vcFired;
          }).map(function(N) {
            return N.on("versionchange").fire(_);
          });
        }, this.use(Yu), this.use(Qu), this.use(Xu), this.use($u), this.use(Wu);
        var T = new Proxy(this, { get: function(_, N, b) {
          if (N === "_vip") return !0;
          if (N === "table") return function(S) {
            return io(i.table(S), T);
          };
          var O = Reflect.get(_, N, b);
          return O instanceof ps ? io(O, T) : N === "tables" ? O.map(function(S) {
            return io(S, T);
          }) : N === "_createTransaction" ? function() {
            return io(O.apply(this, arguments), T);
          } : O;
        } });
        this.vip = T, u.forEach(function(_) {
          return _(i);
        });
      }
      var so, Et = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Zu = (pi.prototype.subscribe = function(t, r, i) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: i });
      }, pi.prototype[Et] = function() {
        return this;
      }, pi);
      function pi(t) {
        this._subscribe = t;
      }
      try {
        so = { indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB, IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange };
      } catch {
        so = { indexedDB: null, IDBKeyRange: null };
      }
      function Ds(t) {
        var r, i = !1, u = new Zu(function(c) {
          var d = Tt(t), h, y = !1, v = {}, E = {}, T = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), _ && un.storagemutated.unsubscribe(b));
          } };
          c.start && c.start(T);
          var _ = !1, N = function() {
            return Vo(O);
          }, b = function(S) {
            no(v, S), ii(E, v) && N();
          }, O = function() {
            var S, R, I;
            !y && so.indexedDB && (v = {}, S = {}, h && h.abort(), h = new AbortController(), I = function(P) {
              var k = Bn();
              try {
                d && Un();
                var j = rn(t, P);
                return j = d ? j.finally(on) : j;
              } finally {
                k && Kn();
              }
            }(R = { subscr: S, signal: h.signal, requery: N, querier: t, trans: null }), Promise.resolve(I).then(function(P) {
              i = !0, r = P, y || R.signal.aborted || (v = {}, function(k) {
                for (var j in k) if (C(k, j)) return;
                return 1;
              }(E = S) || _ || (un(cr, b), _ = !0), Vo(function() {
                return !y && c.next && c.next(P);
              }));
            }, function(P) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || y || Vo(function() {
                y || c.error && c.error(P);
              });
            }));
          };
          return setTimeout(N, 0), T;
        });
        return u.hasValue = function() {
          return i;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var Tn = Gt;
      function hi(t) {
        var r = ln;
        try {
          ln = !0, un.storagemutated.fire(t), ui(t, !0);
        } finally {
          ln = r;
        }
      }
      K(Tn, s(s({}, ir), { delete: function(t) {
        return new Tn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new Tn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = Tn.dependencies, i = r.indexedDB, r = r.IDBKeyRange, (ni(i) ? Promise.resolve(i.databases()).then(function(u) {
            return u.map(function(c) {
              return c.name;
            }).filter(function(c) {
              return c !== Gr;
            });
          }) : ti(i, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Fe(new oe.MissingAPI());
        }
        var r, i;
      }, defineClass: function() {
        return function(t) {
          m(this, t);
        };
      }, ignoreTransaction: function(t) {
        return re.trans ? wn(re.transless, t) : t();
      }, vip: ri, async: function(t) {
        return function() {
          try {
            var r = li(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : te.resolve(r);
          } catch (i) {
            return Fe(i);
          }
        };
      }, spawn: function(t, r, i) {
        try {
          var u = li(t.apply(i, r || []));
          return u && typeof u.then == "function" ? u : te.resolve(u);
        } catch (c) {
          return Fe(c);
        }
      }, currentTransaction: { get: function() {
        return re.trans || null;
      } }, waitFor: function(t, r) {
        return r = te.resolve(typeof t == "function" ? Tn.ignoreTransaction(t) : t).timeout(r || 6e4), re.trans ? re.trans.waitFor(r) : r;
      }, Promise: te, debug: { get: function() {
        return B;
      }, set: function(t) {
        se(t);
      } }, derive: G, extend: m, props: K, override: xe, Events: sr, on: un, liveQuery: Ds, extendObservabilitySet: no, getByKeyPath: Ce, setByKeyPath: Ie, delByKeyPath: function(t, r) {
        typeof r == "string" ? Ie(t, r, void 0) : "length" in r && [].map.call(r, function(i) {
          Ie(t, i, void 0);
        });
      }, shallowClone: _t, deepClone: vt, getObjectDiff: ci, cmp: ge, asap: Ae, minKey: -1 / 0, addons: [], connections: Hn, errnames: en, dependencies: so, cache: xn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, i) {
        return t + r / Math.pow(10, 2 * i);
      }) })), Tn.maxKey = fr(Tn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (un(cr, function(t) {
        ln || (t = new CustomEvent(Yo, { detail: t }), ln = !0, dispatchEvent(t), ln = !1);
      }), addEventListener(Yo, function(t) {
        t = t.detail, ln || hi(t);
      }));
      var qn, ln = !1, Ms = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ms = function() {
        (qn = new BroadcastChannel(Yo)).onmessage = function(t) {
          return t.data && hi(t.data);
        };
      })(), typeof qn.unref == "function" && qn.unref(), un(cr, function(t) {
        ln || qn.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Gt.disableBfCache && t.persisted) {
          B && console.debug("Dexie: handling persisted pagehide"), qn?.close();
          for (var r = 0, i = Hn; r < i.length; r++) i[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Gt.disableBfCache && t.persisted && (B && console.debug("Dexie: handling persisted pageshow"), Ms(), hi({ all: new nt(-1 / 0, [[]]) }));
      })), te.rejectionMapper = function(t, r) {
        return !t || t instanceof Ft || t instanceof TypeError || t instanceof SyntaxError || !t.name || !tn[t.name] ? t : (r = new tn[t.name](r || t.message, t), "stack" in t && D(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, se(B), s(Gt, Object.freeze({ __proto__: null, Dexie: Gt, liveQuery: Ds, Entity: cs, cmp: ge, PropModification: ur, replacePrefix: function(t, r) {
        return new ur({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new ur({ add: t });
      }, remove: function(t) {
        return new ur({ remove: t });
      }, default: Gt, RangeSet: nt, mergeRanges: hr, rangesOverlap: xs }), { default: Gt }), Gt;
    });
  }(_o)), _o.exports;
}
var Pf = Cf();
const Ki = /* @__PURE__ */ If(Pf), ga = Symbol.for("Dexie"), Ro = globalThis[ga] || (globalThis[ga] = Ki);
if (Ki.semVer !== Ro.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ki.semVer} and ${Ro.semVer}`);
const {
  liveQuery: Nd,
  mergeRanges: Id,
  rangesOverlap: Ad,
  RangeSet: Cd,
  cmp: Pd,
  Entity: kd,
  PropModification: Dd,
  replacePrefix: Md,
  add: jd,
  remove: Ld,
  DexieYProvider: Bd
} = Ro;
var Ot = /* @__PURE__ */ ((e) => (e.GOOSE = "GOOSE", e.SMV = "SMV", e.REPORT = "Report", e.INTERNAL = "Internal", e.WIRED = "Wired", e.CONTROL = "Control", e))(Ot || {});
const ya = {
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
    ensureRelationship: o,
    findParentRecordsWithinDepthAndGivenTagName: a,
    db: e
  };
  async function n(l) {
    const f = {
      ...l,
      id: crypto.randomUUID()
    };
    try {
      const p = await e.table(f.tagName).add(f), m = await e.table(f.tagName).get(p);
      if (!m) {
        const A = { msg: "could not find added record", table: f.tagName, addedId: p };
        throw console.error(A), new Error(JSON.stringify(A));
      }
      return m;
    } catch (p) {
      const m = {
        msg: "could not add record",
        db: e.name,
        table: f.tagName,
        recordToAdd: f,
        err: p
      };
      throw console.error(m), new Error(JSON.stringify(m));
    }
  }
  async function o(l, f) {
    const p = l.children?.some(
      (A) => A.id === f.id && A.tagName === f.tagName
    ), m = f.parent?.id === l.id && f.parent?.tagName === l.tagName;
    p || (l.children || (l.children = []), l.children.push({
      id: f.id,
      tagName: f.tagName
    }), await e.table(l.tagName).update(l.id, l)), m || (f.parent = {
      id: l.id,
      tagName: l.tagName
    }, await e.table(f.tagName).update(f.id, f));
  }
  async function s(l, f) {
    return !l.children || l.children.length === 0 ? [] : await Promise.all(
      l.children.filter((m) => m.tagName === f).map(async (m) => {
        const A = m.tagName, x = m.id;
        return await e.table(A).get({ id: x });
      })
    );
  }
  async function a(l, f, p = []) {
    const m = [];
    let A = l;
    for (let x = 0; x < f; x++) {
      if (!A.parent)
        return m;
      const C = await e.table(A.parent.tagName).get(A.parent.id);
      if (!C) {
        const K = {
          msg: "Parent record not found",
          table: A.parent.tagName,
          id: A.parent.id
        };
        throw console.error(K), new Error(JSON.stringify(K));
      }
      (p.length == 0 || p.length > 0 && p.includes(C.tagName)) && m.push(C), A = C;
    }
    return m;
  }
}
function kf(e, n) {
  return e.attributes?.find((o) => o.name === n);
}
function Re(e, n) {
  return e?.attributes?.find((o) => o.name === n)?.value;
}
function Df(e) {
  return {
    findAllEnrichedLNodes: n,
    findAllLNodeTypes: o,
    enrichWithDataObjectSpecifications: l
  };
  async function n() {
    const p = await f();
    return p.length ? await l(p) : [];
  }
  async function o() {
    const p = await e.table("LNodeType").toArray(), m = [];
    for (const A of p)
      m.push({
        id: A.id,
        typeId: Re(A, "id") ?? "",
        lnClass: Re(A, "lnClass") ?? "",
        dataObjects: await s(A)
      });
    return m;
  }
  async function s(p) {
    if (!p.children) return [];
    const m = [];
    for (const A of p.children) {
      if (A.tagName !== "DO") continue;
      const x = await e.table("DO").get(A.id);
      x && m.push({
        id: x.id,
        name: Re(x, "name") ?? "",
        type: Re(x, "type") ?? "",
        dataAttributes: await a(x),
        lnodeTypeId: p.id
      });
    }
    return m;
  }
  async function a(p) {
    const m = Re(p, "type");
    if (!m) return [];
    const A = (await e.table("DOType").toArray()).find(
      (C) => C.attributes?.find((K) => K.name === "id" && K.value === m)
    );
    if (!A || !A.children) return [];
    const x = [];
    for (const C of A.children) {
      if (C.tagName !== "DA") continue;
      const K = await e.table("DA").get(C.id);
      K && x.push({
        id: K.id,
        name: Re(K, "name") ?? "",
        type: Re(K, "type") ?? "",
        bType: Re(K, "bType") ?? "",
        fc: Re(K, "fc") ?? "",
        dataObjectId: p.id
      });
    }
    return x;
  }
  async function l(p) {
    const m = await e.table("Private").toArray(), A = await e.table("DOS").toArray(), x = await e.table("DAS").toArray(), C = await e.table("SubscriberLNode").toArray();
    return Promise.all(
      p.map(async (K) => {
        const M = m.find(
          (G) => G.parent?.id === K.id && G.parent?.tagName === "LNode" && Re(G, "type") === "eIEC61850-6-100"
        );
        if (!M || !M.children)
          return { ...K, dataObjectSpecifications: [] };
        const D = [];
        for (const G of M.children) {
          if (G.tagName !== "DOS") continue;
          const Ee = A.find((ye) => ye.id === G.id);
          if (!Ee) continue;
          const me = [];
          if (Ee.children)
            for (const ye of Ee.children) {
              if (ye.tagName !== "DAS") continue;
              const xe = x.find((Ae) => Ae.id === ye.id);
              if (!xe) continue;
              let ae;
              if (xe.children) {
                const Ae = xe.children.find((Ce) => Ce.tagName === "SubscriberLNode");
                if (Ae) {
                  const Ce = C.find((Ie) => Ie.id === Ae.id);
                  Ce && (ae = {
                    id: Ce.id,
                    inputName: Re(Ce, "inputName") ?? "",
                    service: Su(Ce, "service"),
                    pLN: Re(Ce, "pLN") ?? ""
                  });
                }
              }
              me.push({
                id: xe.id,
                name: Re(xe, "name") ?? "",
                desc: Re(xe, "desc") ?? "",
                dataObjectSpecificationId: Ee.id,
                subscriberLNode: ae
              });
            }
          D.push({
            id: Ee.id,
            name: Re(Ee, "name") ?? "",
            desc: Re(Ee, "desc") ?? "",
            dataAttributeSpecifications: me,
            lNodeId: K.id
          });
        }
        return { ...K, dataObjectSpecifications: D };
      })
    );
  }
  async function f() {
    return (await e.table("LNode").toArray()).map((m) => ({
      id: m.id,
      uuid: Re(m, "uuid") ?? "",
      iedName: Re(m, "iedName") ?? "",
      prefix: Re(m, "prefix") ?? "",
      lnClass: Re(m, "lnClass") ?? "",
      lnInst: Re(m, "lnInst") ?? "",
      lnType: Re(m, "lnType") ?? "",
      dataObjects: []
    }));
  }
}
function Su(e, n) {
  const o = e?.attributes?.find((a) => a.name === n)?.value;
  if (!o) return;
  switch (o.toUpperCase()) {
    case "GOOSE":
      return Ot.GOOSE;
    case "SMV":
      return Ot.SMV;
    case "REPORT":
      return Ot.REPORT;
    case "INTERNAL":
      return Ot.INTERNAL;
    case "WIRED":
      return Ot.WIRED;
    case "CONTROL":
      return Ot.CONTROL;
    default:
      return;
  }
}
async function Nu(e) {
  try {
    const n = new Ro(e);
    return await n.open(), n;
  } catch (n) {
    throw console.error("Error opening database:", n), n;
  }
}
function Mf(e) {
  const n = Ru(e);
  return {
    findAllExistingConnections: o,
    findAllExistingControlledConnections: s
  };
  async function o() {
    const a = await e.table("SourceRef").toArray();
    if (!a.length) return [];
    const l = [];
    for (const f of a) {
      if (!f.attributes) continue;
      const p = Re(f, "sourceLNodeUuid"), m = await e.table("LNode").toArray().then(
        (C) => C.find(
          (K) => K.attributes?.some(
            (M) => M.name === "uuid" && M.value === p
          )
        )?.id
      ) || null, A = await n.findParentRecordsWithinDepthAndGivenTagName(
        f,
        3,
        ["LNode"]
      );
      if (A.length != 1) {
        const C = {
          msg: "LNode record not found for SourceRef id",
          id: f.id
        };
        throw console.error(C), new Error(JSON.stringify(C));
      }
      const x = {
        sourceLNodeId: m,
        destinationLNodeId: A[0].id,
        sourceDataObject: Re(f, "sourceDoName") || "",
        sourceDataAttribute: Re(f, "sourceDaName") || "",
        dataflowType: Su(f, "service"),
        inputInstance: Re(f, "inputInst") || "",
        input: Re(f, "input") || ""
      };
      l.push(x);
    }
    return l;
  }
  async function s() {
    const a = await e.table("ControlRef").toArray();
    if (!a.length) return [];
    const l = [];
    for (const f of a) {
      if (!f.attributes) continue;
      const p = Re(f, "controlledLNodeUuid"), m = Re(f, "controlledDoName"), A = await e.table("LNode").toArray().then(
        (K) => K.find(
          (M) => M.attributes?.some(
            (D) => D.name === "uuid" && D.value === p
          )
        )?.id
      ) || null, x = await n.findParentRecordsWithinDepthAndGivenTagName(
        f,
        3,
        // ControlRef ->  LNodeOutputs -> Private -> LNode
        ["LNode"]
      );
      if (x.length != 1) {
        const K = {
          msg: "LNode record not found for ControlRef id",
          id: f.id
        };
        throw console.error(K), new Error(JSON.stringify(K));
      }
      const C = {
        controllerLNodeId: x[0].id,
        controlledLNodeId: A,
        controlledDataObject: m || "",
        dataflowType: Ot.CONTROL,
        outputInstance: Re(f, "outputInst") || "",
        outputName: Re(f, "output") || ""
      };
      l.push(C);
    }
    return l;
  }
}
function So(e) {
  return `${e.prefix} ${e.lnClass} ${e.lnInst}`;
}
const jf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Lf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Bf = ["data-testid"], Kf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Uf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Hf = /* @__PURE__ */ kn({
  __name: "dataflow-connections",
  props: {
    connections: {}
  },
  setup(e) {
    const n = e, o = zt(() => [...n.connections].sort((s, a) => s.dataflowType < a.dataflowType ? -1 : s.dataflowType > a.dataflowType ? 1 : 0));
    return (s, a) => (Se(), De("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr]",
      style: Ke({
        gridTemplateRows: `repeat(${s.connections.length}, 50px)`
      })
    }, [
      (Se(!0), De($e, null, mn(o.value, (l, f) => (Se(), De($e, null, [
        z("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end",
          style: Ke({ gridRowStart: f + 1 })
        }, [
          z("span", jf, Qe(l.sourceDataObject), 1),
          z("span", Lf, Qe(l.sourceDataAttribute), 1)
        ], 4),
        z("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]",
          style: Ke({ gridRowStart: f + 1 })
        }, null, 4),
        z("div", {
          class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center",
          style: Ke({ gridRowStart: f + 1 }),
          "data-testid": `dataflow-line-${f}`
        }, null, 12, Bf),
        (Se(), De("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: Ke({ gridRowStart: f + 1 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, a[0] || (a[0] = [
          z("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ]), 4)),
        z("div", {
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm",
          style: Ke({ gridRowStart: f + 1 })
        }, Qe(l.dataflowType), 5),
        z("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: Ke({ gridRowStart: f + 1 })
        }, null, 4),
        z("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: Ke({ gridRowStart: f + 1 })
        }, [
          z("span", Kf, Qe(l.input), 1),
          z("span", Uf, Qe(l.inputInstance), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
}), Ff = ["data-testid"], Vf = { class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Gf = /* @__PURE__ */ kn({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(e) {
    return (n, o) => (Se(), De("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr]",
      style: Ke({
        gridTemplateRows: `repeat(${n.destinationPlaceHolderPorts.length}, 50px)`
      })
    }, [
      (Se(!0), De($e, null, mn(n.destinationPlaceHolderPorts, (s, a) => (Se(), De($e, null, [
        z("div", {
          class: "col-start-3 col-span-1 relative self-center",
          style: Ke({ gridRowStart: a + 1 })
        }, [
          z("div", {
            class: "h-[2px] bg-(--color-ocean-gray-100) absolute left-[80%] w-[20%]",
            "data-testid": `placeholder-line-${a}`
          }, null, 8, Ff)
        ], 4),
        (Se(), De("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: Ke({ gridRowStart: a + 1 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, o[0] || (o[0] = [
          z("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ]), 4)),
        z("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: Ke({ gridRowStart: a + 1 })
        }, null, 4),
        z("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: Ke({ gridRowStart: a + 1 })
        }, [
          z("span", Vf, Qe(s.input), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
}), qf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, $f = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Wf = ["data-testid"], Yf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Xf = /* @__PURE__ */ kn({
  __name: "dataflow-controlled-connections",
  props: {
    controlledConnections: {}
  },
  setup(e) {
    return (n, o) => (Se(), De("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr]",
      style: Ke({
        gridTemplateRows: `repeat(${n.controlledConnections.length}, 50px)`
      })
    }, [
      (Se(!0), De($e, null, mn(n.controlledConnections, (s, a) => (Se(), De($e, null, [
        z("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end",
          style: Ke({ gridRowStart: a + 1 })
        }, [
          z("span", qf, Qe(s.outputName), 1),
          z("span", $f, Qe(s.outputInstance), 1)
        ], 4),
        z("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]",
          style: Ke({ gridRowStart: a + 1 })
        }, null, 4),
        z("div", {
          class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center",
          style: Ke({ gridRowStart: a + 1 }),
          "data-testid": `dataflow-controlled-connection-line-${a}`
        }, null, 12, Wf),
        (Se(), De("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: Ke({ gridRowStart: a + 1 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, o[0] || (o[0] = [
          z("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ]), 4)),
        z("div", {
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm",
          style: Ke({ gridRowStart: a + 1 })
        }, Qe(s.dataflowType), 5),
        z("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: Ke({ gridRowStart: a + 1 })
        }, null, 4),
        z("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: Ke({ gridRowStart: a + 1 })
        }, [
          z("span", Yf, Qe(s.controlledDataObject), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
}), zf = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full min-h-[500px] mb-8 grid-rows-[100px_1fr]" }, Jf = ["value"], Qf = ["value"], Zf = ["value"], ed = ["value"], td = { class: "col-span-full row-start-2" }, nd = /* @__PURE__ */ kn({
  __name: "dataflow-visualisation",
  props: {
    lnodes: {},
    connections: {},
    controlledConnections: {}
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(e, { emit: n }) {
    const o = n, s = e;
    gn(
      () => s.lnodes,
      () => {
        a.value = void 0, l.value = void 0;
      }
    );
    const a = Rt(), l = Rt(), f = zt(
      () => s.lnodes.filter((M) => M.id !== l.value)
    ), p = zt(
      () => s.lnodes.filter((M) => M.id !== a.value)
    ), m = zt(() => !a.value || !l.value ? [] : s.connections.filter(
      (M) => M.sourceLNodeId === a.value && M.destinationLNodeId === l.value
    )), A = zt(() => !a.value || !l.value ? [] : s.controlledConnections.filter(
      (M) => M.controllerLNodeId === a.value && M.controlledLNodeId === l.value
    )), x = zt(() => l.value ? s.connections.filter(
      (M) => M.destinationLNodeId === l.value && !M.sourceLNodeId
    ) : []);
    function C(M) {
      a.value = M, o("sourceLNodeChange", M);
    }
    function K(M) {
      l.value = M, o("destinationLNodeChange", M);
    }
    return (M, D) => (Se(), De("div", zf, [
      D[5] || (D[5] = z("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      z("select", {
        value: a.value ?? "",
        onChange: D[0] || (D[0] = (G) => C(G.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        D[2] || (D[2] = bu(" > ")),
        D[3] || (D[3] = z("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (Se(!0), De($e, null, mn(f.value, (G) => (Se(), De("option", {
          key: G.id,
          value: G.id
        }, Qe(Cn(So)(G)), 9, Qf))), 128))
      ], 40, Jf),
      D[6] || (D[6] = z("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      z("select", {
        value: l.value ?? "",
        onChange: D[1] || (D[1] = (G) => K(G.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        D[4] || (D[4] = z("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (Se(!0), De($e, null, mn(p.value, (G) => (Se(), De("option", {
          key: G.id,
          value: G.id
        }, Qe(Cn(So)(G)), 9, ed))), 128))
      ], 40, Zf),
      z("div", td, [
        m.value.length > 0 ? (Se(), Sr(Hf, {
          key: 0,
          connections: m.value
        }, null, 8, ["connections"])) : go("", !0),
        A.value.length > 0 ? (Se(), Sr(Xf, {
          key: 1,
          controlledConnections: A.value
        }, null, 8, ["controlledConnections"])) : go("", !0),
        x.value.length > 0 ? (Se(), Sr(Gf, {
          key: 2,
          destinationPlaceHolderPorts: x.value
        }, null, 8, ["destinationPlaceHolderPorts"])) : go("", !0)
      ])
    ]));
  }
});
function rd(e) {
  const n = Ru(e);
  return {
    create: o
  };
  async function o(s, a, l) {
    const f = await od(e, n, l);
    await id(n, a, f, s);
  }
}
async function od(e, n, o) {
  const s = await e.table("LNode").get({ id: o.id });
  if (!s || !s.children || s.children.length == 0) {
    const p = {
      msg: `LNode element with uuid ${o.uuid} not found or empty`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  const a = await n.findChildRecordsByTagName(s, "Private");
  if (!a.filter((p) => kf(p, "type")?.value === "eIEC61850-6-100").at(0)) {
    const p = {
      msg: `Private element of type 'eIEC61850-6-100' not found in LNode with uuid ${o.uuid}`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  const f = await n.findChildRecordsByTagName(
    a[0],
    "LNodeInputs"
  );
  if (f.length != 1) {
    const p = {
      msg: `LNodeInputs element not found or more than one element found in LNode with uuid ${o.uuid}`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  return f[0];
}
async function id(e, n, o, s) {
  const a = await Si(
    e,
    s,
    n,
    o.namespace
  );
  if (await e.ensureRelationship(o, a), s.includeQuality) {
    let l = structuredClone(we(s));
    l.attribute = "q";
    const f = await Si(
      e,
      l,
      n,
      o.namespace
    );
    await e.ensureRelationship(o, f);
  }
  if (s.includeTimestamp) {
    let l = structuredClone(we(s));
    l.attribute = "t";
    const f = await Si(
      e,
      l,
      n,
      o.namespace
    );
    await e.ensureRelationship(o, f);
  }
}
async function Si(e, n, o, s) {
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
        value: o.lnClass
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
        value: o.uuid
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
const sd = ["open"], ad = { class: "modal-box" }, ud = { class: "grid grid-cols-2 gap-4 mt-4" }, ld = ["value"], cd = { class: "grid grid-cols-2 gap-4 mt-4" }, fd = ["value"], dd = { class: "grid grid-cols-2 gap-4 mt-4" }, pd = ["value"], hd = { class: "grid grid-cols-2 gap-4 mt-4" }, md = ["value"], gd = { class: "grid grid-cols-2 gap-4 mt-4" }, yd = ["value"], _d = { class: "grid grid-cols-2 gap-4 mt-4" }, vd = { class: "grid grid-cols-2 gap-4 mt-4" }, bd = { class: "mt-4" }, wd = { class: "mt-4" }, Ed = /* @__PURE__ */ kn({
  __name: "dataflow-creation-form",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    isOpen: { type: Boolean },
    lnodeTypes: {}
  },
  emits: ["update:isOpen", "connectionCreated"],
  setup(e, { emit: n }) {
    const o = e, s = n, a = Rt(p());
    gn(
      () => a.value.signal,
      (M, D) => {
        a.value.inputName = M;
      }
    ), gn(
      () => a.value.inputName,
      () => {
        a.value.inputInstance = "1";
      }
    ), gn(
      () => a.value.type,
      () => {
        switch (a.value.type) {
          case Ot.GOOSE:
          case Ot.SMV:
            a.value.includeQuality = !0, a.value.includeTimestamp = !1;
            break;
          case Ot.REPORT:
            a.value.includeQuality = !0, a.value.includeTimestamp = !0;
            break;
          default:
            a.value.includeQuality = !1, a.value.includeTimestamp = !1;
        }
      }
    );
    const l = zt(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((M) => M.typeId === o.sourceLNode?.lnType)?.dataObjects.filter(
      (M) => M.dataAttributes.some(
        (D) => ya[a.value.type].includes(
          D.fc
        )
      )
    ).map((M) => M.name)), f = zt(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((M) => M.typeId === o.sourceLNode?.lnType)?.dataObjects.find((M) => M.name === a.value.signal)?.dataAttributes.filter(
      (M) => ya[a.value.type].includes(
        M.fc
      )
    ).filter((M) => M.name !== "t" && M.name !== "q").map((M) => M.name) || []);
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
    function m(M) {
      for (const D of M)
        a.value[D] = "";
    }
    function A() {
      K(), s("update:isOpen", !1);
    }
    async function x() {
      try {
        if (!C(a.value))
          return;
        const M = localStorage.getItem("currentActiveFileDatabaseName");
        if (!M)
          throw new Error("no active file");
        const D = await Nu(M);
        await rd(D).create(
          a.value,
          o.sourceLNode,
          o.destinationLNode
        ), D.close(), s("connectionCreated"), A();
      } catch (M) {
        console.error("Error creating dataflow:", M), alert(`Error creating dataflow: ${M instanceof Error ? M.message : "Unknown error"}`);
      }
    }
    function C(M) {
      return M.type ? M.signal ? M.attribute ? M.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function K() {
      a.value = p();
    }
    return (M, D) => (Se(), De("dialog", {
      class: "modal",
      open: M.isOpen
    }, [
      z("div", ad, [
        D[24] || (D[24] = z("h3", { class: "text-lg font-bold" }, "Create Connection", -1)),
        z("button", {
          class: "absolute top-[1.5rem] right-[1.5rem] cursor-pointer",
          onClick: A,
          "aria-label": "Close"
        }, D[11] || (D[11] = [
          z("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 64 64"
          }, [
            z("path", { d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" })
          ], -1)
        ])),
        z("div", ud, [
          D[13] || (D[13] = z("label", {
            for: "dataflow-type-select",
            class: "col-start-1 self-center"
          }, "Dataflow Type", -1)),
          $t(z("select", {
            id: "dataflow-type-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[0] || (D[0] = (G) => a.value.type = G),
            onChange: D[1] || (D[1] = (G) => m(["signal", "attribute"]))
          }, [
            (Se(!0), De($e, null, mn(Object.values(Cn(Ot)), (G) => (Se(), De("option", {
              key: G,
              value: G
            }, Qe(G), 9, ld))), 128)),
            D[12] || (D[12] = z("option", {
              key: "empty",
              value: null
            }, "-", -1))
          ], 544), [
            [yr, a.value.type]
          ])
        ]),
        D[25] || (D[25] = z("hr", { class: "solid mt-4" }, null, -1)),
        z("div", cd, [
          D[14] || (D[14] = z("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          $t(z("select", {
            id: "source-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[2] || (D[2] = (G) => o.sourceLNode.id = G)
          }, [
            z("option", {
              value: o.sourceLNode.id
            }, Qe(Cn(So)(M.sourceLNode)), 9, fd)
          ], 512), [
            [yr, o.sourceLNode.id]
          ])
        ]),
        z("div", dd, [
          D[16] || (D[16] = z("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          $t(z("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[3] || (D[3] = (G) => a.value.signal = G),
            onChange: D[4] || (D[4] = (G) => m(["attribute"]))
          }, [
            (Se(!0), De($e, null, mn(l.value, (G) => (Se(), De("option", {
              key: G,
              value: G
            }, Qe(G), 9, pd))), 128)),
            D[15] || (D[15] = z("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 544), [
            [yr, a.value.signal]
          ])
        ]),
        z("div", hd, [
          D[18] || (D[18] = z("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          $t(z("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[5] || (D[5] = (G) => a.value.attribute = G)
          }, [
            (Se(!0), De($e, null, mn(f.value, (G) => (Se(), De("option", {
              key: G,
              value: G
            }, Qe(G), 9, md))), 128)),
            D[17] || (D[17] = z("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 512), [
            [yr, a.value.attribute]
          ])
        ]),
        D[26] || (D[26] = z("hr", { class: "solid mt-4" }, null, -1)),
        z("div", gd, [
          D[19] || (D[19] = z("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          $t(z("select", {
            id: "destination-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": D[6] || (D[6] = (G) => o.destinationLNode.id = G)
          }, [
            z("option", {
              value: o.destinationLNode.id
            }, Qe(Cn(So)(M.destinationLNode)), 9, yd)
          ], 512), [
            [yr, o.destinationLNode.id]
          ])
        ]),
        z("div", _d, [
          D[20] || (D[20] = z("label", {
            for: "input-name-input",
            class: "col-start-1 self-center"
          }, "Input Name", -1)),
          $t(z("input", {
            id: "input-name-input",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": D[7] || (D[7] = (G) => a.value.inputName = G)
          }, null, 512), [
            [ca, a.value.inputName]
          ])
        ]),
        z("div", vd, [
          D[21] || (D[21] = z("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          $t(z("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": D[8] || (D[8] = (G) => a.value.inputInstance = G)
          }, null, 512), [
            [ca, a.value.inputInstance]
          ])
        ]),
        D[27] || (D[27] = z("hr", { class: "solid mt-4" }, null, -1)),
        z("div", bd, [
          $t(z("input", {
            type: "checkbox",
            "onUpdate:modelValue": D[9] || (D[9] = (G) => a.value.includeQuality = G),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [fa, a.value.includeQuality]
          ]),
          D[22] || (D[22] = z("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        z("div", wd, [
          $t(z("input", {
            type: "checkbox",
            "onUpdate:modelValue": D[10] || (D[10] = (G) => a.value.includeTimestamp = G),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [fa, a.value.includeTimestamp]
          ]),
          D[23] || (D[23] = z("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        z("div", { class: "modal-action" }, [
          z("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            onClick: x
          }, " Save ")
        ])
      ])
    ], 8, sd));
  }
}), Od = { class: "flex flex-col items-center justify-center w-full" }, xd = ["disabled"], Td = /* @__PURE__ */ kn({
  __name: "dataflow-view",
  props: {
    sdks: {}
  },
  setup(e) {
    const n = e, o = Rt(), s = Rt(), a = Rt(!1), l = Rt([]), f = Rt([]), p = Rt([]), m = Rt([]);
    gn(
      () => n.sdks,
      () => {
        A(), x(), C();
      },
      { immediate: !0 }
    );
    async function A() {
      n.sdks && (l.value = await n.sdks.lnodeSDK.findAllEnrichedLNodes(), f.value = await n.sdks.lnodeSDK.findAllLNodeTypes());
    }
    async function x() {
      n.sdks && (p.value = await n.sdks.connectionSDK.findAllExistingConnections());
    }
    async function C() {
      n.sdks && (m.value = await n.sdks.connectionSDK.findAllExistingControlledConnections());
    }
    function K(Ee) {
      o.value = D(Ee);
    }
    function M(Ee) {
      s.value = D(Ee);
    }
    function D(Ee) {
      return l.value.find((me) => me.id === Ee) ?? void 0;
    }
    function G() {
      a.value = !0;
    }
    return (Ee, me) => (Se(), De("div", Od, [
      It(nd, {
        connections: p.value,
        controlledConnections: m.value,
        lnodes: l.value,
        onSourceLNodeChange: K,
        onDestinationLNodeChange: M
      }, null, 8, ["connections", "controlledConnections", "lnodes"]),
      z("button", {
        disabled: !o.value || !s.value,
        class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
        onClick: G
      }, " + ", 8, xd),
      o.value && s.value ? (Se(), Sr(Ed, {
        key: 0,
        isOpen: a.value,
        "onUpdate:isOpen": me[0] || (me[0] = (ye) => a.value = ye),
        sourceLNode: o.value,
        destinationLNode: s.value,
        lnodeTypes: f.value,
        onConnectionCreated: x
      }, null, 8, ["isOpen", "sourceLNode", "destinationLNode", "lnodeTypes"])) : go("", !0)
    ]));
  }
}), Rd = { class: "p-10" }, Sd = /* @__PURE__ */ kn({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    let n = Rt();
    Za(() => {
      window.addEventListener("storage", o), s();
    }), es(() => {
      window.removeEventListener("storage", o);
    });
    async function o(l) {
      if (l.key !== "currentActiveFileDatabaseName")
        return;
      const f = l.newValue;
      if (!f)
        throw new Error("incorrect active file name: " + f);
      await a(f);
    }
    async function s() {
      const l = localStorage.getItem("currentActiveFileDatabaseName");
      l && await a(l);
    }
    async function a(l) {
      n.value && n.value.db.close();
      const f = await Nu(l);
      if (!f) throw new Error("database is not initialized.");
      n.value = {
        db: f,
        lnodeSDK: Df(f),
        connectionSDK: Mf(f)
      };
    }
    return (l, f) => (Se(), De("div", Rd, [
      It(Td, { sdks: Cn(n) }, null, 8, ["sdks"])
    ]));
  }
});
function Kd(e, n) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Tf(Sd, { api: n }).mount(`#${e}`);
}
export {
  Kd as default
};
