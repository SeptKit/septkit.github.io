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
const Ce = {}, Wn = [], Rt = () => {
}, el = () => !1, So = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hi = (e) => e.startsWith("onUpdate:"), it = Object.assign, Fi = (e, n) => {
  const o = e.indexOf(n);
  o > -1 && e.splice(o, 1);
}, tl = Object.prototype.hasOwnProperty, Te = (e, n) => tl.call(e, n), le = Array.isArray, Yn = (e) => kr(e) === "[object Map]", er = (e) => kr(e) === "[object Set]", js = (e) => kr(e) === "[object Date]", de = (e) => typeof e == "function", Ve = (e) => typeof e == "string", Bt = (e) => typeof e == "symbol", je = (e) => e !== null && typeof e == "object", _a = (e) => (je(e) || de(e)) && de(e.then) && de(e.catch), va = Object.prototype.toString, kr = (e) => va.call(e), nl = (e) => kr(e).slice(8, -1), ba = (e) => kr(e) === "[object Object]", Vi = (e) => Ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, vr = /* @__PURE__ */ Ui(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Io = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, rl = /-(\w)/g, gn = Io(
  (e) => e.replace(rl, (n, o) => o ? o.toUpperCase() : "")
), ol = /\B([A-Z])/g, Pn = Io(
  (e) => e.replace(ol, "-$1").toLowerCase()
), wa = Io((e) => e.charAt(0).toUpperCase() + e.slice(1)), mi = Io(
  (e) => e ? `on${wa(e)}` : ""
), hn = (e, n) => !Object.is(e, n), fo = (e, ...n) => {
  for (let o = 0; o < e.length; o++)
    e[o](...n);
}, Si = (e, n, o, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: o
  });
}, yo = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let Ls;
const No = () => Ls || (Ls = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function rt(e) {
  if (le(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++) {
      const s = e[o], a = Ve(s) ? ul(s) : rt(s);
      if (a)
        for (const l in a)
          n[l] = a[l];
    }
    return n;
  } else if (Ve(e) || je(e))
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
  if (Ve(e))
    n = e;
  else if (le(e))
    for (let o = 0; o < e.length; o++) {
      const s = Gi(e[o]);
      s && (n += s + " ");
    }
  else if (je(e))
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
    o = Dr(e[s], n[s]);
  return o;
}
function Dr(e, n) {
  if (e === n) return !0;
  let o = js(e), s = js(n);
  if (o || s)
    return o && s ? e.getTime() === n.getTime() : !1;
  if (o = Bt(e), s = Bt(n), o || s)
    return e === n;
  if (o = le(e), s = le(n), o || s)
    return o && s ? fl(e, n) : !1;
  if (o = je(e), s = je(n), o || s) {
    if (!o || !s)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(n).length;
    if (a !== l)
      return !1;
    for (const d in e) {
      const p = e.hasOwnProperty(d), m = n.hasOwnProperty(d);
      if (p && !m || !p && m || !Dr(e[d], n[d]))
        return !1;
    }
  }
  return String(e) === String(n);
}
function qi(e, n) {
  return e.findIndex((o) => Dr(o, n));
}
const Oa = (e) => !!(e && e.__v_isRef === !0), pt = (e) => Ve(e) ? e : e == null ? "" : le(e) || je(e) && (e.toString === va || !de(e.toString)) ? Oa(e) ? pt(e.value) : JSON.stringify(e, xa, 2) : String(e), xa = (e, n) => Oa(n) ? xa(e, n.value) : Yn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (o, [s, a], l) => (o[gi(s, l) + " =>"] = a, o),
    {}
  )
} : er(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((o) => gi(o))
} : Bt(n) ? gi(n) : je(n) && !le(n) && !ba(n) ? String(n) : n, gi = (e, n = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Bt(e) ? `Symbol(${(o = e.description) != null ? o : n})` : e
  );
};
var dl = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1742", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:13002", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17459713976", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "e238ea1018c1e3454fa710967d9c905a36e364f6", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_5dc2d972-730c-4ade-8393-0e717efef1f4", INVOCATION_ID: "19e9d4411c6c4d418006ef9ff7c31d6f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005513", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "e238ea1018c1e3454fa710967d9c905a36e364f6", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
let dt;
class pl {
  constructor(n = !1) {
    this.detached = n, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = dt, !n && dt && (this.index = (dt.scopes || (dt.scopes = [])).push(
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
      const o = dt;
      try {
        return dt = this, n();
      } finally {
        dt = o;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = dt, dt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (dt = this.prevScope, this.prevScope = void 0);
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
  return dt;
}
let Pe;
const yi = /* @__PURE__ */ new WeakSet();
class Ta {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, dt && dt.active && dt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, yi.has(this) && (yi.delete(this), this.trigger()));
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
    this.flags |= 2, Bs(this), Ia(this);
    const n = Pe, o = St;
    Pe = this, St = !0;
    try {
      return this.fn();
    } finally {
      Na(this), Pe = n, St = o, this.flags &= -3;
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
    this.flags & 64 ? yi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
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
function Ia(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Na(e) {
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
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sr) || (e.globalVersion = Sr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ii(e))))
    return;
  e.flags |= 2;
  const n = e.dep, o = Pe, s = St;
  Pe = e, St = !0;
  try {
    Ia(e);
    const a = e.fn(e._value);
    (n.version === 0 || hn(a, e._value)) && (e.flags |= 128, e._value = a, n.version++);
  } catch (a) {
    throw n.version++, a;
  } finally {
    Pe = o, St = s, Na(e), e.flags &= -3;
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
let St = !0;
const Ca = [];
function Kt() {
  Ca.push(St), St = !1;
}
function Ut() {
  const e = Ca.pop();
  St = e === void 0 ? !0 : e;
}
function Bs(e) {
  const { cleanup: n } = e;
  if (e.cleanup = void 0, n) {
    const o = Pe;
    Pe = void 0;
    try {
      n();
    } finally {
      Pe = o;
    }
  }
}
let Sr = 0;
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
    if (!Pe || !St || Pe === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== Pe)
      o = this.activeLink = new gl(Pe, this), Pe.deps ? (o.prevDep = Pe.depsTail, Pe.depsTail.nextDep = o, Pe.depsTail = o) : Pe.deps = Pe.depsTail = o, Pa(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const s = o.nextDep;
      s.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = s), o.prevDep = Pe.depsTail, o.nextDep = void 0, Pe.depsTail.nextDep = o, Pe.depsTail = o, Pe.deps === o && (Pe.deps = s);
    }
    return o;
  }
  trigger(n) {
    this.version++, Sr++, this.notify(n);
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
const Ni = /* @__PURE__ */ new WeakMap(), Nn = Symbol(
  ""
), Ai = Symbol(
  ""
), Ir = Symbol(
  ""
);
function ot(e, n, o) {
  if (St && Pe) {
    let s = Ni.get(e);
    s || Ni.set(e, s = /* @__PURE__ */ new Map());
    let a = s.get(o);
    a || (s.set(o, a = new Xi()), a.map = s, a.key = o), a.track();
  }
}
function Yt(e, n, o, s, a, l) {
  const d = Ni.get(e);
  if (!d) {
    Sr++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if ($i(), n === "clear")
    d.forEach(p);
  else {
    const m = le(e), A = m && Vi(o);
    if (m && o === "length") {
      const x = Number(s);
      d.forEach((C, B) => {
        (B === "length" || B === Ir || !Bt(B) && B >= x) && p(C);
      });
    } else
      switch ((o !== void 0 || d.has(void 0)) && p(d.get(o)), A && p(d.get(Ir)), n) {
        case "add":
          m ? A && p(d.get("length")) : (p(d.get(Nn)), Yn(e) && p(d.get(Ai)));
          break;
        case "delete":
          m || (p(d.get(Nn)), Yn(e) && p(d.get(Ai)));
          break;
        case "set":
          Yn(e) && p(d.get(Nn));
          break;
      }
  }
  Wi();
}
function qn(e) {
  const n = ve(e);
  return n === e ? n : (ot(n, "iterate", Ir), Ot(e) ? n : n.map(Je));
}
function Ao(e) {
  return ot(e = ve(e), "iterate", Ir), e;
}
const yl = {
  __proto__: null,
  [Symbol.iterator]() {
    return _i(this, Symbol.iterator, Je);
  },
  concat(...e) {
    return qn(this).concat(
      ...e.map((n) => le(n) ? qn(n) : n)
    );
  },
  entries() {
    return _i(this, "entries", (e) => (e[1] = Je(e[1]), e));
  },
  every(e, n) {
    return qt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return qt(this, "filter", e, n, (o) => o.map(Je), arguments);
  },
  find(e, n) {
    return qt(this, "find", e, n, Je, arguments);
  },
  findIndex(e, n) {
    return qt(this, "findIndex", e, n, void 0, arguments);
  },
  findLast(e, n) {
    return qt(this, "findLast", e, n, Je, arguments);
  },
  findLastIndex(e, n) {
    return qt(this, "findLastIndex", e, n, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, n) {
    return qt(this, "forEach", e, n, void 0, arguments);
  },
  includes(...e) {
    return vi(this, "includes", e);
  },
  indexOf(...e) {
    return vi(this, "indexOf", e);
  },
  join(e) {
    return qn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return vi(this, "lastIndexOf", e);
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
    return _i(this, "values", Je);
  }
};
function _i(e, n, o) {
  const s = Ao(e), a = s[n]();
  return s !== e && !Ot(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.value && (l.value = o(l.value)), l;
  }), a;
}
const _l = Array.prototype;
function qt(e, n, o, s, a, l) {
  const d = Ao(e), p = d !== e && !Ot(e), m = d[n];
  if (m !== _l[n]) {
    const C = m.apply(e, l);
    return p ? Je(C) : C;
  }
  let A = o;
  d !== e && (p ? A = function(C, B) {
    return o.call(this, Je(C), B, e);
  } : o.length > 2 && (A = function(C, B) {
    return o.call(this, C, B, e);
  }));
  const x = m.call(d, A, s);
  return p && a ? a(x) : x;
}
function Ks(e, n, o, s) {
  const a = Ao(e);
  let l = o;
  return a !== e && (Ot(e) ? o.length > 3 && (l = function(d, p, m) {
    return o.call(this, d, p, m, e);
  }) : l = function(d, p, m) {
    return o.call(this, d, Je(p), m, e);
  }), a[n](l, ...s);
}
function vi(e, n, o) {
  const s = ve(e);
  ot(s, "iterate", Ir);
  const a = s[n](...o);
  return (a === -1 || a === !1) && Ji(o[0]) ? (o[0] = ve(o[0]), s[n](...o)) : a;
}
function mr(e, n, o = []) {
  Kt(), $i();
  const s = ve(e)[n].apply(e, o);
  return Wi(), Ut(), s;
}
const vl = /* @__PURE__ */ Ui("__proto__,__v_isRef,__isVue"), ka = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Bt)
);
function bl(e) {
  Bt(e) || (e = String(e));
  const n = ve(this);
  return ot(n, "has", e), n.hasOwnProperty(e);
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
    const d = le(n);
    if (!a) {
      let m;
      if (d && (m = yl[o]))
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
      Ze(n) ? n : s
    );
    return (Bt(o) ? ka.has(o) : vl(o)) || (a || ot(n, "get", o), l) ? p : Ze(p) ? d && Vi(o) ? p : p.value : je(p) ? a ? Ha(p) : zi(p) : p;
  }
}
class Ma extends Da {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, o, s, a) {
    let l = n[o];
    if (!this._isShallow) {
      const m = yn(l);
      if (!Ot(s) && !yn(s) && (l = ve(l), s = ve(s)), !le(n) && Ze(l) && !Ze(s))
        return m ? !1 : (l.value = s, !0);
    }
    const d = le(n) && Vi(o) ? Number(o) < n.length : Te(n, o), p = Reflect.set(
      n,
      o,
      s,
      Ze(n) ? n : a
    );
    return n === ve(a) && (d ? hn(s, l) && Yt(n, "set", o, s) : Yt(n, "add", o, s)), p;
  }
  deleteProperty(n, o) {
    const s = Te(n, o);
    n[o];
    const a = Reflect.deleteProperty(n, o);
    return a && s && Yt(n, "delete", o, void 0), a;
  }
  has(n, o) {
    const s = Reflect.has(n, o);
    return (!Bt(o) || !ka.has(o)) && ot(n, "has", o), s;
  }
  ownKeys(n) {
    return ot(
      n,
      "iterate",
      le(n) ? "length" : Nn
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
const wl = /* @__PURE__ */ new Ma(), El = /* @__PURE__ */ new ja(), Ol = /* @__PURE__ */ new Ma(!0), xl = /* @__PURE__ */ new ja(!0), Ci = (e) => e, ao = (e) => Reflect.getPrototypeOf(e);
function Tl(e, n, o) {
  return function(...s) {
    const a = this.__v_raw, l = ve(a), d = Yn(l), p = e === "entries" || e === Symbol.iterator && d, m = e === "keys" && d, A = a[e](...s), x = o ? Ci : n ? _o : Je;
    return !n && ot(
      l,
      "iterate",
      m ? Ai : Nn
    ), {
      // iterator protocol
      next() {
        const { value: C, done: B } = A.next();
        return B ? { value: C, done: B } : {
          value: p ? [x(C[0]), x(C[1])] : x(C),
          done: B
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function uo(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Rl(e, n) {
  const o = {
    get(a) {
      const l = this.__v_raw, d = ve(l), p = ve(a);
      e || (hn(a, p) && ot(d, "get", a), ot(d, "get", p));
      const { has: m } = ao(d), A = n ? Ci : e ? _o : Je;
      if (m.call(d, a))
        return A(l.get(a));
      if (m.call(d, p))
        return A(l.get(p));
      l !== d && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && ot(ve(a), "iterate", Nn), Reflect.get(a, "size", a);
    },
    has(a) {
      const l = this.__v_raw, d = ve(l), p = ve(a);
      return e || (hn(a, p) && ot(d, "has", a), ot(d, "has", p)), a === p ? l.has(a) : l.has(a) || l.has(p);
    },
    forEach(a, l) {
      const d = this, p = d.__v_raw, m = ve(p), A = n ? Ci : e ? _o : Je;
      return !e && ot(m, "iterate", Nn), p.forEach((x, C) => a.call(l, A(x), A(C), d));
    }
  };
  return it(
    o,
    e ? {
      add: uo("add"),
      set: uo("set"),
      delete: uo("delete"),
      clear: uo("clear")
    } : {
      add(a) {
        !n && !Ot(a) && !yn(a) && (a = ve(a));
        const l = ve(this);
        return ao(l).has.call(l, a) || (l.add(a), Yt(l, "add", a, a)), this;
      },
      set(a, l) {
        !n && !Ot(l) && !yn(l) && (l = ve(l));
        const d = ve(this), { has: p, get: m } = ao(d);
        let A = p.call(d, a);
        A || (a = ve(a), A = p.call(d, a));
        const x = m.call(d, a);
        return d.set(a, l), A ? hn(l, x) && Yt(d, "set", a, l) : Yt(d, "add", a, l), this;
      },
      delete(a) {
        const l = ve(this), { has: d, get: p } = ao(l);
        let m = d.call(l, a);
        m || (a = ve(a), m = d.call(l, a)), p && p.call(l, a);
        const A = l.delete(a);
        return m && Yt(l, "delete", a, void 0), A;
      },
      clear() {
        const a = ve(this), l = a.size !== 0, d = a.clear();
        return l && Yt(
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
    o[a] = Tl(a, e, n);
  }), o;
}
function Co(e, n) {
  const o = Rl(e, n);
  return (s, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? s : Reflect.get(
    Te(o, a) && a in s ? o : s,
    a,
    l
  );
}
const Sl = {
  get: /* @__PURE__ */ Co(!1, !1)
}, Il = {
  get: /* @__PURE__ */ Co(!1, !0)
}, Nl = {
  get: /* @__PURE__ */ Co(!0, !1)
}, Al = {
  get: /* @__PURE__ */ Co(!0, !0)
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
  return yn(e) ? e : Po(
    e,
    !1,
    wl,
    Sl,
    La
  );
}
function kl(e) {
  return Po(
    e,
    !1,
    Ol,
    Il,
    Ba
  );
}
function Ha(e) {
  return Po(
    e,
    !0,
    El,
    Nl,
    Ka
  );
}
function lo(e) {
  return Po(
    e,
    !0,
    xl,
    Al,
    Ua
  );
}
function Po(e, n, o, s, a) {
  if (!je(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const l = Pl(e);
  if (l === 0)
    return e;
  const d = a.get(e);
  if (d)
    return d;
  const p = new Proxy(
    e,
    l === 2 ? s : o
  );
  return a.set(e, p), p;
}
function Xn(e) {
  return yn(e) ? Xn(e.__v_raw) : !!(e && e.__v_isReactive);
}
function yn(e) {
  return !!(e && e.__v_isReadonly);
}
function Ot(e) {
  return !!(e && e.__v_isShallow);
}
function Ji(e) {
  return e ? !!e.__v_raw : !1;
}
function ve(e) {
  const n = e && e.__v_raw;
  return n ? ve(n) : e;
}
function Dl(e) {
  return !Te(e, "__v_skip") && Object.isExtensible(e) && Si(e, "__v_skip", !0), e;
}
const Je = (e) => je(e) ? zi(e) : e, _o = (e) => je(e) ? Ha(e) : e;
function Ze(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function jt(e) {
  return Ml(e, !1);
}
function Ml(e, n) {
  return Ze(e) ? e : new jl(e, n);
}
class jl {
  constructor(n, o) {
    this.dep = new Xi(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? n : ve(n), this._value = o ? n : Je(n), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const o = this._rawValue, s = this.__v_isShallow || Ot(n) || yn(n);
    n = s ? n : ve(n), hn(n, o) && (this._rawValue = n, this._value = s ? n : Je(n), this.dep.trigger());
  }
}
function An(e) {
  return Ze(e) ? e.value : e;
}
const Ll = {
  get: (e, n, o) => n === "__v_raw" ? e : An(Reflect.get(e, n, o)),
  set: (e, n, o, s) => {
    const a = e[n];
    return Ze(a) && !Ze(o) ? (a.value = o, !0) : Reflect.set(e, n, o, s);
  }
};
function Fa(e) {
  return Xn(e) ? e : new Proxy(e, Ll);
}
class Bl {
  constructor(n, o, s) {
    this.fn = n, this.setter = o, this._value = void 0, this.dep = new Xi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Pe !== this)
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
const co = {}, vo = /* @__PURE__ */ new WeakMap();
let In;
function Ul(e, n = !1, o = In) {
  if (o) {
    let s = vo.get(o);
    s || vo.set(o, s = []), s.push(e);
  }
}
function Hl(e, n, o = Ce) {
  const { immediate: s, deep: a, once: l, scheduler: d, augmentJob: p, call: m } = o, A = (ae) => a ? ae : Ot(ae) || a === !1 || a === 0 ? Xt(ae, 1) : Xt(ae);
  let x, C, B, L, M = !1, $ = !1;
  if (Ze(e) ? (C = () => e.value, M = Ot(e)) : Xn(e) ? (C = () => A(e), M = !0) : le(e) ? ($ = !0, M = e.some((ae) => Xn(ae) || Ot(ae)), C = () => e.map((ae) => {
    if (Ze(ae))
      return ae.value;
    if (Xn(ae))
      return A(ae);
    if (de(ae))
      return m ? m(ae, 2) : ae();
  })) : de(e) ? n ? C = m ? () => m(e, 2) : e : C = () => {
    if (B) {
      Kt();
      try {
        B();
      } finally {
        Ut();
      }
    }
    const ae = In;
    In = x;
    try {
      return m ? m(e, 3, [L]) : e(L);
    } finally {
      In = ae;
    }
  } : C = Rt, n && a) {
    const ae = C, Ie = a === !0 ? 1 / 0 : a;
    C = () => Xt(ae(), Ie);
  }
  const Re = hl(), we = () => {
    x.stop(), Re && Re.active && Fi(Re.effects, x);
  };
  if (l && n) {
    const ae = n;
    n = (...Ie) => {
      ae(...Ie), we();
    };
  }
  let Ee = $ ? new Array(e.length).fill(co) : co;
  const Oe = (ae) => {
    if (!(!(x.flags & 1) || !x.dirty && !ae))
      if (n) {
        const Ie = x.run();
        if (a || M || ($ ? Ie.some((Ne, Se) => hn(Ne, Ee[Se])) : hn(Ie, Ee))) {
          B && B();
          const Ne = In;
          In = x;
          try {
            const Se = [
              Ie,
              // pass undefined as the old value when it's changed for the first time
              Ee === co ? void 0 : $ && Ee[0] === co ? [] : Ee,
              L
            ];
            Ee = Ie, m ? m(n, 3, Se) : (
              // @ts-expect-error
              n(...Se)
            );
          } finally {
            In = Ne;
          }
        }
      } else
        x.run();
  };
  return p && p(Oe), x = new Ta(C), x.scheduler = d ? () => d(Oe, !1) : Oe, L = (ae) => Ul(ae, !1, x), B = x.onStop = () => {
    const ae = vo.get(x);
    if (ae) {
      if (m)
        m(ae, 4);
      else
        for (const Ie of ae) Ie();
      vo.delete(x);
    }
  }, n ? s ? Oe(!0) : Ee = x.run() : d ? d(Oe.bind(null, !0), !0) : x.run(), we.pause = x.pause.bind(x), we.resume = x.resume.bind(x), we.stop = we, we;
}
function Xt(e, n = 1 / 0, o) {
  if (n <= 0 || !je(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), n--, Ze(e))
    Xt(e.value, n, o);
  else if (le(e))
    for (let s = 0; s < e.length; s++)
      Xt(e[s], n, o);
  else if (er(e) || Yn(e))
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
var ln = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1742", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:13002", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17459713976", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "e238ea1018c1e3454fa710967d9c905a36e364f6", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_5dc2d972-730c-4ade-8393-0e717efef1f4", INVOCATION_ID: "19e9d4411c6c4d418006ef9ff7c31d6f", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "14", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005513", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "e238ea1018c1e3454fa710967d9c905a36e364f6", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_4a99cfab-49c4-4b42-b17d-d57b8bebd95a", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const Er = [];
let bi = !1;
function Fl(e, ...n) {
  if (bi) return;
  bi = !0, Kt();
  const o = Er.length ? Er[Er.length - 1].component : null, s = o && o.appContext.config.warnHandler, a = Vl();
  if (s)
    tr(
      s,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((l) => {
          var d, p;
          return (p = (d = l.toString) == null ? void 0 : d.call(l)) != null ? p : JSON.stringify(l);
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
  Ut(), bi = !1;
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
  return Ve(n) ? (n = JSON.stringify(n), o ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? o ? n : [`${e}=${n}`] : Ze(n) ? (n = Va(e, ve(n.value), !0), o ? n : [`${e}=Ref<`, n, ">"]) : de(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = ve(n), o ? n : [`${e}=`, n]);
}
function tr(e, n, o, s) {
  try {
    return s ? e(...s) : e();
  } catch (a) {
    ko(a, n, o);
  }
}
function Ht(e, n, o, s) {
  if (de(e)) {
    const a = tr(e, n, o, s);
    return a && _a(a) && a.catch((l) => {
      ko(l, n, o);
    }), a;
  }
  if (le(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(Ht(e[l], n, o, s));
    return a;
  }
}
function ko(e, n, o, s = !0) {
  const a = n ? n.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: d } = n && n.appContext.config || Ce;
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
      Kt(), tr(l, null, 10, [
        e,
        m,
        A
      ]), Ut();
      return;
    }
  }
  Wl(e, o, a, s, d);
}
function Wl(e, n, o, s = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const lt = [];
let Mt = -1;
const zn = [];
let cn = null, $n = 0;
const Ga = /* @__PURE__ */ Promise.resolve();
let bo = null;
function qa(e) {
  const n = bo || Ga;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function Yl(e) {
  let n = Mt + 1, o = lt.length;
  for (; n < o; ) {
    const s = n + o >>> 1, a = lt[s], l = Nr(a);
    l < e || l === e && a.flags & 2 ? n = s + 1 : o = s;
  }
  return n;
}
function Qi(e) {
  if (!(e.flags & 1)) {
    const n = Nr(e), o = lt[lt.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= Nr(o) ? lt.push(e) : lt.splice(Yl(n), 0, e), e.flags |= 1, $a();
  }
}
function $a() {
  bo || (bo = Ga.then(Ya));
}
function Xl(e) {
  le(e) ? zn.push(...e) : cn && e.id === -1 ? cn.splice($n + 1, 0, e) : e.flags & 1 || (zn.push(e), e.flags |= 1), $a();
}
function Us(e, n, o = Mt + 1) {
  for (; o < lt.length; o++) {
    const s = lt[o];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      lt.splice(o, 1), o--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Wa(e) {
  if (zn.length) {
    const n = [...new Set(zn)].sort(
      (o, s) => Nr(o) - Nr(s)
    );
    if (zn.length = 0, cn) {
      cn.push(...n);
      return;
    }
    for (cn = n, $n = 0; $n < cn.length; $n++) {
      const o = cn[$n];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    cn = null, $n = 0;
  }
}
const Nr = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ya(e) {
  const n = Rt;
  try {
    for (Mt = 0; Mt < lt.length; Mt++) {
      const o = lt[Mt];
      o && !(o.flags & 8) && (ln.NODE_ENV !== "production" && n(o), o.flags & 4 && (o.flags &= -2), tr(
        o,
        o.i,
        o.i ? 15 : 14
      ), o.flags & 4 || (o.flags &= -2));
    }
  } finally {
    for (; Mt < lt.length; Mt++) {
      const o = lt[Mt];
      o && (o.flags &= -2);
    }
    Mt = -1, lt.length = 0, Wa(), bo = null, (lt.length || zn.length) && Ya();
  }
}
let gt = null, Xa = null;
function wo(e) {
  const n = gt;
  return gt = e, Xa = e && e.type.__scopeId || null, n;
}
function zl(e, n = gt, o) {
  if (!n || e._n)
    return e;
  const s = (...a) => {
    s._d && Xs(-1);
    const l = wo(n);
    let d;
    try {
      d = e(...a);
    } finally {
      wo(l), s._d && Xs(1);
    }
    return d;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function $t(e, n) {
  if (gt === null)
    return e;
  const o = Lo(gt), s = e.dirs || (e.dirs = []);
  for (let a = 0; a < n.length; a++) {
    let [l, d, p, m = Ce] = n[a];
    l && (de(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Xt(d), s.push({
      dir: l,
      instance: o,
      value: d,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return e;
}
function Rn(e, n, o, s) {
  const a = e.dirs, l = n && n.dirs;
  for (let d = 0; d < a.length; d++) {
    const p = a[d];
    l && (p.oldValue = l[d].value);
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
function nr(e, n) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    it({ name: e.name }, n, { setup: e })
  ) : e;
}
function za(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Or(e, n, o, s, a = !1) {
  if (le(e)) {
    e.forEach(
      (M, $) => Or(
        M,
        n && (le(n) ? n[$] : n),
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
  const l = s.shapeFlag & 4 ? Lo(s.component) : s.el, d = a ? null : l, { i: p, r: m } = e, A = n && n.r, x = p.refs === Ce ? p.refs = {} : p.refs, C = p.setupState, B = ve(C), L = C === Ce ? () => !1 : (M) => Te(B, M);
  if (A != null && A !== m && (Ve(A) ? (x[A] = null, L(A) && (C[A] = null)) : Ze(A) && (A.value = null)), de(m))
    tr(m, p, 12, [d, x]);
  else {
    const M = Ve(m), $ = Ze(m);
    if (M || $) {
      const Re = () => {
        if (e.f) {
          const we = M ? L(m) ? C[m] : x[m] : m.value;
          a ? le(we) && Fi(we, l) : le(we) ? we.includes(l) || we.push(l) : M ? (x[m] = [l], L(m) && (C[m] = x[m])) : (m.value = [l], e.k && (x[e.k] = m.value));
        } else M ? (x[m] = d, L(m) && (C[m] = d)) : $ && (m.value = d, e.k && (x[e.k] = d));
      };
      d ? (Re.id = -1, mt(Re, o)) : Re();
    }
  }
}
No().requestIdleCallback;
No().cancelIdleCallback;
const xr = (e) => !!e.type.__asyncLoader, Ja = (e) => e.type.__isKeepAlive;
function Zl(e, n) {
  Qa(e, "a", n);
}
function ec(e, n) {
  Qa(e, "da", n);
}
function Qa(e, n, o = Qe) {
  const s = e.__wdc || (e.__wdc = () => {
    let a = o;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (Do(n, s, o), o) {
    let a = o.parent;
    for (; a && a.parent; )
      Ja(a.parent.vnode) && tc(s, n, o, a), a = a.parent;
  }
}
function tc(e, n, o, s) {
  const a = Do(
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
function Do(e, n, o = Qe, s = !1) {
  if (o) {
    const a = o[e] || (o[e] = []), l = n.__weh || (n.__weh = (...d) => {
      Kt();
      const p = Mr(o), m = Ht(n, o, e, d);
      return p(), Ut(), m;
    });
    return s ? a.unshift(l) : a.push(l), l;
  }
}
const Jt = (e) => (n, o = Qe) => {
  (!Cr || e === "sp") && Do(e, (...s) => n(...s), o);
}, nc = Jt("bm"), Za = Jt("m"), rc = Jt(
  "bu"
), oc = Jt("u"), ic = Jt(
  "bum"
), es = Jt("um"), sc = Jt(
  "sp"
), ac = Jt("rtg"), uc = Jt("rtc");
function lc(e, n = Qe) {
  Do("ec", e, n);
}
const cc = Symbol.for("v-ndc");
function Cn(e, n, o, s) {
  let a;
  const l = o, d = le(e);
  if (d || Ve(e)) {
    const p = d && Xn(e);
    let m = !1, A = !1;
    p && (m = !Ot(e), A = yn(e), e = Ao(e)), a = new Array(e.length);
    for (let x = 0, C = e.length; x < C; x++)
      a[x] = n(
        m ? A ? _o(Je(e[x])) : Je(e[x]) : e[x],
        x,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let p = 0; p < e; p++)
      a[p] = n(p + 1, p, void 0, l);
  } else if (je(e))
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
const Pi = (e) => e ? wu(e) ? Lo(e) : Pi(e.parent) : null, Tr = (
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
    $parent: (e) => Pi(e.parent),
    $root: (e) => Pi(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => tu(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Qi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = qa.bind(e.proxy)),
    $watch: (e) => Pc.bind(e)
  })
), wi = (e, n) => e !== Ce && !e.__isScriptSetup && Te(e, n), fc = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: o, setupState: s, data: a, props: l, accessCache: d, type: p, appContext: m } = e;
    let A;
    if (n[0] !== "$") {
      const L = d[n];
      if (L !== void 0)
        switch (L) {
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
        if (wi(s, n))
          return d[n] = 1, s[n];
        if (a !== Ce && Te(a, n))
          return d[n] = 2, a[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (A = e.propsOptions[0]) && Te(A, n)
        )
          return d[n] = 3, l[n];
        if (o !== Ce && Te(o, n))
          return d[n] = 4, o[n];
        ki && (d[n] = 0);
      }
    }
    const x = Tr[n];
    let C, B;
    if (x)
      return n === "$attrs" && ot(e.attrs, "get", ""), x(e);
    if (
      // css module (injected by vue-loader)
      (C = p.__cssModules) && (C = C[n])
    )
      return C;
    if (o !== Ce && Te(o, n))
      return d[n] = 4, o[n];
    if (
      // global properties
      B = m.config.globalProperties, Te(B, n)
    )
      return B[n];
  },
  set({ _: e }, n, o) {
    const { data: s, setupState: a, ctx: l } = e;
    return wi(a, n) ? (a[n] = o, !0) : s !== Ce && Te(s, n) ? (s[n] = o, !0) : Te(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (l[n] = o, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: o, ctx: s, appContext: a, propsOptions: l }
  }, d) {
    let p;
    return !!o[d] || e !== Ce && Te(e, d) || wi(n, d) || (p = l[0]) && Te(p, d) || Te(s, d) || Te(Tr, d) || Te(a.config.globalProperties, d);
  },
  defineProperty(e, n, o) {
    return o.get != null ? e._.accessCache[n] = 0 : Te(o, "value") && this.set(e, n, o.value, null), Reflect.defineProperty(e, n, o);
  }
};
function Hs(e) {
  return le(e) ? e.reduce(
    (n, o) => (n[o] = null, n),
    {}
  ) : e;
}
let ki = !0;
function dc(e) {
  const n = tu(e), o = e.proxy, s = e.ctx;
  ki = !1, n.beforeCreate && Fs(n.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: d,
    watch: p,
    provide: m,
    inject: A,
    // lifecycle
    created: x,
    beforeMount: C,
    mounted: B,
    beforeUpdate: L,
    updated: M,
    activated: $,
    deactivated: Re,
    beforeDestroy: we,
    beforeUnmount: Ee,
    destroyed: Oe,
    unmounted: ae,
    render: Ie,
    renderTracked: Ne,
    renderTriggered: Se,
    errorCaptured: _t,
    serverPrefetch: kn,
    // public API
    expose: Nt,
    inheritAttrs: Qt,
    // assets
    components: At,
    directives: vt,
    filters: rr
  } = n;
  if (A && pc(A, s, null), d)
    for (const De in d) {
      const ge = d[De];
      de(ge) && (s[De] = ge.bind(o));
    }
  if (a) {
    const De = a.call(o, o);
    je(De) && (e.data = zi(De));
  }
  if (ki = !0, l)
    for (const De in l) {
      const ge = l[De], ct = de(ge) ? ge.bind(o, o) : de(ge.get) ? ge.get.bind(o, o) : Rt, ft = !de(ge) && de(ge.set) ? ge.set.bind(o) : Rt, xt = pn({
        get: ct,
        set: ft
      });
      Object.defineProperty(s, De, {
        enumerable: !0,
        configurable: !0,
        get: () => xt.value,
        set: (bt) => xt.value = bt
      });
    }
  if (p)
    for (const De in p)
      eu(p[De], s, o, De);
  if (m) {
    const De = de(m) ? m.call(o) : m;
    Reflect.ownKeys(De).forEach((ge) => {
      vc(ge, De[ge]);
    });
  }
  x && Fs(x, e, "c");
  function qe(De, ge) {
    le(ge) ? ge.forEach((ct) => De(ct.bind(o))) : ge && De(ge.bind(o));
  }
  if (qe(nc, C), qe(Za, B), qe(rc, L), qe(oc, M), qe(Zl, $), qe(ec, Re), qe(lc, _t), qe(uc, Ne), qe(ac, Se), qe(ic, Ee), qe(es, ae), qe(sc, kn), le(Nt))
    if (Nt.length) {
      const De = e.exposed || (e.exposed = {});
      Nt.forEach((ge) => {
        Object.defineProperty(De, ge, {
          get: () => o[ge],
          set: (ct) => o[ge] = ct
        });
      });
    } else e.exposed || (e.exposed = {});
  Ie && e.render === Rt && (e.render = Ie), Qt != null && (e.inheritAttrs = Qt), At && (e.components = At), vt && (e.directives = vt), kn && za(e);
}
function pc(e, n, o = Rt) {
  le(e) && (e = Di(e));
  for (const s in e) {
    const a = e[s];
    let l;
    je(a) ? "default" in a ? l = po(
      a.from || s,
      a.default,
      !0
    ) : l = po(a.from || s) : l = po(a), Ze(l) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (d) => l.value = d
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
  if (Ve(e)) {
    const l = n[e];
    de(l) && mn(a, l);
  } else if (de(e))
    mn(a, e.bind(o));
  else if (je(e))
    if (le(e))
      e.forEach((l) => eu(l, n, o, s));
    else {
      const l = de(e.handler) ? e.handler.bind(o) : n[e.handler];
      de(l) && mn(a, l, e);
    }
}
function tu(e) {
  const n = e.type, { mixins: o, extends: s } = n, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: d }
  } = e.appContext, p = l.get(n);
  let m;
  return p ? m = p : !a.length && !o && !s ? m = n : (m = {}, a.length && a.forEach(
    (A) => Eo(m, A, d, !0)
  ), Eo(m, n, d)), je(n) && l.set(n, m), m;
}
function Eo(e, n, o, s = !1) {
  const { mixins: a, extends: l } = n;
  l && Eo(e, l, o, !0), a && a.forEach(
    (d) => Eo(e, d, o, !0)
  );
  for (const d in n)
    if (!(s && d === "expose")) {
      const p = hc[d] || o && o[d];
      e[d] = p ? p(e[d], n[d]) : n[d];
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
    return it(
      de(e) ? e.call(this, this) : e,
      de(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function mc(e, n) {
  return _r(Di(e), Di(n));
}
function Di(e) {
  if (le(e)) {
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
function _r(e, n) {
  return e ? it(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Gs(e, n) {
  return e ? le(e) && le(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : it(
    /* @__PURE__ */ Object.create(null),
    Hs(e),
    Hs(n ?? {})
  ) : n;
}
function gc(e, n) {
  if (!e) return n;
  if (!n) return e;
  const o = it(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    o[s] = ut(e[s], n[s]);
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
    de(s) || (s = it({}, s)), a != null && !je(a) && (a = null);
    const l = nu(), d = /* @__PURE__ */ new WeakSet(), p = [];
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
        return d.has(x) || (x && de(x.install) ? (d.add(x), x.install(A, ...C)) : de(x) && (d.add(x), x(A, ...C))), A;
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
      mount(x, C, B) {
        if (!m) {
          const L = A._ceVNode || It(s, a);
          return L.appContext = l, B === !0 ? B = "svg" : B === !1 && (B = void 0), e(L, x, B), m = !0, A._container = x, x.__vue_app__ = A, Lo(L.component);
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
        const C = Jn;
        Jn = A;
        try {
          return x();
        } finally {
          Jn = C;
        }
      }
    };
    return A;
  };
}
let Jn = null;
function vc(e, n) {
  if (Qe) {
    let o = Qe.provides;
    const s = Qe.parent && Qe.parent.provides;
    s === o && (o = Qe.provides = Object.create(s)), o[e] = n;
  }
}
function po(e, n, o = !1) {
  const s = Qe || gt;
  if (s || Jn) {
    let a = Jn ? Jn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
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
  for (const d in e.propsOptions[0])
    d in a || (a[d] = void 0);
  o ? e.props = s ? a : kl(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function wc(e, n, o, s) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: d }
  } = e, p = ve(a), [m] = e.propsOptions;
  let A = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || d > 0) && !(d & 16)
  ) {
    if (d & 8) {
      const x = e.vnode.dynamicProps;
      for (let C = 0; C < x.length; C++) {
        let B = x[C];
        if (Mo(e.emitsOptions, B))
          continue;
        const L = n[B];
        if (m)
          if (Te(l, B))
            L !== l[B] && (l[B] = L, A = !0);
          else {
            const M = gn(B);
            a[M] = Mi(
              m,
              p,
              M,
              L,
              e,
              !1
            );
          }
        else
          L !== l[B] && (l[B] = L, A = !0);
      }
    }
  } else {
    su(e, n, a, l) && (A = !0);
    let x;
    for (const C in p)
      (!n || // for camelCase
      !Te(n, C) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((x = Pn(C)) === C || !Te(n, x))) && (m ? o && // for camelCase
      (o[C] !== void 0 || // for kebab-case
      o[x] !== void 0) && (a[C] = Mi(
        m,
        p,
        C,
        void 0,
        e,
        !0
      )) : delete a[C]);
    if (l !== p)
      for (const C in l)
        (!n || !Te(n, C)) && (delete l[C], A = !0);
  }
  A && Yt(e.attrs, "set", "");
}
function su(e, n, o, s) {
  const [a, l] = e.propsOptions;
  let d = !1, p;
  if (n)
    for (let m in n) {
      if (vr(m))
        continue;
      const A = n[m];
      let x;
      a && Te(a, x = gn(m)) ? !l || !l.includes(x) ? o[x] = A : (p || (p = {}))[x] = A : Mo(e.emitsOptions, m) || (!(m in s) || A !== s[m]) && (s[m] = A, d = !0);
    }
  if (l) {
    const m = ve(o), A = p || Ce;
    for (let x = 0; x < l.length; x++) {
      const C = l[x];
      o[C] = Mi(
        a,
        m,
        C,
        A[C],
        e,
        !Te(A, C)
      );
    }
  }
  return d;
}
function Mi(e, n, o, s, a, l) {
  const d = e[o];
  if (d != null) {
    const p = Te(d, "default");
    if (p && s === void 0) {
      const m = d.default;
      if (d.type !== Function && !d.skipFactory && de(m)) {
        const { propsDefaults: A } = a;
        if (o in A)
          s = A[o];
        else {
          const x = Mr(a);
          s = A[o] = m.call(
            null,
            n
          ), x();
        }
      } else
        s = m;
      a.ce && a.ce._setProp(o, s);
    }
    d[
      0
      /* shouldCast */
    ] && (l && !p ? s = !1 : d[
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
  const l = e.props, d = {}, p = [];
  let m = !1;
  if (!de(e)) {
    const x = (C) => {
      m = !0;
      const [B, L] = au(C, n, !0);
      it(d, B), L && p.push(...L);
    };
    !o && n.mixins.length && n.mixins.forEach(x), e.extends && x(e.extends), e.mixins && e.mixins.forEach(x);
  }
  if (!l && !m)
    return je(e) && s.set(e, Wn), Wn;
  if (le(l))
    for (let x = 0; x < l.length; x++) {
      const C = gn(l[x]);
      qs(C) && (d[C] = Ce);
    }
  else if (l)
    for (const x in l) {
      const C = gn(x);
      if (qs(C)) {
        const B = l[x], L = d[C] = le(B) || de(B) ? { type: B } : it({}, B), M = L.type;
        let $ = !1, Re = !0;
        if (le(M))
          for (let we = 0; we < M.length; ++we) {
            const Ee = M[we], Oe = de(Ee) && Ee.name;
            if (Oe === "Boolean") {
              $ = !0;
              break;
            } else Oe === "String" && (Re = !1);
          }
        else
          $ = de(M) && M.name === "Boolean";
        L[
          0
          /* shouldCast */
        ] = $, L[
          1
          /* shouldCastTrue */
        ] = Re, ($ || Te(L, "default")) && p.push(C);
      }
    }
  const A = [d, p];
  return je(e) && s.set(e, A), A;
}
function qs(e) {
  return e[0] !== "$" && !vr(e);
}
const ts = (e) => e[0] === "_" || e === "$stable", ns = (e) => le(e) ? e.map(Lt) : [Lt(e)], Oc = (e, n, o) => {
  if (n._n)
    return n;
  const s = zl((...a) => (ln.NODE_ENV !== "production" && Qe && !(o === null && gt) && (o && (o.root, Qe.root)), ns(n(...a))), o);
  return s._c = !1, s;
}, uu = (e, n, o) => {
  const s = e._ctx;
  for (const a in e) {
    if (ts(a)) continue;
    const l = e[a];
    if (de(l))
      n[a] = Oc(a, l, s);
    else if (l != null) {
      const d = ns(l);
      n[a] = () => d;
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
    a && Si(s, "__", a, !0);
    const l = n._;
    l ? (cu(s, n, o), o && Si(s, "_", l, !0)) : uu(n, s);
  } else n && lu(e, n);
}, Tc = (e, n, o) => {
  const { vnode: s, slots: a } = e;
  let l = !0, d = Ce;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? o && p === 1 ? l = !1 : cu(a, n, o) : (l = !n.$stable, uu(n, a)), d = n;
  } else n && (lu(e, n), d = { default: 1 });
  if (l)
    for (const p in a)
      !ts(p) && d[p] == null && delete a[p];
}, mt = Kc;
function Rc(e) {
  return Sc(e);
}
function Sc(e, n) {
  const o = No();
  o.__VUE__ = !0;
  const {
    insert: s,
    remove: a,
    patchProp: l,
    createElement: d,
    createText: p,
    createComment: m,
    setText: A,
    setElementText: x,
    parentNode: C,
    nextSibling: B,
    setScopeId: L = Rt,
    insertStaticContent: M
  } = e, $ = (g, w, j, H = null, U = null, F = null, Q = void 0, X = null, W = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !gr(g, w) && (H = Zt(g), bt(g, U, F, !0), g = null), w.patchFlag === -2 && (W = !1, w.dynamicChildren = null);
    const { type: K, ref: se, shapeFlag: z } = w;
    switch (K) {
      case jo:
        Re(g, w, j, H);
        break;
      case _n:
        we(g, w, j, H);
        break;
      case Oi:
        g == null && Ee(w, j, H, Q);
        break;
      case ze:
        At(
          g,
          w,
          j,
          H,
          U,
          F,
          Q,
          X,
          W
        );
        break;
      default:
        z & 1 ? Ie(
          g,
          w,
          j,
          H,
          U,
          F,
          Q,
          X,
          W
        ) : z & 6 ? vt(
          g,
          w,
          j,
          H,
          U,
          F,
          Q,
          X,
          W
        ) : (z & 64 || z & 128) && K.process(
          g,
          w,
          j,
          H,
          U,
          F,
          Q,
          X,
          W,
          en
        );
    }
    se != null && U ? Or(se, g && g.ref, F, w || g, !w) : se == null && g && g.ref != null && Or(g.ref, null, F, g, !0);
  }, Re = (g, w, j, H) => {
    if (g == null)
      s(
        w.el = p(w.children),
        j,
        H
      );
    else {
      const U = w.el = g.el;
      w.children !== g.children && A(U, w.children);
    }
  }, we = (g, w, j, H) => {
    g == null ? s(
      w.el = m(w.children || ""),
      j,
      H
    ) : w.el = g.el;
  }, Ee = (g, w, j, H) => {
    [g.el, g.anchor] = M(
      g.children,
      w,
      j,
      H,
      g.el,
      g.anchor
    );
  }, Oe = ({ el: g, anchor: w }, j, H) => {
    let U;
    for (; g && g !== w; )
      U = B(g), s(g, j, H), g = U;
    s(w, j, H);
  }, ae = ({ el: g, anchor: w }) => {
    let j;
    for (; g && g !== w; )
      j = B(g), a(g), g = j;
    a(w);
  }, Ie = (g, w, j, H, U, F, Q, X, W) => {
    w.type === "svg" ? Q = "svg" : w.type === "math" && (Q = "mathml"), g == null ? Ne(
      w,
      j,
      H,
      U,
      F,
      Q,
      X,
      W
    ) : kn(
      g,
      w,
      U,
      F,
      Q,
      X,
      W
    );
  }, Ne = (g, w, j, H, U, F, Q, X) => {
    let W, K;
    const { props: se, shapeFlag: z, transition: ie, dirs: ue } = g;
    if (W = g.el = d(
      g.type,
      F,
      se && se.is,
      se
    ), z & 8 ? x(W, g.children) : z & 16 && _t(
      g.children,
      W,
      null,
      H,
      U,
      Ei(g, F),
      Q,
      X
    ), ue && Rn(g, null, H, "created"), Se(W, g, g.scopeId, Q, H), se) {
      for (const ye in se)
        ye !== "value" && !vr(ye) && l(W, ye, null, se[ye], F, H);
      "value" in se && l(W, "value", null, se.value, F), (K = se.onVnodeBeforeMount) && Dt(K, H, g);
    }
    ue && Rn(g, null, H, "beforeMount");
    const pe = Ic(U, ie);
    pe && ie.beforeEnter(W), s(W, w, j), ((K = se && se.onVnodeMounted) || pe || ue) && mt(() => {
      K && Dt(K, H, g), pe && ie.enter(W), ue && Rn(g, null, H, "mounted");
    }, U);
  }, Se = (g, w, j, H, U) => {
    if (j && L(g, j), H)
      for (let F = 0; F < H.length; F++)
        L(g, H[F]);
    if (U) {
      let F = U.subTree;
      if (w === F || gu(F.type) && (F.ssContent === w || F.ssFallback === w)) {
        const Q = U.vnode;
        Se(
          g,
          Q,
          Q.scopeId,
          Q.slotScopeIds,
          U.parent
        );
      }
    }
  }, _t = (g, w, j, H, U, F, Q, X, W = 0) => {
    for (let K = W; K < g.length; K++) {
      const se = g[K] = X ? fn(g[K]) : Lt(g[K]);
      $(
        null,
        se,
        w,
        j,
        H,
        U,
        F,
        Q,
        X
      );
    }
  }, kn = (g, w, j, H, U, F, Q) => {
    const X = w.el = g.el;
    let { patchFlag: W, dynamicChildren: K, dirs: se } = w;
    W |= g.patchFlag & 16;
    const z = g.props || Ce, ie = w.props || Ce;
    let ue;
    if (j && Sn(j, !1), (ue = ie.onVnodeBeforeUpdate) && Dt(ue, j, w, g), se && Rn(w, g, j, "beforeUpdate"), j && Sn(j, !0), (z.innerHTML && ie.innerHTML == null || z.textContent && ie.textContent == null) && x(X, ""), K ? Nt(
      g.dynamicChildren,
      K,
      X,
      j,
      H,
      Ei(w, U),
      F
    ) : Q || ge(
      g,
      w,
      X,
      null,
      j,
      H,
      Ei(w, U),
      F,
      !1
    ), W > 0) {
      if (W & 16)
        Qt(X, z, ie, j, U);
      else if (W & 2 && z.class !== ie.class && l(X, "class", null, ie.class, U), W & 4 && l(X, "style", z.style, ie.style, U), W & 8) {
        const pe = w.dynamicProps;
        for (let ye = 0; ye < pe.length; ye++) {
          const be = pe[ye], Ge = z[be], $e = ie[be];
          ($e !== Ge || be === "value") && l(X, be, Ge, $e, U, j);
        }
      }
      W & 1 && g.children !== w.children && x(X, w.children);
    } else !Q && K == null && Qt(X, z, ie, j, U);
    ((ue = ie.onVnodeUpdated) || se) && mt(() => {
      ue && Dt(ue, j, w, g), se && Rn(w, g, j, "updated");
    }, H);
  }, Nt = (g, w, j, H, U, F, Q) => {
    for (let X = 0; X < w.length; X++) {
      const W = g[X], K = w[X], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        W.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (W.type === ze || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gr(W, K) || // - In the case of a component, it could contain anything.
        W.shapeFlag & 198) ? C(W.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          j
        )
      );
      $(
        W,
        K,
        se,
        null,
        H,
        U,
        F,
        Q,
        !0
      );
    }
  }, Qt = (g, w, j, H, U) => {
    if (w !== j) {
      if (w !== Ce)
        for (const F in w)
          !vr(F) && !(F in j) && l(
            g,
            F,
            w[F],
            null,
            U,
            H
          );
      for (const F in j) {
        if (vr(F)) continue;
        const Q = j[F], X = w[F];
        Q !== X && F !== "value" && l(g, F, X, Q, U, H);
      }
      "value" in j && l(g, "value", w.value, j.value, U);
    }
  }, At = (g, w, j, H, U, F, Q, X, W) => {
    const K = w.el = g ? g.el : p(""), se = w.anchor = g ? g.anchor : p("");
    let { patchFlag: z, dynamicChildren: ie, slotScopeIds: ue } = w;
    ue && (X = X ? X.concat(ue) : ue), g == null ? (s(K, j, H), s(se, j, H), _t(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      j,
      se,
      U,
      F,
      Q,
      X,
      W
    )) : z > 0 && z & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Nt(
      g.dynamicChildren,
      ie,
      j,
      U,
      F,
      Q,
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
    )) : ge(
      g,
      w,
      j,
      se,
      U,
      F,
      Q,
      X,
      W
    );
  }, vt = (g, w, j, H, U, F, Q, X, W) => {
    w.slotScopeIds = X, g == null ? w.shapeFlag & 512 ? U.ctx.activate(
      w,
      j,
      H,
      Q,
      W
    ) : rr(
      w,
      j,
      H,
      U,
      F,
      Q,
      W
    ) : Dn(g, w, W);
  }, rr = (g, w, j, H, U, F, Q) => {
    const X = g.component = $c(
      g,
      H,
      U
    );
    if (Ja(g) && (X.ctx.renderer = en), Wc(X, !1, Q), X.asyncDep) {
      if (U && U.registerDep(X, qe, Q), !g.el) {
        const W = X.subTree = It(_n);
        we(null, W, w, j);
      }
    } else
      qe(
        X,
        g,
        w,
        j,
        U,
        F,
        Q
      );
  }, Dn = (g, w, j) => {
    const H = w.component = g.component;
    if (Lc(g, w, j))
      if (H.asyncDep && !H.asyncResolved) {
        De(H, w, j);
        return;
      } else
        H.next = w, H.update();
    else
      w.el = g.el, H.vnode = w;
  }, qe = (g, w, j, H, U, F, Q) => {
    const X = () => {
      if (g.isMounted) {
        let { next: z, bu: ie, u: ue, parent: pe, vnode: ye } = g;
        {
          const We = du(g);
          if (We) {
            z && (z.el = ye.el, De(g, z, Q)), We.asyncDep.then(() => {
              g.isUnmounted || X();
            });
            return;
          }
        }
        let be = z, Ge;
        Sn(g, !1), z ? (z.el = ye.el, De(g, z, Q)) : z = ye, ie && fo(ie), (Ge = z.props && z.props.onVnodeBeforeUpdate) && Dt(Ge, pe, z, ye), Sn(g, !0);
        const $e = Ws(g), st = g.subTree;
        g.subTree = $e, $(
          st,
          $e,
          // parent may have changed if it's in a teleport
          C(st.el),
          // anchor may have changed if it's in a fragment
          Zt(st),
          g,
          U,
          F
        ), z.el = $e.el, be === null && Bc(g, $e.el), ue && mt(ue, U), (Ge = z.props && z.props.onVnodeUpdated) && mt(
          () => Dt(Ge, pe, z, ye),
          U
        );
      } else {
        let z;
        const { el: ie, props: ue } = w, { bm: pe, m: ye, parent: be, root: Ge, type: $e } = g, st = xr(w);
        Sn(g, !1), pe && fo(pe), !st && (z = ue && ue.onVnodeBeforeMount) && Dt(z, be, w), Sn(g, !0);
        {
          Ge.ce && // @ts-expect-error _def is private
          Ge.ce._def.shadowRoot !== !1 && Ge.ce._injectChildStyle($e);
          const We = g.subTree = Ws(g);
          $(
            null,
            We,
            j,
            H,
            g,
            U,
            F
          ), w.el = We.el;
        }
        if (ye && mt(ye, U), !st && (z = ue && ue.onVnodeMounted)) {
          const We = w;
          mt(
            () => Dt(z, be, We),
            U
          );
        }
        (w.shapeFlag & 256 || be && xr(be.vnode) && be.vnode.shapeFlag & 256) && g.a && mt(g.a, U), g.isMounted = !0, w = j = H = null;
      }
    };
    g.scope.on();
    const W = g.effect = new Ta(X);
    g.scope.off();
    const K = g.update = W.run.bind(W), se = g.job = W.runIfDirty.bind(W);
    se.i = g, se.id = g.uid, W.scheduler = () => Qi(se), Sn(g, !0), K();
  }, De = (g, w, j) => {
    w.component = g;
    const H = g.vnode.props;
    g.vnode = w, g.next = null, wc(g, w.props, H, j), Tc(g, w.children, j), Kt(), Us(g), Ut();
  }, ge = (g, w, j, H, U, F, Q, X, W = !1) => {
    const K = g && g.children, se = g ? g.shapeFlag : 0, z = w.children, { patchFlag: ie, shapeFlag: ue } = w;
    if (ie > 0) {
      if (ie & 128) {
        ft(
          K,
          z,
          j,
          H,
          U,
          F,
          Q,
          X,
          W
        );
        return;
      } else if (ie & 256) {
        ct(
          K,
          z,
          j,
          H,
          U,
          F,
          Q,
          X,
          W
        );
        return;
      }
    }
    ue & 8 ? (se & 16 && wt(K, U, F), z !== K && x(j, z)) : se & 16 ? ue & 16 ? ft(
      K,
      z,
      j,
      H,
      U,
      F,
      Q,
      X,
      W
    ) : wt(K, U, F, !0) : (se & 8 && x(j, ""), ue & 16 && _t(
      z,
      j,
      H,
      U,
      F,
      Q,
      X,
      W
    ));
  }, ct = (g, w, j, H, U, F, Q, X, W) => {
    g = g || Wn, w = w || Wn;
    const K = g.length, se = w.length, z = Math.min(K, se);
    let ie;
    for (ie = 0; ie < z; ie++) {
      const ue = w[ie] = W ? fn(w[ie]) : Lt(w[ie]);
      $(
        g[ie],
        ue,
        j,
        null,
        U,
        F,
        Q,
        X,
        W
      );
    }
    K > se ? wt(
      g,
      U,
      F,
      !0,
      !1,
      z
    ) : _t(
      w,
      j,
      H,
      U,
      F,
      Q,
      X,
      W,
      z
    );
  }, ft = (g, w, j, H, U, F, Q, X, W) => {
    let K = 0;
    const se = w.length;
    let z = g.length - 1, ie = se - 1;
    for (; K <= z && K <= ie; ) {
      const ue = g[K], pe = w[K] = W ? fn(w[K]) : Lt(w[K]);
      if (gr(ue, pe))
        $(
          ue,
          pe,
          j,
          null,
          U,
          F,
          Q,
          X,
          W
        );
      else
        break;
      K++;
    }
    for (; K <= z && K <= ie; ) {
      const ue = g[z], pe = w[ie] = W ? fn(w[ie]) : Lt(w[ie]);
      if (gr(ue, pe))
        $(
          ue,
          pe,
          j,
          null,
          U,
          F,
          Q,
          X,
          W
        );
      else
        break;
      z--, ie--;
    }
    if (K > z) {
      if (K <= ie) {
        const ue = ie + 1, pe = ue < se ? w[ue].el : H;
        for (; K <= ie; )
          $(
            null,
            w[K] = W ? fn(w[K]) : Lt(w[K]),
            j,
            pe,
            U,
            F,
            Q,
            X,
            W
          ), K++;
      }
    } else if (K > ie)
      for (; K <= z; )
        bt(g[K], U, F, !0), K++;
    else {
      const ue = K, pe = K, ye = /* @__PURE__ */ new Map();
      for (K = pe; K <= ie; K++) {
        const Be = w[K] = W ? fn(w[K]) : Lt(w[K]);
        Be.key != null && ye.set(Be.key, K);
      }
      let be, Ge = 0;
      const $e = ie - pe + 1;
      let st = !1, We = 0;
      const Ct = new Array($e);
      for (K = 0; K < $e; K++) Ct[K] = 0;
      for (K = ue; K <= z; K++) {
        const Be = g[K];
        if (Ge >= $e) {
          bt(Be, U, F, !0);
          continue;
        }
        let ne;
        if (Be.key != null)
          ne = ye.get(Be.key);
        else
          for (be = pe; be <= ie; be++)
            if (Ct[be - pe] === 0 && gr(Be, w[be])) {
              ne = be;
              break;
            }
        ne === void 0 ? bt(Be, U, F, !0) : (Ct[ne - pe] = K + 1, ne >= We ? We = ne : st = !0, $(
          Be,
          w[ne],
          j,
          null,
          U,
          F,
          Q,
          X,
          W
        ), Ge++);
      }
      const jn = st ? Nc(Ct) : Wn;
      for (be = jn.length - 1, K = $e - 1; K >= 0; K--) {
        const Be = pe + K, ne = w[Be], tn = Be + 1 < se ? w[Be + 1].el : H;
        Ct[K] === 0 ? $(
          null,
          ne,
          j,
          tn,
          U,
          F,
          Q,
          X,
          W
        ) : st && (be < 0 || K !== jn[be] ? xt(ne, j, tn, 2) : be--);
      }
    }
  }, xt = (g, w, j, H, U = null) => {
    const { el: F, type: Q, transition: X, children: W, shapeFlag: K } = g;
    if (K & 6) {
      xt(g.component.subTree, w, j, H);
      return;
    }
    if (K & 128) {
      g.suspense.move(w, j, H);
      return;
    }
    if (K & 64) {
      Q.move(g, w, j, en);
      return;
    }
    if (Q === ze) {
      s(F, w, j);
      for (let z = 0; z < W.length; z++)
        xt(W[z], w, j, H);
      s(g.anchor, w, j);
      return;
    }
    if (Q === Oi) {
      Oe(g, w, j);
      return;
    }
    if (H !== 2 && K & 1 && X)
      if (H === 0)
        X.beforeEnter(F), s(F, w, j), mt(() => X.enter(F), U);
      else {
        const { leave: z, delayLeave: ie, afterLeave: ue } = X, pe = () => {
          g.ctx.isUnmounted ? a(F) : s(F, w, j);
        }, ye = () => {
          z(F, () => {
            pe(), ue && ue();
          });
        };
        ie ? ie(F, pe, ye) : ye();
      }
    else
      s(F, w, j);
  }, bt = (g, w, j, H = !1, U = !1) => {
    const {
      type: F,
      props: Q,
      ref: X,
      children: W,
      dynamicChildren: K,
      shapeFlag: se,
      patchFlag: z,
      dirs: ie,
      cacheIndex: ue
    } = g;
    if (z === -2 && (U = !1), X != null && (Kt(), Or(X, null, j, g, !0), Ut()), ue != null && (w.renderCache[ue] = void 0), se & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const pe = se & 1 && ie, ye = !xr(g);
    let be;
    if (ye && (be = Q && Q.onVnodeBeforeUnmount) && Dt(be, w, g), se & 6)
      Mn(g.component, j, H);
    else {
      if (se & 128) {
        g.suspense.unmount(j, H);
        return;
      }
      pe && Rn(g, null, w, "beforeUnmount"), se & 64 ? g.type.remove(
        g,
        w,
        j,
        en,
        H
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== ze || z > 0 && z & 64) ? wt(
        K,
        w,
        j,
        !1,
        !0
      ) : (F === ze && z & 384 || !U && se & 16) && wt(W, w, j), H && Ft(g);
    }
    (ye && (be = Q && Q.onVnodeUnmounted) || pe) && mt(() => {
      be && Dt(be, w, g), pe && Rn(g, null, w, "unmounted");
    }, j);
  }, Ft = (g) => {
    const { type: w, el: j, anchor: H, transition: U } = g;
    if (w === ze) {
      jr(j, H);
      return;
    }
    if (w === Oi) {
      ae(g);
      return;
    }
    const F = () => {
      a(j), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (g.shapeFlag & 1 && U && !U.persisted) {
      const { leave: Q, delayLeave: X } = U, W = () => Q(j, F);
      X ? X(g.el, F, W) : W();
    } else
      F();
  }, jr = (g, w) => {
    let j;
    for (; g !== w; )
      j = B(g), a(g), g = j;
    a(w);
  }, Mn = (g, w, j) => {
    const {
      bum: H,
      scope: U,
      job: F,
      subTree: Q,
      um: X,
      m: W,
      a: K,
      parent: se,
      slots: { __: z }
    } = g;
    $s(W), $s(K), H && fo(H), se && le(z) && z.forEach((ie) => {
      se.renderCache[ie] = void 0;
    }), U.stop(), F && (F.flags |= 8, bt(Q, g, w, j)), X && mt(X, w), mt(() => {
      g.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, wt = (g, w, j, H = !1, U = !1, F = 0) => {
    for (let Q = F; Q < g.length; Q++)
      bt(g[Q], w, j, H, U);
  }, Zt = (g) => {
    if (g.shapeFlag & 6)
      return Zt(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = B(g.anchor || g.el), j = w && w[Jl];
    return j ? B(j) : w;
  };
  let or = !1;
  const oe = (g, w, j) => {
    g == null ? w._vnode && bt(w._vnode, null, null, !0) : $(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      j
    ), w._vnode = g, or || (or = !0, Us(), Wa(), or = !1);
  }, en = {
    p: $,
    um: bt,
    m: xt,
    r: Ft,
    mt: rr,
    mc: _t,
    pc: ge,
    pbc: Nt,
    n: Zt,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: _c(oe)
  };
}
function Ei({ type: e, props: n }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : o;
}
function Sn({ effect: e, job: n }, o) {
  o ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Ic(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function fu(e, n, o = !1) {
  const s = e.children, a = n.children;
  if (le(s) && le(a))
    for (let l = 0; l < s.length; l++) {
      const d = s[l];
      let p = a[l];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = a[l] = fn(a[l]), p.el = d.el), !o && p.patchFlag !== -2 && fu(d, p)), p.type === jo && (p.el = d.el), p.type === _n && !p.el && (p.el = d.el);
    }
}
function Nc(e) {
  const n = e.slice(), o = [0];
  let s, a, l, d, p;
  const m = e.length;
  for (s = 0; s < m; s++) {
    const A = e[s];
    if (A !== 0) {
      if (a = o[o.length - 1], e[a] < A) {
        n[s] = a, o.push(s);
        continue;
      }
      for (l = 0, d = o.length - 1; l < d; )
        p = l + d >> 1, e[o[p]] < A ? l = p + 1 : d = p;
      A < e[o[l]] && (l > 0 && (n[s] = o[l - 1]), o[l] = s);
    }
  }
  for (l = o.length, d = o[l - 1]; l-- > 0; )
    o[l] = d, d = n[d];
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
const Ac = Symbol.for("v-scx"), Cc = () => po(Ac);
function mn(e, n, o) {
  return pu(e, n, o);
}
function pu(e, n, o = Ce) {
  const { immediate: s, deep: a, flush: l, once: d } = o, p = it({}, o), m = n && s || !n && l !== "post";
  let A;
  if (Cr) {
    if (l === "sync") {
      const L = Cc();
      A = L.__watcherHandles || (L.__watcherHandles = []);
    } else if (!m) {
      const L = () => {
      };
      return L.stop = Rt, L.resume = Rt, L.pause = Rt, L;
    }
  }
  const x = Qe;
  p.call = (L, M, $) => Ht(L, x, M, $);
  let C = !1;
  l === "post" ? p.scheduler = (L) => {
    mt(L, x && x.suspense);
  } : l !== "sync" && (C = !0, p.scheduler = (L, M) => {
    M ? L() : Qi(L);
  }), p.augmentJob = (L) => {
    n && (L.flags |= 4), C && (L.flags |= 2, x && (L.id = x.uid, L.i = x));
  };
  const B = Hl(e, n, p);
  return Cr && (A ? A.push(B) : m && B()), B;
}
function Pc(e, n, o) {
  const s = this.proxy, a = Ve(e) ? e.includes(".") ? hu(s, e) : () => s[e] : e.bind(s, s);
  let l;
  de(n) ? l = n : (l = n.handler, o = n);
  const d = Mr(this), p = pu(a, l.bind(s), o);
  return d(), p;
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
const kc = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${gn(n)}Modifiers`] || e[`${Pn(n)}Modifiers`];
function Dc(e, n, ...o) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ce;
  let a = o;
  const l = n.startsWith("update:"), d = l && kc(s, n.slice(7));
  d && (d.trim && (a = o.map((x) => Ve(x) ? x.trim() : x)), d.number && (a = o.map(yo)));
  let p, m = s[p = mi(n)] || // also try camelCase event handler (#2249)
  s[p = mi(gn(n))];
  !m && l && (m = s[p = mi(Pn(n))]), m && Ht(
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
  let d = {}, p = !1;
  if (!de(e)) {
    const m = (A) => {
      const x = mu(A, n, !0);
      x && (p = !0, it(d, x));
    };
    !o && n.mixins.length && n.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !p ? (je(e) && s.set(e, null), null) : (le(l) ? l.forEach((m) => d[m] = null) : it(d, l), je(e) && s.set(e, d), d);
}
function Mo(e, n) {
  return !e || !So(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Te(e, n[0].toLowerCase() + n.slice(1)) || Te(e, Pn(n)) || Te(e, n));
}
function Ws(e) {
  const {
    type: n,
    vnode: o,
    proxy: s,
    withProxy: a,
    propsOptions: [l],
    slots: d,
    attrs: p,
    emit: m,
    render: A,
    renderCache: x,
    props: C,
    data: B,
    setupState: L,
    ctx: M,
    inheritAttrs: $
  } = e, Re = wo(e);
  let we, Ee;
  try {
    if (o.shapeFlag & 4) {
      const ae = a || s, Ie = ln.NODE_ENV !== "production" && L.__isScriptSetup ? new Proxy(ae, {
        get(Ne, Se, _t) {
          return Fl(
            `Property '${String(
              Se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ne, Se, _t);
        }
      }) : ae;
      we = Lt(
        A.call(
          Ie,
          ae,
          x,
          ln.NODE_ENV !== "production" ? lo(C) : C,
          L,
          B,
          M
        )
      ), Ee = p;
    } else {
      const ae = n;
      ln.NODE_ENV, we = Lt(
        ae.length > 1 ? ae(
          ln.NODE_ENV !== "production" ? lo(C) : C,
          ln.NODE_ENV !== "production" ? {
            get attrs() {
              return lo(p);
            },
            slots: d,
            emit: m
          } : { attrs: p, slots: d, emit: m }
        ) : ae(
          ln.NODE_ENV !== "production" ? lo(C) : C,
          null
        )
      ), Ee = n.props ? p : Mc(p);
    }
  } catch (ae) {
    Rr.length = 0, ko(ae, e, 1), we = It(_n);
  }
  let Oe = we;
  if (Ee && $ !== !1) {
    const ae = Object.keys(Ee), { shapeFlag: Ie } = Oe;
    ae.length && Ie & 7 && (l && ae.some(Hi) && (Ee = jc(
      Ee,
      l
    )), Oe = Qn(Oe, Ee, !1, !0));
  }
  return o.dirs && (Oe = Qn(Oe, null, !1, !0), Oe.dirs = Oe.dirs ? Oe.dirs.concat(o.dirs) : o.dirs), o.transition && Zi(Oe, o.transition), we = Oe, wo(Re), we;
}
const Mc = (e) => {
  let n;
  for (const o in e)
    (o === "class" || o === "style" || So(o)) && ((n || (n = {}))[o] = e[o]);
  return n;
}, jc = (e, n) => {
  const o = {};
  for (const s in e)
    (!Hi(s) || !(s.slice(9) in n)) && (o[s] = e[s]);
  return o;
};
function Lc(e, n, o) {
  const { props: s, children: a, component: l } = e, { props: d, children: p, patchFlag: m } = n, A = l.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? Ys(s, d, A) : !!d;
    if (m & 8) {
      const x = n.dynamicProps;
      for (let C = 0; C < x.length; C++) {
        const B = x[C];
        if (d[B] !== s[B] && !Mo(A, B))
          return !0;
      }
    }
  } else
    return (a || p) && (!p || !p.$stable) ? !0 : s === d ? !1 : s ? d ? Ys(s, d, A) : !0 : !!d;
  return !1;
}
function Ys(e, n, o) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < s.length; a++) {
    const l = s[a];
    if (n[l] !== e[l] && !Mo(o, l))
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
const ze = Symbol.for("v-fgt"), jo = Symbol.for("v-txt"), _n = Symbol.for("v-cmt"), Oi = Symbol.for("v-stc"), Rr = [];
let yt = null;
function ke(e = !1) {
  Rr.push(yt = e ? null : []);
}
function Uc() {
  Rr.pop(), yt = Rr[Rr.length - 1] || null;
}
let Ar = 1;
function Xs(e, n = !1) {
  Ar += e, e < 0 && yt && n && (yt.hasOnce = !0);
}
function yu(e) {
  return e.dynamicChildren = Ar > 0 ? yt || Wn : null, Uc(), Ar > 0 && yt && yt.push(e), e;
}
function Ue(e, n, o, s, a, l) {
  return yu(
    re(
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
function Oo(e, n, o, s, a) {
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
const vu = ({ key: e }) => e ?? null, ho = ({
  ref: e,
  ref_key: n,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? Ve(e) || Ze(e) || de(e) ? { i: gt, r: e, k: n, f: !!o } : e : null);
function re(e, n = null, o = null, s = 0, a = null, l = e === ze ? 0 : 1, d = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && vu(n),
    ref: n && ho(n),
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
  return p ? (rs(m, o), l & 128 && e.normalize(m)) : o && (m.shapeFlag |= Ve(o) ? 8 : 16), Ar > 0 && // avoid a block node from tracking itself
  !d && // has current parent block
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
  if ((!e || e === cc) && (e = _n), _u(e)) {
    const p = Qn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return o && rs(p, o), Ar > 0 && !l && yt && (p.shapeFlag & 6 ? yt[yt.indexOf(e)] = p : yt.push(p)), p.patchFlag = -2, p;
  }
  if (ef(e) && (e = e.__vccOpts), n) {
    n = Fc(n);
    let { class: p, style: m } = n;
    p && !Ve(p) && (n.class = Gi(p)), je(m) && (Ji(m) && !le(m) && (m = it({}, m)), n.style = rt(m));
  }
  const d = Ve(e) ? 1 : gu(e) ? 128 : Ql(e) ? 64 : je(e) ? 4 : de(e) ? 2 : 0;
  return re(
    e,
    n,
    o,
    s,
    a,
    d,
    l,
    !0
  );
}
function Fc(e) {
  return e ? Ji(e) || iu(e) ? it({}, e) : e : null;
}
function Qn(e, n, o = !1, s = !1) {
  const { props: a, ref: l, patchFlag: d, children: p, transition: m } = e, A = n ? Vc(a || {}, n) : a, x = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: A,
    key: A && vu(A),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && l ? le(l) ? l.concat(ho(n)) : [l, ho(n)] : ho(n)
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
    patchFlag: n && e.type !== ze ? d === -1 ? 16 : d | 16 : d,
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
  return It(jo, null, e, n);
}
function ji(e = "", n = !1) {
  return n ? (ke(), Oo(_n, null, e)) : It(_n, null, e);
}
function Lt(e) {
  return e == null || typeof e == "boolean" ? It(_n) : le(e) ? It(
    ze,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : _u(e) ? fn(e) : It(jo, null, String(e));
}
function fn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qn(e);
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
        n.style = rt([n.style, s.style]);
      else if (So(a)) {
        const l = n[a], d = s[a];
        d && l !== d && !(le(l) && l.includes(d)) && (n[a] = l ? [].concat(l, d) : d);
      } else a !== "" && (n[a] = s[a]);
  }
  return n;
}
function Dt(e, n, o, s = null) {
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
    propsDefaults: Ce,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: Ce,
    data: Ce,
    props: Ce,
    attrs: Ce,
    slots: Ce,
    refs: Ce,
    setupState: Ce,
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
let Qe = null, xo, Li;
{
  const e = No(), n = (o, s) => {
    let a;
    return (a = e[o]) || (a = e[o] = []), a.push(s), (l) => {
      a.length > 1 ? a.forEach((d) => d(l)) : a[0](l);
    };
  };
  xo = n(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Qe = o
  ), Li = n(
    "__VUE_SSR_SETTERS__",
    (o) => Cr = o
  );
}
const Mr = (e) => {
  const n = Qe;
  return xo(e), e.scope.on(), () => {
    e.scope.off(), xo(n);
  };
}, zs = () => {
  Qe && Qe.scope.off(), xo(null);
};
function wu(e) {
  return e.vnode.shapeFlag & 4;
}
let Cr = !1;
function Wc(e, n = !1, o = !1) {
  n && Li(n);
  const { props: s, children: a } = e.vnode, l = wu(e);
  bc(e, s, l, n), xc(e, a, o || n);
  const d = l ? Yc(e, n) : void 0;
  return n && Li(!1), d;
}
function Yc(e, n) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, fc);
  const { setup: s } = o;
  if (s) {
    Kt();
    const a = e.setupContext = s.length > 1 ? zc(e) : null, l = Mr(e), d = tr(
      s,
      e,
      0,
      [
        e.props,
        a
      ]
    ), p = _a(d);
    if (Ut(), l(), (p || e.sp) && !xr(e) && za(e), p) {
      if (d.then(zs, zs), n)
        return d.then((m) => {
          Js(e, m);
        }).catch((m) => {
          ko(m, e, 0);
        });
      e.asyncDep = d;
    } else
      Js(e, d);
  } else
    Eu(e);
}
function Js(e, n, o) {
  de(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : je(n) && (e.setupState = Fa(n)), Eu(e);
}
function Eu(e, n, o) {
  const s = e.type;
  e.render || (e.render = s.render || Rt);
  {
    const a = Mr(e);
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
    return ot(e, "get", ""), e[n];
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
function Lo(e) {
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
      for (const d in l)
        if (l[d] === n)
          return d;
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
const pn = (e, n) => Kl(e, n, Cr), tf = "3.5.17";
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
    const d = o ? o.previousSibling : n.lastChild;
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
      d ? d.nextSibling : n.firstChild,
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
  const s = e.style, a = Ve(o);
  let l = !1;
  if (o && !a) {
    if (n)
      if (Ve(n))
        for (const d of n.split(";")) {
          const p = d.slice(0, d.indexOf(":")).trim();
          o[p] == null && mo(s, p, "");
        }
      else
        for (const d in n)
          o[d] == null && mo(s, d, "");
    for (const d in o)
      d === "display" && (l = !0), mo(s, d, o[d]);
  } else if (a) {
    if (n !== o) {
      const d = s[lf];
      d && (o += ";" + d), s.cssText = o, l = cf.test(o);
    }
  } else n && e.removeAttribute("style");
  ea in e && (e[ea] = l ? s.display : "", e[uf] && (s.display = "none"));
}
const ta = /\s*!important$/;
function mo(e, n, o) {
  if (le(o))
    o.forEach((s) => mo(e, n, s));
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
const na = ["Webkit", "Moz", "ms"], xi = {};
function df(e, n) {
  const o = xi[n];
  if (o)
    return o;
  let s = gn(n);
  if (s !== "filter" && s in e)
    return xi[n] = s;
  s = wa(s);
  for (let a = 0; a < na.length; a++) {
    const l = na[a] + s;
    if (l in e)
      return xi[n] = l;
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
  let d = !1;
  if (o === "" || o == null) {
    const p = typeof e[n];
    p === "boolean" ? o = Ea(o) : o == null && p === "string" ? (o = "", d = !0) : p === "number" && (o = 0, d = !0);
  }
  try {
    e[n] = o;
  } catch {
  }
  d && e.removeAttribute(a || n);
}
function dn(e, n, o, s) {
  e.addEventListener(n, o, s);
}
function pf(e, n, o, s) {
  e.removeEventListener(n, o, s);
}
const sa = Symbol("_vei");
function hf(e, n, o, s, a = null) {
  const l = e[sa] || (e[sa] = {}), d = l[n];
  if (s && d)
    d.value = s;
  else {
    const [p, m] = mf(n);
    if (s) {
      const A = l[n] = _f(
        s,
        a
      );
      dn(e, p, A, m);
    } else d && (pf(e, p, d, m), l[n] = void 0);
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
let Ti = 0;
const gf = /* @__PURE__ */ Promise.resolve(), yf = () => Ti || (gf.then(() => Ti = 0), Ti = Date.now());
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
  const d = a === "svg";
  n === "class" ? af(e, s, d) : n === "style" ? ff(e, o, s) : So(n) ? Hi(n) || hf(e, n, o, s, l) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : wf(e, n, s, d)) ? (ia(e, n, s), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && oa(e, n, s, d, l, n !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(n) || !Ve(s)) ? ia(e, gn(n), s, l, n) : (n === "true-value" ? e._trueValue = s : n === "false-value" && (e._falseValue = s), oa(e, n, s, d));
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
  return ua(n) && Ve(o) ? !1 : n in e;
}
const Zn = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return le(n) ? (o) => fo(n, o) : n;
};
function Ef(e) {
  e.target.composing = !0;
}
function la(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), ca = {
  created(e, { modifiers: { lazy: n, trim: o, number: s } }, a) {
    e[zt] = Zn(a);
    const l = s || a.props && a.props.type === "number";
    dn(e, n ? "change" : "input", (d) => {
      if (d.target.composing) return;
      let p = e.value;
      o && (p = p.trim()), l && (p = yo(p)), e[zt](p);
    }), o && dn(e, "change", () => {
      e.value = e.value.trim();
    }), n || (dn(e, "compositionstart", Ef), dn(e, "compositionend", la), dn(e, "change", la));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, oldValue: o, modifiers: { lazy: s, trim: a, number: l } }, d) {
    if (e[zt] = Zn(d), e.composing) return;
    const p = (l || e.type === "number") && !/^0\d/.test(e.value) ? yo(e.value) : e.value, m = n ?? "";
    p !== m && (document.activeElement === e && e.type !== "range" && (s && n === o || a && e.value.trim() === m) || (e.value = m));
  }
}, fa = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, n, o) {
    e[zt] = Zn(o), dn(e, "change", () => {
      const s = e._modelValue, a = Pr(e), l = e.checked, d = e[zt];
      if (le(s)) {
        const p = qi(s, a), m = p !== -1;
        if (l && !m)
          d(s.concat(a));
        else if (!l && m) {
          const A = [...s];
          A.splice(p, 1), d(A);
        }
      } else if (er(s)) {
        const p = new Set(s);
        l ? p.add(a) : p.delete(a), d(p);
      } else
        d(Tu(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: da,
  beforeUpdate(e, n, o) {
    e[zt] = Zn(o), da(e, n, o);
  }
};
function da(e, { value: n, oldValue: o }, s) {
  e._modelValue = n;
  let a;
  if (le(n))
    a = qi(n, s.props.value) > -1;
  else if (er(n))
    a = n.has(s.props.value);
  else {
    if (n === o) return;
    a = Dr(n, Tu(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const yr = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: n, modifiers: { number: o } }, s) {
    const a = er(n);
    dn(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => o ? yo(Pr(d)) : Pr(d)
      );
      e[zt](
        e.multiple ? a ? new Set(l) : l : l[0]
      ), e._assigning = !0, qa(() => {
        e._assigning = !1;
      });
    }), e[zt] = Zn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: n }) {
    pa(e, n);
  },
  beforeUpdate(e, n, o) {
    e[zt] = Zn(o);
  },
  updated(e, { value: n }) {
    e._assigning || pa(e, n);
  }
};
function pa(e, n) {
  const o = e.multiple, s = le(n);
  if (!(o && !s && !er(n))) {
    for (let a = 0, l = e.options.length; a < l; a++) {
      const d = e.options[a], p = Pr(d);
      if (o)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? d.selected = n.some((A) => String(A) === String(p)) : d.selected = qi(n, p) > -1;
        } else
          d.selected = n.has(p);
      else if (Dr(Pr(d), n)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Pr(e) {
  return "_value" in e ? e._value : e.value;
}
function Tu(e, n) {
  const o = n ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : n;
}
const Of = /* @__PURE__ */ it({ patchProp: bf }, of);
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
    const d = o(a, !1, Rf(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), d;
  }, n;
};
function Rf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Sf(e) {
  return Ve(e) ? document.querySelector(e) : e;
}
var If = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var go = { exports: {} }, Af = go.exports, ma;
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
        for (var u, c = 0, f = r.length; c < f; c++) !u && c in r || ((u = u || Array.prototype.slice.call(r, 0, c))[c] = r[c]);
        return t.concat(u || Array.prototype.slice.call(r));
      }
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : If, d = Object.keys, p = Array.isArray;
      function m(t, r) {
        return typeof r != "object" || d(r).forEach(function(i) {
          t[i] = r[i];
        }), t;
      }
      typeof Promise > "u" || l.Promise || (l.Promise = Promise);
      var A = Object.getPrototypeOf, x = {}.hasOwnProperty;
      function C(t, r) {
        return x.call(t, r);
      }
      function B(t, r) {
        typeof r == "function" && (r = r(A(t))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(r).forEach(function(i) {
          M(t, i, r[i]);
        });
      }
      var L = Object.defineProperty;
      function M(t, r, i, u) {
        L(t, r, m(i && C(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, u));
      }
      function $(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), M(t.prototype, "constructor", t), { extend: B.bind(null, t.prototype) };
        } };
      }
      var Re = Object.getOwnPropertyDescriptor, we = [].slice;
      function Ee(t, r, i) {
        return we.call(t, r, i);
      }
      function Oe(t, r) {
        return r(t);
      }
      function ae(t) {
        if (!t) throw new Error("Assertion Failed");
      }
      function Ie(t) {
        l.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Ne(t, r) {
        if (typeof r == "string" && C(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var i = [], u = 0, c = r.length; u < c; ++u) {
            var f = Ne(t, r[u]);
            i.push(f);
          }
          return i;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var y = t[r.substr(0, h)];
          return y == null ? void 0 : Ne(y, r.substr(h + 1));
        }
      }
      function Se(t, r, i) {
        if (t && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(t))) if (typeof r != "string" && "length" in r) {
          ae(typeof i != "string" && "length" in i);
          for (var u = 0, c = r.length; u < c; ++u) Se(t, r[u], i[u]);
        } else {
          var f, h, y = r.indexOf(".");
          y !== -1 ? (f = r.substr(0, y), (h = r.substr(y + 1)) === "" ? i === void 0 ? p(t) && !isNaN(parseInt(f)) ? t.splice(f, 1) : delete t[f] : t[f] = i : Se(y = !(y = t[f]) || !C(t, f) ? t[f] = {} : y, h, i)) : i === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = i;
        }
      }
      function _t(t) {
        var r, i = {};
        for (r in t) C(t, r) && (i[r] = t[r]);
        return i;
      }
      var kn = [].concat;
      function Nt(t) {
        return kn.apply([], t);
      }
      var pe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Nt([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return l[t];
      }), Qt = new Set(pe.map(function(t) {
        return l[t];
      })), At = null;
      function vt(t) {
        return At = /* @__PURE__ */ new WeakMap(), t = function r(i) {
          if (!i || typeof i != "object") return i;
          var u = At.get(i);
          if (u) return u;
          if (p(i)) {
            u = [], At.set(i, u);
            for (var c = 0, f = i.length; c < f; ++c) u.push(r(i[c]));
          } else if (Qt.has(i.constructor)) u = i;
          else {
            var h, y = A(i);
            for (h in u = y === Object.prototype ? {} : Object.create(y), At.set(i, u), i) C(i, h) && (u[h] = r(i[h]));
          }
          return u;
        }(t), At = null, t;
      }
      var rr = {}.toString;
      function Dn(t) {
        return rr.call(t).slice(8, -1);
      }
      var qe = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", De = typeof qe == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[qe]) && r.apply(t);
      } : function() {
        return null;
      };
      function ge(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var ct = {};
      function ft(t) {
        var r, i, u, c;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === ct && typeof t == "string") return [t];
          if (c = De(t)) {
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
      var xt = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ue = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Et = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ue), bt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(t, r) {
        this.name = t, this.message = r;
      }
      function jr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(i) {
          return r[i].toString();
        }).filter(function(i, u, c) {
          return c.indexOf(i) === u;
        }).join(`
`);
      }
      function Mn(t, r, i, u) {
        this.failures = r, this.failedKeys = u, this.successCount = i, this.message = jr(t, r);
      }
      function wt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(i) {
          return r[i];
        }), this.failuresByPos = r, this.message = jr(t, this.failures);
      }
      $(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), $(Mn).from(Ft), $(wt).from(Ft);
      var Zt = Et.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), or = Ft, oe = Et.reduce(function(t, r) {
        var i = r + "Error";
        function u(c, f) {
          this.name = i, c ? typeof c == "string" ? (this.message = "".concat(c).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof c == "object" && (this.message = "".concat(c.name, " ").concat(c.message), this.inner = c) : (this.message = bt[r] || i, this.inner = null);
        }
        return $(u).from(or), t[r] = u, t;
      }, {});
      oe.Syntax = SyntaxError, oe.Type = TypeError, oe.Range = RangeError;
      var en = ue.reduce(function(t, r) {
        return t[r + "Error"] = oe[r], t;
      }, {}), ir = Et.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = oe[r]), t;
      }, {});
      function g() {
      }
      function w(t) {
        return t;
      }
      function j(t, r) {
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
          var f = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? H(u, this.onsuccess) : u), c && (this.onerror = this.onerror ? H(c, this.onerror) : c), f !== void 0 ? f : i;
        };
      }
      function F(t, r) {
        return t === g ? r : function() {
          t.apply(this, arguments);
          var i = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), i && (this.onsuccess = this.onsuccess ? H(i, this.onsuccess) : i), u && (this.onerror = this.onerror ? H(u, this.onerror) : u);
        };
      }
      function Q(t, r) {
        return t === g ? r : function(i) {
          var u = t.apply(this, arguments);
          m(i, u);
          var c = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = r.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? H(c, this.onsuccess) : c), f && (this.onerror = this.onerror ? H(f, this.onerror) : f), u === void 0 ? i === void 0 ? void 0 : i : m(u, i);
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
            for (var u = this, c = arguments.length, f = new Array(c); c--; ) f[c] = arguments[c];
            return i.then(function() {
              return r.apply(u, f);
            });
          }
          return r.apply(this, arguments);
        };
      }
      ir.ModifyError = Mn, ir.DexieError = Ft, ir.BulkError = wt;
      var K = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function se(t) {
        K = t;
      }
      var z = {}, ie = 100, pe = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, A(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, A(r), t];
      }(), ue = pe[0], Et = pe[1], pe = pe[2], Et = Et && Et.then, ye = ue && ue.constructor, be = !!pe, Ge = function(t, r) {
        tn.push([t, r]), st && (queueMicrotask(Au), st = !1);
      }, $e = !0, st = !0, We = [], Ct = [], jn = w, Be = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: g, pgp: !1, env: {}, finalize: g }, ne = Be, tn = [], vn = 0, Lr = [];
      function ee(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = ne;
        if (typeof t != "function") {
          if (t !== z) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ko(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function i(u, c) {
          try {
            c(function(f) {
              if (u._state === null) {
                if (f === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && Ln();
                f && typeof f.then == "function" ? i(u, function(y, v) {
                  f instanceof ee ? f._then(y, v) : f.then(y, v);
                }) : (u._state = !0, u._value = f, is(u)), h && Bn();
              }
            }, Ko.bind(null, u));
          } catch (f) {
            Ko(u, f);
          }
        }(this, t);
      }
      var Bo = { get: function() {
        var t = ne, r = Hr;
        function i(u, c) {
          var f = this, h = !t.global && (t !== ne || r !== Hr), y = h && !rn(), v = new ee(function(E, T) {
            Uo(f, new os(as(u, t, h, y), as(c, t, h, y), E, T, t));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return i.prototype = z, i;
      }, set: function(t) {
        M(this, "then", t && t.prototype === z ? Bo : { get: function() {
          return t;
        }, set: Bo.set });
      } };
      function os(t, r, i, u, c) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = i, this.reject = u, this.psd = c;
      }
      function Ko(t, r) {
        var i, u;
        Ct.push(r), t._state === null && (i = t._lib && Ln(), r = jn(r), t._state = !1, t._value = r, u = t, We.some(function(c) {
          return c._value === u._value;
        }) || We.push(u), is(t), i && Bn());
      }
      function is(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var i = 0, u = r.length; i < u; ++i) Uo(t, r[i]);
        var c = t._PSD;
        --c.ref || c.finalize(), vn === 0 && (++vn, Ge(function() {
          --vn == 0 && Ho();
        }, []));
      }
      function Uo(t, r) {
        if (t._state !== null) {
          var i = t._state ? r.onFulfilled : r.onRejected;
          if (i === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++vn, Ge(Nu, [i, t, r]);
        } else t._listeners.push(r);
      }
      function Nu(t, r, i) {
        try {
          var u, c = r._value;
          !r._state && Ct.length && (Ct = []), u = K && r._consoleTask ? r._consoleTask.run(function() {
            return t(c);
          }) : t(c), r._state || Ct.indexOf(c) !== -1 || function(f) {
            for (var h = We.length; h; ) if (We[--h]._value === f._value) return We.splice(h, 1);
          }(r), i.resolve(u);
        } catch (f) {
          i.reject(f);
        } finally {
          --vn == 0 && Ho(), --i.psd.ref || i.psd.finalize();
        }
      }
      function Au() {
        bn(Be, function() {
          Ln() && Bn();
        });
      }
      function Ln() {
        var t = $e;
        return st = $e = !1, t;
      }
      function Bn() {
        var t, r, i;
        do
          for (; 0 < tn.length; ) for (t = tn, tn = [], i = t.length, r = 0; r < i; ++r) {
            var u = t[r];
            u[0].apply(null, u[1]);
          }
        while (0 < tn.length);
        st = $e = !0;
      }
      function Ho() {
        var t = We;
        We = [], t.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = Lr.slice(0), i = r.length; i; ) r[--i]();
      }
      function Br(t) {
        return new ee(z, !1, t);
      }
      function Le(t, r) {
        var i = ne;
        return function() {
          var u = Ln(), c = ne;
          try {
            return on(i, !0), t.apply(this, arguments);
          } catch (f) {
            r && r(f);
          } finally {
            on(c, !1), u && Bn();
          }
        };
      }
      B(ee.prototype, { then: Bo, _then: function(t, r) {
        Uo(this, new os(null, null, t, r, ne));
      }, catch: function(t) {
        if (arguments.length === 1) return this.then(null, t);
        var r = t, i = arguments[1];
        return typeof r == "function" ? this.then(null, function(u) {
          return (u instanceof r ? i : Br)(u);
        }) : this.then(null, function(u) {
          return (u && u.name === r ? i : Br)(u);
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
        var i = this;
        return t < 1 / 0 ? new ee(function(u, c) {
          var f = setTimeout(function() {
            return c(new oe.Timeout(r));
          }, t);
          i.then(u, c).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && M(ee.prototype, Symbol.toStringTag, "Dexie.Promise"), Be.env = ss(), B(ee, { all: function() {
        var t = ft.apply(null, arguments).map(Fr);
        return new ee(function(r, i) {
          t.length === 0 && r([]);
          var u = t.length;
          t.forEach(function(c, f) {
            return ee.resolve(c).then(function(h) {
              t[f] = h, --u || r(t);
            }, i);
          });
        });
      }, resolve: function(t) {
        return t instanceof ee ? t : t && typeof t.then == "function" ? new ee(function(r, i) {
          t.then(r, i);
        }) : new ee(z, !0, t);
      }, reject: Br, race: function() {
        var t = ft.apply(null, arguments).map(Fr);
        return new ee(function(r, i) {
          t.map(function(u) {
            return ee.resolve(u).then(r, i);
          });
        });
      }, PSD: { get: function() {
        return ne;
      }, set: function(t) {
        return ne = t;
      } }, totalEchoes: { get: function() {
        return Hr;
      } }, newPSD: nn, usePSD: bn, scheduler: { get: function() {
        return Ge;
      }, set: function(t) {
        Ge = t;
      } }, rejectionMapper: { get: function() {
        return jn;
      }, set: function(t) {
        jn = t;
      } }, follow: function(t, r) {
        return new ee(function(i, u) {
          return nn(function(c, f) {
            var h = ne;
            h.unhandleds = [], h.onunhandled = f, h.finalize = H(function() {
              var y, v = this;
              y = function() {
                v.unhandleds.length === 0 ? c() : f(v.unhandleds[0]);
              }, Lr.push(function E() {
                y(), Lr.splice(Lr.indexOf(E), 1);
              }), ++vn, Ge(function() {
                --vn == 0 && Ho();
              }, []);
            }, h.finalize), t();
          }, r, i, u);
        });
      } }), ye && (ye.allSettled && M(ee, "allSettled", function() {
        var t = ft.apply(null, arguments).map(Fr);
        return new ee(function(r) {
          t.length === 0 && r([]);
          var i = t.length, u = new Array(i);
          t.forEach(function(c, f) {
            return ee.resolve(c).then(function(h) {
              return u[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --i || r(u);
            });
          });
        });
      }), ye.any && typeof AggregateError < "u" && M(ee, "any", function() {
        var t = ft.apply(null, arguments).map(Fr);
        return new ee(function(r, i) {
          t.length === 0 && i(new AggregateError([]));
          var u = t.length, c = new Array(u);
          t.forEach(function(f, h) {
            return ee.resolve(f).then(function(y) {
              return r(y);
            }, function(y) {
              c[h] = y, --u || i(new AggregateError(c));
            });
          });
        });
      }), ye.withResolvers && (ee.withResolvers = ye.withResolvers));
      var Ye = { awaits: 0, echoes: 0, id: 0 }, Cu = 0, Kr = [], Ur = 0, Hr = 0, Pu = 0;
      function nn(t, r, i, u) {
        var c = ne, f = Object.create(c);
        return f.parent = c, f.ref = 0, f.global = !1, f.id = ++Pu, Be.env, f.env = be ? { Promise: ee, PromiseProp: { value: ee, configurable: !0, writable: !0 }, all: ee.all, race: ee.race, allSettled: ee.allSettled, any: ee.any, resolve: ee.resolve, reject: ee.reject } : {}, r && m(f, r), ++c.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = bn(f, t, i, u), f.ref === 0 && f.finalize(), u;
      }
      function Kn() {
        return Ye.id || (Ye.id = ++Cu), ++Ye.awaits, Ye.echoes += ie, Ye.id;
      }
      function rn() {
        return !!Ye.awaits && (--Ye.awaits == 0 && (Ye.id = 0), Ye.echoes = Ye.awaits * ie, !0);
      }
      function Fr(t) {
        return Ye.echoes && t && t.constructor === ye ? (Kn(), t.then(function(r) {
          return rn(), r;
        }, function(r) {
          return rn(), He(r);
        })) : t;
      }
      function ku() {
        var t = Kr[Kr.length - 1];
        Kr.pop(), on(t, !1);
      }
      function on(t, r) {
        var i, u = ne;
        (r ? !Ye.echoes || Ur++ && t === ne : !Ur || --Ur && t === ne) || queueMicrotask(r ? (function(c) {
          ++Hr, Ye.echoes && --Ye.echoes != 0 || (Ye.echoes = Ye.awaits = Ye.id = 0), Kr.push(ne), on(c, !0);
        }).bind(null, t) : ku), t !== ne && (ne = t, u === Be && (Be.env = ss()), be && (i = Be.env.Promise, r = t.env, (u.global || t.global) && (Object.defineProperty(l, "Promise", r.PromiseProp), i.all = r.all, i.race = r.race, i.resolve = r.resolve, i.reject = r.reject, r.allSettled && (i.allSettled = r.allSettled), r.any && (i.any = r.any))));
      }
      function ss() {
        var t = l.Promise;
        return be ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function bn(t, r, i, u, c) {
        var f = ne;
        try {
          return on(t, !0), r(i, u, c);
        } finally {
          on(f, !1);
        }
      }
      function as(t, r, i, u) {
        return typeof t != "function" ? t : function() {
          var c = ne;
          i && Kn(), on(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            on(c, !1), u && queueMicrotask(rn);
          }
        };
      }
      function Fo(t) {
        Promise === ye && Ye.echoes === 0 ? Ur === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + Et).indexOf("[native code]") === -1 && (Kn = rn = g);
      var He = ee.reject, wn = "￿", Vt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", us = "String expected.", Un = [], Vr = "__dbnames", Vo = "readonly", Go = "readwrite";
      function En(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var ls = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Gr(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = vt(r))[t], r;
        };
      }
      function cs() {
        throw oe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function me(t, r) {
        try {
          var i = fs(t), u = fs(r);
          if (i !== u) return i === "Array" ? 1 : u === "Array" ? -1 : i === "binary" ? 1 : u === "binary" ? -1 : i === "string" ? 1 : u === "string" ? -1 : i === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(c, f) {
                for (var h = c.length, y = f.length, v = h < y ? h : y, E = 0; E < v; ++E) if (c[E] !== f[E]) return c[E] < f[E] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              }(ds(t), ds(r));
            case "Array":
              return function(c, f) {
                for (var h = c.length, y = f.length, v = h < y ? h : y, E = 0; E < v; ++E) {
                  var T = me(c[E], f[E]);
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
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = Dn(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function ds(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function qr(t, r, i) {
        var u = t.schema.yProps;
        return u ? (r && 0 < i.numFailures && (r = r.filter(function(c, f) {
          return !i.failures[f];
        })), Promise.all(u.map(function(c) {
          return c = c.updatesTable, r ? t.db.table(c).where("k").anyOf(r).delete() : t.db.table(c).clear();
        })).then(function() {
          return i;
        })) : i;
      }
      var ps = (Me.prototype._trans = function(t, r, i) {
        var u = this._tx || ne.trans, c = this.name, f = K && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(E, T, _) {
          if (!_.schema[c]) throw new oe.NotFound("Table " + c + " not part of transaction");
          return r(_.idbtrans, _);
        }
        var y = Ln();
        try {
          var v = u && u.db._novip === this.db._novip ? u === ne.trans ? u._promise(t, h, i) : nn(function() {
            return u._promise(t, h, i);
          }, { trans: u, transless: ne.transless || ne }) : function E(T, _, I, b) {
            if (T.idbdb && (T._state.openComplete || ne.letThrough || T._vip)) {
              var O = T._createTransaction(_, I, T._dbSchema);
              try {
                O.create(), T._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === Zt.InvalidState && T.isOpen() && 0 < --T._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), T.close({ disableAutoOpen: !1 }), T.open().then(function() {
                  return E(T, _, I, b);
                })) : He(S);
              }
              return O._promise(_, function(S, R) {
                return nn(function() {
                  return ne.trans = O, b(S, R, O);
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
            if (T._state.openComplete) return He(new oe.DatabaseClosed(T._state.dbOpenError));
            if (!T._state.isBeingOpened) {
              if (!T._state.autoOpen) return He(new oe.DatabaseClosed());
              T.open().catch(g);
            }
            return T._state.dbReadyPromise.then(function() {
              return E(T, _, I, b);
            });
          }(this.db, t, [this.name], h);
          return f && (v._consoleTask = f, v = v.catch(function(E) {
            return console.trace(E), He(E);
          })), v;
        } finally {
          y && Bn();
        }
      }, Me.prototype.get = function(t, r) {
        var i = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? He(new oe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return i.core.get({ trans: u, key: t }).then(function(c) {
            return i.hook.reading.fire(c);
          });
        }).then(r);
      }, Me.prototype.where = function(t) {
        if (typeof t == "string") return new this.db.WhereClause(this, t);
        if (p(t)) return new this.db.WhereClause(this, "[".concat(t.join("+"), "]"));
        var r = d(t);
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
        if (i && this.db._maxKey !== wn) {
          var f = i.keyPath.slice(0, r.length);
          return this.where(f).equals(f.map(function(v) {
            return t[v];
          }));
        }
        !i && K && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function c(y, v) {
          return me(y, v) === 0;
        }
        var h = r.reduce(function(_, v) {
          var E = _[0], T = _[1], _ = u[v], I = t[v];
          return [E || _, E || !_ ? En(T, _ && _.multi ? function(b) {
            return b = Ne(b, v), p(b) && b.some(function(O) {
              return c(I, O);
            });
          } : function(b) {
            return c(I, Ne(b, v));
          }) : T];
        }, [null, null]), f = h[0], h = h[1];
        return f ? this.where(f.name).equals(t[f.keyPath]).filter(h) : i ? this.filter(h) : this.where(r).equals("");
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
        for (var f = /* @__PURE__ */ new Set(), h = t.prototype; h; h = A(h)) Object.getOwnPropertyNames(h).forEach(function(v) {
          return f.add(v);
        });
        function y(v) {
          if (!v) return v;
          var E, T = Object.create(t.prototype);
          for (E in v) if (!f.has(E)) try {
            T[E] = v[E];
          } catch {
          }
          return T;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), t;
      }, Me.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          m(this, t);
        });
      }, Me.prototype.add = function(t, r) {
        var i = this, u = this.schema.primKey, c = u.auto, f = u.keyPath, h = t;
        return f && c && (h = Gr(f)(t)), this._trans("readwrite", function(y) {
          return i.core.mutate({ trans: y, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(y) {
          return y.numFailures ? ee.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (f) try {
            Se(t, f, y);
          } catch {
          }
          return y;
        });
      }, Me.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Ne(t, this.schema.primKey.keyPath), t === void 0 ? He(new oe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, Me.prototype.put = function(t, r) {
        var i = this, u = this.schema.primKey, c = u.auto, f = u.keyPath, h = t;
        return f && c && (h = Gr(f)(t)), this._trans("readwrite", function(y) {
          return i.core.mutate({ trans: y, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(y) {
          return y.numFailures ? ee.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (f) try {
            Se(t, f, y);
          } catch {
          }
          return y;
        });
      }, Me.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(i) {
          return r.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(u) {
            return qr(r, [t], u);
          }).then(function(u) {
            return u.numFailures ? ee.reject(u.failures[0]) : void 0;
          });
        });
      }, Me.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: ls }).then(function(i) {
            return qr(t, null, i);
          });
        }).then(function(r) {
          return r.numFailures ? ee.reject(r.failures[0]) : void 0;
        });
      }, Me.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(i) {
          return r.core.getMany({ keys: t, trans: i }).then(function(u) {
            return u.map(function(c) {
              return r.hook.reading.fire(c);
            });
          });
        });
      }, Me.prototype.bulkAdd = function(t, r, i) {
        var u = this, c = Array.isArray(r) ? r : void 0, f = (i = i || (c ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && c) throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && y ? t.map(Gr(E)) : t;
          return u.core.mutate({ trans: h, type: "add", keys: c, values: E, wantResults: f }).then(function(O) {
            var _ = O.numFailures, I = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return f ? I : b;
            throw new wt("".concat(u.name, ".bulkAdd(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, Me.prototype.bulkPut = function(t, r, i) {
        var u = this, c = Array.isArray(r) ? r : void 0, f = (i = i || (c ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && c) throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && y ? t.map(Gr(E)) : t;
          return u.core.mutate({ trans: h, type: "put", keys: c, values: E, wantResults: f }).then(function(O) {
            var _ = O.numFailures, I = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return f ? I : b;
            throw new wt("".concat(u.name, ".bulkPut(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, Me.prototype.bulkUpdate = function(t) {
        var r = this, i = this.core, u = t.map(function(h) {
          return h.key;
        }), c = t.map(function(h) {
          return h.changes;
        }), f = [];
        return this._trans("readwrite", function(h) {
          return i.getMany({ trans: h, keys: u, cache: "clone" }).then(function(y) {
            var v = [], E = [];
            t.forEach(function(_, I) {
              var b = _.key, O = _.changes, S = y[I];
              if (S) {
                for (var R = 0, N = Object.keys(O); R < N.length; R++) {
                  var P = N[R], k = O[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (me(k, b) !== 0) throw new oe.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Se(S, P, k);
                }
                f.push(I), v.push(b), E.push(S);
              }
            });
            var T = v.length;
            return i.mutate({ trans: h, type: "put", keys: v, values: E, updates: { keys: u, changeSpecs: c } }).then(function(_) {
              var I = _.numFailures, b = _.failures;
              if (I === 0) return T;
              for (var O = 0, S = Object.keys(b); O < S.length; O++) {
                var R, N = S[O], P = f[Number(N)];
                P != null && (R = b[N], delete b[N], b[P] = R);
              }
              throw new wt("".concat(r.name, ".bulkUpdate(): ").concat(I, " of ").concat(T, " operations failed"), b);
            });
          });
        });
      }, Me.prototype.bulkDelete = function(t) {
        var r = this, i = t.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: t }).then(function(c) {
            return qr(r, t, c);
          });
        }).then(function(h) {
          var c = h.numFailures, f = h.lastResult, h = h.failures;
          if (c === 0) return f;
          throw new wt("".concat(r.name, ".bulkDelete(): ").concat(c, " of ").concat(i, " operations failed"), h);
        });
      }, Me);
      function Me() {
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
        r.addEventType = f;
        for (var u = 1, c = arguments.length; u < c; ++u) f(arguments[u]);
        return r;
        function f(h, y, v) {
          if (typeof h != "object") {
            var E;
            y = y || X;
            var T = { subscribers: [], fire: v = v || g, subscribe: function(_) {
              T.subscribers.indexOf(_) === -1 && (T.subscribers.push(_), T.fire = y(T.fire, _));
            }, unsubscribe: function(_) {
              T.subscribers = T.subscribers.filter(function(I) {
                return I !== _;
              }), T.fire = T.subscribers.reduce(y, v);
            } };
            return i[h] = r[h] = T;
          }
          d(E = h).forEach(function(_) {
            var I = E[_];
            if (p(I)) f(_, E[_][0], E[_][1]);
            else {
              if (I !== "asap") throw new oe.InvalidArgument("Invalid event config");
              var b = f(_, w, function() {
                for (var O = arguments.length, S = new Array(O); O--; ) S[O] = arguments[O];
                b.subscribers.forEach(function(R) {
                  Ie(function() {
                    R.apply(null, S);
                  });
                });
              });
            }
          });
        }
      }
      function ar(t, r) {
        return $(r).from({ prototype: t }), r;
      }
      function Hn(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function qo(t, r) {
        t.filter = En(t.filter, r);
      }
      function $o(t, r, i) {
        var u = t.replayFilter;
        t.replayFilter = u ? function() {
          return En(u(), r());
        } : r, t.justLimit = i && !u;
      }
      function $r(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var i = r.getIndexByKeyPath(t.index);
        if (!i) throw new oe.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return i;
      }
      function hs(t, r, i) {
        var u = $r(t, r.schema);
        return r.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: u, range: t.range } });
      }
      function Wr(t, r, i, u) {
        var c = t.replayFilter ? En(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var f = {}, h = function(y, v, E) {
            var T, _;
            c && !c(v, E, function(I) {
              return v.stop(I);
            }, function(I) {
              return v.fail(I);
            }) || ((_ = "" + (T = v.primaryKey)) == "[object ArrayBuffer]" && (_ = "" + new Uint8Array(T)), C(f, _) || (f[_] = !0, r(y, v, E)));
          };
          return Promise.all([t.or._iterate(h, i), ms(hs(t, u, i), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return ms(hs(t, u, i), En(t.algorithm, c), r, !t.keysOnly && t.valueMapper);
      }
      function ms(t, r, i, u) {
        var c = Le(u ? function(f, h, y) {
          return i(u(f), h, y);
        } : i);
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
            }) || c(f.value, f, function(y) {
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
      var Du = (xe.prototype._read = function(t, r) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, He.bind(null, i.error)) : i.table._trans("readonly", t).then(r);
      }, xe.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, He.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, xe.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = En(r.algorithm, t);
      }, xe.prototype._iterate = function(t, r) {
        return Wr(this._ctx, t, r, this._ctx.table.core);
      }, xe.prototype.clone = function(t) {
        var r = Object.create(this.constructor.prototype), i = Object.create(this._ctx);
        return t && m(i, t), r._ctx = i, r;
      }, xe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, xe.prototype.each = function(t) {
        var r = this._ctx;
        return this._read(function(i) {
          return Wr(r, t, i, r.table.core);
        });
      }, xe.prototype.count = function(t) {
        var r = this;
        return this._read(function(i) {
          var u = r._ctx, c = u.table.core;
          if (Hn(u, !0)) return c.count({ trans: i, query: { index: $r(u, c.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var f = 0;
          return Wr(u, function() {
            return ++f, !1;
          }, i, c).then(function() {
            return f;
          });
        }).then(t);
      }, xe.prototype.sortBy = function(t, r) {
        var i = t.split(".").reverse(), u = i[0], c = i.length - 1;
        function f(v, E) {
          return E ? f(v[i[E]], E - 1) : v[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(v, E) {
          return me(f(v, c), f(E, c)) * h;
        }
        return this.toArray(function(v) {
          return v.sort(y);
        }).then(r);
      }, xe.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(i) {
          var u = r._ctx;
          if (u.dir === "next" && Hn(u, !0) && 0 < u.limit) {
            var c = u.valueMapper, f = $r(u, u.table.core.schema);
            return u.table.core.query({ trans: i, limit: u.limit, values: !0, query: { index: f, range: u.range } }).then(function(y) {
              return y = y.result, c ? y.map(c) : y;
            });
          }
          var h = [];
          return Wr(u, function(y) {
            return h.push(y);
          }, i, u.table.core).then(function() {
            return h;
          });
        }, t);
      }, xe.prototype.offset = function(t) {
        var r = this._ctx;
        return t <= 0 || (r.offset += t, Hn(r) ? $o(r, function() {
          var i = t;
          return function(u, c) {
            return i === 0 || (i === 1 ? --i : c(function() {
              u.advance(i), i = 0;
            }), !1);
          };
        }) : $o(r, function() {
          var i = t;
          return function() {
            return --i < 0;
          };
        })), this;
      }, xe.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), $o(this._ctx, function() {
          var r = t;
          return function(i, u, c) {
            return --r <= 0 && u(c), 0 <= r;
          };
        }, !0), this;
      }, xe.prototype.until = function(t, r) {
        return qo(this._ctx, function(i, u, c) {
          return !t(i.value) || (u(c), r);
        }), this;
      }, xe.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, xe.prototype.last = function(t) {
        return this.reverse().first(t);
      }, xe.prototype.filter = function(t) {
        var r;
        return qo(this._ctx, function(i) {
          return t(i.value);
        }), (r = this._ctx).isMatch = En(r.isMatch, t), this;
      }, xe.prototype.and = function(t) {
        return this.filter(t);
      }, xe.prototype.or = function(t) {
        return new this.db.WhereClause(this._ctx.table, t, this);
      }, xe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, xe.prototype.desc = function() {
        return this.reverse();
      }, xe.prototype.eachKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, u) {
          t(u.key, u);
        });
      }, xe.prototype.eachUniqueKey = function(t) {
        return this._ctx.unique = "unique", this.eachKey(t);
      }, xe.prototype.eachPrimaryKey = function(t) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(i, u) {
          t(u.primaryKey, u);
        });
      }, xe.prototype.keys = function(t) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(u, c) {
          i.push(c.key);
        }).then(function() {
          return i;
        }).then(t);
      }, xe.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Hn(r, !0) && 0 < r.limit) return this._read(function(u) {
          var c = $r(r, r.table.core.schema);
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
      }, xe.prototype.uniqueKeys = function(t) {
        return this._ctx.unique = "unique", this.keys(t);
      }, xe.prototype.firstKey = function(t) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(t);
      }, xe.prototype.lastKey = function(t) {
        return this.reverse().firstKey(t);
      }, xe.prototype.distinct = function() {
        var t = this._ctx, t = t.index && t.table.schema.idxByName[t.index];
        if (!t || !t.multi) return this;
        var r = {};
        return qo(this._ctx, function(c) {
          var u = c.primaryKey.toString(), c = C(r, u);
          return r[u] = !0, !c;
        }), this;
      }, xe.prototype.modify = function(t) {
        var r = this, i = this._ctx;
        return this._write(function(u) {
          var c, f, h;
          h = typeof t == "function" ? t : (c = d(t), f = c.length, function(N) {
            for (var P = !1, k = 0; k < f; ++k) {
              var D = c[k], V = t[D], Y = Ne(N, D);
              V instanceof ur ? (Se(N, D, V.execute(Y)), P = !0) : Y !== V && (Se(N, D, V), P = !0);
            }
            return P;
          });
          var y = i.table.core, _ = y.schema.primaryKey, v = _.outbound, E = _.extractKey, T = 200, _ = r.db._options.modifyChunkSize;
          _ && (T = typeof _ == "object" ? _[y.name] || _["*"] || 200 : _);
          function I(N, D) {
            var k = D.failures, D = D.numFailures;
            O += N - D;
            for (var V = 0, Y = d(k); V < Y.length; V++) {
              var G = Y[V];
              b.push(k[G]);
            }
          }
          var b = [], O = 0, S = [], R = t === ys;
          return r.clone().primaryKeys().then(function(N) {
            function P(D) {
              var V = Math.min(T, N.length - D), Y = N.slice(D, D + V);
              return (R ? Promise.resolve([]) : y.getMany({ trans: u, keys: Y, cache: "immutable" })).then(function(G) {
                var q = [], Z = [], J = v ? [] : null, te = R ? Y : [];
                if (!R) for (var he = 0; he < V; ++he) {
                  var _e = G[he], fe = { value: vt(_e), primKey: N[D + he] };
                  h.call(fe, fe.value, fe) !== !1 && (fe.value == null ? te.push(N[D + he]) : v || me(E(_e), E(fe.value)) === 0 ? (Z.push(fe.value), v && J.push(N[D + he])) : (te.push(N[D + he]), q.push(fe.value)));
                }
                return Promise.resolve(0 < q.length && y.mutate({ trans: u, type: "add", values: q }).then(function(Ke) {
                  for (var ce in Ke.failures) te.splice(parseInt(ce), 1);
                  I(q.length, Ke);
                })).then(function() {
                  return (0 < Z.length || k && typeof t == "object") && y.mutate({ trans: u, type: "put", keys: J, values: Z, criteria: k, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < D }).then(function(Ke) {
                    return I(Z.length, Ke);
                  });
                }).then(function() {
                  return (0 < te.length || k && R) && y.mutate({ trans: u, type: "delete", keys: te, criteria: k, isAdditionalChunk: 0 < D }).then(function(Ke) {
                    return qr(i.table, te, Ke);
                  }).then(function(Ke) {
                    return I(te.length, Ke);
                  });
                }).then(function() {
                  return N.length > D + V && P(D + T);
                });
              });
            }
            var k = Hn(i) && i.limit === 1 / 0 && (typeof t != "function" || R) && { index: i.index, range: i.range };
            return P(0).then(function() {
              if (0 < b.length) throw new Mn("Error modifying one or more objects", b, O, S);
              return N.length;
            });
          });
        });
      }, xe.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Hn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(ys) : this._write(function(i) {
          var u = t.table.core.schema.primaryKey, c = r;
          return t.table.core.count({ trans: i, query: { index: u, range: c } }).then(function(f) {
            return t.table.core.mutate({ trans: i, type: "deleteRange", range: c }).then(function(v) {
              var y = v.failures, v = v.numFailures;
              if (v) throw new Mn("Could not delete some values", Object.keys(y).map(function(E) {
                return y[E];
              }), f - v);
              return f - v;
            });
          });
        });
      }, xe);
      function xe() {
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
      function Fn(t) {
        return new t.Collection(t, function() {
          return _s("");
        }).limit(0);
      }
      function Yr(t, r, i, u) {
        var c, f, h, y, v, E, T, _ = i.length;
        if (!i.every(function(O) {
          return typeof O == "string";
        })) return ht(t, us);
        function I(O) {
          c = O === "next" ? function(R) {
            return R.toUpperCase();
          } : function(R) {
            return R.toLowerCase();
          }, f = O === "next" ? function(R) {
            return R.toLowerCase();
          } : function(R) {
            return R.toUpperCase();
          }, h = O === "next" ? Mu : ju;
          var S = i.map(function(R) {
            return { lower: f(R), upper: c(R) };
          }).sort(function(R, N) {
            return h(R.lower, N.lower);
          });
          y = S.map(function(R) {
            return R.upper;
          }), v = S.map(function(R) {
            return R.lower;
          }), T = (E = O) === "next" ? "" : u;
        }
        I("next"), t = new t.Collection(t, function() {
          return sn(y[0], v[_ - 1] + u);
        }), t._ondirectionchange = function(O) {
          I(O);
        };
        var b = 0;
        return t._addAlgorithm(function(O, S, R) {
          var N = O.key;
          if (typeof N != "string") return !1;
          var P = f(N);
          if (r(P, v, b)) return !0;
          for (var k = null, D = b; D < _; ++D) {
            var V = function(Y, G, q, Z, J, te) {
              for (var he = Math.min(Y.length, Z.length), _e = -1, fe = 0; fe < he; ++fe) {
                var Ke = G[fe];
                if (Ke !== Z[fe]) return J(Y[fe], q[fe]) < 0 ? Y.substr(0, fe) + q[fe] + q.substr(fe + 1) : J(Y[fe], Z[fe]) < 0 ? Y.substr(0, fe) + Z[fe] + q.substr(fe + 1) : 0 <= _e ? Y.substr(0, _e) + G[_e] + q.substr(_e + 1) : null;
                J(Y[fe], Ke) < 0 && (_e = fe);
              }
              return he < Z.length && te === "next" ? Y + q.substr(Y.length) : he < Y.length && te === "prev" ? Y.substr(0, q.length) : _e < 0 ? null : Y.substr(0, _e) + Z[_e] + q.substr(_e + 1);
            }(N, P, y[D], v[D], h, E);
            V === null && k === null ? b = D + 1 : (k === null || 0 < h(k, V)) && (k = V);
          }
          return S(k !== null ? function() {
            O.continue(k + T);
          } : R), !1;
        }), t;
      }
      function sn(t, r, i, u) {
        return { type: 2, lower: t, upper: r, lowerOpen: i, upperOpen: u };
      }
      function _s(t) {
        return { type: 1, lower: t, upper: t };
      }
      var vs = (Object.defineProperty(Xe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Xe.prototype.between = function(t, r, i, u) {
        i = i !== !1, u = u === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (i || u) && (!i || !u) ? Fn(this) : new this.Collection(this, function() {
            return sn(t, r, !i, !u);
          });
        } catch {
          return ht(this, Vt);
        }
      }, Xe.prototype.equals = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return _s(t);
        });
      }, Xe.prototype.above = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return sn(t, void 0, !0);
        });
      }, Xe.prototype.aboveOrEqual = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return sn(t, void 0, !1);
        });
      }, Xe.prototype.below = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return sn(void 0, t, !1, !0);
        });
      }, Xe.prototype.belowOrEqual = function(t) {
        return t == null ? ht(this, Vt) : new this.Collection(this, function() {
          return sn(void 0, t);
        });
      }, Xe.prototype.startsWith = function(t) {
        return typeof t != "string" ? ht(this, us) : this.between(t, t + wn, !0, !0);
      }, Xe.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : Yr(this, function(r, i) {
          return r.indexOf(i[0]) === 0;
        }, [t], wn);
      }, Xe.prototype.equalsIgnoreCase = function(t) {
        return Yr(this, function(r, i) {
          return r === i[0];
        }, [t], "");
      }, Xe.prototype.anyOfIgnoreCase = function() {
        var t = ft.apply(ct, arguments);
        return t.length === 0 ? Fn(this) : Yr(this, function(r, i) {
          return i.indexOf(r) !== -1;
        }, t, "");
      }, Xe.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = ft.apply(ct, arguments);
        return t.length === 0 ? Fn(this) : Yr(this, function(r, i) {
          return i.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, t, wn);
      }, Xe.prototype.anyOf = function() {
        var t = this, r = ft.apply(ct, arguments), i = this._cmp;
        try {
          r.sort(i);
        } catch {
          return ht(this, Vt);
        }
        if (r.length === 0) return Fn(this);
        var u = new this.Collection(this, function() {
          return sn(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(f) {
          i = f === "next" ? t._ascending : t._descending, r.sort(i);
        };
        var c = 0;
        return u._addAlgorithm(function(f, h, y) {
          for (var v = f.key; 0 < i(v, r[c]); ) if (++c === r.length) return h(y), !1;
          return i(v, r[c]) === 0 || (h(function() {
            f.continue(r[c]);
          }), !1);
        }), u;
      }, Xe.prototype.notEqual = function(t) {
        return this.inAnyRange([[-1 / 0, t], [t, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Xe.prototype.noneOf = function() {
        var t = ft.apply(ct, arguments);
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
      }, Xe.prototype.inAnyRange = function(N, r) {
        var i = this, u = this._cmp, c = this._ascending, f = this._descending, h = this._min, y = this._max;
        if (N.length === 0) return Fn(this);
        if (!N.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && c(P[0], P[1]) <= 0;
        })) return ht(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", oe.InvalidArgument);
        var v = !r || r.includeLowers !== !1, E = r && r.includeUppers === !0, T, _ = c;
        function I(P, k) {
          return _(P[0], k[0]);
        }
        try {
          (T = N.reduce(function(P, k) {
            for (var D = 0, V = P.length; D < V; ++D) {
              var Y = P[D];
              if (u(k[0], Y[1]) < 0 && 0 < u(k[1], Y[0])) {
                Y[0] = h(Y[0], k[0]), Y[1] = y(Y[1], k[1]);
                break;
              }
            }
            return D === V && P.push(k), P;
          }, [])).sort(I);
        } catch {
          return ht(this, Vt);
        }
        var b = 0, O = E ? function(P) {
          return 0 < c(P, T[b][1]);
        } : function(P) {
          return 0 <= c(P, T[b][1]);
        }, S = v ? function(P) {
          return 0 < f(P, T[b][0]);
        } : function(P) {
          return 0 <= f(P, T[b][0]);
        }, R = O, N = new this.Collection(this, function() {
          return sn(T[0][0], T[T.length - 1][1], !v, !E);
        });
        return N._ondirectionchange = function(P) {
          _ = P === "next" ? (R = O, c) : (R = S, f), T.sort(I);
        }, N._addAlgorithm(function(P, k, D) {
          for (var V, Y = P.key; R(Y); ) if (++b === T.length) return k(D), !1;
          return !O(V = Y) && !S(V) || (i._cmp(Y, T[b][1]) === 0 || i._cmp(Y, T[b][0]) === 0 || k(function() {
            _ === c ? P.continue(T[b][0]) : P.continue(T[b][1]);
          }), !1);
        }), N;
      }, Xe.prototype.startsWithAnyOf = function() {
        var t = ft.apply(ct, arguments);
        return t.every(function(r) {
          return typeof r == "string";
        }) ? t.length === 0 ? Fn(this) : this.inAnyRange(t.map(function(r) {
          return [r, r + wn];
        })) : ht(this, "startsWithAnyOf() only works with strings");
      }, Xe);
      function Xe() {
      }
      function Pt(t) {
        return Le(function(r) {
          return lr(r), t(r.target.error), !1;
        });
      }
      function lr(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var cr = "storagemutated", Wo = "x-storagemutated-1", an = sr(null, cr), Lu = (kt.prototype._lock = function() {
        return ae(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (ae(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            bn(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, kt.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
      }, kt.prototype.create = function(t) {
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
        return ae(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Le(function(c) {
          lr(c), r._reject(t.error);
        }), t.onabort = Le(function(c) {
          lr(c), r.active && r._reject(new oe.Abort(t.error)), r.active = !1, r.on("abort").fire(c);
        }), t.oncomplete = Le(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && an.storagemutated.fire(t.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(t, r, i) {
        var u = this;
        if (t === "readwrite" && this.mode !== "readwrite") return He(new oe.ReadOnly("Transaction is readonly"));
        if (!this.active) return He(new oe.TransactionInactive());
        if (this._locked()) return new ee(function(f, h) {
          u._blockedFuncs.push([function() {
            u._promise(t, r, i).then(f, h);
          }, ne]);
        });
        if (i) return nn(function() {
          var f = new ee(function(h, y) {
            u._lock();
            var v = r(h, y, u);
            v && v.then && v.then(h, y);
          });
          return f.finally(function() {
            return u._unlock();
          }), f._lib = !0, f;
        });
        var c = new ee(function(f, h) {
          var y = r(f, h, u);
          y && y.then && y.then(f, h);
        });
        return c._lib = !0, c;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(t) {
        var r, i = this._root(), u = ee.resolve(t);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return u;
        }) : (i._waitingFor = u, i._waitingQueue = [], r = i.idbtrans.objectStore(i.storeNames[0]), function f() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (r.get(-1 / 0).onsuccess = f);
        }());
        var c = i._waitingFor;
        return new ee(function(f, h) {
          u.then(function(y) {
            return i._waitingQueue.push(Le(f.bind(null, y)));
          }, function(y) {
            return i._waitingQueue.push(Le(h.bind(null, y)));
          }).finally(function() {
            i._waitingFor === c && (i._waitingFor = null);
          });
        });
      }, kt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new oe.Abort()));
      }, kt.prototype.table = function(t) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (C(r, t)) return r[t];
        var i = this.schema[t];
        if (!i) throw new oe.NotFound("Table " + t + " not part of transaction");
        return i = new this.db.Table(t, i, this), i.core = this.db.core.table(t), r[t] = i;
      }, kt);
      function kt() {
      }
      function Yo(t, r, i, u, c, f, h, y) {
        return { name: t, keyPath: r, unique: i, multi: u, auto: c, compound: f, src: (i && !h ? "&" : "") + (u ? "*" : "") + (c ? "++" : "") + bs(r), type: y };
      }
      function bs(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function Xo(t, r, i) {
        return { name: t, primKey: r, indexes: i, mappedClass: null, idxByName: (u = function(c) {
          return [c.name, c];
        }, i.reduce(function(c, f, h) {
          return h = u(f, h), h && (c[h[0]] = h[1]), c;
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
            return wn;
          }, wn;
        }
      };
      function zo(t) {
        return t == null ? function() {
        } : typeof t == "string" ? (r = t).split(".").length === 1 ? function(i) {
          return i[r];
        } : function(i) {
          return Ne(i, r);
        } : function(i) {
          return Ne(i, t);
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
        function c(I) {
          var b, O = I.name;
          return { name: O, schema: I, mutate: function(S) {
            var R = S.trans, N = S.type, P = S.keys, k = S.values, D = S.range;
            return new Promise(function(V, Y) {
              V = Le(V);
              var G = R.objectStore(O), q = G.keyPath == null, Z = N === "put" || N === "add";
              if (!Z && N !== "delete" && N !== "deleteRange") throw new Error("Invalid operation type: " + N);
              var J, te = (P || k || { length: 1 }).length;
              if (P && k && P.length !== k.length) throw new Error("Given keys array must have same length as given values array.");
              if (te === 0) return V({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(at) {
                ++Ke, lr(at);
              }
              var _e = [], fe = [], Ke = 0;
              if (N === "deleteRange") {
                if (D.type === 4) return V({ numFailures: Ke, failures: fe, results: [], lastResult: void 0 });
                D.type === 3 ? _e.push(J = G.clear()) : _e.push(J = G.delete(u(D)));
              } else {
                var q = Z ? q ? [k, P] : [k, null] : [P, null], ce = q[0], tt = q[1];
                if (Z) for (var nt = 0; nt < te; ++nt) _e.push(J = tt && tt[nt] !== void 0 ? G[N](ce[nt], tt[nt]) : G[N](ce[nt])), J.onerror = he;
                else for (nt = 0; nt < te; ++nt) _e.push(J = G[N](ce[nt])), J.onerror = he;
              }
              function so(at) {
                at = at.target.result, _e.forEach(function(Tn, hi) {
                  return Tn.error != null && (fe[hi] = Tn.error);
                }), V({ numFailures: Ke, failures: fe, results: N === "delete" ? P : _e.map(function(Tn) {
                  return Tn.result;
                }), lastResult: at });
              }
              J.onerror = function(at) {
                he(at), so(at);
              }, J.onsuccess = so;
            });
          }, getMany: function(S) {
            var R = S.trans, N = S.keys;
            return new Promise(function(P, k) {
              P = Le(P);
              for (var D, V = R.objectStore(O), Y = N.length, G = new Array(Y), q = 0, Z = 0, J = function(_e) {
                _e = _e.target, G[_e._pos] = _e.result, ++Z === q && P(G);
              }, te = Pt(k), he = 0; he < Y; ++he) N[he] != null && ((D = V.get(N[he]))._pos = he, D.onsuccess = J, D.onerror = te, ++q);
              q === 0 && P(G);
            });
          }, get: function(S) {
            var R = S.trans, N = S.key;
            return new Promise(function(P, k) {
              P = Le(P);
              var D = R.objectStore(O).get(N);
              D.onsuccess = function(V) {
                return P(V.target.result);
              }, D.onerror = Pt(k);
            });
          }, query: (b = E, function(S) {
            return new Promise(function(R, N) {
              R = Le(R);
              var P, k, D, q = S.trans, V = S.values, Y = S.limit, J = S.query, G = Y === 1 / 0 ? void 0 : Y, Z = J.index, J = J.range, q = q.objectStore(O), Z = Z.isPrimaryKey ? q : q.index(Z.name), J = u(J);
              if (Y === 0) return R({ result: [] });
              b ? ((G = V ? Z.getAll(J, G) : Z.getAllKeys(J, G)).onsuccess = function(te) {
                return R({ result: te.target.result });
              }, G.onerror = Pt(N)) : (P = 0, k = !V && "openKeyCursor" in Z ? Z.openKeyCursor(J) : Z.openCursor(J), D = [], k.onsuccess = function(te) {
                var he = k.result;
                return he ? (D.push(V ? he.value : he.primaryKey), ++P === Y ? R({ result: D }) : void he.continue()) : R({ result: D });
              }, k.onerror = Pt(N));
            });
          }), openCursor: function(S) {
            var R = S.trans, N = S.values, P = S.query, k = S.reverse, D = S.unique;
            return new Promise(function(V, Y) {
              V = Le(V);
              var Z = P.index, G = P.range, q = R.objectStore(O), q = Z.isPrimaryKey ? q : q.index(Z.name), Z = k ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", J = !N && "openKeyCursor" in q ? q.openKeyCursor(u(G), Z) : q.openCursor(u(G), Z);
              J.onerror = Pt(Y), J.onsuccess = Le(function(te) {
                var he, _e, fe, Ke, ce = J.result;
                ce ? (ce.___id = ++Bu, ce.done = !1, he = ce.continue.bind(ce), _e = (_e = ce.continuePrimaryKey) && _e.bind(ce), fe = ce.advance.bind(ce), Ke = function() {
                  throw new Error("Cursor not stopped");
                }, ce.trans = R, ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = function() {
                  throw new Error("Cursor not started");
                }, ce.fail = Le(Y), ce.next = function() {
                  var tt = this, nt = 1;
                  return this.start(function() {
                    return nt-- ? tt.continue() : tt.stop();
                  }).then(function() {
                    return tt;
                  });
                }, ce.start = function(tt) {
                  function nt() {
                    if (J.result) try {
                      tt();
                    } catch (at) {
                      ce.fail(at);
                    }
                    else ce.done = !0, ce.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ce.stop();
                  }
                  var so = new Promise(function(at, Tn) {
                    at = Le(at), J.onerror = Pt(Tn), ce.fail = Tn, ce.stop = function(hi) {
                      ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = Ke, at(hi);
                    };
                  });
                  return J.onsuccess = Le(function(at) {
                    J.onsuccess = nt, nt();
                  }), ce.continue = he, ce.continuePrimaryKey = _e, ce.advance = fe, nt(), so;
                }, V(ce)) : V(null);
              }, Y);
            });
          }, count: function(S) {
            var R = S.query, N = S.trans, P = R.index, k = R.range;
            return new Promise(function(D, V) {
              var Y = N.objectStore(O), G = P.isPrimaryKey ? Y : Y.index(P.name), Y = u(k), G = Y ? G.count(Y) : G.count();
              G.onsuccess = Le(function(q) {
                return D(q.target.result);
              }), G.onerror = Pt(V);
            });
          } };
        }
        var f, h, y, T = (h = v, y = ws((f = t).objectStoreNames), { schema: { name: f.name, tables: y.map(function(I) {
          return h.objectStore(I);
        }).map(function(I) {
          var b = I.keyPath, R = I.autoIncrement, O = p(b), S = {}, R = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: b == null, compound: O, keyPath: b, autoIncrement: R, unique: !0, extractKey: zo(b) }, indexes: ws(I.indexNames).map(function(N) {
            return I.index(N);
          }).map(function(D) {
            var P = D.name, k = D.unique, V = D.multiEntry, D = D.keyPath, V = { name: P, compound: p(D), keyPath: D, unique: k, multiEntry: V, extractKey: zo(D) };
            return S[dr(D)] = V;
          }), getIndexByKeyPath: function(N) {
            return S[dr(N)];
          } };
          return S[":id"] = R.primaryKey, b != null && (S[dr(b)] = R.primaryKey), R;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = T.schema, E = T.hasGetAll, T = v.tables.map(c), _ = {};
        return T.forEach(function(I) {
          return _[I.name] = I;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(I) {
          if (!_[I]) throw new Error("Table '".concat(I, "' not found"));
          return _[I];
        }, MIN_KEY: -1 / 0, MAX_KEY: fr(r), schema: v };
      }
      function Uu(t, r, i, u) {
        var c = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (u = Ku(r, c, u), t.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, u)) };
      }
      function Xr(t, u) {
        var i = u.db, u = Uu(t._middlewares, i, t._deps, u);
        t.core = u.dbcore, t.tables.forEach(function(c) {
          var f = c.name;
          t.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (c.core = t.core.table(f), t[f] instanceof t.Table && (t[f].core = c.core));
        });
      }
      function zr(t, r, i, u) {
        i.forEach(function(c) {
          var f = u[c];
          r.forEach(function(h) {
            var y = function v(E, T) {
              return Re(E, T) || (E = A(E)) && v(E, T);
            }(h, c);
            (!y || "value" in y && y.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? M(h, c, { get: function() {
              return this.table(c);
            }, set: function(v) {
              L(this, c, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[c] = new t.Table(c, f));
          });
        });
      }
      function Jo(t, r) {
        r.forEach(function(i) {
          for (var u in i) i[u] instanceof t.Table && delete i[u];
        });
      }
      function Hu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function Fu(t, r, i, u) {
        var c = t._dbSchema;
        i.objectStoreNames.contains("$meta") && !c.$meta && (c.$meta = Xo("$meta", Os("")[0], []), t._storeNames.push("$meta"));
        var f = t._createTransaction("readwrite", t._storeNames, c);
        f.create(i), f._completion.catch(u);
        var h = f._reject.bind(f), y = ne.transless || ne;
        nn(function() {
          return ne.trans = f, ne.transless = y, r !== 0 ? (Xr(t, i), E = r, ((v = f).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(T) {
            return T ?? E;
          }) : ee.resolve(E)).then(function(T) {
            return I = T, b = f, O = i, S = [], T = (_ = t)._versions, R = _._dbSchema = Qr(0, _.idbdb, O), (T = T.filter(function(N) {
              return N._cfg.version >= I;
            })).length !== 0 ? (T.forEach(function(N) {
              S.push(function() {
                var P = R, k = N._cfg.dbschema;
                Zr(_, P, O), Zr(_, k, O), R = _._dbSchema = k;
                var D = Qo(P, k);
                D.add.forEach(function(Z) {
                  Zo(O, Z[0], Z[1].primKey, Z[1].indexes);
                }), D.change.forEach(function(Z) {
                  if (Z.recreate) throw new oe.Upgrade("Not yet support for changing primary key");
                  var J = O.objectStore(Z.name);
                  Z.add.forEach(function(te) {
                    return Jr(J, te);
                  }), Z.change.forEach(function(te) {
                    J.deleteIndex(te.name), Jr(J, te);
                  }), Z.del.forEach(function(te) {
                    return J.deleteIndex(te);
                  });
                });
                var V = N._cfg.contentUpgrade;
                if (V && N._cfg.version > I) {
                  Xr(_, O), b._memoizedTables = {};
                  var Y = _t(k);
                  D.del.forEach(function(Z) {
                    Y[Z] = P[Z];
                  }), Jo(_, [_.Transaction.prototype]), zr(_, [_.Transaction.prototype], d(Y), Y), b.schema = Y;
                  var G, q = xt(V);
                  return q && Kn(), D = ee.follow(function() {
                    var Z;
                    (G = V(b)) && q && (Z = rn.bind(null, null), G.then(Z, Z));
                  }), G && typeof G.then == "function" ? ee.resolve(G) : D.then(function() {
                    return G;
                  });
                }
              }), S.push(function(P) {
                var k, D, V = N._cfg.dbschema;
                k = V, D = P, [].slice.call(D.db.objectStoreNames).forEach(function(Y) {
                  return k[Y] == null && D.db.deleteObjectStore(Y);
                }), Jo(_, [_.Transaction.prototype]), zr(_, [_.Transaction.prototype], _._storeNames, _._dbSchema), b.schema = _._dbSchema;
              }), S.push(function(P) {
                _.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(_.idbdb.version / 10) === N._cfg.version ? (_.idbdb.deleteObjectStore("$meta"), delete _._dbSchema.$meta, _._storeNames = _._storeNames.filter(function(k) {
                  return k !== "$meta";
                })) : P.objectStore("$meta").put(N._cfg.version, "version"));
              });
            }), function N() {
              return S.length ? ee.resolve(S.shift()(b.idbtrans)).then(N) : ee.resolve();
            }().then(function() {
              Es(R, O);
            })) : ee.resolve();
            var _, I, b, O, S, R;
          }).catch(h)) : (d(c).forEach(function(T) {
            Zo(i, T, c[T].primKey, c[T].indexes);
          }), Xr(t, i), void ee.follow(function() {
            return t.on.populate.fire(f);
          }).catch(h));
          var v, E;
        });
      }
      function Vu(t, r) {
        Es(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var i = Qr(0, t.idbdb, r);
        Zr(t, t._dbSchema, r);
        for (var u = 0, c = Qo(i, t._dbSchema).change; u < c.length; u++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(v) {
              K && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(v.src)), Jr(y, v);
            });
          }(c[u]);
          if (typeof f == "object") return f.value;
        }
      }
      function Qo(t, r) {
        var i, u = { del: [], add: [], change: [] };
        for (i in t) r[i] || u.del.push(i);
        for (i in r) {
          var c = t[i], f = r[i];
          if (c) {
            var h = { name: i, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (c.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || c.primKey.auto !== f.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = c.idxByName, v = f.idxByName, E = void 0;
              for (E in y) v[E] || h.del.push(E);
              for (E in v) {
                var T = y[E], _ = v[E];
                T ? T.src !== _.src && h.change.push(_) : h.add.push(_);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([i, f]);
        }
        return u;
      }
      function Zo(t, r, i, u) {
        var c = t.db.createObjectStore(r, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return u.forEach(function(f) {
          return Jr(c, f);
        }), c;
      }
      function Es(t, r) {
        d(t).forEach(function(i) {
          r.db.objectStoreNames.contains(i) || (K && console.debug("Dexie: Creating missing table", i), Zo(r, i, t[i].primKey, t[i].indexes));
        });
      }
      function Jr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Qr(t, r, i) {
        var u = {};
        return Ee(r.objectStoreNames, 0).forEach(function(c) {
          for (var f = i.objectStore(c), h = Yo(bs(E = f.keyPath), E || "", !0, !1, !!f.autoIncrement, E && typeof E != "string", !0), y = [], v = 0; v < f.indexNames.length; ++v) {
            var T = f.index(f.indexNames[v]), E = T.keyPath, T = Yo(T.name, E, !!T.unique, !!T.multiEntry, !1, E && typeof E != "string", !1);
            y.push(T);
          }
          u[c] = Xo(c, h, y);
        }), u;
      }
      function Zr(t, r, i) {
        for (var u = i.db.objectStoreNames, c = 0; c < u.length; ++c) {
          var f = u[c], h = i.objectStore(f);
          t._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var v = h.indexNames[y], E = h.index(v).keyPath, T = typeof E == "string" ? E : "[" + Ee(E).join("+") + "]";
            !r[f] || (E = r[f].idxByName[T]) && (E.name = v, delete r[f].idxByName[T], r[f].idxByName[v] = E);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function Os(t) {
        return t.split(",").map(function(r, i) {
          var f = r.split(":"), u = (c = f[1]) === null || c === void 0 ? void 0 : c.trim(), c = (r = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(c) ? c.match(/^\[(.*)\]$/)[1].split("+") : c;
          return Yo(c, f || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(f), i === 0, u);
        });
      }
      var Gu = (Vn.prototype._createTableSchema = Xo, Vn.prototype._parseIndexSyntax = Os, Vn.prototype._parseStoresSpec = function(t, r) {
        var i = this;
        d(t).forEach(function(u) {
          if (t[u] !== null) {
            var c = i._parseIndexSyntax(t[u]), f = c.shift();
            if (!f) throw new oe.Schema("Invalid schema for table " + u + ": " + t[u]);
            if (f.unique = !0, f.multi) throw new oe.Schema("Primary key cannot be multiEntry*");
            c.forEach(function(h) {
              if (h.auto) throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new oe.Schema("Index must have a name and cannot be an empty string");
            }), c = i._createTableSchema(u, f, c), r[u] = c;
          }
        });
      }, Vn.prototype.stores = function(i) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, i) : i;
        var i = r._versions, u = {}, c = {};
        return i.forEach(function(f) {
          m(u, f._cfg.storesSource), c = f._cfg.dbschema = {}, f._parseStoresSpec(u, c);
        }), r._dbSchema = c, Jo(r, [r._allTables, r, r.Transaction.prototype]), zr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], d(c), c), r._storeNames = d(c), this;
      }, Vn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = W(this._cfg.contentUpgrade || g, t), this;
      }, Vn);
      function Vn() {
      }
      function ei(t, r) {
        var i = t._dbNamesDB;
        return i || (i = t._dbNamesDB = new Gt(Vr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function ti(t) {
        return t && typeof t.databases == "function";
      }
      function ni(t) {
        return nn(function() {
          return ne.letThrough = !0, t();
        });
      }
      function ri(t) {
        return !("from" in t);
      }
      var et = function(t, r) {
        if (!this) {
          var i = new et();
          return t && "d" in t && m(i, t), i;
        }
        m(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function pr(t, r, i) {
        var u = me(r, i);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (ri(t)) return m(t, { from: r, to: i, d: 1 });
          var c = t.l, u = t.r;
          if (me(i, t.from) < 0) return c ? pr(c, r, i) : t.l = { from: r, to: i, d: 1, l: null, r: null }, Ts(t);
          if (0 < me(r, t.to)) return u ? pr(u, r, i) : t.r = { from: r, to: i, d: 1, l: null, r: null }, Ts(t);
          me(r, t.from) < 0 && (t.from = r, t.l = null, t.d = u ? u.d + 1 : 1), 0 < me(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, c && !t.l && hr(t, c), u && i && hr(t, u);
        }
      }
      function hr(t, r) {
        ri(r) || function i(u, v) {
          var f = v.from, h = v.to, y = v.l, v = v.r;
          pr(u, f, h), y && i(u, y), v && i(u, v);
        }(t, r);
      }
      function xs(t, r) {
        var i = eo(r), u = i.next();
        if (u.done) return !1;
        for (var c = u.value, f = eo(t), h = f.next(c.from), y = h.value; !u.done && !h.done; ) {
          if (me(y.from, c.to) <= 0 && 0 <= me(y.to, c.from)) return !0;
          me(c.from, y.from) < 0 ? c = (u = i.next(y.from)).value : y = (h = f.next(c.from)).value;
        }
        return !1;
      }
      function eo(t) {
        var r = ri(t) ? null : { s: 0, n: t };
        return { next: function(i) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && me(i, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || me(i, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function to(t, r) {
        return d(r).forEach(function(i) {
          t[i] ? hr(t[i], r[i]) : t[i] = function u(c) {
            var f, h, y = {};
            for (f in c) C(c, f) && (h = c[f], y[f] = !h || typeof h != "object" || Qt.has(h.constructor) ? h : u(h));
            return y;
          }(r[i]);
        }), t;
      }
      function oi(t, r) {
        return t.all || r.all || Object.keys(t).some(function(i) {
          return r[i] && xs(r[i], t[i]);
        });
      }
      B(et.prototype, ((Et = { add: function(t) {
        return hr(this, t), this;
      }, addKey: function(t) {
        return pr(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(i) {
          return pr(r, i, i);
        }), this;
      }, hasKey: function(t) {
        var r = eo(this).next(t).value;
        return r && me(r.from, t) <= 0 && 0 <= me(r.to, t);
      } })[qe] = function() {
        return eo(this);
      }, Et));
      var On = {}, ii = {}, si = !1;
      function no(t) {
        to(ii, t), si || (si = !0, setTimeout(function() {
          si = !1, ai(ii, !(ii = {}));
        }, 0));
      }
      function ai(t, r) {
        r === void 0 && (r = !1);
        var i = /* @__PURE__ */ new Set();
        if (t.all) for (var u = 0, c = Object.values(On); u < c.length; u++) Ss(h = c[u], t, i, r);
        else for (var f in t) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          y && (f = y[1], y = y[2], (h = On["idb://".concat(f, "/").concat(y)]) && Ss(h, t, i, r));
        }
        i.forEach(function(v) {
          return v();
        });
      }
      function Ss(t, r, i, u) {
        for (var c = [], f = 0, h = Object.entries(t.queries.query); f < h.length; f++) {
          for (var y = h[f], v = y[0], E = [], T = 0, _ = y[1]; T < _.length; T++) {
            var I = _[T];
            oi(r, I.obsSet) ? I.subscribers.forEach(function(R) {
              return i.add(R);
            }) : u && E.push(I);
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
          return r.dbOpenError ? He(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, c = Math.round(10 * t.verno), f = !1;
        function h() {
          if (r.openCanceller !== u) throw new oe.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new ee(function(I, b) {
            if (h(), !i) throw new oe.MissingAPI();
            var O = t.name, S = r.autoSchema || !c ? i.open(O) : i.open(O, c);
            if (!S) throw new oe.MissingAPI();
            S.onerror = Pt(b), S.onblocked = Le(t._fireOnBlocked), S.onupgradeneeded = Le(function(R) {
              var N;
              T = S.transaction, r.autoSchema && !t._options.allowEmptyDB ? (S.onerror = lr, T.abort(), S.result.close(), (N = i.deleteDatabase(O)).onsuccess = N.onerror = Le(function() {
                b(new oe.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (T.onerror = Pt(b), R = R.oldVersion > Math.pow(2, 62) ? 0 : R.oldVersion, _ = R < 1, t.idbdb = S.result, f && Vu(t, T), Fu(t, R / 10, T, b));
            }, b), S.onsuccess = Le(function() {
              T = null;
              var R, N, P, k, D, V = t.idbdb = S.result, Y = Ee(V.objectStoreNames);
              if (0 < Y.length) try {
                var G = V.transaction((k = Y).length === 1 ? k[0] : k, "readonly");
                if (r.autoSchema) N = V, P = G, (R = t).verno = N.version / 10, P = R._dbSchema = Qr(0, N, P), R._storeNames = Ee(N.objectStoreNames, 0), zr(R, [R._allTables], d(P), P);
                else if (Zr(t, t._dbSchema, G), ((D = Qo(Qr(0, (D = t).idbdb, G), D._dbSchema)).add.length || D.change.some(function(q) {
                  return q.add.length || q.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), V.close(), c = V.version + 1, f = !0, I(y());
                Xr(t, G);
              } catch {
              }
              Un.push(t), V.onversionchange = Le(function(q) {
                r.vcFired = !0, t.on("versionchange").fire(q);
              }), V.onclose = Le(function(q) {
                t.on("close").fire(q);
              }), _ && (D = t._deps, G = O, V = D.indexedDB, D = D.IDBKeyRange, ti(V) || G === Vr || ei(V, D).put({ name: G }).catch(g)), I();
            }, b);
          }).catch(function(I) {
            switch (I?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < c) return c = 0, y();
            }
            return ee.reject(I);
          });
        }
        var v, E = r.dbReadyResolve, T = null, _ = !1;
        return ee.race([u, (typeof navigator > "u" ? ee.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(I) {
          function b() {
            return indexedDB.databases().finally(I);
          }
          v = setInterval(b, 100), b();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], ee.resolve(ni(function() {
            return t.on.ready.fire(t.vip);
          })).then(function I() {
            if (0 < r.onReadyBeingFired.length) {
              var b = r.onReadyBeingFired.reduce(W, g);
              return r.onReadyBeingFired = [], ee.resolve(ni(function() {
                return b(t.vip);
              })).then(I);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(I) {
          r.dbOpenError = I;
          try {
            T && T.abort();
          } catch {
          }
          return u === r.openCanceller && t._close(), He(I);
        }).finally(function() {
          r.openComplete = !0, E();
        }).then(function() {
          var I;
          return _ && (I = {}, t.tables.forEach(function(b) {
            b.schema.indexes.forEach(function(O) {
              O.name && (I["idb://".concat(t.name, "/").concat(b.name, "/").concat(O.name)] = new et(-1 / 0, [[[]]]));
            }), I["idb://".concat(t.name, "/").concat(b.name, "/")] = I["idb://".concat(t.name, "/").concat(b.name, "/:dels")] = new et(-1 / 0, [[[]]]);
          }), an(cr).fire(I), ai(I, !0)), t;
        });
      }
      function ui(t) {
        function r(f) {
          return t.next(f);
        }
        var i = c(r), u = c(function(f) {
          return t.throw(f);
        });
        function c(f) {
          return function(v) {
            var y = f(v), v = y.value;
            return y.done ? v : v && typeof v.then == "function" ? v.then(i, u) : p(v) ? Promise.all(v).then(i, u) : i(v);
          };
        }
        return c(r)();
      }
      function ro(t, r, i) {
        for (var u = p(t) ? t.slice() : [t], c = 0; c < i; ++c) u.push(r);
        return u;
      }
      var $u = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema, c = {}, f = [];
          function h(_, I, b) {
            var O = dr(_), S = c[O] = c[O] || [], R = _ == null ? 0 : typeof _ == "string" ? 1 : _.length, N = 0 < I, N = s(s({}, b), { name: N ? "".concat(O, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: N, keyTail: I, keyLength: R, extractKey: zo(_), unique: !N && b.unique });
            return S.push(N), N.isPrimaryKey || f.push(N), 1 < R && h(R === 2 ? _[0] : _.slice(0, R - 1), I + 1, b), S.sort(function(P, k) {
              return P.keyTail - k.keyTail;
            }), N;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), c[":id"] = [r];
          for (var y = 0, v = u.indexes; y < v.length; y++) {
            var E = v[y];
            h(E.keyPath, 0, E);
          }
          function T(_) {
            var I, b = _.query.index;
            return b.isVirtual ? s(s({}, _), { query: { index: b.lowLevelIndex, range: (I = _.query.range, b = b.keyTail, { type: I.type === 1 ? 2 : I.type, lower: ro(I.lower, I.lowerOpen ? t.MAX_KEY : t.MIN_KEY, b), lowerOpen: !0, upper: ro(I.upper, I.upperOpen ? t.MIN_KEY : t.MAX_KEY, b), upperOpen: !0 }) } }) : _;
          }
          return s(s({}, i), { schema: s(s({}, u), { primaryKey: r, indexes: f, getIndexByKeyPath: function(_) {
            return (_ = c[dr(_)]) && _[0];
          } }), count: function(_) {
            return i.count(T(_));
          }, query: function(_) {
            return i.query(T(_));
          }, openCursor: function(_) {
            var I = _.query.index, b = I.keyTail, O = I.isVirtual, S = I.keyLength;
            return O ? i.openCursor(T(_)).then(function(N) {
              return N && R(N);
            }) : i.openCursor(_);
            function R(N) {
              return Object.create(N, { continue: { value: function(P) {
                P != null ? N.continue(ro(P, _.reverse ? t.MAX_KEY : t.MIN_KEY, b)) : _.unique ? N.continue(N.key.slice(0, S).concat(_.reverse ? t.MIN_KEY : t.MAX_KEY, b)) : N.continue();
              } }, continuePrimaryKey: { value: function(P, k) {
                N.continuePrimaryKey(ro(P, t.MAX_KEY, b), k);
              } }, primaryKey: { get: function() {
                return N.primaryKey;
              } }, key: { get: function() {
                var P = N.key;
                return S === 1 ? P[0] : P.slice(0, S);
              } }, value: { get: function() {
                return N.value;
              } } });
            }
          } });
        } });
      } };
      function li(t, r, i, u) {
        return i = i || {}, u = u || "", d(t).forEach(function(c) {
          var f, h, y;
          C(r, c) ? (f = t[c], h = r[c], typeof f == "object" && typeof h == "object" && f && h ? (y = Dn(f)) !== Dn(h) ? i[u + c] = r[c] : y === "Object" ? li(f, h, i, u + c + ".") : f !== h && (i[u + c] = r[c]) : f !== h && (i[u + c] = r[c])) : i[u + c] = void 0;
        }), d(r).forEach(function(c) {
          C(t, c) || (i[u + c] = r[c]);
        }), i;
      }
      function ci(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var Wu = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema.primaryKey;
          return s(s({}, i), { mutate: function(c) {
            var f = ne.trans, h = f.table(r).hook, y = h.deleting, v = h.creating, E = h.updating;
            switch (c.type) {
              case "add":
                if (v.fire === g) break;
                return f._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "put":
                if (v.fire === g && E.fire === g) break;
                return f._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "delete":
                if (y.fire === g) break;
                return f._promise("readwrite", function() {
                  return T(c);
                }, !0);
              case "deleteRange":
                if (y.fire === g) break;
                return f._promise("readwrite", function() {
                  return function _(I, b, O) {
                    return i.query({ trans: I, values: !1, query: { index: u, range: b }, limit: O }).then(function(S) {
                      var R = S.result;
                      return T({ type: "delete", keys: R, trans: I }).then(function(N) {
                        return 0 < N.numFailures ? Promise.reject(N.failures[0]) : R.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : _(I, s(s({}, b), { lower: R[R.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  }(c.trans, c.range, 1e4);
                }, !0);
            }
            return i.mutate(c);
            function T(_) {
              var I, b, O, S = ne.trans, R = _.keys || ci(u, _);
              if (!R) throw new Error("Keys missing");
              return (_ = _.type === "add" || _.type === "put" ? s(s({}, _), { keys: R }) : s({}, _)).type !== "delete" && (_.values = a([], _.values)), _.keys && (_.keys = a([], _.keys)), I = i, O = R, ((b = _).type === "add" ? Promise.resolve([]) : I.getMany({ trans: b.trans, keys: O, cache: "immutable" })).then(function(N) {
                var P = R.map(function(k, D) {
                  var V, Y, G, q = N[D], Z = { onerror: null, onsuccess: null };
                  return _.type === "delete" ? y.fire.call(Z, k, q, S) : _.type === "add" || q === void 0 ? (V = v.fire.call(Z, k, _.values[D], S), k == null && V != null && (_.keys[D] = k = V, u.outbound || Se(_.values[D], u.keyPath, k))) : (V = li(q, _.values[D]), (Y = E.fire.call(Z, V, k, q, S)) && (G = _.values[D], Object.keys(Y).forEach(function(J) {
                    C(G, J) ? G[J] = Y[J] : Se(G, J, Y[J]);
                  }))), Z;
                });
                return i.mutate(_).then(function(k) {
                  for (var D = k.failures, V = k.results, Y = k.numFailures, k = k.lastResult, G = 0; G < R.length; ++G) {
                    var q = (V || R)[G], Z = P[G];
                    q == null ? Z.onerror && Z.onerror(D[G]) : Z.onsuccess && Z.onsuccess(_.type === "put" && N[G] ? _.values[G] : q);
                  }
                  return { failures: D, results: V, numFailures: Y, lastResult: k };
                }).catch(function(k) {
                  return P.forEach(function(D) {
                    return D.onerror && D.onerror(k);
                  }), Promise.reject(k);
                });
              });
            }
          } });
        } });
      } };
      function Is(t, r, i) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var u = [], c = 0, f = 0; c < r.keys.length && f < t.length; ++c) me(r.keys[c], t[f]) === 0 && (u.push(i ? vt(r.values[c]) : r.values[c]), ++f);
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
            var c = Is(u.keys, u.trans._cache, u.cache === "clone");
            return c ? ee.resolve(c) : i.getMany(u).then(function(f) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? vt(f) : f }, f;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), i.mutate(u);
          } });
        } };
      } };
      function Ns(t, r) {
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
        var r = t.schema.name, i = new et(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(u, c, f) {
          if (ne.subscr && c !== "readonly") throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return t.transaction(u, c, f);
        }, table: function(u) {
          var c = t.table(u), f = c.schema, h = f.primaryKey, _ = f.indexes, y = h.extractKey, v = h.outbound, E = h.autoIncrement && _.filter(function(b) {
            return b.compound && b.keyPath.includes(h.keyPath);
          }), T = s(s({}, c), { mutate: function(b) {
            function O(J) {
              return J = "idb://".concat(r, "/").concat(u, "/").concat(J), k[J] || (k[J] = new et());
            }
            var S, R, N, P = b.trans, k = b.mutatedParts || (b.mutatedParts = {}), D = O(""), V = O(":dels"), Y = b.type, Z = b.type === "deleteRange" ? [b.range] : b.type === "delete" ? [b.keys] : b.values.length < 50 ? [ci(h, b).filter(function(J) {
              return J;
            }), b.values] : [], G = Z[0], q = Z[1], Z = b.trans._cache;
            return p(G) ? (D.addKeys(G), (Z = Y === "delete" || G.length === q.length ? Is(G, Z) : null) || V.addKeys(G), (Z || q) && (S = O, R = Z, N = q, f.indexes.forEach(function(J) {
              var te = S(J.name || "");
              function he(fe) {
                return fe != null ? J.extractKey(fe) : null;
              }
              function _e(fe) {
                return J.multiEntry && p(fe) ? fe.forEach(function(Ke) {
                  return te.addKey(Ke);
                }) : te.addKey(fe);
              }
              (R || N).forEach(function(fe, tt) {
                var ce = R && he(R[tt]), tt = N && he(N[tt]);
                me(ce, tt) !== 0 && (ce != null && _e(ce), tt != null && _e(tt));
              });
            }))) : G ? (q = { from: (q = G.lower) !== null && q !== void 0 ? q : t.MIN_KEY, to: (q = G.upper) !== null && q !== void 0 ? q : t.MAX_KEY }, V.add(q), D.add(q)) : (D.add(i), V.add(i), f.indexes.forEach(function(J) {
              return O(J.name).add(i);
            })), c.mutate(b).then(function(J) {
              return !G || b.type !== "add" && b.type !== "put" || (D.addKeys(J.results), E && E.forEach(function(te) {
                for (var he = b.values.map(function(ce) {
                  return te.extractKey(ce);
                }), _e = te.keyPath.findIndex(function(ce) {
                  return ce === h.keyPath;
                }), fe = 0, Ke = J.results.length; fe < Ke; ++fe) he[fe][_e] = J.results[fe];
                O(te.name).addKeys(he);
              })), P.mutatedParts = to(P.mutatedParts || {}, k), J;
            });
          } }), _ = function(O) {
            var S = O.query, O = S.index, S = S.range;
            return [O, new et((O = S.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : t.MAX_KEY)];
          }, I = { get: function(b) {
            return [h, new et(b.key)];
          }, getMany: function(b) {
            return [h, new et().addKeys(b.keys)];
          }, count: _, query: _, openCursor: _ };
          return d(I).forEach(function(b) {
            T[b] = function(O) {
              var S = ne.subscr, R = !!S, N = Ns(ne, c) && As(b, O) ? O.obsSet = {} : S;
              if (R) {
                var P = function(q) {
                  return q = "idb://".concat(r, "/").concat(u, "/").concat(q), N[q] || (N[q] = new et());
                }, k = P(""), D = P(":dels"), S = I[b](O), R = S[0], S = S[1];
                if ((b === "query" && R.isPrimaryKey && !O.values ? D : P(R.name || "")).add(S), !R.isPrimaryKey) {
                  if (b !== "count") {
                    var V = b === "query" && v && O.values && c.query(s(s({}, O), { values: !1 }));
                    return c[b].apply(this, arguments).then(function(q) {
                      if (b === "query") {
                        if (v && O.values) return V.then(function(he) {
                          return he = he.result, k.addKeys(he), q;
                        });
                        var Z = O.values ? q.result.map(y) : q.result;
                        (O.values ? k : D).addKeys(Z);
                      } else if (b === "openCursor") {
                        var J = q, te = O.values;
                        return J && Object.create(J, { key: { get: function() {
                          return D.addKey(J.primaryKey), J.key;
                        } }, primaryKey: { get: function() {
                          var he = J.primaryKey;
                          return D.addKey(he), he;
                        } }, value: { get: function() {
                          return te && k.addKey(J.primaryKey), J.value;
                        } } });
                      }
                      return q;
                    });
                  }
                  D.add(i);
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
        return i.numFailures === u ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(c, f) {
          return !(f in i.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(c, f) {
          return !(f in i.failures);
        })), r);
      }
      function fi(t, r) {
        return i = t, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < me(i, u.lower) : 0 <= me(i, u.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? me(t, r.upper) < 0 : me(t, r.upper) <= 0));
        var i, u;
      }
      function Ps(t, r, I, u, c, f) {
        if (!I || I.length === 0) return t;
        var h = r.query.index, y = h.multiEntry, v = r.query.range, E = u.schema.primaryKey.extractKey, T = h.extractKey, _ = (h.lowLevelIndex || h).extractKey, I = I.reduce(function(b, O) {
          var S = b, R = [];
          if (O.type === "add" || O.type === "put") for (var N = new et(), P = O.values.length - 1; 0 <= P; --P) {
            var k, D = O.values[P], V = E(D);
            N.hasKey(V) || (k = T(D), (y && p(k) ? k.some(function(J) {
              return fi(J, v);
            }) : fi(k, v)) && (N.addKey(V), R.push(D)));
          }
          switch (O.type) {
            case "add":
              var Y = new et().addKeys(r.values ? b.map(function(te) {
                return E(te);
              }) : b), S = b.concat(r.values ? R.filter(function(te) {
                return te = E(te), !Y.hasKey(te) && (Y.addKey(te), !0);
              }) : R.map(function(te) {
                return E(te);
              }).filter(function(te) {
                return !Y.hasKey(te) && (Y.addKey(te), !0);
              }));
              break;
            case "put":
              var G = new et().addKeys(O.values.map(function(te) {
                return E(te);
              }));
              S = b.filter(function(te) {
                return !G.hasKey(r.values ? E(te) : te);
              }).concat(r.values ? R : R.map(function(te) {
                return E(te);
              }));
              break;
            case "delete":
              var q = new et().addKeys(O.keys);
              S = b.filter(function(te) {
                return !q.hasKey(r.values ? E(te) : te);
              });
              break;
            case "deleteRange":
              var Z = O.range;
              S = b.filter(function(te) {
                return !fi(E(te), Z);
              });
          }
          return S;
        }, t);
        return I === t ? t : (I.sort(function(b, O) {
          return me(_(b), _(O)) || me(E(b), E(O));
        }), r.limit && r.limit < 1 / 0 && (I.length > r.limit ? I.length = r.limit : t.length === r.limit && I.length < r.limit && (c.dirty = !0)), f ? Object.freeze(I) : I);
      }
      function ks(t, r) {
        return me(t.lower, r.lower) === 0 && me(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function zu(t, r) {
        return function(i, u, c, f) {
          if (i === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = me(i, u)) === 0) {
            if (c && f) return 0;
            if (c) return 1;
            if (f) return -1;
          }
          return u;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(i, u, c, f) {
          if (i === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = me(i, u)) === 0) {
            if (c && f) return 0;
            if (c) return -1;
            if (f) return 1;
          }
          return u;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function Ju(t, r, i, u) {
        t.subscribers.add(i), u.addEventListener("abort", function() {
          var c, f;
          t.subscribers.delete(i), t.subscribers.size === 0 && (c = t, f = r, setTimeout(function() {
            c.subscribers.size === 0 && ge(f, c);
          }, 3e3));
        });
      }
      var Qu = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(i, u, c) {
          var f, h, y = t.transaction(i, u, c);
          return u === "readwrite" && (h = (f = new AbortController()).signal, c = function(v) {
            return function() {
              if (f.abort(), u === "readwrite") {
                for (var E = /* @__PURE__ */ new Set(), T = 0, _ = i; T < _.length; T++) {
                  var I = _[T], b = On["idb://".concat(r, "/").concat(I)];
                  if (b) {
                    var O = t.table(I), S = b.optimisticOps.filter(function(te) {
                      return te.trans === y;
                    });
                    if (y._explicit && v && y.mutatedParts) for (var R = 0, N = Object.values(b.queries.query); R < N.length; R++) for (var P = 0, k = (Y = N[R]).slice(); P < k.length; P++) oi((G = k[P]).obsSet, y.mutatedParts) && (ge(Y, G), G.subscribers.forEach(function(te) {
                      return E.add(te);
                    }));
                    else if (0 < S.length) {
                      b.optimisticOps = b.optimisticOps.filter(function(te) {
                        return te.trans !== y;
                      });
                      for (var D = 0, V = Object.values(b.queries.query); D < V.length; D++) for (var Y, G, q, Z = 0, J = (Y = V[D]).slice(); Z < J.length; Z++) (G = J[Z]).res != null && y.mutatedParts && (v && !G.dirty ? (q = Object.isFrozen(G.res), q = Ps(G.res, G.req, S, O, G, q), G.dirty ? (ge(Y, G), G.subscribers.forEach(function(te) {
                        return E.add(te);
                      })) : q !== G.res && (G.res = q, G.promise = ee.resolve({ result: q }))) : (G.dirty && ge(Y, G), G.subscribers.forEach(function(te) {
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
          }, y.addEventListener("abort", c(!1), { signal: h }), y.addEventListener("error", c(!1), { signal: h }), y.addEventListener("complete", c(!0), { signal: h })), y;
        }, table: function(i) {
          var u = t.table(i), c = u.schema.primaryKey;
          return s(s({}, u), { mutate: function(f) {
            var h = ne.trans;
            if (c.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(f);
            var y = On["idb://".concat(r, "/").concat(i)];
            return y ? (h = u.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || ci(c, f).some(function(v) {
              return v == null;
            })) ? (y.optimisticOps.push(f), f.mutatedParts && no(f.mutatedParts), h.then(function(v) {
              0 < v.numFailures && (ge(y.optimisticOps, f), (v = Cs(0, f, v)) && y.optimisticOps.push(v), f.mutatedParts && no(f.mutatedParts));
            }), h.catch(function() {
              ge(y.optimisticOps, f), f.mutatedParts && no(f.mutatedParts);
            })) : h.then(function(v) {
              var E = Cs(0, s(s({}, f), { values: f.values.map(function(T, _) {
                var I;
                return v.failures[_] ? T : (T = (I = c.keyPath) !== null && I !== void 0 && I.includes(".") ? vt(T) : s({}, T), Se(T, c.keyPath, v.results[_]), T);
              }) }), v);
              y.optimisticOps.push(E), queueMicrotask(function() {
                return f.mutatedParts && no(f.mutatedParts);
              });
            }), h) : u.mutate(f);
          }, query: function(f) {
            if (!Ns(ne, u) || !As("query", f)) return u.query(f);
            var h = ((E = ne.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", _ = ne, y = _.requery, v = _.signal, E = function(O, S, R, N) {
              var P = On["idb://".concat(O, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[R])) return [null, !1, P, null];
              var k = S[(N.query ? N.query.index.name : null) || ""];
              if (!k) return [null, !1, P, null];
              switch (R) {
                case "query":
                  var D = k.find(function(V) {
                    return V.req.limit === N.limit && V.req.values === N.values && ks(V.req.query.range, N.query.range);
                  });
                  return D ? [D, !0, P, k] : [k.find(function(V) {
                    return ("limit" in V.req ? V.req.limit : 1 / 0) >= N.limit && (!N.values || V.req.values) && zu(V.req.query.range, N.query.range);
                  }), !1, P, k];
                case "count":
                  return D = k.find(function(V) {
                    return ks(V.req.query.range, N.query.range);
                  }), [D, !!D, P, k];
              }
            }(r, i, "query", f), T = E[0], _ = E[1], I = E[2], b = E[3];
            return T && _ ? T.obsSet = f.obsSet : (_ = u.query(f).then(function(O) {
              var S = O.result;
              if (T && (T.res = S), h) {
                for (var R = 0, N = S.length; R < N; ++R) Object.freeze(S[R]);
                Object.freeze(S);
              } else O.result = vt(S);
              return O;
            }).catch(function(O) {
              return b && T && ge(b, T), Promise.reject(O);
            }), T = { obsSet: f.obsSet, promise: _, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, b ? b.push(T) : (b = [T], (I = I || (On["idb://".concat(r, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = b)), Ju(T, b, y, v), T.promise.then(function(O) {
              return { result: Ps(O.result, f, I?.optimisticOps, u, T, h) };
            });
          } });
        } });
      } };
      function oo(t, r) {
        return new Proxy(t, { get: function(i, u, c) {
          return u === "db" ? r : Reflect.get(i, u, c);
        } });
      }
      var Gt = (Fe.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new oe.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new oe.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, i = r.filter(function(u) {
          return u._cfg.version === t;
        })[0];
        return i || (i = new this.Version(t), r.push(i), r.sort(Hu), i.stores({}), this._state.autoSchema = !1, i);
      }, Fe.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? t() : new ee(function(i, u) {
          if (r._state.openComplete) return u(new oe.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new oe.DatabaseClosed());
            r.open().catch(g);
          }
          r._state.dbReadyPromise.then(i, u);
        }).then(t);
      }, Fe.prototype.use = function(t) {
        var r = t.stack, i = t.create, u = t.level, c = t.name;
        return c && this.unuse({ stack: r, name: c }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: i, level: u ?? 10, name: c }), t.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Fe.prototype.unuse = function(t) {
        var r = t.stack, i = t.name, u = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(c) {
          return u ? c.create !== u : !!i && c.name !== i;
        })), this;
      }, Fe.prototype.open = function() {
        var t = this;
        return bn(Be, function() {
          return qu(t);
        });
      }, Fe.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = Un.indexOf(this);
        if (0 <= r && Un.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        t.isBeingOpened || (t.dbReadyPromise = new ee(function(i) {
          t.dbReadyResolve = i;
        }), t.openCanceller = new ee(function(i, u) {
          t.cancelOpen = u;
        }));
      }, Fe.prototype.close = function(i) {
        var r = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new oe.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new oe.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Fe.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new ee(function(c, f) {
          function h() {
            r.close(t);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = Le(function() {
              var v, E, T;
              v = r._deps, E = r.name, T = v.indexedDB, v = v.IDBKeyRange, ti(T) || E === Vr || ei(T, v).delete(E).catch(g), c();
            }), y.onerror = Pt(f), y.onblocked = r._fireOnBlocked;
          }
          if (i) throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
        });
      }, Fe.prototype.backendDB = function() {
        return this.idbdb;
      }, Fe.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Fe.prototype.hasBeenClosed = function() {
        var t = this._state.dbOpenError;
        return t && t.name === "DatabaseClosed";
      }, Fe.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Fe.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Fe.prototype, "tables", { get: function() {
        var t = this;
        return d(this._allTables).map(function(r) {
          return t._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Fe.prototype.transaction = function() {
        var t = (function(r, i, u) {
          var c = arguments.length;
          if (c < 2) throw new oe.InvalidArgument("Too few arguments");
          for (var f = new Array(c - 1); --c; ) f[c - 1] = arguments[c];
          return u = f.pop(), [r, Nt(f), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Fe.prototype._transaction = function(t, r, i) {
        var u = this, c = ne.trans;
        c && c.db === this && t.indexOf("!") === -1 || (c = null);
        var f, h, y = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(E) {
            if (E = E instanceof u.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return E;
          }), t == "r" || t === Vo) f = Vo;
          else {
            if (t != "rw" && t != Go) throw new oe.InvalidArgument("Invalid transaction mode: " + t);
            f = Go;
          }
          if (c) {
            if (c.mode === Vo && f === Go) {
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
          }) : He(E);
        }
        var v = (function E(T, _, I, b, O) {
          return ee.resolve().then(function() {
            var S = ne.transless || ne, R = T._createTransaction(_, I, T._dbSchema, b);
            if (R.explicit = !0, S = { trans: R, transless: S }, b) R.idbtrans = b.idbtrans;
            else try {
              R.create(), R.idbtrans._explicit = !0, T._state.PR1398_maxLoop = 3;
            } catch (k) {
              return k.name === Zt.InvalidState && T.isOpen() && 0 < --T._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), T.close({ disableAutoOpen: !1 }), T.open().then(function() {
                return E(T, _, I, null, O);
              })) : He(k);
            }
            var N, P = xt(O);
            return P && Kn(), S = ee.follow(function() {
              var k;
              (N = O.call(R, R)) && (P ? (k = rn.bind(null, null), N.then(k, k)) : typeof N.next == "function" && typeof N.throw == "function" && (N = ui(N)));
            }, S), (N && typeof N.then == "function" ? ee.resolve(N).then(function(k) {
              return R.active ? k : He(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return N;
            })).then(function(k) {
              return b && R._resolve(), R._completion.then(function() {
                return k;
              });
            }).catch(function(k) {
              return R._reject(k), He(k);
            });
          });
        }).bind(null, this, f, h, c, i);
        return c ? c._promise(f, v, "lock") : ne.trans ? bn(ne.transless, function() {
          return u._whenReady(v);
        }) : this._whenReady(v);
      }, Fe.prototype.table = function(t) {
        if (!C(this._allTables, t)) throw new oe.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Fe);
      function Fe(t, r) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var u = Fe.dependencies;
        this._options = r = s({ addons: Fe.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var c, f, h, y, v, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: g, dbReadyPromise: null, cancelOpen: g, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        E.dbReadyPromise = new ee(function(_) {
          E.dbReadyResolve = _;
        }), E.openCanceller = new ee(function(_, I) {
          E.cancelOpen = I;
        }), this._state = E, this.name = t, this.on = sr(this, "populate", "blocked", "versionchange", "close", { ready: [W, g] }), this.once = function(_, I) {
          var b = function() {
            for (var O = [], S = 0; S < arguments.length; S++) O[S] = arguments[S];
            i.on(_).unsubscribe(b), I.apply(i, O);
          };
          return i.on(_, b);
        }, this.on.ready.subscribe = Oe(this.on.ready.subscribe, function(_) {
          return function(I, b) {
            Fe.vip(function() {
              var O, S = i._state;
              S.openComplete ? (S.dbOpenError || ee.resolve().then(I), b && _(I)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(I), b && _(I)) : (_(I), O = i, b || _(function R() {
                O.on.ready.unsubscribe(I), O.on.ready.unsubscribe(R);
              }));
            });
          };
        }), this.Collection = (c = this, ar(Du.prototype, function(N, R) {
          this.db = c;
          var b = ls, O = null;
          if (R) try {
            b = R();
          } catch (P) {
            O = P;
          }
          var S = N._ctx, R = S.table, N = R.hook.reading.fire;
          this._ctx = { table: R, index: S.index, isPrimKey: !S.index || R.schema.primKey.keyPath && S.index === R.schema.primKey.name, range: b, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: S.or, valueMapper: N !== w ? N : null };
        })), this.Table = (f = this, ar(ps.prototype, function(_, I, b) {
          this.db = f, this._tx = b, this.name = _, this.schema = I, this.hook = f._allTables[_] ? f._allTables[_].hook : sr(null, { creating: [U, g], reading: [j, w], updating: [Q, g], deleting: [F, g] });
        })), this.Transaction = (h = this, ar(Lu.prototype, function(_, I, b, O, S) {
          var R = this;
          _ !== "readonly" && I.forEach(function(N) {
            N = (N = b[N]) === null || N === void 0 ? void 0 : N.yProps, N && (I = I.concat(N.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = _, this.storeNames = I, this.schema = b, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = sr(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ee(function(N, P) {
            R._resolve = N, R._reject = P;
          }), this._completion.then(function() {
            R.active = !1, R.on.complete.fire();
          }, function(N) {
            var P = R.active;
            return R.active = !1, R.on.error.fire(N), R.parent ? R.parent._reject(N) : P && R.idbtrans && R.idbtrans.abort(), He(N);
          });
        })), this.Version = (y = this, ar(Gu.prototype, function(_) {
          this.db = y, this._cfg = { version: _, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, ar(vs.prototype, function(_, I, b) {
          if (this.db = v, this._ctx = { table: _, index: I === ":id" ? null : I, or: b }, this._cmp = this._ascending = me, this._descending = function(O, S) {
            return me(S, O);
          }, this._max = function(O, S) {
            return 0 < me(O, S) ? O : S;
          }, this._min = function(O, S) {
            return me(O, S) < 0 ? O : S;
          }, this._IDBKeyRange = v._deps.IDBKeyRange, !this._IDBKeyRange) throw new oe.MissingAPI();
        })), this.on("versionchange", function(_) {
          0 < _.newVersion ? console.warn("Another connection wants to upgrade database '".concat(i.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(i.name, "'. Closing db now to resume the delete request.")), i.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(_) {
          !_.newVersion || _.newVersion < _.oldVersion ? console.warn("Dexie.delete('".concat(i.name, "') was blocked")) : console.warn("Upgrade '".concat(i.name, "' blocked by other connection holding version ").concat(_.oldVersion / 10));
        }), this._maxKey = fr(r.IDBKeyRange), this._createTransaction = function(_, I, b, O) {
          return new i.Transaction(_, I, b, i._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(_) {
          i.on("blocked").fire(_), Un.filter(function(I) {
            return I.name === i.name && I !== i && !I._state.vcFired;
          }).map(function(I) {
            return I.on("versionchange").fire(_);
          });
        }, this.use(Yu), this.use(Qu), this.use(Xu), this.use($u), this.use(Wu);
        var T = new Proxy(this, { get: function(_, I, b) {
          if (I === "_vip") return !0;
          if (I === "table") return function(S) {
            return oo(i.table(S), T);
          };
          var O = Reflect.get(_, I, b);
          return O instanceof ps ? oo(O, T) : I === "tables" ? O.map(function(S) {
            return oo(S, T);
          }) : I === "_createTransaction" ? function() {
            return oo(O.apply(this, arguments), T);
          } : O;
        } });
        this.vip = T, u.forEach(function(_) {
          return _(i);
        });
      }
      var io, Et = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Zu = (di.prototype.subscribe = function(t, r, i) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: i });
      }, di.prototype[Et] = function() {
        return this;
      }, di);
      function di(t) {
        this._subscribe = t;
      }
      try {
        io = { indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB, IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange };
      } catch {
        io = { indexedDB: null, IDBKeyRange: null };
      }
      function Ds(t) {
        var r, i = !1, u = new Zu(function(c) {
          var f = xt(t), h, y = !1, v = {}, E = {}, T = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), _ && an.storagemutated.unsubscribe(b));
          } };
          c.start && c.start(T);
          var _ = !1, I = function() {
            return Fo(O);
          }, b = function(S) {
            to(v, S), oi(E, v) && I();
          }, O = function() {
            var S, R, N;
            !y && io.indexedDB && (v = {}, S = {}, h && h.abort(), h = new AbortController(), N = function(P) {
              var k = Ln();
              try {
                f && Kn();
                var D = nn(t, P);
                return D = f ? D.finally(rn) : D;
              } finally {
                k && Bn();
              }
            }(R = { subscr: S, signal: h.signal, requery: I, querier: t, trans: null }), Promise.resolve(N).then(function(P) {
              i = !0, r = P, y || R.signal.aborted || (v = {}, function(k) {
                for (var D in k) if (C(k, D)) return;
                return 1;
              }(E = S) || _ || (an(cr, b), _ = !0), Fo(function() {
                return !y && c.next && c.next(P);
              }));
            }, function(P) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || y || Fo(function() {
                y || c.error && c.error(P);
              });
            }));
          };
          return setTimeout(I, 0), T;
        });
        return u.hasValue = function() {
          return i;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var xn = Gt;
      function pi(t) {
        var r = un;
        try {
          un = !0, an.storagemutated.fire(t), ai(t, !0);
        } finally {
          un = r;
        }
      }
      B(xn, s(s({}, ir), { delete: function(t) {
        return new xn(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new xn(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = xn.dependencies, i = r.indexedDB, r = r.IDBKeyRange, (ti(i) ? Promise.resolve(i.databases()).then(function(u) {
            return u.map(function(c) {
              return c.name;
            }).filter(function(c) {
              return c !== Vr;
            });
          }) : ei(i, r).toCollection().primaryKeys()).then(t);
        } catch {
          return He(new oe.MissingAPI());
        }
        var r, i;
      }, defineClass: function() {
        return function(t) {
          m(this, t);
        };
      }, ignoreTransaction: function(t) {
        return ne.trans ? bn(ne.transless, t) : t();
      }, vip: ni, async: function(t) {
        return function() {
          try {
            var r = ui(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : ee.resolve(r);
          } catch (i) {
            return He(i);
          }
        };
      }, spawn: function(t, r, i) {
        try {
          var u = ui(t.apply(i, r || []));
          return u && typeof u.then == "function" ? u : ee.resolve(u);
        } catch (c) {
          return He(c);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(t, r) {
        return r = ee.resolve(typeof t == "function" ? xn.ignoreTransaction(t) : t).timeout(r || 6e4), ne.trans ? ne.trans.waitFor(r) : r;
      }, Promise: ee, debug: { get: function() {
        return K;
      }, set: function(t) {
        se(t);
      } }, derive: $, extend: m, props: B, override: Oe, Events: sr, on: an, liveQuery: Ds, extendObservabilitySet: to, getByKeyPath: Ne, setByKeyPath: Se, delByKeyPath: function(t, r) {
        typeof r == "string" ? Se(t, r, void 0) : "length" in r && [].map.call(r, function(i) {
          Se(t, i, void 0);
        });
      }, shallowClone: _t, deepClone: vt, getObjectDiff: li, cmp: me, asap: Ie, minKey: -1 / 0, addons: [], connections: Un, errnames: Zt, dependencies: io, cache: On, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, i) {
        return t + r / Math.pow(10, 2 * i);
      }) })), xn.maxKey = fr(xn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (an(cr, function(t) {
        un || (t = new CustomEvent(Wo, { detail: t }), un = !0, dispatchEvent(t), un = !1);
      }), addEventListener(Wo, function(t) {
        t = t.detail, un || pi(t);
      }));
      var Gn, un = !1, Ms = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ms = function() {
        (Gn = new BroadcastChannel(Wo)).onmessage = function(t) {
          return t.data && pi(t.data);
        };
      })(), typeof Gn.unref == "function" && Gn.unref(), an(cr, function(t) {
        un || Gn.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Gt.disableBfCache && t.persisted) {
          K && console.debug("Dexie: handling persisted pagehide"), Gn?.close();
          for (var r = 0, i = Un; r < i.length; r++) i[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Gt.disableBfCache && t.persisted && (K && console.debug("Dexie: handling persisted pageshow"), Ms(), pi({ all: new et(-1 / 0, [[]]) }));
      })), ee.rejectionMapper = function(t, r) {
        return !t || t instanceof Ft || t instanceof TypeError || t instanceof SyntaxError || !t.name || !en[t.name] ? t : (r = new en[t.name](r || t.message, t), "stack" in t && M(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, se(K), s(Gt, Object.freeze({ __proto__: null, Dexie: Gt, liveQuery: Ds, Entity: cs, cmp: me, PropModification: ur, replacePrefix: function(t, r) {
        return new ur({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new ur({ add: t });
      }, remove: function(t) {
        return new ur({ remove: t });
      }, default: Gt, RangeSet: et, mergeRanges: hr, rangesOverlap: xs }), { default: Gt }), Gt;
    });
  }(go)), go.exports;
}
var Pf = Cf();
const Ki = /* @__PURE__ */ Nf(Pf), ga = Symbol.for("Dexie"), To = globalThis[ga] || (globalThis[ga] = Ki);
if (Ki.semVer !== To.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ki.semVer} and ${To.semVer}`);
const {
  liveQuery: Od,
  mergeRanges: xd,
  rangesOverlap: Td,
  RangeSet: Rd,
  cmp: Sd,
  Entity: Id,
  PropModification: Nd,
  replacePrefix: Ad,
  add: Cd,
  remove: Pd,
  DexieYProvider: kd
} = To;
var Tt = /* @__PURE__ */ ((e) => (e.GOOSE = "GOOSE", e.SMV = "SMV", e.REPORT = "Report", e.INTERNAL = "Internal", e.WIRED = "Wired", e.CONTROL = "Control", e))(Tt || {});
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
    const d = {
      ...l,
      id: crypto.randomUUID()
    };
    try {
      const p = await e.table(d.tagName).add(d), m = await e.table(d.tagName).get(p);
      if (!m) {
        const A = { msg: "could not find added record", table: d.tagName, addedId: p };
        throw console.error(A), new Error(JSON.stringify(A));
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
  async function o(l, d) {
    const p = l.children?.some(
      (A) => A.id === d.id && A.tagName === d.tagName
    ), m = d.parent?.id === l.id && d.parent?.tagName === l.tagName;
    p || (l.children || (l.children = []), l.children.push({
      id: d.id,
      tagName: d.tagName
    }), await e.table(l.tagName).update(l.id, l)), m || (d.parent = {
      id: l.id,
      tagName: l.tagName
    }, await e.table(d.tagName).update(d.id, d));
  }
  async function s(l, d) {
    return !l.children || l.children.length === 0 ? [] : await Promise.all(
      l.children.filter((m) => m.tagName === d).map(async (m) => {
        const A = m.tagName, x = m.id;
        return await e.table(A).get({ id: x });
      })
    );
  }
  async function a(l, d, p = []) {
    const m = [];
    let A = l;
    for (let x = 0; x < d; x++) {
      if (!A.parent)
        return m;
      const C = await e.table(A.parent.tagName).get(A.parent.id);
      if (!C) {
        const B = {
          msg: "Parent record not found",
          table: A.parent.tagName,
          id: A.parent.id
        };
        throw console.error(B), new Error(JSON.stringify(B));
      }
      (p.length == 0 || p.length > 0 && p.includes(C.tagName)) && m.push(C), A = C;
    }
    return m;
  }
}
function kf(e, n) {
  return e.attributes?.find((o) => o.name === n);
}
function Ae(e, n) {
  return e?.attributes?.find((o) => o.name === n)?.value;
}
function Df(e) {
  return {
    findAllEnrichedLNodes: n,
    findAllLNodeTypes: o,
    enrichWithDataObjectSpecifications: l
  };
  async function n() {
    const p = await d();
    return p.length ? await l(p) : [];
  }
  async function o() {
    const p = await e.table("LNodeType").toArray(), m = [];
    for (const A of p)
      m.push({
        id: A.id,
        typeId: Ae(A, "id") ?? "",
        lnClass: Ae(A, "lnClass") ?? "",
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
        name: Ae(x, "name") ?? "",
        type: Ae(x, "type") ?? "",
        dataAttributes: await a(x),
        lnodeTypeId: p.id
      });
    }
    return m;
  }
  async function a(p) {
    const m = Ae(p, "type");
    if (!m) return [];
    const A = (await e.table("DOType").toArray()).find(
      (C) => C.attributes?.find((B) => B.name === "id" && B.value === m)
    );
    if (!A || !A.children) return [];
    const x = [];
    for (const C of A.children) {
      if (C.tagName !== "DA") continue;
      const B = await e.table("DA").get(C.id);
      B && x.push({
        id: B.id,
        name: Ae(B, "name") ?? "",
        type: Ae(B, "type") ?? "",
        bType: Ae(B, "bType") ?? "",
        fc: Ae(B, "fc") ?? "",
        dataObjectId: p.id
      });
    }
    return x;
  }
  async function l(p) {
    const m = await e.table("Private").toArray(), A = await e.table("DOS").toArray(), x = await e.table("DAS").toArray(), C = await e.table("SubscriberLNode").toArray();
    return Promise.all(
      p.map(async (B) => {
        const L = m.find(
          ($) => $.parent?.id === B.id && $.parent?.tagName === "LNode" && Ae($, "type") === "eIEC61850-6-100"
        );
        if (!L || !L.children)
          return { ...B, dataObjectSpecifications: [] };
        const M = [];
        for (const $ of L.children) {
          if ($.tagName !== "DOS") continue;
          const Re = A.find((Ee) => Ee.id === $.id);
          if (!Re) continue;
          const we = [];
          if (Re.children)
            for (const Ee of Re.children) {
              if (Ee.tagName !== "DAS") continue;
              const Oe = x.find((Ie) => Ie.id === Ee.id);
              if (!Oe) continue;
              let ae;
              if (Oe.children) {
                const Ie = Oe.children.find((Ne) => Ne.tagName === "SubscriberLNode");
                if (Ie) {
                  const Ne = C.find((Se) => Se.id === Ie.id);
                  Ne && (ae = {
                    id: Ne.id,
                    inputName: Ae(Ne, "inputName") ?? "",
                    service: Su(Ne, "service"),
                    pLN: Ae(Ne, "pLN") ?? ""
                  });
                }
              }
              we.push({
                id: Oe.id,
                name: Ae(Oe, "name") ?? "",
                desc: Ae(Oe, "desc") ?? "",
                dataObjectSpecificationId: Re.id,
                subscriberLNode: ae
              });
            }
          M.push({
            id: Re.id,
            name: Ae(Re, "name") ?? "",
            desc: Ae(Re, "desc") ?? "",
            dataAttributeSpecifications: we,
            lNodeId: B.id
          });
        }
        return { ...B, dataObjectSpecifications: M };
      })
    );
  }
  async function d() {
    return (await e.table("LNode").toArray()).map((m) => ({
      id: m.id,
      uuid: Ae(m, "uuid") ?? "",
      iedName: Ae(m, "iedName") ?? "",
      prefix: Ae(m, "prefix") ?? "",
      lnClass: Ae(m, "lnClass") ?? "",
      lnInst: Ae(m, "lnInst") ?? "",
      lnType: Ae(m, "lnType") ?? "",
      dataObjects: []
    }));
  }
}
function Su(e, n) {
  const o = e?.attributes?.find((a) => a.name === n)?.value;
  if (!o) return;
  switch (o.toUpperCase()) {
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
async function Iu(e) {
  try {
    const n = new To(e);
    return await n.open(), n;
  } catch (n) {
    throw console.error("Error opening database:", n), n;
  }
}
function Mf(e) {
  const n = Ru(e);
  return {
    findAllExistingFromDB: o
  };
  async function o() {
    const s = await e.table("SourceRef").toArray();
    if (!s.length) return [];
    const a = [];
    for (const l of s) {
      if (!l.attributes) continue;
      const d = Ae(l, "sourceLNodeUuid"), p = await e.table("LNode").toArray().then(
        (x) => x.find(
          (C) => C.attributes?.some(
            (B) => B.name === "uuid" && B.value === d
          )
        )?.id
      ) || null, m = await n.findParentRecordsWithinDepthAndGivenTagName(
        l,
        3,
        ["LNode"]
      );
      if (m.length != 1) {
        const x = {
          msg: "LNode record not found for SourceRef id",
          id: l.id
        };
        throw console.error(x), new Error(JSON.stringify(x));
      }
      const A = {
        sourceLNodeId: p,
        destinationLNodeId: m[0].id,
        sourceDataObject: Ae(l, "sourceDoName") || "",
        sourceDataAttribute: Ae(l, "sourceDaName") || "",
        dataflowType: Su(l, "service"),
        inputInstance: Ae(l, "inputInst") || "",
        input: Ae(l, "input") || ""
      };
      a.push(A);
    }
    return a;
  }
}
function Ro(e) {
  return `${e.prefix} ${e.lnClass} ${e.lnInst}`;
}
const jf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Lf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Bf = ["data-testid"], Kf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Uf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Hf = /* @__PURE__ */ nr({
  __name: "dataflow-connections",
  props: {
    connections: {}
  },
  setup(e) {
    const n = e, o = pn(() => [...n.connections].sort((s, a) => s.dataflowType < a.dataflowType ? -1 : s.dataflowType > a.dataflowType ? 1 : 0));
    return (s, a) => (ke(), Ue("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr]",
      style: rt({
        gridTemplateRows: `repeat(${s.connections.length}, 50px)`
      })
    }, [
      (ke(!0), Ue(ze, null, Cn(o.value, (l, d) => (ke(), Ue(ze, null, [
        re("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end",
          style: rt({ gridRowStart: d + 1 })
        }, [
          re("span", jf, pt(l.sourceDataObject), 1),
          re("span", Lf, pt(l.sourceDataAttribute), 1)
        ], 4),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]",
          style: rt({ gridRowStart: d + 1 })
        }, null, 4),
        re("div", {
          class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center",
          style: rt({ gridRowStart: d + 1 }),
          "data-testid": `dataflow-line-${d}`
        }, null, 12, Bf),
        (ke(), Ue("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: rt({ gridRowStart: d + 1 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, a[0] || (a[0] = [
          re("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ]), 4)),
        re("div", {
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm",
          style: rt({ gridRowStart: d + 1 })
        }, pt(l.dataflowType), 5),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: rt({ gridRowStart: d + 1 })
        }, null, 4),
        re("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: rt({ gridRowStart: d + 1 })
        }, [
          re("span", Kf, pt(l.input), 1),
          re("span", Uf, pt(l.inputInstance), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
}), Ff = ["data-testid"], Vf = { class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Gf = /* @__PURE__ */ nr({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(e) {
    return (n, o) => (ke(), Ue("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr]",
      style: rt({
        gridTemplateRows: `repeat(${n.destinationPlaceHolderPorts.length}, 50px)`
      })
    }, [
      (ke(!0), Ue(ze, null, Cn(n.destinationPlaceHolderPorts, (s, a) => (ke(), Ue(ze, null, [
        re("div", {
          class: "col-start-3 col-span-1 relative self-center",
          style: rt({ gridRowStart: a + 1 })
        }, [
          re("div", {
            class: "h-[2px] bg-(--color-ocean-gray-100) absolute left-[80%] w-[20%]",
            "data-testid": `placeholder-line-${a}`
          }, null, 8, Ff)
        ], 4),
        (ke(), Ue("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: rt({ gridRowStart: a + 1 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, o[0] || (o[0] = [
          re("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ]), 4)),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: rt({ gridRowStart: a + 1 })
        }, null, 4),
        re("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: rt({ gridRowStart: a + 1 })
        }, [
          re("span", Vf, pt(s.input), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
}), qf = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full min-h-[500px] mb-8 grid-rows-[100px_1fr]" }, $f = ["value"], Wf = ["value"], Yf = ["value"], Xf = ["value"], zf = { class: "col-span-full row-start-2" }, Jf = /* @__PURE__ */ nr({
  __name: "dataflow-visualisation",
  props: {
    lnodes: {},
    connections: {}
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(e, { emit: n }) {
    const o = n, s = e;
    mn(
      () => s.lnodes,
      () => {
        a.value = void 0, l.value = void 0;
      }
    );
    const a = jt(), l = jt(), d = pn(
      () => s.lnodes.filter((B) => B.id !== l.value)
    ), p = pn(
      () => s.lnodes.filter((B) => B.id !== a.value)
    ), m = pn(() => !a.value || !l.value ? [] : s.connections.filter(
      (B) => B.sourceLNodeId === a.value && B.destinationLNodeId === l.value
    )), A = pn(() => l.value ? s.connections.filter(
      (B) => B.destinationLNodeId === l.value && !B.sourceLNodeId
    ) : []);
    function x(B) {
      a.value = B, o("sourceLNodeChange", B);
    }
    function C(B) {
      l.value = B, o("destinationLNodeChange", B);
    }
    return (B, L) => (ke(), Ue("div", qf, [
      L[5] || (L[5] = re("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      re("select", {
        value: a.value ?? "",
        onChange: L[0] || (L[0] = (M) => x(M.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        L[2] || (L[2] = bu(" > ")),
        L[3] || (L[3] = re("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (ke(!0), Ue(ze, null, Cn(d.value, (M) => (ke(), Ue("option", {
          key: M.id,
          value: M.id
        }, pt(An(Ro)(M)), 9, Wf))), 128))
      ], 40, $f),
      L[6] || (L[6] = re("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      re("select", {
        value: l.value ?? "",
        onChange: L[1] || (L[1] = (M) => C(M.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        L[4] || (L[4] = re("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (ke(!0), Ue(ze, null, Cn(p.value, (M) => (ke(), Ue("option", {
          key: M.id,
          value: M.id
        }, pt(An(Ro)(M)), 9, Xf))), 128))
      ], 40, Yf),
      re("div", zf, [
        m.value.length > 0 ? (ke(), Oo(Hf, {
          key: 0,
          connections: m.value
        }, null, 8, ["connections"])) : ji("", !0),
        A.value.length > 0 ? (ke(), Oo(Gf, {
          key: 1,
          destinationPlaceHolderPorts: A.value
        }, null, 8, ["destinationPlaceHolderPorts"])) : ji("", !0)
      ])
    ]));
  }
});
function Qf(e) {
  const n = Ru(e);
  return {
    create: o
  };
  async function o(s, a, l) {
    const d = await Zf(e, n, l);
    await ed(n, a, d, s);
  }
}
async function Zf(e, n, o) {
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
  const d = await n.findChildRecordsByTagName(
    a[0],
    "LNodeInputs"
  );
  if (d.length != 1) {
    const p = {
      msg: `LNodeInputs element not found or more than one element found in LNode with uuid ${o.uuid}`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  return d[0];
}
async function ed(e, n, o, s) {
  const a = await Ri(
    e,
    s,
    n,
    o.namespace
  );
  if (await e.ensureRelationship(o, a), s.includeQuality) {
    let l = structuredClone(ve(s));
    l.attribute = "q";
    const d = await Ri(
      e,
      l,
      n,
      o.namespace
    );
    await e.ensureRelationship(o, d);
  }
  if (s.includeTimestamp) {
    let l = structuredClone(ve(s));
    l.attribute = "t";
    const d = await Ri(
      e,
      l,
      n,
      o.namespace
    );
    await e.ensureRelationship(o, d);
  }
}
async function Ri(e, n, o, s) {
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
const td = ["open"], nd = { class: "modal-box" }, rd = { class: "grid grid-cols-2 gap-4 mt-4" }, od = ["value"], id = { class: "grid grid-cols-2 gap-4 mt-4" }, sd = ["value"], ad = { class: "grid grid-cols-2 gap-4 mt-4" }, ud = ["value"], ld = { class: "grid grid-cols-2 gap-4 mt-4" }, cd = ["value"], fd = { class: "grid grid-cols-2 gap-4 mt-4" }, dd = ["value"], pd = { class: "grid grid-cols-2 gap-4 mt-4" }, hd = { class: "grid grid-cols-2 gap-4 mt-4" }, md = { class: "mt-4" }, gd = { class: "mt-4" }, yd = /* @__PURE__ */ nr({
  __name: "dataflow-creation-form",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    isOpen: { type: Boolean },
    lnodeTypes: {}
  },
  emits: ["update:isOpen", "connectionCreated"],
  setup(e, { emit: n }) {
    const o = e, s = n, a = jt(p());
    mn(
      () => a.value.signal,
      (L, M) => {
        a.value.inputName = L;
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
    const l = pn(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((L) => L.typeId === o.sourceLNode?.lnType)?.dataObjects.filter(
      (L) => L.dataAttributes.some(
        (M) => ya[a.value.type].includes(
          M.fc
        )
      )
    ).map((L) => L.name)), d = pn(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((L) => L.typeId === o.sourceLNode?.lnType)?.dataObjects.find((L) => L.name === a.value.signal)?.dataAttributes.filter(
      (L) => ya[a.value.type].includes(
        L.fc
      )
    ).filter((L) => L.name !== "t" && L.name !== "q").map((L) => L.name) || []);
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
    function m(L) {
      for (const M of L)
        a.value[M] = "";
    }
    function A() {
      B(), s("update:isOpen", !1);
    }
    async function x() {
      try {
        if (!C(a.value))
          return;
        const L = localStorage.getItem("currentActiveFileDatabaseName");
        if (!L)
          throw new Error("no active file");
        const M = await Iu(L);
        await Qf(M).create(
          a.value,
          o.sourceLNode,
          o.destinationLNode
        ), M.close(), s("connectionCreated"), A();
      } catch (L) {
        console.error("Error creating dataflow:", L), alert(`Error creating dataflow: ${L instanceof Error ? L.message : "Unknown error"}`);
      }
    }
    function C(L) {
      return L.type ? L.signal ? L.attribute ? L.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function B() {
      a.value = p();
    }
    return (L, M) => (ke(), Ue("dialog", {
      class: "modal",
      open: L.isOpen
    }, [
      re("div", nd, [
        M[24] || (M[24] = re("h3", { class: "text-lg font-bold" }, "Create Connection", -1)),
        re("button", {
          class: "absolute top-[1.5rem] right-[1.5rem] cursor-pointer",
          onClick: A,
          "aria-label": "Close"
        }, M[11] || (M[11] = [
          re("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 64 64"
          }, [
            re("path", { d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" })
          ], -1)
        ])),
        re("div", rd, [
          M[13] || (M[13] = re("label", {
            for: "dataflow-type-select",
            class: "col-start-1 self-center"
          }, "Dataflow Type", -1)),
          $t(re("select", {
            id: "dataflow-type-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[0] || (M[0] = ($) => a.value.type = $),
            onChange: M[1] || (M[1] = ($) => m(["signal", "attribute"]))
          }, [
            (ke(!0), Ue(ze, null, Cn(Object.values(An(Tt)), ($) => (ke(), Ue("option", {
              key: $,
              value: $
            }, pt($), 9, od))), 128)),
            M[12] || (M[12] = re("option", {
              key: "empty",
              value: null
            }, "-", -1))
          ], 544), [
            [yr, a.value.type]
          ])
        ]),
        M[25] || (M[25] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", id, [
          M[14] || (M[14] = re("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          $t(re("select", {
            id: "source-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[2] || (M[2] = ($) => o.sourceLNode.id = $)
          }, [
            re("option", {
              value: o.sourceLNode.id
            }, pt(An(Ro)(L.sourceLNode)), 9, sd)
          ], 512), [
            [yr, o.sourceLNode.id]
          ])
        ]),
        re("div", ad, [
          M[16] || (M[16] = re("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          $t(re("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[3] || (M[3] = ($) => a.value.signal = $),
            onChange: M[4] || (M[4] = ($) => m(["attribute"]))
          }, [
            (ke(!0), Ue(ze, null, Cn(l.value, ($) => (ke(), Ue("option", {
              key: $,
              value: $
            }, pt($), 9, ud))), 128)),
            M[15] || (M[15] = re("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 544), [
            [yr, a.value.signal]
          ])
        ]),
        re("div", ld, [
          M[18] || (M[18] = re("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          $t(re("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[5] || (M[5] = ($) => a.value.attribute = $)
          }, [
            (ke(!0), Ue(ze, null, Cn(d.value, ($) => (ke(), Ue("option", {
              key: $,
              value: $
            }, pt($), 9, cd))), 128)),
            M[17] || (M[17] = re("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 512), [
            [yr, a.value.attribute]
          ])
        ]),
        M[26] || (M[26] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", fd, [
          M[19] || (M[19] = re("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          $t(re("select", {
            id: "destination-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[6] || (M[6] = ($) => o.destinationLNode.id = $)
          }, [
            re("option", {
              value: o.destinationLNode.id
            }, pt(An(Ro)(L.destinationLNode)), 9, dd)
          ], 512), [
            [yr, o.destinationLNode.id]
          ])
        ]),
        re("div", pd, [
          M[20] || (M[20] = re("label", {
            for: "input-name-input",
            class: "col-start-1 self-center"
          }, "Input Name", -1)),
          $t(re("input", {
            id: "input-name-input",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": M[7] || (M[7] = ($) => a.value.inputName = $)
          }, null, 512), [
            [ca, a.value.inputName]
          ])
        ]),
        re("div", hd, [
          M[21] || (M[21] = re("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          $t(re("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": M[8] || (M[8] = ($) => a.value.inputInstance = $)
          }, null, 512), [
            [ca, a.value.inputInstance]
          ])
        ]),
        M[27] || (M[27] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", md, [
          $t(re("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[9] || (M[9] = ($) => a.value.includeQuality = $),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [fa, a.value.includeQuality]
          ]),
          M[22] || (M[22] = re("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        re("div", gd, [
          $t(re("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[10] || (M[10] = ($) => a.value.includeTimestamp = $),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [fa, a.value.includeTimestamp]
          ]),
          M[23] || (M[23] = re("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        re("div", { class: "modal-action" }, [
          re("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            onClick: x
          }, " Save ")
        ])
      ])
    ], 8, td));
  }
}), _d = { class: "flex flex-col items-center justify-center w-full" }, vd = ["disabled"], bd = /* @__PURE__ */ nr({
  __name: "dataflow-view",
  props: {
    sdks: {}
  },
  setup(e) {
    const n = e, o = jt(), s = jt(), a = jt(!1), l = jt([]), d = jt([]), p = jt([]);
    mn(
      () => n.sdks,
      () => {
        m(), A();
      },
      { immediate: !0 }
    );
    async function m() {
      n.sdks && (l.value = await n.sdks.lnodeSDK.findAllEnrichedLNodes(), p.value = await n.sdks.lnodeSDK.findAllLNodeTypes());
    }
    async function A() {
      n.sdks && (d.value = await n.sdks.connectionSDK.findAllExistingFromDB());
    }
    function x(M) {
      o.value = B(M);
    }
    function C(M) {
      s.value = B(M);
    }
    function B(M) {
      return l.value.find(($) => $.id === M) ?? void 0;
    }
    function L() {
      a.value = !0;
    }
    return (M, $) => (ke(), Ue("div", _d, [
      It(Jf, {
        connections: d.value,
        lnodes: l.value,
        onSourceLNodeChange: x,
        onDestinationLNodeChange: C
      }, null, 8, ["connections", "lnodes"]),
      re("button", {
        disabled: !o.value || !s.value,
        class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
        onClick: L
      }, " + ", 8, vd),
      o.value && s.value ? (ke(), Oo(yd, {
        key: 0,
        isOpen: a.value,
        "onUpdate:isOpen": $[0] || ($[0] = (Re) => a.value = Re),
        sourceLNode: o.value,
        destinationLNode: s.value,
        lnodeTypes: p.value,
        onConnectionCreated: A
      }, null, 8, ["isOpen", "sourceLNode", "destinationLNode", "lnodeTypes"])) : ji("", !0)
    ]));
  }
}), wd = { class: "p-10" }, Ed = /* @__PURE__ */ nr({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    let n = jt();
    Za(() => {
      window.addEventListener("storage", o), s();
    }), es(() => {
      window.removeEventListener("storage", o);
    });
    async function o(l) {
      if (l.key !== "currentActiveFileDatabaseName")
        return;
      const d = l.newValue;
      if (!d)
        throw new Error("incorrect active file name: " + d);
      await a(d);
    }
    async function s() {
      const l = localStorage.getItem("currentActiveFileDatabaseName");
      l && await a(l);
    }
    async function a(l) {
      n.value && n.value.db.close();
      const d = await Iu(l);
      if (!d) throw new Error("database is not initialized.");
      n.value = {
        db: d,
        lnodeSDK: Df(d),
        connectionSDK: Mf(d)
      };
    }
    return (l, d) => (ke(), Ue("div", wd, [
      It(bd, { sdks: An(n) }, null, 8, ["sdks"])
    ]));
  }
});
function Dd(e, n) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Tf(Ed, { api: n }).mount(`#${e}`);
}
export {
  Dd as default
};
