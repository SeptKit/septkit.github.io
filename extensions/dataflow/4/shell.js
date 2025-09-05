(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.relative{position:relative}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.left-\\[80\\%\\]{left:80%}.btn-active{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn-active{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn-active{--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);isolation:isolate}.-z-1{z-index:-1}.z-1{z-index:1}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-\\[9px\\]{margin-right:9px}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.h-\\[50px\\]{height:50px}.min-h-\\[500px\\]{min-height:500px}.btn-wide{width:100%;max-width:16rem}.btn-block{width:100%}.w-52{width:calc(var(--spacing)*52)}.w-\\[20\\%\\]{width:20%}.w-\\[20px\\]{width:20px}.w-full{width:100%}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-rows-1{grid-template-rows:repeat(1,minmax(0,1fr))}.grid-rows-\\[100px_1fr_50px\\]{grid-template-rows:100px 1fr 50px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.self-center{align-self:center}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.btn-dash:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}@media (hover:none){.btn-dash:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-white{color:var(--color-white)}.btn-link{--btn-border:#0000;--btn-bg:#0000;--btn-fg:var(--color-primary);--btn-noise:none;--btn-shadow:"";outline-color:currentColor;text-decoration-line:underline}.btn-link:is(.btn-active,:hover,:active:focus,:focus-visible){--btn-border:#0000;--btn-bg:#0000;text-decoration-line:underline}@media (hover:none){.btn-link:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){text-decoration-line:none}}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-lg{--fontsize:1.125rem;--btn-p:1.25rem;--size:calc(var(--size-field,.25rem)*12)}.btn-md{--fontsize:.875rem;--btn-p:1rem;--size:calc(var(--size-field,.25rem)*10)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xl{--fontsize:1.375rem;--btn-p:1.5rem;--size:calc(var(--size-field,.25rem)*14)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-info{--btn-color:var(--color-info);--btn-fg:var(--color-info-content)}.btn-neutral{--btn-color:var(--color-neutral);--btn-fg:var(--color-neutral-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}.btn-success{--btn-color:var(--color-success);--btn-fg:var(--color-success-content)}.btn-warning{--btn-color:var(--color-warning);--btn-fg:var(--color-warning-content)}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Fi(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) n[o] = 1;
  return (o) => o in n;
}
const De = {}, Yn = [], It = () => {
}, rl = () => !1, Io = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Vi = (e) => e.startsWith("onUpdate:"), it = Object.assign, Gi = (e, n) => {
  const o = e.indexOf(n);
  o > -1 && e.splice(o, 1);
}, ol = Object.prototype.hasOwnProperty, Se = (e, n) => ol.call(e, n), fe = Array.isArray, Xn = (e) => kr(e) === "[object Map]", tr = (e) => kr(e) === "[object Set]", Us = (e) => kr(e) === "[object Date]", me = (e) => typeof e == "function", $e = (e) => typeof e == "string", Ut = (e) => typeof e == "symbol", Me = (e) => e !== null && typeof e == "object", wa = (e) => (Me(e) || me(e)) && me(e.then) && me(e.catch), Ea = Object.prototype.toString, kr = (e) => Ea.call(e), il = (e) => kr(e).slice(8, -1), xa = (e) => kr(e) === "[object Object]", $i = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, br = /* @__PURE__ */ Fi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Co = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, sl = /-(\w)/g, vn = Co(
  (e) => e.replace(sl, (n, o) => o ? o.toUpperCase() : "")
), al = /\B([A-Z])/g, Dn = Co(
  (e) => e.replace(al, "-$1").toLowerCase()
), Oa = Co((e) => e.charAt(0).toUpperCase() + e.slice(1)), vi = Co(
  (e) => e ? `on${Oa(e)}` : ""
), gn = (e, n) => !Object.is(e, n), po = (e, ...n) => {
  for (let o = 0; o < e.length; o++)
    e[o](...n);
}, Ii = (e, n, o, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: o
  });
}, _o = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let Hs;
const Po = () => Hs || (Hs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qi(e) {
  if (fe(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++) {
      const s = e[o], a = $e(s) ? fl(s) : qi(s);
      if (a)
        for (const l in a)
          n[l] = a[l];
    }
    return n;
  } else if ($e(e) || Me(e))
    return e;
}
const ul = /;(?![^(]*\))/g, ll = /:([^]+)/, cl = /\/\*[^]*?\*\//g;
function fl(e) {
  const n = {};
  return e.replace(cl, "").split(ul).forEach((o) => {
    if (o) {
      const s = o.split(ll);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function Wi(e) {
  let n = "";
  if ($e(e))
    n = e;
  else if (fe(e))
    for (let o = 0; o < e.length; o++) {
      const s = Wi(e[o]);
      s && (n += s + " ");
    }
  else if (Me(e))
    for (const o in e)
      e[o] && (n += o + " ");
  return n.trim();
}
const dl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", pl = /* @__PURE__ */ Fi(dl);
function Ta(e) {
  return !!e || e === "";
}
function hl(e, n) {
  if (e.length !== n.length) return !1;
  let o = !0;
  for (let s = 0; o && s < e.length; s++)
    o = Lr(e[s], n[s]);
  return o;
}
function Lr(e, n) {
  if (e === n) return !0;
  let o = Us(e), s = Us(n);
  if (o || s)
    return o && s ? e.getTime() === n.getTime() : !1;
  if (o = Ut(e), s = Ut(n), o || s)
    return e === n;
  if (o = fe(e), s = fe(n), o || s)
    return o && s ? hl(e, n) : !1;
  if (o = Me(e), s = Me(n), o || s) {
    if (!o || !s)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(n).length;
    if (a !== l)
      return !1;
    for (const f in e) {
      const p = e.hasOwnProperty(f), m = n.hasOwnProperty(f);
      if (p && !m || !p && m || !Lr(e[f], n[f]))
        return !1;
    }
  }
  return String(e) === String(n);
}
function Yi(e, n) {
  return e.findIndex((o) => Lr(o, n));
}
const Na = (e) => !!(e && e.__v_isRef === !0), Fe = (e) => $e(e) ? e : e == null ? "" : fe(e) || Me(e) && (e.toString === Ea || !me(e.toString)) ? Na(e) ? Fe(e.value) : JSON.stringify(e, Ra, 2) : String(e), Ra = (e, n) => Na(n) ? Ra(e, n.value) : Xn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (o, [s, a], l) => (o[_i(s, l) + " =>"] = a, o),
    {}
  )
} : tr(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((o) => _i(o))
} : Ut(n) ? _i(n) : Me(n) && !fe(n) && !xa(n) ? String(n) : n, _i = (e, n = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ut(e) ? `Symbol(${(o = e.description) != null ? o : n})` : e
  );
};
var ml = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1749", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:12285", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17503237613", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "173cf7ce3cba461f0ccfd1e9de33bb2249925d2c", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f0843d9d-a34e-44ef-8568-435f5bef5f07", INVOCATION_ID: "c7d09860f9a04f398cfa071284fd3e73", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "20", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005670", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "173cf7ce3cba461f0ccfd1e9de33bb2249925d2c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let ht;
class gl {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = ht, !n && ht && (this.index = (ht.scopes || (ht.scopes = [])).push(
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
      const o = ht;
      try {
        return ht = this, n();
      } finally {
        ht = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ht, ht = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ht = this.prevScope, this.prevScope = void 0);
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
function yl() {
  return ht;
}
let ke;
const bi = /* @__PURE__ */ new WeakSet();
class Sa {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ht && ht.active && ht.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bi.has(this) && (bi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ia(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Fs(this), Ca(this);
    const n = ke, o = Ct;
    ke = this, Ct = !0;
    try {
      return this.fn();
    } finally {
      Pa(this), ke = n, Ct = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        Ji(n);
      this.deps = this.depsTail = void 0, Fs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ci(this) && this.run();
  }
  get dirty() {
    return Ci(this);
  }
}
let Aa = 0, wr, Er;
function Ia(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = Er, Er = e;
    return;
  }
  e.next = wr, wr = e;
}
function Xi() {
  Aa++;
}
function zi() {
  if (--Aa > 0)
    return;
  if (Er) {
    let n = Er;
    for (Er = void 0; n; ) {
      const o = n.next;
      n.next = void 0, n.flags &= -9, n = o;
    }
  }
  let e;
  for (; wr; ) {
    let n = wr;
    for (wr = void 0; n; ) {
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
function Ca(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Pa(e) {
  let n, o = e.depsTail, s = o;
  for (; s; ) {
    const a = s.prevDep;
    s.version === -1 ? (s === o && (o = a), Ji(s), vl(s)) : n = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = a;
  }
  e.deps = n, e.depsTail = o;
}
function Ci(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (Da(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function Da(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sr) || (e.globalVersion = Sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ci(e))))
    return;
  e.flags |= 2;
  const n = e.dep, o = ke, s = Ct;
  ke = e, Ct = !0;
  try {
    Ca(e);
    const a = e.fn(e._value);
    (n.version === 0 || gn(a, e._value)) && (e.flags |= 128, e._value = a, n.version++);
  } catch (a) {
    throw n.version++, a;
  } finally {
    ke = o, Ct = s, Pa(e), e.flags &= -3;
  }
}
function Ji(e, n = !1) {
  const { dep: o, prevSub: s, nextSub: a } = e;
  if (s && (s.nextSub = a, e.prevSub = void 0), a && (a.prevSub = s, e.nextSub = void 0), o.subs === e && (o.subs = s, !s && o.computed)) {
    o.computed.flags &= -5;
    for (let l = o.computed.deps; l; l = l.nextDep)
      Ji(l, !0);
  }
  !n && !--o.sc && o.map && o.map.delete(o.key);
}
function vl(e) {
  const { prevDep: n, nextDep: o } = e;
  n && (n.nextDep = o, e.prevDep = void 0), o && (o.prevDep = n, e.nextDep = void 0);
}
let Ct = !0;
const ka = [];
function Ht() {
  ka.push(Ct), Ct = !1;
}
function Ft() {
  const e = ka.pop();
  Ct = e === void 0 ? !0 : e;
}
function Fs(e) {
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
let Sr = 0;
class _l {
  constructor(n, o) {
    this.sub = n, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Qi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!ke || !Ct || ke === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== ke)
      o = this.activeLink = new _l(ke, this), ke.deps ? (o.prevDep = ke.depsTail, ke.depsTail.nextDep = o, ke.depsTail = o) : ke.deps = ke.depsTail = o, La(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const s = o.nextDep;
      s.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = s), o.prevDep = ke.depsTail, o.nextDep = void 0, ke.depsTail.nextDep = o, ke.depsTail = o, ke.deps === o && (ke.deps = s);
    }
    return o;
  }
  trigger(n) {
    this.version++, Sr++, this.notify(n);
  }
  notify(n) {
    Xi();
    try {
      ml.NODE_ENV;
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      zi();
    }
  }
}
function La(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let s = n.deps; s; s = s.nextDep)
        La(s);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Pi = /* @__PURE__ */ new WeakMap(), Pn = Symbol(
  ""
), Di = Symbol(
  ""
), Ar = Symbol(
  ""
);
function ot(e, n, o) {
  if (Ct && ke) {
    let s = Pi.get(e);
    s || Pi.set(e, s = /* @__PURE__ */ new Map());
    let a = s.get(o);
    a || (s.set(o, a = new Qi()), a.map = s, a.key = o), a.track();
  }
}
function Xt(e, n, o, s, a, l) {
  const f = Pi.get(e);
  if (!f) {
    Sr++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (Xi(), n === "clear")
    f.forEach(p);
  else {
    const m = fe(e), I = m && $i(o);
    if (m && o === "length") {
      const x = Number(s);
      f.forEach((P, U) => {
        (U === "length" || U === Ar || !Ut(U) && U >= x) && p(P);
      });
    } else
      switch ((o !== void 0 || f.has(void 0)) && p(f.get(o)), I && p(f.get(Ar)), n) {
        case "add":
          m ? I && p(f.get("length")) : (p(f.get(Pn)), Xn(e) && p(f.get(Di)));
          break;
        case "delete":
          m || (p(f.get(Pn)), Xn(e) && p(f.get(Di)));
          break;
        case "set":
          Xn(e) && p(f.get(Pn));
          break;
      }
  }
  zi();
}
function qn(e) {
  const n = xe(e);
  return n === e ? n : (ot(n, "iterate", Ar), Nt(e) ? n : n.map(Qe));
}
function Do(e) {
  return ot(e = xe(e), "iterate", Ar), e;
}
const bl = {
  __proto__: null,
  [Symbol.iterator]() {
    return wi(this, Symbol.iterator, Qe);
  },
  concat(...e) {
    return qn(this).concat(
      ...e.map((n) => fe(n) ? qn(n) : n)
    );
  },
  entries() {
    return wi(this, "entries", (e) => (e[1] = Qe(e[1]), e));
  },
  every(e, n) {
    return Wt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return Wt(this, "filter", e, n, (o) => o.map(Qe), arguments);
  },
  find(e, n) {
    return Wt(this, "find", e, n, Qe, arguments);
  },
  findIndex(e, n) {
    return Wt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return Wt(this, "findLast", e, n, Qe, arguments);
  },
  findLastIndex(e, n) {
    return Wt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return Wt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return Ei(this, "includes", e);
  },
  indexOf(...e) {
    return Ei(this, "indexOf", e);
  },
  join(e) {
    return qn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Ei(this, "lastIndexOf", e);
  },
  map(e, n) {
    return Wt(this, "map", e, n, void 0, arguments);
  },
  pop() {
    return mr(this, "pop");
  },
  push(...e) {
    return mr(this, "push", e);
  },
  reduce(e, ...n) {
    return Vs(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return Vs(this, "reduceRight", e, n);
  },
  shift() {
    return mr(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, n) {
    return Wt(this, "some", e, n, void 0, arguments);
  },
  splice(...e) {
    return mr(this, "splice", e);
  },
  toReversed() {
    return qn(this).toReversed();
  },
  toSorted(e) {
    return qn(this).toSorted(e);
  },
  toSpliced(...e) {
    return qn(this).toSpliced(...e);
  },
  unshift(...e) {
    return mr(this, "unshift", e);
  },
  values() {
    return wi(this, "values", Qe);
  }
};
function wi(e, n, o) {
  const s = Do(e), a = s[n]();
  return s !== e && !Nt(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.value && (l.value = o(l.value)), l;
  }), a;
}
const wl = Array.prototype;
function Wt(e, n, o, s, a, l) {
  const f = Do(e), p = f !== e && !Nt(e), m = f[n];
  if (m !== wl[n]) {
    const P = m.apply(e, l);
    return p ? Qe(P) : P;
  }
  let I = o;
  f !== e && (p ? I = function(P, U) {
    return o.call(this, Qe(P), U, e);
  } : o.length > 2 && (I = function(P, U) {
    return o.call(this, P, U, e);
  }));
  const x = m.call(f, I, s);
  return p && a ? a(x) : x;
}
function Vs(e, n, o, s) {
  const a = Do(e);
  let l = o;
  return a !== e && (Nt(e) ? o.length > 3 && (l = function(f, p, m) {
    return o.call(this, f, p, m, e);
  }) : l = function(f, p, m) {
    return o.call(this, f, Qe(p), m, e);
  }), a[n](l, ...s);
}
function Ei(e, n, o) {
  const s = xe(e);
  ot(s, "iterate", Ar);
  const a = s[n](...o);
  return (a === -1 || a === !1) && es(o[0]) ? (o[0] = xe(o[0]), s[n](...o)) : a;
}
function mr(e, n, o = []) {
  Ht(), Xi();
  const s = xe(e)[n].apply(e, o);
  return zi(), Ft(), s;
}
const El = /* @__PURE__ */ Fi("__proto__,__v_isRef,__isVue"), ja = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ut)
);
function xl(e) {
  Ut(e) || (e = String(e));
  const n = xe(this);
  return ot(n, "has", e), n.hasOwnProperty(e);
}
class Ma {
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
      return s === (a ? l ? Va : Fa : l ? Ha : Ua).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(s) ? n : void 0;
    const f = fe(n);
    if (!a) {
      let m;
      if (f && (m = bl[o]))
        return m;
      if (o === "hasOwnProperty")
        return xl;
    }
    const p = Reflect.get(
      n,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      et(n) ? n : s
    );
    return (Ut(o) ? ja.has(o) : El(o)) || (a || ot(n, "get", o), l) ? p : et(p) ? f && $i(o) ? p : p.value : Me(p) ? a ? Ga(p) : Zi(p) : p;
  }
}
class Ba extends Ma {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, o, s, a) {
    let l = n[o];
    if (!this._isShallow) {
      const m = _n(l);
      if (!Nt(s) && !_n(s) && (l = xe(l), s = xe(s)), !fe(n) && et(l) && !et(s))
        return m ? !1 : (l.value = s, !0);
    }
    const f = fe(n) && $i(o) ? Number(o) < n.length : Se(n, o), p = Reflect.set(
      n,
      o,
      s,
      et(n) ? n : a
    );
    return n === xe(a) && (f ? gn(s, l) && Xt(n, "set", o, s) : Xt(n, "add", o, s)), p;
  }
  deleteProperty(n, o) {
    const s = Se(n, o);
    n[o];
    const a = Reflect.deleteProperty(n, o);
    return a && s && Xt(n, "delete", o, void 0), a;
  }
  has(n, o) {
    const s = Reflect.has(n, o);
    return (!Ut(o) || !ja.has(o)) && ot(n, "has", o), s;
  }
  ownKeys(n) {
    return ot(
      n,
      "iterate",
      fe(n) ? "length" : Pn
    ), Reflect.ownKeys(n);
  }
}
class Ka extends Ma {
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
const Ol = /* @__PURE__ */ new Ba(), Tl = /* @__PURE__ */ new Ka(), Nl = /* @__PURE__ */ new Ba(!0), Rl = /* @__PURE__ */ new Ka(!0), ki = (e) => e, uo = (e) => Reflect.getPrototypeOf(e);
function Sl(e, n, o) {
  return function(...s) {
    const a = this.__v_raw, l = xe(a), f = Xn(l), p = e === "entries" || e === Symbol.iterator && f, m = e === "keys" && f, I = a[e](...s), x = o ? ki : n ? bo : Qe;
    return !n && ot(
      l,
      "iterate",
      m ? Di : Pn
    ), {
      // iterator protocol
      next() {
        const { value: P, done: U } = I.next();
        return U ? { value: P, done: U } : {
          value: p ? [x(P[0]), x(P[1])] : x(P),
          done: U
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
function Al(e, n) {
  const o = {
    get(a) {
      const l = this.__v_raw, f = xe(l), p = xe(a);
      e || (gn(a, p) && ot(f, "get", a), ot(f, "get", p));
      const { has: m } = uo(f), I = n ? ki : e ? bo : Qe;
      if (m.call(f, a))
        return I(l.get(a));
      if (m.call(f, p))
        return I(l.get(p));
      l !== f && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && ot(xe(a), "iterate", Pn), Reflect.get(a, "size", a);
    },
    has(a) {
      const l = this.__v_raw, f = xe(l), p = xe(a);
      return e || (gn(a, p) && ot(f, "has", a), ot(f, "has", p)), a === p ? l.has(a) : l.has(a) || l.has(p);
    },
    forEach(a, l) {
      const f = this, p = f.__v_raw, m = xe(p), I = n ? ki : e ? bo : Qe;
      return !e && ot(m, "iterate", Pn), p.forEach((x, P) => a.call(l, I(x), I(P), f));
    }
  };
  return it(
    o,
    e ? {
      add: lo("add"),
      set: lo("set"),
      delete: lo("delete"),
      clear: lo("clear")
    } : {
      add(a) {
        !n && !Nt(a) && !_n(a) && (a = xe(a));
        const l = xe(this);
        return uo(l).has.call(l, a) || (l.add(a), Xt(l, "add", a, a)), this;
      },
      set(a, l) {
        !n && !Nt(l) && !_n(l) && (l = xe(l));
        const f = xe(this), { has: p, get: m } = uo(f);
        let I = p.call(f, a);
        I || (a = xe(a), I = p.call(f, a));
        const x = m.call(f, a);
        return f.set(a, l), I ? gn(l, x) && Xt(f, "set", a, l) : Xt(f, "add", a, l), this;
      },
      delete(a) {
        const l = xe(this), { has: f, get: p } = uo(l);
        let m = f.call(l, a);
        m || (a = xe(a), m = f.call(l, a)), p && p.call(l, a);
        const I = l.delete(a);
        return m && Xt(l, "delete", a, void 0), I;
      },
      clear() {
        const a = xe(this), l = a.size !== 0, f = a.clear();
        return l && Xt(
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
    o[a] = Sl(a, e, n);
  }), o;
}
function ko(e, n) {
  const o = Al(e, n);
  return (s, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? s : Reflect.get(
    Se(o, a) && a in s ? o : s,
    a,
    l
  );
}
const Il = {
  get: /* @__PURE__ */ ko(!1, !1)
}, Cl = {
  get: /* @__PURE__ */ ko(!1, !0)
}, Pl = {
  get: /* @__PURE__ */ ko(!0, !1)
}, Dl = {
  get: /* @__PURE__ */ ko(!0, !0)
}, Ua = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), Fa = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ new WeakMap();
function kl(e) {
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
function Ll(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : kl(il(e));
}
function Zi(e) {
  return _n(e) ? e : Lo(
    e,
    !1,
    Ol,
    Il,
    Ua
  );
}
function jl(e) {
  return Lo(
    e,
    !1,
    Nl,
    Cl,
    Ha
  );
}
function Ga(e) {
  return Lo(
    e,
    !0,
    Tl,
    Pl,
    Fa
  );
}
function co(e) {
  return Lo(
    e,
    !0,
    Rl,
    Dl,
    Va
  );
}
function Lo(e, n, o, s, a) {
  if (!Me(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const l = Ll(e);
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
function Nt(e) {
  return !!(e && e.__v_isShallow);
}
function es(e) {
  return e ? !!e.__v_raw : !1;
}
function xe(e) {
  const n = e && e.__v_raw;
  return n ? xe(n) : e;
}
function Ml(e) {
  return !Se(e, "__v_skip") && Object.isExtensible(e) && Ii(e, "__v_skip", !0), e;
}
const Qe = (e) => Me(e) ? Zi(e) : e, bo = (e) => Me(e) ? Ga(e) : e;
function et(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function ct(e) {
  return Bl(e, !1);
}
function Bl(e, n) {
  return et(e) ? e : new Kl(e, n);
}
class Kl {
  constructor(n, o) {
    this.dep = new Qi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? n : xe(n), this._value = o ? n : Qe(n), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const o = this._rawValue, s = this.__v_isShallow || Nt(n) || _n(n);
    n = s ? n : xe(n), gn(n, o) && (this._rawValue = n, this._value = s ? n : Qe(n), this.dep.trigger());
  }
}
function Qt(e) {
  return et(e) ? e.value : e;
}
const Ul = {
  get: (e, n, o) => n === "__v_raw" ? e : Qt(Reflect.get(e, n, o)),
  set: (e, n, o, s) => {
    const a = e[n];
    return et(a) && !et(o) ? (a.value = o, !0) : Reflect.set(e, n, o, s);
  }
};
function $a(e) {
  return zn(e) ? e : new Proxy(e, Ul);
}
class Hl {
  constructor(n, o, s) {
    this.fn = n, this.setter = o, this._value = void 0, this.dep = new Qi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ke !== this)
      return Ia(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return Da(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function Fl(e, n, o = !1) {
  let s, a;
  return me(e) ? s = e : (s = e.get, a = e.set), new Hl(s, a, o);
}
const fo = {}, wo = /* @__PURE__ */ new WeakMap();
let Cn;
function Vl(e, n = !1, o = Cn) {
  if (o) {
    let s = wo.get(o);
    s || wo.set(o, s = []), s.push(e);
  }
}
function Gl(e, n, o = De) {
  const { immediate: s, deep: a, once: l, scheduler: f, augmentJob: p, call: m } = o, I = (le) => a ? le : Nt(le) || a === !1 || a === 0 ? zt(le, 1) : zt(le);
  let x, P, U, z, ie = !1, K = !1;
  if (et(e) ? (P = () => e.value, ie = Nt(e)) : zn(e) ? (P = () => I(e), ie = !0) : fe(e) ? (K = !0, ie = e.some((le) => zn(le) || Nt(le)), P = () => e.map((le) => {
    if (et(le))
      return le.value;
    if (zn(le))
      return I(le);
    if (me(le))
      return m ? m(le, 2) : le();
  })) : me(e) ? n ? P = m ? () => m(e, 2) : e : P = () => {
    if (U) {
      Ht();
      try {
        U();
      } finally {
        Ft();
      }
    }
    const le = Cn;
    Cn = x;
    try {
      return m ? m(e, 3, [z]) : e(z);
    } finally {
      Cn = le;
    }
  } : P = It, n && a) {
    const le = P, Ce = a === !0 ? 1 / 0 : a;
    P = () => zt(le(), Ce);
  }
  const N = yl(), L = () => {
    x.stop(), N && N.active && Gi(N.effects, x);
  };
  if (l && n) {
    const le = n;
    n = (...Ce) => {
      le(...Ce), L();
    };
  }
  let de = K ? new Array(e.length).fill(fo) : fo;
  const Te = (le) => {
    if (!(!(x.flags & 1) || !x.dirty && !le))
      if (n) {
        const Ce = x.run();
        if (a || ie || (K ? Ce.some((Pe, Ie) => gn(Pe, de[Ie])) : gn(Ce, de))) {
          U && U();
          const Pe = Cn;
          Cn = x;
          try {
            const Ie = [
              Ce,
              // pass undefined as the old value when it's changed for the first time
              de === fo ? void 0 : K && de[0] === fo ? [] : de,
              z
            ];
            de = Ce, m ? m(n, 3, Ie) : (
              // @ts-expect-error
              n(...Ie)
            );
          } finally {
            Cn = Pe;
          }
        }
      } else
        x.run();
  };
  return p && p(Te), x = new Sa(P), x.scheduler = f ? () => f(Te, !1) : Te, z = (le) => Vl(le, !1, x), U = x.onStop = () => {
    const le = wo.get(x);
    if (le) {
      if (m)
        m(le, 4);
      else
        for (const Ce of le) Ce();
      wo.delete(x);
    }
  }, n ? s ? Te(!0) : de = x.run() : f ? f(Te.bind(null, !0), !0) : x.run(), L.pause = x.pause.bind(x), L.resume = x.resume.bind(x), L.stop = L, L;
}
function zt(e, n = 1 / 0, o) {
  if (n <= 0 || !Me(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), n--, et(e))
    zt(e.value, n, o);
  else if (fe(e))
    for (let s = 0; s < e.length; s++)
      zt(e[s], n, o);
  else if (tr(e) || Xn(e))
    e.forEach((s) => {
      zt(s, n, o);
    });
  else if (xa(e)) {
    for (const s in e)
      zt(e[s], n, o);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && zt(e[s], n, o);
  }
  return e;
}
var dn = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1749", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:12285", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17503237613", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "173cf7ce3cba461f0ccfd1e9de33bb2249925d2c", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_f0843d9d-a34e-44ef-8568-435f5bef5f07", INVOCATION_ID: "c7d09860f9a04f398cfa071284fd3e73", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "20", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005670", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "173cf7ce3cba461f0ccfd1e9de33bb2249925d2c", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_03b9aa71-b1f1-4cd9-8f25-7602b75dcb3a", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const xr = [];
let xi = !1;
function $l(e, ...n) {
  if (xi) return;
  xi = !0, Ht();
  const o = xr.length ? xr[xr.length - 1].component : null, s = o && o.appContext.config.warnHandler, a = ql();
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
          ({ vnode: l }) => `at <${Nu(o, l.type)}>`
        ).join(`
`),
        a
      ]
    );
  else {
    const l = [`[Vue warn]: ${e}`, ...n];
    a.length && l.push(`
`, ...Wl(a)), console.warn(...l);
  }
  Ft(), xi = !1;
}
function ql() {
  let e = xr[xr.length - 1];
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
function Wl(e) {
  const n = [];
  return e.forEach((o, s) => {
    n.push(...s === 0 ? [] : [`
`], ...Yl(o));
  }), n;
}
function Yl({ vnode: e, recurseCount: n }) {
  const o = n > 0 ? `... (${n} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, a = ` at <${Nu(
    e.component,
    e.type,
    s
  )}`, l = ">" + o;
  return e.props ? [a, ...Xl(e.props), l] : [a + l];
}
function Xl(e) {
  const n = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((s) => {
    n.push(...qa(s, e[s]));
  }), o.length > 3 && n.push(" ..."), n;
}
function qa(e, n, o) {
  return $e(n) ? (n = JSON.stringify(n), o ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? o ? n : [`${e}=${n}`] : et(n) ? (n = qa(e, xe(n.value), !0), o ? n : [`${e}=Ref<`, n, ">"]) : me(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = xe(n), o ? n : [`${e}=`, n]);
}
function nr(e, n, o, s) {
  try {
    return s ? e(...s) : e();
  } catch (a) {
    jo(a, n, o);
  }
}
function Vt(e, n, o, s) {
  if (me(e)) {
    const a = nr(e, n, o, s);
    return a && wa(a) && a.catch((l) => {
      jo(l, n, o);
    }), a;
  }
  if (fe(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Vt(e[l], n, o, s));
    return a;
  }
}
function jo(e, n, o, s = !0) {
  const a = n ? n.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: f } = n && n.appContext.config || De;
  if (n) {
    let p = n.parent;
    const m = n.proxy, I = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; p; ) {
      const x = p.ec;
      if (x) {
        for (let P = 0; P < x.length; P++)
          if (x[P](e, m, I) === !1)
            return;
      }
      p = p.parent;
    }
    if (l) {
      Ht(), nr(l, null, 10, [
        e,
        m,
        I
      ]), Ft();
      return;
    }
  }
  zl(e, o, a, s, f);
}
function zl(e, n, o, s = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const ft = [];
let Bt = -1;
const Jn = [];
let pn = null, Wn = 0;
const Wa = /* @__PURE__ */ Promise.resolve();
let Eo = null;
function Ya(e) {
  const n = Eo || Wa;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Jl(e) {
  let n = Bt + 1, o = ft.length;
  for (; n < o; ) {
    const s = n + o >>> 1, a = ft[s], l = Ir(a);
    l < e || l === e && a.flags & 2 ? n = s + 1 : o = s;
  }
  return n;
}
function ts(e) {
  if (!(e.flags & 1)) {
    const n = Ir(e), o = ft[ft.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= Ir(o) ? ft.push(e) : ft.splice(Jl(n), 0, e), e.flags |= 1, Xa();
  }
}
function Xa() {
  Eo || (Eo = Wa.then(Ja));
}
function Ql(e) {
  fe(e) ? Jn.push(...e) : pn && e.id === -1 ? pn.splice(Wn + 1, 0, e) : e.flags & 1 || (Jn.push(e), e.flags |= 1), Xa();
}
function Gs(e, n, o = Bt + 1) {
  for (; o < ft.length; o++) {
    const s = ft[o];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ft.splice(o, 1), o--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function za(e) {
  if (Jn.length) {
    const n = [...new Set(Jn)].sort(
      (o, s) => Ir(o) - Ir(s)
    );
    if (Jn.length = 0, pn) {
      pn.push(...n);
      return;
    }
    for (pn = n, Wn = 0; Wn < pn.length; Wn++) {
      const o = pn[Wn];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    pn = null, Wn = 0;
  }
}
const Ir = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ja(e) {
  const n = It;
  try {
    for (Bt = 0; Bt < ft.length; Bt++) {
      const o = ft[Bt];
      o && !(o.flags & 8) && (dn.NODE_ENV !== "production" && n(o), o.flags & 4 && (o.flags &= -2), nr(
        o,
        o.i,
        o.i ? 15 : 14
      ), o.flags & 4 || (o.flags &= -2));
    }
  } finally {
    for (; Bt < ft.length; Bt++) {
      const o = ft[Bt];
      o && (o.flags &= -2);
    }
    Bt = -1, ft.length = 0, za(), Eo = null, (ft.length || Jn.length) && Ja();
  }
}
let vt = null, Qa = null;
function xo(e) {
  const n = vt;
  return vt = e, Qa = e && e.type.__scopeId || null, n;
}
function Zl(e, n = vt, o) {
  if (!n || e._n)
    return e;
  const s = (...a) => {
    s._d && Zs(-1);
    const l = xo(n);
    let f;
    try {
      f = e(...a);
    } finally {
      xo(l), s._d && Zs(1);
    }
    return f;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function lt(e, n) {
  if (vt === null)
    return e;
  const o = Uo(vt), s = e.dirs || (e.dirs = []);
  for (let a = 0; a < n.length; a++) {
    let [l, f, p, m = De] = n[a];
    l && (me(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && zt(f), s.push({
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
function An(e, n, o, s) {
  const a = e.dirs, l = n && n.dirs;
  for (let f = 0; f < a.length; f++) {
    const p = a[f];
    l && (p.oldValue = l[f].value);
    let m = p.dir[s];
    m && (Ht(), Vt(m, o, 8, [
      e.el,
      p,
      e,
      n
    ]), Ft());
  }
}
const ec = Symbol("_vte"), tc = (e) => e.__isTeleport;
function ns(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, ns(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function wn(e, n) {
  return me(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    it({ name: e.name }, n, { setup: e })
  ) : e;
}
function Za(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Or(e, n, o, s, a = !1) {
  if (fe(e)) {
    e.forEach(
      (ie, K) => Or(
        ie,
        n && (fe(n) ? n[K] : n),
        o,
        s,
        a
      )
    );
    return;
  }
  if (Tr(s) && !a) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Or(e, n, o, s.component.subTree);
    return;
  }
  const l = s.shapeFlag & 4 ? Uo(s.component) : s.el, f = a ? null : l, { i: p, r: m } = e, I = n && n.r, x = p.refs === De ? p.refs = {} : p.refs, P = p.setupState, U = xe(P), z = P === De ? () => !1 : (ie) => Se(U, ie);
  if (I != null && I !== m && ($e(I) ? (x[I] = null, z(I) && (P[I] = null)) : et(I) && (I.value = null)), me(m))
    nr(m, p, 12, [f, x]);
  else {
    const ie = $e(m), K = et(m);
    if (ie || K) {
      const N = () => {
        if (e.f) {
          const L = ie ? z(m) ? P[m] : x[m] : m.value;
          a ? fe(L) && Gi(L, l) : fe(L) ? L.includes(l) || L.push(l) : ie ? (x[m] = [l], z(m) && (P[m] = x[m])) : (m.value = [l], e.k && (x[e.k] = m.value));
        } else ie ? (x[m] = f, z(m) && (P[m] = f)) : K && (m.value = f, e.k && (x[e.k] = f));
      };
      f ? (N.id = -1, yt(N, o)) : N();
    }
  }
}
Po().requestIdleCallback;
Po().cancelIdleCallback;
const Tr = (e) => !!e.type.__asyncLoader, eu = (e) => e.type.__isKeepAlive;
function nc(e, n) {
  tu(e, "a", n);
}
function rc(e, n) {
  tu(e, "da", n);
}
function tu(e, n, o = Ze) {
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
      eu(a.parent.vnode) && oc(s, n, o, a), a = a.parent;
  }
}
function oc(e, n, o, s) {
  const a = Mo(
    n,
    e,
    s,
    !0
    /* prepend */
  );
  rs(() => {
    Gi(s[n], a);
  }, o);
}
function Mo(e, n, o = Ze, s = !1) {
  if (o) {
    const a = o[e] || (o[e] = []), l = n.__weh || (n.__weh = (...f) => {
      Ht();
      const p = jr(o), m = Vt(n, o, e, f);
      return p(), Ft(), m;
    });
    return s ? a.unshift(l) : a.push(l), l;
  }
}
const en = (e) => (n, o = Ze) => {
  (!Pr || e === "sp") && Mo(e, (...s) => n(...s), o);
}, ic = en("bm"), nu = en("m"), sc = en(
  "bu"
), ac = en("u"), uc = en(
  "bum"
), rs = en("um"), lc = en(
  "sp"
), cc = en("rtg"), fc = en("rtc");
function dc(e, n = Ze) {
  Mo("ec", e, n);
}
const pc = Symbol.for("v-ndc");
function Tt(e, n, o, s) {
  let a;
  const l = o, f = fe(e);
  if (f || $e(e)) {
    const p = f && zn(e);
    let m = !1, I = !1;
    p && (m = !Nt(e), I = _n(e), e = Do(e)), a = new Array(e.length);
    for (let x = 0, P = e.length; x < P; x++)
      a[x] = n(
        m ? I ? bo(Qe(e[x])) : Qe(e[x]) : e[x],
        x,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let p = 0; p < e; p++)
      a[p] = n(p + 1, p, void 0, l);
  } else if (Me(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (p, m) => n(p, m, void 0, l)
      );
    else {
      const p = Object.keys(e);
      a = new Array(p.length);
      for (let m = 0, I = p.length; m < I; m++) {
        const x = p[m];
        a[m] = n(e[x], x, m, l);
      }
    }
  else
    a = [];
  return a;
}
const Li = (e) => e ? Ou(e) ? Uo(e) : Li(e.parent) : null, Nr = (
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
    $parent: (e) => Li(e.parent),
    $root: (e) => Li(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ou(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ts(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ya.bind(e.proxy)),
    $watch: (e) => Lc.bind(e)
  })
), Oi = (e, n) => e !== De && !e.__isScriptSetup && Se(e, n), hc = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: o, setupState: s, data: a, props: l, accessCache: f, type: p, appContext: m } = e;
    let I;
    if (n[0] !== "$") {
      const z = f[n];
      if (z !== void 0)
        switch (z) {
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
        if (Oi(s, n))
          return f[n] = 1, s[n];
        if (a !== De && Se(a, n))
          return f[n] = 2, a[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (I = e.propsOptions[0]) && Se(I, n)
        )
          return f[n] = 3, l[n];
        if (o !== De && Se(o, n))
          return f[n] = 4, o[n];
        ji && (f[n] = 0);
      }
    }
    const x = Nr[n];
    let P, U;
    if (x)
      return n === "$attrs" && ot(e.attrs, "get", ""), x(e);
    if (
      // css module (injected by vue-loader)
      (P = p.__cssModules) && (P = P[n])
    )
      return P;
    if (o !== De && Se(o, n))
      return f[n] = 4, o[n];
    if (
      // global properties
      U = m.config.globalProperties, Se(U, n)
    )
      return U[n];
  },
  set({ _: e }, n, o) {
    const { data: s, setupState: a, ctx: l } = e;
    return Oi(a, n) ? (a[n] = o, !0) : s !== De && Se(s, n) ? (s[n] = o, !0) : Se(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (l[n] = o, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: o, ctx: s, appContext: a, propsOptions: l }
  }, f) {
    let p;
    return !!o[f] || e !== De && Se(e, f) || Oi(n, f) || (p = l[0]) && Se(p, f) || Se(s, f) || Se(Nr, f) || Se(a.config.globalProperties, f);
  },
  defineProperty(e, n, o) {
    return o.get != null ? e._.accessCache[n] = 0 : Se(o, "value") && this.set(e, n, o.value, null), Reflect.defineProperty(e, n, o);
  }
};
function $s(e) {
  return fe(e) ? e.reduce(
    (n, o) => (n[o] = null, n),
    {}
  ) : e;
}
let ji = !0;
function mc(e) {
  const n = ou(e), o = e.proxy, s = e.ctx;
  ji = !1, n.beforeCreate && qs(n.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: f,
    watch: p,
    provide: m,
    inject: I,
    // lifecycle
    created: x,
    beforeMount: P,
    mounted: U,
    beforeUpdate: z,
    updated: ie,
    activated: K,
    deactivated: N,
    beforeDestroy: L,
    beforeUnmount: de,
    destroyed: Te,
    unmounted: le,
    render: Ce,
    renderTracked: Pe,
    renderTriggered: Ie,
    errorCaptured: bt,
    serverPrefetch: kn,
    // public API
    expose: Pt,
    inheritAttrs: tn,
    // assets
    components: Dt,
    directives: wt,
    filters: rr
  } = n;
  if (I && gc(I, s, null), f)
    for (const Le in f) {
      const be = f[Le];
      me(be) && (s[Le] = be.bind(o));
    }
  if (a) {
    const Le = a.call(o, o);
    Me(Le) && (e.data = Zi(Le));
  }
  if (ji = !0, l)
    for (const Le in l) {
      const be = l[Le], dt = me(be) ? be.bind(o, o) : me(be.get) ? be.get.bind(o, o) : It, pt = !me(be) && me(be.set) ? be.set.bind(o) : It, St = At({
        get: dt,
        set: pt
      });
      Object.defineProperty(s, Le, {
        enumerable: !0,
        configurable: !0,
        get: () => St.value,
        set: (Et) => St.value = Et
      });
    }
  if (p)
    for (const Le in p)
      ru(p[Le], s, o, Le);
  if (m) {
    const Le = me(m) ? m.call(o) : m;
    Reflect.ownKeys(Le).forEach((be) => {
      Ec(be, Le[be]);
    });
  }
  x && qs(x, e, "c");
  function We(Le, be) {
    fe(be) ? be.forEach((dt) => Le(dt.bind(o))) : be && Le(be.bind(o));
  }
  if (We(ic, P), We(nu, U), We(sc, z), We(ac, ie), We(nc, K), We(rc, N), We(dc, bt), We(fc, Pe), We(cc, Ie), We(uc, de), We(rs, le), We(lc, kn), fe(Pt))
    if (Pt.length) {
      const Le = e.exposed || (e.exposed = {});
      Pt.forEach((be) => {
        Object.defineProperty(Le, be, {
          get: () => o[be],
          set: (dt) => o[be] = dt
        });
      });
    } else e.exposed || (e.exposed = {});
  Ce && e.render === It && (e.render = Ce), tn != null && (e.inheritAttrs = tn), Dt && (e.components = Dt), wt && (e.directives = wt), kn && Za(e);
}
function gc(e, n, o = It) {
  fe(e) && (e = Mi(e));
  for (const s in e) {
    const a = e[s];
    let l;
    Me(a) ? "default" in a ? l = ho(
      a.from || s,
      a.default,
      !0
    ) : l = ho(a.from || s) : l = ho(a), et(l) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (f) => l.value = f
    }) : n[s] = l;
  }
}
function qs(e, n, o) {
  Vt(
    fe(e) ? e.map((s) => s.bind(n.proxy)) : e.bind(n.proxy),
    n,
    o
  );
}
function ru(e, n, o, s) {
  let a = s.includes(".") ? yu(o, s) : () => o[s];
  if ($e(e)) {
    const l = n[e];
    me(l) && yn(a, l);
  } else if (me(e))
    yn(a, e.bind(o));
  else if (Me(e))
    if (fe(e))
      e.forEach((l) => ru(l, n, o, s));
    else {
      const l = me(e.handler) ? e.handler.bind(o) : n[e.handler];
      me(l) && yn(a, l, e);
    }
}
function ou(e) {
  const n = e.type, { mixins: o, extends: s } = n, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: f }
  } = e.appContext, p = l.get(n);
  let m;
  return p ? m = p : !a.length && !o && !s ? m = n : (m = {}, a.length && a.forEach(
    (I) => Oo(m, I, f, !0)
  ), Oo(m, n, f)), Me(n) && l.set(n, m), m;
}
function Oo(e, n, o, s = !1) {
  const { mixins: a, extends: l } = n;
  l && Oo(e, l, o, !0), a && a.forEach(
    (f) => Oo(e, f, o, !0)
  );
  for (const f in n)
    if (!(s && f === "expose")) {
      const p = yc[f] || o && o[f];
      e[f] = p ? p(e[f], n[f]) : n[f];
    }
  return e;
}
const yc = {
  data: Ws,
  props: Ys,
  emits: Ys,
  // objects
  methods: yr,
  computed: yr,
  // lifecycle
  beforeCreate: ut,
  created: ut,
  beforeMount: ut,
  mounted: ut,
  beforeUpdate: ut,
  updated: ut,
  beforeDestroy: ut,
  beforeUnmount: ut,
  destroyed: ut,
  unmounted: ut,
  activated: ut,
  deactivated: ut,
  errorCaptured: ut,
  serverPrefetch: ut,
  // assets
  components: yr,
  directives: yr,
  // watch
  watch: _c,
  // provide / inject
  provide: Ws,
  inject: vc
};
function Ws(e, n) {
  return n ? e ? function() {
    return it(
      me(e) ? e.call(this, this) : e,
      me(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function vc(e, n) {
  return yr(Mi(e), Mi(n));
}
function Mi(e) {
  if (fe(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++)
      n[e[o]] = e[o];
    return n;
  }
  return e;
}
function ut(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function yr(e, n) {
  return e ? it(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Ys(e, n) {
  return e ? fe(e) && fe(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : it(
    /* @__PURE__ */ Object.create(null),
    $s(e),
    $s(n ?? {})
  ) : n;
}
function _c(e, n) {
  if (!e) return n;
  if (!n) return e;
  const o = it(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    o[s] = ut(e[s], n[s]);
  return o;
}
function iu() {
  return {
    app: null,
    config: {
      isNativeTag: rl,
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
let bc = 0;
function wc(e, n) {
  return function(s, a = null) {
    me(s) || (s = it({}, s)), a != null && !Me(a) && (a = null);
    const l = iu(), f = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const I = l.app = {
      _uid: bc++,
      _component: s,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: of,
      get config() {
        return l.config;
      },
      set config(x) {
      },
      use(x, ...P) {
        return f.has(x) || (x && me(x.install) ? (f.add(x), x.install(I, ...P)) : me(x) && (f.add(x), x(I, ...P))), I;
      },
      mixin(x) {
        return l.mixins.includes(x) || l.mixins.push(x), I;
      },
      component(x, P) {
        return P ? (l.components[x] = P, I) : l.components[x];
      },
      directive(x, P) {
        return P ? (l.directives[x] = P, I) : l.directives[x];
      },
      mount(x, P, U) {
        if (!m) {
          const z = I._ceVNode || Rt(s, a);
          return z.appContext = l, U === !0 ? U = "svg" : U === !1 && (U = void 0), e(z, x, U), m = !0, I._container = x, x.__vue_app__ = I, Uo(z.component);
        }
      },
      onUnmount(x) {
        p.push(x);
      },
      unmount() {
        m && (Vt(
          p,
          I._instance,
          16
        ), e(null, I._container), delete I._container.__vue_app__);
      },
      provide(x, P) {
        return l.provides[x] = P, I;
      },
      runWithContext(x) {
        const P = Qn;
        Qn = I;
        try {
          return x();
        } finally {
          Qn = P;
        }
      }
    };
    return I;
  };
}
let Qn = null;
function Ec(e, n) {
  if (Ze) {
    let o = Ze.provides;
    const s = Ze.parent && Ze.parent.provides;
    s === o && (o = Ze.provides = Object.create(s)), o[e] = n;
  }
}
function ho(e, n, o = !1) {
  const s = Ze || vt;
  if (s || Qn) {
    let a = Qn ? Qn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return o && me(n) ? n.call(s && s.proxy) : n;
  }
}
const su = {}, au = () => Object.create(su), uu = (e) => Object.getPrototypeOf(e) === su;
function xc(e, n, o, s = !1) {
  const a = {}, l = au();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), lu(e, n, a, l);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  o ? e.props = s ? a : jl(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function Oc(e, n, o, s) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: f }
  } = e, p = xe(a), [m] = e.propsOptions;
  let I = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const x = e.vnode.dynamicProps;
      for (let P = 0; P < x.length; P++) {
        let U = x[P];
        if (Bo(e.emitsOptions, U))
          continue;
        const z = n[U];
        if (m)
          if (Se(l, U))
            z !== l[U] && (l[U] = z, I = !0);
          else {
            const ie = vn(U);
            a[ie] = Bi(
              m,
              p,
              ie,
              z,
              e,
              !1
            );
          }
        else
          z !== l[U] && (l[U] = z, I = !0);
      }
    }
  } else {
    lu(e, n, a, l) && (I = !0);
    let x;
    for (const P in p)
      (!n || // for camelCase
      !Se(n, P) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((x = Dn(P)) === P || !Se(n, x))) && (m ? o && // for camelCase
      (o[P] !== void 0 || // for kebab-case
      o[x] !== void 0) && (a[P] = Bi(
        m,
        p,
        P,
        void 0,
        e,
        !0
      )) : delete a[P]);
    if (l !== p)
      for (const P in l)
        (!n || !Se(n, P)) && (delete l[P], I = !0);
  }
  I && Xt(e.attrs, "set", "");
}
function lu(e, n, o, s) {
  const [a, l] = e.propsOptions;
  let f = !1, p;
  if (n)
    for (let m in n) {
      if (br(m))
        continue;
      const I = n[m];
      let x;
      a && Se(a, x = vn(m)) ? !l || !l.includes(x) ? o[x] = I : (p || (p = {}))[x] = I : Bo(e.emitsOptions, m) || (!(m in s) || I !== s[m]) && (s[m] = I, f = !0);
    }
  if (l) {
    const m = xe(o), I = p || De;
    for (let x = 0; x < l.length; x++) {
      const P = l[x];
      o[P] = Bi(
        a,
        m,
        P,
        I[P],
        e,
        !Se(I, P)
      );
    }
  }
  return f;
}
function Bi(e, n, o, s, a, l) {
  const f = e[o];
  if (f != null) {
    const p = Se(f, "default");
    if (p && s === void 0) {
      const m = f.default;
      if (f.type !== Function && !f.skipFactory && me(m)) {
        const { propsDefaults: I } = a;
        if (o in I)
          s = I[o];
        else {
          const x = jr(a);
          s = I[o] = m.call(
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
    ] && (s === "" || s === Dn(o)) && (s = !0));
  }
  return s;
}
const Tc = /* @__PURE__ */ new WeakMap();
function cu(e, n, o = !1) {
  const s = o ? Tc : n.propsCache, a = s.get(e);
  if (a)
    return a;
  const l = e.props, f = {}, p = [];
  let m = !1;
  if (!me(e)) {
    const x = (P) => {
      m = !0;
      const [U, z] = cu(P, n, !0);
      it(f, U), z && p.push(...z);
    };
    !o && n.mixins.length && n.mixins.forEach(x), e.extends && x(e.extends), e.mixins && e.mixins.forEach(x);
  }
  if (!l && !m)
    return Me(e) && s.set(e, Yn), Yn;
  if (fe(l))
    for (let x = 0; x < l.length; x++) {
      const P = vn(l[x]);
      Xs(P) && (f[P] = De);
    }
  else if (l)
    for (const x in l) {
      const P = vn(x);
      if (Xs(P)) {
        const U = l[x], z = f[P] = fe(U) || me(U) ? { type: U } : it({}, U), ie = z.type;
        let K = !1, N = !0;
        if (fe(ie))
          for (let L = 0; L < ie.length; ++L) {
            const de = ie[L], Te = me(de) && de.name;
            if (Te === "Boolean") {
              K = !0;
              break;
            } else Te === "String" && (N = !1);
          }
        else
          K = me(ie) && ie.name === "Boolean";
        z[
          0
          /* shouldCast */
        ] = K, z[
          1
          /* shouldCastTrue */
        ] = N, (K || Se(z, "default")) && p.push(P);
      }
    }
  const I = [f, p];
  return Me(e) && s.set(e, I), I;
}
function Xs(e) {
  return e[0] !== "$" && !br(e);
}
const os = (e) => e[0] === "_" || e === "$stable", is = (e) => fe(e) ? e.map(Kt) : [Kt(e)], Nc = (e, n, o) => {
  if (n._n)
    return n;
  const s = Zl((...a) => (dn.NODE_ENV !== "production" && Ze && !(o === null && vt) && (o && (o.root, Ze.root)), is(n(...a))), o);
  return s._c = !1, s;
}, fu = (e, n, o) => {
  const s = e._ctx;
  for (const a in e) {
    if (os(a)) continue;
    const l = e[a];
    if (me(l))
      n[a] = Nc(a, l, s);
    else if (l != null) {
      const f = is(l);
      n[a] = () => f;
    }
  }
}, du = (e, n) => {
  const o = is(n);
  e.slots.default = () => o;
}, pu = (e, n, o) => {
  for (const s in n)
    (o || !os(s)) && (e[s] = n[s]);
}, Rc = (e, n, o) => {
  const s = e.slots = au();
  if (e.vnode.shapeFlag & 32) {
    const a = n.__;
    a && Ii(s, "__", a, !0);
    const l = n._;
    l ? (pu(s, n, o), o && Ii(s, "_", l, !0)) : fu(n, s);
  } else n && du(e, n);
}, Sc = (e, n, o) => {
  const { vnode: s, slots: a } = e;
  let l = !0, f = De;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? o && p === 1 ? l = !1 : pu(a, n, o) : (l = !n.$stable, fu(n, a)), f = n;
  } else n && (du(e, n), f = { default: 1 });
  if (l)
    for (const p in a)
      !os(p) && f[p] == null && delete a[p];
}, yt = Fc;
function Ac(e) {
  return Ic(e);
}
function Ic(e, n) {
  const o = Po();
  o.__VUE__ = !0;
  const {
    insert: s,
    remove: a,
    patchProp: l,
    createElement: f,
    createText: p,
    createComment: m,
    setText: I,
    setElementText: x,
    parentNode: P,
    nextSibling: U,
    setScopeId: z = It,
    insertStaticContent: ie
  } = e, K = (g, w, M, V = null, F = null, G = null, ee = void 0, J = null, Y = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !gr(g, w) && (V = nn(g), Et(g, F, G, !0), g = null), w.patchFlag === -2 && (Y = !1, w.dynamicChildren = null);
    const { type: H, ref: ue, shapeFlag: Q } = w;
    switch (H) {
      case Ko:
        N(g, w, M, V);
        break;
      case bn:
        L(g, w, M, V);
        break;
      case Ni:
        g == null && de(w, M, V, ee);
        break;
      case He:
        Dt(
          g,
          w,
          M,
          V,
          F,
          G,
          ee,
          J,
          Y
        );
        break;
      default:
        Q & 1 ? Ce(
          g,
          w,
          M,
          V,
          F,
          G,
          ee,
          J,
          Y
        ) : Q & 6 ? wt(
          g,
          w,
          M,
          V,
          F,
          G,
          ee,
          J,
          Y
        ) : (Q & 64 || Q & 128) && H.process(
          g,
          w,
          M,
          V,
          F,
          G,
          ee,
          J,
          Y,
          rn
        );
    }
    ue != null && F ? Or(ue, g && g.ref, G, w || g, !w) : ue == null && g && g.ref != null && Or(g.ref, null, G, g, !0);
  }, N = (g, w, M, V) => {
    if (g == null)
      s(
        w.el = p(w.children),
        M,
        V
      );
    else {
      const F = w.el = g.el;
      w.children !== g.children && I(F, w.children);
    }
  }, L = (g, w, M, V) => {
    g == null ? s(
      w.el = m(w.children || ""),
      M,
      V
    ) : w.el = g.el;
  }, de = (g, w, M, V) => {
    [g.el, g.anchor] = ie(
      g.children,
      w,
      M,
      V,
      g.el,
      g.anchor
    );
  }, Te = ({ el: g, anchor: w }, M, V) => {
    let F;
    for (; g && g !== w; )
      F = U(g), s(g, M, V), g = F;
    s(w, M, V);
  }, le = ({ el: g, anchor: w }) => {
    let M;
    for (; g && g !== w; )
      M = U(g), a(g), g = M;
    a(w);
  }, Ce = (g, w, M, V, F, G, ee, J, Y) => {
    w.type === "svg" ? ee = "svg" : w.type === "math" && (ee = "mathml"), g == null ? Pe(
      w,
      M,
      V,
      F,
      G,
      ee,
      J,
      Y
    ) : kn(
      g,
      w,
      F,
      G,
      ee,
      J,
      Y
    );
  }, Pe = (g, w, M, V, F, G, ee, J) => {
    let Y, H;
    const { props: ue, shapeFlag: Q, transition: ae, dirs: ce } = g;
    if (Y = g.el = f(
      g.type,
      G,
      ue && ue.is,
      ue
    ), Q & 8 ? x(Y, g.children) : Q & 16 && bt(
      g.children,
      Y,
      null,
      V,
      F,
      Ti(g, G),
      ee,
      J
    ), ce && An(g, null, V, "created"), Ie(Y, g, g.scopeId, ee, V), ue) {
      for (const we in ue)
        we !== "value" && !br(we) && l(Y, we, null, ue[we], G, V);
      "value" in ue && l(Y, "value", null, ue.value, G), (H = ue.onVnodeBeforeMount) && Mt(H, V, g);
    }
    ce && An(g, null, V, "beforeMount");
    const ge = Cc(F, ae);
    ge && ae.beforeEnter(Y), s(Y, w, M), ((H = ue && ue.onVnodeMounted) || ge || ce) && yt(() => {
      H && Mt(H, V, g), ge && ae.enter(Y), ce && An(g, null, V, "mounted");
    }, F);
  }, Ie = (g, w, M, V, F) => {
    if (M && z(g, M), V)
      for (let G = 0; G < V.length; G++)
        z(g, V[G]);
    if (F) {
      let G = F.subTree;
      if (w === G || _u(G.type) && (G.ssContent === w || G.ssFallback === w)) {
        const ee = F.vnode;
        Ie(
          g,
          ee,
          ee.scopeId,
          ee.slotScopeIds,
          F.parent
        );
      }
    }
  }, bt = (g, w, M, V, F, G, ee, J, Y = 0) => {
    for (let H = Y; H < g.length; H++) {
      const ue = g[H] = J ? hn(g[H]) : Kt(g[H]);
      K(
        null,
        ue,
        w,
        M,
        V,
        F,
        G,
        ee,
        J
      );
    }
  }, kn = (g, w, M, V, F, G, ee) => {
    const J = w.el = g.el;
    let { patchFlag: Y, dynamicChildren: H, dirs: ue } = w;
    Y |= g.patchFlag & 16;
    const Q = g.props || De, ae = w.props || De;
    let ce;
    if (M && In(M, !1), (ce = ae.onVnodeBeforeUpdate) && Mt(ce, M, w, g), ue && An(w, g, M, "beforeUpdate"), M && In(M, !0), (Q.innerHTML && ae.innerHTML == null || Q.textContent && ae.textContent == null) && x(J, ""), H ? Pt(
      g.dynamicChildren,
      H,
      J,
      M,
      V,
      Ti(w, F),
      G
    ) : ee || be(
      g,
      w,
      J,
      null,
      M,
      V,
      Ti(w, F),
      G,
      !1
    ), Y > 0) {
      if (Y & 16)
        tn(J, Q, ae, M, F);
      else if (Y & 2 && Q.class !== ae.class && l(J, "class", null, ae.class, F), Y & 4 && l(J, "style", Q.style, ae.style, F), Y & 8) {
        const ge = w.dynamicProps;
        for (let we = 0; we < ge.length; we++) {
          const Oe = ge[we], qe = Q[Oe], Ye = ae[Oe];
          (Ye !== qe || Oe === "value") && l(J, Oe, qe, Ye, F, M);
        }
      }
      Y & 1 && g.children !== w.children && x(J, w.children);
    } else !ee && H == null && tn(J, Q, ae, M, F);
    ((ce = ae.onVnodeUpdated) || ue) && yt(() => {
      ce && Mt(ce, M, w, g), ue && An(w, g, M, "updated");
    }, V);
  }, Pt = (g, w, M, V, F, G, ee) => {
    for (let J = 0; J < w.length; J++) {
      const Y = g[J], H = w[J], ue = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Y.type === He || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gr(Y, H) || // - In the case of a component, it could contain anything.
        Y.shapeFlag & 198) ? P(Y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          M
        )
      );
      K(
        Y,
        H,
        ue,
        null,
        V,
        F,
        G,
        ee,
        !0
      );
    }
  }, tn = (g, w, M, V, F) => {
    if (w !== M) {
      if (w !== De)
        for (const G in w)
          !br(G) && !(G in M) && l(
            g,
            G,
            w[G],
            null,
            F,
            V
          );
      for (const G in M) {
        if (br(G)) continue;
        const ee = M[G], J = w[G];
        ee !== J && G !== "value" && l(g, G, J, ee, F, V);
      }
      "value" in M && l(g, "value", w.value, M.value, F);
    }
  }, Dt = (g, w, M, V, F, G, ee, J, Y) => {
    const H = w.el = g ? g.el : p(""), ue = w.anchor = g ? g.anchor : p("");
    let { patchFlag: Q, dynamicChildren: ae, slotScopeIds: ce } = w;
    ce && (J = J ? J.concat(ce) : ce), g == null ? (s(H, M, V), s(ue, M, V), bt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      M,
      ue,
      F,
      G,
      ee,
      J,
      Y
    )) : Q > 0 && Q & 64 && ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Pt(
      g.dynamicChildren,
      ae,
      M,
      F,
      G,
      ee,
      J
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || F && w === F.subTree) && hu(
      g,
      w,
      !0
      /* shallow */
    )) : be(
      g,
      w,
      M,
      ue,
      F,
      G,
      ee,
      J,
      Y
    );
  }, wt = (g, w, M, V, F, G, ee, J, Y) => {
    w.slotScopeIds = J, g == null ? w.shapeFlag & 512 ? F.ctx.activate(
      w,
      M,
      V,
      ee,
      Y
    ) : rr(
      w,
      M,
      V,
      F,
      G,
      ee,
      Y
    ) : Ln(g, w, Y);
  }, rr = (g, w, M, V, F, G, ee) => {
    const J = g.component = Xc(
      g,
      V,
      F
    );
    if (eu(g) && (J.ctx.renderer = rn), zc(J, !1, ee), J.asyncDep) {
      if (F && F.registerDep(J, We, ee), !g.el) {
        const Y = J.subTree = Rt(bn);
        L(null, Y, w, M);
      }
    } else
      We(
        J,
        g,
        w,
        M,
        F,
        G,
        ee
      );
  }, Ln = (g, w, M) => {
    const V = w.component = g.component;
    if (Uc(g, w, M))
      if (V.asyncDep && !V.asyncResolved) {
        Le(V, w, M);
        return;
      } else
        V.next = w, V.update();
    else
      w.el = g.el, V.vnode = w;
  }, We = (g, w, M, V, F, G, ee) => {
    const J = () => {
      if (g.isMounted) {
        let { next: Q, bu: ae, u: ce, parent: ge, vnode: we } = g;
        {
          const Xe = mu(g);
          if (Xe) {
            Q && (Q.el = we.el, Le(g, Q, ee)), Xe.asyncDep.then(() => {
              g.isUnmounted || J();
            });
            return;
          }
        }
        let Oe = Q, qe;
        In(g, !1), Q ? (Q.el = we.el, Le(g, Q, ee)) : Q = we, ae && po(ae), (qe = Q.props && Q.props.onVnodeBeforeUpdate) && Mt(qe, ge, Q, we), In(g, !0);
        const Ye = Js(g), st = g.subTree;
        g.subTree = Ye, K(
          st,
          Ye,
          // parent may have changed if it's in a teleport
          P(st.el),
          // anchor may have changed if it's in a fragment
          nn(st),
          g,
          F,
          G
        ), Q.el = Ye.el, Oe === null && Hc(g, Ye.el), ce && yt(ce, F), (qe = Q.props && Q.props.onVnodeUpdated) && yt(
          () => Mt(qe, ge, Q, we),
          F
        );
      } else {
        let Q;
        const { el: ae, props: ce } = w, { bm: ge, m: we, parent: Oe, root: qe, type: Ye } = g, st = Tr(w);
        In(g, !1), ge && po(ge), !st && (Q = ce && ce.onVnodeBeforeMount) && Mt(Q, Oe, w), In(g, !0);
        {
          qe.ce && // @ts-expect-error _def is private
          qe.ce._def.shadowRoot !== !1 && qe.ce._injectChildStyle(Ye);
          const Xe = g.subTree = Js(g);
          K(
            null,
            Xe,
            M,
            V,
            g,
            F,
            G
          ), w.el = Xe.el;
        }
        if (we && yt(we, F), !st && (Q = ce && ce.onVnodeMounted)) {
          const Xe = w;
          yt(
            () => Mt(Q, Oe, Xe),
            F
          );
        }
        (w.shapeFlag & 256 || Oe && Tr(Oe.vnode) && Oe.vnode.shapeFlag & 256) && g.a && yt(g.a, F), g.isMounted = !0, w = M = V = null;
      }
    };
    g.scope.on();
    const Y = g.effect = new Sa(J);
    g.scope.off();
    const H = g.update = Y.run.bind(Y), ue = g.job = Y.runIfDirty.bind(Y);
    ue.i = g, ue.id = g.uid, Y.scheduler = () => ts(ue), In(g, !0), H();
  }, Le = (g, w, M) => {
    w.component = g;
    const V = g.vnode.props;
    g.vnode = w, g.next = null, Oc(g, w.props, V, M), Sc(g, w.children, M), Ht(), Gs(g), Ft();
  }, be = (g, w, M, V, F, G, ee, J, Y = !1) => {
    const H = g && g.children, ue = g ? g.shapeFlag : 0, Q = w.children, { patchFlag: ae, shapeFlag: ce } = w;
    if (ae > 0) {
      if (ae & 128) {
        pt(
          H,
          Q,
          M,
          V,
          F,
          G,
          ee,
          J,
          Y
        );
        return;
      } else if (ae & 256) {
        dt(
          H,
          Q,
          M,
          V,
          F,
          G,
          ee,
          J,
          Y
        );
        return;
      }
    }
    ce & 8 ? (ue & 16 && xt(H, F, G), Q !== H && x(M, Q)) : ue & 16 ? ce & 16 ? pt(
      H,
      Q,
      M,
      V,
      F,
      G,
      ee,
      J,
      Y
    ) : xt(H, F, G, !0) : (ue & 8 && x(M, ""), ce & 16 && bt(
      Q,
      M,
      V,
      F,
      G,
      ee,
      J,
      Y
    ));
  }, dt = (g, w, M, V, F, G, ee, J, Y) => {
    g = g || Yn, w = w || Yn;
    const H = g.length, ue = w.length, Q = Math.min(H, ue);
    let ae;
    for (ae = 0; ae < Q; ae++) {
      const ce = w[ae] = Y ? hn(w[ae]) : Kt(w[ae]);
      K(
        g[ae],
        ce,
        M,
        null,
        F,
        G,
        ee,
        J,
        Y
      );
    }
    H > ue ? xt(
      g,
      F,
      G,
      !0,
      !1,
      Q
    ) : bt(
      w,
      M,
      V,
      F,
      G,
      ee,
      J,
      Y,
      Q
    );
  }, pt = (g, w, M, V, F, G, ee, J, Y) => {
    let H = 0;
    const ue = w.length;
    let Q = g.length - 1, ae = ue - 1;
    for (; H <= Q && H <= ae; ) {
      const ce = g[H], ge = w[H] = Y ? hn(w[H]) : Kt(w[H]);
      if (gr(ce, ge))
        K(
          ce,
          ge,
          M,
          null,
          F,
          G,
          ee,
          J,
          Y
        );
      else
        break;
      H++;
    }
    for (; H <= Q && H <= ae; ) {
      const ce = g[Q], ge = w[ae] = Y ? hn(w[ae]) : Kt(w[ae]);
      if (gr(ce, ge))
        K(
          ce,
          ge,
          M,
          null,
          F,
          G,
          ee,
          J,
          Y
        );
      else
        break;
      Q--, ae--;
    }
    if (H > Q) {
      if (H <= ae) {
        const ce = ae + 1, ge = ce < ue ? w[ce].el : V;
        for (; H <= ae; )
          K(
            null,
            w[H] = Y ? hn(w[H]) : Kt(w[H]),
            M,
            ge,
            F,
            G,
            ee,
            J,
            Y
          ), H++;
      }
    } else if (H > ae)
      for (; H <= Q; )
        Et(g[H], F, G, !0), H++;
    else {
      const ce = H, ge = H, we = /* @__PURE__ */ new Map();
      for (H = ge; H <= ae; H++) {
        const Ke = w[H] = Y ? hn(w[H]) : Kt(w[H]);
        Ke.key != null && we.set(Ke.key, H);
      }
      let Oe, qe = 0;
      const Ye = ae - ge + 1;
      let st = !1, Xe = 0;
      const kt = new Array(Ye);
      for (H = 0; H < Ye; H++) kt[H] = 0;
      for (H = ce; H <= Q; H++) {
        const Ke = g[H];
        if (qe >= Ye) {
          Et(Ke, F, G, !0);
          continue;
        }
        let oe;
        if (Ke.key != null)
          oe = we.get(Ke.key);
        else
          for (Oe = ge; Oe <= ae; Oe++)
            if (kt[Oe - ge] === 0 && gr(Ke, w[Oe])) {
              oe = Oe;
              break;
            }
        oe === void 0 ? Et(Ke, F, G, !0) : (kt[oe - ge] = H + 1, oe >= Xe ? Xe = oe : st = !0, K(
          Ke,
          w[oe],
          M,
          null,
          F,
          G,
          ee,
          J,
          Y
        ), qe++);
      }
      const Mn = st ? Pc(kt) : Yn;
      for (Oe = Mn.length - 1, H = Ye - 1; H >= 0; H--) {
        const Ke = ge + H, oe = w[Ke], on = Ke + 1 < ue ? w[Ke + 1].el : V;
        kt[H] === 0 ? K(
          null,
          oe,
          M,
          on,
          F,
          G,
          ee,
          J,
          Y
        ) : st && (Oe < 0 || H !== Mn[Oe] ? St(oe, M, on, 2) : Oe--);
      }
    }
  }, St = (g, w, M, V, F = null) => {
    const { el: G, type: ee, transition: J, children: Y, shapeFlag: H } = g;
    if (H & 6) {
      St(g.component.subTree, w, M, V);
      return;
    }
    if (H & 128) {
      g.suspense.move(w, M, V);
      return;
    }
    if (H & 64) {
      ee.move(g, w, M, rn);
      return;
    }
    if (ee === He) {
      s(G, w, M);
      for (let Q = 0; Q < Y.length; Q++)
        St(Y[Q], w, M, V);
      s(g.anchor, w, M);
      return;
    }
    if (ee === Ni) {
      Te(g, w, M);
      return;
    }
    if (V !== 2 && H & 1 && J)
      if (V === 0)
        J.beforeEnter(G), s(G, w, M), yt(() => J.enter(G), F);
      else {
        const { leave: Q, delayLeave: ae, afterLeave: ce } = J, ge = () => {
          g.ctx.isUnmounted ? a(G) : s(G, w, M);
        }, we = () => {
          Q(G, () => {
            ge(), ce && ce();
          });
        };
        ae ? ae(G, ge, we) : we();
      }
    else
      s(G, w, M);
  }, Et = (g, w, M, V = !1, F = !1) => {
    const {
      type: G,
      props: ee,
      ref: J,
      children: Y,
      dynamicChildren: H,
      shapeFlag: ue,
      patchFlag: Q,
      dirs: ae,
      cacheIndex: ce
    } = g;
    if (Q === -2 && (F = !1), J != null && (Ht(), Or(J, null, M, g, !0), Ft()), ce != null && (w.renderCache[ce] = void 0), ue & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const ge = ue & 1 && ae, we = !Tr(g);
    let Oe;
    if (we && (Oe = ee && ee.onVnodeBeforeUnmount) && Mt(Oe, w, g), ue & 6)
      jn(g.component, M, V);
    else {
      if (ue & 128) {
        g.suspense.unmount(M, V);
        return;
      }
      ge && An(g, null, w, "beforeUnmount"), ue & 64 ? g.type.remove(
        g,
        w,
        M,
        rn,
        V
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (G !== He || Q > 0 && Q & 64) ? xt(
        H,
        w,
        M,
        !1,
        !0
      ) : (G === He && Q & 384 || !F && ue & 16) && xt(Y, w, M), V && Gt(g);
    }
    (we && (Oe = ee && ee.onVnodeUnmounted) || ge) && yt(() => {
      Oe && Mt(Oe, w, g), ge && An(g, null, w, "unmounted");
    }, M);
  }, Gt = (g) => {
    const { type: w, el: M, anchor: V, transition: F } = g;
    if (w === He) {
      Mr(M, V);
      return;
    }
    if (w === Ni) {
      le(g);
      return;
    }
    const G = () => {
      a(M), F && !F.persisted && F.afterLeave && F.afterLeave();
    };
    if (g.shapeFlag & 1 && F && !F.persisted) {
      const { leave: ee, delayLeave: J } = F, Y = () => ee(M, G);
      J ? J(g.el, G, Y) : Y();
    } else
      G();
  }, Mr = (g, w) => {
    let M;
    for (; g !== w; )
      M = U(g), a(g), g = M;
    a(w);
  }, jn = (g, w, M) => {
    const {
      bum: V,
      scope: F,
      job: G,
      subTree: ee,
      um: J,
      m: Y,
      a: H,
      parent: ue,
      slots: { __: Q }
    } = g;
    zs(Y), zs(H), V && po(V), ue && fe(Q) && Q.forEach((ae) => {
      ue.renderCache[ae] = void 0;
    }), F.stop(), G && (G.flags |= 8, Et(ee, g, w, M)), J && yt(J, w), yt(() => {
      g.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, xt = (g, w, M, V = !1, F = !1, G = 0) => {
    for (let ee = G; ee < g.length; ee++)
      Et(g[ee], w, M, V, F);
  }, nn = (g) => {
    if (g.shapeFlag & 6)
      return nn(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = U(g.anchor || g.el), M = w && w[ec];
    return M ? U(M) : w;
  };
  let or = !1;
  const se = (g, w, M) => {
    g == null ? w._vnode && Et(w._vnode, null, null, !0) : K(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      M
    ), w._vnode = g, or || (or = !0, Gs(), za(), or = !1);
  }, rn = {
    p: K,
    um: Et,
    m: St,
    r: Gt,
    mt: rr,
    mc: bt,
    pc: be,
    pbc: Pt,
    n: nn,
    o: e
  };
  return {
    render: se,
    hydrate: void 0,
    createApp: wc(se)
  };
}
function Ti({ type: e, props: n }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : o;
}
function In({ effect: e, job: n }, o) {
  o ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Cc(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function hu(e, n, o = !1) {
  const s = e.children, a = n.children;
  if (fe(s) && fe(a))
    for (let l = 0; l < s.length; l++) {
      const f = s[l];
      let p = a[l];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = a[l] = hn(a[l]), p.el = f.el), !o && p.patchFlag !== -2 && hu(f, p)), p.type === Ko && (p.el = f.el), p.type === bn && !p.el && (p.el = f.el);
    }
}
function Pc(e) {
  const n = e.slice(), o = [0];
  let s, a, l, f, p;
  const m = e.length;
  for (s = 0; s < m; s++) {
    const I = e[s];
    if (I !== 0) {
      if (a = o[o.length - 1], e[a] < I) {
        n[s] = a, o.push(s);
        continue;
      }
      for (l = 0, f = o.length - 1; l < f; )
        p = l + f >> 1, e[o[p]] < I ? l = p + 1 : f = p;
      I < e[o[l]] && (l > 0 && (n[s] = o[l - 1]), o[l] = s);
    }
  }
  for (l = o.length, f = o[l - 1]; l-- > 0; )
    o[l] = f, f = n[f];
  return o;
}
function mu(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : mu(n);
}
function zs(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Dc = Symbol.for("v-scx"), kc = () => ho(Dc);
function yn(e, n, o) {
  return gu(e, n, o);
}
function gu(e, n, o = De) {
  const { immediate: s, deep: a, flush: l, once: f } = o, p = it({}, o), m = n && s || !n && l !== "post";
  let I;
  if (Pr) {
    if (l === "sync") {
      const z = kc();
      I = z.__watcherHandles || (z.__watcherHandles = []);
    } else if (!m) {
      const z = () => {
      };
      return z.stop = It, z.resume = It, z.pause = It, z;
    }
  }
  const x = Ze;
  p.call = (z, ie, K) => Vt(z, x, ie, K);
  let P = !1;
  l === "post" ? p.scheduler = (z) => {
    yt(z, x && x.suspense);
  } : l !== "sync" && (P = !0, p.scheduler = (z, ie) => {
    ie ? z() : ts(z);
  }), p.augmentJob = (z) => {
    n && (z.flags |= 4), P && (z.flags |= 2, x && (z.id = x.uid, z.i = x));
  };
  const U = Gl(e, n, p);
  return Pr && (I ? I.push(U) : m && U()), U;
}
function Lc(e, n, o) {
  const s = this.proxy, a = $e(e) ? e.includes(".") ? yu(s, e) : () => s[e] : e.bind(s, s);
  let l;
  me(n) ? l = n : (l = n.handler, o = n);
  const f = jr(this), p = gu(a, l.bind(s), o);
  return f(), p;
}
function yu(e, n) {
  const o = n.split(".");
  return () => {
    let s = e;
    for (let a = 0; a < o.length && s; a++)
      s = s[o[a]];
    return s;
  };
}
const jc = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${vn(n)}Modifiers`] || e[`${Dn(n)}Modifiers`];
function Mc(e, n, ...o) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || De;
  let a = o;
  const l = n.startsWith("update:"), f = l && jc(s, n.slice(7));
  f && (f.trim && (a = o.map((x) => $e(x) ? x.trim() : x)), f.number && (a = o.map(_o)));
  let p, m = s[p = vi(n)] || // also try camelCase event handler (#2249)
  s[p = vi(vn(n))];
  !m && l && (m = s[p = vi(Dn(n))]), m && Vt(
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
    e.emitted[p] = !0, Vt(
      I,
      e,
      6,
      a
    );
  }
}
function vu(e, n, o = !1) {
  const s = n.emitsCache, a = s.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let f = {}, p = !1;
  if (!me(e)) {
    const m = (I) => {
      const x = vu(I, n, !0);
      x && (p = !0, it(f, x));
    };
    !o && n.mixins.length && n.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !p ? (Me(e) && s.set(e, null), null) : (fe(l) ? l.forEach((m) => f[m] = null) : it(f, l), Me(e) && s.set(e, f), f);
}
function Bo(e, n) {
  return !e || !Io(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Se(e, n[0].toLowerCase() + n.slice(1)) || Se(e, Dn(n)) || Se(e, n));
}
function Js(e) {
  const {
    type: n,
    vnode: o,
    proxy: s,
    withProxy: a,
    propsOptions: [l],
    slots: f,
    attrs: p,
    emit: m,
    render: I,
    renderCache: x,
    props: P,
    data: U,
    setupState: z,
    ctx: ie,
    inheritAttrs: K
  } = e, N = xo(e);
  let L, de;
  try {
    if (o.shapeFlag & 4) {
      const le = a || s, Ce = dn.NODE_ENV !== "production" && z.__isScriptSetup ? new Proxy(le, {
        get(Pe, Ie, bt) {
          return $l(
            `Property '${String(
              Ie
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Pe, Ie, bt);
        }
      }) : le;
      L = Kt(
        I.call(
          Ce,
          le,
          x,
          dn.NODE_ENV !== "production" ? co(P) : P,
          z,
          U,
          ie
        )
      ), de = p;
    } else {
      const le = n;
      dn.NODE_ENV, L = Kt(
        le.length > 1 ? le(
          dn.NODE_ENV !== "production" ? co(P) : P,
          dn.NODE_ENV !== "production" ? {
            get attrs() {
              return co(p);
            },
            slots: f,
            emit: m
          } : { attrs: p, slots: f, emit: m }
        ) : le(
          dn.NODE_ENV !== "production" ? co(P) : P,
          null
        )
      ), de = n.props ? p : Bc(p);
    }
  } catch (le) {
    Rr.length = 0, jo(le, e, 1), L = Rt(bn);
  }
  let Te = L;
  if (de && K !== !1) {
    const le = Object.keys(de), { shapeFlag: Ce } = Te;
    le.length && Ce & 7 && (l && le.some(Vi) && (de = Kc(
      de,
      l
    )), Te = Zn(Te, de, !1, !0));
  }
  return o.dirs && (Te = Zn(Te, null, !1, !0), Te.dirs = Te.dirs ? Te.dirs.concat(o.dirs) : o.dirs), o.transition && ns(Te, o.transition), L = Te, xo(N), L;
}
const Bc = (e) => {
  let n;
  for (const o in e)
    (o === "class" || o === "style" || Io(o)) && ((n || (n = {}))[o] = e[o]);
  return n;
}, Kc = (e, n) => {
  const o = {};
  for (const s in e)
    (!Vi(s) || !(s.slice(9) in n)) && (o[s] = e[s]);
  return o;
};
function Uc(e, n, o) {
  const { props: s, children: a, component: l } = e, { props: f, children: p, patchFlag: m } = n, I = l.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? Qs(s, f, I) : !!f;
    if (m & 8) {
      const x = n.dynamicProps;
      for (let P = 0; P < x.length; P++) {
        const U = x[P];
        if (f[U] !== s[U] && !Bo(I, U))
          return !0;
      }
    }
  } else
    return (a || p) && (!p || !p.$stable) ? !0 : s === f ? !1 : s ? f ? Qs(s, f, I) : !0 : !!f;
  return !1;
}
function Qs(e, n, o) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    if (n[l] !== e[l] && !Bo(o, l))
      return !0;
  }
  return !1;
}
function Hc({ vnode: e, parent: n }, o) {
  for (; n; ) {
    const s = n.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = n.vnode).el = o, n = n.parent;
    else
      break;
  }
}
const _u = (e) => e.__isSuspense;
function Fc(e, n) {
  n && n.pendingBranch ? fe(e) ? n.effects.push(...e) : n.effects.push(e) : Ql(e);
}
const He = Symbol.for("v-fgt"), Ko = Symbol.for("v-txt"), bn = Symbol.for("v-cmt"), Ni = Symbol.for("v-stc"), Rr = [];
let _t = null;
function _e(e = !1) {
  Rr.push(_t = e ? null : []);
}
function Vc() {
  Rr.pop(), _t = Rr[Rr.length - 1] || null;
}
let Cr = 1;
function Zs(e, n = !1) {
  Cr += e, e < 0 && _t && n && (_t.hasOnce = !0);
}
function bu(e) {
  return e.dynamicChildren = Cr > 0 ? _t || Yn : null, Vc(), Cr > 0 && _t && _t.push(e), e;
}
function Ae(e, n, o, s, a, l) {
  return bu(
    B(
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
function vr(e, n, o, s, a) {
  return bu(
    Rt(
      e,
      n,
      o,
      s,
      a,
      !0
    )
  );
}
function wu(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function gr(e, n) {
  return e.type === n.type && e.key === n.key;
}
const Eu = ({ key: e }) => e ?? null, mo = ({
  ref: e,
  ref_key: n,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || et(e) || me(e) ? { i: vt, r: e, k: n, f: !!o } : e : null);
function B(e, n = null, o = null, s = 0, a = null, l = e === He ? 0 : 1, f = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && Eu(n),
    ref: n && mo(n),
    scopeId: Qa,
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
    ctx: vt
  };
  return p ? (ss(m, o), l & 128 && e.normalize(m)) : o && (m.shapeFlag |= $e(o) ? 8 : 16), Cr > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  _t && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && _t.push(m), m;
}
const Rt = Gc;
function Gc(e, n = null, o = null, s = 0, a = null, l = !1) {
  if ((!e || e === pc) && (e = bn), wu(e)) {
    const p = Zn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return o && ss(p, o), Cr > 0 && !l && _t && (p.shapeFlag & 6 ? _t[_t.indexOf(e)] = p : _t.push(p)), p.patchFlag = -2, p;
  }
  if (rf(e) && (e = e.__vccOpts), n) {
    n = $c(n);
    let { class: p, style: m } = n;
    p && !$e(p) && (n.class = Wi(p)), Me(m) && (es(m) && !fe(m) && (m = it({}, m)), n.style = qi(m));
  }
  const f = $e(e) ? 1 : _u(e) ? 128 : tc(e) ? 64 : Me(e) ? 4 : me(e) ? 2 : 0;
  return B(
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
function $c(e) {
  return e ? es(e) || uu(e) ? it({}, e) : e : null;
}
function Zn(e, n, o = !1, s = !1) {
  const { props: a, ref: l, patchFlag: f, children: p, transition: m } = e, I = n ? qc(a || {}, n) : a, x = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: I,
    key: I && Eu(I),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && l ? fe(l) ? l.concat(mo(n)) : [l, mo(n)] : mo(n)
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
    patchFlag: n && e.type !== He ? f === -1 ? 16 : f | 16 : f,
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
  return m && s && ns(
    x,
    m.clone(x)
  ), x;
}
function xu(e = " ", n = 0) {
  return Rt(Ko, null, e, n);
}
function _r(e = "", n = !1) {
  return n ? (_e(), vr(bn, null, e)) : Rt(bn, null, e);
}
function Kt(e) {
  return e == null || typeof e == "boolean" ? Rt(bn) : fe(e) ? Rt(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : wu(e) ? hn(e) : Rt(Ko, null, String(e));
}
function hn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Zn(e);
}
function ss(e, n) {
  let o = 0;
  const { shapeFlag: s } = e;
  if (n == null)
    n = null;
  else if (fe(n))
    o = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const a = n.default;
      a && (a._c && (a._d = !1), ss(e, a()), a._c && (a._d = !0));
      return;
    } else {
      o = 32;
      const a = n._;
      !a && !uu(n) ? n._ctx = vt : a === 3 && vt && (vt.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else me(n) ? (n = { default: n, _ctx: vt }, o = 32) : (n = String(n), s & 64 ? (o = 16, n = [xu(n)]) : o = 8);
  e.children = n, e.shapeFlag |= o;
}
function qc(...e) {
  const n = {};
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    for (const a in s)
      if (a === "class")
        n.class !== s.class && (n.class = Wi([n.class, s.class]));
      else if (a === "style")
        n.style = qi([n.style, s.style]);
      else if (Io(a)) {
        const l = n[a], f = s[a];
        f && l !== f && !(fe(l) && l.includes(f)) && (n[a] = l ? [].concat(l, f) : f);
      } else a !== "" && (n[a] = s[a]);
  }
  return n;
}
function Mt(e, n, o, s = null) {
  Vt(e, n, 7, [
    o,
    s
  ]);
}
const Wc = iu();
let Yc = 0;
function Xc(e, n, o) {
  const s = e.type, a = (n ? n.appContext : e.appContext) || Wc, l = {
    uid: Yc++,
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
    scope: new gl(
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
    propsOptions: cu(s, a),
    emitsOptions: vu(s, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: De,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: De,
    data: De,
    props: De,
    attrs: De,
    slots: De,
    refs: De,
    setupState: De,
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
  return l.ctx = { _: l }, l.root = n ? n.root : l, l.emit = Mc.bind(null, l), e.ce && e.ce(l), l;
}
let Ze = null, To, Ki;
{
  const e = Po(), n = (o, s) => {
    let a;
    return (a = e[o]) || (a = e[o] = []), a.push(s), (l) => {
      a.length > 1 ? a.forEach((f) => f(l)) : a[0](l);
    };
  };
  To = n(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Ze = o
  ), Ki = n(
    "__VUE_SSR_SETTERS__",
    (o) => Pr = o
  );
}
const jr = (e) => {
  const n = Ze;
  return To(e), e.scope.on(), () => {
    e.scope.off(), To(n);
  };
}, ea = () => {
  Ze && Ze.scope.off(), To(null);
};
function Ou(e) {
  return e.vnode.shapeFlag & 4;
}
let Pr = !1;
function zc(e, n = !1, o = !1) {
  n && Ki(n);
  const { props: s, children: a } = e.vnode, l = Ou(e);
  xc(e, s, l, n), Rc(e, a, o || n);
  const f = l ? Jc(e, n) : void 0;
  return n && Ki(!1), f;
}
function Jc(e, n) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hc);
  const { setup: s } = o;
  if (s) {
    Ht();
    const a = e.setupContext = s.length > 1 ? Zc(e) : null, l = jr(e), f = nr(
      s,
      e,
      0,
      [
        e.props,
        a
      ]
    ), p = wa(f);
    if (Ft(), l(), (p || e.sp) && !Tr(e) && Za(e), p) {
      if (f.then(ea, ea), n)
        return f.then((m) => {
          ta(e, m);
        }).catch((m) => {
          jo(m, e, 0);
        });
      e.asyncDep = f;
    } else
      ta(e, f);
  } else
    Tu(e);
}
function ta(e, n, o) {
  me(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : Me(n) && (e.setupState = $a(n)), Tu(e);
}
function Tu(e, n, o) {
  const s = e.type;
  e.render || (e.render = s.render || It);
  {
    const a = jr(e);
    Ht();
    try {
      mc(e);
    } finally {
      Ft(), a();
    }
  }
}
const Qc = {
  get(e, n) {
    return ot(e, "get", ""), e[n];
  }
};
function Zc(e) {
  const n = (o) => {
    e.exposed = o || {};
  };
  return {
    attrs: new Proxy(e.attrs, Qc),
    slots: e.slots,
    emit: e.emit,
    expose: n
  };
}
function Uo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($a(Ml(e.exposed)), {
    get(n, o) {
      if (o in n)
        return n[o];
      if (o in Nr)
        return Nr[o](e);
    },
    has(n, o) {
      return o in n || o in Nr;
    }
  })) : e.proxy;
}
const ef = /(?:^|[-_])(\w)/g, tf = (e) => e.replace(ef, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function nf(e, n = !0) {
  return me(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Nu(e, n, o = !1) {
  let s = nf(n);
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
  return s ? tf(s) : o ? "App" : "Anonymous";
}
function rf(e) {
  return me(e) && "__vccOpts" in e;
}
const At = (e, n) => Fl(e, n, Pr), of = "3.5.17";
let Ui;
const na = typeof window < "u" && window.trustedTypes;
if (na)
  try {
    Ui = /* @__PURE__ */ na.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ru = Ui ? (e) => Ui.createHTML(e) : (e) => e, sf = "http://www.w3.org/2000/svg", af = "http://www.w3.org/1998/Math/MathML", Yt = typeof document < "u" ? document : null, ra = Yt && /* @__PURE__ */ Yt.createElement("template"), uf = {
  insert: (e, n, o) => {
    n.insertBefore(e, o || null);
  },
  remove: (e) => {
    const n = e.parentNode;
    n && n.removeChild(e);
  },
  createElement: (e, n, o, s) => {
    const a = n === "svg" ? Yt.createElementNS(sf, e) : n === "mathml" ? Yt.createElementNS(af, e) : o ? Yt.createElement(e, { is: o }) : Yt.createElement(e);
    return e === "select" && s && s.multiple != null && a.setAttribute("multiple", s.multiple), a;
  },
  createText: (e) => Yt.createTextNode(e),
  createComment: (e) => Yt.createComment(e),
  setText: (e, n) => {
    e.nodeValue = n;
  },
  setElementText: (e, n) => {
    e.textContent = n;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Yt.querySelector(e),
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
      ra.innerHTML = Ru(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const p = ra.content;
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
}, lf = Symbol("_vtc");
function cf(e, n, o) {
  const s = e[lf];
  s && (n = (n ? [n, ...s] : [...s]).join(" ")), n == null ? e.removeAttribute("class") : o ? e.setAttribute("class", n) : e.className = n;
}
const oa = Symbol("_vod"), ff = Symbol("_vsh"), df = Symbol(""), pf = /(^|;)\s*display\s*:/;
function hf(e, n, o) {
  const s = e.style, a = $e(o);
  let l = !1;
  if (o && !a) {
    if (n)
      if ($e(n))
        for (const f of n.split(";")) {
          const p = f.slice(0, f.indexOf(":")).trim();
          o[p] == null && go(s, p, "");
        }
      else
        for (const f in n)
          o[f] == null && go(s, f, "");
    for (const f in o)
      f === "display" && (l = !0), go(s, f, o[f]);
  } else if (a) {
    if (n !== o) {
      const f = s[df];
      f && (o += ";" + f), s.cssText = o, l = pf.test(o);
    }
  } else n && e.removeAttribute("style");
  oa in e && (e[oa] = l ? s.display : "", e[ff] && (s.display = "none"));
}
const ia = /\s*!important$/;
function go(e, n, o) {
  if (fe(o))
    o.forEach((s) => go(e, n, s));
  else if (o == null && (o = ""), n.startsWith("--"))
    e.setProperty(n, o);
  else {
    const s = mf(e, n);
    ia.test(o) ? e.setProperty(
      Dn(s),
      o.replace(ia, ""),
      "important"
    ) : e[s] = o;
  }
}
const sa = ["Webkit", "Moz", "ms"], Ri = {};
function mf(e, n) {
  const o = Ri[n];
  if (o)
    return o;
  let s = vn(n);
  if (s !== "filter" && s in e)
    return Ri[n] = s;
  s = Oa(s);
  for (let a = 0; a < sa.length; a++) {
    const l = sa[a] + s;
    if (l in e)
      return Ri[n] = l;
  }
  return n;
}
const aa = "http://www.w3.org/1999/xlink";
function ua(e, n, o, s, a, l = pl(n)) {
  s && n.startsWith("xlink:") ? o == null ? e.removeAttributeNS(aa, n.slice(6, n.length)) : e.setAttributeNS(aa, n, o) : o == null || l && !Ta(o) ? e.removeAttribute(n) : e.setAttribute(
    n,
    l ? "" : Ut(o) ? String(o) : o
  );
}
function la(e, n, o, s, a) {
  if (n === "innerHTML" || n === "textContent") {
    o != null && (e[n] = n === "innerHTML" ? Ru(o) : o);
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
    p === "boolean" ? o = Ta(o) : o == null && p === "string" ? (o = "", f = !0) : p === "number" && (o = 0, f = !0);
  }
  try {
    e[n] = o;
  } catch {
  }
  f && e.removeAttribute(a || n);
}
function mn(e, n, o, s) {
  e.addEventListener(n, o, s);
}
function gf(e, n, o, s) {
  e.removeEventListener(n, o, s);
}
const ca = Symbol("_vei");
function yf(e, n, o, s, a = null) {
  const l = e[ca] || (e[ca] = {}), f = l[n];
  if (s && f)
    f.value = s;
  else {
    const [p, m] = vf(n);
    if (s) {
      const I = l[n] = wf(
        s,
        a
      );
      mn(e, p, I, m);
    } else f && (gf(e, p, f, m), l[n] = void 0);
  }
}
const fa = /(?:Once|Passive|Capture)$/;
function vf(e) {
  let n;
  if (fa.test(e)) {
    n = {};
    let s;
    for (; s = e.match(fa); )
      e = e.slice(0, e.length - s[0].length), n[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Dn(e.slice(2)), n];
}
let Si = 0;
const _f = /* @__PURE__ */ Promise.resolve(), bf = () => Si || (_f.then(() => Si = 0), Si = Date.now());
function wf(e, n) {
  const o = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= o.attached)
      return;
    Vt(
      Ef(s, o.value),
      n,
      5,
      [s]
    );
  };
  return o.value = e, o.attached = bf(), o;
}
function Ef(e, n) {
  if (fe(n)) {
    const o = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      o.call(e), e._stopped = !0;
    }, n.map(
      (s) => (a) => !a._stopped && s && s(a)
    );
  } else
    return n;
}
const da = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, xf = (e, n, o, s, a, l) => {
  const f = a === "svg";
  n === "class" ? cf(e, s, f) : n === "style" ? hf(e, o, s) : Io(n) ? Vi(n) || yf(e, n, o, s, l) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : Of(e, n, s, f)) ? (la(e, n, s), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && ua(e, n, s, f, l, n !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(n) || !$e(s)) ? la(e, vn(n), s, l, n) : (n === "true-value" ? e._trueValue = s : n === "false-value" && (e._falseValue = s), ua(e, n, s, f));
};
function Of(e, n, o, s) {
  if (s)
    return !!(n === "innerHTML" || n === "textContent" || n in e && da(n) && me(o));
  if (n === "spellcheck" || n === "draggable" || n === "translate" || n === "autocorrect" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (n === "width" || n === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return da(n) && $e(o) ? !1 : n in e;
}
const er = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return fe(n) ? (o) => po(n, o) : n;
};
function Tf(e) {
  e.target.composing = !0;
}
function pa(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
const Zt = Symbol("_assign"), No = {
  created(e, { modifiers: { lazy: n, trim: o, number: s } }, a) {
    e[Zt] = er(a);
    const l = s || a.props && a.props.type === "number";
    mn(e, n ? "change" : "input", (f) => {
      if (f.target.composing) return;
      let p = e.value;
      o && (p = p.trim()), l && (p = _o(p)), e[Zt](p);
    }), o && mn(e, "change", () => {
      e.value = e.value.trim();
    }), n || (mn(e, "compositionstart", Tf), mn(e, "compositionend", pa), mn(e, "change", pa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, oldValue: o, modifiers: { lazy: s, trim: a, number: l } }, f) {
    if (e[Zt] = er(f), e.composing) return;
    const p = (l || e.type === "number") && !/^0\d/.test(e.value) ? _o(e.value) : e.value, m = n ?? "";
    p !== m && (document.activeElement === e && e.type !== "range" && (s && n === o || a && e.value.trim() === m) || (e.value = m));
  }
}, ha = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, n, o) {
    e[Zt] = er(o), mn(e, "change", () => {
      const s = e._modelValue, a = Dr(e), l = e.checked, f = e[Zt];
      if (fe(s)) {
        const p = Yi(s, a), m = p !== -1;
        if (l && !m)
          f(s.concat(a));
        else if (!l && m) {
          const I = [...s];
          I.splice(p, 1), f(I);
        }
      } else if (tr(s)) {
        const p = new Set(s);
        l ? p.add(a) : p.delete(a), f(p);
      } else
        f(Su(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ma,
  beforeUpdate(e, n, o) {
    e[Zt] = er(o), ma(e, n, o);
  }
};
function ma(e, { value: n, oldValue: o }, s) {
  e._modelValue = n;
  let a;
  if (fe(n))
    a = Yi(n, s.props.value) > -1;
  else if (tr(n))
    a = n.has(s.props.value);
  else {
    if (n === o) return;
    a = Lr(n, Su(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const Jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: n, modifiers: { number: o } }, s) {
    const a = tr(n);
    mn(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => o ? _o(Dr(f)) : Dr(f)
      );
      e[Zt](
        e.multiple ? a ? new Set(l) : l : l[0]
      ), e._assigning = !0, Ya(() => {
        e._assigning = !1;
      });
    }), e[Zt] = er(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: n }) {
    ga(e, n);
  },
  beforeUpdate(e, n, o) {
    e[Zt] = er(o);
  },
  updated(e, { value: n }) {
    e._assigning || ga(e, n);
  }
};
function ga(e, n) {
  const o = e.multiple, s = fe(n);
  if (!(o && !s && !tr(n))) {
    for (let a = 0, l = e.options.length; a < l; a++) {
      const f = e.options[a], p = Dr(f);
      if (o)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? f.selected = n.some((I) => String(I) === String(p)) : f.selected = Yi(n, p) > -1;
        } else
          f.selected = n.has(p);
      else if (Lr(Dr(f), n)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Dr(e) {
  return "_value" in e ? e._value : e.value;
}
function Su(e, n) {
  const o = n ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : n;
}
const Nf = /* @__PURE__ */ it({ patchProp: xf }, uf);
let ya;
function Rf() {
  return ya || (ya = Ac(Nf));
}
const Sf = (...e) => {
  const n = Rf().createApp(...e), { mount: o } = n;
  return n.mount = (s) => {
    const a = If(s);
    if (!a) return;
    const l = n._component;
    !me(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = o(a, !1, Af(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, n;
};
function Af(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function If(e) {
  return $e(e) ? document.querySelector(e) : e;
}
var Cf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var yo = { exports: {} }, Df = yo.exports, va;
function kf() {
  return va || (va = 1, function(e, n) {
    (function(o, s) {
      e.exports = s();
    })(Df, function() {
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
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Cf, f = Object.keys, p = Array.isArray;
      function m(t, r) {
        return typeof r != "object" || f(r).forEach(function(i) {
          t[i] = r[i];
        }), t;
      }
      typeof Promise > "u" || l.Promise || (l.Promise = Promise);
      var I = Object.getPrototypeOf, x = {}.hasOwnProperty;
      function P(t, r) {
        return x.call(t, r);
      }
      function U(t, r) {
        typeof r == "function" && (r = r(I(t))), (typeof Reflect > "u" ? f : Reflect.ownKeys)(r).forEach(function(i) {
          ie(t, i, r[i]);
        });
      }
      var z = Object.defineProperty;
      function ie(t, r, i, u) {
        z(t, r, m(i && P(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, u));
      }
      function K(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), ie(t.prototype, "constructor", t), { extend: U.bind(null, t.prototype) };
        } };
      }
      var N = Object.getOwnPropertyDescriptor, L = [].slice;
      function de(t, r, i) {
        return L.call(t, r, i);
      }
      function Te(t, r) {
        return r(t);
      }
      function le(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Ce(t) {
        l.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Pe(t, r) {
        if (typeof r == "string" && P(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var i = [], u = 0, c = r.length; u < c; ++u) {
            var d = Pe(t, r[u]);
            i.push(d);
          }
          return i;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var y = t[r.substr(0, h)];
          return y == null ? void 0 : Pe(y, r.substr(h + 1));
        }
      }
      function Ie(t, r, i) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          le(typeof i != "string" && "length" in i);
          for (var u = 0, c = r.length; u < c; ++u) Ie(t, r[u], i[u]);
        } else {
          var d, h, y = r.indexOf(".");
          y !== -1 ? (d = r.substr(0, y), (h = r.substr(y + 1)) === "" ? i === void 0 ? p(t) && !isNaN(parseInt(d)) ? t.splice(d, 1) : delete t[d] : t[d] = i : Ie(y = !(y = t[d]) || !P(t, d) ? t[d] = {} : y, h, i)) : i === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = i;
        }
      }
      function bt(t) {
        var r, i = {};
        for (r in t) P(t, r) && (i[r] = t[r]);
        return i;
      }
      var kn = [].concat;
      function Pt(t) {
        return kn.apply([], t);
      }
      var ge = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Pt([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return l[t];
      }), tn = new Set(ge.map(function(t) {
        return l[t];
      })), Dt = null;
      function wt(t) {
        return Dt = /* @__PURE__ */ new WeakMap(), t = function r(i) {
          if (!i || typeof i != "object") return i;
          var u = Dt.get(i);
          if (u) return u;
          if (p(i)) {
            u = [], Dt.set(i, u);
            for (var c = 0, d = i.length; c < d; ++c) u.push(r(i[c]));
          } else if (tn.has(i.constructor)) u = i;
          else {
            var h, y = I(i);
            for (h in u = y === Object.prototype ? {} : Object.create(y), Dt.set(i, u), i) P(i, h) && (u[h] = r(i[h]));
          }
          return u;
        }(t), Dt = null, t;
      }
      var rr = {}.toString;
      function Ln(t) {
        return rr.call(t).slice(8, -1);
      }
      var We = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Le = typeof We == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[We]) && r.apply(t);
      } : function() {
        return null;
      };
      function be(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var dt = {};
      function pt(t) {
        var r, i, u, c;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === dt && typeof t == "string") return [t];
          if (c = Le(t)) {
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
      var St = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ce = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Ot = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ce), Et = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Gt(t, r) {
        this.name = t, this.message = r;
      }
      function Mr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(i) {
          return r[i].toString();
        }).filter(function(i, u, c) {
          return c.indexOf(i) === u;
        }).join(`
`);
      }
      function jn(t, r, i, u) {
        this.failures = r, this.failedKeys = u, this.successCount = i, this.message = Mr(t, r);
      }
      function xt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(i) {
          return r[i];
        }), this.failuresByPos = r, this.message = Mr(t, this.failures);
      }
      K(Gt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), K(jn).from(Gt), K(xt).from(Gt);
      var nn = Ot.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), or = Gt, se = Ot.reduce(function(t, r) {
        var i = r + "Error";
        function u(c, d) {
          this.name = i, c ? typeof c == "string" ? (this.message = "".concat(c).concat(d ? `
 ` + d : ""), this.inner = d || null) : typeof c == "object" && (this.message = "".concat(c.name, " ").concat(c.message), this.inner = c) : (this.message = Et[r] || i, this.inner = null);
        }
        return K(u).from(or), t[r] = u, t;
      }, {});
      se.Syntax = SyntaxError, se.Type = TypeError, se.Range = RangeError;
      var rn = ce.reduce(function(t, r) {
        return t[r + "Error"] = se[r], t;
      }, {}), ir = Ot.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = se[r]), t;
      }, {});
      function g() {
      }
      function w(t) {
        return t;
      }
      function M(t, r) {
        return t == null || t === w ? r : function(i) {
          return r(t(i));
        };
      }
      function V(t, r) {
        return function() {
          t.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function F(t, r) {
        return t === g ? r : function() {
          var i = t.apply(this, arguments);
          i !== void 0 && (arguments[0] = i);
          var u = this.onsuccess, c = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var d = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? V(u, this.onsuccess) : u), c && (this.onerror = this.onerror ? V(c, this.onerror) : c), d !== void 0 ? d : i;
        };
      }
      function G(t, r) {
        return t === g ? r : function() {
          t.apply(this, arguments);
          var i = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? V(i, this.onsuccess) : i), u && (this.onerror = this.onerror ? V(u, this.onerror) : u);
        };
      }
      function ee(t, r) {
        return t === g ? r : function(i) {
          var u = t.apply(this, arguments);
          m(i, u);
          var c = this.onsuccess, d = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = r.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? V(c, this.onsuccess) : c), d && (this.onerror = this.onerror ? V(d, this.onerror) : d), u === void 0 ? i === void 0 ? void 0 : i : m(u, i);
        };
      }
      function J(t, r) {
        return t === g ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function Y(t, r) {
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
      ir.ModifyError = jn, ir.DexieError = Gt, ir.BulkError = xt;
      var H = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ue(t) {
        H = t;
      }
      var Q = {}, ae = 100, ge = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, I(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, I(r), t];
      }(), ce = ge[0], Ot = ge[1], ge = ge[2], Ot = Ot && Ot.then, we = ce && ce.constructor, Oe = !!ge, qe = function(t, r) {
        on.push([t, r]), st && (queueMicrotask(Du), st = !1);
      }, Ye = !0, st = !0, Xe = [], kt = [], Mn = w, Ke = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: g, pgp: !1, env: {}, finalize: g }, oe = Ke, on = [], En = 0, Br = [];
      function ne(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = oe;
        if (typeof t != "function") {
          if (t !== Q) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Fo(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function i(u, c) {
          try {
            c(function(d) {
              if (u._state === null) {
                if (d === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && Bn();
                d && typeof d.then == "function" ? i(u, function(y, _) {
                  d instanceof ne ? d._then(y, _) : d.then(y, _);
                }) : (u._state = !0, u._value = d, ls(u)), h && Kn();
              }
            }, Fo.bind(null, u));
          } catch (d) {
            Fo(u, d);
          }
        }(this, t);
      }
      var Ho = { get: function() {
        var t = oe, r = Fr;
        function i(u, c) {
          var d = this, h = !t.global && (t !== oe || r !== Fr), y = h && !an(), _ = new ne(function(E, T) {
            Vo(d, new us(fs(u, t, h, y), fs(c, t, h, y), E, T, t));
          });
          return this._consoleTask && (_._consoleTask = this._consoleTask), _;
        }
        return i.prototype = Q, i;
      }, set: function(t) {
        ie(this, "then", t && t.prototype === Q ? Ho : { get: function() {
          return t;
        }, set: Ho.set });
      } };
      function us(t, r, i, u, c) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = i, this.reject = u, this.psd = c;
      }
      function Fo(t, r) {
        var i, u;
        kt.push(r), t._state === null && (i = t._lib && Bn(), r = Mn(r), t._state = !1, t._value = r, u = t, Xe.some(function(c) {
          return c._value === u._value;
        }) || Xe.push(u), ls(t), i && Kn());
      }
      function ls(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var i = 0, u = r.length; i < u; ++i) Vo(t, r[i]);
        var c = t._PSD;
        --c.ref || c.finalize(), En === 0 && (++En, qe(function() {
          --En == 0 && Go();
        }, []));
      }
      function Vo(t, r) {
        if (t._state !== null) {
          var i = t._state ? r.onFulfilled : r.onRejected;
          if (i === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++En, qe(Pu, [i, t, r]);
        } else t._listeners.push(r);
      }
      function Pu(t, r, i) {
        try {
          var u, c = r._value;
          !r._state && kt.length && (kt = []), u = H && r._consoleTask ? r._consoleTask.run(function() {
            return t(c);
          }) : t(c), r._state || kt.indexOf(c) !== -1 || function(d) {
            for (var h = Xe.length; h; ) if (Xe[--h]._value === d._value) return Xe.splice(h, 1);
          }(r), i.resolve(u);
        } catch (d) {
          i.reject(d);
        } finally {
          --En == 0 && Go(), --i.psd.ref || i.psd.finalize();
        }
      }
      function Du() {
        xn(Ke, function() {
          Bn() && Kn();
        });
      }
      function Bn() {
        var t = Ye;
        return st = Ye = !1, t;
      }
      function Kn() {
        var t, r, i;
        do
          for (; 0 < on.length; ) for (t = on, on = [], i = t.length, r = 0; r < i; ++r) {
            var u = t[r];
            u[0].apply(null, u[1]);
          }
        while (0 < on.length);
        st = Ye = !0;
      }
      function Go() {
        var t = Xe;
        Xe = [], t.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = Br.slice(0), i = r.length; i; ) r[--i]();
      }
      function Kr(t) {
        return new ne(Q, !1, t);
      }
      function Be(t, r) {
        var i = oe;
        return function() {
          var u = Bn(), c = oe;
          try {
            return un(i, !0), t.apply(this, arguments);
          } catch (d) {
            r && r(d);
          } finally {
            un(c, !1), u && Kn();
          }
        };
      }
      U(ne.prototype, { then: Ho, _then: function(t, r) {
        Vo(this, new us(null, null, t, r, oe));
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
          return ne.resolve(t()).then(function() {
            return r;
          });
        }, function(r) {
          return ne.resolve(t()).then(function() {
            return Kr(r);
          });
        });
      }, timeout: function(t, r) {
        var i = this;
        return t < 1 / 0 ? new ne(function(u, c) {
          var d = setTimeout(function() {
            return c(new se.Timeout(r));
          }, t);
          i.then(u, c).finally(clearTimeout.bind(null, d));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ie(ne.prototype, Symbol.toStringTag, "Dexie.Promise"), Ke.env = cs(), U(ne, { all: function() {
        var t = pt.apply(null, arguments).map(Vr);
        return new ne(function(r, i) {
          t.length === 0 && r([]);
          var u = t.length;
          t.forEach(function(c, d) {
            return ne.resolve(c).then(function(h) {
              t[d] = h, --u || r(t);
            }, i);
          });
        });
      }, resolve: function(t) {
        return t instanceof ne ? t : t && typeof t.then == "function" ? new ne(function(r, i) {
          t.then(r, i);
        }) : new ne(Q, !0, t);
      }, reject: Kr, race: function() {
        var t = pt.apply(null, arguments).map(Vr);
        return new ne(function(r, i) {
          t.map(function(u) {
            return ne.resolve(u).then(r, i);
          });
        });
      }, PSD: { get: function() {
        return oe;
      }, set: function(t) {
        return oe = t;
      } }, totalEchoes: { get: function() {
        return Fr;
      } }, newPSD: sn, usePSD: xn, scheduler: { get: function() {
        return qe;
      }, set: function(t) {
        qe = t;
      } }, rejectionMapper: { get: function() {
        return Mn;
      }, set: function(t) {
        Mn = t;
      } }, follow: function(t, r) {
        return new ne(function(i, u) {
          return sn(function(c, d) {
            var h = oe;
            h.unhandleds = [], h.onunhandled = d, h.finalize = V(function() {
              var y, _ = this;
              y = function() {
                _.unhandleds.length === 0 ? c() : d(_.unhandleds[0]);
              }, Br.push(function E() {
                y(), Br.splice(Br.indexOf(E), 1);
              }), ++En, qe(function() {
                --En == 0 && Go();
              }, []);
            }, h.finalize), t();
          }, r, i, u);
        });
      } }), we && (we.allSettled && ie(ne, "allSettled", function() {
        var t = pt.apply(null, arguments).map(Vr);
        return new ne(function(r) {
          t.length === 0 && r([]);
          var i = t.length, u = new Array(i);
          t.forEach(function(c, d) {
            return ne.resolve(c).then(function(h) {
              return u[d] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[d] = { status: "rejected", reason: h };
            }).then(function() {
              return --i || r(u);
            });
          });
        });
      }), we.any && typeof AggregateError < "u" && ie(ne, "any", function() {
        var t = pt.apply(null, arguments).map(Vr);
        return new ne(function(r, i) {
          t.length === 0 && i(new AggregateError([]));
          var u = t.length, c = new Array(u);
          t.forEach(function(d, h) {
            return ne.resolve(d).then(function(y) {
              return r(y);
            }, function(y) {
              c[h] = y, --u || i(new AggregateError(c));
            });
          });
        });
      }), we.withResolvers && (ne.withResolvers = we.withResolvers));
      var ze = { awaits: 0, echoes: 0, id: 0 }, ku = 0, Ur = [], Hr = 0, Fr = 0, Lu = 0;
      function sn(t, r, i, u) {
        var c = oe, d = Object.create(c);
        return d.parent = c, d.ref = 0, d.global = !1, d.id = ++Lu, Ke.env, d.env = Oe ? { Promise: ne, PromiseProp: { value: ne, configurable: !0, writable: !0 }, all: ne.all, race: ne.race, allSettled: ne.allSettled, any: ne.any, resolve: ne.resolve, reject: ne.reject } : {}, r && m(d, r), ++c.ref, d.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = xn(d, t, i, u), d.ref === 0 && d.finalize(), u;
      }
      function Un() {
        return ze.id || (ze.id = ++ku), ++ze.awaits, ze.echoes += ae, ze.id;
      }
      function an() {
        return !!ze.awaits && (--ze.awaits == 0 && (ze.id = 0), ze.echoes = ze.awaits * ae, !0);
      }
      function Vr(t) {
        return ze.echoes && t && t.constructor === we ? (Un(), t.then(function(r) {
          return an(), r;
        }, function(r) {
          return an(), Ve(r);
        })) : t;
      }
      function ju() {
        var t = Ur[Ur.length - 1];
        Ur.pop(), un(t, !1);
      }
      function un(t, r) {
        var i, u = oe;
        (r ? !ze.echoes || Hr++ && t === oe : !Hr || --Hr && t === oe) || queueMicrotask(r ? (function(c) {
          ++Fr, ze.echoes && --ze.echoes != 0 || (ze.echoes = ze.awaits = ze.id = 0), Ur.push(oe), un(c, !0);
        }).bind(null, t) : ju), t !== oe && (oe = t, u === Ke && (Ke.env = cs()), Oe && (i = Ke.env.Promise, r = t.env, (u.global || t.global) && (Object.defineProperty(l, "Promise", r.PromiseProp), i.all = r.all, i.race = r.race, i.resolve = r.resolve, i.reject = r.reject, r.allSettled && (i.allSettled = r.allSettled), r.any && (i.any = r.any))));
      }
      function cs() {
        var t = l.Promise;
        return Oe ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function xn(t, r, i, u, c) {
        var d = oe;
        try {
          return un(t, !0), r(i, u, c);
        } finally {
          un(d, !1);
        }
      }
      function fs(t, r, i, u) {
        return typeof t != "function" ? t : function() {
          var c = oe;
          i && Un(), un(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            un(c, !1), u && queueMicrotask(an);
          }
        };
      }
      function $o(t) {
        Promise === we && ze.echoes === 0 ? Hr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + Ot).indexOf("[native code]") === -1 && (Un = an = g);
      var Ve = ne.reject, On = "￿", $t = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ds = "String expected.", Hn = [], Gr = "__dbnames", qo = "readonly", Wo = "readwrite";
      function Tn(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var ps = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function $r(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = wt(r))[t], r;
        };
      }
      function hs() {
        throw se.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function ve(t, r) {
        try {
          var i = ms(t), u = ms(r);
          if (i !== u) return i === "Array" ? 1 : u === "Array" ? -1 : i === "binary" ? 1 : u === "binary" ? -1 : i === "string" ? 1 : u === "string" ? -1 : i === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(c, d) {
                for (var h = c.length, y = d.length, _ = h < y ? h : y, E = 0; E < _; ++E) if (c[E] !== d[E]) return c[E] < d[E] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              }(gs(t), gs(r));
            case "Array":
              return function(c, d) {
                for (var h = c.length, y = d.length, _ = h < y ? h : y, E = 0; E < _; ++E) {
                  var T = ve(c[E], d[E]);
                  if (T !== 0) return T;
                }
                return h === y ? 0 : h < y ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function ms(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = Ln(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function gs(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function qr(t, r, i) {
        var u = t.schema.yProps;
        return u ? (r && 0 < i.numFailures && (r = r.filter(function(c, d) {
          return !i.failures[d];
        })), Promise.all(u.map(function(c) {
          return c = c.updatesTable, r ? t.db.table(c).where("k").anyOf(r).delete() : t.db.table(c).clear();
        })).then(function() {
          return i;
        })) : i;
      }
      var ys = (je.prototype._trans = function(t, r, i) {
        var u = this._tx || oe.trans, c = this.name, d = H && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(E, T, v) {
          if (!v.schema[c]) throw new se.NotFound("Table " + c + " not part of transaction");
          return r(v.idbtrans, v);
        }
        var y = Bn();
        try {
          var _ = u && u.db._novip === this.db._novip ? u === oe.trans ? u._promise(t, h, i) : sn(function() {
            return u._promise(t, h, i);
          }, { trans: u, transless: oe.transless || oe }) : function E(T, v, A, b) {
            if (T.idbdb && (T._state.openComplete || oe.letThrough || T._vip)) {
              var O = T._createTransaction(v, A, T._dbSchema);
              try {
                O.create(), T._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === nn.InvalidState && T.isOpen() && 0 < --T._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), T.close({ disableAutoOpen: !1 }), T.open().then(function() {
                  return E(T, v, A, b);
                })) : Ve(S);
              }
              return O._promise(v, function(S, R) {
                return sn(function() {
                  return oe.trans = O, b(S, R, O);
                });
              }).then(function(S) {
                if (v === "readwrite") try {
                  O.idbtrans.commit();
                } catch {
                }
                return v === "readonly" ? S : O._completion.then(function() {
                  return S;
                });
              });
            }
            if (T._state.openComplete) return Ve(new se.DatabaseClosed(T._state.dbOpenError));
            if (!T._state.isBeingOpened) {
              if (!T._state.autoOpen) return Ve(new se.DatabaseClosed());
              T.open().catch(g);
            }
            return T._state.dbReadyPromise.then(function() {
              return E(T, v, A, b);
            });
          }(this.db, t, [this.name], h);
          return d && (_._consoleTask = d, _ = _.catch(function(E) {
            return console.trace(E), Ve(E);
          })), _;
        } finally {
          y && Kn();
        }
      }, je.prototype.get = function(t, r) {
        var i = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Ve(new se.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
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
            for (var _ = 0; _ < r.length; ++_) if (r.indexOf(y.keyPath[_]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(y, _) {
          return y.keyPath.length - _.keyPath.length;
        })[0];
        if (i && this.db._maxKey !== On) {
          var d = i.keyPath.slice(0, r.length);
          return this.where(d).equals(d.map(function(_) {
            return t[_];
          }));
        }
        !i && H && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function c(y, _) {
          return ve(y, _) === 0;
        }
        var h = r.reduce(function(v, _) {
          var E = v[0], T = v[1], v = u[_], A = t[_];
          return [E || v, E || !v ? Tn(T, v && v.multi ? function(b) {
            return b = Pe(b, _), p(b) && b.some(function(O) {
              return c(A, O);
            });
          } : function(b) {
            return c(A, Pe(b, _));
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
        (this.schema.mappedClass = t).prototype instanceof hs && (function(_, E) {
          if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
          function T() {
            this.constructor = _;
          }
          o(_, E), _.prototype = E === null ? Object.create(E) : (T.prototype = E.prototype, new T());
        }(c, r = t), Object.defineProperty(c.prototype, "db", { get: function() {
          return i;
        }, enumerable: !1, configurable: !0 }), c.prototype.table = function() {
          return u;
        }, t = c);
        for (var d = /* @__PURE__ */ new Set(), h = t.prototype; h; h = I(h)) Object.getOwnPropertyNames(h).forEach(function(_) {
          return d.add(_);
        });
        function y(_) {
          if (!_) return _;
          var E, T = Object.create(t.prototype);
          for (E in _) if (!d.has(E)) try {
            T[E] = _[E];
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
        return d && c && (h = $r(d)(t)), this._trans("readwrite", function(y) {
          return i.core.mutate({ trans: y, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(y) {
          return y.numFailures ? ne.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            Ie(t, d, y);
          } catch {
          }
          return y;
        });
      }, je.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Pe(t, this.schema.primKey.keyPath), t === void 0 ? Ve(new se.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, je.prototype.put = function(t, r) {
        var i = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = t;
        return d && c && (h = $r(d)(t)), this._trans("readwrite", function(y) {
          return i.core.mutate({ trans: y, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(y) {
          return y.numFailures ? ne.reject(y.failures[0]) : y.lastResult;
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
            return qr(r, [t], u);
          }).then(function(u) {
            return u.numFailures ? ne.reject(u.failures[0]) : void 0;
          });
        });
      }, je.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: ps }).then(function(i) {
            return qr(t, null, i);
          });
        }).then(function(r) {
          return r.numFailures ? ne.reject(r.failures[0]) : void 0;
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
          if (E && c) throw new se.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== t.length) throw new se.InvalidArgument("Arguments objects and keys must have the same length");
          var _ = t.length, E = E && y ? t.map($r(E)) : t;
          return u.core.mutate({ trans: h, type: "add", keys: c, values: E, wantResults: d }).then(function(O) {
            var v = O.numFailures, A = O.results, b = O.lastResult, O = O.failures;
            if (v === 0) return d ? A : b;
            throw new xt("".concat(u.name, ".bulkAdd(): ").concat(v, " of ").concat(_, " operations failed"), O);
          });
        });
      }, je.prototype.bulkPut = function(t, r, i) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (i = i || (c ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && c) throw new se.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== t.length) throw new se.InvalidArgument("Arguments objects and keys must have the same length");
          var _ = t.length, E = E && y ? t.map($r(E)) : t;
          return u.core.mutate({ trans: h, type: "put", keys: c, values: E, wantResults: d }).then(function(O) {
            var v = O.numFailures, A = O.results, b = O.lastResult, O = O.failures;
            if (v === 0) return d ? A : b;
            throw new xt("".concat(u.name, ".bulkPut(): ").concat(v, " of ").concat(_, " operations failed"), O);
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
            var _ = [], E = [];
            t.forEach(function(v, A) {
              var b = v.key, O = v.changes, S = y[A];
              if (S) {
                for (var R = 0, C = Object.keys(O); R < C.length; R++) {
                  var D = C[R], k = O[D];
                  if (D === r.schema.primKey.keyPath) {
                    if (ve(k, b) !== 0) throw new se.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Ie(S, D, k);
                }
                d.push(A), _.push(b), E.push(S);
              }
            });
            var T = _.length;
            return i.mutate({ trans: h, type: "put", keys: _, values: E, updates: { keys: u, changeSpecs: c } }).then(function(v) {
              var A = v.numFailures, b = v.failures;
              if (A === 0) return T;
              for (var O = 0, S = Object.keys(b); O < S.length; O++) {
                var R, C = S[O], D = d[Number(C)];
                D != null && (R = b[C], delete b[C], b[D] = R);
              }
              throw new xt("".concat(r.name, ".bulkUpdate(): ").concat(A, " of ").concat(T, " operations failed"), b);
            });
          });
        });
      }, je.prototype.bulkDelete = function(t) {
        var r = this, i = t.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: t }).then(function(c) {
            return qr(r, t, c);
          });
        }).then(function(h) {
          var c = h.numFailures, d = h.lastResult, h = h.failures;
          if (c === 0) return d;
          throw new xt("".concat(r.name, ".bulkDelete(): ").concat(c, " of ").concat(i, " operations failed"), h);
        });
      }, je);
      function je() {
      }
      function sr(t) {
        function r(h, y) {
          if (y) {
            for (var _ = arguments.length, E = new Array(_ - 1); --_; ) E[_ - 1] = arguments[_];
            return i[h].subscribe.apply(null, E), t;
          }
          if (typeof h == "string") return i[h];
        }
        var i = {};
        r.addEventType = d;
        for (var u = 1, c = arguments.length; u < c; ++u) d(arguments[u]);
        return r;
        function d(h, y, _) {
          if (typeof h != "object") {
            var E;
            y = y || J;
            var T = { subscribers: [], fire: _ = _ || g, subscribe: function(v) {
              T.subscribers.indexOf(v) === -1 && (T.subscribers.push(v), T.fire = y(T.fire, v));
            }, unsubscribe: function(v) {
              T.subscribers = T.subscribers.filter(function(A) {
                return A !== v;
              }), T.fire = T.subscribers.reduce(y, _);
            } };
            return i[h] = r[h] = T;
          }
          f(E = h).forEach(function(v) {
            var A = E[v];
            if (p(A)) d(v, E[v][0], E[v][1]);
            else {
              if (A !== "asap") throw new se.InvalidArgument("Invalid event config");
              var b = d(v, w, function() {
                for (var O = arguments.length, S = new Array(O); O--; ) S[O] = arguments[O];
                b.subscribers.forEach(function(R) {
                  Ce(function() {
                    R.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function ar(t, r) {
        return K(r).from({ prototype: t }), r;
      }
      function Fn(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function Yo(t, r) {
        t.filter = Tn(t.filter, r);
      }
      function Xo(t, r, i) {
        var u = t.replayFilter;
        t.replayFilter = u ? function() {
          return Tn(u(), r());
        } : r, t.justLimit = i && !u;
      }
      function Wr(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var i = r.getIndexByKeyPath(t.index);
        if (!i) throw new se.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return i;
      }
      function vs(t, r, i) {
        var u = Wr(t, r.schema);
        return r.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: u, range: t.range } });
      }
      function Yr(t, r, i, u) {
        var c = t.replayFilter ? Tn(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var d = {}, h = function(y, _, E) {
            var T, v;
            c && !c(_, E, function(A) {
              return _.stop(A);
            }, function(A) {
              return _.fail(A);
            }) || ((v = "" + (T = _.primaryKey)) == "[object ArrayBuffer]" && (v = "" + new Uint8Array(T)), P(d, v) || (d[v] = !0, r(y, _, E)));
          };
          return Promise.all([t.or._iterate(h, i), _s(vs(t, u, i), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return _s(vs(t, u, i), Tn(t.algorithm, c), r, !t.keysOnly && t.valueMapper);
      }
      function _s(t, r, i, u) {
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
      var ur = (bs.prototype.execute = function(t) {
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
      }, bs);
      function bs(t) {
        this["@@propmod"] = t;
      }
      var Mu = (Ne.prototype._read = function(t, r) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, Ve.bind(null, i.error)) : i.table._trans("readonly", t).then(r);
      }, Ne.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ve.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, Ne.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = Tn(r.algorithm, t);
      }, Ne.prototype._iterate = function(t, r) {
        return Yr(this._ctx, t, r, this._ctx.table.core);
      }, Ne.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
        return t && m(i, t), r._ctx = i, r;
      }, Ne.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ne.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(i) {
          return Yr(r, t, i, r.table.core);
        });
      }, Ne.prototype.count = function(t) {
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
      }, Ne.prototype.sortBy = function(t, r) {
        var i = t.split(".").reverse(), u = i[0], c = i.length - 1;
        function d(_, E) {
          return E ? d(_[i[E]], E - 1) : _[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(_, E) {
          return ve(d(_, c), d(E, c)) * h;
        }
        return this.toArray(function(_) {
          return _.sort(y);
        }).then(r);
      }, Ne.prototype.toArray = function(t) {
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
      }, Ne.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Fn(r) ? Xo(r, function() {
          var i = t;
          return function(u, c) {
            return i === 0 || (i === 1 ? --i : c(function() {
              u.advance(i), i = 0;
            }), !1);
          };
        }) : Xo(r, function() {
          var i = t;
          return function() {
            return --i < 0;
          };
        })), this;
      }, Ne.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), Xo(this._ctx, function() {
          var r = t;
          return function(i, u, c) {
            return --r <= 0 && u(c), 0 <= r;
          };
        }, !0), this;
      }, Ne.prototype.until = function(t, r) {
        return Yo(this._ctx, function(i, u, c) {
          return !t(i.value) || (u(c), r);
        }), this;
      }, Ne.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, Ne.prototype.last = function(t) {
        return this.reverse().first(t);
      }, Ne.prototype.filter = function(t) {
        var r;
        return Yo(this._ctx, function(i) {
          return t(i.value);
        }), (r = this._ctx).isMatch = Tn(r.isMatch, t), this;
      }, Ne.prototype.and = function(t) {
        return this.filter(t);
      }, Ne.prototype.or = function(t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }, Ne.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ne.prototype.desc = function() {
        return this.reverse();
      }, Ne.prototype.eachKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, u) {
          t(u.key, u);
        });
      }, Ne.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, Ne.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, u) {
          t(u.primaryKey, u);
        });
      }, Ne.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(u, c) {
          i.push(c.key);
        }).then(function() {
          return i;
        }).then(t);
      }, Ne.prototype.primaryKeys = function(t) {
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
      }, Ne.prototype.uniqueKeys = function(t) {
        return this._ctx.unique = "unique", this.keys(t);
      }, Ne.prototype.firstKey = function(t) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(t);
      }, Ne.prototype.lastKey = function(t) {
        return this.reverse().firstKey(t);
      }, Ne.prototype.distinct = function() {
        var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        if (!t || !t.multi) return this;
        var r = {};
        return Yo(this._ctx, function(c) {
          var u = c.primaryKey.toString(), c = P(r, u);
          return r[u] = !0, !c;
        }), this;
      }, Ne.prototype.modify = function(t) {
        var r = this, i = this._ctx;
        return this._write(function(u) {
          var c, d, h;
          h = typeof t == "function" ? t : (c = f(t), d = c.length, function(C) {
            for (var D = !1, k = 0; k < d; ++k) {
              var j = c[k], $ = t[j], X = Pe(C, j);
              $ instanceof ur ? (Ie(C, j, $.execute(X)), D = !0) : X !== $ && (Ie(C, j, $), D = !0);
            }
            return D;
          });
          var y = i.table.core, v = y.schema.primaryKey, _ = v.outbound, E = v.extractKey, T = 200, v = r.db._options.modifyChunkSize;
          v && (T = typeof v == "object" ? v[y.name] || v["*"] || 200 : v);
          function A(C, j) {
            var k = j.failures, j = j.numFailures;
            O += C - j;
            for (var $ = 0, X = f(k); $ < X.length; $++) {
              var q = X[$];
              b.push(k[q]);
            }
          }
          var b = [], O = 0, S = [], R = t === ws;
          return r.clone().primaryKeys().then(function(C) {
            function D(j) {
              var $ = Math.min(T, C.length - j), X = C.slice(j, j + $);
              return (R ? Promise.resolve([]) : y.getMany({ trans: u, keys: X, cache: "immutable" })).then(function(q) {
                var W = [], te = [], Z = _ ? [] : null, re = R ? X : [];
                if (!R) for (var ye = 0; ye < $; ++ye) {
                  var Ee = q[ye], he = { value: wt(Ee), primKey: C[j + ye] };
                  h.call(he, he.value, he) !== !1 && (he.value == null ? re.push(C[j + ye]) : _ || ve(E(Ee), E(he.value)) === 0 ? (te.push(he.value), _ && Z.push(C[j + ye])) : (re.push(C[j + ye]), W.push(he.value)));
                }
                return Promise.resolve(0 < W.length && y.mutate({ trans: u, type: "add", values: W }).then(function(Ue) {
                  for (var pe in Ue.failures) re.splice(parseInt(pe), 1);
                  A(W.length, Ue);
                })).then(function() {
                  return (0 < te.length || k && typeof t == "object") && y.mutate({ trans: u, type: "put", keys: Z, values: te, criteria: k, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < j }).then(function(Ue) {
                    return A(te.length, Ue);
                  });
                }).then(function() {
                  return (0 < re.length || k && R) && y.mutate({ trans: u, type: "delete", keys: re, criteria: k, isAdditionalChunk: 0 < j }).then(function(Ue) {
                    return qr(i.table, re, Ue);
                  }).then(function(Ue) {
                    return A(re.length, Ue);
                  });
                }).then(function() {
                  return C.length > j + $ && D(j + T);
                });
              });
            }
            var k = Fn(i) && i.limit === 1 / 0 && (typeof t != "function" || R) && { index: i.index, range: i.range };
            return D(0).then(function() {
              if (0 < b.length) throw new jn("Error modifying one or more objects", b, O, S);
              return C.length;
            });
          });
        });
      }, Ne.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Fn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(ws) : this._write(function(i) {
          var u = t.table.core.schema.primaryKey, c = r;
          return t.table.core.count({ trans: i, query: { index: u, range: c } }).then(function(d) {
            return t.table.core.mutate({ trans: i, type: "deleteRange", range: c }).then(function(_) {
              var y = _.failures, _ = _.numFailures;
              if (_) throw new jn("Could not delete some values", Object.keys(y).map(function(E) {
                return y[E];
              }), d - _);
              return d - _;
            });
          });
        });
      }, Ne);
      function Ne() {
      }
      var ws = function(t, r) {
        return r.value = null;
      };
      function Bu(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function Ku(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function gt(t, r, i) {
        return t = t instanceof xs ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(r), t;
      }
      function Vn(t) {
        return new t.Collection(t, function() {
          return Es("");
        }).limit(0);
      }
      function Xr(t, r, i, u) {
        var c, d, h, y, _, E, T, v = i.length;
        if (!i.every(function(O) {
          return typeof O == "string";
        })) return gt(t, ds);
        function A(O) {
          c = O === "next" ? function(R) {
            return R.toUpperCase();
          } : function(R) {
            return R.toLowerCase();
          }, d = O === "next" ? function(R) {
            return R.toLowerCase();
          } : function(R) {
            return R.toUpperCase();
          }, h = O === "next" ? Bu : Ku;
          var S = i.map(function(R) {
            return { lower: d(R), upper: c(R) };
          }).sort(function(R, C) {
            return h(R.lower, C.lower);
          });
          y = S.map(function(R) {
            return R.upper;
          }), _ = S.map(function(R) {
            return R.lower;
          }), T = (E = O) === "next" ? "" : u;
        }
        A("next"), t = new t.Collection(t, function() {
          return ln(y[0], _[v - 1] + u);
        }), t._ondirectionchange = function(O) {
          A(O);
        };
        var b = 0;
        return t._addAlgorithm(function(O, S, R) {
          var C = O.key;
          if (typeof C != "string") return !1;
          var D = d(C);
          if (r(D, _, b)) return !0;
          for (var k = null, j = b; j < v; ++j) {
            var $ = function(X, q, W, te, Z, re) {
              for (var ye = Math.min(X.length, te.length), Ee = -1, he = 0; he < ye; ++he) {
                var Ue = q[he];
                if (Ue !== te[he]) return Z(X[he], W[he]) < 0 ? X.substr(0, he) + W[he] + W.substr(he + 1) : Z(X[he], te[he]) < 0 ? X.substr(0, he) + te[he] + W.substr(he + 1) : 0 <= Ee ? X.substr(0, Ee) + q[Ee] + W.substr(Ee + 1) : null;
                Z(X[he], Ue) < 0 && (Ee = he);
              }
              return ye < te.length && re === "next" ? X + W.substr(X.length) : ye < X.length && re === "prev" ? X.substr(0, W.length) : Ee < 0 ? null : X.substr(0, Ee) + te[Ee] + W.substr(Ee + 1);
            }(C, D, y[j], _[j], h, E);
            $ === null && k === null ? b = j + 1 : (k === null || 0 < h(k, $)) && (k = $);
          }
          return S(k !== null ? function() {
            O.continue(k + T);
          } : R), !1;
        }), t;
      }
      function ln(t, r, i, u) {
        return { type: 2, lower: t, upper: r, lowerOpen: i, upperOpen: u };
      }
      function Es(t) {
        return { type: 1, lower: t, upper: t };
      }
      var xs = (Object.defineProperty(Je.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Je.prototype.between = function(t, r, i, u) {
        i = i !== !1, u = u === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (i || u) && (!i || !u) ? Vn(this) : new this.Collection(this, function() {
            return ln(t, r, !i, !u);
          });
        } catch {
          return gt(this, $t);
        }
      }, Je.prototype.equals = function(t) {
        return t == null ? gt(this, $t) : new this.Collection(this, function() {
          return Es(t);
        });
      }, Je.prototype.above = function(t) {
        return t == null ? gt(this, $t) : new this.Collection(this, function() {
          return ln(t, void 0, !0);
        });
      }, Je.prototype.aboveOrEqual = function(t) {
        return t == null ? gt(this, $t) : new this.Collection(this, function() {
          return ln(t, void 0, !1);
        });
      }, Je.prototype.below = function(t) {
        return t == null ? gt(this, $t) : new this.Collection(this, function() {
          return ln(void 0, t, !1, !0);
        });
      }, Je.prototype.belowOrEqual = function(t) {
        return t == null ? gt(this, $t) : new this.Collection(this, function() {
          return ln(void 0, t);
        });
      }, Je.prototype.startsWith = function(t) {
        return typeof t != "string" ? gt(this, ds) : this.between(t, t + On, !0, !0);
      }, Je.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : Xr(this, function(r, i) {
          return r.indexOf(i[0]) === 0;
        }, [t], On);
      }, Je.prototype.equalsIgnoreCase = function(t) {
        return Xr(this, function(r, i) {
          return r === i[0];
        }, [t], "");
      }, Je.prototype.anyOfIgnoreCase = function() {
        var t = pt.apply(dt, arguments);
        return t.length === 0 ? Vn(this) : Xr(this, function(r, i) {
          return i.indexOf(r) !== -1;
        }, t, "");
      }, Je.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = pt.apply(dt, arguments);
        return t.length === 0 ? Vn(this) : Xr(this, function(r, i) {
          return i.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, t, On);
      }, Je.prototype.anyOf = function() {
        var t = this, r = pt.apply(dt, arguments), i = this._cmp;
        try {
          r.sort(i);
        } catch {
          return gt(this, $t);
        }
        if (r.length === 0) return Vn(this);
        var u = new this.Collection(this, function() {
          return ln(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(d) {
          i = d === "next" ? t._ascending : t._descending, r.sort(i);
        };
        var c = 0;
        return u._addAlgorithm(function(d, h, y) {
          for (var _ = d.key; 0 < i(_, r[c]); ) if (++c === r.length) return h(y), !1;
          return i(_, r[c]) === 0 || (h(function() {
            d.continue(r[c]);
          }), !1);
        }), u;
      }, Je.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.noneOf = function() {
        var t = pt.apply(dt, arguments);
        if (t.length === 0) return new this.Collection(this);
        try {
          t.sort(this._ascending);
        } catch {
          return gt(this, $t);
        }
        var r = t.reduce(function(i, u) {
          return i ? i.concat([[i[i.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.inAnyRange = function(C, r) {
        var i = this, u = this._cmp, c = this._ascending, d = this._descending, h = this._min, y = this._max;
        if (C.length === 0) return Vn(this);
        if (!C.every(function(D) {
          return D[0] !== void 0 && D[1] !== void 0 && c(D[0], D[1]) <= 0;
        })) return gt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", se.InvalidArgument);
        var _ = !r || r.includeLowers !== !1, E = r && r.includeUppers === !0, T, v = c;
        function A(D, k) {
          return v(D[0], k[0]);
        }
        try {
          (T = C.reduce(function(D, k) {
            for (var j = 0, $ = D.length; j < $; ++j) {
              var X = D[j];
              if (u(k[0], X[1]) < 0 && 0 < u(k[1], X[0])) {
                X[0] = h(X[0], k[0]), X[1] = y(X[1], k[1]);
                break;
              }
            }
            return j === $ && D.push(k), D;
          }, [])).sort(A);
        } catch {
          return gt(this, $t);
        }
        var b = 0, O = E ? function(D) {
          return 0 < c(D, T[b][1]);
        } : function(D) {
          return 0 <= c(D, T[b][1]);
        }, S = _ ? function(D) {
          return 0 < d(D, T[b][0]);
        } : function(D) {
          return 0 <= d(D, T[b][0]);
        }, R = O, C = new this.Collection(this, function() {
          return ln(T[0][0], T[T.length - 1][1], !_, !E);
        });
        return C._ondirectionchange = function(D) {
          v = D === "next" ? (R = O, c) : (R = S, d), T.sort(A);
        }, C._addAlgorithm(function(D, k, j) {
          for (var $, X = D.key; R(X); ) if (++b === T.length) return k(j), !1;
          return !O($ = X) && !S($) || (i._cmp(X, T[b][1]) === 0 || i._cmp(X, T[b][0]) === 0 || k(function() {
            v === c ? D.continue(T[b][0]) : D.continue(T[b][1]);
          }), !1);
        }), C;
      }, Je.prototype.startsWithAnyOf = function() {
        var t = pt.apply(dt, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? Vn(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + On];
        })) : gt(this, "startsWithAnyOf() only works with strings");
      }, Je);
      function Je() {
      }
      function Lt(t) {
        return Be(function(r) {
          return lr(r), t(r.target.error), !1;
        });
      }
      function lr(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var cr = "storagemutated", zo = "x-storagemutated-1", cn = sr(null, cr), Uu = (jt.prototype._lock = function() {
        return le(!oe.global), ++this._reculock, this._reculock !== 1 || oe.global || (oe.lockOwnerFor = this), this;
      }, jt.prototype._unlock = function() {
        if (le(!oe.global), --this._reculock == 0) for (oe.global || (oe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            xn(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, jt.prototype._locked = function() {
        return this._reculock && oe.lockOwnerFor !== this;
      }, jt.prototype.create = function(t) {
        var r = this;
        if (!this.mode) return this;
        var i = this.db.idbdb, u = this.db._state.dbOpenError;
        if (le(!this.idbtrans), !t && !i) switch (u && u.name) {
          case "DatabaseClosedError":
            throw new se.DatabaseClosed(u);
          case "MissingAPIError":
            throw new se.MissingAPI(u.message, u);
          default:
            throw new se.OpenFailed(u);
        }
        if (!this.active) throw new se.TransactionInactive();
        return le(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Be(function(c) {
          lr(c), r._reject(t.error);
        }), t.onabort = Be(function(c) {
          lr(c), r.active && r._reject(new se.Abort(t.error)), r.active = !1, r.on("abort").fire(c);
        }), t.oncomplete = Be(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && cn.storagemutated.fire(t.mutatedParts);
        }), this;
      }, jt.prototype._promise = function(t, r, i) {
        var u = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Ve(new se.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ve(new se.TransactionInactive());
        if (this._locked()) return new ne(function(d, h) {
          u._blockedFuncs.push([function() {
            u._promise(t, r, i).then(d, h);
          }, oe]);
        });
        if (i) return sn(function() {
          var d = new ne(function(h, y) {
            u._lock();
            var _ = r(h, y, u);
            _ && _.then && _.then(h, y);
          });
          return d.finally(function() {
            return u._unlock();
          }), d._lib = !0, d;
        });
        var c = new ne(function(d, h) {
          var y = r(d, h, u);
          y && y.then && y.then(d, h);
        });
        return c._lib = !0, c;
      }, jt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, jt.prototype.waitFor = function(t) {
        var r, i = this._root(), u = ne.resolve(t);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return u;
        }) : (i._waitingFor = u, i._waitingQueue = [], r = i.idbtrans.objectStore(i.storeNames[0]), function d() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (r.get(-1 / 0).onsuccess = d);
        }());
        var c = i._waitingFor;
        return new ne(function(d, h) {
          u.then(function(y) {
            return i._waitingQueue.push(Be(d.bind(null, y)));
          }, function(y) {
            return i._waitingQueue.push(Be(h.bind(null, y)));
          }).finally(function() {
            i._waitingFor === c && (i._waitingFor = null);
          });
        });
      }, jt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new se.Abort()));
      }, jt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (P(r, t)) return r[t];
        var i = this.schema[t];
        if (!i) throw new se.NotFound("Table " + t + " not part of transaction");
        return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), r[t] = i;
      }, jt);
      function jt() {
      }
      function Jo(t, r, i, u, c, d, h, y) {
        return { name: t, keyPath: r, unique: i, multi: u, auto: c, compound: d, src: (i && !h ? "&" : "") + (u ? "*" : "") + (c ? "++" : "") + Os(r), type: y };
      }
      function Os(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function Qo(t, r, i) {
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
            return On;
          }, On;
        }
      };
      function Zo(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(i) {
          return i[r];
        } : function(i) {
          return Pe(i, r);
        } : function(i) {
          return Pe(i, t);
        };
        var r;
      }
      function Ts(t) {
        return [].slice.call(t);
      }
      var Hu = 0;
      function dr(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function Fu(t, r, _) {
        function u(R) {
          if (R.type === 3) return null;
          if (R.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var b = R.lower, O = R.upper, S = R.lowerOpen, R = R.upperOpen;
          return b === void 0 ? O === void 0 ? null : r.upperBound(O, !!R) : O === void 0 ? r.lowerBound(b, !!S) : r.bound(b, O, !!S, !!R);
        }
        function c(A) {
          var b, O = A.name;
          return { name: O, schema: A, mutate: function(S) {
            var R = S.trans, C = S.type, D = S.keys, k = S.values, j = S.range;
            return new Promise(function($, X) {
              $ = Be($);
              var q = R.objectStore(O), W = q.keyPath == null, te = C === "put" || C === "add";
              if (!te && C !== "delete" && C !== "deleteRange") throw new Error("Invalid operation type: " + C);
              var Z, re = (D || k || { length: 1 }).length;
              if (D && k && D.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (re === 0) return $({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ye(at) {
                ++Ue, lr(at);
              }
              var Ee = [], he = [], Ue = 0;
              if (C === "deleteRange") {
                if (j.type === 4) return $({ numFailures: Ue, failures: he, results: [], lastResult: void 0 });
                j.type === 3 ? Ee.push(Z = q.clear()) : Ee.push(Z = q.delete(u(j)));
              } else {
                var W = te ? W ? [k, D] : [k, null] : [D, null], pe = W[0], nt = W[1];
                if (te) for (var rt = 0; rt < re; ++rt) Ee.push(Z = nt && nt[rt] !== void 0 ? q[C](pe[rt], nt[rt]) : q[C](pe[rt])), Z.onerror = ye;
                else for (rt = 0; rt < re; ++rt) Ee.push(Z = q[C](pe[rt])), Z.onerror = ye;
              }
              function ao(at) {
                at = at.target.result, Ee.forEach(function(Sn, yi) {
                  return Sn.error != null && (he[yi] = Sn.error);
                }), $({ numFailures: Ue, failures: he, results: C === "delete" ? D : Ee.map(function(Sn) {
                  return Sn.result;
                }), lastResult: at });
              }
              Z.onerror = function(at) {
                ye(at), ao(at);
              }, Z.onsuccess = ao;
            });
          }, getMany: function(S) {
            var R = S.trans, C = S.keys;
            return new Promise(function(D, k) {
              D = Be(D);
              for (var j, $ = R.objectStore(O), X = C.length, q = new Array(X), W = 0, te = 0, Z = function(Ee) {
                Ee = Ee.target, q[Ee._pos] = Ee.result, ++te === W && D(q);
              }, re = Lt(k), ye = 0; ye < X; ++ye) C[ye] != null && ((j = $.get(C[ye]))._pos = ye, j.onsuccess = Z, j.onerror = re, ++W);
              W === 0 && D(q);
            });
          }, get: function(S) {
            var R = S.trans, C = S.key;
            return new Promise(function(D, k) {
              D = Be(D);
              var j = R.objectStore(O).get(C);
              j.onsuccess = function($) {
                return D($.target.result);
              }, j.onerror = Lt(k);
            });
          }, query: (b = E, function(S) {
            return new Promise(function(R, C) {
              R = Be(R);
              var D, k, j, W = S.trans, $ = S.values, X = S.limit, Z = S.query, q = X === 1 / 0 ? void 0 : X, te = Z.index, Z = Z.range, W = W.objectStore(O), te = te.isPrimaryKey ? W : W.index(te.name), Z = u(Z);
              if (X === 0) return R({ result: [] });
              b ? ((q = $ ? te.getAll(Z, q) : te.getAllKeys(Z, q)).onsuccess = function(re) {
                return R({ result: re.target.result });
              }, q.onerror = Lt(C)) : (D = 0, k = !$ && "openKeyCursor" in te ? te.openKeyCursor(Z) : te.openCursor(Z), j = [], k.onsuccess = function(re) {
                var ye = k.result;
                return ye ? (j.push($ ? ye.value : ye.primaryKey), ++D === X ? R({ result: j }) : void ye.continue()) : R({ result: j });
              }, k.onerror = Lt(C));
            });
          }), openCursor: function(S) {
            var R = S.trans, C = S.values, D = S.query, k = S.reverse, j = S.unique;
            return new Promise(function($, X) {
              $ = Be($);
              var te = D.index, q = D.range, W = R.objectStore(O), W = te.isPrimaryKey ? W : W.index(te.name), te = k ? j ? "prevunique" : "prev" : j ? "nextunique" : "next", Z = !C && "openKeyCursor" in W ? W.openKeyCursor(u(q), te) : W.openCursor(u(q), te);
              Z.onerror = Lt(X), Z.onsuccess = Be(function(re) {
                var ye, Ee, he, Ue, pe = Z.result;
                pe ? (pe.___id = ++Hu, pe.done = !1, ye = pe.continue.bind(pe), Ee = (Ee = pe.continuePrimaryKey) && Ee.bind(pe), he = pe.advance.bind(pe), Ue = function() {
                  throw new Error("Cursor not stopped");
                }, pe.trans = R, pe.stop = pe.continue = pe.continuePrimaryKey = pe.advance = function() {
                  throw new Error("Cursor not started");
                }, pe.fail = Be(X), pe.next = function() {
                  var nt = this, rt = 1;
                  return this.start(function() {
                    return rt-- ? nt.continue() : nt.stop();
                  }).then(function() {
                    return nt;
                  });
                }, pe.start = function(nt) {
                  function rt() {
                    if (Z.result) try {
                      nt();
                    } catch (at) {
                      pe.fail(at);
                    }
                    else pe.done = !0, pe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, pe.stop();
                  }
                  var ao = new Promise(function(at, Sn) {
                    at = Be(at), Z.onerror = Lt(Sn), pe.fail = Sn, pe.stop = function(yi) {
                      pe.stop = pe.continue = pe.continuePrimaryKey = pe.advance = Ue, at(yi);
                    };
                  });
                  return Z.onsuccess = Be(function(at) {
                    Z.onsuccess = rt, rt();
                  }), pe.continue = ye, pe.continuePrimaryKey = Ee, pe.advance = he, rt(), ao;
                }, $(pe)) : $(null);
              }, X);
            });
          }, count: function(S) {
            var R = S.query, C = S.trans, D = R.index, k = R.range;
            return new Promise(function(j, $) {
              var X = C.objectStore(O), q = D.isPrimaryKey ? X : X.index(D.name), X = u(k), q = X ? q.count(X) : q.count();
              q.onsuccess = Be(function(W) {
                return j(W.target.result);
              }), q.onerror = Lt($);
            });
          } };
        }
        var d, h, y, T = (h = _, y = Ts((d = t).objectStoreNames), { schema: { name: d.name, tables: y.map(function(A) {
          return h.objectStore(A);
        }).map(function(A) {
          var b = A.keyPath, R = A.autoIncrement, O = p(b), S = {}, R = { name: A.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: b == null, compound: O, keyPath: b, autoIncrement: R, unique: !0, extractKey: Zo(b) }, indexes: Ts(A.indexNames).map(function(C) {
            return A.index(C);
          }).map(function(j) {
            var D = j.name, k = j.unique, $ = j.multiEntry, j = j.keyPath, $ = { name: D, compound: p(j), keyPath: j, unique: k, multiEntry: $, extractKey: Zo(j) };
            return S[dr(j)] = $;
          }), getIndexByKeyPath: function(C) {
            return S[dr(C)];
          } };
          return S[":id"] = R.primaryKey, b != null && (S[dr(b)] = R.primaryKey), R;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), _ = T.schema, E = T.hasGetAll, T = _.tables.map(c), v = {};
        return T.forEach(function(A) {
          return v[A.name] = A;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(A) {
          if (!v[A]) throw new Error("Table '".concat(A, "' not found"));
          return v[A];
        }, MIN_KEY: -1 / 0, MAX_KEY: fr(r), schema: _ };
      }
      function Vu(t, r, i, u) {
        var c = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (u = Fu(r, c, u), t.dbcore.reduce(function(d, h) {
          return h = h.create, s(s({}, d), h(d));
        }, u)) };
      }
      function zr(t, u) {
        var i = u.db, u = Vu(t._middlewares, i, t._deps, u);
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
            var y = function _(E, T) {
              return N(E, T) || (E = I(E)) && _(E, T);
            }(h, c);
            (!y || "value" in y && y.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? ie(h, c, { get: function() {
              return this.table(c);
            }, set: function(_) {
              z(this, c, { value: _, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[c] = new t.Table(c, d));
          });
        });
      }
      function ei(t, r) {
        r.forEach(function(i) {
          for (var u in i) i[u] instanceof t.Table && delete i[u];
        });
      }
      function Gu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function $u(t, r, i, u) {
        var c = t._dbSchema;
        i.objectStoreNames.contains("$meta") && !c.$meta && (c.$meta = Qo("$meta", Rs("")[0], []), t._storeNames.push("$meta"));
        var d = t._createTransaction("readwrite", t._storeNames, c);
        d.create(i), d._completion.catch(u);
        var h = d._reject.bind(d), y = oe.transless || oe;
        sn(function() {
          return oe.trans = d, oe.transless = y, r !== 0 ? (zr(t, i), E = r, ((_ = d).storeNames.includes("$meta") ? _.table("$meta").get("version").then(function(T) {
            return T ?? E;
          }) : ne.resolve(E)).then(function(T) {
            return A = T, b = d, O = i, S = [], T = (v = t)._versions, R = v._dbSchema = Zr(0, v.idbdb, O), (T = T.filter(function(C) {
              return C._cfg.version >= A;
            })).length !== 0 ? (T.forEach(function(C) {
              S.push(function() {
                var D = R, k = C._cfg.dbschema;
                eo(v, D, O), eo(v, k, O), R = v._dbSchema = k;
                var j = ti(D, k);
                j.add.forEach(function(te) {
                  ni(O, te[0], te[1].primKey, te[1].indexes);
                }), j.change.forEach(function(te) {
                  if (te.recreate) throw new se.Upgrade("Not yet support for changing primary key");
                  var Z = O.objectStore(te.name);
                  te.add.forEach(function(re) {
                    return Qr(Z, re);
                  }), te.change.forEach(function(re) {
                    Z.deleteIndex(re.name), Qr(Z, re);
                  }), te.del.forEach(function(re) {
                    return Z.deleteIndex(re);
                  });
                });
                var $ = C._cfg.contentUpgrade;
                if ($ && C._cfg.version > A) {
                  zr(v, O), b._memoizedTables = {};
                  var X = bt(k);
                  j.del.forEach(function(te) {
                    X[te] = D[te];
                  }), ei(v, [v.Transaction.prototype]), Jr(v, [v.Transaction.prototype], f(X), X), b.schema = X;
                  var q, W = St($);
                  return W && Un(), j = ne.follow(function() {
                    var te;
                    (q = $(b)) && W && (te = an.bind(null, null), q.then(te, te));
                  }), q && typeof q.then == "function" ? ne.resolve(q) : j.then(function() {
                    return q;
                  });
                }
              }), S.push(function(D) {
                var k, j, $ = C._cfg.dbschema;
                k = $, j = D, [].slice.call(j.db.objectStoreNames).forEach(function(X) {
                  return k[X] == null && j.db.deleteObjectStore(X);
                }), ei(v, [v.Transaction.prototype]), Jr(v, [v.Transaction.prototype], v._storeNames, v._dbSchema), b.schema = v._dbSchema;
              }), S.push(function(D) {
                v.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(v.idbdb.version / 10) === C._cfg.version ? (v.idbdb.deleteObjectStore("$meta"), delete v._dbSchema.$meta, v._storeNames = v._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : D.objectStore("$meta").put(C._cfg.version, "version"));
              });
            }), function C() {
              return S.length ? ne.resolve(S.shift()(b.idbtrans)).then(C) : ne.resolve();
            }().then(function() {
              Ns(R, O);
            })) : ne.resolve();
            var v, A, b, O, S, R;
          }).catch(h)) : (f(c).forEach(function(T) {
            ni(i, T, c[T].primKey, c[T].indexes);
          }), zr(t, i), void ne.follow(function() {
            return t.on.populate.fire(d);
          }).catch(h));
          var _, E;
        });
      }
      function qu(t, r) {
        Ns(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var i = Zr(0, t.idbdb, r);
        eo(t, t._dbSchema, r);
        for (var u = 0, c = ti(i, t._dbSchema).change; u < c.length; u++) {
          var d = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(_) {
              H && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(_.src)), Qr(y, _);
            });
          }(c[u]);
          if (typeof d == "object") return d.value;
        }
      }
      function ti(t, r) {
        var i, u = { del: [], add: [], change: [] };
        for (i in t) r[i] || u.del.push(i);
        for (i in r) {
          var c = t[i], d = r[i];
          if (c) {
            var h = { name: i, def: d, recreate: !1, del: [], add: [], change: [] };
            if ("" + (c.primKey.keyPath || "") != "" + (d.primKey.keyPath || "") || c.primKey.auto !== d.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = c.idxByName, _ = d.idxByName, E = void 0;
              for (E in y) _[E] || h.del.push(E);
              for (E in _) {
                var T = y[E], v = _[E];
                T ? T.src !== v.src && h.change.push(v) : h.add.push(v);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([i, d]);
        }
        return u;
      }
      function ni(t, r, i, u) {
        var c = t.db.createObjectStore(r, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return u.forEach(function(d) {
          return Qr(c, d);
        }), c;
      }
      function Ns(t, r) {
        f(t).forEach(function(i) {
          r.db.objectStoreNames.contains(i) || (H && console.debug("Dexie: Creating missing table", i), ni(r, i, t[i].primKey, t[i].indexes));
        });
      }
      function Qr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Zr(t, r, i) {
        var u = {};
        return de(r.objectStoreNames, 0).forEach(function(c) {
          for (var d = i.objectStore(c), h = Jo(Os(E = d.keyPath), E || "", !0, !1, !!d.autoIncrement, E && typeof E != "string", !0), y = [], _ = 0; _ < d.indexNames.length; ++_) {
            var T = d.index(d.indexNames[_]), E = T.keyPath, T = Jo(T.name, E, !!T.unique, !!T.multiEntry, !1, E && typeof E != "string", !1);
            y.push(T);
          }
          u[c] = Qo(c, h, y);
        }), u;
      }
      function eo(t, r, i) {
        for (var u = i.db.objectStoreNames, c = 0; c < u.length; ++c) {
          var d = u[c], h = i.objectStore(d);
          t._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var _ = h.indexNames[y], E = h.index(_).keyPath, T = typeof E == "string" ? E : "[" + de(E).join("+") + "]";
            !r[d] || (E = r[d].idxByName[T]) && (E.name = _, delete r[d].idxByName[T], r[d].idxByName[_] = E);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function Rs(t) {
        return t.split(",").map(function(r, i) {
          var d = r.split(":"), u = (c = d[1]) === null || c === void 0 ? void 0 : c.trim(), c = (r = d[0].trim()).replace(/([&*]|\+\+)/g, ""), d = /^\[/.test(c) ? c.match(/^\[(.*)\]$/)[1].split("+") : c;
          return Jo(c, d || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(d), i === 0, u);
        });
      }
      var Wu = (Gn.prototype._createTableSchema = Qo, Gn.prototype._parseIndexSyntax = Rs, Gn.prototype._parseStoresSpec = function(t, r) {
        var i = this;
        f(t).forEach(function(u) {
          if (t[u] !== null) {
            var c = i._parseIndexSyntax(t[u]), d = c.shift();
            if (!d) throw new se.Schema("Invalid schema for table " + u + ": " + t[u]);
            if (d.unique = !0, d.multi) throw new se.Schema("Primary key cannot be multiEntry*");
            c.forEach(function(h) {
              if (h.auto) throw new se.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new se.Schema("Index must have a name and cannot be an empty string");
            }), c = i._createTableSchema(u, d, c), r[u] = c;
          }
        });
      }, Gn.prototype.stores = function(i) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, i) : i;
        var i = r._versions, u = {}, c = {};
        return i.forEach(function(d) {
          m(u, d._cfg.storesSource), c = d._cfg.dbschema = {}, d._parseStoresSpec(u, c);
        }), r._dbSchema = c, ei(r, [r._allTables, r, r.Transaction.prototype]), Jr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], f(c), c), r._storeNames = f(c), this;
      }, Gn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = Y(this._cfg.contentUpgrade || g, t), this;
      }, Gn);
      function Gn() {
      }
      function ri(t, r) {
        var i = t._dbNamesDB;
        return i || (i = t._dbNamesDB = new qt(Gr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function oi(t) {
        return t && typeof t.databases == "function";
      }
      function ii(t) {
        return sn(function() {
          return oe.letThrough = !0, t();
        });
      }
      function si(t) {
        return !("from" in t);
      }
      var tt = function(t, r) {
        if (!this) {
          var i = new tt();
          return t && "d" in t && m(i, t), i;
        }
        m(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function pr(t, r, i) {
        var u = ve(r, i);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (si(t)) return m(t, { from: r, to: i, d: 1 });
          var c = t.l, u = t.r;
          if (ve(i, t.from) < 0) return c ? pr(c, r, i) : t.l = { from: r, to: i, d: 1, l: null, r: null }, As(t);
          if (0 < ve(r, t.to)) return u ? pr(u, r, i) : t.r = { from: r, to: i, d: 1, l: null, r: null }, As(t);
          ve(r, t.from) < 0 && (t.from = r, t.l = null, t.d = u ? u.d + 1 : 1), 0 < ve(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, c && !t.l && hr(t, c), u && i && hr(t, u);
        }
      }
      function hr(t, r) {
        si(r) || function i(u, _) {
          var d = _.from, h = _.to, y = _.l, _ = _.r;
          pr(u, d, h), y && i(u, y), _ && i(u, _);
        }(t, r);
      }
      function Ss(t, r) {
        var i = to(r), u = i.next();
        if (u.done) return !1;
        for (var c = u.value, d = to(t), h = d.next(c.from), y = h.value; !u.done && !h.done; ) {
          if (ve(y.from, c.to) <= 0 && 0 <= ve(y.to, c.from)) return !0;
          ve(c.from, y.from) < 0 ? c = (u = i.next(y.from)).value : y = (h = d.next(c.from)).value;
        }
        return !1;
      }
      function to(t) {
        var r = si(t) ? null : { s: 0, n: t };
        return { next: function(i) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && ve(i, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || ve(i, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function As(t) {
        var r, i, u = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), c = 1 < u ? "r" : u < -1 ? "l" : "";
        c && (r = c == "r" ? "l" : "r", i = s({}, t), u = t[c], t.from = u.from, t.to = u.to, t[c] = u[c], i[c] = u[r], (t[r] = i).d = Is(i)), t.d = Is(t);
      }
      function Is(i) {
        var r = i.r, i = i.l;
        return (r ? i ? Math.max(r.d, i.d) : r.d : i ? i.d : 0) + 1;
      }
      function no(t, r) {
        return f(r).forEach(function(i) {
          t[i] ? hr(t[i], r[i]) : t[i] = function u(c) {
            var d, h, y = {};
            for (d in c) P(c, d) && (h = c[d], y[d] = !h || typeof h != "object" || tn.has(h.constructor) ? h : u(h));
            return y;
          }(r[i]);
        }), t;
      }
      function ai(t, r) {
        return t.all || r.all || Object.keys(t).some(function(i) {
          return r[i] && Ss(r[i], t[i]);
        });
      }
      U(tt.prototype, ((Ot = { add: function(t) {
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
        return r && ve(r.from, t) <= 0 && 0 <= ve(r.to, t);
      } })[We] = function() {
        return to(this);
      }, Ot));
      var Nn = {}, ui = {}, li = !1;
      function ro(t) {
        no(ui, t), li || (li = !0, setTimeout(function() {
          li = !1, ci(ui, !(ui = {}));
        }, 0));
      }
      function ci(t, r) {
        r === void 0 && (r = !1);
        var i = /* @__PURE__ */ new Set();
        if (t.all) for (var u = 0, c = Object.values(Nn); u < c.length; u++) Cs(h = c[u], t, i, r);
        else for (var d in t) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(d);
          y && (d = y[1], y = y[2], (h = Nn["idb://".concat(d, "/").concat(y)]) && Cs(h, t, i, r));
        }
        i.forEach(function(_) {
          return _();
        });
      }
      function Cs(t, r, i, u) {
        for (var c = [], d = 0, h = Object.entries(t.queries.query); d < h.length; d++) {
          for (var y = h[d], _ = y[0], E = [], T = 0, v = y[1]; T < v.length; T++) {
            var A = v[T];
            ai(r, A.obsSet) ? A.subscribers.forEach(function(R) {
              return i.add(R);
            }) : u && E.push(A);
          }
          u && c.push([_, E]);
        }
        if (u) for (var b = 0, O = c; b < O.length; b++) {
          var S = O[b], _ = S[0], E = S[1];
          t.queries.query[_] = E;
        }
      }
      function Yu(t) {
        var r = t._state, i = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Ve(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, c = Math.round(10 * t.verno), d = !1;
        function h() {
          if (r.openCanceller !== u) throw new se.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new ne(function(A, b) {
            if (h(), !i) throw new se.MissingAPI();
            var O = t.name, S = r.autoSchema || !c ? i.open(O) : i.open(O, c);
            if (!S) throw new se.MissingAPI();
            S.onerror = Lt(b), S.onblocked = Be(t._fireOnBlocked), S.onupgradeneeded = Be(function(R) {
              var C;
              T = S.transaction, r.autoSchema && !t._options.allowEmptyDB ? (S.onerror = lr, T.abort(), S.result.close(), (C = i.deleteDatabase(O)).onsuccess = C.onerror = Be(function() {
                b(new se.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (T.onerror = Lt(b), R = R.oldVersion > Math.pow(2, 62) ? 0 : R.oldVersion, v = R < 1, t.idbdb = S.result, d && qu(t, T), $u(t, R / 10, T, b));
            }, b), S.onsuccess = Be(function() {
              T = null;
              var R, C, D, k, j, $ = t.idbdb = S.result, X = de($.objectStoreNames);
              if (0 < X.length) try {
                var q = $.transaction((k = X).length === 1 ? k[0] : k, "readonly");
                if (r.autoSchema) C = $, D = q, (R = t).verno = C.version / 10, D = R._dbSchema = Zr(0, C, D), R._storeNames = de(C.objectStoreNames, 0), Jr(R, [R._allTables], f(D), D);
                else if (eo(t, t._dbSchema, q), ((j = ti(Zr(0, (j = t).idbdb, q), j._dbSchema)).add.length || j.change.some(function(W) {
                  return W.add.length || W.change.length;
                })) && !d) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), $.close(), c = $.version + 1, d = !0, A(y());
                zr(t, q);
              } catch {
              }
              Hn.push(t), $.onversionchange = Be(function(W) {
                r.vcFired = !0, t.on("versionchange").fire(W);
              }), $.onclose = Be(function(W) {
                t.on("close").fire(W);
              }), v && (j = t._deps, q = O, $ = j.indexedDB, j = j.IDBKeyRange, oi($) || q === Gr || ri($, j).put({ name: q }).catch(g)), A();
            }, b);
          }).catch(function(A) {
            switch (A?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < c) return c = 0, y();
            }
            return ne.reject(A);
          });
        }
        var _, E = r.dbReadyResolve, T = null, v = !1;
        return ne.race([u, (typeof navigator > "u" ? ne.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(A) {
          function b() {
            return indexedDB.databases().finally(A);
          }
          _ = setInterval(b, 100), b();
        }).finally(function() {
          return clearInterval(_);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], ne.resolve(ii(function() {
            return t.on.ready.fire(t.vip);
          })).then(function A() {
            if (0 < r.onReadyBeingFired.length) {
              var b = r.onReadyBeingFired.reduce(Y, g);
              return r.onReadyBeingFired = [], ne.resolve(ii(function() {
                return b(t.vip);
              })).then(A);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(A) {
          r.dbOpenError = A;
          try {
            T && T.abort();
          } catch {
          }
          return u === r.openCanceller && t._close(), Ve(A);
        }).finally(function() {
          r.openComplete = !0, E();
        }).then(function() {
          var A;
          return v && (A = {}, t.tables.forEach(function(b) {
            b.schema.indexes.forEach(function(O) {
              O.name && (A["idb://".concat(t.name, "/").concat(b.name, "/").concat(O.name)] = new tt(-1 / 0, [[[]]]));
            }), A["idb://".concat(t.name, "/").concat(b.name, "/")] = A["idb://".concat(t.name, "/").concat(b.name, "/:dels")] = new tt(-1 / 0, [[[]]]);
          }), cn(cr).fire(A), ci(A, !0)), t;
        });
      }
      function fi(t) {
        function r(d) {
          return t.next(d);
        }
        var i = c(r), u = c(function(d) {
          return t.throw(d);
        });
        function c(d) {
          return function(_) {
            var y = d(_), _ = y.value;
            return y.done ? _ : _ && typeof _.then == "function" ? _.then(i, u) : p(_) ? Promise.all(_).then(i, u) : i(_);
          };
        }
        return c(r)();
      }
      function oo(t, r, i) {
        for (var u = p(t) ? t.slice() : [t], c = 0; c < i; ++c) u.push(r);
        return u;
      }
      var Xu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema, c = {}, d = [];
          function h(v, A, b) {
            var O = dr(v), S = c[O] = c[O] || [], R = v == null ? 0 : typeof v == "string" ? 1 : v.length, C = 0 < A, C = s(s({}, b), { name: C ? "".concat(O, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: C, keyTail: A, keyLength: R, extractKey: Zo(v), unique: !C && b.unique });
            return S.push(C), C.isPrimaryKey || d.push(C), 1 < R && h(R === 2 ? v[0] : v.slice(0, R - 1), A + 1, b), S.sort(function(D, k) {
              return D.keyTail - k.keyTail;
            }), C;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), c[":id"] = [r];
          for (var y = 0, _ = u.indexes; y < _.length; y++) {
            var E = _[y];
            h(E.keyPath, 0, E);
          }
          function T(v) {
            var A, b = v.query.index;
            return b.isVirtual ? s(s({}, v), { query: { index: b.lowLevelIndex, range: (A = v.query.range, b = b.keyTail, { type: A.type === 1 ? 2 : A.type, lower: oo(A.lower, A.lowerOpen ? t.MAX_KEY : t.MIN_KEY, b), lowerOpen: !0, upper: oo(A.upper, A.upperOpen ? t.MIN_KEY : t.MAX_KEY, b), upperOpen: !0 }) } }) : v;
          }
          return s(s({}, i), { schema: s(s({}, u), { primaryKey: r, indexes: d, getIndexByKeyPath: function(v) {
            return (v = c[dr(v)]) && v[0];
          } }), count: function(v) {
            return i.count(T(v));
          }, query: function(v) {
            return i.query(T(v));
          }, openCursor: function(v) {
            var A = v.query.index, b = A.keyTail, O = A.isVirtual, S = A.keyLength;
            return O ? i.openCursor(T(v)).then(function(C) {
              return C && R(C);
            }) : i.openCursor(v);
            function R(C) {
              return Object.create(C, { continue: { value: function(D) {
                D != null ? C.continue(oo(D, v.reverse ? t.MAX_KEY : t.MIN_KEY, b)) : v.unique ? C.continue(C.key.slice(0, S).concat(v.reverse ? t.MIN_KEY : t.MAX_KEY, b)) : C.continue();
              } }, continuePrimaryKey: { value: function(D, k) {
                C.continuePrimaryKey(oo(D, t.MAX_KEY, b), k);
              } }, primaryKey: { get: function() {
                return C.primaryKey;
              } }, key: { get: function() {
                var D = C.key;
                return S === 1 ? D[0] : D.slice(0, S);
              } }, value: { get: function() {
                return C.value;
              } } });
            }
          } });
        } });
      } };
      function di(t, r, i, u) {
        return i = i || {}, u = u || "", f(t).forEach(function(c) {
          var d, h, y;
          P(r, c) ? (d = t[c], h = r[c], typeof d == "object" && typeof h == "object" && d && h ? (y = Ln(d)) !== Ln(h) ? i[u + c] = r[c] : y === "Object" ? di(d, h, i, u + c + ".") : d !== h && (i[u + c] = r[c]) : d !== h && (i[u + c] = r[c])) : i[u + c] = void 0;
        }), f(r).forEach(function(c) {
          P(t, c) || (i[u + c] = r[c]);
        }), i;
      }
      function pi(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var zu = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema.primaryKey;
          return s(s({}, i), { mutate: function(c) {
            var d = oe.trans, h = d.table(r).hook, y = h.deleting, _ = h.creating, E = h.updating;
            switch (c.type) {
              case "add":
                if (_.fire === g) break;
                return d._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "put":
                if (_.fire === g && E.fire === g) break;
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
                  return function v(A, b, O) {
                    return i.query({ trans: A, values: !1, query: { index: u, range: b }, limit: O }).then(function(S) {
                      var R = S.result;
                      return T({ type: "delete", keys: R, trans: A }).then(function(C) {
                        return 0 < C.numFailures ? Promise.reject(C.failures[0]) : R.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : v(A, s(s({}, b), { lower: R[R.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  }(c.trans, c.range, 1e4);
                }, !0);
            }
            return i.mutate(c);
            function T(v) {
              var A, b, O, S = oe.trans, R = v.keys || pi(u, v);
              if (!R) throw new Error("Keys missing");
              return (v = v.type === "add" || v.type === "put" ? s(s({}, v), { keys: R }) : s({}, v)).type !== "delete" && (v.values = a([], v.values)), v.keys && (v.keys = a([], v.keys)), A = i, O = R, ((b = v).type === "add" ? Promise.resolve([]) : A.getMany({ trans: b.trans, keys: O, cache: "immutable" })).then(function(C) {
                var D = R.map(function(k, j) {
                  var $, X, q, W = C[j], te = { onerror: null, onsuccess: null };
                  return v.type === "delete" ? y.fire.call(te, k, W, S) : v.type === "add" || W === void 0 ? ($ = _.fire.call(te, k, v.values[j], S), k == null && $ != null && (v.keys[j] = k = $, u.outbound || Ie(v.values[j], u.keyPath, k))) : ($ = di(W, v.values[j]), (X = E.fire.call(te, $, k, W, S)) && (q = v.values[j], Object.keys(X).forEach(function(Z) {
                    P(q, Z) ? q[Z] = X[Z] : Ie(q, Z, X[Z]);
                  }))), te;
                });
                return i.mutate(v).then(function(k) {
                  for (var j = k.failures, $ = k.results, X = k.numFailures, k = k.lastResult, q = 0; q < R.length; ++q) {
                    var W = ($ || R)[q], te = D[q];
                    W == null ? te.onerror && te.onerror(j[q]) : te.onsuccess && te.onsuccess(v.type === "put" && C[q] ? v.values[q] : W);
                  }
                  return { failures: j, results: $, numFailures: X, lastResult: k };
                }).catch(function(k) {
                  return D.forEach(function(j) {
                    return j.onerror && j.onerror(k);
                  }), Promise.reject(k);
                });
              });
            }
          } });
        } });
      } };
      function Ps(t, r, i) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var u = [], c = 0, d = 0; c < r.keys.length && d < t.length; ++c) ve(r.keys[c], t[d]) === 0 && (u.push(i ? wt(r.values[c]) : r.values[c]), ++d);
          return u.length === t.length ? u : null;
        } catch {
          return null;
        }
      }
      var Ju = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var i = t.table(r);
          return s(s({}, i), { getMany: function(u) {
            if (!u.cache) return i.getMany(u);
            var c = Ps(u.keys, u.trans._cache, u.cache === "clone");
            return c ? ne.resolve(c) : i.getMany(u).then(function(d) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? wt(d) : d }, d;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), i.mutate(u);
          } });
        } };
      } };
      function Ds(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function ks(t, r) {
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
      var Qu = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, i = new tt(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(u, c, d) {
          if (oe.subscr && c !== "readonly") throw new se.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(oe.querier));
          return t.transaction(u, c, d);
        }, table: function(u) {
          var c = t.table(u), d = c.schema, h = d.primaryKey, v = d.indexes, y = h.extractKey, _ = h.outbound, E = h.autoIncrement && v.filter(function(b) {
            return b.compound && b.keyPath.includes(h.keyPath);
          }), T = s(s({}, c), { mutate: function(b) {
            function O(Z) {
              return Z = "idb://".concat(r, "/").concat(u, "/").concat(Z), k[Z] || (k[Z] = new tt());
            }
            var S, R, C, D = b.trans, k = b.mutatedParts || (b.mutatedParts = {}), j = O(""), $ = O(":dels"), X = b.type, te = b.type === "deleteRange" ? [b.range] : b.type === "delete" ? [b.keys] : b.values.length < 50 ? [pi(h, b).filter(function(Z) {
              return Z;
            }), b.values] : [], q = te[0], W = te[1], te = b.trans._cache;
            return p(q) ? (j.addKeys(q), (te = X === "delete" || q.length === W.length ? Ps(q, te) : null) || $.addKeys(q), (te || W) && (S = O, R = te, C = W, d.indexes.forEach(function(Z) {
              var re = S(Z.name || "");
              function ye(he) {
                return he != null ? Z.extractKey(he) : null;
              }
              function Ee(he) {
                return Z.multiEntry && p(he) ? he.forEach(function(Ue) {
                  return re.addKey(Ue);
                }) : re.addKey(he);
              }
              (R || C).forEach(function(he, nt) {
                var pe = R && ye(R[nt]), nt = C && ye(C[nt]);
                ve(pe, nt) !== 0 && (pe != null && Ee(pe), nt != null && Ee(nt));
              });
            }))) : q ? (W = { from: (W = q.lower) !== null && W !== void 0 ? W : t.MIN_KEY, to: (W = q.upper) !== null && W !== void 0 ? W : t.MAX_KEY }, $.add(W), j.add(W)) : (j.add(i), $.add(i), d.indexes.forEach(function(Z) {
              return O(Z.name).add(i);
            })), c.mutate(b).then(function(Z) {
              return !q || b.type !== "add" && b.type !== "put" || (j.addKeys(Z.results), E && E.forEach(function(re) {
                for (var ye = b.values.map(function(pe) {
                  return re.extractKey(pe);
                }), Ee = re.keyPath.findIndex(function(pe) {
                  return pe === h.keyPath;
                }), he = 0, Ue = Z.results.length; he < Ue; ++he) ye[he][Ee] = Z.results[he];
                O(re.name).addKeys(ye);
              })), D.mutatedParts = no(D.mutatedParts || {}, k), Z;
            });
          } }), v = function(O) {
            var S = O.query, O = S.index, S = S.range;
            return [O, new tt((O = S.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : t.MAX_KEY)];
          }, A = { get: function(b) {
            return [h, new tt(b.key)];
          }, getMany: function(b) {
            return [h, new tt().addKeys(b.keys)];
          }, count: v, query: v, openCursor: v };
          return f(A).forEach(function(b) {
            T[b] = function(O) {
              var S = oe.subscr, R = !!S, C = Ds(oe, c) && ks(b, O) ? O.obsSet = {} : S;
              if (R) {
                var D = function(W) {
                  return W = "idb://".concat(r, "/").concat(u, "/").concat(W), C[W] || (C[W] = new tt());
                }, k = D(""), j = D(":dels"), S = A[b](O), R = S[0], S = S[1];
                if ((b === "query" && R.isPrimaryKey && !O.values ? j : D(R.name || "")).add(S), !R.isPrimaryKey) {
                  if (b !== "count") {
                    var $ = b === "query" && _ && O.values && c.query(s(s({}, O), { values: !1 }));
                    return c[b].apply(this, arguments).then(function(W) {
                      if (b === "query") {
                        if (_ && O.values) return $.then(function(ye) {
                          return ye = ye.result, k.addKeys(ye), W;
                        });
                        var te = O.values ? W.result.map(y) : W.result;
                        (O.values ? k : j).addKeys(te);
                      } else if (b === "openCursor") {
                        var Z = W, re = O.values;
                        return Z && Object.create(Z, { key: { get: function() {
                          return j.addKey(Z.primaryKey), Z.key;
                        } }, primaryKey: { get: function() {
                          var ye = Z.primaryKey;
                          return j.addKey(ye), ye;
                        } }, value: { get: function() {
                          return re && k.addKey(Z.primaryKey), Z.value;
                        } } });
                      }
                      return W;
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
      function Ls(t, r, i) {
        if (i.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return i.numFailures === u ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(c, d) {
          return !(d in i.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(c, d) {
          return !(d in i.failures);
        })), r);
      }
      function hi(t, r) {
        return i = t, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < ve(i, u.lower) : 0 <= ve(i, u.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? ve(t, r.upper) < 0 : ve(t, r.upper) <= 0));
        var i, u;
      }
      function js(t, r, A, u, c, d) {
        if (!A || A.length === 0) return t;
        var h = r.query.index, y = h.multiEntry, _ = r.query.range, E = u.schema.primaryKey.extractKey, T = h.extractKey, v = (h.lowLevelIndex || h).extractKey, A = A.reduce(function(b, O) {
          var S = b, R = [];
          if (O.type === "add" || O.type === "put") for (var C = new tt(), D = O.values.length - 1; 0 <= D; --D) {
            var k, j = O.values[D], $ = E(j);
            C.hasKey($) || (k = T(j), (y && p(k) ? k.some(function(Z) {
              return hi(Z, _);
            }) : hi(k, _)) && (C.addKey($), R.push(j)));
          }
          switch (O.type) {
            case "add":
              var X = new tt().addKeys(r.values ? b.map(function(re) {
                return E(re);
              }) : b), S = b.concat(r.values ? R.filter(function(re) {
                return re = E(re), !X.hasKey(re) && (X.addKey(re), !0);
              }) : R.map(function(re) {
                return E(re);
              }).filter(function(re) {
                return !X.hasKey(re) && (X.addKey(re), !0);
              }));
              break;
            case "put":
              var q = new tt().addKeys(O.values.map(function(re) {
                return E(re);
              }));
              S = b.filter(function(re) {
                return !q.hasKey(r.values ? E(re) : re);
              }).concat(r.values ? R : R.map(function(re) {
                return E(re);
              }));
              break;
            case "delete":
              var W = new tt().addKeys(O.keys);
              S = b.filter(function(re) {
                return !W.hasKey(r.values ? E(re) : re);
              });
              break;
            case "deleteRange":
              var te = O.range;
              S = b.filter(function(re) {
                return !hi(E(re), te);
              });
          }
          return S;
        }, t);
        return A === t ? t : (A.sort(function(b, O) {
          return ve(v(b), v(O)) || ve(E(b), E(O));
        }), r.limit && r.limit < 1 / 0 && (A.length > r.limit ? A.length = r.limit : t.length === r.limit && A.length < r.limit && (c.dirty = !0)), d ? Object.freeze(A) : A);
      }
      function Ms(t, r) {
        return ve(t.lower, r.lower) === 0 && ve(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function Zu(t, r) {
        return function(i, u, c, d) {
          if (i === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = ve(i, u)) === 0) {
            if (c && d) return 0;
            if (c) return 1;
            if (d) return -1;
          }
          return u;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(i, u, c, d) {
          if (i === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = ve(i, u)) === 0) {
            if (c && d) return 0;
            if (c) return -1;
            if (d) return 1;
          }
          return u;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function el(t, r, i, u) {
        t.subscribers.add(i), u.addEventListener("abort", function() {
          var c, d;
          t.subscribers.delete(i), t.subscribers.size === 0 && (c = t, d = r, setTimeout(function() {
            c.subscribers.size === 0 && be(d, c);
          }, 3e3));
        });
      }
      var tl = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(i, u, c) {
          var d, h, y = t.transaction(i, u, c);
          return u === "readwrite" && (h = (d = new AbortController()).signal, c = function(_) {
            return function() {
              if (d.abort(), u === "readwrite") {
                for (var E = /* @__PURE__ */ new Set(), T = 0, v = i; T < v.length; T++) {
                  var A = v[T], b = Nn["idb://".concat(r, "/").concat(A)];
                  if (b) {
                    var O = t.table(A), S = b.optimisticOps.filter(function(re) {
                      return re.trans === y;
                    });
                    if (y._explicit && _ && y.mutatedParts) for (var R = 0, C = Object.values(b.queries.query); R < C.length; R++) for (var D = 0, k = (X = C[R]).slice(); D < k.length; D++) ai((q = k[D]).obsSet, y.mutatedParts) && (be(X, q), q.subscribers.forEach(function(re) {
                      return E.add(re);
                    }));
                    else if (0 < S.length) {
                      b.optimisticOps = b.optimisticOps.filter(function(re) {
                        return re.trans !== y;
                      });
                      for (var j = 0, $ = Object.values(b.queries.query); j < $.length; j++) for (var X, q, W, te = 0, Z = (X = $[j]).slice(); te < Z.length; te++) (q = Z[te]).res != null && y.mutatedParts && (_ && !q.dirty ? (W = Object.isFrozen(q.res), W = js(q.res, q.req, S, O, q, W), q.dirty ? (be(X, q), q.subscribers.forEach(function(re) {
                        return E.add(re);
                      })) : W !== q.res && (q.res = W, q.promise = ne.resolve({ result: W }))) : (q.dirty && be(X, q), q.subscribers.forEach(function(re) {
                        return E.add(re);
                      })));
                    }
                  }
                }
                E.forEach(function(re) {
                  return re();
                });
              }
            };
          }, y.addEventListener("abort", c(!1), { signal: h }), y.addEventListener("error", c(!1), { signal: h }), y.addEventListener("complete", c(!0), { signal: h })), y;
        }, table: function(i) {
          var u = t.table(i), c = u.schema.primaryKey;
          return s(s({}, u), { mutate: function(d) {
            var h = oe.trans;
            if (c.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(d);
            var y = Nn["idb://".concat(r, "/").concat(i)];
            return y ? (h = u.mutate(d), d.type !== "add" && d.type !== "put" || !(50 <= d.values.length || pi(c, d).some(function(_) {
              return _ == null;
            })) ? (y.optimisticOps.push(d), d.mutatedParts && ro(d.mutatedParts), h.then(function(_) {
              0 < _.numFailures && (be(y.optimisticOps, d), (_ = Ls(0, d, _)) && y.optimisticOps.push(_), d.mutatedParts && ro(d.mutatedParts));
            }), h.catch(function() {
              be(y.optimisticOps, d), d.mutatedParts && ro(d.mutatedParts);
            })) : h.then(function(_) {
              var E = Ls(0, s(s({}, d), { values: d.values.map(function(T, v) {
                var A;
                return _.failures[v] ? T : (T = (A = c.keyPath) !== null && A !== void 0 && A.includes(".") ? wt(T) : s({}, T), Ie(T, c.keyPath, _.results[v]), T);
              }) }), _);
              y.optimisticOps.push(E), queueMicrotask(function() {
                return d.mutatedParts && ro(d.mutatedParts);
              });
            }), h) : u.mutate(d);
          }, query: function(d) {
            if (!Ds(oe, u) || !ks("query", d)) return u.query(d);
            var h = ((E = oe.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", v = oe, y = v.requery, _ = v.signal, E = function(O, S, R, C) {
              var D = Nn["idb://".concat(O, "/").concat(S)];
              if (!D) return [];
              if (!(S = D.queries[R])) return [null, !1, D, null];
              var k = S[(C.query ? C.query.index.name : null) || ""];
              if (!k) return [null, !1, D, null];
              switch (R) {
                case "query":
                  var j = k.find(function($) {
                    return $.req.limit === C.limit && $.req.values === C.values && Ms($.req.query.range, C.query.range);
                  });
                  return j ? [j, !0, D, k] : [k.find(function($) {
                    return ("limit" in $.req ? $.req.limit : 1 / 0) >= C.limit && (!C.values || $.req.values) && Zu($.req.query.range, C.query.range);
                  }), !1, D, k];
                case "count":
                  return j = k.find(function($) {
                    return Ms($.req.query.range, C.query.range);
                  }), [j, !!j, D, k];
              }
            }(r, i, "query", d), T = E[0], v = E[1], A = E[2], b = E[3];
            return T && v ? T.obsSet = d.obsSet : (v = u.query(d).then(function(O) {
              var S = O.result;
              if (T && (T.res = S), h) {
                for (var R = 0, C = S.length; R < C; ++R) Object.freeze(S[R]);
                Object.freeze(S);
              } else O.result = wt(S);
              return O;
            }).catch(function(O) {
              return b && T && be(b, T), Promise.reject(O);
            }), T = { obsSet: d.obsSet, promise: v, subscribers: /* @__PURE__ */ new Set(), type: "query", req: d, dirty: !1 }, b ? b.push(T) : (b = [T], (A = A || (Nn["idb://".concat(r, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[d.query.index.name || ""] = b)), el(T, b, y, _), T.promise.then(function(O) {
              return { result: js(O.result, d, A?.optimisticOps, u, T, h) };
            });
          } });
        } });
      } };
      function io(t, r) {
        return new Proxy(t, { get: function(i, u, c) {
          return u === "db" ? r : Reflect.get(i, u, c);
        } });
      }
      var qt = (Ge.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new se.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new se.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, i = r.filter(function(u) {
          return u._cfg.version === t;
        })[0];
        return i || (i = new this.Version(t), r.push(i), r.sort(Gu), i.stores({}), this._state.autoSchema = !1, i);
      }, Ge.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || oe.letThrough || this._vip) ? t() : new ne(function(i, u) {
          if (r._state.openComplete) return u(new se.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new se.DatabaseClosed());
            r.open().catch(g);
          }
          r._state.dbReadyPromise.then(i, u);
        }).then(t);
      }, Ge.prototype.use = function(t) {
        var r = t.stack, i = t.create, u = t.level, c = t.name;
        return c && this.unuse({ stack: r, name: c }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: i, level: u ?? 10, name: c }), t.sort(function(d, h) {
          return d.level - h.level;
        }), this;
      }, Ge.prototype.unuse = function(t) {
        var r = t.stack, i = t.name, u = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(c) {
          return u ? c.create !== u : !!i && c.name !== i;
        })), this;
      }, Ge.prototype.open = function() {
        var t = this;
        return xn(Ke, function() {
          return Yu(t);
        });
      }, Ge.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = Hn.indexOf(this);
        if (0 <= r && Hn.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new ne(function(i) {
          t.dbReadyResolve = i;
        }), t.openCanceller = new ne(function(i, u) {
          t.cancelOpen = u;
        }));
      }, Ge.prototype.close = function(i) {
        var r = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new se.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new se.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Ge.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new ne(function(c, d) {
          function h() {
            r.close(t);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = Be(function() {
              var _, E, T;
              _ = r._deps, E = r.name, T = _.indexedDB, _ = _.IDBKeyRange, oi(T) || E === Gr || ri(T, _).delete(E).catch(g), c();
            }), y.onerror = Lt(d), y.onblocked = r._fireOnBlocked;
          }
          if (i) throw new se.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
        });
      }, Ge.prototype.backendDB = function() {
        return this.idbdb;
      }, Ge.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ge.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Ge.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ge.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ge.prototype, "tables", { get: function() {
        var t = this;
        return f(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ge.prototype.transaction = function() {
        var t = (function(r, i, u) {
          var c = arguments.length;
          if (c < 2) throw new se.InvalidArgument("Too few arguments");
          for (var d = new Array(c - 1); --c; ) d[c - 1] = arguments[c];
          return u = d.pop(), [r, Pt(d), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Ge.prototype._transaction = function(t, r, i) {
        var u = this, c = oe.trans;
        c && c.db === this && t.indexOf("!") === -1 || (c = null);
        var d, h, y = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(E) {
            if (E = E instanceof u.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return E;
          }), t == "r" || t === qo) d = qo;
          else {
            if (t != "rw" && t != Wo) throw new se.InvalidArgument("Invalid transaction mode: " + t);
            d = Wo;
          }
          if (c) {
            if (c.mode === qo && d === Wo) {
              if (!y) throw new se.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              c = null;
            }
            c && h.forEach(function(E) {
              if (c && c.storeNames.indexOf(E) === -1) {
                if (!y) throw new se.SubTransaction("Table " + E + " not included in parent transaction.");
                c = null;
              }
            }), y && c && !c.active && (c = null);
          }
        } catch (E) {
          return c ? c._promise(null, function(T, v) {
            v(E);
          }) : Ve(E);
        }
        var _ = (function E(T, v, A, b, O) {
          return ne.resolve().then(function() {
            var S = oe.transless || oe, R = T._createTransaction(v, A, T._dbSchema, b);
            if (R.explicit = !0, S = { trans: R, transless: S }, b) R.idbtrans = b.idbtrans;
            else try {
              R.create(), R.idbtrans._explicit = !0, T._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === nn.InvalidState && T.isOpen() && 0 < --T._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), T.close({ disableAutoOpen: !1 }), T.open().then(function() {
                return E(T, v, A, null, O);
              })) : Ve(k);
            }
            var C, D = St(O);
            return D && Un(), S = ne.follow(function() {
              var k;
              (C = O.call(R, R)) && (D ? (k = an.bind(null, null), C.then(k, k)) : typeof C.next == "function" && typeof C.throw == "function" && (C = fi(C)));
            }, S), (C && typeof C.then == "function" ? ne.resolve(C).then(function(k) {
              return R.active ? k : Ve(new se.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return C;
            })).then(function(k) {
              return b && R._resolve(), R._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return R._reject(k), Ve(k);
            });
          });
        }).bind(null, this, d, h, c, i);
        return c ? c._promise(d, _, "lock") : oe.trans ? xn(oe.transless, function() {
          return u._whenReady(_);
        }) : this._whenReady(_);
      }, Ge.prototype.table = function(t) {
        if (!P(this._allTables, t)) throw new se.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Ge);
      function Ge(t, r) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var u = Ge.dependencies;
        this._options = r = s({ addons: Ge.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var c, d, h, y, _, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: g, dbReadyPromise: null, cancelOpen: g, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        E.dbReadyPromise = new ne(function(v) {
          E.dbReadyResolve = v;
        }), E.openCanceller = new ne(function(v, A) {
          E.cancelOpen = A;
        }), this._state = E, this.name = t, this.on = sr(this, "populate", "blocked", "versionchange", "close", { ready: [Y, g] }), this.once = function(v, A) {
          var b = function() {
            for (var O = [], S = 0; S < arguments.length; S++) O[S] = arguments[S];
            i.on(v).unsubscribe(b), A.apply(i, O);
          };
          return i.on(v, b);
        }, this.on.ready.subscribe = Te(this.on.ready.subscribe, function(v) {
          return function(A, b) {
            Ge.vip(function() {
              var O, S = i._state;
              S.openComplete ? (S.dbOpenError || ne.resolve().then(A), b && v(A)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(A), b && v(A)) : (v(A), O = i, b || v(function R() {
                O.on.ready.unsubscribe(A), O.on.ready.unsubscribe(R);
              }));
            });
          };
        }), this.Collection = (c = this, ar(Mu.prototype, function(C, R) {
          this.db = c;
          var b = ps, O = null;
          if (R) try {
            b = R();
          } catch (D) {
            O = D;
          }
          var S = C._ctx, R = S.table, C = R.hook.reading.fire;
          this._ctx = { table: R, index: S.index, isPrimKey: !S.index || R.schema.primKey.keyPath && S.index === R.schema.primKey.name, range: b, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: S.or, valueMapper: C !== w ? C : null };
        })), this.Table = (d = this, ar(ys.prototype, function(v, A, b) {
          this.db = d, this._tx = b, this.name = v, this.schema = A, this.hook = d._allTables[v] ? d._allTables[v].hook : sr(null, { creating: [F, g], reading: [M, w], updating: [ee, g], deleting: [G, g] });
        })), this.Transaction = (h = this, ar(Uu.prototype, function(v, A, b, O, S) {
          var R = this;
          v !== "readonly" && A.forEach(function(C) {
            C = (C = b[C]) === null || C === void 0 ? void 0 : C.yProps, C && (A = A.concat(C.map(function(D) {
              return D.updatesTable;
            })));
          }), this.db = h, this.mode = v, this.storeNames = A, this.schema = b, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = sr(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ne(function(C, D) {
            R._resolve = C, R._reject = D;
          }), this._completion.then(function() {
            R.active = !1, R.on.complete.fire();
          }, function(C) {
            var D = R.active;
            return R.active = !1, R.on.error.fire(C), R.parent ? R.parent._reject(C) : D && R.idbtrans && R.idbtrans.abort(), Ve(C);
          });
        })), this.Version = (y = this, ar(Wu.prototype, function(v) {
          this.db = y, this._cfg = { version: v, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (_ = this, ar(xs.prototype, function(v, A, b) {
          if (this.db = _, this._ctx = { table: v, index: A === ":id" ? null : A, or: b }, this._cmp = this._ascending = ve, this._descending = function(O, S) {
            return ve(S, O);
          }, this._max = function(O, S) {
            return 0 < ve(O, S) ? O : S;
          }, this._min = function(O, S) {
            return ve(O, S) < 0 ? O : S;
          }, this._IDBKeyRange = _._deps.IDBKeyRange, !this._IDBKeyRange) throw new se.MissingAPI();
        })), this.on("versionchange", function(v) {
          0 < v.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(v) {
          !v.newVersion || v.newVersion < v.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(v.oldVersion / 10));
        }), this._maxKey = fr(r.IDBKeyRange), this._createTransaction = function(v, A, b, O) {
          return new i.Transaction(v, A, b, i._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(v) {
          i.on("blocked").fire(v), Hn.filter(function(A) {
            return A.name === i.name && A !== i && !A._state.vcFired;
          }).map(function(A) {
            return A.on("versionchange").fire(v);
          });
        }, this.use(Ju), this.use(tl), this.use(Qu), this.use(Xu), this.use(zu);
        var T = new Proxy(this, { get: function(v, A, b) {
          if (A === "_vip") return !0;
          if (A === "table") return function(S) {
            return io(i.table(S), T);
          };
          var O = Reflect.get(v, A, b);
          return O instanceof ys ? io(O, T) : A === "tables" ? O.map(function(S) {
            return io(S, T);
          }) : A === "_createTransaction" ? function() {
            return io(O.apply(this, arguments), T);
          } : O;
        } });
        this.vip = T, u.forEach(function(v) {
          return v(i);
        });
      }
      var so, Ot = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", nl = (mi.prototype.subscribe = function(t, r, i) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: i });
      }, mi.prototype[Ot] = function() {
        return this;
      }, mi);
      function mi(t) {
        this._subscribe = t;
      }
      try {
        so = { indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB, IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange };
      } catch {
        so = { indexedDB: null, IDBKeyRange: null };
      }
      function Bs(t) {
        var r, i = !1, u = new nl(function(c) {
          var d = St(t), h, y = !1, _ = {}, E = {}, T = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), v && cn.storagemutated.unsubscribe(b));
          } };
          c.start && c.start(T);
          var v = !1, A = function() {
            return $o(O);
          }, b = function(S) {
            no(_, S), ai(E, _) && A();
          }, O = function() {
            var S, R, C;
            !y && so.indexedDB && (_ = {}, S = {}, h && h.abort(), h = new AbortController(), C = function(D) {
              var k = Bn();
              try {
                d && Un();
                var j = sn(t, D);
                return j = d ? j.finally(an) : j;
              } finally {
                k && Kn();
              }
            }(R = { subscr: S, signal: h.signal, requery: A, querier: t, trans: null }), Promise.resolve(C).then(function(D) {
              i = !0, r = D, y || R.signal.aborted || (_ = {}, function(k) {
                for (var j in k) if (P(k, j)) return;
                return 1;
              }(E = S) || v || (cn(cr, b), v = !0), $o(function() {
                return !y && c.next && c.next(D);
              }));
            }, function(D) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(D?.name) || y || $o(function() {
                y || c.error && c.error(D);
              });
            }));
          };
          return setTimeout(A, 0), T;
        });
        return u.hasValue = function() {
          return i;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var Rn = qt;
      function gi(t) {
        var r = fn;
        try {
          fn = !0, cn.storagemutated.fire(t), ci(t, !0);
        } finally {
          fn = r;
        }
      }
      U(Rn, s(s({}, ir), { delete: function(t) {
        return new Rn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new Rn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = Rn.dependencies, i = r.indexedDB, r = r.IDBKeyRange, (oi(i) ? Promise.resolve(i.databases()).then(function(u) {
            return u.map(function(c) {
              return c.name;
            }).filter(function(c) {
              return c !== Gr;
            });
          }) : ri(i, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Ve(new se.MissingAPI());
        }
        var r, i;
      }, defineClass: function() {
        return function(t) {
          m(this, t);
        };
      }, ignoreTransaction: function(t) {
        return oe.trans ? xn(oe.transless, t) : t();
      }, vip: ii, async: function(t) {
        return function() {
          try {
            var r = fi(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : ne.resolve(r);
          } catch (i) {
            return Ve(i);
          }
        };
      }, spawn: function(t, r, i) {
        try {
          var u = fi(t.apply(i, r || []));
          return u && typeof u.then == "function" ? u : ne.resolve(u);
        } catch (c) {
          return Ve(c);
        }
      }, currentTransaction: { get: function() {
        return oe.trans || null;
      } }, waitFor: function(t, r) {
        return r = ne.resolve(typeof t == "function" ? Rn.ignoreTransaction(t) : t).timeout(r || 6e4), oe.trans ? oe.trans.waitFor(r) : r;
      }, Promise: ne, debug: { get: function() {
        return H;
      }, set: function(t) {
        ue(t);
      } }, derive: K, extend: m, props: U, override: Te, Events: sr, on: cn, liveQuery: Bs, extendObservabilitySet: no, getByKeyPath: Pe, setByKeyPath: Ie, delByKeyPath: function(t, r) {
        typeof r == "string" ? Ie(t, r, void 0) : "length" in r && [].map.call(r, function(i) {
          Ie(t, i, void 0);
        });
      }, shallowClone: bt, deepClone: wt, getObjectDiff: di, cmp: ve, asap: Ce, minKey: -1 / 0, addons: [], connections: Hn, errnames: nn, dependencies: so, cache: Nn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, i) {
        return t + r / Math.pow(10, 2 * i);
      }) })), Rn.maxKey = fr(Rn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (cn(cr, function(t) {
        fn || (t = new CustomEvent(zo, { detail: t }), fn = !0, dispatchEvent(t), fn = !1);
      }), addEventListener(zo, function(t) {
        t = t.detail, fn || gi(t);
      }));
      var $n, fn = !1, Ks = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ks = function() {
        ($n = new BroadcastChannel(zo)).onmessage = function(t) {
          return t.data && gi(t.data);
        };
      })(), typeof $n.unref == "function" && $n.unref(), cn(cr, function(t) {
        fn || $n.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!qt.disableBfCache && t.persisted) {
          H && console.debug("Dexie: handling persisted pagehide"), $n?.close();
          for (var r = 0, i = Hn; r < i.length; r++) i[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !qt.disableBfCache && t.persisted && (H && console.debug("Dexie: handling persisted pageshow"), Ks(), gi({ all: new tt(-1 / 0, [[]]) }));
      })), ne.rejectionMapper = function(t, r) {
        return !t || t instanceof Gt || t instanceof TypeError || t instanceof SyntaxError || !t.name || !rn[t.name] ? t : (r = new rn[t.name](r || t.message, t), "stack" in t && ie(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, ue(H), s(qt, Object.freeze({ __proto__: null, Dexie: qt, liveQuery: Bs, Entity: hs, cmp: ve, PropModification: ur, replacePrefix: function(t, r) {
        return new ur({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new ur({ add: t });
      }, remove: function(t) {
        return new ur({ remove: t });
      }, default: qt, RangeSet: tt, mergeRanges: hr, rangesOverlap: Ss }), { default: qt }), qt;
    });
  }(yo)), yo.exports;
}
var Lf = kf();
const Hi = /* @__PURE__ */ Pf(Lf), _a = Symbol.for("Dexie"), Ro = globalThis[_a] || (globalThis[_a] = Hi);
if (Hi.semVer !== Ro.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Hi.semVer} and ${Ro.semVer}`);
const {
  liveQuery: tp,
  mergeRanges: np,
  rangesOverlap: rp,
  RangeSet: op,
  cmp: ip,
  Entity: sp,
  PropModification: ap,
  replacePrefix: up,
  add: lp,
  remove: cp,
  DexieYProvider: fp
} = Ro;
var mt = /* @__PURE__ */ ((e) => (e.GOOSE = "GOOSE", e.SMV = "SMV", e.REPORT = "Report", e.INTERNAL = "Internal", e.WIRED = "Wired", e.CONTROL = "Control", e))(mt || {});
const So = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Internal: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: []
  // TODO
};
function Au(e) {
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
        const I = { msg: "could not find added record", table: f.tagName, addedId: p };
        throw console.error(I), new Error(JSON.stringify(I));
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
      (I) => I.id === f.id && I.tagName === f.tagName
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
        const I = m.tagName, x = m.id;
        return await e.table(I).get({ id: x });
      })
    );
  }
  async function a(l, f, p = []) {
    const m = [];
    let I = l;
    for (let x = 0; x < f; x++) {
      if (!I.parent)
        return m;
      const P = await e.table(I.parent.tagName).get(I.parent.id);
      if (!P) {
        const U = {
          msg: "Parent record not found",
          table: I.parent.tagName,
          id: I.parent.id
        };
        throw console.error(U), new Error(JSON.stringify(U));
      }
      (p.length == 0 || p.length > 0 && p.includes(P.tagName)) && m.push(P), I = P;
    }
    return m;
  }
}
function jf(e, n) {
  return e.attributes?.find((o) => o.name === n);
}
function Re(e, n) {
  return e?.attributes?.find((o) => o.name === n)?.value;
}
function Mf(e) {
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
    for (const I of p)
      m.push({
        id: I.id,
        typeId: Re(I, "id") ?? "",
        lnClass: Re(I, "lnClass") ?? "",
        dataObjects: await s(I)
      });
    return m;
  }
  async function s(p) {
    if (!p.children) return [];
    const m = [];
    for (const I of p.children) {
      if (I.tagName !== "DO") continue;
      const x = await e.table("DO").get(I.id);
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
    const I = (await e.table("DOType").toArray()).find(
      (P) => P.attributes?.find((U) => U.name === "id" && U.value === m)
    );
    if (!I || !I.children) return [];
    const x = [];
    for (const P of I.children) {
      if (P.tagName !== "DA") continue;
      const U = await e.table("DA").get(P.id);
      U && x.push({
        id: U.id,
        name: Re(U, "name") ?? "",
        type: Re(U, "type") ?? "",
        bType: Re(U, "bType") ?? "",
        fc: Re(U, "fc") ?? "",
        dataObjectId: p.id
      });
    }
    return x;
  }
  async function l(p) {
    const m = await e.table("Private").toArray(), I = await e.table("DOS").toArray(), x = await e.table("DAS").toArray(), P = await e.table("SubscriberLNode").toArray();
    return Promise.all(
      p.map(async (U) => {
        const z = m.find(
          (K) => K.parent?.id === U.id && K.parent?.tagName === "LNode" && Re(K, "type") === "eIEC61850-6-100"
        );
        if (!z || !z.children)
          return { ...U, dataObjectSpecifications: [] };
        const ie = [];
        for (const K of z.children) {
          if (K.tagName !== "DOS") continue;
          const N = I.find((de) => de.id === K.id);
          if (!N) continue;
          const L = [];
          if (N.children)
            for (const de of N.children) {
              if (de.tagName !== "DAS") continue;
              const Te = x.find((Ce) => Ce.id === de.id);
              if (!Te) continue;
              let le;
              if (Te.children) {
                const Ce = Te.children.find((Pe) => Pe.tagName === "SubscriberLNode");
                if (Ce) {
                  const Pe = P.find((Ie) => Ie.id === Ce.id);
                  Pe && (le = {
                    id: Pe.id,
                    inputName: Re(Pe, "inputName") ?? "",
                    service: Iu(Pe, "service"),
                    pLN: Re(Pe, "pLN") ?? ""
                  });
                }
              }
              L.push({
                id: Te.id,
                name: Re(Te, "name") ?? "",
                desc: Re(Te, "desc") ?? "",
                dataObjectSpecificationId: N.id,
                subscriberLNode: le
              });
            }
          ie.push({
            id: N.id,
            name: Re(N, "name") ?? "",
            desc: Re(N, "desc") ?? "",
            dataAttributeSpecifications: L,
            lNodeId: U.id
          });
        }
        return { ...U, dataObjectSpecifications: ie };
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
function Iu(e, n) {
  const o = e?.attributes?.find((a) => a.name === n)?.value;
  if (!o) return;
  switch (o.toUpperCase()) {
    case "GOOSE":
      return mt.GOOSE;
    case "SMV":
      return mt.SMV;
    case "REPORT":
      return mt.REPORT;
    case "INTERNAL":
      return mt.INTERNAL;
    case "WIRED":
      return mt.WIRED;
    case "CONTROL":
      return mt.CONTROL;
    default:
      return;
  }
}
async function as(e) {
  try {
    const n = new Ro(e);
    return await n.open(), n;
  } catch (n) {
    throw console.error("Error opening database:", n), n;
  }
}
function Bf(e) {
  const n = Au(e);
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
        (P) => P.find(
          (U) => U.attributes?.some(
            (z) => z.name === "uuid" && z.value === p
          )
        )?.id
      ) || null, I = await n.findParentRecordsWithinDepthAndGivenTagName(
        f,
        3,
        ["LNode"]
      );
      if (I.length != 1) {
        const P = {
          msg: "LNode record not found for SourceRef id",
          id: f.id
        };
        throw console.error(P), new Error(JSON.stringify(P));
      }
      const x = {
        sourceLNodeId: m,
        destinationLNodeId: I[0].id,
        sourceDataObject: Re(f, "sourceDoName") || "",
        sourceDataAttribute: Re(f, "sourceDaName") || "",
        dataflowType: Iu(f, "service"),
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
      const p = Re(f, "controlledLNodeUuid"), m = Re(f, "controlledDoName"), I = await e.table("LNode").toArray().then(
        (U) => U.find(
          (z) => z.attributes?.some(
            (ie) => ie.name === "uuid" && ie.value === p
          )
        )?.id
      ) || null, x = await n.findParentRecordsWithinDepthAndGivenTagName(
        f,
        3,
        // ControlRef ->  LNodeOutputs -> Private -> LNode
        ["LNode"]
      );
      if (x.length != 1) {
        const U = {
          msg: "LNode record not found for ControlRef id",
          id: f.id
        };
        throw console.error(U), new Error(JSON.stringify(U));
      }
      const P = {
        controllerLNodeId: x[0].id,
        controlledLNodeId: I,
        controlledDataObject: m || "",
        dataflowType: mt.CONTROL,
        outputInstance: Re(f, "outputInst") || "",
        outputName: Re(f, "output") || ""
      };
      l.push(P);
    }
    return l;
  }
}
function Ao(e) {
  return `${e.prefix} ${e.lnClass} ${e.lnInst}`;
}
const Kf = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Uf = { class: "col-start-1 col-span-1 self-center justify-self-end" }, Hf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Ff = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Vf = ["data-testid"], Gf = { class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1" }, $f = { class: "col-start-5 col-span-1 self-center justify-self-start" }, qf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Wf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Yf = /* @__PURE__ */ wn({
  __name: "dataflow-connections",
  props: {
    connections: {}
  },
  setup(e) {
    const n = e, o = At(() => [...n.connections].sort((s, a) => s.dataflowType < a.dataflowType ? -1 : s.dataflowType > a.dataflowType ? 1 : 0));
    return (s, a) => (_e(!0), Ae(He, null, Tt(o.value, (l, f) => (_e(), Ae("div", Kf, [
      B("div", Uf, [
        B("span", Hf, Fe(l.sourceDataObject), 1),
        B("span", Ff, Fe(l.sourceDataAttribute), 1)
      ]),
      a[0] || (a[0] = B("div", { class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]" }, null, -1)),
      B("div", {
        class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center row-start-1",
        "data-testid": `dataflow-line-${f}`
      }, null, 8, Vf),
      a[1] || (a[1] = B("svg", {
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        B("polygon", {
          points: "0,0 8,6 0,12",
          style: { fill: "var(--color-ocean-gray-100)" }
        })
      ], -1)),
      B("div", Gf, Fe(l.dataflowType), 1),
      a[2] || (a[2] = B("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]" }, null, -1)),
      B("div", $f, [
        B("span", qf, Fe(l.input), 1),
        B("span", Wf, Fe(l.inputInstance), 1)
      ])
    ]))), 256));
  }
}), Xf = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, zf = { class: "col-start-3 col-span-1 relative self-center row-start-1" }, Jf = ["data-testid"], Qf = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Zf = { class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, ed = /* @__PURE__ */ wn({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(e) {
    return (n, o) => (_e(!0), Ae(He, null, Tt(n.destinationPlaceHolderPorts, (s, a) => (_e(), Ae("div", Xf, [
      B("div", zf, [
        B("div", {
          class: "h-[2px] bg-(--color-ocean-gray-100) absolute left-[80%] w-[20%]",
          "data-testid": `placeholder-line-${a}`
        }, null, 8, Jf)
      ]),
      o[0] || (o[0] = B("svg", {
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        B("polygon", {
          points: "0,0 8,6 0,12",
          style: { fill: "var(--color-ocean-gray-100)" }
        })
      ], -1)),
      o[1] || (o[1] = B("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]" }, null, -1)),
      B("div", Qf, [
        B("span", Zf, Fe(s.input), 1)
      ])
    ]))), 256));
  }
});
function Cu(e) {
  const n = Au(e);
  return {
    createConnection: o,
    createDestinationPlaceholder: s
  };
  async function o(a, l, f) {
    const p = await ba(e, n, f);
    await td(n, l, p, a);
  }
  async function s(a, l) {
    const f = await ba(e, n, l), p = await vo(
      n,
      nd(a),
      f.namespace
    );
    await n.ensureRelationship(f, p);
  }
}
async function ba(e, n, o) {
  const s = await e.table("LNode").get({ id: o.id });
  if (!s || !s.children || s.children.length == 0) {
    const p = {
      msg: `LNode element with uuid ${o.uuid} not found or empty`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  const a = await n.findChildRecordsByTagName(s, "Private");
  if (!a.filter((p) => jf(p, "type")?.value === "eIEC61850-6-100").at(0)) {
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
async function td(e, n, o, s) {
  const a = await vo(
    e,
    Ai(s, n),
    o.namespace
  );
  if (await e.ensureRelationship(o, a), s.includeQuality) {
    let l = structuredClone(xe(s));
    l.attribute = "q";
    const f = await vo(
      e,
      Ai(l, n),
      o.namespace
    );
    await e.ensureRelationship(o, f);
  }
  if (s.includeTimestamp) {
    let l = structuredClone(xe(s));
    l.attribute = "t";
    const f = await vo(
      e,
      Ai(l, n),
      o.namespace
    );
    await e.ensureRelationship(o, f);
  }
}
async function vo(e, n, o) {
  const s = {
    tagName: "SourceRef",
    namespace: o,
    attributes: [
      {
        name: "pLN",
        value: n.pLN
      },
      {
        name: "pDO",
        value: n.pDO
      },
      {
        name: "pDA",
        value: n.pDA
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
        value: n.dataflowType || ""
      },
      {
        name: "sourceLNodeUuid",
        value: n.sourceLNodeUuid
      },
      {
        name: "sourceDoName",
        value: n.sourceDoName
      },
      {
        name: "sourceDaName",
        value: n.sourceDaName
        // TODO: in the example SSD this was a combination fo SDS and DA name
      },
      {
        name: "uuid",
        value: crypto.randomUUID()
      },
      {
        name: "resourceName",
        value: n.resourceName
      },
      {
        name: "source",
        value: n.source
      }
    ],
    parent: null,
    value: null,
    children: null
  };
  return await e.addRecord(s);
}
function Ai(e, n) {
  return {
    dataflowType: e.type,
    inputName: e.inputName,
    inputInstance: e.inputInstance,
    sourceLNodeUuid: n.uuid,
    resourceName: "",
    // TODO: https://github.com/SeptKit/set/issues/163
    source: "",
    // TODO: https://github.com/SeptKit/set/issues/163
    sourceDoName: e.signal,
    sourceDaName: e.attribute,
    pLN: n.lnClass,
    pDO: e.signal,
    pDA: e.attribute
  };
}
function nd(e) {
  return {
    dataflowType: e.dataflowType,
    inputName: e.inputName,
    inputInstance: "",
    sourceLNodeUuid: "",
    resourceName: e.processResource,
    source: "",
    sourceDoName: "",
    sourceDaName: "",
    pLN: e.preferredLNode,
    pDO: e.preferredDataObject,
    pDA: e.preferredDataAttribute
  };
}
const rd = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] grid-rows-1" }, od = ["open"], id = { class: "modal-box" }, sd = { class: "grid grid-cols-2 gap-4 mt-4" }, ad = { class: "grid grid-cols-2 gap-4 mt-4" }, ud = ["value", "disabled"], ld = { class: "grid grid-cols-2 gap-4 mt-4" }, cd = ["value"], fd = { class: "grid grid-cols-2 gap-4 mt-4" }, dd = ["value"], pd = { class: "grid grid-cols-2 gap-4 mt-4" }, hd = ["value"], md = { class: "grid grid-cols-2 gap-4 mt-4" }, gd = /* @__PURE__ */ wn({
  __name: "destination-placeholder-port-creation",
  props: {
    destinationLNode: {},
    lnodeTypes: {}
  },
  emits: ["destinationPlaceholderCreated"],
  setup(e, { emit: n }) {
    const o = e, s = n, a = ct(
      m()
    ), l = ct(!1), f = At(() => {
      const K = o.lnodeTypes.find(
        (N) => N.lnClass === a.value.preferredLNode
      );
      return K ? a.value.dataflowType ? K.dataObjects.filter(
        (N) => N.dataAttributes.some(
          (L) => So[a.value.dataflowType].includes(L.fc)
        )
      ).map((N) => N.name) : K.dataObjects.map((N) => N.name) : [];
    }), p = At(() => {
      const K = o.lnodeTypes.find(
        (L) => L.lnClass === a.value.preferredLNode
      );
      if (!K) return [];
      const N = K.dataObjects.find(
        (L) => L.name === a.value.preferredDataObject
      );
      return N ? a.value.dataflowType ? N.dataAttributes.filter(
        (L) => So[a.value.dataflowType].includes(L.fc)
      ).map((L) => L.name) : N.dataAttributes.map((L) => L.name) : [];
    });
    function m() {
      return {
        dataflowType: null,
        inputName: "",
        preferredLNode: "",
        preferredDataObject: "",
        preferredDataAttribute: "",
        processResource: ""
      };
    }
    function I() {
      l.value = !0;
    }
    function x() {
      z(), l.value = !1;
    }
    async function P() {
      try {
        if (!U(a.value))
          return;
        const K = localStorage.getItem("currentActiveFileDatabaseName");
        if (!K)
          throw new Error("no active file");
        const N = await as(K);
        await Cu(N).createDestinationPlaceholder(
          a.value,
          o.destinationLNode
        ), N.close(), s("destinationPlaceholderCreated"), x();
      } catch (K) {
        console.error("Error creating destination placeholder port:", K), alert(`Error creating placeholder: ${K instanceof Error ? K.message : "Unknown error"}`);
      }
    }
    function U(K) {
      return K.inputName ? !0 : (alert("Please enter an input name."), !1);
    }
    function z() {
      a.value = m();
    }
    function ie(K) {
      for (const N of K)
        a.value[N] = "";
    }
    return (K, N) => (_e(), Ae("div", rd, [
      B("button", {
        class: "btn btn-primary btn-circle size-5 col-start-4 col-span-1 -ml-[9px]",
        onClick: I,
        "aria-label": "Add destination placeholder"
      }, N[9] || (N[9] = [
        B("svg", {
          width: "16px",
          height: "16px",
          viewBox: "0 0 20 20",
          fill: "currentColor",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          B("path", { d: "M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" }),
          B("path", { d: "M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" })
        ], -1)
      ])),
      B("dialog", {
        class: "modal",
        open: l.value
      }, [
        B("div", id, [
          N[21] || (N[21] = B("h3", { class: "text-lg font-bold" }, "Create Placeholder - Receive data from", -1)),
          B("button", {
            class: "absolute top-[1.5rem] right-[1.5rem] cursor-pointer",
            onClick: x,
            "aria-label": "Close destination placeholder creation"
          }, N[10] || (N[10] = [
            B("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "28",
              viewBox: "0 0 64 64"
            }, [
              B("path", { d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" })
            ], -1)
          ])),
          B("div", sd, [
            N[11] || (N[11] = B("label", {
              for: "input-name-input",
              class: "col-start-1 self-center"
            }, "Input", -1)),
            lt(B("input", {
              id: "input-name-input",
              type: "text",
              placeholder: "Input Name",
              class: "input col-start-2",
              "onUpdate:modelValue": N[0] || (N[0] = (L) => a.value.inputName = L)
            }, null, 512), [
              [No, a.value.inputName]
            ])
          ]),
          B("div", ad, [
            N[13] || (N[13] = B("label", {
              for: "dataflow-type-select",
              class: "col-start-1 self-center"
            }, "Dataflow Type", -1)),
            lt(B("select", {
              id: "dataflow-type-select",
              class: "select col-start-2",
              "onUpdate:modelValue": N[1] || (N[1] = (L) => a.value.dataflowType = L),
              onChange: N[2] || (N[2] = (L) => ie(["preferredDataObject"]))
            }, [
              (_e(!0), Ae(He, null, Tt(Object.values(Qt(mt)), (L) => (_e(), Ae("option", {
                key: L,
                value: L,
                disabled: L === Qt(mt).CONTROL
              }, Fe(L), 9, ud))), 128)),
              N[12] || (N[12] = B("option", {
                key: "empty",
                value: null
              }, "-", -1))
            ], 544), [
              [Jt, a.value.dataflowType]
            ])
          ]),
          B("div", ld, [
            N[15] || (N[15] = B("label", {
              for: "preferred-lnode-select",
              class: "col-start-1 self-center"
            }, "Preferred LNode", -1)),
            lt(B("select", {
              id: "preferred-lnode-select",
              class: "select col-start-2",
              "onUpdate:modelValue": N[3] || (N[3] = (L) => a.value.preferredLNode = L),
              onChange: N[4] || (N[4] = (L) => ie(["preferredDataObject"]))
            }, [
              (_e(!0), Ae(He, null, Tt(K.lnodeTypes, (L) => (_e(), Ae("option", {
                key: L.lnClass,
                value: L.lnClass
              }, Fe(L.lnClass), 9, cd))), 128)),
              N[14] || (N[14] = B("option", {
                key: "empty",
                value: ""
              }, "-", -1))
            ], 544), [
              [Jt, a.value.preferredLNode]
            ])
          ]),
          B("div", fd, [
            N[17] || (N[17] = B("label", {
              for: "data-object-select",
              class: "col-start-1 self-center"
            }, "Preferred Data Object", -1)),
            lt(B("select", {
              id: "data-object-select",
              class: "select col-start-2",
              "onUpdate:modelValue": N[5] || (N[5] = (L) => a.value.preferredDataObject = L),
              onChange: N[6] || (N[6] = (L) => ie(["preferredDataAttribute"]))
            }, [
              (_e(!0), Ae(He, null, Tt(f.value, (L) => (_e(), Ae("option", {
                key: L,
                value: L
              }, Fe(L), 9, dd))), 128)),
              N[16] || (N[16] = B("option", {
                key: "empty",
                value: ""
              }, "-", -1))
            ], 544), [
              [Jt, a.value.preferredDataObject]
            ])
          ]),
          B("div", pd, [
            N[19] || (N[19] = B("label", {
              for: "data-attribute-select",
              class: "col-start-1 self-center"
            }, "Preferred Data Attribute", -1)),
            lt(B("select", {
              id: "data-attribute-select",
              class: "select col-start-2",
              "onUpdate:modelValue": N[7] || (N[7] = (L) => a.value.preferredDataAttribute = L)
            }, [
              (_e(!0), Ae(He, null, Tt(p.value, (L) => (_e(), Ae("option", {
                key: L,
                value: L
              }, Fe(L), 9, hd))), 128)),
              N[18] || (N[18] = B("option", {
                key: "empty",
                value: ""
              }, "-", -1))
            ], 512), [
              [Jt, a.value.preferredDataAttribute]
            ])
          ]),
          B("div", md, [
            N[20] || (N[20] = B("label", {
              for: "process-resource-input",
              class: "col-start-1 self-center"
            }, "Process Resource", -1)),
            lt(B("input", {
              id: "process-resource-input",
              type: "text",
              placeholder: "Process Resource",
              class: "input col-start-2",
              "onUpdate:modelValue": N[8] || (N[8] = (L) => a.value.processResource = L)
            }, null, 512), [
              [No, a.value.processResource]
            ])
          ]),
          B("div", { class: "modal-action" }, [
            B("button", {
              class: "btn bg-(--color-primary) border-none text-white",
              onClick: P
            }, " Save ")
          ])
        ])
      ], 8, od)
    ]));
  }
}), yd = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, vd = { class: "col-start-1 col-span-1 self-center justify-self-end" }, _d = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, bd = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, wd = ["data-testid"], Ed = { class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1" }, xd = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Od = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Td = /* @__PURE__ */ wn({
  __name: "dataflow-controlled-connections",
  props: {
    controlledConnections: {}
  },
  setup(e) {
    return (n, o) => (_e(!0), Ae(He, null, Tt(n.controlledConnections, (s, a) => (_e(), Ae("div", yd, [
      B("div", vd, [
        B("span", _d, Fe(s.outputName), 1),
        B("span", bd, Fe(s.outputInstance), 1)
      ]),
      o[0] || (o[0] = B("div", { class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]" }, null, -1)),
      B("div", {
        class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center row-start-1",
        "data-testid": `dataflow-controlled-connection-line-${a}`
      }, null, 8, wd),
      o[1] || (o[1] = B("svg", {
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        B("polygon", {
          points: "0,0 8,6 0,12",
          style: { fill: "var(--color-ocean-gray-100)" }
        })
      ], -1)),
      B("div", Ed, Fe(s.dataflowType), 1),
      o[2] || (o[2] = B("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]" }, null, -1)),
      B("div", xd, [
        B("span", Od, Fe(s.controlledDataObject), 1)
      ])
    ]))), 256));
  }
}), Nd = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full min-h-[500px] mb-8 grid-rows-[100px_1fr_50px]" }, Rd = ["value"], Sd = ["value"], Ad = ["value"], Id = ["value"], Cd = { class: "col-span-full row-start-2" }, Pd = /* @__PURE__ */ wn({
  __name: "dataflow-visualisation",
  props: {
    lnodes: {},
    connections: {},
    lnodeTypes: {},
    controlledConnections: {}
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange", "destinationPlaceholderCreated"],
  setup(e, { emit: n }) {
    const o = n, s = e;
    yn(
      () => s.lnodes,
      () => {
        a.value = void 0, l.value = void 0;
      }
    );
    const a = ct(), l = ct(), f = ct(), p = ct(), m = At(
      () => s.lnodes.filter((N) => N.id !== l.value)
    ), I = At(
      () => s.lnodes.filter((N) => N.id !== a.value)
    ), x = At(() => !a.value || !l.value ? [] : s.connections.filter(
      (N) => N.sourceLNodeId === a.value && N.destinationLNodeId === l.value
    )), P = At(() => !a.value || !l.value ? [] : s.controlledConnections.filter(
      (N) => N.controllerLNodeId === a.value && N.controlledLNodeId === l.value
    )), U = At(() => l.value ? s.connections.filter(
      (N) => N.destinationLNodeId === l.value && !N.sourceLNodeId
    ) : []);
    function z(N) {
      return s.lnodes.find((L) => L.id === N) ?? void 0;
    }
    function ie(N) {
      a.value = N, f.value = z(N), o("sourceLNodeChange", N);
    }
    function K(N) {
      l.value = N, p.value = z(N), o("destinationLNodeChange", N);
    }
    return (N, L) => (_e(), Ae("div", Nd, [
      L[6] || (L[6] = B("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      B("select", {
        value: a.value ?? "",
        onChange: L[0] || (L[0] = (de) => ie(de.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        L[3] || (L[3] = xu(" > ")),
        L[4] || (L[4] = B("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (_e(!0), Ae(He, null, Tt(m.value, (de) => (_e(), Ae("option", {
          key: de.id,
          value: de.id
        }, Fe(Qt(Ao)(de)), 9, Sd))), 128))
      ], 40, Rd),
      L[7] || (L[7] = B("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      B("select", {
        value: l.value ?? "",
        onChange: L[1] || (L[1] = (de) => K(de.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        L[5] || (L[5] = B("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (_e(!0), Ae(He, null, Tt(I.value, (de) => (_e(), Ae("option", {
          key: de.id,
          value: de.id
        }, Fe(Qt(Ao)(de)), 9, Id))), 128))
      ], 40, Ad),
      B("div", Cd, [
        x.value.length > 0 ? (_e(), vr(Yf, {
          key: 0,
          connections: x.value
        }, null, 8, ["connections"])) : _r("", !0),
        P.value.length > 0 ? (_e(), vr(Td, {
          key: 1,
          controlledConnections: P.value
        }, null, 8, ["controlledConnections"])) : _r("", !0),
        U.value.length > 0 ? (_e(), vr(ed, {
          key: 2,
          destinationPlaceHolderPorts: U.value
        }, null, 8, ["destinationPlaceHolderPorts"])) : _r("", !0)
      ]),
      p.value ? (_e(), vr(gd, {
        key: 0,
        destinationLNode: p.value,
        class: "col-span-full row-start-3",
        lnodeTypes: N.lnodeTypes,
        onDestinationPlaceholderCreated: L[2] || (L[2] = (de) => o("destinationPlaceholderCreated"))
      }, null, 8, ["destinationLNode", "lnodeTypes"])) : _r("", !0)
    ]));
  }
}), Dd = ["disabled"], kd = ["open"], Ld = { class: "modal-box" }, jd = { class: "grid grid-cols-2 gap-4 mt-4" }, Md = ["value"], Bd = { class: "grid grid-cols-2 gap-4 mt-4" }, Kd = ["value"], Ud = { class: "grid grid-cols-2 gap-4 mt-4" }, Hd = ["value"], Fd = { class: "grid grid-cols-2 gap-4 mt-4" }, Vd = ["value"], Gd = { class: "grid grid-cols-2 gap-4 mt-4" }, $d = ["value"], qd = { class: "grid grid-cols-2 gap-4 mt-4" }, Wd = { class: "grid grid-cols-2 gap-4 mt-4" }, Yd = { class: "mt-4" }, Xd = { class: "mt-4" }, zd = /* @__PURE__ */ wn({
  __name: "dataflow-creation",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    lnodeTypes: {}
  },
  emits: ["connectionCreated"],
  setup(e, { emit: n }) {
    const o = e, s = n, a = ct(I()), l = ct(!1);
    yn(
      () => a.value.signal,
      (K, N) => {
        a.value.inputName = K;
      }
    ), yn(
      () => a.value.inputName,
      () => {
        a.value.inputInstance = "1";
      }
    ), yn(
      () => a.value.type,
      () => {
        switch (a.value.type) {
          case mt.GOOSE:
          case mt.SMV:
            a.value.includeQuality = !0, a.value.includeTimestamp = !1;
            break;
          case mt.REPORT:
            a.value.includeQuality = !0, a.value.includeTimestamp = !0;
            break;
          default:
            a.value.includeQuality = !1, a.value.includeTimestamp = !1;
        }
      }
    );
    const f = At(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((K) => K.typeId === o.sourceLNode?.lnType)?.dataObjects.filter(
      (K) => K.dataAttributes.some(
        (N) => So[a.value.type].includes(
          N.fc
        )
      )
    ).map((K) => K.name)), p = At(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((K) => K.typeId === o.sourceLNode?.lnType)?.dataObjects.find((K) => K.name === a.value.signal)?.dataAttributes.filter(
      (K) => So[a.value.type].includes(
        K.fc
      )
    ).filter((K) => K.name !== "t" && K.name !== "q").map((K) => K.name) || []);
    function m() {
      l.value = !0;
    }
    function I() {
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
    function x(K) {
      for (const N of K)
        a.value[N] = "";
    }
    function P() {
      ie(), l.value = !1;
    }
    async function U() {
      try {
        if (!z(a.value))
          return;
        const K = localStorage.getItem("currentActiveFileDatabaseName");
        if (!K)
          throw new Error("no active file");
        const N = await as(K);
        await Cu(N).createConnection(
          a.value,
          o.sourceLNode,
          o.destinationLNode
        ), N.close(), s("connectionCreated"), P();
      } catch (K) {
        console.error("Error creating dataflow:", K), alert(`Error creating dataflow: ${K instanceof Error ? K.message : "Unknown error"}`);
      }
    }
    function z(K) {
      return o.sourceLNode ? o.destinationLNode ? K.type ? K.signal ? K.attribute ? K.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1) : (alert("Please select a destination LNode."), !1) : (alert("Please select a source LNode."), !1);
    }
    function ie() {
      a.value = I();
    }
    return (K, N) => (_e(), Ae(He, null, [
      B("button", {
        class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
        onClick: m,
        disabled: !o.sourceLNode || !o.destinationLNode,
        "aria-label": "Add connection"
      }, " + ", 8, Dd),
      o.sourceLNode && o.destinationLNode ? (_e(), Ae("dialog", {
        key: 0,
        class: "modal",
        open: l.value
      }, [
        B("div", Ld, [
          N[24] || (N[24] = B("h3", { class: "text-lg font-bold" }, "Create Connection", -1)),
          B("button", {
            class: "absolute top-[1.5rem] right-[1.5rem] cursor-pointer",
            onClick: P,
            "aria-label": "Close dataflow creation"
          }, N[11] || (N[11] = [
            B("svg", {
              xmlns: "http://www.w3.org/2000/svg",
              width: "28",
              height: "28",
              viewBox: "0 0 64 64"
            }, [
              B("path", { d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" })
            ], -1)
          ])),
          B("div", jd, [
            N[13] || (N[13] = B("label", {
              for: "dataflow-type-select",
              class: "col-start-1 self-center"
            }, "Dataflow Type", -1)),
            lt(B("select", {
              id: "dataflow-type-select",
              required: "",
              class: "select col-start-2",
              "onUpdate:modelValue": N[0] || (N[0] = (L) => a.value.type = L),
              onChange: N[1] || (N[1] = (L) => x(["signal", "attribute"]))
            }, [
              (_e(!0), Ae(He, null, Tt(Object.values(Qt(mt)), (L) => (_e(), Ae("option", {
                key: L,
                value: L
              }, Fe(L), 9, Md))), 128)),
              N[12] || (N[12] = B("option", {
                key: "empty",
                value: null
              }, "-", -1))
            ], 544), [
              [Jt, a.value.type]
            ])
          ]),
          N[25] || (N[25] = B("hr", { class: "solid mt-4" }, null, -1)),
          B("div", Bd, [
            N[14] || (N[14] = B("label", {
              for: "source-select",
              class: "col-start-1 self-center"
            }, "Source", -1)),
            lt(B("select", {
              id: "source-select",
              required: "",
              disabled: "",
              class: "select col-start-2",
              "onUpdate:modelValue": N[2] || (N[2] = (L) => o.sourceLNode.id = L)
            }, [
              B("option", {
                value: o.sourceLNode.id
              }, Fe(Qt(Ao)(K.sourceLNode)), 9, Kd)
            ], 512), [
              [Jt, o.sourceLNode.id]
            ])
          ]),
          B("div", Ud, [
            N[16] || (N[16] = B("label", {
              for: "data-object-select",
              class: "col-start-1 self-center"
            }, "Signal (DO)", -1)),
            lt(B("select", {
              id: "data-object-select",
              required: "",
              class: "select col-start-2",
              "onUpdate:modelValue": N[3] || (N[3] = (L) => a.value.signal = L),
              onChange: N[4] || (N[4] = (L) => x(["attribute"]))
            }, [
              (_e(!0), Ae(He, null, Tt(f.value, (L) => (_e(), Ae("option", {
                key: L,
                value: L
              }, Fe(L), 9, Hd))), 128)),
              N[15] || (N[15] = B("option", {
                key: "empty",
                value: ""
              }, "-", -1))
            ], 544), [
              [Jt, a.value.signal]
            ])
          ]),
          B("div", Fd, [
            N[18] || (N[18] = B("label", {
              for: "data-attribute-select",
              class: "col-start-1 self-center"
            }, "Attribute (DA)", -1)),
            lt(B("select", {
              id: "data-attribute-select",
              required: "",
              class: "select col-start-2",
              "onUpdate:modelValue": N[5] || (N[5] = (L) => a.value.attribute = L)
            }, [
              (_e(!0), Ae(He, null, Tt(p.value, (L) => (_e(), Ae("option", {
                key: L,
                value: L
              }, Fe(L), 9, Vd))), 128)),
              N[17] || (N[17] = B("option", {
                key: "empty",
                value: ""
              }, "-", -1))
            ], 512), [
              [Jt, a.value.attribute]
            ])
          ]),
          N[26] || (N[26] = B("hr", { class: "solid mt-4" }, null, -1)),
          B("div", Gd, [
            N[19] || (N[19] = B("label", {
              for: "destination-select",
              class: "col-start-1 self-center"
            }, "Destination", -1)),
            lt(B("select", {
              id: "destination-select",
              required: "",
              disabled: "",
              class: "select col-start-2",
              "onUpdate:modelValue": N[6] || (N[6] = (L) => o.destinationLNode.id = L)
            }, [
              B("option", {
                value: o.destinationLNode.id
              }, Fe(Qt(Ao)(K.destinationLNode)), 9, $d)
            ], 512), [
              [Jt, o.destinationLNode.id]
            ])
          ]),
          B("div", qd, [
            N[20] || (N[20] = B("label", {
              for: "input-name-input",
              class: "col-start-1 self-center"
            }, "Input Name", -1)),
            lt(B("input", {
              id: "input-name-input",
              required: "",
              type: "text",
              placeholder: "Input Name",
              class: "input col-start-2",
              "onUpdate:modelValue": N[7] || (N[7] = (L) => a.value.inputName = L)
            }, null, 512), [
              [No, a.value.inputName]
            ])
          ]),
          B("div", Wd, [
            N[21] || (N[21] = B("label", {
              for: "input-instance-input",
              class: "col-start-1 self-center"
            }, "Input Instance", -1)),
            lt(B("input", {
              id: "input-instance-input",
              required: "",
              disabled: "",
              type: "text",
              class: "input col-start-2",
              "onUpdate:modelValue": N[8] || (N[8] = (L) => a.value.inputInstance = L)
            }, null, 512), [
              [No, a.value.inputInstance]
            ])
          ]),
          N[27] || (N[27] = B("hr", { class: "solid mt-4" }, null, -1)),
          B("div", Yd, [
            lt(B("input", {
              type: "checkbox",
              "onUpdate:modelValue": N[9] || (N[9] = (L) => a.value.includeQuality = L),
              class: "checkbox mr-2",
              id: "checkbox-include-quality"
            }, null, 512), [
              [ha, a.value.includeQuality]
            ]),
            N[22] || (N[22] = B("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
          ]),
          B("div", Xd, [
            lt(B("input", {
              type: "checkbox",
              "onUpdate:modelValue": N[10] || (N[10] = (L) => a.value.includeTimestamp = L),
              class: "checkbox mr-2",
              id: "checkbox-include-timestamp"
            }, null, 512), [
              [ha, a.value.includeTimestamp]
            ]),
            N[23] || (N[23] = B("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
          ]),
          B("div", { class: "modal-action" }, [
            B("button", {
              class: "btn bg-(--color-primary) border-none text-white",
              onClick: U
            }, " Save ")
          ])
        ])
      ], 8, kd)) : _r("", !0)
    ], 64));
  }
}), Jd = { class: "flex flex-col items-center justify-center w-full" }, Qd = /* @__PURE__ */ wn({
  __name: "dataflow-view",
  props: {
    sdks: {}
  },
  setup(e) {
    const n = e, o = ct(), s = ct(), a = ct([]), l = ct([]), f = ct([]), p = ct([]);
    yn(
      () => n.sdks,
      () => {
        m(), I(), x();
      },
      { immediate: !0 }
    );
    async function m() {
      n.sdks && (a.value = await n.sdks.lnodeSDK.findAllEnrichedLNodes(), l.value = await n.sdks.lnodeSDK.findAllLNodeTypes());
    }
    async function I() {
      n.sdks && (f.value = await n.sdks.connectionSDK.findAllExistingConnections());
    }
    async function x() {
      n.sdks && (p.value = await n.sdks.connectionSDK.findAllExistingControlledConnections());
    }
    function P(ie) {
      o.value = z(ie);
    }
    function U(ie) {
      s.value = z(ie);
    }
    function z(ie) {
      return a.value.find((K) => K.id === ie) ?? void 0;
    }
    return (ie, K) => (_e(), Ae("div", Jd, [
      Rt(Pd, {
        connections: f.value,
        controlledConnections: p.value,
        lnodes: a.value,
        lnodeTypes: l.value,
        onSourceLNodeChange: P,
        onDestinationLNodeChange: U,
        onDestinationPlaceholderCreated: I
      }, null, 8, ["connections", "controlledConnections", "lnodes", "lnodeTypes"]),
      Rt(zd, {
        sourceLNode: o.value,
        destinationLNode: s.value,
        lnodeTypes: l.value,
        onConnectionCreated: I
      }, null, 8, ["sourceLNode", "destinationLNode", "lnodeTypes"])
    ]));
  }
}), Zd = { class: "p-10" }, ep = /* @__PURE__ */ wn({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    let n = ct();
    nu(() => {
      window.addEventListener("storage", o), s();
    }), rs(() => {
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
      const f = await as(l);
      if (!f) throw new Error("database is not initialized.");
      n.value = {
        db: f,
        lnodeSDK: Mf(f),
        connectionSDK: Bf(f)
      };
    }
    return (l, f) => (_e(), Ae("div", Zd, [
      Rt(Qd, { sdks: Qt(n) }, null, 8, ["sdks"])
    ]));
  }
});
function dp(e, n) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Sf(ep, { api: n }).mount(`#${e}`);
}
export {
  dp as default
};
