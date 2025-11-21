(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.backdrop[data-v-9cc5b747]{position:fixed;inset:0;z-index:5;width:100vw;height:100vh;background:transparent}.layout[data-v-5f95d421]{display:grid;height:100%;grid-template-columns:1fr 20rem}.sidebar[data-v-5f95d421]{padding:1.5rem;border-left:1px solid var(--border-color);height:100%}.main[data-v-5f95d421]{padding:1rem;height:100%}.root[data-v-ec5c053a]{display:flex;flex-direction:column;gap:1rem}.tab[data-v-ec5c053a]{transition:all .2s}.tabs[data-v-ec5c053a]{width:auto;display:inline-block;margin:0 auto}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:""}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:var(--tab-height);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:calc(100% - var(--tab-height) + var(--border));display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.collapse-arrow>.collapse-title:after{content:"";transform-origin:75% 75%;pointer-events:none;top:1.9rem;width:.5rem;height:.5rem;transition-property:all;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:block;position:absolute;inset-inline-end:1.4rem;transform:translateY(-100%)rotate(45deg);box-shadow:2px 2px}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.\\!pointer-events-none{pointer-events:none!important}.collapse:not(td,tr,colgroup){visibility:visible}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;width:100%;transition:grid-template-rows .2s;display:grid;position:relative;overflow:hidden}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],:focus:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],:focus:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible;min-height:fit-content}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-close,.collapse[open])>.collapse-title{cursor:unset}.collapse:is([open],:focus:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse.collapse-open.collapse-plus>.collapse-title:after{content:"−"}.collapse.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{content:"−"}.collapse:is(details){width:100%}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details) summary{outline:none}.collapse-content{visibility:hidden;min-height:0;cursor:unset;grid-row-start:2;grid-column-start:1;padding-left:1rem;padding-right:1rem;transition:visibility .2s,padding .2s ease-out,background-color .2s ease-out}.collapse{visibility:collapse}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.collapse-title{grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out;position:relative}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.-top-3{top:calc(var(--spacing)*-3)}.top-2{top:calc(var(--spacing)*2)}.-right-3{right:calc(var(--spacing)*-3)}.right-2{right:calc(var(--spacing)*2)}.left-\\[10\\%\\]{left:10%}.left-\\[70\\%\\]{left:70%}.modal-backdrop{color:#0000;z-index:-1;grid-row-start:1;grid-column-start:1;place-self:stretch stretch;display:grid}.modal-backdrop button{cursor:pointer}.-z-1{z-index:-1}.z-1{z-index:1}.z-2{z-index:2}.z-10{z-index:10}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[8\\.5px\\]{margin-right:-8.5px}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-\\[9px\\]{margin-right:9px}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.-ml-\\[12px\\]{margin-left:-12px}.ml-3{margin-left:calc(var(--spacing)*3)}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-block{display:inline-block}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-5{height:calc(var(--spacing)*5)}.h-12{height:calc(var(--spacing)*12)}.h-18{height:calc(var(--spacing)*18)}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.h-\\[50px\\]{height:50px}.h-full{height:100%}.max-h-\\[85vh\\]{max-height:85vh}.min-h-\\[450px\\]{min-height:450px}.w-1\\/2{width:50%}.w-3\\/4{width:75%}.w-5{width:calc(var(--spacing)*5)}.w-\\[20px\\]{width:20px}.w-\\[50px\\]{width:50px}.w-full{width:100%}.max-w-\\[8ch\\]{max-width:8ch}.max-w-max{max-width:max-content}.max-w-none{max-width:none}.flex-1{flex:1}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_0\\.5fr_20px_1fr\\]{grid-template-columns:1fr 20px .5fr 20px 1fr}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[50px_50px_80px\\]{grid-template-rows:50px 50px 80px}.grid-rows-\\[100px_1fr_80px\\]{grid-template-rows:100px 1fr 80px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tabs-box{background-color:var(--color-base-200);--tabs-box-radius:calc(var(--radius-field) + var(--radius-field) + var(--radius-field));border-radius:calc(var(--radius-field) + min(.25rem,var(--tabs-box-radius)));box-shadow:0 -.5px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 .5px oklch(0% 0 0/calc(var(--depth)*.05)) inset;padding:.25rem}.tabs-box .tab{border-radius:var(--radius-field);border-style:none}.tabs-box .tab:focus-visible,.tabs-box .tab:is(label:has(:checked:focus-visible)){outline-offset:2px}.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){background-color:var(--tab-bg,var(--color-base-100));box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px var(--color-neutral),0 1px 6px -4px var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*50%),#0000),0 1px 6px -4px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*100%),#0000)}}@media (forced-colors:active){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){border:1px solid}}.rounded-box{border-radius:var(--radius-box)}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-none{--tw-border-style:none;border-style:none}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.border-\\(--color-primary\\){border-color:var(--color-primary)}.border-\\[var\\(--color-gray-200\\)\\]{border-color:var(--color-gray-200)}.border-\\[var\\(--color-primary\\)\\]{border-color:var(--color-primary)}.bg-\\(--color-ocean-gray-25\\){background-color:var(--color-ocean-gray-25)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.radio-sm{padding:.1875rem}.radio-sm[type=radio]{--size:calc(var(--size-selector,.25rem)*5)}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.ps-5{padding-inline-start:calc(var(--spacing)*5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pr-10{padding-right:calc(var(--spacing)*10)}.pl-10{padding-left:calc(var(--spacing)*10)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-\\(--color-ocean-gray-100\\){color:var(--color-ocean-gray-100)}.text-\\(--color-primary\\){color:var(--color-primary)}.text-white{color:var(--color-white)}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}:is(.\\*\\:pointer-events-auto>*){pointer-events:auto}.after\\:start-0:after{content:var(--tw-content);inset-inline-start:calc(var(--spacing)*0)}.after\\:\\!top-3:after{content:var(--tw-content);top:calc(var(--spacing)*3)!important}@media (hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}.\\[\\&_dt\\]\\:mr-1 dt{margin-right:calc(var(--spacing)*1)}.\\[\\&_dt\\,dd\\]\\:inline dt,.\\[\\&_dt\\,dd\\]\\:inline dd{display:inline}.\\[\\&\\>dt\\]\\:text-right>dt{text-align:right}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ks(t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of t.split(",")) r[i] = 1;
  return (i) => i in r;
}
const yt = {}, Po = [], zn = () => {
}, Cc = () => !1, va = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), js = (t) => t.startsWith("onUpdate:"), on = Object.assign, Fs = (t, r) => {
  const i = t.indexOf(r);
  i > -1 && t.splice(i, 1);
}, Ec = Object.prototype.hasOwnProperty, mt = (t, r) => Ec.call(t, r), Ue = Array.isArray, Lo = (t) => Ki(t) === "[object Map]", Ko = (t) => Ki(t) === "[object Set]", cl = (t) => Ki(t) === "[object Date]", ze = (t) => typeof t == "function", At = (t) => typeof t == "string", qn = (t) => typeof t == "symbol", Nt = (t) => t !== null && typeof t == "object", ou = (t) => (Nt(t) || ze(t)) && ze(t.then) && ze(t.catch), iu = Object.prototype.toString, Ki = (t) => iu.call(t), Oc = (t) => Ki(t).slice(8, -1), au = (t) => Ki(t) === "[object Object]", Ms = (t) => At(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ri = /* @__PURE__ */ ks(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ya = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (i) => r[i] || (r[i] = t(i));
}, Ac = /-(\w)/g, In = ya(
  (t) => t.replace(Ac, (r, i) => i ? i.toUpperCase() : "")
), Dc = /\B([A-Z])/g, Ao = ya(
  (t) => t.replace(Dc, "-$1").toLowerCase()
), ga = ya((t) => t.charAt(0).toUpperCase() + t.slice(1)), rs = ya(
  (t) => t ? `on${ga(t)}` : ""
), Mr = (t, r) => !Object.is(t, r), Ji = (t, ...r) => {
  for (let i = 0; i < t.length; i++)
    t[i](...r);
}, vs = (t, r, i, s = !1) => {
  Object.defineProperty(t, r, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: i
  });
}, ia = (t) => {
  const r = parseFloat(t);
  return isNaN(r) ? t : r;
};
let fl;
const ba = () => fl || (fl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function qr(t) {
  if (Ue(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++) {
      const s = t[i], u = At(s) ? Lc(s) : qr(s);
      if (u)
        for (const d in u)
          r[d] = u[d];
    }
    return r;
  } else if (At(t) || Nt(t))
    return t;
}
const Ic = /;(?![^(]*\))/g, Sc = /:([^]+)/, Pc = /\/\*[^]*?\*\//g;
function Lc(t) {
  const r = {};
  return t.replace(Pc, "").split(Ic).forEach((i) => {
    if (i) {
      const s = i.split(Sc);
      s.length > 1 && (r[s[0].trim()] = s[1].trim());
    }
  }), r;
}
function Jt(t) {
  let r = "";
  if (At(t))
    r = t;
  else if (Ue(t))
    for (let i = 0; i < t.length; i++) {
      const s = Jt(t[i]);
      s && (r += s + " ");
    }
  else if (Nt(t))
    for (const i in t)
      t[i] && (r += i + " ");
  return r.trim();
}
function kc(t) {
  if (!t) return null;
  let { class: r, style: i } = t;
  return r && !At(r) && (t.class = Jt(r)), i && (t.style = qr(i)), t;
}
const jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Fc = /* @__PURE__ */ ks(jc);
function su(t) {
  return !!t || t === "";
}
function Mc(t, r) {
  if (t.length !== r.length) return !1;
  let i = !0;
  for (let s = 0; i && s < t.length; s++)
    i = Eo(t[s], r[s]);
  return i;
}
function Eo(t, r) {
  if (t === r) return !0;
  let i = cl(t), s = cl(r);
  if (i || s)
    return i && s ? t.getTime() === r.getTime() : !1;
  if (i = qn(t), s = qn(r), i || s)
    return t === r;
  if (i = Ue(t), s = Ue(r), i || s)
    return i && s ? Mc(t, r) : !1;
  if (i = Nt(t), s = Nt(r), i || s) {
    if (!i || !s)
      return !1;
    const u = Object.keys(t).length, d = Object.keys(r).length;
    if (u !== d)
      return !1;
    for (const c in t) {
      const p = t.hasOwnProperty(c), m = r.hasOwnProperty(c);
      if (p && !m || !p && m || !Eo(t[c], r[c]))
        return !1;
    }
  }
  return String(t) === String(r);
}
function $s(t, r) {
  return t.findIndex((i) => Eo(i, r));
}
const lu = (t) => !!(t && t.__v_isRef === !0), ce = (t) => At(t) ? t : t == null ? "" : Ue(t) || Nt(t) && (t.toString === iu || !ze(t.toString)) ? lu(t) ? ce(t.value) : JSON.stringify(t, uu, 2) : String(t), uu = (t, r) => lu(r) ? uu(t, r.value) : Lo(r) ? {
  [`Map(${r.size})`]: [...r.entries()].reduce(
    (i, [s, u], d) => (i[os(s, d) + " =>"] = u, i),
    {}
  )
} : Ko(r) ? {
  [`Set(${r.size})`]: [...r.values()].map((i) => os(i))
} : qn(r) ? os(r) : Nt(r) && !Ue(r) && !au(r) ? String(r) : r, os = (t, r = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qn(t) ? `Symbol(${(i = t.description) != null ? i : r})` : t
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nn;
class cu {
  constructor(r = !1) {
    this.detached = r, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = nn, !r && nn && (this.index = (nn.scopes || (nn.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let r, i;
      if (this.scopes)
        for (r = 0, i = this.scopes.length; r < i; r++)
          this.scopes[r].pause();
      for (r = 0, i = this.effects.length; r < i; r++)
        this.effects[r].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let r, i;
      if (this.scopes)
        for (r = 0, i = this.scopes.length; r < i; r++)
          this.scopes[r].resume();
      for (r = 0, i = this.effects.length; r < i; r++)
        this.effects[r].resume();
    }
  }
  run(r) {
    if (this._active) {
      const i = nn;
      try {
        return nn = this, r();
      } finally {
        nn = i;
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
  stop(r) {
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
      if (!this.detached && this.parent && !r) {
        const u = this.parent.scopes.pop();
        u && u !== this && (this.parent.scopes[this.index] = u, u.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function fu(t) {
  return new cu(t);
}
function Bs() {
  return nn;
}
function du(t, r = !1) {
  nn && nn.cleanups.push(t);
}
let _t;
const is = /* @__PURE__ */ new WeakSet();
class pu {
  constructor(r) {
    this.fn = r, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nn && nn.active && nn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, is.has(this) && (is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || mu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, dl(this), vu(this);
    const r = _t, i = Kn;
    _t = this, Kn = !0;
    try {
      return this.fn();
    } finally {
      yu(this), _t = r, Kn = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let r = this.deps; r; r = r.nextDep)
        Us(r);
      this.deps = this.depsTail = void 0, dl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ys(this) && this.run();
  }
  get dirty() {
    return ys(this);
  }
}
let hu = 0, Ti, Ci;
function mu(t, r = !1) {
  if (t.flags |= 8, r) {
    t.next = Ci, Ci = t;
    return;
  }
  t.next = Ti, Ti = t;
}
function Ks() {
  hu++;
}
function qs() {
  if (--hu > 0)
    return;
  if (Ci) {
    let r = Ci;
    for (Ci = void 0; r; ) {
      const i = r.next;
      r.next = void 0, r.flags &= -9, r = i;
    }
  }
  let t;
  for (; Ti; ) {
    let r = Ti;
    for (Ti = void 0; r; ) {
      const i = r.next;
      if (r.next = void 0, r.flags &= -9, r.flags & 1)
        try {
          r.trigger();
        } catch (s) {
          t || (t = s);
        }
      r = i;
    }
  }
  if (t) throw t;
}
function vu(t) {
  for (let r = t.deps; r; r = r.nextDep)
    r.version = -1, r.prevActiveLink = r.dep.activeLink, r.dep.activeLink = r;
}
function yu(t) {
  let r, i = t.depsTail, s = i;
  for (; s; ) {
    const u = s.prevDep;
    s.version === -1 ? (s === i && (i = u), Us(s), $c(s)) : r = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = u;
  }
  t.deps = r, t.depsTail = i;
}
function ys(t) {
  for (let r = t.deps; r; r = r.nextDep)
    if (r.dep.version !== r.version || r.dep.computed && (gu(r.dep.computed) || r.dep.version !== r.version))
      return !0;
  return !!t._dirty;
}
function gu(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Pi) || (t.globalVersion = Pi, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !ys(t))))
    return;
  t.flags |= 2;
  const r = t.dep, i = _t, s = Kn;
  _t = t, Kn = !0;
  try {
    vu(t);
    const u = t.fn(t._value);
    (r.version === 0 || Mr(u, t._value)) && (t.flags |= 128, t._value = u, r.version++);
  } catch (u) {
    throw r.version++, u;
  } finally {
    _t = i, Kn = s, yu(t), t.flags &= -3;
  }
}
function Us(t, r = !1) {
  const { dep: i, prevSub: s, nextSub: u } = t;
  if (s && (s.nextSub = u, t.prevSub = void 0), u && (u.prevSub = s, t.nextSub = void 0), i.subs === t && (i.subs = s, !s && i.computed)) {
    i.computed.flags &= -5;
    for (let d = i.computed.deps; d; d = d.nextDep)
      Us(d, !0);
  }
  !r && !--i.sc && i.map && i.map.delete(i.key);
}
function $c(t) {
  const { prevDep: r, nextDep: i } = t;
  r && (r.nextDep = i, t.prevDep = void 0), i && (i.prevDep = r, t.nextDep = void 0);
}
let Kn = !0;
const bu = [];
function Dr() {
  bu.push(Kn), Kn = !1;
}
function Ir() {
  const t = bu.pop();
  Kn = t === void 0 ? !0 : t;
}
function dl(t) {
  const { cleanup: r } = t;
  if (t.cleanup = void 0, r) {
    const i = _t;
    _t = void 0;
    try {
      r();
    } finally {
      _t = i;
    }
  }
}
let Pi = 0;
class Bc {
  constructor(r, i) {
    this.sub = r, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Vs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(r) {
    this.computed = r, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(r) {
    if (!_t || !Kn || _t === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== _t)
      i = this.activeLink = new Bc(_t, this), _t.deps ? (i.prevDep = _t.depsTail, _t.depsTail.nextDep = i, _t.depsTail = i) : _t.deps = _t.depsTail = i, wu(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = _t.depsTail, i.nextDep = void 0, _t.depsTail.nextDep = i, _t.depsTail = i, _t.deps === i && (_t.deps = s);
    }
    return i;
  }
  trigger(r) {
    this.version++, Pi++, this.notify(r);
  }
  notify(r) {
    Ks();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      qs();
    }
  }
}
function wu(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const r = t.dep.computed;
    if (r && !t.dep.subs) {
      r.flags |= 20;
      for (let s = r.deps; s; s = s.nextDep)
        wu(s);
    }
    const i = t.dep.subs;
    i !== t && (t.prevSub = i, i && (i.nextSub = t)), t.dep.subs = t;
  }
}
const aa = /* @__PURE__ */ new WeakMap(), Ro = Symbol(
  ""
), gs = Symbol(
  ""
), Li = Symbol(
  ""
);
function rn(t, r, i) {
  if (Kn && _t) {
    let s = aa.get(t);
    s || aa.set(t, s = /* @__PURE__ */ new Map());
    let u = s.get(i);
    u || (s.set(i, u = new Vs()), u.map = s, u.key = i), u.track();
  }
}
function Tr(t, r, i, s, u, d) {
  const c = aa.get(t);
  if (!c) {
    Pi++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (Ks(), r === "clear")
    c.forEach(p);
  else {
    const m = Ue(t), S = m && Ms(i);
    if (m && i === "length") {
      const O = Number(s);
      c.forEach((L, k) => {
        (k === "length" || k === Li || !qn(k) && k >= O) && p(L);
      });
    } else
      switch ((i !== void 0 || c.has(void 0)) && p(c.get(i)), S && p(c.get(Li)), r) {
        case "add":
          m ? S && p(c.get("length")) : (p(c.get(Ro)), Lo(t) && p(c.get(gs)));
          break;
        case "delete":
          m || (p(c.get(Ro)), Lo(t) && p(c.get(gs)));
          break;
        case "set":
          Lo(t) && p(c.get(Ro));
          break;
      }
  }
  qs();
}
function Kc(t, r) {
  const i = aa.get(t);
  return i && i.get(r);
}
function Do(t) {
  const r = ct(t);
  return r === t ? r : (rn(r, "iterate", Li), An(t) ? r : r.map(Qt));
}
function wa(t) {
  return rn(t = ct(t), "iterate", Li), t;
}
const qc = {
  __proto__: null,
  [Symbol.iterator]() {
    return as(this, Symbol.iterator, Qt);
  },
  concat(...t) {
    return Do(this).concat(
      ...t.map((r) => Ue(r) ? Do(r) : r)
    );
  },
  entries() {
    return as(this, "entries", (t) => (t[1] = Qt(t[1]), t));
  },
  every(t, r) {
    return Nr(this, "every", t, r, void 0, arguments);
  },
  filter(t, r) {
    return Nr(this, "filter", t, r, (i) => i.map(Qt), arguments);
  },
  find(t, r) {
    return Nr(this, "find", t, r, Qt, arguments);
  },
  findIndex(t, r) {
    return Nr(this, "findIndex", t, r, void 0, arguments);
  },
  findLast(t, r) {
    return Nr(this, "findLast", t, r, Qt, arguments);
  },
  findLastIndex(t, r) {
    return Nr(this, "findLastIndex", t, r, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, r) {
    return Nr(this, "forEach", t, r, void 0, arguments);
  },
  includes(...t) {
    return ss(this, "includes", t);
  },
  indexOf(...t) {
    return ss(this, "indexOf", t);
  },
  join(t) {
    return Do(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return ss(this, "lastIndexOf", t);
  },
  map(t, r) {
    return Nr(this, "map", t, r, void 0, arguments);
  },
  pop() {
    return _i(this, "pop");
  },
  push(...t) {
    return _i(this, "push", t);
  },
  reduce(t, ...r) {
    return pl(this, "reduce", t, r);
  },
  reduceRight(t, ...r) {
    return pl(this, "reduceRight", t, r);
  },
  shift() {
    return _i(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, r) {
    return Nr(this, "some", t, r, void 0, arguments);
  },
  splice(...t) {
    return _i(this, "splice", t);
  },
  toReversed() {
    return Do(this).toReversed();
  },
  toSorted(t) {
    return Do(this).toSorted(t);
  },
  toSpliced(...t) {
    return Do(this).toSpliced(...t);
  },
  unshift(...t) {
    return _i(this, "unshift", t);
  },
  values() {
    return as(this, "values", Qt);
  }
};
function as(t, r, i) {
  const s = wa(t), u = s[r]();
  return s !== t && !An(t) && (u._next = u.next, u.next = () => {
    const d = u._next();
    return d.value && (d.value = i(d.value)), d;
  }), u;
}
const Uc = Array.prototype;
function Nr(t, r, i, s, u, d) {
  const c = wa(t), p = c !== t && !An(t), m = c[r];
  if (m !== Uc[r]) {
    const L = m.apply(t, d);
    return p ? Qt(L) : L;
  }
  let S = i;
  c !== t && (p ? S = function(L, k) {
    return i.call(this, Qt(L), k, t);
  } : i.length > 2 && (S = function(L, k) {
    return i.call(this, L, k, t);
  }));
  const O = m.call(c, S, s);
  return p && u ? u(O) : O;
}
function pl(t, r, i, s) {
  const u = wa(t);
  let d = i;
  return u !== t && (An(t) ? i.length > 3 && (d = function(c, p, m) {
    return i.call(this, c, p, m, t);
  }) : d = function(c, p, m) {
    return i.call(this, c, Qt(p), m, t);
  }), u[r](d, ...s);
}
function ss(t, r, i) {
  const s = ct(t);
  rn(s, "iterate", Li);
  const u = s[r](...i);
  return (u === -1 || u === !1) && Ws(i[0]) ? (i[0] = ct(i[0]), s[r](...i)) : u;
}
function _i(t, r, i = []) {
  Dr(), Ks();
  const s = ct(t)[r].apply(t, i);
  return qs(), Ir(), s;
}
const Vc = /* @__PURE__ */ ks("__proto__,__v_isRef,__isVue"), _u = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(qn)
);
function Wc(t) {
  qn(t) || (t = String(t));
  const r = ct(this);
  return rn(r, "has", t), r.hasOwnProperty(t);
}
class xu {
  constructor(r = !1, i = !1) {
    this._isReadonly = r, this._isShallow = i;
  }
  get(r, i, s) {
    if (i === "__v_skip") return r.__v_skip;
    const u = this._isReadonly, d = this._isShallow;
    if (i === "__v_isReactive")
      return !u;
    if (i === "__v_isReadonly")
      return u;
    if (i === "__v_isShallow")
      return d;
    if (i === "__v_raw")
      return s === (u ? d ? Ou : Eu : d ? Cu : Tu).get(r) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(r) === Object.getPrototypeOf(s) ? r : void 0;
    const c = Ue(r);
    if (!u) {
      let m;
      if (c && (m = qc[i]))
        return m;
      if (i === "hasOwnProperty")
        return Wc;
    }
    const p = Reflect.get(
      r,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Ot(r) ? r : s
    );
    return (qn(i) ? _u.has(i) : Vc(i)) || (u || rn(r, "get", i), d) ? p : Ot(p) ? c && Ms(i) ? p : p.value : Nt(p) ? u ? Au(p) : qi(p) : p;
  }
}
class Nu extends xu {
  constructor(r = !1) {
    super(!1, r);
  }
  set(r, i, s, u) {
    let d = r[i];
    if (!this._isShallow) {
      const m = $r(d);
      if (!An(s) && !$r(s) && (d = ct(d), s = ct(s)), !Ue(r) && Ot(d) && !Ot(s))
        return m ? !1 : (d.value = s, !0);
    }
    const c = Ue(r) && Ms(i) ? Number(i) < r.length : mt(r, i), p = Reflect.set(
      r,
      i,
      s,
      Ot(r) ? r : u
    );
    return r === ct(u) && (c ? Mr(s, d) && Tr(r, "set", i, s) : Tr(r, "add", i, s)), p;
  }
  deleteProperty(r, i) {
    const s = mt(r, i);
    r[i];
    const u = Reflect.deleteProperty(r, i);
    return u && s && Tr(r, "delete", i, void 0), u;
  }
  has(r, i) {
    const s = Reflect.has(r, i);
    return (!qn(i) || !_u.has(i)) && rn(r, "has", i), s;
  }
  ownKeys(r) {
    return rn(
      r,
      "iterate",
      Ue(r) ? "length" : Ro
    ), Reflect.ownKeys(r);
  }
}
class Ru extends xu {
  constructor(r = !1) {
    super(!0, r);
  }
  set(r, i) {
    return !0;
  }
  deleteProperty(r, i) {
    return !0;
  }
}
const Gc = /* @__PURE__ */ new Nu(), Hc = /* @__PURE__ */ new Ru(), Yc = /* @__PURE__ */ new Nu(!0), Xc = /* @__PURE__ */ new Ru(!0), bs = (t) => t, Wi = (t) => Reflect.getPrototypeOf(t);
function zc(t, r, i) {
  return function(...s) {
    const u = this.__v_raw, d = ct(u), c = Lo(d), p = t === "entries" || t === Symbol.iterator && c, m = t === "keys" && c, S = u[t](...s), O = i ? bs : r ? sa : Qt;
    return !r && rn(
      d,
      "iterate",
      m ? gs : Ro
    ), {
      // iterator protocol
      next() {
        const { value: L, done: k } = S.next();
        return k ? { value: L, done: k } : {
          value: p ? [O(L[0]), O(L[1])] : O(L),
          done: k
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Gi(t) {
  return function(...r) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Qc(t, r) {
  const i = {
    get(u) {
      const d = this.__v_raw, c = ct(d), p = ct(u);
      t || (Mr(u, p) && rn(c, "get", u), rn(c, "get", p));
      const { has: m } = Wi(c), S = r ? bs : t ? sa : Qt;
      if (m.call(c, u))
        return S(d.get(u));
      if (m.call(c, p))
        return S(d.get(p));
      d !== c && d.get(u);
    },
    get size() {
      const u = this.__v_raw;
      return !t && rn(ct(u), "iterate", Ro), Reflect.get(u, "size", u);
    },
    has(u) {
      const d = this.__v_raw, c = ct(d), p = ct(u);
      return t || (Mr(u, p) && rn(c, "has", u), rn(c, "has", p)), u === p ? d.has(u) : d.has(u) || d.has(p);
    },
    forEach(u, d) {
      const c = this, p = c.__v_raw, m = ct(p), S = r ? bs : t ? sa : Qt;
      return !t && rn(m, "iterate", Ro), p.forEach((O, L) => u.call(d, S(O), S(L), c));
    }
  };
  return on(
    i,
    t ? {
      add: Gi("add"),
      set: Gi("set"),
      delete: Gi("delete"),
      clear: Gi("clear")
    } : {
      add(u) {
        !r && !An(u) && !$r(u) && (u = ct(u));
        const d = ct(this);
        return Wi(d).has.call(d, u) || (d.add(u), Tr(d, "add", u, u)), this;
      },
      set(u, d) {
        !r && !An(d) && !$r(d) && (d = ct(d));
        const c = ct(this), { has: p, get: m } = Wi(c);
        let S = p.call(c, u);
        S || (u = ct(u), S = p.call(c, u));
        const O = m.call(c, u);
        return c.set(u, d), S ? Mr(d, O) && Tr(c, "set", u, d) : Tr(c, "add", u, d), this;
      },
      delete(u) {
        const d = ct(this), { has: c, get: p } = Wi(d);
        let m = c.call(d, u);
        m || (u = ct(u), m = c.call(d, u)), p && p.call(d, u);
        const S = d.delete(u);
        return m && Tr(d, "delete", u, void 0), S;
      },
      clear() {
        const u = ct(this), d = u.size !== 0, c = u.clear();
        return d && Tr(
          u,
          "clear",
          void 0,
          void 0
        ), c;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((u) => {
    i[u] = zc(u, t, r);
  }), i;
}
function _a(t, r) {
  const i = Qc(t, r);
  return (s, u, d) => u === "__v_isReactive" ? !t : u === "__v_isReadonly" ? t : u === "__v_raw" ? s : Reflect.get(
    mt(i, u) && u in s ? i : s,
    u,
    d
  );
}
const Jc = {
  get: /* @__PURE__ */ _a(!1, !1)
}, Zc = {
  get: /* @__PURE__ */ _a(!1, !0)
}, ef = {
  get: /* @__PURE__ */ _a(!0, !1)
}, tf = {
  get: /* @__PURE__ */ _a(!0, !0)
}, Tu = /* @__PURE__ */ new WeakMap(), Cu = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap();
function nf(t) {
  switch (t) {
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
function rf(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : nf(Oc(t));
}
function qi(t) {
  return $r(t) ? t : xa(
    t,
    !1,
    Gc,
    Jc,
    Tu
  );
}
function of(t) {
  return xa(
    t,
    !1,
    Yc,
    Zc,
    Cu
  );
}
function Au(t) {
  return xa(
    t,
    !0,
    Hc,
    ef,
    Eu
  );
}
function af(t) {
  return xa(
    t,
    !0,
    Xc,
    tf,
    Ou
  );
}
function xa(t, r, i, s, u) {
  if (!Nt(t) || t.__v_raw && !(r && t.__v_isReactive))
    return t;
  const d = rf(t);
  if (d === 0)
    return t;
  const c = u.get(t);
  if (c)
    return c;
  const p = new Proxy(
    t,
    d === 2 ? s : i
  );
  return u.set(t, p), p;
}
function Or(t) {
  return $r(t) ? Or(t.__v_raw) : !!(t && t.__v_isReactive);
}
function $r(t) {
  return !!(t && t.__v_isReadonly);
}
function An(t) {
  return !!(t && t.__v_isShallow);
}
function Ws(t) {
  return t ? !!t.__v_raw : !1;
}
function ct(t) {
  const r = t && t.__v_raw;
  return r ? ct(r) : t;
}
function Na(t) {
  return !mt(t, "__v_skip") && Object.isExtensible(t) && vs(t, "__v_skip", !0), t;
}
const Qt = (t) => Nt(t) ? qi(t) : t, sa = (t) => Nt(t) ? Au(t) : t;
function Ot(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Be(t) {
  return Du(t, !1);
}
function Xn(t) {
  return Du(t, !0);
}
function Du(t, r) {
  return Ot(t) ? t : new sf(t, r);
}
class sf {
  constructor(r, i) {
    this.dep = new Vs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? r : ct(r), this._value = i ? r : Qt(r), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(r) {
    const i = this._rawValue, s = this.__v_isShallow || An(r) || $r(r);
    r = s ? r : ct(r), Mr(r, i) && (this._rawValue = r, this._value = s ? r : Qt(r), this.dep.trigger());
  }
}
function De(t) {
  return Ot(t) ? t.value : t;
}
function lf(t) {
  return ze(t) ? t() : De(t);
}
const uf = {
  get: (t, r, i) => r === "__v_raw" ? t : De(Reflect.get(t, r, i)),
  set: (t, r, i, s) => {
    const u = t[r];
    return Ot(u) && !Ot(i) ? (u.value = i, !0) : Reflect.set(t, r, i, s);
  }
};
function Iu(t) {
  return Or(t) ? t : new Proxy(t, uf);
}
function cf(t) {
  const r = Ue(t) ? new Array(t.length) : {};
  for (const i in t)
    r[i] = Su(t, i);
  return r;
}
class ff {
  constructor(r, i, s) {
    this._object = r, this._key = i, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const r = this._object[this._key];
    return this._value = r === void 0 ? this._defaultValue : r;
  }
  set value(r) {
    this._object[this._key] = r;
  }
  get dep() {
    return Kc(ct(this._object), this._key);
  }
}
class df {
  constructor(r) {
    this._getter = r, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function pf(t, r, i) {
  return Ot(t) ? t : ze(t) ? new df(t) : Nt(t) && arguments.length > 1 ? Su(t, r, i) : Be(t);
}
function Su(t, r, i) {
  const s = t[r];
  return Ot(s) ? s : new ff(t, r, i);
}
class hf {
  constructor(r, i, s) {
    this.fn = r, this.setter = i, this._value = void 0, this.dep = new Vs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Pi - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return mu(this, !0), !0;
  }
  get value() {
    const r = this.dep.track();
    return gu(this), r && (r.version = this.dep.version), this._value;
  }
  set value(r) {
    this.setter && this.setter(r);
  }
}
function mf(t, r, i = !1) {
  let s, u;
  return ze(t) ? s = t : (s = t.get, u = t.set), new hf(s, u, i);
}
const Hi = {}, la = /* @__PURE__ */ new WeakMap();
let No;
function vf(t, r = !1, i = No) {
  if (i) {
    let s = la.get(i);
    s || la.set(i, s = []), s.push(t);
  }
}
function yf(t, r, i = yt) {
  const { immediate: s, deep: u, once: d, scheduler: c, augmentJob: p, call: m } = i, S = (ne) => u ? ne : An(ne) || u === !1 || u === 0 ? Cr(ne, 1) : Cr(ne);
  let O, L, k, J, ee = !1, G = !1;
  if (Ot(t) ? (L = () => t.value, ee = An(t)) : Or(t) ? (L = () => S(t), ee = !0) : Ue(t) ? (G = !0, ee = t.some((ne) => Or(ne) || An(ne)), L = () => t.map((ne) => {
    if (Ot(ne))
      return ne.value;
    if (Or(ne))
      return S(ne);
    if (ze(ne))
      return m ? m(ne, 2) : ne();
  })) : ze(t) ? r ? L = m ? () => m(t, 2) : t : L = () => {
    if (k) {
      Dr();
      try {
        k();
      } finally {
        Ir();
      }
    }
    const ne = No;
    No = O;
    try {
      return m ? m(t, 3, [J]) : t(J);
    } finally {
      No = ne;
    }
  } : L = zn, r && u) {
    const ne = L, X = u === !0 ? 1 / 0 : u;
    L = () => Cr(ne(), X);
  }
  const W = Bs(), V = () => {
    O.stop(), W && W.active && Fs(W.effects, O);
  };
  if (d && r) {
    const ne = r;
    r = (...X) => {
      ne(...X), V();
    };
  }
  let M = G ? new Array(t.length).fill(Hi) : Hi;
  const $ = (ne) => {
    if (!(!(O.flags & 1) || !O.dirty && !ne))
      if (r) {
        const X = O.run();
        if (u || ee || (G ? X.some((H, re) => Mr(H, M[re])) : Mr(X, M))) {
          k && k();
          const H = No;
          No = O;
          try {
            const re = [
              X,
              // pass undefined as the old value when it's changed for the first time
              M === Hi ? void 0 : G && M[0] === Hi ? [] : M,
              J
            ];
            M = X, m ? m(r, 3, re) : (
              // @ts-expect-error
              r(...re)
            );
          } finally {
            No = H;
          }
        }
      } else
        O.run();
  };
  return p && p($), O = new pu(L), O.scheduler = c ? () => c($, !1) : $, J = (ne) => vf(ne, !1, O), k = O.onStop = () => {
    const ne = la.get(O);
    if (ne) {
      if (m)
        m(ne, 4);
      else
        for (const X of ne) X();
      la.delete(O);
    }
  }, r ? s ? $(!0) : M = O.run() : c ? c($.bind(null, !0), !0) : O.run(), V.pause = O.pause.bind(O), V.resume = O.resume.bind(O), V.stop = V, V;
}
function Cr(t, r = 1 / 0, i) {
  if (r <= 0 || !Nt(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(t)))
    return t;
  if (i.add(t), r--, Ot(t))
    Cr(t.value, r, i);
  else if (Ue(t))
    for (let s = 0; s < t.length; s++)
      Cr(t[s], r, i);
  else if (Ko(t) || Lo(t))
    t.forEach((s) => {
      Cr(s, r, i);
    });
  else if (au(t)) {
    for (const s in t)
      Cr(t[s], r, i);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && Cr(t[s], r, i);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ui(t, r, i, s) {
  try {
    return s ? t(...s) : t();
  } catch (u) {
    Ra(u, r, i);
  }
}
function Qn(t, r, i, s) {
  if (ze(t)) {
    const u = Ui(t, r, i, s);
    return u && ou(u) && u.catch((d) => {
      Ra(d, r, i);
    }), u;
  }
  if (Ue(t)) {
    const u = [];
    for (let d = 0; d < t.length; d++)
      u.push(Qn(t[d], r, i, s));
    return u;
  }
}
function Ra(t, r, i, s = !0) {
  const u = r ? r.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: c } = r && r.appContext.config || yt;
  if (r) {
    let p = r.parent;
    const m = r.proxy, S = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const O = p.ec;
      if (O) {
        for (let L = 0; L < O.length; L++)
          if (O[L](t, m, S) === !1)
            return;
      }
      p = p.parent;
    }
    if (d) {
      Dr(), Ui(d, null, 10, [
        t,
        m,
        S
      ]), Ir();
      return;
    }
  }
  gf(t, i, u, s, c);
}
function gf(t, r, i, s = !0, u = !1) {
  if (u)
    throw t;
  console.error(t);
}
const vn = [];
let Gn = -1;
const ko = [];
let kr = null, So = 0;
const Pu = /* @__PURE__ */ Promise.resolve();
let ua = null;
function Gs(t) {
  const r = ua || Pu;
  return t ? r.then(this ? t.bind(this) : t) : r;
}
function bf(t) {
  let r = Gn + 1, i = vn.length;
  for (; r < i; ) {
    const s = r + i >>> 1, u = vn[s], d = ki(u);
    d < t || d === t && u.flags & 2 ? r = s + 1 : i = s;
  }
  return r;
}
function Hs(t) {
  if (!(t.flags & 1)) {
    const r = ki(t), i = vn[vn.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(t.flags & 2) && r >= ki(i) ? vn.push(t) : vn.splice(bf(r), 0, t), t.flags |= 1, Lu();
  }
}
function Lu() {
  ua || (ua = Pu.then(ju));
}
function wf(t) {
  Ue(t) ? ko.push(...t) : kr && t.id === -1 ? kr.splice(So + 1, 0, t) : t.flags & 1 || (ko.push(t), t.flags |= 1), Lu();
}
function hl(t, r, i = Gn + 1) {
  for (; i < vn.length; i++) {
    const s = vn[i];
    if (s && s.flags & 2) {
      if (t && s.id !== t.uid)
        continue;
      vn.splice(i, 1), i--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ku(t) {
  if (ko.length) {
    const r = [...new Set(ko)].sort(
      (i, s) => ki(i) - ki(s)
    );
    if (ko.length = 0, kr) {
      kr.push(...r);
      return;
    }
    for (kr = r, So = 0; So < kr.length; So++) {
      const i = kr[So];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    kr = null, So = 0;
  }
}
const ki = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function ju(t) {
  try {
    for (Gn = 0; Gn < vn.length; Gn++) {
      const r = vn[Gn];
      r && !(r.flags & 8) && (r.flags & 4 && (r.flags &= -2), Ui(
        r,
        r.i,
        r.i ? 15 : 14
      ), r.flags & 4 || (r.flags &= -2));
    }
  } finally {
    for (; Gn < vn.length; Gn++) {
      const r = vn[Gn];
      r && (r.flags &= -2);
    }
    Gn = -1, vn.length = 0, ku(), ua = null, (vn.length || ko.length) && ju();
  }
}
let Bt = null, Fu = null;
function ca(t) {
  const r = Bt;
  return Bt = t, Fu = t && t.type.__scopeId || null, r;
}
function ws(t, r = Bt, i) {
  if (!r || t._n)
    return t;
  const s = (...u) => {
    s._d && Ol(-1);
    const d = ca(r);
    let c;
    try {
      c = t(...u);
    } finally {
      ca(d), s._d && Ol(1);
    }
    return c;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function rt(t, r) {
  if (Bt === null)
    return t;
  const i = Oa(Bt), s = t.dirs || (t.dirs = []);
  for (let u = 0; u < r.length; u++) {
    let [d, c, p, m = yt] = r[u];
    d && (ze(d) && (d = {
      mounted: d,
      updated: d
    }), d.deep && Cr(c), s.push({
      dir: d,
      instance: i,
      value: c,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return t;
}
function _o(t, r, i, s) {
  const u = t.dirs, d = r && r.dirs;
  for (let c = 0; c < u.length; c++) {
    const p = u[c];
    d && (p.oldValue = d[c].value);
    let m = p.dir[s];
    m && (Dr(), Qn(m, i, 8, [
      t.el,
      p,
      t,
      r
    ]), Ir());
  }
}
const Mu = Symbol("_vte"), _f = (t) => t.__isTeleport, Ei = (t) => t && (t.disabled || t.disabled === ""), ml = (t) => t && (t.defer || t.defer === ""), vl = (t) => typeof SVGElement < "u" && t instanceof SVGElement, yl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, _s = (t, r) => {
  const i = t && t.to;
  return At(i) ? r ? r(i) : null : i;
}, $u = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, r, i, s, u, d, c, p, m, S) {
    const {
      mc: O,
      pc: L,
      pbc: k,
      o: { insert: J, querySelector: ee, createText: G, createComment: W }
    } = S, V = Ei(r.props);
    let { shapeFlag: M, children: $, dynamicChildren: ne } = r;
    if (t == null) {
      const X = r.el = G(""), H = r.anchor = G("");
      J(X, i, s), J(H, i, s);
      const re = (B, we) => {
        M & 16 && (u && u.isCE && (u.ce._teleportTarget = B), O(
          $,
          B,
          we,
          u,
          d,
          c,
          p,
          m
        ));
      }, ue = () => {
        const B = r.target = _s(r.props, ee), we = Bu(B, r, G, J);
        B && (c !== "svg" && vl(B) ? c = "svg" : c !== "mathml" && yl(B) && (c = "mathml"), V || (re(B, we), Zi(r, !1)));
      };
      V && (re(i, H), Zi(r, !0)), ml(r.props) ? (r.el.__isMounted = !1, mn(() => {
        ue(), delete r.el.__isMounted;
      }, d)) : ue();
    } else {
      if (ml(r.props) && t.el.__isMounted === !1) {
        mn(() => {
          $u.process(
            t,
            r,
            i,
            s,
            u,
            d,
            c,
            p,
            m,
            S
          );
        }, d);
        return;
      }
      r.el = t.el, r.targetStart = t.targetStart;
      const X = r.anchor = t.anchor, H = r.target = t.target, re = r.targetAnchor = t.targetAnchor, ue = Ei(t.props), B = ue ? i : H, we = ue ? X : re;
      if (c === "svg" || vl(H) ? c = "svg" : (c === "mathml" || yl(H)) && (c = "mathml"), ne ? (k(
        t.dynamicChildren,
        ne,
        B,
        u,
        d,
        c,
        p
      ), Js(t, r, !0)) : m || L(
        t,
        r,
        B,
        we,
        u,
        d,
        c,
        p,
        !1
      ), V)
        ue ? r.props && t.props && r.props.to !== t.props.to && (r.props.to = t.props.to) : Yi(
          r,
          i,
          X,
          S,
          1
        );
      else if ((r.props && r.props.to) !== (t.props && t.props.to)) {
        const Oe = r.target = _s(
          r.props,
          ee
        );
        Oe && Yi(
          r,
          Oe,
          null,
          S,
          0
        );
      } else ue && Yi(
        r,
        H,
        re,
        S,
        1
      );
      Zi(r, V);
    }
  },
  remove(t, r, i, { um: s, o: { remove: u } }, d) {
    const {
      shapeFlag: c,
      children: p,
      anchor: m,
      targetStart: S,
      targetAnchor: O,
      target: L,
      props: k
    } = t;
    if (L && (u(S), u(O)), d && u(m), c & 16) {
      const J = d || !Ei(k);
      for (let ee = 0; ee < p.length; ee++) {
        const G = p[ee];
        s(
          G,
          r,
          i,
          J,
          !!G.dynamicChildren
        );
      }
    }
  },
  move: Yi,
  hydrate: xf
};
function Yi(t, r, i, { o: { insert: s }, m: u }, d = 2) {
  d === 0 && s(t.targetAnchor, r, i);
  const { el: c, anchor: p, shapeFlag: m, children: S, props: O } = t, L = d === 2;
  if (L && s(c, r, i), (!L || Ei(O)) && m & 16)
    for (let k = 0; k < S.length; k++)
      u(
        S[k],
        r,
        i,
        2
      );
  L && s(p, r, i);
}
function xf(t, r, i, s, u, d, {
  o: { nextSibling: c, parentNode: p, querySelector: m, insert: S, createText: O }
}, L) {
  const k = r.target = _s(
    r.props,
    m
  );
  if (k) {
    const J = Ei(r.props), ee = k._lpa || k.firstChild;
    if (r.shapeFlag & 16)
      if (J)
        r.anchor = L(
          c(t),
          r,
          p(t),
          i,
          s,
          u,
          d
        ), r.targetStart = ee, r.targetAnchor = ee && c(ee);
      else {
        r.anchor = c(t);
        let G = ee;
        for (; G; ) {
          if (G && G.nodeType === 8) {
            if (G.data === "teleport start anchor")
              r.targetStart = G;
            else if (G.data === "teleport anchor") {
              r.targetAnchor = G, k._lpa = r.targetAnchor && c(r.targetAnchor);
              break;
            }
          }
          G = c(G);
        }
        r.targetAnchor || Bu(k, r, O, S), L(
          ee && c(ee),
          r,
          k,
          i,
          s,
          u,
          d
        );
      }
    Zi(r, J);
  }
  return r.anchor && c(r.anchor);
}
const Fo = $u;
function Zi(t, r) {
  const i = t.ctx;
  if (i && i.ut) {
    let s, u;
    for (r ? (s = t.el, u = t.anchor) : (s = t.targetStart, u = t.targetAnchor); s && s !== u; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", i.uid), s = s.nextSibling;
    i.ut();
  }
}
function Bu(t, r, i, s) {
  const u = r.targetStart = i(""), d = r.targetAnchor = i("");
  return u[Mu] = d, t && (s(u, t), s(d, t)), d;
}
function Ys(t, r) {
  t.shapeFlag & 6 && t.component ? (t.transition = r, Ys(t.component.subTree, r)) : t.shapeFlag & 128 ? (t.ssContent.transition = r.clone(t.ssContent), t.ssFallback.transition = r.clone(t.ssFallback)) : t.transition = r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ct(t, r) {
  return ze(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    on({ name: t.name }, r, { setup: t })
  ) : t;
}
function Ku(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Nf(t) {
  const r = wd(), i = Xn(null);
  if (r) {
    const u = r.refs === yt ? r.refs = {} : r.refs;
    Object.defineProperty(u, t, {
      enumerable: !0,
      get: () => i.value,
      set: (d) => i.value = d
    });
  }
  return i;
}
function Oi(t, r, i, s, u = !1) {
  if (Ue(t)) {
    t.forEach(
      (ee, G) => Oi(
        ee,
        r && (Ue(r) ? r[G] : r),
        i,
        s,
        u
      )
    );
    return;
  }
  if (jo(s) && !u) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Oi(t, r, i, s.component.subTree);
    return;
  }
  const d = s.shapeFlag & 4 ? Oa(s.component) : s.el, c = u ? null : d, { i: p, r: m } = t, S = r && r.r, O = p.refs === yt ? p.refs = {} : p.refs, L = p.setupState, k = ct(L), J = L === yt ? () => !1 : (ee) => mt(k, ee);
  if (S != null && S !== m && (At(S) ? (O[S] = null, J(S) && (L[S] = null)) : Ot(S) && (S.value = null)), ze(m))
    Ui(m, p, 12, [c, O]);
  else {
    const ee = At(m), G = Ot(m);
    if (ee || G) {
      const W = () => {
        if (t.f) {
          const V = ee ? J(m) ? L[m] : O[m] : m.value;
          u ? Ue(V) && Fs(V, d) : Ue(V) ? V.includes(d) || V.push(d) : ee ? (O[m] = [d], J(m) && (L[m] = O[m])) : (m.value = [d], t.k && (O[t.k] = m.value));
        } else ee ? (O[m] = c, J(m) && (L[m] = c)) : G && (m.value = c, t.k && (O[t.k] = c));
      };
      c ? (W.id = -1, mn(W, i)) : W();
    }
  }
}
ba().requestIdleCallback;
ba().cancelIdleCallback;
const jo = (t) => !!t.type.__asyncLoader, qu = (t) => t.type.__isKeepAlive;
function Rf(t, r) {
  Uu(t, "a", r);
}
function Tf(t, r) {
  Uu(t, "da", r);
}
function Uu(t, r, i = Vt) {
  const s = t.__wdc || (t.__wdc = () => {
    let u = i;
    for (; u; ) {
      if (u.isDeactivated)
        return;
      u = u.parent;
    }
    return t();
  });
  if (Ta(r, s, i), i) {
    let u = i.parent;
    for (; u && u.parent; )
      qu(u.parent.vnode) && Cf(s, r, i, u), u = u.parent;
  }
}
function Cf(t, r, i, s) {
  const u = Ta(
    r,
    t,
    s,
    !0
    /* prepend */
  );
  Xs(() => {
    Fs(s[r], u);
  }, i);
}
function Ta(t, r, i = Vt, s = !1) {
  if (i) {
    const u = i[t] || (i[t] = []), d = r.__weh || (r.__weh = (...c) => {
      Dr();
      const p = Vi(i), m = Qn(r, i, t, c);
      return p(), Ir(), m;
    });
    return s ? u.unshift(d) : u.push(d), d;
  }
}
const Pr = (t) => (r, i = Vt) => {
  (!Fi || t === "sp") && Ta(t, (...s) => r(...s), i);
}, Ef = Pr("bm"), qo = Pr("m"), Of = Pr(
  "bu"
), Af = Pr("u"), Df = Pr(
  "bum"
), Xs = Pr("um"), If = Pr(
  "sp"
), Sf = Pr("rtg"), Pf = Pr("rtc");
function Lf(t, r = Vt) {
  Ta("ec", t, r);
}
const kf = "components", Vu = Symbol.for("v-ndc");
function jf(t) {
  return At(t) ? Ff(kf, t, !1) || t : t || Vu;
}
function Ff(t, r, i = !0, s = !1) {
  const u = Bt || Vt;
  if (u) {
    const d = u.type;
    {
      const p = Td(
        d,
        !1
      );
      if (p && (p === r || p === In(r) || p === ga(In(r))))
        return d;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      gl(u[t] || d[t], r) || // global registration
      gl(u.appContext[t], r)
    );
    return !c && s ? d : c;
  }
}
function gl(t, r) {
  return t && (t[r] || t[In(r)] || t[ga(In(r))]);
}
function Tt(t, r, i, s) {
  let u;
  const d = i, c = Ue(t);
  if (c || At(t)) {
    const p = c && Or(t);
    let m = !1, S = !1;
    p && (m = !An(t), S = $r(t), t = wa(t)), u = new Array(t.length);
    for (let O = 0, L = t.length; O < L; O++)
      u[O] = r(
        m ? S ? sa(Qt(t[O])) : Qt(t[O]) : t[O],
        O,
        void 0,
        d
      );
  } else if (typeof t == "number") {
    u = new Array(t);
    for (let p = 0; p < t; p++)
      u[p] = r(p + 1, p, void 0, d);
  } else if (Nt(t))
    if (t[Symbol.iterator])
      u = Array.from(
        t,
        (p, m) => r(p, m, void 0, d)
      );
    else {
      const p = Object.keys(t);
      u = new Array(p.length);
      for (let m = 0, S = p.length; m < S; m++) {
        const O = p[m];
        u[m] = r(t[O], O, m, d);
      }
    }
  else
    u = [];
  return u;
}
function bl(t, r, i = {}, s, u) {
  if (Bt.ce || Bt.parent && jo(Bt.parent) && Bt.parent.ce)
    return r !== "default" && (i.name = r), fe(), Zt(
      Ke,
      null,
      [ht("slot", i, s)],
      64
    );
  let d = t[r];
  d && d._c && (d._d = !1), fe();
  const c = d && Wu(d(i)), p = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, m = Zt(
    Ke,
    {
      key: (p && !qn(p) ? p : `_${r}`) + // #7256 force differentiate fallback content from actual content
      (!c && s ? "_fb" : "")
    },
    c || [],
    c && t._ === 1 ? 64 : -2
  );
  return d && d._c && (d._d = !0), m;
}
function Wu(t) {
  return t.some((r) => tl(r) ? !(r.type === Sr || r.type === Ke && !Wu(r.children)) : !0) ? t : null;
}
const xs = (t) => t ? fc(t) ? Oa(t) : xs(t.parent) : null, Ai = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ on(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => xs(t.parent),
    $root: (t) => xs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Hu(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Hs(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Gs.bind(t.proxy)),
    $watch: (t) => ad.bind(t)
  })
), ls = (t, r) => t !== yt && !t.__isScriptSetup && mt(t, r), Mf = {
  get({ _: t }, r) {
    if (r === "__v_skip")
      return !0;
    const { ctx: i, setupState: s, data: u, props: d, accessCache: c, type: p, appContext: m } = t;
    let S;
    if (r[0] !== "$") {
      const J = c[r];
      if (J !== void 0)
        switch (J) {
          case 1:
            return s[r];
          case 2:
            return u[r];
          case 4:
            return i[r];
          case 3:
            return d[r];
        }
      else {
        if (ls(s, r))
          return c[r] = 1, s[r];
        if (u !== yt && mt(u, r))
          return c[r] = 2, u[r];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (S = t.propsOptions[0]) && mt(S, r)
        )
          return c[r] = 3, d[r];
        if (i !== yt && mt(i, r))
          return c[r] = 4, i[r];
        Ns && (c[r] = 0);
      }
    }
    const O = Ai[r];
    let L, k;
    if (O)
      return r === "$attrs" && rn(t.attrs, "get", ""), O(t);
    if (
      // css module (injected by vue-loader)
      (L = p.__cssModules) && (L = L[r])
    )
      return L;
    if (i !== yt && mt(i, r))
      return c[r] = 4, i[r];
    if (
      // global properties
      k = m.config.globalProperties, mt(k, r)
    )
      return k[r];
  },
  set({ _: t }, r, i) {
    const { data: s, setupState: u, ctx: d } = t;
    return ls(u, r) ? (u[r] = i, !0) : s !== yt && mt(s, r) ? (s[r] = i, !0) : mt(t.props, r) || r[0] === "$" && r.slice(1) in t ? !1 : (d[r] = i, !0);
  },
  has({
    _: { data: t, setupState: r, accessCache: i, ctx: s, appContext: u, propsOptions: d }
  }, c) {
    let p;
    return !!i[c] || t !== yt && mt(t, c) || ls(r, c) || (p = d[0]) && mt(p, c) || mt(s, c) || mt(Ai, c) || mt(u.config.globalProperties, c);
  },
  defineProperty(t, r, i) {
    return i.get != null ? t._.accessCache[r] = 0 : mt(i, "value") && this.set(t, r, i.value, null), Reflect.defineProperty(t, r, i);
  }
};
function wl(t) {
  return Ue(t) ? t.reduce(
    (r, i) => (r[i] = null, r),
    {}
  ) : t;
}
let Ns = !0;
function $f(t) {
  const r = Hu(t), i = t.proxy, s = t.ctx;
  Ns = !1, r.beforeCreate && _l(r.beforeCreate, t, "bc");
  const {
    // state
    data: u,
    computed: d,
    methods: c,
    watch: p,
    provide: m,
    inject: S,
    // lifecycle
    created: O,
    beforeMount: L,
    mounted: k,
    beforeUpdate: J,
    updated: ee,
    activated: G,
    deactivated: W,
    beforeDestroy: V,
    beforeUnmount: M,
    destroyed: $,
    unmounted: ne,
    render: X,
    renderTracked: H,
    renderTriggered: re,
    errorCaptured: ue,
    serverPrefetch: B,
    // public API
    expose: we,
    inheritAttrs: Oe,
    // assets
    components: Ie,
    directives: He,
    filters: Ft
  } = r;
  if (S && Bf(S, s, null), c)
    for (const Ce in c) {
      const Le = c[Ce];
      ze(Le) && (s[Ce] = Le.bind(i));
    }
  if (u) {
    const Ce = u.call(i, i);
    Nt(Ce) && (t.data = qi(Ce));
  }
  if (Ns = !0, d)
    for (const Ce in d) {
      const Le = d[Ce], ft = ze(Le) ? Le.bind(i, i) : ze(Le.get) ? Le.get.bind(i, i) : zn, vt = !ze(Le) && ze(Le.set) ? Le.set.bind(i) : zn, Et = Xe({
        get: ft,
        set: vt
      });
      Object.defineProperty(s, Ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (Kt) => Et.value = Kt
      });
    }
  if (p)
    for (const Ce in p)
      Gu(p[Ce], s, i, Ce);
  if (m) {
    const Ce = ze(m) ? m.call(i) : m;
    Reflect.ownKeys(Ce).forEach((Le) => {
      Gf(Le, Ce[Le]);
    });
  }
  O && _l(O, t, "c");
  function $e(Ce, Le) {
    Ue(Le) ? Le.forEach((ft) => Ce(ft.bind(i))) : Le && Ce(Le.bind(i));
  }
  if ($e(Ef, L), $e(qo, k), $e(Of, J), $e(Af, ee), $e(Rf, G), $e(Tf, W), $e(Lf, ue), $e(Pf, H), $e(Sf, re), $e(Df, M), $e(Xs, ne), $e(If, B), Ue(we))
    if (we.length) {
      const Ce = t.exposed || (t.exposed = {});
      we.forEach((Le) => {
        Object.defineProperty(Ce, Le, {
          get: () => i[Le],
          set: (ft) => i[Le] = ft
        });
      });
    } else t.exposed || (t.exposed = {});
  X && t.render === zn && (t.render = X), Oe != null && (t.inheritAttrs = Oe), Ie && (t.components = Ie), He && (t.directives = He), B && Ku(t);
}
function Bf(t, r, i = zn) {
  Ue(t) && (t = Rs(t));
  for (const s in t) {
    const u = t[s];
    let d;
    Nt(u) ? "default" in u ? d = Di(
      u.from || s,
      u.default,
      !0
    ) : d = Di(u.from || s) : d = Di(u), Ot(d) ? Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (c) => d.value = c
    }) : r[s] = d;
  }
}
function _l(t, r, i) {
  Qn(
    Ue(t) ? t.map((s) => s.bind(r.proxy)) : t.bind(r.proxy),
    r,
    i
  );
}
function Gu(t, r, i, s) {
  let u = s.includes(".") ? oc(i, s) : () => i[s];
  if (At(t)) {
    const d = r[t];
    ze(d) && Ut(u, d);
  } else if (ze(t))
    Ut(u, t.bind(i));
  else if (Nt(t))
    if (Ue(t))
      t.forEach((d) => Gu(d, r, i, s));
    else {
      const d = ze(t.handler) ? t.handler.bind(i) : r[t.handler];
      ze(d) && Ut(u, d, t);
    }
}
function Hu(t) {
  const r = t.type, { mixins: i, extends: s } = r, {
    mixins: u,
    optionsCache: d,
    config: { optionMergeStrategies: c }
  } = t.appContext, p = d.get(r);
  let m;
  return p ? m = p : !u.length && !i && !s ? m = r : (m = {}, u.length && u.forEach(
    (S) => fa(m, S, c, !0)
  ), fa(m, r, c)), Nt(r) && d.set(r, m), m;
}
function fa(t, r, i, s = !1) {
  const { mixins: u, extends: d } = r;
  d && fa(t, d, i, !0), u && u.forEach(
    (c) => fa(t, c, i, !0)
  );
  for (const c in r)
    if (!(s && c === "expose")) {
      const p = Kf[c] || i && i[c];
      t[c] = p ? p(t[c], r[c]) : r[c];
    }
  return t;
}
const Kf = {
  data: xl,
  props: Nl,
  emits: Nl,
  // objects
  methods: Ni,
  computed: Ni,
  // lifecycle
  beforeCreate: hn,
  created: hn,
  beforeMount: hn,
  mounted: hn,
  beforeUpdate: hn,
  updated: hn,
  beforeDestroy: hn,
  beforeUnmount: hn,
  destroyed: hn,
  unmounted: hn,
  activated: hn,
  deactivated: hn,
  errorCaptured: hn,
  serverPrefetch: hn,
  // assets
  components: Ni,
  directives: Ni,
  // watch
  watch: Uf,
  // provide / inject
  provide: xl,
  inject: qf
};
function xl(t, r) {
  return r ? t ? function() {
    return on(
      ze(t) ? t.call(this, this) : t,
      ze(r) ? r.call(this, this) : r
    );
  } : r : t;
}
function qf(t, r) {
  return Ni(Rs(t), Rs(r));
}
function Rs(t) {
  if (Ue(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++)
      r[t[i]] = t[i];
    return r;
  }
  return t;
}
function hn(t, r) {
  return t ? [...new Set([].concat(t, r))] : r;
}
function Ni(t, r) {
  return t ? on(/* @__PURE__ */ Object.create(null), t, r) : r;
}
function Nl(t, r) {
  return t ? Ue(t) && Ue(r) ? [.../* @__PURE__ */ new Set([...t, ...r])] : on(
    /* @__PURE__ */ Object.create(null),
    wl(t),
    wl(r ?? {})
  ) : r;
}
function Uf(t, r) {
  if (!t) return r;
  if (!r) return t;
  const i = on(/* @__PURE__ */ Object.create(null), t);
  for (const s in r)
    i[s] = hn(t[s], r[s]);
  return i;
}
function Yu() {
  return {
    app: null,
    config: {
      isNativeTag: Cc,
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
let Vf = 0;
function Wf(t, r) {
  return function(s, u = null) {
    ze(s) || (s = on({}, s)), u != null && !Nt(u) && (u = null);
    const d = Yu(), c = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const S = d.app = {
      _uid: Vf++,
      _component: s,
      _props: u,
      _container: null,
      _context: d,
      _instance: null,
      version: Ed,
      get config() {
        return d.config;
      },
      set config(O) {
      },
      use(O, ...L) {
        return c.has(O) || (O && ze(O.install) ? (c.add(O), O.install(S, ...L)) : ze(O) && (c.add(O), O(S, ...L))), S;
      },
      mixin(O) {
        return d.mixins.includes(O) || d.mixins.push(O), S;
      },
      component(O, L) {
        return L ? (d.components[O] = L, S) : d.components[O];
      },
      directive(O, L) {
        return L ? (d.directives[O] = L, S) : d.directives[O];
      },
      mount(O, L, k) {
        if (!m) {
          const J = S._ceVNode || ht(s, u);
          return J.appContext = d, k === !0 ? k = "svg" : k === !1 && (k = void 0), t(J, O, k), m = !0, S._container = O, O.__vue_app__ = S, Oa(J.component);
        }
      },
      onUnmount(O) {
        p.push(O);
      },
      unmount() {
        m && (Qn(
          p,
          S._instance,
          16
        ), t(null, S._container), delete S._container.__vue_app__);
      },
      provide(O, L) {
        return d.provides[O] = L, S;
      },
      runWithContext(O) {
        const L = To;
        To = S;
        try {
          return O();
        } finally {
          To = L;
        }
      }
    };
    return S;
  };
}
let To = null;
function Gf(t, r) {
  if (Vt) {
    let i = Vt.provides;
    const s = Vt.parent && Vt.parent.provides;
    s === i && (i = Vt.provides = Object.create(s)), i[t] = r;
  }
}
function Di(t, r, i = !1) {
  const s = Vt || Bt;
  if (s || To) {
    let u = To ? To._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (u && t in u)
      return u[t];
    if (arguments.length > 1)
      return i && ze(r) ? r.call(s && s.proxy) : r;
  }
}
function Hf() {
  return !!(Vt || Bt || To);
}
const Xu = {}, zu = () => Object.create(Xu), Qu = (t) => Object.getPrototypeOf(t) === Xu;
function Yf(t, r, i, s = !1) {
  const u = {}, d = zu();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Ju(t, r, u, d);
  for (const c in t.propsOptions[0])
    c in u || (u[c] = void 0);
  i ? t.props = s ? u : of(u) : t.type.props ? t.props = u : t.props = d, t.attrs = d;
}
function Xf(t, r, i, s) {
  const {
    props: u,
    attrs: d,
    vnode: { patchFlag: c }
  } = t, p = ct(u), [m] = t.propsOptions;
  let S = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const O = t.vnode.dynamicProps;
      for (let L = 0; L < O.length; L++) {
        let k = O[L];
        if (Ca(t.emitsOptions, k))
          continue;
        const J = r[k];
        if (m)
          if (mt(d, k))
            J !== d[k] && (d[k] = J, S = !0);
          else {
            const ee = In(k);
            u[ee] = Ts(
              m,
              p,
              ee,
              J,
              t,
              !1
            );
          }
        else
          J !== d[k] && (d[k] = J, S = !0);
      }
    }
  } else {
    Ju(t, r, u, d) && (S = !0);
    let O;
    for (const L in p)
      (!r || // for camelCase
      !mt(r, L) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((O = Ao(L)) === L || !mt(r, O))) && (m ? i && // for camelCase
      (i[L] !== void 0 || // for kebab-case
      i[O] !== void 0) && (u[L] = Ts(
        m,
        p,
        L,
        void 0,
        t,
        !0
      )) : delete u[L]);
    if (d !== p)
      for (const L in d)
        (!r || !mt(r, L)) && (delete d[L], S = !0);
  }
  S && Tr(t.attrs, "set", "");
}
function Ju(t, r, i, s) {
  const [u, d] = t.propsOptions;
  let c = !1, p;
  if (r)
    for (let m in r) {
      if (Ri(m))
        continue;
      const S = r[m];
      let O;
      u && mt(u, O = In(m)) ? !d || !d.includes(O) ? i[O] = S : (p || (p = {}))[O] = S : Ca(t.emitsOptions, m) || (!(m in s) || S !== s[m]) && (s[m] = S, c = !0);
    }
  if (d) {
    const m = ct(i), S = p || yt;
    for (let O = 0; O < d.length; O++) {
      const L = d[O];
      i[L] = Ts(
        u,
        m,
        L,
        S[L],
        t,
        !mt(S, L)
      );
    }
  }
  return c;
}
function Ts(t, r, i, s, u, d) {
  const c = t[i];
  if (c != null) {
    const p = mt(c, "default");
    if (p && s === void 0) {
      const m = c.default;
      if (c.type !== Function && !c.skipFactory && ze(m)) {
        const { propsDefaults: S } = u;
        if (i in S)
          s = S[i];
        else {
          const O = Vi(u);
          s = S[i] = m.call(
            null,
            r
          ), O();
        }
      } else
        s = m;
      u.ce && u.ce._setProp(i, s);
    }
    c[
      0
      /* shouldCast */
    ] && (d && !p ? s = !1 : c[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Ao(i)) && (s = !0));
  }
  return s;
}
const zf = /* @__PURE__ */ new WeakMap();
function Zu(t, r, i = !1) {
  const s = i ? zf : r.propsCache, u = s.get(t);
  if (u)
    return u;
  const d = t.props, c = {}, p = [];
  let m = !1;
  if (!ze(t)) {
    const O = (L) => {
      m = !0;
      const [k, J] = Zu(L, r, !0);
      on(c, k), J && p.push(...J);
    };
    !i && r.mixins.length && r.mixins.forEach(O), t.extends && O(t.extends), t.mixins && t.mixins.forEach(O);
  }
  if (!d && !m)
    return Nt(t) && s.set(t, Po), Po;
  if (Ue(d))
    for (let O = 0; O < d.length; O++) {
      const L = In(d[O]);
      Rl(L) && (c[L] = yt);
    }
  else if (d)
    for (const O in d) {
      const L = In(O);
      if (Rl(L)) {
        const k = d[O], J = c[L] = Ue(k) || ze(k) ? { type: k } : on({}, k), ee = J.type;
        let G = !1, W = !0;
        if (Ue(ee))
          for (let V = 0; V < ee.length; ++V) {
            const M = ee[V], $ = ze(M) && M.name;
            if ($ === "Boolean") {
              G = !0;
              break;
            } else $ === "String" && (W = !1);
          }
        else
          G = ze(ee) && ee.name === "Boolean";
        J[
          0
          /* shouldCast */
        ] = G, J[
          1
          /* shouldCastTrue */
        ] = W, (G || mt(J, "default")) && p.push(L);
      }
    }
  const S = [c, p];
  return Nt(t) && s.set(t, S), S;
}
function Rl(t) {
  return t[0] !== "$" && !Ri(t);
}
const zs = (t) => t[0] === "_" || t === "$stable", Qs = (t) => Ue(t) ? t.map(Hn) : [Hn(t)], Qf = (t, r, i) => {
  if (r._n)
    return r;
  const s = ws((...u) => Qs(r(...u)), i);
  return s._c = !1, s;
}, ec = (t, r, i) => {
  const s = t._ctx;
  for (const u in t) {
    if (zs(u)) continue;
    const d = t[u];
    if (ze(d))
      r[u] = Qf(u, d, s);
    else if (d != null) {
      const c = Qs(d);
      r[u] = () => c;
    }
  }
}, tc = (t, r) => {
  const i = Qs(r);
  t.slots.default = () => i;
}, nc = (t, r, i) => {
  for (const s in r)
    (i || !zs(s)) && (t[s] = r[s]);
}, Jf = (t, r, i) => {
  const s = t.slots = zu();
  if (t.vnode.shapeFlag & 32) {
    const u = r.__;
    u && vs(s, "__", u, !0);
    const d = r._;
    d ? (nc(s, r, i), i && vs(s, "_", d, !0)) : ec(r, s);
  } else r && tc(t, r);
}, Zf = (t, r, i) => {
  const { vnode: s, slots: u } = t;
  let d = !0, c = yt;
  if (s.shapeFlag & 32) {
    const p = r._;
    p ? i && p === 1 ? d = !1 : nc(u, r, i) : (d = !r.$stable, ec(r, u)), c = r;
  } else r && (tc(t, r), c = { default: 1 });
  if (d)
    for (const p in u)
      !zs(p) && c[p] == null && delete u[p];
}, mn = pd;
function ed(t) {
  return td(t);
}
function td(t, r) {
  const i = ba();
  i.__VUE__ = !0;
  const {
    insert: s,
    remove: u,
    patchProp: d,
    createElement: c,
    createText: p,
    createComment: m,
    setText: S,
    setElementText: O,
    parentNode: L,
    nextSibling: k,
    setScopeId: J = zn,
    insertStaticContent: ee
  } = t, G = (D, U, le, pe = null, ye = null, he = null, xe = void 0, Re = null, ge = !!U.dynamicChildren) => {
    if (D === U)
      return;
    D && !xi(D, U) && (pe = I(D), Kt(D, ye, he, !0), D = null), U.patchFlag === -2 && (ge = !1, U.dynamicChildren = null);
    const { type: me, ref: ke, shapeFlag: Te } = U;
    switch (me) {
      case Ea:
        W(D, U, le, pe);
        break;
      case Sr:
        V(D, U, le, pe);
        break;
      case ea:
        D == null && M(U, le, pe, xe);
        break;
      case Ke:
        Ie(
          D,
          U,
          le,
          pe,
          ye,
          he,
          xe,
          Re,
          ge
        );
        break;
      default:
        Te & 1 ? X(
          D,
          U,
          le,
          pe,
          ye,
          he,
          xe,
          Re,
          ge
        ) : Te & 6 ? He(
          D,
          U,
          le,
          pe,
          ye,
          he,
          xe,
          Re,
          ge
        ) : (Te & 64 || Te & 128) && me.process(
          D,
          U,
          le,
          pe,
          ye,
          he,
          xe,
          Re,
          ge,
          Q
        );
    }
    ke != null && ye ? Oi(ke, D && D.ref, he, U || D, !U) : ke == null && D && D.ref != null && Oi(D.ref, null, he, D, !0);
  }, W = (D, U, le, pe) => {
    if (D == null)
      s(
        U.el = p(U.children),
        le,
        pe
      );
    else {
      const ye = U.el = D.el;
      U.children !== D.children && S(ye, U.children);
    }
  }, V = (D, U, le, pe) => {
    D == null ? s(
      U.el = m(U.children || ""),
      le,
      pe
    ) : U.el = D.el;
  }, M = (D, U, le, pe) => {
    [D.el, D.anchor] = ee(
      D.children,
      U,
      le,
      pe,
      D.el,
      D.anchor
    );
  }, $ = ({ el: D, anchor: U }, le, pe) => {
    let ye;
    for (; D && D !== U; )
      ye = k(D), s(D, le, pe), D = ye;
    s(U, le, pe);
  }, ne = ({ el: D, anchor: U }) => {
    let le;
    for (; D && D !== U; )
      le = k(D), u(D), D = le;
    u(U);
  }, X = (D, U, le, pe, ye, he, xe, Re, ge) => {
    U.type === "svg" ? xe = "svg" : U.type === "math" && (xe = "mathml"), D == null ? H(
      U,
      le,
      pe,
      ye,
      he,
      xe,
      Re,
      ge
    ) : B(
      D,
      U,
      ye,
      he,
      xe,
      Re,
      ge
    );
  }, H = (D, U, le, pe, ye, he, xe, Re) => {
    let ge, me;
    const { props: ke, shapeFlag: Te, transition: Fe, dirs: Me } = D;
    if (ge = D.el = c(
      D.type,
      he,
      ke && ke.is,
      ke
    ), Te & 8 ? O(ge, D.children) : Te & 16 && ue(
      D.children,
      ge,
      null,
      pe,
      ye,
      us(D, he),
      xe,
      Re
    ), Me && _o(D, null, pe, "created"), re(ge, D, D.scopeId, xe, pe), ke) {
      for (const et in ke)
        et !== "value" && !Ri(et) && d(ge, et, null, ke[et], he, pe);
      "value" in ke && d(ge, "value", null, ke.value, he), (me = ke.onVnodeBeforeMount) && Wn(me, pe, D);
    }
    Me && _o(D, null, pe, "beforeMount");
    const Ve = nd(ye, Fe);
    Ve && Fe.beforeEnter(ge), s(ge, U, le), ((me = ke && ke.onVnodeMounted) || Ve || Me) && mn(() => {
      me && Wn(me, pe, D), Ve && Fe.enter(ge), Me && _o(D, null, pe, "mounted");
    }, ye);
  }, re = (D, U, le, pe, ye) => {
    if (le && J(D, le), pe)
      for (let he = 0; he < pe.length; he++)
        J(D, pe[he]);
    if (ye) {
      let he = ye.subTree;
      if (U === he || ac(he.type) && (he.ssContent === U || he.ssFallback === U)) {
        const xe = ye.vnode;
        re(
          D,
          xe,
          xe.scopeId,
          xe.slotScopeIds,
          ye.parent
        );
      }
    }
  }, ue = (D, U, le, pe, ye, he, xe, Re, ge = 0) => {
    for (let me = ge; me < D.length; me++) {
      const ke = D[me] = Re ? jr(D[me]) : Hn(D[me]);
      G(
        null,
        ke,
        U,
        le,
        pe,
        ye,
        he,
        xe,
        Re
      );
    }
  }, B = (D, U, le, pe, ye, he, xe) => {
    const Re = U.el = D.el;
    let { patchFlag: ge, dynamicChildren: me, dirs: ke } = U;
    ge |= D.patchFlag & 16;
    const Te = D.props || yt, Fe = U.props || yt;
    let Me;
    if (le && xo(le, !1), (Me = Fe.onVnodeBeforeUpdate) && Wn(Me, le, U, D), ke && _o(U, D, le, "beforeUpdate"), le && xo(le, !0), (Te.innerHTML && Fe.innerHTML == null || Te.textContent && Fe.textContent == null) && O(Re, ""), me ? we(
      D.dynamicChildren,
      me,
      Re,
      le,
      pe,
      us(U, ye),
      he
    ) : xe || Le(
      D,
      U,
      Re,
      null,
      le,
      pe,
      us(U, ye),
      he,
      !1
    ), ge > 0) {
      if (ge & 16)
        Oe(Re, Te, Fe, le, ye);
      else if (ge & 2 && Te.class !== Fe.class && d(Re, "class", null, Fe.class, ye), ge & 4 && d(Re, "style", Te.style, Fe.style, ye), ge & 8) {
        const Ve = U.dynamicProps;
        for (let et = 0; et < Ve.length; et++) {
          const ot = Ve[et], bt = Te[ot], Dt = Fe[ot];
          (Dt !== bt || ot === "value") && d(Re, ot, bt, Dt, ye, le);
        }
      }
      ge & 1 && D.children !== U.children && O(Re, U.children);
    } else !xe && me == null && Oe(Re, Te, Fe, le, ye);
    ((Me = Fe.onVnodeUpdated) || ke) && mn(() => {
      Me && Wn(Me, le, U, D), ke && _o(U, D, le, "updated");
    }, pe);
  }, we = (D, U, le, pe, ye, he, xe) => {
    for (let Re = 0; Re < U.length; Re++) {
      const ge = D[Re], me = U[Re], ke = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ge.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ge.type === Ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !xi(ge, me) || // - In the case of a component, it could contain anything.
        ge.shapeFlag & 198) ? L(ge.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          le
        )
      );
      G(
        ge,
        me,
        ke,
        null,
        pe,
        ye,
        he,
        xe,
        !0
      );
    }
  }, Oe = (D, U, le, pe, ye) => {
    if (U !== le) {
      if (U !== yt)
        for (const he in U)
          !Ri(he) && !(he in le) && d(
            D,
            he,
            U[he],
            null,
            ye,
            pe
          );
      for (const he in le) {
        if (Ri(he)) continue;
        const xe = le[he], Re = U[he];
        xe !== Re && he !== "value" && d(D, he, Re, xe, ye, pe);
      }
      "value" in le && d(D, "value", U.value, le.value, ye);
    }
  }, Ie = (D, U, le, pe, ye, he, xe, Re, ge) => {
    const me = U.el = D ? D.el : p(""), ke = U.anchor = D ? D.anchor : p("");
    let { patchFlag: Te, dynamicChildren: Fe, slotScopeIds: Me } = U;
    Me && (Re = Re ? Re.concat(Me) : Me), D == null ? (s(me, le, pe), s(ke, le, pe), ue(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      le,
      ke,
      ye,
      he,
      xe,
      Re,
      ge
    )) : Te > 0 && Te & 64 && Fe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    D.dynamicChildren ? (we(
      D.dynamicChildren,
      Fe,
      le,
      ye,
      he,
      xe,
      Re
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || ye && U === ye.subTree) && Js(
      D,
      U,
      !0
      /* shallow */
    )) : Le(
      D,
      U,
      le,
      ke,
      ye,
      he,
      xe,
      Re,
      ge
    );
  }, He = (D, U, le, pe, ye, he, xe, Re, ge) => {
    U.slotScopeIds = Re, D == null ? U.shapeFlag & 512 ? ye.ctx.activate(
      U,
      le,
      pe,
      xe,
      ge
    ) : Ft(
      U,
      le,
      pe,
      ye,
      he,
      xe,
      ge
    ) : Qe(D, U, ge);
  }, Ft = (D, U, le, pe, ye, he, xe) => {
    const Re = D.component = bd(
      D,
      pe,
      ye
    );
    if (qu(D) && (Re.ctx.renderer = Q), _d(Re, !1, xe), Re.asyncDep) {
      if (ye && ye.registerDep(Re, $e, xe), !D.el) {
        const ge = Re.subTree = ht(Sr);
        V(null, ge, U, le);
      }
    } else
      $e(
        Re,
        D,
        U,
        le,
        ye,
        he,
        xe
      );
  }, Qe = (D, U, le) => {
    const pe = U.component = D.component;
    if (fd(D, U, le))
      if (pe.asyncDep && !pe.asyncResolved) {
        Ce(pe, U, le);
        return;
      } else
        pe.next = U, pe.update();
    else
      U.el = D.el, pe.vnode = U;
  }, $e = (D, U, le, pe, ye, he, xe) => {
    const Re = () => {
      if (D.isMounted) {
        let { next: Te, bu: Fe, u: Me, parent: Ve, vnode: et } = D;
        {
          const wt = rc(D);
          if (wt) {
            Te && (Te.el = et.el, Ce(D, Te, xe)), wt.asyncDep.then(() => {
              D.isUnmounted || Re();
            });
            return;
          }
        }
        let ot = Te, bt;
        xo(D, !1), Te ? (Te.el = et.el, Ce(D, Te, xe)) : Te = et, Fe && Ji(Fe), (bt = Te.props && Te.props.onVnodeBeforeUpdate) && Wn(bt, Ve, Te, et), xo(D, !0);
        const Dt = Cl(D), kt = D.subTree;
        D.subTree = Dt, G(
          kt,
          Dt,
          // parent may have changed if it's in a teleport
          L(kt.el),
          // anchor may have changed if it's in a fragment
          I(kt),
          D,
          ye,
          he
        ), Te.el = Dt.el, ot === null && dd(D, Dt.el), Me && mn(Me, ye), (bt = Te.props && Te.props.onVnodeUpdated) && mn(
          () => Wn(bt, Ve, Te, et),
          ye
        );
      } else {
        let Te;
        const { el: Fe, props: Me } = U, { bm: Ve, m: et, parent: ot, root: bt, type: Dt } = D, kt = jo(U);
        xo(D, !1), Ve && Ji(Ve), !kt && (Te = Me && Me.onVnodeBeforeMount) && Wn(Te, ot, U), xo(D, !0);
        {
          bt.ce && // @ts-expect-error _def is private
          bt.ce._def.shadowRoot !== !1 && bt.ce._injectChildStyle(Dt);
          const wt = D.subTree = Cl(D);
          G(
            null,
            wt,
            le,
            pe,
            D,
            ye,
            he
          ), U.el = wt.el;
        }
        if (et && mn(et, ye), !kt && (Te = Me && Me.onVnodeMounted)) {
          const wt = U;
          mn(
            () => Wn(Te, ot, wt),
            ye
          );
        }
        (U.shapeFlag & 256 || ot && jo(ot.vnode) && ot.vnode.shapeFlag & 256) && D.a && mn(D.a, ye), D.isMounted = !0, U = le = pe = null;
      }
    };
    D.scope.on();
    const ge = D.effect = new pu(Re);
    D.scope.off();
    const me = D.update = ge.run.bind(ge), ke = D.job = ge.runIfDirty.bind(ge);
    ke.i = D, ke.id = D.uid, ge.scheduler = () => Hs(ke), xo(D, !0), me();
  }, Ce = (D, U, le) => {
    U.component = D;
    const pe = D.vnode.props;
    D.vnode = U, D.next = null, Xf(D, U.props, pe, le), Zf(D, U.children, le), Dr(), hl(D), Ir();
  }, Le = (D, U, le, pe, ye, he, xe, Re, ge = !1) => {
    const me = D && D.children, ke = D ? D.shapeFlag : 0, Te = U.children, { patchFlag: Fe, shapeFlag: Me } = U;
    if (Fe > 0) {
      if (Fe & 128) {
        vt(
          me,
          Te,
          le,
          pe,
          ye,
          he,
          xe,
          Re,
          ge
        );
        return;
      } else if (Fe & 256) {
        ft(
          me,
          Te,
          le,
          pe,
          ye,
          he,
          xe,
          Re,
          ge
        );
        return;
      }
    }
    Me & 8 ? (ke & 16 && St(me, ye, he), Te !== me && O(le, Te)) : ke & 16 ? Me & 16 ? vt(
      me,
      Te,
      le,
      pe,
      ye,
      he,
      xe,
      Re,
      ge
    ) : St(me, ye, he, !0) : (ke & 8 && O(le, ""), Me & 16 && ue(
      Te,
      le,
      pe,
      ye,
      he,
      xe,
      Re,
      ge
    ));
  }, ft = (D, U, le, pe, ye, he, xe, Re, ge) => {
    D = D || Po, U = U || Po;
    const me = D.length, ke = U.length, Te = Math.min(me, ke);
    let Fe;
    for (Fe = 0; Fe < Te; Fe++) {
      const Me = U[Fe] = ge ? jr(U[Fe]) : Hn(U[Fe]);
      G(
        D[Fe],
        Me,
        le,
        null,
        ye,
        he,
        xe,
        Re,
        ge
      );
    }
    me > ke ? St(
      D,
      ye,
      he,
      !0,
      !1,
      Te
    ) : ue(
      U,
      le,
      pe,
      ye,
      he,
      xe,
      Re,
      ge,
      Te
    );
  }, vt = (D, U, le, pe, ye, he, xe, Re, ge) => {
    let me = 0;
    const ke = U.length;
    let Te = D.length - 1, Fe = ke - 1;
    for (; me <= Te && me <= Fe; ) {
      const Me = D[me], Ve = U[me] = ge ? jr(U[me]) : Hn(U[me]);
      if (xi(Me, Ve))
        G(
          Me,
          Ve,
          le,
          null,
          ye,
          he,
          xe,
          Re,
          ge
        );
      else
        break;
      me++;
    }
    for (; me <= Te && me <= Fe; ) {
      const Me = D[Te], Ve = U[Fe] = ge ? jr(U[Fe]) : Hn(U[Fe]);
      if (xi(Me, Ve))
        G(
          Me,
          Ve,
          le,
          null,
          ye,
          he,
          xe,
          Re,
          ge
        );
      else
        break;
      Te--, Fe--;
    }
    if (me > Te) {
      if (me <= Fe) {
        const Me = Fe + 1, Ve = Me < ke ? U[Me].el : pe;
        for (; me <= Fe; )
          G(
            null,
            U[me] = ge ? jr(U[me]) : Hn(U[me]),
            le,
            Ve,
            ye,
            he,
            xe,
            Re,
            ge
          ), me++;
      }
    } else if (me > Fe)
      for (; me <= Te; )
        Kt(D[me], ye, he, !0), me++;
    else {
      const Me = me, Ve = me, et = /* @__PURE__ */ new Map();
      for (me = Ve; me <= Fe; me++) {
        const dt = U[me] = ge ? jr(U[me]) : Hn(U[me]);
        dt.key != null && et.set(dt.key, me);
      }
      let ot, bt = 0;
      const Dt = Fe - Ve + 1;
      let kt = !1, wt = 0;
      const an = new Array(Dt);
      for (me = 0; me < Dt; me++) an[me] = 0;
      for (me = Me; me <= Te; me++) {
        const dt = D[me];
        if (bt >= Dt) {
          Kt(dt, ye, he, !0);
          continue;
        }
        let de;
        if (dt.key != null)
          de = et.get(dt.key);
        else
          for (ot = Ve; ot <= Fe; ot++)
            if (an[ot - Ve] === 0 && xi(dt, U[ot])) {
              de = ot;
              break;
            }
        de === void 0 ? Kt(dt, ye, he, !0) : (an[de - Ve] = me + 1, de >= wt ? wt = de : kt = !0, G(
          dt,
          U[de],
          le,
          null,
          ye,
          he,
          xe,
          Re,
          ge
        ), bt++);
      }
      const Vn = kt ? rd(an) : Po;
      for (ot = Vn.length - 1, me = Dt - 1; me >= 0; me--) {
        const dt = Ve + me, de = U[dt], bn = dt + 1 < ke ? U[dt + 1].el : pe;
        an[me] === 0 ? G(
          null,
          de,
          le,
          bn,
          ye,
          he,
          xe,
          Re,
          ge
        ) : kt && (ot < 0 || me !== Vn[ot] ? Et(de, le, bn, 2) : ot--);
      }
    }
  }, Et = (D, U, le, pe, ye = null) => {
    const { el: he, type: xe, transition: Re, children: ge, shapeFlag: me } = D;
    if (me & 6) {
      Et(D.component.subTree, U, le, pe);
      return;
    }
    if (me & 128) {
      D.suspense.move(U, le, pe);
      return;
    }
    if (me & 64) {
      xe.move(D, U, le, Q);
      return;
    }
    if (xe === Ke) {
      s(he, U, le);
      for (let Te = 0; Te < ge.length; Te++)
        Et(ge[Te], U, le, pe);
      s(D.anchor, U, le);
      return;
    }
    if (xe === ea) {
      $(D, U, le);
      return;
    }
    if (pe !== 2 && me & 1 && Re)
      if (pe === 0)
        Re.beforeEnter(he), s(he, U, le), mn(() => Re.enter(he), ye);
      else {
        const { leave: Te, delayLeave: Fe, afterLeave: Me } = Re, Ve = () => {
          D.ctx.isUnmounted ? u(he) : s(he, U, le);
        }, et = () => {
          Te(he, () => {
            Ve(), Me && Me();
          });
        };
        Fe ? Fe(he, Ve, et) : et();
      }
    else
      s(he, U, le);
  }, Kt = (D, U, le, pe = !1, ye = !1) => {
    const {
      type: he,
      props: xe,
      ref: Re,
      children: ge,
      dynamicChildren: me,
      shapeFlag: ke,
      patchFlag: Te,
      dirs: Fe,
      cacheIndex: Me
    } = D;
    if (Te === -2 && (ye = !1), Re != null && (Dr(), Oi(Re, null, le, D, !0), Ir()), Me != null && (U.renderCache[Me] = void 0), ke & 256) {
      U.ctx.deactivate(D);
      return;
    }
    const Ve = ke & 1 && Fe, et = !jo(D);
    let ot;
    if (et && (ot = xe && xe.onVnodeBeforeUnmount) && Wn(ot, U, D), ke & 6)
      gn(D.component, le, pe);
    else {
      if (ke & 128) {
        D.suspense.unmount(le, pe);
        return;
      }
      Ve && _o(D, null, U, "beforeUnmount"), ke & 64 ? D.type.remove(
        D,
        U,
        le,
        Q,
        pe
      ) : me && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !me.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (he !== Ke || Te > 0 && Te & 64) ? St(
        me,
        U,
        le,
        !1,
        !0
      ) : (he === Ke && Te & 384 || !ye && ke & 16) && St(ge, U, le), pe && qt(D);
    }
    (et && (ot = xe && xe.onVnodeUnmounted) || Ve) && mn(() => {
      ot && Wn(ot, U, D), Ve && _o(D, null, U, "unmounted");
    }, le);
  }, qt = (D) => {
    const { type: U, el: le, anchor: pe, transition: ye } = D;
    if (U === Ke) {
      Un(le, pe);
      return;
    }
    if (U === ea) {
      ne(D);
      return;
    }
    const he = () => {
      u(le), ye && !ye.persisted && ye.afterLeave && ye.afterLeave();
    };
    if (D.shapeFlag & 1 && ye && !ye.persisted) {
      const { leave: xe, delayLeave: Re } = ye, ge = () => xe(le, he);
      Re ? Re(D.el, he, ge) : ge();
    } else
      he();
  }, Un = (D, U) => {
    let le;
    for (; D !== U; )
      le = k(D), u(D), D = le;
    u(U);
  }, gn = (D, U, le) => {
    const {
      bum: pe,
      scope: ye,
      job: he,
      subTree: xe,
      um: Re,
      m: ge,
      a: me,
      parent: ke,
      slots: { __: Te }
    } = D;
    Tl(ge), Tl(me), pe && Ji(pe), ke && Ue(Te) && Te.forEach((Fe) => {
      ke.renderCache[Fe] = void 0;
    }), ye.stop(), he && (he.flags |= 8, Kt(xe, D, U, le)), Re && mn(Re, U), mn(() => {
      D.isUnmounted = !0;
    }, U), U && U.pendingBranch && !U.isUnmounted && D.asyncDep && !D.asyncResolved && D.suspenseId === U.pendingId && (U.deps--, U.deps === 0 && U.resolve());
  }, St = (D, U, le, pe = !1, ye = !1, he = 0) => {
    for (let xe = he; xe < D.length; xe++)
      Kt(D[xe], U, le, pe, ye);
  }, I = (D) => {
    if (D.shapeFlag & 6)
      return I(D.component.subTree);
    if (D.shapeFlag & 128)
      return D.suspense.next();
    const U = k(D.anchor || D.el), le = U && U[Mu];
    return le ? k(le) : U;
  };
  let N = !1;
  const q = (D, U, le) => {
    D == null ? U._vnode && Kt(U._vnode, null, null, !0) : G(
      U._vnode || null,
      D,
      U,
      null,
      null,
      null,
      le
    ), U._vnode = D, N || (N = !0, hl(), ku(), N = !1);
  }, Q = {
    p: G,
    um: Kt,
    m: Et,
    r: qt,
    mt: Ft,
    mc: ue,
    pc: Le,
    pbc: we,
    n: I,
    o: t
  };
  return {
    render: q,
    hydrate: void 0,
    createApp: Wf(q)
  };
}
function us({ type: t, props: r }, i) {
  return i === "svg" && t === "foreignObject" || i === "mathml" && t === "annotation-xml" && r && r.encoding && r.encoding.includes("html") ? void 0 : i;
}
function xo({ effect: t, job: r }, i) {
  i ? (t.flags |= 32, r.flags |= 4) : (t.flags &= -33, r.flags &= -5);
}
function nd(t, r) {
  return (!t || t && !t.pendingBranch) && r && !r.persisted;
}
function Js(t, r, i = !1) {
  const s = t.children, u = r.children;
  if (Ue(s) && Ue(u))
    for (let d = 0; d < s.length; d++) {
      const c = s[d];
      let p = u[d];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = u[d] = jr(u[d]), p.el = c.el), !i && p.patchFlag !== -2 && Js(c, p)), p.type === Ea && (p.el = c.el), p.type === Sr && !p.el && (p.el = c.el);
    }
}
function rd(t) {
  const r = t.slice(), i = [0];
  let s, u, d, c, p;
  const m = t.length;
  for (s = 0; s < m; s++) {
    const S = t[s];
    if (S !== 0) {
      if (u = i[i.length - 1], t[u] < S) {
        r[s] = u, i.push(s);
        continue;
      }
      for (d = 0, c = i.length - 1; d < c; )
        p = d + c >> 1, t[i[p]] < S ? d = p + 1 : c = p;
      S < t[i[d]] && (d > 0 && (r[s] = i[d - 1]), i[d] = s);
    }
  }
  for (d = i.length, c = i[d - 1]; d-- > 0; )
    i[d] = c, c = r[c];
  return i;
}
function rc(t) {
  const r = t.subTree.component;
  if (r)
    return r.asyncDep && !r.asyncResolved ? r : rc(r);
}
function Tl(t) {
  if (t)
    for (let r = 0; r < t.length; r++)
      t[r].flags |= 8;
}
const od = Symbol.for("v-scx"), id = () => Di(od);
function Zs(t, r) {
  return el(t, null, r);
}
function Ut(t, r, i) {
  return el(t, r, i);
}
function el(t, r, i = yt) {
  const { immediate: s, deep: u, flush: d, once: c } = i, p = on({}, i), m = r && s || !r && d !== "post";
  let S;
  if (Fi) {
    if (d === "sync") {
      const J = id();
      S = J.__watcherHandles || (J.__watcherHandles = []);
    } else if (!m) {
      const J = () => {
      };
      return J.stop = zn, J.resume = zn, J.pause = zn, J;
    }
  }
  const O = Vt;
  p.call = (J, ee, G) => Qn(J, O, ee, G);
  let L = !1;
  d === "post" ? p.scheduler = (J) => {
    mn(J, O && O.suspense);
  } : d !== "sync" && (L = !0, p.scheduler = (J, ee) => {
    ee ? J() : Hs(J);
  }), p.augmentJob = (J) => {
    r && (J.flags |= 4), L && (J.flags |= 2, O && (J.id = O.uid, J.i = O));
  };
  const k = yf(t, r, p);
  return Fi && (S ? S.push(k) : m && k()), k;
}
function ad(t, r, i) {
  const s = this.proxy, u = At(t) ? t.includes(".") ? oc(s, t) : () => s[t] : t.bind(s, s);
  let d;
  ze(r) ? d = r : (d = r.handler, i = r);
  const c = Vi(this), p = el(u, d.bind(s), i);
  return c(), p;
}
function oc(t, r) {
  const i = r.split(".");
  return () => {
    let s = t;
    for (let u = 0; u < i.length && s; u++)
      s = s[i[u]];
    return s;
  };
}
const sd = (t, r) => r === "modelValue" || r === "model-value" ? t.modelModifiers : t[`${r}Modifiers`] || t[`${In(r)}Modifiers`] || t[`${Ao(r)}Modifiers`];
function ld(t, r, ...i) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || yt;
  let u = i;
  const d = r.startsWith("update:"), c = d && sd(s, r.slice(7));
  c && (c.trim && (u = i.map((O) => At(O) ? O.trim() : O)), c.number && (u = i.map(ia)));
  let p, m = s[p = rs(r)] || // also try camelCase event handler (#2249)
  s[p = rs(In(r))];
  !m && d && (m = s[p = rs(Ao(r))]), m && Qn(
    m,
    t,
    6,
    u
  );
  const S = s[p + "Once"];
  if (S) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[p])
      return;
    t.emitted[p] = !0, Qn(
      S,
      t,
      6,
      u
    );
  }
}
function ic(t, r, i = !1) {
  const s = r.emitsCache, u = s.get(t);
  if (u !== void 0)
    return u;
  const d = t.emits;
  let c = {}, p = !1;
  if (!ze(t)) {
    const m = (S) => {
      const O = ic(S, r, !0);
      O && (p = !0, on(c, O));
    };
    !i && r.mixins.length && r.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !d && !p ? (Nt(t) && s.set(t, null), null) : (Ue(d) ? d.forEach((m) => c[m] = null) : on(c, d), Nt(t) && s.set(t, c), c);
}
function Ca(t, r) {
  return !t || !va(r) ? !1 : (r = r.slice(2).replace(/Once$/, ""), mt(t, r[0].toLowerCase() + r.slice(1)) || mt(t, Ao(r)) || mt(t, r));
}
function Cl(t) {
  const {
    type: r,
    vnode: i,
    proxy: s,
    withProxy: u,
    propsOptions: [d],
    slots: c,
    attrs: p,
    emit: m,
    render: S,
    renderCache: O,
    props: L,
    data: k,
    setupState: J,
    ctx: ee,
    inheritAttrs: G
  } = t, W = ca(t);
  let V, M;
  try {
    if (i.shapeFlag & 4) {
      const ne = u || s, X = ne;
      V = Hn(
        S.call(
          X,
          ne,
          O,
          L,
          J,
          k,
          ee
        )
      ), M = p;
    } else {
      const ne = r;
      V = Hn(
        ne.length > 1 ? ne(
          L,
          { attrs: p, slots: c, emit: m }
        ) : ne(
          L,
          null
        )
      ), M = r.props ? p : ud(p);
    }
  } catch (ne) {
    Ii.length = 0, Ra(ne, t, 1), V = ht(Sr);
  }
  let $ = V;
  if (M && G !== !1) {
    const ne = Object.keys(M), { shapeFlag: X } = $;
    ne.length && X & 7 && (d && ne.some(js) && (M = cd(
      M,
      d
    )), $ = Mo($, M, !1, !0));
  }
  return i.dirs && ($ = Mo($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(i.dirs) : i.dirs), i.transition && Ys($, i.transition), V = $, ca(W), V;
}
const ud = (t) => {
  let r;
  for (const i in t)
    (i === "class" || i === "style" || va(i)) && ((r || (r = {}))[i] = t[i]);
  return r;
}, cd = (t, r) => {
  const i = {};
  for (const s in t)
    (!js(s) || !(s.slice(9) in r)) && (i[s] = t[s]);
  return i;
};
function fd(t, r, i) {
  const { props: s, children: u, component: d } = t, { props: c, children: p, patchFlag: m } = r, S = d.emitsOptions;
  if (r.dirs || r.transition)
    return !0;
  if (i && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? El(s, c, S) : !!c;
    if (m & 8) {
      const O = r.dynamicProps;
      for (let L = 0; L < O.length; L++) {
        const k = O[L];
        if (c[k] !== s[k] && !Ca(S, k))
          return !0;
      }
    }
  } else
    return (u || p) && (!p || !p.$stable) ? !0 : s === c ? !1 : s ? c ? El(s, c, S) : !0 : !!c;
  return !1;
}
function El(t, r, i) {
  const s = Object.keys(r);
  if (s.length !== Object.keys(t).length)
    return !0;
  for (let u = 0; u < s.length; u++) {
    const d = s[u];
    if (r[d] !== t[d] && !Ca(i, d))
      return !0;
  }
  return !1;
}
function dd({ vnode: t, parent: r }, i) {
  for (; r; ) {
    const s = r.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t)
      (t = r.vnode).el = i, r = r.parent;
    else
      break;
  }
}
const ac = (t) => t.__isSuspense;
function pd(t, r) {
  r && r.pendingBranch ? Ue(t) ? r.effects.push(...t) : r.effects.push(t) : wf(t);
}
const Ke = Symbol.for("v-fgt"), Ea = Symbol.for("v-txt"), Sr = Symbol.for("v-cmt"), ea = Symbol.for("v-stc"), Ii = [];
let En = null;
function fe(t = !1) {
  Ii.push(En = t ? null : []);
}
function hd() {
  Ii.pop(), En = Ii[Ii.length - 1] || null;
}
let ji = 1;
function Ol(t, r = !1) {
  ji += t, t < 0 && En && r && (En.hasOnce = !0);
}
function sc(t) {
  return t.dynamicChildren = ji > 0 ? En || Po : null, hd(), ji > 0 && En && En.push(t), t;
}
function ve(t, r, i, s, u, d) {
  return sc(
    y(
      t,
      r,
      i,
      s,
      u,
      d,
      !0
    )
  );
}
function Zt(t, r, i, s, u) {
  return sc(
    ht(
      t,
      r,
      i,
      s,
      u,
      !0
    )
  );
}
function tl(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function xi(t, r) {
  return t.type === r.type && t.key === r.key;
}
const lc = ({ key: t }) => t ?? null, ta = ({
  ref: t,
  ref_key: r,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? At(t) || Ot(t) || ze(t) ? { i: Bt, r: t, k: r, f: !!i } : t : null);
function y(t, r = null, i = null, s = 0, u = null, d = t === Ke ? 0 : 1, c = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && lc(r),
    ref: r && ta(r),
    scopeId: Fu,
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
    shapeFlag: d,
    patchFlag: s,
    dynamicProps: u,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  };
  return p ? (rl(m, i), d & 128 && t.normalize(m)) : i && (m.shapeFlag |= At(i) ? 8 : 16), ji > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  En && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && En.push(m), m;
}
const ht = md;
function md(t, r = null, i = null, s = 0, u = null, d = !1) {
  if ((!t || t === Vu) && (t = Sr), tl(t)) {
    const p = Mo(
      t,
      r,
      !0
      /* mergeRef: true */
    );
    return i && rl(p, i), ji > 0 && !d && En && (p.shapeFlag & 6 ? En[En.indexOf(t)] = p : En.push(p)), p.patchFlag = -2, p;
  }
  if (Cd(t) && (t = t.__vccOpts), r) {
    r = vd(r);
    let { class: p, style: m } = r;
    p && !At(p) && (r.class = Jt(p)), Nt(m) && (Ws(m) && !Ue(m) && (m = on({}, m)), r.style = qr(m));
  }
  const c = At(t) ? 1 : ac(t) ? 128 : _f(t) ? 64 : Nt(t) ? 4 : ze(t) ? 2 : 0;
  return y(
    t,
    r,
    i,
    s,
    u,
    c,
    d,
    !0
  );
}
function vd(t) {
  return t ? Ws(t) || Qu(t) ? on({}, t) : t : null;
}
function Mo(t, r, i = !1, s = !1) {
  const { props: u, ref: d, patchFlag: c, children: p, transition: m } = t, S = r ? cc(u || {}, r) : u, O = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: S,
    key: S && lc(S),
    ref: r && r.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && d ? Ue(d) ? d.concat(ta(r)) : [d, ta(r)] : ta(r)
    ) : d,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: p,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: r && t.type !== Ke ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: m,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: t.component,
    suspense: t.suspense,
    ssContent: t.ssContent && Mo(t.ssContent),
    ssFallback: t.ssFallback && Mo(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return m && s && Ys(
    O,
    m.clone(O)
  ), O;
}
function nl(t = " ", r = 0) {
  return ht(Ea, null, t, r);
}
function uc(t, r) {
  const i = ht(ea, null, t);
  return i.staticCount = r, i;
}
function Ge(t = "", r = !1) {
  return r ? (fe(), Zt(Sr, null, t)) : ht(Sr, null, t);
}
function Hn(t) {
  return t == null || typeof t == "boolean" ? ht(Sr) : Ue(t) ? ht(
    Ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : tl(t) ? jr(t) : ht(Ea, null, String(t));
}
function jr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Mo(t);
}
function rl(t, r) {
  let i = 0;
  const { shapeFlag: s } = t;
  if (r == null)
    r = null;
  else if (Ue(r))
    i = 16;
  else if (typeof r == "object")
    if (s & 65) {
      const u = r.default;
      u && (u._c && (u._d = !1), rl(t, u()), u._c && (u._d = !0));
      return;
    } else {
      i = 32;
      const u = r._;
      !u && !Qu(r) ? r._ctx = Bt : u === 3 && Bt && (Bt.slots._ === 1 ? r._ = 1 : (r._ = 2, t.patchFlag |= 1024));
    }
  else ze(r) ? (r = { default: r, _ctx: Bt }, i = 32) : (r = String(r), s & 64 ? (i = 16, r = [nl(r)]) : i = 8);
  t.children = r, t.shapeFlag |= i;
}
function cc(...t) {
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    for (const u in s)
      if (u === "class")
        r.class !== s.class && (r.class = Jt([r.class, s.class]));
      else if (u === "style")
        r.style = qr([r.style, s.style]);
      else if (va(u)) {
        const d = r[u], c = s[u];
        c && d !== c && !(Ue(d) && d.includes(c)) && (r[u] = d ? [].concat(d, c) : c);
      } else u !== "" && (r[u] = s[u]);
  }
  return r;
}
function Wn(t, r, i, s = null) {
  Qn(t, r, 7, [
    i,
    s
  ]);
}
const yd = Yu();
let gd = 0;
function bd(t, r, i) {
  const s = t.type, u = (r ? r.appContext : t.appContext) || yd, d = {
    uid: gd++,
    vnode: t,
    type: s,
    parent: r,
    appContext: u,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new cu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: r ? r.provides : Object.create(u.provides),
    ids: r ? r.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Zu(s, u),
    emitsOptions: ic(s, u),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: yt,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: yt,
    data: yt,
    props: yt,
    attrs: yt,
    slots: yt,
    refs: yt,
    setupState: yt,
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
  return d.ctx = { _: d }, d.root = r ? r.root : d, d.emit = ld.bind(null, d), t.ce && t.ce(d), d;
}
let Vt = null;
const wd = () => Vt || Bt;
let da, Cs;
{
  const t = ba(), r = (i, s) => {
    let u;
    return (u = t[i]) || (u = t[i] = []), u.push(s), (d) => {
      u.length > 1 ? u.forEach((c) => c(d)) : u[0](d);
    };
  };
  da = r(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Vt = i
  ), Cs = r(
    "__VUE_SSR_SETTERS__",
    (i) => Fi = i
  );
}
const Vi = (t) => {
  const r = Vt;
  return da(t), t.scope.on(), () => {
    t.scope.off(), da(r);
  };
}, Al = () => {
  Vt && Vt.scope.off(), da(null);
};
function fc(t) {
  return t.vnode.shapeFlag & 4;
}
let Fi = !1;
function _d(t, r = !1, i = !1) {
  r && Cs(r);
  const { props: s, children: u } = t.vnode, d = fc(t);
  Yf(t, s, d, r), Jf(t, u, i || r);
  const c = d ? xd(t, r) : void 0;
  return r && Cs(!1), c;
}
function xd(t, r) {
  const i = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Mf);
  const { setup: s } = i;
  if (s) {
    Dr();
    const u = t.setupContext = s.length > 1 ? Rd(t) : null, d = Vi(t), c = Ui(
      s,
      t,
      0,
      [
        t.props,
        u
      ]
    ), p = ou(c);
    if (Ir(), d(), (p || t.sp) && !jo(t) && Ku(t), p) {
      if (c.then(Al, Al), r)
        return c.then((m) => {
          Dl(t, m);
        }).catch((m) => {
          Ra(m, t, 0);
        });
      t.asyncDep = c;
    } else
      Dl(t, c);
  } else
    dc(t);
}
function Dl(t, r, i) {
  ze(r) ? t.type.__ssrInlineRender ? t.ssrRender = r : t.render = r : Nt(r) && (t.setupState = Iu(r)), dc(t);
}
function dc(t, r, i) {
  const s = t.type;
  t.render || (t.render = s.render || zn);
  {
    const u = Vi(t);
    Dr();
    try {
      $f(t);
    } finally {
      Ir(), u();
    }
  }
}
const Nd = {
  get(t, r) {
    return rn(t, "get", ""), t[r];
  }
};
function Rd(t) {
  const r = (i) => {
    t.exposed = i || {};
  };
  return {
    attrs: new Proxy(t.attrs, Nd),
    slots: t.slots,
    emit: t.emit,
    expose: r
  };
}
function Oa(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Iu(Na(t.exposed)), {
    get(r, i) {
      if (i in r)
        return r[i];
      if (i in Ai)
        return Ai[i](t);
    },
    has(r, i) {
      return i in r || i in Ai;
    }
  })) : t.proxy;
}
function Td(t, r = !0) {
  return ze(t) ? t.displayName || t.name : t.name || r && t.__name;
}
function Cd(t) {
  return ze(t) && "__vccOpts" in t;
}
const Xe = (t, r) => mf(t, r, Fi), Ed = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Es;
const Il = typeof window < "u" && window.trustedTypes;
if (Il)
  try {
    Es = /* @__PURE__ */ Il.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const pc = Es ? (t) => Es.createHTML(t) : (t) => t, Od = "http://www.w3.org/2000/svg", Ad = "http://www.w3.org/1998/Math/MathML", Rr = typeof document < "u" ? document : null, Sl = Rr && /* @__PURE__ */ Rr.createElement("template"), Dd = {
  insert: (t, r, i) => {
    r.insertBefore(t, i || null);
  },
  remove: (t) => {
    const r = t.parentNode;
    r && r.removeChild(t);
  },
  createElement: (t, r, i, s) => {
    const u = r === "svg" ? Rr.createElementNS(Od, t) : r === "mathml" ? Rr.createElementNS(Ad, t) : i ? Rr.createElement(t, { is: i }) : Rr.createElement(t);
    return t === "select" && s && s.multiple != null && u.setAttribute("multiple", s.multiple), u;
  },
  createText: (t) => Rr.createTextNode(t),
  createComment: (t) => Rr.createComment(t),
  setText: (t, r) => {
    t.nodeValue = r;
  },
  setElementText: (t, r) => {
    t.textContent = r;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Rr.querySelector(t),
  setScopeId(t, r) {
    t.setAttribute(r, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, r, i, s, u, d) {
    const c = i ? i.previousSibling : r.lastChild;
    if (u && (u === d || u.nextSibling))
      for (; r.insertBefore(u.cloneNode(!0), i), !(u === d || !(u = u.nextSibling)); )
        ;
    else {
      Sl.innerHTML = pc(
        s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t
      );
      const p = Sl.content;
      if (s === "svg" || s === "mathml") {
        const m = p.firstChild;
        for (; m.firstChild; )
          p.appendChild(m.firstChild);
        p.removeChild(m);
      }
      r.insertBefore(p, i);
    }
    return [
      // first
      c ? c.nextSibling : r.firstChild,
      // last
      i ? i.previousSibling : r.lastChild
    ];
  }
}, Id = Symbol("_vtc");
function Sd(t, r, i) {
  const s = t[Id];
  s && (r = (r ? [r, ...s] : [...s]).join(" ")), r == null ? t.removeAttribute("class") : i ? t.setAttribute("class", r) : t.className = r;
}
const Pl = Symbol("_vod"), Pd = Symbol("_vsh"), Ld = Symbol(""), kd = /(^|;)\s*display\s*:/;
function jd(t, r, i) {
  const s = t.style, u = At(i);
  let d = !1;
  if (i && !u) {
    if (r)
      if (At(r))
        for (const c of r.split(";")) {
          const p = c.slice(0, c.indexOf(":")).trim();
          i[p] == null && na(s, p, "");
        }
      else
        for (const c in r)
          i[c] == null && na(s, c, "");
    for (const c in i)
      c === "display" && (d = !0), na(s, c, i[c]);
  } else if (u) {
    if (r !== i) {
      const c = s[Ld];
      c && (i += ";" + c), s.cssText = i, d = kd.test(i);
    }
  } else r && t.removeAttribute("style");
  Pl in t && (t[Pl] = d ? s.display : "", t[Pd] && (s.display = "none"));
}
const Ll = /\s*!important$/;
function na(t, r, i) {
  if (Ue(i))
    i.forEach((s) => na(t, r, s));
  else if (i == null && (i = ""), r.startsWith("--"))
    t.setProperty(r, i);
  else {
    const s = Fd(t, r);
    Ll.test(i) ? t.setProperty(
      Ao(s),
      i.replace(Ll, ""),
      "important"
    ) : t[s] = i;
  }
}
const kl = ["Webkit", "Moz", "ms"], cs = {};
function Fd(t, r) {
  const i = cs[r];
  if (i)
    return i;
  let s = In(r);
  if (s !== "filter" && s in t)
    return cs[r] = s;
  s = ga(s);
  for (let u = 0; u < kl.length; u++) {
    const d = kl[u] + s;
    if (d in t)
      return cs[r] = d;
  }
  return r;
}
const jl = "http://www.w3.org/1999/xlink";
function Fl(t, r, i, s, u, d = Fc(r)) {
  s && r.startsWith("xlink:") ? i == null ? t.removeAttributeNS(jl, r.slice(6, r.length)) : t.setAttributeNS(jl, r, i) : i == null || d && !su(i) ? t.removeAttribute(r) : t.setAttribute(
    r,
    d ? "" : qn(i) ? String(i) : i
  );
}
function Ml(t, r, i, s, u) {
  if (r === "innerHTML" || r === "textContent") {
    i != null && (t[r] = r === "innerHTML" ? pc(i) : i);
    return;
  }
  const d = t.tagName;
  if (r === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const p = d === "OPTION" ? t.getAttribute("value") || "" : t.value, m = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(i);
    (p !== m || !("_value" in t)) && (t.value = m), i == null && t.removeAttribute(r), t._value = i;
    return;
  }
  let c = !1;
  if (i === "" || i == null) {
    const p = typeof t[r];
    p === "boolean" ? i = su(i) : i == null && p === "string" ? (i = "", c = !0) : p === "number" && (i = 0, c = !0);
  }
  try {
    t[r] = i;
  } catch {
  }
  c && t.removeAttribute(u || r);
}
function Er(t, r, i, s) {
  t.addEventListener(r, i, s);
}
function Md(t, r, i, s) {
  t.removeEventListener(r, i, s);
}
const $l = Symbol("_vei");
function $d(t, r, i, s, u = null) {
  const d = t[$l] || (t[$l] = {}), c = d[r];
  if (s && c)
    c.value = s;
  else {
    const [p, m] = Bd(r);
    if (s) {
      const S = d[r] = Ud(
        s,
        u
      );
      Er(t, p, S, m);
    } else c && (Md(t, p, c, m), d[r] = void 0);
  }
}
const Bl = /(?:Once|Passive|Capture)$/;
function Bd(t) {
  let r;
  if (Bl.test(t)) {
    r = {};
    let s;
    for (; s = t.match(Bl); )
      t = t.slice(0, t.length - s[0].length), r[s[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Ao(t.slice(2)), r];
}
let fs = 0;
const Kd = /* @__PURE__ */ Promise.resolve(), qd = () => fs || (Kd.then(() => fs = 0), fs = Date.now());
function Ud(t, r) {
  const i = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= i.attached)
      return;
    Qn(
      Vd(s, i.value),
      r,
      5,
      [s]
    );
  };
  return i.value = t, i.attached = qd(), i;
}
function Vd(t, r) {
  if (Ue(r)) {
    const i = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      i.call(t), t._stopped = !0;
    }, r.map(
      (s) => (u) => !u._stopped && s && s(u)
    );
  } else
    return r;
}
const Kl = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Wd = (t, r, i, s, u, d) => {
  const c = u === "svg";
  r === "class" ? Sd(t, s, c) : r === "style" ? jd(t, i, s) : va(r) ? js(r) || $d(t, r, i, s, d) : (r[0] === "." ? (r = r.slice(1), !0) : r[0] === "^" ? (r = r.slice(1), !1) : Gd(t, r, s, c)) ? (Ml(t, r, s), !t.tagName.includes("-") && (r === "value" || r === "checked" || r === "selected") && Fl(t, r, s, c, d, r !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(r) || !At(s)) ? Ml(t, In(r), s, d, r) : (r === "true-value" ? t._trueValue = s : r === "false-value" && (t._falseValue = s), Fl(t, r, s, c));
};
function Gd(t, r, i, s) {
  if (s)
    return !!(r === "innerHTML" || r === "textContent" || r in t && Kl(r) && ze(i));
  if (r === "spellcheck" || r === "draggable" || r === "translate" || r === "autocorrect" || r === "form" || r === "list" && t.tagName === "INPUT" || r === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (r === "width" || r === "height") {
    const u = t.tagName;
    if (u === "IMG" || u === "VIDEO" || u === "CANVAS" || u === "SOURCE")
      return !1;
  }
  return Kl(r) && At(i) ? !1 : r in t;
}
const Br = (t) => {
  const r = t.props["onUpdate:modelValue"] || !1;
  return Ue(r) ? (i) => Ji(r, i) : r;
};
function Hd(t) {
  t.target.composing = !0;
}
function ql(t) {
  const r = t.target;
  r.composing && (r.composing = !1, r.dispatchEvent(new Event("input")));
}
const Dn = Symbol("_assign"), Ar = {
  created(t, { modifiers: { lazy: r, trim: i, number: s } }, u) {
    t[Dn] = Br(u);
    const d = s || u.props && u.props.type === "number";
    Er(t, r ? "change" : "input", (c) => {
      if (c.target.composing) return;
      let p = t.value;
      i && (p = p.trim()), d && (p = ia(p)), t[Dn](p);
    }), i && Er(t, "change", () => {
      t.value = t.value.trim();
    }), r || (Er(t, "compositionstart", Hd), Er(t, "compositionend", ql), Er(t, "change", ql));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: r }) {
    t.value = r ?? "";
  },
  beforeUpdate(t, { value: r, oldValue: i, modifiers: { lazy: s, trim: u, number: d } }, c) {
    if (t[Dn] = Br(c), t.composing) return;
    const p = (d || t.type === "number") && !/^0\d/.test(t.value) ? ia(t.value) : t.value, m = r ?? "";
    p !== m && (document.activeElement === t && t.type !== "range" && (s && r === i || u && t.value.trim() === m) || (t.value = m));
  }
}, Co = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, r, i) {
    t[Dn] = Br(i), Er(t, "change", () => {
      const s = t._modelValue, u = $o(t), d = t.checked, c = t[Dn];
      if (Ue(s)) {
        const p = $s(s, u), m = p !== -1;
        if (d && !m)
          c(s.concat(u));
        else if (!d && m) {
          const S = [...s];
          S.splice(p, 1), c(S);
        }
      } else if (Ko(s)) {
        const p = new Set(s);
        d ? p.add(u) : p.delete(u), c(p);
      } else
        c(hc(t, d));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ul,
  beforeUpdate(t, r, i) {
    t[Dn] = Br(i), Ul(t, r, i);
  }
};
function Ul(t, { value: r, oldValue: i }, s) {
  t._modelValue = r;
  let u;
  if (Ue(r))
    u = $s(r, s.props.value) > -1;
  else if (Ko(r))
    u = r.has(s.props.value);
  else {
    if (r === i) return;
    u = Eo(r, hc(t, !0));
  }
  t.checked !== u && (t.checked = u);
}
const Kr = {
  created(t, { value: r }, i) {
    t.checked = Eo(r, i.props.value), t[Dn] = Br(i), Er(t, "change", () => {
      t[Dn]($o(t));
    });
  },
  beforeUpdate(t, { value: r, oldValue: i }, s) {
    t[Dn] = Br(s), r !== i && (t.checked = Eo(r, s.props.value));
  }
}, yn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: r, modifiers: { number: i } }, s) {
    const u = Ko(r);
    Er(t, "change", () => {
      const d = Array.prototype.filter.call(t.options, (c) => c.selected).map(
        (c) => i ? ia($o(c)) : $o(c)
      );
      t[Dn](
        t.multiple ? u ? new Set(d) : d : d[0]
      ), t._assigning = !0, Gs(() => {
        t._assigning = !1;
      });
    }), t[Dn] = Br(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: r }) {
    Vl(t, r);
  },
  beforeUpdate(t, r, i) {
    t[Dn] = Br(i);
  },
  updated(t, { value: r }) {
    t._assigning || Vl(t, r);
  }
};
function Vl(t, r) {
  const i = t.multiple, s = Ue(r);
  if (!(i && !s && !Ko(r))) {
    for (let u = 0, d = t.options.length; u < d; u++) {
      const c = t.options[u], p = $o(c);
      if (i)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? c.selected = r.some((S) => String(S) === String(p)) : c.selected = $s(r, p) > -1;
        } else
          c.selected = r.has(p);
      else if (Eo($o(c), r)) {
        t.selectedIndex !== u && (t.selectedIndex = u);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function $o(t) {
  return "_value" in t ? t._value : t.value;
}
function hc(t, r) {
  const i = r ? "_trueValue" : "_falseValue";
  return i in t ? t[i] : r;
}
const Yd = ["ctrl", "shift", "alt", "meta"], Xd = {
  stop: (t) => t.stopPropagation(),
  prevent: (t) => t.preventDefault(),
  self: (t) => t.target !== t.currentTarget,
  ctrl: (t) => !t.ctrlKey,
  shift: (t) => !t.shiftKey,
  alt: (t) => !t.altKey,
  meta: (t) => !t.metaKey,
  left: (t) => "button" in t && t.button !== 0,
  middle: (t) => "button" in t && t.button !== 1,
  right: (t) => "button" in t && t.button !== 2,
  exact: (t, r) => Yd.some((i) => t[`${i}Key`] && !r.includes(i))
}, pa = (t, r) => {
  const i = t._withMods || (t._withMods = {}), s = r.join(".");
  return i[s] || (i[s] = (u, ...d) => {
    for (let c = 0; c < r.length; c++) {
      const p = Xd[r[c]];
      if (p && p(u, r)) return;
    }
    return t(u, ...d);
  });
}, zd = /* @__PURE__ */ on({ patchProp: Wd }, Dd);
let Wl;
function Qd() {
  return Wl || (Wl = ed(zd));
}
const Jd = (...t) => {
  const r = Qd().createApp(...t), { mount: i } = r;
  return r.mount = (s) => {
    const u = ep(s);
    if (!u) return;
    const d = r._component;
    !ze(d) && !d.render && !d.template && (d.template = u.innerHTML), u.nodeType === 1 && (u.textContent = "");
    const c = i(u, !1, Zd(u));
    return u instanceof Element && (u.removeAttribute("v-cloak"), u.setAttribute("data-v-app", "")), c;
  }, r;
};
function Zd(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function ep(t) {
  return At(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let mc;
const Aa = (t) => mc = t, vc = (
  /* istanbul ignore next */
  Symbol()
);
function Os(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Si;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Si || (Si = {}));
function tp() {
  const t = fu(!0), r = t.run(() => Be({}));
  let i = [], s = [];
  const u = Na({
    install(d) {
      Aa(u), u._a = d, d.provide(vc, u), d.config.globalProperties.$pinia = u, s.forEach((c) => i.push(c)), s = [];
    },
    use(d) {
      return this._a ? i.push(d) : s.push(d), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: r
  });
  return u;
}
const yc = () => {
};
function Gl(t, r, i, s = yc) {
  t.push(r);
  const u = () => {
    const d = t.indexOf(r);
    d > -1 && (t.splice(d, 1), s());
  };
  return !i && Bs() && du(u), u;
}
function Io(t, ...r) {
  t.slice().forEach((i) => {
    i(...r);
  });
}
const np = (t) => t(), Hl = Symbol(), ds = Symbol();
function As(t, r) {
  t instanceof Map && r instanceof Map ? r.forEach((i, s) => t.set(s, i)) : t instanceof Set && r instanceof Set && r.forEach(t.add, t);
  for (const i in r) {
    if (!r.hasOwnProperty(i))
      continue;
    const s = r[i], u = t[i];
    Os(u) && Os(s) && t.hasOwnProperty(i) && !Ot(s) && !Or(s) ? t[i] = As(u, s) : t[i] = s;
  }
  return t;
}
const rp = (
  /* istanbul ignore next */
  Symbol()
);
function op(t) {
  return !Os(t) || !Object.prototype.hasOwnProperty.call(t, rp);
}
const { assign: Lr } = Object;
function ip(t) {
  return !!(Ot(t) && t.effect);
}
function ap(t, r, i, s) {
  const { state: u, actions: d, getters: c } = r, p = i.state.value[t];
  let m;
  function S() {
    p || (i.state.value[t] = u ? u() : {});
    const O = cf(i.state.value[t]);
    return Lr(O, d, Object.keys(c || {}).reduce((L, k) => (L[k] = Na(Xe(() => {
      Aa(i);
      const J = i._s.get(t);
      return c[k].call(J, J);
    })), L), {}));
  }
  return m = gc(t, S, r, i, s, !0), m;
}
function gc(t, r, i = {}, s, u, d) {
  let c;
  const p = Lr({ actions: {} }, i), m = { deep: !0 };
  let S, O, L = [], k = [], J;
  const ee = s.state.value[t];
  !d && !ee && (s.state.value[t] = {}), Be({});
  let G;
  function W(ue) {
    let B;
    S = O = !1, typeof ue == "function" ? (ue(s.state.value[t]), B = {
      type: Si.patchFunction,
      storeId: t,
      events: J
    }) : (As(s.state.value[t], ue), B = {
      type: Si.patchObject,
      payload: ue,
      storeId: t,
      events: J
    });
    const we = G = Symbol();
    Gs().then(() => {
      G === we && (S = !0);
    }), O = !0, Io(L, B, s.state.value[t]);
  }
  const V = d ? function() {
    const { state: B } = i, we = B ? B() : {};
    this.$patch((Oe) => {
      Lr(Oe, we);
    });
  } : (
    /* istanbul ignore next */
    yc
  );
  function M() {
    c.stop(), L = [], k = [], s._s.delete(t);
  }
  const $ = (ue, B = "") => {
    if (Hl in ue)
      return ue[ds] = B, ue;
    const we = function() {
      Aa(s);
      const Oe = Array.from(arguments), Ie = [], He = [];
      function Ft(Ce) {
        Ie.push(Ce);
      }
      function Qe(Ce) {
        He.push(Ce);
      }
      Io(k, {
        args: Oe,
        name: we[ds],
        store: X,
        after: Ft,
        onError: Qe
      });
      let $e;
      try {
        $e = ue.apply(this && this.$id === t ? this : X, Oe);
      } catch (Ce) {
        throw Io(He, Ce), Ce;
      }
      return $e instanceof Promise ? $e.then((Ce) => (Io(Ie, Ce), Ce)).catch((Ce) => (Io(He, Ce), Promise.reject(Ce))) : (Io(Ie, $e), $e);
    };
    return we[Hl] = !0, we[ds] = B, we;
  }, ne = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Gl.bind(null, k),
    $patch: W,
    $reset: V,
    $subscribe(ue, B = {}) {
      const we = Gl(L, ue, B.detached, () => Oe()), Oe = c.run(() => Ut(() => s.state.value[t], (Ie) => {
        (B.flush === "sync" ? O : S) && ue({
          storeId: t,
          type: Si.direct,
          events: J
        }, Ie);
      }, Lr({}, m, B)));
      return we;
    },
    $dispose: M
  }, X = qi(ne);
  s._s.set(t, X);
  const re = (s._a && s._a.runWithContext || np)(() => s._e.run(() => (c = fu()).run(() => r({ action: $ }))));
  for (const ue in re) {
    const B = re[ue];
    if (Ot(B) && !ip(B) || Or(B))
      d || (ee && op(B) && (Ot(B) ? B.value = ee[ue] : As(B, ee[ue])), s.state.value[t][ue] = B);
    else if (typeof B == "function") {
      const we = $(B, ue);
      re[ue] = we, p.actions[ue] = B;
    }
  }
  return Lr(X, re), Lr(ct(X), re), Object.defineProperty(X, "$state", {
    get: () => s.state.value[t],
    set: (ue) => {
      W((B) => {
        Lr(B, ue);
      });
    }
  }), s._p.forEach((ue) => {
    Lr(X, c.run(() => ue({
      store: X,
      app: s._a,
      pinia: s,
      options: p
    })));
  }), ee && d && i.hydrate && i.hydrate(X.$state, ee), S = !0, O = !0, X;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ol(t, r, i) {
  let s;
  const u = typeof r == "function";
  s = u ? i : r;
  function d(c, p) {
    const m = Hf();
    return c = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    c || (m ? Di(vc, null) : null), c && Aa(c), c = mc, c._s.has(t) || (u ? gc(t, r, s, c) : ap(t, s, c)), c._s.get(t);
  }
  return d.$id = t, d;
}
function jt(t) {
  const r = ct(t), i = {};
  for (const s in r) {
    const u = r[s];
    u.effect ? i[s] = // ...
    Xe({
      get: () => t[s],
      set(d) {
        t[s] = d;
      }
    }) : (Ot(u) || Or(u)) && (i[s] = // ---
    pf(t, s));
  }
  return i;
}
const Mi = ["q", "t"];
function Yn(t) {
  return `${t.prefix} ${t.lnClass} ${t.lnInst}`;
}
var tt = /* @__PURE__ */ ((t) => (t.GOOSE = "GOOSE", t.SMV = "SMV", t.REPORT = "Report", t.INTERNAL = "Internal", t.WIRED = "Wired", t.CONTROL = "Control", t))(tt || {});
const Bo = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: [],
  Internal: []
}, Da = /* @__PURE__ */ ol("dataflow/sidebar", () => {
  const t = Be(null);
  function r(s) {
    t.value = s;
  }
  function i(s) {
    const u = s === t.value ? null : s;
    r(u);
  }
  return {
    activeElement: t,
    setActiveElement: r,
    setOrResetActiveElement: i
  };
});
var sp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function lp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ra = { exports: {} }, up = ra.exports, Yl;
function cp() {
  return Yl || (Yl = 1, function(t, r) {
    (function(i, s) {
      t.exports = s();
    })(up, function() {
      var i = function(e, n) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
          o.__proto__ = a;
        } || function(o, a) {
          for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (o[l] = a[l]);
        })(e, n);
      }, s = function() {
        return (s = Object.assign || function(e) {
          for (var n, o = 1, a = arguments.length; o < a; o++) for (var l in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          return e;
        }).apply(this, arguments);
      };
      function u(e, n, o) {
        for (var a, l = 0, f = n.length; l < f; l++) !a && l in n || ((a = a || Array.prototype.slice.call(n, 0, l))[l] = n[l]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : sp, c = Object.keys, p = Array.isArray;
      function m(e, n) {
        return typeof n != "object" || c(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var S = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function L(e, n) {
        return O.call(e, n);
      }
      function k(e, n) {
        typeof n == "function" && (n = n(S(e))), (typeof Reflect > "u" ? c : Reflect.ownKeys)(n).forEach(function(o) {
          ee(e, o, n[o]);
        });
      }
      var J = Object.defineProperty;
      function ee(e, n, o, a) {
        J(e, n, m(o && L(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function G(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), ee(e.prototype, "constructor", e), { extend: k.bind(null, e.prototype) };
        } };
      }
      var W = Object.getOwnPropertyDescriptor, V = [].slice;
      function M(e, n, o) {
        return V.call(e, n, o);
      }
      function $(e, n) {
        return n(e);
      }
      function ne(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function X(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function H(e, n) {
        if (typeof n == "string" && L(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, l = n.length; a < l; ++a) {
            var f = H(e, n[a]);
            o.push(f);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : H(v, n.substr(h + 1));
        }
      }
      function re(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ne(typeof o != "string" && "length" in o);
          for (var a = 0, l = n.length; a < l; ++a) re(e, n[a], o[a]);
        } else {
          var f, h, v = n.indexOf(".");
          v !== -1 ? (f = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? p(e) && !isNaN(parseInt(f)) ? e.splice(f, 1) : delete e[f] : e[f] = o : re(v = !(v = e[f]) || !L(e, f) ? e[f] = {} : v, h, o)) : o === void 0 ? p(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function ue(e) {
        var n, o = {};
        for (n in e) L(e, n) && (o[n] = e[n]);
        return o;
      }
      var B = [].concat;
      function we(e) {
        return B.apply([], e);
      }
      var Ve = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(we([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), Oe = new Set(Ve.map(function(e) {
        return d[e];
      })), Ie = null;
      function He(e) {
        return Ie = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = Ie.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], Ie.set(o, a);
            for (var l = 0, f = o.length; l < f; ++l) a.push(n(o[l]));
          } else if (Oe.has(o.constructor)) a = o;
          else {
            var h, v = S(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), Ie.set(o, a), o) L(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), Ie = null, e;
      }
      var Ft = {}.toString;
      function Qe(e) {
        return Ft.call(e).slice(8, -1);
      }
      var $e = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ce = typeof $e == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[$e]) && n.apply(e);
      } : function() {
        return null;
      };
      function Le(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var ft = {};
      function vt(e) {
        var n, o, a, l;
        if (arguments.length === 1) {
          if (p(e)) return e.slice();
          if (this === ft && typeof e == "string") return [e];
          if (l = Ce(e)) {
            for (o = []; !(a = l.next()).done; ) o.push(a.value);
            return o;
          }
          if (e == null) return [e];
          if (typeof (n = e.length) != "number") return [e];
          for (o = new Array(n); n--; ) o[n] = e[n];
          return o;
        }
        for (n = arguments.length, o = new Array(n); n--; ) o[n] = arguments[n];
        return o;
      }
      var Et = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Me = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Rt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Me), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function qt(e, n) {
        this.name = e, this.message = n;
      }
      function Un(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, a, l) {
          return l.indexOf(o) === a;
        }).join(`
`);
      }
      function gn(e, n, o, a) {
        this.failures = n, this.failedKeys = a, this.successCount = o, this.message = Un(e, n);
      }
      function St(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Un(e, this.failures);
      }
      G(qt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), G(gn).from(qt), G(St).from(qt);
      var I = Rt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), N = qt, q = Rt.reduce(function(e, n) {
        var o = n + "Error";
        function a(l, f) {
          this.name = o, l ? typeof l == "string" ? (this.message = "".concat(l).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = Kt[n] || o, this.inner = null);
        }
        return G(a).from(N), e[n] = a, e;
      }, {});
      q.Syntax = SyntaxError, q.Type = TypeError, q.Range = RangeError;
      var Q = Me.reduce(function(e, n) {
        return e[n + "Error"] = q[n], e;
      }, {}), nt = Rt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = q[n]), e;
      }, {});
      function D() {
      }
      function U(e) {
        return e;
      }
      function le(e, n) {
        return e == null || e === U ? n : function(o) {
          return n(e(o));
        };
      }
      function pe(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function ye(e, n) {
        return e === D ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? pe(a, this.onsuccess) : a), l && (this.onerror = this.onerror ? pe(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function he(e, n) {
        return e === D ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? pe(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? pe(a, this.onerror) : a);
        };
      }
      function xe(e, n) {
        return e === D ? n : function(o) {
          var a = e.apply(this, arguments);
          m(o, a);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? pe(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? pe(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : m(a, o);
        };
      }
      function Re(e, n) {
        return e === D ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ge(e, n) {
        return e === D ? n : function() {
          var o = e.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var a = this, l = arguments.length, f = new Array(l); l--; ) f[l] = arguments[l];
            return o.then(function() {
              return n.apply(a, f);
            });
          }
          return n.apply(this, arguments);
        };
      }
      nt.ModifyError = gn, nt.DexieError = qt, nt.BulkError = St;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ke(e) {
        me = e;
      }
      var Te = {}, Fe = 100, Ve = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, S(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, S(n), e];
      }(), Me = Ve[0], Rt = Ve[1], Ve = Ve[2], Rt = Rt && Rt.then, et = Me && Me.constructor, ot = !!Ve, bt = function(e, n) {
        bn.push([e, n]), kt && (queueMicrotask(Pa), kt = !1);
      }, Dt = !0, kt = !0, wt = [], an = [], Vn = U, dt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: D, pgp: !1, env: {}, finalize: D }, de = dt, bn = [], sn = 0, Zn = [];
      function ae(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = de;
        if (typeof e != "function") {
          if (e !== Te) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Vr(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, l) {
          try {
            l(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                f && typeof f.then == "function" ? o(a, function(v, b) {
                  f instanceof ae ? f._then(v, b) : f.then(v, b);
                }) : (a._state = !0, a._value = f, Vo(a)), h && _n();
              }
            }, Vr.bind(null, a));
          } catch (f) {
            Vr(a, f);
          }
        }(this, e);
      }
      var Ur = { get: function() {
        var e = de, n = rr;
        function o(a, l) {
          var f = this, h = !e.global && (e !== de || n !== rr), v = h && !Gt(), b = new ae(function(_, R) {
            Wr(f, new Uo(Go(a, e, h, v), Go(l, e, h, v), _, R, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = Te, o;
      }, set: function(e) {
        ee(this, "then", e && e.prototype === Te ? Ur : { get: function() {
          return e;
        }, set: Ur.set });
      } };
      function Uo(e, n, o, a, l) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = l;
      }
      function Vr(e, n) {
        var o, a;
        an.push(n), e._state === null && (o = e._lib && wn(), n = Vn(n), e._state = !1, e._value = n, a = e, wt.some(function(l) {
          return l._value === a._value;
        }) || wt.push(a), Vo(e), o && _n());
      }
      function Vo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Wr(e, n[o]);
        var l = e._PSD;
        --l.ref || l.finalize(), sn === 0 && (++sn, bt(function() {
          --sn == 0 && Gr();
        }, []));
      }
      function Wr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++sn, bt(Sa, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Sa(e, n, o) {
        try {
          var a, l = n._value;
          !n._state && an.length && (an = []), a = me && n._consoleTask ? n._consoleTask.run(function() {
            return e(l);
          }) : e(l), n._state || an.indexOf(l) !== -1 || function(f) {
            for (var h = wt.length; h; ) if (wt[--h]._value === f._value) return wt.splice(h, 1);
          }(n), o.resolve(a);
        } catch (f) {
          o.reject(f);
        } finally {
          --sn == 0 && Gr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Pa() {
        ln(dt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = Dt;
        return kt = Dt = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        kt = Dt = !0;
      }
      function Gr() {
        var e = wt;
        wt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Zn.slice(0), o = n.length; o; ) n[--o]();
      }
      function er(e) {
        return new ae(Te, !1, e);
      }
      function We(e, n) {
        var o = de;
        return function() {
          var a = wn(), l = de;
          try {
            return Ht(o, !0), e.apply(this, arguments);
          } catch (f) {
            n && n(f);
          } finally {
            Ht(l, !1), a && _n();
          }
        };
      }
      k(ae.prototype, { then: Ur, _then: function(e, n) {
        Wr(this, new Uo(null, null, e, n, de));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? o : er)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? o : er)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ae.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ae.resolve(e()).then(function() {
            return er(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ae(function(a, l) {
          var f = setTimeout(function() {
            return l(new q.Timeout(n));
          }, e);
          o.then(a, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ee(ae.prototype, Symbol.toStringTag, "Dexie.Promise"), dt.env = Wo(), k(ae, { all: function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(l, f) {
            return ae.resolve(l).then(function(h) {
              e[f] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ae ? e : e && typeof e.then == "function" ? new ae(function(n, o) {
          e.then(n, o);
        }) : new ae(Te, !0, e);
      }, reject: er, race: function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n, o) {
          e.map(function(a) {
            return ae.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return de;
      }, set: function(e) {
        return de = e;
      } }, totalEchoes: { get: function() {
        return rr;
      } }, newPSD: Wt, usePSD: ln, scheduler: { get: function() {
        return bt;
      }, set: function(e) {
        bt = e;
      } }, rejectionMapper: { get: function() {
        return Vn;
      }, set: function(e) {
        Vn = e;
      } }, follow: function(e, n) {
        return new ae(function(o, a) {
          return Wt(function(l, f) {
            var h = de;
            h.unhandleds = [], h.onunhandled = f, h.finalize = pe(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? l() : f(b.unhandleds[0]);
              }, Zn.push(function _() {
                v(), Zn.splice(Zn.indexOf(_), 1);
              }), ++sn, bt(function() {
                --sn == 0 && Gr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), et && (et.allSettled && ee(ae, "allSettled", function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(l, f) {
            return ae.resolve(l).then(function(h) {
              return a[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), et.any && typeof AggregateError < "u" && ee(ae, "any", function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, l = new Array(a);
          e.forEach(function(f, h) {
            return ae.resolve(f).then(function(v) {
              return n(v);
            }, function(v) {
              l[h] = v, --a || o(new AggregateError(l));
            });
          });
        });
      }), et.withResolvers && (ae.withResolvers = et.withResolvers));
      var it = { awaits: 0, echoes: 0, id: 0 }, La = 0, tr = [], nr = 0, rr = 0, ka = 0;
      function Wt(e, n, o, a) {
        var l = de, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++ka, dt.env, f.env = ot ? { Promise: ae, PromiseProp: { value: ae, configurable: !0, writable: !0 }, all: ae.all, race: ae.race, allSettled: ae.allSettled, any: ae.any, resolve: ae.resolve, reject: ae.reject } : {}, n && m(f, n), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = ln(f, e, o, a), f.ref === 0 && f.finalize(), a;
      }
      function xn() {
        return it.id || (it.id = ++La), ++it.awaits, it.echoes += Fe, it.id;
      }
      function Gt() {
        return !!it.awaits && (--it.awaits == 0 && (it.id = 0), it.echoes = it.awaits * Fe, !0);
      }
      function or(e) {
        return it.echoes && e && e.constructor === et ? (xn(), e.then(function(n) {
          return Gt(), n;
        }, function(n) {
          return Gt(), Je(n);
        })) : e;
      }
      function ja() {
        var e = tr[tr.length - 1];
        tr.pop(), Ht(e, !1);
      }
      function Ht(e, n) {
        var o, a = de;
        (n ? !it.echoes || nr++ && e === de : !nr || --nr && e === de) || queueMicrotask(n ? (function(l) {
          ++rr, it.echoes && --it.echoes != 0 || (it.echoes = it.awaits = it.id = 0), tr.push(de), Ht(l, !0);
        }).bind(null, e) : ja), e !== de && (de = e, a === dt && (dt.env = Wo()), ot && (o = dt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Wo() {
        var e = d.Promise;
        return ot ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ln(e, n, o, a, l) {
        var f = de;
        try {
          return Ht(e, !0), n(o, a, l);
        } finally {
          Ht(f, !1);
        }
      }
      function Go(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var l = de;
          o && xn(), Ht(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ht(l, !1), a && queueMicrotask(Gt);
          }
        };
      }
      function Hr(e) {
        Promise === et && it.echoes === 0 ? nr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Rt).indexOf("[native code]") === -1 && (xn = Gt = D);
      var Je = ae.reject, un = "￿", Mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ho = "String expected.", Nn = [], ir = "__dbnames", Yr = "readonly", Xr = "readwrite";
      function cn(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Yo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ar(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = He(n))[e], n;
        };
      }
      function Xo() {
        throw q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ee(e, n) {
        try {
          var o = zo(e), a = zo(n);
          if (o !== a) return o === "Array" ? 1 : a === "Array" ? -1 : o === "binary" ? 1 : a === "binary" ? -1 : o === "string" ? 1 : a === "string" ? -1 : o === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(l, f) {
                for (var h = l.length, v = f.length, b = h < v ? h : v, _ = 0; _ < b; ++_) if (l[_] !== f[_]) return l[_] < f[_] ? -1 : 1;
                return h === v ? 0 : h < v ? -1 : 1;
              }(Qo(e), Qo(n));
            case "Array":
              return function(l, f) {
                for (var h = l.length, v = f.length, b = h < v ? h : v, _ = 0; _ < b; ++_) {
                  var R = Ee(l[_], f[_]);
                  if (R !== 0) return R;
                }
                return h === v ? 0 : h < v ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function zo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Qe(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Qo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function sr(e, n, o) {
        var a = e.schema.yProps;
        return a ? (n && 0 < o.numFailures && (n = n.filter(function(l, f) {
          return !o.failures[f];
        })), Promise.all(a.map(function(l) {
          return l = l.updatesTable, n ? e.db.table(l).where("k").anyOf(n).delete() : e.db.table(l).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var Jo = (qe.prototype._trans = function(e, n, o) {
        var a = this._tx || de.trans, l = this.name, f = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, R, g) {
          if (!g.schema[l]) throw new q.NotFound("Table " + l + " not part of transaction");
          return n(g.idbtrans, g);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === de.trans ? a._promise(e, h, o) : Wt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: de.transless || de }) : function _(R, g, E, w) {
            if (R.idbdb && (R._state.openComplete || de.letThrough || R._vip)) {
              var x = R._createTransaction(g, E, R._dbSchema);
              try {
                x.create(), R._state.PR1398_maxLoop = 3;
              } catch (C) {
                return C.name === I.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                  return _(R, g, E, w);
                })) : Je(C);
              }
              return x._promise(g, function(C, T) {
                return Wt(function() {
                  return de.trans = x, w(C, T, x);
                });
              }).then(function(C) {
                if (g === "readwrite") try {
                  x.idbtrans.commit();
                } catch {
                }
                return g === "readonly" ? C : x._completion.then(function() {
                  return C;
                });
              });
            }
            if (R._state.openComplete) return Je(new q.DatabaseClosed(R._state.dbOpenError));
            if (!R._state.isBeingOpened) {
              if (!R._state.autoOpen) return Je(new q.DatabaseClosed());
              R.open().catch(D);
            }
            return R._state.dbReadyPromise.then(function() {
              return _(R, g, E, w);
            });
          }(this.db, e, [this.name], h);
          return f && (b._consoleTask = f, b = b.catch(function(_) {
            return console.trace(_), Je(_);
          })), b;
        } finally {
          v && _n();
        }
      }, qe.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? Je(new q.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return o.core.get({ trans: a, key: e }).then(function(l) {
            return o.hook.reading.fire(l);
          });
        }).then(n);
      }, qe.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (p(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var n = c(e);
        if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(v) {
          if (v.compound && n.every(function(_) {
            return 0 <= v.keyPath.indexOf(_);
          })) {
            for (var b = 0; b < n.length; ++b) if (n.indexOf(v.keyPath[b]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(v, b) {
          return v.keyPath.length - b.keyPath.length;
        })[0];
        if (o && this.db._maxKey !== un) {
          var f = o.keyPath.slice(0, n.length);
          return this.where(f).equals(f.map(function(b) {
            return e[b];
          }));
        }
        !o && me && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var a = this.schema.idxByName;
        function l(v, b) {
          return Ee(v, b) === 0;
        }
        var h = n.reduce(function(g, b) {
          var _ = g[0], R = g[1], g = a[b], E = e[b];
          return [_ || g, _ || !g ? cn(R, g && g.multi ? function(w) {
            return w = H(w, b), p(w) && w.some(function(x) {
              return l(E, x);
            });
          } : function(w) {
            return l(E, H(w, b));
          }) : R];
        }, [null, null]), f = h[0], h = h[1];
        return f ? this.where(f.name).equals(e[f.keyPath]).filter(h) : o ? this.filter(h) : this.where(n).equals("");
      }, qe.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, qe.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, qe.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, qe.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, qe.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, qe.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, qe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, qe.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, p(e) ? "[".concat(e.join("+"), "]") : e));
      }, qe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, qe.prototype.mapToClass = function(e) {
        var n, o = this.db, a = this.name;
        function l() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Xo && (function(b, _) {
          if (typeof _ != "function" && _ !== null) throw new TypeError("Class extends value " + String(_) + " is not a constructor or null");
          function R() {
            this.constructor = b;
          }
          i(b, _), b.prototype = _ === null ? Object.create(_) : (R.prototype = _.prototype, new R());
        }(l, n = e), Object.defineProperty(l.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), l.prototype.table = function() {
          return a;
        }, e = l);
        for (var f = /* @__PURE__ */ new Set(), h = e.prototype; h; h = S(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
          return f.add(b);
        });
        function v(b) {
          if (!b) return b;
          var _, R = Object.create(e.prototype);
          for (_ in b) if (!f.has(_)) try {
            R[_] = b[_];
          } catch {
          }
          return R;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = v, this.hook("reading", v), e;
      }, qe.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          m(this, e);
        });
      }, qe.prototype.add = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ar(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "add", keys: n != null ? [n] : null, values: [h] });
        }).then(function(v) {
          return v.numFailures ? ae.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            re(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(e, n) {
        return typeof e != "object" || p(e) ? this.where(":id").equals(e).modify(n) : (e = H(e, this.schema.primKey.keyPath), e === void 0 ? Je(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, qe.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ar(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? ae.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            re(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(a) {
            return sr(n, [e], a);
          }).then(function(a) {
            return a.numFailures ? ae.reject(a.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Yo }).then(function(o) {
            return sr(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ae.reject(n.failures[0]) : void 0;
        });
      }, qe.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(o) {
          return n.core.getMany({ keys: e, trans: o }).then(function(a) {
            return a.map(function(l) {
              return n.hook.reading.fire(l);
            });
          });
        });
      }, qe.prototype.bulkAdd = function(e, n, o) {
        var a = this, l = Array.isArray(n) ? n : void 0, f = (o = o || (l ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && l) throw new q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(ar(_)) : e;
          return a.core.mutate({ trans: h, type: "add", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new St("".concat(a.name, ".bulkAdd(): ").concat(g, " of ").concat(b, " operations failed"), x);
          });
        });
      }, qe.prototype.bulkPut = function(e, n, o) {
        var a = this, l = Array.isArray(n) ? n : void 0, f = (o = o || (l ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && l) throw new q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(ar(_)) : e;
          return a.core.mutate({ trans: h, type: "put", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new St("".concat(a.name, ".bulkPut(): ").concat(g, " of ").concat(b, " operations failed"), x);
          });
        });
      }, qe.prototype.bulkUpdate = function(e) {
        var n = this, o = this.core, a = e.map(function(h) {
          return h.key;
        }), l = e.map(function(h) {
          return h.changes;
        }), f = [];
        return this._trans("readwrite", function(h) {
          return o.getMany({ trans: h, keys: a, cache: "clone" }).then(function(v) {
            var b = [], _ = [];
            e.forEach(function(g, E) {
              var w = g.key, x = g.changes, C = v[E];
              if (C) {
                for (var T = 0, A = Object.keys(x); T < A.length; T++) {
                  var P = A[T], j = x[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (Ee(j, w) !== 0) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
                  } else re(C, P, j);
                }
                f.push(E), b.push(w), _.push(C);
              }
            });
            var R = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: l } }).then(function(g) {
              var E = g.numFailures, w = g.failures;
              if (E === 0) return R;
              for (var x = 0, C = Object.keys(w); x < C.length; x++) {
                var T, A = C[x], P = f[Number(A)];
                P != null && (T = w[A], delete w[A], w[P] = T);
              }
              throw new St("".concat(n.name, ".bulkUpdate(): ").concat(E, " of ").concat(R, " operations failed"), w);
            });
          });
        });
      }, qe.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e }).then(function(l) {
            return sr(n, e, l);
          });
        }).then(function(h) {
          var l = h.numFailures, f = h.lastResult, h = h.failures;
          if (l === 0) return f;
          throw new St("".concat(n.name, ".bulkDelete(): ").concat(l, " of ").concat(o, " operations failed"), h);
        });
      }, qe);
      function qe() {
      }
      function Sn(e) {
        function n(h, v) {
          if (v) {
            for (var b = arguments.length, _ = new Array(b - 1); --b; ) _[b - 1] = arguments[b];
            return o[h].subscribe.apply(null, _), e;
          }
          if (typeof h == "string") return o[h];
        }
        var o = {};
        n.addEventType = f;
        for (var a = 1, l = arguments.length; a < l; ++a) f(arguments[a]);
        return n;
        function f(h, v, b) {
          if (typeof h != "object") {
            var _;
            v = v || Re;
            var R = { subscribers: [], fire: b = b || D, subscribe: function(g) {
              R.subscribers.indexOf(g) === -1 && (R.subscribers.push(g), R.fire = v(R.fire, g));
            }, unsubscribe: function(g) {
              R.subscribers = R.subscribers.filter(function(E) {
                return E !== g;
              }), R.fire = R.subscribers.reduce(v, b);
            } };
            return o[h] = n[h] = R;
          }
          c(_ = h).forEach(function(g) {
            var E = _[g];
            if (p(E)) f(g, _[g][0], _[g][1]);
            else {
              if (E !== "asap") throw new q.InvalidArgument("Invalid event config");
              var w = f(g, U, function() {
                for (var x = arguments.length, C = new Array(x); x--; ) C[x] = arguments[x];
                w.subscribers.forEach(function(T) {
                  X(function() {
                    T.apply(null, C);
                  });
                });
              });
            }
          });
        }
      }
      function Pn(e, n) {
        return G(n).from({ prototype: e }), n;
      }
      function Rn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function zr(e, n) {
        e.filter = cn(e.filter, n);
      }
      function Qr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return cn(a(), n());
        } : n, e.justLimit = o && !a;
      }
      function lr(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new q.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Zo(e, n, o) {
        var a = lr(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function ur(e, n, o, a) {
        var l = e.replayFilter ? cn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var f = {}, h = function(v, b, _) {
            var R, g;
            l && !l(b, _, function(E) {
              return b.stop(E);
            }, function(E) {
              return b.fail(E);
            }) || ((g = "" + (R = b.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(R)), L(f, g) || (f[g] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), ei(Zo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return ei(Zo(e, a, o), cn(e.algorithm, l), n, !e.keysOnly && e.valueMapper);
      }
      function ei(e, n, o, a) {
        var l = We(a ? function(f, h, v) {
          return o(a(f), h, v);
        } : o);
        return e.then(function(f) {
          if (f) return f.start(function() {
            var h = function() {
              return f.continue();
            };
            n && !n(f, function(v) {
              return h = v;
            }, function(v) {
              f.stop(v), h = D;
            }, function(v) {
              f.fail(v), h = D;
            }) || l(f.value, f, function(v) {
              return h = v;
            }), h();
          });
        });
      }
      var Ln = (ti.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (p(o)) return u(u([], p(e) ? e : [], !0), o).sort();
          if (typeof o == "number") return (Number(e) || 0) + o;
          if (typeof o == "bigint") try {
            return BigInt(e) + o;
          } catch {
            return BigInt(0) + o;
          }
          throw new TypeError("Invalid term ".concat(o));
        }
        if (n.remove !== void 0) {
          var a = n.remove;
          if (p(a)) return p(e) ? e.filter(function(l) {
            return !a.includes(l);
          }).sort() : [];
          if (typeof a == "number") return Number(e) - a;
          if (typeof a == "bigint") try {
            return BigInt(e) - a;
          } catch {
            return BigInt(0) - a;
          }
          throw new TypeError("Invalid subtrahend ".concat(a));
        }
        return o = (o = n.replacePrefix) === null || o === void 0 ? void 0 : o[0], o && typeof e == "string" && e.startsWith(o) ? n.replacePrefix[1] + e.substring(o.length) : e;
      }, ti);
      function ti(e) {
        this["@@propmod"] = e;
      }
      var Fa = (Pe.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Je.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Pe.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, Je.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Pe.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = cn(n.algorithm, e);
      }, Pe.prototype._iterate = function(e, n) {
        return ur(this._ctx, e, n, this._ctx.table.core);
      }, Pe.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && m(o, e), n._ctx = o, n;
      }, Pe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Pe.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return ur(n, e, o, n.table.core);
        });
      }, Pe.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx, l = a.table.core;
          if (Rn(a, !0)) return l.count({ trans: o, query: { index: lr(a, l.schema), range: a.range } }).then(function(h) {
            return Math.min(h, a.limit);
          });
          var f = 0;
          return ur(a, function() {
            return ++f, !1;
          }, o, l).then(function() {
            return f;
          });
        }).then(e);
      }, Pe.prototype.sortBy = function(e, n) {
        var o = e.split(".").reverse(), a = o[0], l = o.length - 1;
        function f(b, _) {
          return _ ? f(b[o[_]], _ - 1) : b[a];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function v(b, _) {
          return Ee(f(b, l), f(_, l)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(v);
        }).then(n);
      }, Pe.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx;
          if (a.dir === "next" && Rn(a, !0) && 0 < a.limit) {
            var l = a.valueMapper, f = lr(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: f, range: a.range } }).then(function(v) {
              return v = v.result, l ? v.map(l) : v;
            });
          }
          var h = [];
          return ur(a, function(v) {
            return h.push(v);
          }, o, a.table.core).then(function() {
            return h;
          });
        }, e);
      }, Pe.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, Rn(n) ? Qr(n, function() {
          var o = e;
          return function(a, l) {
            return o === 0 || (o === 1 ? --o : l(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : Qr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Pe.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, a, l) {
            return --n <= 0 && a(l), 0 <= n;
          };
        }, !0), this;
      }, Pe.prototype.until = function(e, n) {
        return zr(this._ctx, function(o, a, l) {
          return !e(o.value) || (a(l), n);
        }), this;
      }, Pe.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Pe.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Pe.prototype.filter = function(e) {
        var n;
        return zr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = cn(n.isMatch, e), this;
      }, Pe.prototype.and = function(e) {
        return this.filter(e);
      }, Pe.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Pe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Pe.prototype.desc = function() {
        return this.reverse();
      }, Pe.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.key, a);
        });
      }, Pe.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Pe.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.primaryKey, a);
        });
      }, Pe.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, l) {
          o.push(l.key);
        }).then(function() {
          return o;
        }).then(e);
      }, Pe.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && Rn(n, !0) && 0 < n.limit) return this._read(function(a) {
          var l = lr(n, n.table.core.schema);
          return n.table.core.query({ trans: a, values: !1, limit: n.limit, query: { index: l, range: n.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, l) {
          o.push(l.primaryKey);
        }).then(function() {
          return o;
        }).then(e);
      }, Pe.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Pe.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Pe.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Pe.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return zr(this._ctx, function(l) {
          var a = l.primaryKey.toString(), l = L(n, a);
          return n[a] = !0, !l;
        }), this;
      }, Pe.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var l, f, h;
          h = typeof e == "function" ? e : (l = c(e), f = l.length, function(A) {
            for (var P = !1, j = 0; j < f; ++j) {
              var F = l[j], Y = e[F], te = H(A, F);
              Y instanceof Ln ? (re(A, F, Y.execute(te)), P = !0) : te !== Y && (re(A, F, Y), P = !0);
            }
            return P;
          });
          var v = o.table.core, g = v.schema.primaryKey, b = g.outbound, _ = g.extractKey, R = 200, g = n.db._options.modifyChunkSize;
          g && (R = typeof g == "object" ? g[v.name] || g["*"] || 200 : g);
          function E(A, F) {
            var j = F.failures, F = F.numFailures;
            x += A - F;
            for (var Y = 0, te = c(j); Y < te.length; Y++) {
              var z = te[Y];
              w.push(j[z]);
            }
          }
          var w = [], x = 0, C = [], T = e === ni;
          return n.clone().primaryKeys().then(function(A) {
            function P(F) {
              var Y = Math.min(R, A.length - F), te = A.slice(F, F + Y);
              return (T ? Promise.resolve([]) : v.getMany({ trans: a, keys: te, cache: "immutable" })).then(function(z) {
                var Z = [], ie = [], oe = b ? [] : null, se = T ? te : [];
                if (!T) for (var Ne = 0; Ne < Y; ++Ne) {
                  var Ae = z[Ne], _e = { value: He(Ae), primKey: A[F + Ne] };
                  h.call(_e, _e.value, _e) !== !1 && (_e.value == null ? se.push(A[F + Ne]) : b || Ee(_(Ae), _(_e.value)) === 0 ? (ie.push(_e.value), b && oe.push(A[F + Ne])) : (se.push(A[F + Ne]), Z.push(_e.value)));
                }
                return Promise.resolve(0 < Z.length && v.mutate({ trans: a, type: "add", values: Z }).then(function(Ye) {
                  for (var be in Ye.failures) se.splice(parseInt(be), 1);
                  E(Z.length, Ye);
                })).then(function() {
                  return (0 < ie.length || j && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: oe, values: ie, criteria: j, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < F }).then(function(Ye) {
                    return E(ie.length, Ye);
                  });
                }).then(function() {
                  return (0 < se.length || j && T) && v.mutate({ trans: a, type: "delete", keys: se, criteria: j, isAdditionalChunk: 0 < F }).then(function(Ye) {
                    return sr(o.table, se, Ye);
                  }).then(function(Ye) {
                    return E(se.length, Ye);
                  });
                }).then(function() {
                  return A.length > F + Y && P(F + R);
                });
              });
            }
            var j = Rn(o) && o.limit === 1 / 0 && (typeof e != "function" || T) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < w.length) throw new gn("Error modifying one or more objects", w, x, C);
              return A.length;
            });
          });
        });
      }, Pe.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !Rn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ni) : this._write(function(o) {
          var a = e.table.core.schema.primaryKey, l = n;
          return e.table.core.count({ trans: o, query: { index: a, range: l } }).then(function(f) {
            return e.table.core.mutate({ trans: o, type: "deleteRange", range: l }).then(function(b) {
              var v = b.failures, b = b.numFailures;
              if (b) throw new gn("Could not delete some values", Object.keys(v).map(function(_) {
                return v[_];
              }), f - b);
              return f - b;
            });
          });
        });
      }, Pe);
      function Pe() {
      }
      var ni = function(e, n) {
        return n.value = null;
      };
      function Ma(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function $a(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function gt(e, n, o) {
        return e = e instanceof oi ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Tn(e) {
        return new e.Collection(e, function() {
          return ri("");
        }).limit(0);
      }
      function cr(e, n, o, a) {
        var l, f, h, v, b, _, R, g = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return gt(e, Ho);
        function E(x) {
          l = x === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = x === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = x === "next" ? Ma : $a;
          var C = o.map(function(T) {
            return { lower: f(T), upper: l(T) };
          }).sort(function(T, A) {
            return h(T.lower, A.lower);
          });
          v = C.map(function(T) {
            return T.upper;
          }), b = C.map(function(T) {
            return T.lower;
          }), R = (_ = x) === "next" ? "" : a;
        }
        E("next"), e = new e.Collection(e, function() {
          return Yt(v[0], b[g - 1] + a);
        }), e._ondirectionchange = function(x) {
          E(x);
        };
        var w = 0;
        return e._addAlgorithm(function(x, C, T) {
          var A = x.key;
          if (typeof A != "string") return !1;
          var P = f(A);
          if (n(P, b, w)) return !0;
          for (var j = null, F = w; F < g; ++F) {
            var Y = function(te, z, Z, ie, oe, se) {
              for (var Ne = Math.min(te.length, ie.length), Ae = -1, _e = 0; _e < Ne; ++_e) {
                var Ye = z[_e];
                if (Ye !== ie[_e]) return oe(te[_e], Z[_e]) < 0 ? te.substr(0, _e) + Z[_e] + Z.substr(_e + 1) : oe(te[_e], ie[_e]) < 0 ? te.substr(0, _e) + ie[_e] + Z.substr(_e + 1) : 0 <= Ae ? te.substr(0, Ae) + z[Ae] + Z.substr(Ae + 1) : null;
                oe(te[_e], Ye) < 0 && (Ae = _e);
              }
              return Ne < ie.length && se === "next" ? te + Z.substr(te.length) : Ne < te.length && se === "prev" ? te.substr(0, Z.length) : Ae < 0 ? null : te.substr(0, Ae) + ie[Ae] + Z.substr(Ae + 1);
            }(A, P, v[F], b[F], h, _);
            Y === null && j === null ? w = F + 1 : (j === null || 0 < h(j, Y)) && (j = Y);
          }
          return C(j !== null ? function() {
            x.continue(j + R);
          } : T), !1;
        }), e;
      }
      function Yt(e, n, o, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: a };
      }
      function ri(e) {
        return { type: 1, lower: e, upper: e };
      }
      var oi = (Object.defineProperty(at.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), at.prototype.between = function(e, n, o, a) {
        o = o !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || a) && (!o || !a) ? Tn(this) : new this.Collection(this, function() {
            return Yt(e, n, !o, !a);
          });
        } catch {
          return gt(this, Mt);
        }
      }, at.prototype.equals = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return ri(e);
        });
      }, at.prototype.above = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(e, void 0, !0);
        });
      }, at.prototype.aboveOrEqual = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(e, void 0, !1);
        });
      }, at.prototype.below = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(void 0, e, !1, !0);
        });
      }, at.prototype.belowOrEqual = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(void 0, e);
        });
      }, at.prototype.startsWith = function(e) {
        return typeof e != "string" ? gt(this, Ho) : this.between(e, e + un, !0, !0);
      }, at.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : cr(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], un);
      }, at.prototype.equalsIgnoreCase = function(e) {
        return cr(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, at.prototype.anyOfIgnoreCase = function() {
        var e = vt.apply(ft, arguments);
        return e.length === 0 ? Tn(this) : cr(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, at.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = vt.apply(ft, arguments);
        return e.length === 0 ? Tn(this) : cr(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, un);
      }, at.prototype.anyOf = function() {
        var e = this, n = vt.apply(ft, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return gt(this, Mt);
        }
        if (n.length === 0) return Tn(this);
        var a = new this.Collection(this, function() {
          return Yt(n[0], n[n.length - 1]);
        });
        a._ondirectionchange = function(f) {
          o = f === "next" ? e._ascending : e._descending, n.sort(o);
        };
        var l = 0;
        return a._addAlgorithm(function(f, h, v) {
          for (var b = f.key; 0 < o(b, n[l]); ) if (++l === n.length) return h(v), !1;
          return o(b, n[l]) === 0 || (h(function() {
            f.continue(n[l]);
          }), !1);
        }), a;
      }, at.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, at.prototype.noneOf = function() {
        var e = vt.apply(ft, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return gt(this, Mt);
        }
        var n = e.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, at.prototype.inAnyRange = function(A, n) {
        var o = this, a = this._cmp, l = this._ascending, f = this._descending, h = this._min, v = this._max;
        if (A.length === 0) return Tn(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return gt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, R, g = l;
        function E(P, j) {
          return g(P[0], j[0]);
        }
        try {
          (R = A.reduce(function(P, j) {
            for (var F = 0, Y = P.length; F < Y; ++F) {
              var te = P[F];
              if (a(j[0], te[1]) < 0 && 0 < a(j[1], te[0])) {
                te[0] = h(te[0], j[0]), te[1] = v(te[1], j[1]);
                break;
              }
            }
            return F === Y && P.push(j), P;
          }, [])).sort(E);
        } catch {
          return gt(this, Mt);
        }
        var w = 0, x = _ ? function(P) {
          return 0 < l(P, R[w][1]);
        } : function(P) {
          return 0 <= l(P, R[w][1]);
        }, C = b ? function(P) {
          return 0 < f(P, R[w][0]);
        } : function(P) {
          return 0 <= f(P, R[w][0]);
        }, T = x, A = new this.Collection(this, function() {
          return Yt(R[0][0], R[R.length - 1][1], !b, !_);
        });
        return A._ondirectionchange = function(P) {
          g = P === "next" ? (T = x, l) : (T = C, f), R.sort(E);
        }, A._addAlgorithm(function(P, j, F) {
          for (var Y, te = P.key; T(te); ) if (++w === R.length) return j(F), !1;
          return !x(Y = te) && !C(Y) || (o._cmp(te, R[w][1]) === 0 || o._cmp(te, R[w][0]) === 0 || j(function() {
            g === l ? P.continue(R[w][0]) : P.continue(R[w][1]);
          }), !1);
        }), A;
      }, at.prototype.startsWithAnyOf = function() {
        var e = vt.apply(ft, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Tn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + un];
        })) : gt(this, "startsWithAnyOf() only works with strings");
      }, at);
      function at() {
      }
      function Pt(e) {
        return We(function(n) {
          return kn(n), e(n.target.error), !1;
        });
      }
      function kn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var jn = "storagemutated", Jr = "x-storagemutated-1", Xt = Sn(null, jn), Ba = (Lt.prototype._lock = function() {
        return ne(!de.global), ++this._reculock, this._reculock !== 1 || de.global || (de.lockOwnerFor = this), this;
      }, Lt.prototype._unlock = function() {
        if (ne(!de.global), --this._reculock == 0) for (de.global || (de.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ln(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Lt.prototype._locked = function() {
        return this._reculock && de.lockOwnerFor !== this;
      }, Lt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ne(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new q.DatabaseClosed(a);
          case "MissingAPIError":
            throw new q.MissingAPI(a.message, a);
          default:
            throw new q.OpenFailed(a);
        }
        if (!this.active) throw new q.TransactionInactive();
        return ne(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = We(function(l) {
          kn(l), n._reject(e.error);
        }), e.onabort = We(function(l) {
          kn(l), n.active && n._reject(new q.Abort(e.error)), n.active = !1, n.on("abort").fire(l);
        }), e.oncomplete = We(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Xt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Lt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Je(new q.ReadOnly("Transaction is readonly"));
        if (!this.active) return Je(new q.TransactionInactive());
        if (this._locked()) return new ae(function(f, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(f, h);
          }, de]);
        });
        if (o) return Wt(function() {
          var f = new ae(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var l = new ae(function(f, h) {
          var v = n(f, h, a);
          v && v.then && v.then(f, h);
        });
        return l._lib = !0, l;
      }, Lt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Lt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = ae.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = f);
        }());
        var l = o._waitingFor;
        return new ae(function(f, h) {
          a.then(function(v) {
            return o._waitingQueue.push(We(f.bind(null, v)));
          }, function(v) {
            return o._waitingQueue.push(We(h.bind(null, v)));
          }).finally(function() {
            o._waitingFor === l && (o._waitingFor = null);
          });
        });
      }, Lt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new q.Abort()));
      }, Lt.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (L(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new q.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, Lt);
      function Lt() {
      }
      function Zr(e, n, o, a, l, f, h, v) {
        return { name: e, keyPath: n, unique: o, multi: a, auto: l, compound: f, src: (o && !h ? "&" : "") + (a ? "*" : "") + (l ? "++" : "") + ii(n), type: v };
      }
      function ii(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function eo(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (a = function(l) {
          return [l.name, l];
        }, o.reduce(function(l, f, h) {
          return h = a(f, h), h && (l[h[0]] = h[1]), l;
        }, {})) };
        var a;
      }
      var Fn = function(e) {
        try {
          return e.only([[]]), Fn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Fn = function() {
            return un;
          }, un;
        }
      };
      function to(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return H(o, n);
        } : function(o) {
          return H(o, e);
        };
        var n;
      }
      function ai(e) {
        return [].slice.call(e);
      }
      var Ka = 0;
      function Mn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function qa(e, n, b) {
        function a(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = T.lower, x = T.upper, C = T.lowerOpen, T = T.upperOpen;
          return w === void 0 ? x === void 0 ? null : n.upperBound(x, !!T) : x === void 0 ? n.lowerBound(w, !!C) : n.bound(w, x, !!C, !!T);
        }
        function l(E) {
          var w, x = E.name;
          return { name: x, schema: E, mutate: function(C) {
            var T = C.trans, A = C.type, P = C.keys, j = C.values, F = C.range;
            return new Promise(function(Y, te) {
              Y = We(Y);
              var z = T.objectStore(x), Z = z.keyPath == null, ie = A === "put" || A === "add";
              if (!ie && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var oe, se = (P || j || { length: 1 }).length;
              if (P && j && P.length !== j.length) throw new Error("Given keys array must have same length as given values array.");
              if (se === 0) return Y({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ne(pt) {
                ++Ye, kn(pt);
              }
              var Ae = [], _e = [], Ye = 0;
              if (A === "deleteRange") {
                if (F.type === 4) return Y({ numFailures: Ye, failures: _e, results: [], lastResult: void 0 });
                F.type === 3 ? Ae.push(oe = z.clear()) : Ae.push(oe = z.delete(a(F)));
              } else {
                var Z = ie ? Z ? [j, P] : [j, null] : [P, null], be = Z[0], lt = Z[1];
                if (ie) for (var ut = 0; ut < se; ++ut) Ae.push(oe = lt && lt[ut] !== void 0 ? z[A](be[ut], lt[ut]) : z[A](be[ut])), oe.onerror = Ne;
                else for (ut = 0; ut < se; ++ut) Ae.push(oe = z[A](be[ut])), oe.onerror = Ne;
              }
              function xr(pt) {
                pt = pt.target.result, Ae.forEach(function(pn, wo) {
                  return pn.error != null && (_e[wo] = pn.error);
                }), Y({ numFailures: Ye, failures: _e, results: A === "delete" ? P : Ae.map(function(pn) {
                  return pn.result;
                }), lastResult: pt });
              }
              oe.onerror = function(pt) {
                Ne(pt), xr(pt);
              }, oe.onsuccess = xr;
            });
          }, getMany: function(C) {
            var T = C.trans, A = C.keys;
            return new Promise(function(P, j) {
              P = We(P);
              for (var F, Y = T.objectStore(x), te = A.length, z = new Array(te), Z = 0, ie = 0, oe = function(Ae) {
                Ae = Ae.target, z[Ae._pos] = Ae.result, ++ie === Z && P(z);
              }, se = Pt(j), Ne = 0; Ne < te; ++Ne) A[Ne] != null && ((F = Y.get(A[Ne]))._pos = Ne, F.onsuccess = oe, F.onerror = se, ++Z);
              Z === 0 && P(z);
            });
          }, get: function(C) {
            var T = C.trans, A = C.key;
            return new Promise(function(P, j) {
              P = We(P);
              var F = T.objectStore(x).get(A);
              F.onsuccess = function(Y) {
                return P(Y.target.result);
              }, F.onerror = Pt(j);
            });
          }, query: (w = _, function(C) {
            return new Promise(function(T, A) {
              T = We(T);
              var P, j, F, Z = C.trans, Y = C.values, te = C.limit, oe = C.query, z = te === 1 / 0 ? void 0 : te, ie = oe.index, oe = oe.range, Z = Z.objectStore(x), ie = ie.isPrimaryKey ? Z : Z.index(ie.name), oe = a(oe);
              if (te === 0) return T({ result: [] });
              w ? ((z = Y ? ie.getAll(oe, z) : ie.getAllKeys(oe, z)).onsuccess = function(se) {
                return T({ result: se.target.result });
              }, z.onerror = Pt(A)) : (P = 0, j = !Y && "openKeyCursor" in ie ? ie.openKeyCursor(oe) : ie.openCursor(oe), F = [], j.onsuccess = function(se) {
                var Ne = j.result;
                return Ne ? (F.push(Y ? Ne.value : Ne.primaryKey), ++P === te ? T({ result: F }) : void Ne.continue()) : T({ result: F });
              }, j.onerror = Pt(A));
            });
          }), openCursor: function(C) {
            var T = C.trans, A = C.values, P = C.query, j = C.reverse, F = C.unique;
            return new Promise(function(Y, te) {
              Y = We(Y);
              var ie = P.index, z = P.range, Z = T.objectStore(x), Z = ie.isPrimaryKey ? Z : Z.index(ie.name), ie = j ? F ? "prevunique" : "prev" : F ? "nextunique" : "next", oe = !A && "openKeyCursor" in Z ? Z.openKeyCursor(a(z), ie) : Z.openCursor(a(z), ie);
              oe.onerror = Pt(te), oe.onsuccess = We(function(se) {
                var Ne, Ae, _e, Ye, be = oe.result;
                be ? (be.___id = ++Ka, be.done = !1, Ne = be.continue.bind(be), Ae = (Ae = be.continuePrimaryKey) && Ae.bind(be), _e = be.advance.bind(be), Ye = function() {
                  throw new Error("Cursor not stopped");
                }, be.trans = T, be.stop = be.continue = be.continuePrimaryKey = be.advance = function() {
                  throw new Error("Cursor not started");
                }, be.fail = We(te), be.next = function() {
                  var lt = this, ut = 1;
                  return this.start(function() {
                    return ut-- ? lt.continue() : lt.stop();
                  }).then(function() {
                    return lt;
                  });
                }, be.start = function(lt) {
                  function ut() {
                    if (oe.result) try {
                      lt();
                    } catch (pt) {
                      be.fail(pt);
                    }
                    else be.done = !0, be.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, be.stop();
                  }
                  var xr = new Promise(function(pt, pn) {
                    pt = We(pt), oe.onerror = Pt(pn), be.fail = pn, be.stop = function(wo) {
                      be.stop = be.continue = be.continuePrimaryKey = be.advance = Ye, pt(wo);
                    };
                  });
                  return oe.onsuccess = We(function(pt) {
                    oe.onsuccess = ut, ut();
                  }), be.continue = Ne, be.continuePrimaryKey = Ae, be.advance = _e, ut(), xr;
                }, Y(be)) : Y(null);
              }, te);
            });
          }, count: function(C) {
            var T = C.query, A = C.trans, P = T.index, j = T.range;
            return new Promise(function(F, Y) {
              var te = A.objectStore(x), z = P.isPrimaryKey ? te : te.index(P.name), te = a(j), z = te ? z.count(te) : z.count();
              z.onsuccess = We(function(Z) {
                return F(Z.target.result);
              }), z.onerror = Pt(Y);
            });
          } };
        }
        var f, h, v, R = (h = b, v = ai((f = e).objectStoreNames), { schema: { name: f.name, tables: v.map(function(E) {
          return h.objectStore(E);
        }).map(function(E) {
          var w = E.keyPath, T = E.autoIncrement, x = p(w), C = {}, T = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: T, unique: !0, extractKey: to(w) }, indexes: ai(E.indexNames).map(function(A) {
            return E.index(A);
          }).map(function(F) {
            var P = F.name, j = F.unique, Y = F.multiEntry, F = F.keyPath, Y = { name: P, compound: p(F), keyPath: F, unique: j, multiEntry: Y, extractKey: to(F) };
            return C[Mn(F)] = Y;
          }), getIndexByKeyPath: function(A) {
            return C[Mn(A)];
          } };
          return C[":id"] = T.primaryKey, w != null && (C[Mn(w)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = R.schema, _ = R.hasGetAll, R = b.tables.map(l), g = {};
        return R.forEach(function(E) {
          return g[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!g[E]) throw new Error("Table '".concat(E, "' not found"));
          return g[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: Fn(n), schema: b };
      }
      function Ua(e, n, o, a) {
        var l = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = qa(n, l, a), e.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, a)) };
      }
      function fr(e, a) {
        var o = a.db, a = Ua(e._middlewares, o, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(l) {
          var f = l.name;
          e.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (l.core = e.core.table(f), e[f] instanceof e.Table && (e[f].core = l.core));
        });
      }
      function dr(e, n, o, a) {
        o.forEach(function(l) {
          var f = a[l];
          n.forEach(function(h) {
            var v = function b(_, R) {
              return W(_, R) || (_ = S(_)) && b(_, R);
            }(h, l);
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? ee(h, l, { get: function() {
              return this.table(l);
            }, set: function(b) {
              J(this, l, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[l] = new e.Table(l, f));
          });
        });
      }
      function no(e, n) {
        n.forEach(function(o) {
          for (var a in o) o[a] instanceof e.Table && delete o[a];
        });
      }
      function Va(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function Wa(e, n, o, a) {
        var l = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = eo("$meta", li("")[0], []), e._storeNames.push("$meta"));
        var f = e._createTransaction("readwrite", e._storeNames, l);
        f.create(o), f._completion.catch(a);
        var h = f._reject.bind(f), v = de.transless || de;
        Wt(function() {
          return de.trans = f, de.transless = v, n !== 0 ? (fr(e, o), _ = n, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(R) {
            return R ?? _;
          }) : ae.resolve(_)).then(function(R) {
            return E = R, w = f, x = o, C = [], R = (g = e)._versions, T = g._dbSchema = hr(0, g.idbdb, x), (R = R.filter(function(A) {
              return A._cfg.version >= E;
            })).length !== 0 ? (R.forEach(function(A) {
              C.push(function() {
                var P = T, j = A._cfg.dbschema;
                mr(g, P, x), mr(g, j, x), T = g._dbSchema = j;
                var F = ro(P, j);
                F.add.forEach(function(ie) {
                  oo(x, ie[0], ie[1].primKey, ie[1].indexes);
                }), F.change.forEach(function(ie) {
                  if (ie.recreate) throw new q.Upgrade("Not yet support for changing primary key");
                  var oe = x.objectStore(ie.name);
                  ie.add.forEach(function(se) {
                    return pr(oe, se);
                  }), ie.change.forEach(function(se) {
                    oe.deleteIndex(se.name), pr(oe, se);
                  }), ie.del.forEach(function(se) {
                    return oe.deleteIndex(se);
                  });
                });
                var Y = A._cfg.contentUpgrade;
                if (Y && A._cfg.version > E) {
                  fr(g, x), w._memoizedTables = {};
                  var te = ue(j);
                  F.del.forEach(function(ie) {
                    te[ie] = P[ie];
                  }), no(g, [g.Transaction.prototype]), dr(g, [g.Transaction.prototype], c(te), te), w.schema = te;
                  var z, Z = Et(Y);
                  return Z && xn(), F = ae.follow(function() {
                    var ie;
                    (z = Y(w)) && Z && (ie = Gt.bind(null, null), z.then(ie, ie));
                  }), z && typeof z.then == "function" ? ae.resolve(z) : F.then(function() {
                    return z;
                  });
                }
              }), C.push(function(P) {
                var j, F, Y = A._cfg.dbschema;
                j = Y, F = P, [].slice.call(F.db.objectStoreNames).forEach(function(te) {
                  return j[te] == null && F.db.deleteObjectStore(te);
                }), no(g, [g.Transaction.prototype]), dr(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), w.schema = g._dbSchema;
              }), C.push(function(P) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === A._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(j) {
                  return j !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return C.length ? ae.resolve(C.shift()(w.idbtrans)).then(A) : ae.resolve();
            }().then(function() {
              si(T, x);
            })) : ae.resolve();
            var g, E, w, x, C, T;
          }).catch(h)) : (c(l).forEach(function(R) {
            oo(o, R, l[R].primKey, l[R].indexes);
          }), fr(e, o), void ae.follow(function() {
            return e.on.populate.fire(f);
          }).catch(h));
          var b, _;
        });
      }
      function Ga(e, n) {
        si(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = hr(0, e.idbdb, n);
        mr(e, e._dbSchema, n);
        for (var a = 0, l = ro(o, e._dbSchema).change; a < l.length; a++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = n.objectStore(h.name);
            h.add.forEach(function(b) {
              me && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), pr(v, b);
            });
          }(l[a]);
          if (typeof f == "object") return f.value;
        }
      }
      function ro(e, n) {
        var o, a = { del: [], add: [], change: [] };
        for (o in e) n[o] || a.del.push(o);
        for (o in n) {
          var l = e[o], f = n[o];
          if (l) {
            var h = { name: o, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (l.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || l.primKey.auto !== f.primKey.auto) h.recreate = !0, a.change.push(h);
            else {
              var v = l.idxByName, b = f.idxByName, _ = void 0;
              for (_ in v) b[_] || h.del.push(_);
              for (_ in b) {
                var R = v[_], g = b[_];
                R ? R.src !== g.src && h.change.push(g) : h.add.push(g);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && a.change.push(h);
            }
          } else a.add.push([o, f]);
        }
        return a;
      }
      function oo(e, n, o, a) {
        var l = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(f) {
          return pr(l, f);
        }), l;
      }
      function si(e, n) {
        c(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (me && console.debug("Dexie: Creating missing table", o), oo(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function pr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function hr(e, n, o) {
        var a = {};
        return M(n.objectStoreNames, 0).forEach(function(l) {
          for (var f = o.objectStore(l), h = Zr(ii(_ = f.keyPath), _ || "", !0, !1, !!f.autoIncrement, _ && typeof _ != "string", !0), v = [], b = 0; b < f.indexNames.length; ++b) {
            var R = f.index(f.indexNames[b]), _ = R.keyPath, R = Zr(R.name, _, !!R.unique, !!R.multiEntry, !1, _ && typeof _ != "string", !1);
            v.push(R);
          }
          a[l] = eo(l, h, v);
        }), a;
      }
      function mr(e, n, o) {
        for (var a = o.db.objectStoreNames, l = 0; l < a.length; ++l) {
          var f = a[l], h = o.objectStore(f);
          e._hasGetAll = "getAll" in h;
          for (var v = 0; v < h.indexNames.length; ++v) {
            var b = h.indexNames[v], _ = h.index(b).keyPath, R = typeof _ == "string" ? _ : "[" + M(_).join("+") + "]";
            !n[f] || (_ = n[f].idxByName[R]) && (_.name = b, delete n[f].idxByName[R], n[f].idxByName[b] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function li(e) {
        return e.split(",").map(function(n, o) {
          var f = n.split(":"), a = (l = f[1]) === null || l === void 0 ? void 0 : l.trim(), l = (n = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return Zr(l, f || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), p(f), o === 0, a);
        });
      }
      var Ha = (Cn.prototype._createTableSchema = eo, Cn.prototype._parseIndexSyntax = li, Cn.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        c(e).forEach(function(a) {
          if (e[a] !== null) {
            var l = o._parseIndexSyntax(e[a]), f = l.shift();
            if (!f) throw new q.Schema("Invalid schema for table " + a + ": " + e[a]);
            if (f.unique = !0, f.multi) throw new q.Schema("Primary key cannot be multiEntry*");
            l.forEach(function(h) {
              if (h.auto) throw new q.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new q.Schema("Index must have a name and cannot be an empty string");
            }), l = o._createTableSchema(a, f, l), n[a] = l;
          }
        });
      }, Cn.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, o) : o;
        var o = n._versions, a = {}, l = {};
        return o.forEach(function(f) {
          m(a, f._cfg.storesSource), l = f._cfg.dbschema = {}, f._parseStoresSpec(a, l);
        }), n._dbSchema = l, no(n, [n._allTables, n, n.Transaction.prototype]), dr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], c(l), l), n._storeNames = c(l), this;
      }, Cn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ge(this._cfg.contentUpgrade || D, e), this;
      }, Cn);
      function Cn() {
      }
      function io(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new $t(ir, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function ao(e) {
        return e && typeof e.databases == "function";
      }
      function so(e) {
        return Wt(function() {
          return de.letThrough = !0, e();
        });
      }
      function lo(e) {
        return !("from" in e);
      }
      var st = function(e, n) {
        if (!this) {
          var o = new st();
          return e && "d" in e && m(o, e), o;
        }
        m(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function $n(e, n, o) {
        var a = Ee(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (lo(e)) return m(e, { from: n, to: o, d: 1 });
          var l = e.l, a = e.r;
          if (Ee(o, e.from) < 0) return l ? $n(l, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ci(e);
          if (0 < Ee(n, e.to)) return a ? $n(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ci(e);
          Ee(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Ee(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, l && !e.l && Bn(e, l), a && o && Bn(e, a);
        }
      }
      function Bn(e, n) {
        lo(n) || function o(a, b) {
          var f = b.from, h = b.to, v = b.l, b = b.r;
          $n(a, f, h), v && o(a, v), b && o(a, b);
        }(e, n);
      }
      function ui(e, n) {
        var o = vr(n), a = o.next();
        if (a.done) return !1;
        for (var l = a.value, f = vr(e), h = f.next(l.from), v = h.value; !a.done && !h.done; ) {
          if (Ee(v.from, l.to) <= 0 && 0 <= Ee(v.to, l.from)) return !0;
          Ee(l.from, v.from) < 0 ? l = (a = o.next(v.from)).value : v = (h = f.next(l.from)).value;
        }
        return !1;
      }
      function vr(e) {
        var n = lo(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Ee(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Ee(o, n.n.to) <= 0) return { value: n.n, done: !1 };
            case 2:
              if (n.n.r) {
                n.s = 3, n = { up: n, n: n.n.r, s: 0 };
                continue;
              }
            case 3:
              n = n.up;
          }
          return { done: !0 };
        } };
      }
      function ci(e) {
        var n, o, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), l = 1 < a ? "r" : a < -1 ? "l" : "";
        l && (n = l == "r" ? "l" : "r", o = s({}, e), a = e[l], e.from = a.from, e.to = a.to, e[l] = a[l], o[l] = a[n], (e[n] = o).d = fi(o)), e.d = fi(e);
      }
      function fi(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function yr(e, n) {
        return c(n).forEach(function(o) {
          e[o] ? Bn(e[o], n[o]) : e[o] = function a(l) {
            var f, h, v = {};
            for (f in l) L(l, f) && (h = l[f], v[f] = !h || typeof h != "object" || Oe.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function uo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && ui(n[o], e[o]);
        });
      }
      k(st.prototype, ((Rt = { add: function(e) {
        return Bn(this, e), this;
      }, addKey: function(e) {
        return $n(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return $n(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = vr(this).next(e).value;
        return n && Ee(n.from, e) <= 0 && 0 <= Ee(n.to, e);
      } })[$e] = function() {
        return vr(this);
      }, Rt));
      var fn = {}, co = {}, fo = !1;
      function gr(e) {
        yr(co, e), fo || (fo = !0, setTimeout(function() {
          fo = !1, po(co, !(co = {}));
        }, 0));
      }
      function po(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, l = Object.values(fn); a < l.length; a++) di(h = l[a], e, o, n);
        else for (var f in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (h = fn["idb://".concat(f, "/").concat(v)]) && di(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function di(e, n, o, a) {
        for (var l = [], f = 0, h = Object.entries(e.queries.query); f < h.length; f++) {
          for (var v = h[f], b = v[0], _ = [], R = 0, g = v[1]; R < g.length; R++) {
            var E = g[R];
            uo(n, E.obsSet) ? E.subscribers.forEach(function(T) {
              return o.add(T);
            }) : a && _.push(E);
          }
          a && l.push([b, _]);
        }
        if (a) for (var w = 0, x = l; w < x.length; w++) {
          var C = x[w], b = C[0], _ = C[1];
          e.queries.query[b] = _;
        }
      }
      function Ya(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? Je(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, l = Math.round(10 * e.verno), f = !1;
        function h() {
          if (n.openCanceller !== a) throw new q.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new ae(function(E, w) {
            if (h(), !o) throw new q.MissingAPI();
            var x = e.name, C = n.autoSchema || !l ? o.open(x) : o.open(x, l);
            if (!C) throw new q.MissingAPI();
            C.onerror = Pt(w), C.onblocked = We(e._fireOnBlocked), C.onupgradeneeded = We(function(T) {
              var A;
              R = C.transaction, n.autoSchema && !e._options.allowEmptyDB ? (C.onerror = kn, R.abort(), C.result.close(), (A = o.deleteDatabase(x)).onsuccess = A.onerror = We(function() {
                w(new q.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (R.onerror = Pt(w), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, g = T < 1, e.idbdb = C.result, f && Ga(e, R), Wa(e, T / 10, R, w));
            }, w), C.onsuccess = We(function() {
              R = null;
              var T, A, P, j, F, Y = e.idbdb = C.result, te = M(Y.objectStoreNames);
              if (0 < te.length) try {
                var z = Y.transaction((j = te).length === 1 ? j[0] : j, "readonly");
                if (n.autoSchema) A = Y, P = z, (T = e).verno = A.version / 10, P = T._dbSchema = hr(0, A, P), T._storeNames = M(A.objectStoreNames, 0), dr(T, [T._allTables], c(P), P);
                else if (mr(e, e._dbSchema, z), ((F = ro(hr(0, (F = e).idbdb, z), F._dbSchema)).add.length || F.change.some(function(Z) {
                  return Z.add.length || Z.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Y.close(), l = Y.version + 1, f = !0, E(v());
                fr(e, z);
              } catch {
              }
              Nn.push(e), Y.onversionchange = We(function(Z) {
                n.vcFired = !0, e.on("versionchange").fire(Z);
              }), Y.onclose = We(function(Z) {
                e.on("close").fire(Z);
              }), g && (F = e._deps, z = x, Y = F.indexedDB, F = F.IDBKeyRange, ao(Y) || z === ir || io(Y, F).put({ name: z }).catch(D)), E();
            }, w);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < l) return l = 0, v();
            }
            return ae.reject(E);
          });
        }
        var b, _ = n.dbReadyResolve, R = null, g = !1;
        return ae.race([a, (typeof navigator > "u" ? ae.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function w() {
            return indexedDB.databases().finally(E);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], ae.resolve(so(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(ge, D);
              return n.onReadyBeingFired = [], ae.resolve(so(function() {
                return w(e.vip);
              })).then(E);
            }
          });
        }).finally(function() {
          n.openCanceller === a && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(E) {
          n.dbOpenError = E;
          try {
            R && R.abort();
          } catch {
          }
          return a === n.openCanceller && e._close(), Je(E);
        }).finally(function() {
          n.openComplete = !0, _();
        }).then(function() {
          var E;
          return g && (E = {}, e.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(x) {
              x.name && (E["idb://".concat(e.name, "/").concat(w.name, "/").concat(x.name)] = new st(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(w.name, "/")] = E["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new st(-1 / 0, [[[]]]);
          }), Xt(jn).fire(E), po(E, !0)), e;
        });
      }
      function ho(e) {
        function n(f) {
          return e.next(f);
        }
        var o = l(n), a = l(function(f) {
          return e.throw(f);
        });
        function l(f) {
          return function(b) {
            var v = f(b), b = v.value;
            return v.done ? b : b && typeof b.then == "function" ? b.then(o, a) : p(b) ? Promise.all(b).then(o, a) : o(b);
          };
        }
        return l(n)();
      }
      function br(e, n, o) {
        for (var a = p(e) ? e.slice() : [e], l = 0; l < o; ++l) a.push(n);
        return a;
      }
      var Xa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, l = {}, f = [];
          function h(g, E, w) {
            var x = Mn(g), C = l[x] = l[x] || [], T = g == null ? 0 : typeof g == "string" ? 1 : g.length, A = 0 < E, A = s(s({}, w), { name: A ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: A, keyTail: E, keyLength: T, extractKey: to(g), unique: !A && w.unique });
            return C.push(A), A.isPrimaryKey || f.push(A), 1 < T && h(T === 2 ? g[0] : g.slice(0, T - 1), E + 1, w), C.sort(function(P, j) {
              return P.keyTail - j.keyTail;
            }), A;
          }
          n = h(a.primaryKey.keyPath, 0, a.primaryKey), l[":id"] = [n];
          for (var v = 0, b = a.indexes; v < b.length; v++) {
            var _ = b[v];
            h(_.keyPath, 0, _);
          }
          function R(g) {
            var E, w = g.query.index;
            return w.isVirtual ? s(s({}, g), { query: { index: w.lowLevelIndex, range: (E = g.query.range, w = w.keyTail, { type: E.type === 1 ? 2 : E.type, lower: br(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, w), lowerOpen: !0, upper: br(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, w), upperOpen: !0 }) } }) : g;
          }
          return s(s({}, o), { schema: s(s({}, a), { primaryKey: n, indexes: f, getIndexByKeyPath: function(g) {
            return (g = l[Mn(g)]) && g[0];
          } }), count: function(g) {
            return o.count(R(g));
          }, query: function(g) {
            return o.query(R(g));
          }, openCursor: function(g) {
            var E = g.query.index, w = E.keyTail, x = E.isVirtual, C = E.keyLength;
            return x ? o.openCursor(R(g)).then(function(A) {
              return A && T(A);
            }) : o.openCursor(g);
            function T(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(br(P, g.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : g.unique ? A.continue(A.key.slice(0, C).concat(g.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, j) {
                A.continuePrimaryKey(br(P, e.MAX_KEY, w), j);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return C === 1 ? P[0] : P.slice(0, C);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function mo(e, n, o, a) {
        return o = o || {}, a = a || "", c(e).forEach(function(l) {
          var f, h, v;
          L(n, l) ? (f = e[l], h = n[l], typeof f == "object" && typeof h == "object" && f && h ? (v = Qe(f)) !== Qe(h) ? o[a + l] = n[l] : v === "Object" ? mo(f, h, o, a + l + ".") : f !== h && (o[a + l] = n[l]) : f !== h && (o[a + l] = n[l])) : o[a + l] = void 0;
        }), c(n).forEach(function(l) {
          L(e, l) || (o[a + l] = n[l]);
        }), o;
      }
      function vo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var za = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = de.trans, h = f.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (l.type) {
              case "add":
                if (b.fire === D) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "put":
                if (b.fire === D && _.fire === D) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "delete":
                if (v.fire === D) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "deleteRange":
                if (v.fire === D) break;
                return f._promise("readwrite", function() {
                  return function g(E, w, x) {
                    return o.query({ trans: E, values: !1, query: { index: a, range: w }, limit: x }).then(function(C) {
                      var T = C.result;
                      return R({ type: "delete", keys: T, trans: E }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : T.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : g(E, s(s({}, w), { lower: T[T.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function R(g) {
              var E, w, x, C = de.trans, T = g.keys || vo(a, g);
              if (!T) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? s(s({}, g), { keys: T }) : s({}, g)).type !== "delete" && (g.values = u([], g.values)), g.keys && (g.keys = u([], g.keys)), E = o, x = T, ((w = g).type === "add" ? Promise.resolve([]) : E.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(A) {
                var P = T.map(function(j, F) {
                  var Y, te, z, Z = A[F], ie = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? v.fire.call(ie, j, Z, C) : g.type === "add" || Z === void 0 ? (Y = b.fire.call(ie, j, g.values[F], C), j == null && Y != null && (g.keys[F] = j = Y, a.outbound || re(g.values[F], a.keyPath, j))) : (Y = mo(Z, g.values[F]), (te = _.fire.call(ie, Y, j, Z, C)) && (z = g.values[F], Object.keys(te).forEach(function(oe) {
                    L(z, oe) ? z[oe] = te[oe] : re(z, oe, te[oe]);
                  }))), ie;
                });
                return o.mutate(g).then(function(j) {
                  for (var F = j.failures, Y = j.results, te = j.numFailures, j = j.lastResult, z = 0; z < T.length; ++z) {
                    var Z = (Y || T)[z], ie = P[z];
                    Z == null ? ie.onerror && ie.onerror(F[z]) : ie.onsuccess && ie.onsuccess(g.type === "put" && A[z] ? g.values[z] : Z);
                  }
                  return { failures: F, results: Y, numFailures: te, lastResult: j };
                }).catch(function(j) {
                  return P.forEach(function(F) {
                    return F.onerror && F.onerror(j);
                  }), Promise.reject(j);
                });
              });
            }
          } });
        } });
      } };
      function pi(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], l = 0, f = 0; l < n.keys.length && f < e.length; ++l) Ee(n.keys[l], e[f]) === 0 && (a.push(o ? He(n.values[l]) : n.values[l]), ++f);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Qa = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return s(s({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var l = pi(a.keys, a.trans._cache, a.cache === "clone");
            return l ? ae.resolve(l) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? He(f) : f }, f;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function hi(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function mi(e, n) {
        switch (e) {
          case "query":
            return n.values && !n.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Ja = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new st(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(a, l, f) {
          if (de.subscr && l !== "readonly") throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(de.querier));
          return e.transaction(a, l, f);
        }, table: function(a) {
          var l = e.table(a), f = l.schema, h = f.primaryKey, g = f.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && g.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), R = s(s({}, l), { mutate: function(w) {
            function x(oe) {
              return oe = "idb://".concat(n, "/").concat(a, "/").concat(oe), j[oe] || (j[oe] = new st());
            }
            var C, T, A, P = w.trans, j = w.mutatedParts || (w.mutatedParts = {}), F = x(""), Y = x(":dels"), te = w.type, ie = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [vo(h, w).filter(function(oe) {
              return oe;
            }), w.values] : [], z = ie[0], Z = ie[1], ie = w.trans._cache;
            return p(z) ? (F.addKeys(z), (ie = te === "delete" || z.length === Z.length ? pi(z, ie) : null) || Y.addKeys(z), (ie || Z) && (C = x, T = ie, A = Z, f.indexes.forEach(function(oe) {
              var se = C(oe.name || "");
              function Ne(_e) {
                return _e != null ? oe.extractKey(_e) : null;
              }
              function Ae(_e) {
                return oe.multiEntry && p(_e) ? _e.forEach(function(Ye) {
                  return se.addKey(Ye);
                }) : se.addKey(_e);
              }
              (T || A).forEach(function(_e, lt) {
                var be = T && Ne(T[lt]), lt = A && Ne(A[lt]);
                Ee(be, lt) !== 0 && (be != null && Ae(be), lt != null && Ae(lt));
              });
            }))) : z ? (Z = { from: (Z = z.lower) !== null && Z !== void 0 ? Z : e.MIN_KEY, to: (Z = z.upper) !== null && Z !== void 0 ? Z : e.MAX_KEY }, Y.add(Z), F.add(Z)) : (F.add(o), Y.add(o), f.indexes.forEach(function(oe) {
              return x(oe.name).add(o);
            })), l.mutate(w).then(function(oe) {
              return !z || w.type !== "add" && w.type !== "put" || (F.addKeys(oe.results), _ && _.forEach(function(se) {
                for (var Ne = w.values.map(function(be) {
                  return se.extractKey(be);
                }), Ae = se.keyPath.findIndex(function(be) {
                  return be === h.keyPath;
                }), _e = 0, Ye = oe.results.length; _e < Ye; ++_e) Ne[_e][Ae] = oe.results[_e];
                x(se.name).addKeys(Ne);
              })), P.mutatedParts = yr(P.mutatedParts || {}, j), oe;
            });
          } }), g = function(x) {
            var C = x.query, x = C.index, C = C.range;
            return [x, new st((x = C.lower) !== null && x !== void 0 ? x : e.MIN_KEY, (C = C.upper) !== null && C !== void 0 ? C : e.MAX_KEY)];
          }, E = { get: function(w) {
            return [h, new st(w.key)];
          }, getMany: function(w) {
            return [h, new st().addKeys(w.keys)];
          }, count: g, query: g, openCursor: g };
          return c(E).forEach(function(w) {
            R[w] = function(x) {
              var C = de.subscr, T = !!C, A = hi(de, l) && mi(w, x) ? x.obsSet = {} : C;
              if (T) {
                var P = function(Z) {
                  return Z = "idb://".concat(n, "/").concat(a, "/").concat(Z), A[Z] || (A[Z] = new st());
                }, j = P(""), F = P(":dels"), C = E[w](x), T = C[0], C = C[1];
                if ((w === "query" && T.isPrimaryKey && !x.values ? F : P(T.name || "")).add(C), !T.isPrimaryKey) {
                  if (w !== "count") {
                    var Y = w === "query" && b && x.values && l.query(s(s({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(Z) {
                      if (w === "query") {
                        if (b && x.values) return Y.then(function(Ne) {
                          return Ne = Ne.result, j.addKeys(Ne), Z;
                        });
                        var ie = x.values ? Z.result.map(v) : Z.result;
                        (x.values ? j : F).addKeys(ie);
                      } else if (w === "openCursor") {
                        var oe = Z, se = x.values;
                        return oe && Object.create(oe, { key: { get: function() {
                          return F.addKey(oe.primaryKey), oe.key;
                        } }, primaryKey: { get: function() {
                          var Ne = oe.primaryKey;
                          return F.addKey(Ne), Ne;
                        } }, value: { get: function() {
                          return se && j.addKey(oe.primaryKey), oe.value;
                        } } });
                      }
                      return Z;
                    });
                  }
                  F.add(o);
                }
              }
              return l[w].apply(this, arguments);
            };
          }), R;
        } });
      } };
      function vi(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === a ? null : (n = s({}, n), p(n.keys) && (n.keys = n.keys.filter(function(l, f) {
          return !(f in o.failures);
        })), "values" in n && p(n.values) && (n.values = n.values.filter(function(l, f) {
          return !(f in o.failures);
        })), n);
      }
      function yo(e, n) {
        return o = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Ee(o, a.lower) : 0 <= Ee(o, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Ee(e, n.upper) < 0 : Ee(e, n.upper) <= 0));
        var o, a;
      }
      function yi(e, n, E, a, l, f) {
        if (!E || E.length === 0) return e;
        var h = n.query.index, v = h.multiEntry, b = n.query.range, _ = a.schema.primaryKey.extractKey, R = h.extractKey, g = (h.lowLevelIndex || h).extractKey, E = E.reduce(function(w, x) {
          var C = w, T = [];
          if (x.type === "add" || x.type === "put") for (var A = new st(), P = x.values.length - 1; 0 <= P; --P) {
            var j, F = x.values[P], Y = _(F);
            A.hasKey(Y) || (j = R(F), (v && p(j) ? j.some(function(oe) {
              return yo(oe, b);
            }) : yo(j, b)) && (A.addKey(Y), T.push(F)));
          }
          switch (x.type) {
            case "add":
              var te = new st().addKeys(n.values ? w.map(function(se) {
                return _(se);
              }) : w), C = w.concat(n.values ? T.filter(function(se) {
                return se = _(se), !te.hasKey(se) && (te.addKey(se), !0);
              }) : T.map(function(se) {
                return _(se);
              }).filter(function(se) {
                return !te.hasKey(se) && (te.addKey(se), !0);
              }));
              break;
            case "put":
              var z = new st().addKeys(x.values.map(function(se) {
                return _(se);
              }));
              C = w.filter(function(se) {
                return !z.hasKey(n.values ? _(se) : se);
              }).concat(n.values ? T : T.map(function(se) {
                return _(se);
              }));
              break;
            case "delete":
              var Z = new st().addKeys(x.keys);
              C = w.filter(function(se) {
                return !Z.hasKey(n.values ? _(se) : se);
              });
              break;
            case "deleteRange":
              var ie = x.range;
              C = w.filter(function(se) {
                return !yo(_(se), ie);
              });
          }
          return C;
        }, e);
        return E === e ? e : (E.sort(function(w, x) {
          return Ee(g(w), g(x)) || Ee(_(w), _(x));
        }), n.limit && n.limit < 1 / 0 && (E.length > n.limit ? E.length = n.limit : e.length === n.limit && E.length < n.limit && (l.dirty = !0)), f ? Object.freeze(E) : E);
      }
      function gi(e, n) {
        return Ee(e.lower, n.lower) === 0 && Ee(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Za(e, n) {
        return function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Ee(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return 1;
            if (f) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Ee(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return -1;
            if (f) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function es(e, n, o, a) {
        e.subscribers.add(o), a.addEventListener("abort", function() {
          var l, f;
          e.subscribers.delete(o), e.subscribers.size === 0 && (l = e, f = n, setTimeout(function() {
            l.subscribers.size === 0 && Le(f, l);
          }, 3e3));
        });
      }
      var ts = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return s(s({}, e), { transaction: function(o, a, l) {
          var f, h, v = e.transaction(o, a, l);
          return a === "readwrite" && (h = (f = new AbortController()).signal, l = function(b) {
            return function() {
              if (f.abort(), a === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), R = 0, g = o; R < g.length; R++) {
                  var E = g[R], w = fn["idb://".concat(n, "/").concat(E)];
                  if (w) {
                    var x = e.table(E), C = w.optimisticOps.filter(function(se) {
                      return se.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var T = 0, A = Object.values(w.queries.query); T < A.length; T++) for (var P = 0, j = (te = A[T]).slice(); P < j.length; P++) uo((z = j[P]).obsSet, v.mutatedParts) && (Le(te, z), z.subscribers.forEach(function(se) {
                      return _.add(se);
                    }));
                    else if (0 < C.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(se) {
                        return se.trans !== v;
                      });
                      for (var F = 0, Y = Object.values(w.queries.query); F < Y.length; F++) for (var te, z, Z, ie = 0, oe = (te = Y[F]).slice(); ie < oe.length; ie++) (z = oe[ie]).res != null && v.mutatedParts && (b && !z.dirty ? (Z = Object.isFrozen(z.res), Z = yi(z.res, z.req, C, x, z, Z), z.dirty ? (Le(te, z), z.subscribers.forEach(function(se) {
                        return _.add(se);
                      })) : Z !== z.res && (z.res = Z, z.promise = ae.resolve({ result: Z }))) : (z.dirty && Le(te, z), z.subscribers.forEach(function(se) {
                        return _.add(se);
                      })));
                    }
                  }
                }
                _.forEach(function(se) {
                  return se();
                });
              }
            };
          }, v.addEventListener("abort", l(!1), { signal: h }), v.addEventListener("error", l(!1), { signal: h }), v.addEventListener("complete", l(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), l = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var h = de.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(f);
            var v = fn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || vo(l, f).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && gr(f.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (Le(v.optimisticOps, f), (b = vi(0, f, b)) && v.optimisticOps.push(b), f.mutatedParts && gr(f.mutatedParts));
            }), h.catch(function() {
              Le(v.optimisticOps, f), f.mutatedParts && gr(f.mutatedParts);
            })) : h.then(function(b) {
              var _ = vi(0, s(s({}, f), { values: f.values.map(function(R, g) {
                var E;
                return b.failures[g] ? R : (R = (E = l.keyPath) !== null && E !== void 0 && E.includes(".") ? He(R) : s({}, R), re(R, l.keyPath, b.results[g]), R);
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return f.mutatedParts && gr(f.mutatedParts);
              });
            }), h) : a.mutate(f);
          }, query: function(f) {
            if (!hi(de, a) || !mi("query", f)) return a.query(f);
            var h = ((_ = de.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", g = de, v = g.requery, b = g.signal, _ = function(x, C, T, A) {
              var P = fn["idb://".concat(x, "/").concat(C)];
              if (!P) return [];
              if (!(C = P.queries[T])) return [null, !1, P, null];
              var j = C[(A.query ? A.query.index.name : null) || ""];
              if (!j) return [null, !1, P, null];
              switch (T) {
                case "query":
                  var F = j.find(function(Y) {
                    return Y.req.limit === A.limit && Y.req.values === A.values && gi(Y.req.query.range, A.query.range);
                  });
                  return F ? [F, !0, P, j] : [j.find(function(Y) {
                    return ("limit" in Y.req ? Y.req.limit : 1 / 0) >= A.limit && (!A.values || Y.req.values) && Za(Y.req.query.range, A.query.range);
                  }), !1, P, j];
                case "count":
                  return F = j.find(function(Y) {
                    return gi(Y.req.query.range, A.query.range);
                  }), [F, !!F, P, j];
              }
            }(n, o, "query", f), R = _[0], g = _[1], E = _[2], w = _[3];
            return R && g ? R.obsSet = f.obsSet : (g = a.query(f).then(function(x) {
              var C = x.result;
              if (R && (R.res = C), h) {
                for (var T = 0, A = C.length; T < A; ++T) Object.freeze(C[T]);
                Object.freeze(C);
              } else x.result = He(C);
              return x;
            }).catch(function(x) {
              return w && R && Le(w, R), Promise.reject(x);
            }), R = { obsSet: f.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(R) : (w = [R], (E = E || (fn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), es(R, w, v, b), R.promise.then(function(x) {
              return { result: yi(x.result, f, E?.optimisticOps, a, R, h) };
            });
          } });
        } });
      } };
      function wr(e, n) {
        return new Proxy(e, { get: function(o, a, l) {
          return a === "db" ? n : Reflect.get(o, a, l);
        } });
      }
      var $t = (Ze.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new q.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new q.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Va), o.stores({}), this._state.autoSchema = !1, o);
      }, Ze.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || de.letThrough || this._vip) ? e() : new ae(function(o, a) {
          if (n._state.openComplete) return a(new q.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new q.DatabaseClosed());
            n.open().catch(D);
          }
          n._state.dbReadyPromise.then(o, a);
        }).then(e);
      }, Ze.prototype.use = function(e) {
        var n = e.stack, o = e.create, a = e.level, l = e.name;
        return l && this.unuse({ stack: n, name: l }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: a ?? 10, name: l }), e.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Ze.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(l) {
          return a ? l.create !== a : !!o && l.name !== o;
        })), this;
      }, Ze.prototype.open = function() {
        var e = this;
        return ln(dt, function() {
          return Ya(e);
        });
      }, Ze.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = Nn.indexOf(this);
        if (0 <= n && Nn.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new ae(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ae(function(o, a) {
          e.cancelOpen = a;
        }));
      }, Ze.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new q.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new q.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ze.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ae(function(l, f) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = We(function() {
              var b, _, R;
              b = n._deps, _ = n.name, R = b.indexedDB, b = b.IDBKeyRange, ao(R) || _ === ir || io(R, b).delete(_).catch(D), l();
            }), v.onerror = Pt(f), v.onblocked = n._fireOnBlocked;
          }
          if (o) throw new q.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(h) : h();
        });
      }, Ze.prototype.backendDB = function() {
        return this.idbdb;
      }, Ze.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ze.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ze.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ze.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ze.prototype, "tables", { get: function() {
        var e = this;
        return c(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Ze.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var l = arguments.length;
          if (l < 2) throw new q.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return a = f.pop(), [n, we(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ze.prototype._transaction = function(e, n, o) {
        var a = this, l = de.trans;
        l && l.db === this && e.indexOf("!") === -1 || (l = null);
        var f, h, v = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (h = n.map(function(_) {
            if (_ = _ instanceof a.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), e == "r" || e === Yr) f = Yr;
          else {
            if (e != "rw" && e != Xr) throw new q.InvalidArgument("Invalid transaction mode: " + e);
            f = Xr;
          }
          if (l) {
            if (l.mode === Yr && f === Xr) {
              if (!v) throw new q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              l = null;
            }
            l && h.forEach(function(_) {
              if (l && l.storeNames.indexOf(_) === -1) {
                if (!v) throw new q.SubTransaction("Table " + _ + " not included in parent transaction.");
                l = null;
              }
            }), v && l && !l.active && (l = null);
          }
        } catch (_) {
          return l ? l._promise(null, function(R, g) {
            g(_);
          }) : Je(_);
        }
        var b = (function _(R, g, E, w, x) {
          return ae.resolve().then(function() {
            var C = de.transless || de, T = R._createTransaction(g, E, R._dbSchema, w);
            if (T.explicit = !0, C = { trans: T, transless: C }, w) T.idbtrans = w.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3;
            } catch (j) {
              return j.name === I.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                return _(R, g, E, null, x);
              })) : Je(j);
            }
            var A, P = Et(x);
            return P && xn(), C = ae.follow(function() {
              var j;
              (A = x.call(T, T)) && (P ? (j = Gt.bind(null, null), A.then(j, j)) : typeof A.next == "function" && typeof A.throw == "function" && (A = ho(A)));
            }, C), (A && typeof A.then == "function" ? ae.resolve(A).then(function(j) {
              return T.active ? j : Je(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : C.then(function() {
              return A;
            })).then(function(j) {
              return w && T._resolve(), T._completion.then(function() {
                return j;
              });
            }).catch(function(j) {
              return T._reject(j), Je(j);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, b, "lock") : de.trans ? ln(de.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Ze.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new q.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ze);
      function Ze(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Ze.dependencies;
        this._options = n = s({ addons: Ze.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: D, dbReadyPromise: null, cancelOpen: D, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new ae(function(g) {
          _.dbReadyResolve = g;
        }), _.openCanceller = new ae(function(g, E) {
          _.cancelOpen = E;
        }), this._state = _, this.name = e, this.on = Sn(this, "populate", "blocked", "versionchange", "close", { ready: [ge, D] }), this.once = function(g, E) {
          var w = function() {
            for (var x = [], C = 0; C < arguments.length; C++) x[C] = arguments[C];
            o.on(g).unsubscribe(w), E.apply(o, x);
          };
          return o.on(g, w);
        }, this.on.ready.subscribe = $(this.on.ready.subscribe, function(g) {
          return function(E, w) {
            Ze.vip(function() {
              var x, C = o._state;
              C.openComplete ? (C.dbOpenError || ae.resolve().then(E), w && g(E)) : C.onReadyBeingFired ? (C.onReadyBeingFired.push(E), w && g(E)) : (g(E), x = o, w || g(function T() {
                x.on.ready.unsubscribe(E), x.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (l = this, Pn(Fa.prototype, function(A, T) {
          this.db = l;
          var w = Yo, x = null;
          if (T) try {
            w = T();
          } catch (P) {
            x = P;
          }
          var C = A._ctx, T = C.table, A = T.hook.reading.fire;
          this._ctx = { table: T, index: C.index, isPrimKey: !C.index || T.schema.primKey.keyPath && C.index === T.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: C.or, valueMapper: A !== U ? A : null };
        })), this.Table = (f = this, Pn(Jo.prototype, function(g, E, w) {
          this.db = f, this._tx = w, this.name = g, this.schema = E, this.hook = f._allTables[g] ? f._allTables[g].hook : Sn(null, { creating: [ye, D], reading: [le, U], updating: [xe, D], deleting: [he, D] });
        })), this.Transaction = (h = this, Pn(Ba.prototype, function(g, E, w, x, C) {
          var T = this;
          g !== "readonly" && E.forEach(function(A) {
            A = (A = w[A]) === null || A === void 0 ? void 0 : A.yProps, A && (E = E.concat(A.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = E, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Sn(this, "complete", "error", "abort"), this.parent = C || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ae(function(A, P) {
            T._resolve = A, T._reject = P;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(A) {
            var P = T.active;
            return T.active = !1, T.on.error.fire(A), T.parent ? T.parent._reject(A) : P && T.idbtrans && T.idbtrans.abort(), Je(A);
          });
        })), this.Version = (v = this, Pn(Ha.prototype, function(g) {
          this.db = v, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Pn(oi.prototype, function(g, E, w) {
          if (this.db = b, this._ctx = { table: g, index: E === ":id" ? null : E, or: w }, this._cmp = this._ascending = Ee, this._descending = function(x, C) {
            return Ee(C, x);
          }, this._max = function(x, C) {
            return 0 < Ee(x, C) ? x : C;
          }, this._min = function(x, C) {
            return Ee(x, C) < 0 ? x : C;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Fn(n.IDBKeyRange), this._createTransaction = function(g, E, w, x) {
          return new o.Transaction(g, E, w, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(g) {
          o.on("blocked").fire(g), Nn.filter(function(E) {
            return E.name === o.name && E !== o && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(g);
          });
        }, this.use(Qa), this.use(ts), this.use(Ja), this.use(Xa), this.use(za);
        var R = new Proxy(this, { get: function(g, E, w) {
          if (E === "_vip") return !0;
          if (E === "table") return function(C) {
            return wr(o.table(C), R);
          };
          var x = Reflect.get(g, E, w);
          return x instanceof Jo ? wr(x, R) : E === "tables" ? x.map(function(C) {
            return wr(C, R);
          }) : E === "_createTransaction" ? function() {
            return wr(x.apply(this, arguments), R);
          } : x;
        } });
        this.vip = R, a.forEach(function(g) {
          return g(o);
        });
      }
      var _r, Rt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ns = (go.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, go.prototype[Rt] = function() {
        return this;
      }, go);
      function go(e) {
        this._subscribe = e;
      }
      try {
        _r = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        _r = { indexedDB: null, IDBKeyRange: null };
      }
      function bi(e) {
        var n, o = !1, a = new ns(function(l) {
          var f = Et(e), h, v = !1, b = {}, _ = {}, R = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), g && Xt.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(R);
          var g = !1, E = function() {
            return Hr(x);
          }, w = function(C) {
            yr(b, C), uo(_, b) && E();
          }, x = function() {
            var C, T, A;
            !v && _r.indexedDB && (b = {}, C = {}, h && h.abort(), h = new AbortController(), A = function(P) {
              var j = wn();
              try {
                f && xn();
                var F = Wt(e, P);
                return F = f ? F.finally(Gt) : F;
              } finally {
                j && _n();
              }
            }(T = { subscr: C, signal: h.signal, requery: E, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              o = !0, n = P, v || T.signal.aborted || (b = {}, function(j) {
                for (var F in j) if (L(j, F)) return;
                return 1;
              }(_ = C) || g || (Xt(jn, w), g = !0), Hr(function() {
                return !v && l.next && l.next(P);
              }));
            }, function(P) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || v || Hr(function() {
                v || l.error && l.error(P);
              });
            }));
          };
          return setTimeout(E, 0), R;
        });
        return a.hasValue = function() {
          return o;
        }, a.getValue = function() {
          return n;
        }, a;
      }
      var dn = $t;
      function bo(e) {
        var n = zt;
        try {
          zt = !0, Xt.storagemutated.fire(e), po(e, !0);
        } finally {
          zt = n;
        }
      }
      k(dn, s(s({}, nt), { delete: function(e) {
        return new dn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new dn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = dn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (ao(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== ir;
            });
          }) : io(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return Je(new q.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          m(this, e);
        };
      }, ignoreTransaction: function(e) {
        return de.trans ? ln(de.transless, e) : e();
      }, vip: so, async: function(e) {
        return function() {
          try {
            var n = ho(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ae.resolve(n);
          } catch (o) {
            return Je(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = ho(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : ae.resolve(a);
        } catch (l) {
          return Je(l);
        }
      }, currentTransaction: { get: function() {
        return de.trans || null;
      } }, waitFor: function(e, n) {
        return n = ae.resolve(typeof e == "function" ? dn.ignoreTransaction(e) : e).timeout(n || 6e4), de.trans ? de.trans.waitFor(n) : n;
      }, Promise: ae, debug: { get: function() {
        return me;
      }, set: function(e) {
        ke(e);
      } }, derive: G, extend: m, props: k, override: $, Events: Sn, on: Xt, liveQuery: bi, extendObservabilitySet: yr, getByKeyPath: H, setByKeyPath: re, delByKeyPath: function(e, n) {
        typeof n == "string" ? re(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          re(e, o, void 0);
        });
      }, shallowClone: ue, deepClone: He, getObjectDiff: mo, cmp: Ee, asap: X, minKey: -1 / 0, addons: [], connections: Nn, errnames: I, dependencies: _r, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), dn.maxKey = Fn(dn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xt(jn, function(e) {
        zt || (e = new CustomEvent(Jr, { detail: e }), zt = !0, dispatchEvent(e), zt = !1);
      }), addEventListener(Jr, function(e) {
        e = e.detail, zt || bo(e);
      }));
      var On, zt = !1, wi = function() {
      };
      return typeof BroadcastChannel < "u" && ((wi = function() {
        (On = new BroadcastChannel(Jr)).onmessage = function(e) {
          return e.data && bo(e.data);
        };
      })(), typeof On.unref == "function" && On.unref(), Xt(jn, function(e) {
        zt || On.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!$t.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), On?.close();
          for (var n = 0, o = Nn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !$t.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), wi(), bo({ all: new st(-1 / 0, [[]]) }));
      })), ae.rejectionMapper = function(e, n) {
        return !e || e instanceof qt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (n = new Q[e.name](n || e.message, e), "stack" in e && ee(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, ke(me), s($t, Object.freeze({ __proto__: null, Dexie: $t, liveQuery: bi, Entity: Xo, cmp: Ee, PropModification: Ln, replacePrefix: function(e, n) {
        return new Ln({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new Ln({ add: e });
      }, remove: function(e) {
        return new Ln({ remove: e });
      }, default: $t, RangeSet: st, mergeRanges: Bn, rangesOverlap: ui }), { default: $t }), $t;
    });
  }(ra)), ra.exports;
}
var fp = cp();
const Ds = /* @__PURE__ */ lp(fp), Xl = Symbol.for("Dexie"), ha = globalThis[Xl] || (globalThis[Xl] = Ds);
if (Ds.semVer !== ha.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ds.semVer} and ${ha.semVer}`);
const {
  liveQuery: dg,
  mergeRanges: pg,
  rangesOverlap: hg,
  RangeSet: mg,
  cmp: vg,
  Entity: yg,
  PropModification: gg,
  replacePrefix: bg,
  add: wg,
  remove: _g,
  DexieYProvider: xg
} = ha;
var dp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function pp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function hp(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var r = t.default;
  if (typeof r == "function") {
    var i = function s() {
      var u = !1;
      try {
        u = this instanceof s;
      } catch {
      }
      return u ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var u = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(i, s, u.get ? u : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), i;
}
var zl = {};
const mp = {}, vp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: mp
}, Symbol.toStringTag, { value: "Module" })), Ql = /* @__PURE__ */ hp(vp);
var Jl;
function yp() {
  return Jl || (Jl = 1, function(t) {
    (function(r) {
      r.parser = function(I, N) {
        return new s(I, N);
      }, r.SAXParser = s, r.SAXStream = O, r.createStream = S, r.MAX_BUFFER_LENGTH = 64 * 1024;
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
      r.EVENTS = [
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
      function s(I, N) {
        if (!(this instanceof s))
          return new s(I, N);
        var q = this;
        d(q), q.q = q.c = "", q.bufferCheckPosition = r.MAX_BUFFER_LENGTH, q.opt = N || {}, q.opt.lowercase = q.opt.lowercase || q.opt.lowercasetags, q.looseCase = q.opt.lowercase ? "toLowerCase" : "toUpperCase", q.tags = [], q.closed = q.closedRoot = q.sawRoot = !1, q.tag = q.error = null, q.strict = !!I, q.noscript = !!(I || q.opt.noscript), q.state = B.BEGIN, q.strictEntities = q.opt.strictEntities, q.ENTITIES = q.strictEntities ? Object.create(r.XML_ENTITIES) : Object.create(r.ENTITIES), q.attribList = [], q.opt.xmlns && (q.ns = Object.create(G)), q.opt.unquotedAttributeValues === void 0 && (q.opt.unquotedAttributeValues = !I), q.trackPosition = q.opt.position !== !1, q.trackPosition && (q.position = q.line = q.column = 0), Oe(q, "onready");
      }
      Object.create || (Object.create = function(I) {
        function N() {
        }
        N.prototype = I;
        var q = new N();
        return q;
      }), Object.keys || (Object.keys = function(I) {
        var N = [];
        for (var q in I) I.hasOwnProperty(q) && N.push(q);
        return N;
      });
      function u(I) {
        for (var N = Math.max(r.MAX_BUFFER_LENGTH, 10), q = 0, Q = 0, nt = i.length; Q < nt; Q++) {
          var D = I[i[Q]].length;
          if (D > N)
            switch (i[Q]) {
              case "textNode":
                He(I);
                break;
              case "cdata":
                Ie(I, "oncdata", I.cdata), I.cdata = "";
                break;
              case "script":
                Ie(I, "onscript", I.script), I.script = "";
                break;
              default:
                Qe(I, "Max buffer length exceeded: " + i[Q]);
            }
          q = Math.max(q, D);
        }
        var U = r.MAX_BUFFER_LENGTH - q;
        I.bufferCheckPosition = U + I.position;
      }
      function d(I) {
        for (var N = 0, q = i.length; N < q; N++)
          I[i[N]] = "";
      }
      function c(I) {
        He(I), I.cdata !== "" && (Ie(I, "oncdata", I.cdata), I.cdata = ""), I.script !== "" && (Ie(I, "onscript", I.script), I.script = "");
      }
      s.prototype = {
        end: function() {
          $e(this);
        },
        write: St,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          c(this);
        }
      };
      var p;
      try {
        p = Ql.Stream;
      } catch {
        p = function() {
        };
      }
      p || (p = function() {
      });
      var m = r.EVENTS.filter(function(I) {
        return I !== "error" && I !== "end";
      });
      function S(I, N) {
        return new O(I, N);
      }
      function O(I, N) {
        if (!(this instanceof O))
          return new O(I, N);
        p.apply(this), this._parser = new s(I, N), this.writable = !0, this.readable = !0;
        var q = this;
        this._parser.onend = function() {
          q.emit("end");
        }, this._parser.onerror = function(Q) {
          q.emit("error", Q), q._parser.error = null;
        }, this._decoder = null, m.forEach(function(Q) {
          Object.defineProperty(q, "on" + Q, {
            get: function() {
              return q._parser["on" + Q];
            },
            set: function(nt) {
              if (!nt)
                return q.removeAllListeners(Q), q._parser["on" + Q] = nt, nt;
              q.on(Q, nt);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      O.prototype = Object.create(p.prototype, {
        constructor: {
          value: O
        }
      }), O.prototype.write = function(I) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(I)) {
          if (!this._decoder) {
            var N = Ql.StringDecoder;
            this._decoder = new N("utf8");
          }
          I = this._decoder.write(I);
        }
        return this._parser.write(I.toString()), this.emit("data", I), !0;
      }, O.prototype.end = function(I) {
        return I && I.length && this.write(I), this._parser.end(), !0;
      }, O.prototype.on = function(I, N) {
        var q = this;
        return !q._parser["on" + I] && m.indexOf(I) !== -1 && (q._parser["on" + I] = function() {
          var Q = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          Q.splice(0, 0, I), q.emit.apply(q, Q);
        }), p.prototype.on.call(q, I, N);
      };
      var L = "[CDATA[", k = "DOCTYPE", J = "http://www.w3.org/XML/1998/namespace", ee = "http://www.w3.org/2000/xmlns/", G = { xml: J, xmlns: ee }, W = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, V = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, M = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, $ = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ne(I) {
        return I === " " || I === `
` || I === "\r" || I === "	";
      }
      function X(I) {
        return I === '"' || I === "'";
      }
      function H(I) {
        return I === ">" || ne(I);
      }
      function re(I, N) {
        return I.test(N);
      }
      function ue(I, N) {
        return !re(I, N);
      }
      var B = 0;
      r.STATE = {
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
      }, r.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, r.ENTITIES = {
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
      }, Object.keys(r.ENTITIES).forEach(function(I) {
        var N = r.ENTITIES[I], q = typeof N == "number" ? String.fromCharCode(N) : N;
        r.ENTITIES[I] = q;
      });
      for (var we in r.STATE)
        r.STATE[r.STATE[we]] = we;
      B = r.STATE;
      function Oe(I, N, q) {
        I[N] && I[N](q);
      }
      function Ie(I, N, q) {
        I.textNode && He(I), Oe(I, N, q);
      }
      function He(I) {
        I.textNode = Ft(I.opt, I.textNode), I.textNode && Oe(I, "ontext", I.textNode), I.textNode = "";
      }
      function Ft(I, N) {
        return I.trim && (N = N.trim()), I.normalize && (N = N.replace(/\s+/g, " ")), N;
      }
      function Qe(I, N) {
        return He(I), I.trackPosition && (N += `
Line: ` + I.line + `
Column: ` + I.column + `
Char: ` + I.c), N = new Error(N), I.error = N, Oe(I, "onerror", N), I;
      }
      function $e(I) {
        return I.sawRoot && !I.closedRoot && Ce(I, "Unclosed root tag"), I.state !== B.BEGIN && I.state !== B.BEGIN_WHITESPACE && I.state !== B.TEXT && Qe(I, "Unexpected end"), He(I), I.c = "", I.closed = !0, Oe(I, "onend"), s.call(I, I.strict, I.opt), I;
      }
      function Ce(I, N) {
        if (typeof I != "object" || !(I instanceof s))
          throw new Error("bad call to strictFail");
        I.strict && Qe(I, N);
      }
      function Le(I) {
        I.strict || (I.tagName = I.tagName[I.looseCase]());
        var N = I.tags[I.tags.length - 1] || I, q = I.tag = { name: I.tagName, attributes: {} };
        I.opt.xmlns && (q.ns = N.ns), I.attribList.length = 0, Ie(I, "onopentagstart", q);
      }
      function ft(I, N) {
        var q = I.indexOf(":"), Q = q < 0 ? ["", I] : I.split(":"), nt = Q[0], D = Q[1];
        return N && I === "xmlns" && (nt = "xmlns", D = ""), { prefix: nt, local: D };
      }
      function vt(I) {
        if (I.strict || (I.attribName = I.attribName[I.looseCase]()), I.attribList.indexOf(I.attribName) !== -1 || I.tag.attributes.hasOwnProperty(I.attribName)) {
          I.attribName = I.attribValue = "";
          return;
        }
        if (I.opt.xmlns) {
          var N = ft(I.attribName, !0), q = N.prefix, Q = N.local;
          if (q === "xmlns")
            if (Q === "xml" && I.attribValue !== J)
              Ce(
                I,
                "xml: prefix must be bound to " + J + `
Actual: ` + I.attribValue
              );
            else if (Q === "xmlns" && I.attribValue !== ee)
              Ce(
                I,
                "xmlns: prefix must be bound to " + ee + `
Actual: ` + I.attribValue
              );
            else {
              var nt = I.tag, D = I.tags[I.tags.length - 1] || I;
              nt.ns === D.ns && (nt.ns = Object.create(D.ns)), nt.ns[Q] = I.attribValue;
            }
          I.attribList.push([I.attribName, I.attribValue]);
        } else
          I.tag.attributes[I.attribName] = I.attribValue, Ie(I, "onattribute", {
            name: I.attribName,
            value: I.attribValue
          });
        I.attribName = I.attribValue = "";
      }
      function Et(I, N) {
        if (I.opt.xmlns) {
          var q = I.tag, Q = ft(I.tagName);
          q.prefix = Q.prefix, q.local = Q.local, q.uri = q.ns[Q.prefix] || "", q.prefix && !q.uri && (Ce(I, "Unbound namespace prefix: " + JSON.stringify(I.tagName)), q.uri = Q.prefix);
          var nt = I.tags[I.tags.length - 1] || I;
          q.ns && nt.ns !== q.ns && Object.keys(q.ns).forEach(function(ke) {
            Ie(I, "onopennamespace", {
              prefix: ke,
              uri: q.ns[ke]
            });
          });
          for (var D = 0, U = I.attribList.length; D < U; D++) {
            var le = I.attribList[D], pe = le[0], ye = le[1], he = ft(pe, !0), xe = he.prefix, Re = he.local, ge = xe === "" ? "" : q.ns[xe] || "", me = {
              name: pe,
              value: ye,
              prefix: xe,
              local: Re,
              uri: ge
            };
            xe && xe !== "xmlns" && !ge && (Ce(I, "Unbound namespace prefix: " + JSON.stringify(xe)), me.uri = xe), I.tag.attributes[pe] = me, Ie(I, "onattribute", me);
          }
          I.attribList.length = 0;
        }
        I.tag.isSelfClosing = !!N, I.sawRoot = !0, I.tags.push(I.tag), Ie(I, "onopentag", I.tag), N || (!I.noscript && I.tagName.toLowerCase() === "script" ? I.state = B.SCRIPT : I.state = B.TEXT, I.tag = null, I.tagName = ""), I.attribName = I.attribValue = "", I.attribList.length = 0;
      }
      function Kt(I) {
        if (!I.tagName) {
          Ce(I, "Weird empty close tag."), I.textNode += "</>", I.state = B.TEXT;
          return;
        }
        if (I.script) {
          if (I.tagName !== "script") {
            I.script += "</" + I.tagName + ">", I.tagName = "", I.state = B.SCRIPT;
            return;
          }
          Ie(I, "onscript", I.script), I.script = "";
        }
        var N = I.tags.length, q = I.tagName;
        I.strict || (q = q[I.looseCase]());
        for (var Q = q; N--; ) {
          var nt = I.tags[N];
          if (nt.name !== Q)
            Ce(I, "Unexpected close tag");
          else
            break;
        }
        if (N < 0) {
          Ce(I, "Unmatched closing tag: " + I.tagName), I.textNode += "</" + I.tagName + ">", I.state = B.TEXT;
          return;
        }
        I.tagName = q;
        for (var D = I.tags.length; D-- > N; ) {
          var U = I.tag = I.tags.pop();
          I.tagName = I.tag.name, Ie(I, "onclosetag", I.tagName);
          var le = {};
          for (var pe in U.ns)
            le[pe] = U.ns[pe];
          var ye = I.tags[I.tags.length - 1] || I;
          I.opt.xmlns && U.ns !== ye.ns && Object.keys(U.ns).forEach(function(he) {
            var xe = U.ns[he];
            Ie(I, "onclosenamespace", { prefix: he, uri: xe });
          });
        }
        N === 0 && (I.closedRoot = !0), I.tagName = I.attribValue = I.attribName = "", I.attribList.length = 0, I.state = B.TEXT;
      }
      function qt(I) {
        var N = I.entity, q = N.toLowerCase(), Q, nt = "";
        return I.ENTITIES[N] ? I.ENTITIES[N] : I.ENTITIES[q] ? I.ENTITIES[q] : (N = q, N.charAt(0) === "#" && (N.charAt(1) === "x" ? (N = N.slice(2), Q = parseInt(N, 16), nt = Q.toString(16)) : (N = N.slice(1), Q = parseInt(N, 10), nt = Q.toString(10))), N = N.replace(/^0+/, ""), isNaN(Q) || nt.toLowerCase() !== N ? (Ce(I, "Invalid character entity"), "&" + I.entity + ";") : String.fromCodePoint(Q));
      }
      function Un(I, N) {
        N === "<" ? (I.state = B.OPEN_WAKA, I.startTagPosition = I.position) : ne(N) || (Ce(I, "Non-whitespace before first tag."), I.textNode = N, I.state = B.TEXT);
      }
      function gn(I, N) {
        var q = "";
        return N < I.length && (q = I.charAt(N)), q;
      }
      function St(I) {
        var N = this;
        if (this.error)
          throw this.error;
        if (N.closed)
          return Qe(
            N,
            "Cannot write after close. Assign an onready handler."
          );
        if (I === null)
          return $e(N);
        typeof I == "object" && (I = I.toString());
        for (var q = 0, Q = ""; Q = gn(I, q++), N.c = Q, !!Q; )
          switch (N.trackPosition && (N.position++, Q === `
` ? (N.line++, N.column = 0) : N.column++), N.state) {
            case B.BEGIN:
              if (N.state = B.BEGIN_WHITESPACE, Q === "\uFEFF")
                continue;
              Un(N, Q);
              continue;
            case B.BEGIN_WHITESPACE:
              Un(N, Q);
              continue;
            case B.TEXT:
              if (N.sawRoot && !N.closedRoot) {
                for (var nt = q - 1; Q && Q !== "<" && Q !== "&"; )
                  Q = gn(I, q++), Q && N.trackPosition && (N.position++, Q === `
` ? (N.line++, N.column = 0) : N.column++);
                N.textNode += I.substring(nt, q - 1);
              }
              Q === "<" && !(N.sawRoot && N.closedRoot && !N.strict) ? (N.state = B.OPEN_WAKA, N.startTagPosition = N.position) : (!ne(Q) && (!N.sawRoot || N.closedRoot) && Ce(N, "Text data outside of root node."), Q === "&" ? N.state = B.TEXT_ENTITY : N.textNode += Q);
              continue;
            case B.SCRIPT:
              Q === "<" ? N.state = B.SCRIPT_ENDING : N.script += Q;
              continue;
            case B.SCRIPT_ENDING:
              Q === "/" ? N.state = B.CLOSE_TAG : (N.script += "<" + Q, N.state = B.SCRIPT);
              continue;
            case B.OPEN_WAKA:
              if (Q === "!")
                N.state = B.SGML_DECL, N.sgmlDecl = "";
              else if (!ne(Q)) if (re(W, Q))
                N.state = B.OPEN_TAG, N.tagName = Q;
              else if (Q === "/")
                N.state = B.CLOSE_TAG, N.tagName = "";
              else if (Q === "?")
                N.state = B.PROC_INST, N.procInstName = N.procInstBody = "";
              else {
                if (Ce(N, "Unencoded <"), N.startTagPosition + 1 < N.position) {
                  var D = N.position - N.startTagPosition;
                  Q = new Array(D).join(" ") + Q;
                }
                N.textNode += "<" + Q, N.state = B.TEXT;
              }
              continue;
            case B.SGML_DECL:
              if (N.sgmlDecl + Q === "--") {
                N.state = B.COMMENT, N.comment = "", N.sgmlDecl = "";
                continue;
              }
              N.doctype && N.doctype !== !0 && N.sgmlDecl ? (N.state = B.DOCTYPE_DTD, N.doctype += "<!" + N.sgmlDecl + Q, N.sgmlDecl = "") : (N.sgmlDecl + Q).toUpperCase() === L ? (Ie(N, "onopencdata"), N.state = B.CDATA, N.sgmlDecl = "", N.cdata = "") : (N.sgmlDecl + Q).toUpperCase() === k ? (N.state = B.DOCTYPE, (N.doctype || N.sawRoot) && Ce(
                N,
                "Inappropriately located doctype declaration"
              ), N.doctype = "", N.sgmlDecl = "") : Q === ">" ? (Ie(N, "onsgmldeclaration", N.sgmlDecl), N.sgmlDecl = "", N.state = B.TEXT) : (X(Q) && (N.state = B.SGML_DECL_QUOTED), N.sgmlDecl += Q);
              continue;
            case B.SGML_DECL_QUOTED:
              Q === N.q && (N.state = B.SGML_DECL, N.q = ""), N.sgmlDecl += Q;
              continue;
            case B.DOCTYPE:
              Q === ">" ? (N.state = B.TEXT, Ie(N, "ondoctype", N.doctype), N.doctype = !0) : (N.doctype += Q, Q === "[" ? N.state = B.DOCTYPE_DTD : X(Q) && (N.state = B.DOCTYPE_QUOTED, N.q = Q));
              continue;
            case B.DOCTYPE_QUOTED:
              N.doctype += Q, Q === N.q && (N.q = "", N.state = B.DOCTYPE);
              continue;
            case B.DOCTYPE_DTD:
              Q === "]" ? (N.doctype += Q, N.state = B.DOCTYPE) : Q === "<" ? (N.state = B.OPEN_WAKA, N.startTagPosition = N.position) : X(Q) ? (N.doctype += Q, N.state = B.DOCTYPE_DTD_QUOTED, N.q = Q) : N.doctype += Q;
              continue;
            case B.DOCTYPE_DTD_QUOTED:
              N.doctype += Q, Q === N.q && (N.state = B.DOCTYPE_DTD, N.q = "");
              continue;
            case B.COMMENT:
              Q === "-" ? N.state = B.COMMENT_ENDING : N.comment += Q;
              continue;
            case B.COMMENT_ENDING:
              Q === "-" ? (N.state = B.COMMENT_ENDED, N.comment = Ft(N.opt, N.comment), N.comment && Ie(N, "oncomment", N.comment), N.comment = "") : (N.comment += "-" + Q, N.state = B.COMMENT);
              continue;
            case B.COMMENT_ENDED:
              Q !== ">" ? (Ce(N, "Malformed comment"), N.comment += "--" + Q, N.state = B.COMMENT) : N.doctype && N.doctype !== !0 ? N.state = B.DOCTYPE_DTD : N.state = B.TEXT;
              continue;
            case B.CDATA:
              Q === "]" ? N.state = B.CDATA_ENDING : N.cdata += Q;
              continue;
            case B.CDATA_ENDING:
              Q === "]" ? N.state = B.CDATA_ENDING_2 : (N.cdata += "]" + Q, N.state = B.CDATA);
              continue;
            case B.CDATA_ENDING_2:
              Q === ">" ? (N.cdata && Ie(N, "oncdata", N.cdata), Ie(N, "onclosecdata"), N.cdata = "", N.state = B.TEXT) : Q === "]" ? N.cdata += "]" : (N.cdata += "]]" + Q, N.state = B.CDATA);
              continue;
            case B.PROC_INST:
              Q === "?" ? N.state = B.PROC_INST_ENDING : ne(Q) ? N.state = B.PROC_INST_BODY : N.procInstName += Q;
              continue;
            case B.PROC_INST_BODY:
              if (!N.procInstBody && ne(Q))
                continue;
              Q === "?" ? N.state = B.PROC_INST_ENDING : N.procInstBody += Q;
              continue;
            case B.PROC_INST_ENDING:
              Q === ">" ? (Ie(N, "onprocessinginstruction", {
                name: N.procInstName,
                body: N.procInstBody
              }), N.procInstName = N.procInstBody = "", N.state = B.TEXT) : (N.procInstBody += "?" + Q, N.state = B.PROC_INST_BODY);
              continue;
            case B.OPEN_TAG:
              re(V, Q) ? N.tagName += Q : (Le(N), Q === ">" ? Et(N) : Q === "/" ? N.state = B.OPEN_TAG_SLASH : (ne(Q) || Ce(N, "Invalid character in tag name"), N.state = B.ATTRIB));
              continue;
            case B.OPEN_TAG_SLASH:
              Q === ">" ? (Et(N, !0), Kt(N)) : (Ce(N, "Forward-slash in opening tag not followed by >"), N.state = B.ATTRIB);
              continue;
            case B.ATTRIB:
              if (ne(Q))
                continue;
              Q === ">" ? Et(N) : Q === "/" ? N.state = B.OPEN_TAG_SLASH : re(W, Q) ? (N.attribName = Q, N.attribValue = "", N.state = B.ATTRIB_NAME) : Ce(N, "Invalid attribute name");
              continue;
            case B.ATTRIB_NAME:
              Q === "=" ? N.state = B.ATTRIB_VALUE : Q === ">" ? (Ce(N, "Attribute without value"), N.attribValue = N.attribName, vt(N), Et(N)) : ne(Q) ? N.state = B.ATTRIB_NAME_SAW_WHITE : re(V, Q) ? N.attribName += Q : Ce(N, "Invalid attribute name");
              continue;
            case B.ATTRIB_NAME_SAW_WHITE:
              if (Q === "=")
                N.state = B.ATTRIB_VALUE;
              else {
                if (ne(Q))
                  continue;
                Ce(N, "Attribute without value"), N.tag.attributes[N.attribName] = "", N.attribValue = "", Ie(N, "onattribute", {
                  name: N.attribName,
                  value: ""
                }), N.attribName = "", Q === ">" ? Et(N) : re(W, Q) ? (N.attribName = Q, N.state = B.ATTRIB_NAME) : (Ce(N, "Invalid attribute name"), N.state = B.ATTRIB);
              }
              continue;
            case B.ATTRIB_VALUE:
              if (ne(Q))
                continue;
              X(Q) ? (N.q = Q, N.state = B.ATTRIB_VALUE_QUOTED) : (N.opt.unquotedAttributeValues || Qe(N, "Unquoted attribute value"), N.state = B.ATTRIB_VALUE_UNQUOTED, N.attribValue = Q);
              continue;
            case B.ATTRIB_VALUE_QUOTED:
              if (Q !== N.q) {
                Q === "&" ? N.state = B.ATTRIB_VALUE_ENTITY_Q : N.attribValue += Q;
                continue;
              }
              vt(N), N.q = "", N.state = B.ATTRIB_VALUE_CLOSED;
              continue;
            case B.ATTRIB_VALUE_CLOSED:
              ne(Q) ? N.state = B.ATTRIB : Q === ">" ? Et(N) : Q === "/" ? N.state = B.OPEN_TAG_SLASH : re(W, Q) ? (Ce(N, "No whitespace between attributes"), N.attribName = Q, N.attribValue = "", N.state = B.ATTRIB_NAME) : Ce(N, "Invalid attribute name");
              continue;
            case B.ATTRIB_VALUE_UNQUOTED:
              if (!H(Q)) {
                Q === "&" ? N.state = B.ATTRIB_VALUE_ENTITY_U : N.attribValue += Q;
                continue;
              }
              vt(N), Q === ">" ? Et(N) : N.state = B.ATTRIB;
              continue;
            case B.CLOSE_TAG:
              if (N.tagName)
                Q === ">" ? Kt(N) : re(V, Q) ? N.tagName += Q : N.script ? (N.script += "</" + N.tagName, N.tagName = "", N.state = B.SCRIPT) : (ne(Q) || Ce(N, "Invalid tagname in closing tag"), N.state = B.CLOSE_TAG_SAW_WHITE);
              else {
                if (ne(Q))
                  continue;
                ue(W, Q) ? N.script ? (N.script += "</" + Q, N.state = B.SCRIPT) : Ce(N, "Invalid tagname in closing tag.") : N.tagName = Q;
              }
              continue;
            case B.CLOSE_TAG_SAW_WHITE:
              if (ne(Q))
                continue;
              Q === ">" ? Kt(N) : Ce(N, "Invalid characters in closing tag");
              continue;
            case B.TEXT_ENTITY:
            case B.ATTRIB_VALUE_ENTITY_Q:
            case B.ATTRIB_VALUE_ENTITY_U:
              var U, le;
              switch (N.state) {
                case B.TEXT_ENTITY:
                  U = B.TEXT, le = "textNode";
                  break;
                case B.ATTRIB_VALUE_ENTITY_Q:
                  U = B.ATTRIB_VALUE_QUOTED, le = "attribValue";
                  break;
                case B.ATTRIB_VALUE_ENTITY_U:
                  U = B.ATTRIB_VALUE_UNQUOTED, le = "attribValue";
                  break;
              }
              if (Q === ";") {
                var pe = qt(N);
                N.opt.unparsedEntities && !Object.values(r.XML_ENTITIES).includes(pe) ? (N.entity = "", N.state = U, N.write(pe)) : (N[le] += pe, N.entity = "", N.state = U);
              } else re(N.entity.length ? $ : M, Q) ? N.entity += Q : (Ce(N, "Invalid character in entity name"), N[le] += "&" + N.entity + Q, N.entity = "", N.state = U);
              continue;
            default:
              throw new Error(N, "Unknown state: " + N.state);
          }
        return N.position >= N.bufferCheckPosition && u(N), N;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var I = String.fromCharCode, N = Math.floor, q = function() {
          var Q = 16384, nt = [], D, U, le = -1, pe = arguments.length;
          if (!pe)
            return "";
          for (var ye = ""; ++le < pe; ) {
            var he = Number(arguments[le]);
            if (!isFinite(he) || // `NaN`, `+Infinity`, or `-Infinity`
            he < 0 || // not a valid Unicode code point
            he > 1114111 || // not a valid Unicode code point
            N(he) !== he)
              throw RangeError("Invalid code point: " + he);
            he <= 65535 ? nt.push(he) : (he -= 65536, D = (he >> 10) + 55296, U = he % 1024 + 56320, nt.push(D, U)), (le + 1 === pe || nt.length > Q) && (ye += I.apply(null, nt), nt.length = 0);
          }
          return ye;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: q,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = q;
      }();
    })(t);
  }(zl)), zl;
}
yp();
const je = "sclElements", xt = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
var Is = { exports: {} }, gp = Is.exports, Zl;
function bp() {
  return Zl || (Zl = 1, function(t, r) {
    (function(i, s) {
      t.exports = s();
    })(gp, function() {
      var i = function(e, n) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
          o.__proto__ = a;
        } || function(o, a) {
          for (var l in a) Object.prototype.hasOwnProperty.call(a, l) && (o[l] = a[l]);
        })(e, n);
      }, s = function() {
        return (s = Object.assign || function(e) {
          for (var n, o = 1, a = arguments.length; o < a; o++) for (var l in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, l) && (e[l] = n[l]);
          return e;
        }).apply(this, arguments);
      };
      function u(e, n, o) {
        for (var a, l = 0, f = n.length; l < f; l++) !a && l in n || ((a = a || Array.prototype.slice.call(n, 0, l))[l] = n[l]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : dp, c = Object.keys, p = Array.isArray;
      function m(e, n) {
        return typeof n != "object" || c(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var S = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function L(e, n) {
        return O.call(e, n);
      }
      function k(e, n) {
        typeof n == "function" && (n = n(S(e))), (typeof Reflect > "u" ? c : Reflect.ownKeys)(n).forEach(function(o) {
          ee(e, o, n[o]);
        });
      }
      var J = Object.defineProperty;
      function ee(e, n, o, a) {
        J(e, n, m(o && L(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function G(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), ee(e.prototype, "constructor", e), { extend: k.bind(null, e.prototype) };
        } };
      }
      var W = Object.getOwnPropertyDescriptor, V = [].slice;
      function M(e, n, o) {
        return V.call(e, n, o);
      }
      function $(e, n) {
        return n(e);
      }
      function ne(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function X(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function H(e, n) {
        if (typeof n == "string" && L(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, l = n.length; a < l; ++a) {
            var f = H(e, n[a]);
            o.push(f);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : H(v, n.substr(h + 1));
        }
      }
      function re(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ne(typeof o != "string" && "length" in o);
          for (var a = 0, l = n.length; a < l; ++a) re(e, n[a], o[a]);
        } else {
          var f, h, v = n.indexOf(".");
          v !== -1 ? (f = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? p(e) && !isNaN(parseInt(f)) ? e.splice(f, 1) : delete e[f] : e[f] = o : re(v = !(v = e[f]) || !L(e, f) ? e[f] = {} : v, h, o)) : o === void 0 ? p(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function ue(e) {
        var n, o = {};
        for (n in e) L(e, n) && (o[n] = e[n]);
        return o;
      }
      var B = [].concat;
      function we(e) {
        return B.apply([], e);
      }
      var Ve = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(we([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), Oe = new Set(Ve.map(function(e) {
        return d[e];
      })), Ie = null;
      function He(e) {
        return Ie = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = Ie.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], Ie.set(o, a);
            for (var l = 0, f = o.length; l < f; ++l) a.push(n(o[l]));
          } else if (Oe.has(o.constructor)) a = o;
          else {
            var h, v = S(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), Ie.set(o, a), o) L(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), Ie = null, e;
      }
      var Ft = {}.toString;
      function Qe(e) {
        return Ft.call(e).slice(8, -1);
      }
      var $e = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ce = typeof $e == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[$e]) && n.apply(e);
      } : function() {
        return null;
      };
      function Le(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var ft = {};
      function vt(e) {
        var n, o, a, l;
        if (arguments.length === 1) {
          if (p(e)) return e.slice();
          if (this === ft && typeof e == "string") return [e];
          if (l = Ce(e)) {
            for (o = []; !(a = l.next()).done; ) o.push(a.value);
            return o;
          }
          if (e == null) return [e];
          if (typeof (n = e.length) != "number") return [e];
          for (o = new Array(n); n--; ) o[n] = e[n];
          return o;
        }
        for (n = arguments.length, o = new Array(n); n--; ) o[n] = arguments[n];
        return o;
      }
      var Et = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Me = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Rt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Me), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function qt(e, n) {
        this.name = e, this.message = n;
      }
      function Un(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, a, l) {
          return l.indexOf(o) === a;
        }).join(`
`);
      }
      function gn(e, n, o, a) {
        this.failures = n, this.failedKeys = a, this.successCount = o, this.message = Un(e, n);
      }
      function St(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Un(e, this.failures);
      }
      G(qt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), G(gn).from(qt), G(St).from(qt);
      var I = Rt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), N = qt, q = Rt.reduce(function(e, n) {
        var o = n + "Error";
        function a(l, f) {
          this.name = o, l ? typeof l == "string" ? (this.message = "".concat(l).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = Kt[n] || o, this.inner = null);
        }
        return G(a).from(N), e[n] = a, e;
      }, {});
      q.Syntax = SyntaxError, q.Type = TypeError, q.Range = RangeError;
      var Q = Me.reduce(function(e, n) {
        return e[n + "Error"] = q[n], e;
      }, {}), nt = Rt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = q[n]), e;
      }, {});
      function D() {
      }
      function U(e) {
        return e;
      }
      function le(e, n) {
        return e == null || e === U ? n : function(o) {
          return n(e(o));
        };
      }
      function pe(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function ye(e, n) {
        return e === D ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? pe(a, this.onsuccess) : a), l && (this.onerror = this.onerror ? pe(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function he(e, n) {
        return e === D ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? pe(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? pe(a, this.onerror) : a);
        };
      }
      function xe(e, n) {
        return e === D ? n : function(o) {
          var a = e.apply(this, arguments);
          m(o, a);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? pe(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? pe(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : m(a, o);
        };
      }
      function Re(e, n) {
        return e === D ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ge(e, n) {
        return e === D ? n : function() {
          var o = e.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var a = this, l = arguments.length, f = new Array(l); l--; ) f[l] = arguments[l];
            return o.then(function() {
              return n.apply(a, f);
            });
          }
          return n.apply(this, arguments);
        };
      }
      nt.ModifyError = gn, nt.DexieError = qt, nt.BulkError = St;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ke(e) {
        me = e;
      }
      var Te = {}, Fe = 100, Ve = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, S(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, S(n), e];
      }(), Me = Ve[0], Rt = Ve[1], Ve = Ve[2], Rt = Rt && Rt.then, et = Me && Me.constructor, ot = !!Ve, bt = function(e, n) {
        bn.push([e, n]), kt && (queueMicrotask(Pa), kt = !1);
      }, Dt = !0, kt = !0, wt = [], an = [], Vn = U, dt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: D, pgp: !1, env: {}, finalize: D }, de = dt, bn = [], sn = 0, Zn = [];
      function ae(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = de;
        if (typeof e != "function") {
          if (e !== Te) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Vr(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, l) {
          try {
            l(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                f && typeof f.then == "function" ? o(a, function(v, b) {
                  f instanceof ae ? f._then(v, b) : f.then(v, b);
                }) : (a._state = !0, a._value = f, Vo(a)), h && _n();
              }
            }, Vr.bind(null, a));
          } catch (f) {
            Vr(a, f);
          }
        }(this, e);
      }
      var Ur = { get: function() {
        var e = de, n = rr;
        function o(a, l) {
          var f = this, h = !e.global && (e !== de || n !== rr), v = h && !Gt(), b = new ae(function(_, R) {
            Wr(f, new Uo(Go(a, e, h, v), Go(l, e, h, v), _, R, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = Te, o;
      }, set: function(e) {
        ee(this, "then", e && e.prototype === Te ? Ur : { get: function() {
          return e;
        }, set: Ur.set });
      } };
      function Uo(e, n, o, a, l) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = l;
      }
      function Vr(e, n) {
        var o, a;
        an.push(n), e._state === null && (o = e._lib && wn(), n = Vn(n), e._state = !1, e._value = n, a = e, wt.some(function(l) {
          return l._value === a._value;
        }) || wt.push(a), Vo(e), o && _n());
      }
      function Vo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Wr(e, n[o]);
        var l = e._PSD;
        --l.ref || l.finalize(), sn === 0 && (++sn, bt(function() {
          --sn == 0 && Gr();
        }, []));
      }
      function Wr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++sn, bt(Sa, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Sa(e, n, o) {
        try {
          var a, l = n._value;
          !n._state && an.length && (an = []), a = me && n._consoleTask ? n._consoleTask.run(function() {
            return e(l);
          }) : e(l), n._state || an.indexOf(l) !== -1 || function(f) {
            for (var h = wt.length; h; ) if (wt[--h]._value === f._value) return wt.splice(h, 1);
          }(n), o.resolve(a);
        } catch (f) {
          o.reject(f);
        } finally {
          --sn == 0 && Gr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Pa() {
        ln(dt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = Dt;
        return kt = Dt = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        kt = Dt = !0;
      }
      function Gr() {
        var e = wt;
        wt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Zn.slice(0), o = n.length; o; ) n[--o]();
      }
      function er(e) {
        return new ae(Te, !1, e);
      }
      function We(e, n) {
        var o = de;
        return function() {
          var a = wn(), l = de;
          try {
            return Ht(o, !0), e.apply(this, arguments);
          } catch (f) {
            n && n(f);
          } finally {
            Ht(l, !1), a && _n();
          }
        };
      }
      k(ae.prototype, { then: Ur, _then: function(e, n) {
        Wr(this, new Uo(null, null, e, n, de));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? o : er)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? o : er)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ae.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ae.resolve(e()).then(function() {
            return er(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ae(function(a, l) {
          var f = setTimeout(function() {
            return l(new q.Timeout(n));
          }, e);
          o.then(a, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && ee(ae.prototype, Symbol.toStringTag, "Dexie.Promise"), dt.env = Wo(), k(ae, { all: function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(l, f) {
            return ae.resolve(l).then(function(h) {
              e[f] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ae ? e : e && typeof e.then == "function" ? new ae(function(n, o) {
          e.then(n, o);
        }) : new ae(Te, !0, e);
      }, reject: er, race: function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n, o) {
          e.map(function(a) {
            return ae.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return de;
      }, set: function(e) {
        return de = e;
      } }, totalEchoes: { get: function() {
        return rr;
      } }, newPSD: Wt, usePSD: ln, scheduler: { get: function() {
        return bt;
      }, set: function(e) {
        bt = e;
      } }, rejectionMapper: { get: function() {
        return Vn;
      }, set: function(e) {
        Vn = e;
      } }, follow: function(e, n) {
        return new ae(function(o, a) {
          return Wt(function(l, f) {
            var h = de;
            h.unhandleds = [], h.onunhandled = f, h.finalize = pe(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? l() : f(b.unhandleds[0]);
              }, Zn.push(function _() {
                v(), Zn.splice(Zn.indexOf(_), 1);
              }), ++sn, bt(function() {
                --sn == 0 && Gr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), et && (et.allSettled && ee(ae, "allSettled", function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(l, f) {
            return ae.resolve(l).then(function(h) {
              return a[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), et.any && typeof AggregateError < "u" && ee(ae, "any", function() {
        var e = vt.apply(null, arguments).map(or);
        return new ae(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, l = new Array(a);
          e.forEach(function(f, h) {
            return ae.resolve(f).then(function(v) {
              return n(v);
            }, function(v) {
              l[h] = v, --a || o(new AggregateError(l));
            });
          });
        });
      }), et.withResolvers && (ae.withResolvers = et.withResolvers));
      var it = { awaits: 0, echoes: 0, id: 0 }, La = 0, tr = [], nr = 0, rr = 0, ka = 0;
      function Wt(e, n, o, a) {
        var l = de, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++ka, dt.env, f.env = ot ? { Promise: ae, PromiseProp: { value: ae, configurable: !0, writable: !0 }, all: ae.all, race: ae.race, allSettled: ae.allSettled, any: ae.any, resolve: ae.resolve, reject: ae.reject } : {}, n && m(f, n), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = ln(f, e, o, a), f.ref === 0 && f.finalize(), a;
      }
      function xn() {
        return it.id || (it.id = ++La), ++it.awaits, it.echoes += Fe, it.id;
      }
      function Gt() {
        return !!it.awaits && (--it.awaits == 0 && (it.id = 0), it.echoes = it.awaits * Fe, !0);
      }
      function or(e) {
        return it.echoes && e && e.constructor === et ? (xn(), e.then(function(n) {
          return Gt(), n;
        }, function(n) {
          return Gt(), Je(n);
        })) : e;
      }
      function ja() {
        var e = tr[tr.length - 1];
        tr.pop(), Ht(e, !1);
      }
      function Ht(e, n) {
        var o, a = de;
        (n ? !it.echoes || nr++ && e === de : !nr || --nr && e === de) || queueMicrotask(n ? (function(l) {
          ++rr, it.echoes && --it.echoes != 0 || (it.echoes = it.awaits = it.id = 0), tr.push(de), Ht(l, !0);
        }).bind(null, e) : ja), e !== de && (de = e, a === dt && (dt.env = Wo()), ot && (o = dt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Wo() {
        var e = d.Promise;
        return ot ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ln(e, n, o, a, l) {
        var f = de;
        try {
          return Ht(e, !0), n(o, a, l);
        } finally {
          Ht(f, !1);
        }
      }
      function Go(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var l = de;
          o && xn(), Ht(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ht(l, !1), a && queueMicrotask(Gt);
          }
        };
      }
      function Hr(e) {
        Promise === et && it.echoes === 0 ? nr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Rt).indexOf("[native code]") === -1 && (xn = Gt = D);
      var Je = ae.reject, un = "￿", Mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ho = "String expected.", Nn = [], ir = "__dbnames", Yr = "readonly", Xr = "readwrite";
      function cn(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Yo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ar(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = He(n))[e], n;
        };
      }
      function Xo() {
        throw q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ee(e, n) {
        try {
          var o = zo(e), a = zo(n);
          if (o !== a) return o === "Array" ? 1 : a === "Array" ? -1 : o === "binary" ? 1 : a === "binary" ? -1 : o === "string" ? 1 : a === "string" ? -1 : o === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(l, f) {
                for (var h = l.length, v = f.length, b = h < v ? h : v, _ = 0; _ < b; ++_) if (l[_] !== f[_]) return l[_] < f[_] ? -1 : 1;
                return h === v ? 0 : h < v ? -1 : 1;
              }(Qo(e), Qo(n));
            case "Array":
              return function(l, f) {
                for (var h = l.length, v = f.length, b = h < v ? h : v, _ = 0; _ < b; ++_) {
                  var R = Ee(l[_], f[_]);
                  if (R !== 0) return R;
                }
                return h === v ? 0 : h < v ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function zo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Qe(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Qo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function sr(e, n, o) {
        var a = e.schema.yProps;
        return a ? (n && 0 < o.numFailures && (n = n.filter(function(l, f) {
          return !o.failures[f];
        })), Promise.all(a.map(function(l) {
          return l = l.updatesTable, n ? e.db.table(l).where("k").anyOf(n).delete() : e.db.table(l).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var Jo = (qe.prototype._trans = function(e, n, o) {
        var a = this._tx || de.trans, l = this.name, f = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, R, g) {
          if (!g.schema[l]) throw new q.NotFound("Table " + l + " not part of transaction");
          return n(g.idbtrans, g);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === de.trans ? a._promise(e, h, o) : Wt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: de.transless || de }) : function _(R, g, E, w) {
            if (R.idbdb && (R._state.openComplete || de.letThrough || R._vip)) {
              var x = R._createTransaction(g, E, R._dbSchema);
              try {
                x.create(), R._state.PR1398_maxLoop = 3;
              } catch (C) {
                return C.name === I.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                  return _(R, g, E, w);
                })) : Je(C);
              }
              return x._promise(g, function(C, T) {
                return Wt(function() {
                  return de.trans = x, w(C, T, x);
                });
              }).then(function(C) {
                if (g === "readwrite") try {
                  x.idbtrans.commit();
                } catch {
                }
                return g === "readonly" ? C : x._completion.then(function() {
                  return C;
                });
              });
            }
            if (R._state.openComplete) return Je(new q.DatabaseClosed(R._state.dbOpenError));
            if (!R._state.isBeingOpened) {
              if (!R._state.autoOpen) return Je(new q.DatabaseClosed());
              R.open().catch(D);
            }
            return R._state.dbReadyPromise.then(function() {
              return _(R, g, E, w);
            });
          }(this.db, e, [this.name], h);
          return f && (b._consoleTask = f, b = b.catch(function(_) {
            return console.trace(_), Je(_);
          })), b;
        } finally {
          v && _n();
        }
      }, qe.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? Je(new q.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return o.core.get({ trans: a, key: e }).then(function(l) {
            return o.hook.reading.fire(l);
          });
        }).then(n);
      }, qe.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (p(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var n = c(e);
        if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(v) {
          if (v.compound && n.every(function(_) {
            return 0 <= v.keyPath.indexOf(_);
          })) {
            for (var b = 0; b < n.length; ++b) if (n.indexOf(v.keyPath[b]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(v, b) {
          return v.keyPath.length - b.keyPath.length;
        })[0];
        if (o && this.db._maxKey !== un) {
          var f = o.keyPath.slice(0, n.length);
          return this.where(f).equals(f.map(function(b) {
            return e[b];
          }));
        }
        !o && me && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var a = this.schema.idxByName;
        function l(v, b) {
          return Ee(v, b) === 0;
        }
        var h = n.reduce(function(g, b) {
          var _ = g[0], R = g[1], g = a[b], E = e[b];
          return [_ || g, _ || !g ? cn(R, g && g.multi ? function(w) {
            return w = H(w, b), p(w) && w.some(function(x) {
              return l(E, x);
            });
          } : function(w) {
            return l(E, H(w, b));
          }) : R];
        }, [null, null]), f = h[0], h = h[1];
        return f ? this.where(f.name).equals(e[f.keyPath]).filter(h) : o ? this.filter(h) : this.where(n).equals("");
      }, qe.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, qe.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, qe.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, qe.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, qe.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, qe.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, qe.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, qe.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, p(e) ? "[".concat(e.join("+"), "]") : e));
      }, qe.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, qe.prototype.mapToClass = function(e) {
        var n, o = this.db, a = this.name;
        function l() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Xo && (function(b, _) {
          if (typeof _ != "function" && _ !== null) throw new TypeError("Class extends value " + String(_) + " is not a constructor or null");
          function R() {
            this.constructor = b;
          }
          i(b, _), b.prototype = _ === null ? Object.create(_) : (R.prototype = _.prototype, new R());
        }(l, n = e), Object.defineProperty(l.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), l.prototype.table = function() {
          return a;
        }, e = l);
        for (var f = /* @__PURE__ */ new Set(), h = e.prototype; h; h = S(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
          return f.add(b);
        });
        function v(b) {
          if (!b) return b;
          var _, R = Object.create(e.prototype);
          for (_ in b) if (!f.has(_)) try {
            R[_] = b[_];
          } catch {
          }
          return R;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = v, this.hook("reading", v), e;
      }, qe.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          m(this, e);
        });
      }, qe.prototype.add = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ar(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "add", keys: n != null ? [n] : null, values: [h] });
        }).then(function(v) {
          return v.numFailures ? ae.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            re(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(e, n) {
        return typeof e != "object" || p(e) ? this.where(":id").equals(e).modify(n) : (e = H(e, this.schema.primKey.keyPath), e === void 0 ? Je(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, qe.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ar(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? ae.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            re(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(a) {
            return sr(n, [e], a);
          }).then(function(a) {
            return a.numFailures ? ae.reject(a.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Yo }).then(function(o) {
            return sr(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ae.reject(n.failures[0]) : void 0;
        });
      }, qe.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(o) {
          return n.core.getMany({ keys: e, trans: o }).then(function(a) {
            return a.map(function(l) {
              return n.hook.reading.fire(l);
            });
          });
        });
      }, qe.prototype.bulkAdd = function(e, n, o) {
        var a = this, l = Array.isArray(n) ? n : void 0, f = (o = o || (l ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && l) throw new q.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(ar(_)) : e;
          return a.core.mutate({ trans: h, type: "add", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new St("".concat(a.name, ".bulkAdd(): ").concat(g, " of ").concat(b, " operations failed"), x);
          });
        });
      }, qe.prototype.bulkPut = function(e, n, o) {
        var a = this, l = Array.isArray(n) ? n : void 0, f = (o = o || (l ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && l) throw new q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(ar(_)) : e;
          return a.core.mutate({ trans: h, type: "put", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new St("".concat(a.name, ".bulkPut(): ").concat(g, " of ").concat(b, " operations failed"), x);
          });
        });
      }, qe.prototype.bulkUpdate = function(e) {
        var n = this, o = this.core, a = e.map(function(h) {
          return h.key;
        }), l = e.map(function(h) {
          return h.changes;
        }), f = [];
        return this._trans("readwrite", function(h) {
          return o.getMany({ trans: h, keys: a, cache: "clone" }).then(function(v) {
            var b = [], _ = [];
            e.forEach(function(g, E) {
              var w = g.key, x = g.changes, C = v[E];
              if (C) {
                for (var T = 0, A = Object.keys(x); T < A.length; T++) {
                  var P = A[T], j = x[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (Ee(j, w) !== 0) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
                  } else re(C, P, j);
                }
                f.push(E), b.push(w), _.push(C);
              }
            });
            var R = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: l } }).then(function(g) {
              var E = g.numFailures, w = g.failures;
              if (E === 0) return R;
              for (var x = 0, C = Object.keys(w); x < C.length; x++) {
                var T, A = C[x], P = f[Number(A)];
                P != null && (T = w[A], delete w[A], w[P] = T);
              }
              throw new St("".concat(n.name, ".bulkUpdate(): ").concat(E, " of ").concat(R, " operations failed"), w);
            });
          });
        });
      }, qe.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e }).then(function(l) {
            return sr(n, e, l);
          });
        }).then(function(h) {
          var l = h.numFailures, f = h.lastResult, h = h.failures;
          if (l === 0) return f;
          throw new St("".concat(n.name, ".bulkDelete(): ").concat(l, " of ").concat(o, " operations failed"), h);
        });
      }, qe);
      function qe() {
      }
      function Sn(e) {
        function n(h, v) {
          if (v) {
            for (var b = arguments.length, _ = new Array(b - 1); --b; ) _[b - 1] = arguments[b];
            return o[h].subscribe.apply(null, _), e;
          }
          if (typeof h == "string") return o[h];
        }
        var o = {};
        n.addEventType = f;
        for (var a = 1, l = arguments.length; a < l; ++a) f(arguments[a]);
        return n;
        function f(h, v, b) {
          if (typeof h != "object") {
            var _;
            v = v || Re;
            var R = { subscribers: [], fire: b = b || D, subscribe: function(g) {
              R.subscribers.indexOf(g) === -1 && (R.subscribers.push(g), R.fire = v(R.fire, g));
            }, unsubscribe: function(g) {
              R.subscribers = R.subscribers.filter(function(E) {
                return E !== g;
              }), R.fire = R.subscribers.reduce(v, b);
            } };
            return o[h] = n[h] = R;
          }
          c(_ = h).forEach(function(g) {
            var E = _[g];
            if (p(E)) f(g, _[g][0], _[g][1]);
            else {
              if (E !== "asap") throw new q.InvalidArgument("Invalid event config");
              var w = f(g, U, function() {
                for (var x = arguments.length, C = new Array(x); x--; ) C[x] = arguments[x];
                w.subscribers.forEach(function(T) {
                  X(function() {
                    T.apply(null, C);
                  });
                });
              });
            }
          });
        }
      }
      function Pn(e, n) {
        return G(n).from({ prototype: e }), n;
      }
      function Rn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function zr(e, n) {
        e.filter = cn(e.filter, n);
      }
      function Qr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return cn(a(), n());
        } : n, e.justLimit = o && !a;
      }
      function lr(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new q.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Zo(e, n, o) {
        var a = lr(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function ur(e, n, o, a) {
        var l = e.replayFilter ? cn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var f = {}, h = function(v, b, _) {
            var R, g;
            l && !l(b, _, function(E) {
              return b.stop(E);
            }, function(E) {
              return b.fail(E);
            }) || ((g = "" + (R = b.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(R)), L(f, g) || (f[g] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), ei(Zo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return ei(Zo(e, a, o), cn(e.algorithm, l), n, !e.keysOnly && e.valueMapper);
      }
      function ei(e, n, o, a) {
        var l = We(a ? function(f, h, v) {
          return o(a(f), h, v);
        } : o);
        return e.then(function(f) {
          if (f) return f.start(function() {
            var h = function() {
              return f.continue();
            };
            n && !n(f, function(v) {
              return h = v;
            }, function(v) {
              f.stop(v), h = D;
            }, function(v) {
              f.fail(v), h = D;
            }) || l(f.value, f, function(v) {
              return h = v;
            }), h();
          });
        });
      }
      var Ln = (ti.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (p(o)) return u(u([], p(e) ? e : [], !0), o).sort();
          if (typeof o == "number") return (Number(e) || 0) + o;
          if (typeof o == "bigint") try {
            return BigInt(e) + o;
          } catch {
            return BigInt(0) + o;
          }
          throw new TypeError("Invalid term ".concat(o));
        }
        if (n.remove !== void 0) {
          var a = n.remove;
          if (p(a)) return p(e) ? e.filter(function(l) {
            return !a.includes(l);
          }).sort() : [];
          if (typeof a == "number") return Number(e) - a;
          if (typeof a == "bigint") try {
            return BigInt(e) - a;
          } catch {
            return BigInt(0) - a;
          }
          throw new TypeError("Invalid subtrahend ".concat(a));
        }
        return o = (o = n.replacePrefix) === null || o === void 0 ? void 0 : o[0], o && typeof e == "string" && e.startsWith(o) ? n.replacePrefix[1] + e.substring(o.length) : e;
      }, ti);
      function ti(e) {
        this["@@propmod"] = e;
      }
      var Fa = (Pe.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Je.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Pe.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, Je.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Pe.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = cn(n.algorithm, e);
      }, Pe.prototype._iterate = function(e, n) {
        return ur(this._ctx, e, n, this._ctx.table.core);
      }, Pe.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && m(o, e), n._ctx = o, n;
      }, Pe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Pe.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return ur(n, e, o, n.table.core);
        });
      }, Pe.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx, l = a.table.core;
          if (Rn(a, !0)) return l.count({ trans: o, query: { index: lr(a, l.schema), range: a.range } }).then(function(h) {
            return Math.min(h, a.limit);
          });
          var f = 0;
          return ur(a, function() {
            return ++f, !1;
          }, o, l).then(function() {
            return f;
          });
        }).then(e);
      }, Pe.prototype.sortBy = function(e, n) {
        var o = e.split(".").reverse(), a = o[0], l = o.length - 1;
        function f(b, _) {
          return _ ? f(b[o[_]], _ - 1) : b[a];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function v(b, _) {
          return Ee(f(b, l), f(_, l)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(v);
        }).then(n);
      }, Pe.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx;
          if (a.dir === "next" && Rn(a, !0) && 0 < a.limit) {
            var l = a.valueMapper, f = lr(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: f, range: a.range } }).then(function(v) {
              return v = v.result, l ? v.map(l) : v;
            });
          }
          var h = [];
          return ur(a, function(v) {
            return h.push(v);
          }, o, a.table.core).then(function() {
            return h;
          });
        }, e);
      }, Pe.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, Rn(n) ? Qr(n, function() {
          var o = e;
          return function(a, l) {
            return o === 0 || (o === 1 ? --o : l(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : Qr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Pe.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, a, l) {
            return --n <= 0 && a(l), 0 <= n;
          };
        }, !0), this;
      }, Pe.prototype.until = function(e, n) {
        return zr(this._ctx, function(o, a, l) {
          return !e(o.value) || (a(l), n);
        }), this;
      }, Pe.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Pe.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Pe.prototype.filter = function(e) {
        var n;
        return zr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = cn(n.isMatch, e), this;
      }, Pe.prototype.and = function(e) {
        return this.filter(e);
      }, Pe.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Pe.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Pe.prototype.desc = function() {
        return this.reverse();
      }, Pe.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.key, a);
        });
      }, Pe.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Pe.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.primaryKey, a);
        });
      }, Pe.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, l) {
          o.push(l.key);
        }).then(function() {
          return o;
        }).then(e);
      }, Pe.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && Rn(n, !0) && 0 < n.limit) return this._read(function(a) {
          var l = lr(n, n.table.core.schema);
          return n.table.core.query({ trans: a, values: !1, limit: n.limit, query: { index: l, range: n.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, l) {
          o.push(l.primaryKey);
        }).then(function() {
          return o;
        }).then(e);
      }, Pe.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Pe.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Pe.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Pe.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return zr(this._ctx, function(l) {
          var a = l.primaryKey.toString(), l = L(n, a);
          return n[a] = !0, !l;
        }), this;
      }, Pe.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var l, f, h;
          h = typeof e == "function" ? e : (l = c(e), f = l.length, function(A) {
            for (var P = !1, j = 0; j < f; ++j) {
              var F = l[j], Y = e[F], te = H(A, F);
              Y instanceof Ln ? (re(A, F, Y.execute(te)), P = !0) : te !== Y && (re(A, F, Y), P = !0);
            }
            return P;
          });
          var v = o.table.core, g = v.schema.primaryKey, b = g.outbound, _ = g.extractKey, R = 200, g = n.db._options.modifyChunkSize;
          g && (R = typeof g == "object" ? g[v.name] || g["*"] || 200 : g);
          function E(A, F) {
            var j = F.failures, F = F.numFailures;
            x += A - F;
            for (var Y = 0, te = c(j); Y < te.length; Y++) {
              var z = te[Y];
              w.push(j[z]);
            }
          }
          var w = [], x = 0, C = [], T = e === ni;
          return n.clone().primaryKeys().then(function(A) {
            function P(F) {
              var Y = Math.min(R, A.length - F), te = A.slice(F, F + Y);
              return (T ? Promise.resolve([]) : v.getMany({ trans: a, keys: te, cache: "immutable" })).then(function(z) {
                var Z = [], ie = [], oe = b ? [] : null, se = T ? te : [];
                if (!T) for (var Ne = 0; Ne < Y; ++Ne) {
                  var Ae = z[Ne], _e = { value: He(Ae), primKey: A[F + Ne] };
                  h.call(_e, _e.value, _e) !== !1 && (_e.value == null ? se.push(A[F + Ne]) : b || Ee(_(Ae), _(_e.value)) === 0 ? (ie.push(_e.value), b && oe.push(A[F + Ne])) : (se.push(A[F + Ne]), Z.push(_e.value)));
                }
                return Promise.resolve(0 < Z.length && v.mutate({ trans: a, type: "add", values: Z }).then(function(Ye) {
                  for (var be in Ye.failures) se.splice(parseInt(be), 1);
                  E(Z.length, Ye);
                })).then(function() {
                  return (0 < ie.length || j && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: oe, values: ie, criteria: j, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < F }).then(function(Ye) {
                    return E(ie.length, Ye);
                  });
                }).then(function() {
                  return (0 < se.length || j && T) && v.mutate({ trans: a, type: "delete", keys: se, criteria: j, isAdditionalChunk: 0 < F }).then(function(Ye) {
                    return sr(o.table, se, Ye);
                  }).then(function(Ye) {
                    return E(se.length, Ye);
                  });
                }).then(function() {
                  return A.length > F + Y && P(F + R);
                });
              });
            }
            var j = Rn(o) && o.limit === 1 / 0 && (typeof e != "function" || T) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < w.length) throw new gn("Error modifying one or more objects", w, x, C);
              return A.length;
            });
          });
        });
      }, Pe.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !Rn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ni) : this._write(function(o) {
          var a = e.table.core.schema.primaryKey, l = n;
          return e.table.core.count({ trans: o, query: { index: a, range: l } }).then(function(f) {
            return e.table.core.mutate({ trans: o, type: "deleteRange", range: l }).then(function(b) {
              var v = b.failures, b = b.numFailures;
              if (b) throw new gn("Could not delete some values", Object.keys(v).map(function(_) {
                return v[_];
              }), f - b);
              return f - b;
            });
          });
        });
      }, Pe);
      function Pe() {
      }
      var ni = function(e, n) {
        return n.value = null;
      };
      function Ma(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function $a(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function gt(e, n, o) {
        return e = e instanceof oi ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Tn(e) {
        return new e.Collection(e, function() {
          return ri("");
        }).limit(0);
      }
      function cr(e, n, o, a) {
        var l, f, h, v, b, _, R, g = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return gt(e, Ho);
        function E(x) {
          l = x === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = x === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = x === "next" ? Ma : $a;
          var C = o.map(function(T) {
            return { lower: f(T), upper: l(T) };
          }).sort(function(T, A) {
            return h(T.lower, A.lower);
          });
          v = C.map(function(T) {
            return T.upper;
          }), b = C.map(function(T) {
            return T.lower;
          }), R = (_ = x) === "next" ? "" : a;
        }
        E("next"), e = new e.Collection(e, function() {
          return Yt(v[0], b[g - 1] + a);
        }), e._ondirectionchange = function(x) {
          E(x);
        };
        var w = 0;
        return e._addAlgorithm(function(x, C, T) {
          var A = x.key;
          if (typeof A != "string") return !1;
          var P = f(A);
          if (n(P, b, w)) return !0;
          for (var j = null, F = w; F < g; ++F) {
            var Y = function(te, z, Z, ie, oe, se) {
              for (var Ne = Math.min(te.length, ie.length), Ae = -1, _e = 0; _e < Ne; ++_e) {
                var Ye = z[_e];
                if (Ye !== ie[_e]) return oe(te[_e], Z[_e]) < 0 ? te.substr(0, _e) + Z[_e] + Z.substr(_e + 1) : oe(te[_e], ie[_e]) < 0 ? te.substr(0, _e) + ie[_e] + Z.substr(_e + 1) : 0 <= Ae ? te.substr(0, Ae) + z[Ae] + Z.substr(Ae + 1) : null;
                oe(te[_e], Ye) < 0 && (Ae = _e);
              }
              return Ne < ie.length && se === "next" ? te + Z.substr(te.length) : Ne < te.length && se === "prev" ? te.substr(0, Z.length) : Ae < 0 ? null : te.substr(0, Ae) + ie[Ae] + Z.substr(Ae + 1);
            }(A, P, v[F], b[F], h, _);
            Y === null && j === null ? w = F + 1 : (j === null || 0 < h(j, Y)) && (j = Y);
          }
          return C(j !== null ? function() {
            x.continue(j + R);
          } : T), !1;
        }), e;
      }
      function Yt(e, n, o, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: a };
      }
      function ri(e) {
        return { type: 1, lower: e, upper: e };
      }
      var oi = (Object.defineProperty(at.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), at.prototype.between = function(e, n, o, a) {
        o = o !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || a) && (!o || !a) ? Tn(this) : new this.Collection(this, function() {
            return Yt(e, n, !o, !a);
          });
        } catch {
          return gt(this, Mt);
        }
      }, at.prototype.equals = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return ri(e);
        });
      }, at.prototype.above = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(e, void 0, !0);
        });
      }, at.prototype.aboveOrEqual = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(e, void 0, !1);
        });
      }, at.prototype.below = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(void 0, e, !1, !0);
        });
      }, at.prototype.belowOrEqual = function(e) {
        return e == null ? gt(this, Mt) : new this.Collection(this, function() {
          return Yt(void 0, e);
        });
      }, at.prototype.startsWith = function(e) {
        return typeof e != "string" ? gt(this, Ho) : this.between(e, e + un, !0, !0);
      }, at.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : cr(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], un);
      }, at.prototype.equalsIgnoreCase = function(e) {
        return cr(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, at.prototype.anyOfIgnoreCase = function() {
        var e = vt.apply(ft, arguments);
        return e.length === 0 ? Tn(this) : cr(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, at.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = vt.apply(ft, arguments);
        return e.length === 0 ? Tn(this) : cr(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, un);
      }, at.prototype.anyOf = function() {
        var e = this, n = vt.apply(ft, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return gt(this, Mt);
        }
        if (n.length === 0) return Tn(this);
        var a = new this.Collection(this, function() {
          return Yt(n[0], n[n.length - 1]);
        });
        a._ondirectionchange = function(f) {
          o = f === "next" ? e._ascending : e._descending, n.sort(o);
        };
        var l = 0;
        return a._addAlgorithm(function(f, h, v) {
          for (var b = f.key; 0 < o(b, n[l]); ) if (++l === n.length) return h(v), !1;
          return o(b, n[l]) === 0 || (h(function() {
            f.continue(n[l]);
          }), !1);
        }), a;
      }, at.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, at.prototype.noneOf = function() {
        var e = vt.apply(ft, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return gt(this, Mt);
        }
        var n = e.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, at.prototype.inAnyRange = function(A, n) {
        var o = this, a = this._cmp, l = this._ascending, f = this._descending, h = this._min, v = this._max;
        if (A.length === 0) return Tn(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return gt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, R, g = l;
        function E(P, j) {
          return g(P[0], j[0]);
        }
        try {
          (R = A.reduce(function(P, j) {
            for (var F = 0, Y = P.length; F < Y; ++F) {
              var te = P[F];
              if (a(j[0], te[1]) < 0 && 0 < a(j[1], te[0])) {
                te[0] = h(te[0], j[0]), te[1] = v(te[1], j[1]);
                break;
              }
            }
            return F === Y && P.push(j), P;
          }, [])).sort(E);
        } catch {
          return gt(this, Mt);
        }
        var w = 0, x = _ ? function(P) {
          return 0 < l(P, R[w][1]);
        } : function(P) {
          return 0 <= l(P, R[w][1]);
        }, C = b ? function(P) {
          return 0 < f(P, R[w][0]);
        } : function(P) {
          return 0 <= f(P, R[w][0]);
        }, T = x, A = new this.Collection(this, function() {
          return Yt(R[0][0], R[R.length - 1][1], !b, !_);
        });
        return A._ondirectionchange = function(P) {
          g = P === "next" ? (T = x, l) : (T = C, f), R.sort(E);
        }, A._addAlgorithm(function(P, j, F) {
          for (var Y, te = P.key; T(te); ) if (++w === R.length) return j(F), !1;
          return !x(Y = te) && !C(Y) || (o._cmp(te, R[w][1]) === 0 || o._cmp(te, R[w][0]) === 0 || j(function() {
            g === l ? P.continue(R[w][0]) : P.continue(R[w][1]);
          }), !1);
        }), A;
      }, at.prototype.startsWithAnyOf = function() {
        var e = vt.apply(ft, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Tn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + un];
        })) : gt(this, "startsWithAnyOf() only works with strings");
      }, at);
      function at() {
      }
      function Pt(e) {
        return We(function(n) {
          return kn(n), e(n.target.error), !1;
        });
      }
      function kn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var jn = "storagemutated", Jr = "x-storagemutated-1", Xt = Sn(null, jn), Ba = (Lt.prototype._lock = function() {
        return ne(!de.global), ++this._reculock, this._reculock !== 1 || de.global || (de.lockOwnerFor = this), this;
      }, Lt.prototype._unlock = function() {
        if (ne(!de.global), --this._reculock == 0) for (de.global || (de.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ln(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Lt.prototype._locked = function() {
        return this._reculock && de.lockOwnerFor !== this;
      }, Lt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ne(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new q.DatabaseClosed(a);
          case "MissingAPIError":
            throw new q.MissingAPI(a.message, a);
          default:
            throw new q.OpenFailed(a);
        }
        if (!this.active) throw new q.TransactionInactive();
        return ne(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = We(function(l) {
          kn(l), n._reject(e.error);
        }), e.onabort = We(function(l) {
          kn(l), n.active && n._reject(new q.Abort(e.error)), n.active = !1, n.on("abort").fire(l);
        }), e.oncomplete = We(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Xt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Lt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Je(new q.ReadOnly("Transaction is readonly"));
        if (!this.active) return Je(new q.TransactionInactive());
        if (this._locked()) return new ae(function(f, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(f, h);
          }, de]);
        });
        if (o) return Wt(function() {
          var f = new ae(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var l = new ae(function(f, h) {
          var v = n(f, h, a);
          v && v.then && v.then(f, h);
        });
        return l._lib = !0, l;
      }, Lt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Lt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = ae.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = f);
        }());
        var l = o._waitingFor;
        return new ae(function(f, h) {
          a.then(function(v) {
            return o._waitingQueue.push(We(f.bind(null, v)));
          }, function(v) {
            return o._waitingQueue.push(We(h.bind(null, v)));
          }).finally(function() {
            o._waitingFor === l && (o._waitingFor = null);
          });
        });
      }, Lt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new q.Abort()));
      }, Lt.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (L(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new q.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, Lt);
      function Lt() {
      }
      function Zr(e, n, o, a, l, f, h, v) {
        return { name: e, keyPath: n, unique: o, multi: a, auto: l, compound: f, src: (o && !h ? "&" : "") + (a ? "*" : "") + (l ? "++" : "") + ii(n), type: v };
      }
      function ii(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function eo(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (a = function(l) {
          return [l.name, l];
        }, o.reduce(function(l, f, h) {
          return h = a(f, h), h && (l[h[0]] = h[1]), l;
        }, {})) };
        var a;
      }
      var Fn = function(e) {
        try {
          return e.only([[]]), Fn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Fn = function() {
            return un;
          }, un;
        }
      };
      function to(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return H(o, n);
        } : function(o) {
          return H(o, e);
        };
        var n;
      }
      function ai(e) {
        return [].slice.call(e);
      }
      var Ka = 0;
      function Mn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function qa(e, n, b) {
        function a(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = T.lower, x = T.upper, C = T.lowerOpen, T = T.upperOpen;
          return w === void 0 ? x === void 0 ? null : n.upperBound(x, !!T) : x === void 0 ? n.lowerBound(w, !!C) : n.bound(w, x, !!C, !!T);
        }
        function l(E) {
          var w, x = E.name;
          return { name: x, schema: E, mutate: function(C) {
            var T = C.trans, A = C.type, P = C.keys, j = C.values, F = C.range;
            return new Promise(function(Y, te) {
              Y = We(Y);
              var z = T.objectStore(x), Z = z.keyPath == null, ie = A === "put" || A === "add";
              if (!ie && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var oe, se = (P || j || { length: 1 }).length;
              if (P && j && P.length !== j.length) throw new Error("Given keys array must have same length as given values array.");
              if (se === 0) return Y({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ne(pt) {
                ++Ye, kn(pt);
              }
              var Ae = [], _e = [], Ye = 0;
              if (A === "deleteRange") {
                if (F.type === 4) return Y({ numFailures: Ye, failures: _e, results: [], lastResult: void 0 });
                F.type === 3 ? Ae.push(oe = z.clear()) : Ae.push(oe = z.delete(a(F)));
              } else {
                var Z = ie ? Z ? [j, P] : [j, null] : [P, null], be = Z[0], lt = Z[1];
                if (ie) for (var ut = 0; ut < se; ++ut) Ae.push(oe = lt && lt[ut] !== void 0 ? z[A](be[ut], lt[ut]) : z[A](be[ut])), oe.onerror = Ne;
                else for (ut = 0; ut < se; ++ut) Ae.push(oe = z[A](be[ut])), oe.onerror = Ne;
              }
              function xr(pt) {
                pt = pt.target.result, Ae.forEach(function(pn, wo) {
                  return pn.error != null && (_e[wo] = pn.error);
                }), Y({ numFailures: Ye, failures: _e, results: A === "delete" ? P : Ae.map(function(pn) {
                  return pn.result;
                }), lastResult: pt });
              }
              oe.onerror = function(pt) {
                Ne(pt), xr(pt);
              }, oe.onsuccess = xr;
            });
          }, getMany: function(C) {
            var T = C.trans, A = C.keys;
            return new Promise(function(P, j) {
              P = We(P);
              for (var F, Y = T.objectStore(x), te = A.length, z = new Array(te), Z = 0, ie = 0, oe = function(Ae) {
                Ae = Ae.target, z[Ae._pos] = Ae.result, ++ie === Z && P(z);
              }, se = Pt(j), Ne = 0; Ne < te; ++Ne) A[Ne] != null && ((F = Y.get(A[Ne]))._pos = Ne, F.onsuccess = oe, F.onerror = se, ++Z);
              Z === 0 && P(z);
            });
          }, get: function(C) {
            var T = C.trans, A = C.key;
            return new Promise(function(P, j) {
              P = We(P);
              var F = T.objectStore(x).get(A);
              F.onsuccess = function(Y) {
                return P(Y.target.result);
              }, F.onerror = Pt(j);
            });
          }, query: (w = _, function(C) {
            return new Promise(function(T, A) {
              T = We(T);
              var P, j, F, Z = C.trans, Y = C.values, te = C.limit, oe = C.query, z = te === 1 / 0 ? void 0 : te, ie = oe.index, oe = oe.range, Z = Z.objectStore(x), ie = ie.isPrimaryKey ? Z : Z.index(ie.name), oe = a(oe);
              if (te === 0) return T({ result: [] });
              w ? ((z = Y ? ie.getAll(oe, z) : ie.getAllKeys(oe, z)).onsuccess = function(se) {
                return T({ result: se.target.result });
              }, z.onerror = Pt(A)) : (P = 0, j = !Y && "openKeyCursor" in ie ? ie.openKeyCursor(oe) : ie.openCursor(oe), F = [], j.onsuccess = function(se) {
                var Ne = j.result;
                return Ne ? (F.push(Y ? Ne.value : Ne.primaryKey), ++P === te ? T({ result: F }) : void Ne.continue()) : T({ result: F });
              }, j.onerror = Pt(A));
            });
          }), openCursor: function(C) {
            var T = C.trans, A = C.values, P = C.query, j = C.reverse, F = C.unique;
            return new Promise(function(Y, te) {
              Y = We(Y);
              var ie = P.index, z = P.range, Z = T.objectStore(x), Z = ie.isPrimaryKey ? Z : Z.index(ie.name), ie = j ? F ? "prevunique" : "prev" : F ? "nextunique" : "next", oe = !A && "openKeyCursor" in Z ? Z.openKeyCursor(a(z), ie) : Z.openCursor(a(z), ie);
              oe.onerror = Pt(te), oe.onsuccess = We(function(se) {
                var Ne, Ae, _e, Ye, be = oe.result;
                be ? (be.___id = ++Ka, be.done = !1, Ne = be.continue.bind(be), Ae = (Ae = be.continuePrimaryKey) && Ae.bind(be), _e = be.advance.bind(be), Ye = function() {
                  throw new Error("Cursor not stopped");
                }, be.trans = T, be.stop = be.continue = be.continuePrimaryKey = be.advance = function() {
                  throw new Error("Cursor not started");
                }, be.fail = We(te), be.next = function() {
                  var lt = this, ut = 1;
                  return this.start(function() {
                    return ut-- ? lt.continue() : lt.stop();
                  }).then(function() {
                    return lt;
                  });
                }, be.start = function(lt) {
                  function ut() {
                    if (oe.result) try {
                      lt();
                    } catch (pt) {
                      be.fail(pt);
                    }
                    else be.done = !0, be.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, be.stop();
                  }
                  var xr = new Promise(function(pt, pn) {
                    pt = We(pt), oe.onerror = Pt(pn), be.fail = pn, be.stop = function(wo) {
                      be.stop = be.continue = be.continuePrimaryKey = be.advance = Ye, pt(wo);
                    };
                  });
                  return oe.onsuccess = We(function(pt) {
                    oe.onsuccess = ut, ut();
                  }), be.continue = Ne, be.continuePrimaryKey = Ae, be.advance = _e, ut(), xr;
                }, Y(be)) : Y(null);
              }, te);
            });
          }, count: function(C) {
            var T = C.query, A = C.trans, P = T.index, j = T.range;
            return new Promise(function(F, Y) {
              var te = A.objectStore(x), z = P.isPrimaryKey ? te : te.index(P.name), te = a(j), z = te ? z.count(te) : z.count();
              z.onsuccess = We(function(Z) {
                return F(Z.target.result);
              }), z.onerror = Pt(Y);
            });
          } };
        }
        var f, h, v, R = (h = b, v = ai((f = e).objectStoreNames), { schema: { name: f.name, tables: v.map(function(E) {
          return h.objectStore(E);
        }).map(function(E) {
          var w = E.keyPath, T = E.autoIncrement, x = p(w), C = {}, T = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: T, unique: !0, extractKey: to(w) }, indexes: ai(E.indexNames).map(function(A) {
            return E.index(A);
          }).map(function(F) {
            var P = F.name, j = F.unique, Y = F.multiEntry, F = F.keyPath, Y = { name: P, compound: p(F), keyPath: F, unique: j, multiEntry: Y, extractKey: to(F) };
            return C[Mn(F)] = Y;
          }), getIndexByKeyPath: function(A) {
            return C[Mn(A)];
          } };
          return C[":id"] = T.primaryKey, w != null && (C[Mn(w)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = R.schema, _ = R.hasGetAll, R = b.tables.map(l), g = {};
        return R.forEach(function(E) {
          return g[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!g[E]) throw new Error("Table '".concat(E, "' not found"));
          return g[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: Fn(n), schema: b };
      }
      function Ua(e, n, o, a) {
        var l = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = qa(n, l, a), e.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, a)) };
      }
      function fr(e, a) {
        var o = a.db, a = Ua(e._middlewares, o, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(l) {
          var f = l.name;
          e.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (l.core = e.core.table(f), e[f] instanceof e.Table && (e[f].core = l.core));
        });
      }
      function dr(e, n, o, a) {
        o.forEach(function(l) {
          var f = a[l];
          n.forEach(function(h) {
            var v = function b(_, R) {
              return W(_, R) || (_ = S(_)) && b(_, R);
            }(h, l);
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? ee(h, l, { get: function() {
              return this.table(l);
            }, set: function(b) {
              J(this, l, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[l] = new e.Table(l, f));
          });
        });
      }
      function no(e, n) {
        n.forEach(function(o) {
          for (var a in o) o[a] instanceof e.Table && delete o[a];
        });
      }
      function Va(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function Wa(e, n, o, a) {
        var l = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = eo("$meta", li("")[0], []), e._storeNames.push("$meta"));
        var f = e._createTransaction("readwrite", e._storeNames, l);
        f.create(o), f._completion.catch(a);
        var h = f._reject.bind(f), v = de.transless || de;
        Wt(function() {
          return de.trans = f, de.transless = v, n !== 0 ? (fr(e, o), _ = n, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(R) {
            return R ?? _;
          }) : ae.resolve(_)).then(function(R) {
            return E = R, w = f, x = o, C = [], R = (g = e)._versions, T = g._dbSchema = hr(0, g.idbdb, x), (R = R.filter(function(A) {
              return A._cfg.version >= E;
            })).length !== 0 ? (R.forEach(function(A) {
              C.push(function() {
                var P = T, j = A._cfg.dbschema;
                mr(g, P, x), mr(g, j, x), T = g._dbSchema = j;
                var F = ro(P, j);
                F.add.forEach(function(ie) {
                  oo(x, ie[0], ie[1].primKey, ie[1].indexes);
                }), F.change.forEach(function(ie) {
                  if (ie.recreate) throw new q.Upgrade("Not yet support for changing primary key");
                  var oe = x.objectStore(ie.name);
                  ie.add.forEach(function(se) {
                    return pr(oe, se);
                  }), ie.change.forEach(function(se) {
                    oe.deleteIndex(se.name), pr(oe, se);
                  }), ie.del.forEach(function(se) {
                    return oe.deleteIndex(se);
                  });
                });
                var Y = A._cfg.contentUpgrade;
                if (Y && A._cfg.version > E) {
                  fr(g, x), w._memoizedTables = {};
                  var te = ue(j);
                  F.del.forEach(function(ie) {
                    te[ie] = P[ie];
                  }), no(g, [g.Transaction.prototype]), dr(g, [g.Transaction.prototype], c(te), te), w.schema = te;
                  var z, Z = Et(Y);
                  return Z && xn(), F = ae.follow(function() {
                    var ie;
                    (z = Y(w)) && Z && (ie = Gt.bind(null, null), z.then(ie, ie));
                  }), z && typeof z.then == "function" ? ae.resolve(z) : F.then(function() {
                    return z;
                  });
                }
              }), C.push(function(P) {
                var j, F, Y = A._cfg.dbschema;
                j = Y, F = P, [].slice.call(F.db.objectStoreNames).forEach(function(te) {
                  return j[te] == null && F.db.deleteObjectStore(te);
                }), no(g, [g.Transaction.prototype]), dr(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), w.schema = g._dbSchema;
              }), C.push(function(P) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === A._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(j) {
                  return j !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return C.length ? ae.resolve(C.shift()(w.idbtrans)).then(A) : ae.resolve();
            }().then(function() {
              si(T, x);
            })) : ae.resolve();
            var g, E, w, x, C, T;
          }).catch(h)) : (c(l).forEach(function(R) {
            oo(o, R, l[R].primKey, l[R].indexes);
          }), fr(e, o), void ae.follow(function() {
            return e.on.populate.fire(f);
          }).catch(h));
          var b, _;
        });
      }
      function Ga(e, n) {
        si(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = hr(0, e.idbdb, n);
        mr(e, e._dbSchema, n);
        for (var a = 0, l = ro(o, e._dbSchema).change; a < l.length; a++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = n.objectStore(h.name);
            h.add.forEach(function(b) {
              me && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), pr(v, b);
            });
          }(l[a]);
          if (typeof f == "object") return f.value;
        }
      }
      function ro(e, n) {
        var o, a = { del: [], add: [], change: [] };
        for (o in e) n[o] || a.del.push(o);
        for (o in n) {
          var l = e[o], f = n[o];
          if (l) {
            var h = { name: o, def: f, recreate: !1, del: [], add: [], change: [] };
            if ("" + (l.primKey.keyPath || "") != "" + (f.primKey.keyPath || "") || l.primKey.auto !== f.primKey.auto) h.recreate = !0, a.change.push(h);
            else {
              var v = l.idxByName, b = f.idxByName, _ = void 0;
              for (_ in v) b[_] || h.del.push(_);
              for (_ in b) {
                var R = v[_], g = b[_];
                R ? R.src !== g.src && h.change.push(g) : h.add.push(g);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && a.change.push(h);
            }
          } else a.add.push([o, f]);
        }
        return a;
      }
      function oo(e, n, o, a) {
        var l = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(f) {
          return pr(l, f);
        }), l;
      }
      function si(e, n) {
        c(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (me && console.debug("Dexie: Creating missing table", o), oo(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function pr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function hr(e, n, o) {
        var a = {};
        return M(n.objectStoreNames, 0).forEach(function(l) {
          for (var f = o.objectStore(l), h = Zr(ii(_ = f.keyPath), _ || "", !0, !1, !!f.autoIncrement, _ && typeof _ != "string", !0), v = [], b = 0; b < f.indexNames.length; ++b) {
            var R = f.index(f.indexNames[b]), _ = R.keyPath, R = Zr(R.name, _, !!R.unique, !!R.multiEntry, !1, _ && typeof _ != "string", !1);
            v.push(R);
          }
          a[l] = eo(l, h, v);
        }), a;
      }
      function mr(e, n, o) {
        for (var a = o.db.objectStoreNames, l = 0; l < a.length; ++l) {
          var f = a[l], h = o.objectStore(f);
          e._hasGetAll = "getAll" in h;
          for (var v = 0; v < h.indexNames.length; ++v) {
            var b = h.indexNames[v], _ = h.index(b).keyPath, R = typeof _ == "string" ? _ : "[" + M(_).join("+") + "]";
            !n[f] || (_ = n[f].idxByName[R]) && (_.name = b, delete n[f].idxByName[R], n[f].idxByName[b] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function li(e) {
        return e.split(",").map(function(n, o) {
          var f = n.split(":"), a = (l = f[1]) === null || l === void 0 ? void 0 : l.trim(), l = (n = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return Zr(l, f || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), p(f), o === 0, a);
        });
      }
      var Ha = (Cn.prototype._createTableSchema = eo, Cn.prototype._parseIndexSyntax = li, Cn.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        c(e).forEach(function(a) {
          if (e[a] !== null) {
            var l = o._parseIndexSyntax(e[a]), f = l.shift();
            if (!f) throw new q.Schema("Invalid schema for table " + a + ": " + e[a]);
            if (f.unique = !0, f.multi) throw new q.Schema("Primary key cannot be multiEntry*");
            l.forEach(function(h) {
              if (h.auto) throw new q.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new q.Schema("Index must have a name and cannot be an empty string");
            }), l = o._createTableSchema(a, f, l), n[a] = l;
          }
        });
      }, Cn.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, o) : o;
        var o = n._versions, a = {}, l = {};
        return o.forEach(function(f) {
          m(a, f._cfg.storesSource), l = f._cfg.dbschema = {}, f._parseStoresSpec(a, l);
        }), n._dbSchema = l, no(n, [n._allTables, n, n.Transaction.prototype]), dr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], c(l), l), n._storeNames = c(l), this;
      }, Cn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ge(this._cfg.contentUpgrade || D, e), this;
      }, Cn);
      function Cn() {
      }
      function io(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new $t(ir, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function ao(e) {
        return e && typeof e.databases == "function";
      }
      function so(e) {
        return Wt(function() {
          return de.letThrough = !0, e();
        });
      }
      function lo(e) {
        return !("from" in e);
      }
      var st = function(e, n) {
        if (!this) {
          var o = new st();
          return e && "d" in e && m(o, e), o;
        }
        m(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function $n(e, n, o) {
        var a = Ee(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (lo(e)) return m(e, { from: n, to: o, d: 1 });
          var l = e.l, a = e.r;
          if (Ee(o, e.from) < 0) return l ? $n(l, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ci(e);
          if (0 < Ee(n, e.to)) return a ? $n(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ci(e);
          Ee(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Ee(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, l && !e.l && Bn(e, l), a && o && Bn(e, a);
        }
      }
      function Bn(e, n) {
        lo(n) || function o(a, b) {
          var f = b.from, h = b.to, v = b.l, b = b.r;
          $n(a, f, h), v && o(a, v), b && o(a, b);
        }(e, n);
      }
      function ui(e, n) {
        var o = vr(n), a = o.next();
        if (a.done) return !1;
        for (var l = a.value, f = vr(e), h = f.next(l.from), v = h.value; !a.done && !h.done; ) {
          if (Ee(v.from, l.to) <= 0 && 0 <= Ee(v.to, l.from)) return !0;
          Ee(l.from, v.from) < 0 ? l = (a = o.next(v.from)).value : v = (h = f.next(l.from)).value;
        }
        return !1;
      }
      function vr(e) {
        var n = lo(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Ee(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Ee(o, n.n.to) <= 0) return { value: n.n, done: !1 };
            case 2:
              if (n.n.r) {
                n.s = 3, n = { up: n, n: n.n.r, s: 0 };
                continue;
              }
            case 3:
              n = n.up;
          }
          return { done: !0 };
        } };
      }
      function ci(e) {
        var n, o, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), l = 1 < a ? "r" : a < -1 ? "l" : "";
        l && (n = l == "r" ? "l" : "r", o = s({}, e), a = e[l], e.from = a.from, e.to = a.to, e[l] = a[l], o[l] = a[n], (e[n] = o).d = fi(o)), e.d = fi(e);
      }
      function fi(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function yr(e, n) {
        return c(n).forEach(function(o) {
          e[o] ? Bn(e[o], n[o]) : e[o] = function a(l) {
            var f, h, v = {};
            for (f in l) L(l, f) && (h = l[f], v[f] = !h || typeof h != "object" || Oe.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function uo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && ui(n[o], e[o]);
        });
      }
      k(st.prototype, ((Rt = { add: function(e) {
        return Bn(this, e), this;
      }, addKey: function(e) {
        return $n(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return $n(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = vr(this).next(e).value;
        return n && Ee(n.from, e) <= 0 && 0 <= Ee(n.to, e);
      } })[$e] = function() {
        return vr(this);
      }, Rt));
      var fn = {}, co = {}, fo = !1;
      function gr(e) {
        yr(co, e), fo || (fo = !0, setTimeout(function() {
          fo = !1, po(co, !(co = {}));
        }, 0));
      }
      function po(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, l = Object.values(fn); a < l.length; a++) di(h = l[a], e, o, n);
        else for (var f in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (h = fn["idb://".concat(f, "/").concat(v)]) && di(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function di(e, n, o, a) {
        for (var l = [], f = 0, h = Object.entries(e.queries.query); f < h.length; f++) {
          for (var v = h[f], b = v[0], _ = [], R = 0, g = v[1]; R < g.length; R++) {
            var E = g[R];
            uo(n, E.obsSet) ? E.subscribers.forEach(function(T) {
              return o.add(T);
            }) : a && _.push(E);
          }
          a && l.push([b, _]);
        }
        if (a) for (var w = 0, x = l; w < x.length; w++) {
          var C = x[w], b = C[0], _ = C[1];
          e.queries.query[b] = _;
        }
      }
      function Ya(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? Je(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, l = Math.round(10 * e.verno), f = !1;
        function h() {
          if (n.openCanceller !== a) throw new q.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new ae(function(E, w) {
            if (h(), !o) throw new q.MissingAPI();
            var x = e.name, C = n.autoSchema || !l ? o.open(x) : o.open(x, l);
            if (!C) throw new q.MissingAPI();
            C.onerror = Pt(w), C.onblocked = We(e._fireOnBlocked), C.onupgradeneeded = We(function(T) {
              var A;
              R = C.transaction, n.autoSchema && !e._options.allowEmptyDB ? (C.onerror = kn, R.abort(), C.result.close(), (A = o.deleteDatabase(x)).onsuccess = A.onerror = We(function() {
                w(new q.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (R.onerror = Pt(w), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, g = T < 1, e.idbdb = C.result, f && Ga(e, R), Wa(e, T / 10, R, w));
            }, w), C.onsuccess = We(function() {
              R = null;
              var T, A, P, j, F, Y = e.idbdb = C.result, te = M(Y.objectStoreNames);
              if (0 < te.length) try {
                var z = Y.transaction((j = te).length === 1 ? j[0] : j, "readonly");
                if (n.autoSchema) A = Y, P = z, (T = e).verno = A.version / 10, P = T._dbSchema = hr(0, A, P), T._storeNames = M(A.objectStoreNames, 0), dr(T, [T._allTables], c(P), P);
                else if (mr(e, e._dbSchema, z), ((F = ro(hr(0, (F = e).idbdb, z), F._dbSchema)).add.length || F.change.some(function(Z) {
                  return Z.add.length || Z.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Y.close(), l = Y.version + 1, f = !0, E(v());
                fr(e, z);
              } catch {
              }
              Nn.push(e), Y.onversionchange = We(function(Z) {
                n.vcFired = !0, e.on("versionchange").fire(Z);
              }), Y.onclose = We(function(Z) {
                e.on("close").fire(Z);
              }), g && (F = e._deps, z = x, Y = F.indexedDB, F = F.IDBKeyRange, ao(Y) || z === ir || io(Y, F).put({ name: z }).catch(D)), E();
            }, w);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < l) return l = 0, v();
            }
            return ae.reject(E);
          });
        }
        var b, _ = n.dbReadyResolve, R = null, g = !1;
        return ae.race([a, (typeof navigator > "u" ? ae.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function w() {
            return indexedDB.databases().finally(E);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], ae.resolve(so(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(ge, D);
              return n.onReadyBeingFired = [], ae.resolve(so(function() {
                return w(e.vip);
              })).then(E);
            }
          });
        }).finally(function() {
          n.openCanceller === a && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(E) {
          n.dbOpenError = E;
          try {
            R && R.abort();
          } catch {
          }
          return a === n.openCanceller && e._close(), Je(E);
        }).finally(function() {
          n.openComplete = !0, _();
        }).then(function() {
          var E;
          return g && (E = {}, e.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(x) {
              x.name && (E["idb://".concat(e.name, "/").concat(w.name, "/").concat(x.name)] = new st(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(w.name, "/")] = E["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new st(-1 / 0, [[[]]]);
          }), Xt(jn).fire(E), po(E, !0)), e;
        });
      }
      function ho(e) {
        function n(f) {
          return e.next(f);
        }
        var o = l(n), a = l(function(f) {
          return e.throw(f);
        });
        function l(f) {
          return function(b) {
            var v = f(b), b = v.value;
            return v.done ? b : b && typeof b.then == "function" ? b.then(o, a) : p(b) ? Promise.all(b).then(o, a) : o(b);
          };
        }
        return l(n)();
      }
      function br(e, n, o) {
        for (var a = p(e) ? e.slice() : [e], l = 0; l < o; ++l) a.push(n);
        return a;
      }
      var Xa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, l = {}, f = [];
          function h(g, E, w) {
            var x = Mn(g), C = l[x] = l[x] || [], T = g == null ? 0 : typeof g == "string" ? 1 : g.length, A = 0 < E, A = s(s({}, w), { name: A ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: A, keyTail: E, keyLength: T, extractKey: to(g), unique: !A && w.unique });
            return C.push(A), A.isPrimaryKey || f.push(A), 1 < T && h(T === 2 ? g[0] : g.slice(0, T - 1), E + 1, w), C.sort(function(P, j) {
              return P.keyTail - j.keyTail;
            }), A;
          }
          n = h(a.primaryKey.keyPath, 0, a.primaryKey), l[":id"] = [n];
          for (var v = 0, b = a.indexes; v < b.length; v++) {
            var _ = b[v];
            h(_.keyPath, 0, _);
          }
          function R(g) {
            var E, w = g.query.index;
            return w.isVirtual ? s(s({}, g), { query: { index: w.lowLevelIndex, range: (E = g.query.range, w = w.keyTail, { type: E.type === 1 ? 2 : E.type, lower: br(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, w), lowerOpen: !0, upper: br(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, w), upperOpen: !0 }) } }) : g;
          }
          return s(s({}, o), { schema: s(s({}, a), { primaryKey: n, indexes: f, getIndexByKeyPath: function(g) {
            return (g = l[Mn(g)]) && g[0];
          } }), count: function(g) {
            return o.count(R(g));
          }, query: function(g) {
            return o.query(R(g));
          }, openCursor: function(g) {
            var E = g.query.index, w = E.keyTail, x = E.isVirtual, C = E.keyLength;
            return x ? o.openCursor(R(g)).then(function(A) {
              return A && T(A);
            }) : o.openCursor(g);
            function T(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(br(P, g.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : g.unique ? A.continue(A.key.slice(0, C).concat(g.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, j) {
                A.continuePrimaryKey(br(P, e.MAX_KEY, w), j);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return C === 1 ? P[0] : P.slice(0, C);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function mo(e, n, o, a) {
        return o = o || {}, a = a || "", c(e).forEach(function(l) {
          var f, h, v;
          L(n, l) ? (f = e[l], h = n[l], typeof f == "object" && typeof h == "object" && f && h ? (v = Qe(f)) !== Qe(h) ? o[a + l] = n[l] : v === "Object" ? mo(f, h, o, a + l + ".") : f !== h && (o[a + l] = n[l]) : f !== h && (o[a + l] = n[l])) : o[a + l] = void 0;
        }), c(n).forEach(function(l) {
          L(e, l) || (o[a + l] = n[l]);
        }), o;
      }
      function vo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var za = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = de.trans, h = f.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (l.type) {
              case "add":
                if (b.fire === D) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "put":
                if (b.fire === D && _.fire === D) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "delete":
                if (v.fire === D) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "deleteRange":
                if (v.fire === D) break;
                return f._promise("readwrite", function() {
                  return function g(E, w, x) {
                    return o.query({ trans: E, values: !1, query: { index: a, range: w }, limit: x }).then(function(C) {
                      var T = C.result;
                      return R({ type: "delete", keys: T, trans: E }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : T.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : g(E, s(s({}, w), { lower: T[T.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function R(g) {
              var E, w, x, C = de.trans, T = g.keys || vo(a, g);
              if (!T) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? s(s({}, g), { keys: T }) : s({}, g)).type !== "delete" && (g.values = u([], g.values)), g.keys && (g.keys = u([], g.keys)), E = o, x = T, ((w = g).type === "add" ? Promise.resolve([]) : E.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(A) {
                var P = T.map(function(j, F) {
                  var Y, te, z, Z = A[F], ie = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? v.fire.call(ie, j, Z, C) : g.type === "add" || Z === void 0 ? (Y = b.fire.call(ie, j, g.values[F], C), j == null && Y != null && (g.keys[F] = j = Y, a.outbound || re(g.values[F], a.keyPath, j))) : (Y = mo(Z, g.values[F]), (te = _.fire.call(ie, Y, j, Z, C)) && (z = g.values[F], Object.keys(te).forEach(function(oe) {
                    L(z, oe) ? z[oe] = te[oe] : re(z, oe, te[oe]);
                  }))), ie;
                });
                return o.mutate(g).then(function(j) {
                  for (var F = j.failures, Y = j.results, te = j.numFailures, j = j.lastResult, z = 0; z < T.length; ++z) {
                    var Z = (Y || T)[z], ie = P[z];
                    Z == null ? ie.onerror && ie.onerror(F[z]) : ie.onsuccess && ie.onsuccess(g.type === "put" && A[z] ? g.values[z] : Z);
                  }
                  return { failures: F, results: Y, numFailures: te, lastResult: j };
                }).catch(function(j) {
                  return P.forEach(function(F) {
                    return F.onerror && F.onerror(j);
                  }), Promise.reject(j);
                });
              });
            }
          } });
        } });
      } };
      function pi(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], l = 0, f = 0; l < n.keys.length && f < e.length; ++l) Ee(n.keys[l], e[f]) === 0 && (a.push(o ? He(n.values[l]) : n.values[l]), ++f);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Qa = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return s(s({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var l = pi(a.keys, a.trans._cache, a.cache === "clone");
            return l ? ae.resolve(l) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? He(f) : f }, f;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function hi(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function mi(e, n) {
        switch (e) {
          case "query":
            return n.values && !n.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var Ja = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new st(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(a, l, f) {
          if (de.subscr && l !== "readonly") throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(de.querier));
          return e.transaction(a, l, f);
        }, table: function(a) {
          var l = e.table(a), f = l.schema, h = f.primaryKey, g = f.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && g.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), R = s(s({}, l), { mutate: function(w) {
            function x(oe) {
              return oe = "idb://".concat(n, "/").concat(a, "/").concat(oe), j[oe] || (j[oe] = new st());
            }
            var C, T, A, P = w.trans, j = w.mutatedParts || (w.mutatedParts = {}), F = x(""), Y = x(":dels"), te = w.type, ie = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [vo(h, w).filter(function(oe) {
              return oe;
            }), w.values] : [], z = ie[0], Z = ie[1], ie = w.trans._cache;
            return p(z) ? (F.addKeys(z), (ie = te === "delete" || z.length === Z.length ? pi(z, ie) : null) || Y.addKeys(z), (ie || Z) && (C = x, T = ie, A = Z, f.indexes.forEach(function(oe) {
              var se = C(oe.name || "");
              function Ne(_e) {
                return _e != null ? oe.extractKey(_e) : null;
              }
              function Ae(_e) {
                return oe.multiEntry && p(_e) ? _e.forEach(function(Ye) {
                  return se.addKey(Ye);
                }) : se.addKey(_e);
              }
              (T || A).forEach(function(_e, lt) {
                var be = T && Ne(T[lt]), lt = A && Ne(A[lt]);
                Ee(be, lt) !== 0 && (be != null && Ae(be), lt != null && Ae(lt));
              });
            }))) : z ? (Z = { from: (Z = z.lower) !== null && Z !== void 0 ? Z : e.MIN_KEY, to: (Z = z.upper) !== null && Z !== void 0 ? Z : e.MAX_KEY }, Y.add(Z), F.add(Z)) : (F.add(o), Y.add(o), f.indexes.forEach(function(oe) {
              return x(oe.name).add(o);
            })), l.mutate(w).then(function(oe) {
              return !z || w.type !== "add" && w.type !== "put" || (F.addKeys(oe.results), _ && _.forEach(function(se) {
                for (var Ne = w.values.map(function(be) {
                  return se.extractKey(be);
                }), Ae = se.keyPath.findIndex(function(be) {
                  return be === h.keyPath;
                }), _e = 0, Ye = oe.results.length; _e < Ye; ++_e) Ne[_e][Ae] = oe.results[_e];
                x(se.name).addKeys(Ne);
              })), P.mutatedParts = yr(P.mutatedParts || {}, j), oe;
            });
          } }), g = function(x) {
            var C = x.query, x = C.index, C = C.range;
            return [x, new st((x = C.lower) !== null && x !== void 0 ? x : e.MIN_KEY, (C = C.upper) !== null && C !== void 0 ? C : e.MAX_KEY)];
          }, E = { get: function(w) {
            return [h, new st(w.key)];
          }, getMany: function(w) {
            return [h, new st().addKeys(w.keys)];
          }, count: g, query: g, openCursor: g };
          return c(E).forEach(function(w) {
            R[w] = function(x) {
              var C = de.subscr, T = !!C, A = hi(de, l) && mi(w, x) ? x.obsSet = {} : C;
              if (T) {
                var P = function(Z) {
                  return Z = "idb://".concat(n, "/").concat(a, "/").concat(Z), A[Z] || (A[Z] = new st());
                }, j = P(""), F = P(":dels"), C = E[w](x), T = C[0], C = C[1];
                if ((w === "query" && T.isPrimaryKey && !x.values ? F : P(T.name || "")).add(C), !T.isPrimaryKey) {
                  if (w !== "count") {
                    var Y = w === "query" && b && x.values && l.query(s(s({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(Z) {
                      if (w === "query") {
                        if (b && x.values) return Y.then(function(Ne) {
                          return Ne = Ne.result, j.addKeys(Ne), Z;
                        });
                        var ie = x.values ? Z.result.map(v) : Z.result;
                        (x.values ? j : F).addKeys(ie);
                      } else if (w === "openCursor") {
                        var oe = Z, se = x.values;
                        return oe && Object.create(oe, { key: { get: function() {
                          return F.addKey(oe.primaryKey), oe.key;
                        } }, primaryKey: { get: function() {
                          var Ne = oe.primaryKey;
                          return F.addKey(Ne), Ne;
                        } }, value: { get: function() {
                          return se && j.addKey(oe.primaryKey), oe.value;
                        } } });
                      }
                      return Z;
                    });
                  }
                  F.add(o);
                }
              }
              return l[w].apply(this, arguments);
            };
          }), R;
        } });
      } };
      function vi(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === a ? null : (n = s({}, n), p(n.keys) && (n.keys = n.keys.filter(function(l, f) {
          return !(f in o.failures);
        })), "values" in n && p(n.values) && (n.values = n.values.filter(function(l, f) {
          return !(f in o.failures);
        })), n);
      }
      function yo(e, n) {
        return o = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Ee(o, a.lower) : 0 <= Ee(o, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Ee(e, n.upper) < 0 : Ee(e, n.upper) <= 0));
        var o, a;
      }
      function yi(e, n, E, a, l, f) {
        if (!E || E.length === 0) return e;
        var h = n.query.index, v = h.multiEntry, b = n.query.range, _ = a.schema.primaryKey.extractKey, R = h.extractKey, g = (h.lowLevelIndex || h).extractKey, E = E.reduce(function(w, x) {
          var C = w, T = [];
          if (x.type === "add" || x.type === "put") for (var A = new st(), P = x.values.length - 1; 0 <= P; --P) {
            var j, F = x.values[P], Y = _(F);
            A.hasKey(Y) || (j = R(F), (v && p(j) ? j.some(function(oe) {
              return yo(oe, b);
            }) : yo(j, b)) && (A.addKey(Y), T.push(F)));
          }
          switch (x.type) {
            case "add":
              var te = new st().addKeys(n.values ? w.map(function(se) {
                return _(se);
              }) : w), C = w.concat(n.values ? T.filter(function(se) {
                return se = _(se), !te.hasKey(se) && (te.addKey(se), !0);
              }) : T.map(function(se) {
                return _(se);
              }).filter(function(se) {
                return !te.hasKey(se) && (te.addKey(se), !0);
              }));
              break;
            case "put":
              var z = new st().addKeys(x.values.map(function(se) {
                return _(se);
              }));
              C = w.filter(function(se) {
                return !z.hasKey(n.values ? _(se) : se);
              }).concat(n.values ? T : T.map(function(se) {
                return _(se);
              }));
              break;
            case "delete":
              var Z = new st().addKeys(x.keys);
              C = w.filter(function(se) {
                return !Z.hasKey(n.values ? _(se) : se);
              });
              break;
            case "deleteRange":
              var ie = x.range;
              C = w.filter(function(se) {
                return !yo(_(se), ie);
              });
          }
          return C;
        }, e);
        return E === e ? e : (E.sort(function(w, x) {
          return Ee(g(w), g(x)) || Ee(_(w), _(x));
        }), n.limit && n.limit < 1 / 0 && (E.length > n.limit ? E.length = n.limit : e.length === n.limit && E.length < n.limit && (l.dirty = !0)), f ? Object.freeze(E) : E);
      }
      function gi(e, n) {
        return Ee(e.lower, n.lower) === 0 && Ee(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Za(e, n) {
        return function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Ee(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return 1;
            if (f) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Ee(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return -1;
            if (f) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function es(e, n, o, a) {
        e.subscribers.add(o), a.addEventListener("abort", function() {
          var l, f;
          e.subscribers.delete(o), e.subscribers.size === 0 && (l = e, f = n, setTimeout(function() {
            l.subscribers.size === 0 && Le(f, l);
          }, 3e3));
        });
      }
      var ts = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return s(s({}, e), { transaction: function(o, a, l) {
          var f, h, v = e.transaction(o, a, l);
          return a === "readwrite" && (h = (f = new AbortController()).signal, l = function(b) {
            return function() {
              if (f.abort(), a === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), R = 0, g = o; R < g.length; R++) {
                  var E = g[R], w = fn["idb://".concat(n, "/").concat(E)];
                  if (w) {
                    var x = e.table(E), C = w.optimisticOps.filter(function(se) {
                      return se.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var T = 0, A = Object.values(w.queries.query); T < A.length; T++) for (var P = 0, j = (te = A[T]).slice(); P < j.length; P++) uo((z = j[P]).obsSet, v.mutatedParts) && (Le(te, z), z.subscribers.forEach(function(se) {
                      return _.add(se);
                    }));
                    else if (0 < C.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(se) {
                        return se.trans !== v;
                      });
                      for (var F = 0, Y = Object.values(w.queries.query); F < Y.length; F++) for (var te, z, Z, ie = 0, oe = (te = Y[F]).slice(); ie < oe.length; ie++) (z = oe[ie]).res != null && v.mutatedParts && (b && !z.dirty ? (Z = Object.isFrozen(z.res), Z = yi(z.res, z.req, C, x, z, Z), z.dirty ? (Le(te, z), z.subscribers.forEach(function(se) {
                        return _.add(se);
                      })) : Z !== z.res && (z.res = Z, z.promise = ae.resolve({ result: Z }))) : (z.dirty && Le(te, z), z.subscribers.forEach(function(se) {
                        return _.add(se);
                      })));
                    }
                  }
                }
                _.forEach(function(se) {
                  return se();
                });
              }
            };
          }, v.addEventListener("abort", l(!1), { signal: h }), v.addEventListener("error", l(!1), { signal: h }), v.addEventListener("complete", l(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), l = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var h = de.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(f);
            var v = fn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || vo(l, f).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && gr(f.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (Le(v.optimisticOps, f), (b = vi(0, f, b)) && v.optimisticOps.push(b), f.mutatedParts && gr(f.mutatedParts));
            }), h.catch(function() {
              Le(v.optimisticOps, f), f.mutatedParts && gr(f.mutatedParts);
            })) : h.then(function(b) {
              var _ = vi(0, s(s({}, f), { values: f.values.map(function(R, g) {
                var E;
                return b.failures[g] || (R = (E = l.keyPath) !== null && E !== void 0 && E.includes(".") ? He(R) : s({}, R), re(R, l.keyPath, b.results[g])), R;
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return f.mutatedParts && gr(f.mutatedParts);
              });
            }), h) : a.mutate(f);
          }, query: function(f) {
            if (!hi(de, a) || !mi("query", f)) return a.query(f);
            var h = ((_ = de.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", g = de, v = g.requery, b = g.signal, _ = function(x, C, T, A) {
              var P = fn["idb://".concat(x, "/").concat(C)];
              if (!P) return [];
              if (!(C = P.queries[T])) return [null, !1, P, null];
              var j = C[(A.query ? A.query.index.name : null) || ""];
              if (!j) return [null, !1, P, null];
              switch (T) {
                case "query":
                  var F = j.find(function(Y) {
                    return Y.req.limit === A.limit && Y.req.values === A.values && gi(Y.req.query.range, A.query.range);
                  });
                  return F ? [F, !0, P, j] : [j.find(function(Y) {
                    return ("limit" in Y.req ? Y.req.limit : 1 / 0) >= A.limit && (!A.values || Y.req.values) && Za(Y.req.query.range, A.query.range);
                  }), !1, P, j];
                case "count":
                  return F = j.find(function(Y) {
                    return gi(Y.req.query.range, A.query.range);
                  }), [F, !!F, P, j];
              }
            }(n, o, "query", f), R = _[0], g = _[1], E = _[2], w = _[3];
            return R && g ? R.obsSet = f.obsSet : (g = a.query(f).then(function(x) {
              var C = x.result;
              if (R && (R.res = C), h) {
                for (var T = 0, A = C.length; T < A; ++T) Object.freeze(C[T]);
                Object.freeze(C);
              } else x.result = He(C);
              return x;
            }).catch(function(x) {
              return w && R && Le(w, R), Promise.reject(x);
            }), R = { obsSet: f.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(R) : (w = [R], (E = E || (fn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), es(R, w, v, b), R.promise.then(function(x) {
              return { result: yi(x.result, f, E?.optimisticOps, a, R, h) };
            });
          } });
        } });
      } };
      function wr(e, n) {
        return new Proxy(e, { get: function(o, a, l) {
          return a === "db" ? n : Reflect.get(o, a, l);
        } });
      }
      var $t = (Ze.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new q.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new q.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Va), o.stores({}), this._state.autoSchema = !1, o);
      }, Ze.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || de.letThrough || this._vip) ? e() : new ae(function(o, a) {
          if (n._state.openComplete) return a(new q.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new q.DatabaseClosed());
            n.open().catch(D);
          }
          n._state.dbReadyPromise.then(o, a);
        }).then(e);
      }, Ze.prototype.use = function(e) {
        var n = e.stack, o = e.create, a = e.level, l = e.name;
        return l && this.unuse({ stack: n, name: l }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: a ?? 10, name: l }), e.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Ze.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(l) {
          return a ? l.create !== a : !!o && l.name !== o;
        })), this;
      }, Ze.prototype.open = function() {
        var e = this;
        return ln(dt, function() {
          return Ya(e);
        });
      }, Ze.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = Nn.indexOf(this);
        if (0 <= n && Nn.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new ae(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ae(function(o, a) {
          e.cancelOpen = a;
        }));
      }, Ze.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new q.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new q.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ze.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ae(function(l, f) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = We(function() {
              var b, _, R;
              b = n._deps, _ = n.name, R = b.indexedDB, b = b.IDBKeyRange, ao(R) || _ === ir || io(R, b).delete(_).catch(D), l();
            }), v.onerror = Pt(f), v.onblocked = n._fireOnBlocked;
          }
          if (o) throw new q.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(h) : h();
        });
      }, Ze.prototype.backendDB = function() {
        return this.idbdb;
      }, Ze.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ze.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ze.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ze.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ze.prototype, "tables", { get: function() {
        var e = this;
        return c(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Ze.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var l = arguments.length;
          if (l < 2) throw new q.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return a = f.pop(), [n, we(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ze.prototype._transaction = function(e, n, o) {
        var a = this, l = de.trans;
        l && l.db === this && e.indexOf("!") === -1 || (l = null);
        var f, h, v = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (h = n.map(function(_) {
            if (_ = _ instanceof a.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), e == "r" || e === Yr) f = Yr;
          else {
            if (e != "rw" && e != Xr) throw new q.InvalidArgument("Invalid transaction mode: " + e);
            f = Xr;
          }
          if (l) {
            if (l.mode === Yr && f === Xr) {
              if (!v) throw new q.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              l = null;
            }
            l && h.forEach(function(_) {
              if (l && l.storeNames.indexOf(_) === -1) {
                if (!v) throw new q.SubTransaction("Table " + _ + " not included in parent transaction.");
                l = null;
              }
            }), v && l && !l.active && (l = null);
          }
        } catch (_) {
          return l ? l._promise(null, function(R, g) {
            g(_);
          }) : Je(_);
        }
        var b = (function _(R, g, E, w, x) {
          return ae.resolve().then(function() {
            var C = de.transless || de, T = R._createTransaction(g, E, R._dbSchema, w);
            if (T.explicit = !0, C = { trans: T, transless: C }, w) T.idbtrans = w.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3;
            } catch (j) {
              return j.name === I.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                return _(R, g, E, null, x);
              })) : Je(j);
            }
            var A, P = Et(x);
            return P && xn(), C = ae.follow(function() {
              var j;
              (A = x.call(T, T)) && (P ? (j = Gt.bind(null, null), A.then(j, j)) : typeof A.next == "function" && typeof A.throw == "function" && (A = ho(A)));
            }, C), (A && typeof A.then == "function" ? ae.resolve(A).then(function(j) {
              return T.active ? j : Je(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : C.then(function() {
              return A;
            })).then(function(j) {
              return w && T._resolve(), T._completion.then(function() {
                return j;
              });
            }).catch(function(j) {
              return T._reject(j), Je(j);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, b, "lock") : de.trans ? ln(de.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Ze.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new q.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ze);
      function Ze(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Ze.dependencies;
        this._options = n = s({ addons: Ze.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: D, dbReadyPromise: null, cancelOpen: D, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new ae(function(g) {
          _.dbReadyResolve = g;
        }), _.openCanceller = new ae(function(g, E) {
          _.cancelOpen = E;
        }), this._state = _, this.name = e, this.on = Sn(this, "populate", "blocked", "versionchange", "close", { ready: [ge, D] }), this.once = function(g, E) {
          var w = function() {
            for (var x = [], C = 0; C < arguments.length; C++) x[C] = arguments[C];
            o.on(g).unsubscribe(w), E.apply(o, x);
          };
          return o.on(g, w);
        }, this.on.ready.subscribe = $(this.on.ready.subscribe, function(g) {
          return function(E, w) {
            Ze.vip(function() {
              var x, C = o._state;
              C.openComplete ? (C.dbOpenError || ae.resolve().then(E), w && g(E)) : C.onReadyBeingFired ? (C.onReadyBeingFired.push(E), w && g(E)) : (g(E), x = o, w || g(function T() {
                x.on.ready.unsubscribe(E), x.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (l = this, Pn(Fa.prototype, function(A, T) {
          this.db = l;
          var w = Yo, x = null;
          if (T) try {
            w = T();
          } catch (P) {
            x = P;
          }
          var C = A._ctx, T = C.table, A = T.hook.reading.fire;
          this._ctx = { table: T, index: C.index, isPrimKey: !C.index || T.schema.primKey.keyPath && C.index === T.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: C.or, valueMapper: A !== U ? A : null };
        })), this.Table = (f = this, Pn(Jo.prototype, function(g, E, w) {
          this.db = f, this._tx = w, this.name = g, this.schema = E, this.hook = f._allTables[g] ? f._allTables[g].hook : Sn(null, { creating: [ye, D], reading: [le, U], updating: [xe, D], deleting: [he, D] });
        })), this.Transaction = (h = this, Pn(Ba.prototype, function(g, E, w, x, C) {
          var T = this;
          g !== "readonly" && E.forEach(function(A) {
            A = (A = w[A]) === null || A === void 0 ? void 0 : A.yProps, A && (E = E.concat(A.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = E, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Sn(this, "complete", "error", "abort"), this.parent = C || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ae(function(A, P) {
            T._resolve = A, T._reject = P;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(A) {
            var P = T.active;
            return T.active = !1, T.on.error.fire(A), T.parent ? T.parent._reject(A) : P && T.idbtrans && T.idbtrans.abort(), Je(A);
          });
        })), this.Version = (v = this, Pn(Ha.prototype, function(g) {
          this.db = v, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Pn(oi.prototype, function(g, E, w) {
          if (this.db = b, this._ctx = { table: g, index: E === ":id" ? null : E, or: w }, this._cmp = this._ascending = Ee, this._descending = function(x, C) {
            return Ee(C, x);
          }, this._max = function(x, C) {
            return 0 < Ee(x, C) ? x : C;
          }, this._min = function(x, C) {
            return Ee(x, C) < 0 ? x : C;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Fn(n.IDBKeyRange), this._createTransaction = function(g, E, w, x) {
          return new o.Transaction(g, E, w, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(g) {
          o.on("blocked").fire(g), Nn.filter(function(E) {
            return E.name === o.name && E !== o && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(g);
          });
        }, this.use(Qa), this.use(ts), this.use(Ja), this.use(Xa), this.use(za);
        var R = new Proxy(this, { get: function(g, E, w) {
          if (E === "_vip") return !0;
          if (E === "table") return function(C) {
            return wr(o.table(C), R);
          };
          var x = Reflect.get(g, E, w);
          return x instanceof Jo ? wr(x, R) : E === "tables" ? x.map(function(C) {
            return wr(C, R);
          }) : E === "_createTransaction" ? function() {
            return wr(x.apply(this, arguments), R);
          } : x;
        } });
        this.vip = R, a.forEach(function(g) {
          return g(o);
        });
      }
      var _r, Rt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", ns = (go.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, go.prototype[Rt] = function() {
        return this;
      }, go);
      function go(e) {
        this._subscribe = e;
      }
      try {
        _r = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        _r = { indexedDB: null, IDBKeyRange: null };
      }
      function bi(e) {
        var n, o = !1, a = new ns(function(l) {
          var f = Et(e), h, v = !1, b = {}, _ = {}, R = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), g && Xt.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(R);
          var g = !1, E = function() {
            return Hr(x);
          }, w = function(C) {
            yr(b, C), uo(_, b) && E();
          }, x = function() {
            var C, T, A;
            !v && _r.indexedDB && (b = {}, C = {}, h && h.abort(), h = new AbortController(), A = function(P) {
              var j = wn();
              try {
                f && xn();
                var F = Wt(e, P);
                return F = f ? F.finally(Gt) : F;
              } finally {
                j && _n();
              }
            }(T = { subscr: C, signal: h.signal, requery: E, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              o = !0, n = P, v || T.signal.aborted || (b = {}, function(j) {
                for (var F in j) if (L(j, F)) return;
                return 1;
              }(_ = C) || g || (Xt(jn, w), g = !0), Hr(function() {
                return !v && l.next && l.next(P);
              }));
            }, function(P) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || v || Hr(function() {
                v || l.error && l.error(P);
              });
            }));
          };
          return setTimeout(E, 0), R;
        });
        return a.hasValue = function() {
          return o;
        }, a.getValue = function() {
          return n;
        }, a;
      }
      var dn = $t;
      function bo(e) {
        var n = zt;
        try {
          zt = !0, Xt.storagemutated.fire(e), po(e, !0);
        } finally {
          zt = n;
        }
      }
      k(dn, s(s({}, nt), { delete: function(e) {
        return new dn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new dn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = dn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (ao(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== ir;
            });
          }) : io(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return Je(new q.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          m(this, e);
        };
      }, ignoreTransaction: function(e) {
        return de.trans ? ln(de.transless, e) : e();
      }, vip: so, async: function(e) {
        return function() {
          try {
            var n = ho(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ae.resolve(n);
          } catch (o) {
            return Je(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = ho(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : ae.resolve(a);
        } catch (l) {
          return Je(l);
        }
      }, currentTransaction: { get: function() {
        return de.trans || null;
      } }, waitFor: function(e, n) {
        return n = ae.resolve(typeof e == "function" ? dn.ignoreTransaction(e) : e).timeout(n || 6e4), de.trans ? de.trans.waitFor(n) : n;
      }, Promise: ae, debug: { get: function() {
        return me;
      }, set: function(e) {
        ke(e);
      } }, derive: G, extend: m, props: k, override: $, Events: Sn, on: Xt, liveQuery: bi, extendObservabilitySet: yr, getByKeyPath: H, setByKeyPath: re, delByKeyPath: function(e, n) {
        typeof n == "string" ? re(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          re(e, o, void 0);
        });
      }, shallowClone: ue, deepClone: He, getObjectDiff: mo, cmp: Ee, asap: X, minKey: -1 / 0, addons: [], connections: Nn, errnames: I, dependencies: _r, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), dn.maxKey = Fn(dn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xt(jn, function(e) {
        zt || (e = new CustomEvent(Jr, { detail: e }), zt = !0, dispatchEvent(e), zt = !1);
      }), addEventListener(Jr, function(e) {
        e = e.detail, zt || bo(e);
      }));
      var On, zt = !1, wi = function() {
      };
      return typeof BroadcastChannel < "u" && ((wi = function() {
        (On = new BroadcastChannel(Jr)).onmessage = function(e) {
          return e.data && bo(e.data);
        };
      })(), typeof On.unref == "function" && On.unref(), Xt(jn, function(e) {
        zt || On.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!$t.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), On?.close();
          for (var n = 0, o = Nn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !$t.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), wi(), bo({ all: new st(-1 / 0, [[]]) }));
      })), ae.rejectionMapper = function(e, n) {
        return !e || e instanceof qt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (n = new Q[e.name](n || e.message, e), "stack" in e && ee(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, ke(me), s($t, Object.freeze({ __proto__: null, Dexie: $t, liveQuery: bi, Entity: Xo, cmp: Ee, PropModification: Ln, replacePrefix: function(e, n) {
        return new Ln({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new Ln({ add: e });
      }, remove: function(e) {
        return new Ln({ remove: e });
      }, default: $t, RangeSet: st, mergeRanges: Bn, rangesOverlap: ui }), { default: $t }), $t;
    });
  }(Is)), Is.exports;
}
var wp = bp();
const Ss = /* @__PURE__ */ pp(wp), eu = Symbol.for("Dexie"), Ps = globalThis[eu] || (globalThis[eu] = Ss);
if (Ss.semVer !== Ps.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ss.semVer} and ${Ps.semVer}`);
const {
  liveQuery: Ng,
  mergeRanges: Rg,
  rangesOverlap: Tg,
  RangeSet: Cg,
  cmp: Eg,
  Entity: Og,
  PropModification: Ag,
  replacePrefix: Dg,
  add: Ig,
  remove: Sg,
  DexieYProvider: Pg
} = Ps;
function il(t) {
  return {
    addRecord: r,
    updateRecord: i,
    findChildRecords: d,
    findChildRecordsByTagName: c,
    findChildRecordsWithinDepthAndGivenTagName: p,
    ensureRelationship: s,
    removeRelationship: u,
    findParentRecordsWithinDepthAndGivenTagName: m,
    findRecord: S,
    db: t
  };
  async function r(L) {
    const k = { ...L, id: crypto.randomUUID() };
    try {
      return await t.table(je).add(k), k;
    } catch (J) {
      const ee = {
        msg: "could not add record",
        db: t.name,
        newRecord: k,
        err: J
      };
      throw console.error(ee), new Error(JSON.stringify(ee));
    }
  }
  async function i(L) {
    try {
      if (await t.table(je).update(L.id, L) < 1) {
        const J = { msg: "nothing has been updated", record: L };
        throw console.error(J), new Error(JSON.stringify(J));
      }
    } catch (k) {
      console.error(k);
    }
  }
  async function s(L, k) {
    const J = L.children?.some((G) => G.id === k.id), ee = k.parent?.id === L.id;
    if (J || (L.children.push({ id: k.id, tagName: k.tagName }), await i(L)), !ee) {
      const G = {
        id: L.id,
        tagName: L.tagName
      };
      k.parent = G, await i(k);
    }
  }
  async function u(L, k) {
    k.parent = null, await i(k), L.children && (L.children = L.children.filter((J) => J.id !== k.id), await i(L));
  }
  async function d(L, k) {
    if (!L.children?.length)
      return [];
    let J = (await t.table(je).bulkGet(L.children.map((ee) => ee.id))).filter(Boolean);
    return k?.tagNames && k.tagNames.length > 0 && (J = J.filter((ee) => k?.tagNames?.includes(ee.tagName))), k?.attrs && k.attrs.length > 0 && (J = J.filter(
      (ee) => k.attrs.every(
        (G) => ee.attributes.some(
          (W) => W.name === G.name && W.value === G.value
        )
      )
    )), J;
  }
  async function c(L, k) {
    return (await d(L)).filter((ee) => k.includes(ee.tagName));
  }
  async function p(L, k, J) {
    const ee = [];
    let G = [L];
    for (let W = 0; W < k; W++) {
      const V = [];
      if (G.length === 0)
        break;
      for (const M of G) {
        const $ = await d(M);
        $.length !== 0 && (V.push(...$), ee.push(...$.filter((ne) => J.includes(ne.tagName))));
      }
      G = [...V];
    }
    return ee;
  }
  async function m(L, k, J = []) {
    const ee = [];
    let G = L;
    for (let W = 0; W < k; W++) {
      if (!G.parent)
        return ee;
      const V = await t.table(je).get(G.parent.id);
      if (!V)
        break;
      (J.length == 0 || J.length > 0 && J.includes(V.tagName)) && ee.push(V), G = V;
    }
    return ee;
  }
  async function S(L) {
    const [k] = await O(L);
    return k;
  }
  async function O(L) {
    try {
      const k = t.table(je);
      let J = L.tagNames && L.tagNames.length > 0 ? k.where("tagName").anyOf(L.tagNames) : k.toCollection();
      return L.parent && (J = J.filter((G) => G.parent?.id === L.parent?.id)), L.attr && (J = J.filter((G) => G.attributes?.some(
        (V) => V.name === L.attr.name && V.value === L.attr.value
      ))), await J.toArray();
    } catch (k) {
      return console.error({ msg: "could not find records by options", options: L, err: k }), [];
    }
  }
}
function K(t, r) {
  return t?.attributes?.find((i) => i.name === r)?.value;
}
function Se(t, r) {
  if (t) return;
  const i = "Invariant failed", s = r ? `${i}: ${r}` : i;
  throw console.error(s), new Error("Unexpected Error!");
}
const en = {
  prefix: "eIEC61850-6-100",
  uri: "http://www.iec.ch/61850/2019/SCL/6-100"
}, bc = { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" };
function _p(t) {
  const r = il(t), i = It();
  return {
    createControlledConnection: u,
    createConnection: s,
    createSourcePlaceholder: c,
    createDestinationPlaceholder: d,
    calculateNextInputInstance: p,
    calculateNextOutputInstance: m,
    findExistingInputs: S,
    findExistingOutputs: O,
    findMatchingExtRef: L,
    implementDataflow: k,
    findExtRefByUuid: J,
    findControlBlock: ee,
    findDataSet: G,
    findPathToLnode: V,
    findPathToExtRef: W,
    findGseControlBlockDetails: M,
    findSmvControlBlockDetails: $,
    findReportControlBlockDetails: ne
  };
  async function s(X, H, re, ue) {
    const B = await Xi(r, re), we = await jp(
      r,
      H,
      B,
      X
    );
    await Fp(r, H, X), ue && (await nu(
      r,
      re,
      we
    ), await zi(
      r,
      H,
      re,
      X.type,
      X.signal,
      X.attribute
    ), X.includeQuality && await zi(
      r,
      H,
      re,
      X.type,
      X.signal,
      "q"
    ), X.includeTimestamp && await zi(
      r,
      H,
      re,
      X.type,
      X.signal,
      "t"
    )), await i.refreshConnections(), await i.refreshLNode(H.id), await i.refreshPlaceholders();
  }
  async function u(X, H, re, ue) {
    const B = await ps(r, H), we = Hp(
      X,
      re
    ), Oe = await Mp(r, we);
    if (await r.ensureRelationship(B, Oe), !re.dataObjectSpecifications?.find(
      (He) => He.name === X.controlledSignal
    )) {
      const Qe = It().lnodeTypes.find(
        (ft) => ft.lnClass === re.lnClass
      )?.dataObjects.find(
        (ft) => ft.name === X.controlledSignal
      );
      let $e = await $i(
        r,
        re,
        en.prefix
      );
      const Ce = {
        name: X.controlledSignal,
        desc: Qe?.desc || ""
      }, Le = await Ls(r, Ce);
      await r.ensureRelationship($e, Le);
    }
    ue && (await Kp(r, H, Oe), await zi(
      r,
      H,
      re,
      X.type,
      X.controlledSignal
    )), await i.refreshConnections(), await i.refreshLNode(re.id);
  }
  async function d(X, H, re) {
    const ue = await Xi(r, H), B = await oa(
      r,
      Yp(X)
    );
    await r.ensureRelationship(ue, B), re && await nu(r, H, [
      B
    ]), await i.refreshConnections();
  }
  async function c(X, H, re) {
    let ue = [{ name: "inputName", value: H.inputName }];
    H.preferredLNode && ue.push({ name: "pLN", value: H.preferredLNode }), H.dataflowType && ue.push({ name: "service", value: H.dataflowType }), H.processResource && ue.push({ name: "resourceName", value: H.processResource });
    const B = X.dataObjectSpecifications?.find(
      (Le) => Le.name === H.dataObject
    ), we = B?.dataAttributeSpecifications.find(
      (Le) => Le.name === H.dataAttribute
    ), Oe = It(), He = Oe.lnodeTypes.find((Le) => Le.lnClass === X.lnClass)?.dataObjects.find((Le) => Le.name === H.dataObject), Ft = He?.dataAttributes.find((Le) => Le.name === H.dataAttribute);
    let Qe, $e;
    if (B)
      Qe = await r.db.table(je).get(B.id);
    else {
      const Le = await $i(
        r,
        X,
        en.prefix
      ), ft = {
        name: H.dataObject,
        desc: He?.desc || ""
      };
      Qe = await Ls(r, ft), await r.ensureRelationship(Le, Qe);
    }
    if (!Qe) {
      const Le = "DOS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(Le));
    }
    if (we)
      $e = await r.db.table(je).get(we.id);
    else {
      const Le = {
        name: H.dataAttribute,
        desc: Ft?.desc || ""
      };
      $e = await Rc(
        r,
        Le
      ), await r.ensureRelationship(Qe, $e);
    }
    if (!$e) {
      const Le = "DAS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(Le));
    }
    const Ce = await r.addRecord({
      tagName: "SubscriberLNode",
      attributes: ue,
      parent: null,
      namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
      value: "",
      children: []
    });
    await r.ensureRelationship($e, Ce), re && await qp(
      r,
      X,
      H.dataObject,
      H.dataAttribute,
      H.dataflowType || void 0
    ), await Oe.refreshLNode(X.id), await Oe.refreshPlaceholders();
  }
  async function p(X, H, re) {
    const ue = await Xi(r, re), Oe = (await r.findChildRecordsByTagName(ue, [
      "SourceRef"
    ])).map((Ie) => ({
      input: K(Ie, "input"),
      pDA: K(Ie, "pDA")
    })).filter(
      (Ie) => Ie.input === X && Ie.pDA === H
    );
    return Oe.length === 0 ? 1 : Oe.length + 1;
  }
  async function m(X, H) {
    const re = await ps(r, H), we = (await r.findChildRecordsByTagName(re, [
      "ControlRef"
    ])).map((Oe) => K(Oe, "output")).filter((Oe) => !!Oe).filter(
      (Oe) => Oe === X
    );
    return we.length === 0 ? 1 : we.length + 1;
  }
  async function S(X) {
    const H = await Xi(r, X), ue = (await r.findChildRecordsByTagName(H, [
      "SourceRef"
    ])).map((we) => K(we, "input")).filter((we) => !!we);
    return Array.from(new Set(ue));
  }
  async function O(X) {
    const H = await ps(r, X), ue = (await r.findChildRecordsByTagName(H, [
      "ControlRef"
    ])).map((we) => K(we, "output")).filter((we) => !!we);
    return Array.from(new Set(ue));
  }
  async function L(X) {
    const H = await r.db.table(je).get(X.id);
    Se(H, "SourceRef record not found");
    const re = K(H, "extRefUuid");
    let ue;
    if (re) {
      if (ue = await r.db.table(je).where({ tagName: "ExtRef" }).and((B) => K(B, "uuid") === re).first(), !ue)
        throw new Error(`ExtRef with uuid ${re} not found`);
    } else {
      const B = await Lp(r, X);
      if (!B)
        return null;
      ue = B;
    }
    return ru(ue);
  }
  async function k(X, H) {
    if (Se(
      X.sourceLNodeId && X.destinationLNodeId,
      "Connection must have both source and destination LNode IDs to implement"
    ), Se(X.dataflowType, "Connection must have a dataflow type to implement"), H.srcCbName)
      throw new Error("Dataflow is already implemented (srcCBName exists in ExtRef)");
    if (![tt.GOOSE, tt.REPORT, tt.SMV].includes(X.dataflowType))
      throw new Error(
        `Dataflow type ${X.dataflowType} is not supported for automatic implementation`
      );
    const ue = await r.db.table(je).get(X.sourceLNodeId);
    Se(ue, "Sending LNode record not found");
    const B = await r.db.table(je).get(X.destinationLNodeId);
    Se(B, "Receiving LNode record not found");
    const we = await sl(
      r,
      X.sourceLNodeId
    );
    Se(we, "LDevice of sending LNode not found");
    const Oe = (await r.findChildRecords(we, { tagNames: ["LN0"] }))[0];
    Se(Oe, "LN0 record not found for LDevice");
    const Ie = await Ep(
      r,
      X,
      ue,
      B,
      we,
      Oe
    ), He = await Cp(
      r,
      X.dataflowType,
      K(Ie, "name") || "",
      Oe
    );
    tn(
      Ie,
      "datSet",
      K(He, "name") || ""
    ), await r.updateRecord(Ie), await Tp(
      r,
      X,
      ue,
      He
    ), await xp(
      r,
      X.dataflowType,
      we,
      Ie
    ), await Sp(
      r,
      X,
      H,
      K(Ie, "name") || ""
    ), await Pp(
      r,
      X,
      B,
      H
    ), await i.refreshConnections();
  }
  async function J(X) {
    const H = await r.findRecord({
      tagNames: ["ExtRef"],
      attr: { name: "uuid", value: X }
    });
    return Se(H, `ExtRef record not found for uuid: ${X}`), ru(H);
  }
  async function ee(X, H, re) {
    const ue = await r.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: X }
    });
    Se(ue, "IED record not found");
    const B = await r.findChildRecordsWithinDepthAndGivenTagName(ue, 3, ["LDevice"]).then((Ie) => Ie.find((He) => K(He, "inst") === H));
    Se(B, "LDevice record not found");
    const [we] = await r.findChildRecordsByTagName(B, ["LN0"]);
    Se(we, "LN0 record not found for LDevice");
    const [Oe] = await r.findChildRecords(we, {
      tagNames: ["GSEControl", "SampledValueControl", "ReportControl"],
      attrs: [{ name: "name", value: re }]
    });
    return Se(Oe, "Control Block record not found"), Wp(Oe);
  }
  async function G(X, H, re) {
    const ue = await r.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: X }
    });
    Se(ue, "IED record not found");
    const B = await r.findChildRecordsWithinDepthAndGivenTagName(ue, 3, ["LDevice"]).then((Ie) => Ie.find((He) => K(He, "inst") === H));
    Se(B, "LDevice record not found");
    const [we] = await r.findChildRecordsByTagName(B, ["LN0"]);
    Se(we, "LN0 record not found for LDevice");
    const [Oe] = await r.findChildRecords(we, {
      tagNames: ["DataSet"],
      attrs: [{ name: "name", value: re }]
    });
    return Se(Oe, "DataSet record not found"), Gp(Oe);
  }
  async function W(X) {
    const H = await r.db.table(je).get(X);
    Se(H, "ExtRef record not found");
    let re = K(H, "intAddr") || "";
    const ue = ["LN", "LDevice", "IED"];
    let B = H;
    for (; B.parent; ) {
      const we = await r.db.table(je).get(B.parent.id);
      if (Se(we, "Parent record not found"), ue.includes(we.tagName)) {
        let Oe = "";
        we.tagName === "LN" ? Oe = `${K(we, "prefix")} ${K(we, "lnClass")} ${K(we, "inst")}` : we.tagName === "LDevice" ? Oe = K(we, "inst") || "" : Oe = K(we, "name") || "", re = `${Oe} / ${re}`;
      }
      B = we;
    }
    return re;
  }
  async function V(X) {
    const H = await r.db.table(je).get(X);
    Se(H, "LNode record not found");
    let ue = `${K(H, "prefix")} ${K(H, "lnClass")} ${K(H, "lnInst")}`;
    const B = ["SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
    let we = H;
    for (; we.parent; ) {
      const Oe = await r.db.table(je).get(we.parent.id);
      Se(Oe, "Parent record not found"), B.includes(Oe.tagName) && (ue = `${K(Oe, "name")} / ${ue}`), we = Oe;
    }
    return ue;
  }
  async function M(X, H) {
    const re = await r.db.table(je).get(X);
    Se(re, "Control Block record not found");
    const ue = await r.db.table(je).where({ tagName: "GSE" }).and(
      ($e) => K($e, "cbName") === K(re, "name") && K($e, "ldInst") === H
    ).first();
    Se(ue, "GSE Communication record not found for Control Block");
    const [B] = await r.findChildRecordsByTagName(ue, [
      "MinTime"
    ]), [we] = await r.findChildRecordsByTagName(ue, [
      "MaxTime"
    ]), Oe = await r.findChildRecordsWithinDepthAndGivenTagName(
      ue,
      2,
      ["P"]
    ), Ie = Oe.find(
      ($e) => K($e, "type") === "VLAN-ID" || K($e, "type") === "tP_VLAN-ID"
    ), He = Oe.find(
      ($e) => K($e, "type") === "VLAN-PRIORITY" || K($e, "type") === "tP_VLAN-PRIORITY"
    ), Ft = Oe.find(
      ($e) => K($e, "type") === "MAC-Address" || K($e, "type") === "tP_MAC-Address"
    ), Qe = Oe.find(
      ($e) => K($e, "type") === "APPID" || K($e, "type") === "tP_APPID"
    );
    return {
      appId: K(re, "appID") || "",
      communicationDetails: {
        macAddress: Ft?.value || "",
        appId: Qe?.value || "",
        vlanId: Ie?.value || "",
        vlanPriority: He?.value || "",
        minTime: B?.value || "",
        maxTime: we?.value || ""
      }
    };
  }
  async function $(X, H) {
    const re = await r.db.table(je).get(X);
    Se(re, "Control Block record not found");
    const [ue] = await r.findChildRecordsByTagName(re, [
      "SmvOpts"
    ]);
    Se(ue, "SmvOpts record not found for Control Block");
    const B = await r.db.table(je).where({ tagName: "SMV" }).and(
      (Qe) => K(Qe, "cbName") === K(re, "name") && K(Qe, "ldInst") === H
    ).first();
    Se(B, "SMV Communication record not found for Control Block");
    const we = await r.findChildRecordsWithinDepthAndGivenTagName(
      B,
      2,
      ["P"]
    ), Oe = we.find(
      (Qe) => K(Qe, "type") === "VLAN-ID" || K(Qe, "type") === "tP_VLAN-ID"
    ), Ie = we.find(
      (Qe) => K(Qe, "type") === "VLAN-PRIORITY" || K(Qe, "type") === "tP_VLAN-PRIORITY"
    ), He = we.find(
      (Qe) => K(Qe, "type") === "MAC-Address" || K(Qe, "type") === "tP_MAC-Address"
    ), Ft = we.find(
      (Qe) => K(Qe, "type") === "APPID" || K(Qe, "type") === "tP_APPID"
    );
    return {
      smvId: K(re, "smvID") || "",
      multicast: K(re, "multicast") || "",
      nofAsdu: K(re, "nofASDU") || "",
      smpMod: K(re, "smpMod") || "",
      smpRate: K(re, "smpRate") || "",
      communicationDetails: {
        macAddress: He?.value || "",
        appId: Ft?.value || "",
        vlanId: Oe?.value || "",
        vlanPriority: Ie?.value || ""
      },
      smvOpts: {
        refreshTime: K(ue, "refreshTime") || "",
        sampleSynchronized: K(ue, "sampleSynchronized") || "",
        sampleRate: K(ue, "sampleRate") || "",
        dataSet: K(ue, "dataSet") || "",
        security: K(ue, "security") || "",
        synchSourceId: K(ue, "synchSourceId") || ""
      }
    };
  }
  async function ne(X) {
    const H = await r.db.table(je).get(X);
    Se(H, "Control Block record not found");
    const [re] = await r.findChildRecordsByTagName(H, [
      "TrgOps"
    ]);
    Se(re, "TrgOps record not found for Control Block");
    const [ue] = await r.findChildRecordsByTagName(H, [
      "OptFields"
    ]);
    return Se(ue, "OptFields record not found for Control Block"), {
      rptId: K(H, "rptID") || "",
      buffered: K(H, "buffered") || "",
      trgOps: {
        dchg: K(re, "dchg") || "",
        dupd: K(re, "dupd") || "",
        gi: K(re, "gi") || "",
        period: K(re, "period") || "",
        qchg: K(re, "qchg") || ""
      },
      optFields: {
        bufOvfl: K(ue, "bufOvfl") || "",
        configRef: K(ue, "configRef") || "",
        dataRef: K(ue, "dataRef") || "",
        dataSet: K(ue, "dataSet") || "",
        entryId: K(ue, "entryID") || "",
        reasonCode: K(ue, "reasonCode") || "",
        seqNum: K(ue, "seqNum") || "",
        timeStamp: K(ue, "timeStamp") || ""
      }
    };
  }
}
async function xp(t, r, i, s) {
  const u = await t.db.table(je).where({ tagName: "Communication" }).first();
  Se(u, "Communication record not found in SCL");
  const d = await t.findChildRecordsWithinDepthAndGivenTagName(
    u,
    2,
    ["ConnectedAP"]
  ), [c] = await t.findParentRecordsWithinDepthAndGivenTagName(
    s,
    4,
    ["AccessPoint"]
  );
  Se(c, "AccessPoint record not found"), Se(c.parent, "AccessPoint has no parent");
  const p = await t.db.table(je).get(c.parent.id);
  Se(p, "IED record not found");
  const m = d.find(
    (O) => K(O, "iedName") === K(p, "name") && K(O, "apName") === K(c, "name")
  );
  Se(m, "ConnectedAP record for sending IED not found");
  const S = K(s, "name") || "";
  r === tt.GOOSE && await Rp(
    t,
    i,
    S,
    m
  ), r === tt.SMV && await Np(
    t,
    i,
    S,
    m
  );
}
async function Np(t, r, i, s) {
  if ((await t.findChildRecords(s, {
    tagNames: ["SMV"],
    attrs: [
      { name: "cbName", value: i },
      {
        name: "ldInst",
        value: K(r, "inst") || ""
      }
    ]
  }))[0])
    return;
  const d = await t.db.table(je).where({ tagName: "SMV" }).toArray(), c = await t.addRecord({
    tagName: "SMV",
    attributes: [
      { name: "cbName", value: i },
      { name: "ldInst", value: K(r, "inst") || "" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(s, c);
  const p = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(c, p);
  const m = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-ID",
        namespace: bc
      },
      { name: "type", value: "VLAN-ID" }
    ],
    parent: null,
    namespace: xt.default,
    value: "000",
    children: []
  });
  await t.ensureRelationship(p, m);
  const S = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-PRIORITY",
        namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
      },
      { name: "type", value: "VLAN-PRIORITY" }
    ],
    parent: null,
    namespace: xt.default,
    value: "7",
    children: []
  });
  await t.ensureRelationship(p, S);
  const O = [], L = [];
  for (const W of d) {
    const V = await t.findChildRecords(W, {
      tagNames: ["Address"]
    });
    Se(V[0], "Address record not found in SMV communication");
    const M = await t.findChildRecords(V[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "MAC-Address" }]
    });
    if (M[0]) {
      const ne = M[0].value;
      O.push(ne);
    }
    const $ = await t.findChildRecords(V[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "APPID" }]
    });
    if ($[0]) {
      const ne = $[0].value;
      L.push(ne);
    }
  }
  const k = wc(
    262144,
    262655,
    O
  ), J = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_MAC-Address",
        namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
      },
      { name: "type", value: "MAC-Address" }
    ],
    parent: null,
    namespace: xt.default,
    value: k,
    children: []
  });
  await t.ensureRelationship(p, J);
  const ee = _c(16384, 32767, L), G = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_APPID",
        namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
      },
      { name: "type", value: "APPID" }
    ],
    parent: null,
    namespace: xt.default,
    value: ee,
    children: []
  });
  await t.ensureRelationship(p, G);
}
async function Rp(t, r, i, s) {
  if ((await t.findChildRecords(s, {
    tagNames: ["GSE"],
    attrs: [
      { name: "cbName", value: i },
      {
        name: "ldInst",
        value: K(r, "inst") || ""
      }
    ]
  }))[0])
    return;
  const d = await t.db.table(je).where({ tagName: "GSE" }).toArray(), c = await t.addRecord({
    tagName: "GSE",
    attributes: [
      { name: "cbName", value: i },
      { name: "ldInst", value: K(r, "inst") || "" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(s, c);
  const p = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(c, p);
  const m = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-ID",
        namespace: bc
      },
      { name: "type", value: "VLAN-ID" }
    ],
    parent: null,
    namespace: xt.default,
    value: "000",
    children: []
  });
  await t.ensureRelationship(p, m);
  const S = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-PRIORITY",
        namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
      },
      { name: "type", value: "VLAN-PRIORITY" }
    ],
    parent: null,
    namespace: xt.default,
    value: "4",
    children: []
  });
  await t.ensureRelationship(p, S);
  const O = [], L = [];
  for (const M of d) {
    const $ = await t.findChildRecords(M, {
      tagNames: ["Address"]
    });
    Se($[0], "Address record not found in SMV communication");
    const ne = await t.findChildRecords($[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "MAC-Address" }]
    });
    if (ne[0]) {
      const H = ne[0].value;
      O.push(H);
    }
    const X = await t.findChildRecords($[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "APPID" }]
    });
    if (X[0]) {
      const H = X[0].value;
      L.push(H);
    }
  }
  const k = wc(
    65536,
    66047,
    O
  ), J = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_MAC-Address",
        namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
      },
      { name: "type", value: "MAC-Address" }
    ],
    parent: null,
    namespace: xt.default,
    value: k,
    children: []
  });
  await t.ensureRelationship(p, J);
  const ee = _c(1, 16383, L), G = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_APPID",
        namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
      },
      { name: "type", value: "APPID" }
    ],
    parent: null,
    namespace: xt.default,
    value: ee,
    children: []
  });
  await t.ensureRelationship(p, G);
  const W = await t.addRecord({
    tagName: "MinTime",
    attributes: [
      { name: "multiplier", value: "m" },
      { name: "unit", value: "s" }
    ],
    parent: null,
    namespace: xt.default,
    value: "5",
    children: []
  });
  await t.ensureRelationship(c, W);
  const V = await t.addRecord({
    tagName: "MaxTime",
    attributes: [
      { name: "multiplier", value: "m" },
      { name: "unit", value: "s" }
    ],
    parent: null,
    namespace: xt.default,
    value: "10000",
    children: []
  });
  await t.ensureRelationship(c, V);
}
function wc(t, r, i) {
  const s = "01-0C-CD";
  for (let u = t; u <= r; u++) {
    const d = u.toString(16).toUpperCase().padStart(6, "0"), c = `${d.slice(0, 2)}-${d.slice(2, 4)}-${d.slice(4, 6)}`, p = s + "-" + c;
    if (!i.includes(p))
      return p;
  }
  throw new Error("No available MAC Address found in the specified range");
}
function _c(t, r, i) {
  for (let s = t; s <= r; s++) {
    const u = s.toString(16).toUpperCase().padStart(4, "0");
    if (!i.includes(u))
      return u;
  }
  throw new Error("No available APPID found in the specified range");
}
async function Tp(t, r, i, s) {
  const p = It().lnodeTypes.find(
    (O) => O.typeId === K(i, "lnType") && O.lnClass === K(i, "lnClass")
  )?.dataObjects.find((O) => O.name === r.sourceDataObject)?.dataAttributes?.find((O) => O.name === r.sourceDataAttribute), m = (await t.findChildRecords(s, {
    tagNames: ["FCDA"],
    attrs: [
      { name: "daName", value: r.sourceDataAttribute },
      { name: "doName", value: r.sourceDataObject },
      { name: "fc", value: p?.fc || "" },
      { name: "ldInst", value: K(i, "ldInst") || "" },
      { name: "lnClass", value: K(i, "lnClass") || "" },
      { name: "lnInst", value: K(i, "lnInst") || "" },
      { name: "prefix", value: K(i, "prefix") || "" }
    ]
  }))[0];
  if (m)
    return m;
  const S = await t.addRecord({
    tagName: "FCDA",
    attributes: [
      { name: "daName", value: r.sourceDataAttribute },
      { name: "doName", value: r.sourceDataObject },
      { name: "fc", value: p?.fc || "" },
      { name: "ldInst", value: K(i, "ldInst") || "" },
      { name: "lnClass", value: K(i, "lnClass") || "" },
      { name: "lnInst", value: K(i, "lnInst") || "" },
      { name: "prefix", value: K(i, "prefix") || "" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, S), S;
}
async function Cp(t, r, i, s) {
  let u;
  if (r === tt.SMV) {
    const p = i.slice(i.length - 2);
    u = "PhsMeas" + parseInt(p, 10);
  } else
    u = i + "_DS";
  const d = (await t.findChildRecords(s, {
    tagNames: ["DataSet"],
    attrs: [{ name: "name", value: u }]
  }))[0];
  if (d)
    return d;
  const c = await t.addRecord({
    tagName: "DataSet",
    attributes: [{ name: "name", value: u }],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, c), c;
}
async function Ep(t, r, i, s, u, d) {
  const c = (await t.findParentRecordsWithinDepthAndGivenTagName(i, 1 / 0, [
    "Function"
  ]))[0];
  Se(c, "Parent Function of sending LNode not found when implementing dataflow");
  let p;
  if (r.dataflowType === tt.GOOSE && (p = await Ip(
    t,
    i,
    s,
    c,
    u,
    d
  )), r.dataflowType === tt.SMV && (p = await Ap(
    t,
    i,
    s,
    u,
    d
  )), r.dataflowType === tt.REPORT) {
    const S = K(i, "lnClass") === "MMXU";
    p = await Op(
      t,
      i,
      s,
      c,
      u,
      d,
      S
    );
  }
  return Se(p, "Control Block record could not be created"), p;
}
async function Op(t, r, i, s, u, d, c) {
  const p = (K(s, "name") + "_RPT").replace(" ", "_"), m = K(i, "iedName");
  Se(m, "iedName of receiving LNode not found");
  const S = await t.db.table(je).where({ tagName: "ReportControl" }).toArray(), O = S.filter(
    (H) => H.parent?.id === d.id
  );
  for (const H of O) {
    const ue = K(H, "name")?.startsWith(p), B = (await t.findChildRecordsWithinDepthAndGivenTagName(H, 2, ["ClientLN"]))[0];
    Se(B, "ClientLN record inside ReportControl not found");
    const we = K(B, "iedName") === m;
    if (ue && we)
      return H;
  }
  const k = O.filter(
    (H) => K(H, "name")?.startsWith(p) ?? !1
  ).length + 1, J = p + k, ee = al(
    r,
    u,
    J
  ), G = S.length + 1, W = {
    tagName: "ReportControl",
    attributes: [
      { name: "name", value: J },
      { name: "confRev", value: G.toString() },
      { name: "rptID", value: ee }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  };
  c ? W.attributes.push({ name: "buffered", value: "false" }) : (W.attributes.push({ name: "buffered", value: "true" }), W.attributes.push({ name: "bufTime", value: "100" }));
  const V = await t.addRecord(W);
  await t.ensureRelationship(d, V);
  const M = {
    tagName: "TrgOps",
    attributes: [
      { name: "dchg", value: "true" },
      { name: "dupd", value: "false" },
      { name: "gi", value: "true" },
      { name: "period", value: "false" },
      { name: "qchg", value: "true" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  };
  c ? M.attributes.push({ name: "dupd", value: "true" }) : M.attributes.push({ name: "dupd", value: "false" });
  const $ = await t.addRecord(M);
  await t.ensureRelationship(V, $);
  const ne = await t.addRecord({
    tagName: "OptFields",
    attributes: [
      { name: "bufOvfl", value: "false" },
      { name: "configRef", value: "true" },
      { name: "dataRef", value: "true" },
      { name: "dataSet", value: "true" },
      { name: "entryID", value: "true" },
      { name: "reasonCode", value: "true" },
      { name: "seqNum", value: "true" },
      { name: "timeStamp", value: "true" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(V, ne);
  const X = await t.addRecord({
    tagName: "RptEnabled",
    attributes: [{ name: "max", value: "5" }],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(V, X), await Dp(t, X, i), V;
}
async function Ap(t, r, i, s, u) {
  const d = K(i, "iedName");
  Se(d, "iedName of receiving LNode not found");
  const c = await t.db.table(je).where({ tagName: "SampledValueControl" }).toArray(), p = c.filter(
    (G) => G.parent?.id === u.id
  );
  for (const G of p) {
    const W = (await t.findChildRecordsByTagName(G, ["IEDName"]))[0];
    if (Se(W, "IEDName record inside SampledValueControl not found"), W.value === d)
      return G;
  }
  const m = "MSVCB", S = p.length + 1;
  if (S > 99)
    throw new Error("Maximum number of SampledValueControl elements (99) exceeded");
  const O = m + S.toString().padStart(2, "0"), L = al(
    r,
    s,
    O
  ), k = c.length + 1, J = await t.addRecord({
    tagName: "SampledValueControl",
    attributes: [
      { name: "name", value: O },
      { name: "confRev", value: k.toString() },
      { name: "smvID", value: L },
      { name: "multicast", value: "true" },
      { name: "nofASDU", value: "2" },
      { name: "smpMod", value: "SmpPerSec" },
      { name: "smpRate", value: "80" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(u, J), await xc(t, J, d);
  const ee = await t.addRecord({
    tagName: "SmvOpts",
    attributes: [
      { name: "refreshTime", value: "false" },
      { name: "sampleSynchronized", value: "true" },
      { name: "sampleRate", value: "false" },
      { name: "dataSet", value: "false" },
      { name: "security", value: "false" },
      { name: "synchSourceId", value: "true" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(J, ee), J;
}
async function xc(t, r, i) {
  const s = await t.db.table(je).where({ tagName: "IED" }).and((c) => K(c, "name") === i).first();
  Se(s, "IED record of receiving LNode not found");
  const u = (await t.findChildRecordsByTagName(s, ["AccessPoint"]))[0];
  Se(u, "AccessPoint record of receiving IED not found");
  const d = await t.addRecord({
    tagName: "IEDName",
    attributes: [
      {
        name: "apRef",
        value: K(u, "name") || ""
      }
    ],
    parent: null,
    namespace: xt.default,
    value: i || "",
    children: []
  });
  await t.ensureRelationship(r, d);
}
async function Dp(t, r, i) {
  const s = K(i, "iedName"), u = await t.db.table(je).where({ tagName: "IED" }).and((p) => K(p, "name") === s).first();
  Se(u, "IED record of receiving LNode not found");
  const d = (await t.findChildRecordsByTagName(u, ["AccessPoint"]))[0];
  Se(d, "AccessPoint record of receiving IED not found");
  const c = await t.addRecord({
    tagName: "ClientLN",
    attributes: [
      {
        name: "apRef",
        value: K(d, "name") || ""
      },
      { name: "iedName", value: s || "" },
      { name: "ldInst", value: K(i, "ldInst") || "" },
      { name: "prefix", value: K(i, "prefix") || "" },
      { name: "lnClass", value: K(i, "lnClass") || "" },
      { name: "lnInst", value: K(i, "lnInst") || "" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(r, c);
}
function al(t, r, i) {
  const s = K(t, "iedName"), u = K(r, "inst");
  return `${s}${u}/LN0.${i}`;
}
async function Ip(t, r, i, s, u, d) {
  const c = (K(s, "name") + "_GSE").replace(" ", "_"), p = K(i, "iedName");
  Se(p, "iedName of receiving LNode not found");
  const m = await t.db.table(je).where({ tagName: "GSEControl" }).toArray(), S = m.filter(
    (W) => W.parent?.id === d.id
  );
  for (const W of S) {
    const M = K(W, "name")?.startsWith(c), $ = (await t.findChildRecordsByTagName(W, ["IEDName"]))[0];
    Se($, "IEDName record inside GSEControl not found");
    const ne = $.value === p;
    if (M && ne)
      return W;
  }
  const L = S.filter(
    (W) => K(W, "name")?.startsWith(c) ?? !1
  ).length + 1, k = c + L, J = al(
    r,
    u,
    k
  ), ee = m.length + 1, G = await t.addRecord({
    tagName: "GSEControl",
    attributes: [
      { name: "name", value: k },
      { name: "confRev", value: ee.toString() },
      { name: "appID", value: J },
      { name: "type", value: "GOOSE" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(d, G), await xc(t, G, p), G;
}
async function Sp(t, r, i, s) {
  Se(
    r.sourceLNodeId,
    "Source LNode ID not set for dataflow connection to implement"
  ), Se(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
  const u = await t.db.table(je).get(i.id);
  Se(u, "ExtRef record not found"), tn(u, "doName", r.sourceDataObject), tn(u, "daName", r.sourceDataAttribute), tn(u, "serviceType", r.dataflowType);
  const d = await t.db.table(je).get(r.sourceLNodeId);
  Se(d, "Sending LNode record not found"), tn(
    u,
    "iedName",
    K(d, "iedName") || ""
  ), tn(
    u,
    "ldInst",
    K(d, "ldInst") || ""
  ), tn(
    u,
    "lnClass",
    K(d, "lnClass") || ""
  ), tn(
    u,
    "lnInst",
    K(d, "lnInst") || ""
  ), tn(
    u,
    "prefix",
    K(d, "prefix") || ""
  ), tn(u, "srcCBName", s);
  const c = await sl(t, r.sourceLNodeId);
  Se(c, "LDevice for sending LNode not found");
  const p = (await t.findChildRecords(c, { tagNames: ["LN0"] }))[0];
  Se(p, "LN0 record not found"), tn(
    u,
    "srcLDInst",
    K(c, "inst") || ""
  ), tn(
    u,
    "srcPrefix",
    K(p, "prefix") || ""
  ), tn(
    u,
    "srcLNClass",
    K(p, "lnClass") || ""
  ), tn(u, "srcLNInst", K(p, "inst") || ""), await t.updateRecord(u);
}
async function Pp(t, r, i, s) {
  Se(
    r.destinationLNodeId,
    "Destination LNode ID not set for dataflow connection to implement"
  );
  const u = await t.db.table(je).get(r.id);
  Se(u, "SourceRef record not found");
  const d = K(i, "iedName"), c = K(i, "ldInst"), p = await Nc(t, r.destinationLNodeId);
  Se(p, "LN record for receiving LNode not found");
  const m = K(p, "prefix"), S = K(p, "lnClass"), O = K(p, "inst"), L = `${d}${c}/${m}${S}${O}.${s.intAddr}`;
  tn(u, "extRefUuid", s.uuid), tn(u, "extRefAddr", L), await t.updateRecord(u);
}
function tn(t, r, i) {
  const s = t.attributes.find((u) => u.name === r);
  s ? s.value = i : t.attributes.push({ name: r, value: i });
}
async function sl(t, r) {
  const i = await t.db.table(je).get(r), s = await t.db.table(je).where({ tagName: "IED" }).and(
    (c) => K(c, "name") === K(i, "iedName")
  ).first();
  Se(s, "IED record not found for receiving LNode");
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(
    s,
    3,
    ["LDevice"]
  )).find((c) => K(c, "inst") === K(i, "ldInst"));
  return Se(d, "LDevice record not found for receiving LNode"), d;
}
async function Nc(t, r) {
  const i = await t.db.table(je).get(r), s = await sl(t, r);
  if (!s)
    return;
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(s, 1, [
    "LN"
  ])).find((c) => K(c, "lnType") === K(i, "lnType") && K(c, "inst") === K(i, "lnInst") && K(c, "lnClass") === K(i, "lnClass") && K(c, "prefix") === K(i, "prefix"));
  return Se(d, "LN record not found for receiving LNode"), d;
}
async function Lp(t, r) {
  if (!kp(r))
    return;
  const i = await Nc(t, r.destinationLNodeId);
  if (!i)
    return;
  const u = (await t.findChildRecordsWithinDepthAndGivenTagName(i, 2, [
    "ExtRef"
  ])).filter((c) => {
    const p = K(c, "pLN") === r.preferredLNode && K(c, "pDO") === r.preferredDataObject && K(c, "pDA") === r.preferredDataAttribute;
    Se(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
    const m = K(c, "pServT"), S = m === void 0 || m === r.dataflowType, O = K(c, "srcCBName");
    return p && S && !(O !== void 0 && O !== "");
  }), d = [];
  for (const c of u) {
    if (!K(c, "uuid")) {
      d.push(c);
      continue;
    }
    await t.db.table(je).where({ tagName: "SourceRef" }).and(
      (m) => (!!K(m, "extRefUuid") && K(m, "extRefUuid")) === K(c, "uuid")
    ).first() || d.push(c);
  }
  return d[0];
}
function kp(t) {
  return t.preferredLNode.trim() !== "" && t.preferredDataObject.trim() !== "" && t.preferredDataAttribute.trim() !== "";
}
async function Xi(t, r) {
  const i = await $i(
    t,
    r,
    en.prefix
  ), s = await t.findChildRecordsByTagName(i, [
    "LNodeInputs"
  ]);
  if (s.length == 1)
    return s[0];
  if (s.length == 0) {
    const d = await t.addRecord({
      tagName: "LNodeInputs",
      attributes: [],
      parent: null,
      namespace: en,
      value: "",
      children: []
    });
    return await t.ensureRelationship(i, d), d;
  }
  const u = {
    msg: `More than one LNodeInputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(u));
}
async function ps(t, r) {
  const i = await $i(
    t,
    r,
    en.prefix
  ), s = await t.findChildRecordsByTagName(i, [
    "LNodeOutputs"
  ]);
  if (s.length == 1)
    return s[0];
  if (s.length == 0) {
    const d = await t.addRecord({
      tagName: "LNodeOutputs",
      attributes: [],
      parent: null,
      namespace: en,
      value: "",
      children: []
    });
    return await t.ensureRelationship(i, d), d;
  }
  const u = {
    msg: `More than one LNodeOutputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(u));
}
async function jp(t, r, i, s) {
  const u = [], d = await oa(
    t,
    ms(s, r)
  );
  if (u.push(d), await t.ensureRelationship(i, d), s.includeQuality) {
    const c = {
      ...s,
      attribute: "q"
      // Set to 'q' for Quality
    }, p = await oa(
      t,
      ms(c, r)
    );
    u.push(p), await t.ensureRelationship(i, p);
  }
  if (s.includeTimestamp) {
    const c = {
      ...s,
      attribute: "t"
      // Set to 't' for Timestamp
    }, p = await oa(
      t,
      ms(c, r)
    );
    u.push(p), await t.ensureRelationship(i, p);
  }
  return u;
}
async function $i(t, r, i) {
  const s = await t.db.table(je).where({ "parent.id": r.id, tagName: "Private" }).and((c) => K(c, "type") === i).first();
  if (s)
    return s;
  const u = await t.db.table(je).get(r.id);
  if (!u) {
    const c = {
      msg: `LNode element with uuid ${r.uuid} not found`
    };
    throw new Error(JSON.stringify(c));
  }
  const d = await t.addRecord({
    tagName: "Private",
    attributes: [{ name: "type", value: i }],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(u, d), d;
}
async function oa(t, r) {
  const i = {
    tagName: "SourceRef",
    namespace: en,
    attributes: [
      {
        name: "pLN",
        value: r.pLN
      },
      {
        name: "pDO",
        value: r.pDO
      },
      {
        name: "pDA",
        value: r.pDA
      },
      {
        name: "input",
        value: r.inputName
      },
      {
        name: "inputInst",
        value: r.inputInstance
      },
      {
        name: "service",
        value: r.dataflowType || ""
      },
      {
        name: "sourceLNodeUuid",
        value: r.sourceLNodeUuid
      },
      {
        name: "sourceDoName",
        value: r.sourceDoName
      },
      {
        name: "sourceDaName",
        value: r.sourceDaName
        // TODO: in the example SSD this was a combination fo SDS and DA name
      },
      {
        name: "uuid",
        value: crypto.randomUUID()
      },
      {
        name: "resourceName",
        value: r.resourceName
      },
      {
        name: "source",
        value: await Oo(
          t.db,
          r.sourceLNodeUuid,
          r.sourceDoName,
          r.sourceDaName
        )
      }
    ],
    parent: null,
    value: "",
    children: []
  };
  return await t.addRecord(i);
}
async function Fp(t, r, i) {
  const s = r.dataObjectSpecifications?.find(
    (O) => O.name === i.signal
  ), u = s?.dataAttributeSpecifications.find(
    (O) => O.name === i.attribute
  ), c = It().lnodeTypes.find((O) => O.lnClass === r.lnClass), p = c?.dataObjects.find((O) => O.name === i.signal), m = p?.dataAttributes.find((O) => O.name === i.attribute);
  if (!c || !p || !m) {
    const O = `LNodeType, DO type or DA type not found for LNode class ${r.lnClass}, DO ${i.signal}, DA ${i.attribute}`;
    throw console.error(O), new Error(O);
  }
  let S;
  if (!s) {
    const O = await $i(
      t,
      r,
      en.prefix
    ), L = {
      name: i.signal,
      desc: p.desc
    };
    S = await Ls(t, L), await t.ensureRelationship(O, S);
  }
  if (!S && (S = await t.db.table(je).get(s.id), !S))
    throw new Error(`DOS element with id ${s.id} not found`);
  if (u || await hs(t, S, i.attribute, m.desc), i.includeQuality) {
    const O = p?.dataAttributes.find((k) => k.name === "q");
    if (!O)
      throw new Error(`DA type 'q' not allowed for DO ${i.signal}`);
    s?.dataAttributeSpecifications.find(
      (k) => k.name === O.name
    ) || await hs(t, S, O.name, O.desc);
  }
  if (i.includeTimestamp) {
    const O = p?.dataAttributes.find((k) => k.name === "t");
    if (!O)
      throw new Error(`DA type 't' not allowed for DO ${i.signal}`);
    s?.dataAttributeSpecifications.find(
      (k) => k.name === O.name
    ) || await hs(t, S, O.name, O.desc);
  }
}
async function hs(t, r, i, s) {
  const d = await Rc(
    t,
    {
      name: i,
      desc: s
    }
  );
  await t.ensureRelationship(r, d);
}
async function Mp(t, r) {
  const i = {
    tagName: "ControlRef",
    namespace: en,
    attributes: [
      {
        name: "pDO",
        value: r.pDO
      },
      {
        name: "pLN",
        value: r.pLN
      },
      {
        name: "controlled",
        value: await Oo(
          t.db,
          r.controlledLNodeUuid,
          r.controlledDoName
        )
      },
      {
        name: "output",
        value: r.output
      },
      {
        name: "outputInst",
        value: r.outputInst
      },
      {
        name: "controlledLNodeUuid",
        value: r.controlledLNodeUuid
      },
      {
        name: "controlledDoName",
        value: r.controlledDoName
      },
      {
        name: "uuid",
        value: crypto.randomUUID()
      }
    ],
    parent: null,
    value: "",
    children: []
  };
  return await t.addRecord(i);
}
async function Oo(t, r, i, s) {
  if (!r) return "";
  const u = await t.table(je).where({ tagName: "LNode" }).and((O) => K(O, "uuid") === r).first();
  if (!u) return "";
  const d = [];
  let c = u;
  const p = ["LNode", "SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
  for (; c && c.parent; ) {
    if (p.includes(c.tagName)) {
      const O = K(c, "name");
      O && d.unshift(O);
    }
    c = await t.table(je).get(c.parent.id);
  }
  const m = (() => {
    const O = u.attributes?.find((J) => J.name === "prefix")?.value || "", L = u.attributes?.find((J) => J.name === "lnClass")?.value || "", k = u.attributes?.find((J) => J.name === "lnInst")?.value || "";
    return `${O}${L}${k}`;
  })();
  d.push(m);
  let S = d.join("/");
  return i && (S += `.${i}`, s && (S += "." + s)), S;
}
async function $p(t, r, i) {
  const s = await Oo(t, r), u = K(i, "input"), d = K(i, "inputInst"), c = K(i, "pDA");
  let p = `${s}.${u}`;
  return d && (p += `(${d})`), c && (p += `.${c}`), p;
}
async function Bp(t, r, i) {
  const s = await Oo(t, r), u = K(i, "output"), d = K(i, "outputInst");
  let c = `${s}.${u}`;
  return d && (c += `(${d})`), c;
}
async function Bi(t, r) {
  const i = await t.db.table(je).get(r);
  if (!i || !i?.parent)
    return [];
  const s = await t.db.table(je).get(i.parent.id);
  return s?.tagName === "Function" || s?.tagName === "SubFunction" ? await t.db.table(je).where({ tagName: "FunctionRef" }).and(
    (c) => K(c, "functionUuid") === K(s, "uuid")
  ).toArray() : [];
}
async function ll(t, r) {
  const i = [];
  for (const s of r)
    (await t.findParentRecordsWithinDepthAndGivenTagName(
      s,
      3,
      ["Application"]
    )).length === 1 && i.push(s);
  return i;
}
async function tu(t, r) {
  const i = /* @__PURE__ */ new Map();
  for (const s of r) {
    const u = await t.findParentRecordsWithinDepthAndGivenTagName(
      s,
      3,
      ["Application"]
    );
    u.length === 1 && i.set(s.id, u[0].id);
  }
  return i;
}
async function nu(t, r, i) {
  const s = await Bi(t, r.id);
  if (s.length === 0)
    return;
  const u = await ll(
    t,
    s
  );
  for (const d of u) {
    let c = (await t.findChildRecords(d, {
      tagNames: ["SignalRole"],
      attrs: [{ name: "name", value: "Input" }]
    }))[0];
    c || (c = await t.addRecord({
      tagName: "SignalRole",
      attributes: [
        { name: "name", value: "Input" },
        { name: "uuid", value: crypto.randomUUID() }
      ],
      parent: null,
      namespace: en,
      value: "",
      children: []
    }), await t.ensureRelationship(d, c));
    for (const p of i) {
      const m = await t.addRecord({
        tagName: "LNodeInputRef",
        attributes: [
          {
            name: "sourceRef",
            value: await $p(t.db, r.uuid, p)
          },
          { name: "sourceRefUuid", value: K(p, "uuid") || "" }
        ],
        parent: null,
        namespace: en,
        value: "",
        children: []
      });
      await t.ensureRelationship(c, m);
    }
  }
}
async function Kp(t, r, i) {
  const s = await Bi(t, r.id);
  if (s.length === 0)
    return;
  const u = await ll(
    t,
    s
  );
  for (const d of u) {
    let c = (await t.findChildRecords(d, {
      tagNames: ["SignalRole"],
      attrs: [{ name: "name", value: "Output" }]
    }))[0];
    c || (c = await t.addRecord({
      tagName: "SignalRole",
      attributes: [
        { name: "name", value: "Output" },
        { name: "uuid", value: crypto.randomUUID() }
      ],
      parent: null,
      namespace: en,
      value: "",
      children: []
    }), await t.ensureRelationship(d, c));
    const p = await t.addRecord({
      tagName: "LNodeOutputRef",
      attributes: [
        {
          name: "controlRef",
          value: await Bp(
            t.db,
            r.uuid,
            i
          )
        },
        { name: "controlRefUuid", value: K(i, "uuid") || "" }
      ],
      parent: null,
      namespace: en,
      value: "",
      children: []
    });
    await t.ensureRelationship(c, p);
  }
}
async function qp(t, r, i, s, u) {
  const d = await Bi(t, r.id);
  if (d.length === 0)
    return;
  const c = await ll(
    t,
    d
  ), p = await Oo(t.db, r.uuid, i, s);
  for (const m of c)
    await Fr(
      t,
      m,
      "Process",
      p,
      r.uuid,
      i,
      s
    ), u === tt.REPORT && await Fr(
      t,
      m,
      "Signalisation",
      p,
      r.uuid,
      i,
      s
    );
}
async function zi(t, r, i, s, u, d) {
  const c = await Bi(
    t,
    r.id
  ), p = await tu(
    t,
    c
  ), m = await Bi(
    t,
    i.id
  ), S = await tu(
    t,
    m
  );
  let O = "", L, k;
  if (s === tt.CONTROL ? (O = await Oo(t.db, i.uuid, u), L = i, k = m.filter(
    ($) => Array.from(S.keys()).includes($.id)
  )) : (O = await Oo(t.db, r.uuid, u, d), L = r, k = c.filter(
    ($) => Array.from(p.keys()).includes($.id)
  )), k.length === 0)
    return;
  for (const $ of k)
    s === tt.REPORT && await Fr(
      t,
      $,
      "Signalisation",
      O,
      L.uuid,
      u,
      d
    ), s === tt.CONTROL && await Fr(
      t,
      $,
      "Control",
      O,
      L.uuid,
      u
    );
  const G = It().lnodeTypes.find(($) => $.lnClass === L.lnClass)?.dataObjects.find(($) => $.name === u);
  if (G) {
    const $ = await t.db.table(je).where({ tagName: "DOType" }).and((X) => K(X, "id") === G.type).first(), ne = K($, "cdc");
    if (ne === "DPL" || ne === "LPL" || ne === "VSD")
      for (const X of k)
        await Fr(
          t,
          X,
          "Information",
          O,
          L.uuid,
          u,
          d
        );
    else {
      const X = L.dataObjectSpecifications?.find((re) => re.name === u)?.dataAttributeSpecifications.find((re) => re.name === d);
      if (await t.db.table(je).where({ tagName: "Val", "parent.id": X?.id }).first())
        for (const re of k)
          await Fr(
            t,
            re,
            "Setting",
            O,
            L.uuid,
            u,
            d
          );
    }
  }
  let W = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
  function M($, ne) {
    const X = $.find((H) => H.id === ne);
    if (!X)
      throw new Error(`FunctionRef with id ${ne} not found`);
    return X;
  }
  if (p.size === 0)
    V = new Set(
      m.filter(
        ($) => Array.from(S.keys()).includes($.id)
      )
    );
  else if (S.size === 0)
    V = new Set(
      c.filter(
        ($) => Array.from(p.keys()).includes($.id)
      )
    );
  else
    for (const [
      $,
      ne
    ] of p)
      for (const [
        X,
        H
      ] of S) {
        const re = M(
          c,
          $
        ), ue = M(
          m,
          X
        );
        ne === H ? (W.add(re), W.add(ue)) : (V.add(re), V.add(ue));
      }
  for (const $ of k)
    V.has($) && await Fr(
      t,
      $,
      "Process",
      O,
      L.uuid,
      u,
      d
    ), W.has($) && await Fr(
      t,
      $,
      "Internal",
      O,
      L.uuid,
      u,
      d
    );
}
async function Fr(t, r, i, s, u, d, c) {
  const p = await Up(
    t,
    r,
    i
  );
  await Vp(
    t,
    p,
    s,
    u,
    d,
    c
  );
}
async function Up(t, r, i) {
  let s = (await t.findChildRecords(r, {
    tagNames: ["SignalRole"],
    attrs: [{ name: "name", value: i }]
  }))[0];
  return s || (s = await t.addRecord({
    tagName: "SignalRole",
    attributes: [
      { name: "name", value: i },
      { name: "uuid", value: crypto.randomUUID() }
    ],
    parent: null,
    namespace: en,
    value: "",
    children: []
  }), await t.ensureRelationship(r, s), s);
}
async function Vp(t, r, i, s, u, d) {
  const c = [
    { name: "data", value: i },
    { name: "lnodeUuid", value: s },
    { name: "doName", value: u }
  ];
  if (d && c.push({ name: "daName", value: d }), !(await t.findChildRecords(r, {
    tagNames: ["LNodeDataRef"],
    attrs: c
  }))[0]) {
    const m = await t.addRecord({
      tagName: "LNodeDataRef",
      attributes: c,
      parent: null,
      namespace: en,
      value: "",
      children: []
    });
    await t.ensureRelationship(r, m);
  }
}
function ru(t) {
  return {
    id: t.id,
    uuid: K(t, "uuid") || "",
    desc: K(t, "desc") || "",
    intAddr: K(t, "intAddr") || "",
    pServT: K(t, "pServT") ?? void 0,
    pLN: K(t, "pLN") || "",
    pDo: K(t, "pDO") || "",
    pDa: K(t, "pDA") || "",
    daName: K(t, "daName") || "",
    doName: K(t, "doName") || "",
    ldInst: K(t, "ldInst") || "",
    lnClass: K(t, "lnClass") || "",
    lnInst: K(t, "lnInst") || "",
    prefix: K(t, "prefix") || "",
    serviceType: K(t, "serviceType") ?? void 0,
    srcCbName: K(t, "srcCBName") || "",
    srcLdInst: K(t, "srcLDInst") || "",
    srcPrefix: K(t, "srcPrefix") || "",
    srcLnClass: K(t, "srcLNClass") || "",
    srcLnInst: K(t, "srcLNInst") || "",
    iedName: K(t, "iedName") || ""
  };
}
function Wp(t) {
  return {
    id: t.id,
    name: K(t, "name") || "",
    confRev: K(t, "confRev") || "",
    datSet: K(t, "datSet") || ""
  };
}
function Gp(t) {
  return {
    id: t.id,
    name: K(t, "name") || ""
  };
}
function ms(t, r) {
  return {
    dataflowType: t.type,
    inputName: t.inputName,
    inputInstance: t.inputInstance,
    sourceLNodeUuid: r.uuid,
    resourceName: "",
    // TODO: https://github.com/SeptKit/set/issues/163
    sourceDoName: t.signal,
    sourceDaName: t.attribute,
    pLN: r.lnClass,
    // SETRULE: set lnClass of source LNode also as preferred LN
    pDO: t.signal,
    // SETRULE: set signal/data object also as preferred DO
    pDA: t.attribute
    // SETRULE: set data attribute also as preferred DA
  };
}
function Hp(t, r) {
  return {
    pDO: "",
    // TODO
    pLN: "",
    // TODO
    output: t.outputName,
    outputInst: t.outputInstance,
    controlledLNodeUuid: r.uuid,
    controlledDoName: t.controlledSignal
  };
}
function Yp(t) {
  return {
    dataflowType: t.dataflowType,
    inputName: t.inputName,
    inputInstance: t.inputInstance,
    sourceLNodeUuid: "",
    resourceName: t.processResource,
    sourceDoName: "",
    sourceDaName: "",
    pLN: t.preferredLNode,
    pDO: t.preferredDataObject,
    pDA: t.preferredDataAttribute
  };
}
async function Ls(t, r) {
  const i = {
    tagName: "DOS",
    namespace: en,
    attributes: [
      {
        name: "name",
        value: r.name
      },
      {
        name: "desc",
        value: r.desc
      }
    ],
    parent: null,
    value: "",
    children: []
  };
  return await t.addRecord(i);
}
async function Rc(t, r) {
  const i = {
    tagName: "DAS",
    namespace: en,
    attributes: [
      {
        name: "name",
        value: r.name
      },
      {
        name: "desc",
        value: r.desc
      }
    ],
    parent: null,
    value: "",
    children: []
  };
  return await t.addRecord(i);
}
function Tc(t) {
  return {
    findAllEnrichedLNodes: r,
    findAllLNodeTypes: i,
    enrichWithDataObjectSpecifications: d
  };
  async function r() {
    const p = await c();
    return p.length ? await d(p) : [];
  }
  async function i() {
    const p = await t.table(je).where({ tagName: "LNodeType" }).toArray(), m = [];
    for (const S of p)
      m.push({
        id: S.id,
        typeId: K(S, "id") ?? "",
        lnClass: K(S, "lnClass") ?? "",
        dataObjects: await s(S)
      });
    return m;
  }
  async function s(p) {
    if (!p.children) return [];
    const m = [];
    for (const S of p.children) {
      if (S.tagName !== "DO") continue;
      const O = await t.table(je).get(S.id);
      O && m.push({
        id: O.id,
        name: K(O, "name") ?? "",
        type: K(O, "type") ?? "",
        desc: K(O, "desc") ?? "",
        dataAttributes: await u(O)
      });
    }
    return m;
  }
  async function u(p) {
    const m = K(p, "type");
    if (!m) return [];
    const S = (await t.table(je).where({ tagName: "DOType" }).toArray()).find((L) => L.attributes?.find((k) => k.name === "id" && k.value === m));
    if (!S || !S.children) return [];
    const O = [];
    for (const L of S.children) {
      if (L.tagName !== "DA") continue;
      const k = await t.table(je).get(L.id);
      k && O.push({
        id: k.id,
        name: K(k, "name") ?? "",
        type: K(k, "type") ?? "",
        desc: K(k, "desc") ?? "",
        bType: K(k, "bType") ?? "",
        fc: K(k, "fc") ?? ""
      });
    }
    return O;
  }
  async function d(p) {
    const m = await t.table(je).where({ tagName: "Private" }).toArray(), S = await t.table(je).where({ tagName: "DOS" }).toArray(), O = await t.table(je).where({ tagName: "DAS" }).toArray(), L = await t.table(je).where({ tagName: "SubscriberLNode" }).toArray();
    return Promise.all(
      p.map(async (k) => {
        const J = m.find(
          (G) => G.parent?.id === k.id && G.parent?.tagName === "LNode" && K(G, "type") === "eIEC61850-6-100"
        );
        if (!J || !J.children)
          return { ...k, dataObjectSpecifications: [] };
        const ee = [];
        for (const G of J.children) {
          if (G.tagName !== "DOS") continue;
          const W = S.find((M) => M.id === G.id);
          if (!W) continue;
          const V = [];
          if (W.children)
            for (const M of W.children) {
              if (M.tagName !== "DAS") continue;
              const $ = O.find((X) => X.id === M.id);
              if (!$) continue;
              let ne = [];
              if ($.children) {
                const X = $.children.filter((re) => re.tagName === "SubscriberLNode"), H = L.filter(
                  (re) => X.some((ue) => ue.id === re.id)
                );
                for (const re of H)
                  ne.push({
                    id: re.id,
                    inputName: K(re, "inputName") ?? "",
                    service: ul(re, "service"),
                    pLN: K(re, "pLN") ?? "",
                    resourceName: K(re, "resourceName") ?? ""
                  });
              }
              V.push({
                id: $.id,
                name: K($, "name") ?? "",
                desc: K($, "desc") ?? "",
                subscriberLNodes: ne
              });
            }
          ee.push({
            id: W.id,
            name: K(W, "name") ?? "",
            desc: K(W, "desc") ?? "",
            dataAttributeSpecifications: V
          });
        }
        return { ...k, dataObjectSpecifications: ee };
      })
    );
  }
  async function c() {
    return (await t.table(je).where({ tagName: "LNode" }).toArray()).map((m) => ({
      id: m.id,
      uuid: K(m, "uuid") ?? "",
      iedName: K(m, "iedName") ?? "",
      prefix: K(m, "prefix") ?? "",
      lnClass: K(m, "lnClass") ?? "",
      lnInst: K(m, "lnInst") ?? "",
      lnType: K(m, "lnType") ?? "",
      ldInst: K(m, "ldInst") ?? "",
      dataObjects: []
    }));
  }
}
function ul(t, r) {
  const i = t?.attributes?.find((u) => u.name === r)?.value;
  if (!i) return;
  switch (i.toUpperCase()) {
    case "GOOSE":
      return tt.GOOSE;
    case "SMV":
      return tt.SMV;
    case "REPORT":
      return tt.REPORT;
    case "WIRED":
      return tt.WIRED;
    case "CONTROL":
      return tt.CONTROL;
    case "INTERNAL":
      return tt.INTERNAL;
    default:
      return;
  }
}
function Xp(t) {
  const r = il(t);
  return {
    findAllExistingConnections: i,
    findAllExistingControlledConnections: s
  };
  async function i() {
    const u = await t.table(je).where({ tagName: "SourceRef" }).toArray();
    if (!u.length) return [];
    const d = [];
    for (const c of u) {
      if (!c.attributes) continue;
      const p = K(c, "sourceLNodeUuid"), m = await t.table(je).where({ tagName: "LNode" }).toArray().then(
        ($) => $.find(
          (ne) => ne.attributes?.some(
            (X) => X.name === "uuid" && X.value === p
          )
        )
      ), S = await r.findParentRecordsWithinDepthAndGivenTagName(
        c,
        3,
        ["LNode"]
      );
      if (S.length != 1) {
        const $ = {
          msg: "Destination LNode record not found for SourceRef id",
          id: c.id
        };
        throw console.error($), new Error(JSON.stringify($));
      }
      const O = await t.table(je).where({ tagName: "IED" }).toArray();
      let L = !1;
      const k = K(m, "iedName");
      if (k) {
        const $ = O.find(
          (ne) => K(ne, "name") === k
        );
        Se($, `IED record not found for iedName: ${k}`), L = K($, "manufacturer") !== "S_IED";
      }
      let J = !1;
      const ee = K(S[0], "iedName");
      if (ee) {
        const $ = O.find(
          (ne) => K(ne, "name") === ee
        );
        Se(
          $,
          `IED record not found for iedName: ${ee}`
        ), J = K($, "manufacturer") !== "S_IED";
      }
      const G = !L || !J;
      let W = !1;
      const V = K(c, "extRefUuid");
      if (V) {
        const $ = await r.findRecord({
          tagNames: ["ExtRef"],
          attr: { name: "uuid", value: V }
        });
        Se($, `ExtRef record not found for uuid: ${V}`), W = !!K($, "srcCBName");
      }
      const M = zp(
        c,
        m?.id ?? null,
        S[0].id,
        W,
        G,
        V
      );
      d.push(M);
    }
    return d;
  }
  async function s() {
    const u = await t.table(je).where({ tagName: "ControlRef" }).toArray();
    if (!u.length) return [];
    const d = [];
    for (const c of u) {
      if (!c.attributes) continue;
      const p = K(c, "controlledLNodeUuid"), m = K(c, "controlledDoName"), S = await t.table(je).where({ tagName: "LNode" }).toArray().then(
        (k) => k.find(
          (J) => J.attributes?.some(
            (ee) => ee.name === "uuid" && ee.value === p
          )
        )?.id
      ) || null, O = await r.findParentRecordsWithinDepthAndGivenTagName(
        c,
        3,
        // ControlRef ->  LNodeOutputs -> Private -> LNode
        ["LNode"]
      );
      if (O.length != 1) {
        const k = {
          msg: "LNode record not found for ControlRef id",
          id: c.id
        };
        throw console.error(k), new Error(JSON.stringify(k));
      }
      const L = {
        controllerLNodeId: O[0].id,
        controlledLNodeId: S,
        controlledDataObject: m || "",
        dataflowType: tt.CONTROL,
        outputInstance: K(c, "outputInst") || "",
        outputName: K(c, "output") || "",
        id: c.id
      };
      d.push(L);
    }
    return d;
  }
}
function zp(t, r, i, s, u, d) {
  return {
    id: t.id,
    sourceLNodeId: r,
    destinationLNodeId: i,
    sourceDataObject: K(t, "sourceDoName") || "",
    sourceDataAttribute: K(t, "sourceDaName") || "",
    dataflowType: ul(t, "service"),
    inputInstance: K(t, "inputInst") || "",
    input: K(t, "input") || "",
    preferredLNode: K(t, "pLN") || "",
    preferredDataObject: K(t, "pDO") || "",
    preferredDataAttribute: K(t, "pDA") || "",
    processResource: K(t, "resourceName") || "",
    isImplemented: s,
    notPossibleToImplement: u,
    extRefUuid: d
  };
}
function Qp(t) {
  const r = il(t), i = Tc(t);
  return {
    findAllSourcePlaceholders: s
  };
  async function s() {
    let p = [];
    const m = await i.findAllEnrichedLNodes();
    if (!m.length) return p;
    for (const O of m) {
      const L = O.dataObjectSpecifications ?? [];
      for (const k of L) {
        const J = k.dataAttributeSpecifications ?? [];
        for (const ee of J) {
          const G = ee.subscriberLNodes ?? [];
          for (const W of G)
            p.push({
              lNodeId: O.id,
              id: W.id,
              dataObject: k.name,
              dataAttribute: ee.name,
              dataflowType: W.service,
              preferredLNode: W.pLN,
              input: W.inputName,
              processResource: W.resourceName,
              isFulfilled: void 0
            });
        }
      }
    }
    return await c(p);
  }
  async function u() {
    const m = (await t.table(je).where({ tagName: "SourceRef" }).toArray()).map(async (O) => ({
      id: O.id,
      uuid: K(O, "uuid") ?? "",
      pDO: K(O, "pDO") ?? "",
      pDA: K(O, "pDA") ?? "",
      pLN: K(O, "pLN") ?? "",
      input: K(O, "input") ?? "",
      inputInst: K(O, "inputInst") ?? "",
      source: K(O, "source") ?? "",
      sourceLNodeUuid: K(O, "sourceLNodeUuid") ?? "",
      dataflowType: ul(O, "service"),
      sourceDoName: K(O, "sourceDoName") ?? "",
      sourceDaName: K(O, "sourceDaName") ?? "",
      // Add the lnClass for finding fulfilled placeholders
      lnClassOfParentLNode: await d(O.id, 3)
    }));
    return await Promise.all(m);
  }
  async function d(p, m) {
    const S = await r.db.table(je).get(p);
    if (S) {
      const O = await r.findParentRecordsWithinDepthAndGivenTagName(
        S,
        m,
        ["LNode"]
      );
      return K(O[0], "lnClass");
    } else return "";
  }
  async function c(p) {
    const m = await u(), S = [];
    for (const O of p) {
      const L = m.some((k) => !(O.preferredLNode && O.preferredLNode !== k.lnClassOfParentLNode || O.dataflowType && O.dataflowType !== k.dataflowType || O.dataObject && O.dataObject !== k.sourceDoName || O.dataAttribute && O.dataAttribute !== k.sourceDaName));
      S.push({
        ...O,
        isFulfilled: L
      });
    }
    return S;
  }
}
const It = /* @__PURE__ */ ol("dataflow/app", () => {
  let t = null;
  const r = Be(""), i = Be([]), s = Be([]), u = Be([]), d = Be([]), c = Be([]), p = Xn(), m = Xn(), S = Xn(), O = Xn();
  async function L(W) {
    k(), t = new ha(W), await t.open(), S.value = Tc(t), m.value = Xp(t), O.value = Qp(t), r.value = W, p.value = _p(t), i.value = await S.value.findAllEnrichedLNodes(), s.value = await S.value.findAllLNodeTypes(), u.value = await m.value.findAllExistingConnections(), d.value = await m.value.findAllExistingControlledConnections(), c.value = await O.value.findAllSourcePlaceholders();
  }
  function k() {
    t && (t.close(), t = null);
  }
  async function J() {
    u.value = await m.value.findAllExistingConnections(), d.value = await m.value.findAllExistingControlledConnections();
  }
  async function ee(W) {
    const M = (await S.value.findAllEnrichedLNodes()).find(($) => $.id === W);
    if (M) {
      const $ = i.value.findIndex((ne) => ne.id === W);
      $ !== -1 && (i.value[$] = M);
    }
  }
  async function G() {
    c.value = await O.value.findAllSourcePlaceholders();
  }
  return {
    // states
    activeFilename: r,
    lnodes: i,
    lnodeTypes: s,
    connections: u,
    controlledConnections: d,
    sourcePlaceholders: c,
    // getters
    dataflowSdk: p,
    // actions
    initApp: L,
    closeDatabase: k,
    refreshConnections: J,
    refreshLNode: ee,
    refreshPlaceholders: G
  };
}), Jp = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Zp = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, eh = { class: "mt-4" }, th = { key: 0 }, nh = { key: 1 }, rh = { class: "mt-4" }, oh = /* @__PURE__ */ Ct({
  __name: "connection-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = It(), { lnodes: s } = jt(i), u = Xe(() => s.value.find((p) => p.id === r.connection.sourceLNodeId)?.dataObjectSpecifications?.find(
      (p) => p.name === r.connection.sourceDataObject
    )), d = Xe(() => u?.value?.dataAttributeSpecifications?.find(
      (c) => c.name === r.connection.sourceDataAttribute
    ));
    return (c, p) => (fe(), ve(Ke, null, [
      p[10] || (p[10] = y("h2", { class: "text-lg font-bold mb-2" }, "Specified Dataflow", -1)),
      c.connection.dataflowType ? (fe(), ve("span", Jp, ce(c.connection.dataflowType), 1)) : Ge("", !0),
      y("dl", Zp, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, ce(c.connection.input), 1)
        ]),
        y("div", null, [
          p[1] || (p[1] = y("dt", null, "Input Instance:", -1)),
          y("dd", null, ce(c.connection.inputInstance || "-"), 1)
        ]),
        y("div", eh, [
          p[2] || (p[2] = y("dt", null, "DO:", -1)),
          y("dd", null, ce(c.connection.sourceDataObject || "-"), 1)
        ]),
        u.value?.desc ? (fe(), ve("div", th, [
          p[3] || (p[3] = y("dt", null, ">DO Desc:", -1)),
          y("dd", null, ce(u.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[4] || (p[4] = y("dt", null, "DA:", -1)),
          y("dd", null, ce(c.connection.sourceDataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (fe(), ve("div", nh, [
          p[5] || (p[5] = y("dt", null, ">DA Desc:", -1)),
          y("dd", null, ce(d.value.desc), 1)
        ])) : Ge("", !0),
        y("div", rh, [
          p[6] || (p[6] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, ce(c.connection.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[7] || (p[7] = y("dt", null, "Preferred DO:", -1)),
          y("dd", null, ce(c.connection.preferredDataObject || "-"), 1)
        ]),
        y("div", null, [
          p[8] || (p[8] = y("dt", null, "Preferred DA:", -1)),
          y("dd", null, ce(c.connection.preferredDataAttribute || "-"), 1)
        ]),
        y("div", null, [
          p[9] || (p[9] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, ce(c.connection.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), ih = { key: 0 }, ah = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, sh = { class: "flex flex-col gap-4" }, lh = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, uh = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, ch = /* @__PURE__ */ Ct({
  __name: "implemented-dataflow-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = It(), { dataflowSdk: s } = jt(i), u = Be(null), d = Be(null), c = Be(null), p = Be("");
    Zs(async () => {
      !r.connection.extRefUuid || !r.connection.isImplemented || (u.value = await s.value.findExtRefByUuid(r.connection.extRefUuid), u.value.srcCbName && (d.value = await s.value.findControlBlock(
        u.value.iedName,
        u.value.ldInst,
        u.value.srcCbName
      ), c.value = await s.value.findDataSet(
        u.value.iedName,
        u.value.ldInst,
        d.value.datSet
      ), p.value = await s.value.findPathToExtRef(u.value.id)));
    });
    const m = Xe(() => `${u.value?.iedName} / ${u.value?.ldInst} / ${u.value?.prefix}${u.value?.lnClass}${u.value?.lnInst}`), S = Xe(() => p.value.split("/").slice(0, -1).join("/")), O = Xe(() => `${u.value?.iedName} / ${u.value?.srcLdInst} / ${u.value?.srcPrefix}${u.value?.srcLnClass}${u.value?.srcLnInst}`);
    return (L, k) => (fe(), ve(Ke, null, [
      k[9] || (k[9] = y("h2", { class: "text-lg font-bold mb-2" }, "Implemented Dataflow", -1)),
      L.connection.isImplemented ? Ge("", !0) : (fe(), ve("p", ih, "Not implemented yet")),
      u.value ? (fe(), ve(Ke, { key: 1 }, [
        L.connection.dataflowType ? (fe(), ve("span", ah, ce(u.value.serviceType), 1)) : Ge("", !0),
        y("div", sh, [
          y("dl", lh, [
            y("div", null, [
              k[0] || (k[0] = y("dt", null, "DO:", -1)),
              y("dd", null, ce(u.value.doName), 1)
            ]),
            y("div", null, [
              k[1] || (k[1] = y("dt", null, "DA:", -1)),
              y("dd", null, ce(u.value.daName), 1)
            ])
          ]),
          y("div", null, [
            k[2] || (k[2] = y("h3", { class: "font-semibold" }, "Sending IED / LD / LN", -1)),
            y("div", null, ce(m.value), 1)
          ]),
          y("div", null, [
            k[3] || (k[3] = y("h3", { class: "font-semibold" }, "Receiving IED / LD / LN", -1)),
            y("div", null, ce(S.value), 1)
          ]),
          y("div", null, [
            k[8] || (k[8] = y("h3", { class: "font-semibold" }, "Control Block and Data Set", -1)),
            y("dl", uh, [
              y("div", null, [
                k[4] || (k[4] = y("dt", null, "Location:", -1)),
                y("dd", null, ce(O.value), 1)
              ]),
              y("div", null, [
                k[5] || (k[5] = y("dt", null, "Control Block:", -1)),
                y("dd", null, ce(d.value?.name), 1)
              ]),
              y("div", null, [
                k[6] || (k[6] = y("dt", null, "ConvRef:", -1)),
                y("dd", null, ce(d.value?.confRev), 1)
              ]),
              y("div", null, [
                k[7] || (k[7] = y("dt", null, "DataSet:", -1)),
                y("dd", null, ce(c.value?.name), 1)
              ])
            ])
          ])
        ])
      ], 64)) : Ge("", !0)
    ], 64));
  }
}), fh = { class: "grid grid-cols-2 gap-4 mt-4" }, dh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, ph = ["value"], hh = { class: "grid grid-cols-2 gap-4 mt-4" }, mh = ["value", "title"], vh = { class: "grid grid-cols-2 gap-4 mt-4" }, yh = ["value", "title"], gh = { class: "grid grid-cols-2 gap-4 mt-4" }, bh = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, wh = ["value"], _h = { class: "grid grid-cols-2 gap-4 mt-4" }, xh = { class: "flex items-center" }, Nh = { class: "flex items-center" }, Rh = ["value"], Th = { class: "grid grid-cols-2 gap-4 mt-4" }, Ch = { class: "mt-4" }, Eh = { class: "mt-4" }, Oh = { class: "mt-4 flex items-center" }, Ah = /* @__PURE__ */ Ct({
  __name: "dataflow-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, i = Jn(), s = It(), { lnodeTypes: u, dataflowSdk: d } = jt(s), c = Be(k()), p = Be(!1), m = Be([]), S = Be(!0);
    qo(async () => {
      m.value = await d.value.findExistingInputs(r.destinationLNode);
    }), Ut(p, (V) => {
      V ? c.value.inputName = "" : c.value.inputName = c.value.signal;
    }), Ut(
      [
        () => c.value.inputName,
        () => c.value.attribute
      ],
      async ([V, M]) => {
        const $ = await d.value.calculateNextInputInstance(
          V,
          M,
          r.destinationLNode
        );
        c.value.inputInstance = $.toString();
      }
    ), Ut(
      () => c.value.signal,
      (V, M) => {
        const $ = c.value.inputName !== M && c.value.inputName !== "";
        !p.value && !$ && (c.value.inputName = V);
      }
    ), Zs(() => {
      switch (W(), c.value.type = r.dataflowType, r.dataflowType) {
        case tt.GOOSE:
        case tt.SMV:
          c.value.includeQuality = !0, c.value.includeTimestamp = !1;
          break;
        case tt.REPORT:
          c.value.includeQuality = !0, c.value.includeTimestamp = !0;
          break;
        default:
          c.value.includeQuality = !1, c.value.includeTimestamp = !1;
      }
    });
    const O = Xe(() => !r.dataflowType || !r.sourceLNode ? [] : u.value.find((V) => V.typeId === r.sourceLNode.lnType)?.dataObjects.filter(
      (V) => V.dataAttributes.some(
        (M) => Bo[r.dataflowType]?.includes(M.fc)
      )
    ).sort((V, M) => V.name.localeCompare(M.name)) ?? []), L = Xe(() => !r.dataflowType || !r.sourceLNode ? [] : u.value.find((V) => V.typeId === r.sourceLNode.lnType)?.dataObjects.find((V) => V.name === c.value.signal)?.dataAttributes.filter(
      (V) => Bo[r.dataflowType].includes(V.fc)
    ).filter((V) => !Mi.includes(V.name)).sort((V, M) => V.name.localeCompare(M.name)) ?? []);
    Ut(
      [() => O.value, () => r.sourcePlaceholder],
      ([V, M]) => {
        if (M && V.length > 0) {
          const $ = V.find((ne) => ne.name === M.dataObject);
          c.value.signal = $ ? $.name : "";
        }
      },
      { immediate: !0 }
    ), Ut(
      [
        () => L.value,
        () => r.sourcePlaceholder,
        () => c.value.signal
      ],
      ([V, M, $]) => {
        if (M && V.length > 0) {
          const ne = V.find((X) => X.name === M.dataAttribute);
          ne && $ === M.dataObject && (c.value.attribute = ne.name);
        }
      },
      { immediate: !0 }
    ), Ut(
      [
        () => c.value.signal,
        () => c.value.attribute,
        () => p.value,
        () => r.sourcePlaceholder
      ],
      ([V, M, $, ne]) => {
        ne && ne.input && V !== "" && M !== "" && $ === !1 && (c.value.inputName = ne.input);
      },
      { immediate: !0 }
    );
    function k() {
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
    function J(V) {
      for (const M of V)
        c.value[M] = "";
    }
    async function ee() {
      try {
        if (!G(c.value))
          return;
        await d.value.createConnection(
          c.value,
          r.sourceLNode,
          r.destinationLNode,
          S.value
        ), i.handleClose();
      } catch (V) {
        console.error("Error creating dataflow:", V), alert(`Error creating dataflow: ${V instanceof Error ? V.message : "Unknown error"}`);
      }
    }
    function G(V) {
      return V.type ? V.signal ? V.attribute ? V.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function W() {
      c.value = k(), p.value = !1, S.value = !0;
    }
    return (V, M) => (fe(), ve(Ke, null, [
      M[27] || (M[27] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("form", {
        method: "dialog",
        onSubmit: ee
      }, [
        y("div", fh, [
          M[11] || (M[11] = y("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          y("select", dh, [
            y("option", {
              value: r.sourceLNode.id
            }, ce(De(Yn)(V.sourceLNode)), 9, ph)
          ])
        ]),
        y("div", hh, [
          M[13] || (M[13] = y("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          rt(y("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[0] || (M[0] = ($) => c.value.signal = $),
            onChange: M[1] || (M[1] = ($) => J(["attribute"]))
          }, [
            M[12] || (M[12] = y("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (fe(!0), ve(Ke, null, Tt(O.value, ($) => (fe(), ve("option", {
              key: $.name,
              value: $.name,
              title: $.desc ? `Desc: ${$.desc}` : ""
            }, ce($.desc ? $.name + " ⓘ" : $.name), 9, mh))), 128))
          ], 544), [
            [yn, c.value.signal]
          ])
        ]),
        y("div", vh, [
          M[15] || (M[15] = y("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          rt(y("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[2] || (M[2] = ($) => c.value.attribute = $)
          }, [
            M[14] || (M[14] = y("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (fe(!0), ve(Ke, null, Tt(L.value, ($) => (fe(), ve("option", {
              key: $.name,
              value: $.name,
              title: $.desc ? `Desc: ${$.desc}` : ""
            }, ce($.desc ? $.name + " ⓘ" : $.name), 9, yh))), 128))
          ], 512), [
            [yn, c.value.attribute]
          ])
        ]),
        M[24] || (M[24] = y("hr", { class: "solid mt-4" }, null, -1)),
        y("div", gh, [
          M[16] || (M[16] = y("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          y("select", bh, [
            y("option", {
              value: r.destinationLNode.id
            }, ce(De(Yn)(V.destinationLNode)), 9, wh)
          ])
        ]),
        y("div", _h, [
          y("fieldset", null, [
            M[19] || (M[19] = y("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
            y("div", xh, [
              rt(y("input", {
                type: "radio",
                id: "dataflow-new-input",
                name: "input",
                "onUpdate:modelValue": M[3] || (M[3] = ($) => p.value = $),
                value: !1,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [Kr, p.value]
              ]),
              M[17] || (M[17] = y("label", { for: "dataflow-new-input" }, "New Input", -1))
            ]),
            y("div", Nh, [
              rt(y("input", {
                type: "radio",
                id: "dataflow-existing-input",
                name: "input",
                "onUpdate:modelValue": M[4] || (M[4] = ($) => p.value = $),
                value: !0,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [Kr, p.value]
              ]),
              M[18] || (M[18] = y("label", { for: "dataflow-existing-input" }, "Existing Input", -1))
            ])
          ]),
          p.value ? Ge("", !0) : rt((fe(), ve("input", {
            key: 0,
            "aria-label": "New Input Name",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": M[5] || (M[5] = ($) => c.value.inputName = $)
          }, null, 512)), [
            [Ar, c.value.inputName]
          ]),
          p.value ? rt((fe(), ve("select", {
            key: 1,
            "aria-label": "Existing Input Name Select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[6] || (M[6] = ($) => c.value.inputName = $)
          }, [
            (fe(!0), ve(Ke, null, Tt(m.value, ($) => (fe(), ve("option", {
              key: $,
              value: $
            }, ce($), 9, Rh))), 128))
          ], 512)), [
            [yn, c.value.inputName]
          ]) : Ge("", !0)
        ]),
        y("div", Th, [
          M[20] || (M[20] = y("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          rt(y("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": M[7] || (M[7] = ($) => c.value.inputInstance = $)
          }, null, 512), [
            [Ar, c.value.inputInstance]
          ])
        ]),
        M[25] || (M[25] = y("hr", { class: "solid mt-4" }, null, -1)),
        y("div", Ch, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[8] || (M[8] = ($) => c.value.includeQuality = $),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [Co, c.value.includeQuality]
          ]),
          M[21] || (M[21] = y("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        y("div", Eh, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[9] || (M[9] = ($) => c.value.includeTimestamp = $),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [Co, c.value.includeTimestamp]
          ]),
          M[22] || (M[22] = y("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        y("div", Oh, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[10] || (M[10] = ($) => S.value = $),
            class: "checkbox mr-2",
            id: "dataflow-checkbox-add-references"
          }, null, 512), [
            [Co, S.value]
          ]),
          M[23] || (M[23] = y("label", { for: "dataflow-checkbox-add-references" }, "Add References to Application", -1))
        ]),
        M[26] || (M[26] = y("div", { class: "modal-action" }, [
          y("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            type: "submit",
            "data-testId": "save-dataflow-connection"
          }, " Save ")
        ], -1))
      ], 32)
    ], 64));
  }
}), Dh = { class: "grid grid-cols-2 gap-4 mt-4" }, Ih = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Sh = ["value"], Ph = { class: "grid grid-cols-2 gap-4 mt-4" }, Lh = ["value", "title"], kh = { class: "grid grid-cols-2 gap-4 mt-4" }, jh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Fh = ["value"], Mh = { class: "grid grid-cols-2 gap-4 mt-4" }, $h = { class: "flex items-center" }, Bh = { class: "flex items-center" }, Kh = ["value"], qh = { class: "grid grid-cols-2 gap-4 mt-4" }, Uh = { class: "mt-4 flex items-center" }, Vh = /* @__PURE__ */ Ct({
  __name: "dataflow-controlled-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {}
  },
  setup(t) {
    const r = t, i = Jn(), s = It(), { lnodeTypes: u, dataflowSdk: d } = jt(s), c = Be(
      L()
    ), p = Be(!1), m = Be([]), S = Be(!0);
    qo(async () => {
      m.value = await d.value.findExistingOutputs(r.sourceLNode);
    }), Ut(p, (ee) => {
      ee ? c.value.outputName = "" : c.value.outputName = c.value.controlledSignal;
    }), Ut(
      () => c.value.outputName,
      async (ee) => {
        const G = await d.value.calculateNextOutputInstance(
          ee,
          r.sourceLNode
        );
        c.value.outputInstance = G.toString();
      }
    ), Ut(
      () => c.value.controlledSignal,
      (ee, G) => {
        const W = c.value.outputName !== G && c.value.outputName !== "";
        !p.value && !W && (c.value.outputName = ee);
      }
    );
    const O = Xe(() => r.destinationLNode ? u.value.find((G) => G.typeId === r.destinationLNode.lnType)?.dataObjects.map((G) => ({
      name: G.name,
      desc: G.desc
    })).sort((G, W) => G.name.localeCompare(W.name)) ?? [] : []);
    function L() {
      return {
        type: tt.CONTROL,
        controlledSignal: "",
        outputName: "",
        outputInstance: ""
      };
    }
    async function k() {
      try {
        if (!J(c.value))
          return;
        await d.value.createControlledConnection(
          c.value,
          r.sourceLNode,
          r.destinationLNode,
          S.value
        ), i.handleClose();
      } catch (ee) {
        console.error("Error creating controlled dataflow:", ee), alert(`Error creating controlled dataflow: ${ee instanceof Error ? ee.message : "Unknown error"}`);
      }
    }
    function J(ee) {
      return ee.type ? ee.outputName ? ee.controlledSignal ? !0 : (alert("Please select a controlled signal (DO)."), !1) : (alert("Please select an controller output name."), !1) : (alert("Please select a dataflow type."), !1);
    }
    return (ee, G) => (fe(), ve(Ke, null, [
      G[16] || (G[16] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", Dh, [
        G[7] || (G[7] = y("label", {
          for: "destination-select",
          class: "col-start-1 self-center"
        }, "Controlled", -1)),
        y("select", Ih, [
          y("option", {
            value: r.destinationLNode.id
          }, ce(De(Yn)(ee.destinationLNode)), 9, Sh)
        ])
      ]),
      y("div", Ph, [
        G[9] || (G[9] = y("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Controlled Signal (DO)", -1)),
        rt(y("select", {
          id: "data-object-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": G[0] || (G[0] = (W) => c.value.controlledSignal = W)
        }, [
          G[8] || (G[8] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(O.value, (W) => (fe(), ve("option", {
            key: W.name,
            value: W.name,
            title: W.desc ? `Desc: ${W.desc}` : ""
          }, ce(W.desc ? W.name + " ⓘ" : W.name), 9, Lh))), 128))
        ], 512), [
          [yn, c.value.controlledSignal]
        ])
      ]),
      G[17] || (G[17] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", kh, [
        G[10] || (G[10] = y("label", {
          for: "source-select",
          class: "col-start-1 self-center"
        }, "Controller", -1)),
        y("select", jh, [
          y("option", {
            value: r.sourceLNode.id
          }, ce(De(Yn)(ee.sourceLNode)), 9, Fh)
        ])
      ]),
      y("div", Mh, [
        y("fieldset", null, [
          G[13] || (G[13] = y("legend", { class: "col-start-1 self-start" }, "Controller Output Name", -1)),
          y("div", $h, [
            rt(y("input", {
              type: "radio",
              id: "dataflow-control-new-output",
              name: "output",
              "onUpdate:modelValue": G[1] || (G[1] = (W) => p.value = W),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Kr, p.value]
            ]),
            G[11] || (G[11] = y("label", { for: "dataflow-control-new-output" }, "New Output", -1))
          ]),
          y("div", Bh, [
            rt(y("input", {
              type: "radio",
              id: "dataflow-control-existing-output",
              name: "output",
              "onUpdate:modelValue": G[2] || (G[2] = (W) => p.value = W),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Kr, p.value]
            ]),
            G[12] || (G[12] = y("label", { for: "dataflow-control-existing-output" }, "Existing Output", -1))
          ])
        ]),
        p.value ? Ge("", !0) : rt((fe(), ve("input", {
          key: 0,
          "aria-label": "New Output Name",
          required: "",
          type: "text",
          placeholder: "Output Name",
          class: "input col-start-2",
          "onUpdate:modelValue": G[3] || (G[3] = (W) => c.value.outputName = W)
        }, null, 512)), [
          [Ar, c.value.outputName]
        ]),
        p.value ? rt((fe(), ve("select", {
          key: 1,
          "aria-label": "Existing Output Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": G[4] || (G[4] = (W) => c.value.outputName = W)
        }, [
          (fe(!0), ve(Ke, null, Tt(m.value, (W) => (fe(), ve("option", {
            key: W,
            value: W
          }, ce(W), 9, Kh))), 128))
        ], 512)), [
          [yn, c.value.outputName]
        ]) : Ge("", !0)
      ]),
      y("div", qh, [
        G[14] || (G[14] = y("label", {
          for: "output-instance-input",
          class: "col-start-1 self-center"
        }, "Output Instance", -1)),
        rt(y("input", {
          id: "output-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": G[5] || (G[5] = (W) => c.value.outputInstance = W)
        }, null, 512), [
          [Ar, c.value.outputInstance]
        ])
      ]),
      y("div", Uh, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": G[6] || (G[6] = (W) => S.value = W),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [Co, S.value]
        ]),
        G[15] || (G[15] = y("label", { for: "dataflow-control-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      G[18] || (G[18] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", { class: "modal-action" }, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: k,
          "data-testId": "save-dataflow-connection"
        }, " Save ")
      ])
    ], 64));
  }
}), Wh = { class: "grid grid-cols-2 gap-4 mt-4" }, Gh = ["value", "disabled"], Hh = /* @__PURE__ */ Ct({
  __name: "dataflow-creation",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, i = Be(
      r.sourcePlaceholder && r.sourcePlaceholder.dataflowType ? r.sourcePlaceholder.dataflowType : null
    ), s = Xe(
      () => Object.values(tt).filter((c) => c !== tt.INTERNAL)
    ), u = Xe(
      () => r.sourceLNode?.lnClass === "IHMI" || r.sourceLNode?.lnClass === "ITCI"
    );
    function d(c) {
      const p = c.target.value;
      i.value = p;
    }
    return (c, p) => (fe(), ve(Ke, null, [
      p[3] || (p[3] = y("h3", { class: "font-bold text-lg" }, "Create Dataflow", -1)),
      y("div", Wh, [
        p[2] || (p[2] = y("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        rt(y("select", {
          id: "dataflow-type-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": p[0] || (p[0] = (m) => i.value = m),
          onChange: d
        }, [
          p[1] || (p[1] = y("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(s.value, (m) => (fe(), ve("option", {
            key: m,
            value: m,
            disabled: m === De(tt).CONTROL && !u.value
          }, ce(m), 9, Gh))), 128))
        ], 544), [
          [yn, i.value]
        ])
      ]),
      i.value !== De(tt).CONTROL ? (fe(), Zt(Ah, {
        key: 0,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: i.value,
        sourcePlaceholder: c.sourcePlaceholder
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType", "sourcePlaceholder"])) : (fe(), Zt(Vh, {
        key: 1,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: i.value
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType"]))
    ], 64));
  }
}), Yh = { class: "grid grid-cols-2 gap-4 items-center" }, Xh = { class: "grid grid-cols-2 gap-4 items-center" }, zh = ["value", "disabled"], Qh = { class: "grid grid-cols-2 gap-4 items-center" }, Jh = ["value", "title"], Zh = { class: "grid grid-cols-2 gap-4 items-center" }, em = ["value", "title"], tm = { class: "grid grid-cols-2 gap-4 items-center" }, nm = { class: "grid grid-cols-2 gap-4 items-center" }, rm = ["value"], om = { class: "flex items-center" }, im = /* @__PURE__ */ Ct({
  __name: "source-placeholder-port-creation",
  props: {
    sourceLNode: {}
  },
  setup(t) {
    const r = t, i = Jn(), s = It(), { lnodeTypes: u, dataflowSdk: d } = jt(s), c = Be(
      J()
    ), p = Be(!0);
    async function m(G) {
      try {
        await d.value.createSourcePlaceholder(
          r.sourceLNode,
          c.value,
          p.value
        ), i.handleClose();
      } catch (W) {
        console.error("Error creating source placeholder port:", W), alert(`Error creating placeholder: ${W instanceof Error ? W.message : "Unknown error"}`);
      }
    }
    const S = Xe(
      () => [...u.value].sort((G, W) => G.lnClass.localeCompare(W.lnClass))
    ), O = Xe(
      () => Object.values(tt).filter((G) => G !== tt.INTERNAL)
    ), L = Xe(() => {
      const G = u.value.find((W) => W.typeId === r.sourceLNode.lnType);
      return G ? c.value.dataflowType ? G.dataObjects.filter(
        (W) => W.dataAttributes.some(
          (V) => Bo[c.value.dataflowType].includes(
            V.fc
          )
        )
      ).sort((W, V) => W.name.localeCompare(V.name)) : G.dataObjects.sort((W, V) => W.name.localeCompare(V.name)) : [];
    }), k = Xe(() => {
      const G = u.value.find((W) => W.typeId === r.sourceLNode.lnType)?.dataObjects.find((W) => W.name === c.value.dataObject);
      return G ? c.value.dataflowType ? G.dataAttributes.filter(
        (W) => Bo[c.value.dataflowType].includes(
          W.fc
        )
      ).filter((W) => !Mi.includes(W.name)).sort((W, V) => W.name.localeCompare(V.name)) : G.dataAttributes.filter((W) => !Mi.includes(W.name)).sort((W, V) => W.name.localeCompare(V.name)) : [];
    });
    function J() {
      return {
        dataObject: "",
        dataAttribute: "",
        inputName: "",
        dataflowType: "",
        processResource: "",
        preferredLNode: ""
      };
    }
    function ee(G) {
      for (const W of G)
        c.value[W] = "";
    }
    return (G, W) => (fe(), ve("form", {
      onSubmit: m,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      W[20] || (W[20] = y("h3", { class: "font-bold text-lg" }, "Create Placeholder - Provide data", -1)),
      y("div", Yh, [
        W[9] || (W[9] = y("label", { for: "input-name" }, "Input Name", -1)),
        rt(y("input", {
          required: "",
          id: "input-name",
          name: "inputName",
          "onUpdate:modelValue": W[0] || (W[0] = (V) => c.value.inputName = V),
          placeholder: "Input Name",
          class: "input col-start-2"
        }, null, 512), [
          [Ar, c.value.inputName]
        ])
      ]),
      y("div", Xh, [
        W[11] || (W[11] = y("label", { for: "dataflow-type-select" }, "Dataflow Type", -1)),
        rt(y("select", {
          id: "dataflow-type-select",
          name: "dataflowType",
          class: "select col-start-2",
          "onUpdate:modelValue": W[1] || (W[1] = (V) => c.value.dataflowType = V),
          onChange: W[2] || (W[2] = (V) => ee(["dataObject", "dataAttribute"]))
        }, [
          W[10] || (W[10] = y("option", { value: "" }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(O.value, (V) => (fe(), ve("option", {
            key: V,
            value: V,
            disabled: V === De(tt).CONTROL
          }, ce(V), 9, zh))), 128))
        ], 544), [
          [yn, c.value.dataflowType]
        ])
      ]),
      y("div", Qh, [
        W[13] || (W[13] = y("label", { for: "data-object-select" }, "Data Object", -1)),
        rt(y("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": W[3] || (W[3] = (V) => c.value.dataObject = V),
          onChange: W[4] || (W[4] = (V) => ee(["dataAttribute"]))
        }, [
          W[12] || (W[12] = y("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(L.value, (V) => (fe(), ve("option", {
            key: V.id,
            value: V.name,
            title: V.desc ? `Desc: ${V.desc}` : ""
          }, ce(V.desc ? V.name + " ⓘ" : V.name), 9, Jh))), 128))
        ], 544), [
          [yn, c.value.dataObject]
        ])
      ]),
      y("div", Zh, [
        W[15] || (W[15] = y("label", { for: "data-attribute-select" }, "Data Attribute", -1)),
        rt(y("select", {
          required: "",
          id: "data-attribute-select",
          name: "data attribute",
          "onUpdate:modelValue": W[5] || (W[5] = (V) => c.value.dataAttribute = V),
          class: "select col-start-2"
        }, [
          W[14] || (W[14] = y("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(k.value, (V) => (fe(), ve("option", {
            key: V.id,
            value: V.name,
            title: V.desc ? `Desc: ${V.desc}` : ""
          }, ce(V.desc ? V.name + " ⓘ" : V.name), 9, em))), 128))
        ], 512), [
          [yn, c.value.dataAttribute]
        ])
      ]),
      y("div", tm, [
        W[16] || (W[16] = y("label", { for: "process-resource-input" }, "Process Resource", -1)),
        rt(y("input", {
          id: "process-resource-input",
          name: "processResource",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": W[6] || (W[6] = (V) => c.value.processResource = V)
        }, null, 512), [
          [Ar, c.value.processResource]
        ])
      ]),
      y("div", nm, [
        W[18] || (W[18] = y("label", { for: "preferred-lnode-select" }, "Preferred LNode", -1)),
        rt(y("select", {
          id: "preferred-lnode-select",
          name: "preferredLNode",
          class: "select col-start-2",
          "onUpdate:modelValue": W[7] || (W[7] = (V) => c.value.preferredLNode = V)
        }, [
          W[17] || (W[17] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(S.value, (V) => (fe(), ve("option", {
            key: V.lnClass,
            value: V.lnClass
          }, ce(V.lnClass), 9, rm))), 128))
        ], 512), [
          [yn, c.value.preferredLNode]
        ])
      ]),
      y("div", om, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": W[8] || (W[8] = (V) => p.value = V),
          class: "checkbox mr-2",
          id: "source-placeholder-checkbox-add-references"
        }, null, 512), [
          [Co, p.value]
        ]),
        W[19] || (W[19] = y("label", { for: "source-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      W[21] || (W[21] = y("div", { class: "modal-action" }, [
        y("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), am = { class: "grid grid-cols-2 gap-4 mt-4" }, sm = { class: "flex items-center" }, lm = { class: "flex items-center" }, um = ["value"], cm = { class: "grid grid-cols-2 gap-4 mt-4" }, fm = { class: "grid grid-cols-2 gap-4 mt-4" }, dm = ["value", "disabled"], pm = { class: "grid grid-cols-2 gap-4 mt-4" }, hm = ["value"], mm = { class: "grid grid-cols-2 gap-4 mt-4" }, vm = ["value", "title"], ym = { class: "grid grid-cols-2 gap-4 mt-4" }, gm = ["value", "title"], bm = { class: "grid grid-cols-2 gap-4 mt-4" }, wm = { class: "mt-4 flex items-center" }, _m = /* @__PURE__ */ Ct({
  __name: "destination-placeholder-port-creation",
  props: {
    destinationLNode: {}
  },
  setup(t) {
    const r = t, i = Jn(), s = It(), { lnodeTypes: u, dataflowSdk: d } = jt(s), c = Be(
      ee()
    ), p = Be(!0), m = Be(!1), S = Be([]);
    qo(async () => {
      S.value = await d.value.findExistingInputs(r.destinationLNode);
    }), Ut(m, () => {
      c.value.inputName = "";
    }), Ut(
      [
        () => c.value.inputName,
        () => c.value.preferredDataAttribute
      ],
      async ([V, M]) => {
        if (!V) {
          c.value.inputInstance = "";
          return;
        }
        const $ = await d.value.calculateNextInputInstance(
          V,
          M,
          r.destinationLNode
        );
        c.value.inputInstance = $.toString();
      }
    );
    const O = Xe(
      () => Object.values(tt).filter((V) => V !== tt.INTERNAL)
    ), L = Xe(
      () => [...u.value].sort((V, M) => V.lnClass.localeCompare(M.lnClass))
    ), k = Xe(() => {
      const V = u.value.find(
        (M) => M.lnClass === c.value.preferredLNode
      );
      return V ? c.value.dataflowType ? V.dataObjects.filter(
        (M) => M.dataAttributes.some(
          ($) => Bo[c.value.dataflowType].includes($.fc)
        )
      ).map((M) => ({
        name: M.name,
        desc: M.desc
      })).sort((M, $) => M.name.localeCompare($.name)) : V.dataObjects.map((M) => ({
        name: M.name,
        desc: M.desc
      })).sort((M, $) => M.name.localeCompare($.name)) : [];
    }), J = Xe(() => {
      const V = u.value.find(
        ($) => $.lnClass === c.value.preferredLNode
      );
      if (!V) return [];
      const M = V.dataObjects.find(
        ($) => $.name === c.value.preferredDataObject
      );
      return M ? c.value.dataflowType ? M.dataAttributes.filter(
        ($) => Bo[c.value.dataflowType].includes($.fc)
      ).filter(($) => !Mi.includes($.name)).sort(($, ne) => $.name.localeCompare(ne.name)) : M.dataAttributes.filter(($) => !Mi.includes($.name)).sort(($, ne) => $.name.localeCompare(ne.name)) : [];
    });
    function ee() {
      return {
        dataflowType: null,
        inputName: "",
        inputInstance: "",
        preferredLNode: "",
        preferredDataObject: "",
        preferredDataAttribute: "",
        processResource: ""
      };
    }
    async function G() {
      try {
        await d.value.createDestinationPlaceholder(
          c.value,
          r.destinationLNode,
          p.value
        ), i.handleClose();
      } catch (V) {
        console.error("Error creating destination placeholder port:", V), alert(`Error creating placeholder: ${V instanceof Error ? V.message : "Unknown error"}`);
      }
    }
    function W(V) {
      for (const M of V)
        c.value[M] = "";
    }
    return (V, M) => (fe(), ve("form", {
      method: "dialog",
      onSubmit: G
    }, [
      M[28] || (M[28] = y("h3", { class: "font-bold text-lg" }, "Create Placeholder - Receive data from", -1)),
      y("div", am, [
        y("fieldset", null, [
          M[16] || (M[16] = y("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
          y("div", sm, [
            rt(y("input", {
              type: "radio",
              id: "destination-placeholder-new-input",
              name: "input",
              "onUpdate:modelValue": M[0] || (M[0] = ($) => m.value = $),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Kr, m.value]
            ]),
            M[14] || (M[14] = y("label", { for: "destination-placeholder-new-input" }, "New Input", -1))
          ]),
          y("div", lm, [
            rt(y("input", {
              type: "radio",
              id: "destination-placeholder-existing-input",
              name: "input",
              "onUpdate:modelValue": M[1] || (M[1] = ($) => m.value = $),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Kr, m.value]
            ]),
            M[15] || (M[15] = y("label", { for: "destination-placeholder-existing-input" }, "Existing Input", -1))
          ])
        ]),
        m.value ? Ge("", !0) : rt((fe(), ve("input", {
          key: 0,
          "aria-label": "New Input Name",
          required: "",
          type: "text",
          placeholder: "Input Name",
          class: "input col-start-2",
          "onUpdate:modelValue": M[2] || (M[2] = ($) => c.value.inputName = $)
        }, null, 512)), [
          [Ar, c.value.inputName]
        ]),
        m.value ? rt((fe(), ve("select", {
          key: 1,
          "aria-label": "Existing Input Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": M[3] || (M[3] = ($) => c.value.inputName = $)
        }, [
          (fe(!0), ve(Ke, null, Tt(S.value, ($) => (fe(), ve("option", {
            key: $,
            value: $
          }, ce($), 9, um))), 128))
        ], 512)), [
          [yn, c.value.inputName]
        ]) : Ge("", !0)
      ]),
      y("div", cm, [
        M[17] || (M[17] = y("label", {
          for: "input-instance-input",
          class: "col-start-1 self-center"
        }, "Input Instance", -1)),
        rt(y("input", {
          id: "input-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": M[4] || (M[4] = ($) => c.value.inputInstance = $)
        }, null, 512), [
          [Ar, c.value.inputInstance]
        ])
      ]),
      y("div", fm, [
        M[19] || (M[19] = y("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        rt(y("select", {
          id: "dataflow-type-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[5] || (M[5] = ($) => c.value.dataflowType = $),
          onChange: M[6] || (M[6] = ($) => W(["preferredDataObject"]))
        }, [
          M[18] || (M[18] = y("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(O.value, ($) => (fe(), ve("option", {
            key: $,
            value: $,
            disabled: $ === De(tt).CONTROL
          }, ce($), 9, dm))), 128))
        ], 544), [
          [yn, c.value.dataflowType]
        ])
      ]),
      y("div", pm, [
        M[21] || (M[21] = y("label", {
          for: "preferred-lnode-select",
          class: "col-start-1 self-center"
        }, "Preferred LNode", -1)),
        rt(y("select", {
          id: "preferred-lnode-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[7] || (M[7] = ($) => c.value.preferredLNode = $),
          onChange: M[8] || (M[8] = ($) => W(["preferredDataObject"]))
        }, [
          M[20] || (M[20] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(L.value, ($) => (fe(), ve("option", {
            key: $.id,
            value: $.lnClass
          }, ce($.lnClass), 9, hm))), 128))
        ], 544), [
          [yn, c.value.preferredLNode]
        ])
      ]),
      y("div", mm, [
        M[23] || (M[23] = y("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Object", -1)),
        rt(y("select", {
          id: "data-object-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[9] || (M[9] = ($) => c.value.preferredDataObject = $),
          onChange: M[10] || (M[10] = ($) => W(["preferredDataAttribute"]))
        }, [
          M[22] || (M[22] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(k.value, ($) => (fe(), ve("option", {
            key: $.name,
            value: $.name,
            title: $.desc ? `Desc: ${$.desc}` : ""
          }, ce($.desc ? $.name + " ⓘ" : $.name), 9, vm))), 128))
        ], 544), [
          [yn, c.value.preferredDataObject]
        ])
      ]),
      y("div", ym, [
        M[25] || (M[25] = y("label", {
          for: "data-attribute-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Attribute", -1)),
        rt(y("select", {
          id: "data-attribute-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[11] || (M[11] = ($) => c.value.preferredDataAttribute = $)
        }, [
          M[24] || (M[24] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (fe(!0), ve(Ke, null, Tt(J.value, ($) => (fe(), ve("option", {
            key: $.name,
            value: $.name,
            title: $.desc ? `Desc: ${$.desc}` : ""
          }, ce($.desc ? $.name + " ⓘ" : $.name), 9, gm))), 128))
        ], 512), [
          [yn, c.value.preferredDataAttribute]
        ])
      ]),
      y("div", bm, [
        M[26] || (M[26] = y("label", {
          for: "process-resource-input",
          class: "col-start-1 self-center"
        }, "Process Resource", -1)),
        rt(y("input", {
          id: "process-resource-input",
          type: "text",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": M[12] || (M[12] = ($) => c.value.processResource = $)
        }, null, 512), [
          [Ar, c.value.processResource]
        ])
      ]),
      y("div", wm, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": M[13] || (M[13] = ($) => p.value = $),
          class: "checkbox mr-2",
          id: "destination-placeholder-checkbox-add-references"
        }, null, 512), [
          [Co, p.value]
        ]),
        M[27] || (M[27] = y("label", { for: "destination-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      M[29] || (M[29] = y("div", { class: "modal-action" }, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          type: "submit"
        }, "Save")
      ], -1))
    ], 32));
  }
}), xm = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_80px]" }, Nm = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs" }, Rm = { class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-center" }, Tm = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs" }, Cm = { class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-center" }, Em = { class: "col-span-full row-start-3" }, Om = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] h-[50px]" }, Am = { class: "col-start-1 col-span-1 self-center justify-self-end" }, Dm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Im = { class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1" }, Sm = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Pm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Qi = /* @__PURE__ */ Ct({
  __name: "single-dataflow",
  props: {
    sendingSecondaryLabel: {},
    receivingSecondaryLabel: {},
    sendingPrimaryLabel: {},
    receivingPrimaryLabel: {},
    dataflowType: {},
    sendingPortLabels: {},
    receivingPortLabels: {}
  },
  setup(t) {
    return (r, i) => (fe(), ve("div", xm, [
      i[2] || (i[2] = y("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3" }, null, -1)),
      y("div", Nm, ce(r.sendingSecondaryLabel), 1),
      y("div", Rm, ce(r.sendingPrimaryLabel), 1),
      i[3] || (i[3] = y("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3" }, null, -1)),
      y("div", Tm, ce(r.receivingSecondaryLabel), 1),
      y("div", Cm, ce(r.receivingPrimaryLabel), 1),
      y("div", Em, [
        y("div", Om, [
          y("div", Am, [
            (fe(!0), ve(Ke, null, Tt(r.sendingPortLabels, (s) => (fe(), ve("span", Dm, ce(s), 1))), 256))
          ]),
          i[0] || (i[0] = uc('<div class="rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] bg-(--color-ocean-gray-100)"></div><div class="col-start-3 col-span-1 row-start-1 flex items-center"><div class="border h-[2px] w-full border-(--color-ocean-gray-100) border-solid"></div></div><svg height="12" width="8" class="col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 8,6 0,12" style="fill:var(--color-ocean-gray-100);"></polygon></svg>', 3)),
          y("div", Im, ce(r.dataflowType), 1),
          i[1] || (i[1] = y("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] bg-(--color-ocean-gray-100)" }, null, -1)),
          y("div", Sm, [
            (fe(!0), ve(Ke, null, Tt(r.receivingPortLabels, (s) => (fe(), ve("span", Pm, ce(s), 1))), 256))
          ])
        ])
      ])
    ]));
  }
}), Lm = { class: "bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 p-3" }, km = { class: "text-center text-xs mb-4" }, jm = { class: "flex flex-col justify-between gap-4" }, Fm = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-3 p-3" }, Mm = { class: "text-center mb-4" }, $m = { key: 0 }, Bm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Km = { class: "collapse collapse-arrow mt-2" }, qm = { class: "collapse-content text-sm px-5 pt-1" }, Um = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Vm = { key: 1 }, Wm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Gm = { class: "collapse collapse-arrow mt-2" }, Hm = { class: "collapse-content text-sm px-5 pt-1" }, Ym = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Xm = { class: "collapse collapse-arrow mt-2" }, zm = { class: "collapse-content text-sm px-5 pt-1" }, Qm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Jm = { key: 2 }, Zm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, ev = { class: "collapse collapse-arrow mt-2" }, tv = { class: "collapse-content text-sm px-5 pt-1" }, nv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, rv = { class: "collapse collapse-arrow mt-2" }, ov = { class: "collapse-content text-sm px-5 pt-1" }, iv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, av = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-3 p-3" }, sv = { class: "text-center" }, lv = /* @__PURE__ */ Ct({
  __name: "dataflow-implementation-details",
  props: {
    dataflowType: {},
    ldInst: {},
    controlBlock: {},
    dataSet: {},
    ln0Path: {}
  },
  setup(t) {
    const r = t, i = It(), { dataflowSdk: s } = jt(i), u = Be(), d = Be(), c = Be();
    return Zs(async () => {
      r.dataflowType === tt.GOOSE ? u.value = await s.value.findGseControlBlockDetails(
        r.controlBlock.id,
        r.ldInst
      ) : r.dataflowType === tt.SMV ? d.value = await s.value.findSmvControlBlockDetails(
        r.controlBlock.id,
        r.ldInst
      ) : r.dataflowType === tt.REPORT && (c.value = await s.value.findReportControlBlockDetails(
        r.controlBlock.id
      ));
    }), (p, m) => (fe(), ve("div", Lm, [
      y("div", km, ce(p.ln0Path), 1),
      y("div", jm, [
        y("div", Fm, [
          y("div", Mm, ce(p.controlBlock.name), 1),
          u.value ? (fe(), ve("div", $m, [
            y("dl", Bm, [
              m[0] || (m[0] = y("dt", null, "App ID:", -1)),
              y("dd", null, ce(u.value.appId), 1),
              m[1] || (m[1] = y("dt", null, "ConvRev:", -1)),
              y("dd", null, ce(p.controlBlock.confRev), 1)
            ]),
            y("details", Km, [
              m[6] || (m[6] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              y("div", qm, [
                y("dl", Um, [
                  m[2] || (m[2] = y("dt", null, "MAC Address:", -1)),
                  y("dd", null, ce(u.value.communicationDetails.macAddress), 1),
                  m[3] || (m[3] = y("dt", null, "App ID:", -1)),
                  y("dd", null, ce(u.value.communicationDetails.appId), 1),
                  m[4] || (m[4] = y("dt", null, "VLAN ID:", -1)),
                  y("dd", null, ce(u.value.communicationDetails.vlanId), 1),
                  m[5] || (m[5] = y("dt", null, "VLAN Priority:", -1)),
                  y("dd", null, ce(u.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : Ge("", !0),
          d.value ? (fe(), ve("div", Vm, [
            y("dl", Wm, [
              m[7] || (m[7] = y("dt", null, "SMV ID:", -1)),
              y("dd", null, ce(d.value.smvId), 1),
              m[8] || (m[8] = y("dt", null, "ConvRev:", -1)),
              y("dd", null, ce(p.controlBlock.confRev), 1),
              m[9] || (m[9] = y("dt", null, "Multicast:", -1)),
              y("dd", null, ce(d.value.multicast), 1),
              m[10] || (m[10] = y("dt", null, "NofASDU:", -1)),
              y("dd", null, ce(d.value.nofAsdu), 1),
              m[11] || (m[11] = y("dt", null, "SmpMod:", -1)),
              y("dd", null, ce(d.value.smpMod), 1),
              m[12] || (m[12] = y("dt", null, "SmpRate:", -1)),
              y("dd", null, ce(d.value.smpRate), 1)
            ]),
            y("details", Gm, [
              m[19] || (m[19] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "SmvOpts", -1)),
              y("div", Hm, [
                y("dl", Ym, [
                  m[13] || (m[13] = y("dt", null, "RefreshTime:", -1)),
                  y("dd", null, ce(d.value.smvOpts.refreshTime), 1),
                  m[14] || (m[14] = y("dt", null, "SampleSynchronized:", -1)),
                  y("dd", null, ce(d.value.smvOpts.sampleSynchronized), 1),
                  m[15] || (m[15] = y("dt", null, "SampleRate:", -1)),
                  y("dd", null, ce(d.value.smvOpts.sampleRate), 1),
                  m[16] || (m[16] = y("dt", null, "DataSet:", -1)),
                  y("dd", null, ce(d.value.smvOpts.dataSet), 1),
                  m[17] || (m[17] = y("dt", null, "Security:", -1)),
                  y("dd", null, ce(d.value.smvOpts.security), 1),
                  m[18] || (m[18] = y("dt", null, "SynchSourceId:", -1)),
                  y("dd", null, ce(d.value.smvOpts.synchSourceId), 1)
                ])
              ])
            ]),
            y("details", Xm, [
              m[24] || (m[24] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              y("div", zm, [
                y("dl", Qm, [
                  m[20] || (m[20] = y("dt", null, "MAC Address:", -1)),
                  y("dd", null, ce(d.value.communicationDetails.macAddress), 1),
                  m[21] || (m[21] = y("dt", null, "App ID:", -1)),
                  y("dd", null, ce(d.value.communicationDetails.appId), 1),
                  m[22] || (m[22] = y("dt", null, "VLAN ID:", -1)),
                  y("dd", null, ce(d.value.communicationDetails.vlanId), 1),
                  m[23] || (m[23] = y("dt", null, "VLAN Priority:", -1)),
                  y("dd", null, ce(d.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : Ge("", !0),
          c.value ? (fe(), ve("div", Jm, [
            y("dl", Zm, [
              m[25] || (m[25] = y("dt", null, "RPT ID:", -1)),
              y("dd", null, ce(c.value.rptId), 1),
              m[26] || (m[26] = y("dt", null, "ConvRev:", -1)),
              y("dd", null, ce(p.controlBlock.confRev), 1),
              m[27] || (m[27] = y("dt", null, "Buffered:", -1)),
              y("dd", null, ce(c.value.buffered), 1)
            ]),
            y("details", ev, [
              m[33] || (m[33] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "TrgOps", -1)),
              y("div", tv, [
                y("dl", nv, [
                  m[28] || (m[28] = y("dt", null, "Dchg:", -1)),
                  y("dd", null, ce(c.value.trgOps.dchg), 1),
                  m[29] || (m[29] = y("dt", null, "Dupd:", -1)),
                  y("dd", null, ce(c.value.trgOps.dupd), 1),
                  m[30] || (m[30] = y("dt", null, "Gi:", -1)),
                  y("dd", null, ce(c.value.trgOps.gi), 1),
                  m[31] || (m[31] = y("dt", null, "Period:", -1)),
                  y("dd", null, ce(c.value.trgOps.period), 1),
                  m[32] || (m[32] = y("dt", null, "Qchg:", -1)),
                  y("dd", null, ce(c.value.trgOps.qchg), 1)
                ])
              ])
            ]),
            y("details", rv, [
              m[42] || (m[42] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "OptFields", -1)),
              y("div", ov, [
                y("dl", iv, [
                  m[34] || (m[34] = y("dt", null, "BufOvfl:", -1)),
                  y("dd", null, ce(c.value.optFields.bufOvfl), 1),
                  m[35] || (m[35] = y("dt", null, "ConfigRef:", -1)),
                  y("dd", null, ce(c.value.optFields.configRef), 1),
                  m[36] || (m[36] = y("dt", null, "DataRef:", -1)),
                  y("dd", null, ce(c.value.optFields.dataRef), 1),
                  m[37] || (m[37] = y("dt", null, "DataSet:", -1)),
                  y("dd", null, ce(c.value.optFields.dataSet), 1),
                  m[38] || (m[38] = y("dt", null, "EntryID:", -1)),
                  y("dd", null, ce(c.value.optFields.entryId), 1),
                  m[39] || (m[39] = y("dt", null, "ReasonCode:", -1)),
                  y("dd", null, ce(c.value.optFields.reasonCode), 1),
                  m[40] || (m[40] = y("dt", null, "SeqNum:", -1)),
                  y("dd", null, ce(c.value.optFields.seqNum), 1),
                  m[41] || (m[41] = y("dt", null, "TimeStamp:", -1)),
                  y("dd", null, ce(c.value.optFields.timeStamp), 1)
                ])
              ])
            ])
          ])) : Ge("", !0)
        ]),
        y("div", av, [
          y("div", sv, ce(p.dataSet.name), 1)
        ])
      ])
    ]));
  }
}), uv = { class: "font-bold text-lg mb-4" }, cv = { key: 0 }, fv = { key: 1 }, dv = {
  key: 4,
  class: "modal-action"
}, pv = /* @__PURE__ */ Ct({
  __name: "dataflow-implementation",
  props: {
    connection: {},
    extRef: {}
  },
  setup(t) {
    const r = t, i = Jn(), s = It(), { dataflowSdk: u, lnodes: d } = jt(s), c = Be(""), p = Be(""), m = Be(""), S = Be(), O = Be();
    Ut(
      () => r.extRef,
      async function(H) {
        H && (m.value = await u.value.findPathToExtRef(H.id), H.srcCbName && (S.value = await u.value.findControlBlock(
          H.iedName,
          H.ldInst,
          H.srcCbName
        ), O.value = await u.value.findDataSet(
          H.iedName,
          H.ldInst,
          S.value.datSet
        )));
      },
      { immediate: !0 }
    ), Ut(
      () => r.connection,
      async function(H) {
        Se(H.sourceLNodeId, "Source LNodeId is undefined"), c.value = await u.value.findPathToLnode(H.sourceLNodeId), p.value = await u.value.findPathToLnode(
          H.destinationLNodeId
        );
      },
      { immediate: !0 }
    );
    const L = Xe(() => c.value.split("/").slice(-1).join("")), k = Xe(() => c.value.split("/").slice(0, -1).join("/")), J = Xe(() => p.value.split("/").slice(-1).join("")), ee = Xe(() => p.value.split("/").slice(0, -1).join("/")), G = Xe(() => `${r.extRef?.prefix} ${r.extRef?.lnClass} ${r.extRef?.lnInst}`), W = Xe(() => {
      if (!r.connection.isImplemented) {
        const X = d.value.find((H) => H.id === r.connection.sourceLNodeId);
        return Se(X, "Sending LNode not found"), `${X.iedName} / ${X.ldInst}`;
      }
      return `${r.extRef?.iedName} / ${r.extRef?.ldInst}`;
    }), V = Xe(() => m.value.split("/").slice(-2, -1).join("")), M = Xe(() => m.value.split("/").slice(0, -2).join("/")), $ = Xe(() => `${r.extRef?.iedName} / ${r.extRef?.srcLdInst} / ${r.extRef?.srcPrefix} ${r.extRef?.srcLnClass} ${r.extRef?.srcLnInst}`);
    async function ne() {
      try {
        if (!r.extRef)
          throw new Error("No matching ExtRef found for dataflow implementation");
        await u.value.implementDataflow(r.connection, r.extRef), i.handleClose();
      } catch (X) {
        console.error("Error implementing dataflow:", X), alert(`Error implementing dataflow: ${X instanceof Error ? X.message : "Unknown error"}`);
      }
    }
    return (X, H) => (fe(), ve(Ke, null, [
      y("h3", uv, ce(X.connection.isImplemented ? "Implemented Dataflow Details" : "Implement Dataflow"), 1),
      X.extRef ? Ge("", !0) : (fe(), ve("p", cv, "No matching ExtRef found for dataflow implementation.")),
      X.connection.notPossibleToImplement ? (fe(), ve("p", fv, "Sending or receiving LNode is not mapped to a real IED.")) : Ge("", !0),
      X.extRef && X.connection.isImplemented ? (fe(), ve(Ke, { key: 2 }, [
        H[0] || (H[0] = y("h3", { class: "mb-4" }, "Specification:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: k.value,
          sendingPrimaryLabel: L.value,
          receivingSecondaryLabel: ee.value,
          receivingPrimaryLabel: J.value,
          dataflowType: X.connection.dataflowType,
          sendingPortLabels: [X.connection.sourceDataObject, X.connection.sourceDataAttribute],
          receivingPortLabels: [X.connection.input, X.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        H[1] || (H[1] = y("h3", { class: "mb-4" }, "Implementation:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: W.value,
          sendingPrimaryLabel: G.value,
          receivingSecondaryLabel: M.value,
          receivingPrimaryLabel: V.value,
          dataflowType: X.extRef.serviceType,
          sendingPortLabels: [X.extRef.doName, X.extRef.daName],
          receivingPortLabels: []
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels"]),
        S.value && O.value ? (fe(), Zt(lv, {
          key: 0,
          controlBlock: S.value,
          dataSet: O.value,
          ln0Path: $.value,
          dataflowType: X.extRef.serviceType,
          ldInst: X.extRef.srcLdInst
        }, null, 8, ["controlBlock", "dataSet", "ln0Path", "dataflowType", "ldInst"])) : Ge("", !0)
      ], 64)) : Ge("", !0),
      X.extRef && !X.connection.notPossibleToImplement && !X.connection.isImplemented ? (fe(), ve(Ke, { key: 3 }, [
        H[2] || (H[2] = y("h3", { class: "mb-4" }, "Specification:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: k.value,
          sendingPrimaryLabel: L.value,
          receivingSecondaryLabel: ee.value,
          receivingPrimaryLabel: J.value,
          dataflowType: X.connection.dataflowType,
          sendingPortLabels: [X.connection.sourceDataObject, X.connection.sourceDataAttribute],
          receivingPortLabels: [X.connection.input, X.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        H[3] || (H[3] = y("h3", { class: "mb-4" }, "Matching ExtRef to implement:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: W.value,
          sendingPrimaryLabel: r.extRef.pLN,
          receivingSecondaryLabel: ee.value,
          receivingPrimaryLabel: J.value,
          dataflowType: X.connection.dataflowType,
          sendingPortLabels: [
            X.extRef.pDo || X.connection.sourceDataObject,
            X.extRef.pDa || X.connection.sourceDataAttribute
          ],
          receivingPortLabels: X.extRef.intAddr ? [X.extRef.intAddr] : []
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"])
      ], 64)) : Ge("", !0),
      !X.connection.isImplemented && !X.connection.notPossibleToImplement ? (fe(), ve("div", dv, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: ne
        }, " Implement ")
      ])) : Ge("", !0)
    ], 64));
  }
});
function hv(t) {
  return Bs() ? (du(t), !0) : !1;
}
const mv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function vv(t, r, i = {}) {
  const {
    immediate: s = !0,
    immediateCallback: u = !1
  } = i, d = Xn(!1);
  let c;
  function p() {
    c && (clearTimeout(c), c = void 0);
  }
  function m() {
    d.value = !1, p();
  }
  function S(...O) {
    u && t(), p(), d.value = !0, c = setTimeout(() => {
      d.value = !1, c = void 0, t(...O);
    }, lf(r));
  }
  return s && (d.value = !0, mv && S()), hv(m), {
    isPending: af(d),
    start: S,
    stop: m
  };
}
const Jn = /* @__PURE__ */ ol("dataflow/dialog-store", () => {
  const t = {
    component: void 0,
    props: void 0
  }, r = Be(), i = Be(t), s = Be(), u = qi({
    DataflowCreation: Xn(Hh),
    SourcePlaceholderCreation: Xn(im),
    DestinationPlaceholderCreation: Xn(_m),
    DataflowImplementation: Xn(pv)
  });
  function d() {
    i.value = {
      component: void 0,
      props: void 0
    };
  }
  function c() {
    r.value?.close(), vv(() => {
      d();
    }, 300);
  }
  function p(m, S, O) {
    i.value.component = Na(u[m]), i.value.props = S, O && (s.value = O), r.value?.showModal();
  }
  return {
    // states
    dialogRef: r,
    currentDialogContent: i,
    availableDialogContent: u,
    dialogAttributes: s,
    // getters
    // actions
    hardReset: d,
    handleClose: c,
    openDialogWithContent: p
  };
}), yv = ["onClick"], gv = /* @__PURE__ */ Ct({
  __name: "context-menu",
  props: {
    x: {},
    y: {},
    isVisible: { type: Boolean },
    items: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const i = t, s = r, u = Xe(() => ({
      left: `${i.x}px`,
      top: `${i.y}px`,
      display: i.isVisible ? "flex" : "none"
    }));
    function d(c) {
      c.action(), s("close");
    }
    return (c, p) => (fe(), ve(Ke, null, [
      c.isVisible ? (fe(), ve("div", {
        key: 0,
        class: "menu bg-base-100 rounded-box fixed z-10",
        style: qr(u.value)
      }, [
        y("ul", null, [
          (fe(!0), ve(Ke, null, Tt(c.items, (m) => (fe(), ve("li", null, [
            y("a", {
              onClick: (S) => d(m)
            }, ce(m.label), 9, yv)
          ]))), 256))
        ])
      ], 4)) : Ge("", !0),
      (fe(), Zt(Fo, { to: "body" }, [
        i.isVisible ? (fe(), ve("div", {
          key: 0,
          class: "backdrop",
          onClick: p[0] || (p[0] = pa((m) => c.$emit("close"), ["prevent"])),
          onContextmenu: p[1] || (p[1] = pa((m) => c.$emit("close"), ["prevent"]))
        }, null, 32)) : Ge("", !0)
      ]))
    ], 64));
  }
}), Ia = (t, r) => {
  const i = t.__vccOpts || t;
  for (const [s, u] of r)
    i[s] = u;
  return i;
}, bv = /* @__PURE__ */ Ia(gv, [["__scopeId", "data-v-9cc5b747"]]), wv = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, _v = ["onClick"], xv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Nv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Rv = ["onClick"], Tv = ["onClick", "onContextmenu"], Cv = ["data-testid"], Ev = ["onClick"], Ov = ["onClick", "onContextmenu"], Av = ["onClick"], Dv = ["onClick"], Iv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Sv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Pv = /* @__PURE__ */ Ct({
  __name: "dataflow-connections",
  props: {
    connections: {},
    isDataflowImplementationEnabled: { type: Boolean }
  },
  setup(t) {
    const r = t, i = Da(), { activeElement: s } = jt(i), u = It(), { dataflowSdk: d } = jt(u), c = Jn(), p = Be(!1), m = Be(0), S = Be(0), O = Be([]), L = [
      tt.GOOSE,
      tt.REPORT,
      tt.SMV
    ], k = Xe(() => [...r.connections].sort((M, $) => M.dataflowType < $.dataflowType ? -1 : M.dataflowType > $.dataflowType ? 1 : 0));
    async function J(M) {
      const $ = await d.value.findMatchingExtRef(M);
      c.openDialogWithContent(
        "DataflowImplementation",
        {
          extRef: $,
          connection: M
        },
        { class: "w-1/2 max-w-none" }
      );
    }
    function ee(M) {
      return M ? L.includes(M) : !1;
    }
    function G(M, $) {
      !ee($.dataflowType) || !r.isDataflowImplementationEnabled || (M.preventDefault(), W(M), O.value = V($), p.value = !0);
    }
    function W(M) {
      m.value = M.clientX, S.value = M.clientY;
    }
    function V(M) {
      return [
        {
          label: M.isImplemented ? "Show Implementation" : "Implement",
          action: () => J(M)
        }
      ];
    }
    return (M, $) => (fe(), ve(Ke, null, [
      (fe(!0), ve(Ke, null, Tt(k.value, (ne, X) => (fe(), ve("div", wv, [
        y("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer",
          onClick: (H) => De(i).setOrResetActiveElement(ne.id)
        }, [
          y("span", xv, ce(ne.sourceDataObject), 1),
          y("span", Nv, ce(ne.sourceDataAttribute), 1)
        ], 8, _v),
        y("div", {
          onClick: (H) => De(i).setOrResetActiveElement(ne.id),
          class: Jt(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": De(s) === ne.id,
            "bg-(--color-ocean-gray-100)": De(s) !== ne.id
          }])
        }, null, 10, Rv),
        y("div", {
          class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
          onClick: (H) => De(i).setOrResetActiveElement(ne.id),
          onContextmenu: pa((H) => G(H, ne), ["right"])
        }, [
          y("div", {
            class: Jt(["border h-[2px] w-full", {
              "border-(--color-primary)": De(s) === ne.id,
              "border-(--color-ocean-gray-100)": De(s) !== ne.id,
              "border-solid": !M.isDataflowImplementationEnabled || ne.isImplemented,
              "border-dashed": M.isDataflowImplementationEnabled && !ne.isImplemented,
              "border-dotted": M.isDataflowImplementationEnabled && ne.notPossibleToImplement
            }]),
            "data-testid": `dataflow-line-${X}`
          }, null, 10, Cv)
        ], 40, Tv),
        (fe(), ve("svg", {
          onClick: (H) => De(i).setOrResetActiveElement(ne.id),
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          y("polygon", {
            points: "0,0 8,6 0,12",
            style: qr({
              fill: De(s) === ne.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
            })
          }, null, 4)
        ], 8, Ev)),
        y("div", {
          onClick: (H) => De(i).setOrResetActiveElement(ne.id),
          onContextmenu: pa((H) => G(H, ne), ["right"]),
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
        }, ce(ne.dataflowType), 41, Ov),
        y("div", {
          onClick: (H) => De(i).setOrResetActiveElement(ne.id),
          class: Jt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": De(s) === ne.id,
            "bg-(--color-ocean-gray-100)": De(s) !== ne.id
          }])
        }, null, 10, Av),
        y("div", {
          onClick: (H) => De(i).setOrResetActiveElement(ne.id),
          class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
        }, [
          y("span", Iv, ce(ne.input), 1),
          y("span", Sv, ce(ne.inputInstance), 1)
        ], 8, Dv),
        De(s) == ne.id && !M.isDataflowImplementationEnabled ? (fe(), Zt(Fo, {
          key: 0,
          to: "#sidebar-details"
        }, [
          ht(oh, { connection: ne }, null, 8, ["connection"])
        ])) : Ge("", !0),
        De(s) == ne.id && M.isDataflowImplementationEnabled ? (fe(), Zt(Fo, {
          key: 1,
          to: "#sidebar-details"
        }, [
          ht(ch, { connection: ne }, null, 8, ["connection"])
        ])) : Ge("", !0)
      ]))), 256)),
      ht(bv, {
        x: m.value,
        y: S.value,
        isVisible: p.value,
        items: O.value,
        onClose: $[0] || ($[0] = (ne) => p.value = !1)
      }, null, 8, ["x", "y", "isVisible", "items"])
    ], 64));
  }
}), Lv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, kv = {
  class: "[&_dt,dd]:inline [&_dt]:mr-1",
  "data-testid": "destination-placeholder-details"
}, jv = { class: "mt-4" }, Fv = { key: 0 }, Mv = { key: 1 }, $v = /* @__PURE__ */ Ct({
  __name: "destination-placeholder-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    const r = t, i = It(), { lnodeTypes: s } = jt(i), u = Xe(() => s.value.find((p) => p.lnClass === r.placeholder.preferredLNode)?.dataObjects.find(
      (p) => p.name === r.placeholder.preferredDataObject
    )), d = Xe(() => u?.value?.dataAttributes?.find(
      (c) => c.name === r.placeholder.preferredDataAttribute
    ));
    return (c, p) => (fe(), ve(Ke, null, [
      p[8] || (p[8] = y("h2", { class: "text-lg font-bold mb-2" }, "Destination Placeholder", -1)),
      c.placeholder.dataflowType ? (fe(), ve("span", Lv, ce(c.placeholder.dataflowType), 1)) : Ge("", !0),
      y("dl", kv, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, ce(c.placeholder.input), 1)
        ]),
        y("div", null, [
          p[1] || (p[1] = y("dt", null, "Input Instance:", -1)),
          y("dd", null, ce(c.placeholder.inputInstance || "-"), 1)
        ]),
        y("div", jv, [
          p[2] || (p[2] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, ce(c.placeholder.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[3] || (p[3] = y("dt", null, "Preferred DO:", -1)),
          y("dd", null, ce(c.placeholder.preferredDataObject || "-"), 1)
        ]),
        u.value?.desc ? (fe(), ve("div", Fv, [
          p[4] || (p[4] = y("dt", null, "Preferred DO Desc:", -1)),
          y("dd", null, ce(u.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[5] || (p[5] = y("dt", null, "Preferred DA:", -1)),
          y("dd", null, ce(c.placeholder.preferredDataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (fe(), ve("div", Mv, [
          p[6] || (p[6] = y("dt", null, "Preferred DA Desc:", -1)),
          y("dd", null, ce(d.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[7] || (p[7] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, ce(c.placeholder.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), Bv = ["y1", "x2", "y2"], Kv = ["points"], qv = /* @__PURE__ */ Ct({
  __name: "arrow",
  props: {
    height: {},
    length: {}
  },
  setup(t) {
    return (r, i) => (fe(), ve(Ke, null, [
      y("line", {
        x1: 0,
        y1: r.height / 2,
        x2: r.length - r.height / 2,
        y2: r.height / 2,
        stroke: "currentColor",
        "stroke-width": "2"
      }, null, 8, Bv),
      y("polygon", {
        points: `${r.length - r.height * 0.7}, 0 ${r.length}, ${r.height / 2} ${r.length - r.height * 0.7}, ${r.height}`,
        fill: "currentColor"
      }, null, 8, Kv)
    ], 64));
  }
}), Uv = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, Vv = ["onClick"], Wv = {
  height: "12",
  width: "35",
  class: "mr-[9px] text-(--color-ocean-gray-100)"
}, Gv = ["data-testid"], Hv = ["onClick"], Yv = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Xv = ["onClick"], zv = ["onClick"], Qv = /* @__PURE__ */ Ct({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(t) {
    const r = Da(), { activeElement: i } = jt(r);
    return (s, u) => (fe(!0), ve(Ke, null, Tt(s.destinationPlaceHolderPorts, (d, c) => (fe(), ve("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]",
      key: `destination-placeholder-port-${c}`
    }, [
      y("div", Uv, [
        y("div", {
          class: "flex items-center justify-self-end h-full max-w-max hover:cursor-pointer",
          onClick: (p) => De(r).setOrResetActiveElement(d.id)
        }, [
          (fe(), ve("svg", Wv, [
            y("g", {
              "data-testid": `placeholder-line-${c}`,
              class: Jt({
                "text-(--color-primary)": De(i) === d.id
              })
            }, [
              ht(qv, {
                height: 12,
                length: 35
              })
            ], 10, Gv)
          ]))
        ], 8, Vv)
      ]),
      y("div", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        class: Jt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": De(i) === d.id
        }])
      }, null, 10, Hv),
      y("div", Yv, [
        y("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm hover:cursor-pointer",
          onClick: (p) => De(r).setOrResetActiveElement(d.id)
        }, ce(d.input), 9, Xv),
        y("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 rounded-sm hover:cursor-pointer",
          onClick: (p) => De(r).setOrResetActiveElement(d.id)
        }, ce(d.inputInstance), 9, zv)
      ]),
      De(i) == d.id ? (fe(), Zt(Fo, {
        key: 0,
        to: "#sidebar-details"
      }, [
        ht($v, { placeholder: d }, null, 8, ["placeholder"])
      ])) : Ge("", !0)
    ]))), 128));
  }
}), Jv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Zv = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, ey = { class: "mt-4" }, ty = { key: 0 }, ny = { key: 1 }, ry = { class: "mt-4" }, oy = {
  key: 2,
  class: "mt-4"
}, iy = /* @__PURE__ */ Ct({
  __name: "source-placeholder-details",
  props: {
    placeholder: {},
    sourceLNodeId: {}
  },
  setup(t) {
    const r = t, i = It(), { lnodes: s } = jt(i), u = Xe(() => s.value.find((p) => p.id === r.sourceLNodeId)?.dataObjectSpecifications?.find(
      (p) => p.name === r.placeholder.dataObject
    )), d = Xe(() => u?.value?.dataAttributeSpecifications?.find(
      (c) => c.name === r.placeholder.dataAttribute
    ));
    return (c, p) => (fe(), ve(Ke, null, [
      p[8] || (p[8] = y("h2", { class: "text-lg font-bold mb-2" }, "Source Placeholder", -1)),
      c.placeholder.dataflowType ? (fe(), ve("span", Jv, ce(c.placeholder.dataflowType), 1)) : Ge("", !0),
      y("dl", Zv, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, ce(c.placeholder.input), 1)
        ]),
        y("div", ey, [
          p[1] || (p[1] = y("dt", null, "DO:", -1)),
          y("dd", null, ce(c.placeholder.dataObject || "-"), 1)
        ]),
        u.value?.desc ? (fe(), ve("div", ty, [
          p[2] || (p[2] = y("dt", null, "DO Desc:", -1)),
          y("dd", null, ce(u.value?.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[3] || (p[3] = y("dt", null, "DA:", -1)),
          y("dd", null, ce(c.placeholder.dataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (fe(), ve("div", ny, [
          p[4] || (p[4] = y("dt", null, "DA Desc:", -1)),
          y("dd", null, ce(d.value?.desc), 1)
        ])) : Ge("", !0),
        y("div", ry, [
          p[5] || (p[5] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, ce(c.placeholder.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[6] || (p[6] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, ce(c.placeholder.processResource || "-"), 1)
        ]),
        c.placeholder.isFulfilled != null ? (fe(), ve("div", oy, [
          p[7] || (p[7] = y("dt", null, "Placeholder is fulfilled:", -1)),
          y("dd", null, ce(c.placeholder.isFulfilled), 1)
        ])) : Ge("", !0)
      ])
    ], 64));
  }
}), ay = {}, sy = {
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function ly(t, r) {
  return fe(), ve("svg", sy, r[0] || (r[0] = [
    y("path", { d: "M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" }, null, -1),
    y("path", { d: "M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" }, null, -1)
  ]));
}
const ma = /* @__PURE__ */ Ia(ay, [["render", ly]]), uy = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-12" }, cy = ["onClick"], fy = ["onClick"], dy = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, py = ["onClick"], hy = ["onClick"], my = ["onClick"], vy = ["onClick"], yy = ["disabled", "onClick"], gy = /* @__PURE__ */ Ct({
  __name: "source-placeholder-ports",
  props: {
    sourceLNode: {},
    destinationLNode: {}
  },
  setup(t) {
    const r = t, i = Da(), { activeElement: s } = jt(i), u = It(), { sourcePlaceholders: d } = jt(u), c = Jn(), p = Xe(() => r.sourceLNode.id ? d.value.filter((O) => O.lNodeId === r.sourceLNode.id) : []), m = (O) => {
      if (r.destinationLNode)
        return O.preferredLNode ? r.destinationLNode.lnClass === O.preferredLNode ? r.destinationLNode : void 0 : r.destinationLNode;
    };
    function S(O) {
      Se(r.destinationLNode, "Destination LNode is undefined"), c.openDialogWithContent("DataflowCreation", {
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        sourcePlaceholder: O
      });
    }
    return (O, L) => (fe(!0), ve(Ke, null, Tt(p.value, (k) => (fe(), ve("div", uy, [
      y("div", {
        onClick: (J) => De(i).setOrResetActiveElement(k.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        y("span", {
          class: Jt([k.isFulfilled ? "border-solid" : "border-dashed", "relative inline-block border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm"])
        }, [
          nl(ce(k.dataObject) + "." + ce(k.dataAttribute) + " ", 1),
          y("span", {
            class: Jt([{
              "bg-(--color-primary)": De(s) === k.id
            }, "absolute -top-3 -right-3 bg-(--color-ocean-gray-100) text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"])
          }, " 1+ ", 2)
        ], 2)
      ], 8, cy),
      y("div", {
        onClick: (J) => De(i).setOrResetActiveElement(k.id),
        class: Jt([{
          "bg-(--color-primary)": De(s) === k.id
        }, "rounded-full size-5 col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[8.5px] hover:cursor-pointer"])
      }, null, 10, fy),
      y("div", dy, [
        y("div", {
          class: "flex items-center h-full w-3/4 hover:cursor-pointer",
          onClick: (J) => De(i).setOrResetActiveElement(k.id)
        }, [
          y("div", {
            class: Jt(["h-[2px] w-full border border-dashed", {
              "border-[var(--color-primary)]": De(s) === k.id,
              "border-[var(--color-gray-200)]": De(s) !== k.id
            }]),
            onClick: (J) => De(i).setOrResetActiveElement(k.id)
          }, null, 10, hy)
        ], 8, py)
      ]),
      y("div", {
        onClick: (J) => De(i).setOrResetActiveElement(k.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[10%] truncate max-w-[8ch]"
      }, ce(k.input), 9, my),
      k.preferredLNode ? (fe(), ve("div", {
        key: 0,
        onClick: (J) => De(i).setOrResetActiveElement(k.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[70%]"
      }, ce(k.preferredLNode), 9, vy)) : Ge("", !0),
      y("button", {
        class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn bg-(--color-primary) border-1 text-white relative z-2",
        disabled: !r.sourceLNode || !r.destinationLNode || !m(k),
        style: qr(
          !r.sourceLNode || !r.destinationLNode || !m(k) ? {
            border: "1",
            backgroundColor: "var(--color-ocean-gray-75)",
            color: "var(--color-ocean-gray-200)",
            borderColor: "var(--color-ocean-gray-200)"
          } : { borderColor: "var(--color-primary)" }
        ),
        "aria-label": "Fulfill placeholder",
        onClick: (J) => S(k)
      }, [
        ht(ma)
      ], 12, yy),
      De(s) == k.id ? (fe(), Zt(Fo, {
        key: 1,
        to: "#sidebar-details"
      }, [
        ht(iy, {
          placeholder: k,
          sourceLNodeId: r.sourceLNode.id
        }, null, 8, ["placeholder", "sourceLNodeId"])
      ])) : Ge("", !0)
    ]))), 256));
  }
}), by = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, wy = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, _y = { class: "mt-4" }, xy = { key: 0 }, Ny = /* @__PURE__ */ Ct({
  __name: "controlled-connection-details",
  props: {
    controlledConnection: {}
  },
  setup(t) {
    const r = t, i = It(), { lnodes: s } = jt(i), u = Xe(() => s.value.find(
      (c) => c.id === r.controlledConnection.controlledLNodeId
    )?.dataObjectSpecifications?.find(
      (c) => c.name === r.controlledConnection.controlledDataObject
    ));
    return (d, c) => (fe(), ve(Ke, null, [
      c[4] || (c[4] = y("h2", { class: "text-lg font-bold mb-2" }, "Specified Controlled Dataflow", -1)),
      d.controlledConnection.dataflowType ? (fe(), ve("span", by, ce(d.controlledConnection.dataflowType), 1)) : Ge("", !0),
      y("dl", wy, [
        y("div", null, [
          c[0] || (c[0] = y("dt", null, "Output:", -1)),
          y("dd", null, ce(d.controlledConnection.outputName), 1)
        ]),
        y("div", null, [
          c[1] || (c[1] = y("dt", null, "Output Instance:", -1)),
          y("dd", null, ce(d.controlledConnection.outputInstance || "-"), 1)
        ]),
        y("div", _y, [
          c[2] || (c[2] = y("dt", null, "Controlled DO:", -1)),
          y("dd", null, ce(d.controlledConnection.controlledDataObject || "-"), 1)
        ]),
        u.value?.desc ? (fe(), ve("div", xy, [
          c[3] || (c[3] = y("dt", null, "Controlled DO Desc:", -1)),
          y("dd", null, ce(u.value.desc), 1)
        ])) : Ge("", !0)
      ])
    ], 64));
  }
}), Ry = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Ty = ["onClick"], Cy = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Ey = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Oy = ["onClick"], Ay = ["onClick"], Dy = ["data-testid"], Iy = ["onClick"], Sy = ["onClick"], Py = ["onClick"], Ly = ["onClick"], ky = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, jy = /* @__PURE__ */ Ct({
  __name: "dataflow-controlled-connections",
  props: {
    controlledConnections: {}
  },
  setup(t) {
    const r = Da(), { activeElement: i } = jt(r);
    return (s, u) => (fe(!0), ve(Ke, null, Tt(s.controlledConnections, (d, c) => (fe(), ve("div", Ry, [
      y("div", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        y("span", Cy, ce(d.outputName), 1),
        y("span", Ey, ce(d.outputInstance), 1)
      ], 8, Ty),
      y("div", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        class: Jt(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": De(i) === d.id,
          "bg-(--color-ocean-gray-100)": De(i) !== d.id
        }])
      }, null, 10, Oy),
      y("div", {
        class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
        onClick: (p) => De(r).setOrResetActiveElement(d.id)
      }, [
        y("div", {
          class: Jt(["h-[2px] w-full", {
            "bg-(--color-primary)": De(i) === d.id,
            "bg-(--color-ocean-gray-100)": De(i) !== d.id
          }]),
          "data-testid": `dataflow-controlled-connection-line-${c}`
        }, null, 10, Dy)
      ], 8, Ay),
      (fe(), ve("svg", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        y("polygon", {
          points: "0,0 8,6 0,12",
          style: qr({
            fill: De(i) === d.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
          })
        }, null, 4)
      ], 8, Iy)),
      y("div", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
      }, ce(d.dataflowType), 9, Sy),
      y("div", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        class: Jt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": De(i) === d.id,
          "bg-(--color-ocean-gray-100)": De(i) !== d.id
        }])
      }, null, 10, Py),
      y("div", {
        onClick: (p) => De(r).setOrResetActiveElement(d.id),
        class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
      }, [
        y("span", ky, ce(d.controlledDataObject), 1)
      ], 8, Ly),
      De(i) == d.id ? (fe(), Zt(Fo, {
        key: 0,
        to: "#sidebar-details"
      }, [
        ht(Ny, { "controlled-connection": d }, null, 8, ["controlled-connection"])
      ])) : Ge("", !0)
    ]))), 256));
  }
}), Fy = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full mb-8 grid-rows-[100px_1fr_80px]" }, My = ["value"], $y = ["value"], By = ["value"], Ky = ["value"], qy = { class: "col-span-full row-start-2" }, Uy = /* @__PURE__ */ Ct({
  __name: "dataflow-visualisation",
  props: {
    isDataflowImplementationEnabled: { type: Boolean }
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(t, { emit: r }) {
    const i = r, s = Jn(), u = It(), { lnodes: d, connections: c, controlledConnections: p } = jt(u), m = Be(), S = Be(), O = Be(), L = Be();
    Ut(
      () => d.value,
      () => {
        m.value = void 0, S.value = void 0;
      }
    );
    const k = Xe(
      () => d.value.filter((H) => H.id !== S.value).sort((H, re) => Yn(H).localeCompare(Yn(re)))
    ), J = Xe(
      () => d.value.filter((H) => H.id !== m.value).sort((H, re) => Yn(H).localeCompare(Yn(re)))
    ), ee = Xe(() => !m.value || !S.value ? [] : c.value.filter(
      (H) => H.sourceLNodeId === m.value && H.destinationLNodeId === S.value
    )), G = Xe(() => !m.value || !S.value ? [] : p.value.filter(
      (H) => H.controllerLNodeId === m.value && H.controlledLNodeId === S.value
    )), W = Xe(() => S.value ? c.value.filter(
      (H) => H.destinationLNodeId === S.value && !H.sourceLNodeId
    ) : []);
    function V(H) {
      return d.value.find((re) => re.id === H) ?? void 0;
    }
    function M(H) {
      m.value = H, O.value = V(H), i("sourceLNodeChange", H);
    }
    function $(H) {
      S.value = H, L.value = V(H), i("destinationLNodeChange", H);
    }
    function ne() {
      if (!O.value)
        throw new Error("Source LNode is undefined");
      s.openDialogWithContent("SourcePlaceholderCreation", {
        sourceLNode: O.value
      });
    }
    function X() {
      if (!L.value)
        throw new Error("Destination LNode is undefined");
      s.openDialogWithContent("DestinationPlaceholderCreation", {
        destinationLNode: L.value
      });
    }
    return (H, re) => (fe(), ve("div", Fy, [
      re[5] || (re[5] = y("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[450px]" }, null, -1)),
      y("select", {
        value: m.value ?? "",
        onChange: re[0] || (re[0] = (ue) => M(ue.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        re[2] || (re[2] = nl(" > ")),
        re[3] || (re[3] = y("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (fe(!0), ve(Ke, null, Tt(k.value, (ue) => (fe(), ve("option", {
          key: ue.id,
          value: ue.id
        }, ce(De(Yn)(ue)), 9, $y))), 128))
      ], 40, My),
      re[6] || (re[6] = y("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[450px]" }, null, -1)),
      y("select", {
        value: S.value ?? "",
        onChange: re[1] || (re[1] = (ue) => $(ue.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        re[4] || (re[4] = y("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (fe(!0), ve(Ke, null, Tt(J.value, (ue) => (fe(), ve("option", {
          key: ue.id,
          value: ue.id
        }, ce(De(Yn)(ue)), 9, Ky))), 128))
      ], 40, By),
      y("div", qy, [
        ee.value.length > 0 ? (fe(), Zt(Pv, {
          key: 0,
          connections: ee.value,
          isDataflowImplementationEnabled: H.isDataflowImplementationEnabled
        }, null, 8, ["connections", "isDataflowImplementationEnabled"])) : Ge("", !0),
        G.value.length > 0 ? (fe(), Zt(jy, {
          key: 1,
          controlledConnections: G.value
        }, null, 8, ["controlledConnections"])) : Ge("", !0),
        O.value && !H.isDataflowImplementationEnabled ? (fe(), Zt(gy, {
          key: 2,
          sourceLNode: O.value,
          destinationLNode: L.value
        }, null, 8, ["sourceLNode", "destinationLNode"])) : Ge("", !0),
        H.isDataflowImplementationEnabled ? Ge("", !0) : (fe(), Zt(Qv, {
          key: 3,
          destinationPlaceHolderPorts: W.value
        }, null, 8, ["destinationPlaceHolderPorts"]))
      ]),
      O.value && !H.isDataflowImplementationEnabled ? (fe(), ve("button", {
        key: 0,
        "aria-label": "Add source placeholder",
        class: "btn btn-primary btn-circle size-5 col-start-3 col-span-1 -ml-[12px] self-center z-10 row-start-3",
        onClick: ne
      }, [
        ht(ma)
      ])) : Ge("", !0),
      L.value && !H.isDataflowImplementationEnabled ? (fe(), ve("button", {
        key: 1,
        class: "btn btn-primary btn-circle size-5 col-start-4 col-span-1 -ml-[9px] self-center row-start-3",
        "aria-label": "Add destination placeholder",
        onClick: X
      }, [
        ht(ma)
      ])) : Ge("", !0)
    ]));
  }
}), Vy = { class: "flex justify-between mb-6 w-full h-18" }, Wy = { key: 0 }, Gy = { class: "flex flex-col items-center justify-center w-full" }, Hy = ["disabled"], Yy = /* @__PURE__ */ Ct({
  __name: "dataflow-view",
  setup(t) {
    const r = Be(), i = Be(), s = Be(!1), u = Jn(), d = It(), { lnodes: c } = jt(d), p = Xe(() => L(r.value)), m = Xe(() => L(i.value));
    function S(J) {
      r.value = J;
    }
    function O(J) {
      i.value = J;
    }
    function L(J) {
      return c.value.find((ee) => ee.id === J) ?? void 0;
    }
    function k() {
      if (!p.value || !m.value)
        throw new Error("Source or Destination LNode is undefined");
      u.openDialogWithContent("DataflowCreation", {
        sourceLNode: p.value,
        destinationLNode: m.value
      });
    }
    return (J, ee) => (fe(), ve(Ke, null, [
      y("div", Vy, [
        y("div", null, [
          ee[1] || (ee[1] = y("span", { class: "mr-3" }, "Specification", -1)),
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": ee[0] || (ee[0] = (G) => s.value = G),
            class: "toggle"
          }, null, 512), [
            [Co, s.value]
          ]),
          ee[2] || (ee[2] = y("span", { class: "ml-3" }, "Implementation", -1))
        ]),
        s.value ? (fe(), ve("div", Wy, ee[3] || (ee[3] = [
          uc('<div class="flex items-center"><div class="border w-[50px] h-[2px] mr-2"></div><span>Implemented</span></div><div class="flex items-center"><div class="border border-dashed w-[50px] h-[2px] mr-2"></div><span>Not implemented</span></div><div class="flex items-center"><div class="border border-dotted w-[50px] h-[2px] mr-2"></div><span>Not possible to implement</span></div>', 3)
        ]))) : Ge("", !0)
      ]),
      y("div", Gy, [
        ht(Uy, {
          onSourceLNodeChange: S,
          onDestinationLNodeChange: O,
          isDataflowImplementationEnabled: s.value
        }, null, 8, ["isDataflowImplementationEnabled"]),
        s.value ? Ge("", !0) : (fe(), ve("button", {
          key: 0,
          class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
          onClick: k,
          disabled: !p.value || !m.value,
          "aria-label": "Add connection"
        }, [
          ht(ma)
        ], 8, Hy))
      ])
    ], 64));
  }
}), Xy = {}, zy = { class: "layout" }, Qy = { class: "main" }, Jy = { class: "sidebar" };
function Zy(t, r) {
  return fe(), ve("div", zy, [
    y("div", Qy, [
      bl(t.$slots, "main", {}, void 0)
    ]),
    y("div", Jy, [
      bl(t.$slots, "sidebar", {}, void 0)
    ])
  ]);
}
const eg = /* @__PURE__ */ Ia(Xy, [["render", Zy], ["__scopeId", "data-v-5f95d421"]]), tg = {
  name: "sidebar",
  class: "root"
}, ng = { class: "tabs tabs-box" }, rg = { key: 0 }, og = { key: 1 }, ig = /* @__PURE__ */ Ct({
  __name: "sidebar",
  setup(t) {
    const r = Be("details");
    return (i, s) => (fe(), ve("div", tg, [
      y("div", ng, [
        rt(y("input", {
          type: "radio",
          value: "details",
          name: "tabs",
          "onUpdate:modelValue": s[0] || (s[0] = (u) => r.value = u),
          class: "tab",
          "aria-label": "Details"
        }, null, 512), [
          [Kr, r.value]
        ]),
        rt(y("input", {
          type: "radio",
          value: "advanced",
          name: "tabs",
          "onUpdate:modelValue": s[1] || (s[1] = (u) => r.value = u),
          class: "tab",
          "aria-label": "Advanced"
        }, null, 512), [
          [Kr, r.value]
        ])
      ]),
      y("div", null, [
        r.value === "details" ? (fe(), ve("div", rg, s[2] || (s[2] = [
          y("div", { id: "sidebar-details" }, null, -1)
        ]))) : Ge("", !0),
        r.value === "advanced" ? (fe(), ve("div", og)) : Ge("", !0)
      ])
    ]));
  }
}), ag = /* @__PURE__ */ Ia(ig, [["__scopeId", "data-v-ec5c053a"]]), sg = {
  class: "modal",
  ref: "dialogRef"
}, lg = /* @__PURE__ */ Ct({
  __name: "dialog-container",
  setup(t) {
    const r = Jn(), { currentDialogContent: i } = jt(r), s = Nf("dialogRef");
    return qo(() => {
      s.value && (r.dialogRef = s.value);
    }), (u, d) => (fe(), ve("dialog", sg, [
      y("div", {
        class: Jt(["modal-box max-h-[85vh]", De(r).dialogAttributes?.class])
      }, [
        y("button", {
          class: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          "aria-label": "Close dialog",
          onClick: d[0] || (d[0] = //@ts-ignore
          (...c) => De(r).handleClose && De(r).handleClose(...c))
        }, " ✕ "),
        De(i).component ? (fe(), Zt(jf(De(i).component), kc(cc({ key: 0 }, De(i).props)), null, 16)) : Ge("", !0)
      ], 2),
      d[1] || (d[1] = y("form", {
        method: "dialog",
        class: "modal-backdrop"
      }, [
        y("button", null, "close")
      ], -1))
    ], 512));
  }
}), ug = ["id"], cg = { class: "pl-10 pr-10" }, fg = /* @__PURE__ */ Ct({
  __name: "app",
  props: {
    api: {}
  },
  setup(t) {
    const r = "dataflow", i = t, s = It();
    let u = () => {
    };
    return qo(() => {
      u = i.api.activeFileName.subscribe((d) => {
        s.initApp(d);
      }), s.initApp(i.api.activeFileName.value);
    }), Xs(() => {
      s.closeDatabase(), u();
    }), (d, c) => (fe(), ve("article", {
      id: De(r),
      style: { height: "100%" }
    }, [
      ht(eg, null, {
        main: ws(() => [
          y("div", cg, [
            ht(Yy),
            ht(lg)
          ])
        ]),
        sidebar: ws(() => [
          ht(ag)
        ]),
        _: 1
      })
    ], 8, ug));
  }
});
function Lg(t, r) {
  if (!document.getElementById(t)) {
    console.error({ msg: "could not found root element", rootId: t });
    return;
  }
  const s = Jd(fg, { api: r });
  return s.use(tp()), s.mount(`#${t}`), s.unmount;
}
export {
  Lg as default
};
