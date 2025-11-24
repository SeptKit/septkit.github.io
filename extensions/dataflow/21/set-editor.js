(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.backdrop[data-v-9cc5b747]{position:fixed;inset:0;z-index:5;width:100vw;height:100vh;background:transparent}.layout[data-v-5f95d421]{display:grid;height:100%;grid-template-columns:1fr 20rem}.sidebar[data-v-5f95d421]{padding:1.5rem;border-left:1px solid var(--border-color);height:100%}.main[data-v-5f95d421]{padding:1rem;height:100%}.root[data-v-ec5c053a]{display:flex;flex-direction:column;gap:1rem}.tab[data-v-ec5c053a]{transition:all .2s}.tabs[data-v-ec5c053a]{width:auto;display:inline-block;margin:0 auto}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:""}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-xl:1.25rem;--text-xl--line-height:calc(1.75/1.25);--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:var(--tab-height);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:calc(100% - var(--tab-height) + var(--border));display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.collapse-arrow>.collapse-title:after{content:"";transform-origin:75% 75%;pointer-events:none;top:1.9rem;width:.5rem;height:.5rem;transition-property:all;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:block;position:absolute;inset-inline-end:1.4rem;transform:translateY(-100%)rotate(45deg);box-shadow:2px 2px}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.\\!pointer-events-none{pointer-events:none!important}.collapse:not(td,tr,colgroup){visibility:visible}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;width:100%;transition:grid-template-rows .2s;display:grid;position:relative;overflow:hidden}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],:focus:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],:focus:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible;min-height:fit-content}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-close,.collapse[open])>.collapse-title{cursor:unset}.collapse:is([open],:focus:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse.collapse-open.collapse-plus>.collapse-title:after{content:"−"}.collapse.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{content:"−"}.collapse:is(details){width:100%}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details) summary{outline:none}.collapse-content{visibility:hidden;min-height:0;cursor:unset;grid-row-start:2;grid-column-start:1;padding-left:1rem;padding-right:1rem;transition:visibility .2s,padding .2s ease-out,background-color .2s ease-out}.collapse{visibility:collapse}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.collapse-title{grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out;position:relative}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.-top-3{top:calc(var(--spacing)*-3)}.top-2{top:calc(var(--spacing)*2)}.-right-3{right:calc(var(--spacing)*-3)}.right-2{right:calc(var(--spacing)*2)}.left-\\[10\\%\\]{left:10%}.left-\\[70\\%\\]{left:70%}.modal-backdrop{color:#0000;z-index:-1;grid-row-start:1;grid-column-start:1;place-self:stretch stretch;display:grid}.modal-backdrop button{cursor:pointer}.-z-1{z-index:-1}.z-1{z-index:1}.z-2{z-index:2}.z-10{z-index:10}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[8\\.5px\\]{margin-right:-8.5px}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-\\[9px\\]{margin-right:9px}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.-ml-\\[12px\\]{margin-left:-12px}.ml-3{margin-left:calc(var(--spacing)*3)}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-block{display:inline-block}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-5{height:calc(var(--spacing)*5)}.h-12{height:calc(var(--spacing)*12)}.h-18{height:calc(var(--spacing)*18)}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.h-\\[50px\\]{height:50px}.h-full{height:100%}.max-h-\\[85vh\\]{max-height:85vh}.min-h-\\[450px\\]{min-height:450px}.w-1\\/2{width:50%}.w-3\\/4{width:75%}.w-5{width:calc(var(--spacing)*5)}.w-\\[20px\\]{width:20px}.w-\\[50px\\]{width:50px}.w-full{width:100%}.max-w-\\[8ch\\]{max-width:8ch}.max-w-max{max-width:max-content}.max-w-none{max-width:none}.flex-1{flex:1}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_0\\.5fr_20px_1fr\\]{grid-template-columns:1fr 20px .5fr 20px 1fr}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[50px_50px_1fr_80px\\]{grid-template-rows:50px 50px 1fr 80px}.grid-rows-\\[50px_50px_80px\\]{grid-template-rows:50px 50px 80px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tabs-box{background-color:var(--color-base-200);--tabs-box-radius:calc(var(--radius-field) + var(--radius-field) + var(--radius-field));border-radius:calc(var(--radius-field) + min(.25rem,var(--tabs-box-radius)));box-shadow:0 -.5px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 .5px oklch(0% 0 0/calc(var(--depth)*.05)) inset;padding:.25rem}.tabs-box .tab{border-radius:var(--radius-field);border-style:none}.tabs-box .tab:focus-visible,.tabs-box .tab:is(label:has(:checked:focus-visible)){outline-offset:2px}.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){background-color:var(--tab-bg,var(--color-base-100));box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px var(--color-neutral),0 1px 6px -4px var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*50%),#0000),0 1px 6px -4px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*100%),#0000)}}@media (forced-colors:active){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){border:1px solid}}.rounded-box{border-radius:var(--radius-box)}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-none{--tw-border-style:none;border-style:none}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.border-\\(--color-primary\\){border-color:var(--color-primary)}.border-\\[var\\(--color-gray-200\\)\\]{border-color:var(--color-gray-200)}.border-\\[var\\(--color-primary\\)\\]{border-color:var(--color-primary)}.bg-\\(--color-ocean-gray-25\\){background-color:var(--color-ocean-gray-25)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.radio-sm{padding:.1875rem}.radio-sm[type=radio]{--size:calc(var(--size-selector,.25rem)*5)}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.ps-5{padding-inline-start:calc(var(--spacing)*5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pr-10{padding-right:calc(var(--spacing)*10)}.pl-10{padding-left:calc(var(--spacing)*10)}.text-center{text-align:center}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xl{font-size:var(--text-xl);line-height:var(--tw-leading,var(--text-xl--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-\\(--color-ocean-gray-100\\){color:var(--color-ocean-gray-100)}.text-\\(--color-primary\\){color:var(--color-primary)}.text-white{color:var(--color-white)}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}:is(.\\*\\:pointer-events-auto>*){pointer-events:auto}.after\\:start-0:after{content:var(--tw-content);inset-inline-start:calc(var(--spacing)*0)}.after\\:\\!top-3:after{content:var(--tw-content);top:calc(var(--spacing)*3)!important}@media (hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}.\\[\\&_dt\\]\\:mr-1 dt{margin-right:calc(var(--spacing)*1)}.\\[\\&_dt\\,dd\\]\\:inline dt,.\\[\\&_dt\\,dd\\]\\:inline dd{display:inline}.\\[\\&\\>dt\\]\\:text-right>dt{text-align:right}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function js(t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of t.split(",")) r[i] = 1;
  return (i) => i in r;
}
const yt = {}, So = [], Xn = () => {
}, Ec = () => !1, va = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Fs = (t) => t.startsWith("onUpdate:"), on = Object.assign, Ms = (t, r) => {
  const i = t.indexOf(r);
  i > -1 && t.splice(i, 1);
}, Oc = Object.prototype.hasOwnProperty, mt = (t, r) => Oc.call(t, r), Ue = Array.isArray, Po = (t) => Ki(t) === "[object Map]", Bo = (t) => Ki(t) === "[object Set]", fl = (t) => Ki(t) === "[object Date]", Qe = (t) => typeof t == "function", At = (t) => typeof t == "string", Un = (t) => typeof t == "symbol", Nt = (t) => t !== null && typeof t == "object", iu = (t) => (Nt(t) || Qe(t)) && Qe(t.then) && Qe(t.catch), au = Object.prototype.toString, Ki = (t) => au.call(t), Ic = (t) => Ki(t).slice(8, -1), su = (t) => Ki(t) === "[object Object]", $s = (t) => At(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ni = /* @__PURE__ */ js(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ya = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (i) => r[i] || (r[i] = t(i));
}, Ac = /-(\w)/g, Sn = ya(
  (t) => t.replace(Ac, (r, i) => i ? i.toUpperCase() : "")
), Dc = /\B([A-Z])/g, Oo = ya(
  (t) => t.replace(Dc, "-$1").toLowerCase()
), ga = ya((t) => t.charAt(0).toUpperCase() + t.slice(1)), os = ya(
  (t) => t ? `on${ga(t)}` : ""
), Fr = (t, r) => !Object.is(t, r), Ji = (t, ...r) => {
  for (let i = 0; i < t.length; i++)
    t[i](...r);
}, ys = (t, r, i, s = !1) => {
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
let dl;
const ba = () => dl || (dl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kr(t) {
  if (Ue(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++) {
      const s = t[i], c = At(s) ? kc(s) : Kr(s);
      if (c)
        for (const d in c)
          r[d] = c[d];
    }
    return r;
  } else if (At(t) || Nt(t))
    return t;
}
const Sc = /;(?![^(]*\))/g, Pc = /:([^]+)/, Lc = /\/\*[^]*?\*\//g;
function kc(t) {
  const r = {};
  return t.replace(Lc, "").split(Sc).forEach((i) => {
    if (i) {
      const s = i.split(Pc);
      s.length > 1 && (r[s[0].trim()] = s[1].trim());
    }
  }), r;
}
function Zt(t) {
  let r = "";
  if (At(t))
    r = t;
  else if (Ue(t))
    for (let i = 0; i < t.length; i++) {
      const s = Zt(t[i]);
      s && (r += s + " ");
    }
  else if (Nt(t))
    for (const i in t)
      t[i] && (r += i + " ");
  return r.trim();
}
function jc(t) {
  if (!t) return null;
  let { class: r, style: i } = t;
  return r && !At(r) && (t.class = Zt(r)), i && (t.style = Kr(i)), t;
}
const Fc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Mc = /* @__PURE__ */ js(Fc);
function lu(t) {
  return !!t || t === "";
}
function $c(t, r) {
  if (t.length !== r.length) return !1;
  let i = !0;
  for (let s = 0; i && s < t.length; s++)
    i = Co(t[s], r[s]);
  return i;
}
function Co(t, r) {
  if (t === r) return !0;
  let i = fl(t), s = fl(r);
  if (i || s)
    return i && s ? t.getTime() === r.getTime() : !1;
  if (i = Un(t), s = Un(r), i || s)
    return t === r;
  if (i = Ue(t), s = Ue(r), i || s)
    return i && s ? $c(t, r) : !1;
  if (i = Nt(t), s = Nt(r), i || s) {
    if (!i || !s)
      return !1;
    const c = Object.keys(t).length, d = Object.keys(r).length;
    if (c !== d)
      return !1;
    for (const u in t) {
      const p = t.hasOwnProperty(u), m = r.hasOwnProperty(u);
      if (p && !m || !p && m || !Co(t[u], r[u]))
        return !1;
    }
  }
  return String(t) === String(r);
}
function Bs(t, r) {
  return t.findIndex((i) => Co(i, r));
}
const uu = (t) => !!(t && t.__v_isRef === !0), le = (t) => At(t) ? t : t == null ? "" : Ue(t) || Nt(t) && (t.toString === au || !Qe(t.toString)) ? uu(t) ? le(t.value) : JSON.stringify(t, cu, 2) : String(t), cu = (t, r) => uu(r) ? cu(t, r.value) : Po(r) ? {
  [`Map(${r.size})`]: [...r.entries()].reduce(
    (i, [s, c], d) => (i[is(s, d) + " =>"] = c, i),
    {}
  )
} : Bo(r) ? {
  [`Set(${r.size})`]: [...r.values()].map((i) => is(i))
} : Un(r) ? is(r) : Nt(r) && !Ue(r) && !su(r) ? String(r) : r, is = (t, r = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Un(t) ? `Symbol(${(i = t.description) != null ? i : r})` : t
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let nn;
class fu {
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
        const c = this.parent.scopes.pop();
        c && c !== this && (this.parent.scopes[this.index] = c, c.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function du(t) {
  return new fu(t);
}
function Ks() {
  return nn;
}
function pu(t, r = !1) {
  nn && nn.cleanups.push(t);
}
let _t;
const as = /* @__PURE__ */ new WeakSet();
class hu {
  constructor(r) {
    this.fn = r, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, nn && nn.active && nn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, as.has(this) && (as.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || vu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, pl(this), yu(this);
    const r = _t, i = qn;
    _t = this, qn = !0;
    try {
      return this.fn();
    } finally {
      gu(this), _t = r, qn = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let r = this.deps; r; r = r.nextDep)
        Vs(r);
      this.deps = this.depsTail = void 0, pl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? as.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    gs(this) && this.run();
  }
  get dirty() {
    return gs(this);
  }
}
let mu = 0, Ri, Ti;
function vu(t, r = !1) {
  if (t.flags |= 8, r) {
    t.next = Ti, Ti = t;
    return;
  }
  t.next = Ri, Ri = t;
}
function qs() {
  mu++;
}
function Us() {
  if (--mu > 0)
    return;
  if (Ti) {
    let r = Ti;
    for (Ti = void 0; r; ) {
      const i = r.next;
      r.next = void 0, r.flags &= -9, r = i;
    }
  }
  let t;
  for (; Ri; ) {
    let r = Ri;
    for (Ri = void 0; r; ) {
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
function yu(t) {
  for (let r = t.deps; r; r = r.nextDep)
    r.version = -1, r.prevActiveLink = r.dep.activeLink, r.dep.activeLink = r;
}
function gu(t) {
  let r, i = t.depsTail, s = i;
  for (; s; ) {
    const c = s.prevDep;
    s.version === -1 ? (s === i && (i = c), Vs(s), Bc(s)) : r = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = c;
  }
  t.deps = r, t.depsTail = i;
}
function gs(t) {
  for (let r = t.deps; r; r = r.nextDep)
    if (r.dep.version !== r.version || r.dep.computed && (bu(r.dep.computed) || r.dep.version !== r.version))
      return !0;
  return !!t._dirty;
}
function bu(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Si) || (t.globalVersion = Si, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !gs(t))))
    return;
  t.flags |= 2;
  const r = t.dep, i = _t, s = qn;
  _t = t, qn = !0;
  try {
    yu(t);
    const c = t.fn(t._value);
    (r.version === 0 || Fr(c, t._value)) && (t.flags |= 128, t._value = c, r.version++);
  } catch (c) {
    throw r.version++, c;
  } finally {
    _t = i, qn = s, gu(t), t.flags &= -3;
  }
}
function Vs(t, r = !1) {
  const { dep: i, prevSub: s, nextSub: c } = t;
  if (s && (s.nextSub = c, t.prevSub = void 0), c && (c.prevSub = s, t.nextSub = void 0), i.subs === t && (i.subs = s, !s && i.computed)) {
    i.computed.flags &= -5;
    for (let d = i.computed.deps; d; d = d.nextDep)
      Vs(d, !0);
  }
  !r && !--i.sc && i.map && i.map.delete(i.key);
}
function Bc(t) {
  const { prevDep: r, nextDep: i } = t;
  r && (r.nextDep = i, t.prevDep = void 0), i && (i.prevDep = r, t.nextDep = void 0);
}
let qn = !0;
const wu = [];
function Ir() {
  wu.push(qn), qn = !1;
}
function Ar() {
  const t = wu.pop();
  qn = t === void 0 ? !0 : t;
}
function pl(t) {
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
let Si = 0;
class Kc {
  constructor(r, i) {
    this.sub = r, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ws {
  // TODO isolatedDeclarations "__v_skip"
  constructor(r) {
    this.computed = r, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(r) {
    if (!_t || !qn || _t === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== _t)
      i = this.activeLink = new Kc(_t, this), _t.deps ? (i.prevDep = _t.depsTail, _t.depsTail.nextDep = i, _t.depsTail = i) : _t.deps = _t.depsTail = i, _u(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = _t.depsTail, i.nextDep = void 0, _t.depsTail.nextDep = i, _t.depsTail = i, _t.deps === i && (_t.deps = s);
    }
    return i;
  }
  trigger(r) {
    this.version++, Si++, this.notify(r);
  }
  notify(r) {
    qs();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Us();
    }
  }
}
function _u(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const r = t.dep.computed;
    if (r && !t.dep.subs) {
      r.flags |= 20;
      for (let s = r.deps; s; s = s.nextDep)
        _u(s);
    }
    const i = t.dep.subs;
    i !== t && (t.prevSub = i, i && (i.nextSub = t)), t.dep.subs = t;
  }
}
const aa = /* @__PURE__ */ new WeakMap(), No = Symbol(
  ""
), bs = Symbol(
  ""
), Pi = Symbol(
  ""
);
function rn(t, r, i) {
  if (qn && _t) {
    let s = aa.get(t);
    s || aa.set(t, s = /* @__PURE__ */ new Map());
    let c = s.get(i);
    c || (s.set(i, c = new Ws()), c.map = s, c.key = i), c.track();
  }
}
function Rr(t, r, i, s, c, d) {
  const u = aa.get(t);
  if (!u) {
    Si++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (qs(), r === "clear")
    u.forEach(p);
  else {
    const m = Ue(t), k = m && $s(i);
    if (m && i === "length") {
      const O = Number(s);
      u.forEach((S, L) => {
        (L === "length" || L === Pi || !Un(L) && L >= O) && p(S);
      });
    } else
      switch ((i !== void 0 || u.has(void 0)) && p(u.get(i)), k && p(u.get(Pi)), r) {
        case "add":
          m ? k && p(u.get("length")) : (p(u.get(No)), Po(t) && p(u.get(bs)));
          break;
        case "delete":
          m || (p(u.get(No)), Po(t) && p(u.get(bs)));
          break;
        case "set":
          Po(t) && p(u.get(No));
          break;
      }
  }
  Us();
}
function qc(t, r) {
  const i = aa.get(t);
  return i && i.get(r);
}
function Io(t) {
  const r = ft(t);
  return r === t ? r : (rn(r, "iterate", Pi), An(t) ? r : r.map(Jt));
}
function wa(t) {
  return rn(t = ft(t), "iterate", Pi), t;
}
const Uc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, Jt);
  },
  concat(...t) {
    return Io(this).concat(
      ...t.map((r) => Ue(r) ? Io(r) : r)
    );
  },
  entries() {
    return ss(this, "entries", (t) => (t[1] = Jt(t[1]), t));
  },
  every(t, r) {
    return xr(this, "every", t, r, void 0, arguments);
  },
  filter(t, r) {
    return xr(this, "filter", t, r, (i) => i.map(Jt), arguments);
  },
  find(t, r) {
    return xr(this, "find", t, r, Jt, arguments);
  },
  findIndex(t, r) {
    return xr(this, "findIndex", t, r, void 0, arguments);
  },
  findLast(t, r) {
    return xr(this, "findLast", t, r, Jt, arguments);
  },
  findLastIndex(t, r) {
    return xr(this, "findLastIndex", t, r, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, r) {
    return xr(this, "forEach", t, r, void 0, arguments);
  },
  includes(...t) {
    return ls(this, "includes", t);
  },
  indexOf(...t) {
    return ls(this, "indexOf", t);
  },
  join(t) {
    return Io(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return ls(this, "lastIndexOf", t);
  },
  map(t, r) {
    return xr(this, "map", t, r, void 0, arguments);
  },
  pop() {
    return wi(this, "pop");
  },
  push(...t) {
    return wi(this, "push", t);
  },
  reduce(t, ...r) {
    return hl(this, "reduce", t, r);
  },
  reduceRight(t, ...r) {
    return hl(this, "reduceRight", t, r);
  },
  shift() {
    return wi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, r) {
    return xr(this, "some", t, r, void 0, arguments);
  },
  splice(...t) {
    return wi(this, "splice", t);
  },
  toReversed() {
    return Io(this).toReversed();
  },
  toSorted(t) {
    return Io(this).toSorted(t);
  },
  toSpliced(...t) {
    return Io(this).toSpliced(...t);
  },
  unshift(...t) {
    return wi(this, "unshift", t);
  },
  values() {
    return ss(this, "values", Jt);
  }
};
function ss(t, r, i) {
  const s = wa(t), c = s[r]();
  return s !== t && !An(t) && (c._next = c.next, c.next = () => {
    const d = c._next();
    return d.value && (d.value = i(d.value)), d;
  }), c;
}
const Vc = Array.prototype;
function xr(t, r, i, s, c, d) {
  const u = wa(t), p = u !== t && !An(t), m = u[r];
  if (m !== Vc[r]) {
    const S = m.apply(t, d);
    return p ? Jt(S) : S;
  }
  let k = i;
  u !== t && (p ? k = function(S, L) {
    return i.call(this, Jt(S), L, t);
  } : i.length > 2 && (k = function(S, L) {
    return i.call(this, S, L, t);
  }));
  const O = m.call(u, k, s);
  return p && c ? c(O) : O;
}
function hl(t, r, i, s) {
  const c = wa(t);
  let d = i;
  return c !== t && (An(t) ? i.length > 3 && (d = function(u, p, m) {
    return i.call(this, u, p, m, t);
  }) : d = function(u, p, m) {
    return i.call(this, u, Jt(p), m, t);
  }), c[r](d, ...s);
}
function ls(t, r, i) {
  const s = ft(t);
  rn(s, "iterate", Pi);
  const c = s[r](...i);
  return (c === -1 || c === !1) && Gs(i[0]) ? (i[0] = ft(i[0]), s[r](...i)) : c;
}
function wi(t, r, i = []) {
  Ir(), qs();
  const s = ft(t)[r].apply(t, i);
  return Us(), Ar(), s;
}
const Wc = /* @__PURE__ */ js("__proto__,__v_isRef,__isVue"), xu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Un)
);
function Gc(t) {
  Un(t) || (t = String(t));
  const r = ft(this);
  return rn(r, "has", t), r.hasOwnProperty(t);
}
class Nu {
  constructor(r = !1, i = !1) {
    this._isReadonly = r, this._isShallow = i;
  }
  get(r, i, s) {
    if (i === "__v_skip") return r.__v_skip;
    const c = this._isReadonly, d = this._isShallow;
    if (i === "__v_isReactive")
      return !c;
    if (i === "__v_isReadonly")
      return c;
    if (i === "__v_isShallow")
      return d;
    if (i === "__v_raw")
      return s === (c ? d ? Iu : Ou : d ? Eu : Cu).get(r) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(r) === Object.getPrototypeOf(s) ? r : void 0;
    const u = Ue(r);
    if (!c) {
      let m;
      if (u && (m = Uc[i]))
        return m;
      if (i === "hasOwnProperty")
        return Gc;
    }
    const p = Reflect.get(
      r,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Et(r) ? r : s
    );
    return (Un(i) ? xu.has(i) : Wc(i)) || (c || rn(r, "get", i), d) ? p : Et(p) ? u && $s(i) ? p : p.value : Nt(p) ? c ? Au(p) : qi(p) : p;
  }
}
class Ru extends Nu {
  constructor(r = !1) {
    super(!1, r);
  }
  set(r, i, s, c) {
    let d = r[i];
    if (!this._isShallow) {
      const m = Mr(d);
      if (!An(s) && !Mr(s) && (d = ft(d), s = ft(s)), !Ue(r) && Et(d) && !Et(s))
        return m ? !1 : (d.value = s, !0);
    }
    const u = Ue(r) && $s(i) ? Number(i) < r.length : mt(r, i), p = Reflect.set(
      r,
      i,
      s,
      Et(r) ? r : c
    );
    return r === ft(c) && (u ? Fr(s, d) && Rr(r, "set", i, s) : Rr(r, "add", i, s)), p;
  }
  deleteProperty(r, i) {
    const s = mt(r, i);
    r[i];
    const c = Reflect.deleteProperty(r, i);
    return c && s && Rr(r, "delete", i, void 0), c;
  }
  has(r, i) {
    const s = Reflect.has(r, i);
    return (!Un(i) || !xu.has(i)) && rn(r, "has", i), s;
  }
  ownKeys(r) {
    return rn(
      r,
      "iterate",
      Ue(r) ? "length" : No
    ), Reflect.ownKeys(r);
  }
}
class Tu extends Nu {
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
const Hc = /* @__PURE__ */ new Ru(), Yc = /* @__PURE__ */ new Tu(), Xc = /* @__PURE__ */ new Ru(!0), zc = /* @__PURE__ */ new Tu(!0), ws = (t) => t, Wi = (t) => Reflect.getPrototypeOf(t);
function Qc(t, r, i) {
  return function(...s) {
    const c = this.__v_raw, d = ft(c), u = Po(d), p = t === "entries" || t === Symbol.iterator && u, m = t === "keys" && u, k = c[t](...s), O = i ? ws : r ? sa : Jt;
    return !r && rn(
      d,
      "iterate",
      m ? bs : No
    ), {
      // iterator protocol
      next() {
        const { value: S, done: L } = k.next();
        return L ? { value: S, done: L } : {
          value: p ? [O(S[0]), O(S[1])] : O(S),
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
function Gi(t) {
  return function(...r) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Jc(t, r) {
  const i = {
    get(c) {
      const d = this.__v_raw, u = ft(d), p = ft(c);
      t || (Fr(c, p) && rn(u, "get", c), rn(u, "get", p));
      const { has: m } = Wi(u), k = r ? ws : t ? sa : Jt;
      if (m.call(u, c))
        return k(d.get(c));
      if (m.call(u, p))
        return k(d.get(p));
      d !== u && d.get(c);
    },
    get size() {
      const c = this.__v_raw;
      return !t && rn(ft(c), "iterate", No), Reflect.get(c, "size", c);
    },
    has(c) {
      const d = this.__v_raw, u = ft(d), p = ft(c);
      return t || (Fr(c, p) && rn(u, "has", c), rn(u, "has", p)), c === p ? d.has(c) : d.has(c) || d.has(p);
    },
    forEach(c, d) {
      const u = this, p = u.__v_raw, m = ft(p), k = r ? ws : t ? sa : Jt;
      return !t && rn(m, "iterate", No), p.forEach((O, S) => c.call(d, k(O), k(S), u));
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
      add(c) {
        !r && !An(c) && !Mr(c) && (c = ft(c));
        const d = ft(this);
        return Wi(d).has.call(d, c) || (d.add(c), Rr(d, "add", c, c)), this;
      },
      set(c, d) {
        !r && !An(d) && !Mr(d) && (d = ft(d));
        const u = ft(this), { has: p, get: m } = Wi(u);
        let k = p.call(u, c);
        k || (c = ft(c), k = p.call(u, c));
        const O = m.call(u, c);
        return u.set(c, d), k ? Fr(d, O) && Rr(u, "set", c, d) : Rr(u, "add", c, d), this;
      },
      delete(c) {
        const d = ft(this), { has: u, get: p } = Wi(d);
        let m = u.call(d, c);
        m || (c = ft(c), m = u.call(d, c)), p && p.call(d, c);
        const k = d.delete(c);
        return m && Rr(d, "delete", c, void 0), k;
      },
      clear() {
        const c = ft(this), d = c.size !== 0, u = c.clear();
        return d && Rr(
          c,
          "clear",
          void 0,
          void 0
        ), u;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((c) => {
    i[c] = Qc(c, t, r);
  }), i;
}
function _a(t, r) {
  const i = Jc(t, r);
  return (s, c, d) => c === "__v_isReactive" ? !t : c === "__v_isReadonly" ? t : c === "__v_raw" ? s : Reflect.get(
    mt(i, c) && c in s ? i : s,
    c,
    d
  );
}
const Zc = {
  get: /* @__PURE__ */ _a(!1, !1)
}, ef = {
  get: /* @__PURE__ */ _a(!1, !0)
}, tf = {
  get: /* @__PURE__ */ _a(!0, !1)
}, nf = {
  get: /* @__PURE__ */ _a(!0, !0)
}, Cu = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Iu = /* @__PURE__ */ new WeakMap();
function rf(t) {
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
function of(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : rf(Ic(t));
}
function qi(t) {
  return Mr(t) ? t : xa(
    t,
    !1,
    Hc,
    Zc,
    Cu
  );
}
function af(t) {
  return xa(
    t,
    !1,
    Xc,
    ef,
    Eu
  );
}
function Au(t) {
  return xa(
    t,
    !0,
    Yc,
    tf,
    Ou
  );
}
function sf(t) {
  return xa(
    t,
    !0,
    zc,
    nf,
    Iu
  );
}
function xa(t, r, i, s, c) {
  if (!Nt(t) || t.__v_raw && !(r && t.__v_isReactive))
    return t;
  const d = of(t);
  if (d === 0)
    return t;
  const u = c.get(t);
  if (u)
    return u;
  const p = new Proxy(
    t,
    d === 2 ? s : i
  );
  return c.set(t, p), p;
}
function Er(t) {
  return Mr(t) ? Er(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Mr(t) {
  return !!(t && t.__v_isReadonly);
}
function An(t) {
  return !!(t && t.__v_isShallow);
}
function Gs(t) {
  return t ? !!t.__v_raw : !1;
}
function ft(t) {
  const r = t && t.__v_raw;
  return r ? ft(r) : t;
}
function Na(t) {
  return !mt(t, "__v_skip") && Object.isExtensible(t) && ys(t, "__v_skip", !0), t;
}
const Jt = (t) => Nt(t) ? qi(t) : t, sa = (t) => Nt(t) ? Au(t) : t;
function Et(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function $e(t) {
  return Du(t, !1);
}
function In(t) {
  return Du(t, !0);
}
function Du(t, r) {
  return Et(t) ? t : new lf(t, r);
}
class lf {
  constructor(r, i) {
    this.dep = new Ws(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? r : ft(r), this._value = i ? r : Jt(r), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(r) {
    const i = this._rawValue, s = this.__v_isShallow || An(r) || Mr(r);
    r = s ? r : ft(r), Fr(r, i) && (this._rawValue = r, this._value = s ? r : Jt(r), this.dep.trigger());
  }
}
function Se(t) {
  return Et(t) ? t.value : t;
}
function uf(t) {
  return Qe(t) ? t() : Se(t);
}
const cf = {
  get: (t, r, i) => r === "__v_raw" ? t : Se(Reflect.get(t, r, i)),
  set: (t, r, i, s) => {
    const c = t[r];
    return Et(c) && !Et(i) ? (c.value = i, !0) : Reflect.set(t, r, i, s);
  }
};
function Su(t) {
  return Er(t) ? t : new Proxy(t, cf);
}
function ff(t) {
  const r = Ue(t) ? new Array(t.length) : {};
  for (const i in t)
    r[i] = Pu(t, i);
  return r;
}
class df {
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
    return qc(ft(this._object), this._key);
  }
}
class pf {
  constructor(r) {
    this._getter = r, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function hf(t, r, i) {
  return Et(t) ? t : Qe(t) ? new pf(t) : Nt(t) && arguments.length > 1 ? Pu(t, r, i) : $e(t);
}
function Pu(t, r, i) {
  const s = t[r];
  return Et(s) ? s : new df(t, r, i);
}
class mf {
  constructor(r, i, s) {
    this.fn = r, this.setter = i, this._value = void 0, this.dep = new Ws(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Si - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    _t !== this)
      return vu(this, !0), !0;
  }
  get value() {
    const r = this.dep.track();
    return bu(this), r && (r.version = this.dep.version), this._value;
  }
  set value(r) {
    this.setter && this.setter(r);
  }
}
function vf(t, r, i = !1) {
  let s, c;
  return Qe(t) ? s = t : (s = t.get, c = t.set), new mf(s, c, i);
}
const Hi = {}, la = /* @__PURE__ */ new WeakMap();
let xo;
function yf(t, r = !1, i = xo) {
  if (i) {
    let s = la.get(i);
    s || la.set(i, s = []), s.push(t);
  }
}
function gf(t, r, i = yt) {
  const { immediate: s, deep: c, once: d, scheduler: u, augmentJob: p, call: m } = i, k = (ee) => c ? ee : An(ee) || c === !1 || c === 0 ? Tr(ee, 1) : Tr(ee);
  let O, S, L, Y, X = !1, W = !1;
  if (Et(t) ? (S = () => t.value, X = An(t)) : Er(t) ? (S = () => k(t), X = !0) : Ue(t) ? (W = !0, X = t.some((ee) => Er(ee) || An(ee)), S = () => t.map((ee) => {
    if (Et(ee))
      return ee.value;
    if (Er(ee))
      return k(ee);
    if (Qe(ee))
      return m ? m(ee, 2) : ee();
  })) : Qe(t) ? r ? S = m ? () => m(t, 2) : t : S = () => {
    if (L) {
      Ir();
      try {
        L();
      } finally {
        Ar();
      }
    }
    const ee = xo;
    xo = O;
    try {
      return m ? m(t, 3, [Y]) : t(Y);
    } finally {
      xo = ee;
    }
  } : S = Xn, r && c) {
    const ee = S, fe = c === !0 ? 1 / 0 : c;
    S = () => Tr(ee(), fe);
  }
  const G = Ks(), V = () => {
    O.stop(), G && G.active && Ms(G.effects, O);
  };
  if (d && r) {
    const ee = r;
    r = (...fe) => {
      ee(...fe), V();
    };
  }
  let $ = W ? new Array(t.length).fill(Hi) : Hi;
  const B = (ee) => {
    if (!(!(O.flags & 1) || !O.dirty && !ee))
      if (r) {
        const fe = O.run();
        if (c || X || (W ? fe.some((te, ne) => Fr(te, $[ne])) : Fr(fe, $))) {
          L && L();
          const te = xo;
          xo = O;
          try {
            const ne = [
              fe,
              // pass undefined as the old value when it's changed for the first time
              $ === Hi ? void 0 : W && $[0] === Hi ? [] : $,
              Y
            ];
            $ = fe, m ? m(r, 3, ne) : (
              // @ts-expect-error
              r(...ne)
            );
          } finally {
            xo = te;
          }
        }
      } else
        O.run();
  };
  return p && p(B), O = new hu(S), O.scheduler = u ? () => u(B, !1) : B, Y = (ee) => yf(ee, !1, O), L = O.onStop = () => {
    const ee = la.get(O);
    if (ee) {
      if (m)
        m(ee, 4);
      else
        for (const fe of ee) fe();
      la.delete(O);
    }
  }, r ? s ? B(!0) : $ = O.run() : u ? u(B.bind(null, !0), !0) : O.run(), V.pause = O.pause.bind(O), V.resume = O.resume.bind(O), V.stop = V, V;
}
function Tr(t, r = 1 / 0, i) {
  if (r <= 0 || !Nt(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(t)))
    return t;
  if (i.add(t), r--, Et(t))
    Tr(t.value, r, i);
  else if (Ue(t))
    for (let s = 0; s < t.length; s++)
      Tr(t[s], r, i);
  else if (Bo(t) || Po(t))
    t.forEach((s) => {
      Tr(s, r, i);
    });
  else if (su(t)) {
    for (const s in t)
      Tr(t[s], r, i);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && Tr(t[s], r, i);
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
  } catch (c) {
    Ra(c, r, i);
  }
}
function zn(t, r, i, s) {
  if (Qe(t)) {
    const c = Ui(t, r, i, s);
    return c && iu(c) && c.catch((d) => {
      Ra(d, r, i);
    }), c;
  }
  if (Ue(t)) {
    const c = [];
    for (let d = 0; d < t.length; d++)
      c.push(zn(t[d], r, i, s));
    return c;
  }
}
function Ra(t, r, i, s = !0) {
  const c = r ? r.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: u } = r && r.appContext.config || yt;
  if (r) {
    let p = r.parent;
    const m = r.proxy, k = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const O = p.ec;
      if (O) {
        for (let S = 0; S < O.length; S++)
          if (O[S](t, m, k) === !1)
            return;
      }
      p = p.parent;
    }
    if (d) {
      Ir(), Ui(d, null, 10, [
        t,
        m,
        k
      ]), Ar();
      return;
    }
  }
  bf(t, i, c, s, u);
}
function bf(t, r, i, s = !0, c = !1) {
  if (c)
    throw t;
  console.error(t);
}
const vn = [];
let Hn = -1;
const Lo = [];
let Lr = null, Do = 0;
const Lu = /* @__PURE__ */ Promise.resolve();
let ua = null;
function Hs(t) {
  const r = ua || Lu;
  return t ? r.then(this ? t.bind(this) : t) : r;
}
function wf(t) {
  let r = Hn + 1, i = vn.length;
  for (; r < i; ) {
    const s = r + i >>> 1, c = vn[s], d = Li(c);
    d < t || d === t && c.flags & 2 ? r = s + 1 : i = s;
  }
  return r;
}
function Ys(t) {
  if (!(t.flags & 1)) {
    const r = Li(t), i = vn[vn.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(t.flags & 2) && r >= Li(i) ? vn.push(t) : vn.splice(wf(r), 0, t), t.flags |= 1, ku();
  }
}
function ku() {
  ua || (ua = Lu.then(Fu));
}
function _f(t) {
  Ue(t) ? Lo.push(...t) : Lr && t.id === -1 ? Lr.splice(Do + 1, 0, t) : t.flags & 1 || (Lo.push(t), t.flags |= 1), ku();
}
function ml(t, r, i = Hn + 1) {
  for (; i < vn.length; i++) {
    const s = vn[i];
    if (s && s.flags & 2) {
      if (t && s.id !== t.uid)
        continue;
      vn.splice(i, 1), i--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ju(t) {
  if (Lo.length) {
    const r = [...new Set(Lo)].sort(
      (i, s) => Li(i) - Li(s)
    );
    if (Lo.length = 0, Lr) {
      Lr.push(...r);
      return;
    }
    for (Lr = r, Do = 0; Do < Lr.length; Do++) {
      const i = Lr[Do];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Lr = null, Do = 0;
  }
}
const Li = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Fu(t) {
  try {
    for (Hn = 0; Hn < vn.length; Hn++) {
      const r = vn[Hn];
      r && !(r.flags & 8) && (r.flags & 4 && (r.flags &= -2), Ui(
        r,
        r.i,
        r.i ? 15 : 14
      ), r.flags & 4 || (r.flags &= -2));
    }
  } finally {
    for (; Hn < vn.length; Hn++) {
      const r = vn[Hn];
      r && (r.flags &= -2);
    }
    Hn = -1, vn.length = 0, ju(), ua = null, (vn.length || Lo.length) && Fu();
  }
}
let Bt = null, Mu = null;
function ca(t) {
  const r = Bt;
  return Bt = t, Mu = t && t.type.__scopeId || null, r;
}
function _s(t, r = Bt, i) {
  if (!r || t._n)
    return t;
  const s = (...c) => {
    s._d && Il(-1);
    const d = ca(r);
    let u;
    try {
      u = t(...c);
    } finally {
      ca(d), s._d && Il(1);
    }
    return u;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function rt(t, r) {
  if (Bt === null)
    return t;
  const i = Ia(Bt), s = t.dirs || (t.dirs = []);
  for (let c = 0; c < r.length; c++) {
    let [d, u, p, m = yt] = r[c];
    d && (Qe(d) && (d = {
      mounted: d,
      updated: d
    }), d.deep && Tr(u), s.push({
      dir: d,
      instance: i,
      value: u,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return t;
}
function wo(t, r, i, s) {
  const c = t.dirs, d = r && r.dirs;
  for (let u = 0; u < c.length; u++) {
    const p = c[u];
    d && (p.oldValue = d[u].value);
    let m = p.dir[s];
    m && (Ir(), zn(m, i, 8, [
      t.el,
      p,
      t,
      r
    ]), Ar());
  }
}
const $u = Symbol("_vte"), xf = (t) => t.__isTeleport, Ci = (t) => t && (t.disabled || t.disabled === ""), vl = (t) => t && (t.defer || t.defer === ""), yl = (t) => typeof SVGElement < "u" && t instanceof SVGElement, gl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, xs = (t, r) => {
  const i = t && t.to;
  return At(i) ? r ? r(i) : null : i;
}, Bu = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, r, i, s, c, d, u, p, m, k) {
    const {
      mc: O,
      pc: S,
      pbc: L,
      o: { insert: Y, querySelector: X, createText: W, createComment: G }
    } = k, V = Ci(r.props);
    let { shapeFlag: $, children: B, dynamicChildren: ee } = r;
    if (t == null) {
      const fe = r.el = W(""), te = r.anchor = W("");
      Y(fe, i, s), Y(te, i, s);
      const ne = (j, ve) => {
        $ & 16 && (c && c.isCE && (c.ce._teleportTarget = j), O(
          B,
          j,
          ve,
          c,
          d,
          u,
          p,
          m
        ));
      }, pe = () => {
        const j = r.target = xs(r.props, X), ve = Ku(j, r, W, Y);
        j && (u !== "svg" && yl(j) ? u = "svg" : u !== "mathml" && gl(j) && (u = "mathml"), V || (ne(j, ve), Zi(r, !1)));
      };
      V && (ne(i, te), Zi(r, !0)), vl(r.props) ? (r.el.__isMounted = !1, mn(() => {
        pe(), delete r.el.__isMounted;
      }, d)) : pe();
    } else {
      if (vl(r.props) && t.el.__isMounted === !1) {
        mn(() => {
          Bu.process(
            t,
            r,
            i,
            s,
            c,
            d,
            u,
            p,
            m,
            k
          );
        }, d);
        return;
      }
      r.el = t.el, r.targetStart = t.targetStart;
      const fe = r.anchor = t.anchor, te = r.target = t.target, ne = r.targetAnchor = t.targetAnchor, pe = Ci(t.props), j = pe ? i : te, ve = pe ? fe : ne;
      if (u === "svg" || yl(te) ? u = "svg" : (u === "mathml" || gl(te)) && (u = "mathml"), ee ? (L(
        t.dynamicChildren,
        ee,
        j,
        c,
        d,
        u,
        p
      ), Zs(t, r, !0)) : m || S(
        t,
        r,
        j,
        ve,
        c,
        d,
        u,
        p,
        !1
      ), V)
        pe ? r.props && t.props && r.props.to !== t.props.to && (r.props.to = t.props.to) : Yi(
          r,
          i,
          fe,
          k,
          1
        );
      else if ((r.props && r.props.to) !== (t.props && t.props.to)) {
        const be = r.target = xs(
          r.props,
          X
        );
        be && Yi(
          r,
          be,
          null,
          k,
          0
        );
      } else pe && Yi(
        r,
        te,
        ne,
        k,
        1
      );
      Zi(r, V);
    }
  },
  remove(t, r, i, { um: s, o: { remove: c } }, d) {
    const {
      shapeFlag: u,
      children: p,
      anchor: m,
      targetStart: k,
      targetAnchor: O,
      target: S,
      props: L
    } = t;
    if (S && (c(k), c(O)), d && c(m), u & 16) {
      const Y = d || !Ci(L);
      for (let X = 0; X < p.length; X++) {
        const W = p[X];
        s(
          W,
          r,
          i,
          Y,
          !!W.dynamicChildren
        );
      }
    }
  },
  move: Yi,
  hydrate: Nf
};
function Yi(t, r, i, { o: { insert: s }, m: c }, d = 2) {
  d === 0 && s(t.targetAnchor, r, i);
  const { el: u, anchor: p, shapeFlag: m, children: k, props: O } = t, S = d === 2;
  if (S && s(u, r, i), (!S || Ci(O)) && m & 16)
    for (let L = 0; L < k.length; L++)
      c(
        k[L],
        r,
        i,
        2
      );
  S && s(p, r, i);
}
function Nf(t, r, i, s, c, d, {
  o: { nextSibling: u, parentNode: p, querySelector: m, insert: k, createText: O }
}, S) {
  const L = r.target = xs(
    r.props,
    m
  );
  if (L) {
    const Y = Ci(r.props), X = L._lpa || L.firstChild;
    if (r.shapeFlag & 16)
      if (Y)
        r.anchor = S(
          u(t),
          r,
          p(t),
          i,
          s,
          c,
          d
        ), r.targetStart = X, r.targetAnchor = X && u(X);
      else {
        r.anchor = u(t);
        let W = X;
        for (; W; ) {
          if (W && W.nodeType === 8) {
            if (W.data === "teleport start anchor")
              r.targetStart = W;
            else if (W.data === "teleport anchor") {
              r.targetAnchor = W, L._lpa = r.targetAnchor && u(r.targetAnchor);
              break;
            }
          }
          W = u(W);
        }
        r.targetAnchor || Ku(L, r, O, k), S(
          X && u(X),
          r,
          L,
          i,
          s,
          c,
          d
        );
      }
    Zi(r, Y);
  }
  return r.anchor && u(r.anchor);
}
const jo = Bu;
function Zi(t, r) {
  const i = t.ctx;
  if (i && i.ut) {
    let s, c;
    for (r ? (s = t.el, c = t.anchor) : (s = t.targetStart, c = t.targetAnchor); s && s !== c; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", i.uid), s = s.nextSibling;
    i.ut();
  }
}
function Ku(t, r, i, s) {
  const c = r.targetStart = i(""), d = r.targetAnchor = i("");
  return c[$u] = d, t && (s(c, t), s(d, t)), d;
}
function Xs(t, r) {
  t.shapeFlag & 6 && t.component ? (t.transition = r, Xs(t.component.subTree, r)) : t.shapeFlag & 128 ? (t.ssContent.transition = r.clone(t.ssContent), t.ssFallback.transition = r.clone(t.ssFallback)) : t.transition = r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ot(t, r) {
  return Qe(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    on({ name: t.name }, r, { setup: t })
  ) : t;
}
function qu(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Rf(t) {
  const r = _d(), i = In(null);
  if (r) {
    const c = r.refs === yt ? r.refs = {} : r.refs;
    Object.defineProperty(c, t, {
      enumerable: !0,
      get: () => i.value,
      set: (d) => i.value = d
    });
  }
  return i;
}
function Ei(t, r, i, s, c = !1) {
  if (Ue(t)) {
    t.forEach(
      (X, W) => Ei(
        X,
        r && (Ue(r) ? r[W] : r),
        i,
        s,
        c
      )
    );
    return;
  }
  if (ko(s) && !c) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ei(t, r, i, s.component.subTree);
    return;
  }
  const d = s.shapeFlag & 4 ? Ia(s.component) : s.el, u = c ? null : d, { i: p, r: m } = t, k = r && r.r, O = p.refs === yt ? p.refs = {} : p.refs, S = p.setupState, L = ft(S), Y = S === yt ? () => !1 : (X) => mt(L, X);
  if (k != null && k !== m && (At(k) ? (O[k] = null, Y(k) && (S[k] = null)) : Et(k) && (k.value = null)), Qe(m))
    Ui(m, p, 12, [u, O]);
  else {
    const X = At(m), W = Et(m);
    if (X || W) {
      const G = () => {
        if (t.f) {
          const V = X ? Y(m) ? S[m] : O[m] : m.value;
          c ? Ue(V) && Ms(V, d) : Ue(V) ? V.includes(d) || V.push(d) : X ? (O[m] = [d], Y(m) && (S[m] = O[m])) : (m.value = [d], t.k && (O[t.k] = m.value));
        } else X ? (O[m] = u, Y(m) && (S[m] = u)) : W && (m.value = u, t.k && (O[t.k] = u));
      };
      u ? (G.id = -1, mn(G, i)) : G();
    }
  }
}
ba().requestIdleCallback;
ba().cancelIdleCallback;
const ko = (t) => !!t.type.__asyncLoader, Uu = (t) => t.type.__isKeepAlive;
function Tf(t, r) {
  Vu(t, "a", r);
}
function Cf(t, r) {
  Vu(t, "da", r);
}
function Vu(t, r, i = Vt) {
  const s = t.__wdc || (t.__wdc = () => {
    let c = i;
    for (; c; ) {
      if (c.isDeactivated)
        return;
      c = c.parent;
    }
    return t();
  });
  if (Ta(r, s, i), i) {
    let c = i.parent;
    for (; c && c.parent; )
      Uu(c.parent.vnode) && Ef(s, r, i, c), c = c.parent;
  }
}
function Ef(t, r, i, s) {
  const c = Ta(
    r,
    t,
    s,
    !0
    /* prepend */
  );
  zs(() => {
    Ms(s[r], c);
  }, i);
}
function Ta(t, r, i = Vt, s = !1) {
  if (i) {
    const c = i[t] || (i[t] = []), d = r.__weh || (r.__weh = (...u) => {
      Ir();
      const p = Vi(i), m = zn(r, i, t, u);
      return p(), Ar(), m;
    });
    return s ? c.unshift(d) : c.push(d), d;
  }
}
const Sr = (t) => (r, i = Vt) => {
  (!ji || t === "sp") && Ta(t, (...s) => r(...s), i);
}, Of = Sr("bm"), Ko = Sr("m"), If = Sr(
  "bu"
), Af = Sr("u"), Df = Sr(
  "bum"
), zs = Sr("um"), Sf = Sr(
  "sp"
), Pf = Sr("rtg"), Lf = Sr("rtc");
function kf(t, r = Vt) {
  Ta("ec", t, r);
}
const jf = "components", Wu = Symbol.for("v-ndc");
function Ff(t) {
  return At(t) ? Mf(jf, t, !1) || t : t || Wu;
}
function Mf(t, r, i = !0, s = !1) {
  const c = Bt || Vt;
  if (c) {
    const d = c.type;
    {
      const p = Cd(
        d,
        !1
      );
      if (p && (p === r || p === Sn(r) || p === ga(Sn(r))))
        return d;
    }
    const u = (
      // local registration
      // check instance[type] first which is resolved for options API
      bl(c[t] || d[t], r) || // global registration
      bl(c.appContext[t], r)
    );
    return !u && s ? d : u;
  }
}
function bl(t, r) {
  return t && (t[r] || t[Sn(r)] || t[ga(Sn(r))]);
}
function Ct(t, r, i, s) {
  let c;
  const d = i, u = Ue(t);
  if (u || At(t)) {
    const p = u && Er(t);
    let m = !1, k = !1;
    p && (m = !An(t), k = Mr(t), t = wa(t)), c = new Array(t.length);
    for (let O = 0, S = t.length; O < S; O++)
      c[O] = r(
        m ? k ? sa(Jt(t[O])) : Jt(t[O]) : t[O],
        O,
        void 0,
        d
      );
  } else if (typeof t == "number") {
    c = new Array(t);
    for (let p = 0; p < t; p++)
      c[p] = r(p + 1, p, void 0, d);
  } else if (Nt(t))
    if (t[Symbol.iterator])
      c = Array.from(
        t,
        (p, m) => r(p, m, void 0, d)
      );
    else {
      const p = Object.keys(t);
      c = new Array(p.length);
      for (let m = 0, k = p.length; m < k; m++) {
        const O = p[m];
        c[m] = r(t[O], O, m, d);
      }
    }
  else
    c = [];
  return c;
}
function wl(t, r, i = {}, s, c) {
  if (Bt.ce || Bt.parent && ko(Bt.parent) && Bt.parent.ce)
    return r !== "default" && (i.name = r), ue(), en(
      Ke,
      null,
      [ht("slot", i, s)],
      64
    );
  let d = t[r];
  d && d._c && (d._d = !1), ue();
  const u = d && Gu(d(i)), p = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, m = en(
    Ke,
    {
      key: (p && !Un(p) ? p : `_${r}`) + // #7256 force differentiate fallback content from actual content
      (!u && s ? "_fb" : "")
    },
    u || [],
    u && t._ === 1 ? 64 : -2
  );
  return d && d._c && (d._d = !0), m;
}
function Gu(t) {
  return t.some((r) => tl(r) ? !(r.type === Dr || r.type === Ke && !Gu(r.children)) : !0) ? t : null;
}
const Ns = (t) => t ? dc(t) ? Ia(t) : Ns(t.parent) : null, Oi = (
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
    $parent: (t) => Ns(t.parent),
    $root: (t) => Ns(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Yu(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Ys(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Hs.bind(t.proxy)),
    $watch: (t) => sd.bind(t)
  })
), us = (t, r) => t !== yt && !t.__isScriptSetup && mt(t, r), $f = {
  get({ _: t }, r) {
    if (r === "__v_skip")
      return !0;
    const { ctx: i, setupState: s, data: c, props: d, accessCache: u, type: p, appContext: m } = t;
    let k;
    if (r[0] !== "$") {
      const Y = u[r];
      if (Y !== void 0)
        switch (Y) {
          case 1:
            return s[r];
          case 2:
            return c[r];
          case 4:
            return i[r];
          case 3:
            return d[r];
        }
      else {
        if (us(s, r))
          return u[r] = 1, s[r];
        if (c !== yt && mt(c, r))
          return u[r] = 2, c[r];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (k = t.propsOptions[0]) && mt(k, r)
        )
          return u[r] = 3, d[r];
        if (i !== yt && mt(i, r))
          return u[r] = 4, i[r];
        Rs && (u[r] = 0);
      }
    }
    const O = Oi[r];
    let S, L;
    if (O)
      return r === "$attrs" && rn(t.attrs, "get", ""), O(t);
    if (
      // css module (injected by vue-loader)
      (S = p.__cssModules) && (S = S[r])
    )
      return S;
    if (i !== yt && mt(i, r))
      return u[r] = 4, i[r];
    if (
      // global properties
      L = m.config.globalProperties, mt(L, r)
    )
      return L[r];
  },
  set({ _: t }, r, i) {
    const { data: s, setupState: c, ctx: d } = t;
    return us(c, r) ? (c[r] = i, !0) : s !== yt && mt(s, r) ? (s[r] = i, !0) : mt(t.props, r) || r[0] === "$" && r.slice(1) in t ? !1 : (d[r] = i, !0);
  },
  has({
    _: { data: t, setupState: r, accessCache: i, ctx: s, appContext: c, propsOptions: d }
  }, u) {
    let p;
    return !!i[u] || t !== yt && mt(t, u) || us(r, u) || (p = d[0]) && mt(p, u) || mt(s, u) || mt(Oi, u) || mt(c.config.globalProperties, u);
  },
  defineProperty(t, r, i) {
    return i.get != null ? t._.accessCache[r] = 0 : mt(i, "value") && this.set(t, r, i.value, null), Reflect.defineProperty(t, r, i);
  }
};
function _l(t) {
  return Ue(t) ? t.reduce(
    (r, i) => (r[i] = null, r),
    {}
  ) : t;
}
let Rs = !0;
function Bf(t) {
  const r = Yu(t), i = t.proxy, s = t.ctx;
  Rs = !1, r.beforeCreate && xl(r.beforeCreate, t, "bc");
  const {
    // state
    data: c,
    computed: d,
    methods: u,
    watch: p,
    provide: m,
    inject: k,
    // lifecycle
    created: O,
    beforeMount: S,
    mounted: L,
    beforeUpdate: Y,
    updated: X,
    activated: W,
    deactivated: G,
    beforeDestroy: V,
    beforeUnmount: $,
    destroyed: B,
    unmounted: ee,
    render: fe,
    renderTracked: te,
    renderTriggered: ne,
    errorCaptured: pe,
    serverPrefetch: j,
    // public API
    expose: ve,
    inheritAttrs: be,
    // assets
    components: we,
    directives: Be,
    filters: vt
  } = r;
  if (k && Kf(k, s, null), u)
    for (const _e in u) {
      const He = u[_e];
      Qe(He) && (s[_e] = He.bind(i));
    }
  if (c) {
    const _e = c.call(i, i);
    Nt(_e) && (t.data = qi(_e));
  }
  if (Rs = !0, d)
    for (const _e in d) {
      const He = d[_e], Xe = Qe(He) ? He.bind(i, i) : Qe(He.get) ? He.get.bind(i, i) : Xn, st = !Qe(He) && Qe(He.set) ? He.set.bind(i) : Xn, It = Ye({
        get: Xe,
        set: st
      });
      Object.defineProperty(s, _e, {
        enumerable: !0,
        configurable: !0,
        get: () => It.value,
        set: (Kt) => It.value = Kt
      });
    }
  if (p)
    for (const _e in p)
      Hu(p[_e], s, i, _e);
  if (m) {
    const _e = Qe(m) ? m.call(i) : m;
    Reflect.ownKeys(_e).forEach((He) => {
      Hf(He, _e[He]);
    });
  }
  O && xl(O, t, "c");
  function Fe(_e, He) {
    Ue(He) ? He.forEach((Xe) => _e(Xe.bind(i))) : He && _e(He.bind(i));
  }
  if (Fe(Of, S), Fe(Ko, L), Fe(If, Y), Fe(Af, X), Fe(Tf, W), Fe(Cf, G), Fe(kf, pe), Fe(Lf, te), Fe(Pf, ne), Fe(Df, $), Fe(zs, ee), Fe(Sf, j), Ue(ve))
    if (ve.length) {
      const _e = t.exposed || (t.exposed = {});
      ve.forEach((He) => {
        Object.defineProperty(_e, He, {
          get: () => i[He],
          set: (Xe) => i[He] = Xe
        });
      });
    } else t.exposed || (t.exposed = {});
  fe && t.render === Xn && (t.render = fe), be != null && (t.inheritAttrs = be), we && (t.components = we), Be && (t.directives = Be), j && qu(t);
}
function Kf(t, r, i = Xn) {
  Ue(t) && (t = Ts(t));
  for (const s in t) {
    const c = t[s];
    let d;
    Nt(c) ? "default" in c ? d = Ii(
      c.from || s,
      c.default,
      !0
    ) : d = Ii(c.from || s) : d = Ii(c), Et(d) ? Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (u) => d.value = u
    }) : r[s] = d;
  }
}
function xl(t, r, i) {
  zn(
    Ue(t) ? t.map((s) => s.bind(r.proxy)) : t.bind(r.proxy),
    r,
    i
  );
}
function Hu(t, r, i, s) {
  let c = s.includes(".") ? ic(i, s) : () => i[s];
  if (At(t)) {
    const d = r[t];
    Qe(d) && Ut(c, d);
  } else if (Qe(t))
    Ut(c, t.bind(i));
  else if (Nt(t))
    if (Ue(t))
      t.forEach((d) => Hu(d, r, i, s));
    else {
      const d = Qe(t.handler) ? t.handler.bind(i) : r[t.handler];
      Qe(d) && Ut(c, d, t);
    }
}
function Yu(t) {
  const r = t.type, { mixins: i, extends: s } = r, {
    mixins: c,
    optionsCache: d,
    config: { optionMergeStrategies: u }
  } = t.appContext, p = d.get(r);
  let m;
  return p ? m = p : !c.length && !i && !s ? m = r : (m = {}, c.length && c.forEach(
    (k) => fa(m, k, u, !0)
  ), fa(m, r, u)), Nt(r) && d.set(r, m), m;
}
function fa(t, r, i, s = !1) {
  const { mixins: c, extends: d } = r;
  d && fa(t, d, i, !0), c && c.forEach(
    (u) => fa(t, u, i, !0)
  );
  for (const u in r)
    if (!(s && u === "expose")) {
      const p = qf[u] || i && i[u];
      t[u] = p ? p(t[u], r[u]) : r[u];
    }
  return t;
}
const qf = {
  data: Nl,
  props: Rl,
  emits: Rl,
  // objects
  methods: xi,
  computed: xi,
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
  components: xi,
  directives: xi,
  // watch
  watch: Vf,
  // provide / inject
  provide: Nl,
  inject: Uf
};
function Nl(t, r) {
  return r ? t ? function() {
    return on(
      Qe(t) ? t.call(this, this) : t,
      Qe(r) ? r.call(this, this) : r
    );
  } : r : t;
}
function Uf(t, r) {
  return xi(Ts(t), Ts(r));
}
function Ts(t) {
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
function xi(t, r) {
  return t ? on(/* @__PURE__ */ Object.create(null), t, r) : r;
}
function Rl(t, r) {
  return t ? Ue(t) && Ue(r) ? [.../* @__PURE__ */ new Set([...t, ...r])] : on(
    /* @__PURE__ */ Object.create(null),
    _l(t),
    _l(r ?? {})
  ) : r;
}
function Vf(t, r) {
  if (!t) return r;
  if (!r) return t;
  const i = on(/* @__PURE__ */ Object.create(null), t);
  for (const s in r)
    i[s] = hn(t[s], r[s]);
  return i;
}
function Xu() {
  return {
    app: null,
    config: {
      isNativeTag: Ec,
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
let Wf = 0;
function Gf(t, r) {
  return function(s, c = null) {
    Qe(s) || (s = on({}, s)), c != null && !Nt(c) && (c = null);
    const d = Xu(), u = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const k = d.app = {
      _uid: Wf++,
      _component: s,
      _props: c,
      _container: null,
      _context: d,
      _instance: null,
      version: Od,
      get config() {
        return d.config;
      },
      set config(O) {
      },
      use(O, ...S) {
        return u.has(O) || (O && Qe(O.install) ? (u.add(O), O.install(k, ...S)) : Qe(O) && (u.add(O), O(k, ...S))), k;
      },
      mixin(O) {
        return d.mixins.includes(O) || d.mixins.push(O), k;
      },
      component(O, S) {
        return S ? (d.components[O] = S, k) : d.components[O];
      },
      directive(O, S) {
        return S ? (d.directives[O] = S, k) : d.directives[O];
      },
      mount(O, S, L) {
        if (!m) {
          const Y = k._ceVNode || ht(s, c);
          return Y.appContext = d, L === !0 ? L = "svg" : L === !1 && (L = void 0), t(Y, O, L), m = !0, k._container = O, O.__vue_app__ = k, Ia(Y.component);
        }
      },
      onUnmount(O) {
        p.push(O);
      },
      unmount() {
        m && (zn(
          p,
          k._instance,
          16
        ), t(null, k._container), delete k._container.__vue_app__);
      },
      provide(O, S) {
        return d.provides[O] = S, k;
      },
      runWithContext(O) {
        const S = Ro;
        Ro = k;
        try {
          return O();
        } finally {
          Ro = S;
        }
      }
    };
    return k;
  };
}
let Ro = null;
function Hf(t, r) {
  if (Vt) {
    let i = Vt.provides;
    const s = Vt.parent && Vt.parent.provides;
    s === i && (i = Vt.provides = Object.create(s)), i[t] = r;
  }
}
function Ii(t, r, i = !1) {
  const s = Vt || Bt;
  if (s || Ro) {
    let c = Ro ? Ro._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (c && t in c)
      return c[t];
    if (arguments.length > 1)
      return i && Qe(r) ? r.call(s && s.proxy) : r;
  }
}
function Yf() {
  return !!(Vt || Bt || Ro);
}
const zu = {}, Qu = () => Object.create(zu), Ju = (t) => Object.getPrototypeOf(t) === zu;
function Xf(t, r, i, s = !1) {
  const c = {}, d = Qu();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Zu(t, r, c, d);
  for (const u in t.propsOptions[0])
    u in c || (c[u] = void 0);
  i ? t.props = s ? c : af(c) : t.type.props ? t.props = c : t.props = d, t.attrs = d;
}
function zf(t, r, i, s) {
  const {
    props: c,
    attrs: d,
    vnode: { patchFlag: u }
  } = t, p = ft(c), [m] = t.propsOptions;
  let k = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const O = t.vnode.dynamicProps;
      for (let S = 0; S < O.length; S++) {
        let L = O[S];
        if (Ea(t.emitsOptions, L))
          continue;
        const Y = r[L];
        if (m)
          if (mt(d, L))
            Y !== d[L] && (d[L] = Y, k = !0);
          else {
            const X = Sn(L);
            c[X] = Cs(
              m,
              p,
              X,
              Y,
              t,
              !1
            );
          }
        else
          Y !== d[L] && (d[L] = Y, k = !0);
      }
    }
  } else {
    Zu(t, r, c, d) && (k = !0);
    let O;
    for (const S in p)
      (!r || // for camelCase
      !mt(r, S) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((O = Oo(S)) === S || !mt(r, O))) && (m ? i && // for camelCase
      (i[S] !== void 0 || // for kebab-case
      i[O] !== void 0) && (c[S] = Cs(
        m,
        p,
        S,
        void 0,
        t,
        !0
      )) : delete c[S]);
    if (d !== p)
      for (const S in d)
        (!r || !mt(r, S)) && (delete d[S], k = !0);
  }
  k && Rr(t.attrs, "set", "");
}
function Zu(t, r, i, s) {
  const [c, d] = t.propsOptions;
  let u = !1, p;
  if (r)
    for (let m in r) {
      if (Ni(m))
        continue;
      const k = r[m];
      let O;
      c && mt(c, O = Sn(m)) ? !d || !d.includes(O) ? i[O] = k : (p || (p = {}))[O] = k : Ea(t.emitsOptions, m) || (!(m in s) || k !== s[m]) && (s[m] = k, u = !0);
    }
  if (d) {
    const m = ft(i), k = p || yt;
    for (let O = 0; O < d.length; O++) {
      const S = d[O];
      i[S] = Cs(
        c,
        m,
        S,
        k[S],
        t,
        !mt(k, S)
      );
    }
  }
  return u;
}
function Cs(t, r, i, s, c, d) {
  const u = t[i];
  if (u != null) {
    const p = mt(u, "default");
    if (p && s === void 0) {
      const m = u.default;
      if (u.type !== Function && !u.skipFactory && Qe(m)) {
        const { propsDefaults: k } = c;
        if (i in k)
          s = k[i];
        else {
          const O = Vi(c);
          s = k[i] = m.call(
            null,
            r
          ), O();
        }
      } else
        s = m;
      c.ce && c.ce._setProp(i, s);
    }
    u[
      0
      /* shouldCast */
    ] && (d && !p ? s = !1 : u[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Oo(i)) && (s = !0));
  }
  return s;
}
const Qf = /* @__PURE__ */ new WeakMap();
function ec(t, r, i = !1) {
  const s = i ? Qf : r.propsCache, c = s.get(t);
  if (c)
    return c;
  const d = t.props, u = {}, p = [];
  let m = !1;
  if (!Qe(t)) {
    const O = (S) => {
      m = !0;
      const [L, Y] = ec(S, r, !0);
      on(u, L), Y && p.push(...Y);
    };
    !i && r.mixins.length && r.mixins.forEach(O), t.extends && O(t.extends), t.mixins && t.mixins.forEach(O);
  }
  if (!d && !m)
    return Nt(t) && s.set(t, So), So;
  if (Ue(d))
    for (let O = 0; O < d.length; O++) {
      const S = Sn(d[O]);
      Tl(S) && (u[S] = yt);
    }
  else if (d)
    for (const O in d) {
      const S = Sn(O);
      if (Tl(S)) {
        const L = d[O], Y = u[S] = Ue(L) || Qe(L) ? { type: L } : on({}, L), X = Y.type;
        let W = !1, G = !0;
        if (Ue(X))
          for (let V = 0; V < X.length; ++V) {
            const $ = X[V], B = Qe($) && $.name;
            if (B === "Boolean") {
              W = !0;
              break;
            } else B === "String" && (G = !1);
          }
        else
          W = Qe(X) && X.name === "Boolean";
        Y[
          0
          /* shouldCast */
        ] = W, Y[
          1
          /* shouldCastTrue */
        ] = G, (W || mt(Y, "default")) && p.push(S);
      }
    }
  const k = [u, p];
  return Nt(t) && s.set(t, k), k;
}
function Tl(t) {
  return t[0] !== "$" && !Ni(t);
}
const Qs = (t) => t[0] === "_" || t === "$stable", Js = (t) => Ue(t) ? t.map(Yn) : [Yn(t)], Jf = (t, r, i) => {
  if (r._n)
    return r;
  const s = _s((...c) => Js(r(...c)), i);
  return s._c = !1, s;
}, tc = (t, r, i) => {
  const s = t._ctx;
  for (const c in t) {
    if (Qs(c)) continue;
    const d = t[c];
    if (Qe(d))
      r[c] = Jf(c, d, s);
    else if (d != null) {
      const u = Js(d);
      r[c] = () => u;
    }
  }
}, nc = (t, r) => {
  const i = Js(r);
  t.slots.default = () => i;
}, rc = (t, r, i) => {
  for (const s in r)
    (i || !Qs(s)) && (t[s] = r[s]);
}, Zf = (t, r, i) => {
  const s = t.slots = Qu();
  if (t.vnode.shapeFlag & 32) {
    const c = r.__;
    c && ys(s, "__", c, !0);
    const d = r._;
    d ? (rc(s, r, i), i && ys(s, "_", d, !0)) : tc(r, s);
  } else r && nc(t, r);
}, ed = (t, r, i) => {
  const { vnode: s, slots: c } = t;
  let d = !0, u = yt;
  if (s.shapeFlag & 32) {
    const p = r._;
    p ? i && p === 1 ? d = !1 : rc(c, r, i) : (d = !r.$stable, tc(r, c)), u = r;
  } else r && (nc(t, r), u = { default: 1 });
  if (d)
    for (const p in c)
      !Qs(p) && u[p] == null && delete c[p];
}, mn = hd;
function td(t) {
  return nd(t);
}
function nd(t, r) {
  const i = ba();
  i.__VUE__ = !0;
  const {
    insert: s,
    remove: c,
    patchProp: d,
    createElement: u,
    createText: p,
    createComment: m,
    setText: k,
    setElementText: O,
    parentNode: S,
    nextSibling: L,
    setScopeId: Y = Xn,
    insertStaticContent: X
  } = t, W = (A, U, se, de = null, ge = null, he = null, Te = void 0, Ee = null, xe = !!U.dynamicChildren) => {
    if (A === U)
      return;
    A && !_i(A, U) && (de = D(A), Kt(A, ge, he, !0), A = null), U.patchFlag === -2 && (xe = !1, U.dynamicChildren = null);
    const { type: me, ref: Le, shapeFlag: Oe } = U;
    switch (me) {
      case Oa:
        G(A, U, se, de);
        break;
      case Dr:
        V(A, U, se, de);
        break;
      case ea:
        A == null && $(U, se, de, Te);
        break;
      case Ke:
        we(
          A,
          U,
          se,
          de,
          ge,
          he,
          Te,
          Ee,
          xe
        );
        break;
      default:
        Oe & 1 ? fe(
          A,
          U,
          se,
          de,
          ge,
          he,
          Te,
          Ee,
          xe
        ) : Oe & 6 ? Be(
          A,
          U,
          se,
          de,
          ge,
          he,
          Te,
          Ee,
          xe
        ) : (Oe & 64 || Oe & 128) && me.process(
          A,
          U,
          se,
          de,
          ge,
          he,
          Te,
          Ee,
          xe,
          Q
        );
    }
    Le != null && ge ? Ei(Le, A && A.ref, he, U || A, !U) : Le == null && A && A.ref != null && Ei(A.ref, null, he, A, !0);
  }, G = (A, U, se, de) => {
    if (A == null)
      s(
        U.el = p(U.children),
        se,
        de
      );
    else {
      const ge = U.el = A.el;
      U.children !== A.children && k(ge, U.children);
    }
  }, V = (A, U, se, de) => {
    A == null ? s(
      U.el = m(U.children || ""),
      se,
      de
    ) : U.el = A.el;
  }, $ = (A, U, se, de) => {
    [A.el, A.anchor] = X(
      A.children,
      U,
      se,
      de,
      A.el,
      A.anchor
    );
  }, B = ({ el: A, anchor: U }, se, de) => {
    let ge;
    for (; A && A !== U; )
      ge = L(A), s(A, se, de), A = ge;
    s(U, se, de);
  }, ee = ({ el: A, anchor: U }) => {
    let se;
    for (; A && A !== U; )
      se = L(A), c(A), A = se;
    c(U);
  }, fe = (A, U, se, de, ge, he, Te, Ee, xe) => {
    U.type === "svg" ? Te = "svg" : U.type === "math" && (Te = "mathml"), A == null ? te(
      U,
      se,
      de,
      ge,
      he,
      Te,
      Ee,
      xe
    ) : j(
      A,
      U,
      ge,
      he,
      Te,
      Ee,
      xe
    );
  }, te = (A, U, se, de, ge, he, Te, Ee) => {
    let xe, me;
    const { props: Le, shapeFlag: Oe, transition: je, dirs: Me } = A;
    if (xe = A.el = u(
      A.type,
      he,
      Le && Le.is,
      Le
    ), Oe & 8 ? O(xe, A.children) : Oe & 16 && pe(
      A.children,
      xe,
      null,
      de,
      ge,
      cs(A, he),
      Te,
      Ee
    ), Me && wo(A, null, de, "created"), ne(xe, A, A.scopeId, Te, de), Le) {
      for (const et in Le)
        et !== "value" && !Ni(et) && d(xe, et, null, Le[et], he, de);
      "value" in Le && d(xe, "value", null, Le.value, he), (me = Le.onVnodeBeforeMount) && Gn(me, de, A);
    }
    Me && wo(A, null, de, "beforeMount");
    const Ve = rd(ge, je);
    Ve && je.beforeEnter(xe), s(xe, U, se), ((me = Le && Le.onVnodeMounted) || Ve || Me) && mn(() => {
      me && Gn(me, de, A), Ve && je.enter(xe), Me && wo(A, null, de, "mounted");
    }, ge);
  }, ne = (A, U, se, de, ge) => {
    if (se && Y(A, se), de)
      for (let he = 0; he < de.length; he++)
        Y(A, de[he]);
    if (ge) {
      let he = ge.subTree;
      if (U === he || sc(he.type) && (he.ssContent === U || he.ssFallback === U)) {
        const Te = ge.vnode;
        ne(
          A,
          Te,
          Te.scopeId,
          Te.slotScopeIds,
          ge.parent
        );
      }
    }
  }, pe = (A, U, se, de, ge, he, Te, Ee, xe = 0) => {
    for (let me = xe; me < A.length; me++) {
      const Le = A[me] = Ee ? kr(A[me]) : Yn(A[me]);
      W(
        null,
        Le,
        U,
        se,
        de,
        ge,
        he,
        Te,
        Ee
      );
    }
  }, j = (A, U, se, de, ge, he, Te) => {
    const Ee = U.el = A.el;
    let { patchFlag: xe, dynamicChildren: me, dirs: Le } = U;
    xe |= A.patchFlag & 16;
    const Oe = A.props || yt, je = U.props || yt;
    let Me;
    if (se && _o(se, !1), (Me = je.onVnodeBeforeUpdate) && Gn(Me, se, U, A), Le && wo(U, A, se, "beforeUpdate"), se && _o(se, !0), (Oe.innerHTML && je.innerHTML == null || Oe.textContent && je.textContent == null) && O(Ee, ""), me ? ve(
      A.dynamicChildren,
      me,
      Ee,
      se,
      de,
      cs(U, ge),
      he
    ) : Te || He(
      A,
      U,
      Ee,
      null,
      se,
      de,
      cs(U, ge),
      he,
      !1
    ), xe > 0) {
      if (xe & 16)
        be(Ee, Oe, je, se, ge);
      else if (xe & 2 && Oe.class !== je.class && d(Ee, "class", null, je.class, ge), xe & 4 && d(Ee, "style", Oe.style, je.style, ge), xe & 8) {
        const Ve = U.dynamicProps;
        for (let et = 0; et < Ve.length; et++) {
          const ot = Ve[et], bt = Oe[ot], Dt = je[ot];
          (Dt !== bt || ot === "value") && d(Ee, ot, bt, Dt, ge, se);
        }
      }
      xe & 1 && A.children !== U.children && O(Ee, U.children);
    } else !Te && me == null && be(Ee, Oe, je, se, ge);
    ((Me = je.onVnodeUpdated) || Le) && mn(() => {
      Me && Gn(Me, se, U, A), Le && wo(U, A, se, "updated");
    }, de);
  }, ve = (A, U, se, de, ge, he, Te) => {
    for (let Ee = 0; Ee < U.length; Ee++) {
      const xe = A[Ee], me = U[Ee], Le = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        xe.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (xe.type === Ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_i(xe, me) || // - In the case of a component, it could contain anything.
        xe.shapeFlag & 198) ? S(xe.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          se
        )
      );
      W(
        xe,
        me,
        Le,
        null,
        de,
        ge,
        he,
        Te,
        !0
      );
    }
  }, be = (A, U, se, de, ge) => {
    if (U !== se) {
      if (U !== yt)
        for (const he in U)
          !Ni(he) && !(he in se) && d(
            A,
            he,
            U[he],
            null,
            ge,
            de
          );
      for (const he in se) {
        if (Ni(he)) continue;
        const Te = se[he], Ee = U[he];
        Te !== Ee && he !== "value" && d(A, he, Ee, Te, ge, de);
      }
      "value" in se && d(A, "value", U.value, se.value, ge);
    }
  }, we = (A, U, se, de, ge, he, Te, Ee, xe) => {
    const me = U.el = A ? A.el : p(""), Le = U.anchor = A ? A.anchor : p("");
    let { patchFlag: Oe, dynamicChildren: je, slotScopeIds: Me } = U;
    Me && (Ee = Ee ? Ee.concat(Me) : Me), A == null ? (s(me, se, de), s(Le, se, de), pe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      se,
      Le,
      ge,
      he,
      Te,
      Ee,
      xe
    )) : Oe > 0 && Oe & 64 && je && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (ve(
      A.dynamicChildren,
      je,
      se,
      ge,
      he,
      Te,
      Ee
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || ge && U === ge.subTree) && Zs(
      A,
      U,
      !0
      /* shallow */
    )) : He(
      A,
      U,
      se,
      Le,
      ge,
      he,
      Te,
      Ee,
      xe
    );
  }, Be = (A, U, se, de, ge, he, Te, Ee, xe) => {
    U.slotScopeIds = Ee, A == null ? U.shapeFlag & 512 ? ge.ctx.activate(
      U,
      se,
      de,
      Te,
      xe
    ) : vt(
      U,
      se,
      de,
      ge,
      he,
      Te,
      xe
    ) : Rt(A, U, xe);
  }, vt = (A, U, se, de, ge, he, Te) => {
    const Ee = A.component = wd(
      A,
      de,
      ge
    );
    if (Uu(A) && (Ee.ctx.renderer = Q), xd(Ee, !1, Te), Ee.asyncDep) {
      if (ge && ge.registerDep(Ee, Fe, Te), !A.el) {
        const xe = Ee.subTree = ht(Dr);
        V(null, xe, U, se);
      }
    } else
      Fe(
        Ee,
        A,
        U,
        se,
        ge,
        he,
        Te
      );
  }, Rt = (A, U, se) => {
    const de = U.component = A.component;
    if (dd(A, U, se))
      if (de.asyncDep && !de.asyncResolved) {
        _e(de, U, se);
        return;
      } else
        de.next = U, de.update();
    else
      U.el = A.el, de.vnode = U;
  }, Fe = (A, U, se, de, ge, he, Te) => {
    const Ee = () => {
      if (A.isMounted) {
        let { next: Oe, bu: je, u: Me, parent: Ve, vnode: et } = A;
        {
          const wt = oc(A);
          if (wt) {
            Oe && (Oe.el = et.el, _e(A, Oe, Te)), wt.asyncDep.then(() => {
              A.isUnmounted || Ee();
            });
            return;
          }
        }
        let ot = Oe, bt;
        _o(A, !1), Oe ? (Oe.el = et.el, _e(A, Oe, Te)) : Oe = et, je && Ji(je), (bt = Oe.props && Oe.props.onVnodeBeforeUpdate) && Gn(bt, Ve, Oe, et), _o(A, !0);
        const Dt = El(A), jt = A.subTree;
        A.subTree = Dt, W(
          jt,
          Dt,
          // parent may have changed if it's in a teleport
          S(jt.el),
          // anchor may have changed if it's in a fragment
          D(jt),
          A,
          ge,
          he
        ), Oe.el = Dt.el, ot === null && pd(A, Dt.el), Me && mn(Me, ge), (bt = Oe.props && Oe.props.onVnodeUpdated) && mn(
          () => Gn(bt, Ve, Oe, et),
          ge
        );
      } else {
        let Oe;
        const { el: je, props: Me } = U, { bm: Ve, m: et, parent: ot, root: bt, type: Dt } = A, jt = ko(U);
        _o(A, !1), Ve && Ji(Ve), !jt && (Oe = Me && Me.onVnodeBeforeMount) && Gn(Oe, ot, U), _o(A, !0);
        {
          bt.ce && // @ts-expect-error _def is private
          bt.ce._def.shadowRoot !== !1 && bt.ce._injectChildStyle(Dt);
          const wt = A.subTree = El(A);
          W(
            null,
            wt,
            se,
            de,
            A,
            ge,
            he
          ), U.el = wt.el;
        }
        if (et && mn(et, ge), !jt && (Oe = Me && Me.onVnodeMounted)) {
          const wt = U;
          mn(
            () => Gn(Oe, ot, wt),
            ge
          );
        }
        (U.shapeFlag & 256 || ot && ko(ot.vnode) && ot.vnode.shapeFlag & 256) && A.a && mn(A.a, ge), A.isMounted = !0, U = se = de = null;
      }
    };
    A.scope.on();
    const xe = A.effect = new hu(Ee);
    A.scope.off();
    const me = A.update = xe.run.bind(xe), Le = A.job = xe.runIfDirty.bind(xe);
    Le.i = A, Le.id = A.uid, xe.scheduler = () => Ys(Le), _o(A, !0), me();
  }, _e = (A, U, se) => {
    U.component = A;
    const de = A.vnode.props;
    A.vnode = U, A.next = null, zf(A, U.props, de, se), ed(A, U.children, se), Ir(), ml(A), Ar();
  }, He = (A, U, se, de, ge, he, Te, Ee, xe = !1) => {
    const me = A && A.children, Le = A ? A.shapeFlag : 0, Oe = U.children, { patchFlag: je, shapeFlag: Me } = U;
    if (je > 0) {
      if (je & 128) {
        st(
          me,
          Oe,
          se,
          de,
          ge,
          he,
          Te,
          Ee,
          xe
        );
        return;
      } else if (je & 256) {
        Xe(
          me,
          Oe,
          se,
          de,
          ge,
          he,
          Te,
          Ee,
          xe
        );
        return;
      }
    }
    Me & 8 ? (Le & 16 && Pt(me, ge, he), Oe !== me && O(se, Oe)) : Le & 16 ? Me & 16 ? st(
      me,
      Oe,
      se,
      de,
      ge,
      he,
      Te,
      Ee,
      xe
    ) : Pt(me, ge, he, !0) : (Le & 8 && O(se, ""), Me & 16 && pe(
      Oe,
      se,
      de,
      ge,
      he,
      Te,
      Ee,
      xe
    ));
  }, Xe = (A, U, se, de, ge, he, Te, Ee, xe) => {
    A = A || So, U = U || So;
    const me = A.length, Le = U.length, Oe = Math.min(me, Le);
    let je;
    for (je = 0; je < Oe; je++) {
      const Me = U[je] = xe ? kr(U[je]) : Yn(U[je]);
      W(
        A[je],
        Me,
        se,
        null,
        ge,
        he,
        Te,
        Ee,
        xe
      );
    }
    me > Le ? Pt(
      A,
      ge,
      he,
      !0,
      !1,
      Oe
    ) : pe(
      U,
      se,
      de,
      ge,
      he,
      Te,
      Ee,
      xe,
      Oe
    );
  }, st = (A, U, se, de, ge, he, Te, Ee, xe) => {
    let me = 0;
    const Le = U.length;
    let Oe = A.length - 1, je = Le - 1;
    for (; me <= Oe && me <= je; ) {
      const Me = A[me], Ve = U[me] = xe ? kr(U[me]) : Yn(U[me]);
      if (_i(Me, Ve))
        W(
          Me,
          Ve,
          se,
          null,
          ge,
          he,
          Te,
          Ee,
          xe
        );
      else
        break;
      me++;
    }
    for (; me <= Oe && me <= je; ) {
      const Me = A[Oe], Ve = U[je] = xe ? kr(U[je]) : Yn(U[je]);
      if (_i(Me, Ve))
        W(
          Me,
          Ve,
          se,
          null,
          ge,
          he,
          Te,
          Ee,
          xe
        );
      else
        break;
      Oe--, je--;
    }
    if (me > Oe) {
      if (me <= je) {
        const Me = je + 1, Ve = Me < Le ? U[Me].el : de;
        for (; me <= je; )
          W(
            null,
            U[me] = xe ? kr(U[me]) : Yn(U[me]),
            se,
            Ve,
            ge,
            he,
            Te,
            Ee,
            xe
          ), me++;
      }
    } else if (me > je)
      for (; me <= Oe; )
        Kt(A[me], ge, he, !0), me++;
    else {
      const Me = me, Ve = me, et = /* @__PURE__ */ new Map();
      for (me = Ve; me <= je; me++) {
        const dt = U[me] = xe ? kr(U[me]) : Yn(U[me]);
        dt.key != null && et.set(dt.key, me);
      }
      let ot, bt = 0;
      const Dt = je - Ve + 1;
      let jt = !1, wt = 0;
      const an = new Array(Dt);
      for (me = 0; me < Dt; me++) an[me] = 0;
      for (me = Me; me <= Oe; me++) {
        const dt = A[me];
        if (bt >= Dt) {
          Kt(dt, ge, he, !0);
          continue;
        }
        let ce;
        if (dt.key != null)
          ce = et.get(dt.key);
        else
          for (ot = Ve; ot <= je; ot++)
            if (an[ot - Ve] === 0 && _i(dt, U[ot])) {
              ce = ot;
              break;
            }
        ce === void 0 ? Kt(dt, ge, he, !0) : (an[ce - Ve] = me + 1, ce >= wt ? wt = ce : jt = !0, W(
          dt,
          U[ce],
          se,
          null,
          ge,
          he,
          Te,
          Ee,
          xe
        ), bt++);
      }
      const Wn = jt ? od(an) : So;
      for (ot = Wn.length - 1, me = Dt - 1; me >= 0; me--) {
        const dt = Ve + me, ce = U[dt], bn = dt + 1 < Le ? U[dt + 1].el : de;
        an[me] === 0 ? W(
          null,
          ce,
          se,
          bn,
          ge,
          he,
          Te,
          Ee,
          xe
        ) : jt && (ot < 0 || me !== Wn[ot] ? It(ce, se, bn, 2) : ot--);
      }
    }
  }, It = (A, U, se, de, ge = null) => {
    const { el: he, type: Te, transition: Ee, children: xe, shapeFlag: me } = A;
    if (me & 6) {
      It(A.component.subTree, U, se, de);
      return;
    }
    if (me & 128) {
      A.suspense.move(U, se, de);
      return;
    }
    if (me & 64) {
      Te.move(A, U, se, Q);
      return;
    }
    if (Te === Ke) {
      s(he, U, se);
      for (let Oe = 0; Oe < xe.length; Oe++)
        It(xe[Oe], U, se, de);
      s(A.anchor, U, se);
      return;
    }
    if (Te === ea) {
      B(A, U, se);
      return;
    }
    if (de !== 2 && me & 1 && Ee)
      if (de === 0)
        Ee.beforeEnter(he), s(he, U, se), mn(() => Ee.enter(he), ge);
      else {
        const { leave: Oe, delayLeave: je, afterLeave: Me } = Ee, Ve = () => {
          A.ctx.isUnmounted ? c(he) : s(he, U, se);
        }, et = () => {
          Oe(he, () => {
            Ve(), Me && Me();
          });
        };
        je ? je(he, Ve, et) : et();
      }
    else
      s(he, U, se);
  }, Kt = (A, U, se, de = !1, ge = !1) => {
    const {
      type: he,
      props: Te,
      ref: Ee,
      children: xe,
      dynamicChildren: me,
      shapeFlag: Le,
      patchFlag: Oe,
      dirs: je,
      cacheIndex: Me
    } = A;
    if (Oe === -2 && (ge = !1), Ee != null && (Ir(), Ei(Ee, null, se, A, !0), Ar()), Me != null && (U.renderCache[Me] = void 0), Le & 256) {
      U.ctx.deactivate(A);
      return;
    }
    const Ve = Le & 1 && je, et = !ko(A);
    let ot;
    if (et && (ot = Te && Te.onVnodeBeforeUnmount) && Gn(ot, U, A), Le & 6)
      gn(A.component, se, de);
    else {
      if (Le & 128) {
        A.suspense.unmount(se, de);
        return;
      }
      Ve && wo(A, null, U, "beforeUnmount"), Le & 64 ? A.type.remove(
        A,
        U,
        se,
        Q,
        de
      ) : me && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !me.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (he !== Ke || Oe > 0 && Oe & 64) ? Pt(
        me,
        U,
        se,
        !1,
        !0
      ) : (he === Ke && Oe & 384 || !ge && Le & 16) && Pt(xe, U, se), de && qt(A);
    }
    (et && (ot = Te && Te.onVnodeUnmounted) || Ve) && mn(() => {
      ot && Gn(ot, U, A), Ve && wo(A, null, U, "unmounted");
    }, se);
  }, qt = (A) => {
    const { type: U, el: se, anchor: de, transition: ge } = A;
    if (U === Ke) {
      Vn(se, de);
      return;
    }
    if (U === ea) {
      ee(A);
      return;
    }
    const he = () => {
      c(se), ge && !ge.persisted && ge.afterLeave && ge.afterLeave();
    };
    if (A.shapeFlag & 1 && ge && !ge.persisted) {
      const { leave: Te, delayLeave: Ee } = ge, xe = () => Te(se, he);
      Ee ? Ee(A.el, he, xe) : xe();
    } else
      he();
  }, Vn = (A, U) => {
    let se;
    for (; A !== U; )
      se = L(A), c(A), A = se;
    c(U);
  }, gn = (A, U, se) => {
    const {
      bum: de,
      scope: ge,
      job: he,
      subTree: Te,
      um: Ee,
      m: xe,
      a: me,
      parent: Le,
      slots: { __: Oe }
    } = A;
    Cl(xe), Cl(me), de && Ji(de), Le && Ue(Oe) && Oe.forEach((je) => {
      Le.renderCache[je] = void 0;
    }), ge.stop(), he && (he.flags |= 8, Kt(Te, A, U, se)), Ee && mn(Ee, U), mn(() => {
      A.isUnmounted = !0;
    }, U), U && U.pendingBranch && !U.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === U.pendingId && (U.deps--, U.deps === 0 && U.resolve());
  }, Pt = (A, U, se, de = !1, ge = !1, he = 0) => {
    for (let Te = he; Te < A.length; Te++)
      Kt(A[Te], U, se, de, ge);
  }, D = (A) => {
    if (A.shapeFlag & 6)
      return D(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const U = L(A.anchor || A.el), se = U && U[$u];
    return se ? L(se) : U;
  };
  let N = !1;
  const q = (A, U, se) => {
    A == null ? U._vnode && Kt(U._vnode, null, null, !0) : W(
      U._vnode || null,
      A,
      U,
      null,
      null,
      null,
      se
    ), U._vnode = A, N || (N = !0, ml(), ju(), N = !1);
  }, Q = {
    p: W,
    um: Kt,
    m: It,
    r: qt,
    mt: vt,
    mc: pe,
    pc: He,
    pbc: ve,
    n: D,
    o: t
  };
  return {
    render: q,
    hydrate: void 0,
    createApp: Gf(q)
  };
}
function cs({ type: t, props: r }, i) {
  return i === "svg" && t === "foreignObject" || i === "mathml" && t === "annotation-xml" && r && r.encoding && r.encoding.includes("html") ? void 0 : i;
}
function _o({ effect: t, job: r }, i) {
  i ? (t.flags |= 32, r.flags |= 4) : (t.flags &= -33, r.flags &= -5);
}
function rd(t, r) {
  return (!t || t && !t.pendingBranch) && r && !r.persisted;
}
function Zs(t, r, i = !1) {
  const s = t.children, c = r.children;
  if (Ue(s) && Ue(c))
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      let p = c[d];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = c[d] = kr(c[d]), p.el = u.el), !i && p.patchFlag !== -2 && Zs(u, p)), p.type === Oa && (p.el = u.el), p.type === Dr && !p.el && (p.el = u.el);
    }
}
function od(t) {
  const r = t.slice(), i = [0];
  let s, c, d, u, p;
  const m = t.length;
  for (s = 0; s < m; s++) {
    const k = t[s];
    if (k !== 0) {
      if (c = i[i.length - 1], t[c] < k) {
        r[s] = c, i.push(s);
        continue;
      }
      for (d = 0, u = i.length - 1; d < u; )
        p = d + u >> 1, t[i[p]] < k ? d = p + 1 : u = p;
      k < t[i[d]] && (d > 0 && (r[s] = i[d - 1]), i[d] = s);
    }
  }
  for (d = i.length, u = i[d - 1]; d-- > 0; )
    i[d] = u, u = r[u];
  return i;
}
function oc(t) {
  const r = t.subTree.component;
  if (r)
    return r.asyncDep && !r.asyncResolved ? r : oc(r);
}
function Cl(t) {
  if (t)
    for (let r = 0; r < t.length; r++)
      t[r].flags |= 8;
}
const id = Symbol.for("v-scx"), ad = () => Ii(id);
function Ca(t, r) {
  return el(t, null, r);
}
function Ut(t, r, i) {
  return el(t, r, i);
}
function el(t, r, i = yt) {
  const { immediate: s, deep: c, flush: d, once: u } = i, p = on({}, i), m = r && s || !r && d !== "post";
  let k;
  if (ji) {
    if (d === "sync") {
      const Y = ad();
      k = Y.__watcherHandles || (Y.__watcherHandles = []);
    } else if (!m) {
      const Y = () => {
      };
      return Y.stop = Xn, Y.resume = Xn, Y.pause = Xn, Y;
    }
  }
  const O = Vt;
  p.call = (Y, X, W) => zn(Y, O, X, W);
  let S = !1;
  d === "post" ? p.scheduler = (Y) => {
    mn(Y, O && O.suspense);
  } : d !== "sync" && (S = !0, p.scheduler = (Y, X) => {
    X ? Y() : Ys(Y);
  }), p.augmentJob = (Y) => {
    r && (Y.flags |= 4), S && (Y.flags |= 2, O && (Y.id = O.uid, Y.i = O));
  };
  const L = gf(t, r, p);
  return ji && (k ? k.push(L) : m && L()), L;
}
function sd(t, r, i) {
  const s = this.proxy, c = At(t) ? t.includes(".") ? ic(s, t) : () => s[t] : t.bind(s, s);
  let d;
  Qe(r) ? d = r : (d = r.handler, i = r);
  const u = Vi(this), p = el(c, d.bind(s), i);
  return u(), p;
}
function ic(t, r) {
  const i = r.split(".");
  return () => {
    let s = t;
    for (let c = 0; c < i.length && s; c++)
      s = s[i[c]];
    return s;
  };
}
const ld = (t, r) => r === "modelValue" || r === "model-value" ? t.modelModifiers : t[`${r}Modifiers`] || t[`${Sn(r)}Modifiers`] || t[`${Oo(r)}Modifiers`];
function ud(t, r, ...i) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || yt;
  let c = i;
  const d = r.startsWith("update:"), u = d && ld(s, r.slice(7));
  u && (u.trim && (c = i.map((O) => At(O) ? O.trim() : O)), u.number && (c = i.map(ia)));
  let p, m = s[p = os(r)] || // also try camelCase event handler (#2249)
  s[p = os(Sn(r))];
  !m && d && (m = s[p = os(Oo(r))]), m && zn(
    m,
    t,
    6,
    c
  );
  const k = s[p + "Once"];
  if (k) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[p])
      return;
    t.emitted[p] = !0, zn(
      k,
      t,
      6,
      c
    );
  }
}
function ac(t, r, i = !1) {
  const s = r.emitsCache, c = s.get(t);
  if (c !== void 0)
    return c;
  const d = t.emits;
  let u = {}, p = !1;
  if (!Qe(t)) {
    const m = (k) => {
      const O = ac(k, r, !0);
      O && (p = !0, on(u, O));
    };
    !i && r.mixins.length && r.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !d && !p ? (Nt(t) && s.set(t, null), null) : (Ue(d) ? d.forEach((m) => u[m] = null) : on(u, d), Nt(t) && s.set(t, u), u);
}
function Ea(t, r) {
  return !t || !va(r) ? !1 : (r = r.slice(2).replace(/Once$/, ""), mt(t, r[0].toLowerCase() + r.slice(1)) || mt(t, Oo(r)) || mt(t, r));
}
function El(t) {
  const {
    type: r,
    vnode: i,
    proxy: s,
    withProxy: c,
    propsOptions: [d],
    slots: u,
    attrs: p,
    emit: m,
    render: k,
    renderCache: O,
    props: S,
    data: L,
    setupState: Y,
    ctx: X,
    inheritAttrs: W
  } = t, G = ca(t);
  let V, $;
  try {
    if (i.shapeFlag & 4) {
      const ee = c || s, fe = ee;
      V = Yn(
        k.call(
          fe,
          ee,
          O,
          S,
          Y,
          L,
          X
        )
      ), $ = p;
    } else {
      const ee = r;
      V = Yn(
        ee.length > 1 ? ee(
          S,
          { attrs: p, slots: u, emit: m }
        ) : ee(
          S,
          null
        )
      ), $ = r.props ? p : cd(p);
    }
  } catch (ee) {
    Ai.length = 0, Ra(ee, t, 1), V = ht(Dr);
  }
  let B = V;
  if ($ && W !== !1) {
    const ee = Object.keys($), { shapeFlag: fe } = B;
    ee.length && fe & 7 && (d && ee.some(Fs) && ($ = fd(
      $,
      d
    )), B = Fo(B, $, !1, !0));
  }
  return i.dirs && (B = Fo(B, null, !1, !0), B.dirs = B.dirs ? B.dirs.concat(i.dirs) : i.dirs), i.transition && Xs(B, i.transition), V = B, ca(G), V;
}
const cd = (t) => {
  let r;
  for (const i in t)
    (i === "class" || i === "style" || va(i)) && ((r || (r = {}))[i] = t[i]);
  return r;
}, fd = (t, r) => {
  const i = {};
  for (const s in t)
    (!Fs(s) || !(s.slice(9) in r)) && (i[s] = t[s]);
  return i;
};
function dd(t, r, i) {
  const { props: s, children: c, component: d } = t, { props: u, children: p, patchFlag: m } = r, k = d.emitsOptions;
  if (r.dirs || r.transition)
    return !0;
  if (i && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return s ? Ol(s, u, k) : !!u;
    if (m & 8) {
      const O = r.dynamicProps;
      for (let S = 0; S < O.length; S++) {
        const L = O[S];
        if (u[L] !== s[L] && !Ea(k, L))
          return !0;
      }
    }
  } else
    return (c || p) && (!p || !p.$stable) ? !0 : s === u ? !1 : s ? u ? Ol(s, u, k) : !0 : !!u;
  return !1;
}
function Ol(t, r, i) {
  const s = Object.keys(r);
  if (s.length !== Object.keys(t).length)
    return !0;
  for (let c = 0; c < s.length; c++) {
    const d = s[c];
    if (r[d] !== t[d] && !Ea(i, d))
      return !0;
  }
  return !1;
}
function pd({ vnode: t, parent: r }, i) {
  for (; r; ) {
    const s = r.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t)
      (t = r.vnode).el = i, r = r.parent;
    else
      break;
  }
}
const sc = (t) => t.__isSuspense;
function hd(t, r) {
  r && r.pendingBranch ? Ue(t) ? r.effects.push(...t) : r.effects.push(t) : _f(t);
}
const Ke = Symbol.for("v-fgt"), Oa = Symbol.for("v-txt"), Dr = Symbol.for("v-cmt"), ea = Symbol.for("v-stc"), Ai = [];
let En = null;
function ue(t = !1) {
  Ai.push(En = t ? null : []);
}
function md() {
  Ai.pop(), En = Ai[Ai.length - 1] || null;
}
let ki = 1;
function Il(t, r = !1) {
  ki += t, t < 0 && En && r && (En.hasOnce = !0);
}
function lc(t) {
  return t.dynamicChildren = ki > 0 ? En || So : null, md(), ki > 0 && En && En.push(t), t;
}
function ye(t, r, i, s, c, d) {
  return lc(
    y(
      t,
      r,
      i,
      s,
      c,
      d,
      !0
    )
  );
}
function en(t, r, i, s, c) {
  return lc(
    ht(
      t,
      r,
      i,
      s,
      c,
      !0
    )
  );
}
function tl(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function _i(t, r) {
  return t.type === r.type && t.key === r.key;
}
const uc = ({ key: t }) => t ?? null, ta = ({
  ref: t,
  ref_key: r,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? At(t) || Et(t) || Qe(t) ? { i: Bt, r: t, k: r, f: !!i } : t : null);
function y(t, r = null, i = null, s = 0, c = null, d = t === Ke ? 0 : 1, u = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && uc(r),
    ref: r && ta(r),
    scopeId: Mu,
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
    dynamicProps: c,
    dynamicChildren: null,
    appContext: null,
    ctx: Bt
  };
  return p ? (rl(m, i), d & 128 && t.normalize(m)) : i && (m.shapeFlag |= At(i) ? 8 : 16), ki > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  En && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && En.push(m), m;
}
const ht = vd;
function vd(t, r = null, i = null, s = 0, c = null, d = !1) {
  if ((!t || t === Wu) && (t = Dr), tl(t)) {
    const p = Fo(
      t,
      r,
      !0
      /* mergeRef: true */
    );
    return i && rl(p, i), ki > 0 && !d && En && (p.shapeFlag & 6 ? En[En.indexOf(t)] = p : En.push(p)), p.patchFlag = -2, p;
  }
  if (Ed(t) && (t = t.__vccOpts), r) {
    r = yd(r);
    let { class: p, style: m } = r;
    p && !At(p) && (r.class = Zt(p)), Nt(m) && (Gs(m) && !Ue(m) && (m = on({}, m)), r.style = Kr(m));
  }
  const u = At(t) ? 1 : sc(t) ? 128 : xf(t) ? 64 : Nt(t) ? 4 : Qe(t) ? 2 : 0;
  return y(
    t,
    r,
    i,
    s,
    c,
    u,
    d,
    !0
  );
}
function yd(t) {
  return t ? Gs(t) || Ju(t) ? on({}, t) : t : null;
}
function Fo(t, r, i = !1, s = !1) {
  const { props: c, ref: d, patchFlag: u, children: p, transition: m } = t, k = r ? fc(c || {}, r) : c, O = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: k,
    key: k && uc(k),
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
    patchFlag: r && t.type !== Ke ? u === -1 ? 16 : u | 16 : u,
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
    ssContent: t.ssContent && Fo(t.ssContent),
    ssFallback: t.ssFallback && Fo(t.ssFallback),
    el: t.el,
    anchor: t.anchor,
    ctx: t.ctx,
    ce: t.ce
  };
  return m && s && Xs(
    O,
    m.clone(O)
  ), O;
}
function nl(t = " ", r = 0) {
  return ht(Oa, null, t, r);
}
function cc(t, r) {
  const i = ht(ea, null, t);
  return i.staticCount = r, i;
}
function Ge(t = "", r = !1) {
  return r ? (ue(), en(Dr, null, t)) : ht(Dr, null, t);
}
function Yn(t) {
  return t == null || typeof t == "boolean" ? ht(Dr) : Ue(t) ? ht(
    Ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : tl(t) ? kr(t) : ht(Oa, null, String(t));
}
function kr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Fo(t);
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
      const c = r.default;
      c && (c._c && (c._d = !1), rl(t, c()), c._c && (c._d = !0));
      return;
    } else {
      i = 32;
      const c = r._;
      !c && !Ju(r) ? r._ctx = Bt : c === 3 && Bt && (Bt.slots._ === 1 ? r._ = 1 : (r._ = 2, t.patchFlag |= 1024));
    }
  else Qe(r) ? (r = { default: r, _ctx: Bt }, i = 32) : (r = String(r), s & 64 ? (i = 16, r = [nl(r)]) : i = 8);
  t.children = r, t.shapeFlag |= i;
}
function fc(...t) {
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    for (const c in s)
      if (c === "class")
        r.class !== s.class && (r.class = Zt([r.class, s.class]));
      else if (c === "style")
        r.style = Kr([r.style, s.style]);
      else if (va(c)) {
        const d = r[c], u = s[c];
        u && d !== u && !(Ue(d) && d.includes(u)) && (r[c] = d ? [].concat(d, u) : u);
      } else c !== "" && (r[c] = s[c]);
  }
  return r;
}
function Gn(t, r, i, s = null) {
  zn(t, r, 7, [
    i,
    s
  ]);
}
const gd = Xu();
let bd = 0;
function wd(t, r, i) {
  const s = t.type, c = (r ? r.appContext : t.appContext) || gd, d = {
    uid: bd++,
    vnode: t,
    type: s,
    parent: r,
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
    scope: new fu(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: r ? r.provides : Object.create(c.provides),
    ids: r ? r.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ec(s, c),
    emitsOptions: ac(s, c),
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
  return d.ctx = { _: d }, d.root = r ? r.root : d, d.emit = ud.bind(null, d), t.ce && t.ce(d), d;
}
let Vt = null;
const _d = () => Vt || Bt;
let da, Es;
{
  const t = ba(), r = (i, s) => {
    let c;
    return (c = t[i]) || (c = t[i] = []), c.push(s), (d) => {
      c.length > 1 ? c.forEach((u) => u(d)) : c[0](d);
    };
  };
  da = r(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Vt = i
  ), Es = r(
    "__VUE_SSR_SETTERS__",
    (i) => ji = i
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
function dc(t) {
  return t.vnode.shapeFlag & 4;
}
let ji = !1;
function xd(t, r = !1, i = !1) {
  r && Es(r);
  const { props: s, children: c } = t.vnode, d = dc(t);
  Xf(t, s, d, r), Zf(t, c, i || r);
  const u = d ? Nd(t, r) : void 0;
  return r && Es(!1), u;
}
function Nd(t, r) {
  const i = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, $f);
  const { setup: s } = i;
  if (s) {
    Ir();
    const c = t.setupContext = s.length > 1 ? Td(t) : null, d = Vi(t), u = Ui(
      s,
      t,
      0,
      [
        t.props,
        c
      ]
    ), p = iu(u);
    if (Ar(), d(), (p || t.sp) && !ko(t) && qu(t), p) {
      if (u.then(Al, Al), r)
        return u.then((m) => {
          Dl(t, m);
        }).catch((m) => {
          Ra(m, t, 0);
        });
      t.asyncDep = u;
    } else
      Dl(t, u);
  } else
    pc(t);
}
function Dl(t, r, i) {
  Qe(r) ? t.type.__ssrInlineRender ? t.ssrRender = r : t.render = r : Nt(r) && (t.setupState = Su(r)), pc(t);
}
function pc(t, r, i) {
  const s = t.type;
  t.render || (t.render = s.render || Xn);
  {
    const c = Vi(t);
    Ir();
    try {
      Bf(t);
    } finally {
      Ar(), c();
    }
  }
}
const Rd = {
  get(t, r) {
    return rn(t, "get", ""), t[r];
  }
};
function Td(t) {
  const r = (i) => {
    t.exposed = i || {};
  };
  return {
    attrs: new Proxy(t.attrs, Rd),
    slots: t.slots,
    emit: t.emit,
    expose: r
  };
}
function Ia(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Su(Na(t.exposed)), {
    get(r, i) {
      if (i in r)
        return r[i];
      if (i in Oi)
        return Oi[i](t);
    },
    has(r, i) {
      return i in r || i in Oi;
    }
  })) : t.proxy;
}
function Cd(t, r = !0) {
  return Qe(t) ? t.displayName || t.name : t.name || r && t.__name;
}
function Ed(t) {
  return Qe(t) && "__vccOpts" in t;
}
const Ye = (t, r) => vf(t, r, ji), Od = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Os;
const Sl = typeof window < "u" && window.trustedTypes;
if (Sl)
  try {
    Os = /* @__PURE__ */ Sl.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const hc = Os ? (t) => Os.createHTML(t) : (t) => t, Id = "http://www.w3.org/2000/svg", Ad = "http://www.w3.org/1998/Math/MathML", Nr = typeof document < "u" ? document : null, Pl = Nr && /* @__PURE__ */ Nr.createElement("template"), Dd = {
  insert: (t, r, i) => {
    r.insertBefore(t, i || null);
  },
  remove: (t) => {
    const r = t.parentNode;
    r && r.removeChild(t);
  },
  createElement: (t, r, i, s) => {
    const c = r === "svg" ? Nr.createElementNS(Id, t) : r === "mathml" ? Nr.createElementNS(Ad, t) : i ? Nr.createElement(t, { is: i }) : Nr.createElement(t);
    return t === "select" && s && s.multiple != null && c.setAttribute("multiple", s.multiple), c;
  },
  createText: (t) => Nr.createTextNode(t),
  createComment: (t) => Nr.createComment(t),
  setText: (t, r) => {
    t.nodeValue = r;
  },
  setElementText: (t, r) => {
    t.textContent = r;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Nr.querySelector(t),
  setScopeId(t, r) {
    t.setAttribute(r, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, r, i, s, c, d) {
    const u = i ? i.previousSibling : r.lastChild;
    if (c && (c === d || c.nextSibling))
      for (; r.insertBefore(c.cloneNode(!0), i), !(c === d || !(c = c.nextSibling)); )
        ;
    else {
      Pl.innerHTML = hc(
        s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t
      );
      const p = Pl.content;
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
      u ? u.nextSibling : r.firstChild,
      // last
      i ? i.previousSibling : r.lastChild
    ];
  }
}, Sd = Symbol("_vtc");
function Pd(t, r, i) {
  const s = t[Sd];
  s && (r = (r ? [r, ...s] : [...s]).join(" ")), r == null ? t.removeAttribute("class") : i ? t.setAttribute("class", r) : t.className = r;
}
const Ll = Symbol("_vod"), Ld = Symbol("_vsh"), kd = Symbol(""), jd = /(^|;)\s*display\s*:/;
function Fd(t, r, i) {
  const s = t.style, c = At(i);
  let d = !1;
  if (i && !c) {
    if (r)
      if (At(r))
        for (const u of r.split(";")) {
          const p = u.slice(0, u.indexOf(":")).trim();
          i[p] == null && na(s, p, "");
        }
      else
        for (const u in r)
          i[u] == null && na(s, u, "");
    for (const u in i)
      u === "display" && (d = !0), na(s, u, i[u]);
  } else if (c) {
    if (r !== i) {
      const u = s[kd];
      u && (i += ";" + u), s.cssText = i, d = jd.test(i);
    }
  } else r && t.removeAttribute("style");
  Ll in t && (t[Ll] = d ? s.display : "", t[Ld] && (s.display = "none"));
}
const kl = /\s*!important$/;
function na(t, r, i) {
  if (Ue(i))
    i.forEach((s) => na(t, r, s));
  else if (i == null && (i = ""), r.startsWith("--"))
    t.setProperty(r, i);
  else {
    const s = Md(t, r);
    kl.test(i) ? t.setProperty(
      Oo(s),
      i.replace(kl, ""),
      "important"
    ) : t[s] = i;
  }
}
const jl = ["Webkit", "Moz", "ms"], fs = {};
function Md(t, r) {
  const i = fs[r];
  if (i)
    return i;
  let s = Sn(r);
  if (s !== "filter" && s in t)
    return fs[r] = s;
  s = ga(s);
  for (let c = 0; c < jl.length; c++) {
    const d = jl[c] + s;
    if (d in t)
      return fs[r] = d;
  }
  return r;
}
const Fl = "http://www.w3.org/1999/xlink";
function Ml(t, r, i, s, c, d = Mc(r)) {
  s && r.startsWith("xlink:") ? i == null ? t.removeAttributeNS(Fl, r.slice(6, r.length)) : t.setAttributeNS(Fl, r, i) : i == null || d && !lu(i) ? t.removeAttribute(r) : t.setAttribute(
    r,
    d ? "" : Un(i) ? String(i) : i
  );
}
function $l(t, r, i, s, c) {
  if (r === "innerHTML" || r === "textContent") {
    i != null && (t[r] = r === "innerHTML" ? hc(i) : i);
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
  let u = !1;
  if (i === "" || i == null) {
    const p = typeof t[r];
    p === "boolean" ? i = lu(i) : i == null && p === "string" ? (i = "", u = !0) : p === "number" && (i = 0, u = !0);
  }
  try {
    t[r] = i;
  } catch {
  }
  u && t.removeAttribute(c || r);
}
function Cr(t, r, i, s) {
  t.addEventListener(r, i, s);
}
function $d(t, r, i, s) {
  t.removeEventListener(r, i, s);
}
const Bl = Symbol("_vei");
function Bd(t, r, i, s, c = null) {
  const d = t[Bl] || (t[Bl] = {}), u = d[r];
  if (s && u)
    u.value = s;
  else {
    const [p, m] = Kd(r);
    if (s) {
      const k = d[r] = Vd(
        s,
        c
      );
      Cr(t, p, k, m);
    } else u && ($d(t, p, u, m), d[r] = void 0);
  }
}
const Kl = /(?:Once|Passive|Capture)$/;
function Kd(t) {
  let r;
  if (Kl.test(t)) {
    r = {};
    let s;
    for (; s = t.match(Kl); )
      t = t.slice(0, t.length - s[0].length), r[s[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Oo(t.slice(2)), r];
}
let ds = 0;
const qd = /* @__PURE__ */ Promise.resolve(), Ud = () => ds || (qd.then(() => ds = 0), ds = Date.now());
function Vd(t, r) {
  const i = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= i.attached)
      return;
    zn(
      Wd(s, i.value),
      r,
      5,
      [s]
    );
  };
  return i.value = t, i.attached = Ud(), i;
}
function Wd(t, r) {
  if (Ue(r)) {
    const i = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      i.call(t), t._stopped = !0;
    }, r.map(
      (s) => (c) => !c._stopped && s && s(c)
    );
  } else
    return r;
}
const ql = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Gd = (t, r, i, s, c, d) => {
  const u = c === "svg";
  r === "class" ? Pd(t, s, u) : r === "style" ? Fd(t, i, s) : va(r) ? Fs(r) || Bd(t, r, i, s, d) : (r[0] === "." ? (r = r.slice(1), !0) : r[0] === "^" ? (r = r.slice(1), !1) : Hd(t, r, s, u)) ? ($l(t, r, s), !t.tagName.includes("-") && (r === "value" || r === "checked" || r === "selected") && Ml(t, r, s, u, d, r !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(r) || !At(s)) ? $l(t, Sn(r), s, d, r) : (r === "true-value" ? t._trueValue = s : r === "false-value" && (t._falseValue = s), Ml(t, r, s, u));
};
function Hd(t, r, i, s) {
  if (s)
    return !!(r === "innerHTML" || r === "textContent" || r in t && ql(r) && Qe(i));
  if (r === "spellcheck" || r === "draggable" || r === "translate" || r === "autocorrect" || r === "form" || r === "list" && t.tagName === "INPUT" || r === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (r === "width" || r === "height") {
    const c = t.tagName;
    if (c === "IMG" || c === "VIDEO" || c === "CANVAS" || c === "SOURCE")
      return !1;
  }
  return ql(r) && At(i) ? !1 : r in t;
}
const $r = (t) => {
  const r = t.props["onUpdate:modelValue"] || !1;
  return Ue(r) ? (i) => Ji(r, i) : r;
};
function Yd(t) {
  t.target.composing = !0;
}
function Ul(t) {
  const r = t.target;
  r.composing && (r.composing = !1, r.dispatchEvent(new Event("input")));
}
const Dn = Symbol("_assign"), Or = {
  created(t, { modifiers: { lazy: r, trim: i, number: s } }, c) {
    t[Dn] = $r(c);
    const d = s || c.props && c.props.type === "number";
    Cr(t, r ? "change" : "input", (u) => {
      if (u.target.composing) return;
      let p = t.value;
      i && (p = p.trim()), d && (p = ia(p)), t[Dn](p);
    }), i && Cr(t, "change", () => {
      t.value = t.value.trim();
    }), r || (Cr(t, "compositionstart", Yd), Cr(t, "compositionend", Ul), Cr(t, "change", Ul));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: r }) {
    t.value = r ?? "";
  },
  beforeUpdate(t, { value: r, oldValue: i, modifiers: { lazy: s, trim: c, number: d } }, u) {
    if (t[Dn] = $r(u), t.composing) return;
    const p = (d || t.type === "number") && !/^0\d/.test(t.value) ? ia(t.value) : t.value, m = r ?? "";
    p !== m && (document.activeElement === t && t.type !== "range" && (s && r === i || c && t.value.trim() === m) || (t.value = m));
  }
}, To = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, r, i) {
    t[Dn] = $r(i), Cr(t, "change", () => {
      const s = t._modelValue, c = Mo(t), d = t.checked, u = t[Dn];
      if (Ue(s)) {
        const p = Bs(s, c), m = p !== -1;
        if (d && !m)
          u(s.concat(c));
        else if (!d && m) {
          const k = [...s];
          k.splice(p, 1), u(k);
        }
      } else if (Bo(s)) {
        const p = new Set(s);
        d ? p.add(c) : p.delete(c), u(p);
      } else
        u(mc(t, d));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vl,
  beforeUpdate(t, r, i) {
    t[Dn] = $r(i), Vl(t, r, i);
  }
};
function Vl(t, { value: r, oldValue: i }, s) {
  t._modelValue = r;
  let c;
  if (Ue(r))
    c = Bs(r, s.props.value) > -1;
  else if (Bo(r))
    c = r.has(s.props.value);
  else {
    if (r === i) return;
    c = Co(r, mc(t, !0));
  }
  t.checked !== c && (t.checked = c);
}
const Br = {
  created(t, { value: r }, i) {
    t.checked = Co(r, i.props.value), t[Dn] = $r(i), Cr(t, "change", () => {
      t[Dn](Mo(t));
    });
  },
  beforeUpdate(t, { value: r, oldValue: i }, s) {
    t[Dn] = $r(s), r !== i && (t.checked = Co(r, s.props.value));
  }
}, yn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: r, modifiers: { number: i } }, s) {
    const c = Bo(r);
    Cr(t, "change", () => {
      const d = Array.prototype.filter.call(t.options, (u) => u.selected).map(
        (u) => i ? ia(Mo(u)) : Mo(u)
      );
      t[Dn](
        t.multiple ? c ? new Set(d) : d : d[0]
      ), t._assigning = !0, Hs(() => {
        t._assigning = !1;
      });
    }), t[Dn] = $r(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: r }) {
    Wl(t, r);
  },
  beforeUpdate(t, r, i) {
    t[Dn] = $r(i);
  },
  updated(t, { value: r }) {
    t._assigning || Wl(t, r);
  }
};
function Wl(t, r) {
  const i = t.multiple, s = Ue(r);
  if (!(i && !s && !Bo(r))) {
    for (let c = 0, d = t.options.length; c < d; c++) {
      const u = t.options[c], p = Mo(u);
      if (i)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? u.selected = r.some((k) => String(k) === String(p)) : u.selected = Bs(r, p) > -1;
        } else
          u.selected = r.has(p);
      else if (Co(Mo(u), r)) {
        t.selectedIndex !== c && (t.selectedIndex = c);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Mo(t) {
  return "_value" in t ? t._value : t.value;
}
function mc(t, r) {
  const i = r ? "_trueValue" : "_falseValue";
  return i in t ? t[i] : r;
}
const Xd = ["ctrl", "shift", "alt", "meta"], zd = {
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
  exact: (t, r) => Xd.some((i) => t[`${i}Key`] && !r.includes(i))
}, pa = (t, r) => {
  const i = t._withMods || (t._withMods = {}), s = r.join(".");
  return i[s] || (i[s] = (c, ...d) => {
    for (let u = 0; u < r.length; u++) {
      const p = zd[r[u]];
      if (p && p(c, r)) return;
    }
    return t(c, ...d);
  });
}, Qd = /* @__PURE__ */ on({ patchProp: Gd }, Dd);
let Gl;
function Jd() {
  return Gl || (Gl = td(Qd));
}
const Zd = (...t) => {
  const r = Jd().createApp(...t), { mount: i } = r;
  return r.mount = (s) => {
    const c = tp(s);
    if (!c) return;
    const d = r._component;
    !Qe(d) && !d.render && !d.template && (d.template = c.innerHTML), c.nodeType === 1 && (c.textContent = "");
    const u = i(c, !1, ep(c));
    return c instanceof Element && (c.removeAttribute("v-cloak"), c.setAttribute("data-v-app", "")), u;
  }, r;
};
function ep(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function tp(t) {
  return At(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let vc;
const Aa = (t) => vc = t, yc = (
  /* istanbul ignore next */
  Symbol()
);
function Is(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Di;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Di || (Di = {}));
function np() {
  const t = du(!0), r = t.run(() => $e({}));
  let i = [], s = [];
  const c = Na({
    install(d) {
      Aa(c), c._a = d, d.provide(yc, c), d.config.globalProperties.$pinia = c, s.forEach((u) => i.push(u)), s = [];
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
  return c;
}
const gc = () => {
};
function Hl(t, r, i, s = gc) {
  t.push(r);
  const c = () => {
    const d = t.indexOf(r);
    d > -1 && (t.splice(d, 1), s());
  };
  return !i && Ks() && pu(c), c;
}
function Ao(t, ...r) {
  t.slice().forEach((i) => {
    i(...r);
  });
}
const rp = (t) => t(), Yl = Symbol(), ps = Symbol();
function As(t, r) {
  t instanceof Map && r instanceof Map ? r.forEach((i, s) => t.set(s, i)) : t instanceof Set && r instanceof Set && r.forEach(t.add, t);
  for (const i in r) {
    if (!r.hasOwnProperty(i))
      continue;
    const s = r[i], c = t[i];
    Is(c) && Is(s) && t.hasOwnProperty(i) && !Et(s) && !Er(s) ? t[i] = As(c, s) : t[i] = s;
  }
  return t;
}
const op = (
  /* istanbul ignore next */
  Symbol()
);
function ip(t) {
  return !Is(t) || !Object.prototype.hasOwnProperty.call(t, op);
}
const { assign: Pr } = Object;
function ap(t) {
  return !!(Et(t) && t.effect);
}
function sp(t, r, i, s) {
  const { state: c, actions: d, getters: u } = r, p = i.state.value[t];
  let m;
  function k() {
    p || (i.state.value[t] = c ? c() : {});
    const O = ff(i.state.value[t]);
    return Pr(O, d, Object.keys(u || {}).reduce((S, L) => (S[L] = Na(Ye(() => {
      Aa(i);
      const Y = i._s.get(t);
      return u[L].call(Y, Y);
    })), S), {}));
  }
  return m = bc(t, k, r, i, s, !0), m;
}
function bc(t, r, i = {}, s, c, d) {
  let u;
  const p = Pr({ actions: {} }, i), m = { deep: !0 };
  let k, O, S = [], L = [], Y;
  const X = s.state.value[t];
  !d && !X && (s.state.value[t] = {}), $e({});
  let W;
  function G(pe) {
    let j;
    k = O = !1, typeof pe == "function" ? (pe(s.state.value[t]), j = {
      type: Di.patchFunction,
      storeId: t,
      events: Y
    }) : (As(s.state.value[t], pe), j = {
      type: Di.patchObject,
      payload: pe,
      storeId: t,
      events: Y
    });
    const ve = W = Symbol();
    Hs().then(() => {
      W === ve && (k = !0);
    }), O = !0, Ao(S, j, s.state.value[t]);
  }
  const V = d ? function() {
    const { state: j } = i, ve = j ? j() : {};
    this.$patch((be) => {
      Pr(be, ve);
    });
  } : (
    /* istanbul ignore next */
    gc
  );
  function $() {
    u.stop(), S = [], L = [], s._s.delete(t);
  }
  const B = (pe, j = "") => {
    if (Yl in pe)
      return pe[ps] = j, pe;
    const ve = function() {
      Aa(s);
      const be = Array.from(arguments), we = [], Be = [];
      function vt(_e) {
        we.push(_e);
      }
      function Rt(_e) {
        Be.push(_e);
      }
      Ao(L, {
        args: be,
        name: ve[ps],
        store: fe,
        after: vt,
        onError: Rt
      });
      let Fe;
      try {
        Fe = pe.apply(this && this.$id === t ? this : fe, be);
      } catch (_e) {
        throw Ao(Be, _e), _e;
      }
      return Fe instanceof Promise ? Fe.then((_e) => (Ao(we, _e), _e)).catch((_e) => (Ao(Be, _e), Promise.reject(_e))) : (Ao(we, Fe), Fe);
    };
    return ve[Yl] = !0, ve[ps] = j, ve;
  }, ee = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Hl.bind(null, L),
    $patch: G,
    $reset: V,
    $subscribe(pe, j = {}) {
      const ve = Hl(S, pe, j.detached, () => be()), be = u.run(() => Ut(() => s.state.value[t], (we) => {
        (j.flush === "sync" ? O : k) && pe({
          storeId: t,
          type: Di.direct,
          events: Y
        }, we);
      }, Pr({}, m, j)));
      return ve;
    },
    $dispose: $
  }, fe = qi(ee);
  s._s.set(t, fe);
  const ne = (s._a && s._a.runWithContext || rp)(() => s._e.run(() => (u = du()).run(() => r({ action: B }))));
  for (const pe in ne) {
    const j = ne[pe];
    if (Et(j) && !ap(j) || Er(j))
      d || (X && ip(j) && (Et(j) ? j.value = X[pe] : As(j, X[pe])), s.state.value[t][pe] = j);
    else if (typeof j == "function") {
      const ve = B(j, pe);
      ne[pe] = ve, p.actions[pe] = j;
    }
  }
  return Pr(fe, ne), Pr(ft(fe), ne), Object.defineProperty(fe, "$state", {
    get: () => s.state.value[t],
    set: (pe) => {
      G((j) => {
        Pr(j, pe);
      });
    }
  }), s._p.forEach((pe) => {
    Pr(fe, u.run(() => pe({
      store: fe,
      app: s._a,
      pinia: s,
      options: p
    })));
  }), X && d && i.hydrate && i.hydrate(fe.$state, X), k = !0, O = !0, fe;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ol(t, r, i) {
  let s;
  const c = typeof r == "function";
  s = c ? i : r;
  function d(u, p) {
    const m = Yf();
    return u = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    u || (m ? Ii(yc, null) : null), u && Aa(u), u = vc, u._s.has(t) || (c ? bc(t, r, s, u) : sp(t, s, u)), u._s.get(t);
  }
  return d.$id = t, d;
}
function Ft(t) {
  const r = ft(t), i = {};
  for (const s in r) {
    const c = r[s];
    c.effect ? i[s] = // ...
    Ye({
      get: () => t[s],
      set(d) {
        t[s] = d;
      }
    }) : (Et(c) || Er(c)) && (i[s] = // ---
    hf(t, s));
  }
  return i;
}
const Fi = ["q", "t"];
function Mi(t) {
  return `${t.prefix}${t.lnClass}${t.lnInst}`;
}
var tt = /* @__PURE__ */ ((t) => (t.GOOSE = "GOOSE", t.SMV = "SMV", t.REPORT = "Report", t.INTERNAL = "Internal", t.WIRED = "Wired", t.CONTROL = "Control", t))(tt || {});
const $o = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: [],
  Internal: []
}, Da = /* @__PURE__ */ ol("dataflow/sidebar", () => {
  const t = $e(null);
  function r(s) {
    t.value = s;
  }
  function i(s) {
    const c = s === t.value ? null : s;
    r(c);
  }
  return {
    activeElement: t,
    setActiveElement: r,
    setOrResetActiveElement: i
  };
});
var lp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function up(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ra = { exports: {} }, cp = ra.exports, Xl;
function fp() {
  return Xl || (Xl = 1, function(t, r) {
    (function(i, s) {
      t.exports = s();
    })(cp, function() {
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
      function c(e, n, o) {
        for (var a, l = 0, f = n.length; l < f; l++) !a && l in n || ((a = a || Array.prototype.slice.call(n, 0, l))[l] = n[l]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : lp, u = Object.keys, p = Array.isArray;
      function m(e, n) {
        return typeof n != "object" || u(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var k = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function S(e, n) {
        return O.call(e, n);
      }
      function L(e, n) {
        typeof n == "function" && (n = n(k(e))), (typeof Reflect > "u" ? u : Reflect.ownKeys)(n).forEach(function(o) {
          X(e, o, n[o]);
        });
      }
      var Y = Object.defineProperty;
      function X(e, n, o, a) {
        Y(e, n, m(o && S(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function W(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), X(e.prototype, "constructor", e), { extend: L.bind(null, e.prototype) };
        } };
      }
      var G = Object.getOwnPropertyDescriptor, V = [].slice;
      function $(e, n, o) {
        return V.call(e, n, o);
      }
      function B(e, n) {
        return n(e);
      }
      function ee(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function fe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function te(e, n) {
        if (typeof n == "string" && S(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, l = n.length; a < l; ++a) {
            var f = te(e, n[a]);
            o.push(f);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : te(v, n.substr(h + 1));
        }
      }
      function ne(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ee(typeof o != "string" && "length" in o);
          for (var a = 0, l = n.length; a < l; ++a) ne(e, n[a], o[a]);
        } else {
          var f, h, v = n.indexOf(".");
          v !== -1 ? (f = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? p(e) && !isNaN(parseInt(f)) ? e.splice(f, 1) : delete e[f] : e[f] = o : ne(v = !(v = e[f]) || !S(e, f) ? e[f] = {} : v, h, o)) : o === void 0 ? p(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function pe(e) {
        var n, o = {};
        for (n in e) S(e, n) && (o[n] = e[n]);
        return o;
      }
      var j = [].concat;
      function ve(e) {
        return j.apply([], e);
      }
      var Ve = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ve([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), be = new Set(Ve.map(function(e) {
        return d[e];
      })), we = null;
      function Be(e) {
        return we = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = we.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], we.set(o, a);
            for (var l = 0, f = o.length; l < f; ++l) a.push(n(o[l]));
          } else if (be.has(o.constructor)) a = o;
          else {
            var h, v = k(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), we.set(o, a), o) S(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), we = null, e;
      }
      var vt = {}.toString;
      function Rt(e) {
        return vt.call(e).slice(8, -1);
      }
      var Fe = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _e = typeof Fe == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[Fe]) && n.apply(e);
      } : function() {
        return null;
      };
      function He(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var Xe = {};
      function st(e) {
        var n, o, a, l;
        if (arguments.length === 1) {
          if (p(e)) return e.slice();
          if (this === Xe && typeof e == "string") return [e];
          if (l = _e(e)) {
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
      var It = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Me = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Tt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Me), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function qt(e, n) {
        this.name = e, this.message = n;
      }
      function Vn(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, a, l) {
          return l.indexOf(o) === a;
        }).join(`
`);
      }
      function gn(e, n, o, a) {
        this.failures = n, this.failedKeys = a, this.successCount = o, this.message = Vn(e, n);
      }
      function Pt(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Vn(e, this.failures);
      }
      W(qt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), W(gn).from(qt), W(Pt).from(qt);
      var D = Tt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), N = qt, q = Tt.reduce(function(e, n) {
        var o = n + "Error";
        function a(l, f) {
          this.name = o, l ? typeof l == "string" ? (this.message = "".concat(l).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = Kt[n] || o, this.inner = null);
        }
        return W(a).from(N), e[n] = a, e;
      }, {});
      q.Syntax = SyntaxError, q.Type = TypeError, q.Range = RangeError;
      var Q = Me.reduce(function(e, n) {
        return e[n + "Error"] = q[n], e;
      }, {}), nt = Tt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = q[n]), e;
      }, {});
      function A() {
      }
      function U(e) {
        return e;
      }
      function se(e, n) {
        return e == null || e === U ? n : function(o) {
          return n(e(o));
        };
      }
      function de(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function ge(e, n) {
        return e === A ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? de(a, this.onsuccess) : a), l && (this.onerror = this.onerror ? de(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function he(e, n) {
        return e === A ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? de(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? de(a, this.onerror) : a);
        };
      }
      function Te(e, n) {
        return e === A ? n : function(o) {
          var a = e.apply(this, arguments);
          m(o, a);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? de(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? de(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : m(a, o);
        };
      }
      function Ee(e, n) {
        return e === A ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function xe(e, n) {
        return e === A ? n : function() {
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
      nt.ModifyError = gn, nt.DexieError = qt, nt.BulkError = Pt;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Le(e) {
        me = e;
      }
      var Oe = {}, je = 100, Ve = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, k(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, k(n), e];
      }(), Me = Ve[0], Tt = Ve[1], Ve = Ve[2], Tt = Tt && Tt.then, et = Me && Me.constructor, ot = !!Ve, bt = function(e, n) {
        bn.push([e, n]), jt && (queueMicrotask(La), jt = !1);
      }, Dt = !0, jt = !0, wt = [], an = [], Wn = U, dt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ce = dt, bn = [], sn = 0, Jn = [];
      function ie(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = ce;
        if (typeof e != "function") {
          if (e !== Oe) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ur(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, l) {
          try {
            l(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                f && typeof f.then == "function" ? o(a, function(v, b) {
                  f instanceof ie ? f._then(v, b) : f.then(v, b);
                }) : (a._state = !0, a._value = f, Uo(a)), h && _n();
              }
            }, Ur.bind(null, a));
          } catch (f) {
            Ur(a, f);
          }
        }(this, e);
      }
      var qr = { get: function() {
        var e = ce, n = nr;
        function o(a, l) {
          var f = this, h = !e.global && (e !== ce || n !== nr), v = h && !Gt(), b = new ie(function(_, R) {
            Vr(f, new qo(Wo(a, e, h, v), Wo(l, e, h, v), _, R, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = Oe, o;
      }, set: function(e) {
        X(this, "then", e && e.prototype === Oe ? qr : { get: function() {
          return e;
        }, set: qr.set });
      } };
      function qo(e, n, o, a, l) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = l;
      }
      function Ur(e, n) {
        var o, a;
        an.push(n), e._state === null && (o = e._lib && wn(), n = Wn(n), e._state = !1, e._value = n, a = e, wt.some(function(l) {
          return l._value === a._value;
        }) || wt.push(a), Uo(e), o && _n());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Vr(e, n[o]);
        var l = e._PSD;
        --l.ref || l.finalize(), sn === 0 && (++sn, bt(function() {
          --sn == 0 && Wr();
        }, []));
      }
      function Vr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++sn, bt(Pa, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Pa(e, n, o) {
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
          --sn == 0 && Wr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function La() {
        ln(dt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = Dt;
        return jt = Dt = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        jt = Dt = !0;
      }
      function Wr() {
        var e = wt;
        wt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Jn.slice(0), o = n.length; o; ) n[--o]();
      }
      function Zn(e) {
        return new ie(Oe, !1, e);
      }
      function We(e, n) {
        var o = ce;
        return function() {
          var a = wn(), l = ce;
          try {
            return Ht(o, !0), e.apply(this, arguments);
          } catch (f) {
            n && n(f);
          } finally {
            Ht(l, !1), a && _n();
          }
        };
      }
      L(ie.prototype, { then: qr, _then: function(e, n) {
        Vr(this, new qo(null, null, e, n, ce));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? o : Zn)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? o : Zn)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ie.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ie.resolve(e()).then(function() {
            return Zn(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ie(function(a, l) {
          var f = setTimeout(function() {
            return l(new q.Timeout(n));
          }, e);
          o.then(a, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && X(ie.prototype, Symbol.toStringTag, "Dexie.Promise"), dt.env = Vo(), L(ie, { all: function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(l, f) {
            return ie.resolve(l).then(function(h) {
              e[f] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ie ? e : e && typeof e.then == "function" ? new ie(function(n, o) {
          e.then(n, o);
        }) : new ie(Oe, !0, e);
      }, reject: Zn, race: function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n, o) {
          e.map(function(a) {
            return ie.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return ce;
      }, set: function(e) {
        return ce = e;
      } }, totalEchoes: { get: function() {
        return nr;
      } }, newPSD: Wt, usePSD: ln, scheduler: { get: function() {
        return bt;
      }, set: function(e) {
        bt = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, n) {
        return new ie(function(o, a) {
          return Wt(function(l, f) {
            var h = ce;
            h.unhandleds = [], h.onunhandled = f, h.finalize = de(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? l() : f(b.unhandleds[0]);
              }, Jn.push(function _() {
                v(), Jn.splice(Jn.indexOf(_), 1);
              }), ++sn, bt(function() {
                --sn == 0 && Wr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), et && (et.allSettled && X(ie, "allSettled", function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(l, f) {
            return ie.resolve(l).then(function(h) {
              return a[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), et.any && typeof AggregateError < "u" && X(ie, "any", function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, l = new Array(a);
          e.forEach(function(f, h) {
            return ie.resolve(f).then(function(v) {
              return n(v);
            }, function(v) {
              l[h] = v, --a || o(new AggregateError(l));
            });
          });
        });
      }), et.withResolvers && (ie.withResolvers = et.withResolvers));
      var it = { awaits: 0, echoes: 0, id: 0 }, ka = 0, er = [], tr = 0, nr = 0, ja = 0;
      function Wt(e, n, o, a) {
        var l = ce, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++ja, dt.env, f.env = ot ? { Promise: ie, PromiseProp: { value: ie, configurable: !0, writable: !0 }, all: ie.all, race: ie.race, allSettled: ie.allSettled, any: ie.any, resolve: ie.resolve, reject: ie.reject } : {}, n && m(f, n), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = ln(f, e, o, a), f.ref === 0 && f.finalize(), a;
      }
      function xn() {
        return it.id || (it.id = ++ka), ++it.awaits, it.echoes += je, it.id;
      }
      function Gt() {
        return !!it.awaits && (--it.awaits == 0 && (it.id = 0), it.echoes = it.awaits * je, !0);
      }
      function rr(e) {
        return it.echoes && e && e.constructor === et ? (xn(), e.then(function(n) {
          return Gt(), n;
        }, function(n) {
          return Gt(), Je(n);
        })) : e;
      }
      function Fa() {
        var e = er[er.length - 1];
        er.pop(), Ht(e, !1);
      }
      function Ht(e, n) {
        var o, a = ce;
        (n ? !it.echoes || tr++ && e === ce : !tr || --tr && e === ce) || queueMicrotask(n ? (function(l) {
          ++nr, it.echoes && --it.echoes != 0 || (it.echoes = it.awaits = it.id = 0), er.push(ce), Ht(l, !0);
        }).bind(null, e) : Fa), e !== ce && (ce = e, a === dt && (dt.env = Vo()), ot && (o = dt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = d.Promise;
        return ot ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ln(e, n, o, a, l) {
        var f = ce;
        try {
          return Ht(e, !0), n(o, a, l);
        } finally {
          Ht(f, !1);
        }
      }
      function Wo(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var l = ce;
          o && xn(), Ht(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ht(l, !1), a && queueMicrotask(Gt);
          }
        };
      }
      function Gr(e) {
        Promise === et && it.echoes === 0 ? tr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Tt).indexOf("[native code]") === -1 && (xn = Gt = A);
      var Je = ie.reject, un = "￿", Mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", Nn = [], or = "__dbnames", Hr = "readonly", Yr = "readwrite";
      function cn(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ir(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = Be(n))[e], n;
        };
      }
      function Yo() {
        throw q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ie(e, n) {
        try {
          var o = Xo(e), a = Xo(n);
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
              }(zo(e), zo(n));
            case "Array":
              return function(l, f) {
                for (var h = l.length, v = f.length, b = h < v ? h : v, _ = 0; _ < b; ++_) {
                  var R = Ie(l[_], f[_]);
                  if (R !== 0) return R;
                }
                return h === v ? 0 : h < v ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function Xo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Rt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function zo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function ar(e, n, o) {
        var a = e.schema.yProps;
        return a ? (n && 0 < o.numFailures && (n = n.filter(function(l, f) {
          return !o.failures[f];
        })), Promise.all(a.map(function(l) {
          return l = l.updatesTable, n ? e.db.table(l).where("k").anyOf(n).delete() : e.db.table(l).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var Qo = (qe.prototype._trans = function(e, n, o) {
        var a = this._tx || ce.trans, l = this.name, f = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, R, g) {
          if (!g.schema[l]) throw new q.NotFound("Table " + l + " not part of transaction");
          return n(g.idbtrans, g);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === ce.trans ? a._promise(e, h, o) : Wt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: ce.transless || ce }) : function _(R, g, E, w) {
            if (R.idbdb && (R._state.openComplete || ce.letThrough || R._vip)) {
              var x = R._createTransaction(g, E, R._dbSchema);
              try {
                x.create(), R._state.PR1398_maxLoop = 3;
              } catch (C) {
                return C.name === D.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                  return _(R, g, E, w);
                })) : Je(C);
              }
              return x._promise(g, function(C, T) {
                return Wt(function() {
                  return ce.trans = x, w(C, T, x);
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
              R.open().catch(A);
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
        var n = u(e);
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
          return Ie(v, b) === 0;
        }
        var h = n.reduce(function(g, b) {
          var _ = g[0], R = g[1], g = a[b], E = e[b];
          return [_ || g, _ || !g ? cn(R, g && g.multi ? function(w) {
            return w = te(w, b), p(w) && w.some(function(x) {
              return l(E, x);
            });
          } : function(w) {
            return l(E, te(w, b));
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
        (this.schema.mappedClass = e).prototype instanceof Yo && (function(b, _) {
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
        for (var f = /* @__PURE__ */ new Set(), h = e.prototype; h; h = k(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
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
        return f && l && (h = ir(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "add", keys: n != null ? [n] : null, values: [h] });
        }).then(function(v) {
          return v.numFailures ? ie.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            ne(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(e, n) {
        return typeof e != "object" || p(e) ? this.where(":id").equals(e).modify(n) : (e = te(e, this.schema.primKey.keyPath), e === void 0 ? Je(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, qe.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ir(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? ie.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            ne(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(a) {
            return ar(n, [e], a);
          }).then(function(a) {
            return a.numFailures ? ie.reject(a.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return ar(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ie.reject(n.failures[0]) : void 0;
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
          var b = e.length, _ = _ && v ? e.map(ir(_)) : e;
          return a.core.mutate({ trans: h, type: "add", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new Pt("".concat(a.name, ".bulkAdd(): ").concat(g, " of ").concat(b, " operations failed"), x);
          });
        });
      }, qe.prototype.bulkPut = function(e, n, o) {
        var a = this, l = Array.isArray(n) ? n : void 0, f = (o = o || (l ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && l) throw new q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(ir(_)) : e;
          return a.core.mutate({ trans: h, type: "put", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new Pt("".concat(a.name, ".bulkPut(): ").concat(g, " of ").concat(b, " operations failed"), x);
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
                for (var T = 0, I = Object.keys(x); T < I.length; T++) {
                  var P = I[T], F = x[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (Ie(F, w) !== 0) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ne(C, P, F);
                }
                f.push(E), b.push(w), _.push(C);
              }
            });
            var R = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: l } }).then(function(g) {
              var E = g.numFailures, w = g.failures;
              if (E === 0) return R;
              for (var x = 0, C = Object.keys(w); x < C.length; x++) {
                var T, I = C[x], P = f[Number(I)];
                P != null && (T = w[I], delete w[I], w[P] = T);
              }
              throw new Pt("".concat(n.name, ".bulkUpdate(): ").concat(E, " of ").concat(R, " operations failed"), w);
            });
          });
        });
      }, qe.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e }).then(function(l) {
            return ar(n, e, l);
          });
        }).then(function(h) {
          var l = h.numFailures, f = h.lastResult, h = h.failures;
          if (l === 0) return f;
          throw new Pt("".concat(n.name, ".bulkDelete(): ").concat(l, " of ").concat(o, " operations failed"), h);
        });
      }, qe);
      function qe() {
      }
      function Pn(e) {
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
            v = v || Ee;
            var R = { subscribers: [], fire: b = b || A, subscribe: function(g) {
              R.subscribers.indexOf(g) === -1 && (R.subscribers.push(g), R.fire = v(R.fire, g));
            }, unsubscribe: function(g) {
              R.subscribers = R.subscribers.filter(function(E) {
                return E !== g;
              }), R.fire = R.subscribers.reduce(v, b);
            } };
            return o[h] = n[h] = R;
          }
          u(_ = h).forEach(function(g) {
            var E = _[g];
            if (p(E)) f(g, _[g][0], _[g][1]);
            else {
              if (E !== "asap") throw new q.InvalidArgument("Invalid event config");
              var w = f(g, U, function() {
                for (var x = arguments.length, C = new Array(x); x--; ) C[x] = arguments[x];
                w.subscribers.forEach(function(T) {
                  fe(function() {
                    T.apply(null, C);
                  });
                });
              });
            }
          });
        }
      }
      function Ln(e, n) {
        return W(n).from({ prototype: e }), n;
      }
      function Rn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function Xr(e, n) {
        e.filter = cn(e.filter, n);
      }
      function zr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return cn(a(), n());
        } : n, e.justLimit = o && !a;
      }
      function sr(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new q.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Jo(e, n, o) {
        var a = sr(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function lr(e, n, o, a) {
        var l = e.replayFilter ? cn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var f = {}, h = function(v, b, _) {
            var R, g;
            l && !l(b, _, function(E) {
              return b.stop(E);
            }, function(E) {
              return b.fail(E);
            }) || ((g = "" + (R = b.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(R)), S(f, g) || (f[g] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), Zo(Jo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, a, o), cn(e.algorithm, l), n, !e.keysOnly && e.valueMapper);
      }
      function Zo(e, n, o, a) {
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
              f.stop(v), h = A;
            }, function(v) {
              f.fail(v), h = A;
            }) || l(f.value, f, function(v) {
              return h = v;
            }), h();
          });
        });
      }
      var kn = (ei.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (p(o)) return c(c([], p(e) ? e : [], !0), o).sort();
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
      }, ei);
      function ei(e) {
        this["@@propmod"] = e;
      }
      var Ma = (Pe.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Je.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Pe.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, Je.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Pe.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = cn(n.algorithm, e);
      }, Pe.prototype._iterate = function(e, n) {
        return lr(this._ctx, e, n, this._ctx.table.core);
      }, Pe.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && m(o, e), n._ctx = o, n;
      }, Pe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Pe.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return lr(n, e, o, n.table.core);
        });
      }, Pe.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx, l = a.table.core;
          if (Rn(a, !0)) return l.count({ trans: o, query: { index: sr(a, l.schema), range: a.range } }).then(function(h) {
            return Math.min(h, a.limit);
          });
          var f = 0;
          return lr(a, function() {
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
          return Ie(f(b, l), f(_, l)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(v);
        }).then(n);
      }, Pe.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx;
          if (a.dir === "next" && Rn(a, !0) && 0 < a.limit) {
            var l = a.valueMapper, f = sr(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: f, range: a.range } }).then(function(v) {
              return v = v.result, l ? v.map(l) : v;
            });
          }
          var h = [];
          return lr(a, function(v) {
            return h.push(v);
          }, o, a.table.core).then(function() {
            return h;
          });
        }, e);
      }, Pe.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, Rn(n) ? zr(n, function() {
          var o = e;
          return function(a, l) {
            return o === 0 || (o === 1 ? --o : l(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : zr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Pe.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), zr(this._ctx, function() {
          var n = e;
          return function(o, a, l) {
            return --n <= 0 && a(l), 0 <= n;
          };
        }, !0), this;
      }, Pe.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, a, l) {
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
        return Xr(this._ctx, function(o) {
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
          var l = sr(n, n.table.core.schema);
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
        return Xr(this._ctx, function(l) {
          var a = l.primaryKey.toString(), l = S(n, a);
          return n[a] = !0, !l;
        }), this;
      }, Pe.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var l, f, h;
          h = typeof e == "function" ? e : (l = u(e), f = l.length, function(I) {
            for (var P = !1, F = 0; F < f; ++F) {
              var M = l[F], H = e[M], Z = te(I, M);
              H instanceof kn ? (ne(I, M, H.execute(Z)), P = !0) : Z !== H && (ne(I, M, H), P = !0);
            }
            return P;
          });
          var v = o.table.core, g = v.schema.primaryKey, b = g.outbound, _ = g.extractKey, R = 200, g = n.db._options.modifyChunkSize;
          g && (R = typeof g == "object" ? g[v.name] || g["*"] || 200 : g);
          function E(I, M) {
            var F = M.failures, M = M.numFailures;
            x += I - M;
            for (var H = 0, Z = u(F); H < Z.length; H++) {
              var z = Z[H];
              w.push(F[z]);
            }
          }
          var w = [], x = 0, C = [], T = e === ti;
          return n.clone().primaryKeys().then(function(I) {
            function P(M) {
              var H = Math.min(R, I.length - M), Z = I.slice(M, M + H);
              return (T ? Promise.resolve([]) : v.getMany({ trans: a, keys: Z, cache: "immutable" })).then(function(z) {
                var J = [], oe = [], re = b ? [] : null, ae = T ? Z : [];
                if (!T) for (var Ce = 0; Ce < H; ++Ce) {
                  var De = z[Ce], Re = { value: Be(De), primKey: I[M + Ce] };
                  h.call(Re, Re.value, Re) !== !1 && (Re.value == null ? ae.push(I[M + Ce]) : b || Ie(_(De), _(Re.value)) === 0 ? (oe.push(Re.value), b && re.push(I[M + Ce])) : (ae.push(I[M + Ce]), J.push(Re.value)));
                }
                return Promise.resolve(0 < J.length && v.mutate({ trans: a, type: "add", values: J }).then(function(ze) {
                  for (var Ne in ze.failures) ae.splice(parseInt(Ne), 1);
                  E(J.length, ze);
                })).then(function() {
                  return (0 < oe.length || F && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: re, values: oe, criteria: F, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < M }).then(function(ze) {
                    return E(oe.length, ze);
                  });
                }).then(function() {
                  return (0 < ae.length || F && T) && v.mutate({ trans: a, type: "delete", keys: ae, criteria: F, isAdditionalChunk: 0 < M }).then(function(ze) {
                    return ar(o.table, ae, ze);
                  }).then(function(ze) {
                    return E(ae.length, ze);
                  });
                }).then(function() {
                  return I.length > M + H && P(M + R);
                });
              });
            }
            var F = Rn(o) && o.limit === 1 / 0 && (typeof e != "function" || T) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < w.length) throw new gn("Error modifying one or more objects", w, x, C);
              return I.length;
            });
          });
        });
      }, Pe.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !Rn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ti) : this._write(function(o) {
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
      var ti = function(e, n) {
        return n.value = null;
      };
      function $a(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function Ba(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function gt(e, n, o) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Tn(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function ur(e, n, o, a) {
        var l, f, h, v, b, _, R, g = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return gt(e, Go);
        function E(x) {
          l = x === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = x === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = x === "next" ? $a : Ba;
          var C = o.map(function(T) {
            return { lower: f(T), upper: l(T) };
          }).sort(function(T, I) {
            return h(T.lower, I.lower);
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
          var I = x.key;
          if (typeof I != "string") return !1;
          var P = f(I);
          if (n(P, b, w)) return !0;
          for (var F = null, M = w; M < g; ++M) {
            var H = function(Z, z, J, oe, re, ae) {
              for (var Ce = Math.min(Z.length, oe.length), De = -1, Re = 0; Re < Ce; ++Re) {
                var ze = z[Re];
                if (ze !== oe[Re]) return re(Z[Re], J[Re]) < 0 ? Z.substr(0, Re) + J[Re] + J.substr(Re + 1) : re(Z[Re], oe[Re]) < 0 ? Z.substr(0, Re) + oe[Re] + J.substr(Re + 1) : 0 <= De ? Z.substr(0, De) + z[De] + J.substr(De + 1) : null;
                re(Z[Re], ze) < 0 && (De = Re);
              }
              return Ce < oe.length && ae === "next" ? Z + J.substr(Z.length) : Ce < Z.length && ae === "prev" ? Z.substr(0, J.length) : De < 0 ? null : Z.substr(0, De) + oe[De] + J.substr(De + 1);
            }(I, P, v[M], b[M], h, _);
            H === null && F === null ? w = M + 1 : (F === null || 0 < h(F, H)) && (F = H);
          }
          return C(F !== null ? function() {
            x.continue(F + R);
          } : T), !1;
        }), e;
      }
      function Yt(e, n, o, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: a };
      }
      function ni(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ri = (Object.defineProperty(at.prototype, "Collection", { get: function() {
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
          return ni(e);
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
        return typeof e != "string" ? gt(this, Go) : this.between(e, e + un, !0, !0);
      }, at.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : ur(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], un);
      }, at.prototype.equalsIgnoreCase = function(e) {
        return ur(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, at.prototype.anyOfIgnoreCase = function() {
        var e = st.apply(Xe, arguments);
        return e.length === 0 ? Tn(this) : ur(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, at.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = st.apply(Xe, arguments);
        return e.length === 0 ? Tn(this) : ur(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, un);
      }, at.prototype.anyOf = function() {
        var e = this, n = st.apply(Xe, arguments), o = this._cmp;
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
        var e = st.apply(Xe, arguments);
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
      }, at.prototype.inAnyRange = function(I, n) {
        var o = this, a = this._cmp, l = this._ascending, f = this._descending, h = this._min, v = this._max;
        if (I.length === 0) return Tn(this);
        if (!I.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return gt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, R, g = l;
        function E(P, F) {
          return g(P[0], F[0]);
        }
        try {
          (R = I.reduce(function(P, F) {
            for (var M = 0, H = P.length; M < H; ++M) {
              var Z = P[M];
              if (a(F[0], Z[1]) < 0 && 0 < a(F[1], Z[0])) {
                Z[0] = h(Z[0], F[0]), Z[1] = v(Z[1], F[1]);
                break;
              }
            }
            return M === H && P.push(F), P;
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
        }, T = x, I = new this.Collection(this, function() {
          return Yt(R[0][0], R[R.length - 1][1], !b, !_);
        });
        return I._ondirectionchange = function(P) {
          g = P === "next" ? (T = x, l) : (T = C, f), R.sort(E);
        }, I._addAlgorithm(function(P, F, M) {
          for (var H, Z = P.key; T(Z); ) if (++w === R.length) return F(M), !1;
          return !x(H = Z) && !C(H) || (o._cmp(Z, R[w][1]) === 0 || o._cmp(Z, R[w][0]) === 0 || F(function() {
            g === l ? P.continue(R[w][0]) : P.continue(R[w][1]);
          }), !1);
        }), I;
      }, at.prototype.startsWithAnyOf = function() {
        var e = st.apply(Xe, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Tn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + un];
        })) : gt(this, "startsWithAnyOf() only works with strings");
      }, at);
      function at() {
      }
      function Lt(e) {
        return We(function(n) {
          return jn(n), e(n.target.error), !1;
        });
      }
      function jn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Fn = "storagemutated", Qr = "x-storagemutated-1", Xt = Pn(null, Fn), Ka = (kt.prototype._lock = function() {
        return ee(!ce.global), ++this._reculock, this._reculock !== 1 || ce.global || (ce.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (ee(!ce.global), --this._reculock == 0) for (ce.global || (ce.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ln(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, kt.prototype._locked = function() {
        return this._reculock && ce.lockOwnerFor !== this;
      }, kt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ee(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new q.DatabaseClosed(a);
          case "MissingAPIError":
            throw new q.MissingAPI(a.message, a);
          default:
            throw new q.OpenFailed(a);
        }
        if (!this.active) throw new q.TransactionInactive();
        return ee(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = We(function(l) {
          jn(l), n._reject(e.error);
        }), e.onabort = We(function(l) {
          jn(l), n.active && n._reject(new q.Abort(e.error)), n.active = !1, n.on("abort").fire(l);
        }), e.oncomplete = We(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Xt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Je(new q.ReadOnly("Transaction is readonly"));
        if (!this.active) return Je(new q.TransactionInactive());
        if (this._locked()) return new ie(function(f, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(f, h);
          }, ce]);
        });
        if (o) return Wt(function() {
          var f = new ie(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var l = new ie(function(f, h) {
          var v = n(f, h, a);
          v && v.then && v.then(f, h);
        });
        return l._lib = !0, l;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = ie.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = f);
        }());
        var l = o._waitingFor;
        return new ie(function(f, h) {
          a.then(function(v) {
            return o._waitingQueue.push(We(f.bind(null, v)));
          }, function(v) {
            return o._waitingQueue.push(We(h.bind(null, v)));
          }).finally(function() {
            o._waitingFor === l && (o._waitingFor = null);
          });
        });
      }, kt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new q.Abort()));
      }, kt.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (S(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new q.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, kt);
      function kt() {
      }
      function Jr(e, n, o, a, l, f, h, v) {
        return { name: e, keyPath: n, unique: o, multi: a, auto: l, compound: f, src: (o && !h ? "&" : "") + (a ? "*" : "") + (l ? "++" : "") + oi(n), type: v };
      }
      function oi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Zr(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (a = function(l) {
          return [l.name, l];
        }, o.reduce(function(l, f, h) {
          return h = a(f, h), h && (l[h[0]] = h[1]), l;
        }, {})) };
        var a;
      }
      var Mn = function(e) {
        try {
          return e.only([[]]), Mn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Mn = function() {
            return un;
          }, un;
        }
      };
      function eo(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return te(o, n);
        } : function(o) {
          return te(o, e);
        };
        var n;
      }
      function ii(e) {
        return [].slice.call(e);
      }
      var qa = 0;
      function $n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ua(e, n, b) {
        function a(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = T.lower, x = T.upper, C = T.lowerOpen, T = T.upperOpen;
          return w === void 0 ? x === void 0 ? null : n.upperBound(x, !!T) : x === void 0 ? n.lowerBound(w, !!C) : n.bound(w, x, !!C, !!T);
        }
        function l(E) {
          var w, x = E.name;
          return { name: x, schema: E, mutate: function(C) {
            var T = C.trans, I = C.type, P = C.keys, F = C.values, M = C.range;
            return new Promise(function(H, Z) {
              H = We(H);
              var z = T.objectStore(x), J = z.keyPath == null, oe = I === "put" || I === "add";
              if (!oe && I !== "delete" && I !== "deleteRange") throw new Error("Invalid operation type: " + I);
              var re, ae = (P || F || { length: 1 }).length;
              if (P && F && P.length !== F.length) throw new Error("Given keys array must have same length as given values array.");
              if (ae === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ce(pt) {
                ++ze, jn(pt);
              }
              var De = [], Re = [], ze = 0;
              if (I === "deleteRange") {
                if (M.type === 4) return H({ numFailures: ze, failures: Re, results: [], lastResult: void 0 });
                M.type === 3 ? De.push(re = z.clear()) : De.push(re = z.delete(a(M)));
              } else {
                var J = oe ? J ? [F, P] : [F, null] : [P, null], Ne = J[0], ut = J[1];
                if (oe) for (var ct = 0; ct < ae; ++ct) De.push(re = ut && ut[ct] !== void 0 ? z[I](Ne[ct], ut[ct]) : z[I](Ne[ct])), re.onerror = Ce;
                else for (ct = 0; ct < ae; ++ct) De.push(re = z[I](Ne[ct])), re.onerror = Ce;
              }
              function _r(pt) {
                pt = pt.target.result, De.forEach(function(pn, bo) {
                  return pn.error != null && (Re[bo] = pn.error);
                }), H({ numFailures: ze, failures: Re, results: I === "delete" ? P : De.map(function(pn) {
                  return pn.result;
                }), lastResult: pt });
              }
              re.onerror = function(pt) {
                Ce(pt), _r(pt);
              }, re.onsuccess = _r;
            });
          }, getMany: function(C) {
            var T = C.trans, I = C.keys;
            return new Promise(function(P, F) {
              P = We(P);
              for (var M, H = T.objectStore(x), Z = I.length, z = new Array(Z), J = 0, oe = 0, re = function(De) {
                De = De.target, z[De._pos] = De.result, ++oe === J && P(z);
              }, ae = Lt(F), Ce = 0; Ce < Z; ++Ce) I[Ce] != null && ((M = H.get(I[Ce]))._pos = Ce, M.onsuccess = re, M.onerror = ae, ++J);
              J === 0 && P(z);
            });
          }, get: function(C) {
            var T = C.trans, I = C.key;
            return new Promise(function(P, F) {
              P = We(P);
              var M = T.objectStore(x).get(I);
              M.onsuccess = function(H) {
                return P(H.target.result);
              }, M.onerror = Lt(F);
            });
          }, query: (w = _, function(C) {
            return new Promise(function(T, I) {
              T = We(T);
              var P, F, M, J = C.trans, H = C.values, Z = C.limit, re = C.query, z = Z === 1 / 0 ? void 0 : Z, oe = re.index, re = re.range, J = J.objectStore(x), oe = oe.isPrimaryKey ? J : J.index(oe.name), re = a(re);
              if (Z === 0) return T({ result: [] });
              w ? ((z = H ? oe.getAll(re, z) : oe.getAllKeys(re, z)).onsuccess = function(ae) {
                return T({ result: ae.target.result });
              }, z.onerror = Lt(I)) : (P = 0, F = !H && "openKeyCursor" in oe ? oe.openKeyCursor(re) : oe.openCursor(re), M = [], F.onsuccess = function(ae) {
                var Ce = F.result;
                return Ce ? (M.push(H ? Ce.value : Ce.primaryKey), ++P === Z ? T({ result: M }) : void Ce.continue()) : T({ result: M });
              }, F.onerror = Lt(I));
            });
          }), openCursor: function(C) {
            var T = C.trans, I = C.values, P = C.query, F = C.reverse, M = C.unique;
            return new Promise(function(H, Z) {
              H = We(H);
              var oe = P.index, z = P.range, J = T.objectStore(x), J = oe.isPrimaryKey ? J : J.index(oe.name), oe = F ? M ? "prevunique" : "prev" : M ? "nextunique" : "next", re = !I && "openKeyCursor" in J ? J.openKeyCursor(a(z), oe) : J.openCursor(a(z), oe);
              re.onerror = Lt(Z), re.onsuccess = We(function(ae) {
                var Ce, De, Re, ze, Ne = re.result;
                Ne ? (Ne.___id = ++qa, Ne.done = !1, Ce = Ne.continue.bind(Ne), De = (De = Ne.continuePrimaryKey) && De.bind(Ne), Re = Ne.advance.bind(Ne), ze = function() {
                  throw new Error("Cursor not stopped");
                }, Ne.trans = T, Ne.stop = Ne.continue = Ne.continuePrimaryKey = Ne.advance = function() {
                  throw new Error("Cursor not started");
                }, Ne.fail = We(Z), Ne.next = function() {
                  var ut = this, ct = 1;
                  return this.start(function() {
                    return ct-- ? ut.continue() : ut.stop();
                  }).then(function() {
                    return ut;
                  });
                }, Ne.start = function(ut) {
                  function ct() {
                    if (re.result) try {
                      ut();
                    } catch (pt) {
                      Ne.fail(pt);
                    }
                    else Ne.done = !0, Ne.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, Ne.stop();
                  }
                  var _r = new Promise(function(pt, pn) {
                    pt = We(pt), re.onerror = Lt(pn), Ne.fail = pn, Ne.stop = function(bo) {
                      Ne.stop = Ne.continue = Ne.continuePrimaryKey = Ne.advance = ze, pt(bo);
                    };
                  });
                  return re.onsuccess = We(function(pt) {
                    re.onsuccess = ct, ct();
                  }), Ne.continue = Ce, Ne.continuePrimaryKey = De, Ne.advance = Re, ct(), _r;
                }, H(Ne)) : H(null);
              }, Z);
            });
          }, count: function(C) {
            var T = C.query, I = C.trans, P = T.index, F = T.range;
            return new Promise(function(M, H) {
              var Z = I.objectStore(x), z = P.isPrimaryKey ? Z : Z.index(P.name), Z = a(F), z = Z ? z.count(Z) : z.count();
              z.onsuccess = We(function(J) {
                return M(J.target.result);
              }), z.onerror = Lt(H);
            });
          } };
        }
        var f, h, v, R = (h = b, v = ii((f = e).objectStoreNames), { schema: { name: f.name, tables: v.map(function(E) {
          return h.objectStore(E);
        }).map(function(E) {
          var w = E.keyPath, T = E.autoIncrement, x = p(w), C = {}, T = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: T, unique: !0, extractKey: eo(w) }, indexes: ii(E.indexNames).map(function(I) {
            return E.index(I);
          }).map(function(M) {
            var P = M.name, F = M.unique, H = M.multiEntry, M = M.keyPath, H = { name: P, compound: p(M), keyPath: M, unique: F, multiEntry: H, extractKey: eo(M) };
            return C[$n(M)] = H;
          }), getIndexByKeyPath: function(I) {
            return C[$n(I)];
          } };
          return C[":id"] = T.primaryKey, w != null && (C[$n(w)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = R.schema, _ = R.hasGetAll, R = b.tables.map(l), g = {};
        return R.forEach(function(E) {
          return g[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!g[E]) throw new Error("Table '".concat(E, "' not found"));
          return g[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: Mn(n), schema: b };
      }
      function Va(e, n, o, a) {
        var l = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = Ua(n, l, a), e.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, a)) };
      }
      function cr(e, a) {
        var o = a.db, a = Va(e._middlewares, o, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(l) {
          var f = l.name;
          e.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (l.core = e.core.table(f), e[f] instanceof e.Table && (e[f].core = l.core));
        });
      }
      function fr(e, n, o, a) {
        o.forEach(function(l) {
          var f = a[l];
          n.forEach(function(h) {
            var v = function b(_, R) {
              return G(_, R) || (_ = k(_)) && b(_, R);
            }(h, l);
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? X(h, l, { get: function() {
              return this.table(l);
            }, set: function(b) {
              Y(this, l, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[l] = new e.Table(l, f));
          });
        });
      }
      function to(e, n) {
        n.forEach(function(o) {
          for (var a in o) o[a] instanceof e.Table && delete o[a];
        });
      }
      function Wa(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function Ga(e, n, o, a) {
        var l = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = Zr("$meta", si("")[0], []), e._storeNames.push("$meta"));
        var f = e._createTransaction("readwrite", e._storeNames, l);
        f.create(o), f._completion.catch(a);
        var h = f._reject.bind(f), v = ce.transless || ce;
        Wt(function() {
          return ce.trans = f, ce.transless = v, n !== 0 ? (cr(e, o), _ = n, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(R) {
            return R ?? _;
          }) : ie.resolve(_)).then(function(R) {
            return E = R, w = f, x = o, C = [], R = (g = e)._versions, T = g._dbSchema = pr(0, g.idbdb, x), (R = R.filter(function(I) {
              return I._cfg.version >= E;
            })).length !== 0 ? (R.forEach(function(I) {
              C.push(function() {
                var P = T, F = I._cfg.dbschema;
                hr(g, P, x), hr(g, F, x), T = g._dbSchema = F;
                var M = no(P, F);
                M.add.forEach(function(oe) {
                  ro(x, oe[0], oe[1].primKey, oe[1].indexes);
                }), M.change.forEach(function(oe) {
                  if (oe.recreate) throw new q.Upgrade("Not yet support for changing primary key");
                  var re = x.objectStore(oe.name);
                  oe.add.forEach(function(ae) {
                    return dr(re, ae);
                  }), oe.change.forEach(function(ae) {
                    re.deleteIndex(ae.name), dr(re, ae);
                  }), oe.del.forEach(function(ae) {
                    return re.deleteIndex(ae);
                  });
                });
                var H = I._cfg.contentUpgrade;
                if (H && I._cfg.version > E) {
                  cr(g, x), w._memoizedTables = {};
                  var Z = pe(F);
                  M.del.forEach(function(oe) {
                    Z[oe] = P[oe];
                  }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], u(Z), Z), w.schema = Z;
                  var z, J = It(H);
                  return J && xn(), M = ie.follow(function() {
                    var oe;
                    (z = H(w)) && J && (oe = Gt.bind(null, null), z.then(oe, oe));
                  }), z && typeof z.then == "function" ? ie.resolve(z) : M.then(function() {
                    return z;
                  });
                }
              }), C.push(function(P) {
                var F, M, H = I._cfg.dbschema;
                F = H, M = P, [].slice.call(M.db.objectStoreNames).forEach(function(Z) {
                  return F[Z] == null && M.db.deleteObjectStore(Z);
                }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), w.schema = g._dbSchema;
              }), C.push(function(P) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === I._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(F) {
                  return F !== "$meta";
                })) : P.objectStore("$meta").put(I._cfg.version, "version"));
              });
            }), function I() {
              return C.length ? ie.resolve(C.shift()(w.idbtrans)).then(I) : ie.resolve();
            }().then(function() {
              ai(T, x);
            })) : ie.resolve();
            var g, E, w, x, C, T;
          }).catch(h)) : (u(l).forEach(function(R) {
            ro(o, R, l[R].primKey, l[R].indexes);
          }), cr(e, o), void ie.follow(function() {
            return e.on.populate.fire(f);
          }).catch(h));
          var b, _;
        });
      }
      function Ha(e, n) {
        ai(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = pr(0, e.idbdb, n);
        hr(e, e._dbSchema, n);
        for (var a = 0, l = no(o, e._dbSchema).change; a < l.length; a++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = n.objectStore(h.name);
            h.add.forEach(function(b) {
              me && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), dr(v, b);
            });
          }(l[a]);
          if (typeof f == "object") return f.value;
        }
      }
      function no(e, n) {
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
      function ro(e, n, o, a) {
        var l = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(f) {
          return dr(l, f);
        }), l;
      }
      function ai(e, n) {
        u(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (me && console.debug("Dexie: Creating missing table", o), ro(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function dr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function pr(e, n, o) {
        var a = {};
        return $(n.objectStoreNames, 0).forEach(function(l) {
          for (var f = o.objectStore(l), h = Jr(oi(_ = f.keyPath), _ || "", !0, !1, !!f.autoIncrement, _ && typeof _ != "string", !0), v = [], b = 0; b < f.indexNames.length; ++b) {
            var R = f.index(f.indexNames[b]), _ = R.keyPath, R = Jr(R.name, _, !!R.unique, !!R.multiEntry, !1, _ && typeof _ != "string", !1);
            v.push(R);
          }
          a[l] = Zr(l, h, v);
        }), a;
      }
      function hr(e, n, o) {
        for (var a = o.db.objectStoreNames, l = 0; l < a.length; ++l) {
          var f = a[l], h = o.objectStore(f);
          e._hasGetAll = "getAll" in h;
          for (var v = 0; v < h.indexNames.length; ++v) {
            var b = h.indexNames[v], _ = h.index(b).keyPath, R = typeof _ == "string" ? _ : "[" + $(_).join("+") + "]";
            !n[f] || (_ = n[f].idxByName[R]) && (_.name = b, delete n[f].idxByName[R], n[f].idxByName[b] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function si(e) {
        return e.split(",").map(function(n, o) {
          var f = n.split(":"), a = (l = f[1]) === null || l === void 0 ? void 0 : l.trim(), l = (n = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return Jr(l, f || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), p(f), o === 0, a);
        });
      }
      var Ya = (Cn.prototype._createTableSchema = Zr, Cn.prototype._parseIndexSyntax = si, Cn.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        u(e).forEach(function(a) {
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
        }), n._dbSchema = l, to(n, [n._allTables, n, n.Transaction.prototype]), fr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], u(l), l), n._storeNames = u(l), this;
      }, Cn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = xe(this._cfg.contentUpgrade || A, e), this;
      }, Cn);
      function Cn() {
      }
      function oo(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new $t(or, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function ao(e) {
        return Wt(function() {
          return ce.letThrough = !0, e();
        });
      }
      function so(e) {
        return !("from" in e);
      }
      var lt = function(e, n) {
        if (!this) {
          var o = new lt();
          return e && "d" in e && m(o, e), o;
        }
        m(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Bn(e, n, o) {
        var a = Ie(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (so(e)) return m(e, { from: n, to: o, d: 1 });
          var l = e.l, a = e.r;
          if (Ie(o, e.from) < 0) return l ? Bn(l, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          if (0 < Ie(n, e.to)) return a ? Bn(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          Ie(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Ie(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, l && !e.l && Kn(e, l), a && o && Kn(e, a);
        }
      }
      function Kn(e, n) {
        so(n) || function o(a, b) {
          var f = b.from, h = b.to, v = b.l, b = b.r;
          Bn(a, f, h), v && o(a, v), b && o(a, b);
        }(e, n);
      }
      function li(e, n) {
        var o = mr(n), a = o.next();
        if (a.done) return !1;
        for (var l = a.value, f = mr(e), h = f.next(l.from), v = h.value; !a.done && !h.done; ) {
          if (Ie(v.from, l.to) <= 0 && 0 <= Ie(v.to, l.from)) return !0;
          Ie(l.from, v.from) < 0 ? l = (a = o.next(v.from)).value : v = (h = f.next(l.from)).value;
        }
        return !1;
      }
      function mr(e) {
        var n = so(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Ie(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Ie(o, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function ui(e) {
        var n, o, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), l = 1 < a ? "r" : a < -1 ? "l" : "";
        l && (n = l == "r" ? "l" : "r", o = s({}, e), a = e[l], e.from = a.from, e.to = a.to, e[l] = a[l], o[l] = a[n], (e[n] = o).d = ci(o)), e.d = ci(e);
      }
      function ci(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function vr(e, n) {
        return u(n).forEach(function(o) {
          e[o] ? Kn(e[o], n[o]) : e[o] = function a(l) {
            var f, h, v = {};
            for (f in l) S(l, f) && (h = l[f], v[f] = !h || typeof h != "object" || be.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function lo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && li(n[o], e[o]);
        });
      }
      L(lt.prototype, ((Tt = { add: function(e) {
        return Kn(this, e), this;
      }, addKey: function(e) {
        return Bn(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return Bn(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = mr(this).next(e).value;
        return n && Ie(n.from, e) <= 0 && 0 <= Ie(n.to, e);
      } })[Fe] = function() {
        return mr(this);
      }, Tt));
      var fn = {}, uo = {}, co = !1;
      function yr(e) {
        vr(uo, e), co || (co = !0, setTimeout(function() {
          co = !1, fo(uo, !(uo = {}));
        }, 0));
      }
      function fo(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, l = Object.values(fn); a < l.length; a++) fi(h = l[a], e, o, n);
        else for (var f in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (h = fn["idb://".concat(f, "/").concat(v)]) && fi(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function fi(e, n, o, a) {
        for (var l = [], f = 0, h = Object.entries(e.queries.query); f < h.length; f++) {
          for (var v = h[f], b = v[0], _ = [], R = 0, g = v[1]; R < g.length; R++) {
            var E = g[R];
            lo(n, E.obsSet) ? E.subscribers.forEach(function(T) {
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
      function Xa(e) {
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
          return new ie(function(E, w) {
            if (h(), !o) throw new q.MissingAPI();
            var x = e.name, C = n.autoSchema || !l ? o.open(x) : o.open(x, l);
            if (!C) throw new q.MissingAPI();
            C.onerror = Lt(w), C.onblocked = We(e._fireOnBlocked), C.onupgradeneeded = We(function(T) {
              var I;
              R = C.transaction, n.autoSchema && !e._options.allowEmptyDB ? (C.onerror = jn, R.abort(), C.result.close(), (I = o.deleteDatabase(x)).onsuccess = I.onerror = We(function() {
                w(new q.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (R.onerror = Lt(w), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, g = T < 1, e.idbdb = C.result, f && Ha(e, R), Ga(e, T / 10, R, w));
            }, w), C.onsuccess = We(function() {
              R = null;
              var T, I, P, F, M, H = e.idbdb = C.result, Z = $(H.objectStoreNames);
              if (0 < Z.length) try {
                var z = H.transaction((F = Z).length === 1 ? F[0] : F, "readonly");
                if (n.autoSchema) I = H, P = z, (T = e).verno = I.version / 10, P = T._dbSchema = pr(0, I, P), T._storeNames = $(I.objectStoreNames, 0), fr(T, [T._allTables], u(P), P);
                else if (hr(e, e._dbSchema, z), ((M = no(pr(0, (M = e).idbdb, z), M._dbSchema)).add.length || M.change.some(function(J) {
                  return J.add.length || J.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), l = H.version + 1, f = !0, E(v());
                cr(e, z);
              } catch {
              }
              Nn.push(e), H.onversionchange = We(function(J) {
                n.vcFired = !0, e.on("versionchange").fire(J);
              }), H.onclose = We(function(J) {
                e.on("close").fire(J);
              }), g && (M = e._deps, z = x, H = M.indexedDB, M = M.IDBKeyRange, io(H) || z === or || oo(H, M).put({ name: z }).catch(A)), E();
            }, w);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < l) return l = 0, v();
            }
            return ie.reject(E);
          });
        }
        var b, _ = n.dbReadyResolve, R = null, g = !1;
        return ie.race([a, (typeof navigator > "u" ? ie.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function w() {
            return indexedDB.databases().finally(E);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], ie.resolve(ao(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(xe, A);
              return n.onReadyBeingFired = [], ie.resolve(ao(function() {
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
              x.name && (E["idb://".concat(e.name, "/").concat(w.name, "/").concat(x.name)] = new lt(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(w.name, "/")] = E["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new lt(-1 / 0, [[[]]]);
          }), Xt(Fn).fire(E), fo(E, !0)), e;
        });
      }
      function po(e) {
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
      function gr(e, n, o) {
        for (var a = p(e) ? e.slice() : [e], l = 0; l < o; ++l) a.push(n);
        return a;
      }
      var za = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, l = {}, f = [];
          function h(g, E, w) {
            var x = $n(g), C = l[x] = l[x] || [], T = g == null ? 0 : typeof g == "string" ? 1 : g.length, I = 0 < E, I = s(s({}, w), { name: I ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: I, keyTail: E, keyLength: T, extractKey: eo(g), unique: !I && w.unique });
            return C.push(I), I.isPrimaryKey || f.push(I), 1 < T && h(T === 2 ? g[0] : g.slice(0, T - 1), E + 1, w), C.sort(function(P, F) {
              return P.keyTail - F.keyTail;
            }), I;
          }
          n = h(a.primaryKey.keyPath, 0, a.primaryKey), l[":id"] = [n];
          for (var v = 0, b = a.indexes; v < b.length; v++) {
            var _ = b[v];
            h(_.keyPath, 0, _);
          }
          function R(g) {
            var E, w = g.query.index;
            return w.isVirtual ? s(s({}, g), { query: { index: w.lowLevelIndex, range: (E = g.query.range, w = w.keyTail, { type: E.type === 1 ? 2 : E.type, lower: gr(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, w), lowerOpen: !0, upper: gr(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, w), upperOpen: !0 }) } }) : g;
          }
          return s(s({}, o), { schema: s(s({}, a), { primaryKey: n, indexes: f, getIndexByKeyPath: function(g) {
            return (g = l[$n(g)]) && g[0];
          } }), count: function(g) {
            return o.count(R(g));
          }, query: function(g) {
            return o.query(R(g));
          }, openCursor: function(g) {
            var E = g.query.index, w = E.keyTail, x = E.isVirtual, C = E.keyLength;
            return x ? o.openCursor(R(g)).then(function(I) {
              return I && T(I);
            }) : o.openCursor(g);
            function T(I) {
              return Object.create(I, { continue: { value: function(P) {
                P != null ? I.continue(gr(P, g.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : g.unique ? I.continue(I.key.slice(0, C).concat(g.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : I.continue();
              } }, continuePrimaryKey: { value: function(P, F) {
                I.continuePrimaryKey(gr(P, e.MAX_KEY, w), F);
              } }, primaryKey: { get: function() {
                return I.primaryKey;
              } }, key: { get: function() {
                var P = I.key;
                return C === 1 ? P[0] : P.slice(0, C);
              } }, value: { get: function() {
                return I.value;
              } } });
            }
          } });
        } });
      } };
      function ho(e, n, o, a) {
        return o = o || {}, a = a || "", u(e).forEach(function(l) {
          var f, h, v;
          S(n, l) ? (f = e[l], h = n[l], typeof f == "object" && typeof h == "object" && f && h ? (v = Rt(f)) !== Rt(h) ? o[a + l] = n[l] : v === "Object" ? ho(f, h, o, a + l + ".") : f !== h && (o[a + l] = n[l]) : f !== h && (o[a + l] = n[l])) : o[a + l] = void 0;
        }), u(n).forEach(function(l) {
          S(e, l) || (o[a + l] = n[l]);
        }), o;
      }
      function mo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var Qa = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = ce.trans, h = f.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (l.type) {
              case "add":
                if (b.fire === A) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "put":
                if (b.fire === A && _.fire === A) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "delete":
                if (v.fire === A) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "deleteRange":
                if (v.fire === A) break;
                return f._promise("readwrite", function() {
                  return function g(E, w, x) {
                    return o.query({ trans: E, values: !1, query: { index: a, range: w }, limit: x }).then(function(C) {
                      var T = C.result;
                      return R({ type: "delete", keys: T, trans: E }).then(function(I) {
                        return 0 < I.numFailures ? Promise.reject(I.failures[0]) : T.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : g(E, s(s({}, w), { lower: T[T.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function R(g) {
              var E, w, x, C = ce.trans, T = g.keys || mo(a, g);
              if (!T) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? s(s({}, g), { keys: T }) : s({}, g)).type !== "delete" && (g.values = c([], g.values)), g.keys && (g.keys = c([], g.keys)), E = o, x = T, ((w = g).type === "add" ? Promise.resolve([]) : E.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(I) {
                var P = T.map(function(F, M) {
                  var H, Z, z, J = I[M], oe = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? v.fire.call(oe, F, J, C) : g.type === "add" || J === void 0 ? (H = b.fire.call(oe, F, g.values[M], C), F == null && H != null && (g.keys[M] = F = H, a.outbound || ne(g.values[M], a.keyPath, F))) : (H = ho(J, g.values[M]), (Z = _.fire.call(oe, H, F, J, C)) && (z = g.values[M], Object.keys(Z).forEach(function(re) {
                    S(z, re) ? z[re] = Z[re] : ne(z, re, Z[re]);
                  }))), oe;
                });
                return o.mutate(g).then(function(F) {
                  for (var M = F.failures, H = F.results, Z = F.numFailures, F = F.lastResult, z = 0; z < T.length; ++z) {
                    var J = (H || T)[z], oe = P[z];
                    J == null ? oe.onerror && oe.onerror(M[z]) : oe.onsuccess && oe.onsuccess(g.type === "put" && I[z] ? g.values[z] : J);
                  }
                  return { failures: M, results: H, numFailures: Z, lastResult: F };
                }).catch(function(F) {
                  return P.forEach(function(M) {
                    return M.onerror && M.onerror(F);
                  }), Promise.reject(F);
                });
              });
            }
          } });
        } });
      } };
      function di(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], l = 0, f = 0; l < n.keys.length && f < e.length; ++l) Ie(n.keys[l], e[f]) === 0 && (a.push(o ? Be(n.values[l]) : n.values[l]), ++f);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Ja = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return s(s({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var l = di(a.keys, a.trans._cache, a.cache === "clone");
            return l ? ie.resolve(l) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Be(f) : f }, f;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function pi(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function hi(e, n) {
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
      var Za = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new lt(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(a, l, f) {
          if (ce.subscr && l !== "readonly") throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ce.querier));
          return e.transaction(a, l, f);
        }, table: function(a) {
          var l = e.table(a), f = l.schema, h = f.primaryKey, g = f.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && g.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), R = s(s({}, l), { mutate: function(w) {
            function x(re) {
              return re = "idb://".concat(n, "/").concat(a, "/").concat(re), F[re] || (F[re] = new lt());
            }
            var C, T, I, P = w.trans, F = w.mutatedParts || (w.mutatedParts = {}), M = x(""), H = x(":dels"), Z = w.type, oe = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [mo(h, w).filter(function(re) {
              return re;
            }), w.values] : [], z = oe[0], J = oe[1], oe = w.trans._cache;
            return p(z) ? (M.addKeys(z), (oe = Z === "delete" || z.length === J.length ? di(z, oe) : null) || H.addKeys(z), (oe || J) && (C = x, T = oe, I = J, f.indexes.forEach(function(re) {
              var ae = C(re.name || "");
              function Ce(Re) {
                return Re != null ? re.extractKey(Re) : null;
              }
              function De(Re) {
                return re.multiEntry && p(Re) ? Re.forEach(function(ze) {
                  return ae.addKey(ze);
                }) : ae.addKey(Re);
              }
              (T || I).forEach(function(Re, ut) {
                var Ne = T && Ce(T[ut]), ut = I && Ce(I[ut]);
                Ie(Ne, ut) !== 0 && (Ne != null && De(Ne), ut != null && De(ut));
              });
            }))) : z ? (J = { from: (J = z.lower) !== null && J !== void 0 ? J : e.MIN_KEY, to: (J = z.upper) !== null && J !== void 0 ? J : e.MAX_KEY }, H.add(J), M.add(J)) : (M.add(o), H.add(o), f.indexes.forEach(function(re) {
              return x(re.name).add(o);
            })), l.mutate(w).then(function(re) {
              return !z || w.type !== "add" && w.type !== "put" || (M.addKeys(re.results), _ && _.forEach(function(ae) {
                for (var Ce = w.values.map(function(Ne) {
                  return ae.extractKey(Ne);
                }), De = ae.keyPath.findIndex(function(Ne) {
                  return Ne === h.keyPath;
                }), Re = 0, ze = re.results.length; Re < ze; ++Re) Ce[Re][De] = re.results[Re];
                x(ae.name).addKeys(Ce);
              })), P.mutatedParts = vr(P.mutatedParts || {}, F), re;
            });
          } }), g = function(x) {
            var C = x.query, x = C.index, C = C.range;
            return [x, new lt((x = C.lower) !== null && x !== void 0 ? x : e.MIN_KEY, (C = C.upper) !== null && C !== void 0 ? C : e.MAX_KEY)];
          }, E = { get: function(w) {
            return [h, new lt(w.key)];
          }, getMany: function(w) {
            return [h, new lt().addKeys(w.keys)];
          }, count: g, query: g, openCursor: g };
          return u(E).forEach(function(w) {
            R[w] = function(x) {
              var C = ce.subscr, T = !!C, I = pi(ce, l) && hi(w, x) ? x.obsSet = {} : C;
              if (T) {
                var P = function(J) {
                  return J = "idb://".concat(n, "/").concat(a, "/").concat(J), I[J] || (I[J] = new lt());
                }, F = P(""), M = P(":dels"), C = E[w](x), T = C[0], C = C[1];
                if ((w === "query" && T.isPrimaryKey && !x.values ? M : P(T.name || "")).add(C), !T.isPrimaryKey) {
                  if (w !== "count") {
                    var H = w === "query" && b && x.values && l.query(s(s({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(J) {
                      if (w === "query") {
                        if (b && x.values) return H.then(function(Ce) {
                          return Ce = Ce.result, F.addKeys(Ce), J;
                        });
                        var oe = x.values ? J.result.map(v) : J.result;
                        (x.values ? F : M).addKeys(oe);
                      } else if (w === "openCursor") {
                        var re = J, ae = x.values;
                        return re && Object.create(re, { key: { get: function() {
                          return M.addKey(re.primaryKey), re.key;
                        } }, primaryKey: { get: function() {
                          var Ce = re.primaryKey;
                          return M.addKey(Ce), Ce;
                        } }, value: { get: function() {
                          return ae && F.addKey(re.primaryKey), re.value;
                        } } });
                      }
                      return J;
                    });
                  }
                  M.add(o);
                }
              }
              return l[w].apply(this, arguments);
            };
          }), R;
        } });
      } };
      function mi(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === a ? null : (n = s({}, n), p(n.keys) && (n.keys = n.keys.filter(function(l, f) {
          return !(f in o.failures);
        })), "values" in n && p(n.values) && (n.values = n.values.filter(function(l, f) {
          return !(f in o.failures);
        })), n);
      }
      function vo(e, n) {
        return o = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Ie(o, a.lower) : 0 <= Ie(o, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Ie(e, n.upper) < 0 : Ie(e, n.upper) <= 0));
        var o, a;
      }
      function vi(e, n, E, a, l, f) {
        if (!E || E.length === 0) return e;
        var h = n.query.index, v = h.multiEntry, b = n.query.range, _ = a.schema.primaryKey.extractKey, R = h.extractKey, g = (h.lowLevelIndex || h).extractKey, E = E.reduce(function(w, x) {
          var C = w, T = [];
          if (x.type === "add" || x.type === "put") for (var I = new lt(), P = x.values.length - 1; 0 <= P; --P) {
            var F, M = x.values[P], H = _(M);
            I.hasKey(H) || (F = R(M), (v && p(F) ? F.some(function(re) {
              return vo(re, b);
            }) : vo(F, b)) && (I.addKey(H), T.push(M)));
          }
          switch (x.type) {
            case "add":
              var Z = new lt().addKeys(n.values ? w.map(function(ae) {
                return _(ae);
              }) : w), C = w.concat(n.values ? T.filter(function(ae) {
                return ae = _(ae), !Z.hasKey(ae) && (Z.addKey(ae), !0);
              }) : T.map(function(ae) {
                return _(ae);
              }).filter(function(ae) {
                return !Z.hasKey(ae) && (Z.addKey(ae), !0);
              }));
              break;
            case "put":
              var z = new lt().addKeys(x.values.map(function(ae) {
                return _(ae);
              }));
              C = w.filter(function(ae) {
                return !z.hasKey(n.values ? _(ae) : ae);
              }).concat(n.values ? T : T.map(function(ae) {
                return _(ae);
              }));
              break;
            case "delete":
              var J = new lt().addKeys(x.keys);
              C = w.filter(function(ae) {
                return !J.hasKey(n.values ? _(ae) : ae);
              });
              break;
            case "deleteRange":
              var oe = x.range;
              C = w.filter(function(ae) {
                return !vo(_(ae), oe);
              });
          }
          return C;
        }, e);
        return E === e ? e : (E.sort(function(w, x) {
          return Ie(g(w), g(x)) || Ie(_(w), _(x));
        }), n.limit && n.limit < 1 / 0 && (E.length > n.limit ? E.length = n.limit : e.length === n.limit && E.length < n.limit && (l.dirty = !0)), f ? Object.freeze(E) : E);
      }
      function yi(e, n) {
        return Ie(e.lower, n.lower) === 0 && Ie(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function es(e, n) {
        return function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Ie(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return 1;
            if (f) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Ie(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return -1;
            if (f) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function ts(e, n, o, a) {
        e.subscribers.add(o), a.addEventListener("abort", function() {
          var l, f;
          e.subscribers.delete(o), e.subscribers.size === 0 && (l = e, f = n, setTimeout(function() {
            l.subscribers.size === 0 && He(f, l);
          }, 3e3));
        });
      }
      var ns = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return s(s({}, e), { transaction: function(o, a, l) {
          var f, h, v = e.transaction(o, a, l);
          return a === "readwrite" && (h = (f = new AbortController()).signal, l = function(b) {
            return function() {
              if (f.abort(), a === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), R = 0, g = o; R < g.length; R++) {
                  var E = g[R], w = fn["idb://".concat(n, "/").concat(E)];
                  if (w) {
                    var x = e.table(E), C = w.optimisticOps.filter(function(ae) {
                      return ae.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var T = 0, I = Object.values(w.queries.query); T < I.length; T++) for (var P = 0, F = (Z = I[T]).slice(); P < F.length; P++) lo((z = F[P]).obsSet, v.mutatedParts) && (He(Z, z), z.subscribers.forEach(function(ae) {
                      return _.add(ae);
                    }));
                    else if (0 < C.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(ae) {
                        return ae.trans !== v;
                      });
                      for (var M = 0, H = Object.values(w.queries.query); M < H.length; M++) for (var Z, z, J, oe = 0, re = (Z = H[M]).slice(); oe < re.length; oe++) (z = re[oe]).res != null && v.mutatedParts && (b && !z.dirty ? (J = Object.isFrozen(z.res), J = vi(z.res, z.req, C, x, z, J), z.dirty ? (He(Z, z), z.subscribers.forEach(function(ae) {
                        return _.add(ae);
                      })) : J !== z.res && (z.res = J, z.promise = ie.resolve({ result: J }))) : (z.dirty && He(Z, z), z.subscribers.forEach(function(ae) {
                        return _.add(ae);
                      })));
                    }
                  }
                }
                _.forEach(function(ae) {
                  return ae();
                });
              }
            };
          }, v.addEventListener("abort", l(!1), { signal: h }), v.addEventListener("error", l(!1), { signal: h }), v.addEventListener("complete", l(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), l = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var h = ce.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(f);
            var v = fn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || mo(l, f).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && yr(f.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (He(v.optimisticOps, f), (b = mi(0, f, b)) && v.optimisticOps.push(b), f.mutatedParts && yr(f.mutatedParts));
            }), h.catch(function() {
              He(v.optimisticOps, f), f.mutatedParts && yr(f.mutatedParts);
            })) : h.then(function(b) {
              var _ = mi(0, s(s({}, f), { values: f.values.map(function(R, g) {
                var E;
                return b.failures[g] ? R : (R = (E = l.keyPath) !== null && E !== void 0 && E.includes(".") ? Be(R) : s({}, R), ne(R, l.keyPath, b.results[g]), R);
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return f.mutatedParts && yr(f.mutatedParts);
              });
            }), h) : a.mutate(f);
          }, query: function(f) {
            if (!pi(ce, a) || !hi("query", f)) return a.query(f);
            var h = ((_ = ce.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", g = ce, v = g.requery, b = g.signal, _ = function(x, C, T, I) {
              var P = fn["idb://".concat(x, "/").concat(C)];
              if (!P) return [];
              if (!(C = P.queries[T])) return [null, !1, P, null];
              var F = C[(I.query ? I.query.index.name : null) || ""];
              if (!F) return [null, !1, P, null];
              switch (T) {
                case "query":
                  var M = F.find(function(H) {
                    return H.req.limit === I.limit && H.req.values === I.values && yi(H.req.query.range, I.query.range);
                  });
                  return M ? [M, !0, P, F] : [F.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= I.limit && (!I.values || H.req.values) && es(H.req.query.range, I.query.range);
                  }), !1, P, F];
                case "count":
                  return M = F.find(function(H) {
                    return yi(H.req.query.range, I.query.range);
                  }), [M, !!M, P, F];
              }
            }(n, o, "query", f), R = _[0], g = _[1], E = _[2], w = _[3];
            return R && g ? R.obsSet = f.obsSet : (g = a.query(f).then(function(x) {
              var C = x.result;
              if (R && (R.res = C), h) {
                for (var T = 0, I = C.length; T < I; ++T) Object.freeze(C[T]);
                Object.freeze(C);
              } else x.result = Be(C);
              return x;
            }).catch(function(x) {
              return w && R && He(w, R), Promise.reject(x);
            }), R = { obsSet: f.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(R) : (w = [R], (E = E || (fn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), ts(R, w, v, b), R.promise.then(function(x) {
              return { result: vi(x.result, f, E?.optimisticOps, a, R, h) };
            });
          } });
        } });
      } };
      function br(e, n) {
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
        return o || (o = new this.Version(e), n.push(o), n.sort(Wa), o.stores({}), this._state.autoSchema = !1, o);
      }, Ze.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || ce.letThrough || this._vip) ? e() : new ie(function(o, a) {
          if (n._state.openComplete) return a(new q.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new q.DatabaseClosed());
            n.open().catch(A);
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
          return Xa(e);
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
        e.isBeingOpened || (e.dbReadyPromise = new ie(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ie(function(o, a) {
          e.cancelOpen = a;
        }));
      }, Ze.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new q.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new q.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ze.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ie(function(l, f) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = We(function() {
              var b, _, R;
              b = n._deps, _ = n.name, R = b.indexedDB, b = b.IDBKeyRange, io(R) || _ === or || oo(R, b).delete(_).catch(A), l();
            }), v.onerror = Lt(f), v.onblocked = n._fireOnBlocked;
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
        return u(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Ze.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var l = arguments.length;
          if (l < 2) throw new q.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return a = f.pop(), [n, ve(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ze.prototype._transaction = function(e, n, o) {
        var a = this, l = ce.trans;
        l && l.db === this && e.indexOf("!") === -1 || (l = null);
        var f, h, v = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (h = n.map(function(_) {
            if (_ = _ instanceof a.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), e == "r" || e === Hr) f = Hr;
          else {
            if (e != "rw" && e != Yr) throw new q.InvalidArgument("Invalid transaction mode: " + e);
            f = Yr;
          }
          if (l) {
            if (l.mode === Hr && f === Yr) {
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
          return ie.resolve().then(function() {
            var C = ce.transless || ce, T = R._createTransaction(g, E, R._dbSchema, w);
            if (T.explicit = !0, C = { trans: T, transless: C }, w) T.idbtrans = w.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3;
            } catch (F) {
              return F.name === D.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                return _(R, g, E, null, x);
              })) : Je(F);
            }
            var I, P = It(x);
            return P && xn(), C = ie.follow(function() {
              var F;
              (I = x.call(T, T)) && (P ? (F = Gt.bind(null, null), I.then(F, F)) : typeof I.next == "function" && typeof I.throw == "function" && (I = po(I)));
            }, C), (I && typeof I.then == "function" ? ie.resolve(I).then(function(F) {
              return T.active ? F : Je(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : C.then(function() {
              return I;
            })).then(function(F) {
              return w && T._resolve(), T._completion.then(function() {
                return F;
              });
            }).catch(function(F) {
              return T._reject(F), Je(F);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, b, "lock") : ce.trans ? ln(ce.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Ze.prototype.table = function(e) {
        if (!S(this._allTables, e)) throw new q.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ze);
      function Ze(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Ze.dependencies;
        this._options = n = s({ addons: Ze.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new ie(function(g) {
          _.dbReadyResolve = g;
        }), _.openCanceller = new ie(function(g, E) {
          _.cancelOpen = E;
        }), this._state = _, this.name = e, this.on = Pn(this, "populate", "blocked", "versionchange", "close", { ready: [xe, A] }), this.once = function(g, E) {
          var w = function() {
            for (var x = [], C = 0; C < arguments.length; C++) x[C] = arguments[C];
            o.on(g).unsubscribe(w), E.apply(o, x);
          };
          return o.on(g, w);
        }, this.on.ready.subscribe = B(this.on.ready.subscribe, function(g) {
          return function(E, w) {
            Ze.vip(function() {
              var x, C = o._state;
              C.openComplete ? (C.dbOpenError || ie.resolve().then(E), w && g(E)) : C.onReadyBeingFired ? (C.onReadyBeingFired.push(E), w && g(E)) : (g(E), x = o, w || g(function T() {
                x.on.ready.unsubscribe(E), x.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (l = this, Ln(Ma.prototype, function(I, T) {
          this.db = l;
          var w = Ho, x = null;
          if (T) try {
            w = T();
          } catch (P) {
            x = P;
          }
          var C = I._ctx, T = C.table, I = T.hook.reading.fire;
          this._ctx = { table: T, index: C.index, isPrimKey: !C.index || T.schema.primKey.keyPath && C.index === T.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: C.or, valueMapper: I !== U ? I : null };
        })), this.Table = (f = this, Ln(Qo.prototype, function(g, E, w) {
          this.db = f, this._tx = w, this.name = g, this.schema = E, this.hook = f._allTables[g] ? f._allTables[g].hook : Pn(null, { creating: [ge, A], reading: [se, U], updating: [Te, A], deleting: [he, A] });
        })), this.Transaction = (h = this, Ln(Ka.prototype, function(g, E, w, x, C) {
          var T = this;
          g !== "readonly" && E.forEach(function(I) {
            I = (I = w[I]) === null || I === void 0 ? void 0 : I.yProps, I && (E = E.concat(I.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = E, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Pn(this, "complete", "error", "abort"), this.parent = C || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ie(function(I, P) {
            T._resolve = I, T._reject = P;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(I) {
            var P = T.active;
            return T.active = !1, T.on.error.fire(I), T.parent ? T.parent._reject(I) : P && T.idbtrans && T.idbtrans.abort(), Je(I);
          });
        })), this.Version = (v = this, Ln(Ya.prototype, function(g) {
          this.db = v, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(ri.prototype, function(g, E, w) {
          if (this.db = b, this._ctx = { table: g, index: E === ":id" ? null : E, or: w }, this._cmp = this._ascending = Ie, this._descending = function(x, C) {
            return Ie(C, x);
          }, this._max = function(x, C) {
            return 0 < Ie(x, C) ? x : C;
          }, this._min = function(x, C) {
            return Ie(x, C) < 0 ? x : C;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Mn(n.IDBKeyRange), this._createTransaction = function(g, E, w, x) {
          return new o.Transaction(g, E, w, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(g) {
          o.on("blocked").fire(g), Nn.filter(function(E) {
            return E.name === o.name && E !== o && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(g);
          });
        }, this.use(Ja), this.use(ns), this.use(Za), this.use(za), this.use(Qa);
        var R = new Proxy(this, { get: function(g, E, w) {
          if (E === "_vip") return !0;
          if (E === "table") return function(C) {
            return br(o.table(C), R);
          };
          var x = Reflect.get(g, E, w);
          return x instanceof Qo ? br(x, R) : E === "tables" ? x.map(function(C) {
            return br(C, R);
          }) : E === "_createTransaction" ? function() {
            return br(x.apply(this, arguments), R);
          } : x;
        } });
        this.vip = R, a.forEach(function(g) {
          return g(o);
        });
      }
      var wr, Tt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", rs = (yo.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, yo.prototype[Tt] = function() {
        return this;
      }, yo);
      function yo(e) {
        this._subscribe = e;
      }
      try {
        wr = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        wr = { indexedDB: null, IDBKeyRange: null };
      }
      function gi(e) {
        var n, o = !1, a = new rs(function(l) {
          var f = It(e), h, v = !1, b = {}, _ = {}, R = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), g && Xt.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(R);
          var g = !1, E = function() {
            return Gr(x);
          }, w = function(C) {
            vr(b, C), lo(_, b) && E();
          }, x = function() {
            var C, T, I;
            !v && wr.indexedDB && (b = {}, C = {}, h && h.abort(), h = new AbortController(), I = function(P) {
              var F = wn();
              try {
                f && xn();
                var M = Wt(e, P);
                return M = f ? M.finally(Gt) : M;
              } finally {
                F && _n();
              }
            }(T = { subscr: C, signal: h.signal, requery: E, querier: e, trans: null }), Promise.resolve(I).then(function(P) {
              o = !0, n = P, v || T.signal.aborted || (b = {}, function(F) {
                for (var M in F) if (S(F, M)) return;
                return 1;
              }(_ = C) || g || (Xt(Fn, w), g = !0), Gr(function() {
                return !v && l.next && l.next(P);
              }));
            }, function(P) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || v || Gr(function() {
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
      function go(e) {
        var n = zt;
        try {
          zt = !0, Xt.storagemutated.fire(e), fo(e, !0);
        } finally {
          zt = n;
        }
      }
      L(dn, s(s({}, nt), { delete: function(e) {
        return new dn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new dn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = dn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== or;
            });
          }) : oo(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return Je(new q.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          m(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ce.trans ? ln(ce.transless, e) : e();
      }, vip: ao, async: function(e) {
        return function() {
          try {
            var n = po(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ie.resolve(n);
          } catch (o) {
            return Je(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = po(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : ie.resolve(a);
        } catch (l) {
          return Je(l);
        }
      }, currentTransaction: { get: function() {
        return ce.trans || null;
      } }, waitFor: function(e, n) {
        return n = ie.resolve(typeof e == "function" ? dn.ignoreTransaction(e) : e).timeout(n || 6e4), ce.trans ? ce.trans.waitFor(n) : n;
      }, Promise: ie, debug: { get: function() {
        return me;
      }, set: function(e) {
        Le(e);
      } }, derive: W, extend: m, props: L, override: B, Events: Pn, on: Xt, liveQuery: gi, extendObservabilitySet: vr, getByKeyPath: te, setByKeyPath: ne, delByKeyPath: function(e, n) {
        typeof n == "string" ? ne(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          ne(e, o, void 0);
        });
      }, shallowClone: pe, deepClone: Be, getObjectDiff: ho, cmp: Ie, asap: fe, minKey: -1 / 0, addons: [], connections: Nn, errnames: D, dependencies: wr, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), dn.maxKey = Mn(dn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xt(Fn, function(e) {
        zt || (e = new CustomEvent(Qr, { detail: e }), zt = !0, dispatchEvent(e), zt = !1);
      }), addEventListener(Qr, function(e) {
        e = e.detail, zt || go(e);
      }));
      var On, zt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (On = new BroadcastChannel(Qr)).onmessage = function(e) {
          return e.data && go(e.data);
        };
      })(), typeof On.unref == "function" && On.unref(), Xt(Fn, function(e) {
        zt || On.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!$t.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), On?.close();
          for (var n = 0, o = Nn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !$t.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), bi(), go({ all: new lt(-1 / 0, [[]]) }));
      })), ie.rejectionMapper = function(e, n) {
        return !e || e instanceof qt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (n = new Q[e.name](n || e.message, e), "stack" in e && X(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, Le(me), s($t, Object.freeze({ __proto__: null, Dexie: $t, liveQuery: gi, Entity: Yo, cmp: Ie, PropModification: kn, replacePrefix: function(e, n) {
        return new kn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new kn({ add: e });
      }, remove: function(e) {
        return new kn({ remove: e });
      }, default: $t, RangeSet: lt, mergeRanges: Kn, rangesOverlap: li }), { default: $t }), $t;
    });
  }(ra)), ra.exports;
}
var dp = fp();
const Ds = /* @__PURE__ */ up(dp), zl = Symbol.for("Dexie"), ha = globalThis[zl] || (globalThis[zl] = Ds);
if (Ds.semVer !== ha.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ds.semVer} and ${ha.semVer}`);
const {
  liveQuery: yg,
  mergeRanges: gg,
  rangesOverlap: bg,
  RangeSet: wg,
  cmp: _g,
  Entity: xg,
  PropModification: Ng,
  replacePrefix: Rg,
  add: Tg,
  remove: Cg,
  DexieYProvider: Eg
} = ha;
var pp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function hp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function mp(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var r = t.default;
  if (typeof r == "function") {
    var i = function s() {
      var c = !1;
      try {
        c = this instanceof s;
      } catch {
      }
      return c ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var c = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(i, s, c.get ? c : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), i;
}
var Ql = {};
const vp = {}, yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vp
}, Symbol.toStringTag, { value: "Module" })), Jl = /* @__PURE__ */ mp(yp);
var Zl;
function gp() {
  return Zl || (Zl = 1, function(t) {
    (function(r) {
      r.parser = function(D, N) {
        return new s(D, N);
      }, r.SAXParser = s, r.SAXStream = O, r.createStream = k, r.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function s(D, N) {
        if (!(this instanceof s))
          return new s(D, N);
        var q = this;
        d(q), q.q = q.c = "", q.bufferCheckPosition = r.MAX_BUFFER_LENGTH, q.opt = N || {}, q.opt.lowercase = q.opt.lowercase || q.opt.lowercasetags, q.looseCase = q.opt.lowercase ? "toLowerCase" : "toUpperCase", q.tags = [], q.closed = q.closedRoot = q.sawRoot = !1, q.tag = q.error = null, q.strict = !!D, q.noscript = !!(D || q.opt.noscript), q.state = j.BEGIN, q.strictEntities = q.opt.strictEntities, q.ENTITIES = q.strictEntities ? Object.create(r.XML_ENTITIES) : Object.create(r.ENTITIES), q.attribList = [], q.opt.xmlns && (q.ns = Object.create(W)), q.opt.unquotedAttributeValues === void 0 && (q.opt.unquotedAttributeValues = !D), q.trackPosition = q.opt.position !== !1, q.trackPosition && (q.position = q.line = q.column = 0), be(q, "onready");
      }
      Object.create || (Object.create = function(D) {
        function N() {
        }
        N.prototype = D;
        var q = new N();
        return q;
      }), Object.keys || (Object.keys = function(D) {
        var N = [];
        for (var q in D) D.hasOwnProperty(q) && N.push(q);
        return N;
      });
      function c(D) {
        for (var N = Math.max(r.MAX_BUFFER_LENGTH, 10), q = 0, Q = 0, nt = i.length; Q < nt; Q++) {
          var A = D[i[Q]].length;
          if (A > N)
            switch (i[Q]) {
              case "textNode":
                Be(D);
                break;
              case "cdata":
                we(D, "oncdata", D.cdata), D.cdata = "";
                break;
              case "script":
                we(D, "onscript", D.script), D.script = "";
                break;
              default:
                Rt(D, "Max buffer length exceeded: " + i[Q]);
            }
          q = Math.max(q, A);
        }
        var U = r.MAX_BUFFER_LENGTH - q;
        D.bufferCheckPosition = U + D.position;
      }
      function d(D) {
        for (var N = 0, q = i.length; N < q; N++)
          D[i[N]] = "";
      }
      function u(D) {
        Be(D), D.cdata !== "" && (we(D, "oncdata", D.cdata), D.cdata = ""), D.script !== "" && (we(D, "onscript", D.script), D.script = "");
      }
      s.prototype = {
        end: function() {
          Fe(this);
        },
        write: Pt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          u(this);
        }
      };
      var p;
      try {
        p = Jl.Stream;
      } catch {
        p = function() {
        };
      }
      p || (p = function() {
      });
      var m = r.EVENTS.filter(function(D) {
        return D !== "error" && D !== "end";
      });
      function k(D, N) {
        return new O(D, N);
      }
      function O(D, N) {
        if (!(this instanceof O))
          return new O(D, N);
        p.apply(this), this._parser = new s(D, N), this.writable = !0, this.readable = !0;
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
      }), O.prototype.write = function(D) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(D)) {
          if (!this._decoder) {
            var N = Jl.StringDecoder;
            this._decoder = new N("utf8");
          }
          D = this._decoder.write(D);
        }
        return this._parser.write(D.toString()), this.emit("data", D), !0;
      }, O.prototype.end = function(D) {
        return D && D.length && this.write(D), this._parser.end(), !0;
      }, O.prototype.on = function(D, N) {
        var q = this;
        return !q._parser["on" + D] && m.indexOf(D) !== -1 && (q._parser["on" + D] = function() {
          var Q = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          Q.splice(0, 0, D), q.emit.apply(q, Q);
        }), p.prototype.on.call(q, D, N);
      };
      var S = "[CDATA[", L = "DOCTYPE", Y = "http://www.w3.org/XML/1998/namespace", X = "http://www.w3.org/2000/xmlns/", W = { xml: Y, xmlns: X }, G = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, V = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, $ = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, B = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ee(D) {
        return D === " " || D === `
` || D === "\r" || D === "	";
      }
      function fe(D) {
        return D === '"' || D === "'";
      }
      function te(D) {
        return D === ">" || ee(D);
      }
      function ne(D, N) {
        return D.test(N);
      }
      function pe(D, N) {
        return !ne(D, N);
      }
      var j = 0;
      r.STATE = {
        BEGIN: j++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: j++,
        // leading whitespace
        TEXT: j++,
        // general stuff
        TEXT_ENTITY: j++,
        // &amp and such.
        OPEN_WAKA: j++,
        // <
        SGML_DECL: j++,
        // <!BLARG
        SGML_DECL_QUOTED: j++,
        // <!BLARG foo "bar
        DOCTYPE: j++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: j++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: j++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: j++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: j++,
        // <!-
        COMMENT: j++,
        // <!--
        COMMENT_ENDING: j++,
        // <!-- blah -
        COMMENT_ENDED: j++,
        // <!-- blah --
        CDATA: j++,
        // <![CDATA[ something
        CDATA_ENDING: j++,
        // ]
        CDATA_ENDING_2: j++,
        // ]]
        PROC_INST: j++,
        // <?hi
        PROC_INST_BODY: j++,
        // <?hi there
        PROC_INST_ENDING: j++,
        // <?hi "there" ?
        OPEN_TAG: j++,
        // <strong
        OPEN_TAG_SLASH: j++,
        // <strong /
        ATTRIB: j++,
        // <a
        ATTRIB_NAME: j++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: j++,
        // <a foo _
        ATTRIB_VALUE: j++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: j++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: j++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: j++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: j++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: j++,
        // <foo bar=&quot
        CLOSE_TAG: j++,
        // </a
        CLOSE_TAG_SAW_WHITE: j++,
        // </a   >
        SCRIPT: j++,
        // <script> ...
        SCRIPT_ENDING: j++
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
      }, Object.keys(r.ENTITIES).forEach(function(D) {
        var N = r.ENTITIES[D], q = typeof N == "number" ? String.fromCharCode(N) : N;
        r.ENTITIES[D] = q;
      });
      for (var ve in r.STATE)
        r.STATE[r.STATE[ve]] = ve;
      j = r.STATE;
      function be(D, N, q) {
        D[N] && D[N](q);
      }
      function we(D, N, q) {
        D.textNode && Be(D), be(D, N, q);
      }
      function Be(D) {
        D.textNode = vt(D.opt, D.textNode), D.textNode && be(D, "ontext", D.textNode), D.textNode = "";
      }
      function vt(D, N) {
        return D.trim && (N = N.trim()), D.normalize && (N = N.replace(/\s+/g, " ")), N;
      }
      function Rt(D, N) {
        return Be(D), D.trackPosition && (N += `
Line: ` + D.line + `
Column: ` + D.column + `
Char: ` + D.c), N = new Error(N), D.error = N, be(D, "onerror", N), D;
      }
      function Fe(D) {
        return D.sawRoot && !D.closedRoot && _e(D, "Unclosed root tag"), D.state !== j.BEGIN && D.state !== j.BEGIN_WHITESPACE && D.state !== j.TEXT && Rt(D, "Unexpected end"), Be(D), D.c = "", D.closed = !0, be(D, "onend"), s.call(D, D.strict, D.opt), D;
      }
      function _e(D, N) {
        if (typeof D != "object" || !(D instanceof s))
          throw new Error("bad call to strictFail");
        D.strict && Rt(D, N);
      }
      function He(D) {
        D.strict || (D.tagName = D.tagName[D.looseCase]());
        var N = D.tags[D.tags.length - 1] || D, q = D.tag = { name: D.tagName, attributes: {} };
        D.opt.xmlns && (q.ns = N.ns), D.attribList.length = 0, we(D, "onopentagstart", q);
      }
      function Xe(D, N) {
        var q = D.indexOf(":"), Q = q < 0 ? ["", D] : D.split(":"), nt = Q[0], A = Q[1];
        return N && D === "xmlns" && (nt = "xmlns", A = ""), { prefix: nt, local: A };
      }
      function st(D) {
        if (D.strict || (D.attribName = D.attribName[D.looseCase]()), D.attribList.indexOf(D.attribName) !== -1 || D.tag.attributes.hasOwnProperty(D.attribName)) {
          D.attribName = D.attribValue = "";
          return;
        }
        if (D.opt.xmlns) {
          var N = Xe(D.attribName, !0), q = N.prefix, Q = N.local;
          if (q === "xmlns")
            if (Q === "xml" && D.attribValue !== Y)
              _e(
                D,
                "xml: prefix must be bound to " + Y + `
Actual: ` + D.attribValue
              );
            else if (Q === "xmlns" && D.attribValue !== X)
              _e(
                D,
                "xmlns: prefix must be bound to " + X + `
Actual: ` + D.attribValue
              );
            else {
              var nt = D.tag, A = D.tags[D.tags.length - 1] || D;
              nt.ns === A.ns && (nt.ns = Object.create(A.ns)), nt.ns[Q] = D.attribValue;
            }
          D.attribList.push([D.attribName, D.attribValue]);
        } else
          D.tag.attributes[D.attribName] = D.attribValue, we(D, "onattribute", {
            name: D.attribName,
            value: D.attribValue
          });
        D.attribName = D.attribValue = "";
      }
      function It(D, N) {
        if (D.opt.xmlns) {
          var q = D.tag, Q = Xe(D.tagName);
          q.prefix = Q.prefix, q.local = Q.local, q.uri = q.ns[Q.prefix] || "", q.prefix && !q.uri && (_e(D, "Unbound namespace prefix: " + JSON.stringify(D.tagName)), q.uri = Q.prefix);
          var nt = D.tags[D.tags.length - 1] || D;
          q.ns && nt.ns !== q.ns && Object.keys(q.ns).forEach(function(Le) {
            we(D, "onopennamespace", {
              prefix: Le,
              uri: q.ns[Le]
            });
          });
          for (var A = 0, U = D.attribList.length; A < U; A++) {
            var se = D.attribList[A], de = se[0], ge = se[1], he = Xe(de, !0), Te = he.prefix, Ee = he.local, xe = Te === "" ? "" : q.ns[Te] || "", me = {
              name: de,
              value: ge,
              prefix: Te,
              local: Ee,
              uri: xe
            };
            Te && Te !== "xmlns" && !xe && (_e(D, "Unbound namespace prefix: " + JSON.stringify(Te)), me.uri = Te), D.tag.attributes[de] = me, we(D, "onattribute", me);
          }
          D.attribList.length = 0;
        }
        D.tag.isSelfClosing = !!N, D.sawRoot = !0, D.tags.push(D.tag), we(D, "onopentag", D.tag), N || (!D.noscript && D.tagName.toLowerCase() === "script" ? D.state = j.SCRIPT : D.state = j.TEXT, D.tag = null, D.tagName = ""), D.attribName = D.attribValue = "", D.attribList.length = 0;
      }
      function Kt(D) {
        if (!D.tagName) {
          _e(D, "Weird empty close tag."), D.textNode += "</>", D.state = j.TEXT;
          return;
        }
        if (D.script) {
          if (D.tagName !== "script") {
            D.script += "</" + D.tagName + ">", D.tagName = "", D.state = j.SCRIPT;
            return;
          }
          we(D, "onscript", D.script), D.script = "";
        }
        var N = D.tags.length, q = D.tagName;
        D.strict || (q = q[D.looseCase]());
        for (var Q = q; N--; ) {
          var nt = D.tags[N];
          if (nt.name !== Q)
            _e(D, "Unexpected close tag");
          else
            break;
        }
        if (N < 0) {
          _e(D, "Unmatched closing tag: " + D.tagName), D.textNode += "</" + D.tagName + ">", D.state = j.TEXT;
          return;
        }
        D.tagName = q;
        for (var A = D.tags.length; A-- > N; ) {
          var U = D.tag = D.tags.pop();
          D.tagName = D.tag.name, we(D, "onclosetag", D.tagName);
          var se = {};
          for (var de in U.ns)
            se[de] = U.ns[de];
          var ge = D.tags[D.tags.length - 1] || D;
          D.opt.xmlns && U.ns !== ge.ns && Object.keys(U.ns).forEach(function(he) {
            var Te = U.ns[he];
            we(D, "onclosenamespace", { prefix: he, uri: Te });
          });
        }
        N === 0 && (D.closedRoot = !0), D.tagName = D.attribValue = D.attribName = "", D.attribList.length = 0, D.state = j.TEXT;
      }
      function qt(D) {
        var N = D.entity, q = N.toLowerCase(), Q, nt = "";
        return D.ENTITIES[N] ? D.ENTITIES[N] : D.ENTITIES[q] ? D.ENTITIES[q] : (N = q, N.charAt(0) === "#" && (N.charAt(1) === "x" ? (N = N.slice(2), Q = parseInt(N, 16), nt = Q.toString(16)) : (N = N.slice(1), Q = parseInt(N, 10), nt = Q.toString(10))), N = N.replace(/^0+/, ""), isNaN(Q) || nt.toLowerCase() !== N ? (_e(D, "Invalid character entity"), "&" + D.entity + ";") : String.fromCodePoint(Q));
      }
      function Vn(D, N) {
        N === "<" ? (D.state = j.OPEN_WAKA, D.startTagPosition = D.position) : ee(N) || (_e(D, "Non-whitespace before first tag."), D.textNode = N, D.state = j.TEXT);
      }
      function gn(D, N) {
        var q = "";
        return N < D.length && (q = D.charAt(N)), q;
      }
      function Pt(D) {
        var N = this;
        if (this.error)
          throw this.error;
        if (N.closed)
          return Rt(
            N,
            "Cannot write after close. Assign an onready handler."
          );
        if (D === null)
          return Fe(N);
        typeof D == "object" && (D = D.toString());
        for (var q = 0, Q = ""; Q = gn(D, q++), N.c = Q, !!Q; )
          switch (N.trackPosition && (N.position++, Q === `
` ? (N.line++, N.column = 0) : N.column++), N.state) {
            case j.BEGIN:
              if (N.state = j.BEGIN_WHITESPACE, Q === "\uFEFF")
                continue;
              Vn(N, Q);
              continue;
            case j.BEGIN_WHITESPACE:
              Vn(N, Q);
              continue;
            case j.TEXT:
              if (N.sawRoot && !N.closedRoot) {
                for (var nt = q - 1; Q && Q !== "<" && Q !== "&"; )
                  Q = gn(D, q++), Q && N.trackPosition && (N.position++, Q === `
` ? (N.line++, N.column = 0) : N.column++);
                N.textNode += D.substring(nt, q - 1);
              }
              Q === "<" && !(N.sawRoot && N.closedRoot && !N.strict) ? (N.state = j.OPEN_WAKA, N.startTagPosition = N.position) : (!ee(Q) && (!N.sawRoot || N.closedRoot) && _e(N, "Text data outside of root node."), Q === "&" ? N.state = j.TEXT_ENTITY : N.textNode += Q);
              continue;
            case j.SCRIPT:
              Q === "<" ? N.state = j.SCRIPT_ENDING : N.script += Q;
              continue;
            case j.SCRIPT_ENDING:
              Q === "/" ? N.state = j.CLOSE_TAG : (N.script += "<" + Q, N.state = j.SCRIPT);
              continue;
            case j.OPEN_WAKA:
              if (Q === "!")
                N.state = j.SGML_DECL, N.sgmlDecl = "";
              else if (!ee(Q)) if (ne(G, Q))
                N.state = j.OPEN_TAG, N.tagName = Q;
              else if (Q === "/")
                N.state = j.CLOSE_TAG, N.tagName = "";
              else if (Q === "?")
                N.state = j.PROC_INST, N.procInstName = N.procInstBody = "";
              else {
                if (_e(N, "Unencoded <"), N.startTagPosition + 1 < N.position) {
                  var A = N.position - N.startTagPosition;
                  Q = new Array(A).join(" ") + Q;
                }
                N.textNode += "<" + Q, N.state = j.TEXT;
              }
              continue;
            case j.SGML_DECL:
              if (N.sgmlDecl + Q === "--") {
                N.state = j.COMMENT, N.comment = "", N.sgmlDecl = "";
                continue;
              }
              N.doctype && N.doctype !== !0 && N.sgmlDecl ? (N.state = j.DOCTYPE_DTD, N.doctype += "<!" + N.sgmlDecl + Q, N.sgmlDecl = "") : (N.sgmlDecl + Q).toUpperCase() === S ? (we(N, "onopencdata"), N.state = j.CDATA, N.sgmlDecl = "", N.cdata = "") : (N.sgmlDecl + Q).toUpperCase() === L ? (N.state = j.DOCTYPE, (N.doctype || N.sawRoot) && _e(
                N,
                "Inappropriately located doctype declaration"
              ), N.doctype = "", N.sgmlDecl = "") : Q === ">" ? (we(N, "onsgmldeclaration", N.sgmlDecl), N.sgmlDecl = "", N.state = j.TEXT) : (fe(Q) && (N.state = j.SGML_DECL_QUOTED), N.sgmlDecl += Q);
              continue;
            case j.SGML_DECL_QUOTED:
              Q === N.q && (N.state = j.SGML_DECL, N.q = ""), N.sgmlDecl += Q;
              continue;
            case j.DOCTYPE:
              Q === ">" ? (N.state = j.TEXT, we(N, "ondoctype", N.doctype), N.doctype = !0) : (N.doctype += Q, Q === "[" ? N.state = j.DOCTYPE_DTD : fe(Q) && (N.state = j.DOCTYPE_QUOTED, N.q = Q));
              continue;
            case j.DOCTYPE_QUOTED:
              N.doctype += Q, Q === N.q && (N.q = "", N.state = j.DOCTYPE);
              continue;
            case j.DOCTYPE_DTD:
              Q === "]" ? (N.doctype += Q, N.state = j.DOCTYPE) : Q === "<" ? (N.state = j.OPEN_WAKA, N.startTagPosition = N.position) : fe(Q) ? (N.doctype += Q, N.state = j.DOCTYPE_DTD_QUOTED, N.q = Q) : N.doctype += Q;
              continue;
            case j.DOCTYPE_DTD_QUOTED:
              N.doctype += Q, Q === N.q && (N.state = j.DOCTYPE_DTD, N.q = "");
              continue;
            case j.COMMENT:
              Q === "-" ? N.state = j.COMMENT_ENDING : N.comment += Q;
              continue;
            case j.COMMENT_ENDING:
              Q === "-" ? (N.state = j.COMMENT_ENDED, N.comment = vt(N.opt, N.comment), N.comment && we(N, "oncomment", N.comment), N.comment = "") : (N.comment += "-" + Q, N.state = j.COMMENT);
              continue;
            case j.COMMENT_ENDED:
              Q !== ">" ? (_e(N, "Malformed comment"), N.comment += "--" + Q, N.state = j.COMMENT) : N.doctype && N.doctype !== !0 ? N.state = j.DOCTYPE_DTD : N.state = j.TEXT;
              continue;
            case j.CDATA:
              Q === "]" ? N.state = j.CDATA_ENDING : N.cdata += Q;
              continue;
            case j.CDATA_ENDING:
              Q === "]" ? N.state = j.CDATA_ENDING_2 : (N.cdata += "]" + Q, N.state = j.CDATA);
              continue;
            case j.CDATA_ENDING_2:
              Q === ">" ? (N.cdata && we(N, "oncdata", N.cdata), we(N, "onclosecdata"), N.cdata = "", N.state = j.TEXT) : Q === "]" ? N.cdata += "]" : (N.cdata += "]]" + Q, N.state = j.CDATA);
              continue;
            case j.PROC_INST:
              Q === "?" ? N.state = j.PROC_INST_ENDING : ee(Q) ? N.state = j.PROC_INST_BODY : N.procInstName += Q;
              continue;
            case j.PROC_INST_BODY:
              if (!N.procInstBody && ee(Q))
                continue;
              Q === "?" ? N.state = j.PROC_INST_ENDING : N.procInstBody += Q;
              continue;
            case j.PROC_INST_ENDING:
              Q === ">" ? (we(N, "onprocessinginstruction", {
                name: N.procInstName,
                body: N.procInstBody
              }), N.procInstName = N.procInstBody = "", N.state = j.TEXT) : (N.procInstBody += "?" + Q, N.state = j.PROC_INST_BODY);
              continue;
            case j.OPEN_TAG:
              ne(V, Q) ? N.tagName += Q : (He(N), Q === ">" ? It(N) : Q === "/" ? N.state = j.OPEN_TAG_SLASH : (ee(Q) || _e(N, "Invalid character in tag name"), N.state = j.ATTRIB));
              continue;
            case j.OPEN_TAG_SLASH:
              Q === ">" ? (It(N, !0), Kt(N)) : (_e(N, "Forward-slash in opening tag not followed by >"), N.state = j.ATTRIB);
              continue;
            case j.ATTRIB:
              if (ee(Q))
                continue;
              Q === ">" ? It(N) : Q === "/" ? N.state = j.OPEN_TAG_SLASH : ne(G, Q) ? (N.attribName = Q, N.attribValue = "", N.state = j.ATTRIB_NAME) : _e(N, "Invalid attribute name");
              continue;
            case j.ATTRIB_NAME:
              Q === "=" ? N.state = j.ATTRIB_VALUE : Q === ">" ? (_e(N, "Attribute without value"), N.attribValue = N.attribName, st(N), It(N)) : ee(Q) ? N.state = j.ATTRIB_NAME_SAW_WHITE : ne(V, Q) ? N.attribName += Q : _e(N, "Invalid attribute name");
              continue;
            case j.ATTRIB_NAME_SAW_WHITE:
              if (Q === "=")
                N.state = j.ATTRIB_VALUE;
              else {
                if (ee(Q))
                  continue;
                _e(N, "Attribute without value"), N.tag.attributes[N.attribName] = "", N.attribValue = "", we(N, "onattribute", {
                  name: N.attribName,
                  value: ""
                }), N.attribName = "", Q === ">" ? It(N) : ne(G, Q) ? (N.attribName = Q, N.state = j.ATTRIB_NAME) : (_e(N, "Invalid attribute name"), N.state = j.ATTRIB);
              }
              continue;
            case j.ATTRIB_VALUE:
              if (ee(Q))
                continue;
              fe(Q) ? (N.q = Q, N.state = j.ATTRIB_VALUE_QUOTED) : (N.opt.unquotedAttributeValues || Rt(N, "Unquoted attribute value"), N.state = j.ATTRIB_VALUE_UNQUOTED, N.attribValue = Q);
              continue;
            case j.ATTRIB_VALUE_QUOTED:
              if (Q !== N.q) {
                Q === "&" ? N.state = j.ATTRIB_VALUE_ENTITY_Q : N.attribValue += Q;
                continue;
              }
              st(N), N.q = "", N.state = j.ATTRIB_VALUE_CLOSED;
              continue;
            case j.ATTRIB_VALUE_CLOSED:
              ee(Q) ? N.state = j.ATTRIB : Q === ">" ? It(N) : Q === "/" ? N.state = j.OPEN_TAG_SLASH : ne(G, Q) ? (_e(N, "No whitespace between attributes"), N.attribName = Q, N.attribValue = "", N.state = j.ATTRIB_NAME) : _e(N, "Invalid attribute name");
              continue;
            case j.ATTRIB_VALUE_UNQUOTED:
              if (!te(Q)) {
                Q === "&" ? N.state = j.ATTRIB_VALUE_ENTITY_U : N.attribValue += Q;
                continue;
              }
              st(N), Q === ">" ? It(N) : N.state = j.ATTRIB;
              continue;
            case j.CLOSE_TAG:
              if (N.tagName)
                Q === ">" ? Kt(N) : ne(V, Q) ? N.tagName += Q : N.script ? (N.script += "</" + N.tagName, N.tagName = "", N.state = j.SCRIPT) : (ee(Q) || _e(N, "Invalid tagname in closing tag"), N.state = j.CLOSE_TAG_SAW_WHITE);
              else {
                if (ee(Q))
                  continue;
                pe(G, Q) ? N.script ? (N.script += "</" + Q, N.state = j.SCRIPT) : _e(N, "Invalid tagname in closing tag.") : N.tagName = Q;
              }
              continue;
            case j.CLOSE_TAG_SAW_WHITE:
              if (ee(Q))
                continue;
              Q === ">" ? Kt(N) : _e(N, "Invalid characters in closing tag");
              continue;
            case j.TEXT_ENTITY:
            case j.ATTRIB_VALUE_ENTITY_Q:
            case j.ATTRIB_VALUE_ENTITY_U:
              var U, se;
              switch (N.state) {
                case j.TEXT_ENTITY:
                  U = j.TEXT, se = "textNode";
                  break;
                case j.ATTRIB_VALUE_ENTITY_Q:
                  U = j.ATTRIB_VALUE_QUOTED, se = "attribValue";
                  break;
                case j.ATTRIB_VALUE_ENTITY_U:
                  U = j.ATTRIB_VALUE_UNQUOTED, se = "attribValue";
                  break;
              }
              if (Q === ";") {
                var de = qt(N);
                N.opt.unparsedEntities && !Object.values(r.XML_ENTITIES).includes(de) ? (N.entity = "", N.state = U, N.write(de)) : (N[se] += de, N.entity = "", N.state = U);
              } else ne(N.entity.length ? B : $, Q) ? N.entity += Q : (_e(N, "Invalid character in entity name"), N[se] += "&" + N.entity + Q, N.entity = "", N.state = U);
              continue;
            default:
              throw new Error(N, "Unknown state: " + N.state);
          }
        return N.position >= N.bufferCheckPosition && c(N), N;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var D = String.fromCharCode, N = Math.floor, q = function() {
          var Q = 16384, nt = [], A, U, se = -1, de = arguments.length;
          if (!de)
            return "";
          for (var ge = ""; ++se < de; ) {
            var he = Number(arguments[se]);
            if (!isFinite(he) || // `NaN`, `+Infinity`, or `-Infinity`
            he < 0 || // not a valid Unicode code point
            he > 1114111 || // not a valid Unicode code point
            N(he) !== he)
              throw RangeError("Invalid code point: " + he);
            he <= 65535 ? nt.push(he) : (he -= 65536, A = (he >> 10) + 55296, U = he % 1024 + 56320, nt.push(A, U)), (se + 1 === de || nt.length > Q) && (ge += D.apply(null, nt), nt.length = 0);
          }
          return ge;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: q,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = q;
      }();
    })(t);
  }(Ql)), Ql;
}
gp();
const ke = "sclElements", xt = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
var Ss = { exports: {} }, bp = Ss.exports, eu;
function wp() {
  return eu || (eu = 1, function(t, r) {
    (function(i, s) {
      t.exports = s();
    })(bp, function() {
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
      function c(e, n, o) {
        for (var a, l = 0, f = n.length; l < f; l++) !a && l in n || ((a = a || Array.prototype.slice.call(n, 0, l))[l] = n[l]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : pp, u = Object.keys, p = Array.isArray;
      function m(e, n) {
        return typeof n != "object" || u(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var k = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function S(e, n) {
        return O.call(e, n);
      }
      function L(e, n) {
        typeof n == "function" && (n = n(k(e))), (typeof Reflect > "u" ? u : Reflect.ownKeys)(n).forEach(function(o) {
          X(e, o, n[o]);
        });
      }
      var Y = Object.defineProperty;
      function X(e, n, o, a) {
        Y(e, n, m(o && S(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function W(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), X(e.prototype, "constructor", e), { extend: L.bind(null, e.prototype) };
        } };
      }
      var G = Object.getOwnPropertyDescriptor, V = [].slice;
      function $(e, n, o) {
        return V.call(e, n, o);
      }
      function B(e, n) {
        return n(e);
      }
      function ee(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function fe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function te(e, n) {
        if (typeof n == "string" && S(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, l = n.length; a < l; ++a) {
            var f = te(e, n[a]);
            o.push(f);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : te(v, n.substr(h + 1));
        }
      }
      function ne(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ee(typeof o != "string" && "length" in o);
          for (var a = 0, l = n.length; a < l; ++a) ne(e, n[a], o[a]);
        } else {
          var f, h, v = n.indexOf(".");
          v !== -1 ? (f = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? p(e) && !isNaN(parseInt(f)) ? e.splice(f, 1) : delete e[f] : e[f] = o : ne(v = !(v = e[f]) || !S(e, f) ? e[f] = {} : v, h, o)) : o === void 0 ? p(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function pe(e) {
        var n, o = {};
        for (n in e) S(e, n) && (o[n] = e[n]);
        return o;
      }
      var j = [].concat;
      function ve(e) {
        return j.apply([], e);
      }
      var Ve = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ve([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), be = new Set(Ve.map(function(e) {
        return d[e];
      })), we = null;
      function Be(e) {
        return we = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = we.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], we.set(o, a);
            for (var l = 0, f = o.length; l < f; ++l) a.push(n(o[l]));
          } else if (be.has(o.constructor)) a = o;
          else {
            var h, v = k(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), we.set(o, a), o) S(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), we = null, e;
      }
      var vt = {}.toString;
      function Rt(e) {
        return vt.call(e).slice(8, -1);
      }
      var Fe = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", _e = typeof Fe == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[Fe]) && n.apply(e);
      } : function() {
        return null;
      };
      function He(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var Xe = {};
      function st(e) {
        var n, o, a, l;
        if (arguments.length === 1) {
          if (p(e)) return e.slice();
          if (this === Xe && typeof e == "string") return [e];
          if (l = _e(e)) {
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
      var It = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Me = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Tt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Me), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function qt(e, n) {
        this.name = e, this.message = n;
      }
      function Vn(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, a, l) {
          return l.indexOf(o) === a;
        }).join(`
`);
      }
      function gn(e, n, o, a) {
        this.failures = n, this.failedKeys = a, this.successCount = o, this.message = Vn(e, n);
      }
      function Pt(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Vn(e, this.failures);
      }
      W(qt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), W(gn).from(qt), W(Pt).from(qt);
      var D = Tt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), N = qt, q = Tt.reduce(function(e, n) {
        var o = n + "Error";
        function a(l, f) {
          this.name = o, l ? typeof l == "string" ? (this.message = "".concat(l).concat(f ? `
 ` + f : ""), this.inner = f || null) : typeof l == "object" && (this.message = "".concat(l.name, " ").concat(l.message), this.inner = l) : (this.message = Kt[n] || o, this.inner = null);
        }
        return W(a).from(N), e[n] = a, e;
      }, {});
      q.Syntax = SyntaxError, q.Type = TypeError, q.Range = RangeError;
      var Q = Me.reduce(function(e, n) {
        return e[n + "Error"] = q[n], e;
      }, {}), nt = Tt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = q[n]), e;
      }, {});
      function A() {
      }
      function U(e) {
        return e;
      }
      function se(e, n) {
        return e == null || e === U ? n : function(o) {
          return n(e(o));
        };
      }
      function de(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function ge(e, n) {
        return e === A ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? de(a, this.onsuccess) : a), l && (this.onerror = this.onerror ? de(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function he(e, n) {
        return e === A ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? de(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? de(a, this.onerror) : a);
        };
      }
      function Te(e, n) {
        return e === A ? n : function(o) {
          var a = e.apply(this, arguments);
          m(o, a);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? de(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? de(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : m(a, o);
        };
      }
      function Ee(e, n) {
        return e === A ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function xe(e, n) {
        return e === A ? n : function() {
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
      nt.ModifyError = gn, nt.DexieError = qt, nt.BulkError = Pt;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Le(e) {
        me = e;
      }
      var Oe = {}, je = 100, Ve = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, k(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, k(n), e];
      }(), Me = Ve[0], Tt = Ve[1], Ve = Ve[2], Tt = Tt && Tt.then, et = Me && Me.constructor, ot = !!Ve, bt = function(e, n) {
        bn.push([e, n]), jt && (queueMicrotask(La), jt = !1);
      }, Dt = !0, jt = !0, wt = [], an = [], Wn = U, dt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ce = dt, bn = [], sn = 0, Jn = [];
      function ie(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = ce;
        if (typeof e != "function") {
          if (e !== Oe) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ur(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, l) {
          try {
            l(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                f && typeof f.then == "function" ? o(a, function(v, b) {
                  f instanceof ie ? f._then(v, b) : f.then(v, b);
                }) : (a._state = !0, a._value = f, Uo(a)), h && _n();
              }
            }, Ur.bind(null, a));
          } catch (f) {
            Ur(a, f);
          }
        }(this, e);
      }
      var qr = { get: function() {
        var e = ce, n = nr;
        function o(a, l) {
          var f = this, h = !e.global && (e !== ce || n !== nr), v = h && !Gt(), b = new ie(function(_, R) {
            Vr(f, new qo(Wo(a, e, h, v), Wo(l, e, h, v), _, R, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = Oe, o;
      }, set: function(e) {
        X(this, "then", e && e.prototype === Oe ? qr : { get: function() {
          return e;
        }, set: qr.set });
      } };
      function qo(e, n, o, a, l) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = l;
      }
      function Ur(e, n) {
        var o, a;
        an.push(n), e._state === null && (o = e._lib && wn(), n = Wn(n), e._state = !1, e._value = n, a = e, wt.some(function(l) {
          return l._value === a._value;
        }) || wt.push(a), Uo(e), o && _n());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Vr(e, n[o]);
        var l = e._PSD;
        --l.ref || l.finalize(), sn === 0 && (++sn, bt(function() {
          --sn == 0 && Wr();
        }, []));
      }
      function Vr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++sn, bt(Pa, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Pa(e, n, o) {
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
          --sn == 0 && Wr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function La() {
        ln(dt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = Dt;
        return jt = Dt = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        jt = Dt = !0;
      }
      function Wr() {
        var e = wt;
        wt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Jn.slice(0), o = n.length; o; ) n[--o]();
      }
      function Zn(e) {
        return new ie(Oe, !1, e);
      }
      function We(e, n) {
        var o = ce;
        return function() {
          var a = wn(), l = ce;
          try {
            return Ht(o, !0), e.apply(this, arguments);
          } catch (f) {
            n && n(f);
          } finally {
            Ht(l, !1), a && _n();
          }
        };
      }
      L(ie.prototype, { then: qr, _then: function(e, n) {
        Vr(this, new qo(null, null, e, n, ce));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? o : Zn)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? o : Zn)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ie.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ie.resolve(e()).then(function() {
            return Zn(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ie(function(a, l) {
          var f = setTimeout(function() {
            return l(new q.Timeout(n));
          }, e);
          o.then(a, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && X(ie.prototype, Symbol.toStringTag, "Dexie.Promise"), dt.env = Vo(), L(ie, { all: function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(l, f) {
            return ie.resolve(l).then(function(h) {
              e[f] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ie ? e : e && typeof e.then == "function" ? new ie(function(n, o) {
          e.then(n, o);
        }) : new ie(Oe, !0, e);
      }, reject: Zn, race: function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n, o) {
          e.map(function(a) {
            return ie.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return ce;
      }, set: function(e) {
        return ce = e;
      } }, totalEchoes: { get: function() {
        return nr;
      } }, newPSD: Wt, usePSD: ln, scheduler: { get: function() {
        return bt;
      }, set: function(e) {
        bt = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, n) {
        return new ie(function(o, a) {
          return Wt(function(l, f) {
            var h = ce;
            h.unhandleds = [], h.onunhandled = f, h.finalize = de(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? l() : f(b.unhandleds[0]);
              }, Jn.push(function _() {
                v(), Jn.splice(Jn.indexOf(_), 1);
              }), ++sn, bt(function() {
                --sn == 0 && Wr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), et && (et.allSettled && X(ie, "allSettled", function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(l, f) {
            return ie.resolve(l).then(function(h) {
              return a[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), et.any && typeof AggregateError < "u" && X(ie, "any", function() {
        var e = st.apply(null, arguments).map(rr);
        return new ie(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, l = new Array(a);
          e.forEach(function(f, h) {
            return ie.resolve(f).then(function(v) {
              return n(v);
            }, function(v) {
              l[h] = v, --a || o(new AggregateError(l));
            });
          });
        });
      }), et.withResolvers && (ie.withResolvers = et.withResolvers));
      var it = { awaits: 0, echoes: 0, id: 0 }, ka = 0, er = [], tr = 0, nr = 0, ja = 0;
      function Wt(e, n, o, a) {
        var l = ce, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++ja, dt.env, f.env = ot ? { Promise: ie, PromiseProp: { value: ie, configurable: !0, writable: !0 }, all: ie.all, race: ie.race, allSettled: ie.allSettled, any: ie.any, resolve: ie.resolve, reject: ie.reject } : {}, n && m(f, n), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = ln(f, e, o, a), f.ref === 0 && f.finalize(), a;
      }
      function xn() {
        return it.id || (it.id = ++ka), ++it.awaits, it.echoes += je, it.id;
      }
      function Gt() {
        return !!it.awaits && (--it.awaits == 0 && (it.id = 0), it.echoes = it.awaits * je, !0);
      }
      function rr(e) {
        return it.echoes && e && e.constructor === et ? (xn(), e.then(function(n) {
          return Gt(), n;
        }, function(n) {
          return Gt(), Je(n);
        })) : e;
      }
      function Fa() {
        var e = er[er.length - 1];
        er.pop(), Ht(e, !1);
      }
      function Ht(e, n) {
        var o, a = ce;
        (n ? !it.echoes || tr++ && e === ce : !tr || --tr && e === ce) || queueMicrotask(n ? (function(l) {
          ++nr, it.echoes && --it.echoes != 0 || (it.echoes = it.awaits = it.id = 0), er.push(ce), Ht(l, !0);
        }).bind(null, e) : Fa), e !== ce && (ce = e, a === dt && (dt.env = Vo()), ot && (o = dt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = d.Promise;
        return ot ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function ln(e, n, o, a, l) {
        var f = ce;
        try {
          return Ht(e, !0), n(o, a, l);
        } finally {
          Ht(f, !1);
        }
      }
      function Wo(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var l = ce;
          o && xn(), Ht(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ht(l, !1), a && queueMicrotask(Gt);
          }
        };
      }
      function Gr(e) {
        Promise === et && it.echoes === 0 ? tr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Tt).indexOf("[native code]") === -1 && (xn = Gt = A);
      var Je = ie.reject, un = "￿", Mt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", Nn = [], or = "__dbnames", Hr = "readonly", Yr = "readwrite";
      function cn(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ir(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = Be(n))[e], n;
        };
      }
      function Yo() {
        throw q.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Ie(e, n) {
        try {
          var o = Xo(e), a = Xo(n);
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
              }(zo(e), zo(n));
            case "Array":
              return function(l, f) {
                for (var h = l.length, v = f.length, b = h < v ? h : v, _ = 0; _ < b; ++_) {
                  var R = Ie(l[_], f[_]);
                  if (R !== 0) return R;
                }
                return h === v ? 0 : h < v ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function Xo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Rt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function zo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function ar(e, n, o) {
        var a = e.schema.yProps;
        return a ? (n && 0 < o.numFailures && (n = n.filter(function(l, f) {
          return !o.failures[f];
        })), Promise.all(a.map(function(l) {
          return l = l.updatesTable, n ? e.db.table(l).where("k").anyOf(n).delete() : e.db.table(l).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var Qo = (qe.prototype._trans = function(e, n, o) {
        var a = this._tx || ce.trans, l = this.name, f = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, R, g) {
          if (!g.schema[l]) throw new q.NotFound("Table " + l + " not part of transaction");
          return n(g.idbtrans, g);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === ce.trans ? a._promise(e, h, o) : Wt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: ce.transless || ce }) : function _(R, g, E, w) {
            if (R.idbdb && (R._state.openComplete || ce.letThrough || R._vip)) {
              var x = R._createTransaction(g, E, R._dbSchema);
              try {
                x.create(), R._state.PR1398_maxLoop = 3;
              } catch (C) {
                return C.name === D.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                  return _(R, g, E, w);
                })) : Je(C);
              }
              return x._promise(g, function(C, T) {
                return Wt(function() {
                  return ce.trans = x, w(C, T, x);
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
              R.open().catch(A);
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
        var n = u(e);
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
          return Ie(v, b) === 0;
        }
        var h = n.reduce(function(g, b) {
          var _ = g[0], R = g[1], g = a[b], E = e[b];
          return [_ || g, _ || !g ? cn(R, g && g.multi ? function(w) {
            return w = te(w, b), p(w) && w.some(function(x) {
              return l(E, x);
            });
          } : function(w) {
            return l(E, te(w, b));
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
        (this.schema.mappedClass = e).prototype instanceof Yo && (function(b, _) {
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
        for (var f = /* @__PURE__ */ new Set(), h = e.prototype; h; h = k(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
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
        return f && l && (h = ir(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "add", keys: n != null ? [n] : null, values: [h] });
        }).then(function(v) {
          return v.numFailures ? ie.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            ne(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(e, n) {
        return typeof e != "object" || p(e) ? this.where(":id").equals(e).modify(n) : (e = te(e, this.schema.primKey.keyPath), e === void 0 ? Je(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, qe.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ir(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? ie.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            ne(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(a) {
            return ar(n, [e], a);
          }).then(function(a) {
            return a.numFailures ? ie.reject(a.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return ar(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ie.reject(n.failures[0]) : void 0;
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
          var b = e.length, _ = _ && v ? e.map(ir(_)) : e;
          return a.core.mutate({ trans: h, type: "add", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new Pt("".concat(a.name, ".bulkAdd(): ").concat(g, " of ").concat(b, " operations failed"), x);
          });
        });
      }, qe.prototype.bulkPut = function(e, n, o) {
        var a = this, l = Array.isArray(n) ? n : void 0, f = (o = o || (l ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && l) throw new q.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (l && l.length !== e.length) throw new q.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(ir(_)) : e;
          return a.core.mutate({ trans: h, type: "put", keys: l, values: _, wantResults: f }).then(function(x) {
            var g = x.numFailures, E = x.results, w = x.lastResult, x = x.failures;
            if (g === 0) return f ? E : w;
            throw new Pt("".concat(a.name, ".bulkPut(): ").concat(g, " of ").concat(b, " operations failed"), x);
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
                for (var T = 0, I = Object.keys(x); T < I.length; T++) {
                  var P = I[T], F = x[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (Ie(F, w) !== 0) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ne(C, P, F);
                }
                f.push(E), b.push(w), _.push(C);
              }
            });
            var R = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: l } }).then(function(g) {
              var E = g.numFailures, w = g.failures;
              if (E === 0) return R;
              for (var x = 0, C = Object.keys(w); x < C.length; x++) {
                var T, I = C[x], P = f[Number(I)];
                P != null && (T = w[I], delete w[I], w[P] = T);
              }
              throw new Pt("".concat(n.name, ".bulkUpdate(): ").concat(E, " of ").concat(R, " operations failed"), w);
            });
          });
        });
      }, qe.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e }).then(function(l) {
            return ar(n, e, l);
          });
        }).then(function(h) {
          var l = h.numFailures, f = h.lastResult, h = h.failures;
          if (l === 0) return f;
          throw new Pt("".concat(n.name, ".bulkDelete(): ").concat(l, " of ").concat(o, " operations failed"), h);
        });
      }, qe);
      function qe() {
      }
      function Pn(e) {
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
            v = v || Ee;
            var R = { subscribers: [], fire: b = b || A, subscribe: function(g) {
              R.subscribers.indexOf(g) === -1 && (R.subscribers.push(g), R.fire = v(R.fire, g));
            }, unsubscribe: function(g) {
              R.subscribers = R.subscribers.filter(function(E) {
                return E !== g;
              }), R.fire = R.subscribers.reduce(v, b);
            } };
            return o[h] = n[h] = R;
          }
          u(_ = h).forEach(function(g) {
            var E = _[g];
            if (p(E)) f(g, _[g][0], _[g][1]);
            else {
              if (E !== "asap") throw new q.InvalidArgument("Invalid event config");
              var w = f(g, U, function() {
                for (var x = arguments.length, C = new Array(x); x--; ) C[x] = arguments[x];
                w.subscribers.forEach(function(T) {
                  fe(function() {
                    T.apply(null, C);
                  });
                });
              });
            }
          });
        }
      }
      function Ln(e, n) {
        return W(n).from({ prototype: e }), n;
      }
      function Rn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function Xr(e, n) {
        e.filter = cn(e.filter, n);
      }
      function zr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return cn(a(), n());
        } : n, e.justLimit = o && !a;
      }
      function sr(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new q.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Jo(e, n, o) {
        var a = sr(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function lr(e, n, o, a) {
        var l = e.replayFilter ? cn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var f = {}, h = function(v, b, _) {
            var R, g;
            l && !l(b, _, function(E) {
              return b.stop(E);
            }, function(E) {
              return b.fail(E);
            }) || ((g = "" + (R = b.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(R)), S(f, g) || (f[g] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), Zo(Jo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, a, o), cn(e.algorithm, l), n, !e.keysOnly && e.valueMapper);
      }
      function Zo(e, n, o, a) {
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
              f.stop(v), h = A;
            }, function(v) {
              f.fail(v), h = A;
            }) || l(f.value, f, function(v) {
              return h = v;
            }), h();
          });
        });
      }
      var kn = (ei.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (p(o)) return c(c([], p(e) ? e : [], !0), o).sort();
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
      }, ei);
      function ei(e) {
        this["@@propmod"] = e;
      }
      var Ma = (Pe.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Je.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Pe.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, Je.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Pe.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = cn(n.algorithm, e);
      }, Pe.prototype._iterate = function(e, n) {
        return lr(this._ctx, e, n, this._ctx.table.core);
      }, Pe.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && m(o, e), n._ctx = o, n;
      }, Pe.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Pe.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return lr(n, e, o, n.table.core);
        });
      }, Pe.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx, l = a.table.core;
          if (Rn(a, !0)) return l.count({ trans: o, query: { index: sr(a, l.schema), range: a.range } }).then(function(h) {
            return Math.min(h, a.limit);
          });
          var f = 0;
          return lr(a, function() {
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
          return Ie(f(b, l), f(_, l)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(v);
        }).then(n);
      }, Pe.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx;
          if (a.dir === "next" && Rn(a, !0) && 0 < a.limit) {
            var l = a.valueMapper, f = sr(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: f, range: a.range } }).then(function(v) {
              return v = v.result, l ? v.map(l) : v;
            });
          }
          var h = [];
          return lr(a, function(v) {
            return h.push(v);
          }, o, a.table.core).then(function() {
            return h;
          });
        }, e);
      }, Pe.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, Rn(n) ? zr(n, function() {
          var o = e;
          return function(a, l) {
            return o === 0 || (o === 1 ? --o : l(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : zr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Pe.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), zr(this._ctx, function() {
          var n = e;
          return function(o, a, l) {
            return --n <= 0 && a(l), 0 <= n;
          };
        }, !0), this;
      }, Pe.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, a, l) {
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
        return Xr(this._ctx, function(o) {
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
          var l = sr(n, n.table.core.schema);
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
        return Xr(this._ctx, function(l) {
          var a = l.primaryKey.toString(), l = S(n, a);
          return n[a] = !0, !l;
        }), this;
      }, Pe.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var l, f, h;
          h = typeof e == "function" ? e : (l = u(e), f = l.length, function(I) {
            for (var P = !1, F = 0; F < f; ++F) {
              var M = l[F], H = e[M], Z = te(I, M);
              H instanceof kn ? (ne(I, M, H.execute(Z)), P = !0) : Z !== H && (ne(I, M, H), P = !0);
            }
            return P;
          });
          var v = o.table.core, g = v.schema.primaryKey, b = g.outbound, _ = g.extractKey, R = 200, g = n.db._options.modifyChunkSize;
          g && (R = typeof g == "object" ? g[v.name] || g["*"] || 200 : g);
          function E(I, M) {
            var F = M.failures, M = M.numFailures;
            x += I - M;
            for (var H = 0, Z = u(F); H < Z.length; H++) {
              var z = Z[H];
              w.push(F[z]);
            }
          }
          var w = [], x = 0, C = [], T = e === ti;
          return n.clone().primaryKeys().then(function(I) {
            function P(M) {
              var H = Math.min(R, I.length - M), Z = I.slice(M, M + H);
              return (T ? Promise.resolve([]) : v.getMany({ trans: a, keys: Z, cache: "immutable" })).then(function(z) {
                var J = [], oe = [], re = b ? [] : null, ae = T ? Z : [];
                if (!T) for (var Ce = 0; Ce < H; ++Ce) {
                  var De = z[Ce], Re = { value: Be(De), primKey: I[M + Ce] };
                  h.call(Re, Re.value, Re) !== !1 && (Re.value == null ? ae.push(I[M + Ce]) : b || Ie(_(De), _(Re.value)) === 0 ? (oe.push(Re.value), b && re.push(I[M + Ce])) : (ae.push(I[M + Ce]), J.push(Re.value)));
                }
                return Promise.resolve(0 < J.length && v.mutate({ trans: a, type: "add", values: J }).then(function(ze) {
                  for (var Ne in ze.failures) ae.splice(parseInt(Ne), 1);
                  E(J.length, ze);
                })).then(function() {
                  return (0 < oe.length || F && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: re, values: oe, criteria: F, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < M }).then(function(ze) {
                    return E(oe.length, ze);
                  });
                }).then(function() {
                  return (0 < ae.length || F && T) && v.mutate({ trans: a, type: "delete", keys: ae, criteria: F, isAdditionalChunk: 0 < M }).then(function(ze) {
                    return ar(o.table, ae, ze);
                  }).then(function(ze) {
                    return E(ae.length, ze);
                  });
                }).then(function() {
                  return I.length > M + H && P(M + R);
                });
              });
            }
            var F = Rn(o) && o.limit === 1 / 0 && (typeof e != "function" || T) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < w.length) throw new gn("Error modifying one or more objects", w, x, C);
              return I.length;
            });
          });
        });
      }, Pe.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !Rn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ti) : this._write(function(o) {
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
      var ti = function(e, n) {
        return n.value = null;
      };
      function $a(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function Ba(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function gt(e, n, o) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Tn(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function ur(e, n, o, a) {
        var l, f, h, v, b, _, R, g = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return gt(e, Go);
        function E(x) {
          l = x === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, f = x === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = x === "next" ? $a : Ba;
          var C = o.map(function(T) {
            return { lower: f(T), upper: l(T) };
          }).sort(function(T, I) {
            return h(T.lower, I.lower);
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
          var I = x.key;
          if (typeof I != "string") return !1;
          var P = f(I);
          if (n(P, b, w)) return !0;
          for (var F = null, M = w; M < g; ++M) {
            var H = function(Z, z, J, oe, re, ae) {
              for (var Ce = Math.min(Z.length, oe.length), De = -1, Re = 0; Re < Ce; ++Re) {
                var ze = z[Re];
                if (ze !== oe[Re]) return re(Z[Re], J[Re]) < 0 ? Z.substr(0, Re) + J[Re] + J.substr(Re + 1) : re(Z[Re], oe[Re]) < 0 ? Z.substr(0, Re) + oe[Re] + J.substr(Re + 1) : 0 <= De ? Z.substr(0, De) + z[De] + J.substr(De + 1) : null;
                re(Z[Re], ze) < 0 && (De = Re);
              }
              return Ce < oe.length && ae === "next" ? Z + J.substr(Z.length) : Ce < Z.length && ae === "prev" ? Z.substr(0, J.length) : De < 0 ? null : Z.substr(0, De) + oe[De] + J.substr(De + 1);
            }(I, P, v[M], b[M], h, _);
            H === null && F === null ? w = M + 1 : (F === null || 0 < h(F, H)) && (F = H);
          }
          return C(F !== null ? function() {
            x.continue(F + R);
          } : T), !1;
        }), e;
      }
      function Yt(e, n, o, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: a };
      }
      function ni(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ri = (Object.defineProperty(at.prototype, "Collection", { get: function() {
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
          return ni(e);
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
        return typeof e != "string" ? gt(this, Go) : this.between(e, e + un, !0, !0);
      }, at.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : ur(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], un);
      }, at.prototype.equalsIgnoreCase = function(e) {
        return ur(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, at.prototype.anyOfIgnoreCase = function() {
        var e = st.apply(Xe, arguments);
        return e.length === 0 ? Tn(this) : ur(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, at.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = st.apply(Xe, arguments);
        return e.length === 0 ? Tn(this) : ur(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, un);
      }, at.prototype.anyOf = function() {
        var e = this, n = st.apply(Xe, arguments), o = this._cmp;
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
        var e = st.apply(Xe, arguments);
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
      }, at.prototype.inAnyRange = function(I, n) {
        var o = this, a = this._cmp, l = this._ascending, f = this._descending, h = this._min, v = this._max;
        if (I.length === 0) return Tn(this);
        if (!I.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return gt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, R, g = l;
        function E(P, F) {
          return g(P[0], F[0]);
        }
        try {
          (R = I.reduce(function(P, F) {
            for (var M = 0, H = P.length; M < H; ++M) {
              var Z = P[M];
              if (a(F[0], Z[1]) < 0 && 0 < a(F[1], Z[0])) {
                Z[0] = h(Z[0], F[0]), Z[1] = v(Z[1], F[1]);
                break;
              }
            }
            return M === H && P.push(F), P;
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
        }, T = x, I = new this.Collection(this, function() {
          return Yt(R[0][0], R[R.length - 1][1], !b, !_);
        });
        return I._ondirectionchange = function(P) {
          g = P === "next" ? (T = x, l) : (T = C, f), R.sort(E);
        }, I._addAlgorithm(function(P, F, M) {
          for (var H, Z = P.key; T(Z); ) if (++w === R.length) return F(M), !1;
          return !x(H = Z) && !C(H) || (o._cmp(Z, R[w][1]) === 0 || o._cmp(Z, R[w][0]) === 0 || F(function() {
            g === l ? P.continue(R[w][0]) : P.continue(R[w][1]);
          }), !1);
        }), I;
      }, at.prototype.startsWithAnyOf = function() {
        var e = st.apply(Xe, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Tn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + un];
        })) : gt(this, "startsWithAnyOf() only works with strings");
      }, at);
      function at() {
      }
      function Lt(e) {
        return We(function(n) {
          return jn(n), e(n.target.error), !1;
        });
      }
      function jn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Fn = "storagemutated", Qr = "x-storagemutated-1", Xt = Pn(null, Fn), Ka = (kt.prototype._lock = function() {
        return ee(!ce.global), ++this._reculock, this._reculock !== 1 || ce.global || (ce.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (ee(!ce.global), --this._reculock == 0) for (ce.global || (ce.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            ln(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, kt.prototype._locked = function() {
        return this._reculock && ce.lockOwnerFor !== this;
      }, kt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (ee(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new q.DatabaseClosed(a);
          case "MissingAPIError":
            throw new q.MissingAPI(a.message, a);
          default:
            throw new q.OpenFailed(a);
        }
        if (!this.active) throw new q.TransactionInactive();
        return ee(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = We(function(l) {
          jn(l), n._reject(e.error);
        }), e.onabort = We(function(l) {
          jn(l), n.active && n._reject(new q.Abort(e.error)), n.active = !1, n.on("abort").fire(l);
        }), e.oncomplete = We(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Xt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Je(new q.ReadOnly("Transaction is readonly"));
        if (!this.active) return Je(new q.TransactionInactive());
        if (this._locked()) return new ie(function(f, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(f, h);
          }, ce]);
        });
        if (o) return Wt(function() {
          var f = new ie(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var l = new ie(function(f, h) {
          var v = n(f, h, a);
          v && v.then && v.then(f, h);
        });
        return l._lib = !0, l;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = ie.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = f);
        }());
        var l = o._waitingFor;
        return new ie(function(f, h) {
          a.then(function(v) {
            return o._waitingQueue.push(We(f.bind(null, v)));
          }, function(v) {
            return o._waitingQueue.push(We(h.bind(null, v)));
          }).finally(function() {
            o._waitingFor === l && (o._waitingFor = null);
          });
        });
      }, kt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new q.Abort()));
      }, kt.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (S(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new q.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, kt);
      function kt() {
      }
      function Jr(e, n, o, a, l, f, h, v) {
        return { name: e, keyPath: n, unique: o, multi: a, auto: l, compound: f, src: (o && !h ? "&" : "") + (a ? "*" : "") + (l ? "++" : "") + oi(n), type: v };
      }
      function oi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Zr(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (a = function(l) {
          return [l.name, l];
        }, o.reduce(function(l, f, h) {
          return h = a(f, h), h && (l[h[0]] = h[1]), l;
        }, {})) };
        var a;
      }
      var Mn = function(e) {
        try {
          return e.only([[]]), Mn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Mn = function() {
            return un;
          }, un;
        }
      };
      function eo(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return te(o, n);
        } : function(o) {
          return te(o, e);
        };
        var n;
      }
      function ii(e) {
        return [].slice.call(e);
      }
      var qa = 0;
      function $n(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ua(e, n, b) {
        function a(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = T.lower, x = T.upper, C = T.lowerOpen, T = T.upperOpen;
          return w === void 0 ? x === void 0 ? null : n.upperBound(x, !!T) : x === void 0 ? n.lowerBound(w, !!C) : n.bound(w, x, !!C, !!T);
        }
        function l(E) {
          var w, x = E.name;
          return { name: x, schema: E, mutate: function(C) {
            var T = C.trans, I = C.type, P = C.keys, F = C.values, M = C.range;
            return new Promise(function(H, Z) {
              H = We(H);
              var z = T.objectStore(x), J = z.keyPath == null, oe = I === "put" || I === "add";
              if (!oe && I !== "delete" && I !== "deleteRange") throw new Error("Invalid operation type: " + I);
              var re, ae = (P || F || { length: 1 }).length;
              if (P && F && P.length !== F.length) throw new Error("Given keys array must have same length as given values array.");
              if (ae === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ce(pt) {
                ++ze, jn(pt);
              }
              var De = [], Re = [], ze = 0;
              if (I === "deleteRange") {
                if (M.type === 4) return H({ numFailures: ze, failures: Re, results: [], lastResult: void 0 });
                M.type === 3 ? De.push(re = z.clear()) : De.push(re = z.delete(a(M)));
              } else {
                var J = oe ? J ? [F, P] : [F, null] : [P, null], Ne = J[0], ut = J[1];
                if (oe) for (var ct = 0; ct < ae; ++ct) De.push(re = ut && ut[ct] !== void 0 ? z[I](Ne[ct], ut[ct]) : z[I](Ne[ct])), re.onerror = Ce;
                else for (ct = 0; ct < ae; ++ct) De.push(re = z[I](Ne[ct])), re.onerror = Ce;
              }
              function _r(pt) {
                pt = pt.target.result, De.forEach(function(pn, bo) {
                  return pn.error != null && (Re[bo] = pn.error);
                }), H({ numFailures: ze, failures: Re, results: I === "delete" ? P : De.map(function(pn) {
                  return pn.result;
                }), lastResult: pt });
              }
              re.onerror = function(pt) {
                Ce(pt), _r(pt);
              }, re.onsuccess = _r;
            });
          }, getMany: function(C) {
            var T = C.trans, I = C.keys;
            return new Promise(function(P, F) {
              P = We(P);
              for (var M, H = T.objectStore(x), Z = I.length, z = new Array(Z), J = 0, oe = 0, re = function(De) {
                De = De.target, z[De._pos] = De.result, ++oe === J && P(z);
              }, ae = Lt(F), Ce = 0; Ce < Z; ++Ce) I[Ce] != null && ((M = H.get(I[Ce]))._pos = Ce, M.onsuccess = re, M.onerror = ae, ++J);
              J === 0 && P(z);
            });
          }, get: function(C) {
            var T = C.trans, I = C.key;
            return new Promise(function(P, F) {
              P = We(P);
              var M = T.objectStore(x).get(I);
              M.onsuccess = function(H) {
                return P(H.target.result);
              }, M.onerror = Lt(F);
            });
          }, query: (w = _, function(C) {
            return new Promise(function(T, I) {
              T = We(T);
              var P, F, M, J = C.trans, H = C.values, Z = C.limit, re = C.query, z = Z === 1 / 0 ? void 0 : Z, oe = re.index, re = re.range, J = J.objectStore(x), oe = oe.isPrimaryKey ? J : J.index(oe.name), re = a(re);
              if (Z === 0) return T({ result: [] });
              w ? ((z = H ? oe.getAll(re, z) : oe.getAllKeys(re, z)).onsuccess = function(ae) {
                return T({ result: ae.target.result });
              }, z.onerror = Lt(I)) : (P = 0, F = !H && "openKeyCursor" in oe ? oe.openKeyCursor(re) : oe.openCursor(re), M = [], F.onsuccess = function(ae) {
                var Ce = F.result;
                return Ce ? (M.push(H ? Ce.value : Ce.primaryKey), ++P === Z ? T({ result: M }) : void Ce.continue()) : T({ result: M });
              }, F.onerror = Lt(I));
            });
          }), openCursor: function(C) {
            var T = C.trans, I = C.values, P = C.query, F = C.reverse, M = C.unique;
            return new Promise(function(H, Z) {
              H = We(H);
              var oe = P.index, z = P.range, J = T.objectStore(x), J = oe.isPrimaryKey ? J : J.index(oe.name), oe = F ? M ? "prevunique" : "prev" : M ? "nextunique" : "next", re = !I && "openKeyCursor" in J ? J.openKeyCursor(a(z), oe) : J.openCursor(a(z), oe);
              re.onerror = Lt(Z), re.onsuccess = We(function(ae) {
                var Ce, De, Re, ze, Ne = re.result;
                Ne ? (Ne.___id = ++qa, Ne.done = !1, Ce = Ne.continue.bind(Ne), De = (De = Ne.continuePrimaryKey) && De.bind(Ne), Re = Ne.advance.bind(Ne), ze = function() {
                  throw new Error("Cursor not stopped");
                }, Ne.trans = T, Ne.stop = Ne.continue = Ne.continuePrimaryKey = Ne.advance = function() {
                  throw new Error("Cursor not started");
                }, Ne.fail = We(Z), Ne.next = function() {
                  var ut = this, ct = 1;
                  return this.start(function() {
                    return ct-- ? ut.continue() : ut.stop();
                  }).then(function() {
                    return ut;
                  });
                }, Ne.start = function(ut) {
                  function ct() {
                    if (re.result) try {
                      ut();
                    } catch (pt) {
                      Ne.fail(pt);
                    }
                    else Ne.done = !0, Ne.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, Ne.stop();
                  }
                  var _r = new Promise(function(pt, pn) {
                    pt = We(pt), re.onerror = Lt(pn), Ne.fail = pn, Ne.stop = function(bo) {
                      Ne.stop = Ne.continue = Ne.continuePrimaryKey = Ne.advance = ze, pt(bo);
                    };
                  });
                  return re.onsuccess = We(function(pt) {
                    re.onsuccess = ct, ct();
                  }), Ne.continue = Ce, Ne.continuePrimaryKey = De, Ne.advance = Re, ct(), _r;
                }, H(Ne)) : H(null);
              }, Z);
            });
          }, count: function(C) {
            var T = C.query, I = C.trans, P = T.index, F = T.range;
            return new Promise(function(M, H) {
              var Z = I.objectStore(x), z = P.isPrimaryKey ? Z : Z.index(P.name), Z = a(F), z = Z ? z.count(Z) : z.count();
              z.onsuccess = We(function(J) {
                return M(J.target.result);
              }), z.onerror = Lt(H);
            });
          } };
        }
        var f, h, v, R = (h = b, v = ii((f = e).objectStoreNames), { schema: { name: f.name, tables: v.map(function(E) {
          return h.objectStore(E);
        }).map(function(E) {
          var w = E.keyPath, T = E.autoIncrement, x = p(w), C = {}, T = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: T, unique: !0, extractKey: eo(w) }, indexes: ii(E.indexNames).map(function(I) {
            return E.index(I);
          }).map(function(M) {
            var P = M.name, F = M.unique, H = M.multiEntry, M = M.keyPath, H = { name: P, compound: p(M), keyPath: M, unique: F, multiEntry: H, extractKey: eo(M) };
            return C[$n(M)] = H;
          }), getIndexByKeyPath: function(I) {
            return C[$n(I)];
          } };
          return C[":id"] = T.primaryKey, w != null && (C[$n(w)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = R.schema, _ = R.hasGetAll, R = b.tables.map(l), g = {};
        return R.forEach(function(E) {
          return g[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!g[E]) throw new Error("Table '".concat(E, "' not found"));
          return g[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: Mn(n), schema: b };
      }
      function Va(e, n, o, a) {
        var l = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = Ua(n, l, a), e.dbcore.reduce(function(f, h) {
          return h = h.create, s(s({}, f), h(f));
        }, a)) };
      }
      function cr(e, a) {
        var o = a.db, a = Va(e._middlewares, o, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(l) {
          var f = l.name;
          e.core.schema.tables.some(function(h) {
            return h.name === f;
          }) && (l.core = e.core.table(f), e[f] instanceof e.Table && (e[f].core = l.core));
        });
      }
      function fr(e, n, o, a) {
        o.forEach(function(l) {
          var f = a[l];
          n.forEach(function(h) {
            var v = function b(_, R) {
              return G(_, R) || (_ = k(_)) && b(_, R);
            }(h, l);
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? X(h, l, { get: function() {
              return this.table(l);
            }, set: function(b) {
              Y(this, l, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[l] = new e.Table(l, f));
          });
        });
      }
      function to(e, n) {
        n.forEach(function(o) {
          for (var a in o) o[a] instanceof e.Table && delete o[a];
        });
      }
      function Wa(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function Ga(e, n, o, a) {
        var l = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !l.$meta && (l.$meta = Zr("$meta", si("")[0], []), e._storeNames.push("$meta"));
        var f = e._createTransaction("readwrite", e._storeNames, l);
        f.create(o), f._completion.catch(a);
        var h = f._reject.bind(f), v = ce.transless || ce;
        Wt(function() {
          return ce.trans = f, ce.transless = v, n !== 0 ? (cr(e, o), _ = n, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(R) {
            return R ?? _;
          }) : ie.resolve(_)).then(function(R) {
            return E = R, w = f, x = o, C = [], R = (g = e)._versions, T = g._dbSchema = pr(0, g.idbdb, x), (R = R.filter(function(I) {
              return I._cfg.version >= E;
            })).length !== 0 ? (R.forEach(function(I) {
              C.push(function() {
                var P = T, F = I._cfg.dbschema;
                hr(g, P, x), hr(g, F, x), T = g._dbSchema = F;
                var M = no(P, F);
                M.add.forEach(function(oe) {
                  ro(x, oe[0], oe[1].primKey, oe[1].indexes);
                }), M.change.forEach(function(oe) {
                  if (oe.recreate) throw new q.Upgrade("Not yet support for changing primary key");
                  var re = x.objectStore(oe.name);
                  oe.add.forEach(function(ae) {
                    return dr(re, ae);
                  }), oe.change.forEach(function(ae) {
                    re.deleteIndex(ae.name), dr(re, ae);
                  }), oe.del.forEach(function(ae) {
                    return re.deleteIndex(ae);
                  });
                });
                var H = I._cfg.contentUpgrade;
                if (H && I._cfg.version > E) {
                  cr(g, x), w._memoizedTables = {};
                  var Z = pe(F);
                  M.del.forEach(function(oe) {
                    Z[oe] = P[oe];
                  }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], u(Z), Z), w.schema = Z;
                  var z, J = It(H);
                  return J && xn(), M = ie.follow(function() {
                    var oe;
                    (z = H(w)) && J && (oe = Gt.bind(null, null), z.then(oe, oe));
                  }), z && typeof z.then == "function" ? ie.resolve(z) : M.then(function() {
                    return z;
                  });
                }
              }), C.push(function(P) {
                var F, M, H = I._cfg.dbschema;
                F = H, M = P, [].slice.call(M.db.objectStoreNames).forEach(function(Z) {
                  return F[Z] == null && M.db.deleteObjectStore(Z);
                }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), w.schema = g._dbSchema;
              }), C.push(function(P) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === I._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(F) {
                  return F !== "$meta";
                })) : P.objectStore("$meta").put(I._cfg.version, "version"));
              });
            }), function I() {
              return C.length ? ie.resolve(C.shift()(w.idbtrans)).then(I) : ie.resolve();
            }().then(function() {
              ai(T, x);
            })) : ie.resolve();
            var g, E, w, x, C, T;
          }).catch(h)) : (u(l).forEach(function(R) {
            ro(o, R, l[R].primKey, l[R].indexes);
          }), cr(e, o), void ie.follow(function() {
            return e.on.populate.fire(f);
          }).catch(h));
          var b, _;
        });
      }
      function Ha(e, n) {
        ai(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = pr(0, e.idbdb, n);
        hr(e, e._dbSchema, n);
        for (var a = 0, l = no(o, e._dbSchema).change; a < l.length; a++) {
          var f = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = n.objectStore(h.name);
            h.add.forEach(function(b) {
              me && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), dr(v, b);
            });
          }(l[a]);
          if (typeof f == "object") return f.value;
        }
      }
      function no(e, n) {
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
      function ro(e, n, o, a) {
        var l = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(f) {
          return dr(l, f);
        }), l;
      }
      function ai(e, n) {
        u(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (me && console.debug("Dexie: Creating missing table", o), ro(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function dr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function pr(e, n, o) {
        var a = {};
        return $(n.objectStoreNames, 0).forEach(function(l) {
          for (var f = o.objectStore(l), h = Jr(oi(_ = f.keyPath), _ || "", !0, !1, !!f.autoIncrement, _ && typeof _ != "string", !0), v = [], b = 0; b < f.indexNames.length; ++b) {
            var R = f.index(f.indexNames[b]), _ = R.keyPath, R = Jr(R.name, _, !!R.unique, !!R.multiEntry, !1, _ && typeof _ != "string", !1);
            v.push(R);
          }
          a[l] = Zr(l, h, v);
        }), a;
      }
      function hr(e, n, o) {
        for (var a = o.db.objectStoreNames, l = 0; l < a.length; ++l) {
          var f = a[l], h = o.objectStore(f);
          e._hasGetAll = "getAll" in h;
          for (var v = 0; v < h.indexNames.length; ++v) {
            var b = h.indexNames[v], _ = h.index(b).keyPath, R = typeof _ == "string" ? _ : "[" + $(_).join("+") + "]";
            !n[f] || (_ = n[f].idxByName[R]) && (_.name = b, delete n[f].idxByName[R], n[f].idxByName[b] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function si(e) {
        return e.split(",").map(function(n, o) {
          var f = n.split(":"), a = (l = f[1]) === null || l === void 0 ? void 0 : l.trim(), l = (n = f[0].trim()).replace(/([&*]|\+\+)/g, ""), f = /^\[/.test(l) ? l.match(/^\[(.*)\]$/)[1].split("+") : l;
          return Jr(l, f || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), p(f), o === 0, a);
        });
      }
      var Ya = (Cn.prototype._createTableSchema = Zr, Cn.prototype._parseIndexSyntax = si, Cn.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        u(e).forEach(function(a) {
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
        }), n._dbSchema = l, to(n, [n._allTables, n, n.Transaction.prototype]), fr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], u(l), l), n._storeNames = u(l), this;
      }, Cn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = xe(this._cfg.contentUpgrade || A, e), this;
      }, Cn);
      function Cn() {
      }
      function oo(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new $t(or, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function ao(e) {
        return Wt(function() {
          return ce.letThrough = !0, e();
        });
      }
      function so(e) {
        return !("from" in e);
      }
      var lt = function(e, n) {
        if (!this) {
          var o = new lt();
          return e && "d" in e && m(o, e), o;
        }
        m(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Bn(e, n, o) {
        var a = Ie(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (so(e)) return m(e, { from: n, to: o, d: 1 });
          var l = e.l, a = e.r;
          if (Ie(o, e.from) < 0) return l ? Bn(l, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          if (0 < Ie(n, e.to)) return a ? Bn(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          Ie(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Ie(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, l && !e.l && Kn(e, l), a && o && Kn(e, a);
        }
      }
      function Kn(e, n) {
        so(n) || function o(a, b) {
          var f = b.from, h = b.to, v = b.l, b = b.r;
          Bn(a, f, h), v && o(a, v), b && o(a, b);
        }(e, n);
      }
      function li(e, n) {
        var o = mr(n), a = o.next();
        if (a.done) return !1;
        for (var l = a.value, f = mr(e), h = f.next(l.from), v = h.value; !a.done && !h.done; ) {
          if (Ie(v.from, l.to) <= 0 && 0 <= Ie(v.to, l.from)) return !0;
          Ie(l.from, v.from) < 0 ? l = (a = o.next(v.from)).value : v = (h = f.next(l.from)).value;
        }
        return !1;
      }
      function mr(e) {
        var n = so(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Ie(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Ie(o, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function ui(e) {
        var n, o, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), l = 1 < a ? "r" : a < -1 ? "l" : "";
        l && (n = l == "r" ? "l" : "r", o = s({}, e), a = e[l], e.from = a.from, e.to = a.to, e[l] = a[l], o[l] = a[n], (e[n] = o).d = ci(o)), e.d = ci(e);
      }
      function ci(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function vr(e, n) {
        return u(n).forEach(function(o) {
          e[o] ? Kn(e[o], n[o]) : e[o] = function a(l) {
            var f, h, v = {};
            for (f in l) S(l, f) && (h = l[f], v[f] = !h || typeof h != "object" || be.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function lo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && li(n[o], e[o]);
        });
      }
      L(lt.prototype, ((Tt = { add: function(e) {
        return Kn(this, e), this;
      }, addKey: function(e) {
        return Bn(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return Bn(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = mr(this).next(e).value;
        return n && Ie(n.from, e) <= 0 && 0 <= Ie(n.to, e);
      } })[Fe] = function() {
        return mr(this);
      }, Tt));
      var fn = {}, uo = {}, co = !1;
      function yr(e) {
        vr(uo, e), co || (co = !0, setTimeout(function() {
          co = !1, fo(uo, !(uo = {}));
        }, 0));
      }
      function fo(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, l = Object.values(fn); a < l.length; a++) fi(h = l[a], e, o, n);
        else for (var f in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (h = fn["idb://".concat(f, "/").concat(v)]) && fi(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function fi(e, n, o, a) {
        for (var l = [], f = 0, h = Object.entries(e.queries.query); f < h.length; f++) {
          for (var v = h[f], b = v[0], _ = [], R = 0, g = v[1]; R < g.length; R++) {
            var E = g[R];
            lo(n, E.obsSet) ? E.subscribers.forEach(function(T) {
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
      function Xa(e) {
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
          return new ie(function(E, w) {
            if (h(), !o) throw new q.MissingAPI();
            var x = e.name, C = n.autoSchema || !l ? o.open(x) : o.open(x, l);
            if (!C) throw new q.MissingAPI();
            C.onerror = Lt(w), C.onblocked = We(e._fireOnBlocked), C.onupgradeneeded = We(function(T) {
              var I;
              R = C.transaction, n.autoSchema && !e._options.allowEmptyDB ? (C.onerror = jn, R.abort(), C.result.close(), (I = o.deleteDatabase(x)).onsuccess = I.onerror = We(function() {
                w(new q.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (R.onerror = Lt(w), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, g = T < 1, e.idbdb = C.result, f && Ha(e, R), Ga(e, T / 10, R, w));
            }, w), C.onsuccess = We(function() {
              R = null;
              var T, I, P, F, M, H = e.idbdb = C.result, Z = $(H.objectStoreNames);
              if (0 < Z.length) try {
                var z = H.transaction((F = Z).length === 1 ? F[0] : F, "readonly");
                if (n.autoSchema) I = H, P = z, (T = e).verno = I.version / 10, P = T._dbSchema = pr(0, I, P), T._storeNames = $(I.objectStoreNames, 0), fr(T, [T._allTables], u(P), P);
                else if (hr(e, e._dbSchema, z), ((M = no(pr(0, (M = e).idbdb, z), M._dbSchema)).add.length || M.change.some(function(J) {
                  return J.add.length || J.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), l = H.version + 1, f = !0, E(v());
                cr(e, z);
              } catch {
              }
              Nn.push(e), H.onversionchange = We(function(J) {
                n.vcFired = !0, e.on("versionchange").fire(J);
              }), H.onclose = We(function(J) {
                e.on("close").fire(J);
              }), g && (M = e._deps, z = x, H = M.indexedDB, M = M.IDBKeyRange, io(H) || z === or || oo(H, M).put({ name: z }).catch(A)), E();
            }, w);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < l) return l = 0, v();
            }
            return ie.reject(E);
          });
        }
        var b, _ = n.dbReadyResolve, R = null, g = !1;
        return ie.race([a, (typeof navigator > "u" ? ie.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function w() {
            return indexedDB.databases().finally(E);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], ie.resolve(ao(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(xe, A);
              return n.onReadyBeingFired = [], ie.resolve(ao(function() {
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
              x.name && (E["idb://".concat(e.name, "/").concat(w.name, "/").concat(x.name)] = new lt(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(w.name, "/")] = E["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new lt(-1 / 0, [[[]]]);
          }), Xt(Fn).fire(E), fo(E, !0)), e;
        });
      }
      function po(e) {
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
      function gr(e, n, o) {
        for (var a = p(e) ? e.slice() : [e], l = 0; l < o; ++l) a.push(n);
        return a;
      }
      var za = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, l = {}, f = [];
          function h(g, E, w) {
            var x = $n(g), C = l[x] = l[x] || [], T = g == null ? 0 : typeof g == "string" ? 1 : g.length, I = 0 < E, I = s(s({}, w), { name: I ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: I, keyTail: E, keyLength: T, extractKey: eo(g), unique: !I && w.unique });
            return C.push(I), I.isPrimaryKey || f.push(I), 1 < T && h(T === 2 ? g[0] : g.slice(0, T - 1), E + 1, w), C.sort(function(P, F) {
              return P.keyTail - F.keyTail;
            }), I;
          }
          n = h(a.primaryKey.keyPath, 0, a.primaryKey), l[":id"] = [n];
          for (var v = 0, b = a.indexes; v < b.length; v++) {
            var _ = b[v];
            h(_.keyPath, 0, _);
          }
          function R(g) {
            var E, w = g.query.index;
            return w.isVirtual ? s(s({}, g), { query: { index: w.lowLevelIndex, range: (E = g.query.range, w = w.keyTail, { type: E.type === 1 ? 2 : E.type, lower: gr(E.lower, E.lowerOpen ? e.MAX_KEY : e.MIN_KEY, w), lowerOpen: !0, upper: gr(E.upper, E.upperOpen ? e.MIN_KEY : e.MAX_KEY, w), upperOpen: !0 }) } }) : g;
          }
          return s(s({}, o), { schema: s(s({}, a), { primaryKey: n, indexes: f, getIndexByKeyPath: function(g) {
            return (g = l[$n(g)]) && g[0];
          } }), count: function(g) {
            return o.count(R(g));
          }, query: function(g) {
            return o.query(R(g));
          }, openCursor: function(g) {
            var E = g.query.index, w = E.keyTail, x = E.isVirtual, C = E.keyLength;
            return x ? o.openCursor(R(g)).then(function(I) {
              return I && T(I);
            }) : o.openCursor(g);
            function T(I) {
              return Object.create(I, { continue: { value: function(P) {
                P != null ? I.continue(gr(P, g.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : g.unique ? I.continue(I.key.slice(0, C).concat(g.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : I.continue();
              } }, continuePrimaryKey: { value: function(P, F) {
                I.continuePrimaryKey(gr(P, e.MAX_KEY, w), F);
              } }, primaryKey: { get: function() {
                return I.primaryKey;
              } }, key: { get: function() {
                var P = I.key;
                return C === 1 ? P[0] : P.slice(0, C);
              } }, value: { get: function() {
                return I.value;
              } } });
            }
          } });
        } });
      } };
      function ho(e, n, o, a) {
        return o = o || {}, a = a || "", u(e).forEach(function(l) {
          var f, h, v;
          S(n, l) ? (f = e[l], h = n[l], typeof f == "object" && typeof h == "object" && f && h ? (v = Rt(f)) !== Rt(h) ? o[a + l] = n[l] : v === "Object" ? ho(f, h, o, a + l + ".") : f !== h && (o[a + l] = n[l]) : f !== h && (o[a + l] = n[l])) : o[a + l] = void 0;
        }), u(n).forEach(function(l) {
          S(e, l) || (o[a + l] = n[l]);
        }), o;
      }
      function mo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var Qa = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = ce.trans, h = f.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (l.type) {
              case "add":
                if (b.fire === A) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "put":
                if (b.fire === A && _.fire === A) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "delete":
                if (v.fire === A) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "deleteRange":
                if (v.fire === A) break;
                return f._promise("readwrite", function() {
                  return function g(E, w, x) {
                    return o.query({ trans: E, values: !1, query: { index: a, range: w }, limit: x }).then(function(C) {
                      var T = C.result;
                      return R({ type: "delete", keys: T, trans: E }).then(function(I) {
                        return 0 < I.numFailures ? Promise.reject(I.failures[0]) : T.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : g(E, s(s({}, w), { lower: T[T.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function R(g) {
              var E, w, x, C = ce.trans, T = g.keys || mo(a, g);
              if (!T) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? s(s({}, g), { keys: T }) : s({}, g)).type !== "delete" && (g.values = c([], g.values)), g.keys && (g.keys = c([], g.keys)), E = o, x = T, ((w = g).type === "add" ? Promise.resolve([]) : E.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(I) {
                var P = T.map(function(F, M) {
                  var H, Z, z, J = I[M], oe = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? v.fire.call(oe, F, J, C) : g.type === "add" || J === void 0 ? (H = b.fire.call(oe, F, g.values[M], C), F == null && H != null && (g.keys[M] = F = H, a.outbound || ne(g.values[M], a.keyPath, F))) : (H = ho(J, g.values[M]), (Z = _.fire.call(oe, H, F, J, C)) && (z = g.values[M], Object.keys(Z).forEach(function(re) {
                    S(z, re) ? z[re] = Z[re] : ne(z, re, Z[re]);
                  }))), oe;
                });
                return o.mutate(g).then(function(F) {
                  for (var M = F.failures, H = F.results, Z = F.numFailures, F = F.lastResult, z = 0; z < T.length; ++z) {
                    var J = (H || T)[z], oe = P[z];
                    J == null ? oe.onerror && oe.onerror(M[z]) : oe.onsuccess && oe.onsuccess(g.type === "put" && I[z] ? g.values[z] : J);
                  }
                  return { failures: M, results: H, numFailures: Z, lastResult: F };
                }).catch(function(F) {
                  return P.forEach(function(M) {
                    return M.onerror && M.onerror(F);
                  }), Promise.reject(F);
                });
              });
            }
          } });
        } });
      } };
      function di(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], l = 0, f = 0; l < n.keys.length && f < e.length; ++l) Ie(n.keys[l], e[f]) === 0 && (a.push(o ? Be(n.values[l]) : n.values[l]), ++f);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var Ja = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return s(s({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var l = di(a.keys, a.trans._cache, a.cache === "clone");
            return l ? ie.resolve(l) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Be(f) : f }, f;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function pi(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function hi(e, n) {
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
      var Za = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new lt(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(a, l, f) {
          if (ce.subscr && l !== "readonly") throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ce.querier));
          return e.transaction(a, l, f);
        }, table: function(a) {
          var l = e.table(a), f = l.schema, h = f.primaryKey, g = f.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && g.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), R = s(s({}, l), { mutate: function(w) {
            function x(re) {
              return re = "idb://".concat(n, "/").concat(a, "/").concat(re), F[re] || (F[re] = new lt());
            }
            var C, T, I, P = w.trans, F = w.mutatedParts || (w.mutatedParts = {}), M = x(""), H = x(":dels"), Z = w.type, oe = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [mo(h, w).filter(function(re) {
              return re;
            }), w.values] : [], z = oe[0], J = oe[1], oe = w.trans._cache;
            return p(z) ? (M.addKeys(z), (oe = Z === "delete" || z.length === J.length ? di(z, oe) : null) || H.addKeys(z), (oe || J) && (C = x, T = oe, I = J, f.indexes.forEach(function(re) {
              var ae = C(re.name || "");
              function Ce(Re) {
                return Re != null ? re.extractKey(Re) : null;
              }
              function De(Re) {
                return re.multiEntry && p(Re) ? Re.forEach(function(ze) {
                  return ae.addKey(ze);
                }) : ae.addKey(Re);
              }
              (T || I).forEach(function(Re, ut) {
                var Ne = T && Ce(T[ut]), ut = I && Ce(I[ut]);
                Ie(Ne, ut) !== 0 && (Ne != null && De(Ne), ut != null && De(ut));
              });
            }))) : z ? (J = { from: (J = z.lower) !== null && J !== void 0 ? J : e.MIN_KEY, to: (J = z.upper) !== null && J !== void 0 ? J : e.MAX_KEY }, H.add(J), M.add(J)) : (M.add(o), H.add(o), f.indexes.forEach(function(re) {
              return x(re.name).add(o);
            })), l.mutate(w).then(function(re) {
              return !z || w.type !== "add" && w.type !== "put" || (M.addKeys(re.results), _ && _.forEach(function(ae) {
                for (var Ce = w.values.map(function(Ne) {
                  return ae.extractKey(Ne);
                }), De = ae.keyPath.findIndex(function(Ne) {
                  return Ne === h.keyPath;
                }), Re = 0, ze = re.results.length; Re < ze; ++Re) Ce[Re][De] = re.results[Re];
                x(ae.name).addKeys(Ce);
              })), P.mutatedParts = vr(P.mutatedParts || {}, F), re;
            });
          } }), g = function(x) {
            var C = x.query, x = C.index, C = C.range;
            return [x, new lt((x = C.lower) !== null && x !== void 0 ? x : e.MIN_KEY, (C = C.upper) !== null && C !== void 0 ? C : e.MAX_KEY)];
          }, E = { get: function(w) {
            return [h, new lt(w.key)];
          }, getMany: function(w) {
            return [h, new lt().addKeys(w.keys)];
          }, count: g, query: g, openCursor: g };
          return u(E).forEach(function(w) {
            R[w] = function(x) {
              var C = ce.subscr, T = !!C, I = pi(ce, l) && hi(w, x) ? x.obsSet = {} : C;
              if (T) {
                var P = function(J) {
                  return J = "idb://".concat(n, "/").concat(a, "/").concat(J), I[J] || (I[J] = new lt());
                }, F = P(""), M = P(":dels"), C = E[w](x), T = C[0], C = C[1];
                if ((w === "query" && T.isPrimaryKey && !x.values ? M : P(T.name || "")).add(C), !T.isPrimaryKey) {
                  if (w !== "count") {
                    var H = w === "query" && b && x.values && l.query(s(s({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(J) {
                      if (w === "query") {
                        if (b && x.values) return H.then(function(Ce) {
                          return Ce = Ce.result, F.addKeys(Ce), J;
                        });
                        var oe = x.values ? J.result.map(v) : J.result;
                        (x.values ? F : M).addKeys(oe);
                      } else if (w === "openCursor") {
                        var re = J, ae = x.values;
                        return re && Object.create(re, { key: { get: function() {
                          return M.addKey(re.primaryKey), re.key;
                        } }, primaryKey: { get: function() {
                          var Ce = re.primaryKey;
                          return M.addKey(Ce), Ce;
                        } }, value: { get: function() {
                          return ae && F.addKey(re.primaryKey), re.value;
                        } } });
                      }
                      return J;
                    });
                  }
                  M.add(o);
                }
              }
              return l[w].apply(this, arguments);
            };
          }), R;
        } });
      } };
      function mi(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === a ? null : (n = s({}, n), p(n.keys) && (n.keys = n.keys.filter(function(l, f) {
          return !(f in o.failures);
        })), "values" in n && p(n.values) && (n.values = n.values.filter(function(l, f) {
          return !(f in o.failures);
        })), n);
      }
      function vo(e, n) {
        return o = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Ie(o, a.lower) : 0 <= Ie(o, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Ie(e, n.upper) < 0 : Ie(e, n.upper) <= 0));
        var o, a;
      }
      function vi(e, n, E, a, l, f) {
        if (!E || E.length === 0) return e;
        var h = n.query.index, v = h.multiEntry, b = n.query.range, _ = a.schema.primaryKey.extractKey, R = h.extractKey, g = (h.lowLevelIndex || h).extractKey, E = E.reduce(function(w, x) {
          var C = w, T = [];
          if (x.type === "add" || x.type === "put") for (var I = new lt(), P = x.values.length - 1; 0 <= P; --P) {
            var F, M = x.values[P], H = _(M);
            I.hasKey(H) || (F = R(M), (v && p(F) ? F.some(function(re) {
              return vo(re, b);
            }) : vo(F, b)) && (I.addKey(H), T.push(M)));
          }
          switch (x.type) {
            case "add":
              var Z = new lt().addKeys(n.values ? w.map(function(ae) {
                return _(ae);
              }) : w), C = w.concat(n.values ? T.filter(function(ae) {
                return ae = _(ae), !Z.hasKey(ae) && (Z.addKey(ae), !0);
              }) : T.map(function(ae) {
                return _(ae);
              }).filter(function(ae) {
                return !Z.hasKey(ae) && (Z.addKey(ae), !0);
              }));
              break;
            case "put":
              var z = new lt().addKeys(x.values.map(function(ae) {
                return _(ae);
              }));
              C = w.filter(function(ae) {
                return !z.hasKey(n.values ? _(ae) : ae);
              }).concat(n.values ? T : T.map(function(ae) {
                return _(ae);
              }));
              break;
            case "delete":
              var J = new lt().addKeys(x.keys);
              C = w.filter(function(ae) {
                return !J.hasKey(n.values ? _(ae) : ae);
              });
              break;
            case "deleteRange":
              var oe = x.range;
              C = w.filter(function(ae) {
                return !vo(_(ae), oe);
              });
          }
          return C;
        }, e);
        return E === e ? e : (E.sort(function(w, x) {
          return Ie(g(w), g(x)) || Ie(_(w), _(x));
        }), n.limit && n.limit < 1 / 0 && (E.length > n.limit ? E.length = n.limit : e.length === n.limit && E.length < n.limit && (l.dirty = !0)), f ? Object.freeze(E) : E);
      }
      function yi(e, n) {
        return Ie(e.lower, n.lower) === 0 && Ie(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function es(e, n) {
        return function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Ie(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return 1;
            if (f) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, a, l, f) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Ie(o, a)) === 0) {
            if (l && f) return 0;
            if (l) return -1;
            if (f) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function ts(e, n, o, a) {
        e.subscribers.add(o), a.addEventListener("abort", function() {
          var l, f;
          e.subscribers.delete(o), e.subscribers.size === 0 && (l = e, f = n, setTimeout(function() {
            l.subscribers.size === 0 && He(f, l);
          }, 3e3));
        });
      }
      var ns = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return s(s({}, e), { transaction: function(o, a, l) {
          var f, h, v = e.transaction(o, a, l);
          return a === "readwrite" && (h = (f = new AbortController()).signal, l = function(b) {
            return function() {
              if (f.abort(), a === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), R = 0, g = o; R < g.length; R++) {
                  var E = g[R], w = fn["idb://".concat(n, "/").concat(E)];
                  if (w) {
                    var x = e.table(E), C = w.optimisticOps.filter(function(ae) {
                      return ae.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var T = 0, I = Object.values(w.queries.query); T < I.length; T++) for (var P = 0, F = (Z = I[T]).slice(); P < F.length; P++) lo((z = F[P]).obsSet, v.mutatedParts) && (He(Z, z), z.subscribers.forEach(function(ae) {
                      return _.add(ae);
                    }));
                    else if (0 < C.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(ae) {
                        return ae.trans !== v;
                      });
                      for (var M = 0, H = Object.values(w.queries.query); M < H.length; M++) for (var Z, z, J, oe = 0, re = (Z = H[M]).slice(); oe < re.length; oe++) (z = re[oe]).res != null && v.mutatedParts && (b && !z.dirty ? (J = Object.isFrozen(z.res), J = vi(z.res, z.req, C, x, z, J), z.dirty ? (He(Z, z), z.subscribers.forEach(function(ae) {
                        return _.add(ae);
                      })) : J !== z.res && (z.res = J, z.promise = ie.resolve({ result: J }))) : (z.dirty && He(Z, z), z.subscribers.forEach(function(ae) {
                        return _.add(ae);
                      })));
                    }
                  }
                }
                _.forEach(function(ae) {
                  return ae();
                });
              }
            };
          }, v.addEventListener("abort", l(!1), { signal: h }), v.addEventListener("error", l(!1), { signal: h }), v.addEventListener("complete", l(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), l = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var h = ce.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(f);
            var v = fn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || mo(l, f).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && yr(f.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (He(v.optimisticOps, f), (b = mi(0, f, b)) && v.optimisticOps.push(b), f.mutatedParts && yr(f.mutatedParts));
            }), h.catch(function() {
              He(v.optimisticOps, f), f.mutatedParts && yr(f.mutatedParts);
            })) : h.then(function(b) {
              var _ = mi(0, s(s({}, f), { values: f.values.map(function(R, g) {
                var E;
                return b.failures[g] || (R = (E = l.keyPath) !== null && E !== void 0 && E.includes(".") ? Be(R) : s({}, R), ne(R, l.keyPath, b.results[g])), R;
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return f.mutatedParts && yr(f.mutatedParts);
              });
            }), h) : a.mutate(f);
          }, query: function(f) {
            if (!pi(ce, a) || !hi("query", f)) return a.query(f);
            var h = ((_ = ce.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", g = ce, v = g.requery, b = g.signal, _ = function(x, C, T, I) {
              var P = fn["idb://".concat(x, "/").concat(C)];
              if (!P) return [];
              if (!(C = P.queries[T])) return [null, !1, P, null];
              var F = C[(I.query ? I.query.index.name : null) || ""];
              if (!F) return [null, !1, P, null];
              switch (T) {
                case "query":
                  var M = F.find(function(H) {
                    return H.req.limit === I.limit && H.req.values === I.values && yi(H.req.query.range, I.query.range);
                  });
                  return M ? [M, !0, P, F] : [F.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= I.limit && (!I.values || H.req.values) && es(H.req.query.range, I.query.range);
                  }), !1, P, F];
                case "count":
                  return M = F.find(function(H) {
                    return yi(H.req.query.range, I.query.range);
                  }), [M, !!M, P, F];
              }
            }(n, o, "query", f), R = _[0], g = _[1], E = _[2], w = _[3];
            return R && g ? R.obsSet = f.obsSet : (g = a.query(f).then(function(x) {
              var C = x.result;
              if (R && (R.res = C), h) {
                for (var T = 0, I = C.length; T < I; ++T) Object.freeze(C[T]);
                Object.freeze(C);
              } else x.result = Be(C);
              return x;
            }).catch(function(x) {
              return w && R && He(w, R), Promise.reject(x);
            }), R = { obsSet: f.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(R) : (w = [R], (E = E || (fn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), ts(R, w, v, b), R.promise.then(function(x) {
              return { result: vi(x.result, f, E?.optimisticOps, a, R, h) };
            });
          } });
        } });
      } };
      function br(e, n) {
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
        return o || (o = new this.Version(e), n.push(o), n.sort(Wa), o.stores({}), this._state.autoSchema = !1, o);
      }, Ze.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || ce.letThrough || this._vip) ? e() : new ie(function(o, a) {
          if (n._state.openComplete) return a(new q.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new q.DatabaseClosed());
            n.open().catch(A);
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
          return Xa(e);
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
        e.isBeingOpened || (e.dbReadyPromise = new ie(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ie(function(o, a) {
          e.cancelOpen = a;
        }));
      }, Ze.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new q.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new q.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ze.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ie(function(l, f) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = We(function() {
              var b, _, R;
              b = n._deps, _ = n.name, R = b.indexedDB, b = b.IDBKeyRange, io(R) || _ === or || oo(R, b).delete(_).catch(A), l();
            }), v.onerror = Lt(f), v.onblocked = n._fireOnBlocked;
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
        return u(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Ze.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var l = arguments.length;
          if (l < 2) throw new q.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return a = f.pop(), [n, ve(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ze.prototype._transaction = function(e, n, o) {
        var a = this, l = ce.trans;
        l && l.db === this && e.indexOf("!") === -1 || (l = null);
        var f, h, v = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (h = n.map(function(_) {
            if (_ = _ instanceof a.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), e == "r" || e === Hr) f = Hr;
          else {
            if (e != "rw" && e != Yr) throw new q.InvalidArgument("Invalid transaction mode: " + e);
            f = Yr;
          }
          if (l) {
            if (l.mode === Hr && f === Yr) {
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
          return ie.resolve().then(function() {
            var C = ce.transless || ce, T = R._createTransaction(g, E, R._dbSchema, w);
            if (T.explicit = !0, C = { trans: T, transless: C }, w) T.idbtrans = w.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3;
            } catch (F) {
              return F.name === D.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                return _(R, g, E, null, x);
              })) : Je(F);
            }
            var I, P = It(x);
            return P && xn(), C = ie.follow(function() {
              var F;
              (I = x.call(T, T)) && (P ? (F = Gt.bind(null, null), I.then(F, F)) : typeof I.next == "function" && typeof I.throw == "function" && (I = po(I)));
            }, C), (I && typeof I.then == "function" ? ie.resolve(I).then(function(F) {
              return T.active ? F : Je(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : C.then(function() {
              return I;
            })).then(function(F) {
              return w && T._resolve(), T._completion.then(function() {
                return F;
              });
            }).catch(function(F) {
              return T._reject(F), Je(F);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, b, "lock") : ce.trans ? ln(ce.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Ze.prototype.table = function(e) {
        if (!S(this._allTables, e)) throw new q.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ze);
      function Ze(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Ze.dependencies;
        this._options = n = s({ addons: Ze.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new ie(function(g) {
          _.dbReadyResolve = g;
        }), _.openCanceller = new ie(function(g, E) {
          _.cancelOpen = E;
        }), this._state = _, this.name = e, this.on = Pn(this, "populate", "blocked", "versionchange", "close", { ready: [xe, A] }), this.once = function(g, E) {
          var w = function() {
            for (var x = [], C = 0; C < arguments.length; C++) x[C] = arguments[C];
            o.on(g).unsubscribe(w), E.apply(o, x);
          };
          return o.on(g, w);
        }, this.on.ready.subscribe = B(this.on.ready.subscribe, function(g) {
          return function(E, w) {
            Ze.vip(function() {
              var x, C = o._state;
              C.openComplete ? (C.dbOpenError || ie.resolve().then(E), w && g(E)) : C.onReadyBeingFired ? (C.onReadyBeingFired.push(E), w && g(E)) : (g(E), x = o, w || g(function T() {
                x.on.ready.unsubscribe(E), x.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (l = this, Ln(Ma.prototype, function(I, T) {
          this.db = l;
          var w = Ho, x = null;
          if (T) try {
            w = T();
          } catch (P) {
            x = P;
          }
          var C = I._ctx, T = C.table, I = T.hook.reading.fire;
          this._ctx = { table: T, index: C.index, isPrimKey: !C.index || T.schema.primKey.keyPath && C.index === T.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: C.or, valueMapper: I !== U ? I : null };
        })), this.Table = (f = this, Ln(Qo.prototype, function(g, E, w) {
          this.db = f, this._tx = w, this.name = g, this.schema = E, this.hook = f._allTables[g] ? f._allTables[g].hook : Pn(null, { creating: [ge, A], reading: [se, U], updating: [Te, A], deleting: [he, A] });
        })), this.Transaction = (h = this, Ln(Ka.prototype, function(g, E, w, x, C) {
          var T = this;
          g !== "readonly" && E.forEach(function(I) {
            I = (I = w[I]) === null || I === void 0 ? void 0 : I.yProps, I && (E = E.concat(I.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = E, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Pn(this, "complete", "error", "abort"), this.parent = C || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ie(function(I, P) {
            T._resolve = I, T._reject = P;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(I) {
            var P = T.active;
            return T.active = !1, T.on.error.fire(I), T.parent ? T.parent._reject(I) : P && T.idbtrans && T.idbtrans.abort(), Je(I);
          });
        })), this.Version = (v = this, Ln(Ya.prototype, function(g) {
          this.db = v, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(ri.prototype, function(g, E, w) {
          if (this.db = b, this._ctx = { table: g, index: E === ":id" ? null : E, or: w }, this._cmp = this._ascending = Ie, this._descending = function(x, C) {
            return Ie(C, x);
          }, this._max = function(x, C) {
            return 0 < Ie(x, C) ? x : C;
          }, this._min = function(x, C) {
            return Ie(x, C) < 0 ? x : C;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Mn(n.IDBKeyRange), this._createTransaction = function(g, E, w, x) {
          return new o.Transaction(g, E, w, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(g) {
          o.on("blocked").fire(g), Nn.filter(function(E) {
            return E.name === o.name && E !== o && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(g);
          });
        }, this.use(Ja), this.use(ns), this.use(Za), this.use(za), this.use(Qa);
        var R = new Proxy(this, { get: function(g, E, w) {
          if (E === "_vip") return !0;
          if (E === "table") return function(C) {
            return br(o.table(C), R);
          };
          var x = Reflect.get(g, E, w);
          return x instanceof Qo ? br(x, R) : E === "tables" ? x.map(function(C) {
            return br(C, R);
          }) : E === "_createTransaction" ? function() {
            return br(x.apply(this, arguments), R);
          } : x;
        } });
        this.vip = R, a.forEach(function(g) {
          return g(o);
        });
      }
      var wr, Tt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", rs = (yo.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, yo.prototype[Tt] = function() {
        return this;
      }, yo);
      function yo(e) {
        this._subscribe = e;
      }
      try {
        wr = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        wr = { indexedDB: null, IDBKeyRange: null };
      }
      function gi(e) {
        var n, o = !1, a = new rs(function(l) {
          var f = It(e), h, v = !1, b = {}, _ = {}, R = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), g && Xt.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(R);
          var g = !1, E = function() {
            return Gr(x);
          }, w = function(C) {
            vr(b, C), lo(_, b) && E();
          }, x = function() {
            var C, T, I;
            !v && wr.indexedDB && (b = {}, C = {}, h && h.abort(), h = new AbortController(), I = function(P) {
              var F = wn();
              try {
                f && xn();
                var M = Wt(e, P);
                return M = f ? M.finally(Gt) : M;
              } finally {
                F && _n();
              }
            }(T = { subscr: C, signal: h.signal, requery: E, querier: e, trans: null }), Promise.resolve(I).then(function(P) {
              o = !0, n = P, v || T.signal.aborted || (b = {}, function(F) {
                for (var M in F) if (S(F, M)) return;
                return 1;
              }(_ = C) || g || (Xt(Fn, w), g = !0), Gr(function() {
                return !v && l.next && l.next(P);
              }));
            }, function(P) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || v || Gr(function() {
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
      function go(e) {
        var n = zt;
        try {
          zt = !0, Xt.storagemutated.fire(e), fo(e, !0);
        } finally {
          zt = n;
        }
      }
      L(dn, s(s({}, nt), { delete: function(e) {
        return new dn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new dn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = dn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== or;
            });
          }) : oo(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return Je(new q.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          m(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ce.trans ? ln(ce.transless, e) : e();
      }, vip: ao, async: function(e) {
        return function() {
          try {
            var n = po(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ie.resolve(n);
          } catch (o) {
            return Je(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = po(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : ie.resolve(a);
        } catch (l) {
          return Je(l);
        }
      }, currentTransaction: { get: function() {
        return ce.trans || null;
      } }, waitFor: function(e, n) {
        return n = ie.resolve(typeof e == "function" ? dn.ignoreTransaction(e) : e).timeout(n || 6e4), ce.trans ? ce.trans.waitFor(n) : n;
      }, Promise: ie, debug: { get: function() {
        return me;
      }, set: function(e) {
        Le(e);
      } }, derive: W, extend: m, props: L, override: B, Events: Pn, on: Xt, liveQuery: gi, extendObservabilitySet: vr, getByKeyPath: te, setByKeyPath: ne, delByKeyPath: function(e, n) {
        typeof n == "string" ? ne(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          ne(e, o, void 0);
        });
      }, shallowClone: pe, deepClone: Be, getObjectDiff: ho, cmp: Ie, asap: fe, minKey: -1 / 0, addons: [], connections: Nn, errnames: D, dependencies: wr, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), dn.maxKey = Mn(dn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xt(Fn, function(e) {
        zt || (e = new CustomEvent(Qr, { detail: e }), zt = !0, dispatchEvent(e), zt = !1);
      }), addEventListener(Qr, function(e) {
        e = e.detail, zt || go(e);
      }));
      var On, zt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (On = new BroadcastChannel(Qr)).onmessage = function(e) {
          return e.data && go(e.data);
        };
      })(), typeof On.unref == "function" && On.unref(), Xt(Fn, function(e) {
        zt || On.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!$t.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), On?.close();
          for (var n = 0, o = Nn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !$t.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), bi(), go({ all: new lt(-1 / 0, [[]]) }));
      })), ie.rejectionMapper = function(e, n) {
        return !e || e instanceof qt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (n = new Q[e.name](n || e.message, e), "stack" in e && X(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, Le(me), s($t, Object.freeze({ __proto__: null, Dexie: $t, liveQuery: gi, Entity: Yo, cmp: Ie, PropModification: kn, replacePrefix: function(e, n) {
        return new kn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new kn({ add: e });
      }, remove: function(e) {
        return new kn({ remove: e });
      }, default: $t, RangeSet: lt, mergeRanges: Kn, rangesOverlap: li }), { default: $t }), $t;
    });
  }(Ss)), Ss.exports;
}
var _p = wp();
const Ps = /* @__PURE__ */ hp(_p), tu = Symbol.for("Dexie"), Ls = globalThis[tu] || (globalThis[tu] = Ps);
if (Ps.semVer !== Ls.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ps.semVer} and ${Ls.semVer}`);
const {
  liveQuery: Og,
  mergeRanges: Ig,
  rangesOverlap: Ag,
  RangeSet: Dg,
  cmp: Sg,
  Entity: Pg,
  PropModification: Lg,
  replacePrefix: kg,
  add: jg,
  remove: Fg,
  DexieYProvider: Mg
} = Ls;
function il(t) {
  return {
    addRecord: r,
    updateRecord: i,
    findChildRecords: d,
    findChildRecordsByTagName: u,
    findChildRecordsWithinDepthAndGivenTagName: p,
    ensureRelationship: s,
    removeRelationship: c,
    findParentRecordsWithinDepthAndGivenTagName: m,
    findRecord: k,
    db: t
  };
  async function r(S) {
    const L = { ...S, id: crypto.randomUUID() };
    try {
      return await t.table(ke).add(L), L;
    } catch (Y) {
      const X = {
        msg: "could not add record",
        db: t.name,
        newRecord: L,
        err: Y
      };
      throw console.error(X), new Error(JSON.stringify(X));
    }
  }
  async function i(S) {
    try {
      if (await t.table(ke).update(S.id, S) < 1) {
        const Y = { msg: "nothing has been updated", record: S };
        throw console.error(Y), new Error(JSON.stringify(Y));
      }
    } catch (L) {
      console.error(L);
    }
  }
  async function s(S, L) {
    const Y = S.children?.some((W) => W.id === L.id), X = L.parent?.id === S.id;
    if (Y || (S.children.push({ id: L.id, tagName: L.tagName }), await i(S)), !X) {
      const W = {
        id: S.id,
        tagName: S.tagName
      };
      L.parent = W, await i(L);
    }
  }
  async function c(S, L) {
    L.parent = null, await i(L), S.children && (S.children = S.children.filter((Y) => Y.id !== L.id), await i(S));
  }
  async function d(S, L) {
    if (!S.children?.length)
      return [];
    let Y = (await t.table(ke).bulkGet(S.children.map((X) => X.id))).filter(Boolean);
    return L?.tagNames && L.tagNames.length > 0 && (Y = Y.filter((X) => L?.tagNames?.includes(X.tagName))), L?.attrs && L.attrs.length > 0 && (Y = Y.filter(
      (X) => L.attrs.every(
        (W) => X.attributes.some(
          (G) => G.name === W.name && G.value === W.value
        )
      )
    )), Y;
  }
  async function u(S, L) {
    return (await d(S)).filter((X) => L.includes(X.tagName));
  }
  async function p(S, L, Y) {
    const X = [];
    let W = [S];
    for (let G = 0; G < L; G++) {
      const V = [];
      if (W.length === 0)
        break;
      for (const $ of W) {
        const B = await d($);
        B.length !== 0 && (V.push(...B), X.push(...B.filter((ee) => Y.includes(ee.tagName))));
      }
      W = [...V];
    }
    return X;
  }
  async function m(S, L, Y = []) {
    const X = [];
    let W = S;
    for (let G = 0; G < L; G++) {
      if (!W.parent)
        return X;
      const V = await t.table(ke).get(W.parent.id);
      if (!V)
        break;
      (Y.length == 0 || Y.length > 0 && Y.includes(V.tagName)) && X.push(V), W = V;
    }
    return X;
  }
  async function k(S) {
    const [L] = await O(S);
    return L;
  }
  async function O(S) {
    try {
      const L = t.table(ke);
      let Y = S.tagNames && S.tagNames.length > 0 ? L.where("tagName").anyOf(S.tagNames) : L.toCollection();
      return S.parent && (Y = Y.filter((W) => W.parent?.id === S.parent?.id)), S.attr && (Y = Y.filter((W) => W.attributes?.some(
        (V) => V.name === S.attr.name && V.value === S.attr.value
      ))), await Y.toArray();
    } catch (L) {
      return console.error({ msg: "could not find records by options", options: S, err: L }), [];
    }
  }
}
function K(t, r) {
  return t?.attributes?.find((i) => i.name === r)?.value;
}
function Ae(t, r) {
  if (t) return;
  const i = "Invariant failed", s = r ? `${i}: ${r}` : i;
  throw console.error(s), new Error("Unexpected Error!");
}
const tn = {
  prefix: "eIEC61850-6-100",
  uri: "http://www.iec.ch/61850/2019/SCL/6-100"
}, wc = { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" };
function xp(t) {
  const r = il(t), i = St();
  return {
    createControlledConnection: c,
    createConnection: s,
    createSourcePlaceholder: u,
    createDestinationPlaceholder: d,
    calculateNextInputInstance: p,
    calculateNextOutputInstance: m,
    findExistingInputs: k,
    findExistingOutputs: O,
    findMatchingExtRef: S,
    implementDataflow: L,
    findExtRefByUuid: Y,
    findControlBlock: X,
    findDataSet: W,
    findPathToLnode: V,
    findPathToExtRef: G,
    findGseControlBlockDetails: $,
    findSmvControlBlockDetails: B,
    findReportControlBlockDetails: ee,
    findLnodeFunction: fe
  };
  async function s(te, ne, pe, j) {
    const ve = await Xi(r, pe), be = await Fp(
      r,
      ne,
      ve,
      te
    );
    await Mp(r, ne, te), j && (await ru(
      r,
      pe,
      be
    ), await zi(
      r,
      ne,
      pe,
      te.type,
      te.signal,
      te.attribute
    ), te.includeQuality && await zi(
      r,
      ne,
      pe,
      te.type,
      te.signal,
      "q"
    ), te.includeTimestamp && await zi(
      r,
      ne,
      pe,
      te.type,
      te.signal,
      "t"
    )), await i.refreshConnections(), await i.refreshLNode(ne.id), await i.refreshPlaceholders();
  }
  async function c(te, ne, pe, j) {
    const ve = await hs(r, ne), be = Yp(
      te,
      pe
    ), we = await $p(r, be);
    if (await r.ensureRelationship(ve, we), !pe.dataObjectSpecifications?.find(
      (vt) => vt.name === te.controlledSignal
    )) {
      const Fe = St().lnodeTypes.find(
        (st) => st.lnClass === pe.lnClass
      )?.dataObjects.find(
        (st) => st.name === te.controlledSignal
      );
      let _e = await $i(
        r,
        pe,
        tn.prefix
      );
      const He = {
        name: te.controlledSignal,
        desc: Fe?.desc || ""
      }, Xe = await ks(r, He);
      await r.ensureRelationship(_e, Xe);
    }
    j && (await qp(r, ne, we), await zi(
      r,
      ne,
      pe,
      te.type,
      te.controlledSignal
    )), await i.refreshConnections(), await i.refreshLNode(pe.id);
  }
  async function d(te, ne, pe) {
    const j = await Xi(r, ne), ve = await oa(
      r,
      Xp(te)
    );
    await r.ensureRelationship(j, ve), pe && await ru(r, ne, [
      ve
    ]), await i.refreshConnections();
  }
  async function u(te, ne, pe) {
    let j = [{ name: "inputName", value: ne.inputName }];
    ne.preferredLNode && j.push({ name: "pLN", value: ne.preferredLNode }), ne.dataflowType && j.push({ name: "service", value: ne.dataflowType }), ne.processResource && j.push({ name: "resourceName", value: ne.processResource });
    const ve = te.dataObjectSpecifications?.find(
      (Xe) => Xe.name === ne.dataObject
    ), be = ve?.dataAttributeSpecifications.find(
      (Xe) => Xe.name === ne.dataAttribute
    ), we = St(), vt = we.lnodeTypes.find((Xe) => Xe.lnClass === te.lnClass)?.dataObjects.find((Xe) => Xe.name === ne.dataObject), Rt = vt?.dataAttributes.find((Xe) => Xe.name === ne.dataAttribute);
    let Fe, _e;
    if (ve)
      Fe = await r.db.table(ke).get(ve.id);
    else {
      const Xe = await $i(
        r,
        te,
        tn.prefix
      ), st = {
        name: ne.dataObject,
        desc: vt?.desc || ""
      };
      Fe = await ks(r, st), await r.ensureRelationship(Xe, Fe);
    }
    if (!Fe) {
      const Xe = "DOS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(Xe));
    }
    if (be)
      _e = await r.db.table(ke).get(be.id);
    else {
      const Xe = {
        name: ne.dataAttribute,
        desc: Rt?.desc || ""
      };
      _e = await Tc(
        r,
        Xe
      ), await r.ensureRelationship(Fe, _e);
    }
    if (!_e) {
      const Xe = "DAS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(Xe));
    }
    const He = await r.addRecord({
      tagName: "SubscriberLNode",
      attributes: j,
      parent: null,
      namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
      value: "",
      children: []
    });
    await r.ensureRelationship(_e, He), pe && await Up(
      r,
      te,
      ne.dataObject,
      ne.dataAttribute,
      ne.dataflowType || void 0
    ), await we.refreshLNode(te.id), await we.refreshPlaceholders();
  }
  async function p(te, ne, pe) {
    const j = await Xi(r, pe), we = (await r.findChildRecordsByTagName(j, [
      "SourceRef"
    ])).map((Be) => ({
      input: K(Be, "input"),
      pDA: K(Be, "pDA")
    })).filter(
      (Be) => Be.input === te && Be.pDA === ne
    );
    return we.length === 0 ? 1 : we.length + 1;
  }
  async function m(te, ne) {
    const pe = await hs(r, ne), be = (await r.findChildRecordsByTagName(pe, [
      "ControlRef"
    ])).map((we) => K(we, "output")).filter((we) => !!we).filter(
      (we) => we === te
    );
    return be.length === 0 ? 1 : be.length + 1;
  }
  async function k(te) {
    const ne = await Xi(r, te), j = (await r.findChildRecordsByTagName(ne, [
      "SourceRef"
    ])).map((be) => K(be, "input")).filter((be) => !!be);
    return Array.from(new Set(j));
  }
  async function O(te) {
    const ne = await hs(r, te), j = (await r.findChildRecordsByTagName(ne, [
      "ControlRef"
    ])).map((be) => K(be, "output")).filter((be) => !!be);
    return Array.from(new Set(j));
  }
  async function S(te) {
    const ne = await r.db.table(ke).get(te.id);
    Ae(ne, "SourceRef record not found");
    const pe = K(ne, "extRefUuid");
    let j;
    if (pe) {
      if (j = await r.db.table(ke).where({ tagName: "ExtRef" }).and((ve) => K(ve, "uuid") === pe).first(), !j)
        throw new Error(`ExtRef with uuid ${pe} not found`);
    } else {
      const ve = await kp(r, te);
      if (!ve)
        return null;
      j = ve;
    }
    return ou(j);
  }
  async function L(te, ne) {
    if (Ae(
      te.sourceLNodeId && te.destinationLNodeId,
      "Connection must have both source and destination LNode IDs to implement"
    ), Ae(te.dataflowType, "Connection must have a dataflow type to implement"), ne.srcCbName)
      throw new Error("Dataflow is already implemented (srcCBName exists in ExtRef)");
    if (![tt.GOOSE, tt.REPORT, tt.SMV].includes(te.dataflowType))
      throw new Error(
        `Dataflow type ${te.dataflowType} is not supported for automatic implementation`
      );
    const j = await r.db.table(ke).get(te.sourceLNodeId);
    Ae(j, "Sending LNode record not found");
    const ve = await r.db.table(ke).get(te.destinationLNodeId);
    Ae(ve, "Receiving LNode record not found");
    const be = await ll(
      r,
      te.sourceLNodeId
    );
    Ae(be, "LDevice of sending LNode not found");
    const we = (await r.findChildRecords(be, { tagNames: ["LN0"] }))[0];
    Ae(we, "LN0 record not found for LDevice");
    const Be = await Op(
      r,
      te,
      j,
      ve,
      be,
      we
    ), vt = await Ep(
      r,
      te.dataflowType,
      K(Be, "name") || "",
      we
    );
    Qt(
      Be,
      "datSet",
      K(vt, "name") || ""
    ), await r.updateRecord(Be), await Cp(
      r,
      te,
      j,
      vt
    ), await Np(
      r,
      te.dataflowType,
      be,
      Be
    ), await Pp(
      r,
      te,
      ne,
      K(Be, "name") || ""
    ), await Lp(
      r,
      te,
      ve,
      ne
    ), await i.refreshConnections();
  }
  async function Y(te) {
    const ne = await r.findRecord({
      tagNames: ["ExtRef"],
      attr: { name: "uuid", value: te }
    });
    return Ae(ne, `ExtRef record not found for uuid: ${te}`), ou(ne);
  }
  async function X(te, ne, pe) {
    const j = await r.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: te }
    });
    Ae(j, "IED record not found");
    const ve = await r.findChildRecordsWithinDepthAndGivenTagName(j, 3, ["LDevice"]).then((Be) => Be.find((vt) => K(vt, "inst") === ne));
    Ae(ve, "LDevice record not found");
    const [be] = await r.findChildRecordsByTagName(ve, ["LN0"]);
    Ae(be, "LN0 record not found for LDevice");
    const [we] = await r.findChildRecords(be, {
      tagNames: ["GSEControl", "SampledValueControl", "ReportControl"],
      attrs: [{ name: "name", value: pe }]
    });
    return Ae(we, "Control Block record not found"), Gp(we);
  }
  async function W(te, ne, pe) {
    const j = await r.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: te }
    });
    Ae(j, "IED record not found");
    const ve = await r.findChildRecordsWithinDepthAndGivenTagName(j, 3, ["LDevice"]).then((Be) => Be.find((vt) => K(vt, "inst") === ne));
    Ae(ve, "LDevice record not found");
    const [be] = await r.findChildRecordsByTagName(ve, ["LN0"]);
    Ae(be, "LN0 record not found for LDevice");
    const [we] = await r.findChildRecords(be, {
      tagNames: ["DataSet"],
      attrs: [{ name: "name", value: pe }]
    });
    return Ae(we, "DataSet record not found"), Hp(we);
  }
  async function G(te) {
    const ne = await r.db.table(ke).get(te);
    Ae(ne, "ExtRef record not found");
    let pe = K(ne, "intAddr") || "";
    const j = ["LN", "LDevice", "IED"];
    let ve = ne;
    for (; ve.parent; ) {
      const be = await r.db.table(ke).get(ve.parent.id);
      if (Ae(be, "Parent record not found"), j.includes(be.tagName)) {
        let we = "";
        be.tagName === "LN" ? we = `${K(be, "prefix")}${K(be, "lnClass")}${K(be, "inst")}` : be.tagName === "LDevice" ? we = K(be, "inst") || "" : we = K(be, "name") || "", pe = `${we}/${pe}`;
      }
      ve = be;
    }
    return pe;
  }
  async function V(te) {
    const ne = await r.db.table(ke).get(te);
    Ae(ne, "LNode record not found");
    let j = `${K(ne, "prefix")}${K(ne, "lnClass")}${K(ne, "lnInst")}`;
    const ve = ["SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
    let be = ne;
    for (; be.parent; ) {
      const we = await r.db.table(ke).get(be.parent.id);
      Ae(we, "Parent record not found"), ve.includes(we.tagName) && (j = `${K(we, "name")}/${j}`), be = we;
    }
    return j;
  }
  async function $(te, ne) {
    const pe = await r.db.table(ke).get(te);
    Ae(pe, "Control Block record not found");
    const j = await r.db.table(ke).where({ tagName: "GSE" }).and(
      (_e) => K(_e, "cbName") === K(pe, "name") && K(_e, "ldInst") === ne
    ).first();
    Ae(j, "GSE Communication record not found for Control Block");
    const [ve] = await r.findChildRecordsByTagName(j, [
      "MinTime"
    ]), [be] = await r.findChildRecordsByTagName(j, [
      "MaxTime"
    ]), we = await r.findChildRecordsWithinDepthAndGivenTagName(
      j,
      2,
      ["P"]
    ), Be = we.find(
      (_e) => K(_e, "type") === "VLAN-ID" || K(_e, "type") === "tP_VLAN-ID"
    ), vt = we.find(
      (_e) => K(_e, "type") === "VLAN-PRIORITY" || K(_e, "type") === "tP_VLAN-PRIORITY"
    ), Rt = we.find(
      (_e) => K(_e, "type") === "MAC-Address" || K(_e, "type") === "tP_MAC-Address"
    ), Fe = we.find(
      (_e) => K(_e, "type") === "APPID" || K(_e, "type") === "tP_APPID"
    );
    return {
      appId: K(pe, "appID") || "",
      communicationDetails: {
        macAddress: Rt?.value || "",
        appId: Fe?.value || "",
        vlanId: Be?.value || "",
        vlanPriority: vt?.value || "",
        minTime: ve?.value || "",
        maxTime: be?.value || ""
      }
    };
  }
  async function B(te, ne) {
    const pe = await r.db.table(ke).get(te);
    Ae(pe, "Control Block record not found");
    const [j] = await r.findChildRecordsByTagName(pe, [
      "SmvOpts"
    ]);
    Ae(j, "SmvOpts record not found for Control Block");
    const ve = await r.db.table(ke).where({ tagName: "SMV" }).and(
      (Fe) => K(Fe, "cbName") === K(pe, "name") && K(Fe, "ldInst") === ne
    ).first();
    Ae(ve, "SMV Communication record not found for Control Block");
    const be = await r.findChildRecordsWithinDepthAndGivenTagName(
      ve,
      2,
      ["P"]
    ), we = be.find(
      (Fe) => K(Fe, "type") === "VLAN-ID" || K(Fe, "type") === "tP_VLAN-ID"
    ), Be = be.find(
      (Fe) => K(Fe, "type") === "VLAN-PRIORITY" || K(Fe, "type") === "tP_VLAN-PRIORITY"
    ), vt = be.find(
      (Fe) => K(Fe, "type") === "MAC-Address" || K(Fe, "type") === "tP_MAC-Address"
    ), Rt = be.find(
      (Fe) => K(Fe, "type") === "APPID" || K(Fe, "type") === "tP_APPID"
    );
    return {
      smvId: K(pe, "smvID") || "",
      multicast: K(pe, "multicast") || "",
      nofAsdu: K(pe, "nofASDU") || "",
      smpMod: K(pe, "smpMod") || "",
      smpRate: K(pe, "smpRate") || "",
      communicationDetails: {
        macAddress: vt?.value || "",
        appId: Rt?.value || "",
        vlanId: we?.value || "",
        vlanPriority: Be?.value || ""
      },
      smvOpts: {
        refreshTime: K(j, "refreshTime") || "",
        sampleSynchronized: K(j, "sampleSynchronized") || "",
        sampleRate: K(j, "sampleRate") || "",
        dataSet: K(j, "dataSet") || "",
        security: K(j, "security") || "",
        synchSourceId: K(j, "synchSourceId") || ""
      }
    };
  }
  async function ee(te) {
    const ne = await r.db.table(ke).get(te);
    Ae(ne, "Control Block record not found");
    const [pe] = await r.findChildRecordsByTagName(ne, [
      "TrgOps"
    ]);
    Ae(pe, "TrgOps record not found for Control Block");
    const [j] = await r.findChildRecordsByTagName(ne, [
      "OptFields"
    ]);
    return Ae(j, "OptFields record not found for Control Block"), {
      rptId: K(ne, "rptID") || "",
      buffered: K(ne, "buffered") || "",
      trgOps: {
        dchg: K(pe, "dchg") || "",
        dupd: K(pe, "dupd") || "",
        gi: K(pe, "gi") || "",
        period: K(pe, "period") || "",
        qchg: K(pe, "qchg") || ""
      },
      optFields: {
        bufOvfl: K(j, "bufOvfl") || "",
        configRef: K(j, "configRef") || "",
        dataRef: K(j, "dataRef") || "",
        dataSet: K(j, "dataSet") || "",
        entryId: K(j, "entryID") || "",
        reasonCode: K(j, "reasonCode") || "",
        seqNum: K(j, "seqNum") || "",
        timeStamp: K(j, "timeStamp") || ""
      }
    };
  }
  async function fe(te) {
    const ne = await r.db.table(ke).get(te);
    Ae(ne, "LNode record not found"), Ae(ne.parent, "LNode has no parent");
    const pe = await r.db.table(ke).get(ne.parent.id);
    return Ae(pe, "Function record not found for LNode"), K(pe, "name") ?? "";
  }
}
async function Np(t, r, i, s) {
  const c = await t.db.table(ke).where({ tagName: "Communication" }).first();
  Ae(c, "Communication record not found in SCL");
  const d = await t.findChildRecordsWithinDepthAndGivenTagName(
    c,
    2,
    ["ConnectedAP"]
  ), [u] = await t.findParentRecordsWithinDepthAndGivenTagName(
    s,
    4,
    ["AccessPoint"]
  );
  Ae(u, "AccessPoint record not found"), Ae(u.parent, "AccessPoint has no parent");
  const p = await t.db.table(ke).get(u.parent.id);
  Ae(p, "IED record not found");
  const m = d.find(
    (O) => K(O, "iedName") === K(p, "name") && K(O, "apName") === K(u, "name")
  );
  Ae(m, "ConnectedAP record for sending IED not found");
  const k = K(s, "name") || "";
  r === tt.GOOSE && await Tp(
    t,
    i,
    k,
    m
  ), r === tt.SMV && await Rp(
    t,
    i,
    k,
    m
  );
}
async function Rp(t, r, i, s) {
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
  const d = await t.db.table(ke).where({ tagName: "SMV" }).toArray(), u = await t.addRecord({
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
  await t.ensureRelationship(s, u);
  const p = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(u, p);
  const m = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-ID",
        namespace: wc
      },
      { name: "type", value: "VLAN-ID" }
    ],
    parent: null,
    namespace: xt.default,
    value: "000",
    children: []
  });
  await t.ensureRelationship(p, m);
  const k = await t.addRecord({
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
  await t.ensureRelationship(p, k);
  const O = [], S = [];
  for (const G of d) {
    const V = await t.findChildRecords(G, {
      tagNames: ["Address"]
    });
    Ae(V[0], "Address record not found in SMV communication");
    const $ = await t.findChildRecords(V[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "MAC-Address" }]
    });
    if ($[0]) {
      const ee = $[0].value;
      O.push(ee);
    }
    const B = await t.findChildRecords(V[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "APPID" }]
    });
    if (B[0]) {
      const ee = B[0].value;
      S.push(ee);
    }
  }
  const L = _c(
    262144,
    262655,
    O
  ), Y = await t.addRecord({
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
    value: L,
    children: []
  });
  await t.ensureRelationship(p, Y);
  const X = xc(16384, 32767, S), W = await t.addRecord({
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
    value: X,
    children: []
  });
  await t.ensureRelationship(p, W);
}
async function Tp(t, r, i, s) {
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
  const d = await t.db.table(ke).where({ tagName: "GSE" }).toArray(), u = await t.addRecord({
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
  await t.ensureRelationship(s, u);
  const p = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(u, p);
  const m = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-ID",
        namespace: wc
      },
      { name: "type", value: "VLAN-ID" }
    ],
    parent: null,
    namespace: xt.default,
    value: "000",
    children: []
  });
  await t.ensureRelationship(p, m);
  const k = await t.addRecord({
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
  await t.ensureRelationship(p, k);
  const O = [], S = [];
  for (const $ of d) {
    const B = await t.findChildRecords($, {
      tagNames: ["Address"]
    });
    Ae(B[0], "Address record not found in SMV communication");
    const ee = await t.findChildRecords(B[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "MAC-Address" }]
    });
    if (ee[0]) {
      const te = ee[0].value;
      O.push(te);
    }
    const fe = await t.findChildRecords(B[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "APPID" }]
    });
    if (fe[0]) {
      const te = fe[0].value;
      S.push(te);
    }
  }
  const L = _c(
    65536,
    66047,
    O
  ), Y = await t.addRecord({
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
    value: L,
    children: []
  });
  await t.ensureRelationship(p, Y);
  const X = xc(1, 16383, S), W = await t.addRecord({
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
    value: X,
    children: []
  });
  await t.ensureRelationship(p, W);
  const G = await t.addRecord({
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
  await t.ensureRelationship(u, G);
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
  await t.ensureRelationship(u, V);
}
function _c(t, r, i) {
  const s = "01-0C-CD";
  for (let c = t; c <= r; c++) {
    const d = c.toString(16).toUpperCase().padStart(6, "0"), u = `${d.slice(0, 2)}-${d.slice(2, 4)}-${d.slice(4, 6)}`, p = s + "-" + u;
    if (!i.includes(p))
      return p;
  }
  throw new Error("No available MAC Address found in the specified range");
}
function xc(t, r, i) {
  for (let s = t; s <= r; s++) {
    const c = s.toString(16).toUpperCase().padStart(4, "0");
    if (!i.includes(c))
      return c;
  }
  throw new Error("No available APPID found in the specified range");
}
async function Cp(t, r, i, s) {
  const p = St().lnodeTypes.find(
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
  const k = await t.addRecord({
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
  return await t.ensureRelationship(s, k), k;
}
async function Ep(t, r, i, s) {
  let c;
  if (r === tt.SMV) {
    const p = i.slice(i.length - 2);
    c = "PhsMeas" + parseInt(p, 10);
  } else
    c = i + "_DS";
  const d = (await t.findChildRecords(s, {
    tagNames: ["DataSet"],
    attrs: [{ name: "name", value: c }]
  }))[0];
  if (d)
    return d;
  const u = await t.addRecord({
    tagName: "DataSet",
    attributes: [{ name: "name", value: c }],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, u), u;
}
async function Op(t, r, i, s, c, d) {
  const u = (await t.findParentRecordsWithinDepthAndGivenTagName(i, 1 / 0, [
    "Function"
  ]))[0];
  Ae(u, "Parent Function of sending LNode not found when implementing dataflow");
  let p;
  if (r.dataflowType === tt.GOOSE && (p = await Sp(
    t,
    i,
    s,
    u,
    c,
    d
  )), r.dataflowType === tt.SMV && (p = await Ap(
    t,
    i,
    s,
    c,
    d
  )), r.dataflowType === tt.REPORT) {
    const k = K(i, "lnClass") === "MMXU";
    p = await Ip(
      t,
      i,
      s,
      u,
      c,
      d,
      k
    );
  }
  return Ae(p, "Control Block record could not be created"), p;
}
async function Ip(t, r, i, s, c, d, u) {
  const p = (K(s, "name") + "_RPT").replace(" ", "_"), m = K(i, "iedName");
  Ae(m, "iedName of receiving LNode not found");
  const k = await t.findChildRecordsByTagName(d, [
    "ReportControl"
  ]);
  for (const ee of k) {
    const te = K(ee, "name")?.startsWith(p), ne = (await t.findChildRecordsWithinDepthAndGivenTagName(ee, 2, [
      "ClientLN"
    ]))[0];
    Ae(ne, "ClientLN record inside ReportControl not found");
    const pe = K(ne, "iedName") === m;
    if (te && pe)
      return al(t, ee), ee;
  }
  const S = k.filter(
    (ee) => K(ee, "name")?.startsWith(p) ?? !1
  ).length + 1, L = p + S, Y = sl(
    r,
    c,
    L
  ), X = {
    tagName: "ReportControl",
    attributes: [
      { name: "name", value: L },
      { name: "confRev", value: "1" },
      { name: "rptID", value: Y }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  };
  u ? X.attributes.push({ name: "buffered", value: "false" }) : (X.attributes.push({ name: "buffered", value: "true" }), X.attributes.push({ name: "bufTime", value: "100" }));
  const W = await t.addRecord(X);
  await t.ensureRelationship(d, W);
  const G = {
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
  u ? G.attributes.push({ name: "dupd", value: "true" }) : G.attributes.push({ name: "dupd", value: "false" });
  const V = await t.addRecord(G);
  await t.ensureRelationship(W, V);
  const $ = await t.addRecord({
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
  await t.ensureRelationship(W, $);
  const B = await t.addRecord({
    tagName: "RptEnabled",
    attributes: [{ name: "max", value: "5" }],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(W, B), await Dp(t, B, i), W;
}
async function al(t, r) {
  const i = K(r, "confRev"), s = i ? parseInt(i, 10) + 1 : 1;
  Qt(r, "confRev", s.toString()), await t.updateRecord(r);
}
async function Ap(t, r, i, s, c) {
  const d = K(i, "iedName");
  Ae(d, "iedName of receiving LNode not found");
  const u = await t.findChildRecordsByTagName(c, [
    "SampledValueControl"
  ]);
  for (const Y of u) {
    const X = (await t.findChildRecordsByTagName(Y, ["IEDName"]))[0];
    if (Ae(X, "IEDName record inside SampledValueControl not found"), X.value === d)
      return al(t, Y), Y;
  }
  const p = "MSVCB", m = u.length + 1;
  if (m > 99)
    throw new Error("Maximum number of SampledValueControl elements (99) exceeded");
  const k = p + m.toString().padStart(2, "0"), O = sl(
    r,
    s,
    k
  ), S = await t.addRecord({
    tagName: "SampledValueControl",
    attributes: [
      { name: "name", value: k },
      { name: "confRev", value: "1" },
      { name: "smvID", value: O },
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
  await t.ensureRelationship(c, S), await Nc(t, S, d);
  const L = await t.addRecord({
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
  return await t.ensureRelationship(S, L), S;
}
async function Nc(t, r, i) {
  const s = await t.db.table(ke).where({ tagName: "IED" }).and((u) => K(u, "name") === i).first();
  Ae(s, "IED record of receiving LNode not found");
  const c = (await t.findChildRecordsByTagName(s, ["AccessPoint"]))[0];
  Ae(c, "AccessPoint record of receiving IED not found");
  const d = await t.addRecord({
    tagName: "IEDName",
    attributes: [
      {
        name: "apRef",
        value: K(c, "name") || ""
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
  const s = K(i, "iedName"), c = await t.db.table(ke).where({ tagName: "IED" }).and((p) => K(p, "name") === s).first();
  Ae(c, "IED record of receiving LNode not found");
  const d = (await t.findChildRecordsByTagName(c, ["AccessPoint"]))[0];
  Ae(d, "AccessPoint record of receiving IED not found");
  const u = await t.addRecord({
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
  await t.ensureRelationship(r, u);
}
function sl(t, r, i) {
  const s = K(t, "iedName"), c = K(r, "inst");
  return `${s}${c}/LN0.${i}`;
}
async function Sp(t, r, i, s, c, d) {
  const u = (K(s, "name") + "_GSE").replace(" ", "_"), p = K(i, "iedName");
  Ae(p, "iedName of receiving LNode not found");
  const m = await t.findChildRecordsByTagName(d, [
    "GSEControl"
  ]);
  for (const X of m) {
    const G = K(X, "name")?.startsWith(u), V = (await t.findChildRecordsByTagName(X, ["IEDName"]))[0];
    Ae(V, "IEDName record inside GSEControl not found");
    const $ = V.value === p;
    if (G && $)
      return al(t, X), X;
  }
  const O = m.filter(
    (X) => K(X, "name")?.startsWith(u) ?? !1
  ).length + 1, S = u + O, L = sl(
    r,
    c,
    S
  ), Y = await t.addRecord({
    tagName: "GSEControl",
    attributes: [
      { name: "name", value: S },
      { name: "confRev", value: "1" },
      { name: "appID", value: L },
      { name: "type", value: "GOOSE" }
    ],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(d, Y), await Nc(t, Y, p), Y;
}
async function Pp(t, r, i, s) {
  Ae(
    r.sourceLNodeId,
    "Source LNode ID not set for dataflow connection to implement"
  ), Ae(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
  const c = await t.db.table(ke).get(i.id);
  Ae(c, "ExtRef record not found"), Qt(c, "doName", r.sourceDataObject), Qt(c, "daName", r.sourceDataAttribute), Qt(c, "serviceType", r.dataflowType);
  const d = await t.db.table(ke).get(r.sourceLNodeId);
  Ae(d, "Sending LNode record not found"), Qt(
    c,
    "iedName",
    K(d, "iedName") || ""
  ), Qt(
    c,
    "ldInst",
    K(d, "ldInst") || ""
  ), Qt(
    c,
    "lnClass",
    K(d, "lnClass") || ""
  ), Qt(
    c,
    "lnInst",
    K(d, "lnInst") || ""
  ), Qt(
    c,
    "prefix",
    K(d, "prefix") || ""
  ), Qt(c, "srcCBName", s);
  const u = await ll(t, r.sourceLNodeId);
  Ae(u, "LDevice for sending LNode not found");
  const p = (await t.findChildRecords(u, { tagNames: ["LN0"] }))[0];
  Ae(p, "LN0 record not found"), Qt(
    c,
    "srcLDInst",
    K(u, "inst") || ""
  ), Qt(
    c,
    "srcPrefix",
    K(p, "prefix") || ""
  ), Qt(
    c,
    "srcLNClass",
    K(p, "lnClass") || ""
  ), Qt(c, "srcLNInst", K(p, "inst") || ""), await t.updateRecord(c);
}
async function Lp(t, r, i, s) {
  Ae(
    r.destinationLNodeId,
    "Destination LNode ID not set for dataflow connection to implement"
  );
  const c = await t.db.table(ke).get(r.id);
  Ae(c, "SourceRef record not found");
  const d = K(i, "iedName"), u = K(i, "ldInst"), p = await Rc(t, r.destinationLNodeId);
  Ae(p, "LN record for receiving LNode not found");
  const m = K(p, "prefix"), k = K(p, "lnClass"), O = K(p, "inst"), S = `${d}${u}/${m}${k}${O}.${s.intAddr}`;
  Qt(c, "extRefUuid", s.uuid), Qt(c, "extRefAddr", S), await t.updateRecord(c);
}
function Qt(t, r, i) {
  const s = t.attributes.find((c) => c.name === r);
  s ? s.value = i : t.attributes.push({ name: r, value: i });
}
async function ll(t, r) {
  const i = await t.db.table(ke).get(r), s = await t.db.table(ke).where({ tagName: "IED" }).and(
    (u) => K(u, "name") === K(i, "iedName")
  ).first();
  Ae(s, "IED record not found for receiving LNode");
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(
    s,
    3,
    ["LDevice"]
  )).find((u) => K(u, "inst") === K(i, "ldInst"));
  return Ae(d, "LDevice record not found for receiving LNode"), d;
}
async function Rc(t, r) {
  const i = await t.db.table(ke).get(r), s = await ll(t, r);
  if (!s)
    return;
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(s, 1, [
    "LN"
  ])).find((u) => K(u, "lnType") === K(i, "lnType") && K(u, "inst") === K(i, "lnInst") && K(u, "lnClass") === K(i, "lnClass") && K(u, "prefix") === K(i, "prefix"));
  return Ae(d, "LN record not found for receiving LNode"), d;
}
async function kp(t, r) {
  if (!jp(r))
    return;
  const i = await Rc(t, r.destinationLNodeId);
  if (!i)
    return;
  const c = (await t.findChildRecordsWithinDepthAndGivenTagName(i, 2, [
    "ExtRef"
  ])).filter((u) => {
    const p = K(u, "pLN") === r.preferredLNode && K(u, "pDO") === r.preferredDataObject && K(u, "pDA") === r.preferredDataAttribute;
    Ae(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
    const m = K(u, "pServT"), k = m === void 0 || m === r.dataflowType, O = K(u, "srcCBName");
    return p && k && !(O !== void 0 && O !== "");
  }), d = [];
  for (const u of c) {
    if (!K(u, "uuid")) {
      d.push(u);
      continue;
    }
    await t.db.table(ke).where({ tagName: "SourceRef" }).and(
      (m) => (!!K(m, "extRefUuid") && K(m, "extRefUuid")) === K(u, "uuid")
    ).first() || d.push(u);
  }
  return d[0];
}
function jp(t) {
  return t.preferredLNode.trim() !== "" && t.preferredDataObject.trim() !== "" && t.preferredDataAttribute.trim() !== "";
}
async function Xi(t, r) {
  const i = await $i(
    t,
    r,
    tn.prefix
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
      namespace: tn,
      value: "",
      children: []
    });
    return await t.ensureRelationship(i, d), d;
  }
  const c = {
    msg: `More than one LNodeInputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(c));
}
async function hs(t, r) {
  const i = await $i(
    t,
    r,
    tn.prefix
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
      namespace: tn,
      value: "",
      children: []
    });
    return await t.ensureRelationship(i, d), d;
  }
  const c = {
    msg: `More than one LNodeOutputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(c));
}
async function Fp(t, r, i, s) {
  const c = [], d = await oa(
    t,
    vs(s, r)
  );
  if (c.push(d), await t.ensureRelationship(i, d), s.includeQuality) {
    const u = {
      ...s,
      attribute: "q"
      // Set to 'q' for Quality
    }, p = await oa(
      t,
      vs(u, r)
    );
    c.push(p), await t.ensureRelationship(i, p);
  }
  if (s.includeTimestamp) {
    const u = {
      ...s,
      attribute: "t"
      // Set to 't' for Timestamp
    }, p = await oa(
      t,
      vs(u, r)
    );
    c.push(p), await t.ensureRelationship(i, p);
  }
  return c;
}
async function $i(t, r, i) {
  const s = await t.db.table(ke).where({ "parent.id": r.id, tagName: "Private" }).and((u) => K(u, "type") === i).first();
  if (s)
    return s;
  const c = await t.db.table(ke).get(r.id);
  if (!c) {
    const u = {
      msg: `LNode element with uuid ${r.uuid} not found`
    };
    throw new Error(JSON.stringify(u));
  }
  const d = await t.addRecord({
    tagName: "Private",
    attributes: [{ name: "type", value: i }],
    parent: null,
    namespace: xt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(c, d), d;
}
async function oa(t, r) {
  const i = {
    tagName: "SourceRef",
    namespace: tn,
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
        value: await Eo(
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
async function Mp(t, r, i) {
  const s = r.dataObjectSpecifications?.find(
    (O) => O.name === i.signal
  ), c = s?.dataAttributeSpecifications.find(
    (O) => O.name === i.attribute
  ), u = St().lnodeTypes.find((O) => O.lnClass === r.lnClass), p = u?.dataObjects.find((O) => O.name === i.signal), m = p?.dataAttributes.find((O) => O.name === i.attribute);
  if (!u || !p || !m) {
    const O = `LNodeType, DO type or DA type not found for LNode class ${r.lnClass}, DO ${i.signal}, DA ${i.attribute}`;
    throw console.error(O), new Error(O);
  }
  let k;
  if (!s) {
    const O = await $i(
      t,
      r,
      tn.prefix
    ), S = {
      name: i.signal,
      desc: p.desc
    };
    k = await ks(t, S), await t.ensureRelationship(O, k);
  }
  if (!k && (k = await t.db.table(ke).get(s.id), !k))
    throw new Error(`DOS element with id ${s.id} not found`);
  if (c || await ms(t, k, i.attribute, m.desc), i.includeQuality) {
    const O = p?.dataAttributes.find((L) => L.name === "q");
    if (!O)
      throw new Error(`DA type 'q' not allowed for DO ${i.signal}`);
    s?.dataAttributeSpecifications.find(
      (L) => L.name === O.name
    ) || await ms(t, k, O.name, O.desc);
  }
  if (i.includeTimestamp) {
    const O = p?.dataAttributes.find((L) => L.name === "t");
    if (!O)
      throw new Error(`DA type 't' not allowed for DO ${i.signal}`);
    s?.dataAttributeSpecifications.find(
      (L) => L.name === O.name
    ) || await ms(t, k, O.name, O.desc);
  }
}
async function ms(t, r, i, s) {
  const d = await Tc(
    t,
    {
      name: i,
      desc: s
    }
  );
  await t.ensureRelationship(r, d);
}
async function $p(t, r) {
  const i = {
    tagName: "ControlRef",
    namespace: tn,
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
        value: await Eo(
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
async function Eo(t, r, i, s) {
  if (!r) return "";
  const c = await t.table(ke).where({ tagName: "LNode" }).and((O) => K(O, "uuid") === r).first();
  if (!c) return "";
  const d = [];
  let u = c;
  const p = ["LNode", "SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
  for (; u && u.parent; ) {
    if (p.includes(u.tagName)) {
      const O = K(u, "name");
      O && d.unshift(O);
    }
    u = await t.table(ke).get(u.parent.id);
  }
  const m = (() => {
    const O = c.attributes?.find((Y) => Y.name === "prefix")?.value || "", S = c.attributes?.find((Y) => Y.name === "lnClass")?.value || "", L = c.attributes?.find((Y) => Y.name === "lnInst")?.value || "";
    return `${O}${S}${L}`;
  })();
  d.push(m);
  let k = d.join("/");
  return i && (k += `.${i}`, s && (k += "." + s)), k;
}
async function Bp(t, r, i) {
  const s = await Eo(t, r), c = K(i, "input"), d = K(i, "inputInst"), u = K(i, "pDA");
  let p = `${s}.${c}`;
  return d && (p += `(${d})`), u && (p += `.${u}`), p;
}
async function Kp(t, r, i) {
  const s = await Eo(t, r), c = K(i, "output"), d = K(i, "outputInst");
  let u = `${s}.${c}`;
  return d && (u += `(${d})`), u;
}
async function Bi(t, r) {
  const i = await t.db.table(ke).get(r);
  if (!i || !i?.parent)
    return [];
  const s = await t.db.table(ke).get(i.parent.id);
  return s?.tagName === "Function" || s?.tagName === "SubFunction" ? await t.db.table(ke).where({ tagName: "FunctionRef" }).and(
    (u) => K(u, "functionUuid") === K(s, "uuid")
  ).toArray() : [];
}
async function ul(t, r) {
  const i = [];
  for (const s of r)
    (await t.findParentRecordsWithinDepthAndGivenTagName(
      s,
      3,
      ["Application"]
    )).length === 1 && i.push(s);
  return i;
}
async function nu(t, r) {
  const i = /* @__PURE__ */ new Map();
  for (const s of r) {
    const c = await t.findParentRecordsWithinDepthAndGivenTagName(
      s,
      3,
      ["Application"]
    );
    c.length === 1 && i.set(s.id, c[0].id);
  }
  return i;
}
async function ru(t, r, i) {
  const s = await Bi(t, r.id);
  if (s.length === 0)
    return;
  const c = await ul(
    t,
    s
  );
  for (const d of c) {
    let u = (await t.findChildRecords(d, {
      tagNames: ["SignalRole"],
      attrs: [{ name: "name", value: "Input" }]
    }))[0];
    u || (u = await t.addRecord({
      tagName: "SignalRole",
      attributes: [
        { name: "name", value: "Input" },
        { name: "uuid", value: crypto.randomUUID() }
      ],
      parent: null,
      namespace: tn,
      value: "",
      children: []
    }), await t.ensureRelationship(d, u));
    for (const p of i) {
      const m = await t.addRecord({
        tagName: "LNodeInputRef",
        attributes: [
          {
            name: "sourceRef",
            value: await Bp(t.db, r.uuid, p)
          },
          { name: "sourceRefUuid", value: K(p, "uuid") || "" }
        ],
        parent: null,
        namespace: tn,
        value: "",
        children: []
      });
      await t.ensureRelationship(u, m);
    }
  }
}
async function qp(t, r, i) {
  const s = await Bi(t, r.id);
  if (s.length === 0)
    return;
  const c = await ul(
    t,
    s
  );
  for (const d of c) {
    let u = (await t.findChildRecords(d, {
      tagNames: ["SignalRole"],
      attrs: [{ name: "name", value: "Output" }]
    }))[0];
    u || (u = await t.addRecord({
      tagName: "SignalRole",
      attributes: [
        { name: "name", value: "Output" },
        { name: "uuid", value: crypto.randomUUID() }
      ],
      parent: null,
      namespace: tn,
      value: "",
      children: []
    }), await t.ensureRelationship(d, u));
    const p = await t.addRecord({
      tagName: "LNodeOutputRef",
      attributes: [
        {
          name: "controlRef",
          value: await Kp(
            t.db,
            r.uuid,
            i
          )
        },
        { name: "controlRefUuid", value: K(i, "uuid") || "" }
      ],
      parent: null,
      namespace: tn,
      value: "",
      children: []
    });
    await t.ensureRelationship(u, p);
  }
}
async function Up(t, r, i, s, c) {
  const d = await Bi(t, r.id);
  if (d.length === 0)
    return;
  const u = await ul(
    t,
    d
  ), p = await Eo(t.db, r.uuid, i, s);
  for (const m of u)
    await jr(
      t,
      m,
      "Process",
      p,
      r.uuid,
      i,
      s
    ), c === tt.REPORT && await jr(
      t,
      m,
      "Signalisation",
      p,
      r.uuid,
      i,
      s
    );
}
async function zi(t, r, i, s, c, d) {
  const u = await Bi(
    t,
    r.id
  ), p = await nu(
    t,
    u
  ), m = await Bi(
    t,
    i.id
  ), k = await nu(
    t,
    m
  );
  let O = "", S, L;
  if (s === tt.CONTROL ? (O = await Eo(t.db, i.uuid, c), S = i, L = m.filter(
    (B) => Array.from(k.keys()).includes(B.id)
  )) : (O = await Eo(t.db, r.uuid, c, d), S = r, L = u.filter(
    (B) => Array.from(p.keys()).includes(B.id)
  )), L.length === 0)
    return;
  for (const B of L)
    s === tt.REPORT && await jr(
      t,
      B,
      "Signalisation",
      O,
      S.uuid,
      c,
      d
    ), s === tt.CONTROL && await jr(
      t,
      B,
      "Control",
      O,
      S.uuid,
      c
    );
  const W = St().lnodeTypes.find((B) => B.lnClass === S.lnClass)?.dataObjects.find((B) => B.name === c);
  if (W) {
    const B = await t.db.table(ke).where({ tagName: "DOType" }).and((fe) => K(fe, "id") === W.type).first(), ee = K(B, "cdc");
    if (ee === "DPL" || ee === "LPL" || ee === "VSD")
      for (const fe of L)
        await jr(
          t,
          fe,
          "Information",
          O,
          S.uuid,
          c,
          d
        );
    else {
      const fe = S.dataObjectSpecifications?.find((ne) => ne.name === c)?.dataAttributeSpecifications.find((ne) => ne.name === d);
      if (await t.db.table(ke).where({ tagName: "Val", "parent.id": fe?.id }).first())
        for (const ne of L)
          await jr(
            t,
            ne,
            "Setting",
            O,
            S.uuid,
            c,
            d
          );
    }
  }
  let G = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
  function $(B, ee) {
    const fe = B.find((te) => te.id === ee);
    if (!fe)
      throw new Error(`FunctionRef with id ${ee} not found`);
    return fe;
  }
  if (p.size === 0)
    V = new Set(
      m.filter(
        (B) => Array.from(k.keys()).includes(B.id)
      )
    );
  else if (k.size === 0)
    V = new Set(
      u.filter(
        (B) => Array.from(p.keys()).includes(B.id)
      )
    );
  else
    for (const [
      B,
      ee
    ] of p)
      for (const [
        fe,
        te
      ] of k) {
        const ne = $(
          u,
          B
        ), pe = $(
          m,
          fe
        );
        ee === te ? (G.add(ne), G.add(pe)) : (V.add(ne), V.add(pe));
      }
  for (const B of L)
    V.has(B) && await jr(
      t,
      B,
      "Process",
      O,
      S.uuid,
      c,
      d
    ), G.has(B) && await jr(
      t,
      B,
      "Internal",
      O,
      S.uuid,
      c,
      d
    );
}
async function jr(t, r, i, s, c, d, u) {
  const p = await Vp(
    t,
    r,
    i
  );
  await Wp(
    t,
    p,
    s,
    c,
    d,
    u
  );
}
async function Vp(t, r, i) {
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
    namespace: tn,
    value: "",
    children: []
  }), await t.ensureRelationship(r, s), s);
}
async function Wp(t, r, i, s, c, d) {
  const u = [
    { name: "data", value: i },
    { name: "lnodeUuid", value: s },
    { name: "doName", value: c }
  ];
  if (d && u.push({ name: "daName", value: d }), !(await t.findChildRecords(r, {
    tagNames: ["LNodeDataRef"],
    attrs: u
  }))[0]) {
    const m = await t.addRecord({
      tagName: "LNodeDataRef",
      attributes: u,
      parent: null,
      namespace: tn,
      value: "",
      children: []
    });
    await t.ensureRelationship(r, m);
  }
}
function ou(t) {
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
function Gp(t) {
  return {
    id: t.id,
    name: K(t, "name") || "",
    confRev: K(t, "confRev") || "",
    datSet: K(t, "datSet") || ""
  };
}
function Hp(t) {
  return {
    id: t.id,
    name: K(t, "name") || ""
  };
}
function vs(t, r) {
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
function Yp(t, r) {
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
function Xp(t) {
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
async function ks(t, r) {
  const i = {
    tagName: "DOS",
    namespace: tn,
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
async function Tc(t, r) {
  const i = {
    tagName: "DAS",
    namespace: tn,
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
function Cc(t) {
  return {
    findAllEnrichedLNodes: r,
    findAllLNodeTypes: i,
    enrichWithDataObjectSpecifications: d
  };
  async function r() {
    const p = await u();
    return p.length ? await d(p) : [];
  }
  async function i() {
    const p = await t.table(ke).where({ tagName: "LNodeType" }).toArray(), m = [];
    for (const k of p)
      m.push({
        id: k.id,
        typeId: K(k, "id") ?? "",
        lnClass: K(k, "lnClass") ?? "",
        dataObjects: await s(k)
      });
    return m;
  }
  async function s(p) {
    if (!p.children) return [];
    const m = [];
    for (const k of p.children) {
      if (k.tagName !== "DO") continue;
      const O = await t.table(ke).get(k.id);
      O && m.push({
        id: O.id,
        name: K(O, "name") ?? "",
        type: K(O, "type") ?? "",
        desc: K(O, "desc") ?? "",
        dataAttributes: await c(O)
      });
    }
    return m;
  }
  async function c(p) {
    const m = K(p, "type");
    if (!m) return [];
    const k = (await t.table(ke).where({ tagName: "DOType" }).toArray()).find((S) => S.attributes?.find((L) => L.name === "id" && L.value === m));
    if (!k || !k.children) return [];
    const O = [];
    for (const S of k.children) {
      if (S.tagName !== "DA") continue;
      const L = await t.table(ke).get(S.id);
      L && O.push({
        id: L.id,
        name: K(L, "name") ?? "",
        type: K(L, "type") ?? "",
        desc: K(L, "desc") ?? "",
        bType: K(L, "bType") ?? "",
        fc: K(L, "fc") ?? ""
      });
    }
    return O;
  }
  async function d(p) {
    const m = await t.table(ke).where({ tagName: "Private" }).toArray(), k = await t.table(ke).where({ tagName: "DOS" }).toArray(), O = await t.table(ke).where({ tagName: "DAS" }).toArray(), S = await t.table(ke).where({ tagName: "SubscriberLNode" }).toArray();
    return Promise.all(
      p.map(async (L) => {
        const Y = m.find(
          (W) => W.parent?.id === L.id && W.parent?.tagName === "LNode" && K(W, "type") === "eIEC61850-6-100"
        );
        if (!Y || !Y.children)
          return { ...L, dataObjectSpecifications: [] };
        const X = [];
        for (const W of Y.children) {
          if (W.tagName !== "DOS") continue;
          const G = k.find(($) => $.id === W.id);
          if (!G) continue;
          const V = [];
          if (G.children)
            for (const $ of G.children) {
              if ($.tagName !== "DAS") continue;
              const B = O.find((fe) => fe.id === $.id);
              if (!B) continue;
              let ee = [];
              if (B.children) {
                const fe = B.children.filter((ne) => ne.tagName === "SubscriberLNode"), te = S.filter(
                  (ne) => fe.some((pe) => pe.id === ne.id)
                );
                for (const ne of te)
                  ee.push({
                    id: ne.id,
                    inputName: K(ne, "inputName") ?? "",
                    service: cl(ne, "service"),
                    pLN: K(ne, "pLN") ?? "",
                    resourceName: K(ne, "resourceName") ?? ""
                  });
              }
              V.push({
                id: B.id,
                name: K(B, "name") ?? "",
                desc: K(B, "desc") ?? "",
                subscriberLNodes: ee
              });
            }
          X.push({
            id: G.id,
            name: K(G, "name") ?? "",
            desc: K(G, "desc") ?? "",
            dataAttributeSpecifications: V
          });
        }
        return { ...L, dataObjectSpecifications: X };
      })
    );
  }
  async function u() {
    return (await t.table(ke).where({ tagName: "LNode" }).toArray()).map((m) => ({
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
function cl(t, r) {
  const i = t?.attributes?.find((c) => c.name === r)?.value;
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
function zp(t) {
  const r = il(t);
  return {
    findAllExistingConnections: i,
    findAllExistingControlledConnections: s
  };
  async function i() {
    const c = await t.table(ke).where({ tagName: "SourceRef" }).toArray();
    if (!c.length) return [];
    const d = [];
    for (const u of c) {
      if (!u.attributes) continue;
      const p = K(u, "sourceLNodeUuid"), m = await t.table(ke).where({ tagName: "LNode" }).toArray().then(
        (B) => B.find(
          (ee) => ee.attributes?.some(
            (fe) => fe.name === "uuid" && fe.value === p
          )
        )
      ), k = await r.findParentRecordsWithinDepthAndGivenTagName(
        u,
        3,
        ["LNode"]
      );
      if (k.length != 1) {
        const B = {
          msg: "Destination LNode record not found for SourceRef id",
          id: u.id
        };
        throw console.error(B), new Error(JSON.stringify(B));
      }
      const O = await t.table(ke).where({ tagName: "IED" }).toArray();
      let S = !1;
      const L = K(m, "iedName");
      if (L) {
        const B = O.find(
          (ee) => K(ee, "name") === L
        );
        Ae(B, `IED record not found for iedName: ${L}`), S = K(B, "manufacturer") !== "S_IED";
      }
      let Y = !1;
      const X = K(k[0], "iedName");
      if (X) {
        const B = O.find(
          (ee) => K(ee, "name") === X
        );
        Ae(
          B,
          `IED record not found for iedName: ${X}`
        ), Y = K(B, "manufacturer") !== "S_IED";
      }
      const W = !S || !Y;
      let G = !1;
      const V = K(u, "extRefUuid");
      if (V) {
        const B = await r.findRecord({
          tagNames: ["ExtRef"],
          attr: { name: "uuid", value: V }
        });
        Ae(B, `ExtRef record not found for uuid: ${V}`), G = !!K(B, "srcCBName");
      }
      const $ = Qp(
        u,
        m?.id ?? null,
        k[0].id,
        G,
        W,
        V
      );
      d.push($);
    }
    return d;
  }
  async function s() {
    const c = await t.table(ke).where({ tagName: "ControlRef" }).toArray();
    if (!c.length) return [];
    const d = [];
    for (const u of c) {
      if (!u.attributes) continue;
      const p = K(u, "controlledLNodeUuid"), m = K(u, "controlledDoName"), k = await t.table(ke).where({ tagName: "LNode" }).toArray().then(
        (L) => L.find(
          (Y) => Y.attributes?.some(
            (X) => X.name === "uuid" && X.value === p
          )
        )?.id
      ) || null, O = await r.findParentRecordsWithinDepthAndGivenTagName(
        u,
        3,
        // ControlRef ->  LNodeOutputs -> Private -> LNode
        ["LNode"]
      );
      if (O.length != 1) {
        const L = {
          msg: "LNode record not found for ControlRef id",
          id: u.id
        };
        throw console.error(L), new Error(JSON.stringify(L));
      }
      const S = {
        controllerLNodeId: O[0].id,
        controlledLNodeId: k,
        controlledDataObject: m || "",
        dataflowType: tt.CONTROL,
        outputInstance: K(u, "outputInst") || "",
        outputName: K(u, "output") || "",
        id: u.id
      };
      d.push(S);
    }
    return d;
  }
}
function Qp(t, r, i, s, c, d) {
  return {
    id: t.id,
    sourceLNodeId: r,
    destinationLNodeId: i,
    sourceDataObject: K(t, "sourceDoName") || "",
    sourceDataAttribute: K(t, "sourceDaName") || "",
    dataflowType: cl(t, "service"),
    inputInstance: K(t, "inputInst") || "",
    input: K(t, "input") || "",
    preferredLNode: K(t, "pLN") || "",
    preferredDataObject: K(t, "pDO") || "",
    preferredDataAttribute: K(t, "pDA") || "",
    processResource: K(t, "resourceName") || "",
    isImplemented: s,
    notPossibleToImplement: c,
    extRefUuid: d
  };
}
function Jp(t) {
  const r = il(t), i = Cc(t);
  return {
    findAllSourcePlaceholders: s
  };
  async function s() {
    let p = [];
    const m = await i.findAllEnrichedLNodes();
    if (!m.length) return p;
    for (const O of m) {
      const S = O.dataObjectSpecifications ?? [];
      for (const L of S) {
        const Y = L.dataAttributeSpecifications ?? [];
        for (const X of Y) {
          const W = X.subscriberLNodes ?? [];
          for (const G of W)
            p.push({
              lNodeId: O.id,
              id: G.id,
              dataObject: L.name,
              dataAttribute: X.name,
              dataflowType: G.service,
              preferredLNode: G.pLN,
              input: G.inputName,
              processResource: G.resourceName,
              isFulfilled: void 0
            });
        }
      }
    }
    return await u(p);
  }
  async function c() {
    const m = (await t.table(ke).where({ tagName: "SourceRef" }).toArray()).map(async (O) => ({
      id: O.id,
      uuid: K(O, "uuid") ?? "",
      pDO: K(O, "pDO") ?? "",
      pDA: K(O, "pDA") ?? "",
      pLN: K(O, "pLN") ?? "",
      input: K(O, "input") ?? "",
      inputInst: K(O, "inputInst") ?? "",
      source: K(O, "source") ?? "",
      sourceLNodeUuid: K(O, "sourceLNodeUuid") ?? "",
      dataflowType: cl(O, "service"),
      sourceDoName: K(O, "sourceDoName") ?? "",
      sourceDaName: K(O, "sourceDaName") ?? "",
      // Add the lnClass for finding fulfilled placeholders
      lnClassOfParentLNode: await d(O.id, 3)
    }));
    return await Promise.all(m);
  }
  async function d(p, m) {
    const k = await r.db.table(ke).get(p);
    if (k) {
      const O = await r.findParentRecordsWithinDepthAndGivenTagName(
        k,
        m,
        ["LNode"]
      );
      return K(O[0], "lnClass");
    } else return "";
  }
  async function u(p) {
    const m = await c(), k = [];
    for (const O of p) {
      const S = m.some((L) => !(O.preferredLNode && O.preferredLNode !== L.lnClassOfParentLNode || O.dataflowType && O.dataflowType !== L.dataflowType || O.dataObject && O.dataObject !== L.sourceDoName || O.dataAttribute && O.dataAttribute !== L.sourceDaName));
      k.push({
        ...O,
        isFulfilled: S
      });
    }
    return k;
  }
}
const St = /* @__PURE__ */ ol("dataflow/app", () => {
  let t = null;
  const r = $e(""), i = $e([]), s = $e([]), c = $e([]), d = $e([]), u = $e([]), p = In(), m = In(), k = In(), O = In();
  async function S(G) {
    L(), t = new ha(G), await t.open(), k.value = Cc(t), m.value = zp(t), O.value = Jp(t), r.value = G, p.value = xp(t), i.value = await k.value.findAllEnrichedLNodes(), s.value = await k.value.findAllLNodeTypes(), c.value = await m.value.findAllExistingConnections(), d.value = await m.value.findAllExistingControlledConnections(), u.value = await O.value.findAllSourcePlaceholders();
  }
  function L() {
    t && (t.close(), t = null);
  }
  async function Y() {
    c.value = await m.value.findAllExistingConnections(), d.value = await m.value.findAllExistingControlledConnections();
  }
  async function X(G) {
    const $ = (await k.value.findAllEnrichedLNodes()).find((B) => B.id === G);
    if ($) {
      const B = i.value.findIndex((ee) => ee.id === G);
      B !== -1 && (i.value[B] = $);
    }
  }
  async function W() {
    u.value = await O.value.findAllSourcePlaceholders();
  }
  return {
    // states
    activeFilename: r,
    lnodes: i,
    lnodeTypes: s,
    connections: c,
    controlledConnections: d,
    sourcePlaceholders: u,
    // getters
    dataflowSdk: p,
    // actions
    initApp: S,
    closeDatabase: L,
    refreshConnections: Y,
    refreshLNode: X,
    refreshPlaceholders: W
  };
}), Zp = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, eh = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, th = { class: "mt-4" }, nh = { key: 0 }, rh = { key: 1 }, oh = { class: "mt-4" }, ih = /* @__PURE__ */ Ot({
  __name: "connection-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = St(), { lnodes: s } = Ft(i), c = Ye(() => s.value.find((p) => p.id === r.connection.sourceLNodeId)?.dataObjectSpecifications?.find(
      (p) => p.name === r.connection.sourceDataObject
    )), d = Ye(() => c?.value?.dataAttributeSpecifications?.find(
      (u) => u.name === r.connection.sourceDataAttribute
    ));
    return (u, p) => (ue(), ye(Ke, null, [
      p[10] || (p[10] = y("h2", { class: "text-lg font-bold mb-2" }, "Specified Dataflow", -1)),
      u.connection.dataflowType ? (ue(), ye("span", Zp, le(u.connection.dataflowType), 1)) : Ge("", !0),
      y("dl", eh, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, le(u.connection.input), 1)
        ]),
        y("div", null, [
          p[1] || (p[1] = y("dt", null, "Input Instance:", -1)),
          y("dd", null, le(u.connection.inputInstance || "-"), 1)
        ]),
        y("div", th, [
          p[2] || (p[2] = y("dt", null, "DO:", -1)),
          y("dd", null, le(u.connection.sourceDataObject || "-"), 1)
        ]),
        c.value?.desc ? (ue(), ye("div", nh, [
          p[3] || (p[3] = y("dt", null, "DO Desc:", -1)),
          y("dd", null, le(c.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[4] || (p[4] = y("dt", null, "DA:", -1)),
          y("dd", null, le(u.connection.sourceDataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (ue(), ye("div", rh, [
          p[5] || (p[5] = y("dt", null, "DA Desc:", -1)),
          y("dd", null, le(d.value.desc), 1)
        ])) : Ge("", !0),
        y("div", oh, [
          p[6] || (p[6] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, le(u.connection.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[7] || (p[7] = y("dt", null, "Preferred DO:", -1)),
          y("dd", null, le(u.connection.preferredDataObject || "-"), 1)
        ]),
        y("div", null, [
          p[8] || (p[8] = y("dt", null, "Preferred DA:", -1)),
          y("dd", null, le(u.connection.preferredDataAttribute || "-"), 1)
        ]),
        y("div", null, [
          p[9] || (p[9] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, le(u.connection.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), ah = { key: 0 }, sh = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, lh = { class: "flex flex-col gap-4" }, uh = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, ch = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, fh = /* @__PURE__ */ Ot({
  __name: "implemented-dataflow-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = St(), { dataflowSdk: s } = Ft(i), c = $e(null), d = $e(null), u = $e(null), p = $e("");
    Ca(async () => {
      !r.connection.extRefUuid || !r.connection.isImplemented || (c.value = await s.value.findExtRefByUuid(r.connection.extRefUuid), c.value.srcCbName && (d.value = await s.value.findControlBlock(
        c.value.iedName,
        c.value.ldInst,
        c.value.srcCbName
      ), u.value = await s.value.findDataSet(
        c.value.iedName,
        c.value.ldInst,
        d.value.datSet
      ), p.value = await s.value.findPathToExtRef(c.value.id)));
    });
    const m = Ye(() => `${c.value?.iedName}/${c.value?.ldInst}/${c.value?.prefix}${c.value?.lnClass}${c.value?.lnInst}`), k = Ye(() => p.value.split("/").slice(0, -1).join("/")), O = Ye(() => `${c.value?.iedName}/${c.value?.srcLdInst}/${c.value?.srcPrefix}${c.value?.srcLnClass}${c.value?.srcLnInst}`);
    return (S, L) => (ue(), ye(Ke, null, [
      L[9] || (L[9] = y("h2", { class: "text-lg font-bold mb-2" }, "Implemented Dataflow", -1)),
      S.connection.isImplemented ? Ge("", !0) : (ue(), ye("p", ah, "Not implemented yet")),
      c.value ? (ue(), ye(Ke, { key: 1 }, [
        S.connection.dataflowType ? (ue(), ye("span", sh, le(c.value.serviceType), 1)) : Ge("", !0),
        y("div", lh, [
          y("dl", uh, [
            y("div", null, [
              L[0] || (L[0] = y("dt", null, "DO:", -1)),
              y("dd", null, le(c.value.doName), 1)
            ]),
            y("div", null, [
              L[1] || (L[1] = y("dt", null, "DA:", -1)),
              y("dd", null, le(c.value.daName), 1)
            ])
          ]),
          y("div", null, [
            L[2] || (L[2] = y("h3", { class: "font-semibold" }, "Sending IED/LD/LN", -1)),
            y("div", null, le(m.value), 1)
          ]),
          y("div", null, [
            L[3] || (L[3] = y("h3", { class: "font-semibold" }, "Receiving IED/LD/LN", -1)),
            y("div", null, le(k.value), 1)
          ]),
          y("div", null, [
            L[8] || (L[8] = y("h3", { class: "font-semibold" }, "Control Block and Data Set", -1)),
            y("dl", ch, [
              y("div", null, [
                L[4] || (L[4] = y("dt", null, "Location:", -1)),
                y("dd", null, le(O.value), 1)
              ]),
              y("div", null, [
                L[5] || (L[5] = y("dt", null, "Control Block:", -1)),
                y("dd", null, le(d.value?.name), 1)
              ]),
              y("div", null, [
                L[6] || (L[6] = y("dt", null, "ConfRev:", -1)),
                y("dd", null, le(d.value?.confRev), 1)
              ]),
              y("div", null, [
                L[7] || (L[7] = y("dt", null, "DataSet:", -1)),
                y("dd", null, le(u.value?.name), 1)
              ])
            ])
          ])
        ])
      ], 64)) : Ge("", !0)
    ], 64));
  }
}), dh = { class: "grid grid-cols-2 gap-4 mt-4" }, ph = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, hh = ["value"], mh = { class: "grid grid-cols-2 gap-4 mt-4" }, vh = ["value", "title"], yh = { class: "grid grid-cols-2 gap-4 mt-4" }, gh = ["value", "title"], bh = { class: "grid grid-cols-2 gap-4 mt-4" }, wh = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, _h = ["value"], xh = { class: "grid grid-cols-2 gap-4 mt-4" }, Nh = { class: "flex items-center" }, Rh = { class: "flex items-center" }, Th = ["value"], Ch = { class: "grid grid-cols-2 gap-4 mt-4" }, Eh = { class: "mt-4" }, Oh = { class: "mt-4" }, Ih = { class: "mt-4 flex items-center" }, Ah = /* @__PURE__ */ Ot({
  __name: "dataflow-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, i = Qn(), s = St(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(L()), p = $e(!1), m = $e([]), k = $e(!0);
    Ko(async () => {
      m.value = await d.value.findExistingInputs(r.destinationLNode);
    }), Ut(p, (V) => {
      V ? u.value.inputName = "" : u.value.inputName = u.value.signal;
    }), Ut(
      [
        () => u.value.inputName,
        () => u.value.attribute
      ],
      async ([V, $]) => {
        const B = await d.value.calculateNextInputInstance(
          V,
          $,
          r.destinationLNode
        );
        u.value.inputInstance = B.toString();
      }
    ), Ut(
      () => u.value.signal,
      (V, $) => {
        const B = u.value.inputName !== $ && u.value.inputName !== "";
        !p.value && !B && (u.value.inputName = V);
      }
    ), Ca(() => {
      switch (G(), u.value.type = r.dataflowType, r.dataflowType) {
        case tt.GOOSE:
        case tt.SMV:
          u.value.includeQuality = !0, u.value.includeTimestamp = !1;
          break;
        case tt.REPORT:
          u.value.includeQuality = !0, u.value.includeTimestamp = !0;
          break;
        default:
          u.value.includeQuality = !1, u.value.includeTimestamp = !1;
      }
    });
    const O = Ye(() => !r.dataflowType || !r.sourceLNode ? [] : c.value.find((V) => V.typeId === r.sourceLNode.lnType)?.dataObjects.filter(
      (V) => V.dataAttributes.some(
        ($) => $o[r.dataflowType]?.includes($.fc)
      )
    ).sort((V, $) => V.name.localeCompare($.name)) ?? []), S = Ye(() => !r.dataflowType || !r.sourceLNode ? [] : c.value.find((V) => V.typeId === r.sourceLNode.lnType)?.dataObjects.find((V) => V.name === u.value.signal)?.dataAttributes.filter(
      (V) => $o[r.dataflowType].includes(V.fc)
    ).filter((V) => !Fi.includes(V.name)).sort((V, $) => V.name.localeCompare($.name)) ?? []);
    Ut(
      [() => O.value, () => r.sourcePlaceholder],
      ([V, $]) => {
        if ($ && V.length > 0) {
          const B = V.find((ee) => ee.name === $.dataObject);
          u.value.signal = B ? B.name : "";
        }
      },
      { immediate: !0 }
    ), Ut(
      [
        () => S.value,
        () => r.sourcePlaceholder,
        () => u.value.signal
      ],
      ([V, $, B]) => {
        if ($ && V.length > 0) {
          const ee = V.find((fe) => fe.name === $.dataAttribute);
          ee && B === $.dataObject && (u.value.attribute = ee.name);
        }
      },
      { immediate: !0 }
    ), Ut(
      [
        () => u.value.signal,
        () => u.value.attribute,
        () => p.value,
        () => r.sourcePlaceholder
      ],
      ([V, $, B, ee]) => {
        ee && ee.input && V !== "" && $ !== "" && B === !1 && (u.value.inputName = ee.input);
      },
      { immediate: !0 }
    );
    function L() {
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
    function Y(V) {
      for (const $ of V)
        u.value[$] = "";
    }
    async function X() {
      try {
        if (!W(u.value))
          return;
        await d.value.createConnection(
          u.value,
          r.sourceLNode,
          r.destinationLNode,
          k.value
        ), i.handleClose();
      } catch (V) {
        console.error("Error creating dataflow:", V), alert(`Error creating dataflow: ${V instanceof Error ? V.message : "Unknown error"}`);
      }
    }
    function W(V) {
      return V.type ? V.signal ? V.attribute ? V.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function G() {
      u.value = L(), p.value = !1, k.value = !0;
    }
    return (V, $) => (ue(), ye(Ke, null, [
      $[27] || ($[27] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("form", {
        method: "dialog",
        onSubmit: X
      }, [
        y("div", dh, [
          $[11] || ($[11] = y("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          y("select", ph, [
            y("option", {
              value: r.sourceLNode.id
            }, le(Se(Mi)(V.sourceLNode)), 9, hh)
          ])
        ]),
        y("div", mh, [
          $[13] || ($[13] = y("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          rt(y("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": $[0] || ($[0] = (B) => u.value.signal = B),
            onChange: $[1] || ($[1] = (B) => Y(["attribute"]))
          }, [
            $[12] || ($[12] = y("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (ue(!0), ye(Ke, null, Ct(O.value, (B) => (ue(), ye("option", {
              key: B.name,
              value: B.name,
              title: B.desc ? `Desc: ${B.desc}` : ""
            }, le(B.desc ? B.name + " ⓘ" : B.name), 9, vh))), 128))
          ], 544), [
            [yn, u.value.signal]
          ])
        ]),
        y("div", yh, [
          $[15] || ($[15] = y("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          rt(y("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": $[2] || ($[2] = (B) => u.value.attribute = B)
          }, [
            $[14] || ($[14] = y("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (ue(!0), ye(Ke, null, Ct(S.value, (B) => (ue(), ye("option", {
              key: B.name,
              value: B.name,
              title: B.desc ? `Desc: ${B.desc}` : ""
            }, le(B.desc ? B.name + " ⓘ" : B.name), 9, gh))), 128))
          ], 512), [
            [yn, u.value.attribute]
          ])
        ]),
        $[24] || ($[24] = y("hr", { class: "solid mt-4" }, null, -1)),
        y("div", bh, [
          $[16] || ($[16] = y("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          y("select", wh, [
            y("option", {
              value: r.destinationLNode.id
            }, le(Se(Mi)(V.destinationLNode)), 9, _h)
          ])
        ]),
        y("div", xh, [
          y("fieldset", null, [
            $[19] || ($[19] = y("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
            y("div", Nh, [
              rt(y("input", {
                type: "radio",
                id: "dataflow-new-input",
                name: "input",
                "onUpdate:modelValue": $[3] || ($[3] = (B) => p.value = B),
                value: !1,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [Br, p.value]
              ]),
              $[17] || ($[17] = y("label", { for: "dataflow-new-input" }, "New Input", -1))
            ]),
            y("div", Rh, [
              rt(y("input", {
                type: "radio",
                id: "dataflow-existing-input",
                name: "input",
                "onUpdate:modelValue": $[4] || ($[4] = (B) => p.value = B),
                value: !0,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [Br, p.value]
              ]),
              $[18] || ($[18] = y("label", { for: "dataflow-existing-input" }, "Existing Input", -1))
            ])
          ]),
          p.value ? Ge("", !0) : rt((ue(), ye("input", {
            key: 0,
            "aria-label": "New Input Name",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": $[5] || ($[5] = (B) => u.value.inputName = B)
          }, null, 512)), [
            [Or, u.value.inputName]
          ]),
          p.value ? rt((ue(), ye("select", {
            key: 1,
            "aria-label": "Existing Input Name Select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": $[6] || ($[6] = (B) => u.value.inputName = B)
          }, [
            (ue(!0), ye(Ke, null, Ct(m.value, (B) => (ue(), ye("option", {
              key: B,
              value: B
            }, le(B), 9, Th))), 128))
          ], 512)), [
            [yn, u.value.inputName]
          ]) : Ge("", !0)
        ]),
        y("div", Ch, [
          $[20] || ($[20] = y("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          rt(y("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": $[7] || ($[7] = (B) => u.value.inputInstance = B)
          }, null, 512), [
            [Or, u.value.inputInstance]
          ])
        ]),
        $[25] || ($[25] = y("hr", { class: "solid mt-4" }, null, -1)),
        y("div", Eh, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": $[8] || ($[8] = (B) => u.value.includeQuality = B),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [To, u.value.includeQuality]
          ]),
          $[21] || ($[21] = y("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        y("div", Oh, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": $[9] || ($[9] = (B) => u.value.includeTimestamp = B),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [To, u.value.includeTimestamp]
          ]),
          $[22] || ($[22] = y("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        y("div", Ih, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": $[10] || ($[10] = (B) => k.value = B),
            class: "checkbox mr-2",
            id: "dataflow-checkbox-add-references"
          }, null, 512), [
            [To, k.value]
          ]),
          $[23] || ($[23] = y("label", { for: "dataflow-checkbox-add-references" }, "Add References to Application", -1))
        ]),
        $[26] || ($[26] = y("div", { class: "modal-action" }, [
          y("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            type: "submit",
            "data-testId": "save-dataflow-connection"
          }, " Save ")
        ], -1))
      ], 32)
    ], 64));
  }
}), Dh = { class: "grid grid-cols-2 gap-4 mt-4" }, Sh = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Ph = ["value"], Lh = { class: "grid grid-cols-2 gap-4 mt-4" }, kh = ["value", "title"], jh = { class: "grid grid-cols-2 gap-4 mt-4" }, Fh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Mh = ["value"], $h = { class: "grid grid-cols-2 gap-4 mt-4" }, Bh = { class: "flex items-center" }, Kh = { class: "flex items-center" }, qh = ["value"], Uh = { class: "grid grid-cols-2 gap-4 mt-4" }, Vh = { class: "mt-4 flex items-center" }, Wh = /* @__PURE__ */ Ot({
  __name: "dataflow-controlled-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {}
  },
  setup(t) {
    const r = t, i = Qn(), s = St(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(
      S()
    ), p = $e(!1), m = $e([]), k = $e(!0);
    Ko(async () => {
      m.value = await d.value.findExistingOutputs(r.sourceLNode);
    }), Ut(p, (X) => {
      X ? u.value.outputName = "" : u.value.outputName = u.value.controlledSignal;
    }), Ut(
      () => u.value.outputName,
      async (X) => {
        const W = await d.value.calculateNextOutputInstance(
          X,
          r.sourceLNode
        );
        u.value.outputInstance = W.toString();
      }
    ), Ut(
      () => u.value.controlledSignal,
      (X, W) => {
        const G = u.value.outputName !== W && u.value.outputName !== "";
        !p.value && !G && (u.value.outputName = X);
      }
    );
    const O = Ye(() => r.destinationLNode ? c.value.find((W) => W.typeId === r.destinationLNode.lnType)?.dataObjects.map((W) => ({
      name: W.name,
      desc: W.desc
    })).sort((W, G) => W.name.localeCompare(G.name)) ?? [] : []);
    function S() {
      return {
        type: tt.CONTROL,
        controlledSignal: "",
        outputName: "",
        outputInstance: ""
      };
    }
    async function L() {
      try {
        if (!Y(u.value))
          return;
        await d.value.createControlledConnection(
          u.value,
          r.sourceLNode,
          r.destinationLNode,
          k.value
        ), i.handleClose();
      } catch (X) {
        console.error("Error creating controlled dataflow:", X), alert(`Error creating controlled dataflow: ${X instanceof Error ? X.message : "Unknown error"}`);
      }
    }
    function Y(X) {
      return X.type ? X.outputName ? X.controlledSignal ? !0 : (alert("Please select a controlled signal (DO)."), !1) : (alert("Please select an controller output name."), !1) : (alert("Please select a dataflow type."), !1);
    }
    return (X, W) => (ue(), ye(Ke, null, [
      W[16] || (W[16] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", Dh, [
        W[7] || (W[7] = y("label", {
          for: "destination-select",
          class: "col-start-1 self-center"
        }, "Controlled", -1)),
        y("select", Sh, [
          y("option", {
            value: r.destinationLNode.id
          }, le(Se(Mi)(X.destinationLNode)), 9, Ph)
        ])
      ]),
      y("div", Lh, [
        W[9] || (W[9] = y("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Controlled Signal (DO)", -1)),
        rt(y("select", {
          id: "data-object-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": W[0] || (W[0] = (G) => u.value.controlledSignal = G)
        }, [
          W[8] || (W[8] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(O.value, (G) => (ue(), ye("option", {
            key: G.name,
            value: G.name,
            title: G.desc ? `Desc: ${G.desc}` : ""
          }, le(G.desc ? G.name + " ⓘ" : G.name), 9, kh))), 128))
        ], 512), [
          [yn, u.value.controlledSignal]
        ])
      ]),
      W[17] || (W[17] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", jh, [
        W[10] || (W[10] = y("label", {
          for: "source-select",
          class: "col-start-1 self-center"
        }, "Controller", -1)),
        y("select", Fh, [
          y("option", {
            value: r.sourceLNode.id
          }, le(Se(Mi)(X.sourceLNode)), 9, Mh)
        ])
      ]),
      y("div", $h, [
        y("fieldset", null, [
          W[13] || (W[13] = y("legend", { class: "col-start-1 self-start" }, "Controller Output Name", -1)),
          y("div", Bh, [
            rt(y("input", {
              type: "radio",
              id: "dataflow-control-new-output",
              name: "output",
              "onUpdate:modelValue": W[1] || (W[1] = (G) => p.value = G),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Br, p.value]
            ]),
            W[11] || (W[11] = y("label", { for: "dataflow-control-new-output" }, "New Output", -1))
          ]),
          y("div", Kh, [
            rt(y("input", {
              type: "radio",
              id: "dataflow-control-existing-output",
              name: "output",
              "onUpdate:modelValue": W[2] || (W[2] = (G) => p.value = G),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Br, p.value]
            ]),
            W[12] || (W[12] = y("label", { for: "dataflow-control-existing-output" }, "Existing Output", -1))
          ])
        ]),
        p.value ? Ge("", !0) : rt((ue(), ye("input", {
          key: 0,
          "aria-label": "New Output Name",
          required: "",
          type: "text",
          placeholder: "Output Name",
          class: "input col-start-2",
          "onUpdate:modelValue": W[3] || (W[3] = (G) => u.value.outputName = G)
        }, null, 512)), [
          [Or, u.value.outputName]
        ]),
        p.value ? rt((ue(), ye("select", {
          key: 1,
          "aria-label": "Existing Output Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": W[4] || (W[4] = (G) => u.value.outputName = G)
        }, [
          (ue(!0), ye(Ke, null, Ct(m.value, (G) => (ue(), ye("option", {
            key: G,
            value: G
          }, le(G), 9, qh))), 128))
        ], 512)), [
          [yn, u.value.outputName]
        ]) : Ge("", !0)
      ]),
      y("div", Uh, [
        W[14] || (W[14] = y("label", {
          for: "output-instance-input",
          class: "col-start-1 self-center"
        }, "Output Instance", -1)),
        rt(y("input", {
          id: "output-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": W[5] || (W[5] = (G) => u.value.outputInstance = G)
        }, null, 512), [
          [Or, u.value.outputInstance]
        ])
      ]),
      y("div", Vh, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": W[6] || (W[6] = (G) => k.value = G),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [To, k.value]
        ]),
        W[15] || (W[15] = y("label", { for: "dataflow-control-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      W[18] || (W[18] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", { class: "modal-action" }, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: L,
          "data-testId": "save-dataflow-connection"
        }, " Save ")
      ])
    ], 64));
  }
}), Gh = { class: "grid grid-cols-2 gap-4 mt-4" }, Hh = ["value", "disabled"], Yh = /* @__PURE__ */ Ot({
  __name: "dataflow-creation",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, i = $e(
      r.sourcePlaceholder && r.sourcePlaceholder.dataflowType ? r.sourcePlaceholder.dataflowType : null
    ), s = Ye(
      () => Object.values(tt).filter((u) => u !== tt.INTERNAL)
    ), c = Ye(
      () => r.sourceLNode?.lnClass === "IHMI" || r.sourceLNode?.lnClass === "ITCI"
    );
    function d(u) {
      const p = u.target.value;
      i.value = p;
    }
    return (u, p) => (ue(), ye(Ke, null, [
      p[3] || (p[3] = y("h3", { class: "font-bold text-lg" }, "Create Dataflow", -1)),
      y("div", Gh, [
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
          (ue(!0), ye(Ke, null, Ct(s.value, (m) => (ue(), ye("option", {
            key: m,
            value: m,
            disabled: m === Se(tt).CONTROL && !c.value
          }, le(m), 9, Hh))), 128))
        ], 544), [
          [yn, i.value]
        ])
      ]),
      i.value !== Se(tt).CONTROL ? (ue(), en(Ah, {
        key: 0,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: i.value,
        sourcePlaceholder: u.sourcePlaceholder
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType", "sourcePlaceholder"])) : (ue(), en(Wh, {
        key: 1,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: i.value
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType"]))
    ], 64));
  }
}), Xh = { class: "grid grid-cols-2 gap-4 items-center" }, zh = { class: "grid grid-cols-2 gap-4 items-center" }, Qh = ["value", "disabled"], Jh = { class: "grid grid-cols-2 gap-4 items-center" }, Zh = ["value", "title"], em = { class: "grid grid-cols-2 gap-4 items-center" }, tm = ["value", "title"], nm = { class: "grid grid-cols-2 gap-4 items-center" }, rm = { class: "grid grid-cols-2 gap-4 items-center" }, om = ["value"], im = { class: "flex items-center" }, am = /* @__PURE__ */ Ot({
  __name: "source-placeholder-port-creation",
  props: {
    sourceLNode: {}
  },
  setup(t) {
    const r = t, i = Qn(), s = St(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(
      Y()
    ), p = $e(!0);
    async function m(W) {
      try {
        await d.value.createSourcePlaceholder(
          r.sourceLNode,
          u.value,
          p.value
        ), i.handleClose();
      } catch (G) {
        console.error("Error creating source placeholder port:", G), alert(`Error creating placeholder: ${G instanceof Error ? G.message : "Unknown error"}`);
      }
    }
    const k = Ye(
      () => [...c.value].sort((W, G) => W.lnClass.localeCompare(G.lnClass))
    ), O = Ye(
      () => Object.values(tt).filter((W) => W !== tt.INTERNAL)
    ), S = Ye(() => {
      const W = c.value.find((G) => G.typeId === r.sourceLNode.lnType);
      return W ? u.value.dataflowType ? W.dataObjects.filter(
        (G) => G.dataAttributes.some(
          (V) => $o[u.value.dataflowType].includes(
            V.fc
          )
        )
      ).sort((G, V) => G.name.localeCompare(V.name)) : W.dataObjects.sort((G, V) => G.name.localeCompare(V.name)) : [];
    }), L = Ye(() => {
      const W = c.value.find((G) => G.typeId === r.sourceLNode.lnType)?.dataObjects.find((G) => G.name === u.value.dataObject);
      return W ? u.value.dataflowType ? W.dataAttributes.filter(
        (G) => $o[u.value.dataflowType].includes(
          G.fc
        )
      ).filter((G) => !Fi.includes(G.name)).sort((G, V) => G.name.localeCompare(V.name)) : W.dataAttributes.filter((G) => !Fi.includes(G.name)).sort((G, V) => G.name.localeCompare(V.name)) : [];
    });
    function Y() {
      return {
        dataObject: "",
        dataAttribute: "",
        inputName: "",
        dataflowType: "",
        processResource: "",
        preferredLNode: ""
      };
    }
    function X(W) {
      for (const G of W)
        u.value[G] = "";
    }
    return (W, G) => (ue(), ye("form", {
      onSubmit: m,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      G[20] || (G[20] = y("h3", { class: "font-bold text-lg" }, "Create Placeholder - Provide data", -1)),
      y("div", Xh, [
        G[9] || (G[9] = y("label", { for: "input-name" }, "Input Name", -1)),
        rt(y("input", {
          required: "",
          id: "input-name",
          name: "inputName",
          "onUpdate:modelValue": G[0] || (G[0] = (V) => u.value.inputName = V),
          placeholder: "Input Name",
          class: "input col-start-2"
        }, null, 512), [
          [Or, u.value.inputName]
        ])
      ]),
      y("div", zh, [
        G[11] || (G[11] = y("label", { for: "dataflow-type-select" }, "Dataflow Type", -1)),
        rt(y("select", {
          id: "dataflow-type-select",
          name: "dataflowType",
          class: "select col-start-2",
          "onUpdate:modelValue": G[1] || (G[1] = (V) => u.value.dataflowType = V),
          onChange: G[2] || (G[2] = (V) => X(["dataObject", "dataAttribute"]))
        }, [
          G[10] || (G[10] = y("option", { value: "" }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(O.value, (V) => (ue(), ye("option", {
            key: V,
            value: V,
            disabled: V === Se(tt).CONTROL
          }, le(V), 9, Qh))), 128))
        ], 544), [
          [yn, u.value.dataflowType]
        ])
      ]),
      y("div", Jh, [
        G[13] || (G[13] = y("label", { for: "data-object-select" }, "Data Object", -1)),
        rt(y("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": G[3] || (G[3] = (V) => u.value.dataObject = V),
          onChange: G[4] || (G[4] = (V) => X(["dataAttribute"]))
        }, [
          G[12] || (G[12] = y("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(S.value, (V) => (ue(), ye("option", {
            key: V.id,
            value: V.name,
            title: V.desc ? `Desc: ${V.desc}` : ""
          }, le(V.desc ? V.name + " ⓘ" : V.name), 9, Zh))), 128))
        ], 544), [
          [yn, u.value.dataObject]
        ])
      ]),
      y("div", em, [
        G[15] || (G[15] = y("label", { for: "data-attribute-select" }, "Data Attribute", -1)),
        rt(y("select", {
          required: "",
          id: "data-attribute-select",
          name: "data attribute",
          "onUpdate:modelValue": G[5] || (G[5] = (V) => u.value.dataAttribute = V),
          class: "select col-start-2"
        }, [
          G[14] || (G[14] = y("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(L.value, (V) => (ue(), ye("option", {
            key: V.id,
            value: V.name,
            title: V.desc ? `Desc: ${V.desc}` : ""
          }, le(V.desc ? V.name + " ⓘ" : V.name), 9, tm))), 128))
        ], 512), [
          [yn, u.value.dataAttribute]
        ])
      ]),
      y("div", nm, [
        G[16] || (G[16] = y("label", { for: "process-resource-input" }, "Process Resource", -1)),
        rt(y("input", {
          id: "process-resource-input",
          name: "processResource",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": G[6] || (G[6] = (V) => u.value.processResource = V)
        }, null, 512), [
          [Or, u.value.processResource]
        ])
      ]),
      y("div", rm, [
        G[18] || (G[18] = y("label", { for: "preferred-lnode-select" }, "Preferred LNode", -1)),
        rt(y("select", {
          id: "preferred-lnode-select",
          name: "preferredLNode",
          class: "select col-start-2",
          "onUpdate:modelValue": G[7] || (G[7] = (V) => u.value.preferredLNode = V)
        }, [
          G[17] || (G[17] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(k.value, (V) => (ue(), ye("option", {
            key: V.lnClass,
            value: V.lnClass
          }, le(V.lnClass), 9, om))), 128))
        ], 512), [
          [yn, u.value.preferredLNode]
        ])
      ]),
      y("div", im, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": G[8] || (G[8] = (V) => p.value = V),
          class: "checkbox mr-2",
          id: "source-placeholder-checkbox-add-references"
        }, null, 512), [
          [To, p.value]
        ]),
        G[19] || (G[19] = y("label", { for: "source-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      G[21] || (G[21] = y("div", { class: "modal-action" }, [
        y("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), sm = { class: "grid grid-cols-2 gap-4 mt-4" }, lm = { class: "flex items-center" }, um = { class: "flex items-center" }, cm = ["value"], fm = { class: "grid grid-cols-2 gap-4 mt-4" }, dm = { class: "grid grid-cols-2 gap-4 mt-4" }, pm = ["value", "disabled"], hm = { class: "grid grid-cols-2 gap-4 mt-4" }, mm = ["value"], vm = { class: "grid grid-cols-2 gap-4 mt-4" }, ym = ["value", "title"], gm = { class: "grid grid-cols-2 gap-4 mt-4" }, bm = ["value", "title"], wm = { class: "grid grid-cols-2 gap-4 mt-4" }, _m = { class: "mt-4 flex items-center" }, xm = /* @__PURE__ */ Ot({
  __name: "destination-placeholder-port-creation",
  props: {
    destinationLNode: {}
  },
  setup(t) {
    const r = t, i = Qn(), s = St(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(
      X()
    ), p = $e(!0), m = $e(!1), k = $e([]);
    Ko(async () => {
      k.value = await d.value.findExistingInputs(r.destinationLNode);
    }), Ut(m, () => {
      u.value.inputName = "";
    }), Ut(
      [
        () => u.value.inputName,
        () => u.value.preferredDataAttribute
      ],
      async ([V, $]) => {
        if (!V) {
          u.value.inputInstance = "";
          return;
        }
        const B = await d.value.calculateNextInputInstance(
          V,
          $,
          r.destinationLNode
        );
        u.value.inputInstance = B.toString();
      }
    );
    const O = Ye(
      () => Object.values(tt).filter((V) => V !== tt.INTERNAL)
    ), S = Ye(
      () => [...c.value].sort((V, $) => V.lnClass.localeCompare($.lnClass))
    ), L = Ye(() => {
      const V = c.value.find(
        ($) => $.lnClass === u.value.preferredLNode
      );
      return V ? u.value.dataflowType ? V.dataObjects.filter(
        ($) => $.dataAttributes.some(
          (B) => $o[u.value.dataflowType].includes(B.fc)
        )
      ).map(($) => ({
        name: $.name,
        desc: $.desc
      })).sort(($, B) => $.name.localeCompare(B.name)) : V.dataObjects.map(($) => ({
        name: $.name,
        desc: $.desc
      })).sort(($, B) => $.name.localeCompare(B.name)) : [];
    }), Y = Ye(() => {
      const V = c.value.find(
        (B) => B.lnClass === u.value.preferredLNode
      );
      if (!V) return [];
      const $ = V.dataObjects.find(
        (B) => B.name === u.value.preferredDataObject
      );
      return $ ? u.value.dataflowType ? $.dataAttributes.filter(
        (B) => $o[u.value.dataflowType].includes(B.fc)
      ).filter((B) => !Fi.includes(B.name)).sort((B, ee) => B.name.localeCompare(ee.name)) : $.dataAttributes.filter((B) => !Fi.includes(B.name)).sort((B, ee) => B.name.localeCompare(ee.name)) : [];
    });
    function X() {
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
    async function W() {
      try {
        await d.value.createDestinationPlaceholder(
          u.value,
          r.destinationLNode,
          p.value
        ), i.handleClose();
      } catch (V) {
        console.error("Error creating destination placeholder port:", V), alert(`Error creating placeholder: ${V instanceof Error ? V.message : "Unknown error"}`);
      }
    }
    function G(V) {
      for (const $ of V)
        u.value[$] = "";
    }
    return (V, $) => (ue(), ye("form", {
      method: "dialog",
      onSubmit: W
    }, [
      $[28] || ($[28] = y("h3", { class: "font-bold text-lg" }, "Create Placeholder - Receive data from", -1)),
      y("div", sm, [
        y("fieldset", null, [
          $[16] || ($[16] = y("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
          y("div", lm, [
            rt(y("input", {
              type: "radio",
              id: "destination-placeholder-new-input",
              name: "input",
              "onUpdate:modelValue": $[0] || ($[0] = (B) => m.value = B),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Br, m.value]
            ]),
            $[14] || ($[14] = y("label", { for: "destination-placeholder-new-input" }, "New Input", -1))
          ]),
          y("div", um, [
            rt(y("input", {
              type: "radio",
              id: "destination-placeholder-existing-input",
              name: "input",
              "onUpdate:modelValue": $[1] || ($[1] = (B) => m.value = B),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Br, m.value]
            ]),
            $[15] || ($[15] = y("label", { for: "destination-placeholder-existing-input" }, "Existing Input", -1))
          ])
        ]),
        m.value ? Ge("", !0) : rt((ue(), ye("input", {
          key: 0,
          "aria-label": "New Input Name",
          required: "",
          type: "text",
          placeholder: "Input Name",
          class: "input col-start-2",
          "onUpdate:modelValue": $[2] || ($[2] = (B) => u.value.inputName = B)
        }, null, 512)), [
          [Or, u.value.inputName]
        ]),
        m.value ? rt((ue(), ye("select", {
          key: 1,
          "aria-label": "Existing Input Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": $[3] || ($[3] = (B) => u.value.inputName = B)
        }, [
          (ue(!0), ye(Ke, null, Ct(k.value, (B) => (ue(), ye("option", {
            key: B,
            value: B
          }, le(B), 9, cm))), 128))
        ], 512)), [
          [yn, u.value.inputName]
        ]) : Ge("", !0)
      ]),
      y("div", fm, [
        $[17] || ($[17] = y("label", {
          for: "input-instance-input",
          class: "col-start-1 self-center"
        }, "Input Instance", -1)),
        rt(y("input", {
          id: "input-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": $[4] || ($[4] = (B) => u.value.inputInstance = B)
        }, null, 512), [
          [Or, u.value.inputInstance]
        ])
      ]),
      y("div", dm, [
        $[19] || ($[19] = y("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        rt(y("select", {
          id: "dataflow-type-select",
          class: "select col-start-2",
          "onUpdate:modelValue": $[5] || ($[5] = (B) => u.value.dataflowType = B),
          onChange: $[6] || ($[6] = (B) => G(["preferredDataObject"]))
        }, [
          $[18] || ($[18] = y("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(O.value, (B) => (ue(), ye("option", {
            key: B,
            value: B,
            disabled: B === Se(tt).CONTROL
          }, le(B), 9, pm))), 128))
        ], 544), [
          [yn, u.value.dataflowType]
        ])
      ]),
      y("div", hm, [
        $[21] || ($[21] = y("label", {
          for: "preferred-lnode-select",
          class: "col-start-1 self-center"
        }, "Preferred LNode", -1)),
        rt(y("select", {
          id: "preferred-lnode-select",
          class: "select col-start-2",
          "onUpdate:modelValue": $[7] || ($[7] = (B) => u.value.preferredLNode = B),
          onChange: $[8] || ($[8] = (B) => G(["preferredDataObject"]))
        }, [
          $[20] || ($[20] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(S.value, (B) => (ue(), ye("option", {
            key: B.id,
            value: B.lnClass
          }, le(B.lnClass), 9, mm))), 128))
        ], 544), [
          [yn, u.value.preferredLNode]
        ])
      ]),
      y("div", vm, [
        $[23] || ($[23] = y("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Object", -1)),
        rt(y("select", {
          id: "data-object-select",
          class: "select col-start-2",
          "onUpdate:modelValue": $[9] || ($[9] = (B) => u.value.preferredDataObject = B),
          onChange: $[10] || ($[10] = (B) => G(["preferredDataAttribute"]))
        }, [
          $[22] || ($[22] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(L.value, (B) => (ue(), ye("option", {
            key: B.name,
            value: B.name,
            title: B.desc ? `Desc: ${B.desc}` : ""
          }, le(B.desc ? B.name + " ⓘ" : B.name), 9, ym))), 128))
        ], 544), [
          [yn, u.value.preferredDataObject]
        ])
      ]),
      y("div", gm, [
        $[25] || ($[25] = y("label", {
          for: "data-attribute-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Attribute", -1)),
        rt(y("select", {
          id: "data-attribute-select",
          class: "select col-start-2",
          "onUpdate:modelValue": $[11] || ($[11] = (B) => u.value.preferredDataAttribute = B)
        }, [
          $[24] || ($[24] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ue(!0), ye(Ke, null, Ct(Y.value, (B) => (ue(), ye("option", {
            key: B.name,
            value: B.name,
            title: B.desc ? `Desc: ${B.desc}` : ""
          }, le(B.desc ? B.name + " ⓘ" : B.name), 9, bm))), 128))
        ], 512), [
          [yn, u.value.preferredDataAttribute]
        ])
      ]),
      y("div", wm, [
        $[26] || ($[26] = y("label", {
          for: "process-resource-input",
          class: "col-start-1 self-center"
        }, "Process Resource", -1)),
        rt(y("input", {
          id: "process-resource-input",
          type: "text",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": $[12] || ($[12] = (B) => u.value.processResource = B)
        }, null, 512), [
          [Or, u.value.processResource]
        ])
      ]),
      y("div", _m, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": $[13] || ($[13] = (B) => p.value = B),
          class: "checkbox mr-2",
          id: "destination-placeholder-checkbox-add-references"
        }, null, 512), [
          [To, p.value]
        ]),
        $[27] || ($[27] = y("label", { for: "destination-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      $[29] || ($[29] = y("div", { class: "modal-action" }, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          type: "submit"
        }, "Save")
      ], -1))
    ], 32));
  }
}), Nm = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_80px]" }, Rm = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Tm = { class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-center" }, Cm = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Em = { class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-center" }, Om = { class: "col-span-full row-start-3" }, Im = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] h-[50px]" }, Am = { class: "col-start-1 col-span-1 self-center justify-self-end" }, Dm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Sm = { class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1" }, Pm = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Lm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Qi = /* @__PURE__ */ Ot({
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
    return (r, i) => (ue(), ye("div", Nm, [
      i[2] || (i[2] = y("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3" }, null, -1)),
      y("div", Rm, le(r.sendingSecondaryLabel), 1),
      y("div", Tm, le(r.sendingPrimaryLabel), 1),
      i[3] || (i[3] = y("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3" }, null, -1)),
      y("div", Cm, le(r.receivingSecondaryLabel), 1),
      y("div", Em, le(r.receivingPrimaryLabel), 1),
      y("div", Om, [
        y("div", Im, [
          y("div", Am, [
            (ue(!0), ye(Ke, null, Ct(r.sendingPortLabels, (s) => (ue(), ye("span", Dm, le(s), 1))), 256))
          ]),
          i[0] || (i[0] = cc('<div class="rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] bg-(--color-ocean-gray-100)"></div><div class="col-start-3 col-span-1 row-start-1 flex items-center"><div class="border h-[2px] w-full border-(--color-ocean-gray-100) border-solid"></div></div><svg height="12" width="8" class="col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 8,6 0,12" style="fill:var(--color-ocean-gray-100);"></polygon></svg>', 3)),
          y("div", Sm, le(r.dataflowType), 1),
          i[1] || (i[1] = y("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] bg-(--color-ocean-gray-100)" }, null, -1)),
          y("div", Pm, [
            (ue(!0), ye(Ke, null, Ct(r.receivingPortLabels, (s) => (ue(), ye("span", Lm, le(s), 1))), 256))
          ])
        ])
      ])
    ]));
  }
}), km = { class: "bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 p-3" }, jm = { class: "text-center text-xs mb-4" }, Fm = { class: "flex flex-col justify-between gap-4" }, Mm = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-3 p-3" }, $m = { class: "text-center mb-4" }, Bm = { key: 0 }, Km = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, qm = { class: "collapse collapse-arrow mt-2" }, Um = { class: "collapse-content text-sm px-5 pt-1" }, Vm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Wm = { key: 1 }, Gm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Hm = { class: "collapse collapse-arrow mt-2" }, Ym = { class: "collapse-content text-sm px-5 pt-1" }, Xm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, zm = { class: "collapse collapse-arrow mt-2" }, Qm = { class: "collapse-content text-sm px-5 pt-1" }, Jm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Zm = { key: 2 }, ev = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, tv = { class: "collapse collapse-arrow mt-2" }, nv = { class: "collapse-content text-sm px-5 pt-1" }, rv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, ov = { class: "collapse collapse-arrow mt-2" }, iv = { class: "collapse-content text-sm px-5 pt-1" }, av = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, sv = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-3 p-3" }, lv = { class: "text-center" }, uv = /* @__PURE__ */ Ot({
  __name: "dataflow-implementation-details",
  props: {
    dataflowType: {},
    ldInst: {},
    controlBlock: {},
    dataSet: {},
    ln0Path: {}
  },
  setup(t) {
    const r = t, i = St(), { dataflowSdk: s } = Ft(i), c = $e(), d = $e(), u = $e();
    return Ca(async () => {
      r.dataflowType === tt.GOOSE ? c.value = await s.value.findGseControlBlockDetails(
        r.controlBlock.id,
        r.ldInst
      ) : r.dataflowType === tt.SMV ? d.value = await s.value.findSmvControlBlockDetails(
        r.controlBlock.id,
        r.ldInst
      ) : r.dataflowType === tt.REPORT && (u.value = await s.value.findReportControlBlockDetails(
        r.controlBlock.id
      ));
    }), (p, m) => (ue(), ye("div", km, [
      y("div", jm, le(p.ln0Path), 1),
      y("div", Fm, [
        y("div", Mm, [
          y("div", $m, le(p.controlBlock.name), 1),
          c.value ? (ue(), ye("div", Bm, [
            y("dl", Km, [
              m[0] || (m[0] = y("dt", null, "App ID:", -1)),
              y("dd", null, le(c.value.appId), 1),
              m[1] || (m[1] = y("dt", null, "ConfRev:", -1)),
              y("dd", null, le(p.controlBlock.confRev), 1)
            ]),
            y("details", qm, [
              m[6] || (m[6] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              y("div", Um, [
                y("dl", Vm, [
                  m[2] || (m[2] = y("dt", null, "MAC Address:", -1)),
                  y("dd", null, le(c.value.communicationDetails.macAddress), 1),
                  m[3] || (m[3] = y("dt", null, "App ID:", -1)),
                  y("dd", null, le(c.value.communicationDetails.appId), 1),
                  m[4] || (m[4] = y("dt", null, "VLAN ID:", -1)),
                  y("dd", null, le(c.value.communicationDetails.vlanId), 1),
                  m[5] || (m[5] = y("dt", null, "VLAN Priority:", -1)),
                  y("dd", null, le(c.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : Ge("", !0),
          d.value ? (ue(), ye("div", Wm, [
            y("dl", Gm, [
              m[7] || (m[7] = y("dt", null, "SMV ID:", -1)),
              y("dd", null, le(d.value.smvId), 1),
              m[8] || (m[8] = y("dt", null, "ConfRev:", -1)),
              y("dd", null, le(p.controlBlock.confRev), 1),
              m[9] || (m[9] = y("dt", null, "Multicast:", -1)),
              y("dd", null, le(d.value.multicast), 1),
              m[10] || (m[10] = y("dt", null, "NofASDU:", -1)),
              y("dd", null, le(d.value.nofAsdu), 1),
              m[11] || (m[11] = y("dt", null, "SmpMod:", -1)),
              y("dd", null, le(d.value.smpMod), 1),
              m[12] || (m[12] = y("dt", null, "SmpRate:", -1)),
              y("dd", null, le(d.value.smpRate), 1)
            ]),
            y("details", Hm, [
              m[19] || (m[19] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "SmvOpts", -1)),
              y("div", Ym, [
                y("dl", Xm, [
                  m[13] || (m[13] = y("dt", null, "RefreshTime:", -1)),
                  y("dd", null, le(d.value.smvOpts.refreshTime), 1),
                  m[14] || (m[14] = y("dt", null, "SampleSynchronized:", -1)),
                  y("dd", null, le(d.value.smvOpts.sampleSynchronized), 1),
                  m[15] || (m[15] = y("dt", null, "SampleRate:", -1)),
                  y("dd", null, le(d.value.smvOpts.sampleRate), 1),
                  m[16] || (m[16] = y("dt", null, "DataSet:", -1)),
                  y("dd", null, le(d.value.smvOpts.dataSet), 1),
                  m[17] || (m[17] = y("dt", null, "Security:", -1)),
                  y("dd", null, le(d.value.smvOpts.security), 1),
                  m[18] || (m[18] = y("dt", null, "SynchSourceId:", -1)),
                  y("dd", null, le(d.value.smvOpts.synchSourceId), 1)
                ])
              ])
            ]),
            y("details", zm, [
              m[24] || (m[24] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              y("div", Qm, [
                y("dl", Jm, [
                  m[20] || (m[20] = y("dt", null, "MAC Address:", -1)),
                  y("dd", null, le(d.value.communicationDetails.macAddress), 1),
                  m[21] || (m[21] = y("dt", null, "App ID:", -1)),
                  y("dd", null, le(d.value.communicationDetails.appId), 1),
                  m[22] || (m[22] = y("dt", null, "VLAN ID:", -1)),
                  y("dd", null, le(d.value.communicationDetails.vlanId), 1),
                  m[23] || (m[23] = y("dt", null, "VLAN Priority:", -1)),
                  y("dd", null, le(d.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : Ge("", !0),
          u.value ? (ue(), ye("div", Zm, [
            y("dl", ev, [
              m[25] || (m[25] = y("dt", null, "RPT ID:", -1)),
              y("dd", null, le(u.value.rptId), 1),
              m[26] || (m[26] = y("dt", null, "ConfRev:", -1)),
              y("dd", null, le(p.controlBlock.confRev), 1),
              m[27] || (m[27] = y("dt", null, "Buffered:", -1)),
              y("dd", null, le(u.value.buffered), 1)
            ]),
            y("details", tv, [
              m[33] || (m[33] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "TrgOps", -1)),
              y("div", nv, [
                y("dl", rv, [
                  m[28] || (m[28] = y("dt", null, "Dchg:", -1)),
                  y("dd", null, le(u.value.trgOps.dchg), 1),
                  m[29] || (m[29] = y("dt", null, "Dupd:", -1)),
                  y("dd", null, le(u.value.trgOps.dupd), 1),
                  m[30] || (m[30] = y("dt", null, "Gi:", -1)),
                  y("dd", null, le(u.value.trgOps.gi), 1),
                  m[31] || (m[31] = y("dt", null, "Period:", -1)),
                  y("dd", null, le(u.value.trgOps.period), 1),
                  m[32] || (m[32] = y("dt", null, "Qchg:", -1)),
                  y("dd", null, le(u.value.trgOps.qchg), 1)
                ])
              ])
            ]),
            y("details", ov, [
              m[42] || (m[42] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "OptFields", -1)),
              y("div", iv, [
                y("dl", av, [
                  m[34] || (m[34] = y("dt", null, "BufOvfl:", -1)),
                  y("dd", null, le(u.value.optFields.bufOvfl), 1),
                  m[35] || (m[35] = y("dt", null, "ConfigRef:", -1)),
                  y("dd", null, le(u.value.optFields.configRef), 1),
                  m[36] || (m[36] = y("dt", null, "DataRef:", -1)),
                  y("dd", null, le(u.value.optFields.dataRef), 1),
                  m[37] || (m[37] = y("dt", null, "DataSet:", -1)),
                  y("dd", null, le(u.value.optFields.dataSet), 1),
                  m[38] || (m[38] = y("dt", null, "EntryID:", -1)),
                  y("dd", null, le(u.value.optFields.entryId), 1),
                  m[39] || (m[39] = y("dt", null, "ReasonCode:", -1)),
                  y("dd", null, le(u.value.optFields.reasonCode), 1),
                  m[40] || (m[40] = y("dt", null, "SeqNum:", -1)),
                  y("dd", null, le(u.value.optFields.seqNum), 1),
                  m[41] || (m[41] = y("dt", null, "TimeStamp:", -1)),
                  y("dd", null, le(u.value.optFields.timeStamp), 1)
                ])
              ])
            ])
          ])) : Ge("", !0)
        ]),
        y("div", sv, [
          y("div", lv, le(p.dataSet.name), 1)
        ])
      ])
    ]));
  }
}), cv = { class: "font-bold text-lg mb-4" }, fv = { key: 0 }, dv = { key: 1 }, pv = {
  key: 4,
  class: "modal-action"
}, hv = /* @__PURE__ */ Ot({
  __name: "dataflow-implementation",
  props: {
    connection: {},
    extRef: {}
  },
  setup(t) {
    const r = t, i = Qn(), s = St(), { dataflowSdk: c, lnodes: d } = Ft(s), u = $e(""), p = $e(""), m = $e(""), k = $e(), O = $e();
    Ut(
      () => r.extRef,
      async function(te) {
        te && (m.value = await c.value.findPathToExtRef(te.id), te.srcCbName && (k.value = await c.value.findControlBlock(
          te.iedName,
          te.ldInst,
          te.srcCbName
        ), O.value = await c.value.findDataSet(
          te.iedName,
          te.ldInst,
          k.value.datSet
        )));
      },
      { immediate: !0 }
    ), Ut(
      () => r.connection,
      async function(te) {
        Ae(te.sourceLNodeId, "Source LNodeId is undefined"), u.value = await c.value.findPathToLnode(te.sourceLNodeId), p.value = await c.value.findPathToLnode(
          te.destinationLNodeId
        );
      },
      { immediate: !0 }
    );
    const S = Ye(() => u.value.split("/").slice(-1).join("")), L = Ye(() => u.value.split("/").slice(0, -1).join("/")), Y = Ye(() => p.value.split("/").slice(-1).join("")), X = Ye(() => p.value.split("/").slice(0, -1).join("/")), W = Ye(() => {
      if (!r.connection.isImplemented) {
        const fe = d.value.find((te) => te.id === r.connection.sourceLNodeId);
        return Ae(fe, "Sending LNode not found"), `${fe.prefix}${fe.lnClass}${fe.lnInst}`;
      }
      return `${r.extRef?.prefix}${r.extRef?.lnClass}${r.extRef?.lnInst}`;
    }), G = Ye(() => {
      if (!r.connection.isImplemented) {
        const fe = d.value.find((te) => te.id === r.connection.sourceLNodeId);
        return Ae(fe, "Sending LNode not found"), `${fe.iedName}/${fe.ldInst}`;
      }
      return `${r.extRef?.iedName}/${r.extRef?.ldInst}`;
    }), V = Ye(() => m.value.split("/").slice(-2, -1).join("")), $ = Ye(() => m.value.split("/").slice(0, -2).join("/")), B = Ye(() => `${r.extRef?.iedName}/${r.extRef?.srcLdInst}/${r.extRef?.srcPrefix}${r.extRef?.srcLnClass}${r.extRef?.srcLnInst}`);
    async function ee() {
      try {
        if (!r.extRef)
          throw new Error("No matching ExtRef found for dataflow implementation");
        await c.value.implementDataflow(r.connection, r.extRef), i.handleClose();
      } catch (fe) {
        console.error("Error implementing dataflow:", fe), alert(`Error implementing dataflow: ${fe instanceof Error ? fe.message : "Unknown error"}`);
      }
    }
    return (fe, te) => (ue(), ye(Ke, null, [
      y("h3", cv, le(fe.connection.isImplemented ? "Implemented Dataflow Details" : "Implement Dataflow"), 1),
      fe.extRef ? Ge("", !0) : (ue(), ye("p", fv, "No matching ExtRef found for dataflow implementation.")),
      fe.connection.notPossibleToImplement ? (ue(), ye("p", dv, "Sending or receiving LNode is not mapped to a real IED.")) : Ge("", !0),
      fe.extRef && fe.connection.isImplemented ? (ue(), ye(Ke, { key: 2 }, [
        te[0] || (te[0] = y("h3", { class: "mb-4" }, "Specification:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: L.value,
          sendingPrimaryLabel: S.value,
          receivingSecondaryLabel: X.value,
          receivingPrimaryLabel: Y.value,
          dataflowType: fe.connection.dataflowType,
          sendingPortLabels: [fe.connection.sourceDataObject, fe.connection.sourceDataAttribute],
          receivingPortLabels: [fe.connection.input, fe.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        te[1] || (te[1] = y("h3", { class: "mb-4" }, "Implementation:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: G.value,
          sendingPrimaryLabel: W.value,
          receivingSecondaryLabel: $.value,
          receivingPrimaryLabel: V.value,
          dataflowType: fe.extRef.serviceType,
          sendingPortLabels: [fe.extRef.doName, fe.extRef.daName],
          receivingPortLabels: []
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels"]),
        k.value && O.value ? (ue(), en(uv, {
          key: 0,
          controlBlock: k.value,
          dataSet: O.value,
          ln0Path: B.value,
          dataflowType: fe.extRef.serviceType,
          ldInst: fe.extRef.srcLdInst
        }, null, 8, ["controlBlock", "dataSet", "ln0Path", "dataflowType", "ldInst"])) : Ge("", !0)
      ], 64)) : Ge("", !0),
      fe.extRef && !fe.connection.notPossibleToImplement && !fe.connection.isImplemented ? (ue(), ye(Ke, { key: 3 }, [
        te[2] || (te[2] = y("h3", { class: "mb-4" }, "Specification:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: L.value,
          sendingPrimaryLabel: S.value,
          receivingSecondaryLabel: X.value,
          receivingPrimaryLabel: Y.value,
          dataflowType: fe.connection.dataflowType,
          sendingPortLabels: [fe.connection.sourceDataObject, fe.connection.sourceDataAttribute],
          receivingPortLabels: [fe.connection.input, fe.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        te[3] || (te[3] = y("h3", { class: "mb-4" }, "Matching ExtRef to implement:", -1)),
        ht(Qi, {
          sendingSecondaryLabel: G.value,
          sendingPrimaryLabel: W.value,
          receivingSecondaryLabel: $.value,
          receivingPrimaryLabel: V.value,
          dataflowType: fe.extRef.serviceType || fe.extRef.pServT || fe.connection.dataflowType,
          sendingPortLabels: [
            fe.extRef.pDo || fe.connection.sourceDataObject,
            fe.extRef.pDa || fe.connection.sourceDataAttribute
          ],
          receivingPortLabels: []
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels"])
      ], 64)) : Ge("", !0),
      !fe.connection.isImplemented && !fe.connection.notPossibleToImplement ? (ue(), ye("div", pv, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: ee
        }, " Implement ")
      ])) : Ge("", !0)
    ], 64));
  }
});
function mv(t) {
  return Ks() ? (pu(t), !0) : !1;
}
const vv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const yv = () => {
};
function gv(t, r, i = {}) {
  const {
    immediate: s = !0,
    immediateCallback: c = !1
  } = i, d = In(!1);
  let u;
  function p() {
    u && (clearTimeout(u), u = void 0);
  }
  function m() {
    d.value = !1, p();
  }
  function k(...O) {
    c && t(), p(), d.value = !0, u = setTimeout(() => {
      d.value = !1, u = void 0, t(...O);
    }, uf(r));
  }
  return s && (d.value = !0, vv && k()), mv(m), {
    isPending: sf(d),
    start: k,
    stop: m
  };
}
function bv(t, r, i) {
  let s;
  Et(i) ? s = {
    evaluating: i
  } : s = {};
  const {
    lazy: c = !1,
    flush: d = "pre",
    evaluating: u = void 0,
    shallow: p = !0,
    onError: m = yv
  } = s, k = In(!c), O = p ? In(r) : $e(r);
  let S = 0;
  return Ca(async (L) => {
    if (!k.value)
      return;
    S++;
    const Y = S;
    let X = !1;
    u && Promise.resolve().then(() => {
      u.value = !0;
    });
    try {
      const W = await t((G) => {
        L(() => {
          u && (u.value = !1), X || G();
        });
      });
      Y === S && (O.value = W);
    } catch (W) {
      m(W);
    } finally {
      u && Y === S && (u.value = !1), X = !0;
    }
  }, { flush: d }), c ? Ye(() => (k.value = !0, O.value)) : O;
}
const Qn = /* @__PURE__ */ ol("dataflow/dialog-store", () => {
  const t = {
    component: void 0,
    props: void 0
  }, r = $e(), i = $e(t), s = $e(), c = qi({
    DataflowCreation: In(Yh),
    SourcePlaceholderCreation: In(am),
    DestinationPlaceholderCreation: In(xm),
    DataflowImplementation: In(hv)
  });
  function d() {
    i.value = {
      component: void 0,
      props: void 0
    };
  }
  function u() {
    r.value?.close(), gv(() => {
      d();
    }, 300);
  }
  function p(m, k, O) {
    i.value.component = Na(c[m]), i.value.props = k, O && (s.value = O), r.value?.showModal();
  }
  return {
    // states
    dialogRef: r,
    currentDialogContent: i,
    availableDialogContent: c,
    dialogAttributes: s,
    // getters
    // actions
    hardReset: d,
    handleClose: u,
    openDialogWithContent: p
  };
}), wv = ["onClick"], _v = /* @__PURE__ */ Ot({
  __name: "context-menu",
  props: {
    x: {},
    y: {},
    isVisible: { type: Boolean },
    items: {}
  },
  emits: ["close"],
  setup(t, { emit: r }) {
    const i = t, s = r, c = Ye(() => ({
      left: `${i.x}px`,
      top: `${i.y}px`,
      display: i.isVisible ? "flex" : "none"
    }));
    function d(u) {
      u.action(), s("close");
    }
    return (u, p) => (ue(), ye(Ke, null, [
      u.isVisible ? (ue(), ye("div", {
        key: 0,
        class: "menu bg-base-100 rounded-box fixed z-10",
        style: Kr(c.value)
      }, [
        y("ul", null, [
          (ue(!0), ye(Ke, null, Ct(u.items, (m) => (ue(), ye("li", null, [
            y("a", {
              onClick: (k) => d(m)
            }, le(m.label), 9, wv)
          ]))), 256))
        ])
      ], 4)) : Ge("", !0),
      (ue(), en(jo, { to: "body" }, [
        i.isVisible ? (ue(), ye("div", {
          key: 0,
          class: "backdrop",
          onClick: p[0] || (p[0] = pa((m) => u.$emit("close"), ["prevent"])),
          onContextmenu: p[1] || (p[1] = pa((m) => u.$emit("close"), ["prevent"]))
        }, null, 32)) : Ge("", !0)
      ]))
    ], 64));
  }
}), Sa = (t, r) => {
  const i = t.__vccOpts || t;
  for (const [s, c] of r)
    i[s] = c;
  return i;
}, xv = /* @__PURE__ */ Sa(_v, [["__scopeId", "data-v-9cc5b747"]]), Nv = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Rv = ["onClick"], Tv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Cv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Ev = ["onClick"], Ov = ["onClick", "onContextmenu"], Iv = ["data-testid"], Av = ["onClick"], Dv = ["onClick", "onContextmenu"], Sv = ["onClick"], Pv = ["onClick"], Lv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, kv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, jv = /* @__PURE__ */ Ot({
  __name: "dataflow-connections",
  props: {
    connections: {},
    isDataflowImplementationEnabled: { type: Boolean }
  },
  setup(t) {
    const r = t, i = Da(), { activeElement: s } = Ft(i), c = St(), { dataflowSdk: d } = Ft(c), u = Qn(), p = $e(!1), m = $e(0), k = $e(0), O = $e([]), S = [
      tt.GOOSE,
      tt.REPORT,
      tt.SMV
    ], L = Ye(() => [...r.connections].sort(($, B) => $.dataflowType < B.dataflowType ? -1 : $.dataflowType > B.dataflowType ? 1 : 0));
    async function Y($) {
      const B = await d.value.findMatchingExtRef($);
      u.openDialogWithContent(
        "DataflowImplementation",
        {
          extRef: B,
          connection: $
        },
        { class: "w-1/2 max-w-none" }
      );
    }
    function X($) {
      return $ ? S.includes($) : !1;
    }
    function W($, B) {
      !X(B.dataflowType) || !r.isDataflowImplementationEnabled || ($.preventDefault(), G($), O.value = V(B), p.value = !0);
    }
    function G($) {
      m.value = $.clientX, k.value = $.clientY;
    }
    function V($) {
      return [
        {
          label: $.isImplemented ? "Show Implementation" : "Implement",
          action: () => Y($)
        }
      ];
    }
    return ($, B) => (ue(), ye(Ke, null, [
      (ue(!0), ye(Ke, null, Ct(L.value, (ee, fe) => (ue(), ye("div", Nv, [
        y("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer",
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id)
        }, [
          y("span", Tv, le(ee.sourceDataObject), 1),
          y("span", Cv, le(ee.sourceDataAttribute), 1)
        ], 8, Rv),
        y("div", {
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id),
          class: Zt(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": Se(s) === ee.id,
            "bg-(--color-ocean-gray-100)": Se(s) !== ee.id
          }])
        }, null, 10, Ev),
        y("div", {
          class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id),
          onContextmenu: pa((te) => W(te, ee), ["right"])
        }, [
          y("div", {
            class: Zt(["border h-[2px] w-full", {
              "border-(--color-primary)": Se(s) === ee.id,
              "border-(--color-ocean-gray-100)": Se(s) !== ee.id,
              "border-solid": !$.isDataflowImplementationEnabled || ee.isImplemented,
              "border-dashed": $.isDataflowImplementationEnabled && !ee.isImplemented,
              "border-dotted": $.isDataflowImplementationEnabled && ee.notPossibleToImplement
            }]),
            "data-testid": `dataflow-line-${fe}`
          }, null, 10, Iv)
        ], 40, Ov),
        (ue(), ye("svg", {
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id),
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          y("polygon", {
            points: "0,0 8,6 0,12",
            style: Kr({
              fill: Se(s) === ee.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
            })
          }, null, 4)
        ], 8, Av)),
        y("div", {
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id),
          onContextmenu: pa((te) => W(te, ee), ["right"]),
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
        }, le(ee.dataflowType), 41, Dv),
        y("div", {
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id),
          class: Zt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": Se(s) === ee.id,
            "bg-(--color-ocean-gray-100)": Se(s) !== ee.id
          }])
        }, null, 10, Sv),
        y("div", {
          onClick: (te) => Se(i).setOrResetActiveElement(ee.id),
          class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
        }, [
          y("span", Lv, le(ee.input), 1),
          y("span", kv, le(ee.inputInstance), 1)
        ], 8, Pv),
        Se(s) == ee.id && !$.isDataflowImplementationEnabled ? (ue(), en(jo, {
          key: 0,
          to: "#sidebar-details"
        }, [
          ht(ih, { connection: ee }, null, 8, ["connection"])
        ])) : Ge("", !0),
        Se(s) == ee.id && $.isDataflowImplementationEnabled ? (ue(), en(jo, {
          key: 1,
          to: "#sidebar-details"
        }, [
          ht(fh, { connection: ee }, null, 8, ["connection"])
        ])) : Ge("", !0)
      ]))), 256)),
      ht(xv, {
        x: m.value,
        y: k.value,
        isVisible: p.value,
        items: O.value,
        onClose: B[0] || (B[0] = (ee) => p.value = !1)
      }, null, 8, ["x", "y", "isVisible", "items"])
    ], 64));
  }
}), Fv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Mv = {
  class: "[&_dt,dd]:inline [&_dt]:mr-1",
  "data-testid": "destination-placeholder-details"
}, $v = { class: "mt-4" }, Bv = { key: 0 }, Kv = { key: 1 }, qv = /* @__PURE__ */ Ot({
  __name: "destination-placeholder-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    const r = t, i = St(), { lnodeTypes: s } = Ft(i), c = Ye(() => s.value.find((p) => p.lnClass === r.placeholder.preferredLNode)?.dataObjects.find(
      (p) => p.name === r.placeholder.preferredDataObject
    )), d = Ye(() => c?.value?.dataAttributes?.find(
      (u) => u.name === r.placeholder.preferredDataAttribute
    ));
    return (u, p) => (ue(), ye(Ke, null, [
      p[8] || (p[8] = y("h2", { class: "text-lg font-bold mb-2" }, "Destination Placeholder", -1)),
      u.placeholder.dataflowType ? (ue(), ye("span", Fv, le(u.placeholder.dataflowType), 1)) : Ge("", !0),
      y("dl", Mv, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, le(u.placeholder.input), 1)
        ]),
        y("div", null, [
          p[1] || (p[1] = y("dt", null, "Input Instance:", -1)),
          y("dd", null, le(u.placeholder.inputInstance || "-"), 1)
        ]),
        y("div", $v, [
          p[2] || (p[2] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, le(u.placeholder.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[3] || (p[3] = y("dt", null, "Preferred DO:", -1)),
          y("dd", null, le(u.placeholder.preferredDataObject || "-"), 1)
        ]),
        c.value?.desc ? (ue(), ye("div", Bv, [
          p[4] || (p[4] = y("dt", null, "Preferred DO Desc:", -1)),
          y("dd", null, le(c.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[5] || (p[5] = y("dt", null, "Preferred DA:", -1)),
          y("dd", null, le(u.placeholder.preferredDataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (ue(), ye("div", Kv, [
          p[6] || (p[6] = y("dt", null, "Preferred DA Desc:", -1)),
          y("dd", null, le(d.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[7] || (p[7] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, le(u.placeholder.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), Uv = ["y1", "x2", "y2"], Vv = ["points"], Wv = /* @__PURE__ */ Ot({
  __name: "arrow",
  props: {
    height: {},
    length: {}
  },
  setup(t) {
    return (r, i) => (ue(), ye(Ke, null, [
      y("line", {
        x1: 0,
        y1: r.height / 2,
        x2: r.length - r.height / 2,
        y2: r.height / 2,
        stroke: "currentColor",
        "stroke-width": "2"
      }, null, 8, Uv),
      y("polygon", {
        points: `${r.length - r.height * 0.7}, 0 ${r.length}, ${r.height / 2} ${r.length - r.height * 0.7}, ${r.height}`,
        fill: "currentColor"
      }, null, 8, Vv)
    ], 64));
  }
}), Gv = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, Hv = ["onClick"], Yv = {
  height: "12",
  width: "35",
  class: "mr-[9px] text-(--color-ocean-gray-100)"
}, Xv = ["data-testid"], zv = ["onClick"], Qv = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Jv = ["onClick"], Zv = ["onClick"], ey = /* @__PURE__ */ Ot({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(t) {
    const r = Da(), { activeElement: i } = Ft(r);
    return (s, c) => (ue(!0), ye(Ke, null, Ct(s.destinationPlaceHolderPorts, (d, u) => (ue(), ye("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]",
      key: `destination-placeholder-port-${u}`
    }, [
      y("div", Gv, [
        y("div", {
          class: "flex items-center justify-self-end h-full max-w-max hover:cursor-pointer",
          onClick: (p) => Se(r).setOrResetActiveElement(d.id)
        }, [
          (ue(), ye("svg", Yv, [
            y("g", {
              "data-testid": `placeholder-line-${u}`,
              class: Zt({
                "text-(--color-primary)": Se(i) === d.id
              })
            }, [
              ht(Wv, {
                height: 12,
                length: 35
              })
            ], 10, Xv)
          ]))
        ], 8, Hv)
      ]),
      y("div", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        class: Zt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Se(i) === d.id
        }])
      }, null, 10, zv),
      y("div", Qv, [
        y("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm hover:cursor-pointer",
          onClick: (p) => Se(r).setOrResetActiveElement(d.id)
        }, le(d.input), 9, Jv),
        y("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 rounded-sm hover:cursor-pointer",
          onClick: (p) => Se(r).setOrResetActiveElement(d.id)
        }, le(d.inputInstance), 9, Zv)
      ]),
      Se(i) == d.id ? (ue(), en(jo, {
        key: 0,
        to: "#sidebar-details"
      }, [
        ht(qv, { placeholder: d }, null, 8, ["placeholder"])
      ])) : Ge("", !0)
    ]))), 128));
  }
}), ty = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, ny = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, ry = { class: "mt-4" }, oy = { key: 0 }, iy = { key: 1 }, ay = { class: "mt-4" }, sy = {
  key: 2,
  class: "mt-4"
}, ly = /* @__PURE__ */ Ot({
  __name: "source-placeholder-details",
  props: {
    placeholder: {},
    sourceLNodeId: {}
  },
  setup(t) {
    const r = t, i = St(), { lnodes: s } = Ft(i), c = Ye(() => s.value.find((p) => p.id === r.sourceLNodeId)?.dataObjectSpecifications?.find(
      (p) => p.name === r.placeholder.dataObject
    )), d = Ye(() => c?.value?.dataAttributeSpecifications?.find(
      (u) => u.name === r.placeholder.dataAttribute
    ));
    return (u, p) => (ue(), ye(Ke, null, [
      p[8] || (p[8] = y("h2", { class: "text-lg font-bold mb-2" }, "Source Placeholder", -1)),
      u.placeholder.dataflowType ? (ue(), ye("span", ty, le(u.placeholder.dataflowType), 1)) : Ge("", !0),
      y("dl", ny, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, le(u.placeholder.input), 1)
        ]),
        y("div", ry, [
          p[1] || (p[1] = y("dt", null, "DO:", -1)),
          y("dd", null, le(u.placeholder.dataObject || "-"), 1)
        ]),
        c.value?.desc ? (ue(), ye("div", oy, [
          p[2] || (p[2] = y("dt", null, "DO Desc:", -1)),
          y("dd", null, le(c.value?.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[3] || (p[3] = y("dt", null, "DA:", -1)),
          y("dd", null, le(u.placeholder.dataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (ue(), ye("div", iy, [
          p[4] || (p[4] = y("dt", null, "DA Desc:", -1)),
          y("dd", null, le(d.value?.desc), 1)
        ])) : Ge("", !0),
        y("div", ay, [
          p[5] || (p[5] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, le(u.placeholder.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[6] || (p[6] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, le(u.placeholder.processResource || "-"), 1)
        ]),
        u.placeholder.isFulfilled != null ? (ue(), ye("div", sy, [
          p[7] || (p[7] = y("dt", null, "Placeholder is fulfilled:", -1)),
          y("dd", null, le(u.placeholder.isFulfilled), 1)
        ])) : Ge("", !0)
      ])
    ], 64));
  }
}), uy = {}, cy = {
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function fy(t, r) {
  return ue(), ye("svg", cy, r[0] || (r[0] = [
    y("path", { d: "M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" }, null, -1),
    y("path", { d: "M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" }, null, -1)
  ]));
}
const ma = /* @__PURE__ */ Sa(uy, [["render", fy]]), dy = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-12" }, py = ["onClick"], hy = ["onClick"], my = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, vy = ["onClick"], yy = ["onClick"], gy = ["onClick"], by = ["onClick"], wy = ["disabled", "onClick"], _y = /* @__PURE__ */ Ot({
  __name: "source-placeholder-ports",
  props: {
    sourceLNode: {},
    destinationLNode: {}
  },
  setup(t) {
    const r = t, i = Da(), { activeElement: s } = Ft(i), c = St(), { sourcePlaceholders: d } = Ft(c), u = Qn(), p = Ye(() => r.sourceLNode.id ? d.value.filter((O) => O.lNodeId === r.sourceLNode.id) : []), m = (O) => {
      if (r.destinationLNode)
        return O.preferredLNode ? r.destinationLNode.lnClass === O.preferredLNode ? r.destinationLNode : void 0 : r.destinationLNode;
    };
    function k(O) {
      Ae(r.destinationLNode, "Destination LNode is undefined"), u.openDialogWithContent("DataflowCreation", {
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        sourcePlaceholder: O
      });
    }
    return (O, S) => (ue(!0), ye(Ke, null, Ct(p.value, (L) => (ue(), ye("div", dy, [
      y("div", {
        onClick: (Y) => Se(i).setOrResetActiveElement(L.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        y("span", {
          class: Zt([L.isFulfilled ? "border-solid" : "border-dashed", "relative inline-block border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm"])
        }, [
          nl(le(L.dataObject) + "." + le(L.dataAttribute) + " ", 1),
          y("span", {
            class: Zt([{
              "bg-(--color-primary)": Se(s) === L.id
            }, "absolute -top-3 -right-3 bg-(--color-ocean-gray-100) text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"])
          }, " 1+ ", 2)
        ], 2)
      ], 8, py),
      y("div", {
        onClick: (Y) => Se(i).setOrResetActiveElement(L.id),
        class: Zt([{
          "bg-(--color-primary)": Se(s) === L.id
        }, "rounded-full size-5 col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[8.5px] hover:cursor-pointer"])
      }, null, 10, hy),
      y("div", my, [
        y("div", {
          class: "flex items-center h-full w-3/4 hover:cursor-pointer",
          onClick: (Y) => Se(i).setOrResetActiveElement(L.id)
        }, [
          y("div", {
            class: Zt(["h-[2px] w-full border border-dashed", {
              "border-[var(--color-primary)]": Se(s) === L.id,
              "border-[var(--color-gray-200)]": Se(s) !== L.id
            }]),
            onClick: (Y) => Se(i).setOrResetActiveElement(L.id)
          }, null, 10, yy)
        ], 8, vy)
      ]),
      y("div", {
        onClick: (Y) => Se(i).setOrResetActiveElement(L.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[10%] truncate max-w-[8ch]"
      }, le(L.input), 9, gy),
      L.preferredLNode ? (ue(), ye("div", {
        key: 0,
        onClick: (Y) => Se(i).setOrResetActiveElement(L.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[70%]"
      }, le(L.preferredLNode), 9, by)) : Ge("", !0),
      y("button", {
        class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn bg-(--color-primary) border-1 text-white relative z-2",
        disabled: !r.sourceLNode || !r.destinationLNode || !m(L),
        style: Kr(
          !r.sourceLNode || !r.destinationLNode || !m(L) ? {
            border: "1",
            backgroundColor: "var(--color-ocean-gray-75)",
            color: "var(--color-ocean-gray-200)",
            borderColor: "var(--color-ocean-gray-200)"
          } : { borderColor: "var(--color-primary)" }
        ),
        "aria-label": "Fulfill placeholder",
        onClick: (Y) => k(L)
      }, [
        ht(ma)
      ], 12, wy),
      Se(s) == L.id ? (ue(), en(jo, {
        key: 1,
        to: "#sidebar-details"
      }, [
        ht(ly, {
          placeholder: L,
          sourceLNodeId: r.sourceLNode.id
        }, null, 8, ["placeholder", "sourceLNodeId"])
      ])) : Ge("", !0)
    ]))), 256));
  }
}), xy = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Ny = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, Ry = { class: "mt-4" }, Ty = { key: 0 }, Cy = /* @__PURE__ */ Ot({
  __name: "controlled-connection-details",
  props: {
    controlledConnection: {}
  },
  setup(t) {
    const r = t, i = St(), { lnodes: s } = Ft(i), c = Ye(() => s.value.find(
      (u) => u.id === r.controlledConnection.controlledLNodeId
    )?.dataObjectSpecifications?.find(
      (u) => u.name === r.controlledConnection.controlledDataObject
    ));
    return (d, u) => (ue(), ye(Ke, null, [
      u[4] || (u[4] = y("h2", { class: "text-lg font-bold mb-2" }, "Specified Controlled Dataflow", -1)),
      d.controlledConnection.dataflowType ? (ue(), ye("span", xy, le(d.controlledConnection.dataflowType), 1)) : Ge("", !0),
      y("dl", Ny, [
        y("div", null, [
          u[0] || (u[0] = y("dt", null, "Output:", -1)),
          y("dd", null, le(d.controlledConnection.outputName), 1)
        ]),
        y("div", null, [
          u[1] || (u[1] = y("dt", null, "Output Instance:", -1)),
          y("dd", null, le(d.controlledConnection.outputInstance || "-"), 1)
        ]),
        y("div", Ry, [
          u[2] || (u[2] = y("dt", null, "Controlled DO:", -1)),
          y("dd", null, le(d.controlledConnection.controlledDataObject || "-"), 1)
        ]),
        c.value?.desc ? (ue(), ye("div", Ty, [
          u[3] || (u[3] = y("dt", null, "Controlled DO Desc:", -1)),
          y("dd", null, le(c.value.desc), 1)
        ])) : Ge("", !0)
      ])
    ], 64));
  }
}), Ey = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Oy = ["onClick"], Iy = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Ay = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Dy = ["onClick"], Sy = ["onClick"], Py = ["data-testid"], Ly = ["onClick"], ky = ["onClick"], jy = ["onClick"], Fy = ["onClick"], My = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, $y = /* @__PURE__ */ Ot({
  __name: "dataflow-controlled-connections",
  props: {
    controlledConnections: {}
  },
  setup(t) {
    const r = Da(), { activeElement: i } = Ft(r);
    return (s, c) => (ue(!0), ye(Ke, null, Ct(s.controlledConnections, (d, u) => (ue(), ye("div", Ey, [
      y("div", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        y("span", Iy, le(d.outputName), 1),
        y("span", Ay, le(d.outputInstance), 1)
      ], 8, Oy),
      y("div", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        class: Zt(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Se(i) === d.id,
          "bg-(--color-ocean-gray-100)": Se(i) !== d.id
        }])
      }, null, 10, Dy),
      y("div", {
        class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
        onClick: (p) => Se(r).setOrResetActiveElement(d.id)
      }, [
        y("div", {
          class: Zt(["h-[2px] w-full", {
            "bg-(--color-primary)": Se(i) === d.id,
            "bg-(--color-ocean-gray-100)": Se(i) !== d.id
          }]),
          "data-testid": `dataflow-controlled-connection-line-${u}`
        }, null, 10, Py)
      ], 8, Sy),
      (ue(), ye("svg", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        y("polygon", {
          points: "0,0 8,6 0,12",
          style: Kr({
            fill: Se(i) === d.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
          })
        }, null, 4)
      ], 8, Ly)),
      y("div", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
      }, le(d.dataflowType), 9, ky),
      y("div", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        class: Zt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Se(i) === d.id,
          "bg-(--color-ocean-gray-100)": Se(i) !== d.id
        }])
      }, null, 10, jy),
      y("div", {
        onClick: (p) => Se(r).setOrResetActiveElement(d.id),
        class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
      }, [
        y("span", My, le(d.controlledDataObject), 1)
      ], 8, Fy),
      Se(i) == d.id ? (ue(), en(jo, {
        key: 0,
        to: "#sidebar-details"
      }, [
        ht(Cy, { "controlled-connection": d }, null, 8, ["controlled-connection"])
      ])) : Ge("", !0)
    ]))), 256));
  }
}), By = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_1fr_80px]" }, Ky = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, qy = ["value"], Uy = ["value"], Vy = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Wy = ["value"], Gy = ["value"], Hy = { class: "col-span-full row-start-3" }, Yy = /* @__PURE__ */ Ot({
  __name: "dataflow-visualisation",
  props: {
    isDataflowImplementationEnabled: { type: Boolean }
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(t, { emit: r }) {
    const i = r, s = Qn(), c = St(), { lnodes: d, connections: u, controlledConnections: p, dataflowSdk: m } = Ft(c), k = $e(""), O = $e(""), S = $e(), L = $e(), Y = $e(), X = $e();
    Ut(
      () => d.value,
      () => {
        S.value = void 0, L.value = void 0;
      }
    );
    const W = Ye(
      () => G.value?.filter((ve) => ve.lnodeId !== L.value).sort((ve, be) => ve.label.localeCompare(be.label))
    ), G = bv(
      async () => await Promise.all(
        d.value.map(async (ve) => {
          const be = await m.value?.findLnodeFunction(ve.id);
          return {
            lnodeId: ve.id,
            label: `${be}/${Mi(ve)}`
          };
        })
      )
    ), V = Ye(
      () => G.value?.filter((ve) => ve.lnodeId !== S.value).sort((ve, be) => ve.label.localeCompare(be.label))
    ), $ = Ye(() => !S.value || !L.value ? [] : u.value.filter(
      (ve) => ve.sourceLNodeId === S.value && ve.destinationLNodeId === L.value
    )), B = Ye(() => !S.value || !L.value ? [] : p.value.filter(
      (ve) => ve.controllerLNodeId === S.value && ve.controlledLNodeId === L.value
    )), ee = Ye(() => L.value ? u.value.filter(
      (ve) => ve.destinationLNodeId === L.value && !ve.sourceLNodeId
    ) : []);
    function fe(ve) {
      return d.value.find((be) => be.id === ve) ?? void 0;
    }
    async function te(ve) {
      S.value = ve, Y.value = fe(ve);
      const be = await m.value.findPathToLnode(ve);
      k.value = be.split("/").slice(0, -2).join("/"), i("sourceLNodeChange", ve);
    }
    async function ne(ve) {
      L.value = ve, X.value = fe(ve);
      const be = await m.value.findPathToLnode(ve);
      O.value = be.split("/").slice(0, -2).join("/"), i("destinationLNodeChange", ve);
    }
    function pe() {
      if (!Y.value)
        throw new Error("Source LNode is undefined");
      s.openDialogWithContent("SourcePlaceholderCreation", {
        sourceLNode: Y.value
      });
    }
    function j() {
      if (!X.value)
        throw new Error("Destination LNode is undefined");
      s.openDialogWithContent("DestinationPlaceholderCreation", {
        destinationLNode: X.value
      });
    }
    return (ve, be) => (ue(), ye("div", By, [
      be[5] || (be[5] = y("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[450px]" }, null, -1)),
      y("div", Ky, le(k.value), 1),
      y("select", {
        value: S.value ?? "",
        onChange: be[0] || (be[0] = (we) => te(we.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-xl text-center"
      }, [
        be[2] || (be[2] = nl(" > ")),
        be[3] || (be[3] = y("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (ue(!0), ye(Ke, null, Ct(W.value, (we) => (ue(), ye("option", {
          key: we.lnodeId,
          value: we.lnodeId
        }, le(we.label), 9, Uy))), 128))
      ], 40, qy),
      be[6] || (be[6] = y("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[450px]" }, null, -1)),
      y("div", Vy, le(O.value), 1),
      y("select", {
        value: L.value ?? "",
        onChange: be[1] || (be[1] = (we) => ne(we.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-xl text-center"
      }, [
        be[4] || (be[4] = y("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (ue(!0), ye(Ke, null, Ct(V.value, (we) => (ue(), ye("option", {
          key: we.lnodeId,
          value: we.lnodeId
        }, le(we.label), 9, Gy))), 128))
      ], 40, Wy),
      y("div", Hy, [
        $.value.length > 0 ? (ue(), en(jv, {
          key: 0,
          connections: $.value,
          isDataflowImplementationEnabled: ve.isDataflowImplementationEnabled
        }, null, 8, ["connections", "isDataflowImplementationEnabled"])) : Ge("", !0),
        B.value.length > 0 ? (ue(), en($y, {
          key: 1,
          controlledConnections: B.value
        }, null, 8, ["controlledConnections"])) : Ge("", !0),
        Y.value && !ve.isDataflowImplementationEnabled ? (ue(), en(_y, {
          key: 2,
          sourceLNode: Y.value,
          destinationLNode: X.value
        }, null, 8, ["sourceLNode", "destinationLNode"])) : Ge("", !0),
        ve.isDataflowImplementationEnabled ? Ge("", !0) : (ue(), en(ey, {
          key: 3,
          destinationPlaceHolderPorts: ee.value
        }, null, 8, ["destinationPlaceHolderPorts"]))
      ]),
      Y.value && !ve.isDataflowImplementationEnabled ? (ue(), ye("button", {
        key: 0,
        "aria-label": "Add source placeholder",
        class: "btn btn-primary btn-circle size-5 col-start-3 col-span-1 -ml-[12px] self-center z-10 row-start-4",
        onClick: pe
      }, [
        ht(ma)
      ])) : Ge("", !0),
      X.value && !ve.isDataflowImplementationEnabled ? (ue(), ye("button", {
        key: 1,
        class: "btn btn-primary btn-circle size-5 col-start-4 col-span-1 -ml-[9px] self-center row-start-4",
        "aria-label": "Add destination placeholder",
        onClick: j
      }, [
        ht(ma)
      ])) : Ge("", !0)
    ]));
  }
}), Xy = { class: "flex justify-between mb-6 w-full h-18" }, zy = { key: 0 }, Qy = { class: "flex flex-col items-center justify-center w-full" }, Jy = ["disabled"], Zy = /* @__PURE__ */ Ot({
  __name: "dataflow-view",
  setup(t) {
    const r = $e(), i = $e(), s = $e(!1), c = Qn(), d = St(), { lnodes: u } = Ft(d), p = Ye(() => S(r.value)), m = Ye(() => S(i.value));
    function k(Y) {
      r.value = Y;
    }
    function O(Y) {
      i.value = Y;
    }
    function S(Y) {
      return u.value.find((X) => X.id === Y) ?? void 0;
    }
    function L() {
      if (!p.value || !m.value)
        throw new Error("Source or Destination LNode is undefined");
      c.openDialogWithContent("DataflowCreation", {
        sourceLNode: p.value,
        destinationLNode: m.value
      });
    }
    return (Y, X) => (ue(), ye(Ke, null, [
      y("div", Xy, [
        y("div", null, [
          X[1] || (X[1] = y("span", { class: "mr-3" }, "Specification", -1)),
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": X[0] || (X[0] = (W) => s.value = W),
            class: "toggle"
          }, null, 512), [
            [To, s.value]
          ]),
          X[2] || (X[2] = y("span", { class: "ml-3" }, "Implementation", -1))
        ]),
        s.value ? (ue(), ye("div", zy, X[3] || (X[3] = [
          cc('<div class="flex items-center"><div class="border w-[50px] h-[2px] mr-2"></div><span>Implemented</span></div><div class="flex items-center"><div class="border border-dashed w-[50px] h-[2px] mr-2"></div><span>Not implemented</span></div><div class="flex items-center"><div class="border border-dotted w-[50px] h-[2px] mr-2"></div><span>Not possible to implement</span></div>', 3)
        ]))) : Ge("", !0)
      ]),
      y("div", Qy, [
        ht(Yy, {
          onSourceLNodeChange: k,
          onDestinationLNodeChange: O,
          isDataflowImplementationEnabled: s.value
        }, null, 8, ["isDataflowImplementationEnabled"]),
        s.value ? Ge("", !0) : (ue(), ye("button", {
          key: 0,
          class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
          onClick: L,
          disabled: !p.value || !m.value,
          "aria-label": "Add connection"
        }, [
          ht(ma)
        ], 8, Jy))
      ])
    ], 64));
  }
}), eg = {}, tg = { class: "layout" }, ng = { class: "main" }, rg = { class: "sidebar" };
function og(t, r) {
  return ue(), ye("div", tg, [
    y("div", ng, [
      wl(t.$slots, "main", {}, void 0)
    ]),
    y("div", rg, [
      wl(t.$slots, "sidebar", {}, void 0)
    ])
  ]);
}
const ig = /* @__PURE__ */ Sa(eg, [["render", og], ["__scopeId", "data-v-5f95d421"]]), ag = {
  name: "sidebar",
  class: "root"
}, sg = { class: "tabs tabs-box" }, lg = { key: 0 }, ug = { key: 1 }, cg = /* @__PURE__ */ Ot({
  __name: "sidebar",
  setup(t) {
    const r = $e("details");
    return (i, s) => (ue(), ye("div", ag, [
      y("div", sg, [
        rt(y("input", {
          type: "radio",
          value: "details",
          name: "tabs",
          "onUpdate:modelValue": s[0] || (s[0] = (c) => r.value = c),
          class: "tab",
          "aria-label": "Details"
        }, null, 512), [
          [Br, r.value]
        ]),
        rt(y("input", {
          type: "radio",
          value: "advanced",
          name: "tabs",
          "onUpdate:modelValue": s[1] || (s[1] = (c) => r.value = c),
          class: "tab",
          "aria-label": "Advanced"
        }, null, 512), [
          [Br, r.value]
        ])
      ]),
      y("div", null, [
        r.value === "details" ? (ue(), ye("div", lg, s[2] || (s[2] = [
          y("div", { id: "sidebar-details" }, null, -1)
        ]))) : Ge("", !0),
        r.value === "advanced" ? (ue(), ye("div", ug)) : Ge("", !0)
      ])
    ]));
  }
}), fg = /* @__PURE__ */ Sa(cg, [["__scopeId", "data-v-ec5c053a"]]), dg = {
  class: "modal",
  ref: "dialogRef"
}, pg = /* @__PURE__ */ Ot({
  __name: "dialog-container",
  setup(t) {
    const r = Qn(), { currentDialogContent: i } = Ft(r), s = Rf("dialogRef");
    return Ko(() => {
      s.value && (r.dialogRef = s.value);
    }), (c, d) => (ue(), ye("dialog", dg, [
      y("div", {
        class: Zt(["modal-box max-h-[85vh]", Se(r).dialogAttributes?.class])
      }, [
        y("button", {
          class: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          "aria-label": "Close dialog",
          onClick: d[0] || (d[0] = //@ts-ignore
          (...u) => Se(r).handleClose && Se(r).handleClose(...u))
        }, " ✕ "),
        Se(i).component ? (ue(), en(Ff(Se(i).component), jc(fc({ key: 0 }, Se(i).props)), null, 16)) : Ge("", !0)
      ], 2),
      d[1] || (d[1] = y("form", {
        method: "dialog",
        class: "modal-backdrop"
      }, [
        y("button", null, "close")
      ], -1))
    ], 512));
  }
}), hg = ["id"], mg = { class: "pl-10 pr-10" }, vg = /* @__PURE__ */ Ot({
  __name: "app",
  props: {
    api: {}
  },
  setup(t) {
    const r = "dataflow", i = t, s = St();
    let c = () => {
    };
    return Ko(() => {
      c = i.api.activeFileName.subscribe((d) => {
        s.initApp(d);
      }), s.initApp(i.api.activeFileName.value);
    }), zs(() => {
      s.closeDatabase(), c();
    }), (d, u) => (ue(), ye("article", {
      id: Se(r),
      style: { height: "100%" }
    }, [
      ht(ig, null, {
        main: _s(() => [
          y("div", mg, [
            ht(Zy),
            ht(pg)
          ])
        ]),
        sidebar: _s(() => [
          ht(fg)
        ]),
        _: 1
      })
    ], 8, hg));
  }
});
function $g(t, r) {
  if (!document.getElementById(t)) {
    console.error({ msg: "could not found root element", rootId: t });
    return;
  }
  const s = Zd(vg, { api: r });
  return s.use(np()), s.mount(`#${t}`), s.unmount;
}
export {
  $g as default
};
