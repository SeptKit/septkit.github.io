(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.backdrop[data-v-9cc5b747]{position:fixed;inset:0;z-index:5;width:100vw;height:100vh;background:transparent}.layout[data-v-5f95d421]{display:grid;height:100%;grid-template-columns:1fr 20rem}.sidebar[data-v-5f95d421]{padding:1.5rem;border-left:1px solid var(--border-color);height:100%}.main[data-v-5f95d421]{padding:1rem;height:100%}.root[data-v-ec5c053a]{display:flex;flex-direction:column;gap:1rem}.tab[data-v-ec5c053a]{transition:all .2s}.tabs[data-v-ec5c053a]{width:auto;display:inline-block;margin:0 auto}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:""}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:var(--tab-height);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:calc(100% - var(--tab-height) + var(--border));display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.collapse-arrow>.collapse-title:after{content:"";transform-origin:75% 75%;pointer-events:none;top:1.9rem;width:.5rem;height:.5rem;transition-property:all;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:block;position:absolute;inset-inline-end:1.4rem;transform:translateY(-100%)rotate(45deg);box-shadow:2px 2px}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.\\!pointer-events-none{pointer-events:none!important}.collapse:not(td,tr,colgroup){visibility:visible}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;width:100%;transition:grid-template-rows .2s;display:grid;position:relative;overflow:hidden}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],:focus:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],:focus:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible;min-height:fit-content}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-close,.collapse[open])>.collapse-title{cursor:unset}.collapse:is([open],:focus:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse.collapse-open.collapse-plus>.collapse-title:after{content:"−"}.collapse.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{content:"−"}.collapse:is(details){width:100%}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details) summary{outline:none}.collapse-content{visibility:hidden;min-height:0;cursor:unset;grid-row-start:2;grid-column-start:1;padding-left:1rem;padding-right:1rem;transition:visibility .2s,padding .2s ease-out,background-color .2s ease-out}.collapse{visibility:collapse}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.collapse-title{grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out;position:relative}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.-top-3{top:calc(var(--spacing)*-3)}.top-2{top:calc(var(--spacing)*2)}.-right-3{right:calc(var(--spacing)*-3)}.right-2{right:calc(var(--spacing)*2)}.left-\\[10\\%\\]{left:10%}.left-\\[70\\%\\]{left:70%}.modal-backdrop{color:#0000;z-index:-1;grid-row-start:1;grid-column-start:1;place-self:stretch stretch;display:grid}.modal-backdrop button{cursor:pointer}.-z-1{z-index:-1}.z-1{z-index:1}.z-2{z-index:2}.z-10{z-index:10}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[8\\.5px\\]{margin-right:-8.5px}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-\\[9px\\]{margin-right:9px}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.-ml-\\[12px\\]{margin-left:-12px}.ml-3{margin-left:calc(var(--spacing)*3)}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-block{display:inline-block}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-5{height:calc(var(--spacing)*5)}.h-12{height:calc(var(--spacing)*12)}.h-18{height:calc(var(--spacing)*18)}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.h-\\[50px\\]{height:50px}.h-full{height:100%}.max-h-\\[85vh\\]{max-height:85vh}.min-h-\\[450px\\]{min-height:450px}.w-1\\/2{width:50%}.w-3\\/4{width:75%}.w-5{width:calc(var(--spacing)*5)}.w-\\[20px\\]{width:20px}.w-\\[50px\\]{width:50px}.w-full{width:100%}.max-w-\\[8ch\\]{max-width:8ch}.max-w-max{max-width:max-content}.max-w-none{max-width:none}.flex-1{flex:1}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_0\\.5fr_20px_1fr\\]{grid-template-columns:1fr 20px .5fr 20px 1fr}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[50px_50px_1fr_80px\\]{grid-template-rows:50px 50px 1fr 80px}.grid-rows-\\[50px_50px_80px\\]{grid-template-rows:50px 50px 80px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tabs-box{background-color:var(--color-base-200);--tabs-box-radius:calc(var(--radius-field) + var(--radius-field) + var(--radius-field));border-radius:calc(var(--radius-field) + min(.25rem,var(--tabs-box-radius)));box-shadow:0 -.5px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 .5px oklch(0% 0 0/calc(var(--depth)*.05)) inset;padding:.25rem}.tabs-box .tab{border-radius:var(--radius-field);border-style:none}.tabs-box .tab:focus-visible,.tabs-box .tab:is(label:has(:checked:focus-visible)){outline-offset:2px}.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){background-color:var(--tab-bg,var(--color-base-100));box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px var(--color-neutral),0 1px 6px -4px var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*50%),#0000),0 1px 6px -4px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*100%),#0000)}}@media (forced-colors:active){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){border:1px solid}}.rounded-box{border-radius:var(--radius-box)}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-none{--tw-border-style:none;border-style:none}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.border-\\(--color-primary\\){border-color:var(--color-primary)}.border-\\[var\\(--color-gray-200\\)\\]{border-color:var(--color-gray-200)}.border-\\[var\\(--color-primary\\)\\]{border-color:var(--color-primary)}.bg-\\(--color-ocean-gray-25\\){background-color:var(--color-ocean-gray-25)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.radio-sm{padding:.1875rem}.radio-sm[type=radio]{--size:calc(var(--size-selector,.25rem)*5)}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.ps-5{padding-inline-start:calc(var(--spacing)*5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pl-5{padding-left:calc(var(--spacing)*5)}.text-center{text-align:center}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-\\(--color-ocean-gray-100\\){color:var(--color-ocean-gray-100)}.text-\\(--color-primary\\){color:var(--color-primary)}.text-white{color:var(--color-white)}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}:is(.\\*\\:pointer-events-auto>*){pointer-events:auto}.after\\:start-0:after{content:var(--tw-content);inset-inline-start:calc(var(--spacing)*0)}.after\\:\\!top-3:after{content:var(--tw-content);top:calc(var(--spacing)*3)!important}@media (hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}.\\[\\&_dt\\]\\:mr-1 dt{margin-right:calc(var(--spacing)*1)}.\\[\\&_dt\\,dd\\]\\:inline dt,.\\[\\&_dt\\,dd\\]\\:inline dd{display:inline}.\\[\\&\\>dt\\]\\:text-right>dt{text-align:right}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
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
const bt = {}, Do = [], Xn = () => {
}, Ec = () => !1, va = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Fs = (t) => t.startsWith("onUpdate:"), rn = Object.assign, Bs = (t, r) => {
  const i = t.indexOf(r);
  i > -1 && t.splice(i, 1);
}, Oc = Object.prototype.hasOwnProperty, vt = (t, r) => Oc.call(t, r), Ue = Array.isArray, Po = (t) => Ki(t) === "[object Map]", $o = (t) => Ki(t) === "[object Set]", fl = (t) => Ki(t) === "[object Date]", Qe = (t) => typeof t == "function", It = (t) => typeof t == "string", Un = (t) => typeof t == "symbol", Ct = (t) => t !== null && typeof t == "object", iu = (t) => (Ct(t) || Qe(t)) && Qe(t.then) && Qe(t.catch), au = Object.prototype.toString, Ki = (t) => au.call(t), Ac = (t) => Ki(t).slice(8, -1), su = (t) => Ki(t) === "[object Object]", Ms = (t) => It(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ni = /* @__PURE__ */ js(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ya = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (i) => r[i] || (r[i] = t(i));
}, Ic = /-(\w)/g, Dn = ya(
  (t) => t.replace(Ic, (r, i) => i ? i.toUpperCase() : "")
), Sc = /\B([A-Z])/g, Oo = ya(
  (t) => t.replace(Sc, "-$1").toLowerCase()
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
      const s = t[i], c = It(s) ? kc(s) : Kr(s);
      if (c)
        for (const d in c)
          r[d] = c[d];
    }
    return r;
  } else if (It(t) || Ct(t))
    return t;
}
const Dc = /;(?![^(]*\))/g, Pc = /:([^]+)/, Lc = /\/\*[^]*?\*\//g;
function kc(t) {
  const r = {};
  return t.replace(Lc, "").split(Dc).forEach((i) => {
    if (i) {
      const s = i.split(Pc);
      s.length > 1 && (r[s[0].trim()] = s[1].trim());
    }
  }), r;
}
function Jt(t) {
  let r = "";
  if (It(t))
    r = t;
  else if (Ue(t))
    for (let i = 0; i < t.length; i++) {
      const s = Jt(t[i]);
      s && (r += s + " ");
    }
  else if (Ct(t))
    for (const i in t)
      t[i] && (r += i + " ");
  return r.trim();
}
function jc(t) {
  if (!t) return null;
  let { class: r, style: i } = t;
  return r && !It(r) && (t.class = Jt(r)), i && (t.style = Kr(i)), t;
}
const Fc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Bc = /* @__PURE__ */ js(Fc);
function lu(t) {
  return !!t || t === "";
}
function Mc(t, r) {
  if (t.length !== r.length) return !1;
  let i = !0;
  for (let s = 0; i && s < t.length; s++)
    i = To(t[s], r[s]);
  return i;
}
function To(t, r) {
  if (t === r) return !0;
  let i = fl(t), s = fl(r);
  if (i || s)
    return i && s ? t.getTime() === r.getTime() : !1;
  if (i = Un(t), s = Un(r), i || s)
    return t === r;
  if (i = Ue(t), s = Ue(r), i || s)
    return i && s ? Mc(t, r) : !1;
  if (i = Ct(t), s = Ct(r), i || s) {
    if (!i || !s)
      return !1;
    const c = Object.keys(t).length, d = Object.keys(r).length;
    if (c !== d)
      return !1;
    for (const u in t) {
      const p = t.hasOwnProperty(u), m = r.hasOwnProperty(u);
      if (p && !m || !p && m || !To(t[u], r[u]))
        return !1;
    }
  }
  return String(t) === String(r);
}
function $s(t, r) {
  return t.findIndex((i) => To(i, r));
}
const uu = (t) => !!(t && t.__v_isRef === !0), ue = (t) => It(t) ? t : t == null ? "" : Ue(t) || Ct(t) && (t.toString === au || !Qe(t.toString)) ? uu(t) ? ue(t.value) : JSON.stringify(t, cu, 2) : String(t), cu = (t, r) => uu(r) ? cu(t, r.value) : Po(r) ? {
  [`Map(${r.size})`]: [...r.entries()].reduce(
    (i, [s, c], d) => (i[is(s, d) + " =>"] = c, i),
    {}
  )
} : $o(r) ? {
  [`Set(${r.size})`]: [...r.values()].map((i) => is(i))
} : Un(r) ? is(r) : Ct(r) && !Ue(r) && !su(r) ? String(r) : r, is = (t, r = "") => {
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
let tn;
class fu {
  constructor(r = !1) {
    this.detached = r, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = tn, !r && tn && (this.index = (tn.scopes || (tn.scopes = [])).push(
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
      const i = tn;
      try {
        return tn = this, r();
      } finally {
        tn = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = tn, tn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (tn = this.prevScope, this.prevScope = void 0);
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
  return tn;
}
function pu(t, r = !1) {
  tn && tn.cleanups.push(t);
}
let Nt;
const as = /* @__PURE__ */ new WeakSet();
class hu {
  constructor(r) {
    this.fn = r, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, tn && tn.active && tn.effects.push(this);
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
    const r = Nt, i = qn;
    Nt = this, qn = !0;
    try {
      return this.fn();
    } finally {
      gu(this), Nt = r, qn = i, this.flags &= -3;
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
let mu = 0, Ri, Ci;
function vu(t, r = !1) {
  if (t.flags |= 8, r) {
    t.next = Ci, Ci = t;
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
  if (Ci) {
    let r = Ci;
    for (Ci = void 0; r; ) {
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
    s.version === -1 ? (s === i && (i = c), Vs(s), $c(s)) : r = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = c;
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
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Di) || (t.globalVersion = Di, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !gs(t))))
    return;
  t.flags |= 2;
  const r = t.dep, i = Nt, s = qn;
  Nt = t, qn = !0;
  try {
    yu(t);
    const c = t.fn(t._value);
    (r.version === 0 || Fr(c, t._value)) && (t.flags |= 128, t._value = c, r.version++);
  } catch (c) {
    throw r.version++, c;
  } finally {
    Nt = i, qn = s, gu(t), t.flags &= -3;
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
function $c(t) {
  const { prevDep: r, nextDep: i } = t;
  r && (r.nextDep = i, t.prevDep = void 0), i && (i.prevDep = r, t.nextDep = void 0);
}
let qn = !0;
const wu = [];
function Ar() {
  wu.push(qn), qn = !1;
}
function Ir() {
  const t = wu.pop();
  qn = t === void 0 ? !0 : t;
}
function pl(t) {
  const { cleanup: r } = t;
  if (t.cleanup = void 0, r) {
    const i = Nt;
    Nt = void 0;
    try {
      r();
    } finally {
      Nt = i;
    }
  }
}
let Di = 0;
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
    if (!Nt || !qn || Nt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== Nt)
      i = this.activeLink = new Kc(Nt, this), Nt.deps ? (i.prevDep = Nt.depsTail, Nt.depsTail.nextDep = i, Nt.depsTail = i) : Nt.deps = Nt.depsTail = i, _u(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const s = i.nextDep;
      s.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = s), i.prevDep = Nt.depsTail, i.nextDep = void 0, Nt.depsTail.nextDep = i, Nt.depsTail = i, Nt.deps === i && (Nt.deps = s);
    }
    return i;
  }
  trigger(r) {
    this.version++, Di++, this.notify(r);
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
function nn(t, r, i) {
  if (qn && Nt) {
    let s = aa.get(t);
    s || aa.set(t, s = /* @__PURE__ */ new Map());
    let c = s.get(i);
    c || (s.set(i, c = new Ws()), c.map = s, c.key = i), c.track();
  }
}
function Rr(t, r, i, s, c, d) {
  const u = aa.get(t);
  if (!u) {
    Di++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (qs(), r === "clear")
    u.forEach(p);
  else {
    const m = Ue(t), k = m && Ms(i);
    if (m && i === "length") {
      const O = Number(s);
      u.forEach((D, L) => {
        (L === "length" || L === Pi || !Un(L) && L >= O) && p(D);
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
function Ao(t) {
  const r = dt(t);
  return r === t ? r : (nn(r, "iterate", Pi), In(t) ? r : r.map(zt));
}
function wa(t) {
  return nn(t = dt(t), "iterate", Pi), t;
}
const Uc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ss(this, Symbol.iterator, zt);
  },
  concat(...t) {
    return Ao(this).concat(
      ...t.map((r) => Ue(r) ? Ao(r) : r)
    );
  },
  entries() {
    return ss(this, "entries", (t) => (t[1] = zt(t[1]), t));
  },
  every(t, r) {
    return xr(this, "every", t, r, void 0, arguments);
  },
  filter(t, r) {
    return xr(this, "filter", t, r, (i) => i.map(zt), arguments);
  },
  find(t, r) {
    return xr(this, "find", t, r, zt, arguments);
  },
  findIndex(t, r) {
    return xr(this, "findIndex", t, r, void 0, arguments);
  },
  findLast(t, r) {
    return xr(this, "findLast", t, r, zt, arguments);
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
    return Ao(this).join(t);
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
    return Ao(this).toReversed();
  },
  toSorted(t) {
    return Ao(this).toSorted(t);
  },
  toSpliced(...t) {
    return Ao(this).toSpliced(...t);
  },
  unshift(...t) {
    return wi(this, "unshift", t);
  },
  values() {
    return ss(this, "values", zt);
  }
};
function ss(t, r, i) {
  const s = wa(t), c = s[r]();
  return s !== t && !In(t) && (c._next = c.next, c.next = () => {
    const d = c._next();
    return d.value && (d.value = i(d.value)), d;
  }), c;
}
const Vc = Array.prototype;
function xr(t, r, i, s, c, d) {
  const u = wa(t), p = u !== t && !In(t), m = u[r];
  if (m !== Vc[r]) {
    const D = m.apply(t, d);
    return p ? zt(D) : D;
  }
  let k = i;
  u !== t && (p ? k = function(D, L) {
    return i.call(this, zt(D), L, t);
  } : i.length > 2 && (k = function(D, L) {
    return i.call(this, D, L, t);
  }));
  const O = m.call(u, k, s);
  return p && c ? c(O) : O;
}
function hl(t, r, i, s) {
  const c = wa(t);
  let d = i;
  return c !== t && (In(t) ? i.length > 3 && (d = function(u, p, m) {
    return i.call(this, u, p, m, t);
  }) : d = function(u, p, m) {
    return i.call(this, u, zt(p), m, t);
  }), c[r](d, ...s);
}
function ls(t, r, i) {
  const s = dt(t);
  nn(s, "iterate", Pi);
  const c = s[r](...i);
  return (c === -1 || c === !1) && Gs(i[0]) ? (i[0] = dt(i[0]), s[r](...i)) : c;
}
function wi(t, r, i = []) {
  Ar(), qs();
  const s = dt(t)[r].apply(t, i);
  return Us(), Ir(), s;
}
const Wc = /* @__PURE__ */ js("__proto__,__v_isRef,__isVue"), xu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Un)
);
function Gc(t) {
  Un(t) || (t = String(t));
  const r = dt(this);
  return nn(r, "has", t), r.hasOwnProperty(t);
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
      return s === (c ? d ? Au : Ou : d ? Eu : Tu).get(r) || // receiver is not the reactive proxy, but has the same prototype
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
      Ot(r) ? r : s
    );
    return (Un(i) ? xu.has(i) : Wc(i)) || (c || nn(r, "get", i), d) ? p : Ot(p) ? u && Ms(i) ? p : p.value : Ct(p) ? c ? Iu(p) : qi(p) : p;
  }
}
class Ru extends Nu {
  constructor(r = !1) {
    super(!1, r);
  }
  set(r, i, s, c) {
    let d = r[i];
    if (!this._isShallow) {
      const m = Br(d);
      if (!In(s) && !Br(s) && (d = dt(d), s = dt(s)), !Ue(r) && Ot(d) && !Ot(s))
        return m ? !1 : (d.value = s, !0);
    }
    const u = Ue(r) && Ms(i) ? Number(i) < r.length : vt(r, i), p = Reflect.set(
      r,
      i,
      s,
      Ot(r) ? r : c
    );
    return r === dt(c) && (u ? Fr(s, d) && Rr(r, "set", i, s) : Rr(r, "add", i, s)), p;
  }
  deleteProperty(r, i) {
    const s = vt(r, i);
    r[i];
    const c = Reflect.deleteProperty(r, i);
    return c && s && Rr(r, "delete", i, void 0), c;
  }
  has(r, i) {
    const s = Reflect.has(r, i);
    return (!Un(i) || !xu.has(i)) && nn(r, "has", i), s;
  }
  ownKeys(r) {
    return nn(
      r,
      "iterate",
      Ue(r) ? "length" : No
    ), Reflect.ownKeys(r);
  }
}
class Cu extends Nu {
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
const Hc = /* @__PURE__ */ new Ru(), Yc = /* @__PURE__ */ new Cu(), Xc = /* @__PURE__ */ new Ru(!0), Qc = /* @__PURE__ */ new Cu(!0), ws = (t) => t, Wi = (t) => Reflect.getPrototypeOf(t);
function zc(t, r, i) {
  return function(...s) {
    const c = this.__v_raw, d = dt(c), u = Po(d), p = t === "entries" || t === Symbol.iterator && u, m = t === "keys" && u, k = c[t](...s), O = i ? ws : r ? sa : zt;
    return !r && nn(
      d,
      "iterate",
      m ? bs : No
    ), {
      // iterator protocol
      next() {
        const { value: D, done: L } = k.next();
        return L ? { value: D, done: L } : {
          value: p ? [O(D[0]), O(D[1])] : O(D),
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
      const d = this.__v_raw, u = dt(d), p = dt(c);
      t || (Fr(c, p) && nn(u, "get", c), nn(u, "get", p));
      const { has: m } = Wi(u), k = r ? ws : t ? sa : zt;
      if (m.call(u, c))
        return k(d.get(c));
      if (m.call(u, p))
        return k(d.get(p));
      d !== u && d.get(c);
    },
    get size() {
      const c = this.__v_raw;
      return !t && nn(dt(c), "iterate", No), Reflect.get(c, "size", c);
    },
    has(c) {
      const d = this.__v_raw, u = dt(d), p = dt(c);
      return t || (Fr(c, p) && nn(u, "has", c), nn(u, "has", p)), c === p ? d.has(c) : d.has(c) || d.has(p);
    },
    forEach(c, d) {
      const u = this, p = u.__v_raw, m = dt(p), k = r ? ws : t ? sa : zt;
      return !t && nn(m, "iterate", No), p.forEach((O, D) => c.call(d, k(O), k(D), u));
    }
  };
  return rn(
    i,
    t ? {
      add: Gi("add"),
      set: Gi("set"),
      delete: Gi("delete"),
      clear: Gi("clear")
    } : {
      add(c) {
        !r && !In(c) && !Br(c) && (c = dt(c));
        const d = dt(this);
        return Wi(d).has.call(d, c) || (d.add(c), Rr(d, "add", c, c)), this;
      },
      set(c, d) {
        !r && !In(d) && !Br(d) && (d = dt(d));
        const u = dt(this), { has: p, get: m } = Wi(u);
        let k = p.call(u, c);
        k || (c = dt(c), k = p.call(u, c));
        const O = m.call(u, c);
        return u.set(c, d), k ? Fr(d, O) && Rr(u, "set", c, d) : Rr(u, "add", c, d), this;
      },
      delete(c) {
        const d = dt(this), { has: u, get: p } = Wi(d);
        let m = u.call(d, c);
        m || (c = dt(c), m = u.call(d, c)), p && p.call(d, c);
        const k = d.delete(c);
        return m && Rr(d, "delete", c, void 0), k;
      },
      clear() {
        const c = dt(this), d = c.size !== 0, u = c.clear();
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
    i[c] = zc(c, t, r);
  }), i;
}
function _a(t, r) {
  const i = Jc(t, r);
  return (s, c, d) => c === "__v_isReactive" ? !t : c === "__v_isReadonly" ? t : c === "__v_raw" ? s : Reflect.get(
    vt(i, c) && c in s ? i : s,
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
}, Tu = /* @__PURE__ */ new WeakMap(), Eu = /* @__PURE__ */ new WeakMap(), Ou = /* @__PURE__ */ new WeakMap(), Au = /* @__PURE__ */ new WeakMap();
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
  return t.__v_skip || !Object.isExtensible(t) ? 0 : rf(Ac(t));
}
function qi(t) {
  return Br(t) ? t : xa(
    t,
    !1,
    Hc,
    Zc,
    Tu
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
function Iu(t) {
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
    Qc,
    nf,
    Au
  );
}
function xa(t, r, i, s, c) {
  if (!Ct(t) || t.__v_raw && !(r && t.__v_isReactive))
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
  return Br(t) ? Er(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Br(t) {
  return !!(t && t.__v_isReadonly);
}
function In(t) {
  return !!(t && t.__v_isShallow);
}
function Gs(t) {
  return t ? !!t.__v_raw : !1;
}
function dt(t) {
  const r = t && t.__v_raw;
  return r ? dt(r) : t;
}
function Na(t) {
  return !vt(t, "__v_skip") && Object.isExtensible(t) && ys(t, "__v_skip", !0), t;
}
const zt = (t) => Ct(t) ? qi(t) : t, sa = (t) => Ct(t) ? Iu(t) : t;
function Ot(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function $e(t) {
  return Su(t, !1);
}
function An(t) {
  return Su(t, !0);
}
function Su(t, r) {
  return Ot(t) ? t : new lf(t, r);
}
class lf {
  constructor(r, i) {
    this.dep = new Ws(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? r : dt(r), this._value = i ? r : zt(r), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(r) {
    const i = this._rawValue, s = this.__v_isShallow || In(r) || Br(r);
    r = s ? r : dt(r), Fr(r, i) && (this._rawValue = r, this._value = s ? r : zt(r), this.dep.trigger());
  }
}
function Le(t) {
  return Ot(t) ? t.value : t;
}
function uf(t) {
  return Qe(t) ? t() : Le(t);
}
const cf = {
  get: (t, r, i) => r === "__v_raw" ? t : Le(Reflect.get(t, r, i)),
  set: (t, r, i, s) => {
    const c = t[r];
    return Ot(c) && !Ot(i) ? (c.value = i, !0) : Reflect.set(t, r, i, s);
  }
};
function Du(t) {
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
    return qc(dt(this._object), this._key);
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
  return Ot(t) ? t : Qe(t) ? new pf(t) : Ct(t) && arguments.length > 1 ? Pu(t, r, i) : $e(t);
}
function Pu(t, r, i) {
  const s = t[r];
  return Ot(s) ? s : new df(t, r, i);
}
class mf {
  constructor(r, i, s) {
    this.fn = r, this.setter = i, this._value = void 0, this.dep = new Ws(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Di - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Nt !== this)
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
function gf(t, r, i = bt) {
  const { immediate: s, deep: c, once: d, scheduler: u, augmentJob: p, call: m } = i, k = (te) => c ? te : In(te) || c === !1 || c === 0 ? Cr(te, 1) : Cr(te);
  let O, D, L, Y, Q = !1, W = !1;
  if (Ot(t) ? (D = () => t.value, Q = In(t)) : Er(t) ? (D = () => k(t), Q = !0) : Ue(t) ? (W = !0, Q = t.some((te) => Er(te) || In(te)), D = () => t.map((te) => {
    if (Ot(te))
      return te.value;
    if (Er(te))
      return k(te);
    if (Qe(te))
      return m ? m(te, 2) : te();
  })) : Qe(t) ? r ? D = m ? () => m(t, 2) : t : D = () => {
    if (L) {
      Ar();
      try {
        L();
      } finally {
        Ir();
      }
    }
    const te = xo;
    xo = O;
    try {
      return m ? m(t, 3, [Y]) : t(Y);
    } finally {
      xo = te;
    }
  } : D = Xn, r && c) {
    const te = D, Oe = c === !0 ? 1 / 0 : c;
    D = () => Cr(te(), Oe);
  }
  const G = Ks(), V = () => {
    O.stop(), G && G.active && Bs(G.effects, O);
  };
  if (d && r) {
    const te = r;
    r = (...Oe) => {
      te(...Oe), V();
    };
  }
  let M = W ? new Array(t.length).fill(Hi) : Hi;
  const $ = (te) => {
    if (!(!(O.flags & 1) || !O.dirty && !te))
      if (r) {
        const Oe = O.run();
        if (c || Q || (W ? Oe.some((pe, X) => Fr(pe, M[X])) : Fr(Oe, M))) {
          L && L();
          const pe = xo;
          xo = O;
          try {
            const X = [
              Oe,
              // pass undefined as the old value when it's changed for the first time
              M === Hi ? void 0 : W && M[0] === Hi ? [] : M,
              Y
            ];
            M = Oe, m ? m(r, 3, X) : (
              // @ts-expect-error
              r(...X)
            );
          } finally {
            xo = pe;
          }
        }
      } else
        O.run();
  };
  return p && p($), O = new hu(D), O.scheduler = u ? () => u($, !1) : $, Y = (te) => yf(te, !1, O), L = O.onStop = () => {
    const te = la.get(O);
    if (te) {
      if (m)
        m(te, 4);
      else
        for (const Oe of te) Oe();
      la.delete(O);
    }
  }, r ? s ? $(!0) : M = O.run() : u ? u($.bind(null, !0), !0) : O.run(), V.pause = O.pause.bind(O), V.resume = O.resume.bind(O), V.stop = V, V;
}
function Cr(t, r = 1 / 0, i) {
  if (r <= 0 || !Ct(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(t)))
    return t;
  if (i.add(t), r--, Ot(t))
    Cr(t.value, r, i);
  else if (Ue(t))
    for (let s = 0; s < t.length; s++)
      Cr(t[s], r, i);
  else if ($o(t) || Po(t))
    t.forEach((s) => {
      Cr(s, r, i);
    });
  else if (su(t)) {
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
  } catch (c) {
    Ra(c, r, i);
  }
}
function Qn(t, r, i, s) {
  if (Qe(t)) {
    const c = Ui(t, r, i, s);
    return c && iu(c) && c.catch((d) => {
      Ra(d, r, i);
    }), c;
  }
  if (Ue(t)) {
    const c = [];
    for (let d = 0; d < t.length; d++)
      c.push(Qn(t[d], r, i, s));
    return c;
  }
}
function Ra(t, r, i, s = !0) {
  const c = r ? r.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: u } = r && r.appContext.config || bt;
  if (r) {
    let p = r.parent;
    const m = r.proxy, k = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const O = p.ec;
      if (O) {
        for (let D = 0; D < O.length; D++)
          if (O[D](t, m, k) === !1)
            return;
      }
      p = p.parent;
    }
    if (d) {
      Ar(), Ui(d, null, 10, [
        t,
        m,
        k
      ]), Ir();
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
let Lr = null, So = 0;
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
  Ue(t) ? Lo.push(...t) : Lr && t.id === -1 ? Lr.splice(So + 1, 0, t) : t.flags & 1 || (Lo.push(t), t.flags |= 1), ku();
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
    for (Lr = r, So = 0; So < Lr.length; So++) {
      const i = Lr[So];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    Lr = null, So = 0;
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
let $t = null, Bu = null;
function ca(t) {
  const r = $t;
  return $t = t, Bu = t && t.type.__scopeId || null, r;
}
function _s(t, r = $t, i) {
  if (!r || t._n)
    return t;
  const s = (...c) => {
    s._d && Al(-1);
    const d = ca(r);
    let u;
    try {
      u = t(...c);
    } finally {
      ca(d), s._d && Al(1);
    }
    return u;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function rt(t, r) {
  if ($t === null)
    return t;
  const i = Aa($t), s = t.dirs || (t.dirs = []);
  for (let c = 0; c < r.length; c++) {
    let [d, u, p, m = bt] = r[c];
    d && (Qe(d) && (d = {
      mounted: d,
      updated: d
    }), d.deep && Cr(u), s.push({
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
    m && (Ar(), Qn(m, i, 8, [
      t.el,
      p,
      t,
      r
    ]), Ir());
  }
}
const Mu = Symbol("_vte"), xf = (t) => t.__isTeleport, Ti = (t) => t && (t.disabled || t.disabled === ""), vl = (t) => t && (t.defer || t.defer === ""), yl = (t) => typeof SVGElement < "u" && t instanceof SVGElement, gl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, xs = (t, r) => {
  const i = t && t.to;
  return It(i) ? r ? r(i) : null : i;
}, $u = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, r, i, s, c, d, u, p, m, k) {
    const {
      mc: O,
      pc: D,
      pbc: L,
      o: { insert: Y, querySelector: Q, createText: W, createComment: G }
    } = k, V = Ti(r.props);
    let { shapeFlag: M, children: $, dynamicChildren: te } = r;
    if (t == null) {
      const Oe = r.el = W(""), pe = r.anchor = W("");
      Y(Oe, i, s), Y(pe, i, s);
      const X = (j, le) => {
        M & 16 && (c && c.isCE && (c.ce._teleportTarget = j), O(
          $,
          j,
          le,
          c,
          d,
          u,
          p,
          m
        ));
      }, se = () => {
        const j = r.target = xs(r.props, Q), le = Ku(j, r, W, Y);
        j && (u !== "svg" && yl(j) ? u = "svg" : u !== "mathml" && gl(j) && (u = "mathml"), V || (X(j, le), Zi(r, !1)));
      };
      V && (X(i, pe), Zi(r, !0)), vl(r.props) ? (r.el.__isMounted = !1, hn(() => {
        se(), delete r.el.__isMounted;
      }, d)) : se();
    } else {
      if (vl(r.props) && t.el.__isMounted === !1) {
        hn(() => {
          $u.process(
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
      const Oe = r.anchor = t.anchor, pe = r.target = t.target, X = r.targetAnchor = t.targetAnchor, se = Ti(t.props), j = se ? i : pe, le = se ? Oe : X;
      if (u === "svg" || yl(pe) ? u = "svg" : (u === "mathml" || gl(pe)) && (u = "mathml"), te ? (L(
        t.dynamicChildren,
        te,
        j,
        c,
        d,
        u,
        p
      ), Zs(t, r, !0)) : m || D(
        t,
        r,
        j,
        le,
        c,
        d,
        u,
        p,
        !1
      ), V)
        se ? r.props && t.props && r.props.to !== t.props.to && (r.props.to = t.props.to) : Yi(
          r,
          i,
          Oe,
          k,
          1
        );
      else if ((r.props && r.props.to) !== (t.props && t.props.to)) {
        const be = r.target = xs(
          r.props,
          Q
        );
        be && Yi(
          r,
          be,
          null,
          k,
          0
        );
      } else se && Yi(
        r,
        pe,
        X,
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
      target: D,
      props: L
    } = t;
    if (D && (c(k), c(O)), d && c(m), u & 16) {
      const Y = d || !Ti(L);
      for (let Q = 0; Q < p.length; Q++) {
        const W = p[Q];
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
  const { el: u, anchor: p, shapeFlag: m, children: k, props: O } = t, D = d === 2;
  if (D && s(u, r, i), (!D || Ti(O)) && m & 16)
    for (let L = 0; L < k.length; L++)
      c(
        k[L],
        r,
        i,
        2
      );
  D && s(p, r, i);
}
function Nf(t, r, i, s, c, d, {
  o: { nextSibling: u, parentNode: p, querySelector: m, insert: k, createText: O }
}, D) {
  const L = r.target = xs(
    r.props,
    m
  );
  if (L) {
    const Y = Ti(r.props), Q = L._lpa || L.firstChild;
    if (r.shapeFlag & 16)
      if (Y)
        r.anchor = D(
          u(t),
          r,
          p(t),
          i,
          s,
          c,
          d
        ), r.targetStart = Q, r.targetAnchor = Q && u(Q);
      else {
        r.anchor = u(t);
        let W = Q;
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
        r.targetAnchor || Ku(L, r, O, k), D(
          Q && u(Q),
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
const jo = $u;
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
  return c[Mu] = d, t && (s(c, t), s(d, t)), d;
}
function Xs(t, r) {
  t.shapeFlag & 6 && t.component ? (t.transition = r, Xs(t.component.subTree, r)) : t.shapeFlag & 128 ? (t.ssContent.transition = r.clone(t.ssContent), t.ssFallback.transition = r.clone(t.ssFallback)) : t.transition = r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function At(t, r) {
  return Qe(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    rn({ name: t.name }, r, { setup: t })
  ) : t;
}
function qu(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function Rf(t) {
  const r = _d(), i = An(null);
  if (r) {
    const c = r.refs === bt ? r.refs = {} : r.refs;
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
      (Q, W) => Ei(
        Q,
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
  const d = s.shapeFlag & 4 ? Aa(s.component) : s.el, u = c ? null : d, { i: p, r: m } = t, k = r && r.r, O = p.refs === bt ? p.refs = {} : p.refs, D = p.setupState, L = dt(D), Y = D === bt ? () => !1 : (Q) => vt(L, Q);
  if (k != null && k !== m && (It(k) ? (O[k] = null, Y(k) && (D[k] = null)) : Ot(k) && (k.value = null)), Qe(m))
    Ui(m, p, 12, [u, O]);
  else {
    const Q = It(m), W = Ot(m);
    if (Q || W) {
      const G = () => {
        if (t.f) {
          const V = Q ? Y(m) ? D[m] : O[m] : m.value;
          c ? Ue(V) && Bs(V, d) : Ue(V) ? V.includes(d) || V.push(d) : Q ? (O[m] = [d], Y(m) && (D[m] = O[m])) : (m.value = [d], t.k && (O[t.k] = m.value));
        } else Q ? (O[m] = u, Y(m) && (D[m] = u)) : W && (m.value = u, t.k && (O[t.k] = u));
      };
      u ? (G.id = -1, hn(G, i)) : G();
    }
  }
}
ba().requestIdleCallback;
ba().cancelIdleCallback;
const ko = (t) => !!t.type.__asyncLoader, Uu = (t) => t.type.__isKeepAlive;
function Cf(t, r) {
  Vu(t, "a", r);
}
function Tf(t, r) {
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
  if (Ca(r, s, i), i) {
    let c = i.parent;
    for (; c && c.parent; )
      Uu(c.parent.vnode) && Ef(s, r, i, c), c = c.parent;
  }
}
function Ef(t, r, i, s) {
  const c = Ca(
    r,
    t,
    s,
    !0
    /* prepend */
  );
  Qs(() => {
    Bs(s[r], c);
  }, i);
}
function Ca(t, r, i = Vt, s = !1) {
  if (i) {
    const c = i[t] || (i[t] = []), d = r.__weh || (r.__weh = (...u) => {
      Ar();
      const p = Vi(i), m = Qn(r, i, t, u);
      return p(), Ir(), m;
    });
    return s ? c.unshift(d) : c.push(d), d;
  }
}
const Dr = (t) => (r, i = Vt) => {
  (!ji || t === "sp") && Ca(t, (...s) => r(...s), i);
}, Of = Dr("bm"), Ko = Dr("m"), Af = Dr(
  "bu"
), If = Dr("u"), Sf = Dr(
  "bum"
), Qs = Dr("um"), Df = Dr(
  "sp"
), Pf = Dr("rtg"), Lf = Dr("rtc");
function kf(t, r = Vt) {
  Ca("ec", t, r);
}
const jf = "components", Wu = Symbol.for("v-ndc");
function Ff(t) {
  return It(t) ? Bf(jf, t, !1) || t : t || Wu;
}
function Bf(t, r, i = !0, s = !1) {
  const c = $t || Vt;
  if (c) {
    const d = c.type;
    {
      const p = Td(
        d,
        !1
      );
      if (p && (p === r || p === Dn(r) || p === ga(Dn(r))))
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
  return t && (t[r] || t[Dn(r)] || t[ga(Dn(r))]);
}
function Et(t, r, i, s) {
  let c;
  const d = i, u = Ue(t);
  if (u || It(t)) {
    const p = u && Er(t);
    let m = !1, k = !1;
    p && (m = !In(t), k = Br(t), t = wa(t)), c = new Array(t.length);
    for (let O = 0, D = t.length; O < D; O++)
      c[O] = r(
        m ? k ? sa(zt(t[O])) : zt(t[O]) : t[O],
        O,
        void 0,
        d
      );
  } else if (typeof t == "number") {
    c = new Array(t);
    for (let p = 0; p < t; p++)
      c[p] = r(p + 1, p, void 0, d);
  } else if (Ct(t))
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
  if ($t.ce || $t.parent && ko($t.parent) && $t.parent.ce)
    return r !== "default" && (i.name = r), ce(), Zt(
      Ke,
      null,
      [mt("slot", i, s)],
      64
    );
  let d = t[r];
  d && d._c && (d._d = !1), ce();
  const u = d && Gu(d(i)), p = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  u && u.key, m = Zt(
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
  return t.some((r) => tl(r) ? !(r.type === Sr || r.type === Ke && !Gu(r.children)) : !0) ? t : null;
}
const Ns = (t) => t ? dc(t) ? Aa(t) : Ns(t.parent) : null, Oi = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ rn(/* @__PURE__ */ Object.create(null), {
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
), us = (t, r) => t !== bt && !t.__isScriptSetup && vt(t, r), Mf = {
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
        if (c !== bt && vt(c, r))
          return u[r] = 2, c[r];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (k = t.propsOptions[0]) && vt(k, r)
        )
          return u[r] = 3, d[r];
        if (i !== bt && vt(i, r))
          return u[r] = 4, i[r];
        Rs && (u[r] = 0);
      }
    }
    const O = Oi[r];
    let D, L;
    if (O)
      return r === "$attrs" && nn(t.attrs, "get", ""), O(t);
    if (
      // css module (injected by vue-loader)
      (D = p.__cssModules) && (D = D[r])
    )
      return D;
    if (i !== bt && vt(i, r))
      return u[r] = 4, i[r];
    if (
      // global properties
      L = m.config.globalProperties, vt(L, r)
    )
      return L[r];
  },
  set({ _: t }, r, i) {
    const { data: s, setupState: c, ctx: d } = t;
    return us(c, r) ? (c[r] = i, !0) : s !== bt && vt(s, r) ? (s[r] = i, !0) : vt(t.props, r) || r[0] === "$" && r.slice(1) in t ? !1 : (d[r] = i, !0);
  },
  has({
    _: { data: t, setupState: r, accessCache: i, ctx: s, appContext: c, propsOptions: d }
  }, u) {
    let p;
    return !!i[u] || t !== bt && vt(t, u) || us(r, u) || (p = d[0]) && vt(p, u) || vt(s, u) || vt(Oi, u) || vt(c.config.globalProperties, u);
  },
  defineProperty(t, r, i) {
    return i.get != null ? t._.accessCache[r] = 0 : vt(i, "value") && this.set(t, r, i.value, null), Reflect.defineProperty(t, r, i);
  }
};
function _l(t) {
  return Ue(t) ? t.reduce(
    (r, i) => (r[i] = null, r),
    {}
  ) : t;
}
let Rs = !0;
function $f(t) {
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
    beforeMount: D,
    mounted: L,
    beforeUpdate: Y,
    updated: Q,
    activated: W,
    deactivated: G,
    beforeDestroy: V,
    beforeUnmount: M,
    destroyed: $,
    unmounted: te,
    render: Oe,
    renderTracked: pe,
    renderTriggered: X,
    errorCaptured: se,
    serverPrefetch: j,
    // public API
    expose: le,
    inheritAttrs: be,
    // assets
    components: ge,
    directives: Ae,
    filters: st
  } = r;
  if (k && Kf(k, s, null), u)
    for (const we in u) {
      const Pe = u[we];
      Qe(Pe) && (s[we] = Pe.bind(i));
    }
  if (c) {
    const we = c.call(i, i);
    Ct(we) && (t.data = qi(we));
  }
  if (Rs = !0, d)
    for (const we in d) {
      const Pe = d[we], yt = Qe(Pe) ? Pe.bind(i, i) : Qe(Pe.get) ? Pe.get.bind(i, i) : Xn, He = !Qe(Pe) && Qe(Pe.set) ? Pe.set.bind(i) : Xn, gt = Ye({
        get: yt,
        set: He
      });
      Object.defineProperty(s, we, {
        enumerable: !0,
        configurable: !0,
        get: () => gt.value,
        set: (Kt) => gt.value = Kt
      });
    }
  if (p)
    for (const we in p)
      Hu(p[we], s, i, we);
  if (m) {
    const we = Qe(m) ? m.call(i) : m;
    Reflect.ownKeys(we).forEach((Pe) => {
      Hf(Pe, we[Pe]);
    });
  }
  O && xl(O, t, "c");
  function nt(we, Pe) {
    Ue(Pe) ? Pe.forEach((yt) => we(yt.bind(i))) : Pe && we(Pe.bind(i));
  }
  if (nt(Of, D), nt(Ko, L), nt(Af, Y), nt(If, Q), nt(Cf, W), nt(Tf, G), nt(kf, se), nt(Lf, pe), nt(Pf, X), nt(Sf, M), nt(Qs, te), nt(Df, j), Ue(le))
    if (le.length) {
      const we = t.exposed || (t.exposed = {});
      le.forEach((Pe) => {
        Object.defineProperty(we, Pe, {
          get: () => i[Pe],
          set: (yt) => i[Pe] = yt
        });
      });
    } else t.exposed || (t.exposed = {});
  Oe && t.render === Xn && (t.render = Oe), be != null && (t.inheritAttrs = be), ge && (t.components = ge), Ae && (t.directives = Ae), j && qu(t);
}
function Kf(t, r, i = Xn) {
  Ue(t) && (t = Cs(t));
  for (const s in t) {
    const c = t[s];
    let d;
    Ct(c) ? "default" in c ? d = Ai(
      c.from || s,
      c.default,
      !0
    ) : d = Ai(c.from || s) : d = Ai(c), Ot(d) ? Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (u) => d.value = u
    }) : r[s] = d;
  }
}
function xl(t, r, i) {
  Qn(
    Ue(t) ? t.map((s) => s.bind(r.proxy)) : t.bind(r.proxy),
    r,
    i
  );
}
function Hu(t, r, i, s) {
  let c = s.includes(".") ? ic(i, s) : () => i[s];
  if (It(t)) {
    const d = r[t];
    Qe(d) && Ut(c, d);
  } else if (Qe(t))
    Ut(c, t.bind(i));
  else if (Ct(t))
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
  ), fa(m, r, u)), Ct(r) && d.set(r, m), m;
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
  beforeCreate: pn,
  created: pn,
  beforeMount: pn,
  mounted: pn,
  beforeUpdate: pn,
  updated: pn,
  beforeDestroy: pn,
  beforeUnmount: pn,
  destroyed: pn,
  unmounted: pn,
  activated: pn,
  deactivated: pn,
  errorCaptured: pn,
  serverPrefetch: pn,
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
    return rn(
      Qe(t) ? t.call(this, this) : t,
      Qe(r) ? r.call(this, this) : r
    );
  } : r : t;
}
function Uf(t, r) {
  return xi(Cs(t), Cs(r));
}
function Cs(t) {
  if (Ue(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++)
      r[t[i]] = t[i];
    return r;
  }
  return t;
}
function pn(t, r) {
  return t ? [...new Set([].concat(t, r))] : r;
}
function xi(t, r) {
  return t ? rn(/* @__PURE__ */ Object.create(null), t, r) : r;
}
function Rl(t, r) {
  return t ? Ue(t) && Ue(r) ? [.../* @__PURE__ */ new Set([...t, ...r])] : rn(
    /* @__PURE__ */ Object.create(null),
    _l(t),
    _l(r ?? {})
  ) : r;
}
function Vf(t, r) {
  if (!t) return r;
  if (!r) return t;
  const i = rn(/* @__PURE__ */ Object.create(null), t);
  for (const s in r)
    i[s] = pn(t[s], r[s]);
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
    Qe(s) || (s = rn({}, s)), c != null && !Ct(c) && (c = null);
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
      use(O, ...D) {
        return u.has(O) || (O && Qe(O.install) ? (u.add(O), O.install(k, ...D)) : Qe(O) && (u.add(O), O(k, ...D))), k;
      },
      mixin(O) {
        return d.mixins.includes(O) || d.mixins.push(O), k;
      },
      component(O, D) {
        return D ? (d.components[O] = D, k) : d.components[O];
      },
      directive(O, D) {
        return D ? (d.directives[O] = D, k) : d.directives[O];
      },
      mount(O, D, L) {
        if (!m) {
          const Y = k._ceVNode || mt(s, c);
          return Y.appContext = d, L === !0 ? L = "svg" : L === !1 && (L = void 0), t(Y, O, L), m = !0, k._container = O, O.__vue_app__ = k, Aa(Y.component);
        }
      },
      onUnmount(O) {
        p.push(O);
      },
      unmount() {
        m && (Qn(
          p,
          k._instance,
          16
        ), t(null, k._container), delete k._container.__vue_app__);
      },
      provide(O, D) {
        return d.provides[O] = D, k;
      },
      runWithContext(O) {
        const D = Ro;
        Ro = k;
        try {
          return O();
        } finally {
          Ro = D;
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
function Ai(t, r, i = !1) {
  const s = Vt || $t;
  if (s || Ro) {
    let c = Ro ? Ro._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (c && t in c)
      return c[t];
    if (arguments.length > 1)
      return i && Qe(r) ? r.call(s && s.proxy) : r;
  }
}
function Yf() {
  return !!(Vt || $t || Ro);
}
const Qu = {}, zu = () => Object.create(Qu), Ju = (t) => Object.getPrototypeOf(t) === Qu;
function Xf(t, r, i, s = !1) {
  const c = {}, d = zu();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Zu(t, r, c, d);
  for (const u in t.propsOptions[0])
    u in c || (c[u] = void 0);
  i ? t.props = s ? c : af(c) : t.type.props ? t.props = c : t.props = d, t.attrs = d;
}
function Qf(t, r, i, s) {
  const {
    props: c,
    attrs: d,
    vnode: { patchFlag: u }
  } = t, p = dt(c), [m] = t.propsOptions;
  let k = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || u > 0) && !(u & 16)
  ) {
    if (u & 8) {
      const O = t.vnode.dynamicProps;
      for (let D = 0; D < O.length; D++) {
        let L = O[D];
        if (Ea(t.emitsOptions, L))
          continue;
        const Y = r[L];
        if (m)
          if (vt(d, L))
            Y !== d[L] && (d[L] = Y, k = !0);
          else {
            const Q = Dn(L);
            c[Q] = Ts(
              m,
              p,
              Q,
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
    for (const D in p)
      (!r || // for camelCase
      !vt(r, D) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((O = Oo(D)) === D || !vt(r, O))) && (m ? i && // for camelCase
      (i[D] !== void 0 || // for kebab-case
      i[O] !== void 0) && (c[D] = Ts(
        m,
        p,
        D,
        void 0,
        t,
        !0
      )) : delete c[D]);
    if (d !== p)
      for (const D in d)
        (!r || !vt(r, D)) && (delete d[D], k = !0);
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
      c && vt(c, O = Dn(m)) ? !d || !d.includes(O) ? i[O] = k : (p || (p = {}))[O] = k : Ea(t.emitsOptions, m) || (!(m in s) || k !== s[m]) && (s[m] = k, u = !0);
    }
  if (d) {
    const m = dt(i), k = p || bt;
    for (let O = 0; O < d.length; O++) {
      const D = d[O];
      i[D] = Ts(
        c,
        m,
        D,
        k[D],
        t,
        !vt(k, D)
      );
    }
  }
  return u;
}
function Ts(t, r, i, s, c, d) {
  const u = t[i];
  if (u != null) {
    const p = vt(u, "default");
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
const zf = /* @__PURE__ */ new WeakMap();
function ec(t, r, i = !1) {
  const s = i ? zf : r.propsCache, c = s.get(t);
  if (c)
    return c;
  const d = t.props, u = {}, p = [];
  let m = !1;
  if (!Qe(t)) {
    const O = (D) => {
      m = !0;
      const [L, Y] = ec(D, r, !0);
      rn(u, L), Y && p.push(...Y);
    };
    !i && r.mixins.length && r.mixins.forEach(O), t.extends && O(t.extends), t.mixins && t.mixins.forEach(O);
  }
  if (!d && !m)
    return Ct(t) && s.set(t, Do), Do;
  if (Ue(d))
    for (let O = 0; O < d.length; O++) {
      const D = Dn(d[O]);
      Cl(D) && (u[D] = bt);
    }
  else if (d)
    for (const O in d) {
      const D = Dn(O);
      if (Cl(D)) {
        const L = d[O], Y = u[D] = Ue(L) || Qe(L) ? { type: L } : rn({}, L), Q = Y.type;
        let W = !1, G = !0;
        if (Ue(Q))
          for (let V = 0; V < Q.length; ++V) {
            const M = Q[V], $ = Qe(M) && M.name;
            if ($ === "Boolean") {
              W = !0;
              break;
            } else $ === "String" && (G = !1);
          }
        else
          W = Qe(Q) && Q.name === "Boolean";
        Y[
          0
          /* shouldCast */
        ] = W, Y[
          1
          /* shouldCastTrue */
        ] = G, (W || vt(Y, "default")) && p.push(D);
      }
    }
  const k = [u, p];
  return Ct(t) && s.set(t, k), k;
}
function Cl(t) {
  return t[0] !== "$" && !Ni(t);
}
const zs = (t) => t[0] === "_" || t === "$stable", Js = (t) => Ue(t) ? t.map(Yn) : [Yn(t)], Jf = (t, r, i) => {
  if (r._n)
    return r;
  const s = _s((...c) => Js(r(...c)), i);
  return s._c = !1, s;
}, tc = (t, r, i) => {
  const s = t._ctx;
  for (const c in t) {
    if (zs(c)) continue;
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
    (i || !zs(s)) && (t[s] = r[s]);
}, Zf = (t, r, i) => {
  const s = t.slots = zu();
  if (t.vnode.shapeFlag & 32) {
    const c = r.__;
    c && ys(s, "__", c, !0);
    const d = r._;
    d ? (rc(s, r, i), i && ys(s, "_", d, !0)) : tc(r, s);
  } else r && nc(t, r);
}, ed = (t, r, i) => {
  const { vnode: s, slots: c } = t;
  let d = !0, u = bt;
  if (s.shapeFlag & 32) {
    const p = r._;
    p ? i && p === 1 ? d = !1 : rc(c, r, i) : (d = !r.$stable, tc(r, c)), u = r;
  } else r && (nc(t, r), u = { default: 1 });
  if (d)
    for (const p in c)
      !zs(p) && u[p] == null && delete c[p];
}, hn = hd;
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
    parentNode: D,
    nextSibling: L,
    setScopeId: Y = Xn,
    insertStaticContent: Q
  } = t, W = (I, U, ae, de = null, ye = null, he = null, Re = void 0, Te = null, _e = !!U.dynamicChildren) => {
    if (I === U)
      return;
    I && !_i(I, U) && (de = S(I), Kt(I, ye, he, !0), I = null), U.patchFlag === -2 && (_e = !1, U.dynamicChildren = null);
    const { type: me, ref: je, shapeFlag: Ee } = U;
    switch (me) {
      case Oa:
        G(I, U, ae, de);
        break;
      case Sr:
        V(I, U, ae, de);
        break;
      case ea:
        I == null && M(U, ae, de, Re);
        break;
      case Ke:
        ge(
          I,
          U,
          ae,
          de,
          ye,
          he,
          Re,
          Te,
          _e
        );
        break;
      default:
        Ee & 1 ? Oe(
          I,
          U,
          ae,
          de,
          ye,
          he,
          Re,
          Te,
          _e
        ) : Ee & 6 ? Ae(
          I,
          U,
          ae,
          de,
          ye,
          he,
          Re,
          Te,
          _e
        ) : (Ee & 64 || Ee & 128) && me.process(
          I,
          U,
          ae,
          de,
          ye,
          he,
          Re,
          Te,
          _e,
          J
        );
    }
    je != null && ye ? Ei(je, I && I.ref, he, U || I, !U) : je == null && I && I.ref != null && Ei(I.ref, null, he, I, !0);
  }, G = (I, U, ae, de) => {
    if (I == null)
      s(
        U.el = p(U.children),
        ae,
        de
      );
    else {
      const ye = U.el = I.el;
      U.children !== I.children && k(ye, U.children);
    }
  }, V = (I, U, ae, de) => {
    I == null ? s(
      U.el = m(U.children || ""),
      ae,
      de
    ) : U.el = I.el;
  }, M = (I, U, ae, de) => {
    [I.el, I.anchor] = Q(
      I.children,
      U,
      ae,
      de,
      I.el,
      I.anchor
    );
  }, $ = ({ el: I, anchor: U }, ae, de) => {
    let ye;
    for (; I && I !== U; )
      ye = L(I), s(I, ae, de), I = ye;
    s(U, ae, de);
  }, te = ({ el: I, anchor: U }) => {
    let ae;
    for (; I && I !== U; )
      ae = L(I), c(I), I = ae;
    c(U);
  }, Oe = (I, U, ae, de, ye, he, Re, Te, _e) => {
    U.type === "svg" ? Re = "svg" : U.type === "math" && (Re = "mathml"), I == null ? pe(
      U,
      ae,
      de,
      ye,
      he,
      Re,
      Te,
      _e
    ) : j(
      I,
      U,
      ye,
      he,
      Re,
      Te,
      _e
    );
  }, pe = (I, U, ae, de, ye, he, Re, Te) => {
    let _e, me;
    const { props: je, shapeFlag: Ee, transition: Be, dirs: Me } = I;
    if (_e = I.el = u(
      I.type,
      he,
      je && je.is,
      je
    ), Ee & 8 ? O(_e, I.children) : Ee & 16 && se(
      I.children,
      _e,
      null,
      de,
      ye,
      cs(I, he),
      Re,
      Te
    ), Me && wo(I, null, de, "created"), X(_e, I, I.scopeId, Re, de), je) {
      for (const Ze in je)
        Ze !== "value" && !Ni(Ze) && d(_e, Ze, null, je[Ze], he, de);
      "value" in je && d(_e, "value", null, je.value, he), (me = je.onVnodeBeforeMount) && Gn(me, de, I);
    }
    Me && wo(I, null, de, "beforeMount");
    const Ve = rd(ye, Be);
    Ve && Be.beforeEnter(_e), s(_e, U, ae), ((me = je && je.onVnodeMounted) || Ve || Me) && hn(() => {
      me && Gn(me, de, I), Ve && Be.enter(_e), Me && wo(I, null, de, "mounted");
    }, ye);
  }, X = (I, U, ae, de, ye) => {
    if (ae && Y(I, ae), de)
      for (let he = 0; he < de.length; he++)
        Y(I, de[he]);
    if (ye) {
      let he = ye.subTree;
      if (U === he || sc(he.type) && (he.ssContent === U || he.ssFallback === U)) {
        const Re = ye.vnode;
        X(
          I,
          Re,
          Re.scopeId,
          Re.slotScopeIds,
          ye.parent
        );
      }
    }
  }, se = (I, U, ae, de, ye, he, Re, Te, _e = 0) => {
    for (let me = _e; me < I.length; me++) {
      const je = I[me] = Te ? kr(I[me]) : Yn(I[me]);
      W(
        null,
        je,
        U,
        ae,
        de,
        ye,
        he,
        Re,
        Te
      );
    }
  }, j = (I, U, ae, de, ye, he, Re) => {
    const Te = U.el = I.el;
    let { patchFlag: _e, dynamicChildren: me, dirs: je } = U;
    _e |= I.patchFlag & 16;
    const Ee = I.props || bt, Be = U.props || bt;
    let Me;
    if (ae && _o(ae, !1), (Me = Be.onVnodeBeforeUpdate) && Gn(Me, ae, U, I), je && wo(U, I, ae, "beforeUpdate"), ae && _o(ae, !0), (Ee.innerHTML && Be.innerHTML == null || Ee.textContent && Be.textContent == null) && O(Te, ""), me ? le(
      I.dynamicChildren,
      me,
      Te,
      ae,
      de,
      cs(U, ye),
      he
    ) : Re || Pe(
      I,
      U,
      Te,
      null,
      ae,
      de,
      cs(U, ye),
      he,
      !1
    ), _e > 0) {
      if (_e & 16)
        be(Te, Ee, Be, ae, ye);
      else if (_e & 2 && Ee.class !== Be.class && d(Te, "class", null, Be.class, ye), _e & 4 && d(Te, "style", Ee.style, Be.style, ye), _e & 8) {
        const Ve = U.dynamicProps;
        for (let Ze = 0; Ze < Ve.length; Ze++) {
          const ot = Ve[Ze], _t = Ee[ot], St = Be[ot];
          (St !== _t || ot === "value") && d(Te, ot, _t, St, ye, ae);
        }
      }
      _e & 1 && I.children !== U.children && O(Te, U.children);
    } else !Re && me == null && be(Te, Ee, Be, ae, ye);
    ((Me = Be.onVnodeUpdated) || je) && hn(() => {
      Me && Gn(Me, ae, U, I), je && wo(U, I, ae, "updated");
    }, de);
  }, le = (I, U, ae, de, ye, he, Re) => {
    for (let Te = 0; Te < U.length; Te++) {
      const _e = I[Te], me = U[Te], je = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        _e.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (_e.type === Ke || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_i(_e, me) || // - In the case of a component, it could contain anything.
        _e.shapeFlag & 198) ? D(_e.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ae
        )
      );
      W(
        _e,
        me,
        je,
        null,
        de,
        ye,
        he,
        Re,
        !0
      );
    }
  }, be = (I, U, ae, de, ye) => {
    if (U !== ae) {
      if (U !== bt)
        for (const he in U)
          !Ni(he) && !(he in ae) && d(
            I,
            he,
            U[he],
            null,
            ye,
            de
          );
      for (const he in ae) {
        if (Ni(he)) continue;
        const Re = ae[he], Te = U[he];
        Re !== Te && he !== "value" && d(I, he, Te, Re, ye, de);
      }
      "value" in ae && d(I, "value", U.value, ae.value, ye);
    }
  }, ge = (I, U, ae, de, ye, he, Re, Te, _e) => {
    const me = U.el = I ? I.el : p(""), je = U.anchor = I ? I.anchor : p("");
    let { patchFlag: Ee, dynamicChildren: Be, slotScopeIds: Me } = U;
    Me && (Te = Te ? Te.concat(Me) : Me), I == null ? (s(me, ae, de), s(je, ae, de), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      U.children || [],
      ae,
      je,
      ye,
      he,
      Re,
      Te,
      _e
    )) : Ee > 0 && Ee & 64 && Be && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    I.dynamicChildren ? (le(
      I.dynamicChildren,
      Be,
      ae,
      ye,
      he,
      Re,
      Te
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (U.key != null || ye && U === ye.subTree) && Zs(
      I,
      U,
      !0
      /* shallow */
    )) : Pe(
      I,
      U,
      ae,
      je,
      ye,
      he,
      Re,
      Te,
      _e
    );
  }, Ae = (I, U, ae, de, ye, he, Re, Te, _e) => {
    U.slotScopeIds = Te, I == null ? U.shapeFlag & 512 ? ye.ctx.activate(
      U,
      ae,
      de,
      Re,
      _e
    ) : st(
      U,
      ae,
      de,
      ye,
      he,
      Re,
      _e
    ) : lt(I, U, _e);
  }, st = (I, U, ae, de, ye, he, Re) => {
    const Te = I.component = wd(
      I,
      de,
      ye
    );
    if (Uu(I) && (Te.ctx.renderer = J), xd(Te, !1, Re), Te.asyncDep) {
      if (ye && ye.registerDep(Te, nt, Re), !I.el) {
        const _e = Te.subTree = mt(Sr);
        V(null, _e, U, ae);
      }
    } else
      nt(
        Te,
        I,
        U,
        ae,
        ye,
        he,
        Re
      );
  }, lt = (I, U, ae) => {
    const de = U.component = I.component;
    if (dd(I, U, ae))
      if (de.asyncDep && !de.asyncResolved) {
        we(de, U, ae);
        return;
      } else
        de.next = U, de.update();
    else
      U.el = I.el, de.vnode = U;
  }, nt = (I, U, ae, de, ye, he, Re) => {
    const Te = () => {
      if (I.isMounted) {
        let { next: Ee, bu: Be, u: Me, parent: Ve, vnode: Ze } = I;
        {
          const xt = oc(I);
          if (xt) {
            Ee && (Ee.el = Ze.el, we(I, Ee, Re)), xt.asyncDep.then(() => {
              I.isUnmounted || Te();
            });
            return;
          }
        }
        let ot = Ee, _t;
        _o(I, !1), Ee ? (Ee.el = Ze.el, we(I, Ee, Re)) : Ee = Ze, Be && Ji(Be), (_t = Ee.props && Ee.props.onVnodeBeforeUpdate) && Gn(_t, Ve, Ee, Ze), _o(I, !0);
        const St = El(I), jt = I.subTree;
        I.subTree = St, W(
          jt,
          St,
          // parent may have changed if it's in a teleport
          D(jt.el),
          // anchor may have changed if it's in a fragment
          S(jt),
          I,
          ye,
          he
        ), Ee.el = St.el, ot === null && pd(I, St.el), Me && hn(Me, ye), (_t = Ee.props && Ee.props.onVnodeUpdated) && hn(
          () => Gn(_t, Ve, Ee, Ze),
          ye
        );
      } else {
        let Ee;
        const { el: Be, props: Me } = U, { bm: Ve, m: Ze, parent: ot, root: _t, type: St } = I, jt = ko(U);
        _o(I, !1), Ve && Ji(Ve), !jt && (Ee = Me && Me.onVnodeBeforeMount) && Gn(Ee, ot, U), _o(I, !0);
        {
          _t.ce && // @ts-expect-error _def is private
          _t.ce._def.shadowRoot !== !1 && _t.ce._injectChildStyle(St);
          const xt = I.subTree = El(I);
          W(
            null,
            xt,
            ae,
            de,
            I,
            ye,
            he
          ), U.el = xt.el;
        }
        if (Ze && hn(Ze, ye), !jt && (Ee = Me && Me.onVnodeMounted)) {
          const xt = U;
          hn(
            () => Gn(Ee, ot, xt),
            ye
          );
        }
        (U.shapeFlag & 256 || ot && ko(ot.vnode) && ot.vnode.shapeFlag & 256) && I.a && hn(I.a, ye), I.isMounted = !0, U = ae = de = null;
      }
    };
    I.scope.on();
    const _e = I.effect = new hu(Te);
    I.scope.off();
    const me = I.update = _e.run.bind(_e), je = I.job = _e.runIfDirty.bind(_e);
    je.i = I, je.id = I.uid, _e.scheduler = () => Ys(je), _o(I, !0), me();
  }, we = (I, U, ae) => {
    U.component = I;
    const de = I.vnode.props;
    I.vnode = U, I.next = null, Qf(I, U.props, de, ae), ed(I, U.children, ae), Ar(), ml(I), Ir();
  }, Pe = (I, U, ae, de, ye, he, Re, Te, _e = !1) => {
    const me = I && I.children, je = I ? I.shapeFlag : 0, Ee = U.children, { patchFlag: Be, shapeFlag: Me } = U;
    if (Be > 0) {
      if (Be & 128) {
        He(
          me,
          Ee,
          ae,
          de,
          ye,
          he,
          Re,
          Te,
          _e
        );
        return;
      } else if (Be & 256) {
        yt(
          me,
          Ee,
          ae,
          de,
          ye,
          he,
          Re,
          Te,
          _e
        );
        return;
      }
    }
    Me & 8 ? (je & 16 && Pt(me, ye, he), Ee !== me && O(ae, Ee)) : je & 16 ? Me & 16 ? He(
      me,
      Ee,
      ae,
      de,
      ye,
      he,
      Re,
      Te,
      _e
    ) : Pt(me, ye, he, !0) : (je & 8 && O(ae, ""), Me & 16 && se(
      Ee,
      ae,
      de,
      ye,
      he,
      Re,
      Te,
      _e
    ));
  }, yt = (I, U, ae, de, ye, he, Re, Te, _e) => {
    I = I || Do, U = U || Do;
    const me = I.length, je = U.length, Ee = Math.min(me, je);
    let Be;
    for (Be = 0; Be < Ee; Be++) {
      const Me = U[Be] = _e ? kr(U[Be]) : Yn(U[Be]);
      W(
        I[Be],
        Me,
        ae,
        null,
        ye,
        he,
        Re,
        Te,
        _e
      );
    }
    me > je ? Pt(
      I,
      ye,
      he,
      !0,
      !1,
      Ee
    ) : se(
      U,
      ae,
      de,
      ye,
      he,
      Re,
      Te,
      _e,
      Ee
    );
  }, He = (I, U, ae, de, ye, he, Re, Te, _e) => {
    let me = 0;
    const je = U.length;
    let Ee = I.length - 1, Be = je - 1;
    for (; me <= Ee && me <= Be; ) {
      const Me = I[me], Ve = U[me] = _e ? kr(U[me]) : Yn(U[me]);
      if (_i(Me, Ve))
        W(
          Me,
          Ve,
          ae,
          null,
          ye,
          he,
          Re,
          Te,
          _e
        );
      else
        break;
      me++;
    }
    for (; me <= Ee && me <= Be; ) {
      const Me = I[Ee], Ve = U[Be] = _e ? kr(U[Be]) : Yn(U[Be]);
      if (_i(Me, Ve))
        W(
          Me,
          Ve,
          ae,
          null,
          ye,
          he,
          Re,
          Te,
          _e
        );
      else
        break;
      Ee--, Be--;
    }
    if (me > Ee) {
      if (me <= Be) {
        const Me = Be + 1, Ve = Me < je ? U[Me].el : de;
        for (; me <= Be; )
          W(
            null,
            U[me] = _e ? kr(U[me]) : Yn(U[me]),
            ae,
            Ve,
            ye,
            he,
            Re,
            Te,
            _e
          ), me++;
      }
    } else if (me > Be)
      for (; me <= Ee; )
        Kt(I[me], ye, he, !0), me++;
    else {
      const Me = me, Ve = me, Ze = /* @__PURE__ */ new Map();
      for (me = Ve; me <= Be; me++) {
        const pt = U[me] = _e ? kr(U[me]) : Yn(U[me]);
        pt.key != null && Ze.set(pt.key, me);
      }
      let ot, _t = 0;
      const St = Be - Ve + 1;
      let jt = !1, xt = 0;
      const on = new Array(St);
      for (me = 0; me < St; me++) on[me] = 0;
      for (me = Me; me <= Ee; me++) {
        const pt = I[me];
        if (_t >= St) {
          Kt(pt, ye, he, !0);
          continue;
        }
        let fe;
        if (pt.key != null)
          fe = Ze.get(pt.key);
        else
          for (ot = Ve; ot <= Be; ot++)
            if (on[ot - Ve] === 0 && _i(pt, U[ot])) {
              fe = ot;
              break;
            }
        fe === void 0 ? Kt(pt, ye, he, !0) : (on[fe - Ve] = me + 1, fe >= xt ? xt = fe : jt = !0, W(
          pt,
          U[fe],
          ae,
          null,
          ye,
          he,
          Re,
          Te,
          _e
        ), _t++);
      }
      const Wn = jt ? od(on) : Do;
      for (ot = Wn.length - 1, me = St - 1; me >= 0; me--) {
        const pt = Ve + me, fe = U[pt], bn = pt + 1 < je ? U[pt + 1].el : de;
        on[me] === 0 ? W(
          null,
          fe,
          ae,
          bn,
          ye,
          he,
          Re,
          Te,
          _e
        ) : jt && (ot < 0 || me !== Wn[ot] ? gt(fe, ae, bn, 2) : ot--);
      }
    }
  }, gt = (I, U, ae, de, ye = null) => {
    const { el: he, type: Re, transition: Te, children: _e, shapeFlag: me } = I;
    if (me & 6) {
      gt(I.component.subTree, U, ae, de);
      return;
    }
    if (me & 128) {
      I.suspense.move(U, ae, de);
      return;
    }
    if (me & 64) {
      Re.move(I, U, ae, J);
      return;
    }
    if (Re === Ke) {
      s(he, U, ae);
      for (let Ee = 0; Ee < _e.length; Ee++)
        gt(_e[Ee], U, ae, de);
      s(I.anchor, U, ae);
      return;
    }
    if (Re === ea) {
      $(I, U, ae);
      return;
    }
    if (de !== 2 && me & 1 && Te)
      if (de === 0)
        Te.beforeEnter(he), s(he, U, ae), hn(() => Te.enter(he), ye);
      else {
        const { leave: Ee, delayLeave: Be, afterLeave: Me } = Te, Ve = () => {
          I.ctx.isUnmounted ? c(he) : s(he, U, ae);
        }, Ze = () => {
          Ee(he, () => {
            Ve(), Me && Me();
          });
        };
        Be ? Be(he, Ve, Ze) : Ze();
      }
    else
      s(he, U, ae);
  }, Kt = (I, U, ae, de = !1, ye = !1) => {
    const {
      type: he,
      props: Re,
      ref: Te,
      children: _e,
      dynamicChildren: me,
      shapeFlag: je,
      patchFlag: Ee,
      dirs: Be,
      cacheIndex: Me
    } = I;
    if (Ee === -2 && (ye = !1), Te != null && (Ar(), Ei(Te, null, ae, I, !0), Ir()), Me != null && (U.renderCache[Me] = void 0), je & 256) {
      U.ctx.deactivate(I);
      return;
    }
    const Ve = je & 1 && Be, Ze = !ko(I);
    let ot;
    if (Ze && (ot = Re && Re.onVnodeBeforeUnmount) && Gn(ot, U, I), je & 6)
      gn(I.component, ae, de);
    else {
      if (je & 128) {
        I.suspense.unmount(ae, de);
        return;
      }
      Ve && wo(I, null, U, "beforeUnmount"), je & 64 ? I.type.remove(
        I,
        U,
        ae,
        J,
        de
      ) : me && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !me.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (he !== Ke || Ee > 0 && Ee & 64) ? Pt(
        me,
        U,
        ae,
        !1,
        !0
      ) : (he === Ke && Ee & 384 || !ye && je & 16) && Pt(_e, U, ae), de && qt(I);
    }
    (Ze && (ot = Re && Re.onVnodeUnmounted) || Ve) && hn(() => {
      ot && Gn(ot, U, I), Ve && wo(I, null, U, "unmounted");
    }, ae);
  }, qt = (I) => {
    const { type: U, el: ae, anchor: de, transition: ye } = I;
    if (U === Ke) {
      Vn(ae, de);
      return;
    }
    if (U === ea) {
      te(I);
      return;
    }
    const he = () => {
      c(ae), ye && !ye.persisted && ye.afterLeave && ye.afterLeave();
    };
    if (I.shapeFlag & 1 && ye && !ye.persisted) {
      const { leave: Re, delayLeave: Te } = ye, _e = () => Re(ae, he);
      Te ? Te(I.el, he, _e) : _e();
    } else
      he();
  }, Vn = (I, U) => {
    let ae;
    for (; I !== U; )
      ae = L(I), c(I), I = ae;
    c(U);
  }, gn = (I, U, ae) => {
    const {
      bum: de,
      scope: ye,
      job: he,
      subTree: Re,
      um: Te,
      m: _e,
      a: me,
      parent: je,
      slots: { __: Ee }
    } = I;
    Tl(_e), Tl(me), de && Ji(de), je && Ue(Ee) && Ee.forEach((Be) => {
      je.renderCache[Be] = void 0;
    }), ye.stop(), he && (he.flags |= 8, Kt(Re, I, U, ae)), Te && hn(Te, U), hn(() => {
      I.isUnmounted = !0;
    }, U), U && U.pendingBranch && !U.isUnmounted && I.asyncDep && !I.asyncResolved && I.suspenseId === U.pendingId && (U.deps--, U.deps === 0 && U.resolve());
  }, Pt = (I, U, ae, de = !1, ye = !1, he = 0) => {
    for (let Re = he; Re < I.length; Re++)
      Kt(I[Re], U, ae, de, ye);
  }, S = (I) => {
    if (I.shapeFlag & 6)
      return S(I.component.subTree);
    if (I.shapeFlag & 128)
      return I.suspense.next();
    const U = L(I.anchor || I.el), ae = U && U[Mu];
    return ae ? L(ae) : U;
  };
  let N = !1;
  const q = (I, U, ae) => {
    I == null ? U._vnode && Kt(U._vnode, null, null, !0) : W(
      U._vnode || null,
      I,
      U,
      null,
      null,
      null,
      ae
    ), U._vnode = I, N || (N = !0, ml(), ju(), N = !1);
  }, J = {
    p: W,
    um: Kt,
    m: gt,
    r: qt,
    mt: st,
    mc: se,
    pc: Pe,
    pbc: le,
    n: S,
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
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = c[d] = kr(c[d]), p.el = u.el), !i && p.patchFlag !== -2 && Zs(u, p)), p.type === Oa && (p.el = u.el), p.type === Sr && !p.el && (p.el = u.el);
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
function Tl(t) {
  if (t)
    for (let r = 0; r < t.length; r++)
      t[r].flags |= 8;
}
const id = Symbol.for("v-scx"), ad = () => Ai(id);
function Ta(t, r) {
  return el(t, null, r);
}
function Ut(t, r, i) {
  return el(t, r, i);
}
function el(t, r, i = bt) {
  const { immediate: s, deep: c, flush: d, once: u } = i, p = rn({}, i), m = r && s || !r && d !== "post";
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
  p.call = (Y, Q, W) => Qn(Y, O, Q, W);
  let D = !1;
  d === "post" ? p.scheduler = (Y) => {
    hn(Y, O && O.suspense);
  } : d !== "sync" && (D = !0, p.scheduler = (Y, Q) => {
    Q ? Y() : Ys(Y);
  }), p.augmentJob = (Y) => {
    r && (Y.flags |= 4), D && (Y.flags |= 2, O && (Y.id = O.uid, Y.i = O));
  };
  const L = gf(t, r, p);
  return ji && (k ? k.push(L) : m && L()), L;
}
function sd(t, r, i) {
  const s = this.proxy, c = It(t) ? t.includes(".") ? ic(s, t) : () => s[t] : t.bind(s, s);
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
const ld = (t, r) => r === "modelValue" || r === "model-value" ? t.modelModifiers : t[`${r}Modifiers`] || t[`${Dn(r)}Modifiers`] || t[`${Oo(r)}Modifiers`];
function ud(t, r, ...i) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || bt;
  let c = i;
  const d = r.startsWith("update:"), u = d && ld(s, r.slice(7));
  u && (u.trim && (c = i.map((O) => It(O) ? O.trim() : O)), u.number && (c = i.map(ia)));
  let p, m = s[p = os(r)] || // also try camelCase event handler (#2249)
  s[p = os(Dn(r))];
  !m && d && (m = s[p = os(Oo(r))]), m && Qn(
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
    t.emitted[p] = !0, Qn(
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
      O && (p = !0, rn(u, O));
    };
    !i && r.mixins.length && r.mixins.forEach(m), t.extends && m(t.extends), t.mixins && t.mixins.forEach(m);
  }
  return !d && !p ? (Ct(t) && s.set(t, null), null) : (Ue(d) ? d.forEach((m) => u[m] = null) : rn(u, d), Ct(t) && s.set(t, u), u);
}
function Ea(t, r) {
  return !t || !va(r) ? !1 : (r = r.slice(2).replace(/Once$/, ""), vt(t, r[0].toLowerCase() + r.slice(1)) || vt(t, Oo(r)) || vt(t, r));
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
    props: D,
    data: L,
    setupState: Y,
    ctx: Q,
    inheritAttrs: W
  } = t, G = ca(t);
  let V, M;
  try {
    if (i.shapeFlag & 4) {
      const te = c || s, Oe = te;
      V = Yn(
        k.call(
          Oe,
          te,
          O,
          D,
          Y,
          L,
          Q
        )
      ), M = p;
    } else {
      const te = r;
      V = Yn(
        te.length > 1 ? te(
          D,
          { attrs: p, slots: u, emit: m }
        ) : te(
          D,
          null
        )
      ), M = r.props ? p : cd(p);
    }
  } catch (te) {
    Ii.length = 0, Ra(te, t, 1), V = mt(Sr);
  }
  let $ = V;
  if (M && W !== !1) {
    const te = Object.keys(M), { shapeFlag: Oe } = $;
    te.length && Oe & 7 && (d && te.some(Fs) && (M = fd(
      M,
      d
    )), $ = Fo($, M, !1, !0));
  }
  return i.dirs && ($ = Fo($, null, !1, !0), $.dirs = $.dirs ? $.dirs.concat(i.dirs) : i.dirs), i.transition && Xs($, i.transition), V = $, ca(G), V;
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
      for (let D = 0; D < O.length; D++) {
        const L = O[D];
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
const Ke = Symbol.for("v-fgt"), Oa = Symbol.for("v-txt"), Sr = Symbol.for("v-cmt"), ea = Symbol.for("v-stc"), Ii = [];
let En = null;
function ce(t = !1) {
  Ii.push(En = t ? null : []);
}
function md() {
  Ii.pop(), En = Ii[Ii.length - 1] || null;
}
let ki = 1;
function Al(t, r = !1) {
  ki += t, t < 0 && En && r && (En.hasOnce = !0);
}
function lc(t) {
  return t.dynamicChildren = ki > 0 ? En || Do : null, md(), ki > 0 && En && En.push(t), t;
}
function ve(t, r, i, s, c, d) {
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
function Zt(t, r, i, s, c) {
  return lc(
    mt(
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
}) => (typeof t == "number" && (t = "" + t), t != null ? It(t) || Ot(t) || Qe(t) ? { i: $t, r: t, k: r, f: !!i } : t : null);
function y(t, r = null, i = null, s = 0, c = null, d = t === Ke ? 0 : 1, u = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && uc(r),
    ref: r && ta(r),
    scopeId: Bu,
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
    ctx: $t
  };
  return p ? (rl(m, i), d & 128 && t.normalize(m)) : i && (m.shapeFlag |= It(i) ? 8 : 16), ki > 0 && // avoid a block node from tracking itself
  !u && // has current parent block
  En && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && En.push(m), m;
}
const mt = vd;
function vd(t, r = null, i = null, s = 0, c = null, d = !1) {
  if ((!t || t === Wu) && (t = Sr), tl(t)) {
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
    p && !It(p) && (r.class = Jt(p)), Ct(m) && (Gs(m) && !Ue(m) && (m = rn({}, m)), r.style = Kr(m));
  }
  const u = It(t) ? 1 : sc(t) ? 128 : xf(t) ? 64 : Ct(t) ? 4 : Qe(t) ? 2 : 0;
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
  return t ? Gs(t) || Ju(t) ? rn({}, t) : t : null;
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
  return mt(Oa, null, t, r);
}
function cc(t, r) {
  const i = mt(ea, null, t);
  return i.staticCount = r, i;
}
function Ge(t = "", r = !1) {
  return r ? (ce(), Zt(Sr, null, t)) : mt(Sr, null, t);
}
function Yn(t) {
  return t == null || typeof t == "boolean" ? mt(Sr) : Ue(t) ? mt(
    Ke,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : tl(t) ? kr(t) : mt(Oa, null, String(t));
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
      !c && !Ju(r) ? r._ctx = $t : c === 3 && $t && ($t.slots._ === 1 ? r._ = 1 : (r._ = 2, t.patchFlag |= 1024));
    }
  else Qe(r) ? (r = { default: r, _ctx: $t }, i = 32) : (r = String(r), s & 64 ? (i = 16, r = [nl(r)]) : i = 8);
  t.children = r, t.shapeFlag |= i;
}
function fc(...t) {
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    for (const c in s)
      if (c === "class")
        r.class !== s.class && (r.class = Jt([r.class, s.class]));
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
  Qn(t, r, 7, [
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
    propsDefaults: bt,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: bt,
    data: bt,
    props: bt,
    attrs: bt,
    slots: bt,
    refs: bt,
    setupState: bt,
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
const _d = () => Vt || $t;
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
}, Il = () => {
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
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Mf);
  const { setup: s } = i;
  if (s) {
    Ar();
    const c = t.setupContext = s.length > 1 ? Cd(t) : null, d = Vi(t), u = Ui(
      s,
      t,
      0,
      [
        t.props,
        c
      ]
    ), p = iu(u);
    if (Ir(), d(), (p || t.sp) && !ko(t) && qu(t), p) {
      if (u.then(Il, Il), r)
        return u.then((m) => {
          Sl(t, m);
        }).catch((m) => {
          Ra(m, t, 0);
        });
      t.asyncDep = u;
    } else
      Sl(t, u);
  } else
    pc(t);
}
function Sl(t, r, i) {
  Qe(r) ? t.type.__ssrInlineRender ? t.ssrRender = r : t.render = r : Ct(r) && (t.setupState = Du(r)), pc(t);
}
function pc(t, r, i) {
  const s = t.type;
  t.render || (t.render = s.render || Xn);
  {
    const c = Vi(t);
    Ar();
    try {
      $f(t);
    } finally {
      Ir(), c();
    }
  }
}
const Rd = {
  get(t, r) {
    return nn(t, "get", ""), t[r];
  }
};
function Cd(t) {
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
function Aa(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Du(Na(t.exposed)), {
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
function Td(t, r = !0) {
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
const Dl = typeof window < "u" && window.trustedTypes;
if (Dl)
  try {
    Os = /* @__PURE__ */ Dl.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const hc = Os ? (t) => Os.createHTML(t) : (t) => t, Ad = "http://www.w3.org/2000/svg", Id = "http://www.w3.org/1998/Math/MathML", Nr = typeof document < "u" ? document : null, Pl = Nr && /* @__PURE__ */ Nr.createElement("template"), Sd = {
  insert: (t, r, i) => {
    r.insertBefore(t, i || null);
  },
  remove: (t) => {
    const r = t.parentNode;
    r && r.removeChild(t);
  },
  createElement: (t, r, i, s) => {
    const c = r === "svg" ? Nr.createElementNS(Ad, t) : r === "mathml" ? Nr.createElementNS(Id, t) : i ? Nr.createElement(t, { is: i }) : Nr.createElement(t);
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
}, Dd = Symbol("_vtc");
function Pd(t, r, i) {
  const s = t[Dd];
  s && (r = (r ? [r, ...s] : [...s]).join(" ")), r == null ? t.removeAttribute("class") : i ? t.setAttribute("class", r) : t.className = r;
}
const Ll = Symbol("_vod"), Ld = Symbol("_vsh"), kd = Symbol(""), jd = /(^|;)\s*display\s*:/;
function Fd(t, r, i) {
  const s = t.style, c = It(i);
  let d = !1;
  if (i && !c) {
    if (r)
      if (It(r))
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
    const s = Bd(t, r);
    kl.test(i) ? t.setProperty(
      Oo(s),
      i.replace(kl, ""),
      "important"
    ) : t[s] = i;
  }
}
const jl = ["Webkit", "Moz", "ms"], fs = {};
function Bd(t, r) {
  const i = fs[r];
  if (i)
    return i;
  let s = Dn(r);
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
function Bl(t, r, i, s, c, d = Bc(r)) {
  s && r.startsWith("xlink:") ? i == null ? t.removeAttributeNS(Fl, r.slice(6, r.length)) : t.setAttributeNS(Fl, r, i) : i == null || d && !lu(i) ? t.removeAttribute(r) : t.setAttribute(
    r,
    d ? "" : Un(i) ? String(i) : i
  );
}
function Ml(t, r, i, s, c) {
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
function Tr(t, r, i, s) {
  t.addEventListener(r, i, s);
}
function Md(t, r, i, s) {
  t.removeEventListener(r, i, s);
}
const $l = Symbol("_vei");
function $d(t, r, i, s, c = null) {
  const d = t[$l] || (t[$l] = {}), u = d[r];
  if (s && u)
    u.value = s;
  else {
    const [p, m] = Kd(r);
    if (s) {
      const k = d[r] = Vd(
        s,
        c
      );
      Tr(t, p, k, m);
    } else u && (Md(t, p, u, m), d[r] = void 0);
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
    Qn(
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
  r === "class" ? Pd(t, s, u) : r === "style" ? Fd(t, i, s) : va(r) ? Fs(r) || $d(t, r, i, s, d) : (r[0] === "." ? (r = r.slice(1), !0) : r[0] === "^" ? (r = r.slice(1), !1) : Hd(t, r, s, u)) ? (Ml(t, r, s), !t.tagName.includes("-") && (r === "value" || r === "checked" || r === "selected") && Bl(t, r, s, u, d, r !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(r) || !It(s)) ? Ml(t, Dn(r), s, d, r) : (r === "true-value" ? t._trueValue = s : r === "false-value" && (t._falseValue = s), Bl(t, r, s, u));
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
  return ql(r) && It(i) ? !1 : r in t;
}
const Mr = (t) => {
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
const Sn = Symbol("_assign"), Or = {
  created(t, { modifiers: { lazy: r, trim: i, number: s } }, c) {
    t[Sn] = Mr(c);
    const d = s || c.props && c.props.type === "number";
    Tr(t, r ? "change" : "input", (u) => {
      if (u.target.composing) return;
      let p = t.value;
      i && (p = p.trim()), d && (p = ia(p)), t[Sn](p);
    }), i && Tr(t, "change", () => {
      t.value = t.value.trim();
    }), r || (Tr(t, "compositionstart", Yd), Tr(t, "compositionend", Ul), Tr(t, "change", Ul));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: r }) {
    t.value = r ?? "";
  },
  beforeUpdate(t, { value: r, oldValue: i, modifiers: { lazy: s, trim: c, number: d } }, u) {
    if (t[Sn] = Mr(u), t.composing) return;
    const p = (d || t.type === "number") && !/^0\d/.test(t.value) ? ia(t.value) : t.value, m = r ?? "";
    p !== m && (document.activeElement === t && t.type !== "range" && (s && r === i || c && t.value.trim() === m) || (t.value = m));
  }
}, Co = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, r, i) {
    t[Sn] = Mr(i), Tr(t, "change", () => {
      const s = t._modelValue, c = Bo(t), d = t.checked, u = t[Sn];
      if (Ue(s)) {
        const p = $s(s, c), m = p !== -1;
        if (d && !m)
          u(s.concat(c));
        else if (!d && m) {
          const k = [...s];
          k.splice(p, 1), u(k);
        }
      } else if ($o(s)) {
        const p = new Set(s);
        d ? p.add(c) : p.delete(c), u(p);
      } else
        u(mc(t, d));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Vl,
  beforeUpdate(t, r, i) {
    t[Sn] = Mr(i), Vl(t, r, i);
  }
};
function Vl(t, { value: r, oldValue: i }, s) {
  t._modelValue = r;
  let c;
  if (Ue(r))
    c = $s(r, s.props.value) > -1;
  else if ($o(r))
    c = r.has(s.props.value);
  else {
    if (r === i) return;
    c = To(r, mc(t, !0));
  }
  t.checked !== c && (t.checked = c);
}
const $r = {
  created(t, { value: r }, i) {
    t.checked = To(r, i.props.value), t[Sn] = Mr(i), Tr(t, "change", () => {
      t[Sn](Bo(t));
    });
  },
  beforeUpdate(t, { value: r, oldValue: i }, s) {
    t[Sn] = Mr(s), r !== i && (t.checked = To(r, s.props.value));
  }
}, yn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: r, modifiers: { number: i } }, s) {
    const c = $o(r);
    Tr(t, "change", () => {
      const d = Array.prototype.filter.call(t.options, (u) => u.selected).map(
        (u) => i ? ia(Bo(u)) : Bo(u)
      );
      t[Sn](
        t.multiple ? c ? new Set(d) : d : d[0]
      ), t._assigning = !0, Hs(() => {
        t._assigning = !1;
      });
    }), t[Sn] = Mr(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: r }) {
    Wl(t, r);
  },
  beforeUpdate(t, r, i) {
    t[Sn] = Mr(i);
  },
  updated(t, { value: r }) {
    t._assigning || Wl(t, r);
  }
};
function Wl(t, r) {
  const i = t.multiple, s = Ue(r);
  if (!(i && !s && !$o(r))) {
    for (let c = 0, d = t.options.length; c < d; c++) {
      const u = t.options[c], p = Bo(u);
      if (i)
        if (s) {
          const m = typeof p;
          m === "string" || m === "number" ? u.selected = r.some((k) => String(k) === String(p)) : u.selected = $s(r, p) > -1;
        } else
          u.selected = r.has(p);
      else if (To(Bo(u), r)) {
        t.selectedIndex !== c && (t.selectedIndex = c);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Bo(t) {
  return "_value" in t ? t._value : t.value;
}
function mc(t, r) {
  const i = r ? "_trueValue" : "_falseValue";
  return i in t ? t[i] : r;
}
const Xd = ["ctrl", "shift", "alt", "meta"], Qd = {
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
      const p = Qd[r[u]];
      if (p && p(c, r)) return;
    }
    return t(c, ...d);
  });
}, zd = /* @__PURE__ */ rn({ patchProp: Gd }, Sd);
let Gl;
function Jd() {
  return Gl || (Gl = td(zd));
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
  return It(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let vc;
const Ia = (t) => vc = t, yc = (
  /* istanbul ignore next */
  Symbol()
);
function As(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Si;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Si || (Si = {}));
function np() {
  const t = du(!0), r = t.run(() => $e({}));
  let i = [], s = [];
  const c = Na({
    install(d) {
      Ia(c), c._a = d, d.provide(yc, c), d.config.globalProperties.$pinia = c, s.forEach((u) => i.push(u)), s = [];
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
function Io(t, ...r) {
  t.slice().forEach((i) => {
    i(...r);
  });
}
const rp = (t) => t(), Yl = Symbol(), ps = Symbol();
function Is(t, r) {
  t instanceof Map && r instanceof Map ? r.forEach((i, s) => t.set(s, i)) : t instanceof Set && r instanceof Set && r.forEach(t.add, t);
  for (const i in r) {
    if (!r.hasOwnProperty(i))
      continue;
    const s = r[i], c = t[i];
    As(c) && As(s) && t.hasOwnProperty(i) && !Ot(s) && !Er(s) ? t[i] = Is(c, s) : t[i] = s;
  }
  return t;
}
const op = (
  /* istanbul ignore next */
  Symbol()
);
function ip(t) {
  return !As(t) || !Object.prototype.hasOwnProperty.call(t, op);
}
const { assign: Pr } = Object;
function ap(t) {
  return !!(Ot(t) && t.effect);
}
function sp(t, r, i, s) {
  const { state: c, actions: d, getters: u } = r, p = i.state.value[t];
  let m;
  function k() {
    p || (i.state.value[t] = c ? c() : {});
    const O = ff(i.state.value[t]);
    return Pr(O, d, Object.keys(u || {}).reduce((D, L) => (D[L] = Na(Ye(() => {
      Ia(i);
      const Y = i._s.get(t);
      return u[L].call(Y, Y);
    })), D), {}));
  }
  return m = bc(t, k, r, i, s, !0), m;
}
function bc(t, r, i = {}, s, c, d) {
  let u;
  const p = Pr({ actions: {} }, i), m = { deep: !0 };
  let k, O, D = [], L = [], Y;
  const Q = s.state.value[t];
  !d && !Q && (s.state.value[t] = {}), $e({});
  let W;
  function G(se) {
    let j;
    k = O = !1, typeof se == "function" ? (se(s.state.value[t]), j = {
      type: Si.patchFunction,
      storeId: t,
      events: Y
    }) : (Is(s.state.value[t], se), j = {
      type: Si.patchObject,
      payload: se,
      storeId: t,
      events: Y
    });
    const le = W = Symbol();
    Hs().then(() => {
      W === le && (k = !0);
    }), O = !0, Io(D, j, s.state.value[t]);
  }
  const V = d ? function() {
    const { state: j } = i, le = j ? j() : {};
    this.$patch((be) => {
      Pr(be, le);
    });
  } : (
    /* istanbul ignore next */
    gc
  );
  function M() {
    u.stop(), D = [], L = [], s._s.delete(t);
  }
  const $ = (se, j = "") => {
    if (Yl in se)
      return se[ps] = j, se;
    const le = function() {
      Ia(s);
      const be = Array.from(arguments), ge = [], Ae = [];
      function st(we) {
        ge.push(we);
      }
      function lt(we) {
        Ae.push(we);
      }
      Io(L, {
        args: be,
        name: le[ps],
        store: Oe,
        after: st,
        onError: lt
      });
      let nt;
      try {
        nt = se.apply(this && this.$id === t ? this : Oe, be);
      } catch (we) {
        throw Io(Ae, we), we;
      }
      return nt instanceof Promise ? nt.then((we) => (Io(ge, we), we)).catch((we) => (Io(Ae, we), Promise.reject(we))) : (Io(ge, nt), nt);
    };
    return le[Yl] = !0, le[ps] = j, le;
  }, te = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Hl.bind(null, L),
    $patch: G,
    $reset: V,
    $subscribe(se, j = {}) {
      const le = Hl(D, se, j.detached, () => be()), be = u.run(() => Ut(() => s.state.value[t], (ge) => {
        (j.flush === "sync" ? O : k) && se({
          storeId: t,
          type: Si.direct,
          events: Y
        }, ge);
      }, Pr({}, m, j)));
      return le;
    },
    $dispose: M
  }, Oe = qi(te);
  s._s.set(t, Oe);
  const X = (s._a && s._a.runWithContext || rp)(() => s._e.run(() => (u = du()).run(() => r({ action: $ }))));
  for (const se in X) {
    const j = X[se];
    if (Ot(j) && !ap(j) || Er(j))
      d || (Q && ip(j) && (Ot(j) ? j.value = Q[se] : Is(j, Q[se])), s.state.value[t][se] = j);
    else if (typeof j == "function") {
      const le = $(j, se);
      X[se] = le, p.actions[se] = j;
    }
  }
  return Pr(Oe, X), Pr(dt(Oe), X), Object.defineProperty(Oe, "$state", {
    get: () => s.state.value[t],
    set: (se) => {
      G((j) => {
        Pr(j, se);
      });
    }
  }), s._p.forEach((se) => {
    Pr(Oe, u.run(() => se({
      store: Oe,
      app: s._a,
      pinia: s,
      options: p
    })));
  }), Q && d && i.hydrate && i.hydrate(Oe.$state, Q), k = !0, O = !0, Oe;
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
    u || (m ? Ai(yc, null) : null), u && Ia(u), u = vc, u._s.has(t) || (c ? bc(t, r, s, u) : sp(t, s, u)), u._s.get(t);
  }
  return d.$id = t, d;
}
function Ft(t) {
  const r = dt(t), i = {};
  for (const s in r) {
    const c = r[s];
    c.effect ? i[s] = // ...
    Ye({
      get: () => t[s],
      set(d) {
        t[s] = d;
      }
    }) : (Ot(c) || Er(c)) && (i[s] = // ---
    hf(t, s));
  }
  return i;
}
const Fi = ["q", "t"];
function Bi(t) {
  return `${t.prefix}${t.lnClass}${t.lnInst}`;
}
var et = /* @__PURE__ */ ((t) => (t.GOOSE = "GOOSE", t.SMV = "SMV", t.REPORT = "Report", t.INTERNAL = "Internal", t.WIRED = "Wired", t.CONTROL = "Control", t))(et || {});
const Mo = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: [],
  Internal: []
}, Sa = /* @__PURE__ */ ol("dataflow/sidebar", () => {
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
      function D(e, n) {
        return O.call(e, n);
      }
      function L(e, n) {
        typeof n == "function" && (n = n(k(e))), (typeof Reflect > "u" ? u : Reflect.ownKeys)(n).forEach(function(o) {
          Q(e, o, n[o]);
        });
      }
      var Y = Object.defineProperty;
      function Q(e, n, o, a) {
        Y(e, n, m(o && D(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function W(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), Q(e.prototype, "constructor", e), { extend: L.bind(null, e.prototype) };
        } };
      }
      var G = Object.getOwnPropertyDescriptor, V = [].slice;
      function M(e, n, o) {
        return V.call(e, n, o);
      }
      function $(e, n) {
        return n(e);
      }
      function te(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function pe(e, n) {
        if (typeof n == "string" && D(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, l = n.length; a < l; ++a) {
            var f = pe(e, n[a]);
            o.push(f);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : pe(v, n.substr(h + 1));
        }
      }
      function X(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          te(typeof o != "string" && "length" in o);
          for (var a = 0, l = n.length; a < l; ++a) X(e, n[a], o[a]);
        } else {
          var f, h, v = n.indexOf(".");
          v !== -1 ? (f = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? p(e) && !isNaN(parseInt(f)) ? e.splice(f, 1) : delete e[f] : e[f] = o : X(v = !(v = e[f]) || !D(e, f) ? e[f] = {} : v, h, o)) : o === void 0 ? p(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function se(e) {
        var n, o = {};
        for (n in e) D(e, n) && (o[n] = e[n]);
        return o;
      }
      var j = [].concat;
      function le(e) {
        return j.apply([], e);
      }
      var Ve = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(le([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), be = new Set(Ve.map(function(e) {
        return d[e];
      })), ge = null;
      function Ae(e) {
        return ge = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = ge.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], ge.set(o, a);
            for (var l = 0, f = o.length; l < f; ++l) a.push(n(o[l]));
          } else if (be.has(o.constructor)) a = o;
          else {
            var h, v = k(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), ge.set(o, a), o) D(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), ge = null, e;
      }
      var st = {}.toString;
      function lt(e) {
        return st.call(e).slice(8, -1);
      }
      var nt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", we = typeof nt == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[nt]) && n.apply(e);
      } : function() {
        return null;
      };
      function Pe(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var yt = {};
      function He(e) {
        var n, o, a, l;
        if (arguments.length === 1) {
          if (p(e)) return e.slice();
          if (this === yt && typeof e == "string") return [e];
          if (l = we(e)) {
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
      var gt = typeof Symbol < "u" ? function(e) {
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
      var S = Tt.reduce(function(e, n) {
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
      var J = Me.reduce(function(e, n) {
        return e[n + "Error"] = q[n], e;
      }, {}), tt = Tt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = q[n]), e;
      }, {});
      function I() {
      }
      function U(e) {
        return e;
      }
      function ae(e, n) {
        return e == null || e === U ? n : function(o) {
          return n(e(o));
        };
      }
      function de(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function ye(e, n) {
        return e === I ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? de(a, this.onsuccess) : a), l && (this.onerror = this.onerror ? de(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function he(e, n) {
        return e === I ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? de(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? de(a, this.onerror) : a);
        };
      }
      function Re(e, n) {
        return e === I ? n : function(o) {
          var a = e.apply(this, arguments);
          m(o, a);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? de(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? de(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : m(a, o);
        };
      }
      function Te(e, n) {
        return e === I ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function _e(e, n) {
        return e === I ? n : function() {
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
      tt.ModifyError = gn, tt.DexieError = qt, tt.BulkError = Pt;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function je(e) {
        me = e;
      }
      var Ee = {}, Be = 100, Ve = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, k(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, k(n), e];
      }(), Me = Ve[0], Tt = Ve[1], Ve = Ve[2], Tt = Tt && Tt.then, Ze = Me && Me.constructor, ot = !!Ve, _t = function(e, n) {
        bn.push([e, n]), jt && (queueMicrotask(La), jt = !1);
      }, St = !0, jt = !0, xt = [], on = [], Wn = U, pt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: I, pgp: !1, env: {}, finalize: I }, fe = pt, bn = [], an = 0, Jn = [];
      function oe(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = fe;
        if (typeof e != "function") {
          if (e !== Ee) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ur(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, l) {
          try {
            l(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                f && typeof f.then == "function" ? o(a, function(v, b) {
                  f instanceof oe ? f._then(v, b) : f.then(v, b);
                }) : (a._state = !0, a._value = f, Uo(a)), h && _n();
              }
            }, Ur.bind(null, a));
          } catch (f) {
            Ur(a, f);
          }
        }(this, e);
      }
      var qr = { get: function() {
        var e = fe, n = nr;
        function o(a, l) {
          var f = this, h = !e.global && (e !== fe || n !== nr), v = h && !Gt(), b = new oe(function(_, R) {
            Vr(f, new qo(Wo(a, e, h, v), Wo(l, e, h, v), _, R, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = Ee, o;
      }, set: function(e) {
        Q(this, "then", e && e.prototype === Ee ? qr : { get: function() {
          return e;
        }, set: qr.set });
      } };
      function qo(e, n, o, a, l) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = l;
      }
      function Ur(e, n) {
        var o, a;
        on.push(n), e._state === null && (o = e._lib && wn(), n = Wn(n), e._state = !1, e._value = n, a = e, xt.some(function(l) {
          return l._value === a._value;
        }) || xt.push(a), Uo(e), o && _n());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Vr(e, n[o]);
        var l = e._PSD;
        --l.ref || l.finalize(), an === 0 && (++an, _t(function() {
          --an == 0 && Wr();
        }, []));
      }
      function Vr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++an, _t(Pa, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Pa(e, n, o) {
        try {
          var a, l = n._value;
          !n._state && on.length && (on = []), a = me && n._consoleTask ? n._consoleTask.run(function() {
            return e(l);
          }) : e(l), n._state || on.indexOf(l) !== -1 || function(f) {
            for (var h = xt.length; h; ) if (xt[--h]._value === f._value) return xt.splice(h, 1);
          }(n), o.resolve(a);
        } catch (f) {
          o.reject(f);
        } finally {
          --an == 0 && Wr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function La() {
        sn(pt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = St;
        return jt = St = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        jt = St = !0;
      }
      function Wr() {
        var e = xt;
        xt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Jn.slice(0), o = n.length; o; ) n[--o]();
      }
      function Zn(e) {
        return new oe(Ee, !1, e);
      }
      function We(e, n) {
        var o = fe;
        return function() {
          var a = wn(), l = fe;
          try {
            return Ht(o, !0), e.apply(this, arguments);
          } catch (f) {
            n && n(f);
          } finally {
            Ht(l, !1), a && _n();
          }
        };
      }
      L(oe.prototype, { then: qr, _then: function(e, n) {
        Vr(this, new qo(null, null, e, n, fe));
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
          return oe.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return oe.resolve(e()).then(function() {
            return Zn(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new oe(function(a, l) {
          var f = setTimeout(function() {
            return l(new q.Timeout(n));
          }, e);
          o.then(a, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Q(oe.prototype, Symbol.toStringTag, "Dexie.Promise"), pt.env = Vo(), L(oe, { all: function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(l, f) {
            return oe.resolve(l).then(function(h) {
              e[f] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof oe ? e : e && typeof e.then == "function" ? new oe(function(n, o) {
          e.then(n, o);
        }) : new oe(Ee, !0, e);
      }, reject: Zn, race: function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n, o) {
          e.map(function(a) {
            return oe.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return fe;
      }, set: function(e) {
        return fe = e;
      } }, totalEchoes: { get: function() {
        return nr;
      } }, newPSD: Wt, usePSD: sn, scheduler: { get: function() {
        return _t;
      }, set: function(e) {
        _t = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, n) {
        return new oe(function(o, a) {
          return Wt(function(l, f) {
            var h = fe;
            h.unhandleds = [], h.onunhandled = f, h.finalize = de(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? l() : f(b.unhandleds[0]);
              }, Jn.push(function _() {
                v(), Jn.splice(Jn.indexOf(_), 1);
              }), ++an, _t(function() {
                --an == 0 && Wr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), Ze && (Ze.allSettled && Q(oe, "allSettled", function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(l, f) {
            return oe.resolve(l).then(function(h) {
              return a[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), Ze.any && typeof AggregateError < "u" && Q(oe, "any", function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, l = new Array(a);
          e.forEach(function(f, h) {
            return oe.resolve(f).then(function(v) {
              return n(v);
            }, function(v) {
              l[h] = v, --a || o(new AggregateError(l));
            });
          });
        });
      }), Ze.withResolvers && (oe.withResolvers = Ze.withResolvers));
      var it = { awaits: 0, echoes: 0, id: 0 }, ka = 0, er = [], tr = 0, nr = 0, ja = 0;
      function Wt(e, n, o, a) {
        var l = fe, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++ja, pt.env, f.env = ot ? { Promise: oe, PromiseProp: { value: oe, configurable: !0, writable: !0 }, all: oe.all, race: oe.race, allSettled: oe.allSettled, any: oe.any, resolve: oe.resolve, reject: oe.reject } : {}, n && m(f, n), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = sn(f, e, o, a), f.ref === 0 && f.finalize(), a;
      }
      function xn() {
        return it.id || (it.id = ++ka), ++it.awaits, it.echoes += Be, it.id;
      }
      function Gt() {
        return !!it.awaits && (--it.awaits == 0 && (it.id = 0), it.echoes = it.awaits * Be, !0);
      }
      function rr(e) {
        return it.echoes && e && e.constructor === Ze ? (xn(), e.then(function(n) {
          return Gt(), n;
        }, function(n) {
          return Gt(), ze(n);
        })) : e;
      }
      function Fa() {
        var e = er[er.length - 1];
        er.pop(), Ht(e, !1);
      }
      function Ht(e, n) {
        var o, a = fe;
        (n ? !it.echoes || tr++ && e === fe : !tr || --tr && e === fe) || queueMicrotask(n ? (function(l) {
          ++nr, it.echoes && --it.echoes != 0 || (it.echoes = it.awaits = it.id = 0), er.push(fe), Ht(l, !0);
        }).bind(null, e) : Fa), e !== fe && (fe = e, a === pt && (pt.env = Vo()), ot && (o = pt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = d.Promise;
        return ot ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function sn(e, n, o, a, l) {
        var f = fe;
        try {
          return Ht(e, !0), n(o, a, l);
        } finally {
          Ht(f, !1);
        }
      }
      function Wo(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var l = fe;
          o && xn(), Ht(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ht(l, !1), a && queueMicrotask(Gt);
          }
        };
      }
      function Gr(e) {
        Promise === Ze && it.echoes === 0 ? tr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Tt).indexOf("[native code]") === -1 && (xn = Gt = I);
      var ze = oe.reject, ln = "￿", Bt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", Nn = [], or = "__dbnames", Hr = "readonly", Yr = "readwrite";
      function un(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ir(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = Ae(n))[e], n;
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
              }(Qo(e), Qo(n));
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
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = lt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Qo(e) {
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
      var zo = (qe.prototype._trans = function(e, n, o) {
        var a = this._tx || fe.trans, l = this.name, f = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, R, g) {
          if (!g.schema[l]) throw new q.NotFound("Table " + l + " not part of transaction");
          return n(g.idbtrans, g);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === fe.trans ? a._promise(e, h, o) : Wt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: fe.transless || fe }) : function _(R, g, E, w) {
            if (R.idbdb && (R._state.openComplete || fe.letThrough || R._vip)) {
              var x = R._createTransaction(g, E, R._dbSchema);
              try {
                x.create(), R._state.PR1398_maxLoop = 3;
              } catch (T) {
                return T.name === S.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                  return _(R, g, E, w);
                })) : ze(T);
              }
              return x._promise(g, function(T, C) {
                return Wt(function() {
                  return fe.trans = x, w(T, C, x);
                });
              }).then(function(T) {
                if (g === "readwrite") try {
                  x.idbtrans.commit();
                } catch {
                }
                return g === "readonly" ? T : x._completion.then(function() {
                  return T;
                });
              });
            }
            if (R._state.openComplete) return ze(new q.DatabaseClosed(R._state.dbOpenError));
            if (!R._state.isBeingOpened) {
              if (!R._state.autoOpen) return ze(new q.DatabaseClosed());
              R.open().catch(I);
            }
            return R._state.dbReadyPromise.then(function() {
              return _(R, g, E, w);
            });
          }(this.db, e, [this.name], h);
          return f && (b._consoleTask = f, b = b.catch(function(_) {
            return console.trace(_), ze(_);
          })), b;
        } finally {
          v && _n();
        }
      }, qe.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? ze(new q.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
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
        if (o && this.db._maxKey !== ln) {
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
          return [_ || g, _ || !g ? un(R, g && g.multi ? function(w) {
            return w = pe(w, b), p(w) && w.some(function(x) {
              return l(E, x);
            });
          } : function(w) {
            return l(E, pe(w, b));
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
          return v.numFailures ? oe.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            X(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(e, n) {
        return typeof e != "object" || p(e) ? this.where(":id").equals(e).modify(n) : (e = pe(e, this.schema.primKey.keyPath), e === void 0 ? ze(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, qe.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ir(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? oe.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            X(e, f, v);
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
            return a.numFailures ? oe.reject(a.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return ar(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? oe.reject(n.failures[0]) : void 0;
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
              var w = g.key, x = g.changes, T = v[E];
              if (T) {
                for (var C = 0, A = Object.keys(x); C < A.length; C++) {
                  var P = A[C], F = x[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (Ie(F, w) !== 0) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
                  } else X(T, P, F);
                }
                f.push(E), b.push(w), _.push(T);
              }
            });
            var R = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: l } }).then(function(g) {
              var E = g.numFailures, w = g.failures;
              if (E === 0) return R;
              for (var x = 0, T = Object.keys(w); x < T.length; x++) {
                var C, A = T[x], P = f[Number(A)];
                P != null && (C = w[A], delete w[A], w[P] = C);
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
            v = v || Te;
            var R = { subscribers: [], fire: b = b || I, subscribe: function(g) {
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
                for (var x = arguments.length, T = new Array(x); x--; ) T[x] = arguments[x];
                w.subscribers.forEach(function(C) {
                  Oe(function() {
                    C.apply(null, T);
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
        e.filter = un(e.filter, n);
      }
      function Qr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return un(a(), n());
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
        var l = e.replayFilter ? un(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var f = {}, h = function(v, b, _) {
            var R, g;
            l && !l(b, _, function(E) {
              return b.stop(E);
            }, function(E) {
              return b.fail(E);
            }) || ((g = "" + (R = b.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(R)), D(f, g) || (f[g] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), Zo(Jo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, a, o), un(e.algorithm, l), n, !e.keysOnly && e.valueMapper);
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
              f.stop(v), h = I;
            }, function(v) {
              f.fail(v), h = I;
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
      var Ba = (ke.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, ze.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, ke.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ze.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, ke.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = un(n.algorithm, e);
      }, ke.prototype._iterate = function(e, n) {
        return lr(this._ctx, e, n, this._ctx.table.core);
      }, ke.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && m(o, e), n._ctx = o, n;
      }, ke.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ke.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return lr(n, e, o, n.table.core);
        });
      }, ke.prototype.count = function(e) {
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
      }, ke.prototype.sortBy = function(e, n) {
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
      }, ke.prototype.toArray = function(e) {
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
      }, ke.prototype.offset = function(e) {
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
      }, ke.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, a, l) {
            return --n <= 0 && a(l), 0 <= n;
          };
        }, !0), this;
      }, ke.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, a, l) {
          return !e(o.value) || (a(l), n);
        }), this;
      }, ke.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, ke.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ke.prototype.filter = function(e) {
        var n;
        return Xr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = un(n.isMatch, e), this;
      }, ke.prototype.and = function(e) {
        return this.filter(e);
      }, ke.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ke.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ke.prototype.desc = function() {
        return this.reverse();
      }, ke.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.key, a);
        });
      }, ke.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ke.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.primaryKey, a);
        });
      }, ke.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, l) {
          o.push(l.key);
        }).then(function() {
          return o;
        }).then(e);
      }, ke.prototype.primaryKeys = function(e) {
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
      }, ke.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ke.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, ke.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ke.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Xr(this._ctx, function(l) {
          var a = l.primaryKey.toString(), l = D(n, a);
          return n[a] = !0, !l;
        }), this;
      }, ke.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var l, f, h;
          h = typeof e == "function" ? e : (l = u(e), f = l.length, function(A) {
            for (var P = !1, F = 0; F < f; ++F) {
              var B = l[F], H = e[B], ee = pe(A, B);
              H instanceof kn ? (X(A, B, H.execute(ee)), P = !0) : ee !== H && (X(A, B, H), P = !0);
            }
            return P;
          });
          var v = o.table.core, g = v.schema.primaryKey, b = g.outbound, _ = g.extractKey, R = 200, g = n.db._options.modifyChunkSize;
          g && (R = typeof g == "object" ? g[v.name] || g["*"] || 200 : g);
          function E(A, B) {
            var F = B.failures, B = B.numFailures;
            x += A - B;
            for (var H = 0, ee = u(F); H < ee.length; H++) {
              var z = ee[H];
              w.push(F[z]);
            }
          }
          var w = [], x = 0, T = [], C = e === ti;
          return n.clone().primaryKeys().then(function(A) {
            function P(B) {
              var H = Math.min(R, A.length - B), ee = A.slice(B, B + H);
              return (C ? Promise.resolve([]) : v.getMany({ trans: a, keys: ee, cache: "immutable" })).then(function(z) {
                var Z = [], re = [], ne = b ? [] : null, ie = C ? ee : [];
                if (!C) for (var Ce = 0; Ce < H; ++Ce) {
                  var De = z[Ce], Ne = { value: Ae(De), primKey: A[B + Ce] };
                  h.call(Ne, Ne.value, Ne) !== !1 && (Ne.value == null ? ie.push(A[B + Ce]) : b || Ie(_(De), _(Ne.value)) === 0 ? (re.push(Ne.value), b && ne.push(A[B + Ce])) : (ie.push(A[B + Ce]), Z.push(Ne.value)));
                }
                return Promise.resolve(0 < Z.length && v.mutate({ trans: a, type: "add", values: Z }).then(function(Xe) {
                  for (var xe in Xe.failures) ie.splice(parseInt(xe), 1);
                  E(Z.length, Xe);
                })).then(function() {
                  return (0 < re.length || F && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: ne, values: re, criteria: F, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < B }).then(function(Xe) {
                    return E(re.length, Xe);
                  });
                }).then(function() {
                  return (0 < ie.length || F && C) && v.mutate({ trans: a, type: "delete", keys: ie, criteria: F, isAdditionalChunk: 0 < B }).then(function(Xe) {
                    return ar(o.table, ie, Xe);
                  }).then(function(Xe) {
                    return E(ie.length, Xe);
                  });
                }).then(function() {
                  return A.length > B + H && P(B + R);
                });
              });
            }
            var F = Rn(o) && o.limit === 1 / 0 && (typeof e != "function" || C) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < w.length) throw new gn("Error modifying one or more objects", w, x, T);
              return A.length;
            });
          });
        });
      }, ke.prototype.delete = function() {
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
      }, ke);
      function ke() {
      }
      var ti = function(e, n) {
        return n.value = null;
      };
      function Ma(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function $a(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function wt(e, n, o) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Cn(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function ur(e, n, o, a) {
        var l, f, h, v, b, _, R, g = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return wt(e, Go);
        function E(x) {
          l = x === "next" ? function(C) {
            return C.toUpperCase();
          } : function(C) {
            return C.toLowerCase();
          }, f = x === "next" ? function(C) {
            return C.toLowerCase();
          } : function(C) {
            return C.toUpperCase();
          }, h = x === "next" ? Ma : $a;
          var T = o.map(function(C) {
            return { lower: f(C), upper: l(C) };
          }).sort(function(C, A) {
            return h(C.lower, A.lower);
          });
          v = T.map(function(C) {
            return C.upper;
          }), b = T.map(function(C) {
            return C.lower;
          }), R = (_ = x) === "next" ? "" : a;
        }
        E("next"), e = new e.Collection(e, function() {
          return Yt(v[0], b[g - 1] + a);
        }), e._ondirectionchange = function(x) {
          E(x);
        };
        var w = 0;
        return e._addAlgorithm(function(x, T, C) {
          var A = x.key;
          if (typeof A != "string") return !1;
          var P = f(A);
          if (n(P, b, w)) return !0;
          for (var F = null, B = w; B < g; ++B) {
            var H = function(ee, z, Z, re, ne, ie) {
              for (var Ce = Math.min(ee.length, re.length), De = -1, Ne = 0; Ne < Ce; ++Ne) {
                var Xe = z[Ne];
                if (Xe !== re[Ne]) return ne(ee[Ne], Z[Ne]) < 0 ? ee.substr(0, Ne) + Z[Ne] + Z.substr(Ne + 1) : ne(ee[Ne], re[Ne]) < 0 ? ee.substr(0, Ne) + re[Ne] + Z.substr(Ne + 1) : 0 <= De ? ee.substr(0, De) + z[De] + Z.substr(De + 1) : null;
                ne(ee[Ne], Xe) < 0 && (De = Ne);
              }
              return Ce < re.length && ie === "next" ? ee + Z.substr(ee.length) : Ce < ee.length && ie === "prev" ? ee.substr(0, Z.length) : De < 0 ? null : ee.substr(0, De) + re[De] + Z.substr(De + 1);
            }(A, P, v[B], b[B], h, _);
            H === null && F === null ? w = B + 1 : (F === null || 0 < h(F, H)) && (F = H);
          }
          return T(F !== null ? function() {
            x.continue(F + R);
          } : C), !1;
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
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || a) && (!o || !a) ? Cn(this) : new this.Collection(this, function() {
            return Yt(e, n, !o, !a);
          });
        } catch {
          return wt(this, Bt);
        }
      }, at.prototype.equals = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return ni(e);
        });
      }, at.prototype.above = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(e, void 0, !0);
        });
      }, at.prototype.aboveOrEqual = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(e, void 0, !1);
        });
      }, at.prototype.below = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(void 0, e, !1, !0);
        });
      }, at.prototype.belowOrEqual = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(void 0, e);
        });
      }, at.prototype.startsWith = function(e) {
        return typeof e != "string" ? wt(this, Go) : this.between(e, e + ln, !0, !0);
      }, at.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : ur(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], ln);
      }, at.prototype.equalsIgnoreCase = function(e) {
        return ur(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, at.prototype.anyOfIgnoreCase = function() {
        var e = He.apply(yt, arguments);
        return e.length === 0 ? Cn(this) : ur(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, at.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = He.apply(yt, arguments);
        return e.length === 0 ? Cn(this) : ur(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, ln);
      }, at.prototype.anyOf = function() {
        var e = this, n = He.apply(yt, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return wt(this, Bt);
        }
        if (n.length === 0) return Cn(this);
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
        var e = He.apply(yt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return wt(this, Bt);
        }
        var n = e.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, at.prototype.inAnyRange = function(A, n) {
        var o = this, a = this._cmp, l = this._ascending, f = this._descending, h = this._min, v = this._max;
        if (A.length === 0) return Cn(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return wt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, R, g = l;
        function E(P, F) {
          return g(P[0], F[0]);
        }
        try {
          (R = A.reduce(function(P, F) {
            for (var B = 0, H = P.length; B < H; ++B) {
              var ee = P[B];
              if (a(F[0], ee[1]) < 0 && 0 < a(F[1], ee[0])) {
                ee[0] = h(ee[0], F[0]), ee[1] = v(ee[1], F[1]);
                break;
              }
            }
            return B === H && P.push(F), P;
          }, [])).sort(E);
        } catch {
          return wt(this, Bt);
        }
        var w = 0, x = _ ? function(P) {
          return 0 < l(P, R[w][1]);
        } : function(P) {
          return 0 <= l(P, R[w][1]);
        }, T = b ? function(P) {
          return 0 < f(P, R[w][0]);
        } : function(P) {
          return 0 <= f(P, R[w][0]);
        }, C = x, A = new this.Collection(this, function() {
          return Yt(R[0][0], R[R.length - 1][1], !b, !_);
        });
        return A._ondirectionchange = function(P) {
          g = P === "next" ? (C = x, l) : (C = T, f), R.sort(E);
        }, A._addAlgorithm(function(P, F, B) {
          for (var H, ee = P.key; C(ee); ) if (++w === R.length) return F(B), !1;
          return !x(H = ee) && !T(H) || (o._cmp(ee, R[w][1]) === 0 || o._cmp(ee, R[w][0]) === 0 || F(function() {
            g === l ? P.continue(R[w][0]) : P.continue(R[w][1]);
          }), !1);
        }), A;
      }, at.prototype.startsWithAnyOf = function() {
        var e = He.apply(yt, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Cn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + ln];
        })) : wt(this, "startsWithAnyOf() only works with strings");
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
      var Fn = "storagemutated", zr = "x-storagemutated-1", Xt = Pn(null, Fn), Ka = (kt.prototype._lock = function() {
        return te(!fe.global), ++this._reculock, this._reculock !== 1 || fe.global || (fe.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (te(!fe.global), --this._reculock == 0) for (fe.global || (fe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            sn(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, kt.prototype._locked = function() {
        return this._reculock && fe.lockOwnerFor !== this;
      }, kt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (te(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new q.DatabaseClosed(a);
          case "MissingAPIError":
            throw new q.MissingAPI(a.message, a);
          default:
            throw new q.OpenFailed(a);
        }
        if (!this.active) throw new q.TransactionInactive();
        return te(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = We(function(l) {
          jn(l), n._reject(e.error);
        }), e.onabort = We(function(l) {
          jn(l), n.active && n._reject(new q.Abort(e.error)), n.active = !1, n.on("abort").fire(l);
        }), e.oncomplete = We(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Xt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ze(new q.ReadOnly("Transaction is readonly"));
        if (!this.active) return ze(new q.TransactionInactive());
        if (this._locked()) return new oe(function(f, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(f, h);
          }, fe]);
        });
        if (o) return Wt(function() {
          var f = new oe(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var l = new oe(function(f, h) {
          var v = n(f, h, a);
          v && v.then && v.then(f, h);
        });
        return l._lib = !0, l;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = oe.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = f);
        }());
        var l = o._waitingFor;
        return new oe(function(f, h) {
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
        if (D(n, e)) return n[e];
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
      var Bn = function(e) {
        try {
          return e.only([[]]), Bn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Bn = function() {
            return ln;
          }, ln;
        }
      };
      function eo(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return pe(o, n);
        } : function(o) {
          return pe(o, e);
        };
        var n;
      }
      function ii(e) {
        return [].slice.call(e);
      }
      var qa = 0;
      function Mn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ua(e, n, b) {
        function a(C) {
          if (C.type === 3) return null;
          if (C.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = C.lower, x = C.upper, T = C.lowerOpen, C = C.upperOpen;
          return w === void 0 ? x === void 0 ? null : n.upperBound(x, !!C) : x === void 0 ? n.lowerBound(w, !!T) : n.bound(w, x, !!T, !!C);
        }
        function l(E) {
          var w, x = E.name;
          return { name: x, schema: E, mutate: function(T) {
            var C = T.trans, A = T.type, P = T.keys, F = T.values, B = T.range;
            return new Promise(function(H, ee) {
              H = We(H);
              var z = C.objectStore(x), Z = z.keyPath == null, re = A === "put" || A === "add";
              if (!re && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var ne, ie = (P || F || { length: 1 }).length;
              if (P && F && P.length !== F.length) throw new Error("Given keys array must have same length as given values array.");
              if (ie === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ce(ht) {
                ++Xe, jn(ht);
              }
              var De = [], Ne = [], Xe = 0;
              if (A === "deleteRange") {
                if (B.type === 4) return H({ numFailures: Xe, failures: Ne, results: [], lastResult: void 0 });
                B.type === 3 ? De.push(ne = z.clear()) : De.push(ne = z.delete(a(B)));
              } else {
                var Z = re ? Z ? [F, P] : [F, null] : [P, null], xe = Z[0], ct = Z[1];
                if (re) for (var ft = 0; ft < ie; ++ft) De.push(ne = ct && ct[ft] !== void 0 ? z[A](xe[ft], ct[ft]) : z[A](xe[ft])), ne.onerror = Ce;
                else for (ft = 0; ft < ie; ++ft) De.push(ne = z[A](xe[ft])), ne.onerror = Ce;
              }
              function _r(ht) {
                ht = ht.target.result, De.forEach(function(dn, bo) {
                  return dn.error != null && (Ne[bo] = dn.error);
                }), H({ numFailures: Xe, failures: Ne, results: A === "delete" ? P : De.map(function(dn) {
                  return dn.result;
                }), lastResult: ht });
              }
              ne.onerror = function(ht) {
                Ce(ht), _r(ht);
              }, ne.onsuccess = _r;
            });
          }, getMany: function(T) {
            var C = T.trans, A = T.keys;
            return new Promise(function(P, F) {
              P = We(P);
              for (var B, H = C.objectStore(x), ee = A.length, z = new Array(ee), Z = 0, re = 0, ne = function(De) {
                De = De.target, z[De._pos] = De.result, ++re === Z && P(z);
              }, ie = Lt(F), Ce = 0; Ce < ee; ++Ce) A[Ce] != null && ((B = H.get(A[Ce]))._pos = Ce, B.onsuccess = ne, B.onerror = ie, ++Z);
              Z === 0 && P(z);
            });
          }, get: function(T) {
            var C = T.trans, A = T.key;
            return new Promise(function(P, F) {
              P = We(P);
              var B = C.objectStore(x).get(A);
              B.onsuccess = function(H) {
                return P(H.target.result);
              }, B.onerror = Lt(F);
            });
          }, query: (w = _, function(T) {
            return new Promise(function(C, A) {
              C = We(C);
              var P, F, B, Z = T.trans, H = T.values, ee = T.limit, ne = T.query, z = ee === 1 / 0 ? void 0 : ee, re = ne.index, ne = ne.range, Z = Z.objectStore(x), re = re.isPrimaryKey ? Z : Z.index(re.name), ne = a(ne);
              if (ee === 0) return C({ result: [] });
              w ? ((z = H ? re.getAll(ne, z) : re.getAllKeys(ne, z)).onsuccess = function(ie) {
                return C({ result: ie.target.result });
              }, z.onerror = Lt(A)) : (P = 0, F = !H && "openKeyCursor" in re ? re.openKeyCursor(ne) : re.openCursor(ne), B = [], F.onsuccess = function(ie) {
                var Ce = F.result;
                return Ce ? (B.push(H ? Ce.value : Ce.primaryKey), ++P === ee ? C({ result: B }) : void Ce.continue()) : C({ result: B });
              }, F.onerror = Lt(A));
            });
          }), openCursor: function(T) {
            var C = T.trans, A = T.values, P = T.query, F = T.reverse, B = T.unique;
            return new Promise(function(H, ee) {
              H = We(H);
              var re = P.index, z = P.range, Z = C.objectStore(x), Z = re.isPrimaryKey ? Z : Z.index(re.name), re = F ? B ? "prevunique" : "prev" : B ? "nextunique" : "next", ne = !A && "openKeyCursor" in Z ? Z.openKeyCursor(a(z), re) : Z.openCursor(a(z), re);
              ne.onerror = Lt(ee), ne.onsuccess = We(function(ie) {
                var Ce, De, Ne, Xe, xe = ne.result;
                xe ? (xe.___id = ++qa, xe.done = !1, Ce = xe.continue.bind(xe), De = (De = xe.continuePrimaryKey) && De.bind(xe), Ne = xe.advance.bind(xe), Xe = function() {
                  throw new Error("Cursor not stopped");
                }, xe.trans = C, xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = function() {
                  throw new Error("Cursor not started");
                }, xe.fail = We(ee), xe.next = function() {
                  var ct = this, ft = 1;
                  return this.start(function() {
                    return ft-- ? ct.continue() : ct.stop();
                  }).then(function() {
                    return ct;
                  });
                }, xe.start = function(ct) {
                  function ft() {
                    if (ne.result) try {
                      ct();
                    } catch (ht) {
                      xe.fail(ht);
                    }
                    else xe.done = !0, xe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, xe.stop();
                  }
                  var _r = new Promise(function(ht, dn) {
                    ht = We(ht), ne.onerror = Lt(dn), xe.fail = dn, xe.stop = function(bo) {
                      xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = Xe, ht(bo);
                    };
                  });
                  return ne.onsuccess = We(function(ht) {
                    ne.onsuccess = ft, ft();
                  }), xe.continue = Ce, xe.continuePrimaryKey = De, xe.advance = Ne, ft(), _r;
                }, H(xe)) : H(null);
              }, ee);
            });
          }, count: function(T) {
            var C = T.query, A = T.trans, P = C.index, F = C.range;
            return new Promise(function(B, H) {
              var ee = A.objectStore(x), z = P.isPrimaryKey ? ee : ee.index(P.name), ee = a(F), z = ee ? z.count(ee) : z.count();
              z.onsuccess = We(function(Z) {
                return B(Z.target.result);
              }), z.onerror = Lt(H);
            });
          } };
        }
        var f, h, v, R = (h = b, v = ii((f = e).objectStoreNames), { schema: { name: f.name, tables: v.map(function(E) {
          return h.objectStore(E);
        }).map(function(E) {
          var w = E.keyPath, C = E.autoIncrement, x = p(w), T = {}, C = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: C, unique: !0, extractKey: eo(w) }, indexes: ii(E.indexNames).map(function(A) {
            return E.index(A);
          }).map(function(B) {
            var P = B.name, F = B.unique, H = B.multiEntry, B = B.keyPath, H = { name: P, compound: p(B), keyPath: B, unique: F, multiEntry: H, extractKey: eo(B) };
            return T[Mn(B)] = H;
          }), getIndexByKeyPath: function(A) {
            return T[Mn(A)];
          } };
          return T[":id"] = C.primaryKey, w != null && (T[Mn(w)] = C.primaryKey), C;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = R.schema, _ = R.hasGetAll, R = b.tables.map(l), g = {};
        return R.forEach(function(E) {
          return g[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!g[E]) throw new Error("Table '".concat(E, "' not found"));
          return g[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: Bn(n), schema: b };
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
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? Q(h, l, { get: function() {
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
        var h = f._reject.bind(f), v = fe.transless || fe;
        Wt(function() {
          return fe.trans = f, fe.transless = v, n !== 0 ? (cr(e, o), _ = n, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(R) {
            return R ?? _;
          }) : oe.resolve(_)).then(function(R) {
            return E = R, w = f, x = o, T = [], R = (g = e)._versions, C = g._dbSchema = pr(0, g.idbdb, x), (R = R.filter(function(A) {
              return A._cfg.version >= E;
            })).length !== 0 ? (R.forEach(function(A) {
              T.push(function() {
                var P = C, F = A._cfg.dbschema;
                hr(g, P, x), hr(g, F, x), C = g._dbSchema = F;
                var B = no(P, F);
                B.add.forEach(function(re) {
                  ro(x, re[0], re[1].primKey, re[1].indexes);
                }), B.change.forEach(function(re) {
                  if (re.recreate) throw new q.Upgrade("Not yet support for changing primary key");
                  var ne = x.objectStore(re.name);
                  re.add.forEach(function(ie) {
                    return dr(ne, ie);
                  }), re.change.forEach(function(ie) {
                    ne.deleteIndex(ie.name), dr(ne, ie);
                  }), re.del.forEach(function(ie) {
                    return ne.deleteIndex(ie);
                  });
                });
                var H = A._cfg.contentUpgrade;
                if (H && A._cfg.version > E) {
                  cr(g, x), w._memoizedTables = {};
                  var ee = se(F);
                  B.del.forEach(function(re) {
                    ee[re] = P[re];
                  }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], u(ee), ee), w.schema = ee;
                  var z, Z = gt(H);
                  return Z && xn(), B = oe.follow(function() {
                    var re;
                    (z = H(w)) && Z && (re = Gt.bind(null, null), z.then(re, re));
                  }), z && typeof z.then == "function" ? oe.resolve(z) : B.then(function() {
                    return z;
                  });
                }
              }), T.push(function(P) {
                var F, B, H = A._cfg.dbschema;
                F = H, B = P, [].slice.call(B.db.objectStoreNames).forEach(function(ee) {
                  return F[ee] == null && B.db.deleteObjectStore(ee);
                }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), w.schema = g._dbSchema;
              }), T.push(function(P) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === A._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(F) {
                  return F !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return T.length ? oe.resolve(T.shift()(w.idbtrans)).then(A) : oe.resolve();
            }().then(function() {
              ai(C, x);
            })) : oe.resolve();
            var g, E, w, x, T, C;
          }).catch(h)) : (u(l).forEach(function(R) {
            ro(o, R, l[R].primKey, l[R].indexes);
          }), cr(e, o), void oe.follow(function() {
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
        return M(n.objectStoreNames, 0).forEach(function(l) {
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
            var b = h.indexNames[v], _ = h.index(b).keyPath, R = typeof _ == "string" ? _ : "[" + M(_).join("+") + "]";
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
      var Ya = (Tn.prototype._createTableSchema = Zr, Tn.prototype._parseIndexSyntax = si, Tn.prototype._parseStoresSpec = function(e, n) {
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
      }, Tn.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, o) : o;
        var o = n._versions, a = {}, l = {};
        return o.forEach(function(f) {
          m(a, f._cfg.storesSource), l = f._cfg.dbschema = {}, f._parseStoresSpec(a, l);
        }), n._dbSchema = l, to(n, [n._allTables, n, n.Transaction.prototype]), fr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], u(l), l), n._storeNames = u(l), this;
      }, Tn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = _e(this._cfg.contentUpgrade || I, e), this;
      }, Tn);
      function Tn() {
      }
      function oo(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new Mt(or, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function ao(e) {
        return Wt(function() {
          return fe.letThrough = !0, e();
        });
      }
      function so(e) {
        return !("from" in e);
      }
      var ut = function(e, n) {
        if (!this) {
          var o = new ut();
          return e && "d" in e && m(o, e), o;
        }
        m(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function $n(e, n, o) {
        var a = Ie(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (so(e)) return m(e, { from: n, to: o, d: 1 });
          var l = e.l, a = e.r;
          if (Ie(o, e.from) < 0) return l ? $n(l, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          if (0 < Ie(n, e.to)) return a ? $n(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          Ie(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Ie(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, l && !e.l && Kn(e, l), a && o && Kn(e, a);
        }
      }
      function Kn(e, n) {
        so(n) || function o(a, b) {
          var f = b.from, h = b.to, v = b.l, b = b.r;
          $n(a, f, h), v && o(a, v), b && o(a, b);
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
            for (f in l) D(l, f) && (h = l[f], v[f] = !h || typeof h != "object" || be.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function lo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && li(n[o], e[o]);
        });
      }
      L(ut.prototype, ((Tt = { add: function(e) {
        return Kn(this, e), this;
      }, addKey: function(e) {
        return $n(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return $n(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = mr(this).next(e).value;
        return n && Ie(n.from, e) <= 0 && 0 <= Ie(n.to, e);
      } })[nt] = function() {
        return mr(this);
      }, Tt));
      var cn = {}, uo = {}, co = !1;
      function yr(e) {
        vr(uo, e), co || (co = !0, setTimeout(function() {
          co = !1, fo(uo, !(uo = {}));
        }, 0));
      }
      function fo(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, l = Object.values(cn); a < l.length; a++) fi(h = l[a], e, o, n);
        else for (var f in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (h = cn["idb://".concat(f, "/").concat(v)]) && fi(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function fi(e, n, o, a) {
        for (var l = [], f = 0, h = Object.entries(e.queries.query); f < h.length; f++) {
          for (var v = h[f], b = v[0], _ = [], R = 0, g = v[1]; R < g.length; R++) {
            var E = g[R];
            lo(n, E.obsSet) ? E.subscribers.forEach(function(C) {
              return o.add(C);
            }) : a && _.push(E);
          }
          a && l.push([b, _]);
        }
        if (a) for (var w = 0, x = l; w < x.length; w++) {
          var T = x[w], b = T[0], _ = T[1];
          e.queries.query[b] = _;
        }
      }
      function Xa(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? ze(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, l = Math.round(10 * e.verno), f = !1;
        function h() {
          if (n.openCanceller !== a) throw new q.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new oe(function(E, w) {
            if (h(), !o) throw new q.MissingAPI();
            var x = e.name, T = n.autoSchema || !l ? o.open(x) : o.open(x, l);
            if (!T) throw new q.MissingAPI();
            T.onerror = Lt(w), T.onblocked = We(e._fireOnBlocked), T.onupgradeneeded = We(function(C) {
              var A;
              R = T.transaction, n.autoSchema && !e._options.allowEmptyDB ? (T.onerror = jn, R.abort(), T.result.close(), (A = o.deleteDatabase(x)).onsuccess = A.onerror = We(function() {
                w(new q.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (R.onerror = Lt(w), C = C.oldVersion > Math.pow(2, 62) ? 0 : C.oldVersion, g = C < 1, e.idbdb = T.result, f && Ha(e, R), Ga(e, C / 10, R, w));
            }, w), T.onsuccess = We(function() {
              R = null;
              var C, A, P, F, B, H = e.idbdb = T.result, ee = M(H.objectStoreNames);
              if (0 < ee.length) try {
                var z = H.transaction((F = ee).length === 1 ? F[0] : F, "readonly");
                if (n.autoSchema) A = H, P = z, (C = e).verno = A.version / 10, P = C._dbSchema = pr(0, A, P), C._storeNames = M(A.objectStoreNames, 0), fr(C, [C._allTables], u(P), P);
                else if (hr(e, e._dbSchema, z), ((B = no(pr(0, (B = e).idbdb, z), B._dbSchema)).add.length || B.change.some(function(Z) {
                  return Z.add.length || Z.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), l = H.version + 1, f = !0, E(v());
                cr(e, z);
              } catch {
              }
              Nn.push(e), H.onversionchange = We(function(Z) {
                n.vcFired = !0, e.on("versionchange").fire(Z);
              }), H.onclose = We(function(Z) {
                e.on("close").fire(Z);
              }), g && (B = e._deps, z = x, H = B.indexedDB, B = B.IDBKeyRange, io(H) || z === or || oo(H, B).put({ name: z }).catch(I)), E();
            }, w);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < l) return l = 0, v();
            }
            return oe.reject(E);
          });
        }
        var b, _ = n.dbReadyResolve, R = null, g = !1;
        return oe.race([a, (typeof navigator > "u" ? oe.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function w() {
            return indexedDB.databases().finally(E);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], oe.resolve(ao(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(_e, I);
              return n.onReadyBeingFired = [], oe.resolve(ao(function() {
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
          return a === n.openCanceller && e._close(), ze(E);
        }).finally(function() {
          n.openComplete = !0, _();
        }).then(function() {
          var E;
          return g && (E = {}, e.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(x) {
              x.name && (E["idb://".concat(e.name, "/").concat(w.name, "/").concat(x.name)] = new ut(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(w.name, "/")] = E["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new ut(-1 / 0, [[[]]]);
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
      var Qa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, l = {}, f = [];
          function h(g, E, w) {
            var x = Mn(g), T = l[x] = l[x] || [], C = g == null ? 0 : typeof g == "string" ? 1 : g.length, A = 0 < E, A = s(s({}, w), { name: A ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: A, keyTail: E, keyLength: C, extractKey: eo(g), unique: !A && w.unique });
            return T.push(A), A.isPrimaryKey || f.push(A), 1 < C && h(C === 2 ? g[0] : g.slice(0, C - 1), E + 1, w), T.sort(function(P, F) {
              return P.keyTail - F.keyTail;
            }), A;
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
            return (g = l[Mn(g)]) && g[0];
          } }), count: function(g) {
            return o.count(R(g));
          }, query: function(g) {
            return o.query(R(g));
          }, openCursor: function(g) {
            var E = g.query.index, w = E.keyTail, x = E.isVirtual, T = E.keyLength;
            return x ? o.openCursor(R(g)).then(function(A) {
              return A && C(A);
            }) : o.openCursor(g);
            function C(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(gr(P, g.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : g.unique ? A.continue(A.key.slice(0, T).concat(g.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, F) {
                A.continuePrimaryKey(gr(P, e.MAX_KEY, w), F);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return T === 1 ? P[0] : P.slice(0, T);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function ho(e, n, o, a) {
        return o = o || {}, a = a || "", u(e).forEach(function(l) {
          var f, h, v;
          D(n, l) ? (f = e[l], h = n[l], typeof f == "object" && typeof h == "object" && f && h ? (v = lt(f)) !== lt(h) ? o[a + l] = n[l] : v === "Object" ? ho(f, h, o, a + l + ".") : f !== h && (o[a + l] = n[l]) : f !== h && (o[a + l] = n[l])) : o[a + l] = void 0;
        }), u(n).forEach(function(l) {
          D(e, l) || (o[a + l] = n[l]);
        }), o;
      }
      function mo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var za = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = fe.trans, h = f.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (l.type) {
              case "add":
                if (b.fire === I) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "put":
                if (b.fire === I && _.fire === I) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "delete":
                if (v.fire === I) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "deleteRange":
                if (v.fire === I) break;
                return f._promise("readwrite", function() {
                  return function g(E, w, x) {
                    return o.query({ trans: E, values: !1, query: { index: a, range: w }, limit: x }).then(function(T) {
                      var C = T.result;
                      return R({ type: "delete", keys: C, trans: E }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : C.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : g(E, s(s({}, w), { lower: C[C.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function R(g) {
              var E, w, x, T = fe.trans, C = g.keys || mo(a, g);
              if (!C) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? s(s({}, g), { keys: C }) : s({}, g)).type !== "delete" && (g.values = c([], g.values)), g.keys && (g.keys = c([], g.keys)), E = o, x = C, ((w = g).type === "add" ? Promise.resolve([]) : E.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(A) {
                var P = C.map(function(F, B) {
                  var H, ee, z, Z = A[B], re = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? v.fire.call(re, F, Z, T) : g.type === "add" || Z === void 0 ? (H = b.fire.call(re, F, g.values[B], T), F == null && H != null && (g.keys[B] = F = H, a.outbound || X(g.values[B], a.keyPath, F))) : (H = ho(Z, g.values[B]), (ee = _.fire.call(re, H, F, Z, T)) && (z = g.values[B], Object.keys(ee).forEach(function(ne) {
                    D(z, ne) ? z[ne] = ee[ne] : X(z, ne, ee[ne]);
                  }))), re;
                });
                return o.mutate(g).then(function(F) {
                  for (var B = F.failures, H = F.results, ee = F.numFailures, F = F.lastResult, z = 0; z < C.length; ++z) {
                    var Z = (H || C)[z], re = P[z];
                    Z == null ? re.onerror && re.onerror(B[z]) : re.onsuccess && re.onsuccess(g.type === "put" && A[z] ? g.values[z] : Z);
                  }
                  return { failures: B, results: H, numFailures: ee, lastResult: F };
                }).catch(function(F) {
                  return P.forEach(function(B) {
                    return B.onerror && B.onerror(F);
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
          for (var a = [], l = 0, f = 0; l < n.keys.length && f < e.length; ++l) Ie(n.keys[l], e[f]) === 0 && (a.push(o ? Ae(n.values[l]) : n.values[l]), ++f);
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
            return l ? oe.resolve(l) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ae(f) : f }, f;
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
        var n = e.schema.name, o = new ut(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(a, l, f) {
          if (fe.subscr && l !== "readonly") throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(fe.querier));
          return e.transaction(a, l, f);
        }, table: function(a) {
          var l = e.table(a), f = l.schema, h = f.primaryKey, g = f.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && g.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), R = s(s({}, l), { mutate: function(w) {
            function x(ne) {
              return ne = "idb://".concat(n, "/").concat(a, "/").concat(ne), F[ne] || (F[ne] = new ut());
            }
            var T, C, A, P = w.trans, F = w.mutatedParts || (w.mutatedParts = {}), B = x(""), H = x(":dels"), ee = w.type, re = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [mo(h, w).filter(function(ne) {
              return ne;
            }), w.values] : [], z = re[0], Z = re[1], re = w.trans._cache;
            return p(z) ? (B.addKeys(z), (re = ee === "delete" || z.length === Z.length ? di(z, re) : null) || H.addKeys(z), (re || Z) && (T = x, C = re, A = Z, f.indexes.forEach(function(ne) {
              var ie = T(ne.name || "");
              function Ce(Ne) {
                return Ne != null ? ne.extractKey(Ne) : null;
              }
              function De(Ne) {
                return ne.multiEntry && p(Ne) ? Ne.forEach(function(Xe) {
                  return ie.addKey(Xe);
                }) : ie.addKey(Ne);
              }
              (C || A).forEach(function(Ne, ct) {
                var xe = C && Ce(C[ct]), ct = A && Ce(A[ct]);
                Ie(xe, ct) !== 0 && (xe != null && De(xe), ct != null && De(ct));
              });
            }))) : z ? (Z = { from: (Z = z.lower) !== null && Z !== void 0 ? Z : e.MIN_KEY, to: (Z = z.upper) !== null && Z !== void 0 ? Z : e.MAX_KEY }, H.add(Z), B.add(Z)) : (B.add(o), H.add(o), f.indexes.forEach(function(ne) {
              return x(ne.name).add(o);
            })), l.mutate(w).then(function(ne) {
              return !z || w.type !== "add" && w.type !== "put" || (B.addKeys(ne.results), _ && _.forEach(function(ie) {
                for (var Ce = w.values.map(function(xe) {
                  return ie.extractKey(xe);
                }), De = ie.keyPath.findIndex(function(xe) {
                  return xe === h.keyPath;
                }), Ne = 0, Xe = ne.results.length; Ne < Xe; ++Ne) Ce[Ne][De] = ne.results[Ne];
                x(ie.name).addKeys(Ce);
              })), P.mutatedParts = vr(P.mutatedParts || {}, F), ne;
            });
          } }), g = function(x) {
            var T = x.query, x = T.index, T = T.range;
            return [x, new ut((x = T.lower) !== null && x !== void 0 ? x : e.MIN_KEY, (T = T.upper) !== null && T !== void 0 ? T : e.MAX_KEY)];
          }, E = { get: function(w) {
            return [h, new ut(w.key)];
          }, getMany: function(w) {
            return [h, new ut().addKeys(w.keys)];
          }, count: g, query: g, openCursor: g };
          return u(E).forEach(function(w) {
            R[w] = function(x) {
              var T = fe.subscr, C = !!T, A = pi(fe, l) && hi(w, x) ? x.obsSet = {} : T;
              if (C) {
                var P = function(Z) {
                  return Z = "idb://".concat(n, "/").concat(a, "/").concat(Z), A[Z] || (A[Z] = new ut());
                }, F = P(""), B = P(":dels"), T = E[w](x), C = T[0], T = T[1];
                if ((w === "query" && C.isPrimaryKey && !x.values ? B : P(C.name || "")).add(T), !C.isPrimaryKey) {
                  if (w !== "count") {
                    var H = w === "query" && b && x.values && l.query(s(s({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(Z) {
                      if (w === "query") {
                        if (b && x.values) return H.then(function(Ce) {
                          return Ce = Ce.result, F.addKeys(Ce), Z;
                        });
                        var re = x.values ? Z.result.map(v) : Z.result;
                        (x.values ? F : B).addKeys(re);
                      } else if (w === "openCursor") {
                        var ne = Z, ie = x.values;
                        return ne && Object.create(ne, { key: { get: function() {
                          return B.addKey(ne.primaryKey), ne.key;
                        } }, primaryKey: { get: function() {
                          var Ce = ne.primaryKey;
                          return B.addKey(Ce), Ce;
                        } }, value: { get: function() {
                          return ie && F.addKey(ne.primaryKey), ne.value;
                        } } });
                      }
                      return Z;
                    });
                  }
                  B.add(o);
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
          var T = w, C = [];
          if (x.type === "add" || x.type === "put") for (var A = new ut(), P = x.values.length - 1; 0 <= P; --P) {
            var F, B = x.values[P], H = _(B);
            A.hasKey(H) || (F = R(B), (v && p(F) ? F.some(function(ne) {
              return vo(ne, b);
            }) : vo(F, b)) && (A.addKey(H), C.push(B)));
          }
          switch (x.type) {
            case "add":
              var ee = new ut().addKeys(n.values ? w.map(function(ie) {
                return _(ie);
              }) : w), T = w.concat(n.values ? C.filter(function(ie) {
                return ie = _(ie), !ee.hasKey(ie) && (ee.addKey(ie), !0);
              }) : C.map(function(ie) {
                return _(ie);
              }).filter(function(ie) {
                return !ee.hasKey(ie) && (ee.addKey(ie), !0);
              }));
              break;
            case "put":
              var z = new ut().addKeys(x.values.map(function(ie) {
                return _(ie);
              }));
              T = w.filter(function(ie) {
                return !z.hasKey(n.values ? _(ie) : ie);
              }).concat(n.values ? C : C.map(function(ie) {
                return _(ie);
              }));
              break;
            case "delete":
              var Z = new ut().addKeys(x.keys);
              T = w.filter(function(ie) {
                return !Z.hasKey(n.values ? _(ie) : ie);
              });
              break;
            case "deleteRange":
              var re = x.range;
              T = w.filter(function(ie) {
                return !vo(_(ie), re);
              });
          }
          return T;
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
            l.subscribers.size === 0 && Pe(f, l);
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
                  var E = g[R], w = cn["idb://".concat(n, "/").concat(E)];
                  if (w) {
                    var x = e.table(E), T = w.optimisticOps.filter(function(ie) {
                      return ie.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var C = 0, A = Object.values(w.queries.query); C < A.length; C++) for (var P = 0, F = (ee = A[C]).slice(); P < F.length; P++) lo((z = F[P]).obsSet, v.mutatedParts) && (Pe(ee, z), z.subscribers.forEach(function(ie) {
                      return _.add(ie);
                    }));
                    else if (0 < T.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(ie) {
                        return ie.trans !== v;
                      });
                      for (var B = 0, H = Object.values(w.queries.query); B < H.length; B++) for (var ee, z, Z, re = 0, ne = (ee = H[B]).slice(); re < ne.length; re++) (z = ne[re]).res != null && v.mutatedParts && (b && !z.dirty ? (Z = Object.isFrozen(z.res), Z = vi(z.res, z.req, T, x, z, Z), z.dirty ? (Pe(ee, z), z.subscribers.forEach(function(ie) {
                        return _.add(ie);
                      })) : Z !== z.res && (z.res = Z, z.promise = oe.resolve({ result: Z }))) : (z.dirty && Pe(ee, z), z.subscribers.forEach(function(ie) {
                        return _.add(ie);
                      })));
                    }
                  }
                }
                _.forEach(function(ie) {
                  return ie();
                });
              }
            };
          }, v.addEventListener("abort", l(!1), { signal: h }), v.addEventListener("error", l(!1), { signal: h }), v.addEventListener("complete", l(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), l = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var h = fe.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(f);
            var v = cn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || mo(l, f).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && yr(f.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (Pe(v.optimisticOps, f), (b = mi(0, f, b)) && v.optimisticOps.push(b), f.mutatedParts && yr(f.mutatedParts));
            }), h.catch(function() {
              Pe(v.optimisticOps, f), f.mutatedParts && yr(f.mutatedParts);
            })) : h.then(function(b) {
              var _ = mi(0, s(s({}, f), { values: f.values.map(function(R, g) {
                var E;
                return b.failures[g] ? R : (R = (E = l.keyPath) !== null && E !== void 0 && E.includes(".") ? Ae(R) : s({}, R), X(R, l.keyPath, b.results[g]), R);
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return f.mutatedParts && yr(f.mutatedParts);
              });
            }), h) : a.mutate(f);
          }, query: function(f) {
            if (!pi(fe, a) || !hi("query", f)) return a.query(f);
            var h = ((_ = fe.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", g = fe, v = g.requery, b = g.signal, _ = function(x, T, C, A) {
              var P = cn["idb://".concat(x, "/").concat(T)];
              if (!P) return [];
              if (!(T = P.queries[C])) return [null, !1, P, null];
              var F = T[(A.query ? A.query.index.name : null) || ""];
              if (!F) return [null, !1, P, null];
              switch (C) {
                case "query":
                  var B = F.find(function(H) {
                    return H.req.limit === A.limit && H.req.values === A.values && yi(H.req.query.range, A.query.range);
                  });
                  return B ? [B, !0, P, F] : [F.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= A.limit && (!A.values || H.req.values) && es(H.req.query.range, A.query.range);
                  }), !1, P, F];
                case "count":
                  return B = F.find(function(H) {
                    return yi(H.req.query.range, A.query.range);
                  }), [B, !!B, P, F];
              }
            }(n, o, "query", f), R = _[0], g = _[1], E = _[2], w = _[3];
            return R && g ? R.obsSet = f.obsSet : (g = a.query(f).then(function(x) {
              var T = x.result;
              if (R && (R.res = T), h) {
                for (var C = 0, A = T.length; C < A; ++C) Object.freeze(T[C]);
                Object.freeze(T);
              } else x.result = Ae(T);
              return x;
            }).catch(function(x) {
              return w && R && Pe(w, R), Promise.reject(x);
            }), R = { obsSet: f.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(R) : (w = [R], (E = E || (cn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), ts(R, w, v, b), R.promise.then(function(x) {
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
      var Mt = (Je.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new q.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new q.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Wa), o.stores({}), this._state.autoSchema = !1, o);
      }, Je.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || fe.letThrough || this._vip) ? e() : new oe(function(o, a) {
          if (n._state.openComplete) return a(new q.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new q.DatabaseClosed());
            n.open().catch(I);
          }
          n._state.dbReadyPromise.then(o, a);
        }).then(e);
      }, Je.prototype.use = function(e) {
        var n = e.stack, o = e.create, a = e.level, l = e.name;
        return l && this.unuse({ stack: n, name: l }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: a ?? 10, name: l }), e.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Je.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(l) {
          return a ? l.create !== a : !!o && l.name !== o;
        })), this;
      }, Je.prototype.open = function() {
        var e = this;
        return sn(pt, function() {
          return Xa(e);
        });
      }, Je.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = Nn.indexOf(this);
        if (0 <= n && Nn.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new oe(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new oe(function(o, a) {
          e.cancelOpen = a;
        }));
      }, Je.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new q.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new q.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Je.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new oe(function(l, f) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = We(function() {
              var b, _, R;
              b = n._deps, _ = n.name, R = b.indexedDB, b = b.IDBKeyRange, io(R) || _ === or || oo(R, b).delete(_).catch(I), l();
            }), v.onerror = Lt(f), v.onblocked = n._fireOnBlocked;
          }
          if (o) throw new q.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(h) : h();
        });
      }, Je.prototype.backendDB = function() {
        return this.idbdb;
      }, Je.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Je.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Je.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Je.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Je.prototype, "tables", { get: function() {
        var e = this;
        return u(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Je.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var l = arguments.length;
          if (l < 2) throw new q.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return a = f.pop(), [n, le(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Je.prototype._transaction = function(e, n, o) {
        var a = this, l = fe.trans;
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
          }) : ze(_);
        }
        var b = (function _(R, g, E, w, x) {
          return oe.resolve().then(function() {
            var T = fe.transless || fe, C = R._createTransaction(g, E, R._dbSchema, w);
            if (C.explicit = !0, T = { trans: C, transless: T }, w) C.idbtrans = w.idbtrans;
            else try {
              C.create(), C.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3;
            } catch (F) {
              return F.name === S.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                return _(R, g, E, null, x);
              })) : ze(F);
            }
            var A, P = gt(x);
            return P && xn(), T = oe.follow(function() {
              var F;
              (A = x.call(C, C)) && (P ? (F = Gt.bind(null, null), A.then(F, F)) : typeof A.next == "function" && typeof A.throw == "function" && (A = po(A)));
            }, T), (A && typeof A.then == "function" ? oe.resolve(A).then(function(F) {
              return C.active ? F : ze(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : T.then(function() {
              return A;
            })).then(function(F) {
              return w && C._resolve(), C._completion.then(function() {
                return F;
              });
            }).catch(function(F) {
              return C._reject(F), ze(F);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, b, "lock") : fe.trans ? sn(fe.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Je.prototype.table = function(e) {
        if (!D(this._allTables, e)) throw new q.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Je);
      function Je(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Je.dependencies;
        this._options = n = s({ addons: Je.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: I, dbReadyPromise: null, cancelOpen: I, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new oe(function(g) {
          _.dbReadyResolve = g;
        }), _.openCanceller = new oe(function(g, E) {
          _.cancelOpen = E;
        }), this._state = _, this.name = e, this.on = Pn(this, "populate", "blocked", "versionchange", "close", { ready: [_e, I] }), this.once = function(g, E) {
          var w = function() {
            for (var x = [], T = 0; T < arguments.length; T++) x[T] = arguments[T];
            o.on(g).unsubscribe(w), E.apply(o, x);
          };
          return o.on(g, w);
        }, this.on.ready.subscribe = $(this.on.ready.subscribe, function(g) {
          return function(E, w) {
            Je.vip(function() {
              var x, T = o._state;
              T.openComplete ? (T.dbOpenError || oe.resolve().then(E), w && g(E)) : T.onReadyBeingFired ? (T.onReadyBeingFired.push(E), w && g(E)) : (g(E), x = o, w || g(function C() {
                x.on.ready.unsubscribe(E), x.on.ready.unsubscribe(C);
              }));
            });
          };
        }), this.Collection = (l = this, Ln(Ba.prototype, function(A, C) {
          this.db = l;
          var w = Ho, x = null;
          if (C) try {
            w = C();
          } catch (P) {
            x = P;
          }
          var T = A._ctx, C = T.table, A = C.hook.reading.fire;
          this._ctx = { table: C, index: T.index, isPrimKey: !T.index || C.schema.primKey.keyPath && T.index === C.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: T.or, valueMapper: A !== U ? A : null };
        })), this.Table = (f = this, Ln(zo.prototype, function(g, E, w) {
          this.db = f, this._tx = w, this.name = g, this.schema = E, this.hook = f._allTables[g] ? f._allTables[g].hook : Pn(null, { creating: [ye, I], reading: [ae, U], updating: [Re, I], deleting: [he, I] });
        })), this.Transaction = (h = this, Ln(Ka.prototype, function(g, E, w, x, T) {
          var C = this;
          g !== "readonly" && E.forEach(function(A) {
            A = (A = w[A]) === null || A === void 0 ? void 0 : A.yProps, A && (E = E.concat(A.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = E, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Pn(this, "complete", "error", "abort"), this.parent = T || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new oe(function(A, P) {
            C._resolve = A, C._reject = P;
          }), this._completion.then(function() {
            C.active = !1, C.on.complete.fire();
          }, function(A) {
            var P = C.active;
            return C.active = !1, C.on.error.fire(A), C.parent ? C.parent._reject(A) : P && C.idbtrans && C.idbtrans.abort(), ze(A);
          });
        })), this.Version = (v = this, Ln(Ya.prototype, function(g) {
          this.db = v, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(ri.prototype, function(g, E, w) {
          if (this.db = b, this._ctx = { table: g, index: E === ":id" ? null : E, or: w }, this._cmp = this._ascending = Ie, this._descending = function(x, T) {
            return Ie(T, x);
          }, this._max = function(x, T) {
            return 0 < Ie(x, T) ? x : T;
          }, this._min = function(x, T) {
            return Ie(x, T) < 0 ? x : T;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Bn(n.IDBKeyRange), this._createTransaction = function(g, E, w, x) {
          return new o.Transaction(g, E, w, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(g) {
          o.on("blocked").fire(g), Nn.filter(function(E) {
            return E.name === o.name && E !== o && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(g);
          });
        }, this.use(Ja), this.use(ns), this.use(Za), this.use(Qa), this.use(za);
        var R = new Proxy(this, { get: function(g, E, w) {
          if (E === "_vip") return !0;
          if (E === "table") return function(T) {
            return br(o.table(T), R);
          };
          var x = Reflect.get(g, E, w);
          return x instanceof zo ? br(x, R) : E === "tables" ? x.map(function(T) {
            return br(T, R);
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
          var f = gt(e), h, v = !1, b = {}, _ = {}, R = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), g && Xt.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(R);
          var g = !1, E = function() {
            return Gr(x);
          }, w = function(T) {
            vr(b, T), lo(_, b) && E();
          }, x = function() {
            var T, C, A;
            !v && wr.indexedDB && (b = {}, T = {}, h && h.abort(), h = new AbortController(), A = function(P) {
              var F = wn();
              try {
                f && xn();
                var B = Wt(e, P);
                return B = f ? B.finally(Gt) : B;
              } finally {
                F && _n();
              }
            }(C = { subscr: T, signal: h.signal, requery: E, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              o = !0, n = P, v || C.signal.aborted || (b = {}, function(F) {
                for (var B in F) if (D(F, B)) return;
                return 1;
              }(_ = T) || g || (Xt(Fn, w), g = !0), Gr(function() {
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
      var fn = Mt;
      function go(e) {
        var n = Qt;
        try {
          Qt = !0, Xt.storagemutated.fire(e), fo(e, !0);
        } finally {
          Qt = n;
        }
      }
      L(fn, s(s({}, tt), { delete: function(e) {
        return new fn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new fn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = fn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== or;
            });
          }) : oo(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return ze(new q.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          m(this, e);
        };
      }, ignoreTransaction: function(e) {
        return fe.trans ? sn(fe.transless, e) : e();
      }, vip: ao, async: function(e) {
        return function() {
          try {
            var n = po(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : oe.resolve(n);
          } catch (o) {
            return ze(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = po(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : oe.resolve(a);
        } catch (l) {
          return ze(l);
        }
      }, currentTransaction: { get: function() {
        return fe.trans || null;
      } }, waitFor: function(e, n) {
        return n = oe.resolve(typeof e == "function" ? fn.ignoreTransaction(e) : e).timeout(n || 6e4), fe.trans ? fe.trans.waitFor(n) : n;
      }, Promise: oe, debug: { get: function() {
        return me;
      }, set: function(e) {
        je(e);
      } }, derive: W, extend: m, props: L, override: $, Events: Pn, on: Xt, liveQuery: gi, extendObservabilitySet: vr, getByKeyPath: pe, setByKeyPath: X, delByKeyPath: function(e, n) {
        typeof n == "string" ? X(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          X(e, o, void 0);
        });
      }, shallowClone: se, deepClone: Ae, getObjectDiff: ho, cmp: Ie, asap: Oe, minKey: -1 / 0, addons: [], connections: Nn, errnames: S, dependencies: wr, cache: cn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), fn.maxKey = Bn(fn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xt(Fn, function(e) {
        Qt || (e = new CustomEvent(zr, { detail: e }), Qt = !0, dispatchEvent(e), Qt = !1);
      }), addEventListener(zr, function(e) {
        e = e.detail, Qt || go(e);
      }));
      var On, Qt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (On = new BroadcastChannel(zr)).onmessage = function(e) {
          return e.data && go(e.data);
        };
      })(), typeof On.unref == "function" && On.unref(), Xt(Fn, function(e) {
        Qt || On.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Mt.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), On?.close();
          for (var n = 0, o = Nn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Mt.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), bi(), go({ all: new ut(-1 / 0, [[]]) }));
      })), oe.rejectionMapper = function(e, n) {
        return !e || e instanceof qt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !J[e.name] ? e : (n = new J[e.name](n || e.message, e), "stack" in e && Q(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, je(me), s(Mt, Object.freeze({ __proto__: null, Dexie: Mt, liveQuery: gi, Entity: Yo, cmp: Ie, PropModification: kn, replacePrefix: function(e, n) {
        return new kn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new kn({ add: e });
      }, remove: function(e) {
        return new kn({ remove: e });
      }, default: Mt, RangeSet: ut, mergeRanges: Kn, rangesOverlap: li }), { default: Mt }), Mt;
    });
  }(ra)), ra.exports;
}
var dp = fp();
const Ss = /* @__PURE__ */ up(dp), Ql = Symbol.for("Dexie"), ha = globalThis[Ql] || (globalThis[Ql] = Ss);
if (Ss.semVer !== ha.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ss.semVer} and ${ha.semVer}`);
const {
  liveQuery: bg,
  mergeRanges: wg,
  rangesOverlap: _g,
  RangeSet: xg,
  cmp: Ng,
  Entity: Rg,
  PropModification: Cg,
  replacePrefix: Tg,
  add: Eg,
  remove: Og,
  DexieYProvider: Ag
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
var zl = {};
const vp = {}, yp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: vp
}, Symbol.toStringTag, { value: "Module" })), Jl = /* @__PURE__ */ mp(yp);
var Zl;
function gp() {
  return Zl || (Zl = 1, function(t) {
    (function(r) {
      r.parser = function(S, N) {
        return new s(S, N);
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
      function s(S, N) {
        if (!(this instanceof s))
          return new s(S, N);
        var q = this;
        d(q), q.q = q.c = "", q.bufferCheckPosition = r.MAX_BUFFER_LENGTH, q.opt = N || {}, q.opt.lowercase = q.opt.lowercase || q.opt.lowercasetags, q.looseCase = q.opt.lowercase ? "toLowerCase" : "toUpperCase", q.tags = [], q.closed = q.closedRoot = q.sawRoot = !1, q.tag = q.error = null, q.strict = !!S, q.noscript = !!(S || q.opt.noscript), q.state = j.BEGIN, q.strictEntities = q.opt.strictEntities, q.ENTITIES = q.strictEntities ? Object.create(r.XML_ENTITIES) : Object.create(r.ENTITIES), q.attribList = [], q.opt.xmlns && (q.ns = Object.create(W)), q.opt.unquotedAttributeValues === void 0 && (q.opt.unquotedAttributeValues = !S), q.trackPosition = q.opt.position !== !1, q.trackPosition && (q.position = q.line = q.column = 0), be(q, "onready");
      }
      Object.create || (Object.create = function(S) {
        function N() {
        }
        N.prototype = S;
        var q = new N();
        return q;
      }), Object.keys || (Object.keys = function(S) {
        var N = [];
        for (var q in S) S.hasOwnProperty(q) && N.push(q);
        return N;
      });
      function c(S) {
        for (var N = Math.max(r.MAX_BUFFER_LENGTH, 10), q = 0, J = 0, tt = i.length; J < tt; J++) {
          var I = S[i[J]].length;
          if (I > N)
            switch (i[J]) {
              case "textNode":
                Ae(S);
                break;
              case "cdata":
                ge(S, "oncdata", S.cdata), S.cdata = "";
                break;
              case "script":
                ge(S, "onscript", S.script), S.script = "";
                break;
              default:
                lt(S, "Max buffer length exceeded: " + i[J]);
            }
          q = Math.max(q, I);
        }
        var U = r.MAX_BUFFER_LENGTH - q;
        S.bufferCheckPosition = U + S.position;
      }
      function d(S) {
        for (var N = 0, q = i.length; N < q; N++)
          S[i[N]] = "";
      }
      function u(S) {
        Ae(S), S.cdata !== "" && (ge(S, "oncdata", S.cdata), S.cdata = ""), S.script !== "" && (ge(S, "onscript", S.script), S.script = "");
      }
      s.prototype = {
        end: function() {
          nt(this);
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
      var m = r.EVENTS.filter(function(S) {
        return S !== "error" && S !== "end";
      });
      function k(S, N) {
        return new O(S, N);
      }
      function O(S, N) {
        if (!(this instanceof O))
          return new O(S, N);
        p.apply(this), this._parser = new s(S, N), this.writable = !0, this.readable = !0;
        var q = this;
        this._parser.onend = function() {
          q.emit("end");
        }, this._parser.onerror = function(J) {
          q.emit("error", J), q._parser.error = null;
        }, this._decoder = null, m.forEach(function(J) {
          Object.defineProperty(q, "on" + J, {
            get: function() {
              return q._parser["on" + J];
            },
            set: function(tt) {
              if (!tt)
                return q.removeAllListeners(J), q._parser["on" + J] = tt, tt;
              q.on(J, tt);
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
      }), O.prototype.write = function(S) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(S)) {
          if (!this._decoder) {
            var N = Jl.StringDecoder;
            this._decoder = new N("utf8");
          }
          S = this._decoder.write(S);
        }
        return this._parser.write(S.toString()), this.emit("data", S), !0;
      }, O.prototype.end = function(S) {
        return S && S.length && this.write(S), this._parser.end(), !0;
      }, O.prototype.on = function(S, N) {
        var q = this;
        return !q._parser["on" + S] && m.indexOf(S) !== -1 && (q._parser["on" + S] = function() {
          var J = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          J.splice(0, 0, S), q.emit.apply(q, J);
        }), p.prototype.on.call(q, S, N);
      };
      var D = "[CDATA[", L = "DOCTYPE", Y = "http://www.w3.org/XML/1998/namespace", Q = "http://www.w3.org/2000/xmlns/", W = { xml: Y, xmlns: Q }, G = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, V = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, M = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, $ = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function te(S) {
        return S === " " || S === `
` || S === "\r" || S === "	";
      }
      function Oe(S) {
        return S === '"' || S === "'";
      }
      function pe(S) {
        return S === ">" || te(S);
      }
      function X(S, N) {
        return S.test(N);
      }
      function se(S, N) {
        return !X(S, N);
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
      }, Object.keys(r.ENTITIES).forEach(function(S) {
        var N = r.ENTITIES[S], q = typeof N == "number" ? String.fromCharCode(N) : N;
        r.ENTITIES[S] = q;
      });
      for (var le in r.STATE)
        r.STATE[r.STATE[le]] = le;
      j = r.STATE;
      function be(S, N, q) {
        S[N] && S[N](q);
      }
      function ge(S, N, q) {
        S.textNode && Ae(S), be(S, N, q);
      }
      function Ae(S) {
        S.textNode = st(S.opt, S.textNode), S.textNode && be(S, "ontext", S.textNode), S.textNode = "";
      }
      function st(S, N) {
        return S.trim && (N = N.trim()), S.normalize && (N = N.replace(/\s+/g, " ")), N;
      }
      function lt(S, N) {
        return Ae(S), S.trackPosition && (N += `
Line: ` + S.line + `
Column: ` + S.column + `
Char: ` + S.c), N = new Error(N), S.error = N, be(S, "onerror", N), S;
      }
      function nt(S) {
        return S.sawRoot && !S.closedRoot && we(S, "Unclosed root tag"), S.state !== j.BEGIN && S.state !== j.BEGIN_WHITESPACE && S.state !== j.TEXT && lt(S, "Unexpected end"), Ae(S), S.c = "", S.closed = !0, be(S, "onend"), s.call(S, S.strict, S.opt), S;
      }
      function we(S, N) {
        if (typeof S != "object" || !(S instanceof s))
          throw new Error("bad call to strictFail");
        S.strict && lt(S, N);
      }
      function Pe(S) {
        S.strict || (S.tagName = S.tagName[S.looseCase]());
        var N = S.tags[S.tags.length - 1] || S, q = S.tag = { name: S.tagName, attributes: {} };
        S.opt.xmlns && (q.ns = N.ns), S.attribList.length = 0, ge(S, "onopentagstart", q);
      }
      function yt(S, N) {
        var q = S.indexOf(":"), J = q < 0 ? ["", S] : S.split(":"), tt = J[0], I = J[1];
        return N && S === "xmlns" && (tt = "xmlns", I = ""), { prefix: tt, local: I };
      }
      function He(S) {
        if (S.strict || (S.attribName = S.attribName[S.looseCase]()), S.attribList.indexOf(S.attribName) !== -1 || S.tag.attributes.hasOwnProperty(S.attribName)) {
          S.attribName = S.attribValue = "";
          return;
        }
        if (S.opt.xmlns) {
          var N = yt(S.attribName, !0), q = N.prefix, J = N.local;
          if (q === "xmlns")
            if (J === "xml" && S.attribValue !== Y)
              we(
                S,
                "xml: prefix must be bound to " + Y + `
Actual: ` + S.attribValue
              );
            else if (J === "xmlns" && S.attribValue !== Q)
              we(
                S,
                "xmlns: prefix must be bound to " + Q + `
Actual: ` + S.attribValue
              );
            else {
              var tt = S.tag, I = S.tags[S.tags.length - 1] || S;
              tt.ns === I.ns && (tt.ns = Object.create(I.ns)), tt.ns[J] = S.attribValue;
            }
          S.attribList.push([S.attribName, S.attribValue]);
        } else
          S.tag.attributes[S.attribName] = S.attribValue, ge(S, "onattribute", {
            name: S.attribName,
            value: S.attribValue
          });
        S.attribName = S.attribValue = "";
      }
      function gt(S, N) {
        if (S.opt.xmlns) {
          var q = S.tag, J = yt(S.tagName);
          q.prefix = J.prefix, q.local = J.local, q.uri = q.ns[J.prefix] || "", q.prefix && !q.uri && (we(S, "Unbound namespace prefix: " + JSON.stringify(S.tagName)), q.uri = J.prefix);
          var tt = S.tags[S.tags.length - 1] || S;
          q.ns && tt.ns !== q.ns && Object.keys(q.ns).forEach(function(je) {
            ge(S, "onopennamespace", {
              prefix: je,
              uri: q.ns[je]
            });
          });
          for (var I = 0, U = S.attribList.length; I < U; I++) {
            var ae = S.attribList[I], de = ae[0], ye = ae[1], he = yt(de, !0), Re = he.prefix, Te = he.local, _e = Re === "" ? "" : q.ns[Re] || "", me = {
              name: de,
              value: ye,
              prefix: Re,
              local: Te,
              uri: _e
            };
            Re && Re !== "xmlns" && !_e && (we(S, "Unbound namespace prefix: " + JSON.stringify(Re)), me.uri = Re), S.tag.attributes[de] = me, ge(S, "onattribute", me);
          }
          S.attribList.length = 0;
        }
        S.tag.isSelfClosing = !!N, S.sawRoot = !0, S.tags.push(S.tag), ge(S, "onopentag", S.tag), N || (!S.noscript && S.tagName.toLowerCase() === "script" ? S.state = j.SCRIPT : S.state = j.TEXT, S.tag = null, S.tagName = ""), S.attribName = S.attribValue = "", S.attribList.length = 0;
      }
      function Kt(S) {
        if (!S.tagName) {
          we(S, "Weird empty close tag."), S.textNode += "</>", S.state = j.TEXT;
          return;
        }
        if (S.script) {
          if (S.tagName !== "script") {
            S.script += "</" + S.tagName + ">", S.tagName = "", S.state = j.SCRIPT;
            return;
          }
          ge(S, "onscript", S.script), S.script = "";
        }
        var N = S.tags.length, q = S.tagName;
        S.strict || (q = q[S.looseCase]());
        for (var J = q; N--; ) {
          var tt = S.tags[N];
          if (tt.name !== J)
            we(S, "Unexpected close tag");
          else
            break;
        }
        if (N < 0) {
          we(S, "Unmatched closing tag: " + S.tagName), S.textNode += "</" + S.tagName + ">", S.state = j.TEXT;
          return;
        }
        S.tagName = q;
        for (var I = S.tags.length; I-- > N; ) {
          var U = S.tag = S.tags.pop();
          S.tagName = S.tag.name, ge(S, "onclosetag", S.tagName);
          var ae = {};
          for (var de in U.ns)
            ae[de] = U.ns[de];
          var ye = S.tags[S.tags.length - 1] || S;
          S.opt.xmlns && U.ns !== ye.ns && Object.keys(U.ns).forEach(function(he) {
            var Re = U.ns[he];
            ge(S, "onclosenamespace", { prefix: he, uri: Re });
          });
        }
        N === 0 && (S.closedRoot = !0), S.tagName = S.attribValue = S.attribName = "", S.attribList.length = 0, S.state = j.TEXT;
      }
      function qt(S) {
        var N = S.entity, q = N.toLowerCase(), J, tt = "";
        return S.ENTITIES[N] ? S.ENTITIES[N] : S.ENTITIES[q] ? S.ENTITIES[q] : (N = q, N.charAt(0) === "#" && (N.charAt(1) === "x" ? (N = N.slice(2), J = parseInt(N, 16), tt = J.toString(16)) : (N = N.slice(1), J = parseInt(N, 10), tt = J.toString(10))), N = N.replace(/^0+/, ""), isNaN(J) || tt.toLowerCase() !== N ? (we(S, "Invalid character entity"), "&" + S.entity + ";") : String.fromCodePoint(J));
      }
      function Vn(S, N) {
        N === "<" ? (S.state = j.OPEN_WAKA, S.startTagPosition = S.position) : te(N) || (we(S, "Non-whitespace before first tag."), S.textNode = N, S.state = j.TEXT);
      }
      function gn(S, N) {
        var q = "";
        return N < S.length && (q = S.charAt(N)), q;
      }
      function Pt(S) {
        var N = this;
        if (this.error)
          throw this.error;
        if (N.closed)
          return lt(
            N,
            "Cannot write after close. Assign an onready handler."
          );
        if (S === null)
          return nt(N);
        typeof S == "object" && (S = S.toString());
        for (var q = 0, J = ""; J = gn(S, q++), N.c = J, !!J; )
          switch (N.trackPosition && (N.position++, J === `
` ? (N.line++, N.column = 0) : N.column++), N.state) {
            case j.BEGIN:
              if (N.state = j.BEGIN_WHITESPACE, J === "\uFEFF")
                continue;
              Vn(N, J);
              continue;
            case j.BEGIN_WHITESPACE:
              Vn(N, J);
              continue;
            case j.TEXT:
              if (N.sawRoot && !N.closedRoot) {
                for (var tt = q - 1; J && J !== "<" && J !== "&"; )
                  J = gn(S, q++), J && N.trackPosition && (N.position++, J === `
` ? (N.line++, N.column = 0) : N.column++);
                N.textNode += S.substring(tt, q - 1);
              }
              J === "<" && !(N.sawRoot && N.closedRoot && !N.strict) ? (N.state = j.OPEN_WAKA, N.startTagPosition = N.position) : (!te(J) && (!N.sawRoot || N.closedRoot) && we(N, "Text data outside of root node."), J === "&" ? N.state = j.TEXT_ENTITY : N.textNode += J);
              continue;
            case j.SCRIPT:
              J === "<" ? N.state = j.SCRIPT_ENDING : N.script += J;
              continue;
            case j.SCRIPT_ENDING:
              J === "/" ? N.state = j.CLOSE_TAG : (N.script += "<" + J, N.state = j.SCRIPT);
              continue;
            case j.OPEN_WAKA:
              if (J === "!")
                N.state = j.SGML_DECL, N.sgmlDecl = "";
              else if (!te(J)) if (X(G, J))
                N.state = j.OPEN_TAG, N.tagName = J;
              else if (J === "/")
                N.state = j.CLOSE_TAG, N.tagName = "";
              else if (J === "?")
                N.state = j.PROC_INST, N.procInstName = N.procInstBody = "";
              else {
                if (we(N, "Unencoded <"), N.startTagPosition + 1 < N.position) {
                  var I = N.position - N.startTagPosition;
                  J = new Array(I).join(" ") + J;
                }
                N.textNode += "<" + J, N.state = j.TEXT;
              }
              continue;
            case j.SGML_DECL:
              if (N.sgmlDecl + J === "--") {
                N.state = j.COMMENT, N.comment = "", N.sgmlDecl = "";
                continue;
              }
              N.doctype && N.doctype !== !0 && N.sgmlDecl ? (N.state = j.DOCTYPE_DTD, N.doctype += "<!" + N.sgmlDecl + J, N.sgmlDecl = "") : (N.sgmlDecl + J).toUpperCase() === D ? (ge(N, "onopencdata"), N.state = j.CDATA, N.sgmlDecl = "", N.cdata = "") : (N.sgmlDecl + J).toUpperCase() === L ? (N.state = j.DOCTYPE, (N.doctype || N.sawRoot) && we(
                N,
                "Inappropriately located doctype declaration"
              ), N.doctype = "", N.sgmlDecl = "") : J === ">" ? (ge(N, "onsgmldeclaration", N.sgmlDecl), N.sgmlDecl = "", N.state = j.TEXT) : (Oe(J) && (N.state = j.SGML_DECL_QUOTED), N.sgmlDecl += J);
              continue;
            case j.SGML_DECL_QUOTED:
              J === N.q && (N.state = j.SGML_DECL, N.q = ""), N.sgmlDecl += J;
              continue;
            case j.DOCTYPE:
              J === ">" ? (N.state = j.TEXT, ge(N, "ondoctype", N.doctype), N.doctype = !0) : (N.doctype += J, J === "[" ? N.state = j.DOCTYPE_DTD : Oe(J) && (N.state = j.DOCTYPE_QUOTED, N.q = J));
              continue;
            case j.DOCTYPE_QUOTED:
              N.doctype += J, J === N.q && (N.q = "", N.state = j.DOCTYPE);
              continue;
            case j.DOCTYPE_DTD:
              J === "]" ? (N.doctype += J, N.state = j.DOCTYPE) : J === "<" ? (N.state = j.OPEN_WAKA, N.startTagPosition = N.position) : Oe(J) ? (N.doctype += J, N.state = j.DOCTYPE_DTD_QUOTED, N.q = J) : N.doctype += J;
              continue;
            case j.DOCTYPE_DTD_QUOTED:
              N.doctype += J, J === N.q && (N.state = j.DOCTYPE_DTD, N.q = "");
              continue;
            case j.COMMENT:
              J === "-" ? N.state = j.COMMENT_ENDING : N.comment += J;
              continue;
            case j.COMMENT_ENDING:
              J === "-" ? (N.state = j.COMMENT_ENDED, N.comment = st(N.opt, N.comment), N.comment && ge(N, "oncomment", N.comment), N.comment = "") : (N.comment += "-" + J, N.state = j.COMMENT);
              continue;
            case j.COMMENT_ENDED:
              J !== ">" ? (we(N, "Malformed comment"), N.comment += "--" + J, N.state = j.COMMENT) : N.doctype && N.doctype !== !0 ? N.state = j.DOCTYPE_DTD : N.state = j.TEXT;
              continue;
            case j.CDATA:
              J === "]" ? N.state = j.CDATA_ENDING : N.cdata += J;
              continue;
            case j.CDATA_ENDING:
              J === "]" ? N.state = j.CDATA_ENDING_2 : (N.cdata += "]" + J, N.state = j.CDATA);
              continue;
            case j.CDATA_ENDING_2:
              J === ">" ? (N.cdata && ge(N, "oncdata", N.cdata), ge(N, "onclosecdata"), N.cdata = "", N.state = j.TEXT) : J === "]" ? N.cdata += "]" : (N.cdata += "]]" + J, N.state = j.CDATA);
              continue;
            case j.PROC_INST:
              J === "?" ? N.state = j.PROC_INST_ENDING : te(J) ? N.state = j.PROC_INST_BODY : N.procInstName += J;
              continue;
            case j.PROC_INST_BODY:
              if (!N.procInstBody && te(J))
                continue;
              J === "?" ? N.state = j.PROC_INST_ENDING : N.procInstBody += J;
              continue;
            case j.PROC_INST_ENDING:
              J === ">" ? (ge(N, "onprocessinginstruction", {
                name: N.procInstName,
                body: N.procInstBody
              }), N.procInstName = N.procInstBody = "", N.state = j.TEXT) : (N.procInstBody += "?" + J, N.state = j.PROC_INST_BODY);
              continue;
            case j.OPEN_TAG:
              X(V, J) ? N.tagName += J : (Pe(N), J === ">" ? gt(N) : J === "/" ? N.state = j.OPEN_TAG_SLASH : (te(J) || we(N, "Invalid character in tag name"), N.state = j.ATTRIB));
              continue;
            case j.OPEN_TAG_SLASH:
              J === ">" ? (gt(N, !0), Kt(N)) : (we(N, "Forward-slash in opening tag not followed by >"), N.state = j.ATTRIB);
              continue;
            case j.ATTRIB:
              if (te(J))
                continue;
              J === ">" ? gt(N) : J === "/" ? N.state = j.OPEN_TAG_SLASH : X(G, J) ? (N.attribName = J, N.attribValue = "", N.state = j.ATTRIB_NAME) : we(N, "Invalid attribute name");
              continue;
            case j.ATTRIB_NAME:
              J === "=" ? N.state = j.ATTRIB_VALUE : J === ">" ? (we(N, "Attribute without value"), N.attribValue = N.attribName, He(N), gt(N)) : te(J) ? N.state = j.ATTRIB_NAME_SAW_WHITE : X(V, J) ? N.attribName += J : we(N, "Invalid attribute name");
              continue;
            case j.ATTRIB_NAME_SAW_WHITE:
              if (J === "=")
                N.state = j.ATTRIB_VALUE;
              else {
                if (te(J))
                  continue;
                we(N, "Attribute without value"), N.tag.attributes[N.attribName] = "", N.attribValue = "", ge(N, "onattribute", {
                  name: N.attribName,
                  value: ""
                }), N.attribName = "", J === ">" ? gt(N) : X(G, J) ? (N.attribName = J, N.state = j.ATTRIB_NAME) : (we(N, "Invalid attribute name"), N.state = j.ATTRIB);
              }
              continue;
            case j.ATTRIB_VALUE:
              if (te(J))
                continue;
              Oe(J) ? (N.q = J, N.state = j.ATTRIB_VALUE_QUOTED) : (N.opt.unquotedAttributeValues || lt(N, "Unquoted attribute value"), N.state = j.ATTRIB_VALUE_UNQUOTED, N.attribValue = J);
              continue;
            case j.ATTRIB_VALUE_QUOTED:
              if (J !== N.q) {
                J === "&" ? N.state = j.ATTRIB_VALUE_ENTITY_Q : N.attribValue += J;
                continue;
              }
              He(N), N.q = "", N.state = j.ATTRIB_VALUE_CLOSED;
              continue;
            case j.ATTRIB_VALUE_CLOSED:
              te(J) ? N.state = j.ATTRIB : J === ">" ? gt(N) : J === "/" ? N.state = j.OPEN_TAG_SLASH : X(G, J) ? (we(N, "No whitespace between attributes"), N.attribName = J, N.attribValue = "", N.state = j.ATTRIB_NAME) : we(N, "Invalid attribute name");
              continue;
            case j.ATTRIB_VALUE_UNQUOTED:
              if (!pe(J)) {
                J === "&" ? N.state = j.ATTRIB_VALUE_ENTITY_U : N.attribValue += J;
                continue;
              }
              He(N), J === ">" ? gt(N) : N.state = j.ATTRIB;
              continue;
            case j.CLOSE_TAG:
              if (N.tagName)
                J === ">" ? Kt(N) : X(V, J) ? N.tagName += J : N.script ? (N.script += "</" + N.tagName, N.tagName = "", N.state = j.SCRIPT) : (te(J) || we(N, "Invalid tagname in closing tag"), N.state = j.CLOSE_TAG_SAW_WHITE);
              else {
                if (te(J))
                  continue;
                se(G, J) ? N.script ? (N.script += "</" + J, N.state = j.SCRIPT) : we(N, "Invalid tagname in closing tag.") : N.tagName = J;
              }
              continue;
            case j.CLOSE_TAG_SAW_WHITE:
              if (te(J))
                continue;
              J === ">" ? Kt(N) : we(N, "Invalid characters in closing tag");
              continue;
            case j.TEXT_ENTITY:
            case j.ATTRIB_VALUE_ENTITY_Q:
            case j.ATTRIB_VALUE_ENTITY_U:
              var U, ae;
              switch (N.state) {
                case j.TEXT_ENTITY:
                  U = j.TEXT, ae = "textNode";
                  break;
                case j.ATTRIB_VALUE_ENTITY_Q:
                  U = j.ATTRIB_VALUE_QUOTED, ae = "attribValue";
                  break;
                case j.ATTRIB_VALUE_ENTITY_U:
                  U = j.ATTRIB_VALUE_UNQUOTED, ae = "attribValue";
                  break;
              }
              if (J === ";") {
                var de = qt(N);
                N.opt.unparsedEntities && !Object.values(r.XML_ENTITIES).includes(de) ? (N.entity = "", N.state = U, N.write(de)) : (N[ae] += de, N.entity = "", N.state = U);
              } else X(N.entity.length ? $ : M, J) ? N.entity += J : (we(N, "Invalid character in entity name"), N[ae] += "&" + N.entity + J, N.entity = "", N.state = U);
              continue;
            default:
              throw new Error(N, "Unknown state: " + N.state);
          }
        return N.position >= N.bufferCheckPosition && c(N), N;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var S = String.fromCharCode, N = Math.floor, q = function() {
          var J = 16384, tt = [], I, U, ae = -1, de = arguments.length;
          if (!de)
            return "";
          for (var ye = ""; ++ae < de; ) {
            var he = Number(arguments[ae]);
            if (!isFinite(he) || // `NaN`, `+Infinity`, or `-Infinity`
            he < 0 || // not a valid Unicode code point
            he > 1114111 || // not a valid Unicode code point
            N(he) !== he)
              throw RangeError("Invalid code point: " + he);
            he <= 65535 ? tt.push(he) : (he -= 65536, I = (he >> 10) + 55296, U = he % 1024 + 56320, tt.push(I, U)), (ae + 1 === de || tt.length > J) && (ye += S.apply(null, tt), tt.length = 0);
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
gp();
const Fe = "sclElements", Rt = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
var Ds = { exports: {} }, bp = Ds.exports, eu;
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
      function D(e, n) {
        return O.call(e, n);
      }
      function L(e, n) {
        typeof n == "function" && (n = n(k(e))), (typeof Reflect > "u" ? u : Reflect.ownKeys)(n).forEach(function(o) {
          Q(e, o, n[o]);
        });
      }
      var Y = Object.defineProperty;
      function Q(e, n, o, a) {
        Y(e, n, m(o && D(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function W(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), Q(e.prototype, "constructor", e), { extend: L.bind(null, e.prototype) };
        } };
      }
      var G = Object.getOwnPropertyDescriptor, V = [].slice;
      function M(e, n, o) {
        return V.call(e, n, o);
      }
      function $(e, n) {
        return n(e);
      }
      function te(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function pe(e, n) {
        if (typeof n == "string" && D(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, l = n.length; a < l; ++a) {
            var f = pe(e, n[a]);
            o.push(f);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : pe(v, n.substr(h + 1));
        }
      }
      function X(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          te(typeof o != "string" && "length" in o);
          for (var a = 0, l = n.length; a < l; ++a) X(e, n[a], o[a]);
        } else {
          var f, h, v = n.indexOf(".");
          v !== -1 ? (f = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? p(e) && !isNaN(parseInt(f)) ? e.splice(f, 1) : delete e[f] : e[f] = o : X(v = !(v = e[f]) || !D(e, f) ? e[f] = {} : v, h, o)) : o === void 0 ? p(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function se(e) {
        var n, o = {};
        for (n in e) D(e, n) && (o[n] = e[n]);
        return o;
      }
      var j = [].concat;
      function le(e) {
        return j.apply([], e);
      }
      var Ve = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(le([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), be = new Set(Ve.map(function(e) {
        return d[e];
      })), ge = null;
      function Ae(e) {
        return ge = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = ge.get(o);
          if (a) return a;
          if (p(o)) {
            a = [], ge.set(o, a);
            for (var l = 0, f = o.length; l < f; ++l) a.push(n(o[l]));
          } else if (be.has(o.constructor)) a = o;
          else {
            var h, v = k(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), ge.set(o, a), o) D(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), ge = null, e;
      }
      var st = {}.toString;
      function lt(e) {
        return st.call(e).slice(8, -1);
      }
      var nt = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", we = typeof nt == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[nt]) && n.apply(e);
      } : function() {
        return null;
      };
      function Pe(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var yt = {};
      function He(e) {
        var n, o, a, l;
        if (arguments.length === 1) {
          if (p(e)) return e.slice();
          if (this === yt && typeof e == "string") return [e];
          if (l = we(e)) {
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
      var gt = typeof Symbol < "u" ? function(e) {
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
      var S = Tt.reduce(function(e, n) {
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
      var J = Me.reduce(function(e, n) {
        return e[n + "Error"] = q[n], e;
      }, {}), tt = Tt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = q[n]), e;
      }, {});
      function I() {
      }
      function U(e) {
        return e;
      }
      function ae(e, n) {
        return e == null || e === U ? n : function(o) {
          return n(e(o));
        };
      }
      function de(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function ye(e, n) {
        return e === I ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, l = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var f = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? de(a, this.onsuccess) : a), l && (this.onerror = this.onerror ? de(l, this.onerror) : l), f !== void 0 ? f : o;
        };
      }
      function he(e, n) {
        return e === I ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? de(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? de(a, this.onerror) : a);
        };
      }
      function Re(e, n) {
        return e === I ? n : function(o) {
          var a = e.apply(this, arguments);
          m(o, a);
          var l = this.onsuccess, f = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), l && (this.onsuccess = this.onsuccess ? de(l, this.onsuccess) : l), f && (this.onerror = this.onerror ? de(f, this.onerror) : f), a === void 0 ? o === void 0 ? void 0 : o : m(a, o);
        };
      }
      function Te(e, n) {
        return e === I ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function _e(e, n) {
        return e === I ? n : function() {
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
      tt.ModifyError = gn, tt.DexieError = qt, tt.BulkError = Pt;
      var me = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function je(e) {
        me = e;
      }
      var Ee = {}, Be = 100, Ve = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, k(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, k(n), e];
      }(), Me = Ve[0], Tt = Ve[1], Ve = Ve[2], Tt = Tt && Tt.then, Ze = Me && Me.constructor, ot = !!Ve, _t = function(e, n) {
        bn.push([e, n]), jt && (queueMicrotask(La), jt = !1);
      }, St = !0, jt = !0, xt = [], on = [], Wn = U, pt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: I, pgp: !1, env: {}, finalize: I }, fe = pt, bn = [], an = 0, Jn = [];
      function oe(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = fe;
        if (typeof e != "function") {
          if (e !== Ee) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ur(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, l) {
          try {
            l(function(f) {
              if (a._state === null) {
                if (f === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                f && typeof f.then == "function" ? o(a, function(v, b) {
                  f instanceof oe ? f._then(v, b) : f.then(v, b);
                }) : (a._state = !0, a._value = f, Uo(a)), h && _n();
              }
            }, Ur.bind(null, a));
          } catch (f) {
            Ur(a, f);
          }
        }(this, e);
      }
      var qr = { get: function() {
        var e = fe, n = nr;
        function o(a, l) {
          var f = this, h = !e.global && (e !== fe || n !== nr), v = h && !Gt(), b = new oe(function(_, R) {
            Vr(f, new qo(Wo(a, e, h, v), Wo(l, e, h, v), _, R, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = Ee, o;
      }, set: function(e) {
        Q(this, "then", e && e.prototype === Ee ? qr : { get: function() {
          return e;
        }, set: qr.set });
      } };
      function qo(e, n, o, a, l) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = l;
      }
      function Ur(e, n) {
        var o, a;
        on.push(n), e._state === null && (o = e._lib && wn(), n = Wn(n), e._state = !1, e._value = n, a = e, xt.some(function(l) {
          return l._value === a._value;
        }) || xt.push(a), Uo(e), o && _n());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Vr(e, n[o]);
        var l = e._PSD;
        --l.ref || l.finalize(), an === 0 && (++an, _t(function() {
          --an == 0 && Wr();
        }, []));
      }
      function Vr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++an, _t(Pa, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Pa(e, n, o) {
        try {
          var a, l = n._value;
          !n._state && on.length && (on = []), a = me && n._consoleTask ? n._consoleTask.run(function() {
            return e(l);
          }) : e(l), n._state || on.indexOf(l) !== -1 || function(f) {
            for (var h = xt.length; h; ) if (xt[--h]._value === f._value) return xt.splice(h, 1);
          }(n), o.resolve(a);
        } catch (f) {
          o.reject(f);
        } finally {
          --an == 0 && Wr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function La() {
        sn(pt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = St;
        return jt = St = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        jt = St = !0;
      }
      function Wr() {
        var e = xt;
        xt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = Jn.slice(0), o = n.length; o; ) n[--o]();
      }
      function Zn(e) {
        return new oe(Ee, !1, e);
      }
      function We(e, n) {
        var o = fe;
        return function() {
          var a = wn(), l = fe;
          try {
            return Ht(o, !0), e.apply(this, arguments);
          } catch (f) {
            n && n(f);
          } finally {
            Ht(l, !1), a && _n();
          }
        };
      }
      L(oe.prototype, { then: qr, _then: function(e, n) {
        Vr(this, new qo(null, null, e, n, fe));
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
          return oe.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return oe.resolve(e()).then(function() {
            return Zn(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new oe(function(a, l) {
          var f = setTimeout(function() {
            return l(new q.Timeout(n));
          }, e);
          o.then(a, l).finally(clearTimeout.bind(null, f));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Q(oe.prototype, Symbol.toStringTag, "Dexie.Promise"), pt.env = Vo(), L(oe, { all: function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(l, f) {
            return oe.resolve(l).then(function(h) {
              e[f] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof oe ? e : e && typeof e.then == "function" ? new oe(function(n, o) {
          e.then(n, o);
        }) : new oe(Ee, !0, e);
      }, reject: Zn, race: function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n, o) {
          e.map(function(a) {
            return oe.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return fe;
      }, set: function(e) {
        return fe = e;
      } }, totalEchoes: { get: function() {
        return nr;
      } }, newPSD: Wt, usePSD: sn, scheduler: { get: function() {
        return _t;
      }, set: function(e) {
        _t = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, n) {
        return new oe(function(o, a) {
          return Wt(function(l, f) {
            var h = fe;
            h.unhandleds = [], h.onunhandled = f, h.finalize = de(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? l() : f(b.unhandleds[0]);
              }, Jn.push(function _() {
                v(), Jn.splice(Jn.indexOf(_), 1);
              }), ++an, _t(function() {
                --an == 0 && Wr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), Ze && (Ze.allSettled && Q(oe, "allSettled", function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(l, f) {
            return oe.resolve(l).then(function(h) {
              return a[f] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[f] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), Ze.any && typeof AggregateError < "u" && Q(oe, "any", function() {
        var e = He.apply(null, arguments).map(rr);
        return new oe(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, l = new Array(a);
          e.forEach(function(f, h) {
            return oe.resolve(f).then(function(v) {
              return n(v);
            }, function(v) {
              l[h] = v, --a || o(new AggregateError(l));
            });
          });
        });
      }), Ze.withResolvers && (oe.withResolvers = Ze.withResolvers));
      var it = { awaits: 0, echoes: 0, id: 0 }, ka = 0, er = [], tr = 0, nr = 0, ja = 0;
      function Wt(e, n, o, a) {
        var l = fe, f = Object.create(l);
        return f.parent = l, f.ref = 0, f.global = !1, f.id = ++ja, pt.env, f.env = ot ? { Promise: oe, PromiseProp: { value: oe, configurable: !0, writable: !0 }, all: oe.all, race: oe.race, allSettled: oe.allSettled, any: oe.any, resolve: oe.resolve, reject: oe.reject } : {}, n && m(f, n), ++l.ref, f.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = sn(f, e, o, a), f.ref === 0 && f.finalize(), a;
      }
      function xn() {
        return it.id || (it.id = ++ka), ++it.awaits, it.echoes += Be, it.id;
      }
      function Gt() {
        return !!it.awaits && (--it.awaits == 0 && (it.id = 0), it.echoes = it.awaits * Be, !0);
      }
      function rr(e) {
        return it.echoes && e && e.constructor === Ze ? (xn(), e.then(function(n) {
          return Gt(), n;
        }, function(n) {
          return Gt(), ze(n);
        })) : e;
      }
      function Fa() {
        var e = er[er.length - 1];
        er.pop(), Ht(e, !1);
      }
      function Ht(e, n) {
        var o, a = fe;
        (n ? !it.echoes || tr++ && e === fe : !tr || --tr && e === fe) || queueMicrotask(n ? (function(l) {
          ++nr, it.echoes && --it.echoes != 0 || (it.echoes = it.awaits = it.id = 0), er.push(fe), Ht(l, !0);
        }).bind(null, e) : Fa), e !== fe && (fe = e, a === pt && (pt.env = Vo()), ot && (o = pt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = d.Promise;
        return ot ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function sn(e, n, o, a, l) {
        var f = fe;
        try {
          return Ht(e, !0), n(o, a, l);
        } finally {
          Ht(f, !1);
        }
      }
      function Wo(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var l = fe;
          o && xn(), Ht(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Ht(l, !1), a && queueMicrotask(Gt);
          }
        };
      }
      function Gr(e) {
        Promise === Ze && it.echoes === 0 ? tr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Tt).indexOf("[native code]") === -1 && (xn = Gt = I);
      var ze = oe.reject, ln = "￿", Bt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", Nn = [], or = "__dbnames", Hr = "readonly", Yr = "readwrite";
      function un(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ir(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = Ae(n))[e], n;
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
              }(Qo(e), Qo(n));
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
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = lt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Qo(e) {
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
      var zo = (qe.prototype._trans = function(e, n, o) {
        var a = this._tx || fe.trans, l = this.name, f = me && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, R, g) {
          if (!g.schema[l]) throw new q.NotFound("Table " + l + " not part of transaction");
          return n(g.idbtrans, g);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === fe.trans ? a._promise(e, h, o) : Wt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: fe.transless || fe }) : function _(R, g, E, w) {
            if (R.idbdb && (R._state.openComplete || fe.letThrough || R._vip)) {
              var x = R._createTransaction(g, E, R._dbSchema);
              try {
                x.create(), R._state.PR1398_maxLoop = 3;
              } catch (T) {
                return T.name === S.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                  return _(R, g, E, w);
                })) : ze(T);
              }
              return x._promise(g, function(T, C) {
                return Wt(function() {
                  return fe.trans = x, w(T, C, x);
                });
              }).then(function(T) {
                if (g === "readwrite") try {
                  x.idbtrans.commit();
                } catch {
                }
                return g === "readonly" ? T : x._completion.then(function() {
                  return T;
                });
              });
            }
            if (R._state.openComplete) return ze(new q.DatabaseClosed(R._state.dbOpenError));
            if (!R._state.isBeingOpened) {
              if (!R._state.autoOpen) return ze(new q.DatabaseClosed());
              R.open().catch(I);
            }
            return R._state.dbReadyPromise.then(function() {
              return _(R, g, E, w);
            });
          }(this.db, e, [this.name], h);
          return f && (b._consoleTask = f, b = b.catch(function(_) {
            return console.trace(_), ze(_);
          })), b;
        } finally {
          v && _n();
        }
      }, qe.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? ze(new q.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
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
        if (o && this.db._maxKey !== ln) {
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
          return [_ || g, _ || !g ? un(R, g && g.multi ? function(w) {
            return w = pe(w, b), p(w) && w.some(function(x) {
              return l(E, x);
            });
          } : function(w) {
            return l(E, pe(w, b));
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
          return v.numFailures ? oe.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            X(e, f, v);
          } catch {
          }
          return v;
        });
      }, qe.prototype.update = function(e, n) {
        return typeof e != "object" || p(e) ? this.where(":id").equals(e).modify(n) : (e = pe(e, this.schema.primKey.keyPath), e === void 0 ? ze(new q.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, qe.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, l = a.auto, f = a.keyPath, h = e;
        return f && l && (h = ir(f)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? oe.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (f) try {
            X(e, f, v);
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
            return a.numFailures ? oe.reject(a.failures[0]) : void 0;
          });
        });
      }, qe.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return ar(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? oe.reject(n.failures[0]) : void 0;
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
              var w = g.key, x = g.changes, T = v[E];
              if (T) {
                for (var C = 0, A = Object.keys(x); C < A.length; C++) {
                  var P = A[C], F = x[P];
                  if (P === n.schema.primKey.keyPath) {
                    if (Ie(F, w) !== 0) throw new q.Constraint("Cannot update primary key in bulkUpdate()");
                  } else X(T, P, F);
                }
                f.push(E), b.push(w), _.push(T);
              }
            });
            var R = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: l } }).then(function(g) {
              var E = g.numFailures, w = g.failures;
              if (E === 0) return R;
              for (var x = 0, T = Object.keys(w); x < T.length; x++) {
                var C, A = T[x], P = f[Number(A)];
                P != null && (C = w[A], delete w[A], w[P] = C);
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
            v = v || Te;
            var R = { subscribers: [], fire: b = b || I, subscribe: function(g) {
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
                for (var x = arguments.length, T = new Array(x); x--; ) T[x] = arguments[x];
                w.subscribers.forEach(function(C) {
                  Oe(function() {
                    C.apply(null, T);
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
        e.filter = un(e.filter, n);
      }
      function Qr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return un(a(), n());
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
        var l = e.replayFilter ? un(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var f = {}, h = function(v, b, _) {
            var R, g;
            l && !l(b, _, function(E) {
              return b.stop(E);
            }, function(E) {
              return b.fail(E);
            }) || ((g = "" + (R = b.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(R)), D(f, g) || (f[g] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), Zo(Jo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, a, o), un(e.algorithm, l), n, !e.keysOnly && e.valueMapper);
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
              f.stop(v), h = I;
            }, function(v) {
              f.fail(v), h = I;
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
      var Ba = (ke.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, ze.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, ke.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, ze.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, ke.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = un(n.algorithm, e);
      }, ke.prototype._iterate = function(e, n) {
        return lr(this._ctx, e, n, this._ctx.table.core);
      }, ke.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && m(o, e), n._ctx = o, n;
      }, ke.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, ke.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return lr(n, e, o, n.table.core);
        });
      }, ke.prototype.count = function(e) {
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
      }, ke.prototype.sortBy = function(e, n) {
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
      }, ke.prototype.toArray = function(e) {
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
      }, ke.prototype.offset = function(e) {
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
      }, ke.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, a, l) {
            return --n <= 0 && a(l), 0 <= n;
          };
        }, !0), this;
      }, ke.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, a, l) {
          return !e(o.value) || (a(l), n);
        }), this;
      }, ke.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, ke.prototype.last = function(e) {
        return this.reverse().first(e);
      }, ke.prototype.filter = function(e) {
        var n;
        return Xr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = un(n.isMatch, e), this;
      }, ke.prototype.and = function(e) {
        return this.filter(e);
      }, ke.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, ke.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, ke.prototype.desc = function() {
        return this.reverse();
      }, ke.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.key, a);
        });
      }, ke.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, ke.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.primaryKey, a);
        });
      }, ke.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, l) {
          o.push(l.key);
        }).then(function() {
          return o;
        }).then(e);
      }, ke.prototype.primaryKeys = function(e) {
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
      }, ke.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, ke.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, ke.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, ke.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Xr(this._ctx, function(l) {
          var a = l.primaryKey.toString(), l = D(n, a);
          return n[a] = !0, !l;
        }), this;
      }, ke.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var l, f, h;
          h = typeof e == "function" ? e : (l = u(e), f = l.length, function(A) {
            for (var P = !1, F = 0; F < f; ++F) {
              var B = l[F], H = e[B], ee = pe(A, B);
              H instanceof kn ? (X(A, B, H.execute(ee)), P = !0) : ee !== H && (X(A, B, H), P = !0);
            }
            return P;
          });
          var v = o.table.core, g = v.schema.primaryKey, b = g.outbound, _ = g.extractKey, R = 200, g = n.db._options.modifyChunkSize;
          g && (R = typeof g == "object" ? g[v.name] || g["*"] || 200 : g);
          function E(A, B) {
            var F = B.failures, B = B.numFailures;
            x += A - B;
            for (var H = 0, ee = u(F); H < ee.length; H++) {
              var z = ee[H];
              w.push(F[z]);
            }
          }
          var w = [], x = 0, T = [], C = e === ti;
          return n.clone().primaryKeys().then(function(A) {
            function P(B) {
              var H = Math.min(R, A.length - B), ee = A.slice(B, B + H);
              return (C ? Promise.resolve([]) : v.getMany({ trans: a, keys: ee, cache: "immutable" })).then(function(z) {
                var Z = [], re = [], ne = b ? [] : null, ie = C ? ee : [];
                if (!C) for (var Ce = 0; Ce < H; ++Ce) {
                  var De = z[Ce], Ne = { value: Ae(De), primKey: A[B + Ce] };
                  h.call(Ne, Ne.value, Ne) !== !1 && (Ne.value == null ? ie.push(A[B + Ce]) : b || Ie(_(De), _(Ne.value)) === 0 ? (re.push(Ne.value), b && ne.push(A[B + Ce])) : (ie.push(A[B + Ce]), Z.push(Ne.value)));
                }
                return Promise.resolve(0 < Z.length && v.mutate({ trans: a, type: "add", values: Z }).then(function(Xe) {
                  for (var xe in Xe.failures) ie.splice(parseInt(xe), 1);
                  E(Z.length, Xe);
                })).then(function() {
                  return (0 < re.length || F && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: ne, values: re, criteria: F, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < B }).then(function(Xe) {
                    return E(re.length, Xe);
                  });
                }).then(function() {
                  return (0 < ie.length || F && C) && v.mutate({ trans: a, type: "delete", keys: ie, criteria: F, isAdditionalChunk: 0 < B }).then(function(Xe) {
                    return ar(o.table, ie, Xe);
                  }).then(function(Xe) {
                    return E(ie.length, Xe);
                  });
                }).then(function() {
                  return A.length > B + H && P(B + R);
                });
              });
            }
            var F = Rn(o) && o.limit === 1 / 0 && (typeof e != "function" || C) && { index: o.index, range: o.range };
            return P(0).then(function() {
              if (0 < w.length) throw new gn("Error modifying one or more objects", w, x, T);
              return A.length;
            });
          });
        });
      }, ke.prototype.delete = function() {
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
      }, ke);
      function ke() {
      }
      var ti = function(e, n) {
        return n.value = null;
      };
      function Ma(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function $a(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function wt(e, n, o) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Cn(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function ur(e, n, o, a) {
        var l, f, h, v, b, _, R, g = o.length;
        if (!o.every(function(x) {
          return typeof x == "string";
        })) return wt(e, Go);
        function E(x) {
          l = x === "next" ? function(C) {
            return C.toUpperCase();
          } : function(C) {
            return C.toLowerCase();
          }, f = x === "next" ? function(C) {
            return C.toLowerCase();
          } : function(C) {
            return C.toUpperCase();
          }, h = x === "next" ? Ma : $a;
          var T = o.map(function(C) {
            return { lower: f(C), upper: l(C) };
          }).sort(function(C, A) {
            return h(C.lower, A.lower);
          });
          v = T.map(function(C) {
            return C.upper;
          }), b = T.map(function(C) {
            return C.lower;
          }), R = (_ = x) === "next" ? "" : a;
        }
        E("next"), e = new e.Collection(e, function() {
          return Yt(v[0], b[g - 1] + a);
        }), e._ondirectionchange = function(x) {
          E(x);
        };
        var w = 0;
        return e._addAlgorithm(function(x, T, C) {
          var A = x.key;
          if (typeof A != "string") return !1;
          var P = f(A);
          if (n(P, b, w)) return !0;
          for (var F = null, B = w; B < g; ++B) {
            var H = function(ee, z, Z, re, ne, ie) {
              for (var Ce = Math.min(ee.length, re.length), De = -1, Ne = 0; Ne < Ce; ++Ne) {
                var Xe = z[Ne];
                if (Xe !== re[Ne]) return ne(ee[Ne], Z[Ne]) < 0 ? ee.substr(0, Ne) + Z[Ne] + Z.substr(Ne + 1) : ne(ee[Ne], re[Ne]) < 0 ? ee.substr(0, Ne) + re[Ne] + Z.substr(Ne + 1) : 0 <= De ? ee.substr(0, De) + z[De] + Z.substr(De + 1) : null;
                ne(ee[Ne], Xe) < 0 && (De = Ne);
              }
              return Ce < re.length && ie === "next" ? ee + Z.substr(ee.length) : Ce < ee.length && ie === "prev" ? ee.substr(0, Z.length) : De < 0 ? null : ee.substr(0, De) + re[De] + Z.substr(De + 1);
            }(A, P, v[B], b[B], h, _);
            H === null && F === null ? w = B + 1 : (F === null || 0 < h(F, H)) && (F = H);
          }
          return T(F !== null ? function() {
            x.continue(F + R);
          } : C), !1;
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
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || a) && (!o || !a) ? Cn(this) : new this.Collection(this, function() {
            return Yt(e, n, !o, !a);
          });
        } catch {
          return wt(this, Bt);
        }
      }, at.prototype.equals = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return ni(e);
        });
      }, at.prototype.above = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(e, void 0, !0);
        });
      }, at.prototype.aboveOrEqual = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(e, void 0, !1);
        });
      }, at.prototype.below = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(void 0, e, !1, !0);
        });
      }, at.prototype.belowOrEqual = function(e) {
        return e == null ? wt(this, Bt) : new this.Collection(this, function() {
          return Yt(void 0, e);
        });
      }, at.prototype.startsWith = function(e) {
        return typeof e != "string" ? wt(this, Go) : this.between(e, e + ln, !0, !0);
      }, at.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : ur(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], ln);
      }, at.prototype.equalsIgnoreCase = function(e) {
        return ur(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, at.prototype.anyOfIgnoreCase = function() {
        var e = He.apply(yt, arguments);
        return e.length === 0 ? Cn(this) : ur(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, at.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = He.apply(yt, arguments);
        return e.length === 0 ? Cn(this) : ur(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, ln);
      }, at.prototype.anyOf = function() {
        var e = this, n = He.apply(yt, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return wt(this, Bt);
        }
        if (n.length === 0) return Cn(this);
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
        var e = He.apply(yt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return wt(this, Bt);
        }
        var n = e.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, at.prototype.inAnyRange = function(A, n) {
        var o = this, a = this._cmp, l = this._ascending, f = this._descending, h = this._min, v = this._max;
        if (A.length === 0) return Cn(this);
        if (!A.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && l(P[0], P[1]) <= 0;
        })) return wt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", q.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, R, g = l;
        function E(P, F) {
          return g(P[0], F[0]);
        }
        try {
          (R = A.reduce(function(P, F) {
            for (var B = 0, H = P.length; B < H; ++B) {
              var ee = P[B];
              if (a(F[0], ee[1]) < 0 && 0 < a(F[1], ee[0])) {
                ee[0] = h(ee[0], F[0]), ee[1] = v(ee[1], F[1]);
                break;
              }
            }
            return B === H && P.push(F), P;
          }, [])).sort(E);
        } catch {
          return wt(this, Bt);
        }
        var w = 0, x = _ ? function(P) {
          return 0 < l(P, R[w][1]);
        } : function(P) {
          return 0 <= l(P, R[w][1]);
        }, T = b ? function(P) {
          return 0 < f(P, R[w][0]);
        } : function(P) {
          return 0 <= f(P, R[w][0]);
        }, C = x, A = new this.Collection(this, function() {
          return Yt(R[0][0], R[R.length - 1][1], !b, !_);
        });
        return A._ondirectionchange = function(P) {
          g = P === "next" ? (C = x, l) : (C = T, f), R.sort(E);
        }, A._addAlgorithm(function(P, F, B) {
          for (var H, ee = P.key; C(ee); ) if (++w === R.length) return F(B), !1;
          return !x(H = ee) && !T(H) || (o._cmp(ee, R[w][1]) === 0 || o._cmp(ee, R[w][0]) === 0 || F(function() {
            g === l ? P.continue(R[w][0]) : P.continue(R[w][1]);
          }), !1);
        }), A;
      }, at.prototype.startsWithAnyOf = function() {
        var e = He.apply(yt, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Cn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + ln];
        })) : wt(this, "startsWithAnyOf() only works with strings");
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
      var Fn = "storagemutated", zr = "x-storagemutated-1", Xt = Pn(null, Fn), Ka = (kt.prototype._lock = function() {
        return te(!fe.global), ++this._reculock, this._reculock !== 1 || fe.global || (fe.lockOwnerFor = this), this;
      }, kt.prototype._unlock = function() {
        if (te(!fe.global), --this._reculock == 0) for (fe.global || (fe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            sn(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, kt.prototype._locked = function() {
        return this._reculock && fe.lockOwnerFor !== this;
      }, kt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (te(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new q.DatabaseClosed(a);
          case "MissingAPIError":
            throw new q.MissingAPI(a.message, a);
          default:
            throw new q.OpenFailed(a);
        }
        if (!this.active) throw new q.TransactionInactive();
        return te(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = We(function(l) {
          jn(l), n._reject(e.error);
        }), e.onabort = We(function(l) {
          jn(l), n.active && n._reject(new q.Abort(e.error)), n.active = !1, n.on("abort").fire(l);
        }), e.oncomplete = We(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Xt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, kt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return ze(new q.ReadOnly("Transaction is readonly"));
        if (!this.active) return ze(new q.TransactionInactive());
        if (this._locked()) return new oe(function(f, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(f, h);
          }, fe]);
        });
        if (o) return Wt(function() {
          var f = new oe(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return f.finally(function() {
            return a._unlock();
          }), f._lib = !0, f;
        });
        var l = new oe(function(f, h) {
          var v = n(f, h, a);
          v && v.then && v.then(f, h);
        });
        return l._lib = !0, l;
      }, kt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, kt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = oe.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function f() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = f);
        }());
        var l = o._waitingFor;
        return new oe(function(f, h) {
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
        if (D(n, e)) return n[e];
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
      var Bn = function(e) {
        try {
          return e.only([[]]), Bn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Bn = function() {
            return ln;
          }, ln;
        }
      };
      function eo(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return pe(o, n);
        } : function(o) {
          return pe(o, e);
        };
        var n;
      }
      function ii(e) {
        return [].slice.call(e);
      }
      var qa = 0;
      function Mn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ua(e, n, b) {
        function a(C) {
          if (C.type === 3) return null;
          if (C.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = C.lower, x = C.upper, T = C.lowerOpen, C = C.upperOpen;
          return w === void 0 ? x === void 0 ? null : n.upperBound(x, !!C) : x === void 0 ? n.lowerBound(w, !!T) : n.bound(w, x, !!T, !!C);
        }
        function l(E) {
          var w, x = E.name;
          return { name: x, schema: E, mutate: function(T) {
            var C = T.trans, A = T.type, P = T.keys, F = T.values, B = T.range;
            return new Promise(function(H, ee) {
              H = We(H);
              var z = C.objectStore(x), Z = z.keyPath == null, re = A === "put" || A === "add";
              if (!re && A !== "delete" && A !== "deleteRange") throw new Error("Invalid operation type: " + A);
              var ne, ie = (P || F || { length: 1 }).length;
              if (P && F && P.length !== F.length) throw new Error("Given keys array must have same length as given values array.");
              if (ie === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Ce(ht) {
                ++Xe, jn(ht);
              }
              var De = [], Ne = [], Xe = 0;
              if (A === "deleteRange") {
                if (B.type === 4) return H({ numFailures: Xe, failures: Ne, results: [], lastResult: void 0 });
                B.type === 3 ? De.push(ne = z.clear()) : De.push(ne = z.delete(a(B)));
              } else {
                var Z = re ? Z ? [F, P] : [F, null] : [P, null], xe = Z[0], ct = Z[1];
                if (re) for (var ft = 0; ft < ie; ++ft) De.push(ne = ct && ct[ft] !== void 0 ? z[A](xe[ft], ct[ft]) : z[A](xe[ft])), ne.onerror = Ce;
                else for (ft = 0; ft < ie; ++ft) De.push(ne = z[A](xe[ft])), ne.onerror = Ce;
              }
              function _r(ht) {
                ht = ht.target.result, De.forEach(function(dn, bo) {
                  return dn.error != null && (Ne[bo] = dn.error);
                }), H({ numFailures: Xe, failures: Ne, results: A === "delete" ? P : De.map(function(dn) {
                  return dn.result;
                }), lastResult: ht });
              }
              ne.onerror = function(ht) {
                Ce(ht), _r(ht);
              }, ne.onsuccess = _r;
            });
          }, getMany: function(T) {
            var C = T.trans, A = T.keys;
            return new Promise(function(P, F) {
              P = We(P);
              for (var B, H = C.objectStore(x), ee = A.length, z = new Array(ee), Z = 0, re = 0, ne = function(De) {
                De = De.target, z[De._pos] = De.result, ++re === Z && P(z);
              }, ie = Lt(F), Ce = 0; Ce < ee; ++Ce) A[Ce] != null && ((B = H.get(A[Ce]))._pos = Ce, B.onsuccess = ne, B.onerror = ie, ++Z);
              Z === 0 && P(z);
            });
          }, get: function(T) {
            var C = T.trans, A = T.key;
            return new Promise(function(P, F) {
              P = We(P);
              var B = C.objectStore(x).get(A);
              B.onsuccess = function(H) {
                return P(H.target.result);
              }, B.onerror = Lt(F);
            });
          }, query: (w = _, function(T) {
            return new Promise(function(C, A) {
              C = We(C);
              var P, F, B, Z = T.trans, H = T.values, ee = T.limit, ne = T.query, z = ee === 1 / 0 ? void 0 : ee, re = ne.index, ne = ne.range, Z = Z.objectStore(x), re = re.isPrimaryKey ? Z : Z.index(re.name), ne = a(ne);
              if (ee === 0) return C({ result: [] });
              w ? ((z = H ? re.getAll(ne, z) : re.getAllKeys(ne, z)).onsuccess = function(ie) {
                return C({ result: ie.target.result });
              }, z.onerror = Lt(A)) : (P = 0, F = !H && "openKeyCursor" in re ? re.openKeyCursor(ne) : re.openCursor(ne), B = [], F.onsuccess = function(ie) {
                var Ce = F.result;
                return Ce ? (B.push(H ? Ce.value : Ce.primaryKey), ++P === ee ? C({ result: B }) : void Ce.continue()) : C({ result: B });
              }, F.onerror = Lt(A));
            });
          }), openCursor: function(T) {
            var C = T.trans, A = T.values, P = T.query, F = T.reverse, B = T.unique;
            return new Promise(function(H, ee) {
              H = We(H);
              var re = P.index, z = P.range, Z = C.objectStore(x), Z = re.isPrimaryKey ? Z : Z.index(re.name), re = F ? B ? "prevunique" : "prev" : B ? "nextunique" : "next", ne = !A && "openKeyCursor" in Z ? Z.openKeyCursor(a(z), re) : Z.openCursor(a(z), re);
              ne.onerror = Lt(ee), ne.onsuccess = We(function(ie) {
                var Ce, De, Ne, Xe, xe = ne.result;
                xe ? (xe.___id = ++qa, xe.done = !1, Ce = xe.continue.bind(xe), De = (De = xe.continuePrimaryKey) && De.bind(xe), Ne = xe.advance.bind(xe), Xe = function() {
                  throw new Error("Cursor not stopped");
                }, xe.trans = C, xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = function() {
                  throw new Error("Cursor not started");
                }, xe.fail = We(ee), xe.next = function() {
                  var ct = this, ft = 1;
                  return this.start(function() {
                    return ft-- ? ct.continue() : ct.stop();
                  }).then(function() {
                    return ct;
                  });
                }, xe.start = function(ct) {
                  function ft() {
                    if (ne.result) try {
                      ct();
                    } catch (ht) {
                      xe.fail(ht);
                    }
                    else xe.done = !0, xe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, xe.stop();
                  }
                  var _r = new Promise(function(ht, dn) {
                    ht = We(ht), ne.onerror = Lt(dn), xe.fail = dn, xe.stop = function(bo) {
                      xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = Xe, ht(bo);
                    };
                  });
                  return ne.onsuccess = We(function(ht) {
                    ne.onsuccess = ft, ft();
                  }), xe.continue = Ce, xe.continuePrimaryKey = De, xe.advance = Ne, ft(), _r;
                }, H(xe)) : H(null);
              }, ee);
            });
          }, count: function(T) {
            var C = T.query, A = T.trans, P = C.index, F = C.range;
            return new Promise(function(B, H) {
              var ee = A.objectStore(x), z = P.isPrimaryKey ? ee : ee.index(P.name), ee = a(F), z = ee ? z.count(ee) : z.count();
              z.onsuccess = We(function(Z) {
                return B(Z.target.result);
              }), z.onerror = Lt(H);
            });
          } };
        }
        var f, h, v, R = (h = b, v = ii((f = e).objectStoreNames), { schema: { name: f.name, tables: v.map(function(E) {
          return h.objectStore(E);
        }).map(function(E) {
          var w = E.keyPath, C = E.autoIncrement, x = p(w), T = {}, C = { name: E.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: x, keyPath: w, autoIncrement: C, unique: !0, extractKey: eo(w) }, indexes: ii(E.indexNames).map(function(A) {
            return E.index(A);
          }).map(function(B) {
            var P = B.name, F = B.unique, H = B.multiEntry, B = B.keyPath, H = { name: P, compound: p(B), keyPath: B, unique: F, multiEntry: H, extractKey: eo(B) };
            return T[Mn(B)] = H;
          }), getIndexByKeyPath: function(A) {
            return T[Mn(A)];
          } };
          return T[":id"] = C.primaryKey, w != null && (T[Mn(w)] = C.primaryKey), C;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = R.schema, _ = R.hasGetAll, R = b.tables.map(l), g = {};
        return R.forEach(function(E) {
          return g[E.name] = E;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(E) {
          if (!g[E]) throw new Error("Table '".concat(E, "' not found"));
          return g[E];
        }, MIN_KEY: -1 / 0, MAX_KEY: Bn(n), schema: b };
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
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? Q(h, l, { get: function() {
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
        var h = f._reject.bind(f), v = fe.transless || fe;
        Wt(function() {
          return fe.trans = f, fe.transless = v, n !== 0 ? (cr(e, o), _ = n, ((b = f).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(R) {
            return R ?? _;
          }) : oe.resolve(_)).then(function(R) {
            return E = R, w = f, x = o, T = [], R = (g = e)._versions, C = g._dbSchema = pr(0, g.idbdb, x), (R = R.filter(function(A) {
              return A._cfg.version >= E;
            })).length !== 0 ? (R.forEach(function(A) {
              T.push(function() {
                var P = C, F = A._cfg.dbschema;
                hr(g, P, x), hr(g, F, x), C = g._dbSchema = F;
                var B = no(P, F);
                B.add.forEach(function(re) {
                  ro(x, re[0], re[1].primKey, re[1].indexes);
                }), B.change.forEach(function(re) {
                  if (re.recreate) throw new q.Upgrade("Not yet support for changing primary key");
                  var ne = x.objectStore(re.name);
                  re.add.forEach(function(ie) {
                    return dr(ne, ie);
                  }), re.change.forEach(function(ie) {
                    ne.deleteIndex(ie.name), dr(ne, ie);
                  }), re.del.forEach(function(ie) {
                    return ne.deleteIndex(ie);
                  });
                });
                var H = A._cfg.contentUpgrade;
                if (H && A._cfg.version > E) {
                  cr(g, x), w._memoizedTables = {};
                  var ee = se(F);
                  B.del.forEach(function(re) {
                    ee[re] = P[re];
                  }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], u(ee), ee), w.schema = ee;
                  var z, Z = gt(H);
                  return Z && xn(), B = oe.follow(function() {
                    var re;
                    (z = H(w)) && Z && (re = Gt.bind(null, null), z.then(re, re));
                  }), z && typeof z.then == "function" ? oe.resolve(z) : B.then(function() {
                    return z;
                  });
                }
              }), T.push(function(P) {
                var F, B, H = A._cfg.dbschema;
                F = H, B = P, [].slice.call(B.db.objectStoreNames).forEach(function(ee) {
                  return F[ee] == null && B.db.deleteObjectStore(ee);
                }), to(g, [g.Transaction.prototype]), fr(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), w.schema = g._dbSchema;
              }), T.push(function(P) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === A._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(F) {
                  return F !== "$meta";
                })) : P.objectStore("$meta").put(A._cfg.version, "version"));
              });
            }), function A() {
              return T.length ? oe.resolve(T.shift()(w.idbtrans)).then(A) : oe.resolve();
            }().then(function() {
              ai(C, x);
            })) : oe.resolve();
            var g, E, w, x, T, C;
          }).catch(h)) : (u(l).forEach(function(R) {
            ro(o, R, l[R].primKey, l[R].indexes);
          }), cr(e, o), void oe.follow(function() {
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
        return M(n.objectStoreNames, 0).forEach(function(l) {
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
            var b = h.indexNames[v], _ = h.index(b).keyPath, R = typeof _ == "string" ? _ : "[" + M(_).join("+") + "]";
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
      var Ya = (Tn.prototype._createTableSchema = Zr, Tn.prototype._parseIndexSyntax = si, Tn.prototype._parseStoresSpec = function(e, n) {
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
      }, Tn.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, o) : o;
        var o = n._versions, a = {}, l = {};
        return o.forEach(function(f) {
          m(a, f._cfg.storesSource), l = f._cfg.dbschema = {}, f._parseStoresSpec(a, l);
        }), n._dbSchema = l, to(n, [n._allTables, n, n.Transaction.prototype]), fr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], u(l), l), n._storeNames = u(l), this;
      }, Tn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = _e(this._cfg.contentUpgrade || I, e), this;
      }, Tn);
      function Tn() {
      }
      function oo(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new Mt(or, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function ao(e) {
        return Wt(function() {
          return fe.letThrough = !0, e();
        });
      }
      function so(e) {
        return !("from" in e);
      }
      var ut = function(e, n) {
        if (!this) {
          var o = new ut();
          return e && "d" in e && m(o, e), o;
        }
        m(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function $n(e, n, o) {
        var a = Ie(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (so(e)) return m(e, { from: n, to: o, d: 1 });
          var l = e.l, a = e.r;
          if (Ie(o, e.from) < 0) return l ? $n(l, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          if (0 < Ie(n, e.to)) return a ? $n(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ui(e);
          Ie(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Ie(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, l && !e.l && Kn(e, l), a && o && Kn(e, a);
        }
      }
      function Kn(e, n) {
        so(n) || function o(a, b) {
          var f = b.from, h = b.to, v = b.l, b = b.r;
          $n(a, f, h), v && o(a, v), b && o(a, b);
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
            for (f in l) D(l, f) && (h = l[f], v[f] = !h || typeof h != "object" || be.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function lo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && li(n[o], e[o]);
        });
      }
      L(ut.prototype, ((Tt = { add: function(e) {
        return Kn(this, e), this;
      }, addKey: function(e) {
        return $n(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return $n(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = mr(this).next(e).value;
        return n && Ie(n.from, e) <= 0 && 0 <= Ie(n.to, e);
      } })[nt] = function() {
        return mr(this);
      }, Tt));
      var cn = {}, uo = {}, co = !1;
      function yr(e) {
        vr(uo, e), co || (co = !0, setTimeout(function() {
          co = !1, fo(uo, !(uo = {}));
        }, 0));
      }
      function fo(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, l = Object.values(cn); a < l.length; a++) fi(h = l[a], e, o, n);
        else for (var f in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(f);
          v && (f = v[1], v = v[2], (h = cn["idb://".concat(f, "/").concat(v)]) && fi(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function fi(e, n, o, a) {
        for (var l = [], f = 0, h = Object.entries(e.queries.query); f < h.length; f++) {
          for (var v = h[f], b = v[0], _ = [], R = 0, g = v[1]; R < g.length; R++) {
            var E = g[R];
            lo(n, E.obsSet) ? E.subscribers.forEach(function(C) {
              return o.add(C);
            }) : a && _.push(E);
          }
          a && l.push([b, _]);
        }
        if (a) for (var w = 0, x = l; w < x.length; w++) {
          var T = x[w], b = T[0], _ = T[1];
          e.queries.query[b] = _;
        }
      }
      function Xa(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? ze(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, l = Math.round(10 * e.verno), f = !1;
        function h() {
          if (n.openCanceller !== a) throw new q.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new oe(function(E, w) {
            if (h(), !o) throw new q.MissingAPI();
            var x = e.name, T = n.autoSchema || !l ? o.open(x) : o.open(x, l);
            if (!T) throw new q.MissingAPI();
            T.onerror = Lt(w), T.onblocked = We(e._fireOnBlocked), T.onupgradeneeded = We(function(C) {
              var A;
              R = T.transaction, n.autoSchema && !e._options.allowEmptyDB ? (T.onerror = jn, R.abort(), T.result.close(), (A = o.deleteDatabase(x)).onsuccess = A.onerror = We(function() {
                w(new q.NoSuchDatabase("Database ".concat(x, " doesnt exist")));
              })) : (R.onerror = Lt(w), C = C.oldVersion > Math.pow(2, 62) ? 0 : C.oldVersion, g = C < 1, e.idbdb = T.result, f && Ha(e, R), Ga(e, C / 10, R, w));
            }, w), T.onsuccess = We(function() {
              R = null;
              var C, A, P, F, B, H = e.idbdb = T.result, ee = M(H.objectStoreNames);
              if (0 < ee.length) try {
                var z = H.transaction((F = ee).length === 1 ? F[0] : F, "readonly");
                if (n.autoSchema) A = H, P = z, (C = e).verno = A.version / 10, P = C._dbSchema = pr(0, A, P), C._storeNames = M(A.objectStoreNames, 0), fr(C, [C._allTables], u(P), P);
                else if (hr(e, e._dbSchema, z), ((B = no(pr(0, (B = e).idbdb, z), B._dbSchema)).add.length || B.change.some(function(Z) {
                  return Z.add.length || Z.change.length;
                })) && !f) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), l = H.version + 1, f = !0, E(v());
                cr(e, z);
              } catch {
              }
              Nn.push(e), H.onversionchange = We(function(Z) {
                n.vcFired = !0, e.on("versionchange").fire(Z);
              }), H.onclose = We(function(Z) {
                e.on("close").fire(Z);
              }), g && (B = e._deps, z = x, H = B.indexedDB, B = B.IDBKeyRange, io(H) || z === or || oo(H, B).put({ name: z }).catch(I)), E();
            }, w);
          }).catch(function(E) {
            switch (E?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < l) return l = 0, v();
            }
            return oe.reject(E);
          });
        }
        var b, _ = n.dbReadyResolve, R = null, g = !1;
        return oe.race([a, (typeof navigator > "u" ? oe.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(E) {
          function w() {
            return indexedDB.databases().finally(E);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], oe.resolve(ao(function() {
            return e.on.ready.fire(e.vip);
          })).then(function E() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(_e, I);
              return n.onReadyBeingFired = [], oe.resolve(ao(function() {
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
          return a === n.openCanceller && e._close(), ze(E);
        }).finally(function() {
          n.openComplete = !0, _();
        }).then(function() {
          var E;
          return g && (E = {}, e.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(x) {
              x.name && (E["idb://".concat(e.name, "/").concat(w.name, "/").concat(x.name)] = new ut(-1 / 0, [[[]]]));
            }), E["idb://".concat(e.name, "/").concat(w.name, "/")] = E["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new ut(-1 / 0, [[[]]]);
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
      var Qa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, l = {}, f = [];
          function h(g, E, w) {
            var x = Mn(g), T = l[x] = l[x] || [], C = g == null ? 0 : typeof g == "string" ? 1 : g.length, A = 0 < E, A = s(s({}, w), { name: A ? "".concat(x, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: A, keyTail: E, keyLength: C, extractKey: eo(g), unique: !A && w.unique });
            return T.push(A), A.isPrimaryKey || f.push(A), 1 < C && h(C === 2 ? g[0] : g.slice(0, C - 1), E + 1, w), T.sort(function(P, F) {
              return P.keyTail - F.keyTail;
            }), A;
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
            return (g = l[Mn(g)]) && g[0];
          } }), count: function(g) {
            return o.count(R(g));
          }, query: function(g) {
            return o.query(R(g));
          }, openCursor: function(g) {
            var E = g.query.index, w = E.keyTail, x = E.isVirtual, T = E.keyLength;
            return x ? o.openCursor(R(g)).then(function(A) {
              return A && C(A);
            }) : o.openCursor(g);
            function C(A) {
              return Object.create(A, { continue: { value: function(P) {
                P != null ? A.continue(gr(P, g.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : g.unique ? A.continue(A.key.slice(0, T).concat(g.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : A.continue();
              } }, continuePrimaryKey: { value: function(P, F) {
                A.continuePrimaryKey(gr(P, e.MAX_KEY, w), F);
              } }, primaryKey: { get: function() {
                return A.primaryKey;
              } }, key: { get: function() {
                var P = A.key;
                return T === 1 ? P[0] : P.slice(0, T);
              } }, value: { get: function() {
                return A.value;
              } } });
            }
          } });
        } });
      } };
      function ho(e, n, o, a) {
        return o = o || {}, a = a || "", u(e).forEach(function(l) {
          var f, h, v;
          D(n, l) ? (f = e[l], h = n[l], typeof f == "object" && typeof h == "object" && f && h ? (v = lt(f)) !== lt(h) ? o[a + l] = n[l] : v === "Object" ? ho(f, h, o, a + l + ".") : f !== h && (o[a + l] = n[l]) : f !== h && (o[a + l] = n[l])) : o[a + l] = void 0;
        }), u(n).forEach(function(l) {
          D(e, l) || (o[a + l] = n[l]);
        }), o;
      }
      function mo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var za = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(l) {
            var f = fe.trans, h = f.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (l.type) {
              case "add":
                if (b.fire === I) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "put":
                if (b.fire === I && _.fire === I) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "delete":
                if (v.fire === I) break;
                return f._promise("readwrite", function() {
                  return R(l);
                }, !0);
              case "deleteRange":
                if (v.fire === I) break;
                return f._promise("readwrite", function() {
                  return function g(E, w, x) {
                    return o.query({ trans: E, values: !1, query: { index: a, range: w }, limit: x }).then(function(T) {
                      var C = T.result;
                      return R({ type: "delete", keys: C, trans: E }).then(function(A) {
                        return 0 < A.numFailures ? Promise.reject(A.failures[0]) : C.length < x ? { failures: [], numFailures: 0, lastResult: void 0 } : g(E, s(s({}, w), { lower: C[C.length - 1], lowerOpen: !0 }), x);
                      });
                    });
                  }(l.trans, l.range, 1e4);
                }, !0);
            }
            return o.mutate(l);
            function R(g) {
              var E, w, x, T = fe.trans, C = g.keys || mo(a, g);
              if (!C) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? s(s({}, g), { keys: C }) : s({}, g)).type !== "delete" && (g.values = c([], g.values)), g.keys && (g.keys = c([], g.keys)), E = o, x = C, ((w = g).type === "add" ? Promise.resolve([]) : E.getMany({ trans: w.trans, keys: x, cache: "immutable" })).then(function(A) {
                var P = C.map(function(F, B) {
                  var H, ee, z, Z = A[B], re = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? v.fire.call(re, F, Z, T) : g.type === "add" || Z === void 0 ? (H = b.fire.call(re, F, g.values[B], T), F == null && H != null && (g.keys[B] = F = H, a.outbound || X(g.values[B], a.keyPath, F))) : (H = ho(Z, g.values[B]), (ee = _.fire.call(re, H, F, Z, T)) && (z = g.values[B], Object.keys(ee).forEach(function(ne) {
                    D(z, ne) ? z[ne] = ee[ne] : X(z, ne, ee[ne]);
                  }))), re;
                });
                return o.mutate(g).then(function(F) {
                  for (var B = F.failures, H = F.results, ee = F.numFailures, F = F.lastResult, z = 0; z < C.length; ++z) {
                    var Z = (H || C)[z], re = P[z];
                    Z == null ? re.onerror && re.onerror(B[z]) : re.onsuccess && re.onsuccess(g.type === "put" && A[z] ? g.values[z] : Z);
                  }
                  return { failures: B, results: H, numFailures: ee, lastResult: F };
                }).catch(function(F) {
                  return P.forEach(function(B) {
                    return B.onerror && B.onerror(F);
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
          for (var a = [], l = 0, f = 0; l < n.keys.length && f < e.length; ++l) Ie(n.keys[l], e[f]) === 0 && (a.push(o ? Ae(n.values[l]) : n.values[l]), ++f);
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
            return l ? oe.resolve(l) : o.getMany(a).then(function(f) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? Ae(f) : f }, f;
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
        var n = e.schema.name, o = new ut(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(a, l, f) {
          if (fe.subscr && l !== "readonly") throw new q.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(fe.querier));
          return e.transaction(a, l, f);
        }, table: function(a) {
          var l = e.table(a), f = l.schema, h = f.primaryKey, g = f.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && g.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), R = s(s({}, l), { mutate: function(w) {
            function x(ne) {
              return ne = "idb://".concat(n, "/").concat(a, "/").concat(ne), F[ne] || (F[ne] = new ut());
            }
            var T, C, A, P = w.trans, F = w.mutatedParts || (w.mutatedParts = {}), B = x(""), H = x(":dels"), ee = w.type, re = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [mo(h, w).filter(function(ne) {
              return ne;
            }), w.values] : [], z = re[0], Z = re[1], re = w.trans._cache;
            return p(z) ? (B.addKeys(z), (re = ee === "delete" || z.length === Z.length ? di(z, re) : null) || H.addKeys(z), (re || Z) && (T = x, C = re, A = Z, f.indexes.forEach(function(ne) {
              var ie = T(ne.name || "");
              function Ce(Ne) {
                return Ne != null ? ne.extractKey(Ne) : null;
              }
              function De(Ne) {
                return ne.multiEntry && p(Ne) ? Ne.forEach(function(Xe) {
                  return ie.addKey(Xe);
                }) : ie.addKey(Ne);
              }
              (C || A).forEach(function(Ne, ct) {
                var xe = C && Ce(C[ct]), ct = A && Ce(A[ct]);
                Ie(xe, ct) !== 0 && (xe != null && De(xe), ct != null && De(ct));
              });
            }))) : z ? (Z = { from: (Z = z.lower) !== null && Z !== void 0 ? Z : e.MIN_KEY, to: (Z = z.upper) !== null && Z !== void 0 ? Z : e.MAX_KEY }, H.add(Z), B.add(Z)) : (B.add(o), H.add(o), f.indexes.forEach(function(ne) {
              return x(ne.name).add(o);
            })), l.mutate(w).then(function(ne) {
              return !z || w.type !== "add" && w.type !== "put" || (B.addKeys(ne.results), _ && _.forEach(function(ie) {
                for (var Ce = w.values.map(function(xe) {
                  return ie.extractKey(xe);
                }), De = ie.keyPath.findIndex(function(xe) {
                  return xe === h.keyPath;
                }), Ne = 0, Xe = ne.results.length; Ne < Xe; ++Ne) Ce[Ne][De] = ne.results[Ne];
                x(ie.name).addKeys(Ce);
              })), P.mutatedParts = vr(P.mutatedParts || {}, F), ne;
            });
          } }), g = function(x) {
            var T = x.query, x = T.index, T = T.range;
            return [x, new ut((x = T.lower) !== null && x !== void 0 ? x : e.MIN_KEY, (T = T.upper) !== null && T !== void 0 ? T : e.MAX_KEY)];
          }, E = { get: function(w) {
            return [h, new ut(w.key)];
          }, getMany: function(w) {
            return [h, new ut().addKeys(w.keys)];
          }, count: g, query: g, openCursor: g };
          return u(E).forEach(function(w) {
            R[w] = function(x) {
              var T = fe.subscr, C = !!T, A = pi(fe, l) && hi(w, x) ? x.obsSet = {} : T;
              if (C) {
                var P = function(Z) {
                  return Z = "idb://".concat(n, "/").concat(a, "/").concat(Z), A[Z] || (A[Z] = new ut());
                }, F = P(""), B = P(":dels"), T = E[w](x), C = T[0], T = T[1];
                if ((w === "query" && C.isPrimaryKey && !x.values ? B : P(C.name || "")).add(T), !C.isPrimaryKey) {
                  if (w !== "count") {
                    var H = w === "query" && b && x.values && l.query(s(s({}, x), { values: !1 }));
                    return l[w].apply(this, arguments).then(function(Z) {
                      if (w === "query") {
                        if (b && x.values) return H.then(function(Ce) {
                          return Ce = Ce.result, F.addKeys(Ce), Z;
                        });
                        var re = x.values ? Z.result.map(v) : Z.result;
                        (x.values ? F : B).addKeys(re);
                      } else if (w === "openCursor") {
                        var ne = Z, ie = x.values;
                        return ne && Object.create(ne, { key: { get: function() {
                          return B.addKey(ne.primaryKey), ne.key;
                        } }, primaryKey: { get: function() {
                          var Ce = ne.primaryKey;
                          return B.addKey(Ce), Ce;
                        } }, value: { get: function() {
                          return ie && F.addKey(ne.primaryKey), ne.value;
                        } } });
                      }
                      return Z;
                    });
                  }
                  B.add(o);
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
          var T = w, C = [];
          if (x.type === "add" || x.type === "put") for (var A = new ut(), P = x.values.length - 1; 0 <= P; --P) {
            var F, B = x.values[P], H = _(B);
            A.hasKey(H) || (F = R(B), (v && p(F) ? F.some(function(ne) {
              return vo(ne, b);
            }) : vo(F, b)) && (A.addKey(H), C.push(B)));
          }
          switch (x.type) {
            case "add":
              var ee = new ut().addKeys(n.values ? w.map(function(ie) {
                return _(ie);
              }) : w), T = w.concat(n.values ? C.filter(function(ie) {
                return ie = _(ie), !ee.hasKey(ie) && (ee.addKey(ie), !0);
              }) : C.map(function(ie) {
                return _(ie);
              }).filter(function(ie) {
                return !ee.hasKey(ie) && (ee.addKey(ie), !0);
              }));
              break;
            case "put":
              var z = new ut().addKeys(x.values.map(function(ie) {
                return _(ie);
              }));
              T = w.filter(function(ie) {
                return !z.hasKey(n.values ? _(ie) : ie);
              }).concat(n.values ? C : C.map(function(ie) {
                return _(ie);
              }));
              break;
            case "delete":
              var Z = new ut().addKeys(x.keys);
              T = w.filter(function(ie) {
                return !Z.hasKey(n.values ? _(ie) : ie);
              });
              break;
            case "deleteRange":
              var re = x.range;
              T = w.filter(function(ie) {
                return !vo(_(ie), re);
              });
          }
          return T;
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
            l.subscribers.size === 0 && Pe(f, l);
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
                  var E = g[R], w = cn["idb://".concat(n, "/").concat(E)];
                  if (w) {
                    var x = e.table(E), T = w.optimisticOps.filter(function(ie) {
                      return ie.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var C = 0, A = Object.values(w.queries.query); C < A.length; C++) for (var P = 0, F = (ee = A[C]).slice(); P < F.length; P++) lo((z = F[P]).obsSet, v.mutatedParts) && (Pe(ee, z), z.subscribers.forEach(function(ie) {
                      return _.add(ie);
                    }));
                    else if (0 < T.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(ie) {
                        return ie.trans !== v;
                      });
                      for (var B = 0, H = Object.values(w.queries.query); B < H.length; B++) for (var ee, z, Z, re = 0, ne = (ee = H[B]).slice(); re < ne.length; re++) (z = ne[re]).res != null && v.mutatedParts && (b && !z.dirty ? (Z = Object.isFrozen(z.res), Z = vi(z.res, z.req, T, x, z, Z), z.dirty ? (Pe(ee, z), z.subscribers.forEach(function(ie) {
                        return _.add(ie);
                      })) : Z !== z.res && (z.res = Z, z.promise = oe.resolve({ result: Z }))) : (z.dirty && Pe(ee, z), z.subscribers.forEach(function(ie) {
                        return _.add(ie);
                      })));
                    }
                  }
                }
                _.forEach(function(ie) {
                  return ie();
                });
              }
            };
          }, v.addEventListener("abort", l(!1), { signal: h }), v.addEventListener("error", l(!1), { signal: h }), v.addEventListener("complete", l(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), l = a.schema.primaryKey;
          return s(s({}, a), { mutate: function(f) {
            var h = fe.trans;
            if (l.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(f);
            var v = cn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(f), f.type !== "add" && f.type !== "put" || !(50 <= f.values.length || mo(l, f).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(f), f.mutatedParts && yr(f.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (Pe(v.optimisticOps, f), (b = mi(0, f, b)) && v.optimisticOps.push(b), f.mutatedParts && yr(f.mutatedParts));
            }), h.catch(function() {
              Pe(v.optimisticOps, f), f.mutatedParts && yr(f.mutatedParts);
            })) : h.then(function(b) {
              var _ = mi(0, s(s({}, f), { values: f.values.map(function(R, g) {
                var E;
                return b.failures[g] || (R = (E = l.keyPath) !== null && E !== void 0 && E.includes(".") ? Ae(R) : s({}, R), X(R, l.keyPath, b.results[g])), R;
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return f.mutatedParts && yr(f.mutatedParts);
              });
            }), h) : a.mutate(f);
          }, query: function(f) {
            if (!pi(fe, a) || !hi("query", f)) return a.query(f);
            var h = ((_ = fe.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", g = fe, v = g.requery, b = g.signal, _ = function(x, T, C, A) {
              var P = cn["idb://".concat(x, "/").concat(T)];
              if (!P) return [];
              if (!(T = P.queries[C])) return [null, !1, P, null];
              var F = T[(A.query ? A.query.index.name : null) || ""];
              if (!F) return [null, !1, P, null];
              switch (C) {
                case "query":
                  var B = F.find(function(H) {
                    return H.req.limit === A.limit && H.req.values === A.values && yi(H.req.query.range, A.query.range);
                  });
                  return B ? [B, !0, P, F] : [F.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= A.limit && (!A.values || H.req.values) && es(H.req.query.range, A.query.range);
                  }), !1, P, F];
                case "count":
                  return B = F.find(function(H) {
                    return yi(H.req.query.range, A.query.range);
                  }), [B, !!B, P, F];
              }
            }(n, o, "query", f), R = _[0], g = _[1], E = _[2], w = _[3];
            return R && g ? R.obsSet = f.obsSet : (g = a.query(f).then(function(x) {
              var T = x.result;
              if (R && (R.res = T), h) {
                for (var C = 0, A = T.length; C < A; ++C) Object.freeze(T[C]);
                Object.freeze(T);
              } else x.result = Ae(T);
              return x;
            }).catch(function(x) {
              return w && R && Pe(w, R), Promise.reject(x);
            }), R = { obsSet: f.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: f, dirty: !1 }, w ? w.push(R) : (w = [R], (E = E || (cn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[f.query.index.name || ""] = w)), ts(R, w, v, b), R.promise.then(function(x) {
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
      var Mt = (Je.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new q.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new q.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Wa), o.stores({}), this._state.autoSchema = !1, o);
      }, Je.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || fe.letThrough || this._vip) ? e() : new oe(function(o, a) {
          if (n._state.openComplete) return a(new q.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new q.DatabaseClosed());
            n.open().catch(I);
          }
          n._state.dbReadyPromise.then(o, a);
        }).then(e);
      }, Je.prototype.use = function(e) {
        var n = e.stack, o = e.create, a = e.level, l = e.name;
        return l && this.unuse({ stack: n, name: l }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: a ?? 10, name: l }), e.sort(function(f, h) {
          return f.level - h.level;
        }), this;
      }, Je.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(l) {
          return a ? l.create !== a : !!o && l.name !== o;
        })), this;
      }, Je.prototype.open = function() {
        var e = this;
        return sn(pt, function() {
          return Xa(e);
        });
      }, Je.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = Nn.indexOf(this);
        if (0 <= n && Nn.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new oe(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new oe(function(o, a) {
          e.cancelOpen = a;
        }));
      }, Je.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new q.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new q.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Je.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new oe(function(l, f) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = We(function() {
              var b, _, R;
              b = n._deps, _ = n.name, R = b.indexedDB, b = b.IDBKeyRange, io(R) || _ === or || oo(R, b).delete(_).catch(I), l();
            }), v.onerror = Lt(f), v.onblocked = n._fireOnBlocked;
          }
          if (o) throw new q.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(h) : h();
        });
      }, Je.prototype.backendDB = function() {
        return this.idbdb;
      }, Je.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Je.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Je.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Je.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Je.prototype, "tables", { get: function() {
        var e = this;
        return u(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Je.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var l = arguments.length;
          if (l < 2) throw new q.InvalidArgument("Too few arguments");
          for (var f = new Array(l - 1); --l; ) f[l - 1] = arguments[l];
          return a = f.pop(), [n, le(f), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Je.prototype._transaction = function(e, n, o) {
        var a = this, l = fe.trans;
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
          }) : ze(_);
        }
        var b = (function _(R, g, E, w, x) {
          return oe.resolve().then(function() {
            var T = fe.transless || fe, C = R._createTransaction(g, E, R._dbSchema, w);
            if (C.explicit = !0, T = { trans: C, transless: T }, w) C.idbtrans = w.idbtrans;
            else try {
              C.create(), C.idbtrans._explicit = !0, R._state.PR1398_maxLoop = 3;
            } catch (F) {
              return F.name === S.InvalidState && R.isOpen() && 0 < --R._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), R.close({ disableAutoOpen: !1 }), R.open().then(function() {
                return _(R, g, E, null, x);
              })) : ze(F);
            }
            var A, P = gt(x);
            return P && xn(), T = oe.follow(function() {
              var F;
              (A = x.call(C, C)) && (P ? (F = Gt.bind(null, null), A.then(F, F)) : typeof A.next == "function" && typeof A.throw == "function" && (A = po(A)));
            }, T), (A && typeof A.then == "function" ? oe.resolve(A).then(function(F) {
              return C.active ? F : ze(new q.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : T.then(function() {
              return A;
            })).then(function(F) {
              return w && C._resolve(), C._completion.then(function() {
                return F;
              });
            }).catch(function(F) {
              return C._reject(F), ze(F);
            });
          });
        }).bind(null, this, f, h, l, o);
        return l ? l._promise(f, b, "lock") : fe.trans ? sn(fe.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, Je.prototype.table = function(e) {
        if (!D(this._allTables, e)) throw new q.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Je);
      function Je(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = Je.dependencies;
        this._options = n = s({ addons: Je.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var l, f, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: I, dbReadyPromise: null, cancelOpen: I, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new oe(function(g) {
          _.dbReadyResolve = g;
        }), _.openCanceller = new oe(function(g, E) {
          _.cancelOpen = E;
        }), this._state = _, this.name = e, this.on = Pn(this, "populate", "blocked", "versionchange", "close", { ready: [_e, I] }), this.once = function(g, E) {
          var w = function() {
            for (var x = [], T = 0; T < arguments.length; T++) x[T] = arguments[T];
            o.on(g).unsubscribe(w), E.apply(o, x);
          };
          return o.on(g, w);
        }, this.on.ready.subscribe = $(this.on.ready.subscribe, function(g) {
          return function(E, w) {
            Je.vip(function() {
              var x, T = o._state;
              T.openComplete ? (T.dbOpenError || oe.resolve().then(E), w && g(E)) : T.onReadyBeingFired ? (T.onReadyBeingFired.push(E), w && g(E)) : (g(E), x = o, w || g(function C() {
                x.on.ready.unsubscribe(E), x.on.ready.unsubscribe(C);
              }));
            });
          };
        }), this.Collection = (l = this, Ln(Ba.prototype, function(A, C) {
          this.db = l;
          var w = Ho, x = null;
          if (C) try {
            w = C();
          } catch (P) {
            x = P;
          }
          var T = A._ctx, C = T.table, A = C.hook.reading.fire;
          this._ctx = { table: C, index: T.index, isPrimKey: !T.index || C.schema.primKey.keyPath && T.index === C.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: x, or: T.or, valueMapper: A !== U ? A : null };
        })), this.Table = (f = this, Ln(zo.prototype, function(g, E, w) {
          this.db = f, this._tx = w, this.name = g, this.schema = E, this.hook = f._allTables[g] ? f._allTables[g].hook : Pn(null, { creating: [ye, I], reading: [ae, U], updating: [Re, I], deleting: [he, I] });
        })), this.Transaction = (h = this, Ln(Ka.prototype, function(g, E, w, x, T) {
          var C = this;
          g !== "readonly" && E.forEach(function(A) {
            A = (A = w[A]) === null || A === void 0 ? void 0 : A.yProps, A && (E = E.concat(A.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = E, this.schema = w, this.chromeTransactionDurability = x, this.idbtrans = null, this.on = Pn(this, "complete", "error", "abort"), this.parent = T || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new oe(function(A, P) {
            C._resolve = A, C._reject = P;
          }), this._completion.then(function() {
            C.active = !1, C.on.complete.fire();
          }, function(A) {
            var P = C.active;
            return C.active = !1, C.on.error.fire(A), C.parent ? C.parent._reject(A) : P && C.idbtrans && C.idbtrans.abort(), ze(A);
          });
        })), this.Version = (v = this, Ln(Ya.prototype, function(g) {
          this.db = v, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(ri.prototype, function(g, E, w) {
          if (this.db = b, this._ctx = { table: g, index: E === ":id" ? null : E, or: w }, this._cmp = this._ascending = Ie, this._descending = function(x, T) {
            return Ie(T, x);
          }, this._max = function(x, T) {
            return 0 < Ie(x, T) ? x : T;
          }, this._min = function(x, T) {
            return Ie(x, T) < 0 ? x : T;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new q.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Bn(n.IDBKeyRange), this._createTransaction = function(g, E, w, x) {
          return new o.Transaction(g, E, w, o._options.chromeTransactionDurability, x);
        }, this._fireOnBlocked = function(g) {
          o.on("blocked").fire(g), Nn.filter(function(E) {
            return E.name === o.name && E !== o && !E._state.vcFired;
          }).map(function(E) {
            return E.on("versionchange").fire(g);
          });
        }, this.use(Ja), this.use(ns), this.use(Za), this.use(Qa), this.use(za);
        var R = new Proxy(this, { get: function(g, E, w) {
          if (E === "_vip") return !0;
          if (E === "table") return function(T) {
            return br(o.table(T), R);
          };
          var x = Reflect.get(g, E, w);
          return x instanceof zo ? br(x, R) : E === "tables" ? x.map(function(T) {
            return br(T, R);
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
          var f = gt(e), h, v = !1, b = {}, _ = {}, R = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), g && Xt.storagemutated.unsubscribe(w));
          } };
          l.start && l.start(R);
          var g = !1, E = function() {
            return Gr(x);
          }, w = function(T) {
            vr(b, T), lo(_, b) && E();
          }, x = function() {
            var T, C, A;
            !v && wr.indexedDB && (b = {}, T = {}, h && h.abort(), h = new AbortController(), A = function(P) {
              var F = wn();
              try {
                f && xn();
                var B = Wt(e, P);
                return B = f ? B.finally(Gt) : B;
              } finally {
                F && _n();
              }
            }(C = { subscr: T, signal: h.signal, requery: E, querier: e, trans: null }), Promise.resolve(A).then(function(P) {
              o = !0, n = P, v || C.signal.aborted || (b = {}, function(F) {
                for (var B in F) if (D(F, B)) return;
                return 1;
              }(_ = T) || g || (Xt(Fn, w), g = !0), Gr(function() {
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
      var fn = Mt;
      function go(e) {
        var n = Qt;
        try {
          Qt = !0, Xt.storagemutated.fire(e), fo(e, !0);
        } finally {
          Qt = n;
        }
      }
      L(fn, s(s({}, tt), { delete: function(e) {
        return new fn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new fn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = fn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(l) {
              return l.name;
            }).filter(function(l) {
              return l !== or;
            });
          }) : oo(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return ze(new q.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          m(this, e);
        };
      }, ignoreTransaction: function(e) {
        return fe.trans ? sn(fe.transless, e) : e();
      }, vip: ao, async: function(e) {
        return function() {
          try {
            var n = po(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : oe.resolve(n);
          } catch (o) {
            return ze(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = po(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : oe.resolve(a);
        } catch (l) {
          return ze(l);
        }
      }, currentTransaction: { get: function() {
        return fe.trans || null;
      } }, waitFor: function(e, n) {
        return n = oe.resolve(typeof e == "function" ? fn.ignoreTransaction(e) : e).timeout(n || 6e4), fe.trans ? fe.trans.waitFor(n) : n;
      }, Promise: oe, debug: { get: function() {
        return me;
      }, set: function(e) {
        je(e);
      } }, derive: W, extend: m, props: L, override: $, Events: Pn, on: Xt, liveQuery: gi, extendObservabilitySet: vr, getByKeyPath: pe, setByKeyPath: X, delByKeyPath: function(e, n) {
        typeof n == "string" ? X(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          X(e, o, void 0);
        });
      }, shallowClone: se, deepClone: Ae, getObjectDiff: ho, cmp: Ie, asap: Oe, minKey: -1 / 0, addons: [], connections: Nn, errnames: S, dependencies: wr, cache: cn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), fn.maxKey = Bn(fn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Xt(Fn, function(e) {
        Qt || (e = new CustomEvent(zr, { detail: e }), Qt = !0, dispatchEvent(e), Qt = !1);
      }), addEventListener(zr, function(e) {
        e = e.detail, Qt || go(e);
      }));
      var On, Qt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (On = new BroadcastChannel(zr)).onmessage = function(e) {
          return e.data && go(e.data);
        };
      })(), typeof On.unref == "function" && On.unref(), Xt(Fn, function(e) {
        Qt || On.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Mt.disableBfCache && e.persisted) {
          me && console.debug("Dexie: handling persisted pagehide"), On?.close();
          for (var n = 0, o = Nn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Mt.disableBfCache && e.persisted && (me && console.debug("Dexie: handling persisted pageshow"), bi(), go({ all: new ut(-1 / 0, [[]]) }));
      })), oe.rejectionMapper = function(e, n) {
        return !e || e instanceof qt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !J[e.name] ? e : (n = new J[e.name](n || e.message, e), "stack" in e && Q(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, je(me), s(Mt, Object.freeze({ __proto__: null, Dexie: Mt, liveQuery: gi, Entity: Yo, cmp: Ie, PropModification: kn, replacePrefix: function(e, n) {
        return new kn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new kn({ add: e });
      }, remove: function(e) {
        return new kn({ remove: e });
      }, default: Mt, RangeSet: ut, mergeRanges: Kn, rangesOverlap: li }), { default: Mt }), Mt;
    });
  }(Ds)), Ds.exports;
}
var _p = wp();
const Ps = /* @__PURE__ */ hp(_p), tu = Symbol.for("Dexie"), Ls = globalThis[tu] || (globalThis[tu] = Ps);
if (Ps.semVer !== Ls.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ps.semVer} and ${Ls.semVer}`);
const {
  liveQuery: Ig,
  mergeRanges: Sg,
  rangesOverlap: Dg,
  RangeSet: Pg,
  cmp: Lg,
  Entity: kg,
  PropModification: jg,
  replacePrefix: Fg,
  add: Bg,
  remove: Mg,
  DexieYProvider: $g
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
  async function r(D) {
    const L = { ...D, id: crypto.randomUUID() };
    try {
      return await t.table(Fe).add(L), L;
    } catch (Y) {
      const Q = {
        msg: "could not add record",
        db: t.name,
        newRecord: L,
        err: Y
      };
      throw console.error(Q), new Error(JSON.stringify(Q));
    }
  }
  async function i(D) {
    try {
      if (await t.table(Fe).update(D.id, D) < 1) {
        const Y = { msg: "nothing has been updated", record: D };
        throw console.error(Y), new Error(JSON.stringify(Y));
      }
    } catch (L) {
      console.error(L);
    }
  }
  async function s(D, L) {
    const Y = D.children?.some((W) => W.id === L.id), Q = L.parent?.id === D.id;
    if (Y || (D.children.push({ id: L.id, tagName: L.tagName }), await i(D)), !Q) {
      const W = {
        id: D.id,
        tagName: D.tagName
      };
      L.parent = W, await i(L);
    }
  }
  async function c(D, L) {
    L.parent = null, await i(L), D.children && (D.children = D.children.filter((Y) => Y.id !== L.id), await i(D));
  }
  async function d(D, L) {
    if (!D.children?.length)
      return [];
    let Y = (await t.table(Fe).bulkGet(D.children.map((Q) => Q.id))).filter(Boolean);
    return L?.tagNames && L.tagNames.length > 0 && (Y = Y.filter((Q) => L?.tagNames?.includes(Q.tagName))), L?.attrs && L.attrs.length > 0 && (Y = Y.filter(
      (Q) => L.attrs.every(
        (W) => Q.attributes.some(
          (G) => G.name === W.name && G.value === W.value
        )
      )
    )), Y;
  }
  async function u(D, L) {
    return (await d(D)).filter((Q) => L.includes(Q.tagName));
  }
  async function p(D, L, Y) {
    const Q = [];
    let W = [D];
    for (let G = 0; G < L; G++) {
      const V = [];
      if (W.length === 0)
        break;
      for (const M of W) {
        const $ = await d(M);
        $.length !== 0 && (V.push(...$), Q.push(...$.filter((te) => Y.includes(te.tagName))));
      }
      W = [...V];
    }
    return Q;
  }
  async function m(D, L, Y = []) {
    const Q = [];
    let W = D;
    for (let G = 0; G < L; G++) {
      if (!W.parent)
        return Q;
      const V = await t.table(Fe).get(W.parent.id);
      if (!V)
        break;
      (Y.length == 0 || Y.length > 0 && Y.includes(V.tagName)) && Q.push(V), W = V;
    }
    return Q;
  }
  async function k(D) {
    const [L] = await O(D);
    return L;
  }
  async function O(D) {
    try {
      const L = t.table(Fe);
      let Y = D.tagNames && D.tagNames.length > 0 ? L.where("tagName").anyOf(D.tagNames) : L.toCollection();
      return D.parent && (Y = Y.filter((W) => W.parent?.id === D.parent?.id)), D.attr && (Y = Y.filter((W) => W.attributes?.some(
        (V) => V.name === D.attr.name && V.value === D.attr.value
      ))), await Y.toArray();
    } catch (L) {
      return console.error({ msg: "could not find records by options", options: D, err: L }), [];
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
}, wc = { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" };
function xp(t) {
  const r = il(t), i = Dt();
  return {
    createControlledConnection: c,
    createConnection: s,
    createSourcePlaceholder: u,
    createDestinationPlaceholder: d,
    calculateNextInputInstance: p,
    calculateNextOutputInstance: m,
    findExistingInputs: k,
    findExistingOutputs: O,
    findMatchingExtRef: D,
    implementDataflow: L,
    findExtRefByUuid: Y,
    findControlBlock: Q,
    findDataSet: W,
    findFcdasForDataSet: G,
    findPathToLnode: M,
    findPathToExtRef: V,
    findGseControlBlockDetails: $,
    findSmvControlBlockDetails: te,
    findReportControlBlockDetails: Oe,
    findLnodeFunction: pe
  };
  async function s(X, se, j, le) {
    const be = await Xi(r, j), ge = await Fp(
      r,
      se,
      be,
      X
    );
    await Bp(r, se, X), le && (await ru(
      r,
      j,
      ge
    ), await Qi(
      r,
      se,
      j,
      X.type,
      X.signal,
      X.attribute
    ), X.includeQuality && await Qi(
      r,
      se,
      j,
      X.type,
      X.signal,
      "q"
    ), X.includeTimestamp && await Qi(
      r,
      se,
      j,
      X.type,
      X.signal,
      "t"
    )), await i.refreshConnections(), await i.refreshLNode(se.id), await i.refreshPlaceholders();
  }
  async function c(X, se, j, le) {
    const be = await hs(r, se), ge = Xp(
      X,
      j
    ), Ae = await Mp(r, ge);
    if (await r.ensureRelationship(be, Ae), !j.dataObjectSpecifications?.find(
      (lt) => lt.name === X.controlledSignal
    )) {
      const we = Dt().lnodeTypes.find(
        (gt) => gt.lnClass === j.lnClass
      )?.dataObjects.find(
        (gt) => gt.name === X.controlledSignal
      );
      let Pe = await Mi(
        r,
        j,
        en.prefix
      );
      const yt = {
        name: X.controlledSignal,
        desc: we?.desc || ""
      }, He = await ks(r, yt);
      await r.ensureRelationship(Pe, He);
    }
    le && (await qp(r, se, Ae), await Qi(
      r,
      se,
      j,
      X.type,
      X.controlledSignal
    )), await i.refreshConnections(), await i.refreshLNode(j.id);
  }
  async function d(X, se, j) {
    const le = await Xi(r, se), be = await oa(
      r,
      Qp(X)
    );
    await r.ensureRelationship(le, be), j && await ru(r, se, [
      be
    ]), await i.refreshConnections();
  }
  async function u(X, se, j) {
    let le = [{ name: "inputName", value: se.inputName }];
    se.preferredLNode && le.push({ name: "pLN", value: se.preferredLNode }), se.dataflowType && le.push({ name: "service", value: se.dataflowType }), se.processResource && le.push({ name: "resourceName", value: se.processResource });
    const be = X.dataObjectSpecifications?.find(
      (He) => He.name === se.dataObject
    ), ge = be?.dataAttributeSpecifications.find(
      (He) => He.name === se.dataAttribute
    ), Ae = Dt(), lt = Ae.lnodeTypes.find((He) => He.lnClass === X.lnClass)?.dataObjects.find((He) => He.name === se.dataObject), nt = lt?.dataAttributes.find((He) => He.name === se.dataAttribute);
    let we, Pe;
    if (be)
      we = await r.db.table(Fe).get(be.id);
    else {
      const He = await Mi(
        r,
        X,
        en.prefix
      ), gt = {
        name: se.dataObject,
        desc: lt?.desc || ""
      };
      we = await ks(r, gt), await r.ensureRelationship(He, we);
    }
    if (!we) {
      const He = "DOS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(He));
    }
    if (ge)
      Pe = await r.db.table(Fe).get(ge.id);
    else {
      const He = {
        name: se.dataAttribute,
        desc: nt?.desc || ""
      };
      Pe = await Cc(
        r,
        He
      ), await r.ensureRelationship(we, Pe);
    }
    if (!Pe) {
      const He = "DAS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(He));
    }
    const yt = await r.addRecord({
      tagName: "SubscriberLNode",
      attributes: le,
      parent: null,
      namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
      value: "",
      children: []
    });
    await r.ensureRelationship(Pe, yt), j && await Up(
      r,
      X,
      se.dataObject,
      se.dataAttribute,
      se.dataflowType || void 0
    ), await Ae.refreshLNode(X.id), await Ae.refreshPlaceholders();
  }
  async function p(X, se, j) {
    const le = await Xi(r, j), Ae = (await r.findChildRecordsByTagName(le, [
      "SourceRef"
    ])).map((st) => ({
      input: K(st, "input"),
      pDA: K(st, "pDA")
    })).filter(
      (st) => st.input === X && st.pDA === se
    );
    return Ae.length === 0 ? 1 : Ae.length + 1;
  }
  async function m(X, se) {
    const j = await hs(r, se), ge = (await r.findChildRecordsByTagName(j, [
      "ControlRef"
    ])).map((Ae) => K(Ae, "output")).filter((Ae) => !!Ae).filter(
      (Ae) => Ae === X
    );
    return ge.length === 0 ? 1 : ge.length + 1;
  }
  async function k(X) {
    const se = await Xi(r, X), le = (await r.findChildRecordsByTagName(se, [
      "SourceRef"
    ])).map((ge) => K(ge, "input")).filter((ge) => !!ge);
    return Array.from(new Set(le));
  }
  async function O(X) {
    const se = await hs(r, X), le = (await r.findChildRecordsByTagName(se, [
      "ControlRef"
    ])).map((ge) => K(ge, "output")).filter((ge) => !!ge);
    return Array.from(new Set(le));
  }
  async function D(X) {
    const se = await r.db.table(Fe).get(X.id);
    Se(se, "SourceRef record not found");
    const j = K(se, "extRefUuid");
    let le;
    if (j) {
      if (le = await r.db.table(Fe).where({ tagName: "ExtRef" }).and((be) => K(be, "uuid") === j).first(), !le)
        throw new Error(`ExtRef with uuid ${j} not found`);
    } else {
      const be = await kp(r, X);
      if (!be)
        return null;
      le = be;
    }
    return ou(le);
  }
  async function L(X, se) {
    if (Se(
      X.sourceLNodeId && X.destinationLNodeId,
      "Connection must have both source and destination LNode IDs to implement"
    ), Se(X.dataflowType, "Connection must have a dataflow type to implement"), se.srcCbName)
      throw new Error("Dataflow is already implemented (srcCBName exists in ExtRef)");
    if (![et.GOOSE, et.REPORT, et.SMV].includes(X.dataflowType))
      throw new Error(
        `Dataflow type ${X.dataflowType} is not supported for automatic implementation`
      );
    const le = await r.db.table(Fe).get(X.sourceLNodeId);
    Se(le, "Sending LNode record not found");
    const be = await r.db.table(Fe).get(X.destinationLNodeId);
    Se(be, "Receiving LNode record not found");
    const ge = await ll(
      r,
      X.sourceLNodeId
    );
    Se(ge, "LDevice of sending LNode not found");
    const Ae = (await r.findChildRecords(ge, { tagNames: ["LN0"] }))[0];
    Se(Ae, "LN0 record not found for LDevice");
    const st = await Op(
      r,
      X,
      le,
      be,
      ge,
      Ae
    ), lt = await Ep(
      r,
      X.dataflowType,
      K(st, "name") || "",
      Ae
    );
    mn(
      st,
      "datSet",
      K(lt, "name") || ""
    ), await r.updateRecord(st), await Tp(
      r,
      X,
      le,
      lt
    ), await Np(
      r,
      X.dataflowType,
      ge,
      st
    ), await Pp(
      r,
      X,
      se,
      K(st, "name") || ""
    ), await Lp(
      r,
      X,
      be,
      se
    ), await i.refreshConnections();
  }
  async function Y(X) {
    const se = await r.findRecord({
      tagNames: ["ExtRef"],
      attr: { name: "uuid", value: X }
    });
    return Se(se, `ExtRef record not found for uuid: ${X}`), ou(se);
  }
  async function Q(X, se, j) {
    const le = await r.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: X }
    });
    Se(le, "IED record not found");
    const be = await r.findChildRecordsWithinDepthAndGivenTagName(le, 3, ["LDevice"]).then((st) => st.find((lt) => K(lt, "inst") === se));
    Se(be, "LDevice record not found");
    const [ge] = await r.findChildRecordsByTagName(be, ["LN0"]);
    Se(ge, "LN0 record not found for LDevice");
    const [Ae] = await r.findChildRecords(ge, {
      tagNames: ["GSEControl", "SampledValueControl", "ReportControl"],
      attrs: [{ name: "name", value: j }]
    });
    return Se(Ae, "Control Block record not found"), Gp(Ae);
  }
  async function W(X, se, j) {
    const le = await r.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: X }
    });
    Se(le, "IED record not found");
    const be = await r.findChildRecordsWithinDepthAndGivenTagName(le, 3, ["LDevice"]).then((st) => st.find((lt) => K(lt, "inst") === se));
    Se(be, "LDevice record not found");
    const [ge] = await r.findChildRecordsByTagName(be, ["LN0"]);
    Se(ge, "LN0 record not found for LDevice");
    const [Ae] = await r.findChildRecords(ge, {
      tagNames: ["DataSet"],
      attrs: [{ name: "name", value: j }]
    });
    return Se(Ae, "DataSet record not found"), Hp(Ae);
  }
  async function G(X) {
    const se = await r.db.table(Fe).get(X);
    return Se(se, "DataSet record not found"), (await r.findChildRecordsByTagName(se, ["FCDA"])).map(Yp);
  }
  async function V(X) {
    const se = await r.db.table(Fe).get(X);
    Se(se, "ExtRef record not found");
    let j = K(se, "intAddr") || "";
    const le = ["LN", "LDevice", "IED"];
    let be = se;
    for (; be.parent; ) {
      const ge = await r.db.table(Fe).get(be.parent.id);
      if (Se(ge, "Parent record not found"), le.includes(ge.tagName)) {
        let Ae = "";
        ge.tagName === "LN" ? Ae = `${K(ge, "prefix") ?? ""}${K(ge, "lnClass")}${K(ge, "inst") ?? ""}` : ge.tagName === "LDevice" ? Ae = K(ge, "inst") || "" : Ae = K(ge, "name") || "", j = `${Ae}/${j}`;
      }
      be = ge;
    }
    return j;
  }
  async function M(X) {
    const se = await r.db.table(Fe).get(X);
    Se(se, "LNode record not found");
    let le = `${K(se, "prefix") ?? ""}${K(se, "lnClass")}${K(se, "lnInst") ?? ""}`;
    const be = ["SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
    let ge = se;
    for (; ge.parent; ) {
      const Ae = await r.db.table(Fe).get(ge.parent.id);
      Se(Ae, "Parent record not found"), be.includes(Ae.tagName) && (le = `${K(Ae, "name")}/${le}`), ge = Ae;
    }
    return le;
  }
  async function $(X, se) {
    const j = await r.db.table(Fe).get(X);
    Se(j, "Control Block record not found");
    const le = await r.db.table(Fe).where({ tagName: "GSE" }).and(
      (Pe) => K(Pe, "cbName") === K(j, "name") && K(Pe, "ldInst") === se
    ).first();
    Se(le, "GSE Communication record not found for Control Block");
    const [be] = await r.findChildRecordsByTagName(le, [
      "MinTime"
    ]), [ge] = await r.findChildRecordsByTagName(le, [
      "MaxTime"
    ]), Ae = await r.findChildRecordsWithinDepthAndGivenTagName(
      le,
      2,
      ["P"]
    ), st = Ae.find(
      (Pe) => K(Pe, "type") === "VLAN-ID" || K(Pe, "type") === "tP_VLAN-ID"
    ), lt = Ae.find(
      (Pe) => K(Pe, "type") === "VLAN-PRIORITY" || K(Pe, "type") === "tP_VLAN-PRIORITY"
    ), nt = Ae.find(
      (Pe) => K(Pe, "type") === "MAC-Address" || K(Pe, "type") === "tP_MAC-Address"
    ), we = Ae.find(
      (Pe) => K(Pe, "type") === "APPID" || K(Pe, "type") === "tP_APPID"
    );
    return {
      appId: K(j, "appID") || "",
      communicationDetails: {
        macAddress: nt?.value || "",
        appId: we?.value || "",
        vlanId: st?.value || "",
        vlanPriority: lt?.value || "",
        minTime: be?.value || "",
        maxTime: ge?.value || ""
      }
    };
  }
  async function te(X, se) {
    const j = await r.db.table(Fe).get(X);
    Se(j, "Control Block record not found");
    const [le] = await r.findChildRecordsByTagName(j, [
      "SmvOpts"
    ]);
    Se(le, "SmvOpts record not found for Control Block");
    const be = await r.db.table(Fe).where({ tagName: "SMV" }).and(
      (we) => K(we, "cbName") === K(j, "name") && K(we, "ldInst") === se
    ).first();
    Se(be, "SMV Communication record not found for Control Block");
    const ge = await r.findChildRecordsWithinDepthAndGivenTagName(
      be,
      2,
      ["P"]
    ), Ae = ge.find(
      (we) => K(we, "type") === "VLAN-ID" || K(we, "type") === "tP_VLAN-ID"
    ), st = ge.find(
      (we) => K(we, "type") === "VLAN-PRIORITY" || K(we, "type") === "tP_VLAN-PRIORITY"
    ), lt = ge.find(
      (we) => K(we, "type") === "MAC-Address" || K(we, "type") === "tP_MAC-Address"
    ), nt = ge.find(
      (we) => K(we, "type") === "APPID" || K(we, "type") === "tP_APPID"
    );
    return {
      smvId: K(j, "smvID") || "",
      multicast: K(j, "multicast") || "",
      nofAsdu: K(j, "nofASDU") || "",
      smpMod: K(j, "smpMod") || "",
      smpRate: K(j, "smpRate") || "",
      communicationDetails: {
        macAddress: lt?.value || "",
        appId: nt?.value || "",
        vlanId: Ae?.value || "",
        vlanPriority: st?.value || ""
      },
      smvOpts: {
        refreshTime: K(le, "refreshTime") || "",
        sampleSynchronized: K(le, "sampleSynchronized") || "",
        sampleRate: K(le, "sampleRate") || "",
        dataSet: K(le, "dataSet") || "",
        security: K(le, "security") || "",
        synchSourceId: K(le, "synchSourceId") || ""
      }
    };
  }
  async function Oe(X) {
    const se = await r.db.table(Fe).get(X);
    Se(se, "Control Block record not found");
    const [j] = await r.findChildRecordsByTagName(se, [
      "TrgOps"
    ]);
    Se(j, "TrgOps record not found for Control Block");
    const [le] = await r.findChildRecordsByTagName(se, [
      "OptFields"
    ]);
    return Se(le, "OptFields record not found for Control Block"), {
      rptId: K(se, "rptID") || "",
      buffered: K(se, "buffered") || "",
      trgOps: {
        dchg: K(j, "dchg") || "",
        dupd: K(j, "dupd") || "",
        gi: K(j, "gi") || "",
        period: K(j, "period") || "",
        qchg: K(j, "qchg") || ""
      },
      optFields: {
        bufOvfl: K(le, "bufOvfl") || "",
        configRef: K(le, "configRef") || "",
        dataRef: K(le, "dataRef") || "",
        dataSet: K(le, "dataSet") || "",
        entryId: K(le, "entryID") || "",
        reasonCode: K(le, "reasonCode") || "",
        seqNum: K(le, "seqNum") || "",
        timeStamp: K(le, "timeStamp") || ""
      }
    };
  }
  async function pe(X) {
    const se = await r.db.table(Fe).get(X);
    Se(se, "LNode record not found"), Se(se.parent, "LNode has no parent");
    const j = await r.db.table(Fe).get(se.parent.id);
    return Se(j, "Function record not found for LNode"), K(j, "name") ?? "";
  }
}
async function Np(t, r, i, s) {
  const c = await t.db.table(Fe).where({ tagName: "Communication" }).first();
  Se(c, "Communication record not found in SCL");
  const d = await t.findChildRecordsWithinDepthAndGivenTagName(
    c,
    2,
    ["ConnectedAP"]
  ), [u] = await t.findParentRecordsWithinDepthAndGivenTagName(
    s,
    4,
    ["AccessPoint"]
  );
  Se(u, "AccessPoint record not found"), Se(u.parent, "AccessPoint has no parent");
  const p = await t.db.table(Fe).get(u.parent.id);
  Se(p, "IED record not found");
  const m = d.find(
    (O) => K(O, "iedName") === K(p, "name") && K(O, "apName") === K(u, "name")
  );
  Se(m, "ConnectedAP record for sending IED not found");
  const k = K(s, "name") || "";
  r === et.GOOSE && await Cp(
    t,
    i,
    k,
    m
  ), r === et.SMV && await Rp(
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
  const d = await t.db.table(Fe).where({ tagName: "SMV" }).toArray(), u = await t.addRecord({
    tagName: "SMV",
    attributes: [
      { name: "cbName", value: i },
      { name: "ldInst", value: K(r, "inst") || "" }
    ],
    parent: null,
    namespace: Rt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(s, u);
  const p = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: Rt.default,
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
    namespace: Rt.default,
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
    namespace: Rt.default,
    value: "7",
    children: []
  });
  await t.ensureRelationship(p, k);
  const O = [], D = [];
  for (const G of d) {
    const V = await t.findChildRecords(G, {
      tagNames: ["Address"]
    });
    Se(V[0], "Address record not found in SMV communication");
    const M = await t.findChildRecords(V[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "MAC-Address" }]
    });
    if (M[0]) {
      const te = M[0].value;
      O.push(te);
    }
    const $ = await t.findChildRecords(V[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "APPID" }]
    });
    if ($[0]) {
      const te = $[0].value;
      D.push(te);
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
    namespace: Rt.default,
    value: L,
    children: []
  });
  await t.ensureRelationship(p, Y);
  const Q = xc(16384, 32767, D), W = await t.addRecord({
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
    namespace: Rt.default,
    value: Q,
    children: []
  });
  await t.ensureRelationship(p, W);
}
async function Cp(t, r, i, s) {
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
  const d = await t.db.table(Fe).where({ tagName: "GSE" }).toArray(), u = await t.addRecord({
    tagName: "GSE",
    attributes: [
      { name: "cbName", value: i },
      { name: "ldInst", value: K(r, "inst") || "" }
    ],
    parent: null,
    namespace: Rt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(s, u);
  const p = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: Rt.default,
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
    namespace: Rt.default,
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
    namespace: Rt.default,
    value: "4",
    children: []
  });
  await t.ensureRelationship(p, k);
  const O = [], D = [];
  for (const M of d) {
    const $ = await t.findChildRecords(M, {
      tagNames: ["Address"]
    });
    Se($[0], "Address record not found in SMV communication");
    const te = await t.findChildRecords($[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "MAC-Address" }]
    });
    if (te[0]) {
      const pe = te[0].value;
      O.push(pe);
    }
    const Oe = await t.findChildRecords($[0], {
      tagNames: ["P"],
      attrs: [{ name: "type", value: "APPID" }]
    });
    if (Oe[0]) {
      const pe = Oe[0].value;
      D.push(pe);
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
    namespace: Rt.default,
    value: L,
    children: []
  });
  await t.ensureRelationship(p, Y);
  const Q = xc(1, 16383, D), W = await t.addRecord({
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
    namespace: Rt.default,
    value: Q,
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
    namespace: Rt.default,
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
    namespace: Rt.default,
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
async function Tp(t, r, i, s) {
  const p = Dt().lnodeTypes.find(
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, k), k;
}
async function Ep(t, r, i, s) {
  let c;
  if (r === et.SMV) {
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, u), u;
}
async function Op(t, r, i, s, c, d) {
  const u = (await t.findParentRecordsWithinDepthAndGivenTagName(i, 1 / 0, [
    "Function"
  ]))[0];
  Se(u, "Parent Function of sending LNode not found when implementing dataflow");
  let p;
  if (r.dataflowType === et.GOOSE && (p = await Dp(
    t,
    i,
    s,
    u,
    c,
    d
  )), r.dataflowType === et.SMV && (p = await Ip(
    t,
    i,
    s,
    c,
    d
  )), r.dataflowType === et.REPORT) {
    const k = K(i, "lnClass") === "MMXU";
    p = await Ap(
      t,
      i,
      s,
      u,
      c,
      d,
      k
    );
  }
  return Se(p, "Control Block record could not be created"), p;
}
async function Ap(t, r, i, s, c, d, u) {
  const p = (K(s, "name") + "_RPT").replace(" ", "_"), m = K(i, "iedName");
  Se(m, "iedName of receiving LNode not found");
  const k = await t.findChildRecordsByTagName(d, [
    "ReportControl"
  ]);
  for (const te of k) {
    const pe = K(te, "name")?.startsWith(p), X = (await t.findChildRecordsWithinDepthAndGivenTagName(te, 2, [
      "ClientLN"
    ]))[0];
    Se(X, "ClientLN record inside ReportControl not found");
    const se = K(X, "iedName") === m;
    if (pe && se)
      return al(t, te), te;
  }
  const D = k.filter(
    (te) => K(te, "name")?.startsWith(p) ?? !1
  ).length + 1, L = p + D, Y = sl(
    r,
    c,
    L
  ), Q = {
    tagName: "ReportControl",
    attributes: [
      { name: "name", value: L },
      { name: "confRev", value: "1" },
      { name: "rptID", value: Y }
    ],
    parent: null,
    namespace: Rt.default,
    value: "",
    children: []
  };
  u ? Q.attributes.push({ name: "buffered", value: "false" }) : (Q.attributes.push({ name: "buffered", value: "true" }), Q.attributes.push({ name: "bufTime", value: "100" }));
  const W = await t.addRecord(Q);
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
    namespace: Rt.default,
    value: "",
    children: []
  };
  u ? G.attributes.push({ name: "dupd", value: "true" }) : G.attributes.push({ name: "dupd", value: "false" });
  const V = await t.addRecord(G);
  await t.ensureRelationship(W, V);
  const M = await t.addRecord({
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(W, M);
  const $ = await t.addRecord({
    tagName: "RptEnabled",
    attributes: [{ name: "max", value: "5" }],
    parent: null,
    namespace: Rt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(W, $), await Sp(t, $, i), W;
}
async function al(t, r) {
  const i = K(r, "confRev"), s = i ? parseInt(i, 10) + 1 : 1;
  mn(r, "confRev", s.toString()), await t.updateRecord(r);
}
async function Ip(t, r, i, s, c) {
  const d = K(i, "iedName");
  Se(d, "iedName of receiving LNode not found");
  const u = await t.findChildRecordsByTagName(c, [
    "SampledValueControl"
  ]);
  for (const Y of u) {
    const Q = (await t.findChildRecordsByTagName(Y, ["IEDName"]))[0];
    if (Se(Q, "IEDName record inside SampledValueControl not found"), Q.value === d)
      return al(t, Y), Y;
  }
  const p = "MSVCB", m = u.length + 1;
  if (m > 99)
    throw new Error("Maximum number of SampledValueControl elements (99) exceeded");
  const k = p + m.toString().padStart(2, "0"), O = sl(
    r,
    s,
    k
  ), D = await t.addRecord({
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(c, D), await Nc(t, D, d);
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(D, L), D;
}
async function Nc(t, r, i) {
  const s = await t.db.table(Fe).where({ tagName: "IED" }).and((u) => K(u, "name") === i).first();
  Se(s, "IED record of receiving LNode not found");
  const c = (await t.findChildRecordsByTagName(s, ["AccessPoint"]))[0];
  Se(c, "AccessPoint record of receiving IED not found");
  const d = await t.addRecord({
    tagName: "IEDName",
    attributes: [
      {
        name: "apRef",
        value: K(c, "name") || ""
      }
    ],
    parent: null,
    namespace: Rt.default,
    value: i || "",
    children: []
  });
  await t.ensureRelationship(r, d);
}
async function Sp(t, r, i) {
  const s = K(i, "iedName"), c = await t.db.table(Fe).where({ tagName: "IED" }).and((p) => K(p, "name") === s).first();
  Se(c, "IED record of receiving LNode not found");
  const d = (await t.findChildRecordsByTagName(c, ["AccessPoint"]))[0];
  Se(d, "AccessPoint record of receiving IED not found");
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(r, u);
}
function sl(t, r, i) {
  const s = K(t, "iedName"), c = K(r, "inst");
  return `${s}${c}/LN0.${i}`;
}
async function Dp(t, r, i, s, c, d) {
  const u = (K(s, "name") + "_GSE").replace(" ", "_"), p = K(i, "iedName");
  Se(p, "iedName of receiving LNode not found");
  const m = await t.findChildRecordsByTagName(d, [
    "GSEControl"
  ]);
  for (const Q of m) {
    const G = K(Q, "name")?.startsWith(u), V = (await t.findChildRecordsByTagName(Q, ["IEDName"]))[0];
    Se(V, "IEDName record inside GSEControl not found");
    const M = V.value === p;
    if (G && M)
      return al(t, Q), Q;
  }
  const O = m.filter(
    (Q) => K(Q, "name")?.startsWith(u) ?? !1
  ).length + 1, D = u + O, L = sl(
    r,
    c,
    D
  ), Y = await t.addRecord({
    tagName: "GSEControl",
    attributes: [
      { name: "name", value: D },
      { name: "confRev", value: "1" },
      { name: "appID", value: L },
      { name: "type", value: "GOOSE" }
    ],
    parent: null,
    namespace: Rt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(d, Y), await Nc(t, Y, p), Y;
}
async function Pp(t, r, i, s) {
  Se(
    r.sourceLNodeId,
    "Source LNode ID not set for dataflow connection to implement"
  ), Se(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
  const c = await t.db.table(Fe).get(i.id);
  Se(c, "ExtRef record not found"), mn(c, "doName", r.sourceDataObject), mn(c, "daName", r.sourceDataAttribute), mn(c, "serviceType", r.dataflowType);
  const d = await t.db.table(Fe).get(r.sourceLNodeId);
  Se(d, "Sending LNode record not found"), mn(
    c,
    "iedName",
    K(d, "iedName") || ""
  ), mn(
    c,
    "ldInst",
    K(d, "ldInst") || ""
  ), mn(
    c,
    "lnClass",
    K(d, "lnClass") || ""
  ), mn(
    c,
    "lnInst",
    K(d, "lnInst") || ""
  ), mn(
    c,
    "prefix",
    K(d, "prefix") || ""
  ), mn(c, "srcCBName", s);
  const u = await ll(t, r.sourceLNodeId);
  Se(u, "LDevice for sending LNode not found");
  const p = (await t.findChildRecords(u, { tagNames: ["LN0"] }))[0];
  Se(p, "LN0 record not found"), mn(
    c,
    "srcLDInst",
    K(u, "inst") || ""
  ), mn(
    c,
    "srcLNClass",
    K(p, "lnClass") || ""
  ), await t.updateRecord(c);
}
async function Lp(t, r, i, s) {
  Se(
    r.destinationLNodeId,
    "Destination LNode ID not set for dataflow connection to implement"
  );
  const c = await t.db.table(Fe).get(r.id);
  Se(c, "SourceRef record not found");
  const d = K(i, "iedName"), u = K(i, "ldInst"), p = await Rc(t, r.destinationLNodeId);
  Se(p, "LN record for receiving LNode not found");
  const m = K(p, "prefix"), k = K(p, "lnClass"), O = K(p, "inst");
  if (s.intAddr) {
    const D = `${d}${u}/${m}${k}${O}.${s.intAddr}`;
    mn(c, "extRefAddr", D);
  }
  mn(c, "extRefUuid", s.uuid), await t.updateRecord(c);
}
function mn(t, r, i) {
  const s = t.attributes.find((c) => c.name === r);
  s ? s.value = i : t.attributes.push({ name: r, value: i });
}
async function ll(t, r) {
  const i = await t.db.table(Fe).get(r), s = await t.db.table(Fe).where({ tagName: "IED" }).and(
    (u) => K(u, "name") === K(i, "iedName")
  ).first();
  Se(s, "IED record not found for receiving LNode");
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(
    s,
    3,
    ["LDevice"]
  )).find((u) => K(u, "inst") === K(i, "ldInst"));
  return Se(d, "LDevice record not found for receiving LNode"), d;
}
async function Rc(t, r) {
  const i = await t.db.table(Fe).get(r), s = await ll(t, r);
  if (!s)
    return;
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(s, 1, [
    "LN"
  ])).find((u) => K(u, "inst") === K(i, "lnInst") && K(u, "lnClass") === K(i, "lnClass") && K(u, "prefix") === K(i, "prefix"));
  return Se(d, "LN record not found for receiving LNode"), d;
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
    Se(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
    const m = K(u, "pServT"), k = m === void 0 || m === r.dataflowType, O = K(u, "srcCBName");
    return p && k && !(O !== void 0 && O !== "");
  }), d = [];
  for (const u of c) {
    if (!K(u, "uuid")) {
      d.push(u);
      continue;
    }
    await t.db.table(Fe).where({ tagName: "SourceRef" }).and(
      (m) => (!!K(m, "extRefUuid") && K(m, "extRefUuid")) === K(u, "uuid")
    ).first() || d.push(u);
  }
  return d[0];
}
function jp(t) {
  return t.preferredLNode.trim() !== "" && t.preferredDataObject.trim() !== "" && t.preferredDataAttribute.trim() !== "";
}
async function Xi(t, r) {
  const i = await Mi(
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
  const c = {
    msg: `More than one LNodeInputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(c));
}
async function hs(t, r) {
  const i = await Mi(
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
async function Mi(t, r, i) {
  const s = await t.db.table(Fe).where({ "parent.id": r.id, tagName: "Private" }).and((u) => K(u, "type") === i).first();
  if (s)
    return s;
  const c = await t.db.table(Fe).get(r.id);
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
    namespace: Rt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(c, d), d;
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
async function Bp(t, r, i) {
  const s = r.dataObjectSpecifications?.find(
    (O) => O.name === i.signal
  ), c = s?.dataAttributeSpecifications.find(
    (O) => O.name === i.attribute
  ), u = Dt().lnodeTypes.find((O) => O.lnClass === r.lnClass), p = u?.dataObjects.find((O) => O.name === i.signal), m = p?.dataAttributes.find((O) => O.name === i.attribute);
  if (!u || !p || !m) {
    const O = `LNodeType, DO type or DA type not found for LNode class ${r.lnClass}, DO ${i.signal}, DA ${i.attribute}`;
    throw console.error(O), new Error(O);
  }
  let k;
  if (!s) {
    const O = await Mi(
      t,
      r,
      en.prefix
    ), D = {
      name: i.signal,
      desc: p.desc
    };
    k = await ks(t, D), await t.ensureRelationship(O, k);
  }
  if (!k && (k = await t.db.table(Fe).get(s.id), !k))
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
  const d = await Cc(
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
  const c = await t.table(Fe).where({ tagName: "LNode" }).and((O) => K(O, "uuid") === r).first();
  if (!c) return "";
  const d = [];
  let u = c;
  const p = ["LNode", "SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
  for (; u && u.parent; ) {
    if (p.includes(u.tagName)) {
      const O = K(u, "name");
      O && d.unshift(O);
    }
    u = await t.table(Fe).get(u.parent.id);
  }
  const m = (() => {
    const O = c.attributes?.find((Y) => Y.name === "prefix")?.value || "", D = c.attributes?.find((Y) => Y.name === "lnClass")?.value || "", L = c.attributes?.find((Y) => Y.name === "lnInst")?.value || "";
    return `${O}${D}${L}`;
  })();
  d.push(m);
  let k = d.join("/");
  return i && (k += `.${i}`, s && (k += "." + s)), k;
}
async function $p(t, r, i) {
  const s = await Eo(t, r), c = K(i, "input"), d = K(i, "inputInst"), u = K(i, "pDA");
  let p = `${s}.${c}`;
  return d && (p += `(${d})`), u && (p += `.${u}`), p;
}
async function Kp(t, r, i) {
  const s = await Eo(t, r), c = K(i, "output"), d = K(i, "outputInst");
  let u = `${s}.${c}`;
  return d && (u += `(${d})`), u;
}
async function $i(t, r) {
  const i = await t.db.table(Fe).get(r);
  if (!i || !i?.parent)
    return [];
  const s = await t.db.table(Fe).get(i.parent.id);
  return s?.tagName === "Function" || s?.tagName === "SubFunction" ? await t.db.table(Fe).where({ tagName: "FunctionRef" }).and(
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
  const s = await $i(t, r.id);
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
      namespace: en,
      value: "",
      children: []
    }), await t.ensureRelationship(d, u));
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
      await t.ensureRelationship(u, m);
    }
  }
}
async function qp(t, r, i) {
  const s = await $i(t, r.id);
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
      namespace: en,
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
      namespace: en,
      value: "",
      children: []
    });
    await t.ensureRelationship(u, p);
  }
}
async function Up(t, r, i, s, c) {
  const d = await $i(t, r.id);
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
    ), c === et.REPORT && await jr(
      t,
      m,
      "Signalisation",
      p,
      r.uuid,
      i,
      s
    );
}
async function Qi(t, r, i, s, c, d) {
  const u = await $i(
    t,
    r.id
  ), p = await nu(
    t,
    u
  ), m = await $i(
    t,
    i.id
  ), k = await nu(
    t,
    m
  );
  let O = "", D, L;
  if (s === et.CONTROL ? (O = await Eo(t.db, i.uuid, c), D = i, L = m.filter(
    ($) => Array.from(k.keys()).includes($.id)
  )) : (O = await Eo(t.db, r.uuid, c, d), D = r, L = u.filter(
    ($) => Array.from(p.keys()).includes($.id)
  )), L.length === 0)
    return;
  for (const $ of L)
    s === et.REPORT && await jr(
      t,
      $,
      "Signalisation",
      O,
      D.uuid,
      c,
      d
    ), s === et.CONTROL && await jr(
      t,
      $,
      "Control",
      O,
      D.uuid,
      c
    );
  const W = Dt().lnodeTypes.find(($) => $.lnClass === D.lnClass)?.dataObjects.find(($) => $.name === c);
  if (W) {
    const $ = await t.db.table(Fe).where({ tagName: "DOType" }).and((Oe) => K(Oe, "id") === W.type).first(), te = K($, "cdc");
    if (te === "DPL" || te === "LPL" || te === "VSD")
      for (const Oe of L)
        await jr(
          t,
          Oe,
          "Information",
          O,
          D.uuid,
          c,
          d
        );
    else {
      const Oe = D.dataObjectSpecifications?.find((X) => X.name === c)?.dataAttributeSpecifications.find((X) => X.name === d);
      if (await t.db.table(Fe).where({ tagName: "Val", "parent.id": Oe?.id }).first())
        for (const X of L)
          await jr(
            t,
            X,
            "Setting",
            O,
            D.uuid,
            c,
            d
          );
    }
  }
  let G = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set();
  function M($, te) {
    const Oe = $.find((pe) => pe.id === te);
    if (!Oe)
      throw new Error(`FunctionRef with id ${te} not found`);
    return Oe;
  }
  if (p.size === 0)
    V = new Set(
      m.filter(
        ($) => Array.from(k.keys()).includes($.id)
      )
    );
  else if (k.size === 0)
    V = new Set(
      u.filter(
        ($) => Array.from(p.keys()).includes($.id)
      )
    );
  else
    for (const [
      $,
      te
    ] of p)
      for (const [
        Oe,
        pe
      ] of k) {
        const X = M(
          u,
          $
        ), se = M(
          m,
          Oe
        );
        te === pe ? (G.add(X), G.add(se)) : (V.add(X), V.add(se));
      }
  for (const $ of L)
    V.has($) && await jr(
      t,
      $,
      "Process",
      O,
      D.uuid,
      c,
      d
    ), G.has($) && await jr(
      t,
      $,
      "Internal",
      O,
      D.uuid,
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
    namespace: en,
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
      namespace: en,
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
function Yp(t) {
  return {
    id: t.id,
    doName: K(t, "doName") || "",
    daName: K(t, "daName") || "",
    fc: K(t, "fc") || ""
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
function Xp(t, r) {
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
function Qp(t) {
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
async function Cc(t, r) {
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
    const p = await u();
    return p.length ? await d(p) : [];
  }
  async function i() {
    const p = await t.table(Fe).where({ tagName: "LNodeType" }).toArray(), m = [];
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
      const O = await t.table(Fe).get(k.id);
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
    const k = (await t.table(Fe).where({ tagName: "DOType" }).toArray()).find((D) => D.attributes?.find((L) => L.name === "id" && L.value === m));
    if (!k || !k.children) return [];
    const O = [];
    for (const D of k.children) {
      if (D.tagName !== "DA") continue;
      const L = await t.table(Fe).get(D.id);
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
    const m = await t.table(Fe).where({ tagName: "Private" }).toArray(), k = await t.table(Fe).where({ tagName: "DOS" }).toArray(), O = await t.table(Fe).where({ tagName: "DAS" }).toArray(), D = await t.table(Fe).where({ tagName: "SubscriberLNode" }).toArray();
    return Promise.all(
      p.map(async (L) => {
        const Y = m.find(
          (W) => W.parent?.id === L.id && W.parent?.tagName === "LNode" && K(W, "type") === "eIEC61850-6-100"
        );
        if (!Y || !Y.children)
          return { ...L, dataObjectSpecifications: [] };
        const Q = [];
        for (const W of Y.children) {
          if (W.tagName !== "DOS") continue;
          const G = k.find((M) => M.id === W.id);
          if (!G) continue;
          const V = [];
          if (G.children)
            for (const M of G.children) {
              if (M.tagName !== "DAS") continue;
              const $ = O.find((Oe) => Oe.id === M.id);
              if (!$) continue;
              let te = [];
              if ($.children) {
                const Oe = $.children.filter((X) => X.tagName === "SubscriberLNode"), pe = D.filter(
                  (X) => Oe.some((se) => se.id === X.id)
                );
                for (const X of pe)
                  te.push({
                    id: X.id,
                    inputName: K(X, "inputName") ?? "",
                    service: cl(X, "service"),
                    pLN: K(X, "pLN") ?? "",
                    resourceName: K(X, "resourceName") ?? ""
                  });
              }
              V.push({
                id: $.id,
                name: K($, "name") ?? "",
                desc: K($, "desc") ?? "",
                subscriberLNodes: te
              });
            }
          Q.push({
            id: G.id,
            name: K(G, "name") ?? "",
            desc: K(G, "desc") ?? "",
            dataAttributeSpecifications: V
          });
        }
        return { ...L, dataObjectSpecifications: Q };
      })
    );
  }
  async function u() {
    return (await t.table(Fe).where({ tagName: "LNode" }).toArray()).map((m) => ({
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
      return et.GOOSE;
    case "SMV":
      return et.SMV;
    case "REPORT":
      return et.REPORT;
    case "WIRED":
      return et.WIRED;
    case "CONTROL":
      return et.CONTROL;
    case "INTERNAL":
      return et.INTERNAL;
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
    const c = await t.table(Fe).where({ tagName: "SourceRef" }).toArray();
    if (!c.length) return [];
    const d = [];
    for (const u of c) {
      if (!u.attributes) continue;
      const p = K(u, "sourceLNodeUuid"), m = await t.table(Fe).where({ tagName: "LNode" }).toArray().then(
        ($) => $.find(
          (te) => te.attributes?.some(
            (Oe) => Oe.name === "uuid" && Oe.value === p
          )
        )
      ), k = await r.findParentRecordsWithinDepthAndGivenTagName(
        u,
        3,
        ["LNode"]
      );
      if (k.length != 1) {
        const $ = {
          msg: "Destination LNode record not found for SourceRef id",
          id: u.id
        };
        throw console.error($), new Error(JSON.stringify($));
      }
      const O = await t.table(Fe).where({ tagName: "IED" }).toArray();
      let D = !1;
      const L = K(m, "iedName");
      if (L) {
        const $ = O.find(
          (te) => K(te, "name") === L
        );
        Se($, `IED record not found for iedName: ${L}`), D = K($, "manufacturer") !== "S_IED";
      }
      let Y = !1;
      const Q = K(k[0], "iedName");
      if (Q) {
        const $ = O.find(
          (te) => K(te, "name") === Q
        );
        Se(
          $,
          `IED record not found for iedName: ${Q}`
        ), Y = K($, "manufacturer") !== "S_IED";
      }
      const W = !D || !Y;
      let G = !1;
      const V = K(u, "extRefUuid");
      if (V) {
        const $ = await r.findRecord({
          tagNames: ["ExtRef"],
          attr: { name: "uuid", value: V }
        });
        Se($, `ExtRef record not found for uuid: ${V}`), G = !!K($, "srcCBName");
      }
      const M = Jp(
        u,
        m?.id ?? null,
        k[0].id,
        G,
        W,
        V
      );
      d.push(M);
    }
    return d;
  }
  async function s() {
    const c = await t.table(Fe).where({ tagName: "ControlRef" }).toArray();
    if (!c.length) return [];
    const d = [];
    for (const u of c) {
      if (!u.attributes) continue;
      const p = K(u, "controlledLNodeUuid"), m = K(u, "controlledDoName"), k = await t.table(Fe).where({ tagName: "LNode" }).toArray().then(
        (L) => L.find(
          (Y) => Y.attributes?.some(
            (Q) => Q.name === "uuid" && Q.value === p
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
      const D = {
        controllerLNodeId: O[0].id,
        controlledLNodeId: k,
        controlledDataObject: m || "",
        dataflowType: et.CONTROL,
        outputInstance: K(u, "outputInst") || "",
        outputName: K(u, "output") || "",
        id: u.id
      };
      d.push(D);
    }
    return d;
  }
}
function Jp(t, r, i, s, c, d) {
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
function Zp(t) {
  const r = il(t), i = Tc(t);
  return {
    findAllSourcePlaceholders: s
  };
  async function s() {
    let p = [];
    const m = await i.findAllEnrichedLNodes();
    if (!m.length) return p;
    for (const O of m) {
      const D = O.dataObjectSpecifications ?? [];
      for (const L of D) {
        const Y = L.dataAttributeSpecifications ?? [];
        for (const Q of Y) {
          const W = Q.subscriberLNodes ?? [];
          for (const G of W)
            p.push({
              lNodeId: O.id,
              id: G.id,
              dataObject: L.name,
              dataAttribute: Q.name,
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
    const m = (await t.table(Fe).where({ tagName: "SourceRef" }).toArray()).map(async (O) => ({
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
    const k = await r.db.table(Fe).get(p);
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
      const D = m.some((L) => !(O.preferredLNode && O.preferredLNode !== L.lnClassOfParentLNode || O.dataflowType && O.dataflowType !== L.dataflowType || O.dataObject && O.dataObject !== L.sourceDoName || O.dataAttribute && O.dataAttribute !== L.sourceDaName));
      k.push({
        ...O,
        isFulfilled: D
      });
    }
    return k;
  }
}
const Dt = /* @__PURE__ */ ol("dataflow/app", () => {
  let t = null;
  const r = $e(""), i = $e([]), s = $e([]), c = $e([]), d = $e([]), u = $e([]), p = An(), m = An(), k = An(), O = An();
  async function D(G) {
    L(), t = new ha(G), await t.open(), k.value = Tc(t), m.value = zp(t), O.value = Zp(t), r.value = G, p.value = xp(t), i.value = await k.value.findAllEnrichedLNodes(), s.value = await k.value.findAllLNodeTypes(), c.value = await m.value.findAllExistingConnections(), d.value = await m.value.findAllExistingControlledConnections(), u.value = await O.value.findAllSourcePlaceholders();
  }
  function L() {
    t && (t.close(), t = null);
  }
  async function Y() {
    c.value = await m.value.findAllExistingConnections(), d.value = await m.value.findAllExistingControlledConnections();
  }
  async function Q(G) {
    const M = (await k.value.findAllEnrichedLNodes()).find(($) => $.id === G);
    if (M) {
      const $ = i.value.findIndex((te) => te.id === G);
      $ !== -1 && (i.value[$] = M);
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
    initApp: D,
    closeDatabase: L,
    refreshConnections: Y,
    refreshLNode: Q,
    refreshPlaceholders: W
  };
}), eh = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, th = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, nh = { class: "mt-4" }, rh = { key: 0 }, oh = { key: 1 }, ih = { class: "mt-4" }, ah = /* @__PURE__ */ At({
  __name: "connection-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = Dt(), { lnodes: s } = Ft(i), c = Ye(() => s.value.find((p) => p.id === r.connection.sourceLNodeId)?.dataObjectSpecifications?.find(
      (p) => p.name === r.connection.sourceDataObject
    )), d = Ye(() => c?.value?.dataAttributeSpecifications?.find(
      (u) => u.name === r.connection.sourceDataAttribute
    ));
    return (u, p) => (ce(), ve(Ke, null, [
      p[10] || (p[10] = y("h2", { class: "text-lg font-bold mb-2" }, "Specified Dataflow", -1)),
      u.connection.dataflowType ? (ce(), ve("span", eh, ue(u.connection.dataflowType), 1)) : Ge("", !0),
      y("dl", th, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, ue(u.connection.input), 1)
        ]),
        y("div", null, [
          p[1] || (p[1] = y("dt", null, "Input Instance:", -1)),
          y("dd", null, ue(u.connection.inputInstance || "-"), 1)
        ]),
        y("div", nh, [
          p[2] || (p[2] = y("dt", null, "DO:", -1)),
          y("dd", null, ue(u.connection.sourceDataObject || "-"), 1)
        ]),
        c.value?.desc ? (ce(), ve("div", rh, [
          p[3] || (p[3] = y("dt", null, "DO Desc:", -1)),
          y("dd", null, ue(c.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[4] || (p[4] = y("dt", null, "DA:", -1)),
          y("dd", null, ue(u.connection.sourceDataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (ce(), ve("div", oh, [
          p[5] || (p[5] = y("dt", null, "DA Desc:", -1)),
          y("dd", null, ue(d.value.desc), 1)
        ])) : Ge("", !0),
        y("div", ih, [
          p[6] || (p[6] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, ue(u.connection.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[7] || (p[7] = y("dt", null, "Preferred DO:", -1)),
          y("dd", null, ue(u.connection.preferredDataObject || "-"), 1)
        ]),
        y("div", null, [
          p[8] || (p[8] = y("dt", null, "Preferred DA:", -1)),
          y("dd", null, ue(u.connection.preferredDataAttribute || "-"), 1)
        ]),
        y("div", null, [
          p[9] || (p[9] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, ue(u.connection.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), sh = { key: 0 }, lh = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, uh = { class: "flex flex-col gap-4" }, ch = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, fh = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, dh = /* @__PURE__ */ At({
  __name: "implemented-dataflow-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = Dt(), { dataflowSdk: s } = Ft(i), c = $e(null), d = $e(null), u = $e(null), p = $e("");
    Ta(async () => {
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
    return (D, L) => (ce(), ve(Ke, null, [
      L[9] || (L[9] = y("h2", { class: "text-lg font-bold mb-2" }, "Implemented Dataflow", -1)),
      D.connection.isImplemented ? Ge("", !0) : (ce(), ve("p", sh, "Not implemented yet")),
      c.value ? (ce(), ve(Ke, { key: 1 }, [
        D.connection.dataflowType ? (ce(), ve("span", lh, ue(c.value.serviceType), 1)) : Ge("", !0),
        y("div", uh, [
          y("dl", ch, [
            y("div", null, [
              L[0] || (L[0] = y("dt", null, "DO:", -1)),
              y("dd", null, ue(c.value.doName), 1)
            ]),
            y("div", null, [
              L[1] || (L[1] = y("dt", null, "DA:", -1)),
              y("dd", null, ue(c.value.daName), 1)
            ])
          ]),
          y("div", null, [
            L[2] || (L[2] = y("h3", { class: "font-semibold" }, "Sending IED/LD/LN", -1)),
            y("div", null, ue(m.value), 1)
          ]),
          y("div", null, [
            L[3] || (L[3] = y("h3", { class: "font-semibold" }, "Receiving IED/LD/LN", -1)),
            y("div", null, ue(k.value), 1)
          ]),
          y("div", null, [
            L[8] || (L[8] = y("h3", { class: "font-semibold" }, "Control Block and Data Set", -1)),
            y("dl", fh, [
              y("div", null, [
                L[4] || (L[4] = y("dt", null, "Location:", -1)),
                y("dd", null, ue(O.value), 1)
              ]),
              y("div", null, [
                L[5] || (L[5] = y("dt", null, "Control Block:", -1)),
                y("dd", null, ue(d.value?.name), 1)
              ]),
              y("div", null, [
                L[6] || (L[6] = y("dt", null, "ConfRev:", -1)),
                y("dd", null, ue(d.value?.confRev), 1)
              ]),
              y("div", null, [
                L[7] || (L[7] = y("dt", null, "DataSet:", -1)),
                y("dd", null, ue(u.value?.name), 1)
              ])
            ])
          ])
        ])
      ], 64)) : Ge("", !0)
    ], 64));
  }
}), ph = { class: "grid grid-cols-2 gap-4 mt-4" }, hh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, mh = ["value"], vh = { class: "grid grid-cols-2 gap-4 mt-4" }, yh = ["value", "title"], gh = { class: "grid grid-cols-2 gap-4 mt-4" }, bh = ["value", "title"], wh = { class: "grid grid-cols-2 gap-4 mt-4" }, _h = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, xh = ["value"], Nh = { class: "grid grid-cols-2 gap-4 mt-4" }, Rh = { class: "flex items-center" }, Ch = { class: "flex items-center" }, Th = ["value"], Eh = { class: "grid grid-cols-2 gap-4 mt-4" }, Oh = { class: "mt-4" }, Ah = { class: "mt-4" }, Ih = { class: "mt-4 flex items-center" }, Sh = /* @__PURE__ */ At({
  __name: "dataflow-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, i = zn(), s = Dt(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(L()), p = $e(!1), m = $e([]), k = $e(!0);
    Ko(async () => {
      m.value = await d.value.findExistingInputs(r.destinationLNode);
    }), Ut(p, (V) => {
      V ? u.value.inputName = "" : u.value.inputName = u.value.signal;
    }), Ut(
      [
        () => u.value.inputName,
        () => u.value.attribute
      ],
      async ([V, M]) => {
        const $ = await d.value.calculateNextInputInstance(
          V,
          M,
          r.destinationLNode
        );
        u.value.inputInstance = $.toString();
      }
    ), Ut(
      () => u.value.signal,
      (V, M) => {
        const $ = u.value.inputName !== M && u.value.inputName !== "";
        !p.value && !$ && (u.value.inputName = V);
      }
    ), Ta(() => {
      switch (G(), u.value.type = r.dataflowType, r.dataflowType) {
        case et.GOOSE:
        case et.SMV:
          u.value.includeQuality = !0, u.value.includeTimestamp = !1;
          break;
        case et.REPORT:
          u.value.includeQuality = !0, u.value.includeTimestamp = !0;
          break;
        default:
          u.value.includeQuality = !1, u.value.includeTimestamp = !1;
      }
    });
    const O = Ye(() => !r.dataflowType || !r.sourceLNode ? [] : c.value.find((V) => V.typeId === r.sourceLNode.lnType)?.dataObjects.filter(
      (V) => V.dataAttributes.some(
        (M) => Mo[r.dataflowType]?.includes(M.fc)
      )
    ).sort((V, M) => V.name.localeCompare(M.name)) ?? []), D = Ye(() => !r.dataflowType || !r.sourceLNode ? [] : c.value.find((V) => V.typeId === r.sourceLNode.lnType)?.dataObjects.find((V) => V.name === u.value.signal)?.dataAttributes.filter(
      (V) => Mo[r.dataflowType].includes(V.fc)
    ).filter((V) => !Fi.includes(V.name)).sort((V, M) => V.name.localeCompare(M.name)) ?? []);
    Ut(
      [() => O.value, () => r.sourcePlaceholder],
      ([V, M]) => {
        if (M && V.length > 0) {
          const $ = V.find((te) => te.name === M.dataObject);
          u.value.signal = $ ? $.name : "";
        }
      },
      { immediate: !0 }
    ), Ut(
      [
        () => D.value,
        () => r.sourcePlaceholder,
        () => u.value.signal
      ],
      ([V, M, $]) => {
        if (M && V.length > 0) {
          const te = V.find((Oe) => Oe.name === M.dataAttribute);
          te && $ === M.dataObject && (u.value.attribute = te.name);
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
      ([V, M, $, te]) => {
        te && te.input && V !== "" && M !== "" && $ === !1 && (u.value.inputName = te.input);
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
      for (const M of V)
        u.value[M] = "";
    }
    async function Q() {
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
    return (V, M) => (ce(), ve(Ke, null, [
      M[27] || (M[27] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("form", {
        method: "dialog",
        onSubmit: Q
      }, [
        y("div", ph, [
          M[11] || (M[11] = y("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          y("select", hh, [
            y("option", {
              value: r.sourceLNode.id
            }, ue(Le(Bi)(V.sourceLNode)), 9, mh)
          ])
        ]),
        y("div", vh, [
          M[13] || (M[13] = y("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          rt(y("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[0] || (M[0] = ($) => u.value.signal = $),
            onChange: M[1] || (M[1] = ($) => Y(["attribute"]))
          }, [
            M[12] || (M[12] = y("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (ce(!0), ve(Ke, null, Et(O.value, ($) => (ce(), ve("option", {
              key: $.name,
              value: $.name,
              title: $.desc ? `Desc: ${$.desc}` : ""
            }, ue($.desc ? $.name + " ⓘ" : $.name), 9, yh))), 128))
          ], 544), [
            [yn, u.value.signal]
          ])
        ]),
        y("div", gh, [
          M[15] || (M[15] = y("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          rt(y("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[2] || (M[2] = ($) => u.value.attribute = $)
          }, [
            M[14] || (M[14] = y("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (ce(!0), ve(Ke, null, Et(D.value, ($) => (ce(), ve("option", {
              key: $.name,
              value: $.name,
              title: $.desc ? `Desc: ${$.desc}` : ""
            }, ue($.desc ? $.name + " ⓘ" : $.name), 9, bh))), 128))
          ], 512), [
            [yn, u.value.attribute]
          ])
        ]),
        M[24] || (M[24] = y("hr", { class: "solid mt-4" }, null, -1)),
        y("div", wh, [
          M[16] || (M[16] = y("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          y("select", _h, [
            y("option", {
              value: r.destinationLNode.id
            }, ue(Le(Bi)(V.destinationLNode)), 9, xh)
          ])
        ]),
        y("div", Nh, [
          y("fieldset", null, [
            M[19] || (M[19] = y("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
            y("div", Rh, [
              rt(y("input", {
                type: "radio",
                id: "dataflow-new-input",
                name: "input",
                "onUpdate:modelValue": M[3] || (M[3] = ($) => p.value = $),
                value: !1,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [$r, p.value]
              ]),
              M[17] || (M[17] = y("label", { for: "dataflow-new-input" }, "New Input", -1))
            ]),
            y("div", Ch, [
              rt(y("input", {
                type: "radio",
                id: "dataflow-existing-input",
                name: "input",
                "onUpdate:modelValue": M[4] || (M[4] = ($) => p.value = $),
                value: !0,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [$r, p.value]
              ]),
              M[18] || (M[18] = y("label", { for: "dataflow-existing-input" }, "Existing Input", -1))
            ])
          ]),
          p.value ? Ge("", !0) : rt((ce(), ve("input", {
            key: 0,
            "aria-label": "New Input Name",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": M[5] || (M[5] = ($) => u.value.inputName = $)
          }, null, 512)), [
            [Or, u.value.inputName]
          ]),
          p.value ? rt((ce(), ve("select", {
            key: 1,
            "aria-label": "Existing Input Name Select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": M[6] || (M[6] = ($) => u.value.inputName = $)
          }, [
            (ce(!0), ve(Ke, null, Et(m.value, ($) => (ce(), ve("option", {
              key: $,
              value: $
            }, ue($), 9, Th))), 128))
          ], 512)), [
            [yn, u.value.inputName]
          ]) : Ge("", !0)
        ]),
        y("div", Eh, [
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
            "onUpdate:modelValue": M[7] || (M[7] = ($) => u.value.inputInstance = $)
          }, null, 512), [
            [Or, u.value.inputInstance]
          ])
        ]),
        M[25] || (M[25] = y("hr", { class: "solid mt-4" }, null, -1)),
        y("div", Oh, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[8] || (M[8] = ($) => u.value.includeQuality = $),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [Co, u.value.includeQuality]
          ]),
          M[21] || (M[21] = y("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        y("div", Ah, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[9] || (M[9] = ($) => u.value.includeTimestamp = $),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [Co, u.value.includeTimestamp]
          ]),
          M[22] || (M[22] = y("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        y("div", Ih, [
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": M[10] || (M[10] = ($) => k.value = $),
            class: "checkbox mr-2",
            id: "dataflow-checkbox-add-references"
          }, null, 512), [
            [Co, k.value]
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
}), Dh = { class: "grid grid-cols-2 gap-4 mt-4" }, Ph = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Lh = ["value"], kh = { class: "grid grid-cols-2 gap-4 mt-4" }, jh = ["value", "title"], Fh = { class: "grid grid-cols-2 gap-4 mt-4" }, Bh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Mh = ["value"], $h = { class: "grid grid-cols-2 gap-4 mt-4" }, Kh = { class: "flex items-center" }, qh = { class: "flex items-center" }, Uh = ["value"], Vh = { class: "grid grid-cols-2 gap-4 mt-4" }, Wh = { class: "mt-4 flex items-center" }, Gh = /* @__PURE__ */ At({
  __name: "dataflow-controlled-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {}
  },
  setup(t) {
    const r = t, i = zn(), s = Dt(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(
      D()
    ), p = $e(!1), m = $e([]), k = $e(!0);
    Ko(async () => {
      m.value = await d.value.findExistingOutputs(r.sourceLNode);
    }), Ut(p, (Q) => {
      Q ? u.value.outputName = "" : u.value.outputName = u.value.controlledSignal;
    }), Ut(
      () => u.value.outputName,
      async (Q) => {
        const W = await d.value.calculateNextOutputInstance(
          Q,
          r.sourceLNode
        );
        u.value.outputInstance = W.toString();
      }
    ), Ut(
      () => u.value.controlledSignal,
      (Q, W) => {
        const G = u.value.outputName !== W && u.value.outputName !== "";
        !p.value && !G && (u.value.outputName = Q);
      }
    );
    const O = Ye(() => r.destinationLNode ? c.value.find((W) => W.typeId === r.destinationLNode.lnType)?.dataObjects.map((W) => ({
      name: W.name,
      desc: W.desc
    })).sort((W, G) => W.name.localeCompare(G.name)) ?? [] : []);
    function D() {
      return {
        type: et.CONTROL,
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
      } catch (Q) {
        console.error("Error creating controlled dataflow:", Q), alert(`Error creating controlled dataflow: ${Q instanceof Error ? Q.message : "Unknown error"}`);
      }
    }
    function Y(Q) {
      return Q.type ? Q.outputName ? Q.controlledSignal ? !0 : (alert("Please select a controlled signal (DO)."), !1) : (alert("Please select an controller output name."), !1) : (alert("Please select a dataflow type."), !1);
    }
    return (Q, W) => (ce(), ve(Ke, null, [
      W[16] || (W[16] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", Dh, [
        W[7] || (W[7] = y("label", {
          for: "destination-select",
          class: "col-start-1 self-center"
        }, "Controlled", -1)),
        y("select", Ph, [
          y("option", {
            value: r.destinationLNode.id
          }, ue(Le(Bi)(Q.destinationLNode)), 9, Lh)
        ])
      ]),
      y("div", kh, [
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
          (ce(!0), ve(Ke, null, Et(O.value, (G) => (ce(), ve("option", {
            key: G.name,
            value: G.name,
            title: G.desc ? `Desc: ${G.desc}` : ""
          }, ue(G.desc ? G.name + " ⓘ" : G.name), 9, jh))), 128))
        ], 512), [
          [yn, u.value.controlledSignal]
        ])
      ]),
      W[17] || (W[17] = y("hr", { class: "solid mt-4" }, null, -1)),
      y("div", Fh, [
        W[10] || (W[10] = y("label", {
          for: "source-select",
          class: "col-start-1 self-center"
        }, "Controller", -1)),
        y("select", Bh, [
          y("option", {
            value: r.sourceLNode.id
          }, ue(Le(Bi)(Q.sourceLNode)), 9, Mh)
        ])
      ]),
      y("div", $h, [
        y("fieldset", null, [
          W[13] || (W[13] = y("legend", { class: "col-start-1 self-start" }, "Controller Output Name", -1)),
          y("div", Kh, [
            rt(y("input", {
              type: "radio",
              id: "dataflow-control-new-output",
              name: "output",
              "onUpdate:modelValue": W[1] || (W[1] = (G) => p.value = G),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, p.value]
            ]),
            W[11] || (W[11] = y("label", { for: "dataflow-control-new-output" }, "New Output", -1))
          ]),
          y("div", qh, [
            rt(y("input", {
              type: "radio",
              id: "dataflow-control-existing-output",
              name: "output",
              "onUpdate:modelValue": W[2] || (W[2] = (G) => p.value = G),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, p.value]
            ]),
            W[12] || (W[12] = y("label", { for: "dataflow-control-existing-output" }, "Existing Output", -1))
          ])
        ]),
        p.value ? Ge("", !0) : rt((ce(), ve("input", {
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
        p.value ? rt((ce(), ve("select", {
          key: 1,
          "aria-label": "Existing Output Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": W[4] || (W[4] = (G) => u.value.outputName = G)
        }, [
          (ce(!0), ve(Ke, null, Et(m.value, (G) => (ce(), ve("option", {
            key: G,
            value: G
          }, ue(G), 9, Uh))), 128))
        ], 512)), [
          [yn, u.value.outputName]
        ]) : Ge("", !0)
      ]),
      y("div", Vh, [
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
      y("div", Wh, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": W[6] || (W[6] = (G) => k.value = G),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [Co, k.value]
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
}), Hh = { class: "grid grid-cols-2 gap-4 mt-4" }, Yh = ["value", "disabled"], Xh = /* @__PURE__ */ At({
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
      () => Object.values(et).filter((u) => u !== et.INTERNAL)
    ), c = Ye(
      () => r.sourceLNode?.lnClass === "IHMI" || r.sourceLNode?.lnClass === "ITCI"
    );
    function d(u) {
      const p = u.target.value;
      i.value = p;
    }
    return (u, p) => (ce(), ve(Ke, null, [
      p[3] || (p[3] = y("h3", { class: "font-bold text-lg" }, "Create Dataflow", -1)),
      y("div", Hh, [
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
          (ce(!0), ve(Ke, null, Et(s.value, (m) => (ce(), ve("option", {
            key: m,
            value: m,
            disabled: m === Le(et).CONTROL && !c.value
          }, ue(m), 9, Yh))), 128))
        ], 544), [
          [yn, i.value]
        ])
      ]),
      i.value !== Le(et).CONTROL ? (ce(), Zt(Sh, {
        key: 0,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: i.value,
        sourcePlaceholder: u.sourcePlaceholder
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType", "sourcePlaceholder"])) : (ce(), Zt(Gh, {
        key: 1,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: i.value
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType"]))
    ], 64));
  }
}), Qh = { class: "grid grid-cols-2 gap-4 items-center" }, zh = { class: "grid grid-cols-2 gap-4 items-center" }, Jh = ["value", "disabled"], Zh = { class: "grid grid-cols-2 gap-4 items-center" }, em = ["value", "title"], tm = { class: "grid grid-cols-2 gap-4 items-center" }, nm = ["value", "title"], rm = { class: "grid grid-cols-2 gap-4 items-center" }, om = { class: "grid grid-cols-2 gap-4 items-center" }, im = ["value"], am = { class: "flex items-center" }, sm = /* @__PURE__ */ At({
  __name: "source-placeholder-port-creation",
  props: {
    sourceLNode: {}
  },
  setup(t) {
    const r = t, i = zn(), s = Dt(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(
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
      () => Object.values(et).filter((W) => W !== et.INTERNAL)
    ), D = Ye(() => {
      const W = c.value.find((G) => G.typeId === r.sourceLNode.lnType);
      return W ? u.value.dataflowType ? W.dataObjects.filter(
        (G) => G.dataAttributes.some(
          (V) => Mo[u.value.dataflowType].includes(
            V.fc
          )
        )
      ).sort((G, V) => G.name.localeCompare(V.name)) : W.dataObjects.sort((G, V) => G.name.localeCompare(V.name)) : [];
    }), L = Ye(() => {
      const W = c.value.find((G) => G.typeId === r.sourceLNode.lnType)?.dataObjects.find((G) => G.name === u.value.dataObject);
      return W ? u.value.dataflowType ? W.dataAttributes.filter(
        (G) => Mo[u.value.dataflowType].includes(
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
    function Q(W) {
      for (const G of W)
        u.value[G] = "";
    }
    return (W, G) => (ce(), ve("form", {
      onSubmit: m,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      G[20] || (G[20] = y("h3", { class: "font-bold text-lg" }, "Create Placeholder - Provide data", -1)),
      y("div", Qh, [
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
          onChange: G[2] || (G[2] = (V) => Q(["dataObject", "dataAttribute"]))
        }, [
          G[10] || (G[10] = y("option", { value: "" }, "-", -1)),
          (ce(!0), ve(Ke, null, Et(O.value, (V) => (ce(), ve("option", {
            key: V,
            value: V,
            disabled: V === Le(et).CONTROL
          }, ue(V), 9, Jh))), 128))
        ], 544), [
          [yn, u.value.dataflowType]
        ])
      ]),
      y("div", Zh, [
        G[13] || (G[13] = y("label", { for: "data-object-select" }, "Data Object", -1)),
        rt(y("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": G[3] || (G[3] = (V) => u.value.dataObject = V),
          onChange: G[4] || (G[4] = (V) => Q(["dataAttribute"]))
        }, [
          G[12] || (G[12] = y("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (ce(!0), ve(Ke, null, Et(D.value, (V) => (ce(), ve("option", {
            key: V.id,
            value: V.name,
            title: V.desc ? `Desc: ${V.desc}` : ""
          }, ue(V.desc ? V.name + " ⓘ" : V.name), 9, em))), 128))
        ], 544), [
          [yn, u.value.dataObject]
        ])
      ]),
      y("div", tm, [
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
          (ce(!0), ve(Ke, null, Et(L.value, (V) => (ce(), ve("option", {
            key: V.id,
            value: V.name,
            title: V.desc ? `Desc: ${V.desc}` : ""
          }, ue(V.desc ? V.name + " ⓘ" : V.name), 9, nm))), 128))
        ], 512), [
          [yn, u.value.dataAttribute]
        ])
      ]),
      y("div", rm, [
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
      y("div", om, [
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
          (ce(!0), ve(Ke, null, Et(k.value, (V) => (ce(), ve("option", {
            key: V.lnClass,
            value: V.lnClass
          }, ue(V.lnClass), 9, im))), 128))
        ], 512), [
          [yn, u.value.preferredLNode]
        ])
      ]),
      y("div", am, [
        rt(y("input", {
          type: "checkbox",
          "onUpdate:modelValue": G[8] || (G[8] = (V) => p.value = V),
          class: "checkbox mr-2",
          id: "source-placeholder-checkbox-add-references"
        }, null, 512), [
          [Co, p.value]
        ]),
        G[19] || (G[19] = y("label", { for: "source-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      G[21] || (G[21] = y("div", { class: "modal-action" }, [
        y("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), lm = { class: "grid grid-cols-2 gap-4 mt-4" }, um = { class: "flex items-center" }, cm = { class: "flex items-center" }, fm = ["value"], dm = { class: "grid grid-cols-2 gap-4 mt-4" }, pm = { class: "grid grid-cols-2 gap-4 mt-4" }, hm = ["value", "disabled"], mm = { class: "grid grid-cols-2 gap-4 mt-4" }, vm = ["value"], ym = { class: "grid grid-cols-2 gap-4 mt-4" }, gm = ["value", "title"], bm = { class: "grid grid-cols-2 gap-4 mt-4" }, wm = ["value", "title"], _m = { class: "grid grid-cols-2 gap-4 mt-4" }, xm = { class: "mt-4 flex items-center" }, Nm = /* @__PURE__ */ At({
  __name: "destination-placeholder-port-creation",
  props: {
    destinationLNode: {}
  },
  setup(t) {
    const r = t, i = zn(), s = Dt(), { lnodeTypes: c, dataflowSdk: d } = Ft(s), u = $e(
      Q()
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
      async ([V, M]) => {
        if (!V) {
          u.value.inputInstance = "";
          return;
        }
        const $ = await d.value.calculateNextInputInstance(
          V,
          M,
          r.destinationLNode
        );
        u.value.inputInstance = $.toString();
      }
    );
    const O = Ye(
      () => Object.values(et).filter((V) => V !== et.INTERNAL)
    ), D = Ye(
      () => [...c.value].sort((V, M) => V.lnClass.localeCompare(M.lnClass))
    ), L = Ye(() => {
      const V = c.value.find(
        (M) => M.lnClass === u.value.preferredLNode
      );
      return V ? u.value.dataflowType ? V.dataObjects.filter(
        (M) => M.dataAttributes.some(
          ($) => Mo[u.value.dataflowType].includes($.fc)
        )
      ).map((M) => ({
        name: M.name,
        desc: M.desc
      })).sort((M, $) => M.name.localeCompare($.name)) : V.dataObjects.map((M) => ({
        name: M.name,
        desc: M.desc
      })).sort((M, $) => M.name.localeCompare($.name)) : [];
    }), Y = Ye(() => {
      const V = c.value.find(
        ($) => $.lnClass === u.value.preferredLNode
      );
      if (!V) return [];
      const M = V.dataObjects.find(
        ($) => $.name === u.value.preferredDataObject
      );
      return M ? u.value.dataflowType ? M.dataAttributes.filter(
        ($) => Mo[u.value.dataflowType].includes($.fc)
      ).filter(($) => !Fi.includes($.name)).sort(($, te) => $.name.localeCompare(te.name)) : M.dataAttributes.filter(($) => !Fi.includes($.name)).sort(($, te) => $.name.localeCompare(te.name)) : [];
    });
    function Q() {
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
      for (const M of V)
        u.value[M] = "";
    }
    return (V, M) => (ce(), ve("form", {
      method: "dialog",
      onSubmit: W
    }, [
      M[28] || (M[28] = y("h3", { class: "font-bold text-lg" }, "Create Placeholder - Receive data from", -1)),
      y("div", lm, [
        y("fieldset", null, [
          M[16] || (M[16] = y("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
          y("div", um, [
            rt(y("input", {
              type: "radio",
              id: "destination-placeholder-new-input",
              name: "input",
              "onUpdate:modelValue": M[0] || (M[0] = ($) => m.value = $),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, m.value]
            ]),
            M[14] || (M[14] = y("label", { for: "destination-placeholder-new-input" }, "New Input", -1))
          ]),
          y("div", cm, [
            rt(y("input", {
              type: "radio",
              id: "destination-placeholder-existing-input",
              name: "input",
              "onUpdate:modelValue": M[1] || (M[1] = ($) => m.value = $),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, m.value]
            ]),
            M[15] || (M[15] = y("label", { for: "destination-placeholder-existing-input" }, "Existing Input", -1))
          ])
        ]),
        m.value ? Ge("", !0) : rt((ce(), ve("input", {
          key: 0,
          "aria-label": "New Input Name",
          required: "",
          type: "text",
          placeholder: "Input Name",
          class: "input col-start-2",
          "onUpdate:modelValue": M[2] || (M[2] = ($) => u.value.inputName = $)
        }, null, 512)), [
          [Or, u.value.inputName]
        ]),
        m.value ? rt((ce(), ve("select", {
          key: 1,
          "aria-label": "Existing Input Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": M[3] || (M[3] = ($) => u.value.inputName = $)
        }, [
          (ce(!0), ve(Ke, null, Et(k.value, ($) => (ce(), ve("option", {
            key: $,
            value: $
          }, ue($), 9, fm))), 128))
        ], 512)), [
          [yn, u.value.inputName]
        ]) : Ge("", !0)
      ]),
      y("div", dm, [
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
          "onUpdate:modelValue": M[4] || (M[4] = ($) => u.value.inputInstance = $)
        }, null, 512), [
          [Or, u.value.inputInstance]
        ])
      ]),
      y("div", pm, [
        M[19] || (M[19] = y("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        rt(y("select", {
          id: "dataflow-type-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[5] || (M[5] = ($) => u.value.dataflowType = $),
          onChange: M[6] || (M[6] = ($) => G(["preferredDataObject"]))
        }, [
          M[18] || (M[18] = y("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (ce(!0), ve(Ke, null, Et(O.value, ($) => (ce(), ve("option", {
            key: $,
            value: $,
            disabled: $ === Le(et).CONTROL
          }, ue($), 9, hm))), 128))
        ], 544), [
          [yn, u.value.dataflowType]
        ])
      ]),
      y("div", mm, [
        M[21] || (M[21] = y("label", {
          for: "preferred-lnode-select",
          class: "col-start-1 self-center"
        }, "Preferred LNode", -1)),
        rt(y("select", {
          id: "preferred-lnode-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[7] || (M[7] = ($) => u.value.preferredLNode = $),
          onChange: M[8] || (M[8] = ($) => G(["preferredDataObject"]))
        }, [
          M[20] || (M[20] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ce(!0), ve(Ke, null, Et(D.value, ($) => (ce(), ve("option", {
            key: $.id,
            value: $.lnClass
          }, ue($.lnClass), 9, vm))), 128))
        ], 544), [
          [yn, u.value.preferredLNode]
        ])
      ]),
      y("div", ym, [
        M[23] || (M[23] = y("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Object", -1)),
        rt(y("select", {
          id: "data-object-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[9] || (M[9] = ($) => u.value.preferredDataObject = $),
          onChange: M[10] || (M[10] = ($) => G(["preferredDataAttribute"]))
        }, [
          M[22] || (M[22] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ce(!0), ve(Ke, null, Et(L.value, ($) => (ce(), ve("option", {
            key: $.name,
            value: $.name,
            title: $.desc ? `Desc: ${$.desc}` : ""
          }, ue($.desc ? $.name + " ⓘ" : $.name), 9, gm))), 128))
        ], 544), [
          [yn, u.value.preferredDataObject]
        ])
      ]),
      y("div", bm, [
        M[25] || (M[25] = y("label", {
          for: "data-attribute-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Attribute", -1)),
        rt(y("select", {
          id: "data-attribute-select",
          class: "select col-start-2",
          "onUpdate:modelValue": M[11] || (M[11] = ($) => u.value.preferredDataAttribute = $)
        }, [
          M[24] || (M[24] = y("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (ce(!0), ve(Ke, null, Et(Y.value, ($) => (ce(), ve("option", {
            key: $.name,
            value: $.name,
            title: $.desc ? `Desc: ${$.desc}` : ""
          }, ue($.desc ? $.name + " ⓘ" : $.name), 9, wm))), 128))
        ], 512), [
          [yn, u.value.preferredDataAttribute]
        ])
      ]),
      y("div", _m, [
        M[26] || (M[26] = y("label", {
          for: "process-resource-input",
          class: "col-start-1 self-center"
        }, "Process Resource", -1)),
        rt(y("input", {
          id: "process-resource-input",
          type: "text",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": M[12] || (M[12] = ($) => u.value.processResource = $)
        }, null, 512), [
          [Or, u.value.processResource]
        ])
      ]),
      y("div", xm, [
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
}), Rm = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_80px]" }, Cm = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Tm = { class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-center" }, Em = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Om = { class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-center" }, Am = { class: "col-span-full row-start-3" }, Im = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] h-[50px]" }, Sm = { class: "col-start-1 col-span-1 self-center justify-self-end" }, Dm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Pm = { class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1" }, Lm = { class: "col-start-5 col-span-1 self-center justify-self-start" }, km = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, zi = /* @__PURE__ */ At({
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
    return (r, i) => (ce(), ve("div", Rm, [
      i[2] || (i[2] = y("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2" }, null, -1)),
      y("div", Cm, ue(r.sendingSecondaryLabel), 1),
      y("div", Tm, ue(r.sendingPrimaryLabel), 1),
      i[3] || (i[3] = y("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2" }, null, -1)),
      y("div", Em, ue(r.receivingSecondaryLabel), 1),
      y("div", Om, ue(r.receivingPrimaryLabel), 1),
      y("div", Am, [
        y("div", Im, [
          y("div", Sm, [
            (ce(!0), ve(Ke, null, Et(r.sendingPortLabels, (s) => (ce(), ve("span", Dm, ue(s), 1))), 256))
          ]),
          i[0] || (i[0] = cc('<div class="rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] bg-(--color-ocean-gray-100)"></div><div class="col-start-3 col-span-1 row-start-1 flex items-center"><div class="border h-[2px] w-full border-(--color-ocean-gray-100) border-solid"></div></div><svg height="12" width="8" class="col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 8,6 0,12" style="fill:var(--color-ocean-gray-100);"></polygon></svg>', 3)),
          y("div", Pm, ue(r.dataflowType), 1),
          i[1] || (i[1] = y("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] bg-(--color-ocean-gray-100)" }, null, -1)),
          y("div", Lm, [
            (ce(!0), ve(Ke, null, Et(r.receivingPortLabels, (s) => (ce(), ve("span", km, ue(s), 1))), 256))
          ])
        ])
      ])
    ]));
  }
}), jm = { class: "bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2 p-3" }, Fm = { class: "text-center text-xs mb-4" }, Bm = { class: "flex flex-col justify-between gap-4" }, Mm = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-2 p-3" }, $m = { class: "text-center mb-4" }, Km = { key: 0 }, qm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Um = { class: "collapse collapse-arrow mt-2" }, Vm = { class: "collapse-content text-sm px-5 pt-1" }, Wm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Gm = { key: 1 }, Hm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Ym = { class: "collapse collapse-arrow mt-2" }, Xm = { class: "collapse-content text-sm px-5 pt-1" }, Qm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, zm = { class: "collapse collapse-arrow mt-2" }, Jm = { class: "collapse-content text-sm px-5 pt-1" }, Zm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, ev = { key: 2 }, tv = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, nv = { class: "collapse collapse-arrow mt-2" }, rv = { class: "collapse-content text-sm px-5 pt-1" }, ov = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, iv = { class: "collapse collapse-arrow mt-2" }, av = { class: "collapse-content text-sm px-5 pt-1" }, sv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, lv = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-2 p-3" }, uv = { class: "text-center mb-4" }, cv = { class: "list-disc pl-5" }, fv = /* @__PURE__ */ At({
  __name: "dataflow-implementation-details",
  props: {
    dataflowType: {},
    ldInst: {},
    controlBlock: {},
    dataSet: {},
    fcdas: {},
    ln0Path: {}
  },
  setup(t) {
    const r = t, i = Dt(), { dataflowSdk: s } = Ft(i), c = $e(), d = $e(), u = $e();
    return Ta(async () => {
      r.dataflowType === et.GOOSE ? c.value = await s.value.findGseControlBlockDetails(
        r.controlBlock.id,
        r.ldInst
      ) : r.dataflowType === et.SMV ? d.value = await s.value.findSmvControlBlockDetails(
        r.controlBlock.id,
        r.ldInst
      ) : r.dataflowType === et.REPORT && (u.value = await s.value.findReportControlBlockDetails(
        r.controlBlock.id
      ));
    }), (p, m) => (ce(), ve("div", jm, [
      y("div", Fm, ue(p.ln0Path), 1),
      y("div", Bm, [
        y("div", Mm, [
          y("div", $m, ue(p.controlBlock.name), 1),
          c.value ? (ce(), ve("div", Km, [
            y("dl", qm, [
              m[0] || (m[0] = y("dt", null, "App ID:", -1)),
              y("dd", null, ue(c.value.appId), 1),
              m[1] || (m[1] = y("dt", null, "ConfRev:", -1)),
              y("dd", null, ue(p.controlBlock.confRev), 1)
            ]),
            y("details", Um, [
              m[6] || (m[6] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              y("div", Vm, [
                y("dl", Wm, [
                  m[2] || (m[2] = y("dt", null, "MAC Address:", -1)),
                  y("dd", null, ue(c.value.communicationDetails.macAddress), 1),
                  m[3] || (m[3] = y("dt", null, "App ID:", -1)),
                  y("dd", null, ue(c.value.communicationDetails.appId), 1),
                  m[4] || (m[4] = y("dt", null, "VLAN ID:", -1)),
                  y("dd", null, ue(c.value.communicationDetails.vlanId), 1),
                  m[5] || (m[5] = y("dt", null, "VLAN Priority:", -1)),
                  y("dd", null, ue(c.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : Ge("", !0),
          d.value ? (ce(), ve("div", Gm, [
            y("dl", Hm, [
              m[7] || (m[7] = y("dt", null, "SMV ID:", -1)),
              y("dd", null, ue(d.value.smvId), 1),
              m[8] || (m[8] = y("dt", null, "ConfRev:", -1)),
              y("dd", null, ue(p.controlBlock.confRev), 1),
              m[9] || (m[9] = y("dt", null, "Multicast:", -1)),
              y("dd", null, ue(d.value.multicast), 1),
              m[10] || (m[10] = y("dt", null, "NofASDU:", -1)),
              y("dd", null, ue(d.value.nofAsdu), 1),
              m[11] || (m[11] = y("dt", null, "SmpMod:", -1)),
              y("dd", null, ue(d.value.smpMod), 1),
              m[12] || (m[12] = y("dt", null, "SmpRate:", -1)),
              y("dd", null, ue(d.value.smpRate), 1)
            ]),
            y("details", Ym, [
              m[19] || (m[19] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "SmvOpts", -1)),
              y("div", Xm, [
                y("dl", Qm, [
                  m[13] || (m[13] = y("dt", null, "RefreshTime:", -1)),
                  y("dd", null, ue(d.value.smvOpts.refreshTime), 1),
                  m[14] || (m[14] = y("dt", null, "SampleSynchronized:", -1)),
                  y("dd", null, ue(d.value.smvOpts.sampleSynchronized), 1),
                  m[15] || (m[15] = y("dt", null, "SampleRate:", -1)),
                  y("dd", null, ue(d.value.smvOpts.sampleRate), 1),
                  m[16] || (m[16] = y("dt", null, "DataSet:", -1)),
                  y("dd", null, ue(d.value.smvOpts.dataSet), 1),
                  m[17] || (m[17] = y("dt", null, "Security:", -1)),
                  y("dd", null, ue(d.value.smvOpts.security), 1),
                  m[18] || (m[18] = y("dt", null, "SynchSourceId:", -1)),
                  y("dd", null, ue(d.value.smvOpts.synchSourceId), 1)
                ])
              ])
            ]),
            y("details", zm, [
              m[24] || (m[24] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              y("div", Jm, [
                y("dl", Zm, [
                  m[20] || (m[20] = y("dt", null, "MAC Address:", -1)),
                  y("dd", null, ue(d.value.communicationDetails.macAddress), 1),
                  m[21] || (m[21] = y("dt", null, "App ID:", -1)),
                  y("dd", null, ue(d.value.communicationDetails.appId), 1),
                  m[22] || (m[22] = y("dt", null, "VLAN ID:", -1)),
                  y("dd", null, ue(d.value.communicationDetails.vlanId), 1),
                  m[23] || (m[23] = y("dt", null, "VLAN Priority:", -1)),
                  y("dd", null, ue(d.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : Ge("", !0),
          u.value ? (ce(), ve("div", ev, [
            y("dl", tv, [
              m[25] || (m[25] = y("dt", null, "RPT ID:", -1)),
              y("dd", null, ue(u.value.rptId), 1),
              m[26] || (m[26] = y("dt", null, "ConfRev:", -1)),
              y("dd", null, ue(p.controlBlock.confRev), 1),
              m[27] || (m[27] = y("dt", null, "Buffered:", -1)),
              y("dd", null, ue(u.value.buffered), 1)
            ]),
            y("details", nv, [
              m[33] || (m[33] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "TrgOps", -1)),
              y("div", rv, [
                y("dl", ov, [
                  m[28] || (m[28] = y("dt", null, "Dchg:", -1)),
                  y("dd", null, ue(u.value.trgOps.dchg), 1),
                  m[29] || (m[29] = y("dt", null, "Dupd:", -1)),
                  y("dd", null, ue(u.value.trgOps.dupd), 1),
                  m[30] || (m[30] = y("dt", null, "Gi:", -1)),
                  y("dd", null, ue(u.value.trgOps.gi), 1),
                  m[31] || (m[31] = y("dt", null, "Period:", -1)),
                  y("dd", null, ue(u.value.trgOps.period), 1),
                  m[32] || (m[32] = y("dt", null, "Qchg:", -1)),
                  y("dd", null, ue(u.value.trgOps.qchg), 1)
                ])
              ])
            ]),
            y("details", iv, [
              m[42] || (m[42] = y("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "OptFields", -1)),
              y("div", av, [
                y("dl", sv, [
                  m[34] || (m[34] = y("dt", null, "BufOvfl:", -1)),
                  y("dd", null, ue(u.value.optFields.bufOvfl), 1),
                  m[35] || (m[35] = y("dt", null, "ConfigRef:", -1)),
                  y("dd", null, ue(u.value.optFields.configRef), 1),
                  m[36] || (m[36] = y("dt", null, "DataRef:", -1)),
                  y("dd", null, ue(u.value.optFields.dataRef), 1),
                  m[37] || (m[37] = y("dt", null, "DataSet:", -1)),
                  y("dd", null, ue(u.value.optFields.dataSet), 1),
                  m[38] || (m[38] = y("dt", null, "EntryID:", -1)),
                  y("dd", null, ue(u.value.optFields.entryId), 1),
                  m[39] || (m[39] = y("dt", null, "ReasonCode:", -1)),
                  y("dd", null, ue(u.value.optFields.reasonCode), 1),
                  m[40] || (m[40] = y("dt", null, "SeqNum:", -1)),
                  y("dd", null, ue(u.value.optFields.seqNum), 1),
                  m[41] || (m[41] = y("dt", null, "TimeStamp:", -1)),
                  y("dd", null, ue(u.value.optFields.timeStamp), 1)
                ])
              ])
            ])
          ])) : Ge("", !0)
        ]),
        y("div", lv, [
          y("div", uv, ue(p.dataSet.name), 1),
          y("ul", cv, [
            (ce(!0), ve(Ke, null, Et(p.fcdas, (k) => (ce(), ve("li", null, ue(`${k.doName}.${k.daName} (fc: ${k.fc || "-"})`), 1))), 256))
          ])
        ])
      ])
    ]));
  }
}), dv = { class: "font-bold text-lg mb-4" }, pv = { key: 0 }, hv = { key: 1 }, mv = {
  key: 4,
  class: "modal-action"
}, vv = /* @__PURE__ */ At({
  __name: "dataflow-implementation",
  props: {
    connection: {},
    extRef: {}
  },
  setup(t) {
    const r = t, i = zn(), s = Dt(), { dataflowSdk: c, lnodes: d } = Ft(s), u = $e(""), p = $e(""), m = $e(""), k = $e(), O = $e(), D = $e([]);
    Ut(
      () => r.extRef,
      async function(X) {
        X && (m.value = await c.value.findPathToExtRef(X.id), X.srcCbName && (k.value = await c.value.findControlBlock(
          X.iedName,
          X.ldInst,
          X.srcCbName
        ), O.value = await c.value.findDataSet(
          X.iedName,
          X.ldInst,
          k.value.datSet
        ), D.value = await c.value.findFcdasForDataSet(O.value.id)));
      },
      { immediate: !0 }
    ), Ut(
      () => r.connection,
      async function(X) {
        Se(X.sourceLNodeId, "Source LNodeId is undefined"), u.value = await c.value.findPathToLnode(X.sourceLNodeId), p.value = await c.value.findPathToLnode(
          X.destinationLNodeId
        );
      },
      { immediate: !0 }
    );
    const L = Ye(() => u.value.split("/").slice(-1).join("")), Y = Ye(() => u.value.split("/").slice(0, -1).join("/")), Q = Ye(() => p.value.split("/").slice(-1).join("")), W = Ye(() => p.value.split("/").slice(0, -1).join("/")), G = Ye(() => {
      if (!r.connection.isImplemented) {
        const pe = d.value.find((X) => X.id === r.connection.sourceLNodeId);
        return Se(pe, "Sending LNode not found"), `${pe.prefix}${pe.lnClass}${pe.lnInst}`;
      }
      return `${r.extRef?.prefix ?? ""}${r.extRef?.lnClass}${r.extRef?.lnInst ?? ""}`;
    }), V = Ye(() => {
      if (!r.connection.isImplemented) {
        const pe = d.value.find((X) => X.id === r.connection.sourceLNodeId);
        return Se(pe, "Sending LNode not found"), `${pe.iedName}/${pe.ldInst}`;
      }
      return `${r.extRef?.iedName}/${r.extRef?.ldInst}`;
    }), M = Ye(() => m.value.split("/").slice(-2, -1).join("")), $ = Ye(() => m.value.split("/").slice(0, -2).join("/")), te = Ye(() => `${r.extRef?.iedName}/${r.extRef?.srcLdInst}/${r.extRef?.srcPrefix}${r.extRef?.srcLnClass}${r.extRef?.srcLnInst}`);
    async function Oe() {
      try {
        if (!r.extRef)
          throw new Error("No matching ExtRef found for dataflow implementation");
        await c.value.implementDataflow(r.connection, r.extRef), i.handleClose();
      } catch (pe) {
        console.error("Error implementing dataflow:", pe), alert(`Error implementing dataflow: ${pe instanceof Error ? pe.message : "Unknown error"}`);
      }
    }
    return (pe, X) => (ce(), ve(Ke, null, [
      y("h3", dv, ue(pe.connection.isImplemented ? "Implemented Dataflow Details" : "Implement Dataflow"), 1),
      pe.extRef ? Ge("", !0) : (ce(), ve("p", pv, "No matching ExtRef found for dataflow implementation.")),
      pe.connection.notPossibleToImplement ? (ce(), ve("p", hv, "Sending or receiving LNode is not mapped to a real IED.")) : Ge("", !0),
      pe.extRef && pe.connection.isImplemented ? (ce(), ve(Ke, { key: 2 }, [
        X[0] || (X[0] = y("h3", { class: "mb-4" }, "Specification:", -1)),
        mt(zi, {
          sendingSecondaryLabel: Y.value,
          sendingPrimaryLabel: L.value,
          receivingSecondaryLabel: W.value,
          receivingPrimaryLabel: Q.value,
          dataflowType: pe.connection.dataflowType,
          sendingPortLabels: [pe.connection.sourceDataObject, pe.connection.sourceDataAttribute],
          receivingPortLabels: [pe.connection.input, pe.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        X[1] || (X[1] = y("h3", { class: "mb-4" }, "Implementation:", -1)),
        mt(zi, {
          sendingSecondaryLabel: V.value,
          sendingPrimaryLabel: G.value,
          receivingSecondaryLabel: $.value,
          receivingPrimaryLabel: M.value,
          dataflowType: pe.extRef.serviceType,
          sendingPortLabels: [pe.extRef.doName, pe.extRef.daName],
          receivingPortLabels: [pe.extRef.intAddr, pe.extRef.desc].filter(Boolean)
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        k.value && O.value ? (ce(), Zt(fv, {
          key: 0,
          controlBlock: k.value,
          dataSet: O.value,
          fcdas: D.value,
          ln0Path: te.value,
          dataflowType: pe.extRef.serviceType,
          ldInst: pe.extRef.srcLdInst
        }, null, 8, ["controlBlock", "dataSet", "fcdas", "ln0Path", "dataflowType", "ldInst"])) : Ge("", !0)
      ], 64)) : Ge("", !0),
      pe.extRef && !pe.connection.notPossibleToImplement && !pe.connection.isImplemented ? (ce(), ve(Ke, { key: 3 }, [
        X[2] || (X[2] = y("h3", { class: "mb-4" }, "Specification:", -1)),
        mt(zi, {
          sendingSecondaryLabel: Y.value,
          sendingPrimaryLabel: L.value,
          receivingSecondaryLabel: W.value,
          receivingPrimaryLabel: Q.value,
          dataflowType: pe.connection.dataflowType,
          sendingPortLabels: [pe.connection.sourceDataObject, pe.connection.sourceDataAttribute],
          receivingPortLabels: [pe.connection.input, pe.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        X[3] || (X[3] = y("h3", { class: "mb-4" }, "Matching ExtRef to implement:", -1)),
        mt(zi, {
          sendingSecondaryLabel: V.value,
          sendingPrimaryLabel: G.value,
          receivingSecondaryLabel: $.value,
          receivingPrimaryLabel: M.value,
          dataflowType: pe.extRef.serviceType || pe.extRef.pServT || pe.connection.dataflowType,
          sendingPortLabels: [
            pe.extRef.pDo || pe.connection.sourceDataObject,
            pe.extRef.pDa || pe.connection.sourceDataAttribute
          ],
          receivingPortLabels: [pe.extRef.intAddr, pe.extRef.desc].filter(Boolean)
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"])
      ], 64)) : Ge("", !0),
      !pe.connection.isImplemented && !pe.connection.notPossibleToImplement ? (ce(), ve("div", mv, [
        y("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: Oe
        }, " Implement ")
      ])) : Ge("", !0)
    ], 64));
  }
});
function yv(t) {
  return Ks() ? (pu(t), !0) : !1;
}
const gv = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const bv = () => {
};
function wv(t, r, i = {}) {
  const {
    immediate: s = !0,
    immediateCallback: c = !1
  } = i, d = An(!1);
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
  return s && (d.value = !0, gv && k()), yv(m), {
    isPending: sf(d),
    start: k,
    stop: m
  };
}
function _v(t, r, i) {
  let s;
  Ot(i) ? s = {
    evaluating: i
  } : s = {};
  const {
    lazy: c = !1,
    flush: d = "pre",
    evaluating: u = void 0,
    shallow: p = !0,
    onError: m = bv
  } = s, k = An(!c), O = p ? An(r) : $e(r);
  let D = 0;
  return Ta(async (L) => {
    if (!k.value)
      return;
    D++;
    const Y = D;
    let Q = !1;
    u && Promise.resolve().then(() => {
      u.value = !0;
    });
    try {
      const W = await t((G) => {
        L(() => {
          u && (u.value = !1), Q || G();
        });
      });
      Y === D && (O.value = W);
    } catch (W) {
      m(W);
    } finally {
      u && Y === D && (u.value = !1), Q = !0;
    }
  }, { flush: d }), c ? Ye(() => (k.value = !0, O.value)) : O;
}
const zn = /* @__PURE__ */ ol("dataflow/dialog-store", () => {
  const t = {
    component: void 0,
    props: void 0
  }, r = $e(), i = $e(t), s = $e(), c = qi({
    DataflowCreation: An(Xh),
    SourcePlaceholderCreation: An(sm),
    DestinationPlaceholderCreation: An(Nm),
    DataflowImplementation: An(vv)
  });
  function d() {
    i.value = {
      component: void 0,
      props: void 0
    };
  }
  function u() {
    r.value?.close(), wv(() => {
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
}), xv = ["onClick"], Nv = /* @__PURE__ */ At({
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
    return (u, p) => (ce(), ve(Ke, null, [
      u.isVisible ? (ce(), ve("div", {
        key: 0,
        class: "menu bg-base-100 rounded-box fixed z-10",
        style: Kr(c.value)
      }, [
        y("ul", null, [
          (ce(!0), ve(Ke, null, Et(u.items, (m) => (ce(), ve("li", null, [
            y("a", {
              onClick: (k) => d(m)
            }, ue(m.label), 9, xv)
          ]))), 256))
        ])
      ], 4)) : Ge("", !0),
      (ce(), Zt(jo, { to: "body" }, [
        i.isVisible ? (ce(), ve("div", {
          key: 0,
          class: "backdrop",
          onClick: p[0] || (p[0] = pa((m) => u.$emit("close"), ["prevent"])),
          onContextmenu: p[1] || (p[1] = pa((m) => u.$emit("close"), ["prevent"]))
        }, null, 32)) : Ge("", !0)
      ]))
    ], 64));
  }
}), Da = (t, r) => {
  const i = t.__vccOpts || t;
  for (const [s, c] of r)
    i[s] = c;
  return i;
}, Rv = /* @__PURE__ */ Da(Nv, [["__scopeId", "data-v-9cc5b747"]]), Cv = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Tv = ["onClick"], Ev = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Ov = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Av = ["onClick"], Iv = ["onClick", "onContextmenu"], Sv = ["data-testid"], Dv = ["onClick"], Pv = ["onClick", "onContextmenu"], Lv = ["onClick"], kv = ["onClick"], jv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Fv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Bv = /* @__PURE__ */ At({
  __name: "dataflow-connections",
  props: {
    connections: {},
    isDataflowImplementationEnabled: { type: Boolean }
  },
  setup(t) {
    const r = t, i = Sa(), { activeElement: s } = Ft(i), c = Dt(), { dataflowSdk: d } = Ft(c), u = zn(), p = $e(!1), m = $e(0), k = $e(0), O = $e([]), D = [
      et.GOOSE,
      et.REPORT,
      et.SMV
    ], L = Ye(() => [...r.connections].sort((M, $) => M.dataflowType < $.dataflowType ? -1 : M.dataflowType > $.dataflowType ? 1 : 0));
    async function Y(M) {
      const $ = await d.value.findMatchingExtRef(M);
      u.openDialogWithContent(
        "DataflowImplementation",
        {
          extRef: $,
          connection: M
        },
        { class: "w-1/2 max-w-none" }
      );
    }
    function Q(M) {
      return M ? D.includes(M) : !1;
    }
    function W(M, $) {
      !Q($.dataflowType) || !r.isDataflowImplementationEnabled || (M.preventDefault(), G(M), O.value = V($), p.value = !0);
    }
    function G(M) {
      m.value = M.clientX, k.value = M.clientY;
    }
    function V(M) {
      return [
        {
          label: M.isImplemented ? "Show Implementation" : "Implement",
          action: () => Y(M)
        }
      ];
    }
    return (M, $) => (ce(), ve(Ke, null, [
      (ce(!0), ve(Ke, null, Et(L.value, (te, Oe) => (ce(), ve("div", Cv, [
        y("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer",
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id)
        }, [
          y("span", Ev, ue(te.sourceDataObject), 1),
          y("span", Ov, ue(te.sourceDataAttribute), 1)
        ], 8, Tv),
        y("div", {
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id),
          class: Jt(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": Le(s) === te.id,
            "bg-(--color-ocean-gray-100)": Le(s) !== te.id
          }])
        }, null, 10, Av),
        y("div", {
          class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id),
          onContextmenu: pa((pe) => W(pe, te), ["right"])
        }, [
          y("div", {
            class: Jt(["border h-[2px] w-full", {
              "border-(--color-primary)": Le(s) === te.id,
              "border-(--color-ocean-gray-100)": Le(s) !== te.id,
              "border-solid": !M.isDataflowImplementationEnabled || te.isImplemented,
              "border-dashed": M.isDataflowImplementationEnabled && !te.isImplemented,
              "border-dotted": M.isDataflowImplementationEnabled && te.notPossibleToImplement
            }]),
            "data-testid": `dataflow-line-${Oe}`
          }, null, 10, Sv)
        ], 40, Iv),
        (ce(), ve("svg", {
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id),
          height: "12",
          width: "8",
          class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          y("polygon", {
            points: "0,0 8,6 0,12",
            style: Kr({
              fill: Le(s) === te.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
            })
          }, null, 4)
        ], 8, Dv)),
        y("div", {
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id),
          onContextmenu: pa((pe) => W(pe, te), ["right"]),
          class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
        }, ue(te.dataflowType), 41, Pv),
        y("div", {
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id),
          class: Jt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": Le(s) === te.id,
            "bg-(--color-ocean-gray-100)": Le(s) !== te.id
          }])
        }, null, 10, Lv),
        y("div", {
          onClick: (pe) => Le(i).setOrResetActiveElement(te.id),
          class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
        }, [
          y("span", jv, ue(te.input), 1),
          y("span", Fv, ue(te.inputInstance), 1)
        ], 8, kv),
        Le(s) == te.id && !M.isDataflowImplementationEnabled ? (ce(), Zt(jo, {
          key: 0,
          to: "#sidebar-details"
        }, [
          mt(ah, { connection: te }, null, 8, ["connection"])
        ])) : Ge("", !0),
        Le(s) == te.id && M.isDataflowImplementationEnabled ? (ce(), Zt(jo, {
          key: 1,
          to: "#sidebar-details"
        }, [
          mt(dh, { connection: te }, null, 8, ["connection"])
        ])) : Ge("", !0)
      ]))), 256)),
      mt(Rv, {
        x: m.value,
        y: k.value,
        isVisible: p.value,
        items: O.value,
        onClose: $[0] || ($[0] = (te) => p.value = !1)
      }, null, 8, ["x", "y", "isVisible", "items"])
    ], 64));
  }
}), Mv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, $v = {
  class: "[&_dt,dd]:inline [&_dt]:mr-1",
  "data-testid": "destination-placeholder-details"
}, Kv = { class: "mt-4" }, qv = { key: 0 }, Uv = { key: 1 }, Vv = /* @__PURE__ */ At({
  __name: "destination-placeholder-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    const r = t, i = Dt(), { lnodeTypes: s } = Ft(i), c = Ye(() => s.value.find((p) => p.lnClass === r.placeholder.preferredLNode)?.dataObjects.find(
      (p) => p.name === r.placeholder.preferredDataObject
    )), d = Ye(() => c?.value?.dataAttributes?.find(
      (u) => u.name === r.placeholder.preferredDataAttribute
    ));
    return (u, p) => (ce(), ve(Ke, null, [
      p[8] || (p[8] = y("h2", { class: "text-lg font-bold mb-2" }, "Destination Placeholder", -1)),
      u.placeholder.dataflowType ? (ce(), ve("span", Mv, ue(u.placeholder.dataflowType), 1)) : Ge("", !0),
      y("dl", $v, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, ue(u.placeholder.input), 1)
        ]),
        y("div", null, [
          p[1] || (p[1] = y("dt", null, "Input Instance:", -1)),
          y("dd", null, ue(u.placeholder.inputInstance || "-"), 1)
        ]),
        y("div", Kv, [
          p[2] || (p[2] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, ue(u.placeholder.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[3] || (p[3] = y("dt", null, "Preferred DO:", -1)),
          y("dd", null, ue(u.placeholder.preferredDataObject || "-"), 1)
        ]),
        c.value?.desc ? (ce(), ve("div", qv, [
          p[4] || (p[4] = y("dt", null, "Preferred DO Desc:", -1)),
          y("dd", null, ue(c.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[5] || (p[5] = y("dt", null, "Preferred DA:", -1)),
          y("dd", null, ue(u.placeholder.preferredDataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (ce(), ve("div", Uv, [
          p[6] || (p[6] = y("dt", null, "Preferred DA Desc:", -1)),
          y("dd", null, ue(d.value.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[7] || (p[7] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, ue(u.placeholder.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), Wv = ["y1", "x2", "y2"], Gv = ["points"], Hv = /* @__PURE__ */ At({
  __name: "arrow",
  props: {
    height: {},
    length: {}
  },
  setup(t) {
    return (r, i) => (ce(), ve(Ke, null, [
      y("line", {
        x1: 0,
        y1: r.height / 2,
        x2: r.length - r.height / 2,
        y2: r.height / 2,
        stroke: "currentColor",
        "stroke-width": "2"
      }, null, 8, Wv),
      y("polygon", {
        points: `${r.length - r.height * 0.7}, 0 ${r.length}, ${r.height / 2} ${r.length - r.height * 0.7}, ${r.height}`,
        fill: "currentColor"
      }, null, 8, Gv)
    ], 64));
  }
}), Yv = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, Xv = ["onClick"], Qv = {
  height: "12",
  width: "35",
  class: "mr-[9px] text-(--color-ocean-gray-100)"
}, zv = ["data-testid"], Jv = ["onClick"], Zv = { class: "col-start-5 col-span-1 self-center justify-self-start" }, ey = ["onClick"], ty = ["onClick"], ny = /* @__PURE__ */ At({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(t) {
    const r = Sa(), { activeElement: i } = Ft(r);
    return (s, c) => (ce(!0), ve(Ke, null, Et(s.destinationPlaceHolderPorts, (d, u) => (ce(), ve("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]",
      key: `destination-placeholder-port-${u}`
    }, [
      y("div", Yv, [
        y("div", {
          class: "flex items-center justify-self-end h-full max-w-max hover:cursor-pointer",
          onClick: (p) => Le(r).setOrResetActiveElement(d.id)
        }, [
          (ce(), ve("svg", Qv, [
            y("g", {
              "data-testid": `placeholder-line-${u}`,
              class: Jt({
                "text-(--color-primary)": Le(i) === d.id
              })
            }, [
              mt(Hv, {
                height: 12,
                length: 35
              })
            ], 10, zv)
          ]))
        ], 8, Xv)
      ]),
      y("div", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        class: Jt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Le(i) === d.id
        }])
      }, null, 10, Jv),
      y("div", Zv, [
        y("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm hover:cursor-pointer",
          onClick: (p) => Le(r).setOrResetActiveElement(d.id)
        }, ue(d.input), 9, ey),
        y("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 rounded-sm hover:cursor-pointer",
          onClick: (p) => Le(r).setOrResetActiveElement(d.id)
        }, ue(d.inputInstance), 9, ty)
      ]),
      Le(i) == d.id ? (ce(), Zt(jo, {
        key: 0,
        to: "#sidebar-details"
      }, [
        mt(Vv, { placeholder: d }, null, 8, ["placeholder"])
      ])) : Ge("", !0)
    ]))), 128));
  }
}), ry = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, oy = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, iy = { class: "mt-4" }, ay = { key: 0 }, sy = { key: 1 }, ly = { class: "mt-4" }, uy = {
  key: 2,
  class: "mt-4"
}, cy = /* @__PURE__ */ At({
  __name: "source-placeholder-details",
  props: {
    placeholder: {},
    sourceLNodeId: {}
  },
  setup(t) {
    const r = t, i = Dt(), { lnodes: s } = Ft(i), c = Ye(() => s.value.find((p) => p.id === r.sourceLNodeId)?.dataObjectSpecifications?.find(
      (p) => p.name === r.placeholder.dataObject
    )), d = Ye(() => c?.value?.dataAttributeSpecifications?.find(
      (u) => u.name === r.placeholder.dataAttribute
    ));
    return (u, p) => (ce(), ve(Ke, null, [
      p[8] || (p[8] = y("h2", { class: "text-lg font-bold mb-2" }, "Source Placeholder", -1)),
      u.placeholder.dataflowType ? (ce(), ve("span", ry, ue(u.placeholder.dataflowType), 1)) : Ge("", !0),
      y("dl", oy, [
        y("div", null, [
          p[0] || (p[0] = y("dt", null, "Input:", -1)),
          y("dd", null, ue(u.placeholder.input), 1)
        ]),
        y("div", iy, [
          p[1] || (p[1] = y("dt", null, "DO:", -1)),
          y("dd", null, ue(u.placeholder.dataObject || "-"), 1)
        ]),
        c.value?.desc ? (ce(), ve("div", ay, [
          p[2] || (p[2] = y("dt", null, "DO Desc:", -1)),
          y("dd", null, ue(c.value?.desc), 1)
        ])) : Ge("", !0),
        y("div", null, [
          p[3] || (p[3] = y("dt", null, "DA:", -1)),
          y("dd", null, ue(u.placeholder.dataAttribute || "-"), 1)
        ]),
        d.value?.desc ? (ce(), ve("div", sy, [
          p[4] || (p[4] = y("dt", null, "DA Desc:", -1)),
          y("dd", null, ue(d.value?.desc), 1)
        ])) : Ge("", !0),
        y("div", ly, [
          p[5] || (p[5] = y("dt", null, "Preferred LN:", -1)),
          y("dd", null, ue(u.placeholder.preferredLNode || "-"), 1)
        ]),
        y("div", null, [
          p[6] || (p[6] = y("dt", null, "Process Resource:", -1)),
          y("dd", null, ue(u.placeholder.processResource || "-"), 1)
        ]),
        u.placeholder.isFulfilled != null ? (ce(), ve("div", uy, [
          p[7] || (p[7] = y("dt", null, "Placeholder is fulfilled:", -1)),
          y("dd", null, ue(u.placeholder.isFulfilled), 1)
        ])) : Ge("", !0)
      ])
    ], 64));
  }
}), fy = {}, dy = {
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function py(t, r) {
  return ce(), ve("svg", dy, r[0] || (r[0] = [
    y("path", { d: "M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" }, null, -1),
    y("path", { d: "M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" }, null, -1)
  ]));
}
const ma = /* @__PURE__ */ Da(fy, [["render", py]]), hy = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-12" }, my = ["onClick"], vy = ["onClick"], yy = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, gy = ["onClick"], by = ["onClick"], wy = ["onClick"], _y = ["onClick"], xy = ["disabled", "onClick"], Ny = /* @__PURE__ */ At({
  __name: "source-placeholder-ports",
  props: {
    sourceLNode: {},
    destinationLNode: {}
  },
  setup(t) {
    const r = t, i = Sa(), { activeElement: s } = Ft(i), c = Dt(), { sourcePlaceholders: d } = Ft(c), u = zn(), p = Ye(() => r.sourceLNode.id ? d.value.filter((O) => O.lNodeId === r.sourceLNode.id) : []), m = (O) => {
      if (r.destinationLNode)
        return O.preferredLNode ? r.destinationLNode.lnClass === O.preferredLNode ? r.destinationLNode : void 0 : r.destinationLNode;
    };
    function k(O) {
      Se(r.destinationLNode, "Destination LNode is undefined"), u.openDialogWithContent("DataflowCreation", {
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        sourcePlaceholder: O
      });
    }
    return (O, D) => (ce(!0), ve(Ke, null, Et(p.value, (L) => (ce(), ve("div", hy, [
      y("div", {
        onClick: (Y) => Le(i).setOrResetActiveElement(L.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        y("span", {
          class: Jt([L.isFulfilled ? "border-solid" : "border-dashed", "relative inline-block border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm"])
        }, [
          nl(ue(L.dataObject) + "." + ue(L.dataAttribute) + " ", 1),
          y("span", {
            class: Jt([{
              "bg-(--color-primary)": Le(s) === L.id
            }, "absolute -top-3 -right-3 bg-(--color-ocean-gray-100) text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"])
          }, " 1+ ", 2)
        ], 2)
      ], 8, my),
      y("div", {
        onClick: (Y) => Le(i).setOrResetActiveElement(L.id),
        class: Jt([{
          "bg-(--color-primary)": Le(s) === L.id
        }, "rounded-full size-5 col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[8.5px] hover:cursor-pointer"])
      }, null, 10, vy),
      y("div", yy, [
        y("div", {
          class: "flex items-center h-full w-3/4 hover:cursor-pointer",
          onClick: (Y) => Le(i).setOrResetActiveElement(L.id)
        }, [
          y("div", {
            class: Jt(["h-[2px] w-full border border-dashed", {
              "border-[var(--color-primary)]": Le(s) === L.id,
              "border-[var(--color-gray-200)]": Le(s) !== L.id
            }]),
            onClick: (Y) => Le(i).setOrResetActiveElement(L.id)
          }, null, 10, by)
        ], 8, gy)
      ]),
      y("div", {
        onClick: (Y) => Le(i).setOrResetActiveElement(L.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[10%] truncate max-w-[8ch]"
      }, ue(L.input), 9, wy),
      L.preferredLNode ? (ce(), ve("div", {
        key: 0,
        onClick: (Y) => Le(i).setOrResetActiveElement(L.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[70%]"
      }, ue(L.preferredLNode), 9, _y)) : Ge("", !0),
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
        mt(ma)
      ], 12, xy),
      Le(s) == L.id ? (ce(), Zt(jo, {
        key: 1,
        to: "#sidebar-details"
      }, [
        mt(cy, {
          placeholder: L,
          sourceLNodeId: r.sourceLNode.id
        }, null, 8, ["placeholder", "sourceLNodeId"])
      ])) : Ge("", !0)
    ]))), 256));
  }
}), Ry = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Cy = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, Ty = { class: "mt-4" }, Ey = { key: 0 }, Oy = /* @__PURE__ */ At({
  __name: "controlled-connection-details",
  props: {
    controlledConnection: {}
  },
  setup(t) {
    const r = t, i = Dt(), { lnodes: s } = Ft(i), c = Ye(() => s.value.find(
      (u) => u.id === r.controlledConnection.controlledLNodeId
    )?.dataObjectSpecifications?.find(
      (u) => u.name === r.controlledConnection.controlledDataObject
    ));
    return (d, u) => (ce(), ve(Ke, null, [
      u[4] || (u[4] = y("h2", { class: "text-lg font-bold mb-2" }, "Specified Controlled Dataflow", -1)),
      d.controlledConnection.dataflowType ? (ce(), ve("span", Ry, ue(d.controlledConnection.dataflowType), 1)) : Ge("", !0),
      y("dl", Cy, [
        y("div", null, [
          u[0] || (u[0] = y("dt", null, "Output:", -1)),
          y("dd", null, ue(d.controlledConnection.outputName), 1)
        ]),
        y("div", null, [
          u[1] || (u[1] = y("dt", null, "Output Instance:", -1)),
          y("dd", null, ue(d.controlledConnection.outputInstance || "-"), 1)
        ]),
        y("div", Ty, [
          u[2] || (u[2] = y("dt", null, "Controlled DO:", -1)),
          y("dd", null, ue(d.controlledConnection.controlledDataObject || "-"), 1)
        ]),
        c.value?.desc ? (ce(), ve("div", Ey, [
          u[3] || (u[3] = y("dt", null, "Controlled DO Desc:", -1)),
          y("dd", null, ue(c.value.desc), 1)
        ])) : Ge("", !0)
      ])
    ], 64));
  }
}), Ay = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Iy = ["onClick"], Sy = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Dy = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Py = ["onClick"], Ly = ["onClick"], ky = ["data-testid"], jy = ["onClick"], Fy = ["onClick"], By = ["onClick"], My = ["onClick"], $y = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Ky = /* @__PURE__ */ At({
  __name: "dataflow-controlled-connections",
  props: {
    controlledConnections: {}
  },
  setup(t) {
    const r = Sa(), { activeElement: i } = Ft(r);
    return (s, c) => (ce(!0), ve(Ke, null, Et(s.controlledConnections, (d, u) => (ce(), ve("div", Ay, [
      y("div", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        y("span", Sy, ue(d.outputName), 1),
        y("span", Dy, ue(d.outputInstance), 1)
      ], 8, Iy),
      y("div", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        class: Jt(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Le(i) === d.id,
          "bg-(--color-ocean-gray-100)": Le(i) !== d.id
        }])
      }, null, 10, Py),
      y("div", {
        class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
        onClick: (p) => Le(r).setOrResetActiveElement(d.id)
      }, [
        y("div", {
          class: Jt(["h-[2px] w-full", {
            "bg-(--color-primary)": Le(i) === d.id,
            "bg-(--color-ocean-gray-100)": Le(i) !== d.id
          }]),
          "data-testid": `dataflow-controlled-connection-line-${u}`
        }, null, 10, ky)
      ], 8, Ly),
      (ce(), ve("svg", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        y("polygon", {
          points: "0,0 8,6 0,12",
          style: Kr({
            fill: Le(i) === d.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
          })
        }, null, 4)
      ], 8, jy)),
      y("div", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
      }, ue(d.dataflowType), 9, Fy),
      y("div", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        class: Jt(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Le(i) === d.id,
          "bg-(--color-ocean-gray-100)": Le(i) !== d.id
        }])
      }, null, 10, By),
      y("div", {
        onClick: (p) => Le(r).setOrResetActiveElement(d.id),
        class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
      }, [
        y("span", $y, ue(d.controlledDataObject), 1)
      ], 8, My),
      Le(i) == d.id ? (ce(), Zt(jo, {
        key: 0,
        to: "#sidebar-details"
      }, [
        mt(Oy, { "controlled-connection": d }, null, 8, ["controlled-connection"])
      ])) : Ge("", !0)
    ]))), 256));
  }
}), qy = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_1fr_80px]" }, Uy = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Vy = ["value"], Wy = ["value"], Gy = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Hy = ["value"], Yy = ["value"], Xy = { class: "col-span-full row-start-3" }, Qy = /* @__PURE__ */ At({
  __name: "dataflow-visualisation",
  props: {
    isDataflowImplementationEnabled: { type: Boolean }
  },
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(t, { emit: r }) {
    const i = r, s = zn(), c = Dt(), { lnodes: d, connections: u, controlledConnections: p, dataflowSdk: m } = Ft(c), k = $e(""), O = $e(""), D = $e(), L = $e(), Y = $e(), Q = $e();
    Ut(
      () => d.value,
      () => {
        D.value = void 0, L.value = void 0;
      }
    );
    const W = Ye(
      () => G.value?.filter((le) => le.lnodeId !== L.value).sort((le, be) => le.label.localeCompare(be.label))
    ), G = _v(
      async () => await Promise.all(
        d.value.map(async (le) => {
          const be = await m.value?.findLnodeFunction(le.id);
          return {
            lnodeId: le.id,
            label: `${be}/${Bi(le)}`
          };
        })
      )
    ), V = Ye(
      () => G.value?.filter((le) => le.lnodeId !== D.value).sort((le, be) => le.label.localeCompare(be.label))
    ), M = Ye(() => !D.value || !L.value ? [] : u.value.filter(
      (le) => le.sourceLNodeId === D.value && le.destinationLNodeId === L.value
    )), $ = Ye(() => !D.value || !L.value ? [] : p.value.filter(
      (le) => le.controllerLNodeId === D.value && le.controlledLNodeId === L.value
    )), te = Ye(() => L.value ? u.value.filter(
      (le) => le.destinationLNodeId === L.value && !le.sourceLNodeId
    ) : []);
    function Oe(le) {
      return d.value.find((be) => be.id === le) ?? void 0;
    }
    async function pe(le) {
      D.value = le, Y.value = Oe(le);
      const be = await m.value.findPathToLnode(le);
      k.value = be.split("/").slice(0, -2).join("/"), i("sourceLNodeChange", le);
    }
    async function X(le) {
      L.value = le, Q.value = Oe(le);
      const be = await m.value.findPathToLnode(le);
      O.value = be.split("/").slice(0, -2).join("/"), i("destinationLNodeChange", le);
    }
    function se() {
      if (!Y.value)
        throw new Error("Source LNode is undefined");
      s.openDialogWithContent("SourcePlaceholderCreation", {
        sourceLNode: Y.value
      });
    }
    function j() {
      if (!Q.value)
        throw new Error("Destination LNode is undefined");
      s.openDialogWithContent("DestinationPlaceholderCreation", {
        destinationLNode: Q.value
      });
    }
    return (le, be) => (ce(), ve("div", qy, [
      be[5] || (be[5] = y("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2 min-h-[450px]" }, null, -1)),
      y("div", Uy, ue(k.value), 1),
      y("select", {
        value: D.value ?? "",
        onChange: be[0] || (be[0] = (ge) => pe(ge.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-lg text-center font-medium"
      }, [
        be[2] || (be[2] = nl(" > ")),
        be[3] || (be[3] = y("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (ce(!0), ve(Ke, null, Et(W.value, (ge) => (ce(), ve("option", {
          key: ge.lnodeId,
          value: ge.lnodeId
        }, ue(ge.label), 9, Wy))), 128))
      ], 40, Vy),
      be[6] || (be[6] = y("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2 min-h-[450px]" }, null, -1)),
      y("div", Gy, ue(O.value), 1),
      y("select", {
        value: L.value ?? "",
        onChange: be[1] || (be[1] = (ge) => X(ge.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-lg text-center font-medium"
      }, [
        be[4] || (be[4] = y("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (ce(!0), ve(Ke, null, Et(V.value, (ge) => (ce(), ve("option", {
          key: ge.lnodeId,
          value: ge.lnodeId
        }, ue(ge.label), 9, Yy))), 128))
      ], 40, Hy),
      y("div", Xy, [
        M.value.length > 0 ? (ce(), Zt(Bv, {
          key: 0,
          connections: M.value,
          isDataflowImplementationEnabled: le.isDataflowImplementationEnabled
        }, null, 8, ["connections", "isDataflowImplementationEnabled"])) : Ge("", !0),
        $.value.length > 0 ? (ce(), Zt(Ky, {
          key: 1,
          controlledConnections: $.value
        }, null, 8, ["controlledConnections"])) : Ge("", !0),
        Y.value && !le.isDataflowImplementationEnabled ? (ce(), Zt(Ny, {
          key: 2,
          sourceLNode: Y.value,
          destinationLNode: Q.value
        }, null, 8, ["sourceLNode", "destinationLNode"])) : Ge("", !0),
        le.isDataflowImplementationEnabled ? Ge("", !0) : (ce(), Zt(ny, {
          key: 3,
          destinationPlaceHolderPorts: te.value
        }, null, 8, ["destinationPlaceHolderPorts"]))
      ]),
      Y.value && !le.isDataflowImplementationEnabled ? (ce(), ve("button", {
        key: 0,
        "aria-label": "Add source placeholder",
        class: "btn btn-primary btn-circle size-5 col-start-3 col-span-1 -ml-[12px] self-center z-10 row-start-4",
        onClick: se
      }, [
        mt(ma)
      ])) : Ge("", !0),
      Q.value && !le.isDataflowImplementationEnabled ? (ce(), ve("button", {
        key: 1,
        class: "btn btn-primary btn-circle size-5 col-start-4 col-span-1 -ml-[9px] self-center row-start-4",
        "aria-label": "Add destination placeholder",
        onClick: j
      }, [
        mt(ma)
      ])) : Ge("", !0)
    ]));
  }
}), zy = { class: "flex justify-between mb-6 w-full h-18" }, Jy = { key: 0 }, Zy = { class: "flex flex-col items-center justify-center w-full" }, eg = ["disabled"], tg = /* @__PURE__ */ At({
  __name: "dataflow-view",
  setup(t) {
    const r = $e(), i = $e(), s = $e(!1), c = zn(), d = Dt(), { lnodes: u } = Ft(d), p = Ye(() => D(r.value)), m = Ye(() => D(i.value));
    function k(Y) {
      r.value = Y;
    }
    function O(Y) {
      i.value = Y;
    }
    function D(Y) {
      return u.value.find((Q) => Q.id === Y) ?? void 0;
    }
    function L() {
      if (!p.value || !m.value)
        throw new Error("Source or Destination LNode is undefined");
      c.openDialogWithContent("DataflowCreation", {
        sourceLNode: p.value,
        destinationLNode: m.value
      });
    }
    return (Y, Q) => (ce(), ve(Ke, null, [
      y("div", zy, [
        y("div", null, [
          Q[1] || (Q[1] = y("span", { class: "mr-3" }, "Specification", -1)),
          rt(y("input", {
            type: "checkbox",
            "onUpdate:modelValue": Q[0] || (Q[0] = (W) => s.value = W),
            class: "toggle"
          }, null, 512), [
            [Co, s.value]
          ]),
          Q[2] || (Q[2] = y("span", { class: "ml-3" }, "Implementation", -1))
        ]),
        s.value ? (ce(), ve("div", Jy, Q[3] || (Q[3] = [
          cc('<div class="flex items-center"><div class="border w-[50px] h-[2px] mr-2"></div><span>Implemented</span></div><div class="flex items-center"><div class="border border-dashed w-[50px] h-[2px] mr-2"></div><span>Not implemented</span></div><div class="flex items-center"><div class="border border-dotted w-[50px] h-[2px] mr-2"></div><span>Not possible to implement</span></div>', 3)
        ]))) : Ge("", !0)
      ]),
      y("div", Zy, [
        mt(Qy, {
          onSourceLNodeChange: k,
          onDestinationLNodeChange: O,
          isDataflowImplementationEnabled: s.value
        }, null, 8, ["isDataflowImplementationEnabled"]),
        s.value ? Ge("", !0) : (ce(), ve("button", {
          key: 0,
          class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
          onClick: L,
          disabled: !p.value || !m.value,
          "aria-label": "Add connection"
        }, [
          mt(ma)
        ], 8, eg))
      ])
    ], 64));
  }
}), ng = {}, rg = { class: "layout" }, og = { class: "main" }, ig = { class: "sidebar" };
function ag(t, r) {
  return ce(), ve("div", rg, [
    y("div", og, [
      wl(t.$slots, "main", {}, void 0)
    ]),
    y("div", ig, [
      wl(t.$slots, "sidebar", {}, void 0)
    ])
  ]);
}
const sg = /* @__PURE__ */ Da(ng, [["render", ag], ["__scopeId", "data-v-5f95d421"]]), lg = {
  name: "sidebar",
  class: "root"
}, ug = { class: "tabs tabs-box" }, cg = { key: 0 }, fg = { key: 1 }, dg = /* @__PURE__ */ At({
  __name: "sidebar",
  setup(t) {
    const r = $e("details");
    return (i, s) => (ce(), ve("div", lg, [
      y("div", ug, [
        rt(y("input", {
          type: "radio",
          value: "details",
          name: "tabs",
          "onUpdate:modelValue": s[0] || (s[0] = (c) => r.value = c),
          class: "tab",
          "aria-label": "Details"
        }, null, 512), [
          [$r, r.value]
        ]),
        rt(y("input", {
          type: "radio",
          value: "advanced",
          name: "tabs",
          "onUpdate:modelValue": s[1] || (s[1] = (c) => r.value = c),
          class: "tab",
          "aria-label": "Advanced"
        }, null, 512), [
          [$r, r.value]
        ])
      ]),
      y("div", null, [
        r.value === "details" ? (ce(), ve("div", cg, s[2] || (s[2] = [
          y("div", { id: "sidebar-details" }, null, -1)
        ]))) : Ge("", !0),
        r.value === "advanced" ? (ce(), ve("div", fg)) : Ge("", !0)
      ])
    ]));
  }
}), pg = /* @__PURE__ */ Da(dg, [["__scopeId", "data-v-ec5c053a"]]), hg = {
  class: "modal",
  ref: "dialogRef"
}, mg = /* @__PURE__ */ At({
  __name: "dialog-container",
  setup(t) {
    const r = zn(), { currentDialogContent: i } = Ft(r), s = Rf("dialogRef");
    return Ko(() => {
      s.value && (r.dialogRef = s.value);
    }), (c, d) => (ce(), ve("dialog", hg, [
      y("div", {
        class: Jt(["modal-box max-h-[85vh]", Le(r).dialogAttributes?.class])
      }, [
        y("button", {
          class: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          "aria-label": "Close dialog",
          onClick: d[0] || (d[0] = //@ts-ignore
          (...u) => Le(r).handleClose && Le(r).handleClose(...u))
        }, " ✕ "),
        Le(i).component ? (ce(), Zt(Ff(Le(i).component), jc(fc({ key: 0 }, Le(i).props)), null, 16)) : Ge("", !0)
      ], 2),
      d[1] || (d[1] = y("form", {
        method: "dialog",
        class: "modal-backdrop"
      }, [
        y("button", null, "close")
      ], -1))
    ], 512));
  }
}), vg = ["id"], yg = { class: "px-5" }, gg = /* @__PURE__ */ At({
  __name: "app",
  props: {
    api: {}
  },
  setup(t) {
    const r = "dataflow", i = t, s = Dt();
    let c = () => {
    };
    return Ko(() => {
      c = i.api.activeFileName.subscribe((d) => {
        s.initApp(d);
      }), s.initApp(i.api.activeFileName.value);
    }), Qs(() => {
      s.closeDatabase(), c();
    }), (d, u) => (ce(), ve("article", {
      id: Le(r),
      style: { height: "100%" }
    }, [
      mt(sg, null, {
        main: _s(() => [
          y("div", yg, [
            mt(tg),
            mt(mg)
          ])
        ]),
        sidebar: _s(() => [
          mt(pg)
        ]),
        _: 1
      })
    ], 8, vg));
  }
});
function Kg(t, r) {
  if (!document.getElementById(t)) {
    console.error({ msg: "could not found root element", rootId: t });
    return;
  }
  const s = Zd(gg, { api: r });
  return s.use(np()), s.mount(`#${t}`), s.unmount;
}
export {
  Kg as default
};
