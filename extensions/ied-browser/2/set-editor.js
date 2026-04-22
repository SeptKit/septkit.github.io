(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-leading:initial;--tw-font-weight:initial;--tw-tracking:initial;--tw-shadow:0 0 #0000;--tw-shadow-color:initial;--tw-shadow-alpha:100%;--tw-inset-shadow:0 0 #0000;--tw-inset-shadow-color:initial;--tw-inset-shadow-alpha:100%;--tw-ring-color:initial;--tw-ring-shadow:0 0 #0000;--tw-inset-ring-color:initial;--tw-inset-ring-shadow:0 0 #0000;--tw-ring-inset:initial;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-offset-shadow:0 0 #0000;--tw-outline-style:solid;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";--font-mono:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1 / .75);--text-sm:.875rem;--text-sm--line-height:calc(1.25 / .875);--text-base:1rem;--text-base--line-height: 1.5 ;--text-lg:1.125rem;--text-lg--line-height:calc(1.75 / 1.125);--text-3xl:1.875rem;--text-3xl--line-height: 1.2 ;--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--tracking-wide:.025em;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 200'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E");scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000) #0000}}@property --radialprogress{syntax:"<percentage>";inherits:true;initial-value:0%}:root:not(span){overflow:var(--page-overflow)}:root{background:var(--page-scroll-bg,var(--root-bg));--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000), var(--root-bg,#0000)) var(--root-bg,#0000)}@supports (color:color-mix(in lab,red,red)){:root{--page-scroll-bg-on:linear-gradient(var(--root-bg,#0000), var(--root-bg,#0000)) color-mix(in srgb, var(--root-bg,#0000), oklch(0% 0 0) calc(var(--page-has-backdrop,0) * 40%))}}:root{--page-scroll-transition-on:background-color .3s ease-out;transition:var(--page-scroll-transition);scrollbar-gutter:var(--page-scroll-gutter,unset);scrollbar-gutter:if(style(--page-has-scroll: 1): var(--page-scroll-gutter,unset) ; else: unset)}@keyframes set-page-has-scroll{0%,to{--page-has-scroll:1}}:root,[data-theme]{background:var(--page-scroll-bg,var(--root-bg));color:var(--color-base-content)}:where(:root,[data-theme]){--root-bg:var(--color-base-100)}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-300)}}@layer components;@layer utilities{@layer daisyui.l1.l2.l3{.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu details{interpolate-size:allow-keywords;overflow:hidden}.menu details::details-content{block-size:0}@media (prefers-reduced-motion:no-preference){.menu details::details-content{transition-behavior:allow-discrete;transition-property:block-size,content-visibility;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}}.menu details[open]::details-content{block-size:auto}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content) 10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content) 10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise) * 100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth) * 3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content) 20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.dropdown{position-area:var(--anchor-v,bottom) var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(:has(~[class*=dropdown-content])):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(:has(~[class*=dropdown-content])):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown.dropdown-close .dropdown-content,.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content,.dropdown.dropdown-hover:not(:hover) [tabindex]:first-child:focus:not(:focus-visible)~.dropdown-content{transform-origin:top;opacity:0;display:none;scale:.95}.dropdown[popover],.dropdown .dropdown-content{z-index:999}@media (prefers-reduced-motion:no-preference){.dropdown[popover],.dropdown .dropdown-content{transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:.95}}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown:not(.dropdown-close).dropdown-open,.dropdown:not(.dropdown-close):not(.dropdown-hover):focus,.dropdown:not(.dropdown-close):focus-within) .dropdown-content,.dropdown:not(.dropdown-close).dropdown-hover:hover .dropdown-content{opacity:1;scale:1}.dropdown:is(details) summary::-webkit-details-marker{display:none}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-close{transform-origin:top;opacity:0;display:none;scale:.95}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:.95}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}:is(.dropdown[popover].dropdown-close,.dropdown[popover]:not(.dropdown-open,:popover-open)){transform-origin:top;opacity:0;display:none;scale:.95}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise) * 100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0 / calc(var(--depth) * .15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0 / calc(var(--depth) * 6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem) * 10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab, var(--btn-bg), #000 calc(var(--depth) * 5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg), 0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab, var(--btn-bg) calc(var(--depth) * 30%), #0000), 0 4px 3px -2px color-mix(in oklab, var(--btn-bg) calc(var(--depth) * 30%), #0000)}}.btn{--btn-noise:var(--fx-noise)}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab, var(--btn-color,var(--color-base-200)), #000 7%)}}}.btn:focus-visible,.btn:has(:focus-visible){isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab, var(--btn-color,var(--color-base-200)), #000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab, var(--btn-color,var(--color-base-200)), #000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0), 0 0 0 0 oklch(0% 0 0/0)}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio])[aria-label]:after{--tw-content:attr(aria-label);content:var(--tw-content)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.list{flex-direction:column;font-size:.875rem;display:flex}.list .list-row{--list-grid-cols:minmax(0, auto) 1fr;border-radius:var(--radius-box);word-break:break-word;grid-auto-flow:column;grid-template-columns:var(--list-grid-cols);gap:1rem;padding:1rem;display:grid;position:relative}:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{content:"";border-bottom:var(--border) solid;inset-inline:var(--radius-box);border-color:var(--color-base-content);position:absolute;bottom:0}@supports (color:color-mix(in lab,red,red)){:is(.list>:not(:last-child).list-row,.list>:not(:last-child) .list-row):after{border-color:color-mix(in oklab,var(--color-base-content) 5%,transparent)}}.input{cursor:text;border:var(--border) solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0 / calc(var(--depth) * .1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color) calc(var(--depth) * 10%),#0000) inset,0 -1px oklch(100% 0 0 / calc(var(--depth) * .1)) inset}}.input{--size:calc(var(--size-field,.25rem) * 10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab, var(--color-base-content) 20%, #0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-flex}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color) calc(var(--depth) * 10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media (pointer:coarse){@supports (-webkit-touch-callout:none){.input:focus,.input:focus-within{--font-size:1rem}}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{color:color-mix(in oklab,var(--color-base-content) 40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input)::placeholder{color:color-mix(in oklab,var(--color-base-content) 20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]),fieldset:disabled .input{box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.input:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.input:has(>input[type=date]) input[type=date]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}.table{border-collapse:separate;--tw-border-spacing-x: 0rem ;--tw-border-spacing-y: 0rem ;width:100%;border-spacing:var(--tw-border-spacing-x) var(--tw-border-spacing-y);border-radius:var(--radius-box);text-align:left;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content) 60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border) solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot tr:first-child :is(td,th)){border-top:var(--border) solid color-mix(in oklch,var(--color-base-content) 5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border) solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr :is(td,th),tbody tr:not(:last-child) :is(td,th)){border-bottom:var(--border) solid color-mix(in oklch,var(--color-base-content) 5%,#0000)}}.select{border:var(--border) solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;white-space:nowrap;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0 / calc(var(--depth) * .1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:.75rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative;overflow:hidden}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color) calc(var(--depth) * 10%),#0000) inset,0 -1px oklch(100% 0 0 / calc(var(--depth) * .1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab, var(--color-base-content) 20%, #0000)}}.select{--size:calc(var(--size-field,.25rem) * 10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}[dir=rtl] .select::picker(select){translate:.5rem}[dir=rtl] .select select::picker(select){translate:.5rem}.select[multiple]{background-image:none;height:auto;padding-block:.75rem;padding-inline-end:.75rem;overflow:auto}.select select{appearance:none;width:calc(100% + 2.75rem);height:calc(100% - calc(var(--border) * 2));background:inherit;border-radius:inherit;border-style:none;align-items:center;margin-inline:-.75rem -1.75rem;padding-inline:.75rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color) calc(var(--depth) * 10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select{color:color-mix(in oklab,var(--color-base-content) 40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]),fieldset:disabled .select)::placeholder{color:color-mix(in oklab,var(--color-base-content) 20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}@supports (appearance:base-select){.select,.select select{appearance:base-select}:is(.select,.select select)::picker(select){appearance:base-select}}:is(.select,.select select)::picker(select){color:inherit;border:var(--border) solid var(--color-base-200);border-radius:var(--radius-box);background-color:inherit;max-height:min(24rem,70dvh);box-shadow:0 2px calc(var(--depth) * 3px) -2px #0003;box-shadow:0 20px 25px -5px rgb(0 0 0/calc(var(--depth) * .1)),0 8px 10px -6px rgb(0 0 0/calc(var(--depth) * .1));margin-block:.5rem;margin-inline:.5rem;padding:.5rem;translate:-.5rem}:is(.select,.select select)::picker-icon{display:none}:is(.select,.select select) optgroup{padding-top:.5em}:is(.select,.select select) optgroup option:first-child{margin-top:.5em}:is(.select,.select select) option{border-radius:var(--radius-field);white-space:normal;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1)}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{background-color:color-mix(in oklab,var(--color-base-content) 10%,transparent)}}:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){:is(.select,.select select) option:not(:disabled):hover,:is(.select,.select select) option:not(:disabled):focus-visible{outline-offset:2px;outline:2px solid #0000}}:is(.select,.select select) option:not(:disabled):active{background-color:var(--color-neutral);color:var(--color-neutral-content);box-shadow:0 2px calc(var(--depth) * 3px) -2px var(--color-neutral)}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border) solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border) solid var(--input-color,color-mix(in srgb, currentColor 20%, #0000))}}.radio{box-shadow:0 1px oklch(0% 0 0 / calc(var(--depth) * .1)) inset;--size:calc(var(--size-selector,.25rem) * 6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise) * 100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor}@media (prefers-reduced-motion:no-preference){.radio:checked,.radio[aria-checked=true]{animation:.2s ease-out radio}}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0 / calc(var(--depth) * .1)) inset,0 8px 0 -4px oklch(100% 0 0 / calc(var(--depth) * .1)) inset,0 1px oklch(0% 0 0 / calc(var(--depth) * .1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentcolor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border) solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border) solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border) solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border) solid color-mix(in oklab,currentColor 10%,#0000)}}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.btn-accent{--btn-color:var(--color-accent);--btn-fg:var(--color-accent-content)}.btn-error{--btn-color:var(--color-error);--btn-fg:var(--color-error-content)}.btn-info{--btn-color:var(--color-info);--btn-fg:var(--color-info-content)}.btn-neutral{--btn-color:var(--color-neutral);--btn-fg:var(--color-neutral-content)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.btn-secondary{--btn-color:var(--color-secondary);--btn-fg:var(--color-secondary-content)}.btn-success{--btn-color:var(--color-success);--btn-fg:var(--color-success-content)}.btn-warning{--btn-color:var(--color-warning);--btn-fg:var(--color-warning-content)}}.prose :where(a.btn:not(.btn-link)):not(:where([class~=not-prose],[class~=not-prose] *)){text-decoration-line:none}@layer daisyui.l1.l2{.btn:disabled:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content) 10%,transparent)}}.btn:disabled:not(.btn-link,.btn-ghost){box-shadow:none}.btn:disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:disabled{--btn-fg:color-mix(in oklch, var(--color-base-content) 20%, #0000)}}.btn[disabled]:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content) 10%,transparent)}}.btn[disabled]:not(.btn-link,.btn-ghost){box-shadow:none}.btn[disabled]{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn[disabled]{--btn-fg:color-mix(in oklch, var(--color-base-content) 20%, #0000)}}.btn-disabled:not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn-disabled:not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content) 10%,transparent)}}.btn-disabled:not(.btn-link,.btn-ghost){box-shadow:none}.btn-disabled{pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn-disabled{--btn-fg:color-mix(in oklch, var(--color-base-content) 20%, #0000)}}.list .list-row:has(.list-col-grow:first-child){--list-grid-cols:1fr}.list .list-row:has(.list-col-grow:nth-child(2)){--list-grid-cols:minmax(0, auto) 1fr}.list .list-row:has(.list-col-grow:nth-child(3)){--list-grid-cols:minmax(0, auto) minmax(0, auto) 1fr}.list .list-row:has(.list-col-grow:nth-child(4)){--list-grid-cols:minmax(0, auto) minmax(0, auto) minmax(0, auto) 1fr}.list .list-row:has(.list-col-grow:nth-child(5)){--list-grid-cols:minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) 1fr}.list .list-row:has(.list-col-grow:nth-child(6)){--list-grid-cols:minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) minmax(0, auto) 1fr}.list .list-row>*{grid-row-start:1}.radio:disabled{cursor:not-allowed;opacity:.2}.btn-active{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn-active{--btn-bg:color-mix(in oklab, var(--btn-color,var(--color-base-200)), #000 7%)}}.btn-active{--btn-shadow:0 0 0 0 oklch(0% 0 0/0), 0 0 0 0 oklch(0% 0 0/0);isolation:isolate}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.btn-square{width:var(--size);height:var(--size);padding-inline:0}.btn-wide{width:100%;max-width:16rem}.btn-block{width:100%}.input-ghost{box-shadow:none;background-color:#0000;border-color:#0000}.input-ghost:focus,.input-ghost:focus-within{background-color:var(--color-base-100);color:var(--color-base-content);box-shadow:none;border-color:#0000}.btn-lg{--fontsize:1.125rem;--btn-p:1.25rem;--size:calc(var(--size-field,.25rem) * 12)}.btn-md{--fontsize:.875rem;--btn-p:1rem;--size:calc(var(--size-field,.25rem) * 10)}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem) * 8)}.btn-xl{--fontsize:1.375rem;--btn-p:1.5rem;--size:calc(var(--size-field,.25rem) * 14)}.btn-xs{--fontsize:.6875rem;--btn-p:.5rem;--size:calc(var(--size-field,.25rem) * 6)}.input-primary,.input-primary:focus,.input-primary:focus-within{--input-color:var(--color-primary)}}.absolute{position:absolute}.relative{position:relative}.left-0{left:calc(var(--spacing) * 0)}.z-1{z-index:1}.z-50{z-index:50}.mt-8{margin-top:calc(var(--spacing) * 8)}.ml-auto{margin-left:auto}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline-block{display:inline-block}.inline-flex{display:inline-flex}.table{display:table}.size-max{width:max-content;height:max-content}.h-3{height:calc(var(--spacing) * 3)}.h-4{height:calc(var(--spacing) * 4)}.h-7{height:calc(var(--spacing) * 7)}.h-full{height:100%}.max-h-52{max-height:calc(var(--spacing) * 52)}.w-3{width:calc(var(--spacing) * 3)}.w-4{width:calc(var(--spacing) * 4)}.w-6\\.25{width:calc(var(--spacing) * 6.25)}.w-52{width:calc(var(--spacing) * 52)}.w-full{width:100%}.cursor-pointer{cursor:pointer}.columns-2{columns:2}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-2{gap:calc(var(--spacing) * 2)}.gap-3{gap:calc(var(--spacing) * 3)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing) * 2) * var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing) * 2) * calc(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-y-auto{overflow-y:auto}.rounded{border-radius:.25rem}.rounded-box{border-radius:var(--radius-box)}.border-r{border-right-style:var(--tw-border-style);border-right-width:1px}@layer daisyui.l1{.btn-dash:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-dash:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-link{--btn-border:#0000;--btn-bg:#0000;--btn-noise:none;--btn-shadow:"";outline-color:currentColor;text-decoration-line:underline}.btn-link:not(.btn-disabled,.btn:disabled,.btn[disabled]){--btn-fg:var(--btn-color,var(--color-primary))}.btn-link:is(.btn-active,:hover,:active:focus,:focus-visible){--btn-border:#0000;--btn-bg:#0000}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn)){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn)):not(:disabled,[disabled],.btn-disabled){--btn-fg:var(--btn-color,currentColor);outline-color:currentColor}@media (hover:none){.btn-ghost:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color,currentColor);--btn-border:#0000;--btn-noise:none;outline-color:currentColor}}.btn-outline:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}@media (hover:none){.btn-outline:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-shadow:"";--btn-bg:#0000;--btn-fg:var(--btn-color);--btn-border:var(--btn-color);--btn-noise:none}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab, var(--btn-color,var(--color-base-content)) 8%, var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab, var(--btn-color,var(--color-base-content)) 10%, var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,input:checked:not(.filter .btn),:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-bg:color-mix(in oklab, var(--btn-color,var(--color-base-content)) 8%, var(--color-base-100))}}.btn-soft:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-border:color-mix(in oklab, var(--btn-color,var(--color-base-content)) 10%, var(--color-base-100))}}.btn-soft:not(.btn-active,:active,:focus-visible,input:checked:not(.filter .btn)):hover{--btn-noise:none}}}.btn-dash{border-style:dashed}.border-base-300{border-color:var(--color-base-300)}.bg-accent{background-color:var(--color-accent)}.bg-base-100{background-color:var(--color-base-100)}.bg-base-200{background-color:var(--color-base-200)}.bg-error{background-color:var(--color-error)}.bg-info{background-color:var(--color-info)}.bg-neutral{background-color:var(--color-neutral)}.bg-primary{background-color:var(--color-primary)}.bg-secondary{background-color:var(--color-secondary)}.bg-success{background-color:var(--color-success)}.bg-warning{background-color:var(--color-warning)}.bg-white{background-color:var(--color-white)}.p-1{padding:calc(var(--spacing) * 1)}.p-2{padding:calc(var(--spacing) * 2)}.p-4{padding:calc(var(--spacing) * 4)}.p-8{padding:calc(var(--spacing) * 8)}.px-2{padding-inline:calc(var(--spacing) * 2)}.py-2{padding-block:calc(var(--spacing) * 2)}.pl-7{padding-left:calc(var(--spacing) * 7)}.text-center{text-align:center}.text-3xl{font-size:var(--text-3xl);line-height:var(--tw-leading,var(--text-3xl--line-height))}.text-base{font-size:var(--text-base);line-height:var(--tw-leading,var(--text-base--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.leading-none{--tw-leading:1;line-height:1}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.tracking-wide{--tw-tracking:var(--tracking-wide);letter-spacing:var(--tracking-wide)}.text-base-content\\/50{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/50{color:color-mix(in oklab,var(--color-base-content) 50%,transparent)}}.text-base-content\\/60{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/60{color:color-mix(in oklab,var(--color-base-content) 60%,transparent)}}.text-base-content\\/70{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.text-base-content\\/70{color:color-mix(in oklab,var(--color-base-content) 70%,transparent)}}.shadow-md{--tw-shadow:0 4px 6px -1px var(--tw-shadow-color,#0000001a), 0 2px 4px -2px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.shadow-sm{--tw-shadow:0 1px 3px 0 var(--tw-shadow-color,#0000001a), 0 1px 2px -1px var(--tw-shadow-color,#0000001a);box-shadow:var(--tw-inset-shadow),var(--tw-inset-ring-shadow),var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}.outline{outline-style:var(--tw-outline-style);outline-width:1px}.blur{--tw-blur:blur(8px);filter:var(--tw-blur,) var(--tw-brightness,) var(--tw-contrast,) var(--tw-grayscale,) var(--tw-hue-rotate,) var(--tw-invert,) var(--tw-saturate,) var(--tw-sepia,) var(--tw-drop-shadow,)}.outline-none{--tw-outline-style:none;outline-style:none}.select-none{-webkit-user-select:none;user-select:none}.data-disabled\\:pointer-events-none[data-disabled]{pointer-events:none}.data-disabled\\:opacity-40[data-disabled]{opacity:.4}.data-highlighted\\:bg-primary[data-highlighted]{background-color:var(--color-primary)}.data-highlighted\\:text-primary-content[data-highlighted]{color:var(--color-primary-content)}.data-highlighted\\:outline-none[data-highlighted]{--tw-outline-style:none;outline-style:none}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes rotator{89.9999%,to{--first-item-position:0 0%}90%,99.9999%{--first-item-position:0 calc(var(--items) * 100%)}to{translate:0 -100%}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes menu{0%{opacity:0}}@keyframes progress{50%{background-position-x:-115%}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-leading{syntax:"*";inherits:false}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-tracking{syntax:"*";inherits:false}@property --tw-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-shadow-color{syntax:"*";inherits:false}@property --tw-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-inset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-shadow-color{syntax:"*";inherits:false}@property --tw-inset-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-ring-color{syntax:"*";inherits:false}@property --tw-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-inset-ring-color{syntax:"*";inherits:false}@property --tw-inset-ring-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-ring-inset{syntax:"*";inherits:false}@property --tw-ring-offset-width{syntax:"<length>";inherits:false;initial-value:0}@property --tw-ring-offset-color{syntax:"*";inherits:false;initial-value:#fff}@property --tw-ring-offset-shadow{syntax:"*";inherits:false;initial-value:0 0 #0000}@property --tw-outline-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@layer daisyui.l1.l2.l3{.combobox-anchor[data-v-99468997]{cursor:text;border:var(--border) solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);font-size:max(var(--font-size,.875rem),.875rem);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0 / calc(var(--depth) * .1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.combobox-anchor[data-v-99468997]{box-shadow:0 1px color-mix(in oklab,var(--input-color) calc(var(--depth) * 10%),#0000) inset,0 -1px oklch(100% 0 0 / calc(var(--depth) * .1)) inset}}.combobox-anchor[data-v-99468997]{--size:calc(var(--size-field,.25rem) * 10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.combobox-anchor[data-v-99468997]{--input-color:color-mix(in oklab, var(--color-base-content) 20%, #0000)}}.combobox-anchor[data-v-99468997]:where(input){display:inline-flex}.combobox-anchor[data-v-99468997] :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.combobox-anchor[data-v-99468997] :where(input):focus,.combobox-anchor[data-v-99468997] :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.combobox-anchor[data-v-99468997] :where(input):focus,.combobox-anchor[data-v-99468997] :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.combobox-anchor[data-v-99468997] :where(input[type=url]),.combobox-anchor[data-v-99468997] :where(input[type=email]){direction:ltr}.combobox-anchor[data-v-99468997] :where(input[type=date]){display:inline-flex}.combobox-anchor[data-v-99468997]:focus,.combobox-anchor[data-v-99468997]:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.combobox-anchor[data-v-99468997]:focus,.combobox-anchor[data-v-99468997]:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color) calc(var(--depth) * 10%),#0000)}}.combobox-anchor[data-v-99468997]:focus,.combobox-anchor[data-v-99468997]:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate}@media (pointer:coarse){@supports (-webkit-touch-callout:none){.combobox-anchor[data-v-99468997]:focus,.combobox-anchor[data-v-99468997]:focus-within{--font-size:1rem}}}.combobox-anchor[data-v-99468997]:has(>input[disabled]),.combobox-anchor[data-v-99468997]:is(:disabled,[disabled]),fieldset:disabled .combobox-anchor[data-v-99468997]{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.combobox-anchor[data-v-99468997]:has(>input[disabled]),.combobox-anchor[data-v-99468997]:is(:disabled,[disabled]),fieldset:disabled .combobox-anchor[data-v-99468997]{color:color-mix(in oklab,var(--color-base-content) 40%,transparent)}}:is(.combobox-anchor[data-v-99468997]:has(>input[disabled]),.combobox-anchor[data-v-99468997]:is(:disabled,[disabled]),fieldset:disabled .combobox-anchor[data-v-99468997])::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.combobox-anchor[data-v-99468997]:has(>input[disabled]),.combobox-anchor[data-v-99468997]:is(:disabled,[disabled]),fieldset:disabled .combobox-anchor[data-v-99468997])::placeholder{color:color-mix(in oklab,var(--color-base-content) 20%,transparent)}}.combobox-anchor[data-v-99468997]:has(>input[disabled]),.combobox-anchor[data-v-99468997]:is(:disabled,[disabled]),fieldset:disabled .combobox-anchor[data-v-99468997]{box-shadow:none}.combobox-anchor:has(>input[disabled])>input[disabled][data-v-99468997]{cursor:not-allowed}.combobox-anchor[data-v-99468997]::-webkit-date-and-time-value{text-align:inherit}.combobox-anchor[type=number][data-v-99468997]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.combobox-anchor[data-v-99468997]::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.combobox-anchor[data-v-99468997]:has(>input[type=date]) :where(input[type=date]){webkit-appearance:none;appearance:none;display:inline-flex}.combobox-anchor:has(>input[type=date]) input[type=date][data-v-99468997]::-webkit-calendar-picker-indicator{cursor:pointer;width:1em;height:1em;position:absolute;inset-inline-end:.75em}}.combobox-anchor[data-v-99468997]{align-items:center;gap:calc(var(--spacing,.25rem) * 2);width:100%;display:flex}@layer daisyui.l1.l2{.combobox-anchor[data-v-99468997],.combobox-anchor[data-v-99468997]:focus,.combobox-anchor[data-v-99468997]:focus-within{--input-color:var(--color-primary)}}/*! tailwindcss v4.2.2 | MIT License | https://tailwindcss.com */`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Xa(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const i of e.split(",")) t[i] = 1;
  return (i) => i in t;
}
const ot = {}, Oo = [], Fn = () => {
}, ed = () => !1, Qs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Qa = (e) => e.startsWith("onUpdate:"), mt = Object.assign, Hl = (e, t) => {
  const i = e.indexOf(t);
  i > -1 && e.splice(i, 1);
}, kh = Object.prototype.hasOwnProperty, ct = (e, t) => kh.call(e, t), Fe = Array.isArray, To = (e) => qo(e) === "[object Map]", uo = (e) => qo(e) === "[object Set]", Fc = (e) => qo(e) === "[object Date]", Dh = (e) => qo(e) === "[object RegExp]", Ve = (e) => typeof e == "function", xt = (e) => typeof e == "string", Pn = (e) => typeof e == "symbol", ft = (e) => e !== null && typeof e == "object", Wl = (e) => (ft(e) || Ve(e)) && Ve(e.then) && Ve(e.catch), td = Object.prototype.toString, qo = (e) => td.call(e), Fh = (e) => qo(e).slice(8, -1), Ja = (e) => qo(e) === "[object Object]", Za = (e) => xt(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Zi = /* @__PURE__ */ Xa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), eu = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (i) => t[i] || (t[i] = e(i));
}, Mh = /-\w/g, Nt = eu(
  (e) => e.replace(Mh, (t) => t.slice(1).toUpperCase())
), Bh = /\B([A-Z])/g, yn = eu(
  (e) => e.replace(Bh, "-$1").toLowerCase()
), Js = eu((e) => e.charAt(0).toUpperCase() + e.slice(1)), Ao = eu(
  (e) => e ? `on${Js(e)}` : ""
), zt = (e, t) => !Object.is(e, t), Po = (e, ...t) => {
  for (let i = 0; i < e.length; i++)
    e[i](...t);
}, nd = (e, t, i, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: i
  });
}, tu = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ia = (e) => {
  const t = xt(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Mc;
const nu = () => Mc || (Mc = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {}), Lh = "Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt,console,Error,Symbol", jh = /* @__PURE__ */ Xa(Lh);
function lo(e) {
  if (Fe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++) {
      const o = e[i], a = xt(o) ? Vh(o) : lo(o);
      if (a)
        for (const l in a)
          t[l] = a[l];
    }
    return t;
  } else if (xt(e) || ft(e))
    return e;
}
const qh = /;(?![^(]*\))/g, Kh = /:([^]+)/, Uh = /\/\*[^]*?\*\//g;
function Vh(e) {
  const t = {};
  return e.replace(Uh, "").split(qh).forEach((i) => {
    if (i) {
      const o = i.split(Kh);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Zs(e) {
  let t = "";
  if (xt(e))
    t = e;
  else if (Fe(e))
    for (let i = 0; i < e.length; i++) {
      const o = Zs(e[i]);
      o && (t += o + " ");
    }
  else if (ft(e))
    for (const i in e)
      e[i] && (t += i + " ");
  return t.trim();
}
function Gl(e) {
  if (!e) return null;
  let { class: t, style: i } = e;
  return t && !xt(t) && (e.class = Zs(t)), i && (e.style = lo(i)), e;
}
const $h = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Hh = /* @__PURE__ */ Xa($h);
function rd(e) {
  return !!e || e === "";
}
function Wh(e, t) {
  if (e.length !== t.length) return !1;
  let i = !0;
  for (let o = 0; i && o < e.length; o++)
    i = $r(e[o], t[o]);
  return i;
}
function $r(e, t) {
  if (e === t) return !0;
  let i = Fc(e), o = Fc(t);
  if (i || o)
    return i && o ? e.getTime() === t.getTime() : !1;
  if (i = Pn(e), o = Pn(t), i || o)
    return e === t;
  if (i = Fe(e), o = Fe(t), i || o)
    return i && o ? Wh(e, t) : !1;
  if (i = ft(e), o = ft(t), i || o) {
    if (!i || !o)
      return !1;
    const a = Object.keys(e).length, l = Object.keys(t).length;
    if (a !== l)
      return !1;
    for (const f in e) {
      const p = e.hasOwnProperty(f), m = t.hasOwnProperty(f);
      if (p && !m || !p && m || !$r(e[f], t[f]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function ru(e, t) {
  return e.findIndex((i) => $r(i, t));
}
const id = (e) => !!(e && e.__v_isRef === !0), Hr = (e) => xt(e) ? e : e == null ? "" : Fe(e) || ft(e) && (e.toString === td || !Ve(e.toString)) ? id(e) ? Hr(e.value) : JSON.stringify(e, od, 2) : String(e), od = (e, t) => id(t) ? od(e, t.value) : To(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (i, [o, a], l) => (i[zu(o, l) + " =>"] = a, i),
    {}
  )
} : uo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((i) => zu(i))
} : Pn(t) ? zu(t) : ft(t) && !Fe(t) && !Ja(t) ? String(t) : t, zu = (e, t = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pn(e) ? `Symbol(${(i = e.description) != null ? i : t})` : e
  );
};
function Gh(e) {
  return e == null ? "initial" : typeof e == "string" ? e === "" ? " " : e : String(e);
}
/**
* @vue/reactivity v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Zt;
class zl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Zt, !t && Zt && (this.index = (Zt.scopes || (Zt.scopes = [])).push(
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
      const i = Zt;
      try {
        return Zt = this, t();
      } finally {
        Zt = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Zt, Zt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Zt = this.prevScope, this.prevScope = void 0);
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
function ea(e) {
  return new zl(e);
}
function ta() {
  return Zt;
}
function iu(e, t = !1) {
  Zt && Zt.cleanups.push(e);
}
let wt;
const Yu = /* @__PURE__ */ new WeakSet();
class Ls {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Zt && Zt.active && Zt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Yu.has(this) && (Yu.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ad(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Bc(this), ud(this);
    const t = wt, i = Xn;
    wt = this, Xn = !0;
    try {
      return this.fn();
    } finally {
      ld(this), wt = t, Xn = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ql(t);
      this.deps = this.depsTail = void 0, Bc(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Yu.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hl(this) && this.run();
  }
  get dirty() {
    return hl(this);
  }
}
let sd = 0, Ns, Rs;
function ad(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Rs, Rs = e;
    return;
  }
  e.next = Ns, Ns = e;
}
function Yl() {
  sd++;
}
function Xl() {
  if (--sd > 0)
    return;
  if (Rs) {
    let t = Rs;
    for (Rs = void 0; t; ) {
      const i = t.next;
      t.next = void 0, t.flags &= -9, t = i;
    }
  }
  let e;
  for (; Ns; ) {
    let t = Ns;
    for (Ns = void 0; t; ) {
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
function ud(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ld(e) {
  let t, i = e.depsTail, o = i;
  for (; o; ) {
    const a = o.prevDep;
    o.version === -1 ? (o === i && (i = a), Ql(o), zh(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = a;
  }
  e.deps = t, e.depsTail = i;
}
function hl(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (cd(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function cd(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === js) || (e.globalVersion = js, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !hl(e))))
    return;
  e.flags |= 2;
  const t = e.dep, i = wt, o = Xn;
  wt = e, Xn = !0;
  try {
    ud(e);
    const a = e.fn(e._value);
    (t.version === 0 || zt(a, e._value)) && (e.flags |= 128, e._value = a, t.version++);
  } catch (a) {
    throw t.version++, a;
  } finally {
    wt = i, Xn = o, ld(e), e.flags &= -3;
  }
}
function Ql(e, t = !1) {
  const { dep: i, prevSub: o, nextSub: a } = e;
  if (o && (o.nextSub = a, e.prevSub = void 0), a && (a.prevSub = o, e.nextSub = void 0), i.subs === e && (i.subs = o, !o && i.computed)) {
    i.computed.flags &= -5;
    for (let l = i.computed.deps; l; l = l.nextDep)
      Ql(l, !0);
  }
  !t && !--i.sc && i.map && i.map.delete(i.key);
}
function zh(e) {
  const { prevDep: t, nextDep: i } = e;
  t && (t.nextDep = i, e.prevDep = void 0), i && (i.prevDep = t, e.nextDep = void 0);
}
function Yh(e, t) {
  e.effect instanceof Ls && (e = e.effect.fn);
  const i = new Ls(e);
  t && mt(i, t);
  try {
    i.run();
  } catch (a) {
    throw i.stop(), a;
  }
  const o = i.run.bind(i);
  return o.effect = i, o;
}
function Xh(e) {
  e.effect.stop();
}
let Xn = !0;
const fd = [];
function Wr() {
  fd.push(Xn), Xn = !1;
}
function Gr() {
  const e = fd.pop();
  Xn = e === void 0 ? !0 : e;
}
function Bc(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const i = wt;
    wt = void 0;
    try {
      t();
    } finally {
      wt = i;
    }
  }
}
let js = 0;
class Qh {
  constructor(t, i) {
    this.sub = t, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ou {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!wt || !Xn || wt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== wt)
      i = this.activeLink = new Qh(wt, this), wt.deps ? (i.prevDep = wt.depsTail, wt.depsTail.nextDep = i, wt.depsTail = i) : wt.deps = wt.depsTail = i, dd(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const o = i.nextDep;
      o.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = o), i.prevDep = wt.depsTail, i.nextDep = void 0, wt.depsTail.nextDep = i, wt.depsTail = i, wt.deps === i && (wt.deps = o);
    }
    return i;
  }
  trigger(t) {
    this.version++, js++, this.notify(t);
  }
  notify(t) {
    Yl();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      Xl();
    }
  }
}
function dd(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        dd(o);
    }
    const i = e.dep.subs;
    i !== e && (e.prevSub = i, i && (i.nextSub = e)), e.dep.subs = e;
  }
}
const Na = /* @__PURE__ */ new WeakMap(), eo = /* @__PURE__ */ Symbol(
  ""
), ml = /* @__PURE__ */ Symbol(
  ""
), qs = /* @__PURE__ */ Symbol(
  ""
);
function en(e, t, i) {
  if (Xn && wt) {
    let o = Na.get(e);
    o || Na.set(e, o = /* @__PURE__ */ new Map());
    let a = o.get(i);
    a || (o.set(i, a = new ou()), a.map = o, a.key = i), a.track();
  }
}
function qr(e, t, i, o, a, l) {
  const f = Na.get(e);
  if (!f) {
    js++;
    return;
  }
  const p = (m) => {
    m && m.trigger();
  };
  if (Yl(), t === "clear")
    f.forEach(p);
  else {
    const m = Fe(e), _ = m && Za(i);
    if (m && i === "length") {
      const v = Number(o);
      f.forEach((b, k) => {
        (k === "length" || k === qs || !Pn(k) && k >= v) && p(b);
      });
    } else
      switch ((i !== void 0 || f.has(void 0)) && p(f.get(i)), _ && p(f.get(qs)), t) {
        case "add":
          m ? _ && p(f.get("length")) : (p(f.get(eo)), To(e) && p(f.get(ml)));
          break;
        case "delete":
          m || (p(f.get(eo)), To(e) && p(f.get(ml)));
          break;
        case "set":
          To(e) && p(f.get(eo));
          break;
      }
  }
  Xl();
}
function Jh(e, t) {
  const i = Na.get(e);
  return i && i.get(t);
}
function go(e) {
  const t = /* @__PURE__ */ nt(e);
  return t === e ? t : (en(t, "iterate", qs), /* @__PURE__ */ vn(e) ? t : t.map(Jn));
}
function su(e) {
  return en(e = /* @__PURE__ */ nt(e), "iterate", qs), e;
}
function ur(e, t) {
  return /* @__PURE__ */ fr(e) ? Fo(/* @__PURE__ */ Mn(e) ? Jn(t) : t) : Jn(t);
}
const Zh = {
  __proto__: null,
  [Symbol.iterator]() {
    return Xu(this, Symbol.iterator, (e) => ur(this, e));
  },
  concat(...e) {
    return go(this).concat(
      ...e.map((t) => Fe(t) ? go(t) : t)
    );
  },
  entries() {
    return Xu(this, "entries", (e) => (e[1] = ur(this, e[1]), e));
  },
  every(e, t) {
    return Br(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Br(
      this,
      "filter",
      e,
      t,
      (i) => i.map((o) => ur(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Br(
      this,
      "find",
      e,
      t,
      (i) => ur(this, i),
      arguments
    );
  },
  findIndex(e, t) {
    return Br(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Br(
      this,
      "findLast",
      e,
      t,
      (i) => ur(this, i),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Br(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Br(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Qu(this, "includes", e);
  },
  indexOf(...e) {
    return Qu(this, "indexOf", e);
  },
  join(e) {
    return go(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Qu(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Br(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Es(this, "pop");
  },
  push(...e) {
    return Es(this, "push", e);
  },
  reduce(e, ...t) {
    return Lc(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Lc(this, "reduceRight", e, t);
  },
  shift() {
    return Es(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Br(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Es(this, "splice", e);
  },
  toReversed() {
    return go(this).toReversed();
  },
  toSorted(e) {
    return go(this).toSorted(e);
  },
  toSpliced(...e) {
    return go(this).toSpliced(...e);
  },
  unshift(...e) {
    return Es(this, "unshift", e);
  },
  values() {
    return Xu(this, "values", (e) => ur(this, e));
  }
};
function Xu(e, t, i) {
  const o = su(e), a = o[t]();
  return o !== e && !/* @__PURE__ */ vn(e) && (a._next = a.next, a.next = () => {
    const l = a._next();
    return l.done || (l.value = i(l.value)), l;
  }), a;
}
const em = Array.prototype;
function Br(e, t, i, o, a, l) {
  const f = su(e), p = f !== e && !/* @__PURE__ */ vn(e), m = f[t];
  if (m !== em[t]) {
    const b = m.apply(e, l);
    return p ? Jn(b) : b;
  }
  let _ = i;
  f !== e && (p ? _ = function(b, k) {
    return i.call(this, ur(e, b), k, e);
  } : i.length > 2 && (_ = function(b, k) {
    return i.call(this, b, k, e);
  }));
  const v = m.call(f, _, o);
  return p && a ? a(v) : v;
}
function Lc(e, t, i, o) {
  const a = su(e), l = a !== e && !/* @__PURE__ */ vn(e);
  let f = i, p = !1;
  a !== e && (l ? (p = o.length === 0, f = function(_, v, b) {
    return p && (p = !1, _ = ur(e, _)), i.call(this, _, ur(e, v), b, e);
  }) : i.length > 3 && (f = function(_, v, b) {
    return i.call(this, _, v, b, e);
  }));
  const m = a[t](f, ...o);
  return p ? ur(e, m) : m;
}
function Qu(e, t, i) {
  const o = /* @__PURE__ */ nt(e);
  en(o, "iterate", qs);
  const a = o[t](...i);
  return (a === -1 || a === !1) && /* @__PURE__ */ na(i[0]) ? (i[0] = /* @__PURE__ */ nt(i[0]), o[t](...i)) : a;
}
function Es(e, t, i = []) {
  Wr(), Yl();
  const o = (/* @__PURE__ */ nt(e))[t].apply(e, i);
  return Xl(), Gr(), o;
}
const tm = /* @__PURE__ */ Xa("__proto__,__v_isRef,__isVue"), pd = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Pn)
);
function nm(e) {
  Pn(e) || (e = String(e));
  const t = /* @__PURE__ */ nt(this);
  return en(t, "has", e), t.hasOwnProperty(e);
}
class hd {
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
      return o === (a ? l ? _d : bd : l ? gd : vd).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const f = Fe(t);
    if (!a) {
      let m;
      if (f && (m = Zh[i]))
        return m;
      if (i === "hasOwnProperty")
        return nm;
    }
    const p = Reflect.get(
      t,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ _t(t) ? t : o
    );
    if ((Pn(i) ? pd.has(i) : tm(i)) || (a || en(t, "get", i), l))
      return p;
    if (/* @__PURE__ */ _t(p)) {
      const m = f && Za(i) ? p : p.value;
      return a && ft(m) ? /* @__PURE__ */ Ks(m) : m;
    }
    return ft(p) ? a ? /* @__PURE__ */ Ks(p) : /* @__PURE__ */ co(p) : p;
  }
}
class md extends hd {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, i, o, a) {
    let l = t[i];
    const f = Fe(t) && Za(i);
    if (!this._isShallow) {
      const _ = /* @__PURE__ */ fr(l);
      if (!/* @__PURE__ */ vn(o) && !/* @__PURE__ */ fr(o) && (l = /* @__PURE__ */ nt(l), o = /* @__PURE__ */ nt(o)), !f && /* @__PURE__ */ _t(l) && !/* @__PURE__ */ _t(o))
        return _ || (l.value = o), !0;
    }
    const p = f ? Number(i) < t.length : ct(t, i), m = Reflect.set(
      t,
      i,
      o,
      /* @__PURE__ */ _t(t) ? t : a
    );
    return t === /* @__PURE__ */ nt(a) && (p ? zt(o, l) && qr(t, "set", i, o) : qr(t, "add", i, o)), m;
  }
  deleteProperty(t, i) {
    const o = ct(t, i);
    t[i];
    const a = Reflect.deleteProperty(t, i);
    return a && o && qr(t, "delete", i, void 0), a;
  }
  has(t, i) {
    const o = Reflect.has(t, i);
    return (!Pn(i) || !pd.has(i)) && en(t, "has", i), o;
  }
  ownKeys(t) {
    return en(
      t,
      "iterate",
      Fe(t) ? "length" : eo
    ), Reflect.ownKeys(t);
  }
}
class yd extends hd {
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
const rm = /* @__PURE__ */ new md(), im = /* @__PURE__ */ new yd(), om = /* @__PURE__ */ new md(!0), sm = /* @__PURE__ */ new yd(!0), yl = (e) => e, fa = (e) => Reflect.getPrototypeOf(e);
function am(e, t, i) {
  return function(...o) {
    const a = this.__v_raw, l = /* @__PURE__ */ nt(a), f = To(l), p = e === "entries" || e === Symbol.iterator && f, m = e === "keys" && f, _ = a[e](...o), v = i ? yl : t ? Fo : Jn;
    return !t && en(
      l,
      "iterate",
      m ? ml : eo
    ), mt(
      // inheriting all iterator properties
      Object.create(_),
      {
        // iterator protocol
        next() {
          const { value: b, done: k } = _.next();
          return k ? { value: b, done: k } : {
            value: p ? [v(b[0]), v(b[1])] : v(b),
            done: k
          };
        }
      }
    );
  };
}
function da(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function um(e, t) {
  const i = {
    get(a) {
      const l = this.__v_raw, f = /* @__PURE__ */ nt(l), p = /* @__PURE__ */ nt(a);
      e || (zt(a, p) && en(f, "get", a), en(f, "get", p));
      const { has: m } = fa(f), _ = t ? yl : e ? Fo : Jn;
      if (m.call(f, a))
        return _(l.get(a));
      if (m.call(f, p))
        return _(l.get(p));
      l !== f && l.get(a);
    },
    get size() {
      const a = this.__v_raw;
      return !e && en(/* @__PURE__ */ nt(a), "iterate", eo), a.size;
    },
    has(a) {
      const l = this.__v_raw, f = /* @__PURE__ */ nt(l), p = /* @__PURE__ */ nt(a);
      return e || (zt(a, p) && en(f, "has", a), en(f, "has", p)), a === p ? l.has(a) : l.has(a) || l.has(p);
    },
    forEach(a, l) {
      const f = this, p = f.__v_raw, m = /* @__PURE__ */ nt(p), _ = t ? yl : e ? Fo : Jn;
      return !e && en(m, "iterate", eo), p.forEach((v, b) => a.call(l, _(v), _(b), f));
    }
  };
  return mt(
    i,
    e ? {
      add: da("add"),
      set: da("set"),
      delete: da("delete"),
      clear: da("clear")
    } : {
      add(a) {
        const l = /* @__PURE__ */ nt(this), f = fa(l), p = /* @__PURE__ */ nt(a), m = !t && !/* @__PURE__ */ vn(a) && !/* @__PURE__ */ fr(a) ? p : a;
        return f.has.call(l, m) || zt(a, m) && f.has.call(l, a) || zt(p, m) && f.has.call(l, p) || (l.add(m), qr(l, "add", m, m)), this;
      },
      set(a, l) {
        !t && !/* @__PURE__ */ vn(l) && !/* @__PURE__ */ fr(l) && (l = /* @__PURE__ */ nt(l));
        const f = /* @__PURE__ */ nt(this), { has: p, get: m } = fa(f);
        let _ = p.call(f, a);
        _ || (a = /* @__PURE__ */ nt(a), _ = p.call(f, a));
        const v = m.call(f, a);
        return f.set(a, l), _ ? zt(l, v) && qr(f, "set", a, l) : qr(f, "add", a, l), this;
      },
      delete(a) {
        const l = /* @__PURE__ */ nt(this), { has: f, get: p } = fa(l);
        let m = f.call(l, a);
        m || (a = /* @__PURE__ */ nt(a), m = f.call(l, a)), p && p.call(l, a);
        const _ = l.delete(a);
        return m && qr(l, "delete", a, void 0), _;
      },
      clear() {
        const a = /* @__PURE__ */ nt(this), l = a.size !== 0, f = a.clear();
        return l && qr(
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
    i[a] = am(a, e, t);
  }), i;
}
function au(e, t) {
  const i = um(e, t);
  return (o, a, l) => a === "__v_isReactive" ? !e : a === "__v_isReadonly" ? e : a === "__v_raw" ? o : Reflect.get(
    ct(i, a) && a in o ? i : o,
    a,
    l
  );
}
const lm = {
  get: /* @__PURE__ */ au(!1, !1)
}, cm = {
  get: /* @__PURE__ */ au(!1, !0)
}, fm = {
  get: /* @__PURE__ */ au(!0, !1)
}, dm = {
  get: /* @__PURE__ */ au(!0, !0)
}, vd = /* @__PURE__ */ new WeakMap(), gd = /* @__PURE__ */ new WeakMap(), bd = /* @__PURE__ */ new WeakMap(), _d = /* @__PURE__ */ new WeakMap();
function pm(e) {
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
function hm(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pm(Fh(e));
}
// @__NO_SIDE_EFFECTS__
function co(e) {
  return /* @__PURE__ */ fr(e) ? e : uu(
    e,
    !1,
    rm,
    lm,
    vd
  );
}
// @__NO_SIDE_EFFECTS__
function wd(e) {
  return uu(
    e,
    !1,
    om,
    cm,
    gd
  );
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return uu(
    e,
    !0,
    im,
    fm,
    bd
  );
}
// @__NO_SIDE_EFFECTS__
function Qi(e) {
  return uu(
    e,
    !0,
    sm,
    dm,
    _d
  );
}
function uu(e, t, i, o, a) {
  if (!ft(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = hm(e);
  if (l === 0)
    return e;
  const f = a.get(e);
  if (f)
    return f;
  const p = new Proxy(
    e,
    l === 2 ? o : i
  );
  return a.set(e, p), p;
}
// @__NO_SIDE_EFFECTS__
function Mn(e) {
  return /* @__PURE__ */ fr(e) ? /* @__PURE__ */ Mn(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function fr(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function vn(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function na(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function nt(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ nt(t) : e;
}
function ra(e) {
  return !ct(e, "__v_skip") && Object.isExtensible(e) && nd(e, "__v_skip", !0), e;
}
const Jn = (e) => ft(e) ? /* @__PURE__ */ co(e) : e, Fo = (e) => ft(e) ? /* @__PURE__ */ Ks(e) : e;
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function qe(e) {
  return xd(e, !1);
}
// @__NO_SIDE_EFFECTS__
function ia(e) {
  return xd(e, !0);
}
function xd(e, t) {
  return /* @__PURE__ */ _t(e) ? e : new mm(e, t);
}
class mm {
  constructor(t, i) {
    this.dep = new ou(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? t : /* @__PURE__ */ nt(t), this._value = i ? t : Jn(t), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const i = this._rawValue, o = this.__v_isShallow || /* @__PURE__ */ vn(t) || /* @__PURE__ */ fr(t);
    t = o ? t : /* @__PURE__ */ nt(t), zt(t, i) && (this._rawValue = t, this._value = o ? t : Jn(t), this.dep.trigger());
  }
}
function Ed(e) {
  e.dep && e.dep.trigger();
}
function ue(e) {
  return /* @__PURE__ */ _t(e) ? e.value : e;
}
function pn(e) {
  return Ve(e) ? e() : ue(e);
}
const ym = {
  get: (e, t, i) => t === "__v_raw" ? e : ue(Reflect.get(e, t, i)),
  set: (e, t, i, o) => {
    const a = e[t];
    return /* @__PURE__ */ _t(a) && !/* @__PURE__ */ _t(i) ? (a.value = i, !0) : Reflect.set(e, t, i, o);
  }
};
function Jl(e) {
  return /* @__PURE__ */ Mn(e) ? e : new Proxy(e, ym);
}
class vm {
  constructor(t) {
    this.__v_isRef = !0, this._value = void 0;
    const i = this.dep = new ou(), { get: o, set: a } = t(i.track.bind(i), i.trigger.bind(i));
    this._get = o, this._set = a;
  }
  get value() {
    return this._value = this._get();
  }
  set value(t) {
    this._set(t);
  }
}
function Zl(e) {
  return new vm(e);
}
// @__NO_SIDE_EFFECTS__
function fo(e) {
  const t = Fe(e) ? new Array(e.length) : {};
  for (const i in e)
    t[i] = Sd(e, i);
  return t;
}
class gm {
  constructor(t, i, o) {
    this._object = t, this._defaultValue = o, this.__v_isRef = !0, this._value = void 0, this._key = Pn(i) ? i : String(i), this._raw = /* @__PURE__ */ nt(t);
    let a = !0, l = t;
    if (!Fe(t) || Pn(this._key) || !Za(this._key))
      do
        a = !/* @__PURE__ */ na(l) || /* @__PURE__ */ vn(l);
      while (a && (l = l.__v_raw));
    this._shallow = a;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = ue(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ _t(this._raw[this._key])) {
      const i = this._object[this._key];
      if (/* @__PURE__ */ _t(i)) {
        i.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Jh(this._raw, this._key);
  }
}
class bm {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function ec(e, t, i) {
  return /* @__PURE__ */ _t(e) ? e : Ve(e) ? new bm(e) : ft(e) && arguments.length > 1 ? Sd(e, t, i) : /* @__PURE__ */ qe(e);
}
function Sd(e, t, i) {
  return new gm(e, t, i);
}
class _m {
  constructor(t, i, o) {
    this.fn = t, this.setter = i, this._value = void 0, this.dep = new ou(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = js - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    wt !== this)
      return ad(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return cd(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function wm(e, t, i = !1) {
  let o, a;
  return Ve(e) ? o = e : (o = e.get, a = e.set), new _m(o, a, i);
}
const xm = {
  GET: "get",
  HAS: "has",
  ITERATE: "iterate"
}, Em = {
  SET: "set",
  ADD: "add",
  DELETE: "delete",
  CLEAR: "clear"
}, pa = {}, Ra = /* @__PURE__ */ new WeakMap();
let si;
function Sm() {
  return si;
}
function Cd(e, t = !1, i = si) {
  if (i) {
    let o = Ra.get(i);
    o || Ra.set(i, o = []), o.push(e);
  }
}
function Cm(e, t, i = ot) {
  const { immediate: o, deep: a, once: l, scheduler: f, augmentJob: p, call: m } = i, _ = (U) => a ? U : /* @__PURE__ */ vn(U) || a === !1 || a === 0 ? Kr(U, 1) : Kr(U);
  let v, b, k, R, D = !1, M = !1;
  if (/* @__PURE__ */ _t(e) ? (b = () => e.value, D = /* @__PURE__ */ vn(e)) : /* @__PURE__ */ Mn(e) ? (b = () => _(e), D = !0) : Fe(e) ? (M = !0, D = e.some((U) => /* @__PURE__ */ Mn(U) || /* @__PURE__ */ vn(U)), b = () => e.map((U) => {
    if (/* @__PURE__ */ _t(U))
      return U.value;
    if (/* @__PURE__ */ Mn(U))
      return _(U);
    if (Ve(U))
      return m ? m(U, 2) : U();
  })) : Ve(e) ? t ? b = m ? () => m(e, 2) : e : b = () => {
    if (k) {
      Wr();
      try {
        k();
      } finally {
        Gr();
      }
    }
    const U = si;
    si = v;
    try {
      return m ? m(e, 3, [R]) : e(R);
    } finally {
      si = U;
    }
  } : b = Fn, t && a) {
    const U = b, H = a === !0 ? 1 / 0 : a;
    b = () => Kr(U(), H);
  }
  const W = ta(), Q = () => {
    v.stop(), W && W.active && Hl(W.effects, v);
  };
  if (l && t) {
    const U = t;
    t = (...H) => {
      U(...H), Q();
    };
  }
  let $ = M ? new Array(e.length).fill(pa) : pa;
  const L = (U) => {
    if (!(!(v.flags & 1) || !v.dirty && !U))
      if (t) {
        const H = v.run();
        if (a || D || (M ? H.some((te, J) => zt(te, $[J])) : zt(H, $))) {
          k && k();
          const te = si;
          si = v;
          try {
            const J = [
              H,
              // pass undefined as the old value when it's changed for the first time
              $ === pa ? void 0 : M && $[0] === pa ? [] : $,
              R
            ];
            $ = H, m ? m(t, 3, J) : (
              // @ts-expect-error
              t(...J)
            );
          } finally {
            si = te;
          }
        }
      } else
        v.run();
  };
  return p && p(L), v = new Ls(b), v.scheduler = f ? () => f(L, !1) : L, R = (U) => Cd(U, !1, v), k = v.onStop = () => {
    const U = Ra.get(v);
    if (U) {
      if (m)
        m(U, 4);
      else
        for (const H of U) H();
      Ra.delete(v);
    }
  }, t ? o ? L(!0) : $ = v.run() : f ? f(L.bind(null, !0), !0) : v.run(), Q.pause = v.pause.bind(v), Q.resume = v.resume.bind(v), Q.stop = Q, Q;
}
function Kr(e, t = 1 / 0, i) {
  if (t <= 0 || !ft(e) || e.__v_skip || (i = i || /* @__PURE__ */ new Map(), (i.get(e) || 0) >= t))
    return e;
  if (i.set(e, t), t--, /* @__PURE__ */ _t(e))
    Kr(e.value, t, i);
  else if (Fe(e))
    for (let o = 0; o < e.length; o++)
      Kr(e[o], t, i);
  else if (uo(e) || To(e))
    e.forEach((o) => {
      Kr(o, t, i);
    });
  else if (Ja(e)) {
    for (const o in e)
      Kr(e[o], t, i);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Kr(e[o], t, i);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const Od = [];
function Om(e) {
  Od.push(e);
}
function Tm() {
  Od.pop();
}
function Am(e, t) {
}
const Pm = {
  SETUP_FUNCTION: 0,
  0: "SETUP_FUNCTION",
  RENDER_FUNCTION: 1,
  1: "RENDER_FUNCTION",
  NATIVE_EVENT_HANDLER: 5,
  5: "NATIVE_EVENT_HANDLER",
  COMPONENT_EVENT_HANDLER: 6,
  6: "COMPONENT_EVENT_HANDLER",
  VNODE_HOOK: 7,
  7: "VNODE_HOOK",
  DIRECTIVE_HOOK: 8,
  8: "DIRECTIVE_HOOK",
  TRANSITION_HOOK: 9,
  9: "TRANSITION_HOOK",
  APP_ERROR_HANDLER: 10,
  10: "APP_ERROR_HANDLER",
  APP_WARN_HANDLER: 11,
  11: "APP_WARN_HANDLER",
  FUNCTION_REF: 12,
  12: "FUNCTION_REF",
  ASYNC_COMPONENT_LOADER: 13,
  13: "ASYNC_COMPONENT_LOADER",
  SCHEDULER: 14,
  14: "SCHEDULER",
  COMPONENT_UPDATE: 15,
  15: "COMPONENT_UPDATE",
  APP_UNMOUNT_CLEANUP: 16,
  16: "APP_UNMOUNT_CLEANUP"
}, Im = {
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
function Ko(e, t, i, o) {
  try {
    return o ? e(...o) : e();
  } catch (a) {
    po(a, t, i);
  }
}
function jn(e, t, i, o) {
  if (Ve(e)) {
    const a = Ko(e, t, i, o);
    return a && Wl(a) && a.catch((l) => {
      po(l, t, i);
    }), a;
  }
  if (Fe(e)) {
    const a = [];
    for (let l = 0; l < e.length; l++)
      a.push(jn(e[l], t, i, o));
    return a;
  }
}
function po(e, t, i, o = !0) {
  const a = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: f } = t && t.appContext.config || ot;
  if (t) {
    let p = t.parent;
    const m = t.proxy, _ = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; p; ) {
      const v = p.ec;
      if (v) {
        for (let b = 0; b < v.length; b++)
          if (v[b](e, m, _) === !1)
            return;
      }
      p = p.parent;
    }
    if (l) {
      Wr(), Ko(l, null, 10, [
        e,
        m,
        _
      ]), Gr();
      return;
    }
  }
  Nm(e, i, a, o, f);
}
function Nm(e, t, i, o = !0, a = !1) {
  if (a)
    throw e;
  console.error(e);
}
const fn = [];
let or = -1;
const Io = [];
let ai = null, xo = 0;
const Td = /* @__PURE__ */ Promise.resolve();
let ka = null;
function Lt(e) {
  const t = ka || Td;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Rm(e) {
  let t = or + 1, i = fn.length;
  for (; t < i; ) {
    const o = t + i >>> 1, a = fn[o], l = Vs(a);
    l < e || l === e && a.flags & 2 ? t = o + 1 : i = o;
  }
  return t;
}
function tc(e) {
  if (!(e.flags & 1)) {
    const t = Vs(e), i = fn[fn.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Vs(i) ? fn.push(e) : fn.splice(Rm(t), 0, e), e.flags |= 1, Ad();
  }
}
function Ad() {
  ka || (ka = Td.then(Pd));
}
function Us(e) {
  Fe(e) ? Io.push(...e) : ai && e.id === -1 ? ai.splice(xo + 1, 0, e) : e.flags & 1 || (Io.push(e), e.flags |= 1), Ad();
}
function jc(e, t, i = or + 1) {
  for (; i < fn.length; i++) {
    const o = fn[i];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid)
        continue;
      fn.splice(i, 1), i--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function Da(e) {
  if (Io.length) {
    const t = [...new Set(Io)].sort(
      (i, o) => Vs(i) - Vs(o)
    );
    if (Io.length = 0, ai) {
      ai.push(...t);
      return;
    }
    for (ai = t, xo = 0; xo < ai.length; xo++) {
      const i = ai[xo];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    ai = null, xo = 0;
  }
}
const Vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Pd(e) {
  try {
    for (or = 0; or < fn.length; or++) {
      const t = fn[or];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ko(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; or < fn.length; or++) {
      const t = fn[or];
      t && (t.flags &= -2);
    }
    or = -1, fn.length = 0, Da(), ka = null, (fn.length || Io.length) && Pd();
  }
}
let Eo, ha = [];
function Id(e, t) {
  var i, o;
  Eo = e, Eo ? (Eo.enabled = !0, ha.forEach(({ event: a, args: l }) => Eo.emit(a, ...l)), ha = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (i = window.navigator) == null ? void 0 : i.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((l) => {
    Id(l, t);
  }), setTimeout(() => {
    Eo || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, ha = []);
  }, 3e3)) : ha = [];
}
let Xt = null, lu = null;
function $s(e) {
  const t = Xt;
  return Xt = e, lu = e && e.type.__scopeId || null, t;
}
function km(e) {
  lu = e;
}
function Dm() {
  lu = null;
}
const Fm = (e) => Xe;
function Xe(e, t = Xt, i) {
  if (!t || e._n)
    return e;
  const o = (...a) => {
    o._d && Gs(-1);
    const l = $s(t);
    let f;
    try {
      f = e(...a);
    } finally {
      $s(l), o._d && Gs(1);
    }
    return f;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Mm(e, t) {
  if (Xt === null)
    return e;
  const i = la(Xt), o = e.dirs || (e.dirs = []);
  for (let a = 0; a < t.length; a++) {
    let [l, f, p, m = ot] = t[a];
    l && (Ve(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Kr(f), o.push({
      dir: l,
      instance: i,
      value: f,
      oldValue: void 0,
      arg: p,
      modifiers: m
    }));
  }
  return e;
}
function sr(e, t, i, o) {
  const a = e.dirs, l = t && t.dirs;
  for (let f = 0; f < a.length; f++) {
    const p = a[f];
    l && (p.oldValue = l[f].value);
    let m = p.dir[o];
    m && (Wr(), jn(m, i, 8, [
      e.el,
      p,
      e,
      t
    ]), Gr());
  }
}
function cu(e, t) {
  if (Yt) {
    let i = Yt.provides;
    const o = Yt.parent && Yt.parent.provides;
    o === i && (i = Yt.provides = Object.create(o)), i[e] = t;
  }
}
function ui(e, t, i = !1) {
  const o = Rt();
  if (o || to) {
    let a = to ? to._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (a && e in a)
      return a[e];
    if (arguments.length > 1)
      return i && Ve(t) ? t.call(o && o.proxy) : t;
  }
}
function Nd() {
  return !!(Rt() || to);
}
const Rd = /* @__PURE__ */ Symbol.for("v-scx"), kd = () => ui(Rd);
function Zn(e, t) {
  return oa(e, null, t);
}
function nc(e, t) {
  return oa(
    e,
    null,
    { flush: "post" }
  );
}
function rc(e, t) {
  return oa(
    e,
    null,
    { flush: "sync" }
  );
}
function At(e, t, i) {
  return oa(e, t, i);
}
function oa(e, t, i = ot) {
  const { immediate: o, deep: a, flush: l, once: f } = i, p = mt({}, i), m = t && o || !t && l !== "post";
  let _;
  if (io) {
    if (l === "sync") {
      const R = kd();
      _ = R.__watcherHandles || (R.__watcherHandles = []);
    } else if (!m) {
      const R = () => {
      };
      return R.stop = Fn, R.resume = Fn, R.pause = Fn, R;
    }
  }
  const v = Yt;
  p.call = (R, D, M) => jn(R, v, D, M);
  let b = !1;
  l === "post" ? p.scheduler = (R) => {
    Bt(R, v && v.suspense);
  } : l !== "sync" && (b = !0, p.scheduler = (R, D) => {
    D ? R() : tc(R);
  }), p.augmentJob = (R) => {
    t && (R.flags |= 4), b && (R.flags |= 2, v && (R.id = v.uid, R.i = v));
  };
  const k = Cm(e, t, p);
  return io && (_ ? _.push(k) : m && k()), k;
}
function Bm(e, t, i) {
  const o = this.proxy, a = xt(e) ? e.includes(".") ? Dd(o, e) : () => o[e] : e.bind(o, o);
  let l;
  Ve(t) ? l = t : (l = t.handler, i = t);
  const f = Vo(this), p = oa(a, l.bind(o), i);
  return f(), p;
}
function Dd(e, t) {
  const i = t.split(".");
  return () => {
    let o = e;
    for (let a = 0; a < i.length && o; a++)
      o = o[i[a]];
    return o;
  };
}
const Gi = /* @__PURE__ */ new WeakMap(), Fd = /* @__PURE__ */ Symbol("_vte"), Md = (e) => e.__isTeleport, Ji = (e) => e && (e.disabled || e.disabled === ""), Lm = (e) => e && (e.defer || e.defer === ""), qc = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Kc = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, vl = (e, t) => {
  const i = e && e.to;
  return xt(i) ? t ? t(i) : null : i;
}, jm = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, i, o, a, l, f, p, m, _) {
    const {
      mc: v,
      pc: b,
      pbc: k,
      o: { insert: R, querySelector: D, createText: M, createComment: W }
    } = _, Q = Ji(t.props);
    let { dynamicChildren: $ } = t;
    const L = (te, J, ce) => {
      te.shapeFlag & 16 && v(
        te.children,
        J,
        ce,
        a,
        l,
        f,
        p,
        m
      );
    }, U = (te = t) => {
      const J = Ji(te.props), ce = te.target = vl(te.props, D), F = gl(ce, te, M, R);
      ce && (f !== "svg" && qc(ce) ? f = "svg" : f !== "mathml" && Kc(ce) && (f = "mathml"), a && a.isCE && (a.ce._teleportTargets || (a.ce._teleportTargets = /* @__PURE__ */ new Set())).add(ce), J || (L(te, ce, F), As(te, !1)));
    }, H = (te) => {
      const J = () => {
        Gi.get(te) === J && (Gi.delete(te), Ji(te.props) && (L(te, i, te.anchor), As(te, !0)), U(te));
      };
      Gi.set(te, J), Bt(J, l);
    };
    if (e == null) {
      const te = t.el = M(""), J = t.anchor = M("");
      if (R(te, i, o), R(J, i, o), Lm(t.props) || l && l.pendingBranch) {
        H(t);
        return;
      }
      Q && (L(t, i, J), As(t, !0)), U();
    } else {
      t.el = e.el;
      const te = t.anchor = e.anchor, J = Gi.get(e);
      if (J) {
        J.flags |= 8, Gi.delete(e), H(t);
        return;
      }
      t.targetStart = e.targetStart;
      const ce = t.target = e.target, F = t.targetAnchor = e.targetAnchor, le = Ji(e.props), we = le ? i : ce, ne = le ? te : F;
      if (f === "svg" || qc(ce) ? f = "svg" : (f === "mathml" || Kc(ce)) && (f = "mathml"), $ ? (k(
        e.dynamicChildren,
        $,
        we,
        a,
        l,
        f,
        p
      ), mc(e, t, !0)) : m || b(
        e,
        t,
        we,
        ne,
        a,
        l,
        f,
        p,
        !1
      ), Q)
        le ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : ma(
          t,
          i,
          te,
          _,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const _e = t.target = vl(
          t.props,
          D
        );
        _e && ma(
          t,
          _e,
          null,
          _,
          0
        );
      } else le && ma(
        t,
        ce,
        F,
        _,
        1
      );
      As(t, Q);
    }
  },
  remove(e, t, i, { um: o, o: { remove: a } }, l) {
    const {
      shapeFlag: f,
      children: p,
      anchor: m,
      targetStart: _,
      targetAnchor: v,
      target: b,
      props: k
    } = e;
    let R = l || !Ji(k);
    const D = Gi.get(e);
    if (D && (D.flags |= 8, Gi.delete(e), R = !1), b && (a(_), a(v)), l && a(m), f & 16)
      for (let M = 0; M < p.length; M++) {
        const W = p[M];
        o(
          W,
          t,
          i,
          R,
          !!W.dynamicChildren
        );
      }
  },
  move: ma,
  hydrate: qm
};
function ma(e, t, i, { o: { insert: o }, m: a }, l = 2) {
  l === 0 && o(e.targetAnchor, t, i);
  const { el: f, anchor: p, shapeFlag: m, children: _, props: v } = e, b = l === 2;
  if (b && o(f, t, i), (!b || Ji(v)) && m & 16)
    for (let k = 0; k < _.length; k++)
      a(
        _[k],
        t,
        i,
        2
      );
  b && o(p, t, i);
}
function qm(e, t, i, o, a, l, {
  o: { nextSibling: f, parentNode: p, querySelector: m, insert: _, createText: v }
}, b) {
  function k(W, Q) {
    let $ = Q;
    for (; $; ) {
      if ($ && $.nodeType === 8) {
        if ($.data === "teleport start anchor")
          t.targetStart = $;
        else if ($.data === "teleport anchor") {
          t.targetAnchor = $, W._lpa = t.targetAnchor && f(t.targetAnchor);
          break;
        }
      }
      $ = f($);
    }
  }
  function R(W, Q) {
    Q.anchor = b(
      f(W),
      Q,
      p(W),
      i,
      o,
      a,
      l
    );
  }
  const D = t.target = vl(
    t.props,
    m
  ), M = Ji(t.props);
  if (D) {
    const W = D._lpa || D.firstChild;
    t.shapeFlag & 16 && (M ? (R(e, t), k(D, W), t.targetAnchor || gl(
      D,
      t,
      v,
      _,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      p(e) === D ? e : null
    )) : (t.anchor = f(e), k(D, W), t.targetAnchor || gl(D, t, v, _), b(
      W && f(W),
      t,
      D,
      i,
      o,
      a,
      l
    ))), As(t, M);
  } else M && t.shapeFlag & 16 && (R(e, t), t.targetStart = e, t.targetAnchor = f(e));
  return t.anchor && f(t.anchor);
}
const Km = jm;
function As(e, t) {
  const i = e.ctx;
  if (i && i.ut) {
    let o, a;
    for (t ? (o = e.el, a = e.anchor) : (o = e.targetStart, a = e.targetAnchor); o && o !== a; )
      o.nodeType === 1 && o.setAttribute("data-v-owner", i.uid), o = o.nextSibling;
    i.ut();
  }
}
function gl(e, t, i, o, a = null) {
  const l = t.targetStart = i(""), f = t.targetAnchor = i("");
  return l[Fd] = f, e && (o(l, e, a), o(f, e, a)), f;
}
const ar = /* @__PURE__ */ Symbol("_leaveCb"), Ss = /* @__PURE__ */ Symbol("_enterCb");
function ic() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return In(() => {
    e.isMounted = !0;
  }), ua(() => {
    e.isUnmounting = !0;
  }), e;
}
const kn = [Function, Array], oc = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: kn,
  onEnter: kn,
  onAfterEnter: kn,
  onEnterCancelled: kn,
  // leave
  onBeforeLeave: kn,
  onLeave: kn,
  onAfterLeave: kn,
  onLeaveCancelled: kn,
  // appear
  onBeforeAppear: kn,
  onAppear: kn,
  onAfterAppear: kn,
  onAppearCancelled: kn
}, Bd = (e) => {
  const t = e.subTree;
  return t.component ? Bd(t.component) : t;
}, Um = {
  name: "BaseTransition",
  props: oc,
  setup(e, { slots: t }) {
    const i = Rt(), o = ic();
    return () => {
      const a = t.default && fu(t.default(), !0);
      if (!a || !a.length)
        return;
      const l = Ld(a), f = /* @__PURE__ */ nt(e), { mode: p } = f;
      if (o.isLeaving)
        return Ju(l);
      const m = Uc(l);
      if (!m)
        return Ju(l);
      let _ = Mo(
        m,
        f,
        o,
        i,
        // #11061, ensure enterHooks is fresh after clone
        (b) => _ = b
      );
      m.type !== It && zr(m, _);
      let v = i.subTree && Uc(i.subTree);
      if (v && v.type !== It && !Yn(v, m) && Bd(i).type !== It) {
        let b = Mo(
          v,
          f,
          o,
          i
        );
        if (zr(v, b), p === "out-in" && m.type !== It)
          return o.isLeaving = !0, b.afterLeave = () => {
            o.isLeaving = !1, i.job.flags & 8 || i.update(), delete b.afterLeave, v = void 0;
          }, Ju(l);
        p === "in-out" && m.type !== It ? b.delayLeave = (k, R, D) => {
          const M = qd(
            o,
            v
          );
          M[String(v.key)] = v, k[ar] = () => {
            R(), k[ar] = void 0, delete _.delayedLeave, v = void 0;
          }, _.delayedLeave = () => {
            D(), delete _.delayedLeave, v = void 0;
          };
        } : v = void 0;
      } else v && (v = void 0);
      return l;
    };
  }
};
function Ld(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const i of e)
      if (i.type !== It) {
        t = i;
        break;
      }
  }
  return t;
}
const jd = Um;
function qd(e, t) {
  const { leavingVNodes: i } = e;
  let o = i.get(t.type);
  return o || (o = /* @__PURE__ */ Object.create(null), i.set(t.type, o)), o;
}
function Mo(e, t, i, o, a) {
  const {
    appear: l,
    mode: f,
    persisted: p = !1,
    onBeforeEnter: m,
    onEnter: _,
    onAfterEnter: v,
    onEnterCancelled: b,
    onBeforeLeave: k,
    onLeave: R,
    onAfterLeave: D,
    onLeaveCancelled: M,
    onBeforeAppear: W,
    onAppear: Q,
    onAfterAppear: $,
    onAppearCancelled: L
  } = t, U = String(e.key), H = qd(i, e), te = (F, le) => {
    F && jn(
      F,
      o,
      9,
      le
    );
  }, J = (F, le) => {
    const we = le[1];
    te(F, le), Fe(F) ? F.every((ne) => ne.length <= 1) && we() : F.length <= 1 && we();
  }, ce = {
    mode: f,
    persisted: p,
    beforeEnter(F) {
      let le = m;
      if (!i.isMounted)
        if (l)
          le = W || m;
        else
          return;
      F[ar] && F[ar](
        !0
        /* cancelled */
      );
      const we = H[U];
      we && Yn(e, we) && we.el[ar] && we.el[ar](), te(le, [F]);
    },
    enter(F) {
      if (H[U] === e) return;
      let le = _, we = v, ne = b;
      if (!i.isMounted)
        if (l)
          le = Q || _, we = $ || v, ne = L || b;
        else
          return;
      let _e = !1;
      F[Ss] = (ke) => {
        _e || (_e = !0, ke ? te(ne, [F]) : te(we, [F]), ce.delayedLeave && ce.delayedLeave(), F[Ss] = void 0);
      };
      const Re = F[Ss].bind(null, !1);
      le ? J(le, [F, Re]) : Re();
    },
    leave(F, le) {
      const we = String(e.key);
      if (F[Ss] && F[Ss](
        !0
        /* cancelled */
      ), i.isUnmounting)
        return le();
      te(k, [F]);
      let ne = !1;
      F[ar] = (Re) => {
        ne || (ne = !0, le(), Re ? te(M, [F]) : te(D, [F]), F[ar] = void 0, H[we] === e && delete H[we]);
      };
      const _e = F[ar].bind(null, !1);
      H[we] = e, R ? J(R, [F, _e]) : _e();
    },
    clone(F) {
      const le = Mo(
        F,
        t,
        i,
        o,
        a
      );
      return a && a(le), le;
    }
  };
  return ce;
}
function Ju(e) {
  if (sa(e))
    return e = er(e), e.children = null, e;
}
function Uc(e) {
  if (!sa(e))
    return Md(e.type) && e.children ? Ld(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: i } = e;
  if (i) {
    if (t & 16)
      return i[0];
    if (t & 32 && Ve(i.default))
      return i.default();
  }
}
function zr(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, zr(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function fu(e, t = !1, i) {
  let o = [], a = 0;
  for (let l = 0; l < e.length; l++) {
    let f = e[l];
    const p = i == null ? f.key : String(i) + String(f.key != null ? f.key : l);
    f.type === Tt ? (f.patchFlag & 128 && a++, o = o.concat(
      fu(f.children, t, p)
    )) : (t || f.type !== It) && o.push(p != null ? er(f, { key: p }) : f);
  }
  if (a > 1)
    for (let l = 0; l < o.length; l++)
      o[l].patchFlag = -2;
  return o;
}
// @__NO_SIDE_EFFECTS__
function rt(e, t) {
  return Ve(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    mt({ name: e.name }, t, { setup: e })
  ) : e;
}
function Kd() {
  const e = Rt();
  return e ? (e.appContext.config.idPrefix || "v") + "-" + e.ids[0] + e.ids[1]++ : "";
}
function sc(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Vm(e) {
  const t = Rt(), i = /* @__PURE__ */ ia(null);
  if (t) {
    const a = t.refs === ot ? t.refs = {} : t.refs;
    Object.defineProperty(a, e, {
      enumerable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    });
  }
  return i;
}
function Vc(e, t) {
  let i;
  return !!((i = Object.getOwnPropertyDescriptor(e, t)) && !i.configurable);
}
const Fa = /* @__PURE__ */ new WeakMap();
function No(e, t, i, o, a = !1) {
  if (Fe(e)) {
    e.forEach(
      (M, W) => No(
        M,
        t && (Fe(t) ? t[W] : t),
        i,
        o,
        a
      )
    );
    return;
  }
  if (Vr(o) && !a) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && No(e, t, i, o.component.subTree);
    return;
  }
  const l = o.shapeFlag & 4 ? la(o.component) : o.el, f = a ? null : l, { i: p, r: m } = e, _ = t && t.r, v = p.refs === ot ? p.refs = {} : p.refs, b = p.setupState, k = /* @__PURE__ */ nt(b), R = b === ot ? ed : (M) => Vc(v, M) ? !1 : ct(k, M), D = (M, W) => !(W && Vc(v, W));
  if (_ != null && _ !== m) {
    if ($c(t), xt(_))
      v[_] = null, R(_) && (b[_] = null);
    else if (/* @__PURE__ */ _t(_)) {
      const M = t;
      D(_, M.k) && (_.value = null), M.k && (v[M.k] = null);
    }
  }
  if (Ve(m))
    Ko(m, p, 12, [f, v]);
  else {
    const M = xt(m), W = /* @__PURE__ */ _t(m);
    if (M || W) {
      const Q = () => {
        if (e.f) {
          const $ = M ? R(m) ? b[m] : v[m] : D() || !e.k ? m.value : v[e.k];
          if (a)
            Fe($) && Hl($, l);
          else if (Fe($))
            $.includes(l) || $.push(l);
          else if (M)
            v[m] = [l], R(m) && (b[m] = v[m]);
          else {
            const L = [l];
            D(m, e.k) && (m.value = L), e.k && (v[e.k] = L);
          }
        } else M ? (v[m] = f, R(m) && (b[m] = f)) : W && (D(m, e.k) && (m.value = f), e.k && (v[e.k] = f));
      };
      if (f) {
        const $ = () => {
          Q(), Fa.delete(e);
        };
        $.id = -1, Fa.set(e, $), Bt($, i);
      } else
        $c(e), Q();
    }
  }
}
function $c(e) {
  const t = Fa.get(e);
  t && (t.flags |= 8, Fa.delete(e));
}
let Hc = !1;
const bo = () => {
  Hc || (console.error("Hydration completed but contains mismatches."), Hc = !0);
}, $m = (e) => e.namespaceURI.includes("svg") && e.tagName !== "foreignObject", Hm = (e) => e.namespaceURI.includes("MathML"), ya = (e) => {
  if (e.nodeType === 1) {
    if ($m(e)) return "svg";
    if (Hm(e)) return "mathml";
  }
}, Co = (e) => e.nodeType === 8;
function Wm(e) {
  const {
    mt: t,
    p: i,
    o: {
      patchProp: o,
      createText: a,
      nextSibling: l,
      parentNode: f,
      remove: p,
      insert: m,
      createComment: _
    }
  } = e, v = (L, U) => {
    if (!U.hasChildNodes()) {
      i(null, L, U), Da(), U._vnode = L;
      return;
    }
    b(U.firstChild, L, null, null, null), Da(), U._vnode = L;
  }, b = (L, U, H, te, J, ce = !1) => {
    ce = ce || !!U.dynamicChildren;
    const F = Co(L) && L.data === "[", le = () => M(
      L,
      U,
      H,
      te,
      J,
      F
    ), { type: we, ref: ne, shapeFlag: _e, patchFlag: Re } = U;
    let ke = L.nodeType;
    U.el = L, Re === -2 && (ce = !1, U.dynamicChildren = null);
    let me = null;
    switch (we) {
      case li:
        ke !== 3 ? U.children === "" ? (m(U.el = a(""), f(L), L), me = L) : me = le() : (L.data !== U.children && (bo(), L.data = U.children), me = l(L));
        break;
      case It:
        $(L) ? (me = l(L), Q(
          U.el = L.content.firstChild,
          L,
          H
        )) : ke !== 8 || F ? me = le() : me = l(L);
        break;
      case no:
        if (F && (L = l(L), ke = L.nodeType), ke === 1 || ke === 3) {
          me = L;
          const he = !U.children.length;
          for (let be = 0; be < U.staticCount; be++)
            he && (U.children += me.nodeType === 1 ? me.outerHTML : me.data), be === U.staticCount - 1 && (U.anchor = me), me = l(me);
          return F ? l(me) : me;
        } else
          le();
        break;
      case Tt:
        F ? me = D(
          L,
          U,
          H,
          te,
          J,
          ce
        ) : me = le();
        break;
      default:
        if (_e & 1)
          (ke !== 1 || U.type.toLowerCase() !== L.tagName.toLowerCase()) && !$(L) ? me = le() : me = k(
            L,
            U,
            H,
            te,
            J,
            ce
          );
        else if (_e & 6) {
          U.slotScopeIds = J;
          const he = f(L);
          if (F ? me = W(L) : Co(L) && L.data === "teleport start" ? me = W(L, L.data, "teleport end") : me = l(L), t(
            U,
            he,
            null,
            H,
            te,
            ya(he),
            ce
          ), Vr(U) && !U.type.__asyncResolved) {
            let be;
            F ? (be = We(Tt), be.anchor = me ? me.previousSibling : he.lastChild) : be = L.nodeType === 3 ? ho("") : We("div"), be.el = L, U.component.subTree = be;
          }
        } else _e & 64 ? ke !== 8 ? me = le() : me = U.type.hydrate(
          L,
          U,
          H,
          te,
          J,
          ce,
          e,
          R
        ) : _e & 128 && (me = U.type.hydrate(
          L,
          U,
          H,
          te,
          ya(f(L)),
          J,
          ce,
          e,
          b
        ));
    }
    return ne != null && No(ne, null, te, U), me;
  }, k = (L, U, H, te, J, ce) => {
    ce = ce || !!U.dynamicChildren;
    const { type: F, props: le, patchFlag: we, shapeFlag: ne, dirs: _e, transition: Re } = U, ke = F === "input" || F === "option";
    if (ke || we !== -1) {
      _e && sr(U, null, H, "created");
      let me = !1;
      if ($(L)) {
        me = gp(
          null,
          // no need check parentSuspense in hydration
          Re
        ) && H && H.vnode.props && H.vnode.props.appear;
        const be = L.content.firstChild;
        if (me) {
          const je = be.getAttribute("class");
          je && (be.$cls = je), Re.beforeEnter(be);
        }
        Q(be, L, H), U.el = L = be;
      }
      if (ne & 16 && // skip if element has innerHTML / textContent
      !(le && (le.innerHTML || le.textContent))) {
        let be = R(
          L.firstChild,
          U,
          L,
          H,
          te,
          J,
          ce
        );
        for (; be; ) {
          va(
            L,
            1
            /* CHILDREN */
          ) || bo();
          const je = be;
          be = be.nextSibling, p(je);
        }
      } else if (ne & 8) {
        let be = U.children;
        be[0] === `
` && (L.tagName === "PRE" || L.tagName === "TEXTAREA") && (be = be.slice(1));
        const { textContent: je } = L;
        je !== be && // innerHTML normalize \r\n or \r into a single \n in the DOM
        je !== be.replace(/\r\n|\r/g, `
`) && (va(
          L,
          0
          /* TEXT */
        ) || bo(), L.textContent = U.children);
      }
      if (le) {
        if (ke || !ce || we & 48) {
          const be = L.tagName.includes("-");
          for (const je in le)
            (ke && (je.endsWith("value") || je === "indeterminate") || Qs(je) && !Zi(je) || // force hydrate v-bind with .prop modifiers
            je[0] === "." || be && !Zi(je)) && o(L, je, null, le[je], void 0, H);
        } else if (le.onClick)
          o(
            L,
            "onClick",
            null,
            le.onClick,
            void 0,
            H
          );
        else if (we & 4 && /* @__PURE__ */ Mn(le.style))
          for (const be in le.style) le.style[be];
      }
      let he;
      (he = le && le.onVnodeBeforeMount) && hn(he, H, U), _e && sr(U, null, H, "beforeMount"), ((he = le && le.onVnodeMounted) || _e || me) && xp(() => {
        he && hn(he, H, U), me && Re.enter(L), _e && sr(U, null, H, "mounted");
      }, te);
    }
    return L.nextSibling;
  }, R = (L, U, H, te, J, ce, F) => {
    F = F || !!U.dynamicChildren;
    const le = U.children, we = le.length;
    for (let ne = 0; ne < we; ne++) {
      const _e = F ? le[ne] : le[ne] = mn(le[ne]), Re = _e.type === li;
      L ? (Re && !F && ne + 1 < we && mn(le[ne + 1]).type === li && (m(
        a(
          L.data.slice(_e.children.length)
        ),
        H,
        l(L)
      ), L.data = _e.children), L = b(
        L,
        _e,
        te,
        J,
        ce,
        F
      )) : Re && !_e.children ? m(_e.el = a(""), H) : (va(
        H,
        1
        /* CHILDREN */
      ) || bo(), i(
        null,
        _e,
        H,
        null,
        te,
        J,
        ya(H),
        ce
      ));
    }
    return L;
  }, D = (L, U, H, te, J, ce) => {
    const { slotScopeIds: F } = U;
    F && (J = J ? J.concat(F) : F);
    const le = f(L), we = R(
      l(L),
      U,
      le,
      H,
      te,
      J,
      ce
    );
    return we && Co(we) && we.data === "]" ? l(U.anchor = we) : (bo(), m(U.anchor = _("]"), le, we), we);
  }, M = (L, U, H, te, J, ce) => {
    if (va(
      L.parentElement,
      1
      /* CHILDREN */
    ) || bo(), U.el = null, ce) {
      const we = W(L);
      for (; ; ) {
        const ne = l(L);
        if (ne && ne !== we)
          p(ne);
        else
          break;
      }
    }
    const F = l(L), le = f(L);
    return p(L), i(
      null,
      U,
      le,
      F,
      H,
      te,
      ya(le),
      J
    ), H && (H.vnode.el = U.el, hu(H, U.el)), F;
  }, W = (L, U = "[", H = "]") => {
    let te = 0;
    for (; L; )
      if (L = l(L), L && Co(L) && (L.data === U && te++, L.data === H)) {
        if (te === 0)
          return l(L);
        te--;
      }
    return L;
  }, Q = (L, U, H) => {
    const te = U.parentNode;
    te && te.replaceChild(L, U);
    let J = H;
    for (; J; )
      J.vnode.el === U && (J.vnode.el = J.subTree.el = L), J = J.parent;
  }, $ = (L) => L.nodeType === 1 && L.tagName === "TEMPLATE";
  return [v, b];
}
const Wc = "data-allow-mismatch", Gm = {
  0: "text",
  1: "children",
  2: "class",
  3: "style",
  4: "attribute"
};
function va(e, t) {
  if (t === 0 || t === 1)
    for (; e && !e.hasAttribute(Wc); )
      e = e.parentElement;
  const i = e && e.getAttribute(Wc);
  if (i == null)
    return !1;
  if (i === "")
    return !0;
  {
    const o = i.split(",");
    return t === 0 && o.includes("children") ? !0 : o.includes(Gm[t]);
  }
}
const zm = nu().requestIdleCallback || ((e) => setTimeout(e, 1)), Ym = nu().cancelIdleCallback || ((e) => clearTimeout(e)), Xm = (e = 1e4) => (t) => {
  const i = zm(t, { timeout: e });
  return () => Ym(i);
};
function Qm(e) {
  const { top: t, left: i, bottom: o, right: a } = e.getBoundingClientRect(), { innerHeight: l, innerWidth: f } = window;
  return (t > 0 && t < l || o > 0 && o < l) && (i > 0 && i < f || a > 0 && a < f);
}
const Jm = (e) => (t, i) => {
  const o = new IntersectionObserver((a) => {
    for (const l of a)
      if (l.isIntersecting) {
        o.disconnect(), t();
        break;
      }
  }, e);
  return i((a) => {
    if (a instanceof Element) {
      if (Qm(a))
        return t(), o.disconnect(), !1;
      o.observe(a);
    }
  }), () => o.disconnect();
}, Zm = (e) => (t) => {
  if (e) {
    const i = matchMedia(e);
    if (i.matches)
      t();
    else
      return i.addEventListener("change", t, { once: !0 }), () => i.removeEventListener("change", t);
  }
}, ey = (e = []) => (t, i) => {
  xt(e) && (e = [e]);
  let o = !1;
  const a = (f) => {
    o || (o = !0, l(), t(), f.target.dispatchEvent(new f.constructor(f.type, f)));
  }, l = () => {
    i((f) => {
      for (const p of e)
        f.removeEventListener(p, a);
    });
  };
  return i((f) => {
    for (const p of e)
      f.addEventListener(p, a, { once: !0 });
  }), l;
};
function ty(e, t) {
  if (Co(e) && e.data === "[") {
    let i = 1, o = e.nextSibling;
    for (; o; ) {
      if (o.nodeType === 1) {
        if (t(o) === !1)
          break;
      } else if (Co(o))
        if (o.data === "]") {
          if (--i === 0) break;
        } else o.data === "[" && i++;
      o = o.nextSibling;
    }
  } else
    t(e);
}
const Vr = (e) => !!e.type.__asyncLoader;
// @__NO_SIDE_EFFECTS__
function ny(e) {
  Ve(e) && (e = { loader: e });
  const {
    loader: t,
    loadingComponent: i,
    errorComponent: o,
    delay: a = 200,
    hydrate: l,
    timeout: f,
    // undefined = never times out
    suspensible: p = !0,
    onError: m
  } = e;
  let _ = null, v, b = 0;
  const k = () => (b++, _ = null, R()), R = () => {
    let D;
    return _ || (D = _ = t().catch((M) => {
      if (M = M instanceof Error ? M : new Error(String(M)), m)
        return new Promise((W, Q) => {
          m(M, () => W(k()), () => Q(M), b + 1);
        });
      throw M;
    }).then((M) => D !== _ && _ ? _ : (M && (M.__esModule || M[Symbol.toStringTag] === "Module") && (M = M.default), v = M, M)));
  };
  return /* @__PURE__ */ rt({
    name: "AsyncComponentWrapper",
    __asyncLoader: R,
    __asyncHydrate(D, M, W) {
      let Q = !1;
      (M.bu || (M.bu = [])).push(() => Q = !0);
      const $ = () => {
        Q || W();
      }, L = l ? () => {
        const U = l(
          $,
          (H) => ty(D, H)
        );
        U && (M.bum || (M.bum = [])).push(U);
      } : $;
      v ? L() : R().then(() => !M.isUnmounted && L());
    },
    get __asyncResolved() {
      return v;
    },
    setup() {
      const D = Yt;
      if (sc(D), v)
        return () => ga(v, D);
      const M = (L) => {
        _ = null, po(
          L,
          D,
          13,
          !o
        );
      };
      if (p && D.suspense || io)
        return R().then((L) => () => ga(L, D)).catch((L) => (M(L), () => o ? We(o, {
          error: L
        }) : null));
      const W = /* @__PURE__ */ qe(!1), Q = /* @__PURE__ */ qe(), $ = /* @__PURE__ */ qe(!!a);
      return a && setTimeout(() => {
        $.value = !1;
      }, a), f != null && setTimeout(() => {
        if (!W.value && !Q.value) {
          const L = new Error(
            `Async component timed out after ${f}ms.`
          );
          M(L), Q.value = L;
        }
      }, f), R().then(() => {
        W.value = !0, D.parent && sa(D.parent.vnode) && D.parent.update();
      }).catch((L) => {
        M(L), Q.value = L;
      }), () => {
        if (W.value && v)
          return ga(v, D);
        if (Q.value && o)
          return We(o, {
            error: Q.value
          });
        if (i && !$.value)
          return ga(
            i,
            D
          );
      };
    }
  });
}
function ga(e, t) {
  const { ref: i, props: o, children: a, ce: l } = t.vnode, f = We(e, o, a);
  return f.ref = i, f.ce = l, delete t.vnode.ce, f;
}
const sa = (e) => e.type.__isKeepAlive, ry = {
  name: "KeepAlive",
  // Marker for special handling inside the renderer. We are not using a ===
  // check directly on KeepAlive in the renderer, because importing it directly
  // would prevent it from being tree-shaken.
  __isKeepAlive: !0,
  props: {
    include: [String, RegExp, Array],
    exclude: [String, RegExp, Array],
    max: [String, Number]
  },
  setup(e, { slots: t }) {
    const i = Rt(), o = i.ctx;
    if (!o.renderer)
      return () => {
        const $ = t.default && t.default();
        return $ && $.length === 1 ? $[0] : $;
      };
    const a = /* @__PURE__ */ new Map(), l = /* @__PURE__ */ new Set();
    let f = null;
    const p = i.suspense, {
      renderer: {
        p: m,
        m: _,
        um: v,
        o: { createElement: b }
      }
    } = o, k = b("div");
    o.activate = ($, L, U, H, te) => {
      const J = $.component;
      _($, L, U, 0, p), m(
        J.vnode,
        $,
        L,
        U,
        J,
        p,
        H,
        $.slotScopeIds,
        te
      ), Bt(() => {
        J.isDeactivated = !1, J.a && Po(J.a);
        const ce = $.props && $.props.onVnodeMounted;
        ce && hn(ce, J.parent, $);
      }, p);
    }, o.deactivate = ($) => {
      const L = $.component;
      Ba(L.m), Ba(L.a), _($, k, null, 1, p), Bt(() => {
        L.da && Po(L.da);
        const U = $.props && $.props.onVnodeUnmounted;
        U && hn(U, L.parent, $), L.isDeactivated = !0;
      }, p);
    };
    function R($) {
      Zu($), v($, i, p, !0);
    }
    function D($) {
      a.forEach((L, U) => {
        const H = Tl(
          Vr(L) ? L.type.__asyncResolved || {} : L.type
        );
        H && !$(H) && M(U);
      });
    }
    function M($) {
      const L = a.get($);
      L && (!f || !Yn(L, f)) ? R(L) : f && Zu(f), a.delete($), l.delete($);
    }
    At(
      () => [e.include, e.exclude],
      ([$, L]) => {
        $ && D((U) => Ps($, U)), L && D((U) => !Ps(L, U));
      },
      // prune post-render after `current` has been updated
      { flush: "post", deep: !0 }
    );
    let W = null;
    const Q = () => {
      W != null && (La(i.subTree.type) ? Bt(() => {
        a.set(W, ba(i.subTree));
      }, i.subTree.suspense) : a.set(W, ba(i.subTree)));
    };
    return In(Q), aa(Q), ua(() => {
      a.forEach(($) => {
        const { subTree: L, suspense: U } = i, H = ba(L);
        if ($.type === H.type && $.key === H.key) {
          Zu(H);
          const te = H.component.da;
          te && Bt(te, U);
          return;
        }
        R($);
      });
    }), () => {
      if (W = null, !t.default)
        return f = null;
      const $ = t.default(), L = $[0];
      if ($.length > 1)
        return f = null, $;
      if (!Yr(L) || !(L.shapeFlag & 4) && !(L.shapeFlag & 128))
        return f = null, L;
      let U = ba(L);
      if (U.type === It)
        return f = null, U;
      const H = U.type, te = Tl(
        Vr(U) ? U.type.__asyncResolved || {} : H
      ), { include: J, exclude: ce, max: F } = e;
      if (J && (!te || !Ps(J, te)) || ce && te && Ps(ce, te))
        return U.shapeFlag &= -257, f = U, L;
      const le = U.key == null ? H : U.key, we = a.get(le);
      return U.el && (U = er(U), L.shapeFlag & 128 && (L.ssContent = U)), W = le, we ? (U.el = we.el, U.component = we.component, U.transition && zr(U, U.transition), U.shapeFlag |= 512, l.delete(le), l.add(le)) : (l.add(le), F && l.size > parseInt(F, 10) && M(l.values().next().value)), U.shapeFlag |= 256, f = U, La(L.type) ? L : U;
    };
  }
}, iy = ry;
function Ps(e, t) {
  return Fe(e) ? e.some((i) => Ps(i, t)) : xt(e) ? e.split(",").includes(t) : Dh(e) ? (e.lastIndex = 0, e.test(t)) : !1;
}
function Ud(e, t) {
  $d(e, "a", t);
}
function Vd(e, t) {
  $d(e, "da", t);
}
function $d(e, t, i = Yt) {
  const o = e.__wdc || (e.__wdc = () => {
    let a = i;
    for (; a; ) {
      if (a.isDeactivated)
        return;
      a = a.parent;
    }
    return e();
  });
  if (du(t, o, i), i) {
    let a = i.parent;
    for (; a && a.parent; )
      sa(a.parent.vnode) && oy(o, t, i, a), a = a.parent;
  }
}
function oy(e, t, i, o) {
  const a = du(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  dr(() => {
    Hl(o[t], a);
  }, i);
}
function Zu(e) {
  e.shapeFlag &= -257, e.shapeFlag &= -513;
}
function ba(e) {
  return e.shapeFlag & 128 ? e.ssContent : e;
}
function du(e, t, i = Yt, o = !1) {
  if (i) {
    const a = i[e] || (i[e] = []), l = t.__weh || (t.__weh = (...f) => {
      Wr();
      const p = Vo(i), m = jn(t, i, e, f);
      return p(), Gr(), m;
    });
    return o ? a.unshift(l) : a.push(l), l;
  }
}
const Jr = (e) => (t, i = Yt) => {
  (!io || e === "sp") && du(e, (...o) => t(...o), i);
}, Hd = Jr("bm"), In = Jr("m"), ac = Jr(
  "bu"
), aa = Jr("u"), ua = Jr(
  "bum"
), dr = Jr("um"), Wd = Jr(
  "sp"
), Gd = Jr("rtg"), zd = Jr("rtc");
function Yd(e, t = Yt) {
  du("ec", e, t);
}
const uc = "components", sy = "directives";
function ay(e, t) {
  return lc(uc, e, !0, t) || e;
}
const Xd = /* @__PURE__ */ Symbol.for("v-ndc");
function Qd(e) {
  return xt(e) ? lc(uc, e, !1) || e : e || Xd;
}
function uy(e) {
  return lc(sy, e);
}
function lc(e, t, i = !0, o = !1) {
  const a = Xt || Yt;
  if (a) {
    const l = a.type;
    if (e === uc) {
      const p = Tl(
        l,
        !1
      );
      if (p && (p === t || p === Nt(t) || p === Js(Nt(t))))
        return l;
    }
    const f = (
      // local registration
      // check instance[type] first which is resolved for options API
      Gc(a[e] || l[e], t) || // global registration
      Gc(a.appContext[e], t)
    );
    return !f && o ? l : f;
  }
}
function Gc(e, t) {
  return e && (e[t] || e[Nt(t)] || e[Js(Nt(t))]);
}
function cc(e, t, i, o) {
  let a;
  const l = i && i[o], f = Fe(e);
  if (f || xt(e)) {
    const p = f && /* @__PURE__ */ Mn(e);
    let m = !1, _ = !1;
    p && (m = !/* @__PURE__ */ vn(e), _ = /* @__PURE__ */ fr(e), e = su(e)), a = new Array(e.length);
    for (let v = 0, b = e.length; v < b; v++)
      a[v] = t(
        m ? _ ? Fo(Jn(e[v])) : Jn(e[v]) : e[v],
        v,
        void 0,
        l && l[v]
      );
  } else if (typeof e == "number") {
    a = new Array(e);
    for (let p = 0; p < e; p++)
      a[p] = t(p + 1, p, void 0, l && l[p]);
  } else if (ft(e))
    if (e[Symbol.iterator])
      a = Array.from(
        e,
        (p, m) => t(p, m, void 0, l && l[m])
      );
    else {
      const p = Object.keys(e);
      a = new Array(p.length);
      for (let m = 0, _ = p.length; m < _; m++) {
        const v = p[m];
        a[m] = t(e[v], v, m, l && l[m]);
      }
    }
  else
    a = [];
  return i && (i[o] = a), a;
}
function ly(e, t) {
  for (let i = 0; i < t.length; i++) {
    const o = t[i];
    if (Fe(o))
      for (let a = 0; a < o.length; a++)
        e[o[a].name] = o[a].fn;
    else o && (e[o.name] = o.key ? (...a) => {
      const l = o.fn(...a);
      return l && (l.key = o.key), l;
    } : o.fn);
  }
  return e;
}
function St(e, t, i = {}, o, a) {
  if (Xt.ce || Xt.parent && Vr(Xt.parent) && Xt.parent.ce) {
    const _ = Object.keys(i).length > 0;
    return t !== "default" && (i.name = t), Qe(), pt(
      Tt,
      null,
      [We("slot", i, o && o())],
      _ ? -2 : 64
    );
  }
  let l = e[t];
  l && l._c && (l._d = !1), Qe();
  const f = l && fc(l(i)), p = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  f && f.key, m = pt(
    Tt,
    {
      key: (p && !Pn(p) ? p : `_${t}`) + // #7256 force differentiate fallback content from actual content
      (!f && o ? "_fb" : "")
    },
    f || (o ? o() : []),
    f && e._ === 1 ? 64 : -2
  );
  return !a && m.scopeId && (m.slotScopeIds = [m.scopeId + "-s"]), l && l._c && (l._d = !0), m;
}
function fc(e) {
  return e.some((t) => Yr(t) ? !(t.type === It || t.type === Tt && !fc(t.children)) : !0) ? e : null;
}
function cy(e, t) {
  const i = {};
  for (const o in e)
    i[t && /[A-Z]/.test(o) ? `on:${o}` : Ao(o)] = e[o];
  return i;
}
const bl = (e) => e ? Tp(e) ? la(e) : bl(e.parent) : null, ks = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ mt(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => bl(e.parent),
    $root: (e) => bl(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => dc(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      tc(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Lt.bind(e.proxy)),
    $watch: (e) => Bm.bind(e)
  })
), el = (e, t) => e !== ot && !e.__isScriptSetup && ct(e, t), _l = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: i, setupState: o, data: a, props: l, accessCache: f, type: p, appContext: m } = e;
    if (t[0] !== "$") {
      const k = f[t];
      if (k !== void 0)
        switch (k) {
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
        if (el(o, t))
          return f[t] = 1, o[t];
        if (a !== ot && ct(a, t))
          return f[t] = 2, a[t];
        if (ct(l, t))
          return f[t] = 3, l[t];
        if (i !== ot && ct(i, t))
          return f[t] = 4, i[t];
        wl && (f[t] = 0);
      }
    }
    const _ = ks[t];
    let v, b;
    if (_)
      return t === "$attrs" && en(e.attrs, "get", ""), _(e);
    if (
      // css module (injected by vue-loader)
      (v = p.__cssModules) && (v = v[t])
    )
      return v;
    if (i !== ot && ct(i, t))
      return f[t] = 4, i[t];
    if (
      // global properties
      b = m.config.globalProperties, ct(b, t)
    )
      return b[t];
  },
  set({ _: e }, t, i) {
    const { data: o, setupState: a, ctx: l } = e;
    return el(a, t) ? (a[t] = i, !0) : o !== ot && ct(o, t) ? (o[t] = i, !0) : ct(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = i, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: i, ctx: o, appContext: a, props: l, type: f }
  }, p) {
    let m;
    return !!(i[p] || e !== ot && p[0] !== "$" && ct(e, p) || el(t, p) || ct(l, p) || ct(o, p) || ct(ks, p) || ct(a.config.globalProperties, p) || (m = f.__cssModules) && m[p]);
  },
  defineProperty(e, t, i) {
    return i.get != null ? e._.accessCache[t] = 0 : ct(i, "value") && this.set(e, t, i.value, null), Reflect.defineProperty(e, t, i);
  }
}, fy = /* @__PURE__ */ mt({}, _l, {
  get(e, t) {
    if (t !== Symbol.unscopables)
      return _l.get(e, t, e);
  },
  has(e, t) {
    return t[0] !== "_" && !jh(t);
  }
});
function dy() {
  return null;
}
function py() {
  return null;
}
function hy(e) {
}
function my(e) {
}
function yy() {
  return null;
}
function vy() {
}
function gy(e, t) {
  return null;
}
function by() {
  return Jd().slots;
}
function _y() {
  return Jd().attrs;
}
function Jd(e) {
  const t = Rt();
  return t.setupContext || (t.setupContext = Ip(t));
}
function Hs(e) {
  return Fe(e) ? e.reduce(
    (t, i) => (t[i] = null, t),
    {}
  ) : e;
}
function Zd(e, t) {
  const i = Hs(e);
  for (const o in t) {
    if (o.startsWith("__skip")) continue;
    let a = i[o];
    a ? Fe(a) || Ve(a) ? a = i[o] = { type: a, default: t[o] } : a.default = t[o] : a === null && (a = i[o] = { default: t[o] }), a && t[`__skip_${o}`] && (a.skipFactory = !0);
  }
  return i;
}
function ep(e, t) {
  return !e || !t ? e || t : Fe(e) && Fe(t) ? e.concat(t) : mt({}, Hs(e), Hs(t));
}
function wy(e, t) {
  const i = {};
  for (const o in e)
    t.includes(o) || Object.defineProperty(i, o, {
      enumerable: !0,
      get: () => e[o]
    });
  return i;
}
function xy(e) {
  const t = Rt(), i = io;
  let o = e();
  zs(), i && ko(!1);
  const a = () => {
    Vo(t), i && ko(!0);
  }, l = () => {
    Rt() !== t && t.scope.off(), zs(), i && ko(!1);
  };
  return Wl(o) && (o = o.catch((f) => {
    throw a(), Promise.resolve().then(() => Promise.resolve().then(l)), f;
  })), [
    o,
    () => {
      a(), Promise.resolve().then(l);
    }
  ];
}
let wl = !0;
function Ey(e) {
  const t = dc(e), i = e.proxy, o = e.ctx;
  wl = !1, t.beforeCreate && zc(t.beforeCreate, e, "bc");
  const {
    // state
    data: a,
    computed: l,
    methods: f,
    watch: p,
    provide: m,
    inject: _,
    // lifecycle
    created: v,
    beforeMount: b,
    mounted: k,
    beforeUpdate: R,
    updated: D,
    activated: M,
    deactivated: W,
    beforeDestroy: Q,
    beforeUnmount: $,
    destroyed: L,
    unmounted: U,
    render: H,
    renderTracked: te,
    renderTriggered: J,
    errorCaptured: ce,
    serverPrefetch: F,
    // public API
    expose: le,
    inheritAttrs: we,
    // assets
    components: ne,
    directives: _e,
    filters: Re
  } = t;
  if (_ && Sy(_, o, null), f)
    for (const he in f) {
      const be = f[he];
      Ve(be) && (o[he] = be.bind(i));
    }
  if (a) {
    const he = a.call(i, i);
    ft(he) && (e.data = /* @__PURE__ */ co(he));
  }
  if (wl = !0, l)
    for (const he in l) {
      const be = l[he], je = Ve(be) ? be.bind(i, i) : Ve(be.get) ? be.get.bind(i, i) : Fn, tt = !Ve(be) && Ve(be.set) ? be.set.bind(i) : Fn, dt = Le({
        get: je,
        set: tt
      });
      Object.defineProperty(o, he, {
        enumerable: !0,
        configurable: !0,
        get: () => dt.value,
        set: (vt) => dt.value = vt
      });
    }
  if (p)
    for (const he in p)
      tp(p[he], o, i, he);
  if (m) {
    const he = Ve(m) ? m.call(i) : m;
    Reflect.ownKeys(he).forEach((be) => {
      cu(be, he[be]);
    });
  }
  v && zc(v, e, "c");
  function me(he, be) {
    Fe(be) ? be.forEach((je) => he(je.bind(i))) : be && he(be.bind(i));
  }
  if (me(Hd, b), me(In, k), me(ac, R), me(aa, D), me(Ud, M), me(Vd, W), me(Yd, ce), me(zd, te), me(Gd, J), me(ua, $), me(dr, U), me(Wd, F), Fe(le))
    if (le.length) {
      const he = e.exposed || (e.exposed = {});
      le.forEach((be) => {
        Object.defineProperty(he, be, {
          get: () => i[be],
          set: (je) => i[be] = je,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === Fn && (e.render = H), we != null && (e.inheritAttrs = we), ne && (e.components = ne), _e && (e.directives = _e), F && sc(e);
}
function Sy(e, t, i = Fn) {
  Fe(e) && (e = xl(e));
  for (const o in e) {
    const a = e[o];
    let l;
    ft(a) ? "default" in a ? l = ui(
      a.from || o,
      a.default,
      !0
    ) : l = ui(a.from || o) : l = ui(a), /* @__PURE__ */ _t(l) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (f) => l.value = f
    }) : t[o] = l;
  }
}
function zc(e, t, i) {
  jn(
    Fe(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    i
  );
}
function tp(e, t, i, o) {
  let a = o.includes(".") ? Dd(i, o) : () => i[o];
  if (xt(e)) {
    const l = t[e];
    Ve(l) && At(a, l);
  } else if (Ve(e))
    At(a, e.bind(i));
  else if (ft(e))
    if (Fe(e))
      e.forEach((l) => tp(l, t, i, o));
    else {
      const l = Ve(e.handler) ? e.handler.bind(i) : t[e.handler];
      Ve(l) && At(a, l, e);
    }
}
function dc(e) {
  const t = e.type, { mixins: i, extends: o } = t, {
    mixins: a,
    optionsCache: l,
    config: { optionMergeStrategies: f }
  } = e.appContext, p = l.get(t);
  let m;
  return p ? m = p : !a.length && !i && !o ? m = t : (m = {}, a.length && a.forEach(
    (_) => Ma(m, _, f, !0)
  ), Ma(m, t, f)), ft(t) && l.set(t, m), m;
}
function Ma(e, t, i, o = !1) {
  const { mixins: a, extends: l } = t;
  l && Ma(e, l, i, !0), a && a.forEach(
    (f) => Ma(e, f, i, !0)
  );
  for (const f in t)
    if (!(o && f === "expose")) {
      const p = Cy[f] || i && i[f];
      e[f] = p ? p(e[f], t[f]) : t[f];
    }
  return e;
}
const Cy = {
  data: Yc,
  props: Xc,
  emits: Xc,
  // objects
  methods: Is,
  computed: Is,
  // lifecycle
  beforeCreate: cn,
  created: cn,
  beforeMount: cn,
  mounted: cn,
  beforeUpdate: cn,
  updated: cn,
  beforeDestroy: cn,
  beforeUnmount: cn,
  destroyed: cn,
  unmounted: cn,
  activated: cn,
  deactivated: cn,
  errorCaptured: cn,
  serverPrefetch: cn,
  // assets
  components: Is,
  directives: Is,
  // watch
  watch: Ty,
  // provide / inject
  provide: Yc,
  inject: Oy
};
function Yc(e, t) {
  return t ? e ? function() {
    return mt(
      Ve(e) ? e.call(this, this) : e,
      Ve(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Oy(e, t) {
  return Is(xl(e), xl(t));
}
function xl(e) {
  if (Fe(e)) {
    const t = {};
    for (let i = 0; i < e.length; i++)
      t[e[i]] = e[i];
    return t;
  }
  return e;
}
function cn(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Is(e, t) {
  return e ? mt(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Xc(e, t) {
  return e ? Fe(e) && Fe(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : mt(
    /* @__PURE__ */ Object.create(null),
    Hs(e),
    Hs(t ?? {})
  ) : t;
}
function Ty(e, t) {
  if (!e) return t;
  if (!t) return e;
  const i = mt(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    i[o] = cn(e[o], t[o]);
  return i;
}
function np() {
  return {
    app: null,
    config: {
      isNativeTag: ed,
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
let Ay = 0;
function Py(e, t) {
  return function(o, a = null) {
    Ve(o) || (o = mt({}, o)), a != null && !ft(a) && (a = null);
    const l = np(), f = /* @__PURE__ */ new WeakSet(), p = [];
    let m = !1;
    const _ = l.app = {
      _uid: Ay++,
      _component: o,
      _props: a,
      _container: null,
      _context: l,
      _instance: null,
      version: kp,
      get config() {
        return l.config;
      },
      set config(v) {
      },
      use(v, ...b) {
        return f.has(v) || (v && Ve(v.install) ? (f.add(v), v.install(_, ...b)) : Ve(v) && (f.add(v), v(_, ...b))), _;
      },
      mixin(v) {
        return l.mixins.includes(v) || l.mixins.push(v), _;
      },
      component(v, b) {
        return b ? (l.components[v] = b, _) : l.components[v];
      },
      directive(v, b) {
        return b ? (l.directives[v] = b, _) : l.directives[v];
      },
      mount(v, b, k) {
        if (!m) {
          const R = _._ceVNode || We(o, a);
          return R.appContext = l, k === !0 ? k = "svg" : k === !1 && (k = void 0), b && t ? t(R, v) : e(R, v, k), m = !0, _._container = v, v.__vue_app__ = _, la(R.component);
        }
      },
      onUnmount(v) {
        p.push(v);
      },
      unmount() {
        m && (jn(
          p,
          _._instance,
          16
        ), e(null, _._container), delete _._container.__vue_app__);
      },
      provide(v, b) {
        return l.provides[v] = b, _;
      },
      runWithContext(v) {
        const b = to;
        to = _;
        try {
          return v();
        } finally {
          to = b;
        }
      }
    };
    return _;
  };
}
let to = null;
function rp(e, t, i = ot) {
  const o = Rt(), a = Nt(t), l = yn(t), f = ip(e, a), p = Zl((m, _) => {
    let v, b = ot, k;
    return rc(() => {
      const R = e[a];
      zt(v, R) && (v = R, _());
    }), {
      get() {
        return m(), i.get ? i.get(v) : v;
      },
      set(R) {
        const D = i.set ? i.set(R) : R;
        if (!zt(D, v) && !(b !== ot && zt(R, b)))
          return;
        const M = o.vnode.props;
        M && // check if parent has passed v-model
        (t in M || a in M || l in M) && (`onUpdate:${t}` in M || `onUpdate:${a}` in M || `onUpdate:${l}` in M) || (v = R, _()), o.emit(`update:${t}`, D), zt(R, D) && zt(R, b) && !zt(D, k) && _(), b = R, k = D;
      }
    };
  });
  return p[Symbol.iterator] = () => {
    let m = 0;
    return {
      next() {
        return m < 2 ? { value: m++ ? f || ot : p, done: !1 } : { done: !0 };
      }
    };
  }, p;
}
const ip = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Nt(t)}Modifiers`] || e[`${yn(t)}Modifiers`];
function Iy(e, t, ...i) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || ot;
  let a = i;
  const l = t.startsWith("update:"), f = l && ip(o, t.slice(7));
  f && (f.trim && (a = i.map((v) => xt(v) ? v.trim() : v)), f.number && (a = i.map(tu)));
  let p, m = o[p = Ao(t)] || // also try camelCase event handler (#2249)
  o[p = Ao(Nt(t))];
  !m && l && (m = o[p = Ao(yn(t))]), m && jn(
    m,
    e,
    6,
    a
  );
  const _ = o[p + "Once"];
  if (_) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[p])
      return;
    e.emitted[p] = !0, jn(
      _,
      e,
      6,
      a
    );
  }
}
const Ny = /* @__PURE__ */ new WeakMap();
function op(e, t, i = !1) {
  const o = i ? Ny : t.emitsCache, a = o.get(e);
  if (a !== void 0)
    return a;
  const l = e.emits;
  let f = {}, p = !1;
  if (!Ve(e)) {
    const m = (_) => {
      const v = op(_, t, !0);
      v && (p = !0, mt(f, v));
    };
    !i && t.mixins.length && t.mixins.forEach(m), e.extends && m(e.extends), e.mixins && e.mixins.forEach(m);
  }
  return !l && !p ? (ft(e) && o.set(e, null), null) : (Fe(l) ? l.forEach((m) => f[m] = null) : mt(f, l), ft(e) && o.set(e, f), f);
}
function pu(e, t) {
  return !e || !Qs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ct(e, t[0].toLowerCase() + t.slice(1)) || ct(e, yn(t)) || ct(e, t));
}
function Ca(e) {
  const {
    type: t,
    vnode: i,
    proxy: o,
    withProxy: a,
    propsOptions: [l],
    slots: f,
    attrs: p,
    emit: m,
    render: _,
    renderCache: v,
    props: b,
    data: k,
    setupState: R,
    ctx: D,
    inheritAttrs: M
  } = e, W = $s(e);
  let Q, $;
  try {
    if (i.shapeFlag & 4) {
      const U = a || o, H = U;
      Q = mn(
        _.call(
          H,
          U,
          v,
          b,
          R,
          k,
          D
        )
      ), $ = p;
    } else {
      const U = t;
      Q = mn(
        U.length > 1 ? U(
          b,
          { attrs: p, slots: f, emit: m }
        ) : U(
          b,
          null
        )
      ), $ = t.props ? p : ky(p);
    }
  } catch (U) {
    Ds.length = 0, po(U, e, 1), Q = We(It);
  }
  let L = Q;
  if ($ && M !== !1) {
    const U = Object.keys($), { shapeFlag: H } = L;
    U.length && H & 7 && (l && U.some(Qa) && ($ = Dy(
      $,
      l
    )), L = er(L, $, !1, !0));
  }
  return i.dirs && (L = er(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(i.dirs) : i.dirs), i.transition && zr(L, i.transition), Q = L, $s(W), Q;
}
function Ry(e, t = !0) {
  let i;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    if (Yr(a)) {
      if (a.type !== It || a.children === "v-if") {
        if (i)
          return;
        i = a;
      }
    } else
      return;
  }
  return i;
}
const ky = (e) => {
  let t;
  for (const i in e)
    (i === "class" || i === "style" || Qs(i)) && ((t || (t = {}))[i] = e[i]);
  return t;
}, Dy = (e, t) => {
  const i = {};
  for (const o in e)
    (!Qa(o) || !(o.slice(9) in t)) && (i[o] = e[o]);
  return i;
};
function Fy(e, t, i) {
  const { props: o, children: a, component: l } = e, { props: f, children: p, patchFlag: m } = t, _ = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (i && m >= 0) {
    if (m & 1024)
      return !0;
    if (m & 16)
      return o ? Qc(o, f, _) : !!f;
    if (m & 8) {
      const v = t.dynamicProps;
      for (let b = 0; b < v.length; b++) {
        const k = v[b];
        if (sp(f, o, k) && !pu(_, k))
          return !0;
      }
    }
  } else
    return (a || p) && (!p || !p.$stable) ? !0 : o === f ? !1 : o ? f ? Qc(o, f, _) : !0 : !!f;
  return !1;
}
function Qc(e, t, i) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let a = 0; a < o.length; a++) {
    const l = o[a];
    if (sp(t, e, l) && !pu(i, l))
      return !0;
  }
  return !1;
}
function sp(e, t, i) {
  const o = e[i], a = t[i];
  return i === "style" && ft(o) && ft(a) ? !$r(o, a) : o !== a;
}
function hu({ vnode: e, parent: t, suspense: i }, o) {
  for (; t; ) {
    const a = t.subTree;
    if (a.suspense && a.suspense.activeBranch === e && (a.suspense.vnode.el = a.el = o, e = a), a === e)
      (e = t.vnode).el = o, t = t.parent;
    else
      break;
  }
  i && i.activeBranch === e && (i.vnode.el = o);
}
const ap = {}, up = () => Object.create(ap), lp = (e) => Object.getPrototypeOf(e) === ap;
function My(e, t, i, o = !1) {
  const a = {}, l = up();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), cp(e, t, a, l);
  for (const f in e.propsOptions[0])
    f in a || (a[f] = void 0);
  i ? e.props = o ? a : /* @__PURE__ */ wd(a) : e.type.props ? e.props = a : e.props = l, e.attrs = l;
}
function By(e, t, i, o) {
  const {
    props: a,
    attrs: l,
    vnode: { patchFlag: f }
  } = e, p = /* @__PURE__ */ nt(a), [m] = e.propsOptions;
  let _ = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (o || f > 0) && !(f & 16)
  ) {
    if (f & 8) {
      const v = e.vnode.dynamicProps;
      for (let b = 0; b < v.length; b++) {
        let k = v[b];
        if (pu(e.emitsOptions, k))
          continue;
        const R = t[k];
        if (m)
          if (ct(l, k))
            R !== l[k] && (l[k] = R, _ = !0);
          else {
            const D = Nt(k);
            a[D] = El(
              m,
              p,
              D,
              R,
              e,
              !1
            );
          }
        else
          R !== l[k] && (l[k] = R, _ = !0);
      }
    }
  } else {
    cp(e, t, a, l) && (_ = !0);
    let v;
    for (const b in p)
      (!t || // for camelCase
      !ct(t, b) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((v = yn(b)) === b || !ct(t, v))) && (m ? i && // for camelCase
      (i[b] !== void 0 || // for kebab-case
      i[v] !== void 0) && (a[b] = El(
        m,
        p,
        b,
        void 0,
        e,
        !0
      )) : delete a[b]);
    if (l !== p)
      for (const b in l)
        (!t || !ct(t, b)) && (delete l[b], _ = !0);
  }
  _ && qr(e.attrs, "set", "");
}
function cp(e, t, i, o) {
  const [a, l] = e.propsOptions;
  let f = !1, p;
  if (t)
    for (let m in t) {
      if (Zi(m))
        continue;
      const _ = t[m];
      let v;
      a && ct(a, v = Nt(m)) ? !l || !l.includes(v) ? i[v] = _ : (p || (p = {}))[v] = _ : pu(e.emitsOptions, m) || (!(m in o) || _ !== o[m]) && (o[m] = _, f = !0);
    }
  if (l) {
    const m = /* @__PURE__ */ nt(i), _ = p || ot;
    for (let v = 0; v < l.length; v++) {
      const b = l[v];
      i[b] = El(
        a,
        m,
        b,
        _[b],
        e,
        !ct(_, b)
      );
    }
  }
  return f;
}
function El(e, t, i, o, a, l) {
  const f = e[i];
  if (f != null) {
    const p = ct(f, "default");
    if (p && o === void 0) {
      const m = f.default;
      if (f.type !== Function && !f.skipFactory && Ve(m)) {
        const { propsDefaults: _ } = a;
        if (i in _)
          o = _[i];
        else {
          const v = Vo(a);
          o = _[i] = m.call(
            null,
            t
          ), v();
        }
      } else
        o = m;
      a.ce && a.ce._setProp(i, o);
    }
    f[
      0
      /* shouldCast */
    ] && (l && !p ? o = !1 : f[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === yn(i)) && (o = !0));
  }
  return o;
}
const Ly = /* @__PURE__ */ new WeakMap();
function fp(e, t, i = !1) {
  const o = i ? Ly : t.propsCache, a = o.get(e);
  if (a)
    return a;
  const l = e.props, f = {}, p = [];
  let m = !1;
  if (!Ve(e)) {
    const v = (b) => {
      m = !0;
      const [k, R] = fp(b, t, !0);
      mt(f, k), R && p.push(...R);
    };
    !i && t.mixins.length && t.mixins.forEach(v), e.extends && v(e.extends), e.mixins && e.mixins.forEach(v);
  }
  if (!l && !m)
    return ft(e) && o.set(e, Oo), Oo;
  if (Fe(l))
    for (let v = 0; v < l.length; v++) {
      const b = Nt(l[v]);
      Jc(b) && (f[b] = ot);
    }
  else if (l)
    for (const v in l) {
      const b = Nt(v);
      if (Jc(b)) {
        const k = l[v], R = f[b] = Fe(k) || Ve(k) ? { type: k } : mt({}, k), D = R.type;
        let M = !1, W = !0;
        if (Fe(D))
          for (let Q = 0; Q < D.length; ++Q) {
            const $ = D[Q], L = Ve($) && $.name;
            if (L === "Boolean") {
              M = !0;
              break;
            } else L === "String" && (W = !1);
          }
        else
          M = Ve(D) && D.name === "Boolean";
        R[
          0
          /* shouldCast */
        ] = M, R[
          1
          /* shouldCastTrue */
        ] = W, (M || ct(R, "default")) && p.push(b);
      }
    }
  const _ = [f, p];
  return ft(e) && o.set(e, _), _;
}
function Jc(e) {
  return e[0] !== "$" && !Zi(e);
}
const pc = (e) => e === "_" || e === "_ctx" || e === "$stable", hc = (e) => Fe(e) ? e.map(mn) : [mn(e)], jy = (e, t, i) => {
  if (t._n)
    return t;
  const o = Xe((...a) => hc(t(...a)), i);
  return o._c = !1, o;
}, dp = (e, t, i) => {
  const o = e._ctx;
  for (const a in e) {
    if (pc(a)) continue;
    const l = e[a];
    if (Ve(l))
      t[a] = jy(a, l, o);
    else if (l != null) {
      const f = hc(l);
      t[a] = () => f;
    }
  }
}, pp = (e, t) => {
  const i = hc(t);
  e.slots.default = () => i;
}, hp = (e, t, i) => {
  for (const o in t)
    (i || !pc(o)) && (e[o] = t[o]);
}, qy = (e, t, i) => {
  const o = e.slots = up();
  if (e.vnode.shapeFlag & 32) {
    const a = t._;
    a ? (hp(o, t, i), i && nd(o, "_", a, !0)) : dp(t, o);
  } else t && pp(e, t);
}, Ky = (e, t, i) => {
  const { vnode: o, slots: a } = e;
  let l = !0, f = ot;
  if (o.shapeFlag & 32) {
    const p = t._;
    p ? i && p === 1 ? l = !1 : hp(a, t, i) : (l = !t.$stable, dp(t, a)), f = t;
  } else t && (pp(e, t), f = { default: 1 });
  if (l)
    for (const p in a)
      !pc(p) && f[p] == null && delete a[p];
}, Bt = xp;
function mp(e) {
  return vp(e);
}
function yp(e) {
  return vp(e, Wm);
}
function vp(e, t) {
  const i = nu();
  i.__VUE__ = !0;
  const {
    insert: o,
    remove: a,
    patchProp: l,
    createElement: f,
    createText: p,
    createComment: m,
    setText: _,
    setElementText: v,
    parentNode: b,
    nextSibling: k,
    setScopeId: R = Fn,
    insertStaticContent: D
  } = e, M = (j, G, re, ge = null, de = null, pe = null, Te = void 0, Se = null, ye = !!G.dynamicChildren) => {
    if (j === G)
      return;
    j && !Yn(j, G) && (ge = P(j), vt(j, de, pe, !0), j = null), G.patchFlag === -2 && (ye = !1, G.dynamicChildren = null);
    const { type: ve, ref: Me, shapeFlag: Ae } = G;
    switch (ve) {
      case li:
        W(j, G, re, ge);
        break;
      case It:
        Q(j, G, re, ge);
        break;
      case no:
        j == null && $(G, re, ge, Te);
        break;
      case Tt:
        ne(
          j,
          G,
          re,
          ge,
          de,
          pe,
          Te,
          Se,
          ye
        );
        break;
      default:
        Ae & 1 ? H(
          j,
          G,
          re,
          ge,
          de,
          pe,
          Te,
          Se,
          ye
        ) : Ae & 6 ? _e(
          j,
          G,
          re,
          ge,
          de,
          pe,
          Te,
          Se,
          ye
        ) : (Ae & 64 || Ae & 128) && ve.process(
          j,
          G,
          re,
          ge,
          de,
          pe,
          Te,
          Se,
          ye,
          z
        );
    }
    Me != null && de ? No(Me, j && j.ref, pe, G || j, !G) : Me == null && j && j.ref != null && No(j.ref, null, pe, j, !0);
  }, W = (j, G, re, ge) => {
    if (j == null)
      o(
        G.el = p(G.children),
        re,
        ge
      );
    else {
      const de = G.el = j.el;
      G.children !== j.children && _(de, G.children);
    }
  }, Q = (j, G, re, ge) => {
    j == null ? o(
      G.el = m(G.children || ""),
      re,
      ge
    ) : G.el = j.el;
  }, $ = (j, G, re, ge) => {
    [j.el, j.anchor] = D(
      j.children,
      G,
      re,
      ge,
      j.el,
      j.anchor
    );
  }, L = ({ el: j, anchor: G }, re, ge) => {
    let de;
    for (; j && j !== G; )
      de = k(j), o(j, re, ge), j = de;
    o(G, re, ge);
  }, U = ({ el: j, anchor: G }) => {
    let re;
    for (; j && j !== G; )
      re = k(j), a(j), j = re;
    a(G);
  }, H = (j, G, re, ge, de, pe, Te, Se, ye) => {
    if (G.type === "svg" ? Te = "svg" : G.type === "math" && (Te = "mathml"), j == null)
      te(
        G,
        re,
        ge,
        de,
        pe,
        Te,
        Se,
        ye
      );
    else {
      const ve = j.el && j.el._isVueCE ? j.el : null;
      try {
        ve && ve._beginPatch(), F(
          j,
          G,
          de,
          pe,
          Te,
          Se,
          ye
        );
      } finally {
        ve && ve._endPatch();
      }
    }
  }, te = (j, G, re, ge, de, pe, Te, Se) => {
    let ye, ve;
    const { props: Me, shapeFlag: Ae, transition: Ne, dirs: Be } = j;
    if (ye = j.el = f(
      j.type,
      pe,
      Me && Me.is,
      Me
    ), Ae & 8 ? v(ye, j.children) : Ae & 16 && ce(
      j.children,
      ye,
      null,
      ge,
      de,
      tl(j, pe),
      Te,
      Se
    ), Be && sr(j, null, ge, "created"), J(ye, j, j.scopeId, Te, ge), Me) {
      for (const it in Me)
        it !== "value" && !Zi(it) && l(ye, it, null, Me[it], pe, ge);
      "value" in Me && l(ye, "value", null, Me.value, pe), (ve = Me.onVnodeBeforeMount) && hn(ve, ge, j);
    }
    Be && sr(j, null, ge, "beforeMount");
    const He = gp(de, Ne);
    He && Ne.beforeEnter(ye), o(ye, G, re), ((ve = Me && Me.onVnodeMounted) || He || Be) && Bt(() => {
      try {
        ve && hn(ve, ge, j), He && Ne.enter(ye), Be && sr(j, null, ge, "mounted");
      } finally {
      }
    }, de);
  }, J = (j, G, re, ge, de) => {
    if (re && R(j, re), ge)
      for (let pe = 0; pe < ge.length; pe++)
        R(j, ge[pe]);
    if (de) {
      let pe = de.subTree;
      if (G === pe || La(pe.type) && (pe.ssContent === G || pe.ssFallback === G)) {
        const Te = de.vnode;
        J(
          j,
          Te,
          Te.scopeId,
          Te.slotScopeIds,
          de.parent
        );
      }
    }
  }, ce = (j, G, re, ge, de, pe, Te, Se, ye = 0) => {
    for (let ve = ye; ve < j.length; ve++) {
      const Me = j[ve] = Se ? jr(j[ve]) : mn(j[ve]);
      M(
        null,
        Me,
        G,
        re,
        ge,
        de,
        pe,
        Te,
        Se
      );
    }
  }, F = (j, G, re, ge, de, pe, Te) => {
    const Se = G.el = j.el;
    let { patchFlag: ye, dynamicChildren: ve, dirs: Me } = G;
    ye |= j.patchFlag & 16;
    const Ae = j.props || ot, Ne = G.props || ot;
    let Be;
    if (re && zi(re, !1), (Be = Ne.onVnodeBeforeUpdate) && hn(Be, re, G, j), Me && sr(G, j, re, "beforeUpdate"), re && zi(re, !0), (Ae.innerHTML && Ne.innerHTML == null || Ae.textContent && Ne.textContent == null) && v(Se, ""), ve ? le(
      j.dynamicChildren,
      ve,
      Se,
      re,
      ge,
      tl(G, de),
      pe
    ) : Te || be(
      j,
      G,
      Se,
      null,
      re,
      ge,
      tl(G, de),
      pe,
      !1
    ), ye > 0) {
      if (ye & 16)
        we(Se, Ae, Ne, re, de);
      else if (ye & 2 && Ae.class !== Ne.class && l(Se, "class", null, Ne.class, de), ye & 4 && l(Se, "style", Ae.style, Ne.style, de), ye & 8) {
        const He = G.dynamicProps;
        for (let it = 0; it < He.length; it++) {
          const Je = He[it], yt = Ae[Je], ht = Ne[Je];
          (ht !== yt || Je === "value") && l(Se, Je, yt, ht, de, re);
        }
      }
      ye & 1 && j.children !== G.children && v(Se, G.children);
    } else !Te && ve == null && we(Se, Ae, Ne, re, de);
    ((Be = Ne.onVnodeUpdated) || Me) && Bt(() => {
      Be && hn(Be, re, G, j), Me && sr(G, j, re, "updated");
    }, ge);
  }, le = (j, G, re, ge, de, pe, Te) => {
    for (let Se = 0; Se < G.length; Se++) {
      const ye = j[Se], ve = G[Se], Me = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ye.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ye.type === Tt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Yn(ye, ve) || // - In the case of a component, it could contain anything.
        ye.shapeFlag & 198) ? b(ye.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          re
        )
      );
      M(
        ye,
        ve,
        Me,
        null,
        ge,
        de,
        pe,
        Te,
        !0
      );
    }
  }, we = (j, G, re, ge, de) => {
    if (G !== re) {
      if (G !== ot)
        for (const pe in G)
          !Zi(pe) && !(pe in re) && l(
            j,
            pe,
            G[pe],
            null,
            de,
            ge
          );
      for (const pe in re) {
        if (Zi(pe)) continue;
        const Te = re[pe], Se = G[pe];
        Te !== Se && pe !== "value" && l(j, pe, Se, Te, de, ge);
      }
      "value" in re && l(j, "value", G.value, re.value, de);
    }
  }, ne = (j, G, re, ge, de, pe, Te, Se, ye) => {
    const ve = G.el = j ? j.el : p(""), Me = G.anchor = j ? j.anchor : p("");
    let { patchFlag: Ae, dynamicChildren: Ne, slotScopeIds: Be } = G;
    Be && (Se = Se ? Se.concat(Be) : Be), j == null ? (o(ve, re, ge), o(Me, re, ge), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      G.children || [],
      re,
      Me,
      de,
      pe,
      Te,
      Se,
      ye
    )) : Ae > 0 && Ae & 64 && Ne && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    j.dynamicChildren && j.dynamicChildren.length === Ne.length ? (le(
      j.dynamicChildren,
      Ne,
      re,
      de,
      pe,
      Te,
      Se
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (G.key != null || de && G === de.subTree) && mc(
      j,
      G,
      !0
      /* shallow */
    )) : be(
      j,
      G,
      re,
      Me,
      de,
      pe,
      Te,
      Se,
      ye
    );
  }, _e = (j, G, re, ge, de, pe, Te, Se, ye) => {
    G.slotScopeIds = Se, j == null ? G.shapeFlag & 512 ? de.ctx.activate(
      G,
      re,
      ge,
      Te,
      ye
    ) : Re(
      G,
      re,
      ge,
      de,
      pe,
      Te,
      ye
    ) : ke(j, G, ye);
  }, Re = (j, G, re, ge, de, pe, Te) => {
    const Se = j.component = Op(
      j,
      ge,
      de
    );
    if (sa(j) && (Se.ctx.renderer = z), Ap(Se, !1, Te), Se.asyncDep) {
      if (de && de.registerDep(Se, me, Te), !j.el) {
        const ye = Se.subTree = We(It);
        Q(null, ye, G, re), j.placeholder = ye.el;
      }
    } else
      me(
        Se,
        j,
        G,
        re,
        de,
        pe,
        Te
      );
  }, ke = (j, G, re) => {
    const ge = G.component = j.component;
    if (Fy(j, G, re))
      if (ge.asyncDep && !ge.asyncResolved) {
        he(ge, G, re);
        return;
      } else
        ge.next = G, ge.update();
    else
      G.el = j.el, ge.vnode = G;
  }, me = (j, G, re, ge, de, pe, Te) => {
    const Se = () => {
      if (j.isMounted) {
        let { next: Ae, bu: Ne, u: Be, parent: He, vnode: it } = j;
        {
          const Ot = bp(j);
          if (Ot) {
            Ae && (Ae.el = it.el, he(j, Ae, Te)), Ot.asyncDep.then(() => {
              Bt(() => {
                j.isUnmounted || ve();
              }, de);
            });
            return;
          }
        }
        let Je = Ae, yt;
        zi(j, !1), Ae ? (Ae.el = it.el, he(j, Ae, Te)) : Ae = it, Ne && Po(Ne), (yt = Ae.props && Ae.props.onVnodeBeforeUpdate) && hn(yt, He, Ae, it), zi(j, !0);
        const ht = Ca(j), gt = j.subTree;
        j.subTree = ht, M(
          gt,
          ht,
          // parent may have changed if it's in a teleport
          b(gt.el),
          // anchor may have changed if it's in a fragment
          P(gt),
          j,
          de,
          pe
        ), Ae.el = ht.el, Je === null && hu(j, ht.el), Be && Bt(Be, de), (yt = Ae.props && Ae.props.onVnodeUpdated) && Bt(
          () => hn(yt, He, Ae, it),
          de
        );
      } else {
        let Ae;
        const { el: Ne, props: Be } = G, { bm: He, m: it, parent: Je, root: yt, type: ht } = j, gt = Vr(G);
        if (zi(j, !1), He && Po(He), !gt && (Ae = Be && Be.onVnodeBeforeMount) && hn(Ae, Je, G), zi(j, !0), Ne && Ce) {
          const Ot = () => {
            j.subTree = Ca(j), Ce(
              Ne,
              j.subTree,
              j,
              de,
              null
            );
          };
          gt && ht.__asyncHydrate ? ht.__asyncHydrate(
            Ne,
            j,
            Ot
          ) : Ot();
        } else {
          yt.ce && yt.ce._hasShadowRoot() && yt.ce._injectChildStyle(
            ht,
            j.parent ? j.parent.type : void 0
          );
          const Ot = j.subTree = Ca(j);
          M(
            null,
            Ot,
            re,
            ge,
            j,
            de,
            pe
          ), G.el = Ot.el;
        }
        if (it && Bt(it, de), !gt && (Ae = Be && Be.onVnodeMounted)) {
          const Ot = G;
          Bt(
            () => hn(Ae, Je, Ot),
            de
          );
        }
        (G.shapeFlag & 256 || Je && Vr(Je.vnode) && Je.vnode.shapeFlag & 256) && j.a && Bt(j.a, de), j.isMounted = !0, G = re = ge = null;
      }
    };
    j.scope.on();
    const ye = j.effect = new Ls(Se);
    j.scope.off();
    const ve = j.update = ye.run.bind(ye), Me = j.job = ye.runIfDirty.bind(ye);
    Me.i = j, Me.id = j.uid, ye.scheduler = () => tc(Me), zi(j, !0), ve();
  }, he = (j, G, re) => {
    G.component = j;
    const ge = j.vnode.props;
    j.vnode = G, j.next = null, By(j, G.props, ge, re), Ky(j, G.children, re), Wr(), jc(j), Gr();
  }, be = (j, G, re, ge, de, pe, Te, Se, ye = !1) => {
    const ve = j && j.children, Me = j ? j.shapeFlag : 0, Ae = G.children, { patchFlag: Ne, shapeFlag: Be } = G;
    if (Ne > 0) {
      if (Ne & 128) {
        tt(
          ve,
          Ae,
          re,
          ge,
          de,
          pe,
          Te,
          Se,
          ye
        );
        return;
      } else if (Ne & 256) {
        je(
          ve,
          Ae,
          re,
          ge,
          de,
          pe,
          Te,
          Se,
          ye
        );
        return;
      }
    }
    Be & 8 ? (Me & 16 && Ct(ve, de, pe), Ae !== ve && v(re, Ae)) : Me & 16 ? Be & 16 ? tt(
      ve,
      Ae,
      re,
      ge,
      de,
      pe,
      Te,
      Se,
      ye
    ) : Ct(ve, de, pe, !0) : (Me & 8 && v(re, ""), Be & 16 && ce(
      Ae,
      re,
      ge,
      de,
      pe,
      Te,
      Se,
      ye
    ));
  }, je = (j, G, re, ge, de, pe, Te, Se, ye) => {
    j = j || Oo, G = G || Oo;
    const ve = j.length, Me = G.length, Ae = Math.min(ve, Me);
    let Ne;
    for (Ne = 0; Ne < Ae; Ne++) {
      const Be = G[Ne] = ye ? jr(G[Ne]) : mn(G[Ne]);
      M(
        j[Ne],
        Be,
        re,
        null,
        de,
        pe,
        Te,
        Se,
        ye
      );
    }
    ve > Me ? Ct(
      j,
      de,
      pe,
      !0,
      !1,
      Ae
    ) : ce(
      G,
      re,
      ge,
      de,
      pe,
      Te,
      Se,
      ye,
      Ae
    );
  }, tt = (j, G, re, ge, de, pe, Te, Se, ye) => {
    let ve = 0;
    const Me = G.length;
    let Ae = j.length - 1, Ne = Me - 1;
    for (; ve <= Ae && ve <= Ne; ) {
      const Be = j[ve], He = G[ve] = ye ? jr(G[ve]) : mn(G[ve]);
      if (Yn(Be, He))
        M(
          Be,
          He,
          re,
          null,
          de,
          pe,
          Te,
          Se,
          ye
        );
      else
        break;
      ve++;
    }
    for (; ve <= Ae && ve <= Ne; ) {
      const Be = j[Ae], He = G[Ne] = ye ? jr(G[Ne]) : mn(G[Ne]);
      if (Yn(Be, He))
        M(
          Be,
          He,
          re,
          null,
          de,
          pe,
          Te,
          Se,
          ye
        );
      else
        break;
      Ae--, Ne--;
    }
    if (ve > Ae) {
      if (ve <= Ne) {
        const Be = Ne + 1, He = Be < Me ? G[Be].el : ge;
        for (; ve <= Ne; )
          M(
            null,
            G[ve] = ye ? jr(G[ve]) : mn(G[ve]),
            re,
            He,
            de,
            pe,
            Te,
            Se,
            ye
          ), ve++;
      }
    } else if (ve > Ne)
      for (; ve <= Ae; )
        vt(j[ve], de, pe, !0), ve++;
    else {
      const Be = ve, He = ve, it = /* @__PURE__ */ new Map();
      for (ve = He; ve <= Ne; ve++) {
        const fe = G[ve] = ye ? jr(G[ve]) : mn(G[ve]);
        fe.key != null && it.set(fe.key, ve);
      }
      let Je, yt = 0;
      const ht = Ne - He + 1;
      let gt = !1, Ot = 0;
      const bn = new Array(ht);
      for (ve = 0; ve < ht; ve++) bn[ve] = 0;
      for (ve = Be; ve <= Ae; ve++) {
        const fe = j[ve];
        if (yt >= ht) {
          vt(fe, de, pe, !0);
          continue;
        }
        let Pt;
        if (fe.key != null)
          Pt = it.get(fe.key);
        else
          for (Je = He; Je <= Ne; Je++)
            if (bn[Je - He] === 0 && Yn(fe, G[Je])) {
              Pt = Je;
              break;
            }
        Pt === void 0 ? vt(fe, de, pe, !0) : (bn[Pt - He] = ve + 1, Pt >= Ot ? Ot = Pt : gt = !0, M(
          fe,
          G[Pt],
          re,
          null,
          de,
          pe,
          Te,
          Se,
          ye
        ), yt++);
      }
      const Mt = gt ? Uy(bn) : Oo;
      for (Je = Mt.length - 1, ve = ht - 1; ve >= 0; ve--) {
        const fe = He + ve, Pt = G[fe], Kt = G[fe + 1], Nn = fe + 1 < Me ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Kt.el || _p(Kt)
        ) : ge;
        bn[ve] === 0 ? M(
          null,
          Pt,
          re,
          Nn,
          de,
          pe,
          Te,
          Se,
          ye
        ) : gt && (Je < 0 || ve !== Mt[Je] ? dt(Pt, re, Nn, 2) : Je--);
      }
    }
  }, dt = (j, G, re, ge, de = null) => {
    const { el: pe, type: Te, transition: Se, children: ye, shapeFlag: ve } = j;
    if (ve & 6) {
      dt(j.component.subTree, G, re, ge);
      return;
    }
    if (ve & 128) {
      j.suspense.move(G, re, ge);
      return;
    }
    if (ve & 64) {
      Te.move(j, G, re, z);
      return;
    }
    if (Te === Tt) {
      o(pe, G, re);
      for (let Ae = 0; Ae < ye.length; Ae++)
        dt(ye[Ae], G, re, ge);
      o(j.anchor, G, re);
      return;
    }
    if (Te === no) {
      L(j, G, re);
      return;
    }
    if (ge !== 2 && ve & 1 && Se)
      if (ge === 0)
        Se.beforeEnter(pe), o(pe, G, re), Bt(() => Se.enter(pe), de);
      else {
        const { leave: Ae, delayLeave: Ne, afterLeave: Be } = Se, He = () => {
          j.ctx.isUnmounted ? a(pe) : o(pe, G, re);
        }, it = () => {
          pe._isLeaving && pe[ar](
            !0
            /* cancelled */
          ), Ae(pe, () => {
            He(), Be && Be();
          });
        };
        Ne ? Ne(pe, He, it) : it();
      }
    else
      o(pe, G, re);
  }, vt = (j, G, re, ge = !1, de = !1) => {
    const {
      type: pe,
      props: Te,
      ref: Se,
      children: ye,
      dynamicChildren: ve,
      shapeFlag: Me,
      patchFlag: Ae,
      dirs: Ne,
      cacheIndex: Be,
      memo: He
    } = j;
    if (Ae === -2 && (de = !1), Se != null && (Wr(), No(Se, null, re, j, !0), Gr()), Be != null && (G.renderCache[Be] = void 0), Me & 256) {
      G.ctx.deactivate(j);
      return;
    }
    const it = Me & 1 && Ne, Je = !Vr(j);
    let yt;
    if (Je && (yt = Te && Te.onVnodeBeforeUnmount) && hn(yt, G, j), Me & 6)
      Jt(j.component, re, ge);
    else {
      if (Me & 128) {
        j.suspense.unmount(re, ge);
        return;
      }
      it && sr(j, null, G, "beforeUnmount"), Me & 64 ? j.type.remove(
        j,
        G,
        re,
        z,
        ge
      ) : ve && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ve.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (pe !== Tt || Ae > 0 && Ae & 64) ? Ct(
        ve,
        G,
        re,
        !1,
        !0
      ) : (pe === Tt && Ae & 384 || !de && Me & 16) && Ct(ye, G, re), ge && Ft(j);
    }
    const ht = He != null && Be == null;
    (Je && (yt = Te && Te.onVnodeUnmounted) || it || ht) && Bt(() => {
      yt && hn(yt, G, j), it && sr(j, null, G, "unmounted"), ht && (j.el = null);
    }, re);
  }, Ft = (j) => {
    const { type: G, el: re, anchor: ge, transition: de } = j;
    if (G === Tt) {
      gn(re, ge);
      return;
    }
    if (G === no) {
      U(j);
      return;
    }
    const pe = () => {
      a(re), de && !de.persisted && de.afterLeave && de.afterLeave();
    };
    if (j.shapeFlag & 1 && de && !de.persisted) {
      const { leave: Te, delayLeave: Se } = de, ye = () => Te(re, pe);
      Se ? Se(j.el, pe, ye) : ye();
    } else
      pe();
  }, gn = (j, G) => {
    let re;
    for (; j !== G; )
      re = k(j), a(j), j = re;
    a(G);
  }, Jt = (j, G, re) => {
    const { bum: ge, scope: de, job: pe, subTree: Te, um: Se, m: ye, a: ve } = j;
    Ba(ye), Ba(ve), ge && Po(ge), de.stop(), pe && (pe.flags |= 8, vt(Te, j, G, re)), Se && Bt(Se, G), Bt(() => {
      j.isUnmounted = !0;
    }, G);
  }, Ct = (j, G, re, ge = !1, de = !1, pe = 0) => {
    for (let Te = pe; Te < j.length; Te++)
      vt(j[Te], G, re, ge, de);
  }, P = (j) => {
    if (j.shapeFlag & 6)
      return P(j.component.subTree);
    if (j.shapeFlag & 128)
      return j.suspense.next();
    const G = k(j.anchor || j.el), re = G && G[Fd];
    return re ? k(re) : G;
  };
  let E = !1;
  const V = (j, G, re) => {
    let ge;
    j == null ? G._vnode && (vt(G._vnode, null, null, !0), ge = G._vnode.component) : M(
      G._vnode || null,
      j,
      G,
      null,
      null,
      null,
      re
    ), G._vnode = j, E || (E = !0, jc(ge), Da(), E = !1);
  }, z = {
    p: M,
    um: vt,
    m: dt,
    r: Ft,
    mt: Re,
    mc: ce,
    pc: be,
    pbc: le,
    n: P,
    o: e
  };
  let Ke, Ce;
  return t && ([Ke, Ce] = t(
    z
  )), {
    render: V,
    hydrate: Ke,
    createApp: Py(V, Ke)
  };
}
function tl({ type: e, props: t }, i) {
  return i === "svg" && e === "foreignObject" || i === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : i;
}
function zi({ effect: e, job: t }, i) {
  i ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function gp(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function mc(e, t, i = !1) {
  const o = e.children, a = t.children;
  if (Fe(o) && Fe(a))
    for (let l = 0; l < o.length; l++) {
      const f = o[l];
      let p = a[l];
      p.shapeFlag & 1 && !p.dynamicChildren && ((p.patchFlag <= 0 || p.patchFlag === 32) && (p = a[l] = jr(a[l]), p.el = f.el), !i && p.patchFlag !== -2 && mc(f, p)), p.type === li && (p.patchFlag === -1 && (p = a[l] = jr(p)), p.el = f.el), p.type === It && !p.el && (p.el = f.el);
    }
}
function Uy(e) {
  const t = e.slice(), i = [0];
  let o, a, l, f, p;
  const m = e.length;
  for (o = 0; o < m; o++) {
    const _ = e[o];
    if (_ !== 0) {
      if (a = i[i.length - 1], e[a] < _) {
        t[o] = a, i.push(o);
        continue;
      }
      for (l = 0, f = i.length - 1; l < f; )
        p = l + f >> 1, e[i[p]] < _ ? l = p + 1 : f = p;
      _ < e[i[l]] && (l > 0 && (t[o] = i[l - 1]), i[l] = o);
    }
  }
  for (l = i.length, f = i[l - 1]; l-- > 0; )
    i[l] = f, f = t[f];
  return i;
}
function bp(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : bp(t);
}
function Ba(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _p(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _p(t.subTree) : null;
}
const La = (e) => e.__isSuspense;
let Sl = 0;
const Vy = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(e, t, i, o, a, l, f, p, m, _) {
    if (e == null)
      Hy(
        t,
        i,
        o,
        a,
        l,
        f,
        p,
        m,
        _
      );
    else {
      if (l && l.deps > 0 && !e.suspense.isInFallback) {
        t.suspense = e.suspense, t.suspense.vnode = t, t.el = e.el;
        return;
      }
      Wy(
        e,
        t,
        i,
        o,
        a,
        f,
        p,
        m,
        _
      );
    }
  },
  hydrate: Gy,
  normalize: zy
}, $y = Vy;
function Ws(e, t) {
  const i = e.props && e.props[t];
  Ve(i) && i();
}
function Hy(e, t, i, o, a, l, f, p, m) {
  const {
    p: _,
    o: { createElement: v }
  } = m, b = v("div"), k = e.suspense = wp(
    e,
    a,
    o,
    t,
    b,
    i,
    l,
    f,
    p,
    m
  );
  _(
    null,
    k.pendingBranch = e.ssContent,
    b,
    null,
    o,
    k,
    l,
    f
  ), k.deps > 0 ? (Ws(e, "onPending"), Ws(e, "onFallback"), _(
    null,
    e.ssFallback,
    t,
    i,
    o,
    null,
    // fallback tree will not have suspense context
    l,
    f
  ), Ro(k, e.ssFallback)) : k.resolve(!1, !0);
}
function Wy(e, t, i, o, a, l, f, p, { p: m, um: _, o: { createElement: v } }) {
  const b = t.suspense = e.suspense;
  b.vnode = t, t.el = e.el;
  const k = t.ssContent, R = t.ssFallback, { activeBranch: D, pendingBranch: M, isInFallback: W, isHydrating: Q } = b;
  if (M)
    b.pendingBranch = k, Yn(M, k) ? (m(
      M,
      k,
      b.hiddenContainer,
      null,
      a,
      b,
      l,
      f,
      p
    ), b.deps <= 0 ? b.resolve() : W && (Q || (m(
      D,
      R,
      i,
      o,
      a,
      null,
      // fallback tree will not have suspense context
      l,
      f,
      p
    ), Ro(b, R)))) : (b.pendingId = Sl++, Q ? (b.isHydrating = !1, b.activeBranch = M) : _(M, a, b), b.deps = 0, b.effects.length = 0, b.hiddenContainer = v("div"), W ? (m(
      null,
      k,
      b.hiddenContainer,
      null,
      a,
      b,
      l,
      f,
      p
    ), b.deps <= 0 ? b.resolve() : (m(
      D,
      R,
      i,
      o,
      a,
      null,
      // fallback tree will not have suspense context
      l,
      f,
      p
    ), Ro(b, R))) : D && Yn(D, k) ? (m(
      D,
      k,
      i,
      o,
      a,
      b,
      l,
      f,
      p
    ), b.resolve(!0)) : (m(
      null,
      k,
      b.hiddenContainer,
      null,
      a,
      b,
      l,
      f,
      p
    ), b.deps <= 0 && b.resolve()));
  else if (D && Yn(D, k))
    m(
      D,
      k,
      i,
      o,
      a,
      b,
      l,
      f,
      p
    ), Ro(b, k);
  else if (Ws(t, "onPending"), b.pendingBranch = k, k.shapeFlag & 512 ? b.pendingId = k.component.suspenseId : b.pendingId = Sl++, m(
    null,
    k,
    b.hiddenContainer,
    null,
    a,
    b,
    l,
    f,
    p
  ), b.deps <= 0)
    b.resolve();
  else {
    const { timeout: $, pendingId: L } = b;
    $ > 0 ? setTimeout(() => {
      b.pendingId === L && b.fallback(R);
    }, $) : $ === 0 && b.fallback(R);
  }
}
function wp(e, t, i, o, a, l, f, p, m, _, v = !1) {
  const {
    p: b,
    m: k,
    um: R,
    n: D,
    o: { parentNode: M, remove: W }
  } = _;
  let Q;
  const $ = Yy(e);
  $ && t && t.pendingBranch && (Q = t.pendingId, t.deps++);
  const L = e.props ? Ia(e.props.timeout) : void 0, U = l, H = {
    vnode: e,
    parent: t,
    parentComponent: i,
    namespace: f,
    container: o,
    hiddenContainer: a,
    deps: 0,
    pendingId: Sl++,
    timeout: typeof L == "number" ? L : -1,
    activeBranch: null,
    isFallbackMountPending: !1,
    pendingBranch: null,
    isInFallback: !v,
    isHydrating: v,
    isUnmounted: !1,
    effects: [],
    resolve(te = !1, J = !1) {
      const {
        vnode: ce,
        activeBranch: F,
        pendingBranch: le,
        pendingId: we,
        effects: ne,
        parentComponent: _e,
        container: Re,
        isInFallback: ke
      } = H;
      let me = !1;
      H.isHydrating ? H.isHydrating = !1 : te || (me = F && le.transition && le.transition.mode === "out-in", me && (F.transition.afterLeave = () => {
        we === H.pendingId && (k(
          le,
          Re,
          l === U ? D(F) : l,
          0
        ), Us(ne), ke && ce.ssFallback && (ce.ssFallback.el = null));
      }), F && !H.isFallbackMountPending && (M(F.el) === Re && (l = D(F)), R(F, _e, H, !0), !me && ke && ce.ssFallback && Bt(() => ce.ssFallback.el = null, H)), me || k(le, Re, l, 0)), H.isFallbackMountPending = !1, Ro(H, le), H.pendingBranch = null, H.isInFallback = !1;
      let he = H.parent, be = !1;
      for (; he; ) {
        if (he.pendingBranch) {
          he.effects.push(...ne), be = !0;
          break;
        }
        he = he.parent;
      }
      !be && !me && Us(ne), H.effects = [], $ && t && t.pendingBranch && Q === t.pendingId && (t.deps--, t.deps === 0 && !J && t.resolve()), Ws(ce, "onResolve");
    },
    fallback(te) {
      if (!H.pendingBranch)
        return;
      const { vnode: J, activeBranch: ce, parentComponent: F, container: le, namespace: we } = H;
      Ws(J, "onFallback");
      const ne = D(ce), _e = () => {
        H.isFallbackMountPending = !1, H.isInFallback && (b(
          null,
          te,
          le,
          ne,
          F,
          null,
          // fallback tree will not have suspense context
          we,
          p,
          m
        ), Ro(H, te));
      }, Re = te.transition && te.transition.mode === "out-in";
      Re && (H.isFallbackMountPending = !0, ce.transition.afterLeave = _e), H.isInFallback = !0, R(
        ce,
        F,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), Re || _e();
    },
    move(te, J, ce) {
      H.activeBranch && k(H.activeBranch, te, J, ce), H.container = te;
    },
    next() {
      return H.activeBranch && D(H.activeBranch);
    },
    registerDep(te, J, ce) {
      const F = !!H.pendingBranch;
      F && H.deps++;
      const le = te.vnode.el;
      te.asyncDep.catch((we) => {
        po(we, te, 0);
      }).then((we) => {
        if (te.isUnmounted || H.isUnmounted || H.pendingId !== te.suspenseId)
          return;
        zs(), te.asyncResolved = !0;
        const { vnode: ne } = te;
        Cl(te, we, !1), le && (ne.el = le);
        const _e = !le && te.subTree.el;
        J(
          te,
          ne,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          M(le || te.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          le ? null : D(te.subTree),
          H,
          f,
          ce
        ), _e && (ne.placeholder = null, W(_e)), hu(te, ne.el), F && --H.deps === 0 && H.resolve();
      });
    },
    unmount(te, J) {
      H.isUnmounted = !0, H.activeBranch && R(
        H.activeBranch,
        i,
        te,
        J
      ), H.pendingBranch && R(
        H.pendingBranch,
        i,
        te,
        J
      );
    }
  };
  return H;
}
function Gy(e, t, i, o, a, l, f, p, m) {
  const _ = t.suspense = wp(
    t,
    o,
    i,
    e.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    a,
    l,
    f,
    p,
    !0
  ), v = m(
    e,
    _.pendingBranch = t.ssContent,
    i,
    _,
    l,
    f
  );
  return _.deps === 0 && _.resolve(!1, !0), v;
}
function zy(e) {
  const { shapeFlag: t, children: i } = e, o = t & 32;
  e.ssContent = Zc(
    o ? i.default : i
  ), e.ssFallback = o ? Zc(i.fallback) : We(It);
}
function Zc(e) {
  let t;
  if (Ve(e)) {
    const i = ro && e._c;
    i && (e._d = !1, Qe()), e = e(), i && (e._d = !0, t = tn, Ep());
  }
  return Fe(e) && (e = Ry(e)), e = mn(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter((i) => i !== e)), e;
}
function xp(e, t) {
  t && t.pendingBranch ? Fe(e) ? t.effects.push(...e) : t.effects.push(e) : Us(e);
}
function Ro(e, t) {
  e.activeBranch = t;
  const { vnode: i, parentComponent: o } = e;
  let a = t.el;
  for (; !a && t.component; )
    t = t.component.subTree, a = t.el;
  i.el = a, o && o.subTree === i && (o.vnode.el = a, hu(o, a));
}
function Yy(e) {
  const t = e.props && e.props.suspensible;
  return t != null && t !== !1;
}
const Tt = /* @__PURE__ */ Symbol.for("v-fgt"), li = /* @__PURE__ */ Symbol.for("v-txt"), It = /* @__PURE__ */ Symbol.for("v-cmt"), no = /* @__PURE__ */ Symbol.for("v-stc"), Ds = [];
let tn = null;
function Qe(e = !1) {
  Ds.push(tn = e ? null : []);
}
function Ep() {
  Ds.pop(), tn = Ds[Ds.length - 1] || null;
}
let ro = 1;
function Gs(e, t = !1) {
  ro += e, e < 0 && tn && t && (tn.hasOnce = !0);
}
function Sp(e) {
  return e.dynamicChildren = ro > 0 ? tn || Oo : null, Ep(), ro > 0 && tn && tn.push(e), e;
}
function Bn(e, t, i, o, a, l) {
  return Sp(
    dn(
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
function pt(e, t, i, o, a) {
  return Sp(
    We(
      e,
      t,
      i,
      o,
      a,
      !0
    )
  );
}
function Yr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Yn(e, t) {
  return e.type === t.type && e.key === t.key;
}
function Xy(e) {
}
const Cp = ({ key: e }) => e ?? null, Oa = ({
  ref: e,
  ref_key: t,
  ref_for: i
}) => (typeof e == "number" && (e = "" + e), e != null ? xt(e) || /* @__PURE__ */ _t(e) || Ve(e) ? { i: Xt, r: e, k: t, f: !!i } : e : null);
function dn(e, t = null, i = null, o = 0, a = null, l = e === Tt ? 0 : 1, f = !1, p = !1) {
  const m = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Cp(t),
    ref: t && Oa(t),
    scopeId: lu,
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
    ctx: Xt
  };
  return p ? (vc(m, i), l & 128 && e.normalize(m)) : i && (m.shapeFlag |= xt(i) ? 8 : 16), ro > 0 && // avoid a block node from tracking itself
  !f && // has current parent block
  tn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (m.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  m.patchFlag !== 32 && tn.push(m), m;
}
const We = Qy;
function Qy(e, t = null, i = null, o = 0, a = null, l = !1) {
  if ((!e || e === Xd) && (e = It), Yr(e)) {
    const p = er(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return i && vc(p, i), ro > 0 && !l && tn && (p.shapeFlag & 6 ? tn[tn.indexOf(e)] = p : tn.push(p)), p.patchFlag = -2, p;
  }
  if (ov(e) && (e = e.__vccOpts), t) {
    t = yc(t);
    let { class: p, style: m } = t;
    p && !xt(p) && (t.class = Zs(p)), ft(m) && (/* @__PURE__ */ na(m) && !Fe(m) && (m = mt({}, m)), t.style = lo(m));
  }
  const f = xt(e) ? 1 : La(e) ? 128 : Md(e) ? 64 : ft(e) ? 4 : Ve(e) ? 2 : 0;
  return dn(
    e,
    t,
    i,
    o,
    a,
    f,
    l,
    !0
  );
}
function yc(e) {
  return e ? /* @__PURE__ */ na(e) || lp(e) ? mt({}, e) : e : null;
}
function er(e, t, i = !1, o = !1) {
  const { props: a, ref: l, patchFlag: f, children: p, transition: m } = e, _ = t ? Qt(a || {}, t) : a, v = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: _,
    key: _ && Cp(_),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && l ? Fe(l) ? l.concat(Oa(t)) : [l, Oa(t)] : Oa(t)
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
    patchFlag: t && e.type !== Tt ? f === -1 ? 16 : f | 16 : f,
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
    ssContent: e.ssContent && er(e.ssContent),
    ssFallback: e.ssFallback && er(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return m && o && zr(
    v,
    m.clone(v)
  ), v;
}
function ho(e = " ", t = 0) {
  return We(li, null, e, t);
}
function Jy(e, t) {
  const i = We(no, null, e);
  return i.staticCount = t, i;
}
function Uo(e = "", t = !1) {
  return t ? (Qe(), pt(It, null, e)) : We(It, null, e);
}
function mn(e) {
  return e == null || typeof e == "boolean" ? We(It) : Fe(e) ? We(
    Tt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Yr(e) ? jr(e) : We(li, null, String(e));
}
function jr(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : er(e);
}
function vc(e, t) {
  let i = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (Fe(t))
    i = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const a = t.default;
      a && (a._c && (a._d = !1), vc(e, a()), a._c && (a._d = !0));
      return;
    } else {
      i = 32;
      const a = t._;
      !a && !lp(t) ? t._ctx = Xt : a === 3 && Xt && (Xt.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Ve(t) ? (t = { default: t, _ctx: Xt }, i = 32) : (t = String(t), o & 64 ? (i = 16, t = [ho(t)]) : i = 8);
  e.children = t, e.shapeFlag |= i;
}
function Qt(...e) {
  const t = {};
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    for (const a in o)
      if (a === "class")
        t.class !== o.class && (t.class = Zs([t.class, o.class]));
      else if (a === "style")
        t.style = lo([t.style, o.style]);
      else if (Qs(a)) {
        const l = t[a], f = o[a];
        f && l !== f && !(Fe(l) && l.includes(f)) ? t[a] = l ? [].concat(l, f) : f : f == null && l == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Qa(a) && (t[a] = f);
      } else a !== "" && (t[a] = o[a]);
  }
  return t;
}
function hn(e, t, i, o = null) {
  jn(e, t, 7, [
    i,
    o
  ]);
}
const Zy = np();
let ev = 0;
function Op(e, t, i) {
  const o = e.type, a = (t ? t.appContext : e.appContext) || Zy, l = {
    uid: ev++,
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
    scope: new zl(
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
    propsOptions: fp(o, a),
    emitsOptions: op(o, a),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ot,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: ot,
    data: ot,
    props: ot,
    attrs: ot,
    slots: ot,
    refs: ot,
    setupState: ot,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = Iy.bind(null, l), e.ce && e.ce(l), l;
}
let Yt = null;
const Rt = () => Yt || Xt;
let ja, ko;
{
  const e = nu(), t = (i, o) => {
    let a;
    return (a = e[i]) || (a = e[i] = []), a.push(o), (l) => {
      a.length > 1 ? a.forEach((f) => f(l)) : a[0](l);
    };
  };
  ja = t(
    "__VUE_INSTANCE_SETTERS__",
    (i) => Yt = i
  ), ko = t(
    "__VUE_SSR_SETTERS__",
    (i) => io = i
  );
}
const Vo = (e) => {
  const t = Yt;
  return ja(e), e.scope.on(), () => {
    e.scope.off(), ja(t);
  };
}, zs = () => {
  Yt && Yt.scope.off(), ja(null);
};
function Tp(e) {
  return e.vnode.shapeFlag & 4;
}
let io = !1;
function Ap(e, t = !1, i = !1) {
  t && ko(t);
  const { props: o, children: a } = e.vnode, l = Tp(e);
  My(e, o, l, t), qy(e, a, i || t);
  const f = l ? tv(e, t) : void 0;
  return t && ko(!1), f;
}
function tv(e, t) {
  const i = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, _l);
  const { setup: o } = i;
  if (o) {
    Wr();
    const a = e.setupContext = o.length > 1 ? Ip(e) : null, l = Vo(e), f = Ko(
      o,
      e,
      0,
      [
        e.props,
        a
      ]
    ), p = Wl(f);
    if (Gr(), l(), (p || e.sp) && !Vr(e) && sc(e), p) {
      if (f.then(zs, zs), t)
        return f.then((m) => {
          Cl(e, m, t);
        }).catch((m) => {
          po(m, e, 0);
        });
      e.asyncDep = f;
    } else
      Cl(e, f, t);
  } else
    Pp(e, t);
}
function Cl(e, t, i) {
  Ve(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ft(t) && (e.setupState = Jl(t)), Pp(e, i);
}
let qa, Ol;
function nv(e) {
  qa = e, Ol = (t) => {
    t.render._rc && (t.withProxy = new Proxy(t.ctx, fy));
  };
}
const rv = () => !qa;
function Pp(e, t, i) {
  const o = e.type;
  if (!e.render) {
    if (!t && qa && !o.render) {
      const a = o.template || dc(e).template;
      if (a) {
        const { isCustomElement: l, compilerOptions: f } = e.appContext.config, { delimiters: p, compilerOptions: m } = o, _ = mt(
          mt(
            {
              isCustomElement: l,
              delimiters: p
            },
            f
          ),
          m
        );
        o.render = qa(a, _);
      }
    }
    e.render = o.render || Fn, Ol && Ol(e);
  }
  {
    const a = Vo(e);
    Wr();
    try {
      Ey(e);
    } finally {
      Gr(), a();
    }
  }
}
const iv = {
  get(e, t) {
    return en(e, "get", ""), e[t];
  }
};
function Ip(e) {
  const t = (i) => {
    e.exposed = i || {};
  };
  return {
    attrs: new Proxy(e.attrs, iv),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function la(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Jl(ra(e.exposed)), {
    get(t, i) {
      if (i in t)
        return t[i];
      if (i in ks)
        return ks[i](e);
    },
    has(t, i) {
      return i in t || i in ks;
    }
  })) : e.proxy;
}
function Tl(e, t = !0) {
  return Ve(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function ov(e) {
  return Ve(e) && "__vccOpts" in e;
}
const Le = (e, t) => /* @__PURE__ */ wm(e, t, io);
function Qn(e, t, i) {
  try {
    Gs(-1);
    const o = arguments.length;
    return o === 2 ? ft(t) && !Fe(t) ? Yr(t) ? We(e, null, [t]) : We(e, t) : We(e, null, t) : (o > 3 ? i = Array.prototype.slice.call(arguments, 2) : o === 3 && Yr(i) && (i = [i]), We(e, t, i));
  } finally {
    Gs(1);
  }
}
function sv() {
}
function Np(e, t, i, o) {
  const a = i[o];
  if (a && Rp(a, e))
    return a;
  const l = t();
  return l.memo = e.slice(), l.cacheIndex = o, i[o] = l;
}
function Rp(e, t) {
  const i = e.memo;
  if (i.length != t.length)
    return !1;
  for (let o = 0; o < i.length; o++)
    if (zt(i[o], t[o]))
      return !1;
  return ro > 0 && tn && tn.push(e), !0;
}
const kp = "3.5.32", av = Fn, uv = Im, lv = Eo, cv = Id, fv = {
  createComponentInstance: Op,
  setupComponent: Ap,
  renderComponentRoot: Ca,
  setCurrentRenderingInstance: $s,
  isVNode: Yr,
  normalizeVNode: mn,
  getComponentPublicInstance: la,
  ensureValidVNode: fc,
  pushWarningContext: Om,
  popWarningContext: Tm
}, dv = fv, pv = null, hv = null, mv = null;
/**
* @vue/runtime-dom v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Al;
const ef = typeof window < "u" && window.trustedTypes;
if (ef)
  try {
    Al = /* @__PURE__ */ ef.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Dp = Al ? (e) => Al.createHTML(e) : (e) => e, yv = "http://www.w3.org/2000/svg", vv = "http://www.w3.org/1998/Math/MathML", Lr = typeof document < "u" ? document : null, tf = Lr && /* @__PURE__ */ Lr.createElement("template"), Fp = {
  insert: (e, t, i) => {
    t.insertBefore(e, i || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, i, o) => {
    const a = t === "svg" ? Lr.createElementNS(yv, e) : t === "mathml" ? Lr.createElementNS(vv, e) : i ? Lr.createElement(e, { is: i }) : Lr.createElement(e);
    return e === "select" && o && o.multiple != null && a.setAttribute("multiple", o.multiple), a;
  },
  createText: (e) => Lr.createTextNode(e),
  createComment: (e) => Lr.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Lr.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, i, o, a, l) {
    const f = i ? i.previousSibling : t.lastChild;
    if (a && (a === l || a.nextSibling))
      for (; t.insertBefore(a.cloneNode(!0), i), !(a === l || !(a = a.nextSibling)); )
        ;
    else {
      tf.innerHTML = Dp(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const p = tf.content;
      if (o === "svg" || o === "mathml") {
        const m = p.firstChild;
        for (; m.firstChild; )
          p.appendChild(m.firstChild);
        p.removeChild(m);
      }
      t.insertBefore(p, i);
    }
    return [
      // first
      f ? f.nextSibling : t.firstChild,
      // last
      i ? i.previousSibling : t.lastChild
    ];
  }
}, ti = "transition", Cs = "animation", Bo = /* @__PURE__ */ Symbol("_vtc"), Mp = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Bp = /* @__PURE__ */ mt(
  {},
  oc,
  Mp
), gv = (e) => (e.displayName = "Transition", e.props = Bp, e), bv = /* @__PURE__ */ gv(
  (e, { slots: t }) => Qn(jd, Lp(e), t)
), Yi = (e, t = []) => {
  Fe(e) ? e.forEach((i) => i(...t)) : e && e(...t);
}, nf = (e) => e ? Fe(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Lp(e) {
  const t = {};
  for (const ne in e)
    ne in Mp || (t[ne] = e[ne]);
  if (e.css === !1)
    return t;
  const {
    name: i = "v",
    type: o,
    duration: a,
    enterFromClass: l = `${i}-enter-from`,
    enterActiveClass: f = `${i}-enter-active`,
    enterToClass: p = `${i}-enter-to`,
    appearFromClass: m = l,
    appearActiveClass: _ = f,
    appearToClass: v = p,
    leaveFromClass: b = `${i}-leave-from`,
    leaveActiveClass: k = `${i}-leave-active`,
    leaveToClass: R = `${i}-leave-to`
  } = e, D = _v(a), M = D && D[0], W = D && D[1], {
    onBeforeEnter: Q,
    onEnter: $,
    onEnterCancelled: L,
    onLeave: U,
    onLeaveCancelled: H,
    onBeforeAppear: te = Q,
    onAppear: J = $,
    onAppearCancelled: ce = L
  } = t, F = (ne, _e, Re, ke) => {
    ne._enterCancelled = ke, ni(ne, _e ? v : p), ni(ne, _e ? _ : f), Re && Re();
  }, le = (ne, _e) => {
    ne._isLeaving = !1, ni(ne, b), ni(ne, R), ni(ne, k), _e && _e();
  }, we = (ne) => (_e, Re) => {
    const ke = ne ? J : $, me = () => F(_e, ne, Re);
    Yi(ke, [_e, me]), rf(() => {
      ni(_e, ne ? m : l), ir(_e, ne ? v : p), nf(ke) || of(_e, o, M, me);
    });
  };
  return mt(t, {
    onBeforeEnter(ne) {
      Yi(Q, [ne]), ir(ne, l), ir(ne, f);
    },
    onBeforeAppear(ne) {
      Yi(te, [ne]), ir(ne, m), ir(ne, _);
    },
    onEnter: we(!1),
    onAppear: we(!0),
    onLeave(ne, _e) {
      ne._isLeaving = !0;
      const Re = () => le(ne, _e);
      ir(ne, b), ne._enterCancelled ? (ir(ne, k), Pl(ne)) : (Pl(ne), ir(ne, k)), rf(() => {
        ne._isLeaving && (ni(ne, b), ir(ne, R), nf(U) || of(ne, o, W, Re));
      }), Yi(U, [ne, Re]);
    },
    onEnterCancelled(ne) {
      F(ne, !1, void 0, !0), Yi(L, [ne]);
    },
    onAppearCancelled(ne) {
      F(ne, !0, void 0, !0), Yi(ce, [ne]);
    },
    onLeaveCancelled(ne) {
      le(ne), Yi(H, [ne]);
    }
  });
}
function _v(e) {
  if (e == null)
    return null;
  if (ft(e))
    return [nl(e.enter), nl(e.leave)];
  {
    const t = nl(e);
    return [t, t];
  }
}
function nl(e) {
  return Ia(e);
}
function ir(e, t) {
  t.split(/\s+/).forEach((i) => i && e.classList.add(i)), (e[Bo] || (e[Bo] = /* @__PURE__ */ new Set())).add(t);
}
function ni(e, t) {
  t.split(/\s+/).forEach((o) => o && e.classList.remove(o));
  const i = e[Bo];
  i && (i.delete(t), i.size || (e[Bo] = void 0));
}
function rf(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let wv = 0;
function of(e, t, i, o) {
  const a = e._endId = ++wv, l = () => {
    a === e._endId && o();
  };
  if (i != null)
    return setTimeout(l, i);
  const { type: f, timeout: p, propCount: m } = jp(e, t);
  if (!f)
    return o();
  const _ = f + "end";
  let v = 0;
  const b = () => {
    e.removeEventListener(_, k), l();
  }, k = (R) => {
    R.target === e && ++v >= m && b();
  };
  setTimeout(() => {
    v < m && b();
  }, p + 1), e.addEventListener(_, k);
}
function jp(e, t) {
  const i = window.getComputedStyle(e), o = (D) => (i[D] || "").split(", "), a = o(`${ti}Delay`), l = o(`${ti}Duration`), f = sf(a, l), p = o(`${Cs}Delay`), m = o(`${Cs}Duration`), _ = sf(p, m);
  let v = null, b = 0, k = 0;
  t === ti ? f > 0 && (v = ti, b = f, k = l.length) : t === Cs ? _ > 0 && (v = Cs, b = _, k = m.length) : (b = Math.max(f, _), v = b > 0 ? f > _ ? ti : Cs : null, k = v ? v === ti ? l.length : m.length : 0);
  const R = v === ti && /\b(?:transform|all)(?:,|$)/.test(
    o(`${ti}Property`).toString()
  );
  return {
    type: v,
    timeout: b,
    propCount: k,
    hasTransform: R
  };
}
function sf(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((i, o) => af(i) + af(e[o])));
}
function af(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Pl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function xv(e, t, i) {
  const o = e[Bo];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : i ? e.setAttribute("class", t) : e.className = t;
}
const Ka = /* @__PURE__ */ Symbol("_vod"), qp = /* @__PURE__ */ Symbol("_vsh"), Kp = {
  // used for prop mismatch check during hydration
  name: "show",
  beforeMount(e, { value: t }, { transition: i }) {
    e[Ka] = e.style.display === "none" ? "" : e.style.display, i && t ? i.beforeEnter(e) : Os(e, t);
  },
  mounted(e, { value: t }, { transition: i }) {
    i && t && i.enter(e);
  },
  updated(e, { value: t, oldValue: i }, { transition: o }) {
    !t != !i && (o ? t ? (o.beforeEnter(e), Os(e, !0), o.enter(e)) : o.leave(e, () => {
      Os(e, !1);
    }) : Os(e, t));
  },
  beforeUnmount(e, { value: t }) {
    Os(e, t);
  }
};
function Os(e, t) {
  e.style.display = t ? e[Ka] : "none", e[qp] = !t;
}
function Ev() {
  Kp.getSSRProps = ({ value: e }) => {
    if (!e)
      return { style: { display: "none" } };
  };
}
const Up = /* @__PURE__ */ Symbol("");
function Sv(e) {
  const t = Rt();
  if (!t)
    return;
  const i = t.ut = (a = e(t.proxy)) => {
    Array.from(
      document.querySelectorAll(`[data-v-owner="${t.uid}"]`)
    ).forEach((l) => Ua(l, a));
  }, o = () => {
    const a = e(t.proxy);
    t.ce ? Ua(t.ce, a) : Il(t.subTree, a), i(a);
  };
  ac(() => {
    Us(o);
  }), In(() => {
    At(o, Fn, { flush: "post" });
    const a = new MutationObserver(o);
    a.observe(t.subTree.el.parentNode, { childList: !0 }), dr(() => a.disconnect());
  });
}
function Il(e, t) {
  if (e.shapeFlag & 128) {
    const i = e.suspense;
    e = i.activeBranch, i.pendingBranch && !i.isHydrating && i.effects.push(() => {
      Il(i.activeBranch, t);
    });
  }
  for (; e.component; )
    e = e.component.subTree;
  if (e.shapeFlag & 1 && e.el)
    Ua(e.el, t);
  else if (e.type === Tt)
    e.children.forEach((i) => Il(i, t));
  else if (e.type === no) {
    let { el: i, anchor: o } = e;
    for (; i && (Ua(i, t), i !== o); )
      i = i.nextSibling;
  }
}
function Ua(e, t) {
  if (e.nodeType === 1) {
    const i = e.style;
    let o = "";
    for (const a in t) {
      const l = Gh(t[a]);
      i.setProperty(`--${a}`, l), o += `--${a}: ${l};`;
    }
    i[Up] = o;
  }
}
const Cv = /(?:^|;)\s*display\s*:/;
function Ov(e, t, i) {
  const o = e.style, a = xt(i);
  let l = !1;
  if (i && !a) {
    if (t)
      if (xt(t))
        for (const f of t.split(";")) {
          const p = f.slice(0, f.indexOf(":")).trim();
          i[p] == null && Ta(o, p, "");
        }
      else
        for (const f in t)
          i[f] == null && Ta(o, f, "");
    for (const f in i)
      f === "display" && (l = !0), Ta(o, f, i[f]);
  } else if (a) {
    if (t !== i) {
      const f = o[Up];
      f && (i += ";" + f), o.cssText = i, l = Cv.test(i);
    }
  } else t && e.removeAttribute("style");
  Ka in e && (e[Ka] = l ? o.display : "", e[qp] && (o.display = "none"));
}
const uf = /\s*!important$/;
function Ta(e, t, i) {
  if (Fe(i))
    i.forEach((o) => Ta(e, t, o));
  else if (i == null && (i = ""), t.startsWith("--"))
    e.setProperty(t, i);
  else {
    const o = Tv(e, t);
    uf.test(i) ? e.setProperty(
      yn(o),
      i.replace(uf, ""),
      "important"
    ) : e[o] = i;
  }
}
const lf = ["Webkit", "Moz", "ms"], rl = {};
function Tv(e, t) {
  const i = rl[t];
  if (i)
    return i;
  let o = Nt(t);
  if (o !== "filter" && o in e)
    return rl[t] = o;
  o = Js(o);
  for (let a = 0; a < lf.length; a++) {
    const l = lf[a] + o;
    if (l in e)
      return rl[t] = l;
  }
  return t;
}
const cf = "http://www.w3.org/1999/xlink";
function ff(e, t, i, o, a, l = Hh(t)) {
  o && t.startsWith("xlink:") ? i == null ? e.removeAttributeNS(cf, t.slice(6, t.length)) : e.setAttributeNS(cf, t, i) : i == null || l && !rd(i) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : Pn(i) ? String(i) : i
  );
}
function df(e, t, i, o, a) {
  if (t === "innerHTML" || t === "textContent") {
    i != null && (e[t] = t === "innerHTML" ? Dp(i) : i);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const p = l === "OPTION" ? e.getAttribute("value") || "" : e.value, m = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(i);
    (p !== m || !("_value" in e)) && (e.value = m), i == null && e.removeAttribute(t), e._value = i;
    return;
  }
  let f = !1;
  if (i === "" || i == null) {
    const p = typeof e[t];
    p === "boolean" ? i = rd(i) : i == null && p === "string" ? (i = "", f = !0) : p === "number" && (i = 0, f = !0);
  }
  try {
    e[t] = i;
  } catch {
  }
  f && e.removeAttribute(a || t);
}
function Ur(e, t, i, o) {
  e.addEventListener(t, i, o);
}
function Av(e, t, i, o) {
  e.removeEventListener(t, i, o);
}
const pf = /* @__PURE__ */ Symbol("_vei");
function Pv(e, t, i, o, a = null) {
  const l = e[pf] || (e[pf] = {}), f = l[t];
  if (o && f)
    f.value = o;
  else {
    const [p, m] = Iv(t);
    if (o) {
      const _ = l[t] = kv(
        o,
        a
      );
      Ur(e, p, _, m);
    } else f && (Av(e, p, f, m), l[t] = void 0);
  }
}
const hf = /(?:Once|Passive|Capture)$/;
function Iv(e) {
  let t;
  if (hf.test(e)) {
    t = {};
    let o;
    for (; o = e.match(hf); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : yn(e.slice(2)), t];
}
let il = 0;
const Nv = /* @__PURE__ */ Promise.resolve(), Rv = () => il || (Nv.then(() => il = 0), il = Date.now());
function kv(e, t) {
  const i = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= i.attached)
      return;
    jn(
      Dv(o, i.value),
      t,
      5,
      [o]
    );
  };
  return i.value = e, i.attached = Rv(), i;
}
function Dv(e, t) {
  if (Fe(t)) {
    const i = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      i.call(e), e._stopped = !0;
    }, t.map(
      (o) => (a) => !a._stopped && o && o(a)
    );
  } else
    return t;
}
const mf = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Vp = (e, t, i, o, a, l) => {
  const f = a === "svg";
  t === "class" ? xv(e, o, f) : t === "style" ? Ov(e, i, o) : Qs(t) ? Qa(t) || Pv(e, t, i, o, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Fv(e, t, o, f)) ? (df(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ff(e, t, o, f, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Mv(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xt(o))) ? df(e, Nt(t), o, l, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), ff(e, t, o, f));
};
function Fv(e, t, i, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && mf(t) && Ve(i));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const a = e.tagName;
    if (a === "IMG" || a === "VIDEO" || a === "CANVAS" || a === "SOURCE")
      return !1;
  }
  return mf(t) && xt(i) ? !1 : t in e;
}
function Mv(e, t) {
  const i = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!i)
    return !1;
  const o = Nt(t);
  return Array.isArray(i) ? i.some((a) => Nt(a) === o) : Object.keys(i).some((a) => Nt(a) === o);
}
const yf = {};
// @__NO_SIDE_EFFECTS__
function $p(e, t, i) {
  let o = /* @__PURE__ */ rt(e, t);
  Ja(o) && (o = mt({}, o, t));
  class a extends mu {
    constructor(f) {
      super(o, f, i);
    }
  }
  return a.def = o, a;
}
const Bv = /* @__NO_SIDE_EFFECTS__ */ (e, t) => /* @__PURE__ */ $p(e, t, rh), Lv = typeof HTMLElement < "u" ? HTMLElement : class {
};
class mu extends Lv {
  constructor(t, i = {}, o = Ha) {
    super(), this._def = t, this._props = i, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && o !== Ha ? this._root = this.shadowRoot : t.shadowRoot !== !1 ? (this.attachShadow(
      mt({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && // #12479 should check assignedSlot first to get correct parent
    (t.assignedSlot || t.parentNode || t.host); )
      if (t instanceof mu) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Lt(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const i of t)
      this._setAttr(i.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, a = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: l, styles: f } = o;
      let p;
      if (l && !Fe(l))
        for (const m in l) {
          const _ = l[m];
          (_ === Number || _ && _.type === Number) && (m in this._props && (this._props[m] = Ia(this._props[m])), (p || (p = /* @__PURE__ */ Object.create(null)))[Nt(m)] = !0);
        }
      this._numberProps = p, this._resolveProps(o), this.shadowRoot && this._applyStyles(f), this._mount(o);
    }, i = this._def.__asyncLoader;
    i ? this._pendingResolve = i().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const i = this._instance && this._instance.exposed;
    if (i)
      for (const o in i)
        ct(this, o) || Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => ue(i[o])
        });
  }
  _resolveProps(t) {
    const { props: i } = t, o = Fe(i) ? i : Object.keys(i || {});
    for (const a of Object.keys(this))
      a[0] !== "_" && o.includes(a) && this._setProp(a, this[a]);
    for (const a of o.map(Nt))
      Object.defineProperty(this, a, {
        get() {
          return this._getProp(a);
        },
        set(l) {
          this._setProp(a, l, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const i = this.hasAttribute(t);
    let o = i ? this.getAttribute(t) : yf;
    const a = Nt(t);
    i && this._numberProps && this._numberProps[a] && (o = Ia(o)), this._setProp(a, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, i, o = !0, a = !1) {
    if (i !== this._props[t] && (this._dirty = !0, i === yf ? delete this._props[t] : (this._props[t] = i, t === "key" && this._app && (this._app._ceVNode.key = i)), a && this._instance && this._update(), o)) {
      const l = this._ob;
      l && (this._processMutations(l.takeRecords()), l.disconnect()), i === !0 ? this.setAttribute(yn(t), "") : typeof i == "string" || typeof i == "number" ? this.setAttribute(yn(t), i + "") : i || this.removeAttribute(yn(t)), l && l.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), nh(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const i = We(this._def, mt(t, this._props));
    return this._instance || (i.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0;
      const a = (l, f) => {
        this.dispatchEvent(
          new CustomEvent(
            l,
            Ja(f[0]) ? mt({ detail: f }, f[0]) : { detail: f }
          )
        );
      };
      o.emit = (l, ...f) => {
        a(l, f), yn(l) !== l && a(yn(l), f);
      }, this._setParent();
    }), i;
  }
  _applyStyles(t, i, o) {
    if (!t) return;
    if (i) {
      if (i === this._def || this._styleChildren.has(i))
        return;
      this._styleChildren.add(i);
    }
    const a = this._nonce, l = this.shadowRoot, f = o ? this._getStyleAnchor(o) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(l);
    let p = null;
    for (let m = t.length - 1; m >= 0; m--) {
      const _ = document.createElement("style");
      a && _.setAttribute("nonce", a), _.textContent = t[m], l.insertBefore(_, p || f), p = _, m === 0 && (o || this._styleAnchors.set(this._def, _), i && this._styleAnchors.set(i, _));
    }
  }
  _getStyleAnchor(t) {
    if (!t)
      return null;
    const i = this._styleAnchors.get(t);
    return i && i.parentNode === this.shadowRoot ? i : (i && this._styleAnchors.delete(t), null);
  }
  _getRootStyleInsertionAnchor(t) {
    for (let i = 0; i < t.childNodes.length; i++) {
      const o = t.childNodes[i];
      if (!(o instanceof HTMLStyleElement))
        return o;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let i;
    for (; i = this.firstChild; ) {
      const o = i.nodeType === 1 && i.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(i), this.removeChild(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), i = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const a = t[o], l = a.getAttribute("name") || "default", f = this._slots[l], p = a.parentNode;
      if (f)
        for (const m of f) {
          if (i && m.nodeType === 1) {
            const _ = i + "-s", v = document.createTreeWalker(m, 1);
            m.setAttribute(_, "");
            let b;
            for (; b = v.nextNode(); )
              b.setAttribute(_, "");
          }
          p.insertBefore(m, a);
        }
      else
        for (; a.firstChild; ) p.insertBefore(a.firstChild, a);
      p.removeChild(a);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const i = /* @__PURE__ */ new Set();
    for (const o of t) {
      const a = o.querySelectorAll("slot");
      for (let l = 0; l < a.length; l++)
        i.add(a[l]);
    }
    return Array.from(i);
  }
  /**
   * @internal
   */
  _injectChildStyle(t, i) {
    this._applyStyles(t.styles, t, i);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
  }
}
function Hp(e) {
  const t = Rt(), i = t && t.ce;
  return i || null;
}
function jv() {
  const e = Hp();
  return e && e.shadowRoot;
}
function qv(e = "$style") {
  {
    const t = Rt();
    if (!t)
      return ot;
    const i = t.type.__cssModules;
    if (!i)
      return ot;
    const o = i[e];
    return o || ot;
  }
}
const Wp = /* @__PURE__ */ new WeakMap(), Gp = /* @__PURE__ */ new WeakMap(), Va = /* @__PURE__ */ Symbol("_moveCb"), vf = /* @__PURE__ */ Symbol("_enterCb"), Kv = (e) => (delete e.props.mode, e), Uv = /* @__PURE__ */ Kv({
  name: "TransitionGroup",
  props: /* @__PURE__ */ mt({}, Bp, {
    tag: String,
    moveClass: String
  }),
  setup(e, { slots: t }) {
    const i = Rt(), o = ic();
    let a, l;
    return aa(() => {
      if (!a.length)
        return;
      const f = e.moveClass || `${e.name || "v"}-move`;
      if (!Gv(
        a[0].el,
        i.vnode.el,
        f
      )) {
        a = [];
        return;
      }
      a.forEach($v), a.forEach(Hv);
      const p = a.filter(Wv);
      Pl(i.vnode.el), p.forEach((m) => {
        const _ = m.el, v = _.style;
        ir(_, f), v.transform = v.webkitTransform = v.transitionDuration = "";
        const b = _[Va] = (k) => {
          k && k.target !== _ || (!k || k.propertyName.endsWith("transform")) && (_.removeEventListener("transitionend", b), _[Va] = null, ni(_, f));
        };
        _.addEventListener("transitionend", b);
      }), a = [];
    }), () => {
      const f = /* @__PURE__ */ nt(e), p = Lp(f);
      let m = f.tag || Tt;
      if (a = [], l)
        for (let _ = 0; _ < l.length; _++) {
          const v = l[_];
          v.el && v.el instanceof Element && (a.push(v), zr(
            v,
            Mo(
              v,
              p,
              o,
              i
            )
          ), Wp.set(v, zp(v.el)));
        }
      l = t.default ? fu(t.default()) : [];
      for (let _ = 0; _ < l.length; _++) {
        const v = l[_];
        v.key != null && zr(
          v,
          Mo(v, p, o, i)
        );
      }
      return We(m, null, l);
    };
  }
}), Vv = Uv;
function $v(e) {
  const t = e.el;
  t[Va] && t[Va](), t[vf] && t[vf]();
}
function Hv(e) {
  Gp.set(e, zp(e.el));
}
function Wv(e) {
  const t = Wp.get(e), i = Gp.get(e), o = t.left - i.left, a = t.top - i.top;
  if (o || a) {
    const l = e.el, f = l.style, p = l.getBoundingClientRect();
    let m = 1, _ = 1;
    return l.offsetWidth && (m = p.width / l.offsetWidth), l.offsetHeight && (_ = p.height / l.offsetHeight), (!Number.isFinite(m) || m === 0) && (m = 1), (!Number.isFinite(_) || _ === 0) && (_ = 1), Math.abs(m - 1) < 0.01 && (m = 1), Math.abs(_ - 1) < 0.01 && (_ = 1), f.transform = f.webkitTransform = `translate(${o / m}px,${a / _}px)`, f.transitionDuration = "0s", e;
  }
}
function zp(e) {
  const t = e.getBoundingClientRect();
  return {
    left: t.left,
    top: t.top
  };
}
function Gv(e, t, i) {
  const o = e.cloneNode(), a = e[Bo];
  a && a.forEach((p) => {
    p.split(/\s+/).forEach((m) => m && o.classList.remove(m));
  }), i.split(/\s+/).forEach((p) => p && o.classList.add(p)), o.style.display = "none";
  const l = t.nodeType === 1 ? t : t.parentNode;
  l.appendChild(o);
  const { hasTransform: f } = jp(o);
  return l.removeChild(o), f;
}
const fi = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Fe(t) ? (i) => Po(t, i) : t;
};
function zv(e) {
  e.target.composing = !0;
}
function gf(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ln = /* @__PURE__ */ Symbol("_assign");
function bf(e, t, i) {
  return t && (e = e.trim()), i && (e = tu(e)), e;
}
const $a = {
  created(e, { modifiers: { lazy: t, trim: i, number: o } }, a) {
    e[Ln] = fi(a);
    const l = o || a.props && a.props.type === "number";
    Ur(e, t ? "change" : "input", (f) => {
      f.target.composing || e[Ln](bf(e.value, i, l));
    }), (i || l) && Ur(e, "change", () => {
      e.value = bf(e.value, i, l);
    }), t || (Ur(e, "compositionstart", zv), Ur(e, "compositionend", gf), Ur(e, "change", gf));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: i, modifiers: { lazy: o, trim: a, number: l } }, f) {
    if (e[Ln] = fi(f), e.composing) return;
    const p = (l || e.type === "number") && !/^0\d/.test(e.value) ? tu(e.value) : e.value, m = t ?? "";
    if (p === m)
      return;
    const _ = e.getRootNode();
    (_ instanceof Document || _ instanceof ShadowRoot) && _.activeElement === e && e.type !== "range" && (o && t === i || a && e.value.trim() === m) || (e.value = m);
  }
}, gc = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, i) {
    e[Ln] = fi(i), Ur(e, "change", () => {
      const o = e._modelValue, a = Lo(e), l = e.checked, f = e[Ln];
      if (Fe(o)) {
        const p = ru(o, a), m = p !== -1;
        if (l && !m)
          f(o.concat(a));
        else if (!l && m) {
          const _ = [...o];
          _.splice(p, 1), f(_);
        }
      } else if (uo(o)) {
        const p = new Set(o);
        l ? p.add(a) : p.delete(a), f(p);
      } else
        f(Xp(e, l));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: _f,
  beforeUpdate(e, t, i) {
    e[Ln] = fi(i), _f(e, t, i);
  }
};
function _f(e, { value: t, oldValue: i }, o) {
  e._modelValue = t;
  let a;
  if (Fe(t))
    a = ru(t, o.props.value) > -1;
  else if (uo(t))
    a = t.has(o.props.value);
  else {
    if (t === i) return;
    a = $r(t, Xp(e, !0));
  }
  e.checked !== a && (e.checked = a);
}
const bc = {
  created(e, { value: t }, i) {
    e.checked = $r(t, i.props.value), e[Ln] = fi(i), Ur(e, "change", () => {
      e[Ln](Lo(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: i }, o) {
    e[Ln] = fi(o), t !== i && (e.checked = $r(t, o.props.value));
  }
}, Yp = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: i } }, o) {
    const a = uo(t);
    Ur(e, "change", () => {
      const l = Array.prototype.filter.call(e.options, (f) => f.selected).map(
        (f) => i ? tu(Lo(f)) : Lo(f)
      );
      e[Ln](
        e.multiple ? a ? new Set(l) : l : l[0]
      ), e._assigning = !0, Lt(() => {
        e._assigning = !1;
      });
    }), e[Ln] = fi(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    wf(e, t);
  },
  beforeUpdate(e, t, i) {
    e[Ln] = fi(i);
  },
  updated(e, { value: t }) {
    e._assigning || wf(e, t);
  }
};
function wf(e, t) {
  const i = e.multiple, o = Fe(t);
  if (!(i && !o && !uo(t))) {
    for (let a = 0, l = e.options.length; a < l; a++) {
      const f = e.options[a], p = Lo(f);
      if (i)
        if (o) {
          const m = typeof p;
          m === "string" || m === "number" ? f.selected = t.some((_) => String(_) === String(p)) : f.selected = ru(t, p) > -1;
        } else
          f.selected = t.has(p);
      else if ($r(Lo(f), t)) {
        e.selectedIndex !== a && (e.selectedIndex = a);
        return;
      }
    }
    !i && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Lo(e) {
  return "_value" in e ? e._value : e.value;
}
function Xp(e, t) {
  const i = t ? "_trueValue" : "_falseValue";
  return i in e ? e[i] : t;
}
const Qp = {
  created(e, t, i) {
    _a(e, t, i, null, "created");
  },
  mounted(e, t, i) {
    _a(e, t, i, null, "mounted");
  },
  beforeUpdate(e, t, i, o) {
    _a(e, t, i, o, "beforeUpdate");
  },
  updated(e, t, i, o) {
    _a(e, t, i, o, "updated");
  }
};
function Jp(e, t) {
  switch (e) {
    case "SELECT":
      return Yp;
    case "TEXTAREA":
      return $a;
    default:
      switch (t) {
        case "checkbox":
          return gc;
        case "radio":
          return bc;
        default:
          return $a;
      }
  }
}
function _a(e, t, i, o, a) {
  const f = Jp(
    e.tagName,
    i.props && i.props.type
  )[a];
  f && f(e, t, i, o);
}
function Yv() {
  $a.getSSRProps = ({ value: e }) => ({ value: e }), bc.getSSRProps = ({ value: e }, t) => {
    if (t.props && $r(t.props.value, e))
      return { checked: !0 };
  }, gc.getSSRProps = ({ value: e }, t) => {
    if (Fe(e)) {
      if (t.props && ru(e, t.props.value) > -1)
        return { checked: !0 };
    } else if (uo(e)) {
      if (t.props && e.has(t.props.value))
        return { checked: !0 };
    } else if (e)
      return { checked: !0 };
  }, Qp.getSSRProps = (e, t) => {
    if (typeof t.type != "string")
      return;
    const i = Jp(
      // resolveDynamicModel expects an uppercase tag name, but vnode.type is lowercase
      t.type.toUpperCase(),
      t.props && t.props.type
    );
    if (i.getSSRProps)
      return i.getSSRProps(e, t);
  };
}
const Xv = ["ctrl", "shift", "alt", "meta"], Qv = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => Xv.some((i) => e[`${i}Key`] && !t.includes(i))
}, oo = (e, t) => {
  if (!e) return e;
  const i = e._withMods || (e._withMods = {}), o = t.join(".");
  return i[o] || (i[o] = (a, ...l) => {
    for (let f = 0; f < t.length; f++) {
      const p = Qv[t[f]];
      if (p && p(a, t)) return;
    }
    return e(a, ...l);
  });
}, Jv = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, so = (e, t) => {
  const i = e._withKeys || (e._withKeys = {}), o = t.join(".");
  return i[o] || (i[o] = (a) => {
    if (!("key" in a))
      return;
    const l = yn(a.key);
    if (t.some(
      (f) => f === l || Jv[f] === l
    ))
      return e(a);
  });
}, Zp = /* @__PURE__ */ mt({ patchProp: Vp }, Fp);
let Fs, xf = !1;
function eh() {
  return Fs || (Fs = mp(Zp));
}
function th() {
  return Fs = xf ? Fs : yp(Zp), xf = !0, Fs;
}
const nh = (...e) => {
  eh().render(...e);
}, Zv = (...e) => {
  th().hydrate(...e);
}, Ha = (...e) => {
  const t = eh().createApp(...e), { mount: i } = t;
  return t.mount = (o) => {
    const a = oh(o);
    if (!a) return;
    const l = t._component;
    !Ve(l) && !l.render && !l.template && (l.template = a.innerHTML), a.nodeType === 1 && (a.textContent = "");
    const f = i(a, !1, ih(a));
    return a instanceof Element && (a.removeAttribute("v-cloak"), a.setAttribute("data-v-app", "")), f;
  }, t;
}, rh = (...e) => {
  const t = th().createApp(...e), { mount: i } = t;
  return t.mount = (o) => {
    const a = oh(o);
    if (a)
      return i(a, !0, ih(a));
  }, t;
};
function ih(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function oh(e) {
  return xt(e) ? document.querySelector(e) : e;
}
let Ef = !1;
const eg = () => {
  Ef || (Ef = !0, Yv(), Ev());
};
/**
* vue v3.5.32
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const tg = () => {
}, ng = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BaseTransition: jd,
  BaseTransitionPropsValidators: oc,
  Comment: It,
  DeprecationTypes: mv,
  EffectScope: zl,
  ErrorCodes: Pm,
  ErrorTypeStrings: uv,
  Fragment: Tt,
  KeepAlive: iy,
  ReactiveEffect: Ls,
  Static: no,
  Suspense: $y,
  Teleport: Km,
  Text: li,
  TrackOpTypes: xm,
  Transition: bv,
  TransitionGroup: Vv,
  TriggerOpTypes: Em,
  VueElement: mu,
  assertNumber: Am,
  callWithAsyncErrorHandling: jn,
  callWithErrorHandling: Ko,
  camelize: Nt,
  capitalize: Js,
  cloneVNode: er,
  compatUtils: hv,
  compile: tg,
  computed: Le,
  createApp: Ha,
  createBlock: pt,
  createCommentVNode: Uo,
  createElementBlock: Bn,
  createElementVNode: dn,
  createHydrationRenderer: yp,
  createPropsRestProxy: wy,
  createRenderer: mp,
  createSSRApp: rh,
  createSlots: ly,
  createStaticVNode: Jy,
  createTextVNode: ho,
  createVNode: We,
  customRef: Zl,
  defineAsyncComponent: ny,
  defineComponent: rt,
  defineCustomElement: $p,
  defineEmits: py,
  defineExpose: hy,
  defineModel: vy,
  defineOptions: my,
  defineProps: dy,
  defineSSRCustomElement: Bv,
  defineSlots: yy,
  devtools: lv,
  effect: Yh,
  effectScope: ea,
  getCurrentInstance: Rt,
  getCurrentScope: ta,
  getCurrentWatcher: Sm,
  getTransitionRawChildren: fu,
  guardReactiveProps: yc,
  h: Qn,
  handleError: po,
  hasInjectionContext: Nd,
  hydrate: Zv,
  hydrateOnIdle: Xm,
  hydrateOnInteraction: ey,
  hydrateOnMediaQuery: Zm,
  hydrateOnVisible: Jm,
  initCustomFormatter: sv,
  initDirectivesForSSR: eg,
  inject: ui,
  isMemoSame: Rp,
  isProxy: na,
  isReactive: Mn,
  isReadonly: fr,
  isRef: _t,
  isRuntimeOnly: rv,
  isShallow: vn,
  isVNode: Yr,
  markRaw: ra,
  mergeDefaults: Zd,
  mergeModels: ep,
  mergeProps: Qt,
  nextTick: Lt,
  nodeOps: Fp,
  normalizeClass: Zs,
  normalizeProps: Gl,
  normalizeStyle: lo,
  onActivated: Ud,
  onBeforeMount: Hd,
  onBeforeUnmount: ua,
  onBeforeUpdate: ac,
  onDeactivated: Vd,
  onErrorCaptured: Yd,
  onMounted: In,
  onRenderTracked: zd,
  onRenderTriggered: Gd,
  onScopeDispose: iu,
  onServerPrefetch: Wd,
  onUnmounted: dr,
  onUpdated: aa,
  onWatcherCleanup: Cd,
  openBlock: Qe,
  patchProp: Vp,
  popScopeId: Dm,
  provide: cu,
  proxyRefs: Jl,
  pushScopeId: km,
  queuePostFlushCb: Us,
  reactive: co,
  readonly: Ks,
  ref: qe,
  registerRuntimeCompiler: nv,
  render: nh,
  renderList: cc,
  renderSlot: St,
  resolveComponent: ay,
  resolveDirective: uy,
  resolveDynamicComponent: Qd,
  resolveFilter: pv,
  resolveTransitionHooks: Mo,
  setBlockTracking: Gs,
  setDevtoolsHook: cv,
  setTransitionHooks: zr,
  shallowReactive: wd,
  shallowReadonly: Qi,
  shallowRef: ia,
  ssrContextKey: Rd,
  ssrUtils: dv,
  stop: Xh,
  toDisplayString: Hr,
  toHandlerKey: Ao,
  toHandlers: cy,
  toRaw: nt,
  toRef: ec,
  toRefs: fo,
  toValue: pn,
  transformVNodeArgs: Xy,
  triggerRef: Ed,
  unref: ue,
  useAttrs: _y,
  useCssModule: qv,
  useCssVars: Sv,
  useHost: Hp,
  useId: Kd,
  useModel: rp,
  useSSRContext: kd,
  useShadowRoot: jv,
  useSlots: by,
  useTemplateRef: Vm,
  useTransitionState: ic,
  vModelCheckbox: gc,
  vModelDynamic: Qp,
  vModelRadio: bc,
  vModelSelect: Yp,
  vModelText: $a,
  vShow: Kp,
  version: kp,
  warn: av,
  watch: At,
  watchEffect: Zn,
  watchPostEffect: nc,
  watchSyncEffect: rc,
  withAsyncContext: xy,
  withCtx: Xe,
  withDefaults: gy,
  withDirectives: Mm,
  withKeys: so,
  withMemo: Np,
  withModifiers: oo,
  withScopeId: Fm
}, Symbol.toStringTag, { value: "Module" }));
/*!
 * pinia v3.0.4
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let sh;
const yu = (e) => sh = e, ah = (
  /* istanbul ignore next */
  Symbol()
);
function Nl(e) {
  return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function";
}
var Ms;
(function(e) {
  e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function";
})(Ms || (Ms = {}));
function rg() {
  const e = ea(!0), t = e.run(() => /* @__PURE__ */ qe({}));
  let i = [], o = [];
  const a = ra({
    install(l) {
      yu(a), a._a = l, l.provide(ah, a), l.config.globalProperties.$pinia = a, o.forEach((f) => i.push(f)), o = [];
    },
    use(l) {
      return this._a ? i.push(l) : o.push(l), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: e,
    _s: /* @__PURE__ */ new Map(),
    state: t
  });
  return a;
}
const uh = () => {
};
function Sf(e, t, i, o = uh) {
  e.add(t);
  const a = () => {
    e.delete(t) && o();
  };
  return !i && ta() && iu(a), a;
}
function _o(e, ...t) {
  e.forEach((i) => {
    i(...t);
  });
}
const ig = (e) => e(), Cf = Symbol(), ol = Symbol();
function Rl(e, t) {
  e instanceof Map && t instanceof Map ? t.forEach((i, o) => e.set(o, i)) : e instanceof Set && t instanceof Set && t.forEach(e.add, e);
  for (const i in t) {
    if (!t.hasOwnProperty(i))
      continue;
    const o = t[i], a = e[i];
    Nl(a) && Nl(o) && e.hasOwnProperty(i) && !/* @__PURE__ */ _t(o) && !/* @__PURE__ */ Mn(o) ? e[i] = Rl(a, o) : e[i] = o;
  }
  return e;
}
const og = (
  /* istanbul ignore next */
  Symbol()
);
function sg(e) {
  return !Nl(e) || !Object.prototype.hasOwnProperty.call(e, og);
}
const { assign: ri } = Object;
function ag(e) {
  return !!(/* @__PURE__ */ _t(e) && e.effect);
}
function ug(e, t, i, o) {
  const { state: a, actions: l, getters: f } = t, p = i.state.value[e];
  let m;
  function _() {
    p || (i.state.value[e] = a ? a() : {});
    const v = /* @__PURE__ */ fo(i.state.value[e]);
    return ri(v, l, Object.keys(f || {}).reduce((b, k) => (b[k] = ra(Le(() => {
      yu(i);
      const R = i._s.get(e);
      return f[k].call(R, R);
    })), b), {}));
  }
  return m = lh(e, _, t, i, o, !0), m;
}
function lh(e, t, i = {}, o, a, l) {
  let f;
  const p = ri({ actions: {} }, i), m = { deep: !0 };
  let _, v, b = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), R;
  const D = o.state.value[e];
  !l && !D && (o.state.value[e] = {});
  let M;
  function W(ce) {
    let F;
    _ = v = !1, typeof ce == "function" ? (ce(o.state.value[e]), F = {
      type: Ms.patchFunction,
      storeId: e,
      events: R
    }) : (Rl(o.state.value[e], ce), F = {
      type: Ms.patchObject,
      payload: ce,
      storeId: e,
      events: R
    });
    const le = M = Symbol();
    Lt().then(() => {
      M === le && (_ = !0);
    }), v = !0, _o(b, F, o.state.value[e]);
  }
  const Q = l ? function() {
    const { state: F } = i, le = F ? F() : {};
    this.$patch((we) => {
      ri(we, le);
    });
  } : (
    /* istanbul ignore next */
    uh
  );
  function $() {
    f.stop(), b.clear(), k.clear(), o._s.delete(e);
  }
  const L = (ce, F = "") => {
    if (Cf in ce)
      return ce[ol] = F, ce;
    const le = function() {
      yu(o);
      const we = Array.from(arguments), ne = /* @__PURE__ */ new Set(), _e = /* @__PURE__ */ new Set();
      function Re(he) {
        ne.add(he);
      }
      function ke(he) {
        _e.add(he);
      }
      _o(k, {
        args: we,
        name: le[ol],
        store: H,
        after: Re,
        onError: ke
      });
      let me;
      try {
        me = ce.apply(this && this.$id === e ? this : H, we);
      } catch (he) {
        throw _o(_e, he), he;
      }
      return me instanceof Promise ? me.then((he) => (_o(ne, he), he)).catch((he) => (_o(_e, he), Promise.reject(he))) : (_o(ne, me), me);
    };
    return le[Cf] = !0, le[ol] = F, le;
  }, U = {
    _p: o,
    // _s: scope,
    $id: e,
    $onAction: Sf.bind(null, k),
    $patch: W,
    $reset: Q,
    $subscribe(ce, F = {}) {
      const le = Sf(b, ce, F.detached, () => we()), we = f.run(() => At(() => o.state.value[e], (ne) => {
        (F.flush === "sync" ? v : _) && ce({
          storeId: e,
          type: Ms.direct,
          events: R
        }, ne);
      }, ri({}, m, F)));
      return le;
    },
    $dispose: $
  }, H = /* @__PURE__ */ co(U);
  o._s.set(e, H);
  const J = (o._a && o._a.runWithContext || ig)(() => o._e.run(() => (f = ea()).run(() => t({ action: L }))));
  for (const ce in J) {
    const F = J[ce];
    if (/* @__PURE__ */ _t(F) && !ag(F) || /* @__PURE__ */ Mn(F))
      l || (D && sg(F) && (/* @__PURE__ */ _t(F) ? F.value = D[ce] : Rl(F, D[ce])), o.state.value[e][ce] = F);
    else if (typeof F == "function") {
      const le = L(F, ce);
      J[ce] = le, p.actions[ce] = F;
    }
  }
  return ri(H, J), ri(/* @__PURE__ */ nt(H), J), Object.defineProperty(H, "$state", {
    get: () => o.state.value[e],
    set: (ce) => {
      W((F) => {
        ri(F, ce);
      });
    }
  }), o._p.forEach((ce) => {
    ri(H, f.run(() => ce({
      store: H,
      app: o._a,
      pinia: o,
      options: p
    })));
  }), D && l && i.hydrate && i.hydrate(H.$state, D), _ = !0, v = !0, H;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function lg(e, t, i) {
  let o;
  const a = typeof t == "function";
  o = a ? i : t;
  function l(f, p) {
    const m = Nd();
    return f = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    f || (m ? ui(ah, null) : null), f && yu(f), f = sh, f._s.has(e) || (a ? lh(e, t, o, f) : ug(e, o, f)), f._s.get(e);
  }
  return l.$id = e, l;
}
function ch(e) {
  const t = /* @__PURE__ */ nt(e), i = {};
  for (const o in t) {
    const a = t[o];
    a.effect ? i[o] = // ...
    Le({
      get: () => e[o],
      set(l) {
        e[o] = l;
      }
    }) : (/* @__PURE__ */ _t(a) || /* @__PURE__ */ Mn(a)) && (i[o] = // ---
    /* @__PURE__ */ ec(e, o));
  }
  return i;
}
const _c = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [o, a] of t)
    i[o] = a;
  return i;
}, cg = {}, fg = {
  class: "grid h-full w-full",
  style: { "grid-template-columns": "20rem minmax(0, 1fr)" }
}, dg = { class: "h-full border-r border-base-300 bg-base-100 p-4 overflow-y-auto" }, pg = { class: "h-full bg-base-200 p-4 overflow-y-auto" };
function hg(e, t) {
  return Qe(), Bn("div", fg, [
    dn("div", dg, [
      St(e.$slots, "sidebar")
    ]),
    dn("div", pg, [
      St(e.$slots, "main")
    ])
  ]);
}
const mg = /* @__PURE__ */ _c(cg, [["render", hg]]);
var yg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function vg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Aa = { exports: {} }, gg = Aa.exports, Of;
function bg() {
  return Of || (Of = 1, function(e, t) {
    (function(i, o) {
      e.exports = o();
    })(gg, function() {
      var i = function(n, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
          s.__proto__ = u;
        } || function(s, u) {
          for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
        })(n, r);
      }, o = function() {
        return (o = Object.assign || function(n) {
          for (var r, s = 1, u = arguments.length; s < u; s++) for (var c in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
          return n;
        }).apply(this, arguments);
      };
      function a(n, r, s) {
        for (var u, c = 0, d = r.length; c < d; c++) !u && c in r || ((u = u || Array.prototype.slice.call(r, 0, c))[c] = r[c]);
        return n.concat(u || Array.prototype.slice.call(r));
      }
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : yg, f = Object.keys, p = Array.isArray;
      function m(n, r) {
        return typeof r != "object" || f(r).forEach(function(s) {
          n[s] = r[s];
        }), n;
      }
      typeof Promise > "u" || l.Promise || (l.Promise = Promise);
      var _ = Object.getPrototypeOf, v = {}.hasOwnProperty;
      function b(n, r) {
        return v.call(n, r);
      }
      function k(n, r) {
        typeof r == "function" && (r = r(_(n))), (typeof Reflect > "u" ? f : Reflect.ownKeys)(r).forEach(function(s) {
          D(n, s, r[s]);
        });
      }
      var R = Object.defineProperty;
      function D(n, r, s, u) {
        R(n, r, m(s && b(s, "get") && typeof s.get == "function" ? { get: s.get, set: s.set, configurable: !0 } : { value: s, configurable: !0, writable: !0 }, u));
      }
      function M(n) {
        return { from: function(r) {
          return n.prototype = Object.create(r.prototype), D(n.prototype, "constructor", n), { extend: k.bind(null, n.prototype) };
        } };
      }
      var W = Object.getOwnPropertyDescriptor, Q = [].slice;
      function $(n, r, s) {
        return Q.call(n, r, s);
      }
      function L(n, r) {
        return r(n);
      }
      function U(n) {
        if (!n) throw new Error("Assertion Failed");
      }
      function H(n) {
        l.setImmediate ? setImmediate(n) : setTimeout(n, 0);
      }
      function te(n, r) {
        if (typeof r == "string" && b(n, r)) return n[r];
        if (!r) return n;
        if (typeof r != "string") {
          for (var s = [], u = 0, c = r.length; u < c; ++u) {
            var d = te(n, r[u]);
            s.push(d);
          }
          return s;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var y = n[r.substr(0, h)];
          return y == null ? void 0 : te(y, r.substr(h + 1));
        }
      }
      function J(n, r, s) {
        if (n && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(n))) if (typeof r != "string" && "length" in r) {
          U(typeof s != "string" && "length" in s);
          for (var u = 0, c = r.length; u < c; ++u) J(n, r[u], s[u]);
        } else {
          var d, h, y = r.indexOf(".");
          y !== -1 ? (d = r.substr(0, y), (h = r.substr(y + 1)) === "" ? s === void 0 ? p(n) && !isNaN(parseInt(d)) ? n.splice(d, 1) : delete n[d] : n[d] = s : J(y = !(y = n[d]) || !b(n, d) ? n[d] = {} : y, h, s)) : s === void 0 ? p(n) && !isNaN(parseInt(r)) ? n.splice(r, 1) : delete n[r] : n[r] = s;
        }
      }
      function ce(n) {
        var r, s = {};
        for (r in n) b(n, r) && (s[r] = n[r]);
        return s;
      }
      var F = [].concat;
      function le(n) {
        return F.apply([], n);
      }
      var Be = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(le([8, 16, 32, 64].map(function(n) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + n + "Array";
        });
      }))).filter(function(n) {
        return l[n];
      }), we = new Set(Be.map(function(n) {
        return l[n];
      })), ne = null;
      function _e(n) {
        return ne = /* @__PURE__ */ new WeakMap(), n = function r(s) {
          if (!s || typeof s != "object") return s;
          var u = ne.get(s);
          if (u) return u;
          if (p(s)) {
            u = [], ne.set(s, u);
            for (var c = 0, d = s.length; c < d; ++c) u.push(r(s[c]));
          } else if (we.has(s.constructor)) u = s;
          else {
            var h, y = _(s);
            for (h in u = y === Object.prototype ? {} : Object.create(y), ne.set(s, u), s) b(s, h) && (u[h] = r(s[h]));
          }
          return u;
        }(n), ne = null, n;
      }
      var Re = {}.toString;
      function ke(n) {
        return Re.call(n).slice(8, -1);
      }
      var me = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", he = typeof me == "symbol" ? function(n) {
        var r;
        return n != null && (r = n[me]) && r.apply(n);
      } : function() {
        return null;
      };
      function be(n, r) {
        return r = n.indexOf(r), 0 <= r && n.splice(r, 1), 0 <= r;
      }
      var je = {};
      function tt(n) {
        var r, s, u, c;
        if (arguments.length === 1) {
          if (p(n)) return n.slice();
          if (this === je && typeof n == "string") return [n];
          if (c = he(n)) {
            for (s = []; !(u = c.next()).done; ) s.push(u.value);
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
      var dt = typeof Symbol < "u" ? function(n) {
        return n[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Ne = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Et = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ne), vt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(n, r) {
        this.name = n, this.message = r;
      }
      function gn(n, r) {
        return n + ". Errors: " + Object.keys(r).map(function(s) {
          return r[s].toString();
        }).filter(function(s, u, c) {
          return c.indexOf(s) === u;
        }).join(`
`);
      }
      function Jt(n, r, s, u) {
        this.failures = r, this.failedKeys = u, this.successCount = s, this.message = gn(n, r);
      }
      function Ct(n, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(s) {
          return r[s];
        }), this.failuresByPos = r, this.message = gn(n, this.failures);
      }
      M(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), M(Jt).from(Ft), M(Ct).from(Ft);
      var P = Et.reduce(function(n, r) {
        return n[r] = r + "Error", n;
      }, {}), E = Ft, V = Et.reduce(function(n, r) {
        var s = r + "Error";
        function u(c, d) {
          this.name = s, c ? typeof c == "string" ? (this.message = "".concat(c).concat(d ? `
 ` + d : ""), this.inner = d || null) : typeof c == "object" && (this.message = "".concat(c.name, " ").concat(c.message), this.inner = c) : (this.message = vt[r] || s, this.inner = null);
        }
        return M(u).from(E), n[r] = u, n;
      }, {});
      V.Syntax = SyntaxError, V.Type = TypeError, V.Range = RangeError;
      var z = Ne.reduce(function(n, r) {
        return n[r + "Error"] = V[r], n;
      }, {}), Ke = Et.reduce(function(n, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (n[r + "Error"] = V[r]), n;
      }, {});
      function Ce() {
      }
      function j(n) {
        return n;
      }
      function G(n, r) {
        return n == null || n === j ? r : function(s) {
          return r(n(s));
        };
      }
      function re(n, r) {
        return function() {
          n.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function ge(n, r) {
        return n === Ce ? r : function() {
          var s = n.apply(this, arguments);
          s !== void 0 && (arguments[0] = s);
          var u = this.onsuccess, c = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var d = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? re(u, this.onsuccess) : u), c && (this.onerror = this.onerror ? re(c, this.onerror) : c), d !== void 0 ? d : s;
        };
      }
      function de(n, r) {
        return n === Ce ? r : function() {
          n.apply(this, arguments);
          var s = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? re(s, this.onsuccess) : s), u && (this.onerror = this.onerror ? re(u, this.onerror) : u);
        };
      }
      function pe(n, r) {
        return n === Ce ? r : function(s) {
          var u = n.apply(this, arguments);
          m(s, u);
          var c = this.onsuccess, d = this.onerror;
          return this.onsuccess = null, this.onerror = null, s = r.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? re(c, this.onsuccess) : c), d && (this.onerror = this.onerror ? re(d, this.onerror) : d), u === void 0 ? s === void 0 ? void 0 : s : m(u, s);
        };
      }
      function Te(n, r) {
        return n === Ce ? r : function() {
          return r.apply(this, arguments) !== !1 && n.apply(this, arguments);
        };
      }
      function Se(n, r) {
        return n === Ce ? r : function() {
          var s = n.apply(this, arguments);
          if (s && typeof s.then == "function") {
            for (var u = this, c = arguments.length, d = new Array(c); c--; ) d[c] = arguments[c];
            return s.then(function() {
              return r.apply(u, d);
            });
          }
          return r.apply(this, arguments);
        };
      }
      Ke.ModifyError = Jt, Ke.DexieError = Ft, Ke.BulkError = Ct;
      var ye = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ve(n) {
        ye = n;
      }
      var Me = {}, Ae = 100, Be = typeof Promise > "u" ? [] : function() {
        var n = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [n, _(n), n];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, _(r), n];
      }(), Ne = Be[0], Et = Be[1], Be = Be[2], Et = Et && Et.then, He = Ne && Ne.constructor, it = !!Be, Je = function(n, r) {
        Pt.push([n, r]), ht && (queueMicrotask(Su), ht = !1);
      }, yt = !0, ht = !0, gt = [], Ot = [], bn = j, Mt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Ce, pgp: !1, env: {}, finalize: Ce }, fe = Mt, Pt = [], Kt = 0, Nn = [];
      function se(n) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = fe;
        if (typeof n != "function") {
          if (n !== Me) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && vi(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function s(u, c) {
          try {
            c(function(d) {
              if (u._state === null) {
                if (d === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && _n();
                d && typeof d.then == "function" ? s(u, function(y, w) {
                  d instanceof se ? d._then(y, w) : d.then(y, w);
                }) : (u._state = !0, u._value = d, Wo(u)), h && wn();
              }
            }, vi.bind(null, u));
          } catch (d) {
            vi(u, d);
          }
        }(this, n);
      }
      var yi = { get: function() {
        var n = fe, r = vr;
        function s(u, c) {
          var d = this, h = !n.global && (n !== fe || r !== vr), y = h && !Vt(), w = new se(function(S, O) {
            gi(d, new Ho(zo(u, n, h, y), zo(c, n, h, y), S, O, n));
          });
          return this._consoleTask && (w._consoleTask = this._consoleTask), w;
        }
        return s.prototype = Me, s;
      }, set: function(n) {
        D(this, "then", n && n.prototype === Me ? yi : { get: function() {
          return n;
        }, set: yi.set });
      } };
      function Ho(n, r, s, u, c) {
        this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = s, this.reject = u, this.psd = c;
      }
      function vi(n, r) {
        var s, u;
        Ot.push(r), n._state === null && (s = n._lib && _n(), r = bn(r), n._state = !1, n._value = r, u = n, gt.some(function(c) {
          return c._value === u._value;
        }) || gt.push(u), Wo(n), s && wn());
      }
      function Wo(n) {
        var r = n._listeners;
        n._listeners = [];
        for (var s = 0, u = r.length; s < u; ++s) gi(n, r[s]);
        var c = n._PSD;
        --c.ref || c.finalize(), Kt === 0 && (++Kt, Je(function() {
          --Kt == 0 && bi();
        }, []));
      }
      function gi(n, r) {
        if (n._state !== null) {
          var s = n._state ? r.onFulfilled : r.onRejected;
          if (s === null) return (n._state ? r.resolve : r.reject)(n._value);
          ++r.psd.ref, ++Kt, Je(Eu, [s, n, r]);
        } else n._listeners.push(r);
      }
      function Eu(n, r, s) {
        try {
          var u, c = r._value;
          !r._state && Ot.length && (Ot = []), u = ye && r._consoleTask ? r._consoleTask.run(function() {
            return n(c);
          }) : n(c), r._state || Ot.indexOf(c) !== -1 || function(d) {
            for (var h = gt.length; h; ) if (gt[--h]._value === d._value) return gt.splice(h, 1);
          }(r), s.resolve(u);
        } catch (d) {
          s.reject(d);
        } finally {
          --Kt == 0 && bi(), --s.psd.ref || s.psd.finalize();
        }
      }
      function Su() {
        rn(Mt, function() {
          _n() && wn();
        });
      }
      function _n() {
        var n = yt;
        return ht = yt = !1, n;
      }
      function wn() {
        var n, r, s;
        do
          for (; 0 < Pt.length; ) for (n = Pt, Pt = [], s = n.length, r = 0; r < s; ++r) {
            var u = n[r];
            u[0].apply(null, u[1]);
          }
        while (0 < Pt.length);
        ht = yt = !0;
      }
      function bi() {
        var n = gt;
        gt = [], n.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = Nn.slice(0), s = r.length; s; ) r[--s]();
      }
      function hr(n) {
        return new se(Me, !1, n);
      }
      function $e(n, r) {
        var s = fe;
        return function() {
          var u = _n(), c = fe;
          try {
            return $t(s, !0), n.apply(this, arguments);
          } catch (d) {
            r && r(d);
          } finally {
            $t(c, !1), u && wn();
          }
        };
      }
      k(se.prototype, { then: yi, _then: function(n, r) {
        gi(this, new Ho(null, null, n, r, fe));
      }, catch: function(n) {
        if (arguments.length === 1) return this.then(null, n);
        var r = n, s = arguments[1];
        return typeof r == "function" ? this.then(null, function(u) {
          return (u instanceof r ? s : hr)(u);
        }) : this.then(null, function(u) {
          return (u && u.name === r ? s : hr)(u);
        });
      }, finally: function(n) {
        return this.then(function(r) {
          return se.resolve(n()).then(function() {
            return r;
          });
        }, function(r) {
          return se.resolve(n()).then(function() {
            return hr(r);
          });
        });
      }, timeout: function(n, r) {
        var s = this;
        return n < 1 / 0 ? new se(function(u, c) {
          var d = setTimeout(function() {
            return c(new V.Timeout(r));
          }, n);
          s.then(u, c).finally(clearTimeout.bind(null, d));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && D(se.prototype, Symbol.toStringTag, "Dexie.Promise"), Mt.env = Go(), k(se, { all: function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r, s) {
          n.length === 0 && r([]);
          var u = n.length;
          n.forEach(function(c, d) {
            return se.resolve(c).then(function(h) {
              n[d] = h, --u || r(n);
            }, s);
          });
        });
      }, resolve: function(n) {
        return n instanceof se ? n : n && typeof n.then == "function" ? new se(function(r, s) {
          n.then(r, s);
        }) : new se(Me, !0, n);
      }, reject: hr, race: function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r, s) {
          n.map(function(u) {
            return se.resolve(u).then(r, s);
          });
        });
      }, PSD: { get: function() {
        return fe;
      }, set: function(n) {
        return fe = n;
      } }, totalEchoes: { get: function() {
        return vr;
      } }, newPSD: Ut, usePSD: rn, scheduler: { get: function() {
        return Je;
      }, set: function(n) {
        Je = n;
      } }, rejectionMapper: { get: function() {
        return bn;
      }, set: function(n) {
        bn = n;
      } }, follow: function(n, r) {
        return new se(function(s, u) {
          return Ut(function(c, d) {
            var h = fe;
            h.unhandleds = [], h.onunhandled = d, h.finalize = re(function() {
              var y, w = this;
              y = function() {
                w.unhandleds.length === 0 ? c() : d(w.unhandleds[0]);
              }, Nn.push(function S() {
                y(), Nn.splice(Nn.indexOf(S), 1);
              }), ++Kt, Je(function() {
                --Kt == 0 && bi();
              }, []);
            }, h.finalize), n();
          }, r, s, u);
        });
      } }), He && (He.allSettled && D(se, "allSettled", function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r) {
          n.length === 0 && r([]);
          var s = n.length, u = new Array(s);
          n.forEach(function(c, d) {
            return se.resolve(c).then(function(h) {
              return u[d] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[d] = { status: "rejected", reason: h };
            }).then(function() {
              return --s || r(u);
            });
          });
        });
      }), He.any && typeof AggregateError < "u" && D(se, "any", function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r, s) {
          n.length === 0 && s(new AggregateError([]));
          var u = n.length, c = new Array(u);
          n.forEach(function(d, h) {
            return se.resolve(d).then(function(y) {
              return r(y);
            }, function(y) {
              c[h] = y, --u || s(new AggregateError(c));
            });
          });
        });
      }), He.withResolvers && (se.withResolvers = He.withResolvers));
      var Ze = { awaits: 0, echoes: 0, id: 0 }, Cu = 0, mr = [], yr = 0, vr = 0, Ou = 0;
      function Ut(n, r, s, u) {
        var c = fe, d = Object.create(c);
        return d.parent = c, d.ref = 0, d.global = !1, d.id = ++Ou, Mt.env, d.env = it ? { Promise: se, PromiseProp: { value: se, configurable: !0, writable: !0 }, all: se.all, race: se.race, allSettled: se.allSettled, any: se.any, resolve: se.resolve, reject: se.reject } : {}, r && m(d, r), ++c.ref, d.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = rn(d, n, s, u), d.ref === 0 && d.finalize(), u;
      }
      function xn() {
        return Ze.id || (Ze.id = ++Cu), ++Ze.awaits, Ze.echoes += Ae, Ze.id;
      }
      function Vt() {
        return !!Ze.awaits && (--Ze.awaits == 0 && (Ze.id = 0), Ze.echoes = Ze.awaits * Ae, !0);
      }
      function gr(n) {
        return Ze.echoes && n && n.constructor === He ? (xn(), n.then(function(r) {
          return Vt(), r;
        }, function(r) {
          return Vt(), ze(r);
        })) : n;
      }
      function Tu() {
        var n = mr[mr.length - 1];
        mr.pop(), $t(n, !1);
      }
      function $t(n, r) {
        var s, u = fe;
        (r ? !Ze.echoes || yr++ && n === fe : !yr || --yr && n === fe) || queueMicrotask(r ? (function(c) {
          ++vr, Ze.echoes && --Ze.echoes != 0 || (Ze.echoes = Ze.awaits = Ze.id = 0), mr.push(fe), $t(c, !0);
        }).bind(null, n) : Tu), n !== fe && (fe = n, u === Mt && (Mt.env = Go()), it && (s = Mt.env.Promise, r = n.env, (u.global || n.global) && (Object.defineProperty(l, "Promise", r.PromiseProp), s.all = r.all, s.race = r.race, s.resolve = r.resolve, s.reject = r.reject, r.allSettled && (s.allSettled = r.allSettled), r.any && (s.any = r.any))));
      }
      function Go() {
        var n = l.Promise;
        return it ? { Promise: n, PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"), all: n.all, race: n.race, allSettled: n.allSettled, any: n.any, resolve: n.resolve, reject: n.reject } : {};
      }
      function rn(n, r, s, u, c) {
        var d = fe;
        try {
          return $t(n, !0), r(s, u, c);
        } finally {
          $t(d, !1);
        }
      }
      function zo(n, r, s, u) {
        return typeof n != "function" ? n : function() {
          var c = fe;
          s && xn(), $t(r, !0);
          try {
            return n.apply(this, arguments);
          } finally {
            $t(c, !1), u && queueMicrotask(Vt);
          }
        };
      }
      function _i(n) {
        Promise === He && Ze.echoes === 0 ? yr === 0 ? n() : enqueueNativeMicroTask(n) : setTimeout(n, 0);
      }
      ("" + Et).indexOf("[native code]") === -1 && (xn = Vt = Ce);
      var ze = se.reject, on = "￿", jt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Yo = "String expected.", En = [], br = "__dbnames", wi = "readonly", xi = "readwrite";
      function sn(n, r) {
        return n ? r ? function() {
          return n.apply(this, arguments) && r.apply(this, arguments);
        } : n : r;
      }
      var Xo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function _r(n) {
        return typeof n != "string" || /\./.test(n) ? function(r) {
          return r;
        } : function(r) {
          return r[n] === void 0 && n in r && delete (r = _e(r))[n], r;
        };
      }
      function Qo() {
        throw V.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Pe(n, r) {
        try {
          var s = Jo(n), u = Jo(r);
          if (s !== u) return s === "Array" ? 1 : u === "Array" ? -1 : s === "binary" ? 1 : u === "binary" ? -1 : s === "string" ? 1 : u === "string" ? -1 : s === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (s) {
            case "number":
            case "Date":
            case "string":
              return r < n ? 1 : n < r ? -1 : 0;
            case "binary":
              return function(c, d) {
                for (var h = c.length, y = d.length, w = h < y ? h : y, S = 0; S < w; ++S) if (c[S] !== d[S]) return c[S] < d[S] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              }(Zo(n), Zo(r));
            case "Array":
              return function(c, d) {
                for (var h = c.length, y = d.length, w = h < y ? h : y, S = 0; S < w; ++S) {
                  var O = Pe(c[S], d[S]);
                  if (O !== 0) return O;
                }
                return h === y ? 0 : h < y ? -1 : 1;
              }(n, r);
          }
        } catch {
        }
        return NaN;
      }
      function Jo(n) {
        var r = typeof n;
        return r != "object" ? r : ArrayBuffer.isView(n) ? "binary" : (n = ke(n), n === "ArrayBuffer" ? "binary" : n);
      }
      function Zo(n) {
        return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      }
      function wr(n, r, s) {
        var u = n.schema.yProps;
        return u ? (r && 0 < s.numFailures && (r = r.filter(function(c, d) {
          return !s.failures[d];
        })), Promise.all(u.map(function(c) {
          return c = c.updatesTable, r ? n.db.table(c).where("k").anyOf(r).delete() : n.db.table(c).clear();
        })).then(function() {
          return s;
        })) : s;
      }
      var es = (Ue.prototype._trans = function(n, r, s) {
        var u = this._tx || fe.trans, c = this.name, d = ye && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(S, O, g) {
          if (!g.schema[c]) throw new V.NotFound("Table " + c + " not part of transaction");
          return r(g.idbtrans, g);
        }
        var y = _n();
        try {
          var w = u && u.db._novip === this.db._novip ? u === fe.trans ? u._promise(n, h, s) : Ut(function() {
            return u._promise(n, h, s);
          }, { trans: u, transless: fe.transless || fe }) : function S(O, g, I, x) {
            if (O.idbdb && (O._state.openComplete || fe.letThrough || O._vip)) {
              var C = O._createTransaction(g, I, O._dbSchema);
              try {
                C.create(), O._state.PR1398_maxLoop = 3;
              } catch (A) {
                return A.name === P.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                  return S(O, g, I, x);
                })) : ze(A);
              }
              return C._promise(g, function(A, T) {
                return Ut(function() {
                  return fe.trans = C, x(A, T, C);
                });
              }).then(function(A) {
                if (g === "readwrite") try {
                  C.idbtrans.commit();
                } catch {
                }
                return g === "readonly" ? A : C._completion.then(function() {
                  return A;
                });
              });
            }
            if (O._state.openComplete) return ze(new V.DatabaseClosed(O._state.dbOpenError));
            if (!O._state.isBeingOpened) {
              if (!O._state.autoOpen) return ze(new V.DatabaseClosed());
              O.open().catch(Ce);
            }
            return O._state.dbReadyPromise.then(function() {
              return S(O, g, I, x);
            });
          }(this.db, n, [this.name], h);
          return d && (w._consoleTask = d, w = w.catch(function(S) {
            return console.trace(S), ze(S);
          })), w;
        } finally {
          y && wn();
        }
      }, Ue.prototype.get = function(n, r) {
        var s = this;
        return n && n.constructor === Object ? this.where(n).first(r) : n == null ? ze(new V.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return s.core.get({ trans: u, key: n }).then(function(c) {
            return s.hook.reading.fire(c);
          });
        }).then(r);
      }, Ue.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (p(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var r = f(n);
        if (r.length === 1) return this.where(r[0]).equals(n[r[0]]);
        var s = this.schema.indexes.concat(this.schema.primKey).filter(function(y) {
          if (y.compound && r.every(function(S) {
            return 0 <= y.keyPath.indexOf(S);
          })) {
            for (var w = 0; w < r.length; ++w) if (r.indexOf(y.keyPath[w]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(y, w) {
          return y.keyPath.length - w.keyPath.length;
        })[0];
        if (s && this.db._maxKey !== on) {
          var d = s.keyPath.slice(0, r.length);
          return this.where(d).equals(d.map(function(w) {
            return n[w];
          }));
        }
        !s && ye && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function c(y, w) {
          return Pe(y, w) === 0;
        }
        var h = r.reduce(function(g, w) {
          var S = g[0], O = g[1], g = u[w], I = n[w];
          return [S || g, S || !g ? sn(O, g && g.multi ? function(x) {
            return x = te(x, w), p(x) && x.some(function(C) {
              return c(I, C);
            });
          } : function(x) {
            return c(I, te(x, w));
          }) : O];
        }, [null, null]), d = h[0], h = h[1];
        return d ? this.where(d.name).equals(n[d.keyPath]).filter(h) : s ? this.filter(h) : this.where(r).equals("");
      }, Ue.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, Ue.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, Ue.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, Ue.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, Ue.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, Ue.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, Ue.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ue.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, p(n) ? "[".concat(n.join("+"), "]") : n));
      }, Ue.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ue.prototype.mapToClass = function(n) {
        var r, s = this.db, u = this.name;
        function c() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = n).prototype instanceof Qo && (function(w, S) {
          if (typeof S != "function" && S !== null) throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
          function O() {
            this.constructor = w;
          }
          i(w, S), w.prototype = S === null ? Object.create(S) : (O.prototype = S.prototype, new O());
        }(c, r = n), Object.defineProperty(c.prototype, "db", { get: function() {
          return s;
        }, enumerable: !1, configurable: !0 }), c.prototype.table = function() {
          return u;
        }, n = c);
        for (var d = /* @__PURE__ */ new Set(), h = n.prototype; h; h = _(h)) Object.getOwnPropertyNames(h).forEach(function(w) {
          return d.add(w);
        });
        function y(w) {
          if (!w) return w;
          var S, O = Object.create(n.prototype);
          for (S in w) if (!d.has(S)) try {
            O[S] = w[S];
          } catch {
          }
          return O;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), n;
      }, Ue.prototype.defineClass = function() {
        return this.mapToClass(function(n) {
          m(this, n);
        });
      }, Ue.prototype.add = function(n, r) {
        var s = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = n;
        return d && c && (h = _r(d)(n)), this._trans("readwrite", function(y) {
          return s.core.mutate({ trans: y, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(y) {
          return y.numFailures ? se.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            J(n, d, y);
          } catch {
          }
          return y;
        });
      }, Ue.prototype.update = function(n, r) {
        return typeof n != "object" || p(n) ? this.where(":id").equals(n).modify(r) : (n = te(n, this.schema.primKey.keyPath), n === void 0 ? ze(new V.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(r));
      }, Ue.prototype.put = function(n, r) {
        var s = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = n;
        return d && c && (h = _r(d)(n)), this._trans("readwrite", function(y) {
          return s.core.mutate({ trans: y, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(y) {
          return y.numFailures ? se.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            J(n, d, y);
          } catch {
          }
          return y;
        });
      }, Ue.prototype.delete = function(n) {
        var r = this;
        return this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "delete", keys: [n] }).then(function(u) {
            return wr(r, [n], u);
          }).then(function(u) {
            return u.numFailures ? se.reject(u.failures[0]) : void 0;
          });
        });
      }, Ue.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(r) {
          return n.core.mutate({ trans: r, type: "deleteRange", range: Xo }).then(function(s) {
            return wr(n, null, s);
          });
        }).then(function(r) {
          return r.numFailures ? se.reject(r.failures[0]) : void 0;
        });
      }, Ue.prototype.bulkGet = function(n) {
        var r = this;
        return this._trans("readonly", function(s) {
          return r.core.getMany({ keys: n, trans: s }).then(function(u) {
            return u.map(function(c) {
              return r.hook.reading.fire(c);
            });
          });
        });
      }, Ue.prototype.bulkAdd = function(n, r, s) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (s = s || (c ? void 0 : r)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var S = u.schema.primKey, y = S.auto, S = S.keyPath;
          if (S && c) throw new V.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== n.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var w = n.length, S = S && y ? n.map(_r(S)) : n;
          return u.core.mutate({ trans: h, type: "add", keys: c, values: S, wantResults: d }).then(function(C) {
            var g = C.numFailures, I = C.results, x = C.lastResult, C = C.failures;
            if (g === 0) return d ? I : x;
            throw new Ct("".concat(u.name, ".bulkAdd(): ").concat(g, " of ").concat(w, " operations failed"), C);
          });
        });
      }, Ue.prototype.bulkPut = function(n, r, s) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (s = s || (c ? void 0 : r)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var S = u.schema.primKey, y = S.auto, S = S.keyPath;
          if (S && c) throw new V.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== n.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var w = n.length, S = S && y ? n.map(_r(S)) : n;
          return u.core.mutate({ trans: h, type: "put", keys: c, values: S, wantResults: d }).then(function(C) {
            var g = C.numFailures, I = C.results, x = C.lastResult, C = C.failures;
            if (g === 0) return d ? I : x;
            throw new Ct("".concat(u.name, ".bulkPut(): ").concat(g, " of ").concat(w, " operations failed"), C);
          });
        });
      }, Ue.prototype.bulkUpdate = function(n) {
        var r = this, s = this.core, u = n.map(function(h) {
          return h.key;
        }), c = n.map(function(h) {
          return h.changes;
        }), d = [];
        return this._trans("readwrite", function(h) {
          return s.getMany({ trans: h, keys: u, cache: "clone" }).then(function(y) {
            var w = [], S = [];
            n.forEach(function(g, I) {
              var x = g.key, C = g.changes, A = y[I];
              if (A) {
                for (var T = 0, N = Object.keys(C); T < N.length; T++) {
                  var B = N[T], q = C[B];
                  if (B === r.schema.primKey.keyPath) {
                    if (Pe(q, x) !== 0) throw new V.Constraint("Cannot update primary key in bulkUpdate()");
                  } else J(A, B, q);
                }
                d.push(I), w.push(x), S.push(A);
              }
            });
            var O = w.length;
            return s.mutate({ trans: h, type: "put", keys: w, values: S, updates: { keys: u, changeSpecs: c } }).then(function(g) {
              var I = g.numFailures, x = g.failures;
              if (I === 0) return O;
              for (var C = 0, A = Object.keys(x); C < A.length; C++) {
                var T, N = A[C], B = d[Number(N)];
                B != null && (T = x[N], delete x[N], x[B] = T);
              }
              throw new Ct("".concat(r.name, ".bulkUpdate(): ").concat(I, " of ").concat(O, " operations failed"), x);
            });
          });
        });
      }, Ue.prototype.bulkDelete = function(n) {
        var r = this, s = n.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: n }).then(function(c) {
            return wr(r, n, c);
          });
        }).then(function(h) {
          var c = h.numFailures, d = h.lastResult, h = h.failures;
          if (c === 0) return d;
          throw new Ct("".concat(r.name, ".bulkDelete(): ").concat(c, " of ").concat(s, " operations failed"), h);
        });
      }, Ue);
      function Ue() {
      }
      function qn(n) {
        function r(h, y) {
          if (y) {
            for (var w = arguments.length, S = new Array(w - 1); --w; ) S[w - 1] = arguments[w];
            return s[h].subscribe.apply(null, S), n;
          }
          if (typeof h == "string") return s[h];
        }
        var s = {};
        r.addEventType = d;
        for (var u = 1, c = arguments.length; u < c; ++u) d(arguments[u]);
        return r;
        function d(h, y, w) {
          if (typeof h != "object") {
            var S;
            y = y || Te;
            var O = { subscribers: [], fire: w = w || Ce, subscribe: function(g) {
              O.subscribers.indexOf(g) === -1 && (O.subscribers.push(g), O.fire = y(O.fire, g));
            }, unsubscribe: function(g) {
              O.subscribers = O.subscribers.filter(function(I) {
                return I !== g;
              }), O.fire = O.subscribers.reduce(y, w);
            } };
            return s[h] = r[h] = O;
          }
          f(S = h).forEach(function(g) {
            var I = S[g];
            if (p(I)) d(g, S[g][0], S[g][1]);
            else {
              if (I !== "asap") throw new V.InvalidArgument("Invalid event config");
              var x = d(g, j, function() {
                for (var C = arguments.length, A = new Array(C); C--; ) A[C] = arguments[C];
                x.subscribers.forEach(function(T) {
                  H(function() {
                    T.apply(null, A);
                  });
                });
              });
            }
          });
        }
      }
      function Kn(n, r) {
        return M(r).from({ prototype: n }), r;
      }
      function Sn(n, r) {
        return !(n.filter || n.algorithm || n.or) && (r ? n.justLimit : !n.replayFilter);
      }
      function Ei(n, r) {
        n.filter = sn(n.filter, r);
      }
      function Si(n, r, s) {
        var u = n.replayFilter;
        n.replayFilter = u ? function() {
          return sn(u(), r());
        } : r, n.justLimit = s && !u;
      }
      function xr(n, r) {
        if (n.isPrimKey) return r.primaryKey;
        var s = r.getIndexByKeyPath(n.index);
        if (!s) throw new V.Schema("KeyPath " + n.index + " on object store " + r.name + " is not indexed");
        return s;
      }
      function ts(n, r, s) {
        var u = xr(n, r.schema);
        return r.openCursor({ trans: s, values: !n.keysOnly, reverse: n.dir === "prev", unique: !!n.unique, query: { index: u, range: n.range } });
      }
      function Er(n, r, s, u) {
        var c = n.replayFilter ? sn(n.filter, n.replayFilter()) : n.filter;
        if (n.or) {
          var d = {}, h = function(y, w, S) {
            var O, g;
            c && !c(w, S, function(I) {
              return w.stop(I);
            }, function(I) {
              return w.fail(I);
            }) || ((g = "" + (O = w.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(O)), b(d, g) || (d[g] = !0, r(y, w, S)));
          };
          return Promise.all([n.or._iterate(h, s), ns(ts(n, u, s), n.algorithm, h, !n.keysOnly && n.valueMapper)]);
        }
        return ns(ts(n, u, s), sn(n.algorithm, c), r, !n.keysOnly && n.valueMapper);
      }
      function ns(n, r, s, u) {
        var c = $e(u ? function(d, h, y) {
          return s(u(d), h, y);
        } : s);
        return n.then(function(d) {
          if (d) return d.start(function() {
            var h = function() {
              return d.continue();
            };
            r && !r(d, function(y) {
              return h = y;
            }, function(y) {
              d.stop(y), h = Ce;
            }, function(y) {
              d.fail(y), h = Ce;
            }) || c(d.value, d, function(y) {
              return h = y;
            }), h();
          });
        });
      }
      var Un = (rs.prototype.execute = function(n) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var s = r.add;
          if (p(s)) return a(a([], p(n) ? n : [], !0), s).sort();
          if (typeof s == "number") return (Number(n) || 0) + s;
          if (typeof s == "bigint") try {
            return BigInt(n) + s;
          } catch {
            return BigInt(0) + s;
          }
          throw new TypeError("Invalid term ".concat(s));
        }
        if (r.remove !== void 0) {
          var u = r.remove;
          if (p(u)) return p(n) ? n.filter(function(c) {
            return !u.includes(c);
          }).sort() : [];
          if (typeof u == "number") return Number(n) - u;
          if (typeof u == "bigint") try {
            return BigInt(n) - u;
          } catch {
            return BigInt(0) - u;
          }
          throw new TypeError("Invalid subtrahend ".concat(u));
        }
        return s = (s = r.replacePrefix) === null || s === void 0 ? void 0 : s[0], s && typeof n == "string" && n.startsWith(s) ? r.replacePrefix[1] + n.substring(s.length) : n;
      }, rs);
      function rs(n) {
        this["@@propmod"] = n;
      }
      var Au = (De.prototype._read = function(n, r) {
        var s = this._ctx;
        return s.error ? s.table._trans(null, ze.bind(null, s.error)) : s.table._trans("readonly", n).then(r);
      }, De.prototype._write = function(n) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, ze.bind(null, r.error)) : r.table._trans("readwrite", n, "locked");
      }, De.prototype._addAlgorithm = function(n) {
        var r = this._ctx;
        r.algorithm = sn(r.algorithm, n);
      }, De.prototype._iterate = function(n, r) {
        return Er(this._ctx, n, r, this._ctx.table.core);
      }, De.prototype.clone = function(n) {
        var r = Object.create(this.constructor.prototype), s = Object.create(this._ctx);
        return n && m(s, n), r._ctx = s, r;
      }, De.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, De.prototype.each = function(n) {
        var r = this._ctx;
        return this._read(function(s) {
          return Er(r, n, s, r.table.core);
        });
      }, De.prototype.count = function(n) {
        var r = this;
        return this._read(function(s) {
          var u = r._ctx, c = u.table.core;
          if (Sn(u, !0)) return c.count({ trans: s, query: { index: xr(u, c.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var d = 0;
          return Er(u, function() {
            return ++d, !1;
          }, s, c).then(function() {
            return d;
          });
        }).then(n);
      }, De.prototype.sortBy = function(n, r) {
        var s = n.split(".").reverse(), u = s[0], c = s.length - 1;
        function d(w, S) {
          return S ? d(w[s[S]], S - 1) : w[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(w, S) {
          return Pe(d(w, c), d(S, c)) * h;
        }
        return this.toArray(function(w) {
          return w.sort(y);
        }).then(r);
      }, De.prototype.toArray = function(n) {
        var r = this;
        return this._read(function(s) {
          var u = r._ctx;
          if (u.dir === "next" && Sn(u, !0) && 0 < u.limit) {
            var c = u.valueMapper, d = xr(u, u.table.core.schema);
            return u.table.core.query({ trans: s, limit: u.limit, values: !0, query: { index: d, range: u.range } }).then(function(y) {
              return y = y.result, c ? y.map(c) : y;
            });
          }
          var h = [];
          return Er(u, function(y) {
            return h.push(y);
          }, s, u.table.core).then(function() {
            return h;
          });
        }, n);
      }, De.prototype.offset = function(n) {
        var r = this._ctx;
        return n <= 0 || (r.offset += n, Sn(r) ? Si(r, function() {
          var s = n;
          return function(u, c) {
            return s === 0 || (s === 1 ? --s : c(function() {
              u.advance(s), s = 0;
            }), !1);
          };
        }) : Si(r, function() {
          var s = n;
          return function() {
            return --s < 0;
          };
        })), this;
      }, De.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), Si(this._ctx, function() {
          var r = n;
          return function(s, u, c) {
            return --r <= 0 && u(c), 0 <= r;
          };
        }, !0), this;
      }, De.prototype.until = function(n, r) {
        return Ei(this._ctx, function(s, u, c) {
          return !n(s.value) || (u(c), r);
        }), this;
      }, De.prototype.first = function(n) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(n);
      }, De.prototype.last = function(n) {
        return this.reverse().first(n);
      }, De.prototype.filter = function(n) {
        var r;
        return Ei(this._ctx, function(s) {
          return n(s.value);
        }), (r = this._ctx).isMatch = sn(r.isMatch, n), this;
      }, De.prototype.and = function(n) {
        return this.filter(n);
      }, De.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, De.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, De.prototype.desc = function() {
        return this.reverse();
      }, De.prototype.eachKey = function(n) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(s, u) {
          n(u.key, u);
        });
      }, De.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, De.prototype.eachPrimaryKey = function(n) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(s, u) {
          n(u.primaryKey, u);
        });
      }, De.prototype.keys = function(n) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var s = [];
        return this.each(function(u, c) {
          s.push(c.key);
        }).then(function() {
          return s;
        }).then(n);
      }, De.prototype.primaryKeys = function(n) {
        var r = this._ctx;
        if (r.dir === "next" && Sn(r, !0) && 0 < r.limit) return this._read(function(u) {
          var c = xr(r, r.table.core.schema);
          return r.table.core.query({ trans: u, values: !1, limit: r.limit, query: { index: c, range: r.range } });
        }).then(function(u) {
          return u.result;
        }).then(n);
        r.keysOnly = !r.isMatch;
        var s = [];
        return this.each(function(u, c) {
          s.push(c.primaryKey);
        }).then(function() {
          return s;
        }).then(n);
      }, De.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, De.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(n);
      }, De.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, De.prototype.distinct = function() {
        var n = this._ctx, n = n.index && n.table.schema.idxByName[n.index];
        if (!n || !n.multi) return this;
        var r = {};
        return Ei(this._ctx, function(c) {
          var u = c.primaryKey.toString(), c = b(r, u);
          return r[u] = !0, !c;
        }), this;
      }, De.prototype.modify = function(n) {
        var r = this, s = this._ctx;
        return this._write(function(u) {
          var c, d, h;
          h = typeof n == "function" ? n : (c = f(n), d = c.length, function(N) {
            for (var B = !1, q = 0; q < d; ++q) {
              var K = c[q], Y = n[K], ee = te(N, K);
              Y instanceof Un ? (J(N, K, Y.execute(ee)), B = !0) : ee !== Y && (J(N, K, Y), B = !0);
            }
            return B;
          });
          var y = s.table.core, g = y.schema.primaryKey, w = g.outbound, S = g.extractKey, O = 200, g = r.db._options.modifyChunkSize;
          g && (O = typeof g == "object" ? g[y.name] || g["*"] || 200 : g);
          function I(N, K) {
            var q = K.failures, K = K.numFailures;
            C += N - K;
            for (var Y = 0, ee = f(q); Y < ee.length; Y++) {
              var X = ee[Y];
              x.push(q[X]);
            }
          }
          var x = [], C = 0, A = [], T = n === is;
          return r.clone().primaryKeys().then(function(N) {
            function B(K) {
              var Y = Math.min(O, N.length - K), ee = N.slice(K, K + Y);
              return (T ? Promise.resolve([]) : y.getMany({ trans: u, keys: ee, cache: "immutable" })).then(function(X) {
                var Z = [], oe = [], ie = w ? [] : null, ae = T ? ee : [];
                if (!T) for (var Oe = 0; Oe < Y; ++Oe) {
                  var Ie = X[Oe], Ee = { value: _e(Ie), primKey: N[K + Oe] };
                  h.call(Ee, Ee.value, Ee) !== !1 && (Ee.value == null ? ae.push(N[K + Oe]) : w || Pe(S(Ie), S(Ee.value)) === 0 ? (oe.push(Ee.value), w && ie.push(N[K + Oe])) : (ae.push(N[K + Oe]), Z.push(Ee.value)));
                }
                return Promise.resolve(0 < Z.length && y.mutate({ trans: u, type: "add", values: Z }).then(function(Ge) {
                  for (var xe in Ge.failures) ae.splice(parseInt(xe), 1);
                  I(Z.length, Ge);
                })).then(function() {
                  return (0 < oe.length || q && typeof n == "object") && y.mutate({ trans: u, type: "put", keys: ie, values: oe, criteria: q, changeSpec: typeof n != "function" && n, isAdditionalChunk: 0 < K }).then(function(Ge) {
                    return I(oe.length, Ge);
                  });
                }).then(function() {
                  return (0 < ae.length || q && T) && y.mutate({ trans: u, type: "delete", keys: ae, criteria: q, isAdditionalChunk: 0 < K }).then(function(Ge) {
                    return wr(s.table, ae, Ge);
                  }).then(function(Ge) {
                    return I(ae.length, Ge);
                  });
                }).then(function() {
                  return N.length > K + Y && B(K + O);
                });
              });
            }
            var q = Sn(s) && s.limit === 1 / 0 && (typeof n != "function" || T) && { index: s.index, range: s.range };
            return B(0).then(function() {
              if (0 < x.length) throw new Jt("Error modifying one or more objects", x, C, A);
              return N.length;
            });
          });
        });
      }, De.prototype.delete = function() {
        var n = this._ctx, r = n.range;
        return !Sn(n) || n.table.schema.yProps || !n.isPrimKey && r.type !== 3 ? this.modify(is) : this._write(function(s) {
          var u = n.table.core.schema.primaryKey, c = r;
          return n.table.core.count({ trans: s, query: { index: u, range: c } }).then(function(d) {
            return n.table.core.mutate({ trans: s, type: "deleteRange", range: c }).then(function(w) {
              var y = w.failures, w = w.numFailures;
              if (w) throw new Jt("Could not delete some values", Object.keys(y).map(function(S) {
                return y[S];
              }), d - w);
              return d - w;
            });
          });
        });
      }, De);
      function De() {
      }
      var is = function(n, r) {
        return r.value = null;
      };
      function Pu(n, r) {
        return n < r ? -1 : n === r ? 0 : 1;
      }
      function Iu(n, r) {
        return r < n ? -1 : n === r ? 0 : 1;
      }
      function bt(n, r, s) {
        return n = n instanceof ss ? new n.Collection(n) : n, n._ctx.error = new (s || TypeError)(r), n;
      }
      function Cn(n) {
        return new n.Collection(n, function() {
          return os("");
        }).limit(0);
      }
      function Sr(n, r, s, u) {
        var c, d, h, y, w, S, O, g = s.length;
        if (!s.every(function(C) {
          return typeof C == "string";
        })) return bt(n, Yo);
        function I(C) {
          c = C === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, d = C === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = C === "next" ? Pu : Iu;
          var A = s.map(function(T) {
            return { lower: d(T), upper: c(T) };
          }).sort(function(T, N) {
            return h(T.lower, N.lower);
          });
          y = A.map(function(T) {
            return T.upper;
          }), w = A.map(function(T) {
            return T.lower;
          }), O = (S = C) === "next" ? "" : u;
        }
        I("next"), n = new n.Collection(n, function() {
          return Ht(y[0], w[g - 1] + u);
        }), n._ondirectionchange = function(C) {
          I(C);
        };
        var x = 0;
        return n._addAlgorithm(function(C, A, T) {
          var N = C.key;
          if (typeof N != "string") return !1;
          var B = d(N);
          if (r(B, w, x)) return !0;
          for (var q = null, K = x; K < g; ++K) {
            var Y = function(ee, X, Z, oe, ie, ae) {
              for (var Oe = Math.min(ee.length, oe.length), Ie = -1, Ee = 0; Ee < Oe; ++Ee) {
                var Ge = X[Ee];
                if (Ge !== oe[Ee]) return ie(ee[Ee], Z[Ee]) < 0 ? ee.substr(0, Ee) + Z[Ee] + Z.substr(Ee + 1) : ie(ee[Ee], oe[Ee]) < 0 ? ee.substr(0, Ee) + oe[Ee] + Z.substr(Ee + 1) : 0 <= Ie ? ee.substr(0, Ie) + X[Ie] + Z.substr(Ie + 1) : null;
                ie(ee[Ee], Ge) < 0 && (Ie = Ee);
              }
              return Oe < oe.length && ae === "next" ? ee + Z.substr(ee.length) : Oe < ee.length && ae === "prev" ? ee.substr(0, Z.length) : Ie < 0 ? null : ee.substr(0, Ie) + oe[Ie] + Z.substr(Ie + 1);
            }(N, B, y[K], w[K], h, S);
            Y === null && q === null ? x = K + 1 : (q === null || 0 < h(q, Y)) && (q = Y);
          }
          return A(q !== null ? function() {
            C.continue(q + O);
          } : T), !1;
        }), n;
      }
      function Ht(n, r, s, u) {
        return { type: 2, lower: n, upper: r, lowerOpen: s, upperOpen: u };
      }
      function os(n) {
        return { type: 1, lower: n, upper: n };
      }
      var ss = (Object.defineProperty(et.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), et.prototype.between = function(n, r, s, u) {
        s = s !== !1, u = u === !0;
        try {
          return 0 < this._cmp(n, r) || this._cmp(n, r) === 0 && (s || u) && (!s || !u) ? Cn(this) : new this.Collection(this, function() {
            return Ht(n, r, !s, !u);
          });
        } catch {
          return bt(this, jt);
        }
      }, et.prototype.equals = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return os(n);
        });
      }, et.prototype.above = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(n, void 0, !0);
        });
      }, et.prototype.aboveOrEqual = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(n, void 0, !1);
        });
      }, et.prototype.below = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(void 0, n, !1, !0);
        });
      }, et.prototype.belowOrEqual = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(void 0, n);
        });
      }, et.prototype.startsWith = function(n) {
        return typeof n != "string" ? bt(this, Yo) : this.between(n, n + on, !0, !0);
      }, et.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : Sr(this, function(r, s) {
          return r.indexOf(s[0]) === 0;
        }, [n], on);
      }, et.prototype.equalsIgnoreCase = function(n) {
        return Sr(this, function(r, s) {
          return r === s[0];
        }, [n], "");
      }, et.prototype.anyOfIgnoreCase = function() {
        var n = tt.apply(je, arguments);
        return n.length === 0 ? Cn(this) : Sr(this, function(r, s) {
          return s.indexOf(r) !== -1;
        }, n, "");
      }, et.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = tt.apply(je, arguments);
        return n.length === 0 ? Cn(this) : Sr(this, function(r, s) {
          return s.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, n, on);
      }, et.prototype.anyOf = function() {
        var n = this, r = tt.apply(je, arguments), s = this._cmp;
        try {
          r.sort(s);
        } catch {
          return bt(this, jt);
        }
        if (r.length === 0) return Cn(this);
        var u = new this.Collection(this, function() {
          return Ht(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(d) {
          s = d === "next" ? n._ascending : n._descending, r.sort(s);
        };
        var c = 0;
        return u._addAlgorithm(function(d, h, y) {
          for (var w = d.key; 0 < s(w, r[c]); ) if (++c === r.length) return h(y), !1;
          return s(w, r[c]) === 0 || (h(function() {
            d.continue(r[c]);
          }), !1);
        }), u;
      }, et.prototype.notEqual = function(n) {
        return this.inAnyRange([[-1 / 0, n], [n, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, et.prototype.noneOf = function() {
        var n = tt.apply(je, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return bt(this, jt);
        }
        var r = n.reduce(function(s, u) {
          return s ? s.concat([[s[s.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, et.prototype.inAnyRange = function(N, r) {
        var s = this, u = this._cmp, c = this._ascending, d = this._descending, h = this._min, y = this._max;
        if (N.length === 0) return Cn(this);
        if (!N.every(function(B) {
          return B[0] !== void 0 && B[1] !== void 0 && c(B[0], B[1]) <= 0;
        })) return bt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", V.InvalidArgument);
        var w = !r || r.includeLowers !== !1, S = r && r.includeUppers === !0, O, g = c;
        function I(B, q) {
          return g(B[0], q[0]);
        }
        try {
          (O = N.reduce(function(B, q) {
            for (var K = 0, Y = B.length; K < Y; ++K) {
              var ee = B[K];
              if (u(q[0], ee[1]) < 0 && 0 < u(q[1], ee[0])) {
                ee[0] = h(ee[0], q[0]), ee[1] = y(ee[1], q[1]);
                break;
              }
            }
            return K === Y && B.push(q), B;
          }, [])).sort(I);
        } catch {
          return bt(this, jt);
        }
        var x = 0, C = S ? function(B) {
          return 0 < c(B, O[x][1]);
        } : function(B) {
          return 0 <= c(B, O[x][1]);
        }, A = w ? function(B) {
          return 0 < d(B, O[x][0]);
        } : function(B) {
          return 0 <= d(B, O[x][0]);
        }, T = C, N = new this.Collection(this, function() {
          return Ht(O[0][0], O[O.length - 1][1], !w, !S);
        });
        return N._ondirectionchange = function(B) {
          g = B === "next" ? (T = C, c) : (T = A, d), O.sort(I);
        }, N._addAlgorithm(function(B, q, K) {
          for (var Y, ee = B.key; T(ee); ) if (++x === O.length) return q(K), !1;
          return !C(Y = ee) && !A(Y) || (s._cmp(ee, O[x][1]) === 0 || s._cmp(ee, O[x][0]) === 0 || q(function() {
            g === c ? B.continue(O[x][0]) : B.continue(O[x][1]);
          }), !1);
        }), N;
      }, et.prototype.startsWithAnyOf = function() {
        var n = tt.apply(je, arguments);
        return n.every(function(r) {
          return typeof r == "string";
        }) ? n.length === 0 ? Cn(this) : this.inAnyRange(n.map(function(r) {
          return [r, r + on];
        })) : bt(this, "startsWithAnyOf() only works with strings");
      }, et);
      function et() {
      }
      function kt(n) {
        return $e(function(r) {
          return Vn(r), n(r.target.error), !1;
        });
      }
      function Vn(n) {
        n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault();
      }
      var $n = "storagemutated", Ci = "x-storagemutated-1", Wt = qn(null, $n), Nu = (Dt.prototype._lock = function() {
        return U(!fe.global), ++this._reculock, this._reculock !== 1 || fe.global || (fe.lockOwnerFor = this), this;
      }, Dt.prototype._unlock = function() {
        if (U(!fe.global), --this._reculock == 0) for (fe.global || (fe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            rn(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, Dt.prototype._locked = function() {
        return this._reculock && fe.lockOwnerFor !== this;
      }, Dt.prototype.create = function(n) {
        var r = this;
        if (!this.mode) return this;
        var s = this.db.idbdb, u = this.db._state.dbOpenError;
        if (U(!this.idbtrans), !n && !s) switch (u && u.name) {
          case "DatabaseClosedError":
            throw new V.DatabaseClosed(u);
          case "MissingAPIError":
            throw new V.MissingAPI(u.message, u);
          default:
            throw new V.OpenFailed(u);
        }
        if (!this.active) throw new V.TransactionInactive();
        return U(this._completion._state === null), (n = this.idbtrans = n || (this.db.core || s).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = $e(function(c) {
          Vn(c), r._reject(n.error);
        }), n.onabort = $e(function(c) {
          Vn(c), r.active && r._reject(new V.Abort(n.error)), r.active = !1, r.on("abort").fire(c);
        }), n.oncomplete = $e(function() {
          r.active = !1, r._resolve(), "mutatedParts" in n && Wt.storagemutated.fire(n.mutatedParts);
        }), this;
      }, Dt.prototype._promise = function(n, r, s) {
        var u = this;
        if (n === "readwrite" && this.mode !== "readwrite") return ze(new V.ReadOnly("Transaction is readonly"));
        if (!this.active) return ze(new V.TransactionInactive());
        if (this._locked()) return new se(function(d, h) {
          u._blockedFuncs.push([function() {
            u._promise(n, r, s).then(d, h);
          }, fe]);
        });
        if (s) return Ut(function() {
          var d = new se(function(h, y) {
            u._lock();
            var w = r(h, y, u);
            w && w.then && w.then(h, y);
          });
          return d.finally(function() {
            return u._unlock();
          }), d._lib = !0, d;
        });
        var c = new se(function(d, h) {
          var y = r(d, h, u);
          y && y.then && y.then(d, h);
        });
        return c._lib = !0, c;
      }, Dt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Dt.prototype.waitFor = function(n) {
        var r, s = this._root(), u = se.resolve(n);
        s._waitingFor ? s._waitingFor = s._waitingFor.then(function() {
          return u;
        }) : (s._waitingFor = u, s._waitingQueue = [], r = s.idbtrans.objectStore(s.storeNames[0]), function d() {
          for (++s._spinCount; s._waitingQueue.length; ) s._waitingQueue.shift()();
          s._waitingFor && (r.get(-1 / 0).onsuccess = d);
        }());
        var c = s._waitingFor;
        return new se(function(d, h) {
          u.then(function(y) {
            return s._waitingQueue.push($e(d.bind(null, y)));
          }, function(y) {
            return s._waitingQueue.push($e(h.bind(null, y)));
          }).finally(function() {
            s._waitingFor === c && (s._waitingFor = null);
          });
        });
      }, Dt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new V.Abort()));
      }, Dt.prototype.table = function(n) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (b(r, n)) return r[n];
        var s = this.schema[n];
        if (!s) throw new V.NotFound("Table " + n + " not part of transaction");
        return s = new this.db.Table(n, s, this), s.core = this.db.core.table(n), r[n] = s;
      }, Dt);
      function Dt() {
      }
      function Oi(n, r, s, u, c, d, h, y) {
        return { name: n, keyPath: r, unique: s, multi: u, auto: c, compound: d, src: (s && !h ? "&" : "") + (u ? "*" : "") + (c ? "++" : "") + as(r), type: y };
      }
      function as(n) {
        return typeof n == "string" ? n : n ? "[" + [].join.call(n, "+") + "]" : "";
      }
      function Ti(n, r, s) {
        return { name: n, primKey: r, indexes: s, mappedClass: null, idxByName: (u = function(c) {
          return [c.name, c];
        }, s.reduce(function(c, d, h) {
          return h = u(d, h), h && (c[h[0]] = h[1]), c;
        }, {})) };
        var u;
      }
      var Hn = function(n) {
        try {
          return n.only([[]]), Hn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Hn = function() {
            return on;
          }, on;
        }
      };
      function Ai(n) {
        return n == null ? function() {
        } : typeof n == "string" ? (r = n).split(".").length === 1 ? function(s) {
          return s[r];
        } : function(s) {
          return te(s, r);
        } : function(s) {
          return te(s, n);
        };
        var r;
      }
      function us(n) {
        return [].slice.call(n);
      }
      var Ru = 0;
      function Wn(n) {
        return n == null ? ":id" : typeof n == "string" ? n : "[".concat(n.join("+"), "]");
      }
      function ku(n, r, w) {
        function u(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var x = T.lower, C = T.upper, A = T.lowerOpen, T = T.upperOpen;
          return x === void 0 ? C === void 0 ? null : r.upperBound(C, !!T) : C === void 0 ? r.lowerBound(x, !!A) : r.bound(x, C, !!A, !!T);
        }
        function c(I) {
          var x, C = I.name;
          return { name: C, schema: I, mutate: function(A) {
            var T = A.trans, N = A.type, B = A.keys, q = A.values, K = A.range;
            return new Promise(function(Y, ee) {
              Y = $e(Y);
              var X = T.objectStore(C), Z = X.keyPath == null, oe = N === "put" || N === "add";
              if (!oe && N !== "delete" && N !== "deleteRange") throw new Error("Invalid operation type: " + N);
              var ie, ae = (B || q || { length: 1 }).length;
              if (B && q && B.length !== q.length) throw new Error("Given keys array must have same length as given values array.");
              if (ae === 0) return Y({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Oe(lt) {
                ++Ge, Vn(lt);
              }
              var Ie = [], Ee = [], Ge = 0;
              if (N === "deleteRange") {
                if (K.type === 4) return Y({ numFailures: Ge, failures: Ee, results: [], lastResult: void 0 });
                K.type === 3 ? Ie.push(ie = X.clear()) : Ie.push(ie = X.delete(u(K)));
              } else {
                var Z = oe ? Z ? [q, B] : [q, null] : [B, null], xe = Z[0], at = Z[1];
                if (oe) for (var ut = 0; ut < ae; ++ut) Ie.push(ie = at && at[ut] !== void 0 ? X[N](xe[ut], at[ut]) : X[N](xe[ut])), ie.onerror = Oe;
                else for (ut = 0; ut < ae; ++ut) Ie.push(ie = X[N](xe[ut])), ie.onerror = Oe;
              }
              function Mr(lt) {
                lt = lt.target.result, Ie.forEach(function(ln, Wi) {
                  return ln.error != null && (Ee[Wi] = ln.error);
                }), Y({ numFailures: Ge, failures: Ee, results: N === "delete" ? B : Ie.map(function(ln) {
                  return ln.result;
                }), lastResult: lt });
              }
              ie.onerror = function(lt) {
                Oe(lt), Mr(lt);
              }, ie.onsuccess = Mr;
            });
          }, getMany: function(A) {
            var T = A.trans, N = A.keys;
            return new Promise(function(B, q) {
              B = $e(B);
              for (var K, Y = T.objectStore(C), ee = N.length, X = new Array(ee), Z = 0, oe = 0, ie = function(Ie) {
                Ie = Ie.target, X[Ie._pos] = Ie.result, ++oe === Z && B(X);
              }, ae = kt(q), Oe = 0; Oe < ee; ++Oe) N[Oe] != null && ((K = Y.get(N[Oe]))._pos = Oe, K.onsuccess = ie, K.onerror = ae, ++Z);
              Z === 0 && B(X);
            });
          }, get: function(A) {
            var T = A.trans, N = A.key;
            return new Promise(function(B, q) {
              B = $e(B);
              var K = T.objectStore(C).get(N);
              K.onsuccess = function(Y) {
                return B(Y.target.result);
              }, K.onerror = kt(q);
            });
          }, query: (x = S, function(A) {
            return new Promise(function(T, N) {
              T = $e(T);
              var B, q, K, Z = A.trans, Y = A.values, ee = A.limit, ie = A.query, X = ee === 1 / 0 ? void 0 : ee, oe = ie.index, ie = ie.range, Z = Z.objectStore(C), oe = oe.isPrimaryKey ? Z : Z.index(oe.name), ie = u(ie);
              if (ee === 0) return T({ result: [] });
              x ? ((X = Y ? oe.getAll(ie, X) : oe.getAllKeys(ie, X)).onsuccess = function(ae) {
                return T({ result: ae.target.result });
              }, X.onerror = kt(N)) : (B = 0, q = !Y && "openKeyCursor" in oe ? oe.openKeyCursor(ie) : oe.openCursor(ie), K = [], q.onsuccess = function(ae) {
                var Oe = q.result;
                return Oe ? (K.push(Y ? Oe.value : Oe.primaryKey), ++B === ee ? T({ result: K }) : void Oe.continue()) : T({ result: K });
              }, q.onerror = kt(N));
            });
          }), openCursor: function(A) {
            var T = A.trans, N = A.values, B = A.query, q = A.reverse, K = A.unique;
            return new Promise(function(Y, ee) {
              Y = $e(Y);
              var oe = B.index, X = B.range, Z = T.objectStore(C), Z = oe.isPrimaryKey ? Z : Z.index(oe.name), oe = q ? K ? "prevunique" : "prev" : K ? "nextunique" : "next", ie = !N && "openKeyCursor" in Z ? Z.openKeyCursor(u(X), oe) : Z.openCursor(u(X), oe);
              ie.onerror = kt(ee), ie.onsuccess = $e(function(ae) {
                var Oe, Ie, Ee, Ge, xe = ie.result;
                xe ? (xe.___id = ++Ru, xe.done = !1, Oe = xe.continue.bind(xe), Ie = (Ie = xe.continuePrimaryKey) && Ie.bind(xe), Ee = xe.advance.bind(xe), Ge = function() {
                  throw new Error("Cursor not stopped");
                }, xe.trans = T, xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = function() {
                  throw new Error("Cursor not started");
                }, xe.fail = $e(ee), xe.next = function() {
                  var at = this, ut = 1;
                  return this.start(function() {
                    return ut-- ? at.continue() : at.stop();
                  }).then(function() {
                    return at;
                  });
                }, xe.start = function(at) {
                  function ut() {
                    if (ie.result) try {
                      at();
                    } catch (lt) {
                      xe.fail(lt);
                    }
                    else xe.done = !0, xe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, xe.stop();
                  }
                  var Mr = new Promise(function(lt, ln) {
                    lt = $e(lt), ie.onerror = kt(ln), xe.fail = ln, xe.stop = function(Wi) {
                      xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = Ge, lt(Wi);
                    };
                  });
                  return ie.onsuccess = $e(function(lt) {
                    ie.onsuccess = ut, ut();
                  }), xe.continue = Oe, xe.continuePrimaryKey = Ie, xe.advance = Ee, ut(), Mr;
                }, Y(xe)) : Y(null);
              }, ee);
            });
          }, count: function(A) {
            var T = A.query, N = A.trans, B = T.index, q = T.range;
            return new Promise(function(K, Y) {
              var ee = N.objectStore(C), X = B.isPrimaryKey ? ee : ee.index(B.name), ee = u(q), X = ee ? X.count(ee) : X.count();
              X.onsuccess = $e(function(Z) {
                return K(Z.target.result);
              }), X.onerror = kt(Y);
            });
          } };
        }
        var d, h, y, O = (h = w, y = us((d = n).objectStoreNames), { schema: { name: d.name, tables: y.map(function(I) {
          return h.objectStore(I);
        }).map(function(I) {
          var x = I.keyPath, T = I.autoIncrement, C = p(x), A = {}, T = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: x == null, compound: C, keyPath: x, autoIncrement: T, unique: !0, extractKey: Ai(x) }, indexes: us(I.indexNames).map(function(N) {
            return I.index(N);
          }).map(function(K) {
            var B = K.name, q = K.unique, Y = K.multiEntry, K = K.keyPath, Y = { name: B, compound: p(K), keyPath: K, unique: q, multiEntry: Y, extractKey: Ai(K) };
            return A[Wn(K)] = Y;
          }), getIndexByKeyPath: function(N) {
            return A[Wn(N)];
          } };
          return A[":id"] = T.primaryKey, x != null && (A[Wn(x)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), w = O.schema, S = O.hasGetAll, O = w.tables.map(c), g = {};
        return O.forEach(function(I) {
          return g[I.name] = I;
        }), { stack: "dbcore", transaction: n.transaction.bind(n), table: function(I) {
          if (!g[I]) throw new Error("Table '".concat(I, "' not found"));
          return g[I];
        }, MIN_KEY: -1 / 0, MAX_KEY: Hn(r), schema: w };
      }
      function Du(n, r, s, u) {
        var c = s.IDBKeyRange;
        return s.indexedDB, { dbcore: (u = ku(r, c, u), n.dbcore.reduce(function(d, h) {
          return h = h.create, o(o({}, d), h(d));
        }, u)) };
      }
      function Cr(n, u) {
        var s = u.db, u = Du(n._middlewares, s, n._deps, u);
        n.core = u.dbcore, n.tables.forEach(function(c) {
          var d = c.name;
          n.core.schema.tables.some(function(h) {
            return h.name === d;
          }) && (c.core = n.core.table(d), n[d] instanceof n.Table && (n[d].core = c.core));
        });
      }
      function Or(n, r, s, u) {
        s.forEach(function(c) {
          var d = u[c];
          r.forEach(function(h) {
            var y = function w(S, O) {
              return W(S, O) || (S = _(S)) && w(S, O);
            }(h, c);
            (!y || "value" in y && y.value === void 0) && (h === n.Transaction.prototype || h instanceof n.Transaction ? D(h, c, { get: function() {
              return this.table(c);
            }, set: function(w) {
              R(this, c, { value: w, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[c] = new n.Table(c, d));
          });
        });
      }
      function Pi(n, r) {
        r.forEach(function(s) {
          for (var u in s) s[u] instanceof n.Table && delete s[u];
        });
      }
      function Fu(n, r) {
        return n._cfg.version - r._cfg.version;
      }
      function Mu(n, r, s, u) {
        var c = n._dbSchema;
        s.objectStoreNames.contains("$meta") && !c.$meta && (c.$meta = Ti("$meta", cs("")[0], []), n._storeNames.push("$meta"));
        var d = n._createTransaction("readwrite", n._storeNames, c);
        d.create(s), d._completion.catch(u);
        var h = d._reject.bind(d), y = fe.transless || fe;
        Ut(function() {
          return fe.trans = d, fe.transless = y, r !== 0 ? (Cr(n, s), S = r, ((w = d).storeNames.includes("$meta") ? w.table("$meta").get("version").then(function(O) {
            return O ?? S;
          }) : se.resolve(S)).then(function(O) {
            return I = O, x = d, C = s, A = [], O = (g = n)._versions, T = g._dbSchema = Ar(0, g.idbdb, C), (O = O.filter(function(N) {
              return N._cfg.version >= I;
            })).length !== 0 ? (O.forEach(function(N) {
              A.push(function() {
                var B = T, q = N._cfg.dbschema;
                Pr(g, B, C), Pr(g, q, C), T = g._dbSchema = q;
                var K = Ii(B, q);
                K.add.forEach(function(oe) {
                  Ni(C, oe[0], oe[1].primKey, oe[1].indexes);
                }), K.change.forEach(function(oe) {
                  if (oe.recreate) throw new V.Upgrade("Not yet support for changing primary key");
                  var ie = C.objectStore(oe.name);
                  oe.add.forEach(function(ae) {
                    return Tr(ie, ae);
                  }), oe.change.forEach(function(ae) {
                    ie.deleteIndex(ae.name), Tr(ie, ae);
                  }), oe.del.forEach(function(ae) {
                    return ie.deleteIndex(ae);
                  });
                });
                var Y = N._cfg.contentUpgrade;
                if (Y && N._cfg.version > I) {
                  Cr(g, C), x._memoizedTables = {};
                  var ee = ce(q);
                  K.del.forEach(function(oe) {
                    ee[oe] = B[oe];
                  }), Pi(g, [g.Transaction.prototype]), Or(g, [g.Transaction.prototype], f(ee), ee), x.schema = ee;
                  var X, Z = dt(Y);
                  return Z && xn(), K = se.follow(function() {
                    var oe;
                    (X = Y(x)) && Z && (oe = Vt.bind(null, null), X.then(oe, oe));
                  }), X && typeof X.then == "function" ? se.resolve(X) : K.then(function() {
                    return X;
                  });
                }
              }), A.push(function(B) {
                var q, K, Y = N._cfg.dbschema;
                q = Y, K = B, [].slice.call(K.db.objectStoreNames).forEach(function(ee) {
                  return q[ee] == null && K.db.deleteObjectStore(ee);
                }), Pi(g, [g.Transaction.prototype]), Or(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), x.schema = g._dbSchema;
              }), A.push(function(B) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === N._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(q) {
                  return q !== "$meta";
                })) : B.objectStore("$meta").put(N._cfg.version, "version"));
              });
            }), function N() {
              return A.length ? se.resolve(A.shift()(x.idbtrans)).then(N) : se.resolve();
            }().then(function() {
              ls(T, C);
            })) : se.resolve();
            var g, I, x, C, A, T;
          }).catch(h)) : (f(c).forEach(function(O) {
            Ni(s, O, c[O].primKey, c[O].indexes);
          }), Cr(n, s), void se.follow(function() {
            return n.on.populate.fire(d);
          }).catch(h));
          var w, S;
        });
      }
      function Bu(n, r) {
        ls(n._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var s = Ar(0, n.idbdb, r);
        Pr(n, n._dbSchema, r);
        for (var u = 0, c = Ii(s, n._dbSchema).change; u < c.length; u++) {
          var d = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(w) {
              ye && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(w.src)), Tr(y, w);
            });
          }(c[u]);
          if (typeof d == "object") return d.value;
        }
      }
      function Ii(n, r) {
        var s, u = { del: [], add: [], change: [] };
        for (s in n) r[s] || u.del.push(s);
        for (s in r) {
          var c = n[s], d = r[s];
          if (c) {
            var h = { name: s, def: d, recreate: !1, del: [], add: [], change: [] };
            if ("" + (c.primKey.keyPath || "") != "" + (d.primKey.keyPath || "") || c.primKey.auto !== d.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = c.idxByName, w = d.idxByName, S = void 0;
              for (S in y) w[S] || h.del.push(S);
              for (S in w) {
                var O = y[S], g = w[S];
                O ? O.src !== g.src && h.change.push(g) : h.add.push(g);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([s, d]);
        }
        return u;
      }
      function Ni(n, r, s, u) {
        var c = n.db.createObjectStore(r, s.keyPath ? { keyPath: s.keyPath, autoIncrement: s.auto } : { autoIncrement: s.auto });
        return u.forEach(function(d) {
          return Tr(c, d);
        }), c;
      }
      function ls(n, r) {
        f(n).forEach(function(s) {
          r.db.objectStoreNames.contains(s) || (ye && console.debug("Dexie: Creating missing table", s), Ni(r, s, n[s].primKey, n[s].indexes));
        });
      }
      function Tr(n, r) {
        n.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ar(n, r, s) {
        var u = {};
        return $(r.objectStoreNames, 0).forEach(function(c) {
          for (var d = s.objectStore(c), h = Oi(as(S = d.keyPath), S || "", !0, !1, !!d.autoIncrement, S && typeof S != "string", !0), y = [], w = 0; w < d.indexNames.length; ++w) {
            var O = d.index(d.indexNames[w]), S = O.keyPath, O = Oi(O.name, S, !!O.unique, !!O.multiEntry, !1, S && typeof S != "string", !1);
            y.push(O);
          }
          u[c] = Ti(c, h, y);
        }), u;
      }
      function Pr(n, r, s) {
        for (var u = s.db.objectStoreNames, c = 0; c < u.length; ++c) {
          var d = u[c], h = s.objectStore(d);
          n._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var w = h.indexNames[y], S = h.index(w).keyPath, O = typeof S == "string" ? S : "[" + $(S).join("+") + "]";
            !r[d] || (S = r[d].idxByName[O]) && (S.name = w, delete r[d].idxByName[O], r[d].idxByName[w] = S);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (n._hasGetAll = !1);
      }
      function cs(n) {
        return n.split(",").map(function(r, s) {
          var d = r.split(":"), u = (c = d[1]) === null || c === void 0 ? void 0 : c.trim(), c = (r = d[0].trim()).replace(/([&*]|\+\+)/g, ""), d = /^\[/.test(c) ? c.match(/^\[(.*)\]$/)[1].split("+") : c;
          return Oi(c, d || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(d), s === 0, u);
        });
      }
      var Lu = (On.prototype._createTableSchema = Ti, On.prototype._parseIndexSyntax = cs, On.prototype._parseStoresSpec = function(n, r) {
        var s = this;
        f(n).forEach(function(u) {
          if (n[u] !== null) {
            var c = s._parseIndexSyntax(n[u]), d = c.shift();
            if (!d) throw new V.Schema("Invalid schema for table " + u + ": " + n[u]);
            if (d.unique = !0, d.multi) throw new V.Schema("Primary key cannot be multiEntry*");
            c.forEach(function(h) {
              if (h.auto) throw new V.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new V.Schema("Index must have a name and cannot be an empty string");
            }), c = s._createTableSchema(u, d, c), r[u] = c;
          }
        });
      }, On.prototype.stores = function(s) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, s) : s;
        var s = r._versions, u = {}, c = {};
        return s.forEach(function(d) {
          m(u, d._cfg.storesSource), c = d._cfg.dbschema = {}, d._parseStoresSpec(u, c);
        }), r._dbSchema = c, Pi(r, [r._allTables, r, r.Transaction.prototype]), Or(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], f(c), c), r._storeNames = f(c), this;
      }, On.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = Se(this._cfg.contentUpgrade || Ce, n), this;
      }, On);
      function On() {
      }
      function Ri(n, r) {
        var s = n._dbNamesDB;
        return s || (s = n._dbNamesDB = new qt(br, { addons: [], indexedDB: n, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), s.table("dbnames");
      }
      function ki(n) {
        return n && typeof n.databases == "function";
      }
      function Di(n) {
        return Ut(function() {
          return fe.letThrough = !0, n();
        });
      }
      function Fi(n) {
        return !("from" in n);
      }
      var st = function(n, r) {
        if (!this) {
          var s = new st();
          return n && "d" in n && m(s, n), s;
        }
        m(this, arguments.length ? { d: 1, from: n, to: 1 < arguments.length ? r : n } : { d: 0 });
      };
      function Gn(n, r, s) {
        var u = Pe(r, s);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (Fi(n)) return m(n, { from: r, to: s, d: 1 });
          var c = n.l, u = n.r;
          if (Pe(s, n.from) < 0) return c ? Gn(c, r, s) : n.l = { from: r, to: s, d: 1, l: null, r: null }, ds(n);
          if (0 < Pe(r, n.to)) return u ? Gn(u, r, s) : n.r = { from: r, to: s, d: 1, l: null, r: null }, ds(n);
          Pe(r, n.from) < 0 && (n.from = r, n.l = null, n.d = u ? u.d + 1 : 1), 0 < Pe(s, n.to) && (n.to = s, n.r = null, n.d = n.l ? n.l.d + 1 : 1), s = !n.r, c && !n.l && zn(n, c), u && s && zn(n, u);
        }
      }
      function zn(n, r) {
        Fi(r) || function s(u, w) {
          var d = w.from, h = w.to, y = w.l, w = w.r;
          Gn(u, d, h), y && s(u, y), w && s(u, w);
        }(n, r);
      }
      function fs(n, r) {
        var s = Ir(r), u = s.next();
        if (u.done) return !1;
        for (var c = u.value, d = Ir(n), h = d.next(c.from), y = h.value; !u.done && !h.done; ) {
          if (Pe(y.from, c.to) <= 0 && 0 <= Pe(y.to, c.from)) return !0;
          Pe(c.from, y.from) < 0 ? c = (u = s.next(y.from)).value : y = (h = d.next(c.from)).value;
        }
        return !1;
      }
      function Ir(n) {
        var r = Fi(n) ? null : { s: 0, n };
        return { next: function(s) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && Pe(s, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || Pe(s, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function ds(n) {
        var r, s, u = (((r = n.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((s = n.l) === null || s === void 0 ? void 0 : s.d) || 0), c = 1 < u ? "r" : u < -1 ? "l" : "";
        c && (r = c == "r" ? "l" : "r", s = o({}, n), u = n[c], n.from = u.from, n.to = u.to, n[c] = u[c], s[c] = u[r], (n[r] = s).d = ps(s)), n.d = ps(n);
      }
      function ps(s) {
        var r = s.r, s = s.l;
        return (r ? s ? Math.max(r.d, s.d) : r.d : s ? s.d : 0) + 1;
      }
      function Nr(n, r) {
        return f(r).forEach(function(s) {
          n[s] ? zn(n[s], r[s]) : n[s] = function u(c) {
            var d, h, y = {};
            for (d in c) b(c, d) && (h = c[d], y[d] = !h || typeof h != "object" || we.has(h.constructor) ? h : u(h));
            return y;
          }(r[s]);
        }), n;
      }
      function Mi(n, r) {
        return n.all || r.all || Object.keys(n).some(function(s) {
          return r[s] && fs(r[s], n[s]);
        });
      }
      k(st.prototype, ((Et = { add: function(n) {
        return zn(this, n), this;
      }, addKey: function(n) {
        return Gn(this, n, n), this;
      }, addKeys: function(n) {
        var r = this;
        return n.forEach(function(s) {
          return Gn(r, s, s);
        }), this;
      }, hasKey: function(n) {
        var r = Ir(this).next(n).value;
        return r && Pe(r.from, n) <= 0 && 0 <= Pe(r.to, n);
      } })[me] = function() {
        return Ir(this);
      }, Et));
      var an = {}, Bi = {}, Li = !1;
      function Rr(n) {
        Nr(Bi, n), Li || (Li = !0, setTimeout(function() {
          Li = !1, ji(Bi, !(Bi = {}));
        }, 0));
      }
      function ji(n, r) {
        r === void 0 && (r = !1);
        var s = /* @__PURE__ */ new Set();
        if (n.all) for (var u = 0, c = Object.values(an); u < c.length; u++) hs(h = c[u], n, s, r);
        else for (var d in n) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(d);
          y && (d = y[1], y = y[2], (h = an["idb://".concat(d, "/").concat(y)]) && hs(h, n, s, r));
        }
        s.forEach(function(w) {
          return w();
        });
      }
      function hs(n, r, s, u) {
        for (var c = [], d = 0, h = Object.entries(n.queries.query); d < h.length; d++) {
          for (var y = h[d], w = y[0], S = [], O = 0, g = y[1]; O < g.length; O++) {
            var I = g[O];
            Mi(r, I.obsSet) ? I.subscribers.forEach(function(T) {
              return s.add(T);
            }) : u && S.push(I);
          }
          u && c.push([w, S]);
        }
        if (u) for (var x = 0, C = c; x < C.length; x++) {
          var A = C[x], w = A[0], S = A[1];
          n.queries.query[w] = S;
        }
      }
      function ju(n) {
        var r = n._state, s = n._deps.indexedDB;
        if (r.isBeingOpened || n.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? ze(r.dbOpenError) : n;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, c = Math.round(10 * n.verno), d = !1;
        function h() {
          if (r.openCanceller !== u) throw new V.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new se(function(I, x) {
            if (h(), !s) throw new V.MissingAPI();
            var C = n.name, A = r.autoSchema || !c ? s.open(C) : s.open(C, c);
            if (!A) throw new V.MissingAPI();
            A.onerror = kt(x), A.onblocked = $e(n._fireOnBlocked), A.onupgradeneeded = $e(function(T) {
              var N;
              O = A.transaction, r.autoSchema && !n._options.allowEmptyDB ? (A.onerror = Vn, O.abort(), A.result.close(), (N = s.deleteDatabase(C)).onsuccess = N.onerror = $e(function() {
                x(new V.NoSuchDatabase("Database ".concat(C, " doesnt exist")));
              })) : (O.onerror = kt(x), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, g = T < 1, n.idbdb = A.result, d && Bu(n, O), Mu(n, T / 10, O, x));
            }, x), A.onsuccess = $e(function() {
              O = null;
              var T, N, B, q, K, Y = n.idbdb = A.result, ee = $(Y.objectStoreNames);
              if (0 < ee.length) try {
                var X = Y.transaction((q = ee).length === 1 ? q[0] : q, "readonly");
                if (r.autoSchema) N = Y, B = X, (T = n).verno = N.version / 10, B = T._dbSchema = Ar(0, N, B), T._storeNames = $(N.objectStoreNames, 0), Or(T, [T._allTables], f(B), B);
                else if (Pr(n, n._dbSchema, X), ((K = Ii(Ar(0, (K = n).idbdb, X), K._dbSchema)).add.length || K.change.some(function(Z) {
                  return Z.add.length || Z.change.length;
                })) && !d) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Y.close(), c = Y.version + 1, d = !0, I(y());
                Cr(n, X);
              } catch {
              }
              En.push(n), Y.onversionchange = $e(function(Z) {
                r.vcFired = !0, n.on("versionchange").fire(Z);
              }), Y.onclose = $e(function(Z) {
                n.on("close").fire(Z);
              }), g && (K = n._deps, X = C, Y = K.indexedDB, K = K.IDBKeyRange, ki(Y) || X === br || Ri(Y, K).put({ name: X }).catch(Ce)), I();
            }, x);
          }).catch(function(I) {
            switch (I?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < c) return c = 0, y();
            }
            return se.reject(I);
          });
        }
        var w, S = r.dbReadyResolve, O = null, g = !1;
        return se.race([u, (typeof navigator > "u" ? se.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(I) {
          function x() {
            return indexedDB.databases().finally(I);
          }
          w = setInterval(x, 100), x();
        }).finally(function() {
          return clearInterval(w);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], se.resolve(Di(function() {
            return n.on.ready.fire(n.vip);
          })).then(function I() {
            if (0 < r.onReadyBeingFired.length) {
              var x = r.onReadyBeingFired.reduce(Se, Ce);
              return r.onReadyBeingFired = [], se.resolve(Di(function() {
                return x(n.vip);
              })).then(I);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(I) {
          r.dbOpenError = I;
          try {
            O && O.abort();
          } catch {
          }
          return u === r.openCanceller && n._close(), ze(I);
        }).finally(function() {
          r.openComplete = !0, S();
        }).then(function() {
          var I;
          return g && (I = {}, n.tables.forEach(function(x) {
            x.schema.indexes.forEach(function(C) {
              C.name && (I["idb://".concat(n.name, "/").concat(x.name, "/").concat(C.name)] = new st(-1 / 0, [[[]]]));
            }), I["idb://".concat(n.name, "/").concat(x.name, "/")] = I["idb://".concat(n.name, "/").concat(x.name, "/:dels")] = new st(-1 / 0, [[[]]]);
          }), Wt($n).fire(I), ji(I, !0)), n;
        });
      }
      function qi(n) {
        function r(d) {
          return n.next(d);
        }
        var s = c(r), u = c(function(d) {
          return n.throw(d);
        });
        function c(d) {
          return function(w) {
            var y = d(w), w = y.value;
            return y.done ? w : w && typeof w.then == "function" ? w.then(s, u) : p(w) ? Promise.all(w).then(s, u) : s(w);
          };
        }
        return c(r)();
      }
      function kr(n, r, s) {
        for (var u = p(n) ? n.slice() : [n], c = 0; c < s; ++c) u.push(r);
        return u;
      }
      var qu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(n) {
        return o(o({}, n), { table: function(r) {
          var s = n.table(r), u = s.schema, c = {}, d = [];
          function h(g, I, x) {
            var C = Wn(g), A = c[C] = c[C] || [], T = g == null ? 0 : typeof g == "string" ? 1 : g.length, N = 0 < I, N = o(o({}, x), { name: N ? "".concat(C, "(virtual-from:").concat(x.name, ")") : x.name, lowLevelIndex: x, isVirtual: N, keyTail: I, keyLength: T, extractKey: Ai(g), unique: !N && x.unique });
            return A.push(N), N.isPrimaryKey || d.push(N), 1 < T && h(T === 2 ? g[0] : g.slice(0, T - 1), I + 1, x), A.sort(function(B, q) {
              return B.keyTail - q.keyTail;
            }), N;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), c[":id"] = [r];
          for (var y = 0, w = u.indexes; y < w.length; y++) {
            var S = w[y];
            h(S.keyPath, 0, S);
          }
          function O(g) {
            var I, x = g.query.index;
            return x.isVirtual ? o(o({}, g), { query: { index: x.lowLevelIndex, range: (I = g.query.range, x = x.keyTail, { type: I.type === 1 ? 2 : I.type, lower: kr(I.lower, I.lowerOpen ? n.MAX_KEY : n.MIN_KEY, x), lowerOpen: !0, upper: kr(I.upper, I.upperOpen ? n.MIN_KEY : n.MAX_KEY, x), upperOpen: !0 }) } }) : g;
          }
          return o(o({}, s), { schema: o(o({}, u), { primaryKey: r, indexes: d, getIndexByKeyPath: function(g) {
            return (g = c[Wn(g)]) && g[0];
          } }), count: function(g) {
            return s.count(O(g));
          }, query: function(g) {
            return s.query(O(g));
          }, openCursor: function(g) {
            var I = g.query.index, x = I.keyTail, C = I.isVirtual, A = I.keyLength;
            return C ? s.openCursor(O(g)).then(function(N) {
              return N && T(N);
            }) : s.openCursor(g);
            function T(N) {
              return Object.create(N, { continue: { value: function(B) {
                B != null ? N.continue(kr(B, g.reverse ? n.MAX_KEY : n.MIN_KEY, x)) : g.unique ? N.continue(N.key.slice(0, A).concat(g.reverse ? n.MIN_KEY : n.MAX_KEY, x)) : N.continue();
              } }, continuePrimaryKey: { value: function(B, q) {
                N.continuePrimaryKey(kr(B, n.MAX_KEY, x), q);
              } }, primaryKey: { get: function() {
                return N.primaryKey;
              } }, key: { get: function() {
                var B = N.key;
                return A === 1 ? B[0] : B.slice(0, A);
              } }, value: { get: function() {
                return N.value;
              } } });
            }
          } });
        } });
      } };
      function Ki(n, r, s, u) {
        return s = s || {}, u = u || "", f(n).forEach(function(c) {
          var d, h, y;
          b(r, c) ? (d = n[c], h = r[c], typeof d == "object" && typeof h == "object" && d && h ? (y = ke(d)) !== ke(h) ? s[u + c] = r[c] : y === "Object" ? Ki(d, h, s, u + c + ".") : d !== h && (s[u + c] = r[c]) : d !== h && (s[u + c] = r[c])) : s[u + c] = void 0;
        }), f(r).forEach(function(c) {
          b(n, c) || (s[u + c] = r[c]);
        }), s;
      }
      function Ui(n, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(n.extractKey);
      }
      var Ku = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(n) {
        return o(o({}, n), { table: function(r) {
          var s = n.table(r), u = s.schema.primaryKey;
          return o(o({}, s), { mutate: function(c) {
            var d = fe.trans, h = d.table(r).hook, y = h.deleting, w = h.creating, S = h.updating;
            switch (c.type) {
              case "add":
                if (w.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return O(c);
                }, !0);
              case "put":
                if (w.fire === Ce && S.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return O(c);
                }, !0);
              case "delete":
                if (y.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return O(c);
                }, !0);
              case "deleteRange":
                if (y.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return function g(I, x, C) {
                    return s.query({ trans: I, values: !1, query: { index: u, range: x }, limit: C }).then(function(A) {
                      var T = A.result;
                      return O({ type: "delete", keys: T, trans: I }).then(function(N) {
                        return 0 < N.numFailures ? Promise.reject(N.failures[0]) : T.length < C ? { failures: [], numFailures: 0, lastResult: void 0 } : g(I, o(o({}, x), { lower: T[T.length - 1], lowerOpen: !0 }), C);
                      });
                    });
                  }(c.trans, c.range, 1e4);
                }, !0);
            }
            return s.mutate(c);
            function O(g) {
              var I, x, C, A = fe.trans, T = g.keys || Ui(u, g);
              if (!T) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? o(o({}, g), { keys: T }) : o({}, g)).type !== "delete" && (g.values = a([], g.values)), g.keys && (g.keys = a([], g.keys)), I = s, C = T, ((x = g).type === "add" ? Promise.resolve([]) : I.getMany({ trans: x.trans, keys: C, cache: "immutable" })).then(function(N) {
                var B = T.map(function(q, K) {
                  var Y, ee, X, Z = N[K], oe = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? y.fire.call(oe, q, Z, A) : g.type === "add" || Z === void 0 ? (Y = w.fire.call(oe, q, g.values[K], A), q == null && Y != null && (g.keys[K] = q = Y, u.outbound || J(g.values[K], u.keyPath, q))) : (Y = Ki(Z, g.values[K]), (ee = S.fire.call(oe, Y, q, Z, A)) && (X = g.values[K], Object.keys(ee).forEach(function(ie) {
                    b(X, ie) ? X[ie] = ee[ie] : J(X, ie, ee[ie]);
                  }))), oe;
                });
                return s.mutate(g).then(function(q) {
                  for (var K = q.failures, Y = q.results, ee = q.numFailures, q = q.lastResult, X = 0; X < T.length; ++X) {
                    var Z = (Y || T)[X], oe = B[X];
                    Z == null ? oe.onerror && oe.onerror(K[X]) : oe.onsuccess && oe.onsuccess(g.type === "put" && N[X] ? g.values[X] : Z);
                  }
                  return { failures: K, results: Y, numFailures: ee, lastResult: q };
                }).catch(function(q) {
                  return B.forEach(function(K) {
                    return K.onerror && K.onerror(q);
                  }), Promise.reject(q);
                });
              });
            }
          } });
        } });
      } };
      function ms(n, r, s) {
        try {
          if (!r || r.keys.length < n.length) return null;
          for (var u = [], c = 0, d = 0; c < r.keys.length && d < n.length; ++c) Pe(r.keys[c], n[d]) === 0 && (u.push(s ? _e(r.values[c]) : r.values[c]), ++d);
          return u.length === n.length ? u : null;
        } catch {
          return null;
        }
      }
      var Uu = { stack: "dbcore", level: -1, create: function(n) {
        return { table: function(r) {
          var s = n.table(r);
          return o(o({}, s), { getMany: function(u) {
            if (!u.cache) return s.getMany(u);
            var c = ms(u.keys, u.trans._cache, u.cache === "clone");
            return c ? se.resolve(c) : s.getMany(u).then(function(d) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? _e(d) : d }, d;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), s.mutate(u);
          } });
        } };
      } };
      function ys(n, r) {
        return n.trans.mode === "readonly" && !!n.subscr && !n.trans.explicit && n.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function vs(n, r) {
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
      var Vu = { stack: "dbcore", level: 0, name: "Observability", create: function(n) {
        var r = n.schema.name, s = new st(n.MIN_KEY, n.MAX_KEY);
        return o(o({}, n), { transaction: function(u, c, d) {
          if (fe.subscr && c !== "readonly") throw new V.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(fe.querier));
          return n.transaction(u, c, d);
        }, table: function(u) {
          var c = n.table(u), d = c.schema, h = d.primaryKey, g = d.indexes, y = h.extractKey, w = h.outbound, S = h.autoIncrement && g.filter(function(x) {
            return x.compound && x.keyPath.includes(h.keyPath);
          }), O = o(o({}, c), { mutate: function(x) {
            function C(ie) {
              return ie = "idb://".concat(r, "/").concat(u, "/").concat(ie), q[ie] || (q[ie] = new st());
            }
            var A, T, N, B = x.trans, q = x.mutatedParts || (x.mutatedParts = {}), K = C(""), Y = C(":dels"), ee = x.type, oe = x.type === "deleteRange" ? [x.range] : x.type === "delete" ? [x.keys] : x.values.length < 50 ? [Ui(h, x).filter(function(ie) {
              return ie;
            }), x.values] : [], X = oe[0], Z = oe[1], oe = x.trans._cache;
            return p(X) ? (K.addKeys(X), (oe = ee === "delete" || X.length === Z.length ? ms(X, oe) : null) || Y.addKeys(X), (oe || Z) && (A = C, T = oe, N = Z, d.indexes.forEach(function(ie) {
              var ae = A(ie.name || "");
              function Oe(Ee) {
                return Ee != null ? ie.extractKey(Ee) : null;
              }
              function Ie(Ee) {
                return ie.multiEntry && p(Ee) ? Ee.forEach(function(Ge) {
                  return ae.addKey(Ge);
                }) : ae.addKey(Ee);
              }
              (T || N).forEach(function(Ee, at) {
                var xe = T && Oe(T[at]), at = N && Oe(N[at]);
                Pe(xe, at) !== 0 && (xe != null && Ie(xe), at != null && Ie(at));
              });
            }))) : X ? (Z = { from: (Z = X.lower) !== null && Z !== void 0 ? Z : n.MIN_KEY, to: (Z = X.upper) !== null && Z !== void 0 ? Z : n.MAX_KEY }, Y.add(Z), K.add(Z)) : (K.add(s), Y.add(s), d.indexes.forEach(function(ie) {
              return C(ie.name).add(s);
            })), c.mutate(x).then(function(ie) {
              return !X || x.type !== "add" && x.type !== "put" || (K.addKeys(ie.results), S && S.forEach(function(ae) {
                for (var Oe = x.values.map(function(xe) {
                  return ae.extractKey(xe);
                }), Ie = ae.keyPath.findIndex(function(xe) {
                  return xe === h.keyPath;
                }), Ee = 0, Ge = ie.results.length; Ee < Ge; ++Ee) Oe[Ee][Ie] = ie.results[Ee];
                C(ae.name).addKeys(Oe);
              })), B.mutatedParts = Nr(B.mutatedParts || {}, q), ie;
            });
          } }), g = function(C) {
            var A = C.query, C = A.index, A = A.range;
            return [C, new st((C = A.lower) !== null && C !== void 0 ? C : n.MIN_KEY, (A = A.upper) !== null && A !== void 0 ? A : n.MAX_KEY)];
          }, I = { get: function(x) {
            return [h, new st(x.key)];
          }, getMany: function(x) {
            return [h, new st().addKeys(x.keys)];
          }, count: g, query: g, openCursor: g };
          return f(I).forEach(function(x) {
            O[x] = function(C) {
              var A = fe.subscr, T = !!A, N = ys(fe, c) && vs(x, C) ? C.obsSet = {} : A;
              if (T) {
                var B = function(Z) {
                  return Z = "idb://".concat(r, "/").concat(u, "/").concat(Z), N[Z] || (N[Z] = new st());
                }, q = B(""), K = B(":dels"), A = I[x](C), T = A[0], A = A[1];
                if ((x === "query" && T.isPrimaryKey && !C.values ? K : B(T.name || "")).add(A), !T.isPrimaryKey) {
                  if (x !== "count") {
                    var Y = x === "query" && w && C.values && c.query(o(o({}, C), { values: !1 }));
                    return c[x].apply(this, arguments).then(function(Z) {
                      if (x === "query") {
                        if (w && C.values) return Y.then(function(Oe) {
                          return Oe = Oe.result, q.addKeys(Oe), Z;
                        });
                        var oe = C.values ? Z.result.map(y) : Z.result;
                        (C.values ? q : K).addKeys(oe);
                      } else if (x === "openCursor") {
                        var ie = Z, ae = C.values;
                        return ie && Object.create(ie, { key: { get: function() {
                          return K.addKey(ie.primaryKey), ie.key;
                        } }, primaryKey: { get: function() {
                          var Oe = ie.primaryKey;
                          return K.addKey(Oe), Oe;
                        } }, value: { get: function() {
                          return ae && q.addKey(ie.primaryKey), ie.value;
                        } } });
                      }
                      return Z;
                    });
                  }
                  K.add(s);
                }
              }
              return c[x].apply(this, arguments);
            };
          }), O;
        } });
      } };
      function gs(n, r, s) {
        if (s.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return s.numFailures === u ? null : (r = o({}, r), p(r.keys) && (r.keys = r.keys.filter(function(c, d) {
          return !(d in s.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(c, d) {
          return !(d in s.failures);
        })), r);
      }
      function Vi(n, r) {
        return s = n, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < Pe(s, u.lower) : 0 <= Pe(s, u.lower))) && (n = n, (r = r).upper === void 0 || (r.upperOpen ? Pe(n, r.upper) < 0 : Pe(n, r.upper) <= 0));
        var s, u;
      }
      function bs(n, r, I, u, c, d) {
        if (!I || I.length === 0) return n;
        var h = r.query.index, y = h.multiEntry, w = r.query.range, S = u.schema.primaryKey.extractKey, O = h.extractKey, g = (h.lowLevelIndex || h).extractKey, I = I.reduce(function(x, C) {
          var A = x, T = [];
          if (C.type === "add" || C.type === "put") for (var N = new st(), B = C.values.length - 1; 0 <= B; --B) {
            var q, K = C.values[B], Y = S(K);
            N.hasKey(Y) || (q = O(K), (y && p(q) ? q.some(function(ie) {
              return Vi(ie, w);
            }) : Vi(q, w)) && (N.addKey(Y), T.push(K)));
          }
          switch (C.type) {
            case "add":
              var ee = new st().addKeys(r.values ? x.map(function(ae) {
                return S(ae);
              }) : x), A = x.concat(r.values ? T.filter(function(ae) {
                return ae = S(ae), !ee.hasKey(ae) && (ee.addKey(ae), !0);
              }) : T.map(function(ae) {
                return S(ae);
              }).filter(function(ae) {
                return !ee.hasKey(ae) && (ee.addKey(ae), !0);
              }));
              break;
            case "put":
              var X = new st().addKeys(C.values.map(function(ae) {
                return S(ae);
              }));
              A = x.filter(function(ae) {
                return !X.hasKey(r.values ? S(ae) : ae);
              }).concat(r.values ? T : T.map(function(ae) {
                return S(ae);
              }));
              break;
            case "delete":
              var Z = new st().addKeys(C.keys);
              A = x.filter(function(ae) {
                return !Z.hasKey(r.values ? S(ae) : ae);
              });
              break;
            case "deleteRange":
              var oe = C.range;
              A = x.filter(function(ae) {
                return !Vi(S(ae), oe);
              });
          }
          return A;
        }, n);
        return I === n ? n : (I.sort(function(x, C) {
          return Pe(g(x), g(C)) || Pe(S(x), S(C));
        }), r.limit && r.limit < 1 / 0 && (I.length > r.limit ? I.length = r.limit : n.length === r.limit && I.length < r.limit && (c.dirty = !0)), d ? Object.freeze(I) : I);
      }
      function _s(n, r) {
        return Pe(n.lower, r.lower) === 0 && Pe(n.upper, r.upper) === 0 && !!n.lowerOpen == !!r.lowerOpen && !!n.upperOpen == !!r.upperOpen;
      }
      function $u(n, r) {
        return function(s, u, c, d) {
          if (s === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = Pe(s, u)) === 0) {
            if (c && d) return 0;
            if (c) return 1;
            if (d) return -1;
          }
          return u;
        }(n.lower, r.lower, n.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(s, u, c, d) {
          if (s === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = Pe(s, u)) === 0) {
            if (c && d) return 0;
            if (c) return -1;
            if (d) return 1;
          }
          return u;
        }(n.upper, r.upper, n.upperOpen, r.upperOpen);
      }
      function Hu(n, r, s, u) {
        n.subscribers.add(s), u.addEventListener("abort", function() {
          var c, d;
          n.subscribers.delete(s), n.subscribers.size === 0 && (c = n, d = r, setTimeout(function() {
            c.subscribers.size === 0 && be(d, c);
          }, 3e3));
        });
      }
      var Wu = { stack: "dbcore", level: 0, name: "Cache", create: function(n) {
        var r = n.schema.name;
        return o(o({}, n), { transaction: function(s, u, c) {
          var d, h, y = n.transaction(s, u, c);
          return u === "readwrite" && (h = (d = new AbortController()).signal, c = function(w) {
            return function() {
              if (d.abort(), u === "readwrite") {
                for (var S = /* @__PURE__ */ new Set(), O = 0, g = s; O < g.length; O++) {
                  var I = g[O], x = an["idb://".concat(r, "/").concat(I)];
                  if (x) {
                    var C = n.table(I), A = x.optimisticOps.filter(function(ae) {
                      return ae.trans === y;
                    });
                    if (y._explicit && w && y.mutatedParts) for (var T = 0, N = Object.values(x.queries.query); T < N.length; T++) for (var B = 0, q = (ee = N[T]).slice(); B < q.length; B++) Mi((X = q[B]).obsSet, y.mutatedParts) && (be(ee, X), X.subscribers.forEach(function(ae) {
                      return S.add(ae);
                    }));
                    else if (0 < A.length) {
                      x.optimisticOps = x.optimisticOps.filter(function(ae) {
                        return ae.trans !== y;
                      });
                      for (var K = 0, Y = Object.values(x.queries.query); K < Y.length; K++) for (var ee, X, Z, oe = 0, ie = (ee = Y[K]).slice(); oe < ie.length; oe++) (X = ie[oe]).res != null && y.mutatedParts && (w && !X.dirty ? (Z = Object.isFrozen(X.res), Z = bs(X.res, X.req, A, C, X, Z), X.dirty ? (be(ee, X), X.subscribers.forEach(function(ae) {
                        return S.add(ae);
                      })) : Z !== X.res && (X.res = Z, X.promise = se.resolve({ result: Z }))) : (X.dirty && be(ee, X), X.subscribers.forEach(function(ae) {
                        return S.add(ae);
                      })));
                    }
                  }
                }
                S.forEach(function(ae) {
                  return ae();
                });
              }
            };
          }, y.addEventListener("abort", c(!1), { signal: h }), y.addEventListener("error", c(!1), { signal: h }), y.addEventListener("complete", c(!0), { signal: h })), y;
        }, table: function(s) {
          var u = n.table(s), c = u.schema.primaryKey;
          return o(o({}, u), { mutate: function(d) {
            var h = fe.trans;
            if (c.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(d);
            var y = an["idb://".concat(r, "/").concat(s)];
            return y ? (h = u.mutate(d), d.type !== "add" && d.type !== "put" || !(50 <= d.values.length || Ui(c, d).some(function(w) {
              return w == null;
            })) ? (y.optimisticOps.push(d), d.mutatedParts && Rr(d.mutatedParts), h.then(function(w) {
              0 < w.numFailures && (be(y.optimisticOps, d), (w = gs(0, d, w)) && y.optimisticOps.push(w), d.mutatedParts && Rr(d.mutatedParts));
            }), h.catch(function() {
              be(y.optimisticOps, d), d.mutatedParts && Rr(d.mutatedParts);
            })) : h.then(function(w) {
              var S = gs(0, o(o({}, d), { values: d.values.map(function(O, g) {
                var I;
                return w.failures[g] ? O : (O = (I = c.keyPath) !== null && I !== void 0 && I.includes(".") ? _e(O) : o({}, O), J(O, c.keyPath, w.results[g]), O);
              }) }), w);
              y.optimisticOps.push(S), queueMicrotask(function() {
                return d.mutatedParts && Rr(d.mutatedParts);
              });
            }), h) : u.mutate(d);
          }, query: function(d) {
            if (!ys(fe, u) || !vs("query", d)) return u.query(d);
            var h = ((S = fe.trans) === null || S === void 0 ? void 0 : S.db._options.cache) === "immutable", g = fe, y = g.requery, w = g.signal, S = function(C, A, T, N) {
              var B = an["idb://".concat(C, "/").concat(A)];
              if (!B) return [];
              if (!(A = B.queries[T])) return [null, !1, B, null];
              var q = A[(N.query ? N.query.index.name : null) || ""];
              if (!q) return [null, !1, B, null];
              switch (T) {
                case "query":
                  var K = q.find(function(Y) {
                    return Y.req.limit === N.limit && Y.req.values === N.values && _s(Y.req.query.range, N.query.range);
                  });
                  return K ? [K, !0, B, q] : [q.find(function(Y) {
                    return ("limit" in Y.req ? Y.req.limit : 1 / 0) >= N.limit && (!N.values || Y.req.values) && $u(Y.req.query.range, N.query.range);
                  }), !1, B, q];
                case "count":
                  return K = q.find(function(Y) {
                    return _s(Y.req.query.range, N.query.range);
                  }), [K, !!K, B, q];
              }
            }(r, s, "query", d), O = S[0], g = S[1], I = S[2], x = S[3];
            return O && g ? O.obsSet = d.obsSet : (g = u.query(d).then(function(C) {
              var A = C.result;
              if (O && (O.res = A), h) {
                for (var T = 0, N = A.length; T < N; ++T) Object.freeze(A[T]);
                Object.freeze(A);
              } else C.result = _e(A);
              return C;
            }).catch(function(C) {
              return x && O && be(x, O), Promise.reject(C);
            }), O = { obsSet: d.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: d, dirty: !1 }, x ? x.push(O) : (x = [O], (I = I || (an["idb://".concat(r, "/").concat(s)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[d.query.index.name || ""] = x)), Hu(O, x, y, w), O.promise.then(function(C) {
              return { result: bs(C.result, d, I?.optimisticOps, u, O, h) };
            });
          } });
        } });
      } };
      function Dr(n, r) {
        return new Proxy(n, { get: function(s, u, c) {
          return u === "db" ? r : Reflect.get(s, u, c);
        } });
      }
      var qt = (Ye.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new V.Type("Given version is not a positive number");
        if (n = Math.round(10 * n) / 10, this.idbdb || this._state.isBeingOpened) throw new V.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var r = this._versions, s = r.filter(function(u) {
          return u._cfg.version === n;
        })[0];
        return s || (s = new this.Version(n), r.push(s), r.sort(Fu), s.stores({}), this._state.autoSchema = !1, s);
      }, Ye.prototype._whenReady = function(n) {
        var r = this;
        return this.idbdb && (this._state.openComplete || fe.letThrough || this._vip) ? n() : new se(function(s, u) {
          if (r._state.openComplete) return u(new V.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new V.DatabaseClosed());
            r.open().catch(Ce);
          }
          r._state.dbReadyPromise.then(s, u);
        }).then(n);
      }, Ye.prototype.use = function(n) {
        var r = n.stack, s = n.create, u = n.level, c = n.name;
        return c && this.unuse({ stack: r, name: c }), n = this._middlewares[r] || (this._middlewares[r] = []), n.push({ stack: r, create: s, level: u ?? 10, name: c }), n.sort(function(d, h) {
          return d.level - h.level;
        }), this;
      }, Ye.prototype.unuse = function(n) {
        var r = n.stack, s = n.name, u = n.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(c) {
          return u ? c.create !== u : !!s && c.name !== s;
        })), this;
      }, Ye.prototype.open = function() {
        var n = this;
        return rn(Mt, function() {
          return ju(n);
        });
      }, Ye.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var n = this._state, r = En.indexOf(this);
        if (0 <= r && En.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new se(function(s) {
          n.dbReadyResolve = s;
        }), n.openCanceller = new se(function(s, u) {
          n.cancelOpen = u;
        }));
      }, Ye.prototype.close = function(s) {
        var r = (s === void 0 ? { disableAutoOpen: !0 } : s).disableAutoOpen, s = this._state;
        r ? (s.isBeingOpened && s.cancelOpen(new V.DatabaseClosed()), this._close(), s.autoOpen = !1, s.dbOpenError = new V.DatabaseClosed()) : (this._close(), s.autoOpen = this._options.autoOpen || s.isBeingOpened, s.openComplete = !1, s.dbOpenError = null);
      }, Ye.prototype.delete = function(n) {
        var r = this;
        n === void 0 && (n = { disableAutoOpen: !0 });
        var s = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new se(function(c, d) {
          function h() {
            r.close(n);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = $e(function() {
              var w, S, O;
              w = r._deps, S = r.name, O = w.indexedDB, w = w.IDBKeyRange, ki(O) || S === br || Ri(O, w).delete(S).catch(Ce), c();
            }), y.onerror = kt(d), y.onblocked = r._fireOnBlocked;
          }
          if (s) throw new V.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
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
        return f(this._allTables).map(function(r) {
          return n._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ye.prototype.transaction = function() {
        var n = (function(r, s, u) {
          var c = arguments.length;
          if (c < 2) throw new V.InvalidArgument("Too few arguments");
          for (var d = new Array(c - 1); --c; ) d[c - 1] = arguments[c];
          return u = d.pop(), [r, le(d), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, n);
      }, Ye.prototype._transaction = function(n, r, s) {
        var u = this, c = fe.trans;
        c && c.db === this && n.indexOf("!") === -1 || (c = null);
        var d, h, y = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(S) {
            if (S = S instanceof u.Table ? S.name : S, typeof S != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return S;
          }), n == "r" || n === wi) d = wi;
          else {
            if (n != "rw" && n != xi) throw new V.InvalidArgument("Invalid transaction mode: " + n);
            d = xi;
          }
          if (c) {
            if (c.mode === wi && d === xi) {
              if (!y) throw new V.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              c = null;
            }
            c && h.forEach(function(S) {
              if (c && c.storeNames.indexOf(S) === -1) {
                if (!y) throw new V.SubTransaction("Table " + S + " not included in parent transaction.");
                c = null;
              }
            }), y && c && !c.active && (c = null);
          }
        } catch (S) {
          return c ? c._promise(null, function(O, g) {
            g(S);
          }) : ze(S);
        }
        var w = (function S(O, g, I, x, C) {
          return se.resolve().then(function() {
            var A = fe.transless || fe, T = O._createTransaction(g, I, O._dbSchema, x);
            if (T.explicit = !0, A = { trans: T, transless: A }, x) T.idbtrans = x.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, O._state.PR1398_maxLoop = 3;
            } catch (q) {
              return q.name === P.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                return S(O, g, I, null, C);
              })) : ze(q);
            }
            var N, B = dt(C);
            return B && xn(), A = se.follow(function() {
              var q;
              (N = C.call(T, T)) && (B ? (q = Vt.bind(null, null), N.then(q, q)) : typeof N.next == "function" && typeof N.throw == "function" && (N = qi(N)));
            }, A), (N && typeof N.then == "function" ? se.resolve(N).then(function(q) {
              return T.active ? q : ze(new V.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : A.then(function() {
              return N;
            })).then(function(q) {
              return x && T._resolve(), T._completion.then(function() {
                return q;
              });
            }).catch(function(q) {
              return T._reject(q), ze(q);
            });
          });
        }).bind(null, this, d, h, c, s);
        return c ? c._promise(d, w, "lock") : fe.trans ? rn(fe.transless, function() {
          return u._whenReady(w);
        }) : this._whenReady(w);
      }, Ye.prototype.table = function(n) {
        if (!b(this._allTables, n)) throw new V.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, Ye);
      function Ye(n, r) {
        var s = this;
        this._middlewares = {}, this.verno = 0;
        var u = Ye.dependencies;
        this._options = r = o({ addons: Ye.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var c, d, h, y, w, S = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Ce, dbReadyPromise: null, cancelOpen: Ce, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        S.dbReadyPromise = new se(function(g) {
          S.dbReadyResolve = g;
        }), S.openCanceller = new se(function(g, I) {
          S.cancelOpen = I;
        }), this._state = S, this.name = n, this.on = qn(this, "populate", "blocked", "versionchange", "close", { ready: [Se, Ce] }), this.once = function(g, I) {
          var x = function() {
            for (var C = [], A = 0; A < arguments.length; A++) C[A] = arguments[A];
            s.on(g).unsubscribe(x), I.apply(s, C);
          };
          return s.on(g, x);
        }, this.on.ready.subscribe = L(this.on.ready.subscribe, function(g) {
          return function(I, x) {
            Ye.vip(function() {
              var C, A = s._state;
              A.openComplete ? (A.dbOpenError || se.resolve().then(I), x && g(I)) : A.onReadyBeingFired ? (A.onReadyBeingFired.push(I), x && g(I)) : (g(I), C = s, x || g(function T() {
                C.on.ready.unsubscribe(I), C.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (c = this, Kn(Au.prototype, function(N, T) {
          this.db = c;
          var x = Xo, C = null;
          if (T) try {
            x = T();
          } catch (B) {
            C = B;
          }
          var A = N._ctx, T = A.table, N = T.hook.reading.fire;
          this._ctx = { table: T, index: A.index, isPrimKey: !A.index || T.schema.primKey.keyPath && A.index === T.schema.primKey.name, range: x, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: C, or: A.or, valueMapper: N !== j ? N : null };
        })), this.Table = (d = this, Kn(es.prototype, function(g, I, x) {
          this.db = d, this._tx = x, this.name = g, this.schema = I, this.hook = d._allTables[g] ? d._allTables[g].hook : qn(null, { creating: [ge, Ce], reading: [G, j], updating: [pe, Ce], deleting: [de, Ce] });
        })), this.Transaction = (h = this, Kn(Nu.prototype, function(g, I, x, C, A) {
          var T = this;
          g !== "readonly" && I.forEach(function(N) {
            N = (N = x[N]) === null || N === void 0 ? void 0 : N.yProps, N && (I = I.concat(N.map(function(B) {
              return B.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = I, this.schema = x, this.chromeTransactionDurability = C, this.idbtrans = null, this.on = qn(this, "complete", "error", "abort"), this.parent = A || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new se(function(N, B) {
            T._resolve = N, T._reject = B;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(N) {
            var B = T.active;
            return T.active = !1, T.on.error.fire(N), T.parent ? T.parent._reject(N) : B && T.idbtrans && T.idbtrans.abort(), ze(N);
          });
        })), this.Version = (y = this, Kn(Lu.prototype, function(g) {
          this.db = y, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (w = this, Kn(ss.prototype, function(g, I, x) {
          if (this.db = w, this._ctx = { table: g, index: I === ":id" ? null : I, or: x }, this._cmp = this._ascending = Pe, this._descending = function(C, A) {
            return Pe(A, C);
          }, this._max = function(C, A) {
            return 0 < Pe(C, A) ? C : A;
          }, this._min = function(C, A) {
            return Pe(C, A) < 0 ? C : A;
          }, this._IDBKeyRange = w._deps.IDBKeyRange, !this._IDBKeyRange) throw new V.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(s.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(s.name, "'. Closing db now to resume the delete request.")), s.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(s.name, "') was blocked")) : console.warn("Upgrade '".concat(s.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Hn(r.IDBKeyRange), this._createTransaction = function(g, I, x, C) {
          return new s.Transaction(g, I, x, s._options.chromeTransactionDurability, C);
        }, this._fireOnBlocked = function(g) {
          s.on("blocked").fire(g), En.filter(function(I) {
            return I.name === s.name && I !== s && !I._state.vcFired;
          }).map(function(I) {
            return I.on("versionchange").fire(g);
          });
        }, this.use(Uu), this.use(Wu), this.use(Vu), this.use(qu), this.use(Ku);
        var O = new Proxy(this, { get: function(g, I, x) {
          if (I === "_vip") return !0;
          if (I === "table") return function(A) {
            return Dr(s.table(A), O);
          };
          var C = Reflect.get(g, I, x);
          return C instanceof es ? Dr(C, O) : I === "tables" ? C.map(function(A) {
            return Dr(A, O);
          }) : I === "_createTransaction" ? function() {
            return Dr(C.apply(this, arguments), O);
          } : C;
        } });
        this.vip = O, u.forEach(function(g) {
          return g(s);
        });
      }
      var Fr, Et = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Gu = ($i.prototype.subscribe = function(n, r, s) {
        return this._subscribe(n && typeof n != "function" ? n : { next: n, error: r, complete: s });
      }, $i.prototype[Et] = function() {
        return this;
      }, $i);
      function $i(n) {
        this._subscribe = n;
      }
      try {
        Fr = { indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB, IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange };
      } catch {
        Fr = { indexedDB: null, IDBKeyRange: null };
      }
      function ws(n) {
        var r, s = !1, u = new Gu(function(c) {
          var d = dt(n), h, y = !1, w = {}, S = {}, O = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), g && Wt.storagemutated.unsubscribe(x));
          } };
          c.start && c.start(O);
          var g = !1, I = function() {
            return _i(C);
          }, x = function(A) {
            Nr(w, A), Mi(S, w) && I();
          }, C = function() {
            var A, T, N;
            !y && Fr.indexedDB && (w = {}, A = {}, h && h.abort(), h = new AbortController(), N = function(B) {
              var q = _n();
              try {
                d && xn();
                var K = Ut(n, B);
                return K = d ? K.finally(Vt) : K;
              } finally {
                q && wn();
              }
            }(T = { subscr: A, signal: h.signal, requery: I, querier: n, trans: null }), Promise.resolve(N).then(function(B) {
              s = !0, r = B, y || T.signal.aborted || (w = {}, function(q) {
                for (var K in q) if (b(q, K)) return;
                return 1;
              }(S = A) || g || (Wt($n, x), g = !0), _i(function() {
                return !y && c.next && c.next(B);
              }));
            }, function(B) {
              s = !1, ["DatabaseClosedError", "AbortError"].includes(B?.name) || y || _i(function() {
                y || c.error && c.error(B);
              });
            }));
          };
          return setTimeout(I, 0), O;
        });
        return u.hasValue = function() {
          return s;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var un = qt;
      function Hi(n) {
        var r = Gt;
        try {
          Gt = !0, Wt.storagemutated.fire(n), ji(n, !0);
        } finally {
          Gt = r;
        }
      }
      k(un, o(o({}, Ke), { delete: function(n) {
        return new un(n, { addons: [] }).delete();
      }, exists: function(n) {
        return new un(n, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(n) {
        try {
          return r = un.dependencies, s = r.indexedDB, r = r.IDBKeyRange, (ki(s) ? Promise.resolve(s.databases()).then(function(u) {
            return u.map(function(c) {
              return c.name;
            }).filter(function(c) {
              return c !== br;
            });
          }) : Ri(s, r).toCollection().primaryKeys()).then(n);
        } catch {
          return ze(new V.MissingAPI());
        }
        var r, s;
      }, defineClass: function() {
        return function(n) {
          m(this, n);
        };
      }, ignoreTransaction: function(n) {
        return fe.trans ? rn(fe.transless, n) : n();
      }, vip: Di, async: function(n) {
        return function() {
          try {
            var r = qi(n.apply(this, arguments));
            return r && typeof r.then == "function" ? r : se.resolve(r);
          } catch (s) {
            return ze(s);
          }
        };
      }, spawn: function(n, r, s) {
        try {
          var u = qi(n.apply(s, r || []));
          return u && typeof u.then == "function" ? u : se.resolve(u);
        } catch (c) {
          return ze(c);
        }
      }, currentTransaction: { get: function() {
        return fe.trans || null;
      } }, waitFor: function(n, r) {
        return r = se.resolve(typeof n == "function" ? un.ignoreTransaction(n) : n).timeout(r || 6e4), fe.trans ? fe.trans.waitFor(r) : r;
      }, Promise: se, debug: { get: function() {
        return ye;
      }, set: function(n) {
        ve(n);
      } }, derive: M, extend: m, props: k, override: L, Events: qn, on: Wt, liveQuery: ws, extendObservabilitySet: Nr, getByKeyPath: te, setByKeyPath: J, delByKeyPath: function(n, r) {
        typeof r == "string" ? J(n, r, void 0) : "length" in r && [].map.call(r, function(s) {
          J(n, s, void 0);
        });
      }, shallowClone: ce, deepClone: _e, getObjectDiff: Ki, cmp: Pe, asap: H, minKey: -1 / 0, addons: [], connections: En, errnames: P, dependencies: Fr, cache: an, semVer: "4.2.0", version: "4.2.0".split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(n, r, s) {
        return n + r / Math.pow(10, 2 * s);
      }) })), un.maxKey = Hn(un.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Wt($n, function(n) {
        Gt || (n = new CustomEvent(Ci, { detail: n }), Gt = !0, dispatchEvent(n), Gt = !1);
      }), addEventListener(Ci, function(n) {
        n = n.detail, Gt || Hi(n);
      }));
      var Rn, Gt = !1, xs = function() {
      };
      return typeof BroadcastChannel < "u" && ((xs = function() {
        (Rn = new BroadcastChannel(Ci)).onmessage = function(n) {
          return n.data && Hi(n.data);
        };
      })(), typeof Rn.unref == "function" && Rn.unref(), Wt($n, function(n) {
        Gt || Rn.postMessage(n);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(n) {
        if (!qt.disableBfCache && n.persisted) {
          ye && console.debug("Dexie: handling persisted pagehide"), Rn?.close();
          for (var r = 0, s = En; r < s.length; r++) s[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(n) {
        !qt.disableBfCache && n.persisted && (ye && console.debug("Dexie: handling persisted pageshow"), xs(), Hi({ all: new st(-1 / 0, [[]]) }));
      })), se.rejectionMapper = function(n, r) {
        return !n || n instanceof Ft || n instanceof TypeError || n instanceof SyntaxError || !n.name || !z[n.name] ? n : (r = new z[n.name](r || n.message, n), "stack" in n && D(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, ve(ye), o(qt, Object.freeze({ __proto__: null, Dexie: qt, liveQuery: ws, Entity: Qo, cmp: Pe, PropModification: Un, replacePrefix: function(n, r) {
        return new Un({ replacePrefix: [n, r] });
      }, add: function(n) {
        return new Un({ add: n });
      }, remove: function(n) {
        return new Un({ remove: n });
      }, default: qt, RangeSet: st, mergeRanges: zn, rangesOverlap: fs }), { default: qt }), qt;
    });
  }(Aa)), Aa.exports;
}
var _g = bg();
const kl = /* @__PURE__ */ vg(_g), Tf = Symbol.for("Dexie"), Wa = globalThis[Tf] || (globalThis[Tf] = kl);
if (kl.semVer !== Wa.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${kl.semVer} and ${Wa.semVer}`);
const {
  liveQuery: ow,
  mergeRanges: sw,
  rangesOverlap: aw,
  RangeSet: uw,
  cmp: lw,
  Entity: cw,
  PropModification: fw,
  replacePrefix: dw,
  add: pw,
  remove: hw,
  DexieYProvider: mw
} = Wa;
var wg = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function xg(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function Eg(e) {
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
var Af = {};
const Sg = {}, Cg = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Sg
}, Symbol.toStringTag, { value: "Module" })), Pf = /* @__PURE__ */ Eg(Cg);
var If;
function Og() {
  return If || (If = 1, function(e) {
    (function(t) {
      t.parser = function(P, E) {
        return new o(P, E);
      }, t.SAXParser = o, t.SAXStream = v, t.createStream = _, t.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function o(P, E) {
        if (!(this instanceof o))
          return new o(P, E);
        var V = this;
        l(V), V.q = V.c = "", V.bufferCheckPosition = t.MAX_BUFFER_LENGTH, V.opt = E || {}, V.opt.lowercase = V.opt.lowercase || V.opt.lowercasetags, V.looseCase = V.opt.lowercase ? "toLowerCase" : "toUpperCase", V.tags = [], V.closed = V.closedRoot = V.sawRoot = !1, V.tag = V.error = null, V.strict = !!P, V.noscript = !!(P || V.opt.noscript), V.state = F.BEGIN, V.strictEntities = V.opt.strictEntities, V.ENTITIES = V.strictEntities ? Object.create(t.XML_ENTITIES) : Object.create(t.ENTITIES), V.attribList = [], V.opt.xmlns && (V.ns = Object.create(M)), V.opt.unquotedAttributeValues === void 0 && (V.opt.unquotedAttributeValues = !P), V.trackPosition = V.opt.position !== !1, V.trackPosition && (V.position = V.line = V.column = 0), we(V, "onready");
      }
      Object.create || (Object.create = function(P) {
        function E() {
        }
        E.prototype = P;
        var V = new E();
        return V;
      }), Object.keys || (Object.keys = function(P) {
        var E = [];
        for (var V in P) P.hasOwnProperty(V) && E.push(V);
        return E;
      });
      function a(P) {
        for (var E = Math.max(t.MAX_BUFFER_LENGTH, 10), V = 0, z = 0, Ke = i.length; z < Ke; z++) {
          var Ce = P[i[z]].length;
          if (Ce > E)
            switch (i[z]) {
              case "textNode":
                _e(P);
                break;
              case "cdata":
                ne(P, "oncdata", P.cdata), P.cdata = "";
                break;
              case "script":
                ne(P, "onscript", P.script), P.script = "";
                break;
              default:
                ke(P, "Max buffer length exceeded: " + i[z]);
            }
          V = Math.max(V, Ce);
        }
        var j = t.MAX_BUFFER_LENGTH - V;
        P.bufferCheckPosition = j + P.position;
      }
      function l(P) {
        for (var E = 0, V = i.length; E < V; E++)
          P[i[E]] = "";
      }
      function f(P) {
        _e(P), P.cdata !== "" && (ne(P, "oncdata", P.cdata), P.cdata = ""), P.script !== "" && (ne(P, "onscript", P.script), P.script = "");
      }
      o.prototype = {
        end: function() {
          me(this);
        },
        write: Ct,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          f(this);
        }
      };
      var p;
      try {
        p = Pf.Stream;
      } catch {
        p = function() {
        };
      }
      p || (p = function() {
      });
      var m = t.EVENTS.filter(function(P) {
        return P !== "error" && P !== "end";
      });
      function _(P, E) {
        return new v(P, E);
      }
      function v(P, E) {
        if (!(this instanceof v))
          return new v(P, E);
        p.apply(this), this._parser = new o(P, E), this.writable = !0, this.readable = !0;
        var V = this;
        this._parser.onend = function() {
          V.emit("end");
        }, this._parser.onerror = function(z) {
          V.emit("error", z), V._parser.error = null;
        }, this._decoder = null, m.forEach(function(z) {
          Object.defineProperty(V, "on" + z, {
            get: function() {
              return V._parser["on" + z];
            },
            set: function(Ke) {
              if (!Ke)
                return V.removeAllListeners(z), V._parser["on" + z] = Ke, Ke;
              V.on(z, Ke);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      v.prototype = Object.create(p.prototype, {
        constructor: {
          value: v
        }
      }), v.prototype.write = function(P) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(P)) {
          if (!this._decoder) {
            var E = Pf.StringDecoder;
            this._decoder = new E("utf8");
          }
          P = this._decoder.write(P);
        }
        return this._parser.write(P.toString()), this.emit("data", P), !0;
      }, v.prototype.end = function(P) {
        return P && P.length && this.write(P), this._parser.end(), !0;
      }, v.prototype.on = function(P, E) {
        var V = this;
        return !V._parser["on" + P] && m.indexOf(P) !== -1 && (V._parser["on" + P] = function() {
          var z = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          z.splice(0, 0, P), V.emit.apply(V, z);
        }), p.prototype.on.call(V, P, E);
      };
      var b = "[CDATA[", k = "DOCTYPE", R = "http://www.w3.org/XML/1998/namespace", D = "http://www.w3.org/2000/xmlns/", M = { xml: R, xmlns: D }, W = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Q = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, $ = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, L = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function U(P) {
        return P === " " || P === `
` || P === "\r" || P === "	";
      }
      function H(P) {
        return P === '"' || P === "'";
      }
      function te(P) {
        return P === ">" || U(P);
      }
      function J(P, E) {
        return P.test(E);
      }
      function ce(P, E) {
        return !J(P, E);
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
      }, Object.keys(t.ENTITIES).forEach(function(P) {
        var E = t.ENTITIES[P], V = typeof E == "number" ? String.fromCharCode(E) : E;
        t.ENTITIES[P] = V;
      });
      for (var le in t.STATE)
        t.STATE[t.STATE[le]] = le;
      F = t.STATE;
      function we(P, E, V) {
        P[E] && P[E](V);
      }
      function ne(P, E, V) {
        P.textNode && _e(P), we(P, E, V);
      }
      function _e(P) {
        P.textNode = Re(P.opt, P.textNode), P.textNode && we(P, "ontext", P.textNode), P.textNode = "";
      }
      function Re(P, E) {
        return P.trim && (E = E.trim()), P.normalize && (E = E.replace(/\s+/g, " ")), E;
      }
      function ke(P, E) {
        return _e(P), P.trackPosition && (E += `
Line: ` + P.line + `
Column: ` + P.column + `
Char: ` + P.c), E = new Error(E), P.error = E, we(P, "onerror", E), P;
      }
      function me(P) {
        return P.sawRoot && !P.closedRoot && he(P, "Unclosed root tag"), P.state !== F.BEGIN && P.state !== F.BEGIN_WHITESPACE && P.state !== F.TEXT && ke(P, "Unexpected end"), _e(P), P.c = "", P.closed = !0, we(P, "onend"), o.call(P, P.strict, P.opt), P;
      }
      function he(P, E) {
        if (typeof P != "object" || !(P instanceof o))
          throw new Error("bad call to strictFail");
        P.strict && ke(P, E);
      }
      function be(P) {
        P.strict || (P.tagName = P.tagName[P.looseCase]());
        var E = P.tags[P.tags.length - 1] || P, V = P.tag = { name: P.tagName, attributes: {} };
        P.opt.xmlns && (V.ns = E.ns), P.attribList.length = 0, ne(P, "onopentagstart", V);
      }
      function je(P, E) {
        var V = P.indexOf(":"), z = V < 0 ? ["", P] : P.split(":"), Ke = z[0], Ce = z[1];
        return E && P === "xmlns" && (Ke = "xmlns", Ce = ""), { prefix: Ke, local: Ce };
      }
      function tt(P) {
        if (P.strict || (P.attribName = P.attribName[P.looseCase]()), P.attribList.indexOf(P.attribName) !== -1 || P.tag.attributes.hasOwnProperty(P.attribName)) {
          P.attribName = P.attribValue = "";
          return;
        }
        if (P.opt.xmlns) {
          var E = je(P.attribName, !0), V = E.prefix, z = E.local;
          if (V === "xmlns")
            if (z === "xml" && P.attribValue !== R)
              he(
                P,
                "xml: prefix must be bound to " + R + `
Actual: ` + P.attribValue
              );
            else if (z === "xmlns" && P.attribValue !== D)
              he(
                P,
                "xmlns: prefix must be bound to " + D + `
Actual: ` + P.attribValue
              );
            else {
              var Ke = P.tag, Ce = P.tags[P.tags.length - 1] || P;
              Ke.ns === Ce.ns && (Ke.ns = Object.create(Ce.ns)), Ke.ns[z] = P.attribValue;
            }
          P.attribList.push([P.attribName, P.attribValue]);
        } else
          P.tag.attributes[P.attribName] = P.attribValue, ne(P, "onattribute", {
            name: P.attribName,
            value: P.attribValue
          });
        P.attribName = P.attribValue = "";
      }
      function dt(P, E) {
        if (P.opt.xmlns) {
          var V = P.tag, z = je(P.tagName);
          V.prefix = z.prefix, V.local = z.local, V.uri = V.ns[z.prefix] || "", V.prefix && !V.uri && (he(P, "Unbound namespace prefix: " + JSON.stringify(P.tagName)), V.uri = z.prefix);
          var Ke = P.tags[P.tags.length - 1] || P;
          V.ns && Ke.ns !== V.ns && Object.keys(V.ns).forEach(function(ve) {
            ne(P, "onopennamespace", {
              prefix: ve,
              uri: V.ns[ve]
            });
          });
          for (var Ce = 0, j = P.attribList.length; Ce < j; Ce++) {
            var G = P.attribList[Ce], re = G[0], ge = G[1], de = je(re, !0), pe = de.prefix, Te = de.local, Se = pe === "" ? "" : V.ns[pe] || "", ye = {
              name: re,
              value: ge,
              prefix: pe,
              local: Te,
              uri: Se
            };
            pe && pe !== "xmlns" && !Se && (he(P, "Unbound namespace prefix: " + JSON.stringify(pe)), ye.uri = pe), P.tag.attributes[re] = ye, ne(P, "onattribute", ye);
          }
          P.attribList.length = 0;
        }
        P.tag.isSelfClosing = !!E, P.sawRoot = !0, P.tags.push(P.tag), ne(P, "onopentag", P.tag), E || (!P.noscript && P.tagName.toLowerCase() === "script" ? P.state = F.SCRIPT : P.state = F.TEXT, P.tag = null, P.tagName = ""), P.attribName = P.attribValue = "", P.attribList.length = 0;
      }
      function vt(P) {
        if (!P.tagName) {
          he(P, "Weird empty close tag."), P.textNode += "</>", P.state = F.TEXT;
          return;
        }
        if (P.script) {
          if (P.tagName !== "script") {
            P.script += "</" + P.tagName + ">", P.tagName = "", P.state = F.SCRIPT;
            return;
          }
          ne(P, "onscript", P.script), P.script = "";
        }
        var E = P.tags.length, V = P.tagName;
        P.strict || (V = V[P.looseCase]());
        for (var z = V; E--; ) {
          var Ke = P.tags[E];
          if (Ke.name !== z)
            he(P, "Unexpected close tag");
          else
            break;
        }
        if (E < 0) {
          he(P, "Unmatched closing tag: " + P.tagName), P.textNode += "</" + P.tagName + ">", P.state = F.TEXT;
          return;
        }
        P.tagName = V;
        for (var Ce = P.tags.length; Ce-- > E; ) {
          var j = P.tag = P.tags.pop();
          P.tagName = P.tag.name, ne(P, "onclosetag", P.tagName);
          var G = {};
          for (var re in j.ns)
            G[re] = j.ns[re];
          var ge = P.tags[P.tags.length - 1] || P;
          P.opt.xmlns && j.ns !== ge.ns && Object.keys(j.ns).forEach(function(de) {
            var pe = j.ns[de];
            ne(P, "onclosenamespace", { prefix: de, uri: pe });
          });
        }
        E === 0 && (P.closedRoot = !0), P.tagName = P.attribValue = P.attribName = "", P.attribList.length = 0, P.state = F.TEXT;
      }
      function Ft(P) {
        var E = P.entity, V = E.toLowerCase(), z, Ke = "";
        return P.ENTITIES[E] ? P.ENTITIES[E] : P.ENTITIES[V] ? P.ENTITIES[V] : (E = V, E.charAt(0) === "#" && (E.charAt(1) === "x" ? (E = E.slice(2), z = parseInt(E, 16), Ke = z.toString(16)) : (E = E.slice(1), z = parseInt(E, 10), Ke = z.toString(10))), E = E.replace(/^0+/, ""), isNaN(z) || Ke.toLowerCase() !== E ? (he(P, "Invalid character entity"), "&" + P.entity + ";") : String.fromCodePoint(z));
      }
      function gn(P, E) {
        E === "<" ? (P.state = F.OPEN_WAKA, P.startTagPosition = P.position) : U(E) || (he(P, "Non-whitespace before first tag."), P.textNode = E, P.state = F.TEXT);
      }
      function Jt(P, E) {
        var V = "";
        return E < P.length && (V = P.charAt(E)), V;
      }
      function Ct(P) {
        var E = this;
        if (this.error)
          throw this.error;
        if (E.closed)
          return ke(
            E,
            "Cannot write after close. Assign an onready handler."
          );
        if (P === null)
          return me(E);
        typeof P == "object" && (P = P.toString());
        for (var V = 0, z = ""; z = Jt(P, V++), E.c = z, !!z; )
          switch (E.trackPosition && (E.position++, z === `
` ? (E.line++, E.column = 0) : E.column++), E.state) {
            case F.BEGIN:
              if (E.state = F.BEGIN_WHITESPACE, z === "\uFEFF")
                continue;
              gn(E, z);
              continue;
            case F.BEGIN_WHITESPACE:
              gn(E, z);
              continue;
            case F.TEXT:
              if (E.sawRoot && !E.closedRoot) {
                for (var Ke = V - 1; z && z !== "<" && z !== "&"; )
                  z = Jt(P, V++), z && E.trackPosition && (E.position++, z === `
` ? (E.line++, E.column = 0) : E.column++);
                E.textNode += P.substring(Ke, V - 1);
              }
              z === "<" && !(E.sawRoot && E.closedRoot && !E.strict) ? (E.state = F.OPEN_WAKA, E.startTagPosition = E.position) : (!U(z) && (!E.sawRoot || E.closedRoot) && he(E, "Text data outside of root node."), z === "&" ? E.state = F.TEXT_ENTITY : E.textNode += z);
              continue;
            case F.SCRIPT:
              z === "<" ? E.state = F.SCRIPT_ENDING : E.script += z;
              continue;
            case F.SCRIPT_ENDING:
              z === "/" ? E.state = F.CLOSE_TAG : (E.script += "<" + z, E.state = F.SCRIPT);
              continue;
            case F.OPEN_WAKA:
              if (z === "!")
                E.state = F.SGML_DECL, E.sgmlDecl = "";
              else if (!U(z)) if (J(W, z))
                E.state = F.OPEN_TAG, E.tagName = z;
              else if (z === "/")
                E.state = F.CLOSE_TAG, E.tagName = "";
              else if (z === "?")
                E.state = F.PROC_INST, E.procInstName = E.procInstBody = "";
              else {
                if (he(E, "Unencoded <"), E.startTagPosition + 1 < E.position) {
                  var Ce = E.position - E.startTagPosition;
                  z = new Array(Ce).join(" ") + z;
                }
                E.textNode += "<" + z, E.state = F.TEXT;
              }
              continue;
            case F.SGML_DECL:
              if (E.sgmlDecl + z === "--") {
                E.state = F.COMMENT, E.comment = "", E.sgmlDecl = "";
                continue;
              }
              E.doctype && E.doctype !== !0 && E.sgmlDecl ? (E.state = F.DOCTYPE_DTD, E.doctype += "<!" + E.sgmlDecl + z, E.sgmlDecl = "") : (E.sgmlDecl + z).toUpperCase() === b ? (ne(E, "onopencdata"), E.state = F.CDATA, E.sgmlDecl = "", E.cdata = "") : (E.sgmlDecl + z).toUpperCase() === k ? (E.state = F.DOCTYPE, (E.doctype || E.sawRoot) && he(
                E,
                "Inappropriately located doctype declaration"
              ), E.doctype = "", E.sgmlDecl = "") : z === ">" ? (ne(E, "onsgmldeclaration", E.sgmlDecl), E.sgmlDecl = "", E.state = F.TEXT) : (H(z) && (E.state = F.SGML_DECL_QUOTED), E.sgmlDecl += z);
              continue;
            case F.SGML_DECL_QUOTED:
              z === E.q && (E.state = F.SGML_DECL, E.q = ""), E.sgmlDecl += z;
              continue;
            case F.DOCTYPE:
              z === ">" ? (E.state = F.TEXT, ne(E, "ondoctype", E.doctype), E.doctype = !0) : (E.doctype += z, z === "[" ? E.state = F.DOCTYPE_DTD : H(z) && (E.state = F.DOCTYPE_QUOTED, E.q = z));
              continue;
            case F.DOCTYPE_QUOTED:
              E.doctype += z, z === E.q && (E.q = "", E.state = F.DOCTYPE);
              continue;
            case F.DOCTYPE_DTD:
              z === "]" ? (E.doctype += z, E.state = F.DOCTYPE) : z === "<" ? (E.state = F.OPEN_WAKA, E.startTagPosition = E.position) : H(z) ? (E.doctype += z, E.state = F.DOCTYPE_DTD_QUOTED, E.q = z) : E.doctype += z;
              continue;
            case F.DOCTYPE_DTD_QUOTED:
              E.doctype += z, z === E.q && (E.state = F.DOCTYPE_DTD, E.q = "");
              continue;
            case F.COMMENT:
              z === "-" ? E.state = F.COMMENT_ENDING : E.comment += z;
              continue;
            case F.COMMENT_ENDING:
              z === "-" ? (E.state = F.COMMENT_ENDED, E.comment = Re(E.opt, E.comment), E.comment && ne(E, "oncomment", E.comment), E.comment = "") : (E.comment += "-" + z, E.state = F.COMMENT);
              continue;
            case F.COMMENT_ENDED:
              z !== ">" ? (he(E, "Malformed comment"), E.comment += "--" + z, E.state = F.COMMENT) : E.doctype && E.doctype !== !0 ? E.state = F.DOCTYPE_DTD : E.state = F.TEXT;
              continue;
            case F.CDATA:
              z === "]" ? E.state = F.CDATA_ENDING : E.cdata += z;
              continue;
            case F.CDATA_ENDING:
              z === "]" ? E.state = F.CDATA_ENDING_2 : (E.cdata += "]" + z, E.state = F.CDATA);
              continue;
            case F.CDATA_ENDING_2:
              z === ">" ? (E.cdata && ne(E, "oncdata", E.cdata), ne(E, "onclosecdata"), E.cdata = "", E.state = F.TEXT) : z === "]" ? E.cdata += "]" : (E.cdata += "]]" + z, E.state = F.CDATA);
              continue;
            case F.PROC_INST:
              z === "?" ? E.state = F.PROC_INST_ENDING : U(z) ? E.state = F.PROC_INST_BODY : E.procInstName += z;
              continue;
            case F.PROC_INST_BODY:
              if (!E.procInstBody && U(z))
                continue;
              z === "?" ? E.state = F.PROC_INST_ENDING : E.procInstBody += z;
              continue;
            case F.PROC_INST_ENDING:
              z === ">" ? (ne(E, "onprocessinginstruction", {
                name: E.procInstName,
                body: E.procInstBody
              }), E.procInstName = E.procInstBody = "", E.state = F.TEXT) : (E.procInstBody += "?" + z, E.state = F.PROC_INST_BODY);
              continue;
            case F.OPEN_TAG:
              J(Q, z) ? E.tagName += z : (be(E), z === ">" ? dt(E) : z === "/" ? E.state = F.OPEN_TAG_SLASH : (U(z) || he(E, "Invalid character in tag name"), E.state = F.ATTRIB));
              continue;
            case F.OPEN_TAG_SLASH:
              z === ">" ? (dt(E, !0), vt(E)) : (he(E, "Forward-slash in opening tag not followed by >"), E.state = F.ATTRIB);
              continue;
            case F.ATTRIB:
              if (U(z))
                continue;
              z === ">" ? dt(E) : z === "/" ? E.state = F.OPEN_TAG_SLASH : J(W, z) ? (E.attribName = z, E.attribValue = "", E.state = F.ATTRIB_NAME) : he(E, "Invalid attribute name");
              continue;
            case F.ATTRIB_NAME:
              z === "=" ? E.state = F.ATTRIB_VALUE : z === ">" ? (he(E, "Attribute without value"), E.attribValue = E.attribName, tt(E), dt(E)) : U(z) ? E.state = F.ATTRIB_NAME_SAW_WHITE : J(Q, z) ? E.attribName += z : he(E, "Invalid attribute name");
              continue;
            case F.ATTRIB_NAME_SAW_WHITE:
              if (z === "=")
                E.state = F.ATTRIB_VALUE;
              else {
                if (U(z))
                  continue;
                he(E, "Attribute without value"), E.tag.attributes[E.attribName] = "", E.attribValue = "", ne(E, "onattribute", {
                  name: E.attribName,
                  value: ""
                }), E.attribName = "", z === ">" ? dt(E) : J(W, z) ? (E.attribName = z, E.state = F.ATTRIB_NAME) : (he(E, "Invalid attribute name"), E.state = F.ATTRIB);
              }
              continue;
            case F.ATTRIB_VALUE:
              if (U(z))
                continue;
              H(z) ? (E.q = z, E.state = F.ATTRIB_VALUE_QUOTED) : (E.opt.unquotedAttributeValues || ke(E, "Unquoted attribute value"), E.state = F.ATTRIB_VALUE_UNQUOTED, E.attribValue = z);
              continue;
            case F.ATTRIB_VALUE_QUOTED:
              if (z !== E.q) {
                z === "&" ? E.state = F.ATTRIB_VALUE_ENTITY_Q : E.attribValue += z;
                continue;
              }
              tt(E), E.q = "", E.state = F.ATTRIB_VALUE_CLOSED;
              continue;
            case F.ATTRIB_VALUE_CLOSED:
              U(z) ? E.state = F.ATTRIB : z === ">" ? dt(E) : z === "/" ? E.state = F.OPEN_TAG_SLASH : J(W, z) ? (he(E, "No whitespace between attributes"), E.attribName = z, E.attribValue = "", E.state = F.ATTRIB_NAME) : he(E, "Invalid attribute name");
              continue;
            case F.ATTRIB_VALUE_UNQUOTED:
              if (!te(z)) {
                z === "&" ? E.state = F.ATTRIB_VALUE_ENTITY_U : E.attribValue += z;
                continue;
              }
              tt(E), z === ">" ? dt(E) : E.state = F.ATTRIB;
              continue;
            case F.CLOSE_TAG:
              if (E.tagName)
                z === ">" ? vt(E) : J(Q, z) ? E.tagName += z : E.script ? (E.script += "</" + E.tagName, E.tagName = "", E.state = F.SCRIPT) : (U(z) || he(E, "Invalid tagname in closing tag"), E.state = F.CLOSE_TAG_SAW_WHITE);
              else {
                if (U(z))
                  continue;
                ce(W, z) ? E.script ? (E.script += "</" + z, E.state = F.SCRIPT) : he(E, "Invalid tagname in closing tag.") : E.tagName = z;
              }
              continue;
            case F.CLOSE_TAG_SAW_WHITE:
              if (U(z))
                continue;
              z === ">" ? vt(E) : he(E, "Invalid characters in closing tag");
              continue;
            case F.TEXT_ENTITY:
            case F.ATTRIB_VALUE_ENTITY_Q:
            case F.ATTRIB_VALUE_ENTITY_U:
              var j, G;
              switch (E.state) {
                case F.TEXT_ENTITY:
                  j = F.TEXT, G = "textNode";
                  break;
                case F.ATTRIB_VALUE_ENTITY_Q:
                  j = F.ATTRIB_VALUE_QUOTED, G = "attribValue";
                  break;
                case F.ATTRIB_VALUE_ENTITY_U:
                  j = F.ATTRIB_VALUE_UNQUOTED, G = "attribValue";
                  break;
              }
              if (z === ";") {
                var re = Ft(E);
                E.opt.unparsedEntities && !Object.values(t.XML_ENTITIES).includes(re) ? (E.entity = "", E.state = j, E.write(re)) : (E[G] += re, E.entity = "", E.state = j);
              } else J(E.entity.length ? L : $, z) ? E.entity += z : (he(E, "Invalid character in entity name"), E[G] += "&" + E.entity + z, E.entity = "", E.state = j);
              continue;
            default:
              throw new Error(E, "Unknown state: " + E.state);
          }
        return E.position >= E.bufferCheckPosition && a(E), E;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var P = String.fromCharCode, E = Math.floor, V = function() {
          var z = 16384, Ke = [], Ce, j, G = -1, re = arguments.length;
          if (!re)
            return "";
          for (var ge = ""; ++G < re; ) {
            var de = Number(arguments[G]);
            if (!isFinite(de) || // `NaN`, `+Infinity`, or `-Infinity`
            de < 0 || // not a valid Unicode code point
            de > 1114111 || // not a valid Unicode code point
            E(de) !== de)
              throw RangeError("Invalid code point: " + de);
            de <= 65535 ? Ke.push(de) : (de -= 65536, Ce = (de >> 10) + 55296, j = de % 1024 + 56320, Ke.push(Ce, j)), (G + 1 === re || Ke.length > z) && (ge += P.apply(null, Ke), Ke.length = 0);
          }
          return ge;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: V,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = V;
      }();
    })(e);
  }(Af)), Af;
}
Og();
const ii = "sclElements", fh = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
`${fh.default.uri}`;
const Tg = {
  AccessControl: {},
  AccessPoint: {
    clock: "",
    desc: "",
    kdc: "",
    name: "",
    router: "",
    templateUuid: "",
    uuid: ""
  },
  Address: {},
  AllocationRole: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  AllocationRoleRef: {
    allocationRole: "",
    allocationRoleUuid: "",
    desc: ""
  },
  AnalogueWiringParameters: {
    desc: "",
    dsgInp: "",
    fctInp: "",
    id: "",
    inpNam: "",
    inpRef: ""
  },
  AnalogueWiringParametersRef: {
    desc: "",
    id: ""
  },
  Application: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  ApplicationSclRef: {},
  Association: {
    apRef: "",
    associationID: "",
    desc: "",
    iedName: "",
    initiator: "",
    kind: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    lnUuid: "",
    prefix: ""
  },
  Authentication: {
    certificate: "",
    none: "",
    password: "",
    strong: "",
    weak: ""
  },
  BDA: {
    bType: "",
    count: "",
    desc: "",
    name: "",
    sAddr: "",
    type: "",
    valImport: "",
    valKind: ""
  },
  Bay: {
    desc: "",
    name: "",
    templateUuid: "",
    uuid: ""
  },
  BayType: {},
  BehaviorDescription: {
    desc: "",
    fileReference: "",
    format: "",
    isSimulation: "",
    isSpecification: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  BehaviorDescriptionRef: {
    behaviorDescription: "",
    behaviorDescriptionUuid: "",
    desc: ""
  },
  BehaviorReference: {
    behaviorReference: "",
    behaviorUuid: "",
    desc: ""
  },
  BinaryWiringParameters: {
    debTm: "",
    desc: "",
    fastOutput: "",
    id: "",
    inpNam: "",
    inpRef: "",
    outNam: "",
    outOffDl: "",
    outOnDl: "",
    outRef: "",
    outTyp: "",
    vInOff: "",
    vInOn: ""
  },
  BinaryWiringParametersRef: {
    desc: "",
    id: ""
  },
  BitRate: { multiplier: "", unit: "" },
  CheckoutID: {
    desc: "",
    engRight: "",
    fileName: "",
    fileType: "",
    fileUuid: "",
    headerId: "",
    revision: "",
    version: "",
    when: ""
  },
  ClientLN: {
    apRef: "",
    desc: "",
    iedName: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    lnUuid: "",
    prefix: ""
  },
  ClientServices: {
    acceptServerInitiatedAssociation: "",
    bufReport: "",
    goose: "",
    gsse: "",
    maxAttributes: "",
    maxGOOSE: "",
    maxReports: "",
    maxSMV: "",
    noIctBinding: "",
    rGOOSE: "",
    rSV: "",
    readLog: "",
    supportsLdName: "",
    sv: "",
    unbufReport: ""
  },
  CommProt: { ipv6: "" },
  Communication: { desc: "" },
  CommunicationServiceSpecifications: {
    desc: ""
  },
  ConductingEquipment: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: "",
    virtual: ""
  },
  ConfDataSet: {
    max: "",
    maxAttributes: "",
    modify: ""
  },
  ConfLNs: { fixLnInst: "", fixPrefix: "" },
  ConfLdName: {},
  ConfLogControl: { max: "" },
  ConfReportControl: {
    bufConf: "",
    bufMode: "",
    max: "",
    maxBuf: ""
  },
  ConfSG: { resvTms: "" },
  ConfSigRef: { max: "" },
  ConnectedAP: {
    apName: "",
    apUuid: "",
    desc: "",
    iedName: "",
    redProt: ""
  },
  ConnectivityNode: {
    desc: "",
    name: "",
    pathName: "",
    templateUuid: "",
    uuid: ""
  },
  ControlRef: {
    controlled: "",
    controlledDoName: "",
    controlledLNodeUuid: "",
    desc: "",
    extCtrlAddr: "",
    extCtrlUuid: "",
    originUuid: "",
    output: "",
    outputInst: "",
    pDO: "",
    pLN: "",
    resourceName: "",
    resourceUuid: "",
    templateUuid: "",
    uuid: ""
  },
  ControllingLNode: {
    desc: "",
    outputName: "",
    pLN: "",
    resourceName: "",
    resourceUuid: ""
  },
  DA: {
    bType: "",
    count: "",
    dchg: "",
    desc: "",
    dupd: "",
    fc: "",
    name: "",
    qchg: "",
    sAddr: "",
    type: "",
    valImport: "",
    valKind: ""
  },
  DAI: {
    desc: "",
    ix: "",
    name: "",
    sAddr: "",
    valImport: "",
    valKind: ""
  },
  DAS: {
    desc: "",
    ix: "",
    mappedDaName: "",
    mappedLnUuid: "",
    name: "",
    valImport: "",
    valKind: ""
  },
  DAType: { desc: "", id: "", iedType: "" },
  DO: {
    accessControl: "",
    desc: "",
    name: "",
    transient: "",
    type: ""
  },
  DOI: {
    accessControl: "",
    desc: "",
    ix: "",
    name: ""
  },
  DOS: {
    desc: "",
    mappedDoName: "",
    mappedLnUuid: "",
    name: ""
  },
  DOType: {
    cdc: "",
    desc: "",
    id: "",
    iedType: ""
  },
  DataObjectDirectory: {},
  DataSet: {
    desc: "",
    name: "",
    templateUuid: "",
    uuid: ""
  },
  DataSetDirectory: {},
  DataTypeTemplates: {},
  DynAssociation: { max: "" },
  DynDataSet: { max: "", maxAttributes: "" },
  EnumType: { desc: "", id: "" },
  EnumVal: { desc: "", ord: "" },
  EqFunction: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  EqSubFunction: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  ExtCtrl: {
    apRef: "",
    checkInterlock: "",
    checkSynchrocheck: "",
    desc: "",
    doName: "",
    iedName: "",
    intAddr: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    lnUuid: "",
    pDO: "",
    pLN: "",
    prefix: "",
    templateUuid: "",
    uuid: ""
  },
  ExtRef: {
    daName: "",
    desc: "",
    doName: "",
    iedName: "",
    intAddr: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    lnUuid: "",
    pDA: "",
    pDO: "",
    pLN: "",
    pServT: "",
    prefix: "",
    serviceType: "",
    srcCBName: "",
    srcCBUuid: "",
    srcLDInst: "",
    srcLNClass: "",
    srcLNInst: "",
    srcPrefix: "",
    templateUuid: "",
    uuid: ""
  },
  FCDA: {
    daName: "",
    doName: "",
    fc: "",
    ix: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    lnUuid: "",
    prefix: ""
  },
  FileHandling: {
    ftp: "",
    ftps: "",
    mms: ""
  },
  Function: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  FunctionCatRef: {
    function: "",
    functionUuid: ""
  },
  FunctionCategory: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  FunctionCategoryRef: {
    desc: "",
    functionCategory: "",
    functionCategoryUuid: ""
  },
  FunctionRef: {
    desc: "",
    function: "",
    functionUuid: ""
  },
  FunctionRole: {
    cardinality: "",
    desc: "",
    max: "",
    name: "",
    originUuid: "",
    selector: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  FunctionRoleContent: { roleInst: "" },
  FunctionSclRef: {},
  FunctionTemplate: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  FunctionalSubVariant: {
    desc: "",
    isBaseline: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  FunctionalVariant: {
    desc: "",
    isBaseline: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  FunctionalVariantGroup: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  FunctionalVariantRef: {
    functionalVariant: "",
    functionalVariantUuid: "",
    update: ""
  },
  GOOSE: {
    fixedOffs: "",
    goose: "",
    max: "",
    rGOOSE: ""
  },
  GOOSEMcSecurity: {
    encryption: "",
    signature: ""
  },
  GOOSESecurity: {
    desc: "",
    name: "",
    serialNumber: "",
    templateUuid: "",
    uuid: "",
    xferNumber: ""
  },
  GSE: {
    cbName: "",
    cbUuid: "",
    desc: "",
    ldInst: ""
  },
  GSEControl: {
    appID: "",
    confRev: "",
    datSet: "",
    desc: "",
    fixedOffs: "",
    name: "",
    securityEnable: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  GSEDir: {},
  GSESettings: {
    appID: "",
    cbName: "",
    datSet: "",
    dataLabel: "",
    kdaParticipant: ""
  },
  GSSE: { max: "" },
  GeneralEquipment: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: "",
    virtual: ""
  },
  GetCBValues: {},
  GetDataObjectDefinition: {},
  GetDataSetValue: {},
  GetDirectory: {},
  GooseParameters: {
    cbName: "",
    desc: "",
    dsName: "",
    goId: "",
    id: "",
    maxTime: "",
    minTime: "",
    securityEnabled: ""
  },
  GooseParametersRef: {
    desc: "",
    id: ""
  },
  Header: {
    baseUuid: "",
    fileType: "",
    id: "",
    nameStructure: "",
    revision: "",
    toolID: "",
    uuid: "",
    version: ""
  },
  History: {},
  Hitem: {
    revision: "",
    version: "",
    what: "",
    when: "",
    who: "",
    why: ""
  },
  IED: {
    configVersion: "",
    desc: "",
    engRight: "",
    manufacturer: "",
    name: "",
    originalSclRelease: "",
    originalSclRevision: "",
    originalSclVersion: "",
    owner: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  IEDName: {
    apRef: "",
    apUuid: "",
    ldInst: "",
    ldUuid: "",
    lnClass: "",
    lnInst: "",
    lnUuid: "",
    prefix: ""
  },
  IEDSourceFiles: {},
  InputVar: {
    daName: "",
    dataName: "",
    desc: "",
    doName: "",
    inputName: "",
    inputUuid: "",
    lnodeUuid: "",
    value: "",
    varName: ""
  },
  InputVarRef: {
    desc: "",
    value: "",
    variable: ""
  },
  Inputs: { desc: "" },
  IssuerName: { commonName: "", idHierarchy: "" },
  KDC: { apName: "", apUuid: "", iedName: "" },
  L2CommParameters: {
    appId: "",
    desc: "",
    macAddr: "",
    vlanId: "",
    vlanPriority: ""
  },
  L3IPv4CommParameters: {
    IPv4: "",
    "IPv4-IGMPv3Src": "",
    appId: "",
    desc: "",
    vlanId: "",
    vlanPriority: ""
  },
  L3IPv6CommParameters: {
    IPv6: "",
    "IPv6-IGMPv3Src": "",
    appId: "",
    desc: "",
    vlanId: "",
    vlanPriority: ""
  },
  LDevice: {
    desc: "",
    inst: "",
    ldName: "",
    templateUuid: "",
    uuid: ""
  },
  LN: {
    desc: "",
    inst: "",
    lnClass: "",
    lnType: "",
    prefix: "",
    templateUuid: "",
    uuid: ""
  },
  LN0: {
    desc: "",
    inst: "",
    lnClass: "",
    lnType: "",
    templateUuid: "",
    uuid: ""
  },
  LNode: {
    desc: "",
    iedName: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    lnType: "",
    lnUuid: "",
    prefix: "",
    templateUuid: "",
    uuid: ""
  },
  LNodeDataRef: {
    daName: "",
    data: "",
    desc: "",
    doName: "",
    lnodeUuid: ""
  },
  LNodeInputRef: {
    desc: "",
    sourceRef: "",
    sourceRefUuid: ""
  },
  LNodeInputs: { desc: "" },
  LNodeOutputRef: {
    controlRef: "",
    controlRefUuid: "",
    desc: ""
  },
  LNodeOutputs: { desc: "" },
  LNodeSpecNaming: {
    sIedName: "",
    sLdInst: "",
    sLnClass: "",
    sLnInst: "",
    sPrefix: ""
  },
  LNodeType: {
    desc: "",
    id: "",
    iedType: "",
    lnClass: ""
  },
  Label: { id: "", lang: "" },
  Labels: { desc: "" },
  Line: {
    desc: "",
    name: "",
    nomFreq: "",
    numPhases: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  Log: { desc: "", name: "" },
  LogControl: {
    bufTime: "",
    datSet: "",
    desc: "",
    intgPd: "",
    ldInst: "",
    lnClass: "",
    lnInst: "",
    logEna: "",
    logName: "",
    name: "",
    prefix: "",
    reasonCode: "",
    templateUuid: "",
    uuid: ""
  },
  LogParameters: {
    cbName: "",
    desc: "",
    dsName: "",
    id: "",
    intgPd: "",
    logEna: "",
    logLdInst: "",
    logLnClass: "",
    logLnInst: "",
    logName: "",
    logPrefix: "",
    reasonCode: ""
  },
  LogParametersRef: { desc: "", id: "" },
  LogSettings: {
    cbName: "",
    datSet: "",
    intgPd: "",
    logEna: "",
    trgOps: ""
  },
  MaxTime: { multiplier: "", unit: "" },
  McSecurity: { encryption: "", signature: "" },
  MinRequestedSCDFile: {
    desc: "",
    fileName: "",
    fileType: "",
    fileUuid: "",
    revision: "",
    version: "",
    when: ""
  },
  MinRequestedSCDFiles: {},
  MinTime: { multiplier: "", unit: "" },
  MultiAPPerSubNet: {},
  NeutralPoint: {
    bayName: "",
    cNodeName: "",
    cNodeUuid: "",
    connectivityNode: "",
    desc: "",
    lineName: "",
    name: "",
    processName: "",
    substationName: "",
    voltageLevelName: ""
  },
  OptFields: {
    bufOvfl: "",
    configRef: "",
    dataRef: "",
    dataSet: "",
    entryID: "",
    reasonCode: "",
    seqNum: "",
    timeStamp: ""
  },
  OutputVar: {
    daName: "",
    dataName: "",
    desc: "",
    doName: "",
    lnodeUuid: "",
    outputName: "",
    outputUuid: "",
    value: "",
    varName: ""
  },
  OutputVarRef: {
    desc: "",
    value: "",
    variable: ""
  },
  Outputs: { desc: "" },
  P: { type: "" },
  PhysConn: { desc: "", type: "" },
  PowerSystemRelation: {
    desc: "",
    name: "",
    originUuid: "",
    relation: "",
    relationUuid: "",
    selector: "",
    templateUuid: "",
    uuid: ""
  },
  PowerSystemRelationRef: {
    desc: "",
    powerSystemRelation: "",
    powerSystemRelationUuid: ""
  },
  PowerSystemRelations: { desc: "" },
  PowerTransformer: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: "",
    virtual: ""
  },
  Private: { source: "", type: "" },
  Process: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  ProcessEcho: {
    desc: "",
    source: "",
    sourceDaName: "",
    sourceDoName: "",
    sourceLNodeUuid: ""
  },
  ProcessResource: {
    cardinality: "",
    desc: "",
    max: "",
    name: "",
    originUuid: "",
    selector: "",
    templateUuid: "",
    uuid: ""
  },
  ProcessResourceRef: {
    desc: "",
    processResource: "",
    processResourceUuid: ""
  },
  ProcessResources: { desc: "" },
  Project: {
    desc: "",
    name: "",
    uuid: ""
  },
  ProjectProcessReference: {
    desc: "",
    processReference: "",
    processUuid: ""
  },
  ProtNs: { type: "" },
  Protocol: { mustUnderstand: "" },
  ReadWrite: {},
  RedProt: { hsr: "", prp: "", rstp: "" },
  ReportControl: {
    bufTime: "",
    buffered: "",
    confRev: "",
    datSet: "",
    desc: "",
    indexed: "",
    intgPd: "",
    name: "",
    rptID: "",
    templateUuid: "",
    uuid: ""
  },
  ReportParameters: {
    bufTime: "",
    buffered: "",
    cbName: "",
    desc: "",
    dsName: "",
    id: "",
    intgPd: ""
  },
  ReportParametersRef: {
    desc: "",
    id: ""
  },
  ReportSettings: {
    bufTime: "",
    cbName: "",
    datSet: "",
    intgPd: "",
    optFields: "",
    owner: "",
    resvTms: "",
    rptID: "",
    trgOps: ""
  },
  Resource: {
    resInst: "",
    source: "",
    sourceUuid: ""
  },
  RptEnabled: { desc: "", max: "" },
  SCL: {
    release: "",
    revision: "",
    version: ""
  },
  SCSM: {
    iec61850_8_1: "",
    iec61850_8_2: "",
    serverAssociationInitiation: ""
  },
  SDI: {
    desc: "",
    ix: "",
    name: "",
    sAddr: ""
  },
  SDO: {
    count: "",
    desc: "",
    name: "",
    type: ""
  },
  SDS: {
    desc: "",
    ix: "",
    mappedDoName: "",
    mappedLnUuid: "",
    name: ""
  },
  SGEdit: { resvTms: "" },
  SMV: {
    cbName: "",
    cbUuid: "",
    desc: "",
    ldInst: ""
  },
  SMVParameters: {
    cbName: "",
    desc: "",
    dsName: "",
    id: "",
    multicast: "",
    nofASDU: "",
    securityEnabled: "",
    smpMod: "",
    smpRate: "",
    smvId: ""
  },
  SMVParametersRef: { desc: "", id: "" },
  SMVSecurity: {
    desc: "",
    name: "",
    serialNumber: "",
    templateUuid: "",
    uuid: "",
    xferNumber: ""
  },
  SMVSettings: {
    cbName: "",
    datSet: "",
    kdaParticipant: "",
    nofASDU: "",
    optFields: "",
    pdcTimeStamp: "",
    samplesPerSec: "",
    smpRate: "",
    svID: "",
    synchSrcId: ""
  },
  SMVsc: {
    delivery: "",
    deliveryConf: "",
    max: "",
    rSV: "",
    sv: ""
  },
  SVMcSecurity: {
    encryption: "",
    signature: ""
  },
  SampledValueControl: {
    confRev: "",
    datSet: "",
    desc: "",
    multicast: "",
    name: "",
    nofASDU: "",
    securityEnable: "",
    smpMod: "",
    smpRate: "",
    smvID: "",
    templateUuid: "",
    uuid: ""
  },
  SamplesPerSec: {},
  SclFileReference: {
    desc: "",
    fileName: "",
    fileType: "",
    fileUuid: "",
    revision: "",
    version: "",
    when: ""
  },
  SecPerSamples: {},
  Security: {
    ACSEAuthentication: "",
    E2ESecurity: ""
  },
  Server: { desc: "", timeout: "" },
  ServerAt: {
    apName: "",
    apUuid: "",
    desc: ""
  },
  ServiceSpecifications: { desc: "" },
  Services: { nameLength: "" },
  SetDataSetValue: {},
  SettingControl: {
    actSG: "",
    desc: "",
    numOfSGs: "",
    resvTms: ""
  },
  SettingGroups: {},
  SignalRole: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  SmpRate: {},
  SmvOpts: {
    dataSet: "",
    refreshTime: "",
    sampleMode: "",
    sampleRate: "",
    sampleSynchronized: "",
    security: "",
    synchSourceId: "",
    timestamp: ""
  },
  SourceFiles: {},
  SourceRef: {
    desc: "",
    extRefAddr: "",
    extRefUuid: "",
    input: "",
    inputInst: "",
    originUuid: "",
    pDA: "",
    pDO: "",
    pLN: "",
    resourceName: "",
    resourceUuid: "",
    service: "",
    source: "",
    sourceDaName: "",
    sourceDoName: "",
    sourceLNodeUuid: "",
    templateUuid: "",
    uuid: ""
  },
  SubCategory: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: ""
  },
  SubCheckoutID: {
    desc: "",
    engRight: "",
    fileName: "",
    fileType: "",
    fileUuid: "",
    headerId: "",
    revision: "",
    version: "",
    when: ""
  },
  SubEquipment: {
    desc: "",
    name: "",
    phase: "",
    templateUuid: "",
    uuid: "",
    virtual: ""
  },
  SubFunction: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  SubFunctionTemplate: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  SubNetwork: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: ""
  },
  Subject: { commonName: "", idHierarchy: "" },
  SubscriberLNode: {
    desc: "",
    inputName: "",
    pLN: "",
    resourceName: "",
    resourceUuid: "",
    service: ""
  },
  Substation: {
    desc: "",
    name: "",
    templateUuid: "",
    uuid: ""
  },
  SupSubscription: { maxGo: "", maxSv: "" },
  TapChanger: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: "",
    virtual: ""
  },
  Terminal: {
    bayName: "",
    cNodeName: "",
    cNodeUuid: "",
    connectivityNode: "",
    desc: "",
    lineName: "",
    name: "",
    processName: "",
    substationName: "",
    voltageLevelName: ""
  },
  Text: { source: "" },
  TimeSyncProt: {
    c37_238: "",
    iec61850_9_3: "",
    other: "",
    sntp: ""
  },
  TimerActivatedControl: {},
  TransformerWinding: {
    desc: "",
    name: "",
    templateUuid: "",
    type: "",
    uuid: "",
    virtual: ""
  },
  TrgOps: {
    dchg: "",
    dupd: "",
    gi: "",
    period: "",
    qchg: ""
  },
  Val: { sGroup: "" },
  ValueHandling: { setToRO: "" },
  Variable: {
    desc: "",
    name: "",
    originUuid: "",
    templateUuid: "",
    uuid: "",
    value: ""
  },
  VariableApplyTo: {
    attribute: "",
    daName: "",
    defaultValue: "",
    desc: "",
    doName: "",
    element: "",
    elementUuid: "",
    format: "",
    sGroup: ""
  },
  VariableRef: {
    desc: "",
    value: "",
    variable: "",
    variableUuid: ""
  },
  Voltage: { multiplier: "", unit: "" },
  VoltageLevel: {
    desc: "",
    name: "",
    nomFreq: "",
    numPhases: "",
    templateUuid: "",
    uuid: ""
  }
}, dh = {
  AllocationRoleRef: [
    {
      attribute: { path: "allocationRole", uuid: "allocationRoleUuid" },
      resolution: "direct",
      target: ["AllocationRole"],
      companions: []
    }
  ],
  BehaviorDescriptionRef: [
    {
      attribute: { path: "behaviorDescription", uuid: "behaviorDescriptionUuid" },
      resolution: "direct",
      target: ["BehaviorDescription"],
      companions: []
    }
  ],
  BehaviorReference: [
    {
      attribute: { path: "behaviorReference", uuid: "behaviorUuid" },
      resolution: "direct",
      target: ["BehaviorDescription"],
      companions: []
    }
  ],
  ControllingLNode: [
    {
      attribute: { path: "resourceName", uuid: "resourceUuid" },
      resolution: "direct",
      target: ["ProcessResource"],
      companions: []
    }
  ],
  ControlRef: [
    {
      attribute: { path: "controlled", uuid: "controlledLNodeUuid" },
      resolution: "lnode",
      target: ["LNode"],
      companions: [{ name: "controlledDoName", required: !0 }]
    },
    {
      attribute: { path: "extCtrlAddr", uuid: "extCtrlUuid" },
      resolution: "ied-address",
      target: ["ExtCtrl"],
      companions: []
    },
    {
      attribute: { path: "resourceName", uuid: "resourceUuid" },
      resolution: "direct",
      target: ["ProcessResource"],
      companions: []
    }
  ],
  DAS: [
    {
      attribute: { path: "mappedDaName", uuid: "mappedLnUuid" },
      resolution: "lnode",
      target: ["LN", "LN0"],
      companions: []
    }
  ],
  DOS: [
    {
      attribute: { path: "mappedDoName", uuid: "mappedLnUuid" },
      resolution: "lnode",
      target: ["LN", "LN0"],
      companions: []
    }
  ],
  FunctionCategoryRef: [
    {
      attribute: { path: "functionCategory", uuid: "functionCategoryUuid" },
      resolution: "direct",
      target: ["FunctionCategory", "SubCategory"],
      companions: []
    }
  ],
  FunctionCatRef: [
    {
      attribute: { path: "function", uuid: "functionUuid" },
      resolution: "direct",
      target: ["Function", "SubFunction"],
      companions: []
    }
  ],
  FunctionRef: [
    {
      attribute: { path: "function", uuid: "functionUuid" },
      resolution: "direct",
      target: ["Function", "SubFunction", "EqFunction", "EqSubFunction"],
      companions: []
    }
  ],
  FunctionalVariantRef: [
    {
      attribute: { path: "functionalVariant", uuid: "functionalVariantUuid" },
      resolution: "direct",
      target: ["FunctionalVariant", "FunctionalSubVariant"],
      companions: []
    }
  ],
  InputVar: [
    {
      attribute: { path: "dataName", uuid: "lnodeUuid" },
      resolution: "behavior-description",
      target: ["LNode"],
      companions: [
        { name: "doName", required: !0 },
        { name: "daName", required: !1 }
      ]
    },
    {
      attribute: { path: "inputName", uuid: "inputUuid" },
      resolution: "behavior-description",
      target: ["SourceRef"],
      companions: []
    }
  ],
  LNodeDataRef: [
    {
      attribute: { path: "data", uuid: "lnodeUuid" },
      resolution: "lnode",
      target: ["LNode"],
      companions: [
        { name: "doName", required: !0 },
        { name: "daName", required: !1 }
      ]
    }
  ],
  LNodeInputRef: [
    {
      attribute: { path: "sourceRef", uuid: "sourceRefUuid" },
      resolution: "direct",
      target: ["SourceRef"],
      companions: []
    }
  ],
  LNodeOutputRef: [
    {
      attribute: { path: "controlRef", uuid: "controlRefUuid" },
      resolution: "direct",
      target: ["ControlRef"],
      companions: []
    }
  ],
  OutputVar: [
    {
      attribute: { path: "dataName", uuid: "lnodeUuid" },
      resolution: "behavior-description",
      target: ["LNode"],
      companions: [
        { name: "doName", required: !0 },
        { name: "daName", required: !1 }
      ]
    },
    {
      attribute: { path: "outputName", uuid: "outputUuid" },
      resolution: "behavior-description",
      target: ["ControlRef"],
      companions: []
    }
  ],
  PowerSystemRelation: [
    {
      attribute: { path: "relation", uuid: "relationUuid" },
      resolution: "direct",
      target: [
        "ConductingEquipment",
        "PowerTransformer",
        "TransformerWinding",
        "GeneralEquipment",
        "SubEquipment"
      ],
      companions: []
    }
  ],
  PowerSystemRelationRef: [
    {
      attribute: { path: "powerSystemRelation", uuid: "powerSystemRelationUuid" },
      resolution: "direct",
      target: ["PowerSystemRelation"],
      companions: []
    }
  ],
  ProcessEcho: [
    {
      attribute: { path: "source", uuid: "sourceLNodeUuid" },
      resolution: "lnode",
      target: ["LNode"],
      companions: [
        { name: "sourceDoName", required: !0 },
        { name: "sourceDaName", required: !0 }
      ]
    }
  ],
  ProcessResourceRef: [
    {
      attribute: { path: "processResource", uuid: "processResourceUuid" },
      resolution: "direct",
      target: ["ProcessResource"],
      companions: []
    }
  ],
  ProjectProcessReference: [
    {
      attribute: { path: "processReference", uuid: "processUuid" },
      resolution: "direct",
      target: ["Process"],
      companions: []
    }
  ],
  Resource: [
    {
      attribute: { path: "source", uuid: "sourceUuid" },
      resolution: "direct",
      target: [
        "Substation",
        "VoltageLevel",
        "Bay",
        "ConductingEquipment",
        "PowerTransformer",
        "TransformerWinding",
        "GeneralEquipment",
        "Function",
        "SubFunction",
        "EqFunction",
        "EqSubFunction",
        "LNode"
      ],
      companions: []
    }
  ],
  SDS: [
    {
      attribute: { path: "mappedDoName", uuid: "mappedLnUuid" },
      resolution: "lnode",
      target: ["LN", "LN0"],
      companions: []
    }
  ],
  SourceRef: [
    {
      attribute: { path: "source", uuid: "sourceLNodeUuid" },
      resolution: "lnode",
      target: ["LNode"],
      companions: [
        { name: "sourceDoName", required: !0 },
        { name: "sourceDaName", required: !1 }
      ]
    },
    {
      attribute: { path: "extRefAddr", uuid: "extRefUuid" },
      resolution: "ied-address",
      target: ["ExtRef"],
      companions: []
    },
    {
      attribute: { path: "resourceName", uuid: "resourceUuid" },
      resolution: "direct",
      target: ["ProcessResource"],
      companions: []
    }
  ],
  SubscriberLNode: [
    {
      attribute: { path: "resourceName", uuid: "resourceUuid" },
      resolution: "direct",
      target: ["ProcessResource"],
      companions: []
    }
  ],
  VariableApplyTo: [
    {
      attribute: { path: "element", uuid: "elementUuid" },
      resolution: "unsupported",
      target: ["LNode", "Function", "SubFunction", "EqFunction", "EqSubFunction"],
      companions: [
        { name: "doName", required: !1 },
        { name: "daName", required: !1 }
      ]
    }
  ],
  VariableRef: [
    {
      attribute: { path: "variable", uuid: "variableUuid" },
      resolution: "direct",
      target: ["Variable"],
      companions: []
    }
  ]
};
new Set(
  Object.entries(Tg).filter(([, e]) => "uuid" in e).map(([e]) => e)
);
new Set(Object.keys(dh));
new Set(
  Object.values(dh).flatMap((e) => e.flatMap((t) => t.target))
);
var Dl = { exports: {} }, Ag = Dl.exports, Nf;
function Pg() {
  return Nf || (Nf = 1, function(e, t) {
    (function(i, o) {
      e.exports = o();
    })(Ag, function() {
      var i = function(n, r) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
          s.__proto__ = u;
        } || function(s, u) {
          for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
        })(n, r);
      }, o = function() {
        return (o = Object.assign || function(n) {
          for (var r, s = 1, u = arguments.length; s < u; s++) for (var c in r = arguments[s]) Object.prototype.hasOwnProperty.call(r, c) && (n[c] = r[c]);
          return n;
        }).apply(this, arguments);
      };
      function a(n, r, s) {
        for (var u, c = 0, d = r.length; c < d; c++) !u && c in r || ((u = u || Array.prototype.slice.call(r, 0, c))[c] = r[c]);
        return n.concat(u || Array.prototype.slice.call(r));
      }
      var l = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : wg, f = Object.keys, p = Array.isArray;
      function m(n, r) {
        return typeof r != "object" || f(r).forEach(function(s) {
          n[s] = r[s];
        }), n;
      }
      typeof Promise > "u" || l.Promise || (l.Promise = Promise);
      var _ = Object.getPrototypeOf, v = {}.hasOwnProperty;
      function b(n, r) {
        return v.call(n, r);
      }
      function k(n, r) {
        typeof r == "function" && (r = r(_(n))), (typeof Reflect > "u" ? f : Reflect.ownKeys)(r).forEach(function(s) {
          D(n, s, r[s]);
        });
      }
      var R = Object.defineProperty;
      function D(n, r, s, u) {
        R(n, r, m(s && b(s, "get") && typeof s.get == "function" ? { get: s.get, set: s.set, configurable: !0 } : { value: s, configurable: !0, writable: !0 }, u));
      }
      function M(n) {
        return { from: function(r) {
          return n.prototype = Object.create(r.prototype), D(n.prototype, "constructor", n), { extend: k.bind(null, n.prototype) };
        } };
      }
      var W = Object.getOwnPropertyDescriptor, Q = [].slice;
      function $(n, r, s) {
        return Q.call(n, r, s);
      }
      function L(n, r) {
        return r(n);
      }
      function U(n) {
        if (!n) throw new Error("Assertion Failed");
      }
      function H(n) {
        l.setImmediate ? setImmediate(n) : setTimeout(n, 0);
      }
      function te(n, r) {
        if (typeof r == "string" && b(n, r)) return n[r];
        if (!r) return n;
        if (typeof r != "string") {
          for (var s = [], u = 0, c = r.length; u < c; ++u) {
            var d = te(n, r[u]);
            s.push(d);
          }
          return s;
        }
        var h = r.indexOf(".");
        if (h !== -1) {
          var y = n[r.substr(0, h)];
          return y == null ? void 0 : te(y, r.substr(h + 1));
        }
      }
      function J(n, r, s) {
        if (n && r !== void 0 && !("isFrozen" in Object && Object.isFrozen(n))) if (typeof r != "string" && "length" in r) {
          U(typeof s != "string" && "length" in s);
          for (var u = 0, c = r.length; u < c; ++u) J(n, r[u], s[u]);
        } else {
          var d, h, y = r.indexOf(".");
          y !== -1 ? (d = r.substr(0, y), (h = r.substr(y + 1)) === "" ? s === void 0 ? p(n) && !isNaN(parseInt(d)) ? n.splice(d, 1) : delete n[d] : n[d] = s : J(y = !(y = n[d]) || !b(n, d) ? n[d] = {} : y, h, s)) : s === void 0 ? p(n) && !isNaN(parseInt(r)) ? n.splice(r, 1) : delete n[r] : n[r] = s;
        }
      }
      function ce(n) {
        var r, s = {};
        for (r in n) b(n, r) && (s[r] = n[r]);
        return s;
      }
      var F = [].concat;
      function le(n) {
        return F.apply([], n);
      }
      var Be = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(le([8, 16, 32, 64].map(function(n) {
        return ["Int", "Uint", "Float"].map(function(r) {
          return r + n + "Array";
        });
      }))).filter(function(n) {
        return l[n];
      }), we = new Set(Be.map(function(n) {
        return l[n];
      })), ne = null;
      function _e(n) {
        return ne = /* @__PURE__ */ new WeakMap(), n = function r(s) {
          if (!s || typeof s != "object") return s;
          var u = ne.get(s);
          if (u) return u;
          if (p(s)) {
            u = [], ne.set(s, u);
            for (var c = 0, d = s.length; c < d; ++c) u.push(r(s[c]));
          } else if (we.has(s.constructor)) u = s;
          else {
            var h, y = _(s);
            for (h in u = y === Object.prototype ? {} : Object.create(y), ne.set(s, u), s) b(s, h) && (u[h] = r(s[h]));
          }
          return u;
        }(n), ne = null, n;
      }
      var Re = {}.toString;
      function ke(n) {
        return Re.call(n).slice(8, -1);
      }
      var me = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", he = typeof me == "symbol" ? function(n) {
        var r;
        return n != null && (r = n[me]) && r.apply(n);
      } : function() {
        return null;
      };
      function be(n, r) {
        return r = n.indexOf(r), 0 <= r && n.splice(r, 1), 0 <= r;
      }
      var je = {};
      function tt(n) {
        var r, s, u, c;
        if (arguments.length === 1) {
          if (p(n)) return n.slice();
          if (this === je && typeof n == "string") return [n];
          if (c = he(n)) {
            for (s = []; !(u = c.next()).done; ) s.push(u.value);
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
      var dt = typeof Symbol < "u" ? function(n) {
        return n[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Ne = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Et = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ne), vt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ft(n, r) {
        this.name = n, this.message = r;
      }
      function gn(n, r) {
        return n + ". Errors: " + Object.keys(r).map(function(s) {
          return r[s].toString();
        }).filter(function(s, u, c) {
          return c.indexOf(s) === u;
        }).join(`
`);
      }
      function Jt(n, r, s, u) {
        this.failures = r, this.failedKeys = u, this.successCount = s, this.message = gn(n, r);
      }
      function Ct(n, r) {
        this.name = "BulkError", this.failures = Object.keys(r).map(function(s) {
          return r[s];
        }), this.failuresByPos = r, this.message = gn(n, this.failures);
      }
      M(Ft).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), M(Jt).from(Ft), M(Ct).from(Ft);
      var P = Et.reduce(function(n, r) {
        return n[r] = r + "Error", n;
      }, {}), E = Ft, V = Et.reduce(function(n, r) {
        var s = r + "Error";
        function u(c, d) {
          this.name = s, c ? typeof c == "string" ? (this.message = "".concat(c).concat(d ? `
 ` + d : ""), this.inner = d || null) : typeof c == "object" && (this.message = "".concat(c.name, " ").concat(c.message), this.inner = c) : (this.message = vt[r] || s, this.inner = null);
        }
        return M(u).from(E), n[r] = u, n;
      }, {});
      V.Syntax = SyntaxError, V.Type = TypeError, V.Range = RangeError;
      var z = Ne.reduce(function(n, r) {
        return n[r + "Error"] = V[r], n;
      }, {}), Ke = Et.reduce(function(n, r) {
        return ["Syntax", "Type", "Range"].indexOf(r) === -1 && (n[r + "Error"] = V[r]), n;
      }, {});
      function Ce() {
      }
      function j(n) {
        return n;
      }
      function G(n, r) {
        return n == null || n === j ? r : function(s) {
          return r(n(s));
        };
      }
      function re(n, r) {
        return function() {
          n.apply(this, arguments), r.apply(this, arguments);
        };
      }
      function ge(n, r) {
        return n === Ce ? r : function() {
          var s = n.apply(this, arguments);
          s !== void 0 && (arguments[0] = s);
          var u = this.onsuccess, c = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var d = r.apply(this, arguments);
          return u && (this.onsuccess = this.onsuccess ? re(u, this.onsuccess) : u), c && (this.onerror = this.onerror ? re(c, this.onerror) : c), d !== void 0 ? d : s;
        };
      }
      function de(n, r) {
        return n === Ce ? r : function() {
          n.apply(this, arguments);
          var s = this.onsuccess, u = this.onerror;
          this.onsuccess = this.onerror = null, r.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? re(s, this.onsuccess) : s), u && (this.onerror = this.onerror ? re(u, this.onerror) : u);
        };
      }
      function pe(n, r) {
        return n === Ce ? r : function(s) {
          var u = n.apply(this, arguments);
          m(s, u);
          var c = this.onsuccess, d = this.onerror;
          return this.onsuccess = null, this.onerror = null, s = r.apply(this, arguments), c && (this.onsuccess = this.onsuccess ? re(c, this.onsuccess) : c), d && (this.onerror = this.onerror ? re(d, this.onerror) : d), u === void 0 ? s === void 0 ? void 0 : s : m(u, s);
        };
      }
      function Te(n, r) {
        return n === Ce ? r : function() {
          return r.apply(this, arguments) !== !1 && n.apply(this, arguments);
        };
      }
      function Se(n, r) {
        return n === Ce ? r : function() {
          var s = n.apply(this, arguments);
          if (s && typeof s.then == "function") {
            for (var u = this, c = arguments.length, d = new Array(c); c--; ) d[c] = arguments[c];
            return s.then(function() {
              return r.apply(u, d);
            });
          }
          return r.apply(this, arguments);
        };
      }
      Ke.ModifyError = Jt, Ke.DexieError = Ft, Ke.BulkError = Ct;
      var ye = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function ve(n) {
        ye = n;
      }
      var Me = {}, Ae = 100, Be = typeof Promise > "u" ? [] : function() {
        var n = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [n, _(n), n];
        var r = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [r, _(r), n];
      }(), Ne = Be[0], Et = Be[1], Be = Be[2], Et = Et && Et.then, He = Ne && Ne.constructor, it = !!Be, Je = function(n, r) {
        Pt.push([n, r]), ht && (queueMicrotask(Su), ht = !1);
      }, yt = !0, ht = !0, gt = [], Ot = [], bn = j, Mt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: Ce, pgp: !1, env: {}, finalize: Ce }, fe = Mt, Pt = [], Kt = 0, Nn = [];
      function se(n) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var r = this._PSD = fe;
        if (typeof n != "function") {
          if (n !== Me) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && vi(this, this._value));
        }
        this._state = null, this._value = null, ++r.ref, function s(u, c) {
          try {
            c(function(d) {
              if (u._state === null) {
                if (d === u) throw new TypeError("A promise cannot be resolved with itself.");
                var h = u._lib && _n();
                d && typeof d.then == "function" ? s(u, function(y, w) {
                  d instanceof se ? d._then(y, w) : d.then(y, w);
                }) : (u._state = !0, u._value = d, Wo(u)), h && wn();
              }
            }, vi.bind(null, u));
          } catch (d) {
            vi(u, d);
          }
        }(this, n);
      }
      var yi = { get: function() {
        var n = fe, r = vr;
        function s(u, c) {
          var d = this, h = !n.global && (n !== fe || r !== vr), y = h && !Vt(), w = new se(function(S, O) {
            gi(d, new Ho(zo(u, n, h, y), zo(c, n, h, y), S, O, n));
          });
          return this._consoleTask && (w._consoleTask = this._consoleTask), w;
        }
        return s.prototype = Me, s;
      }, set: function(n) {
        D(this, "then", n && n.prototype === Me ? yi : { get: function() {
          return n;
        }, set: yi.set });
      } };
      function Ho(n, r, s, u, c) {
        this.onFulfilled = typeof n == "function" ? n : null, this.onRejected = typeof r == "function" ? r : null, this.resolve = s, this.reject = u, this.psd = c;
      }
      function vi(n, r) {
        var s, u;
        Ot.push(r), n._state === null && (s = n._lib && _n(), r = bn(r), n._state = !1, n._value = r, u = n, gt.some(function(c) {
          return c._value === u._value;
        }) || gt.push(u), Wo(n), s && wn());
      }
      function Wo(n) {
        var r = n._listeners;
        n._listeners = [];
        for (var s = 0, u = r.length; s < u; ++s) gi(n, r[s]);
        var c = n._PSD;
        --c.ref || c.finalize(), Kt === 0 && (++Kt, Je(function() {
          --Kt == 0 && bi();
        }, []));
      }
      function gi(n, r) {
        if (n._state !== null) {
          var s = n._state ? r.onFulfilled : r.onRejected;
          if (s === null) return (n._state ? r.resolve : r.reject)(n._value);
          ++r.psd.ref, ++Kt, Je(Eu, [s, n, r]);
        } else n._listeners.push(r);
      }
      function Eu(n, r, s) {
        try {
          var u, c = r._value;
          !r._state && Ot.length && (Ot = []), u = ye && r._consoleTask ? r._consoleTask.run(function() {
            return n(c);
          }) : n(c), r._state || Ot.indexOf(c) !== -1 || function(d) {
            for (var h = gt.length; h; ) if (gt[--h]._value === d._value) return gt.splice(h, 1);
          }(r), s.resolve(u);
        } catch (d) {
          s.reject(d);
        } finally {
          --Kt == 0 && bi(), --s.psd.ref || s.psd.finalize();
        }
      }
      function Su() {
        rn(Mt, function() {
          _n() && wn();
        });
      }
      function _n() {
        var n = yt;
        return ht = yt = !1, n;
      }
      function wn() {
        var n, r, s;
        do
          for (; 0 < Pt.length; ) for (n = Pt, Pt = [], s = n.length, r = 0; r < s; ++r) {
            var u = n[r];
            u[0].apply(null, u[1]);
          }
        while (0 < Pt.length);
        ht = yt = !0;
      }
      function bi() {
        var n = gt;
        gt = [], n.forEach(function(u) {
          u._PSD.onunhandled.call(null, u._value, u);
        });
        for (var r = Nn.slice(0), s = r.length; s; ) r[--s]();
      }
      function hr(n) {
        return new se(Me, !1, n);
      }
      function $e(n, r) {
        var s = fe;
        return function() {
          var u = _n(), c = fe;
          try {
            return $t(s, !0), n.apply(this, arguments);
          } catch (d) {
            r && r(d);
          } finally {
            $t(c, !1), u && wn();
          }
        };
      }
      k(se.prototype, { then: yi, _then: function(n, r) {
        gi(this, new Ho(null, null, n, r, fe));
      }, catch: function(n) {
        if (arguments.length === 1) return this.then(null, n);
        var r = n, s = arguments[1];
        return typeof r == "function" ? this.then(null, function(u) {
          return (u instanceof r ? s : hr)(u);
        }) : this.then(null, function(u) {
          return (u && u.name === r ? s : hr)(u);
        });
      }, finally: function(n) {
        return this.then(function(r) {
          return se.resolve(n()).then(function() {
            return r;
          });
        }, function(r) {
          return se.resolve(n()).then(function() {
            return hr(r);
          });
        });
      }, timeout: function(n, r) {
        var s = this;
        return n < 1 / 0 ? new se(function(u, c) {
          var d = setTimeout(function() {
            return c(new V.Timeout(r));
          }, n);
          s.then(u, c).finally(clearTimeout.bind(null, d));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && D(se.prototype, Symbol.toStringTag, "Dexie.Promise"), Mt.env = Go(), k(se, { all: function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r, s) {
          n.length === 0 && r([]);
          var u = n.length;
          n.forEach(function(c, d) {
            return se.resolve(c).then(function(h) {
              n[d] = h, --u || r(n);
            }, s);
          });
        });
      }, resolve: function(n) {
        return n instanceof se ? n : n && typeof n.then == "function" ? new se(function(r, s) {
          n.then(r, s);
        }) : new se(Me, !0, n);
      }, reject: hr, race: function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r, s) {
          n.map(function(u) {
            return se.resolve(u).then(r, s);
          });
        });
      }, PSD: { get: function() {
        return fe;
      }, set: function(n) {
        return fe = n;
      } }, totalEchoes: { get: function() {
        return vr;
      } }, newPSD: Ut, usePSD: rn, scheduler: { get: function() {
        return Je;
      }, set: function(n) {
        Je = n;
      } }, rejectionMapper: { get: function() {
        return bn;
      }, set: function(n) {
        bn = n;
      } }, follow: function(n, r) {
        return new se(function(s, u) {
          return Ut(function(c, d) {
            var h = fe;
            h.unhandleds = [], h.onunhandled = d, h.finalize = re(function() {
              var y, w = this;
              y = function() {
                w.unhandleds.length === 0 ? c() : d(w.unhandleds[0]);
              }, Nn.push(function S() {
                y(), Nn.splice(Nn.indexOf(S), 1);
              }), ++Kt, Je(function() {
                --Kt == 0 && bi();
              }, []);
            }, h.finalize), n();
          }, r, s, u);
        });
      } }), He && (He.allSettled && D(se, "allSettled", function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r) {
          n.length === 0 && r([]);
          var s = n.length, u = new Array(s);
          n.forEach(function(c, d) {
            return se.resolve(c).then(function(h) {
              return u[d] = { status: "fulfilled", value: h };
            }, function(h) {
              return u[d] = { status: "rejected", reason: h };
            }).then(function() {
              return --s || r(u);
            });
          });
        });
      }), He.any && typeof AggregateError < "u" && D(se, "any", function() {
        var n = tt.apply(null, arguments).map(gr);
        return new se(function(r, s) {
          n.length === 0 && s(new AggregateError([]));
          var u = n.length, c = new Array(u);
          n.forEach(function(d, h) {
            return se.resolve(d).then(function(y) {
              return r(y);
            }, function(y) {
              c[h] = y, --u || s(new AggregateError(c));
            });
          });
        });
      }), He.withResolvers && (se.withResolvers = He.withResolvers));
      var Ze = { awaits: 0, echoes: 0, id: 0 }, Cu = 0, mr = [], yr = 0, vr = 0, Ou = 0;
      function Ut(n, r, s, u) {
        var c = fe, d = Object.create(c);
        return d.parent = c, d.ref = 0, d.global = !1, d.id = ++Ou, Mt.env, d.env = it ? { Promise: se, PromiseProp: { value: se, configurable: !0, writable: !0 }, all: se.all, race: se.race, allSettled: se.allSettled, any: se.any, resolve: se.resolve, reject: se.reject } : {}, r && m(d, r), ++c.ref, d.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, u = rn(d, n, s, u), d.ref === 0 && d.finalize(), u;
      }
      function xn() {
        return Ze.id || (Ze.id = ++Cu), ++Ze.awaits, Ze.echoes += Ae, Ze.id;
      }
      function Vt() {
        return !!Ze.awaits && (--Ze.awaits == 0 && (Ze.id = 0), Ze.echoes = Ze.awaits * Ae, !0);
      }
      function gr(n) {
        return Ze.echoes && n && n.constructor === He ? (xn(), n.then(function(r) {
          return Vt(), r;
        }, function(r) {
          return Vt(), ze(r);
        })) : n;
      }
      function Tu() {
        var n = mr[mr.length - 1];
        mr.pop(), $t(n, !1);
      }
      function $t(n, r) {
        var s, u = fe;
        (r ? !Ze.echoes || yr++ && n === fe : !yr || --yr && n === fe) || queueMicrotask(r ? (function(c) {
          ++vr, Ze.echoes && --Ze.echoes != 0 || (Ze.echoes = Ze.awaits = Ze.id = 0), mr.push(fe), $t(c, !0);
        }).bind(null, n) : Tu), n !== fe && (fe = n, u === Mt && (Mt.env = Go()), it && (s = Mt.env.Promise, r = n.env, (u.global || n.global) && (Object.defineProperty(l, "Promise", r.PromiseProp), s.all = r.all, s.race = r.race, s.resolve = r.resolve, s.reject = r.reject, r.allSettled && (s.allSettled = r.allSettled), r.any && (s.any = r.any))));
      }
      function Go() {
        var n = l.Promise;
        return it ? { Promise: n, PromiseProp: Object.getOwnPropertyDescriptor(l, "Promise"), all: n.all, race: n.race, allSettled: n.allSettled, any: n.any, resolve: n.resolve, reject: n.reject } : {};
      }
      function rn(n, r, s, u, c) {
        var d = fe;
        try {
          return $t(n, !0), r(s, u, c);
        } finally {
          $t(d, !1);
        }
      }
      function zo(n, r, s, u) {
        return typeof n != "function" ? n : function() {
          var c = fe;
          s && xn(), $t(r, !0);
          try {
            return n.apply(this, arguments);
          } finally {
            $t(c, !1), u && queueMicrotask(Vt);
          }
        };
      }
      function _i(n) {
        Promise === He && Ze.echoes === 0 ? yr === 0 ? n() : enqueueNativeMicroTask(n) : setTimeout(n, 0);
      }
      ("" + Et).indexOf("[native code]") === -1 && (xn = Vt = Ce);
      var ze = se.reject, on = "￿", jt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Yo = "String expected.", En = [], br = "__dbnames", wi = "readonly", xi = "readwrite";
      function sn(n, r) {
        return n ? r ? function() {
          return n.apply(this, arguments) && r.apply(this, arguments);
        } : n : r;
      }
      var Xo = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function _r(n) {
        return typeof n != "string" || /\./.test(n) ? function(r) {
          return r;
        } : function(r) {
          return r[n] === void 0 && n in r && delete (r = _e(r))[n], r;
        };
      }
      function Qo() {
        throw V.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Pe(n, r) {
        try {
          var s = Jo(n), u = Jo(r);
          if (s !== u) return s === "Array" ? 1 : u === "Array" ? -1 : s === "binary" ? 1 : u === "binary" ? -1 : s === "string" ? 1 : u === "string" ? -1 : s === "Date" ? 1 : u !== "Date" ? NaN : -1;
          switch (s) {
            case "number":
            case "Date":
            case "string":
              return r < n ? 1 : n < r ? -1 : 0;
            case "binary":
              return function(c, d) {
                for (var h = c.length, y = d.length, w = h < y ? h : y, S = 0; S < w; ++S) if (c[S] !== d[S]) return c[S] < d[S] ? -1 : 1;
                return h === y ? 0 : h < y ? -1 : 1;
              }(Zo(n), Zo(r));
            case "Array":
              return function(c, d) {
                for (var h = c.length, y = d.length, w = h < y ? h : y, S = 0; S < w; ++S) {
                  var O = Pe(c[S], d[S]);
                  if (O !== 0) return O;
                }
                return h === y ? 0 : h < y ? -1 : 1;
              }(n, r);
          }
        } catch {
        }
        return NaN;
      }
      function Jo(n) {
        var r = typeof n;
        return r != "object" ? r : ArrayBuffer.isView(n) ? "binary" : (n = ke(n), n === "ArrayBuffer" ? "binary" : n);
      }
      function Zo(n) {
        return n instanceof Uint8Array ? n : ArrayBuffer.isView(n) ? new Uint8Array(n.buffer, n.byteOffset, n.byteLength) : new Uint8Array(n);
      }
      function wr(n, r, s) {
        var u = n.schema.yProps;
        return u ? (r && 0 < s.numFailures && (r = r.filter(function(c, d) {
          return !s.failures[d];
        })), Promise.all(u.map(function(c) {
          return c = c.updatesTable, r ? n.db.table(c).where("k").anyOf(r).delete() : n.db.table(c).clear();
        })).then(function() {
          return s;
        })) : s;
      }
      var es = (Ue.prototype._trans = function(n, r, s) {
        var u = this._tx || fe.trans, c = this.name, d = ye && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(n === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(S, O, g) {
          if (!g.schema[c]) throw new V.NotFound("Table " + c + " not part of transaction");
          return r(g.idbtrans, g);
        }
        var y = _n();
        try {
          var w = u && u.db._novip === this.db._novip ? u === fe.trans ? u._promise(n, h, s) : Ut(function() {
            return u._promise(n, h, s);
          }, { trans: u, transless: fe.transless || fe }) : function S(O, g, I, x) {
            if (O.idbdb && (O._state.openComplete || fe.letThrough || O._vip)) {
              var C = O._createTransaction(g, I, O._dbSchema);
              try {
                C.create(), O._state.PR1398_maxLoop = 3;
              } catch (A) {
                return A.name === P.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                  return S(O, g, I, x);
                })) : ze(A);
              }
              return C._promise(g, function(A, T) {
                return Ut(function() {
                  return fe.trans = C, x(A, T, C);
                });
              }).then(function(A) {
                if (g === "readwrite") try {
                  C.idbtrans.commit();
                } catch {
                }
                return g === "readonly" ? A : C._completion.then(function() {
                  return A;
                });
              });
            }
            if (O._state.openComplete) return ze(new V.DatabaseClosed(O._state.dbOpenError));
            if (!O._state.isBeingOpened) {
              if (!O._state.autoOpen) return ze(new V.DatabaseClosed());
              O.open().catch(Ce);
            }
            return O._state.dbReadyPromise.then(function() {
              return S(O, g, I, x);
            });
          }(this.db, n, [this.name], h);
          return d && (w._consoleTask = d, w = w.catch(function(S) {
            return console.trace(S), ze(S);
          })), w;
        } finally {
          y && wn();
        }
      }, Ue.prototype.get = function(n, r) {
        var s = this;
        return n && n.constructor === Object ? this.where(n).first(r) : n == null ? ze(new V.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(u) {
          return s.core.get({ trans: u, key: n }).then(function(c) {
            return s.hook.reading.fire(c);
          });
        }).then(r);
      }, Ue.prototype.where = function(n) {
        if (typeof n == "string") return new this.db.WhereClause(this, n);
        if (p(n)) return new this.db.WhereClause(this, "[".concat(n.join("+"), "]"));
        var r = f(n);
        if (r.length === 1) return this.where(r[0]).equals(n[r[0]]);
        var s = this.schema.indexes.concat(this.schema.primKey).filter(function(y) {
          if (y.compound && r.every(function(S) {
            return 0 <= y.keyPath.indexOf(S);
          })) {
            for (var w = 0; w < r.length; ++w) if (r.indexOf(y.keyPath[w]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(y, w) {
          return y.keyPath.length - w.keyPath.length;
        })[0];
        if (s && this.db._maxKey !== on) {
          var d = s.keyPath.slice(0, r.length);
          return this.where(d).equals(d.map(function(w) {
            return n[w];
          }));
        }
        !s && ye && console.warn("The query ".concat(JSON.stringify(n), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(r.join("+"), "]"));
        var u = this.schema.idxByName;
        function c(y, w) {
          return Pe(y, w) === 0;
        }
        var h = r.reduce(function(g, w) {
          var S = g[0], O = g[1], g = u[w], I = n[w];
          return [S || g, S || !g ? sn(O, g && g.multi ? function(x) {
            return x = te(x, w), p(x) && x.some(function(C) {
              return c(I, C);
            });
          } : function(x) {
            return c(I, te(x, w));
          }) : O];
        }, [null, null]), d = h[0], h = h[1];
        return d ? this.where(d.name).equals(n[d.keyPath]).filter(h) : s ? this.filter(h) : this.where(r).equals("");
      }, Ue.prototype.filter = function(n) {
        return this.toCollection().and(n);
      }, Ue.prototype.count = function(n) {
        return this.toCollection().count(n);
      }, Ue.prototype.offset = function(n) {
        return this.toCollection().offset(n);
      }, Ue.prototype.limit = function(n) {
        return this.toCollection().limit(n);
      }, Ue.prototype.each = function(n) {
        return this.toCollection().each(n);
      }, Ue.prototype.toArray = function(n) {
        return this.toCollection().toArray(n);
      }, Ue.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ue.prototype.orderBy = function(n) {
        return new this.db.Collection(new this.db.WhereClause(this, p(n) ? "[".concat(n.join("+"), "]") : n));
      }, Ue.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ue.prototype.mapToClass = function(n) {
        var r, s = this.db, u = this.name;
        function c() {
          return r !== null && r.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = n).prototype instanceof Qo && (function(w, S) {
          if (typeof S != "function" && S !== null) throw new TypeError("Class extends value " + String(S) + " is not a constructor or null");
          function O() {
            this.constructor = w;
          }
          i(w, S), w.prototype = S === null ? Object.create(S) : (O.prototype = S.prototype, new O());
        }(c, r = n), Object.defineProperty(c.prototype, "db", { get: function() {
          return s;
        }, enumerable: !1, configurable: !0 }), c.prototype.table = function() {
          return u;
        }, n = c);
        for (var d = /* @__PURE__ */ new Set(), h = n.prototype; h; h = _(h)) Object.getOwnPropertyNames(h).forEach(function(w) {
          return d.add(w);
        });
        function y(w) {
          if (!w) return w;
          var S, O = Object.create(n.prototype);
          for (S in w) if (!d.has(S)) try {
            O[S] = w[S];
          } catch {
          }
          return O;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = y, this.hook("reading", y), n;
      }, Ue.prototype.defineClass = function() {
        return this.mapToClass(function(n) {
          m(this, n);
        });
      }, Ue.prototype.add = function(n, r) {
        var s = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = n;
        return d && c && (h = _r(d)(n)), this._trans("readwrite", function(y) {
          return s.core.mutate({ trans: y, type: "add", keys: r != null ? [r] : null, values: [h] });
        }).then(function(y) {
          return y.numFailures ? se.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            J(n, d, y);
          } catch {
          }
          return y;
        });
      }, Ue.prototype.update = function(n, r) {
        return typeof n != "object" || p(n) ? this.where(":id").equals(n).modify(r) : (n = te(n, this.schema.primKey.keyPath), n === void 0 ? ze(new V.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(n).modify(r));
      }, Ue.prototype.put = function(n, r) {
        var s = this, u = this.schema.primKey, c = u.auto, d = u.keyPath, h = n;
        return d && c && (h = _r(d)(n)), this._trans("readwrite", function(y) {
          return s.core.mutate({ trans: y, type: "put", values: [h], keys: r != null ? [r] : null });
        }).then(function(y) {
          return y.numFailures ? se.reject(y.failures[0]) : y.lastResult;
        }).then(function(y) {
          if (d) try {
            J(n, d, y);
          } catch {
          }
          return y;
        });
      }, Ue.prototype.delete = function(n) {
        var r = this;
        return this._trans("readwrite", function(s) {
          return r.core.mutate({ trans: s, type: "delete", keys: [n] }).then(function(u) {
            return wr(r, [n], u);
          }).then(function(u) {
            return u.numFailures ? se.reject(u.failures[0]) : void 0;
          });
        });
      }, Ue.prototype.clear = function() {
        var n = this;
        return this._trans("readwrite", function(r) {
          return n.core.mutate({ trans: r, type: "deleteRange", range: Xo }).then(function(s) {
            return wr(n, null, s);
          });
        }).then(function(r) {
          return r.numFailures ? se.reject(r.failures[0]) : void 0;
        });
      }, Ue.prototype.bulkGet = function(n) {
        var r = this;
        return this._trans("readonly", function(s) {
          return r.core.getMany({ keys: n, trans: s }).then(function(u) {
            return u.map(function(c) {
              return r.hook.reading.fire(c);
            });
          });
        });
      }, Ue.prototype.bulkAdd = function(n, r, s) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (s = s || (c ? void 0 : r)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var S = u.schema.primKey, y = S.auto, S = S.keyPath;
          if (S && c) throw new V.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== n.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var w = n.length, S = S && y ? n.map(_r(S)) : n;
          return u.core.mutate({ trans: h, type: "add", keys: c, values: S, wantResults: d }).then(function(C) {
            var g = C.numFailures, I = C.results, x = C.lastResult, C = C.failures;
            if (g === 0) return d ? I : x;
            throw new Ct("".concat(u.name, ".bulkAdd(): ").concat(g, " of ").concat(w, " operations failed"), C);
          });
        });
      }, Ue.prototype.bulkPut = function(n, r, s) {
        var u = this, c = Array.isArray(r) ? r : void 0, d = (s = s || (c ? void 0 : r)) ? s.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var S = u.schema.primKey, y = S.auto, S = S.keyPath;
          if (S && c) throw new V.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (c && c.length !== n.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var w = n.length, S = S && y ? n.map(_r(S)) : n;
          return u.core.mutate({ trans: h, type: "put", keys: c, values: S, wantResults: d }).then(function(C) {
            var g = C.numFailures, I = C.results, x = C.lastResult, C = C.failures;
            if (g === 0) return d ? I : x;
            throw new Ct("".concat(u.name, ".bulkPut(): ").concat(g, " of ").concat(w, " operations failed"), C);
          });
        });
      }, Ue.prototype.bulkUpdate = function(n) {
        var r = this, s = this.core, u = n.map(function(h) {
          return h.key;
        }), c = n.map(function(h) {
          return h.changes;
        }), d = [];
        return this._trans("readwrite", function(h) {
          return s.getMany({ trans: h, keys: u, cache: "clone" }).then(function(y) {
            var w = [], S = [];
            n.forEach(function(g, I) {
              var x = g.key, C = g.changes, A = y[I];
              if (A) {
                for (var T = 0, N = Object.keys(C); T < N.length; T++) {
                  var B = N[T], q = C[B];
                  if (B === r.schema.primKey.keyPath) {
                    if (Pe(q, x) !== 0) throw new V.Constraint("Cannot update primary key in bulkUpdate()");
                  } else J(A, B, q);
                }
                d.push(I), w.push(x), S.push(A);
              }
            });
            var O = w.length;
            return s.mutate({ trans: h, type: "put", keys: w, values: S, updates: { keys: u, changeSpecs: c } }).then(function(g) {
              var I = g.numFailures, x = g.failures;
              if (I === 0) return O;
              for (var C = 0, A = Object.keys(x); C < A.length; C++) {
                var T, N = A[C], B = d[Number(N)];
                B != null && (T = x[N], delete x[N], x[B] = T);
              }
              throw new Ct("".concat(r.name, ".bulkUpdate(): ").concat(I, " of ").concat(O, " operations failed"), x);
            });
          });
        });
      }, Ue.prototype.bulkDelete = function(n) {
        var r = this, s = n.length;
        return this._trans("readwrite", function(u) {
          return r.core.mutate({ trans: u, type: "delete", keys: n }).then(function(c) {
            return wr(r, n, c);
          });
        }).then(function(h) {
          var c = h.numFailures, d = h.lastResult, h = h.failures;
          if (c === 0) return d;
          throw new Ct("".concat(r.name, ".bulkDelete(): ").concat(c, " of ").concat(s, " operations failed"), h);
        });
      }, Ue);
      function Ue() {
      }
      function qn(n) {
        function r(h, y) {
          if (y) {
            for (var w = arguments.length, S = new Array(w - 1); --w; ) S[w - 1] = arguments[w];
            return s[h].subscribe.apply(null, S), n;
          }
          if (typeof h == "string") return s[h];
        }
        var s = {};
        r.addEventType = d;
        for (var u = 1, c = arguments.length; u < c; ++u) d(arguments[u]);
        return r;
        function d(h, y, w) {
          if (typeof h != "object") {
            var S;
            y = y || Te;
            var O = { subscribers: [], fire: w = w || Ce, subscribe: function(g) {
              O.subscribers.indexOf(g) === -1 && (O.subscribers.push(g), O.fire = y(O.fire, g));
            }, unsubscribe: function(g) {
              O.subscribers = O.subscribers.filter(function(I) {
                return I !== g;
              }), O.fire = O.subscribers.reduce(y, w);
            } };
            return s[h] = r[h] = O;
          }
          f(S = h).forEach(function(g) {
            var I = S[g];
            if (p(I)) d(g, S[g][0], S[g][1]);
            else {
              if (I !== "asap") throw new V.InvalidArgument("Invalid event config");
              var x = d(g, j, function() {
                for (var C = arguments.length, A = new Array(C); C--; ) A[C] = arguments[C];
                x.subscribers.forEach(function(T) {
                  H(function() {
                    T.apply(null, A);
                  });
                });
              });
            }
          });
        }
      }
      function Kn(n, r) {
        return M(r).from({ prototype: n }), r;
      }
      function Sn(n, r) {
        return !(n.filter || n.algorithm || n.or) && (r ? n.justLimit : !n.replayFilter);
      }
      function Ei(n, r) {
        n.filter = sn(n.filter, r);
      }
      function Si(n, r, s) {
        var u = n.replayFilter;
        n.replayFilter = u ? function() {
          return sn(u(), r());
        } : r, n.justLimit = s && !u;
      }
      function xr(n, r) {
        if (n.isPrimKey) return r.primaryKey;
        var s = r.getIndexByKeyPath(n.index);
        if (!s) throw new V.Schema("KeyPath " + n.index + " on object store " + r.name + " is not indexed");
        return s;
      }
      function ts(n, r, s) {
        var u = xr(n, r.schema);
        return r.openCursor({ trans: s, values: !n.keysOnly, reverse: n.dir === "prev", unique: !!n.unique, query: { index: u, range: n.range } });
      }
      function Er(n, r, s, u) {
        var c = n.replayFilter ? sn(n.filter, n.replayFilter()) : n.filter;
        if (n.or) {
          var d = {}, h = function(y, w, S) {
            var O, g;
            c && !c(w, S, function(I) {
              return w.stop(I);
            }, function(I) {
              return w.fail(I);
            }) || ((g = "" + (O = w.primaryKey)) == "[object ArrayBuffer]" && (g = "" + new Uint8Array(O)), b(d, g) || (d[g] = !0, r(y, w, S)));
          };
          return Promise.all([n.or._iterate(h, s), ns(ts(n, u, s), n.algorithm, h, !n.keysOnly && n.valueMapper)]);
        }
        return ns(ts(n, u, s), sn(n.algorithm, c), r, !n.keysOnly && n.valueMapper);
      }
      function ns(n, r, s, u) {
        var c = $e(u ? function(d, h, y) {
          return s(u(d), h, y);
        } : s);
        return n.then(function(d) {
          if (d) return d.start(function() {
            var h = function() {
              return d.continue();
            };
            r && !r(d, function(y) {
              return h = y;
            }, function(y) {
              d.stop(y), h = Ce;
            }, function(y) {
              d.fail(y), h = Ce;
            }) || c(d.value, d, function(y) {
              return h = y;
            }), h();
          });
        });
      }
      var Un = (rs.prototype.execute = function(n) {
        var r = this["@@propmod"];
        if (r.add !== void 0) {
          var s = r.add;
          if (p(s)) return a(a([], p(n) ? n : [], !0), s).sort();
          if (typeof s == "number") return (Number(n) || 0) + s;
          if (typeof s == "bigint") try {
            return BigInt(n) + s;
          } catch {
            return BigInt(0) + s;
          }
          throw new TypeError("Invalid term ".concat(s));
        }
        if (r.remove !== void 0) {
          var u = r.remove;
          if (p(u)) return p(n) ? n.filter(function(c) {
            return !u.includes(c);
          }).sort() : [];
          if (typeof u == "number") return Number(n) - u;
          if (typeof u == "bigint") try {
            return BigInt(n) - u;
          } catch {
            return BigInt(0) - u;
          }
          throw new TypeError("Invalid subtrahend ".concat(u));
        }
        return s = (s = r.replacePrefix) === null || s === void 0 ? void 0 : s[0], s && typeof n == "string" && n.startsWith(s) ? r.replacePrefix[1] + n.substring(s.length) : n;
      }, rs);
      function rs(n) {
        this["@@propmod"] = n;
      }
      var Au = (De.prototype._read = function(n, r) {
        var s = this._ctx;
        return s.error ? s.table._trans(null, ze.bind(null, s.error)) : s.table._trans("readonly", n).then(r);
      }, De.prototype._write = function(n) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, ze.bind(null, r.error)) : r.table._trans("readwrite", n, "locked");
      }, De.prototype._addAlgorithm = function(n) {
        var r = this._ctx;
        r.algorithm = sn(r.algorithm, n);
      }, De.prototype._iterate = function(n, r) {
        return Er(this._ctx, n, r, this._ctx.table.core);
      }, De.prototype.clone = function(n) {
        var r = Object.create(this.constructor.prototype), s = Object.create(this._ctx);
        return n && m(s, n), r._ctx = s, r;
      }, De.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, De.prototype.each = function(n) {
        var r = this._ctx;
        return this._read(function(s) {
          return Er(r, n, s, r.table.core);
        });
      }, De.prototype.count = function(n) {
        var r = this;
        return this._read(function(s) {
          var u = r._ctx, c = u.table.core;
          if (Sn(u, !0)) return c.count({ trans: s, query: { index: xr(u, c.schema), range: u.range } }).then(function(h) {
            return Math.min(h, u.limit);
          });
          var d = 0;
          return Er(u, function() {
            return ++d, !1;
          }, s, c).then(function() {
            return d;
          });
        }).then(n);
      }, De.prototype.sortBy = function(n, r) {
        var s = n.split(".").reverse(), u = s[0], c = s.length - 1;
        function d(w, S) {
          return S ? d(w[s[S]], S - 1) : w[u];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function y(w, S) {
          return Pe(d(w, c), d(S, c)) * h;
        }
        return this.toArray(function(w) {
          return w.sort(y);
        }).then(r);
      }, De.prototype.toArray = function(n) {
        var r = this;
        return this._read(function(s) {
          var u = r._ctx;
          if (u.dir === "next" && Sn(u, !0) && 0 < u.limit) {
            var c = u.valueMapper, d = xr(u, u.table.core.schema);
            return u.table.core.query({ trans: s, limit: u.limit, values: !0, query: { index: d, range: u.range } }).then(function(y) {
              return y = y.result, c ? y.map(c) : y;
            });
          }
          var h = [];
          return Er(u, function(y) {
            return h.push(y);
          }, s, u.table.core).then(function() {
            return h;
          });
        }, n);
      }, De.prototype.offset = function(n) {
        var r = this._ctx;
        return n <= 0 || (r.offset += n, Sn(r) ? Si(r, function() {
          var s = n;
          return function(u, c) {
            return s === 0 || (s === 1 ? --s : c(function() {
              u.advance(s), s = 0;
            }), !1);
          };
        }) : Si(r, function() {
          var s = n;
          return function() {
            return --s < 0;
          };
        })), this;
      }, De.prototype.limit = function(n) {
        return this._ctx.limit = Math.min(this._ctx.limit, n), Si(this._ctx, function() {
          var r = n;
          return function(s, u, c) {
            return --r <= 0 && u(c), 0 <= r;
          };
        }, !0), this;
      }, De.prototype.until = function(n, r) {
        return Ei(this._ctx, function(s, u, c) {
          return !n(s.value) || (u(c), r);
        }), this;
      }, De.prototype.first = function(n) {
        return this.limit(1).toArray(function(r) {
          return r[0];
        }).then(n);
      }, De.prototype.last = function(n) {
        return this.reverse().first(n);
      }, De.prototype.filter = function(n) {
        var r;
        return Ei(this._ctx, function(s) {
          return n(s.value);
        }), (r = this._ctx).isMatch = sn(r.isMatch, n), this;
      }, De.prototype.and = function(n) {
        return this.filter(n);
      }, De.prototype.or = function(n) {
        return new this.db.WhereClause(this._ctx.table, n, this);
      }, De.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, De.prototype.desc = function() {
        return this.reverse();
      }, De.prototype.eachKey = function(n) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(s, u) {
          n(u.key, u);
        });
      }, De.prototype.eachUniqueKey = function(n) {
        return this._ctx.unique = "unique", this.eachKey(n);
      }, De.prototype.eachPrimaryKey = function(n) {
        var r = this._ctx;
        return r.keysOnly = !r.isMatch, this.each(function(s, u) {
          n(u.primaryKey, u);
        });
      }, De.prototype.keys = function(n) {
        var r = this._ctx;
        r.keysOnly = !r.isMatch;
        var s = [];
        return this.each(function(u, c) {
          s.push(c.key);
        }).then(function() {
          return s;
        }).then(n);
      }, De.prototype.primaryKeys = function(n) {
        var r = this._ctx;
        if (r.dir === "next" && Sn(r, !0) && 0 < r.limit) return this._read(function(u) {
          var c = xr(r, r.table.core.schema);
          return r.table.core.query({ trans: u, values: !1, limit: r.limit, query: { index: c, range: r.range } });
        }).then(function(u) {
          return u.result;
        }).then(n);
        r.keysOnly = !r.isMatch;
        var s = [];
        return this.each(function(u, c) {
          s.push(c.primaryKey);
        }).then(function() {
          return s;
        }).then(n);
      }, De.prototype.uniqueKeys = function(n) {
        return this._ctx.unique = "unique", this.keys(n);
      }, De.prototype.firstKey = function(n) {
        return this.limit(1).keys(function(r) {
          return r[0];
        }).then(n);
      }, De.prototype.lastKey = function(n) {
        return this.reverse().firstKey(n);
      }, De.prototype.distinct = function() {
        var n = this._ctx, n = n.index && n.table.schema.idxByName[n.index];
        if (!n || !n.multi) return this;
        var r = {};
        return Ei(this._ctx, function(c) {
          var u = c.primaryKey.toString(), c = b(r, u);
          return r[u] = !0, !c;
        }), this;
      }, De.prototype.modify = function(n) {
        var r = this, s = this._ctx;
        return this._write(function(u) {
          var c, d, h;
          h = typeof n == "function" ? n : (c = f(n), d = c.length, function(N) {
            for (var B = !1, q = 0; q < d; ++q) {
              var K = c[q], Y = n[K], ee = te(N, K);
              Y instanceof Un ? (J(N, K, Y.execute(ee)), B = !0) : ee !== Y && (J(N, K, Y), B = !0);
            }
            return B;
          });
          var y = s.table.core, g = y.schema.primaryKey, w = g.outbound, S = g.extractKey, O = 200, g = r.db._options.modifyChunkSize;
          g && (O = typeof g == "object" ? g[y.name] || g["*"] || 200 : g);
          function I(N, K) {
            var q = K.failures, K = K.numFailures;
            C += N - K;
            for (var Y = 0, ee = f(q); Y < ee.length; Y++) {
              var X = ee[Y];
              x.push(q[X]);
            }
          }
          var x = [], C = 0, A = [], T = n === is;
          return r.clone().primaryKeys().then(function(N) {
            function B(K) {
              var Y = Math.min(O, N.length - K), ee = N.slice(K, K + Y);
              return (T ? Promise.resolve([]) : y.getMany({ trans: u, keys: ee, cache: "immutable" })).then(function(X) {
                var Z = [], oe = [], ie = w ? [] : null, ae = T ? ee : [];
                if (!T) for (var Oe = 0; Oe < Y; ++Oe) {
                  var Ie = X[Oe], Ee = { value: _e(Ie), primKey: N[K + Oe] };
                  h.call(Ee, Ee.value, Ee) !== !1 && (Ee.value == null ? ae.push(N[K + Oe]) : w || Pe(S(Ie), S(Ee.value)) === 0 ? (oe.push(Ee.value), w && ie.push(N[K + Oe])) : (ae.push(N[K + Oe]), Z.push(Ee.value)));
                }
                return Promise.resolve(0 < Z.length && y.mutate({ trans: u, type: "add", values: Z }).then(function(Ge) {
                  for (var xe in Ge.failures) ae.splice(parseInt(xe), 1);
                  I(Z.length, Ge);
                })).then(function() {
                  return (0 < oe.length || q && typeof n == "object") && y.mutate({ trans: u, type: "put", keys: ie, values: oe, criteria: q, changeSpec: typeof n != "function" && n, isAdditionalChunk: 0 < K }).then(function(Ge) {
                    return I(oe.length, Ge);
                  });
                }).then(function() {
                  return (0 < ae.length || q && T) && y.mutate({ trans: u, type: "delete", keys: ae, criteria: q, isAdditionalChunk: 0 < K }).then(function(Ge) {
                    return wr(s.table, ae, Ge);
                  }).then(function(Ge) {
                    return I(ae.length, Ge);
                  });
                }).then(function() {
                  return N.length > K + Y && B(K + O);
                });
              });
            }
            var q = Sn(s) && s.limit === 1 / 0 && (typeof n != "function" || T) && { index: s.index, range: s.range };
            return B(0).then(function() {
              if (0 < x.length) throw new Jt("Error modifying one or more objects", x, C, A);
              return N.length;
            });
          });
        });
      }, De.prototype.delete = function() {
        var n = this._ctx, r = n.range;
        return !Sn(n) || n.table.schema.yProps || !n.isPrimKey && r.type !== 3 ? this.modify(is) : this._write(function(s) {
          var u = n.table.core.schema.primaryKey, c = r;
          return n.table.core.count({ trans: s, query: { index: u, range: c } }).then(function(d) {
            return n.table.core.mutate({ trans: s, type: "deleteRange", range: c }).then(function(w) {
              var y = w.failures, w = w.numFailures;
              if (w) throw new Jt("Could not delete some values", Object.keys(y).map(function(S) {
                return y[S];
              }), d - w);
              return d - w;
            });
          });
        });
      }, De);
      function De() {
      }
      var is = function(n, r) {
        return r.value = null;
      };
      function Pu(n, r) {
        return n < r ? -1 : n === r ? 0 : 1;
      }
      function Iu(n, r) {
        return r < n ? -1 : n === r ? 0 : 1;
      }
      function bt(n, r, s) {
        return n = n instanceof ss ? new n.Collection(n) : n, n._ctx.error = new (s || TypeError)(r), n;
      }
      function Cn(n) {
        return new n.Collection(n, function() {
          return os("");
        }).limit(0);
      }
      function Sr(n, r, s, u) {
        var c, d, h, y, w, S, O, g = s.length;
        if (!s.every(function(C) {
          return typeof C == "string";
        })) return bt(n, Yo);
        function I(C) {
          c = C === "next" ? function(T) {
            return T.toUpperCase();
          } : function(T) {
            return T.toLowerCase();
          }, d = C === "next" ? function(T) {
            return T.toLowerCase();
          } : function(T) {
            return T.toUpperCase();
          }, h = C === "next" ? Pu : Iu;
          var A = s.map(function(T) {
            return { lower: d(T), upper: c(T) };
          }).sort(function(T, N) {
            return h(T.lower, N.lower);
          });
          y = A.map(function(T) {
            return T.upper;
          }), w = A.map(function(T) {
            return T.lower;
          }), O = (S = C) === "next" ? "" : u;
        }
        I("next"), n = new n.Collection(n, function() {
          return Ht(y[0], w[g - 1] + u);
        }), n._ondirectionchange = function(C) {
          I(C);
        };
        var x = 0;
        return n._addAlgorithm(function(C, A, T) {
          var N = C.key;
          if (typeof N != "string") return !1;
          var B = d(N);
          if (r(B, w, x)) return !0;
          for (var q = null, K = x; K < g; ++K) {
            var Y = function(ee, X, Z, oe, ie, ae) {
              for (var Oe = Math.min(ee.length, oe.length), Ie = -1, Ee = 0; Ee < Oe; ++Ee) {
                var Ge = X[Ee];
                if (Ge !== oe[Ee]) return ie(ee[Ee], Z[Ee]) < 0 ? ee.substr(0, Ee) + Z[Ee] + Z.substr(Ee + 1) : ie(ee[Ee], oe[Ee]) < 0 ? ee.substr(0, Ee) + oe[Ee] + Z.substr(Ee + 1) : 0 <= Ie ? ee.substr(0, Ie) + X[Ie] + Z.substr(Ie + 1) : null;
                ie(ee[Ee], Ge) < 0 && (Ie = Ee);
              }
              return Oe < oe.length && ae === "next" ? ee + Z.substr(ee.length) : Oe < ee.length && ae === "prev" ? ee.substr(0, Z.length) : Ie < 0 ? null : ee.substr(0, Ie) + oe[Ie] + Z.substr(Ie + 1);
            }(N, B, y[K], w[K], h, S);
            Y === null && q === null ? x = K + 1 : (q === null || 0 < h(q, Y)) && (q = Y);
          }
          return A(q !== null ? function() {
            C.continue(q + O);
          } : T), !1;
        }), n;
      }
      function Ht(n, r, s, u) {
        return { type: 2, lower: n, upper: r, lowerOpen: s, upperOpen: u };
      }
      function os(n) {
        return { type: 1, lower: n, upper: n };
      }
      var ss = (Object.defineProperty(et.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), et.prototype.between = function(n, r, s, u) {
        s = s !== !1, u = u === !0;
        try {
          return 0 < this._cmp(n, r) || this._cmp(n, r) === 0 && (s || u) && (!s || !u) ? Cn(this) : new this.Collection(this, function() {
            return Ht(n, r, !s, !u);
          });
        } catch {
          return bt(this, jt);
        }
      }, et.prototype.equals = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return os(n);
        });
      }, et.prototype.above = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(n, void 0, !0);
        });
      }, et.prototype.aboveOrEqual = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(n, void 0, !1);
        });
      }, et.prototype.below = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(void 0, n, !1, !0);
        });
      }, et.prototype.belowOrEqual = function(n) {
        return n == null ? bt(this, jt) : new this.Collection(this, function() {
          return Ht(void 0, n);
        });
      }, et.prototype.startsWith = function(n) {
        return typeof n != "string" ? bt(this, Yo) : this.between(n, n + on, !0, !0);
      }, et.prototype.startsWithIgnoreCase = function(n) {
        return n === "" ? this.startsWith(n) : Sr(this, function(r, s) {
          return r.indexOf(s[0]) === 0;
        }, [n], on);
      }, et.prototype.equalsIgnoreCase = function(n) {
        return Sr(this, function(r, s) {
          return r === s[0];
        }, [n], "");
      }, et.prototype.anyOfIgnoreCase = function() {
        var n = tt.apply(je, arguments);
        return n.length === 0 ? Cn(this) : Sr(this, function(r, s) {
          return s.indexOf(r) !== -1;
        }, n, "");
      }, et.prototype.startsWithAnyOfIgnoreCase = function() {
        var n = tt.apply(je, arguments);
        return n.length === 0 ? Cn(this) : Sr(this, function(r, s) {
          return s.some(function(u) {
            return r.indexOf(u) === 0;
          });
        }, n, on);
      }, et.prototype.anyOf = function() {
        var n = this, r = tt.apply(je, arguments), s = this._cmp;
        try {
          r.sort(s);
        } catch {
          return bt(this, jt);
        }
        if (r.length === 0) return Cn(this);
        var u = new this.Collection(this, function() {
          return Ht(r[0], r[r.length - 1]);
        });
        u._ondirectionchange = function(d) {
          s = d === "next" ? n._ascending : n._descending, r.sort(s);
        };
        var c = 0;
        return u._addAlgorithm(function(d, h, y) {
          for (var w = d.key; 0 < s(w, r[c]); ) if (++c === r.length) return h(y), !1;
          return s(w, r[c]) === 0 || (h(function() {
            d.continue(r[c]);
          }), !1);
        }), u;
      }, et.prototype.notEqual = function(n) {
        return this.inAnyRange([[-1 / 0, n], [n, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, et.prototype.noneOf = function() {
        var n = tt.apply(je, arguments);
        if (n.length === 0) return new this.Collection(this);
        try {
          n.sort(this._ascending);
        } catch {
          return bt(this, jt);
        }
        var r = n.reduce(function(s, u) {
          return s ? s.concat([[s[s.length - 1][1], u]]) : [[-1 / 0, u]];
        }, null);
        return r.push([n[n.length - 1], this.db._maxKey]), this.inAnyRange(r, { includeLowers: !1, includeUppers: !1 });
      }, et.prototype.inAnyRange = function(N, r) {
        var s = this, u = this._cmp, c = this._ascending, d = this._descending, h = this._min, y = this._max;
        if (N.length === 0) return Cn(this);
        if (!N.every(function(B) {
          return B[0] !== void 0 && B[1] !== void 0 && c(B[0], B[1]) <= 0;
        })) return bt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", V.InvalidArgument);
        var w = !r || r.includeLowers !== !1, S = r && r.includeUppers === !0, O, g = c;
        function I(B, q) {
          return g(B[0], q[0]);
        }
        try {
          (O = N.reduce(function(B, q) {
            for (var K = 0, Y = B.length; K < Y; ++K) {
              var ee = B[K];
              if (u(q[0], ee[1]) < 0 && 0 < u(q[1], ee[0])) {
                ee[0] = h(ee[0], q[0]), ee[1] = y(ee[1], q[1]);
                break;
              }
            }
            return K === Y && B.push(q), B;
          }, [])).sort(I);
        } catch {
          return bt(this, jt);
        }
        var x = 0, C = S ? function(B) {
          return 0 < c(B, O[x][1]);
        } : function(B) {
          return 0 <= c(B, O[x][1]);
        }, A = w ? function(B) {
          return 0 < d(B, O[x][0]);
        } : function(B) {
          return 0 <= d(B, O[x][0]);
        }, T = C, N = new this.Collection(this, function() {
          return Ht(O[0][0], O[O.length - 1][1], !w, !S);
        });
        return N._ondirectionchange = function(B) {
          g = B === "next" ? (T = C, c) : (T = A, d), O.sort(I);
        }, N._addAlgorithm(function(B, q, K) {
          for (var Y, ee = B.key; T(ee); ) if (++x === O.length) return q(K), !1;
          return !C(Y = ee) && !A(Y) || (s._cmp(ee, O[x][1]) === 0 || s._cmp(ee, O[x][0]) === 0 || q(function() {
            g === c ? B.continue(O[x][0]) : B.continue(O[x][1]);
          }), !1);
        }), N;
      }, et.prototype.startsWithAnyOf = function() {
        var n = tt.apply(je, arguments);
        return n.every(function(r) {
          return typeof r == "string";
        }) ? n.length === 0 ? Cn(this) : this.inAnyRange(n.map(function(r) {
          return [r, r + on];
        })) : bt(this, "startsWithAnyOf() only works with strings");
      }, et);
      function et() {
      }
      function kt(n) {
        return $e(function(r) {
          return Vn(r), n(r.target.error), !1;
        });
      }
      function Vn(n) {
        n.stopPropagation && n.stopPropagation(), n.preventDefault && n.preventDefault();
      }
      var $n = "storagemutated", Ci = "x-storagemutated-1", Wt = qn(null, $n), Nu = (Dt.prototype._lock = function() {
        return U(!fe.global), ++this._reculock, this._reculock !== 1 || fe.global || (fe.lockOwnerFor = this), this;
      }, Dt.prototype._unlock = function() {
        if (U(!fe.global), --this._reculock == 0) for (fe.global || (fe.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var n = this._blockedFuncs.shift();
          try {
            rn(n[1], n[0]);
          } catch {
          }
        }
        return this;
      }, Dt.prototype._locked = function() {
        return this._reculock && fe.lockOwnerFor !== this;
      }, Dt.prototype.create = function(n) {
        var r = this;
        if (!this.mode) return this;
        var s = this.db.idbdb, u = this.db._state.dbOpenError;
        if (U(!this.idbtrans), !n && !s) switch (u && u.name) {
          case "DatabaseClosedError":
            throw new V.DatabaseClosed(u);
          case "MissingAPIError":
            throw new V.MissingAPI(u.message, u);
          default:
            throw new V.OpenFailed(u);
        }
        if (!this.active) throw new V.TransactionInactive();
        return U(this._completion._state === null), (n = this.idbtrans = n || (this.db.core || s).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = $e(function(c) {
          Vn(c), r._reject(n.error);
        }), n.onabort = $e(function(c) {
          Vn(c), r.active && r._reject(new V.Abort(n.error)), r.active = !1, r.on("abort").fire(c);
        }), n.oncomplete = $e(function() {
          r.active = !1, r._resolve(), "mutatedParts" in n && Wt.storagemutated.fire(n.mutatedParts);
        }), this;
      }, Dt.prototype._promise = function(n, r, s) {
        var u = this;
        if (n === "readwrite" && this.mode !== "readwrite") return ze(new V.ReadOnly("Transaction is readonly"));
        if (!this.active) return ze(new V.TransactionInactive());
        if (this._locked()) return new se(function(d, h) {
          u._blockedFuncs.push([function() {
            u._promise(n, r, s).then(d, h);
          }, fe]);
        });
        if (s) return Ut(function() {
          var d = new se(function(h, y) {
            u._lock();
            var w = r(h, y, u);
            w && w.then && w.then(h, y);
          });
          return d.finally(function() {
            return u._unlock();
          }), d._lib = !0, d;
        });
        var c = new se(function(d, h) {
          var y = r(d, h, u);
          y && y.then && y.then(d, h);
        });
        return c._lib = !0, c;
      }, Dt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Dt.prototype.waitFor = function(n) {
        var r, s = this._root(), u = se.resolve(n);
        s._waitingFor ? s._waitingFor = s._waitingFor.then(function() {
          return u;
        }) : (s._waitingFor = u, s._waitingQueue = [], r = s.idbtrans.objectStore(s.storeNames[0]), function d() {
          for (++s._spinCount; s._waitingQueue.length; ) s._waitingQueue.shift()();
          s._waitingFor && (r.get(-1 / 0).onsuccess = d);
        }());
        var c = s._waitingFor;
        return new se(function(d, h) {
          u.then(function(y) {
            return s._waitingQueue.push($e(d.bind(null, y)));
          }, function(y) {
            return s._waitingQueue.push($e(h.bind(null, y)));
          }).finally(function() {
            s._waitingFor === c && (s._waitingFor = null);
          });
        });
      }, Dt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new V.Abort()));
      }, Dt.prototype.table = function(n) {
        var r = this._memoizedTables || (this._memoizedTables = {});
        if (b(r, n)) return r[n];
        var s = this.schema[n];
        if (!s) throw new V.NotFound("Table " + n + " not part of transaction");
        return s = new this.db.Table(n, s, this), s.core = this.db.core.table(n), r[n] = s;
      }, Dt);
      function Dt() {
      }
      function Oi(n, r, s, u, c, d, h, y) {
        return { name: n, keyPath: r, unique: s, multi: u, auto: c, compound: d, src: (s && !h ? "&" : "") + (u ? "*" : "") + (c ? "++" : "") + as(r), type: y };
      }
      function as(n) {
        return typeof n == "string" ? n : n ? "[" + [].join.call(n, "+") + "]" : "";
      }
      function Ti(n, r, s) {
        return { name: n, primKey: r, indexes: s, mappedClass: null, idxByName: (u = function(c) {
          return [c.name, c];
        }, s.reduce(function(c, d, h) {
          return h = u(d, h), h && (c[h[0]] = h[1]), c;
        }, {})) };
        var u;
      }
      var Hn = function(n) {
        try {
          return n.only([[]]), Hn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Hn = function() {
            return on;
          }, on;
        }
      };
      function Ai(n) {
        return n == null ? function() {
        } : typeof n == "string" ? (r = n).split(".").length === 1 ? function(s) {
          return s[r];
        } : function(s) {
          return te(s, r);
        } : function(s) {
          return te(s, n);
        };
        var r;
      }
      function us(n) {
        return [].slice.call(n);
      }
      var Ru = 0;
      function Wn(n) {
        return n == null ? ":id" : typeof n == "string" ? n : "[".concat(n.join("+"), "]");
      }
      function ku(n, r, w) {
        function u(T) {
          if (T.type === 3) return null;
          if (T.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var x = T.lower, C = T.upper, A = T.lowerOpen, T = T.upperOpen;
          return x === void 0 ? C === void 0 ? null : r.upperBound(C, !!T) : C === void 0 ? r.lowerBound(x, !!A) : r.bound(x, C, !!A, !!T);
        }
        function c(I) {
          var x, C = I.name;
          return { name: C, schema: I, mutate: function(A) {
            var T = A.trans, N = A.type, B = A.keys, q = A.values, K = A.range;
            return new Promise(function(Y, ee) {
              Y = $e(Y);
              var X = T.objectStore(C), Z = X.keyPath == null, oe = N === "put" || N === "add";
              if (!oe && N !== "delete" && N !== "deleteRange") throw new Error("Invalid operation type: " + N);
              var ie, ae = (B || q || { length: 1 }).length;
              if (B && q && B.length !== q.length) throw new Error("Given keys array must have same length as given values array.");
              if (ae === 0) return Y({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function Oe(lt) {
                ++Ge, Vn(lt);
              }
              var Ie = [], Ee = [], Ge = 0;
              if (N === "deleteRange") {
                if (K.type === 4) return Y({ numFailures: Ge, failures: Ee, results: [], lastResult: void 0 });
                K.type === 3 ? Ie.push(ie = X.clear()) : Ie.push(ie = X.delete(u(K)));
              } else {
                var Z = oe ? Z ? [q, B] : [q, null] : [B, null], xe = Z[0], at = Z[1];
                if (oe) for (var ut = 0; ut < ae; ++ut) Ie.push(ie = at && at[ut] !== void 0 ? X[N](xe[ut], at[ut]) : X[N](xe[ut])), ie.onerror = Oe;
                else for (ut = 0; ut < ae; ++ut) Ie.push(ie = X[N](xe[ut])), ie.onerror = Oe;
              }
              function Mr(lt) {
                lt = lt.target.result, Ie.forEach(function(ln, Wi) {
                  return ln.error != null && (Ee[Wi] = ln.error);
                }), Y({ numFailures: Ge, failures: Ee, results: N === "delete" ? B : Ie.map(function(ln) {
                  return ln.result;
                }), lastResult: lt });
              }
              ie.onerror = function(lt) {
                Oe(lt), Mr(lt);
              }, ie.onsuccess = Mr;
            });
          }, getMany: function(A) {
            var T = A.trans, N = A.keys;
            return new Promise(function(B, q) {
              B = $e(B);
              for (var K, Y = T.objectStore(C), ee = N.length, X = new Array(ee), Z = 0, oe = 0, ie = function(Ie) {
                Ie = Ie.target, X[Ie._pos] = Ie.result, ++oe === Z && B(X);
              }, ae = kt(q), Oe = 0; Oe < ee; ++Oe) N[Oe] != null && ((K = Y.get(N[Oe]))._pos = Oe, K.onsuccess = ie, K.onerror = ae, ++Z);
              Z === 0 && B(X);
            });
          }, get: function(A) {
            var T = A.trans, N = A.key;
            return new Promise(function(B, q) {
              B = $e(B);
              var K = T.objectStore(C).get(N);
              K.onsuccess = function(Y) {
                return B(Y.target.result);
              }, K.onerror = kt(q);
            });
          }, query: (x = S, function(A) {
            return new Promise(function(T, N) {
              T = $e(T);
              var B, q, K, Z = A.trans, Y = A.values, ee = A.limit, ie = A.query, X = ee === 1 / 0 ? void 0 : ee, oe = ie.index, ie = ie.range, Z = Z.objectStore(C), oe = oe.isPrimaryKey ? Z : Z.index(oe.name), ie = u(ie);
              if (ee === 0) return T({ result: [] });
              x ? ((X = Y ? oe.getAll(ie, X) : oe.getAllKeys(ie, X)).onsuccess = function(ae) {
                return T({ result: ae.target.result });
              }, X.onerror = kt(N)) : (B = 0, q = !Y && "openKeyCursor" in oe ? oe.openKeyCursor(ie) : oe.openCursor(ie), K = [], q.onsuccess = function(ae) {
                var Oe = q.result;
                return Oe ? (K.push(Y ? Oe.value : Oe.primaryKey), ++B === ee ? T({ result: K }) : void Oe.continue()) : T({ result: K });
              }, q.onerror = kt(N));
            });
          }), openCursor: function(A) {
            var T = A.trans, N = A.values, B = A.query, q = A.reverse, K = A.unique;
            return new Promise(function(Y, ee) {
              Y = $e(Y);
              var oe = B.index, X = B.range, Z = T.objectStore(C), Z = oe.isPrimaryKey ? Z : Z.index(oe.name), oe = q ? K ? "prevunique" : "prev" : K ? "nextunique" : "next", ie = !N && "openKeyCursor" in Z ? Z.openKeyCursor(u(X), oe) : Z.openCursor(u(X), oe);
              ie.onerror = kt(ee), ie.onsuccess = $e(function(ae) {
                var Oe, Ie, Ee, Ge, xe = ie.result;
                xe ? (xe.___id = ++Ru, xe.done = !1, Oe = xe.continue.bind(xe), Ie = (Ie = xe.continuePrimaryKey) && Ie.bind(xe), Ee = xe.advance.bind(xe), Ge = function() {
                  throw new Error("Cursor not stopped");
                }, xe.trans = T, xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = function() {
                  throw new Error("Cursor not started");
                }, xe.fail = $e(ee), xe.next = function() {
                  var at = this, ut = 1;
                  return this.start(function() {
                    return ut-- ? at.continue() : at.stop();
                  }).then(function() {
                    return at;
                  });
                }, xe.start = function(at) {
                  function ut() {
                    if (ie.result) try {
                      at();
                    } catch (lt) {
                      xe.fail(lt);
                    }
                    else xe.done = !0, xe.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, xe.stop();
                  }
                  var Mr = new Promise(function(lt, ln) {
                    lt = $e(lt), ie.onerror = kt(ln), xe.fail = ln, xe.stop = function(Wi) {
                      xe.stop = xe.continue = xe.continuePrimaryKey = xe.advance = Ge, lt(Wi);
                    };
                  });
                  return ie.onsuccess = $e(function(lt) {
                    ie.onsuccess = ut, ut();
                  }), xe.continue = Oe, xe.continuePrimaryKey = Ie, xe.advance = Ee, ut(), Mr;
                }, Y(xe)) : Y(null);
              }, ee);
            });
          }, count: function(A) {
            var T = A.query, N = A.trans, B = T.index, q = T.range;
            return new Promise(function(K, Y) {
              var ee = N.objectStore(C), X = B.isPrimaryKey ? ee : ee.index(B.name), ee = u(q), X = ee ? X.count(ee) : X.count();
              X.onsuccess = $e(function(Z) {
                return K(Z.target.result);
              }), X.onerror = kt(Y);
            });
          } };
        }
        var d, h, y, O = (h = w, y = us((d = n).objectStoreNames), { schema: { name: d.name, tables: y.map(function(I) {
          return h.objectStore(I);
        }).map(function(I) {
          var x = I.keyPath, T = I.autoIncrement, C = p(x), A = {}, T = { name: I.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: x == null, compound: C, keyPath: x, autoIncrement: T, unique: !0, extractKey: Ai(x) }, indexes: us(I.indexNames).map(function(N) {
            return I.index(N);
          }).map(function(K) {
            var B = K.name, q = K.unique, Y = K.multiEntry, K = K.keyPath, Y = { name: B, compound: p(K), keyPath: K, unique: q, multiEntry: Y, extractKey: Ai(K) };
            return A[Wn(K)] = Y;
          }), getIndexByKeyPath: function(N) {
            return A[Wn(N)];
          } };
          return A[":id"] = T.primaryKey, x != null && (A[Wn(x)] = T.primaryKey), T;
        }) }, hasGetAll: 0 < y.length && "getAll" in h.objectStore(y[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), w = O.schema, S = O.hasGetAll, O = w.tables.map(c), g = {};
        return O.forEach(function(I) {
          return g[I.name] = I;
        }), { stack: "dbcore", transaction: n.transaction.bind(n), table: function(I) {
          if (!g[I]) throw new Error("Table '".concat(I, "' not found"));
          return g[I];
        }, MIN_KEY: -1 / 0, MAX_KEY: Hn(r), schema: w };
      }
      function Du(n, r, s, u) {
        var c = s.IDBKeyRange;
        return s.indexedDB, { dbcore: (u = ku(r, c, u), n.dbcore.reduce(function(d, h) {
          return h = h.create, o(o({}, d), h(d));
        }, u)) };
      }
      function Cr(n, u) {
        var s = u.db, u = Du(n._middlewares, s, n._deps, u);
        n.core = u.dbcore, n.tables.forEach(function(c) {
          var d = c.name;
          n.core.schema.tables.some(function(h) {
            return h.name === d;
          }) && (c.core = n.core.table(d), n[d] instanceof n.Table && (n[d].core = c.core));
        });
      }
      function Or(n, r, s, u) {
        s.forEach(function(c) {
          var d = u[c];
          r.forEach(function(h) {
            var y = function w(S, O) {
              return W(S, O) || (S = _(S)) && w(S, O);
            }(h, c);
            (!y || "value" in y && y.value === void 0) && (h === n.Transaction.prototype || h instanceof n.Transaction ? D(h, c, { get: function() {
              return this.table(c);
            }, set: function(w) {
              R(this, c, { value: w, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[c] = new n.Table(c, d));
          });
        });
      }
      function Pi(n, r) {
        r.forEach(function(s) {
          for (var u in s) s[u] instanceof n.Table && delete s[u];
        });
      }
      function Fu(n, r) {
        return n._cfg.version - r._cfg.version;
      }
      function Mu(n, r, s, u) {
        var c = n._dbSchema;
        s.objectStoreNames.contains("$meta") && !c.$meta && (c.$meta = Ti("$meta", cs("")[0], []), n._storeNames.push("$meta"));
        var d = n._createTransaction("readwrite", n._storeNames, c);
        d.create(s), d._completion.catch(u);
        var h = d._reject.bind(d), y = fe.transless || fe;
        Ut(function() {
          return fe.trans = d, fe.transless = y, r !== 0 ? (Cr(n, s), S = r, ((w = d).storeNames.includes("$meta") ? w.table("$meta").get("version").then(function(O) {
            return O ?? S;
          }) : se.resolve(S)).then(function(O) {
            return I = O, x = d, C = s, A = [], O = (g = n)._versions, T = g._dbSchema = Ar(0, g.idbdb, C), (O = O.filter(function(N) {
              return N._cfg.version >= I;
            })).length !== 0 ? (O.forEach(function(N) {
              A.push(function() {
                var B = T, q = N._cfg.dbschema;
                Pr(g, B, C), Pr(g, q, C), T = g._dbSchema = q;
                var K = Ii(B, q);
                K.add.forEach(function(oe) {
                  Ni(C, oe[0], oe[1].primKey, oe[1].indexes);
                }), K.change.forEach(function(oe) {
                  if (oe.recreate) throw new V.Upgrade("Not yet support for changing primary key");
                  var ie = C.objectStore(oe.name);
                  oe.add.forEach(function(ae) {
                    return Tr(ie, ae);
                  }), oe.change.forEach(function(ae) {
                    ie.deleteIndex(ae.name), Tr(ie, ae);
                  }), oe.del.forEach(function(ae) {
                    return ie.deleteIndex(ae);
                  });
                });
                var Y = N._cfg.contentUpgrade;
                if (Y && N._cfg.version > I) {
                  Cr(g, C), x._memoizedTables = {};
                  var ee = ce(q);
                  K.del.forEach(function(oe) {
                    ee[oe] = B[oe];
                  }), Pi(g, [g.Transaction.prototype]), Or(g, [g.Transaction.prototype], f(ee), ee), x.schema = ee;
                  var X, Z = dt(Y);
                  return Z && xn(), K = se.follow(function() {
                    var oe;
                    (X = Y(x)) && Z && (oe = Vt.bind(null, null), X.then(oe, oe));
                  }), X && typeof X.then == "function" ? se.resolve(X) : K.then(function() {
                    return X;
                  });
                }
              }), A.push(function(B) {
                var q, K, Y = N._cfg.dbschema;
                q = Y, K = B, [].slice.call(K.db.objectStoreNames).forEach(function(ee) {
                  return q[ee] == null && K.db.deleteObjectStore(ee);
                }), Pi(g, [g.Transaction.prototype]), Or(g, [g.Transaction.prototype], g._storeNames, g._dbSchema), x.schema = g._dbSchema;
              }), A.push(function(B) {
                g.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(g.idbdb.version / 10) === N._cfg.version ? (g.idbdb.deleteObjectStore("$meta"), delete g._dbSchema.$meta, g._storeNames = g._storeNames.filter(function(q) {
                  return q !== "$meta";
                })) : B.objectStore("$meta").put(N._cfg.version, "version"));
              });
            }), function N() {
              return A.length ? se.resolve(A.shift()(x.idbtrans)).then(N) : se.resolve();
            }().then(function() {
              ls(T, C);
            })) : se.resolve();
            var g, I, x, C, A, T;
          }).catch(h)) : (f(c).forEach(function(O) {
            Ni(s, O, c[O].primKey, c[O].indexes);
          }), Cr(n, s), void se.follow(function() {
            return n.on.populate.fire(d);
          }).catch(h));
          var w, S;
        });
      }
      function Bu(n, r) {
        ls(n._dbSchema, r), r.db.version % 10 != 0 || r.objectStoreNames.contains("$meta") || r.db.createObjectStore("$meta").add(Math.ceil(r.db.version / 10 - 1), "version");
        var s = Ar(0, n.idbdb, r);
        Pr(n, n._dbSchema, r);
        for (var u = 0, c = Ii(s, n._dbSchema).change; u < c.length; u++) {
          var d = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var y = r.objectStore(h.name);
            h.add.forEach(function(w) {
              ye && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(w.src)), Tr(y, w);
            });
          }(c[u]);
          if (typeof d == "object") return d.value;
        }
      }
      function Ii(n, r) {
        var s, u = { del: [], add: [], change: [] };
        for (s in n) r[s] || u.del.push(s);
        for (s in r) {
          var c = n[s], d = r[s];
          if (c) {
            var h = { name: s, def: d, recreate: !1, del: [], add: [], change: [] };
            if ("" + (c.primKey.keyPath || "") != "" + (d.primKey.keyPath || "") || c.primKey.auto !== d.primKey.auto) h.recreate = !0, u.change.push(h);
            else {
              var y = c.idxByName, w = d.idxByName, S = void 0;
              for (S in y) w[S] || h.del.push(S);
              for (S in w) {
                var O = y[S], g = w[S];
                O ? O.src !== g.src && h.change.push(g) : h.add.push(g);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && u.change.push(h);
            }
          } else u.add.push([s, d]);
        }
        return u;
      }
      function Ni(n, r, s, u) {
        var c = n.db.createObjectStore(r, s.keyPath ? { keyPath: s.keyPath, autoIncrement: s.auto } : { autoIncrement: s.auto });
        return u.forEach(function(d) {
          return Tr(c, d);
        }), c;
      }
      function ls(n, r) {
        f(n).forEach(function(s) {
          r.db.objectStoreNames.contains(s) || (ye && console.debug("Dexie: Creating missing table", s), Ni(r, s, n[s].primKey, n[s].indexes));
        });
      }
      function Tr(n, r) {
        n.createIndex(r.name, r.keyPath, { unique: r.unique, multiEntry: r.multi });
      }
      function Ar(n, r, s) {
        var u = {};
        return $(r.objectStoreNames, 0).forEach(function(c) {
          for (var d = s.objectStore(c), h = Oi(as(S = d.keyPath), S || "", !0, !1, !!d.autoIncrement, S && typeof S != "string", !0), y = [], w = 0; w < d.indexNames.length; ++w) {
            var O = d.index(d.indexNames[w]), S = O.keyPath, O = Oi(O.name, S, !!O.unique, !!O.multiEntry, !1, S && typeof S != "string", !1);
            y.push(O);
          }
          u[c] = Ti(c, h, y);
        }), u;
      }
      function Pr(n, r, s) {
        for (var u = s.db.objectStoreNames, c = 0; c < u.length; ++c) {
          var d = u[c], h = s.objectStore(d);
          n._hasGetAll = "getAll" in h;
          for (var y = 0; y < h.indexNames.length; ++y) {
            var w = h.indexNames[y], S = h.index(w).keyPath, O = typeof S == "string" ? S : "[" + $(S).join("+") + "]";
            !r[d] || (S = r[d].idxByName[O]) && (S.name = w, delete r[d].idxByName[O], r[d].idxByName[w] = S);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && l.WorkerGlobalScope && l instanceof l.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (n._hasGetAll = !1);
      }
      function cs(n) {
        return n.split(",").map(function(r, s) {
          var d = r.split(":"), u = (c = d[1]) === null || c === void 0 ? void 0 : c.trim(), c = (r = d[0].trim()).replace(/([&*]|\+\+)/g, ""), d = /^\[/.test(c) ? c.match(/^\[(.*)\]$/)[1].split("+") : c;
          return Oi(c, d || null, /\&/.test(r), /\*/.test(r), /\+\+/.test(r), p(d), s === 0, u);
        });
      }
      var Lu = (On.prototype._createTableSchema = Ti, On.prototype._parseIndexSyntax = cs, On.prototype._parseStoresSpec = function(n, r) {
        var s = this;
        f(n).forEach(function(u) {
          if (n[u] !== null) {
            var c = s._parseIndexSyntax(n[u]), d = c.shift();
            if (!d) throw new V.Schema("Invalid schema for table " + u + ": " + n[u]);
            if (d.unique = !0, d.multi) throw new V.Schema("Primary key cannot be multiEntry*");
            c.forEach(function(h) {
              if (h.auto) throw new V.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new V.Schema("Index must have a name and cannot be an empty string");
            }), c = s._createTableSchema(u, d, c), r[u] = c;
          }
        });
      }, On.prototype.stores = function(s) {
        var r = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? m(this._cfg.storesSource, s) : s;
        var s = r._versions, u = {}, c = {};
        return s.forEach(function(d) {
          m(u, d._cfg.storesSource), c = d._cfg.dbschema = {}, d._parseStoresSpec(u, c);
        }), r._dbSchema = c, Pi(r, [r._allTables, r, r.Transaction.prototype]), Or(r, [r._allTables, r, r.Transaction.prototype, this._cfg.tables], f(c), c), r._storeNames = f(c), this;
      }, On.prototype.upgrade = function(n) {
        return this._cfg.contentUpgrade = Se(this._cfg.contentUpgrade || Ce, n), this;
      }, On);
      function On() {
      }
      function Ri(n, r) {
        var s = n._dbNamesDB;
        return s || (s = n._dbNamesDB = new qt(br, { addons: [], indexedDB: n, IDBKeyRange: r })).version(1).stores({ dbnames: "name" }), s.table("dbnames");
      }
      function ki(n) {
        return n && typeof n.databases == "function";
      }
      function Di(n) {
        return Ut(function() {
          return fe.letThrough = !0, n();
        });
      }
      function Fi(n) {
        return !("from" in n);
      }
      var st = function(n, r) {
        if (!this) {
          var s = new st();
          return n && "d" in n && m(s, n), s;
        }
        m(this, arguments.length ? { d: 1, from: n, to: 1 < arguments.length ? r : n } : { d: 0 });
      };
      function Gn(n, r, s) {
        var u = Pe(r, s);
        if (!isNaN(u)) {
          if (0 < u) throw RangeError();
          if (Fi(n)) return m(n, { from: r, to: s, d: 1 });
          var c = n.l, u = n.r;
          if (Pe(s, n.from) < 0) return c ? Gn(c, r, s) : n.l = { from: r, to: s, d: 1, l: null, r: null }, ds(n);
          if (0 < Pe(r, n.to)) return u ? Gn(u, r, s) : n.r = { from: r, to: s, d: 1, l: null, r: null }, ds(n);
          Pe(r, n.from) < 0 && (n.from = r, n.l = null, n.d = u ? u.d + 1 : 1), 0 < Pe(s, n.to) && (n.to = s, n.r = null, n.d = n.l ? n.l.d + 1 : 1), s = !n.r, c && !n.l && zn(n, c), u && s && zn(n, u);
        }
      }
      function zn(n, r) {
        Fi(r) || function s(u, w) {
          var d = w.from, h = w.to, y = w.l, w = w.r;
          Gn(u, d, h), y && s(u, y), w && s(u, w);
        }(n, r);
      }
      function fs(n, r) {
        var s = Ir(r), u = s.next();
        if (u.done) return !1;
        for (var c = u.value, d = Ir(n), h = d.next(c.from), y = h.value; !u.done && !h.done; ) {
          if (Pe(y.from, c.to) <= 0 && 0 <= Pe(y.to, c.from)) return !0;
          Pe(c.from, y.from) < 0 ? c = (u = s.next(y.from)).value : y = (h = d.next(c.from)).value;
        }
        return !1;
      }
      function Ir(n) {
        var r = Fi(n) ? null : { s: 0, n };
        return { next: function(s) {
          for (var u = 0 < arguments.length; r; ) switch (r.s) {
            case 0:
              if (r.s = 1, u) for (; r.n.l && Pe(s, r.n.from) < 0; ) r = { up: r, n: r.n.l, s: 1 };
              else for (; r.n.l; ) r = { up: r, n: r.n.l, s: 1 };
            case 1:
              if (r.s = 2, !u || Pe(s, r.n.to) <= 0) return { value: r.n, done: !1 };
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
      function ds(n) {
        var r, s, u = (((r = n.r) === null || r === void 0 ? void 0 : r.d) || 0) - (((s = n.l) === null || s === void 0 ? void 0 : s.d) || 0), c = 1 < u ? "r" : u < -1 ? "l" : "";
        c && (r = c == "r" ? "l" : "r", s = o({}, n), u = n[c], n.from = u.from, n.to = u.to, n[c] = u[c], s[c] = u[r], (n[r] = s).d = ps(s)), n.d = ps(n);
      }
      function ps(s) {
        var r = s.r, s = s.l;
        return (r ? s ? Math.max(r.d, s.d) : r.d : s ? s.d : 0) + 1;
      }
      function Nr(n, r) {
        return f(r).forEach(function(s) {
          n[s] ? zn(n[s], r[s]) : n[s] = function u(c) {
            var d, h, y = {};
            for (d in c) b(c, d) && (h = c[d], y[d] = !h || typeof h != "object" || we.has(h.constructor) ? h : u(h));
            return y;
          }(r[s]);
        }), n;
      }
      function Mi(n, r) {
        return n.all || r.all || Object.keys(n).some(function(s) {
          return r[s] && fs(r[s], n[s]);
        });
      }
      k(st.prototype, ((Et = { add: function(n) {
        return zn(this, n), this;
      }, addKey: function(n) {
        return Gn(this, n, n), this;
      }, addKeys: function(n) {
        var r = this;
        return n.forEach(function(s) {
          return Gn(r, s, s);
        }), this;
      }, hasKey: function(n) {
        var r = Ir(this).next(n).value;
        return r && Pe(r.from, n) <= 0 && 0 <= Pe(r.to, n);
      } })[me] = function() {
        return Ir(this);
      }, Et));
      var an = {}, Bi = {}, Li = !1;
      function Rr(n) {
        Nr(Bi, n), Li || (Li = !0, setTimeout(function() {
          Li = !1, ji(Bi, !(Bi = {}));
        }, 0));
      }
      function ji(n, r) {
        r === void 0 && (r = !1);
        var s = /* @__PURE__ */ new Set();
        if (n.all) for (var u = 0, c = Object.values(an); u < c.length; u++) hs(h = c[u], n, s, r);
        else for (var d in n) {
          var h, y = /^idb\:\/\/(.*)\/(.*)\//.exec(d);
          y && (d = y[1], y = y[2], (h = an["idb://".concat(d, "/").concat(y)]) && hs(h, n, s, r));
        }
        s.forEach(function(w) {
          return w();
        });
      }
      function hs(n, r, s, u) {
        for (var c = [], d = 0, h = Object.entries(n.queries.query); d < h.length; d++) {
          for (var y = h[d], w = y[0], S = [], O = 0, g = y[1]; O < g.length; O++) {
            var I = g[O];
            Mi(r, I.obsSet) ? I.subscribers.forEach(function(T) {
              return s.add(T);
            }) : u && S.push(I);
          }
          u && c.push([w, S]);
        }
        if (u) for (var x = 0, C = c; x < C.length; x++) {
          var A = C[x], w = A[0], S = A[1];
          n.queries.query[w] = S;
        }
      }
      function ju(n) {
        var r = n._state, s = n._deps.indexedDB;
        if (r.isBeingOpened || n.idbdb) return r.dbReadyPromise.then(function() {
          return r.dbOpenError ? ze(r.dbOpenError) : n;
        });
        r.isBeingOpened = !0, r.dbOpenError = null, r.openComplete = !1;
        var u = r.openCanceller, c = Math.round(10 * n.verno), d = !1;
        function h() {
          if (r.openCanceller !== u) throw new V.DatabaseClosed("db.open() was cancelled");
        }
        function y() {
          return new se(function(I, x) {
            if (h(), !s) throw new V.MissingAPI();
            var C = n.name, A = r.autoSchema || !c ? s.open(C) : s.open(C, c);
            if (!A) throw new V.MissingAPI();
            A.onerror = kt(x), A.onblocked = $e(n._fireOnBlocked), A.onupgradeneeded = $e(function(T) {
              var N;
              O = A.transaction, r.autoSchema && !n._options.allowEmptyDB ? (A.onerror = Vn, O.abort(), A.result.close(), (N = s.deleteDatabase(C)).onsuccess = N.onerror = $e(function() {
                x(new V.NoSuchDatabase("Database ".concat(C, " doesnt exist")));
              })) : (O.onerror = kt(x), T = T.oldVersion > Math.pow(2, 62) ? 0 : T.oldVersion, g = T < 1, n.idbdb = A.result, d && Bu(n, O), Mu(n, T / 10, O, x));
            }, x), A.onsuccess = $e(function() {
              O = null;
              var T, N, B, q, K, Y = n.idbdb = A.result, ee = $(Y.objectStoreNames);
              if (0 < ee.length) try {
                var X = Y.transaction((q = ee).length === 1 ? q[0] : q, "readonly");
                if (r.autoSchema) N = Y, B = X, (T = n).verno = N.version / 10, B = T._dbSchema = Ar(0, N, B), T._storeNames = $(N.objectStoreNames, 0), Or(T, [T._allTables], f(B), B);
                else if (Pr(n, n._dbSchema, X), ((K = Ii(Ar(0, (K = n).idbdb, X), K._dbSchema)).add.length || K.change.some(function(Z) {
                  return Z.add.length || Z.change.length;
                })) && !d) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), Y.close(), c = Y.version + 1, d = !0, I(y());
                Cr(n, X);
              } catch {
              }
              En.push(n), Y.onversionchange = $e(function(Z) {
                r.vcFired = !0, n.on("versionchange").fire(Z);
              }), Y.onclose = $e(function(Z) {
                n.on("close").fire(Z);
              }), g && (K = n._deps, X = C, Y = K.indexedDB, K = K.IDBKeyRange, ki(Y) || X === br || Ri(Y, K).put({ name: X }).catch(Ce)), I();
            }, x);
          }).catch(function(I) {
            switch (I?.name) {
              case "UnknownError":
                if (0 < r.PR1398_maxLoop) return r.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), y();
                break;
              case "VersionError":
                if (0 < c) return c = 0, y();
            }
            return se.reject(I);
          });
        }
        var w, S = r.dbReadyResolve, O = null, g = !1;
        return se.race([u, (typeof navigator > "u" ? se.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(I) {
          function x() {
            return indexedDB.databases().finally(I);
          }
          w = setInterval(x, 100), x();
        }).finally(function() {
          return clearInterval(w);
        }) : Promise.resolve()).then(y)]).then(function() {
          return h(), r.onReadyBeingFired = [], se.resolve(Di(function() {
            return n.on.ready.fire(n.vip);
          })).then(function I() {
            if (0 < r.onReadyBeingFired.length) {
              var x = r.onReadyBeingFired.reduce(Se, Ce);
              return r.onReadyBeingFired = [], se.resolve(Di(function() {
                return x(n.vip);
              })).then(I);
            }
          });
        }).finally(function() {
          r.openCanceller === u && (r.onReadyBeingFired = null, r.isBeingOpened = !1);
        }).catch(function(I) {
          r.dbOpenError = I;
          try {
            O && O.abort();
          } catch {
          }
          return u === r.openCanceller && n._close(), ze(I);
        }).finally(function() {
          r.openComplete = !0, S();
        }).then(function() {
          var I;
          return g && (I = {}, n.tables.forEach(function(x) {
            x.schema.indexes.forEach(function(C) {
              C.name && (I["idb://".concat(n.name, "/").concat(x.name, "/").concat(C.name)] = new st(-1 / 0, [[[]]]));
            }), I["idb://".concat(n.name, "/").concat(x.name, "/")] = I["idb://".concat(n.name, "/").concat(x.name, "/:dels")] = new st(-1 / 0, [[[]]]);
          }), Wt($n).fire(I), ji(I, !0)), n;
        });
      }
      function qi(n) {
        function r(d) {
          return n.next(d);
        }
        var s = c(r), u = c(function(d) {
          return n.throw(d);
        });
        function c(d) {
          return function(w) {
            var y = d(w), w = y.value;
            return y.done ? w : w && typeof w.then == "function" ? w.then(s, u) : p(w) ? Promise.all(w).then(s, u) : s(w);
          };
        }
        return c(r)();
      }
      function kr(n, r, s) {
        for (var u = p(n) ? n.slice() : [n], c = 0; c < s; ++c) u.push(r);
        return u;
      }
      var qu = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(n) {
        return o(o({}, n), { table: function(r) {
          var s = n.table(r), u = s.schema, c = {}, d = [];
          function h(g, I, x) {
            var C = Wn(g), A = c[C] = c[C] || [], T = g == null ? 0 : typeof g == "string" ? 1 : g.length, N = 0 < I, N = o(o({}, x), { name: N ? "".concat(C, "(virtual-from:").concat(x.name, ")") : x.name, lowLevelIndex: x, isVirtual: N, keyTail: I, keyLength: T, extractKey: Ai(g), unique: !N && x.unique });
            return A.push(N), N.isPrimaryKey || d.push(N), 1 < T && h(T === 2 ? g[0] : g.slice(0, T - 1), I + 1, x), A.sort(function(B, q) {
              return B.keyTail - q.keyTail;
            }), N;
          }
          r = h(u.primaryKey.keyPath, 0, u.primaryKey), c[":id"] = [r];
          for (var y = 0, w = u.indexes; y < w.length; y++) {
            var S = w[y];
            h(S.keyPath, 0, S);
          }
          function O(g) {
            var I, x = g.query.index;
            return x.isVirtual ? o(o({}, g), { query: { index: x.lowLevelIndex, range: (I = g.query.range, x = x.keyTail, { type: I.type === 1 ? 2 : I.type, lower: kr(I.lower, I.lowerOpen ? n.MAX_KEY : n.MIN_KEY, x), lowerOpen: !0, upper: kr(I.upper, I.upperOpen ? n.MIN_KEY : n.MAX_KEY, x), upperOpen: !0 }) } }) : g;
          }
          return o(o({}, s), { schema: o(o({}, u), { primaryKey: r, indexes: d, getIndexByKeyPath: function(g) {
            return (g = c[Wn(g)]) && g[0];
          } }), count: function(g) {
            return s.count(O(g));
          }, query: function(g) {
            return s.query(O(g));
          }, openCursor: function(g) {
            var I = g.query.index, x = I.keyTail, C = I.isVirtual, A = I.keyLength;
            return C ? s.openCursor(O(g)).then(function(N) {
              return N && T(N);
            }) : s.openCursor(g);
            function T(N) {
              return Object.create(N, { continue: { value: function(B) {
                B != null ? N.continue(kr(B, g.reverse ? n.MAX_KEY : n.MIN_KEY, x)) : g.unique ? N.continue(N.key.slice(0, A).concat(g.reverse ? n.MIN_KEY : n.MAX_KEY, x)) : N.continue();
              } }, continuePrimaryKey: { value: function(B, q) {
                N.continuePrimaryKey(kr(B, n.MAX_KEY, x), q);
              } }, primaryKey: { get: function() {
                return N.primaryKey;
              } }, key: { get: function() {
                var B = N.key;
                return A === 1 ? B[0] : B.slice(0, A);
              } }, value: { get: function() {
                return N.value;
              } } });
            }
          } });
        } });
      } };
      function Ki(n, r, s, u) {
        return s = s || {}, u = u || "", f(n).forEach(function(c) {
          var d, h, y;
          b(r, c) ? (d = n[c], h = r[c], typeof d == "object" && typeof h == "object" && d && h ? (y = ke(d)) !== ke(h) ? s[u + c] = r[c] : y === "Object" ? Ki(d, h, s, u + c + ".") : d !== h && (s[u + c] = r[c]) : d !== h && (s[u + c] = r[c])) : s[u + c] = void 0;
        }), f(r).forEach(function(c) {
          b(n, c) || (s[u + c] = r[c]);
        }), s;
      }
      function Ui(n, r) {
        return r.type === "delete" ? r.keys : r.keys || r.values.map(n.extractKey);
      }
      var Ku = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(n) {
        return o(o({}, n), { table: function(r) {
          var s = n.table(r), u = s.schema.primaryKey;
          return o(o({}, s), { mutate: function(c) {
            var d = fe.trans, h = d.table(r).hook, y = h.deleting, w = h.creating, S = h.updating;
            switch (c.type) {
              case "add":
                if (w.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return O(c);
                }, !0);
              case "put":
                if (w.fire === Ce && S.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return O(c);
                }, !0);
              case "delete":
                if (y.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return O(c);
                }, !0);
              case "deleteRange":
                if (y.fire === Ce) break;
                return d._promise("readwrite", function() {
                  return function g(I, x, C) {
                    return s.query({ trans: I, values: !1, query: { index: u, range: x }, limit: C }).then(function(A) {
                      var T = A.result;
                      return O({ type: "delete", keys: T, trans: I }).then(function(N) {
                        return 0 < N.numFailures ? Promise.reject(N.failures[0]) : T.length < C ? { failures: [], numFailures: 0, lastResult: void 0 } : g(I, o(o({}, x), { lower: T[T.length - 1], lowerOpen: !0 }), C);
                      });
                    });
                  }(c.trans, c.range, 1e4);
                }, !0);
            }
            return s.mutate(c);
            function O(g) {
              var I, x, C, A = fe.trans, T = g.keys || Ui(u, g);
              if (!T) throw new Error("Keys missing");
              return (g = g.type === "add" || g.type === "put" ? o(o({}, g), { keys: T }) : o({}, g)).type !== "delete" && (g.values = a([], g.values)), g.keys && (g.keys = a([], g.keys)), I = s, C = T, ((x = g).type === "add" ? Promise.resolve([]) : I.getMany({ trans: x.trans, keys: C, cache: "immutable" })).then(function(N) {
                var B = T.map(function(q, K) {
                  var Y, ee, X, Z = N[K], oe = { onerror: null, onsuccess: null };
                  return g.type === "delete" ? y.fire.call(oe, q, Z, A) : g.type === "add" || Z === void 0 ? (Y = w.fire.call(oe, q, g.values[K], A), q == null && Y != null && (g.keys[K] = q = Y, u.outbound || J(g.values[K], u.keyPath, q))) : (Y = Ki(Z, g.values[K]), (ee = S.fire.call(oe, Y, q, Z, A)) && (X = g.values[K], Object.keys(ee).forEach(function(ie) {
                    b(X, ie) ? X[ie] = ee[ie] : J(X, ie, ee[ie]);
                  }))), oe;
                });
                return s.mutate(g).then(function(q) {
                  for (var K = q.failures, Y = q.results, ee = q.numFailures, q = q.lastResult, X = 0; X < T.length; ++X) {
                    var Z = (Y || T)[X], oe = B[X];
                    Z == null ? oe.onerror && oe.onerror(K[X]) : oe.onsuccess && oe.onsuccess(g.type === "put" && N[X] ? g.values[X] : Z);
                  }
                  return { failures: K, results: Y, numFailures: ee, lastResult: q };
                }).catch(function(q) {
                  return B.forEach(function(K) {
                    return K.onerror && K.onerror(q);
                  }), Promise.reject(q);
                });
              });
            }
          } });
        } });
      } };
      function ms(n, r, s) {
        try {
          if (!r || r.keys.length < n.length) return null;
          for (var u = [], c = 0, d = 0; c < r.keys.length && d < n.length; ++c) Pe(r.keys[c], n[d]) === 0 && (u.push(s ? _e(r.values[c]) : r.values[c]), ++d);
          return u.length === n.length ? u : null;
        } catch {
          return null;
        }
      }
      var Uu = { stack: "dbcore", level: -1, create: function(n) {
        return { table: function(r) {
          var s = n.table(r);
          return o(o({}, s), { getMany: function(u) {
            if (!u.cache) return s.getMany(u);
            var c = ms(u.keys, u.trans._cache, u.cache === "clone");
            return c ? se.resolve(c) : s.getMany(u).then(function(d) {
              return u.trans._cache = { keys: u.keys, values: u.cache === "clone" ? _e(d) : d }, d;
            });
          }, mutate: function(u) {
            return u.type !== "add" && (u.trans._cache = null), s.mutate(u);
          } });
        } };
      } };
      function ys(n, r) {
        return n.trans.mode === "readonly" && !!n.subscr && !n.trans.explicit && n.trans.db._options.cache !== "disabled" && !r.schema.primaryKey.outbound;
      }
      function vs(n, r) {
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
      var Vu = { stack: "dbcore", level: 0, name: "Observability", create: function(n) {
        var r = n.schema.name, s = new st(n.MIN_KEY, n.MAX_KEY);
        return o(o({}, n), { transaction: function(u, c, d) {
          if (fe.subscr && c !== "readonly") throw new V.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(fe.querier));
          return n.transaction(u, c, d);
        }, table: function(u) {
          var c = n.table(u), d = c.schema, h = d.primaryKey, g = d.indexes, y = h.extractKey, w = h.outbound, S = h.autoIncrement && g.filter(function(x) {
            return x.compound && x.keyPath.includes(h.keyPath);
          }), O = o(o({}, c), { mutate: function(x) {
            function C(ie) {
              return ie = "idb://".concat(r, "/").concat(u, "/").concat(ie), q[ie] || (q[ie] = new st());
            }
            var A, T, N, B = x.trans, q = x.mutatedParts || (x.mutatedParts = {}), K = C(""), Y = C(":dels"), ee = x.type, oe = x.type === "deleteRange" ? [x.range] : x.type === "delete" ? [x.keys] : x.values.length < 50 ? [Ui(h, x).filter(function(ie) {
              return ie;
            }), x.values] : [], X = oe[0], Z = oe[1], oe = x.trans._cache;
            return p(X) ? (K.addKeys(X), (oe = ee === "delete" || X.length === Z.length ? ms(X, oe) : null) || Y.addKeys(X), (oe || Z) && (A = C, T = oe, N = Z, d.indexes.forEach(function(ie) {
              var ae = A(ie.name || "");
              function Oe(Ee) {
                return Ee != null ? ie.extractKey(Ee) : null;
              }
              function Ie(Ee) {
                return ie.multiEntry && p(Ee) ? Ee.forEach(function(Ge) {
                  return ae.addKey(Ge);
                }) : ae.addKey(Ee);
              }
              (T || N).forEach(function(Ee, at) {
                var xe = T && Oe(T[at]), at = N && Oe(N[at]);
                Pe(xe, at) !== 0 && (xe != null && Ie(xe), at != null && Ie(at));
              });
            }))) : X ? (Z = { from: (Z = X.lower) !== null && Z !== void 0 ? Z : n.MIN_KEY, to: (Z = X.upper) !== null && Z !== void 0 ? Z : n.MAX_KEY }, Y.add(Z), K.add(Z)) : (K.add(s), Y.add(s), d.indexes.forEach(function(ie) {
              return C(ie.name).add(s);
            })), c.mutate(x).then(function(ie) {
              return !X || x.type !== "add" && x.type !== "put" || (K.addKeys(ie.results), S && S.forEach(function(ae) {
                for (var Oe = x.values.map(function(xe) {
                  return ae.extractKey(xe);
                }), Ie = ae.keyPath.findIndex(function(xe) {
                  return xe === h.keyPath;
                }), Ee = 0, Ge = ie.results.length; Ee < Ge; ++Ee) Oe[Ee][Ie] = ie.results[Ee];
                C(ae.name).addKeys(Oe);
              })), B.mutatedParts = Nr(B.mutatedParts || {}, q), ie;
            });
          } }), g = function(C) {
            var A = C.query, C = A.index, A = A.range;
            return [C, new st((C = A.lower) !== null && C !== void 0 ? C : n.MIN_KEY, (A = A.upper) !== null && A !== void 0 ? A : n.MAX_KEY)];
          }, I = { get: function(x) {
            return [h, new st(x.key)];
          }, getMany: function(x) {
            return [h, new st().addKeys(x.keys)];
          }, count: g, query: g, openCursor: g };
          return f(I).forEach(function(x) {
            O[x] = function(C) {
              var A = fe.subscr, T = !!A, N = ys(fe, c) && vs(x, C) ? C.obsSet = {} : A;
              if (T) {
                var B = function(Z) {
                  return Z = "idb://".concat(r, "/").concat(u, "/").concat(Z), N[Z] || (N[Z] = new st());
                }, q = B(""), K = B(":dels"), A = I[x](C), T = A[0], A = A[1];
                if ((x === "query" && T.isPrimaryKey && !C.values ? K : B(T.name || "")).add(A), !T.isPrimaryKey) {
                  if (x !== "count") {
                    var Y = x === "query" && w && C.values && c.query(o(o({}, C), { values: !1 }));
                    return c[x].apply(this, arguments).then(function(Z) {
                      if (x === "query") {
                        if (w && C.values) return Y.then(function(Oe) {
                          return Oe = Oe.result, q.addKeys(Oe), Z;
                        });
                        var oe = C.values ? Z.result.map(y) : Z.result;
                        (C.values ? q : K).addKeys(oe);
                      } else if (x === "openCursor") {
                        var ie = Z, ae = C.values;
                        return ie && Object.create(ie, { key: { get: function() {
                          return K.addKey(ie.primaryKey), ie.key;
                        } }, primaryKey: { get: function() {
                          var Oe = ie.primaryKey;
                          return K.addKey(Oe), Oe;
                        } }, value: { get: function() {
                          return ae && q.addKey(ie.primaryKey), ie.value;
                        } } });
                      }
                      return Z;
                    });
                  }
                  K.add(s);
                }
              }
              return c[x].apply(this, arguments);
            };
          }), O;
        } });
      } };
      function gs(n, r, s) {
        if (s.numFailures === 0) return r;
        if (r.type === "deleteRange") return null;
        var u = r.keys ? r.keys.length : "values" in r && r.values ? r.values.length : 1;
        return s.numFailures === u ? null : (r = o({}, r), p(r.keys) && (r.keys = r.keys.filter(function(c, d) {
          return !(d in s.failures);
        })), "values" in r && p(r.values) && (r.values = r.values.filter(function(c, d) {
          return !(d in s.failures);
        })), r);
      }
      function Vi(n, r) {
        return s = n, ((u = r).lower === void 0 || (u.lowerOpen ? 0 < Pe(s, u.lower) : 0 <= Pe(s, u.lower))) && (n = n, (r = r).upper === void 0 || (r.upperOpen ? Pe(n, r.upper) < 0 : Pe(n, r.upper) <= 0));
        var s, u;
      }
      function bs(n, r, I, u, c, d) {
        if (!I || I.length === 0) return n;
        var h = r.query.index, y = h.multiEntry, w = r.query.range, S = u.schema.primaryKey.extractKey, O = h.extractKey, g = (h.lowLevelIndex || h).extractKey, I = I.reduce(function(x, C) {
          var A = x, T = [];
          if (C.type === "add" || C.type === "put") for (var N = new st(), B = C.values.length - 1; 0 <= B; --B) {
            var q, K = C.values[B], Y = S(K);
            N.hasKey(Y) || (q = O(K), (y && p(q) ? q.some(function(ie) {
              return Vi(ie, w);
            }) : Vi(q, w)) && (N.addKey(Y), T.push(K)));
          }
          switch (C.type) {
            case "add":
              var ee = new st().addKeys(r.values ? x.map(function(ae) {
                return S(ae);
              }) : x), A = x.concat(r.values ? T.filter(function(ae) {
                return ae = S(ae), !ee.hasKey(ae) && (ee.addKey(ae), !0);
              }) : T.map(function(ae) {
                return S(ae);
              }).filter(function(ae) {
                return !ee.hasKey(ae) && (ee.addKey(ae), !0);
              }));
              break;
            case "put":
              var X = new st().addKeys(C.values.map(function(ae) {
                return S(ae);
              }));
              A = x.filter(function(ae) {
                return !X.hasKey(r.values ? S(ae) : ae);
              }).concat(r.values ? T : T.map(function(ae) {
                return S(ae);
              }));
              break;
            case "delete":
              var Z = new st().addKeys(C.keys);
              A = x.filter(function(ae) {
                return !Z.hasKey(r.values ? S(ae) : ae);
              });
              break;
            case "deleteRange":
              var oe = C.range;
              A = x.filter(function(ae) {
                return !Vi(S(ae), oe);
              });
          }
          return A;
        }, n);
        return I === n ? n : (I.sort(function(x, C) {
          return Pe(g(x), g(C)) || Pe(S(x), S(C));
        }), r.limit && r.limit < 1 / 0 && (I.length > r.limit ? I.length = r.limit : n.length === r.limit && I.length < r.limit && (c.dirty = !0)), d ? Object.freeze(I) : I);
      }
      function _s(n, r) {
        return Pe(n.lower, r.lower) === 0 && Pe(n.upper, r.upper) === 0 && !!n.lowerOpen == !!r.lowerOpen && !!n.upperOpen == !!r.upperOpen;
      }
      function $u(n, r) {
        return function(s, u, c, d) {
          if (s === void 0) return u !== void 0 ? -1 : 0;
          if (u === void 0) return 1;
          if ((u = Pe(s, u)) === 0) {
            if (c && d) return 0;
            if (c) return 1;
            if (d) return -1;
          }
          return u;
        }(n.lower, r.lower, n.lowerOpen, r.lowerOpen) <= 0 && 0 <= function(s, u, c, d) {
          if (s === void 0) return u !== void 0 ? 1 : 0;
          if (u === void 0) return -1;
          if ((u = Pe(s, u)) === 0) {
            if (c && d) return 0;
            if (c) return -1;
            if (d) return 1;
          }
          return u;
        }(n.upper, r.upper, n.upperOpen, r.upperOpen);
      }
      function Hu(n, r, s, u) {
        n.subscribers.add(s), u.addEventListener("abort", function() {
          var c, d;
          n.subscribers.delete(s), n.subscribers.size === 0 && (c = n, d = r, setTimeout(function() {
            c.subscribers.size === 0 && be(d, c);
          }, 3e3));
        });
      }
      var Wu = { stack: "dbcore", level: 0, name: "Cache", create: function(n) {
        var r = n.schema.name;
        return o(o({}, n), { transaction: function(s, u, c) {
          var d, h, y = n.transaction(s, u, c);
          return u === "readwrite" && (h = (d = new AbortController()).signal, c = function(w) {
            return function() {
              if (d.abort(), u === "readwrite") {
                for (var S = /* @__PURE__ */ new Set(), O = 0, g = s; O < g.length; O++) {
                  var I = g[O], x = an["idb://".concat(r, "/").concat(I)];
                  if (x) {
                    var C = n.table(I), A = x.optimisticOps.filter(function(ae) {
                      return ae.trans === y;
                    });
                    if (y._explicit && w && y.mutatedParts) for (var T = 0, N = Object.values(x.queries.query); T < N.length; T++) for (var B = 0, q = (ee = N[T]).slice(); B < q.length; B++) Mi((X = q[B]).obsSet, y.mutatedParts) && (be(ee, X), X.subscribers.forEach(function(ae) {
                      return S.add(ae);
                    }));
                    else if (0 < A.length) {
                      x.optimisticOps = x.optimisticOps.filter(function(ae) {
                        return ae.trans !== y;
                      });
                      for (var K = 0, Y = Object.values(x.queries.query); K < Y.length; K++) for (var ee, X, Z, oe = 0, ie = (ee = Y[K]).slice(); oe < ie.length; oe++) (X = ie[oe]).res != null && y.mutatedParts && (w && !X.dirty ? (Z = Object.isFrozen(X.res), Z = bs(X.res, X.req, A, C, X, Z), X.dirty ? (be(ee, X), X.subscribers.forEach(function(ae) {
                        return S.add(ae);
                      })) : Z !== X.res && (X.res = Z, X.promise = se.resolve({ result: Z }))) : (X.dirty && be(ee, X), X.subscribers.forEach(function(ae) {
                        return S.add(ae);
                      })));
                    }
                  }
                }
                S.forEach(function(ae) {
                  return ae();
                });
              }
            };
          }, y.addEventListener("abort", c(!1), { signal: h }), y.addEventListener("error", c(!1), { signal: h }), y.addEventListener("complete", c(!0), { signal: h })), y;
        }, table: function(s) {
          var u = n.table(s), c = u.schema.primaryKey;
          return o(o({}, u), { mutate: function(d) {
            var h = fe.trans;
            if (c.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return u.mutate(d);
            var y = an["idb://".concat(r, "/").concat(s)];
            return y ? (h = u.mutate(d), d.type !== "add" && d.type !== "put" || !(50 <= d.values.length || Ui(c, d).some(function(w) {
              return w == null;
            })) ? (y.optimisticOps.push(d), d.mutatedParts && Rr(d.mutatedParts), h.then(function(w) {
              0 < w.numFailures && (be(y.optimisticOps, d), (w = gs(0, d, w)) && y.optimisticOps.push(w), d.mutatedParts && Rr(d.mutatedParts));
            }), h.catch(function() {
              be(y.optimisticOps, d), d.mutatedParts && Rr(d.mutatedParts);
            })) : h.then(function(w) {
              var S = gs(0, o(o({}, d), { values: d.values.map(function(O, g) {
                var I;
                return w.failures[g] || (O = (I = c.keyPath) !== null && I !== void 0 && I.includes(".") ? _e(O) : o({}, O), J(O, c.keyPath, w.results[g])), O;
              }) }), w);
              y.optimisticOps.push(S), queueMicrotask(function() {
                return d.mutatedParts && Rr(d.mutatedParts);
              });
            }), h) : u.mutate(d);
          }, query: function(d) {
            if (!ys(fe, u) || !vs("query", d)) return u.query(d);
            var h = ((S = fe.trans) === null || S === void 0 ? void 0 : S.db._options.cache) === "immutable", g = fe, y = g.requery, w = g.signal, S = function(C, A, T, N) {
              var B = an["idb://".concat(C, "/").concat(A)];
              if (!B) return [];
              if (!(A = B.queries[T])) return [null, !1, B, null];
              var q = A[(N.query ? N.query.index.name : null) || ""];
              if (!q) return [null, !1, B, null];
              switch (T) {
                case "query":
                  var K = q.find(function(Y) {
                    return Y.req.limit === N.limit && Y.req.values === N.values && _s(Y.req.query.range, N.query.range);
                  });
                  return K ? [K, !0, B, q] : [q.find(function(Y) {
                    return ("limit" in Y.req ? Y.req.limit : 1 / 0) >= N.limit && (!N.values || Y.req.values) && $u(Y.req.query.range, N.query.range);
                  }), !1, B, q];
                case "count":
                  return K = q.find(function(Y) {
                    return _s(Y.req.query.range, N.query.range);
                  }), [K, !!K, B, q];
              }
            }(r, s, "query", d), O = S[0], g = S[1], I = S[2], x = S[3];
            return O && g ? O.obsSet = d.obsSet : (g = u.query(d).then(function(C) {
              var A = C.result;
              if (O && (O.res = A), h) {
                for (var T = 0, N = A.length; T < N; ++T) Object.freeze(A[T]);
                Object.freeze(A);
              } else C.result = _e(A);
              return C;
            }).catch(function(C) {
              return x && O && be(x, O), Promise.reject(C);
            }), O = { obsSet: d.obsSet, promise: g, subscribers: /* @__PURE__ */ new Set(), type: "query", req: d, dirty: !1 }, x ? x.push(O) : (x = [O], (I = I || (an["idb://".concat(r, "/").concat(s)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[d.query.index.name || ""] = x)), Hu(O, x, y, w), O.promise.then(function(C) {
              return { result: bs(C.result, d, I?.optimisticOps, u, O, h) };
            });
          } });
        } });
      } };
      function Dr(n, r) {
        return new Proxy(n, { get: function(s, u, c) {
          return u === "db" ? r : Reflect.get(s, u, c);
        } });
      }
      var qt = (Ye.prototype.version = function(n) {
        if (isNaN(n) || n < 0.1) throw new V.Type("Given version is not a positive number");
        if (n = Math.round(10 * n) / 10, this.idbdb || this._state.isBeingOpened) throw new V.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, n);
        var r = this._versions, s = r.filter(function(u) {
          return u._cfg.version === n;
        })[0];
        return s || (s = new this.Version(n), r.push(s), r.sort(Fu), s.stores({}), this._state.autoSchema = !1, s);
      }, Ye.prototype._whenReady = function(n) {
        var r = this;
        return this.idbdb && (this._state.openComplete || fe.letThrough || this._vip) ? n() : new se(function(s, u) {
          if (r._state.openComplete) return u(new V.DatabaseClosed(r._state.dbOpenError));
          if (!r._state.isBeingOpened) {
            if (!r._state.autoOpen) return void u(new V.DatabaseClosed());
            r.open().catch(Ce);
          }
          r._state.dbReadyPromise.then(s, u);
        }).then(n);
      }, Ye.prototype.use = function(n) {
        var r = n.stack, s = n.create, u = n.level, c = n.name;
        return c && this.unuse({ stack: r, name: c }), n = this._middlewares[r] || (this._middlewares[r] = []), n.push({ stack: r, create: s, level: u ?? 10, name: c }), n.sort(function(d, h) {
          return d.level - h.level;
        }), this;
      }, Ye.prototype.unuse = function(n) {
        var r = n.stack, s = n.name, u = n.create;
        return r && this._middlewares[r] && (this._middlewares[r] = this._middlewares[r].filter(function(c) {
          return u ? c.create !== u : !!s && c.name !== s;
        })), this;
      }, Ye.prototype.open = function() {
        var n = this;
        return rn(Mt, function() {
          return ju(n);
        });
      }, Ye.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var n = this._state, r = En.indexOf(this);
        if (0 <= r && En.splice(r, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        n.isBeingOpened || (n.dbReadyPromise = new se(function(s) {
          n.dbReadyResolve = s;
        }), n.openCanceller = new se(function(s, u) {
          n.cancelOpen = u;
        }));
      }, Ye.prototype.close = function(s) {
        var r = (s === void 0 ? { disableAutoOpen: !0 } : s).disableAutoOpen, s = this._state;
        r ? (s.isBeingOpened && s.cancelOpen(new V.DatabaseClosed()), this._close(), s.autoOpen = !1, s.dbOpenError = new V.DatabaseClosed()) : (this._close(), s.autoOpen = this._options.autoOpen || s.isBeingOpened, s.openComplete = !1, s.dbOpenError = null);
      }, Ye.prototype.delete = function(n) {
        var r = this;
        n === void 0 && (n = { disableAutoOpen: !0 });
        var s = 0 < arguments.length && typeof arguments[0] != "object", u = this._state;
        return new se(function(c, d) {
          function h() {
            r.close(n);
            var y = r._deps.indexedDB.deleteDatabase(r.name);
            y.onsuccess = $e(function() {
              var w, S, O;
              w = r._deps, S = r.name, O = w.indexedDB, w = w.IDBKeyRange, ki(O) || S === br || Ri(O, w).delete(S).catch(Ce), c();
            }), y.onerror = kt(d), y.onblocked = r._fireOnBlocked;
          }
          if (s) throw new V.InvalidArgument("Invalid closeOptions argument to db.delete()");
          u.isBeingOpened ? u.dbReadyPromise.then(h) : h();
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
        return f(this._allTables).map(function(r) {
          return n._allTables[r];
        });
      }, enumerable: !1, configurable: !0 }), Ye.prototype.transaction = function() {
        var n = (function(r, s, u) {
          var c = arguments.length;
          if (c < 2) throw new V.InvalidArgument("Too few arguments");
          for (var d = new Array(c - 1); --c; ) d[c - 1] = arguments[c];
          return u = d.pop(), [r, le(d), u];
        }).apply(this, arguments);
        return this._transaction.apply(this, n);
      }, Ye.prototype._transaction = function(n, r, s) {
        var u = this, c = fe.trans;
        c && c.db === this && n.indexOf("!") === -1 || (c = null);
        var d, h, y = n.indexOf("?") !== -1;
        n = n.replace("!", "").replace("?", "");
        try {
          if (h = r.map(function(S) {
            if (S = S instanceof u.Table ? S.name : S, typeof S != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return S;
          }), n == "r" || n === wi) d = wi;
          else {
            if (n != "rw" && n != xi) throw new V.InvalidArgument("Invalid transaction mode: " + n);
            d = xi;
          }
          if (c) {
            if (c.mode === wi && d === xi) {
              if (!y) throw new V.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              c = null;
            }
            c && h.forEach(function(S) {
              if (c && c.storeNames.indexOf(S) === -1) {
                if (!y) throw new V.SubTransaction("Table " + S + " not included in parent transaction.");
                c = null;
              }
            }), y && c && !c.active && (c = null);
          }
        } catch (S) {
          return c ? c._promise(null, function(O, g) {
            g(S);
          }) : ze(S);
        }
        var w = (function S(O, g, I, x, C) {
          return se.resolve().then(function() {
            var A = fe.transless || fe, T = O._createTransaction(g, I, O._dbSchema, x);
            if (T.explicit = !0, A = { trans: T, transless: A }, x) T.idbtrans = x.idbtrans;
            else try {
              T.create(), T.idbtrans._explicit = !0, O._state.PR1398_maxLoop = 3;
            } catch (q) {
              return q.name === P.InvalidState && O.isOpen() && 0 < --O._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), O.close({ disableAutoOpen: !1 }), O.open().then(function() {
                return S(O, g, I, null, C);
              })) : ze(q);
            }
            var N, B = dt(C);
            return B && xn(), A = se.follow(function() {
              var q;
              (N = C.call(T, T)) && (B ? (q = Vt.bind(null, null), N.then(q, q)) : typeof N.next == "function" && typeof N.throw == "function" && (N = qi(N)));
            }, A), (N && typeof N.then == "function" ? se.resolve(N).then(function(q) {
              return T.active ? q : ze(new V.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : A.then(function() {
              return N;
            })).then(function(q) {
              return x && T._resolve(), T._completion.then(function() {
                return q;
              });
            }).catch(function(q) {
              return T._reject(q), ze(q);
            });
          });
        }).bind(null, this, d, h, c, s);
        return c ? c._promise(d, w, "lock") : fe.trans ? rn(fe.transless, function() {
          return u._whenReady(w);
        }) : this._whenReady(w);
      }, Ye.prototype.table = function(n) {
        if (!b(this._allTables, n)) throw new V.InvalidTable("Table ".concat(n, " does not exist"));
        return this._allTables[n];
      }, Ye);
      function Ye(n, r) {
        var s = this;
        this._middlewares = {}, this.verno = 0;
        var u = Ye.dependencies;
        this._options = r = o({ addons: Ye.addons, autoOpen: !0, indexedDB: u.indexedDB, IDBKeyRange: u.IDBKeyRange, cache: "cloned" }, r), this._deps = { indexedDB: r.indexedDB, IDBKeyRange: r.IDBKeyRange }, u = r.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var c, d, h, y, w, S = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: Ce, dbReadyPromise: null, cancelOpen: Ce, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: r.autoOpen };
        S.dbReadyPromise = new se(function(g) {
          S.dbReadyResolve = g;
        }), S.openCanceller = new se(function(g, I) {
          S.cancelOpen = I;
        }), this._state = S, this.name = n, this.on = qn(this, "populate", "blocked", "versionchange", "close", { ready: [Se, Ce] }), this.once = function(g, I) {
          var x = function() {
            for (var C = [], A = 0; A < arguments.length; A++) C[A] = arguments[A];
            s.on(g).unsubscribe(x), I.apply(s, C);
          };
          return s.on(g, x);
        }, this.on.ready.subscribe = L(this.on.ready.subscribe, function(g) {
          return function(I, x) {
            Ye.vip(function() {
              var C, A = s._state;
              A.openComplete ? (A.dbOpenError || se.resolve().then(I), x && g(I)) : A.onReadyBeingFired ? (A.onReadyBeingFired.push(I), x && g(I)) : (g(I), C = s, x || g(function T() {
                C.on.ready.unsubscribe(I), C.on.ready.unsubscribe(T);
              }));
            });
          };
        }), this.Collection = (c = this, Kn(Au.prototype, function(N, T) {
          this.db = c;
          var x = Xo, C = null;
          if (T) try {
            x = T();
          } catch (B) {
            C = B;
          }
          var A = N._ctx, T = A.table, N = T.hook.reading.fire;
          this._ctx = { table: T, index: A.index, isPrimKey: !A.index || T.schema.primKey.keyPath && A.index === T.schema.primKey.name, range: x, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: C, or: A.or, valueMapper: N !== j ? N : null };
        })), this.Table = (d = this, Kn(es.prototype, function(g, I, x) {
          this.db = d, this._tx = x, this.name = g, this.schema = I, this.hook = d._allTables[g] ? d._allTables[g].hook : qn(null, { creating: [ge, Ce], reading: [G, j], updating: [pe, Ce], deleting: [de, Ce] });
        })), this.Transaction = (h = this, Kn(Nu.prototype, function(g, I, x, C, A) {
          var T = this;
          g !== "readonly" && I.forEach(function(N) {
            N = (N = x[N]) === null || N === void 0 ? void 0 : N.yProps, N && (I = I.concat(N.map(function(B) {
              return B.updatesTable;
            })));
          }), this.db = h, this.mode = g, this.storeNames = I, this.schema = x, this.chromeTransactionDurability = C, this.idbtrans = null, this.on = qn(this, "complete", "error", "abort"), this.parent = A || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new se(function(N, B) {
            T._resolve = N, T._reject = B;
          }), this._completion.then(function() {
            T.active = !1, T.on.complete.fire();
          }, function(N) {
            var B = T.active;
            return T.active = !1, T.on.error.fire(N), T.parent ? T.parent._reject(N) : B && T.idbtrans && T.idbtrans.abort(), ze(N);
          });
        })), this.Version = (y = this, Kn(Lu.prototype, function(g) {
          this.db = y, this._cfg = { version: g, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (w = this, Kn(ss.prototype, function(g, I, x) {
          if (this.db = w, this._ctx = { table: g, index: I === ":id" ? null : I, or: x }, this._cmp = this._ascending = Pe, this._descending = function(C, A) {
            return Pe(A, C);
          }, this._max = function(C, A) {
            return 0 < Pe(C, A) ? C : A;
          }, this._min = function(C, A) {
            return Pe(C, A) < 0 ? C : A;
          }, this._IDBKeyRange = w._deps.IDBKeyRange, !this._IDBKeyRange) throw new V.MissingAPI();
        })), this.on("versionchange", function(g) {
          0 < g.newVersion ? console.warn("Another connection wants to upgrade database '".concat(s.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(s.name, "'. Closing db now to resume the delete request.")), s.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(g) {
          !g.newVersion || g.newVersion < g.oldVersion ? console.warn("Dexie.delete('".concat(s.name, "') was blocked")) : console.warn("Upgrade '".concat(s.name, "' blocked by other connection holding version ").concat(g.oldVersion / 10));
        }), this._maxKey = Hn(r.IDBKeyRange), this._createTransaction = function(g, I, x, C) {
          return new s.Transaction(g, I, x, s._options.chromeTransactionDurability, C);
        }, this._fireOnBlocked = function(g) {
          s.on("blocked").fire(g), En.filter(function(I) {
            return I.name === s.name && I !== s && !I._state.vcFired;
          }).map(function(I) {
            return I.on("versionchange").fire(g);
          });
        }, this.use(Uu), this.use(Wu), this.use(Vu), this.use(qu), this.use(Ku);
        var O = new Proxy(this, { get: function(g, I, x) {
          if (I === "_vip") return !0;
          if (I === "table") return function(A) {
            return Dr(s.table(A), O);
          };
          var C = Reflect.get(g, I, x);
          return C instanceof es ? Dr(C, O) : I === "tables" ? C.map(function(A) {
            return Dr(A, O);
          }) : I === "_createTransaction" ? function() {
            return Dr(C.apply(this, arguments), O);
          } : C;
        } });
        this.vip = O, u.forEach(function(g) {
          return g(s);
        });
      }
      var Fr, Et = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Gu = ($i.prototype.subscribe = function(n, r, s) {
        return this._subscribe(n && typeof n != "function" ? n : { next: n, error: r, complete: s });
      }, $i.prototype[Et] = function() {
        return this;
      }, $i);
      function $i(n) {
        this._subscribe = n;
      }
      try {
        Fr = { indexedDB: l.indexedDB || l.mozIndexedDB || l.webkitIndexedDB || l.msIndexedDB, IDBKeyRange: l.IDBKeyRange || l.webkitIDBKeyRange };
      } catch {
        Fr = { indexedDB: null, IDBKeyRange: null };
      }
      function ws(n) {
        var r, s = !1, u = new Gu(function(c) {
          var d = dt(n), h, y = !1, w = {}, S = {}, O = { get closed() {
            return y;
          }, unsubscribe: function() {
            y || (y = !0, h && h.abort(), g && Wt.storagemutated.unsubscribe(x));
          } };
          c.start && c.start(O);
          var g = !1, I = function() {
            return _i(C);
          }, x = function(A) {
            Nr(w, A), Mi(S, w) && I();
          }, C = function() {
            var A, T, N;
            !y && Fr.indexedDB && (w = {}, A = {}, h && h.abort(), h = new AbortController(), N = function(B) {
              var q = _n();
              try {
                d && xn();
                var K = Ut(n, B);
                return K = d ? K.finally(Vt) : K;
              } finally {
                q && wn();
              }
            }(T = { subscr: A, signal: h.signal, requery: I, querier: n, trans: null }), Promise.resolve(N).then(function(B) {
              s = !0, r = B, y || T.signal.aborted || (w = {}, function(q) {
                for (var K in q) if (b(q, K)) return;
                return 1;
              }(S = A) || g || (Wt($n, x), g = !0), _i(function() {
                return !y && c.next && c.next(B);
              }));
            }, function(B) {
              s = !1, ["DatabaseClosedError", "AbortError"].includes(B?.name) || y || _i(function() {
                y || c.error && c.error(B);
              });
            }));
          };
          return setTimeout(I, 0), O;
        });
        return u.hasValue = function() {
          return s;
        }, u.getValue = function() {
          return r;
        }, u;
      }
      var un = qt;
      function Hi(n) {
        var r = Gt;
        try {
          Gt = !0, Wt.storagemutated.fire(n), ji(n, !0);
        } finally {
          Gt = r;
        }
      }
      k(un, o(o({}, Ke), { delete: function(n) {
        return new un(n, { addons: [] }).delete();
      }, exists: function(n) {
        return new un(n, { addons: [] }).open().then(function(r) {
          return r.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(n) {
        try {
          return r = un.dependencies, s = r.indexedDB, r = r.IDBKeyRange, (ki(s) ? Promise.resolve(s.databases()).then(function(u) {
            return u.map(function(c) {
              return c.name;
            }).filter(function(c) {
              return c !== br;
            });
          }) : Ri(s, r).toCollection().primaryKeys()).then(n);
        } catch {
          return ze(new V.MissingAPI());
        }
        var r, s;
      }, defineClass: function() {
        return function(n) {
          m(this, n);
        };
      }, ignoreTransaction: function(n) {
        return fe.trans ? rn(fe.transless, n) : n();
      }, vip: Di, async: function(n) {
        return function() {
          try {
            var r = qi(n.apply(this, arguments));
            return r && typeof r.then == "function" ? r : se.resolve(r);
          } catch (s) {
            return ze(s);
          }
        };
      }, spawn: function(n, r, s) {
        try {
          var u = qi(n.apply(s, r || []));
          return u && typeof u.then == "function" ? u : se.resolve(u);
        } catch (c) {
          return ze(c);
        }
      }, currentTransaction: { get: function() {
        return fe.trans || null;
      } }, waitFor: function(n, r) {
        return r = se.resolve(typeof n == "function" ? un.ignoreTransaction(n) : n).timeout(r || 6e4), fe.trans ? fe.trans.waitFor(r) : r;
      }, Promise: se, debug: { get: function() {
        return ye;
      }, set: function(n) {
        ve(n);
      } }, derive: M, extend: m, props: k, override: L, Events: qn, on: Wt, liveQuery: ws, extendObservabilitySet: Nr, getByKeyPath: te, setByKeyPath: J, delByKeyPath: function(n, r) {
        typeof r == "string" ? J(n, r, void 0) : "length" in r && [].map.call(r, function(s) {
          J(n, s, void 0);
        });
      }, shallowClone: ce, deepClone: _e, getObjectDiff: Ki, cmp: Pe, asap: H, minKey: -1 / 0, addons: [], connections: En, errnames: P, dependencies: Fr, cache: an, semVer: "4.2.0", version: "4.2.0".split(".").map(function(n) {
        return parseInt(n);
      }).reduce(function(n, r, s) {
        return n + r / Math.pow(10, 2 * s);
      }) })), un.maxKey = Hn(un.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Wt($n, function(n) {
        Gt || (n = new CustomEvent(Ci, { detail: n }), Gt = !0, dispatchEvent(n), Gt = !1);
      }), addEventListener(Ci, function(n) {
        n = n.detail, Gt || Hi(n);
      }));
      var Rn, Gt = !1, xs = function() {
      };
      return typeof BroadcastChannel < "u" && ((xs = function() {
        (Rn = new BroadcastChannel(Ci)).onmessage = function(n) {
          return n.data && Hi(n.data);
        };
      })(), typeof Rn.unref == "function" && Rn.unref(), Wt($n, function(n) {
        Gt || Rn.postMessage(n);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(n) {
        if (!qt.disableBfCache && n.persisted) {
          ye && console.debug("Dexie: handling persisted pagehide"), Rn?.close();
          for (var r = 0, s = En; r < s.length; r++) s[r].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(n) {
        !qt.disableBfCache && n.persisted && (ye && console.debug("Dexie: handling persisted pageshow"), xs(), Hi({ all: new st(-1 / 0, [[]]) }));
      })), se.rejectionMapper = function(n, r) {
        return !n || n instanceof Ft || n instanceof TypeError || n instanceof SyntaxError || !n.name || !z[n.name] ? n : (r = new z[n.name](r || n.message, n), "stack" in n && D(r, "stack", { get: function() {
          return this.inner.stack;
        } }), r);
      }, ve(ye), o(qt, Object.freeze({ __proto__: null, Dexie: qt, liveQuery: ws, Entity: Qo, cmp: Pe, PropModification: Un, replacePrefix: function(n, r) {
        return new Un({ replacePrefix: [n, r] });
      }, add: function(n) {
        return new Un({ add: n });
      }, remove: function(n) {
        return new Un({ remove: n });
      }, default: qt, RangeSet: st, mergeRanges: zn, rangesOverlap: fs }), { default: qt }), qt;
    });
  }(Dl)), Dl.exports;
}
var Ig = Pg();
const Fl = /* @__PURE__ */ xg(Ig), Rf = Symbol.for("Dexie"), Ml = globalThis[Rf] || (globalThis[Rf] = Fl);
if (Fl.semVer !== Ml.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Fl.semVer} and ${Ml.semVer}`);
const {
  liveQuery: yw,
  mergeRanges: vw,
  rangesOverlap: gw,
  RangeSet: bw,
  cmp: _w,
  Entity: ww,
  PropModification: xw,
  replacePrefix: Ew,
  add: Sw,
  remove: Cw,
  DexieYProvider: Ow
} = Ml;
function Ng(e) {
  return {
    createRecord: i,
    updateRecord: o,
    findChildRecords: f,
    findChildRecordsByTagName: p,
    findChildRecordsWithinDepthAndGivenTagName: m,
    findParentRecordsWithinDepthAndGivenTagName: _,
    findRecord: v,
    findRecordById: b,
    findAncestors: t,
    ensureRelationship: a,
    removeRelationship: l,
    db: e
  };
  async function t(R, D = {}) {
    const { depth: M = 1 / 0, tagNames: W = [] } = D, Q = W.length === 0, $ = [];
    let L = R;
    for (let H = 0; H < M && L.parent?.id; H++) {
      const te = await e.table(ii).get(L.parent.id);
      if (!te)
        break;
      $.push(te), L = te;
    }
    return Q ? $ : $.filter((H) => W.includes(H.tagName));
  }
  async function i(R, D) {
    const W = {
      ...{
        id: "",
        tagName: "SCL",
        attributes: [],
        parent: null,
        namespace: fh.default,
        value: "",
        children: []
      },
      ...R,
      id: crypto.randomUUID()
    };
    try {
      return await e.table(ii).add(W), D && await a(D, W), {
        ...W,
        parent: D ? { id: D.id, tagName: D.tagName } : null
      };
    } catch (Q) {
      const $ = {
        msg: "could not add record",
        db: e.name,
        table: R.tagName,
        recordToCreate: R,
        err: Q
      };
      throw console.error($), new Error(JSON.stringify($));
    }
  }
  async function o(R) {
    try {
      if (await e.table(ii).update(R.id, R) < 1) {
        const M = { msg: "nothing has been updated", record: R };
        throw console.error(M), new Error(JSON.stringify(M));
      }
    } catch (D) {
      console.error(D);
    }
  }
  async function a(R, D) {
    const M = R.children?.some((Q) => Q.id === D.id), W = D.parent?.id === R.id;
    if (M || (R.children.push({ id: D.id, tagName: D.tagName }), await o(R)), !W) {
      const Q = {
        id: R.id,
        tagName: R.tagName
      };
      D.parent = Q, await o(D);
    }
  }
  async function l(R, D) {
    D.parent = null, await o(D), R.children && (R.children = R.children.filter((M) => M.id !== D.id), await o(R));
  }
  async function f(R, D) {
    if (!R.children?.length)
      return [];
    let M = (await e.table(ii).bulkGet(R.children.map((W) => W.id))).filter(Boolean);
    return D?.tagNames && D.tagNames.length > 0 && (M = M.filter((W) => D?.tagNames?.includes(W.tagName))), D?.attrs && D.attrs.length > 0 && (M = M.filter(
      (W) => D.attrs.every(
        (Q) => W.attributes.some(
          ($) => $.name === Q.name && $.value === Q.value
        )
      )
    )), M;
  }
  async function p(R, D) {
    return (await f(R)).filter((W) => D.includes(W.tagName));
  }
  async function m(R, D, M) {
    const W = [];
    let Q = [R];
    for (let $ = 0; $ < D; $++) {
      const L = [];
      if (Q.length === 0)
        break;
      for (const U of Q) {
        const H = await f(U);
        H.length !== 0 && (L.push(...H), W.push(...H.filter((te) => M.includes(te.tagName))));
      }
      Q = [...L];
    }
    return W;
  }
  async function _(R, D, M = []) {
    const W = [];
    let Q = R;
    for (let $ = 0; $ < D; $++) {
      if (!Q.parent)
        return W;
      const L = await e.table(ii).get(Q.parent.id);
      if (!L)
        break;
      (M.length == 0 || M.length > 0 && M.includes(L.tagName)) && W.push(L), Q = L;
    }
    return W;
  }
  async function v(R) {
    const [D] = await k(R);
    return D;
  }
  async function b(R) {
    return await e.table(ii).get(R);
  }
  async function k(R) {
    try {
      const D = e.table(ii);
      let M = R.tagNames && R.tagNames.length > 0 ? D.where("tagName").anyOf(R.tagNames) : D.toCollection();
      return R.parent && (M = M.filter((Q) => Q.parent?.id === R.parent?.id)), R.attr && (M = M.filter((Q) => Q.attributes?.some(
        (L) => L.name === R.attr.name && L.value === R.attr.value
      ))), await M.toArray();
    } catch (D) {
      return console.error({ msg: "could not find records by options", options: R, err: D }), [];
    }
  }
}
function Rg(e, t) {
  return { dbRepository: e, dexie: t };
}
async function kg(e) {
  const t = new Wa(e);
  return await t.open(), Rg(Ng(t), t);
}
const wc = /* @__PURE__ */ lg("ied-browser/global", () => {
  let e = null;
  const t = /* @__PURE__ */ qe(""), i = /* @__PURE__ */ ia(), o = /* @__PURE__ */ qe([]), a = /* @__PURE__ */ qe(""), l = Le(() => o.value.find((v) => v.name === a.value) || null);
  async function f(v) {
    p(), e = await kg(v), i.value = e.dbRepository, t.value = v, a.value = "", await _();
  }
  function p() {
    e && (e.dexie.close(), e = null);
  }
  function m(v) {
    const b = o.value.find((k) => k.name === v);
    a.value = b?.name || "";
  }
  async function _() {
    if (!e) {
      o.value = [], a.value = "";
      return;
    }
    const v = await e.dexie.table(ii).where("tagName").equals("IED").toArray();
    o.value = v.map(Dg).filter((b) => !!b).sort((b, k) => b.name.localeCompare(k.name)), o.value.some((b) => b.name === a.value) || (a.value = "");
  }
  return {
    // states
    activeFilename: t,
    dbRepository: i,
    iedOptions: o,
    activeIedName: a,
    // getters
    activeIed: l,
    // actions
    initApp: f,
    closeDatabase: p,
    setActiveIedName: m,
    loadIeds: _
  };
});
function Dg(e) {
  const t = e.attributes.find((o) => o.name === "name")?.value;
  if (!t)
    return null;
  const i = e.attributes.find((o) => o.name === "manufacturer")?.value || "";
  return {
    id: e.id,
    name: t,
    // SETRULE: S-IEDs are identified by the manufacturer attribute value 'S_IED'. This is a SeptKit convention; the IEC 61850 standard does not define a manufacturer value for S-IEDs.
    kind: i === "S_IED" ? "S-IED" : "Implemented IED"
  };
}
function kf(e) {
  return typeof e == "string" ? `'${e}'` : new Fg().serialize(e);
}
const Fg = /* @__PURE__ */ function() {
  class e {
    #e = /* @__PURE__ */ new Map();
    compare(i, o) {
      const a = typeof i, l = typeof o;
      return a === "string" && l === "string" ? i.localeCompare(o) : a === "number" && l === "number" ? i - o : String.prototype.localeCompare.call(this.serialize(i, !0), this.serialize(o, !0));
    }
    serialize(i, o) {
      if (i === null) return "null";
      switch (typeof i) {
        case "string":
          return o ? i : `'${i}'`;
        case "bigint":
          return `${i}n`;
        case "object":
          return this.$object(i);
        case "function":
          return this.$function(i);
      }
      return String(i);
    }
    serializeObject(i) {
      const o = Object.prototype.toString.call(i);
      if (o !== "[object Object]") return this.serializeBuiltInType(o.length < 10 ? `unknown:${o}` : o.slice(8, -1), i);
      const a = i.constructor, l = a === Object || a === void 0 ? "" : a.name;
      if (l !== "" && globalThis[l] === a) return this.serializeBuiltInType(l, i);
      if (typeof i.toJSON == "function") {
        const f = i.toJSON();
        return l + (f !== null && typeof f == "object" ? this.$object(f) : `(${this.serialize(f)})`);
      }
      return this.serializeObjectEntries(l, Object.entries(i));
    }
    serializeBuiltInType(i, o) {
      const a = this["$" + i];
      if (a) return a.call(this, o);
      if (typeof o?.entries == "function") return this.serializeObjectEntries(i, o.entries());
      throw new Error(`Cannot serialize ${i}`);
    }
    serializeObjectEntries(i, o) {
      const a = Array.from(o).sort((f, p) => this.compare(f[0], p[0]));
      let l = `${i}{`;
      for (let f = 0; f < a.length; f++) {
        const [p, m] = a[f];
        l += `${this.serialize(p, !0)}:${this.serialize(m)}`, f < a.length - 1 && (l += ",");
      }
      return l + "}";
    }
    $object(i) {
      let o = this.#e.get(i);
      return o === void 0 && (this.#e.set(i, `#${this.#e.size}`), o = this.serializeObject(i), this.#e.set(i, o)), o;
    }
    $function(i) {
      const o = Function.prototype.toString.call(i);
      return o.slice(-15) === "[native code] }" ? `${i.name || ""}()[native]` : `${i.name}(${i.length})${o.replace(/\s*\n\s*/g, "")}`;
    }
    $Array(i) {
      let o = "[";
      for (let a = 0; a < i.length; a++) o += this.serialize(i[a]), a < i.length - 1 && (o += ",");
      return o + "]";
    }
    $Date(i) {
      try {
        return `Date(${i.toISOString()})`;
      } catch {
        return "Date(null)";
      }
    }
    $ArrayBuffer(i) {
      return `ArrayBuffer[${new Uint8Array(i).join(",")}]`;
    }
    $Set(i) {
      return `Set${this.$Array(Array.from(i).sort((o, a) => this.compare(o, a)))}`;
    }
    $Map(i) {
      return this.serializeObjectEntries("Map", i.entries());
    }
  }
  for (const t of ["Error", "RegExp", "URL"]) e.prototype["$" + t] = function(i) {
    return `${t}(${i})`;
  };
  for (const t of ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"]) e.prototype["$" + t] = function(i) {
    return `${t}[${i.join(",")}]`;
  };
  for (const t of ["BigInt64Array", "BigUint64Array"]) e.prototype["$" + t] = function(i) {
    return `${t}[${i.join("n,")}${i.length > 0 ? "n" : ""}]`;
  };
  return e;
}();
function Bl(e, t) {
  return e === t || kf(e) === kf(t);
}
function Mg(e, t, i) {
  const o = e.findIndex((p) => Bl(p, t)), a = e.findIndex((p) => Bl(p, i));
  if (o === -1 || a === -1) return [];
  const [l, f] = [o, a].sort((p, m) => p - m);
  return e.slice(l, f + 1);
}
function mi(e, t) {
  const i = typeof e == "string" && !t ? `${e}Context` : t, o = Symbol(i);
  return [(f) => {
    const p = ui(o, f);
    if (p || p === null) return p;
    throw new Error(`Injection \`${o.toString()}\` not found. Component must be used within ${Array.isArray(e) ? `one of the following components: ${e.join(", ")}` : `\`${e}\``}`);
  }, (f) => (cu(o, f), f)];
}
function ci() {
  let e = document.activeElement;
  if (e == null) return null;
  for (; e != null && e.shadowRoot != null && e.shadowRoot.activeElement != null; ) e = e.shadowRoot.activeElement;
  return e;
}
function xc(e, t, i) {
  const o = i.originalEvent.target, a = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: i
  });
  t && o.addEventListener(e, t, { once: !0 }), o.dispatchEvent(a);
}
function Bg(e) {
  return e == null;
}
function Lg(e, t) {
  var i;
  const o = /* @__PURE__ */ ia();
  return Zn(() => {
    o.value = e();
  }, {
    ...t,
    flush: (i = t?.flush) !== null && i !== void 0 ? i : "sync"
  }), /* @__PURE__ */ Ks(o);
}
function Ec(e, t) {
  return ta() ? (iu(e, t), !0) : !1;
}
// @__NO_SIDE_EFFECTS__
function Pa() {
  const e = /* @__PURE__ */ new Set(), t = (l) => {
    e.delete(l);
  };
  return {
    on: (l) => {
      e.add(l);
      const f = () => t(l);
      return Ec(f), { off: f };
    },
    off: t,
    trigger: (...l) => Promise.all(Array.from(e).map((f) => f(...l))),
    clear: () => {
      e.clear();
    }
  };
}
// @__NO_SIDE_EFFECTS__
function jg(e) {
  let t = !1, i;
  const o = ea(!0);
  return (...a) => (t || (i = o.run(() => e(...a)), t = !0), i);
}
const Zr = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const qg = (e) => typeof e < "u", Kg = Object.prototype.toString, Ug = (e) => Kg.call(e) === "[object Object]", Df = /* @__PURE__ */ Vg();
function Vg() {
  var e, t, i;
  return Zr && !!(!((e = window) === null || e === void 0 || (e = e.navigator) === null || e === void 0) && e.userAgent) && (/iP(?:ad|hone|od)/.test(window.navigator.userAgent) || ((t = window) === null || t === void 0 || (t = t.navigator) === null || t === void 0 ? void 0 : t.maxTouchPoints) > 2 && /iPad|Macintosh/.test((i = window) === null || i === void 0 ? void 0 : i.navigator.userAgent));
}
function sl(e) {
  return Array.isArray(e) ? e : [e];
}
function $g(e) {
  return Rt();
}
// @__NO_SIDE_EFFECTS__
function Hg(e) {
  if (!Zr) return e;
  let t = 0, i, o;
  const a = () => {
    t -= 1, o && t <= 0 && (o.stop(), i = void 0, o = void 0);
  };
  return (...l) => (t += 1, o || (o = ea(!0), i = o.run(() => e(...l))), Ec(a), i);
}
function ph(e, t = 1e4) {
  return Zl((i, o) => {
    let a = pn(e), l;
    const f = () => setTimeout(() => {
      a = pn(e), o();
    }, pn(t));
    return Ec(() => {
      clearTimeout(l);
    }), {
      get() {
        return i(), a;
      },
      set(p) {
        a = p, o(), clearTimeout(l), l = f();
      }
    };
  });
}
function Wg(e, t) {
  $g() && ua(e, t);
}
function Gg(e, t, i) {
  return At(e, t, {
    ...i,
    immediate: !0
  });
}
const Sc = Zr ? window : void 0;
function mo(e) {
  var t;
  const i = pn(e);
  return (t = i?.$el) !== null && t !== void 0 ? t : i;
}
function hh(...e) {
  const t = (o, a, l, f) => (o.addEventListener(a, l, f), () => o.removeEventListener(a, l, f)), i = Le(() => {
    const o = sl(pn(e[0])).filter((a) => a != null);
    return o.every((a) => typeof a != "string") ? o : void 0;
  });
  return Gg(() => {
    var o, a;
    return [
      (o = (a = i.value) === null || a === void 0 ? void 0 : a.map((l) => mo(l))) !== null && o !== void 0 ? o : [Sc].filter((l) => l != null),
      sl(pn(i.value ? e[1] : e[0])),
      sl(ue(i.value ? e[2] : e[1])),
      pn(i.value ? e[3] : e[2])
    ];
  }, ([o, a, l, f], p, m) => {
    if (!o?.length || !a?.length || !l?.length) return;
    const _ = Ug(f) ? { ...f } : f, v = o.flatMap((b) => a.flatMap((k) => l.map((R) => t(b, k, R, _))));
    m(() => {
      v.forEach((b) => b());
    });
  }, { flush: "post" });
}
function zg(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function Yg(...e) {
  let t, i, o = {};
  e.length === 3 ? (t = e[0], i = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, i = e[0], o = e[1]) : (t = e[0], i = e[1]) : (t = !0, i = e[0]);
  const { target: a = Sc, eventName: l = "keydown", passive: f = !1, dedupe: p = !1 } = o, m = zg(t);
  return hh(a, l, (v) => {
    v.repeat && pn(p) || m(v) && i(v);
  }, f);
}
function Xg(e) {
  return JSON.parse(JSON.stringify(e));
}
// @__NO_SIDE_EFFECTS__
function Ys(e, t, i, o = {}) {
  var a, l;
  const { clone: f = !1, passive: p = !1, eventName: m, deep: _ = !1, defaultValue: v, shouldEmit: b } = o, k = Rt(), R = i || k?.emit || (k == null || (a = k.$emit) === null || a === void 0 ? void 0 : a.bind(k)) || (k == null || (l = k.proxy) === null || l === void 0 || (l = l.$emit) === null || l === void 0 ? void 0 : l.bind(k?.proxy));
  let D = m;
  t || (t = "modelValue"), D = D || `update:${t.toString()}`;
  const M = ($) => f ? typeof f == "function" ? f($) : Xg($) : $, W = () => qg(e[t]) ? M(e[t]) : v, Q = ($) => {
    b ? b($) && R(D, $) : R(D, $);
  };
  if (p) {
    const $ = /* @__PURE__ */ qe(W());
    let L = !1;
    return At(() => e[t], (U) => {
      L || (L = !0, $.value = M(U), Lt(() => L = !1));
    }), At($, (U) => {
      !L && (U !== e[t] || _) && Q(U);
    }, { deep: _ }), $;
  } else return Le({
    get() {
      return W();
    },
    set($) {
      Q($);
    }
  });
}
function Cc(e) {
  return e ? e.flatMap((t) => t.type === Tt ? Cc(t.children) : [t]) : [];
}
const [vu, Tw] = /* @__PURE__ */ mi("ConfigProvider");
function al(e) {
  if (e === null || typeof e != "object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return t !== null && t !== Object.prototype && Object.getPrototypeOf(t) !== null || Symbol.iterator in e ? !1 : Symbol.toStringTag in e ? Object.prototype.toString.call(e) === "[object Module]" : !0;
}
function Ll(e, t, i = ".", o) {
  if (!al(t))
    return Ll(e, {}, i, o);
  const a = { ...t };
  for (const l of Object.keys(e)) {
    if (l === "__proto__" || l === "constructor")
      continue;
    const f = e[l];
    f != null && (o && o(a, l, f, i) || (Array.isArray(f) && Array.isArray(a[l]) ? a[l] = [...f, ...a[l]] : al(f) && al(a[l]) ? a[l] = Ll(
      f,
      a[l],
      (i ? `${i}.` : "") + l.toString(),
      o
    ) : a[l] = f));
  }
  return a;
}
function Qg(e) {
  return (...t) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    t.reduce((i, o) => Ll(i, o, "", e), {})
  );
}
const Jg = Qg(), Zg = /* @__PURE__ */ Hg(() => {
  const e = /* @__PURE__ */ qe(/* @__PURE__ */ new Map()), t = /* @__PURE__ */ qe(), i = Le(() => {
    for (const f of e.value.values()) if (f) return !0;
    return !1;
  }), o = vu({ scrollBody: /* @__PURE__ */ qe(!0) });
  let a = null;
  const l = () => {
    document.body.style.paddingRight = "", document.body.style.marginRight = "", document.body.style.pointerEvents = "", document.documentElement.style.removeProperty("--scrollbar-width"), document.body.style.overflow = t.value ?? "", Df && a?.(), t.value = void 0;
  };
  return At(i, (f, p) => {
    if (!Zr) return;
    if (!f) {
      p && l();
      return;
    }
    t.value === void 0 && (t.value = document.body.style.overflow);
    const m = window.innerWidth - document.documentElement.clientWidth, _ = {
      padding: m,
      margin: 0
    }, v = o.scrollBody?.value ? typeof o.scrollBody.value == "object" ? Jg({
      padding: o.scrollBody.value.padding === !0 ? m : o.scrollBody.value.padding,
      margin: o.scrollBody.value.margin === !0 ? m : o.scrollBody.value.margin
    }, _) : _ : {
      padding: 0,
      margin: 0
    };
    m > 0 && (document.body.style.paddingRight = typeof v.padding == "number" ? `${v.padding}px` : String(v.padding), document.body.style.marginRight = typeof v.margin == "number" ? `${v.margin}px` : String(v.margin), document.documentElement.style.setProperty("--scrollbar-width", `${m}px`), document.body.style.overflow = "hidden"), Df && (a = hh(document, "touchmove", (b) => tb(b), { passive: !1 })), Lt(() => {
      i.value && (document.body.style.pointerEvents = "none", document.body.style.overflow = "hidden");
    });
  }, {
    immediate: !0,
    flush: "sync"
  }), e;
});
function eb(e) {
  const t = Math.random().toString(36).substring(2, 7), i = Zg();
  i.value.set(t, e ?? !1);
  const o = Le({
    get: () => i.value.get(t) ?? !1,
    set: (a) => i.value.set(t, a)
  });
  return Wg(() => {
    i.value.delete(t);
  }), o;
}
function mh(e) {
  const t = window.getComputedStyle(e);
  if (t.overflowX === "scroll" || t.overflowY === "scroll" || t.overflowX === "auto" && e.clientWidth < e.scrollWidth || t.overflowY === "auto" && e.clientHeight < e.scrollHeight) return !0;
  {
    const i = e.parentNode;
    return !(i instanceof Element) || i.tagName === "BODY" ? !1 : mh(i);
  }
}
function tb(e) {
  const t = e || window.event, i = t.target;
  return i instanceof Element && mh(i) ? !1 : t.touches.length > 1 ? !0 : (t.preventDefault && t.cancelable && t.preventDefault(), !1);
}
function yh(e) {
  const t = vu({ dir: /* @__PURE__ */ qe("ltr") });
  return Le(() => e?.value || t.dir?.value || "ltr");
}
function nb(e) {
  const t = Rt(), i = t?.type.emits, o = {};
  return i?.length || console.warn(`No emitted event found. Please check component: ${t?.type.__name}`), i?.forEach((a) => {
    o[Ao(Nt(a))] = (...l) => e(a, ...l);
  }), o;
}
function rb(e) {
  const t = Le(() => ue(e)), i = Le(() => new Intl.Collator("en", {
    usage: "search",
    ...t.value
  }));
  return {
    startsWith: (f, p) => p.length === 0 ? !0 : (f = f.normalize("NFC"), p = p.normalize("NFC"), i.value.compare(f.slice(0, p.length), p) === 0),
    endsWith: (f, p) => p.length === 0 ? !0 : (f = f.normalize("NFC"), p = p.normalize("NFC"), i.value.compare(f.slice(-p.length), p) === 0),
    contains: (f, p) => {
      if (p.length === 0) return !0;
      f = f.normalize("NFC"), p = p.normalize("NFC");
      let m = 0;
      const _ = p.length;
      for (; m + _ <= f.length; m++) {
        const v = f.slice(m, m + _);
        if (i.value.compare(p, v) === 0) return !0;
      }
      return !1;
    }
  };
}
let ul = 0;
function ib() {
  Zn((e) => {
    if (!Zr) return;
    const t = document.querySelectorAll("[data-reka-focus-guard]");
    document.body.insertAdjacentElement("afterbegin", t[0] ?? Ff()), document.body.insertAdjacentElement("beforeend", t[1] ?? Ff()), ul++, e(() => {
      ul === 1 && document.querySelectorAll("[data-reka-focus-guard]").forEach((i) => i.remove()), ul--;
    });
  });
}
function Ff() {
  const e = document.createElement("span");
  return e.setAttribute("data-reka-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e;
}
function ob(e) {
  return Le(() => pn(e) ? !!mo(e)?.closest("form") : !0);
}
function rr() {
  const e = Rt(), t = /* @__PURE__ */ qe(), i = Le(() => o());
  aa(() => {
    i.value !== o() && Ed(t);
  });
  function o() {
    return t.value && "$el" in t.value && ["#text", "#comment"].includes(t.value.$el.nodeName) ? t.value.$el.nextElementSibling : mo(t);
  }
  const a = Object.assign({}, e.exposed), l = {};
  for (const p in e.props) Object.defineProperty(l, p, {
    enumerable: !0,
    configurable: !0,
    get: () => e.props[p]
  });
  if (Object.keys(a).length > 0) for (const p in a) Object.defineProperty(l, p, {
    enumerable: !0,
    configurable: !0,
    get: () => a[p]
  });
  Object.defineProperty(l, "$el", {
    enumerable: !0,
    configurable: !0,
    get: () => e.vnode.el
  }), e.exposed = l;
  function f(p) {
    if (t.value = p, !!p && (Object.defineProperty(l, "$el", {
      enumerable: !0,
      configurable: !0,
      get: () => p instanceof Element ? p : p.$el
    }), !(p instanceof Element) && !Object.hasOwn(p, "$el"))) {
      const m = p.$.exposed, _ = Object.assign({}, l);
      for (const v in m) Object.defineProperty(_, v, {
        enumerable: !0,
        configurable: !0,
        get: () => m[v]
      });
      e.exposed = _;
    }
  }
  return {
    forwardRef: f,
    currentRef: t,
    currentElement: i
  };
}
function vh(e) {
  const t = Rt(), i = Object.keys(t?.type.props ?? {}).reduce((a, l) => {
    const f = (t?.type.props[l]).default;
    return f !== void 0 && (a[l] = f), a;
  }, {}), o = /* @__PURE__ */ ec(e);
  return Le(() => {
    const a = {}, l = t?.vnode.props ?? {};
    return Object.keys(l).forEach((f) => {
      a[Nt(f)] = l[f];
    }), Object.keys({
      ...i,
      ...a
    }).reduce((f, p) => (o.value[p] !== void 0 && (f[p] = o.value[p]), f), {});
  });
}
function sb(e, t) {
  const i = vh(e), o = t ? nb(t) : {};
  return Le(() => ({
    ...i.value,
    ...o
  }));
}
var ab = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, wo = /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ new WeakMap(), xa = {}, ll = 0, gh = function(e) {
  return e && (e.host || gh(e.parentNode));
}, ub = function(e, t) {
  return t.map(function(i) {
    if (e.contains(i))
      return i;
    var o = gh(i);
    return o && e.contains(o) ? o : (console.error("aria-hidden", i, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(i) {
    return !!i;
  });
}, lb = function(e, t, i, o) {
  var a = ub(t, Array.isArray(e) ? e : [e]);
  xa[i] || (xa[i] = /* @__PURE__ */ new WeakMap());
  var l = xa[i], f = [], p = /* @__PURE__ */ new Set(), m = new Set(a), _ = function(b) {
    !b || p.has(b) || (p.add(b), _(b.parentNode));
  };
  a.forEach(_);
  var v = function(b) {
    !b || m.has(b) || Array.prototype.forEach.call(b.children, function(k) {
      if (p.has(k))
        v(k);
      else
        try {
          var R = k.getAttribute(o), D = R !== null && R !== "false", M = (wo.get(k) || 0) + 1, W = (l.get(k) || 0) + 1;
          wo.set(k, M), l.set(k, W), f.push(k), M === 1 && D && wa.set(k, !0), W === 1 && k.setAttribute(i, "true"), D || k.setAttribute(o, "true");
        } catch (Q) {
          console.error("aria-hidden: cannot operate on ", k, Q);
        }
    });
  };
  return v(t), p.clear(), ll++, function() {
    f.forEach(function(b) {
      var k = wo.get(b) - 1, R = l.get(b) - 1;
      wo.set(b, k), l.set(b, R), k || (wa.has(b) || b.removeAttribute(o), wa.delete(b)), R || b.removeAttribute(i);
    }), ll--, ll || (wo = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ new WeakMap(), xa = {});
  };
}, cb = function(e, t, i) {
  i === void 0 && (i = "data-aria-hidden");
  var o = Array.from(Array.isArray(e) ? e : [e]), a = ab(e);
  return a ? (o.push.apply(o, Array.from(a.querySelectorAll("[aria-live], script"))), lb(o, a, i, "aria-hidden")) : function() {
    return null;
  };
};
function fb(e) {
  let t;
  At(() => mo(e), (i) => {
    let o = !1;
    try {
      o = !!i?.closest("[popover]:not(:popover-open)");
    } catch {
    }
    i && !o ? t = cb(i) : t && t();
  }), dr(() => {
    t && t();
  });
}
let db = 0;
function Oc(e, t = "reka") {
  let i;
  return "useId" in ng ? i = Kd?.() : i = vu({ useId: void 0 }).useId?.() ?? `${++db}`, t ? `${t}-${i}` : i;
}
function pb() {
  return {
    ALT: "Alt",
    ARROW_DOWN: "ArrowDown",
    ARROW_LEFT: "ArrowLeft",
    ARROW_RIGHT: "ArrowRight",
    ARROW_UP: "ArrowUp",
    BACKSPACE: "Backspace",
    CAPS_LOCK: "CapsLock",
    CONTROL: "Control",
    DELETE: "Delete",
    END: "End",
    ENTER: "Enter",
    ESCAPE: "Escape",
    F1: "F1",
    F10: "F10",
    F11: "F11",
    F12: "F12",
    F2: "F2",
    F3: "F3",
    F4: "F4",
    F5: "F5",
    F6: "F6",
    F7: "F7",
    F8: "F8",
    F9: "F9",
    HOME: "Home",
    META: "Meta",
    PAGE_DOWN: "PageDown",
    PAGE_UP: "PageUp",
    SHIFT: "Shift",
    SPACE: " ",
    TAB: "Tab",
    CTRL: "Control",
    ASTERISK: "*",
    SPACE_CODE: "Space"
  };
}
function hb(e) {
  const t = /* @__PURE__ */ qe(), i = Le(() => t.value?.width ?? 0), o = Le(() => t.value?.height ?? 0);
  return In(() => {
    const a = mo(e);
    if (a) {
      t.value = {
        width: a.offsetWidth,
        height: a.offsetHeight
      };
      const l = new ResizeObserver((f) => {
        if (!Array.isArray(f) || !f.length) return;
        const p = f[0];
        let m, _;
        if ("borderBoxSize" in p) {
          const v = p.borderBoxSize, b = Array.isArray(v) ? v[0] : v;
          m = b.inlineSize, _ = b.blockSize;
        } else
          m = a.offsetWidth, _ = a.offsetHeight;
        t.value = {
          width: m,
          height: _
        };
      });
      return l.observe(a, { box: "border-box" }), () => l.unobserve(a);
    } else t.value = void 0;
  }), {
    width: i,
    height: o
  };
}
function mb(e, t) {
  const i = /* @__PURE__ */ qe(e);
  function o(l) {
    return t[i.value][l] ?? i.value;
  }
  return {
    state: i,
    dispatch: (l) => {
      i.value = o(l);
    }
  };
}
function yb(e) {
  const t = ph("", 1e3);
  return {
    search: t,
    handleTypeaheadSearch: (a, l) => {
      t.value = t.value + a;
      {
        const f = ci(), p = l.map((k) => ({
          ...k,
          textValue: k.value?.textValue ?? k.ref.textContent?.trim() ?? ""
        })), m = p.find((k) => k.ref === f), _ = p.map((k) => k.textValue), v = gb(_, t.value, m?.textValue), b = p.find((k) => k.textValue === v);
        return b && b.ref.focus(), b?.ref;
      }
    },
    resetTypeahead: () => {
      t.value = "";
    }
  };
}
function vb(e, t) {
  return e.map((i, o) => e[(t + o) % e.length]);
}
function gb(e, t, i) {
  const a = t.length > 1 && Array.from(t).every((_) => _ === t[0]) ? t[0] : t, l = i ? e.indexOf(i) : -1;
  let f = vb(e, Math.max(l, 0));
  a.length === 1 && (f = f.filter((_) => _ !== i));
  const m = f.find((_) => _.toLowerCase().startsWith(a.toLowerCase()));
  return m !== i ? m : void 0;
}
function bb(e, t) {
  const i = /* @__PURE__ */ qe({}), o = /* @__PURE__ */ qe("none"), a = /* @__PURE__ */ qe(e), l = e.value ? "mounted" : "unmounted";
  let f;
  const p = t.value?.ownerDocument.defaultView ?? Sc, { state: m, dispatch: _ } = mb(l, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: { MOUNT: "mounted" }
  }), v = (W) => {
    if (Zr) {
      const Q = new CustomEvent(W, {
        bubbles: !1,
        cancelable: !1
      });
      t.value?.dispatchEvent(Q);
    }
  };
  At(e, async (W, Q) => {
    const $ = Q !== W;
    if (await Lt(), $) {
      const L = o.value, U = Ea(t.value);
      W ? (_("MOUNT"), v("enter"), U === "none" && v("after-enter")) : U === "none" || U === "undefined" || i.value?.display === "none" ? (_("UNMOUNT"), v("leave"), v("after-leave")) : Q && L !== U ? (_("ANIMATION_OUT"), v("leave")) : (_("UNMOUNT"), v("after-leave"));
    }
  }, { immediate: !0 });
  const b = (W) => {
    const Q = Ea(t.value), $ = Q.includes(CSS.escape(W.animationName)), L = m.value === "mounted" ? "enter" : "leave";
    if (W.target === t.value && $ && (v(`after-${L}`), _("ANIMATION_END"), !a.value)) {
      const U = t.value.style.animationFillMode;
      t.value.style.animationFillMode = "forwards", f = p?.setTimeout(() => {
        t.value?.style.animationFillMode === "forwards" && (t.value.style.animationFillMode = U);
      });
    }
    W.target === t.value && Q === "none" && _("ANIMATION_END");
  }, k = (W) => {
    W.target === t.value && (o.value = Ea(t.value));
  }, R = At(t, (W, Q) => {
    W ? (i.value = getComputedStyle(W), W.addEventListener("animationstart", k), W.addEventListener("animationcancel", b), W.addEventListener("animationend", b)) : (_("ANIMATION_END"), f !== void 0 && p?.clearTimeout(f), Q?.removeEventListener("animationstart", k), Q?.removeEventListener("animationcancel", b), Q?.removeEventListener("animationend", b));
  }, { immediate: !0 }), D = At(m, () => {
    const W = Ea(t.value);
    o.value = m.value === "mounted" ? W : "none";
  });
  return dr(() => {
    R(), D();
  }), { isPresent: Le(() => ["mounted", "unmountSuspended"].includes(m.value)) };
}
function Ea(e) {
  return e && getComputedStyle(e).animationName || "none";
}
var _b = /* @__PURE__ */ rt({
  name: "Presence",
  props: {
    present: {
      type: Boolean,
      required: !0
    },
    forceMount: { type: Boolean }
  },
  slots: {},
  setup(e, { slots: t, expose: i }) {
    const { present: o, forceMount: a } = /* @__PURE__ */ fo(e), l = /* @__PURE__ */ qe(), { isPresent: f } = bb(o, l);
    i({ present: f });
    let p = t.default({ present: f.value });
    p = Cc(p || []);
    const m = Rt();
    if (p && p?.length > 1) {
      const _ = m?.parent?.type.name ? `<${m.parent.type.name} />` : "component";
      throw new Error([
        `Detected an invalid children for \`${_}\` for  \`Presence\` component.`,
        "",
        "Note: Presence works similarly to `v-if` directly, but it waits for animation/transition to finished before unmounting. So it expect only one direct child of valid VNode type.",
        "You can apply a few solutions:",
        ["Provide a single child element so that `presence` directive attach correctly.", "Ensure the first child is an actual element instead of a raw text node or comment node."].map((v) => `  - ${v}`).join(`
`)
      ].join(`
`));
    }
    return () => a.value || o.value || f.value ? Qn(t.default({ present: f.value })[0], { ref: (_) => {
      const v = mo(_);
      return typeof v?.hasAttribute > "u" || (v?.hasAttribute("data-reka-popper-content-wrapper") ? l.value = v.firstElementChild : l.value = v), v;
    } }) : null;
  }
});
const jl = /* @__PURE__ */ rt({
  name: "PrimitiveSlot",
  inheritAttrs: !1,
  setup(e, { attrs: t, slots: i }) {
    return () => {
      if (!i.default) return null;
      const o = Cc(i.default()), a = o.findIndex((m) => m.type !== It);
      if (a === -1) return o;
      const l = o[a];
      delete l.props?.ref;
      const f = l.props ? Qt(t, l.props) : t, p = er({
        ...l,
        props: {}
      }, f);
      return o.length === 1 ? p : (o[a] = p, o);
    };
  }
}), wb = [
  "area",
  "img",
  "input"
], nn = /* @__PURE__ */ rt({
  name: "Primitive",
  inheritAttrs: !1,
  props: {
    asChild: {
      type: Boolean,
      default: !1
    },
    as: {
      type: [String, Object],
      default: "div"
    }
  },
  setup(e, { attrs: t, slots: i }) {
    const o = e.asChild ? "template" : e.as;
    return typeof o == "string" && wb.includes(o) ? () => Qn(o, t) : o !== "template" ? () => Qn(e.as, t, { default: i.default }) : () => Qn(jl, t, { default: i.default });
  }
});
function di() {
  const e = /* @__PURE__ */ qe(), t = Le(() => ["#text", "#comment"].includes(e.value?.$el.nodeName) ? e.value?.$el.nextElementSibling : mo(e));
  return {
    primitiveElement: e,
    currentElement: t
  };
}
const xb = "dismissableLayer.pointerDownOutside", Eb = "dismissableLayer.focusOutside";
function bh(e, t) {
  if (!(t instanceof Element)) return !1;
  const i = t.closest("[data-dismissable-layer]"), o = e.dataset.dismissableLayer === "" ? e : e.querySelector("[data-dismissable-layer]"), a = Array.from(e.ownerDocument.querySelectorAll("[data-dismissable-layer]"));
  return !!(i && (o === i || a.indexOf(o) < a.indexOf(i)));
}
function Sb(e, t, i = !0) {
  const o = t?.value?.ownerDocument ?? globalThis?.document, a = /* @__PURE__ */ qe(!1), l = /* @__PURE__ */ qe(() => {
  });
  return Zn((f) => {
    if (!Zr || !pn(i)) return;
    const p = async (_) => {
      const v = _.target;
      if (!(!t?.value || !v)) {
        if (bh(t.value, v)) {
          a.value = !1;
          return;
        }
        if (_.target && !a.value) {
          let k = function() {
            xc(xb, e, b);
          };
          const b = { originalEvent: _ };
          _.pointerType === "touch" ? (o.removeEventListener("click", l.value), l.value = k, o.addEventListener("click", l.value, { once: !0 })) : k();
        } else o.removeEventListener("click", l.value);
        a.value = !1;
      }
    }, m = window.setTimeout(() => {
      o.addEventListener("pointerdown", p);
    }, 0);
    f(() => {
      window.clearTimeout(m), o.removeEventListener("pointerdown", p), o.removeEventListener("click", l.value);
    });
  }), { onPointerDownCapture: () => {
    pn(i) && (a.value = !0);
  } };
}
function Cb(e, t, i = !0) {
  const o = t?.value?.ownerDocument ?? globalThis?.document, a = /* @__PURE__ */ qe(!1);
  return Zn((l) => {
    if (!Zr || !pn(i)) return;
    const f = async (p) => {
      if (!t?.value) return;
      await Lt(), await Lt();
      const m = p.target;
      !t.value || !m || bh(t.value, m) || p.target && !a.value && xc(Eb, e, { originalEvent: p });
    };
    o.addEventListener("focusin", f), l(() => o.removeEventListener("focusin", f));
  }), {
    onFocusCapture: () => {
      pn(i) && (a.value = !0);
    },
    onBlurCapture: () => {
      pn(i) && (a.value = !1);
    }
  };
}
const Dn = /* @__PURE__ */ co({
  layersRoot: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  originalBodyPointerEvents: void 0,
  branches: /* @__PURE__ */ new Set()
});
var Ob = /* @__PURE__ */ rt({
  __name: "DismissableLayer",
  props: {
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside",
    "dismiss"
  ],
  setup(e, { emit: t }) {
    const i = e, o = t, { forwardRef: a, currentElement: l } = rr(), f = Le(() => l.value?.ownerDocument ?? globalThis.document), p = Le(() => Dn.layersRoot), m = Le(() => l.value ? Array.from(p.value).indexOf(l.value) : -1), _ = Le(() => Dn.layersWithOutsidePointerEventsDisabled.size > 0), v = Le(() => {
      const R = Array.from(p.value), [D] = [...Dn.layersWithOutsidePointerEventsDisabled].slice(-1), M = R.indexOf(D);
      return m.value >= M;
    }), b = Sb(async (R) => {
      const D = [...Dn.branches].some((M) => M?.contains(R.target));
      !v.value || D || (o("pointerDownOutside", R), o("interactOutside", R), await Lt(), R.defaultPrevented || o("dismiss"));
    }, l), k = Cb((R) => {
      [...Dn.branches].some((M) => M?.contains(R.target)) || (o("focusOutside", R), o("interactOutside", R), R.defaultPrevented || o("dismiss"));
    }, l);
    return Yg("Escape", (R) => {
      m.value === p.value.size - 1 && (o("escapeKeyDown", R), R.defaultPrevented || o("dismiss"));
    }), Zn((R) => {
      l.value && (i.disableOutsidePointerEvents && (Dn.layersWithOutsidePointerEventsDisabled.size === 0 && (Dn.originalBodyPointerEvents = f.value.body.style.pointerEvents, f.value.body.style.pointerEvents = "none"), Dn.layersWithOutsidePointerEventsDisabled.add(l.value)), p.value.add(l.value), R(() => {
        i.disableOutsidePointerEvents && Dn.layersWithOutsidePointerEventsDisabled.size === 1 && !Bg(Dn.originalBodyPointerEvents) && (f.value.body.style.pointerEvents = Dn.originalBodyPointerEvents);
      }));
    }), Zn((R) => {
      R(() => {
        l.value && (p.value.delete(l.value), Dn.layersWithOutsidePointerEventsDisabled.delete(l.value));
      });
    }), (R, D) => (Qe(), pt(ue(nn), {
      ref: ue(a),
      "as-child": R.asChild,
      as: R.as,
      "data-dismissable-layer": "",
      style: lo({ pointerEvents: _.value ? v.value ? "auto" : "none" : void 0 }),
      onFocusCapture: ue(k).onFocusCapture,
      onBlurCapture: ue(k).onBlurCapture,
      onPointerdownCapture: ue(b).onPointerDownCapture
    }, {
      default: Xe(() => [St(R.$slots, "default")]),
      _: 3
    }, 8, [
      "as-child",
      "as",
      "style",
      "onFocusCapture",
      "onBlurCapture",
      "onPointerdownCapture"
    ]));
  }
}), Tb = Ob;
const Ab = /* @__PURE__ */ jg(() => /* @__PURE__ */ qe([]));
function Pb() {
  const e = Ab();
  return {
    add(t) {
      const i = e.value[0];
      t !== i && i?.pause(), e.value = Mf(e.value, t), e.value.unshift(t);
    },
    remove(t) {
      e.value = Mf(e.value, t), e.value[0]?.resume();
    }
  };
}
function Mf(e, t) {
  const i = [...e], o = i.indexOf(t);
  return o !== -1 && i.splice(o, 1), i;
}
const cl = "focusScope.autoFocusOnMount", fl = "focusScope.autoFocusOnUnmount", Bf = {
  bubbles: !1,
  cancelable: !0
};
function Ib(e, { select: t = !1 } = {}) {
  const i = ci();
  for (const o of e)
    if (oi(o, { select: t }), ci() !== i) return !0;
}
function Nb(e) {
  const t = _h(e), i = Lf(t, e), o = Lf(t.reverse(), e);
  return [i, o];
}
function _h(e) {
  const t = [], i = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, { acceptNode: (o) => {
    const a = o.tagName === "INPUT" && o.type === "hidden";
    return o.disabled || o.hidden || a ? NodeFilter.FILTER_SKIP : o.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
  } });
  for (; i.nextNode(); ) t.push(i.currentNode);
  return t;
}
function Lf(e, t) {
  for (const i of e) if (!Rb(i, { upTo: t })) return i;
}
function Rb(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden") return !0;
  for (; e; ) {
    if (t !== void 0 && e === t) return !1;
    if (getComputedStyle(e).display === "none") return !0;
    e = e.parentElement;
  }
  return !1;
}
function kb(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function oi(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const i = ci();
    e.focus({ preventScroll: !0 }), e !== i && kb(e) && t && e.select();
  }
}
var Db = /* @__PURE__ */ rt({
  __name: "FocusScope",
  props: {
    loop: {
      type: Boolean,
      required: !1,
      default: !1
    },
    trapped: {
      type: Boolean,
      required: !1,
      default: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["mountAutoFocus", "unmountAutoFocus"],
  setup(e, { emit: t }) {
    const i = e, o = t, { currentRef: a, currentElement: l } = rr(), f = /* @__PURE__ */ qe(null), p = Pb(), m = /* @__PURE__ */ co({
      paused: !1,
      pause() {
        this.paused = !0;
      },
      resume() {
        this.paused = !1;
      }
    });
    Zn((v) => {
      if (!Zr) return;
      const b = l.value;
      if (!i.trapped) return;
      function k(W) {
        if (m.paused || !b) return;
        const Q = W.target;
        b.contains(Q) ? f.value = Q : oi(f.value, { select: !0 });
      }
      function R(W) {
        if (m.paused || !b) return;
        const Q = W.relatedTarget;
        Q !== null && (b.contains(Q) || oi(f.value, { select: !0 }));
      }
      function D(W) {
        const Q = f.value;
        if (Q === null || !W.some((U) => U.removedNodes.length > 0)) return;
        b.contains(Q) || oi(b);
      }
      document.addEventListener("focusin", k), document.addEventListener("focusout", R);
      const M = new MutationObserver(D);
      b && M.observe(b, {
        childList: !0,
        subtree: !0
      }), v(() => {
        document.removeEventListener("focusin", k), document.removeEventListener("focusout", R), M.disconnect();
      });
    }), Zn(async (v) => {
      const b = l.value;
      if (await Lt(), !b) return;
      p.add(m);
      const k = ci();
      if (!b.contains(k)) {
        const D = new CustomEvent(cl, Bf);
        b.addEventListener(cl, (M) => o("mountAutoFocus", M)), b.dispatchEvent(D), D.defaultPrevented || (Ib(_h(b), { select: !0 }), ci() === k && oi(b));
      }
      v(() => {
        b.removeEventListener(cl, (W) => o("mountAutoFocus", W));
        const D = new CustomEvent(fl, Bf), M = (W) => {
          o("unmountAutoFocus", W);
        };
        b.addEventListener(fl, M), b.dispatchEvent(D), setTimeout(() => {
          D.defaultPrevented || oi(k ?? document.body, { select: !0 }), b.removeEventListener(fl, M), p.remove(m);
        }, 0);
      });
    });
    function _(v) {
      if (!i.loop && !i.trapped || m.paused) return;
      const b = v.key === "Tab" && !v.altKey && !v.ctrlKey && !v.metaKey, k = ci();
      if (b && k) {
        const R = v.currentTarget, [D, M] = Nb(R);
        D && M ? !v.shiftKey && k === M ? (v.preventDefault(), i.loop && oi(D, { select: !0 })) : v.shiftKey && k === D && (v.preventDefault(), i.loop && oi(M, { select: !0 })) : k === R && v.preventDefault();
      }
    }
    return (v, b) => (Qe(), pt(ue(nn), {
      ref_key: "currentRef",
      ref: a,
      tabindex: "-1",
      "as-child": v.asChild,
      as: v.as,
      onKeydown: _
    }, {
      default: Xe(() => [St(v.$slots, "default")]),
      _: 3
    }, 8, ["as-child", "as"]));
  }
}), Fb = Db;
const jf = "data-reka-collection-item";
function Tc(e = {}) {
  const { key: t = "", isProvider: i = !1 } = e, o = `${t}CollectionProvider`;
  let a;
  i ? (a = {
    collectionRef: /* @__PURE__ */ qe(),
    itemMap: /* @__PURE__ */ qe(/* @__PURE__ */ new Map())
  }, cu(o, a)) : a = ui(o);
  const l = (v = !1) => {
    const b = a.collectionRef.value;
    if (!b) return [];
    const k = Array.from(b.querySelectorAll(`[${jf}]`)), D = Array.from(a.itemMap.value.values()).sort((M, W) => k.indexOf(M.ref) - k.indexOf(W.ref));
    return v ? D : D.filter((M) => M.ref.dataset.disabled !== "");
  }, f = /* @__PURE__ */ rt({
    name: "CollectionSlot",
    inheritAttrs: !1,
    setup(v, { slots: b, attrs: k }) {
      const { primitiveElement: R, currentElement: D } = di();
      return At(D, () => {
        a.collectionRef.value = D.value;
      }), () => Qn(jl, {
        ref: R,
        ...k
      }, b);
    }
  }), p = /* @__PURE__ */ rt({
    name: "CollectionItem",
    inheritAttrs: !1,
    props: { value: { validator: () => !0 } },
    setup(v, { slots: b, attrs: k }) {
      const { primitiveElement: R, currentElement: D } = di();
      return Zn((M) => {
        if (D.value) {
          const W = ra(D.value);
          a.itemMap.value.set(W, {
            ref: D.value,
            value: v.value
          }), M(() => a.itemMap.value.delete(W));
        }
      }), () => Qn(jl, {
        ...k,
        [jf]: "",
        ref: R
      }, b);
    }
  }), m = Le(() => Array.from(a.itemMap.value.values())), _ = Le(() => a.itemMap.value.size);
  return {
    getItems: l,
    reactiveItems: m,
    itemMapSize: _,
    CollectionSlot: f,
    CollectionItem: p
  };
}
var Mb = /* @__PURE__ */ rt({
  __name: "VisuallyHidden",
  props: {
    feature: {
      type: String,
      required: !1,
      default: "focusable"
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    return (t, i) => (Qe(), pt(ue(nn), {
      as: t.as,
      "as-child": t.asChild,
      "aria-hidden": t.feature === "focusable" ? "true" : void 0,
      "data-hidden": t.feature === "fully-hidden" ? "" : void 0,
      tabindex: t.feature === "fully-hidden" ? "-1" : void 0,
      style: {
        position: "absolute",
        border: 0,
        width: "1px",
        height: "1px",
        padding: 0,
        margin: "-1px",
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        clipPath: "inset(50%)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
        top: "-1px",
        left: "-1px"
      }
    }, {
      default: Xe(() => [St(t.$slots, "default")]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "aria-hidden",
      "data-hidden",
      "tabindex"
    ]));
  }
}), Bb = Mb, Lb = /* @__PURE__ */ rt({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInputBubble",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, { primitiveElement: i, currentElement: o } = di(), a = Le(() => t.checked ?? t.value);
    return At(a, (l, f) => {
      if (!o.value) return;
      const p = o.value, m = window.HTMLInputElement.prototype, v = Object.getOwnPropertyDescriptor(m, "value").set;
      if (v && l !== f) {
        const b = new Event("input", { bubbles: !0 }), k = new Event("change", { bubbles: !0 });
        v.call(p, l), p.dispatchEvent(b), p.dispatchEvent(k);
      }
    }), (l, f) => (Qe(), pt(Bb, Qt({
      ref_key: "primitiveElement",
      ref: i
    }, {
      ...t,
      ...l.$attrs
    }, { as: "input" }), null, 16));
  }
}), qf = Lb, jb = /* @__PURE__ */ rt({
  inheritAttrs: !1,
  __name: "VisuallyHiddenInput",
  props: {
    name: {
      type: String,
      required: !0
    },
    value: {
      type: null,
      required: !0
    },
    checked: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    required: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    feature: {
      type: String,
      required: !1,
      default: "fully-hidden"
    }
  },
  setup(e) {
    const t = e, i = Le(() => typeof t.value == "object" && Array.isArray(t.value) && t.value.length === 0 && t.required), o = Le(() => typeof t.value == "string" || typeof t.value == "number" || typeof t.value == "boolean" || t.value === null || t.value === void 0 ? [{
      name: t.name,
      value: t.value
    }] : typeof t.value == "object" && Array.isArray(t.value) ? t.value.flatMap((a, l) => typeof a == "object" ? Object.entries(a).map(([f, p]) => ({
      name: `${t.name}[${l}][${f}]`,
      value: p
    })) : {
      name: `${t.name}[${l}]`,
      value: a
    }) : t.value !== null && typeof t.value == "object" && !Array.isArray(t.value) ? Object.entries(t.value).map(([a, l]) => ({
      name: `${t.name}[${a}]`,
      value: l
    })) : []);
    return (a, l) => (Qe(), Bn(Tt, null, [Uo(" We render single input if it's required "), i.value ? (Qe(), pt(qf, Qt({ key: a.name }, {
      ...t,
      ...a.$attrs
    }, {
      name: a.name,
      value: a.value
    }), null, 16, ["name", "value"])) : (Qe(!0), Bn(Tt, { key: 1 }, cc(o.value, (f) => (Qe(), pt(qf, Qt({ key: f.name }, { ref_for: !0 }, {
      ...t,
      ...a.$attrs
    }, {
      name: f.name,
      value: f.value
    }), null, 16, ["name", "value"]))), 128))], 2112));
  }
}), qb = jb;
function Kb(e, t, i) {
  return e === void 0 ? !1 : Array.isArray(e) ? e.some((o) => Bs(o, t, i)) : Bs(e, t, i);
}
function Bs(e, t, i) {
  return e === void 0 || t === void 0 ? !1 : typeof e == "string" ? e === t : typeof i == "function" ? i(e, t) : typeof i == "string" ? e?.[i] === t?.[i] : Bl(e, t);
}
const Ub = {
  ArrowLeft: "prev",
  ArrowUp: "prev",
  ArrowRight: "next",
  ArrowDown: "next",
  PageUp: "first",
  Home: "first",
  PageDown: "last",
  End: "last"
};
function Vb(e, t) {
  return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function $b(e, t, i) {
  const o = Vb(e.key, i);
  if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(o)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(o)))
    return Ub[o];
}
const [gu, Hb] = /* @__PURE__ */ mi("ListboxRoot");
var Wb = /* @__PURE__ */ rt({
  __name: "ListboxRoot",
  props: {
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    orientation: {
      type: String,
      required: !1,
      default: "vertical"
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    selectionBehavior: {
      type: String,
      required: !1,
      default: "toggle"
    },
    highlightOnHover: {
      type: Boolean,
      required: !1
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "entryFocus",
    "leave"
  ],
  setup(e, { expose: t, emit: i }) {
    const o = e, a = i, { multiple: l, highlightOnHover: f, orientation: p, disabled: m, selectionBehavior: _, dir: v } = /* @__PURE__ */ fo(o), { getItems: b } = Tc({ isProvider: !0 }), { handleTypeaheadSearch: k } = yb(), { primitiveElement: R, currentElement: D } = di(), M = pb(), W = yh(v), Q = ob(D), $ = /* @__PURE__ */ qe(), L = /* @__PURE__ */ qe(!1), U = /* @__PURE__ */ qe(!0), H = /* @__PURE__ */ Ys(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (l.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    });
    function te(P) {
      if (L.value = !0, o.multiple) {
        const E = Array.isArray(H.value) ? [...H.value] : [], V = E.findIndex((z) => Bs(z, P, o.by));
        o.selectionBehavior === "toggle" ? (V === -1 ? E.push(P) : E.splice(V, 1), H.value = E) : (H.value = [P], $.value = P);
      } else o.selectionBehavior === "toggle" && Bs(H.value, P, o.by) ? H.value = void 0 : H.value = P;
      setTimeout(() => {
        L.value = !1;
      }, 1);
    }
    const J = /* @__PURE__ */ qe(null), ce = /* @__PURE__ */ qe(null), F = /* @__PURE__ */ qe(!1), le = /* @__PURE__ */ qe(!1), we = /* @__PURE__ */ Pa(), ne = /* @__PURE__ */ Pa(), _e = /* @__PURE__ */ Pa();
    function Re() {
      return b().map((P) => P.ref).filter((P) => P.dataset.disabled !== "");
    }
    function ke(P, E = !0, V) {
      if (!P) return;
      J.value = P, (V ?? U.value) && J.value.focus(), E && J.value.scrollIntoView({ block: "nearest" });
      const z = b().find((Ke) => Ke.ref === P);
      a("highlight", z);
    }
    function me(P) {
      if (F.value) _e.trigger(P);
      else {
        const E = b().find((V) => Bs(V.value, P, o.by));
        E && (J.value = E.ref, ke(E.ref));
      }
    }
    function he(P) {
      J.value && J.value.isConnected && (P.preventDefault(), P.stopPropagation(), le.value || J.value.click());
    }
    function be(P) {
      if (U.value) {
        if (L.value = !0, F.value) ne.trigger(P);
        else {
          const E = P.altKey || P.ctrlKey || P.metaKey;
          if (E && P.key === "a" && l.value) {
            const V = b(), z = V.map((Ce) => Ce.value);
            H.value = [...z], P.preventDefault();
            const Ke = V.at(-1);
            Ke && ke(Ke.ref);
          } else if (!E) {
            const V = k(P.key, b());
            V && ke(V);
          }
        }
        setTimeout(() => {
          L.value = !1;
        }, 1);
      }
    }
    function je() {
      le.value = !0;
    }
    function tt() {
      Lt(() => {
        le.value = !1;
      });
    }
    function dt() {
      Lt(() => {
        const P = new KeyboardEvent("keydown", { key: "PageUp" });
        gn(P);
      });
    }
    function vt(P) {
      const E = J.value;
      E?.isConnected && (ce.value = E), J.value = null, a("leave", P);
    }
    function Ft(P) {
      const E = new CustomEvent("listbox.entryFocus", {
        bubbles: !1,
        cancelable: !0
      });
      if (P.currentTarget?.dispatchEvent(E), a("entryFocus", E), !E.defaultPrevented)
        if (ce.value) ke(ce.value);
        else {
          const V = Re()?.[0];
          ke(V);
        }
    }
    function gn(P) {
      const E = $b(P, p.value, W.value);
      if (!E) return;
      let V = Re();
      if (J.value) {
        if (E === "last") V.reverse();
        else if (E === "prev" || E === "next") {
          E === "prev" && V.reverse();
          const z = V.indexOf(J.value);
          V = V.slice(z + 1);
        }
        Jt(P, V[0]);
      }
      if (V.length) {
        const z = !J.value && E === "prev" ? V.length - 1 : 0;
        ke(V[z]);
      }
      if (F.value) return ne.trigger(P);
    }
    function Jt(P, E) {
      if (!(F.value || o.selectionBehavior !== "replace" || !l.value || !Array.isArray(H.value) || (P.altKey || P.ctrlKey || P.metaKey) && !P.shiftKey) && P.shiftKey) {
        const z = b().filter((j) => j.ref.dataset.disabled !== "");
        let Ke = z.find((j) => j.ref === E)?.value;
        if (P.key === M.END ? Ke = z.at(-1)?.value : P.key === M.HOME && (Ke = z[0]?.value), !Ke || !$.value) return;
        const Ce = Mg(z.map((j) => j.value), $.value, Ke);
        H.value = Ce;
      }
    }
    async function Ct(P) {
      if (await Lt(), F.value) we.trigger(P);
      else {
        const E = Re(), V = E.find((z) => z.dataset.state === "checked");
        V ? ke(V) : E.length && ke(E[0]);
      }
    }
    return At(H, () => {
      L.value || Lt(() => {
        Ct();
      });
    }, {
      immediate: !0,
      deep: !0
    }), t({
      highlightedElement: J,
      highlightItem: me,
      highlightFirstItem: dt,
      highlightSelected: Ct,
      getItems: b
    }), Hb({
      modelValue: H,
      onValueChange: te,
      multiple: l,
      orientation: p,
      dir: W,
      disabled: m,
      highlightOnHover: f,
      highlightedElement: J,
      isVirtual: F,
      virtualFocusHook: we,
      virtualKeydownHook: ne,
      virtualHighlightHook: _e,
      by: o.by,
      firstValue: $,
      selectionBehavior: _,
      focusable: U,
      onLeave: vt,
      onEnter: Ft,
      changeHighlight: ke,
      onKeydownEnter: he,
      onKeydownNavigation: gn,
      onKeydownTypeAhead: be,
      onCompositionStart: je,
      onCompositionEnd: tt,
      highlightFirstItem: dt
    }), (P, E) => (Qe(), pt(ue(nn), {
      ref_key: "primitiveElement",
      ref: R,
      as: P.as,
      "as-child": P.asChild,
      dir: ue(W),
      "data-disabled": ue(m) ? "" : void 0,
      onPointerleave: vt,
      onFocusout: E[0] || (E[0] = async (V) => {
        const z = V.relatedTarget || V.target;
        await Lt(), J.value && ue(D) && !ue(D).contains(z) && vt(V);
      })
    }, {
      default: Xe(() => [St(P.$slots, "default", { modelValue: ue(H) }), ue(Q) && P.name ? (Qe(), pt(ue(qb), {
        key: 0,
        name: P.name,
        value: ue(H),
        disabled: ue(m),
        required: P.required
      }, null, 8, [
        "name",
        "value",
        "disabled",
        "required"
      ])) : Uo("v-if", !0)]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "dir",
      "data-disabled"
    ]));
  }
}), Gb = Wb, zb = /* @__PURE__ */ rt({
  __name: "ListboxContent",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { CollectionSlot: t } = Tc(), i = gu(), o = ph(!1, 10);
    return (a, l) => (Qe(), pt(ue(t), null, {
      default: Xe(() => [We(ue(nn), {
        role: "listbox",
        as: a.as,
        "as-child": a.asChild,
        tabindex: ue(i).focusable.value ? ue(i).highlightedElement.value ? "-1" : "0" : "-1",
        "aria-orientation": ue(i).orientation.value,
        "aria-multiselectable": !!ue(i).multiple.value,
        "data-orientation": ue(i).orientation.value,
        onMousedown: l[0] || (l[0] = oo((f) => o.value = !0, ["left"])),
        onFocus: l[1] || (l[1] = (f) => {
          ue(o) || ue(i).onEnter(f);
        }),
        onKeydown: [
          l[2] || (l[2] = so((f) => {
            ue(i).orientation.value === "vertical" && (f.key === "ArrowLeft" || f.key === "ArrowRight") || ue(i).orientation.value === "horizontal" && (f.key === "ArrowUp" || f.key === "ArrowDown") || (f.preventDefault(), ue(i).focusable.value && ue(i).onKeydownNavigation(f));
          }, [
            "down",
            "up",
            "left",
            "right",
            "home",
            "end"
          ])),
          so(ue(i).onKeydownEnter, ["enter"]),
          ue(i).onKeydownTypeAhead
        ]
      }, {
        default: Xe(() => [St(a.$slots, "default")]),
        _: 3
      }, 8, [
        "as",
        "as-child",
        "tabindex",
        "aria-orientation",
        "aria-multiselectable",
        "data-orientation",
        "onKeydown"
      ])]),
      _: 3
    }));
  }
}), Yb = zb, Xb = /* @__PURE__ */ rt({
  __name: "ListboxFilter",
  props: {
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = e, a = /* @__PURE__ */ Ys(i, "modelValue", t, {
      defaultValue: "",
      passive: i.modelValue === void 0
    }), l = gu(), { primitiveElement: f, currentElement: p } = di(), m = Le(() => i.disabled || l.disabled.value || !1), _ = /* @__PURE__ */ qe();
    return rc(() => _.value = l.highlightedElement.value?.id), In(() => {
      l.focusable.value = !1, setTimeout(() => {
        i.autoFocus && p.value?.focus();
      }, 1);
    }), dr(() => {
      l.focusable.value = !0;
    }), (v, b) => (Qe(), pt(ue(nn), {
      ref_key: "primitiveElement",
      ref: f,
      as: v.as,
      "as-child": v.asChild,
      value: ue(a),
      disabled: m.value ? "" : void 0,
      "data-disabled": m.value ? "" : void 0,
      "aria-disabled": m.value ?? void 0,
      "aria-activedescendant": _.value,
      type: "text",
      onKeydown: [so(oo(ue(l).onKeydownNavigation, ["prevent"]), [
        "down",
        "up",
        "home",
        "end"
      ]), so(ue(l).onKeydownEnter, ["enter"])],
      onInput: b[0] || (b[0] = (k) => {
        a.value = k.target.value, ue(l).highlightFirstItem();
      }),
      onCompositionstart: ue(l).onCompositionStart,
      onCompositionend: ue(l).onCompositionEnd
    }, {
      default: Xe(() => [St(v.$slots, "default", { modelValue: ue(a) })]),
      _: 3
    }, 8, [
      "as",
      "as-child",
      "value",
      "disabled",
      "data-disabled",
      "aria-disabled",
      "aria-activedescendant",
      "onKeydown",
      "onCompositionstart",
      "onCompositionend"
    ]));
  }
}), Qb = Xb;
const Jb = "listbox.select", [Zb, e_] = /* @__PURE__ */ mi("ListboxItem");
var t_ = /* @__PURE__ */ rt({
  __name: "ListboxItem",
  props: {
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "div"
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = Oc(void 0, "reka-listbox-item"), { CollectionItem: l } = Tc(), { forwardRef: f, currentElement: p } = rr(), m = gu(), _ = Le(() => p.value === m.highlightedElement.value), v = Le(() => Kb(m.modelValue.value, i.value, m.by)), b = Le(() => m.disabled.value || i.disabled);
    async function k(D) {
      o("select", D), !D?.defaultPrevented && !b.value && D && (m.onValueChange(i.value), m.changeHighlight(p.value));
    }
    function R(D) {
      const M = {
        originalEvent: D,
        value: i.value
      };
      xc(Jb, k, M);
    }
    return e_({ isSelected: v }), (D, M) => (Qe(), pt(ue(l), { value: D.value }, {
      default: Xe(() => [Np([_.value, v.value], () => We(ue(nn), Qt({ id: ue(a) }, D.$attrs, {
        ref: ue(f),
        role: "option",
        tabindex: ue(m).focusable.value ? _.value ? "0" : "-1" : -1,
        "aria-selected": v.value,
        as: D.as,
        "as-child": D.asChild,
        disabled: b.value ? "" : void 0,
        "data-disabled": b.value ? "" : void 0,
        "data-highlighted": _.value ? "" : void 0,
        "data-state": v.value ? "checked" : "unchecked",
        onClick: R,
        onKeydown: so(oo(R, ["prevent"]), ["space"]),
        onPointermove: M[0] || (M[0] = () => {
          ue(m).highlightedElement.value !== ue(p) && ue(m).highlightOnHover.value && ue(m).changeHighlight(ue(p), !1, !1);
        })
      }), {
        default: Xe(() => [St(D.$slots, "default")]),
        _: 3
      }, 16, [
        "id",
        "tabindex",
        "aria-selected",
        "as",
        "as-child",
        "disabled",
        "data-disabled",
        "data-highlighted",
        "data-state",
        "onKeydown"
      ]), M, 1)]),
      _: 3
    }, 8, ["value"]));
  }
}), n_ = t_, r_ = /* @__PURE__ */ rt({
  __name: "ListboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    rr();
    const i = Zb();
    return (o, a) => ue(i).isSelected.value ? (Qe(), pt(ue(nn), Qt({
      key: 0,
      "aria-hidden": "true"
    }, t), {
      default: Xe(() => [St(o.$slots, "default")]),
      _: 3
    }, 16)) : Uo("v-if", !0);
  }
}), i_ = r_;
const [wh, o_] = /* @__PURE__ */ mi("PopperRoot");
var s_ = /* @__PURE__ */ rt({
  inheritAttrs: !1,
  __name: "PopperRoot",
  setup(e) {
    const t = /* @__PURE__ */ qe();
    return o_({
      anchor: t,
      onAnchorChange: (i) => t.value = i
    }), (i, o) => St(i.$slots, "default");
  }
}), a_ = s_, u_ = /* @__PURE__ */ rt({
  __name: "PopperAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: i, currentElement: o } = rr(), a = wh();
    return nc(() => {
      a.onAnchorChange(t.reference ?? o.value);
    }), (l, f) => (Qe(), pt(ue(nn), {
      ref: ue(i),
      as: l.as,
      "as-child": l.asChild
    }, {
      default: Xe(() => [St(l.$slots, "default")]),
      _: 3
    }, 8, ["as", "as-child"]));
  }
}), l_ = u_;
function c_(e) {
  return e !== null;
}
function f_(e) {
  return {
    name: "transformOrigin",
    options: e,
    fn(t) {
      const { placement: i, rects: o, middlewareData: a } = t, f = a.arrow?.centerOffset !== 0, p = f ? 0 : e.arrowWidth, m = f ? 0 : e.arrowHeight, [_, v] = ql(i), b = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[v], k = (a.arrow?.x ?? 0) + p / 2, R = (a.arrow?.y ?? 0) + m / 2;
      let D = "", M = "";
      return _ === "bottom" ? (D = f ? b : `${k}px`, M = `${-m}px`) : _ === "top" ? (D = f ? b : `${k}px`, M = `${o.floating.height + m}px`) : _ === "right" ? (D = `${-m}px`, M = f ? b : `${R}px`) : _ === "left" && (D = `${o.floating.width + m}px`, M = f ? b : `${R}px`), { data: {
        x: D,
        y: M
      } };
    }
  };
}
function ql(e) {
  const [t, i = "center"] = e.split("-");
  return [t, i];
}
const d_ = ["top", "right", "bottom", "left"], pi = Math.min, Tn = Math.max, Ga = Math.round, Sa = Math.floor, cr = (e) => ({
  x: e,
  y: e
}), p_ = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Kl(e, t, i) {
  return Tn(e, pi(t, i));
}
function Xr(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Qr(e) {
  return e.split("-")[0];
}
function $o(e) {
  return e.split("-")[1];
}
function Ac(e) {
  return e === "x" ? "y" : "x";
}
function Pc(e) {
  return e === "y" ? "height" : "width";
}
function lr(e) {
  const t = e[0];
  return t === "t" || t === "b" ? "y" : "x";
}
function Ic(e) {
  return Ac(lr(e));
}
function h_(e, t, i) {
  i === void 0 && (i = !1);
  const o = $o(e), a = Ic(e), l = Pc(a);
  let f = a === "x" ? o === (i ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[l] > t.floating[l] && (f = za(f)), [f, za(f)];
}
function m_(e) {
  const t = za(e);
  return [Ul(e), t, Ul(t)];
}
function Ul(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start");
}
const Kf = ["left", "right"], Uf = ["right", "left"], y_ = ["top", "bottom"], v_ = ["bottom", "top"];
function g_(e, t, i) {
  switch (e) {
    case "top":
    case "bottom":
      return i ? t ? Uf : Kf : t ? Kf : Uf;
    case "left":
    case "right":
      return t ? y_ : v_;
    default:
      return [];
  }
}
function b_(e, t, i, o) {
  const a = $o(e);
  let l = g_(Qr(e), i === "start", o);
  return a && (l = l.map((f) => f + "-" + a), t && (l = l.concat(l.map(Ul)))), l;
}
function za(e) {
  const t = Qr(e);
  return p_[t] + e.slice(t.length);
}
function __(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  };
}
function xh(e) {
  return typeof e != "number" ? __(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  };
}
function Ya(e) {
  const {
    x: t,
    y: i,
    width: o,
    height: a
  } = e;
  return {
    width: o,
    height: a,
    top: i,
    left: t,
    right: t + o,
    bottom: i + a,
    x: t,
    y: i
  };
}
function Vf(e, t, i) {
  let {
    reference: o,
    floating: a
  } = e;
  const l = lr(t), f = Ic(t), p = Pc(f), m = Qr(t), _ = l === "y", v = o.x + o.width / 2 - a.width / 2, b = o.y + o.height / 2 - a.height / 2, k = o[p] / 2 - a[p] / 2;
  let R;
  switch (m) {
    case "top":
      R = {
        x: v,
        y: o.y - a.height
      };
      break;
    case "bottom":
      R = {
        x: v,
        y: o.y + o.height
      };
      break;
    case "right":
      R = {
        x: o.x + o.width,
        y: b
      };
      break;
    case "left":
      R = {
        x: o.x - a.width,
        y: b
      };
      break;
    default:
      R = {
        x: o.x,
        y: o.y
      };
  }
  switch ($o(t)) {
    case "start":
      R[f] -= k * (i && _ ? -1 : 1);
      break;
    case "end":
      R[f] += k * (i && _ ? -1 : 1);
      break;
  }
  return R;
}
async function w_(e, t) {
  var i;
  t === void 0 && (t = {});
  const {
    x: o,
    y: a,
    platform: l,
    rects: f,
    elements: p,
    strategy: m
  } = e, {
    boundary: _ = "clippingAncestors",
    rootBoundary: v = "viewport",
    elementContext: b = "floating",
    altBoundary: k = !1,
    padding: R = 0
  } = Xr(t, e), D = xh(R), W = p[k ? b === "floating" ? "reference" : "floating" : b], Q = Ya(await l.getClippingRect({
    element: (i = await (l.isElement == null ? void 0 : l.isElement(W))) == null || i ? W : W.contextElement || await (l.getDocumentElement == null ? void 0 : l.getDocumentElement(p.floating)),
    boundary: _,
    rootBoundary: v,
    strategy: m
  })), $ = b === "floating" ? {
    x: o,
    y: a,
    width: f.floating.width,
    height: f.floating.height
  } : f.reference, L = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(p.floating)), U = await (l.isElement == null ? void 0 : l.isElement(L)) ? await (l.getScale == null ? void 0 : l.getScale(L)) || {
    x: 1,
    y: 1
  } : {
    x: 1,
    y: 1
  }, H = Ya(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
    elements: p,
    rect: $,
    offsetParent: L,
    strategy: m
  }) : $);
  return {
    top: (Q.top - H.top + D.top) / U.y,
    bottom: (H.bottom - Q.bottom + D.bottom) / U.y,
    left: (Q.left - H.left + D.left) / U.x,
    right: (H.right - Q.right + D.right) / U.x
  };
}
const x_ = 50, E_ = async (e, t, i) => {
  const {
    placement: o = "bottom",
    strategy: a = "absolute",
    middleware: l = [],
    platform: f
  } = i, p = f.detectOverflow ? f : {
    ...f,
    detectOverflow: w_
  }, m = await (f.isRTL == null ? void 0 : f.isRTL(t));
  let _ = await f.getElementRects({
    reference: e,
    floating: t,
    strategy: a
  }), {
    x: v,
    y: b
  } = Vf(_, o, m), k = o, R = 0;
  const D = {};
  for (let M = 0; M < l.length; M++) {
    const W = l[M];
    if (!W)
      continue;
    const {
      name: Q,
      fn: $
    } = W, {
      x: L,
      y: U,
      data: H,
      reset: te
    } = await $({
      x: v,
      y: b,
      initialPlacement: o,
      placement: k,
      strategy: a,
      middlewareData: D,
      rects: _,
      platform: p,
      elements: {
        reference: e,
        floating: t
      }
    });
    v = L ?? v, b = U ?? b, D[Q] = {
      ...D[Q],
      ...H
    }, te && R < x_ && (R++, typeof te == "object" && (te.placement && (k = te.placement), te.rects && (_ = te.rects === !0 ? await f.getElementRects({
      reference: e,
      floating: t,
      strategy: a
    }) : te.rects), {
      x: v,
      y: b
    } = Vf(_, k, m)), M = -1);
  }
  return {
    x: v,
    y: b,
    placement: k,
    strategy: a,
    middlewareData: D
  };
}, S_ = (e) => ({
  name: "arrow",
  options: e,
  async fn(t) {
    const {
      x: i,
      y: o,
      placement: a,
      rects: l,
      platform: f,
      elements: p,
      middlewareData: m
    } = t, {
      element: _,
      padding: v = 0
    } = Xr(e, t) || {};
    if (_ == null)
      return {};
    const b = xh(v), k = {
      x: i,
      y: o
    }, R = Ic(a), D = Pc(R), M = await f.getDimensions(_), W = R === "y", Q = W ? "top" : "left", $ = W ? "bottom" : "right", L = W ? "clientHeight" : "clientWidth", U = l.reference[D] + l.reference[R] - k[R] - l.floating[D], H = k[R] - l.reference[R], te = await (f.getOffsetParent == null ? void 0 : f.getOffsetParent(_));
    let J = te ? te[L] : 0;
    (!J || !await (f.isElement == null ? void 0 : f.isElement(te))) && (J = p.floating[L] || l.floating[D]);
    const ce = U / 2 - H / 2, F = J / 2 - M[D] / 2 - 1, le = pi(b[Q], F), we = pi(b[$], F), ne = le, _e = J - M[D] - we, Re = J / 2 - M[D] / 2 + ce, ke = Kl(ne, Re, _e), me = !m.arrow && $o(a) != null && Re !== ke && l.reference[D] / 2 - (Re < ne ? le : we) - M[D] / 2 < 0, he = me ? Re < ne ? Re - ne : Re - _e : 0;
    return {
      [R]: k[R] + he,
      data: {
        [R]: ke,
        centerOffset: Re - ke - he,
        ...me && {
          alignmentOffset: he
        }
      },
      reset: me
    };
  }
}), C_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "flip",
    options: e,
    async fn(t) {
      var i, o;
      const {
        placement: a,
        middlewareData: l,
        rects: f,
        initialPlacement: p,
        platform: m,
        elements: _
      } = t, {
        mainAxis: v = !0,
        crossAxis: b = !0,
        fallbackPlacements: k,
        fallbackStrategy: R = "bestFit",
        fallbackAxisSideDirection: D = "none",
        flipAlignment: M = !0,
        ...W
      } = Xr(e, t);
      if ((i = l.arrow) != null && i.alignmentOffset)
        return {};
      const Q = Qr(a), $ = lr(p), L = Qr(p) === p, U = await (m.isRTL == null ? void 0 : m.isRTL(_.floating)), H = k || (L || !M ? [za(p)] : m_(p)), te = D !== "none";
      !k && te && H.push(...b_(p, M, D, U));
      const J = [p, ...H], ce = await m.detectOverflow(t, W), F = [];
      let le = ((o = l.flip) == null ? void 0 : o.overflows) || [];
      if (v && F.push(ce[Q]), b) {
        const Re = h_(a, f, U);
        F.push(ce[Re[0]], ce[Re[1]]);
      }
      if (le = [...le, {
        placement: a,
        overflows: F
      }], !F.every((Re) => Re <= 0)) {
        var we, ne;
        const Re = (((we = l.flip) == null ? void 0 : we.index) || 0) + 1, ke = J[Re];
        if (ke && (!(b === "alignment" ? $ !== lr(ke) : !1) || // We leave the current main axis only if every placement on that axis
        // overflows the main axis.
        le.every((be) => lr(be.placement) === $ ? be.overflows[0] > 0 : !0)))
          return {
            data: {
              index: Re,
              overflows: le
            },
            reset: {
              placement: ke
            }
          };
        let me = (ne = le.filter((he) => he.overflows[0] <= 0).sort((he, be) => he.overflows[1] - be.overflows[1])[0]) == null ? void 0 : ne.placement;
        if (!me)
          switch (R) {
            case "bestFit": {
              var _e;
              const he = (_e = le.filter((be) => {
                if (te) {
                  const je = lr(be.placement);
                  return je === $ || // Create a bias to the `y` side axis due to horizontal
                  // reading directions favoring greater width.
                  je === "y";
                }
                return !0;
              }).map((be) => [be.placement, be.overflows.filter((je) => je > 0).reduce((je, tt) => je + tt, 0)]).sort((be, je) => be[1] - je[1])[0]) == null ? void 0 : _e[0];
              he && (me = he);
              break;
            }
            case "initialPlacement":
              me = p;
              break;
          }
        if (a !== me)
          return {
            reset: {
              placement: me
            }
          };
      }
      return {};
    }
  };
};
function $f(e, t) {
  return {
    top: e.top - t.height,
    right: e.right - t.width,
    bottom: e.bottom - t.height,
    left: e.left - t.width
  };
}
function Hf(e) {
  return d_.some((t) => e[t] >= 0);
}
const O_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "hide",
    options: e,
    async fn(t) {
      const {
        rects: i,
        platform: o
      } = t, {
        strategy: a = "referenceHidden",
        ...l
      } = Xr(e, t);
      switch (a) {
        case "referenceHidden": {
          const f = await o.detectOverflow(t, {
            ...l,
            elementContext: "reference"
          }), p = $f(f, i.reference);
          return {
            data: {
              referenceHiddenOffsets: p,
              referenceHidden: Hf(p)
            }
          };
        }
        case "escaped": {
          const f = await o.detectOverflow(t, {
            ...l,
            altBoundary: !0
          }), p = $f(f, i.floating);
          return {
            data: {
              escapedOffsets: p,
              escaped: Hf(p)
            }
          };
        }
        default:
          return {};
      }
    }
  };
}, Eh = /* @__PURE__ */ new Set(["left", "top"]);
async function T_(e, t) {
  const {
    placement: i,
    platform: o,
    elements: a
  } = e, l = await (o.isRTL == null ? void 0 : o.isRTL(a.floating)), f = Qr(i), p = $o(i), m = lr(i) === "y", _ = Eh.has(f) ? -1 : 1, v = l && m ? -1 : 1, b = Xr(t, e);
  let {
    mainAxis: k,
    crossAxis: R,
    alignmentAxis: D
  } = typeof b == "number" ? {
    mainAxis: b,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: b.mainAxis || 0,
    crossAxis: b.crossAxis || 0,
    alignmentAxis: b.alignmentAxis
  };
  return p && typeof D == "number" && (R = p === "end" ? D * -1 : D), m ? {
    x: R * v,
    y: k * _
  } : {
    x: k * _,
    y: R * v
  };
}
const A_ = function(e) {
  return e === void 0 && (e = 0), {
    name: "offset",
    options: e,
    async fn(t) {
      var i, o;
      const {
        x: a,
        y: l,
        placement: f,
        middlewareData: p
      } = t, m = await T_(t, e);
      return f === ((i = p.offset) == null ? void 0 : i.placement) && (o = p.arrow) != null && o.alignmentOffset ? {} : {
        x: a + m.x,
        y: l + m.y,
        data: {
          ...m,
          placement: f
        }
      };
    }
  };
}, P_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "shift",
    options: e,
    async fn(t) {
      const {
        x: i,
        y: o,
        placement: a,
        platform: l
      } = t, {
        mainAxis: f = !0,
        crossAxis: p = !1,
        limiter: m = {
          fn: (Q) => {
            let {
              x: $,
              y: L
            } = Q;
            return {
              x: $,
              y: L
            };
          }
        },
        ..._
      } = Xr(e, t), v = {
        x: i,
        y: o
      }, b = await l.detectOverflow(t, _), k = lr(Qr(a)), R = Ac(k);
      let D = v[R], M = v[k];
      if (f) {
        const Q = R === "y" ? "top" : "left", $ = R === "y" ? "bottom" : "right", L = D + b[Q], U = D - b[$];
        D = Kl(L, D, U);
      }
      if (p) {
        const Q = k === "y" ? "top" : "left", $ = k === "y" ? "bottom" : "right", L = M + b[Q], U = M - b[$];
        M = Kl(L, M, U);
      }
      const W = m.fn({
        ...t,
        [R]: D,
        [k]: M
      });
      return {
        ...W,
        data: {
          x: W.x - i,
          y: W.y - o,
          enabled: {
            [R]: f,
            [k]: p
          }
        }
      };
    }
  };
}, I_ = function(e) {
  return e === void 0 && (e = {}), {
    options: e,
    fn(t) {
      const {
        x: i,
        y: o,
        placement: a,
        rects: l,
        middlewareData: f
      } = t, {
        offset: p = 0,
        mainAxis: m = !0,
        crossAxis: _ = !0
      } = Xr(e, t), v = {
        x: i,
        y: o
      }, b = lr(a), k = Ac(b);
      let R = v[k], D = v[b];
      const M = Xr(p, t), W = typeof M == "number" ? {
        mainAxis: M,
        crossAxis: 0
      } : {
        mainAxis: 0,
        crossAxis: 0,
        ...M
      };
      if (m) {
        const L = k === "y" ? "height" : "width", U = l.reference[k] - l.floating[L] + W.mainAxis, H = l.reference[k] + l.reference[L] - W.mainAxis;
        R < U ? R = U : R > H && (R = H);
      }
      if (_) {
        var Q, $;
        const L = k === "y" ? "width" : "height", U = Eh.has(Qr(a)), H = l.reference[b] - l.floating[L] + (U && ((Q = f.offset) == null ? void 0 : Q[b]) || 0) + (U ? 0 : W.crossAxis), te = l.reference[b] + l.reference[L] + (U ? 0 : (($ = f.offset) == null ? void 0 : $[b]) || 0) - (U ? W.crossAxis : 0);
        D < H ? D = H : D > te && (D = te);
      }
      return {
        [k]: R,
        [b]: D
      };
    }
  };
}, N_ = function(e) {
  return e === void 0 && (e = {}), {
    name: "size",
    options: e,
    async fn(t) {
      var i, o;
      const {
        placement: a,
        rects: l,
        platform: f,
        elements: p
      } = t, {
        apply: m = () => {
        },
        ..._
      } = Xr(e, t), v = await f.detectOverflow(t, _), b = Qr(a), k = $o(a), R = lr(a) === "y", {
        width: D,
        height: M
      } = l.floating;
      let W, Q;
      b === "top" || b === "bottom" ? (W = b, Q = k === (await (f.isRTL == null ? void 0 : f.isRTL(p.floating)) ? "start" : "end") ? "left" : "right") : (Q = b, W = k === "end" ? "top" : "bottom");
      const $ = M - v.top - v.bottom, L = D - v.left - v.right, U = pi(M - v[W], $), H = pi(D - v[Q], L), te = !t.middlewareData.shift;
      let J = U, ce = H;
      if ((i = t.middlewareData.shift) != null && i.enabled.x && (ce = L), (o = t.middlewareData.shift) != null && o.enabled.y && (J = $), te && !k) {
        const le = Tn(v.left, 0), we = Tn(v.right, 0), ne = Tn(v.top, 0), _e = Tn(v.bottom, 0);
        R ? ce = D - 2 * (le !== 0 || we !== 0 ? le + we : Tn(v.left, v.right)) : J = M - 2 * (ne !== 0 || _e !== 0 ? ne + _e : Tn(v.top, v.bottom));
      }
      await m({
        ...t,
        availableWidth: ce,
        availableHeight: J
      });
      const F = await f.getDimensions(p.floating);
      return D !== F.width || M !== F.height ? {
        reset: {
          rects: !0
        }
      } : {};
    }
  };
};
function bu() {
  return typeof window < "u";
}
function yo(e) {
  return Nc(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function An(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function pr(e) {
  var t;
  return (t = (Nc(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function Nc(e) {
  return bu() ? e instanceof Node || e instanceof An(e).Node : !1;
}
function tr(e) {
  return bu() ? e instanceof Element || e instanceof An(e).Element : !1;
}
function ei(e) {
  return bu() ? e instanceof HTMLElement || e instanceof An(e).HTMLElement : !1;
}
function Wf(e) {
  return !bu() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof An(e).ShadowRoot;
}
function ca(e) {
  const {
    overflow: t,
    overflowX: i,
    overflowY: o,
    display: a
  } = nr(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + i) && a !== "inline" && a !== "contents";
}
function R_(e) {
  return /^(table|td|th)$/.test(yo(e));
}
function _u(e) {
  try {
    if (e.matches(":popover-open"))
      return !0;
  } catch {
  }
  try {
    return e.matches(":modal");
  } catch {
    return !1;
  }
}
const k_ = /transform|translate|scale|rotate|perspective|filter/, D_ = /paint|layout|strict|content/, Xi = (e) => !!e && e !== "none";
let dl;
function Rc(e) {
  const t = tr(e) ? nr(e) : e;
  return Xi(t.transform) || Xi(t.translate) || Xi(t.scale) || Xi(t.rotate) || Xi(t.perspective) || !kc() && (Xi(t.backdropFilter) || Xi(t.filter)) || k_.test(t.willChange || "") || D_.test(t.contain || "");
}
function F_(e) {
  let t = hi(e);
  for (; ei(t) && !jo(t); ) {
    if (Rc(t))
      return t;
    if (_u(t))
      return null;
    t = hi(t);
  }
  return null;
}
function kc() {
  return dl == null && (dl = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), dl;
}
function jo(e) {
  return /^(html|body|#document)$/.test(yo(e));
}
function nr(e) {
  return An(e).getComputedStyle(e);
}
function wu(e) {
  return tr(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  };
}
function hi(e) {
  if (yo(e) === "html")
    return e;
  const t = (
    // Step into the shadow DOM of the parent of a slotted node.
    e.assignedSlot || // DOM Element detected.
    e.parentNode || // ShadowRoot detected.
    Wf(e) && e.host || // Fallback.
    pr(e)
  );
  return Wf(t) ? t.host : t;
}
function Sh(e) {
  const t = hi(e);
  return jo(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ei(t) && ca(t) ? t : Sh(t);
}
function Xs(e, t, i) {
  var o;
  t === void 0 && (t = []), i === void 0 && (i = !0);
  const a = Sh(e), l = a === ((o = e.ownerDocument) == null ? void 0 : o.body), f = An(a);
  if (l) {
    const p = Vl(f);
    return t.concat(f, f.visualViewport || [], ca(a) ? a : [], p && i ? Xs(p) : []);
  } else
    return t.concat(a, Xs(a, [], i));
}
function Vl(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Ch(e) {
  const t = nr(e);
  let i = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const a = ei(e), l = a ? e.offsetWidth : i, f = a ? e.offsetHeight : o, p = Ga(i) !== l || Ga(o) !== f;
  return p && (i = l, o = f), {
    width: i,
    height: o,
    $: p
  };
}
function Dc(e) {
  return tr(e) ? e : e.contextElement;
}
function Do(e) {
  const t = Dc(e);
  if (!ei(t))
    return cr(1);
  const i = t.getBoundingClientRect(), {
    width: o,
    height: a,
    $: l
  } = Ch(t);
  let f = (l ? Ga(i.width) : i.width) / o, p = (l ? Ga(i.height) : i.height) / a;
  return (!f || !Number.isFinite(f)) && (f = 1), (!p || !Number.isFinite(p)) && (p = 1), {
    x: f,
    y: p
  };
}
const M_ = /* @__PURE__ */ cr(0);
function Oh(e) {
  const t = An(e);
  return !kc() || !t.visualViewport ? M_ : {
    x: t.visualViewport.offsetLeft,
    y: t.visualViewport.offsetTop
  };
}
function B_(e, t, i) {
  return t === void 0 && (t = !1), !i || t && i !== An(e) ? !1 : t;
}
function ao(e, t, i, o) {
  t === void 0 && (t = !1), i === void 0 && (i = !1);
  const a = e.getBoundingClientRect(), l = Dc(e);
  let f = cr(1);
  t && (o ? tr(o) && (f = Do(o)) : f = Do(e));
  const p = B_(l, i, o) ? Oh(l) : cr(0);
  let m = (a.left + p.x) / f.x, _ = (a.top + p.y) / f.y, v = a.width / f.x, b = a.height / f.y;
  if (l) {
    const k = An(l), R = o && tr(o) ? An(o) : o;
    let D = k, M = Vl(D);
    for (; M && o && R !== D; ) {
      const W = Do(M), Q = M.getBoundingClientRect(), $ = nr(M), L = Q.left + (M.clientLeft + parseFloat($.paddingLeft)) * W.x, U = Q.top + (M.clientTop + parseFloat($.paddingTop)) * W.y;
      m *= W.x, _ *= W.y, v *= W.x, b *= W.y, m += L, _ += U, D = An(M), M = Vl(D);
    }
  }
  return Ya({
    width: v,
    height: b,
    x: m,
    y: _
  });
}
function xu(e, t) {
  const i = wu(e).scrollLeft;
  return t ? t.left + i : ao(pr(e)).left + i;
}
function Th(e, t) {
  const i = e.getBoundingClientRect(), o = i.left + t.scrollLeft - xu(e, i), a = i.top + t.scrollTop;
  return {
    x: o,
    y: a
  };
}
function L_(e) {
  let {
    elements: t,
    rect: i,
    offsetParent: o,
    strategy: a
  } = e;
  const l = a === "fixed", f = pr(o), p = t ? _u(t.floating) : !1;
  if (o === f || p && l)
    return i;
  let m = {
    scrollLeft: 0,
    scrollTop: 0
  }, _ = cr(1);
  const v = cr(0), b = ei(o);
  if ((b || !b && !l) && ((yo(o) !== "body" || ca(f)) && (m = wu(o)), b)) {
    const R = ao(o);
    _ = Do(o), v.x = R.x + o.clientLeft, v.y = R.y + o.clientTop;
  }
  const k = f && !b && !l ? Th(f, m) : cr(0);
  return {
    width: i.width * _.x,
    height: i.height * _.y,
    x: i.x * _.x - m.scrollLeft * _.x + v.x + k.x,
    y: i.y * _.y - m.scrollTop * _.y + v.y + k.y
  };
}
function j_(e) {
  return Array.from(e.getClientRects());
}
function q_(e) {
  const t = pr(e), i = wu(e), o = e.ownerDocument.body, a = Tn(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), l = Tn(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let f = -i.scrollLeft + xu(e);
  const p = -i.scrollTop;
  return nr(o).direction === "rtl" && (f += Tn(t.clientWidth, o.clientWidth) - a), {
    width: a,
    height: l,
    x: f,
    y: p
  };
}
const Gf = 25;
function K_(e, t) {
  const i = An(e), o = pr(e), a = i.visualViewport;
  let l = o.clientWidth, f = o.clientHeight, p = 0, m = 0;
  if (a) {
    l = a.width, f = a.height;
    const v = kc();
    (!v || v && t === "fixed") && (p = a.offsetLeft, m = a.offsetTop);
  }
  const _ = xu(o);
  if (_ <= 0) {
    const v = o.ownerDocument, b = v.body, k = getComputedStyle(b), R = v.compatMode === "CSS1Compat" && parseFloat(k.marginLeft) + parseFloat(k.marginRight) || 0, D = Math.abs(o.clientWidth - b.clientWidth - R);
    D <= Gf && (l -= D);
  } else _ <= Gf && (l += _);
  return {
    width: l,
    height: f,
    x: p,
    y: m
  };
}
function U_(e, t) {
  const i = ao(e, !0, t === "fixed"), o = i.top + e.clientTop, a = i.left + e.clientLeft, l = ei(e) ? Do(e) : cr(1), f = e.clientWidth * l.x, p = e.clientHeight * l.y, m = a * l.x, _ = o * l.y;
  return {
    width: f,
    height: p,
    x: m,
    y: _
  };
}
function zf(e, t, i) {
  let o;
  if (t === "viewport")
    o = K_(e, i);
  else if (t === "document")
    o = q_(pr(e));
  else if (tr(t))
    o = U_(t, i);
  else {
    const a = Oh(e);
    o = {
      x: t.x - a.x,
      y: t.y - a.y,
      width: t.width,
      height: t.height
    };
  }
  return Ya(o);
}
function Ah(e, t) {
  const i = hi(e);
  return i === t || !tr(i) || jo(i) ? !1 : nr(i).position === "fixed" || Ah(i, t);
}
function V_(e, t) {
  const i = t.get(e);
  if (i)
    return i;
  let o = Xs(e, [], !1).filter((p) => tr(p) && yo(p) !== "body"), a = null;
  const l = nr(e).position === "fixed";
  let f = l ? hi(e) : e;
  for (; tr(f) && !jo(f); ) {
    const p = nr(f), m = Rc(f);
    !m && p.position === "fixed" && (a = null), (l ? !m && !a : !m && p.position === "static" && !!a && (a.position === "absolute" || a.position === "fixed") || ca(f) && !m && Ah(e, f)) ? o = o.filter((v) => v !== f) : a = p, f = hi(f);
  }
  return t.set(e, o), o;
}
function $_(e) {
  let {
    element: t,
    boundary: i,
    rootBoundary: o,
    strategy: a
  } = e;
  const f = [...i === "clippingAncestors" ? _u(t) ? [] : V_(t, this._c) : [].concat(i), o], p = zf(t, f[0], a);
  let m = p.top, _ = p.right, v = p.bottom, b = p.left;
  for (let k = 1; k < f.length; k++) {
    const R = zf(t, f[k], a);
    m = Tn(R.top, m), _ = pi(R.right, _), v = pi(R.bottom, v), b = Tn(R.left, b);
  }
  return {
    width: _ - b,
    height: v - m,
    x: b,
    y: m
  };
}
function H_(e) {
  const {
    width: t,
    height: i
  } = Ch(e);
  return {
    width: t,
    height: i
  };
}
function W_(e, t, i) {
  const o = ei(t), a = pr(t), l = i === "fixed", f = ao(e, !0, l, t);
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const m = cr(0);
  function _() {
    m.x = xu(a);
  }
  if (o || !o && !l)
    if ((yo(t) !== "body" || ca(a)) && (p = wu(t)), o) {
      const R = ao(t, !0, l, t);
      m.x = R.x + t.clientLeft, m.y = R.y + t.clientTop;
    } else a && _();
  l && !o && a && _();
  const v = a && !o && !l ? Th(a, p) : cr(0), b = f.left + p.scrollLeft - m.x - v.x, k = f.top + p.scrollTop - m.y - v.y;
  return {
    x: b,
    y: k,
    width: f.width,
    height: f.height
  };
}
function pl(e) {
  return nr(e).position === "static";
}
function Yf(e, t) {
  if (!ei(e) || nr(e).position === "fixed")
    return null;
  if (t)
    return t(e);
  let i = e.offsetParent;
  return pr(e) === i && (i = i.ownerDocument.body), i;
}
function Ph(e, t) {
  const i = An(e);
  if (_u(e))
    return i;
  if (!ei(e)) {
    let a = hi(e);
    for (; a && !jo(a); ) {
      if (tr(a) && !pl(a))
        return a;
      a = hi(a);
    }
    return i;
  }
  let o = Yf(e, t);
  for (; o && R_(o) && pl(o); )
    o = Yf(o, t);
  return o && jo(o) && pl(o) && !Rc(o) ? i : o || F_(e) || i;
}
const G_ = async function(e) {
  const t = this.getOffsetParent || Ph, i = this.getDimensions, o = await i(e.floating);
  return {
    reference: W_(e.reference, await t(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: o.width,
      height: o.height
    }
  };
};
function z_(e) {
  return nr(e).direction === "rtl";
}
const Y_ = {
  convertOffsetParentRelativeRectToViewportRelativeRect: L_,
  getDocumentElement: pr,
  getClippingRect: $_,
  getOffsetParent: Ph,
  getElementRects: G_,
  getClientRects: j_,
  getDimensions: H_,
  getScale: Do,
  isElement: tr,
  isRTL: z_
};
function Ih(e, t) {
  return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function X_(e, t) {
  let i = null, o;
  const a = pr(e);
  function l() {
    var p;
    clearTimeout(o), (p = i) == null || p.disconnect(), i = null;
  }
  function f(p, m) {
    p === void 0 && (p = !1), m === void 0 && (m = 1), l();
    const _ = e.getBoundingClientRect(), {
      left: v,
      top: b,
      width: k,
      height: R
    } = _;
    if (p || t(), !k || !R)
      return;
    const D = Sa(b), M = Sa(a.clientWidth - (v + k)), W = Sa(a.clientHeight - (b + R)), Q = Sa(v), L = {
      rootMargin: -D + "px " + -M + "px " + -W + "px " + -Q + "px",
      threshold: Tn(0, pi(1, m)) || 1
    };
    let U = !0;
    function H(te) {
      const J = te[0].intersectionRatio;
      if (J !== m) {
        if (!U)
          return f();
        J ? f(!1, J) : o = setTimeout(() => {
          f(!1, 1e-7);
        }, 1e3);
      }
      J === 1 && !Ih(_, e.getBoundingClientRect()) && f(), U = !1;
    }
    try {
      i = new IntersectionObserver(H, {
        ...L,
        // Handle <iframe>s
        root: a.ownerDocument
      });
    } catch {
      i = new IntersectionObserver(H, L);
    }
    i.observe(e);
  }
  return f(!0), l;
}
function Q_(e, t, i, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: a = !0,
    ancestorResize: l = !0,
    elementResize: f = typeof ResizeObserver == "function",
    layoutShift: p = typeof IntersectionObserver == "function",
    animationFrame: m = !1
  } = o, _ = Dc(e), v = a || l ? [..._ ? Xs(_) : [], ...t ? Xs(t) : []] : [];
  v.forEach((Q) => {
    a && Q.addEventListener("scroll", i, {
      passive: !0
    }), l && Q.addEventListener("resize", i);
  });
  const b = _ && p ? X_(_, i) : null;
  let k = -1, R = null;
  f && (R = new ResizeObserver((Q) => {
    let [$] = Q;
    $ && $.target === _ && R && t && (R.unobserve(t), cancelAnimationFrame(k), k = requestAnimationFrame(() => {
      var L;
      (L = R) == null || L.observe(t);
    })), i();
  }), _ && !m && R.observe(_), t && R.observe(t));
  let D, M = m ? ao(e) : null;
  m && W();
  function W() {
    const Q = ao(e);
    M && !Ih(M, Q) && i(), M = Q, D = requestAnimationFrame(W);
  }
  return i(), () => {
    var Q;
    v.forEach(($) => {
      a && $.removeEventListener("scroll", i), l && $.removeEventListener("resize", i);
    }), b?.(), (Q = R) == null || Q.disconnect(), R = null, m && cancelAnimationFrame(D);
  };
}
const J_ = A_, Z_ = P_, Xf = C_, e0 = N_, t0 = O_, n0 = S_, r0 = I_, i0 = (e, t, i) => {
  const o = /* @__PURE__ */ new Map(), a = {
    platform: Y_,
    ...i
  }, l = {
    ...a.platform,
    _c: o
  };
  return E_(e, t, {
    ...a,
    platform: l
  });
};
function o0(e) {
  return e != null && typeof e == "object" && "$el" in e;
}
function $l(e) {
  if (o0(e)) {
    const t = e.$el;
    return Nc(t) && yo(t) === "#comment" ? null : t;
  }
  return e;
}
function So(e) {
  return typeof e == "function" ? e() : ue(e);
}
function s0(e) {
  return {
    name: "arrow",
    options: e,
    fn(t) {
      const i = $l(So(e.element));
      return i == null ? {} : n0({
        element: i,
        padding: e.padding
      }).fn(t);
    }
  };
}
function Nh(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Qf(e, t) {
  const i = Nh(e);
  return Math.round(t * i) / i;
}
function a0(e, t, i) {
  i === void 0 && (i = {});
  const o = i.whileElementsMounted, a = Le(() => {
    var J;
    return (J = So(i.open)) != null ? J : !0;
  }), l = Le(() => So(i.middleware)), f = Le(() => {
    var J;
    return (J = So(i.placement)) != null ? J : "bottom";
  }), p = Le(() => {
    var J;
    return (J = So(i.strategy)) != null ? J : "absolute";
  }), m = Le(() => {
    var J;
    return (J = So(i.transform)) != null ? J : !0;
  }), _ = Le(() => $l(e.value)), v = Le(() => $l(t.value)), b = /* @__PURE__ */ qe(0), k = /* @__PURE__ */ qe(0), R = /* @__PURE__ */ qe(p.value), D = /* @__PURE__ */ qe(f.value), M = /* @__PURE__ */ ia({}), W = /* @__PURE__ */ qe(!1), Q = Le(() => {
    const J = {
      position: R.value,
      left: "0",
      top: "0"
    };
    if (!v.value)
      return J;
    const ce = Qf(v.value, b.value), F = Qf(v.value, k.value);
    return m.value ? {
      ...J,
      transform: "translate(" + ce + "px, " + F + "px)",
      ...Nh(v.value) >= 1.5 && {
        willChange: "transform"
      }
    } : {
      position: R.value,
      left: ce + "px",
      top: F + "px"
    };
  });
  let $;
  function L() {
    if (_.value == null || v.value == null)
      return;
    const J = a.value;
    i0(_.value, v.value, {
      middleware: l.value,
      placement: f.value,
      strategy: p.value
    }).then((ce) => {
      b.value = ce.x, k.value = ce.y, R.value = ce.strategy, D.value = ce.placement, M.value = ce.middlewareData, W.value = J !== !1;
    });
  }
  function U() {
    typeof $ == "function" && ($(), $ = void 0);
  }
  function H() {
    if (U(), o === void 0) {
      L();
      return;
    }
    if (_.value != null && v.value != null) {
      $ = o(_.value, v.value, L);
      return;
    }
  }
  function te() {
    a.value || (W.value = !1);
  }
  return At([l, f, p, a], L, {
    flush: "sync"
  }), At([_, v], H, {
    flush: "sync"
  }), At(a, te, {
    flush: "sync"
  }), ta() && iu(U), {
    x: /* @__PURE__ */ Qi(b),
    y: /* @__PURE__ */ Qi(k),
    strategy: /* @__PURE__ */ Qi(R),
    placement: /* @__PURE__ */ Qi(D),
    middlewareData: /* @__PURE__ */ Qi(M),
    isPositioned: /* @__PURE__ */ Qi(W),
    floatingStyles: Q,
    update: L
  };
}
const u0 = {
  side: "bottom",
  sideOffset: 0,
  sideFlip: !0,
  align: "center",
  alignOffset: 0,
  alignFlip: !0,
  arrowPadding: 0,
  hideShiftedArrow: !0,
  avoidCollisions: !0,
  collisionBoundary: () => [],
  collisionPadding: 0,
  sticky: "partial",
  hideWhenDetached: !1,
  positionStrategy: "fixed",
  updatePositionStrategy: "optimized",
  prioritizePosition: !1
}, [Aw, l0] = /* @__PURE__ */ mi("PopperContent");
var c0 = /* @__PURE__ */ rt({
  inheritAttrs: !1,
  __name: "PopperContent",
  props: /* @__PURE__ */ Zd({
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  }, { ...u0 }),
  emits: ["placed"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = wh(), { forwardRef: l, currentElement: f } = rr(), p = /* @__PURE__ */ qe(), m = /* @__PURE__ */ qe(), { width: _, height: v } = hb(m), b = Le(() => i.side + (i.align !== "center" ? `-${i.align}` : "")), k = Le(() => typeof i.collisionPadding == "number" ? i.collisionPadding : {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...i.collisionPadding
    }), R = Le(() => Array.isArray(i.collisionBoundary) ? i.collisionBoundary : [i.collisionBoundary]), D = Le(() => ({
      padding: k.value,
      boundary: R.value.filter(c_),
      altBoundary: R.value.length > 0
    })), M = Le(() => ({
      mainAxis: i.sideFlip,
      crossAxis: i.alignFlip
    })), W = Lg(() => [
      J_({
        mainAxis: i.sideOffset + v.value,
        alignmentAxis: i.alignOffset
      }),
      i.prioritizePosition && i.avoidCollisions && Xf({
        ...D.value,
        ...M.value
      }),
      i.avoidCollisions && Z_({
        mainAxis: !0,
        crossAxis: !!i.prioritizePosition,
        limiter: i.sticky === "partial" ? r0() : void 0,
        ...D.value
      }),
      !i.prioritizePosition && i.avoidCollisions && Xf({
        ...D.value,
        ...M.value
      }),
      e0({
        ...D.value,
        apply: ({ elements: ne, rects: _e, availableWidth: Re, availableHeight: ke }) => {
          const { width: me, height: he } = _e.reference, be = ne.floating.style;
          be.setProperty("--reka-popper-available-width", `${Re}px`), be.setProperty("--reka-popper-available-height", `${ke}px`), be.setProperty("--reka-popper-anchor-width", `${me}px`), be.setProperty("--reka-popper-anchor-height", `${he}px`);
        }
      }),
      m.value && s0({
        element: m.value,
        padding: i.arrowPadding
      }),
      f_({
        arrowWidth: _.value,
        arrowHeight: v.value
      }),
      i.hideWhenDetached && t0({
        strategy: "referenceHidden",
        ...D.value
      })
    ]), Q = Le(() => i.reference ?? a.anchor.value), { floatingStyles: $, placement: L, isPositioned: U, middlewareData: H } = a0(Q, p, {
      strategy: i.positionStrategy,
      placement: b,
      whileElementsMounted: (...ne) => Q_(...ne, {
        layoutShift: !i.disableUpdateOnLayoutShift,
        animationFrame: i.updatePositionStrategy === "always"
      }),
      middleware: W
    }), te = Le(() => ql(L.value)[0]), J = Le(() => ql(L.value)[1]);
    nc(() => {
      U.value && o("placed");
    });
    const ce = Le(() => {
      const ne = H.value.arrow?.centerOffset !== 0;
      return i.hideShiftedArrow && ne;
    }), F = /* @__PURE__ */ qe("");
    Zn(() => {
      f.value && (F.value = window.getComputedStyle(f.value).zIndex);
    });
    const le = Le(() => H.value.arrow?.x ?? 0), we = Le(() => H.value.arrow?.y ?? 0);
    return l0({
      placedSide: te,
      onArrowChange: (ne) => m.value = ne,
      arrowX: le,
      arrowY: we,
      shouldHideArrow: ce
    }), (ne, _e) => (Qe(), Bn("div", {
      ref_key: "floatingRef",
      ref: p,
      "data-reka-popper-content-wrapper": "",
      style: lo({
        ...ue($),
        transform: ue(U) ? ue($).transform : "translate(0, -200%)",
        minWidth: "max-content",
        zIndex: F.value,
        "--reka-popper-transform-origin": [ue(H).transformOrigin?.x, ue(H).transformOrigin?.y].join(" "),
        ...ue(H).hide?.referenceHidden && {
          visibility: "hidden",
          pointerEvents: "none"
        }
      })
    }, [We(ue(nn), Qt({ ref: ue(l) }, ne.$attrs, {
      "as-child": i.asChild,
      as: ne.as,
      "data-side": te.value,
      "data-align": J.value,
      style: { animation: ue(U) ? void 0 : "none" }
    }), {
      default: Xe(() => [St(ne.$slots, "default")]),
      _: 3
    }, 16, [
      "as-child",
      "as",
      "data-side",
      "data-align",
      "style"
    ])], 4));
  }
}), f0 = c0;
const [vo, d0] = /* @__PURE__ */ mi("ComboboxRoot");
var p0 = /* @__PURE__ */ rt({
  __name: "ComboboxRoot",
  props: {
    open: {
      type: Boolean,
      required: !1,
      default: void 0
    },
    defaultOpen: {
      type: Boolean,
      required: !1
    },
    resetSearchTermOnBlur: {
      type: Boolean,
      required: !1,
      default: !0
    },
    resetSearchTermOnSelect: {
      type: Boolean,
      required: !1,
      default: !0
    },
    openOnFocus: {
      type: Boolean,
      required: !1,
      default: !1
    },
    openOnClick: {
      type: Boolean,
      required: !1,
      default: !1
    },
    ignoreFilter: {
      type: Boolean,
      required: !1
    },
    resetModelValueOnClear: {
      type: Boolean,
      required: !1,
      default: !1
    },
    modelValue: {
      type: null,
      required: !1
    },
    defaultValue: {
      type: null,
      required: !1
    },
    multiple: {
      type: Boolean,
      required: !1
    },
    dir: {
      type: String,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    highlightOnHover: {
      type: Boolean,
      required: !1,
      default: !0
    },
    by: {
      type: [String, Function],
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    name: {
      type: String,
      required: !1
    },
    required: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "update:modelValue",
    "highlight",
    "update:open"
  ],
  setup(e, { expose: t, emit: i }) {
    const o = e, a = i, { primitiveElement: l, currentElement: f } = di(), { multiple: p, disabled: m, ignoreFilter: _, resetSearchTermOnSelect: v, openOnFocus: b, openOnClick: k, dir: R, resetModelValueOnClear: D, highlightOnHover: M } = /* @__PURE__ */ fo(o), W = yh(R), Q = /* @__PURE__ */ Ys(o, "modelValue", a, {
      defaultValue: o.defaultValue ?? (p.value ? [] : void 0),
      passive: o.modelValue === void 0,
      deep: !0
    }), $ = /* @__PURE__ */ Ys(o, "open", a, {
      defaultValue: o.defaultOpen,
      passive: o.open === void 0
    });
    async function L(me) {
      $.value = me, _e.value = "", me ? (await Lt(), l.value?.highlightSelected(), H.value = !0, J.value?.focus()) : (H.value = !1, setTimeout(() => {
        !me && o.resetSearchTermOnBlur && U.trigger();
      }, 1));
    }
    const U = /* @__PURE__ */ Pa(), H = /* @__PURE__ */ qe(!1), te = /* @__PURE__ */ qe(!1), J = /* @__PURE__ */ qe(), ce = /* @__PURE__ */ qe(), F = Le(() => l.value?.highlightedElement ?? void 0), le = /* @__PURE__ */ qe(/* @__PURE__ */ new Map()), we = /* @__PURE__ */ qe(/* @__PURE__ */ new Map()), { contains: ne } = rb({ sensitivity: "base" }), _e = /* @__PURE__ */ qe(""), Re = Le((me) => {
      if (!_e.value || o.ignoreFilter || te.value) return {
        count: le.value.size,
        items: me?.items ?? /* @__PURE__ */ new Map(),
        groups: me?.groups ?? new Set(we.value.keys())
      };
      let he = 0;
      const be = /* @__PURE__ */ new Map(), je = /* @__PURE__ */ new Set();
      for (const [tt, dt] of le.value) {
        const vt = ne(dt, _e.value);
        be.set(tt, vt ? 1 : 0), vt && he++;
      }
      for (const [tt, dt] of we.value) for (const vt of dt) if (be.get(vt) > 0) {
        je.add(tt);
        break;
      }
      return {
        count: he,
        items: be,
        groups: je
      };
    }), ke = Rt();
    return In(() => {
      ke?.exposed && (ke.exposed.highlightItem = l.value?.highlightItem, ke.exposed.highlightFirstItem = l.value?.highlightFirstItem, ke.exposed.highlightSelected = l.value?.highlightSelected);
    }), t({
      filtered: Re,
      highlightedElement: F,
      highlightItem: l.value?.highlightItem,
      highlightFirstItem: l.value?.highlightFirstItem,
      highlightSelected: l.value?.highlightSelected
    }), d0({
      modelValue: Q,
      multiple: p,
      disabled: m,
      open: $,
      onOpenChange: L,
      contentId: "",
      isUserInputted: H,
      isVirtual: te,
      inputElement: J,
      highlightedElement: F,
      onInputElementChange: (me) => J.value = me,
      triggerElement: ce,
      onTriggerElementChange: (me) => ce.value = me,
      parentElement: f,
      resetSearchTermOnSelect: v,
      onResetSearchTerm: U.on,
      allItems: le,
      allGroups: we,
      filterSearch: _e,
      filterState: Re,
      ignoreFilter: _,
      openOnFocus: b,
      openOnClick: k,
      resetModelValueOnClear: D
    }), (me, he) => (Qe(), pt(ue(a_), null, {
      default: Xe(() => [We(ue(Gb), Qt({
        ref_key: "primitiveElement",
        ref: l
      }, me.$attrs, {
        modelValue: ue(Q),
        "onUpdate:modelValue": he[0] || (he[0] = (be) => /* @__PURE__ */ _t(Q) ? Q.value = be : null),
        style: { pointerEvents: ue($) ? "auto" : void 0 },
        as: me.as,
        "as-child": me.asChild,
        dir: ue(W),
        multiple: ue(p),
        name: me.name,
        required: me.required,
        disabled: ue(m),
        "highlight-on-hover": ue(M),
        by: o.by,
        onHighlight: he[1] || (he[1] = (be) => a("highlight", be))
      }), {
        default: Xe(() => [St(me.$slots, "default", {
          open: ue($),
          modelValue: ue(Q)
        })]),
        _: 3
      }, 16, [
        "modelValue",
        "style",
        "as",
        "as-child",
        "dir",
        "multiple",
        "name",
        "required",
        "disabled",
        "highlight-on-hover",
        "by"
      ])]),
      _: 3
    }));
  }
}), h0 = p0, m0 = /* @__PURE__ */ rt({
  __name: "ComboboxAnchor",
  props: {
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const { forwardRef: t } = rr();
    return (i, o) => (Qe(), pt(ue(l_), {
      "as-child": "",
      reference: i.reference
    }, {
      default: Xe(() => [We(ue(nn), Qt({
        ref: ue(t),
        "as-child": i.asChild,
        as: i.as
      }, i.$attrs), {
        default: Xe(() => [St(i.$slots, "default")]),
        _: 3
      }, 16, ["as-child", "as"])]),
      _: 3
    }, 8, ["reference"]));
  }
}), y0 = m0;
const [Pw, v0] = /* @__PURE__ */ mi("ComboboxContent");
var g0 = /* @__PURE__ */ rt({
  __name: "ComboboxContentImpl",
  props: {
    position: {
      type: String,
      required: !1,
      default: "inline"
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    hideWhenEmpty: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const i = e, o = t, { position: a } = /* @__PURE__ */ fo(i), l = vo(), f = Le(() => l.ignoreFilter.value ? l.allItems.value.size === 0 : l.filterState.value.count === 0), { forwardRef: p, currentElement: m } = rr();
    eb(i.bodyLock), ib(), fb(l.parentElement);
    const _ = Le(() => i.position === "popper" ? i : {}), v = vh(_.value), b = {
      boxSizing: "border-box",
      "--reka-combobox-content-transform-origin": "var(--reka-popper-transform-origin)",
      "--reka-combobox-content-available-width": "var(--reka-popper-available-width)",
      "--reka-combobox-content-available-height": "var(--reka-popper-available-height)",
      "--reka-combobox-trigger-width": "var(--reka-popper-anchor-width)",
      "--reka-combobox-trigger-height": "var(--reka-popper-anchor-height)"
    };
    v0({ position: a });
    const k = /* @__PURE__ */ qe(!1);
    return In(() => {
      l.inputElement.value && (k.value = m.value.contains(l.inputElement.value), k.value && l.inputElement.value.focus());
    }), dr(() => {
      const R = ci();
      k.value && (!R || R === document.body) && l.triggerElement.value?.focus();
    }), (R, D) => (Qe(), pt(ue(Yb), { "as-child": "" }, {
      default: Xe(() => [We(ue(Fb), {
        "as-child": "",
        onMountAutoFocus: D[5] || (D[5] = oo(() => {
        }, ["prevent"])),
        onUnmountAutoFocus: D[6] || (D[6] = oo(() => {
        }, ["prevent"]))
      }, {
        default: Xe(() => [We(ue(Tb), {
          "as-child": "",
          "disable-outside-pointer-events": R.disableOutsidePointerEvents,
          onDismiss: D[0] || (D[0] = (M) => ue(l).onOpenChange(!1)),
          onFocusOutside: D[1] || (D[1] = (M) => {
            ue(l).parentElement.value?.contains(M.target) && M.preventDefault(), o("focusOutside", M);
          }),
          onInteractOutside: D[2] || (D[2] = (M) => o("interactOutside", M)),
          onEscapeKeyDown: D[3] || (D[3] = (M) => o("escapeKeyDown", M)),
          onPointerDownOutside: D[4] || (D[4] = (M) => {
            ue(l).parentElement.value?.contains(M.target) && M.preventDefault(), o("pointerDownOutside", M);
          })
        }, {
          default: Xe(() => [(Qe(), pt(Qd(ue(a) === "popper" ? ue(f0) : ue(nn)), Qt({
            ...R.$attrs,
            ...ue(v)
          }, {
            id: ue(l).contentId,
            ref: ue(p),
            "data-state": ue(l).open.value ? "open" : "closed",
            "data-empty": f.value ? "" : void 0,
            style: {
              display: i.hideWhenEmpty && f.value ? "none" : "flex",
              flexDirection: "column",
              outline: "none",
              ...ue(a) === "popper" ? b : {}
            }
          }), {
            default: Xe(() => [St(R.$slots, "default")]),
            _: 3
          }, 16, [
            "id",
            "data-state",
            "data-empty",
            "style"
          ]))]),
          _: 3
        }, 8, ["disable-outside-pointer-events"])]),
        _: 3
      })]),
      _: 3
    }));
  }
}), b0 = g0, _0 = /* @__PURE__ */ rt({
  __name: "ComboboxContent",
  props: {
    forceMount: {
      type: Boolean,
      required: !1
    },
    position: {
      type: String,
      required: !1
    },
    bodyLock: {
      type: Boolean,
      required: !1
    },
    hideWhenEmpty: {
      type: Boolean,
      required: !1
    },
    side: {
      type: null,
      required: !1
    },
    sideOffset: {
      type: Number,
      required: !1
    },
    sideFlip: {
      type: Boolean,
      required: !1
    },
    align: {
      type: null,
      required: !1
    },
    alignOffset: {
      type: Number,
      required: !1
    },
    alignFlip: {
      type: Boolean,
      required: !1
    },
    avoidCollisions: {
      type: Boolean,
      required: !1
    },
    collisionBoundary: {
      type: null,
      required: !1
    },
    collisionPadding: {
      type: [Number, Object],
      required: !1
    },
    arrowPadding: {
      type: Number,
      required: !1
    },
    hideShiftedArrow: {
      type: Boolean,
      required: !1
    },
    sticky: {
      type: String,
      required: !1
    },
    hideWhenDetached: {
      type: Boolean,
      required: !1
    },
    positionStrategy: {
      type: String,
      required: !1
    },
    updatePositionStrategy: {
      type: String,
      required: !1
    },
    disableUpdateOnLayoutShift: {
      type: Boolean,
      required: !1
    },
    prioritizePosition: {
      type: Boolean,
      required: !1
    },
    reference: {
      type: null,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    },
    disableOutsidePointerEvents: {
      type: Boolean,
      required: !1
    }
  },
  emits: [
    "escapeKeyDown",
    "pointerDownOutside",
    "focusOutside",
    "interactOutside"
  ],
  setup(e, { emit: t }) {
    const a = sb(e, t), { forwardRef: l } = rr(), f = vo();
    return f.contentId ||= Oc(void 0, "reka-combobox-content"), (p, m) => (Qe(), pt(ue(_b), { present: p.forceMount || ue(f).open.value }, {
      default: Xe(() => [We(b0, Qt({
        ...ue(a),
        ...p.$attrs
      }, { ref: ue(l) }), {
        default: Xe(() => [St(p.$slots, "default")]),
        _: 3
      }, 16)]),
      _: 3
    }, 8, ["present"]));
  }
}), w0 = _0, x0 = /* @__PURE__ */ rt({
  __name: "ComboboxEmpty",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, i = vo(), o = Le(() => i.ignoreFilter.value ? i.allItems.value.size === 0 : i.filterState.value.count === 0);
    return (a, l) => o.value ? (Qe(), pt(ue(nn), Gl(Qt({ key: 0 }, t)), {
      default: Xe(() => [St(a.$slots, "default", {}, () => [l[0] || (l[0] = ho("No options"))])]),
      _: 3
    }, 16)) : Uo("v-if", !0);
  }
}), E0 = x0;
const [S0, Iw] = /* @__PURE__ */ mi("ComboboxGroup");
var C0 = /* @__PURE__ */ rt({
  __name: "ComboboxInput",
  props: {
    displayValue: {
      type: Function,
      required: !1
    },
    modelValue: {
      type: String,
      required: !1
    },
    autoFocus: {
      type: Boolean,
      required: !1
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "input"
    }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = vo(), l = gu(), { primitiveElement: f, currentElement: p } = di(), m = /* @__PURE__ */ Ys(i, "modelValue", o, { passive: i.modelValue === void 0 });
    In(() => {
      p.value && a.onInputElementChange(p.value);
    });
    function _(M) {
      a.open.value || a.onOpenChange(!0);
    }
    function v(M) {
      const W = M.target;
      a.open.value ? a.filterSearch.value = W.value : (a.onOpenChange(!0), Lt(() => {
        W.value && (a.filterSearch.value = W.value, l.highlightFirstItem());
      }));
    }
    function b() {
      a.openOnFocus.value && !a.open.value && a.onOpenChange(!0);
    }
    function k(M) {
      if (!a.open.value) return;
      const W = M.relatedTarget;
      if (!W) return;
      const Q = a.parentElement.value?.contains(W), $ = document.getElementById(a.contentId)?.contains(W);
      !Q && !$ && a.onOpenChange(!1);
    }
    function R() {
      a.openOnClick.value && !a.open.value && a.onOpenChange(!0);
    }
    function D() {
      const M = a.modelValue.value;
      i.displayValue ? m.value = i.displayValue(M) : !a.multiple.value && M && !Array.isArray(M) && typeof M != "object" ? m.value = M.toString() : m.value = "", Lt(() => {
        m.value = m.value;
      });
    }
    return a.onResetSearchTerm(() => {
      D();
    }), At(a.modelValue, async () => {
      !a.isUserInputted.value && a.resetSearchTermOnSelect.value && D();
    }, {
      immediate: !0,
      deep: !0
    }), At(a.filterState, (M, W) => {
      !a.isVirtual.value && W.count === 0 && l.highlightFirstItem();
    }), (M, W) => (Qe(), pt(ue(Qb), {
      ref_key: "primitiveElement",
      ref: f,
      modelValue: ue(m),
      "onUpdate:modelValue": W[0] || (W[0] = (Q) => /* @__PURE__ */ _t(m) ? m.value = Q : null),
      as: M.as,
      "as-child": M.asChild,
      "auto-focus": M.autoFocus,
      disabled: M.disabled,
      "aria-expanded": ue(a).open.value,
      "aria-controls": ue(a).contentId,
      "aria-autocomplete": "list",
      role: "combobox",
      autocomplete: "off",
      onClick: R,
      onInput: v,
      onKeydown: so(oo(_, ["prevent"]), ["down", "up"]),
      onFocus: b,
      onBlur: k
    }, {
      default: Xe(() => [St(M.$slots, "default")]),
      _: 3
    }, 8, [
      "modelValue",
      "as",
      "as-child",
      "auto-focus",
      "disabled",
      "aria-expanded",
      "aria-controls",
      "onKeydown"
    ]));
  }
}), O0 = C0, T0 = /* @__PURE__ */ rt({
  __name: "ComboboxItem",
  props: {
    textValue: {
      type: String,
      required: !1
    },
    value: {
      type: null,
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  emits: ["select"],
  setup(e, { emit: t }) {
    const i = e, o = t, a = Oc(void 0, "reka-combobox-item"), l = vo(), f = S0(null), { primitiveElement: p, currentElement: m } = di();
    if (i.value === "") throw new Error("A <ComboboxItem /> must have a value prop that is not an empty string. This is because the Combobox value can be set to an empty string to clear the selection and show the placeholder.");
    const _ = Le(() => {
      if (l.isVirtual.value || l.ignoreFilter.value || !l.filterSearch.value) return !0;
      {
        const v = l.filterState.value.items.get(a);
        return v === void 0 ? !0 : v > 0;
      }
    });
    return In(() => {
      l.allItems.value.set(a, i.textValue || m.value.textContent || m.value.innerText);
      const v = f?.id;
      v && (l.allGroups.value.has(v) ? l.allGroups.value.get(v)?.add(a) : l.allGroups.value.set(v, /* @__PURE__ */ new Set([a])));
    }), dr(() => {
      l.allItems.value.delete(a);
    }), (v, b) => _.value ? (Qe(), pt(ue(n_), Qt({ key: 0 }, i, {
      id: ue(a),
      ref_key: "primitiveElement",
      ref: p,
      disabled: ue(l).disabled.value || v.disabled,
      onSelect: b[0] || (b[0] = (k) => {
        o("select", k), !k.defaultPrevented && (!ue(l).multiple.value && !v.disabled && !ue(l).disabled.value ? (k.preventDefault(), ue(l).onOpenChange(!1), ue(l).modelValue.value = i.value) : ue(l).multiple.value && ue(l).inputElement.value?.focus());
      })
    }), {
      default: Xe(() => [St(v.$slots, "default", {}, () => [ho(Hr(v.value), 1)])]),
      _: 3
    }, 16, ["id", "disabled"])) : Uo("v-if", !0);
  }
}), A0 = T0, P0 = /* @__PURE__ */ rt({
  __name: "ComboboxItemIndicator",
  props: {
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "span"
    }
  },
  setup(e) {
    const t = e;
    return (i, o) => (Qe(), pt(ue(i_), Gl(yc(t)), {
      default: Xe(() => [St(i.$slots, "default")]),
      _: 3
    }, 16));
  }
}), I0 = P0, N0 = /* @__PURE__ */ rt({
  __name: "ComboboxTrigger",
  props: {
    disabled: {
      type: Boolean,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1,
      default: "button"
    }
  },
  setup(e) {
    const t = e, { forwardRef: i, currentElement: o } = rr(), a = vo(), l = Le(() => t.disabled || a.disabled.value || !1);
    return In(() => {
      o.value && a.onTriggerElementChange(o.value);
    }), (f, p) => (Qe(), pt(ue(nn), Qt(t, {
      ref: ue(i),
      type: f.as === "button" ? "button" : void 0,
      tabindex: "-1",
      "aria-label": "Show popup",
      "aria-haspopup": "listbox",
      "aria-expanded": ue(a).open.value,
      "aria-controls": ue(a).contentId,
      "data-state": ue(a).open.value ? "open" : "closed",
      disabled: l.value,
      "data-disabled": l.value ? "" : void 0,
      "aria-disabled": l.value ?? void 0,
      onClick: p[0] || (p[0] = (m) => ue(a).onOpenChange(!ue(a).open.value))
    }), {
      default: Xe(() => [St(f.$slots, "default")]),
      _: 3
    }, 16, [
      "type",
      "aria-expanded",
      "aria-controls",
      "data-state",
      "disabled",
      "data-disabled",
      "aria-disabled"
    ]));
  }
}), R0 = N0;
function k0(e) {
  const t = vu({ nonce: /* @__PURE__ */ qe() });
  return Le(() => e?.value || t.nonce?.value);
}
var D0 = /* @__PURE__ */ rt({
  __name: "ComboboxViewport",
  props: {
    nonce: {
      type: String,
      required: !1
    },
    asChild: {
      type: Boolean,
      required: !1
    },
    as: {
      type: null,
      required: !1
    }
  },
  setup(e) {
    const t = e, { forwardRef: i } = rr(), { nonce: o } = /* @__PURE__ */ fo(t), a = k0(o), l = vo();
    return (f, p) => (Qe(), Bn(Tt, null, [We(ue(nn), Qt({
      ...f.$attrs,
      ...t
    }, {
      ref: ue(i),
      "data-reka-combobox-viewport": "",
      role: "presentation",
      style: {
        position: "relative",
        flex: ue(l).isVirtual.value ? void 0 : 1,
        overflow: "auto"
      }
    }), {
      default: Xe(() => [St(f.$slots, "default")]),
      _: 3
    }, 16, ["style"]), We(ue(nn), {
      as: "style",
      nonce: ue(a)
    }, {
      default: Xe(() => p[0] || (p[0] = [ho(" /* Hide scrollbars cross-browser and enable momentum scroll for touch devices */ [data-reka-combobox-viewport] { scrollbar-width:none; -ms-overflow-style: none; -webkit-overflow-scrolling: touch; } [data-reka-combobox-viewport]::-webkit-scrollbar { display: none; } ")])),
      _: 1,
      __: [0]
    }, 8, ["nonce"])], 64));
  }
}), F0 = D0;
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Jf = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), M0 = (e) => e.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (t, i, o) => o ? o.toUpperCase() : i.toLowerCase()
), B0 = (e) => {
  const t = M0(e);
  return t.charAt(0).toUpperCase() + t.slice(1);
}, L0 = (...e) => e.filter((t, i, o) => !!t && t.trim() !== "" && o.indexOf(t) === i).join(" ").trim(), Zf = (e) => e === "";
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Ts = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 2,
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
};
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const j0 = ({
  name: e,
  iconNode: t,
  absoluteStrokeWidth: i,
  "absolute-stroke-width": o,
  strokeWidth: a,
  "stroke-width": l,
  size: f = Ts.width,
  color: p = Ts.stroke,
  ...m
}, { slots: _ }) => Qn(
  "svg",
  {
    ...Ts,
    ...m,
    width: f,
    height: f,
    stroke: p,
    "stroke-width": Zf(i) || Zf(o) || i === !0 || o === !0 ? Number(a || l || Ts["stroke-width"]) * 24 / Number(f) : a || l || Ts["stroke-width"],
    class: L0(
      "lucide",
      m.class,
      ...e ? [`lucide-${Jf(B0(e))}-icon`, `lucide-${Jf(e)}`] : ["lucide-icon"]
    )
  },
  [...t.map((v) => Qn(...v)), ..._.default ? [_.default()] : []]
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Rh = (e, t) => (i, { slots: o, attrs: a }) => Qn(
  j0,
  {
    ...a,
    ...i,
    iconNode: t,
    name: e
  },
  o
);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const q0 = Rh("check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-vue-next v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const K0 = Rh("chevron-down", [
  ["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]
]), U0 = { class: "text-xs" }, V0 = /* @__PURE__ */ rt({
  __name: "searchable-select",
  props: /* @__PURE__ */ ep({
    options: {},
    displayValue: { type: Function },
    placeholder: {},
    emptyText: {}
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, i = rp(e, "modelValue");
    function o(a, l) {
      return a.filter((f) => t.displayValue(f).toLowerCase().includes(l.toLowerCase()));
    }
    return (a, l) => (Qe(), pt(ue(h0), {
      class: "dropdown w-full",
      modelValue: i.value,
      "onUpdate:modelValue": l[0] || (l[0] = (f) => i.value = f),
      "filter-function": o
    }, {
      default: Xe(() => [
        We(ue(y0), { class: "combobox-anchor" }, {
          default: Xe(() => [
            We(ue(O0), {
              class: "input-ghost outline-none w-full",
              placeholder: e.placeholder ?? "Search...",
              "display-value": (f) => e.displayValue(f)
            }, null, 8, ["placeholder", "display-value"]),
            We(ue(R0), null, {
              default: Xe(() => [
                We(ue(K0), { class: "h-4 w-4 text-base-content/60 cursor-pointer" })
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        We(ue(w0), {
          position: "popper",
          "side-offset": 4,
          class: "bg-base-100 rounded-box shadow-md z-50 overflow-hidden",
          style: { width: "var(--reka-popper-anchor-width)", minWidth: "12rem" }
        }, {
          default: Xe(() => [
            We(ue(F0), { class: "max-h-52 overflow-y-auto p-1" }, {
              default: Xe(() => [
                We(ue(E0), { class: "text-base-content/60 text-xs text-center py-2" }, {
                  default: Xe(() => [
                    ho(Hr(e.emptyText ?? "No results found"), 1)
                  ]),
                  _: 1
                }),
                (Qe(!0), Bn(Tt, null, cc(e.options, (f, p) => (Qe(), pt(ue(A0), {
                  key: p,
                  value: f,
                  class: "cursor-pointer text-xs leading-none w-full flex items-center gap-2 rounded px-2 h-7 pl-7 relative select-none data-disabled:opacity-40 data-disabled:pointer-events-none data-highlighted:outline-none data-highlighted:bg-primary data-highlighted:text-primary-content"
                }, {
                  default: Xe(() => [
                    We(ue(I0), { class: "absolute left-0 w-6.25 inline-flex items-center justify-center" }, {
                      default: Xe(() => [
                        We(ue(q0), { class: "h-3 w-3" })
                      ]),
                      _: 1
                    }),
                    St(a.$slots, "default", { item: f }, () => [
                      dn("span", U0, Hr(e.displayValue(f)), 1)
                    ], !0)
                  ]),
                  _: 2
                }, 1032, ["value"]))), 128))
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["modelValue"]));
  }
}), $0 = /* @__PURE__ */ _c(V0, [["__scopeId", "data-v-99468997"]]), H0 = { class: "flex flex-col gap-3" }, W0 = { class: "text-xs" }, G0 = { class: "text-xs text-base-content/50 ml-auto" }, z0 = /* @__PURE__ */ rt({
  __name: "ied-selector",
  setup(e) {
    const t = wc(), { iedOptions: i, activeIed: o } = ch(t), a = Le({
      get: () => o.value,
      set: (f) => t.setActiveIedName(f?.name ?? "")
    });
    function l(f) {
      return f?.name ?? "";
    }
    return (f, p) => (Qe(), Bn("aside", H0, [
      p[1] || (p[1] = dn("p", { class: "text-sm font-medium" }, "Select an IED to explore its structure.", -1)),
      p[2] || (p[2] = dn("label", { class: "text-base font-semibold" }, "Select IED", -1)),
      We($0, {
        modelValue: a.value,
        "onUpdate:modelValue": p[0] || (p[0] = (m) => a.value = m),
        options: ue(i),
        "display-value": l,
        placeholder: "Search by name",
        "empty-text": "No IEDs found",
        "data-testid": "ied-select"
      }, {
        default: Xe(({ item: m }) => [
          dn("span", W0, Hr(m.name), 1),
          dn("span", G0, Hr(m.kind), 1)
        ]),
        _: 1
      }, 8, ["modelValue", "options"])
    ]));
  }
}), Y0 = { class: "h-full p-8" }, X0 = {
  key: 0,
  class: "mt-8 space-y-2",
  "data-testid": "active-ied-panel"
}, Q0 = { "data-testid": "active-ied-name" }, J0 = { class: "text-sm text-base-content/70" }, Z0 = {
  key: 1,
  class: "h-full flex items-center justify-center",
  "data-testid": "placeholder-prompt"
}, ew = /* @__PURE__ */ rt({
  __name: "ied-detail",
  setup(e) {
    const { activeIed: t } = ch(wc());
    return (i, o) => (Qe(), Bn("div", Y0, [
      o[2] || (o[2] = dn("h1", { class: "text-3xl font-bold tracking-wide" }, "IED Browser", -1)),
      ue(t) ? (Qe(), Bn("div", X0, [
        o[0] || (o[0] = dn("p", { class: "text-lg font-semibold" }, "Active IED", -1)),
        dn("p", Q0, Hr(ue(t).name), 1),
        dn("p", J0, Hr(ue(t).kind), 1)
      ])) : (Qe(), Bn("div", Z0, [...o[1] || (o[1] = [
        dn("p", { class: "text-lg text-base-content/70 text-center" }, " Select an IED to explore display structure ", -1)
      ])]))
    ]));
  }
}), tw = /* @__PURE__ */ rt({
  __name: "ied-browser-view",
  setup(e) {
    return (t, i) => (Qe(), pt(ew));
  }
}), nw = ["id"], rw = /* @__PURE__ */ rt({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    const t = e, i = wc(), o = /* @__PURE__ */ qe(), a = "ext-ied-browser";
    return In(() => {
      o.value = t.api.activeFileName.subscribe(
        (l) => {
          l && i.initApp(l);
        }
      ), t.api.activeFileName.value && i.initApp(t.api.activeFileName.value);
    }), dr(() => {
      o.value?.(), i.closeDatabase();
    }), (l, f) => (Qe(), Bn("article", {
      id: ue(a),
      class: "h-full"
    }, [
      We(mg, null, {
        sidebar: Xe(() => [
          We(z0)
        ]),
        main: Xe(() => [
          We(tw)
        ]),
        _: 1
      })
    ], 8, nw));
  }
}), iw = /* @__PURE__ */ _c(rw, [["__scopeId", "data-v-81d33cd1"]]);
function Nw(e, t) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  const o = Ha(iw, { api: t });
  return o.use(rg()), o.mount(`#${e}`), o.unmount;
}
export {
  Nw as default
};
