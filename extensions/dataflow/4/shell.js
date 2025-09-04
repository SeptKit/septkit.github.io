(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-white:#fff;--spacing:.25rem;--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.relative{position:relative}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.btn-active{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn-active{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn-active{--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0);isolation:isolate}.-z-1{z-index:-1}.z-1{z-index:1}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-\\[9px\\]{margin-right:9px}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.min-h-\\[500px\\]{min-height:500px}.btn-wide{width:100%;max-width:16rem}.btn-block{width:100%}.w-52{width:calc(var(--spacing)*52)}.w-\\[20px\\]{width:20px}.w-full{width:100%}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.self-center{align-self:center}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.btn-dash:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}@media (hover:none){.btn-dash:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none;border-style:dashed}}.border-none{--tw-border-style:none;border-style:none}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.p-1{padding:calc(var(--spacing)*1)}.p-2{padding:calc(var(--spacing)*2)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.text-white{color:var(--color-white)}.btn-link{--btn-border:#0000;--btn-bg:#0000;--btn-fg:var(--color-primary);--btn-noise:none;--btn-shadow:"";outline-color:currentColor;text-decoration-line:underline}.btn-link:is(.btn-active,:hover,:active:focus,:focus-visible){--btn-border:#0000;--btn-bg:#0000;text-decoration-line:underline}@media (hover:none){.btn-link:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){text-decoration-line:none}}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a),0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled,:checked){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-lg{--fontsize:1.125rem;--btn-p:1.25rem;--size:calc(var(--size-field,.25rem)*12)}.btn-md{--fontsize:.875rem;--btn-p:1rem;--size:calc(var(--size-field,.25rem)*10)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-xl{--fontsize:1.375rem;--btn-p:1.5rem;--size:calc(var(--size-field,.25rem)*14)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem)*6)}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-info{--btn-color:var(--color-info);--btn-fg:var(--color-info-content)}.btn-neutral{--btn-color:var(--color-neutral);--btn-fg:var(--color-neutral-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}.btn-success{--btn-color:var(--color-success);--btn-fg:var(--color-success-content)}.btn-warning{--btn-color:var(--color-warning);--btn-fg:var(--color-warning-content)}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Li(e) {
  const n = /* @__PURE__ */ Object.create(null);
  for (const o of e.split(",")) n[o] = 1;
  return (o) => o in n;
}
const Ce = {}, qn = [], Rt = () => {
}, Zu = () => !1, To = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ki = (e) => e.startsWith("onUpdate:"), ot = Object.assign, Ui = (e, n) => {
  const o = e.indexOf(n);
  o > -1 && e.splice(o, 1);
}, el = Object.prototype.hasOwnProperty, Te = (e, n) => el.call(e, n), le = Array.isArray, Wn = (e) => Pr(e) === "[object Map]", er = (e) => Pr(e) === "[object Set]", ks = (e) => Pr(e) === "[object Date]", de = (e) => typeof e == "function", He = (e) => typeof e == "string", Lt = (e) => typeof e == "symbol", Me = (e) => e !== null && typeof e == "object", ga = (e) => (Me(e) || de(e)) && de(e.then) && de(e.catch), ya = Object.prototype.toString, Pr = (e) => ya.call(e), tl = (e) => Pr(e).slice(8, -1), _a = (e) => Pr(e) === "[object Object]", Hi = (e) => He(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, _r = /* @__PURE__ */ Li(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ro = (e) => {
  const n = /* @__PURE__ */ Object.create(null);
  return (o) => n[o] || (n[o] = e(o));
}, nl = /-(\w)/g, mn = Ro(
  (e) => e.replace(nl, (n, o) => o ? o.toUpperCase() : "")
), rl = /\B([A-Z])/g, An = Ro(
  (e) => e.replace(rl, "-$1").toLowerCase()
), va = Ro((e) => e.charAt(0).toUpperCase() + e.slice(1)), hi = Ro(
  (e) => e ? `on${va(e)}` : ""
), pn = (e, n) => !Object.is(e, n), co = (e, ...n) => {
  for (let o = 0; o < e.length; o++)
    e[o](...n);
}, Ri = (e, n, o, s = !1) => {
  Object.defineProperty(e, n, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: o
  });
}, go = (e) => {
  const n = parseFloat(e);
  return isNaN(n) ? e : n;
};
let Ms;
const So = () => Ms || (Ms = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if (le(e)) {
    const n = {};
    for (let o = 0; o < e.length; o++) {
      const s = e[o], a = He(s) ? al(s) : xt(s);
      if (a)
        for (const c in a)
          n[c] = a[c];
    }
    return n;
  } else if (He(e) || Me(e))
    return e;
}
const ol = /;(?![^(]*\))/g, il = /:([^]+)/, sl = /\/\*[^]*?\*\//g;
function al(e) {
  const n = {};
  return e.replace(sl, "").split(ol).forEach((o) => {
    if (o) {
      const s = o.split(il);
      s.length > 1 && (n[s[0].trim()] = s[1].trim());
    }
  }), n;
}
function Fi(e) {
  let n = "";
  if (He(e))
    n = e;
  else if (le(e))
    for (let o = 0; o < e.length; o++) {
      const s = Fi(e[o]);
      s && (n += s + " ");
    }
  else if (Me(e))
    for (const o in e)
      e[o] && (n += o + " ");
  return n.trim();
}
const ul = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ll = /* @__PURE__ */ Li(ul);
function ba(e) {
  return !!e || e === "";
}
function cl(e, n) {
  if (e.length !== n.length) return !1;
  let o = !0;
  for (let s = 0; o && s < e.length; s++)
    o = Dr(e[s], n[s]);
  return o;
}
function Dr(e, n) {
  if (e === n) return !0;
  let o = ks(e), s = ks(n);
  if (o || s)
    return o && s ? e.getTime() === n.getTime() : !1;
  if (o = Lt(e), s = Lt(n), o || s)
    return e === n;
  if (o = le(e), s = le(n), o || s)
    return o && s ? cl(e, n) : !1;
  if (o = Me(e), s = Me(n), o || s) {
    if (!o || !s)
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
function Vi(e, n) {
  return e.findIndex((o) => Dr(o, n));
}
const wa = (e) => !!(e && e.__v_isRef === !0), ht = (e) => He(e) ? e : e == null ? "" : le(e) || Me(e) && (e.toString === ya || !de(e.toString)) ? wa(e) ? ht(e.value) : JSON.stringify(e, Ea, 2) : String(e), Ea = (e, n) => wa(n) ? Ea(e, n.value) : Wn(n) ? {
  [`Map(${n.size})`]: [...n.entries()].reduce(
    (o, [s, a], c) => (o[mi(s, c) + " =>"] = a, o),
    {}
  )
} : er(n) ? {
  [`Set(${n.size})`]: [...n.values()].map((o) => mi(o))
} : Lt(n) ? mi(n) : Me(n) && !le(n) && !_a(n) ? String(n) : n, mi = (e, n = "") => {
  var o;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Lt(e) ? `Symbol(${(o = e.description) != null ? o : n})` : e
  );
};
var fl = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9b4627b6-7020-42de-b344-f61161b6c0b6", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9b4627b6-7020-42de-b344-f61161b6c0b6", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1738", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:10930", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17456623818", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "c3f1b99ea07a4427df6a1d5d6b70e29713edb19b", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0a9b7cf7-8313-4d2d-a214-2a74d0000316", INVOCATION_ID: "478e90d5589e4608b695b6e00be0e2ce", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "13", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005488", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "c3f1b99ea07a4427df6a1d5d6b70e29713edb19b", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9b4627b6-7020-42de-b344-f61161b6c0b6", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9b4627b6-7020-42de-b344-f61161b6c0b6", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9b4627b6-7020-42de-b344-f61161b6c0b6", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
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
      const o = ft;
      try {
        return ft = this, n();
      } finally {
        ft = o;
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
function pl() {
  return ft;
}
let Pe;
const gi = /* @__PURE__ */ new WeakSet();
class Oa {
  constructor(n) {
    this.fn = n, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ft && ft.active && ft.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, gi.has(this) && (gi.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ta(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, js(this), Ra(this);
    const n = Pe, o = St;
    Pe = this, St = !0;
    try {
      return this.fn();
    } finally {
      Sa(this), Pe = n, St = o, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let n = this.deps; n; n = n.nextDep)
        Wi(n);
      this.deps = this.depsTail = void 0, js(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? gi.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Si(this) && this.run();
  }
  get dirty() {
    return Si(this);
  }
}
let xa = 0, vr, br;
function Ta(e, n = !1) {
  if (e.flags |= 8, n) {
    e.next = br, br = e;
    return;
  }
  e.next = vr, vr = e;
}
function Gi() {
  xa++;
}
function qi() {
  if (--xa > 0)
    return;
  if (br) {
    let n = br;
    for (br = void 0; n; ) {
      const o = n.next;
      n.next = void 0, n.flags &= -9, n = o;
    }
  }
  let e;
  for (; vr; ) {
    let n = vr;
    for (vr = void 0; n; ) {
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
function Ra(e) {
  for (let n = e.deps; n; n = n.nextDep)
    n.version = -1, n.prevActiveLink = n.dep.activeLink, n.dep.activeLink = n;
}
function Sa(e) {
  let n, o = e.depsTail, s = o;
  for (; s; ) {
    const a = s.prevDep;
    s.version === -1 ? (s === o && (o = a), Wi(s), hl(s)) : n = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = a;
  }
  e.deps = n, e.depsTail = o;
}
function Si(e) {
  for (let n = e.deps; n; n = n.nextDep)
    if (n.dep.version !== n.version || n.dep.computed && (Ia(n.dep.computed) || n.dep.version !== n.version))
      return !0;
  return !!e._dirty;
}
function Ia(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Rr) || (e.globalVersion = Rr, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Si(e))))
    return;
  e.flags |= 2;
  const n = e.dep, o = Pe, s = St;
  Pe = e, St = !0;
  try {
    Ra(e);
    const a = e.fn(e._value);
    (n.version === 0 || pn(a, e._value)) && (e.flags |= 128, e._value = a, n.version++);
  } catch (a) {
    throw n.version++, a;
  } finally {
    Pe = o, St = s, Sa(e), e.flags &= -3;
  }
}
function Wi(e, n = !1) {
  const { dep: o, prevSub: s, nextSub: a } = e;
  if (s && (s.nextSub = a, e.prevSub = void 0), a && (a.prevSub = s, e.nextSub = void 0), o.subs === e && (o.subs = s, !s && o.computed)) {
    o.computed.flags &= -5;
    for (let c = o.computed.deps; c; c = c.nextDep)
      Wi(c, !0);
  }
  !n && !--o.sc && o.map && o.map.delete(o.key);
}
function hl(e) {
  const { prevDep: n, nextDep: o } = e;
  n && (n.nextDep = o, e.prevDep = void 0), o && (o.prevDep = n, e.nextDep = void 0);
}
let St = !0;
const Na = [];
function Kt() {
  Na.push(St), St = !1;
}
function Ut() {
  const e = Na.pop();
  St = e === void 0 ? !0 : e;
}
function js(e) {
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
let Rr = 0;
class ml {
  constructor(n, o) {
    this.sub = n, this.dep = o, this.version = o.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $i {
  // TODO isolatedDeclarations "__v_skip"
  constructor(n) {
    this.computed = n, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(n) {
    if (!Pe || !St || Pe === this.computed)
      return;
    let o = this.activeLink;
    if (o === void 0 || o.sub !== Pe)
      o = this.activeLink = new ml(Pe, this), Pe.deps ? (o.prevDep = Pe.depsTail, Pe.depsTail.nextDep = o, Pe.depsTail = o) : Pe.deps = Pe.depsTail = o, Aa(o);
    else if (o.version === -1 && (o.version = this.version, o.nextDep)) {
      const s = o.nextDep;
      s.prevDep = o.prevDep, o.prevDep && (o.prevDep.nextDep = s), o.prevDep = Pe.depsTail, o.nextDep = void 0, Pe.depsTail.nextDep = o, Pe.depsTail = o, Pe.deps === o && (Pe.deps = s);
    }
    return o;
  }
  trigger(n) {
    this.version++, Rr++, this.notify(n);
  }
  notify(n) {
    Gi();
    try {
      fl.NODE_ENV;
      for (let o = this.subs; o; o = o.prevSub)
        o.sub.notify() && o.sub.dep.notify();
    } finally {
      qi();
    }
  }
}
function Aa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const n = e.dep.computed;
    if (n && !e.dep.subs) {
      n.flags |= 20;
      for (let s = n.deps; s; s = s.nextDep)
        Aa(s);
    }
    const o = e.dep.subs;
    o !== e && (e.prevSub = o, o && (o.nextSub = e)), e.dep.subs = e;
  }
}
const Ii = /* @__PURE__ */ new WeakMap(), In = Symbol(
  ""
), Ni = Symbol(
  ""
), Sr = Symbol(
  ""
);
function nt(e, n, o) {
  if (St && Pe) {
    let s = Ii.get(e);
    s || Ii.set(e, s = /* @__PURE__ */ new Map());
    let a = s.get(o);
    a || (s.set(o, a = new $i()), a.map = s, a.key = o), a.track();
  }
}
function Yt(e, n, o, s, a, c) {
  const d = Ii.get(e);
  if (!d) {
    Rr++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (Gi(), n === "clear")
    d.forEach(p);
  else {
    const m = le(e), A = m && Hi(o);
    if (m && o === "length") {
      const R = Number(s);
      d.forEach((C, L) => {
        (L === "length" || L === Sr || !Lt(L) && L >= R) && p(C);
      });
    } else
      switch ((o !== void 0 || d.has(void 0)) && p(d.get(o)), A && p(d.get(Sr)), n) {
        case "add":
          m ? A && p(d.get("length")) : (p(d.get(In)), Wn(e) && p(d.get(Ni)));
          break;
        case "delete":
          m || (p(d.get(In)), Wn(e) && p(d.get(Ni)));
          break;
        case "set":
          Wn(e) && p(d.get(In));
          break;
      }
  }
  qi();
}
function Vn(e) {
  const n = ve(e);
  return n === e ? n : (nt(n, "iterate", Sr), Et(e) ? n : n.map(ze));
}
function Io(e) {
  return nt(e = ve(e), "iterate", Sr), e;
}
const gl = {
  __proto__: null,
  [Symbol.iterator]() {
    return yi(this, Symbol.iterator, ze);
  },
  concat(...e) {
    return Vn(this).concat(
      ...e.map((n) => le(n) ? Vn(n) : n)
    );
  },
  entries() {
    return yi(this, "entries", (e) => (e[1] = ze(e[1]), e));
  },
  every(e, n) {
    return qt(this, "every", e, n, void 0, arguments);
  },
  filter(e, n) {
    return qt(this, "filter", e, n, (o) => o.map(ze), arguments);
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
    return _i(this, "includes", e);
  },
  indexOf(...e) {
    return _i(this, "indexOf", e);
  },
  join(e) {
    return Vn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return _i(this, "lastIndexOf", e);
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
    return Bs(this, "reduce", e, n);
  },
  reduceRight(e, ...n) {
    return Bs(this, "reduceRight", e, n);
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
    return yi(this, "values", ze);
  }
};
function yi(e, n, o) {
  const s = Io(e), a = s[n]();
  return s !== e && !Et(e) && (a._next = a.next, a.next = () => {
    const c = a._next();
    return c.value && (c.value = o(c.value)), c;
  }), a;
}
const yl = Array.prototype;
function qt(e, n, o, s, a, c) {
  const d = Io(e), p = d !== e && !Et(e), m = d[n];
  if (m !== yl[n]) {
    const C = m.apply(e, c);
    return p ? ze(C) : C;
  }
  let A = o;
  d !== e && (p ? A = function(C, L) {
    return o.call(this, ze(C), L, e);
  } : o.length > 2 && (A = function(C, L) {
    return o.call(this, C, L, e);
  }));
  const R = m.call(d, A, s);
  return p && a ? a(R) : R;
}
function Bs(e, n, o, s) {
  const a = Io(e);
  let c = o;
  return a !== e && (Et(e) ? o.length > 3 && (c = function(d, p, m) {
    return o.call(this, d, p, m, e);
  }) : c = function(d, p, m) {
    return o.call(this, d, ze(p), m, e);
  }), a[n](c, ...s);
}
function _i(e, n, o) {
  const s = ve(e);
  nt(s, "iterate", Sr);
  const a = s[n](...o);
  return (a === -1 || a === !1) && Xi(o[0]) ? (o[0] = ve(o[0]), s[n](...o)) : a;
}
function hr(e, n, o = []) {
  Kt(), Gi();
  const s = ve(e)[n].apply(e, o);
  return qi(), Ut(), s;
}
const _l = /* @__PURE__ */ Li("__proto__,__v_isRef,__isVue"), Ca = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Lt)
);
function vl(e) {
  Lt(e) || (e = String(e));
  const n = ve(this);
  return nt(n, "has", e), n.hasOwnProperty(e);
}
class Pa {
  constructor(n = !1, o = !1) {
    this._isReadonly = n, this._isShallow = o;
  }
  get(n, o, s) {
    if (o === "__v_skip") return n.__v_skip;
    const a = this._isReadonly, c = this._isShallow;
    if (o === "__v_isReactive")
      return !a;
    if (o === "__v_isReadonly")
      return a;
    if (o === "__v_isShallow")
      return c;
    if (o === "__v_raw")
      return s === (a ? c ? La : Ba : c ? ja : Ma).get(n) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(n) === Object.getPrototypeOf(s) ? n : void 0;
    const d = le(n);
    if (!a) {
      let m;
      if (d && (m = gl[o]))
        return m;
      if (o === "hasOwnProperty")
        return vl;
    }
    const p = Reflect.get(
      n,
      o,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Qe(n) ? n : s
    );
    return (Lt(o) ? Ca.has(o) : _l(o)) || (a || nt(n, "get", o), c) ? p : Qe(p) ? d && Hi(o) ? p : p.value : Me(p) ? a ? Ka(p) : Yi(p) : p;
  }
}
class Da extends Pa {
  constructor(n = !1) {
    super(!1, n);
  }
  set(n, o, s, a) {
    let c = n[o];
    if (!this._isShallow) {
      const m = gn(c);
      if (!Et(s) && !gn(s) && (c = ve(c), s = ve(s)), !le(n) && Qe(c) && !Qe(s))
        return m ? !1 : (c.value = s, !0);
    }
    const d = le(n) && Hi(o) ? Number(o) < n.length : Te(n, o), p = Reflect.set(
      n,
      o,
      s,
      Qe(n) ? n : a
    );
    return n === ve(a) && (d ? pn(s, c) && Yt(n, "set", o, s) : Yt(n, "add", o, s)), p;
  }
  deleteProperty(n, o) {
    const s = Te(n, o);
    n[o];
    const a = Reflect.deleteProperty(n, o);
    return a && s && Yt(n, "delete", o, void 0), a;
  }
  has(n, o) {
    const s = Reflect.has(n, o);
    return (!Lt(o) || !Ca.has(o)) && nt(n, "has", o), s;
  }
  ownKeys(n) {
    return nt(
      n,
      "iterate",
      le(n) ? "length" : In
    ), Reflect.ownKeys(n);
  }
}
class ka extends Pa {
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
const bl = /* @__PURE__ */ new Da(), wl = /* @__PURE__ */ new ka(), El = /* @__PURE__ */ new Da(!0), Ol = /* @__PURE__ */ new ka(!0), Ai = (e) => e, so = (e) => Reflect.getPrototypeOf(e);
function xl(e, n, o) {
  return function(...s) {
    const a = this.__v_raw, c = ve(a), d = Wn(c), p = e === "entries" || e === Symbol.iterator && d, m = e === "keys" && d, A = a[e](...s), R = o ? Ai : n ? yo : ze;
    return !n && nt(
      c,
      "iterate",
      m ? Ni : In
    ), {
      // iterator protocol
      next() {
        const { value: C, done: L } = A.next();
        return L ? { value: C, done: L } : {
          value: p ? [R(C[0]), R(C[1])] : R(C),
          done: L
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ao(e) {
  return function(...n) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Tl(e, n) {
  const o = {
    get(a) {
      const c = this.__v_raw, d = ve(c), p = ve(a);
      e || (pn(a, p) && nt(d, "get", a), nt(d, "get", p));
      const { has: m } = so(d), A = n ? Ai : e ? yo : ze;
      if (m.call(d, a))
        return A(c.get(a));
      if (m.call(d, p))
        return A(c.get(p));
      c !== d && c.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && nt(ve(a), "iterate", In), Reflect.get(a, "size", a);
    },
    has(a) {
      const c = this.__v_raw, d = ve(c), p = ve(a);
      return e || (pn(a, p) && nt(d, "has", a), nt(d, "has", p)), a === p ? c.has(a) : c.has(a) || c.has(p);
    },
    forEach(a, c) {
      const d = this, p = d.__v_raw, m = ve(p), A = n ? Ai : e ? yo : ze;
      return !e && nt(m, "iterate", In), p.forEach((R, C) => a.call(c, A(R), A(C), d));
    }
  };
  return ot(
    o,
    e ? {
      add: ao("add"),
      set: ao("set"),
      delete: ao("delete"),
      clear: ao("clear")
    } : {
      add(a) {
        !n && !Et(a) && !gn(a) && (a = ve(a));
        const c = ve(this);
        return so(c).has.call(c, a) || (c.add(a), Yt(c, "add", a, a)), this;
      },
      set(a, c) {
        !n && !Et(c) && !gn(c) && (c = ve(c));
        const d = ve(this), { has: p, get: m } = so(d);
        let A = p.call(d, a);
        A || (a = ve(a), A = p.call(d, a));
        const R = m.call(d, a);
        return d.set(a, c), A ? pn(c, R) && Yt(d, "set", a, c) : Yt(d, "add", a, c), this;
      },
      delete(a) {
        const c = ve(this), { has: d, get: p } = so(c);
        let m = d.call(c, a);
        m || (a = ve(a), m = d.call(c, a)), p && p.call(c, a);
        const A = c.delete(a);
        return m && Yt(c, "delete", a, void 0), A;
      },
      clear() {
        const a = ve(this), c = a.size !== 0, d = a.clear();
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
    o[a] = xl(a, e, n);
  }), o;
}
function No(e, n) {
  const o = Tl(e, n);
  return (s, a, c) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? s : Reflect.get(
    Te(o, a) && a in s ? o : s,
    a,
    c
  );
}
const Rl = {
  get: /* @__PURE__ */ No(!1, !1)
}, Sl = {
  get: /* @__PURE__ */ No(!1, !0)
}, Il = {
  get: /* @__PURE__ */ No(!0, !1)
}, Nl = {
  get: /* @__PURE__ */ No(!0, !0)
}, Ma = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap(), Ba = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap();
function Al(e) {
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
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Al(tl(e));
}
function Yi(e) {
  return gn(e) ? e : Ao(
    e,
    !1,
    bl,
    Rl,
    Ma
  );
}
function Pl(e) {
  return Ao(
    e,
    !1,
    El,
    Sl,
    ja
  );
}
function Ka(e) {
  return Ao(
    e,
    !0,
    wl,
    Il,
    Ba
  );
}
function uo(e) {
  return Ao(
    e,
    !0,
    Ol,
    Nl,
    La
  );
}
function Ao(e, n, o, s, a) {
  if (!Me(e) || e.__v_raw && !(n && e.__v_isReactive))
    return e;
  const c = Cl(e);
  if (c === 0)
    return e;
  const d = a.get(e);
  if (d)
    return d;
  const p = new Proxy(
    e,
    c === 2 ? s : o
  );
  return a.set(e, p), p;
}
function $n(e) {
  return gn(e) ? $n(e.__v_raw) : !!(e && e.__v_isReactive);
}
function gn(e) {
  return !!(e && e.__v_isReadonly);
}
function Et(e) {
  return !!(e && e.__v_isShallow);
}
function Xi(e) {
  return e ? !!e.__v_raw : !1;
}
function ve(e) {
  const n = e && e.__v_raw;
  return n ? ve(n) : e;
}
function Dl(e) {
  return !Te(e, "__v_skip") && Object.isExtensible(e) && Ri(e, "__v_skip", !0), e;
}
const ze = (e) => Me(e) ? Yi(e) : e, yo = (e) => Me(e) ? Ka(e) : e;
function Qe(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function jt(e) {
  return kl(e, !1);
}
function kl(e, n) {
  return Qe(e) ? e : new Ml(e, n);
}
class Ml {
  constructor(n, o) {
    this.dep = new $i(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = o ? n : ve(n), this._value = o ? n : ze(n), this.__v_isShallow = o;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(n) {
    const o = this._rawValue, s = this.__v_isShallow || Et(n) || gn(n);
    n = s ? n : ve(n), pn(n, o) && (this._rawValue = n, this._value = s ? n : ze(n), this.dep.trigger());
  }
}
function Nn(e) {
  return Qe(e) ? e.value : e;
}
const jl = {
  get: (e, n, o) => n === "__v_raw" ? e : Nn(Reflect.get(e, n, o)),
  set: (e, n, o, s) => {
    const a = e[n];
    return Qe(a) && !Qe(o) ? (a.value = o, !0) : Reflect.set(e, n, o, s);
  }
};
function Ua(e) {
  return $n(e) ? e : new Proxy(e, jl);
}
class Bl {
  constructor(n, o, s) {
    this.fn = n, this.setter = o, this._value = void 0, this.dep = new $i(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Rr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !o, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Pe !== this)
      return Ta(this, !0), !0;
  }
  get value() {
    const n = this.dep.track();
    return Ia(this), n && (n.version = this.dep.version), this._value;
  }
  set value(n) {
    this.setter && this.setter(n);
  }
}
function Ll(e, n, o = !1) {
  let s, a;
  return de(e) ? s = e : (s = e.get, a = e.set), new Bl(s, a, o);
}
const lo = {}, _o = /* @__PURE__ */ new WeakMap();
let Sn;
function Kl(e, n = !1, o = Sn) {
  if (o) {
    let s = _o.get(o);
    s || _o.set(o, s = []), s.push(e);
  }
}
function Ul(e, n, o = Ce) {
  const { immediate: s, deep: a, once: c, scheduler: d, augmentJob: p, call: m } = o, A = (ae) => a ? ae : Et(ae) || a === !1 || a === 0 ? Xt(ae, 1) : Xt(ae);
  let R, C, L, k, j = !1, q = !1;
  if (Qe(e) ? (C = () => e.value, j = Et(e)) : $n(e) ? (C = () => A(e), j = !0) : le(e) ? (q = !0, j = e.some((ae) => $n(ae) || Et(ae)), C = () => e.map((ae) => {
    if (Qe(ae))
      return ae.value;
    if ($n(ae))
      return A(ae);
    if (de(ae))
      return m ? m(ae, 2) : ae();
  })) : de(e) ? n ? C = m ? () => m(e, 2) : e : C = () => {
    if (L) {
      Kt();
      try {
        L();
      } finally {
        Ut();
      }
    }
    const ae = Sn;
    Sn = R;
    try {
      return m ? m(e, 3, [k]) : e(k);
    } finally {
      Sn = ae;
    }
  } : C = Rt, n && a) {
    const ae = C, Ie = a === !0 ? 1 / 0 : a;
    C = () => Xt(ae(), Ie);
  }
  const Re = pl(), we = () => {
    R.stop(), Re && Re.active && Ui(Re.effects, R);
  };
  if (c && n) {
    const ae = n;
    n = (...Ie) => {
      ae(...Ie), we();
    };
  }
  let Ee = q ? new Array(e.length).fill(lo) : lo;
  const Oe = (ae) => {
    if (!(!(R.flags & 1) || !R.dirty && !ae))
      if (n) {
        const Ie = R.run();
        if (a || j || (q ? Ie.some((Ne, Se) => pn(Ne, Ee[Se])) : pn(Ie, Ee))) {
          L && L();
          const Ne = Sn;
          Sn = R;
          try {
            const Se = [
              Ie,
              // pass undefined as the old value when it's changed for the first time
              Ee === lo ? void 0 : q && Ee[0] === lo ? [] : Ee,
              k
            ];
            Ee = Ie, m ? m(n, 3, Se) : (
              // @ts-expect-error
              n(...Se)
            );
          } finally {
            Sn = Ne;
          }
        }
      } else
        R.run();
  };
  return p && p(Oe), R = new Oa(C), R.scheduler = d ? () => d(Oe, !1) : Oe, k = (ae) => Kl(ae, !1, R), L = R.onStop = () => {
    const ae = _o.get(R);
    if (ae) {
      if (m)
        m(ae, 4);
      else
        for (const Ie of ae) Ie();
      _o.delete(R);
    }
  }, n ? s ? Oe(!0) : Ee = R.run() : d ? d(Oe.bind(null, !0), !0) : R.run(), we.pause = R.pause.bind(R), we.resume = R.resume.bind(R), we.stop = we, we;
}
function Xt(e, n = 1 / 0, o) {
  if (n <= 0 || !Me(e) || e.__v_skip || (o = o || /* @__PURE__ */ new Set(), o.has(e)))
    return e;
  if (o.add(e), n--, Qe(e))
    Xt(e.value, n, o);
  else if (le(e))
    for (let s = 0; s < e.length; s++)
      Xt(e[s], n, o);
  else if (er(e) || Wn(e))
    e.forEach((s) => {
      Xt(s, n, o);
    });
  else if (_a(e)) {
    for (const s in e)
      Xt(e[s], n, o);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Xt(e[s], n, o);
  }
  return e;
}
var ln = { GITHUB_STATE: "/home/runner/work/_temp/_runner_file_commands/save_state_9b4627b6-7020-42de-b344-f61161b6c0b6", DOTNET_NOLOGO: "1", USER: "runner", npm_config_user_agent: "pnpm/10.10.0 npm/? node/v20.19.4 linux x64", CI: "true", RUNNER_ENVIRONMENT: "github-hosted", GITHUB_ENV: "/home/runner/work/_temp/_runner_file_commands/set_env_9b4627b6-7020-42de-b344-f61161b6c0b6", PIPX_HOME: "/opt/pipx", npm_config__septkit_registry: "https://npm.pkg.github.com", npm_node_execpath: "/usr/local/bin/node", JAVA_HOME_8_X64: "/usr/lib/jvm/temurin-8-jdk-amd64", SHLVL: "1", HOME: "/home/runner", RUNNER_TEMP: "/home/runner/work/_temp", GITHUB_EVENT_PATH: "/home/runner/work/_temp/_github_workflow/event.json", npm_package_json: "/home/runner/work/set/set/packages/extensions/dataflow/package.json", JAVA_HOME_11_X64: "/usr/lib/jvm/temurin-11-jdk-amd64", PIPX_BIN_DIR: "/opt/pipx_bin", GITHUB_REPOSITORY_OWNER: "SeptKit", npm_config_auto_install_peers: "true", GRADLE_HOME: "/usr/share/gradle-9.0.0", ANDROID_NDK_LATEST_HOME: "/usr/local/lib/android/sdk/ndk/28.2.13676358", JAVA_HOME_21_X64: "/usr/lib/jvm/temurin-21-jdk-amd64", GITHUB_RETENTION_DAYS: "90", GITHUB_REPOSITORY_OWNER_ID: "210705285", POWERSHELL_DISTRIBUTION_CHANNEL: "GitHub-Actions-ubuntu24", AZURE_EXTENSION_DIR: "/opt/az/azcliextensions", GITHUB_HEAD_REF: "", npm_config_shared_workspace_lockfile: "", SYSTEMD_EXEC_PID: "1738", GITHUB_GRAPHQL_URL: "https://api.github.com/graphql", NVM_DIR: "/home/runner/.nvm", DOTNET_SKIP_FIRST_TIME_EXPERIENCE: "1", JAVA_HOME_17_X64: "/usr/lib/jvm/temurin-17-jdk-amd64", ImageVersion: "20250831.1.0", LOGNAME: "runner", RUNNER_OS: "Linux", GITHUB_API_URL: "https://api.github.com", GOROOT_1_22_X64: "/opt/hostedtoolcache/go/1.22.12/x64", SWIFT_PATH: "/usr/share/swift/usr/bin", npm_config_catalog: '{"@septkit/fileio":"0.0.5","@septkit/ui":"0.0.7"}', CHROMEWEBDRIVER: "/usr/local/share/chromedriver-linux64", GOROOT_1_23_X64: "/opt/hostedtoolcache/go/1.23.12/x64", JOURNAL_STREAM: "9:10930", GITHUB_WORKFLOW: "Deploy Ext. Dataflow", _: "/home/runner/setup-pnpm/node_modules/.bin/pnpm", MEMORY_PRESSURE_WATCH: "/sys/fs/cgroup/system.slice/hosted-compute-agent.service/memory.pressure", GOROOT_1_24_X64: "/opt/hostedtoolcache/go/1.24.6/x64", npm_config_registry: "https://registry.npmjs.org/", ACTIONS_RUNNER_ACTION_ARCHIVE_CACHE: "/opt/actionarchivecache", GITHUB_RUN_ID: "17456623818", GITHUB_REF_TYPE: "branch", BOOTSTRAP_HASKELL_NONINTERACTIVE: "1", GITHUB_WORKFLOW_SHA: "c3f1b99ea07a4427df6a1d5d6b70e29713edb19b", GITHUB_BASE_REF: "", ImageOS: "ubuntu24", GITHUB_WORKFLOW_REF: "SeptKit/set/.github/workflows/deploy-ext-dataflow.yml@refs/heads/main", GITHUB_ACTION_REPOSITORY: "", ENABLE_RUNNER_TRACING: "true", npm_config_node_gyp: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node_modules/node-gyp/bin/node-gyp.js", PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/dist/node-gyp-bin:/home/runner/work/set/set/node_modules/.bin:/home/runner/setup-pnpm/node_modules/.bin:/snap/bin:/home/runner/.local/bin:/opt/pipx_bin:/home/runner/.cargo/bin:/home/runner/.config/composer/vendor/bin:/usr/local/.ghcup/bin:/home/runner/.dotnet/tools:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin:/usr/games:/usr/local/games:/snap/bin", ANT_HOME: "/usr/share/ant", DOTNET_MULTILEVEL_LOOKUP: "0", RUNNER_TRACKING_ID: "github_0a9b7cf7-8313-4d2d-a214-2a74d0000316", INVOCATION_ID: "478e90d5589e4608b695b6e00be0e2ce", RUNNER_TOOL_CACHE: "/opt/hostedtoolcache", npm_package_name: "Dataflow Extension", NODE: "/usr/local/bin/node", GITHUB_ACTION: "__run", GITHUB_RUN_NUMBER: "13", GITHUB_TRIGGERING_ACTOR: "NgoEva", RUNNER_ARCH: "X64", XDG_RUNTIME_DIR: "/run/user/1001", AGENT_TOOLSDIRECTORY: "/opt/hostedtoolcache", npm_config_frozen_lockfile: "", LANG: "C.UTF-8", VCPKG_INSTALLATION_ROOT: "/usr/local/share/vcpkg", CONDA: "/usr/share/miniconda", RUNNER_NAME: "GitHub Actions 1000005488", XDG_CONFIG_HOME: "/home/runner/.config", GITHUB_REF_NAME: "main", GITHUB_REPOSITORY: "SeptKit/set", npm_lifecycle_script: "vite build", ANDROID_NDK_ROOT: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_ACTION_REF: "", DEBIAN_FRONTEND: "noninteractive", SHELL: "/bin/bash", GITHUB_REPOSITORY_ID: "1003638225", GITHUB_ACTIONS: "true", NODE_PATH: "/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/bin/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules/vite/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/vite@7.0.5_@types+node@22.16.5_jiti@2.4.2_lightningcss@1.30.1/node_modules:/home/runner/work/set/set/packages/extensions/dataflow/node_modules/.pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules:/home/runner/setup-pnpm/node_modules/.pnpm/node_modules", npm_package_version: "4", npm_lifecycle_event: "build", npm_config_verify_deps_before_run: "false", GITHUB_REF_PROTECTED: "true", GITHUB_WORKSPACE: "/home/runner/work/set/set", ACCEPT_EULA: "Y", GITHUB_JOB: "build", npm_config_sharedWorkspaceLockfile: "", GITHUB_SHA: "c3f1b99ea07a4427df6a1d5d6b70e29713edb19b", GITHUB_RUN_ATTEMPT: "1", GITHUB_REF: "refs/heads/main", GITHUB_ACTOR: "NgoEva", ANDROID_SDK_ROOT: "/usr/local/lib/android/sdk", GITHUB_PATH: "/home/runner/work/_temp/_runner_file_commands/add_path_9b4627b6-7020-42de-b344-f61161b6c0b6", JAVA_HOME: "/usr/lib/jvm/temurin-17-jdk-amd64", PWD: "/home/runner/work/set/set/packages/extensions/dataflow", GITHUB_ACTOR_ID: "32981638", RUNNER_WORKSPACE: "/home/runner/work/set", npm_config_link_workspace_packages: "", npm_execpath: "/home/runner/setup-pnpm/node_modules/.pnpm/pnpm@10.10.0/node_modules/pnpm/bin/pnpm.cjs", HOMEBREW_CLEANUP_PERIODIC_FULL_DAYS: "3650", GITHUB_EVENT_NAME: "push", HOMEBREW_NO_AUTO_UPDATE: "1", ANDROID_HOME: "/usr/local/lib/android/sdk", GITHUB_SERVER_URL: "https://github.com", GECKOWEBDRIVER: "/usr/local/share/gecko_driver", GHCUP_INSTALL_BASE_PREFIX: "/usr/local", GITHUB_OUTPUT: "/home/runner/work/_temp/_runner_file_commands/set_output_9b4627b6-7020-42de-b344-f61161b6c0b6", EDGEWEBDRIVER: "/usr/local/share/edge_driver", npm_config__jsr_registry: "https://npm.jsr.io/", npm_command: "run-script", PNPM_SCRIPT_SRC_DIR: "/home/runner/work/set/set/packages/extensions/dataflow", ANDROID_NDK: "/usr/local/lib/android/sdk/ndk/27.3.13750724", SGX_AESM_ADDR: "1", CHROME_BIN: "/usr/bin/google-chrome", SELENIUM_JAR_PATH: "/usr/share/java/selenium-server.jar", MEMORY_PRESSURE_WRITE: "c29tZSAyMDAwMDAgMjAwMDAwMAA=", PNPM_HOME: "/home/runner/setup-pnpm/node_modules/.bin", ANDROID_NDK_HOME: "/usr/local/lib/android/sdk/ndk/27.3.13750724", GITHUB_STEP_SUMMARY: "/home/runner/work/_temp/_runner_file_commands/step_summary_9b4627b6-7020-42de-b344-f61161b6c0b6", INIT_CWD: "/home/runner/work/set/set/packages/extensions/dataflow", NODE_ENV: "production", LAUNCH_EDITOR: "code" };
const wr = [];
let vi = !1;
function Hl(e, ...n) {
  if (vi) return;
  vi = !0, Kt();
  const o = wr.length ? wr[wr.length - 1].component : null, s = o && o.appContext.config.warnHandler, a = Fl();
  if (s)
    tr(
      s,
      o,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + n.map((c) => {
          var d, p;
          return (p = (d = c.toString) == null ? void 0 : d.call(c)) != null ? p : JSON.stringify(c);
        }).join(""),
        o && o.proxy,
        a.map(
          ({ vnode: c }) => `at <${Eu(o, c.type)}>`
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
  Ut(), vi = !1;
}
function Fl() {
  let e = wr[wr.length - 1];
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
function Vl(e) {
  const n = [];
  return e.forEach((o, s) => {
    n.push(...s === 0 ? [] : [`
`], ...Gl(o));
  }), n;
}
function Gl({ vnode: e, recurseCount: n }) {
  const o = n > 0 ? `... (${n} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, a = ` at <${Eu(
    e.component,
    e.type,
    s
  )}`, c = ">" + o;
  return e.props ? [a, ...ql(e.props), c] : [a + c];
}
function ql(e) {
  const n = [], o = Object.keys(e);
  return o.slice(0, 3).forEach((s) => {
    n.push(...Ha(s, e[s]));
  }), o.length > 3 && n.push(" ..."), n;
}
function Ha(e, n, o) {
  return He(n) ? (n = JSON.stringify(n), o ? n : [`${e}=${n}`]) : typeof n == "number" || typeof n == "boolean" || n == null ? o ? n : [`${e}=${n}`] : Qe(n) ? (n = Ha(e, ve(n.value), !0), o ? n : [`${e}=Ref<`, n, ">"]) : de(n) ? [`${e}=fn${n.name ? `<${n.name}>` : ""}`] : (n = ve(n), o ? n : [`${e}=`, n]);
}
function tr(e, n, o, s) {
  try {
    return s ? e(...s) : e();
  } catch (a) {
    Co(a, n, o);
  }
}
function Ht(e, n, o, s) {
  if (de(e)) {
    const a = tr(e, n, o, s);
    return a && ga(a) && a.catch((c) => {
      Co(c, n, o);
    }), a;
  }
  if (le(e)) {
    const a = [];
    for (let c = 0; c < e.length; c++)
      a.push(Ht(e[c], n, o, s));
    return a;
  }
}
function Co(e, n, o, s = !0) {
  const a = n ? n.vnode : null, { errorHandler: c, throwUnhandledErrorInProduction: d } = n && n.appContext.config || Ce;
  if (n) {
    let p = n.parent;
    const m = n.proxy, A = `https://vuejs.org/error-reference/#runtime-${o}`;
    for (; p; ) {
      const R = p.ec;
      if (R) {
        for (let C = 0; C < R.length; C++)
          if (R[C](e, m, A) === !1)
            return;
      }
      p = p.parent;
    }
    if (c) {
      Kt(), tr(c, null, 10, [
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
const ut = [];
let Mt = -1;
const Yn = [];
let cn = null, Gn = 0;
const Fa = /* @__PURE__ */ Promise.resolve();
let vo = null;
function Va(e) {
  const n = vo || Fa;
  return e ? n.then(this ? e.bind(this) : e) : n;
}
function $l(e) {
  let n = Mt + 1, o = ut.length;
  for (; n < o; ) {
    const s = n + o >>> 1, a = ut[s], c = Ir(a);
    c < e || c === e && a.flags & 2 ? n = s + 1 : o = s;
  }
  return n;
}
function zi(e) {
  if (!(e.flags & 1)) {
    const n = Ir(e), o = ut[ut.length - 1];
    !o || // fast path when the job id is larger than the tail
    !(e.flags & 2) && n >= Ir(o) ? ut.push(e) : ut.splice($l(n), 0, e), e.flags |= 1, Ga();
  }
}
function Ga() {
  vo || (vo = Fa.then(Wa));
}
function Yl(e) {
  le(e) ? Yn.push(...e) : cn && e.id === -1 ? cn.splice(Gn + 1, 0, e) : e.flags & 1 || (Yn.push(e), e.flags |= 1), Ga();
}
function Ls(e, n, o = Mt + 1) {
  for (; o < ut.length; o++) {
    const s = ut[o];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      ut.splice(o, 1), o--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function qa(e) {
  if (Yn.length) {
    const n = [...new Set(Yn)].sort(
      (o, s) => Ir(o) - Ir(s)
    );
    if (Yn.length = 0, cn) {
      cn.push(...n);
      return;
    }
    for (cn = n, Gn = 0; Gn < cn.length; Gn++) {
      const o = cn[Gn];
      o.flags & 4 && (o.flags &= -2), o.flags & 8 || o(), o.flags &= -2;
    }
    cn = null, Gn = 0;
  }
}
const Ir = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Wa(e) {
  const n = Rt;
  try {
    for (Mt = 0; Mt < ut.length; Mt++) {
      const o = ut[Mt];
      o && !(o.flags & 8) && (ln.NODE_ENV !== "production" && n(o), o.flags & 4 && (o.flags &= -2), tr(
        o,
        o.i,
        o.i ? 15 : 14
      ), o.flags & 4 || (o.flags &= -2));
    }
  } finally {
    for (; Mt < ut.length; Mt++) {
      const o = ut[Mt];
      o && (o.flags &= -2);
    }
    Mt = -1, ut.length = 0, qa(), vo = null, (ut.length || Yn.length) && Wa();
  }
}
let mt = null, $a = null;
function bo(e) {
  const n = mt;
  return mt = e, $a = e && e.type.__scopeId || null, n;
}
function Xl(e, n = mt, o) {
  if (!n || e._n)
    return e;
  const s = (...a) => {
    s._d && $s(-1);
    const c = bo(n);
    let d;
    try {
      d = e(...a);
    } finally {
      bo(c), s._d && $s(1);
    }
    return d;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Wt(e, n) {
  if (mt === null)
    return e;
  const o = jo(mt), s = e.dirs || (e.dirs = []);
  for (let a = 0; a < n.length; a++) {
    let [c, d, p, m = Ce] = n[a];
    c && (de(c) && (c = {
      mounted: c,
      updated: c
    }), c.deep && Xt(d), s.push({
      dir: c,
      instance: o,
      value: d,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return e;
}
function Tn(e, n, o, s) {
  const a = e.dirs, c = n && n.dirs;
  for (let d = 0; d < a.length; d++) {
    const p = a[d];
    c && (p.oldValue = c[d].value);
    let m = p.dir[s];
    m && (Kt(), Ht(m, o, 8, [
      e.el,
      p,
      e,
      n
    ]), Ut());
  }
}
const zl = Symbol("_vte"), Jl = (e) => e.__isTeleport;
function Ji(e, n) {
  e.shapeFlag & 6 && e.component ? (e.transition = n, Ji(e.component.subTree, n)) : e.shapeFlag & 128 ? (e.ssContent.transition = n.clone(e.ssContent), e.ssFallback.transition = n.clone(e.ssFallback)) : e.transition = n;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Po(e, n) {
  return de(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ot({ name: e.name }, n, { setup: e })
  ) : e;
}
function Ya(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Er(e, n, o, s, a = !1) {
  if (le(e)) {
    e.forEach(
      (j, q) => Er(
        j,
        n && (le(n) ? n[q] : n),
        o,
        s,
        a
      )
    );
    return;
  }
  if (Or(s) && !a) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Er(e, n, o, s.component.subTree);
    return;
  }
  const c = s.shapeFlag & 4 ? jo(s.component) : s.el, d = a ? null : c, { i: p, r: m } = e, A = n && n.r, R = p.refs === Ce ? p.refs = {} : p.refs, C = p.setupState, L = ve(C), k = C === Ce ? () => !1 : (j) => Te(L, j);
  if (A != null && A !== m && (He(A) ? (R[A] = null, k(A) && (C[A] = null)) : Qe(A) && (A.value = null)), de(m))
    tr(m, p, 12, [d, R]);
  else {
    const j = He(m), q = Qe(m);
    if (j || q) {
      const Re = () => {
        if (e.f) {
          const we = j ? k(m) ? C[m] : R[m] : m.value;
          a ? le(we) && Ui(we, c) : le(we) ? we.includes(c) || we.push(c) : j ? (R[m] = [c], k(m) && (C[m] = R[m])) : (m.value = [c], e.k && (R[e.k] = m.value));
        } else j ? (R[m] = d, k(m) && (C[m] = d)) : q && (m.value = d, e.k && (R[e.k] = d));
      };
      d ? (Re.id = -1, pt(Re, o)) : Re();
    }
  }
}
So().requestIdleCallback;
So().cancelIdleCallback;
const Or = (e) => !!e.type.__asyncLoader, Xa = (e) => e.type.__isKeepAlive;
function Ql(e, n) {
  za(e, "a", n);
}
function Zl(e, n) {
  za(e, "da", n);
}
function za(e, n, o = Je) {
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
      Xa(a.parent.vnode) && ec(s, n, o, a), a = a.parent;
  }
}
function ec(e, n, o, s) {
  const a = Do(
    n,
    e,
    s,
    !0
    /* prepend */
  );
  Qi(() => {
    Ui(s[n], a);
  }, o);
}
function Do(e, n, o = Je, s = !1) {
  if (o) {
    const a = o[e] || (o[e] = []), c = n.__weh || (n.__weh = (...d) => {
      Kt();
      const p = kr(o), m = Ht(n, o, e, d);
      return p(), Ut(), m;
    });
    return s ? a.unshift(c) : a.push(c), c;
  }
}
const Jt = (e) => (n, o = Je) => {
  (!Ar || e === "sp") && Do(e, (...s) => n(...s), o);
}, tc = Jt("bm"), Ja = Jt("m"), nc = Jt(
  "bu"
), rc = Jt("u"), oc = Jt(
  "bum"
), Qi = Jt("um"), ic = Jt(
  "sp"
), sc = Jt("rtg"), ac = Jt("rtc");
function uc(e, n = Je) {
  Do("ec", e, n);
}
const lc = Symbol.for("v-ndc");
function Xn(e, n, o, s) {
  let a;
  const c = o, d = le(e);
  if (d || He(e)) {
    const p = d && $n(e);
    let m = !1, A = !1;
    p && (m = !Et(e), A = gn(e), e = Io(e)), a = new Array(e.length);
    for (let R = 0, C = e.length; R < C; R++)
      a[R] = n(
        m ? A ? yo(ze(e[R])) : ze(e[R]) : e[R],
        R,
        void 0,
        c
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let p = 0; p < e; p++)
      a[p] = n(p + 1, p, void 0, c);
  } else if (Me(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (p, m) => n(p, m, void 0, c)
      );
    else {
      const p = Object.keys(e);
      a = new Array(p.length);
      for (let m = 0, A = p.length; m < A; m++) {
        const R = p[m];
        a[m] = n(e[R], R, m, c);
      }
    }
  else
    a = [];
  return a;
}
const Ci = (e) => e ? bu(e) ? jo(e) : Ci(e.parent) : null, xr = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ot(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Ci(e.parent),
    $root: (e) => Ci(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Za(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      zi(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Va.bind(e.proxy)),
    $watch: (e) => Cc.bind(e)
  })
), bi = (e, n) => e !== Ce && !e.__isScriptSetup && Te(e, n), cc = {
  get({ _: e }, n) {
    if (n === "__v_skip")
      return !0;
    const { ctx: o, setupState: s, data: a, props: c, accessCache: d, type: p, appContext: m } = e;
    let A;
    if (n[0] !== "$") {
      const k = d[n];
      if (k !== void 0)
        switch (k) {
          case 1:
            return s[n];
          case 2:
            return a[n];
          case 4:
            return o[n];
          case 3:
            return c[n];
        }
      else {
        if (bi(s, n))
          return d[n] = 1, s[n];
        if (a !== Ce && Te(a, n))
          return d[n] = 2, a[n];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (A = e.propsOptions[0]) && Te(A, n)
        )
          return d[n] = 3, c[n];
        if (o !== Ce && Te(o, n))
          return d[n] = 4, o[n];
        Pi && (d[n] = 0);
      }
    }
    const R = xr[n];
    let C, L;
    if (R)
      return n === "$attrs" && nt(e.attrs, "get", ""), R(e);
    if (
      // css module (injected by vue-loader)
      (C = p.__cssModules) && (C = C[n])
    )
      return C;
    if (o !== Ce && Te(o, n))
      return d[n] = 4, o[n];
    if (
      // global properties
      L = m.config.globalProperties, Te(L, n)
    )
      return L[n];
  },
  set({ _: e }, n, o) {
    const { data: s, setupState: a, ctx: c } = e;
    return bi(a, n) ? (a[n] = o, !0) : s !== Ce && Te(s, n) ? (s[n] = o, !0) : Te(e.props, n) || n[0] === "$" && n.slice(1) in e ? !1 : (c[n] = o, !0);
  },
  has({
    _: { data: e, setupState: n, accessCache: o, ctx: s, appContext: a, propsOptions: c }
  }, d) {
    let p;
    return !!o[d] || e !== Ce && Te(e, d) || bi(n, d) || (p = c[0]) && Te(p, d) || Te(s, d) || Te(xr, d) || Te(a.config.globalProperties, d);
  },
  defineProperty(e, n, o) {
    return o.get != null ? e._.accessCache[n] = 0 : Te(o, "value") && this.set(e, n, o.value, null), Reflect.defineProperty(e, n, o);
  }
};
function Ks(e) {
  return le(e) ? e.reduce(
    (n, o) => (n[o] = null, n),
    {}
  ) : e;
}
let Pi = !0;
function fc(e) {
  const n = Za(e), o = e.proxy, s = e.ctx;
  Pi = !1, n.beforeCreate && Us(n.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: c,
    methods: d,
    watch: p,
    provide: m,
    inject: A,
    // lifecycle
    created: R,
    beforeMount: C,
    mounted: L,
    beforeUpdate: k,
    updated: j,
    activated: q,
    deactivated: Re,
    beforeDestroy: we,
    beforeUnmount: Ee,
    destroyed: Oe,
    unmounted: ae,
    render: Ie,
    renderTracked: Ne,
    renderTriggered: Se,
    errorCaptured: yt,
    serverPrefetch: Cn,
    // public API
    expose: Nt,
    inheritAttrs: Qt,
    // assets
    components: At,
    directives: _t,
    filters: nr
  } = n;
  if (A && dc(A, s, null), d)
    for (const De in d) {
      const ge = d[De];
      de(ge) && (s[De] = ge.bind(o));
    }
  if (a) {
    const De = a.call(o, o);
    Me(De) && (e.data = Yi(De));
  }
  if (Pi = !0, c)
    for (const De in c) {
      const ge = c[De], lt = de(ge) ? ge.bind(o, o) : de(ge.get) ? ge.get.bind(o, o) : Rt, ct = !de(ge) && de(ge.set) ? ge.set.bind(o) : Rt, Ot = Jn({
        get: lt,
        set: ct
      });
      Object.defineProperty(s, De, {
        enumerable: !0,
        configurable: !0,
        get: () => Ot.value,
        set: (vt) => Ot.value = vt
      });
    }
  if (p)
    for (const De in p)
      Qa(p[De], s, o, De);
  if (m) {
    const De = de(m) ? m.call(o) : m;
    Reflect.ownKeys(De).forEach((ge) => {
      _c(ge, De[ge]);
    });
  }
  R && Us(R, e, "c");
  function Ve(De, ge) {
    le(ge) ? ge.forEach((lt) => De(lt.bind(o))) : ge && De(ge.bind(o));
  }
  if (Ve(tc, C), Ve(Ja, L), Ve(nc, k), Ve(rc, j), Ve(Ql, q), Ve(Zl, Re), Ve(uc, yt), Ve(ac, Ne), Ve(sc, Se), Ve(oc, Ee), Ve(Qi, ae), Ve(ic, Cn), le(Nt))
    if (Nt.length) {
      const De = e.exposed || (e.exposed = {});
      Nt.forEach((ge) => {
        Object.defineProperty(De, ge, {
          get: () => o[ge],
          set: (lt) => o[ge] = lt
        });
      });
    } else e.exposed || (e.exposed = {});
  Ie && e.render === Rt && (e.render = Ie), Qt != null && (e.inheritAttrs = Qt), At && (e.components = At), _t && (e.directives = _t), Cn && Ya(e);
}
function dc(e, n, o = Rt) {
  le(e) && (e = Di(e));
  for (const s in e) {
    const a = e[s];
    let c;
    Me(a) ? "default" in a ? c = fo(
      a.from || s,
      a.default,
      !0
    ) : c = fo(a.from || s) : c = fo(a), Qe(c) ? Object.defineProperty(n, s, {
      enumerable: !0,
      configurable: !0,
      get: () => c.value,
      set: (d) => c.value = d
    }) : n[s] = c;
  }
}
function Us(e, n, o) {
  Ht(
    le(e) ? e.map((s) => s.bind(n.proxy)) : e.bind(n.proxy),
    n,
    o
  );
}
function Qa(e, n, o, s) {
  let a = s.includes(".") ? du(o, s) : () => o[s];
  if (He(e)) {
    const c = n[e];
    de(c) && hn(a, c);
  } else if (de(e))
    hn(a, e.bind(o));
  else if (Me(e))
    if (le(e))
      e.forEach((c) => Qa(c, n, o, s));
    else {
      const c = de(e.handler) ? e.handler.bind(o) : n[e.handler];
      de(c) && hn(a, c, e);
    }
}
function Za(e) {
  const n = e.type, { mixins: o, extends: s } = n, {
    mixins: a,
    optionsCache: c,
    config: { optionMergeStrategies: d }
  } = e.appContext, p = c.get(n);
  let m;
  return p ? m = p : !a.length && !o && !s ? m = n : (m = {}, a.length && a.forEach(
    (A) => wo(m, A, d, !0)
  ), wo(m, n, d)), Me(n) && c.set(n, m), m;
}
function wo(e, n, o, s = !1) {
  const { mixins: a, extends: c } = n;
  c && wo(e, c, o, !0), a && a.forEach(
    (d) => wo(e, d, o, !0)
  );
  for (const d in n)
    if (!(s && d === "expose")) {
      const p = pc[d] || o && o[d];
      e[d] = p ? p(e[d], n[d]) : n[d];
    }
  return e;
}
const pc = {
  data: Hs,
  props: Fs,
  emits: Fs,
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
  watch: mc,
  // provide / inject
  provide: Hs,
  inject: hc
};
function Hs(e, n) {
  return n ? e ? function() {
    return ot(
      de(e) ? e.call(this, this) : e,
      de(n) ? n.call(this, this) : n
    );
  } : n : e;
}
function hc(e, n) {
  return yr(Di(e), Di(n));
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
function at(e, n) {
  return e ? [...new Set([].concat(e, n))] : n;
}
function yr(e, n) {
  return e ? ot(/* @__PURE__ */ Object.create(null), e, n) : n;
}
function Fs(e, n) {
  return e ? le(e) && le(n) ? [.../* @__PURE__ */ new Set([...e, ...n])] : ot(
    /* @__PURE__ */ Object.create(null),
    Ks(e),
    Ks(n ?? {})
  ) : n;
}
function mc(e, n) {
  if (!e) return n;
  if (!n) return e;
  const o = ot(/* @__PURE__ */ Object.create(null), e);
  for (const s in n)
    o[s] = at(e[s], n[s]);
  return o;
}
function eu() {
  return {
    app: null,
    config: {
      isNativeTag: Zu,
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
let gc = 0;
function yc(e, n) {
  return function(s, a = null) {
    de(s) || (s = ot({}, s)), a != null && !Me(a) && (a = null);
    const c = eu(), d = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const A = c.app = {
      _uid: gc++,
      _component: s,
      _props: a,
      _container: null,
      _context: c,
      _instance: null,
      version: tf,
      get config() {
        return c.config;
      },
      set config(R) {
      },
      use(R, ...C) {
        return d.has(R) || (R && de(R.install) ? (d.add(R), R.install(A, ...C)) : de(R) && (d.add(R), R(A, ...C))), A;
      },
      mixin(R) {
        return c.mixins.includes(R) || c.mixins.push(R), A;
      },
      component(R, C) {
        return C ? (c.components[R] = C, A) : c.components[R];
      },
      directive(R, C) {
        return C ? (c.directives[R] = C, A) : c.directives[R];
      },
      mount(R, C, L) {
        if (!m) {
          const k = A._ceVNode || It(s, a);
          return k.appContext = c, L === !0 ? L = "svg" : L === !1 && (L = void 0), e(k, R, L), m = !0, A._container = R, R.__vue_app__ = A, jo(k.component);
        }
      },
      onUnmount(R) {
        p.push(R);
      },
      unmount() {
        m && (Ht(
          p,
          A._instance,
          16
        ), e(null, A._container), delete A._container.__vue_app__);
      },
      provide(R, C) {
        return c.provides[R] = C, A;
      },
      runWithContext(R) {
        const C = zn;
        zn = A;
        try {
          return R();
        } finally {
          zn = C;
        }
      }
    };
    return A;
  };
}
let zn = null;
function _c(e, n) {
  if (Je) {
    let o = Je.provides;
    const s = Je.parent && Je.parent.provides;
    s === o && (o = Je.provides = Object.create(s)), o[e] = n;
  }
}
function fo(e, n, o = !1) {
  const s = Je || mt;
  if (s || zn) {
    let a = zn ? zn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return o && de(n) ? n.call(s && s.proxy) : n;
  }
}
const tu = {}, nu = () => Object.create(tu), ru = (e) => Object.getPrototypeOf(e) === tu;
function vc(e, n, o, s = !1) {
  const a = {}, c = nu();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ou(e, n, a, c);
  for (const d in e.propsOptions[0])
    d in a || (a[d] = void 0);
  o ? e.props = s ? a : Pl(a) : e.type.props ? e.props = a : e.props = c, e.attrs = c;
}
function bc(e, n, o, s) {
  const {
    props: a,
    attrs: c,
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
      const R = e.vnode.dynamicProps;
      for (let C = 0; C < R.length; C++) {
        let L = R[C];
        if (ko(e.emitsOptions, L))
          continue;
        const k = n[L];
        if (m)
          if (Te(c, L))
            k !== c[L] && (c[L] = k, A = !0);
          else {
            const j = mn(L);
            a[j] = ki(
              m,
              p,
              j,
              k,
              e,
              !1
            );
          }
        else
          k !== c[L] && (c[L] = k, A = !0);
      }
    }
  } else {
    ou(e, n, a, c) && (A = !0);
    let R;
    for (const C in p)
      (!n || // for camelCase
      !Te(n, C) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((R = An(C)) === C || !Te(n, R))) && (m ? o && // for camelCase
      (o[C] !== void 0 || // for kebab-case
      o[R] !== void 0) && (a[C] = ki(
        m,
        p,
        C,
        void 0,
        e,
        !0
      )) : delete a[C]);
    if (c !== p)
      for (const C in c)
        (!n || !Te(n, C)) && (delete c[C], A = !0);
  }
  A && Yt(e.attrs, "set", "");
}
function ou(e, n, o, s) {
  const [a, c] = e.propsOptions;
  let d = !1, p;
  if (n)
    for (let m in n) {
      if (_r(m))
        continue;
      const A = n[m];
      let R;
      a && Te(a, R = mn(m)) ? !c || !c.includes(R) ? o[R] = A : (p || (p = {}))[R] = A : ko(e.emitsOptions, m) || (!(m in s) || A !== s[m]) && (s[m] = A, d = !0);
    }
  if (c) {
    const m = ve(o), A = p || Ce;
    for (let R = 0; R < c.length; R++) {
      const C = c[R];
      o[C] = ki(
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
function ki(e, n, o, s, a, c) {
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
          const R = kr(a);
          s = A[o] = m.call(
            null,
            n
          ), R();
        }
      } else
        s = m;
      a.ce && a.ce._setProp(o, s);
    }
    d[
      0
      /* shouldCast */
    ] && (c && !p ? s = !1 : d[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === An(o)) && (s = !0));
  }
  return s;
}
const wc = /* @__PURE__ */ new WeakMap();
function iu(e, n, o = !1) {
  const s = o ? wc : n.propsCache, a = s.get(e);
  if (a)
    return a;
  const c = e.props, d = {}, p = [];
  let m = !1;
  if (!de(e)) {
    const R = (C) => {
      m = !0;
      const [L, k] = iu(C, n, !0);
      ot(d, L), k && p.push(...k);
    };
    !o && n.mixins.length && n.mixins.forEach(R), e.extends && R(e.extends), e.mixins && e.mixins.forEach(R);
  }
  if (!c && !m)
    return Me(e) && s.set(e, qn), qn;
  if (le(c))
    for (let R = 0; R < c.length; R++) {
      const C = mn(c[R]);
      Vs(C) && (d[C] = Ce);
    }
  else if (c)
    for (const R in c) {
      const C = mn(R);
      if (Vs(C)) {
        const L = c[R], k = d[C] = le(L) || de(L) ? { type: L } : ot({}, L), j = k.type;
        let q = !1, Re = !0;
        if (le(j))
          for (let we = 0; we < j.length; ++we) {
            const Ee = j[we], Oe = de(Ee) && Ee.name;
            if (Oe === "Boolean") {
              q = !0;
              break;
            } else Oe === "String" && (Re = !1);
          }
        else
          q = de(j) && j.name === "Boolean";
        k[
          0
          /* shouldCast */
        ] = q, k[
          1
          /* shouldCastTrue */
        ] = Re, (q || Te(k, "default")) && p.push(C);
      }
    }
  const A = [d, p];
  return Me(e) && s.set(e, A), A;
}
function Vs(e) {
  return e[0] !== "$" && !_r(e);
}
const Zi = (e) => e[0] === "_" || e === "$stable", es = (e) => le(e) ? e.map(Bt) : [Bt(e)], Ec = (e, n, o) => {
  if (n._n)
    return n;
  const s = Xl((...a) => (ln.NODE_ENV !== "production" && Je && !(o === null && mt) && (o && (o.root, Je.root)), es(n(...a))), o);
  return s._c = !1, s;
}, su = (e, n, o) => {
  const s = e._ctx;
  for (const a in e) {
    if (Zi(a)) continue;
    const c = e[a];
    if (de(c))
      n[a] = Ec(a, c, s);
    else if (c != null) {
      const d = es(c);
      n[a] = () => d;
    }
  }
}, au = (e, n) => {
  const o = es(n);
  e.slots.default = () => o;
}, uu = (e, n, o) => {
  for (const s in n)
    (o || !Zi(s)) && (e[s] = n[s]);
}, Oc = (e, n, o) => {
  const s = e.slots = nu();
  if (e.vnode.shapeFlag & 32) {
    const a = n.__;
    a && Ri(s, "__", a, !0);
    const c = n._;
    c ? (uu(s, n, o), o && Ri(s, "_", c, !0)) : su(n, s);
  } else n && au(e, n);
}, xc = (e, n, o) => {
  const { vnode: s, slots: a } = e;
  let c = !0, d = Ce;
  if (s.shapeFlag & 32) {
    const p = n._;
    p ? o && p === 1 ? c = !1 : uu(a, n, o) : (c = !n.$stable, su(n, a)), d = n;
  } else n && (au(e, n), d = { default: 1 });
  if (c)
    for (const p in a)
      !Zi(p) && d[p] == null && delete a[p];
}, pt = Lc;
function Tc(e) {
  return Rc(e);
}
function Rc(e, n) {
  const o = So();
  o.__VUE__ = !0;
  const {
    insert: s,
    remove: a,
    patchProp: c,
    createElement: d,
    createText: p,
    createComment: m,
    setText: A,
    setElementText: R,
    parentNode: C,
    nextSibling: L,
    setScopeId: k = Rt,
    insertStaticContent: j
  } = e, q = (g, w, B, H = null, U = null, F = null, Q = void 0, X = null, $ = !!w.dynamicChildren) => {
    if (g === w)
      return;
    g && !mr(g, w) && (H = Zt(g), vt(g, U, F, !0), g = null), w.patchFlag === -2 && ($ = !1, w.dynamicChildren = null);
    const { type: K, ref: se, shapeFlag: z } = w;
    switch (K) {
      case Mo:
        Re(g, w, B, H);
        break;
      case yn:
        we(g, w, B, H);
        break;
      case Ei:
        g == null && Ee(w, B, H, Q);
        break;
      case rt:
        At(
          g,
          w,
          B,
          H,
          U,
          F,
          Q,
          X,
          $
        );
        break;
      default:
        z & 1 ? Ie(
          g,
          w,
          B,
          H,
          U,
          F,
          Q,
          X,
          $
        ) : z & 6 ? _t(
          g,
          w,
          B,
          H,
          U,
          F,
          Q,
          X,
          $
        ) : (z & 64 || z & 128) && K.process(
          g,
          w,
          B,
          H,
          U,
          F,
          Q,
          X,
          $,
          en
        );
    }
    se != null && U ? Er(se, g && g.ref, F, w || g, !w) : se == null && g && g.ref != null && Er(g.ref, null, F, g, !0);
  }, Re = (g, w, B, H) => {
    if (g == null)
      s(
        w.el = p(w.children),
        B,
        H
      );
    else {
      const U = w.el = g.el;
      w.children !== g.children && A(U, w.children);
    }
  }, we = (g, w, B, H) => {
    g == null ? s(
      w.el = m(w.children || ""),
      B,
      H
    ) : w.el = g.el;
  }, Ee = (g, w, B, H) => {
    [g.el, g.anchor] = j(
      g.children,
      w,
      B,
      H,
      g.el,
      g.anchor
    );
  }, Oe = ({ el: g, anchor: w }, B, H) => {
    let U;
    for (; g && g !== w; )
      U = L(g), s(g, B, H), g = U;
    s(w, B, H);
  }, ae = ({ el: g, anchor: w }) => {
    let B;
    for (; g && g !== w; )
      B = L(g), a(g), g = B;
    a(w);
  }, Ie = (g, w, B, H, U, F, Q, X, $) => {
    w.type === "svg" ? Q = "svg" : w.type === "math" && (Q = "mathml"), g == null ? Ne(
      w,
      B,
      H,
      U,
      F,
      Q,
      X,
      $
    ) : Cn(
      g,
      w,
      U,
      F,
      Q,
      X,
      $
    );
  }, Ne = (g, w, B, H, U, F, Q, X) => {
    let $, K;
    const { props: se, shapeFlag: z, transition: ie, dirs: ue } = g;
    if ($ = g.el = d(
      g.type,
      F,
      se && se.is,
      se
    ), z & 8 ? R($, g.children) : z & 16 && yt(
      g.children,
      $,
      null,
      H,
      U,
      wi(g, F),
      Q,
      X
    ), ue && Tn(g, null, H, "created"), Se($, g, g.scopeId, Q, H), se) {
      for (const ye in se)
        ye !== "value" && !_r(ye) && c($, ye, null, se[ye], F, H);
      "value" in se && c($, "value", null, se.value, F), (K = se.onVnodeBeforeMount) && kt(K, H, g);
    }
    ue && Tn(g, null, H, "beforeMount");
    const pe = Sc(U, ie);
    pe && ie.beforeEnter($), s($, w, B), ((K = se && se.onVnodeMounted) || pe || ue) && pt(() => {
      K && kt(K, H, g), pe && ie.enter($), ue && Tn(g, null, H, "mounted");
    }, U);
  }, Se = (g, w, B, H, U) => {
    if (B && k(g, B), H)
      for (let F = 0; F < H.length; F++)
        k(g, H[F]);
    if (U) {
      let F = U.subTree;
      if (w === F || hu(F.type) && (F.ssContent === w || F.ssFallback === w)) {
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
  }, yt = (g, w, B, H, U, F, Q, X, $ = 0) => {
    for (let K = $; K < g.length; K++) {
      const se = g[K] = X ? fn(g[K]) : Bt(g[K]);
      q(
        null,
        se,
        w,
        B,
        H,
        U,
        F,
        Q,
        X
      );
    }
  }, Cn = (g, w, B, H, U, F, Q) => {
    const X = w.el = g.el;
    let { patchFlag: $, dynamicChildren: K, dirs: se } = w;
    $ |= g.patchFlag & 16;
    const z = g.props || Ce, ie = w.props || Ce;
    let ue;
    if (B && Rn(B, !1), (ue = ie.onVnodeBeforeUpdate) && kt(ue, B, w, g), se && Tn(w, g, B, "beforeUpdate"), B && Rn(B, !0), (z.innerHTML && ie.innerHTML == null || z.textContent && ie.textContent == null) && R(X, ""), K ? Nt(
      g.dynamicChildren,
      K,
      X,
      B,
      H,
      wi(w, U),
      F
    ) : Q || ge(
      g,
      w,
      X,
      null,
      B,
      H,
      wi(w, U),
      F,
      !1
    ), $ > 0) {
      if ($ & 16)
        Qt(X, z, ie, B, U);
      else if ($ & 2 && z.class !== ie.class && c(X, "class", null, ie.class, U), $ & 4 && c(X, "style", z.style, ie.style, U), $ & 8) {
        const pe = w.dynamicProps;
        for (let ye = 0; ye < pe.length; ye++) {
          const be = pe[ye], Fe = z[be], qe = ie[be];
          (qe !== Fe || be === "value") && c(X, be, Fe, qe, U, B);
        }
      }
      $ & 1 && g.children !== w.children && R(X, w.children);
    } else !Q && K == null && Qt(X, z, ie, B, U);
    ((ue = ie.onVnodeUpdated) || se) && pt(() => {
      ue && kt(ue, B, w, g), se && Tn(w, g, B, "updated");
    }, H);
  }, Nt = (g, w, B, H, U, F, Q) => {
    for (let X = 0; X < w.length; X++) {
      const $ = g[X], K = w[X], se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        $.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        ($.type === rt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !mr($, K) || // - In the case of a component, it could contain anything.
        $.shapeFlag & 198) ? C($.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          B
        )
      );
      q(
        $,
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
  }, Qt = (g, w, B, H, U) => {
    if (w !== B) {
      if (w !== Ce)
        for (const F in w)
          !_r(F) && !(F in B) && c(
            g,
            F,
            w[F],
            null,
            U,
            H
          );
      for (const F in B) {
        if (_r(F)) continue;
        const Q = B[F], X = w[F];
        Q !== X && F !== "value" && c(g, F, X, Q, U, H);
      }
      "value" in B && c(g, "value", w.value, B.value, U);
    }
  }, At = (g, w, B, H, U, F, Q, X, $) => {
    const K = w.el = g ? g.el : p(""), se = w.anchor = g ? g.anchor : p("");
    let { patchFlag: z, dynamicChildren: ie, slotScopeIds: ue } = w;
    ue && (X = X ? X.concat(ue) : ue), g == null ? (s(K, B, H), s(se, B, H), yt(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      w.children || [],
      B,
      se,
      U,
      F,
      Q,
      X,
      $
    )) : z > 0 && z & 64 && ie && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren ? (Nt(
      g.dynamicChildren,
      ie,
      B,
      U,
      F,
      Q,
      X
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (w.key != null || U && w === U.subTree) && lu(
      g,
      w,
      !0
      /* shallow */
    )) : ge(
      g,
      w,
      B,
      se,
      U,
      F,
      Q,
      X,
      $
    );
  }, _t = (g, w, B, H, U, F, Q, X, $) => {
    w.slotScopeIds = X, g == null ? w.shapeFlag & 512 ? U.ctx.activate(
      w,
      B,
      H,
      Q,
      $
    ) : nr(
      w,
      B,
      H,
      U,
      F,
      Q,
      $
    ) : Pn(g, w, $);
  }, nr = (g, w, B, H, U, F, Q) => {
    const X = g.component = Wc(
      g,
      H,
      U
    );
    if (Xa(g) && (X.ctx.renderer = en), $c(X, !1, Q), X.asyncDep) {
      if (U && U.registerDep(X, Ve, Q), !g.el) {
        const $ = X.subTree = It(yn);
        we(null, $, w, B);
      }
    } else
      Ve(
        X,
        g,
        w,
        B,
        U,
        F,
        Q
      );
  }, Pn = (g, w, B) => {
    const H = w.component = g.component;
    if (jc(g, w, B))
      if (H.asyncDep && !H.asyncResolved) {
        De(H, w, B);
        return;
      } else
        H.next = w, H.update();
    else
      w.el = g.el, H.vnode = w;
  }, Ve = (g, w, B, H, U, F, Q) => {
    const X = () => {
      if (g.isMounted) {
        let { next: z, bu: ie, u: ue, parent: pe, vnode: ye } = g;
        {
          const We = cu(g);
          if (We) {
            z && (z.el = ye.el, De(g, z, Q)), We.asyncDep.then(() => {
              g.isUnmounted || X();
            });
            return;
          }
        }
        let be = z, Fe;
        Rn(g, !1), z ? (z.el = ye.el, De(g, z, Q)) : z = ye, ie && co(ie), (Fe = z.props && z.props.onVnodeBeforeUpdate) && kt(Fe, pe, z, ye), Rn(g, !0);
        const qe = qs(g), it = g.subTree;
        g.subTree = qe, q(
          it,
          qe,
          // parent may have changed if it's in a teleport
          C(it.el),
          // anchor may have changed if it's in a fragment
          Zt(it),
          g,
          U,
          F
        ), z.el = qe.el, be === null && Bc(g, qe.el), ue && pt(ue, U), (Fe = z.props && z.props.onVnodeUpdated) && pt(
          () => kt(Fe, pe, z, ye),
          U
        );
      } else {
        let z;
        const { el: ie, props: ue } = w, { bm: pe, m: ye, parent: be, root: Fe, type: qe } = g, it = Or(w);
        Rn(g, !1), pe && co(pe), !it && (z = ue && ue.onVnodeBeforeMount) && kt(z, be, w), Rn(g, !0);
        {
          Fe.ce && // @ts-expect-error _def is private
          Fe.ce._def.shadowRoot !== !1 && Fe.ce._injectChildStyle(qe);
          const We = g.subTree = qs(g);
          q(
            null,
            We,
            B,
            H,
            g,
            U,
            F
          ), w.el = We.el;
        }
        if (ye && pt(ye, U), !it && (z = ue && ue.onVnodeMounted)) {
          const We = w;
          pt(
            () => kt(z, be, We),
            U
          );
        }
        (w.shapeFlag & 256 || be && Or(be.vnode) && be.vnode.shapeFlag & 256) && g.a && pt(g.a, U), g.isMounted = !0, w = B = H = null;
      }
    };
    g.scope.on();
    const $ = g.effect = new Oa(X);
    g.scope.off();
    const K = g.update = $.run.bind($), se = g.job = $.runIfDirty.bind($);
    se.i = g, se.id = g.uid, $.scheduler = () => zi(se), Rn(g, !0), K();
  }, De = (g, w, B) => {
    w.component = g;
    const H = g.vnode.props;
    g.vnode = w, g.next = null, bc(g, w.props, H, B), xc(g, w.children, B), Kt(), Ls(g), Ut();
  }, ge = (g, w, B, H, U, F, Q, X, $ = !1) => {
    const K = g && g.children, se = g ? g.shapeFlag : 0, z = w.children, { patchFlag: ie, shapeFlag: ue } = w;
    if (ie > 0) {
      if (ie & 128) {
        ct(
          K,
          z,
          B,
          H,
          U,
          F,
          Q,
          X,
          $
        );
        return;
      } else if (ie & 256) {
        lt(
          K,
          z,
          B,
          H,
          U,
          F,
          Q,
          X,
          $
        );
        return;
      }
    }
    ue & 8 ? (se & 16 && bt(K, U, F), z !== K && R(B, z)) : se & 16 ? ue & 16 ? ct(
      K,
      z,
      B,
      H,
      U,
      F,
      Q,
      X,
      $
    ) : bt(K, U, F, !0) : (se & 8 && R(B, ""), ue & 16 && yt(
      z,
      B,
      H,
      U,
      F,
      Q,
      X,
      $
    ));
  }, lt = (g, w, B, H, U, F, Q, X, $) => {
    g = g || qn, w = w || qn;
    const K = g.length, se = w.length, z = Math.min(K, se);
    let ie;
    for (ie = 0; ie < z; ie++) {
      const ue = w[ie] = $ ? fn(w[ie]) : Bt(w[ie]);
      q(
        g[ie],
        ue,
        B,
        null,
        U,
        F,
        Q,
        X,
        $
      );
    }
    K > se ? bt(
      g,
      U,
      F,
      !0,
      !1,
      z
    ) : yt(
      w,
      B,
      H,
      U,
      F,
      Q,
      X,
      $,
      z
    );
  }, ct = (g, w, B, H, U, F, Q, X, $) => {
    let K = 0;
    const se = w.length;
    let z = g.length - 1, ie = se - 1;
    for (; K <= z && K <= ie; ) {
      const ue = g[K], pe = w[K] = $ ? fn(w[K]) : Bt(w[K]);
      if (mr(ue, pe))
        q(
          ue,
          pe,
          B,
          null,
          U,
          F,
          Q,
          X,
          $
        );
      else
        break;
      K++;
    }
    for (; K <= z && K <= ie; ) {
      const ue = g[z], pe = w[ie] = $ ? fn(w[ie]) : Bt(w[ie]);
      if (mr(ue, pe))
        q(
          ue,
          pe,
          B,
          null,
          U,
          F,
          Q,
          X,
          $
        );
      else
        break;
      z--, ie--;
    }
    if (K > z) {
      if (K <= ie) {
        const ue = ie + 1, pe = ue < se ? w[ue].el : H;
        for (; K <= ie; )
          q(
            null,
            w[K] = $ ? fn(w[K]) : Bt(w[K]),
            B,
            pe,
            U,
            F,
            Q,
            X,
            $
          ), K++;
      }
    } else if (K > ie)
      for (; K <= z; )
        vt(g[K], U, F, !0), K++;
    else {
      const ue = K, pe = K, ye = /* @__PURE__ */ new Map();
      for (K = pe; K <= ie; K++) {
        const Be = w[K] = $ ? fn(w[K]) : Bt(w[K]);
        Be.key != null && ye.set(Be.key, K);
      }
      let be, Fe = 0;
      const qe = ie - pe + 1;
      let it = !1, We = 0;
      const Ct = new Array(qe);
      for (K = 0; K < qe; K++) Ct[K] = 0;
      for (K = ue; K <= z; K++) {
        const Be = g[K];
        if (Fe >= qe) {
          vt(Be, U, F, !0);
          continue;
        }
        let ne;
        if (Be.key != null)
          ne = ye.get(Be.key);
        else
          for (be = pe; be <= ie; be++)
            if (Ct[be - pe] === 0 && mr(Be, w[be])) {
              ne = be;
              break;
            }
        ne === void 0 ? vt(Be, U, F, !0) : (Ct[ne - pe] = K + 1, ne >= We ? We = ne : it = !0, q(
          Be,
          w[ne],
          B,
          null,
          U,
          F,
          Q,
          X,
          $
        ), Fe++);
      }
      const kn = it ? Ic(Ct) : qn;
      for (be = kn.length - 1, K = qe - 1; K >= 0; K--) {
        const Be = pe + K, ne = w[Be], tn = Be + 1 < se ? w[Be + 1].el : H;
        Ct[K] === 0 ? q(
          null,
          ne,
          B,
          tn,
          U,
          F,
          Q,
          X,
          $
        ) : it && (be < 0 || K !== kn[be] ? Ot(ne, B, tn, 2) : be--);
      }
    }
  }, Ot = (g, w, B, H, U = null) => {
    const { el: F, type: Q, transition: X, children: $, shapeFlag: K } = g;
    if (K & 6) {
      Ot(g.component.subTree, w, B, H);
      return;
    }
    if (K & 128) {
      g.suspense.move(w, B, H);
      return;
    }
    if (K & 64) {
      Q.move(g, w, B, en);
      return;
    }
    if (Q === rt) {
      s(F, w, B);
      for (let z = 0; z < $.length; z++)
        Ot($[z], w, B, H);
      s(g.anchor, w, B);
      return;
    }
    if (Q === Ei) {
      Oe(g, w, B);
      return;
    }
    if (H !== 2 && K & 1 && X)
      if (H === 0)
        X.beforeEnter(F), s(F, w, B), pt(() => X.enter(F), U);
      else {
        const { leave: z, delayLeave: ie, afterLeave: ue } = X, pe = () => {
          g.ctx.isUnmounted ? a(F) : s(F, w, B);
        }, ye = () => {
          z(F, () => {
            pe(), ue && ue();
          });
        };
        ie ? ie(F, pe, ye) : ye();
      }
    else
      s(F, w, B);
  }, vt = (g, w, B, H = !1, U = !1) => {
    const {
      type: F,
      props: Q,
      ref: X,
      children: $,
      dynamicChildren: K,
      shapeFlag: se,
      patchFlag: z,
      dirs: ie,
      cacheIndex: ue
    } = g;
    if (z === -2 && (U = !1), X != null && (Kt(), Er(X, null, B, g, !0), Ut()), ue != null && (w.renderCache[ue] = void 0), se & 256) {
      w.ctx.deactivate(g);
      return;
    }
    const pe = se & 1 && ie, ye = !Or(g);
    let be;
    if (ye && (be = Q && Q.onVnodeBeforeUnmount) && kt(be, w, g), se & 6)
      Dn(g.component, B, H);
    else {
      if (se & 128) {
        g.suspense.unmount(B, H);
        return;
      }
      pe && Tn(g, null, w, "beforeUnmount"), se & 64 ? g.type.remove(
        g,
        w,
        B,
        en,
        H
      ) : K && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !K.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (F !== rt || z > 0 && z & 64) ? bt(
        K,
        w,
        B,
        !1,
        !0
      ) : (F === rt && z & 384 || !U && se & 16) && bt($, w, B), H && Ft(g);
    }
    (ye && (be = Q && Q.onVnodeUnmounted) || pe) && pt(() => {
      be && kt(be, w, g), pe && Tn(g, null, w, "unmounted");
    }, B);
  }, Ft = (g) => {
    const { type: w, el: B, anchor: H, transition: U } = g;
    if (w === rt) {
      Mr(B, H);
      return;
    }
    if (w === Ei) {
      ae(g);
      return;
    }
    const F = () => {
      a(B), U && !U.persisted && U.afterLeave && U.afterLeave();
    };
    if (g.shapeFlag & 1 && U && !U.persisted) {
      const { leave: Q, delayLeave: X } = U, $ = () => Q(B, F);
      X ? X(g.el, F, $) : $();
    } else
      F();
  }, Mr = (g, w) => {
    let B;
    for (; g !== w; )
      B = L(g), a(g), g = B;
    a(w);
  }, Dn = (g, w, B) => {
    const {
      bum: H,
      scope: U,
      job: F,
      subTree: Q,
      um: X,
      m: $,
      a: K,
      parent: se,
      slots: { __: z }
    } = g;
    Gs($), Gs(K), H && co(H), se && le(z) && z.forEach((ie) => {
      se.renderCache[ie] = void 0;
    }), U.stop(), F && (F.flags |= 8, vt(Q, g, w, B)), X && pt(X, w), pt(() => {
      g.isUnmounted = !0;
    }, w), w && w.pendingBranch && !w.isUnmounted && g.asyncDep && !g.asyncResolved && g.suspenseId === w.pendingId && (w.deps--, w.deps === 0 && w.resolve());
  }, bt = (g, w, B, H = !1, U = !1, F = 0) => {
    for (let Q = F; Q < g.length; Q++)
      vt(g[Q], w, B, H, U);
  }, Zt = (g) => {
    if (g.shapeFlag & 6)
      return Zt(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const w = L(g.anchor || g.el), B = w && w[zl];
    return B ? L(B) : w;
  };
  let rr = !1;
  const oe = (g, w, B) => {
    g == null ? w._vnode && vt(w._vnode, null, null, !0) : q(
      w._vnode || null,
      g,
      w,
      null,
      null,
      null,
      B
    ), w._vnode = g, rr || (rr = !0, Ls(), qa(), rr = !1);
  }, en = {
    p: q,
    um: vt,
    m: Ot,
    r: Ft,
    mt: nr,
    mc: yt,
    pc: ge,
    pbc: Nt,
    n: Zt,
    o: e
  };
  return {
    render: oe,
    hydrate: void 0,
    createApp: yc(oe)
  };
}
function wi({ type: e, props: n }, o) {
  return o === "svg" && e === "foreignObject" || o === "mathml" && e === "annotation-xml" && n && n.encoding && n.encoding.includes("html") ? void 0 : o;
}
function Rn({ effect: e, job: n }, o) {
  o ? (e.flags |= 32, n.flags |= 4) : (e.flags &= -33, n.flags &= -5);
}
function Sc(e, n) {
  return (!e || e && !e.pendingBranch) && n && !n.persisted;
}
function lu(e, n, o = !1) {
  const s = e.children, a = n.children;
  if (le(s) && le(a))
    for (let c = 0; c < s.length; c++) {
      const d = s[c];
      let p = a[c];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = a[c] = fn(a[c]), p.el = d.el), !o && p.patchFlag !== -2 && lu(d, p)), p.type === Mo && (p.el = d.el), p.type === yn && !p.el && (p.el = d.el);
    }
}
function Ic(e) {
  const n = e.slice(), o = [0];
  let s, a, c, d, p;
  const m = e.length;
  for (s = 0; s < m; s++) {
    const A = e[s];
    if (A !== 0) {
      if (a = o[o.length - 1], e[a] < A) {
        n[s] = a, o.push(s);
        continue;
      }
      for (c = 0, d = o.length - 1; c < d; )
        p = c + d >> 1, e[o[p]] < A ? c = p + 1 : d = p;
      A < e[o[c]] && (c > 0 && (n[s] = o[c - 1]), o[c] = s);
    }
  }
  for (c = o.length, d = o[c - 1]; c-- > 0; )
    o[c] = d, d = n[d];
  return o;
}
function cu(e) {
  const n = e.subTree.component;
  if (n)
    return n.asyncDep && !n.asyncResolved ? n : cu(n);
}
function Gs(e) {
  if (e)
    for (let n = 0; n < e.length; n++)
      e[n].flags |= 8;
}
const Nc = Symbol.for("v-scx"), Ac = () => fo(Nc);
function hn(e, n, o) {
  return fu(e, n, o);
}
function fu(e, n, o = Ce) {
  const { immediate: s, deep: a, flush: c, once: d } = o, p = ot({}, o), m = n && s || !n && c !== "post";
  let A;
  if (Ar) {
    if (c === "sync") {
      const k = Ac();
      A = k.__watcherHandles || (k.__watcherHandles = []);
    } else if (!m) {
      const k = () => {
      };
      return k.stop = Rt, k.resume = Rt, k.pause = Rt, k;
    }
  }
  const R = Je;
  p.call = (k, j, q) => Ht(k, R, j, q);
  let C = !1;
  c === "post" ? p.scheduler = (k) => {
    pt(k, R && R.suspense);
  } : c !== "sync" && (C = !0, p.scheduler = (k, j) => {
    j ? k() : zi(k);
  }), p.augmentJob = (k) => {
    n && (k.flags |= 4), C && (k.flags |= 2, R && (k.id = R.uid, k.i = R));
  };
  const L = Ul(e, n, p);
  return Ar && (A ? A.push(L) : m && L()), L;
}
function Cc(e, n, o) {
  const s = this.proxy, a = He(e) ? e.includes(".") ? du(s, e) : () => s[e] : e.bind(s, s);
  let c;
  de(n) ? c = n : (c = n.handler, o = n);
  const d = kr(this), p = fu(a, c.bind(s), o);
  return d(), p;
}
function du(e, n) {
  const o = n.split(".");
  return () => {
    let s = e;
    for (let a = 0; a < o.length && s; a++)
      s = s[o[a]];
    return s;
  };
}
const Pc = (e, n) => n === "modelValue" || n === "model-value" ? e.modelModifiers : e[`${n}Modifiers`] || e[`${mn(n)}Modifiers`] || e[`${An(n)}Modifiers`];
function Dc(e, n, ...o) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || Ce;
  let a = o;
  const c = n.startsWith("update:"), d = c && Pc(s, n.slice(7));
  d && (d.trim && (a = o.map((R) => He(R) ? R.trim() : R)), d.number && (a = o.map(go)));
  let p, m = s[p = hi(n)] || // also try camelCase event handler (#2249)
  s[p = hi(mn(n))];
  !m && c && (m = s[p = hi(An(n))]), m && Ht(
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
function pu(e, n, o = !1) {
  const s = n.emitsCache, a = s.get(e);
  if (a !== void 0)
    return a;
  const c = e.emits;
  let d = {}, p = !1;
  if (!de(e)) {
    const m = (A) => {
      const R = pu(A, n, !0);
      R && (p = !0, ot(d, R));
    };
    !o && n.mixins.length && n.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !c && !p ? (Me(e) && s.set(e, null), null) : (le(c) ? c.forEach((m) => d[m] = null) : ot(d, c), Me(e) && s.set(e, d), d);
}
function ko(e, n) {
  return !e || !To(n) ? !1 : (n = n.slice(2).replace(/Once$/, ""), Te(e, n[0].toLowerCase() + n.slice(1)) || Te(e, An(n)) || Te(e, n));
}
function qs(e) {
  const {
    type: n,
    vnode: o,
    proxy: s,
    withProxy: a,
    propsOptions: [c],
    slots: d,
    attrs: p,
    emit: m,
    render: A,
    renderCache: R,
    props: C,
    data: L,
    setupState: k,
    ctx: j,
    inheritAttrs: q
  } = e, Re = bo(e);
  let we, Ee;
  try {
    if (o.shapeFlag & 4) {
      const ae = a || s, Ie = ln.NODE_ENV !== "production" && k.__isScriptSetup ? new Proxy(ae, {
        get(Ne, Se, yt) {
          return Hl(
            `Property '${String(
              Se
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(Ne, Se, yt);
        }
      }) : ae;
      we = Bt(
        A.call(
          Ie,
          ae,
          R,
          ln.NODE_ENV !== "production" ? uo(C) : C,
          k,
          L,
          j
        )
      ), Ee = p;
    } else {
      const ae = n;
      ln.NODE_ENV, we = Bt(
        ae.length > 1 ? ae(
          ln.NODE_ENV !== "production" ? uo(C) : C,
          ln.NODE_ENV !== "production" ? {
            get attrs() {
              return uo(p);
            },
            slots: d,
            emit: m
          } : { attrs: p, slots: d, emit: m }
        ) : ae(
          ln.NODE_ENV !== "production" ? uo(C) : C,
          null
        )
      ), Ee = n.props ? p : kc(p);
    }
  } catch (ae) {
    Tr.length = 0, Co(ae, e, 1), we = It(yn);
  }
  let Oe = we;
  if (Ee && q !== !1) {
    const ae = Object.keys(Ee), { shapeFlag: Ie } = Oe;
    ae.length && Ie & 7 && (c && ae.some(Ki) && (Ee = Mc(
      Ee,
      c
    )), Oe = Qn(Oe, Ee, !1, !0));
  }
  return o.dirs && (Oe = Qn(Oe, null, !1, !0), Oe.dirs = Oe.dirs ? Oe.dirs.concat(o.dirs) : o.dirs), o.transition && Ji(Oe, o.transition), we = Oe, bo(Re), we;
}
const kc = (e) => {
  let n;
  for (const o in e)
    (o === "class" || o === "style" || To(o)) && ((n || (n = {}))[o] = e[o]);
  return n;
}, Mc = (e, n) => {
  const o = {};
  for (const s in e)
    (!Ki(s) || !(s.slice(9) in n)) && (o[s] = e[s]);
  return o;
};
function jc(e, n, o) {
  const { props: s, children: a, component: c } = e, { props: d, children: p, patchFlag: m } = n, A = c.emitsOptions;
  if (n.dirs || n.transition)
    return !0;
  if (o && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? Ws(s, d, A) : !!d;
    if (m & 8) {
      const R = n.dynamicProps;
      for (let C = 0; C < R.length; C++) {
        const L = R[C];
        if (d[L] !== s[L] && !ko(A, L))
          return !0;
      }
    }
  } else
    return (a || p) && (!p || !p.$stable) ? !0 : s === d ? !1 : s ? d ? Ws(s, d, A) : !0 : !!d;
  return !1;
}
function Ws(e, n, o) {
  const s = Object.keys(n);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < s.length; a++) {
    const c = s[a];
    if (n[c] !== e[c] && !ko(o, c))
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
const hu = (e) => e.__isSuspense;
function Lc(e, n) {
  n && n.pendingBranch ? le(e) ? n.effects.push(...e) : n.effects.push(e) : Yl(e);
}
const rt = Symbol.for("v-fgt"), Mo = Symbol.for("v-txt"), yn = Symbol.for("v-cmt"), Ei = Symbol.for("v-stc"), Tr = [];
let gt = null;
function Ge(e = !1) {
  Tr.push(gt = e ? null : []);
}
function Kc() {
  Tr.pop(), gt = Tr[Tr.length - 1] || null;
}
let Nr = 1;
function $s(e, n = !1) {
  Nr += e, e < 0 && gt && n && (gt.hasOnce = !0);
}
function mu(e) {
  return e.dynamicChildren = Nr > 0 ? gt || qn : null, Kc(), Nr > 0 && gt && gt.push(e), e;
}
function Xe(e, n, o, s, a, c) {
  return mu(
    re(
      e,
      n,
      o,
      s,
      a,
      c,
      !0
    )
  );
}
function gu(e, n, o, s, a) {
  return mu(
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
function yu(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function mr(e, n) {
  return e.type === n.type && e.key === n.key;
}
const _u = ({ key: e }) => e ?? null, po = ({
  ref: e,
  ref_key: n,
  ref_for: o
}) => (typeof e == "number" && (e = "" + e), e != null ? He(e) || Qe(e) || de(e) ? { i: mt, r: e, k: n, f: !!o } : e : null);
function re(e, n = null, o = null, s = 0, a = null, c = e === rt ? 0 : 1, d = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: n,
    key: n && _u(n),
    ref: n && po(n),
    scopeId: $a,
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
    shapeFlag: c,
    patchFlag: s,
    dynamicProps: a,
    dynamicChildren: null,
    appContext: null,
    ctx: mt
  };
  return p ? (ts(m, o), c & 128 && e.normalize(m)) : o && (m.shapeFlag |= He(o) ? 8 : 16), Nr > 0 && // avoid a block node from tracking itself
  !d && // has current parent block
  gt && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || c & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && gt.push(m), m;
}
const It = Uc;
function Uc(e, n = null, o = null, s = 0, a = null, c = !1) {
  if ((!e || e === lc) && (e = yn), yu(e)) {
    const p = Qn(
      e,
      n,
      !0
      /* mergeRef: true */
    );
    return o && ts(p, o), Nr > 0 && !c && gt && (p.shapeFlag & 6 ? gt[gt.indexOf(e)] = p : gt.push(p)), p.patchFlag = -2, p;
  }
  if (ef(e) && (e = e.__vccOpts), n) {
    n = Hc(n);
    let { class: p, style: m } = n;
    p && !He(p) && (n.class = Fi(p)), Me(m) && (Xi(m) && !le(m) && (m = ot({}, m)), n.style = xt(m));
  }
  const d = He(e) ? 1 : hu(e) ? 128 : Jl(e) ? 64 : Me(e) ? 4 : de(e) ? 2 : 0;
  return re(
    e,
    n,
    o,
    s,
    a,
    d,
    c,
    !0
  );
}
function Hc(e) {
  return e ? Xi(e) || ru(e) ? ot({}, e) : e : null;
}
function Qn(e, n, o = !1, s = !1) {
  const { props: a, ref: c, patchFlag: d, children: p, transition: m } = e, A = n ? Vc(a || {}, n) : a, R = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: A,
    key: A && _u(A),
    ref: n && n.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      o && c ? le(c) ? c.concat(po(n)) : [c, po(n)] : po(n)
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
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && s && Ji(
    R,
    m.clone(R)
  ), R;
}
function vu(e = " ", n = 0) {
  return It(Mo, null, e, n);
}
function Fc(e = "", n = !1) {
  return n ? (Ge(), gu(yn, null, e)) : It(yn, null, e);
}
function Bt(e) {
  return e == null || typeof e == "boolean" ? It(yn) : le(e) ? It(
    rt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : yu(e) ? fn(e) : It(Mo, null, String(e));
}
function fn(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qn(e);
}
function ts(e, n) {
  let o = 0;
  const { shapeFlag: s } = e;
  if (n == null)
    n = null;
  else if (le(n))
    o = 16;
  else if (typeof n == "object")
    if (s & 65) {
      const a = n.default;
      a && (a._c && (a._d = !1), ts(e, a()), a._c && (a._d = !0));
      return;
    } else {
      o = 32;
      const a = n._;
      !a && !ru(n) ? n._ctx = mt : a === 3 && mt && (mt.slots._ === 1 ? n._ = 1 : (n._ = 2, e.patchFlag |= 1024));
    }
  else de(n) ? (n = { default: n, _ctx: mt }, o = 32) : (n = String(n), s & 64 ? (o = 16, n = [vu(n)]) : o = 8);
  e.children = n, e.shapeFlag |= o;
}
function Vc(...e) {
  const n = {};
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    for (const a in s)
      if (a === "class")
        n.class !== s.class && (n.class = Fi([n.class, s.class]));
      else if (a === "style")
        n.style = xt([n.style, s.style]);
      else if (To(a)) {
        const c = n[a], d = s[a];
        d && c !== d && !(le(c) && c.includes(d)) && (n[a] = c ? [].concat(c, d) : d);
      } else a !== "" && (n[a] = s[a]);
  }
  return n;
}
function kt(e, n, o, s = null) {
  Ht(e, n, 7, [
    o,
    s
  ]);
}
const Gc = eu();
let qc = 0;
function Wc(e, n, o) {
  const s = e.type, a = (n ? n.appContext : e.appContext) || Gc, c = {
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
    propsOptions: iu(s, a),
    emitsOptions: pu(s, a),
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
  return c.ctx = { _: c }, c.root = n ? n.root : c, c.emit = Dc.bind(null, c), e.ce && e.ce(c), c;
}
let Je = null, Eo, Mi;
{
  const e = So(), n = (o, s) => {
    let a;
    return (a = e[o]) || (a = e[o] = []), a.push(s), (c) => {
      a.length > 1 ? a.forEach((d) => d(c)) : a[0](c);
    };
  };
  Eo = n(
    "__VUE_INSTANCE_SETTERS__",
    (o) => Je = o
  ), Mi = n(
    "__VUE_SSR_SETTERS__",
    (o) => Ar = o
  );
}
const kr = (e) => {
  const n = Je;
  return Eo(e), e.scope.on(), () => {
    e.scope.off(), Eo(n);
  };
}, Ys = () => {
  Je && Je.scope.off(), Eo(null);
};
function bu(e) {
  return e.vnode.shapeFlag & 4;
}
let Ar = !1;
function $c(e, n = !1, o = !1) {
  n && Mi(n);
  const { props: s, children: a } = e.vnode, c = bu(e);
  vc(e, s, c, n), Oc(e, a, o || n);
  const d = c ? Yc(e, n) : void 0;
  return n && Mi(!1), d;
}
function Yc(e, n) {
  const o = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, cc);
  const { setup: s } = o;
  if (s) {
    Kt();
    const a = e.setupContext = s.length > 1 ? zc(e) : null, c = kr(e), d = tr(
      s,
      e,
      0,
      [
        e.props,
        a
      ]
    ), p = ga(d);
    if (Ut(), c(), (p || e.sp) && !Or(e) && Ya(e), p) {
      if (d.then(Ys, Ys), n)
        return d.then((m) => {
          Xs(e, m);
        }).catch((m) => {
          Co(m, e, 0);
        });
      e.asyncDep = d;
    } else
      Xs(e, d);
  } else
    wu(e);
}
function Xs(e, n, o) {
  de(n) ? e.type.__ssrInlineRender ? e.ssrRender = n : e.render = n : Me(n) && (e.setupState = Ua(n)), wu(e);
}
function wu(e, n, o) {
  const s = e.type;
  e.render || (e.render = s.render || Rt);
  {
    const a = kr(e);
    Kt();
    try {
      fc(e);
    } finally {
      Ut(), a();
    }
  }
}
const Xc = {
  get(e, n) {
    return nt(e, "get", ""), e[n];
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
function jo(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ua(Dl(e.exposed)), {
    get(n, o) {
      if (o in n)
        return n[o];
      if (o in xr)
        return xr[o](e);
    },
    has(n, o) {
      return o in n || o in xr;
    }
  })) : e.proxy;
}
const Jc = /(?:^|[-_])(\w)/g, Qc = (e) => e.replace(Jc, (n) => n.toUpperCase()).replace(/[-_]/g, "");
function Zc(e, n = !0) {
  return de(e) ? e.displayName || e.name : e.name || n && e.__name;
}
function Eu(e, n, o = !1) {
  let s = Zc(n);
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
  return s ? Qc(s) : o ? "App" : "Anonymous";
}
function ef(e) {
  return de(e) && "__vccOpts" in e;
}
const Jn = (e, n) => Ll(e, n, Ar), tf = "3.5.17";
let ji;
const zs = typeof window < "u" && window.trustedTypes;
if (zs)
  try {
    ji = /* @__PURE__ */ zs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ou = ji ? (e) => ji.createHTML(e) : (e) => e, nf = "http://www.w3.org/2000/svg", rf = "http://www.w3.org/1998/Math/MathML", $t = typeof document < "u" ? document : null, Js = $t && /* @__PURE__ */ $t.createElement("template"), of = {
  insert: (e, n, o) => {
    n.insertBefore(e, o || null);
  },
  remove: (e) => {
    const n = e.parentNode;
    n && n.removeChild(e);
  },
  createElement: (e, n, o, s) => {
    const a = n === "svg" ? $t.createElementNS(nf, e) : n === "mathml" ? $t.createElementNS(rf, e) : o ? $t.createElement(e, { is: o }) : $t.createElement(e);
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
  insertStaticContent(e, n, o, s, a, c) {
    const d = o ? o.previousSibling : n.lastChild;
    if (a && (a === c || a.nextSibling))
      for (; n.insertBefore(a.cloneNode(!0), o), !(a === c || !(a = a.nextSibling)); )
        ;
    else {
      Js.innerHTML = Ou(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const p = Js.content;
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
const Qs = Symbol("_vod"), uf = Symbol("_vsh"), lf = Symbol(""), cf = /(^|;)\s*display\s*:/;
function ff(e, n, o) {
  const s = e.style, a = He(o);
  let c = !1;
  if (o && !a) {
    if (n)
      if (He(n))
        for (const d of n.split(";")) {
          const p = d.slice(0, d.indexOf(":")).trim();
          o[p] == null && ho(s, p, "");
        }
      else
        for (const d in n)
          o[d] == null && ho(s, d, "");
    for (const d in o)
      d === "display" && (c = !0), ho(s, d, o[d]);
  } else if (a) {
    if (n !== o) {
      const d = s[lf];
      d && (o += ";" + d), s.cssText = o, c = cf.test(o);
    }
  } else n && e.removeAttribute("style");
  Qs in e && (e[Qs] = c ? s.display : "", e[uf] && (s.display = "none"));
}
const Zs = /\s*!important$/;
function ho(e, n, o) {
  if (le(o))
    o.forEach((s) => ho(e, n, s));
  else if (o == null && (o = ""), n.startsWith("--"))
    e.setProperty(n, o);
  else {
    const s = df(e, n);
    Zs.test(o) ? e.setProperty(
      An(s),
      o.replace(Zs, ""),
      "important"
    ) : e[s] = o;
  }
}
const ea = ["Webkit", "Moz", "ms"], Oi = {};
function df(e, n) {
  const o = Oi[n];
  if (o)
    return o;
  let s = mn(n);
  if (s !== "filter" && s in e)
    return Oi[n] = s;
  s = va(s);
  for (let a = 0; a < ea.length; a++) {
    const c = ea[a] + s;
    if (c in e)
      return Oi[n] = c;
  }
  return n;
}
const ta = "http://www.w3.org/1999/xlink";
function na(e, n, o, s, a, c = ll(n)) {
  s && n.startsWith("xlink:") ? o == null ? e.removeAttributeNS(ta, n.slice(6, n.length)) : e.setAttributeNS(ta, n, o) : o == null || c && !ba(o) ? e.removeAttribute(n) : e.setAttribute(
    n,
    c ? "" : Lt(o) ? String(o) : o
  );
}
function ra(e, n, o, s, a) {
  if (n === "innerHTML" || n === "textContent") {
    o != null && (e[n] = n === "innerHTML" ? Ou(o) : o);
    return;
  }
  const c = e.tagName;
  if (n === "value" && c !== "PROGRESS" && // custom elements may use _value internally
  !c.includes("-")) {
    const p = c === "OPTION" ? e.getAttribute("value") || "" : e.value, m = o == null ? (
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
    p === "boolean" ? o = ba(o) : o == null && p === "string" ? (o = "", d = !0) : p === "number" && (o = 0, d = !0);
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
const oa = Symbol("_vei");
function hf(e, n, o, s, a = null) {
  const c = e[oa] || (e[oa] = {}), d = c[n];
  if (s && d)
    d.value = s;
  else {
    const [p, m] = mf(n);
    if (s) {
      const A = c[n] = _f(
        s,
        a
      );
      dn(e, p, A, m);
    } else d && (pf(e, p, d, m), c[n] = void 0);
  }
}
const ia = /(?:Once|Passive|Capture)$/;
function mf(e) {
  let n;
  if (ia.test(e)) {
    n = {};
    let s;
    for (; s = e.match(ia); )
      e = e.slice(0, e.length - s[0].length), n[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : An(e.slice(2)), n];
}
let xi = 0;
const gf = /* @__PURE__ */ Promise.resolve(), yf = () => xi || (gf.then(() => xi = 0), xi = Date.now());
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
const sa = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, bf = (e, n, o, s, a, c) => {
  const d = a === "svg";
  n === "class" ? af(e, s, d) : n === "style" ? ff(e, o, s) : To(n) ? Ki(n) || hf(e, n, o, s, c) : (n[0] === "." ? (n = n.slice(1), !0) : n[0] === "^" ? (n = n.slice(1), !1) : wf(e, n, s, d)) ? (ra(e, n, s), !e.tagName.includes("-") && (n === "value" || n === "checked" || n === "selected") && na(e, n, s, d, c, n !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(n) || !He(s)) ? ra(e, mn(n), s, c, n) : (n === "true-value" ? e._trueValue = s : n === "false-value" && (e._falseValue = s), na(e, n, s, d));
};
function wf(e, n, o, s) {
  if (s)
    return !!(n === "innerHTML" || n === "textContent" || n in e && sa(n) && de(o));
  if (n === "spellcheck" || n === "draggable" || n === "translate" || n === "autocorrect" || n === "form" || n === "list" && e.tagName === "INPUT" || n === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (n === "width" || n === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return sa(n) && He(o) ? !1 : n in e;
}
const Zn = (e) => {
  const n = e.props["onUpdate:modelValue"] || !1;
  return le(n) ? (o) => co(n, o) : n;
};
function Ef(e) {
  e.target.composing = !0;
}
function aa(e) {
  const n = e.target;
  n.composing && (n.composing = !1, n.dispatchEvent(new Event("input")));
}
const zt = Symbol("_assign"), ua = {
  created(e, { modifiers: { lazy: n, trim: o, number: s } }, a) {
    e[zt] = Zn(a);
    const c = s || a.props && a.props.type === "number";
    dn(e, n ? "change" : "input", (d) => {
      if (d.target.composing) return;
      let p = e.value;
      o && (p = p.trim()), c && (p = go(p)), e[zt](p);
    }), o && dn(e, "change", () => {
      e.value = e.value.trim();
    }), n || (dn(e, "compositionstart", Ef), dn(e, "compositionend", aa), dn(e, "change", aa));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: n }) {
    e.value = n ?? "";
  },
  beforeUpdate(e, { value: n, oldValue: o, modifiers: { lazy: s, trim: a, number: c } }, d) {
    if (e[zt] = Zn(d), e.composing) return;
    const p = (c || e.type === "number") && !/^0\d/.test(e.value) ? go(e.value) : e.value, m = n ?? "";
    p !== m && (document.activeElement === e && e.type !== "range" && (s && n === o || a && e.value.trim() === m) || (e.value = m));
  }
}, la = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, n, o) {
    e[zt] = Zn(o), dn(e, "change", () => {
      const s = e._modelValue, a = Cr(e), c = e.checked, d = e[zt];
      if (le(s)) {
        const p = Vi(s, a), m = p !== -1;
        if (c && !m)
          d(s.concat(a));
        else if (!c && m) {
          const A = [...s];
          A.splice(p, 1), d(A);
        }
      } else if (er(s)) {
        const p = new Set(s);
        c ? p.add(a) : p.delete(a), d(p);
      } else
        d(xu(e, c));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: ca,
  beforeUpdate(e, n, o) {
    e[zt] = Zn(o), ca(e, n, o);
  }
};
function ca(e, { value: n, oldValue: o }, s) {
  e._modelValue = n;
  let a;
  if (le(n))
    a = Vi(n, s.props.value) > -1;
  else if (er(n))
    a = n.has(s.props.value);
  else {
    if (n === o) return;
    a = Dr(n, xu(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const gr = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: n, modifiers: { number: o } }, s) {
    const a = er(n);
    dn(e, "change", () => {
      const c = Array.prototype.filter.call(e.options, (d) => d.selected).map(
        (d) => o ? go(Cr(d)) : Cr(d)
      );
      e[zt](
        e.multiple ? a ? new Set(c) : c : c[0]
      ), e._assigning = !0, Va(() => {
        e._assigning = !1;
      });
    }), e[zt] = Zn(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: n }) {
    fa(e, n);
  },
  beforeUpdate(e, n, o) {
    e[zt] = Zn(o);
  },
  updated(e, { value: n }) {
    e._assigning || fa(e, n);
  }
};
function fa(e, n) {
  const o = e.multiple, s = le(n);
  if (!(o && !s && !er(n))) {
    for (let a = 0, c = e.options.length; a < c; a++) {
      const d = e.options[a], p = Cr(d);
      if (o)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? d.selected = n.some((A) => String(A) === String(p)) : d.selected = Vi(n, p) > -1;
        } else
          d.selected = n.has(p);
      else if (Dr(Cr(d), n)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !o && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Cr(e) {
  return "_value" in e ? e._value : e.value;
}
function xu(e, n) {
  const o = n ? "_trueValue" : "_falseValue";
  return o in e ? e[o] : n;
}
const Of = /* @__PURE__ */ ot({ patchProp: bf }, of);
let da;
function xf() {
  return da || (da = Tc(Of));
}
const Tf = (...e) => {
  const n = xf().createApp(...e), { mount: o } = n;
  return n.mount = (s) => {
    const a = Sf(s);
    if (!a) return;
    const c = n._component;
    !de(c) && !c.render && !c.template && (c.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
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
  return He(e) ? document.querySelector(e) : e;
}
var If = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nf(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var mo = { exports: {} }, Af = mo.exports, pa;
function Cf() {
  return pa || (pa = 1, function(e, n) {
    (function(o, s) {
      e.exports = s();
    })(Af, function() {
      var o = function(t, r) {
        return (o = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, u) {
          i.__proto__ = u;
        } || function(i, u) {
          for (var l in u) Object.prototype.hasOwnProperty.call(u, l) && (i[l] = u[l]);
        })(t, r);
      }, s = function() {
        return (s = Object.assign || function(t) {
          for (var r, i = 1, u = arguments.length; i < u; i++) for (var l in r = arguments[i]) Object.prototype.hasOwnProperty.call(r, l) && (t[l] = r[l]);
          return t;
        }).apply(this, arguments);
      };
      function a(t, r, i) {
        for (var u, l = 0, f = r.length; l < f; l++) !u && l in r || ((u = u || Array.prototype.slice.call(r, 0, l))[l] = r[l]);
        return t.concat(u || Array.prototype.slice.call(r));
      }
      var c = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : If, d = Object.keys, p = Array.isArray;
      function m(t, r) {
        return typeof r != "object" || d(r).forEach(function(i) {
          t[i] = r[i];
        }), t;
      }
      typeof Promise > "u" || c.Promise || (c.Promise = Promise);
      var A = Object.getPrototypeOf, R = {}.hasOwnProperty;
      function C(t, r) {
        return R.call(t, r);
      }
      function L(t, r) {
        typeof r == "function" && (r = r(A(t))), (typeof Reflect > "u" ? d : Reflect.ownKeys)(r).forEach(function(i) {
          j(t, i, r[i]);
        });
      }
      var k = Object.defineProperty;
      function j(t, r, i, u) {
        k(t, r, m(i && C(i, "get") && typeof i.get == "function" ? { get: i.get, set: i.set, configurable: !0 } : { value: i, configurable: !0, writable: !0 }, u));
      }
      function q(t) {
        return { from: function(r) {
          return t.prototype = Object.create(r.prototype), j(t.prototype, "constructor", t), { extend: L.bind(null, t.prototype) };
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
        c.setImmediate ? setImmediate(t) : setTimeout(t, 0);
      }
      function Ne(t, r) {
        if (typeof r == "string" && C(t, r)) return t[r];
        if (!r) return t;
        if (typeof r != "string") {
          for (var i = [], u = 0, l = r.length; u < l; ++u) {
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
          for (var u = 0, l = r.length; u < l; ++u) Se(t, r[u], i[u]);
        } else {
          var f, h, y = r.indexOf(".");
          y !== -1 ? (f = r.substr(0, y), (h = r.substr(y + 1)) === "" ? i === void 0 ? p(t) && !isNaN(parseInt(f)) ? t.splice(f, 1) : delete t[f] : t[f] = i : Se(y = !(y = t[f]) || !C(t, f) ? t[f] = {} : y, h, i)) : i === void 0 ? p(t) && !isNaN(parseInt(r)) ? t.splice(r, 1) : delete t[r] : t[r] = i;
        }
      }
      function yt(t) {
        var r, i = {};
        for (r in t) C(t, r) && (i[r] = t[r]);
        return i;
      }
      var Cn = [].concat;
      function Nt(t) {
        return Cn.apply([], t);
      }
      var pe = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Nt([8, 16, 32, 64].map(function(t) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + t + "Array";
        });
      }))).filter(function(t) {
        return c[t];
      }), Qt = new Set(pe.map(function(t) {
        return c[t];
      })), At = null;
      function _t(t) {
        return At = /* @__PURE__ */ new WeakMap(), t = function r(i) {
          if (!i || typeof i != "object") return i;
          var u = At.get(i);
          if (u) return u;
          if (p(i)) {
            u = [], At.set(i, u);
            for (var l = 0, f = i.length; l < f; ++l) u.push(r(i[l]));
          } else if (Qt.has(i.constructor)) u = i;
          else {
            var h, y = A(i);
            for (h in u = y === Object.prototype ? {} : Object.create(y), At.set(i, u), i) C(i, h) && (u[h] = r(i[h]));
          }
          return u;
        }(t), At = null, t;
      }
      var nr = {}.toString;
      function Pn(t) {
        return nr.call(t).slice(8, -1);
      }
      var Ve = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", De = typeof Ve == "symbol" ? function(t) {
        var r;
        return t != null && (r = t[Ve]) && r.apply(t);
      } : function() {
        return null;
      };
      function ge(t, r) {
        return r = t.indexOf(r), 0 <= r && t.splice(r, 1), 0 <= r;
      }
      var lt = {};
      function ct(t) {
        var r, i, u, l;
        if (arguments.length === 1) {
          if (p(t)) return t.slice();
          if (this === lt && typeof t == "string") return [t];
          if (l = De(t)) {
            for (i = []; !(u = l.next()).done; ) i.push(u.value);
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
      var Ot = typeof Symbol < "u" ? function(t) {
        return t[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, ue = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], wt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ue), vt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(t, r) {
        this.name = t, this.message = r;
      }
      function Mr(t, r) {
        return t + ". Errors: " + Object.keys(r).map(function(i) {
          return r[i].toString();
        }).filter(function(i, u, l) {
          return l.indexOf(i) === u;
        }).join(`
`);
      }
      function Dn(t, r, i, u) {
        this.failures = r, this.failedKeys = u, this.successCount = i, this.message = Mr(t, r);
      }
      function bt(t, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(i) {
          return r[i];
        }), this.failuresByPos = r, this.message = Mr(t, this.failures);
      }
      q(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), q(Dn).from(Ft), q(bt).from(Ft);
      var Zt = wt.reduce(function(t, r) {
        return t[r] = r + "Error", t;
      }, {}), rr = Ft, oe = wt.reduce(function(t, r) {
        var i = r + "Error";
        function u(l, f) {
          this.name = i, l ? typeof l == "string" ? (this.message = "".concat(l).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = vt[r] || i, this.inner = null);
        }
        return q(u).from(rr), t[r] = u, t;
      }, {});
      oe.Syntax = SyntaxError, oe.Type = TypeError, oe.Range = RangeError;
      var en = ue.reduce(function(t, r) {
        return t[r + "Error"] = oe[r], t;
      }, {}), or = wt.reduce(function(t, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (t[r + "Error"] = oe[r]), t;
      }, {});
      function g() {
      }
      function w(t) {
        return t;
      }
      function B(t, r) {
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
          var u = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? H(u, this.onsuccess) : u), l && (this.onerror = this.onerror ? H(l, this.onerror) : l), f !== void 0 ? f : i;
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
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, i = r.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? H(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? H(f, this.onerror) : f), u === void 0 ? i === void 0 ? void 0 : i : m(u, i);
        };
      }
      function X(t, r) {
        return t === g ? r : function() {
          return r.apply(this, arguments) !== !1 && t.apply(this, arguments);
        };
      }
      function $(t, r) {
        return t === g ? r : function() {
          var i = t.apply(this, arguments);
          if (i && typeof i.then == "function") {
            for (var u = this, l = arguments.length, f = new Array(l); l--; ) f[l] = arguments[l];
            return i.then(function() {
              return r.apply(u, f);
            });
          }
          return r.apply(this, arguments);
        };
      }
      or.ModifyError = Dn, or.DexieError = Ft, or.BulkError = bt;
      var K = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function se(t) {
        K = t;
      }
      var z = {}, ie = 100, pe = typeof Promise > "u" ? [] : function() {
        var t = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [t, A(t), t];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, A(r), t];
      }(), ue = pe[0], wt = pe[1], pe = pe[2], wt = wt && wt.then, ye = ue && ue.constructor, be = !!pe, Fe = function(t, r) {
        tn.push([t, r]), it && (queueMicrotask(Nu), it = !1);
      }, qe = !0, it = !0, We = [], Ct = [], kn = w, Be = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: g, pgp: !1, env: {}, finalize: g }, ne = Be, tn = [], _n = 0, jr = [];
      function ee(t) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = ne;
        if (typeof t != "function") {
          if (t !== z) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Lo(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function i(u, l) {
          try {
            l(function(f) {
              if (u._state === null) {
                if (f === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && Mn();
                f && typeof f.then == "function" ? i(u, function(y, v) {
                  f instanceof ee ? f._then(y, v) : f.then(y, v);
                }) : (u._state = !0, u._value = f, rs(u)), h && jn();
              }
            }, Lo.bind(null, u));
          } catch (f) {
            Lo(u, f);
          }
        }(this, t);
      }
      var Bo = { get: function() {
        var t = ne, r = Ur;
        function i(u, l) {
          var f = this, h = !t.global && (t !== ne || r !== Ur), y = h && !rn(), v = new ee(function(E, x) {
            Ko(f, new ns(is(u, t, h, y), is(l, t, h, y), E, x, t));
          });
          return this._consoleTask && (v._consoleTask = this._consoleTask), v;
        }
        return i.prototype = z, i;
      }, set: function(t) {
        j(this, "then", t && t.prototype === z ? Bo : { get: function() {
          return t;
        }, set: Bo.set });
      } };
      function ns(t, r, i, u, l) {
        this.onFulfilled = typeof t == "function" ? t : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = i, this.reject = u, this.psd = l;
      }
      function Lo(t, r) {
        var i, u;
        Ct.push(r), t._state === null && (i = t._lib && Mn(), r = kn(r), t._state = !1, t._value = r, u = t, We.some(function(l) {
          return l._value === u._value;
        }) || We.push(u), rs(t), i && jn());
      }
      function rs(t) {
        var r = t._listeners;
        t._listeners = [];
        for (var i = 0, u = r.length; i < u; ++i) Ko(t, r[i]);
        var l = t._PSD;
        --l.ref || l.finalize(), _n === 0 && (++_n, Fe(function() {
          --_n == 0 && Uo();
        }, []));
      }
      function Ko(t, r) {
        if (t._state !== null) {
          var i = t._state ? r.onFulfilled : r.onRejected;
          if (i === null) return (t._state ? r.resolve : r.reject)(t._value);
          ++r.psd.ref, ++_n, Fe(Iu, [i, t, r]);
        } else t._listeners.push(r);
      }
      function Iu(t, r, i) {
        try {
          var u, l = r._value;
          !r._state && Ct.length && (Ct = []), u = K && r._consoleTask ? r._consoleTask.run(function() {
            return t(l);
          }) : t(l), r._state || Ct.indexOf(l) !== -1 || function(f) {
            for (var h = We.length; h; ) if (We[--h]._value === f._value) return We.splice(h, 1);
          }(r), i.resolve(u);
        } catch (f) {
          i.reject(f);
        } finally {
          --_n == 0 && Uo(), --i.psd.ref || i.psd.finalize();
        }
      }
      function Nu() {
        vn(Be, function() {
          Mn() && jn();
        });
      }
      function Mn() {
        var t = qe;
        return it = qe = !1, t;
      }
      function jn() {
        var t, r, i;
        do
          for (; 0 < tn.length; ) for (t = tn, tn = [], i = t.length, r = 0; r < i; ++r) {
            var u = t[r];
            u[0].apply(null, u[1]);
          }
        while (0 < tn.length);
        it = qe = !0;
      }
      function Uo() {
        var t = We;
        We = [], t.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = jr.slice(0), i = r.length; i; ) r[--i]();
      }
      function Br(t) {
        return new ee(z, !1, t);
      }
      function je(t, r) {
        var i = ne;
        return function() {
          var u = Mn(), l = ne;
          try {
            return on(i, !0), t.apply(this, arguments);
          } catch (f) {
            r && r(f);
          } finally {
            on(l, !1), u && jn();
          }
        };
      }
      L(ee.prototype, { then: Bo, _then: function(t, r) {
        Ko(this, new ns(null, null, t, r, ne));
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
        return t < 1 / 0 ? new ee(function(u, l) {
          var f = setTimeout(function() {
            return l(new oe.Timeout(r));
          }, t);
          i.then(u, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && j(ee.prototype, Symbol.toStringTag, "Dexie.Promise"), Be.env = os(), L(ee, { all: function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r, i) {
          t.length === 0 && r([]);
          var u = t.length;
          t.forEach(function(l, f) {
            return ee.resolve(l).then(function(h) {
              t[f] = h, --u || r(t);
            }, i);
          });
        });
      }, resolve: function(t) {
        return t instanceof ee ? t : t && typeof t.then == "function" ? new ee(function(r, i) {
          t.then(r, i);
        }) : new ee(z, !0, t);
      }, reject: Br, race: function() {
        var t = ct.apply(null, arguments).map(Hr);
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
        return Ur;
      } }, newPSD: nn, usePSD: vn, scheduler: { get: function() {
        return Fe;
      }, set: function(t) {
        Fe = t;
      } }, rejectionMapper: { get: function() {
        return kn;
      }, set: function(t) {
        kn = t;
      } }, follow: function(t, r) {
        return new ee(function(i, u) {
          return nn(function(l, f) {
            var h = ne;
            h.unhandleds = [], h.onunhandled = f, h.finalize = H(function() {
              var y, v = this;
              y = function() {
                v.unhandleds.length === 0 ? l() : f(v.unhandleds[0]);
              }, jr.push(function E() {
                y(), jr.splice(jr.indexOf(E), 1);
              }), ++_n, Fe(function() {
                --_n == 0 && Uo();
              }, []);
            }, h.finalize), t();
          }, r, i, u);
        });
      } }), ye && (ye.allSettled && j(ee, "allSettled", function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r) {
          t.length === 0 && r([]);
          var i = t.length, u = new Array(i);
          t.forEach(function(l, f) {
            return ee.resolve(l).then(function(h) {
              return u[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --i || r(u);
            });
          });
        });
      }), ye.any && typeof AggregateError < "u" && j(ee, "any", function() {
        var t = ct.apply(null, arguments).map(Hr);
        return new ee(function(r, i) {
          t.length === 0 && i(new AggregateError([]));
          var u = t.length, l = new Array(u);
          t.forEach(function(f, h) {
            return ee.resolve(f).then(function(y) {
              return r(y);
            }, function(y) {
              l[h] = y, --u || i(new AggregateError(l));
            });
          });
        });
      }), ye.withResolvers && (ee.withResolvers = ye.withResolvers));
      var $e = { awaits: 0, echoes: 0, id: 0 }, Au = 0, Lr = [], Kr = 0, Ur = 0, Cu = 0;
      function nn(t, r, i, u) {
        var l = ne, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++Cu, Be.env, f.env = be ? { Promise: ee, PromiseProp: { value: ee, configurable: !0, writable: !0 }, all: ee.all, race: ee.race, allSettled: ee.allSettled, any: ee.any, resolve: ee.resolve, reject: ee.reject } : {}, r && m(f, r), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = vn(f, t, i, u), f.ref === 0 && f.finalize(), u;
      }
      function Bn() {
        return $e.id || ($e.id = ++Au), ++$e.awaits, $e.echoes += ie, $e.id;
      }
      function rn() {
        return !!$e.awaits && (--$e.awaits == 0 && ($e.id = 0), $e.echoes = $e.awaits * ie, !0);
      }
      function Hr(t) {
        return $e.echoes && t && t.constructor === ye ? (Bn(), t.then(function(r) {
          return rn(), r;
        }, function(r) {
          return rn(), Ke(r);
        })) : t;
      }
      function Pu() {
        var t = Lr[Lr.length - 1];
        Lr.pop(), on(t, !1);
      }
      function on(t, r) {
        var i, u = ne;
        (r ? !$e.echoes || Kr++ && t === ne : !Kr || --Kr && t === ne) || queueMicrotask(r ? (function(l) {
          ++Ur, $e.echoes && --$e.echoes != 0 || ($e.echoes = $e.awaits = $e.id = 0), Lr.push(ne), on(l, !0);
        }).bind(null, t) : Pu), t !== ne && (ne = t, u === Be && (Be.env = os()), be && (i = Be.env.Promise, r = t.env, (u.global || t.global) && (Object.defineProperty(c, "Promise", r.PromiseProp), i.all = r.all, i.race = r.race, i.resolve = r.resolve, i.reject = r.reject, r.allSettled && (i.allSettled = r.allSettled), r.any && (i.any = r.any))));
      }
      function os() {
        var t = c.Promise;
        return be ? { Promise: t, PromiseProp: Object.getOwnPropertyDescriptor(c, "Promise"), all: t.all, race: t.race, allSettled: t.allSettled, any: t.any, resolve: t.resolve, reject: t.reject } : {};
      }
      function vn(t, r, i, u, l) {
        var f = ne;
        try {
          return on(t, !0), r(i, u, l);
        } finally {
          on(f, !1);
        }
      }
      function is(t, r, i, u) {
        return typeof t != "function" ? t : function() {
          var l = ne;
          i && Bn(), on(r, !0);
          try {
            return t.apply(this, arguments);
          } finally {
            on(l, !1), u && queueMicrotask(rn);
          }
        };
      }
      function Ho(t) {
        Promise === ye && $e.echoes === 0 ? Kr === 0 ? t() : enqueueNativeMicroTask(t) : setTimeout(t, 0);
      }
      ("" + wt).indexOf("[native code]") === -1 && (Bn = rn = g);
      var Ke = ee.reject, bn = "￿", Vt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ss = "String expected.", Ln = [], Fr = "__dbnames", Fo = "readonly", Vo = "readwrite";
      function wn(t, r) {
        return t ? r ? function() {
          return t.apply(this, arguments) && r.apply(this, arguments);
        } : t : r;
      }
      var as = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Vr(t) {
        return typeof t != "string" || /\./.test(t) ? function(r) {
          return r;
        } : function(r) {
          return r[t] === void 0 && t in r && delete (r = _t(r))[t], r;
        };
      }
      function us() {
        throw oe.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function me(t, r) {
        try {
          var i = ls(t), u = ls(r);
          if (i !== u) return i === "Array" ? 1 : u === "Array" ? -1 : i === "binary" ? 1 : u === "binary" ? -1 : i === "string" ? 1 : u === "string" ? -1 : i === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (i) {
            case "number":
            case "Date":
            case "string":
              return r < t ? 1 : t < r ? -1 : 0;
            case "binary":
              return function(l, f) {
                for (var h = l.length, y = f.length, v = h < y ? h : y, E = 0; E < v; ++E) if (l[E] !== f[E]) return l[E] < f[E] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              }(cs(t), cs(r));
            case "Array":
              return function(l, f) {
                for (var h = l.length, y = f.length, v = h < y ? h : y, E = 0; E < v; ++E) {
                  var x = me(l[E], f[E]);
                  if (x !== 0) return x;
                }
                return h === y ? 0 : h < y ? -1 : 1;
              }(t, r);
          }
        } catch {
        }
        return NaN;
      }
      function ls(t) {
        var r = typeof t;
        return r != "object" ? r : ArrayBuffer.isView(t) ? "binary" : (t = Pn(t), t === "ArrayBuffer" ? "binary" : t);
      }
      function cs(t) {
        return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : new Uint8Array(t);
      }
      function Gr(t, r, i) {
        var u = t.schema.yProps;
        return u ? (r && 0 < i.numFailures && (r = r.filter(function(l, f) {
          return !i.failures[f];
        })), Promise.all(u.map(function(l) {
          return l = l.updatesTable, r ? t.db.table(l).where("k").anyOf(r).delete() : t.db.table(l).clear();
        })).then(function() {
          return i;
        })) : i;
      }
      var fs = (ke.prototype._trans = function(t, r, i) {
        var u = this._tx || ne.trans, l = this.name, f = K && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(t === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(E, x, _) {
          if (!_.schema[l]) throw new oe.NotFound("Table " + l + " not part of transaction");
          return r(_.idbtrans, _);
        }
        var y = Mn();
        try {
          var v = u && u.db._novip === this.db._novip ? u === ne.trans ? u._promise(t, h, i) : nn(function() {
            return u._promise(t, h, i);
          }, { trans: u, transless: ne.transless || ne }) : function E(x, _, I, b) {
            if (x.idbdb && (x._state.openComplete || ne.letThrough || x._vip)) {
              var O = x._createTransaction(_, I, x._dbSchema);
              try {
                O.create(), x._state.PR1398_maxLoop = 3;
              } catch (S) {
                return S.name === Zt.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                  return E(x, _, I, b);
                })) : Ke(S);
              }
              return O._promise(_, function(S, T) {
                return nn(function() {
                  return ne.trans = O, b(S, T, O);
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
            if (x._state.openComplete) return Ke(new oe.DatabaseClosed(x._state.dbOpenError));
            if (!x._state.isBeingOpened) {
              if (!x._state.autoOpen) return Ke(new oe.DatabaseClosed());
              x.open().catch(g);
            }
            return x._state.dbReadyPromise.then(function() {
              return E(x, _, I, b);
            });
          }(this.db, t, [this.name], h);
          return f && (v._consoleTask = f, v = v.catch(function(E) {
            return console.trace(E), Ke(E);
          })), v;
        } finally {
          y && jn();
        }
      }, ke.prototype.get = function(t, r) {
        var i = this;
        return t && t.constructor === Object ? this.where(t).first(r) : t == null ? Ke(new oe.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return i.core.get({ trans: u, key: t }).then(function(l) {
            return i.hook.reading.fire(l);
          });
        }).then(r);
      }, ke.prototype.where = function(t) {
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
        if (i && this.db._maxKey !== bn) {
          var f = i.keyPath.slice(0, r.length);
          return this.where(f).equals(f.map(function(v) {
            return t[v];
          }));
        }
        !i && K && console.warn("The query ".concat(JSON.stringify(t), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function l(y, v) {
          return me(y, v) === 0;
        }
        var h = r.reduce(function(_, v) {
          var E = _[0], x = _[1], _ = u[v], I = t[v];
          return [E || _, E || !_ ? wn(x, _ && _.multi ? function(b) {
            return b = Ne(b, v), p(b) && b.some(function(O) {
              return l(I, O);
            });
          } : function(b) {
            return l(I, Ne(b, v));
          }) : x];
        }, [null, null]), f = h[0], h = h[1];
        return f ? this.where(f.name).equals(t[f.keyPath]).filter(h) : i ? this.filter(h) : this.where(r).equals("");
      }, ke.prototype.filter = function(t) {
        return this.toCollection().and(t);
      }, ke.prototype.count = function(t) {
        return this.toCollection().count(t);
      }, ke.prototype.offset = function(t) {
        return this.toCollection().offset(t);
      }, ke.prototype.limit = function(t) {
        return this.toCollection().limit(t);
      }, ke.prototype.each = function(t) {
        return this.toCollection().each(t);
      }, ke.prototype.toArray = function(t) {
        return this.toCollection().toArray(t);
      }, ke.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ke.prototype.orderBy = function(t) {
        return new this.db.Collection(new this.db.WhereClause(this, p(t) ? "[".concat(t.join("+"), "]") : t));
      }, ke.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ke.prototype.mapToClass = function(t) {
        var r, i = this.db, u = this.name;
        function l() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = t).prototype instanceof us && (function(v, E) {
          if (typeof E != "function" && E !== null) throw new TypeError("Class extends value " + String(E) + " is not a constructor or null");
          function x() {
            this.constructor = v;
          }
          o(v, E), v.prototype = E === null ? Object.create(E) : (x.prototype = E.prototype, new x());
        }(l, r = t), Object.defineProperty(l.prototype, "db", { get: function() {
          return i;
        }, enumerable: !1, configurable: !0 }), l.prototype.table = function() {
          return u;
        }, t = l);
        for (var f = /* @__PURE__ */ new Set(), h = t.prototype; h; h = A(h)) Object.getOwnPropertyNames(h).forEach(function(v) {
          return f.add(v);
        });
        function y(v) {
          if (!v) return v;
          var E, x = Object.create(t.prototype);
          for (E in v) if (!f.has(E)) try {
            x[E] = v[E];
          } catch {
          }
          return x;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), t;
      }, ke.prototype.defineClass = function() {
        return this.mapToClass(function(t) {
          m(this, t);
        });
      }, ke.prototype.add = function(t, r) {
        var i = this, u = this.schema.primKey, l = u.auto, f = u.keyPath, h = t;
        return f && l && (h = Vr(f)(t)), this._trans("readwrite", function(y) {
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
      }, ke.prototype.update = function(t, r) {
        return typeof t != "object" || p(t) ? this.where(":id").equals(t).modify(r) : (t = Ne(t, this.schema.primKey.keyPath), t === void 0 ? Ke(new oe.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(t).modify(r));
      }, ke.prototype.put = function(t, r) {
        var i = this, u = this.schema.primKey, l = u.auto, f = u.keyPath, h = t;
        return f && l && (h = Vr(f)(t)), this._trans("readwrite", function(y) {
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
      }, ke.prototype.delete = function(t) {
        var r = this;
        return this._trans("readwrite", function(i) {
          return r.core.mutate({ trans: i, type: "delete", keys: [t] }).then(function(u) {
            return Gr(r, [t], u);
          }).then(function(u) {
            return u.numFailures ? ee.reject(u.failures[0]) : void 0;
          });
        });
      }, ke.prototype.clear = function() {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "deleteRange", range: as }).then(function(i) {
            return Gr(t, null, i);
          });
        }).then(function(r) {
          return r.numFailures ? ee.reject(r.failures[0]) : void 0;
        });
      }, ke.prototype.bulkGet = function(t) {
        var r = this;
        return this._trans("readonly", function(i) {
          return r.core.getMany({ keys: t, trans: i }).then(function(u) {
            return u.map(function(l) {
              return r.hook.reading.fire(l);
            });
          });
        });
      }, ke.prototype.bulkAdd = function(t, r, i) {
        var u = this, l = Array.isArray(r) ? r : void 0, f = (i = i || (l ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && l) throw new oe.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && y ? t.map(Vr(E)) : t;
          return u.core.mutate({ trans: h, type: "add", keys: l, values: E, wantResults: f }).then(function(O) {
            var _ = O.numFailures, I = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return f ? I : b;
            throw new bt("".concat(u.name, ".bulkAdd(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, ke.prototype.bulkPut = function(t, r, i) {
        var u = this, l = Array.isArray(r) ? r : void 0, f = (i = i || (l ? void 0 : r)) ? i.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var E = u.schema.primKey, y = E.auto, E = E.keyPath;
          if (E && l) throw new oe.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== t.length) throw new oe.InvalidArgument("Arguments objects and keys must have the same length");
          var v = t.length, E = E && y ? t.map(Vr(E)) : t;
          return u.core.mutate({ trans: h, type: "put", keys: l, values: E, wantResults: f }).then(function(O) {
            var _ = O.numFailures, I = O.results, b = O.lastResult, O = O.failures;
            if (_ === 0) return f ? I : b;
            throw new bt("".concat(u.name, ".bulkPut(): ").concat(_, " of ").concat(v, " operations failed"), O);
          });
        });
      }, ke.prototype.bulkUpdate = function(t) {
        var r = this, i = this.core, u = t.map(function(h) {
          return h.key;
        }), l = t.map(function(h) {
          return h.changes;
        }), f = [];
        return this._trans("readwrite", function(h) {
          return i.getMany({ trans: h, keys: u, cache: "clone" }).then(function(y) {
            var v = [], E = [];
            t.forEach(function(_, I) {
              var b = _.key, O = _.changes, S = y[I];
              if (S) {
                for (var T = 0, N = Object.keys(O); T < N.length; T++) {
                  var P = N[T], D = O[P];
                  if (P === r.schema.primKey.keyPath) {
                    if (me(D, b) !== 0) throw new oe.Constraint("Cannot update primary key in bulkUpdate()");
                  } else Se(S, P, D);
                }
                f.push(I), v.push(b), E.push(S);
              }
            });
            var x = v.length;
            return i.mutate({ trans: h, type: "put", keys: v, values: E, updates: { keys: u, changeSpecs: l } }).then(function(_) {
              var I = _.numFailures, b = _.failures;
              if (I === 0) return x;
              for (var O = 0, S = Object.keys(b); O < S.length; O++) {
                var T, N = S[O], P = f[Number(N)];
                P != null && (T = b[N], delete b[N], b[P] = T);
              }
              throw new bt("".concat(r.name, ".bulkUpdate(): ").concat(I, " of ").concat(x, " operations failed"), b);
            });
          });
        });
      }, ke.prototype.bulkDelete = function(t) {
        var r = this, i = t.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: t }).then(function(l) {
            return Gr(r, t, l);
          });
        }).then(function(h) {
          var l = h.numFailures, f = h.lastResult, h = h.failures;
          if (l === 0) return f;
          throw new bt("".concat(r.name, ".bulkDelete(): ").concat(l, " of ").concat(i, " operations failed"), h);
        });
      }, ke);
      function ke() {
      }
      function ir(t) {
        function r(h, y) {
          if (y) {
            for (var v = arguments.length, E = new Array(v - 1); --v; ) E[v - 1] = arguments[v];
            return i[h].subscribe.apply(null, E), t;
          }
          if (typeof h == "string") return i[h];
        }
        var i = {};
        r.addEventType = f;
        for (var u = 1, l = arguments.length; u < l; ++u) f(arguments[u]);
        return r;
        function f(h, y, v) {
          if (typeof h != "object") {
            var E;
            y = y || X;
            var x = { subscribers: [], fire: v = v || g, subscribe: function(_) {
              x.subscribers.indexOf(_) === -1 && (x.subscribers.push(_), x.fire = y(x.fire, _));
            }, unsubscribe: function(_) {
              x.subscribers = x.subscribers.filter(function(I) {
                return I !== _;
              }), x.fire = x.subscribers.reduce(y, v);
            } };
            return i[h] = r[h] = x;
          }
          d(E = h).forEach(function(_) {
            var I = E[_];
            if (p(I)) f(_, E[_][0], E[_][1]);
            else {
              if (I !== "asap") throw new oe.InvalidArgument("Invalid event config");
              var b = f(_, w, function() {
                for (var O = arguments.length, S = new Array(O); O--; ) S[O] = arguments[O];
                b.subscribers.forEach(function(T) {
                  Ie(function() {
                    T.apply(null, S);
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
      function Kn(t, r) {
        return !(t.filter || t.algorithm || t.or) && (r ? t.justLimit : !t.replayFilter);
      }
      function Go(t, r) {
        t.filter = wn(t.filter, r);
      }
      function qo(t, r, i) {
        var u = t.replayFilter;
        t.replayFilter = u ? function() {
          return wn(u(), r());
        } : r, t.justLimit = i && !u;
      }
      function qr(t, r) {
        if (t.isPrimKey) return r.primaryKey;
        var i = r.getIndexByKeyPath(t.index);
        if (!i) throw new oe.Schema("KeyPath " + t.index + " on object store " + r.name + " is not indexed");
        return i;
      }
      function ds(t, r, i) {
        var u = qr(t, r.schema);
        return r.openCursor({ trans: i, values: !t.keysOnly, reverse: t.dir === "prev", unique: !!t.unique, query: { index: u, range: t.range } });
      }
      function Wr(t, r, i, u) {
        var l = t.replayFilter ? wn(t.filter, t.replayFilter()) : t.filter;
        if (t.or) {
          var f = {}, h = function(y, v, E) {
            var x, _;
            l && !l(v, E, function(I) {
              return v.stop(I);
            }, function(I) {
              return v.fail(I);
            }) || ((_ = "" + (x = v.primaryKey)) == "[object ArrayBuffer]" && (_ = "" + new Uint8Array(x)), C(f, _) || (f[_] = !0, r(y, v, E)));
          };
          return Promise.all([t.or._iterate(h, i), ps(ds(t, u, i), t.algorithm, h, !t.keysOnly && t.valueMapper)]);
        }
        return ps(ds(t, u, i), wn(t.algorithm, l), r, !t.keysOnly && t.valueMapper);
      }
      function ps(t, r, i, u) {
        var l = je(u ? function(f, h, y) {
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
            }) || l(f.value, f, function(y) {
              return h = y;
            }), h();
          });
        });
      }
      var ar = (hs.prototype.execute = function(t) {
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
        return i = (i = r.replacePrefix) === null || i === void 0 ? void 0 : i[0], i && typeof t == "string" && t.startsWith(i) ? r.replacePrefix[1] + t.substring(i.length) : t;
      }, hs);
      function hs(t) {
        this["@@propmod"] = t;
      }
      var Du = (xe.prototype._read = function(t, r) {
        var i = this._ctx;
        return i.error ? i.table._trans(null, Ke.bind(null, i.error)) : i.table._trans("readonly", t).then(r);
      }, xe.prototype._write = function(t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ke.bind(null, r.error)) : r.table._trans("readwrite", t, "locked");
      }, xe.prototype._addAlgorithm = function(t) {
        var r = this._ctx;
        r.algorithm = wn(r.algorithm, t);
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
          var u = r._ctx, l = u.table.core;
          if (Kn(u, !0)) return l.count({ trans: i, query: { index: qr(u, l.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var f = 0;
          return Wr(u, function() {
            return ++f, !1;
          }, i, l).then(function() {
            return f;
          });
        }).then(t);
      }, xe.prototype.sortBy = function(t, r) {
        var i = t.split(".").reverse(), u = i[0], l = i.length - 1;
        function f(v, E) {
          return E ? f(v[i[E]], E - 1) : v[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(v, E) {
          return me(f(v, l), f(E, l)) * h;
        }
        return this.toArray(function(v) {
          return v.sort(y);
        }).then(r);
      }, xe.prototype.toArray = function(t) {
        var r = this;
        return this._read(function(i) {
          var u = r._ctx;
          if (u.dir === "next" && Kn(u, !0) && 0 < u.limit) {
            var l = u.valueMapper, f = qr(u, u.table.core.schema);
            return u.table.core.query({ trans: i, limit: u.limit, values: !0, query: { index: f, range: u.range } }).then(function(y) {
              return y = y.result, l ? y.map(l) : y;
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
        return t <= 0 || (r.offset += t, Kn(r) ? qo(r, function() {
          var i = t;
          return function(u, l) {
            return i === 0 || (i === 1 ? --i : l(function() {
              u.advance(i), i = 0;
            }), !1);
          };
        }) : qo(r, function() {
          var i = t;
          return function() {
            return --i < 0;
          };
        })), this;
      }, xe.prototype.limit = function(t) {
        return this._ctx.limit = Math.min(this._ctx.limit, t), qo(this._ctx, function() {
          var r = t;
          return function(i, u, l) {
            return --r <= 0 && u(l), 0 <= r;
          };
        }, !0), this;
      }, xe.prototype.until = function(t, r) {
        return Go(this._ctx, function(i, u, l) {
          return !t(i.value) || (u(l), r);
        }), this;
      }, xe.prototype.first = function(t) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(t);
      }, xe.prototype.last = function(t) {
        return this.reverse().first(t);
      }, xe.prototype.filter = function(t) {
        var r;
        return Go(this._ctx, function(i) {
          return t(i.value);
        }), (r = this._ctx).isMatch = wn(r.isMatch, t), this;
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
        return this.each(function(u, l) {
          i.push(l.key);
        }).then(function() {
          return i;
        }).then(t);
      }, xe.prototype.primaryKeys = function(t) {
        var r = this._ctx;
        if (r.dir === "next" && Kn(r, !0) && 0 < r.limit) return this._read(function(u) {
          var l = qr(r, r.table.core.schema);
          return r.table.core.query({ trans: u, values: !1, limit: r.limit, query: { index: l, range: r.range } });
        }).then(function(u) {
          return u.result;
        }).then(t);
        r.keysOnly = !r.isMatch;
        var i = [];
        return this.each(function(u, l) {
          i.push(l.primaryKey);
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
        return Go(this._ctx, function(l) {
          var u = l.primaryKey.toString(), l = C(r, u);
          return r[u] = !0, !l;
        }), this;
      }, xe.prototype.modify = function(t) {
        var r = this, i = this._ctx;
        return this._write(function(u) {
          var l, f, h;
          h = typeof t == "function" ? t : (l = d(t), f = l.length, function(N) {
            for (var P = !1, D = 0; D < f; ++D) {
              var M = l[D], V = t[M], Y = Ne(N, M);
              V instanceof ar ? (Se(N, M, V.execute(Y)), P = !0) : Y !== V && (Se(N, M, V), P = !0);
            }
            return P;
          });
          var y = i.table.core, _ = y.schema.primaryKey, v = _.outbound, E = _.extractKey, x = 200, _ = r.db._options.modifyChunkSize;
          _ && (x = typeof _ == "object" ? _[y.name] || _["*"] || 200 : _);
          function I(N, M) {
            var D = M.failures, M = M.numFailures;
            O += N - M;
            for (var V = 0, Y = d(D); V < Y.length; V++) {
              var G = Y[V];
              b.push(D[G]);
            }
          }
          var b = [], O = 0, S = [], T = t === ms;
          return r.clone().primaryKeys().then(function(N) {
            function P(M) {
              var V = Math.min(x, N.length - M), Y = N.slice(M, M + V);
              return (T ? Promise.resolve([]) : y.getMany({ trans: u, keys: Y, cache: "immutable" })).then(function(G) {
                var W = [], Z = [], J = v ? [] : null, te = T ? Y : [];
                if (!T) for (var he = 0; he < V; ++he) {
                  var _e = G[he], fe = { value: _t(_e), primKey: N[M + he] };
                  h.call(fe, fe.value, fe) !== !1 && (fe.value == null ? te.push(N[M + he]) : v || me(E(_e), E(fe.value)) === 0 ? (Z.push(fe.value), v && J.push(N[M + he])) : (te.push(N[M + he]), W.push(fe.value)));
                }
                return Promise.resolve(0 < W.length && y.mutate({ trans: u, type: "add", values: W }).then(function(Le) {
                  for (var ce in Le.failures) te.splice(parseInt(ce), 1);
                  I(W.length, Le);
                })).then(function() {
                  return (0 < Z.length || D && typeof t == "object") && y.mutate({ trans: u, type: "put", keys: J, values: Z, criteria: D, changeSpec: typeof t != "function" && t, isAdditionalChunk: 0 < M }).then(function(Le) {
                    return I(Z.length, Le);
                  });
                }).then(function() {
                  return (0 < te.length || D && T) && y.mutate({ trans: u, type: "delete", keys: te, criteria: D, isAdditionalChunk: 0 < M }).then(function(Le) {
                    return Gr(i.table, te, Le);
                  }).then(function(Le) {
                    return I(te.length, Le);
                  });
                }).then(function() {
                  return N.length > M + V && P(M + x);
                });
              });
            }
            var D = Kn(i) && i.limit === 1 / 0 && (typeof t != "function" || T) && { index: i.index, range: i.range };
            return P(0).then(function() {
              if (0 < b.length) throw new Dn("Error modifying one or more objects", b, O, S);
              return N.length;
            });
          });
        });
      }, xe.prototype.delete = function() {
        var t = this._ctx, r = t.range;
        return !Kn(t) || t.table.schema.yProps || !t.isPrimKey && r.type !== 3 ? this.modify(ms) : this._write(function(i) {
          var u = t.table.core.schema.primaryKey, l = r;
          return t.table.core.count({ trans: i, query: { index: u, range: l } }).then(function(f) {
            return t.table.core.mutate({ trans: i, type: "deleteRange", range: l }).then(function(v) {
              var y = v.failures, v = v.numFailures;
              if (v) throw new Dn("Could not delete some values", Object.keys(y).map(function(E) {
                return y[E];
              }), f - v);
              return f - v;
            });
          });
        });
      }, xe);
      function xe() {
      }
      var ms = function(t, r) {
        return r.value = null;
      };
      function ku(t, r) {
        return t < r ? -1 : t === r ? 0 : 1;
      }
      function Mu(t, r) {
        return r < t ? -1 : t === r ? 0 : 1;
      }
      function dt(t, r, i) {
        return t = t instanceof ys ? new t.Collection(t) : t, t._ctx.error = new (i || TypeError)(r), t;
      }
      function Un(t) {
        return new t.Collection(t, function() {
          return gs("");
        }).limit(0);
      }
      function $r(t, r, i, u) {
        var l, f, h, y, v, E, x, _ = i.length;
        if (!i.every(function(O) {
          return typeof O == "string";
        })) return dt(t, ss);
        function I(O) {
          l = O === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = O === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = O === "next" ? ku : Mu;
          var S = i.map(function(T) {
            return { lower: f(T), upper: l(T) };
          }).sort(function(T, N) {
            return h(T.lower, N.lower);
          });
          y = S.map(function(T) {
            return T.upper;
          }), v = S.map(function(T) {
            return T.lower;
          }), x = (E = O) === "next" ? "" : u;
        }
        I("next"), t = new t.Collection(t, function() {
          return sn(y[0], v[_ - 1] + u);
        }), t._ondirectionchange = function(O) {
          I(O);
        };
        var b = 0;
        return t._addAlgorithm(function(O, S, T) {
          var N = O.key;
          if (typeof N != "string") return !1;
          var P = f(N);
          if (r(P, v, b)) return !0;
          for (var D = null, M = b; M < _; ++M) {
            var V = function(Y, G, W, Z, J, te) {
              for (var he = Math.min(Y.length, Z.length), _e = -1, fe = 0; fe < he; ++fe) {
                var Le = G[fe];
                if (Le !== Z[fe]) return J(Y[fe], W[fe]) < 0 ? Y.substr(0, fe) + W[fe] + W.substr(fe + 1) : J(Y[fe], Z[fe]) < 0 ? Y.substr(0, fe) + Z[fe] + W.substr(fe + 1) : 0 <= _e ? Y.substr(0, _e) + G[_e] + W.substr(_e + 1) : null;
                J(Y[fe], Le) < 0 && (_e = fe);
              }
              return he < Z.length && te === "next" ? Y + W.substr(Y.length) : he < Y.length && te === "prev" ? Y.substr(0, W.length) : _e < 0 ? null : Y.substr(0, _e) + Z[_e] + W.substr(_e + 1);
            }(N, P, y[M], v[M], h, E);
            V === null && D === null ? b = M + 1 : (D === null || 0 < h(D, V)) && (D = V);
          }
          return S(D !== null ? function() {
            O.continue(D + x);
          } : T), !1;
        }), t;
      }
      function sn(t, r, i, u) {
        return { type: 2, lower: t, upper: r, lowerOpen: i, upperOpen: u };
      }
      function gs(t) {
        return { type: 1, lower: t, upper: t };
      }
      var ys = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(t, r, i, u) {
        i = i !== !1, u = u === !0;
        try {
          return 0 < this._cmp(t, r) || this._cmp(t, r) === 0 && (i || u) && (!i || !u) ? Un(this) : new this.Collection(this, function() {
            return sn(t, r, !i, !u);
          });
        } catch {
          return dt(this, Vt);
        }
      }, Ye.prototype.equals = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return gs(t);
        });
      }, Ye.prototype.above = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return sn(t, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return sn(t, void 0, !1);
        });
      }, Ye.prototype.below = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return sn(void 0, t, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(t) {
        return t == null ? dt(this, Vt) : new this.Collection(this, function() {
          return sn(void 0, t);
        });
      }, Ye.prototype.startsWith = function(t) {
        return typeof t != "string" ? dt(this, ss) : this.between(t, t + bn, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(t) {
        return t === "" ? this.startsWith(t) : $r(this, function(r, i) {
          return r.indexOf(i[0]) === 0;
        }, [t], bn);
      }, Ye.prototype.equalsIgnoreCase = function(t) {
        return $r(this, function(r, i) {
          return r === i[0];
        }, [t], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var t = ct.apply(lt, arguments);
        return t.length === 0 ? Un(this) : $r(this, function(r, i) {
          return i.indexOf(r) !== -1;
        }, t, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var t = ct.apply(lt, arguments);
        return t.length === 0 ? Un(this) : $r(this, function(r, i) {
          return i.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, t, bn);
      }, Ye.prototype.anyOf = function() {
        var t = this, r = ct.apply(lt, arguments), i = this._cmp;
        try {
          r.sort(i);
        } catch {
          return dt(this, Vt);
        }
        if (r.length === 0) return Un(this);
        var u = new this.Collection(this, function() {
          return sn(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(f) {
          i = f === "next" ? t._ascending : t._descending, r.sort(i);
        };
        var l = 0;
        return u._addAlgorithm(function(f, h, y) {
          for (var v = f.key; 0 < i(v, r[l]); ) if (++l === r.length) return h(y), !1;
          return i(v, r[l]) === 0 || (h(function() {
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
        var r = t.reduce(function(i, u) {
          return i ? i.concat([[i[i.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([t[t.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(N, r) {
        var i = this, u = this._cmp, l = this._ascending, f = this._descending, h = this._min, y = this._max;
        if (N.length === 0) return Un(this);
        if (!N.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return dt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", oe.InvalidArgument);
        var v = !r || r.includeLowers !== !1, E = r && r.includeUppers === !0, x, _ = l;
        function I(P, D) {
          return _(P[0], D[0]);
        }
        try {
          (x = N.reduce(function(P, D) {
            for (var M = 0, V = P.length; M < V; ++M) {
              var Y = P[M];
              if (u(D[0], Y[1]) < 0 && 0 < u(D[1], Y[0])) {
                Y[0] = h(Y[0], D[0]), Y[1] = y(Y[1], D[1]);
                break;
              }
            }
            return M === V && P.push(D), P;
          }, [])).sort(I);
        } catch {
          return dt(this, Vt);
        }
        var b = 0, O = E ? function(P) {
          return 0 < l(P, x[b][1]);
        } : function(P) {
          return 0 <= l(P, x[b][1]);
        }, S = v ? function(P) {
          return 0 < f(P, x[b][0]);
        } : function(P) {
          return 0 <= f(P, x[b][0]);
        }, T = O, N = new this.Collection(this, function() {
          return sn(x[0][0], x[x.length - 1][1], !v, !E);
        });
        return N._ondirectionchange = function(P) {
          _ = P === "next" ? (T = O, l) : (T = S, f), x.sort(I);
        }, N._addAlgorithm(function(P, D, M) {
          for (var V, Y = P.key; T(Y); ) if (++b === x.length) return D(M), !1;
          return !O(V = Y) && !S(V) || (i._cmp(Y, x[b][1]) === 0 || i._cmp(Y, x[b][0]) === 0 || D(function() {
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
      function Pt(t) {
        return je(function(r) {
          return ur(r), t(r.target.error), !1;
        });
      }
      function ur(t) {
        t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault();
      }
      var lr = "storagemutated", Wo = "x-storagemutated-1", an = ir(null, lr), ju = (Dt.prototype._lock = function() {
        return ae(!ne.global), ++this._reculock, this._reculock !== 1 || ne.global || (ne.lockOwnerFor = this), this;
      }, Dt.prototype._unlock = function() {
        if (ae(!ne.global), --this._reculock == 0) for (ne.global || (ne.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var t = this._blockedFuncs.shift();
          try {
            vn(t[1], t[0]);
          } catch {
          }
        }
        return this;
      }, Dt.prototype._locked = function() {
        return this._reculock && ne.lockOwnerFor !== this;
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
        return ae(this._completion._state === null), (t = this.idbtrans = t || (this.db.core || i).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(l) {
          ur(l), r._reject(t.error);
        }), t.onabort = je(function(l) {
          ur(l), r.active && r._reject(new oe.Abort(t.error)), r.active = !1, r.on("abort").fire(l);
        }), t.oncomplete = je(function() {
          r.active = !1, r._resolve(), "mutatedParts" in t && an.storagemutated.fire(t.mutatedParts);
        }), this;
      }, Dt.prototype._promise = function(t, r, i) {
        var u = this;
        if (t === "readwrite" && this.mode !== "readwrite") return Ke(new oe.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ke(new oe.TransactionInactive());
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
        var l = new ee(function(f, h) {
          var y = r(f, h, u);
          y && y.then && y.then(f, h);
        });
        return l._lib = !0, l;
      }, Dt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Dt.prototype.waitFor = function(t) {
        var r, i = this._root(), u = ee.resolve(t);
        i._waitingFor ? i._waitingFor = i._waitingFor.then(function() {
          return u;
        }) : (i._waitingFor = u, i._waitingQueue = [], r = i.idbtrans.objectStore(i.storeNames[0]), function f() {
          for (++i._spinCount; i._waitingQueue.length; ) i._waitingQueue.shift()();
          i._waitingFor && (r.get(-1 / 0).onsuccess = f);
        }());
        var l = i._waitingFor;
        return new ee(function(f, h) {
          u.then(function(y) {
            return i._waitingQueue.push(je(f.bind(null, y)));
          }, function(y) {
            return i._waitingQueue.push(je(h.bind(null, y)));
          }).finally(function() {
            i._waitingFor === l && (i._waitingFor = null);
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
      function $o(t, r, i, u, l, f, h, y) {
        return { name: t, keyPath: r, unique: i, multi: u, auto: l, compound: f, src: (i && !h ? "&" : "") + (u ? "*" : "") + (l ? "++" : "") + _s(r), type: y };
      }
      function _s(t) {
        return typeof t == "string" ? t : t ? "[" + [].join.call(t, "+") + "]" : "";
      }
      function Yo(t, r, i) {
        return { name: t, primKey: r, indexes: i, mappedClass: null, idxByName: (u = function(l) {
          return [l.name, l];
        }, i.reduce(function(l, f, h) {
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
      function Xo(t) {
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
      function vs(t) {
        return [].slice.call(t);
      }
      var Bu = 0;
      function fr(t) {
        return t == null ? ":id" : typeof t == "string" ? t : "[".concat(t.join("+"), "]");
      }
      function Lu(t, r, v) {
        function u(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var b = T.lower, O = T.upper, S = T.lowerOpen, T = T.upperOpen;
          return b === void 0 ? O === void 0 ? null : r.upperBound(O, !!T) : O === void 0 ? r.lowerBound(b, !!S) : r.bound(b, O, !!S, !!T);
        }
        function l(I) {
          var b, O = I.name;
          return { name: O, schema: I, mutate: function(S) {
            var T = S.trans, N = S.type, P = S.keys, D = S.values, M = S.range;
            return new Promise(function(V, Y) {
              V = je(V);
              var G = T.objectStore(O), W = G.keyPath == null, Z = N === "put" || N === "add";
              if (!Z && N !== "delete" && N !== "deleteRange") throw new Error("Invalid operation type: " + N);
              var J, te = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (te === 0) return V({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(st) {
                ++Le, ur(st);
              }
              var _e = [], fe = [], Le = 0;
              if (N === "deleteRange") {
                if (M.type === 4) return V({ numFailures: Le, failures: fe, results: [], lastResult: void 0 });
                M.type === 3 ? _e.push(J = G.clear()) : _e.push(J = G.delete(u(M)));
              } else {
                var W = Z ? W ? [D, P] : [D, null] : [P, null], ce = W[0], et = W[1];
                if (Z) for (var tt = 0; tt < te; ++tt) _e.push(J = et && et[tt] !== void 0 ? G[N](ce[tt], et[tt]) : G[N](ce[tt])), J.onerror = he;
                else for (tt = 0; tt < te; ++tt) _e.push(J = G[N](ce[tt])), J.onerror = he;
              }
              function io(st) {
                st = st.target.result, _e.forEach(function(xn, pi) {
                  return xn.error != null && (fe[pi] = xn.error);
                }), V({ numFailures: Le, failures: fe, results: N === "delete" ? P : _e.map(function(xn) {
                  return xn.result;
                }), lastResult: st });
              }
              J.onerror = function(st) {
                he(st), io(st);
              }, J.onsuccess = io;
            });
          }, getMany: function(S) {
            var T = S.trans, N = S.keys;
            return new Promise(function(P, D) {
              P = je(P);
              for (var M, V = T.objectStore(O), Y = N.length, G = new Array(Y), W = 0, Z = 0, J = function(_e) {
                _e = _e.target, G[_e._pos] = _e.result, ++Z === W && P(G);
              }, te = Pt(D), he = 0; he < Y; ++he) N[he] != null && ((M = V.get(N[he]))._pos = he, M.onsuccess = J, M.onerror = te, ++W);
              W === 0 && P(G);
            });
          }, get: function(S) {
            var T = S.trans, N = S.key;
            return new Promise(function(P, D) {
              P = je(P);
              var M = T.objectStore(O).get(N);
              M.onsuccess = function(V) {
                return P(V.target.result);
              }, M.onerror = Pt(D);
            });
          }, query: (b = E, function(S) {
            return new Promise(function(T, N) {
              T = je(T);
              var P, D, M, W = S.trans, V = S.values, Y = S.limit, J = S.query, G = Y === 1 / 0 ? void 0 : Y, Z = J.index, J = J.range, W = W.objectStore(O), Z = Z.isPrimaryKey ? W : W.index(Z.name), J = u(J);
              if (Y === 0) return T({ result: [] });
              b ? ((G = V ? Z.getAll(J, G) : Z.getAllKeys(J, G)).onsuccess = function(te) {
                return T({ result: te.target.result });
              }, G.onerror = Pt(N)) : (P = 0, D = !V && "openKeyCursor" in Z ? Z.openKeyCursor(J) : Z.openCursor(J), M = [], D.onsuccess = function(te) {
                var he = D.result;
                return he ? (M.push(V ? he.value : he.primaryKey), ++P === Y ? T({ result: M }) : void he.continue()) : T({ result: M });
              }, D.onerror = Pt(N));
            });
          }), openCursor: function(S) {
            var T = S.trans, N = S.values, P = S.query, D = S.reverse, M = S.unique;
            return new Promise(function(V, Y) {
              V = je(V);
              var Z = P.index, G = P.range, W = T.objectStore(O), W = Z.isPrimaryKey ? W : W.index(Z.name), Z = D ? M ? "prevunique" : "prev" : M ? "nextunique" : "next", J = !N && "openKeyCursor" in W ? W.openKeyCursor(u(G), Z) : W.openCursor(u(G), Z);
              J.onerror = Pt(Y), J.onsuccess = je(function(te) {
                var he, _e, fe, Le, ce = J.result;
                ce ? (ce.___id = ++Bu, ce.done = !1, he = ce.continue.bind(ce), _e = (_e = ce.continuePrimaryKey) && _e.bind(ce), fe = ce.advance.bind(ce), Le = function() {
                  throw new Error("Cursor not stopped");
                }, ce.trans = T, ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = function() {
                  throw new Error("Cursor not started");
                }, ce.fail = je(Y), ce.next = function() {
                  var et = this, tt = 1;
                  return this.start(function() {
                    return tt-- ? et.continue() : et.stop();
                  }).then(function() {
                    return et;
                  });
                }, ce.start = function(et) {
                  function tt() {
                    if (J.result) try {
                      et();
                    } catch (st) {
                      ce.fail(st);
                    }
                    else ce.done = !0, ce.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ce.stop();
                  }
                  var io = new Promise(function(st, xn) {
                    st = je(st), J.onerror = Pt(xn), ce.fail = xn, ce.stop = function(pi) {
                      ce.stop = ce.continue = ce.continuePrimaryKey = ce.advance = Le, st(pi);
                    };
                  });
                  return J.onsuccess = je(function(st) {
                    J.onsuccess = tt, tt();
                  }), ce.continue = he, ce.continuePrimaryKey = _e, ce.advance = fe, tt(), io;
                }, V(ce)) : V(null);
              }, Y);
            });
          }, count: function(S) {
            var T = S.query, N = S.trans, P = T.index, D = T.range;
            return new Promise(function(M, V) {
              var Y = N.objectStore(O), G = P.isPrimaryKey ? Y : Y.index(P.name), Y = u(D), G = Y ? G.count(Y) : G.count();
              G.onsuccess = je(function(W) {
                return M(W.target.result);
              }), G.onerror = Pt(V);
            });
          } };
        }
        var f, h, y, x = (h = v, y = vs((f = t).objectStoreNames), { schema: { name: f.name, tables: y.map(function(I) {
          return h.objectStore(I);
        }).map(function(I) {
          var b = I.keyPath, T = I.autoIncrement, O = p(b), S = {}, T = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: b == null, compound: O, keyPath: b, autoIncrement: T, unique: !0, extractKey: Xo(b) }, indexes: vs(I.indexNames).map(function(N) {
            return I.index(N);
          }).map(function(M) {
            var P = M.name, D = M.unique, V = M.multiEntry, M = M.keyPath, V = { name: P, compound: p(M), keyPath: M, unique: D, multiEntry: V, extractKey: Xo(M) };
            return S[fr(M)] = V;
          }), getIndexByKeyPath: function(N) {
            return S[fr(N)];
          } };
          return S[":id"] = T.primaryKey, b != null && (S[fr(b)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), v = x.schema, E = x.hasGetAll, x = v.tables.map(l), _ = {};
        return x.forEach(function(I) {
          return _[I.name] = I;
        }), { stack: "dbcore", transaction: t.transaction.bind(t), table: function(I) {
          if (!_[I]) throw new Error("Table '".concat(I, "' not found"));
          return _[I];
        }, MIN_KEY: -1 / 0, MAX_KEY: cr(r), schema: v };
      }
      function Ku(t, r, i, u) {
        var l = i.IDBKeyRange;
        return i.indexedDB, { dbcore: (u = Lu(r, l, u), t.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, u)) };
      }
      function Yr(t, u) {
        var i = u.db, u = Ku(t._middlewares, i, t._deps, u);
        t.core = u.dbcore, t.tables.forEach(function(l) {
          var f = l.name;
          t.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (l.core = t.core.table(f), t[f] instanceof t.Table && (t[f].core = l.core));
        });
      }
      function Xr(t, r, i, u) {
        i.forEach(function(l) {
          var f = u[l];
          r.forEach(function(h) {
            var y = function v(E, x) {
              return Re(E, x) || (E = A(E)) && v(E, x);
            }(h, l);
            (!y || "value" in y && y.value === void 0) && (h === t.Transaction.prototype || h instanceof t.Transaction ? j(h, l, { get: function() {
              return this.table(l);
            }, set: function(v) {
              k(this, l, { value: v, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[l] = new t.Table(l, f));
          });
        });
      }
      function zo(t, r) {
        r.forEach(function(i) {
          for (var u in i) i[u] instanceof t.Table && delete i[u];
        });
      }
      function Uu(t, r) {
        return t._cfg.version - r._cfg.version;
      }
      function Hu(t, r, i, u) {
        var l = t._dbSchema;
        i.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = Yo("$meta", ws("")[0], []), t._storeNames.push("$meta"));
        var f = t._createTransaction("readwrite", t._storeNames, l);
        f.create(i), f._completion.catch(u);
        var h = f._reject.bind(f), y = ne.transless || ne;
        nn(function() {
          return ne.trans = f, ne.transless = y, r !== 0 ? (Yr(t, i), E = r, ((v = f).storeNames.includes("$meta") ? v.table("$meta").get("version").then(function(x) {
            return x ?? E;
          }) : ee.resolve(E)).then(function(x) {
            return I = x, b = f, O = i, S = [], x = (_ = t)._versions, T = _._dbSchema = Jr(0, _.idbdb, O), (x = x.filter(function(N) {
              return N._cfg.version >= I;
            })).length !== 0 ? (x.forEach(function(N) {
              S.push(function() {
                var P = T, D = N._cfg.dbschema;
                Qr(_, P, O), Qr(_, D, O), T = _._dbSchema = D;
                var M = Jo(P, D);
                M.add.forEach(function(Z) {
                  Qo(O, Z[0], Z[1].primKey, Z[1].indexes);
                }), M.change.forEach(function(Z) {
                  if (Z.recreate) throw new oe.Upgrade("Not yet support for changing primary key");
                  var J = O.objectStore(Z.name);
                  Z.add.forEach(function(te) {
                    return zr(J, te);
                  }), Z.change.forEach(function(te) {
                    J.deleteIndex(te.name), zr(J, te);
                  }), Z.del.forEach(function(te) {
                    return J.deleteIndex(te);
                  });
                });
                var V = N._cfg.contentUpgrade;
                if (V && N._cfg.version > I) {
                  Yr(_, O), b._memoizedTables = {};
                  var Y = yt(D);
                  M.del.forEach(function(Z) {
                    Y[Z] = P[Z];
                  }), zo(_, [_.Transaction.prototype]), Xr(_, [_.Transaction.prototype], d(Y), Y), b.schema = Y;
                  var G, W = Ot(V);
                  return W && Bn(), M = ee.follow(function() {
                    var Z;
                    (G = V(b)) && W && (Z = rn.bind(null, null), G.then(Z, Z));
                  }), G && typeof G.then == "function" ? ee.resolve(G) : M.then(function() {
                    return G;
                  });
                }
              }), S.push(function(P) {
                var D, M, V = N._cfg.dbschema;
                D = V, M = P, [].slice.call(M.db.objectStoreNames).forEach(function(Y) {
                  return D[Y] == null && M.db.deleteObjectStore(Y);
                }), zo(_, [_.Transaction.prototype]), Xr(_, [_.Transaction.prototype], _._storeNames, _._dbSchema), b.schema = _._dbSchema;
              }), S.push(function(P) {
                _.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(_.idbdb.version / 10) === N._cfg.version ? (_.idbdb.deleteObjectStore("$meta"), delete _._dbSchema.$meta, _._storeNames = _._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(N._cfg.version, "version"));
              });
            }), function N() {
              return S.length ? ee.resolve(S.shift()(b.idbtrans)).then(N) : ee.resolve();
            }().then(function() {
              bs(T, O);
            })) : ee.resolve();
            var _, I, b, O, S, T;
          }).catch(h)) : (d(l).forEach(function(x) {
            Qo(i, x, l[x].primKey, l[x].indexes);
          }), Yr(t, i), void ee.follow(function() {
            return t.on.populate.fire(f);
          }).catch(h));
          var v, E;
        });
      }
      function Fu(t, r) {
        bs(t._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var i = Jr(0, t.idbdb, r);
        Qr(t, t._dbSchema, r);
        for (var u = 0, l = Jo(i, t._dbSchema).change; u < l.length; u++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(v) {
              K && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(v.src)), zr(y, v);
            });
          }(l[u]);
          if (typeof f == "object") return f.value;
        }
      }
      function Jo(t, r) {
        var i, u = { del: [], add: [], change: [] };
        for (i in t) r[i] || u.del.push(i);
        for (i in r) {
          var l = t[i], f = r[i];
          if (l) {
            var h = { name: i, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (l.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || l.primKey.auto !== f.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = l.idxByName, v = f.idxByName, E = void 0;
              for (E in y) v[E] || h.del.push(E);
              for (E in v) {
                var x = y[E], _ = v[E];
                x ? x.src !== _.src && h.change.push(_) : h.add.push(_);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([i, f]);
        }
        return u;
      }
      function Qo(t, r, i, u) {
        var l = t.db.createObjectStore(r, i.keyPath ? { keyPath: i.keyPath, autoIncrement: i.auto } : { autoIncrement: i.auto });
        return u.forEach(function(f) {
          return zr(l, f);
        }), l;
      }
      function bs(t, r) {
        d(t).forEach(function(i) {
          r.db.objectStoreNames.contains(i) || (K && console.debug("Dexie: Creating missing table", i), Qo(r, i, t[i].primKey, t[i].indexes));
        });
      }
      function zr(t, r) {
        t.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Jr(t, r, i) {
        var u = {};
        return Ee(r.objectStoreNames, 0).forEach(function(l) {
          for (var f = i.objectStore(l), h = $o(_s(E = f.keyPath), E || "", !0, !1, !!f.autoIncrement, E && typeof E != "string", !0), y = [], v = 0; v < f.indexNames.length; ++v) {
            var x = f.index(f.indexNames[v]), E = x.keyPath, x = $o(x.name, E, !!x.unique, !!x.multiEntry, !1, E && typeof E != "string", !1);
            y.push(x);
          }
          u[l] = Yo(l, h, y);
        }), u;
      }
      function Qr(t, r, i) {
        for (var u = i.db.objectStoreNames, l = 0; l < u.length; ++l) {
          var f = u[l], h = i.objectStore(f);
          t._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var v = h.indexNames[y], E = h.index(v).keyPath, x = typeof E == "string" ? E : "[" + Ee(E).join("+") + "]";
            !r[f] || (E = r[f].idxByName[x]) && (E.name = v, delete r[f].idxByName[x], r[f].idxByName[v] = E);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && c.WorkerGlobalScope && c instanceof c.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (t._hasGetAll = !1);
      }
      function ws(t) {
        return t.split(",").map(function(r, i) {
          var f = r.split(":"), u = (l = f[1]) === null || l === void 0 ? void 0 : l.trim(), l = (r = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return $o(l, f || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(f), i === 0, u);
        });
      }
      var Vu = (Hn.prototype._createTableSchema = Yo, Hn.prototype._parseIndexSyntax = ws, Hn.prototype._parseStoresSpec = function(t, r) {
        var i = this;
        d(t).forEach(function(u) {
          if (t[u] !== null) {
            var l = i._parseIndexSyntax(t[u]), f = l.shift();
            if (!f) throw new oe.Schema("Invalid schema for table " + u + ": " + t[u]);
            if (f.unique = !0, f.multi) throw new oe.Schema("Primary key cannot be multiEntry*");
            l.forEach(function(h) {
              if (h.auto) throw new oe.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new oe.Schema("Index must have a name and cannot be an empty string");
            }), l = i._createTableSchema(u, f, l), r[u] = l;
          }
        });
      }, Hn.prototype.stores = function(i) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, i) : i;
        var i = r._versions, u = {}, l = {};
        return i.forEach(function(f) {
          m(u, f._cfg.storesSource), l = f._cfg.dbschema = {}, f._parseStoresSpec(u, l);
        }), r._dbSchema = l, zo(r, [r._allTables, r, r.Transaction.prototype]), Xr(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], d(l), l), r._storeNames = d(l), this;
      }, Hn.prototype.upgrade = function(t) {
        return this._cfg.contentUpgrade = $(this._cfg.contentUpgrade || g, t), this;
      }, Hn);
      function Hn() {
      }
      function Zo(t, r) {
        var i = t._dbNamesDB;
        return i || (i = t._dbNamesDB = new Gt(Fr, { addons: [], indexedDB: t, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), i.table("dbnames");
      }
      function ei(t) {
        return t && typeof t.databases == "function";
      }
      function ti(t) {
        return nn(function() {
          return ne.letThrough = !0, t();
        });
      }
      function ni(t) {
        return !("from" in t);
      }
      var Ze = function(t, r) {
        if (!this) {
          var i = new Ze();
          return t && "d" in t && m(i, t), i;
        }
        m(this, arguments.length ? { d: 1, from: t, to: 1 < arguments.length ? r : t } : { d: 0 });
      };
      function dr(t, r, i) {
        var u = me(r, i);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (ni(t)) return m(t, { from: r, to: i, d: 1 });
          var l = t.l, u = t.r;
          if (me(i, t.from) < 0) return l ? dr(l, r, i) : t.l = { from: r, to: i, d: 1, l: null, r: null }, Os(t);
          if (0 < me(r, t.to)) return u ? dr(u, r, i) : t.r = { from: r, to: i, d: 1, l: null, r: null }, Os(t);
          me(r, t.from) < 0 && (t.from = r, t.l = null, t.d = u ? u.d + 1 : 1), 0 < me(i, t.to) && (t.to = i, t.r = null, t.d = t.l ? t.l.d + 1 : 1), i = !t.r, l && !t.l && pr(t, l), u && i && pr(t, u);
        }
      }
      function pr(t, r) {
        ni(r) || function i(u, v) {
          var f = v.from, h = v.to, y = v.l, v = v.r;
          dr(u, f, h), y && i(u, y), v && i(u, v);
        }(t, r);
      }
      function Es(t, r) {
        var i = Zr(r), u = i.next();
        if (u.done) return !1;
        for (var l = u.value, f = Zr(t), h = f.next(l.from), y = h.value; !u.done && !h.done; ) {
          if (me(y.from, l.to) <= 0 && 0 <= me(y.to, l.from)) return !0;
          me(l.from, y.from) < 0 ? l = (u = i.next(y.from)).value : y = (h = f.next(l.from)).value;
        }
        return !1;
      }
      function Zr(t) {
        var r = ni(t) ? null : { s: 0, n: t };
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
      function Os(t) {
        var r, i, u = (((r = t.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((i = t.l) === null || i === void 0 ? void 0 : i.d) || 0), l = 1 < u ? "r" : u < -1 ? "l" : "";
        l && (r = l == "r" ? "l" : "r", i = s({}, t), u = t[l], t.from = u.from, t.to = u.to, t[l] = u[l], i[l] = u[r], (t[r] = i).d = xs(i)), t.d = xs(t);
      }
      function xs(i) {
        var r = i.r, i = i.l;
        return (r ? i ? Math.max(r.d, i.d) : r.d : i ? i.d : 0) + 1;
      }
      function eo(t, r) {
        return d(r).forEach(function(i) {
          t[i] ? pr(t[i], r[i]) : t[i] = function u(l) {
            var f, h, y = {};
            for (f in l) C(l, f) && (h = l[f], y[f] = !h || typeof h != "object" || Qt.has(h.constructor) ? h : u(h));
            return y;
          }(r[i]);
        }), t;
      }
      function ri(t, r) {
        return t.all || r.all || Object.keys(t).some(function(i) {
          return r[i] && Es(r[i], t[i]);
        });
      }
      L(Ze.prototype, ((wt = { add: function(t) {
        return pr(this, t), this;
      }, addKey: function(t) {
        return dr(this, t, t), this;
      }, addKeys: function(t) {
        var r = this;
        return t.forEach(function(i) {
          return dr(r, i, i);
        }), this;
      }, hasKey: function(t) {
        var r = Zr(this).next(t).value;
        return r && me(r.from, t) <= 0 && 0 <= me(r.to, t);
      } })[Ve] = function() {
        return Zr(this);
      }, wt));
      var En = {}, oi = {}, ii = !1;
      function to(t) {
        eo(oi, t), ii || (ii = !0, setTimeout(function() {
          ii = !1, si(oi, !(oi = {}));
        }, 0));
      }
      function si(t, r) {
        r === void 0 && (r = !1);
        var i = /* @__PURE__ */ new Set();
        if (t.all) for (var u = 0, l = Object.values(En); u < l.length; u++) Ts(h = l[u], t, i, r);
        else for (var f in t) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          y && (f = y[1], y = y[2], (h = En["idb://".concat(f, "/").concat(y)]) && Ts(h, t, i, r));
        }
        i.forEach(function(v) {
          return v();
        });
      }
      function Ts(t, r, i, u) {
        for (var l = [], f = 0, h = Object.entries(t.queries.query); f < h.length; f++) {
          for (var y = h[f], v = y[0], E = [], x = 0, _ = y[1]; x < _.length; x++) {
            var I = _[x];
            ri(r, I.obsSet) ? I.subscribers.forEach(function(T) {
              return i.add(T);
            }) : u && E.push(I);
          }
          u && l.push([v, E]);
        }
        if (u) for (var b = 0, O = l; b < O.length; b++) {
          var S = O[b], v = S[0], E = S[1];
          t.queries.query[v] = E;
        }
      }
      function Gu(t) {
        var r = t._state, i = t._deps.indexedDB;
        if (r.isBeingOpened || t.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? Ke(r.dbOpenError) : t;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, l = Math.round(10 * t.verno), f = !1;
        function h() {
          if (r.openCanceller !== u) throw new oe.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new ee(function(I, b) {
            if (h(), !i) throw new oe.MissingAPI();
            var O = t.name, S = r.autoSchema || !l ? i.open(O) : i.open(O, l);
            if (!S) throw new oe.MissingAPI();
            S.onerror = Pt(b), S.onblocked = je(t._fireOnBlocked), S.onupgradeneeded = je(function(T) {
              var N;
              x = S.transaction, r.autoSchema && !t._options.allowEmptyDB ? (S.onerror = ur, x.abort(), S.result.close(), (N = i.deleteDatabase(O)).onsuccess = N.onerror = je(function() {
                b(new oe.NoSuchDatabase("Database ".concat(O, " doesnt exist")));
              })) : (x.onerror = Pt(b), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, _ = T < 1, t.idbdb = S.result, f && Fu(t, x), Hu(t, T / 10, x, b));
            }, b), S.onsuccess = je(function() {
              x = null;
              var T, N, P, D, M, V = t.idbdb = S.result, Y = Ee(V.objectStoreNames);
              if (0 < Y.length) try {
                var G = V.transaction((D = Y).length === 1 ? D[0] : D, "readonly");
                if (r.autoSchema) N = V, P = G, (T = t).verno = N.version / 10, P = T._dbSchema = Jr(0, N, P), T._storeNames = Ee(N.objectStoreNames, 0), Xr(T, [T._allTables], d(P), P);
                else if (Qr(t, t._dbSchema, G), ((M = Jo(Jr(0, (M = t).idbdb, G), M._dbSchema)).add.length || M.change.some(function(W) {
                  return W.add.length || W.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), V.close(), l = V.version + 1, f = !0, I(y());
                Yr(t, G);
              } catch {
              }
              Ln.push(t), V.onversionchange = je(function(W) {
                r.vcFired = !0, t.on("versionchange").fire(W);
              }), V.onclose = je(function(W) {
                t.on("close").fire(W);
              }), _ && (M = t._deps, G = O, V = M.indexedDB, M = M.IDBKeyRange, ei(V) || G === Fr || Zo(V, M).put({ name: G }).catch(g)), I();
            }, b);
          }).catch(function(I) {
            switch (I?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < l) return l = 0, y();
            }
            return ee.reject(I);
          });
        }
        var v, E = r.dbReadyResolve, x = null, _ = !1;
        return ee.race([u, (typeof navigator > "u" ? ee.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(I) {
          function b() {
            return indexedDB.databases().finally(I);
          }
          v = setInterval(b, 100), b();
        }).finally(function() {
          return clearInterval(v);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], ee.resolve(ti(function() {
            return t.on.ready.fire(t.vip);
          })).then(function I() {
            if (0 < r.onReadyBeingFired.length) {
              var b = r.onReadyBeingFired.reduce($, g);
              return r.onReadyBeingFired = [], ee.resolve(ti(function() {
                return b(t.vip);
              })).then(I);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(I) {
          r.dbOpenError = I;
          try {
            x && x.abort();
          } catch {
          }
          return u === r.openCanceller && t._close(), Ke(I);
        }).finally(function() {
          r.openComplete = !0, E();
        }).then(function() {
          var I;
          return _ && (I = {}, t.tables.forEach(function(b) {
            b.schema.indexes.forEach(function(O) {
              O.name && (I["idb://".concat(t.name, "/").concat(b.name, "/").concat(O.name)] = new Ze(-1 / 0, [[[]]]));
            }), I["idb://".concat(t.name, "/").concat(b.name, "/")] = I["idb://".concat(t.name, "/").concat(b.name, "/:dels")] = new Ze(-1 / 0, [[[]]]);
          }), an(lr).fire(I), si(I, !0)), t;
        });
      }
      function ai(t) {
        function r(f) {
          return t.next(f);
        }
        var i = l(r), u = l(function(f) {
          return t.throw(f);
        });
        function l(f) {
          return function(v) {
            var y = f(v), v = y.value;
            return y.done ? v : v && typeof v.then == "function" ? v.then(i, u) : p(v) ? Promise.all(v).then(i, u) : i(v);
          };
        }
        return l(r)();
      }
      function no(t, r, i) {
        for (var u = p(t) ? t.slice() : [t], l = 0; l < i; ++l) u.push(r);
        return u;
      }
      var qu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema, l = {}, f = [];
          function h(_, I, b) {
            var O = fr(_), S = l[O] = l[O] || [], T = _ == null ? 0 : typeof _ == "string" ? 1 : _.length, N = 0 < I, N = s(s({}, b), { name: N ? "".concat(O, "(virtual-from:").concat(b.name, ")") : b.name, lowLevelIndex: b, isVirtual: N, keyTail: I, keyLength: T, extractKey: Xo(_), unique: !N && b.unique });
            return S.push(N), N.isPrimaryKey || f.push(N), 1 < T && h(T === 2 ? _[0] : _.slice(0, T - 1), I + 1, b), S.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), N;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), l[":id"] = [r];
          for (var y = 0, v = u.indexes; y < v.length; y++) {
            var E = v[y];
            h(E.keyPath, 0, E);
          }
          function x(_) {
            var I, b = _.query.index;
            return b.isVirtual ? s(s({}, _), { query: { index: b.lowLevelIndex, range: (I = _.query.range, b = b.keyTail, { type: I.type === 1 ? 2 : I.type, lower: no(I.lower, I.lowerOpen ? t.MAX_KEY : t.MIN_KEY, b), lowerOpen: !0, upper: no(I.upper, I.upperOpen ? t.MIN_KEY : t.MAX_KEY, b), upperOpen: !0 }) } }) : _;
          }
          return s(s({}, i), { schema: s(s({}, u), { primaryKey: r, indexes: f, getIndexByKeyPath: function(_) {
            return (_ = l[fr(_)]) && _[0];
          } }), count: function(_) {
            return i.count(x(_));
          }, query: function(_) {
            return i.query(x(_));
          }, openCursor: function(_) {
            var I = _.query.index, b = I.keyTail, O = I.isVirtual, S = I.keyLength;
            return O ? i.openCursor(x(_)).then(function(N) {
              return N && T(N);
            }) : i.openCursor(_);
            function T(N) {
              return Object.create(N, { continue: { value: function(P) {
                P != null ? N.continue(no(P, _.reverse ? t.MAX_KEY : t.MIN_KEY, b)) : _.unique ? N.continue(N.key.slice(0, S).concat(_.reverse ? t.MIN_KEY : t.MAX_KEY, b)) : N.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                N.continuePrimaryKey(no(P, t.MAX_KEY, b), D);
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
      function ui(t, r, i, u) {
        return i = i || {}, u = u || "", d(t).forEach(function(l) {
          var f, h, y;
          C(r, l) ? (f = t[l], h = r[l], typeof f == "object" && typeof h == "object" && f && h ? (y = Pn(f)) !== Pn(h) ? i[u + l] = r[l] : y === "Object" ? ui(f, h, i, u + l + ".") : f !== h && (i[u + l] = r[l]) : f !== h && (i[u + l] = r[l])) : i[u + l] = void 0;
        }), d(r).forEach(function(l) {
          C(t, l) || (i[u + l] = r[l]);
        }), i;
      }
      function li(t, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(t.extractKey);
      }
      var Wu = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(t) {
        return s(s({}, t), { table: function(r) {
          var i = t.table(r), u = i.schema.primaryKey;
          return s(s({}, i), { mutate: function(l) {
            var f = ne.trans, h = f.table(r).hook, y = h.deleting, v = h.creating, E = h.updating;
            switch (l.type) {
              case "add":
                if (v.fire === g) break;
                return f._promise("readwrite", function() {
                  return x(l);
                }, !0);
              case "put":
                if (v.fire === g && E.fire === g) break;
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
                  return function _(I, b, O) {
                    return i.query({ trans: I, values: !1, query: { index: u, range: b }, limit: O }).then(function(S) {
                      var T = S.result;
                      return x({ type: "delete", keys: T, trans: I }).then(function(N) {
                        return 0 < N.numFailures ? Promise.reject(N.failures[0]) : T.length < O ? { failures: [], numFailures: 0, lastResult: void 0 } : _(I, s(s({}, b), { lower: T[T.length - 1], lowerOpen: !0 }), O);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return i.mutate(l);
            function x(_) {
              var I, b, O, S = ne.trans, T = _.keys || li(u, _);
              if (!T) throw new Error("Keys missing");
              return (_ = _.type === "add" || _.type === "put" ? s(s({}, _), { keys: T }) : s({}, _)).type !== "delete" && (_.values = a([], _.values)), _.keys && (_.keys = a([], _.keys)), I = i, O = T, ((b = _).type === "add" ? Promise.resolve([]) : I.getMany({ trans: b.trans, keys: O, cache: "immutable" })).then(function(N) {
                var P = T.map(function(D, M) {
                  var V, Y, G, W = N[M], Z = { onerror: null, onsuccess: null };
                  return _.type === "delete" ? y.fire.call(Z, D, W, S) : _.type === "add" || W === void 0 ? (V = v.fire.call(Z, D, _.values[M], S), D == null && V != null && (_.keys[M] = D = V, u.outbound || Se(_.values[M], u.keyPath, D))) : (V = ui(W, _.values[M]), (Y = E.fire.call(Z, V, D, W, S)) && (G = _.values[M], Object.keys(Y).forEach(function(J) {
                    C(G, J) ? G[J] = Y[J] : Se(G, J, Y[J]);
                  }))), Z;
                });
                return i.mutate(_).then(function(D) {
                  for (var M = D.failures, V = D.results, Y = D.numFailures, D = D.lastResult, G = 0; G < T.length; ++G) {
                    var W = (V || T)[G], Z = P[G];
                    W == null ? Z.onerror && Z.onerror(M[G]) : Z.onsuccess && Z.onsuccess(_.type === "put" && N[G] ? _.values[G] : W);
                  }
                  return { failures: M, results: V, numFailures: Y, lastResult: D };
                }).catch(function(D) {
                  return P.forEach(function(M) {
                    return M.onerror && M.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function Rs(t, r, i) {
        try {
          if (!r || r.keys.length < t.length) return null;
          for (var u = [], l = 0, f = 0; l < r.keys.length && f < t.length; ++l) me(r.keys[l], t[f]) === 0 && (u.push(i ? _t(r.values[l]) : r.values[l]), ++f);
          return u.length === t.length ? u : null;
        } catch {
          return null;
        }
      }
      var $u = { stack: "dbcore", level: -1, create: function(t) {
        return { table: function(r) {
          var i = t.table(r);
          return s(s({}, i), { getMany: function(u) {
            if (!u.cache) return i.getMany(u);
            var l = Rs(u.keys, u.trans._cache, u.cache === "clone");
            return l ? ee.resolve(l) : i.getMany(u).then(function(f) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? _t(f) : f }, f;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), i.mutate(u);
          } });
        } };
      } };
      function Ss(t, r) {
        return t.trans.mode === "readonly" && !!t.subscr && !t.trans.explicit && t.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function Is(t, r) {
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
      var Yu = { stack: "dbcore", level: 0, name: "Observability", create: function(t) {
        var r = t.schema.name, i = new Ze(t.MIN_KEY, t.MAX_KEY);
        return s(s({}, t), { transaction: function(u, l, f) {
          if (ne.subscr && l !== "readonly") throw new oe.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ne.querier));
          return t.transaction(u, l, f);
        }, table: function(u) {
          var l = t.table(u), f = l.schema, h = f.primaryKey, _ = f.indexes, y = h.extractKey, v = h.outbound, E = h.autoIncrement && _.filter(function(b) {
            return b.compound && b.keyPath.includes(h.keyPath);
          }), x = s(s({}, l), { mutate: function(b) {
            function O(J) {
              return J = "idb://".concat(r, "/").concat(u, "/").concat(J), D[J] || (D[J] = new Ze());
            }
            var S, T, N, P = b.trans, D = b.mutatedParts || (b.mutatedParts = {}), M = O(""), V = O(":dels"), Y = b.type, Z = b.type === "deleteRange" ? [b.range] : b.type === "delete" ? [b.keys] : b.values.length < 50 ? [li(h, b).filter(function(J) {
              return J;
            }), b.values] : [], G = Z[0], W = Z[1], Z = b.trans._cache;
            return p(G) ? (M.addKeys(G), (Z = Y === "delete" || G.length === W.length ? Rs(G, Z) : null) || V.addKeys(G), (Z || W) && (S = O, T = Z, N = W, f.indexes.forEach(function(J) {
              var te = S(J.name || "");
              function he(fe) {
                return fe != null ? J.extractKey(fe) : null;
              }
              function _e(fe) {
                return J.multiEntry && p(fe) ? fe.forEach(function(Le) {
                  return te.addKey(Le);
                }) : te.addKey(fe);
              }
              (T || N).forEach(function(fe, et) {
                var ce = T && he(T[et]), et = N && he(N[et]);
                me(ce, et) !== 0 && (ce != null && _e(ce), et != null && _e(et));
              });
            }))) : G ? (W = { from: (W = G.lower) !== null && W !== void 0 ? W : t.MIN_KEY, to: (W = G.upper) !== null && W !== void 0 ? W : t.MAX_KEY }, V.add(W), M.add(W)) : (M.add(i), V.add(i), f.indexes.forEach(function(J) {
              return O(J.name).add(i);
            })), l.mutate(b).then(function(J) {
              return !G || b.type !== "add" && b.type !== "put" || (M.addKeys(J.results), E && E.forEach(function(te) {
                for (var he = b.values.map(function(ce) {
                  return te.extractKey(ce);
                }), _e = te.keyPath.findIndex(function(ce) {
                  return ce === h.keyPath;
                }), fe = 0, Le = J.results.length; fe < Le; ++fe) he[fe][_e] = J.results[fe];
                O(te.name).addKeys(he);
              })), P.mutatedParts = eo(P.mutatedParts || {}, D), J;
            });
          } }), _ = function(O) {
            var S = O.query, O = S.index, S = S.range;
            return [O, new Ze((O = S.lower) !== null && O !== void 0 ? O : t.MIN_KEY, (S = S.upper) !== null && S !== void 0 ? S : t.MAX_KEY)];
          }, I = { get: function(b) {
            return [h, new Ze(b.key)];
          }, getMany: function(b) {
            return [h, new Ze().addKeys(b.keys)];
          }, count: _, query: _, openCursor: _ };
          return d(I).forEach(function(b) {
            x[b] = function(O) {
              var S = ne.subscr, T = !!S, N = Ss(ne, l) && Is(b, O) ? O.obsSet = {} : S;
              if (T) {
                var P = function(W) {
                  return W = "idb://".concat(r, "/").concat(u, "/").concat(W), N[W] || (N[W] = new Ze());
                }, D = P(""), M = P(":dels"), S = I[b](O), T = S[0], S = S[1];
                if ((b === "query" && T.isPrimaryKey && !O.values ? M : P(T.name || "")).add(S), !T.isPrimaryKey) {
                  if (b !== "count") {
                    var V = b === "query" && v && O.values && l.query(s(s({}, O), { values: !1 }));
                    return l[b].apply(this, arguments).then(function(W) {
                      if (b === "query") {
                        if (v && O.values) return V.then(function(he) {
                          return he = he.result, D.addKeys(he), W;
                        });
                        var Z = O.values ? W.result.map(y) : W.result;
                        (O.values ? D : M).addKeys(Z);
                      } else if (b === "openCursor") {
                        var J = W, te = O.values;
                        return J && Object.create(J, { key: { get: function() {
                          return M.addKey(J.primaryKey), J.key;
                        } }, primaryKey: { get: function() {
                          var he = J.primaryKey;
                          return M.addKey(he), he;
                        } }, value: { get: function() {
                          return te && D.addKey(J.primaryKey), J.value;
                        } } });
                      }
                      return W;
                    });
                  }
                  M.add(i);
                }
              }
              return l[b].apply(this, arguments);
            };
          }), x;
        } });
      } };
      function Ns(t, r, i) {
        if (i.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return i.numFailures === u ? null : (r = s({}, r), p(r.keys) && (r.keys = r.keys.filter(function(l, f) {
          return !(f in i.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(l, f) {
          return !(f in i.failures);
        })), r);
      }
      function ci(t, r) {
        return i = t, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < me(i, u.lower) : 0 <= me(i, u.lower))) && (t = t, (r = r).upper === void 0 || (r.upperOpen ? me(t, r.upper) < 0 : me(t, r.upper) <= 0));
        var i, u;
      }
      function As(t, r, I, u, l, f) {
        if (!I || I.length === 0) return t;
        var h = r.query.index, y = h.multiEntry, v = r.query.range, E = u.schema.primaryKey.extractKey, x = h.extractKey, _ = (h.lowLevelIndex || h).extractKey, I = I.reduce(function(b, O) {
          var S = b, T = [];
          if (O.type === "add" || O.type === "put") for (var N = new Ze(), P = O.values.length - 1; 0 <= P; --P) {
            var D, M = O.values[P], V = E(M);
            N.hasKey(V) || (D = x(M), (y && p(D) ? D.some(function(J) {
              return ci(J, v);
            }) : ci(D, v)) && (N.addKey(V), T.push(M)));
          }
          switch (O.type) {
            case "add":
              var Y = new Ze().addKeys(r.values ? b.map(function(te) {
                return E(te);
              }) : b), S = b.concat(r.values ? T.filter(function(te) {
                return te = E(te), !Y.hasKey(te) && (Y.addKey(te), !0);
              }) : T.map(function(te) {
                return E(te);
              }).filter(function(te) {
                return !Y.hasKey(te) && (Y.addKey(te), !0);
              }));
              break;
            case "put":
              var G = new Ze().addKeys(O.values.map(function(te) {
                return E(te);
              }));
              S = b.filter(function(te) {
                return !G.hasKey(r.values ? E(te) : te);
              }).concat(r.values ? T : T.map(function(te) {
                return E(te);
              }));
              break;
            case "delete":
              var W = new Ze().addKeys(O.keys);
              S = b.filter(function(te) {
                return !W.hasKey(r.values ? E(te) : te);
              });
              break;
            case "deleteRange":
              var Z = O.range;
              S = b.filter(function(te) {
                return !ci(E(te), Z);
              });
          }
          return S;
        }, t);
        return I === t ? t : (I.sort(function(b, O) {
          return me(_(b), _(O)) || me(E(b), E(O));
        }), r.limit && r.limit < 1 / 0 && (I.length > r.limit ? I.length = r.limit : t.length === r.limit && I.length < r.limit && (l.dirty = !0)), f ? Object.freeze(I) : I);
      }
      function Cs(t, r) {
        return me(t.lower, r.lower) === 0 && me(t.upper, r.upper) === 0 && !!t.lowerOpen == !!r.lowerOpen && !!t.upperOpen == !!r.upperOpen;
      }
      function Xu(t, r) {
        return function(i, u, l, f) {
          if (i === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = me(i, u)) === 0) {
            if (l && f) return 0;
            if (l) return 1;
            if (f) return -1;
          }
          return u;
        }(t.lower, r.lower, t.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(i, u, l, f) {
          if (i === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = me(i, u)) === 0) {
            if (l && f) return 0;
            if (l) return -1;
            if (f) return 1;
          }
          return u;
        }(t.upper, r.upper, t.upperOpen, r.upperOpen);
      }
      function zu(t, r, i, u) {
        t.subscribers.add(i), u.addEventListener("abort", function() {
          var l, f;
          t.subscribers.delete(i), t.subscribers.size === 0 && (l = t, f = r, setTimeout(function() {
            l.subscribers.size === 0 && ge(f, l);
          }, 3e3));
        });
      }
      var Ju = { stack: "dbcore", level: 0, name: "Cache", create: function(t) {
        var r = t.schema.name;
        return s(s({}, t), { transaction: function(i, u, l) {
          var f, h, y = t.transaction(i, u, l);
          return u === "readwrite" && (h = (f = new AbortController()).signal, l = function(v) {
            return function() {
              if (f.abort(), u === "readwrite") {
                for (var E = /* @__PURE__ */ new Set(), x = 0, _ = i; x < _.length; x++) {
                  var I = _[x], b = En["idb://".concat(r, "/").concat(I)];
                  if (b) {
                    var O = t.table(I), S = b.optimisticOps.filter(function(te) {
                      return te.trans === y;
                    });
                    if (y._explicit && v && y.mutatedParts) for (var T = 0, N = Object.values(b.queries.query); T < N.length; T++) for (var P = 0, D = (Y = N[T]).slice(); P < D.length; P++) ri((G = D[P]).obsSet, y.mutatedParts) && (ge(Y, G), G.subscribers.forEach(function(te) {
                      return E.add(te);
                    }));
                    else if (0 < S.length) {
                      b.optimisticOps = b.optimisticOps.filter(function(te) {
                        return te.trans !== y;
                      });
                      for (var M = 0, V = Object.values(b.queries.query); M < V.length; M++) for (var Y, G, W, Z = 0, J = (Y = V[M]).slice(); Z < J.length; Z++) (G = J[Z]).res != null && y.mutatedParts && (v && !G.dirty ? (W = Object.isFrozen(G.res), W = As(G.res, G.req, S, O, G, W), G.dirty ? (ge(Y, G), G.subscribers.forEach(function(te) {
                        return E.add(te);
                      })) : W !== G.res && (G.res = W, G.promise = ee.resolve({ result: W }))) : (G.dirty && ge(Y, G), G.subscribers.forEach(function(te) {
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
          }, y.addEventListener("abort", l(!1), { signal: h }), y.addEventListener("error", l(!1), { signal: h }), y.addEventListener("complete", l(!0), { signal: h })), y;
        }, table: function(i) {
          var u = t.table(i), l = u.schema.primaryKey;
          return s(s({}, u), { mutate: function(f) {
            var h = ne.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(f);
            var y = En["idb://".concat(r, "/").concat(i)];
            return y ? (h = u.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || li(l, f).some(function(v) {
              return v == null;
            })) ? (y.optimisticOps.push(f), f.mutatedParts && to(f.mutatedParts), h.then(function(v) {
              0 < v.numFailures && (ge(y.optimisticOps, f), (v = Ns(0, f, v)) && y.optimisticOps.push(v), f.mutatedParts && to(f.mutatedParts));
            }), h.catch(function() {
              ge(y.optimisticOps, f), f.mutatedParts && to(f.mutatedParts);
            })) : h.then(function(v) {
              var E = Ns(0, s(s({}, f), { values: f.values.map(function(x, _) {
                var I;
                return v.failures[_] ? x : (x = (I = l.keyPath) !== null && I !== void 0 && I.includes(".") ? _t(x) : s({}, x), Se(x, l.keyPath, v.results[_]), x);
              }) }), v);
              y.optimisticOps.push(E), queueMicrotask(function() {
                return f.mutatedParts && to(f.mutatedParts);
              });
            }), h) : u.mutate(f);
          }, query: function(f) {
            if (!Ss(ne, u) || !Is("query", f)) return u.query(f);
            var h = ((E = ne.trans) === null || E === void 0 ? void 0 : E.db._options.cache) === "immutable", _ = ne, y = _.requery, v = _.signal, E = function(O, S, T, N) {
              var P = En["idb://".concat(O, "/").concat(S)];
              if (!P) return [];
              if (!(S = P.queries[T])) return [null, !1, P, null];
              var D = S[(N.query ? N.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (T) {
                case "query":
                  var M = D.find(function(V) {
                    return V.req.limit === N.limit && V.req.values === N.values && Cs(V.req.query.range, N.query.range);
                  });
                  return M ? [M, !0, P, D] : [D.find(function(V) {
                    return ("limit" in V.req ? V.req.limit : 1 / 0) >= N.limit && (!N.values || V.req.values) && Xu(V.req.query.range, N.query.range);
                  }), !1, P, D];
                case "count":
                  return M = D.find(function(V) {
                    return Cs(V.req.query.range, N.query.range);
                  }), [M, !!M, P, D];
              }
            }(r, i, "query", f), x = E[0], _ = E[1], I = E[2], b = E[3];
            return x && _ ? x.obsSet = f.obsSet : (_ = u.query(f).then(function(O) {
              var S = O.result;
              if (x && (x.res = S), h) {
                for (var T = 0, N = S.length; T < N; ++T) Object.freeze(S[T]);
                Object.freeze(S);
              } else O.result = _t(S);
              return O;
            }).catch(function(O) {
              return b && x && ge(b, x), Promise.reject(O);
            }), x = { obsSet: f.obsSet, promise: _, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, b ? b.push(x) : (b = [x], (I = I || (En["idb://".concat(r, "/").concat(i)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = b)), zu(x, b, y, v), x.promise.then(function(O) {
              return { result: As(O.result, f, I?.optimisticOps, u, x, h) };
            });
          } });
        } });
      } };
      function ro(t, r) {
        return new Proxy(t, { get: function(i, u, l) {
          return u === "db" ? r : Reflect.get(i, u, l);
        } });
      }
      var Gt = (Ue.prototype.version = function(t) {
        if (isNaN(t) || t < 0.1) throw new oe.Type("Given version is not a positive number");
        if (t = Math.round(10 * t) / 10, this.idbdb || this._state.isBeingOpened) throw new oe.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, t);
        var r = this._versions, i = r.filter(function(u) {
          return u._cfg.version === t;
        })[0];
        return i || (i = new this.Version(t), r.push(i), r.sort(Uu), i.stores({}), this._state.autoSchema = !1, i);
      }, Ue.prototype._whenReady = function(t) {
        var r = this;
        return this.idbdb && (this._state.openComplete || ne.letThrough || this._vip) ? t() : new ee(function(i, u) {
          if (r._state.openComplete) return u(new oe.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new oe.DatabaseClosed());
            r.open().catch(g);
          }
          r._state.dbReadyPromise.then(i, u);
        }).then(t);
      }, Ue.prototype.use = function(t) {
        var r = t.stack, i = t.create, u = t.level, l = t.name;
        return l && this.unuse({ stack: r, name: l }), t = this._middlewares[r] || (this._middlewares[r] = []), t.push({ stack: r, create: i, level: u ?? 10, name: l }), t.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Ue.prototype.unuse = function(t) {
        var r = t.stack, i = t.name, u = t.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(l) {
          return u ? l.create !== u : !!i && l.name !== i;
        })), this;
      }, Ue.prototype.open = function() {
        var t = this;
        return vn(Be, function() {
          return Gu(t);
        });
      }, Ue.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var t = this._state, r = Ln.indexOf(this);
        if (0 <= r && Ln.splice(r, 1), this.idbdb) {
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
      }, Ue.prototype.close = function(i) {
        var r = (i === void 0 ? { disableAutoOpen: !0 } : i).disableAutoOpen, i = this._state;
        r ? (i.isBeingOpened && i.cancelOpen(new oe.DatabaseClosed()), this._close(), i.autoOpen = !1, i.dbOpenError = new oe.DatabaseClosed()) : (this._close(), i.autoOpen = this._options.autoOpen || i.isBeingOpened, i.openComplete = !1, i.dbOpenError = null);
      }, Ue.prototype.delete = function(t) {
        var r = this;
        t === void 0 && (t = { disableAutoOpen: !0 });
        var i = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new ee(function(l, f) {
          function h() {
            r.close(t);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = je(function() {
              var v, E, x;
              v = r._deps, E = r.name, x = v.indexedDB, v = v.IDBKeyRange, ei(x) || E === Fr || Zo(x, v).delete(E).catch(g), l();
            }), y.onerror = Pt(f), y.onblocked = r._fireOnBlocked;
          }
          if (i) throw new oe.InvalidArgument("Invalid closeOptions argument to db.delete()");
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
        var t = (function(r, i, u) {
          var l = arguments.length;
          if (l < 2) throw new oe.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return u = f.pop(), [r, Nt(f), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, t);
      }, Ue.prototype._transaction = function(t, r, i) {
        var u = this, l = ne.trans;
        l && l.db === this && t.indexOf("!") === -1 || (l = null);
        var f, h, y = t.indexOf("?") !== -1;
        t = t.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(E) {
            if (E = E instanceof u.Table ? E.name : E, typeof E != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return E;
          }), t == "r" || t === Fo) f = Fo;
          else {
            if (t != "rw" && t != Vo) throw new oe.InvalidArgument("Invalid transaction mode: " + t);
            f = Vo;
          }
          if (l) {
            if (l.mode === Fo && f === Vo) {
              if (!y) throw new oe.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              l = null;
            }
            l && h.forEach(function(E) {
              if (l && l.storeNames.indexOf(E) === -1) {
                if (!y) throw new oe.SubTransaction("Table " + E + " not included in parent transaction.");
                l = null;
              }
            }), y && l && !l.active && (l = null);
          }
        } catch (E) {
          return l ? l._promise(null, function(x, _) {
            _(E);
          }) : Ke(E);
        }
        var v = (function E(x, _, I, b, O) {
          return ee.resolve().then(function() {
            var S = ne.transless || ne, T = x._createTransaction(_, I, x._dbSchema, b);
            if (T.explicit = !0, S = { trans: T, transless: S }, b) T.idbtrans = b.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, x._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === Zt.InvalidState && x.isOpen() && 0 < --x._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), x.close({ disableAutoOpen: !1 }), x.open().then(function() {
                return E(x, _, I, null, O);
              })) : Ke(D);
            }
            var N, P = Ot(O);
            return P && Bn(), S = ee.follow(function() {
              var D;
              (N = O.call(T, T)) && (P ? (D = rn.bind(null, null), N.then(D, D)) : typeof N.next == "function" && typeof N.throw == "function" && (N = ai(N)));
            }, S), (N && typeof N.then == "function" ? ee.resolve(N).then(function(D) {
              return T.active ? D : Ke(new oe.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : S.then(function() {
              return N;
            })).then(function(D) {
              return b && T._resolve(), T._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return T._reject(D), Ke(D);
            });
          });
        }).bind(null, this, f, h, l, i);
        return l ? l._promise(f, v, "lock") : ne.trans ? vn(ne.transless, function() {
          return u._whenReady(v);
        }) : this._whenReady(v);
      }, Ue.prototype.table = function(t) {
        if (!C(this._allTables, t)) throw new oe.InvalidTable("Table ".concat(t, " does not exist"));
        return this._allTables[t];
      }, Ue);
      function Ue(t, r) {
        var i = this;
        this._middlewares = {}, this.verno = 0;
        var u = Ue.dependencies;
        this._options = r = s({ addons: Ue.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, y, v, E = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: g, dbReadyPromise: null, cancelOpen: g, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        E.dbReadyPromise = new ee(function(_) {
          E.dbReadyResolve = _;
        }), E.openCanceller = new ee(function(_, I) {
          E.cancelOpen = I;
        }), this._state = E, this.name = t, this.on = ir(this, "populate", "blocked", "versionchange", "close", { ready: [$, g] }), this.once = function(_, I) {
          var b = function() {
            for (var O = [], S = 0; S < arguments.length; S++) O[S] = arguments[S];
            i.on(_).unsubscribe(b), I.apply(i, O);
          };
          return i.on(_, b);
        }, this.on.ready.subscribe = Oe(this.on.ready.subscribe, function(_) {
          return function(I, b) {
            Ue.vip(function() {
              var O, S = i._state;
              S.openComplete ? (S.dbOpenError || ee.resolve().then(I), b && _(I)) : S.onReadyBeingFired ? (S.onReadyBeingFired.push(I), b && _(I)) : (_(I), O = i, b || _(function T() {
                O.on.ready.unsubscribe(I), O.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (l = this, sr(Du.prototype, function(N, T) {
          this.db = l;
          var b = as, O = null;
          if (T) try {
            b = T();
          } catch (P) {
            O = P;
          }
          var S = N._ctx, T = S.table, N = T.hook.reading.fire;
          this._ctx = { table: T, index: S.index, isPrimKey: !S.index || T.schema.primKey.keyPath && S.index === T.schema.primKey.name, range: b, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: O, or: S.or, valueMapper: N !== w ? N : null };
        })), this.Table = (f = this, sr(fs.prototype, function(_, I, b) {
          this.db = f, this._tx = b, this.name = _, this.schema = I, this.hook = f._allTables[_] ? f._allTables[_].hook : ir(null, { creating: [U, g], reading: [B, w], updating: [Q, g], deleting: [F, g] });
        })), this.Transaction = (h = this, sr(ju.prototype, function(_, I, b, O, S) {
          var T = this;
          _ !== "readonly" && I.forEach(function(N) {
            N = (N = b[N]) === null || N === void 0 ? void 0 : N.yProps, N && (I = I.concat(N.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = _, this.storeNames = I, this.schema = b, this.chromeTransactionDurability = O, this.idbtrans = null, this.on = ir(this, "complete", "error", "abort"), this.parent = S || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ee(function(N, P) {
            T._resolve = N, T._reject = P;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(N) {
            var P = T.active;
            return T.active = !1, T.on.error.fire(N), T.parent ? T.parent._reject(N) : P && T.idbtrans && T.idbtrans.abort(), Ke(N);
          });
        })), this.Version = (y = this, sr(Vu.prototype, function(_) {
          this.db = y, this._cfg = { version: _, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (v = this, sr(ys.prototype, function(_, I, b) {
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
        }), this._maxKey = cr(r.IDBKeyRange), this._createTransaction = function(_, I, b, O) {
          return new i.Transaction(_, I, b, i._options.chromeTransactionDurability, O);
        }, this._fireOnBlocked = function(_) {
          i.on("blocked").fire(_), Ln.filter(function(I) {
            return I.name === i.name && I !== i && !I._state.vcFired;
          }).map(function(I) {
            return I.on("versionchange").fire(_);
          });
        }, this.use($u), this.use(Ju), this.use(Yu), this.use(qu), this.use(Wu);
        var x = new Proxy(this, { get: function(_, I, b) {
          if (I === "_vip") return !0;
          if (I === "table") return function(S) {
            return ro(i.table(S), x);
          };
          var O = Reflect.get(_, I, b);
          return O instanceof fs ? ro(O, x) : I === "tables" ? O.map(function(S) {
            return ro(S, x);
          }) : I === "_createTransaction" ? function() {
            return ro(O.apply(this, arguments), x);
          } : O;
        } });
        this.vip = x, u.forEach(function(_) {
          return _(i);
        });
      }
      var oo, wt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Qu = (fi.prototype.subscribe = function(t, r, i) {
        return this._subscribe(t && typeof t != "function" ? t : { next: t, error: r, complete: i });
      }, fi.prototype[wt] = function() {
        return this;
      }, fi);
      function fi(t) {
        this._subscribe = t;
      }
      try {
        oo = { indexedDB: c.indexedDB || c.mozIndexedDB || c.webkitIndexedDB || c.msIndexedDB, IDBKeyRange: c.IDBKeyRange || c.webkitIDBKeyRange };
      } catch {
        oo = { indexedDB: null, IDBKeyRange: null };
      }
      function Ps(t) {
        var r, i = !1, u = new Qu(function(l) {
          var f = Ot(t), h, y = !1, v = {}, E = {}, x = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), _ && an.storagemutated.unsubscribe(b));
          } };
          l.start && l.start(x);
          var _ = !1, I = function() {
            return Ho(O);
          }, b = function(S) {
            eo(v, S), ri(E, v) && I();
          }, O = function() {
            var S, T, N;
            !y && oo.indexedDB && (v = {}, S = {}, h && h.abort(), h = new AbortController(), N = function(P) {
              var D = Mn();
              try {
                f && Bn();
                var M = nn(t, P);
                return M = f ? M.finally(rn) : M;
              } finally {
                D && jn();
              }
            }(T = { subscr: S, signal: h.signal, requery: I, querier: t, trans: null }), Promise.resolve(N).then(function(P) {
              i = !0, r = P, y || T.signal.aborted || (v = {}, function(D) {
                for (var M in D) if (C(D, M)) return;
                return 1;
              }(E = S) || _ || (an(lr, b), _ = !0), Ho(function() {
                return !y && l.next && l.next(P);
              }));
            }, function(P) {
              i = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || y || Ho(function() {
                y || l.error && l.error(P);
              });
            }));
          };
          return setTimeout(I, 0), x;
        });
        return u.hasValue = function() {
          return i;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var On = Gt;
      function di(t) {
        var r = un;
        try {
          un = !0, an.storagemutated.fire(t), si(t, !0);
        } finally {
          un = r;
        }
      }
      L(On, s(s({}, or), { delete: function(t) {
        return new On(t, { addons: [] }).delete();
      }, exists: function(t) {
        return new On(t, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(t) {
        try {
          return r = On.dependencies, i = r.indexedDB, r = r.IDBKeyRange, (ei(i) ? Promise.resolve(i.databases()).then(function(u) {
            return u.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== Fr;
            });
          }) : Zo(i, r).toCollection().primaryKeys()).then(t);
        } catch {
          return Ke(new oe.MissingAPI());
        }
        var r, i;
      }, defineClass: function() {
        return function(t) {
          m(this, t);
        };
      }, ignoreTransaction: function(t) {
        return ne.trans ? vn(ne.transless, t) : t();
      }, vip: ti, async: function(t) {
        return function() {
          try {
            var r = ai(t.apply(this, arguments));
            return r && typeof r.then == "function" ? r : ee.resolve(r);
          } catch (i) {
            return Ke(i);
          }
        };
      }, spawn: function(t, r, i) {
        try {
          var u = ai(t.apply(i, r || []));
          return u && typeof u.then == "function" ? u : ee.resolve(u);
        } catch (l) {
          return Ke(l);
        }
      }, currentTransaction: { get: function() {
        return ne.trans || null;
      } }, waitFor: function(t, r) {
        return r = ee.resolve(typeof t == "function" ? On.ignoreTransaction(t) : t).timeout(r || 6e4), ne.trans ? ne.trans.waitFor(r) : r;
      }, Promise: ee, debug: { get: function() {
        return K;
      }, set: function(t) {
        se(t);
      } }, derive: q, extend: m, props: L, override: Oe, Events: ir, on: an, liveQuery: Ps, extendObservabilitySet: eo, getByKeyPath: Ne, setByKeyPath: Se, delByKeyPath: function(t, r) {
        typeof r == "string" ? Se(t, r, void 0) : "length" in r && [].map.call(r, function(i) {
          Se(t, i, void 0);
        });
      }, shallowClone: yt, deepClone: _t, getObjectDiff: ui, cmp: me, asap: Ie, minKey: -1 / 0, addons: [], connections: Ln, errnames: Zt, dependencies: oo, cache: En, semVer: "4.2.0", version: "4.2.0".split(".").map(function(t) {
        return parseInt(t);
      }).reduce(function(t, r, i) {
        return t + r / Math.pow(10, 2 * i);
      }) })), On.maxKey = cr(On.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (an(lr, function(t) {
        un || (t = new CustomEvent(Wo, { detail: t }), un = !0, dispatchEvent(t), un = !1);
      }), addEventListener(Wo, function(t) {
        t = t.detail, un || di(t);
      }));
      var Fn, un = !1, Ds = function() {
      };
      return typeof BroadcastChannel < "u" && ((Ds = function() {
        (Fn = new BroadcastChannel(Wo)).onmessage = function(t) {
          return t.data && di(t.data);
        };
      })(), typeof Fn.unref == "function" && Fn.unref(), an(lr, function(t) {
        un || Fn.postMessage(t);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(t) {
        if (!Gt.disableBfCache && t.persisted) {
          K && console.debug("Dexie: handling persisted pagehide"), Fn?.close();
          for (var r = 0, i = Ln; r < i.length; r++) i[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(t) {
        !Gt.disableBfCache && t.persisted && (K && console.debug("Dexie: handling persisted pageshow"), Ds(), di({ all: new Ze(-1 / 0, [[]]) }));
      })), ee.rejectionMapper = function(t, r) {
        return !t || t instanceof Ft || t instanceof TypeError || t instanceof SyntaxError || !t.name || !en[t.name] ? t : (r = new en[t.name](r || t.message, t), "stack" in t && j(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, se(K), s(Gt, Object.freeze({ __proto__: null, Dexie: Gt, liveQuery: Ps, Entity: us, cmp: me, PropModification: ar, replacePrefix: function(t, r) {
        return new ar({ replacePrefix: [t, r] });
      }, add: function(t) {
        return new ar({ add: t });
      }, remove: function(t) {
        return new ar({ remove: t });
      }, default: Gt, RangeSet: Ze, mergeRanges: pr, rangesOverlap: Es }), { default: Gt }), Gt;
    });
  }(mo)), mo.exports;
}
var Pf = Cf();
const Bi = /* @__PURE__ */ Nf(Pf), ha = Symbol.for("Dexie"), Oo = globalThis[ha] || (globalThis[ha] = Bi);
if (Bi.semVer !== Oo.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Bi.semVer} and ${Oo.semVer}`);
const {
  liveQuery: yd,
  mergeRanges: _d,
  rangesOverlap: vd,
  RangeSet: bd,
  cmp: wd,
  Entity: Ed,
  PropModification: Od,
  replacePrefix: xd,
  add: Td,
  remove: Rd,
  DexieYProvider: Sd
} = Oo;
var Tt = /* @__PURE__ */ ((e) => (e.GOOSE = "GOOSE", e.SMV = "SMV", e.REPORT = "Report", e.INTERNAL = "Internal", e.WIRED = "Wired", e.CONTROL = "Control", e))(Tt || {});
const ma = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Internal: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: []
  // TODO
};
function Tu(e) {
  return {
    addRecord: n,
    findChildRecordsByTagName: s,
    ensureRelationship: o,
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
  async function o(c, d) {
    const p = c.children?.some(
      (A) => A.id === d.id && A.tagName === d.tagName
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
        const A = m.tagName, R = m.id;
        return await e.table(A).get({ id: R });
      })
    );
  }
  async function a(c, d, p = []) {
    const m = [];
    let A = c;
    for (let R = 0; R < d; R++) {
      if (!A.parent)
        return m;
      const C = await e.table(A.parent.tagName).get(A.parent.id);
      if (!C) {
        const L = {
          msg: "Parent record not found",
          table: A.parent.tagName,
          id: A.parent.id
        };
        throw console.error(L), new Error(JSON.stringify(L));
      }
      (p.length == 0 || p.length > 0 && p.includes(C.tagName)) && m.push(C), A = C;
    }
    return m;
  }
}
function Df(e, n) {
  return e.attributes?.find((o) => o.name === n);
}
function Ae(e, n) {
  return e?.attributes?.find((o) => o.name === n)?.value;
}
function kf(e) {
  return {
    findAllEnrichedLNodes: n,
    findAllLNodeTypes: o,
    enrichWithDataObjectSpecifications: c
  };
  async function n() {
    const p = await d();
    return p.length ? await c(p) : [];
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
      const R = await e.table("DO").get(A.id);
      R && m.push({
        id: R.id,
        name: Ae(R, "name") ?? "",
        type: Ae(R, "type") ?? "",
        dataAttributes: await a(R),
        lnodeTypeId: p.id
      });
    }
    return m;
  }
  async function a(p) {
    const m = Ae(p, "type");
    if (!m) return [];
    const A = (await e.table("DOType").toArray()).find(
      (C) => C.attributes?.find((L) => L.name === "id" && L.value === m)
    );
    if (!A || !A.children) return [];
    const R = [];
    for (const C of A.children) {
      if (C.tagName !== "DA") continue;
      const L = await e.table("DA").get(C.id);
      L && R.push({
        id: L.id,
        name: Ae(L, "name") ?? "",
        type: Ae(L, "type") ?? "",
        bType: Ae(L, "bType") ?? "",
        fc: Ae(L, "fc") ?? "",
        dataObjectId: p.id
      });
    }
    return R;
  }
  async function c(p) {
    const m = await e.table("Private").toArray(), A = await e.table("DOS").toArray(), R = await e.table("DAS").toArray(), C = await e.table("SubscriberLNode").toArray();
    return Promise.all(
      p.map(async (L) => {
        const k = m.find(
          (q) => q.parent?.id === L.id && q.parent?.tagName === "LNode" && Ae(q, "type") === "eIEC61850-6-100"
        );
        if (!k || !k.children)
          return { ...L, dataObjectSpecifications: [] };
        const j = [];
        for (const q of k.children) {
          if (q.tagName !== "DOS") continue;
          const Re = A.find((Ee) => Ee.id === q.id);
          if (!Re) continue;
          const we = [];
          if (Re.children)
            for (const Ee of Re.children) {
              if (Ee.tagName !== "DAS") continue;
              const Oe = R.find((Ie) => Ie.id === Ee.id);
              if (!Oe) continue;
              let ae;
              if (Oe.children) {
                const Ie = Oe.children.find((Ne) => Ne.tagName === "SubscriberLNode");
                if (Ie) {
                  const Ne = C.find((Se) => Se.id === Ie.id);
                  Ne && (ae = {
                    id: Ne.id,
                    inputName: Ae(Ne, "inputName") ?? "",
                    service: Ru(Ne, "service"),
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
          j.push({
            id: Re.id,
            name: Ae(Re, "name") ?? "",
            desc: Ae(Re, "desc") ?? "",
            dataAttributeSpecifications: we,
            lNodeId: L.id
          });
        }
        return { ...L, dataObjectSpecifications: j };
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
function Ru(e, n) {
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
async function Su(e) {
  try {
    const n = new Oo(e);
    return await n.open(), n;
  } catch (n) {
    throw console.error("Error opening database:", n), n;
  }
}
function Mf(e) {
  const n = Tu(e);
  return {
    findAllExistingFromDB: o
  };
  async function o() {
    const s = await e.table("SourceRef").toArray();
    if (!s.length) return [];
    const a = [];
    for (const c of s) {
      if (!c.attributes) continue;
      const d = Ae(c, "sourceLNodeUuid"), p = Ae(c, "sourceDoName"), m = Ae(c, "sourceDaName"), A = await e.table("LNode").toArray().then(
        (k) => k.find(
          (j) => j.attributes?.some(
            (q) => q.name === "uuid" && q.value === d
          )
        )?.id
      ) || null, R = [d, p, m, A];
      if (R.some((k) => !k)) {
        console.log(`source attribute from SourceRef missing: ${R.join(", ")}`);
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
      const L = {
        sourceLNodeId: A,
        destinationLNodeId: C[0].id,
        sourceDataObject: p,
        sourceDataAttribute: m,
        dataflowType: Ru(c, "service"),
        inputInstance: Ae(c, "inputInst") || "",
        input: Ae(c, "input") || ""
      };
      a.push(L);
    }
    return a;
  }
}
function xo(e) {
  return `${e.prefix} ${e.lnClass} ${e.lnInst}`;
}
const jf = ["value"], Bf = ["value"], Lf = ["value"], Kf = ["value"], Uf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Hf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Ff = ["data-testid"], Vf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Gf = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, qf = /* @__PURE__ */ Po({
  __name: "dataflow-visualisation",
  props: {
    lnodes: {},
    connections: {}
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(e, { emit: n }) {
    const o = n, s = e;
    hn(
      () => s.lnodes,
      () => {
        a.value = void 0, c.value = void 0;
      }
    );
    const a = jt(), c = jt(), d = Jn(
      () => s.lnodes.filter((C) => C.id !== c.value)
    ), p = Jn(
      () => s.lnodes.filter((C) => C.id !== a.value)
    ), m = Jn(() => !a.value || !c.value ? [] : s.connections.filter(
      (C) => C.sourceLNodeId === a.value && C.destinationLNodeId === c.value
    ));
    function A(C) {
      a.value = C, o("sourceLNodeChange", C);
    }
    function R(C) {
      c.value = C, o("destinationLNodeChange", C);
    }
    return (C, L) => (Ge(), Xe("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full min-h-[500px] mb-8",
      style: xt({ gridTemplateRows: `100px repeat(${m.value.length + 1}, 50px)` })
    }, [
      L[6] || (L[6] = re("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      re("select", {
        value: a.value ?? "",
        onChange: L[0] || (L[0] = (k) => A(k.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        L[2] || (L[2] = vu(" > ")),
        L[3] || (L[3] = re("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (Ge(!0), Xe(rt, null, Xn(d.value, (k) => (Ge(), Xe("option", {
          key: k.id,
          value: k.id
        }, ht(Nn(xo)(k)), 9, Bf))), 128))
      ], 40, jf),
      L[7] || (L[7] = re("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[500px]" }, null, -1)),
      re("select", {
        value: c.value ?? "",
        onChange: L[1] || (L[1] = (k) => R(k.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        L[4] || (L[4] = re("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (Ge(!0), Xe(rt, null, Xn(p.value, (k) => (Ge(), Xe("option", {
          key: k.id,
          value: k.id
        }, ht(Nn(xo)(k)), 9, Kf))), 128))
      ], 40, Lf),
      (Ge(!0), Xe(rt, null, Xn(m.value, (k, j) => (Ge(), Xe(rt, null, [
        re("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end",
          style: xt({ gridRowStart: j + 2 })
        }, [
          re("span", Uf, ht(k.sourceDataObject), 1),
          re("span", Hf, ht(k.sourceDataAttribute), 1)
        ], 4),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[9px]",
          style: xt({ gridRowStart: j + 2 })
        }, null, 4),
        re("div", {
          class: "col-start-3 col-span-1 h-[2px] bg-(--color-ocean-gray-100) self-center",
          style: xt({ gridRowStart: j + 2 }),
          "data-testid": `dataflow-line-${j}`
        }, null, 12, Ff),
        (Ge(), Xe("svg", {
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px]",
          style: xt({ gridRowStart: j + 2 }),
          xmlns: "http://www.w3.org/2000/svg"
        }, L[5] || (L[5] = [
          re("polygon", {
            points: "0,0 8,6 0,12",
            style: { fill: "var(--color-ocean-gray-100)" }
          }, null, -1)
        ]), 4)),
        re("div", {
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm",
          style: xt({ gridRowStart: j + 2 })
        }, ht(k.dataflowType), 5),
        re("div", {
          class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px]",
          style: xt({ gridRowStart: j + 2 })
        }, null, 4),
        re("div", {
          class: "col-start-5 col-span-1 self-center justify-self-start",
          style: xt({ gridRowStart: j + 2 })
        }, [
          re("span", Vf, ht(k.input), 1),
          re("span", Gf, ht(k.inputInstance), 1)
        ], 4)
      ], 64))), 256))
    ], 4));
  }
});
function Wf(e) {
  const n = Tu(e);
  return {
    create: o
  };
  async function o(s, a, c) {
    const d = await $f(e, n, c);
    await Yf(n, a, d, s);
  }
}
async function $f(e, n, o) {
  const s = await e.table("LNode").get({ id: o.id });
  if (!s || !s.children || s.children.length == 0) {
    const p = {
      msg: `LNode element with uuid ${o.uuid} not found or empty`
    };
    throw console.error(p), new Error(JSON.stringify(p));
  }
  const a = await n.findChildRecordsByTagName(s, "Private");
  if (!a.filter((p) => Df(p, "type")?.value === "eIEC61850-6-100").at(0)) {
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
async function Yf(e, n, o, s) {
  const a = await Ti(
    e,
    s,
    n,
    o.namespace
  );
  if (await e.ensureRelationship(o, a), s.includeQuality) {
    let c = structuredClone(ve(s));
    c.attribute = "q";
    const d = await Ti(
      e,
      c,
      n,
      o.namespace
    );
    await e.ensureRelationship(o, d);
  }
  if (s.includeTimestamp) {
    let c = structuredClone(ve(s));
    c.attribute = "t";
    const d = await Ti(
      e,
      c,
      n,
      o.namespace
    );
    await e.ensureRelationship(o, d);
  }
}
async function Ti(e, n, o, s) {
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
const Xf = ["open"], zf = { class: "modal-box" }, Jf = { class: "grid grid-cols-2 gap-4 mt-4" }, Qf = ["value"], Zf = { class: "grid grid-cols-2 gap-4 mt-4" }, ed = ["value"], td = { class: "grid grid-cols-2 gap-4 mt-4" }, nd = ["value"], rd = { class: "grid grid-cols-2 gap-4 mt-4" }, od = ["value"], id = { class: "grid grid-cols-2 gap-4 mt-4" }, sd = ["value"], ad = { class: "grid grid-cols-2 gap-4 mt-4" }, ud = { class: "grid grid-cols-2 gap-4 mt-4" }, ld = { class: "mt-4" }, cd = { class: "mt-4" }, fd = /* @__PURE__ */ Po({
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
    hn(
      () => a.value.signal,
      (k, j) => {
        a.value.inputName = k;
      }
    ), hn(
      () => a.value.inputName,
      () => {
        a.value.inputInstance = "1";
      }
    ), hn(
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
    const c = Jn(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((k) => k.typeId === o.sourceLNode?.lnType)?.dataObjects.filter(
      (k) => k.dataAttributes.some(
        (j) => ma[a.value.type].includes(
          j.fc
        )
      )
    ).map((k) => k.name)), d = Jn(() => !a.value.type || !o.sourceLNode ? [] : o.lnodeTypes.find((k) => k.typeId === o.sourceLNode?.lnType)?.dataObjects.find((k) => k.name === a.value.signal)?.dataAttributes.filter(
      (k) => ma[a.value.type].includes(
        k.fc
      )
    ).filter((k) => k.name !== "t" && k.name !== "q").map((k) => k.name) || []);
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
      for (const j of k)
        a.value[j] = "";
    }
    function A() {
      L(), s("update:isOpen", !1);
    }
    async function R() {
      try {
        if (!C(a.value))
          return;
        const k = localStorage.getItem("currentActiveFileDatabaseName");
        if (!k)
          throw new Error("no active file");
        const j = await Su(k);
        await Wf(j).create(
          a.value,
          o.sourceLNode,
          o.destinationLNode
        ), j.close(), s("connectionCreated"), A();
      } catch (k) {
        console.error("Error creating dataflow:", k), alert(`Error creating dataflow: ${k instanceof Error ? k.message : "Unknown error"}`);
      }
    }
    function C(k) {
      return k.type ? k.signal ? k.attribute ? k.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function L() {
      a.value = p();
    }
    return (k, j) => (Ge(), Xe("dialog", {
      class: "modal",
      open: k.isOpen
    }, [
      re("div", zf, [
        j[24] || (j[24] = re("h3", { class: "text-lg font-bold" }, "Create Connection", -1)),
        re("button", {
          class: "absolute top-[1.5rem] right-[1.5rem] cursor-pointer",
          onClick: A,
          "aria-label": "Close"
        }, j[11] || (j[11] = [
          re("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "28",
            height: "28",
            viewBox: "0 0 64 64"
          }, [
            re("path", { d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z" })
          ], -1)
        ])),
        re("div", Jf, [
          j[13] || (j[13] = re("label", {
            for: "dataflow-type-select",
            class: "col-start-1 self-center"
          }, "Dataflow Type", -1)),
          Wt(re("select", {
            id: "dataflow-type-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": j[0] || (j[0] = (q) => a.value.type = q),
            onChange: j[1] || (j[1] = (q) => m(["signal", "attribute"]))
          }, [
            (Ge(!0), Xe(rt, null, Xn(Object.values(Nn(Tt)), (q) => (Ge(), Xe("option", {
              key: q,
              value: q
            }, ht(q), 9, Qf))), 128)),
            j[12] || (j[12] = re("option", {
              key: "empty",
              value: null
            }, "-", -1))
          ], 544), [
            [gr, a.value.type]
          ])
        ]),
        j[25] || (j[25] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", Zf, [
          j[14] || (j[14] = re("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          Wt(re("select", {
            id: "source-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": j[2] || (j[2] = (q) => o.sourceLNode.id = q)
          }, [
            re("option", {
              value: o.sourceLNode.id
            }, ht(Nn(xo)(k.sourceLNode)), 9, ed)
          ], 512), [
            [gr, o.sourceLNode.id]
          ])
        ]),
        re("div", td, [
          j[16] || (j[16] = re("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          Wt(re("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": j[3] || (j[3] = (q) => a.value.signal = q),
            onChange: j[4] || (j[4] = (q) => m(["attribute"]))
          }, [
            (Ge(!0), Xe(rt, null, Xn(c.value, (q) => (Ge(), Xe("option", {
              key: q,
              value: q
            }, ht(q), 9, nd))), 128)),
            j[15] || (j[15] = re("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 544), [
            [gr, a.value.signal]
          ])
        ]),
        re("div", rd, [
          j[18] || (j[18] = re("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          Wt(re("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": j[5] || (j[5] = (q) => a.value.attribute = q)
          }, [
            (Ge(!0), Xe(rt, null, Xn(d.value, (q) => (Ge(), Xe("option", {
              key: q,
              value: q
            }, ht(q), 9, od))), 128)),
            j[17] || (j[17] = re("option", {
              key: "empty",
              value: ""
            }, "-", -1))
          ], 512), [
            [gr, a.value.attribute]
          ])
        ]),
        j[26] || (j[26] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", id, [
          j[19] || (j[19] = re("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          Wt(re("select", {
            id: "destination-select",
            required: "",
            disabled: "",
            class: "select col-start-2",
            "onUpdate:modelValue": j[6] || (j[6] = (q) => o.destinationLNode.id = q)
          }, [
            re("option", {
              value: o.destinationLNode.id
            }, ht(Nn(xo)(k.destinationLNode)), 9, sd)
          ], 512), [
            [gr, o.destinationLNode.id]
          ])
        ]),
        re("div", ad, [
          j[20] || (j[20] = re("label", {
            for: "input-name-input",
            class: "col-start-1 self-center"
          }, "Input Name", -1)),
          Wt(re("input", {
            id: "input-name-input",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": j[7] || (j[7] = (q) => a.value.inputName = q)
          }, null, 512), [
            [ua, a.value.inputName]
          ])
        ]),
        re("div", ud, [
          j[21] || (j[21] = re("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          Wt(re("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": j[8] || (j[8] = (q) => a.value.inputInstance = q)
          }, null, 512), [
            [ua, a.value.inputInstance]
          ])
        ]),
        j[27] || (j[27] = re("hr", { class: "solid mt-4" }, null, -1)),
        re("div", ld, [
          Wt(re("input", {
            type: "checkbox",
            "onUpdate:modelValue": j[9] || (j[9] = (q) => a.value.includeQuality = q),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [la, a.value.includeQuality]
          ]),
          j[22] || (j[22] = re("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        re("div", cd, [
          Wt(re("input", {
            type: "checkbox",
            "onUpdate:modelValue": j[10] || (j[10] = (q) => a.value.includeTimestamp = q),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [la, a.value.includeTimestamp]
          ]),
          j[23] || (j[23] = re("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        re("div", { class: "modal-action" }, [
          re("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            onClick: R
          }, " Save ")
        ])
      ])
    ], 8, Xf));
  }
}), dd = { class: "flex flex-col items-center justify-center w-full" }, pd = ["disabled"], hd = /* @__PURE__ */ Po({
  __name: "dataflow-view",
  props: {
    sdks: {}
  },
  setup(e) {
    const n = e, o = jt(), s = jt(), a = jt(!1), c = jt([]), d = jt([]), p = jt([]);
    hn(
      () => n.sdks,
      () => {
        m(), A();
      },
      { immediate: !0 }
    );
    async function m() {
      n.sdks && (c.value = await n.sdks.lnodeSDK.findAllEnrichedLNodes(), p.value = await n.sdks.lnodeSDK.findAllLNodeTypes());
    }
    async function A() {
      n.sdks && (d.value = await n.sdks.connectionSDK.findAllExistingFromDB());
    }
    function R(j) {
      o.value = L(j);
    }
    function C(j) {
      s.value = L(j);
    }
    function L(j) {
      return c.value.find((q) => q.id === j) ?? void 0;
    }
    function k() {
      a.value = !0;
    }
    return (j, q) => (Ge(), Xe("div", dd, [
      It(qf, {
        connections: d.value,
        lnodes: c.value,
        onSourceLNodeChange: R,
        onDestinationLNodeChange: C
      }, null, 8, ["connections", "lnodes"]),
      re("button", {
        disabled: !o.value || !s.value,
        class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
        onClick: k
      }, " + ", 8, pd),
      o.value && s.value ? (Ge(), gu(fd, {
        key: 0,
        isOpen: a.value,
        "onUpdate:isOpen": q[0] || (q[0] = (Re) => a.value = Re),
        sourceLNode: o.value,
        destinationLNode: s.value,
        lnodeTypes: p.value,
        onConnectionCreated: A
      }, null, 8, ["isOpen", "sourceLNode", "destinationLNode", "lnodeTypes"])) : Fc("", !0)
    ]));
  }
}), md = { class: "p-10" }, gd = /* @__PURE__ */ Po({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    let n = jt();
    Ja(() => {
      window.addEventListener("storage", o), s();
    }), Qi(() => {
      window.removeEventListener("storage", o);
    });
    async function o(c) {
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
      const d = await Su(c);
      if (!d) throw new Error("database is not initialized.");
      n.value = {
        db: d,
        lnodeSDK: kf(d),
        connectionSDK: Mf(d)
      };
    }
    return (c, d) => (Ge(), Xe("div", md, [
      It(hd, { sdks: Nn(n) }, null, 8, ["sdks"])
    ]));
  }
});
function Id(e, n) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Tf(gd, { api: n }).mount(`#${e}`);
}
export {
  Id as default
};
