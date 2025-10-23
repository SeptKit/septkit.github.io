(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`select[data-v-40016595]:has(option[value=""]){color:var(--color-neutral-500)}:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true]))[data-v-40016595]{cursor:not-allowed}:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) select[data-v-40016595],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) fieldset[data-v-40016595],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) textarea[data-v-40016595],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) input[data-v-40016595]{pointer-events:none;-webkit-user-select:none;user-select:none}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-200:oklch(90.1% .076 70.697);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-900:oklch(39.8% .07 227.392);--color-blue-200:oklch(88.2% .059 254.128);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-neutral-400:oklch(70.8% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-800:oklch(26.9% 0 0);--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-light:300;--font-weight-medium:500;--font-weight-bold:700;--radius-md:.375rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-2{grid-column-start:2}.my-4{margin-block:calc(var(--spacing)*4)}.my-8{margin-block:calc(var(--spacing)*8)}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.w-full{width:100%}.max-w-\\[34rem\\]{max-width:34rem}.max-w-max{max-width:max-content}.max-w-xs{max-width:var(--container-xs)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.rounded{border-radius:.25rem}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.alert-error{border-color:var(--color-error);color:var(--color-error-content);--alert-color:var(--color-error)}.border-gray-400{border-color:var(--color-gray-400)}.border-primary{border-color:var(--color-primary)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-orange-200{background-color:var(--color-orange-200)}.fill-current{fill:currentColor}.px-1{padding-inline:calc(var(--spacing)*1)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-4{padding-block:calc(var(--spacing)*4)}.pr-3{padding-right:calc(var(--spacing)*3)}.text-center{text-align:center}.text-left{text-align:left}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.link-primary{color:var(--color-primary)}@media (hover:hover){.link-primary:hover{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.link-primary:hover{color:color-mix(in oklab,var(--color-primary)80%,#000)}}}.text-cyan-900{color:var(--color-cyan-900)}.text-gray-600{color:var(--color-gray-600)}.text-neutral-400{color:var(--color-neutral-400)}.text-neutral-700{color:var(--color-neutral-700)}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.saturate-75{--tw-saturate:saturate(75%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.radio-neutral{--input-color:var(--color-neutral)}:is(.\\*\\:flex>*){display:flex}:is(.\\*\\:items-center>*){align-items:center}:is(.\\*\\:gap-1\\.5>*){gap:calc(var(--spacing)*1.5)}:is(.\\*\\:py-2>*){padding-block:calc(var(--spacing)*2)}:is(.\\*\\:py-4>*){padding-block:calc(var(--spacing)*4)}:is(.\\*\\:align-top>*){vertical-align:top}@media (hover:hover){.group-hover\\:underline:is(:where(.group):hover *){text-decoration-line:underline}.hover\\:cursor-not-allowed:hover{cursor:not-allowed}.hover\\:border-primary:hover{border-color:var(--color-primary)}.hover\\:bg-cyan-50:hover{background-color:var(--color-cyan-50)}.hover\\:text-cyan-900:hover{color:var(--color-cyan-900)}.hover\\:text-neutral-800:hover{color:var(--color-neutral-800)}}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true]{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true]{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true])::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true])::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function aa(n) {
  const i = /* @__PURE__ */ Object.create(null);
  for (const a of n.split(",")) i[a] = 1;
  return (a) => a in i;
}
const ut = {}, hi = [], jn = () => {
}, qc = () => !1, $o = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), ua = (n) => n.startsWith("onUpdate:"), Vt = Object.assign, ca = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, Lc = Object.prototype.hasOwnProperty, rt = (n, i) => Lc.call(n, i), De = Array.isArray, pi = (n) => wo(n) === "[object Map]", Ho = (n) => wo(n) === "[object Set]", Na = (n) => wo(n) === "[object Date]", Me = (n) => typeof n == "function", Tt = (n) => typeof n == "string", Cn = (n) => typeof n == "symbol", dt = (n) => n !== null && typeof n == "object", la = (n) => (dt(n) || Me(n)) && Me(n.then) && Me(n.catch), Ou = Object.prototype.toString, wo = (n) => Ou.call(n), Uc = (n) => wo(n).slice(8, -1), Su = (n) => wo(n) === "[object Object]", fa = (n) => Tt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, io = /* @__PURE__ */ aa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Wo = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, Vc = /-(\w)/g, vn = Wo(
  (n) => n.replace(Vc, (i, a) => a ? a.toUpperCase() : "")
), $c = /\B([A-Z])/g, ai = Wo(
  (n) => n.replace($c, "-$1").toLowerCase()
), Go = Wo((n) => n.charAt(0).toUpperCase() + n.slice(1)), As = Wo(
  (n) => n ? `on${Go(n)}` : ""
), _r = (n, i) => !Object.is(n, i), ko = (n, ...i) => {
  for (let a = 0; a < n.length; a++)
    n[a](...i);
}, Ms = (n, i, a, u = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: a
  });
}, Au = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
}, Hc = (n) => {
  const i = Tt(n) ? Number(n) : NaN;
  return isNaN(i) ? n : i;
};
let Ia;
const Yo = () => Ia || (Ia = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function da(n) {
  if (De(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++) {
      const u = n[a], l = Tt(u) ? Xc(u) : da(u);
      if (l)
        for (const h in l)
          i[h] = l[h];
    }
    return i;
  } else if (Tt(n) || dt(n))
    return n;
}
const Wc = /;(?![^(]*\))/g, Gc = /:([^]+)/, Yc = /\/\*[^]*?\*\//g;
function Xc(n) {
  const i = {};
  return n.replace(Yc, "").split(Wc).forEach((a) => {
    if (a) {
      const u = a.split(Gc);
      u.length > 1 && (i[u[0].trim()] = u[1].trim());
    }
  }), i;
}
function ho(n) {
  let i = "";
  if (Tt(n))
    i = n;
  else if (De(n))
    for (let a = 0; a < n.length; a++) {
      const u = ho(n[a]);
      u && (i += u + " ");
    }
  else if (dt(n))
    for (const a in n)
      n[a] && (i += a + " ");
  return i.trim();
}
const zc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Qc = /* @__PURE__ */ aa(zc);
function ku(n) {
  return !!n || n === "";
}
function Jc(n, i) {
  if (n.length !== i.length) return !1;
  let a = !0;
  for (let u = 0; a && u < n.length; u++)
    a = bi(n[u], i[u]);
  return a;
}
function bi(n, i) {
  if (n === i) return !0;
  let a = Na(n), u = Na(i);
  if (a || u)
    return a && u ? n.getTime() === i.getTime() : !1;
  if (a = Cn(n), u = Cn(i), a || u)
    return n === i;
  if (a = De(n), u = De(i), a || u)
    return a && u ? Jc(n, i) : !1;
  if (a = dt(n), u = dt(i), a || u) {
    if (!a || !u)
      return !1;
    const l = Object.keys(n).length, h = Object.keys(i).length;
    if (l !== h)
      return !1;
    for (const m in n) {
      const O = n.hasOwnProperty(m), C = i.hasOwnProperty(m);
      if (O && !C || !O && C || !bi(n[m], i[m]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function Zc(n, i) {
  return n.findIndex((a) => bi(a, i));
}
const Pu = (n) => !!(n && n.__v_isRef === !0), mt = (n) => Tt(n) ? n : n == null ? "" : De(n) || dt(n) && (n.toString === Ou || !Me(n.toString)) ? Pu(n) ? mt(n.value) : JSON.stringify(n, Cu, 2) : String(n), Cu = (n, i) => Pu(i) ? Cu(n, i.value) : pi(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (a, [u, l], h) => (a[ks(u, h) + " =>"] = l, a),
    {}
  )
} : Ho(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((a) => ks(a))
} : Cn(i) ? ks(i) : dt(i) && !De(i) && !Su(i) ? String(i) : i, ks = (n, i = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Cn(n) ? `Symbol(${(a = n.description) != null ? a : i})` : n
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Lt;
class Du {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Lt, !i && Lt && (this.index = (Lt.scopes || (Lt.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let i, a;
      if (this.scopes)
        for (i = 0, a = this.scopes.length; i < a; i++)
          this.scopes[i].pause();
      for (i = 0, a = this.effects.length; i < a; i++)
        this.effects[i].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let i, a;
      if (this.scopes)
        for (i = 0, a = this.scopes.length; i < a; i++)
          this.scopes[i].resume();
      for (i = 0, a = this.effects.length; i < a; i++)
        this.effects[i].resume();
    }
  }
  run(i) {
    if (this._active) {
      const a = Lt;
      try {
        return Lt = this, i();
      } finally {
        Lt = a;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Lt, Lt = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Lt = this.prevScope, this.prevScope = void 0);
  }
  stop(i) {
    if (this._active) {
      this._active = !1;
      let a, u;
      for (a = 0, u = this.effects.length; a < u; a++)
        this.effects[a].stop();
      for (this.effects.length = 0, a = 0, u = this.cleanups.length; a < u; a++)
        this.cleanups[a]();
      if (this.cleanups.length = 0, this.scopes) {
        for (a = 0, u = this.scopes.length; a < u; a++)
          this.scopes[a].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !i) {
        const l = this.parent.scopes.pop();
        l && l !== this && (this.parent.scopes[this.index] = l, l.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Nu(n) {
  return new Du(n);
}
function ha() {
  return Lt;
}
function Iu(n, i = !1) {
  Lt && Lt.cleanups.push(n);
}
let ft;
const Ps = /* @__PURE__ */ new WeakSet();
class Ru {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Lt && Lt.active && Lt.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ps.has(this) && (Ps.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ju(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ra(this), Bu(this);
    const i = ft, a = Pn;
    ft = this, Pn = !0;
    try {
      return this.fn();
    } finally {
      Fu(this), ft = i, Pn = a, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let i = this.deps; i; i = i.nextDep)
        ya(i);
      this.deps = this.depsTail = void 0, Ra(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ps.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qs(this) && this.run();
  }
  get dirty() {
    return qs(this);
  }
}
let Ku = 0, oo, so;
function ju(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = so, so = n;
    return;
  }
  n.next = oo, oo = n;
}
function pa() {
  Ku++;
}
function ma() {
  if (--Ku > 0)
    return;
  if (so) {
    let i = so;
    for (so = void 0; i; ) {
      const a = i.next;
      i.next = void 0, i.flags &= -9, i = a;
    }
  }
  let n;
  for (; oo; ) {
    let i = oo;
    for (oo = void 0; i; ) {
      const a = i.next;
      if (i.next = void 0, i.flags &= -9, i.flags & 1)
        try {
          i.trigger();
        } catch (u) {
          n || (n = u);
        }
      i = a;
    }
  }
  if (n) throw n;
}
function Bu(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Fu(n) {
  let i, a = n.depsTail, u = a;
  for (; u; ) {
    const l = u.prevDep;
    u.version === -1 ? (u === a && (a = l), ya(u), el(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = l;
  }
  n.deps = i, n.depsTail = a;
}
function qs(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Mu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Mu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === po) || (n.globalVersion = po, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !qs(n))))
    return;
  n.flags |= 2;
  const i = n.dep, a = ft, u = Pn;
  ft = n, Pn = !0;
  try {
    Bu(n);
    const l = n.fn(n._value);
    (i.version === 0 || _r(l, n._value)) && (n.flags |= 128, n._value = l, i.version++);
  } catch (l) {
    throw i.version++, l;
  } finally {
    ft = a, Pn = u, Fu(n), n.flags &= -3;
  }
}
function ya(n, i = !1) {
  const { dep: a, prevSub: u, nextSub: l } = n;
  if (u && (u.nextSub = l, n.prevSub = void 0), l && (l.prevSub = u, n.nextSub = void 0), a.subs === n && (a.subs = u, !u && a.computed)) {
    a.computed.flags &= -5;
    for (let h = a.computed.deps; h; h = h.nextDep)
      ya(h, !0);
  }
  !i && !--a.sc && a.map && a.map.delete(a.key);
}
function el(n) {
  const { prevDep: i, nextDep: a } = n;
  i && (i.nextDep = a, n.prevDep = void 0), a && (a.prevDep = i, n.nextDep = void 0);
}
let Pn = !0;
const qu = [];
function hr() {
  qu.push(Pn), Pn = !1;
}
function pr() {
  const n = qu.pop();
  Pn = n === void 0 ? !0 : n;
}
function Ra(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const a = ft;
    ft = void 0;
    try {
      i();
    } finally {
      ft = a;
    }
  }
}
let po = 0;
class tl {
  constructor(i, a) {
    this.sub = i, this.dep = a, this.version = a.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class va {
  // TODO isolatedDeclarations "__v_skip"
  constructor(i) {
    this.computed = i, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(i) {
    if (!ft || !Pn || ft === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== ft)
      a = this.activeLink = new tl(ft, this), ft.deps ? (a.prevDep = ft.depsTail, ft.depsTail.nextDep = a, ft.depsTail = a) : ft.deps = ft.depsTail = a, Lu(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const u = a.nextDep;
      u.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = u), a.prevDep = ft.depsTail, a.nextDep = void 0, ft.depsTail.nextDep = a, ft.depsTail = a, ft.deps === a && (ft.deps = u);
    }
    return a;
  }
  trigger(i) {
    this.version++, po++, this.notify(i);
  }
  notify(i) {
    pa();
    try {
      for (let a = this.subs; a; a = a.prevSub)
        a.sub.notify() && a.sub.dep.notify();
    } finally {
      ma();
    }
  }
}
function Lu(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let u = i.deps; u; u = u.nextDep)
        Lu(u);
    }
    const a = n.dep.subs;
    a !== n && (n.prevSub = a, a && (a.nextSub = n)), n.dep.subs = n;
  }
}
const Io = /* @__PURE__ */ new WeakMap(), ii = Symbol(
  ""
), Ls = Symbol(
  ""
), mo = Symbol(
  ""
);
function Ut(n, i, a) {
  if (Pn && ft) {
    let u = Io.get(n);
    u || Io.set(n, u = /* @__PURE__ */ new Map());
    let l = u.get(a);
    l || (u.set(a, l = new va()), l.map = u, l.key = a), l.track();
  }
}
function lr(n, i, a, u, l, h) {
  const m = Io.get(n);
  if (!m) {
    po++;
    return;
  }
  const O = (C) => {
    C && C.trigger();
  };
  if (pa(), i === "clear")
    m.forEach(O);
  else {
    const C = De(n), L = C && fa(a);
    if (C && a === "length") {
      const B = Number(u);
      m.forEach((I, X) => {
        (X === "length" || X === mo || !Cn(X) && X >= B) && O(I);
      });
    } else
      switch ((a !== void 0 || m.has(void 0)) && O(m.get(a)), L && O(m.get(mo)), i) {
        case "add":
          C ? L && O(m.get("length")) : (O(m.get(ii)), pi(n) && O(m.get(Ls)));
          break;
        case "delete":
          C || (O(m.get(ii)), pi(n) && O(m.get(Ls)));
          break;
        case "set":
          pi(n) && O(m.get(ii));
          break;
      }
  }
  ma();
}
function nl(n, i) {
  const a = Io.get(n);
  return a && a.get(i);
}
function ui(n) {
  const i = et(n);
  return i === n ? i : (Ut(i, "iterate", mo), yn(n) ? i : i.map(qt));
}
function Xo(n) {
  return Ut(n = et(n), "iterate", mo), n;
}
const rl = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cs(this, Symbol.iterator, qt);
  },
  concat(...n) {
    return ui(this).concat(
      ...n.map((i) => De(i) ? ui(i) : i)
    );
  },
  entries() {
    return Cs(this, "entries", (n) => (n[1] = qt(n[1]), n));
  },
  every(n, i) {
    return ur(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return ur(this, "filter", n, i, (a) => a.map(qt), arguments);
  },
  find(n, i) {
    return ur(this, "find", n, i, qt, arguments);
  },
  findIndex(n, i) {
    return ur(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return ur(this, "findLast", n, i, qt, arguments);
  },
  findLastIndex(n, i) {
    return ur(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return ur(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return Ds(this, "includes", n);
  },
  indexOf(...n) {
    return Ds(this, "indexOf", n);
  },
  join(n) {
    return ui(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return Ds(this, "lastIndexOf", n);
  },
  map(n, i) {
    return ur(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return to(this, "pop");
  },
  push(...n) {
    return to(this, "push", n);
  },
  reduce(n, ...i) {
    return Ka(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return Ka(this, "reduceRight", n, i);
  },
  shift() {
    return to(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return ur(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return to(this, "splice", n);
  },
  toReversed() {
    return ui(this).toReversed();
  },
  toSorted(n) {
    return ui(this).toSorted(n);
  },
  toSpliced(...n) {
    return ui(this).toSpliced(...n);
  },
  unshift(...n) {
    return to(this, "unshift", n);
  },
  values() {
    return Cs(this, "values", qt);
  }
};
function Cs(n, i, a) {
  const u = Xo(n), l = u[i]();
  return u !== n && !yn(n) && (l._next = l.next, l.next = () => {
    const h = l._next();
    return h.value && (h.value = a(h.value)), h;
  }), l;
}
const il = Array.prototype;
function ur(n, i, a, u, l, h) {
  const m = Xo(n), O = m !== n && !yn(n), C = m[i];
  if (C !== il[i]) {
    const I = C.apply(n, h);
    return O ? qt(I) : I;
  }
  let L = a;
  m !== n && (O ? L = function(I, X) {
    return a.call(this, qt(I), X, n);
  } : a.length > 2 && (L = function(I, X) {
    return a.call(this, I, X, n);
  }));
  const B = C.call(m, L, u);
  return O && l ? l(B) : B;
}
function Ka(n, i, a, u) {
  const l = Xo(n);
  let h = a;
  return l !== n && (yn(n) ? a.length > 3 && (h = function(m, O, C) {
    return a.call(this, m, O, C, n);
  }) : h = function(m, O, C) {
    return a.call(this, m, qt(O), C, n);
  }), l[i](h, ...u);
}
function Ds(n, i, a) {
  const u = et(n);
  Ut(u, "iterate", mo);
  const l = u[i](...a);
  return (l === -1 || l === !1) && _a(a[0]) ? (a[0] = et(a[0]), u[i](...a)) : l;
}
function to(n, i, a = []) {
  hr(), pa();
  const u = et(n)[i].apply(n, a);
  return ma(), pr(), u;
}
const ol = /* @__PURE__ */ aa("__proto__,__v_isRef,__isVue"), Uu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Cn)
);
function sl(n) {
  Cn(n) || (n = String(n));
  const i = et(this);
  return Ut(i, "has", n), i.hasOwnProperty(n);
}
class Vu {
  constructor(i = !1, a = !1) {
    this._isReadonly = i, this._isShallow = a;
  }
  get(i, a, u) {
    if (a === "__v_skip") return i.__v_skip;
    const l = this._isReadonly, h = this._isShallow;
    if (a === "__v_isReactive")
      return !l;
    if (a === "__v_isReadonly")
      return l;
    if (a === "__v_isShallow")
      return h;
    if (a === "__v_raw")
      return u === (l ? h ? yl : Gu : h ? Wu : Hu).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const m = De(i);
    if (!l) {
      let C;
      if (m && (C = rl[a]))
        return C;
      if (a === "hasOwnProperty")
        return sl;
    }
    const O = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      _t(i) ? i : u
    );
    return (Cn(a) ? Uu.has(a) : ol(a)) || (l || Ut(i, "get", a), h) ? O : _t(O) ? m && fa(a) ? O : O.value : dt(O) ? l ? Yu(O) : zo(O) : O;
  }
}
class $u extends Vu {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, l) {
    let h = i[a];
    if (!this._isShallow) {
      const C = xr(h);
      if (!yn(u) && !xr(u) && (h = et(h), u = et(u)), !De(i) && _t(h) && !_t(u))
        return C ? !1 : (h.value = u, !0);
    }
    const m = De(i) && fa(a) ? Number(a) < i.length : rt(i, a), O = Reflect.set(
      i,
      a,
      u,
      _t(i) ? i : l
    );
    return i === et(l) && (m ? _r(u, h) && lr(i, "set", a, u) : lr(i, "add", a, u)), O;
  }
  deleteProperty(i, a) {
    const u = rt(i, a);
    i[a];
    const l = Reflect.deleteProperty(i, a);
    return l && u && lr(i, "delete", a, void 0), l;
  }
  has(i, a) {
    const u = Reflect.has(i, a);
    return (!Cn(a) || !Uu.has(a)) && Ut(i, "has", a), u;
  }
  ownKeys(i) {
    return Ut(
      i,
      "iterate",
      De(i) ? "length" : ii
    ), Reflect.ownKeys(i);
  }
}
class al extends Vu {
  constructor(i = !1) {
    super(!0, i);
  }
  set(i, a) {
    return !0;
  }
  deleteProperty(i, a) {
    return !0;
  }
}
const ul = /* @__PURE__ */ new $u(), cl = /* @__PURE__ */ new al(), ll = /* @__PURE__ */ new $u(!0);
const Us = (n) => n, Oo = (n) => Reflect.getPrototypeOf(n);
function fl(n, i, a) {
  return function(...u) {
    const l = this.__v_raw, h = et(l), m = pi(h), O = n === "entries" || n === Symbol.iterator && m, C = n === "keys" && m, L = l[n](...u), B = a ? Us : i ? Ro : qt;
    return !i && Ut(
      h,
      "iterate",
      C ? Ls : ii
    ), {
      // iterator protocol
      next() {
        const { value: I, done: X } = L.next();
        return X ? { value: I, done: X } : {
          value: O ? [B(I[0]), B(I[1])] : B(I),
          done: X
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function So(n) {
  return function(...i) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function dl(n, i) {
  const a = {
    get(l) {
      const h = this.__v_raw, m = et(h), O = et(l);
      n || (_r(l, O) && Ut(m, "get", l), Ut(m, "get", O));
      const { has: C } = Oo(m), L = i ? Us : n ? Ro : qt;
      if (C.call(m, l))
        return L(h.get(l));
      if (C.call(m, O))
        return L(h.get(O));
      h !== m && h.get(l);
    },
    get size() {
      const l = this.__v_raw;
      return !n && Ut(et(l), "iterate", ii), Reflect.get(l, "size", l);
    },
    has(l) {
      const h = this.__v_raw, m = et(h), O = et(l);
      return n || (_r(l, O) && Ut(m, "has", l), Ut(m, "has", O)), l === O ? h.has(l) : h.has(l) || h.has(O);
    },
    forEach(l, h) {
      const m = this, O = m.__v_raw, C = et(O), L = i ? Us : n ? Ro : qt;
      return !n && Ut(C, "iterate", ii), O.forEach((B, I) => l.call(h, L(B), L(I), m));
    }
  };
  return Vt(
    a,
    n ? {
      add: So("add"),
      set: So("set"),
      delete: So("delete"),
      clear: So("clear")
    } : {
      add(l) {
        !i && !yn(l) && !xr(l) && (l = et(l));
        const h = et(this);
        return Oo(h).has.call(h, l) || (h.add(l), lr(h, "add", l, l)), this;
      },
      set(l, h) {
        !i && !yn(h) && !xr(h) && (h = et(h));
        const m = et(this), { has: O, get: C } = Oo(m);
        let L = O.call(m, l);
        L || (l = et(l), L = O.call(m, l));
        const B = C.call(m, l);
        return m.set(l, h), L ? _r(h, B) && lr(m, "set", l, h) : lr(m, "add", l, h), this;
      },
      delete(l) {
        const h = et(this), { has: m, get: O } = Oo(h);
        let C = m.call(h, l);
        C || (l = et(l), C = m.call(h, l)), O && O.call(h, l);
        const L = h.delete(l);
        return C && lr(h, "delete", l, void 0), L;
      },
      clear() {
        const l = et(this), h = l.size !== 0, m = l.clear();
        return h && lr(
          l,
          "clear",
          void 0,
          void 0
        ), m;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((l) => {
    a[l] = fl(l, n, i);
  }), a;
}
function ga(n, i) {
  const a = dl(n, i);
  return (u, l, h) => l === "__v_isReactive" ? !n : l === "__v_isReadonly" ? n : l === "__v_raw" ? u : Reflect.get(
    rt(a, l) && l in u ? a : u,
    l,
    h
  );
}
const hl = {
  get: /* @__PURE__ */ ga(!1, !1)
}, pl = {
  get: /* @__PURE__ */ ga(!1, !0)
}, ml = {
  get: /* @__PURE__ */ ga(!0, !1)
};
const Hu = /* @__PURE__ */ new WeakMap(), Wu = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap();
function vl(n) {
  switch (n) {
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
function gl(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : vl(Uc(n));
}
function zo(n) {
  return xr(n) ? n : ba(
    n,
    !1,
    ul,
    hl,
    Hu
  );
}
function bl(n) {
  return ba(
    n,
    !1,
    ll,
    pl,
    Wu
  );
}
function Yu(n) {
  return ba(
    n,
    !0,
    cl,
    ml,
    Gu
  );
}
function ba(n, i, a, u, l) {
  if (!dt(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const h = gl(n);
  if (h === 0)
    return n;
  const m = l.get(n);
  if (m)
    return m;
  const O = new Proxy(
    n,
    h === 2 ? u : a
  );
  return l.set(n, O), O;
}
function wr(n) {
  return xr(n) ? wr(n.__v_raw) : !!(n && n.__v_isReactive);
}
function xr(n) {
  return !!(n && n.__v_isReadonly);
}
function yn(n) {
  return !!(n && n.__v_isShallow);
}
function _a(n) {
  return n ? !!n.__v_raw : !1;
}
function et(n) {
  const i = n && n.__v_raw;
  return i ? et(i) : n;
}
function wa(n) {
  return !rt(n, "__v_skip") && Object.isExtensible(n) && Ms(n, "__v_skip", !0), n;
}
const qt = (n) => dt(n) ? zo(n) : n, Ro = (n) => dt(n) ? Yu(n) : n;
function _t(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function Zt(n) {
  return Xu(n, !1);
}
function Vs(n) {
  return Xu(n, !0);
}
function Xu(n, i) {
  return _t(n) ? n : new _l(n, i);
}
class _l {
  constructor(i, a) {
    this.dep = new va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : et(i), this._value = a ? i : qt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || yn(i) || xr(i);
    i = u ? i : et(i), _r(i, a) && (this._rawValue = i, this._value = u ? i : qt(i), this.dep.trigger());
  }
}
function Mt(n) {
  return _t(n) ? n.value : n;
}
const wl = {
  get: (n, i, a) => i === "__v_raw" ? n : Mt(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const l = n[i];
    return _t(l) && !_t(a) ? (l.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function zu(n) {
  return wr(n) ? n : new Proxy(n, wl);
}
function xl(n) {
  const i = De(n) ? new Array(n.length) : {};
  for (const a in n)
    i[a] = Tl(n, a);
  return i;
}
class El {
  constructor(i, a, u) {
    this._object = i, this._key = a, this._defaultValue = u, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const i = this._object[this._key];
    return this._value = i === void 0 ? this._defaultValue : i;
  }
  set value(i) {
    this._object[this._key] = i;
  }
  get dep() {
    return nl(et(this._object), this._key);
  }
}
function Tl(n, i, a) {
  const u = n[i];
  return _t(u) ? u : new El(n, i, a);
}
class Ol {
  constructor(i, a, u) {
    this.fn = i, this.setter = a, this._value = void 0, this.dep = new va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = po - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ft !== this)
      return ju(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Mu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Sl(n, i, a = !1) {
  let u, l;
  return Me(n) ? u = n : (u = n.get, l = n.set), new Ol(u, l, a);
}
const Ao = {}, Ko = /* @__PURE__ */ new WeakMap();
let ni;
function Al(n, i = !1, a = ni) {
  if (a) {
    let u = Ko.get(a);
    u || Ko.set(a, u = []), u.push(n);
  }
}
function kl(n, i, a = ut) {
  const { immediate: u, deep: l, once: h, scheduler: m, augmentJob: O, call: C } = a, L = (z) => l ? z : yn(z) || l === !1 || l === 0 ? fr(z, 1) : fr(z);
  let B, I, X, oe, te = !1, de = !1;
  if (_t(n) ? (I = () => n.value, te = yn(n)) : wr(n) ? (I = () => L(n), te = !0) : De(n) ? (de = !0, te = n.some((z) => wr(z) || yn(z)), I = () => n.map((z) => {
    if (_t(z))
      return z.value;
    if (wr(z))
      return L(z);
    if (Me(z))
      return C ? C(z, 2) : z();
  })) : Me(n) ? i ? I = C ? () => C(n, 2) : n : I = () => {
    if (X) {
      hr();
      try {
        X();
      } finally {
        pr();
      }
    }
    const z = ni;
    ni = B;
    try {
      return C ? C(n, 3, [oe]) : n(oe);
    } finally {
      ni = z;
    }
  } : I = jn, i && l) {
    const z = I, $ = l === !0 ? 1 / 0 : l;
    I = () => fr(z(), $);
  }
  const Re = ha(), Ae = () => {
    B.stop(), Re && Re.active && ca(Re.effects, B);
  };
  if (h && i) {
    const z = i;
    i = (...$) => {
      z(...$), Ae();
    };
  }
  let Ke = de ? new Array(n.length).fill(Ao) : Ao;
  const Ve = (z) => {
    if (!(!(B.flags & 1) || !B.dirty && !z))
      if (i) {
        const $ = B.run();
        if (l || te || (de ? $.some((H, G) => _r(H, Ke[G])) : _r($, Ke))) {
          X && X();
          const H = ni;
          ni = B;
          try {
            const G = [
              $,
              // pass undefined as the old value when it's changed for the first time
              Ke === Ao ? void 0 : de && Ke[0] === Ao ? [] : Ke,
              oe
            ];
            Ke = $, C ? C(i, 3, G) : (
              // @ts-expect-error
              i(...G)
            );
          } finally {
            ni = H;
          }
        }
      } else
        B.run();
  };
  return O && O(Ve), B = new Ru(I), B.scheduler = m ? () => m(Ve, !1) : Ve, oe = (z) => Al(z, !1, B), X = B.onStop = () => {
    const z = Ko.get(B);
    if (z) {
      if (C)
        C(z, 4);
      else
        for (const $ of z) $();
      Ko.delete(B);
    }
  }, i ? u ? Ve(!0) : Ke = B.run() : m ? m(Ve.bind(null, !0), !0) : B.run(), Ae.pause = B.pause.bind(B), Ae.resume = B.resume.bind(B), Ae.stop = Ae, Ae;
}
function fr(n, i = 1 / 0, a) {
  if (i <= 0 || !dt(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, _t(n))
    fr(n.value, i, a);
  else if (De(n))
    for (let u = 0; u < n.length; u++)
      fr(n[u], i, a);
  else if (Ho(n) || pi(n))
    n.forEach((u) => {
      fr(u, i, a);
    });
  else if (Su(n)) {
    for (const u in n)
      fr(n[u], i, a);
    for (const u of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, u) && fr(n[u], i, a);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function xo(n, i, a, u) {
  try {
    return u ? n(...u) : n();
  } catch (l) {
    Eo(l, i, a);
  }
}
function Bn(n, i, a, u) {
  if (Me(n)) {
    const l = xo(n, i, a, u);
    return l && la(l) && l.catch((h) => {
      Eo(h, i, a);
    }), l;
  }
  if (De(n)) {
    const l = [];
    for (let h = 0; h < n.length; h++)
      l.push(Bn(n[h], i, a, u));
    return l;
  }
}
function Eo(n, i, a, u = !0) {
  const l = i ? i.vnode : null, { errorHandler: h, throwUnhandledErrorInProduction: m } = i && i.appContext.config || ut;
  if (i) {
    let O = i.parent;
    const C = i.proxy, L = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; O; ) {
      const B = O.ec;
      if (B) {
        for (let I = 0; I < B.length; I++)
          if (B[I](n, C, L) === !1)
            return;
      }
      O = O.parent;
    }
    if (h) {
      hr(), xo(h, null, 10, [
        n,
        C,
        L
      ]), pr();
      return;
    }
  }
  Pl(n, a, l, u, m);
}
function Pl(n, i, a, u = !0, l = !1) {
  if (l)
    throw n;
  console.error(n);
}
const en = [];
let Kn = -1;
const mi = [];
let vr = null, li = 0;
const Qu = /* @__PURE__ */ Promise.resolve();
let jo = null;
function xa(n) {
  const i = jo || Qu;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Cl(n) {
  let i = Kn + 1, a = en.length;
  for (; i < a; ) {
    const u = i + a >>> 1, l = en[u], h = yo(l);
    h < n || h === n && l.flags & 2 ? i = u + 1 : a = u;
  }
  return i;
}
function Ea(n) {
  if (!(n.flags & 1)) {
    const i = yo(n), a = en[en.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= yo(a) ? en.push(n) : en.splice(Cl(i), 0, n), n.flags |= 1, Ju();
  }
}
function Ju() {
  jo || (jo = Qu.then(ec));
}
function $s(n) {
  De(n) ? mi.push(...n) : vr && n.id === -1 ? vr.splice(li + 1, 0, n) : n.flags & 1 || (mi.push(n), n.flags |= 1), Ju();
}
function ja(n, i, a = Kn + 1) {
  for (; a < en.length; a++) {
    const u = en[a];
    if (u && u.flags & 2) {
      if (n && u.id !== n.uid)
        continue;
      en.splice(a, 1), a--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function Zu(n) {
  if (mi.length) {
    const i = [...new Set(mi)].sort(
      (a, u) => yo(a) - yo(u)
    );
    if (mi.length = 0, vr) {
      vr.push(...i);
      return;
    }
    for (vr = i, li = 0; li < vr.length; li++) {
      const a = vr[li];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    vr = null, li = 0;
  }
}
const yo = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function ec(n) {
  try {
    for (Kn = 0; Kn < en.length; Kn++) {
      const i = en[Kn];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), xo(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; Kn < en.length; Kn++) {
      const i = en[Kn];
      i && (i.flags &= -2);
    }
    Kn = -1, en.length = 0, Zu(), jo = null, (en.length || mi.length) && ec();
  }
}
let Pt = null, tc = null;
function Bo(n) {
  const i = Pt;
  return Pt = n, tc = n && n.type.__scopeId || null, i;
}
function Fo(n, i = Pt, a) {
  if (!i || n._n)
    return n;
  const u = (...l) => {
    u._d && Ga(-1);
    const h = Bo(i);
    let m;
    try {
      m = n(...l);
    } finally {
      Bo(h), u._d && Ga(1);
    }
    return m;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function ri(n, i) {
  if (Pt === null)
    return n;
  const a = es(Pt), u = n.dirs || (n.dirs = []);
  for (let l = 0; l < i.length; l++) {
    let [h, m, O, C = ut] = i[l];
    h && (Me(h) && (h = {
      mounted: h,
      updated: h
    }), h.deep && fr(m), u.push({
      dir: h,
      instance: a,
      value: m,
      oldValue: void 0,
      arg: O,
      modifiers: C
    }));
  }
  return n;
}
function ei(n, i, a, u) {
  const l = n.dirs, h = i && i.dirs;
  for (let m = 0; m < l.length; m++) {
    const O = l[m];
    h && (O.oldValue = h[m].value);
    let C = O.dir[u];
    C && (hr(), Bn(C, a, 8, [
      n.el,
      O,
      n,
      i
    ]), pr());
  }
}
const Dl = Symbol("_vte"), Nl = (n) => n.__isTeleport;
function Ta(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, Ta(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function To(n, i) {
  return Me(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Vt({ name: n.name }, i, { setup: n })
  ) : n;
}
function nc(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function ao(n, i, a, u, l = !1) {
  if (De(n)) {
    n.forEach(
      (te, de) => ao(
        te,
        i && (De(i) ? i[de] : i),
        a,
        u,
        l
      )
    );
    return;
  }
  if (yi(u) && !l) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && ao(n, i, a, u.component.subTree);
    return;
  }
  const h = u.shapeFlag & 4 ? es(u.component) : u.el, m = l ? null : h, { i: O, r: C } = n, L = i && i.r, B = O.refs === ut ? O.refs = {} : O.refs, I = O.setupState, X = et(I), oe = I === ut ? () => !1 : (te) => rt(X, te);
  if (L != null && L !== C && (Tt(L) ? (B[L] = null, oe(L) && (I[L] = null)) : _t(L) && (L.value = null)), Me(C))
    xo(C, O, 12, [m, B]);
  else {
    const te = Tt(C), de = _t(C);
    if (te || de) {
      const Re = () => {
        if (n.f) {
          const Ae = te ? oe(C) ? I[C] : B[C] : C.value;
          l ? De(Ae) && ca(Ae, h) : De(Ae) ? Ae.includes(h) || Ae.push(h) : te ? (B[C] = [h], oe(C) && (I[C] = B[C])) : (C.value = [h], n.k && (B[n.k] = C.value));
        } else te ? (B[C] = m, oe(C) && (I[C] = m)) : de && (C.value = m, n.k && (B[n.k] = m));
      };
      m ? (Re.id = -1, hn(Re, a)) : Re();
    }
  }
}
Yo().requestIdleCallback;
Yo().cancelIdleCallback;
const yi = (n) => !!n.type.__asyncLoader, rc = (n) => n.type.__isKeepAlive;
function Il(n, i) {
  ic(n, "a", i);
}
function Rl(n, i) {
  ic(n, "da", i);
}
function ic(n, i, a = Nt) {
  const u = n.__wdc || (n.__wdc = () => {
    let l = a;
    for (; l; ) {
      if (l.isDeactivated)
        return;
      l = l.parent;
    }
    return n();
  });
  if (Qo(i, u, a), a) {
    let l = a.parent;
    for (; l && l.parent; )
      rc(l.parent.vnode) && Kl(u, i, a, l), l = l.parent;
  }
}
function Kl(n, i, a, u) {
  const l = Qo(
    i,
    n,
    u,
    !0
    /* prepend */
  );
  Oa(() => {
    ca(u[i], l);
  }, a);
}
function Qo(n, i, a = Nt, u = !1) {
  if (a) {
    const l = a[n] || (a[n] = []), h = i.__weh || (i.__weh = (...m) => {
      hr();
      const O = si(a), C = Bn(i, a, n, m);
      return O(), pr(), C;
    });
    return u ? l.unshift(h) : l.push(h), h;
  }
}
const mr = (n) => (i, a = Nt) => {
  (!bo || n === "sp") && Qo(n, (...u) => i(...u), a);
}, jl = mr("bm"), oc = mr("m"), Bl = mr(
  "bu"
), Fl = mr("u"), Ml = mr(
  "bum"
), Oa = mr("um"), ql = mr(
  "sp"
), Ll = mr("rtg"), Ul = mr("rtc");
function Vl(n, i = Nt) {
  Qo("ec", n, i);
}
const $l = "components";
function Hl(n, i) {
  return Gl($l, n, !0, i) || n;
}
const Wl = Symbol.for("v-ndc");
function Gl(n, i, a = !0, u = !1) {
  const l = Pt || Nt;
  if (l) {
    const h = l.type;
    {
      const O = Hf(
        h,
        !1
      );
      if (O && (O === i || O === vn(i) || O === Go(vn(i))))
        return h;
    }
    const m = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ba(l[n] || h[n], i) || // global registration
      Ba(l.appContext[n], i)
    );
    return !m && u ? h : m;
  }
}
function Ba(n, i) {
  return n && (n[i] || n[vn(i)] || n[Go(vn(i))]);
}
function di(n, i, a, u) {
  let l;
  const h = a, m = De(n);
  if (m || Tt(n)) {
    const O = m && wr(n);
    let C = !1, L = !1;
    O && (C = !yn(n), L = xr(n), n = Xo(n)), l = new Array(n.length);
    for (let B = 0, I = n.length; B < I; B++)
      l[B] = i(
        C ? L ? Ro(qt(n[B])) : qt(n[B]) : n[B],
        B,
        void 0,
        h
      );
  } else if (typeof n == "number") {
    l = new Array(n);
    for (let O = 0; O < n; O++)
      l[O] = i(O + 1, O, void 0, h);
  } else if (dt(n))
    if (n[Symbol.iterator])
      l = Array.from(
        n,
        (O, C) => i(O, C, void 0, h)
      );
    else {
      const O = Object.keys(n);
      l = new Array(O.length);
      for (let C = 0, L = O.length; C < L; C++) {
        const B = O[C];
        l[C] = i(n[B], B, C, h);
      }
    }
  else
    l = [];
  return l;
}
function Yl(n, i, a = {}, u, l) {
  if (Pt.ce || Pt.parent && yi(Pt.parent) && Pt.parent.ce)
    return Xe(), zs(
      bt,
      null,
      [St("slot", a, u)],
      64
    );
  let h = n[i];
  h && h._c && (h._d = !1), Xe();
  const m = h && sc(h(a)), O = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  m && m.key, C = zs(
    bt,
    {
      key: (O && !Cn(O) ? O : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!m && u ? "_fb" : "")
    },
    m || [],
    m && n._ === 1 ? 64 : -2
  );
  return h && h._c && (h._d = !0), C;
}
function sc(n) {
  return n.some((i) => wi(i) ? !(i.type === Dn || i.type === bt && !sc(i.children)) : !0) ? n : null;
}
const Hs = (n) => n ? Ac(n) ? es(n) : Hs(n.parent) : null, uo = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Vt(/* @__PURE__ */ Object.create(null), {
    $: (n) => n,
    $el: (n) => n.vnode.el,
    $data: (n) => n.data,
    $props: (n) => n.props,
    $attrs: (n) => n.attrs,
    $slots: (n) => n.slots,
    $refs: (n) => n.refs,
    $parent: (n) => Hs(n.parent),
    $root: (n) => Hs(n.root),
    $host: (n) => n.ce,
    $emit: (n) => n.emit,
    $options: (n) => uc(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      Ea(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = xa.bind(n.proxy)),
    $watch: (n) => bf.bind(n)
  })
), Ns = (n, i) => n !== ut && !n.__isScriptSetup && rt(n, i), Xl = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: l, props: h, accessCache: m, type: O, appContext: C } = n;
    let L;
    if (i[0] !== "$") {
      const oe = m[i];
      if (oe !== void 0)
        switch (oe) {
          case 1:
            return u[i];
          case 2:
            return l[i];
          case 4:
            return a[i];
          case 3:
            return h[i];
        }
      else {
        if (Ns(u, i))
          return m[i] = 1, u[i];
        if (l !== ut && rt(l, i))
          return m[i] = 2, l[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (L = n.propsOptions[0]) && rt(L, i)
        )
          return m[i] = 3, h[i];
        if (a !== ut && rt(a, i))
          return m[i] = 4, a[i];
        Ws && (m[i] = 0);
      }
    }
    const B = uo[i];
    let I, X;
    if (B)
      return i === "$attrs" && Ut(n.attrs, "get", ""), B(n);
    if (
      // css module (injected by vue-loader)
      (I = O.__cssModules) && (I = I[i])
    )
      return I;
    if (a !== ut && rt(a, i))
      return m[i] = 4, a[i];
    if (
      // global properties
      X = C.config.globalProperties, rt(X, i)
    )
      return X[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: l, ctx: h } = n;
    return Ns(l, i) ? (l[i] = a, !0) : u !== ut && rt(u, i) ? (u[i] = a, !0) : rt(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (h[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: l, propsOptions: h }
  }, m) {
    let O;
    return !!a[m] || n !== ut && rt(n, m) || Ns(i, m) || (O = h[0]) && rt(O, m) || rt(u, m) || rt(uo, m) || rt(l.config.globalProperties, m);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : rt(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function Fa(n) {
  return De(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
function vo(n) {
  const i = qf();
  let a = n();
  return Js(), la(a) && (a = a.catch((u) => {
    throw si(i), u;
  })), [a, () => si(i)];
}
let Ws = !0;
function zl(n) {
  const i = uc(n), a = n.proxy, u = n.ctx;
  Ws = !1, i.beforeCreate && Ma(i.beforeCreate, n, "bc");
  const {
    // state
    data: l,
    computed: h,
    methods: m,
    watch: O,
    provide: C,
    inject: L,
    // lifecycle
    created: B,
    beforeMount: I,
    mounted: X,
    beforeUpdate: oe,
    updated: te,
    activated: de,
    deactivated: Re,
    beforeDestroy: Ae,
    beforeUnmount: Ke,
    destroyed: Ve,
    unmounted: z,
    render: $,
    renderTracked: H,
    renderTriggered: G,
    errorCaptured: le,
    serverPrefetch: R,
    // public API
    expose: ye,
    inheritAttrs: Pe,
    // assets
    components: xe,
    directives: ke,
    filters: it
  } = i;
  if (L && Ql(L, u, null), m)
    for (const ve in m) {
      const qe = m[ve];
      Me(qe) && (u[ve] = qe.bind(a));
    }
  if (l) {
    const ve = l.call(a, a);
    dt(ve) && (n.data = zo(ve));
  }
  if (Ws = !0, h)
    for (const ve in h) {
      const qe = h[ve], ht = Me(qe) ? qe.bind(a, a) : Me(qe.get) ? qe.get.bind(a, a) : jn, st = !Me(qe) && Me(qe.set) ? qe.set.bind(a) : jn, yt = dr({
        get: ht,
        set: st
      });
      Object.defineProperty(u, ve, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (Ct) => yt.value = Ct
      });
    }
  if (O)
    for (const ve in O)
      ac(O[ve], u, a, ve);
  if (C) {
    const ve = Me(C) ? C.call(a) : C;
    Reflect.ownKeys(ve).forEach((qe) => {
      rf(qe, ve[qe]);
    });
  }
  B && Ma(B, n, "c");
  function Ne(ve, qe) {
    De(qe) ? qe.forEach((ht) => ve(ht.bind(a))) : qe && ve(qe.bind(a));
  }
  if (Ne(jl, I), Ne(oc, X), Ne(Bl, oe), Ne(Fl, te), Ne(Il, de), Ne(Rl, Re), Ne(Vl, le), Ne(Ul, H), Ne(Ll, G), Ne(Ml, Ke), Ne(Oa, z), Ne(ql, R), De(ye))
    if (ye.length) {
      const ve = n.exposed || (n.exposed = {});
      ye.forEach((qe) => {
        Object.defineProperty(ve, qe, {
          get: () => a[qe],
          set: (ht) => a[qe] = ht
        });
      });
    } else n.exposed || (n.exposed = {});
  $ && n.render === jn && (n.render = $), Pe != null && (n.inheritAttrs = Pe), xe && (n.components = xe), ke && (n.directives = ke), R && nc(n);
}
function Ql(n, i, a = jn) {
  De(n) && (n = Gs(n));
  for (const u in n) {
    const l = n[u];
    let h;
    dt(l) ? "default" in l ? h = co(
      l.from || u,
      l.default,
      !0
    ) : h = co(l.from || u) : h = co(l), _t(h) ? Object.defineProperty(i, u, {
      enumerable: !0,
      configurable: !0,
      get: () => h.value,
      set: (m) => h.value = m
    }) : i[u] = h;
  }
}
function Ma(n, i, a) {
  Bn(
    De(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function ac(n, i, a, u) {
  let l = u.includes(".") ? _c(a, u) : () => a[u];
  if (Tt(n)) {
    const h = i[n];
    Me(h) && Po(l, h);
  } else if (Me(n))
    Po(l, n.bind(a));
  else if (dt(n))
    if (De(n))
      n.forEach((h) => ac(h, i, a, u));
    else {
      const h = Me(n.handler) ? n.handler.bind(a) : i[n.handler];
      Me(h) && Po(l, h, n);
    }
}
function uc(n) {
  const i = n.type, { mixins: a, extends: u } = i, {
    mixins: l,
    optionsCache: h,
    config: { optionMergeStrategies: m }
  } = n.appContext, O = h.get(i);
  let C;
  return O ? C = O : !l.length && !a && !u ? C = i : (C = {}, l.length && l.forEach(
    (L) => Mo(C, L, m, !0)
  ), Mo(C, i, m)), dt(i) && h.set(i, C), C;
}
function Mo(n, i, a, u = !1) {
  const { mixins: l, extends: h } = i;
  h && Mo(n, h, a, !0), l && l.forEach(
    (m) => Mo(n, m, a, !0)
  );
  for (const m in i)
    if (!(u && m === "expose")) {
      const O = Jl[m] || a && a[m];
      n[m] = O ? O(n[m], i[m]) : i[m];
    }
  return n;
}
const Jl = {
  data: qa,
  props: La,
  emits: La,
  // objects
  methods: no,
  computed: no,
  // lifecycle
  beforeCreate: Jt,
  created: Jt,
  beforeMount: Jt,
  mounted: Jt,
  beforeUpdate: Jt,
  updated: Jt,
  beforeDestroy: Jt,
  beforeUnmount: Jt,
  destroyed: Jt,
  unmounted: Jt,
  activated: Jt,
  deactivated: Jt,
  errorCaptured: Jt,
  serverPrefetch: Jt,
  // assets
  components: no,
  directives: no,
  // watch
  watch: ef,
  // provide / inject
  provide: qa,
  inject: Zl
};
function qa(n, i) {
  return i ? n ? function() {
    return Vt(
      Me(n) ? n.call(this, this) : n,
      Me(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Zl(n, i) {
  return no(Gs(n), Gs(i));
}
function Gs(n) {
  if (De(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++)
      i[n[a]] = n[a];
    return i;
  }
  return n;
}
function Jt(n, i) {
  return n ? [...new Set([].concat(n, i))] : i;
}
function no(n, i) {
  return n ? Vt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function La(n, i) {
  return n ? De(n) && De(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Vt(
    /* @__PURE__ */ Object.create(null),
    Fa(n),
    Fa(i ?? {})
  ) : i;
}
function ef(n, i) {
  if (!n) return i;
  if (!i) return n;
  const a = Vt(/* @__PURE__ */ Object.create(null), n);
  for (const u in i)
    a[u] = Jt(n[u], i[u]);
  return a;
}
function cc() {
  return {
    app: null,
    config: {
      isNativeTag: qc,
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
let tf = 0;
function nf(n, i) {
  return function(u, l = null) {
    Me(u) || (u = Vt({}, u)), l != null && !dt(l) && (l = null);
    const h = cc(), m = /* @__PURE__ */ new WeakSet(), O = [];
    let C = !1;
    const L = h.app = {
      _uid: tf++,
      _component: u,
      _props: l,
      _container: null,
      _context: h,
      _instance: null,
      version: Gf,
      get config() {
        return h.config;
      },
      set config(B) {
      },
      use(B, ...I) {
        return m.has(B) || (B && Me(B.install) ? (m.add(B), B.install(L, ...I)) : Me(B) && (m.add(B), B(L, ...I))), L;
      },
      mixin(B) {
        return h.mixins.includes(B) || h.mixins.push(B), L;
      },
      component(B, I) {
        return I ? (h.components[B] = I, L) : h.components[B];
      },
      directive(B, I) {
        return I ? (h.directives[B] = I, L) : h.directives[B];
      },
      mount(B, I, X) {
        if (!C) {
          const oe = L._ceVNode || St(u, l);
          return oe.appContext = h, X === !0 ? X = "svg" : X === !1 && (X = void 0), n(oe, B, X), C = !0, L._container = B, B.__vue_app__ = L, es(oe.component);
        }
      },
      onUnmount(B) {
        O.push(B);
      },
      unmount() {
        C && (Bn(
          O,
          L._instance,
          16
        ), n(null, L._container), delete L._container.__vue_app__);
      },
      provide(B, I) {
        return h.provides[B] = I, L;
      },
      runWithContext(B) {
        const I = oi;
        oi = L;
        try {
          return B();
        } finally {
          oi = I;
        }
      }
    };
    return L;
  };
}
let oi = null;
function rf(n, i) {
  if (Nt) {
    let a = Nt.provides;
    const u = Nt.parent && Nt.parent.provides;
    u === a && (a = Nt.provides = Object.create(u)), a[n] = i;
  }
}
function co(n, i, a = !1) {
  const u = Nt || Pt;
  if (u || oi) {
    let l = oi ? oi._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (l && n in l)
      return l[n];
    if (arguments.length > 1)
      return a && Me(i) ? i.call(u && u.proxy) : i;
  }
}
function of() {
  return !!(Nt || Pt || oi);
}
const lc = {}, fc = () => Object.create(lc), dc = (n) => Object.getPrototypeOf(n) === lc;
function sf(n, i, a, u = !1) {
  const l = {}, h = fc();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), hc(n, i, l, h);
  for (const m in n.propsOptions[0])
    m in l || (l[m] = void 0);
  a ? n.props = u ? l : bl(l) : n.type.props ? n.props = l : n.props = h, n.attrs = h;
}
function af(n, i, a, u) {
  const {
    props: l,
    attrs: h,
    vnode: { patchFlag: m }
  } = n, O = et(l), [C] = n.propsOptions;
  let L = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || m > 0) && !(m & 16)
  ) {
    if (m & 8) {
      const B = n.vnode.dynamicProps;
      for (let I = 0; I < B.length; I++) {
        let X = B[I];
        if (Jo(n.emitsOptions, X))
          continue;
        const oe = i[X];
        if (C)
          if (rt(h, X))
            oe !== h[X] && (h[X] = oe, L = !0);
          else {
            const te = vn(X);
            l[te] = Ys(
              C,
              O,
              te,
              oe,
              n,
              !1
            );
          }
        else
          oe !== h[X] && (h[X] = oe, L = !0);
      }
    }
  } else {
    hc(n, i, l, h) && (L = !0);
    let B;
    for (const I in O)
      (!i || // for camelCase
      !rt(i, I) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((B = ai(I)) === I || !rt(i, B))) && (C ? a && // for camelCase
      (a[I] !== void 0 || // for kebab-case
      a[B] !== void 0) && (l[I] = Ys(
        C,
        O,
        I,
        void 0,
        n,
        !0
      )) : delete l[I]);
    if (h !== O)
      for (const I in h)
        (!i || !rt(i, I)) && (delete h[I], L = !0);
  }
  L && lr(n.attrs, "set", "");
}
function hc(n, i, a, u) {
  const [l, h] = n.propsOptions;
  let m = !1, O;
  if (i)
    for (let C in i) {
      if (io(C))
        continue;
      const L = i[C];
      let B;
      l && rt(l, B = vn(C)) ? !h || !h.includes(B) ? a[B] = L : (O || (O = {}))[B] = L : Jo(n.emitsOptions, C) || (!(C in u) || L !== u[C]) && (u[C] = L, m = !0);
    }
  if (h) {
    const C = et(a), L = O || ut;
    for (let B = 0; B < h.length; B++) {
      const I = h[B];
      a[I] = Ys(
        l,
        C,
        I,
        L[I],
        n,
        !rt(L, I)
      );
    }
  }
  return m;
}
function Ys(n, i, a, u, l, h) {
  const m = n[a];
  if (m != null) {
    const O = rt(m, "default");
    if (O && u === void 0) {
      const C = m.default;
      if (m.type !== Function && !m.skipFactory && Me(C)) {
        const { propsDefaults: L } = l;
        if (a in L)
          u = L[a];
        else {
          const B = si(l);
          u = L[a] = C.call(
            null,
            i
          ), B();
        }
      } else
        u = C;
      l.ce && l.ce._setProp(a, u);
    }
    m[
      0
      /* shouldCast */
    ] && (h && !O ? u = !1 : m[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === ai(a)) && (u = !0));
  }
  return u;
}
const uf = /* @__PURE__ */ new WeakMap();
function pc(n, i, a = !1) {
  const u = a ? uf : i.propsCache, l = u.get(n);
  if (l)
    return l;
  const h = n.props, m = {}, O = [];
  let C = !1;
  if (!Me(n)) {
    const B = (I) => {
      C = !0;
      const [X, oe] = pc(I, i, !0);
      Vt(m, X), oe && O.push(...oe);
    };
    !a && i.mixins.length && i.mixins.forEach(B), n.extends && B(n.extends), n.mixins && n.mixins.forEach(B);
  }
  if (!h && !C)
    return dt(n) && u.set(n, hi), hi;
  if (De(h))
    for (let B = 0; B < h.length; B++) {
      const I = vn(h[B]);
      Ua(I) && (m[I] = ut);
    }
  else if (h)
    for (const B in h) {
      const I = vn(B);
      if (Ua(I)) {
        const X = h[B], oe = m[I] = De(X) || Me(X) ? { type: X } : Vt({}, X), te = oe.type;
        let de = !1, Re = !0;
        if (De(te))
          for (let Ae = 0; Ae < te.length; ++Ae) {
            const Ke = te[Ae], Ve = Me(Ke) && Ke.name;
            if (Ve === "Boolean") {
              de = !0;
              break;
            } else Ve === "String" && (Re = !1);
          }
        else
          de = Me(te) && te.name === "Boolean";
        oe[
          0
          /* shouldCast */
        ] = de, oe[
          1
          /* shouldCastTrue */
        ] = Re, (de || rt(oe, "default")) && O.push(I);
      }
    }
  const L = [m, O];
  return dt(n) && u.set(n, L), L;
}
function Ua(n) {
  return n[0] !== "$" && !io(n);
}
const Sa = (n) => n[0] === "_" || n === "$stable", Aa = (n) => De(n) ? n.map(kn) : [kn(n)], cf = (n, i, a) => {
  if (i._n)
    return i;
  const u = Fo((...l) => Aa(i(...l)), a);
  return u._c = !1, u;
}, mc = (n, i, a) => {
  const u = n._ctx;
  for (const l in n) {
    if (Sa(l)) continue;
    const h = n[l];
    if (Me(h))
      i[l] = cf(l, h, u);
    else if (h != null) {
      const m = Aa(h);
      i[l] = () => m;
    }
  }
}, yc = (n, i) => {
  const a = Aa(i);
  n.slots.default = () => a;
}, vc = (n, i, a) => {
  for (const u in i)
    (a || !Sa(u)) && (n[u] = i[u]);
}, lf = (n, i, a) => {
  const u = n.slots = fc();
  if (n.vnode.shapeFlag & 32) {
    const l = i.__;
    l && Ms(u, "__", l, !0);
    const h = i._;
    h ? (vc(u, i, a), a && Ms(u, "_", h, !0)) : mc(i, u);
  } else i && yc(n, i);
}, ff = (n, i, a) => {
  const { vnode: u, slots: l } = n;
  let h = !0, m = ut;
  if (u.shapeFlag & 32) {
    const O = i._;
    O ? a && O === 1 ? h = !1 : vc(l, i, a) : (h = !i.$stable, mc(i, l)), m = i;
  } else i && (yc(n, i), m = { default: 1 });
  if (h)
    for (const O in l)
      !Sa(O) && m[O] == null && delete l[O];
}, hn = Nf;
function df(n) {
  return hf(n);
}
function hf(n, i) {
  const a = Yo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: l,
    patchProp: h,
    createElement: m,
    createText: O,
    createComment: C,
    setText: L,
    setElementText: B,
    parentNode: I,
    nextSibling: X,
    setScopeId: oe = jn,
    insertStaticContent: te
  } = n, de = (A, j, Z, ne = null, se = null, re = null, fe = void 0, pe = null, ae = !!j.dynamicChildren) => {
    if (A === j)
      return;
    A && !br(A, j) && (ne = k(A), Ct(A, se, re, !0), A = null), j.patchFlag === -2 && (ae = !1, j.dynamicChildren = null);
    const { type: ie, ref: Te, shapeFlag: me } = j;
    switch (ie) {
      case Zo:
        Re(A, j, Z, ne);
        break;
      case Dn:
        Ae(A, j, Z, ne);
        break;
      case Rs:
        A == null && Ke(j, Z, ne, fe);
        break;
      case bt:
        xe(
          A,
          j,
          Z,
          ne,
          se,
          re,
          fe,
          pe,
          ae
        );
        break;
      default:
        me & 1 ? $(
          A,
          j,
          Z,
          ne,
          se,
          re,
          fe,
          pe,
          ae
        ) : me & 6 ? ke(
          A,
          j,
          Z,
          ne,
          se,
          re,
          fe,
          pe,
          ae
        ) : (me & 64 || me & 128) && ie.process(
          A,
          j,
          Z,
          ne,
          se,
          re,
          fe,
          pe,
          ae,
          q
        );
    }
    Te != null && se ? ao(Te, A && A.ref, re, j || A, !j) : Te == null && A && A.ref != null && ao(A.ref, null, re, A, !0);
  }, Re = (A, j, Z, ne) => {
    if (A == null)
      u(
        j.el = O(j.children),
        Z,
        ne
      );
    else {
      const se = j.el = A.el;
      j.children !== A.children && L(se, j.children);
    }
  }, Ae = (A, j, Z, ne) => {
    A == null ? u(
      j.el = C(j.children || ""),
      Z,
      ne
    ) : j.el = A.el;
  }, Ke = (A, j, Z, ne) => {
    [A.el, A.anchor] = te(
      A.children,
      j,
      Z,
      ne,
      A.el,
      A.anchor
    );
  }, Ve = ({ el: A, anchor: j }, Z, ne) => {
    let se;
    for (; A && A !== j; )
      se = X(A), u(A, Z, ne), A = se;
    u(j, Z, ne);
  }, z = ({ el: A, anchor: j }) => {
    let Z;
    for (; A && A !== j; )
      Z = X(A), l(A), A = Z;
    l(j);
  }, $ = (A, j, Z, ne, se, re, fe, pe, ae) => {
    j.type === "svg" ? fe = "svg" : j.type === "math" && (fe = "mathml"), A == null ? H(
      j,
      Z,
      ne,
      se,
      re,
      fe,
      pe,
      ae
    ) : R(
      A,
      j,
      se,
      re,
      fe,
      pe,
      ae
    );
  }, H = (A, j, Z, ne, se, re, fe, pe) => {
    let ae, ie;
    const { props: Te, shapeFlag: me, transition: Oe, dirs: Se } = A;
    if (ae = A.el = m(
      A.type,
      re,
      Te && Te.is,
      Te
    ), me & 8 ? B(ae, A.children) : me & 16 && le(
      A.children,
      ae,
      null,
      ne,
      se,
      Is(A, re),
      fe,
      pe
    ), Se && ei(A, null, ne, "created"), G(ae, A, A.scopeId, fe, ne), Te) {
      for (const $e in Te)
        $e !== "value" && !io($e) && h(ae, $e, null, Te[$e], re, ne);
      "value" in Te && h(ae, "value", null, Te.value, re), (ie = Te.onVnodeBeforeMount) && Rn(ie, ne, A);
    }
    Se && ei(A, null, ne, "beforeMount");
    const Ie = pf(se, Oe);
    Ie && Oe.beforeEnter(ae), u(ae, j, Z), ((ie = Te && Te.onVnodeMounted) || Ie || Se) && hn(() => {
      ie && Rn(ie, ne, A), Ie && Oe.enter(ae), Se && ei(A, null, ne, "mounted");
    }, se);
  }, G = (A, j, Z, ne, se) => {
    if (Z && oe(A, Z), ne)
      for (let re = 0; re < ne.length; re++)
        oe(A, ne[re]);
    if (se) {
      let re = se.subTree;
      if (j === re || xc(re.type) && (re.ssContent === j || re.ssFallback === j)) {
        const fe = se.vnode;
        G(
          A,
          fe,
          fe.scopeId,
          fe.slotScopeIds,
          se.parent
        );
      }
    }
  }, le = (A, j, Z, ne, se, re, fe, pe, ae = 0) => {
    for (let ie = ae; ie < A.length; ie++) {
      const Te = A[ie] = pe ? gr(A[ie]) : kn(A[ie]);
      de(
        null,
        Te,
        j,
        Z,
        ne,
        se,
        re,
        fe,
        pe
      );
    }
  }, R = (A, j, Z, ne, se, re, fe) => {
    const pe = j.el = A.el;
    let { patchFlag: ae, dynamicChildren: ie, dirs: Te } = j;
    ae |= A.patchFlag & 16;
    const me = A.props || ut, Oe = j.props || ut;
    let Se;
    if (Z && ti(Z, !1), (Se = Oe.onVnodeBeforeUpdate) && Rn(Se, Z, j, A), Te && ei(j, A, Z, "beforeUpdate"), Z && ti(Z, !0), (me.innerHTML && Oe.innerHTML == null || me.textContent && Oe.textContent == null) && B(pe, ""), ie ? ye(
      A.dynamicChildren,
      ie,
      pe,
      Z,
      ne,
      Is(j, se),
      re
    ) : fe || qe(
      A,
      j,
      pe,
      null,
      Z,
      ne,
      Is(j, se),
      re,
      !1
    ), ae > 0) {
      if (ae & 16)
        Pe(pe, me, Oe, Z, se);
      else if (ae & 2 && me.class !== Oe.class && h(pe, "class", null, Oe.class, se), ae & 4 && h(pe, "style", me.style, Oe.style, se), ae & 8) {
        const Ie = j.dynamicProps;
        for (let $e = 0; $e < Ie.length; $e++) {
          const We = Ie[$e], ct = me[We], gt = Oe[We];
          (gt !== ct || We === "value") && h(pe, We, ct, gt, se, Z);
        }
      }
      ae & 1 && A.children !== j.children && B(pe, j.children);
    } else !fe && ie == null && Pe(pe, me, Oe, Z, se);
    ((Se = Oe.onVnodeUpdated) || Te) && hn(() => {
      Se && Rn(Se, Z, j, A), Te && ei(j, A, Z, "updated");
    }, ne);
  }, ye = (A, j, Z, ne, se, re, fe) => {
    for (let pe = 0; pe < j.length; pe++) {
      const ae = A[pe], ie = j[pe], Te = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ae.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ae.type === bt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !br(ae, ie) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? I(ae.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          Z
        )
      );
      de(
        ae,
        ie,
        Te,
        null,
        ne,
        se,
        re,
        fe,
        !0
      );
    }
  }, Pe = (A, j, Z, ne, se) => {
    if (j !== Z) {
      if (j !== ut)
        for (const re in j)
          !io(re) && !(re in Z) && h(
            A,
            re,
            j[re],
            null,
            se,
            ne
          );
      for (const re in Z) {
        if (io(re)) continue;
        const fe = Z[re], pe = j[re];
        fe !== pe && re !== "value" && h(A, re, pe, fe, se, ne);
      }
      "value" in Z && h(A, "value", j.value, Z.value, se);
    }
  }, xe = (A, j, Z, ne, se, re, fe, pe, ae) => {
    const ie = j.el = A ? A.el : O(""), Te = j.anchor = A ? A.anchor : O("");
    let { patchFlag: me, dynamicChildren: Oe, slotScopeIds: Se } = j;
    Se && (pe = pe ? pe.concat(Se) : Se), A == null ? (u(ie, Z, ne), u(Te, Z, ne), le(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      Z,
      Te,
      se,
      re,
      fe,
      pe,
      ae
    )) : me > 0 && me & 64 && Oe && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    A.dynamicChildren ? (ye(
      A.dynamicChildren,
      Oe,
      Z,
      se,
      re,
      fe,
      pe
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || se && j === se.subTree) && gc(
      A,
      j,
      !0
      /* shallow */
    )) : qe(
      A,
      j,
      Z,
      Te,
      se,
      re,
      fe,
      pe,
      ae
    );
  }, ke = (A, j, Z, ne, se, re, fe, pe, ae) => {
    j.slotScopeIds = pe, A == null ? j.shapeFlag & 512 ? se.ctx.activate(
      j,
      Z,
      ne,
      fe,
      ae
    ) : it(
      j,
      Z,
      ne,
      se,
      re,
      fe,
      ae
    ) : Be(A, j, ae);
  }, it = (A, j, Z, ne, se, re, fe) => {
    const pe = A.component = Mf(
      A,
      ne,
      se
    );
    if (rc(A) && (pe.ctx.renderer = q), Lf(pe, !1, fe), pe.asyncDep) {
      if (se && se.registerDep(pe, Ne, fe), !A.el) {
        const ae = pe.subTree = St(Dn);
        Ae(null, ae, j, Z);
      }
    } else
      Ne(
        pe,
        A,
        j,
        Z,
        se,
        re,
        fe
      );
  }, Be = (A, j, Z) => {
    const ne = j.component = A.component;
    if (Of(A, j, Z))
      if (ne.asyncDep && !ne.asyncResolved) {
        ve(ne, j, Z);
        return;
      } else
        ne.next = j, ne.update();
    else
      j.el = A.el, ne.vnode = j;
  }, Ne = (A, j, Z, ne, se, re, fe) => {
    const pe = () => {
      if (A.isMounted) {
        let { next: me, bu: Oe, u: Se, parent: Ie, vnode: $e } = A;
        {
          const lt = bc(A);
          if (lt) {
            me && (me.el = $e.el, ve(A, me, fe)), lt.asyncDep.then(() => {
              A.isUnmounted || pe();
            });
            return;
          }
        }
        let We = me, ct;
        ti(A, !1), me ? (me.el = $e.el, ve(A, me, fe)) : me = $e, Oe && ko(Oe), (ct = me.props && me.props.onVnodeBeforeUpdate) && Rn(ct, Ie, me, $e), ti(A, !0);
        const gt = $a(A), Ot = A.subTree;
        A.subTree = gt, de(
          Ot,
          gt,
          // parent may have changed if it's in a teleport
          I(Ot.el),
          // anchor may have changed if it's in a fragment
          k(Ot),
          A,
          se,
          re
        ), me.el = gt.el, We === null && Pa(A, gt.el), Se && hn(Se, se), (ct = me.props && me.props.onVnodeUpdated) && hn(
          () => Rn(ct, Ie, me, $e),
          se
        );
      } else {
        let me;
        const { el: Oe, props: Se } = j, { bm: Ie, m: $e, parent: We, root: ct, type: gt } = A, Ot = yi(j);
        ti(A, !1), Ie && ko(Ie), !Ot && (me = Se && Se.onVnodeBeforeMount) && Rn(me, We, j), ti(A, !0);
        {
          ct.ce && // @ts-expect-error _def is private
          ct.ce._def.shadowRoot !== !1 && ct.ce._injectChildStyle(gt);
          const lt = A.subTree = $a(A);
          de(
            null,
            lt,
            Z,
            ne,
            A,
            se,
            re
          ), j.el = lt.el;
        }
        if ($e && hn($e, se), !Ot && (me = Se && Se.onVnodeMounted)) {
          const lt = j;
          hn(
            () => Rn(me, We, lt),
            se
          );
        }
        (j.shapeFlag & 256 || We && yi(We.vnode) && We.vnode.shapeFlag & 256) && A.a && hn(A.a, se), A.isMounted = !0, j = Z = ne = null;
      }
    };
    A.scope.on();
    const ae = A.effect = new Ru(pe);
    A.scope.off();
    const ie = A.update = ae.run.bind(ae), Te = A.job = ae.runIfDirty.bind(ae);
    Te.i = A, Te.id = A.uid, ae.scheduler = () => Ea(Te), ti(A, !0), ie();
  }, ve = (A, j, Z) => {
    j.component = A;
    const ne = A.vnode.props;
    A.vnode = j, A.next = null, af(A, j.props, ne, Z), ff(A, j.children, Z), hr(), ja(A), pr();
  }, qe = (A, j, Z, ne, se, re, fe, pe, ae = !1) => {
    const ie = A && A.children, Te = A ? A.shapeFlag : 0, me = j.children, { patchFlag: Oe, shapeFlag: Se } = j;
    if (Oe > 0) {
      if (Oe & 128) {
        st(
          ie,
          me,
          Z,
          ne,
          se,
          re,
          fe,
          pe,
          ae
        );
        return;
      } else if (Oe & 256) {
        ht(
          ie,
          me,
          Z,
          ne,
          se,
          re,
          fe,
          pe,
          ae
        );
        return;
      }
    }
    Se & 8 ? (Te & 16 && wt(ie, se, re), me !== ie && B(Z, me)) : Te & 16 ? Se & 16 ? st(
      ie,
      me,
      Z,
      ne,
      se,
      re,
      fe,
      pe,
      ae
    ) : wt(ie, se, re, !0) : (Te & 8 && B(Z, ""), Se & 16 && le(
      me,
      Z,
      ne,
      se,
      re,
      fe,
      pe,
      ae
    ));
  }, ht = (A, j, Z, ne, se, re, fe, pe, ae) => {
    A = A || hi, j = j || hi;
    const ie = A.length, Te = j.length, me = Math.min(ie, Te);
    let Oe;
    for (Oe = 0; Oe < me; Oe++) {
      const Se = j[Oe] = ae ? gr(j[Oe]) : kn(j[Oe]);
      de(
        A[Oe],
        Se,
        Z,
        null,
        se,
        re,
        fe,
        pe,
        ae
      );
    }
    ie > Te ? wt(
      A,
      se,
      re,
      !0,
      !1,
      me
    ) : le(
      j,
      Z,
      ne,
      se,
      re,
      fe,
      pe,
      ae,
      me
    );
  }, st = (A, j, Z, ne, se, re, fe, pe, ae) => {
    let ie = 0;
    const Te = j.length;
    let me = A.length - 1, Oe = Te - 1;
    for (; ie <= me && ie <= Oe; ) {
      const Se = A[ie], Ie = j[ie] = ae ? gr(j[ie]) : kn(j[ie]);
      if (br(Se, Ie))
        de(
          Se,
          Ie,
          Z,
          null,
          se,
          re,
          fe,
          pe,
          ae
        );
      else
        break;
      ie++;
    }
    for (; ie <= me && ie <= Oe; ) {
      const Se = A[me], Ie = j[Oe] = ae ? gr(j[Oe]) : kn(j[Oe]);
      if (br(Se, Ie))
        de(
          Se,
          Ie,
          Z,
          null,
          se,
          re,
          fe,
          pe,
          ae
        );
      else
        break;
      me--, Oe--;
    }
    if (ie > me) {
      if (ie <= Oe) {
        const Se = Oe + 1, Ie = Se < Te ? j[Se].el : ne;
        for (; ie <= Oe; )
          de(
            null,
            j[ie] = ae ? gr(j[ie]) : kn(j[ie]),
            Z,
            Ie,
            se,
            re,
            fe,
            pe,
            ae
          ), ie++;
      }
    } else if (ie > Oe)
      for (; ie <= me; )
        Ct(A[ie], se, re, !0), ie++;
    else {
      const Se = ie, Ie = ie, $e = /* @__PURE__ */ new Map();
      for (ie = Ie; ie <= Oe; ie++) {
        const tt = j[ie] = ae ? gr(j[ie]) : kn(j[ie]);
        tt.key != null && $e.set(tt.key, ie);
      }
      let We, ct = 0;
      const gt = Oe - Ie + 1;
      let Ot = !1, lt = 0;
      const $t = new Array(gt);
      for (ie = 0; ie < gt; ie++) $t[ie] = 0;
      for (ie = Se; ie <= me; ie++) {
        const tt = A[ie];
        if (ct >= gt) {
          Ct(tt, se, re, !0);
          continue;
        }
        let ee;
        if (tt.key != null)
          ee = $e.get(tt.key);
        else
          for (We = Ie; We <= Oe; We++)
            if ($t[We - Ie] === 0 && br(tt, j[We])) {
              ee = We;
              break;
            }
        ee === void 0 ? Ct(tt, se, re, !0) : ($t[ee - Ie] = ie + 1, ee >= lt ? lt = ee : Ot = !0, de(
          tt,
          j[ee],
          Z,
          null,
          se,
          re,
          fe,
          pe,
          ae
        ), ct++);
      }
      const In = Ot ? mf($t) : hi;
      for (We = In.length - 1, ie = gt - 1; ie >= 0; ie--) {
        const tt = Ie + ie, ee = j[tt], nn = tt + 1 < Te ? j[tt + 1].el : ne;
        $t[ie] === 0 ? de(
          null,
          ee,
          Z,
          nn,
          se,
          re,
          fe,
          pe,
          ae
        ) : Ot && (We < 0 || ie !== In[We] ? yt(ee, Z, nn, 2) : We--);
      }
    }
  }, yt = (A, j, Z, ne, se = null) => {
    const { el: re, type: fe, transition: pe, children: ae, shapeFlag: ie } = A;
    if (ie & 6) {
      yt(A.component.subTree, j, Z, ne);
      return;
    }
    if (ie & 128) {
      A.suspense.move(j, Z, ne);
      return;
    }
    if (ie & 64) {
      fe.move(A, j, Z, q);
      return;
    }
    if (fe === bt) {
      u(re, j, Z);
      for (let me = 0; me < ae.length; me++)
        yt(ae[me], j, Z, ne);
      u(A.anchor, j, Z);
      return;
    }
    if (fe === Rs) {
      Ve(A, j, Z);
      return;
    }
    if (ne !== 2 && ie & 1 && pe)
      if (ne === 0)
        pe.beforeEnter(re), u(re, j, Z), hn(() => pe.enter(re), se);
      else {
        const { leave: me, delayLeave: Oe, afterLeave: Se } = pe, Ie = () => {
          A.ctx.isUnmounted ? l(re) : u(re, j, Z);
        }, $e = () => {
          me(re, () => {
            Ie(), Se && Se();
          });
        };
        Oe ? Oe(re, Ie, $e) : $e();
      }
    else
      u(re, j, Z);
  }, Ct = (A, j, Z, ne = !1, se = !1) => {
    const {
      type: re,
      props: fe,
      ref: pe,
      children: ae,
      dynamicChildren: ie,
      shapeFlag: Te,
      patchFlag: me,
      dirs: Oe,
      cacheIndex: Se
    } = A;
    if (me === -2 && (se = !1), pe != null && (hr(), ao(pe, null, Z, A, !0), pr()), Se != null && (j.renderCache[Se] = void 0), Te & 256) {
      j.ctx.deactivate(A);
      return;
    }
    const Ie = Te & 1 && Oe, $e = !yi(A);
    let We;
    if ($e && (We = fe && fe.onVnodeBeforeUnmount) && Rn(We, j, A), Te & 6)
      tn(A.component, Z, ne);
    else {
      if (Te & 128) {
        A.suspense.unmount(Z, ne);
        return;
      }
      Ie && ei(A, null, j, "beforeUnmount"), Te & 64 ? A.type.remove(
        A,
        j,
        Z,
        q,
        ne
      ) : ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (re !== bt || me > 0 && me & 64) ? wt(
        ie,
        j,
        Z,
        !1,
        !0
      ) : (re === bt && me & 384 || !se && Te & 16) && wt(ae, j, Z), ne && Dt(A);
    }
    ($e && (We = fe && fe.onVnodeUnmounted) || Ie) && hn(() => {
      We && Rn(We, j, A), Ie && ei(A, null, j, "unmounted");
    }, Z);
  }, Dt = (A) => {
    const { type: j, el: Z, anchor: ne, transition: se } = A;
    if (j === bt) {
      Nn(Z, ne);
      return;
    }
    if (j === Rs) {
      z(A);
      return;
    }
    const re = () => {
      l(Z), se && !se.persisted && se.afterLeave && se.afterLeave();
    };
    if (A.shapeFlag & 1 && se && !se.persisted) {
      const { leave: fe, delayLeave: pe } = se, ae = () => fe(Z, re);
      pe ? pe(A.el, re, ae) : ae();
    } else
      re();
  }, Nn = (A, j) => {
    let Z;
    for (; A !== j; )
      Z = X(A), l(A), A = Z;
    l(j);
  }, tn = (A, j, Z) => {
    const {
      bum: ne,
      scope: se,
      job: re,
      subTree: fe,
      um: pe,
      m: ae,
      a: ie,
      parent: Te,
      slots: { __: me }
    } = A;
    Va(ae), Va(ie), ne && ko(ne), Te && De(me) && me.forEach((Oe) => {
      Te.renderCache[Oe] = void 0;
    }), se.stop(), re && (re.flags |= 8, Ct(fe, A, j, Z)), pe && hn(pe, j), hn(() => {
      A.isUnmounted = !0;
    }, j), j && j.pendingBranch && !j.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === j.pendingId && (j.deps--, j.deps === 0 && j.resolve());
  }, wt = (A, j, Z, ne = !1, se = !1, re = 0) => {
    for (let fe = re; fe < A.length; fe++)
      Ct(A[fe], j, Z, ne, se);
  }, k = (A) => {
    if (A.shapeFlag & 6)
      return k(A.component.subTree);
    if (A.shapeFlag & 128)
      return A.suspense.next();
    const j = X(A.anchor || A.el), Z = j && j[Dl];
    return Z ? X(Z) : j;
  };
  let _ = !1;
  const K = (A, j, Z) => {
    A == null ? j._vnode && Ct(j._vnode, null, null, !0) : de(
      j._vnode || null,
      A,
      j,
      null,
      null,
      null,
      Z
    ), j._vnode = A, _ || (_ = !0, ja(), Zu(), _ = !1);
  }, q = {
    p: de,
    um: Ct,
    m: yt,
    r: Dt,
    mt: it,
    mc: le,
    pc: qe,
    pbc: ye,
    n: k,
    o: n
  };
  return {
    render: K,
    hydrate: void 0,
    createApp: nf(K)
  };
}
function Is({ type: n, props: i }, a) {
  return a === "svg" && n === "foreignObject" || a === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function ti({ effect: n, job: i }, a) {
  a ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function pf(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function gc(n, i, a = !1) {
  const u = n.children, l = i.children;
  if (De(u) && De(l))
    for (let h = 0; h < u.length; h++) {
      const m = u[h];
      let O = l[h];
      O.shapeFlag & 1 && !O.dynamicChildren && ((O.patchFlag <= 0 || O.patchFlag === 32) && (O = l[h] = gr(l[h]), O.el = m.el), !a && O.patchFlag !== -2 && gc(m, O)), O.type === Zo && (O.el = m.el), O.type === Dn && !O.el && (O.el = m.el);
    }
}
function mf(n) {
  const i = n.slice(), a = [0];
  let u, l, h, m, O;
  const C = n.length;
  for (u = 0; u < C; u++) {
    const L = n[u];
    if (L !== 0) {
      if (l = a[a.length - 1], n[l] < L) {
        i[u] = l, a.push(u);
        continue;
      }
      for (h = 0, m = a.length - 1; h < m; )
        O = h + m >> 1, n[a[O]] < L ? h = O + 1 : m = O;
      L < n[a[h]] && (h > 0 && (i[u] = a[h - 1]), a[h] = u);
    }
  }
  for (h = a.length, m = a[h - 1]; h-- > 0; )
    a[h] = m, m = i[m];
  return a;
}
function bc(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : bc(i);
}
function Va(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const yf = Symbol.for("v-scx"), vf = () => co(yf);
function gf(n, i) {
  return ka(n, null, i);
}
function Po(n, i, a) {
  return ka(n, i, a);
}
function ka(n, i, a = ut) {
  const { immediate: u, deep: l, flush: h, once: m } = a, O = Vt({}, a), C = i && u || !i && h !== "post";
  let L;
  if (bo) {
    if (h === "sync") {
      const oe = vf();
      L = oe.__watcherHandles || (oe.__watcherHandles = []);
    } else if (!C) {
      const oe = () => {
      };
      return oe.stop = jn, oe.resume = jn, oe.pause = jn, oe;
    }
  }
  const B = Nt;
  O.call = (oe, te, de) => Bn(oe, B, te, de);
  let I = !1;
  h === "post" ? O.scheduler = (oe) => {
    hn(oe, B && B.suspense);
  } : h !== "sync" && (I = !0, O.scheduler = (oe, te) => {
    te ? oe() : Ea(oe);
  }), O.augmentJob = (oe) => {
    i && (oe.flags |= 4), I && (oe.flags |= 2, B && (oe.id = B.uid, oe.i = B));
  };
  const X = kl(n, i, O);
  return bo && (L ? L.push(X) : C && X()), X;
}
function bf(n, i, a) {
  const u = this.proxy, l = Tt(n) ? n.includes(".") ? _c(u, n) : () => u[n] : n.bind(u, u);
  let h;
  Me(i) ? h = i : (h = i.handler, a = i);
  const m = si(this), O = ka(l, h.bind(u), a);
  return m(), O;
}
function _c(n, i) {
  const a = i.split(".");
  return () => {
    let u = n;
    for (let l = 0; l < a.length && u; l++)
      u = u[a[l]];
    return u;
  };
}
const _f = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${vn(i)}Modifiers`] || n[`${ai(i)}Modifiers`];
function wf(n, i, ...a) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || ut;
  let l = a;
  const h = i.startsWith("update:"), m = h && _f(u, i.slice(7));
  m && (m.trim && (l = a.map((B) => Tt(B) ? B.trim() : B)), m.number && (l = a.map(Au)));
  let O, C = u[O = As(i)] || // also try camelCase event handler (#2249)
  u[O = As(vn(i))];
  !C && h && (C = u[O = As(ai(i))]), C && Bn(
    C,
    n,
    6,
    l
  );
  const L = u[O + "Once"];
  if (L) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[O])
      return;
    n.emitted[O] = !0, Bn(
      L,
      n,
      6,
      l
    );
  }
}
function wc(n, i, a = !1) {
  const u = i.emitsCache, l = u.get(n);
  if (l !== void 0)
    return l;
  const h = n.emits;
  let m = {}, O = !1;
  if (!Me(n)) {
    const C = (L) => {
      const B = wc(L, i, !0);
      B && (O = !0, Vt(m, B));
    };
    !a && i.mixins.length && i.mixins.forEach(C), n.extends && C(n.extends), n.mixins && n.mixins.forEach(C);
  }
  return !h && !O ? (dt(n) && u.set(n, null), null) : (De(h) ? h.forEach((C) => m[C] = null) : Vt(m, h), dt(n) && u.set(n, m), m);
}
function Jo(n, i) {
  return !n || !$o(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), rt(n, i[0].toLowerCase() + i.slice(1)) || rt(n, ai(i)) || rt(n, i));
}
function $a(n) {
  const {
    type: i,
    vnode: a,
    proxy: u,
    withProxy: l,
    propsOptions: [h],
    slots: m,
    attrs: O,
    emit: C,
    render: L,
    renderCache: B,
    props: I,
    data: X,
    setupState: oe,
    ctx: te,
    inheritAttrs: de
  } = n, Re = Bo(n);
  let Ae, Ke;
  try {
    if (a.shapeFlag & 4) {
      const z = l || u, $ = z;
      Ae = kn(
        L.call(
          $,
          z,
          B,
          I,
          oe,
          X,
          te
        )
      ), Ke = O;
    } else {
      const z = i;
      Ae = kn(
        z.length > 1 ? z(
          I,
          { attrs: O, slots: m, emit: C }
        ) : z(
          I,
          null
        )
      ), Ke = i.props ? O : Ef(O);
    }
  } catch (z) {
    lo.length = 0, Eo(z, n, 1), Ae = St(Dn);
  }
  let Ve = Ae;
  if (Ke && de !== !1) {
    const z = Object.keys(Ke), { shapeFlag: $ } = Ve;
    z.length && $ & 7 && (h && z.some(ua) && (Ke = Tf(
      Ke,
      h
    )), Ve = xi(Ve, Ke, !1, !0));
  }
  return a.dirs && (Ve = xi(Ve, null, !1, !0), Ve.dirs = Ve.dirs ? Ve.dirs.concat(a.dirs) : a.dirs), a.transition && Ta(Ve, a.transition), Ae = Ve, Bo(Re), Ae;
}
function xf(n, i = !0) {
  let a;
  for (let u = 0; u < n.length; u++) {
    const l = n[u];
    if (wi(l)) {
      if (l.type !== Dn || l.children === "v-if") {
        if (a)
          return;
        a = l;
      }
    } else
      return;
  }
  return a;
}
const Ef = (n) => {
  let i;
  for (const a in n)
    (a === "class" || a === "style" || $o(a)) && ((i || (i = {}))[a] = n[a]);
  return i;
}, Tf = (n, i) => {
  const a = {};
  for (const u in n)
    (!ua(u) || !(u.slice(9) in i)) && (a[u] = n[u]);
  return a;
};
function Of(n, i, a) {
  const { props: u, children: l, component: h } = n, { props: m, children: O, patchFlag: C } = i, L = h.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && C >= 0) {
    if (C & 1024)
      return !0;
    if (C & 16)
      return u ? Ha(u, m, L) : !!m;
    if (C & 8) {
      const B = i.dynamicProps;
      for (let I = 0; I < B.length; I++) {
        const X = B[I];
        if (m[X] !== u[X] && !Jo(L, X))
          return !0;
      }
    }
  } else
    return (l || O) && (!O || !O.$stable) ? !0 : u === m ? !1 : u ? m ? Ha(u, m, L) : !0 : !!m;
  return !1;
}
function Ha(n, i, a) {
  const u = Object.keys(i);
  if (u.length !== Object.keys(n).length)
    return !0;
  for (let l = 0; l < u.length; l++) {
    const h = u[l];
    if (i[h] !== n[h] && !Jo(a, h))
      return !0;
  }
  return !1;
}
function Pa({ vnode: n, parent: i }, a) {
  for (; i; ) {
    const u = i.subTree;
    if (u.suspense && u.suspense.activeBranch === n && (u.el = n.el), u === n)
      (n = i.vnode).el = a, i = i.parent;
    else
      break;
  }
}
const xc = (n) => n.__isSuspense;
let Xs = 0;
const Sf = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(n, i, a, u, l, h, m, O, C, L) {
    if (n == null)
      kf(
        i,
        a,
        u,
        l,
        h,
        m,
        O,
        C,
        L
      );
    else {
      if (h && h.deps > 0 && !n.suspense.isInFallback) {
        i.suspense = n.suspense, i.suspense.vnode = i, i.el = n.el;
        return;
      }
      Pf(
        n,
        i,
        a,
        u,
        l,
        m,
        O,
        C,
        L
      );
    }
  },
  hydrate: Cf,
  normalize: Df
}, Af = Sf;
function go(n, i) {
  const a = n.props && n.props[i];
  Me(a) && a();
}
function kf(n, i, a, u, l, h, m, O, C) {
  const {
    p: L,
    o: { createElement: B }
  } = C, I = B("div"), X = n.suspense = Ec(
    n,
    l,
    u,
    i,
    I,
    a,
    h,
    m,
    O,
    C
  );
  L(
    null,
    X.pendingBranch = n.ssContent,
    I,
    null,
    u,
    X,
    h,
    m
  ), X.deps > 0 ? (go(n, "onPending"), go(n, "onFallback"), L(
    null,
    n.ssFallback,
    i,
    a,
    u,
    null,
    // fallback tree will not have suspense context
    h,
    m
  ), vi(X, n.ssFallback)) : X.resolve(!1, !0);
}
function Pf(n, i, a, u, l, h, m, O, { p: C, um: L, o: { createElement: B } }) {
  const I = i.suspense = n.suspense;
  I.vnode = i, i.el = n.el;
  const X = i.ssContent, oe = i.ssFallback, { activeBranch: te, pendingBranch: de, isInFallback: Re, isHydrating: Ae } = I;
  if (de)
    I.pendingBranch = X, br(X, de) ? (C(
      de,
      X,
      I.hiddenContainer,
      null,
      l,
      I,
      h,
      m,
      O
    ), I.deps <= 0 ? I.resolve() : Re && (Ae || (C(
      te,
      oe,
      a,
      u,
      l,
      null,
      // fallback tree will not have suspense context
      h,
      m,
      O
    ), vi(I, oe)))) : (I.pendingId = Xs++, Ae ? (I.isHydrating = !1, I.activeBranch = de) : L(de, l, I), I.deps = 0, I.effects.length = 0, I.hiddenContainer = B("div"), Re ? (C(
      null,
      X,
      I.hiddenContainer,
      null,
      l,
      I,
      h,
      m,
      O
    ), I.deps <= 0 ? I.resolve() : (C(
      te,
      oe,
      a,
      u,
      l,
      null,
      // fallback tree will not have suspense context
      h,
      m,
      O
    ), vi(I, oe))) : te && br(X, te) ? (C(
      te,
      X,
      a,
      u,
      l,
      I,
      h,
      m,
      O
    ), I.resolve(!0)) : (C(
      null,
      X,
      I.hiddenContainer,
      null,
      l,
      I,
      h,
      m,
      O
    ), I.deps <= 0 && I.resolve()));
  else if (te && br(X, te))
    C(
      te,
      X,
      a,
      u,
      l,
      I,
      h,
      m,
      O
    ), vi(I, X);
  else if (go(i, "onPending"), I.pendingBranch = X, X.shapeFlag & 512 ? I.pendingId = X.component.suspenseId : I.pendingId = Xs++, C(
    null,
    X,
    I.hiddenContainer,
    null,
    l,
    I,
    h,
    m,
    O
  ), I.deps <= 0)
    I.resolve();
  else {
    const { timeout: Ke, pendingId: Ve } = I;
    Ke > 0 ? setTimeout(() => {
      I.pendingId === Ve && I.fallback(oe);
    }, Ke) : Ke === 0 && I.fallback(oe);
  }
}
function Ec(n, i, a, u, l, h, m, O, C, L, B = !1) {
  const {
    p: I,
    m: X,
    um: oe,
    n: te,
    o: { parentNode: de, remove: Re }
  } = L;
  let Ae;
  const Ke = If(n);
  Ke && i && i.pendingBranch && (Ae = i.pendingId, i.deps++);
  const Ve = n.props ? Hc(n.props.timeout) : void 0, z = h, $ = {
    vnode: n,
    parent: i,
    parentComponent: a,
    namespace: m,
    container: u,
    hiddenContainer: l,
    deps: 0,
    pendingId: Xs++,
    timeout: typeof Ve == "number" ? Ve : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !B,
    isHydrating: B,
    isUnmounted: !1,
    effects: [],
    resolve(H = !1, G = !1) {
      const {
        vnode: le,
        activeBranch: R,
        pendingBranch: ye,
        pendingId: Pe,
        effects: xe,
        parentComponent: ke,
        container: it
      } = $;
      let Be = !1;
      $.isHydrating ? $.isHydrating = !1 : H || (Be = R && ye.transition && ye.transition.mode === "out-in", Be && (R.transition.afterLeave = () => {
        Pe === $.pendingId && (X(
          ye,
          it,
          h === z ? te(R) : h,
          0
        ), $s(xe));
      }), R && (de(R.el) === it && (h = te(R)), oe(R, ke, $, !0)), Be || X(ye, it, h, 0)), vi($, ye), $.pendingBranch = null, $.isInFallback = !1;
      let Ne = $.parent, ve = !1;
      for (; Ne; ) {
        if (Ne.pendingBranch) {
          Ne.effects.push(...xe), ve = !0;
          break;
        }
        Ne = Ne.parent;
      }
      !ve && !Be && $s(xe), $.effects = [], Ke && i && i.pendingBranch && Ae === i.pendingId && (i.deps--, i.deps === 0 && !G && i.resolve()), go(le, "onResolve");
    },
    fallback(H) {
      if (!$.pendingBranch)
        return;
      const { vnode: G, activeBranch: le, parentComponent: R, container: ye, namespace: Pe } = $;
      go(G, "onFallback");
      const xe = te(le), ke = () => {
        $.isInFallback && (I(
          null,
          H,
          ye,
          xe,
          R,
          null,
          // fallback tree will not have suspense context
          Pe,
          O,
          C
        ), vi($, H));
      }, it = H.transition && H.transition.mode === "out-in";
      it && (le.transition.afterLeave = ke), $.isInFallback = !0, oe(
        le,
        R,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), it || ke();
    },
    move(H, G, le) {
      $.activeBranch && X($.activeBranch, H, G, le), $.container = H;
    },
    next() {
      return $.activeBranch && te($.activeBranch);
    },
    registerDep(H, G, le) {
      const R = !!$.pendingBranch;
      R && $.deps++;
      const ye = H.vnode.el;
      H.asyncDep.catch((Pe) => {
        Eo(Pe, H, 0);
      }).then((Pe) => {
        if (H.isUnmounted || $.isUnmounted || $.pendingId !== H.suspenseId)
          return;
        H.asyncResolved = !0;
        const { vnode: xe } = H;
        Zs(H, Pe), ye && (xe.el = ye);
        const ke = !ye && H.subTree.el;
        G(
          H,
          xe,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          de(ye || H.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          ye ? null : te(H.subTree),
          $,
          m,
          le
        ), ke && Re(ke), Pa(H, xe.el), R && --$.deps === 0 && $.resolve();
      });
    },
    unmount(H, G) {
      $.isUnmounted = !0, $.activeBranch && oe(
        $.activeBranch,
        a,
        H,
        G
      ), $.pendingBranch && oe(
        $.pendingBranch,
        a,
        H,
        G
      );
    }
  };
  return $;
}
function Cf(n, i, a, u, l, h, m, O, C) {
  const L = i.suspense = Ec(
    i,
    u,
    a,
    n.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    l,
    h,
    m,
    O,
    !0
  ), B = C(
    n,
    L.pendingBranch = i.ssContent,
    a,
    L,
    h,
    m
  );
  return L.deps === 0 && L.resolve(!1, !0), B;
}
function Df(n) {
  const { shapeFlag: i, children: a } = n, u = i & 32;
  n.ssContent = Wa(
    u ? a.default : a
  ), n.ssFallback = u ? Wa(a.fallback) : St(Dn);
}
function Wa(n) {
  let i;
  if (Me(n)) {
    const a = _i && n._c;
    a && (n._d = !1, Xe()), n = n(), a && (n._d = !0, i = rn, Tc());
  }
  return De(n) && (n = xf(n)), n = kn(n), i && !n.dynamicChildren && (n.dynamicChildren = i.filter((a) => a !== n)), n;
}
function Nf(n, i) {
  i && i.pendingBranch ? De(n) ? i.effects.push(...n) : i.effects.push(n) : $s(n);
}
function vi(n, i) {
  n.activeBranch = i;
  const { vnode: a, parentComponent: u } = n;
  let l = i.el;
  for (; !l && i.component; )
    i = i.component.subTree, l = i.el;
  a.el = l, u && u.subTree === a && (u.vnode.el = l, Pa(u, l));
}
function If(n) {
  const i = n.props && n.props.suspensible;
  return i != null && i !== !1;
}
const bt = Symbol.for("v-fgt"), Zo = Symbol.for("v-txt"), Dn = Symbol.for("v-cmt"), Rs = Symbol.for("v-stc"), lo = [];
let rn = null;
function Xe(n = !1) {
  lo.push(rn = n ? null : []);
}
function Tc() {
  lo.pop(), rn = lo[lo.length - 1] || null;
}
let _i = 1;
function Ga(n, i = !1) {
  _i += n, n < 0 && rn && i && (rn.hasOnce = !0);
}
function Oc(n) {
  return n.dynamicChildren = _i > 0 ? rn || hi : null, Tc(), _i > 0 && rn && rn.push(n), n;
}
function Ze(n, i, a, u, l, h) {
  return Oc(
    _e(
      n,
      i,
      a,
      u,
      l,
      h,
      !0
    )
  );
}
function zs(n, i, a, u, l) {
  return Oc(
    St(
      n,
      i,
      a,
      u,
      l,
      !0
    )
  );
}
function wi(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function br(n, i) {
  return n.type === i.type && n.key === i.key;
}
const Sc = ({ key: n }) => n ?? null, Co = ({
  ref: n,
  ref_key: i,
  ref_for: a
}) => (typeof n == "number" && (n = "" + n), n != null ? Tt(n) || _t(n) || Me(n) ? { i: Pt, r: n, k: i, f: !!a } : n : null);
function _e(n, i = null, a = null, u = 0, l = null, h = n === bt ? 0 : 1, m = !1, O = !1) {
  const C = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && Sc(i),
    ref: i && Co(i),
    scopeId: tc,
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
    shapeFlag: h,
    patchFlag: u,
    dynamicProps: l,
    dynamicChildren: null,
    appContext: null,
    ctx: Pt
  };
  return O ? (Ca(C, a), h & 128 && n.normalize(C)) : a && (C.shapeFlag |= Tt(a) ? 8 : 16), _i > 0 && // avoid a block node from tracking itself
  !m && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (C.patchFlag > 0 || h & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  C.patchFlag !== 32 && rn.push(C), C;
}
const St = Rf;
function Rf(n, i = null, a = null, u = 0, l = null, h = !1) {
  if ((!n || n === Wl) && (n = Dn), wi(n)) {
    const O = xi(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && Ca(O, a), _i > 0 && !h && rn && (O.shapeFlag & 6 ? rn[rn.indexOf(n)] = O : rn.push(O)), O.patchFlag = -2, O;
  }
  if (Wf(n) && (n = n.__vccOpts), i) {
    i = Kf(i);
    let { class: O, style: C } = i;
    O && !Tt(O) && (i.class = ho(O)), dt(C) && (_a(C) && !De(C) && (C = Vt({}, C)), i.style = da(C));
  }
  const m = Tt(n) ? 1 : xc(n) ? 128 : Nl(n) ? 64 : dt(n) ? 4 : Me(n) ? 2 : 0;
  return _e(
    n,
    i,
    a,
    u,
    l,
    m,
    h,
    !0
  );
}
function Kf(n) {
  return n ? _a(n) || dc(n) ? Vt({}, n) : n : null;
}
function xi(n, i, a = !1, u = !1) {
  const { props: l, ref: h, patchFlag: m, children: O, transition: C } = n, L = i ? jf(l || {}, i) : l, B = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: L,
    key: L && Sc(L),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && h ? De(h) ? h.concat(Co(i)) : [h, Co(i)] : Co(i)
    ) : h,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: O,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== bt ? m === -1 ? 16 : m | 16 : m,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: C,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && xi(n.ssContent),
    ssFallback: n.ssFallback && xi(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return C && u && Ta(
    B,
    C.clone(B)
  ), B;
}
function mn(n = " ", i = 0) {
  return St(Zo, null, n, i);
}
function An(n = "", i = !1) {
  return i ? (Xe(), zs(Dn, null, n)) : St(Dn, null, n);
}
function kn(n) {
  return n == null || typeof n == "boolean" ? St(Dn) : De(n) ? St(
    bt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : wi(n) ? gr(n) : St(Zo, null, String(n));
}
function gr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : xi(n);
}
function Ca(n, i) {
  let a = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (De(i))
    a = 16;
  else if (typeof i == "object")
    if (u & 65) {
      const l = i.default;
      l && (l._c && (l._d = !1), Ca(n, l()), l._c && (l._d = !0));
      return;
    } else {
      a = 32;
      const l = i._;
      !l && !dc(i) ? i._ctx = Pt : l === 3 && Pt && (Pt.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else Me(i) ? (i = { default: i, _ctx: Pt }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [mn(i)]) : a = 8);
  n.children = i, n.shapeFlag |= a;
}
function jf(...n) {
  const i = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    for (const l in u)
      if (l === "class")
        i.class !== u.class && (i.class = ho([i.class, u.class]));
      else if (l === "style")
        i.style = da([i.style, u.style]);
      else if ($o(l)) {
        const h = i[l], m = u[l];
        m && h !== m && !(De(h) && h.includes(m)) && (i[l] = h ? [].concat(h, m) : m);
      } else l !== "" && (i[l] = u[l]);
  }
  return i;
}
function Rn(n, i, a, u = null) {
  Bn(n, i, 7, [
    a,
    u
  ]);
}
const Bf = cc();
let Ff = 0;
function Mf(n, i, a) {
  const u = n.type, l = (i ? i.appContext : n.appContext) || Bf, h = {
    uid: Ff++,
    vnode: n,
    type: u,
    parent: i,
    appContext: l,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Du(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(l.provides),
    ids: i ? i.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: pc(u, l),
    emitsOptions: wc(u, l),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ut,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: ut,
    data: ut,
    props: ut,
    attrs: ut,
    slots: ut,
    refs: ut,
    setupState: ut,
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
  return h.ctx = { _: h }, h.root = i ? i.root : h, h.emit = wf.bind(null, h), n.ce && n.ce(h), h;
}
let Nt = null;
const qf = () => Nt || Pt;
let qo, Qs;
{
  const n = Yo(), i = (a, u) => {
    let l;
    return (l = n[a]) || (l = n[a] = []), l.push(u), (h) => {
      l.length > 1 ? l.forEach((m) => m(h)) : l[0](h);
    };
  };
  qo = i(
    "__VUE_INSTANCE_SETTERS__",
    (a) => Nt = a
  ), Qs = i(
    "__VUE_SSR_SETTERS__",
    (a) => bo = a
  );
}
const si = (n) => {
  const i = Nt;
  return qo(n), n.scope.on(), () => {
    n.scope.off(), qo(i);
  };
}, Js = () => {
  Nt && Nt.scope.off(), qo(null);
};
function Ac(n) {
  return n.vnode.shapeFlag & 4;
}
let bo = !1;
function Lf(n, i = !1, a = !1) {
  i && Qs(i);
  const { props: u, children: l } = n.vnode, h = Ac(n);
  sf(n, u, h, i), lf(n, l, a || i);
  const m = h ? Uf(n, i) : void 0;
  return i && Qs(!1), m;
}
function Uf(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Xl);
  const { setup: u } = a;
  if (u) {
    hr();
    const l = n.setupContext = u.length > 1 ? $f(n) : null, h = si(n), m = xo(
      u,
      n,
      0,
      [
        n.props,
        l
      ]
    ), O = la(m);
    if (pr(), h(), (O || n.sp) && !yi(n) && nc(n), O) {
      if (m.then(Js, Js), i)
        return m.then((C) => {
          Zs(n, C);
        }).catch((C) => {
          Eo(C, n, 0);
        });
      n.asyncDep = m;
    } else
      Zs(n, m);
  } else
    kc(n);
}
function Zs(n, i, a) {
  Me(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : dt(i) && (n.setupState = zu(i)), kc(n);
}
function kc(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || jn);
  {
    const l = si(n);
    hr();
    try {
      zl(n);
    } finally {
      pr(), l();
    }
  }
}
const Vf = {
  get(n, i) {
    return Ut(n, "get", ""), n[i];
  }
};
function $f(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, Vf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function es(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(zu(wa(n.exposed)), {
    get(i, a) {
      if (a in i)
        return i[a];
      if (a in uo)
        return uo[a](n);
    },
    has(i, a) {
      return a in i || a in uo;
    }
  })) : n.proxy;
}
function Hf(n, i = !0) {
  return Me(n) ? n.displayName || n.name : n.name || i && n.__name;
}
function Wf(n) {
  return Me(n) && "__vccOpts" in n;
}
const dr = (n, i) => Sl(n, i, bo);
function Ya(n, i, a) {
  const u = arguments.length;
  return u === 2 ? dt(i) && !De(i) ? wi(i) ? St(n, null, [i]) : St(n, i) : St(n, null, i) : (u > 3 ? a = Array.prototype.slice.call(arguments, 2) : u === 3 && wi(a) && (a = [a]), St(n, i, a));
}
const Gf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ea;
const Xa = typeof window < "u" && window.trustedTypes;
if (Xa)
  try {
    ea = /* @__PURE__ */ Xa.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const Pc = ea ? (n) => ea.createHTML(n) : (n) => n, Yf = "http://www.w3.org/2000/svg", Xf = "http://www.w3.org/1998/Math/MathML", cr = typeof document < "u" ? document : null, za = cr && /* @__PURE__ */ cr.createElement("template"), zf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const l = i === "svg" ? cr.createElementNS(Yf, n) : i === "mathml" ? cr.createElementNS(Xf, n) : a ? cr.createElement(n, { is: a }) : cr.createElement(n);
    return n === "select" && u && u.multiple != null && l.setAttribute("multiple", u.multiple), l;
  },
  createText: (n) => cr.createTextNode(n),
  createComment: (n) => cr.createComment(n),
  setText: (n, i) => {
    n.nodeValue = i;
  },
  setElementText: (n, i) => {
    n.textContent = i;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => cr.querySelector(n),
  setScopeId(n, i) {
    n.setAttribute(i, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, i, a, u, l, h) {
    const m = a ? a.previousSibling : i.lastChild;
    if (l && (l === h || l.nextSibling))
      for (; i.insertBefore(l.cloneNode(!0), a), !(l === h || !(l = l.nextSibling)); )
        ;
    else {
      za.innerHTML = Pc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const O = za.content;
      if (u === "svg" || u === "mathml") {
        const C = O.firstChild;
        for (; C.firstChild; )
          O.appendChild(C.firstChild);
        O.removeChild(C);
      }
      i.insertBefore(O, a);
    }
    return [
      // first
      m ? m.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, Qf = Symbol("_vtc");
function Jf(n, i, a) {
  const u = n[Qf];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const Qa = Symbol("_vod"), Zf = Symbol("_vsh"), ed = Symbol(""), td = /(^|;)\s*display\s*:/;
function nd(n, i, a) {
  const u = n.style, l = Tt(a);
  let h = !1;
  if (a && !l) {
    if (i)
      if (Tt(i))
        for (const m of i.split(";")) {
          const O = m.slice(0, m.indexOf(":")).trim();
          a[O] == null && Do(u, O, "");
        }
      else
        for (const m in i)
          a[m] == null && Do(u, m, "");
    for (const m in a)
      m === "display" && (h = !0), Do(u, m, a[m]);
  } else if (l) {
    if (i !== a) {
      const m = u[ed];
      m && (a += ";" + m), u.cssText = a, h = td.test(a);
    }
  } else i && n.removeAttribute("style");
  Qa in n && (n[Qa] = h ? u.display : "", n[Zf] && (u.display = "none"));
}
const Ja = /\s*!important$/;
function Do(n, i, a) {
  if (De(a))
    a.forEach((u) => Do(n, i, u));
  else if (a == null && (a = ""), i.startsWith("--"))
    n.setProperty(i, a);
  else {
    const u = rd(n, i);
    Ja.test(a) ? n.setProperty(
      ai(u),
      a.replace(Ja, ""),
      "important"
    ) : n[u] = a;
  }
}
const Za = ["Webkit", "Moz", "ms"], Ks = {};
function rd(n, i) {
  const a = Ks[i];
  if (a)
    return a;
  let u = vn(i);
  if (u !== "filter" && u in n)
    return Ks[i] = u;
  u = Go(u);
  for (let l = 0; l < Za.length; l++) {
    const h = Za[l] + u;
    if (h in n)
      return Ks[i] = h;
  }
  return i;
}
const eu = "http://www.w3.org/1999/xlink";
function tu(n, i, a, u, l, h = Qc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(eu, i.slice(6, i.length)) : n.setAttributeNS(eu, i, a) : a == null || h && !ku(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    h ? "" : Cn(a) ? String(a) : a
  );
}
function nu(n, i, a, u, l) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? Pc(a) : a);
    return;
  }
  const h = n.tagName;
  if (i === "value" && h !== "PROGRESS" && // custom elements may use _value internally
  !h.includes("-")) {
    const O = h === "OPTION" ? n.getAttribute("value") || "" : n.value, C = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (O !== C || !("_value" in n)) && (n.value = C), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let m = !1;
  if (a === "" || a == null) {
    const O = typeof n[i];
    O === "boolean" ? a = ku(a) : a == null && O === "string" ? (a = "", m = !0) : O === "number" && (a = 0, m = !0);
  }
  try {
    n[i] = a;
  } catch {
  }
  m && n.removeAttribute(l || i);
}
function Da(n, i, a, u) {
  n.addEventListener(i, a, u);
}
function id(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const ru = Symbol("_vei");
function od(n, i, a, u, l = null) {
  const h = n[ru] || (n[ru] = {}), m = h[i];
  if (u && m)
    m.value = u;
  else {
    const [O, C] = sd(i);
    if (u) {
      const L = h[i] = cd(
        u,
        l
      );
      Da(n, O, L, C);
    } else m && (id(n, O, m, C), h[i] = void 0);
  }
}
const iu = /(?:Once|Passive|Capture)$/;
function sd(n) {
  let i;
  if (iu.test(n)) {
    i = {};
    let u;
    for (; u = n.match(iu); )
      n = n.slice(0, n.length - u[0].length), i[u[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : ai(n.slice(2)), i];
}
let js = 0;
const ad = /* @__PURE__ */ Promise.resolve(), ud = () => js || (ad.then(() => js = 0), js = Date.now());
function cd(n, i) {
  const a = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= a.attached)
      return;
    Bn(
      ld(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = ud(), a;
}
function ld(n, i) {
  if (De(i)) {
    const a = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      a.call(n), n._stopped = !0;
    }, i.map(
      (u) => (l) => !l._stopped && u && u(l)
    );
  } else
    return i;
}
const ou = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, fd = (n, i, a, u, l, h) => {
  const m = l === "svg";
  i === "class" ? Jf(n, u, m) : i === "style" ? nd(n, a, u) : $o(i) ? ua(i) || od(n, i, a, u, h) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : dd(n, i, u, m)) ? (nu(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && tu(n, i, u, m, h, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !Tt(u)) ? nu(n, vn(i), u, h, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), tu(n, i, u, m));
};
function dd(n, i, a, u) {
  if (u)
    return !!(i === "innerHTML" || i === "textContent" || i in n && ou(i) && Me(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "form" || i === "list" && n.tagName === "INPUT" || i === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (i === "width" || i === "height") {
    const l = n.tagName;
    if (l === "IMG" || l === "VIDEO" || l === "CANVAS" || l === "SOURCE")
      return !1;
  }
  return ou(i) && Tt(a) ? !1 : i in n;
}
const Lo = (n) => {
  const i = n.props["onUpdate:modelValue"] || !1;
  return De(i) ? (a) => ko(i, a) : i;
}, gi = Symbol("_assign"), su = {
  created(n, { value: i }, a) {
    n.checked = bi(i, a.props.value), n[gi] = Lo(a), Da(n, "change", () => {
      n[gi](_o(n));
    });
  },
  beforeUpdate(n, { value: i, oldValue: a }, u) {
    n[gi] = Lo(u), i !== a && (n.checked = bi(i, u.props.value));
  }
}, ro = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(n, { value: i, modifiers: { number: a } }, u) {
    const l = Ho(i);
    Da(n, "change", () => {
      const h = Array.prototype.filter.call(n.options, (m) => m.selected).map(
        (m) => a ? Au(_o(m)) : _o(m)
      );
      n[gi](
        n.multiple ? l ? new Set(h) : h : h[0]
      ), n._assigning = !0, xa(() => {
        n._assigning = !1;
      });
    }), n[gi] = Lo(u);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(n, { value: i }) {
    au(n, i);
  },
  beforeUpdate(n, i, a) {
    n[gi] = Lo(a);
  },
  updated(n, { value: i }) {
    n._assigning || au(n, i);
  }
};
function au(n, i) {
  const a = n.multiple, u = De(i);
  if (!(a && !u && !Ho(i))) {
    for (let l = 0, h = n.options.length; l < h; l++) {
      const m = n.options[l], O = _o(m);
      if (a)
        if (u) {
          const C = typeof O;
          C === "string" || C === "number" ? m.selected = i.some((L) => String(L) === String(O)) : m.selected = Zc(i, O) > -1;
        } else
          m.selected = i.has(O);
      else if (bi(_o(m), i)) {
        n.selectedIndex !== l && (n.selectedIndex = l);
        return;
      }
    }
    !a && n.selectedIndex !== -1 && (n.selectedIndex = -1);
  }
}
function _o(n) {
  return "_value" in n ? n._value : n.value;
}
const hd = ["ctrl", "shift", "alt", "meta"], pd = {
  stop: (n) => n.stopPropagation(),
  prevent: (n) => n.preventDefault(),
  self: (n) => n.target !== n.currentTarget,
  ctrl: (n) => !n.ctrlKey,
  shift: (n) => !n.shiftKey,
  alt: (n) => !n.altKey,
  meta: (n) => !n.metaKey,
  left: (n) => "button" in n && n.button !== 0,
  middle: (n) => "button" in n && n.button !== 1,
  right: (n) => "button" in n && n.button !== 2,
  exact: (n, i) => hd.some((a) => n[`${a}Key`] && !i.includes(a))
}, fi = (n, i) => {
  const a = n._withMods || (n._withMods = {}), u = i.join(".");
  return a[u] || (a[u] = (l, ...h) => {
    for (let m = 0; m < i.length; m++) {
      const O = pd[i[m]];
      if (O && O(l, i)) return;
    }
    return n(l, ...h);
  });
}, md = /* @__PURE__ */ Vt({ patchProp: fd }, zf);
let uu;
function yd() {
  return uu || (uu = df(md));
}
const vd = (...n) => {
  const i = yd().createApp(...n), { mount: a } = i;
  return i.mount = (u) => {
    const l = bd(u);
    if (!l) return;
    const h = i._component;
    !Me(h) && !h.render && !h.template && (h.template = l.innerHTML), l.nodeType === 1 && (l.textContent = "");
    const m = a(l, !1, gd(l));
    return l instanceof Element && (l.removeAttribute("v-cloak"), l.setAttribute("data-v-app", "")), m;
  }, i;
};
function gd(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function bd(n) {
  return Tt(n) ? document.querySelector(n) : n;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Cc;
const ts = (n) => Cc = n, Dc = (
  /* istanbul ignore next */
  Symbol()
);
function ta(n) {
  return n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]" && typeof n.toJSON != "function";
}
var fo;
(function(n) {
  n.direct = "direct", n.patchObject = "patch object", n.patchFunction = "patch function";
})(fo || (fo = {}));
function _d() {
  const n = Nu(!0), i = n.run(() => Zt({}));
  let a = [], u = [];
  const l = wa({
    install(h) {
      ts(l), l._a = h, h.provide(Dc, l), h.config.globalProperties.$pinia = l, u.forEach((m) => a.push(m)), u = [];
    },
    use(h) {
      return this._a ? a.push(h) : u.push(h), this;
    },
    _p: a,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: n,
    _s: /* @__PURE__ */ new Map(),
    state: i
  });
  return l;
}
const Nc = () => {
};
function cu(n, i, a, u = Nc) {
  n.push(i);
  const l = () => {
    const h = n.indexOf(i);
    h > -1 && (n.splice(h, 1), u());
  };
  return !a && ha() && Iu(l), l;
}
function ci(n, ...i) {
  n.slice().forEach((a) => {
    a(...i);
  });
}
const wd = (n) => n(), lu = Symbol(), Bs = Symbol();
function na(n, i) {
  n instanceof Map && i instanceof Map ? i.forEach((a, u) => n.set(u, a)) : n instanceof Set && i instanceof Set && i.forEach(n.add, n);
  for (const a in i) {
    if (!i.hasOwnProperty(a))
      continue;
    const u = i[a], l = n[a];
    ta(l) && ta(u) && n.hasOwnProperty(a) && !_t(u) && !wr(u) ? n[a] = na(l, u) : n[a] = u;
  }
  return n;
}
const xd = (
  /* istanbul ignore next */
  Symbol()
);
function Ed(n) {
  return !ta(n) || !Object.prototype.hasOwnProperty.call(n, xd);
}
const { assign: yr } = Object;
function Td(n) {
  return !!(_t(n) && n.effect);
}
function Od(n, i, a, u) {
  const { state: l, actions: h, getters: m } = i, O = a.state.value[n];
  let C;
  function L() {
    O || (a.state.value[n] = l ? l() : {});
    const B = xl(a.state.value[n]);
    return yr(B, h, Object.keys(m || {}).reduce((I, X) => (I[X] = wa(dr(() => {
      ts(a);
      const oe = a._s.get(n);
      return m[X].call(oe, oe);
    })), I), {}));
  }
  return C = Ic(n, L, i, a, u, !0), C;
}
function Ic(n, i, a = {}, u, l, h) {
  let m;
  const O = yr({ actions: {} }, a), C = { deep: !0 };
  let L, B, I = [], X = [], oe;
  const te = u.state.value[n];
  !h && !te && (u.state.value[n] = {}), Zt({});
  let de;
  function Re(le) {
    let R;
    L = B = !1, typeof le == "function" ? (le(u.state.value[n]), R = {
      type: fo.patchFunction,
      storeId: n,
      events: oe
    }) : (na(u.state.value[n], le), R = {
      type: fo.patchObject,
      payload: le,
      storeId: n,
      events: oe
    });
    const ye = de = Symbol();
    xa().then(() => {
      de === ye && (L = !0);
    }), B = !0, ci(I, R, u.state.value[n]);
  }
  const Ae = h ? function() {
    const { state: R } = a, ye = R ? R() : {};
    this.$patch((Pe) => {
      yr(Pe, ye);
    });
  } : (
    /* istanbul ignore next */
    Nc
  );
  function Ke() {
    m.stop(), I = [], X = [], u._s.delete(n);
  }
  const Ve = (le, R = "") => {
    if (lu in le)
      return le[Bs] = R, le;
    const ye = function() {
      ts(u);
      const Pe = Array.from(arguments), xe = [], ke = [];
      function it(ve) {
        xe.push(ve);
      }
      function Be(ve) {
        ke.push(ve);
      }
      ci(X, {
        args: Pe,
        name: ye[Bs],
        store: $,
        after: it,
        onError: Be
      });
      let Ne;
      try {
        Ne = le.apply(this && this.$id === n ? this : $, Pe);
      } catch (ve) {
        throw ci(ke, ve), ve;
      }
      return Ne instanceof Promise ? Ne.then((ve) => (ci(xe, ve), ve)).catch((ve) => (ci(ke, ve), Promise.reject(ve))) : (ci(xe, Ne), Ne);
    };
    return ye[lu] = !0, ye[Bs] = R, ye;
  }, z = {
    _p: u,
    // _s: scope,
    $id: n,
    $onAction: cu.bind(null, X),
    $patch: Re,
    $reset: Ae,
    $subscribe(le, R = {}) {
      const ye = cu(I, le, R.detached, () => Pe()), Pe = m.run(() => Po(() => u.state.value[n], (xe) => {
        (R.flush === "sync" ? B : L) && le({
          storeId: n,
          type: fo.direct,
          events: oe
        }, xe);
      }, yr({}, C, R)));
      return ye;
    },
    $dispose: Ke
  }, $ = zo(z);
  u._s.set(n, $);
  const G = (u._a && u._a.runWithContext || wd)(() => u._e.run(() => (m = Nu()).run(() => i({ action: Ve }))));
  for (const le in G) {
    const R = G[le];
    if (_t(R) && !Td(R) || wr(R))
      h || (te && Ed(R) && (_t(R) ? R.value = te[le] : na(R, te[le])), u.state.value[n][le] = R);
    else if (typeof R == "function") {
      const ye = Ve(R, le);
      G[le] = ye, O.actions[le] = R;
    }
  }
  return yr($, G), yr(et($), G), Object.defineProperty($, "$state", {
    get: () => u.state.value[n],
    set: (le) => {
      Re((R) => {
        yr(R, le);
      });
    }
  }), u._p.forEach((le) => {
    yr($, m.run(() => le({
      store: $,
      app: u._a,
      pinia: u,
      options: O
    })));
  }), te && h && a.hydrate && a.hydrate($.$state, te), L = !0, B = !0, $;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Sd(n, i, a) {
  let u;
  const l = typeof i == "function";
  u = l ? a : i;
  function h(m, O) {
    const C = of();
    return m = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    m || (C ? co(Dc, null) : null), m && ts(m), m = Cc, m._s.has(n) || (l ? Ic(n, i, u, m) : Od(n, u, m)), m._s.get(n);
  }
  return h.$id = n, h;
}
var Ad = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function kd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var No = { exports: {} }, Pd = No.exports, fu;
function Cd() {
  return fu || (fu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(Pd, function() {
      var a = function(e, t) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
        })(e, t);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, t, r) {
        for (var o, s = 0, c = t.length; s < c; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ad, m = Object.keys, O = Array.isArray;
      function C(e, t) {
        return typeof t != "object" || m(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var L = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function I(e, t) {
        return B.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(L(e))), (typeof Reflect > "u" ? m : Reflect.ownKeys)(t).forEach(function(r) {
          te(e, r, t[r]);
        });
      }
      var oe = Object.defineProperty;
      function te(e, t, r, o) {
        oe(e, t, C(r && I(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), te(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var Re = Object.getOwnPropertyDescriptor, Ae = [].slice;
      function Ke(e, t, r) {
        return Ae.call(e, t, r);
      }
      function Ve(e, t) {
        return t(e);
      }
      function z(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function $(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function H(e, t) {
        if (typeof t == "string" && I(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = H(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var d = e[t.substr(0, f)];
          return d == null ? void 0 : H(d, t.substr(f + 1));
        }
      }
      function G(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          z(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) G(e, t[o], r[o]);
        } else {
          var c, f, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (f = t.substr(d + 1)) === "" ? r === void 0 ? O(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : G(d = !(d = e[c]) || !I(e, c) ? e[c] = {} : d, f, r)) : r === void 0 ? O(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function le(e) {
        var t, r = {};
        for (t in e) I(e, t) && (r[t] = e[t]);
        return r;
      }
      var R = [].concat;
      function ye(e) {
        return R.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ye([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), Pe = new Set(Ie.map(function(e) {
        return h[e];
      })), xe = null;
      function ke(e) {
        return xe = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = xe.get(r);
          if (o) return o;
          if (O(r)) {
            o = [], xe.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (Pe.has(r.constructor)) o = r;
          else {
            var f, d = L(r);
            for (f in o = d === Object.prototype ? {} : Object.create(d), xe.set(r, o), r) I(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), xe = null, e;
      }
      var it = {}.toString;
      function Be(e) {
        return it.call(e).slice(8, -1);
      }
      var Ne = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ve = typeof Ne == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ne]) && t.apply(e);
      } : function() {
        return null;
      };
      function qe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var ht = {};
      function st(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (O(e)) return e.slice();
          if (this === ht && typeof e == "string") return [e];
          if (s = ve(e)) {
            for (r = []; !(o = s.next()).done; ) r.push(o.value);
            return r;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (r = new Array(t); t--; ) r[t] = e[t];
          return r;
        }
        for (t = arguments.length, r = new Array(t); t--; ) r[t] = arguments[t];
        return r;
      }
      var yt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Se = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], pt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Se), Ct = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Dt(e, t) {
        this.name = e, this.message = t;
      }
      function Nn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, s) {
          return s.indexOf(r) === o;
        }).join(`
`);
      }
      function tn(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = Nn(e, t);
      }
      function wt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = Nn(e, this.failures);
      }
      de(Dt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(tn).from(Dt), de(wt).from(Dt);
      var k = pt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = Dt, K = pt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Ct[t] || r, this.inner = null);
        }
        return de(o).from(_), e[t] = o, e;
      }, {});
      K.Syntax = SyntaxError, K.Type = TypeError, K.Range = RangeError;
      var q = Se.reduce(function(e, t) {
        return e[t + "Error"] = K[t], e;
      }, {}), He = pt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = K[t]), e;
      }, {});
      function A() {
      }
      function j(e) {
        return e;
      }
      function Z(e, t) {
        return e == null || e === j ? t : function(r) {
          return t(e(r));
        };
      }
      function ne(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function se(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? ne(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? ne(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function re(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? ne(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? ne(o, this.onerror) : o);
        };
      }
      function fe(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          C(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ne(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? ne(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : C(o, r);
        };
      }
      function pe(e, t) {
        return e === A ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ae(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, s = arguments.length, c = new Array(s); s--; ) c[s] = arguments[s];
            return r.then(function() {
              return t.apply(o, c);
            });
          }
          return t.apply(this, arguments);
        };
      }
      He.ModifyError = tn, He.DexieError = Dt, He.BulkError = wt;
      var ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Te(e) {
        ie = e;
      }
      var me = {}, Oe = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, L(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, L(t), e];
      }(), Se = Ie[0], pt = Ie[1], Ie = Ie[2], pt = pt && pt.then, $e = Se && Se.constructor, We = !!Ie, ct = function(e, t) {
        nn.push([e, t]), Ot && (queueMicrotask(rs), Ot = !1);
      }, gt = !0, Ot = !0, lt = [], $t = [], In = j, tt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ee = tt, nn = [], Ht = 0, Fn = [];
      function Q(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = ee;
        if (typeof e != "function") {
          if (e !== me) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Tr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && sn();
                c && typeof c.then == "function" ? r(o, function(d, y) {
                  c instanceof Q ? c._then(d, y) : c.then(d, y);
                }) : (o._state = !0, o._value = c, Ti(o)), f && an();
              }
            }, Tr.bind(null, o));
          } catch (c) {
            Tr(o, c);
          }
        }(this, e);
      }
      var Er = { get: function() {
        var e = ee, t = Un;
        function r(o, s) {
          var c = this, f = !e.global && (e !== ee || t !== Un), d = f && !Rt(), y = new Q(function(g, w) {
            Or(c, new Ei(Si(o, e, f, d), Si(s, e, f, d), g, w, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return r.prototype = me, r;
      }, set: function(e) {
        te(this, "then", e && e.prototype === me ? Er : { get: function() {
          return e;
        }, set: Er.set });
      } };
      function Ei(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function Tr(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && sn(), t = In(t), e._state = !1, e._value = t, o = e, lt.some(function(s) {
          return s._value === o._value;
        }) || lt.push(o), Ti(e), r && an());
      }
      function Ti(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) Or(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ht === 0 && (++Ht, ct(function() {
          --Ht == 0 && Sr();
        }, []));
      }
      function Or(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ht, ct(ns, [r, e, t]);
        } else e._listeners.push(t);
      }
      function ns(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = ie && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var f = lt.length; f; ) if (lt[--f]._value === c._value) return lt.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Ht == 0 && Sr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function rs() {
        Wt(tt, function() {
          sn() && an();
        });
      }
      function sn() {
        var e = gt;
        return Ot = gt = !1, e;
      }
      function an() {
        var e, t, r;
        do
          for (; 0 < nn.length; ) for (e = nn, nn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < nn.length);
        Ot = gt = !0;
      }
      function Sr() {
        var e = lt;
        lt = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Fn.slice(0), r = t.length; r; ) t[--r]();
      }
      function Mn(e) {
        return new Q(me, !1, e);
      }
      function je(e, t) {
        var r = ee;
        return function() {
          var o = sn(), s = ee;
          try {
            return Kt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Kt(s, !1), o && an();
          }
        };
      }
      X(Q.prototype, { then: Er, _then: function(e, t) {
        Or(this, new Ei(null, null, e, t, ee));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Mn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Mn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return Q.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return Q.resolve(e()).then(function() {
            return Mn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new Q(function(o, s) {
          var c = setTimeout(function() {
            return s(new K.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && te(Q.prototype, Symbol.toStringTag, "Dexie.Promise"), tt.env = Oi(), X(Q, { all: function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return Q.resolve(s).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof Q ? e : e && typeof e.then == "function" ? new Q(function(t, r) {
          e.then(t, r);
        }) : new Q(me, !0, e);
      }, reject: Mn, race: function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t, r) {
          e.map(function(o) {
            return Q.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return ee;
      }, set: function(e) {
        return ee = e;
      } }, totalEchoes: { get: function() {
        return Un;
      } }, newPSD: It, usePSD: Wt, scheduler: { get: function() {
        return ct;
      }, set: function(e) {
        ct = e;
      } }, rejectionMapper: { get: function() {
        return In;
      }, set: function(e) {
        In = e;
      } }, follow: function(e, t) {
        return new Q(function(r, o) {
          return It(function(s, c) {
            var f = ee;
            f.unhandleds = [], f.onunhandled = c, f.finalize = ne(function() {
              var d, y = this;
              d = function() {
                y.unhandleds.length === 0 ? s() : c(y.unhandleds[0]);
              }, Fn.push(function g() {
                d(), Fn.splice(Fn.indexOf(g), 1);
              }), ++Ht, ct(function() {
                --Ht == 0 && Sr();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), $e && ($e.allSettled && te(Q, "allSettled", function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return Q.resolve(s).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), $e.any && typeof AggregateError < "u" && te(Q, "any", function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, f) {
            return Q.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              s[f] = d, --o || r(new AggregateError(s));
            });
          });
        });
      }), $e.withResolvers && (Q.withResolvers = $e.withResolvers));
      var Ge = { awaits: 0, echoes: 0, id: 0 }, is = 0, qn = [], Ln = 0, Un = 0, os = 0;
      function It(e, t, r, o) {
        var s = ee, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++os, tt.env, c.env = We ? { Promise: Q, PromiseProp: { value: Q, configurable: !0, writable: !0 }, all: Q.all, race: Q.race, allSettled: Q.allSettled, any: Q.any, resolve: Q.resolve, reject: Q.reject } : {}, t && C(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Wt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function un() {
        return Ge.id || (Ge.id = ++is), ++Ge.awaits, Ge.echoes += Oe, Ge.id;
      }
      function Rt() {
        return !!Ge.awaits && (--Ge.awaits == 0 && (Ge.id = 0), Ge.echoes = Ge.awaits * Oe, !0);
      }
      function Vn(e) {
        return Ge.echoes && e && e.constructor === $e ? (un(), e.then(function(t) {
          return Rt(), t;
        }, function(t) {
          return Rt(), Le(t);
        })) : e;
      }
      function ss() {
        var e = qn[qn.length - 1];
        qn.pop(), Kt(e, !1);
      }
      function Kt(e, t) {
        var r, o = ee;
        (t ? !Ge.echoes || Ln++ && e === ee : !Ln || --Ln && e === ee) || queueMicrotask(t ? (function(s) {
          ++Un, Ge.echoes && --Ge.echoes != 0 || (Ge.echoes = Ge.awaits = Ge.id = 0), qn.push(ee), Kt(s, !0);
        }).bind(null, e) : ss), e !== ee && (ee = e, o === tt && (tt.env = Oi()), We && (r = tt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Oi() {
        var e = h.Promise;
        return We ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Wt(e, t, r, o, s) {
        var c = ee;
        try {
          return Kt(e, !0), t(r, o, s);
        } finally {
          Kt(c, !1);
        }
      }
      function Si(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ee;
          r && un(), Kt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Kt(s, !1), o && queueMicrotask(Rt);
          }
        };
      }
      function Ar(e) {
        Promise === $e && Ge.echoes === 0 ? Ln === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + pt).indexOf("[native code]") === -1 && (un = Rt = A);
      var Le = Q.reject, Gt = "￿", At = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ai = "String expected.", cn = [], $n = "__dbnames", kr = "readonly", Pr = "readwrite";
      function Yt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var ki = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Hn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ke(t))[e], t;
        };
      }
      function Pi() {
        throw K.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function be(e, t) {
        try {
          var r = Ci(e), o = Ci(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var f = s.length, d = c.length, y = f < d ? f : d, g = 0; g < y; ++g) if (s[g] !== c[g]) return s[g] < c[g] ? -1 : 1;
                return f === d ? 0 : f < d ? -1 : 1;
              }(Di(e), Di(t));
            case "Array":
              return function(s, c) {
                for (var f = s.length, d = c.length, y = f < d ? f : d, g = 0; g < y; ++g) {
                  var w = be(s[g], c[g]);
                  if (w !== 0) return w;
                }
                return f === d ? 0 : f < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Ci(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Be(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Di(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Wn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var Ni = (Ce.prototype._trans = function(e, t, r) {
        var o = this._tx || ee.trans, s = this.name, c = ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(g, w, p) {
          if (!p.schema[s]) throw new K.NotFound("Table " + s + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = sn();
        try {
          var y = o && o.db._novip === this.db._novip ? o === ee.trans ? o._promise(e, f, r) : It(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ee.transless || ee }) : function g(w, p, T, v) {
            if (w.idbdb && (w._state.openComplete || ee.letThrough || w._vip)) {
              var b = w._createTransaction(p, T, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return g(w, p, T, v);
                })) : Le(E);
              }
              return b._promise(p, function(E, x) {
                return It(function() {
                  return ee.trans = b, v(E, x, b);
                });
              }).then(function(E) {
                if (p === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return p === "readonly" ? E : b._completion.then(function() {
                  return E;
                });
              });
            }
            if (w._state.openComplete) return Le(new K.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return Le(new K.DatabaseClosed());
              w.open().catch(A);
            }
            return w._state.dbReadyPromise.then(function() {
              return g(w, p, T, v);
            });
          }(this.db, e, [this.name], f);
          return c && (y._consoleTask = c, y = y.catch(function(g) {
            return console.trace(g), Le(g);
          })), y;
        } finally {
          d && an();
        }
      }, Ce.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Le(new K.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ce.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (O(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = m(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(g) {
            return 0 <= d.keyPath.indexOf(g);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(d.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, y) {
          return d.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Gt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(y) {
            return e[y];
          }));
        }
        !r && ie && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(d, y) {
          return be(d, y) === 0;
        }
        var f = t.reduce(function(p, y) {
          var g = p[0], w = p[1], p = o[y], T = e[y];
          return [g || p, g || !p ? Yt(w, p && p.multi ? function(v) {
            return v = H(v, y), O(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, H(v, y));
          }) : w];
        }, [null, null]), c = f[0], f = f[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(f) : r ? this.filter(f) : this.where(t).equals("");
      }, Ce.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ce.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ce.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ce.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ce.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ce.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ce.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ce.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, O(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ce.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ce.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Pi && (function(y, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function w() {
            this.constructor = y;
          }
          a(y, g), y.prototype = g === null ? Object.create(g) : (w.prototype = g.prototype, new w());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = L(f)) Object.getOwnPropertyNames(f).forEach(function(y) {
          return c.add(y);
        });
        function d(y) {
          if (!y) return y;
          var g, w = Object.create(e.prototype);
          for (g in y) if (!c.has(g)) try {
            w[g] = y[g];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Ce.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          C(this, e);
        });
      }, Ce.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(d) {
          return d.numFailures ? Q.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            G(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ce.prototype.update = function(e, t) {
        return typeof e != "object" || O(e) ? this.where(":id").equals(e).modify(t) : (e = H(e, this.schema.primKey.keyPath), e === void 0 ? Le(new K.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ce.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? Q.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            G(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ce.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Wn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? Q.reject(o.failures[0]) : void 0;
          });
        });
      }, Ce.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: ki }).then(function(r) {
            return Wn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? Q.reject(t.failures[0]) : void 0;
        });
      }, Ce.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, Ce.prototype.bulkAdd = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(y, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(y, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(f) {
          return f.key;
        }), s = e.map(function(f) {
          return f.changes;
        }), c = [];
        return this._trans("readwrite", function(f) {
          return r.getMany({ trans: f, keys: o, cache: "clone" }).then(function(d) {
            var y = [], g = [];
            e.forEach(function(p, T) {
              var v = p.key, b = p.changes, E = d[T];
              if (E) {
                for (var x = 0, S = Object.keys(b); x < S.length; x++) {
                  var P = S[x], D = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (be(D, v) !== 0) throw new K.Constraint("Cannot update primary key in bulkUpdate()");
                  } else G(E, P, D);
                }
                c.push(T), y.push(v), g.push(E);
              }
            });
            var w = y.length;
            return r.mutate({ trans: f, type: "put", keys: y, values: g, updates: { keys: o, changeSpecs: s } }).then(function(p) {
              var T = p.numFailures, v = p.failures;
              if (T === 0) return w;
              for (var b = 0, E = Object.keys(v); b < E.length; b++) {
                var x, S = E[b], P = c[Number(S)];
                P != null && (x = v[S], delete v[S], v[P] = x);
              }
              throw new wt("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(w, " operations failed"), v);
            });
          });
        });
      }, Ce.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Wn(t, e, s);
          });
        }).then(function(f) {
          var s = f.numFailures, c = f.lastResult, f = f.failures;
          if (s === 0) return c;
          throw new wt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), f);
        });
      }, Ce);
      function Ce() {
      }
      function gn(e) {
        function t(f, d) {
          if (d) {
            for (var y = arguments.length, g = new Array(y - 1); --y; ) g[y - 1] = arguments[y];
            return r[f].subscribe.apply(null, g), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(f, d, y) {
          if (typeof f != "object") {
            var g;
            d = d || pe;
            var w = { subscribers: [], fire: y = y || A, subscribe: function(p) {
              w.subscribers.indexOf(p) === -1 && (w.subscribers.push(p), w.fire = d(w.fire, p));
            }, unsubscribe: function(p) {
              w.subscribers = w.subscribers.filter(function(T) {
                return T !== p;
              }), w.fire = w.subscribers.reduce(d, y);
            } };
            return r[f] = t[f] = w;
          }
          m(g = f).forEach(function(p) {
            var T = g[p];
            if (O(T)) c(p, g[p][0], g[p][1]);
            else {
              if (T !== "asap") throw new K.InvalidArgument("Invalid event config");
              var v = c(p, j, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                v.subscribers.forEach(function(x) {
                  $(function() {
                    x.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function bn(e, t) {
        return de(t).from({ prototype: e }), t;
      }
      function ln(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Cr(e, t) {
        e.filter = Yt(e.filter, t);
      }
      function Dr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Yt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Gn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new K.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function Ii(e, t, r) {
        var o = Gn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Yn(e, t, r, o) {
        var s = e.replayFilter ? Yt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(d, y, g) {
            var w, p;
            s && !s(y, g, function(T) {
              return y.stop(T);
            }, function(T) {
              return y.fail(T);
            }) || ((p = "" + (w = y.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(w)), I(c, p) || (c[p] = !0, t(d, y, g)));
          };
          return Promise.all([e.or._iterate(f, r), Ri(Ii(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Ri(Ii(e, o, r), Yt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ri(e, t, r, o) {
        var s = je(o ? function(c, f, d) {
          return r(o(c), f, d);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var f = function() {
              return c.continue();
            };
            t && !t(c, function(d) {
              return f = d;
            }, function(d) {
              c.stop(d), f = A;
            }, function(d) {
              c.fail(d), f = A;
            }) || s(c.value, c, function(d) {
              return f = d;
            }), f();
          });
        });
      }
      var _n = (Ki.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (O(r)) return l(l([], O(e) ? e : [], !0), r).sort();
          if (typeof r == "number") return (Number(e) || 0) + r;
          if (typeof r == "bigint") try {
            return BigInt(e) + r;
          } catch {
            return BigInt(0) + r;
          }
          throw new TypeError("Invalid term ".concat(r));
        }
        if (t.remove !== void 0) {
          var o = t.remove;
          if (O(o)) return O(e) ? e.filter(function(s) {
            return !o.includes(s);
          }).sort() : [];
          if (typeof o == "number") return Number(e) - o;
          if (typeof o == "bigint") try {
            return BigInt(e) - o;
          } catch {
            return BigInt(0) - o;
          }
          throw new TypeError("Invalid subtrahend ".concat(o));
        }
        return r = (r = t.replacePrefix) === null || r === void 0 ? void 0 : r[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
      }, Ki);
      function Ki(e) {
        this["@@propmod"] = e;
      }
      var as = (Ee.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Le.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Le.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Yt(t.algorithm, e);
      }, Ee.prototype._iterate = function(e, t) {
        return Yn(this._ctx, e, t, this._ctx.table.core);
      }, Ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && C(r, e), t._ctx = r, t;
      }, Ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Yn(t, e, r, t.table.core);
        });
      }, Ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (ln(o, !0)) return s.count({ trans: r, query: { index: Gn(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Yn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, Ee.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(y, g) {
          return g ? c(y[r[g]], g - 1) : y[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function d(y, g) {
          return be(c(y, s), c(g, s)) * f;
        }
        return this.toArray(function(y) {
          return y.sort(d);
        }).then(t);
      }, Ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && ln(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = Gn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var f = [];
          return Yn(o, function(d) {
            return f.push(d);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, Ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, ln(t) ? Dr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Dr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Dr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, Ee.prototype.until = function(e, t) {
        return Cr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, Ee.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, Ee.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ee.prototype.filter = function(e) {
        var t;
        return Cr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Yt(t.isMatch, e), this;
      }, Ee.prototype.and = function(e) {
        return this.filter(e);
      }, Ee.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ee.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ee.prototype.desc = function() {
        return this.reverse();
      }, Ee.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, Ee.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ee.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, Ee.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Ee.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && ln(t, !0) && 0 < t.limit) return this._read(function(o) {
          var s = Gn(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, Ee.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ee.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, Ee.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ee.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Cr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = I(t, o);
          return t[o] = !0, !s;
        }), this;
      }, Ee.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = m(e), c = s.length, function(S) {
            for (var P = !1, D = 0; D < c; ++D) {
              var N = s[D], F = e[N], V = H(S, N);
              F instanceof _n ? (G(S, N, F.execute(V)), P = !0) : V !== F && (G(S, N, F), P = !0);
            }
            return P;
          });
          var d = r.table.core, p = d.schema.primaryKey, y = p.outbound, g = p.extractKey, w = 200, p = t.db._options.modifyChunkSize;
          p && (w = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function T(S, N) {
            var D = N.failures, N = N.numFailures;
            b += S - N;
            for (var F = 0, V = m(D); F < V.length; F++) {
              var M = V[F];
              v.push(D[M]);
            }
          }
          var v = [], b = 0, E = [], x = e === ji;
          return t.clone().primaryKeys().then(function(S) {
            function P(N) {
              var F = Math.min(w, S.length - N), V = S.slice(N, N + F);
              return (x ? Promise.resolve([]) : d.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(M) {
                var U = [], Y = [], W = y ? [] : null, J = x ? V : [];
                if (!x) for (var he = 0; he < F; ++he) {
                  var we = M[he], ce = { value: ke(we), primKey: S[N + he] };
                  f.call(ce, ce.value, ce) !== !1 && (ce.value == null ? J.push(S[N + he]) : y || be(g(we), g(ce.value)) === 0 ? (Y.push(ce.value), y && W.push(S[N + he])) : (J.push(S[N + he]), U.push(ce.value)));
                }
                return Promise.resolve(0 < U.length && d.mutate({ trans: o, type: "add", values: U }).then(function(Fe) {
                  for (var ue in Fe.failures) J.splice(parseInt(ue), 1);
                  T(U.length, Fe);
                })).then(function() {
                  return (0 < Y.length || D && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: W, values: Y, criteria: D, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < N }).then(function(Fe) {
                    return T(Y.length, Fe);
                  });
                }).then(function() {
                  return (0 < J.length || D && x) && d.mutate({ trans: o, type: "delete", keys: J, criteria: D, isAdditionalChunk: 0 < N }).then(function(Fe) {
                    return Wn(r.table, J, Fe);
                  }).then(function(Fe) {
                    return T(J.length, Fe);
                  });
                }).then(function() {
                  return S.length > N + F && P(N + w);
                });
              });
            }
            var D = ln(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < v.length) throw new tn("Error modifying one or more objects", v, b, E);
              return S.length;
            });
          });
        });
      }, Ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ln(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(ji) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(y) {
              var d = y.failures, y = y.numFailures;
              if (y) throw new tn("Could not delete some values", Object.keys(d).map(function(g) {
                return d[g];
              }), c - y);
              return c - y;
            });
          });
        });
      }, Ee);
      function Ee() {
      }
      var ji = function(e, t) {
        return t.value = null;
      };
      function us(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function cs(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function at(e, t, r) {
        return e = e instanceof Fi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function fn(e) {
        return new e.Collection(e, function() {
          return Bi("");
        }).limit(0);
      }
      function Xn(e, t, r, o) {
        var s, c, f, d, y, g, w, p = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return at(e, Ai);
        function T(b) {
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, f = b === "next" ? us : cs;
          var E = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, S) {
            return f(x.lower, S.lower);
          });
          d = E.map(function(x) {
            return x.upper;
          }), y = E.map(function(x) {
            return x.lower;
          }), w = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return jt(d[0], y[p - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var v = 0;
        return e._addAlgorithm(function(b, E, x) {
          var S = b.key;
          if (typeof S != "string") return !1;
          var P = c(S);
          if (t(P, y, v)) return !0;
          for (var D = null, N = v; N < p; ++N) {
            var F = function(V, M, U, Y, W, J) {
              for (var he = Math.min(V.length, Y.length), we = -1, ce = 0; ce < he; ++ce) {
                var Fe = M[ce];
                if (Fe !== Y[ce]) return W(V[ce], U[ce]) < 0 ? V.substr(0, ce) + U[ce] + U.substr(ce + 1) : W(V[ce], Y[ce]) < 0 ? V.substr(0, ce) + Y[ce] + U.substr(ce + 1) : 0 <= we ? V.substr(0, we) + M[we] + U.substr(we + 1) : null;
                W(V[ce], Fe) < 0 && (we = ce);
              }
              return he < Y.length && J === "next" ? V + U.substr(V.length) : he < V.length && J === "prev" ? V.substr(0, U.length) : we < 0 ? null : V.substr(0, we) + Y[we] + U.substr(we + 1);
            }(S, P, d[N], y[N], f, g);
            F === null && D === null ? v = N + 1 : (D === null || 0 < f(D, F)) && (D = F);
          }
          return E(D !== null ? function() {
            b.continue(D + w);
          } : x), !1;
        }), e;
      }
      function jt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Bi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Fi = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? fn(this) : new this.Collection(this, function() {
            return jt(e, t, !r, !o);
          });
        } catch {
          return at(this, At);
        }
      }, Ye.prototype.equals = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return Bi(e);
        });
      }, Ye.prototype.above = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(e, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(e, void 0, !1);
        });
      }, Ye.prototype.below = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(void 0, e, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(void 0, e);
        });
      }, Ye.prototype.startsWith = function(e) {
        return typeof e != "string" ? at(this, Ai) : this.between(e, e + Gt, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Xn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ye.prototype.equalsIgnoreCase = function(e) {
        return Xn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var e = st.apply(ht, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = st.apply(ht, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ye.prototype.anyOf = function() {
        var e = this, t = st.apply(ht, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return at(this, At);
        }
        if (t.length === 0) return fn(this);
        var o = new this.Collection(this, function() {
          return jt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return o._addAlgorithm(function(c, f, d) {
          for (var y = c.key; 0 < r(y, t[s]); ) if (++s === t.length) return f(d), !1;
          return r(y, t[s]) === 0 || (f(function() {
            c.continue(t[s]);
          }), !1);
        }), o;
      }, Ye.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var e = st.apply(ht, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return at(this, At);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(S, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, d = this._max;
        if (S.length === 0) return fn(this);
        if (!S.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return at(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", K.InvalidArgument);
        var y = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, w, p = s;
        function T(P, D) {
          return p(P[0], D[0]);
        }
        try {
          (w = S.reduce(function(P, D) {
            for (var N = 0, F = P.length; N < F; ++N) {
              var V = P[N];
              if (o(D[0], V[1]) < 0 && 0 < o(D[1], V[0])) {
                V[0] = f(V[0], D[0]), V[1] = d(V[1], D[1]);
                break;
              }
            }
            return N === F && P.push(D), P;
          }, [])).sort(T);
        } catch {
          return at(this, At);
        }
        var v = 0, b = g ? function(P) {
          return 0 < s(P, w[v][1]);
        } : function(P) {
          return 0 <= s(P, w[v][1]);
        }, E = y ? function(P) {
          return 0 < c(P, w[v][0]);
        } : function(P) {
          return 0 <= c(P, w[v][0]);
        }, x = b, S = new this.Collection(this, function() {
          return jt(w[0][0], w[w.length - 1][1], !y, !g);
        });
        return S._ondirectionchange = function(P) {
          p = P === "next" ? (x = b, s) : (x = E, c), w.sort(T);
        }, S._addAlgorithm(function(P, D, N) {
          for (var F, V = P.key; x(V); ) if (++v === w.length) return D(N), !1;
          return !b(F = V) && !E(F) || (r._cmp(V, w[v][1]) === 0 || r._cmp(V, w[v][0]) === 0 || D(function() {
            p === s ? P.continue(w[v][0]) : P.continue(w[v][1]);
          }), !1);
        }), S;
      }, Ye.prototype.startsWithAnyOf = function() {
        var e = st.apply(ht, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? fn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : at(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function xt(e) {
        return je(function(t) {
          return wn(t), e(t.target.error), !1;
        });
      }
      function wn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var xn = "storagemutated", Nr = "x-storagemutated-1", Bt = gn(null, xn), ls = (Et.prototype._lock = function() {
        return z(!ee.global), ++this._reculock, this._reculock !== 1 || ee.global || (ee.lockOwnerFor = this), this;
      }, Et.prototype._unlock = function() {
        if (z(!ee.global), --this._reculock == 0) for (ee.global || (ee.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Wt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Et.prototype._locked = function() {
        return this._reculock && ee.lockOwnerFor !== this;
      }, Et.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (z(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new K.DatabaseClosed(o);
          case "MissingAPIError":
            throw new K.MissingAPI(o.message, o);
          default:
            throw new K.OpenFailed(o);
        }
        if (!this.active) throw new K.TransactionInactive();
        return z(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(s) {
          wn(s), t._reject(e.error);
        }), e.onabort = je(function(s) {
          wn(s), t.active && t._reject(new K.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = je(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Bt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Et.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Le(new K.ReadOnly("Transaction is readonly"));
        if (!this.active) return Le(new K.TransactionInactive());
        if (this._locked()) return new Q(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, ee]);
        });
        if (r) return It(function() {
          var c = new Q(function(f, d) {
            o._lock();
            var y = t(f, d, o);
            y && y.then && y.then(f, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new Q(function(c, f) {
          var d = t(c, f, o);
          d && d.then && d.then(c, f);
        });
        return s._lib = !0, s;
      }, Et.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Et.prototype.waitFor = function(e) {
        var t, r = this._root(), o = Q.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new Q(function(c, f) {
          o.then(function(d) {
            return r._waitingQueue.push(je(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(je(f.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, Et.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new K.Abort()));
      }, Et.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (I(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new K.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, Et);
      function Et() {
      }
      function Ir(e, t, r, o, s, c, f, d) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + Mi(t), type: d };
      }
      function Mi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Rr(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, f) {
          return f = o(c, f), f && (s[f[0]] = f[1]), s;
        }, {})) };
        var o;
      }
      var En = function(e) {
        try {
          return e.only([[]]), En = function() {
            return [[]];
          }, [[]];
        } catch {
          return En = function() {
            return Gt;
          }, Gt;
        }
      };
      function Kr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return H(r, t);
        } : function(r) {
          return H(r, e);
        };
        var t;
      }
      function qi(e) {
        return [].slice.call(e);
      }
      var fs = 0;
      function Tn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ds(e, t, y) {
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = x.lower, b = x.upper, E = x.lowerOpen, x = x.upperOpen;
          return v === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(v, !!E) : t.bound(v, b, !!E, !!x);
        }
        function s(T) {
          var v, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var x = E.trans, S = E.type, P = E.keys, D = E.values, N = E.range;
            return new Promise(function(F, V) {
              F = je(F);
              var M = x.objectStore(b), U = M.keyPath == null, Y = S === "put" || S === "add";
              if (!Y && S !== "delete" && S !== "deleteRange") throw new Error("Invalid operation type: " + S);
              var W, J = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (J === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(nt) {
                ++Fe, wn(nt);
              }
              var we = [], ce = [], Fe = 0;
              if (S === "deleteRange") {
                if (N.type === 4) return F({ numFailures: Fe, failures: ce, results: [], lastResult: void 0 });
                N.type === 3 ? we.push(W = M.clear()) : we.push(W = M.delete(o(N)));
              } else {
                var U = Y ? U ? [D, P] : [D, null] : [P, null], ue = U[0], Qe = U[1];
                if (Y) for (var Je = 0; Je < J; ++Je) we.push(W = Qe && Qe[Je] !== void 0 ? M[S](ue[Je], Qe[Je]) : M[S](ue[Je])), W.onerror = he;
                else for (Je = 0; Je < J; ++Je) we.push(W = M[S](ue[Je])), W.onerror = he;
              }
              function ar(nt) {
                nt = nt.target.result, we.forEach(function(Qt, Zr) {
                  return Qt.error != null && (ce[Zr] = Qt.error);
                }), F({ numFailures: Fe, failures: ce, results: S === "delete" ? P : we.map(function(Qt) {
                  return Qt.result;
                }), lastResult: nt });
              }
              W.onerror = function(nt) {
                he(nt), ar(nt);
              }, W.onsuccess = ar;
            });
          }, getMany: function(E) {
            var x = E.trans, S = E.keys;
            return new Promise(function(P, D) {
              P = je(P);
              for (var N, F = x.objectStore(b), V = S.length, M = new Array(V), U = 0, Y = 0, W = function(we) {
                we = we.target, M[we._pos] = we.result, ++Y === U && P(M);
              }, J = xt(D), he = 0; he < V; ++he) S[he] != null && ((N = F.get(S[he]))._pos = he, N.onsuccess = W, N.onerror = J, ++U);
              U === 0 && P(M);
            });
          }, get: function(E) {
            var x = E.trans, S = E.key;
            return new Promise(function(P, D) {
              P = je(P);
              var N = x.objectStore(b).get(S);
              N.onsuccess = function(F) {
                return P(F.target.result);
              }, N.onerror = xt(D);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, S) {
              x = je(x);
              var P, D, N, U = E.trans, F = E.values, V = E.limit, W = E.query, M = V === 1 / 0 ? void 0 : V, Y = W.index, W = W.range, U = U.objectStore(b), Y = Y.isPrimaryKey ? U : U.index(Y.name), W = o(W);
              if (V === 0) return x({ result: [] });
              v ? ((M = F ? Y.getAll(W, M) : Y.getAllKeys(W, M)).onsuccess = function(J) {
                return x({ result: J.target.result });
              }, M.onerror = xt(S)) : (P = 0, D = !F && "openKeyCursor" in Y ? Y.openKeyCursor(W) : Y.openCursor(W), N = [], D.onsuccess = function(J) {
                var he = D.result;
                return he ? (N.push(F ? he.value : he.primaryKey), ++P === V ? x({ result: N }) : void he.continue()) : x({ result: N });
              }, D.onerror = xt(S));
            });
          }), openCursor: function(E) {
            var x = E.trans, S = E.values, P = E.query, D = E.reverse, N = E.unique;
            return new Promise(function(F, V) {
              F = je(F);
              var Y = P.index, M = P.range, U = x.objectStore(b), U = Y.isPrimaryKey ? U : U.index(Y.name), Y = D ? N ? "prevunique" : "prev" : N ? "nextunique" : "next", W = !S && "openKeyCursor" in U ? U.openKeyCursor(o(M), Y) : U.openCursor(o(M), Y);
              W.onerror = xt(V), W.onsuccess = je(function(J) {
                var he, we, ce, Fe, ue = W.result;
                ue ? (ue.___id = ++fs, ue.done = !1, he = ue.continue.bind(ue), we = (we = ue.continuePrimaryKey) && we.bind(ue), ce = ue.advance.bind(ue), Fe = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = x, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = je(V), ue.next = function() {
                  var Qe = this, Je = 1;
                  return this.start(function() {
                    return Je-- ? Qe.continue() : Qe.stop();
                  }).then(function() {
                    return Qe;
                  });
                }, ue.start = function(Qe) {
                  function Je() {
                    if (W.result) try {
                      Qe();
                    } catch (nt) {
                      ue.fail(nt);
                    }
                    else ue.done = !0, ue.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ue.stop();
                  }
                  var ar = new Promise(function(nt, Qt) {
                    nt = je(nt), W.onerror = xt(Qt), ue.fail = Qt, ue.stop = function(Zr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Fe, nt(Zr);
                    };
                  });
                  return W.onsuccess = je(function(nt) {
                    W.onsuccess = Je, Je();
                  }), ue.continue = he, ue.continuePrimaryKey = we, ue.advance = ce, Je(), ar;
                }, F(ue)) : F(null);
              }, V);
            });
          }, count: function(E) {
            var x = E.query, S = E.trans, P = x.index, D = x.range;
            return new Promise(function(N, F) {
              var V = S.objectStore(b), M = P.isPrimaryKey ? V : V.index(P.name), V = o(D), M = V ? M.count(V) : M.count();
              M.onsuccess = je(function(U) {
                return N(U.target.result);
              }), M.onerror = xt(F);
            });
          } };
        }
        var c, f, d, w = (f = y, d = qi((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(T) {
          return f.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = O(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Kr(v) }, indexes: qi(T.indexNames).map(function(S) {
            return T.index(S);
          }).map(function(N) {
            var P = N.name, D = N.unique, F = N.multiEntry, N = N.keyPath, F = { name: P, compound: O(N), keyPath: N, unique: D, multiEntry: F, extractKey: Kr(N) };
            return E[Tn(N)] = F;
          }), getIndexByKeyPath: function(S) {
            return E[Tn(S)];
          } };
          return E[":id"] = x.primaryKey, v != null && (E[Tn(v)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < d.length && "getAll" in f.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = w.schema, g = w.hasGetAll, w = y.tables.map(s), p = {};
        return w.forEach(function(T) {
          return p[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!p[T]) throw new Error("Table '".concat(T, "' not found"));
          return p[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: En(t), schema: y };
      }
      function hs(e, t, r, o) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = ds(t, s, o), e.dbcore.reduce(function(c, f) {
          return f = f.create, u(u({}, c), f(c));
        }, o)) };
      }
      function zn(e, o) {
        var r = o.db, o = hs(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(f) {
            return f.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Qn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(f) {
            var d = function y(g, w) {
              return Re(g, w) || (g = L(g)) && y(g, w);
            }(f, s);
            (!d || "value" in d && d.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? te(f, s, { get: function() {
              return this.table(s);
            }, set: function(y) {
              oe(this, s, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function jr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function ps(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ms(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Rr("$meta", Ui("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), d = ee.transless || ee;
        It(function() {
          return ee.trans = c, ee.transless = d, t !== 0 ? (zn(e, r), g = t, ((y = c).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(w) {
            return w ?? g;
          }) : Q.resolve(g)).then(function(w) {
            return T = w, v = c, b = r, E = [], w = (p = e)._versions, x = p._dbSchema = Zn(0, p.idbdb, b), (w = w.filter(function(S) {
              return S._cfg.version >= T;
            })).length !== 0 ? (w.forEach(function(S) {
              E.push(function() {
                var P = x, D = S._cfg.dbschema;
                er(p, P, b), er(p, D, b), x = p._dbSchema = D;
                var N = Br(P, D);
                N.add.forEach(function(Y) {
                  Fr(b, Y[0], Y[1].primKey, Y[1].indexes);
                }), N.change.forEach(function(Y) {
                  if (Y.recreate) throw new K.Upgrade("Not yet support for changing primary key");
                  var W = b.objectStore(Y.name);
                  Y.add.forEach(function(J) {
                    return Jn(W, J);
                  }), Y.change.forEach(function(J) {
                    W.deleteIndex(J.name), Jn(W, J);
                  }), Y.del.forEach(function(J) {
                    return W.deleteIndex(J);
                  });
                });
                var F = S._cfg.contentUpgrade;
                if (F && S._cfg.version > T) {
                  zn(p, b), v._memoizedTables = {};
                  var V = le(D);
                  N.del.forEach(function(Y) {
                    V[Y] = P[Y];
                  }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], m(V), V), v.schema = V;
                  var M, U = yt(F);
                  return U && un(), N = Q.follow(function() {
                    var Y;
                    (M = F(v)) && U && (Y = Rt.bind(null, null), M.then(Y, Y));
                  }), M && typeof M.then == "function" ? Q.resolve(M) : N.then(function() {
                    return M;
                  });
                }
              }), E.push(function(P) {
                var D, N, F = S._cfg.dbschema;
                D = F, N = P, [].slice.call(N.db.objectStoreNames).forEach(function(V) {
                  return D[V] == null && N.db.deleteObjectStore(V);
                }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), v.schema = p._dbSchema;
              }), E.push(function(P) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === S._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(S._cfg.version, "version"));
              });
            }), function S() {
              return E.length ? Q.resolve(E.shift()(v.idbtrans)).then(S) : Q.resolve();
            }().then(function() {
              Li(x, b);
            })) : Q.resolve();
            var p, T, v, b, E, x;
          }).catch(f)) : (m(s).forEach(function(w) {
            Fr(r, w, s[w].primKey, s[w].indexes);
          }), zn(e, r), void Q.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var y, g;
        });
      }
      function ys(e, t) {
        Li(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Zn(0, e.idbdb, t);
        er(e, e._dbSchema, t);
        for (var o = 0, s = Br(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(f.name);
            f.add.forEach(function(y) {
              ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(y.src)), Jn(d, y);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Br(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var s = e[r], c = t[r];
          if (s) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var d = s.idxByName, y = c.idxByName, g = void 0;
              for (g in d) y[g] || f.del.push(g);
              for (g in y) {
                var w = d[g], p = y[g];
                w ? w.src !== p.src && f.change.push(p) : f.add.push(p);
              }
              (0 < f.del.length || 0 < f.add.length || 0 < f.change.length) && o.change.push(f);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Fr(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Jn(s, c);
        }), s;
      }
      function Li(e, t) {
        m(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ie && console.debug("Dexie: Creating missing table", r), Fr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Jn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Zn(e, t, r) {
        var o = {};
        return Ke(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), f = Ir(Mi(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), d = [], y = 0; y < c.indexNames.length; ++y) {
            var w = c.index(c.indexNames[y]), g = w.keyPath, w = Ir(w.name, g, !!w.unique, !!w.multiEntry, !1, g && typeof g != "string", !1);
            d.push(w);
          }
          o[s] = Rr(s, f, d);
        }), o;
      }
      function er(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var d = 0; d < f.indexNames.length; ++d) {
            var y = f.indexNames[d], g = f.index(y).keyPath, w = typeof g == "string" ? g : "[" + Ke(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[w]) && (g.name = y, delete t[c].idxByName[w], t[c].idxByName[y] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Ui(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Ir(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), O(c), r === 0, o);
        });
      }
      var vs = (dn.prototype._createTableSchema = Rr, dn.prototype._parseIndexSyntax = Ui, dn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        m(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new K.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new K.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new K.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new K.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, dn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? C(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          C(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, jr(t, [t._allTables, t, t.Transaction.prototype]), Qn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], m(s), s), t._storeNames = m(s), this;
      }, dn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ae(this._cfg.contentUpgrade || A, e), this;
      }, dn);
      function dn() {
      }
      function Mr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new kt($n, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function qr(e) {
        return e && typeof e.databases == "function";
      }
      function Lr(e) {
        return It(function() {
          return ee.letThrough = !0, e();
        });
      }
      function Ur(e) {
        return !("from" in e);
      }
      var ze = function(e, t) {
        if (!this) {
          var r = new ze();
          return e && "d" in e && C(r, e), r;
        }
        C(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function On(e, t, r) {
        var o = be(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Ur(e)) return C(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (be(r, e.from) < 0) return s ? On(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, $i(e);
          if (0 < be(t, e.to)) return o ? On(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, $i(e);
          be(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < be(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Sn(e, s), o && r && Sn(e, o);
        }
      }
      function Sn(e, t) {
        Ur(t) || function r(o, y) {
          var c = y.from, f = y.to, d = y.l, y = y.r;
          On(o, c, f), d && r(o, d), y && r(o, y);
        }(e, t);
      }
      function Vi(e, t) {
        var r = tr(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = tr(e), f = c.next(s.from), d = f.value; !o.done && !f.done; ) {
          if (be(d.from, s.to) <= 0 && 0 <= be(d.to, s.from)) return !0;
          be(s.from, d.from) < 0 ? s = (o = r.next(d.from)).value : d = (f = c.next(s.from)).value;
        }
        return !1;
      }
      function tr(e) {
        var t = Ur(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && be(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || be(r, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function $i(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Hi(r)), e.d = Hi(e);
      }
      function Hi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function nr(e, t) {
        return m(t).forEach(function(r) {
          e[r] ? Sn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, d = {};
            for (c in s) I(s, c) && (f = s[c], d[c] = !f || typeof f != "object" || Pe.has(f.constructor) ? f : o(f));
            return d;
          }(t[r]);
        }), e;
      }
      function Vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Vi(t[r], e[r]);
        });
      }
      X(ze.prototype, ((pt = { add: function(e) {
        return Sn(this, e), this;
      }, addKey: function(e) {
        return On(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return On(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = tr(this).next(e).value;
        return t && be(t.from, e) <= 0 && 0 <= be(t.to, e);
      } })[Ne] = function() {
        return tr(this);
      }, pt));
      var Xt = {}, $r = {}, Hr = !1;
      function rr(e) {
        nr($r, e), Hr || (Hr = !0, setTimeout(function() {
          Hr = !1, Wr($r, !($r = {}));
        }, 0));
      }
      function Wr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Xt); o < s.length; o++) Wi(f = s[o], e, r, t);
        else for (var c in e) {
          var f, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (f = Xt["idb://".concat(c, "/").concat(d)]) && Wi(f, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Wi(e, t, r, o) {
        for (var s = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var d = f[c], y = d[0], g = [], w = 0, p = d[1]; w < p.length; w++) {
            var T = p[w];
            Vr(t, T.obsSet) ? T.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && g.push(T);
          }
          o && s.push([y, g]);
        }
        if (o) for (var v = 0, b = s; v < b.length; v++) {
          var E = b[v], y = E[0], g = E[1];
          e.queries.query[y] = g;
        }
      }
      function gs(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Le(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new K.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new Q(function(T, v) {
            if (f(), !r) throw new K.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new K.MissingAPI();
            E.onerror = xt(v), E.onblocked = je(e._fireOnBlocked), E.onupgradeneeded = je(function(x) {
              var S;
              w = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = wn, w.abort(), E.result.close(), (S = r.deleteDatabase(b)).onsuccess = S.onerror = je(function() {
                v(new K.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = xt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, p = x < 1, e.idbdb = E.result, c && ys(e, w), ms(e, x / 10, w, v));
            }, v), E.onsuccess = je(function() {
              w = null;
              var x, S, P, D, N, F = e.idbdb = E.result, V = Ke(F.objectStoreNames);
              if (0 < V.length) try {
                var M = F.transaction((D = V).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) S = F, P = M, (x = e).verno = S.version / 10, P = x._dbSchema = Zn(0, S, P), x._storeNames = Ke(S.objectStoreNames, 0), Qn(x, [x._allTables], m(P), P);
                else if (er(e, e._dbSchema, M), ((N = Br(Zn(0, (N = e).idbdb, M), N._dbSchema)).add.length || N.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), s = F.version + 1, c = !0, T(d());
                zn(e, M);
              } catch {
              }
              cn.push(e), F.onversionchange = je(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), F.onclose = je(function(U) {
                e.on("close").fire(U);
              }), p && (N = e._deps, M = b, F = N.indexedDB, N = N.IDBKeyRange, qr(F) || M === $n || Mr(F, N).put({ name: M }).catch(A)), T();
            }, v);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return Q.reject(T);
          });
        }
        var y, g = t.dbReadyResolve, w = null, p = !1;
        return Q.race([o, (typeof navigator > "u" ? Q.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function v() {
            return indexedDB.databases().finally(T);
          }
          y = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(d)]).then(function() {
          return f(), t.onReadyBeingFired = [], Q.resolve(Lr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(ae, A);
              return t.onReadyBeingFired = [], Q.resolve(Lr(function() {
                return v(e.vip);
              })).then(T);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(T) {
          t.dbOpenError = T;
          try {
            w && w.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Le(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return p && (T = {}, e.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new ze(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new ze(-1 / 0, [[[]]]);
          }), Bt(xn).fire(T), Wr(T, !0)), e;
        });
      }
      function Gr(e) {
        function t(c) {
          return e.next(c);
        }
        var r = s(t), o = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(y) {
            var d = c(y), y = d.value;
            return d.done ? y : y && typeof y.then == "function" ? y.then(r, o) : O(y) ? Promise.all(y).then(r, o) : r(y);
          };
        }
        return s(t)();
      }
      function ir(e, t, r) {
        for (var o = O(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var bs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(p, T, v) {
            var b = Tn(p), E = s[b] = s[b] || [], x = p == null ? 0 : typeof p == "string" ? 1 : p.length, S = 0 < T, S = u(u({}, v), { name: S ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: S, keyTail: T, keyLength: x, extractKey: Kr(p), unique: !S && v.unique });
            return E.push(S), S.isPrimaryKey || c.push(S), 1 < x && f(x === 2 ? p[0] : p.slice(0, x - 1), T + 1, v), E.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), S;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var d = 0, y = o.indexes; d < y.length; d++) {
            var g = y[d];
            f(g.keyPath, 0, g);
          }
          function w(p) {
            var T, v = p.query.index;
            return v.isVirtual ? u(u({}, p), { query: { index: v.lowLevelIndex, range: (T = p.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: ir(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: ir(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = s[Tn(p)]) && p[0];
          } }), count: function(p) {
            return r.count(w(p));
          }, query: function(p) {
            return r.query(w(p));
          }, openCursor: function(p) {
            var T = p.query.index, v = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(w(p)).then(function(S) {
              return S && x(S);
            }) : r.openCursor(p);
            function x(S) {
              return Object.create(S, { continue: { value: function(P) {
                P != null ? S.continue(ir(P, p.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : p.unique ? S.continue(S.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : S.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                S.continuePrimaryKey(ir(P, e.MAX_KEY, v), D);
              } }, primaryKey: { get: function() {
                return S.primaryKey;
              } }, key: { get: function() {
                var P = S.key;
                return E === 1 ? P[0] : P.slice(0, E);
              } }, value: { get: function() {
                return S.value;
              } } });
            }
          } });
        } });
      } };
      function Yr(e, t, r, o) {
        return r = r || {}, o = o || "", m(e).forEach(function(s) {
          var c, f, d;
          I(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (d = Be(c)) !== Be(f) ? r[o + s] = t[s] : d === "Object" ? Yr(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), m(t).forEach(function(s) {
          I(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var _s = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = ee.trans, f = c.table(t).hook, d = f.deleting, y = f.creating, g = f.updating;
            switch (s.type) {
              case "add":
                if (y.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (y.fire === A && g.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === A) break;
                return c._promise("readwrite", function() {
                  return function p(T, v, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: v }, limit: b }).then(function(E) {
                      var x = E.result;
                      return w({ type: "delete", keys: x, trans: T }).then(function(S) {
                        return 0 < S.numFailures ? Promise.reject(S.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : p(T, u(u({}, v), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(p) {
              var T, v, b, E = ee.trans, x = p.keys || Xr(o, p);
              if (!x) throw new Error("Keys missing");
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: x }) : u({}, p)).type !== "delete" && (p.values = l([], p.values)), p.keys && (p.keys = l([], p.keys)), T = r, b = x, ((v = p).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(S) {
                var P = x.map(function(D, N) {
                  var F, V, M, U = S[N], Y = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(Y, D, U, E) : p.type === "add" || U === void 0 ? (F = y.fire.call(Y, D, p.values[N], E), D == null && F != null && (p.keys[N] = D = F, o.outbound || G(p.values[N], o.keyPath, D))) : (F = Yr(U, p.values[N]), (V = g.fire.call(Y, F, D, U, E)) && (M = p.values[N], Object.keys(V).forEach(function(W) {
                    I(M, W) ? M[W] = V[W] : G(M, W, V[W]);
                  }))), Y;
                });
                return r.mutate(p).then(function(D) {
                  for (var N = D.failures, F = D.results, V = D.numFailures, D = D.lastResult, M = 0; M < x.length; ++M) {
                    var U = (F || x)[M], Y = P[M];
                    U == null ? Y.onerror && Y.onerror(N[M]) : Y.onsuccess && Y.onsuccess(p.type === "put" && S[M] ? p.values[M] : U);
                  }
                  return { failures: N, results: F, numFailures: V, lastResult: D };
                }).catch(function(D) {
                  return P.forEach(function(N) {
                    return N.onerror && N.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function Gi(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) be(t.keys[s], e[c]) === 0 && (o.push(r ? ke(t.values[s]) : t.values[s]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var ws = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var s = Gi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? Q.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ke(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Yi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Xi(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var xs = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new ze(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (ee.subscr && s !== "readonly") throw new K.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, p = c.indexes, d = f.extractKey, y = f.outbound, g = f.autoIncrement && p.filter(function(v) {
            return v.compound && v.keyPath.includes(f.keyPath);
          }), w = u(u({}, s), { mutate: function(v) {
            function b(W) {
              return W = "idb://".concat(t, "/").concat(o, "/").concat(W), D[W] || (D[W] = new ze());
            }
            var E, x, S, P = v.trans, D = v.mutatedParts || (v.mutatedParts = {}), N = b(""), F = b(":dels"), V = v.type, Y = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Xr(f, v).filter(function(W) {
              return W;
            }), v.values] : [], M = Y[0], U = Y[1], Y = v.trans._cache;
            return O(M) ? (N.addKeys(M), (Y = V === "delete" || M.length === U.length ? Gi(M, Y) : null) || F.addKeys(M), (Y || U) && (E = b, x = Y, S = U, c.indexes.forEach(function(W) {
              var J = E(W.name || "");
              function he(ce) {
                return ce != null ? W.extractKey(ce) : null;
              }
              function we(ce) {
                return W.multiEntry && O(ce) ? ce.forEach(function(Fe) {
                  return J.addKey(Fe);
                }) : J.addKey(ce);
              }
              (x || S).forEach(function(ce, Qe) {
                var ue = x && he(x[Qe]), Qe = S && he(S[Qe]);
                be(ue, Qe) !== 0 && (ue != null && we(ue), Qe != null && we(Qe));
              });
            }))) : M ? (U = { from: (U = M.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = M.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, F.add(U), N.add(U)) : (N.add(r), F.add(r), c.indexes.forEach(function(W) {
              return b(W.name).add(r);
            })), s.mutate(v).then(function(W) {
              return !M || v.type !== "add" && v.type !== "put" || (N.addKeys(W.results), g && g.forEach(function(J) {
                for (var he = v.values.map(function(ue) {
                  return J.extractKey(ue);
                }), we = J.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), ce = 0, Fe = W.results.length; ce < Fe; ++ce) he[ce][we] = W.results[ce];
                b(J.name).addKeys(he);
              })), P.mutatedParts = nr(P.mutatedParts || {}, D), W;
            });
          } }), p = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new ze((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [f, new ze(v.key)];
          }, getMany: function(v) {
            return [f, new ze().addKeys(v.keys)];
          }, count: p, query: p, openCursor: p };
          return m(T).forEach(function(v) {
            w[v] = function(b) {
              var E = ee.subscr, x = !!E, S = Yi(ee, s) && Xi(v, b) ? b.obsSet = {} : E;
              if (x) {
                var P = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), S[U] || (S[U] = new ze());
                }, D = P(""), N = P(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? N : P(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var F = v === "query" && y && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(U) {
                      if (v === "query") {
                        if (y && b.values) return F.then(function(he) {
                          return he = he.result, D.addKeys(he), U;
                        });
                        var Y = b.values ? U.result.map(d) : U.result;
                        (b.values ? D : N).addKeys(Y);
                      } else if (v === "openCursor") {
                        var W = U, J = b.values;
                        return W && Object.create(W, { key: { get: function() {
                          return N.addKey(W.primaryKey), W.key;
                        } }, primaryKey: { get: function() {
                          var he = W.primaryKey;
                          return N.addKey(he), he;
                        } }, value: { get: function() {
                          return J && D.addKey(W.primaryKey), W.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  N.add(r);
                }
              }
              return s[v].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function zi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), O(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && O(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function zr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < be(r, o.lower) : 0 <= be(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? be(e, t.upper) < 0 : be(e, t.upper) <= 0));
        var r, o;
      }
      function Qi(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var f = t.query.index, d = f.multiEntry, y = t.query.range, g = o.schema.primaryKey.extractKey, w = f.extractKey, p = (f.lowLevelIndex || f).extractKey, T = T.reduce(function(v, b) {
          var E = v, x = [];
          if (b.type === "add" || b.type === "put") for (var S = new ze(), P = b.values.length - 1; 0 <= P; --P) {
            var D, N = b.values[P], F = g(N);
            S.hasKey(F) || (D = w(N), (d && O(D) ? D.some(function(W) {
              return zr(W, y);
            }) : zr(D, y)) && (S.addKey(F), x.push(N)));
          }
          switch (b.type) {
            case "add":
              var V = new ze().addKeys(t.values ? v.map(function(J) {
                return g(J);
              }) : v), E = v.concat(t.values ? x.filter(function(J) {
                return J = g(J), !V.hasKey(J) && (V.addKey(J), !0);
              }) : x.map(function(J) {
                return g(J);
              }).filter(function(J) {
                return !V.hasKey(J) && (V.addKey(J), !0);
              }));
              break;
            case "put":
              var M = new ze().addKeys(b.values.map(function(J) {
                return g(J);
              }));
              E = v.filter(function(J) {
                return !M.hasKey(t.values ? g(J) : J);
              }).concat(t.values ? x : x.map(function(J) {
                return g(J);
              }));
              break;
            case "delete":
              var U = new ze().addKeys(b.keys);
              E = v.filter(function(J) {
                return !U.hasKey(t.values ? g(J) : J);
              });
              break;
            case "deleteRange":
              var Y = b.range;
              E = v.filter(function(J) {
                return !zr(g(J), Y);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(v, b) {
          return be(p(v), p(b)) || be(g(v), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function Ji(e, t) {
        return be(e.lower, t.lower) === 0 && be(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Es(e, t) {
        return function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = be(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = be(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return -1;
            if (c) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Ts(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, c = t, setTimeout(function() {
            s.subscribers.size === 0 && qe(c, s);
          }, 3e3));
        });
      }
      var Os = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, s) {
          var c, f, d = e.transaction(r, o, s);
          return o === "readwrite" && (f = (c = new AbortController()).signal, s = function(y) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var g = /* @__PURE__ */ new Set(), w = 0, p = r; w < p.length; w++) {
                  var T = p[w], v = Xt["idb://".concat(t, "/").concat(T)];
                  if (v) {
                    var b = e.table(T), E = v.optimisticOps.filter(function(J) {
                      return J.trans === d;
                    });
                    if (d._explicit && y && d.mutatedParts) for (var x = 0, S = Object.values(v.queries.query); x < S.length; x++) for (var P = 0, D = (V = S[x]).slice(); P < D.length; P++) Vr((M = D[P]).obsSet, d.mutatedParts) && (qe(V, M), M.subscribers.forEach(function(J) {
                      return g.add(J);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(J) {
                        return J.trans !== d;
                      });
                      for (var N = 0, F = Object.values(v.queries.query); N < F.length; N++) for (var V, M, U, Y = 0, W = (V = F[N]).slice(); Y < W.length; Y++) (M = W[Y]).res != null && d.mutatedParts && (y && !M.dirty ? (U = Object.isFrozen(M.res), U = Qi(M.res, M.req, E, b, M, U), M.dirty ? (qe(V, M), M.subscribers.forEach(function(J) {
                        return g.add(J);
                      })) : U !== M.res && (M.res = U, M.promise = Q.resolve({ result: U }))) : (M.dirty && qe(V, M), M.subscribers.forEach(function(J) {
                        return g.add(J);
                      })));
                    }
                  }
                }
                g.forEach(function(J) {
                  return J();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: f }), d.addEventListener("error", s(!1), { signal: f }), d.addEventListener("complete", s(!0), { signal: f })), d;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = ee.trans;
            if (s.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Xt["idb://".concat(t, "/").concat(r)];
            return d ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Xr(s, c).some(function(y) {
              return y == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && rr(c.mutatedParts), f.then(function(y) {
              0 < y.numFailures && (qe(d.optimisticOps, c), (y = zi(0, c, y)) && d.optimisticOps.push(y), c.mutatedParts && rr(c.mutatedParts));
            }), f.catch(function() {
              qe(d.optimisticOps, c), c.mutatedParts && rr(c.mutatedParts);
            })) : f.then(function(y) {
              var g = zi(0, u(u({}, c), { values: c.values.map(function(w, p) {
                var T;
                return y.failures[p] ? w : (w = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? ke(w) : u({}, w), G(w, s.keyPath, y.results[p]), w);
              }) }), y);
              d.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && rr(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Yi(ee, o) || !Xi("query", c)) return o.query(c);
            var f = ((g = ee.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", p = ee, d = p.requery, y = p.signal, g = function(b, E, x, S) {
              var P = Xt["idb://".concat(b, "/").concat(E)];
              if (!P) return [];
              if (!(E = P.queries[x])) return [null, !1, P, null];
              var D = E[(S.query ? S.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (x) {
                case "query":
                  var N = D.find(function(F) {
                    return F.req.limit === S.limit && F.req.values === S.values && Ji(F.req.query.range, S.query.range);
                  });
                  return N ? [N, !0, P, D] : [D.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= S.limit && (!S.values || F.req.values) && Es(F.req.query.range, S.query.range);
                  }), !1, P, D];
                case "count":
                  return N = D.find(function(F) {
                    return Ji(F.req.query.range, S.query.range);
                  }), [N, !!N, P, D];
              }
            }(t, r, "query", c), w = g[0], p = g[1], T = g[2], v = g[3];
            return w && p ? w.obsSet = c.obsSet : (p = o.query(c).then(function(b) {
              var E = b.result;
              if (w && (w.res = E), f) {
                for (var x = 0, S = E.length; x < S; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = ke(E);
              return b;
            }).catch(function(b) {
              return v && w && qe(v, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(w) : (v = [w], (T = T || (Xt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), Ts(w, v, d, y), w.promise.then(function(b) {
              return { result: Qi(b.result, c, T?.optimisticOps, o, w, f) };
            });
          } });
        } });
      } };
      function or(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var kt = (Ue.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new K.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new K.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(ps), r.stores({}), this._state.autoSchema = !1, r);
      }, Ue.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ee.letThrough || this._vip) ? e() : new Q(function(r, o) {
          if (t._state.openComplete) return o(new K.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new K.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Ue.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Ue.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Ue.prototype.open = function() {
        var e = this;
        return Wt(tt, function() {
          return gs(e);
        });
      }, Ue.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = cn.indexOf(this);
        if (0 <= t && cn.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new Q(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new Q(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Ue.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new K.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new K.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Ue.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new Q(function(s, c) {
          function f() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = je(function() {
              var y, g, w;
              y = t._deps, g = t.name, w = y.indexedDB, y = y.IDBKeyRange, qr(w) || g === $n || Mr(w, y).delete(g).catch(A), s();
            }), d.onerror = xt(c), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new K.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, Ue.prototype.backendDB = function() {
        return this.idbdb;
      }, Ue.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ue.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ue.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ue.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ue.prototype, "tables", { get: function() {
        var e = this;
        return m(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Ue.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new K.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, ye(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ue.prototype._transaction = function(e, t, r) {
        var o = this, s = ee.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === kr) c = kr;
          else {
            if (e != "rw" && e != Pr) throw new K.InvalidArgument("Invalid transaction mode: " + e);
            c = Pr;
          }
          if (s) {
            if (s.mode === kr && c === Pr) {
              if (!d) throw new K.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!d) throw new K.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(w, p) {
            p(g);
          }) : Le(g);
        }
        var y = (function g(w, p, T, v, b) {
          return Q.resolve().then(function() {
            var E = ee.transless || ee, x = w._createTransaction(p, T, w._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return g(w, p, T, null, b);
              })) : Le(D);
            }
            var S, P = yt(b);
            return P && un(), E = Q.follow(function() {
              var D;
              (S = b.call(x, x)) && (P ? (D = Rt.bind(null, null), S.then(D, D)) : typeof S.next == "function" && typeof S.throw == "function" && (S = Gr(S)));
            }, E), (S && typeof S.then == "function" ? Q.resolve(S).then(function(D) {
              return x.active ? D : Le(new K.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return S;
            })).then(function(D) {
              return v && x._resolve(), x._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return x._reject(D), Le(D);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, y, "lock") : ee.trans ? Wt(ee.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Ue.prototype.table = function(e) {
        if (!I(this._allTables, e)) throw new K.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ue);
      function Ue(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ue.dependencies;
        this._options = t = u({ addons: Ue.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, d, y, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new Q(function(p) {
          g.dbReadyResolve = p;
        }), g.openCanceller = new Q(function(p, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = gn(this, "populate", "blocked", "versionchange", "close", { ready: [ae, A] }), this.once = function(p, T) {
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(p).unsubscribe(v), T.apply(r, b);
          };
          return r.on(p, v);
        }, this.on.ready.subscribe = Ve(this.on.ready.subscribe, function(p) {
          return function(T, v) {
            Ue.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || Q.resolve().then(T), v && p(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && p(T)) : (p(T), b = r, v || p(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, bn(as.prototype, function(S, x) {
          this.db = s;
          var v = ki, b = null;
          if (x) try {
            v = x();
          } catch (P) {
            b = P;
          }
          var E = S._ctx, x = E.table, S = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: S !== j ? S : null };
        })), this.Table = (c = this, bn(Ni.prototype, function(p, T, v) {
          this.db = c, this._tx = v, this.name = p, this.schema = T, this.hook = c._allTables[p] ? c._allTables[p].hook : gn(null, { creating: [se, A], reading: [Z, j], updating: [fe, A], deleting: [re, A] });
        })), this.Transaction = (f = this, bn(ls.prototype, function(p, T, v, b, E) {
          var x = this;
          p !== "readonly" && T.forEach(function(S) {
            S = (S = v[S]) === null || S === void 0 ? void 0 : S.yProps, S && (T = T.concat(S.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = f, this.mode = p, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = gn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Q(function(S, P) {
            x._resolve = S, x._reject = P;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(S) {
            var P = x.active;
            return x.active = !1, x.on.error.fire(S), x.parent ? x.parent._reject(S) : P && x.idbtrans && x.idbtrans.abort(), Le(S);
          });
        })), this.Version = (d = this, bn(vs.prototype, function(p) {
          this.db = d, this._cfg = { version: p, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, bn(Fi.prototype, function(p, T, v) {
          if (this.db = y, this._ctx = { table: p, index: T === ":id" ? null : T, or: v }, this._cmp = this._ascending = be, this._descending = function(b, E) {
            return be(E, b);
          }, this._max = function(b, E) {
            return 0 < be(b, E) ? b : E;
          }, this._min = function(b, E) {
            return be(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new K.MissingAPI();
        })), this.on("versionchange", function(p) {
          0 < p.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(p) {
          !p.newVersion || p.newVersion < p.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(p.oldVersion / 10));
        }), this._maxKey = En(t.IDBKeyRange), this._createTransaction = function(p, T, v, b) {
          return new r.Transaction(p, T, v, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(p) {
          r.on("blocked").fire(p), cn.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(p);
          });
        }, this.use(ws), this.use(Os), this.use(xs), this.use(bs), this.use(_s);
        var w = new Proxy(this, { get: function(p, T, v) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return or(r.table(E), w);
          };
          var b = Reflect.get(p, T, v);
          return b instanceof Ni ? or(b, w) : T === "tables" ? b.map(function(E) {
            return or(E, w);
          }) : T === "_createTransaction" ? function() {
            return or(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(p) {
          return p(r);
        });
      }
      var sr, pt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ss = (Qr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Qr.prototype[pt] = function() {
        return this;
      }, Qr);
      function Qr(e) {
        this._subscribe = e;
      }
      try {
        sr = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        sr = { indexedDB: null, IDBKeyRange: null };
      }
      function Zi(e) {
        var t, r = !1, o = new Ss(function(s) {
          var c = yt(e), f, d = !1, y = {}, g = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, f && f.abort(), p && Bt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(w);
          var p = !1, T = function() {
            return Ar(b);
          }, v = function(E) {
            nr(y, E), Vr(g, y) && T();
          }, b = function() {
            var E, x, S;
            !d && sr.indexedDB && (y = {}, E = {}, f && f.abort(), f = new AbortController(), S = function(P) {
              var D = sn();
              try {
                c && un();
                var N = It(e, P);
                return N = c ? N.finally(Rt) : N;
              } finally {
                D && an();
              }
            }(x = { subscr: E, signal: f.signal, requery: T, querier: e, trans: null }), Promise.resolve(S).then(function(P) {
              r = !0, t = P, d || x.signal.aborted || (y = {}, function(D) {
                for (var N in D) if (I(D, N)) return;
                return 1;
              }(g = E) || p || (Bt(xn, v), p = !0), Ar(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || Ar(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(T, 0), w;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var zt = kt;
      function Jr(e) {
        var t = Ft;
        try {
          Ft = !0, Bt.storagemutated.fire(e), Wr(e, !0);
        } finally {
          Ft = t;
        }
      }
      X(zt, u(u({}, He), { delete: function(e) {
        return new zt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new zt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = zt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (qr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== $n;
            });
          }) : Mr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Le(new K.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          C(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ee.trans ? Wt(ee.transless, e) : e();
      }, vip: Lr, async: function(e) {
        return function() {
          try {
            var t = Gr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : Q.resolve(t);
          } catch (r) {
            return Le(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Gr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : Q.resolve(o);
        } catch (s) {
          return Le(s);
        }
      }, currentTransaction: { get: function() {
        return ee.trans || null;
      } }, waitFor: function(e, t) {
        return t = Q.resolve(typeof e == "function" ? zt.ignoreTransaction(e) : e).timeout(t || 6e4), ee.trans ? ee.trans.waitFor(t) : t;
      }, Promise: Q, debug: { get: function() {
        return ie;
      }, set: function(e) {
        Te(e);
      } }, derive: de, extend: C, props: X, override: Ve, Events: gn, on: Bt, liveQuery: Zi, extendObservabilitySet: nr, getByKeyPath: H, setByKeyPath: G, delByKeyPath: function(e, t) {
        typeof t == "string" ? G(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          G(e, r, void 0);
        });
      }, shallowClone: le, deepClone: ke, getObjectDiff: Yr, cmp: be, asap: $, minKey: -1 / 0, addons: [], connections: cn, errnames: k, dependencies: sr, cache: Xt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), zt.maxKey = En(zt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Bt(xn, function(e) {
        Ft || (e = new CustomEvent(Nr, { detail: e }), Ft = !0, dispatchEvent(e), Ft = !1);
      }), addEventListener(Nr, function(e) {
        e = e.detail, Ft || Jr(e);
      }));
      var pn, Ft = !1, eo = function() {
      };
      return typeof BroadcastChannel < "u" && ((eo = function() {
        (pn = new BroadcastChannel(Nr)).onmessage = function(e) {
          return e.data && Jr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), Bt(xn, function(e) {
        Ft || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!kt.disableBfCache && e.persisted) {
          ie && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = cn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !kt.disableBfCache && e.persisted && (ie && console.debug("Dexie: handling persisted pageshow"), eo(), Jr({ all: new ze(-1 / 0, [[]]) }));
      })), Q.rejectionMapper = function(e, t) {
        return !e || e instanceof Dt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !q[e.name] ? e : (t = new q[e.name](t || e.message, e), "stack" in e && te(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Te(ie), u(kt, Object.freeze({ __proto__: null, Dexie: kt, liveQuery: Zi, Entity: Pi, cmp: be, PropModification: _n, replacePrefix: function(e, t) {
        return new _n({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new _n({ add: e });
      }, remove: function(e) {
        return new _n({ remove: e });
      }, default: kt, RangeSet: ze, mergeRanges: Sn, rangesOverlap: Vi }), { default: kt }), kt;
    });
  }(No)), No.exports;
}
var Dd = Cd();
const ra = /* @__PURE__ */ kd(Dd), du = Symbol.for("Dexie"), Uo = globalThis[du] || (globalThis[du] = ra);
if (ra.semVer !== Uo.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ra.semVer} and ${Uo.semVer}`);
const {
  liveQuery: Rc,
  mergeRanges: Xh,
  rangesOverlap: zh,
  RangeSet: Qh,
  cmp: Jh,
  Entity: Zh,
  PropModification: ep,
  replacePrefix: tp,
  add: np,
  remove: rp,
  DexieYProvider: ip
} = Uo;
var Nd = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Id(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Rd(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var a = function u() {
      var l = !1;
      try {
        l = this instanceof u;
      } catch {
      }
      return l ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    a.prototype = i.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(n).forEach(function(u) {
    var l = Object.getOwnPropertyDescriptor(n, u);
    Object.defineProperty(a, u, l.get ? l : {
      enumerable: !0,
      get: function() {
        return n[u];
      }
    });
  }), a;
}
var hu = {};
const Kd = {}, jd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Kd
}, Symbol.toStringTag, { value: "Module" })), pu = /* @__PURE__ */ Rd(jd);
var mu;
function Bd() {
  return mu || (mu = 1, function(n) {
    (function(i) {
      i.parser = function(k, _) {
        return new u(k, _);
      }, i.SAXParser = u, i.SAXStream = B, i.createStream = L, i.MAX_BUFFER_LENGTH = 64 * 1024;
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
      i.EVENTS = [
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
      function u(k, _) {
        if (!(this instanceof u))
          return new u(k, _);
        var K = this;
        h(K), K.q = K.c = "", K.bufferCheckPosition = i.MAX_BUFFER_LENGTH, K.opt = _ || {}, K.opt.lowercase = K.opt.lowercase || K.opt.lowercasetags, K.looseCase = K.opt.lowercase ? "toLowerCase" : "toUpperCase", K.tags = [], K.closed = K.closedRoot = K.sawRoot = !1, K.tag = K.error = null, K.strict = !!k, K.noscript = !!(k || K.opt.noscript), K.state = R.BEGIN, K.strictEntities = K.opt.strictEntities, K.ENTITIES = K.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), K.attribList = [], K.opt.xmlns && (K.ns = Object.create(de)), K.opt.unquotedAttributeValues === void 0 && (K.opt.unquotedAttributeValues = !k), K.trackPosition = K.opt.position !== !1, K.trackPosition && (K.position = K.line = K.column = 0), Pe(K, "onready");
      }
      Object.create || (Object.create = function(k) {
        function _() {
        }
        _.prototype = k;
        var K = new _();
        return K;
      }), Object.keys || (Object.keys = function(k) {
        var _ = [];
        for (var K in k) k.hasOwnProperty(K) && _.push(K);
        return _;
      });
      function l(k) {
        for (var _ = Math.max(i.MAX_BUFFER_LENGTH, 10), K = 0, q = 0, He = a.length; q < He; q++) {
          var A = k[a[q]].length;
          if (A > _)
            switch (a[q]) {
              case "textNode":
                ke(k);
                break;
              case "cdata":
                xe(k, "oncdata", k.cdata), k.cdata = "";
                break;
              case "script":
                xe(k, "onscript", k.script), k.script = "";
                break;
              default:
                Be(k, "Max buffer length exceeded: " + a[q]);
            }
          K = Math.max(K, A);
        }
        var j = i.MAX_BUFFER_LENGTH - K;
        k.bufferCheckPosition = j + k.position;
      }
      function h(k) {
        for (var _ = 0, K = a.length; _ < K; _++)
          k[a[_]] = "";
      }
      function m(k) {
        ke(k), k.cdata !== "" && (xe(k, "oncdata", k.cdata), k.cdata = ""), k.script !== "" && (xe(k, "onscript", k.script), k.script = "");
      }
      u.prototype = {
        end: function() {
          Ne(this);
        },
        write: wt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          m(this);
        }
      };
      var O;
      try {
        O = pu.Stream;
      } catch {
        O = function() {
        };
      }
      O || (O = function() {
      });
      var C = i.EVENTS.filter(function(k) {
        return k !== "error" && k !== "end";
      });
      function L(k, _) {
        return new B(k, _);
      }
      function B(k, _) {
        if (!(this instanceof B))
          return new B(k, _);
        O.apply(this), this._parser = new u(k, _), this.writable = !0, this.readable = !0;
        var K = this;
        this._parser.onend = function() {
          K.emit("end");
        }, this._parser.onerror = function(q) {
          K.emit("error", q), K._parser.error = null;
        }, this._decoder = null, C.forEach(function(q) {
          Object.defineProperty(K, "on" + q, {
            get: function() {
              return K._parser["on" + q];
            },
            set: function(He) {
              if (!He)
                return K.removeAllListeners(q), K._parser["on" + q] = He, He;
              K.on(q, He);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      B.prototype = Object.create(O.prototype, {
        constructor: {
          value: B
        }
      }), B.prototype.write = function(k) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(k)) {
          if (!this._decoder) {
            var _ = pu.StringDecoder;
            this._decoder = new _("utf8");
          }
          k = this._decoder.write(k);
        }
        return this._parser.write(k.toString()), this.emit("data", k), !0;
      }, B.prototype.end = function(k) {
        return k && k.length && this.write(k), this._parser.end(), !0;
      }, B.prototype.on = function(k, _) {
        var K = this;
        return !K._parser["on" + k] && C.indexOf(k) !== -1 && (K._parser["on" + k] = function() {
          var q = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          q.splice(0, 0, k), K.emit.apply(K, q);
        }), O.prototype.on.call(K, k, _);
      };
      var I = "[CDATA[", X = "DOCTYPE", oe = "http://www.w3.org/XML/1998/namespace", te = "http://www.w3.org/2000/xmlns/", de = { xml: oe, xmlns: te }, Re = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ae = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Ke = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ve = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function z(k) {
        return k === " " || k === `
` || k === "\r" || k === "	";
      }
      function $(k) {
        return k === '"' || k === "'";
      }
      function H(k) {
        return k === ">" || z(k);
      }
      function G(k, _) {
        return k.test(_);
      }
      function le(k, _) {
        return !G(k, _);
      }
      var R = 0;
      i.STATE = {
        BEGIN: R++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: R++,
        // leading whitespace
        TEXT: R++,
        // general stuff
        TEXT_ENTITY: R++,
        // &amp and such.
        OPEN_WAKA: R++,
        // <
        SGML_DECL: R++,
        // <!BLARG
        SGML_DECL_QUOTED: R++,
        // <!BLARG foo "bar
        DOCTYPE: R++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: R++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: R++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: R++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: R++,
        // <!-
        COMMENT: R++,
        // <!--
        COMMENT_ENDING: R++,
        // <!-- blah -
        COMMENT_ENDED: R++,
        // <!-- blah --
        CDATA: R++,
        // <![CDATA[ something
        CDATA_ENDING: R++,
        // ]
        CDATA_ENDING_2: R++,
        // ]]
        PROC_INST: R++,
        // <?hi
        PROC_INST_BODY: R++,
        // <?hi there
        PROC_INST_ENDING: R++,
        // <?hi "there" ?
        OPEN_TAG: R++,
        // <strong
        OPEN_TAG_SLASH: R++,
        // <strong /
        ATTRIB: R++,
        // <a
        ATTRIB_NAME: R++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: R++,
        // <a foo _
        ATTRIB_VALUE: R++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: R++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: R++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: R++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: R++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: R++,
        // <foo bar=&quot
        CLOSE_TAG: R++,
        // </a
        CLOSE_TAG_SAW_WHITE: R++,
        // </a   >
        SCRIPT: R++,
        // <script> ...
        SCRIPT_ENDING: R++
        // <script> ... <
      }, i.XML_ENTITIES = {
        amp: "&",
        gt: ">",
        lt: "<",
        quot: '"',
        apos: "'"
      }, i.ENTITIES = {
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
      }, Object.keys(i.ENTITIES).forEach(function(k) {
        var _ = i.ENTITIES[k], K = typeof _ == "number" ? String.fromCharCode(_) : _;
        i.ENTITIES[k] = K;
      });
      for (var ye in i.STATE)
        i.STATE[i.STATE[ye]] = ye;
      R = i.STATE;
      function Pe(k, _, K) {
        k[_] && k[_](K);
      }
      function xe(k, _, K) {
        k.textNode && ke(k), Pe(k, _, K);
      }
      function ke(k) {
        k.textNode = it(k.opt, k.textNode), k.textNode && Pe(k, "ontext", k.textNode), k.textNode = "";
      }
      function it(k, _) {
        return k.trim && (_ = _.trim()), k.normalize && (_ = _.replace(/\s+/g, " ")), _;
      }
      function Be(k, _) {
        return ke(k), k.trackPosition && (_ += `
Line: ` + k.line + `
Column: ` + k.column + `
Char: ` + k.c), _ = new Error(_), k.error = _, Pe(k, "onerror", _), k;
      }
      function Ne(k) {
        return k.sawRoot && !k.closedRoot && ve(k, "Unclosed root tag"), k.state !== R.BEGIN && k.state !== R.BEGIN_WHITESPACE && k.state !== R.TEXT && Be(k, "Unexpected end"), ke(k), k.c = "", k.closed = !0, Pe(k, "onend"), u.call(k, k.strict, k.opt), k;
      }
      function ve(k, _) {
        if (typeof k != "object" || !(k instanceof u))
          throw new Error("bad call to strictFail");
        k.strict && Be(k, _);
      }
      function qe(k) {
        k.strict || (k.tagName = k.tagName[k.looseCase]());
        var _ = k.tags[k.tags.length - 1] || k, K = k.tag = { name: k.tagName, attributes: {} };
        k.opt.xmlns && (K.ns = _.ns), k.attribList.length = 0, xe(k, "onopentagstart", K);
      }
      function ht(k, _) {
        var K = k.indexOf(":"), q = K < 0 ? ["", k] : k.split(":"), He = q[0], A = q[1];
        return _ && k === "xmlns" && (He = "xmlns", A = ""), { prefix: He, local: A };
      }
      function st(k) {
        if (k.strict || (k.attribName = k.attribName[k.looseCase]()), k.attribList.indexOf(k.attribName) !== -1 || k.tag.attributes.hasOwnProperty(k.attribName)) {
          k.attribName = k.attribValue = "";
          return;
        }
        if (k.opt.xmlns) {
          var _ = ht(k.attribName, !0), K = _.prefix, q = _.local;
          if (K === "xmlns")
            if (q === "xml" && k.attribValue !== oe)
              ve(
                k,
                "xml: prefix must be bound to " + oe + `
Actual: ` + k.attribValue
              );
            else if (q === "xmlns" && k.attribValue !== te)
              ve(
                k,
                "xmlns: prefix must be bound to " + te + `
Actual: ` + k.attribValue
              );
            else {
              var He = k.tag, A = k.tags[k.tags.length - 1] || k;
              He.ns === A.ns && (He.ns = Object.create(A.ns)), He.ns[q] = k.attribValue;
            }
          k.attribList.push([k.attribName, k.attribValue]);
        } else
          k.tag.attributes[k.attribName] = k.attribValue, xe(k, "onattribute", {
            name: k.attribName,
            value: k.attribValue
          });
        k.attribName = k.attribValue = "";
      }
      function yt(k, _) {
        if (k.opt.xmlns) {
          var K = k.tag, q = ht(k.tagName);
          K.prefix = q.prefix, K.local = q.local, K.uri = K.ns[q.prefix] || "", K.prefix && !K.uri && (ve(k, "Unbound namespace prefix: " + JSON.stringify(k.tagName)), K.uri = q.prefix);
          var He = k.tags[k.tags.length - 1] || k;
          K.ns && He.ns !== K.ns && Object.keys(K.ns).forEach(function(Te) {
            xe(k, "onopennamespace", {
              prefix: Te,
              uri: K.ns[Te]
            });
          });
          for (var A = 0, j = k.attribList.length; A < j; A++) {
            var Z = k.attribList[A], ne = Z[0], se = Z[1], re = ht(ne, !0), fe = re.prefix, pe = re.local, ae = fe === "" ? "" : K.ns[fe] || "", ie = {
              name: ne,
              value: se,
              prefix: fe,
              local: pe,
              uri: ae
            };
            fe && fe !== "xmlns" && !ae && (ve(k, "Unbound namespace prefix: " + JSON.stringify(fe)), ie.uri = fe), k.tag.attributes[ne] = ie, xe(k, "onattribute", ie);
          }
          k.attribList.length = 0;
        }
        k.tag.isSelfClosing = !!_, k.sawRoot = !0, k.tags.push(k.tag), xe(k, "onopentag", k.tag), _ || (!k.noscript && k.tagName.toLowerCase() === "script" ? k.state = R.SCRIPT : k.state = R.TEXT, k.tag = null, k.tagName = ""), k.attribName = k.attribValue = "", k.attribList.length = 0;
      }
      function Ct(k) {
        if (!k.tagName) {
          ve(k, "Weird empty close tag."), k.textNode += "</>", k.state = R.TEXT;
          return;
        }
        if (k.script) {
          if (k.tagName !== "script") {
            k.script += "</" + k.tagName + ">", k.tagName = "", k.state = R.SCRIPT;
            return;
          }
          xe(k, "onscript", k.script), k.script = "";
        }
        var _ = k.tags.length, K = k.tagName;
        k.strict || (K = K[k.looseCase]());
        for (var q = K; _--; ) {
          var He = k.tags[_];
          if (He.name !== q)
            ve(k, "Unexpected close tag");
          else
            break;
        }
        if (_ < 0) {
          ve(k, "Unmatched closing tag: " + k.tagName), k.textNode += "</" + k.tagName + ">", k.state = R.TEXT;
          return;
        }
        k.tagName = K;
        for (var A = k.tags.length; A-- > _; ) {
          var j = k.tag = k.tags.pop();
          k.tagName = k.tag.name, xe(k, "onclosetag", k.tagName);
          var Z = {};
          for (var ne in j.ns)
            Z[ne] = j.ns[ne];
          var se = k.tags[k.tags.length - 1] || k;
          k.opt.xmlns && j.ns !== se.ns && Object.keys(j.ns).forEach(function(re) {
            var fe = j.ns[re];
            xe(k, "onclosenamespace", { prefix: re, uri: fe });
          });
        }
        _ === 0 && (k.closedRoot = !0), k.tagName = k.attribValue = k.attribName = "", k.attribList.length = 0, k.state = R.TEXT;
      }
      function Dt(k) {
        var _ = k.entity, K = _.toLowerCase(), q, He = "";
        return k.ENTITIES[_] ? k.ENTITIES[_] : k.ENTITIES[K] ? k.ENTITIES[K] : (_ = K, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), q = parseInt(_, 16), He = q.toString(16)) : (_ = _.slice(1), q = parseInt(_, 10), He = q.toString(10))), _ = _.replace(/^0+/, ""), isNaN(q) || He.toLowerCase() !== _ ? (ve(k, "Invalid character entity"), "&" + k.entity + ";") : String.fromCodePoint(q));
      }
      function Nn(k, _) {
        _ === "<" ? (k.state = R.OPEN_WAKA, k.startTagPosition = k.position) : z(_) || (ve(k, "Non-whitespace before first tag."), k.textNode = _, k.state = R.TEXT);
      }
      function tn(k, _) {
        var K = "";
        return _ < k.length && (K = k.charAt(_)), K;
      }
      function wt(k) {
        var _ = this;
        if (this.error)
          throw this.error;
        if (_.closed)
          return Be(
            _,
            "Cannot write after close. Assign an onready handler."
          );
        if (k === null)
          return Ne(_);
        typeof k == "object" && (k = k.toString());
        for (var K = 0, q = ""; q = tn(k, K++), _.c = q, !!q; )
          switch (_.trackPosition && (_.position++, q === `
` ? (_.line++, _.column = 0) : _.column++), _.state) {
            case R.BEGIN:
              if (_.state = R.BEGIN_WHITESPACE, q === "\uFEFF")
                continue;
              Nn(_, q);
              continue;
            case R.BEGIN_WHITESPACE:
              Nn(_, q);
              continue;
            case R.TEXT:
              if (_.sawRoot && !_.closedRoot) {
                for (var He = K - 1; q && q !== "<" && q !== "&"; )
                  q = tn(k, K++), q && _.trackPosition && (_.position++, q === `
` ? (_.line++, _.column = 0) : _.column++);
                _.textNode += k.substring(He, K - 1);
              }
              q === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = R.OPEN_WAKA, _.startTagPosition = _.position) : (!z(q) && (!_.sawRoot || _.closedRoot) && ve(_, "Text data outside of root node."), q === "&" ? _.state = R.TEXT_ENTITY : _.textNode += q);
              continue;
            case R.SCRIPT:
              q === "<" ? _.state = R.SCRIPT_ENDING : _.script += q;
              continue;
            case R.SCRIPT_ENDING:
              q === "/" ? _.state = R.CLOSE_TAG : (_.script += "<" + q, _.state = R.SCRIPT);
              continue;
            case R.OPEN_WAKA:
              if (q === "!")
                _.state = R.SGML_DECL, _.sgmlDecl = "";
              else if (!z(q)) if (G(Re, q))
                _.state = R.OPEN_TAG, _.tagName = q;
              else if (q === "/")
                _.state = R.CLOSE_TAG, _.tagName = "";
              else if (q === "?")
                _.state = R.PROC_INST, _.procInstName = _.procInstBody = "";
              else {
                if (ve(_, "Unencoded <"), _.startTagPosition + 1 < _.position) {
                  var A = _.position - _.startTagPosition;
                  q = new Array(A).join(" ") + q;
                }
                _.textNode += "<" + q, _.state = R.TEXT;
              }
              continue;
            case R.SGML_DECL:
              if (_.sgmlDecl + q === "--") {
                _.state = R.COMMENT, _.comment = "", _.sgmlDecl = "";
                continue;
              }
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = R.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + q, _.sgmlDecl = "") : (_.sgmlDecl + q).toUpperCase() === I ? (xe(_, "onopencdata"), _.state = R.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + q).toUpperCase() === X ? (_.state = R.DOCTYPE, (_.doctype || _.sawRoot) && ve(
                _,
                "Inappropriately located doctype declaration"
              ), _.doctype = "", _.sgmlDecl = "") : q === ">" ? (xe(_, "onsgmldeclaration", _.sgmlDecl), _.sgmlDecl = "", _.state = R.TEXT) : ($(q) && (_.state = R.SGML_DECL_QUOTED), _.sgmlDecl += q);
              continue;
            case R.SGML_DECL_QUOTED:
              q === _.q && (_.state = R.SGML_DECL, _.q = ""), _.sgmlDecl += q;
              continue;
            case R.DOCTYPE:
              q === ">" ? (_.state = R.TEXT, xe(_, "ondoctype", _.doctype), _.doctype = !0) : (_.doctype += q, q === "[" ? _.state = R.DOCTYPE_DTD : $(q) && (_.state = R.DOCTYPE_QUOTED, _.q = q));
              continue;
            case R.DOCTYPE_QUOTED:
              _.doctype += q, q === _.q && (_.q = "", _.state = R.DOCTYPE);
              continue;
            case R.DOCTYPE_DTD:
              q === "]" ? (_.doctype += q, _.state = R.DOCTYPE) : q === "<" ? (_.state = R.OPEN_WAKA, _.startTagPosition = _.position) : $(q) ? (_.doctype += q, _.state = R.DOCTYPE_DTD_QUOTED, _.q = q) : _.doctype += q;
              continue;
            case R.DOCTYPE_DTD_QUOTED:
              _.doctype += q, q === _.q && (_.state = R.DOCTYPE_DTD, _.q = "");
              continue;
            case R.COMMENT:
              q === "-" ? _.state = R.COMMENT_ENDING : _.comment += q;
              continue;
            case R.COMMENT_ENDING:
              q === "-" ? (_.state = R.COMMENT_ENDED, _.comment = it(_.opt, _.comment), _.comment && xe(_, "oncomment", _.comment), _.comment = "") : (_.comment += "-" + q, _.state = R.COMMENT);
              continue;
            case R.COMMENT_ENDED:
              q !== ">" ? (ve(_, "Malformed comment"), _.comment += "--" + q, _.state = R.COMMENT) : _.doctype && _.doctype !== !0 ? _.state = R.DOCTYPE_DTD : _.state = R.TEXT;
              continue;
            case R.CDATA:
              q === "]" ? _.state = R.CDATA_ENDING : _.cdata += q;
              continue;
            case R.CDATA_ENDING:
              q === "]" ? _.state = R.CDATA_ENDING_2 : (_.cdata += "]" + q, _.state = R.CDATA);
              continue;
            case R.CDATA_ENDING_2:
              q === ">" ? (_.cdata && xe(_, "oncdata", _.cdata), xe(_, "onclosecdata"), _.cdata = "", _.state = R.TEXT) : q === "]" ? _.cdata += "]" : (_.cdata += "]]" + q, _.state = R.CDATA);
              continue;
            case R.PROC_INST:
              q === "?" ? _.state = R.PROC_INST_ENDING : z(q) ? _.state = R.PROC_INST_BODY : _.procInstName += q;
              continue;
            case R.PROC_INST_BODY:
              if (!_.procInstBody && z(q))
                continue;
              q === "?" ? _.state = R.PROC_INST_ENDING : _.procInstBody += q;
              continue;
            case R.PROC_INST_ENDING:
              q === ">" ? (xe(_, "onprocessinginstruction", {
                name: _.procInstName,
                body: _.procInstBody
              }), _.procInstName = _.procInstBody = "", _.state = R.TEXT) : (_.procInstBody += "?" + q, _.state = R.PROC_INST_BODY);
              continue;
            case R.OPEN_TAG:
              G(Ae, q) ? _.tagName += q : (qe(_), q === ">" ? yt(_) : q === "/" ? _.state = R.OPEN_TAG_SLASH : (z(q) || ve(_, "Invalid character in tag name"), _.state = R.ATTRIB));
              continue;
            case R.OPEN_TAG_SLASH:
              q === ">" ? (yt(_, !0), Ct(_)) : (ve(_, "Forward-slash in opening tag not followed by >"), _.state = R.ATTRIB);
              continue;
            case R.ATTRIB:
              if (z(q))
                continue;
              q === ">" ? yt(_) : q === "/" ? _.state = R.OPEN_TAG_SLASH : G(Re, q) ? (_.attribName = q, _.attribValue = "", _.state = R.ATTRIB_NAME) : ve(_, "Invalid attribute name");
              continue;
            case R.ATTRIB_NAME:
              q === "=" ? _.state = R.ATTRIB_VALUE : q === ">" ? (ve(_, "Attribute without value"), _.attribValue = _.attribName, st(_), yt(_)) : z(q) ? _.state = R.ATTRIB_NAME_SAW_WHITE : G(Ae, q) ? _.attribName += q : ve(_, "Invalid attribute name");
              continue;
            case R.ATTRIB_NAME_SAW_WHITE:
              if (q === "=")
                _.state = R.ATTRIB_VALUE;
              else {
                if (z(q))
                  continue;
                ve(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", xe(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", q === ">" ? yt(_) : G(Re, q) ? (_.attribName = q, _.state = R.ATTRIB_NAME) : (ve(_, "Invalid attribute name"), _.state = R.ATTRIB);
              }
              continue;
            case R.ATTRIB_VALUE:
              if (z(q))
                continue;
              $(q) ? (_.q = q, _.state = R.ATTRIB_VALUE_QUOTED) : (_.opt.unquotedAttributeValues || Be(_, "Unquoted attribute value"), _.state = R.ATTRIB_VALUE_UNQUOTED, _.attribValue = q);
              continue;
            case R.ATTRIB_VALUE_QUOTED:
              if (q !== _.q) {
                q === "&" ? _.state = R.ATTRIB_VALUE_ENTITY_Q : _.attribValue += q;
                continue;
              }
              st(_), _.q = "", _.state = R.ATTRIB_VALUE_CLOSED;
              continue;
            case R.ATTRIB_VALUE_CLOSED:
              z(q) ? _.state = R.ATTRIB : q === ">" ? yt(_) : q === "/" ? _.state = R.OPEN_TAG_SLASH : G(Re, q) ? (ve(_, "No whitespace between attributes"), _.attribName = q, _.attribValue = "", _.state = R.ATTRIB_NAME) : ve(_, "Invalid attribute name");
              continue;
            case R.ATTRIB_VALUE_UNQUOTED:
              if (!H(q)) {
                q === "&" ? _.state = R.ATTRIB_VALUE_ENTITY_U : _.attribValue += q;
                continue;
              }
              st(_), q === ">" ? yt(_) : _.state = R.ATTRIB;
              continue;
            case R.CLOSE_TAG:
              if (_.tagName)
                q === ">" ? Ct(_) : G(Ae, q) ? _.tagName += q : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = R.SCRIPT) : (z(q) || ve(_, "Invalid tagname in closing tag"), _.state = R.CLOSE_TAG_SAW_WHITE);
              else {
                if (z(q))
                  continue;
                le(Re, q) ? _.script ? (_.script += "</" + q, _.state = R.SCRIPT) : ve(_, "Invalid tagname in closing tag.") : _.tagName = q;
              }
              continue;
            case R.CLOSE_TAG_SAW_WHITE:
              if (z(q))
                continue;
              q === ">" ? Ct(_) : ve(_, "Invalid characters in closing tag");
              continue;
            case R.TEXT_ENTITY:
            case R.ATTRIB_VALUE_ENTITY_Q:
            case R.ATTRIB_VALUE_ENTITY_U:
              var j, Z;
              switch (_.state) {
                case R.TEXT_ENTITY:
                  j = R.TEXT, Z = "textNode";
                  break;
                case R.ATTRIB_VALUE_ENTITY_Q:
                  j = R.ATTRIB_VALUE_QUOTED, Z = "attribValue";
                  break;
                case R.ATTRIB_VALUE_ENTITY_U:
                  j = R.ATTRIB_VALUE_UNQUOTED, Z = "attribValue";
                  break;
              }
              if (q === ";") {
                var ne = Dt(_);
                _.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(ne) ? (_.entity = "", _.state = j, _.write(ne)) : (_[Z] += ne, _.entity = "", _.state = j);
              } else G(_.entity.length ? Ve : Ke, q) ? _.entity += q : (ve(_, "Invalid character in entity name"), _[Z] += "&" + _.entity + q, _.entity = "", _.state = j);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && l(_), _;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var k = String.fromCharCode, _ = Math.floor, K = function() {
          var q = 16384, He = [], A, j, Z = -1, ne = arguments.length;
          if (!ne)
            return "";
          for (var se = ""; ++Z < ne; ) {
            var re = Number(arguments[Z]);
            if (!isFinite(re) || // `NaN`, `+Infinity`, or `-Infinity`
            re < 0 || // not a valid Unicode code point
            re > 1114111 || // not a valid Unicode code point
            _(re) !== re)
              throw RangeError("Invalid code point: " + re);
            re <= 65535 ? He.push(re) : (re -= 65536, A = (re >> 10) + 55296, j = re % 1024 + 56320, He.push(A, j)), (Z + 1 === ne || He.length > q) && (se += k.apply(null, He), He.length = 0);
          }
          return se;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: K,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = K;
      }();
    })(n);
  }(hu)), hu;
}
Bd();
const vt = "sclElements", Vo = "attachedFiles";
var ia = { exports: {} }, Fd = ia.exports, yu;
function Md() {
  return yu || (yu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(Fd, function() {
      var a = function(e, t) {
        return (a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, o) {
          r.__proto__ = o;
        } || function(r, o) {
          for (var s in o) Object.prototype.hasOwnProperty.call(o, s) && (r[s] = o[s]);
        })(e, t);
      }, u = function() {
        return (u = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++) for (var s in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
          return e;
        }).apply(this, arguments);
      };
      function l(e, t, r) {
        for (var o, s = 0, c = t.length; s < c; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Nd, m = Object.keys, O = Array.isArray;
      function C(e, t) {
        return typeof t != "object" || m(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var L = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function I(e, t) {
        return B.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(L(e))), (typeof Reflect > "u" ? m : Reflect.ownKeys)(t).forEach(function(r) {
          te(e, r, t[r]);
        });
      }
      var oe = Object.defineProperty;
      function te(e, t, r, o) {
        oe(e, t, C(r && I(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), te(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var Re = Object.getOwnPropertyDescriptor, Ae = [].slice;
      function Ke(e, t, r) {
        return Ae.call(e, t, r);
      }
      function Ve(e, t) {
        return t(e);
      }
      function z(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function $(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function H(e, t) {
        if (typeof t == "string" && I(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = H(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var f = t.indexOf(".");
        if (f !== -1) {
          var d = e[t.substr(0, f)];
          return d == null ? void 0 : H(d, t.substr(f + 1));
        }
      }
      function G(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          z(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) G(e, t[o], r[o]);
        } else {
          var c, f, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (f = t.substr(d + 1)) === "" ? r === void 0 ? O(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : G(d = !(d = e[c]) || !I(e, c) ? e[c] = {} : d, f, r)) : r === void 0 ? O(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function le(e) {
        var t, r = {};
        for (t in e) I(e, t) && (r[t] = e[t]);
        return r;
      }
      var R = [].concat;
      function ye(e) {
        return R.apply([], e);
      }
      var Ie = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ye([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), Pe = new Set(Ie.map(function(e) {
        return h[e];
      })), xe = null;
      function ke(e) {
        return xe = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = xe.get(r);
          if (o) return o;
          if (O(r)) {
            o = [], xe.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (Pe.has(r.constructor)) o = r;
          else {
            var f, d = L(r);
            for (f in o = d === Object.prototype ? {} : Object.create(d), xe.set(r, o), r) I(r, f) && (o[f] = t(r[f]));
          }
          return o;
        }(e), xe = null, e;
      }
      var it = {}.toString;
      function Be(e) {
        return it.call(e).slice(8, -1);
      }
      var Ne = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ve = typeof Ne == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ne]) && t.apply(e);
      } : function() {
        return null;
      };
      function qe(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var ht = {};
      function st(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (O(e)) return e.slice();
          if (this === ht && typeof e == "string") return [e];
          if (s = ve(e)) {
            for (r = []; !(o = s.next()).done; ) r.push(o.value);
            return r;
          }
          if (e == null) return [e];
          if (typeof (t = e.length) != "number") return [e];
          for (r = new Array(t); t--; ) r[t] = e[t];
          return r;
        }
        for (t = arguments.length, r = new Array(t); t--; ) r[t] = arguments[t];
        return r;
      }
      var yt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Se = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], pt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Se), Ct = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Dt(e, t) {
        this.name = e, this.message = t;
      }
      function Nn(e, t) {
        return e + ". Errors: " + Object.keys(t).map(function(r) {
          return t[r].toString();
        }).filter(function(r, o, s) {
          return s.indexOf(r) === o;
        }).join(`
`);
      }
      function tn(e, t, r, o) {
        this.failures = t, this.failedKeys = o, this.successCount = r, this.message = Nn(e, t);
      }
      function wt(e, t) {
        this.name = "BulkError", this.failures = Object.keys(t).map(function(r) {
          return t[r];
        }), this.failuresByPos = t, this.message = Nn(e, this.failures);
      }
      de(Dt).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(tn).from(Dt), de(wt).from(Dt);
      var k = pt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = Dt, K = pt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Ct[t] || r, this.inner = null);
        }
        return de(o).from(_), e[t] = o, e;
      }, {});
      K.Syntax = SyntaxError, K.Type = TypeError, K.Range = RangeError;
      var q = Se.reduce(function(e, t) {
        return e[t + "Error"] = K[t], e;
      }, {}), He = pt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = K[t]), e;
      }, {});
      function A() {
      }
      function j(e) {
        return e;
      }
      function Z(e, t) {
        return e == null || e === j ? t : function(r) {
          return t(e(r));
        };
      }
      function ne(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function se(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? ne(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? ne(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function re(e, t) {
        return e === A ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? ne(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? ne(o, this.onerror) : o);
        };
      }
      function fe(e, t) {
        return e === A ? t : function(r) {
          var o = e.apply(this, arguments);
          C(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ne(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? ne(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : C(o, r);
        };
      }
      function pe(e, t) {
        return e === A ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ae(e, t) {
        return e === A ? t : function() {
          var r = e.apply(this, arguments);
          if (r && typeof r.then == "function") {
            for (var o = this, s = arguments.length, c = new Array(s); s--; ) c[s] = arguments[s];
            return r.then(function() {
              return t.apply(o, c);
            });
          }
          return t.apply(this, arguments);
        };
      }
      He.ModifyError = tn, He.DexieError = Dt, He.BulkError = wt;
      var ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Te(e) {
        ie = e;
      }
      var me = {}, Oe = 100, Ie = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, L(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, L(t), e];
      }(), Se = Ie[0], pt = Ie[1], Ie = Ie[2], pt = pt && pt.then, $e = Se && Se.constructor, We = !!Ie, ct = function(e, t) {
        nn.push([e, t]), Ot && (queueMicrotask(rs), Ot = !1);
      }, gt = !0, Ot = !0, lt = [], $t = [], In = j, tt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ee = tt, nn = [], Ht = 0, Fn = [];
      function Q(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = ee;
        if (typeof e != "function") {
          if (e !== me) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Tr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var f = o._lib && sn();
                c && typeof c.then == "function" ? r(o, function(d, y) {
                  c instanceof Q ? c._then(d, y) : c.then(d, y);
                }) : (o._state = !0, o._value = c, Ti(o)), f && an();
              }
            }, Tr.bind(null, o));
          } catch (c) {
            Tr(o, c);
          }
        }(this, e);
      }
      var Er = { get: function() {
        var e = ee, t = Un;
        function r(o, s) {
          var c = this, f = !e.global && (e !== ee || t !== Un), d = f && !Rt(), y = new Q(function(g, w) {
            Or(c, new Ei(Si(o, e, f, d), Si(s, e, f, d), g, w, e));
          });
          return this._consoleTask && (y._consoleTask = this._consoleTask), y;
        }
        return r.prototype = me, r;
      }, set: function(e) {
        te(this, "then", e && e.prototype === me ? Er : { get: function() {
          return e;
        }, set: Er.set });
      } };
      function Ei(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function Tr(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && sn(), t = In(t), e._state = !1, e._value = t, o = e, lt.some(function(s) {
          return s._value === o._value;
        }) || lt.push(o), Ti(e), r && an());
      }
      function Ti(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) Or(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ht === 0 && (++Ht, ct(function() {
          --Ht == 0 && Sr();
        }, []));
      }
      function Or(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ht, ct(ns, [r, e, t]);
        } else e._listeners.push(t);
      }
      function ns(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = ie && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var f = lt.length; f; ) if (lt[--f]._value === c._value) return lt.splice(f, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Ht == 0 && Sr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function rs() {
        Wt(tt, function() {
          sn() && an();
        });
      }
      function sn() {
        var e = gt;
        return Ot = gt = !1, e;
      }
      function an() {
        var e, t, r;
        do
          for (; 0 < nn.length; ) for (e = nn, nn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < nn.length);
        Ot = gt = !0;
      }
      function Sr() {
        var e = lt;
        lt = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Fn.slice(0), r = t.length; r; ) t[--r]();
      }
      function Mn(e) {
        return new Q(me, !1, e);
      }
      function je(e, t) {
        var r = ee;
        return function() {
          var o = sn(), s = ee;
          try {
            return Kt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Kt(s, !1), o && an();
          }
        };
      }
      X(Q.prototype, { then: Er, _then: function(e, t) {
        Or(this, new Ei(null, null, e, t, ee));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Mn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Mn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return Q.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return Q.resolve(e()).then(function() {
            return Mn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new Q(function(o, s) {
          var c = setTimeout(function() {
            return s(new K.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && te(Q.prototype, Symbol.toStringTag, "Dexie.Promise"), tt.env = Oi(), X(Q, { all: function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return Q.resolve(s).then(function(f) {
              e[c] = f, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof Q ? e : e && typeof e.then == "function" ? new Q(function(t, r) {
          e.then(t, r);
        }) : new Q(me, !0, e);
      }, reject: Mn, race: function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t, r) {
          e.map(function(o) {
            return Q.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return ee;
      }, set: function(e) {
        return ee = e;
      } }, totalEchoes: { get: function() {
        return Un;
      } }, newPSD: It, usePSD: Wt, scheduler: { get: function() {
        return ct;
      }, set: function(e) {
        ct = e;
      } }, rejectionMapper: { get: function() {
        return In;
      }, set: function(e) {
        In = e;
      } }, follow: function(e, t) {
        return new Q(function(r, o) {
          return It(function(s, c) {
            var f = ee;
            f.unhandleds = [], f.onunhandled = c, f.finalize = ne(function() {
              var d, y = this;
              d = function() {
                y.unhandleds.length === 0 ? s() : c(y.unhandleds[0]);
              }, Fn.push(function g() {
                d(), Fn.splice(Fn.indexOf(g), 1);
              }), ++Ht, ct(function() {
                --Ht == 0 && Sr();
              }, []);
            }, f.finalize), e();
          }, t, r, o);
        });
      } }), $e && ($e.allSettled && te(Q, "allSettled", function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return Q.resolve(s).then(function(f) {
              return o[c] = { status: "fulfilled", value: f };
            }, function(f) {
              return o[c] = { status: "rejected", reason: f };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), $e.any && typeof AggregateError < "u" && te(Q, "any", function() {
        var e = st.apply(null, arguments).map(Vn);
        return new Q(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, f) {
            return Q.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              s[f] = d, --o || r(new AggregateError(s));
            });
          });
        });
      }), $e.withResolvers && (Q.withResolvers = $e.withResolvers));
      var Ge = { awaits: 0, echoes: 0, id: 0 }, is = 0, qn = [], Ln = 0, Un = 0, os = 0;
      function It(e, t, r, o) {
        var s = ee, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++os, tt.env, c.env = We ? { Promise: Q, PromiseProp: { value: Q, configurable: !0, writable: !0 }, all: Q.all, race: Q.race, allSettled: Q.allSettled, any: Q.any, resolve: Q.resolve, reject: Q.reject } : {}, t && C(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Wt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function un() {
        return Ge.id || (Ge.id = ++is), ++Ge.awaits, Ge.echoes += Oe, Ge.id;
      }
      function Rt() {
        return !!Ge.awaits && (--Ge.awaits == 0 && (Ge.id = 0), Ge.echoes = Ge.awaits * Oe, !0);
      }
      function Vn(e) {
        return Ge.echoes && e && e.constructor === $e ? (un(), e.then(function(t) {
          return Rt(), t;
        }, function(t) {
          return Rt(), Le(t);
        })) : e;
      }
      function ss() {
        var e = qn[qn.length - 1];
        qn.pop(), Kt(e, !1);
      }
      function Kt(e, t) {
        var r, o = ee;
        (t ? !Ge.echoes || Ln++ && e === ee : !Ln || --Ln && e === ee) || queueMicrotask(t ? (function(s) {
          ++Un, Ge.echoes && --Ge.echoes != 0 || (Ge.echoes = Ge.awaits = Ge.id = 0), qn.push(ee), Kt(s, !0);
        }).bind(null, e) : ss), e !== ee && (ee = e, o === tt && (tt.env = Oi()), We && (r = tt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Oi() {
        var e = h.Promise;
        return We ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Wt(e, t, r, o, s) {
        var c = ee;
        try {
          return Kt(e, !0), t(r, o, s);
        } finally {
          Kt(c, !1);
        }
      }
      function Si(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ee;
          r && un(), Kt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Kt(s, !1), o && queueMicrotask(Rt);
          }
        };
      }
      function Ar(e) {
        Promise === $e && Ge.echoes === 0 ? Ln === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + pt).indexOf("[native code]") === -1 && (un = Rt = A);
      var Le = Q.reject, Gt = "￿", At = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Ai = "String expected.", cn = [], $n = "__dbnames", kr = "readonly", Pr = "readwrite";
      function Yt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var ki = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Hn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ke(t))[e], t;
        };
      }
      function Pi() {
        throw K.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function be(e, t) {
        try {
          var r = Ci(e), o = Ci(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var f = s.length, d = c.length, y = f < d ? f : d, g = 0; g < y; ++g) if (s[g] !== c[g]) return s[g] < c[g] ? -1 : 1;
                return f === d ? 0 : f < d ? -1 : 1;
              }(Di(e), Di(t));
            case "Array":
              return function(s, c) {
                for (var f = s.length, d = c.length, y = f < d ? f : d, g = 0; g < y; ++g) {
                  var w = be(s[g], c[g]);
                  if (w !== 0) return w;
                }
                return f === d ? 0 : f < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Ci(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Be(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Di(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Wn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var Ni = (Ce.prototype._trans = function(e, t, r) {
        var o = this._tx || ee.trans, s = this.name, c = ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function f(g, w, p) {
          if (!p.schema[s]) throw new K.NotFound("Table " + s + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = sn();
        try {
          var y = o && o.db._novip === this.db._novip ? o === ee.trans ? o._promise(e, f, r) : It(function() {
            return o._promise(e, f, r);
          }, { trans: o, transless: ee.transless || ee }) : function g(w, p, T, v) {
            if (w.idbdb && (w._state.openComplete || ee.letThrough || w._vip)) {
              var b = w._createTransaction(p, T, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return g(w, p, T, v);
                })) : Le(E);
              }
              return b._promise(p, function(E, x) {
                return It(function() {
                  return ee.trans = b, v(E, x, b);
                });
              }).then(function(E) {
                if (p === "readwrite") try {
                  b.idbtrans.commit();
                } catch {
                }
                return p === "readonly" ? E : b._completion.then(function() {
                  return E;
                });
              });
            }
            if (w._state.openComplete) return Le(new K.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return Le(new K.DatabaseClosed());
              w.open().catch(A);
            }
            return w._state.dbReadyPromise.then(function() {
              return g(w, p, T, v);
            });
          }(this.db, e, [this.name], f);
          return c && (y._consoleTask = c, y = y.catch(function(g) {
            return console.trace(g), Le(g);
          })), y;
        } finally {
          d && an();
        }
      }, Ce.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Le(new K.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ce.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (O(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = m(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(g) {
            return 0 <= d.keyPath.indexOf(g);
          })) {
            for (var y = 0; y < t.length; ++y) if (t.indexOf(d.keyPath[y]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, y) {
          return d.keyPath.length - y.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Gt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(y) {
            return e[y];
          }));
        }
        !r && ie && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(d, y) {
          return be(d, y) === 0;
        }
        var f = t.reduce(function(p, y) {
          var g = p[0], w = p[1], p = o[y], T = e[y];
          return [g || p, g || !p ? Yt(w, p && p.multi ? function(v) {
            return v = H(v, y), O(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, H(v, y));
          }) : w];
        }, [null, null]), c = f[0], f = f[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(f) : r ? this.filter(f) : this.where(t).equals("");
      }, Ce.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ce.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ce.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ce.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ce.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ce.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ce.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ce.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, O(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ce.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ce.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Pi && (function(y, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function w() {
            this.constructor = y;
          }
          a(y, g), y.prototype = g === null ? Object.create(g) : (w.prototype = g.prototype, new w());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), f = e.prototype; f; f = L(f)) Object.getOwnPropertyNames(f).forEach(function(y) {
          return c.add(y);
        });
        function d(y) {
          if (!y) return y;
          var g, w = Object.create(e.prototype);
          for (g in y) if (!c.has(g)) try {
            w[g] = y[g];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Ce.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          C(this, e);
        });
      }, Ce.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [f] });
        }).then(function(d) {
          return d.numFailures ? Q.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            G(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ce.prototype.update = function(e, t) {
        return typeof e != "object" || O(e) ? this.where(":id").equals(e).modify(t) : (e = H(e, this.schema.primKey.keyPath), e === void 0 ? Le(new K.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ce.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, f = e;
        return c && s && (f = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [f], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? Q.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            G(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ce.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Wn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? Q.reject(o.failures[0]) : void 0;
          });
        });
      }, Ce.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: ki }).then(function(r) {
            return Wn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? Q.reject(t.failures[0]) : void 0;
        });
      }, Ce.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, Ce.prototype.bulkAdd = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: f, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(y, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(f) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var y = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: f, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(y, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(f) {
          return f.key;
        }), s = e.map(function(f) {
          return f.changes;
        }), c = [];
        return this._trans("readwrite", function(f) {
          return r.getMany({ trans: f, keys: o, cache: "clone" }).then(function(d) {
            var y = [], g = [];
            e.forEach(function(p, T) {
              var v = p.key, b = p.changes, E = d[T];
              if (E) {
                for (var x = 0, S = Object.keys(b); x < S.length; x++) {
                  var P = S[x], D = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (be(D, v) !== 0) throw new K.Constraint("Cannot update primary key in bulkUpdate()");
                  } else G(E, P, D);
                }
                c.push(T), y.push(v), g.push(E);
              }
            });
            var w = y.length;
            return r.mutate({ trans: f, type: "put", keys: y, values: g, updates: { keys: o, changeSpecs: s } }).then(function(p) {
              var T = p.numFailures, v = p.failures;
              if (T === 0) return w;
              for (var b = 0, E = Object.keys(v); b < E.length; b++) {
                var x, S = E[b], P = c[Number(S)];
                P != null && (x = v[S], delete v[S], v[P] = x);
              }
              throw new wt("".concat(t.name, ".bulkUpdate(): ").concat(T, " of ").concat(w, " operations failed"), v);
            });
          });
        });
      }, Ce.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Wn(t, e, s);
          });
        }).then(function(f) {
          var s = f.numFailures, c = f.lastResult, f = f.failures;
          if (s === 0) return c;
          throw new wt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), f);
        });
      }, Ce);
      function Ce() {
      }
      function gn(e) {
        function t(f, d) {
          if (d) {
            for (var y = arguments.length, g = new Array(y - 1); --y; ) g[y - 1] = arguments[y];
            return r[f].subscribe.apply(null, g), e;
          }
          if (typeof f == "string") return r[f];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(f, d, y) {
          if (typeof f != "object") {
            var g;
            d = d || pe;
            var w = { subscribers: [], fire: y = y || A, subscribe: function(p) {
              w.subscribers.indexOf(p) === -1 && (w.subscribers.push(p), w.fire = d(w.fire, p));
            }, unsubscribe: function(p) {
              w.subscribers = w.subscribers.filter(function(T) {
                return T !== p;
              }), w.fire = w.subscribers.reduce(d, y);
            } };
            return r[f] = t[f] = w;
          }
          m(g = f).forEach(function(p) {
            var T = g[p];
            if (O(T)) c(p, g[p][0], g[p][1]);
            else {
              if (T !== "asap") throw new K.InvalidArgument("Invalid event config");
              var v = c(p, j, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                v.subscribers.forEach(function(x) {
                  $(function() {
                    x.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function bn(e, t) {
        return de(t).from({ prototype: e }), t;
      }
      function ln(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Cr(e, t) {
        e.filter = Yt(e.filter, t);
      }
      function Dr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Yt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Gn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new K.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function Ii(e, t, r) {
        var o = Gn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Yn(e, t, r, o) {
        var s = e.replayFilter ? Yt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, f = function(d, y, g) {
            var w, p;
            s && !s(y, g, function(T) {
              return y.stop(T);
            }, function(T) {
              return y.fail(T);
            }) || ((p = "" + (w = y.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(w)), I(c, p) || (c[p] = !0, t(d, y, g)));
          };
          return Promise.all([e.or._iterate(f, r), Ri(Ii(e, o, r), e.algorithm, f, !e.keysOnly && e.valueMapper)]);
        }
        return Ri(Ii(e, o, r), Yt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ri(e, t, r, o) {
        var s = je(o ? function(c, f, d) {
          return r(o(c), f, d);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var f = function() {
              return c.continue();
            };
            t && !t(c, function(d) {
              return f = d;
            }, function(d) {
              c.stop(d), f = A;
            }, function(d) {
              c.fail(d), f = A;
            }) || s(c.value, c, function(d) {
              return f = d;
            }), f();
          });
        });
      }
      var _n = (Ki.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (O(r)) return l(l([], O(e) ? e : [], !0), r).sort();
          if (typeof r == "number") return (Number(e) || 0) + r;
          if (typeof r == "bigint") try {
            return BigInt(e) + r;
          } catch {
            return BigInt(0) + r;
          }
          throw new TypeError("Invalid term ".concat(r));
        }
        if (t.remove !== void 0) {
          var o = t.remove;
          if (O(o)) return O(e) ? e.filter(function(s) {
            return !o.includes(s);
          }).sort() : [];
          if (typeof o == "number") return Number(e) - o;
          if (typeof o == "bigint") try {
            return BigInt(e) - o;
          } catch {
            return BigInt(0) - o;
          }
          throw new TypeError("Invalid subtrahend ".concat(o));
        }
        return r = (r = t.replacePrefix) === null || r === void 0 ? void 0 : r[0], r && typeof e == "string" && e.startsWith(r) ? t.replacePrefix[1] + e.substring(r.length) : e;
      }, Ki);
      function Ki(e) {
        this["@@propmod"] = e;
      }
      var as = (Ee.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Le.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Le.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Yt(t.algorithm, e);
      }, Ee.prototype._iterate = function(e, t) {
        return Yn(this._ctx, e, t, this._ctx.table.core);
      }, Ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && C(r, e), t._ctx = r, t;
      }, Ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Yn(t, e, r, t.table.core);
        });
      }, Ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (ln(o, !0)) return s.count({ trans: r, query: { index: Gn(o, s.schema), range: o.range } }).then(function(f) {
            return Math.min(f, o.limit);
          });
          var c = 0;
          return Yn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, Ee.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(y, g) {
          return g ? c(y[r[g]], g - 1) : y[o];
        }
        var f = this._ctx.dir === "next" ? 1 : -1;
        function d(y, g) {
          return be(c(y, s), c(g, s)) * f;
        }
        return this.toArray(function(y) {
          return y.sort(d);
        }).then(t);
      }, Ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && ln(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = Gn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var f = [];
          return Yn(o, function(d) {
            return f.push(d);
          }, r, o.table.core).then(function() {
            return f;
          });
        }, e);
      }, Ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, ln(t) ? Dr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Dr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Dr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, Ee.prototype.until = function(e, t) {
        return Cr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, Ee.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, Ee.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ee.prototype.filter = function(e) {
        var t;
        return Cr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Yt(t.isMatch, e), this;
      }, Ee.prototype.and = function(e) {
        return this.filter(e);
      }, Ee.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ee.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ee.prototype.desc = function() {
        return this.reverse();
      }, Ee.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, Ee.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ee.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, Ee.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Ee.prototype.primaryKeys = function(e) {
        var t = this._ctx;
        if (t.dir === "next" && ln(t, !0) && 0 < t.limit) return this._read(function(o) {
          var s = Gn(t, t.table.core.schema);
          return t.table.core.query({ trans: o, values: !1, limit: t.limit, query: { index: s, range: t.range } });
        }).then(function(o) {
          return o.result;
        }).then(e);
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.primaryKey);
        }).then(function() {
          return r;
        }).then(e);
      }, Ee.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ee.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, Ee.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ee.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Cr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = I(t, o);
          return t[o] = !0, !s;
        }), this;
      }, Ee.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, f;
          f = typeof e == "function" ? e : (s = m(e), c = s.length, function(S) {
            for (var P = !1, D = 0; D < c; ++D) {
              var N = s[D], F = e[N], V = H(S, N);
              F instanceof _n ? (G(S, N, F.execute(V)), P = !0) : V !== F && (G(S, N, F), P = !0);
            }
            return P;
          });
          var d = r.table.core, p = d.schema.primaryKey, y = p.outbound, g = p.extractKey, w = 200, p = t.db._options.modifyChunkSize;
          p && (w = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function T(S, N) {
            var D = N.failures, N = N.numFailures;
            b += S - N;
            for (var F = 0, V = m(D); F < V.length; F++) {
              var M = V[F];
              v.push(D[M]);
            }
          }
          var v = [], b = 0, E = [], x = e === ji;
          return t.clone().primaryKeys().then(function(S) {
            function P(N) {
              var F = Math.min(w, S.length - N), V = S.slice(N, N + F);
              return (x ? Promise.resolve([]) : d.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(M) {
                var U = [], Y = [], W = y ? [] : null, J = x ? V : [];
                if (!x) for (var he = 0; he < F; ++he) {
                  var we = M[he], ce = { value: ke(we), primKey: S[N + he] };
                  f.call(ce, ce.value, ce) !== !1 && (ce.value == null ? J.push(S[N + he]) : y || be(g(we), g(ce.value)) === 0 ? (Y.push(ce.value), y && W.push(S[N + he])) : (J.push(S[N + he]), U.push(ce.value)));
                }
                return Promise.resolve(0 < U.length && d.mutate({ trans: o, type: "add", values: U }).then(function(Fe) {
                  for (var ue in Fe.failures) J.splice(parseInt(ue), 1);
                  T(U.length, Fe);
                })).then(function() {
                  return (0 < Y.length || D && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: W, values: Y, criteria: D, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < N }).then(function(Fe) {
                    return T(Y.length, Fe);
                  });
                }).then(function() {
                  return (0 < J.length || D && x) && d.mutate({ trans: o, type: "delete", keys: J, criteria: D, isAdditionalChunk: 0 < N }).then(function(Fe) {
                    return Wn(r.table, J, Fe);
                  }).then(function(Fe) {
                    return T(J.length, Fe);
                  });
                }).then(function() {
                  return S.length > N + F && P(N + w);
                });
              });
            }
            var D = ln(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < v.length) throw new tn("Error modifying one or more objects", v, b, E);
              return S.length;
            });
          });
        });
      }, Ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ln(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(ji) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(y) {
              var d = y.failures, y = y.numFailures;
              if (y) throw new tn("Could not delete some values", Object.keys(d).map(function(g) {
                return d[g];
              }), c - y);
              return c - y;
            });
          });
        });
      }, Ee);
      function Ee() {
      }
      var ji = function(e, t) {
        return t.value = null;
      };
      function us(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function cs(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function at(e, t, r) {
        return e = e instanceof Fi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function fn(e) {
        return new e.Collection(e, function() {
          return Bi("");
        }).limit(0);
      }
      function Xn(e, t, r, o) {
        var s, c, f, d, y, g, w, p = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return at(e, Ai);
        function T(b) {
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, f = b === "next" ? us : cs;
          var E = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, S) {
            return f(x.lower, S.lower);
          });
          d = E.map(function(x) {
            return x.upper;
          }), y = E.map(function(x) {
            return x.lower;
          }), w = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return jt(d[0], y[p - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var v = 0;
        return e._addAlgorithm(function(b, E, x) {
          var S = b.key;
          if (typeof S != "string") return !1;
          var P = c(S);
          if (t(P, y, v)) return !0;
          for (var D = null, N = v; N < p; ++N) {
            var F = function(V, M, U, Y, W, J) {
              for (var he = Math.min(V.length, Y.length), we = -1, ce = 0; ce < he; ++ce) {
                var Fe = M[ce];
                if (Fe !== Y[ce]) return W(V[ce], U[ce]) < 0 ? V.substr(0, ce) + U[ce] + U.substr(ce + 1) : W(V[ce], Y[ce]) < 0 ? V.substr(0, ce) + Y[ce] + U.substr(ce + 1) : 0 <= we ? V.substr(0, we) + M[we] + U.substr(we + 1) : null;
                W(V[ce], Fe) < 0 && (we = ce);
              }
              return he < Y.length && J === "next" ? V + U.substr(V.length) : he < V.length && J === "prev" ? V.substr(0, U.length) : we < 0 ? null : V.substr(0, we) + Y[we] + U.substr(we + 1);
            }(S, P, d[N], y[N], f, g);
            F === null && D === null ? v = N + 1 : (D === null || 0 < f(D, F)) && (D = F);
          }
          return E(D !== null ? function() {
            b.continue(D + w);
          } : x), !1;
        }), e;
      }
      function jt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Bi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Fi = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? fn(this) : new this.Collection(this, function() {
            return jt(e, t, !r, !o);
          });
        } catch {
          return at(this, At);
        }
      }, Ye.prototype.equals = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return Bi(e);
        });
      }, Ye.prototype.above = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(e, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(e, void 0, !1);
        });
      }, Ye.prototype.below = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(void 0, e, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(e) {
        return e == null ? at(this, At) : new this.Collection(this, function() {
          return jt(void 0, e);
        });
      }, Ye.prototype.startsWith = function(e) {
        return typeof e != "string" ? at(this, Ai) : this.between(e, e + Gt, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Xn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ye.prototype.equalsIgnoreCase = function(e) {
        return Xn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var e = st.apply(ht, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = st.apply(ht, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ye.prototype.anyOf = function() {
        var e = this, t = st.apply(ht, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return at(this, At);
        }
        if (t.length === 0) return fn(this);
        var o = new this.Collection(this, function() {
          return jt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return o._addAlgorithm(function(c, f, d) {
          for (var y = c.key; 0 < r(y, t[s]); ) if (++s === t.length) return f(d), !1;
          return r(y, t[s]) === 0 || (f(function() {
            c.continue(t[s]);
          }), !1);
        }), o;
      }, Ye.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var e = st.apply(ht, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return at(this, At);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(S, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, f = this._min, d = this._max;
        if (S.length === 0) return fn(this);
        if (!S.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return at(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", K.InvalidArgument);
        var y = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, w, p = s;
        function T(P, D) {
          return p(P[0], D[0]);
        }
        try {
          (w = S.reduce(function(P, D) {
            for (var N = 0, F = P.length; N < F; ++N) {
              var V = P[N];
              if (o(D[0], V[1]) < 0 && 0 < o(D[1], V[0])) {
                V[0] = f(V[0], D[0]), V[1] = d(V[1], D[1]);
                break;
              }
            }
            return N === F && P.push(D), P;
          }, [])).sort(T);
        } catch {
          return at(this, At);
        }
        var v = 0, b = g ? function(P) {
          return 0 < s(P, w[v][1]);
        } : function(P) {
          return 0 <= s(P, w[v][1]);
        }, E = y ? function(P) {
          return 0 < c(P, w[v][0]);
        } : function(P) {
          return 0 <= c(P, w[v][0]);
        }, x = b, S = new this.Collection(this, function() {
          return jt(w[0][0], w[w.length - 1][1], !y, !g);
        });
        return S._ondirectionchange = function(P) {
          p = P === "next" ? (x = b, s) : (x = E, c), w.sort(T);
        }, S._addAlgorithm(function(P, D, N) {
          for (var F, V = P.key; x(V); ) if (++v === w.length) return D(N), !1;
          return !b(F = V) && !E(F) || (r._cmp(V, w[v][1]) === 0 || r._cmp(V, w[v][0]) === 0 || D(function() {
            p === s ? P.continue(w[v][0]) : P.continue(w[v][1]);
          }), !1);
        }), S;
      }, Ye.prototype.startsWithAnyOf = function() {
        var e = st.apply(ht, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? fn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : at(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function xt(e) {
        return je(function(t) {
          return wn(t), e(t.target.error), !1;
        });
      }
      function wn(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var xn = "storagemutated", Nr = "x-storagemutated-1", Bt = gn(null, xn), ls = (Et.prototype._lock = function() {
        return z(!ee.global), ++this._reculock, this._reculock !== 1 || ee.global || (ee.lockOwnerFor = this), this;
      }, Et.prototype._unlock = function() {
        if (z(!ee.global), --this._reculock == 0) for (ee.global || (ee.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Wt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Et.prototype._locked = function() {
        return this._reculock && ee.lockOwnerFor !== this;
      }, Et.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (z(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new K.DatabaseClosed(o);
          case "MissingAPIError":
            throw new K.MissingAPI(o.message, o);
          default:
            throw new K.OpenFailed(o);
        }
        if (!this.active) throw new K.TransactionInactive();
        return z(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(s) {
          wn(s), t._reject(e.error);
        }), e.onabort = je(function(s) {
          wn(s), t.active && t._reject(new K.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = je(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && Bt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Et.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Le(new K.ReadOnly("Transaction is readonly"));
        if (!this.active) return Le(new K.TransactionInactive());
        if (this._locked()) return new Q(function(c, f) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, f);
          }, ee]);
        });
        if (r) return It(function() {
          var c = new Q(function(f, d) {
            o._lock();
            var y = t(f, d, o);
            y && y.then && y.then(f, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new Q(function(c, f) {
          var d = t(c, f, o);
          d && d.then && d.then(c, f);
        });
        return s._lib = !0, s;
      }, Et.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Et.prototype.waitFor = function(e) {
        var t, r = this._root(), o = Q.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new Q(function(c, f) {
          o.then(function(d) {
            return r._waitingQueue.push(je(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(je(f.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, Et.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new K.Abort()));
      }, Et.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (I(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new K.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, Et);
      function Et() {
      }
      function Ir(e, t, r, o, s, c, f, d) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !f ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + Mi(t), type: d };
      }
      function Mi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Rr(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, f) {
          return f = o(c, f), f && (s[f[0]] = f[1]), s;
        }, {})) };
        var o;
      }
      var En = function(e) {
        try {
          return e.only([[]]), En = function() {
            return [[]];
          }, [[]];
        } catch {
          return En = function() {
            return Gt;
          }, Gt;
        }
      };
      function Kr(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (t = e).split(".").length === 1 ? function(r) {
          return r[t];
        } : function(r) {
          return H(r, t);
        } : function(r) {
          return H(r, e);
        };
        var t;
      }
      function qi(e) {
        return [].slice.call(e);
      }
      var fs = 0;
      function Tn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ds(e, t, y) {
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = x.lower, b = x.upper, E = x.lowerOpen, x = x.upperOpen;
          return v === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(v, !!E) : t.bound(v, b, !!E, !!x);
        }
        function s(T) {
          var v, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var x = E.trans, S = E.type, P = E.keys, D = E.values, N = E.range;
            return new Promise(function(F, V) {
              F = je(F);
              var M = x.objectStore(b), U = M.keyPath == null, Y = S === "put" || S === "add";
              if (!Y && S !== "delete" && S !== "deleteRange") throw new Error("Invalid operation type: " + S);
              var W, J = (P || D || { length: 1 }).length;
              if (P && D && P.length !== D.length) throw new Error("Given keys array must have same length as given values array.");
              if (J === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(nt) {
                ++Fe, wn(nt);
              }
              var we = [], ce = [], Fe = 0;
              if (S === "deleteRange") {
                if (N.type === 4) return F({ numFailures: Fe, failures: ce, results: [], lastResult: void 0 });
                N.type === 3 ? we.push(W = M.clear()) : we.push(W = M.delete(o(N)));
              } else {
                var U = Y ? U ? [D, P] : [D, null] : [P, null], ue = U[0], Qe = U[1];
                if (Y) for (var Je = 0; Je < J; ++Je) we.push(W = Qe && Qe[Je] !== void 0 ? M[S](ue[Je], Qe[Je]) : M[S](ue[Je])), W.onerror = he;
                else for (Je = 0; Je < J; ++Je) we.push(W = M[S](ue[Je])), W.onerror = he;
              }
              function ar(nt) {
                nt = nt.target.result, we.forEach(function(Qt, Zr) {
                  return Qt.error != null && (ce[Zr] = Qt.error);
                }), F({ numFailures: Fe, failures: ce, results: S === "delete" ? P : we.map(function(Qt) {
                  return Qt.result;
                }), lastResult: nt });
              }
              W.onerror = function(nt) {
                he(nt), ar(nt);
              }, W.onsuccess = ar;
            });
          }, getMany: function(E) {
            var x = E.trans, S = E.keys;
            return new Promise(function(P, D) {
              P = je(P);
              for (var N, F = x.objectStore(b), V = S.length, M = new Array(V), U = 0, Y = 0, W = function(we) {
                we = we.target, M[we._pos] = we.result, ++Y === U && P(M);
              }, J = xt(D), he = 0; he < V; ++he) S[he] != null && ((N = F.get(S[he]))._pos = he, N.onsuccess = W, N.onerror = J, ++U);
              U === 0 && P(M);
            });
          }, get: function(E) {
            var x = E.trans, S = E.key;
            return new Promise(function(P, D) {
              P = je(P);
              var N = x.objectStore(b).get(S);
              N.onsuccess = function(F) {
                return P(F.target.result);
              }, N.onerror = xt(D);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, S) {
              x = je(x);
              var P, D, N, U = E.trans, F = E.values, V = E.limit, W = E.query, M = V === 1 / 0 ? void 0 : V, Y = W.index, W = W.range, U = U.objectStore(b), Y = Y.isPrimaryKey ? U : U.index(Y.name), W = o(W);
              if (V === 0) return x({ result: [] });
              v ? ((M = F ? Y.getAll(W, M) : Y.getAllKeys(W, M)).onsuccess = function(J) {
                return x({ result: J.target.result });
              }, M.onerror = xt(S)) : (P = 0, D = !F && "openKeyCursor" in Y ? Y.openKeyCursor(W) : Y.openCursor(W), N = [], D.onsuccess = function(J) {
                var he = D.result;
                return he ? (N.push(F ? he.value : he.primaryKey), ++P === V ? x({ result: N }) : void he.continue()) : x({ result: N });
              }, D.onerror = xt(S));
            });
          }), openCursor: function(E) {
            var x = E.trans, S = E.values, P = E.query, D = E.reverse, N = E.unique;
            return new Promise(function(F, V) {
              F = je(F);
              var Y = P.index, M = P.range, U = x.objectStore(b), U = Y.isPrimaryKey ? U : U.index(Y.name), Y = D ? N ? "prevunique" : "prev" : N ? "nextunique" : "next", W = !S && "openKeyCursor" in U ? U.openKeyCursor(o(M), Y) : U.openCursor(o(M), Y);
              W.onerror = xt(V), W.onsuccess = je(function(J) {
                var he, we, ce, Fe, ue = W.result;
                ue ? (ue.___id = ++fs, ue.done = !1, he = ue.continue.bind(ue), we = (we = ue.continuePrimaryKey) && we.bind(ue), ce = ue.advance.bind(ue), Fe = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = x, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = je(V), ue.next = function() {
                  var Qe = this, Je = 1;
                  return this.start(function() {
                    return Je-- ? Qe.continue() : Qe.stop();
                  }).then(function() {
                    return Qe;
                  });
                }, ue.start = function(Qe) {
                  function Je() {
                    if (W.result) try {
                      Qe();
                    } catch (nt) {
                      ue.fail(nt);
                    }
                    else ue.done = !0, ue.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ue.stop();
                  }
                  var ar = new Promise(function(nt, Qt) {
                    nt = je(nt), W.onerror = xt(Qt), ue.fail = Qt, ue.stop = function(Zr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Fe, nt(Zr);
                    };
                  });
                  return W.onsuccess = je(function(nt) {
                    W.onsuccess = Je, Je();
                  }), ue.continue = he, ue.continuePrimaryKey = we, ue.advance = ce, Je(), ar;
                }, F(ue)) : F(null);
              }, V);
            });
          }, count: function(E) {
            var x = E.query, S = E.trans, P = x.index, D = x.range;
            return new Promise(function(N, F) {
              var V = S.objectStore(b), M = P.isPrimaryKey ? V : V.index(P.name), V = o(D), M = V ? M.count(V) : M.count();
              M.onsuccess = je(function(U) {
                return N(U.target.result);
              }), M.onerror = xt(F);
            });
          } };
        }
        var c, f, d, w = (f = y, d = qi((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(T) {
          return f.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = O(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Kr(v) }, indexes: qi(T.indexNames).map(function(S) {
            return T.index(S);
          }).map(function(N) {
            var P = N.name, D = N.unique, F = N.multiEntry, N = N.keyPath, F = { name: P, compound: O(N), keyPath: N, unique: D, multiEntry: F, extractKey: Kr(N) };
            return E[Tn(N)] = F;
          }), getIndexByKeyPath: function(S) {
            return E[Tn(S)];
          } };
          return E[":id"] = x.primaryKey, v != null && (E[Tn(v)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < d.length && "getAll" in f.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), y = w.schema, g = w.hasGetAll, w = y.tables.map(s), p = {};
        return w.forEach(function(T) {
          return p[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!p[T]) throw new Error("Table '".concat(T, "' not found"));
          return p[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: En(t), schema: y };
      }
      function hs(e, t, r, o) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = ds(t, s, o), e.dbcore.reduce(function(c, f) {
          return f = f.create, u(u({}, c), f(c));
        }, o)) };
      }
      function zn(e, o) {
        var r = o.db, o = hs(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(f) {
            return f.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Qn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(f) {
            var d = function y(g, w) {
              return Re(g, w) || (g = L(g)) && y(g, w);
            }(f, s);
            (!d || "value" in d && d.value === void 0) && (f === e.Transaction.prototype || f instanceof e.Transaction ? te(f, s, { get: function() {
              return this.table(s);
            }, set: function(y) {
              oe(this, s, { value: y, writable: !0, configurable: !0, enumerable: !0 });
            } }) : f[s] = new e.Table(s, c));
          });
        });
      }
      function jr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function ps(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function ms(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Rr("$meta", Ui("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var f = c._reject.bind(c), d = ee.transless || ee;
        It(function() {
          return ee.trans = c, ee.transless = d, t !== 0 ? (zn(e, r), g = t, ((y = c).storeNames.includes("$meta") ? y.table("$meta").get("version").then(function(w) {
            return w ?? g;
          }) : Q.resolve(g)).then(function(w) {
            return T = w, v = c, b = r, E = [], w = (p = e)._versions, x = p._dbSchema = Zn(0, p.idbdb, b), (w = w.filter(function(S) {
              return S._cfg.version >= T;
            })).length !== 0 ? (w.forEach(function(S) {
              E.push(function() {
                var P = x, D = S._cfg.dbschema;
                er(p, P, b), er(p, D, b), x = p._dbSchema = D;
                var N = Br(P, D);
                N.add.forEach(function(Y) {
                  Fr(b, Y[0], Y[1].primKey, Y[1].indexes);
                }), N.change.forEach(function(Y) {
                  if (Y.recreate) throw new K.Upgrade("Not yet support for changing primary key");
                  var W = b.objectStore(Y.name);
                  Y.add.forEach(function(J) {
                    return Jn(W, J);
                  }), Y.change.forEach(function(J) {
                    W.deleteIndex(J.name), Jn(W, J);
                  }), Y.del.forEach(function(J) {
                    return W.deleteIndex(J);
                  });
                });
                var F = S._cfg.contentUpgrade;
                if (F && S._cfg.version > T) {
                  zn(p, b), v._memoizedTables = {};
                  var V = le(D);
                  N.del.forEach(function(Y) {
                    V[Y] = P[Y];
                  }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], m(V), V), v.schema = V;
                  var M, U = yt(F);
                  return U && un(), N = Q.follow(function() {
                    var Y;
                    (M = F(v)) && U && (Y = Rt.bind(null, null), M.then(Y, Y));
                  }), M && typeof M.then == "function" ? Q.resolve(M) : N.then(function() {
                    return M;
                  });
                }
              }), E.push(function(P) {
                var D, N, F = S._cfg.dbschema;
                D = F, N = P, [].slice.call(N.db.objectStoreNames).forEach(function(V) {
                  return D[V] == null && N.db.deleteObjectStore(V);
                }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), v.schema = p._dbSchema;
              }), E.push(function(P) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === S._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(D) {
                  return D !== "$meta";
                })) : P.objectStore("$meta").put(S._cfg.version, "version"));
              });
            }), function S() {
              return E.length ? Q.resolve(E.shift()(v.idbtrans)).then(S) : Q.resolve();
            }().then(function() {
              Li(x, b);
            })) : Q.resolve();
            var p, T, v, b, E, x;
          }).catch(f)) : (m(s).forEach(function(w) {
            Fr(r, w, s[w].primKey, s[w].indexes);
          }), zn(e, r), void Q.follow(function() {
            return e.on.populate.fire(c);
          }).catch(f));
          var y, g;
        });
      }
      function ys(e, t) {
        Li(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Zn(0, e.idbdb, t);
        er(e, e._dbSchema, t);
        for (var o = 0, s = Br(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(f) {
            if (f.change.length || f.recreate) return console.warn("Unable to patch indexes of table ".concat(f.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(f.name);
            f.add.forEach(function(y) {
              ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(f.name, ".").concat(y.src)), Jn(d, y);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Br(e, t) {
        var r, o = { del: [], add: [], change: [] };
        for (r in e) t[r] || o.del.push(r);
        for (r in t) {
          var s = e[r], c = t[r];
          if (s) {
            var f = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) f.recreate = !0, o.change.push(f);
            else {
              var d = s.idxByName, y = c.idxByName, g = void 0;
              for (g in d) y[g] || f.del.push(g);
              for (g in y) {
                var w = d[g], p = y[g];
                w ? w.src !== p.src && f.change.push(p) : f.add.push(p);
              }
              (0 < f.del.length || 0 < f.add.length || 0 < f.change.length) && o.change.push(f);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Fr(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Jn(s, c);
        }), s;
      }
      function Li(e, t) {
        m(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ie && console.debug("Dexie: Creating missing table", r), Fr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Jn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Zn(e, t, r) {
        var o = {};
        return Ke(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), f = Ir(Mi(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), d = [], y = 0; y < c.indexNames.length; ++y) {
            var w = c.index(c.indexNames[y]), g = w.keyPath, w = Ir(w.name, g, !!w.unique, !!w.multiEntry, !1, g && typeof g != "string", !1);
            d.push(w);
          }
          o[s] = Rr(s, f, d);
        }), o;
      }
      function er(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], f = r.objectStore(c);
          e._hasGetAll = "getAll" in f;
          for (var d = 0; d < f.indexNames.length; ++d) {
            var y = f.indexNames[d], g = f.index(y).keyPath, w = typeof g == "string" ? g : "[" + Ke(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[w]) && (g.name = y, delete t[c].idxByName[w], t[c].idxByName[y] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Ui(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Ir(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), O(c), r === 0, o);
        });
      }
      var vs = (dn.prototype._createTableSchema = Rr, dn.prototype._parseIndexSyntax = Ui, dn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        m(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new K.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new K.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(f) {
              if (f.auto) throw new K.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!f.keyPath) throw new K.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, dn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? C(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          C(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, jr(t, [t._allTables, t, t.Transaction.prototype]), Qn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], m(s), s), t._storeNames = m(s), this;
      }, dn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ae(this._cfg.contentUpgrade || A, e), this;
      }, dn);
      function dn() {
      }
      function Mr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new kt($n, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function qr(e) {
        return e && typeof e.databases == "function";
      }
      function Lr(e) {
        return It(function() {
          return ee.letThrough = !0, e();
        });
      }
      function Ur(e) {
        return !("from" in e);
      }
      var ze = function(e, t) {
        if (!this) {
          var r = new ze();
          return e && "d" in e && C(r, e), r;
        }
        C(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function On(e, t, r) {
        var o = be(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Ur(e)) return C(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (be(r, e.from) < 0) return s ? On(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, $i(e);
          if (0 < be(t, e.to)) return o ? On(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, $i(e);
          be(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < be(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Sn(e, s), o && r && Sn(e, o);
        }
      }
      function Sn(e, t) {
        Ur(t) || function r(o, y) {
          var c = y.from, f = y.to, d = y.l, y = y.r;
          On(o, c, f), d && r(o, d), y && r(o, y);
        }(e, t);
      }
      function Vi(e, t) {
        var r = tr(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = tr(e), f = c.next(s.from), d = f.value; !o.done && !f.done; ) {
          if (be(d.from, s.to) <= 0 && 0 <= be(d.to, s.from)) return !0;
          be(s.from, d.from) < 0 ? s = (o = r.next(d.from)).value : d = (f = c.next(s.from)).value;
        }
        return !1;
      }
      function tr(e) {
        var t = Ur(e) ? null : { s: 0, n: e };
        return { next: function(r) {
          for (var o = 0 < arguments.length; t; ) switch (t.s) {
            case 0:
              if (t.s = 1, o) for (; t.n.l && be(r, t.n.from) < 0; ) t = { up: t, n: t.n.l, s: 1 };
              else for (; t.n.l; ) t = { up: t, n: t.n.l, s: 1 };
            case 1:
              if (t.s = 2, !o || be(r, t.n.to) <= 0) return { value: t.n, done: !1 };
            case 2:
              if (t.n.r) {
                t.s = 3, t = { up: t, n: t.n.r, s: 0 };
                continue;
              }
            case 3:
              t = t.up;
          }
          return { done: !0 };
        } };
      }
      function $i(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Hi(r)), e.d = Hi(e);
      }
      function Hi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function nr(e, t) {
        return m(t).forEach(function(r) {
          e[r] ? Sn(e[r], t[r]) : e[r] = function o(s) {
            var c, f, d = {};
            for (c in s) I(s, c) && (f = s[c], d[c] = !f || typeof f != "object" || Pe.has(f.constructor) ? f : o(f));
            return d;
          }(t[r]);
        }), e;
      }
      function Vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && Vi(t[r], e[r]);
        });
      }
      X(ze.prototype, ((pt = { add: function(e) {
        return Sn(this, e), this;
      }, addKey: function(e) {
        return On(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return On(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = tr(this).next(e).value;
        return t && be(t.from, e) <= 0 && 0 <= be(t.to, e);
      } })[Ne] = function() {
        return tr(this);
      }, pt));
      var Xt = {}, $r = {}, Hr = !1;
      function rr(e) {
        nr($r, e), Hr || (Hr = !0, setTimeout(function() {
          Hr = !1, Wr($r, !($r = {}));
        }, 0));
      }
      function Wr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Xt); o < s.length; o++) Wi(f = s[o], e, r, t);
        else for (var c in e) {
          var f, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (f = Xt["idb://".concat(c, "/").concat(d)]) && Wi(f, e, r, t));
        }
        r.forEach(function(y) {
          return y();
        });
      }
      function Wi(e, t, r, o) {
        for (var s = [], c = 0, f = Object.entries(e.queries.query); c < f.length; c++) {
          for (var d = f[c], y = d[0], g = [], w = 0, p = d[1]; w < p.length; w++) {
            var T = p[w];
            Vr(t, T.obsSet) ? T.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && g.push(T);
          }
          o && s.push([y, g]);
        }
        if (o) for (var v = 0, b = s; v < b.length; v++) {
          var E = b[v], y = E[0], g = E[1];
          e.queries.query[y] = g;
        }
      }
      function gs(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Le(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function f() {
          if (t.openCanceller !== o) throw new K.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new Q(function(T, v) {
            if (f(), !r) throw new K.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new K.MissingAPI();
            E.onerror = xt(v), E.onblocked = je(e._fireOnBlocked), E.onupgradeneeded = je(function(x) {
              var S;
              w = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = wn, w.abort(), E.result.close(), (S = r.deleteDatabase(b)).onsuccess = S.onerror = je(function() {
                v(new K.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = xt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, p = x < 1, e.idbdb = E.result, c && ys(e, w), ms(e, x / 10, w, v));
            }, v), E.onsuccess = je(function() {
              w = null;
              var x, S, P, D, N, F = e.idbdb = E.result, V = Ke(F.objectStoreNames);
              if (0 < V.length) try {
                var M = F.transaction((D = V).length === 1 ? D[0] : D, "readonly");
                if (t.autoSchema) S = F, P = M, (x = e).verno = S.version / 10, P = x._dbSchema = Zn(0, S, P), x._storeNames = Ke(S.objectStoreNames, 0), Qn(x, [x._allTables], m(P), P);
                else if (er(e, e._dbSchema, M), ((N = Br(Zn(0, (N = e).idbdb, M), N._dbSchema)).add.length || N.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), s = F.version + 1, c = !0, T(d());
                zn(e, M);
              } catch {
              }
              cn.push(e), F.onversionchange = je(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), F.onclose = je(function(U) {
                e.on("close").fire(U);
              }), p && (N = e._deps, M = b, F = N.indexedDB, N = N.IDBKeyRange, qr(F) || M === $n || Mr(F, N).put({ name: M }).catch(A)), T();
            }, v);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return Q.reject(T);
          });
        }
        var y, g = t.dbReadyResolve, w = null, p = !1;
        return Q.race([o, (typeof navigator > "u" ? Q.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function v() {
            return indexedDB.databases().finally(T);
          }
          y = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(y);
        }) : Promise.resolve()).then(d)]).then(function() {
          return f(), t.onReadyBeingFired = [], Q.resolve(Lr(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(ae, A);
              return t.onReadyBeingFired = [], Q.resolve(Lr(function() {
                return v(e.vip);
              })).then(T);
            }
          });
        }).finally(function() {
          t.openCanceller === o && (t.onReadyBeingFired = null, t.isBeingOpened = !1);
        }).catch(function(T) {
          t.dbOpenError = T;
          try {
            w && w.abort();
          } catch {
          }
          return o === t.openCanceller && e._close(), Le(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return p && (T = {}, e.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new ze(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new ze(-1 / 0, [[[]]]);
          }), Bt(xn).fire(T), Wr(T, !0)), e;
        });
      }
      function Gr(e) {
        function t(c) {
          return e.next(c);
        }
        var r = s(t), o = s(function(c) {
          return e.throw(c);
        });
        function s(c) {
          return function(y) {
            var d = c(y), y = d.value;
            return d.done ? y : y && typeof y.then == "function" ? y.then(r, o) : O(y) ? Promise.all(y).then(r, o) : r(y);
          };
        }
        return s(t)();
      }
      function ir(e, t, r) {
        for (var o = O(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var bs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function f(p, T, v) {
            var b = Tn(p), E = s[b] = s[b] || [], x = p == null ? 0 : typeof p == "string" ? 1 : p.length, S = 0 < T, S = u(u({}, v), { name: S ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: S, keyTail: T, keyLength: x, extractKey: Kr(p), unique: !S && v.unique });
            return E.push(S), S.isPrimaryKey || c.push(S), 1 < x && f(x === 2 ? p[0] : p.slice(0, x - 1), T + 1, v), E.sort(function(P, D) {
              return P.keyTail - D.keyTail;
            }), S;
          }
          t = f(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var d = 0, y = o.indexes; d < y.length; d++) {
            var g = y[d];
            f(g.keyPath, 0, g);
          }
          function w(p) {
            var T, v = p.query.index;
            return v.isVirtual ? u(u({}, p), { query: { index: v.lowLevelIndex, range: (T = p.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: ir(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: ir(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = s[Tn(p)]) && p[0];
          } }), count: function(p) {
            return r.count(w(p));
          }, query: function(p) {
            return r.query(w(p));
          }, openCursor: function(p) {
            var T = p.query.index, v = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(w(p)).then(function(S) {
              return S && x(S);
            }) : r.openCursor(p);
            function x(S) {
              return Object.create(S, { continue: { value: function(P) {
                P != null ? S.continue(ir(P, p.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : p.unique ? S.continue(S.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : S.continue();
              } }, continuePrimaryKey: { value: function(P, D) {
                S.continuePrimaryKey(ir(P, e.MAX_KEY, v), D);
              } }, primaryKey: { get: function() {
                return S.primaryKey;
              } }, key: { get: function() {
                var P = S.key;
                return E === 1 ? P[0] : P.slice(0, E);
              } }, value: { get: function() {
                return S.value;
              } } });
            }
          } });
        } });
      } };
      function Yr(e, t, r, o) {
        return r = r || {}, o = o || "", m(e).forEach(function(s) {
          var c, f, d;
          I(t, s) ? (c = e[s], f = t[s], typeof c == "object" && typeof f == "object" && c && f ? (d = Be(c)) !== Be(f) ? r[o + s] = t[s] : d === "Object" ? Yr(c, f, r, o + s + ".") : c !== f && (r[o + s] = t[s]) : c !== f && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), m(t).forEach(function(s) {
          I(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var _s = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = ee.trans, f = c.table(t).hook, d = f.deleting, y = f.creating, g = f.updating;
            switch (s.type) {
              case "add":
                if (y.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (y.fire === A && g.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === A) break;
                return c._promise("readwrite", function() {
                  return function p(T, v, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: v }, limit: b }).then(function(E) {
                      var x = E.result;
                      return w({ type: "delete", keys: x, trans: T }).then(function(S) {
                        return 0 < S.numFailures ? Promise.reject(S.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : p(T, u(u({}, v), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(p) {
              var T, v, b, E = ee.trans, x = p.keys || Xr(o, p);
              if (!x) throw new Error("Keys missing");
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: x }) : u({}, p)).type !== "delete" && (p.values = l([], p.values)), p.keys && (p.keys = l([], p.keys)), T = r, b = x, ((v = p).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(S) {
                var P = x.map(function(D, N) {
                  var F, V, M, U = S[N], Y = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(Y, D, U, E) : p.type === "add" || U === void 0 ? (F = y.fire.call(Y, D, p.values[N], E), D == null && F != null && (p.keys[N] = D = F, o.outbound || G(p.values[N], o.keyPath, D))) : (F = Yr(U, p.values[N]), (V = g.fire.call(Y, F, D, U, E)) && (M = p.values[N], Object.keys(V).forEach(function(W) {
                    I(M, W) ? M[W] = V[W] : G(M, W, V[W]);
                  }))), Y;
                });
                return r.mutate(p).then(function(D) {
                  for (var N = D.failures, F = D.results, V = D.numFailures, D = D.lastResult, M = 0; M < x.length; ++M) {
                    var U = (F || x)[M], Y = P[M];
                    U == null ? Y.onerror && Y.onerror(N[M]) : Y.onsuccess && Y.onsuccess(p.type === "put" && S[M] ? p.values[M] : U);
                  }
                  return { failures: N, results: F, numFailures: V, lastResult: D };
                }).catch(function(D) {
                  return P.forEach(function(N) {
                    return N.onerror && N.onerror(D);
                  }), Promise.reject(D);
                });
              });
            }
          } });
        } });
      } };
      function Gi(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) be(t.keys[s], e[c]) === 0 && (o.push(r ? ke(t.values[s]) : t.values[s]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var ws = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var s = Gi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? Q.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ke(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Yi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Xi(e, t) {
        switch (e) {
          case "query":
            return t.values && !t.unique;
          case "get":
          case "getMany":
          case "count":
          case "openCursor":
            return !1;
        }
      }
      var xs = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new ze(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (ee.subscr && s !== "readonly") throw new K.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, f = c.primaryKey, p = c.indexes, d = f.extractKey, y = f.outbound, g = f.autoIncrement && p.filter(function(v) {
            return v.compound && v.keyPath.includes(f.keyPath);
          }), w = u(u({}, s), { mutate: function(v) {
            function b(W) {
              return W = "idb://".concat(t, "/").concat(o, "/").concat(W), D[W] || (D[W] = new ze());
            }
            var E, x, S, P = v.trans, D = v.mutatedParts || (v.mutatedParts = {}), N = b(""), F = b(":dels"), V = v.type, Y = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Xr(f, v).filter(function(W) {
              return W;
            }), v.values] : [], M = Y[0], U = Y[1], Y = v.trans._cache;
            return O(M) ? (N.addKeys(M), (Y = V === "delete" || M.length === U.length ? Gi(M, Y) : null) || F.addKeys(M), (Y || U) && (E = b, x = Y, S = U, c.indexes.forEach(function(W) {
              var J = E(W.name || "");
              function he(ce) {
                return ce != null ? W.extractKey(ce) : null;
              }
              function we(ce) {
                return W.multiEntry && O(ce) ? ce.forEach(function(Fe) {
                  return J.addKey(Fe);
                }) : J.addKey(ce);
              }
              (x || S).forEach(function(ce, Qe) {
                var ue = x && he(x[Qe]), Qe = S && he(S[Qe]);
                be(ue, Qe) !== 0 && (ue != null && we(ue), Qe != null && we(Qe));
              });
            }))) : M ? (U = { from: (U = M.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = M.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, F.add(U), N.add(U)) : (N.add(r), F.add(r), c.indexes.forEach(function(W) {
              return b(W.name).add(r);
            })), s.mutate(v).then(function(W) {
              return !M || v.type !== "add" && v.type !== "put" || (N.addKeys(W.results), g && g.forEach(function(J) {
                for (var he = v.values.map(function(ue) {
                  return J.extractKey(ue);
                }), we = J.keyPath.findIndex(function(ue) {
                  return ue === f.keyPath;
                }), ce = 0, Fe = W.results.length; ce < Fe; ++ce) he[ce][we] = W.results[ce];
                b(J.name).addKeys(he);
              })), P.mutatedParts = nr(P.mutatedParts || {}, D), W;
            });
          } }), p = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new ze((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [f, new ze(v.key)];
          }, getMany: function(v) {
            return [f, new ze().addKeys(v.keys)];
          }, count: p, query: p, openCursor: p };
          return m(T).forEach(function(v) {
            w[v] = function(b) {
              var E = ee.subscr, x = !!E, S = Yi(ee, s) && Xi(v, b) ? b.obsSet = {} : E;
              if (x) {
                var P = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), S[U] || (S[U] = new ze());
                }, D = P(""), N = P(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? N : P(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var F = v === "query" && y && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(U) {
                      if (v === "query") {
                        if (y && b.values) return F.then(function(he) {
                          return he = he.result, D.addKeys(he), U;
                        });
                        var Y = b.values ? U.result.map(d) : U.result;
                        (b.values ? D : N).addKeys(Y);
                      } else if (v === "openCursor") {
                        var W = U, J = b.values;
                        return W && Object.create(W, { key: { get: function() {
                          return N.addKey(W.primaryKey), W.key;
                        } }, primaryKey: { get: function() {
                          var he = W.primaryKey;
                          return N.addKey(he), he;
                        } }, value: { get: function() {
                          return J && D.addKey(W.primaryKey), W.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  N.add(r);
                }
              }
              return s[v].apply(this, arguments);
            };
          }), w;
        } });
      } };
      function zi(e, t, r) {
        if (r.numFailures === 0) return t;
        if (t.type === "deleteRange") return null;
        var o = t.keys ? t.keys.length : "values" in t && t.values ? t.values.length : 1;
        return r.numFailures === o ? null : (t = u({}, t), O(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && O(t.values) && (t.values = t.values.filter(function(s, c) {
          return !(c in r.failures);
        })), t);
      }
      function zr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < be(r, o.lower) : 0 <= be(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? be(e, t.upper) < 0 : be(e, t.upper) <= 0));
        var r, o;
      }
      function Qi(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var f = t.query.index, d = f.multiEntry, y = t.query.range, g = o.schema.primaryKey.extractKey, w = f.extractKey, p = (f.lowLevelIndex || f).extractKey, T = T.reduce(function(v, b) {
          var E = v, x = [];
          if (b.type === "add" || b.type === "put") for (var S = new ze(), P = b.values.length - 1; 0 <= P; --P) {
            var D, N = b.values[P], F = g(N);
            S.hasKey(F) || (D = w(N), (d && O(D) ? D.some(function(W) {
              return zr(W, y);
            }) : zr(D, y)) && (S.addKey(F), x.push(N)));
          }
          switch (b.type) {
            case "add":
              var V = new ze().addKeys(t.values ? v.map(function(J) {
                return g(J);
              }) : v), E = v.concat(t.values ? x.filter(function(J) {
                return J = g(J), !V.hasKey(J) && (V.addKey(J), !0);
              }) : x.map(function(J) {
                return g(J);
              }).filter(function(J) {
                return !V.hasKey(J) && (V.addKey(J), !0);
              }));
              break;
            case "put":
              var M = new ze().addKeys(b.values.map(function(J) {
                return g(J);
              }));
              E = v.filter(function(J) {
                return !M.hasKey(t.values ? g(J) : J);
              }).concat(t.values ? x : x.map(function(J) {
                return g(J);
              }));
              break;
            case "delete":
              var U = new ze().addKeys(b.keys);
              E = v.filter(function(J) {
                return !U.hasKey(t.values ? g(J) : J);
              });
              break;
            case "deleteRange":
              var Y = b.range;
              E = v.filter(function(J) {
                return !zr(g(J), Y);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(v, b) {
          return be(p(v), p(b)) || be(g(v), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function Ji(e, t) {
        return be(e.lower, t.lower) === 0 && be(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function Es(e, t) {
        return function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? -1 : 0;
          if (o === void 0) return 1;
          if ((o = be(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return 1;
            if (c) return -1;
          }
          return o;
        }(e.lower, t.lower, e.lowerOpen, t.lowerOpen) <= 0 && 0 <= function(r, o, s, c) {
          if (r === void 0) return o !== void 0 ? 1 : 0;
          if (o === void 0) return -1;
          if ((o = be(r, o)) === 0) {
            if (s && c) return 0;
            if (s) return -1;
            if (c) return 1;
          }
          return o;
        }(e.upper, t.upper, e.upperOpen, t.upperOpen);
      }
      function Ts(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, c = t, setTimeout(function() {
            s.subscribers.size === 0 && qe(c, s);
          }, 3e3));
        });
      }
      var Os = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, s) {
          var c, f, d = e.transaction(r, o, s);
          return o === "readwrite" && (f = (c = new AbortController()).signal, s = function(y) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var g = /* @__PURE__ */ new Set(), w = 0, p = r; w < p.length; w++) {
                  var T = p[w], v = Xt["idb://".concat(t, "/").concat(T)];
                  if (v) {
                    var b = e.table(T), E = v.optimisticOps.filter(function(J) {
                      return J.trans === d;
                    });
                    if (d._explicit && y && d.mutatedParts) for (var x = 0, S = Object.values(v.queries.query); x < S.length; x++) for (var P = 0, D = (V = S[x]).slice(); P < D.length; P++) Vr((M = D[P]).obsSet, d.mutatedParts) && (qe(V, M), M.subscribers.forEach(function(J) {
                      return g.add(J);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(J) {
                        return J.trans !== d;
                      });
                      for (var N = 0, F = Object.values(v.queries.query); N < F.length; N++) for (var V, M, U, Y = 0, W = (V = F[N]).slice(); Y < W.length; Y++) (M = W[Y]).res != null && d.mutatedParts && (y && !M.dirty ? (U = Object.isFrozen(M.res), U = Qi(M.res, M.req, E, b, M, U), M.dirty ? (qe(V, M), M.subscribers.forEach(function(J) {
                        return g.add(J);
                      })) : U !== M.res && (M.res = U, M.promise = Q.resolve({ result: U }))) : (M.dirty && qe(V, M), M.subscribers.forEach(function(J) {
                        return g.add(J);
                      })));
                    }
                  }
                }
                g.forEach(function(J) {
                  return J();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: f }), d.addEventListener("error", s(!1), { signal: f }), d.addEventListener("complete", s(!0), { signal: f })), d;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var f = ee.trans;
            if (s.outbound || f.db._options.cache === "disabled" || f.explicit || f.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Xt["idb://".concat(t, "/").concat(r)];
            return d ? (f = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Xr(s, c).some(function(y) {
              return y == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && rr(c.mutatedParts), f.then(function(y) {
              0 < y.numFailures && (qe(d.optimisticOps, c), (y = zi(0, c, y)) && d.optimisticOps.push(y), c.mutatedParts && rr(c.mutatedParts));
            }), f.catch(function() {
              qe(d.optimisticOps, c), c.mutatedParts && rr(c.mutatedParts);
            })) : f.then(function(y) {
              var g = zi(0, u(u({}, c), { values: c.values.map(function(w, p) {
                var T;
                return y.failures[p] || (w = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? ke(w) : u({}, w), G(w, s.keyPath, y.results[p])), w;
              }) }), y);
              d.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && rr(c.mutatedParts);
              });
            }), f) : o.mutate(c);
          }, query: function(c) {
            if (!Yi(ee, o) || !Xi("query", c)) return o.query(c);
            var f = ((g = ee.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", p = ee, d = p.requery, y = p.signal, g = function(b, E, x, S) {
              var P = Xt["idb://".concat(b, "/").concat(E)];
              if (!P) return [];
              if (!(E = P.queries[x])) return [null, !1, P, null];
              var D = E[(S.query ? S.query.index.name : null) || ""];
              if (!D) return [null, !1, P, null];
              switch (x) {
                case "query":
                  var N = D.find(function(F) {
                    return F.req.limit === S.limit && F.req.values === S.values && Ji(F.req.query.range, S.query.range);
                  });
                  return N ? [N, !0, P, D] : [D.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= S.limit && (!S.values || F.req.values) && Es(F.req.query.range, S.query.range);
                  }), !1, P, D];
                case "count":
                  return N = D.find(function(F) {
                    return Ji(F.req.query.range, S.query.range);
                  }), [N, !!N, P, D];
              }
            }(t, r, "query", c), w = g[0], p = g[1], T = g[2], v = g[3];
            return w && p ? w.obsSet = c.obsSet : (p = o.query(c).then(function(b) {
              var E = b.result;
              if (w && (w.res = E), f) {
                for (var x = 0, S = E.length; x < S; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = ke(E);
              return b;
            }).catch(function(b) {
              return v && w && qe(v, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(w) : (v = [w], (T = T || (Xt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), Ts(w, v, d, y), w.promise.then(function(b) {
              return { result: Qi(b.result, c, T?.optimisticOps, o, w, f) };
            });
          } });
        } });
      } };
      function or(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var kt = (Ue.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new K.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new K.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(ps), r.stores({}), this._state.autoSchema = !1, r);
      }, Ue.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ee.letThrough || this._vip) ? e() : new Q(function(r, o) {
          if (t._state.openComplete) return o(new K.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new K.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Ue.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, f) {
          return c.level - f.level;
        }), this;
      }, Ue.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Ue.prototype.open = function() {
        var e = this;
        return Wt(tt, function() {
          return gs(e);
        });
      }, Ue.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = cn.indexOf(this);
        if (0 <= t && cn.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new Q(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new Q(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Ue.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new K.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new K.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Ue.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new Q(function(s, c) {
          function f() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = je(function() {
              var y, g, w;
              y = t._deps, g = t.name, w = y.indexedDB, y = y.IDBKeyRange, qr(w) || g === $n || Mr(w, y).delete(g).catch(A), s();
            }), d.onerror = xt(c), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new K.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(f) : f();
        });
      }, Ue.prototype.backendDB = function() {
        return this.idbdb;
      }, Ue.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Ue.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Ue.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Ue.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Ue.prototype, "tables", { get: function() {
        var e = this;
        return m(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Ue.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new K.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, ye(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Ue.prototype._transaction = function(e, t, r) {
        var o = this, s = ee.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, f, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (f = t.map(function(g) {
            if (g = g instanceof o.Table ? g.name : g, typeof g != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return g;
          }), e == "r" || e === kr) c = kr;
          else {
            if (e != "rw" && e != Pr) throw new K.InvalidArgument("Invalid transaction mode: " + e);
            c = Pr;
          }
          if (s) {
            if (s.mode === kr && c === Pr) {
              if (!d) throw new K.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && f.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!d) throw new K.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(w, p) {
            p(g);
          }) : Le(g);
        }
        var y = (function g(w, p, T, v, b) {
          return Q.resolve().then(function() {
            var E = ee.transless || ee, x = w._createTransaction(p, T, w._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (D) {
              return D.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return g(w, p, T, null, b);
              })) : Le(D);
            }
            var S, P = yt(b);
            return P && un(), E = Q.follow(function() {
              var D;
              (S = b.call(x, x)) && (P ? (D = Rt.bind(null, null), S.then(D, D)) : typeof S.next == "function" && typeof S.throw == "function" && (S = Gr(S)));
            }, E), (S && typeof S.then == "function" ? Q.resolve(S).then(function(D) {
              return x.active ? D : Le(new K.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return S;
            })).then(function(D) {
              return v && x._resolve(), x._completion.then(function() {
                return D;
              });
            }).catch(function(D) {
              return x._reject(D), Le(D);
            });
          });
        }).bind(null, this, c, f, s, r);
        return s ? s._promise(c, y, "lock") : ee.trans ? Wt(ee.transless, function() {
          return o._whenReady(y);
        }) : this._whenReady(y);
      }, Ue.prototype.table = function(e) {
        if (!I(this._allTables, e)) throw new K.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Ue);
      function Ue(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Ue.dependencies;
        this._options = t = u({ addons: Ue.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, f, d, y, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new Q(function(p) {
          g.dbReadyResolve = p;
        }), g.openCanceller = new Q(function(p, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = gn(this, "populate", "blocked", "versionchange", "close", { ready: [ae, A] }), this.once = function(p, T) {
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(p).unsubscribe(v), T.apply(r, b);
          };
          return r.on(p, v);
        }, this.on.ready.subscribe = Ve(this.on.ready.subscribe, function(p) {
          return function(T, v) {
            Ue.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || Q.resolve().then(T), v && p(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && p(T)) : (p(T), b = r, v || p(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, bn(as.prototype, function(S, x) {
          this.db = s;
          var v = ki, b = null;
          if (x) try {
            v = x();
          } catch (P) {
            b = P;
          }
          var E = S._ctx, x = E.table, S = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: S !== j ? S : null };
        })), this.Table = (c = this, bn(Ni.prototype, function(p, T, v) {
          this.db = c, this._tx = v, this.name = p, this.schema = T, this.hook = c._allTables[p] ? c._allTables[p].hook : gn(null, { creating: [se, A], reading: [Z, j], updating: [fe, A], deleting: [re, A] });
        })), this.Transaction = (f = this, bn(ls.prototype, function(p, T, v, b, E) {
          var x = this;
          p !== "readonly" && T.forEach(function(S) {
            S = (S = v[S]) === null || S === void 0 ? void 0 : S.yProps, S && (T = T.concat(S.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = f, this.mode = p, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = gn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new Q(function(S, P) {
            x._resolve = S, x._reject = P;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(S) {
            var P = x.active;
            return x.active = !1, x.on.error.fire(S), x.parent ? x.parent._reject(S) : P && x.idbtrans && x.idbtrans.abort(), Le(S);
          });
        })), this.Version = (d = this, bn(vs.prototype, function(p) {
          this.db = d, this._cfg = { version: p, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (y = this, bn(Fi.prototype, function(p, T, v) {
          if (this.db = y, this._ctx = { table: p, index: T === ":id" ? null : T, or: v }, this._cmp = this._ascending = be, this._descending = function(b, E) {
            return be(E, b);
          }, this._max = function(b, E) {
            return 0 < be(b, E) ? b : E;
          }, this._min = function(b, E) {
            return be(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = y._deps.IDBKeyRange, !this._IDBKeyRange) throw new K.MissingAPI();
        })), this.on("versionchange", function(p) {
          0 < p.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(p) {
          !p.newVersion || p.newVersion < p.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(p.oldVersion / 10));
        }), this._maxKey = En(t.IDBKeyRange), this._createTransaction = function(p, T, v, b) {
          return new r.Transaction(p, T, v, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(p) {
          r.on("blocked").fire(p), cn.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(p);
          });
        }, this.use(ws), this.use(Os), this.use(xs), this.use(bs), this.use(_s);
        var w = new Proxy(this, { get: function(p, T, v) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return or(r.table(E), w);
          };
          var b = Reflect.get(p, T, v);
          return b instanceof Ni ? or(b, w) : T === "tables" ? b.map(function(E) {
            return or(E, w);
          }) : T === "_createTransaction" ? function() {
            return or(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(p) {
          return p(r);
        });
      }
      var sr, pt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ss = (Qr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, Qr.prototype[pt] = function() {
        return this;
      }, Qr);
      function Qr(e) {
        this._subscribe = e;
      }
      try {
        sr = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        sr = { indexedDB: null, IDBKeyRange: null };
      }
      function Zi(e) {
        var t, r = !1, o = new Ss(function(s) {
          var c = yt(e), f, d = !1, y = {}, g = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, f && f.abort(), p && Bt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(w);
          var p = !1, T = function() {
            return Ar(b);
          }, v = function(E) {
            nr(y, E), Vr(g, y) && T();
          }, b = function() {
            var E, x, S;
            !d && sr.indexedDB && (y = {}, E = {}, f && f.abort(), f = new AbortController(), S = function(P) {
              var D = sn();
              try {
                c && un();
                var N = It(e, P);
                return N = c ? N.finally(Rt) : N;
              } finally {
                D && an();
              }
            }(x = { subscr: E, signal: f.signal, requery: T, querier: e, trans: null }), Promise.resolve(S).then(function(P) {
              r = !0, t = P, d || x.signal.aborted || (y = {}, function(D) {
                for (var N in D) if (I(D, N)) return;
                return 1;
              }(g = E) || p || (Bt(xn, v), p = !0), Ar(function() {
                return !d && s.next && s.next(P);
              }));
            }, function(P) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(P?.name) || d || Ar(function() {
                d || s.error && s.error(P);
              });
            }));
          };
          return setTimeout(T, 0), w;
        });
        return o.hasValue = function() {
          return r;
        }, o.getValue = function() {
          return t;
        }, o;
      }
      var zt = kt;
      function Jr(e) {
        var t = Ft;
        try {
          Ft = !0, Bt.storagemutated.fire(e), Wr(e, !0);
        } finally {
          Ft = t;
        }
      }
      X(zt, u(u({}, He), { delete: function(e) {
        return new zt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new zt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = zt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (qr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== $n;
            });
          }) : Mr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Le(new K.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          C(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ee.trans ? Wt(ee.transless, e) : e();
      }, vip: Lr, async: function(e) {
        return function() {
          try {
            var t = Gr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : Q.resolve(t);
          } catch (r) {
            return Le(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Gr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : Q.resolve(o);
        } catch (s) {
          return Le(s);
        }
      }, currentTransaction: { get: function() {
        return ee.trans || null;
      } }, waitFor: function(e, t) {
        return t = Q.resolve(typeof e == "function" ? zt.ignoreTransaction(e) : e).timeout(t || 6e4), ee.trans ? ee.trans.waitFor(t) : t;
      }, Promise: Q, debug: { get: function() {
        return ie;
      }, set: function(e) {
        Te(e);
      } }, derive: de, extend: C, props: X, override: Ve, Events: gn, on: Bt, liveQuery: Zi, extendObservabilitySet: nr, getByKeyPath: H, setByKeyPath: G, delByKeyPath: function(e, t) {
        typeof t == "string" ? G(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          G(e, r, void 0);
        });
      }, shallowClone: le, deepClone: ke, getObjectDiff: Yr, cmp: be, asap: $, minKey: -1 / 0, addons: [], connections: cn, errnames: k, dependencies: sr, cache: Xt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), zt.maxKey = En(zt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Bt(xn, function(e) {
        Ft || (e = new CustomEvent(Nr, { detail: e }), Ft = !0, dispatchEvent(e), Ft = !1);
      }), addEventListener(Nr, function(e) {
        e = e.detail, Ft || Jr(e);
      }));
      var pn, Ft = !1, eo = function() {
      };
      return typeof BroadcastChannel < "u" && ((eo = function() {
        (pn = new BroadcastChannel(Nr)).onmessage = function(e) {
          return e.data && Jr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), Bt(xn, function(e) {
        Ft || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!kt.disableBfCache && e.persisted) {
          ie && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = cn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !kt.disableBfCache && e.persisted && (ie && console.debug("Dexie: handling persisted pageshow"), eo(), Jr({ all: new ze(-1 / 0, [[]]) }));
      })), Q.rejectionMapper = function(e, t) {
        return !e || e instanceof Dt || e instanceof TypeError || e instanceof SyntaxError || !e.name || !q[e.name] ? e : (t = new q[e.name](t || e.message, e), "stack" in e && te(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Te(ie), u(kt, Object.freeze({ __proto__: null, Dexie: kt, liveQuery: Zi, Entity: Pi, cmp: be, PropModification: _n, replacePrefix: function(e, t) {
        return new _n({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new _n({ add: e });
      }, remove: function(e) {
        return new _n({ remove: e });
      }, default: kt, RangeSet: ze, mergeRanges: Sn, rangesOverlap: Vi }), { default: kt }), kt;
    });
  }(ia)), ia.exports;
}
var qd = Md();
const oa = /* @__PURE__ */ Id(qd), vu = Symbol.for("Dexie"), sa = globalThis[vu] || (globalThis[vu] = oa);
if (oa.semVer !== sa.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${oa.semVer} and ${sa.semVer}`);
const {
  liveQuery: op,
  mergeRanges: sp,
  rangesOverlap: ap,
  RangeSet: up,
  cmp: cp,
  Entity: lp,
  PropModification: fp,
  replacePrefix: dp,
  add: hp,
  remove: pp,
  DexieYProvider: mp
} = sa;
function ge(n, i) {
  return n?.attributes?.find((a) => a.name === i)?.value;
}
function gu(n) {
  const i = `${n.lnClass} ${n.lnInst}`;
  return n.prefix ? `${n.prefix} ${i}` : i;
}
function Kc(n) {
  return {
    id: n.id,
    uuid: ge(n, "uuid") ?? "",
    iedName: ge(n, "iedName") ?? "",
    prefix: ge(n, "prefix") ?? "",
    lnClass: ge(n, "lnClass") ?? "",
    lnInst: ge(n, "lnInst") ?? "",
    lnType: ge(n, "lnType") ?? ""
  };
}
function Ld(n) {
  return {
    id: n.id,
    name: ge(n, "name") ?? "",
    type: ge(n, "type") ?? "",
    bType: ge(n, "bType") ?? "",
    dataObjectId: ge(n, "dataObjectId") ?? "",
    fc: ge(n, "fc") ?? ""
  };
}
function ot(n, i) {
  if (n) return;
  const a = "Invariant failed", u = i ? `${a}: ${i}` : a;
  throw console.error(u), new Error("Unexpected Error!");
}
function Ud(n) {
  const i = Object.fromEntries(n.entries());
  for (const a of n.keys()) {
    const u = n.getAll(a);
    u.length > 1 && (i[a] = u);
  }
  return i;
}
function bu(n) {
  return Object.entries(n).map(([i, a]) => ({
    name: i,
    value: String(a)
  }));
}
const Vd = (n) => n != null;
function jc(n) {
  return {
    id: n.id,
    uuid: ge(n, "uuid"),
    desc: ge(n, "desc"),
    templateUuid: ge(n, "templateUuid"),
    originUuid: ge(n, "originUuid"),
    pLN: ge(n, "pLN"),
    pDO: ge(n, "pDO"),
    resourceName: ge(n, "resourceName"),
    resourceUuid: ge(n, "resourceUuid"),
    pDA: ge(n, "pDA"),
    input: ge(n, "input"),
    source: ge(n, "source"),
    sourceLNodeUuid: ge(n, "sourceLNodeUuid"),
    sourceDoName: ge(n, "sourceDoName"),
    sourceDaName: ge(n, "sourceDaName"),
    service: ge(n, "service"),
    inputInst: ge(n, "inputInst"),
    extRefAddr: ge(n, "extRefAddr"),
    extRefUuid: ge(n, "extRefUuid")
  };
}
function Bc(n) {
  return {
    id: n.id,
    uuid: ge(n, "uuid"),
    desc: ge(n, "desc"),
    templateUuid: ge(n, "templateUuid"),
    originUuid: ge(n, "originUuid"),
    pLN: ge(n, "pLN"),
    pDO: ge(n, "pDO"),
    resourceName: ge(n, "resourceName"),
    resourceUuid: ge(n, "resourceUuid"),
    pDA: ge(n, "pDA"),
    output: ge(n, "output"),
    controlled: ge(n, "controlled"),
    controlLNodeUuid: ge(n, "controlLNodeUuid"),
    controlDoName: ge(n, "controlDoName"),
    controlDaName: ge(n, "controlDaName"),
    service: ge(n, "service"),
    outputInst: ge(n, "outputInst"),
    extRefAddr: ge(n, "extRefAddr"),
    extRefUuid: ge(n, "extRefUuid")
  };
}
function $d(n) {
  return {
    addRecord: i,
    createRecord: l,
    updateRecord: a,
    deleteRecord: u,
    findRecordById: L,
    findRecordsByTagName: B,
    findChildRecords: de,
    findChildRecordsByTagName: Re,
    instantiate: I,
    ensureRelationship: m,
    ensurePrivateElement: O,
    recordExists: h,
    getPath: Ae,
    getParent: Ke,
    close: Ve,
    db: n
  };
  async function i(z) {
    const $ = { ...z, id: crypto.randomUUID() };
    try {
      return await n.table(vt).add($), $;
    } catch (H) {
      const G = {
        msg: "could not add record",
        db: n.name,
        newRecord: $,
        err: H
      };
      throw console.error(G), new Error(JSON.stringify(G));
    }
  }
  async function a(z) {
    try {
      if (await n.table(vt).update(z.id, z) < 1) {
        const H = { msg: "nothing has been updated", record: z };
        throw console.error(H), new Error(JSON.stringify(H));
      }
    } catch ($) {
      console.error($);
    }
  }
  async function u(z) {
    try {
      if (z.children)
        for (const $ of z.children) {
          const H = await L($.id);
          if (!H) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: $
            });
            continue;
          }
          await u(H);
        }
      if (z.parent?.id) {
        const $ = await L(z.parent.id);
        if (!$) throw new Error("parent relationship found but not parent record");
        await C($, z);
      }
      await n.table(vt).delete(z.id);
    } catch ($) {
      console.error($);
    }
  }
  async function l(z, $) {
    try {
      const H = { ...z, id: crypto.randomUUID() };
      return await n.table(vt).add(H), $ && await m($, H), {
        ...H,
        parent: $ ? { id: $.id, tagName: $.tagName } : null
      };
    } catch (H) {
      const G = {
        msg: "could not add record",
        db: n.name,
        table: z.tagName,
        recordToCreate: z,
        err: H
      };
      throw console.error(G), new Error(JSON.stringify(G));
    }
  }
  async function h(z) {
    return await n.table(vt).where({ id: z.id }).count() > 0;
  }
  async function m(z, $) {
    const H = z.children?.some((le) => le.id === $.id), G = $.parent?.id === z.id;
    H || await n.table(vt).update(z.id, {
      children: [...z.children, { id: $.id, tagName: $.tagName }]
    }), G || ($.parent = {
      id: z.id,
      tagName: z.tagName
    }, await n.table(vt).update($.id, { parent: $.parent }));
  }
  async function O(z) {
    let H = (await te("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((G) => G.parent?.id === z.id);
    return H || (H = await l({
      tagName: "Private",
      attributes: [{ name: "type", value: "eIEC61850-6-100" }],
      parent: null,
      namespace: null,
      value: "",
      children: []
    }), await m(z, H)), H;
  }
  async function C(z, $) {
    $.parent = null, await a($), z.children && (z.children = z.children.filter((H) => H.id !== $.id), await a(z));
  }
  async function L(z) {
    return await n.table(vt).get(z);
  }
  async function B(z) {
    return await n.table(vt).where({ tagName: z }).toArray();
  }
  function I(z) {
    const $ = X(z);
    if (!$)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', z), new Error('record does not have a "uuid" to move to "templateUUID"');
    z.attributes?.push({ name: "templateUuid", value: $ }), oe(z);
  }
  function X(z) {
    const $ = z.attributes?.find((H) => H.name === "uuid");
    if ($)
      return $.value;
  }
  function oe(z) {
    z.attributes || (z.attributes = []);
    const $ = crypto.randomUUID(), H = z.attributes.findIndex((le) => le.name === "uuid");
    H >= 0 ? z.attributes[H].value = $ : z.attributes.push({ name: "uuid", value: $ });
  }
  async function te(z, $) {
    return Hd(n, z, $);
  }
  async function de(z) {
    return z.children?.length ? await n.table(vt).where({ "parent.id": z.id }).toArray() : [];
  }
  async function Re(z, $) {
    return (await de(z)).filter((G) => $.includes(G.tagName));
  }
  async function Ae(z) {
    const $ = [z];
    let G = await Ke(z);
    for (; G; )
      $.push(G), G = await Ke(G);
    class le extends Array {
      constructor(...ye) {
        super(...ye);
      }
      joinNames() {
        return this.map((ye) => {
          switch (ye.tagName) {
            case "Substation":
            case "VoltageLevel":
            case "Bay":
            case "Function":
            case "SubFunction":
              return `/${ge(ye, "name")}`;
            case "LNode":
              const xe = Kc(ye);
              return `/${xe.prefix}${xe.lnClass}${xe.lnInst}`;
            case "DO":
            case "DA":
              return `.${ge(ye, "name")}`;
            case "SourceRef":
              const ke = jc(ye);
              var Pe = `.${ke.input}`;
              return ke.inputInst && (Pe += `(${ke.inputInst})`), ke.pDA && (Pe += `.${ke.pDA}`), Pe;
            case "ControlRef":
              const it = Bc(ye);
              var Pe = `.${it.output}`;
              return it.outputInst && (Pe += `(${it.outputInst})`), Pe;
            default:
              return;
          }
        }).filter(Boolean).join("");
      }
    }
    return new le(...$.reverse());
  }
  async function Ke(z) {
    switch (z.tagName) {
      case "SourceRef":
        return H(z, ["LNode"]);
      case "ControlRef":
        return H(z, ["LNode"]);
      case "DA":
        const G = await $(z);
        ot(G && G.tagName === "DOType", "Invalid DA parent");
        const le = ge(G, "id");
        return n.table(vt).where("tagName").equals("DO").and((Pe) => ge(Pe, "type") === le).first();
      case "DO":
        const R = await $(z);
        ot(R && R.tagName === "LNodeType", "Invalid DO parent");
        const ye = ge(R, "id");
        return n.table(vt).where("tagName").equals("LNode").and((Pe) => ge(Pe, "lnType") === ye).first();
      case "LNode":
        return H(z, ["Function", "SubFunction"]);
      case "SubFunction":
        return H(z, ["Function"]);
      default:
        return $(z);
    }
    async function $(G) {
      if (!G.parent?.id) return null;
      if (G.parent.tagName == "Private") {
        const le = await n.table(vt).get(G.parent.id);
        return le ? $(le) : null;
      }
      return n.table(vt).get(G.parent.id);
    }
    async function H(G, le) {
      if (!G.parent?.id) return null;
      const R = Array.isArray(le) ? G.parent && le.includes(G.parent.tagName) : G.parent?.tagName === le, ye = await n.table(vt).get(G.parent.id);
      return ot(ye, "Record has parent relationship but parent not found"), R ? ye : H(ye, le);
    }
  }
  function Ve() {
    n.close();
  }
}
async function Hd(n, i, a) {
  try {
    return await n.table(vt).where({ tagName: i }).filter(
      (l) => !!l.attributes?.some((h) => h.name === a.name && h.value === a.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
  return [];
}
const on = /* @__PURE__ */ Sd("structure/app", () => {
  const n = Zt(""), i = Vs();
  async function a(u) {
    const l = new Uo(u);
    await l.open(), n.value = u, i.value = $d(l);
  }
  return {
    activeFilename: n,
    sdk: i,
    initApp: a
  };
});
function Wd(n) {
  return ha() ? (Iu(n), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Gd = () => {
};
function Fs(n, i, a) {
  var u;
  let l;
  _t(a) ? l = {
    evaluating: a
  } : l = {};
  const {
    lazy: h = !1,
    flush: m = "pre",
    evaluating: O = void 0,
    shallow: C = !0,
    onError: L = (u = globalThis.reportError) != null ? u : Gd
  } = l, B = Vs(!h), I = C ? Vs(i) : Zt(i);
  let X = 0;
  return gf(async (oe) => {
    if (!B.value)
      return;
    X++;
    const te = X;
    let de = !1;
    O && Promise.resolve().then(() => {
      O.value = !0;
    });
    try {
      const Re = await n((Ae) => {
        oe(() => {
          O && (O.value = !1), de || Ae();
        });
      });
      te === X && (I.value = Re);
    } catch (Re) {
      L(Re);
    } finally {
      O && te === X && (O.value = !1), de = !0;
    }
  }, { flush: m }), h ? dr(() => (B.value = !0, I.value)) : I;
}
function Yd(n) {
  return "inputName" in n;
}
function Xd(n) {
  return "outputName" in n;
}
function _u(n) {
  return "dataName" in n;
}
function wu(n) {
  const i = ge(n, "varName"), a = ge(n, "dataName"), u = ge(n, "inputName"), l = ge(n, "outputName");
  if (ot(i, "Variable record must have varName attribute"), a)
    return {
      varName: i,
      dataName: a
    };
  if (u)
    return {
      varName: i,
      inputName: u
    };
  if (l)
    return {
      varName: i,
      outputName: l
    };
  throw new Error(
    "Invalid variable record: must have either dataName, inputName, or outputName attribute"
  );
}
function zd(n, i, a) {
  return {
    id: n.id,
    name: ge(n, "name") ?? "",
    fileReference: ge(n, "fileReference"),
    inputVars: i.map((u) => wu(u)),
    outputVars: a.map((u) => wu(u))
  };
}
function Qd(n, i, a) {
  return n.map((u) => {
    const l = u.children.filter((m) => m.tagName === "InputVar").map((m) => i.find((O) => O.id === m.id)).filter((m) => !!m), h = u.children.filter((m) => m.tagName === "OutputVar").map((m) => a.find((O) => O.id === m.id)).filter((m) => !!m);
    return zd(u, l, h);
  });
}
async function xu() {
  const n = on();
  ot(n.sdk, "SDK not initialized");
  const i = await n.sdk.db.table(vt).where("tagName").equals("BehaviorDescription").or("tagName").equals("InputVar").or("tagName").equals("OutputVar").toArray().then((a) => {
    const u = a.filter((m) => m.tagName === "BehaviorDescription"), l = a.filter((m) => m.tagName === "InputVar"), h = a.filter((m) => m.tagName === "OutputVar");
    return [u, l, h];
  });
  return Qd(...i);
}
async function Jd(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = i.sdk.db.table(vt).where("tagName").equals("LNodeType");
  if (n) {
    const u = await a.and((l) => ge(l, "id") === n).first();
    if (!u) throw new Error("LNodeType not found for selected LNode");
    return u;
  }
  return a.toArray();
}
async function Zd(n) {
  const i = on();
  return ot(i.sdk, "SDK not initialized"), i.sdk.db.table(vt).where("tagName").equals("DOType").and((a) => n.includes(ge(a, "id") ?? "")).toArray();
}
async function eh() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("DA");
}
async function th() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("SourceRef");
}
async function nh() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("ControlRef");
}
function rh() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("LNode");
}
const ih = { class: "flex flex-wrap gap-3" }, oh = { class: "modal-box max-w-[34rem]" }, sh = { class: "text-lg font-bold" }, ah = { class: "grid grid-cols-2 gap-2" }, uh = { class: "flex flex-col gap-2 *:flex *:items-center *:gap-1.5" }, ch = ["value"], lh = { class: "grid grid-cols-2 items-center gap-2" }, fh = ["value"], dh = {
  key: 0,
  class: "grid grid-cols-2 items-center gap-2"
}, hh = ["aria-disabled"], ph = {
  value: "",
  disabled: "",
  selected: ""
}, mh = ["value"], yh = {
  key: 1,
  class: "grid grid-cols-2 items-center gap-2"
}, vh = ["aria-disabled"], gh = {
  value: "",
  disabled: "",
  selected: ""
}, bh = ["value"], _h = {
  key: 2,
  class: "grid grid-cols-2 items-center gap-2"
}, wh = ["aria-disabled"], xh = {
  value: "",
  disabled: "",
  selected: ""
}, Eh = ["value"], Th = { class: "grid grid-cols-2 items-center gap-2" }, Oh = ["defaultValue"], Sh = /* @__PURE__ */ To({
  __name: "add-behavior-variable",
  props: {
    type: {},
    onSubmit: { type: Function },
    behaviorDescription: {}
  },
  async setup(n) {
    let i, a;
    const u = n, l = on(), h = Zt(null), m = ([i, a] = vo(() => rh()), i = await i, a(), i), O = ([i, a] = vo(async () => Promise.all(
      m.map(async ($) => {
        const H = Kc($);
        let G = await l.sdk.getParent($);
        for (; G && G.tagName !== "Function"; )
          G = await l.sdk.getParent(G);
        return ot(
          G?.tagName == "Function",
          `LNode '${gu(H)}' has no Function parent`
        ), {
          label: `${ge(G, "name")}/${gu(H)}`,
          id: H.id
        };
      })
    )), i = await i, a(), i), C = Zt(
      u.type === "input" ? "sourceRef" : "controlRef"
    ), L = Zt(""), B = Fs(async () => {
      const $ = L.value;
      let H = await th();
      if ($) {
        const G = [], le = await Promise.all(
          H.map((R) => l.sdk.getParent(R))
        );
        for (let [R, ye] of le.entries())
          ye && ye.id === $ && G.push(H[R]);
        H = G;
      }
      return H.map(jc);
    }, []), I = Zt(""), X = dr(() => {
      const $ = B.value.find((H) => H.id === I.value);
      return $ ? `${$.input}_${$.inputInst}_${$.pDA}` : "";
    }), oe = Fs(async () => {
      const $ = L.value;
      let H = await nh();
      if ($) {
        const G = [], le = await Promise.all(
          H.map((R) => l.sdk.getParent(R))
        );
        for (let [R, ye] of le.entries())
          ye && ye.id === $ && G.push(H[R]);
        H = G;
      }
      return H.map(Bc);
    }, []), te = Zt(""), de = dr(() => {
      const $ = oe.value.find((H) => H.id === te.value);
      return $ ? `${$.output}_${$.outputInst}_${$.pDO}` : "";
    }), Re = Fs(async () => {
      const $ = m.find((Be) => Be.id === L.value), H = await Jd(ge($, "lnType")), G = Array.isArray(H) ? H : [H], le = await Promise.all(
        G.map((Be) => l.sdk?.findChildRecordsByTagName(Be, ["DO"])) ?? []
      ).then((Be) => Be.flat()), R = le.map((Be) => ge(Be, "type")).filter(Vd), ye = await Zd(R), Pe = ye.map((Be) => Be.id);
      let xe = await eh();
      xe = xe.filter(
        (Be) => Pe.some((Ne) => Be.parent?.id === Ne)
      );
      function ke({ parent: Be }) {
        const Ne = ge(
          ye.find(({ id: ve }) => ve === Be?.id),
          "id"
        );
        return le.find((ve) => ge(ve, "type") === Ne);
      }
      function it(Be) {
        const Ne = ke(Be);
        if (!(!Ne || !Ne.parent))
          return G.find((ve) => ve.id === Ne.parent.id);
      }
      return xe.map((Be) => ({
        ...Ld(Be),
        doName: ge(ke(Be), "name"),
        lNodeType: ge(it(Be), "id")
      }));
    }, []), Ae = Zt(""), Ke = dr(() => {
      const $ = Re.value.find((H) => H.id === Ae.value);
      return $ ? `${$.doName}_${$.name}` : "";
    });
    function Ve($) {
      return [
        ...$.inputVars.map((H) => H.varName),
        ...$.outputVars.map((H) => H.varName)
      ].flat();
    }
    async function z($) {
      const H = $.target, G = new FormData(H), le = Ud(G);
      let R = {
        varName: String(le.name).trim()
      };
      if (Ve(u.behaviorDescription).includes(R.varName)) {
        $.preventDefault();
        const ye = H.elements.namedItem("name");
        ye.setCustomValidity("Variable name is already taken"), ye.reportValidity();
        return;
      }
      if (le.type === "sourceRef" || le.type === "controlRef") {
        const ye = le.sourceRef || le.controlRef, Pe = await l.sdk.findRecordById(String(ye));
        ot(Pe, "SourceRef/ControlRef not found");
        const ke = (await l.sdk.getPath(Pe)).joinNames(), it = ge(Pe, "uuid");
        R[u.type == "input" ? "inputName" : "outputName"] = ke, R[u.type == "input" ? "inputUuid" : "outputUuid"] = it;
      }
      if (le.type === "dataAttribute") {
        const ye = await l.sdk.findRecordById(String(le.dataAttribute));
        ot(ye, "DataAttribute not found"), ot(ye.parent, "DataAttribute has no parent");
        const Pe = await l.sdk.findRecordById(ye.parent.id), xe = ge(Pe, "id");
        ot(xe, "DO Type not found");
        const ke = await l.sdk?.db.table(vt).where("tagName").equals("DO").and((Ne) => ge(Ne, "type") === xe).first();
        ot(ke, "DO not found");
        const it = m.find((Ne) => Ne.id === le.lNode);
        R.lnodeUuid = ge(it, "uuid"), R.daName = ge(ye, "name"), R.doName = ge(ke, "name");
        const Be = await l.sdk.getPath(ye);
        R.dataName = Be.joinNames();
      }
      await u.onSubmit(R), H.reset(), L.value = "", I.value = "", te.value = "", Ae.value = "", C.value = u.type === "input" ? "sourceRef" : "controlRef";
    }
    return ($, H) => (Xe(), Ze("div", ih, [
      _e("button", {
        type: "button",
        class: "btn btn-sm btn-primary btn-soft",
        onClick: H[0] || (H[0] = //@ts-ignore
        (...G) => h.value?.showModal && h.value?.showModal(...G))
      }, [
        Yl($.$slots, "default", {}, void 0)
      ]),
      _e("dialog", {
        ref_key: "dialog",
        ref: h,
        class: "modal text-neutral-700"
      }, [
        _e("div", oh, [
          _e("h3", sh, "Add " + mt(u.type) + " variable", 1),
          H[17] || (H[17] = _e("form", { method: "dialog" }, [
            _e("button", {
              class: "absolute top-[1.5rem] right-[1.5rem]",
              "aria-label": "Close input variable dialog"
            }, [
              _e("svg", {
                width: "28",
                height: "28",
                viewBox: "0 0 64 64"
              }, [
                _e("path", { d: "M16 14a2 2 0 0 0-1.414 3.414L29.172 32 14.586 46.586A2 2 0 1 0 17.414 49.414L32 34.828 46.586 49.414A2 2 0 1 0 49.414 46.586L34.828 32 49.414 17.414A2 2 0 0 0 46.586 14.586L32 29.172 17.414 14.586A2 2 0 0 0 16 14Z" })
              ])
            ])
          ], -1)),
          _e("form", {
            method: "dialog",
            onSubmit: fi(z, ["stop"]),
            class: "flex flex-col gap-4 mt-4"
          }, [
            _e("fieldset", null, [
              _e("div", ah, [
                H[9] || (H[9] = _e("legend", null, "Type", -1)),
                _e("div", uh, [
                  _e("label", null, [
                    ri(_e("input", {
                      type: "radio",
                      name: "type",
                      class: "radio radio-neutral",
                      "onUpdate:modelValue": H[1] || (H[1] = (G) => C.value = G),
                      value: u.type === "input" ? "sourceRef" : "controlRef",
                      checked: ""
                    }, null, 8, ch), [
                      [su, C.value]
                    ]),
                    mn(" " + mt(u.type === "input" ? "SourceRef" : "ControlRef"), 1)
                  ]),
                  _e("label", null, [
                    ri(_e("input", {
                      type: "radio",
                      name: "type",
                      class: "radio radio-neutral",
                      "onUpdate:modelValue": H[2] || (H[2] = (G) => C.value = G),
                      value: "dataAttribute"
                    }, null, 512), [
                      [su, C.value]
                    ]),
                    H[8] || (H[8] = mn(" Data Attribute "))
                  ])
                ])
              ])
            ]),
            _e("div", lh, [
              H[11] || (H[11] = _e("label", { for: "variable-function" }, "Function/LNode", -1)),
              ri(_e("select", {
                id: "variable-function",
                name: "lNode",
                class: "select select-bordered col-start-2",
                required: "",
                "onUpdate:modelValue": H[3] || (H[3] = (G) => L.value = G)
              }, [
                H[10] || (H[10] = _e("option", {
                  value: "",
                  disabled: "",
                  selected: ""
                }, "Choose an option", -1)),
                (Xe(!0), Ze(bt, null, di(Mt(O), (G) => (Xe(), Ze("option", {
                  key: G.id,
                  value: G.id
                }, mt(G.label), 9, fh))), 128))
              ], 512), [
                [ro, L.value]
              ])
            ]),
            C.value === "sourceRef" ? (Xe(), Ze("div", dh, [
              H[12] || (H[12] = _e("label", { for: "source-ref" }, "SourceRef", -1)),
              ri((Xe(), Ze("select", {
                id: "source-ref",
                name: "sourceRef",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Mt(B).length === 0,
                key: L.value,
                "onUpdate:modelValue": H[4] || (H[4] = (G) => I.value = G)
              }, [
                _e("option", ph, mt(Mt(B).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (Xe(!0), Ze(bt, null, di(Mt(B), (G) => (Xe(), Ze("option", {
                  key: G.id,
                  value: G.id
                }, mt(G.input) + "(" + mt(G.inputInst) + ")." + mt(G.pDA), 9, mh))), 128))
              ], 8, hh)), [
                [ro, I.value]
              ])
            ])) : An("", !0),
            C.value === "controlRef" ? (Xe(), Ze("div", yh, [
              H[13] || (H[13] = _e("label", { for: "control-ref" }, "ControlRef", -1)),
              ri((Xe(), Ze("select", {
                id: "control-ref",
                name: "controlRef",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Mt(oe).length === 0,
                key: L.value,
                "onUpdate:modelValue": H[5] || (H[5] = (G) => te.value = G)
              }, [
                _e("option", gh, mt(Mt(oe).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (Xe(!0), Ze(bt, null, di(Mt(oe), (G) => (Xe(), Ze("option", {
                  key: G.id,
                  value: G.id
                }, mt(G.output) + "(" + mt(G.outputInst) + ") ", 9, bh))), 128))
              ], 8, vh)), [
                [ro, te.value]
              ])
            ])) : An("", !0),
            C.value === "dataAttribute" ? (Xe(), Ze("div", _h, [
              H[14] || (H[14] = _e("label", { for: "data-attribute" }, "Data Attribute", -1)),
              ri((Xe(), Ze("select", {
                id: "data-attribute",
                name: "dataAttribute",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Mt(Re).length === 0,
                key: L.value,
                "onUpdate:modelValue": H[6] || (H[6] = (G) => Ae.value = G)
              }, [
                _e("option", xh, mt(Mt(Re).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (Xe(!0), Ze(bt, null, di(Mt(Re), (G) => (Xe(), Ze("option", {
                  key: G.id,
                  value: G.id
                }, mt(G.lNodeType) + "." + mt(G.doName) + "." + mt(G.name), 9, Eh))), 128))
              ], 8, wh)), [
                [ro, Ae.value]
              ])
            ])) : An("", !0),
            _e("div", Th, [
              H[15] || (H[15] = _e("label", { for: "input-variable-name" }, "Name", -1)),
              _e("input", {
                id: "input-variable-name",
                name: "name",
                placeholder: "Name",
                class: "input input-bordered col-start-2",
                required: "",
                defaultValue: C.value === "sourceRef" ? X.value : C.value === "controlRef" ? de.value : Ke.value,
                onInput: H[7] || (H[7] = (G) => {
                  const le = G.target;
                  le.validationMessage && le.setCustomValidity("");
                })
              }, null, 40, Oh)
            ]),
            H[16] || (H[16] = _e("div", { class: "modal-action" }, [
              _e("button", { class: "btn btn-primary" }, "Add Variable")
            ], -1))
          ], 32)
        ])
      ], 512)
    ]));
  }
}), Ah = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [u, l] of i)
    a[u] = l;
  return a;
}, Eu = /* @__PURE__ */ Ah(Sh, [["__scopeId", "data-v-40016595"]]);
function Fc(n, i) {
  const a = Zt(i?.initialValue), u = n.subscribe({
    next: (l) => a.value = l,
    error: i?.onError
  });
  return Wd(() => {
    u.unsubscribe();
  }), a;
}
async function Tu() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.db.table(Vo).toArray();
}
async function kh(n, i) {
  const a = on();
  ot(a.sdk, "SDK not initialized");
  const u = await n.text(), l = a.sdk.db.table(Vo);
  if (await l.where("filename").equals(n.name).first())
    throw new Error("A file with the same name already exists.");
  const m = {
    id: crypto.randomUUID(),
    filename: n.name,
    file: u
  };
  await l.add(m);
  const O = await a.sdk.findRecordById(i);
  return ot(O, "Parent not found"), await a.sdk.db.table(vt).update(O.id, {
    attributes: [...O.attributes, { name: "fileReference", value: n.name }]
  }), m;
}
async function Ph(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.db.table(Vo).get(n);
  ot(a, "Attachment not found"), await i.sdk.db.table(Vo).delete(n), await Mc(a.filename);
}
async function Mc(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.db.table(vt).where("tagName").equals("BehaviorDescription").and((u) => ge(u, "fileReference") === n).first();
  ot(a, "Behavior description not found"), await i.sdk.db.table(vt).update(a.id, {
    attributes: a.attributes.filter(
      (u) => u.name !== "fileReference"
    )
  });
}
const Ch = { class: "space-y-2" }, Dh = {
  key: 0,
  role: "alert",
  class: "alert alert-error alert-soft flex items-center justify-between"
}, Nh = {
  key: 1,
  class: "max-w-max flex items-center justify-between gap-4"
}, Ih = ["download", "title"], Rh = { class: "group-hover:underline underline-offset-2" }, Kh = /* @__PURE__ */ To({
  __name: "file-attachements",
  props: {
    behaviorDescription: {}
  },
  async setup(n) {
    let i, a;
    const u = n, l = Zt(!1), h = Zt("");
    async function m(oe) {
      l.value = !1, h.value = "";
      const te = oe.target;
      ot(oe.dataTransfer, "Invalid drop event");
      const { files: de } = oe.dataTransfer;
      if (oe.dataTransfer.clearData(), de.length == 0) return;
      if (de.length > 1) {
        h.value = "You cannot upload multiple files.";
        return;
      } else if (de[0].type !== "text/xml") {
        h.value = "File type is not supported.";
        return;
      }
      const Ae = te.closest("form").elements.namedItem("file");
      Ae.files = de, Ae.dispatchEvent(new Event("change"));
    }
    async function O(oe) {
      const te = oe.target;
      if (h.value = "", !(!te.files || te.files.length == 0))
        try {
          await kh(te.files[0], u.behaviorDescription?.id || "");
        } catch (de) {
          h.value = de instanceof Error ? de.message : String(de);
          return;
        }
    }
    const C = Rc(Tu), L = Fc(C, {
      initialValue: ([i, a] = vo(() => Tu()), i = await i, a(), i)
    }), B = dr(() => {
      const oe = u.behaviorDescription?.fileReference, te = L.value.find((de) => de.filename == oe);
      return !te && oe ? {
        id: null,
        filename: oe,
        file: ""
      } : te;
    });
    async function I(oe) {
      let te = oe.currentTarget;
      if (ot(B.value, "Invalid download attempt"), !B.value.id) {
        alert("This file has been manually attached and cannot be downloaded.");
        return;
      }
      if (!te.href) {
        oe.preventDefault();
        const de = new Blob([B.value.file], { type: "text/xml" }), Re = URL.createObjectURL(de);
        te.href = Re, te.click(), URL.revokeObjectURL(Re);
      }
    }
    async function X() {
      ot(B.value, "Invalid delete action"), B.value.id ? Ph(B.value.id) : Mc(B.value.filename);
    }
    return (oe, te) => (Xe(), Ze("div", Ch, [
      te[10] || (te[10] = _e("h2", { class: "font-medium" }, "Attached Behavior Description File:", -1)),
      B.value ? (Xe(), Ze("div", Nh, [
        _e("a", {
          class: ho(["block link link-primary no-underline group", { "hover:cursor-not-allowed": !B.value.id }]),
          onClick: I,
          download: B.value?.filename,
          title: B.value.id ? void 0 : "This file has been manually attached and cannot be downloaded."
        }, [
          te[8] || (te[8] = _e("svg", {
            class: "size-4 inline fill-current mr-1.5",
            viewBox: "0 -960 960 960"
          }, [
            _e("path", { d: "m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z" })
          ], -1)),
          _e("span", Rh, mt(B.value.filename), 1)
        ], 10, Ih),
        _e("button", {
          class: "cursor-pointer text-neutral-400 hover:text-neutral-800",
          title: "Remove attachment",
          onClick: X
        }, te[9] || (te[9] = [
          _e("svg", {
            height: "24px",
            viewBox: "0 -960 960 960",
            class: "size-4.5 fill-current",
            "aria-label": "Remove attachment"
          }, [
            _e("path", { d: "M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z" })
          ], -1)
        ]))
      ])) : (Xe(), Ze("form", {
        key: 0,
        method: "POST",
        onSubmit: te[4] || (te[4] = fi(() => {
        }, ["prevent"])),
        class: "flex flex-col gap-4 max-w-xs"
      }, [
        h.value ? (Xe(), Ze("div", Dh, [
          mn(mt(h.value) + " ", 1),
          _e("button", {
            class: "cursor-pointer size-4 saturate-75",
            "aria-label": "Hide error",
            onClick: te[0] || (te[0] = (de) => h.value = "")
          }, te[5] || (te[5] = [
            _e("svg", { viewBox: "0 0 64 64" }, [
              _e("path", {
                class: "fill-current",
                d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
              })
            ], -1)
          ]))
        ])) : An("", !0),
        _e("label", {
          onDragenter: te[1] || (te[1] = fi((de) => l.value = !0, ["prevent"])),
          onDragover: te[2] || (te[2] = fi((de) => l.value = !0, ["prevent"])),
          onDragleave: te[3] || (te[3] = fi((de) => l.value = !1, ["prevent"])),
          onDrop: fi(m, ["prevent"]),
          class: ho(["border border-dashed rounded-md px-4 py-4 cursor-pointer text-center font-medium transition-colors flex flex-col gap-1", {
            "border-primary bg-cyan-50 text-cyan-900": l.value,
            "border-gray-400 text-gray-600 hover:border-primary hover:bg-cyan-50 hover:text-cyan-900": !l.value
          }])
        }, [
          te[6] || (te[6] = mn(" Drop an XML file into this zone ")),
          te[7] || (te[7] = _e("span", { class: "font-light text-sm" }, "or click to select from your file system.", -1)),
          _e("input", {
            name: "file",
            type: "file",
            hidden: "",
            accept: ".xml",
            onChange: O
          }, null, 32)
        ], 34)
      ], 32))
    ]));
  }
}), jh = ["value"], Bh = { class: "w-full my-8" }, Fh = { class: "pr-3" }, Mh = { class: "font-medium text-lg" }, qh = { key: 0 }, Lh = { key: 1 }, Uh = { class: "font-medium text-lg" }, Vh = { key: 0 }, $h = { key: 1 }, Hh = { class: "*:py-4" }, Wh = /* @__PURE__ */ To({
  __name: "behavior-description-editor",
  async setup(n) {
    let i, a;
    const u = on(), l = Zt(""), h = Fc(Rc(xu), {
      initialValue: ([i, a] = vo(() => xu()), i = await i, a(), i)
    }), m = dr(
      () => h.value.find((B) => B.id === l.value)
    ), O = dr(() => {
      if (!m.value) return [];
      const { inputVars: B, outputVars: I } = m.value, X = Math.max(B.length, I.length);
      return Array.from({ length: X }, (oe, te) => ({
        inputVar: B[te] ?? null,
        outputVar: I[te] ?? null
      }));
    });
    async function C(B) {
      const I = await u.sdk.createRecord({
        tagName: "InputVar",
        attributes: bu(B),
        children: [],
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        parent: { id: l.value, tagName: "BehaviorDescription" },
        value: ""
      }), X = await u.sdk.findRecordById(l.value);
      ot(X, "BehaviorDescription not found"), await u.sdk.ensureRelationship(X, I);
    }
    async function L(B) {
      const I = await u.sdk.createRecord({
        tagName: "OutputVar",
        attributes: bu(B),
        children: [],
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        parent: { id: l.value, tagName: "BehaviorDescription" },
        value: ""
      }), X = await u.sdk.findRecordById(l.value);
      ot(X, "BehaviorDescription not found"), await u.sdk.ensureRelationship(X, I);
    }
    return (B, I) => (Xe(), Ze(bt, null, [
      I[9] || (I[9] = _e("h1", { class: "font-bold text-4xl my-4" }, "Behavior Description Editor", -1)),
      I[10] || (I[10] = _e("label", { for: "behavior-select" }, "Element:", -1)),
      I[11] || (I[11] = mn()),
      I[12] || (I[12] = _e("br", null, null, -1)),
      ri(_e("select", {
        "onUpdate:modelValue": I[0] || (I[0] = (X) => l.value = X),
        name: "behavior",
        id: "behavior-select",
        class: "border py-1"
      }, [
        I[1] || (I[1] = _e("option", {
          value: "",
          disabled: ""
        }, "No behavior description selected", -1)),
        (Xe(!0), Ze(bt, null, di(Mt(h), (X) => (Xe(), Ze("option", {
          key: X.id,
          value: X.id
        }, mt(X.name), 9, jh))), 128))
      ], 512), [
        [ro, l.value]
      ]),
      m.value ? (Xe(), Ze(bt, { key: 0 }, [
        _e("table", Bh, [
          I[8] || (I[8] = _e("thead", null, [
            _e("tr", { class: "text-left text-2xl" }, [
              _e("th", null, "Input Variables"),
              _e("th", null, "Output Variables")
            ])
          ], -1)),
          _e("tbody", null, [
            (Xe(!0), Ze(bt, null, di(O.value, (X, oe) => (Xe(), Ze("tr", {
              key: oe,
              class: "*:align-top *:py-2"
            }, [
              _e("td", Fh, [
                X.inputVar ? (Xe(), Ze(bt, { key: 0 }, [
                  _e("div", Mh, mt(X.inputVar.varName), 1),
                  Mt(_u)(X.inputVar) ? (Xe(), Ze("div", qh, [
                    mn(mt(X.inputVar.dataName) + " ", 1),
                    I[2] || (I[2] = _e("span", { class: "bg-blue-200 text-xs px-1 rounded" }, "dataName", -1))
                  ])) : An("", !0),
                  Mt(Yd)(X.inputVar) ? (Xe(), Ze("div", Lh, [
                    mn(mt(X.inputVar.inputName) + " ", 1),
                    I[3] || (I[3] = _e("span", { class: "bg-orange-200 text-xs px-1 rounded" }, "inputName", -1))
                  ])) : An("", !0)
                ], 64)) : An("", !0)
              ]),
              _e("td", null, [
                X.outputVar ? (Xe(), Ze(bt, { key: 0 }, [
                  _e("div", Uh, mt(X.outputVar.varName), 1),
                  Mt(_u)(X.outputVar) ? (Xe(), Ze("div", Vh, [
                    mn(mt(X.outputVar.dataName) + " ", 1),
                    I[4] || (I[4] = _e("span", { class: "bg-blue-200 text-xs px-1 rounded" }, "dataName", -1))
                  ])) : An("", !0),
                  Mt(Xd)(X.outputVar) ? (Xe(), Ze("div", $h, [
                    mn(mt(X.outputVar.outputName) + " ", 1),
                    I[5] || (I[5] = _e("span", { class: "bg-orange-200 text-xs px-1 rounded" }, "outputName", -1))
                  ])) : An("", !0)
                ], 64)) : An("", !0)
              ])
            ]))), 128))
          ]),
          _e("tfoot", null, [
            _e("tr", Hh, [
              _e("td", null, [
                St(Eu, {
                  type: "input",
                  onSubmit: C,
                  behaviorDescription: m.value
                }, {
                  default: Fo(() => I[6] || (I[6] = [
                    mn(" + Input Variable ")
                  ])),
                  _: 1,
                  __: [6]
                }, 8, ["behaviorDescription"])
              ]),
              _e("td", null, [
                St(Eu, {
                  type: "output",
                  onSubmit: L,
                  behaviorDescription: m.value
                }, {
                  default: Fo(() => I[7] || (I[7] = [
                    mn(" + Output Variable ")
                  ])),
                  _: 1,
                  __: [7]
                }, 8, ["behaviorDescription"])
              ])
            ])
          ])
        ]),
        St(Kh, { behaviorDescription: m.value }, null, 8, ["behaviorDescription"])
      ], 64)) : An("", !0)
    ], 64));
  }
}), Gh = ["id"], Yh = /* @__PURE__ */ To({
  __name: "app",
  props: {
    api: {}
  },
  async setup(n) {
    let i, a;
    const u = n, l = on(), h = "logic-editor", m = Zt();
    return [i, a] = vo(() => l.initApp(u.api.activeFileName.value)), await i, a(), oc(() => {
      m.value = u.api.activeFileName.subscribe((O) => {
        l.initApp(O);
      });
    }), Oa(() => {
      m.value?.();
    }), (O, C) => {
      const L = Hl("Layout");
      return Xe(), Ze("article", {
        id: Mt(h),
        style: { height: "100%" }
      }, [
        St(L, null, {
          default: Fo(() => [
            St(Wh)
          ]),
          _: 1
        })
      ], 8, Gh);
    };
  }
});
function yp(n, i) {
  if (!document.getElementById(n)) {
    console.error({ msg: "could not find root element", rootId: n });
    return;
  }
  const u = vd(
    /* @__PURE__ */ To({
      props: { api: i },
      setup(l) {
        return () => Ya(Af, Ya(Yh, { ...l }));
      }
    }),
    { api: i }
  );
  return u.use(_d()), u.mount(`#${n}`), u.unmount;
}
export {
  yp as default
};
