(function(){"use strict";try{if(typeof document<"u"){var o=document.createElement("style");o.appendChild(document.createTextNode(`.layout[data-v-5f95d421]{display:grid;height:100%;grid-template-columns:1fr 20rem}.sidebar[data-v-5f95d421]{padding:1.5rem;border-left:1px solid var(--border-color);height:100%}.main[data-v-5f95d421]{padding:1rem;height:100%}.root[data-v-ec5c053a]{display:flex;flex-direction:column;gap:1rem}.tab[data-v-ec5c053a]{transition:all .2s}.tabs[data-v-ec5c053a]{width:auto;display:inline-block;margin:0 auto}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:var(--tab-height);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:calc(100% - var(--tab-height) + var(--border));display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.\\!pointer-events-none{pointer-events:none!important}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.relative{position:relative}.-top-3{top:calc(var(--spacing)*-3)}.top-2{top:calc(var(--spacing)*2)}.top-\\[30px\\]{top:30px}.-right-3{right:calc(var(--spacing)*-3)}.right-2{right:calc(var(--spacing)*2)}.right-\\[-10px\\]{right:-10px}.left-\\[10\\%\\]{left:10%}.left-\\[70\\%\\]{left:70%}.-z-1{z-index:-1}.z-1{z-index:1}.z-2{z-index:2}.z-10{z-index:10}.-order-1{order:-1}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[8\\.5px\\]{margin-right:-8.5px}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-\\[9px\\]{margin-right:9px}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.-ml-\\[12px\\]{margin-left:-12px}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-block{display:inline-block}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-5{height:calc(var(--spacing)*5)}.h-12{height:calc(var(--spacing)*12)}.h-\\[2px\\]{height:2px}.h-\\[20px\\]{height:20px}.h-\\[50px\\]{height:50px}.h-full{height:100%}.min-h-\\[450px\\]{min-height:450px}.w-3\\/4{width:75%}.w-5{width:calc(var(--spacing)*5)}.w-\\[20px\\]{width:20px}.w-full{width:100%}.max-w-\\[8ch\\]{max-width:8ch}.max-w-max{max-width:max-content}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-rows-\\[100px_1fr_80px\\]{grid-template-rows:100px 1fr 80px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.self-center{align-self:center}.self-start{align-self:flex-start}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tabs-box{background-color:var(--color-base-200);--tabs-box-radius:calc(var(--radius-field) + var(--radius-field) + var(--radius-field));border-radius:calc(var(--radius-field) + min(.25rem,var(--tabs-box-radius)));box-shadow:0 -.5px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 .5px oklch(0% 0 0/calc(var(--depth)*.05)) inset;padding:.25rem}.tabs-box .tab{border-radius:var(--radius-field);border-style:none}.tabs-box .tab:focus-visible,.tabs-box .tab:is(label:has(:checked:focus-visible)){outline-offset:2px}.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){background-color:var(--tab-bg,var(--color-base-100));box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px var(--color-neutral),0 1px 6px -4px var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*50%),#0000),0 1px 6px -4px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*100%),#0000)}}@media (forced-colors:active){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){border:1px solid}}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-3{border-style:var(--tw-border-style);border-width:3px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-none{--tw-border-style:none;border-style:none}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.border-\\[var\\(--color-gray-200\\)\\]{border-color:var(--color-gray-200)}.border-\\[var\\(--color-primary\\)\\]{border-color:var(--color-primary)}.bg-\\(--color-ocean-gray-25\\){background-color:var(--color-ocean-gray-25)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.radio-sm{padding:.1875rem}.radio-sm[type=radio]{--size:calc(var(--size-selector,.25rem)*5)}.p-1{padding:calc(var(--spacing)*1)}.p-4{padding:calc(var(--spacing)*4)}.p-10{padding:calc(var(--spacing)*10)}.px-2{padding-inline:calc(var(--spacing)*2)}.py-1{padding-block:calc(var(--spacing)*1)}.text-center{text-align:center}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-\\(--color-ocean-gray-100\\){color:var(--color-ocean-gray-100)}.text-\\(--color-primary\\){color:var(--color-primary)}.text-white{color:var(--color-white)}.opacity-0{opacity:0}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.transition-opacity{transition-property:opacity;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}:is(.\\*\\:pointer-events-auto>*){pointer-events:auto}@media (hover:hover){.group-hover\\:opacity-100:is(:where(.group):hover *){opacity:1}.hover\\:cursor-pointer:hover{cursor:pointer}}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(o)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Is(t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const a of t.split(",")) r[a] = 1;
  return (a) => a in r;
}
const ht = {}, Io = [], Qn = () => {
}, _c = () => !1, da = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ps = (t) => t.startsWith("onUpdate:"), nn = Object.assign, ks = (t, r) => {
  const a = t.indexOf(r);
  a > -1 && t.splice(a, 1);
}, xc = Object.prototype.hasOwnProperty, dt = (t, r) => xc.call(t, r), Le = Array.isArray, Po = (t) => Bi(t) === "[object Map]", Bo = (t) => Bi(t) === "[object Set]", su = (t) => Bi(t) === "[object Date]", Be = (t) => typeof t == "function", Ot = (t) => typeof t == "string", qn = (t) => typeof t == "symbol", wt = (t) => t !== null && typeof t == "object", el = (t) => (wt(t) || Be(t)) && Be(t.then) && Be(t.catch), tl = Object.prototype.toString, Bi = (t) => tl.call(t), Nc = (t) => Bi(t).slice(8, -1), nl = (t) => Bi(t) === "[object Object]", Ls = (t) => Ot(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ni = /* @__PURE__ */ Is(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), pa = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (a) => r[a] || (r[a] = t(a));
}, Ec = /-(\w)/g, Dn = pa(
  (t) => t.replace(Ec, (r, a) => a ? a.toUpperCase() : "")
), Tc = /\B([A-Z])/g, Co = pa(
  (t) => t.replace(Tc, "-$1").toLowerCase()
), ha = pa((t) => t.charAt(0).toUpperCase() + t.slice(1)), Za = pa(
  (t) => t ? `on${ha(t)}` : ""
), Mr = (t, r) => !Object.is(t, r), Qi = (t, ...r) => {
  for (let a = 0; a < t.length; a++)
    t[a](...r);
}, ps = (t, r, a, s = !1) => {
  Object.defineProperty(t, r, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: a
  });
}, na = (t) => {
  const r = parseFloat(t);
  return isNaN(r) ? t : r;
};
let uu;
const ma = () => uu || (uu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ro(t) {
  if (Le(t)) {
    const r = {};
    for (let a = 0; a < t.length; a++) {
      const s = t[a], f = Ot(s) ? Ac(s) : Ro(s);
      if (f)
        for (const d in f)
          r[d] = f[d];
    }
    return r;
  } else if (Ot(t) || wt(t))
    return t;
}
const Oc = /;(?![^(]*\))/g, Cc = /:([^]+)/, Rc = /\/\*[^]*?\*\//g;
function Ac(t) {
  const r = {};
  return t.replace(Rc, "").split(Oc).forEach((a) => {
    if (a) {
      const s = a.split(Cc);
      s.length > 1 && (r[s[0].trim()] = s[1].trim());
    }
  }), r;
}
function tn(t) {
  let r = "";
  if (Ot(t))
    r = t;
  else if (Le(t))
    for (let a = 0; a < t.length; a++) {
      const s = tn(t[a]);
      s && (r += s + " ");
    }
  else if (wt(t))
    for (const a in t)
      t[a] && (r += a + " ");
  return r.trim();
}
function Sc(t) {
  if (!t) return null;
  let { class: r, style: a } = t;
  return r && !Ot(r) && (t.class = tn(r)), a && (t.style = Ro(a)), t;
}
const Dc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Ic = /* @__PURE__ */ Is(Dc);
function rl(t) {
  return !!t || t === "";
}
function Pc(t, r) {
  if (t.length !== r.length) return !1;
  let a = !0;
  for (let s = 0; a && s < t.length; s++)
    a = To(t[s], r[s]);
  return a;
}
function To(t, r) {
  if (t === r) return !0;
  let a = su(t), s = su(r);
  if (a || s)
    return a && s ? t.getTime() === r.getTime() : !1;
  if (a = qn(t), s = qn(r), a || s)
    return t === r;
  if (a = Le(t), s = Le(r), a || s)
    return a && s ? Pc(t, r) : !1;
  if (a = wt(t), s = wt(r), a || s) {
    if (!a || !s)
      return !1;
    const f = Object.keys(t).length, d = Object.keys(r).length;
    if (f !== d)
      return !1;
    for (const c in t) {
      const h = t.hasOwnProperty(c), w = r.hasOwnProperty(c);
      if (h && !w || !h && w || !To(t[c], r[c]))
        return !1;
    }
  }
  return String(t) === String(r);
}
function js(t, r) {
  return t.findIndex((a) => To(a, r));
}
const ol = (t) => !!(t && t.__v_isRef === !0), Ee = (t) => Ot(t) ? t : t == null ? "" : Le(t) || wt(t) && (t.toString === tl || !Be(t.toString)) ? ol(t) ? Ee(t.value) : JSON.stringify(t, il, 2) : String(t), il = (t, r) => ol(r) ? il(t, r.value) : Po(r) ? {
  [`Map(${r.size})`]: [...r.entries()].reduce(
    (a, [s, f], d) => (a[es(s, d) + " =>"] = f, a),
    {}
  )
} : Bo(r) ? {
  [`Set(${r.size})`]: [...r.values()].map((a) => es(a))
} : qn(r) ? es(r) : wt(r) && !Le(r) && !nl(r) ? String(r) : r, es = (t, r = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    qn(t) ? `Symbol(${(a = t.description) != null ? a : r})` : t
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jt;
class al {
  constructor(r = !1) {
    this.detached = r, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Jt, !r && Jt && (this.index = (Jt.scopes || (Jt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let r, a;
      if (this.scopes)
        for (r = 0, a = this.scopes.length; r < a; r++)
          this.scopes[r].pause();
      for (r = 0, a = this.effects.length; r < a; r++)
        this.effects[r].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let r, a;
      if (this.scopes)
        for (r = 0, a = this.scopes.length; r < a; r++)
          this.scopes[r].resume();
      for (r = 0, a = this.effects.length; r < a; r++)
        this.effects[r].resume();
    }
  }
  run(r) {
    if (this._active) {
      const a = Jt;
      try {
        return Jt = this, r();
      } finally {
        Jt = a;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Jt, Jt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Jt = this.prevScope, this.prevScope = void 0);
  }
  stop(r) {
    if (this._active) {
      this._active = !1;
      let a, s;
      for (a = 0, s = this.effects.length; a < s; a++)
        this.effects[a].stop();
      for (this.effects.length = 0, a = 0, s = this.cleanups.length; a < s; a++)
        this.cleanups[a]();
      if (this.cleanups.length = 0, this.scopes) {
        for (a = 0, s = this.scopes.length; a < s; a++)
          this.scopes[a].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !r) {
        const f = this.parent.scopes.pop();
        f && f !== this && (this.parent.scopes[this.index] = f, f.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function sl(t) {
  return new al(t);
}
function Fs() {
  return Jt;
}
function ul(t, r = !1) {
  Jt && Jt.cleanups.push(t);
}
let gt;
const ts = /* @__PURE__ */ new WeakSet();
class ll {
  constructor(r) {
    this.fn = r, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Jt && Jt.active && Jt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ts.has(this) && (ts.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || fl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, lu(this), dl(this);
    const r = gt, a = $n;
    gt = this, $n = !0;
    try {
      return this.fn();
    } finally {
      pl(this), gt = r, $n = a, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let r = this.deps; r; r = r.nextDep)
        Bs(r);
      this.deps = this.depsTail = void 0, lu(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    hs(this) && this.run();
  }
  get dirty() {
    return hs(this);
  }
}
let cl = 0, Ei, Ti;
function fl(t, r = !1) {
  if (t.flags |= 8, r) {
    t.next = Ti, Ti = t;
    return;
  }
  t.next = Ei, Ei = t;
}
function Ms() {
  cl++;
}
function Ks() {
  if (--cl > 0)
    return;
  if (Ti) {
    let r = Ti;
    for (Ti = void 0; r; ) {
      const a = r.next;
      r.next = void 0, r.flags &= -9, r = a;
    }
  }
  let t;
  for (; Ei; ) {
    let r = Ei;
    for (Ei = void 0; r; ) {
      const a = r.next;
      if (r.next = void 0, r.flags &= -9, r.flags & 1)
        try {
          r.trigger();
        } catch (s) {
          t || (t = s);
        }
      r = a;
    }
  }
  if (t) throw t;
}
function dl(t) {
  for (let r = t.deps; r; r = r.nextDep)
    r.version = -1, r.prevActiveLink = r.dep.activeLink, r.dep.activeLink = r;
}
function pl(t) {
  let r, a = t.depsTail, s = a;
  for (; s; ) {
    const f = s.prevDep;
    s.version === -1 ? (s === a && (a = f), Bs(s), kc(s)) : r = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = f;
  }
  t.deps = r, t.depsTail = a;
}
function hs(t) {
  for (let r = t.deps; r; r = r.nextDep)
    if (r.dep.version !== r.version || r.dep.computed && (hl(r.dep.computed) || r.dep.version !== r.version))
      return !0;
  return !!t._dirty;
}
function hl(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Ii) || (t.globalVersion = Ii, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !hs(t))))
    return;
  t.flags |= 2;
  const r = t.dep, a = gt, s = $n;
  gt = t, $n = !0;
  try {
    dl(t);
    const f = t.fn(t._value);
    (r.version === 0 || Mr(f, t._value)) && (t.flags |= 128, t._value = f, r.version++);
  } catch (f) {
    throw r.version++, f;
  } finally {
    gt = a, $n = s, pl(t), t.flags &= -3;
  }
}
function Bs(t, r = !1) {
  const { dep: a, prevSub: s, nextSub: f } = t;
  if (s && (s.nextSub = f, t.prevSub = void 0), f && (f.prevSub = s, t.nextSub = void 0), a.subs === t && (a.subs = s, !s && a.computed)) {
    a.computed.flags &= -5;
    for (let d = a.computed.deps; d; d = d.nextDep)
      Bs(d, !0);
  }
  !r && !--a.sc && a.map && a.map.delete(a.key);
}
function kc(t) {
  const { prevDep: r, nextDep: a } = t;
  r && (r.nextDep = a, t.prevDep = void 0), a && (a.prevDep = r, t.nextDep = void 0);
}
let $n = !0;
const ml = [];
function Sr() {
  ml.push($n), $n = !1;
}
function Dr() {
  const t = ml.pop();
  $n = t === void 0 ? !0 : t;
}
function lu(t) {
  const { cleanup: r } = t;
  if (t.cleanup = void 0, r) {
    const a = gt;
    gt = void 0;
    try {
      r();
    } finally {
      gt = a;
    }
  }
}
let Ii = 0;
class Lc {
  constructor(r, a) {
    this.sub = r, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class $s {
  // TODO isolatedDeclarations "__v_skip"
  constructor(r) {
    this.computed = r, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(r) {
    if (!gt || !$n || gt === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== gt)
      a = this.activeLink = new Lc(gt, this), gt.deps ? (a.prevDep = gt.depsTail, gt.depsTail.nextDep = a, gt.depsTail = a) : gt.deps = gt.depsTail = a, vl(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const s = a.nextDep;
      s.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = s), a.prevDep = gt.depsTail, a.nextDep = void 0, gt.depsTail.nextDep = a, gt.depsTail = a, gt.deps === a && (gt.deps = s);
    }
    return a;
  }
  trigger(r) {
    this.version++, Ii++, this.notify(r);
  }
  notify(r) {
    Ms();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
    } finally {
      Ks();
    }
  }
}
function vl(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const r = t.dep.computed;
    if (r && !t.dep.subs) {
      r.flags |= 20;
      for (let s = r.deps; s; s = s.nextDep)
        vl(s);
    }
    const a = t.dep.subs;
    a !== t && (t.prevSub = a, a && (a.nextSub = t)), t.dep.subs = t;
  }
}
const ra = /* @__PURE__ */ new WeakMap(), No = Symbol(
  ""
), ms = Symbol(
  ""
), Pi = Symbol(
  ""
);
function Zt(t, r, a) {
  if ($n && gt) {
    let s = ra.get(t);
    s || ra.set(t, s = /* @__PURE__ */ new Map());
    let f = s.get(a);
    f || (s.set(a, f = new $s()), f.map = s, f.key = a), f.track();
  }
}
function Tr(t, r, a, s, f, d) {
  const c = ra.get(t);
  if (!c) {
    Ii++;
    return;
  }
  const h = (w) => {
    w && w.trigger();
  };
  if (Ms(), r === "clear")
    c.forEach(h);
  else {
    const w = Le(t), S = w && Ls(a);
    if (w && a === "length") {
      const O = Number(s);
      c.forEach((L, M) => {
        (M === "length" || M === Pi || !qn(M) && M >= O) && h(L);
      });
    } else
      switch ((a !== void 0 || c.has(void 0)) && h(c.get(a)), S && h(c.get(Pi)), r) {
        case "add":
          w ? S && h(c.get("length")) : (h(c.get(No)), Po(t) && h(c.get(ms)));
          break;
        case "delete":
          w || (h(c.get(No)), Po(t) && h(c.get(ms)));
          break;
        case "set":
          Po(t) && h(c.get(No));
          break;
      }
  }
  Ks();
}
function jc(t, r) {
  const a = ra.get(t);
  return a && a.get(r);
}
function Ao(t) {
  const r = at(t);
  return r === t ? r : (Zt(r, "iterate", Pi), An(t) ? r : r.map(Xt));
}
function va(t) {
  return Zt(t = at(t), "iterate", Pi), t;
}
const Fc = {
  __proto__: null,
  [Symbol.iterator]() {
    return ns(this, Symbol.iterator, Xt);
  },
  concat(...t) {
    return Ao(this).concat(
      ...t.map((r) => Le(r) ? Ao(r) : r)
    );
  },
  entries() {
    return ns(this, "entries", (t) => (t[1] = Xt(t[1]), t));
  },
  every(t, r) {
    return Nr(this, "every", t, r, void 0, arguments);
  },
  filter(t, r) {
    return Nr(this, "filter", t, r, (a) => a.map(Xt), arguments);
  },
  find(t, r) {
    return Nr(this, "find", t, r, Xt, arguments);
  },
  findIndex(t, r) {
    return Nr(this, "findIndex", t, r, void 0, arguments);
  },
  findLast(t, r) {
    return Nr(this, "findLast", t, r, Xt, arguments);
  },
  findLastIndex(t, r) {
    return Nr(this, "findLastIndex", t, r, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, r) {
    return Nr(this, "forEach", t, r, void 0, arguments);
  },
  includes(...t) {
    return rs(this, "includes", t);
  },
  indexOf(...t) {
    return rs(this, "indexOf", t);
  },
  join(t) {
    return Ao(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return rs(this, "lastIndexOf", t);
  },
  map(t, r) {
    return Nr(this, "map", t, r, void 0, arguments);
  },
  pop() {
    return wi(this, "pop");
  },
  push(...t) {
    return wi(this, "push", t);
  },
  reduce(t, ...r) {
    return cu(this, "reduce", t, r);
  },
  reduceRight(t, ...r) {
    return cu(this, "reduceRight", t, r);
  },
  shift() {
    return wi(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, r) {
    return Nr(this, "some", t, r, void 0, arguments);
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
    return ns(this, "values", Xt);
  }
};
function ns(t, r, a) {
  const s = va(t), f = s[r]();
  return s !== t && !An(t) && (f._next = f.next, f.next = () => {
    const d = f._next();
    return d.value && (d.value = a(d.value)), d;
  }), f;
}
const Mc = Array.prototype;
function Nr(t, r, a, s, f, d) {
  const c = va(t), h = c !== t && !An(t), w = c[r];
  if (w !== Mc[r]) {
    const L = w.apply(t, d);
    return h ? Xt(L) : L;
  }
  let S = a;
  c !== t && (h ? S = function(L, M) {
    return a.call(this, Xt(L), M, t);
  } : a.length > 2 && (S = function(L, M) {
    return a.call(this, L, M, t);
  }));
  const O = w.call(c, S, s);
  return h && f ? f(O) : O;
}
function cu(t, r, a, s) {
  const f = va(t);
  let d = a;
  return f !== t && (An(t) ? a.length > 3 && (d = function(c, h, w) {
    return a.call(this, c, h, w, t);
  }) : d = function(c, h, w) {
    return a.call(this, c, Xt(h), w, t);
  }), f[r](d, ...s);
}
function rs(t, r, a) {
  const s = at(t);
  Zt(s, "iterate", Pi);
  const f = s[r](...a);
  return (f === -1 || f === !1) && qs(a[0]) ? (a[0] = at(a[0]), s[r](...a)) : f;
}
function wi(t, r, a = []) {
  Sr(), Ms();
  const s = at(t)[r].apply(t, a);
  return Ks(), Dr(), s;
}
const Kc = /* @__PURE__ */ Is("__proto__,__v_isRef,__isVue"), yl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(qn)
);
function Bc(t) {
  qn(t) || (t = String(t));
  const r = at(this);
  return Zt(r, "has", t), r.hasOwnProperty(t);
}
class gl {
  constructor(r = !1, a = !1) {
    this._isReadonly = r, this._isShallow = a;
  }
  get(r, a, s) {
    if (a === "__v_skip") return r.__v_skip;
    const f = this._isReadonly, d = this._isShallow;
    if (a === "__v_isReactive")
      return !f;
    if (a === "__v_isReadonly")
      return f;
    if (a === "__v_isShallow")
      return d;
    if (a === "__v_raw")
      return s === (f ? d ? El : Nl : d ? xl : _l).get(r) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(r) === Object.getPrototypeOf(s) ? r : void 0;
    const c = Le(r);
    if (!f) {
      let w;
      if (c && (w = Fc[a]))
        return w;
      if (a === "hasOwnProperty")
        return Bc;
    }
    const h = Reflect.get(
      r,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Tt(r) ? r : s
    );
    return (qn(a) ? yl.has(a) : Kc(a)) || (f || Zt(r, "get", a), d) ? h : Tt(h) ? c && Ls(a) ? h : h.value : wt(h) ? f ? Tl(h) : $i(h) : h;
  }
}
class bl extends gl {
  constructor(r = !1) {
    super(!1, r);
  }
  set(r, a, s, f) {
    let d = r[a];
    if (!this._isShallow) {
      const w = Kr(d);
      if (!An(s) && !Kr(s) && (d = at(d), s = at(s)), !Le(r) && Tt(d) && !Tt(s))
        return w ? !1 : (d.value = s, !0);
    }
    const c = Le(r) && Ls(a) ? Number(a) < r.length : dt(r, a), h = Reflect.set(
      r,
      a,
      s,
      Tt(r) ? r : f
    );
    return r === at(f) && (c ? Mr(s, d) && Tr(r, "set", a, s) : Tr(r, "add", a, s)), h;
  }
  deleteProperty(r, a) {
    const s = dt(r, a);
    r[a];
    const f = Reflect.deleteProperty(r, a);
    return f && s && Tr(r, "delete", a, void 0), f;
  }
  has(r, a) {
    const s = Reflect.has(r, a);
    return (!qn(a) || !yl.has(a)) && Zt(r, "has", a), s;
  }
  ownKeys(r) {
    return Zt(
      r,
      "iterate",
      Le(r) ? "length" : No
    ), Reflect.ownKeys(r);
  }
}
class wl extends gl {
  constructor(r = !1) {
    super(!0, r);
  }
  set(r, a) {
    return !0;
  }
  deleteProperty(r, a) {
    return !0;
  }
}
const $c = /* @__PURE__ */ new bl(), qc = /* @__PURE__ */ new wl(), Uc = /* @__PURE__ */ new bl(!0), Vc = /* @__PURE__ */ new wl(!0), vs = (t) => t, Vi = (t) => Reflect.getPrototypeOf(t);
function Wc(t, r, a) {
  return function(...s) {
    const f = this.__v_raw, d = at(f), c = Po(d), h = t === "entries" || t === Symbol.iterator && c, w = t === "keys" && c, S = f[t](...s), O = a ? vs : r ? oa : Xt;
    return !r && Zt(
      d,
      "iterate",
      w ? ms : No
    ), {
      // iterator protocol
      next() {
        const { value: L, done: M } = S.next();
        return M ? { value: L, done: M } : {
          value: h ? [O(L[0]), O(L[1])] : O(L),
          done: M
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Wi(t) {
  return function(...r) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function Gc(t, r) {
  const a = {
    get(f) {
      const d = this.__v_raw, c = at(d), h = at(f);
      t || (Mr(f, h) && Zt(c, "get", f), Zt(c, "get", h));
      const { has: w } = Vi(c), S = r ? vs : t ? oa : Xt;
      if (w.call(c, f))
        return S(d.get(f));
      if (w.call(c, h))
        return S(d.get(h));
      d !== c && d.get(f);
    },
    get size() {
      const f = this.__v_raw;
      return !t && Zt(at(f), "iterate", No), Reflect.get(f, "size", f);
    },
    has(f) {
      const d = this.__v_raw, c = at(d), h = at(f);
      return t || (Mr(f, h) && Zt(c, "has", f), Zt(c, "has", h)), f === h ? d.has(f) : d.has(f) || d.has(h);
    },
    forEach(f, d) {
      const c = this, h = c.__v_raw, w = at(h), S = r ? vs : t ? oa : Xt;
      return !t && Zt(w, "iterate", No), h.forEach((O, L) => f.call(d, S(O), S(L), c));
    }
  };
  return nn(
    a,
    t ? {
      add: Wi("add"),
      set: Wi("set"),
      delete: Wi("delete"),
      clear: Wi("clear")
    } : {
      add(f) {
        !r && !An(f) && !Kr(f) && (f = at(f));
        const d = at(this);
        return Vi(d).has.call(d, f) || (d.add(f), Tr(d, "add", f, f)), this;
      },
      set(f, d) {
        !r && !An(d) && !Kr(d) && (d = at(d));
        const c = at(this), { has: h, get: w } = Vi(c);
        let S = h.call(c, f);
        S || (f = at(f), S = h.call(c, f));
        const O = w.call(c, f);
        return c.set(f, d), S ? Mr(d, O) && Tr(c, "set", f, d) : Tr(c, "add", f, d), this;
      },
      delete(f) {
        const d = at(this), { has: c, get: h } = Vi(d);
        let w = c.call(d, f);
        w || (f = at(f), w = c.call(d, f)), h && h.call(d, f);
        const S = d.delete(f);
        return w && Tr(d, "delete", f, void 0), S;
      },
      clear() {
        const f = at(this), d = f.size !== 0, c = f.clear();
        return d && Tr(
          f,
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
  ].forEach((f) => {
    a[f] = Wc(f, t, r);
  }), a;
}
function ya(t, r) {
  const a = Gc(t, r);
  return (s, f, d) => f === "__v_isReactive" ? !t : f === "__v_isReadonly" ? t : f === "__v_raw" ? s : Reflect.get(
    dt(a, f) && f in s ? a : s,
    f,
    d
  );
}
const Hc = {
  get: /* @__PURE__ */ ya(!1, !1)
}, Yc = {
  get: /* @__PURE__ */ ya(!1, !0)
}, Xc = {
  get: /* @__PURE__ */ ya(!0, !1)
}, Qc = {
  get: /* @__PURE__ */ ya(!0, !0)
}, _l = /* @__PURE__ */ new WeakMap(), xl = /* @__PURE__ */ new WeakMap(), Nl = /* @__PURE__ */ new WeakMap(), El = /* @__PURE__ */ new WeakMap();
function zc(t) {
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
function Jc(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : zc(Nc(t));
}
function $i(t) {
  return Kr(t) ? t : ga(
    t,
    !1,
    $c,
    Hc,
    _l
  );
}
function Zc(t) {
  return ga(
    t,
    !1,
    Uc,
    Yc,
    xl
  );
}
function Tl(t) {
  return ga(
    t,
    !0,
    qc,
    Xc,
    Nl
  );
}
function ef(t) {
  return ga(
    t,
    !0,
    Vc,
    Qc,
    El
  );
}
function ga(t, r, a, s, f) {
  if (!wt(t) || t.__v_raw && !(r && t.__v_isReactive))
    return t;
  const d = Jc(t);
  if (d === 0)
    return t;
  const c = f.get(t);
  if (c)
    return c;
  const h = new Proxy(
    t,
    d === 2 ? s : a
  );
  return f.set(t, h), h;
}
function Rr(t) {
  return Kr(t) ? Rr(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Kr(t) {
  return !!(t && t.__v_isReadonly);
}
function An(t) {
  return !!(t && t.__v_isShallow);
}
function qs(t) {
  return t ? !!t.__v_raw : !1;
}
function at(t) {
  const r = t && t.__v_raw;
  return r ? at(r) : t;
}
function ba(t) {
  return !dt(t, "__v_skip") && Object.isExtensible(t) && ps(t, "__v_skip", !0), t;
}
const Xt = (t) => wt(t) ? $i(t) : t, oa = (t) => wt(t) ? Tl(t) : t;
function Tt(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function tt(t) {
  return Ol(t, !1);
}
function Xn(t) {
  return Ol(t, !0);
}
function Ol(t, r) {
  return Tt(t) ? t : new tf(t, r);
}
class tf {
  constructor(r, a) {
    this.dep = new $s(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? r : at(r), this._value = a ? r : Xt(r), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(r) {
    const a = this._rawValue, s = this.__v_isShallow || An(r) || Kr(r);
    r = s ? r : at(r), Mr(r, a) && (this._rawValue = r, this._value = s ? r : Xt(r), this.dep.trigger());
  }
}
function Re(t) {
  return Tt(t) ? t.value : t;
}
function nf(t) {
  return Be(t) ? t() : Re(t);
}
const rf = {
  get: (t, r, a) => r === "__v_raw" ? t : Re(Reflect.get(t, r, a)),
  set: (t, r, a, s) => {
    const f = t[r];
    return Tt(f) && !Tt(a) ? (f.value = a, !0) : Reflect.set(t, r, a, s);
  }
};
function Cl(t) {
  return Rr(t) ? t : new Proxy(t, rf);
}
function of(t) {
  const r = Le(t) ? new Array(t.length) : {};
  for (const a in t)
    r[a] = Rl(t, a);
  return r;
}
class af {
  constructor(r, a, s) {
    this._object = r, this._key = a, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const r = this._object[this._key];
    return this._value = r === void 0 ? this._defaultValue : r;
  }
  set value(r) {
    this._object[this._key] = r;
  }
  get dep() {
    return jc(at(this._object), this._key);
  }
}
class sf {
  constructor(r) {
    this._getter = r, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function uf(t, r, a) {
  return Tt(t) ? t : Be(t) ? new sf(t) : wt(t) && arguments.length > 1 ? Rl(t, r, a) : tt(t);
}
function Rl(t, r, a) {
  const s = t[r];
  return Tt(s) ? s : new af(t, r, a);
}
class lf {
  constructor(r, a, s) {
    this.fn = r, this.setter = a, this._value = void 0, this.dep = new $s(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Ii - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    gt !== this)
      return fl(this, !0), !0;
  }
  get value() {
    const r = this.dep.track();
    return hl(this), r && (r.version = this.dep.version), this._value;
  }
  set value(r) {
    this.setter && this.setter(r);
  }
}
function cf(t, r, a = !1) {
  let s, f;
  return Be(t) ? s = t : (s = t.get, f = t.set), new lf(s, f, a);
}
const Gi = {}, ia = /* @__PURE__ */ new WeakMap();
let xo;
function ff(t, r = !1, a = xo) {
  if (a) {
    let s = ia.get(a);
    s || ia.set(a, s = []), s.push(t);
  }
}
function df(t, r, a = ht) {
  const { immediate: s, deep: f, once: d, scheduler: c, augmentJob: h, call: w } = a, S = (ae) => f ? ae : An(ae) || f === !1 || f === 0 ? Or(ae, 1) : Or(ae);
  let O, L, M, B, Y = !1, V = !1;
  if (Tt(t) ? (L = () => t.value, Y = An(t)) : Rr(t) ? (L = () => S(t), Y = !0) : Le(t) ? (V = !0, Y = t.some((ae) => Rr(ae) || An(ae)), L = () => t.map((ae) => {
    if (Tt(ae))
      return ae.value;
    if (Rr(ae))
      return S(ae);
    if (Be(ae))
      return w ? w(ae, 2) : ae();
  })) : Be(t) ? r ? L = w ? () => w(t, 2) : t : L = () => {
    if (M) {
      Sr();
      try {
        M();
      } finally {
        Dr();
      }
    }
    const ae = xo;
    xo = O;
    try {
      return w ? w(t, 3, [B]) : t(B);
    } finally {
      xo = ae;
    }
  } : L = Qn, r && f) {
    const ae = L, xe = f === !0 ? 1 / 0 : f;
    L = () => Or(ae(), xe);
  }
  const U = Fs(), W = () => {
    O.stop(), U && U.active && ks(U.effects, O);
  };
  if (d && r) {
    const ae = r;
    r = (...xe) => {
      ae(...xe), W();
    };
  }
  let F = V ? new Array(t.length).fill(Gi) : Gi;
  const K = (ae) => {
    if (!(!(O.flags & 1) || !O.dirty && !ae))
      if (r) {
        const xe = O.run();
        if (f || Y || (V ? xe.some((ge, ce) => Mr(ge, F[ce])) : Mr(xe, F))) {
          M && M();
          const ge = xo;
          xo = O;
          try {
            const ce = [
              xe,
              // pass undefined as the old value when it's changed for the first time
              F === Gi ? void 0 : V && F[0] === Gi ? [] : F,
              B
            ];
            F = xe, w ? w(r, 3, ce) : (
              // @ts-expect-error
              r(...ce)
            );
          } finally {
            xo = ge;
          }
        }
      } else
        O.run();
  };
  return h && h(K), O = new ll(L), O.scheduler = c ? () => c(K, !1) : K, B = (ae) => ff(ae, !1, O), M = O.onStop = () => {
    const ae = ia.get(O);
    if (ae) {
      if (w)
        w(ae, 4);
      else
        for (const xe of ae) xe();
      ia.delete(O);
    }
  }, r ? s ? K(!0) : F = O.run() : c ? c(K.bind(null, !0), !0) : O.run(), W.pause = O.pause.bind(O), W.resume = O.resume.bind(O), W.stop = W, W;
}
function Or(t, r = 1 / 0, a) {
  if (r <= 0 || !wt(t) || t.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(t)))
    return t;
  if (a.add(t), r--, Tt(t))
    Or(t.value, r, a);
  else if (Le(t))
    for (let s = 0; s < t.length; s++)
      Or(t[s], r, a);
  else if (Bo(t) || Po(t))
    t.forEach((s) => {
      Or(s, r, a);
    });
  else if (nl(t)) {
    for (const s in t)
      Or(t[s], r, a);
    for (const s of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, s) && Or(t[s], r, a);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qi(t, r, a, s) {
  try {
    return s ? t(...s) : t();
  } catch (f) {
    wa(f, r, a);
  }
}
function zn(t, r, a, s) {
  if (Be(t)) {
    const f = qi(t, r, a, s);
    return f && el(f) && f.catch((d) => {
      wa(d, r, a);
    }), f;
  }
  if (Le(t)) {
    const f = [];
    for (let d = 0; d < t.length; d++)
      f.push(zn(t[d], r, a, s));
    return f;
  }
}
function wa(t, r, a, s = !0) {
  const f = r ? r.vnode : null, { errorHandler: d, throwUnhandledErrorInProduction: c } = r && r.appContext.config || ht;
  if (r) {
    let h = r.parent;
    const w = r.proxy, S = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; h; ) {
      const O = h.ec;
      if (O) {
        for (let L = 0; L < O.length; L++)
          if (O[L](t, w, S) === !1)
            return;
      }
      h = h.parent;
    }
    if (d) {
      Sr(), qi(d, null, 10, [
        t,
        w,
        S
      ]), Dr();
      return;
    }
  }
  pf(t, a, f, s, c);
}
function pf(t, r, a, s = !0, f = !1) {
  if (f)
    throw t;
  console.error(t);
}
const hn = [];
let Gn = -1;
const ko = [];
let Lr = null, Do = 0;
const Al = /* @__PURE__ */ Promise.resolve();
let aa = null;
function Us(t) {
  const r = aa || Al;
  return t ? r.then(this ? t.bind(this) : t) : r;
}
function hf(t) {
  let r = Gn + 1, a = hn.length;
  for (; r < a; ) {
    const s = r + a >>> 1, f = hn[s], d = ki(f);
    d < t || d === t && f.flags & 2 ? r = s + 1 : a = s;
  }
  return r;
}
function Vs(t) {
  if (!(t.flags & 1)) {
    const r = ki(t), a = hn[hn.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(t.flags & 2) && r >= ki(a) ? hn.push(t) : hn.splice(hf(r), 0, t), t.flags |= 1, Sl();
  }
}
function Sl() {
  aa || (aa = Al.then(Il));
}
function mf(t) {
  Le(t) ? ko.push(...t) : Lr && t.id === -1 ? Lr.splice(Do + 1, 0, t) : t.flags & 1 || (ko.push(t), t.flags |= 1), Sl();
}
function fu(t, r, a = Gn + 1) {
  for (; a < hn.length; a++) {
    const s = hn[a];
    if (s && s.flags & 2) {
      if (t && s.id !== t.uid)
        continue;
      hn.splice(a, 1), a--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Dl(t) {
  if (ko.length) {
    const r = [...new Set(ko)].sort(
      (a, s) => ki(a) - ki(s)
    );
    if (ko.length = 0, Lr) {
      Lr.push(...r);
      return;
    }
    for (Lr = r, Do = 0; Do < Lr.length; Do++) {
      const a = Lr[Do];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    Lr = null, Do = 0;
  }
}
const ki = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Il(t) {
  try {
    for (Gn = 0; Gn < hn.length; Gn++) {
      const r = hn[Gn];
      r && !(r.flags & 8) && (r.flags & 4 && (r.flags &= -2), qi(
        r,
        r.i,
        r.i ? 15 : 14
      ), r.flags & 4 || (r.flags &= -2));
    }
  } finally {
    for (; Gn < hn.length; Gn++) {
      const r = hn[Gn];
      r && (r.flags &= -2);
    }
    Gn = -1, hn.length = 0, Dl(), aa = null, (hn.length || ko.length) && Il();
  }
}
let Ft = null, Pl = null;
function sa(t) {
  const r = Ft;
  return Ft = t, Pl = t && t.type.__scopeId || null, r;
}
function ys(t, r = Ft, a) {
  if (!r || t._n)
    return t;
  const s = (...f) => {
    s._d && Tu(-1);
    const d = sa(r);
    let c;
    try {
      c = t(...f);
    } finally {
      sa(d), s._d && Tu(1);
    }
    return c;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Ye(t, r) {
  if (Ft === null)
    return t;
  const a = Ta(Ft), s = t.dirs || (t.dirs = []);
  for (let f = 0; f < r.length; f++) {
    let [d, c, h, w = ht] = r[f];
    d && (Be(d) && (d = {
      mounted: d,
      updated: d
    }), d.deep && Or(c), s.push({
      dir: d,
      instance: a,
      value: c,
      oldValue: void 0,
      arg: h,
      modifiers: w
    }));
  }
  return t;
}
function wo(t, r, a, s) {
  const f = t.dirs, d = r && r.dirs;
  for (let c = 0; c < f.length; c++) {
    const h = f[c];
    d && (h.oldValue = d[c].value);
    let w = h.dir[s];
    w && (Sr(), zn(w, a, 8, [
      t.el,
      h,
      t,
      r
    ]), Dr());
  }
}
const kl = Symbol("_vte"), vf = (t) => t.__isTeleport, Oi = (t) => t && (t.disabled || t.disabled === ""), du = (t) => t && (t.defer || t.defer === ""), pu = (t) => typeof SVGElement < "u" && t instanceof SVGElement, hu = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, gs = (t, r) => {
  const a = t && t.to;
  return Ot(a) ? r ? r(a) : null : a;
}, Ll = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, r, a, s, f, d, c, h, w, S) {
    const {
      mc: O,
      pc: L,
      pbc: M,
      o: { insert: B, querySelector: Y, createText: V, createComment: U }
    } = S, W = Oi(r.props);
    let { shapeFlag: F, children: K, dynamicChildren: ae } = r;
    if (t == null) {
      const xe = r.el = V(""), ge = r.anchor = V("");
      B(xe, a, s), B(ge, a, s);
      const ce = (G, Ie) => {
        F & 16 && (f && f.isCE && (f.ce._teleportTarget = G), O(
          K,
          G,
          Ie,
          f,
          d,
          c,
          h,
          w
        ));
      }, Ne = () => {
        const G = r.target = gs(r.props, Y), Ie = jl(G, r, V, B);
        G && (c !== "svg" && pu(G) ? c = "svg" : c !== "mathml" && hu(G) && (c = "mathml"), W || (ce(G, Ie), zi(r, !1)));
      };
      W && (ce(a, ge), zi(r, !0)), du(r.props) ? (r.el.__isMounted = !1, pn(() => {
        Ne(), delete r.el.__isMounted;
      }, d)) : Ne();
    } else {
      if (du(r.props) && t.el.__isMounted === !1) {
        pn(() => {
          Ll.process(
            t,
            r,
            a,
            s,
            f,
            d,
            c,
            h,
            w,
            S
          );
        }, d);
        return;
      }
      r.el = t.el, r.targetStart = t.targetStart;
      const xe = r.anchor = t.anchor, ge = r.target = t.target, ce = r.targetAnchor = t.targetAnchor, Ne = Oi(t.props), G = Ne ? a : ge, Ie = Ne ? xe : ce;
      if (c === "svg" || pu(ge) ? c = "svg" : (c === "mathml" || hu(ge)) && (c = "mathml"), ae ? (M(
        t.dynamicChildren,
        ae,
        G,
        f,
        d,
        c,
        h
      ), Xs(t, r, !0)) : w || L(
        t,
        r,
        G,
        Ie,
        f,
        d,
        c,
        h,
        !1
      ), W)
        Ne ? r.props && t.props && r.props.to !== t.props.to && (r.props.to = t.props.to) : Hi(
          r,
          a,
          xe,
          S,
          1
        );
      else if ((r.props && r.props.to) !== (t.props && t.props.to)) {
        const nt = r.target = gs(
          r.props,
          Y
        );
        nt && Hi(
          r,
          nt,
          null,
          S,
          0
        );
      } else Ne && Hi(
        r,
        ge,
        ce,
        S,
        1
      );
      zi(r, W);
    }
  },
  remove(t, r, a, { um: s, o: { remove: f } }, d) {
    const {
      shapeFlag: c,
      children: h,
      anchor: w,
      targetStart: S,
      targetAnchor: O,
      target: L,
      props: M
    } = t;
    if (L && (f(S), f(O)), d && f(w), c & 16) {
      const B = d || !Oi(M);
      for (let Y = 0; Y < h.length; Y++) {
        const V = h[Y];
        s(
          V,
          r,
          a,
          B,
          !!V.dynamicChildren
        );
      }
    }
  },
  move: Hi,
  hydrate: yf
};
function Hi(t, r, a, { o: { insert: s }, m: f }, d = 2) {
  d === 0 && s(t.targetAnchor, r, a);
  const { el: c, anchor: h, shapeFlag: w, children: S, props: O } = t, L = d === 2;
  if (L && s(c, r, a), (!L || Oi(O)) && w & 16)
    for (let M = 0; M < S.length; M++)
      f(
        S[M],
        r,
        a,
        2
      );
  L && s(h, r, a);
}
function yf(t, r, a, s, f, d, {
  o: { nextSibling: c, parentNode: h, querySelector: w, insert: S, createText: O }
}, L) {
  const M = r.target = gs(
    r.props,
    w
  );
  if (M) {
    const B = Oi(r.props), Y = M._lpa || M.firstChild;
    if (r.shapeFlag & 16)
      if (B)
        r.anchor = L(
          c(t),
          r,
          h(t),
          a,
          s,
          f,
          d
        ), r.targetStart = Y, r.targetAnchor = Y && c(Y);
      else {
        r.anchor = c(t);
        let V = Y;
        for (; V; ) {
          if (V && V.nodeType === 8) {
            if (V.data === "teleport start anchor")
              r.targetStart = V;
            else if (V.data === "teleport anchor") {
              r.targetAnchor = V, M._lpa = r.targetAnchor && c(r.targetAnchor);
              break;
            }
          }
          V = c(V);
        }
        r.targetAnchor || jl(M, r, O, S), L(
          Y && c(Y),
          r,
          M,
          a,
          s,
          f,
          d
        );
      }
    zi(r, B);
  }
  return r.anchor && c(r.anchor);
}
const _a = Ll;
function zi(t, r) {
  const a = t.ctx;
  if (a && a.ut) {
    let s, f;
    for (r ? (s = t.el, f = t.anchor) : (s = t.targetStart, f = t.targetAnchor); s && s !== f; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", a.uid), s = s.nextSibling;
    a.ut();
  }
}
function jl(t, r, a, s) {
  const f = r.targetStart = a(""), d = r.targetAnchor = a("");
  return f[kl] = d, t && (s(f, t), s(d, t)), d;
}
function Ws(t, r) {
  t.shapeFlag & 6 && t.component ? (t.transition = r, Ws(t.component.subTree, r)) : t.shapeFlag & 128 ? (t.ssContent.transition = r.clone(t.ssContent), t.ssFallback.transition = r.clone(t.ssFallback)) : t.transition = r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function kt(t, r) {
  return Be(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    nn({ name: t.name }, r, { setup: t })
  ) : t;
}
function Fl(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function gf(t) {
  const r = vd(), a = Xn(null);
  if (r) {
    const f = r.refs === ht ? r.refs = {} : r.refs;
    Object.defineProperty(f, t, {
      enumerable: !0,
      get: () => a.value,
      set: (d) => a.value = d
    });
  }
  return a;
}
function Ci(t, r, a, s, f = !1) {
  if (Le(t)) {
    t.forEach(
      (Y, V) => Ci(
        Y,
        r && (Le(r) ? r[V] : r),
        a,
        s,
        f
      )
    );
    return;
  }
  if (Lo(s) && !f) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Ci(t, r, a, s.component.subTree);
    return;
  }
  const d = s.shapeFlag & 4 ? Ta(s.component) : s.el, c = f ? null : d, { i: h, r: w } = t, S = r && r.r, O = h.refs === ht ? h.refs = {} : h.refs, L = h.setupState, M = at(L), B = L === ht ? () => !1 : (Y) => dt(M, Y);
  if (S != null && S !== w && (Ot(S) ? (O[S] = null, B(S) && (L[S] = null)) : Tt(S) && (S.value = null)), Be(w))
    qi(w, h, 12, [c, O]);
  else {
    const Y = Ot(w), V = Tt(w);
    if (Y || V) {
      const U = () => {
        if (t.f) {
          const W = Y ? B(w) ? L[w] : O[w] : w.value;
          f ? Le(W) && ks(W, d) : Le(W) ? W.includes(d) || W.push(d) : Y ? (O[w] = [d], B(w) && (L[w] = O[w])) : (w.value = [d], t.k && (O[t.k] = w.value));
        } else Y ? (O[w] = c, B(w) && (L[w] = c)) : V && (w.value = c, t.k && (O[t.k] = c));
      };
      c ? (U.id = -1, pn(U, a)) : U();
    }
  }
}
ma().requestIdleCallback;
ma().cancelIdleCallback;
const Lo = (t) => !!t.type.__asyncLoader, Ml = (t) => t.type.__isKeepAlive;
function bf(t, r) {
  Kl(t, "a", r);
}
function wf(t, r) {
  Kl(t, "da", r);
}
function Kl(t, r, a = $t) {
  const s = t.__wdc || (t.__wdc = () => {
    let f = a;
    for (; f; ) {
      if (f.isDeactivated)
        return;
      f = f.parent;
    }
    return t();
  });
  if (xa(r, s, a), a) {
    let f = a.parent;
    for (; f && f.parent; )
      Ml(f.parent.vnode) && _f(s, r, a, f), f = f.parent;
  }
}
function _f(t, r, a, s) {
  const f = xa(
    r,
    t,
    s,
    !0
    /* prepend */
  );
  Gs(() => {
    ks(s[r], f);
  }, a);
}
function xa(t, r, a = $t, s = !1) {
  if (a) {
    const f = a[t] || (a[t] = []), d = r.__weh || (r.__weh = (...c) => {
      Sr();
      const h = Ui(a), w = zn(r, a, t, c);
      return h(), Dr(), w;
    });
    return s ? f.unshift(d) : f.push(d), d;
  }
}
const Pr = (t) => (r, a = $t) => {
  (!ji || t === "sp") && xa(t, (...s) => r(...s), a);
}, xf = Pr("bm"), $o = Pr("m"), Nf = Pr(
  "bu"
), Ef = Pr("u"), Tf = Pr(
  "bum"
), Gs = Pr("um"), Of = Pr(
  "sp"
), Cf = Pr("rtg"), Rf = Pr("rtc");
function Af(t, r = $t) {
  xa("ec", t, r);
}
const Sf = "components", Bl = Symbol.for("v-ndc");
function Df(t) {
  return Ot(t) ? If(Sf, t, !1) || t : t || Bl;
}
function If(t, r, a = !0, s = !1) {
  const f = Ft || $t;
  if (f) {
    const d = f.type;
    {
      const h = _d(
        d,
        !1
      );
      if (h && (h === r || h === Dn(r) || h === ha(Dn(r))))
        return d;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      mu(f[t] || d[t], r) || // global registration
      mu(f.appContext[t], r)
    );
    return !c && s ? d : c;
  }
}
function mu(t, r) {
  return t && (t[r] || t[Dn(r)] || t[ha(Dn(r))]);
}
function Dt(t, r, a, s) {
  let f;
  const d = a, c = Le(t);
  if (c || Ot(t)) {
    const h = c && Rr(t);
    let w = !1, S = !1;
    h && (w = !An(t), S = Kr(t), t = va(t)), f = new Array(t.length);
    for (let O = 0, L = t.length; O < L; O++)
      f[O] = r(
        w ? S ? oa(Xt(t[O])) : Xt(t[O]) : t[O],
        O,
        void 0,
        d
      );
  } else if (typeof t == "number") {
    f = new Array(t);
    for (let h = 0; h < t; h++)
      f[h] = r(h + 1, h, void 0, d);
  } else if (wt(t))
    if (t[Symbol.iterator])
      f = Array.from(
        t,
        (h, w) => r(h, w, void 0, d)
      );
    else {
      const h = Object.keys(t);
      f = new Array(h.length);
      for (let w = 0, S = h.length; w < S; w++) {
        const O = h[w];
        f[w] = r(t[O], O, w, d);
      }
    }
  else
    f = [];
  return f;
}
function vu(t, r, a = {}, s, f) {
  if (Ft.ce || Ft.parent && Lo(Ft.parent) && Ft.parent.ce)
    return r !== "default" && (a.name = r), de(), On(
      He,
      null,
      [Nt("slot", a, s)],
      64
    );
  let d = t[r];
  d && d._c && (d._d = !1), de();
  const c = d && $l(d(a)), h = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, w = On(
    He,
    {
      key: (h && !qn(h) ? h : `_${r}`) + // #7256 force differentiate fallback content from actual content
      (!c && s ? "_fb" : "")
    },
    c || [],
    c && t._ === 1 ? 64 : -2
  );
  return d && d._c && (d._d = !0), w;
}
function $l(t) {
  return t.some((r) => zs(r) ? !(r.type === Ir || r.type === He && !$l(r.children)) : !0) ? t : null;
}
const bs = (t) => t ? ac(t) ? Ta(t) : bs(t.parent) : null, Ri = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ nn(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => bs(t.parent),
    $root: (t) => bs(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Ul(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Vs(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Us.bind(t.proxy)),
    $watch: (t) => nd.bind(t)
  })
), os = (t, r) => t !== ht && !t.__isScriptSetup && dt(t, r), Pf = {
  get({ _: t }, r) {
    if (r === "__v_skip")
      return !0;
    const { ctx: a, setupState: s, data: f, props: d, accessCache: c, type: h, appContext: w } = t;
    let S;
    if (r[0] !== "$") {
      const B = c[r];
      if (B !== void 0)
        switch (B) {
          case 1:
            return s[r];
          case 2:
            return f[r];
          case 4:
            return a[r];
          case 3:
            return d[r];
        }
      else {
        if (os(s, r))
          return c[r] = 1, s[r];
        if (f !== ht && dt(f, r))
          return c[r] = 2, f[r];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (S = t.propsOptions[0]) && dt(S, r)
        )
          return c[r] = 3, d[r];
        if (a !== ht && dt(a, r))
          return c[r] = 4, a[r];
        ws && (c[r] = 0);
      }
    }
    const O = Ri[r];
    let L, M;
    if (O)
      return r === "$attrs" && Zt(t.attrs, "get", ""), O(t);
    if (
      // css module (injected by vue-loader)
      (L = h.__cssModules) && (L = L[r])
    )
      return L;
    if (a !== ht && dt(a, r))
      return c[r] = 4, a[r];
    if (
      // global properties
      M = w.config.globalProperties, dt(M, r)
    )
      return M[r];
  },
  set({ _: t }, r, a) {
    const { data: s, setupState: f, ctx: d } = t;
    return os(f, r) ? (f[r] = a, !0) : s !== ht && dt(s, r) ? (s[r] = a, !0) : dt(t.props, r) || r[0] === "$" && r.slice(1) in t ? !1 : (d[r] = a, !0);
  },
  has({
    _: { data: t, setupState: r, accessCache: a, ctx: s, appContext: f, propsOptions: d }
  }, c) {
    let h;
    return !!a[c] || t !== ht && dt(t, c) || os(r, c) || (h = d[0]) && dt(h, c) || dt(s, c) || dt(Ri, c) || dt(f.config.globalProperties, c);
  },
  defineProperty(t, r, a) {
    return a.get != null ? t._.accessCache[r] = 0 : dt(a, "value") && this.set(t, r, a.value, null), Reflect.defineProperty(t, r, a);
  }
};
function yu(t) {
  return Le(t) ? t.reduce(
    (r, a) => (r[a] = null, r),
    {}
  ) : t;
}
let ws = !0;
function kf(t) {
  const r = Ul(t), a = t.proxy, s = t.ctx;
  ws = !1, r.beforeCreate && gu(r.beforeCreate, t, "bc");
  const {
    // state
    data: f,
    computed: d,
    methods: c,
    watch: h,
    provide: w,
    inject: S,
    // lifecycle
    created: O,
    beforeMount: L,
    mounted: M,
    beforeUpdate: B,
    updated: Y,
    activated: V,
    deactivated: U,
    beforeDestroy: W,
    beforeUnmount: F,
    destroyed: K,
    unmounted: ae,
    render: xe,
    renderTracked: ge,
    renderTriggered: ce,
    errorCaptured: Ne,
    serverPrefetch: G,
    // public API
    expose: Ie,
    inheritAttrs: nt,
    // assets
    components: qe,
    directives: ft,
    filters: Cn
  } = r;
  if (S && Lf(S, s, null), c)
    for (const Ce in c) {
      const $e = c[Ce];
      Be($e) && (s[Ce] = $e.bind(a));
    }
  if (f) {
    const Ce = f.call(a, a);
    wt(Ce) && (t.data = $i(Ce));
  }
  if (ws = !0, d)
    for (const Ce in d) {
      const $e = d[Ce], _t = Be($e) ? $e.bind(a, a) : Be($e.get) ? $e.get.bind(a, a) : Qn, pt = !Be($e) && Be($e.set) ? $e.set.bind(a) : Qn, Et = st({
        get: _t,
        set: pt
      });
      Object.defineProperty(s, Ce, {
        enumerable: !0,
        configurable: !0,
        get: () => Et.value,
        set: (Kt) => Et.value = Kt
      });
    }
  if (h)
    for (const Ce in h)
      ql(h[Ce], s, a, Ce);
  if (w) {
    const Ce = Be(w) ? w.call(a) : w;
    Reflect.ownKeys(Ce).forEach(($e) => {
      $f($e, Ce[$e]);
    });
  }
  O && gu(O, t, "c");
  function ut(Ce, $e) {
    Le($e) ? $e.forEach((_t) => Ce(_t.bind(a))) : $e && Ce($e.bind(a));
  }
  if (ut(xf, L), ut($o, M), ut(Nf, B), ut(Ef, Y), ut(bf, V), ut(wf, U), ut(Af, Ne), ut(Rf, ge), ut(Cf, ce), ut(Tf, F), ut(Gs, ae), ut(Of, G), Le(Ie))
    if (Ie.length) {
      const Ce = t.exposed || (t.exposed = {});
      Ie.forEach(($e) => {
        Object.defineProperty(Ce, $e, {
          get: () => a[$e],
          set: (_t) => a[$e] = _t
        });
      });
    } else t.exposed || (t.exposed = {});
  xe && t.render === Qn && (t.render = xe), nt != null && (t.inheritAttrs = nt), qe && (t.components = qe), ft && (t.directives = ft), G && Fl(t);
}
function Lf(t, r, a = Qn) {
  Le(t) && (t = _s(t));
  for (const s in t) {
    const f = t[s];
    let d;
    wt(f) ? "default" in f ? d = Ai(
      f.from || s,
      f.default,
      !0
    ) : d = Ai(f.from || s) : d = Ai(f), Tt(d) ? Object.defineProperty(r, s, {
      enumerable: !0,
      configurable: !0,
      get: () => d.value,
      set: (c) => d.value = c
    }) : r[s] = d;
  }
}
function gu(t, r, a) {
  zn(
    Le(t) ? t.map((s) => s.bind(r.proxy)) : t.bind(r.proxy),
    r,
    a
  );
}
function ql(t, r, a, s) {
  let f = s.includes(".") ? ec(a, s) : () => a[s];
  if (Ot(t)) {
    const d = r[t];
    Be(d) && en(f, d);
  } else if (Be(t))
    en(f, t.bind(a));
  else if (wt(t))
    if (Le(t))
      t.forEach((d) => ql(d, r, a, s));
    else {
      const d = Be(t.handler) ? t.handler.bind(a) : r[t.handler];
      Be(d) && en(f, d, t);
    }
}
function Ul(t) {
  const r = t.type, { mixins: a, extends: s } = r, {
    mixins: f,
    optionsCache: d,
    config: { optionMergeStrategies: c }
  } = t.appContext, h = d.get(r);
  let w;
  return h ? w = h : !f.length && !a && !s ? w = r : (w = {}, f.length && f.forEach(
    (S) => ua(w, S, c, !0)
  ), ua(w, r, c)), wt(r) && d.set(r, w), w;
}
function ua(t, r, a, s = !1) {
  const { mixins: f, extends: d } = r;
  d && ua(t, d, a, !0), f && f.forEach(
    (c) => ua(t, c, a, !0)
  );
  for (const c in r)
    if (!(s && c === "expose")) {
      const h = jf[c] || a && a[c];
      t[c] = h ? h(t[c], r[c]) : r[c];
    }
  return t;
}
const jf = {
  data: bu,
  props: wu,
  emits: wu,
  // objects
  methods: xi,
  computed: xi,
  // lifecycle
  beforeCreate: dn,
  created: dn,
  beforeMount: dn,
  mounted: dn,
  beforeUpdate: dn,
  updated: dn,
  beforeDestroy: dn,
  beforeUnmount: dn,
  destroyed: dn,
  unmounted: dn,
  activated: dn,
  deactivated: dn,
  errorCaptured: dn,
  serverPrefetch: dn,
  // assets
  components: xi,
  directives: xi,
  // watch
  watch: Mf,
  // provide / inject
  provide: bu,
  inject: Ff
};
function bu(t, r) {
  return r ? t ? function() {
    return nn(
      Be(t) ? t.call(this, this) : t,
      Be(r) ? r.call(this, this) : r
    );
  } : r : t;
}
function Ff(t, r) {
  return xi(_s(t), _s(r));
}
function _s(t) {
  if (Le(t)) {
    const r = {};
    for (let a = 0; a < t.length; a++)
      r[t[a]] = t[a];
    return r;
  }
  return t;
}
function dn(t, r) {
  return t ? [...new Set([].concat(t, r))] : r;
}
function xi(t, r) {
  return t ? nn(/* @__PURE__ */ Object.create(null), t, r) : r;
}
function wu(t, r) {
  return t ? Le(t) && Le(r) ? [.../* @__PURE__ */ new Set([...t, ...r])] : nn(
    /* @__PURE__ */ Object.create(null),
    yu(t),
    yu(r ?? {})
  ) : r;
}
function Mf(t, r) {
  if (!t) return r;
  if (!r) return t;
  const a = nn(/* @__PURE__ */ Object.create(null), t);
  for (const s in r)
    a[s] = dn(t[s], r[s]);
  return a;
}
function Vl() {
  return {
    app: null,
    config: {
      isNativeTag: _c,
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
let Kf = 0;
function Bf(t, r) {
  return function(s, f = null) {
    Be(s) || (s = nn({}, s)), f != null && !wt(f) && (f = null);
    const d = Vl(), c = /* @__PURE__ */ new WeakSet(), h = [];
    let w = !1;
    const S = d.app = {
      _uid: Kf++,
      _component: s,
      _props: f,
      _container: null,
      _context: d,
      _instance: null,
      version: Nd,
      get config() {
        return d.config;
      },
      set config(O) {
      },
      use(O, ...L) {
        return c.has(O) || (O && Be(O.install) ? (c.add(O), O.install(S, ...L)) : Be(O) && (c.add(O), O(S, ...L))), S;
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
      mount(O, L, M) {
        if (!w) {
          const B = S._ceVNode || Nt(s, f);
          return B.appContext = d, M === !0 ? M = "svg" : M === !1 && (M = void 0), t(B, O, M), w = !0, S._container = O, O.__vue_app__ = S, Ta(B.component);
        }
      },
      onUnmount(O) {
        h.push(O);
      },
      unmount() {
        w && (zn(
          h,
          S._instance,
          16
        ), t(null, S._container), delete S._container.__vue_app__);
      },
      provide(O, L) {
        return d.provides[O] = L, S;
      },
      runWithContext(O) {
        const L = Eo;
        Eo = S;
        try {
          return O();
        } finally {
          Eo = L;
        }
      }
    };
    return S;
  };
}
let Eo = null;
function $f(t, r) {
  if ($t) {
    let a = $t.provides;
    const s = $t.parent && $t.parent.provides;
    s === a && (a = $t.provides = Object.create(s)), a[t] = r;
  }
}
function Ai(t, r, a = !1) {
  const s = $t || Ft;
  if (s || Eo) {
    let f = Eo ? Eo._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (f && t in f)
      return f[t];
    if (arguments.length > 1)
      return a && Be(r) ? r.call(s && s.proxy) : r;
  }
}
function qf() {
  return !!($t || Ft || Eo);
}
const Wl = {}, Gl = () => Object.create(Wl), Hl = (t) => Object.getPrototypeOf(t) === Wl;
function Uf(t, r, a, s = !1) {
  const f = {}, d = Gl();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Yl(t, r, f, d);
  for (const c in t.propsOptions[0])
    c in f || (f[c] = void 0);
  a ? t.props = s ? f : Zc(f) : t.type.props ? t.props = f : t.props = d, t.attrs = d;
}
function Vf(t, r, a, s) {
  const {
    props: f,
    attrs: d,
    vnode: { patchFlag: c }
  } = t, h = at(f), [w] = t.propsOptions;
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
        let M = O[L];
        if (Na(t.emitsOptions, M))
          continue;
        const B = r[M];
        if (w)
          if (dt(d, M))
            B !== d[M] && (d[M] = B, S = !0);
          else {
            const Y = Dn(M);
            f[Y] = xs(
              w,
              h,
              Y,
              B,
              t,
              !1
            );
          }
        else
          B !== d[M] && (d[M] = B, S = !0);
      }
    }
  } else {
    Yl(t, r, f, d) && (S = !0);
    let O;
    for (const L in h)
      (!r || // for camelCase
      !dt(r, L) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((O = Co(L)) === L || !dt(r, O))) && (w ? a && // for camelCase
      (a[L] !== void 0 || // for kebab-case
      a[O] !== void 0) && (f[L] = xs(
        w,
        h,
        L,
        void 0,
        t,
        !0
      )) : delete f[L]);
    if (d !== h)
      for (const L in d)
        (!r || !dt(r, L)) && (delete d[L], S = !0);
  }
  S && Tr(t.attrs, "set", "");
}
function Yl(t, r, a, s) {
  const [f, d] = t.propsOptions;
  let c = !1, h;
  if (r)
    for (let w in r) {
      if (Ni(w))
        continue;
      const S = r[w];
      let O;
      f && dt(f, O = Dn(w)) ? !d || !d.includes(O) ? a[O] = S : (h || (h = {}))[O] = S : Na(t.emitsOptions, w) || (!(w in s) || S !== s[w]) && (s[w] = S, c = !0);
    }
  if (d) {
    const w = at(a), S = h || ht;
    for (let O = 0; O < d.length; O++) {
      const L = d[O];
      a[L] = xs(
        f,
        w,
        L,
        S[L],
        t,
        !dt(S, L)
      );
    }
  }
  return c;
}
function xs(t, r, a, s, f, d) {
  const c = t[a];
  if (c != null) {
    const h = dt(c, "default");
    if (h && s === void 0) {
      const w = c.default;
      if (c.type !== Function && !c.skipFactory && Be(w)) {
        const { propsDefaults: S } = f;
        if (a in S)
          s = S[a];
        else {
          const O = Ui(f);
          s = S[a] = w.call(
            null,
            r
          ), O();
        }
      } else
        s = w;
      f.ce && f.ce._setProp(a, s);
    }
    c[
      0
      /* shouldCast */
    ] && (d && !h ? s = !1 : c[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Co(a)) && (s = !0));
  }
  return s;
}
const Wf = /* @__PURE__ */ new WeakMap();
function Xl(t, r, a = !1) {
  const s = a ? Wf : r.propsCache, f = s.get(t);
  if (f)
    return f;
  const d = t.props, c = {}, h = [];
  let w = !1;
  if (!Be(t)) {
    const O = (L) => {
      w = !0;
      const [M, B] = Xl(L, r, !0);
      nn(c, M), B && h.push(...B);
    };
    !a && r.mixins.length && r.mixins.forEach(O), t.extends && O(t.extends), t.mixins && t.mixins.forEach(O);
  }
  if (!d && !w)
    return wt(t) && s.set(t, Io), Io;
  if (Le(d))
    for (let O = 0; O < d.length; O++) {
      const L = Dn(d[O]);
      _u(L) && (c[L] = ht);
    }
  else if (d)
    for (const O in d) {
      const L = Dn(O);
      if (_u(L)) {
        const M = d[O], B = c[L] = Le(M) || Be(M) ? { type: M } : nn({}, M), Y = B.type;
        let V = !1, U = !0;
        if (Le(Y))
          for (let W = 0; W < Y.length; ++W) {
            const F = Y[W], K = Be(F) && F.name;
            if (K === "Boolean") {
              V = !0;
              break;
            } else K === "String" && (U = !1);
          }
        else
          V = Be(Y) && Y.name === "Boolean";
        B[
          0
          /* shouldCast */
        ] = V, B[
          1
          /* shouldCastTrue */
        ] = U, (V || dt(B, "default")) && h.push(L);
      }
    }
  const S = [c, h];
  return wt(t) && s.set(t, S), S;
}
function _u(t) {
  return t[0] !== "$" && !Ni(t);
}
const Hs = (t) => t[0] === "_" || t === "$stable", Ys = (t) => Le(t) ? t.map(Hn) : [Hn(t)], Gf = (t, r, a) => {
  if (r._n)
    return r;
  const s = ys((...f) => Ys(r(...f)), a);
  return s._c = !1, s;
}, Ql = (t, r, a) => {
  const s = t._ctx;
  for (const f in t) {
    if (Hs(f)) continue;
    const d = t[f];
    if (Be(d))
      r[f] = Gf(f, d, s);
    else if (d != null) {
      const c = Ys(d);
      r[f] = () => c;
    }
  }
}, zl = (t, r) => {
  const a = Ys(r);
  t.slots.default = () => a;
}, Jl = (t, r, a) => {
  for (const s in r)
    (a || !Hs(s)) && (t[s] = r[s]);
}, Hf = (t, r, a) => {
  const s = t.slots = Gl();
  if (t.vnode.shapeFlag & 32) {
    const f = r.__;
    f && ps(s, "__", f, !0);
    const d = r._;
    d ? (Jl(s, r, a), a && ps(s, "_", d, !0)) : Ql(r, s);
  } else r && zl(t, r);
}, Yf = (t, r, a) => {
  const { vnode: s, slots: f } = t;
  let d = !0, c = ht;
  if (s.shapeFlag & 32) {
    const h = r._;
    h ? a && h === 1 ? d = !1 : Jl(f, r, a) : (d = !r.$stable, Ql(r, f)), c = r;
  } else r && (zl(t, r), c = { default: 1 });
  if (d)
    for (const h in f)
      !Hs(h) && c[h] == null && delete f[h];
}, pn = ld;
function Xf(t) {
  return Qf(t);
}
function Qf(t, r) {
  const a = ma();
  a.__VUE__ = !0;
  const {
    insert: s,
    remove: f,
    patchProp: d,
    createElement: c,
    createText: h,
    createComment: w,
    setText: S,
    setElementText: O,
    parentNode: L,
    nextSibling: M,
    setScopeId: B = Qn,
    insertStaticContent: Y
  } = t, V = (A, q, oe, se = null, fe = null, ue = null, ye = void 0, we = null, he = !!q.dynamicChildren) => {
    if (A === q)
      return;
    A && !_i(A, q) && (se = D(A), Kt(A, fe, ue, !0), A = null), q.patchFlag === -2 && (he = !1, q.dynamicChildren = null);
    const { type: le, ref: Se, shapeFlag: _e } = q;
    switch (le) {
      case Ea:
        U(A, q, oe, se);
        break;
      case Ir:
        W(A, q, oe, se);
        break;
      case as:
        A == null && F(q, oe, se, ye);
        break;
      case He:
        qe(
          A,
          q,
          oe,
          se,
          fe,
          ue,
          ye,
          we,
          he
        );
        break;
      default:
        _e & 1 ? xe(
          A,
          q,
          oe,
          se,
          fe,
          ue,
          ye,
          we,
          he
        ) : _e & 6 ? ft(
          A,
          q,
          oe,
          se,
          fe,
          ue,
          ye,
          we,
          he
        ) : (_e & 64 || _e & 128) && le.process(
          A,
          q,
          oe,
          se,
          fe,
          ue,
          ye,
          we,
          he,
          Q
        );
    }
    Se != null && fe ? Ci(Se, A && A.ref, ue, q || A, !q) : Se == null && A && A.ref != null && Ci(A.ref, null, ue, A, !0);
  }, U = (A, q, oe, se) => {
    if (A == null)
      s(
        q.el = h(q.children),
        oe,
        se
      );
    else {
      const fe = q.el = A.el;
      q.children !== A.children && S(fe, q.children);
    }
  }, W = (A, q, oe, se) => {
    A == null ? s(
      q.el = w(q.children || ""),
      oe,
      se
    ) : q.el = A.el;
  }, F = (A, q, oe, se) => {
    [A.el, A.anchor] = Y(
      A.children,
      q,
      oe,
      se,
      A.el,
      A.anchor
    );
  }, K = ({ el: A, anchor: q }, oe, se) => {
    let fe;
    for (; A && A !== q; )
      fe = M(A), s(A, oe, se), A = fe;
    s(q, oe, se);
  }, ae = ({ el: A, anchor: q }) => {
    let oe;
    for (; A && A !== q; )
      oe = M(A), f(A), A = oe;
    f(q);
  }, xe = (A, q, oe, se, fe, ue, ye, we, he) => {
    q.type === "svg" ? ye = "svg" : q.type === "math" && (ye = "mathml"), A == null ? ge(
      q,
      oe,
      se,
      fe,
      ue,
      ye,
      we,
      he
    ) : G(
      A,
      q,
      fe,
      ue,
      ye,
      we,
      he
    );
  }, ge = (A, q, oe, se, fe, ue, ye, we) => {
    let he, le;
    const { props: Se, shapeFlag: _e, transition: De, dirs: Pe } = A;
    if (he = A.el = c(
      A.type,
      ue,
      Se && Se.is,
      Se
    ), _e & 8 ? O(he, A.children) : _e & 16 && Ne(
      A.children,
      he,
      null,
      se,
      fe,
      is(A, ue),
      ye,
      we
    ), Pe && wo(A, null, se, "created"), ce(he, A, A.scopeId, ye, se), Se) {
      for (const We in Se)
        We !== "value" && !Ni(We) && d(he, We, null, Se[We], ue, se);
      "value" in Se && d(he, "value", null, Se.value, ue), (le = Se.onVnodeBeforeMount) && Wn(le, se, A);
    }
    Pe && wo(A, null, se, "beforeMount");
    const je = zf(fe, De);
    je && De.beforeEnter(he), s(he, q, oe), ((le = Se && Se.onVnodeMounted) || je || Pe) && pn(() => {
      le && Wn(le, se, A), je && De.enter(he), Pe && wo(A, null, se, "mounted");
    }, fe);
  }, ce = (A, q, oe, se, fe) => {
    if (oe && B(A, oe), se)
      for (let ue = 0; ue < se.length; ue++)
        B(A, se[ue]);
    if (fe) {
      let ue = fe.subTree;
      if (q === ue || nc(ue.type) && (ue.ssContent === q || ue.ssFallback === q)) {
        const ye = fe.vnode;
        ce(
          A,
          ye,
          ye.scopeId,
          ye.slotScopeIds,
          fe.parent
        );
      }
    }
  }, Ne = (A, q, oe, se, fe, ue, ye, we, he = 0) => {
    for (let le = he; le < A.length; le++) {
      const Se = A[le] = we ? jr(A[le]) : Hn(A[le]);
      V(
        null,
        Se,
        q,
        oe,
        se,
        fe,
        ue,
        ye,
        we
      );
    }
  }, G = (A, q, oe, se, fe, ue, ye) => {
    const we = q.el = A.el;
    let { patchFlag: he, dynamicChildren: le, dirs: Se } = q;
    he |= A.patchFlag & 16;
    const _e = A.props || ht, De = q.props || ht;
    let Pe;
    if (oe && _o(oe, !1), (Pe = De.onVnodeBeforeUpdate) && Wn(Pe, oe, q, A), Se && wo(q, A, oe, "beforeUpdate"), oe && _o(oe, !0), (_e.innerHTML && De.innerHTML == null || _e.textContent && De.textContent == null) && O(we, ""), le ? Ie(
      A.dynamicChildren,
      le,
      we,
      oe,
      se,
      is(q, fe),
      ue
    ) : ye || $e(
      A,
      q,
      we,
      null,
      oe,
      se,
      is(q, fe),
      ue,
      !1
    ), he > 0) {
      if (he & 16)
        nt(we, _e, De, oe, fe);
      else if (he & 2 && _e.class !== De.class && d(we, "class", null, De.class, fe), he & 4 && d(we, "style", _e.style, De.style, fe), he & 8) {
        const je = q.dynamicProps;
        for (let We = 0; We < je.length; We++) {
          const Qe = je[We], vt = _e[Qe], Ct = De[Qe];
          (Ct !== vt || Qe === "value") && d(we, Qe, vt, Ct, fe, oe);
        }
      }
      he & 1 && A.children !== q.children && O(we, q.children);
    } else !ye && le == null && nt(we, _e, De, oe, fe);
    ((Pe = De.onVnodeUpdated) || Se) && pn(() => {
      Pe && Wn(Pe, oe, q, A), Se && wo(q, A, oe, "updated");
    }, se);
  }, Ie = (A, q, oe, se, fe, ue, ye) => {
    for (let we = 0; we < q.length; we++) {
      const he = A[we], le = q[we], Se = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        he.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (he.type === He || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_i(he, le) || // - In the case of a component, it could contain anything.
        he.shapeFlag & 198) ? L(he.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          oe
        )
      );
      V(
        he,
        le,
        Se,
        null,
        se,
        fe,
        ue,
        ye,
        !0
      );
    }
  }, nt = (A, q, oe, se, fe) => {
    if (q !== oe) {
      if (q !== ht)
        for (const ue in q)
          !Ni(ue) && !(ue in oe) && d(
            A,
            ue,
            q[ue],
            null,
            fe,
            se
          );
      for (const ue in oe) {
        if (Ni(ue)) continue;
        const ye = oe[ue], we = q[ue];
        ye !== we && ue !== "value" && d(A, ue, we, ye, fe, se);
      }
      "value" in oe && d(A, "value", q.value, oe.value, fe);
    }
  }, qe = (A, q, oe, se, fe, ue, ye, we, he) => {
    const le = q.el = A ? A.el : h(""), Se = q.anchor = A ? A.anchor : h("");
    let { patchFlag: _e, dynamicChildren: De, slotScopeIds: Pe } = q;
    Pe && (we = we ? we.concat(Pe) : Pe), A == null ? (s(le, oe, se), s(Se, oe, se), Ne(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      q.children || [],
      oe,
      Se,
      fe,
      ue,
      ye,
      we,
      he
    )) : _e > 0 && _e & 64 && De && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (Ie(
      A.dynamicChildren,
      De,
      oe,
      fe,
      ue,
      ye,
      we
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (q.key != null || fe && q === fe.subTree) && Xs(
      A,
      q,
      !0
      /* shallow */
    )) : $e(
      A,
      q,
      oe,
      Se,
      fe,
      ue,
      ye,
      we,
      he
    );
  }, ft = (A, q, oe, se, fe, ue, ye, we, he) => {
    q.slotScopeIds = we, A == null ? q.shapeFlag & 512 ? fe.ctx.activate(
      q,
      oe,
      se,
      ye,
      he
    ) : Cn(
      q,
      oe,
      se,
      fe,
      ue,
      ye,
      he
    ) : Mt(A, q, he);
  }, Cn = (A, q, oe, se, fe, ue, ye) => {
    const we = A.component = md(
      A,
      se,
      fe
    );
    if (Ml(A) && (we.ctx.renderer = Q), yd(we, !1, ye), we.asyncDep) {
      if (fe && fe.registerDep(we, ut, ye), !A.el) {
        const he = we.subTree = Nt(Ir);
        W(null, he, q, oe);
      }
    } else
      ut(
        we,
        A,
        q,
        oe,
        fe,
        ue,
        ye
      );
  }, Mt = (A, q, oe) => {
    const se = q.component = A.component;
    if (sd(A, q, oe))
      if (se.asyncDep && !se.asyncResolved) {
        Ce(se, q, oe);
        return;
      } else
        se.next = q, se.update();
    else
      q.el = A.el, se.vnode = q;
  }, ut = (A, q, oe, se, fe, ue, ye) => {
    const we = () => {
      if (A.isMounted) {
        let { next: _e, bu: De, u: Pe, parent: je, vnode: We } = A;
        {
          const yt = Zl(A);
          if (yt) {
            _e && (_e.el = We.el, Ce(A, _e, ye)), yt.asyncDep.then(() => {
              A.isUnmounted || we();
            });
            return;
          }
        }
        let Qe = _e, vt;
        _o(A, !1), _e ? (_e.el = We.el, Ce(A, _e, ye)) : _e = We, De && Qi(De), (vt = _e.props && _e.props.onVnodeBeforeUpdate) && Wn(vt, je, _e, We), _o(A, !0);
        const Ct = Nu(A), It = A.subTree;
        A.subTree = Ct, V(
          It,
          Ct,
          // parent may have changed if it's in a teleport
          L(It.el),
          // anchor may have changed if it's in a fragment
          D(It),
          A,
          fe,
          ue
        ), _e.el = Ct.el, Qe === null && ud(A, Ct.el), Pe && pn(Pe, fe), (vt = _e.props && _e.props.onVnodeUpdated) && pn(
          () => Wn(vt, je, _e, We),
          fe
        );
      } else {
        let _e;
        const { el: De, props: Pe } = q, { bm: je, m: We, parent: Qe, root: vt, type: Ct } = A, It = Lo(q);
        _o(A, !1), je && Qi(je), !It && (_e = Pe && Pe.onVnodeBeforeMount) && Wn(_e, Qe, q), _o(A, !0);
        {
          vt.ce && // @ts-expect-error _def is private
          vt.ce._def.shadowRoot !== !1 && vt.ce._injectChildStyle(Ct);
          const yt = A.subTree = Nu(A);
          V(
            null,
            yt,
            oe,
            se,
            A,
            fe,
            ue
          ), q.el = yt.el;
        }
        if (We && pn(We, fe), !It && (_e = Pe && Pe.onVnodeMounted)) {
          const yt = q;
          pn(
            () => Wn(_e, Qe, yt),
            fe
          );
        }
        (q.shapeFlag & 256 || Qe && Lo(Qe.vnode) && Qe.vnode.shapeFlag & 256) && A.a && pn(A.a, fe), A.isMounted = !0, q = oe = se = null;
      }
    };
    A.scope.on();
    const he = A.effect = new ll(we);
    A.scope.off();
    const le = A.update = he.run.bind(he), Se = A.job = he.runIfDirty.bind(he);
    Se.i = A, Se.id = A.uid, he.scheduler = () => Vs(Se), _o(A, !0), le();
  }, Ce = (A, q, oe) => {
    q.component = A;
    const se = A.vnode.props;
    A.vnode = q, A.next = null, Vf(A, q.props, se, oe), Yf(A, q.children, oe), Sr(), fu(A), Dr();
  }, $e = (A, q, oe, se, fe, ue, ye, we, he = !1) => {
    const le = A && A.children, Se = A ? A.shapeFlag : 0, _e = q.children, { patchFlag: De, shapeFlag: Pe } = q;
    if (De > 0) {
      if (De & 128) {
        pt(
          le,
          _e,
          oe,
          se,
          fe,
          ue,
          ye,
          we,
          he
        );
        return;
      } else if (De & 256) {
        _t(
          le,
          _e,
          oe,
          se,
          fe,
          ue,
          ye,
          we,
          he
        );
        return;
      }
    }
    Pe & 8 ? (Se & 16 && Rt(le, fe, ue), _e !== le && O(oe, _e)) : Se & 16 ? Pe & 16 ? pt(
      le,
      _e,
      oe,
      se,
      fe,
      ue,
      ye,
      we,
      he
    ) : Rt(le, fe, ue, !0) : (Se & 8 && O(oe, ""), Pe & 16 && Ne(
      _e,
      oe,
      se,
      fe,
      ue,
      ye,
      we,
      he
    ));
  }, _t = (A, q, oe, se, fe, ue, ye, we, he) => {
    A = A || Io, q = q || Io;
    const le = A.length, Se = q.length, _e = Math.min(le, Se);
    let De;
    for (De = 0; De < _e; De++) {
      const Pe = q[De] = he ? jr(q[De]) : Hn(q[De]);
      V(
        A[De],
        Pe,
        oe,
        null,
        fe,
        ue,
        ye,
        we,
        he
      );
    }
    le > Se ? Rt(
      A,
      fe,
      ue,
      !0,
      !1,
      _e
    ) : Ne(
      q,
      oe,
      se,
      fe,
      ue,
      ye,
      we,
      he,
      _e
    );
  }, pt = (A, q, oe, se, fe, ue, ye, we, he) => {
    let le = 0;
    const Se = q.length;
    let _e = A.length - 1, De = Se - 1;
    for (; le <= _e && le <= De; ) {
      const Pe = A[le], je = q[le] = he ? jr(q[le]) : Hn(q[le]);
      if (_i(Pe, je))
        V(
          Pe,
          je,
          oe,
          null,
          fe,
          ue,
          ye,
          we,
          he
        );
      else
        break;
      le++;
    }
    for (; le <= _e && le <= De; ) {
      const Pe = A[_e], je = q[De] = he ? jr(q[De]) : Hn(q[De]);
      if (_i(Pe, je))
        V(
          Pe,
          je,
          oe,
          null,
          fe,
          ue,
          ye,
          we,
          he
        );
      else
        break;
      _e--, De--;
    }
    if (le > _e) {
      if (le <= De) {
        const Pe = De + 1, je = Pe < Se ? q[Pe].el : se;
        for (; le <= De; )
          V(
            null,
            q[le] = he ? jr(q[le]) : Hn(q[le]),
            oe,
            je,
            fe,
            ue,
            ye,
            we,
            he
          ), le++;
      }
    } else if (le > De)
      for (; le <= _e; )
        Kt(A[le], fe, ue, !0), le++;
    else {
      const Pe = le, je = le, We = /* @__PURE__ */ new Map();
      for (le = je; le <= De; le++) {
        const lt = q[le] = he ? jr(q[le]) : Hn(q[le]);
        lt.key != null && We.set(lt.key, le);
      }
      let Qe, vt = 0;
      const Ct = De - je + 1;
      let It = !1, yt = 0;
      const rn = new Array(Ct);
      for (le = 0; le < Ct; le++) rn[le] = 0;
      for (le = Pe; le <= _e; le++) {
        const lt = A[le];
        if (vt >= Ct) {
          Kt(lt, fe, ue, !0);
          continue;
        }
        let ie;
        if (lt.key != null)
          ie = We.get(lt.key);
        else
          for (Qe = je; Qe <= De; Qe++)
            if (rn[Qe - je] === 0 && _i(lt, q[Qe])) {
              ie = Qe;
              break;
            }
        ie === void 0 ? Kt(lt, fe, ue, !0) : (rn[ie - je] = le + 1, ie >= yt ? yt = ie : It = !0, V(
          lt,
          q[ie],
          oe,
          null,
          fe,
          ue,
          ye,
          we,
          he
        ), vt++);
      }
      const Vn = It ? Jf(rn) : Io;
      for (Qe = Vn.length - 1, le = Ct - 1; le >= 0; le--) {
        const lt = je + le, ie = q[lt], yn = lt + 1 < Se ? q[lt + 1].el : se;
        rn[le] === 0 ? V(
          null,
          ie,
          oe,
          yn,
          fe,
          ue,
          ye,
          we,
          he
        ) : It && (Qe < 0 || le !== Vn[Qe] ? Et(ie, oe, yn, 2) : Qe--);
      }
    }
  }, Et = (A, q, oe, se, fe = null) => {
    const { el: ue, type: ye, transition: we, children: he, shapeFlag: le } = A;
    if (le & 6) {
      Et(A.component.subTree, q, oe, se);
      return;
    }
    if (le & 128) {
      A.suspense.move(q, oe, se);
      return;
    }
    if (le & 64) {
      ye.move(A, q, oe, Q);
      return;
    }
    if (ye === He) {
      s(ue, q, oe);
      for (let _e = 0; _e < he.length; _e++)
        Et(he[_e], q, oe, se);
      s(A.anchor, q, oe);
      return;
    }
    if (ye === as) {
      K(A, q, oe);
      return;
    }
    if (se !== 2 && le & 1 && we)
      if (se === 0)
        we.beforeEnter(ue), s(ue, q, oe), pn(() => we.enter(ue), fe);
      else {
        const { leave: _e, delayLeave: De, afterLeave: Pe } = we, je = () => {
          A.ctx.isUnmounted ? f(ue) : s(ue, q, oe);
        }, We = () => {
          _e(ue, () => {
            je(), Pe && Pe();
          });
        };
        De ? De(ue, je, We) : We();
      }
    else
      s(ue, q, oe);
  }, Kt = (A, q, oe, se = !1, fe = !1) => {
    const {
      type: ue,
      props: ye,
      ref: we,
      children: he,
      dynamicChildren: le,
      shapeFlag: Se,
      patchFlag: _e,
      dirs: De,
      cacheIndex: Pe
    } = A;
    if (_e === -2 && (fe = !1), we != null && (Sr(), Ci(we, null, oe, A, !0), Dr()), Pe != null && (q.renderCache[Pe] = void 0), Se & 256) {
      q.ctx.deactivate(A);
      return;
    }
    const je = Se & 1 && De, We = !Lo(A);
    let Qe;
    if (We && (Qe = ye && ye.onVnodeBeforeUnmount) && Wn(Qe, q, A), Se & 6)
      vn(A.component, oe, se);
    else {
      if (Se & 128) {
        A.suspense.unmount(oe, se);
        return;
      }
      je && wo(A, null, q, "beforeUnmount"), Se & 64 ? A.type.remove(
        A,
        q,
        oe,
        Q,
        se
      ) : le && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !le.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ue !== He || _e > 0 && _e & 64) ? Rt(
        le,
        q,
        oe,
        !1,
        !0
      ) : (ue === He && _e & 384 || !fe && Se & 16) && Rt(he, q, oe), se && Bt(A);
    }
    (We && (Qe = ye && ye.onVnodeUnmounted) || je) && pn(() => {
      Qe && Wn(Qe, q, A), je && wo(A, null, q, "unmounted");
    }, oe);
  }, Bt = (A) => {
    const { type: q, el: oe, anchor: se, transition: fe } = A;
    if (q === He) {
      Un(oe, se);
      return;
    }
    if (q === as) {
      ae(A);
      return;
    }
    const ue = () => {
      f(oe), fe && !fe.persisted && fe.afterLeave && fe.afterLeave();
    };
    if (A.shapeFlag & 1 && fe && !fe.persisted) {
      const { leave: ye, delayLeave: we } = fe, he = () => ye(oe, ue);
      we ? we(A.el, ue, he) : he();
    } else
      ue();
  }, Un = (A, q) => {
    let oe;
    for (; A !== q; )
      oe = M(A), f(A), A = oe;
    f(q);
  }, vn = (A, q, oe) => {
    const {
      bum: se,
      scope: fe,
      job: ue,
      subTree: ye,
      um: we,
      m: he,
      a: le,
      parent: Se,
      slots: { __: _e }
    } = A;
    xu(he), xu(le), se && Qi(se), Se && Le(_e) && _e.forEach((De) => {
      Se.renderCache[De] = void 0;
    }), fe.stop(), ue && (ue.flags |= 8, Kt(ye, A, q, oe)), we && pn(we, q), pn(() => {
      A.isUnmounted = !0;
    }, q), q && q.pendingBranch && !q.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === q.pendingId && (q.deps--, q.deps === 0 && q.resolve());
  }, Rt = (A, q, oe, se = !1, fe = !1, ue = 0) => {
    for (let ye = ue; ye < A.length; ye++)
      Kt(A[ye], q, oe, se, fe);
  }, D = (A) => {
    if (A.shapeFlag & 6)
      return D(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const q = M(A.anchor || A.el), oe = q && q[kl];
    return oe ? M(oe) : q;
  };
  let x = !1;
  const $ = (A, q, oe) => {
    A == null ? q._vnode && Kt(q._vnode, null, null, !0) : V(
      q._vnode || null,
      A,
      q,
      null,
      null,
      null,
      oe
    ), q._vnode = A, x || (x = !0, fu(), Dl(), x = !1);
  }, Q = {
    p: V,
    um: Kt,
    m: Et,
    r: Bt,
    mt: Cn,
    mc: Ne,
    pc: $e,
    pbc: Ie,
    n: D,
    o: t
  };
  return {
    render: $,
    hydrate: void 0,
    createApp: Bf($)
  };
}
function is({ type: t, props: r }, a) {
  return a === "svg" && t === "foreignObject" || a === "mathml" && t === "annotation-xml" && r && r.encoding && r.encoding.includes("html") ? void 0 : a;
}
function _o({ effect: t, job: r }, a) {
  a ? (t.flags |= 32, r.flags |= 4) : (t.flags &= -33, r.flags &= -5);
}
function zf(t, r) {
  return (!t || t && !t.pendingBranch) && r && !r.persisted;
}
function Xs(t, r, a = !1) {
  const s = t.children, f = r.children;
  if (Le(s) && Le(f))
    for (let d = 0; d < s.length; d++) {
      const c = s[d];
      let h = f[d];
      h.shapeFlag & 1 && !h.dynamicChildren && ((h.patchFlag <= 0 || h.patchFlag === 32) && (h = f[d] = jr(f[d]), h.el = c.el), !a && h.patchFlag !== -2 && Xs(c, h)), h.type === Ea && (h.el = c.el), h.type === Ir && !h.el && (h.el = c.el);
    }
}
function Jf(t) {
  const r = t.slice(), a = [0];
  let s, f, d, c, h;
  const w = t.length;
  for (s = 0; s < w; s++) {
    const S = t[s];
    if (S !== 0) {
      if (f = a[a.length - 1], t[f] < S) {
        r[s] = f, a.push(s);
        continue;
      }
      for (d = 0, c = a.length - 1; d < c; )
        h = d + c >> 1, t[a[h]] < S ? d = h + 1 : c = h;
      S < t[a[d]] && (d > 0 && (r[s] = a[d - 1]), a[d] = s);
    }
  }
  for (d = a.length, c = a[d - 1]; d-- > 0; )
    a[d] = c, c = r[c];
  return a;
}
function Zl(t) {
  const r = t.subTree.component;
  if (r)
    return r.asyncDep && !r.asyncResolved ? r : Zl(r);
}
function xu(t) {
  if (t)
    for (let r = 0; r < t.length; r++)
      t[r].flags |= 8;
}
const Zf = Symbol.for("v-scx"), ed = () => Ai(Zf);
function td(t, r) {
  return Qs(t, null, r);
}
function en(t, r, a) {
  return Qs(t, r, a);
}
function Qs(t, r, a = ht) {
  const { immediate: s, deep: f, flush: d, once: c } = a, h = nn({}, a), w = r && s || !r && d !== "post";
  let S;
  if (ji) {
    if (d === "sync") {
      const B = ed();
      S = B.__watcherHandles || (B.__watcherHandles = []);
    } else if (!w) {
      const B = () => {
      };
      return B.stop = Qn, B.resume = Qn, B.pause = Qn, B;
    }
  }
  const O = $t;
  h.call = (B, Y, V) => zn(B, O, Y, V);
  let L = !1;
  d === "post" ? h.scheduler = (B) => {
    pn(B, O && O.suspense);
  } : d !== "sync" && (L = !0, h.scheduler = (B, Y) => {
    Y ? B() : Vs(B);
  }), h.augmentJob = (B) => {
    r && (B.flags |= 4), L && (B.flags |= 2, O && (B.id = O.uid, B.i = O));
  };
  const M = df(t, r, h);
  return ji && (S ? S.push(M) : w && M()), M;
}
function nd(t, r, a) {
  const s = this.proxy, f = Ot(t) ? t.includes(".") ? ec(s, t) : () => s[t] : t.bind(s, s);
  let d;
  Be(r) ? d = r : (d = r.handler, a = r);
  const c = Ui(this), h = Qs(f, d.bind(s), a);
  return c(), h;
}
function ec(t, r) {
  const a = r.split(".");
  return () => {
    let s = t;
    for (let f = 0; f < a.length && s; f++)
      s = s[a[f]];
    return s;
  };
}
const rd = (t, r) => r === "modelValue" || r === "model-value" ? t.modelModifiers : t[`${r}Modifiers`] || t[`${Dn(r)}Modifiers`] || t[`${Co(r)}Modifiers`];
function od(t, r, ...a) {
  if (t.isUnmounted) return;
  const s = t.vnode.props || ht;
  let f = a;
  const d = r.startsWith("update:"), c = d && rd(s, r.slice(7));
  c && (c.trim && (f = a.map((O) => Ot(O) ? O.trim() : O)), c.number && (f = a.map(na)));
  let h, w = s[h = Za(r)] || // also try camelCase event handler (#2249)
  s[h = Za(Dn(r))];
  !w && d && (w = s[h = Za(Co(r))]), w && zn(
    w,
    t,
    6,
    f
  );
  const S = s[h + "Once"];
  if (S) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[h])
      return;
    t.emitted[h] = !0, zn(
      S,
      t,
      6,
      f
    );
  }
}
function tc(t, r, a = !1) {
  const s = r.emitsCache, f = s.get(t);
  if (f !== void 0)
    return f;
  const d = t.emits;
  let c = {}, h = !1;
  if (!Be(t)) {
    const w = (S) => {
      const O = tc(S, r, !0);
      O && (h = !0, nn(c, O));
    };
    !a && r.mixins.length && r.mixins.forEach(w), t.extends && w(t.extends), t.mixins && t.mixins.forEach(w);
  }
  return !d && !h ? (wt(t) && s.set(t, null), null) : (Le(d) ? d.forEach((w) => c[w] = null) : nn(c, d), wt(t) && s.set(t, c), c);
}
function Na(t, r) {
  return !t || !da(r) ? !1 : (r = r.slice(2).replace(/Once$/, ""), dt(t, r[0].toLowerCase() + r.slice(1)) || dt(t, Co(r)) || dt(t, r));
}
function Nu(t) {
  const {
    type: r,
    vnode: a,
    proxy: s,
    withProxy: f,
    propsOptions: [d],
    slots: c,
    attrs: h,
    emit: w,
    render: S,
    renderCache: O,
    props: L,
    data: M,
    setupState: B,
    ctx: Y,
    inheritAttrs: V
  } = t, U = sa(t);
  let W, F;
  try {
    if (a.shapeFlag & 4) {
      const ae = f || s, xe = ae;
      W = Hn(
        S.call(
          xe,
          ae,
          O,
          L,
          B,
          M,
          Y
        )
      ), F = h;
    } else {
      const ae = r;
      W = Hn(
        ae.length > 1 ? ae(
          L,
          { attrs: h, slots: c, emit: w }
        ) : ae(
          L,
          null
        )
      ), F = r.props ? h : id(h);
    }
  } catch (ae) {
    Si.length = 0, wa(ae, t, 1), W = Nt(Ir);
  }
  let K = W;
  if (F && V !== !1) {
    const ae = Object.keys(F), { shapeFlag: xe } = K;
    ae.length && xe & 7 && (d && ae.some(Ps) && (F = ad(
      F,
      d
    )), K = Fo(K, F, !1, !0));
  }
  return a.dirs && (K = Fo(K, null, !1, !0), K.dirs = K.dirs ? K.dirs.concat(a.dirs) : a.dirs), a.transition && Ws(K, a.transition), W = K, sa(U), W;
}
const id = (t) => {
  let r;
  for (const a in t)
    (a === "class" || a === "style" || da(a)) && ((r || (r = {}))[a] = t[a]);
  return r;
}, ad = (t, r) => {
  const a = {};
  for (const s in t)
    (!Ps(s) || !(s.slice(9) in r)) && (a[s] = t[s]);
  return a;
};
function sd(t, r, a) {
  const { props: s, children: f, component: d } = t, { props: c, children: h, patchFlag: w } = r, S = d.emitsOptions;
  if (r.dirs || r.transition)
    return !0;
  if (a && w >= 0) {
    if (w & 1024)
      return !0;
    if (w & 16)
      return s ? Eu(s, c, S) : !!c;
    if (w & 8) {
      const O = r.dynamicProps;
      for (let L = 0; L < O.length; L++) {
        const M = O[L];
        if (c[M] !== s[M] && !Na(S, M))
          return !0;
      }
    }
  } else
    return (f || h) && (!h || !h.$stable) ? !0 : s === c ? !1 : s ? c ? Eu(s, c, S) : !0 : !!c;
  return !1;
}
function Eu(t, r, a) {
  const s = Object.keys(r);
  if (s.length !== Object.keys(t).length)
    return !0;
  for (let f = 0; f < s.length; f++) {
    const d = s[f];
    if (r[d] !== t[d] && !Na(a, d))
      return !0;
  }
  return !1;
}
function ud({ vnode: t, parent: r }, a) {
  for (; r; ) {
    const s = r.subTree;
    if (s.suspense && s.suspense.activeBranch === t && (s.el = t.el), s === t)
      (t = r.vnode).el = a, r = r.parent;
    else
      break;
  }
}
const nc = (t) => t.__isSuspense;
function ld(t, r) {
  r && r.pendingBranch ? Le(t) ? r.effects.push(...t) : r.effects.push(t) : mf(t);
}
const He = Symbol.for("v-fgt"), Ea = Symbol.for("v-txt"), Ir = Symbol.for("v-cmt"), as = Symbol.for("v-stc"), Si = [];
let Tn = null;
function de(t = !1) {
  Si.push(Tn = t ? null : []);
}
function cd() {
  Si.pop(), Tn = Si[Si.length - 1] || null;
}
let Li = 1;
function Tu(t, r = !1) {
  Li += t, t < 0 && Tn && r && (Tn.hasOnce = !0);
}
function rc(t) {
  return t.dynamicChildren = Li > 0 ? Tn || Io : null, cd(), Li > 0 && Tn && Tn.push(t), t;
}
function pe(t, r, a, s, f, d) {
  return rc(
    j(
      t,
      r,
      a,
      s,
      f,
      d,
      !0
    )
  );
}
function On(t, r, a, s, f) {
  return rc(
    Nt(
      t,
      r,
      a,
      s,
      f,
      !0
    )
  );
}
function zs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function _i(t, r) {
  return t.type === r.type && t.key === r.key;
}
const oc = ({ key: t }) => t ?? null, Ji = ({
  ref: t,
  ref_key: r,
  ref_for: a
}) => (typeof t == "number" && (t = "" + t), t != null ? Ot(t) || Tt(t) || Be(t) ? { i: Ft, r: t, k: r, f: !!a } : t : null);
function j(t, r = null, a = null, s = 0, f = null, d = t === He ? 0 : 1, c = !1, h = !1) {
  const w = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && oc(r),
    ref: r && Ji(r),
    scopeId: Pl,
    slotScopeIds: null,
    children: a,
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
    dynamicProps: f,
    dynamicChildren: null,
    appContext: null,
    ctx: Ft
  };
  return h ? (Zs(w, a), d & 128 && t.normalize(w)) : a && (w.shapeFlag |= Ot(a) ? 8 : 16), Li > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Tn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (w.patchFlag > 0 || d & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  w.patchFlag !== 32 && Tn.push(w), w;
}
const Nt = fd;
function fd(t, r = null, a = null, s = 0, f = null, d = !1) {
  if ((!t || t === Bl) && (t = Ir), zs(t)) {
    const h = Fo(
      t,
      r,
      !0
      /* mergeRef: true */
    );
    return a && Zs(h, a), Li > 0 && !d && Tn && (h.shapeFlag & 6 ? Tn[Tn.indexOf(t)] = h : Tn.push(h)), h.patchFlag = -2, h;
  }
  if (xd(t) && (t = t.__vccOpts), r) {
    r = dd(r);
    let { class: h, style: w } = r;
    h && !Ot(h) && (r.class = tn(h)), wt(w) && (qs(w) && !Le(w) && (w = nn({}, w)), r.style = Ro(w));
  }
  const c = Ot(t) ? 1 : nc(t) ? 128 : vf(t) ? 64 : wt(t) ? 4 : Be(t) ? 2 : 0;
  return j(
    t,
    r,
    a,
    s,
    f,
    c,
    d,
    !0
  );
}
function dd(t) {
  return t ? qs(t) || Hl(t) ? nn({}, t) : t : null;
}
function Fo(t, r, a = !1, s = !1) {
  const { props: f, ref: d, patchFlag: c, children: h, transition: w } = t, S = r ? ic(f || {}, r) : f, O = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: S,
    key: S && oc(S),
    ref: r && r.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && d ? Le(d) ? d.concat(Ji(r)) : [d, Ji(r)] : Ji(r)
    ) : d,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: h,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: r && t.type !== He ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: w,
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
  return w && s && Ws(
    O,
    w.clone(O)
  ), O;
}
function Js(t = " ", r = 0) {
  return Nt(Ea, null, t, r);
}
function et(t = "", r = !1) {
  return r ? (de(), On(Ir, null, t)) : Nt(Ir, null, t);
}
function Hn(t) {
  return t == null || typeof t == "boolean" ? Nt(Ir) : Le(t) ? Nt(
    He,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : zs(t) ? jr(t) : Nt(Ea, null, String(t));
}
function jr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Fo(t);
}
function Zs(t, r) {
  let a = 0;
  const { shapeFlag: s } = t;
  if (r == null)
    r = null;
  else if (Le(r))
    a = 16;
  else if (typeof r == "object")
    if (s & 65) {
      const f = r.default;
      f && (f._c && (f._d = !1), Zs(t, f()), f._c && (f._d = !0));
      return;
    } else {
      a = 32;
      const f = r._;
      !f && !Hl(r) ? r._ctx = Ft : f === 3 && Ft && (Ft.slots._ === 1 ? r._ = 1 : (r._ = 2, t.patchFlag |= 1024));
    }
  else Be(r) ? (r = { default: r, _ctx: Ft }, a = 32) : (r = String(r), s & 64 ? (a = 16, r = [Js(r)]) : a = 8);
  t.children = r, t.shapeFlag |= a;
}
function ic(...t) {
  const r = {};
  for (let a = 0; a < t.length; a++) {
    const s = t[a];
    for (const f in s)
      if (f === "class")
        r.class !== s.class && (r.class = tn([r.class, s.class]));
      else if (f === "style")
        r.style = Ro([r.style, s.style]);
      else if (da(f)) {
        const d = r[f], c = s[f];
        c && d !== c && !(Le(d) && d.includes(c)) && (r[f] = d ? [].concat(d, c) : c);
      } else f !== "" && (r[f] = s[f]);
  }
  return r;
}
function Wn(t, r, a, s = null) {
  zn(t, r, 7, [
    a,
    s
  ]);
}
const pd = Vl();
let hd = 0;
function md(t, r, a) {
  const s = t.type, f = (r ? r.appContext : t.appContext) || pd, d = {
    uid: hd++,
    vnode: t,
    type: s,
    parent: r,
    appContext: f,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new al(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: r ? r.provides : Object.create(f.provides),
    ids: r ? r.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Xl(s, f),
    emitsOptions: tc(s, f),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ht,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: ht,
    data: ht,
    props: ht,
    attrs: ht,
    slots: ht,
    refs: ht,
    setupState: ht,
    setupContext: null,
    // suspense related
    suspense: a,
    suspenseId: a ? a.pendingId : 0,
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
  return d.ctx = { _: d }, d.root = r ? r.root : d, d.emit = od.bind(null, d), t.ce && t.ce(d), d;
}
let $t = null;
const vd = () => $t || Ft;
let la, Ns;
{
  const t = ma(), r = (a, s) => {
    let f;
    return (f = t[a]) || (f = t[a] = []), f.push(s), (d) => {
      f.length > 1 ? f.forEach((c) => c(d)) : f[0](d);
    };
  };
  la = r(
    "__VUE_INSTANCE_SETTERS__",
    (a) => $t = a
  ), Ns = r(
    "__VUE_SSR_SETTERS__",
    (a) => ji = a
  );
}
const Ui = (t) => {
  const r = $t;
  return la(t), t.scope.on(), () => {
    t.scope.off(), la(r);
  };
}, Ou = () => {
  $t && $t.scope.off(), la(null);
};
function ac(t) {
  return t.vnode.shapeFlag & 4;
}
let ji = !1;
function yd(t, r = !1, a = !1) {
  r && Ns(r);
  const { props: s, children: f } = t.vnode, d = ac(t);
  Uf(t, s, d, r), Hf(t, f, a || r);
  const c = d ? gd(t, r) : void 0;
  return r && Ns(!1), c;
}
function gd(t, r) {
  const a = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, Pf);
  const { setup: s } = a;
  if (s) {
    Sr();
    const f = t.setupContext = s.length > 1 ? wd(t) : null, d = Ui(t), c = qi(
      s,
      t,
      0,
      [
        t.props,
        f
      ]
    ), h = el(c);
    if (Dr(), d(), (h || t.sp) && !Lo(t) && Fl(t), h) {
      if (c.then(Ou, Ou), r)
        return c.then((w) => {
          Cu(t, w);
        }).catch((w) => {
          wa(w, t, 0);
        });
      t.asyncDep = c;
    } else
      Cu(t, c);
  } else
    sc(t);
}
function Cu(t, r, a) {
  Be(r) ? t.type.__ssrInlineRender ? t.ssrRender = r : t.render = r : wt(r) && (t.setupState = Cl(r)), sc(t);
}
function sc(t, r, a) {
  const s = t.type;
  t.render || (t.render = s.render || Qn);
  {
    const f = Ui(t);
    Sr();
    try {
      kf(t);
    } finally {
      Dr(), f();
    }
  }
}
const bd = {
  get(t, r) {
    return Zt(t, "get", ""), t[r];
  }
};
function wd(t) {
  const r = (a) => {
    t.exposed = a || {};
  };
  return {
    attrs: new Proxy(t.attrs, bd),
    slots: t.slots,
    emit: t.emit,
    expose: r
  };
}
function Ta(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(Cl(ba(t.exposed)), {
    get(r, a) {
      if (a in r)
        return r[a];
      if (a in Ri)
        return Ri[a](t);
    },
    has(r, a) {
      return a in r || a in Ri;
    }
  })) : t.proxy;
}
function _d(t, r = !0) {
  return Be(t) ? t.displayName || t.name : t.name || r && t.__name;
}
function xd(t) {
  return Be(t) && "__vccOpts" in t;
}
const st = (t, r) => cf(t, r, ji), Nd = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Es;
const Ru = typeof window < "u" && window.trustedTypes;
if (Ru)
  try {
    Es = /* @__PURE__ */ Ru.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const uc = Es ? (t) => Es.createHTML(t) : (t) => t, Ed = "http://www.w3.org/2000/svg", Td = "http://www.w3.org/1998/Math/MathML", Er = typeof document < "u" ? document : null, Au = Er && /* @__PURE__ */ Er.createElement("template"), Od = {
  insert: (t, r, a) => {
    r.insertBefore(t, a || null);
  },
  remove: (t) => {
    const r = t.parentNode;
    r && r.removeChild(t);
  },
  createElement: (t, r, a, s) => {
    const f = r === "svg" ? Er.createElementNS(Ed, t) : r === "mathml" ? Er.createElementNS(Td, t) : a ? Er.createElement(t, { is: a }) : Er.createElement(t);
    return t === "select" && s && s.multiple != null && f.setAttribute("multiple", s.multiple), f;
  },
  createText: (t) => Er.createTextNode(t),
  createComment: (t) => Er.createComment(t),
  setText: (t, r) => {
    t.nodeValue = r;
  },
  setElementText: (t, r) => {
    t.textContent = r;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Er.querySelector(t),
  setScopeId(t, r) {
    t.setAttribute(r, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, r, a, s, f, d) {
    const c = a ? a.previousSibling : r.lastChild;
    if (f && (f === d || f.nextSibling))
      for (; r.insertBefore(f.cloneNode(!0), a), !(f === d || !(f = f.nextSibling)); )
        ;
    else {
      Au.innerHTML = uc(
        s === "svg" ? `<svg>${t}</svg>` : s === "mathml" ? `<math>${t}</math>` : t
      );
      const h = Au.content;
      if (s === "svg" || s === "mathml") {
        const w = h.firstChild;
        for (; w.firstChild; )
          h.appendChild(w.firstChild);
        h.removeChild(w);
      }
      r.insertBefore(h, a);
    }
    return [
      // first
      c ? c.nextSibling : r.firstChild,
      // last
      a ? a.previousSibling : r.lastChild
    ];
  }
}, Cd = Symbol("_vtc");
function Rd(t, r, a) {
  const s = t[Cd];
  s && (r = (r ? [r, ...s] : [...s]).join(" ")), r == null ? t.removeAttribute("class") : a ? t.setAttribute("class", r) : t.className = r;
}
const Su = Symbol("_vod"), Ad = Symbol("_vsh"), Sd = Symbol(""), Dd = /(^|;)\s*display\s*:/;
function Id(t, r, a) {
  const s = t.style, f = Ot(a);
  let d = !1;
  if (a && !f) {
    if (r)
      if (Ot(r))
        for (const c of r.split(";")) {
          const h = c.slice(0, c.indexOf(":")).trim();
          a[h] == null && Zi(s, h, "");
        }
      else
        for (const c in r)
          a[c] == null && Zi(s, c, "");
    for (const c in a)
      c === "display" && (d = !0), Zi(s, c, a[c]);
  } else if (f) {
    if (r !== a) {
      const c = s[Sd];
      c && (a += ";" + c), s.cssText = a, d = Dd.test(a);
    }
  } else r && t.removeAttribute("style");
  Su in t && (t[Su] = d ? s.display : "", t[Ad] && (s.display = "none"));
}
const Du = /\s*!important$/;
function Zi(t, r, a) {
  if (Le(a))
    a.forEach((s) => Zi(t, r, s));
  else if (a == null && (a = ""), r.startsWith("--"))
    t.setProperty(r, a);
  else {
    const s = Pd(t, r);
    Du.test(a) ? t.setProperty(
      Co(s),
      a.replace(Du, ""),
      "important"
    ) : t[s] = a;
  }
}
const Iu = ["Webkit", "Moz", "ms"], ss = {};
function Pd(t, r) {
  const a = ss[r];
  if (a)
    return a;
  let s = Dn(r);
  if (s !== "filter" && s in t)
    return ss[r] = s;
  s = ha(s);
  for (let f = 0; f < Iu.length; f++) {
    const d = Iu[f] + s;
    if (d in t)
      return ss[r] = d;
  }
  return r;
}
const Pu = "http://www.w3.org/1999/xlink";
function ku(t, r, a, s, f, d = Ic(r)) {
  s && r.startsWith("xlink:") ? a == null ? t.removeAttributeNS(Pu, r.slice(6, r.length)) : t.setAttributeNS(Pu, r, a) : a == null || d && !rl(a) ? t.removeAttribute(r) : t.setAttribute(
    r,
    d ? "" : qn(a) ? String(a) : a
  );
}
function Lu(t, r, a, s, f) {
  if (r === "innerHTML" || r === "textContent") {
    a != null && (t[r] = r === "innerHTML" ? uc(a) : a);
    return;
  }
  const d = t.tagName;
  if (r === "value" && d !== "PROGRESS" && // custom elements may use _value internally
  !d.includes("-")) {
    const h = d === "OPTION" ? t.getAttribute("value") || "" : t.value, w = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(a);
    (h !== w || !("_value" in t)) && (t.value = w), a == null && t.removeAttribute(r), t._value = a;
    return;
  }
  let c = !1;
  if (a === "" || a == null) {
    const h = typeof t[r];
    h === "boolean" ? a = rl(a) : a == null && h === "string" ? (a = "", c = !0) : h === "number" && (a = 0, c = !0);
  }
  try {
    t[r] = a;
  } catch {
  }
  c && t.removeAttribute(f || r);
}
function Cr(t, r, a, s) {
  t.addEventListener(r, a, s);
}
function kd(t, r, a, s) {
  t.removeEventListener(r, a, s);
}
const ju = Symbol("_vei");
function Ld(t, r, a, s, f = null) {
  const d = t[ju] || (t[ju] = {}), c = d[r];
  if (s && c)
    c.value = s;
  else {
    const [h, w] = jd(r);
    if (s) {
      const S = d[r] = Kd(
        s,
        f
      );
      Cr(t, h, S, w);
    } else c && (kd(t, h, c, w), d[r] = void 0);
  }
}
const Fu = /(?:Once|Passive|Capture)$/;
function jd(t) {
  let r;
  if (Fu.test(t)) {
    r = {};
    let s;
    for (; s = t.match(Fu); )
      t = t.slice(0, t.length - s[0].length), r[s[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Co(t.slice(2)), r];
}
let us = 0;
const Fd = /* @__PURE__ */ Promise.resolve(), Md = () => us || (Fd.then(() => us = 0), us = Date.now());
function Kd(t, r) {
  const a = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= a.attached)
      return;
    zn(
      Bd(s, a.value),
      r,
      5,
      [s]
    );
  };
  return a.value = t, a.attached = Md(), a;
}
function Bd(t, r) {
  if (Le(r)) {
    const a = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      a.call(t), t._stopped = !0;
    }, r.map(
      (s) => (f) => !f._stopped && s && s(f)
    );
  } else
    return r;
}
const Mu = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, $d = (t, r, a, s, f, d) => {
  const c = f === "svg";
  r === "class" ? Rd(t, s, c) : r === "style" ? Id(t, a, s) : da(r) ? Ps(r) || Ld(t, r, a, s, d) : (r[0] === "." ? (r = r.slice(1), !0) : r[0] === "^" ? (r = r.slice(1), !1) : qd(t, r, s, c)) ? (Lu(t, r, s), !t.tagName.includes("-") && (r === "value" || r === "checked" || r === "selected") && ku(t, r, s, c, d, r !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(r) || !Ot(s)) ? Lu(t, Dn(r), s, d, r) : (r === "true-value" ? t._trueValue = s : r === "false-value" && (t._falseValue = s), ku(t, r, s, c));
};
function qd(t, r, a, s) {
  if (s)
    return !!(r === "innerHTML" || r === "textContent" || r in t && Mu(r) && Be(a));
  if (r === "spellcheck" || r === "draggable" || r === "translate" || r === "autocorrect" || r === "form" || r === "list" && t.tagName === "INPUT" || r === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (r === "width" || r === "height") {
    const f = t.tagName;
    if (f === "IMG" || f === "VIDEO" || f === "CANVAS" || f === "SOURCE")
      return !1;
  }
  return Mu(r) && Ot(a) ? !1 : r in t;
}
const Br = (t) => {
  const r = t.props["onUpdate:modelValue"] || !1;
  return Le(r) ? (a) => Qi(r, a) : r;
};
function Ud(t) {
  t.target.composing = !0;
}
function Ku(t) {
  const r = t.target;
  r.composing && (r.composing = !1, r.dispatchEvent(new Event("input")));
}
const Sn = Symbol("_assign"), Ar = {
  created(t, { modifiers: { lazy: r, trim: a, number: s } }, f) {
    t[Sn] = Br(f);
    const d = s || f.props && f.props.type === "number";
    Cr(t, r ? "change" : "input", (c) => {
      if (c.target.composing) return;
      let h = t.value;
      a && (h = h.trim()), d && (h = na(h)), t[Sn](h);
    }), a && Cr(t, "change", () => {
      t.value = t.value.trim();
    }), r || (Cr(t, "compositionstart", Ud), Cr(t, "compositionend", Ku), Cr(t, "change", Ku));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: r }) {
    t.value = r ?? "";
  },
  beforeUpdate(t, { value: r, oldValue: a, modifiers: { lazy: s, trim: f, number: d } }, c) {
    if (t[Sn] = Br(c), t.composing) return;
    const h = (d || t.type === "number") && !/^0\d/.test(t.value) ? na(t.value) : t.value, w = r ?? "";
    h !== w && (document.activeElement === t && t.type !== "range" && (s && r === a || f && t.value.trim() === w) || (t.value = w));
  }
}, jo = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, r, a) {
    t[Sn] = Br(a), Cr(t, "change", () => {
      const s = t._modelValue, f = Mo(t), d = t.checked, c = t[Sn];
      if (Le(s)) {
        const h = js(s, f), w = h !== -1;
        if (d && !w)
          c(s.concat(f));
        else if (!d && w) {
          const S = [...s];
          S.splice(h, 1), c(S);
        }
      } else if (Bo(s)) {
        const h = new Set(s);
        d ? h.add(f) : h.delete(f), c(h);
      } else
        c(lc(t, d));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Bu,
  beforeUpdate(t, r, a) {
    t[Sn] = Br(a), Bu(t, r, a);
  }
};
function Bu(t, { value: r, oldValue: a }, s) {
  t._modelValue = r;
  let f;
  if (Le(r))
    f = js(r, s.props.value) > -1;
  else if (Bo(r))
    f = r.has(s.props.value);
  else {
    if (r === a) return;
    f = To(r, lc(t, !0));
  }
  t.checked !== f && (t.checked = f);
}
const $r = {
  created(t, { value: r }, a) {
    t.checked = To(r, a.props.value), t[Sn] = Br(a), Cr(t, "change", () => {
      t[Sn](Mo(t));
    });
  },
  beforeUpdate(t, { value: r, oldValue: a }, s) {
    t[Sn] = Br(s), r !== a && (t.checked = To(r, s.props.value));
  }
}, mn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: r, modifiers: { number: a } }, s) {
    const f = Bo(r);
    Cr(t, "change", () => {
      const d = Array.prototype.filter.call(t.options, (c) => c.selected).map(
        (c) => a ? na(Mo(c)) : Mo(c)
      );
      t[Sn](
        t.multiple ? f ? new Set(d) : d : d[0]
      ), t._assigning = !0, Us(() => {
        t._assigning = !1;
      });
    }), t[Sn] = Br(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: r }) {
    $u(t, r);
  },
  beforeUpdate(t, r, a) {
    t[Sn] = Br(a);
  },
  updated(t, { value: r }) {
    t._assigning || $u(t, r);
  }
};
function $u(t, r) {
  const a = t.multiple, s = Le(r);
  if (!(a && !s && !Bo(r))) {
    for (let f = 0, d = t.options.length; f < d; f++) {
      const c = t.options[f], h = Mo(c);
      if (a)
        if (s) {
          const w = typeof h;
          w === "string" || w === "number" ? c.selected = r.some((S) => String(S) === String(h)) : c.selected = js(r, h) > -1;
        } else
          c.selected = r.has(h);
      else if (To(Mo(c), r)) {
        t.selectedIndex !== f && (t.selectedIndex = f);
        return;
      }
    }
    !a && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Mo(t) {
  return "_value" in t ? t._value : t.value;
}
function lc(t, r) {
  const a = r ? "_trueValue" : "_falseValue";
  return a in t ? t[a] : r;
}
const Vd = ["ctrl", "shift", "alt", "meta"], Wd = {
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
  exact: (t, r) => Vd.some((a) => t[`${a}Key`] && !r.includes(a))
}, Gd = (t, r) => {
  const a = t._withMods || (t._withMods = {}), s = r.join(".");
  return a[s] || (a[s] = (f, ...d) => {
    for (let c = 0; c < r.length; c++) {
      const h = Wd[r[c]];
      if (h && h(f, r)) return;
    }
    return t(f, ...d);
  });
}, Hd = /* @__PURE__ */ nn({ patchProp: $d }, Od);
let qu;
function Yd() {
  return qu || (qu = Xf(Hd));
}
const Xd = (...t) => {
  const r = Yd().createApp(...t), { mount: a } = r;
  return r.mount = (s) => {
    const f = zd(s);
    if (!f) return;
    const d = r._component;
    !Be(d) && !d.render && !d.template && (d.template = f.innerHTML), f.nodeType === 1 && (f.textContent = "");
    const c = a(f, !1, Qd(f));
    return f instanceof Element && (f.removeAttribute("v-cloak"), f.setAttribute("data-v-app", "")), c;
  }, r;
};
function Qd(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function zd(t) {
  return Ot(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let cc;
const Oa = (t) => cc = t, fc = (
  /* istanbul ignore next */
  Symbol()
);
function Ts(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Di;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Di || (Di = {}));
function Jd() {
  const t = sl(!0), r = t.run(() => tt({}));
  let a = [], s = [];
  const f = ba({
    install(d) {
      Oa(f), f._a = d, d.provide(fc, f), d.config.globalProperties.$pinia = f, s.forEach((c) => a.push(c)), s = [];
    },
    use(d) {
      return this._a ? a.push(d) : s.push(d), this;
    },
    _p: a,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: r
  });
  return f;
}
const dc = () => {
};
function Uu(t, r, a, s = dc) {
  t.push(r);
  const f = () => {
    const d = t.indexOf(r);
    d > -1 && (t.splice(d, 1), s());
  };
  return !a && Fs() && ul(f), f;
}
function So(t, ...r) {
  t.slice().forEach((a) => {
    a(...r);
  });
}
const Zd = (t) => t(), Vu = Symbol(), ls = Symbol();
function Os(t, r) {
  t instanceof Map && r instanceof Map ? r.forEach((a, s) => t.set(s, a)) : t instanceof Set && r instanceof Set && r.forEach(t.add, t);
  for (const a in r) {
    if (!r.hasOwnProperty(a))
      continue;
    const s = r[a], f = t[a];
    Ts(f) && Ts(s) && t.hasOwnProperty(a) && !Tt(s) && !Rr(s) ? t[a] = Os(f, s) : t[a] = s;
  }
  return t;
}
const ep = (
  /* istanbul ignore next */
  Symbol()
);
function tp(t) {
  return !Ts(t) || !Object.prototype.hasOwnProperty.call(t, ep);
}
const { assign: kr } = Object;
function np(t) {
  return !!(Tt(t) && t.effect);
}
function rp(t, r, a, s) {
  const { state: f, actions: d, getters: c } = r, h = a.state.value[t];
  let w;
  function S() {
    h || (a.state.value[t] = f ? f() : {});
    const O = of(a.state.value[t]);
    return kr(O, d, Object.keys(c || {}).reduce((L, M) => (L[M] = ba(st(() => {
      Oa(a);
      const B = a._s.get(t);
      return c[M].call(B, B);
    })), L), {}));
  }
  return w = pc(t, S, r, a, s, !0), w;
}
function pc(t, r, a = {}, s, f, d) {
  let c;
  const h = kr({ actions: {} }, a), w = { deep: !0 };
  let S, O, L = [], M = [], B;
  const Y = s.state.value[t];
  !d && !Y && (s.state.value[t] = {}), tt({});
  let V;
  function U(Ne) {
    let G;
    S = O = !1, typeof Ne == "function" ? (Ne(s.state.value[t]), G = {
      type: Di.patchFunction,
      storeId: t,
      events: B
    }) : (Os(s.state.value[t], Ne), G = {
      type: Di.patchObject,
      payload: Ne,
      storeId: t,
      events: B
    });
    const Ie = V = Symbol();
    Us().then(() => {
      V === Ie && (S = !0);
    }), O = !0, So(L, G, s.state.value[t]);
  }
  const W = d ? function() {
    const { state: G } = a, Ie = G ? G() : {};
    this.$patch((nt) => {
      kr(nt, Ie);
    });
  } : (
    /* istanbul ignore next */
    dc
  );
  function F() {
    c.stop(), L = [], M = [], s._s.delete(t);
  }
  const K = (Ne, G = "") => {
    if (Vu in Ne)
      return Ne[ls] = G, Ne;
    const Ie = function() {
      Oa(s);
      const nt = Array.from(arguments), qe = [], ft = [];
      function Cn(Ce) {
        qe.push(Ce);
      }
      function Mt(Ce) {
        ft.push(Ce);
      }
      So(M, {
        args: nt,
        name: Ie[ls],
        store: xe,
        after: Cn,
        onError: Mt
      });
      let ut;
      try {
        ut = Ne.apply(this && this.$id === t ? this : xe, nt);
      } catch (Ce) {
        throw So(ft, Ce), Ce;
      }
      return ut instanceof Promise ? ut.then((Ce) => (So(qe, Ce), Ce)).catch((Ce) => (So(ft, Ce), Promise.reject(Ce))) : (So(qe, ut), ut);
    };
    return Ie[Vu] = !0, Ie[ls] = G, Ie;
  }, ae = {
    _p: s,
    // _s: scope,
    $id: t,
    $onAction: Uu.bind(null, M),
    $patch: U,
    $reset: W,
    $subscribe(Ne, G = {}) {
      const Ie = Uu(L, Ne, G.detached, () => nt()), nt = c.run(() => en(() => s.state.value[t], (qe) => {
        (G.flush === "sync" ? O : S) && Ne({
          storeId: t,
          type: Di.direct,
          events: B
        }, qe);
      }, kr({}, w, G)));
      return Ie;
    },
    $dispose: F
  }, xe = $i(ae);
  s._s.set(t, xe);
  const ce = (s._a && s._a.runWithContext || Zd)(() => s._e.run(() => (c = sl()).run(() => r({ action: K }))));
  for (const Ne in ce) {
    const G = ce[Ne];
    if (Tt(G) && !np(G) || Rr(G))
      d || (Y && tp(G) && (Tt(G) ? G.value = Y[Ne] : Os(G, Y[Ne])), s.state.value[t][Ne] = G);
    else if (typeof G == "function") {
      const Ie = K(G, Ne);
      ce[Ne] = Ie, h.actions[Ne] = G;
    }
  }
  return kr(xe, ce), kr(at(xe), ce), Object.defineProperty(xe, "$state", {
    get: () => s.state.value[t],
    set: (Ne) => {
      U((G) => {
        kr(G, Ne);
      });
    }
  }), s._p.forEach((Ne) => {
    kr(xe, c.run(() => Ne({
      store: xe,
      app: s._a,
      pinia: s,
      options: h
    })));
  }), Y && d && a.hydrate && a.hydrate(xe.$state, Y), S = !0, O = !0, xe;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function eu(t, r, a) {
  let s;
  const f = typeof r == "function";
  s = f ? a : r;
  function d(c, h) {
    const w = qf();
    return c = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    c || (w ? Ai(fc, null) : null), c && Oa(c), c = cc, c._s.has(t) || (f ? pc(t, r, s, c) : rp(t, s, c)), c._s.get(t);
  }
  return d.$id = t, d;
}
function qt(t) {
  const r = at(t), a = {};
  for (const s in r) {
    const f = r[s];
    f.effect ? a[s] = // ...
    st({
      get: () => t[s],
      set(d) {
        t[s] = d;
      }
    }) : (Tt(f) || Rr(f)) && (a[s] = // ---
    uf(t, s));
  }
  return a;
}
const Fi = ["q", "t"];
function Yn(t) {
  return `${t.prefix} ${t.lnClass} ${t.lnInst}`;
}
var Xe = /* @__PURE__ */ ((t) => (t.GOOSE = "GOOSE", t.SMV = "SMV", t.REPORT = "Report", t.INTERNAL = "Internal", t.WIRED = "Wired", t.CONTROL = "Control", t))(Xe || {});
const Ko = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: [],
  Internal: []
}, Ca = /* @__PURE__ */ eu("dataflow/sidebar", () => {
  const t = tt(null);
  function r(s) {
    t.value = s;
  }
  function a(s) {
    const f = s === t.value ? null : s;
    r(f);
  }
  return {
    activeElement: t,
    setActiveElement: r,
    setOrResetActiveElement: a
  };
});
var op = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ip(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ea = { exports: {} }, ap = ea.exports, Wu;
function sp() {
  return Wu || (Wu = 1, function(t, r) {
    (function(a, s) {
      t.exports = s();
    })(ap, function() {
      var a = function(e, n) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, i) {
          o.__proto__ = i;
        } || function(o, i) {
          for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (o[u] = i[u]);
        })(e, n);
      }, s = function() {
        return (s = Object.assign || function(e) {
          for (var n, o = 1, i = arguments.length; o < i; o++) for (var u in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
          return e;
        }).apply(this, arguments);
      };
      function f(e, n, o) {
        for (var i, u = 0, l = n.length; u < l; u++) !i && u in n || ((i = i || Array.prototype.slice.call(n, 0, u))[u] = n[u]);
        return e.concat(i || Array.prototype.slice.call(n));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : op, c = Object.keys, h = Array.isArray;
      function w(e, n) {
        return typeof n != "object" || c(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var S = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function L(e, n) {
        return O.call(e, n);
      }
      function M(e, n) {
        typeof n == "function" && (n = n(S(e))), (typeof Reflect > "u" ? c : Reflect.ownKeys)(n).forEach(function(o) {
          Y(e, o, n[o]);
        });
      }
      var B = Object.defineProperty;
      function Y(e, n, o, i) {
        B(e, n, w(o && L(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, i));
      }
      function V(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), Y(e.prototype, "constructor", e), { extend: M.bind(null, e.prototype) };
        } };
      }
      var U = Object.getOwnPropertyDescriptor, W = [].slice;
      function F(e, n, o) {
        return W.call(e, n, o);
      }
      function K(e, n) {
        return n(e);
      }
      function ae(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function xe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ge(e, n) {
        if (typeof n == "string" && L(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], i = 0, u = n.length; i < u; ++i) {
            var l = ge(e, n[i]);
            o.push(l);
          }
          return o;
        }
        var p = n.indexOf(".");
        if (p !== -1) {
          var m = e[n.substr(0, p)];
          return m == null ? void 0 : ge(m, n.substr(p + 1));
        }
      }
      function ce(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ae(typeof o != "string" && "length" in o);
          for (var i = 0, u = n.length; i < u; ++i) ce(e, n[i], o[i]);
        } else {
          var l, p, m = n.indexOf(".");
          m !== -1 ? (l = n.substr(0, m), (p = n.substr(m + 1)) === "" ? o === void 0 ? h(e) && !isNaN(parseInt(l)) ? e.splice(l, 1) : delete e[l] : e[l] = o : ce(m = !(m = e[l]) || !L(e, l) ? e[l] = {} : m, p, o)) : o === void 0 ? h(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function Ne(e) {
        var n, o = {};
        for (n in e) L(e, n) && (o[n] = e[n]);
        return o;
      }
      var G = [].concat;
      function Ie(e) {
        return G.apply([], e);
      }
      var je = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ie([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), nt = new Set(je.map(function(e) {
        return d[e];
      })), qe = null;
      function ft(e) {
        return qe = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var i = qe.get(o);
          if (i) return i;
          if (h(o)) {
            i = [], qe.set(o, i);
            for (var u = 0, l = o.length; u < l; ++u) i.push(n(o[u]));
          } else if (nt.has(o.constructor)) i = o;
          else {
            var p, m = S(o);
            for (p in i = m === Object.prototype ? {} : Object.create(m), qe.set(o, i), o) L(o, p) && (i[p] = n(o[p]));
          }
          return i;
        }(e), qe = null, e;
      }
      var Cn = {}.toString;
      function Mt(e) {
        return Cn.call(e).slice(8, -1);
      }
      var ut = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ce = typeof ut == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[ut]) && n.apply(e);
      } : function() {
        return null;
      };
      function $e(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var _t = {};
      function pt(e) {
        var n, o, i, u;
        if (arguments.length === 1) {
          if (h(e)) return e.slice();
          if (this === _t && typeof e == "string") return [e];
          if (u = Ce(e)) {
            for (o = []; !(i = u.next()).done; ) o.push(i.value);
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
      }, Pe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], xt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Pe), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Bt(e, n) {
        this.name = e, this.message = n;
      }
      function Un(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, i, u) {
          return u.indexOf(o) === i;
        }).join(`
`);
      }
      function vn(e, n, o, i) {
        this.failures = n, this.failedKeys = i, this.successCount = o, this.message = Un(e, n);
      }
      function Rt(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Un(e, this.failures);
      }
      V(Bt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), V(vn).from(Bt), V(Rt).from(Bt);
      var D = xt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), x = Bt, $ = xt.reduce(function(e, n) {
        var o = n + "Error";
        function i(u, l) {
          this.name = o, u ? typeof u == "string" ? (this.message = "".concat(u).concat(l ? `
 ` + l : ""), this.inner = l || null) : typeof u == "object" && (this.message = "".concat(u.name, " ").concat(u.message), this.inner = u) : (this.message = Kt[n] || o, this.inner = null);
        }
        return V(i).from(x), e[n] = i, e;
      }, {});
      $.Syntax = SyntaxError, $.Type = TypeError, $.Range = RangeError;
      var Q = Pe.reduce(function(e, n) {
        return e[n + "Error"] = $[n], e;
      }, {}), Ge = xt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = $[n]), e;
      }, {});
      function A() {
      }
      function q(e) {
        return e;
      }
      function oe(e, n) {
        return e == null || e === q ? n : function(o) {
          return n(e(o));
        };
      }
      function se(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function fe(e, n) {
        return e === A ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var i = this.onsuccess, u = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var l = n.apply(this, arguments);
          return i && (this.onsuccess = this.onsuccess ? se(i, this.onsuccess) : i), u && (this.onerror = this.onerror ? se(u, this.onerror) : u), l !== void 0 ? l : o;
        };
      }
      function ue(e, n) {
        return e === A ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, i = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? se(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? se(i, this.onerror) : i);
        };
      }
      function ye(e, n) {
        return e === A ? n : function(o) {
          var i = e.apply(this, arguments);
          w(o, i);
          var u = this.onsuccess, l = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), u && (this.onsuccess = this.onsuccess ? se(u, this.onsuccess) : u), l && (this.onerror = this.onerror ? se(l, this.onerror) : l), i === void 0 ? o === void 0 ? void 0 : o : w(i, o);
        };
      }
      function we(e, n) {
        return e === A ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function he(e, n) {
        return e === A ? n : function() {
          var o = e.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var i = this, u = arguments.length, l = new Array(u); u--; ) l[u] = arguments[u];
            return o.then(function() {
              return n.apply(i, l);
            });
          }
          return n.apply(this, arguments);
        };
      }
      Ge.ModifyError = vn, Ge.DexieError = Bt, Ge.BulkError = Rt;
      var le = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Se(e) {
        le = e;
      }
      var _e = {}, De = 100, je = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, S(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, S(n), e];
      }(), Pe = je[0], xt = je[1], je = je[2], xt = xt && xt.then, We = Pe && Pe.constructor, Qe = !!je, vt = function(e, n) {
        yn.push([e, n]), It && (queueMicrotask(Aa), It = !1);
      }, Ct = !0, It = !0, yt = [], rn = [], Vn = q, lt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ie = lt, yn = [], on = 0, Zn = [];
      function ne(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = ie;
        if (typeof e != "function") {
          if (e !== _e) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ur(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(i, u) {
          try {
            u(function(l) {
              if (i._state === null) {
                if (l === i) throw new TypeError("A promise cannot be resolved with itself.");
                var p = i._lib && gn();
                l && typeof l.then == "function" ? o(i, function(m, y) {
                  l instanceof ne ? l._then(m, y) : l.then(m, y);
                }) : (i._state = !0, i._value = l, Uo(i)), p && bn();
              }
            }, Ur.bind(null, i));
          } catch (l) {
            Ur(i, l);
          }
        }(this, e);
      }
      var qr = { get: function() {
        var e = ie, n = rr;
        function o(i, u) {
          var l = this, p = !e.global && (e !== ie || n !== rr), m = p && !Vt(), y = new ne(function(b, N) {
            Vr(l, new qo(Wo(i, e, p, m), Wo(u, e, p, m), b, N, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return o.prototype = _e, o;
      }, set: function(e) {
        Y(this, "then", e && e.prototype === _e ? qr : { get: function() {
          return e;
        }, set: qr.set });
      } };
      function qo(e, n, o, i, u) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = i, this.psd = u;
      }
      function Ur(e, n) {
        var o, i;
        rn.push(n), e._state === null && (o = e._lib && gn(), n = Vn(n), e._state = !1, e._value = n, i = e, yt.some(function(u) {
          return u._value === i._value;
        }) || yt.push(i), Uo(e), o && bn());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, i = n.length; o < i; ++o) Vr(e, n[o]);
        var u = e._PSD;
        --u.ref || u.finalize(), on === 0 && (++on, vt(function() {
          --on == 0 && Wr();
        }, []));
      }
      function Vr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++on, vt(Ra, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Ra(e, n, o) {
        try {
          var i, u = n._value;
          !n._state && rn.length && (rn = []), i = le && n._consoleTask ? n._consoleTask.run(function() {
            return e(u);
          }) : e(u), n._state || rn.indexOf(u) !== -1 || function(l) {
            for (var p = yt.length; p; ) if (yt[--p]._value === l._value) return yt.splice(p, 1);
          }(n), o.resolve(i);
        } catch (l) {
          o.reject(l);
        } finally {
          --on == 0 && Wr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Aa() {
        an(lt, function() {
          gn() && bn();
        });
      }
      function gn() {
        var e = Ct;
        return It = Ct = !1, e;
      }
      function bn() {
        var e, n, o;
        do
          for (; 0 < yn.length; ) for (e = yn, yn = [], o = e.length, n = 0; n < o; ++n) {
            var i = e[n];
            i[0].apply(null, i[1]);
          }
        while (0 < yn.length);
        It = Ct = !0;
      }
      function Wr() {
        var e = yt;
        yt = [], e.forEach(function(i) {
          i._PSD.onunhandled.call(null, i._value, i);
        });
        for (var n = Zn.slice(0), o = n.length; o; ) n[--o]();
      }
      function er(e) {
        return new ne(_e, !1, e);
      }
      function Me(e, n) {
        var o = ie;
        return function() {
          var i = gn(), u = ie;
          try {
            return Wt(o, !0), e.apply(this, arguments);
          } catch (l) {
            n && n(l);
          } finally {
            Wt(u, !1), i && bn();
          }
        };
      }
      M(ne.prototype, { then: qr, _then: function(e, n) {
        Vr(this, new qo(null, null, e, n, ie));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(i) {
          return (i instanceof n ? o : er)(i);
        }) : this.then(null, function(i) {
          return (i && i.name === n ? o : er)(i);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ne.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ne.resolve(e()).then(function() {
            return er(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ne(function(i, u) {
          var l = setTimeout(function() {
            return u(new $.Timeout(n));
          }, e);
          o.then(i, u).finally(clearTimeout.bind(null, l));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Y(ne.prototype, Symbol.toStringTag, "Dexie.Promise"), lt.env = Vo(), M(ne, { all: function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n, o) {
          e.length === 0 && n([]);
          var i = e.length;
          e.forEach(function(u, l) {
            return ne.resolve(u).then(function(p) {
              e[l] = p, --i || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ne ? e : e && typeof e.then == "function" ? new ne(function(n, o) {
          e.then(n, o);
        }) : new ne(_e, !0, e);
      }, reject: er, race: function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n, o) {
          e.map(function(i) {
            return ne.resolve(i).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return ie;
      }, set: function(e) {
        return ie = e;
      } }, totalEchoes: { get: function() {
        return rr;
      } }, newPSD: Ut, usePSD: an, scheduler: { get: function() {
        return vt;
      }, set: function(e) {
        vt = e;
      } }, rejectionMapper: { get: function() {
        return Vn;
      }, set: function(e) {
        Vn = e;
      } }, follow: function(e, n) {
        return new ne(function(o, i) {
          return Ut(function(u, l) {
            var p = ie;
            p.unhandleds = [], p.onunhandled = l, p.finalize = se(function() {
              var m, y = this;
              m = function() {
                y.unhandleds.length === 0 ? u() : l(y.unhandleds[0]);
              }, Zn.push(function b() {
                m(), Zn.splice(Zn.indexOf(b), 1);
              }), ++on, vt(function() {
                --on == 0 && Wr();
              }, []);
            }, p.finalize), e();
          }, n, o, i);
        });
      } }), We && (We.allSettled && Y(ne, "allSettled", function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n) {
          e.length === 0 && n([]);
          var o = e.length, i = new Array(o);
          e.forEach(function(u, l) {
            return ne.resolve(u).then(function(p) {
              return i[l] = { status: "fulfilled", value: p };
            }, function(p) {
              return i[l] = { status: "rejected", reason: p };
            }).then(function() {
              return --o || n(i);
            });
          });
        });
      }), We.any && typeof AggregateError < "u" && Y(ne, "any", function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var i = e.length, u = new Array(i);
          e.forEach(function(l, p) {
            return ne.resolve(l).then(function(m) {
              return n(m);
            }, function(m) {
              u[p] = m, --i || o(new AggregateError(u));
            });
          });
        });
      }), We.withResolvers && (ne.withResolvers = We.withResolvers));
      var ze = { awaits: 0, echoes: 0, id: 0 }, Sa = 0, tr = [], nr = 0, rr = 0, Da = 0;
      function Ut(e, n, o, i) {
        var u = ie, l = Object.create(u);
        return l.parent = u, l.ref = 0, l.global = !1, l.id = ++Da, lt.env, l.env = Qe ? { Promise: ne, PromiseProp: { value: ne, configurable: !0, writable: !0 }, all: ne.all, race: ne.race, allSettled: ne.allSettled, any: ne.any, resolve: ne.resolve, reject: ne.reject } : {}, n && w(l, n), ++u.ref, l.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, i = an(l, e, o, i), l.ref === 0 && l.finalize(), i;
      }
      function wn() {
        return ze.id || (ze.id = ++Sa), ++ze.awaits, ze.echoes += De, ze.id;
      }
      function Vt() {
        return !!ze.awaits && (--ze.awaits == 0 && (ze.id = 0), ze.echoes = ze.awaits * De, !0);
      }
      function or(e) {
        return ze.echoes && e && e.constructor === We ? (wn(), e.then(function(n) {
          return Vt(), n;
        }, function(n) {
          return Vt(), Ue(n);
        })) : e;
      }
      function Ia() {
        var e = tr[tr.length - 1];
        tr.pop(), Wt(e, !1);
      }
      function Wt(e, n) {
        var o, i = ie;
        (n ? !ze.echoes || nr++ && e === ie : !nr || --nr && e === ie) || queueMicrotask(n ? (function(u) {
          ++rr, ze.echoes && --ze.echoes != 0 || (ze.echoes = ze.awaits = ze.id = 0), tr.push(ie), Wt(u, !0);
        }).bind(null, e) : Ia), e !== ie && (ie = e, i === lt && (lt.env = Vo()), Qe && (o = lt.env.Promise, n = e.env, (i.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = d.Promise;
        return Qe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function an(e, n, o, i, u) {
        var l = ie;
        try {
          return Wt(e, !0), n(o, i, u);
        } finally {
          Wt(l, !1);
        }
      }
      function Wo(e, n, o, i) {
        return typeof e != "function" ? e : function() {
          var u = ie;
          o && wn(), Wt(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Wt(u, !1), i && queueMicrotask(Vt);
          }
        };
      }
      function Gr(e) {
        Promise === We && ze.echoes === 0 ? nr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + xt).indexOf("[native code]") === -1 && (wn = Vt = A);
      var Ue = ne.reject, sn = "￿", Lt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", _n = [], ir = "__dbnames", Hr = "readonly", Yr = "readwrite";
      function un(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ar(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = ft(n))[e], n;
        };
      }
      function Yo() {
        throw $.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Te(e, n) {
        try {
          var o = Xo(e), i = Xo(n);
          if (o !== i) return o === "Array" ? 1 : i === "Array" ? -1 : o === "binary" ? 1 : i === "binary" ? -1 : o === "string" ? 1 : i === "string" ? -1 : o === "Date" ? 1 : i !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(u, l) {
                for (var p = u.length, m = l.length, y = p < m ? p : m, b = 0; b < y; ++b) if (u[b] !== l[b]) return u[b] < l[b] ? -1 : 1;
                return p === m ? 0 : p < m ? -1 : 1;
              }(Qo(e), Qo(n));
            case "Array":
              return function(u, l) {
                for (var p = u.length, m = l.length, y = p < m ? p : m, b = 0; b < y; ++b) {
                  var N = Te(u[b], l[b]);
                  if (N !== 0) return N;
                }
                return p === m ? 0 : p < m ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function Xo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Mt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Qo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function sr(e, n, o) {
        var i = e.schema.yProps;
        return i ? (n && 0 < o.numFailures && (n = n.filter(function(u, l) {
          return !o.failures[l];
        })), Promise.all(i.map(function(u) {
          return u = u.updatesTable, n ? e.db.table(u).where("k").anyOf(n).delete() : e.db.table(u).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var zo = (ke.prototype._trans = function(e, n, o) {
        var i = this._tx || ie.trans, u = this.name, l = le && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function p(b, N, v) {
          if (!v.schema[u]) throw new $.NotFound("Table " + u + " not part of transaction");
          return n(v.idbtrans, v);
        }
        var m = gn();
        try {
          var y = i && i.db._novip === this.db._novip ? i === ie.trans ? i._promise(e, p, o) : Ut(function() {
            return i._promise(e, p, o);
          }, { trans: i, transless: ie.transless || ie }) : function b(N, v, C, g) {
            if (N.idbdb && (N._state.openComplete || ie.letThrough || N._vip)) {
              var _ = N._createTransaction(v, C, N._dbSchema);
              try {
                _.create(), N._state.PR1398_maxLoop = 3;
              } catch (T) {
                return T.name === D.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
                  return b(N, v, C, g);
                })) : Ue(T);
              }
              return _._promise(v, function(T, E) {
                return Ut(function() {
                  return ie.trans = _, g(T, E, _);
                });
              }).then(function(T) {
                if (v === "readwrite") try {
                  _.idbtrans.commit();
                } catch {
                }
                return v === "readonly" ? T : _._completion.then(function() {
                  return T;
                });
              });
            }
            if (N._state.openComplete) return Ue(new $.DatabaseClosed(N._state.dbOpenError));
            if (!N._state.isBeingOpened) {
              if (!N._state.autoOpen) return Ue(new $.DatabaseClosed());
              N.open().catch(A);
            }
            return N._state.dbReadyPromise.then(function() {
              return b(N, v, C, g);
            });
          }(this.db, e, [this.name], p);
          return l && (y._consoleTask = l, y = y.catch(function(b) {
            return console.trace(b), Ue(b);
          })), y;
        } finally {
          m && bn();
        }
      }, ke.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? Ue(new $.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(i) {
          return o.core.get({ trans: i, key: e }).then(function(u) {
            return o.hook.reading.fire(u);
          });
        }).then(n);
      }, ke.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (h(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var n = c(e);
        if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(m) {
          if (m.compound && n.every(function(b) {
            return 0 <= m.keyPath.indexOf(b);
          })) {
            for (var y = 0; y < n.length; ++y) if (n.indexOf(m.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(m, y) {
          return m.keyPath.length - y.keyPath.length;
        })[0];
        if (o && this.db._maxKey !== sn) {
          var l = o.keyPath.slice(0, n.length);
          return this.where(l).equals(l.map(function(y) {
            return e[y];
          }));
        }
        !o && le && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var i = this.schema.idxByName;
        function u(m, y) {
          return Te(m, y) === 0;
        }
        var p = n.reduce(function(v, y) {
          var b = v[0], N = v[1], v = i[y], C = e[y];
          return [b || v, b || !v ? un(N, v && v.multi ? function(g) {
            return g = ge(g, y), h(g) && g.some(function(_) {
              return u(C, _);
            });
          } : function(g) {
            return u(C, ge(g, y));
          }) : N];
        }, [null, null]), l = p[0], p = p[1];
        return l ? this.where(l.name).equals(e[l.keyPath]).filter(p) : o ? this.filter(p) : this.where(n).equals("");
      }, ke.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ke.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ke.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ke.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ke.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ke.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ke.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ke.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, h(e) ? "[".concat(e.join("+"), "]") : e));
      }, ke.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ke.prototype.mapToClass = function(e) {
        var n, o = this.db, i = this.name;
        function u() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Yo && (function(y, b) {
          if (typeof b != "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          function N() {
            this.constructor = y;
          }
          a(y, b), y.prototype = b === null ? Object.create(b) : (N.prototype = b.prototype, new N());
        }(u, n = e), Object.defineProperty(u.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), u.prototype.table = function() {
          return i;
        }, e = u);
        for (var l = /* @__PURE__ */ new Set(), p = e.prototype; p; p = S(p)) Object.getOwnPropertyNames(p).forEach(function(y) {
          return l.add(y);
        });
        function m(y) {
          if (!y) return y;
          var b, N = Object.create(e.prototype);
          for (b in y) if (!l.has(b)) try {
            N[b] = y[b];
          } catch {
          }
          return N;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = m, this.hook("reading", m), e;
      }, ke.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          w(this, e);
        });
      }, ke.prototype.add = function(e, n) {
        var o = this, i = this.schema.primKey, u = i.auto, l = i.keyPath, p = e;
        return l && u && (p = ar(l)(e)), this._trans("readwrite", function(m) {
          return o.core.mutate({ trans: m, type: "add", keys: n != null ? [n] : null, values: [p] });
        }).then(function(m) {
          return m.numFailures ? ne.reject(m.failures[0]) : m.lastResult;
        }).then(function(m) {
          if (l) try {
            ce(e, l, m);
          } catch {
          }
          return m;
        });
      }, ke.prototype.update = function(e, n) {
        return typeof e != "object" || h(e) ? this.where(":id").equals(e).modify(n) : (e = ge(e, this.schema.primKey.keyPath), e === void 0 ? Ue(new $.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, ke.prototype.put = function(e, n) {
        var o = this, i = this.schema.primKey, u = i.auto, l = i.keyPath, p = e;
        return l && u && (p = ar(l)(e)), this._trans("readwrite", function(m) {
          return o.core.mutate({ trans: m, type: "put", values: [p], keys: n != null ? [n] : null });
        }).then(function(m) {
          return m.numFailures ? ne.reject(m.failures[0]) : m.lastResult;
        }).then(function(m) {
          if (l) try {
            ce(e, l, m);
          } catch {
          }
          return m;
        });
      }, ke.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(i) {
            return sr(n, [e], i);
          }).then(function(i) {
            return i.numFailures ? ne.reject(i.failures[0]) : void 0;
          });
        });
      }, ke.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return sr(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ne.reject(n.failures[0]) : void 0;
        });
      }, ke.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(o) {
          return n.core.getMany({ keys: e, trans: o }).then(function(i) {
            return i.map(function(u) {
              return n.hook.reading.fire(u);
            });
          });
        });
      }, ke.prototype.bulkAdd = function(e, n, o) {
        var i = this, u = Array.isArray(n) ? n : void 0, l = (o = o || (u ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(p) {
          var b = i.schema.primKey, m = b.auto, b = b.keyPath;
          if (b && u) throw new $.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== e.length) throw new $.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, b = b && m ? e.map(ar(b)) : e;
          return i.core.mutate({ trans: p, type: "add", keys: u, values: b, wantResults: l }).then(function(_) {
            var v = _.numFailures, C = _.results, g = _.lastResult, _ = _.failures;
            if (v === 0) return l ? C : g;
            throw new Rt("".concat(i.name, ".bulkAdd(): ").concat(v, " of ").concat(y, " operations failed"), _);
          });
        });
      }, ke.prototype.bulkPut = function(e, n, o) {
        var i = this, u = Array.isArray(n) ? n : void 0, l = (o = o || (u ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(p) {
          var b = i.schema.primKey, m = b.auto, b = b.keyPath;
          if (b && u) throw new $.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== e.length) throw new $.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, b = b && m ? e.map(ar(b)) : e;
          return i.core.mutate({ trans: p, type: "put", keys: u, values: b, wantResults: l }).then(function(_) {
            var v = _.numFailures, C = _.results, g = _.lastResult, _ = _.failures;
            if (v === 0) return l ? C : g;
            throw new Rt("".concat(i.name, ".bulkPut(): ").concat(v, " of ").concat(y, " operations failed"), _);
          });
        });
      }, ke.prototype.bulkUpdate = function(e) {
        var n = this, o = this.core, i = e.map(function(p) {
          return p.key;
        }), u = e.map(function(p) {
          return p.changes;
        }), l = [];
        return this._trans("readwrite", function(p) {
          return o.getMany({ trans: p, keys: i, cache: "clone" }).then(function(m) {
            var y = [], b = [];
            e.forEach(function(v, C) {
              var g = v.key, _ = v.changes, T = m[C];
              if (T) {
                for (var E = 0, R = Object.keys(_); E < R.length; E++) {
                  var I = R[E], P = _[I];
                  if (I === n.schema.primKey.keyPath) {
                    if (Te(P, g) !== 0) throw new $.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ce(T, I, P);
                }
                l.push(C), y.push(g), b.push(T);
              }
            });
            var N = y.length;
            return o.mutate({ trans: p, type: "put", keys: y, values: b, updates: { keys: i, changeSpecs: u } }).then(function(v) {
              var C = v.numFailures, g = v.failures;
              if (C === 0) return N;
              for (var _ = 0, T = Object.keys(g); _ < T.length; _++) {
                var E, R = T[_], I = l[Number(R)];
                I != null && (E = g[R], delete g[R], g[I] = E);
              }
              throw new Rt("".concat(n.name, ".bulkUpdate(): ").concat(C, " of ").concat(N, " operations failed"), g);
            });
          });
        });
      }, ke.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(i) {
          return n.core.mutate({ trans: i, type: "delete", keys: e }).then(function(u) {
            return sr(n, e, u);
          });
        }).then(function(p) {
          var u = p.numFailures, l = p.lastResult, p = p.failures;
          if (u === 0) return l;
          throw new Rt("".concat(n.name, ".bulkDelete(): ").concat(u, " of ").concat(o, " operations failed"), p);
        });
      }, ke);
      function ke() {
      }
      function In(e) {
        function n(p, m) {
          if (m) {
            for (var y = arguments.length, b = new Array(y - 1); --y; ) b[y - 1] = arguments[y];
            return o[p].subscribe.apply(null, b), e;
          }
          if (typeof p == "string") return o[p];
        }
        var o = {};
        n.addEventType = l;
        for (var i = 1, u = arguments.length; i < u; ++i) l(arguments[i]);
        return n;
        function l(p, m, y) {
          if (typeof p != "object") {
            var b;
            m = m || we;
            var N = { subscribers: [], fire: y = y || A, subscribe: function(v) {
              N.subscribers.indexOf(v) === -1 && (N.subscribers.push(v), N.fire = m(N.fire, v));
            }, unsubscribe: function(v) {
              N.subscribers = N.subscribers.filter(function(C) {
                return C !== v;
              }), N.fire = N.subscribers.reduce(m, y);
            } };
            return o[p] = n[p] = N;
          }
          c(b = p).forEach(function(v) {
            var C = b[v];
            if (h(C)) l(v, b[v][0], b[v][1]);
            else {
              if (C !== "asap") throw new $.InvalidArgument("Invalid event config");
              var g = l(v, q, function() {
                for (var _ = arguments.length, T = new Array(_); _--; ) T[_] = arguments[_];
                g.subscribers.forEach(function(E) {
                  xe(function() {
                    E.apply(null, T);
                  });
                });
              });
            }
          });
        }
      }
      function Pn(e, n) {
        return V(n).from({ prototype: e }), n;
      }
      function xn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function Xr(e, n) {
        e.filter = un(e.filter, n);
      }
      function Qr(e, n, o) {
        var i = e.replayFilter;
        e.replayFilter = i ? function() {
          return un(i(), n());
        } : n, e.justLimit = o && !i;
      }
      function ur(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new $.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Jo(e, n, o) {
        var i = ur(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: i, range: e.range } });
      }
      function lr(e, n, o, i) {
        var u = e.replayFilter ? un(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var l = {}, p = function(m, y, b) {
            var N, v;
            u && !u(y, b, function(C) {
              return y.stop(C);
            }, function(C) {
              return y.fail(C);
            }) || ((v = "" + (N = y.primaryKey)) == "[object ArrayBuffer]" && (v = "" + new Uint8Array(N)), L(l, v) || (l[v] = !0, n(m, y, b)));
          };
          return Promise.all([e.or._iterate(p, o), Zo(Jo(e, i, o), e.algorithm, p, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, i, o), un(e.algorithm, u), n, !e.keysOnly && e.valueMapper);
      }
      function Zo(e, n, o, i) {
        var u = Me(i ? function(l, p, m) {
          return o(i(l), p, m);
        } : o);
        return e.then(function(l) {
          if (l) return l.start(function() {
            var p = function() {
              return l.continue();
            };
            n && !n(l, function(m) {
              return p = m;
            }, function(m) {
              l.stop(m), p = A;
            }, function(m) {
              l.fail(m), p = A;
            }) || u(l.value, l, function(m) {
              return p = m;
            }), p();
          });
        });
      }
      var kn = (ei.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (h(o)) return f(f([], h(e) ? e : [], !0), o).sort();
          if (typeof o == "number") return (Number(e) || 0) + o;
          if (typeof o == "bigint") try {
            return BigInt(e) + o;
          } catch {
            return BigInt(0) + o;
          }
          throw new TypeError("Invalid term ".concat(o));
        }
        if (n.remove !== void 0) {
          var i = n.remove;
          if (h(i)) return h(e) ? e.filter(function(u) {
            return !i.includes(u);
          }).sort() : [];
          if (typeof i == "number") return Number(e) - i;
          if (typeof i == "bigint") try {
            return BigInt(e) - i;
          } catch {
            return BigInt(0) - i;
          }
          throw new TypeError("Invalid subtrahend ".concat(i));
        }
        return o = (o = n.replacePrefix) === null || o === void 0 ? void 0 : o[0], o && typeof e == "string" && e.startsWith(o) ? n.replacePrefix[1] + e.substring(o.length) : e;
      }, ei);
      function ei(e) {
        this["@@propmod"] = e;
      }
      var Pa = (Ae.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Ue.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Ae.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, Ue.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Ae.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = un(n.algorithm, e);
      }, Ae.prototype._iterate = function(e, n) {
        return lr(this._ctx, e, n, this._ctx.table.core);
      }, Ae.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && w(o, e), n._ctx = o, n;
      }, Ae.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ae.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return lr(n, e, o, n.table.core);
        });
      }, Ae.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var i = n._ctx, u = i.table.core;
          if (xn(i, !0)) return u.count({ trans: o, query: { index: ur(i, u.schema), range: i.range } }).then(function(p) {
            return Math.min(p, i.limit);
          });
          var l = 0;
          return lr(i, function() {
            return ++l, !1;
          }, o, u).then(function() {
            return l;
          });
        }).then(e);
      }, Ae.prototype.sortBy = function(e, n) {
        var o = e.split(".").reverse(), i = o[0], u = o.length - 1;
        function l(y, b) {
          return b ? l(y[o[b]], b - 1) : y[i];
        }
        var p = this._ctx.dir === "next" ? 1 : -1;
        function m(y, b) {
          return Te(l(y, u), l(b, u)) * p;
        }
        return this.toArray(function(y) {
          return y.sort(m);
        }).then(n);
      }, Ae.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var i = n._ctx;
          if (i.dir === "next" && xn(i, !0) && 0 < i.limit) {
            var u = i.valueMapper, l = ur(i, i.table.core.schema);
            return i.table.core.query({ trans: o, limit: i.limit, values: !0, query: { index: l, range: i.range } }).then(function(m) {
              return m = m.result, u ? m.map(u) : m;
            });
          }
          var p = [];
          return lr(i, function(m) {
            return p.push(m);
          }, o, i.table.core).then(function() {
            return p;
          });
        }, e);
      }, Ae.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, xn(n) ? Qr(n, function() {
          var o = e;
          return function(i, u) {
            return o === 0 || (o === 1 ? --o : u(function() {
              i.advance(o), o = 0;
            }), !1);
          };
        }) : Qr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Ae.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, i, u) {
            return --n <= 0 && i(u), 0 <= n;
          };
        }, !0), this;
      }, Ae.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, i, u) {
          return !e(o.value) || (i(u), n);
        }), this;
      }, Ae.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Ae.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ae.prototype.filter = function(e) {
        var n;
        return Xr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = un(n.isMatch, e), this;
      }, Ae.prototype.and = function(e) {
        return this.filter(e);
      }, Ae.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ae.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ae.prototype.desc = function() {
        return this.reverse();
      }, Ae.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, i) {
          e(i.key, i);
        });
      }, Ae.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ae.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, i) {
          e(i.primaryKey, i);
        });
      }, Ae.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(i, u) {
          o.push(u.key);
        }).then(function() {
          return o;
        }).then(e);
      }, Ae.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && xn(n, !0) && 0 < n.limit) return this._read(function(i) {
          var u = ur(n, n.table.core.schema);
          return n.table.core.query({ trans: i, values: !1, limit: n.limit, query: { index: u, range: n.range } });
        }).then(function(i) {
          return i.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(i, u) {
          o.push(u.primaryKey);
        }).then(function() {
          return o;
        }).then(e);
      }, Ae.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ae.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Ae.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ae.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Xr(this._ctx, function(u) {
          var i = u.primaryKey.toString(), u = L(n, i);
          return n[i] = !0, !u;
        }), this;
      }, Ae.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(i) {
          var u, l, p;
          p = typeof e == "function" ? e : (u = c(e), l = u.length, function(R) {
            for (var I = !1, P = 0; P < l; ++P) {
              var k = u[P], H = e[k], J = ge(R, k);
              H instanceof kn ? (ce(R, k, H.execute(J)), I = !0) : J !== H && (ce(R, k, H), I = !0);
            }
            return I;
          });
          var m = o.table.core, v = m.schema.primaryKey, y = v.outbound, b = v.extractKey, N = 200, v = n.db._options.modifyChunkSize;
          v && (N = typeof v == "object" ? v[m.name] || v["*"] || 200 : v);
          function C(R, k) {
            var P = k.failures, k = k.numFailures;
            _ += R - k;
            for (var H = 0, J = c(P); H < J.length; H++) {
              var X = J[H];
              g.push(P[X]);
            }
          }
          var g = [], _ = 0, T = [], E = e === ti;
          return n.clone().primaryKeys().then(function(R) {
            function I(k) {
              var H = Math.min(N, R.length - k), J = R.slice(k, k + H);
              return (E ? Promise.resolve([]) : m.getMany({ trans: i, keys: J, cache: "immutable" })).then(function(X) {
                var z = [], te = [], ee = y ? [] : null, re = E ? J : [];
                if (!E) for (var be = 0; be < H; ++be) {
                  var Oe = X[be], ve = { value: ft(Oe), primKey: R[k + be] };
                  p.call(ve, ve.value, ve) !== !1 && (ve.value == null ? re.push(R[k + be]) : y || Te(b(Oe), b(ve.value)) === 0 ? (te.push(ve.value), y && ee.push(R[k + be])) : (re.push(R[k + be]), z.push(ve.value)));
                }
                return Promise.resolve(0 < z.length && m.mutate({ trans: i, type: "add", values: z }).then(function(Ke) {
                  for (var me in Ke.failures) re.splice(parseInt(me), 1);
                  C(z.length, Ke);
                })).then(function() {
                  return (0 < te.length || P && typeof e == "object") && m.mutate({ trans: i, type: "put", keys: ee, values: te, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < k }).then(function(Ke) {
                    return C(te.length, Ke);
                  });
                }).then(function() {
                  return (0 < re.length || P && E) && m.mutate({ trans: i, type: "delete", keys: re, criteria: P, isAdditionalChunk: 0 < k }).then(function(Ke) {
                    return sr(o.table, re, Ke);
                  }).then(function(Ke) {
                    return C(re.length, Ke);
                  });
                }).then(function() {
                  return R.length > k + H && I(k + N);
                });
              });
            }
            var P = xn(o) && o.limit === 1 / 0 && (typeof e != "function" || E) && { index: o.index, range: o.range };
            return I(0).then(function() {
              if (0 < g.length) throw new vn("Error modifying one or more objects", g, _, T);
              return R.length;
            });
          });
        });
      }, Ae.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !xn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ti) : this._write(function(o) {
          var i = e.table.core.schema.primaryKey, u = n;
          return e.table.core.count({ trans: o, query: { index: i, range: u } }).then(function(l) {
            return e.table.core.mutate({ trans: o, type: "deleteRange", range: u }).then(function(y) {
              var m = y.failures, y = y.numFailures;
              if (y) throw new vn("Could not delete some values", Object.keys(m).map(function(b) {
                return m[b];
              }), l - y);
              return l - y;
            });
          });
        });
      }, Ae);
      function Ae() {
      }
      var ti = function(e, n) {
        return n.value = null;
      };
      function ka(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function La(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function mt(e, n, o) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Nn(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function cr(e, n, o, i) {
        var u, l, p, m, y, b, N, v = o.length;
        if (!o.every(function(_) {
          return typeof _ == "string";
        })) return mt(e, Go);
        function C(_) {
          u = _ === "next" ? function(E) {
            return E.toUpperCase();
          } : function(E) {
            return E.toLowerCase();
          }, l = _ === "next" ? function(E) {
            return E.toLowerCase();
          } : function(E) {
            return E.toUpperCase();
          }, p = _ === "next" ? ka : La;
          var T = o.map(function(E) {
            return { lower: l(E), upper: u(E) };
          }).sort(function(E, R) {
            return p(E.lower, R.lower);
          });
          m = T.map(function(E) {
            return E.upper;
          }), y = T.map(function(E) {
            return E.lower;
          }), N = (b = _) === "next" ? "" : i;
        }
        C("next"), e = new e.Collection(e, function() {
          return Gt(m[0], y[v - 1] + i);
        }), e._ondirectionchange = function(_) {
          C(_);
        };
        var g = 0;
        return e._addAlgorithm(function(_, T, E) {
          var R = _.key;
          if (typeof R != "string") return !1;
          var I = l(R);
          if (n(I, y, g)) return !0;
          for (var P = null, k = g; k < v; ++k) {
            var H = function(J, X, z, te, ee, re) {
              for (var be = Math.min(J.length, te.length), Oe = -1, ve = 0; ve < be; ++ve) {
                var Ke = X[ve];
                if (Ke !== te[ve]) return ee(J[ve], z[ve]) < 0 ? J.substr(0, ve) + z[ve] + z.substr(ve + 1) : ee(J[ve], te[ve]) < 0 ? J.substr(0, ve) + te[ve] + z.substr(ve + 1) : 0 <= Oe ? J.substr(0, Oe) + X[Oe] + z.substr(Oe + 1) : null;
                ee(J[ve], Ke) < 0 && (Oe = ve);
              }
              return be < te.length && re === "next" ? J + z.substr(J.length) : be < J.length && re === "prev" ? J.substr(0, z.length) : Oe < 0 ? null : J.substr(0, Oe) + te[Oe] + z.substr(Oe + 1);
            }(R, I, m[k], y[k], p, b);
            H === null && P === null ? g = k + 1 : (P === null || 0 < p(P, H)) && (P = H);
          }
          return T(P !== null ? function() {
            _.continue(P + N);
          } : E), !1;
        }), e;
      }
      function Gt(e, n, o, i) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: i };
      }
      function ni(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ri = (Object.defineProperty(Je.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Je.prototype.between = function(e, n, o, i) {
        o = o !== !1, i = i === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || i) && (!o || !i) ? Nn(this) : new this.Collection(this, function() {
            return Gt(e, n, !o, !i);
          });
        } catch {
          return mt(this, Lt);
        }
      }, Je.prototype.equals = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return ni(e);
        });
      }, Je.prototype.above = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(e, void 0, !0);
        });
      }, Je.prototype.aboveOrEqual = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(e, void 0, !1);
        });
      }, Je.prototype.below = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(void 0, e, !1, !0);
        });
      }, Je.prototype.belowOrEqual = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(void 0, e);
        });
      }, Je.prototype.startsWith = function(e) {
        return typeof e != "string" ? mt(this, Go) : this.between(e, e + sn, !0, !0);
      }, Je.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : cr(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], sn);
      }, Je.prototype.equalsIgnoreCase = function(e) {
        return cr(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, Je.prototype.anyOfIgnoreCase = function() {
        var e = pt.apply(_t, arguments);
        return e.length === 0 ? Nn(this) : cr(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, Je.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = pt.apply(_t, arguments);
        return e.length === 0 ? Nn(this) : cr(this, function(n, o) {
          return o.some(function(i) {
            return n.indexOf(i) === 0;
          });
        }, e, sn);
      }, Je.prototype.anyOf = function() {
        var e = this, n = pt.apply(_t, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return mt(this, Lt);
        }
        if (n.length === 0) return Nn(this);
        var i = new this.Collection(this, function() {
          return Gt(n[0], n[n.length - 1]);
        });
        i._ondirectionchange = function(l) {
          o = l === "next" ? e._ascending : e._descending, n.sort(o);
        };
        var u = 0;
        return i._addAlgorithm(function(l, p, m) {
          for (var y = l.key; 0 < o(y, n[u]); ) if (++u === n.length) return p(m), !1;
          return o(y, n[u]) === 0 || (p(function() {
            l.continue(n[u]);
          }), !1);
        }), i;
      }, Je.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.noneOf = function() {
        var e = pt.apply(_t, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return mt(this, Lt);
        }
        var n = e.reduce(function(o, i) {
          return o ? o.concat([[o[o.length - 1][1], i]]) : [[-1 / 0, i]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.inAnyRange = function(R, n) {
        var o = this, i = this._cmp, u = this._ascending, l = this._descending, p = this._min, m = this._max;
        if (R.length === 0) return Nn(this);
        if (!R.every(function(I) {
          return I[0] !== void 0 && I[1] !== void 0 && u(I[0], I[1]) <= 0;
        })) return mt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", $.InvalidArgument);
        var y = !n || n.includeLowers !== !1, b = n && n.includeUppers === !0, N, v = u;
        function C(I, P) {
          return v(I[0], P[0]);
        }
        try {
          (N = R.reduce(function(I, P) {
            for (var k = 0, H = I.length; k < H; ++k) {
              var J = I[k];
              if (i(P[0], J[1]) < 0 && 0 < i(P[1], J[0])) {
                J[0] = p(J[0], P[0]), J[1] = m(J[1], P[1]);
                break;
              }
            }
            return k === H && I.push(P), I;
          }, [])).sort(C);
        } catch {
          return mt(this, Lt);
        }
        var g = 0, _ = b ? function(I) {
          return 0 < u(I, N[g][1]);
        } : function(I) {
          return 0 <= u(I, N[g][1]);
        }, T = y ? function(I) {
          return 0 < l(I, N[g][0]);
        } : function(I) {
          return 0 <= l(I, N[g][0]);
        }, E = _, R = new this.Collection(this, function() {
          return Gt(N[0][0], N[N.length - 1][1], !y, !b);
        });
        return R._ondirectionchange = function(I) {
          v = I === "next" ? (E = _, u) : (E = T, l), N.sort(C);
        }, R._addAlgorithm(function(I, P, k) {
          for (var H, J = I.key; E(J); ) if (++g === N.length) return P(k), !1;
          return !_(H = J) && !T(H) || (o._cmp(J, N[g][1]) === 0 || o._cmp(J, N[g][0]) === 0 || P(function() {
            v === u ? I.continue(N[g][0]) : I.continue(N[g][1]);
          }), !1);
        }), R;
      }, Je.prototype.startsWithAnyOf = function() {
        var e = pt.apply(_t, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Nn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + sn];
        })) : mt(this, "startsWithAnyOf() only works with strings");
      }, Je);
      function Je() {
      }
      function At(e) {
        return Me(function(n) {
          return Ln(n), e(n.target.error), !1;
        });
      }
      function Ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var jn = "storagemutated", zr = "x-storagemutated-1", Ht = In(null, jn), ja = (St.prototype._lock = function() {
        return ae(!ie.global), ++this._reculock, this._reculock !== 1 || ie.global || (ie.lockOwnerFor = this), this;
      }, St.prototype._unlock = function() {
        if (ae(!ie.global), --this._reculock == 0) for (ie.global || (ie.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            an(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, St.prototype._locked = function() {
        return this._reculock && ie.lockOwnerFor !== this;
      }, St.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, i = this.db._state.dbOpenError;
        if (ae(!this.idbtrans), !e && !o) switch (i && i.name) {
          case "DatabaseClosedError":
            throw new $.DatabaseClosed(i);
          case "MissingAPIError":
            throw new $.MissingAPI(i.message, i);
          default:
            throw new $.OpenFailed(i);
        }
        if (!this.active) throw new $.TransactionInactive();
        return ae(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Me(function(u) {
          Ln(u), n._reject(e.error);
        }), e.onabort = Me(function(u) {
          Ln(u), n.active && n._reject(new $.Abort(e.error)), n.active = !1, n.on("abort").fire(u);
        }), e.oncomplete = Me(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Ht.storagemutated.fire(e.mutatedParts);
        }), this;
      }, St.prototype._promise = function(e, n, o) {
        var i = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ue(new $.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new $.TransactionInactive());
        if (this._locked()) return new ne(function(l, p) {
          i._blockedFuncs.push([function() {
            i._promise(e, n, o).then(l, p);
          }, ie]);
        });
        if (o) return Ut(function() {
          var l = new ne(function(p, m) {
            i._lock();
            var y = n(p, m, i);
            y && y.then && y.then(p, m);
          });
          return l.finally(function() {
            return i._unlock();
          }), l._lib = !0, l;
        });
        var u = new ne(function(l, p) {
          var m = n(l, p, i);
          m && m.then && m.then(l, p);
        });
        return u._lib = !0, u;
      }, St.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, St.prototype.waitFor = function(e) {
        var n, o = this._root(), i = ne.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return i;
        }) : (o._waitingFor = i, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function l() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = l);
        }());
        var u = o._waitingFor;
        return new ne(function(l, p) {
          i.then(function(m) {
            return o._waitingQueue.push(Me(l.bind(null, m)));
          }, function(m) {
            return o._waitingQueue.push(Me(p.bind(null, m)));
          }).finally(function() {
            o._waitingFor === u && (o._waitingFor = null);
          });
        });
      }, St.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new $.Abort()));
      }, St.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (L(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new $.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, St);
      function St() {
      }
      function Jr(e, n, o, i, u, l, p, m) {
        return { name: e, keyPath: n, unique: o, multi: i, auto: u, compound: l, src: (o && !p ? "&" : "") + (i ? "*" : "") + (u ? "++" : "") + oi(n), type: m };
      }
      function oi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Zr(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (i = function(u) {
          return [u.name, u];
        }, o.reduce(function(u, l, p) {
          return p = i(l, p), p && (u[p[0]] = p[1]), u;
        }, {})) };
        var i;
      }
      var Fn = function(e) {
        try {
          return e.only([[]]), Fn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Fn = function() {
            return sn;
          }, sn;
        }
      };
      function eo(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return ge(o, n);
        } : function(o) {
          return ge(o, e);
        };
        var n;
      }
      function ii(e) {
        return [].slice.call(e);
      }
      var Fa = 0;
      function Mn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ma(e, n, y) {
        function i(E) {
          if (E.type === 3) return null;
          if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var g = E.lower, _ = E.upper, T = E.lowerOpen, E = E.upperOpen;
          return g === void 0 ? _ === void 0 ? null : n.upperBound(_, !!E) : _ === void 0 ? n.lowerBound(g, !!T) : n.bound(g, _, !!T, !!E);
        }
        function u(C) {
          var g, _ = C.name;
          return { name: _, schema: C, mutate: function(T) {
            var E = T.trans, R = T.type, I = T.keys, P = T.values, k = T.range;
            return new Promise(function(H, J) {
              H = Me(H);
              var X = E.objectStore(_), z = X.keyPath == null, te = R === "put" || R === "add";
              if (!te && R !== "delete" && R !== "deleteRange") throw new Error("Invalid operation type: " + R);
              var ee, re = (I || P || { length: 1 }).length;
              if (I && P && I.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (re === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function be(ct) {
                ++Ke, Ln(ct);
              }
              var Oe = [], ve = [], Ke = 0;
              if (R === "deleteRange") {
                if (k.type === 4) return H({ numFailures: Ke, failures: ve, results: [], lastResult: void 0 });
                k.type === 3 ? Oe.push(ee = X.clear()) : Oe.push(ee = X.delete(i(k)));
              } else {
                var z = te ? z ? [P, I] : [P, null] : [I, null], me = z[0], ot = z[1];
                if (te) for (var it = 0; it < re; ++it) Oe.push(ee = ot && ot[it] !== void 0 ? X[R](me[it], ot[it]) : X[R](me[it])), ee.onerror = be;
                else for (it = 0; it < re; ++it) Oe.push(ee = X[R](me[it])), ee.onerror = be;
              }
              function xr(ct) {
                ct = ct.target.result, Oe.forEach(function(fn, bo) {
                  return fn.error != null && (ve[bo] = fn.error);
                }), H({ numFailures: Ke, failures: ve, results: R === "delete" ? I : Oe.map(function(fn) {
                  return fn.result;
                }), lastResult: ct });
              }
              ee.onerror = function(ct) {
                be(ct), xr(ct);
              }, ee.onsuccess = xr;
            });
          }, getMany: function(T) {
            var E = T.trans, R = T.keys;
            return new Promise(function(I, P) {
              I = Me(I);
              for (var k, H = E.objectStore(_), J = R.length, X = new Array(J), z = 0, te = 0, ee = function(Oe) {
                Oe = Oe.target, X[Oe._pos] = Oe.result, ++te === z && I(X);
              }, re = At(P), be = 0; be < J; ++be) R[be] != null && ((k = H.get(R[be]))._pos = be, k.onsuccess = ee, k.onerror = re, ++z);
              z === 0 && I(X);
            });
          }, get: function(T) {
            var E = T.trans, R = T.key;
            return new Promise(function(I, P) {
              I = Me(I);
              var k = E.objectStore(_).get(R);
              k.onsuccess = function(H) {
                return I(H.target.result);
              }, k.onerror = At(P);
            });
          }, query: (g = b, function(T) {
            return new Promise(function(E, R) {
              E = Me(E);
              var I, P, k, z = T.trans, H = T.values, J = T.limit, ee = T.query, X = J === 1 / 0 ? void 0 : J, te = ee.index, ee = ee.range, z = z.objectStore(_), te = te.isPrimaryKey ? z : z.index(te.name), ee = i(ee);
              if (J === 0) return E({ result: [] });
              g ? ((X = H ? te.getAll(ee, X) : te.getAllKeys(ee, X)).onsuccess = function(re) {
                return E({ result: re.target.result });
              }, X.onerror = At(R)) : (I = 0, P = !H && "openKeyCursor" in te ? te.openKeyCursor(ee) : te.openCursor(ee), k = [], P.onsuccess = function(re) {
                var be = P.result;
                return be ? (k.push(H ? be.value : be.primaryKey), ++I === J ? E({ result: k }) : void be.continue()) : E({ result: k });
              }, P.onerror = At(R));
            });
          }), openCursor: function(T) {
            var E = T.trans, R = T.values, I = T.query, P = T.reverse, k = T.unique;
            return new Promise(function(H, J) {
              H = Me(H);
              var te = I.index, X = I.range, z = E.objectStore(_), z = te.isPrimaryKey ? z : z.index(te.name), te = P ? k ? "prevunique" : "prev" : k ? "nextunique" : "next", ee = !R && "openKeyCursor" in z ? z.openKeyCursor(i(X), te) : z.openCursor(i(X), te);
              ee.onerror = At(J), ee.onsuccess = Me(function(re) {
                var be, Oe, ve, Ke, me = ee.result;
                me ? (me.___id = ++Fa, me.done = !1, be = me.continue.bind(me), Oe = (Oe = me.continuePrimaryKey) && Oe.bind(me), ve = me.advance.bind(me), Ke = function() {
                  throw new Error("Cursor not stopped");
                }, me.trans = E, me.stop = me.continue = me.continuePrimaryKey = me.advance = function() {
                  throw new Error("Cursor not started");
                }, me.fail = Me(J), me.next = function() {
                  var ot = this, it = 1;
                  return this.start(function() {
                    return it-- ? ot.continue() : ot.stop();
                  }).then(function() {
                    return ot;
                  });
                }, me.start = function(ot) {
                  function it() {
                    if (ee.result) try {
                      ot();
                    } catch (ct) {
                      me.fail(ct);
                    }
                    else me.done = !0, me.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, me.stop();
                  }
                  var xr = new Promise(function(ct, fn) {
                    ct = Me(ct), ee.onerror = At(fn), me.fail = fn, me.stop = function(bo) {
                      me.stop = me.continue = me.continuePrimaryKey = me.advance = Ke, ct(bo);
                    };
                  });
                  return ee.onsuccess = Me(function(ct) {
                    ee.onsuccess = it, it();
                  }), me.continue = be, me.continuePrimaryKey = Oe, me.advance = ve, it(), xr;
                }, H(me)) : H(null);
              }, J);
            });
          }, count: function(T) {
            var E = T.query, R = T.trans, I = E.index, P = E.range;
            return new Promise(function(k, H) {
              var J = R.objectStore(_), X = I.isPrimaryKey ? J : J.index(I.name), J = i(P), X = J ? X.count(J) : X.count();
              X.onsuccess = Me(function(z) {
                return k(z.target.result);
              }), X.onerror = At(H);
            });
          } };
        }
        var l, p, m, N = (p = y, m = ii((l = e).objectStoreNames), { schema: { name: l.name, tables: m.map(function(C) {
          return p.objectStore(C);
        }).map(function(C) {
          var g = C.keyPath, E = C.autoIncrement, _ = h(g), T = {}, E = { name: C.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: g == null, compound: _, keyPath: g, autoIncrement: E, unique: !0, extractKey: eo(g) }, indexes: ii(C.indexNames).map(function(R) {
            return C.index(R);
          }).map(function(k) {
            var I = k.name, P = k.unique, H = k.multiEntry, k = k.keyPath, H = { name: I, compound: h(k), keyPath: k, unique: P, multiEntry: H, extractKey: eo(k) };
            return T[Mn(k)] = H;
          }), getIndexByKeyPath: function(R) {
            return T[Mn(R)];
          } };
          return T[":id"] = E.primaryKey, g != null && (T[Mn(g)] = E.primaryKey), E;
        }) }, hasGetAll: 0 < m.length && "getAll" in p.objectStore(m[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = N.schema, b = N.hasGetAll, N = y.tables.map(u), v = {};
        return N.forEach(function(C) {
          return v[C.name] = C;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(C) {
          if (!v[C]) throw new Error("Table '".concat(C, "' not found"));
          return v[C];
        }, MIN_KEY: -1 / 0, MAX_KEY: Fn(n), schema: y };
      }
      function Ka(e, n, o, i) {
        var u = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (i = Ma(n, u, i), e.dbcore.reduce(function(l, p) {
          return p = p.create, s(s({}, l), p(l));
        }, i)) };
      }
      function fr(e, i) {
        var o = i.db, i = Ka(e._middlewares, o, e._deps, i);
        e.core = i.dbcore, e.tables.forEach(function(u) {
          var l = u.name;
          e.core.schema.tables.some(function(p) {
            return p.name === l;
          }) && (u.core = e.core.table(l), e[l] instanceof e.Table && (e[l].core = u.core));
        });
      }
      function dr(e, n, o, i) {
        o.forEach(function(u) {
          var l = i[u];
          n.forEach(function(p) {
            var m = function y(b, N) {
              return U(b, N) || (b = S(b)) && y(b, N);
            }(p, u);
            (!m || "value" in m && m.value === void 0) && (p === e.Transaction.prototype || p instanceof e.Transaction ? Y(p, u, { get: function() {
              return this.table(u);
            }, set: function(y) {
              B(this, u, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : p[u] = new e.Table(u, l));
          });
        });
      }
      function to(e, n) {
        n.forEach(function(o) {
          for (var i in o) o[i] instanceof e.Table && delete o[i];
        });
      }
      function Ba(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function $a(e, n, o, i) {
        var u = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !u.$meta && (u.$meta = Zr("$meta", si("")[0], []), e._storeNames.push("$meta"));
        var l = e._createTransaction("readwrite", e._storeNames, u);
        l.create(o), l._completion.catch(i);
        var p = l._reject.bind(l), m = ie.transless || ie;
        Ut(function() {
          return ie.trans = l, ie.transless = m, n !== 0 ? (fr(e, o), b = n, ((y = l).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(N) {
            return N ?? b;
          }) : ne.resolve(b)).then(function(N) {
            return C = N, g = l, _ = o, T = [], N = (v = e)._versions, E = v._dbSchema = hr(0, v.idbdb, _), (N = N.filter(function(R) {
              return R._cfg.version >= C;
            })).length !== 0 ? (N.forEach(function(R) {
              T.push(function() {
                var I = E, P = R._cfg.dbschema;
                mr(v, I, _), mr(v, P, _), E = v._dbSchema = P;
                var k = no(I, P);
                k.add.forEach(function(te) {
                  ro(_, te[0], te[1].primKey, te[1].indexes);
                }), k.change.forEach(function(te) {
                  if (te.recreate) throw new $.Upgrade("Not yet support for changing primary key");
                  var ee = _.objectStore(te.name);
                  te.add.forEach(function(re) {
                    return pr(ee, re);
                  }), te.change.forEach(function(re) {
                    ee.deleteIndex(re.name), pr(ee, re);
                  }), te.del.forEach(function(re) {
                    return ee.deleteIndex(re);
                  });
                });
                var H = R._cfg.contentUpgrade;
                if (H && R._cfg.version > C) {
                  fr(v, _), g._memoizedTables = {};
                  var J = Ne(P);
                  k.del.forEach(function(te) {
                    J[te] = I[te];
                  }), to(v, [v.Transaction.prototype]), dr(v, [v.Transaction.prototype], c(J), J), g.schema = J;
                  var X, z = Et(H);
                  return z && wn(), k = ne.follow(function() {
                    var te;
                    (X = H(g)) && z && (te = Vt.bind(null, null), X.then(te, te));
                  }), X && typeof X.then == "function" ? ne.resolve(X) : k.then(function() {
                    return X;
                  });
                }
              }), T.push(function(I) {
                var P, k, H = R._cfg.dbschema;
                P = H, k = I, [].slice.call(k.db.objectStoreNames).forEach(function(J) {
                  return P[J] == null && k.db.deleteObjectStore(J);
                }), to(v, [v.Transaction.prototype]), dr(v, [v.Transaction.prototype], v._storeNames, v._dbSchema), g.schema = v._dbSchema;
              }), T.push(function(I) {
                v.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(v.idbdb.version / 10) === R._cfg.version ? (v.idbdb.deleteObjectStore("$meta"), delete v._dbSchema.$meta, v._storeNames = v._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : I.objectStore("$meta").put(R._cfg.version, "version"));
              });
            }), function R() {
              return T.length ? ne.resolve(T.shift()(g.idbtrans)).then(R) : ne.resolve();
            }().then(function() {
              ai(E, _);
            })) : ne.resolve();
            var v, C, g, _, T, E;
          }).catch(p)) : (c(u).forEach(function(N) {
            ro(o, N, u[N].primKey, u[N].indexes);
          }), fr(e, o), void ne.follow(function() {
            return e.on.populate.fire(l);
          }).catch(p));
          var y, b;
        });
      }
      function qa(e, n) {
        ai(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = hr(0, e.idbdb, n);
        mr(e, e._dbSchema, n);
        for (var i = 0, u = no(o, e._dbSchema).change; i < u.length; i++) {
          var l = function(p) {
            if (p.change.length || p.recreate) return console.warn("Unable to patch indexes of table ".concat(p.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var m = n.objectStore(p.name);
            p.add.forEach(function(y) {
              le && console.debug("Dexie upgrade patch: Creating missing index ".concat(p.name, ".").concat(y.src)), pr(m, y);
            });
          }(u[i]);
          if (typeof l == "object") return l.value;
        }
      }
      function no(e, n) {
        var o, i = { del: [], add: [], change: [] };
        for (o in e) n[o] || i.del.push(o);
        for (o in n) {
          var u = e[o], l = n[o];
          if (u) {
            var p = { name: o, def: l, recreate: !1, del: [], add: [], change: [] };
            if ("" + (u.primKey.keyPath || "") != "" + (l.primKey.keyPath || "") || u.primKey.auto !== l.primKey.auto) p.recreate = !0, i.change.push(p);
            else {
              var m = u.idxByName, y = l.idxByName, b = void 0;
              for (b in m) y[b] || p.del.push(b);
              for (b in y) {
                var N = m[b], v = y[b];
                N ? N.src !== v.src && p.change.push(v) : p.add.push(v);
              }
              (0 < p.del.length || 0 < p.add.length || 0 < p.change.length) && i.change.push(p);
            }
          } else i.add.push([o, l]);
        }
        return i;
      }
      function ro(e, n, o, i) {
        var u = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return i.forEach(function(l) {
          return pr(u, l);
        }), u;
      }
      function ai(e, n) {
        c(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (le && console.debug("Dexie: Creating missing table", o), ro(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function pr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function hr(e, n, o) {
        var i = {};
        return F(n.objectStoreNames, 0).forEach(function(u) {
          for (var l = o.objectStore(u), p = Jr(oi(b = l.keyPath), b || "", !0, !1, !!l.autoIncrement, b && typeof b != "string", !0), m = [], y = 0; y < l.indexNames.length; ++y) {
            var N = l.index(l.indexNames[y]), b = N.keyPath, N = Jr(N.name, b, !!N.unique, !!N.multiEntry, !1, b && typeof b != "string", !1);
            m.push(N);
          }
          i[u] = Zr(u, p, m);
        }), i;
      }
      function mr(e, n, o) {
        for (var i = o.db.objectStoreNames, u = 0; u < i.length; ++u) {
          var l = i[u], p = o.objectStore(l);
          e._hasGetAll = "getAll" in p;
          for (var m = 0; m < p.indexNames.length; ++m) {
            var y = p.indexNames[m], b = p.index(y).keyPath, N = typeof b == "string" ? b : "[" + F(b).join("+") + "]";
            !n[l] || (b = n[l].idxByName[N]) && (b.name = y, delete n[l].idxByName[N], n[l].idxByName[y] = b);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function si(e) {
        return e.split(",").map(function(n, o) {
          var l = n.split(":"), i = (u = l[1]) === null || u === void 0 ? void 0 : u.trim(), u = (n = l[0].trim()).replace(/([&*]|\+\+)/g, ""), l = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
          return Jr(u, l || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), h(l), o === 0, i);
        });
      }
      var Ua = (En.prototype._createTableSchema = Zr, En.prototype._parseIndexSyntax = si, En.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        c(e).forEach(function(i) {
          if (e[i] !== null) {
            var u = o._parseIndexSyntax(e[i]), l = u.shift();
            if (!l) throw new $.Schema("Invalid schema for table " + i + ": " + e[i]);
            if (l.unique = !0, l.multi) throw new $.Schema("Primary key cannot be multiEntry*");
            u.forEach(function(p) {
              if (p.auto) throw new $.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!p.keyPath) throw new $.Schema("Index must have a name and cannot be an empty string");
            }), u = o._createTableSchema(i, l, u), n[i] = u;
          }
        });
      }, En.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? w(this._cfg.storesSource, o) : o;
        var o = n._versions, i = {}, u = {};
        return o.forEach(function(l) {
          w(i, l._cfg.storesSource), u = l._cfg.dbschema = {}, l._parseStoresSpec(i, u);
        }), n._dbSchema = u, to(n, [n._allTables, n, n.Transaction.prototype]), dr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], c(u), u), n._storeNames = c(u), this;
      }, En.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = he(this._cfg.contentUpgrade || A, e), this;
      }, En);
      function En() {
      }
      function oo(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new jt(ir, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function ao(e) {
        return Ut(function() {
          return ie.letThrough = !0, e();
        });
      }
      function so(e) {
        return !("from" in e);
      }
      var rt = function(e, n) {
        if (!this) {
          var o = new rt();
          return e && "d" in e && w(o, e), o;
        }
        w(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Kn(e, n, o) {
        var i = Te(n, o);
        if (!isNaN(i)) {
          if (0 < i) throw RangeError();
          if (so(e)) return w(e, { from: n, to: o, d: 1 });
          var u = e.l, i = e.r;
          if (Te(o, e.from) < 0) return u ? Kn(u, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, li(e);
          if (0 < Te(n, e.to)) return i ? Kn(i, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, li(e);
          Te(n, e.from) < 0 && (e.from = n, e.l = null, e.d = i ? i.d + 1 : 1), 0 < Te(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, u && !e.l && Bn(e, u), i && o && Bn(e, i);
        }
      }
      function Bn(e, n) {
        so(n) || function o(i, y) {
          var l = y.from, p = y.to, m = y.l, y = y.r;
          Kn(i, l, p), m && o(i, m), y && o(i, y);
        }(e, n);
      }
      function ui(e, n) {
        var o = vr(n), i = o.next();
        if (i.done) return !1;
        for (var u = i.value, l = vr(e), p = l.next(u.from), m = p.value; !i.done && !p.done; ) {
          if (Te(m.from, u.to) <= 0 && 0 <= Te(m.to, u.from)) return !0;
          Te(u.from, m.from) < 0 ? u = (i = o.next(m.from)).value : m = (p = l.next(u.from)).value;
        }
        return !1;
      }
      function vr(e) {
        var n = so(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var i = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, i) for (; n.n.l && Te(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !i || Te(o, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function li(e) {
        var n, o, i = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), u = 1 < i ? "r" : i < -1 ? "l" : "";
        u && (n = u == "r" ? "l" : "r", o = s({}, e), i = e[u], e.from = i.from, e.to = i.to, e[u] = i[u], o[u] = i[n], (e[n] = o).d = ci(o)), e.d = ci(e);
      }
      function ci(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function yr(e, n) {
        return c(n).forEach(function(o) {
          e[o] ? Bn(e[o], n[o]) : e[o] = function i(u) {
            var l, p, m = {};
            for (l in u) L(u, l) && (p = u[l], m[l] = !p || typeof p != "object" || nt.has(p.constructor) ? p : i(p));
            return m;
          }(n[o]);
        }), e;
      }
      function uo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && ui(n[o], e[o]);
        });
      }
      M(rt.prototype, ((xt = { add: function(e) {
        return Bn(this, e), this;
      }, addKey: function(e) {
        return Kn(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return Kn(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = vr(this).next(e).value;
        return n && Te(n.from, e) <= 0 && 0 <= Te(n.to, e);
      } })[ut] = function() {
        return vr(this);
      }, xt));
      var ln = {}, lo = {}, co = !1;
      function gr(e) {
        yr(lo, e), co || (co = !0, setTimeout(function() {
          co = !1, fo(lo, !(lo = {}));
        }, 0));
      }
      function fo(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var i = 0, u = Object.values(ln); i < u.length; i++) fi(p = u[i], e, o, n);
        else for (var l in e) {
          var p, m = /^idb\:\/\/(.*)\/(.*)\//.exec(l);
          m && (l = m[1], m = m[2], (p = ln["idb://".concat(l, "/").concat(m)]) && fi(p, e, o, n));
        }
        o.forEach(function(y) {
          return y();
        });
      }
      function fi(e, n, o, i) {
        for (var u = [], l = 0, p = Object.entries(e.queries.query); l < p.length; l++) {
          for (var m = p[l], y = m[0], b = [], N = 0, v = m[1]; N < v.length; N++) {
            var C = v[N];
            uo(n, C.obsSet) ? C.subscribers.forEach(function(E) {
              return o.add(E);
            }) : i && b.push(C);
          }
          i && u.push([y, b]);
        }
        if (i) for (var g = 0, _ = u; g < _.length; g++) {
          var T = _[g], y = T[0], b = T[1];
          e.queries.query[y] = b;
        }
      }
      function Va(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? Ue(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var i = n.openCanceller, u = Math.round(10 * e.verno), l = !1;
        function p() {
          if (n.openCanceller !== i) throw new $.DatabaseClosed("db.open() was cancelled");
        }
        function m() {
          return new ne(function(C, g) {
            if (p(), !o) throw new $.MissingAPI();
            var _ = e.name, T = n.autoSchema || !u ? o.open(_) : o.open(_, u);
            if (!T) throw new $.MissingAPI();
            T.onerror = At(g), T.onblocked = Me(e._fireOnBlocked), T.onupgradeneeded = Me(function(E) {
              var R;
              N = T.transaction, n.autoSchema && !e._options.allowEmptyDB ? (T.onerror = Ln, N.abort(), T.result.close(), (R = o.deleteDatabase(_)).onsuccess = R.onerror = Me(function() {
                g(new $.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
              })) : (N.onerror = At(g), E = E.oldVersion > Math.pow(2, 62) ? 0 : E.oldVersion, v = E < 1, e.idbdb = T.result, l && qa(e, N), $a(e, E / 10, N, g));
            }, g), T.onsuccess = Me(function() {
              N = null;
              var E, R, I, P, k, H = e.idbdb = T.result, J = F(H.objectStoreNames);
              if (0 < J.length) try {
                var X = H.transaction((P = J).length === 1 ? P[0] : P, "readonly");
                if (n.autoSchema) R = H, I = X, (E = e).verno = R.version / 10, I = E._dbSchema = hr(0, R, I), E._storeNames = F(R.objectStoreNames, 0), dr(E, [E._allTables], c(I), I);
                else if (mr(e, e._dbSchema, X), ((k = no(hr(0, (k = e).idbdb, X), k._dbSchema)).add.length || k.change.some(function(z) {
                  return z.add.length || z.change.length;
                })) && !l) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), u = H.version + 1, l = !0, C(m());
                fr(e, X);
              } catch {
              }
              _n.push(e), H.onversionchange = Me(function(z) {
                n.vcFired = !0, e.on("versionchange").fire(z);
              }), H.onclose = Me(function(z) {
                e.on("close").fire(z);
              }), v && (k = e._deps, X = _, H = k.indexedDB, k = k.IDBKeyRange, io(H) || X === ir || oo(H, k).put({ name: X }).catch(A)), C();
            }, g);
          }).catch(function(C) {
            switch (C?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), m();
                break;
              case "VersionError":
                if (0 < u) return u = 0, m();
            }
            return ne.reject(C);
          });
        }
        var y, b = n.dbReadyResolve, N = null, v = !1;
        return ne.race([i, (typeof navigator > "u" ? ne.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(C) {
          function g() {
            return indexedDB.databases().finally(C);
          }
          y = setInterval(g, 100), g();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(m)]).then(function() {
          return p(), n.onReadyBeingFired = [], ne.resolve(ao(function() {
            return e.on.ready.fire(e.vip);
          })).then(function C() {
            if (0 < n.onReadyBeingFired.length) {
              var g = n.onReadyBeingFired.reduce(he, A);
              return n.onReadyBeingFired = [], ne.resolve(ao(function() {
                return g(e.vip);
              })).then(C);
            }
          });
        }).finally(function() {
          n.openCanceller === i && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(C) {
          n.dbOpenError = C;
          try {
            N && N.abort();
          } catch {
          }
          return i === n.openCanceller && e._close(), Ue(C);
        }).finally(function() {
          n.openComplete = !0, b();
        }).then(function() {
          var C;
          return v && (C = {}, e.tables.forEach(function(g) {
            g.schema.indexes.forEach(function(_) {
              _.name && (C["idb://".concat(e.name, "/").concat(g.name, "/").concat(_.name)] = new rt(-1 / 0, [[[]]]));
            }), C["idb://".concat(e.name, "/").concat(g.name, "/")] = C["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new rt(-1 / 0, [[[]]]);
          }), Ht(jn).fire(C), fo(C, !0)), e;
        });
      }
      function po(e) {
        function n(l) {
          return e.next(l);
        }
        var o = u(n), i = u(function(l) {
          return e.throw(l);
        });
        function u(l) {
          return function(y) {
            var m = l(y), y = m.value;
            return m.done ? y : y && typeof y.then == "function" ? y.then(o, i) : h(y) ? Promise.all(y).then(o, i) : o(y);
          };
        }
        return u(n)();
      }
      function br(e, n, o) {
        for (var i = h(e) ? e.slice() : [e], u = 0; u < o; ++u) i.push(n);
        return i;
      }
      var Wa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), i = o.schema, u = {}, l = [];
          function p(v, C, g) {
            var _ = Mn(v), T = u[_] = u[_] || [], E = v == null ? 0 : typeof v == "string" ? 1 : v.length, R = 0 < C, R = s(s({}, g), { name: R ? "".concat(_, "(virtual-from:").concat(g.name, ")") : g.name, lowLevelIndex: g, isVirtual: R, keyTail: C, keyLength: E, extractKey: eo(v), unique: !R && g.unique });
            return T.push(R), R.isPrimaryKey || l.push(R), 1 < E && p(E === 2 ? v[0] : v.slice(0, E - 1), C + 1, g), T.sort(function(I, P) {
              return I.keyTail - P.keyTail;
            }), R;
          }
          n = p(i.primaryKey.keyPath, 0, i.primaryKey), u[":id"] = [n];
          for (var m = 0, y = i.indexes; m < y.length; m++) {
            var b = y[m];
            p(b.keyPath, 0, b);
          }
          function N(v) {
            var C, g = v.query.index;
            return g.isVirtual ? s(s({}, v), { query: { index: g.lowLevelIndex, range: (C = v.query.range, g = g.keyTail, { type: C.type === 1 ? 2 : C.type, lower: br(C.lower, C.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g), lowerOpen: !0, upper: br(C.upper, C.upperOpen ? e.MIN_KEY : e.MAX_KEY, g), upperOpen: !0 }) } }) : v;
          }
          return s(s({}, o), { schema: s(s({}, i), { primaryKey: n, indexes: l, getIndexByKeyPath: function(v) {
            return (v = u[Mn(v)]) && v[0];
          } }), count: function(v) {
            return o.count(N(v));
          }, query: function(v) {
            return o.query(N(v));
          }, openCursor: function(v) {
            var C = v.query.index, g = C.keyTail, _ = C.isVirtual, T = C.keyLength;
            return _ ? o.openCursor(N(v)).then(function(R) {
              return R && E(R);
            }) : o.openCursor(v);
            function E(R) {
              return Object.create(R, { continue: { value: function(I) {
                I != null ? R.continue(br(I, v.reverse ? e.MAX_KEY : e.MIN_KEY, g)) : v.unique ? R.continue(R.key.slice(0, T).concat(v.reverse ? e.MIN_KEY : e.MAX_KEY, g)) : R.continue();
              } }, continuePrimaryKey: { value: function(I, P) {
                R.continuePrimaryKey(br(I, e.MAX_KEY, g), P);
              } }, primaryKey: { get: function() {
                return R.primaryKey;
              } }, key: { get: function() {
                var I = R.key;
                return T === 1 ? I[0] : I.slice(0, T);
              } }, value: { get: function() {
                return R.value;
              } } });
            }
          } });
        } });
      } };
      function ho(e, n, o, i) {
        return o = o || {}, i = i || "", c(e).forEach(function(u) {
          var l, p, m;
          L(n, u) ? (l = e[u], p = n[u], typeof l == "object" && typeof p == "object" && l && p ? (m = Mt(l)) !== Mt(p) ? o[i + u] = n[u] : m === "Object" ? ho(l, p, o, i + u + ".") : l !== p && (o[i + u] = n[u]) : l !== p && (o[i + u] = n[u])) : o[i + u] = void 0;
        }), c(n).forEach(function(u) {
          L(e, u) || (o[i + u] = n[u]);
        }), o;
      }
      function mo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var Ga = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), i = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(u) {
            var l = ie.trans, p = l.table(n).hook, m = p.deleting, y = p.creating, b = p.updating;
            switch (u.type) {
              case "add":
                if (y.fire === A) break;
                return l._promise("readwrite", function() {
                  return N(u);
                }, !0);
              case "put":
                if (y.fire === A && b.fire === A) break;
                return l._promise("readwrite", function() {
                  return N(u);
                }, !0);
              case "delete":
                if (m.fire === A) break;
                return l._promise("readwrite", function() {
                  return N(u);
                }, !0);
              case "deleteRange":
                if (m.fire === A) break;
                return l._promise("readwrite", function() {
                  return function v(C, g, _) {
                    return o.query({ trans: C, values: !1, query: { index: i, range: g }, limit: _ }).then(function(T) {
                      var E = T.result;
                      return N({ type: "delete", keys: E, trans: C }).then(function(R) {
                        return 0 < R.numFailures ? Promise.reject(R.failures[0]) : E.length < _ ? { failures: [], numFailures: 0, lastResult: void 0 } : v(C, s(s({}, g), { lower: E[E.length - 1], lowerOpen: !0 }), _);
                      });
                    });
                  }(u.trans, u.range, 1e4);
                }, !0);
            }
            return o.mutate(u);
            function N(v) {
              var C, g, _, T = ie.trans, E = v.keys || mo(i, v);
              if (!E) throw new Error("Keys missing");
              return (v = v.type === "add" || v.type === "put" ? s(s({}, v), { keys: E }) : s({}, v)).type !== "delete" && (v.values = f([], v.values)), v.keys && (v.keys = f([], v.keys)), C = o, _ = E, ((g = v).type === "add" ? Promise.resolve([]) : C.getMany({ trans: g.trans, keys: _, cache: "immutable" })).then(function(R) {
                var I = E.map(function(P, k) {
                  var H, J, X, z = R[k], te = { onerror: null, onsuccess: null };
                  return v.type === "delete" ? m.fire.call(te, P, z, T) : v.type === "add" || z === void 0 ? (H = y.fire.call(te, P, v.values[k], T), P == null && H != null && (v.keys[k] = P = H, i.outbound || ce(v.values[k], i.keyPath, P))) : (H = ho(z, v.values[k]), (J = b.fire.call(te, H, P, z, T)) && (X = v.values[k], Object.keys(J).forEach(function(ee) {
                    L(X, ee) ? X[ee] = J[ee] : ce(X, ee, J[ee]);
                  }))), te;
                });
                return o.mutate(v).then(function(P) {
                  for (var k = P.failures, H = P.results, J = P.numFailures, P = P.lastResult, X = 0; X < E.length; ++X) {
                    var z = (H || E)[X], te = I[X];
                    z == null ? te.onerror && te.onerror(k[X]) : te.onsuccess && te.onsuccess(v.type === "put" && R[X] ? v.values[X] : z);
                  }
                  return { failures: k, results: H, numFailures: J, lastResult: P };
                }).catch(function(P) {
                  return I.forEach(function(k) {
                    return k.onerror && k.onerror(P);
                  }), Promise.reject(P);
                });
              });
            }
          } });
        } });
      } };
      function di(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var i = [], u = 0, l = 0; u < n.keys.length && l < e.length; ++u) Te(n.keys[u], e[l]) === 0 && (i.push(o ? ft(n.values[u]) : n.values[u]), ++l);
          return i.length === e.length ? i : null;
        } catch {
          return null;
        }
      }
      var Ha = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return s(s({}, o), { getMany: function(i) {
            if (!i.cache) return o.getMany(i);
            var u = di(i.keys, i.trans._cache, i.cache === "clone");
            return u ? ne.resolve(u) : o.getMany(i).then(function(l) {
              return i.trans._cache = { keys: i.keys, values: i.cache === "clone" ? ft(l) : l }, l;
            });
          }, mutate: function(i) {
            return i.type !== "add" && (i.trans._cache = null), o.mutate(i);
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
      var Ya = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new rt(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(i, u, l) {
          if (ie.subscr && u !== "readonly") throw new $.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ie.querier));
          return e.transaction(i, u, l);
        }, table: function(i) {
          var u = e.table(i), l = u.schema, p = l.primaryKey, v = l.indexes, m = p.extractKey, y = p.outbound, b = p.autoIncrement && v.filter(function(g) {
            return g.compound && g.keyPath.includes(p.keyPath);
          }), N = s(s({}, u), { mutate: function(g) {
            function _(ee) {
              return ee = "idb://".concat(n, "/").concat(i, "/").concat(ee), P[ee] || (P[ee] = new rt());
            }
            var T, E, R, I = g.trans, P = g.mutatedParts || (g.mutatedParts = {}), k = _(""), H = _(":dels"), J = g.type, te = g.type === "deleteRange" ? [g.range] : g.type === "delete" ? [g.keys] : g.values.length < 50 ? [mo(p, g).filter(function(ee) {
              return ee;
            }), g.values] : [], X = te[0], z = te[1], te = g.trans._cache;
            return h(X) ? (k.addKeys(X), (te = J === "delete" || X.length === z.length ? di(X, te) : null) || H.addKeys(X), (te || z) && (T = _, E = te, R = z, l.indexes.forEach(function(ee) {
              var re = T(ee.name || "");
              function be(ve) {
                return ve != null ? ee.extractKey(ve) : null;
              }
              function Oe(ve) {
                return ee.multiEntry && h(ve) ? ve.forEach(function(Ke) {
                  return re.addKey(Ke);
                }) : re.addKey(ve);
              }
              (E || R).forEach(function(ve, ot) {
                var me = E && be(E[ot]), ot = R && be(R[ot]);
                Te(me, ot) !== 0 && (me != null && Oe(me), ot != null && Oe(ot));
              });
            }))) : X ? (z = { from: (z = X.lower) !== null && z !== void 0 ? z : e.MIN_KEY, to: (z = X.upper) !== null && z !== void 0 ? z : e.MAX_KEY }, H.add(z), k.add(z)) : (k.add(o), H.add(o), l.indexes.forEach(function(ee) {
              return _(ee.name).add(o);
            })), u.mutate(g).then(function(ee) {
              return !X || g.type !== "add" && g.type !== "put" || (k.addKeys(ee.results), b && b.forEach(function(re) {
                for (var be = g.values.map(function(me) {
                  return re.extractKey(me);
                }), Oe = re.keyPath.findIndex(function(me) {
                  return me === p.keyPath;
                }), ve = 0, Ke = ee.results.length; ve < Ke; ++ve) be[ve][Oe] = ee.results[ve];
                _(re.name).addKeys(be);
              })), I.mutatedParts = yr(I.mutatedParts || {}, P), ee;
            });
          } }), v = function(_) {
            var T = _.query, _ = T.index, T = T.range;
            return [_, new rt((_ = T.lower) !== null && _ !== void 0 ? _ : e.MIN_KEY, (T = T.upper) !== null && T !== void 0 ? T : e.MAX_KEY)];
          }, C = { get: function(g) {
            return [p, new rt(g.key)];
          }, getMany: function(g) {
            return [p, new rt().addKeys(g.keys)];
          }, count: v, query: v, openCursor: v };
          return c(C).forEach(function(g) {
            N[g] = function(_) {
              var T = ie.subscr, E = !!T, R = pi(ie, u) && hi(g, _) ? _.obsSet = {} : T;
              if (E) {
                var I = function(z) {
                  return z = "idb://".concat(n, "/").concat(i, "/").concat(z), R[z] || (R[z] = new rt());
                }, P = I(""), k = I(":dels"), T = C[g](_), E = T[0], T = T[1];
                if ((g === "query" && E.isPrimaryKey && !_.values ? k : I(E.name || "")).add(T), !E.isPrimaryKey) {
                  if (g !== "count") {
                    var H = g === "query" && y && _.values && u.query(s(s({}, _), { values: !1 }));
                    return u[g].apply(this, arguments).then(function(z) {
                      if (g === "query") {
                        if (y && _.values) return H.then(function(be) {
                          return be = be.result, P.addKeys(be), z;
                        });
                        var te = _.values ? z.result.map(m) : z.result;
                        (_.values ? P : k).addKeys(te);
                      } else if (g === "openCursor") {
                        var ee = z, re = _.values;
                        return ee && Object.create(ee, { key: { get: function() {
                          return k.addKey(ee.primaryKey), ee.key;
                        } }, primaryKey: { get: function() {
                          var be = ee.primaryKey;
                          return k.addKey(be), be;
                        } }, value: { get: function() {
                          return re && P.addKey(ee.primaryKey), ee.value;
                        } } });
                      }
                      return z;
                    });
                  }
                  k.add(o);
                }
              }
              return u[g].apply(this, arguments);
            };
          }), N;
        } });
      } };
      function mi(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === i ? null : (n = s({}, n), h(n.keys) && (n.keys = n.keys.filter(function(u, l) {
          return !(l in o.failures);
        })), "values" in n && h(n.values) && (n.values = n.values.filter(function(u, l) {
          return !(l in o.failures);
        })), n);
      }
      function vo(e, n) {
        return o = e, ((i = n).lower === void 0 || (i.lowerOpen ? 0 < Te(o, i.lower) : 0 <= Te(o, i.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Te(e, n.upper) < 0 : Te(e, n.upper) <= 0));
        var o, i;
      }
      function vi(e, n, C, i, u, l) {
        if (!C || C.length === 0) return e;
        var p = n.query.index, m = p.multiEntry, y = n.query.range, b = i.schema.primaryKey.extractKey, N = p.extractKey, v = (p.lowLevelIndex || p).extractKey, C = C.reduce(function(g, _) {
          var T = g, E = [];
          if (_.type === "add" || _.type === "put") for (var R = new rt(), I = _.values.length - 1; 0 <= I; --I) {
            var P, k = _.values[I], H = b(k);
            R.hasKey(H) || (P = N(k), (m && h(P) ? P.some(function(ee) {
              return vo(ee, y);
            }) : vo(P, y)) && (R.addKey(H), E.push(k)));
          }
          switch (_.type) {
            case "add":
              var J = new rt().addKeys(n.values ? g.map(function(re) {
                return b(re);
              }) : g), T = g.concat(n.values ? E.filter(function(re) {
                return re = b(re), !J.hasKey(re) && (J.addKey(re), !0);
              }) : E.map(function(re) {
                return b(re);
              }).filter(function(re) {
                return !J.hasKey(re) && (J.addKey(re), !0);
              }));
              break;
            case "put":
              var X = new rt().addKeys(_.values.map(function(re) {
                return b(re);
              }));
              T = g.filter(function(re) {
                return !X.hasKey(n.values ? b(re) : re);
              }).concat(n.values ? E : E.map(function(re) {
                return b(re);
              }));
              break;
            case "delete":
              var z = new rt().addKeys(_.keys);
              T = g.filter(function(re) {
                return !z.hasKey(n.values ? b(re) : re);
              });
              break;
            case "deleteRange":
              var te = _.range;
              T = g.filter(function(re) {
                return !vo(b(re), te);
              });
          }
          return T;
        }, e);
        return C === e ? e : (C.sort(function(g, _) {
          return Te(v(g), v(_)) || Te(b(g), b(_));
        }), n.limit && n.limit < 1 / 0 && (C.length > n.limit ? C.length = n.limit : e.length === n.limit && C.length < n.limit && (u.dirty = !0)), l ? Object.freeze(C) : C);
      }
      function yi(e, n) {
        return Te(e.lower, n.lower) === 0 && Te(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Xa(e, n) {
        return function(o, i, u, l) {
          if (o === void 0) return i !== void 0 ? -1 : 0;
          if (i === void 0) return 1;
          if ((i = Te(o, i)) === 0) {
            if (u && l) return 0;
            if (u) return 1;
            if (l) return -1;
          }
          return i;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, i, u, l) {
          if (o === void 0) return i !== void 0 ? 1 : 0;
          if (i === void 0) return -1;
          if ((i = Te(o, i)) === 0) {
            if (u && l) return 0;
            if (u) return -1;
            if (l) return 1;
          }
          return i;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function Qa(e, n, o, i) {
        e.subscribers.add(o), i.addEventListener("abort", function() {
          var u, l;
          e.subscribers.delete(o), e.subscribers.size === 0 && (u = e, l = n, setTimeout(function() {
            u.subscribers.size === 0 && $e(l, u);
          }, 3e3));
        });
      }
      var za = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return s(s({}, e), { transaction: function(o, i, u) {
          var l, p, m = e.transaction(o, i, u);
          return i === "readwrite" && (p = (l = new AbortController()).signal, u = function(y) {
            return function() {
              if (l.abort(), i === "readwrite") {
                for (var b = /* @__PURE__ */ new Set(), N = 0, v = o; N < v.length; N++) {
                  var C = v[N], g = ln["idb://".concat(n, "/").concat(C)];
                  if (g) {
                    var _ = e.table(C), T = g.optimisticOps.filter(function(re) {
                      return re.trans === m;
                    });
                    if (m._explicit && y && m.mutatedParts) for (var E = 0, R = Object.values(g.queries.query); E < R.length; E++) for (var I = 0, P = (J = R[E]).slice(); I < P.length; I++) uo((X = P[I]).obsSet, m.mutatedParts) && ($e(J, X), X.subscribers.forEach(function(re) {
                      return b.add(re);
                    }));
                    else if (0 < T.length) {
                      g.optimisticOps = g.optimisticOps.filter(function(re) {
                        return re.trans !== m;
                      });
                      for (var k = 0, H = Object.values(g.queries.query); k < H.length; k++) for (var J, X, z, te = 0, ee = (J = H[k]).slice(); te < ee.length; te++) (X = ee[te]).res != null && m.mutatedParts && (y && !X.dirty ? (z = Object.isFrozen(X.res), z = vi(X.res, X.req, T, _, X, z), X.dirty ? ($e(J, X), X.subscribers.forEach(function(re) {
                        return b.add(re);
                      })) : z !== X.res && (X.res = z, X.promise = ne.resolve({ result: z }))) : (X.dirty && $e(J, X), X.subscribers.forEach(function(re) {
                        return b.add(re);
                      })));
                    }
                  }
                }
                b.forEach(function(re) {
                  return re();
                });
              }
            };
          }, m.addEventListener("abort", u(!1), { signal: p }), m.addEventListener("error", u(!1), { signal: p }), m.addEventListener("complete", u(!0), { signal: p })), m;
        }, table: function(o) {
          var i = e.table(o), u = i.schema.primaryKey;
          return s(s({}, i), { mutate: function(l) {
            var p = ie.trans;
            if (u.outbound || p.db._options.cache === "disabled" || p.explicit || p.idbtrans.mode !== "readwrite") return i.mutate(l);
            var m = ln["idb://".concat(n, "/").concat(o)];
            return m ? (p = i.mutate(l), l.type !== "add" && l.type !== "put" || !(50 <= l.values.length || mo(u, l).some(function(y) {
              return y == null;
            })) ? (m.optimisticOps.push(l), l.mutatedParts && gr(l.mutatedParts), p.then(function(y) {
              0 < y.numFailures && ($e(m.optimisticOps, l), (y = mi(0, l, y)) && m.optimisticOps.push(y), l.mutatedParts && gr(l.mutatedParts));
            }), p.catch(function() {
              $e(m.optimisticOps, l), l.mutatedParts && gr(l.mutatedParts);
            })) : p.then(function(y) {
              var b = mi(0, s(s({}, l), { values: l.values.map(function(N, v) {
                var C;
                return y.failures[v] ? N : (N = (C = u.keyPath) !== null && C !== void 0 && C.includes(".") ? ft(N) : s({}, N), ce(N, u.keyPath, y.results[v]), N);
              }) }), y);
              m.optimisticOps.push(b), queueMicrotask(function() {
                return l.mutatedParts && gr(l.mutatedParts);
              });
            }), p) : i.mutate(l);
          }, query: function(l) {
            if (!pi(ie, i) || !hi("query", l)) return i.query(l);
            var p = ((b = ie.trans) === null || b === void 0 ? void 0 : b.db._options.cache) === "immutable", v = ie, m = v.requery, y = v.signal, b = function(_, T, E, R) {
              var I = ln["idb://".concat(_, "/").concat(T)];
              if (!I) return [];
              if (!(T = I.queries[E])) return [null, !1, I, null];
              var P = T[(R.query ? R.query.index.name : null) || ""];
              if (!P) return [null, !1, I, null];
              switch (E) {
                case "query":
                  var k = P.find(function(H) {
                    return H.req.limit === R.limit && H.req.values === R.values && yi(H.req.query.range, R.query.range);
                  });
                  return k ? [k, !0, I, P] : [P.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= R.limit && (!R.values || H.req.values) && Xa(H.req.query.range, R.query.range);
                  }), !1, I, P];
                case "count":
                  return k = P.find(function(H) {
                    return yi(H.req.query.range, R.query.range);
                  }), [k, !!k, I, P];
              }
            }(n, o, "query", l), N = b[0], v = b[1], C = b[2], g = b[3];
            return N && v ? N.obsSet = l.obsSet : (v = i.query(l).then(function(_) {
              var T = _.result;
              if (N && (N.res = T), p) {
                for (var E = 0, R = T.length; E < R; ++E) Object.freeze(T[E]);
                Object.freeze(T);
              } else _.result = ft(T);
              return _;
            }).catch(function(_) {
              return g && N && $e(g, N), Promise.reject(_);
            }), N = { obsSet: l.obsSet, promise: v, subscribers: /* @__PURE__ */ new Set(), type: "query", req: l, dirty: !1 }, g ? g.push(N) : (g = [N], (C = C || (ln["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[l.query.index.name || ""] = g)), Qa(N, g, m, y), N.promise.then(function(_) {
              return { result: vi(_.result, l, C?.optimisticOps, i, N, p) };
            });
          } });
        } });
      } };
      function wr(e, n) {
        return new Proxy(e, { get: function(o, i, u) {
          return i === "db" ? n : Reflect.get(o, i, u);
        } });
      }
      var jt = (Ve.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new $.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new $.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(i) {
          return i._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Ba), o.stores({}), this._state.autoSchema = !1, o);
      }, Ve.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || ie.letThrough || this._vip) ? e() : new ne(function(o, i) {
          if (n._state.openComplete) return i(new $.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void i(new $.DatabaseClosed());
            n.open().catch(A);
          }
          n._state.dbReadyPromise.then(o, i);
        }).then(e);
      }, Ve.prototype.use = function(e) {
        var n = e.stack, o = e.create, i = e.level, u = e.name;
        return u && this.unuse({ stack: n, name: u }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: i ?? 10, name: u }), e.sort(function(l, p) {
          return l.level - p.level;
        }), this;
      }, Ve.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, i = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(u) {
          return i ? u.create !== i : !!o && u.name !== o;
        })), this;
      }, Ve.prototype.open = function() {
        var e = this;
        return an(lt, function() {
          return Va(e);
        });
      }, Ve.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = _n.indexOf(this);
        if (0 <= n && _n.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new ne(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ne(function(o, i) {
          e.cancelOpen = i;
        }));
      }, Ve.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new $.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new $.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ve.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", i = this._state;
        return new ne(function(u, l) {
          function p() {
            n.close(e);
            var m = n._deps.indexedDB.deleteDatabase(n.name);
            m.onsuccess = Me(function() {
              var y, b, N;
              y = n._deps, b = n.name, N = y.indexedDB, y = y.IDBKeyRange, io(N) || b === ir || oo(N, y).delete(b).catch(A), u();
            }), m.onerror = At(l), m.onblocked = n._fireOnBlocked;
          }
          if (o) throw new $.InvalidArgument("Invalid closeOptions argument to db.delete()");
          i.isBeingOpened ? i.dbReadyPromise.then(p) : p();
        });
      }, Ve.prototype.backendDB = function() {
        return this.idbdb;
      }, Ve.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ve.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ve.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ve.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ve.prototype, "tables", { get: function() {
        var e = this;
        return c(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Ve.prototype.transaction = function() {
        var e = (function(n, o, i) {
          var u = arguments.length;
          if (u < 2) throw new $.InvalidArgument("Too few arguments");
          for (var l = new Array(u - 1); --u; ) l[u - 1] = arguments[u];
          return i = l.pop(), [n, Ie(l), i];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ve.prototype._transaction = function(e, n, o) {
        var i = this, u = ie.trans;
        u && u.db === this && e.indexOf("!") === -1 || (u = null);
        var l, p, m = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (p = n.map(function(b) {
            if (b = b instanceof i.Table ? b.name : b, typeof b != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return b;
          }), e == "r" || e === Hr) l = Hr;
          else {
            if (e != "rw" && e != Yr) throw new $.InvalidArgument("Invalid transaction mode: " + e);
            l = Yr;
          }
          if (u) {
            if (u.mode === Hr && l === Yr) {
              if (!m) throw new $.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              u = null;
            }
            u && p.forEach(function(b) {
              if (u && u.storeNames.indexOf(b) === -1) {
                if (!m) throw new $.SubTransaction("Table " + b + " not included in parent transaction.");
                u = null;
              }
            }), m && u && !u.active && (u = null);
          }
        } catch (b) {
          return u ? u._promise(null, function(N, v) {
            v(b);
          }) : Ue(b);
        }
        var y = (function b(N, v, C, g, _) {
          return ne.resolve().then(function() {
            var T = ie.transless || ie, E = N._createTransaction(v, C, N._dbSchema, g);
            if (E.explicit = !0, T = { trans: E, transless: T }, g) E.idbtrans = g.idbtrans;
            else try {
              E.create(), E.idbtrans._explicit = !0, N._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === D.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
                return b(N, v, C, null, _);
              })) : Ue(P);
            }
            var R, I = Et(_);
            return I && wn(), T = ne.follow(function() {
              var P;
              (R = _.call(E, E)) && (I ? (P = Vt.bind(null, null), R.then(P, P)) : typeof R.next == "function" && typeof R.throw == "function" && (R = po(R)));
            }, T), (R && typeof R.then == "function" ? ne.resolve(R).then(function(P) {
              return E.active ? P : Ue(new $.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : T.then(function() {
              return R;
            })).then(function(P) {
              return g && E._resolve(), E._completion.then(function() {
                return P;
              });
            }).catch(function(P) {
              return E._reject(P), Ue(P);
            });
          });
        }).bind(null, this, l, p, u, o);
        return u ? u._promise(l, y, "lock") : ie.trans ? an(ie.transless, function() {
          return i._whenReady(y);
        }) : this._whenReady(y);
      }, Ve.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new $.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ve);
      function Ve(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var i = Ve.dependencies;
        this._options = n = s({ addons: Ve.addons, autoOpen: !0, indexedDB: i.indexedDB, IDBKeyRange: i.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, i = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var u, l, p, m, y, b = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        b.dbReadyPromise = new ne(function(v) {
          b.dbReadyResolve = v;
        }), b.openCanceller = new ne(function(v, C) {
          b.cancelOpen = C;
        }), this._state = b, this.name = e, this.on = In(this, "populate", "blocked", "versionchange", "close", { ready: [he, A] }), this.once = function(v, C) {
          var g = function() {
            for (var _ = [], T = 0; T < arguments.length; T++) _[T] = arguments[T];
            o.on(v).unsubscribe(g), C.apply(o, _);
          };
          return o.on(v, g);
        }, this.on.ready.subscribe = K(this.on.ready.subscribe, function(v) {
          return function(C, g) {
            Ve.vip(function() {
              var _, T = o._state;
              T.openComplete ? (T.dbOpenError || ne.resolve().then(C), g && v(C)) : T.onReadyBeingFired ? (T.onReadyBeingFired.push(C), g && v(C)) : (v(C), _ = o, g || v(function E() {
                _.on.ready.unsubscribe(C), _.on.ready.unsubscribe(E);
              }));
            });
          };
        }), this.Collection = (u = this, Pn(Pa.prototype, function(R, E) {
          this.db = u;
          var g = Ho, _ = null;
          if (E) try {
            g = E();
          } catch (I) {
            _ = I;
          }
          var T = R._ctx, E = T.table, R = E.hook.reading.fire;
          this._ctx = { table: E, index: T.index, isPrimKey: !T.index || E.schema.primKey.keyPath && T.index === E.schema.primKey.name, range: g, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: _, or: T.or, valueMapper: R !== q ? R : null };
        })), this.Table = (l = this, Pn(zo.prototype, function(v, C, g) {
          this.db = l, this._tx = g, this.name = v, this.schema = C, this.hook = l._allTables[v] ? l._allTables[v].hook : In(null, { creating: [fe, A], reading: [oe, q], updating: [ye, A], deleting: [ue, A] });
        })), this.Transaction = (p = this, Pn(ja.prototype, function(v, C, g, _, T) {
          var E = this;
          v !== "readonly" && C.forEach(function(R) {
            R = (R = g[R]) === null || R === void 0 ? void 0 : R.yProps, R && (C = C.concat(R.map(function(I) {
              return I.updatesTable;
            })));
          }), this.db = p, this.mode = v, this.storeNames = C, this.schema = g, this.chromeTransactionDurability = _, this.idbtrans = null, this.on = In(this, "complete", "error", "abort"), this.parent = T || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ne(function(R, I) {
            E._resolve = R, E._reject = I;
          }), this._completion.then(function() {
            E.active = !1, E.on.complete.fire();
          }, function(R) {
            var I = E.active;
            return E.active = !1, E.on.error.fire(R), E.parent ? E.parent._reject(R) : I && E.idbtrans && E.idbtrans.abort(), Ue(R);
          });
        })), this.Version = (m = this, Pn(Ua.prototype, function(v) {
          this.db = m, this._cfg = { version: v, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, Pn(ri.prototype, function(v, C, g) {
          if (this.db = y, this._ctx = { table: v, index: C === ":id" ? null : C, or: g }, this._cmp = this._ascending = Te, this._descending = function(_, T) {
            return Te(T, _);
          }, this._max = function(_, T) {
            return 0 < Te(_, T) ? _ : T;
          }, this._min = function(_, T) {
            return Te(_, T) < 0 ? _ : T;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new $.MissingAPI();
        })), this.on("versionchange", function(v) {
          0 < v.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(v) {
          !v.newVersion || v.newVersion < v.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(v.oldVersion / 10));
        }), this._maxKey = Fn(n.IDBKeyRange), this._createTransaction = function(v, C, g, _) {
          return new o.Transaction(v, C, g, o._options.chromeTransactionDurability, _);
        }, this._fireOnBlocked = function(v) {
          o.on("blocked").fire(v), _n.filter(function(C) {
            return C.name === o.name && C !== o && !C._state.vcFired;
          }).map(function(C) {
            return C.on("versionchange").fire(v);
          });
        }, this.use(Ha), this.use(za), this.use(Ya), this.use(Wa), this.use(Ga);
        var N = new Proxy(this, { get: function(v, C, g) {
          if (C === "_vip") return !0;
          if (C === "table") return function(T) {
            return wr(o.table(T), N);
          };
          var _ = Reflect.get(v, C, g);
          return _ instanceof zo ? wr(_, N) : C === "tables" ? _.map(function(T) {
            return wr(T, N);
          }) : C === "_createTransaction" ? function() {
            return wr(_.apply(this, arguments), N);
          } : _;
        } });
        this.vip = N, i.forEach(function(v) {
          return v(o);
        });
      }
      var _r, xt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ja = (yo.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, yo.prototype[xt] = function() {
        return this;
      }, yo);
      function yo(e) {
        this._subscribe = e;
      }
      try {
        _r = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        _r = { indexedDB: null, IDBKeyRange: null };
      }
      function gi(e) {
        var n, o = !1, i = new Ja(function(u) {
          var l = Et(e), p, m = !1, y = {}, b = {}, N = { get closed() {
            return m;
          }, unsubscribe: function() {
            m || (m = !0, p && p.abort(), v && Ht.storagemutated.unsubscribe(g));
          } };
          u.start && u.start(N);
          var v = !1, C = function() {
            return Gr(_);
          }, g = function(T) {
            yr(y, T), uo(b, y) && C();
          }, _ = function() {
            var T, E, R;
            !m && _r.indexedDB && (y = {}, T = {}, p && p.abort(), p = new AbortController(), R = function(I) {
              var P = gn();
              try {
                l && wn();
                var k = Ut(e, I);
                return k = l ? k.finally(Vt) : k;
              } finally {
                P && bn();
              }
            }(E = { subscr: T, signal: p.signal, requery: C, querier: e, trans: null }), Promise.resolve(R).then(function(I) {
              o = !0, n = I, m || E.signal.aborted || (y = {}, function(P) {
                for (var k in P) if (L(P, k)) return;
                return 1;
              }(b = T) || v || (Ht(jn, g), v = !0), Gr(function() {
                return !m && u.next && u.next(I);
              }));
            }, function(I) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(I?.name) || m || Gr(function() {
                m || u.error && u.error(I);
              });
            }));
          };
          return setTimeout(C, 0), N;
        });
        return i.hasValue = function() {
          return o;
        }, i.getValue = function() {
          return n;
        }, i;
      }
      var cn = jt;
      function go(e) {
        var n = Yt;
        try {
          Yt = !0, Ht.storagemutated.fire(e), fo(e, !0);
        } finally {
          Yt = n;
        }
      }
      M(cn, s(s({}, Ge), { delete: function(e) {
        return new cn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new cn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = cn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(i) {
            return i.map(function(u) {
              return u.name;
            }).filter(function(u) {
              return u !== ir;
            });
          }) : oo(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return Ue(new $.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          w(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ie.trans ? an(ie.transless, e) : e();
      }, vip: ao, async: function(e) {
        return function() {
          try {
            var n = po(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ne.resolve(n);
          } catch (o) {
            return Ue(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var i = po(e.apply(o, n || []));
          return i && typeof i.then == "function" ? i : ne.resolve(i);
        } catch (u) {
          return Ue(u);
        }
      }, currentTransaction: { get: function() {
        return ie.trans || null;
      } }, waitFor: function(e, n) {
        return n = ne.resolve(typeof e == "function" ? cn.ignoreTransaction(e) : e).timeout(n || 6e4), ie.trans ? ie.trans.waitFor(n) : n;
      }, Promise: ne, debug: { get: function() {
        return le;
      }, set: function(e) {
        Se(e);
      } }, derive: V, extend: w, props: M, override: K, Events: In, on: Ht, liveQuery: gi, extendObservabilitySet: yr, getByKeyPath: ge, setByKeyPath: ce, delByKeyPath: function(e, n) {
        typeof n == "string" ? ce(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          ce(e, o, void 0);
        });
      }, shallowClone: Ne, deepClone: ft, getObjectDiff: ho, cmp: Te, asap: xe, minKey: -1 / 0, addons: [], connections: _n, errnames: D, dependencies: _r, cache: ln, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), cn.maxKey = Fn(cn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ht(jn, function(e) {
        Yt || (e = new CustomEvent(zr, { detail: e }), Yt = !0, dispatchEvent(e), Yt = !1);
      }), addEventListener(zr, function(e) {
        e = e.detail, Yt || go(e);
      }));
      var Rn, Yt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (Rn = new BroadcastChannel(zr)).onmessage = function(e) {
          return e.data && go(e.data);
        };
      })(), typeof Rn.unref == "function" && Rn.unref(), Ht(jn, function(e) {
        Yt || Rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!jt.disableBfCache && e.persisted) {
          le && console.debug("Dexie: handling persisted pagehide"), Rn?.close();
          for (var n = 0, o = _n; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !jt.disableBfCache && e.persisted && (le && console.debug("Dexie: handling persisted pageshow"), bi(), go({ all: new rt(-1 / 0, [[]]) }));
      })), ne.rejectionMapper = function(e, n) {
        return !e || e instanceof Bt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (n = new Q[e.name](n || e.message, e), "stack" in e && Y(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, Se(le), s(jt, Object.freeze({ __proto__: null, Dexie: jt, liveQuery: gi, Entity: Yo, cmp: Te, PropModification: kn, replacePrefix: function(e, n) {
        return new kn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new kn({ add: e });
      }, remove: function(e) {
        return new kn({ remove: e });
      }, default: jt, RangeSet: rt, mergeRanges: Bn, rangesOverlap: ui }), { default: jt }), jt;
    });
  }(ea)), ea.exports;
}
var up = sp();
const Cs = /* @__PURE__ */ ip(up), Gu = Symbol.for("Dexie"), ca = globalThis[Gu] || (globalThis[Gu] = Cs);
if (Cs.semVer !== ca.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Cs.semVer} and ${ca.semVer}`);
const {
  liveQuery: ay,
  mergeRanges: sy,
  rangesOverlap: uy,
  RangeSet: ly,
  cmp: cy,
  Entity: fy,
  PropModification: dy,
  replacePrefix: py,
  add: hy,
  remove: my,
  DexieYProvider: vy
} = ca;
var lp = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function cp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function fp(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var r = t.default;
  if (typeof r == "function") {
    var a = function s() {
      var f = !1;
      try {
        f = this instanceof s;
      } catch {
      }
      return f ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    a.prototype = r.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(t).forEach(function(s) {
    var f = Object.getOwnPropertyDescriptor(t, s);
    Object.defineProperty(a, s, f.get ? f : {
      enumerable: !0,
      get: function() {
        return t[s];
      }
    });
  }), a;
}
var Hu = {};
const dp = {}, pp = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: dp
}, Symbol.toStringTag, { value: "Module" })), Yu = /* @__PURE__ */ fp(pp);
var Xu;
function hp() {
  return Xu || (Xu = 1, function(t) {
    (function(r) {
      r.parser = function(D, x) {
        return new s(D, x);
      }, r.SAXParser = s, r.SAXStream = O, r.createStream = S, r.MAX_BUFFER_LENGTH = 64 * 1024;
      var a = [
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
      function s(D, x) {
        if (!(this instanceof s))
          return new s(D, x);
        var $ = this;
        d($), $.q = $.c = "", $.bufferCheckPosition = r.MAX_BUFFER_LENGTH, $.opt = x || {}, $.opt.lowercase = $.opt.lowercase || $.opt.lowercasetags, $.looseCase = $.opt.lowercase ? "toLowerCase" : "toUpperCase", $.tags = [], $.closed = $.closedRoot = $.sawRoot = !1, $.tag = $.error = null, $.strict = !!D, $.noscript = !!(D || $.opt.noscript), $.state = G.BEGIN, $.strictEntities = $.opt.strictEntities, $.ENTITIES = $.strictEntities ? Object.create(r.XML_ENTITIES) : Object.create(r.ENTITIES), $.attribList = [], $.opt.xmlns && ($.ns = Object.create(V)), $.opt.unquotedAttributeValues === void 0 && ($.opt.unquotedAttributeValues = !D), $.trackPosition = $.opt.position !== !1, $.trackPosition && ($.position = $.line = $.column = 0), nt($, "onready");
      }
      Object.create || (Object.create = function(D) {
        function x() {
        }
        x.prototype = D;
        var $ = new x();
        return $;
      }), Object.keys || (Object.keys = function(D) {
        var x = [];
        for (var $ in D) D.hasOwnProperty($) && x.push($);
        return x;
      });
      function f(D) {
        for (var x = Math.max(r.MAX_BUFFER_LENGTH, 10), $ = 0, Q = 0, Ge = a.length; Q < Ge; Q++) {
          var A = D[a[Q]].length;
          if (A > x)
            switch (a[Q]) {
              case "textNode":
                ft(D);
                break;
              case "cdata":
                qe(D, "oncdata", D.cdata), D.cdata = "";
                break;
              case "script":
                qe(D, "onscript", D.script), D.script = "";
                break;
              default:
                Mt(D, "Max buffer length exceeded: " + a[Q]);
            }
          $ = Math.max($, A);
        }
        var q = r.MAX_BUFFER_LENGTH - $;
        D.bufferCheckPosition = q + D.position;
      }
      function d(D) {
        for (var x = 0, $ = a.length; x < $; x++)
          D[a[x]] = "";
      }
      function c(D) {
        ft(D), D.cdata !== "" && (qe(D, "oncdata", D.cdata), D.cdata = ""), D.script !== "" && (qe(D, "onscript", D.script), D.script = "");
      }
      s.prototype = {
        end: function() {
          ut(this);
        },
        write: Rt,
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
      var h;
      try {
        h = Yu.Stream;
      } catch {
        h = function() {
        };
      }
      h || (h = function() {
      });
      var w = r.EVENTS.filter(function(D) {
        return D !== "error" && D !== "end";
      });
      function S(D, x) {
        return new O(D, x);
      }
      function O(D, x) {
        if (!(this instanceof O))
          return new O(D, x);
        h.apply(this), this._parser = new s(D, x), this.writable = !0, this.readable = !0;
        var $ = this;
        this._parser.onend = function() {
          $.emit("end");
        }, this._parser.onerror = function(Q) {
          $.emit("error", Q), $._parser.error = null;
        }, this._decoder = null, w.forEach(function(Q) {
          Object.defineProperty($, "on" + Q, {
            get: function() {
              return $._parser["on" + Q];
            },
            set: function(Ge) {
              if (!Ge)
                return $.removeAllListeners(Q), $._parser["on" + Q] = Ge, Ge;
              $.on(Q, Ge);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      O.prototype = Object.create(h.prototype, {
        constructor: {
          value: O
        }
      }), O.prototype.write = function(D) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(D)) {
          if (!this._decoder) {
            var x = Yu.StringDecoder;
            this._decoder = new x("utf8");
          }
          D = this._decoder.write(D);
        }
        return this._parser.write(D.toString()), this.emit("data", D), !0;
      }, O.prototype.end = function(D) {
        return D && D.length && this.write(D), this._parser.end(), !0;
      }, O.prototype.on = function(D, x) {
        var $ = this;
        return !$._parser["on" + D] && w.indexOf(D) !== -1 && ($._parser["on" + D] = function() {
          var Q = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          Q.splice(0, 0, D), $.emit.apply($, Q);
        }), h.prototype.on.call($, D, x);
      };
      var L = "[CDATA[", M = "DOCTYPE", B = "http://www.w3.org/XML/1998/namespace", Y = "http://www.w3.org/2000/xmlns/", V = { xml: B, xmlns: Y }, U = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, W = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, F = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, K = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function ae(D) {
        return D === " " || D === `
` || D === "\r" || D === "	";
      }
      function xe(D) {
        return D === '"' || D === "'";
      }
      function ge(D) {
        return D === ">" || ae(D);
      }
      function ce(D, x) {
        return D.test(x);
      }
      function Ne(D, x) {
        return !ce(D, x);
      }
      var G = 0;
      r.STATE = {
        BEGIN: G++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: G++,
        // leading whitespace
        TEXT: G++,
        // general stuff
        TEXT_ENTITY: G++,
        // &amp and such.
        OPEN_WAKA: G++,
        // <
        SGML_DECL: G++,
        // <!BLARG
        SGML_DECL_QUOTED: G++,
        // <!BLARG foo "bar
        DOCTYPE: G++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: G++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: G++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: G++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: G++,
        // <!-
        COMMENT: G++,
        // <!--
        COMMENT_ENDING: G++,
        // <!-- blah -
        COMMENT_ENDED: G++,
        // <!-- blah --
        CDATA: G++,
        // <![CDATA[ something
        CDATA_ENDING: G++,
        // ]
        CDATA_ENDING_2: G++,
        // ]]
        PROC_INST: G++,
        // <?hi
        PROC_INST_BODY: G++,
        // <?hi there
        PROC_INST_ENDING: G++,
        // <?hi "there" ?
        OPEN_TAG: G++,
        // <strong
        OPEN_TAG_SLASH: G++,
        // <strong /
        ATTRIB: G++,
        // <a
        ATTRIB_NAME: G++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: G++,
        // <a foo _
        ATTRIB_VALUE: G++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: G++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: G++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: G++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: G++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: G++,
        // <foo bar=&quot
        CLOSE_TAG: G++,
        // </a
        CLOSE_TAG_SAW_WHITE: G++,
        // </a   >
        SCRIPT: G++,
        // <script> ...
        SCRIPT_ENDING: G++
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
        var x = r.ENTITIES[D], $ = typeof x == "number" ? String.fromCharCode(x) : x;
        r.ENTITIES[D] = $;
      });
      for (var Ie in r.STATE)
        r.STATE[r.STATE[Ie]] = Ie;
      G = r.STATE;
      function nt(D, x, $) {
        D[x] && D[x]($);
      }
      function qe(D, x, $) {
        D.textNode && ft(D), nt(D, x, $);
      }
      function ft(D) {
        D.textNode = Cn(D.opt, D.textNode), D.textNode && nt(D, "ontext", D.textNode), D.textNode = "";
      }
      function Cn(D, x) {
        return D.trim && (x = x.trim()), D.normalize && (x = x.replace(/\s+/g, " ")), x;
      }
      function Mt(D, x) {
        return ft(D), D.trackPosition && (x += `
Line: ` + D.line + `
Column: ` + D.column + `
Char: ` + D.c), x = new Error(x), D.error = x, nt(D, "onerror", x), D;
      }
      function ut(D) {
        return D.sawRoot && !D.closedRoot && Ce(D, "Unclosed root tag"), D.state !== G.BEGIN && D.state !== G.BEGIN_WHITESPACE && D.state !== G.TEXT && Mt(D, "Unexpected end"), ft(D), D.c = "", D.closed = !0, nt(D, "onend"), s.call(D, D.strict, D.opt), D;
      }
      function Ce(D, x) {
        if (typeof D != "object" || !(D instanceof s))
          throw new Error("bad call to strictFail");
        D.strict && Mt(D, x);
      }
      function $e(D) {
        D.strict || (D.tagName = D.tagName[D.looseCase]());
        var x = D.tags[D.tags.length - 1] || D, $ = D.tag = { name: D.tagName, attributes: {} };
        D.opt.xmlns && ($.ns = x.ns), D.attribList.length = 0, qe(D, "onopentagstart", $);
      }
      function _t(D, x) {
        var $ = D.indexOf(":"), Q = $ < 0 ? ["", D] : D.split(":"), Ge = Q[0], A = Q[1];
        return x && D === "xmlns" && (Ge = "xmlns", A = ""), { prefix: Ge, local: A };
      }
      function pt(D) {
        if (D.strict || (D.attribName = D.attribName[D.looseCase]()), D.attribList.indexOf(D.attribName) !== -1 || D.tag.attributes.hasOwnProperty(D.attribName)) {
          D.attribName = D.attribValue = "";
          return;
        }
        if (D.opt.xmlns) {
          var x = _t(D.attribName, !0), $ = x.prefix, Q = x.local;
          if ($ === "xmlns")
            if (Q === "xml" && D.attribValue !== B)
              Ce(
                D,
                "xml: prefix must be bound to " + B + `
Actual: ` + D.attribValue
              );
            else if (Q === "xmlns" && D.attribValue !== Y)
              Ce(
                D,
                "xmlns: prefix must be bound to " + Y + `
Actual: ` + D.attribValue
              );
            else {
              var Ge = D.tag, A = D.tags[D.tags.length - 1] || D;
              Ge.ns === A.ns && (Ge.ns = Object.create(A.ns)), Ge.ns[Q] = D.attribValue;
            }
          D.attribList.push([D.attribName, D.attribValue]);
        } else
          D.tag.attributes[D.attribName] = D.attribValue, qe(D, "onattribute", {
            name: D.attribName,
            value: D.attribValue
          });
        D.attribName = D.attribValue = "";
      }
      function Et(D, x) {
        if (D.opt.xmlns) {
          var $ = D.tag, Q = _t(D.tagName);
          $.prefix = Q.prefix, $.local = Q.local, $.uri = $.ns[Q.prefix] || "", $.prefix && !$.uri && (Ce(D, "Unbound namespace prefix: " + JSON.stringify(D.tagName)), $.uri = Q.prefix);
          var Ge = D.tags[D.tags.length - 1] || D;
          $.ns && Ge.ns !== $.ns && Object.keys($.ns).forEach(function(Se) {
            qe(D, "onopennamespace", {
              prefix: Se,
              uri: $.ns[Se]
            });
          });
          for (var A = 0, q = D.attribList.length; A < q; A++) {
            var oe = D.attribList[A], se = oe[0], fe = oe[1], ue = _t(se, !0), ye = ue.prefix, we = ue.local, he = ye === "" ? "" : $.ns[ye] || "", le = {
              name: se,
              value: fe,
              prefix: ye,
              local: we,
              uri: he
            };
            ye && ye !== "xmlns" && !he && (Ce(D, "Unbound namespace prefix: " + JSON.stringify(ye)), le.uri = ye), D.tag.attributes[se] = le, qe(D, "onattribute", le);
          }
          D.attribList.length = 0;
        }
        D.tag.isSelfClosing = !!x, D.sawRoot = !0, D.tags.push(D.tag), qe(D, "onopentag", D.tag), x || (!D.noscript && D.tagName.toLowerCase() === "script" ? D.state = G.SCRIPT : D.state = G.TEXT, D.tag = null, D.tagName = ""), D.attribName = D.attribValue = "", D.attribList.length = 0;
      }
      function Kt(D) {
        if (!D.tagName) {
          Ce(D, "Weird empty close tag."), D.textNode += "</>", D.state = G.TEXT;
          return;
        }
        if (D.script) {
          if (D.tagName !== "script") {
            D.script += "</" + D.tagName + ">", D.tagName = "", D.state = G.SCRIPT;
            return;
          }
          qe(D, "onscript", D.script), D.script = "";
        }
        var x = D.tags.length, $ = D.tagName;
        D.strict || ($ = $[D.looseCase]());
        for (var Q = $; x--; ) {
          var Ge = D.tags[x];
          if (Ge.name !== Q)
            Ce(D, "Unexpected close tag");
          else
            break;
        }
        if (x < 0) {
          Ce(D, "Unmatched closing tag: " + D.tagName), D.textNode += "</" + D.tagName + ">", D.state = G.TEXT;
          return;
        }
        D.tagName = $;
        for (var A = D.tags.length; A-- > x; ) {
          var q = D.tag = D.tags.pop();
          D.tagName = D.tag.name, qe(D, "onclosetag", D.tagName);
          var oe = {};
          for (var se in q.ns)
            oe[se] = q.ns[se];
          var fe = D.tags[D.tags.length - 1] || D;
          D.opt.xmlns && q.ns !== fe.ns && Object.keys(q.ns).forEach(function(ue) {
            var ye = q.ns[ue];
            qe(D, "onclosenamespace", { prefix: ue, uri: ye });
          });
        }
        x === 0 && (D.closedRoot = !0), D.tagName = D.attribValue = D.attribName = "", D.attribList.length = 0, D.state = G.TEXT;
      }
      function Bt(D) {
        var x = D.entity, $ = x.toLowerCase(), Q, Ge = "";
        return D.ENTITIES[x] ? D.ENTITIES[x] : D.ENTITIES[$] ? D.ENTITIES[$] : (x = $, x.charAt(0) === "#" && (x.charAt(1) === "x" ? (x = x.slice(2), Q = parseInt(x, 16), Ge = Q.toString(16)) : (x = x.slice(1), Q = parseInt(x, 10), Ge = Q.toString(10))), x = x.replace(/^0+/, ""), isNaN(Q) || Ge.toLowerCase() !== x ? (Ce(D, "Invalid character entity"), "&" + D.entity + ";") : String.fromCodePoint(Q));
      }
      function Un(D, x) {
        x === "<" ? (D.state = G.OPEN_WAKA, D.startTagPosition = D.position) : ae(x) || (Ce(D, "Non-whitespace before first tag."), D.textNode = x, D.state = G.TEXT);
      }
      function vn(D, x) {
        var $ = "";
        return x < D.length && ($ = D.charAt(x)), $;
      }
      function Rt(D) {
        var x = this;
        if (this.error)
          throw this.error;
        if (x.closed)
          return Mt(
            x,
            "Cannot write after close. Assign an onready handler."
          );
        if (D === null)
          return ut(x);
        typeof D == "object" && (D = D.toString());
        for (var $ = 0, Q = ""; Q = vn(D, $++), x.c = Q, !!Q; )
          switch (x.trackPosition && (x.position++, Q === `
` ? (x.line++, x.column = 0) : x.column++), x.state) {
            case G.BEGIN:
              if (x.state = G.BEGIN_WHITESPACE, Q === "\uFEFF")
                continue;
              Un(x, Q);
              continue;
            case G.BEGIN_WHITESPACE:
              Un(x, Q);
              continue;
            case G.TEXT:
              if (x.sawRoot && !x.closedRoot) {
                for (var Ge = $ - 1; Q && Q !== "<" && Q !== "&"; )
                  Q = vn(D, $++), Q && x.trackPosition && (x.position++, Q === `
` ? (x.line++, x.column = 0) : x.column++);
                x.textNode += D.substring(Ge, $ - 1);
              }
              Q === "<" && !(x.sawRoot && x.closedRoot && !x.strict) ? (x.state = G.OPEN_WAKA, x.startTagPosition = x.position) : (!ae(Q) && (!x.sawRoot || x.closedRoot) && Ce(x, "Text data outside of root node."), Q === "&" ? x.state = G.TEXT_ENTITY : x.textNode += Q);
              continue;
            case G.SCRIPT:
              Q === "<" ? x.state = G.SCRIPT_ENDING : x.script += Q;
              continue;
            case G.SCRIPT_ENDING:
              Q === "/" ? x.state = G.CLOSE_TAG : (x.script += "<" + Q, x.state = G.SCRIPT);
              continue;
            case G.OPEN_WAKA:
              if (Q === "!")
                x.state = G.SGML_DECL, x.sgmlDecl = "";
              else if (!ae(Q)) if (ce(U, Q))
                x.state = G.OPEN_TAG, x.tagName = Q;
              else if (Q === "/")
                x.state = G.CLOSE_TAG, x.tagName = "";
              else if (Q === "?")
                x.state = G.PROC_INST, x.procInstName = x.procInstBody = "";
              else {
                if (Ce(x, "Unencoded <"), x.startTagPosition + 1 < x.position) {
                  var A = x.position - x.startTagPosition;
                  Q = new Array(A).join(" ") + Q;
                }
                x.textNode += "<" + Q, x.state = G.TEXT;
              }
              continue;
            case G.SGML_DECL:
              if (x.sgmlDecl + Q === "--") {
                x.state = G.COMMENT, x.comment = "", x.sgmlDecl = "";
                continue;
              }
              x.doctype && x.doctype !== !0 && x.sgmlDecl ? (x.state = G.DOCTYPE_DTD, x.doctype += "<!" + x.sgmlDecl + Q, x.sgmlDecl = "") : (x.sgmlDecl + Q).toUpperCase() === L ? (qe(x, "onopencdata"), x.state = G.CDATA, x.sgmlDecl = "", x.cdata = "") : (x.sgmlDecl + Q).toUpperCase() === M ? (x.state = G.DOCTYPE, (x.doctype || x.sawRoot) && Ce(
                x,
                "Inappropriately located doctype declaration"
              ), x.doctype = "", x.sgmlDecl = "") : Q === ">" ? (qe(x, "onsgmldeclaration", x.sgmlDecl), x.sgmlDecl = "", x.state = G.TEXT) : (xe(Q) && (x.state = G.SGML_DECL_QUOTED), x.sgmlDecl += Q);
              continue;
            case G.SGML_DECL_QUOTED:
              Q === x.q && (x.state = G.SGML_DECL, x.q = ""), x.sgmlDecl += Q;
              continue;
            case G.DOCTYPE:
              Q === ">" ? (x.state = G.TEXT, qe(x, "ondoctype", x.doctype), x.doctype = !0) : (x.doctype += Q, Q === "[" ? x.state = G.DOCTYPE_DTD : xe(Q) && (x.state = G.DOCTYPE_QUOTED, x.q = Q));
              continue;
            case G.DOCTYPE_QUOTED:
              x.doctype += Q, Q === x.q && (x.q = "", x.state = G.DOCTYPE);
              continue;
            case G.DOCTYPE_DTD:
              Q === "]" ? (x.doctype += Q, x.state = G.DOCTYPE) : Q === "<" ? (x.state = G.OPEN_WAKA, x.startTagPosition = x.position) : xe(Q) ? (x.doctype += Q, x.state = G.DOCTYPE_DTD_QUOTED, x.q = Q) : x.doctype += Q;
              continue;
            case G.DOCTYPE_DTD_QUOTED:
              x.doctype += Q, Q === x.q && (x.state = G.DOCTYPE_DTD, x.q = "");
              continue;
            case G.COMMENT:
              Q === "-" ? x.state = G.COMMENT_ENDING : x.comment += Q;
              continue;
            case G.COMMENT_ENDING:
              Q === "-" ? (x.state = G.COMMENT_ENDED, x.comment = Cn(x.opt, x.comment), x.comment && qe(x, "oncomment", x.comment), x.comment = "") : (x.comment += "-" + Q, x.state = G.COMMENT);
              continue;
            case G.COMMENT_ENDED:
              Q !== ">" ? (Ce(x, "Malformed comment"), x.comment += "--" + Q, x.state = G.COMMENT) : x.doctype && x.doctype !== !0 ? x.state = G.DOCTYPE_DTD : x.state = G.TEXT;
              continue;
            case G.CDATA:
              Q === "]" ? x.state = G.CDATA_ENDING : x.cdata += Q;
              continue;
            case G.CDATA_ENDING:
              Q === "]" ? x.state = G.CDATA_ENDING_2 : (x.cdata += "]" + Q, x.state = G.CDATA);
              continue;
            case G.CDATA_ENDING_2:
              Q === ">" ? (x.cdata && qe(x, "oncdata", x.cdata), qe(x, "onclosecdata"), x.cdata = "", x.state = G.TEXT) : Q === "]" ? x.cdata += "]" : (x.cdata += "]]" + Q, x.state = G.CDATA);
              continue;
            case G.PROC_INST:
              Q === "?" ? x.state = G.PROC_INST_ENDING : ae(Q) ? x.state = G.PROC_INST_BODY : x.procInstName += Q;
              continue;
            case G.PROC_INST_BODY:
              if (!x.procInstBody && ae(Q))
                continue;
              Q === "?" ? x.state = G.PROC_INST_ENDING : x.procInstBody += Q;
              continue;
            case G.PROC_INST_ENDING:
              Q === ">" ? (qe(x, "onprocessinginstruction", {
                name: x.procInstName,
                body: x.procInstBody
              }), x.procInstName = x.procInstBody = "", x.state = G.TEXT) : (x.procInstBody += "?" + Q, x.state = G.PROC_INST_BODY);
              continue;
            case G.OPEN_TAG:
              ce(W, Q) ? x.tagName += Q : ($e(x), Q === ">" ? Et(x) : Q === "/" ? x.state = G.OPEN_TAG_SLASH : (ae(Q) || Ce(x, "Invalid character in tag name"), x.state = G.ATTRIB));
              continue;
            case G.OPEN_TAG_SLASH:
              Q === ">" ? (Et(x, !0), Kt(x)) : (Ce(x, "Forward-slash in opening tag not followed by >"), x.state = G.ATTRIB);
              continue;
            case G.ATTRIB:
              if (ae(Q))
                continue;
              Q === ">" ? Et(x) : Q === "/" ? x.state = G.OPEN_TAG_SLASH : ce(U, Q) ? (x.attribName = Q, x.attribValue = "", x.state = G.ATTRIB_NAME) : Ce(x, "Invalid attribute name");
              continue;
            case G.ATTRIB_NAME:
              Q === "=" ? x.state = G.ATTRIB_VALUE : Q === ">" ? (Ce(x, "Attribute without value"), x.attribValue = x.attribName, pt(x), Et(x)) : ae(Q) ? x.state = G.ATTRIB_NAME_SAW_WHITE : ce(W, Q) ? x.attribName += Q : Ce(x, "Invalid attribute name");
              continue;
            case G.ATTRIB_NAME_SAW_WHITE:
              if (Q === "=")
                x.state = G.ATTRIB_VALUE;
              else {
                if (ae(Q))
                  continue;
                Ce(x, "Attribute without value"), x.tag.attributes[x.attribName] = "", x.attribValue = "", qe(x, "onattribute", {
                  name: x.attribName,
                  value: ""
                }), x.attribName = "", Q === ">" ? Et(x) : ce(U, Q) ? (x.attribName = Q, x.state = G.ATTRIB_NAME) : (Ce(x, "Invalid attribute name"), x.state = G.ATTRIB);
              }
              continue;
            case G.ATTRIB_VALUE:
              if (ae(Q))
                continue;
              xe(Q) ? (x.q = Q, x.state = G.ATTRIB_VALUE_QUOTED) : (x.opt.unquotedAttributeValues || Mt(x, "Unquoted attribute value"), x.state = G.ATTRIB_VALUE_UNQUOTED, x.attribValue = Q);
              continue;
            case G.ATTRIB_VALUE_QUOTED:
              if (Q !== x.q) {
                Q === "&" ? x.state = G.ATTRIB_VALUE_ENTITY_Q : x.attribValue += Q;
                continue;
              }
              pt(x), x.q = "", x.state = G.ATTRIB_VALUE_CLOSED;
              continue;
            case G.ATTRIB_VALUE_CLOSED:
              ae(Q) ? x.state = G.ATTRIB : Q === ">" ? Et(x) : Q === "/" ? x.state = G.OPEN_TAG_SLASH : ce(U, Q) ? (Ce(x, "No whitespace between attributes"), x.attribName = Q, x.attribValue = "", x.state = G.ATTRIB_NAME) : Ce(x, "Invalid attribute name");
              continue;
            case G.ATTRIB_VALUE_UNQUOTED:
              if (!ge(Q)) {
                Q === "&" ? x.state = G.ATTRIB_VALUE_ENTITY_U : x.attribValue += Q;
                continue;
              }
              pt(x), Q === ">" ? Et(x) : x.state = G.ATTRIB;
              continue;
            case G.CLOSE_TAG:
              if (x.tagName)
                Q === ">" ? Kt(x) : ce(W, Q) ? x.tagName += Q : x.script ? (x.script += "</" + x.tagName, x.tagName = "", x.state = G.SCRIPT) : (ae(Q) || Ce(x, "Invalid tagname in closing tag"), x.state = G.CLOSE_TAG_SAW_WHITE);
              else {
                if (ae(Q))
                  continue;
                Ne(U, Q) ? x.script ? (x.script += "</" + Q, x.state = G.SCRIPT) : Ce(x, "Invalid tagname in closing tag.") : x.tagName = Q;
              }
              continue;
            case G.CLOSE_TAG_SAW_WHITE:
              if (ae(Q))
                continue;
              Q === ">" ? Kt(x) : Ce(x, "Invalid characters in closing tag");
              continue;
            case G.TEXT_ENTITY:
            case G.ATTRIB_VALUE_ENTITY_Q:
            case G.ATTRIB_VALUE_ENTITY_U:
              var q, oe;
              switch (x.state) {
                case G.TEXT_ENTITY:
                  q = G.TEXT, oe = "textNode";
                  break;
                case G.ATTRIB_VALUE_ENTITY_Q:
                  q = G.ATTRIB_VALUE_QUOTED, oe = "attribValue";
                  break;
                case G.ATTRIB_VALUE_ENTITY_U:
                  q = G.ATTRIB_VALUE_UNQUOTED, oe = "attribValue";
                  break;
              }
              if (Q === ";") {
                var se = Bt(x);
                x.opt.unparsedEntities && !Object.values(r.XML_ENTITIES).includes(se) ? (x.entity = "", x.state = q, x.write(se)) : (x[oe] += se, x.entity = "", x.state = q);
              } else ce(x.entity.length ? K : F, Q) ? x.entity += Q : (Ce(x, "Invalid character in entity name"), x[oe] += "&" + x.entity + Q, x.entity = "", x.state = q);
              continue;
            default:
              throw new Error(x, "Unknown state: " + x.state);
          }
        return x.position >= x.bufferCheckPosition && f(x), x;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var D = String.fromCharCode, x = Math.floor, $ = function() {
          var Q = 16384, Ge = [], A, q, oe = -1, se = arguments.length;
          if (!se)
            return "";
          for (var fe = ""; ++oe < se; ) {
            var ue = Number(arguments[oe]);
            if (!isFinite(ue) || // `NaN`, `+Infinity`, or `-Infinity`
            ue < 0 || // not a valid Unicode code point
            ue > 1114111 || // not a valid Unicode code point
            x(ue) !== ue)
              throw RangeError("Invalid code point: " + ue);
            ue <= 65535 ? Ge.push(ue) : (ue -= 65536, A = (ue >> 10) + 55296, q = ue % 1024 + 56320, Ge.push(A, q)), (oe + 1 === se || Ge.length > Q) && (fe += D.apply(null, Ge), Ge.length = 0);
          }
          return fe;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: $,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = $;
      }();
    })(t);
  }(Hu)), Hu;
}
hp();
const Fe = "sclElements", bt = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
var Rs = { exports: {} }, mp = Rs.exports, Qu;
function vp() {
  return Qu || (Qu = 1, function(t, r) {
    (function(a, s) {
      t.exports = s();
    })(mp, function() {
      var a = function(e, n) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, i) {
          o.__proto__ = i;
        } || function(o, i) {
          for (var u in i) Object.prototype.hasOwnProperty.call(i, u) && (o[u] = i[u]);
        })(e, n);
      }, s = function() {
        return (s = Object.assign || function(e) {
          for (var n, o = 1, i = arguments.length; o < i; o++) for (var u in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, u) && (e[u] = n[u]);
          return e;
        }).apply(this, arguments);
      };
      function f(e, n, o) {
        for (var i, u = 0, l = n.length; u < l; u++) !i && u in n || ((i = i || Array.prototype.slice.call(n, 0, u))[u] = n[u]);
        return e.concat(i || Array.prototype.slice.call(n));
      }
      var d = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : lp, c = Object.keys, h = Array.isArray;
      function w(e, n) {
        return typeof n != "object" || c(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || d.Promise || (d.Promise = Promise);
      var S = Object.getPrototypeOf, O = {}.hasOwnProperty;
      function L(e, n) {
        return O.call(e, n);
      }
      function M(e, n) {
        typeof n == "function" && (n = n(S(e))), (typeof Reflect > "u" ? c : Reflect.ownKeys)(n).forEach(function(o) {
          Y(e, o, n[o]);
        });
      }
      var B = Object.defineProperty;
      function Y(e, n, o, i) {
        B(e, n, w(o && L(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, i));
      }
      function V(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), Y(e.prototype, "constructor", e), { extend: M.bind(null, e.prototype) };
        } };
      }
      var U = Object.getOwnPropertyDescriptor, W = [].slice;
      function F(e, n, o) {
        return W.call(e, n, o);
      }
      function K(e, n) {
        return n(e);
      }
      function ae(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function xe(e) {
        d.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function ge(e, n) {
        if (typeof n == "string" && L(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], i = 0, u = n.length; i < u; ++i) {
            var l = ge(e, n[i]);
            o.push(l);
          }
          return o;
        }
        var p = n.indexOf(".");
        if (p !== -1) {
          var m = e[n.substr(0, p)];
          return m == null ? void 0 : ge(m, n.substr(p + 1));
        }
      }
      function ce(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          ae(typeof o != "string" && "length" in o);
          for (var i = 0, u = n.length; i < u; ++i) ce(e, n[i], o[i]);
        } else {
          var l, p, m = n.indexOf(".");
          m !== -1 ? (l = n.substr(0, m), (p = n.substr(m + 1)) === "" ? o === void 0 ? h(e) && !isNaN(parseInt(l)) ? e.splice(l, 1) : delete e[l] : e[l] = o : ce(m = !(m = e[l]) || !L(e, l) ? e[l] = {} : m, p, o)) : o === void 0 ? h(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function Ne(e) {
        var n, o = {};
        for (n in e) L(e, n) && (o[n] = e[n]);
        return o;
      }
      var G = [].concat;
      function Ie(e) {
        return G.apply([], e);
      }
      var je = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(Ie([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return d[e];
      }), nt = new Set(je.map(function(e) {
        return d[e];
      })), qe = null;
      function ft(e) {
        return qe = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var i = qe.get(o);
          if (i) return i;
          if (h(o)) {
            i = [], qe.set(o, i);
            for (var u = 0, l = o.length; u < l; ++u) i.push(n(o[u]));
          } else if (nt.has(o.constructor)) i = o;
          else {
            var p, m = S(o);
            for (p in i = m === Object.prototype ? {} : Object.create(m), qe.set(o, i), o) L(o, p) && (i[p] = n(o[p]));
          }
          return i;
        }(e), qe = null, e;
      }
      var Cn = {}.toString;
      function Mt(e) {
        return Cn.call(e).slice(8, -1);
      }
      var ut = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", Ce = typeof ut == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[ut]) && n.apply(e);
      } : function() {
        return null;
      };
      function $e(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var _t = {};
      function pt(e) {
        var n, o, i, u;
        if (arguments.length === 1) {
          if (h(e)) return e.slice();
          if (this === _t && typeof e == "string") return [e];
          if (u = Ce(e)) {
            for (o = []; !(i = u.next()).done; ) o.push(i.value);
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
      }, Pe = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], xt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Pe), Kt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Bt(e, n) {
        this.name = e, this.message = n;
      }
      function Un(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, i, u) {
          return u.indexOf(o) === i;
        }).join(`
`);
      }
      function vn(e, n, o, i) {
        this.failures = n, this.failedKeys = i, this.successCount = o, this.message = Un(e, n);
      }
      function Rt(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Un(e, this.failures);
      }
      V(Bt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), V(vn).from(Bt), V(Rt).from(Bt);
      var D = xt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), x = Bt, $ = xt.reduce(function(e, n) {
        var o = n + "Error";
        function i(u, l) {
          this.name = o, u ? typeof u == "string" ? (this.message = "".concat(u).concat(l ? `
 ` + l : ""), this.inner = l || null) : typeof u == "object" && (this.message = "".concat(u.name, " ").concat(u.message), this.inner = u) : (this.message = Kt[n] || o, this.inner = null);
        }
        return V(i).from(x), e[n] = i, e;
      }, {});
      $.Syntax = SyntaxError, $.Type = TypeError, $.Range = RangeError;
      var Q = Pe.reduce(function(e, n) {
        return e[n + "Error"] = $[n], e;
      }, {}), Ge = xt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = $[n]), e;
      }, {});
      function A() {
      }
      function q(e) {
        return e;
      }
      function oe(e, n) {
        return e == null || e === q ? n : function(o) {
          return n(e(o));
        };
      }
      function se(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function fe(e, n) {
        return e === A ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var i = this.onsuccess, u = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var l = n.apply(this, arguments);
          return i && (this.onsuccess = this.onsuccess ? se(i, this.onsuccess) : i), u && (this.onerror = this.onerror ? se(u, this.onerror) : u), l !== void 0 ? l : o;
        };
      }
      function ue(e, n) {
        return e === A ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, i = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? se(o, this.onsuccess) : o), i && (this.onerror = this.onerror ? se(i, this.onerror) : i);
        };
      }
      function ye(e, n) {
        return e === A ? n : function(o) {
          var i = e.apply(this, arguments);
          w(o, i);
          var u = this.onsuccess, l = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), u && (this.onsuccess = this.onsuccess ? se(u, this.onsuccess) : u), l && (this.onerror = this.onerror ? se(l, this.onerror) : l), i === void 0 ? o === void 0 ? void 0 : o : w(i, o);
        };
      }
      function we(e, n) {
        return e === A ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function he(e, n) {
        return e === A ? n : function() {
          var o = e.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var i = this, u = arguments.length, l = new Array(u); u--; ) l[u] = arguments[u];
            return o.then(function() {
              return n.apply(i, l);
            });
          }
          return n.apply(this, arguments);
        };
      }
      Ge.ModifyError = vn, Ge.DexieError = Bt, Ge.BulkError = Rt;
      var le = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Se(e) {
        le = e;
      }
      var _e = {}, De = 100, je = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, S(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, S(n), e];
      }(), Pe = je[0], xt = je[1], je = je[2], xt = xt && xt.then, We = Pe && Pe.constructor, Qe = !!je, vt = function(e, n) {
        yn.push([e, n]), It && (queueMicrotask(Aa), It = !1);
      }, Ct = !0, It = !0, yt = [], rn = [], Vn = q, lt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ie = lt, yn = [], on = 0, Zn = [];
      function ne(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = ie;
        if (typeof e != "function") {
          if (e !== _e) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Ur(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(i, u) {
          try {
            u(function(l) {
              if (i._state === null) {
                if (l === i) throw new TypeError("A promise cannot be resolved with itself.");
                var p = i._lib && gn();
                l && typeof l.then == "function" ? o(i, function(m, y) {
                  l instanceof ne ? l._then(m, y) : l.then(m, y);
                }) : (i._state = !0, i._value = l, Uo(i)), p && bn();
              }
            }, Ur.bind(null, i));
          } catch (l) {
            Ur(i, l);
          }
        }(this, e);
      }
      var qr = { get: function() {
        var e = ie, n = rr;
        function o(i, u) {
          var l = this, p = !e.global && (e !== ie || n !== rr), m = p && !Vt(), y = new ne(function(b, N) {
            Vr(l, new qo(Wo(i, e, p, m), Wo(u, e, p, m), b, N, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return o.prototype = _e, o;
      }, set: function(e) {
        Y(this, "then", e && e.prototype === _e ? qr : { get: function() {
          return e;
        }, set: qr.set });
      } };
      function qo(e, n, o, i, u) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = i, this.psd = u;
      }
      function Ur(e, n) {
        var o, i;
        rn.push(n), e._state === null && (o = e._lib && gn(), n = Vn(n), e._state = !1, e._value = n, i = e, yt.some(function(u) {
          return u._value === i._value;
        }) || yt.push(i), Uo(e), o && bn());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, i = n.length; o < i; ++o) Vr(e, n[o]);
        var u = e._PSD;
        --u.ref || u.finalize(), on === 0 && (++on, vt(function() {
          --on == 0 && Wr();
        }, []));
      }
      function Vr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++on, vt(Ra, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Ra(e, n, o) {
        try {
          var i, u = n._value;
          !n._state && rn.length && (rn = []), i = le && n._consoleTask ? n._consoleTask.run(function() {
            return e(u);
          }) : e(u), n._state || rn.indexOf(u) !== -1 || function(l) {
            for (var p = yt.length; p; ) if (yt[--p]._value === l._value) return yt.splice(p, 1);
          }(n), o.resolve(i);
        } catch (l) {
          o.reject(l);
        } finally {
          --on == 0 && Wr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Aa() {
        an(lt, function() {
          gn() && bn();
        });
      }
      function gn() {
        var e = Ct;
        return It = Ct = !1, e;
      }
      function bn() {
        var e, n, o;
        do
          for (; 0 < yn.length; ) for (e = yn, yn = [], o = e.length, n = 0; n < o; ++n) {
            var i = e[n];
            i[0].apply(null, i[1]);
          }
        while (0 < yn.length);
        It = Ct = !0;
      }
      function Wr() {
        var e = yt;
        yt = [], e.forEach(function(i) {
          i._PSD.onunhandled.call(null, i._value, i);
        });
        for (var n = Zn.slice(0), o = n.length; o; ) n[--o]();
      }
      function er(e) {
        return new ne(_e, !1, e);
      }
      function Me(e, n) {
        var o = ie;
        return function() {
          var i = gn(), u = ie;
          try {
            return Wt(o, !0), e.apply(this, arguments);
          } catch (l) {
            n && n(l);
          } finally {
            Wt(u, !1), i && bn();
          }
        };
      }
      M(ne.prototype, { then: qr, _then: function(e, n) {
        Vr(this, new qo(null, null, e, n, ie));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(i) {
          return (i instanceof n ? o : er)(i);
        }) : this.then(null, function(i) {
          return (i && i.name === n ? o : er)(i);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ne.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ne.resolve(e()).then(function() {
            return er(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ne(function(i, u) {
          var l = setTimeout(function() {
            return u(new $.Timeout(n));
          }, e);
          o.then(i, u).finally(clearTimeout.bind(null, l));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && Y(ne.prototype, Symbol.toStringTag, "Dexie.Promise"), lt.env = Vo(), M(ne, { all: function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n, o) {
          e.length === 0 && n([]);
          var i = e.length;
          e.forEach(function(u, l) {
            return ne.resolve(u).then(function(p) {
              e[l] = p, --i || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ne ? e : e && typeof e.then == "function" ? new ne(function(n, o) {
          e.then(n, o);
        }) : new ne(_e, !0, e);
      }, reject: er, race: function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n, o) {
          e.map(function(i) {
            return ne.resolve(i).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return ie;
      }, set: function(e) {
        return ie = e;
      } }, totalEchoes: { get: function() {
        return rr;
      } }, newPSD: Ut, usePSD: an, scheduler: { get: function() {
        return vt;
      }, set: function(e) {
        vt = e;
      } }, rejectionMapper: { get: function() {
        return Vn;
      }, set: function(e) {
        Vn = e;
      } }, follow: function(e, n) {
        return new ne(function(o, i) {
          return Ut(function(u, l) {
            var p = ie;
            p.unhandleds = [], p.onunhandled = l, p.finalize = se(function() {
              var m, y = this;
              m = function() {
                y.unhandleds.length === 0 ? u() : l(y.unhandleds[0]);
              }, Zn.push(function b() {
                m(), Zn.splice(Zn.indexOf(b), 1);
              }), ++on, vt(function() {
                --on == 0 && Wr();
              }, []);
            }, p.finalize), e();
          }, n, o, i);
        });
      } }), We && (We.allSettled && Y(ne, "allSettled", function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n) {
          e.length === 0 && n([]);
          var o = e.length, i = new Array(o);
          e.forEach(function(u, l) {
            return ne.resolve(u).then(function(p) {
              return i[l] = { status: "fulfilled", value: p };
            }, function(p) {
              return i[l] = { status: "rejected", reason: p };
            }).then(function() {
              return --o || n(i);
            });
          });
        });
      }), We.any && typeof AggregateError < "u" && Y(ne, "any", function() {
        var e = pt.apply(null, arguments).map(or);
        return new ne(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var i = e.length, u = new Array(i);
          e.forEach(function(l, p) {
            return ne.resolve(l).then(function(m) {
              return n(m);
            }, function(m) {
              u[p] = m, --i || o(new AggregateError(u));
            });
          });
        });
      }), We.withResolvers && (ne.withResolvers = We.withResolvers));
      var ze = { awaits: 0, echoes: 0, id: 0 }, Sa = 0, tr = [], nr = 0, rr = 0, Da = 0;
      function Ut(e, n, o, i) {
        var u = ie, l = Object.create(u);
        return l.parent = u, l.ref = 0, l.global = !1, l.id = ++Da, lt.env, l.env = Qe ? { Promise: ne, PromiseProp: { value: ne, configurable: !0, writable: !0 }, all: ne.all, race: ne.race, allSettled: ne.allSettled, any: ne.any, resolve: ne.resolve, reject: ne.reject } : {}, n && w(l, n), ++u.ref, l.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, i = an(l, e, o, i), l.ref === 0 && l.finalize(), i;
      }
      function wn() {
        return ze.id || (ze.id = ++Sa), ++ze.awaits, ze.echoes += De, ze.id;
      }
      function Vt() {
        return !!ze.awaits && (--ze.awaits == 0 && (ze.id = 0), ze.echoes = ze.awaits * De, !0);
      }
      function or(e) {
        return ze.echoes && e && e.constructor === We ? (wn(), e.then(function(n) {
          return Vt(), n;
        }, function(n) {
          return Vt(), Ue(n);
        })) : e;
      }
      function Ia() {
        var e = tr[tr.length - 1];
        tr.pop(), Wt(e, !1);
      }
      function Wt(e, n) {
        var o, i = ie;
        (n ? !ze.echoes || nr++ && e === ie : !nr || --nr && e === ie) || queueMicrotask(n ? (function(u) {
          ++rr, ze.echoes && --ze.echoes != 0 || (ze.echoes = ze.awaits = ze.id = 0), tr.push(ie), Wt(u, !0);
        }).bind(null, e) : Ia), e !== ie && (ie = e, i === lt && (lt.env = Vo()), Qe && (o = lt.env.Promise, n = e.env, (i.global || e.global) && (Object.defineProperty(d, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = d.Promise;
        return Qe ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(d, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function an(e, n, o, i, u) {
        var l = ie;
        try {
          return Wt(e, !0), n(o, i, u);
        } finally {
          Wt(l, !1);
        }
      }
      function Wo(e, n, o, i) {
        return typeof e != "function" ? e : function() {
          var u = ie;
          o && wn(), Wt(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Wt(u, !1), i && queueMicrotask(Vt);
          }
        };
      }
      function Gr(e) {
        Promise === We && ze.echoes === 0 ? nr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + xt).indexOf("[native code]") === -1 && (wn = Vt = A);
      var Ue = ne.reject, sn = "￿", Lt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", _n = [], ir = "__dbnames", Hr = "readonly", Yr = "readwrite";
      function un(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function ar(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = ft(n))[e], n;
        };
      }
      function Yo() {
        throw $.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Te(e, n) {
        try {
          var o = Xo(e), i = Xo(n);
          if (o !== i) return o === "Array" ? 1 : i === "Array" ? -1 : o === "binary" ? 1 : i === "binary" ? -1 : o === "string" ? 1 : i === "string" ? -1 : o === "Date" ? 1 : i !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(u, l) {
                for (var p = u.length, m = l.length, y = p < m ? p : m, b = 0; b < y; ++b) if (u[b] !== l[b]) return u[b] < l[b] ? -1 : 1;
                return p === m ? 0 : p < m ? -1 : 1;
              }(Qo(e), Qo(n));
            case "Array":
              return function(u, l) {
                for (var p = u.length, m = l.length, y = p < m ? p : m, b = 0; b < y; ++b) {
                  var N = Te(u[b], l[b]);
                  if (N !== 0) return N;
                }
                return p === m ? 0 : p < m ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function Xo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = Mt(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Qo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function sr(e, n, o) {
        var i = e.schema.yProps;
        return i ? (n && 0 < o.numFailures && (n = n.filter(function(u, l) {
          return !o.failures[l];
        })), Promise.all(i.map(function(u) {
          return u = u.updatesTable, n ? e.db.table(u).where("k").anyOf(n).delete() : e.db.table(u).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var zo = (ke.prototype._trans = function(e, n, o) {
        var i = this._tx || ie.trans, u = this.name, l = le && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function p(b, N, v) {
          if (!v.schema[u]) throw new $.NotFound("Table " + u + " not part of transaction");
          return n(v.idbtrans, v);
        }
        var m = gn();
        try {
          var y = i && i.db._novip === this.db._novip ? i === ie.trans ? i._promise(e, p, o) : Ut(function() {
            return i._promise(e, p, o);
          }, { trans: i, transless: ie.transless || ie }) : function b(N, v, C, g) {
            if (N.idbdb && (N._state.openComplete || ie.letThrough || N._vip)) {
              var _ = N._createTransaction(v, C, N._dbSchema);
              try {
                _.create(), N._state.PR1398_maxLoop = 3;
              } catch (T) {
                return T.name === D.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
                  return b(N, v, C, g);
                })) : Ue(T);
              }
              return _._promise(v, function(T, E) {
                return Ut(function() {
                  return ie.trans = _, g(T, E, _);
                });
              }).then(function(T) {
                if (v === "readwrite") try {
                  _.idbtrans.commit();
                } catch {
                }
                return v === "readonly" ? T : _._completion.then(function() {
                  return T;
                });
              });
            }
            if (N._state.openComplete) return Ue(new $.DatabaseClosed(N._state.dbOpenError));
            if (!N._state.isBeingOpened) {
              if (!N._state.autoOpen) return Ue(new $.DatabaseClosed());
              N.open().catch(A);
            }
            return N._state.dbReadyPromise.then(function() {
              return b(N, v, C, g);
            });
          }(this.db, e, [this.name], p);
          return l && (y._consoleTask = l, y = y.catch(function(b) {
            return console.trace(b), Ue(b);
          })), y;
        } finally {
          m && bn();
        }
      }, ke.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? Ue(new $.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(i) {
          return o.core.get({ trans: i, key: e }).then(function(u) {
            return o.hook.reading.fire(u);
          });
        }).then(n);
      }, ke.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (h(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var n = c(e);
        if (n.length === 1) return this.where(n[0]).equals(e[n[0]]);
        var o = this.schema.indexes.concat(this.schema.primKey).filter(function(m) {
          if (m.compound && n.every(function(b) {
            return 0 <= m.keyPath.indexOf(b);
          })) {
            for (var y = 0; y < n.length; ++y) if (n.indexOf(m.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(m, y) {
          return m.keyPath.length - y.keyPath.length;
        })[0];
        if (o && this.db._maxKey !== sn) {
          var l = o.keyPath.slice(0, n.length);
          return this.where(l).equals(l.map(function(y) {
            return e[y];
          }));
        }
        !o && le && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var i = this.schema.idxByName;
        function u(m, y) {
          return Te(m, y) === 0;
        }
        var p = n.reduce(function(v, y) {
          var b = v[0], N = v[1], v = i[y], C = e[y];
          return [b || v, b || !v ? un(N, v && v.multi ? function(g) {
            return g = ge(g, y), h(g) && g.some(function(_) {
              return u(C, _);
            });
          } : function(g) {
            return u(C, ge(g, y));
          }) : N];
        }, [null, null]), l = p[0], p = p[1];
        return l ? this.where(l.name).equals(e[l.keyPath]).filter(p) : o ? this.filter(p) : this.where(n).equals("");
      }, ke.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, ke.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, ke.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, ke.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, ke.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, ke.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, ke.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, ke.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, h(e) ? "[".concat(e.join("+"), "]") : e));
      }, ke.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, ke.prototype.mapToClass = function(e) {
        var n, o = this.db, i = this.name;
        function u() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Yo && (function(y, b) {
          if (typeof b != "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
          function N() {
            this.constructor = y;
          }
          a(y, b), y.prototype = b === null ? Object.create(b) : (N.prototype = b.prototype, new N());
        }(u, n = e), Object.defineProperty(u.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), u.prototype.table = function() {
          return i;
        }, e = u);
        for (var l = /* @__PURE__ */ new Set(), p = e.prototype; p; p = S(p)) Object.getOwnPropertyNames(p).forEach(function(y) {
          return l.add(y);
        });
        function m(y) {
          if (!y) return y;
          var b, N = Object.create(e.prototype);
          for (b in y) if (!l.has(b)) try {
            N[b] = y[b];
          } catch {
          }
          return N;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = m, this.hook("reading", m), e;
      }, ke.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          w(this, e);
        });
      }, ke.prototype.add = function(e, n) {
        var o = this, i = this.schema.primKey, u = i.auto, l = i.keyPath, p = e;
        return l && u && (p = ar(l)(e)), this._trans("readwrite", function(m) {
          return o.core.mutate({ trans: m, type: "add", keys: n != null ? [n] : null, values: [p] });
        }).then(function(m) {
          return m.numFailures ? ne.reject(m.failures[0]) : m.lastResult;
        }).then(function(m) {
          if (l) try {
            ce(e, l, m);
          } catch {
          }
          return m;
        });
      }, ke.prototype.update = function(e, n) {
        return typeof e != "object" || h(e) ? this.where(":id").equals(e).modify(n) : (e = ge(e, this.schema.primKey.keyPath), e === void 0 ? Ue(new $.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, ke.prototype.put = function(e, n) {
        var o = this, i = this.schema.primKey, u = i.auto, l = i.keyPath, p = e;
        return l && u && (p = ar(l)(e)), this._trans("readwrite", function(m) {
          return o.core.mutate({ trans: m, type: "put", values: [p], keys: n != null ? [n] : null });
        }).then(function(m) {
          return m.numFailures ? ne.reject(m.failures[0]) : m.lastResult;
        }).then(function(m) {
          if (l) try {
            ce(e, l, m);
          } catch {
          }
          return m;
        });
      }, ke.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(i) {
            return sr(n, [e], i);
          }).then(function(i) {
            return i.numFailures ? ne.reject(i.failures[0]) : void 0;
          });
        });
      }, ke.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return sr(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ne.reject(n.failures[0]) : void 0;
        });
      }, ke.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(o) {
          return n.core.getMany({ keys: e, trans: o }).then(function(i) {
            return i.map(function(u) {
              return n.hook.reading.fire(u);
            });
          });
        });
      }, ke.prototype.bulkAdd = function(e, n, o) {
        var i = this, u = Array.isArray(n) ? n : void 0, l = (o = o || (u ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(p) {
          var b = i.schema.primKey, m = b.auto, b = b.keyPath;
          if (b && u) throw new $.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== e.length) throw new $.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, b = b && m ? e.map(ar(b)) : e;
          return i.core.mutate({ trans: p, type: "add", keys: u, values: b, wantResults: l }).then(function(_) {
            var v = _.numFailures, C = _.results, g = _.lastResult, _ = _.failures;
            if (v === 0) return l ? C : g;
            throw new Rt("".concat(i.name, ".bulkAdd(): ").concat(v, " of ").concat(y, " operations failed"), _);
          });
        });
      }, ke.prototype.bulkPut = function(e, n, o) {
        var i = this, u = Array.isArray(n) ? n : void 0, l = (o = o || (u ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(p) {
          var b = i.schema.primKey, m = b.auto, b = b.keyPath;
          if (b && u) throw new $.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (u && u.length !== e.length) throw new $.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, b = b && m ? e.map(ar(b)) : e;
          return i.core.mutate({ trans: p, type: "put", keys: u, values: b, wantResults: l }).then(function(_) {
            var v = _.numFailures, C = _.results, g = _.lastResult, _ = _.failures;
            if (v === 0) return l ? C : g;
            throw new Rt("".concat(i.name, ".bulkPut(): ").concat(v, " of ").concat(y, " operations failed"), _);
          });
        });
      }, ke.prototype.bulkUpdate = function(e) {
        var n = this, o = this.core, i = e.map(function(p) {
          return p.key;
        }), u = e.map(function(p) {
          return p.changes;
        }), l = [];
        return this._trans("readwrite", function(p) {
          return o.getMany({ trans: p, keys: i, cache: "clone" }).then(function(m) {
            var y = [], b = [];
            e.forEach(function(v, C) {
              var g = v.key, _ = v.changes, T = m[C];
              if (T) {
                for (var E = 0, R = Object.keys(_); E < R.length; E++) {
                  var I = R[E], P = _[I];
                  if (I === n.schema.primKey.keyPath) {
                    if (Te(P, g) !== 0) throw new $.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ce(T, I, P);
                }
                l.push(C), y.push(g), b.push(T);
              }
            });
            var N = y.length;
            return o.mutate({ trans: p, type: "put", keys: y, values: b, updates: { keys: i, changeSpecs: u } }).then(function(v) {
              var C = v.numFailures, g = v.failures;
              if (C === 0) return N;
              for (var _ = 0, T = Object.keys(g); _ < T.length; _++) {
                var E, R = T[_], I = l[Number(R)];
                I != null && (E = g[R], delete g[R], g[I] = E);
              }
              throw new Rt("".concat(n.name, ".bulkUpdate(): ").concat(C, " of ").concat(N, " operations failed"), g);
            });
          });
        });
      }, ke.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(i) {
          return n.core.mutate({ trans: i, type: "delete", keys: e }).then(function(u) {
            return sr(n, e, u);
          });
        }).then(function(p) {
          var u = p.numFailures, l = p.lastResult, p = p.failures;
          if (u === 0) return l;
          throw new Rt("".concat(n.name, ".bulkDelete(): ").concat(u, " of ").concat(o, " operations failed"), p);
        });
      }, ke);
      function ke() {
      }
      function In(e) {
        function n(p, m) {
          if (m) {
            for (var y = arguments.length, b = new Array(y - 1); --y; ) b[y - 1] = arguments[y];
            return o[p].subscribe.apply(null, b), e;
          }
          if (typeof p == "string") return o[p];
        }
        var o = {};
        n.addEventType = l;
        for (var i = 1, u = arguments.length; i < u; ++i) l(arguments[i]);
        return n;
        function l(p, m, y) {
          if (typeof p != "object") {
            var b;
            m = m || we;
            var N = { subscribers: [], fire: y = y || A, subscribe: function(v) {
              N.subscribers.indexOf(v) === -1 && (N.subscribers.push(v), N.fire = m(N.fire, v));
            }, unsubscribe: function(v) {
              N.subscribers = N.subscribers.filter(function(C) {
                return C !== v;
              }), N.fire = N.subscribers.reduce(m, y);
            } };
            return o[p] = n[p] = N;
          }
          c(b = p).forEach(function(v) {
            var C = b[v];
            if (h(C)) l(v, b[v][0], b[v][1]);
            else {
              if (C !== "asap") throw new $.InvalidArgument("Invalid event config");
              var g = l(v, q, function() {
                for (var _ = arguments.length, T = new Array(_); _--; ) T[_] = arguments[_];
                g.subscribers.forEach(function(E) {
                  xe(function() {
                    E.apply(null, T);
                  });
                });
              });
            }
          });
        }
      }
      function Pn(e, n) {
        return V(n).from({ prototype: e }), n;
      }
      function xn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function Xr(e, n) {
        e.filter = un(e.filter, n);
      }
      function Qr(e, n, o) {
        var i = e.replayFilter;
        e.replayFilter = i ? function() {
          return un(i(), n());
        } : n, e.justLimit = o && !i;
      }
      function ur(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new $.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Jo(e, n, o) {
        var i = ur(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: i, range: e.range } });
      }
      function lr(e, n, o, i) {
        var u = e.replayFilter ? un(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var l = {}, p = function(m, y, b) {
            var N, v;
            u && !u(y, b, function(C) {
              return y.stop(C);
            }, function(C) {
              return y.fail(C);
            }) || ((v = "" + (N = y.primaryKey)) == "[object ArrayBuffer]" && (v = "" + new Uint8Array(N)), L(l, v) || (l[v] = !0, n(m, y, b)));
          };
          return Promise.all([e.or._iterate(p, o), Zo(Jo(e, i, o), e.algorithm, p, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, i, o), un(e.algorithm, u), n, !e.keysOnly && e.valueMapper);
      }
      function Zo(e, n, o, i) {
        var u = Me(i ? function(l, p, m) {
          return o(i(l), p, m);
        } : o);
        return e.then(function(l) {
          if (l) return l.start(function() {
            var p = function() {
              return l.continue();
            };
            n && !n(l, function(m) {
              return p = m;
            }, function(m) {
              l.stop(m), p = A;
            }, function(m) {
              l.fail(m), p = A;
            }) || u(l.value, l, function(m) {
              return p = m;
            }), p();
          });
        });
      }
      var kn = (ei.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (h(o)) return f(f([], h(e) ? e : [], !0), o).sort();
          if (typeof o == "number") return (Number(e) || 0) + o;
          if (typeof o == "bigint") try {
            return BigInt(e) + o;
          } catch {
            return BigInt(0) + o;
          }
          throw new TypeError("Invalid term ".concat(o));
        }
        if (n.remove !== void 0) {
          var i = n.remove;
          if (h(i)) return h(e) ? e.filter(function(u) {
            return !i.includes(u);
          }).sort() : [];
          if (typeof i == "number") return Number(e) - i;
          if (typeof i == "bigint") try {
            return BigInt(e) - i;
          } catch {
            return BigInt(0) - i;
          }
          throw new TypeError("Invalid subtrahend ".concat(i));
        }
        return o = (o = n.replacePrefix) === null || o === void 0 ? void 0 : o[0], o && typeof e == "string" && e.startsWith(o) ? n.replacePrefix[1] + e.substring(o.length) : e;
      }, ei);
      function ei(e) {
        this["@@propmod"] = e;
      }
      var Pa = (Ae.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, Ue.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Ae.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, Ue.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Ae.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = un(n.algorithm, e);
      }, Ae.prototype._iterate = function(e, n) {
        return lr(this._ctx, e, n, this._ctx.table.core);
      }, Ae.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && w(o, e), n._ctx = o, n;
      }, Ae.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ae.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return lr(n, e, o, n.table.core);
        });
      }, Ae.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var i = n._ctx, u = i.table.core;
          if (xn(i, !0)) return u.count({ trans: o, query: { index: ur(i, u.schema), range: i.range } }).then(function(p) {
            return Math.min(p, i.limit);
          });
          var l = 0;
          return lr(i, function() {
            return ++l, !1;
          }, o, u).then(function() {
            return l;
          });
        }).then(e);
      }, Ae.prototype.sortBy = function(e, n) {
        var o = e.split(".").reverse(), i = o[0], u = o.length - 1;
        function l(y, b) {
          return b ? l(y[o[b]], b - 1) : y[i];
        }
        var p = this._ctx.dir === "next" ? 1 : -1;
        function m(y, b) {
          return Te(l(y, u), l(b, u)) * p;
        }
        return this.toArray(function(y) {
          return y.sort(m);
        }).then(n);
      }, Ae.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var i = n._ctx;
          if (i.dir === "next" && xn(i, !0) && 0 < i.limit) {
            var u = i.valueMapper, l = ur(i, i.table.core.schema);
            return i.table.core.query({ trans: o, limit: i.limit, values: !0, query: { index: l, range: i.range } }).then(function(m) {
              return m = m.result, u ? m.map(u) : m;
            });
          }
          var p = [];
          return lr(i, function(m) {
            return p.push(m);
          }, o, i.table.core).then(function() {
            return p;
          });
        }, e);
      }, Ae.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, xn(n) ? Qr(n, function() {
          var o = e;
          return function(i, u) {
            return o === 0 || (o === 1 ? --o : u(function() {
              i.advance(o), o = 0;
            }), !1);
          };
        }) : Qr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Ae.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, i, u) {
            return --n <= 0 && i(u), 0 <= n;
          };
        }, !0), this;
      }, Ae.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, i, u) {
          return !e(o.value) || (i(u), n);
        }), this;
      }, Ae.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Ae.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ae.prototype.filter = function(e) {
        var n;
        return Xr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = un(n.isMatch, e), this;
      }, Ae.prototype.and = function(e) {
        return this.filter(e);
      }, Ae.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ae.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ae.prototype.desc = function() {
        return this.reverse();
      }, Ae.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, i) {
          e(i.key, i);
        });
      }, Ae.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ae.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, i) {
          e(i.primaryKey, i);
        });
      }, Ae.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(i, u) {
          o.push(u.key);
        }).then(function() {
          return o;
        }).then(e);
      }, Ae.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && xn(n, !0) && 0 < n.limit) return this._read(function(i) {
          var u = ur(n, n.table.core.schema);
          return n.table.core.query({ trans: i, values: !1, limit: n.limit, query: { index: u, range: n.range } });
        }).then(function(i) {
          return i.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(i, u) {
          o.push(u.primaryKey);
        }).then(function() {
          return o;
        }).then(e);
      }, Ae.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ae.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Ae.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ae.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Xr(this._ctx, function(u) {
          var i = u.primaryKey.toString(), u = L(n, i);
          return n[i] = !0, !u;
        }), this;
      }, Ae.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(i) {
          var u, l, p;
          p = typeof e == "function" ? e : (u = c(e), l = u.length, function(R) {
            for (var I = !1, P = 0; P < l; ++P) {
              var k = u[P], H = e[k], J = ge(R, k);
              H instanceof kn ? (ce(R, k, H.execute(J)), I = !0) : J !== H && (ce(R, k, H), I = !0);
            }
            return I;
          });
          var m = o.table.core, v = m.schema.primaryKey, y = v.outbound, b = v.extractKey, N = 200, v = n.db._options.modifyChunkSize;
          v && (N = typeof v == "object" ? v[m.name] || v["*"] || 200 : v);
          function C(R, k) {
            var P = k.failures, k = k.numFailures;
            _ += R - k;
            for (var H = 0, J = c(P); H < J.length; H++) {
              var X = J[H];
              g.push(P[X]);
            }
          }
          var g = [], _ = 0, T = [], E = e === ti;
          return n.clone().primaryKeys().then(function(R) {
            function I(k) {
              var H = Math.min(N, R.length - k), J = R.slice(k, k + H);
              return (E ? Promise.resolve([]) : m.getMany({ trans: i, keys: J, cache: "immutable" })).then(function(X) {
                var z = [], te = [], ee = y ? [] : null, re = E ? J : [];
                if (!E) for (var be = 0; be < H; ++be) {
                  var Oe = X[be], ve = { value: ft(Oe), primKey: R[k + be] };
                  p.call(ve, ve.value, ve) !== !1 && (ve.value == null ? re.push(R[k + be]) : y || Te(b(Oe), b(ve.value)) === 0 ? (te.push(ve.value), y && ee.push(R[k + be])) : (re.push(R[k + be]), z.push(ve.value)));
                }
                return Promise.resolve(0 < z.length && m.mutate({ trans: i, type: "add", values: z }).then(function(Ke) {
                  for (var me in Ke.failures) re.splice(parseInt(me), 1);
                  C(z.length, Ke);
                })).then(function() {
                  return (0 < te.length || P && typeof e == "object") && m.mutate({ trans: i, type: "put", keys: ee, values: te, criteria: P, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < k }).then(function(Ke) {
                    return C(te.length, Ke);
                  });
                }).then(function() {
                  return (0 < re.length || P && E) && m.mutate({ trans: i, type: "delete", keys: re, criteria: P, isAdditionalChunk: 0 < k }).then(function(Ke) {
                    return sr(o.table, re, Ke);
                  }).then(function(Ke) {
                    return C(re.length, Ke);
                  });
                }).then(function() {
                  return R.length > k + H && I(k + N);
                });
              });
            }
            var P = xn(o) && o.limit === 1 / 0 && (typeof e != "function" || E) && { index: o.index, range: o.range };
            return I(0).then(function() {
              if (0 < g.length) throw new vn("Error modifying one or more objects", g, _, T);
              return R.length;
            });
          });
        });
      }, Ae.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !xn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ti) : this._write(function(o) {
          var i = e.table.core.schema.primaryKey, u = n;
          return e.table.core.count({ trans: o, query: { index: i, range: u } }).then(function(l) {
            return e.table.core.mutate({ trans: o, type: "deleteRange", range: u }).then(function(y) {
              var m = y.failures, y = y.numFailures;
              if (y) throw new vn("Could not delete some values", Object.keys(m).map(function(b) {
                return m[b];
              }), l - y);
              return l - y;
            });
          });
        });
      }, Ae);
      function Ae() {
      }
      var ti = function(e, n) {
        return n.value = null;
      };
      function ka(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function La(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function mt(e, n, o) {
        return e = e instanceof ri ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function Nn(e) {
        return new e.Collection(e, function() {
          return ni("");
        }).limit(0);
      }
      function cr(e, n, o, i) {
        var u, l, p, m, y, b, N, v = o.length;
        if (!o.every(function(_) {
          return typeof _ == "string";
        })) return mt(e, Go);
        function C(_) {
          u = _ === "next" ? function(E) {
            return E.toUpperCase();
          } : function(E) {
            return E.toLowerCase();
          }, l = _ === "next" ? function(E) {
            return E.toLowerCase();
          } : function(E) {
            return E.toUpperCase();
          }, p = _ === "next" ? ka : La;
          var T = o.map(function(E) {
            return { lower: l(E), upper: u(E) };
          }).sort(function(E, R) {
            return p(E.lower, R.lower);
          });
          m = T.map(function(E) {
            return E.upper;
          }), y = T.map(function(E) {
            return E.lower;
          }), N = (b = _) === "next" ? "" : i;
        }
        C("next"), e = new e.Collection(e, function() {
          return Gt(m[0], y[v - 1] + i);
        }), e._ondirectionchange = function(_) {
          C(_);
        };
        var g = 0;
        return e._addAlgorithm(function(_, T, E) {
          var R = _.key;
          if (typeof R != "string") return !1;
          var I = l(R);
          if (n(I, y, g)) return !0;
          for (var P = null, k = g; k < v; ++k) {
            var H = function(J, X, z, te, ee, re) {
              for (var be = Math.min(J.length, te.length), Oe = -1, ve = 0; ve < be; ++ve) {
                var Ke = X[ve];
                if (Ke !== te[ve]) return ee(J[ve], z[ve]) < 0 ? J.substr(0, ve) + z[ve] + z.substr(ve + 1) : ee(J[ve], te[ve]) < 0 ? J.substr(0, ve) + te[ve] + z.substr(ve + 1) : 0 <= Oe ? J.substr(0, Oe) + X[Oe] + z.substr(Oe + 1) : null;
                ee(J[ve], Ke) < 0 && (Oe = ve);
              }
              return be < te.length && re === "next" ? J + z.substr(J.length) : be < J.length && re === "prev" ? J.substr(0, z.length) : Oe < 0 ? null : J.substr(0, Oe) + te[Oe] + z.substr(Oe + 1);
            }(R, I, m[k], y[k], p, b);
            H === null && P === null ? g = k + 1 : (P === null || 0 < p(P, H)) && (P = H);
          }
          return T(P !== null ? function() {
            _.continue(P + N);
          } : E), !1;
        }), e;
      }
      function Gt(e, n, o, i) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: i };
      }
      function ni(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ri = (Object.defineProperty(Je.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Je.prototype.between = function(e, n, o, i) {
        o = o !== !1, i = i === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || i) && (!o || !i) ? Nn(this) : new this.Collection(this, function() {
            return Gt(e, n, !o, !i);
          });
        } catch {
          return mt(this, Lt);
        }
      }, Je.prototype.equals = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return ni(e);
        });
      }, Je.prototype.above = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(e, void 0, !0);
        });
      }, Je.prototype.aboveOrEqual = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(e, void 0, !1);
        });
      }, Je.prototype.below = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(void 0, e, !1, !0);
        });
      }, Je.prototype.belowOrEqual = function(e) {
        return e == null ? mt(this, Lt) : new this.Collection(this, function() {
          return Gt(void 0, e);
        });
      }, Je.prototype.startsWith = function(e) {
        return typeof e != "string" ? mt(this, Go) : this.between(e, e + sn, !0, !0);
      }, Je.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : cr(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], sn);
      }, Je.prototype.equalsIgnoreCase = function(e) {
        return cr(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, Je.prototype.anyOfIgnoreCase = function() {
        var e = pt.apply(_t, arguments);
        return e.length === 0 ? Nn(this) : cr(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, Je.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = pt.apply(_t, arguments);
        return e.length === 0 ? Nn(this) : cr(this, function(n, o) {
          return o.some(function(i) {
            return n.indexOf(i) === 0;
          });
        }, e, sn);
      }, Je.prototype.anyOf = function() {
        var e = this, n = pt.apply(_t, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return mt(this, Lt);
        }
        if (n.length === 0) return Nn(this);
        var i = new this.Collection(this, function() {
          return Gt(n[0], n[n.length - 1]);
        });
        i._ondirectionchange = function(l) {
          o = l === "next" ? e._ascending : e._descending, n.sort(o);
        };
        var u = 0;
        return i._addAlgorithm(function(l, p, m) {
          for (var y = l.key; 0 < o(y, n[u]); ) if (++u === n.length) return p(m), !1;
          return o(y, n[u]) === 0 || (p(function() {
            l.continue(n[u]);
          }), !1);
        }), i;
      }, Je.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.noneOf = function() {
        var e = pt.apply(_t, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return mt(this, Lt);
        }
        var n = e.reduce(function(o, i) {
          return o ? o.concat([[o[o.length - 1][1], i]]) : [[-1 / 0, i]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, Je.prototype.inAnyRange = function(R, n) {
        var o = this, i = this._cmp, u = this._ascending, l = this._descending, p = this._min, m = this._max;
        if (R.length === 0) return Nn(this);
        if (!R.every(function(I) {
          return I[0] !== void 0 && I[1] !== void 0 && u(I[0], I[1]) <= 0;
        })) return mt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", $.InvalidArgument);
        var y = !n || n.includeLowers !== !1, b = n && n.includeUppers === !0, N, v = u;
        function C(I, P) {
          return v(I[0], P[0]);
        }
        try {
          (N = R.reduce(function(I, P) {
            for (var k = 0, H = I.length; k < H; ++k) {
              var J = I[k];
              if (i(P[0], J[1]) < 0 && 0 < i(P[1], J[0])) {
                J[0] = p(J[0], P[0]), J[1] = m(J[1], P[1]);
                break;
              }
            }
            return k === H && I.push(P), I;
          }, [])).sort(C);
        } catch {
          return mt(this, Lt);
        }
        var g = 0, _ = b ? function(I) {
          return 0 < u(I, N[g][1]);
        } : function(I) {
          return 0 <= u(I, N[g][1]);
        }, T = y ? function(I) {
          return 0 < l(I, N[g][0]);
        } : function(I) {
          return 0 <= l(I, N[g][0]);
        }, E = _, R = new this.Collection(this, function() {
          return Gt(N[0][0], N[N.length - 1][1], !y, !b);
        });
        return R._ondirectionchange = function(I) {
          v = I === "next" ? (E = _, u) : (E = T, l), N.sort(C);
        }, R._addAlgorithm(function(I, P, k) {
          for (var H, J = I.key; E(J); ) if (++g === N.length) return P(k), !1;
          return !_(H = J) && !T(H) || (o._cmp(J, N[g][1]) === 0 || o._cmp(J, N[g][0]) === 0 || P(function() {
            v === u ? I.continue(N[g][0]) : I.continue(N[g][1]);
          }), !1);
        }), R;
      }, Je.prototype.startsWithAnyOf = function() {
        var e = pt.apply(_t, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? Nn(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + sn];
        })) : mt(this, "startsWithAnyOf() only works with strings");
      }, Je);
      function Je() {
      }
      function At(e) {
        return Me(function(n) {
          return Ln(n), e(n.target.error), !1;
        });
      }
      function Ln(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var jn = "storagemutated", zr = "x-storagemutated-1", Ht = In(null, jn), ja = (St.prototype._lock = function() {
        return ae(!ie.global), ++this._reculock, this._reculock !== 1 || ie.global || (ie.lockOwnerFor = this), this;
      }, St.prototype._unlock = function() {
        if (ae(!ie.global), --this._reculock == 0) for (ie.global || (ie.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            an(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, St.prototype._locked = function() {
        return this._reculock && ie.lockOwnerFor !== this;
      }, St.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, i = this.db._state.dbOpenError;
        if (ae(!this.idbtrans), !e && !o) switch (i && i.name) {
          case "DatabaseClosedError":
            throw new $.DatabaseClosed(i);
          case "MissingAPIError":
            throw new $.MissingAPI(i.message, i);
          default:
            throw new $.OpenFailed(i);
        }
        if (!this.active) throw new $.TransactionInactive();
        return ae(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Me(function(u) {
          Ln(u), n._reject(e.error);
        }), e.onabort = Me(function(u) {
          Ln(u), n.active && n._reject(new $.Abort(e.error)), n.active = !1, n.on("abort").fire(u);
        }), e.oncomplete = Me(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Ht.storagemutated.fire(e.mutatedParts);
        }), this;
      }, St.prototype._promise = function(e, n, o) {
        var i = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ue(new $.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new $.TransactionInactive());
        if (this._locked()) return new ne(function(l, p) {
          i._blockedFuncs.push([function() {
            i._promise(e, n, o).then(l, p);
          }, ie]);
        });
        if (o) return Ut(function() {
          var l = new ne(function(p, m) {
            i._lock();
            var y = n(p, m, i);
            y && y.then && y.then(p, m);
          });
          return l.finally(function() {
            return i._unlock();
          }), l._lib = !0, l;
        });
        var u = new ne(function(l, p) {
          var m = n(l, p, i);
          m && m.then && m.then(l, p);
        });
        return u._lib = !0, u;
      }, St.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, St.prototype.waitFor = function(e) {
        var n, o = this._root(), i = ne.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return i;
        }) : (o._waitingFor = i, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function l() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = l);
        }());
        var u = o._waitingFor;
        return new ne(function(l, p) {
          i.then(function(m) {
            return o._waitingQueue.push(Me(l.bind(null, m)));
          }, function(m) {
            return o._waitingQueue.push(Me(p.bind(null, m)));
          }).finally(function() {
            o._waitingFor === u && (o._waitingFor = null);
          });
        });
      }, St.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new $.Abort()));
      }, St.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (L(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new $.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, St);
      function St() {
      }
      function Jr(e, n, o, i, u, l, p, m) {
        return { name: e, keyPath: n, unique: o, multi: i, auto: u, compound: l, src: (o && !p ? "&" : "") + (i ? "*" : "") + (u ? "++" : "") + oi(n), type: m };
      }
      function oi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Zr(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (i = function(u) {
          return [u.name, u];
        }, o.reduce(function(u, l, p) {
          return p = i(l, p), p && (u[p[0]] = p[1]), u;
        }, {})) };
        var i;
      }
      var Fn = function(e) {
        try {
          return e.only([[]]), Fn = function() {
            return [[]];
          }, [[]];
        } catch {
          return Fn = function() {
            return sn;
          }, sn;
        }
      };
      function eo(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return ge(o, n);
        } : function(o) {
          return ge(o, e);
        };
        var n;
      }
      function ii(e) {
        return [].slice.call(e);
      }
      var Fa = 0;
      function Mn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Ma(e, n, y) {
        function i(E) {
          if (E.type === 3) return null;
          if (E.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var g = E.lower, _ = E.upper, T = E.lowerOpen, E = E.upperOpen;
          return g === void 0 ? _ === void 0 ? null : n.upperBound(_, !!E) : _ === void 0 ? n.lowerBound(g, !!T) : n.bound(g, _, !!T, !!E);
        }
        function u(C) {
          var g, _ = C.name;
          return { name: _, schema: C, mutate: function(T) {
            var E = T.trans, R = T.type, I = T.keys, P = T.values, k = T.range;
            return new Promise(function(H, J) {
              H = Me(H);
              var X = E.objectStore(_), z = X.keyPath == null, te = R === "put" || R === "add";
              if (!te && R !== "delete" && R !== "deleteRange") throw new Error("Invalid operation type: " + R);
              var ee, re = (I || P || { length: 1 }).length;
              if (I && P && I.length !== P.length) throw new Error("Given keys array must have same length as given values array.");
              if (re === 0) return H({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function be(ct) {
                ++Ke, Ln(ct);
              }
              var Oe = [], ve = [], Ke = 0;
              if (R === "deleteRange") {
                if (k.type === 4) return H({ numFailures: Ke, failures: ve, results: [], lastResult: void 0 });
                k.type === 3 ? Oe.push(ee = X.clear()) : Oe.push(ee = X.delete(i(k)));
              } else {
                var z = te ? z ? [P, I] : [P, null] : [I, null], me = z[0], ot = z[1];
                if (te) for (var it = 0; it < re; ++it) Oe.push(ee = ot && ot[it] !== void 0 ? X[R](me[it], ot[it]) : X[R](me[it])), ee.onerror = be;
                else for (it = 0; it < re; ++it) Oe.push(ee = X[R](me[it])), ee.onerror = be;
              }
              function xr(ct) {
                ct = ct.target.result, Oe.forEach(function(fn, bo) {
                  return fn.error != null && (ve[bo] = fn.error);
                }), H({ numFailures: Ke, failures: ve, results: R === "delete" ? I : Oe.map(function(fn) {
                  return fn.result;
                }), lastResult: ct });
              }
              ee.onerror = function(ct) {
                be(ct), xr(ct);
              }, ee.onsuccess = xr;
            });
          }, getMany: function(T) {
            var E = T.trans, R = T.keys;
            return new Promise(function(I, P) {
              I = Me(I);
              for (var k, H = E.objectStore(_), J = R.length, X = new Array(J), z = 0, te = 0, ee = function(Oe) {
                Oe = Oe.target, X[Oe._pos] = Oe.result, ++te === z && I(X);
              }, re = At(P), be = 0; be < J; ++be) R[be] != null && ((k = H.get(R[be]))._pos = be, k.onsuccess = ee, k.onerror = re, ++z);
              z === 0 && I(X);
            });
          }, get: function(T) {
            var E = T.trans, R = T.key;
            return new Promise(function(I, P) {
              I = Me(I);
              var k = E.objectStore(_).get(R);
              k.onsuccess = function(H) {
                return I(H.target.result);
              }, k.onerror = At(P);
            });
          }, query: (g = b, function(T) {
            return new Promise(function(E, R) {
              E = Me(E);
              var I, P, k, z = T.trans, H = T.values, J = T.limit, ee = T.query, X = J === 1 / 0 ? void 0 : J, te = ee.index, ee = ee.range, z = z.objectStore(_), te = te.isPrimaryKey ? z : z.index(te.name), ee = i(ee);
              if (J === 0) return E({ result: [] });
              g ? ((X = H ? te.getAll(ee, X) : te.getAllKeys(ee, X)).onsuccess = function(re) {
                return E({ result: re.target.result });
              }, X.onerror = At(R)) : (I = 0, P = !H && "openKeyCursor" in te ? te.openKeyCursor(ee) : te.openCursor(ee), k = [], P.onsuccess = function(re) {
                var be = P.result;
                return be ? (k.push(H ? be.value : be.primaryKey), ++I === J ? E({ result: k }) : void be.continue()) : E({ result: k });
              }, P.onerror = At(R));
            });
          }), openCursor: function(T) {
            var E = T.trans, R = T.values, I = T.query, P = T.reverse, k = T.unique;
            return new Promise(function(H, J) {
              H = Me(H);
              var te = I.index, X = I.range, z = E.objectStore(_), z = te.isPrimaryKey ? z : z.index(te.name), te = P ? k ? "prevunique" : "prev" : k ? "nextunique" : "next", ee = !R && "openKeyCursor" in z ? z.openKeyCursor(i(X), te) : z.openCursor(i(X), te);
              ee.onerror = At(J), ee.onsuccess = Me(function(re) {
                var be, Oe, ve, Ke, me = ee.result;
                me ? (me.___id = ++Fa, me.done = !1, be = me.continue.bind(me), Oe = (Oe = me.continuePrimaryKey) && Oe.bind(me), ve = me.advance.bind(me), Ke = function() {
                  throw new Error("Cursor not stopped");
                }, me.trans = E, me.stop = me.continue = me.continuePrimaryKey = me.advance = function() {
                  throw new Error("Cursor not started");
                }, me.fail = Me(J), me.next = function() {
                  var ot = this, it = 1;
                  return this.start(function() {
                    return it-- ? ot.continue() : ot.stop();
                  }).then(function() {
                    return ot;
                  });
                }, me.start = function(ot) {
                  function it() {
                    if (ee.result) try {
                      ot();
                    } catch (ct) {
                      me.fail(ct);
                    }
                    else me.done = !0, me.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, me.stop();
                  }
                  var xr = new Promise(function(ct, fn) {
                    ct = Me(ct), ee.onerror = At(fn), me.fail = fn, me.stop = function(bo) {
                      me.stop = me.continue = me.continuePrimaryKey = me.advance = Ke, ct(bo);
                    };
                  });
                  return ee.onsuccess = Me(function(ct) {
                    ee.onsuccess = it, it();
                  }), me.continue = be, me.continuePrimaryKey = Oe, me.advance = ve, it(), xr;
                }, H(me)) : H(null);
              }, J);
            });
          }, count: function(T) {
            var E = T.query, R = T.trans, I = E.index, P = E.range;
            return new Promise(function(k, H) {
              var J = R.objectStore(_), X = I.isPrimaryKey ? J : J.index(I.name), J = i(P), X = J ? X.count(J) : X.count();
              X.onsuccess = Me(function(z) {
                return k(z.target.result);
              }), X.onerror = At(H);
            });
          } };
        }
        var l, p, m, N = (p = y, m = ii((l = e).objectStoreNames), { schema: { name: l.name, tables: m.map(function(C) {
          return p.objectStore(C);
        }).map(function(C) {
          var g = C.keyPath, E = C.autoIncrement, _ = h(g), T = {}, E = { name: C.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: g == null, compound: _, keyPath: g, autoIncrement: E, unique: !0, extractKey: eo(g) }, indexes: ii(C.indexNames).map(function(R) {
            return C.index(R);
          }).map(function(k) {
            var I = k.name, P = k.unique, H = k.multiEntry, k = k.keyPath, H = { name: I, compound: h(k), keyPath: k, unique: P, multiEntry: H, extractKey: eo(k) };
            return T[Mn(k)] = H;
          }), getIndexByKeyPath: function(R) {
            return T[Mn(R)];
          } };
          return T[":id"] = E.primaryKey, g != null && (T[Mn(g)] = E.primaryKey), E;
        }) }, hasGetAll: 0 < m.length && "getAll" in p.objectStore(m[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = N.schema, b = N.hasGetAll, N = y.tables.map(u), v = {};
        return N.forEach(function(C) {
          return v[C.name] = C;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(C) {
          if (!v[C]) throw new Error("Table '".concat(C, "' not found"));
          return v[C];
        }, MIN_KEY: -1 / 0, MAX_KEY: Fn(n), schema: y };
      }
      function Ka(e, n, o, i) {
        var u = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (i = Ma(n, u, i), e.dbcore.reduce(function(l, p) {
          return p = p.create, s(s({}, l), p(l));
        }, i)) };
      }
      function fr(e, i) {
        var o = i.db, i = Ka(e._middlewares, o, e._deps, i);
        e.core = i.dbcore, e.tables.forEach(function(u) {
          var l = u.name;
          e.core.schema.tables.some(function(p) {
            return p.name === l;
          }) && (u.core = e.core.table(l), e[l] instanceof e.Table && (e[l].core = u.core));
        });
      }
      function dr(e, n, o, i) {
        o.forEach(function(u) {
          var l = i[u];
          n.forEach(function(p) {
            var m = function y(b, N) {
              return U(b, N) || (b = S(b)) && y(b, N);
            }(p, u);
            (!m || "value" in m && m.value === void 0) && (p === e.Transaction.prototype || p instanceof e.Transaction ? Y(p, u, { get: function() {
              return this.table(u);
            }, set: function(y) {
              B(this, u, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : p[u] = new e.Table(u, l));
          });
        });
      }
      function to(e, n) {
        n.forEach(function(o) {
          for (var i in o) o[i] instanceof e.Table && delete o[i];
        });
      }
      function Ba(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function $a(e, n, o, i) {
        var u = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !u.$meta && (u.$meta = Zr("$meta", si("")[0], []), e._storeNames.push("$meta"));
        var l = e._createTransaction("readwrite", e._storeNames, u);
        l.create(o), l._completion.catch(i);
        var p = l._reject.bind(l), m = ie.transless || ie;
        Ut(function() {
          return ie.trans = l, ie.transless = m, n !== 0 ? (fr(e, o), b = n, ((y = l).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(N) {
            return N ?? b;
          }) : ne.resolve(b)).then(function(N) {
            return C = N, g = l, _ = o, T = [], N = (v = e)._versions, E = v._dbSchema = hr(0, v.idbdb, _), (N = N.filter(function(R) {
              return R._cfg.version >= C;
            })).length !== 0 ? (N.forEach(function(R) {
              T.push(function() {
                var I = E, P = R._cfg.dbschema;
                mr(v, I, _), mr(v, P, _), E = v._dbSchema = P;
                var k = no(I, P);
                k.add.forEach(function(te) {
                  ro(_, te[0], te[1].primKey, te[1].indexes);
                }), k.change.forEach(function(te) {
                  if (te.recreate) throw new $.Upgrade("Not yet support for changing primary key");
                  var ee = _.objectStore(te.name);
                  te.add.forEach(function(re) {
                    return pr(ee, re);
                  }), te.change.forEach(function(re) {
                    ee.deleteIndex(re.name), pr(ee, re);
                  }), te.del.forEach(function(re) {
                    return ee.deleteIndex(re);
                  });
                });
                var H = R._cfg.contentUpgrade;
                if (H && R._cfg.version > C) {
                  fr(v, _), g._memoizedTables = {};
                  var J = Ne(P);
                  k.del.forEach(function(te) {
                    J[te] = I[te];
                  }), to(v, [v.Transaction.prototype]), dr(v, [v.Transaction.prototype], c(J), J), g.schema = J;
                  var X, z = Et(H);
                  return z && wn(), k = ne.follow(function() {
                    var te;
                    (X = H(g)) && z && (te = Vt.bind(null, null), X.then(te, te));
                  }), X && typeof X.then == "function" ? ne.resolve(X) : k.then(function() {
                    return X;
                  });
                }
              }), T.push(function(I) {
                var P, k, H = R._cfg.dbschema;
                P = H, k = I, [].slice.call(k.db.objectStoreNames).forEach(function(J) {
                  return P[J] == null && k.db.deleteObjectStore(J);
                }), to(v, [v.Transaction.prototype]), dr(v, [v.Transaction.prototype], v._storeNames, v._dbSchema), g.schema = v._dbSchema;
              }), T.push(function(I) {
                v.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(v.idbdb.version / 10) === R._cfg.version ? (v.idbdb.deleteObjectStore("$meta"), delete v._dbSchema.$meta, v._storeNames = v._storeNames.filter(function(P) {
                  return P !== "$meta";
                })) : I.objectStore("$meta").put(R._cfg.version, "version"));
              });
            }), function R() {
              return T.length ? ne.resolve(T.shift()(g.idbtrans)).then(R) : ne.resolve();
            }().then(function() {
              ai(E, _);
            })) : ne.resolve();
            var v, C, g, _, T, E;
          }).catch(p)) : (c(u).forEach(function(N) {
            ro(o, N, u[N].primKey, u[N].indexes);
          }), fr(e, o), void ne.follow(function() {
            return e.on.populate.fire(l);
          }).catch(p));
          var y, b;
        });
      }
      function qa(e, n) {
        ai(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = hr(0, e.idbdb, n);
        mr(e, e._dbSchema, n);
        for (var i = 0, u = no(o, e._dbSchema).change; i < u.length; i++) {
          var l = function(p) {
            if (p.change.length || p.recreate) return console.warn("Unable to patch indexes of table ".concat(p.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var m = n.objectStore(p.name);
            p.add.forEach(function(y) {
              le && console.debug("Dexie upgrade patch: Creating missing index ".concat(p.name, ".").concat(y.src)), pr(m, y);
            });
          }(u[i]);
          if (typeof l == "object") return l.value;
        }
      }
      function no(e, n) {
        var o, i = { del: [], add: [], change: [] };
        for (o in e) n[o] || i.del.push(o);
        for (o in n) {
          var u = e[o], l = n[o];
          if (u) {
            var p = { name: o, def: l, recreate: !1, del: [], add: [], change: [] };
            if ("" + (u.primKey.keyPath || "") != "" + (l.primKey.keyPath || "") || u.primKey.auto !== l.primKey.auto) p.recreate = !0, i.change.push(p);
            else {
              var m = u.idxByName, y = l.idxByName, b = void 0;
              for (b in m) y[b] || p.del.push(b);
              for (b in y) {
                var N = m[b], v = y[b];
                N ? N.src !== v.src && p.change.push(v) : p.add.push(v);
              }
              (0 < p.del.length || 0 < p.add.length || 0 < p.change.length) && i.change.push(p);
            }
          } else i.add.push([o, l]);
        }
        return i;
      }
      function ro(e, n, o, i) {
        var u = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return i.forEach(function(l) {
          return pr(u, l);
        }), u;
      }
      function ai(e, n) {
        c(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (le && console.debug("Dexie: Creating missing table", o), ro(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function pr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function hr(e, n, o) {
        var i = {};
        return F(n.objectStoreNames, 0).forEach(function(u) {
          for (var l = o.objectStore(u), p = Jr(oi(b = l.keyPath), b || "", !0, !1, !!l.autoIncrement, b && typeof b != "string", !0), m = [], y = 0; y < l.indexNames.length; ++y) {
            var N = l.index(l.indexNames[y]), b = N.keyPath, N = Jr(N.name, b, !!N.unique, !!N.multiEntry, !1, b && typeof b != "string", !1);
            m.push(N);
          }
          i[u] = Zr(u, p, m);
        }), i;
      }
      function mr(e, n, o) {
        for (var i = o.db.objectStoreNames, u = 0; u < i.length; ++u) {
          var l = i[u], p = o.objectStore(l);
          e._hasGetAll = "getAll" in p;
          for (var m = 0; m < p.indexNames.length; ++m) {
            var y = p.indexNames[m], b = p.index(y).keyPath, N = typeof b == "string" ? b : "[" + F(b).join("+") + "]";
            !n[l] || (b = n[l].idxByName[N]) && (b.name = y, delete n[l].idxByName[N], n[l].idxByName[y] = b);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && d.WorkerGlobalScope && d instanceof d.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function si(e) {
        return e.split(",").map(function(n, o) {
          var l = n.split(":"), i = (u = l[1]) === null || u === void 0 ? void 0 : u.trim(), u = (n = l[0].trim()).replace(/([&*]|\+\+)/g, ""), l = /^\[/.test(u) ? u.match(/^\[(.*)\]$/)[1].split("+") : u;
          return Jr(u, l || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), h(l), o === 0, i);
        });
      }
      var Ua = (En.prototype._createTableSchema = Zr, En.prototype._parseIndexSyntax = si, En.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        c(e).forEach(function(i) {
          if (e[i] !== null) {
            var u = o._parseIndexSyntax(e[i]), l = u.shift();
            if (!l) throw new $.Schema("Invalid schema for table " + i + ": " + e[i]);
            if (l.unique = !0, l.multi) throw new $.Schema("Primary key cannot be multiEntry*");
            u.forEach(function(p) {
              if (p.auto) throw new $.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!p.keyPath) throw new $.Schema("Index must have a name and cannot be an empty string");
            }), u = o._createTableSchema(i, l, u), n[i] = u;
          }
        });
      }, En.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? w(this._cfg.storesSource, o) : o;
        var o = n._versions, i = {}, u = {};
        return o.forEach(function(l) {
          w(i, l._cfg.storesSource), u = l._cfg.dbschema = {}, l._parseStoresSpec(i, u);
        }), n._dbSchema = u, to(n, [n._allTables, n, n.Transaction.prototype]), dr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], c(u), u), n._storeNames = c(u), this;
      }, En.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = he(this._cfg.contentUpgrade || A, e), this;
      }, En);
      function En() {
      }
      function oo(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new jt(ir, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function ao(e) {
        return Ut(function() {
          return ie.letThrough = !0, e();
        });
      }
      function so(e) {
        return !("from" in e);
      }
      var rt = function(e, n) {
        if (!this) {
          var o = new rt();
          return e && "d" in e && w(o, e), o;
        }
        w(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Kn(e, n, o) {
        var i = Te(n, o);
        if (!isNaN(i)) {
          if (0 < i) throw RangeError();
          if (so(e)) return w(e, { from: n, to: o, d: 1 });
          var u = e.l, i = e.r;
          if (Te(o, e.from) < 0) return u ? Kn(u, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, li(e);
          if (0 < Te(n, e.to)) return i ? Kn(i, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, li(e);
          Te(n, e.from) < 0 && (e.from = n, e.l = null, e.d = i ? i.d + 1 : 1), 0 < Te(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, u && !e.l && Bn(e, u), i && o && Bn(e, i);
        }
      }
      function Bn(e, n) {
        so(n) || function o(i, y) {
          var l = y.from, p = y.to, m = y.l, y = y.r;
          Kn(i, l, p), m && o(i, m), y && o(i, y);
        }(e, n);
      }
      function ui(e, n) {
        var o = vr(n), i = o.next();
        if (i.done) return !1;
        for (var u = i.value, l = vr(e), p = l.next(u.from), m = p.value; !i.done && !p.done; ) {
          if (Te(m.from, u.to) <= 0 && 0 <= Te(m.to, u.from)) return !0;
          Te(u.from, m.from) < 0 ? u = (i = o.next(m.from)).value : m = (p = l.next(u.from)).value;
        }
        return !1;
      }
      function vr(e) {
        var n = so(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var i = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, i) for (; n.n.l && Te(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !i || Te(o, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function li(e) {
        var n, o, i = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), u = 1 < i ? "r" : i < -1 ? "l" : "";
        u && (n = u == "r" ? "l" : "r", o = s({}, e), i = e[u], e.from = i.from, e.to = i.to, e[u] = i[u], o[u] = i[n], (e[n] = o).d = ci(o)), e.d = ci(e);
      }
      function ci(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function yr(e, n) {
        return c(n).forEach(function(o) {
          e[o] ? Bn(e[o], n[o]) : e[o] = function i(u) {
            var l, p, m = {};
            for (l in u) L(u, l) && (p = u[l], m[l] = !p || typeof p != "object" || nt.has(p.constructor) ? p : i(p));
            return m;
          }(n[o]);
        }), e;
      }
      function uo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && ui(n[o], e[o]);
        });
      }
      M(rt.prototype, ((xt = { add: function(e) {
        return Bn(this, e), this;
      }, addKey: function(e) {
        return Kn(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return Kn(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = vr(this).next(e).value;
        return n && Te(n.from, e) <= 0 && 0 <= Te(n.to, e);
      } })[ut] = function() {
        return vr(this);
      }, xt));
      var ln = {}, lo = {}, co = !1;
      function gr(e) {
        yr(lo, e), co || (co = !0, setTimeout(function() {
          co = !1, fo(lo, !(lo = {}));
        }, 0));
      }
      function fo(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var i = 0, u = Object.values(ln); i < u.length; i++) fi(p = u[i], e, o, n);
        else for (var l in e) {
          var p, m = /^idb\:\/\/(.*)\/(.*)\//.exec(l);
          m && (l = m[1], m = m[2], (p = ln["idb://".concat(l, "/").concat(m)]) && fi(p, e, o, n));
        }
        o.forEach(function(y) {
          return y();
        });
      }
      function fi(e, n, o, i) {
        for (var u = [], l = 0, p = Object.entries(e.queries.query); l < p.length; l++) {
          for (var m = p[l], y = m[0], b = [], N = 0, v = m[1]; N < v.length; N++) {
            var C = v[N];
            uo(n, C.obsSet) ? C.subscribers.forEach(function(E) {
              return o.add(E);
            }) : i && b.push(C);
          }
          i && u.push([y, b]);
        }
        if (i) for (var g = 0, _ = u; g < _.length; g++) {
          var T = _[g], y = T[0], b = T[1];
          e.queries.query[y] = b;
        }
      }
      function Va(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? Ue(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var i = n.openCanceller, u = Math.round(10 * e.verno), l = !1;
        function p() {
          if (n.openCanceller !== i) throw new $.DatabaseClosed("db.open() was cancelled");
        }
        function m() {
          return new ne(function(C, g) {
            if (p(), !o) throw new $.MissingAPI();
            var _ = e.name, T = n.autoSchema || !u ? o.open(_) : o.open(_, u);
            if (!T) throw new $.MissingAPI();
            T.onerror = At(g), T.onblocked = Me(e._fireOnBlocked), T.onupgradeneeded = Me(function(E) {
              var R;
              N = T.transaction, n.autoSchema && !e._options.allowEmptyDB ? (T.onerror = Ln, N.abort(), T.result.close(), (R = o.deleteDatabase(_)).onsuccess = R.onerror = Me(function() {
                g(new $.NoSuchDatabase("Database ".concat(_, " doesnt exist")));
              })) : (N.onerror = At(g), E = E.oldVersion > Math.pow(2, 62) ? 0 : E.oldVersion, v = E < 1, e.idbdb = T.result, l && qa(e, N), $a(e, E / 10, N, g));
            }, g), T.onsuccess = Me(function() {
              N = null;
              var E, R, I, P, k, H = e.idbdb = T.result, J = F(H.objectStoreNames);
              if (0 < J.length) try {
                var X = H.transaction((P = J).length === 1 ? P[0] : P, "readonly");
                if (n.autoSchema) R = H, I = X, (E = e).verno = R.version / 10, I = E._dbSchema = hr(0, R, I), E._storeNames = F(R.objectStoreNames, 0), dr(E, [E._allTables], c(I), I);
                else if (mr(e, e._dbSchema, X), ((k = no(hr(0, (k = e).idbdb, X), k._dbSchema)).add.length || k.change.some(function(z) {
                  return z.add.length || z.change.length;
                })) && !l) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), H.close(), u = H.version + 1, l = !0, C(m());
                fr(e, X);
              } catch {
              }
              _n.push(e), H.onversionchange = Me(function(z) {
                n.vcFired = !0, e.on("versionchange").fire(z);
              }), H.onclose = Me(function(z) {
                e.on("close").fire(z);
              }), v && (k = e._deps, X = _, H = k.indexedDB, k = k.IDBKeyRange, io(H) || X === ir || oo(H, k).put({ name: X }).catch(A)), C();
            }, g);
          }).catch(function(C) {
            switch (C?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), m();
                break;
              case "VersionError":
                if (0 < u) return u = 0, m();
            }
            return ne.reject(C);
          });
        }
        var y, b = n.dbReadyResolve, N = null, v = !1;
        return ne.race([i, (typeof navigator > "u" ? ne.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(C) {
          function g() {
            return indexedDB.databases().finally(C);
          }
          y = setInterval(g, 100), g();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(m)]).then(function() {
          return p(), n.onReadyBeingFired = [], ne.resolve(ao(function() {
            return e.on.ready.fire(e.vip);
          })).then(function C() {
            if (0 < n.onReadyBeingFired.length) {
              var g = n.onReadyBeingFired.reduce(he, A);
              return n.onReadyBeingFired = [], ne.resolve(ao(function() {
                return g(e.vip);
              })).then(C);
            }
          });
        }).finally(function() {
          n.openCanceller === i && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(C) {
          n.dbOpenError = C;
          try {
            N && N.abort();
          } catch {
          }
          return i === n.openCanceller && e._close(), Ue(C);
        }).finally(function() {
          n.openComplete = !0, b();
        }).then(function() {
          var C;
          return v && (C = {}, e.tables.forEach(function(g) {
            g.schema.indexes.forEach(function(_) {
              _.name && (C["idb://".concat(e.name, "/").concat(g.name, "/").concat(_.name)] = new rt(-1 / 0, [[[]]]));
            }), C["idb://".concat(e.name, "/").concat(g.name, "/")] = C["idb://".concat(e.name, "/").concat(g.name, "/:dels")] = new rt(-1 / 0, [[[]]]);
          }), Ht(jn).fire(C), fo(C, !0)), e;
        });
      }
      function po(e) {
        function n(l) {
          return e.next(l);
        }
        var o = u(n), i = u(function(l) {
          return e.throw(l);
        });
        function u(l) {
          return function(y) {
            var m = l(y), y = m.value;
            return m.done ? y : y && typeof y.then == "function" ? y.then(o, i) : h(y) ? Promise.all(y).then(o, i) : o(y);
          };
        }
        return u(n)();
      }
      function br(e, n, o) {
        for (var i = h(e) ? e.slice() : [e], u = 0; u < o; ++u) i.push(n);
        return i;
      }
      var Wa = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), i = o.schema, u = {}, l = [];
          function p(v, C, g) {
            var _ = Mn(v), T = u[_] = u[_] || [], E = v == null ? 0 : typeof v == "string" ? 1 : v.length, R = 0 < C, R = s(s({}, g), { name: R ? "".concat(_, "(virtual-from:").concat(g.name, ")") : g.name, lowLevelIndex: g, isVirtual: R, keyTail: C, keyLength: E, extractKey: eo(v), unique: !R && g.unique });
            return T.push(R), R.isPrimaryKey || l.push(R), 1 < E && p(E === 2 ? v[0] : v.slice(0, E - 1), C + 1, g), T.sort(function(I, P) {
              return I.keyTail - P.keyTail;
            }), R;
          }
          n = p(i.primaryKey.keyPath, 0, i.primaryKey), u[":id"] = [n];
          for (var m = 0, y = i.indexes; m < y.length; m++) {
            var b = y[m];
            p(b.keyPath, 0, b);
          }
          function N(v) {
            var C, g = v.query.index;
            return g.isVirtual ? s(s({}, v), { query: { index: g.lowLevelIndex, range: (C = v.query.range, g = g.keyTail, { type: C.type === 1 ? 2 : C.type, lower: br(C.lower, C.lowerOpen ? e.MAX_KEY : e.MIN_KEY, g), lowerOpen: !0, upper: br(C.upper, C.upperOpen ? e.MIN_KEY : e.MAX_KEY, g), upperOpen: !0 }) } }) : v;
          }
          return s(s({}, o), { schema: s(s({}, i), { primaryKey: n, indexes: l, getIndexByKeyPath: function(v) {
            return (v = u[Mn(v)]) && v[0];
          } }), count: function(v) {
            return o.count(N(v));
          }, query: function(v) {
            return o.query(N(v));
          }, openCursor: function(v) {
            var C = v.query.index, g = C.keyTail, _ = C.isVirtual, T = C.keyLength;
            return _ ? o.openCursor(N(v)).then(function(R) {
              return R && E(R);
            }) : o.openCursor(v);
            function E(R) {
              return Object.create(R, { continue: { value: function(I) {
                I != null ? R.continue(br(I, v.reverse ? e.MAX_KEY : e.MIN_KEY, g)) : v.unique ? R.continue(R.key.slice(0, T).concat(v.reverse ? e.MIN_KEY : e.MAX_KEY, g)) : R.continue();
              } }, continuePrimaryKey: { value: function(I, P) {
                R.continuePrimaryKey(br(I, e.MAX_KEY, g), P);
              } }, primaryKey: { get: function() {
                return R.primaryKey;
              } }, key: { get: function() {
                var I = R.key;
                return T === 1 ? I[0] : I.slice(0, T);
              } }, value: { get: function() {
                return R.value;
              } } });
            }
          } });
        } });
      } };
      function ho(e, n, o, i) {
        return o = o || {}, i = i || "", c(e).forEach(function(u) {
          var l, p, m;
          L(n, u) ? (l = e[u], p = n[u], typeof l == "object" && typeof p == "object" && l && p ? (m = Mt(l)) !== Mt(p) ? o[i + u] = n[u] : m === "Object" ? ho(l, p, o, i + u + ".") : l !== p && (o[i + u] = n[u]) : l !== p && (o[i + u] = n[u])) : o[i + u] = void 0;
        }), c(n).forEach(function(u) {
          L(e, u) || (o[i + u] = n[u]);
        }), o;
      }
      function mo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var Ga = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return s(s({}, e), { table: function(n) {
          var o = e.table(n), i = o.schema.primaryKey;
          return s(s({}, o), { mutate: function(u) {
            var l = ie.trans, p = l.table(n).hook, m = p.deleting, y = p.creating, b = p.updating;
            switch (u.type) {
              case "add":
                if (y.fire === A) break;
                return l._promise("readwrite", function() {
                  return N(u);
                }, !0);
              case "put":
                if (y.fire === A && b.fire === A) break;
                return l._promise("readwrite", function() {
                  return N(u);
                }, !0);
              case "delete":
                if (m.fire === A) break;
                return l._promise("readwrite", function() {
                  return N(u);
                }, !0);
              case "deleteRange":
                if (m.fire === A) break;
                return l._promise("readwrite", function() {
                  return function v(C, g, _) {
                    return o.query({ trans: C, values: !1, query: { index: i, range: g }, limit: _ }).then(function(T) {
                      var E = T.result;
                      return N({ type: "delete", keys: E, trans: C }).then(function(R) {
                        return 0 < R.numFailures ? Promise.reject(R.failures[0]) : E.length < _ ? { failures: [], numFailures: 0, lastResult: void 0 } : v(C, s(s({}, g), { lower: E[E.length - 1], lowerOpen: !0 }), _);
                      });
                    });
                  }(u.trans, u.range, 1e4);
                }, !0);
            }
            return o.mutate(u);
            function N(v) {
              var C, g, _, T = ie.trans, E = v.keys || mo(i, v);
              if (!E) throw new Error("Keys missing");
              return (v = v.type === "add" || v.type === "put" ? s(s({}, v), { keys: E }) : s({}, v)).type !== "delete" && (v.values = f([], v.values)), v.keys && (v.keys = f([], v.keys)), C = o, _ = E, ((g = v).type === "add" ? Promise.resolve([]) : C.getMany({ trans: g.trans, keys: _, cache: "immutable" })).then(function(R) {
                var I = E.map(function(P, k) {
                  var H, J, X, z = R[k], te = { onerror: null, onsuccess: null };
                  return v.type === "delete" ? m.fire.call(te, P, z, T) : v.type === "add" || z === void 0 ? (H = y.fire.call(te, P, v.values[k], T), P == null && H != null && (v.keys[k] = P = H, i.outbound || ce(v.values[k], i.keyPath, P))) : (H = ho(z, v.values[k]), (J = b.fire.call(te, H, P, z, T)) && (X = v.values[k], Object.keys(J).forEach(function(ee) {
                    L(X, ee) ? X[ee] = J[ee] : ce(X, ee, J[ee]);
                  }))), te;
                });
                return o.mutate(v).then(function(P) {
                  for (var k = P.failures, H = P.results, J = P.numFailures, P = P.lastResult, X = 0; X < E.length; ++X) {
                    var z = (H || E)[X], te = I[X];
                    z == null ? te.onerror && te.onerror(k[X]) : te.onsuccess && te.onsuccess(v.type === "put" && R[X] ? v.values[X] : z);
                  }
                  return { failures: k, results: H, numFailures: J, lastResult: P };
                }).catch(function(P) {
                  return I.forEach(function(k) {
                    return k.onerror && k.onerror(P);
                  }), Promise.reject(P);
                });
              });
            }
          } });
        } });
      } };
      function di(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var i = [], u = 0, l = 0; u < n.keys.length && l < e.length; ++u) Te(n.keys[u], e[l]) === 0 && (i.push(o ? ft(n.values[u]) : n.values[u]), ++l);
          return i.length === e.length ? i : null;
        } catch {
          return null;
        }
      }
      var Ha = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return s(s({}, o), { getMany: function(i) {
            if (!i.cache) return o.getMany(i);
            var u = di(i.keys, i.trans._cache, i.cache === "clone");
            return u ? ne.resolve(u) : o.getMany(i).then(function(l) {
              return i.trans._cache = { keys: i.keys, values: i.cache === "clone" ? ft(l) : l }, l;
            });
          }, mutate: function(i) {
            return i.type !== "add" && (i.trans._cache = null), o.mutate(i);
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
      var Ya = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new rt(e.MIN_KEY, e.MAX_KEY);
        return s(s({}, e), { transaction: function(i, u, l) {
          if (ie.subscr && u !== "readonly") throw new $.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ie.querier));
          return e.transaction(i, u, l);
        }, table: function(i) {
          var u = e.table(i), l = u.schema, p = l.primaryKey, v = l.indexes, m = p.extractKey, y = p.outbound, b = p.autoIncrement && v.filter(function(g) {
            return g.compound && g.keyPath.includes(p.keyPath);
          }), N = s(s({}, u), { mutate: function(g) {
            function _(ee) {
              return ee = "idb://".concat(n, "/").concat(i, "/").concat(ee), P[ee] || (P[ee] = new rt());
            }
            var T, E, R, I = g.trans, P = g.mutatedParts || (g.mutatedParts = {}), k = _(""), H = _(":dels"), J = g.type, te = g.type === "deleteRange" ? [g.range] : g.type === "delete" ? [g.keys] : g.values.length < 50 ? [mo(p, g).filter(function(ee) {
              return ee;
            }), g.values] : [], X = te[0], z = te[1], te = g.trans._cache;
            return h(X) ? (k.addKeys(X), (te = J === "delete" || X.length === z.length ? di(X, te) : null) || H.addKeys(X), (te || z) && (T = _, E = te, R = z, l.indexes.forEach(function(ee) {
              var re = T(ee.name || "");
              function be(ve) {
                return ve != null ? ee.extractKey(ve) : null;
              }
              function Oe(ve) {
                return ee.multiEntry && h(ve) ? ve.forEach(function(Ke) {
                  return re.addKey(Ke);
                }) : re.addKey(ve);
              }
              (E || R).forEach(function(ve, ot) {
                var me = E && be(E[ot]), ot = R && be(R[ot]);
                Te(me, ot) !== 0 && (me != null && Oe(me), ot != null && Oe(ot));
              });
            }))) : X ? (z = { from: (z = X.lower) !== null && z !== void 0 ? z : e.MIN_KEY, to: (z = X.upper) !== null && z !== void 0 ? z : e.MAX_KEY }, H.add(z), k.add(z)) : (k.add(o), H.add(o), l.indexes.forEach(function(ee) {
              return _(ee.name).add(o);
            })), u.mutate(g).then(function(ee) {
              return !X || g.type !== "add" && g.type !== "put" || (k.addKeys(ee.results), b && b.forEach(function(re) {
                for (var be = g.values.map(function(me) {
                  return re.extractKey(me);
                }), Oe = re.keyPath.findIndex(function(me) {
                  return me === p.keyPath;
                }), ve = 0, Ke = ee.results.length; ve < Ke; ++ve) be[ve][Oe] = ee.results[ve];
                _(re.name).addKeys(be);
              })), I.mutatedParts = yr(I.mutatedParts || {}, P), ee;
            });
          } }), v = function(_) {
            var T = _.query, _ = T.index, T = T.range;
            return [_, new rt((_ = T.lower) !== null && _ !== void 0 ? _ : e.MIN_KEY, (T = T.upper) !== null && T !== void 0 ? T : e.MAX_KEY)];
          }, C = { get: function(g) {
            return [p, new rt(g.key)];
          }, getMany: function(g) {
            return [p, new rt().addKeys(g.keys)];
          }, count: v, query: v, openCursor: v };
          return c(C).forEach(function(g) {
            N[g] = function(_) {
              var T = ie.subscr, E = !!T, R = pi(ie, u) && hi(g, _) ? _.obsSet = {} : T;
              if (E) {
                var I = function(z) {
                  return z = "idb://".concat(n, "/").concat(i, "/").concat(z), R[z] || (R[z] = new rt());
                }, P = I(""), k = I(":dels"), T = C[g](_), E = T[0], T = T[1];
                if ((g === "query" && E.isPrimaryKey && !_.values ? k : I(E.name || "")).add(T), !E.isPrimaryKey) {
                  if (g !== "count") {
                    var H = g === "query" && y && _.values && u.query(s(s({}, _), { values: !1 }));
                    return u[g].apply(this, arguments).then(function(z) {
                      if (g === "query") {
                        if (y && _.values) return H.then(function(be) {
                          return be = be.result, P.addKeys(be), z;
                        });
                        var te = _.values ? z.result.map(m) : z.result;
                        (_.values ? P : k).addKeys(te);
                      } else if (g === "openCursor") {
                        var ee = z, re = _.values;
                        return ee && Object.create(ee, { key: { get: function() {
                          return k.addKey(ee.primaryKey), ee.key;
                        } }, primaryKey: { get: function() {
                          var be = ee.primaryKey;
                          return k.addKey(be), be;
                        } }, value: { get: function() {
                          return re && P.addKey(ee.primaryKey), ee.value;
                        } } });
                      }
                      return z;
                    });
                  }
                  k.add(o);
                }
              }
              return u[g].apply(this, arguments);
            };
          }), N;
        } });
      } };
      function mi(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var i = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === i ? null : (n = s({}, n), h(n.keys) && (n.keys = n.keys.filter(function(u, l) {
          return !(l in o.failures);
        })), "values" in n && h(n.values) && (n.values = n.values.filter(function(u, l) {
          return !(l in o.failures);
        })), n);
      }
      function vo(e, n) {
        return o = e, ((i = n).lower === void 0 || (i.lowerOpen ? 0 < Te(o, i.lower) : 0 <= Te(o, i.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Te(e, n.upper) < 0 : Te(e, n.upper) <= 0));
        var o, i;
      }
      function vi(e, n, C, i, u, l) {
        if (!C || C.length === 0) return e;
        var p = n.query.index, m = p.multiEntry, y = n.query.range, b = i.schema.primaryKey.extractKey, N = p.extractKey, v = (p.lowLevelIndex || p).extractKey, C = C.reduce(function(g, _) {
          var T = g, E = [];
          if (_.type === "add" || _.type === "put") for (var R = new rt(), I = _.values.length - 1; 0 <= I; --I) {
            var P, k = _.values[I], H = b(k);
            R.hasKey(H) || (P = N(k), (m && h(P) ? P.some(function(ee) {
              return vo(ee, y);
            }) : vo(P, y)) && (R.addKey(H), E.push(k)));
          }
          switch (_.type) {
            case "add":
              var J = new rt().addKeys(n.values ? g.map(function(re) {
                return b(re);
              }) : g), T = g.concat(n.values ? E.filter(function(re) {
                return re = b(re), !J.hasKey(re) && (J.addKey(re), !0);
              }) : E.map(function(re) {
                return b(re);
              }).filter(function(re) {
                return !J.hasKey(re) && (J.addKey(re), !0);
              }));
              break;
            case "put":
              var X = new rt().addKeys(_.values.map(function(re) {
                return b(re);
              }));
              T = g.filter(function(re) {
                return !X.hasKey(n.values ? b(re) : re);
              }).concat(n.values ? E : E.map(function(re) {
                return b(re);
              }));
              break;
            case "delete":
              var z = new rt().addKeys(_.keys);
              T = g.filter(function(re) {
                return !z.hasKey(n.values ? b(re) : re);
              });
              break;
            case "deleteRange":
              var te = _.range;
              T = g.filter(function(re) {
                return !vo(b(re), te);
              });
          }
          return T;
        }, e);
        return C === e ? e : (C.sort(function(g, _) {
          return Te(v(g), v(_)) || Te(b(g), b(_));
        }), n.limit && n.limit < 1 / 0 && (C.length > n.limit ? C.length = n.limit : e.length === n.limit && C.length < n.limit && (u.dirty = !0)), l ? Object.freeze(C) : C);
      }
      function yi(e, n) {
        return Te(e.lower, n.lower) === 0 && Te(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Xa(e, n) {
        return function(o, i, u, l) {
          if (o === void 0) return i !== void 0 ? -1 : 0;
          if (i === void 0) return 1;
          if ((i = Te(o, i)) === 0) {
            if (u && l) return 0;
            if (u) return 1;
            if (l) return -1;
          }
          return i;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, i, u, l) {
          if (o === void 0) return i !== void 0 ? 1 : 0;
          if (i === void 0) return -1;
          if ((i = Te(o, i)) === 0) {
            if (u && l) return 0;
            if (u) return -1;
            if (l) return 1;
          }
          return i;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function Qa(e, n, o, i) {
        e.subscribers.add(o), i.addEventListener("abort", function() {
          var u, l;
          e.subscribers.delete(o), e.subscribers.size === 0 && (u = e, l = n, setTimeout(function() {
            u.subscribers.size === 0 && $e(l, u);
          }, 3e3));
        });
      }
      var za = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return s(s({}, e), { transaction: function(o, i, u) {
          var l, p, m = e.transaction(o, i, u);
          return i === "readwrite" && (p = (l = new AbortController()).signal, u = function(y) {
            return function() {
              if (l.abort(), i === "readwrite") {
                for (var b = /* @__PURE__ */ new Set(), N = 0, v = o; N < v.length; N++) {
                  var C = v[N], g = ln["idb://".concat(n, "/").concat(C)];
                  if (g) {
                    var _ = e.table(C), T = g.optimisticOps.filter(function(re) {
                      return re.trans === m;
                    });
                    if (m._explicit && y && m.mutatedParts) for (var E = 0, R = Object.values(g.queries.query); E < R.length; E++) for (var I = 0, P = (J = R[E]).slice(); I < P.length; I++) uo((X = P[I]).obsSet, m.mutatedParts) && ($e(J, X), X.subscribers.forEach(function(re) {
                      return b.add(re);
                    }));
                    else if (0 < T.length) {
                      g.optimisticOps = g.optimisticOps.filter(function(re) {
                        return re.trans !== m;
                      });
                      for (var k = 0, H = Object.values(g.queries.query); k < H.length; k++) for (var J, X, z, te = 0, ee = (J = H[k]).slice(); te < ee.length; te++) (X = ee[te]).res != null && m.mutatedParts && (y && !X.dirty ? (z = Object.isFrozen(X.res), z = vi(X.res, X.req, T, _, X, z), X.dirty ? ($e(J, X), X.subscribers.forEach(function(re) {
                        return b.add(re);
                      })) : z !== X.res && (X.res = z, X.promise = ne.resolve({ result: z }))) : (X.dirty && $e(J, X), X.subscribers.forEach(function(re) {
                        return b.add(re);
                      })));
                    }
                  }
                }
                b.forEach(function(re) {
                  return re();
                });
              }
            };
          }, m.addEventListener("abort", u(!1), { signal: p }), m.addEventListener("error", u(!1), { signal: p }), m.addEventListener("complete", u(!0), { signal: p })), m;
        }, table: function(o) {
          var i = e.table(o), u = i.schema.primaryKey;
          return s(s({}, i), { mutate: function(l) {
            var p = ie.trans;
            if (u.outbound || p.db._options.cache === "disabled" || p.explicit || p.idbtrans.mode !== "readwrite") return i.mutate(l);
            var m = ln["idb://".concat(n, "/").concat(o)];
            return m ? (p = i.mutate(l), l.type !== "add" && l.type !== "put" || !(50 <= l.values.length || mo(u, l).some(function(y) {
              return y == null;
            })) ? (m.optimisticOps.push(l), l.mutatedParts && gr(l.mutatedParts), p.then(function(y) {
              0 < y.numFailures && ($e(m.optimisticOps, l), (y = mi(0, l, y)) && m.optimisticOps.push(y), l.mutatedParts && gr(l.mutatedParts));
            }), p.catch(function() {
              $e(m.optimisticOps, l), l.mutatedParts && gr(l.mutatedParts);
            })) : p.then(function(y) {
              var b = mi(0, s(s({}, l), { values: l.values.map(function(N, v) {
                var C;
                return y.failures[v] || (N = (C = u.keyPath) !== null && C !== void 0 && C.includes(".") ? ft(N) : s({}, N), ce(N, u.keyPath, y.results[v])), N;
              }) }), y);
              m.optimisticOps.push(b), queueMicrotask(function() {
                return l.mutatedParts && gr(l.mutatedParts);
              });
            }), p) : i.mutate(l);
          }, query: function(l) {
            if (!pi(ie, i) || !hi("query", l)) return i.query(l);
            var p = ((b = ie.trans) === null || b === void 0 ? void 0 : b.db._options.cache) === "immutable", v = ie, m = v.requery, y = v.signal, b = function(_, T, E, R) {
              var I = ln["idb://".concat(_, "/").concat(T)];
              if (!I) return [];
              if (!(T = I.queries[E])) return [null, !1, I, null];
              var P = T[(R.query ? R.query.index.name : null) || ""];
              if (!P) return [null, !1, I, null];
              switch (E) {
                case "query":
                  var k = P.find(function(H) {
                    return H.req.limit === R.limit && H.req.values === R.values && yi(H.req.query.range, R.query.range);
                  });
                  return k ? [k, !0, I, P] : [P.find(function(H) {
                    return ("limit" in H.req ? H.req.limit : 1 / 0) >= R.limit && (!R.values || H.req.values) && Xa(H.req.query.range, R.query.range);
                  }), !1, I, P];
                case "count":
                  return k = P.find(function(H) {
                    return yi(H.req.query.range, R.query.range);
                  }), [k, !!k, I, P];
              }
            }(n, o, "query", l), N = b[0], v = b[1], C = b[2], g = b[3];
            return N && v ? N.obsSet = l.obsSet : (v = i.query(l).then(function(_) {
              var T = _.result;
              if (N && (N.res = T), p) {
                for (var E = 0, R = T.length; E < R; ++E) Object.freeze(T[E]);
                Object.freeze(T);
              } else _.result = ft(T);
              return _;
            }).catch(function(_) {
              return g && N && $e(g, N), Promise.reject(_);
            }), N = { obsSet: l.obsSet, promise: v, subscribers: /* @__PURE__ */ new Set(), type: "query", req: l, dirty: !1 }, g ? g.push(N) : (g = [N], (C = C || (ln["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[l.query.index.name || ""] = g)), Qa(N, g, m, y), N.promise.then(function(_) {
              return { result: vi(_.result, l, C?.optimisticOps, i, N, p) };
            });
          } });
        } });
      } };
      function wr(e, n) {
        return new Proxy(e, { get: function(o, i, u) {
          return i === "db" ? n : Reflect.get(o, i, u);
        } });
      }
      var jt = (Ve.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new $.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new $.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(i) {
          return i._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Ba), o.stores({}), this._state.autoSchema = !1, o);
      }, Ve.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || ie.letThrough || this._vip) ? e() : new ne(function(o, i) {
          if (n._state.openComplete) return i(new $.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void i(new $.DatabaseClosed());
            n.open().catch(A);
          }
          n._state.dbReadyPromise.then(o, i);
        }).then(e);
      }, Ve.prototype.use = function(e) {
        var n = e.stack, o = e.create, i = e.level, u = e.name;
        return u && this.unuse({ stack: n, name: u }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: i ?? 10, name: u }), e.sort(function(l, p) {
          return l.level - p.level;
        }), this;
      }, Ve.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, i = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(u) {
          return i ? u.create !== i : !!o && u.name !== o;
        })), this;
      }, Ve.prototype.open = function() {
        var e = this;
        return an(lt, function() {
          return Va(e);
        });
      }, Ve.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = _n.indexOf(this);
        if (0 <= n && _n.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new ne(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ne(function(o, i) {
          e.cancelOpen = i;
        }));
      }, Ve.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new $.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new $.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, Ve.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", i = this._state;
        return new ne(function(u, l) {
          function p() {
            n.close(e);
            var m = n._deps.indexedDB.deleteDatabase(n.name);
            m.onsuccess = Me(function() {
              var y, b, N;
              y = n._deps, b = n.name, N = y.indexedDB, y = y.IDBKeyRange, io(N) || b === ir || oo(N, y).delete(b).catch(A), u();
            }), m.onerror = At(l), m.onblocked = n._fireOnBlocked;
          }
          if (o) throw new $.InvalidArgument("Invalid closeOptions argument to db.delete()");
          i.isBeingOpened ? i.dbReadyPromise.then(p) : p();
        });
      }, Ve.prototype.backendDB = function() {
        return this.idbdb;
      }, Ve.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ve.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ve.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ve.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ve.prototype, "tables", { get: function() {
        var e = this;
        return c(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), Ve.prototype.transaction = function() {
        var e = (function(n, o, i) {
          var u = arguments.length;
          if (u < 2) throw new $.InvalidArgument("Too few arguments");
          for (var l = new Array(u - 1); --u; ) l[u - 1] = arguments[u];
          return i = l.pop(), [n, Ie(l), i];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ve.prototype._transaction = function(e, n, o) {
        var i = this, u = ie.trans;
        u && u.db === this && e.indexOf("!") === -1 || (u = null);
        var l, p, m = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (p = n.map(function(b) {
            if (b = b instanceof i.Table ? b.name : b, typeof b != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return b;
          }), e == "r" || e === Hr) l = Hr;
          else {
            if (e != "rw" && e != Yr) throw new $.InvalidArgument("Invalid transaction mode: " + e);
            l = Yr;
          }
          if (u) {
            if (u.mode === Hr && l === Yr) {
              if (!m) throw new $.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              u = null;
            }
            u && p.forEach(function(b) {
              if (u && u.storeNames.indexOf(b) === -1) {
                if (!m) throw new $.SubTransaction("Table " + b + " not included in parent transaction.");
                u = null;
              }
            }), m && u && !u.active && (u = null);
          }
        } catch (b) {
          return u ? u._promise(null, function(N, v) {
            v(b);
          }) : Ue(b);
        }
        var y = (function b(N, v, C, g, _) {
          return ne.resolve().then(function() {
            var T = ie.transless || ie, E = N._createTransaction(v, C, N._dbSchema, g);
            if (E.explicit = !0, T = { trans: E, transless: T }, g) E.idbtrans = g.idbtrans;
            else try {
              E.create(), E.idbtrans._explicit = !0, N._state.PR1398_maxLoop = 3;
            } catch (P) {
              return P.name === D.InvalidState && N.isOpen() && 0 < --N._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), N.close({ disableAutoOpen: !1 }), N.open().then(function() {
                return b(N, v, C, null, _);
              })) : Ue(P);
            }
            var R, I = Et(_);
            return I && wn(), T = ne.follow(function() {
              var P;
              (R = _.call(E, E)) && (I ? (P = Vt.bind(null, null), R.then(P, P)) : typeof R.next == "function" && typeof R.throw == "function" && (R = po(R)));
            }, T), (R && typeof R.then == "function" ? ne.resolve(R).then(function(P) {
              return E.active ? P : Ue(new $.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : T.then(function() {
              return R;
            })).then(function(P) {
              return g && E._resolve(), E._completion.then(function() {
                return P;
              });
            }).catch(function(P) {
              return E._reject(P), Ue(P);
            });
          });
        }).bind(null, this, l, p, u, o);
        return u ? u._promise(l, y, "lock") : ie.trans ? an(ie.transless, function() {
          return i._whenReady(y);
        }) : this._whenReady(y);
      }, Ve.prototype.table = function(e) {
        if (!L(this._allTables, e)) throw new $.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ve);
      function Ve(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var i = Ve.dependencies;
        this._options = n = s({ addons: Ve.addons, autoOpen: !0, indexedDB: i.indexedDB, IDBKeyRange: i.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, i = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var u, l, p, m, y, b = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        b.dbReadyPromise = new ne(function(v) {
          b.dbReadyResolve = v;
        }), b.openCanceller = new ne(function(v, C) {
          b.cancelOpen = C;
        }), this._state = b, this.name = e, this.on = In(this, "populate", "blocked", "versionchange", "close", { ready: [he, A] }), this.once = function(v, C) {
          var g = function() {
            for (var _ = [], T = 0; T < arguments.length; T++) _[T] = arguments[T];
            o.on(v).unsubscribe(g), C.apply(o, _);
          };
          return o.on(v, g);
        }, this.on.ready.subscribe = K(this.on.ready.subscribe, function(v) {
          return function(C, g) {
            Ve.vip(function() {
              var _, T = o._state;
              T.openComplete ? (T.dbOpenError || ne.resolve().then(C), g && v(C)) : T.onReadyBeingFired ? (T.onReadyBeingFired.push(C), g && v(C)) : (v(C), _ = o, g || v(function E() {
                _.on.ready.unsubscribe(C), _.on.ready.unsubscribe(E);
              }));
            });
          };
        }), this.Collection = (u = this, Pn(Pa.prototype, function(R, E) {
          this.db = u;
          var g = Ho, _ = null;
          if (E) try {
            g = E();
          } catch (I) {
            _ = I;
          }
          var T = R._ctx, E = T.table, R = E.hook.reading.fire;
          this._ctx = { table: E, index: T.index, isPrimKey: !T.index || E.schema.primKey.keyPath && T.index === E.schema.primKey.name, range: g, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: _, or: T.or, valueMapper: R !== q ? R : null };
        })), this.Table = (l = this, Pn(zo.prototype, function(v, C, g) {
          this.db = l, this._tx = g, this.name = v, this.schema = C, this.hook = l._allTables[v] ? l._allTables[v].hook : In(null, { creating: [fe, A], reading: [oe, q], updating: [ye, A], deleting: [ue, A] });
        })), this.Transaction = (p = this, Pn(ja.prototype, function(v, C, g, _, T) {
          var E = this;
          v !== "readonly" && C.forEach(function(R) {
            R = (R = g[R]) === null || R === void 0 ? void 0 : R.yProps, R && (C = C.concat(R.map(function(I) {
              return I.updatesTable;
            })));
          }), this.db = p, this.mode = v, this.storeNames = C, this.schema = g, this.chromeTransactionDurability = _, this.idbtrans = null, this.on = In(this, "complete", "error", "abort"), this.parent = T || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ne(function(R, I) {
            E._resolve = R, E._reject = I;
          }), this._completion.then(function() {
            E.active = !1, E.on.complete.fire();
          }, function(R) {
            var I = E.active;
            return E.active = !1, E.on.error.fire(R), E.parent ? E.parent._reject(R) : I && E.idbtrans && E.idbtrans.abort(), Ue(R);
          });
        })), this.Version = (m = this, Pn(Ua.prototype, function(v) {
          this.db = m, this._cfg = { version: v, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, Pn(ri.prototype, function(v, C, g) {
          if (this.db = y, this._ctx = { table: v, index: C === ":id" ? null : C, or: g }, this._cmp = this._ascending = Te, this._descending = function(_, T) {
            return Te(T, _);
          }, this._max = function(_, T) {
            return 0 < Te(_, T) ? _ : T;
          }, this._min = function(_, T) {
            return Te(_, T) < 0 ? _ : T;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new $.MissingAPI();
        })), this.on("versionchange", function(v) {
          0 < v.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(v) {
          !v.newVersion || v.newVersion < v.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(v.oldVersion / 10));
        }), this._maxKey = Fn(n.IDBKeyRange), this._createTransaction = function(v, C, g, _) {
          return new o.Transaction(v, C, g, o._options.chromeTransactionDurability, _);
        }, this._fireOnBlocked = function(v) {
          o.on("blocked").fire(v), _n.filter(function(C) {
            return C.name === o.name && C !== o && !C._state.vcFired;
          }).map(function(C) {
            return C.on("versionchange").fire(v);
          });
        }, this.use(Ha), this.use(za), this.use(Ya), this.use(Wa), this.use(Ga);
        var N = new Proxy(this, { get: function(v, C, g) {
          if (C === "_vip") return !0;
          if (C === "table") return function(T) {
            return wr(o.table(T), N);
          };
          var _ = Reflect.get(v, C, g);
          return _ instanceof zo ? wr(_, N) : C === "tables" ? _.map(function(T) {
            return wr(T, N);
          }) : C === "_createTransaction" ? function() {
            return wr(_.apply(this, arguments), N);
          } : _;
        } });
        this.vip = N, i.forEach(function(v) {
          return v(o);
        });
      }
      var _r, xt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ja = (yo.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, yo.prototype[xt] = function() {
        return this;
      }, yo);
      function yo(e) {
        this._subscribe = e;
      }
      try {
        _r = { indexedDB: d.indexedDB || d.mozIndexedDB || d.webkitIndexedDB || d.msIndexedDB, IDBKeyRange: d.IDBKeyRange || d.webkitIDBKeyRange };
      } catch {
        _r = { indexedDB: null, IDBKeyRange: null };
      }
      function gi(e) {
        var n, o = !1, i = new Ja(function(u) {
          var l = Et(e), p, m = !1, y = {}, b = {}, N = { get closed() {
            return m;
          }, unsubscribe: function() {
            m || (m = !0, p && p.abort(), v && Ht.storagemutated.unsubscribe(g));
          } };
          u.start && u.start(N);
          var v = !1, C = function() {
            return Gr(_);
          }, g = function(T) {
            yr(y, T), uo(b, y) && C();
          }, _ = function() {
            var T, E, R;
            !m && _r.indexedDB && (y = {}, T = {}, p && p.abort(), p = new AbortController(), R = function(I) {
              var P = gn();
              try {
                l && wn();
                var k = Ut(e, I);
                return k = l ? k.finally(Vt) : k;
              } finally {
                P && bn();
              }
            }(E = { subscr: T, signal: p.signal, requery: C, querier: e, trans: null }), Promise.resolve(R).then(function(I) {
              o = !0, n = I, m || E.signal.aborted || (y = {}, function(P) {
                for (var k in P) if (L(P, k)) return;
                return 1;
              }(b = T) || v || (Ht(jn, g), v = !0), Gr(function() {
                return !m && u.next && u.next(I);
              }));
            }, function(I) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(I?.name) || m || Gr(function() {
                m || u.error && u.error(I);
              });
            }));
          };
          return setTimeout(C, 0), N;
        });
        return i.hasValue = function() {
          return o;
        }, i.getValue = function() {
          return n;
        }, i;
      }
      var cn = jt;
      function go(e) {
        var n = Yt;
        try {
          Yt = !0, Ht.storagemutated.fire(e), fo(e, !0);
        } finally {
          Yt = n;
        }
      }
      M(cn, s(s({}, Ge), { delete: function(e) {
        return new cn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new cn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = cn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(i) {
            return i.map(function(u) {
              return u.name;
            }).filter(function(u) {
              return u !== ir;
            });
          }) : oo(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return Ue(new $.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          w(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ie.trans ? an(ie.transless, e) : e();
      }, vip: ao, async: function(e) {
        return function() {
          try {
            var n = po(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ne.resolve(n);
          } catch (o) {
            return Ue(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var i = po(e.apply(o, n || []));
          return i && typeof i.then == "function" ? i : ne.resolve(i);
        } catch (u) {
          return Ue(u);
        }
      }, currentTransaction: { get: function() {
        return ie.trans || null;
      } }, waitFor: function(e, n) {
        return n = ne.resolve(typeof e == "function" ? cn.ignoreTransaction(e) : e).timeout(n || 6e4), ie.trans ? ie.trans.waitFor(n) : n;
      }, Promise: ne, debug: { get: function() {
        return le;
      }, set: function(e) {
        Se(e);
      } }, derive: V, extend: w, props: M, override: K, Events: In, on: Ht, liveQuery: gi, extendObservabilitySet: yr, getByKeyPath: ge, setByKeyPath: ce, delByKeyPath: function(e, n) {
        typeof n == "string" ? ce(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          ce(e, o, void 0);
        });
      }, shallowClone: Ne, deepClone: ft, getObjectDiff: ho, cmp: Te, asap: xe, minKey: -1 / 0, addons: [], connections: _n, errnames: D, dependencies: _r, cache: ln, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), cn.maxKey = Fn(cn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Ht(jn, function(e) {
        Yt || (e = new CustomEvent(zr, { detail: e }), Yt = !0, dispatchEvent(e), Yt = !1);
      }), addEventListener(zr, function(e) {
        e = e.detail, Yt || go(e);
      }));
      var Rn, Yt = !1, bi = function() {
      };
      return typeof BroadcastChannel < "u" && ((bi = function() {
        (Rn = new BroadcastChannel(zr)).onmessage = function(e) {
          return e.data && go(e.data);
        };
      })(), typeof Rn.unref == "function" && Rn.unref(), Ht(jn, function(e) {
        Yt || Rn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!jt.disableBfCache && e.persisted) {
          le && console.debug("Dexie: handling persisted pagehide"), Rn?.close();
          for (var n = 0, o = _n; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !jt.disableBfCache && e.persisted && (le && console.debug("Dexie: handling persisted pageshow"), bi(), go({ all: new rt(-1 / 0, [[]]) }));
      })), ne.rejectionMapper = function(e, n) {
        return !e || e instanceof Bt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !Q[e.name] ? e : (n = new Q[e.name](n || e.message, e), "stack" in e && Y(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, Se(le), s(jt, Object.freeze({ __proto__: null, Dexie: jt, liveQuery: gi, Entity: Yo, cmp: Te, PropModification: kn, replacePrefix: function(e, n) {
        return new kn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new kn({ add: e });
      }, remove: function(e) {
        return new kn({ remove: e });
      }, default: jt, RangeSet: rt, mergeRanges: Bn, rangesOverlap: ui }), { default: jt }), jt;
    });
  }(Rs)), Rs.exports;
}
var yp = vp();
const As = /* @__PURE__ */ cp(yp), zu = Symbol.for("Dexie"), Ss = globalThis[zu] || (globalThis[zu] = As);
if (As.semVer !== Ss.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${As.semVer} and ${Ss.semVer}`);
const {
  liveQuery: yy,
  mergeRanges: gy,
  rangesOverlap: by,
  RangeSet: wy,
  cmp: _y,
  Entity: xy,
  PropModification: Ny,
  replacePrefix: Ey,
  add: Ty,
  remove: Oy,
  DexieYProvider: Cy
} = Ss;
function tu(t) {
  return {
    addRecord: r,
    updateRecord: a,
    findChildRecords: d,
    findChildRecordsByTagName: c,
    findChildRecordsWithinDepthAndGivenTagName: h,
    ensureRelationship: s,
    removeRelationship: f,
    findParentRecordsWithinDepthAndGivenTagName: w,
    db: t
  };
  async function r(S) {
    const O = { ...S, id: crypto.randomUUID() };
    try {
      return await t.table(Fe).add(O), O;
    } catch (L) {
      const M = {
        msg: "could not add record",
        db: t.name,
        newRecord: O,
        err: L
      };
      throw console.error(M), new Error(JSON.stringify(M));
    }
  }
  async function a(S) {
    try {
      if (await t.table(Fe).update(S.id, S) < 1) {
        const L = { msg: "nothing has been updated", record: S };
        throw console.error(L), new Error(JSON.stringify(L));
      }
    } catch (O) {
      console.error(O);
    }
  }
  async function s(S, O) {
    const L = S.children?.some((B) => B.id === O.id), M = O.parent?.id === S.id;
    if (L || (S.children.push({ id: O.id, tagName: O.tagName }), await a(S)), !M) {
      const B = {
        id: S.id,
        tagName: S.tagName
      };
      O.parent = B, await a(O);
    }
  }
  async function f(S, O) {
    O.parent = null, await a(O), S.children && (S.children = S.children.filter((L) => L.id !== O.id), await a(S));
  }
  async function d(S, O) {
    if (!S.children?.length)
      return [];
    let L = (await t.table(Fe).bulkGet(S.children.map((M) => M.id))).filter(Boolean);
    return O?.tagNames && O.tagNames.length > 0 && (L = L.filter((M) => O?.tagNames?.includes(M.tagName))), O?.attrs && O.attrs.length > 0 && (L = L.filter(
      (M) => O.attrs.every(
        (B) => M.attributes.some(
          (Y) => Y.name === B.name && Y.value === B.value
        )
      )
    )), L;
  }
  async function c(S, O) {
    return (await d(S)).filter((M) => O.includes(M.tagName));
  }
  async function h(S, O, L) {
    const M = [];
    let B = [S];
    for (let Y = 0; Y < O; Y++) {
      const V = [];
      if (B.length === 0)
        break;
      for (const U of B) {
        const W = await d(U);
        W.length !== 0 && (V.push(...W), M.push(...W.filter((F) => L.includes(F.tagName))));
      }
      B = [...V];
    }
    return M;
  }
  async function w(S, O, L = []) {
    const M = [];
    let B = S;
    for (let Y = 0; Y < O; Y++) {
      if (!B.parent)
        return M;
      const V = await t.table(Fe).get(B.parent.id);
      if (!V)
        break;
      (L.length == 0 || L.length > 0 && L.includes(V.tagName)) && M.push(V), B = V;
    }
    return M;
  }
}
function Z(t, r) {
  return t?.attributes?.find((a) => a.name === r)?.value;
}
function Ze(t, r) {
  if (t) return;
  const a = "Invariant failed", s = r ? `${a}: ${r}` : a;
  throw console.error(s), new Error("Unexpected Error!");
}
const Qt = {
  prefix: "eIEC61850-6-100",
  uri: "http://www.iec.ch/61850/2019/SCL/6-100"
}, hc = { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" };
function gp(t) {
  const r = tu(t), a = Pt();
  return {
    createControlledConnection: f,
    createConnection: s,
    createSourcePlaceholder: c,
    createDestinationPlaceholder: d,
    calculateNextInputInstance: h,
    calculateNextOutputInstance: w,
    findExistingInputs: S,
    findExistingOutputs: O,
    findMatchingExtRef: L,
    implementDataflow: M
  };
  async function s(B, Y, V, U) {
    const W = await Yi(r, V), F = await Pp(
      r,
      Y,
      W,
      B
    );
    await kp(r, Y, B), U && (await Zu(
      r,
      V,
      F
    ), await Xi(
      r,
      Y,
      V,
      B.type,
      B.signal,
      B.attribute
    ), B.includeQuality && await Xi(
      r,
      Y,
      V,
      B.type,
      B.signal,
      "q"
    ), B.includeTimestamp && await Xi(
      r,
      Y,
      V,
      B.type,
      B.signal,
      "t"
    )), await a.refreshConnections(), await a.refreshLNode(Y.id), await a.refreshPlaceholders();
  }
  async function f(B, Y, V, U) {
    const W = await cs(r, Y), F = Up(
      B,
      V
    ), K = await Lp(r, F);
    if (await r.ensureRelationship(W, K), !V.dataObjectSpecifications?.find(
      (xe) => xe.name === B.controlledSignal
    )) {
      const ce = Pt().lnodeTypes.find(
        (nt) => nt.lnClass === V.lnClass
      )?.dataObjects.find(
        (nt) => nt.name === B.controlledSignal
      );
      let Ne = await Mi(
        r,
        V,
        Qt.prefix
      );
      const G = {
        name: B.controlledSignal,
        desc: ce?.desc || ""
      }, Ie = await Ds(r, G);
      await r.ensureRelationship(Ne, Ie);
    }
    U && (await Mp(r, Y, K), await Xi(
      r,
      Y,
      V,
      B.type,
      B.controlledSignal
    )), await a.refreshConnections(), await a.refreshLNode(V.id);
  }
  async function d(B, Y, V) {
    const U = await Yi(r, Y), W = await ta(
      r,
      Vp(B)
    );
    await r.ensureRelationship(U, W), V && await Zu(r, Y, [
      W
    ]), await a.refreshConnections();
  }
  async function c(B, Y, V) {
    let U = [{ name: "inputName", value: Y.inputName }];
    Y.preferredLNode && U.push({ name: "pLN", value: Y.preferredLNode }), Y.dataflowType && U.push({ name: "service", value: Y.dataflowType }), Y.processResource && U.push({ name: "resourceName", value: Y.processResource });
    const W = B.dataObjectSpecifications?.find(
      (Ie) => Ie.name === Y.dataObject
    ), F = W?.dataAttributeSpecifications.find(
      (Ie) => Ie.name === Y.dataAttribute
    ), K = Pt(), xe = K.lnodeTypes.find((Ie) => Ie.lnClass === B.lnClass)?.dataObjects.find((Ie) => Ie.name === Y.dataObject), ge = xe?.dataAttributes.find((Ie) => Ie.name === Y.dataAttribute);
    let ce, Ne;
    if (W)
      ce = await r.db.table(Fe).get(W.id);
    else {
      const Ie = await Mi(
        r,
        B,
        Qt.prefix
      ), nt = {
        name: Y.dataObject,
        desc: xe?.desc || ""
      };
      ce = await Ds(r, nt), await r.ensureRelationship(Ie, ce);
    }
    if (!ce) {
      const Ie = "DOS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(Ie));
    }
    if (F)
      Ne = await r.db.table(Fe).get(F.id);
    else {
      const Ie = {
        name: Y.dataAttribute,
        desc: ge?.desc || ""
      };
      Ne = await bc(
        r,
        Ie
      ), await r.ensureRelationship(ce, Ne);
    }
    if (!Ne) {
      const Ie = "DAS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(Ie));
    }
    const G = await r.addRecord({
      tagName: "SubscriberLNode",
      attributes: U,
      parent: null,
      namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
      value: "",
      children: []
    });
    await r.ensureRelationship(Ne, G), V && await Kp(
      r,
      B,
      Y.dataObject,
      Y.dataAttribute,
      Y.dataflowType || void 0
    ), await K.refreshLNode(B.id), await K.refreshPlaceholders();
  }
  async function h(B, Y, V) {
    const U = await Yi(r, V), K = (await r.findChildRecordsByTagName(U, [
      "SourceRef"
    ])).map((ae) => ({
      input: Z(ae, "input"),
      pDA: Z(ae, "pDA")
    })).filter(
      (ae) => ae.input === B && ae.pDA === Y
    );
    return K.length === 0 ? 1 : K.length + 1;
  }
  async function w(B, Y) {
    const V = await cs(r, Y), F = (await r.findChildRecordsByTagName(V, [
      "ControlRef"
    ])).map((K) => Z(K, "output")).filter((K) => !!K).filter(
      (K) => K === B
    );
    return F.length === 0 ? 1 : F.length + 1;
  }
  async function S(B) {
    const Y = await Yi(r, B), U = (await r.findChildRecordsByTagName(Y, [
      "SourceRef"
    ])).map((F) => Z(F, "input")).filter((F) => !!F);
    return Array.from(new Set(U));
  }
  async function O(B) {
    const Y = await cs(r, B), U = (await r.findChildRecordsByTagName(Y, [
      "ControlRef"
    ])).map((F) => Z(F, "output")).filter((F) => !!F);
    return Array.from(new Set(U));
  }
  async function L(B) {
    const Y = await r.db.table(Fe).get(B.id);
    Ze(Y, "SourceRef record not found");
    const V = Z(Y, "extRefUuid");
    let U;
    if (V) {
      if (U = await r.db.table(Fe).where({ tagName: "ExtRef" }).and((W) => Z(W, "uuid") === V).first(), !U)
        throw new Error(`ExtRef with uuid ${V} not found`);
    } else {
      const W = await Dp(r, B);
      if (!W)
        return null;
      U = W;
    }
    return qp(U);
  }
  async function M(B, Y) {
    if (Ze(
      B.sourceLNodeId && B.destinationLNodeId,
      "Connection must have both source and destination LNode IDs to implement"
    ), Ze(B.dataflowType, "Connection must have a dataflow type to implement"), ![Xe.GOOSE, Xe.REPORT, Xe.SMV].includes(B.dataflowType))
      throw new Error(
        `Dataflow type ${B.dataflowType} is not supported for automatic implementation`
      );
    const U = await r.db.table(Fe).get(B.sourceLNodeId);
    Ze(U, "Sending LNode record not found");
    const W = await r.db.table(Fe).get(B.destinationLNodeId);
    Ze(W, "Receiving LNode record not found");
    const F = await ru(
      r,
      B.sourceLNodeId
    );
    Ze(F, "LDevice of sending LNode not found");
    const K = (await r.findChildRecords(F, { tagNames: ["LN0"] }))[0];
    Ze(K, "LN0 record not found for LDevice");
    const ae = await Ep(
      r,
      B,
      U,
      W,
      F,
      K
    ), xe = await Np(
      r,
      B.dataflowType,
      Z(ae, "name") || "",
      K
    );
    zt(
      ae,
      "datSet",
      Z(xe, "name") || ""
    ), await r.updateRecord(ae), await xp(
      r,
      B,
      U,
      xe
    ), await bp(
      r,
      B.dataflowType,
      U,
      Z(ae, "name") || ""
    ), await Ap(
      r,
      B,
      Y,
      Z(ae, "name") || ""
    ), await Sp(
      r,
      B,
      W,
      Y
    ), await a.refreshConnections();
  }
}
async function bp(t, r, a, s) {
  const f = await t.db.table(Fe).where({ tagName: "Communication" }).first();
  Ze(f, "Communication record not found in SCL");
  const d = await t.findChildRecordsWithinDepthAndGivenTagName(
    f,
    2,
    ["ConnectedAP"]
  ), c = Z(a, "iedName"), h = await t.db.table(Fe).where({ tagName: "IED" }).and((O) => Z(O, "name") === c).first();
  Ze(h, "IED record of sending LNode not found");
  const w = (await t.findChildRecordsByTagName(h, ["AccessPoint"]))[0];
  Ze(w, "AccessPoint record of sending IED not found");
  const S = d.find(
    (O) => Z(O, "iedName") === c && Z(O, "apName") === Z(w, "name")
  );
  Ze(S, "ConnectedAP record for sending IED not found"), r === Xe.GOOSE && await _p(
    t,
    a,
    s,
    S
  ), r === Xe.SMV && await wp(
    t,
    a,
    s,
    S
  );
}
async function wp(t, r, a, s) {
  if ((await t.findChildRecords(s, {
    tagNames: ["SMV"],
    attrs: [
      { name: "cbName", value: a },
      { name: "ldInst", value: Z(r, "ldInst") || "" }
    ]
  }))[0])
    return;
  const d = await t.addRecord({
    tagName: "SMV",
    attributes: [
      { name: "cbName", value: a },
      { name: "ldInst", value: Z(r, "ldInst") || "" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(s, d);
  const c = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(d, c);
  const h = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-ID",
        namespace: hc
      },
      { name: "type", value: "VLAN-ID" }
    ],
    parent: null,
    namespace: bt.default,
    value: "000",
    children: []
  });
  await t.ensureRelationship(c, h);
  const w = await t.addRecord({
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
    namespace: bt.default,
    value: "7",
    children: []
  });
  await t.ensureRelationship(c, w);
  const L = (await t.db.table(Fe).where({ tagName: "SMV" }).toArray()).length - 1, M = mc(262144, L), Y = "01-0C-CD" + "-" + M, V = await t.addRecord({
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
    namespace: bt.default,
    value: Y,
    children: []
  });
  await t.ensureRelationship(c, V);
  const U = vc(16384, L), W = await t.addRecord({
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
    namespace: bt.default,
    value: U,
    children: []
  });
  await t.ensureRelationship(c, W);
}
async function _p(t, r, a, s) {
  if ((await t.findChildRecords(s, {
    tagNames: ["GSE"],
    attrs: [
      { name: "cbName", value: a },
      { name: "ldInst", value: Z(r, "ldInst") || "" }
    ]
  }))[0])
    return;
  const d = await t.addRecord({
    tagName: "GSE",
    attributes: [
      { name: "cbName", value: a },
      { name: "ldInst", value: Z(r, "ldInst") || "" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(s, d);
  const c = await t.addRecord({
    tagName: "Address",
    attributes: [],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(d, c);
  const h = await t.addRecord({
    tagName: "P",
    attributes: [
      {
        name: "type",
        value: "tP_VLAN-ID",
        namespace: hc
      },
      { name: "type", value: "VLAN-ID" }
    ],
    parent: null,
    namespace: bt.default,
    value: "000",
    children: []
  });
  await t.ensureRelationship(c, h);
  const w = await t.addRecord({
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
    namespace: bt.default,
    value: "4",
    children: []
  });
  await t.ensureRelationship(c, w);
  const L = (await t.db.table(Fe).where({ tagName: "GSE" }).toArray()).length - 1, M = mc(65536, L), Y = "01-0C-CD" + "-" + M, V = await t.addRecord({
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
    namespace: bt.default,
    value: Y,
    children: []
  });
  await t.ensureRelationship(c, V);
  const U = vc(1, L), W = await t.addRecord({
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
    namespace: bt.default,
    value: U,
    children: []
  });
  await t.ensureRelationship(c, W);
  const F = await t.addRecord({
    tagName: "MinTime",
    attributes: [
      { name: "multiplier", value: "m" },
      { name: "unit", value: "s" }
    ],
    parent: null,
    namespace: bt.default,
    value: "5",
    children: []
  });
  await t.ensureRelationship(d, F);
  const K = await t.addRecord({
    tagName: "MaxTime",
    attributes: [
      { name: "multiplier", value: "m" },
      { name: "unit", value: "s" }
    ],
    parent: null,
    namespace: bt.default,
    value: "10000",
    children: []
  });
  await t.ensureRelationship(d, K);
}
function mc(t, r) {
  if (r < 0 || r > 511)
    throw new Error("Maximum of unique MAC address counters exceeded for this range");
  const s = (t + r).toString(16).toUpperCase().padStart(6, "0");
  return `${s.slice(0, 2)}-${s.slice(2, 4)}-${s.slice(4, 6)}`;
}
function vc(t, r) {
  if (r < 0 || r > 16382)
    throw new Error("Maximum of unique APPID counters exceeded for this range");
  return (t + r).toString(16).toUpperCase().padStart(4, "0");
}
async function xp(t, r, a, s) {
  const h = Pt().lnodeTypes.find(
    (S) => S.typeId === Z(a, "lnType") && S.lnClass === Z(a, "lnClass")
  )?.dataObjects.find((S) => S.name === r.sourceDataObject)?.dataAttributes?.find((S) => S.name === r.sourceDataAttribute), w = await t.addRecord({
    tagName: "FCDA",
    attributes: [
      { name: "daName", value: r.sourceDataAttribute },
      { name: "doName", value: r.sourceDataObject },
      { name: "fc", value: h?.fc || "" },
      { name: "ldInst", value: Z(a, "ldInst") || "" },
      { name: "lnClass", value: Z(a, "lnClass") || "" },
      { name: "lnInst", value: Z(a, "lnInst") || "" },
      { name: "prefix", value: Z(a, "prefix") || "" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, w), w;
}
async function Np(t, r, a, s) {
  let f;
  r === Xe.SMV ? f = "PhsMeas" + a.slice(a.length - 2) : f = a + "_DS";
  const d = (await t.findChildRecords(s, {
    tagNames: ["DataSet"],
    attrs: [{ name: "name", value: f }]
  }))[0];
  if (d)
    return d;
  const c = await t.addRecord({
    tagName: "DataSet",
    attributes: [{ name: "name", value: f }],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(s, c), c;
}
async function Ep(t, r, a, s, f, d) {
  const c = (await t.findParentRecordsWithinDepthAndGivenTagName(a, 1 / 0, [
    "Function"
  ]))[0];
  Ze(c, "Parent Function of sending LNode not found when implementing dataflow");
  let h;
  if (r.dataflowType === Xe.GOOSE && (h = await Rp(
    t,
    a,
    s,
    c,
    f,
    d
  )), r.dataflowType === Xe.SMV && (h = await Op(
    t,
    a,
    s,
    f,
    d
  )), r.dataflowType === Xe.REPORT) {
    const S = Z(a, "lnClass") === "MMXU";
    h = await Tp(
      t,
      a,
      s,
      c,
      f,
      d,
      S
    );
  }
  return Ze(h, "Control Block record could not be created"), h;
}
async function Tp(t, r, a, s, f, d, c) {
  const h = (Z(s, "name") + "_RPT").replace(" ", "_"), w = Z(a, "iedName");
  Ze(w, "iedName of receiving LNode not found");
  const S = await t.db.table(Fe).where({ tagName: "ReportControl" }).toArray(), O = S.filter(
    (ge) => ge.parent?.id === d.id
  );
  for (const ge of O) {
    const Ne = Z(ge, "name")?.startsWith(h), G = (await t.findChildRecordsWithinDepthAndGivenTagName(ge, 2, ["ClientLN"]))[0];
    Ze(G, "ClientLN record inside ReportControl not found");
    const Ie = Z(G, "iedName") === w;
    if (Ne && Ie)
      return ge;
  }
  const M = O.filter(
    (ge) => Z(ge, "name")?.startsWith(h) ?? !1
  ).length + 1, B = h + M, Y = nu(
    r,
    f,
    B
  ), V = S.length + 1, U = {
    tagName: "ReportControl",
    attributes: [
      { name: "name", value: B },
      { name: "confRev", value: V.toString() },
      { name: "rptID", value: Y }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  };
  c ? U.attributes.push({ name: "buffered", value: "false" }) : (U.attributes.push({ name: "buffered", value: "true" }), U.attributes.push({ name: "bufTime", value: "100" }));
  const W = await t.addRecord(U);
  await t.ensureRelationship(d, W);
  const F = {
    tagName: "TrgOps",
    attributes: [
      { name: "dchg", value: "true" },
      { name: "dupd", value: "false" },
      { name: "gi", value: "true" },
      { name: "period", value: "false" },
      { name: "qchg", value: "true" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  };
  c ? F.attributes.push({ name: "dupd", value: "true" }) : F.attributes.push({ name: "dupd", value: "false" });
  const K = await t.addRecord(F);
  await t.ensureRelationship(W, K);
  const ae = await t.addRecord({
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
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(W, ae);
  const xe = await t.addRecord({
    tagName: "RptEnabled",
    attributes: [{ name: "max", value: "5" }],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(W, xe), await Cp(t, xe, a), W;
}
async function Op(t, r, a, s, f) {
  const d = Z(a, "iedName");
  Ze(d, "iedName of receiving LNode not found");
  const c = await t.db.table(Fe).where({ tagName: "SampledValueControl" }).toArray(), h = c.filter(
    (V) => V.parent?.id === f.id
  );
  for (const V of h) {
    const U = (await t.findChildRecordsByTagName(V, ["IEDName"]))[0];
    if (Ze(U, "IEDName record inside SampledValueControl not found"), U.value === d)
      return V;
  }
  const w = "MSVCB", S = h.length + 1;
  if (S > 99)
    throw new Error("Maximum number of SampledValueControl elements (99) exceeded");
  const O = w + S.toString().padStart(2, "0"), L = nu(
    r,
    s,
    O
  ), M = c.length + 1, B = await t.addRecord({
    tagName: "SampledValueControl",
    attributes: [
      { name: "name", value: O },
      { name: "confRev", value: M.toString() },
      { name: "smvID", value: L },
      { name: "multicast", value: "true" },
      { name: "nofASDU", value: "2" },
      { name: "smpMod", value: "SmpPerSec" },
      { name: "smpRate", value: "80" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(f, B), await yc(t, B, d);
  const Y = await t.addRecord({
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
    namespace: bt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(B, Y), B;
}
async function yc(t, r, a) {
  const s = await t.db.table(Fe).where({ tagName: "IED" }).and((c) => Z(c, "name") === a).first();
  Ze(s, "IED record of receiving LNode not found");
  const f = (await t.findChildRecordsByTagName(s, ["AccessPoint"]))[0];
  Ze(f, "AccessPoint record of receiving IED not found");
  const d = await t.addRecord({
    tagName: "IEDName",
    attributes: [
      {
        name: "apRef",
        value: Z(f, "name") || ""
      }
    ],
    parent: null,
    namespace: bt.default,
    value: a || "",
    children: []
  });
  await t.ensureRelationship(r, d);
}
async function Cp(t, r, a) {
  const s = Z(a, "iedName"), f = await t.db.table(Fe).where({ tagName: "IED" }).and((h) => Z(h, "name") === s).first();
  Ze(f, "IED record of receiving LNode not found");
  const d = (await t.findChildRecordsByTagName(f, ["AccessPoint"]))[0];
  Ze(d, "AccessPoint record of receiving IED not found");
  const c = await t.addRecord({
    tagName: "ClientLN",
    attributes: [
      {
        name: "apRef",
        value: Z(d, "name") || ""
      },
      { name: "iedName", value: s || "" },
      { name: "ldInst", value: Z(a, "ldInst") || "" },
      { name: "prefix", value: Z(a, "prefix") || "" },
      { name: "lnClass", value: Z(a, "lnClass") || "" },
      { name: "lnInst", value: Z(a, "lnInst") || "" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  await t.ensureRelationship(r, c);
}
function nu(t, r, a) {
  const s = Z(t, "iedName"), f = Z(r, "inst");
  return `${s}${f}/LN0.${a}`;
}
async function Rp(t, r, a, s, f, d) {
  const c = (Z(s, "name") + "_GSE").replace(" ", "_"), h = Z(a, "iedName");
  Ze(h, "iedName of receiving LNode not found");
  const w = await t.db.table(Fe).where({ tagName: "GSEControl" }).toArray(), S = w.filter(
    (U) => U.parent?.id === d.id
  );
  for (const U of S) {
    const F = Z(U, "name")?.startsWith(c), K = (await t.findChildRecordsByTagName(U, ["IEDName"]))[0];
    Ze(K, "IEDName record inside GSEControl not found");
    const ae = K.value === h;
    if (F && ae)
      return U;
  }
  const L = S.filter(
    (U) => Z(U, "name")?.startsWith(c) ?? !1
  ).length + 1, M = c + L, B = nu(
    r,
    f,
    M
  ), Y = w.length + 1, V = await t.addRecord({
    tagName: "GSEControl",
    attributes: [
      { name: "name", value: M },
      { name: "confRev", value: Y.toString() },
      { name: "appID", value: B },
      { name: "type", value: "GOOSE" }
    ],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(d, V), await yc(t, V, h), V;
}
async function Ap(t, r, a, s) {
  Ze(
    r.sourceLNodeId,
    "Source LNode ID not set for dataflow connection to implement"
  ), Ze(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
  const f = await t.db.table(Fe).get(a.id);
  Ze(f, "ExtRef record not found"), zt(f, "doName", r.sourceDataObject), zt(f, "daName", r.sourceDataAttribute), zt(f, "serviceType", r.dataflowType);
  const d = await t.db.table(Fe).get(r.sourceLNodeId);
  Ze(d, "Sending LNode record not found"), zt(
    f,
    "iedName",
    Z(d, "iedName") || ""
  ), zt(
    f,
    "ldInst",
    Z(d, "ldInst") || ""
  ), zt(
    f,
    "lnClass",
    Z(d, "lnClass") || ""
  ), zt(
    f,
    "lnInst",
    Z(d, "lnInst") || ""
  ), zt(
    f,
    "prefix",
    Z(d, "prefix") || ""
  ), zt(f, "srcCBName", s);
  const c = await ru(t, r.sourceLNodeId);
  Ze(c, "LDevice for sending LNode not found");
  const h = (await t.findChildRecords(c, { tagNames: ["LN0"] }))[0];
  Ze(h, "LN0 record not found"), zt(
    f,
    "srcLDInst",
    Z(c, "inst") || ""
  ), zt(
    f,
    "srcPrefix",
    Z(h, "prefix") || ""
  ), zt(
    f,
    "srcLNClass",
    Z(h, "lnClass") || ""
  ), zt(f, "srcLNInst", Z(h, "inst") || ""), await t.updateRecord(f);
}
async function Sp(t, r, a, s) {
  Ze(
    r.destinationLNodeId,
    "Destination LNode ID not set for dataflow connection to implement"
  );
  const f = await t.db.table(Fe).get(r.id);
  Ze(f, "SourceRef record not found");
  const d = Z(a, "iedName"), c = Z(a, "ldInst"), h = await gc(t, r.destinationLNodeId);
  Ze(h, "LN record for receiving LNode not found");
  const w = Z(h, "prefix"), S = Z(h, "lnClass"), O = Z(h, "inst"), L = `${d}${c}/${w}${S}${O}.${s.intAddr}`;
  zt(f, "extRefUuid", s.uuid), zt(f, "extRefAddr", L), await t.updateRecord(f);
}
function zt(t, r, a) {
  const s = t.attributes.find((f) => f.name === r);
  s ? s.value = a : t.attributes.push({ name: r, value: a });
}
async function ru(t, r) {
  const a = await t.db.table(Fe).get(r), s = await t.db.table(Fe).where({ tagName: "IED" }).and(
    (c) => Z(c, "name") === Z(a, "iedName")
  ).first();
  Ze(s, "IED record not found for receiving LNode");
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(
    s,
    3,
    ["LDevice"]
  )).find((c) => Z(c, "inst") === Z(a, "ldInst"));
  return Ze(d, "LDevice record not found for receiving LNode"), d;
}
async function gc(t, r) {
  const a = await t.db.table(Fe).get(r), s = await ru(t, r);
  if (!s)
    return;
  const d = (await t.findChildRecordsWithinDepthAndGivenTagName(s, 1, [
    "LN"
  ])).find((c) => Z(c, "lnType") === Z(a, "lnType") && Z(c, "inst") === Z(a, "lnInst") && Z(c, "lnClass") === Z(a, "lnClass") && Z(c, "prefix") === Z(a, "prefix"));
  return Ze(d, "LN record not found for receiving LNode"), d;
}
async function Dp(t, r) {
  if (!Ip(r))
    return;
  const a = await gc(t, r.destinationLNodeId);
  return a ? (await t.findChildRecordsWithinDepthAndGivenTagName(a, 2, [
    "ExtRef"
  ])).find((d) => {
    const c = Z(d, "pLN") === r.preferredLNode && Z(d, "pDO") === r.preferredDataObject && Z(d, "pDA") === r.preferredDataAttribute;
    Ze(r.dataflowType, "Dataflow type not set for dataflow connection to implement");
    const h = Z(d, "pServT"), w = h === void 0 || h === r.dataflowType, S = Z(d, "srcCBName");
    return c && w && !(S !== void 0 && S !== "");
  }) : void 0;
}
function Ip(t) {
  return t.preferredLNode.trim() !== "" && t.preferredDataObject.trim() !== "" && t.preferredDataAttribute.trim() !== "";
}
async function Yi(t, r) {
  const a = await Mi(
    t,
    r,
    Qt.prefix
  ), s = await t.findChildRecordsByTagName(a, [
    "LNodeInputs"
  ]);
  if (s.length == 1)
    return s[0];
  if (s.length == 0) {
    const d = await t.addRecord({
      tagName: "LNodeInputs",
      attributes: [],
      parent: null,
      namespace: Qt,
      value: "",
      children: []
    });
    return await t.ensureRelationship(a, d), d;
  }
  const f = {
    msg: `More than one LNodeInputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(f));
}
async function cs(t, r) {
  const a = await Mi(
    t,
    r,
    Qt.prefix
  ), s = await t.findChildRecordsByTagName(a, [
    "LNodeOutputs"
  ]);
  if (s.length == 1)
    return s[0];
  if (s.length == 0) {
    const d = await t.addRecord({
      tagName: "LNodeOutputs",
      attributes: [],
      parent: null,
      namespace: Qt,
      value: "",
      children: []
    });
    return await t.ensureRelationship(a, d), d;
  }
  const f = {
    msg: `More than one LNodeOutputs element found in LNode with uuid ${r.uuid}`
  };
  throw new Error(JSON.stringify(f));
}
async function Pp(t, r, a, s) {
  const f = [], d = await ta(
    t,
    ds(s, r)
  );
  if (f.push(d), await t.ensureRelationship(a, d), s.includeQuality) {
    const c = {
      ...s,
      attribute: "q"
      // Set to 'q' for Quality
    }, h = await ta(
      t,
      ds(c, r)
    );
    f.push(h), await t.ensureRelationship(a, h);
  }
  if (s.includeTimestamp) {
    const c = {
      ...s,
      attribute: "t"
      // Set to 't' for Timestamp
    }, h = await ta(
      t,
      ds(c, r)
    );
    f.push(h), await t.ensureRelationship(a, h);
  }
  return f;
}
async function Mi(t, r, a) {
  const s = await t.db.table(Fe).where({ "parent.id": r.id, tagName: "Private" }).and((c) => Z(c, "type") === a).first();
  if (s)
    return s;
  const f = await t.db.table(Fe).get(r.id);
  if (!f) {
    const c = {
      msg: `LNode element with uuid ${r.uuid} not found`
    };
    throw new Error(JSON.stringify(c));
  }
  const d = await t.addRecord({
    tagName: "Private",
    attributes: [{ name: "type", value: a }],
    parent: null,
    namespace: bt.default,
    value: "",
    children: []
  });
  return await t.ensureRelationship(f, d), d;
}
async function ta(t, r) {
  const a = {
    tagName: "SourceRef",
    namespace: Qt,
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
  return await t.addRecord(a);
}
async function kp(t, r, a) {
  const s = r.dataObjectSpecifications?.find(
    (O) => O.name === a.signal
  ), f = s?.dataAttributeSpecifications.find(
    (O) => O.name === a.attribute
  ), c = Pt().lnodeTypes.find((O) => O.lnClass === r.lnClass), h = c?.dataObjects.find((O) => O.name === a.signal), w = h?.dataAttributes.find((O) => O.name === a.attribute);
  if (!c || !h || !w) {
    const O = `LNodeType, DO type or DA type not found for LNode class ${r.lnClass}, DO ${a.signal}, DA ${a.attribute}`;
    throw console.error(O), new Error(O);
  }
  let S;
  if (!s) {
    const O = await Mi(
      t,
      r,
      Qt.prefix
    ), L = {
      name: a.signal,
      desc: h.desc
    };
    S = await Ds(t, L), await t.ensureRelationship(O, S);
  }
  if (!S && (S = await t.db.table(Fe).get(s.id), !S))
    throw new Error(`DOS element with id ${s.id} not found`);
  if (f || await fs(t, S, a.attribute, w.desc), a.includeQuality) {
    const O = h?.dataAttributes.find((M) => M.name === "q");
    if (!O)
      throw new Error(`DA type 'q' not allowed for DO ${a.signal}`);
    s?.dataAttributeSpecifications.find(
      (M) => M.name === O.name
    ) || await fs(t, S, O.name, O.desc);
  }
  if (a.includeTimestamp) {
    const O = h?.dataAttributes.find((M) => M.name === "t");
    if (!O)
      throw new Error(`DA type 't' not allowed for DO ${a.signal}`);
    s?.dataAttributeSpecifications.find(
      (M) => M.name === O.name
    ) || await fs(t, S, O.name, O.desc);
  }
}
async function fs(t, r, a, s) {
  const d = await bc(
    t,
    {
      name: a,
      desc: s
    }
  );
  await t.ensureRelationship(r, d);
}
async function Lp(t, r) {
  const a = {
    tagName: "ControlRef",
    namespace: Qt,
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
  return await t.addRecord(a);
}
async function Oo(t, r, a, s) {
  if (!r) return "";
  const f = await t.table(Fe).where({ tagName: "LNode" }).and((O) => Z(O, "uuid") === r).first();
  if (!f) return "";
  const d = [];
  let c = f;
  const h = ["LNode", "SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
  for (; c && c.parent; ) {
    if (h.includes(c.tagName)) {
      const O = Z(c, "name");
      O && d.unshift(O);
    }
    c = await t.table(Fe).get(c.parent.id);
  }
  const w = (() => {
    const O = f.attributes?.find((B) => B.name === "prefix")?.value || "", L = f.attributes?.find((B) => B.name === "lnClass")?.value || "", M = f.attributes?.find((B) => B.name === "lnInst")?.value || "";
    return `${O}${L}${M}`;
  })();
  d.push(w);
  let S = d.join("/");
  return a && (S += `.${a}`, s && (S += "." + s)), S;
}
async function jp(t, r, a) {
  const s = await Oo(t, r), f = Z(a, "input"), d = Z(a, "inputInst"), c = Z(a, "pDA");
  let h = `${s}.${f}`;
  return d && (h += `(${d})`), c && (h += `.${c}`), h;
}
async function Fp(t, r, a) {
  const s = await Oo(t, r), f = Z(a, "output"), d = Z(a, "outputInst");
  let c = `${s}.${f}`;
  return d && (c += `(${d})`), c;
}
async function Ki(t, r) {
  const a = await t.db.table(Fe).get(r);
  if (!a || !a?.parent)
    return [];
  const s = await t.db.table(Fe).get(a.parent.id);
  return s?.tagName === "Function" || s?.tagName === "SubFunction" ? await t.db.table(Fe).where({ tagName: "FunctionRef" }).and(
    (c) => Z(c, "functionUuid") === Z(s, "uuid")
  ).toArray() : [];
}
async function ou(t, r) {
  const a = [];
  for (const s of r)
    (await t.findParentRecordsWithinDepthAndGivenTagName(
      s,
      3,
      ["Application"]
    )).length === 1 && a.push(s);
  return a;
}
async function Ju(t, r) {
  const a = /* @__PURE__ */ new Map();
  for (const s of r) {
    const f = await t.findParentRecordsWithinDepthAndGivenTagName(
      s,
      3,
      ["Application"]
    );
    f.length === 1 && a.set(s.id, f[0].id);
  }
  return a;
}
async function Zu(t, r, a) {
  const s = await Ki(t, r.id);
  if (s.length === 0)
    return;
  const f = await ou(
    t,
    s
  );
  for (const d of f) {
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
      namespace: Qt,
      value: "",
      children: []
    }), await t.ensureRelationship(d, c));
    for (const h of a) {
      const w = await t.addRecord({
        tagName: "LNodeInputRef",
        attributes: [
          {
            name: "sourceRef",
            value: await jp(t.db, r.uuid, h)
          },
          { name: "sourceRefUuid", value: Z(h, "uuid") || "" }
        ],
        parent: null,
        namespace: Qt,
        value: "",
        children: []
      });
      await t.ensureRelationship(c, w);
    }
  }
}
async function Mp(t, r, a) {
  const s = await Ki(t, r.id);
  if (s.length === 0)
    return;
  const f = await ou(
    t,
    s
  );
  for (const d of f) {
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
      namespace: Qt,
      value: "",
      children: []
    }), await t.ensureRelationship(d, c));
    const h = await t.addRecord({
      tagName: "LNodeOutputRef",
      attributes: [
        {
          name: "controlRef",
          value: await Fp(
            t.db,
            r.uuid,
            a
          )
        },
        { name: "controlRefUuid", value: Z(a, "uuid") || "" }
      ],
      parent: null,
      namespace: Qt,
      value: "",
      children: []
    });
    await t.ensureRelationship(c, h);
  }
}
async function Kp(t, r, a, s, f) {
  const d = await Ki(t, r.id);
  if (d.length === 0)
    return;
  const c = await ou(
    t,
    d
  ), h = await Oo(t.db, r.uuid, a, s);
  for (const w of c)
    await Fr(
      t,
      w,
      "Process",
      h,
      r.uuid,
      a,
      s
    ), f === Xe.REPORT && await Fr(
      t,
      w,
      "Signalisation",
      h,
      r.uuid,
      a,
      s
    );
}
async function Xi(t, r, a, s, f, d) {
  const c = await Ki(
    t,
    r.id
  ), h = await Ju(
    t,
    c
  ), w = await Ki(
    t,
    a.id
  ), S = await Ju(
    t,
    w
  );
  let O = "", L, M;
  if (s === Xe.CONTROL ? (O = await Oo(t.db, a.uuid, f), L = a, M = w.filter(
    (K) => Array.from(S.keys()).includes(K.id)
  )) : (O = await Oo(t.db, r.uuid, f, d), L = r, M = c.filter(
    (K) => Array.from(h.keys()).includes(K.id)
  )), M.length === 0)
    return;
  for (const K of M)
    s === Xe.REPORT && await Fr(
      t,
      K,
      "Signalisation",
      O,
      L.uuid,
      f,
      d
    ), s === Xe.CONTROL && await Fr(
      t,
      K,
      "Control",
      O,
      L.uuid,
      f
    );
  const V = Pt().lnodeTypes.find((K) => K.lnClass === L.lnClass)?.dataObjects.find((K) => K.name === f);
  if (V) {
    const K = await t.db.table(Fe).where({ tagName: "DOType" }).and((xe) => Z(xe, "id") === V.type).first(), ae = Z(K, "cdc");
    if (ae === "DPL" || ae === "LPL" || ae === "VSD")
      for (const xe of M)
        await Fr(
          t,
          xe,
          "Information",
          O,
          L.uuid,
          f,
          d
        );
    else {
      const xe = L.dataObjectSpecifications?.find((ce) => ce.name === f)?.dataAttributeSpecifications.find((ce) => ce.name === d);
      if (await t.db.table(Fe).where({ tagName: "Val", "parent.id": xe?.id }).first())
        for (const ce of M)
          await Fr(
            t,
            ce,
            "Setting",
            O,
            L.uuid,
            f,
            d
          );
    }
  }
  let U = /* @__PURE__ */ new Set(), W = /* @__PURE__ */ new Set();
  function F(K, ae) {
    const xe = K.find((ge) => ge.id === ae);
    if (!xe)
      throw new Error(`FunctionRef with id ${ae} not found`);
    return xe;
  }
  if (h.size === 0)
    W = new Set(
      w.filter(
        (K) => Array.from(S.keys()).includes(K.id)
      )
    );
  else if (S.size === 0)
    W = new Set(
      c.filter(
        (K) => Array.from(h.keys()).includes(K.id)
      )
    );
  else
    for (const [
      K,
      ae
    ] of h)
      for (const [
        xe,
        ge
      ] of S) {
        const ce = F(
          c,
          K
        ), Ne = F(
          w,
          xe
        );
        ae === ge ? (U.add(ce), U.add(Ne)) : (W.add(ce), W.add(Ne));
      }
  for (const K of M)
    W.has(K) && await Fr(
      t,
      K,
      "Process",
      O,
      L.uuid,
      f,
      d
    ), U.has(K) && await Fr(
      t,
      K,
      "Internal",
      O,
      L.uuid,
      f,
      d
    );
}
async function Fr(t, r, a, s, f, d, c) {
  const h = await Bp(
    t,
    r,
    a
  );
  await $p(
    t,
    h,
    s,
    f,
    d,
    c
  );
}
async function Bp(t, r, a) {
  let s = (await t.findChildRecords(r, {
    tagNames: ["SignalRole"],
    attrs: [{ name: "name", value: a }]
  }))[0];
  return s || (s = await t.addRecord({
    tagName: "SignalRole",
    attributes: [
      { name: "name", value: a },
      { name: "uuid", value: crypto.randomUUID() }
    ],
    parent: null,
    namespace: Qt,
    value: "",
    children: []
  }), await t.ensureRelationship(r, s), s);
}
async function $p(t, r, a, s, f, d) {
  const c = [
    { name: "data", value: a },
    { name: "lnodeUuid", value: s },
    { name: "doName", value: f }
  ];
  if (d && c.push({ name: "daName", value: d }), !(await t.findChildRecords(r, {
    tagNames: ["LNodeDataRef"],
    attrs: c
  }))[0]) {
    const w = await t.addRecord({
      tagName: "LNodeDataRef",
      attributes: c,
      parent: null,
      namespace: Qt,
      value: "",
      children: []
    });
    await t.ensureRelationship(r, w);
  }
}
function qp(t) {
  return {
    id: t.id,
    uuid: Z(t, "uuid") || "",
    desc: Z(t, "desc") || "",
    intAddr: Z(t, "intAddr") || "",
    pServT: Z(t, "pServT") || "",
    pLN: Z(t, "pLN") || "",
    pDO: Z(t, "pDO") || "",
    pDA: Z(t, "pDA") || "",
    daName: Z(t, "daName") || "",
    doName: Z(t, "doName") || "",
    ldInst: Z(t, "ldInst") || "",
    lnClass: Z(t, "lnClass") || "",
    lnInst: Z(t, "lnInst") || "",
    prefix: Z(t, "prefix") || "",
    serviceType: Z(t, "serviceType") || "",
    srcCBName: Z(t, "srcCBName") || "",
    srcLDInst: Z(t, "srcLDInst") || "",
    srcLNClass: Z(t, "srcLNClass") || "",
    iedName: Z(t, "iedName") || ""
  };
}
function ds(t, r) {
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
function Up(t, r) {
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
function Vp(t) {
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
async function Ds(t, r) {
  const a = {
    tagName: "DOS",
    namespace: Qt,
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
  return await t.addRecord(a);
}
async function bc(t, r) {
  const a = {
    tagName: "DAS",
    namespace: Qt,
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
  return await t.addRecord(a);
}
function wc(t) {
  return {
    findAllEnrichedLNodes: r,
    findAllLNodeTypes: a,
    enrichWithDataObjectSpecifications: d
  };
  async function r() {
    const h = await c();
    return h.length ? await d(h) : [];
  }
  async function a() {
    const h = await t.table(Fe).where({ tagName: "LNodeType" }).toArray(), w = [];
    for (const S of h)
      w.push({
        id: S.id,
        typeId: Z(S, "id") ?? "",
        lnClass: Z(S, "lnClass") ?? "",
        dataObjects: await s(S)
      });
    return w;
  }
  async function s(h) {
    if (!h.children) return [];
    const w = [];
    for (const S of h.children) {
      if (S.tagName !== "DO") continue;
      const O = await t.table(Fe).get(S.id);
      O && w.push({
        id: O.id,
        name: Z(O, "name") ?? "",
        type: Z(O, "type") ?? "",
        desc: Z(O, "desc") ?? "",
        dataAttributes: await f(O)
      });
    }
    return w;
  }
  async function f(h) {
    const w = Z(h, "type");
    if (!w) return [];
    const S = (await t.table(Fe).where({ tagName: "DOType" }).toArray()).find((L) => L.attributes?.find((M) => M.name === "id" && M.value === w));
    if (!S || !S.children) return [];
    const O = [];
    for (const L of S.children) {
      if (L.tagName !== "DA") continue;
      const M = await t.table(Fe).get(L.id);
      M && O.push({
        id: M.id,
        name: Z(M, "name") ?? "",
        type: Z(M, "type") ?? "",
        desc: Z(M, "desc") ?? "",
        bType: Z(M, "bType") ?? "",
        fc: Z(M, "fc") ?? ""
      });
    }
    return O;
  }
  async function d(h) {
    const w = await t.table(Fe).where({ tagName: "Private" }).toArray(), S = await t.table(Fe).where({ tagName: "DOS" }).toArray(), O = await t.table(Fe).where({ tagName: "DAS" }).toArray(), L = await t.table(Fe).where({ tagName: "SubscriberLNode" }).toArray();
    return Promise.all(
      h.map(async (M) => {
        const B = w.find(
          (V) => V.parent?.id === M.id && V.parent?.tagName === "LNode" && Z(V, "type") === "eIEC61850-6-100"
        );
        if (!B || !B.children)
          return { ...M, dataObjectSpecifications: [] };
        const Y = [];
        for (const V of B.children) {
          if (V.tagName !== "DOS") continue;
          const U = S.find((F) => F.id === V.id);
          if (!U) continue;
          const W = [];
          if (U.children)
            for (const F of U.children) {
              if (F.tagName !== "DAS") continue;
              const K = O.find((xe) => xe.id === F.id);
              if (!K) continue;
              let ae = [];
              if (K.children) {
                const xe = K.children.filter((ce) => ce.tagName === "SubscriberLNode"), ge = L.filter(
                  (ce) => xe.some((Ne) => Ne.id === ce.id)
                );
                for (const ce of ge)
                  ae.push({
                    id: ce.id,
                    inputName: Z(ce, "inputName") ?? "",
                    service: iu(ce, "service"),
                    pLN: Z(ce, "pLN") ?? "",
                    resourceName: Z(ce, "resourceName") ?? ""
                  });
              }
              W.push({
                id: K.id,
                name: Z(K, "name") ?? "",
                desc: Z(K, "desc") ?? "",
                subscriberLNodes: ae
              });
            }
          Y.push({
            id: U.id,
            name: Z(U, "name") ?? "",
            desc: Z(U, "desc") ?? "",
            dataAttributeSpecifications: W
          });
        }
        return { ...M, dataObjectSpecifications: Y };
      })
    );
  }
  async function c() {
    return (await t.table(Fe).where({ tagName: "LNode" }).toArray()).map((w) => ({
      id: w.id,
      uuid: Z(w, "uuid") ?? "",
      iedName: Z(w, "iedName") ?? "",
      prefix: Z(w, "prefix") ?? "",
      lnClass: Z(w, "lnClass") ?? "",
      lnInst: Z(w, "lnInst") ?? "",
      lnType: Z(w, "lnType") ?? "",
      dataObjects: []
    }));
  }
}
function iu(t, r) {
  const a = t?.attributes?.find((f) => f.name === r)?.value;
  if (!a) return;
  switch (a.toUpperCase()) {
    case "GOOSE":
      return Xe.GOOSE;
    case "SMV":
      return Xe.SMV;
    case "REPORT":
      return Xe.REPORT;
    case "WIRED":
      return Xe.WIRED;
    case "CONTROL":
      return Xe.CONTROL;
    case "INTERNAL":
      return Xe.INTERNAL;
    default:
      return;
  }
}
function Wp(t) {
  const r = tu(t);
  return {
    findAllExistingConnections: a,
    findAllExistingControlledConnections: s
  };
  async function a() {
    const f = await t.table(Fe).where({ tagName: "SourceRef" }).toArray();
    if (!f.length) return [];
    const d = [];
    for (const c of f) {
      if (!c.attributes) continue;
      const h = Z(c, "sourceLNodeUuid"), w = await t.table(Fe).where({ tagName: "LNode" }).toArray().then(
        (L) => L.find(
          (M) => M.attributes?.some(
            (B) => B.name === "uuid" && B.value === h
          )
        )?.id
      ) || null, S = await r.findParentRecordsWithinDepthAndGivenTagName(
        c,
        3,
        ["LNode"]
      );
      if (S.length != 1) {
        const L = {
          msg: "LNode record not found for SourceRef id",
          id: c.id
        };
        throw console.error(L), new Error(JSON.stringify(L));
      }
      const O = {
        id: c.id,
        sourceLNodeId: w,
        destinationLNodeId: S[0].id,
        sourceDataObject: Z(c, "sourceDoName") || "",
        sourceDataAttribute: Z(c, "sourceDaName") || "",
        dataflowType: iu(c, "service"),
        inputInstance: Z(c, "inputInst") || "",
        input: Z(c, "input") || "",
        preferredLNode: Z(c, "pLN") || "",
        preferredDataObject: Z(c, "pDO") || "",
        preferredDataAttribute: Z(c, "pDA") || "",
        processResource: Z(c, "resourceName") || ""
      };
      d.push(O);
    }
    return d;
  }
  async function s() {
    const f = await t.table(Fe).where({ tagName: "ControlRef" }).toArray();
    if (!f.length) return [];
    const d = [];
    for (const c of f) {
      if (!c.attributes) continue;
      const h = Z(c, "controlledLNodeUuid"), w = Z(c, "controlledDoName"), S = await t.table(Fe).where({ tagName: "LNode" }).toArray().then(
        (M) => M.find(
          (B) => B.attributes?.some(
            (Y) => Y.name === "uuid" && Y.value === h
          )
        )?.id
      ) || null, O = await r.findParentRecordsWithinDepthAndGivenTagName(
        c,
        3,
        // ControlRef ->  LNodeOutputs -> Private -> LNode
        ["LNode"]
      );
      if (O.length != 1) {
        const M = {
          msg: "LNode record not found for ControlRef id",
          id: c.id
        };
        throw console.error(M), new Error(JSON.stringify(M));
      }
      const L = {
        controllerLNodeId: O[0].id,
        controlledLNodeId: S,
        controlledDataObject: w || "",
        dataflowType: Xe.CONTROL,
        outputInstance: Z(c, "outputInst") || "",
        outputName: Z(c, "output") || "",
        id: c.id
      };
      d.push(L);
    }
    return d;
  }
}
function Gp(t) {
  const r = tu(t), a = wc(t);
  return {
    findAllSourcePlaceholders: s
  };
  async function s() {
    let h = [];
    const w = await a.findAllEnrichedLNodes();
    if (!w.length) return h;
    for (const O of w) {
      const L = O.dataObjectSpecifications ?? [];
      for (const M of L) {
        const B = M.dataAttributeSpecifications ?? [];
        for (const Y of B) {
          const V = Y.subscriberLNodes ?? [];
          for (const U of V)
            h.push({
              lNodeId: O.id,
              id: U.id,
              dataObject: M.name,
              dataAttribute: Y.name,
              dataflowType: U.service,
              preferredLNode: U.pLN,
              input: U.inputName,
              processResource: U.resourceName,
              isFulfilled: void 0
            });
        }
      }
    }
    return await c(h);
  }
  async function f() {
    const w = (await t.table(Fe).where({ tagName: "SourceRef" }).toArray()).map(async (O) => ({
      id: O.id,
      uuid: Z(O, "uuid") ?? "",
      pDO: Z(O, "pDO") ?? "",
      pDA: Z(O, "pDA") ?? "",
      pLN: Z(O, "pLN") ?? "",
      input: Z(O, "input") ?? "",
      inputInst: Z(O, "inputInst") ?? "",
      source: Z(O, "source") ?? "",
      sourceLNodeUuid: Z(O, "sourceLNodeUuid") ?? "",
      dataflowType: iu(O, "service"),
      sourceDoName: Z(O, "sourceDoName") ?? "",
      sourceDaName: Z(O, "sourceDaName") ?? "",
      // Add the lnClass for finding fulfilled placeholders
      lnClassOfParentLNode: await d(O.id, 3)
    }));
    return await Promise.all(w);
  }
  async function d(h, w) {
    const S = await r.db.table(Fe).get(h);
    if (S) {
      const O = await r.findParentRecordsWithinDepthAndGivenTagName(
        S,
        w,
        ["LNode"]
      );
      return Z(O[0], "lnClass");
    } else return "";
  }
  async function c(h) {
    const w = await f(), S = [];
    for (const O of h) {
      const L = w.some((M) => !(O.preferredLNode && O.preferredLNode !== M.lnClassOfParentLNode || O.dataflowType && O.dataflowType !== M.dataflowType || O.dataObject && O.dataObject !== M.sourceDoName || O.dataAttribute && O.dataAttribute !== M.sourceDaName));
      S.push({
        ...O,
        isFulfilled: L
      });
    }
    return S;
  }
}
const Pt = /* @__PURE__ */ eu("dataflow/app", () => {
  let t = null;
  const r = tt(""), a = tt([]), s = tt([]), f = tt([]), d = tt([]), c = tt([]), h = Xn(), w = Xn(), S = Xn(), O = Xn();
  async function L(U) {
    M(), t = new ca(U), await t.open(), S.value = wc(t), w.value = Wp(t), O.value = Gp(t), r.value = U, h.value = gp(t), a.value = await S.value.findAllEnrichedLNodes(), s.value = await S.value.findAllLNodeTypes(), f.value = await w.value.findAllExistingConnections(), d.value = await w.value.findAllExistingControlledConnections(), c.value = await O.value.findAllSourcePlaceholders();
  }
  function M() {
    t && (t.close(), t = null);
  }
  async function B() {
    f.value = await w.value.findAllExistingConnections(), d.value = await w.value.findAllExistingControlledConnections();
  }
  async function Y(U) {
    const F = (await S.value.findAllEnrichedLNodes()).find((K) => K.id === U);
    if (F) {
      const K = a.value.findIndex((ae) => ae.id === U);
      K !== -1 && (a.value[K] = F);
    }
  }
  async function V() {
    c.value = await O.value.findAllSourcePlaceholders();
  }
  return {
    // states
    activeFilename: r,
    lnodes: a,
    lnodeTypes: s,
    connections: f,
    controlledConnections: d,
    sourcePlaceholders: c,
    // getters
    dataflowSdk: h,
    // actions
    initApp: L,
    closeDatabase: M,
    refreshConnections: B,
    refreshLNode: Y,
    refreshPlaceholders: V
  };
}), Hp = { key: 0 }, Yp = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Xp = { key: 1 }, Qp = { key: 2 }, zp = /* @__PURE__ */ kt({
  __name: "connection-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, a = Pt(), { lnodes: s } = qt(a), f = st(() => s.value.find((h) => h.id === r.connection.sourceLNodeId)?.dataObjectSpecifications?.find(
      (h) => h.name === r.connection.sourceDataObject
    )), d = st(() => f?.value?.dataAttributeSpecifications?.find(
      (c) => c.name === r.connection.sourceDataAttribute
    ));
    return (c, h) => (de(), pe("div", null, [
      (de(), pe("div", Hp, [
        h[0] || (h[0] = j("h2", { class: "text-lg font-bold mb-2" }, "Connection Details", -1)),
        c.connection.dataflowType ? (de(), pe("span", Yp, Ee(c.connection.dataflowType), 1)) : et("", !0),
        j("p", null, "Input: " + Ee(c.connection.input), 1),
        j("p", null, "Input Instance: " + Ee(c.connection.inputInstance || "-"), 1),
        h[1] || (h[1] = j("br", null, null, -1)),
        j("p", null, "Data Object: " + Ee(c.connection.sourceDataObject || "-"), 1),
        f.value?.desc ? (de(), pe("p", Xp, "Data Object Desc: " + Ee(f.value?.desc), 1)) : et("", !0),
        j("p", null, "Data Attribute: " + Ee(c.connection.sourceDataAttribute || "-"), 1),
        d.value?.desc ? (de(), pe("p", Qp, "Data Attribute Desc: " + Ee(d.value?.desc), 1)) : et("", !0),
        h[2] || (h[2] = j("br", null, null, -1)),
        j("p", null, "Preferred LNode: " + Ee(c.connection.preferredLNode || "-"), 1),
        j("p", null, "Preferred Data Object: " + Ee(c.connection.preferredDataObject || "-"), 1),
        j("p", null, "Preferred Data Attribute: " + Ee(c.connection.preferredDataAttribute || "-"), 1),
        j("p", null, "Process Resource: " + Ee(c.connection.processResource || "-"), 1)
      ]))
    ]));
  }
}), Jp = { class: "grid grid-cols-2 gap-4 mt-4" }, Zp = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, eh = ["value"], th = { class: "grid grid-cols-2 gap-4 mt-4" }, nh = ["value", "title"], rh = { class: "grid grid-cols-2 gap-4 mt-4" }, oh = ["value", "title"], ih = { class: "grid grid-cols-2 gap-4 mt-4" }, ah = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, sh = ["value"], uh = { class: "grid grid-cols-2 gap-4 mt-4" }, lh = { class: "flex items-center" }, ch = { class: "flex items-center" }, fh = ["value"], dh = { class: "grid grid-cols-2 gap-4 mt-4" }, ph = { class: "mt-4" }, hh = { class: "mt-4" }, mh = { class: "mt-4 flex items-center" }, vh = /* @__PURE__ */ kt({
  __name: "dataflow-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, a = Jn(), s = Pt(), { lnodeTypes: f, dataflowSdk: d } = qt(s), c = tt(M()), h = tt(!1), w = tt([]), S = tt(!0);
    $o(async () => {
      w.value = await d.value.findExistingInputs(r.destinationLNode);
    }), en(h, (W) => {
      W ? c.value.inputName = "" : c.value.inputName = c.value.signal;
    }), en(
      [
        () => c.value.inputName,
        () => c.value.attribute
      ],
      async ([W, F]) => {
        const K = await d.value.calculateNextInputInstance(
          W,
          F,
          r.destinationLNode
        );
        c.value.inputInstance = K.toString();
      }
    ), en(
      () => c.value.signal,
      (W, F) => {
        const K = c.value.inputName !== F && c.value.inputName !== "";
        !h.value && !K && (c.value.inputName = W);
      }
    ), td(() => {
      switch (U(), c.value.type = r.dataflowType, r.dataflowType) {
        case Xe.GOOSE:
        case Xe.SMV:
          c.value.includeQuality = !0, c.value.includeTimestamp = !1;
          break;
        case Xe.REPORT:
          c.value.includeQuality = !0, c.value.includeTimestamp = !0;
          break;
        default:
          c.value.includeQuality = !1, c.value.includeTimestamp = !1;
      }
    });
    const O = st(() => !r.dataflowType || !r.sourceLNode ? [] : f.value.find((W) => W.typeId === r.sourceLNode.lnType)?.dataObjects.filter(
      (W) => W.dataAttributes.some(
        (F) => Ko[r.dataflowType]?.includes(F.fc)
      )
    ).sort((W, F) => W.name.localeCompare(F.name)) ?? []), L = st(() => !r.dataflowType || !r.sourceLNode ? [] : f.value.find((W) => W.typeId === r.sourceLNode.lnType)?.dataObjects.find((W) => W.name === c.value.signal)?.dataAttributes.filter(
      (W) => Ko[r.dataflowType].includes(W.fc)
    ).filter((W) => !Fi.includes(W.name)).sort((W, F) => W.name.localeCompare(F.name)) ?? []);
    en(
      [() => O.value, () => r.sourcePlaceholder],
      ([W, F]) => {
        if (F && W.length > 0) {
          const K = W.find((ae) => ae.name === F.dataObject);
          c.value.signal = K ? K.name : "";
        }
      },
      { immediate: !0 }
    ), en(
      [
        () => L.value,
        () => r.sourcePlaceholder,
        () => c.value.signal
      ],
      ([W, F, K]) => {
        if (F && W.length > 0) {
          const ae = W.find((xe) => xe.name === F.dataAttribute);
          ae && K === F.dataObject && (c.value.attribute = ae.name);
        }
      },
      { immediate: !0 }
    ), en(
      [
        () => c.value.signal,
        () => c.value.attribute,
        () => h.value,
        () => r.sourcePlaceholder
      ],
      ([W, F, K, ae]) => {
        ae && ae.input && W !== "" && F !== "" && K === !1 && (c.value.inputName = ae.input);
      },
      { immediate: !0 }
    );
    function M() {
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
    function B(W) {
      for (const F of W)
        c.value[F] = "";
    }
    async function Y() {
      try {
        if (!V(c.value))
          return;
        await d.value.createConnection(
          c.value,
          r.sourceLNode,
          r.destinationLNode,
          S.value
        ), a.handleClose();
      } catch (W) {
        console.error("Error creating dataflow:", W), alert(`Error creating dataflow: ${W instanceof Error ? W.message : "Unknown error"}`);
      }
    }
    function V(W) {
      return W.type ? W.signal ? W.attribute ? W.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function U() {
      c.value = M(), h.value = !1, S.value = !0;
    }
    return (W, F) => (de(), pe(He, null, [
      F[27] || (F[27] = j("hr", { class: "solid mt-4" }, null, -1)),
      j("form", {
        method: "dialog",
        onSubmit: Y
      }, [
        j("div", Jp, [
          F[11] || (F[11] = j("label", {
            for: "source-select",
            class: "col-start-1 self-center"
          }, "Source", -1)),
          j("select", Zp, [
            j("option", {
              value: r.sourceLNode.id
            }, Ee(Re(Yn)(W.sourceLNode)), 9, eh)
          ])
        ]),
        j("div", th, [
          F[13] || (F[13] = j("label", {
            for: "data-object-select",
            class: "col-start-1 self-center"
          }, "Signal (DO)", -1)),
          Ye(j("select", {
            id: "data-object-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": F[0] || (F[0] = (K) => c.value.signal = K),
            onChange: F[1] || (F[1] = (K) => B(["attribute"]))
          }, [
            F[12] || (F[12] = j("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (de(!0), pe(He, null, Dt(O.value, (K) => (de(), pe("option", {
              key: K.name,
              value: K.name,
              title: K.desc ? `Desc: ${K.desc}` : ""
            }, Ee(K.desc ? K.name + " ⓘ" : K.name), 9, nh))), 128))
          ], 544), [
            [mn, c.value.signal]
          ])
        ]),
        j("div", rh, [
          F[15] || (F[15] = j("label", {
            for: "data-attribute-select",
            class: "col-start-1 self-center"
          }, "Attribute (DA)", -1)),
          Ye(j("select", {
            id: "data-attribute-select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": F[2] || (F[2] = (K) => c.value.attribute = K)
          }, [
            F[14] || (F[14] = j("option", {
              key: "empty",
              value: ""
            }, "-", -1)),
            (de(!0), pe(He, null, Dt(L.value, (K) => (de(), pe("option", {
              key: K.name,
              value: K.name,
              title: K.desc ? `Desc: ${K.desc}` : ""
            }, Ee(K.desc ? K.name + " ⓘ" : K.name), 9, oh))), 128))
          ], 512), [
            [mn, c.value.attribute]
          ])
        ]),
        F[24] || (F[24] = j("hr", { class: "solid mt-4" }, null, -1)),
        j("div", ih, [
          F[16] || (F[16] = j("label", {
            for: "destination-select",
            class: "col-start-1 self-center"
          }, "Destination", -1)),
          j("select", ah, [
            j("option", {
              value: r.destinationLNode.id
            }, Ee(Re(Yn)(W.destinationLNode)), 9, sh)
          ])
        ]),
        j("div", uh, [
          j("fieldset", null, [
            F[19] || (F[19] = j("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
            j("div", lh, [
              Ye(j("input", {
                type: "radio",
                id: "dataflow-new-input",
                name: "input",
                "onUpdate:modelValue": F[3] || (F[3] = (K) => h.value = K),
                value: !1,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [$r, h.value]
              ]),
              F[17] || (F[17] = j("label", { for: "dataflow-new-input" }, "New Input", -1))
            ]),
            j("div", ch, [
              Ye(j("input", {
                type: "radio",
                id: "dataflow-existing-input",
                name: "input",
                "onUpdate:modelValue": F[4] || (F[4] = (K) => h.value = K),
                value: !0,
                class: "radio radio-sm mr-2"
              }, null, 512), [
                [$r, h.value]
              ]),
              F[18] || (F[18] = j("label", { for: "dataflow-existing-input" }, "Existing Input", -1))
            ])
          ]),
          h.value ? et("", !0) : Ye((de(), pe("input", {
            key: 0,
            "aria-label": "New Input Name",
            required: "",
            type: "text",
            placeholder: "Input Name",
            class: "input col-start-2",
            "onUpdate:modelValue": F[5] || (F[5] = (K) => c.value.inputName = K)
          }, null, 512)), [
            [Ar, c.value.inputName]
          ]),
          h.value ? Ye((de(), pe("select", {
            key: 1,
            "aria-label": "Existing Input Name Select",
            required: "",
            class: "select col-start-2",
            "onUpdate:modelValue": F[6] || (F[6] = (K) => c.value.inputName = K)
          }, [
            (de(!0), pe(He, null, Dt(w.value, (K) => (de(), pe("option", {
              key: K,
              value: K
            }, Ee(K), 9, fh))), 128))
          ], 512)), [
            [mn, c.value.inputName]
          ]) : et("", !0)
        ]),
        j("div", dh, [
          F[20] || (F[20] = j("label", {
            for: "input-instance-input",
            class: "col-start-1 self-center"
          }, "Input Instance", -1)),
          Ye(j("input", {
            id: "input-instance-input",
            required: "",
            disabled: "",
            type: "text",
            class: "input col-start-2",
            "onUpdate:modelValue": F[7] || (F[7] = (K) => c.value.inputInstance = K)
          }, null, 512), [
            [Ar, c.value.inputInstance]
          ])
        ]),
        F[25] || (F[25] = j("hr", { class: "solid mt-4" }, null, -1)),
        j("div", ph, [
          Ye(j("input", {
            type: "checkbox",
            "onUpdate:modelValue": F[8] || (F[8] = (K) => c.value.includeQuality = K),
            class: "checkbox mr-2",
            id: "checkbox-include-quality"
          }, null, 512), [
            [jo, c.value.includeQuality]
          ]),
          F[21] || (F[21] = j("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
        ]),
        j("div", hh, [
          Ye(j("input", {
            type: "checkbox",
            "onUpdate:modelValue": F[9] || (F[9] = (K) => c.value.includeTimestamp = K),
            class: "checkbox mr-2",
            id: "checkbox-include-timestamp"
          }, null, 512), [
            [jo, c.value.includeTimestamp]
          ]),
          F[22] || (F[22] = j("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
        ]),
        j("div", mh, [
          Ye(j("input", {
            type: "checkbox",
            "onUpdate:modelValue": F[10] || (F[10] = (K) => S.value = K),
            class: "checkbox mr-2",
            id: "dataflow-checkbox-add-references"
          }, null, 512), [
            [jo, S.value]
          ]),
          F[23] || (F[23] = j("label", { for: "dataflow-checkbox-add-references" }, "Add References to Application", -1))
        ]),
        F[26] || (F[26] = j("div", { class: "modal-action" }, [
          j("button", {
            class: "btn bg-(--color-primary) border-none text-white",
            type: "submit",
            "data-testId": "save-dataflow-connection"
          }, " Save ")
        ], -1))
      ], 32)
    ], 64));
  }
}), yh = { class: "grid grid-cols-2 gap-4 mt-4" }, gh = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, bh = ["value"], wh = { class: "grid grid-cols-2 gap-4 mt-4" }, _h = ["value", "title"], xh = { class: "grid grid-cols-2 gap-4 mt-4" }, Nh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Eh = ["value"], Th = { class: "grid grid-cols-2 gap-4 mt-4" }, Oh = { class: "flex items-center" }, Ch = { class: "flex items-center" }, Rh = ["value"], Ah = { class: "grid grid-cols-2 gap-4 mt-4" }, Sh = { class: "mt-4 flex items-center" }, Dh = /* @__PURE__ */ kt({
  __name: "dataflow-controlled-connection-form-fields",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    dataflowType: {}
  },
  setup(t) {
    const r = t, a = Jn(), s = Pt(), { lnodeTypes: f, dataflowSdk: d } = qt(s), c = tt(
      L()
    ), h = tt(!1), w = tt([]), S = tt(!0);
    $o(async () => {
      w.value = await d.value.findExistingOutputs(r.sourceLNode);
    }), en(h, (Y) => {
      Y ? c.value.outputName = "" : c.value.outputName = c.value.controlledSignal;
    }), en(
      () => c.value.outputName,
      async (Y) => {
        const V = await d.value.calculateNextOutputInstance(
          Y,
          r.sourceLNode
        );
        c.value.outputInstance = V.toString();
      }
    ), en(
      () => c.value.controlledSignal,
      (Y, V) => {
        const U = c.value.outputName !== V && c.value.outputName !== "";
        !h.value && !U && (c.value.outputName = Y);
      }
    );
    const O = st(() => r.destinationLNode ? f.value.find((V) => V.typeId === r.destinationLNode.lnType)?.dataObjects.map((V) => ({
      name: V.name,
      desc: V.desc
    })).sort((V, U) => V.name.localeCompare(U.name)) ?? [] : []);
    function L() {
      return {
        type: Xe.CONTROL,
        controlledSignal: "",
        outputName: "",
        outputInstance: ""
      };
    }
    async function M() {
      try {
        if (!B(c.value))
          return;
        await d.value.createControlledConnection(
          c.value,
          r.sourceLNode,
          r.destinationLNode,
          S.value
        ), a.handleClose();
      } catch (Y) {
        console.error("Error creating controlled dataflow:", Y), alert(`Error creating controlled dataflow: ${Y instanceof Error ? Y.message : "Unknown error"}`);
      }
    }
    function B(Y) {
      return Y.type ? Y.outputName ? Y.controlledSignal ? !0 : (alert("Please select a controlled signal (DO)."), !1) : (alert("Please select an controller output name."), !1) : (alert("Please select a dataflow type."), !1);
    }
    return (Y, V) => (de(), pe(He, null, [
      V[16] || (V[16] = j("hr", { class: "solid mt-4" }, null, -1)),
      j("div", yh, [
        V[7] || (V[7] = j("label", {
          for: "destination-select",
          class: "col-start-1 self-center"
        }, "Controlled", -1)),
        j("select", gh, [
          j("option", {
            value: r.destinationLNode.id
          }, Ee(Re(Yn)(Y.destinationLNode)), 9, bh)
        ])
      ]),
      j("div", wh, [
        V[9] || (V[9] = j("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Controlled Signal (DO)", -1)),
        Ye(j("select", {
          id: "data-object-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": V[0] || (V[0] = (U) => c.value.controlledSignal = U)
        }, [
          V[8] || (V[8] = j("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(O.value, (U) => (de(), pe("option", {
            key: U.name,
            value: U.name,
            title: U.desc ? `Desc: ${U.desc}` : ""
          }, Ee(U.desc ? U.name + " ⓘ" : U.name), 9, _h))), 128))
        ], 512), [
          [mn, c.value.controlledSignal]
        ])
      ]),
      V[17] || (V[17] = j("hr", { class: "solid mt-4" }, null, -1)),
      j("div", xh, [
        V[10] || (V[10] = j("label", {
          for: "source-select",
          class: "col-start-1 self-center"
        }, "Controller", -1)),
        j("select", Nh, [
          j("option", {
            value: r.sourceLNode.id
          }, Ee(Re(Yn)(Y.sourceLNode)), 9, Eh)
        ])
      ]),
      j("div", Th, [
        j("fieldset", null, [
          V[13] || (V[13] = j("legend", { class: "col-start-1 self-start" }, "Controller Output Name", -1)),
          j("div", Oh, [
            Ye(j("input", {
              type: "radio",
              id: "dataflow-control-new-output",
              name: "output",
              "onUpdate:modelValue": V[1] || (V[1] = (U) => h.value = U),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, h.value]
            ]),
            V[11] || (V[11] = j("label", { for: "dataflow-control-new-output" }, "New Output", -1))
          ]),
          j("div", Ch, [
            Ye(j("input", {
              type: "radio",
              id: "dataflow-control-existing-output",
              name: "output",
              "onUpdate:modelValue": V[2] || (V[2] = (U) => h.value = U),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, h.value]
            ]),
            V[12] || (V[12] = j("label", { for: "dataflow-control-existing-output" }, "Existing Output", -1))
          ])
        ]),
        h.value ? et("", !0) : Ye((de(), pe("input", {
          key: 0,
          "aria-label": "New Output Name",
          required: "",
          type: "text",
          placeholder: "Output Name",
          class: "input col-start-2",
          "onUpdate:modelValue": V[3] || (V[3] = (U) => c.value.outputName = U)
        }, null, 512)), [
          [Ar, c.value.outputName]
        ]),
        h.value ? Ye((de(), pe("select", {
          key: 1,
          "aria-label": "Existing Output Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": V[4] || (V[4] = (U) => c.value.outputName = U)
        }, [
          (de(!0), pe(He, null, Dt(w.value, (U) => (de(), pe("option", {
            key: U,
            value: U
          }, Ee(U), 9, Rh))), 128))
        ], 512)), [
          [mn, c.value.outputName]
        ]) : et("", !0)
      ]),
      j("div", Ah, [
        V[14] || (V[14] = j("label", {
          for: "output-instance-input",
          class: "col-start-1 self-center"
        }, "Output Instance", -1)),
        Ye(j("input", {
          id: "output-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": V[5] || (V[5] = (U) => c.value.outputInstance = U)
        }, null, 512), [
          [Ar, c.value.outputInstance]
        ])
      ]),
      j("div", Sh, [
        Ye(j("input", {
          type: "checkbox",
          "onUpdate:modelValue": V[6] || (V[6] = (U) => S.value = U),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [jo, S.value]
        ]),
        V[15] || (V[15] = j("label", { for: "dataflow-control-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      V[18] || (V[18] = j("hr", { class: "solid mt-4" }, null, -1)),
      j("div", { class: "modal-action" }, [
        j("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: M,
          "data-testId": "save-dataflow-connection"
        }, " Save ")
      ])
    ], 64));
  }
}), Ih = { class: "grid grid-cols-2 gap-4 mt-4" }, Ph = ["value", "disabled"], kh = /* @__PURE__ */ kt({
  __name: "dataflow-creation",
  props: {
    sourceLNode: {},
    destinationLNode: {},
    sourcePlaceholder: {}
  },
  setup(t) {
    const r = t, a = tt(
      r.sourcePlaceholder && r.sourcePlaceholder.dataflowType ? r.sourcePlaceholder.dataflowType : null
    ), s = st(
      () => Object.values(Xe).filter((c) => c !== Xe.INTERNAL)
    ), f = st(
      () => r.sourceLNode?.lnClass === "IHMI" || r.sourceLNode?.lnClass === "ITCI"
    );
    function d(c) {
      const h = c.target.value;
      a.value = h;
    }
    return (c, h) => (de(), pe(He, null, [
      h[3] || (h[3] = j("h3", { class: "font-bold text-lg" }, "Create Connection", -1)),
      j("div", Ih, [
        h[2] || (h[2] = j("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        Ye(j("select", {
          id: "dataflow-type-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": h[0] || (h[0] = (w) => a.value = w),
          onChange: d
        }, [
          h[1] || (h[1] = j("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(s.value, (w) => (de(), pe("option", {
            key: w,
            value: w,
            disabled: w === Re(Xe).CONTROL && !f.value
          }, Ee(w), 9, Ph))), 128))
        ], 544), [
          [mn, a.value]
        ])
      ]),
      a.value !== Re(Xe).CONTROL ? (de(), On(vh, {
        key: 0,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: a.value,
        sourcePlaceholder: c.sourcePlaceholder
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType", "sourcePlaceholder"])) : (de(), On(Dh, {
        key: 1,
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        dataflowType: a.value
      }, null, 8, ["sourceLNode", "destinationLNode", "dataflowType"]))
    ], 64));
  }
}), Lh = { class: "grid grid-cols-2 gap-4 items-center" }, jh = { class: "grid grid-cols-2 gap-4 items-center" }, Fh = ["value", "disabled"], Mh = { class: "grid grid-cols-2 gap-4 items-center" }, Kh = ["value", "title"], Bh = { class: "grid grid-cols-2 gap-4 items-center" }, $h = ["value", "title"], qh = { class: "grid grid-cols-2 gap-4 items-center" }, Uh = { class: "grid grid-cols-2 gap-4 items-center" }, Vh = ["value"], Wh = { class: "flex items-center" }, Gh = /* @__PURE__ */ kt({
  __name: "source-placeholder-port-creation",
  props: {
    sourceLNode: {}
  },
  setup(t) {
    const r = t, a = Jn(), s = Pt(), { lnodeTypes: f, dataflowSdk: d } = qt(s), c = tt(
      B()
    ), h = tt(!0);
    async function w(V) {
      try {
        await d.value.createSourcePlaceholder(
          r.sourceLNode,
          c.value,
          h.value
        ), a.handleClose();
      } catch (U) {
        console.error("Error creating source placeholder port:", U), alert(`Error creating placeholder: ${U instanceof Error ? U.message : "Unknown error"}`);
      }
    }
    const S = st(
      () => [...f.value].sort((V, U) => V.lnClass.localeCompare(U.lnClass))
    ), O = st(
      () => Object.values(Xe).filter((V) => V !== Xe.INTERNAL)
    ), L = st(() => {
      const V = f.value.find((U) => U.typeId === r.sourceLNode.lnType);
      return V ? c.value.dataflowType ? V.dataObjects.filter(
        (U) => U.dataAttributes.some(
          (W) => Ko[c.value.dataflowType].includes(
            W.fc
          )
        )
      ).sort((U, W) => U.name.localeCompare(W.name)) : V.dataObjects.sort((U, W) => U.name.localeCompare(W.name)) : [];
    }), M = st(() => {
      const V = f.value.find((U) => U.typeId === r.sourceLNode.lnType)?.dataObjects.find((U) => U.name === c.value.dataObject);
      return V ? c.value.dataflowType ? V.dataAttributes.filter(
        (U) => Ko[c.value.dataflowType].includes(
          U.fc
        )
      ).filter((U) => !Fi.includes(U.name)).sort((U, W) => U.name.localeCompare(W.name)) : V.dataAttributes.filter((U) => !Fi.includes(U.name)).sort((U, W) => U.name.localeCompare(W.name)) : [];
    });
    function B() {
      return {
        dataObject: "",
        dataAttribute: "",
        inputName: "",
        dataflowType: "",
        processResource: "",
        preferredLNode: ""
      };
    }
    function Y(V) {
      for (const U of V)
        c.value[U] = "";
    }
    return (V, U) => (de(), pe("form", {
      onSubmit: w,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      U[20] || (U[20] = j("h3", { class: "font-bold text-lg" }, "Create Placeholder - Provide data", -1)),
      j("div", Lh, [
        U[9] || (U[9] = j("label", { for: "input-name" }, "Input Name", -1)),
        Ye(j("input", {
          required: "",
          id: "input-name",
          name: "inputName",
          "onUpdate:modelValue": U[0] || (U[0] = (W) => c.value.inputName = W),
          placeholder: "Input Name",
          class: "input col-start-2"
        }, null, 512), [
          [Ar, c.value.inputName]
        ])
      ]),
      j("div", jh, [
        U[11] || (U[11] = j("label", { for: "dataflow-type-select" }, "Dataflow Type", -1)),
        Ye(j("select", {
          id: "dataflow-type-select",
          name: "dataflowType",
          class: "select col-start-2",
          "onUpdate:modelValue": U[1] || (U[1] = (W) => c.value.dataflowType = W),
          onChange: U[2] || (U[2] = (W) => Y(["dataObject", "dataAttribute"]))
        }, [
          U[10] || (U[10] = j("option", { value: "" }, "-", -1)),
          (de(!0), pe(He, null, Dt(O.value, (W) => (de(), pe("option", {
            key: W,
            value: W,
            disabled: W === Re(Xe).CONTROL
          }, Ee(W), 9, Fh))), 128))
        ], 544), [
          [mn, c.value.dataflowType]
        ])
      ]),
      j("div", Mh, [
        U[13] || (U[13] = j("label", { for: "data-object-select" }, "Data Object", -1)),
        Ye(j("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": U[3] || (U[3] = (W) => c.value.dataObject = W),
          onChange: U[4] || (U[4] = (W) => Y(["dataAttribute"]))
        }, [
          U[12] || (U[12] = j("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(L.value, (W) => (de(), pe("option", {
            key: W.id,
            value: W.name,
            title: W.desc ? `Desc: ${W.desc}` : ""
          }, Ee(W.desc ? W.name + " ⓘ" : W.name), 9, Kh))), 128))
        ], 544), [
          [mn, c.value.dataObject]
        ])
      ]),
      j("div", Bh, [
        U[15] || (U[15] = j("label", { for: "data-attribute-select" }, "Data Attribute", -1)),
        Ye(j("select", {
          required: "",
          id: "data-attribute-select",
          name: "data attribute",
          "onUpdate:modelValue": U[5] || (U[5] = (W) => c.value.dataAttribute = W),
          class: "select col-start-2"
        }, [
          U[14] || (U[14] = j("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(M.value, (W) => (de(), pe("option", {
            key: W.id,
            value: W.name,
            title: W.desc ? `Desc: ${W.desc}` : ""
          }, Ee(W.desc ? W.name + " ⓘ" : W.name), 9, $h))), 128))
        ], 512), [
          [mn, c.value.dataAttribute]
        ])
      ]),
      j("div", qh, [
        U[16] || (U[16] = j("label", { for: "process-resource-input" }, "Process Resource", -1)),
        Ye(j("input", {
          id: "process-resource-input",
          name: "processResource",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": U[6] || (U[6] = (W) => c.value.processResource = W)
        }, null, 512), [
          [Ar, c.value.processResource]
        ])
      ]),
      j("div", Uh, [
        U[18] || (U[18] = j("label", { for: "preferred-lnode-select" }, "Preferred LNode", -1)),
        Ye(j("select", {
          id: "preferred-lnode-select",
          name: "preferredLNode",
          class: "select col-start-2",
          "onUpdate:modelValue": U[7] || (U[7] = (W) => c.value.preferredLNode = W)
        }, [
          U[17] || (U[17] = j("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(S.value, (W) => (de(), pe("option", {
            key: W.lnClass,
            value: W.lnClass
          }, Ee(W.lnClass), 9, Vh))), 128))
        ], 512), [
          [mn, c.value.preferredLNode]
        ])
      ]),
      j("div", Wh, [
        Ye(j("input", {
          type: "checkbox",
          "onUpdate:modelValue": U[8] || (U[8] = (W) => h.value = W),
          class: "checkbox mr-2",
          id: "source-placeholder-checkbox-add-references"
        }, null, 512), [
          [jo, h.value]
        ]),
        U[19] || (U[19] = j("label", { for: "source-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      U[21] || (U[21] = j("div", { class: "modal-action" }, [
        j("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), Hh = { class: "grid grid-cols-2 gap-4 mt-4" }, Yh = { class: "flex items-center" }, Xh = { class: "flex items-center" }, Qh = ["value"], zh = { class: "grid grid-cols-2 gap-4 mt-4" }, Jh = { class: "grid grid-cols-2 gap-4 mt-4" }, Zh = ["value", "disabled"], em = { class: "grid grid-cols-2 gap-4 mt-4" }, tm = ["value"], nm = { class: "grid grid-cols-2 gap-4 mt-4" }, rm = ["value", "title"], om = { class: "grid grid-cols-2 gap-4 mt-4" }, im = ["value", "title"], am = { class: "grid grid-cols-2 gap-4 mt-4" }, sm = { class: "mt-4 flex items-center" }, um = /* @__PURE__ */ kt({
  __name: "destination-placeholder-port-creation",
  props: {
    destinationLNode: {}
  },
  setup(t) {
    const r = t, a = Jn(), s = Pt(), { lnodeTypes: f, dataflowSdk: d } = qt(s), c = tt(
      Y()
    ), h = tt(!0), w = tt(!1), S = tt([]);
    $o(async () => {
      S.value = await d.value.findExistingInputs(r.destinationLNode);
    }), en(w, () => {
      c.value.inputName = "";
    }), en(
      [
        () => c.value.inputName,
        () => c.value.preferredDataAttribute
      ],
      async ([W, F]) => {
        if (!W) {
          c.value.inputInstance = "";
          return;
        }
        const K = await d.value.calculateNextInputInstance(
          W,
          F,
          r.destinationLNode
        );
        c.value.inputInstance = K.toString();
      }
    );
    const O = st(
      () => Object.values(Xe).filter((W) => W !== Xe.INTERNAL)
    ), L = st(
      () => [...f.value].sort((W, F) => W.lnClass.localeCompare(F.lnClass))
    ), M = st(() => {
      const W = f.value.find(
        (F) => F.lnClass === c.value.preferredLNode
      );
      return W ? c.value.dataflowType ? W.dataObjects.filter(
        (F) => F.dataAttributes.some(
          (K) => Ko[c.value.dataflowType].includes(K.fc)
        )
      ).map((F) => ({
        name: F.name,
        desc: F.desc
      })).sort((F, K) => F.name.localeCompare(K.name)) : W.dataObjects.map((F) => ({
        name: F.name,
        desc: F.desc
      })).sort((F, K) => F.name.localeCompare(K.name)) : [];
    }), B = st(() => {
      const W = f.value.find(
        (K) => K.lnClass === c.value.preferredLNode
      );
      if (!W) return [];
      const F = W.dataObjects.find(
        (K) => K.name === c.value.preferredDataObject
      );
      return F ? c.value.dataflowType ? F.dataAttributes.filter(
        (K) => Ko[c.value.dataflowType].includes(K.fc)
      ).filter((K) => !Fi.includes(K.name)).sort((K, ae) => K.name.localeCompare(ae.name)) : F.dataAttributes.filter((K) => !Fi.includes(K.name)).sort((K, ae) => K.name.localeCompare(ae.name)) : [];
    });
    function Y() {
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
    async function V() {
      try {
        await d.value.createDestinationPlaceholder(
          c.value,
          r.destinationLNode,
          h.value
        ), a.handleClose();
      } catch (W) {
        console.error("Error creating destination placeholder port:", W), alert(`Error creating placeholder: ${W instanceof Error ? W.message : "Unknown error"}`);
      }
    }
    function U(W) {
      for (const F of W)
        c.value[F] = "";
    }
    return (W, F) => (de(), pe("form", {
      method: "dialog",
      onSubmit: V
    }, [
      F[28] || (F[28] = j("h3", { class: "font-bold text-lg" }, "Create Placeholder - Receive data from", -1)),
      j("div", Hh, [
        j("fieldset", null, [
          F[16] || (F[16] = j("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
          j("div", Yh, [
            Ye(j("input", {
              type: "radio",
              id: "destination-placeholder-new-input",
              name: "input",
              "onUpdate:modelValue": F[0] || (F[0] = (K) => w.value = K),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, w.value]
            ]),
            F[14] || (F[14] = j("label", { for: "destination-placeholder-new-input" }, "New Input", -1))
          ]),
          j("div", Xh, [
            Ye(j("input", {
              type: "radio",
              id: "destination-placeholder-existing-input",
              name: "input",
              "onUpdate:modelValue": F[1] || (F[1] = (K) => w.value = K),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [$r, w.value]
            ]),
            F[15] || (F[15] = j("label", { for: "destination-placeholder-existing-input" }, "Existing Input", -1))
          ])
        ]),
        w.value ? et("", !0) : Ye((de(), pe("input", {
          key: 0,
          "aria-label": "New Input Name",
          required: "",
          type: "text",
          placeholder: "Input Name",
          class: "input col-start-2",
          "onUpdate:modelValue": F[2] || (F[2] = (K) => c.value.inputName = K)
        }, null, 512)), [
          [Ar, c.value.inputName]
        ]),
        w.value ? Ye((de(), pe("select", {
          key: 1,
          "aria-label": "Existing Input Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": F[3] || (F[3] = (K) => c.value.inputName = K)
        }, [
          (de(!0), pe(He, null, Dt(S.value, (K) => (de(), pe("option", {
            key: K,
            value: K
          }, Ee(K), 9, Qh))), 128))
        ], 512)), [
          [mn, c.value.inputName]
        ]) : et("", !0)
      ]),
      j("div", zh, [
        F[17] || (F[17] = j("label", {
          for: "input-instance-input",
          class: "col-start-1 self-center"
        }, "Input Instance", -1)),
        Ye(j("input", {
          id: "input-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": F[4] || (F[4] = (K) => c.value.inputInstance = K)
        }, null, 512), [
          [Ar, c.value.inputInstance]
        ])
      ]),
      j("div", Jh, [
        F[19] || (F[19] = j("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        Ye(j("select", {
          id: "dataflow-type-select",
          class: "select col-start-2",
          "onUpdate:modelValue": F[5] || (F[5] = (K) => c.value.dataflowType = K),
          onChange: F[6] || (F[6] = (K) => U(["preferredDataObject"]))
        }, [
          F[18] || (F[18] = j("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(O.value, (K) => (de(), pe("option", {
            key: K,
            value: K,
            disabled: K === Re(Xe).CONTROL
          }, Ee(K), 9, Zh))), 128))
        ], 544), [
          [mn, c.value.dataflowType]
        ])
      ]),
      j("div", em, [
        F[21] || (F[21] = j("label", {
          for: "preferred-lnode-select",
          class: "col-start-1 self-center"
        }, "Preferred LNode", -1)),
        Ye(j("select", {
          id: "preferred-lnode-select",
          class: "select col-start-2",
          "onUpdate:modelValue": F[7] || (F[7] = (K) => c.value.preferredLNode = K),
          onChange: F[8] || (F[8] = (K) => U(["preferredDataObject"]))
        }, [
          F[20] || (F[20] = j("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(L.value, (K) => (de(), pe("option", {
            key: K.id,
            value: K.lnClass
          }, Ee(K.lnClass), 9, tm))), 128))
        ], 544), [
          [mn, c.value.preferredLNode]
        ])
      ]),
      j("div", nm, [
        F[23] || (F[23] = j("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Object", -1)),
        Ye(j("select", {
          id: "data-object-select",
          class: "select col-start-2",
          "onUpdate:modelValue": F[9] || (F[9] = (K) => c.value.preferredDataObject = K),
          onChange: F[10] || (F[10] = (K) => U(["preferredDataAttribute"]))
        }, [
          F[22] || (F[22] = j("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(M.value, (K) => (de(), pe("option", {
            key: K.name,
            value: K.name,
            title: K.desc ? `Desc: ${K.desc}` : ""
          }, Ee(K.desc ? K.name + " ⓘ" : K.name), 9, rm))), 128))
        ], 544), [
          [mn, c.value.preferredDataObject]
        ])
      ]),
      j("div", om, [
        F[25] || (F[25] = j("label", {
          for: "data-attribute-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Attribute", -1)),
        Ye(j("select", {
          id: "data-attribute-select",
          class: "select col-start-2",
          "onUpdate:modelValue": F[11] || (F[11] = (K) => c.value.preferredDataAttribute = K)
        }, [
          F[24] || (F[24] = j("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (de(!0), pe(He, null, Dt(B.value, (K) => (de(), pe("option", {
            key: K.name,
            value: K.name,
            title: K.desc ? `Desc: ${K.desc}` : ""
          }, Ee(K.desc ? K.name + " ⓘ" : K.name), 9, im))), 128))
        ], 512), [
          [mn, c.value.preferredDataAttribute]
        ])
      ]),
      j("div", am, [
        F[26] || (F[26] = j("label", {
          for: "process-resource-input",
          class: "col-start-1 self-center"
        }, "Process Resource", -1)),
        Ye(j("input", {
          id: "process-resource-input",
          type: "text",
          placeholder: "Process Resource",
          class: "input col-start-2",
          "onUpdate:modelValue": F[12] || (F[12] = (K) => c.value.processResource = K)
        }, null, 512), [
          [Ar, c.value.processResource]
        ])
      ]),
      j("div", sm, [
        Ye(j("input", {
          type: "checkbox",
          "onUpdate:modelValue": F[13] || (F[13] = (K) => h.value = K),
          class: "checkbox mr-2",
          id: "destination-placeholder-checkbox-add-references"
        }, null, 512), [
          [jo, h.value]
        ]),
        F[27] || (F[27] = j("label", { for: "destination-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      F[29] || (F[29] = j("div", { class: "modal-action" }, [
        j("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          type: "submit"
        }, "Save")
      ], -1))
    ], 32));
  }
}), lm = { key: 0 }, cm = { class: "modal-action" }, fm = ["disabled"], dm = /* @__PURE__ */ kt({
  __name: "implement-dataflow-dialog",
  props: {
    connection: {},
    extRef: {}
  },
  setup(t) {
    const r = t, a = Jn(), s = Pt(), { dataflowSdk: f } = qt(s), d = st(() => r.extRef ? r.extRef.srcCBName !== "" : !1);
    async function c() {
      try {
        if (!r.extRef)
          throw new Error("No matching ExtRef found for dataflow implementation");
        await f.value.implementDataflow(r.connection, r.extRef), a.handleClose();
      } catch (h) {
        console.error("Error implementing dataflow:", h), alert(`Error implementing dataflow: ${h instanceof Error ? h.message : "Unknown error"}`);
      }
    }
    return (h, w) => (de(), pe(He, null, [
      w[3] || (w[3] = j("h3", { class: "font-bold text-lg mb-4" }, "Implement Dataflow", -1)),
      h.extRef ? et("", !0) : (de(), pe("p", lm, "No matching ExtRef found for dataflow implementation.")),
      h.extRef && d.value ? (de(), pe(He, { key: 1 }, [
        w[0] || (w[0] = j("p", null, "Dataflow is already implemented.", -1)),
        w[1] || (w[1] = j("p", null, "Implemented Dataflow Details: tbd.", -1))
      ], 64)) : et("", !0),
      h.extRef && !d.value ? (de(), pe(He, { key: 2 }, [
        w[2] || (w[2] = j("h3", null, "Matching ExtRef found", -1)),
        j("p", null, "desc: " + Ee(r.extRef.desc || "-"), 1),
        j("p", null, "intAddr: " + Ee(r.extRef.intAddr || "-"), 1),
        j("p", null, "pLN: " + Ee(r.extRef.pLN || "-"), 1),
        j("p", null, "pDO: " + Ee(r.extRef.pDO || "-"), 1),
        j("p", null, "pDA: " + Ee(r.extRef.pDA || "-"), 1)
      ], 64)) : et("", !0),
      j("div", cm, [
        j("button", {
          disabled: !h.extRef || d.value,
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: c
        }, " Implement ", 8, fm)
      ])
    ], 64));
  }
});
function pm(t) {
  return Fs() ? (ul(t), !0) : !1;
}
const hm = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function mm(t, r, a = {}) {
  const {
    immediate: s = !0,
    immediateCallback: f = !1
  } = a, d = Xn(!1);
  let c;
  function h() {
    c && (clearTimeout(c), c = void 0);
  }
  function w() {
    d.value = !1, h();
  }
  function S(...O) {
    f && t(), h(), d.value = !0, c = setTimeout(() => {
      d.value = !1, c = void 0, t(...O);
    }, nf(r));
  }
  return s && (d.value = !0, hm && S()), pm(w), {
    isPending: ef(d),
    start: S,
    stop: w
  };
}
const Jn = /* @__PURE__ */ eu("dataflow/dialog-store", () => {
  const t = {
    component: void 0,
    props: void 0
  }, r = tt(), a = tt(t), s = $i({
    DataflowCreation: Xn(kh),
    SourcePlaceholderCreation: Xn(Gh),
    DestinationPlaceholderCreation: Xn(um),
    ImplementDataflow: Xn(dm)
  });
  function f() {
    a.value = {
      component: void 0,
      props: void 0
    };
  }
  function d() {
    r.value?.close(), mm(() => {
      f();
    }, 300);
  }
  function c(h, w) {
    a.value.component = ba(s[h]), a.value.props = w, r.value?.showModal();
  }
  return {
    // states
    dialogRef: r,
    currentDialogContent: a,
    availableDialogContent: s,
    // getters
    // actions
    hardReset: f,
    handleClose: d,
    openDialogWithContent: c
  };
}), vm = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, ym = ["onClick"], gm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, bm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, wm = ["onClick"], _m = ["onClick"], xm = ["data-testid"], Nm = ["onClick"], Em = ["onClick"], Tm = ["onClick"], Om = ["onClick"], Cm = ["onClick"], Rm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Am = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Sm = /* @__PURE__ */ kt({
  __name: "dataflow-connections",
  props: {
    connections: {}
  },
  setup(t) {
    const r = t, a = Ca(), { activeElement: s } = qt(a), f = Pt(), { dataflowSdk: d } = qt(f), c = Jn(), h = [
      Xe.GOOSE,
      Xe.REPORT,
      Xe.SMV
    ], w = st(() => [...r.connections].sort((L, M) => L.dataflowType < M.dataflowType ? -1 : L.dataflowType > M.dataflowType ? 1 : 0));
    async function S(L) {
      const M = await d.value.findMatchingExtRef(L);
      c.openDialogWithContent("ImplementDataflow", {
        extRef: M,
        connection: L
      });
    }
    function O(L) {
      return L ? h.includes(L) : !1;
    }
    return (L, M) => (de(!0), pe(He, null, Dt(w.value, (B, Y) => (de(), pe("div", vm, [
      j("div", {
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer",
        onClick: (V) => Re(a).setOrResetActiveElement(B.id)
      }, [
        j("span", gm, Ee(B.sourceDataObject), 1),
        j("span", bm, Ee(B.sourceDataAttribute), 1)
      ], 8, ym),
      j("div", {
        onClick: (V) => Re(a).setOrResetActiveElement(B.id),
        class: tn(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Re(s) === B.id,
          "bg-(--color-ocean-gray-100)": Re(s) !== B.id
        }])
      }, null, 10, wm),
      j("div", {
        class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center relative group",
        onClick: (V) => Re(a).setOrResetActiveElement(B.id)
      }, [
        j("div", {
          class: tn(["h-[2px] w-full", {
            "bg-(--color-primary)": Re(s) === B.id,
            "bg-(--color-ocean-gray-100)": Re(s) !== B.id
          }]),
          "data-testid": `dataflow-line-${Y}`
        }, null, 10, xm),
        O(B.dataflowType) ? (de(), pe("button", {
          key: 0,
          class: "absolute right-[-10px] top-[30px] opacity-0 group-hover:opacity-100 transition-opacity bg-(--color-primary) text-white px-2 py-1 rounded-sm text-sm cursor-pointer z-10",
          onClick: Gd((V) => S(B), ["stop"])
        }, " Implement ", 8, Nm)) : et("", !0)
      ], 8, _m),
      (de(), pe("svg", {
        onClick: (V) => Re(a).setOrResetActiveElement(B.id),
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        j("polygon", {
          points: "0,0 8,6 0,12",
          style: Ro({
            fill: Re(s) === B.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
          })
        }, null, 4)
      ], 8, Em)),
      j("div", {
        onClick: (V) => Re(a).setOrResetActiveElement(B.id),
        class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
      }, Ee(B.dataflowType), 9, Tm),
      j("div", {
        onClick: (V) => Re(a).setOrResetActiveElement(B.id),
        class: tn(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Re(s) === B.id,
          "bg-(--color-ocean-gray-100)": Re(s) !== B.id
        }])
      }, null, 10, Om),
      j("div", {
        onClick: (V) => Re(a).setOrResetActiveElement(B.id),
        class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
      }, [
        j("span", Rm, Ee(B.input), 1),
        j("span", Am, Ee(B.inputInstance), 1)
      ], 8, Cm),
      Re(s) == B.id ? (de(), On(_a, {
        key: 0,
        to: "#sidebar-details"
      }, [
        Nt(zp, { connection: B }, null, 8, ["connection"])
      ])) : et("", !0)
    ]))), 256));
  }
}), Dm = { key: 0 }, Im = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Pm = { key: 1 }, km = { key: 2 }, Lm = /* @__PURE__ */ kt({
  __name: "destination-placeholder-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    const r = t, a = Pt(), { lnodeTypes: s } = qt(a), f = st(() => s.value.find((h) => h.lnClass === r.placeholder.preferredLNode)?.dataObjects.find(
      (h) => h.name === r.placeholder.preferredDataObject
    )), d = st(() => f?.value?.dataAttributes?.find(
      (c) => c.name === r.placeholder.preferredDataAttribute
    ));
    return (c, h) => (de(), pe("div", null, [
      (de(), pe("div", Dm, [
        h[0] || (h[0] = j("h2", { class: "text-lg font-bold mb-2" }, "Destination Placeholder Details", -1)),
        c.placeholder.dataflowType ? (de(), pe("span", Im, Ee(c.placeholder.dataflowType), 1)) : et("", !0),
        j("p", null, "Input: " + Ee(c.placeholder.input), 1),
        j("p", null, "Input Instance: " + Ee(c.placeholder.inputInstance || "-"), 1),
        h[1] || (h[1] = j("br", null, null, -1)),
        j("p", null, "Preferred LNode: " + Ee(c.placeholder.preferredLNode || "-"), 1),
        j("p", null, "Preferred DO: " + Ee(c.placeholder.preferredDataObject || "-"), 1),
        f.value?.desc ? (de(), pe("p", Pm, "Preferred DO Desc: " + Ee(f.value?.desc), 1)) : et("", !0),
        j("p", null, "Preferred DA: " + Ee(c.placeholder.preferredDataAttribute || "-"), 1),
        d.value?.desc ? (de(), pe("p", km, "Preferred DA Desc: " + Ee(d.value?.desc), 1)) : et("", !0),
        j("p", null, "Process Resource: " + Ee(c.placeholder.processResource || "-"), 1)
      ]))
    ]));
  }
}), jm = ["y1", "x2", "y2"], Fm = ["points"], Mm = /* @__PURE__ */ kt({
  __name: "arrow",
  props: {
    height: {},
    length: {}
  },
  setup(t) {
    return (r, a) => (de(), pe(He, null, [
      j("line", {
        x1: 0,
        y1: r.height / 2,
        x2: r.length - r.height / 2,
        y2: r.height / 2,
        stroke: "currentColor",
        "stroke-width": "2"
      }, null, 8, jm),
      j("polygon", {
        points: `${r.length - r.height * 0.7}, 0 ${r.length}, ${r.height / 2} ${r.length - r.height * 0.7}, ${r.height}`,
        fill: "currentColor"
      }, null, 8, Fm)
    ], 64));
  }
}), Km = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, Bm = ["onClick"], $m = {
  height: "12",
  width: "35",
  class: "mr-[9px] text-(--color-ocean-gray-100)"
}, qm = ["data-testid"], Um = ["onClick"], Vm = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Wm = ["onClick"], Gm = ["onClick"], Hm = /* @__PURE__ */ kt({
  __name: "destination-placeholder-ports",
  props: {
    destinationPlaceHolderPorts: {}
  },
  setup(t) {
    const r = Ca(), { activeElement: a } = qt(r);
    return (s, f) => (de(!0), pe(He, null, Dt(s.destinationPlaceHolderPorts, (d, c) => (de(), pe("div", {
      class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]",
      key: `destination-placeholder-port-${c}`
    }, [
      j("div", Km, [
        j("div", {
          class: "flex items-center justify-self-end h-full max-w-max hover:cursor-pointer",
          onClick: (h) => Re(r).setOrResetActiveElement(d.id)
        }, [
          (de(), pe("svg", $m, [
            j("g", {
              "data-testid": `placeholder-line-${c}`,
              class: tn({
                "text-(--color-primary)": Re(a) === d.id
              })
            }, [
              Nt(Mm, {
                height: 12,
                length: 35
              })
            ], 10, qm)
          ]))
        ], 8, Bm)
      ]),
      j("div", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        class: tn(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Re(a) === d.id
        }])
      }, null, 10, Um),
      j("div", Vm, [
        j("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm hover:cursor-pointer",
          onClick: (h) => Re(r).setOrResetActiveElement(d.id)
        }, Ee(d.input), 9, Wm),
        j("span", {
          class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 rounded-sm hover:cursor-pointer",
          onClick: (h) => Re(r).setOrResetActiveElement(d.id)
        }, Ee(d.inputInstance), 9, Gm)
      ]),
      Re(a) == d.id ? (de(), On(_a, {
        key: 0,
        to: "#sidebar-details"
      }, [
        Nt(Lm, { placeholder: d }, null, 8, ["placeholder"])
      ])) : et("", !0)
    ]))), 128));
  }
}), Ym = { key: 0 }, Xm = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Qm = { key: 1 }, zm = { key: 2 }, Jm = { key: 3 }, Zm = /* @__PURE__ */ kt({
  __name: "source-placeholder-details",
  props: {
    placeholder: {},
    sourceLNodeId: {}
  },
  setup(t) {
    const r = t, a = Pt(), { lnodes: s } = qt(a), f = st(() => s.value.find((h) => h.id === r.sourceLNodeId)?.dataObjectSpecifications?.find(
      (h) => h.name === r.placeholder.dataObject
    )), d = st(() => f?.value?.dataAttributeSpecifications?.find(
      (c) => c.name === r.placeholder.dataAttribute
    ));
    return (c, h) => (de(), pe("div", null, [
      (de(), pe("div", Ym, [
        h[0] || (h[0] = j("h2", { class: "text-lg font-bold mb-2" }, "Source Placeholder Details", -1)),
        c.placeholder.dataflowType ? (de(), pe("span", Xm, Ee(c.placeholder.dataflowType), 1)) : et("", !0),
        j("p", null, "Input: " + Ee(c.placeholder.input), 1),
        h[1] || (h[1] = j("br", null, null, -1)),
        j("p", null, "Data Object: " + Ee(c.placeholder.dataObject || "-"), 1),
        f.value?.desc ? (de(), pe("p", Qm, "Data Object Desc: " + Ee(f.value?.desc), 1)) : et("", !0),
        j("p", null, "Data Attribute: " + Ee(c.placeholder.dataAttribute || "-"), 1),
        d.value?.desc ? (de(), pe("p", zm, "Data Attribute Desc: " + Ee(d.value?.desc), 1)) : et("", !0),
        h[2] || (h[2] = j("br", null, null, -1)),
        j("p", null, "Preferred LNode: " + Ee(c.placeholder.preferredLNode || "-"), 1),
        j("p", null, "Process Resource: " + Ee(c.placeholder.processResource || "-"), 1),
        h[3] || (h[3] = j("br", null, null, -1)),
        c.placeholder.isFulfilled != null ? (de(), pe("p", Jm, " Placeholder is fulfilled: " + Ee(c.placeholder.isFulfilled), 1)) : et("", !0)
      ]))
    ]));
  }
}), au = (t, r) => {
  const a = t.__vccOpts || t;
  for (const [s, f] of r)
    a[s] = f;
  return a;
}, ev = {}, tv = {
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function nv(t, r) {
  return de(), pe("svg", tv, r[0] || (r[0] = [
    j("path", { d: "M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" }, null, -1),
    j("path", { d: "M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" }, null, -1)
  ]));
}
const fa = /* @__PURE__ */ au(ev, [["render", nv]]), rv = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-12 *:pointer-events-auto" }, ov = ["onClick"], iv = ["onClick"], av = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, sv = ["onClick"], uv = ["onClick"], lv = ["onClick"], cv = ["onClick"], fv = ["disabled", "onClick"], dv = /* @__PURE__ */ kt({
  __name: "source-placeholder-ports",
  props: {
    sourceLNode: {},
    destinationLNode: {}
  },
  setup(t) {
    const r = t, a = Ca(), { activeElement: s } = qt(a), f = Pt(), { sourcePlaceholders: d } = qt(f), c = Jn(), h = st(() => r.sourceLNode.id ? d.value.filter((O) => O.lNodeId === r.sourceLNode.id) : []), w = (O) => {
      if (r.destinationLNode)
        return O.preferredLNode ? r.destinationLNode.lnClass === O.preferredLNode ? r.destinationLNode : void 0 : r.destinationLNode;
    };
    function S(O) {
      Ze(r.destinationLNode, "Destination LNode is undefined"), c.openDialogWithContent("DataflowCreation", {
        sourceLNode: r.sourceLNode,
        destinationLNode: r.destinationLNode,
        sourcePlaceholder: O
      });
    }
    return (O, L) => (de(!0), pe(He, null, Dt(h.value, (M) => (de(), pe("div", rv, [
      j("div", {
        onClick: (B) => Re(a).setOrResetActiveElement(M.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        j("span", {
          class: tn([M.isFulfilled ? "border-solid" : "border-dashed", "relative inline-block border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm"])
        }, [
          Js(Ee(M.dataObject) + "." + Ee(M.dataAttribute) + " ", 1),
          j("span", {
            class: tn([{
              "bg-(--color-primary)": Re(s) === M.id
            }, "absolute -top-3 -right-3 bg-(--color-ocean-gray-100) text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"])
          }, " 1+ ", 2)
        ], 2)
      ], 8, ov),
      j("div", {
        onClick: (B) => Re(a).setOrResetActiveElement(M.id),
        class: tn([{
          "bg-(--color-primary)": Re(s) === M.id
        }, "rounded-full size-5 col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[8.5px] hover:cursor-pointer"])
      }, null, 10, iv),
      j("div", av, [
        j("div", {
          class: "flex items-center h-full w-3/4 hover:cursor-pointer",
          onClick: (B) => Re(a).setOrResetActiveElement(M.id)
        }, [
          j("div", {
            class: tn(["h-[2px] w-full border border-dashed", {
              "border-[var(--color-primary)]": Re(s) === M.id,
              "border-[var(--color-gray-200)]": Re(s) !== M.id
            }]),
            onClick: (B) => Re(a).setOrResetActiveElement(M.id)
          }, null, 10, uv)
        ], 8, sv)
      ]),
      j("div", {
        onClick: (B) => Re(a).setOrResetActiveElement(M.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[10%] truncate max-w-[8ch]"
      }, Ee(M.input), 9, lv),
      M.preferredLNode ? (de(), pe("div", {
        key: 0,
        onClick: (B) => Re(a).setOrResetActiveElement(M.id),
        class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[70%]"
      }, Ee(M.preferredLNode), 9, cv)) : et("", !0),
      j("button", {
        class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn bg-(--color-primary) border-1 text-white relative z-2",
        disabled: !r.sourceLNode || !r.destinationLNode || !w(M),
        style: Ro(
          !r.sourceLNode || !r.destinationLNode || !w(M) ? {
            border: "1",
            backgroundColor: "var(--color-ocean-gray-75)",
            color: "var(--color-ocean-gray-200)",
            borderColor: "var(--color-ocean-gray-200)"
          } : { borderColor: "var(--color-primary)" }
        ),
        "aria-label": "Fulfill placeholder",
        onClick: (B) => S(M)
      }, [
        Nt(fa)
      ], 12, fv),
      Re(s) == M.id ? (de(), On(_a, {
        key: 1,
        to: "#sidebar-details"
      }, [
        Nt(Zm, {
          placeholder: M,
          sourceLNodeId: r.sourceLNode.id
        }, null, 8, ["placeholder", "sourceLNodeId"])
      ])) : et("", !0)
    ]))), 256));
  }
}), pv = { key: 0 }, hv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, mv = { key: 1 }, vv = /* @__PURE__ */ kt({
  __name: "controlled-connection-details",
  props: {
    controlledConnection: {}
  },
  setup(t) {
    const r = t, a = Pt(), { lnodes: s } = qt(a), f = st(() => s.value.find(
      (c) => c.id === r.controlledConnection.controlledLNodeId
    )?.dataObjectSpecifications?.find(
      (c) => c.name === r.controlledConnection.controlledDataObject
    ));
    return (d, c) => (de(), pe("div", null, [
      (de(), pe("div", pv, [
        c[0] || (c[0] = j("h2", { class: "text-lg font-bold mb-2" }, "Controlled Connection Details", -1)),
        d.controlledConnection.dataflowType ? (de(), pe("span", hv, Ee(d.controlledConnection.dataflowType), 1)) : et("", !0),
        j("p", null, "Output: " + Ee(d.controlledConnection.outputName), 1),
        j("p", null, "Output Instance: " + Ee(d.controlledConnection.outputInstance || "-"), 1),
        c[1] || (c[1] = j("br", null, null, -1)),
        j("p", null, "Controlled Data Object: " + Ee(d.controlledConnection.controlledDataObject || "-"), 1),
        f.value?.desc ? (de(), pe("p", mv, "Controlled Data Object Desc: " + Ee(f.value?.desc), 1)) : et("", !0)
      ]))
    ]));
  }
}), yv = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, gv = ["onClick"], bv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, wv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, _v = ["onClick"], xv = ["onClick"], Nv = ["data-testid"], Ev = ["onClick"], Tv = ["onClick"], Ov = ["onClick"], Cv = ["onClick"], Rv = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Av = /* @__PURE__ */ kt({
  __name: "dataflow-controlled-connections",
  props: {
    controlledConnections: {}
  },
  setup(t) {
    const r = Ca(), { activeElement: a } = qt(r);
    return (s, f) => (de(!0), pe(He, null, Dt(s.controlledConnections, (d, c) => (de(), pe("div", yv, [
      j("div", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        j("span", bv, Ee(d.outputName), 1),
        j("span", wv, Ee(d.outputInstance), 1)
      ], 8, gv),
      j("div", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        class: tn(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Re(a) === d.id,
          "bg-(--color-ocean-gray-100)": Re(a) !== d.id
        }])
      }, null, 10, _v),
      j("div", {
        class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
        onClick: (h) => Re(r).setOrResetActiveElement(d.id)
      }, [
        j("div", {
          class: tn(["h-[2px] w-full", {
            "bg-(--color-primary)": Re(a) === d.id,
            "bg-(--color-ocean-gray-100)": Re(a) !== d.id
          }]),
          "data-testid": `dataflow-controlled-connection-line-${c}`
        }, null, 10, Nv)
      ], 8, xv),
      (de(), pe("svg", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        j("polygon", {
          points: "0,0 8,6 0,12",
          style: Ro({
            fill: Re(a) === d.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
          })
        }, null, 4)
      ], 8, Ev)),
      j("div", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
      }, Ee(d.dataflowType), 9, Tv),
      j("div", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        class: tn(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": Re(a) === d.id,
          "bg-(--color-ocean-gray-100)": Re(a) !== d.id
        }])
      }, null, 10, Ov),
      j("div", {
        onClick: (h) => Re(r).setOrResetActiveElement(d.id),
        class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
      }, [
        j("span", Rv, Ee(d.controlledDataObject), 1)
      ], 8, Cv),
      Re(a) == d.id ? (de(), On(_a, {
        key: 0,
        to: "#sidebar-details"
      }, [
        Nt(vv, { "controlled-connection": d }, null, 8, ["controlled-connection"])
      ])) : et("", !0)
    ]))), 256));
  }
}), Sv = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full mb-8 grid-rows-[100px_1fr_80px]" }, Dv = ["value"], Iv = ["value"], Pv = ["value"], kv = ["value"], Lv = { class: "col-span-full row-start-2" }, jv = { class: "grid" }, Fv = { class: "col-start-1 row-start-1 -order-1" }, Mv = /* @__PURE__ */ kt({
  __name: "dataflow-visualisation",
  emits: ["sourceLNodeChange", "destinationLNodeChange"],
  setup(t, { emit: r }) {
    const a = r, s = Jn(), f = Pt(), { lnodes: d, connections: c, controlledConnections: h } = qt(f), w = tt(), S = tt(), O = tt(), L = tt();
    en(
      () => d.value,
      () => {
        w.value = void 0, S.value = void 0;
      }
    );
    const M = st(
      () => d.value.filter((ge) => ge.id !== S.value).sort((ge, ce) => Yn(ge).localeCompare(Yn(ce)))
    ), B = st(
      () => d.value.filter((ge) => ge.id !== w.value).sort((ge, ce) => Yn(ge).localeCompare(Yn(ce)))
    ), Y = st(() => !w.value || !S.value ? [] : c.value.filter(
      (ge) => ge.sourceLNodeId === w.value && ge.destinationLNodeId === S.value
    )), V = st(() => !w.value || !S.value ? [] : h.value.filter(
      (ge) => ge.controllerLNodeId === w.value && ge.controlledLNodeId === S.value
    )), U = st(() => S.value ? c.value.filter(
      (ge) => ge.destinationLNodeId === S.value && !ge.sourceLNodeId
    ) : []);
    function W(ge) {
      return d.value.find((ce) => ce.id === ge) ?? void 0;
    }
    function F(ge) {
      w.value = ge, O.value = W(ge), a("sourceLNodeChange", ge);
    }
    function K(ge) {
      S.value = ge, L.value = W(ge), a("destinationLNodeChange", ge);
    }
    function ae() {
      if (!O.value)
        throw new Error("Source LNode is undefined");
      s.openDialogWithContent("SourcePlaceholderCreation", {
        sourceLNode: O.value
      });
    }
    function xe() {
      if (!L.value)
        throw new Error("Destination LNode is undefined");
      s.openDialogWithContent("DestinationPlaceholderCreation", {
        destinationLNode: L.value
      });
    }
    return (ge, ce) => (de(), pe("div", Sv, [
      ce[5] || (ce[5] = j("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[450px]" }, null, -1)),
      j("select", {
        value: w.value ?? "",
        onChange: ce[0] || (ce[0] = (Ne) => F(Ne.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        ce[2] || (ce[2] = Js(" > ")),
        ce[3] || (ce[3] = j("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (de(!0), pe(He, null, Dt(M.value, (Ne) => (de(), pe("option", {
          key: Ne.id,
          value: Ne.id
        }, Ee(Re(Yn)(Ne)), 9, Iv))), 128))
      ], 40, Dv),
      ce[6] || (ce[6] = j("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) relative rounded-xl -z-1 border-(--color-ocean-gray-100) border-3 min-h-[450px]" }, null, -1)),
      j("select", {
        value: S.value ?? "",
        onChange: ce[1] || (ce[1] = (Ne) => K(Ne.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-1 text-2xl text-center"
      }, [
        ce[4] || (ce[4] = j("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (de(!0), pe(He, null, Dt(B.value, (Ne) => (de(), pe("option", {
          key: Ne.id,
          value: Ne.id
        }, Ee(Re(Yn)(Ne)), 9, kv))), 128))
      ], 40, Pv),
      j("div", Lv, [
        Y.value.length > 0 ? (de(), On(Sm, {
          key: 0,
          connections: Y.value
        }, null, 8, ["connections"])) : et("", !0),
        V.value.length > 0 ? (de(), On(Av, {
          key: 1,
          controlledConnections: V.value
        }, null, 8, ["controlledConnections"])) : et("", !0),
        O.value ? (de(), On(dv, {
          key: 2,
          sourceLNode: O.value,
          destinationLNode: L.value
        }, null, 8, ["sourceLNode", "destinationLNode"])) : et("", !0),
        j("div", jv, [
          j("div", Fv, [
            Nt(Hm, { destinationPlaceHolderPorts: U.value }, null, 8, ["destinationPlaceHolderPorts"])
          ])
        ])
      ]),
      O.value ? (de(), pe("button", {
        key: 0,
        "aria-label": "Add source placeholder",
        class: "btn btn-primary btn-circle size-5 col-start-3 col-span-1 -ml-[12px] self-center relative z-10 row-start-3",
        onClick: ae
      }, [
        Nt(fa)
      ])) : et("", !0),
      L.value ? (de(), pe("button", {
        key: 1,
        class: "btn btn-primary btn-circle size-5 col-start-4 col-span-1 -ml-[9px] self-center row-start-3",
        "aria-label": "Add destination placeholder",
        onClick: xe
      }, [
        Nt(fa)
      ])) : et("", !0)
    ]));
  }
}), Kv = { class: "flex flex-col items-center justify-center w-full" }, Bv = ["disabled"], $v = /* @__PURE__ */ kt({
  __name: "dataflow-view",
  setup(t) {
    const r = tt(), a = tt(), s = Jn(), f = Pt(), { lnodes: d } = qt(f), c = st(() => O(r.value)), h = st(() => O(a.value));
    function w(M) {
      r.value = M;
    }
    function S(M) {
      a.value = M;
    }
    function O(M) {
      return d.value.find((B) => B.id === M) ?? void 0;
    }
    function L() {
      if (!c.value || !h.value)
        throw new Error("Source or Destination LNode is undefined");
      s.openDialogWithContent("DataflowCreation", {
        sourceLNode: c.value,
        destinationLNode: h.value
      });
    }
    return (M, B) => (de(), pe("div", Kv, [
      Nt(Mv, {
        onSourceLNodeChange: w,
        onDestinationLNodeChange: S
      }),
      j("button", {
        class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
        onClick: L,
        disabled: !c.value || !h.value,
        "aria-label": "Add connection"
      }, [
        Nt(fa)
      ], 8, Bv)
    ]));
  }
}), qv = {}, Uv = { class: "layout" }, Vv = { class: "main" }, Wv = { class: "sidebar" };
function Gv(t, r) {
  return de(), pe("div", Uv, [
    j("div", Vv, [
      vu(t.$slots, "main", {}, void 0)
    ]),
    j("div", Wv, [
      vu(t.$slots, "sidebar", {}, void 0)
    ])
  ]);
}
const Hv = /* @__PURE__ */ au(qv, [["render", Gv], ["__scopeId", "data-v-5f95d421"]]), Yv = {
  name: "sidebar",
  class: "root"
}, Xv = { class: "tabs tabs-box" }, Qv = { key: 0 }, zv = { key: 1 }, Jv = /* @__PURE__ */ kt({
  __name: "sidebar",
  setup(t) {
    const r = tt("details");
    return (a, s) => (de(), pe("div", Yv, [
      j("div", Xv, [
        Ye(j("input", {
          type: "radio",
          value: "details",
          name: "tabs",
          "onUpdate:modelValue": s[0] || (s[0] = (f) => r.value = f),
          class: "tab",
          "aria-label": "Details"
        }, null, 512), [
          [$r, r.value]
        ]),
        Ye(j("input", {
          type: "radio",
          value: "advanced",
          name: "tabs",
          "onUpdate:modelValue": s[1] || (s[1] = (f) => r.value = f),
          class: "tab",
          "aria-label": "Advanced"
        }, null, 512), [
          [$r, r.value]
        ])
      ]),
      j("div", null, [
        r.value === "details" ? (de(), pe("div", Qv, s[2] || (s[2] = [
          j("div", { id: "sidebar-details" }, null, -1)
        ]))) : et("", !0),
        r.value === "advanced" ? (de(), pe("div", zv)) : et("", !0)
      ])
    ]));
  }
}), Zv = /* @__PURE__ */ au(Jv, [["__scopeId", "data-v-ec5c053a"]]), ey = {
  class: "modal",
  ref: "dialogRef"
}, ty = { class: "modal-box" }, ny = /* @__PURE__ */ kt({
  __name: "dialog-container",
  setup(t) {
    const r = Jn(), { currentDialogContent: a } = qt(r), s = gf("dialogRef");
    return $o(() => {
      s.value && (r.dialogRef = s.value);
    }), (f, d) => (de(), pe("dialog", ey, [
      j("div", ty, [
        j("button", {
          class: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          "aria-label": "Close dialog",
          onClick: d[0] || (d[0] = //@ts-ignore
          (...c) => Re(r).handleClose && Re(r).handleClose(...c))
        }, " ✕ "),
        Re(a).component ? (de(), On(Df(Re(a).component), Sc(ic({ key: 0 }, Re(a).props)), null, 16)) : et("", !0)
      ])
    ], 512));
  }
}), ry = ["id"], oy = { class: "p-10" }, iy = /* @__PURE__ */ kt({
  __name: "app",
  props: {
    api: {}
  },
  setup(t) {
    const r = "dataflow", a = t, s = Pt();
    let f = () => {
    };
    return $o(() => {
      f = a.api.activeFileName.subscribe((d) => {
        s.initApp(d);
      }), s.initApp(a.api.activeFileName.value);
    }), Gs(() => {
      s.closeDatabase(), f();
    }), (d, c) => (de(), pe("article", {
      id: Re(r),
      style: { height: "100%" }
    }, [
      Nt(Hv, null, {
        main: ys(() => [
          j("div", oy, [
            Nt($v),
            Nt(ny)
          ])
        ]),
        sidebar: ys(() => [
          Nt(Zv)
        ]),
        _: 1
      })
    ], 8, ry));
  }
});
function Ry(t, r) {
  if (!document.getElementById(t)) {
    console.error({ msg: "could not found root element", rootId: t });
    return;
  }
  const s = Xd(iy, { api: r });
  return s.use(Jd()), s.mount(`#${t}`), s.unmount;
}
export {
  Ry as default
};
