(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`select[data-v-40016595]:has(option[value=""]){color:var(--color-neutral-500)}:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true]))[data-v-40016595]{cursor:not-allowed}:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) select[data-v-40016595],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) fieldset[data-v-40016595],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) textarea[data-v-40016595],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) input[data-v-40016595]{pointer-events:none;-webkit-user-select:none;user-select:none}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-200:oklch(90.1% .076 70.697);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-900:oklch(39.8% .07 227.392);--color-blue-200:oklch(88.2% .059 254.128);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-neutral-400:oklch(70.8% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-800:oklch(26.9% 0 0);--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-light:300;--font-weight-medium:500;--font-weight-bold:700;--radius-md:.375rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-2{grid-column-start:2}.my-4{margin-block:calc(var(--spacing)*4)}.my-8{margin-block:calc(var(--spacing)*8)}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.h-full{height:100%}.w-full{width:100%}.max-w-\\[34rem\\]{max-width:34rem}.max-w-max{max-width:max-content}.max-w-xs{max-width:var(--container-xs)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.rounded{border-radius:.25rem}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.alert-error{border-color:var(--color-error);color:var(--color-error-content);--alert-color:var(--color-error)}.border-gray-400{border-color:var(--color-gray-400)}.border-primary{border-color:var(--color-primary)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-orange-200{background-color:var(--color-orange-200)}.fill-current{fill:currentColor}.px-1{padding-inline:calc(var(--spacing)*1)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-4{padding-block:calc(var(--spacing)*4)}.pr-3{padding-right:calc(var(--spacing)*3)}.text-center{text-align:center}.text-left{text-align:left}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.link-primary{color:var(--color-primary)}@media (hover:hover){.link-primary:hover{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.link-primary:hover{color:color-mix(in oklab,var(--color-primary)80%,#000)}}}.text-cyan-900{color:var(--color-cyan-900)}.text-gray-600{color:var(--color-gray-600)}.text-neutral-400{color:var(--color-neutral-400)}.text-neutral-700{color:var(--color-neutral-700)}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.saturate-75{--tw-saturate:saturate(75%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.radio-neutral{--input-color:var(--color-neutral)}:is(.\\*\\:flex>*){display:flex}:is(.\\*\\:items-center>*){align-items:center}:is(.\\*\\:gap-1\\.5>*){gap:calc(var(--spacing)*1.5)}:is(.\\*\\:py-2>*){padding-block:calc(var(--spacing)*2)}:is(.\\*\\:py-4>*){padding-block:calc(var(--spacing)*4)}:is(.\\*\\:align-top>*){vertical-align:top}@media (hover:hover){.group-hover\\:underline:is(:where(.group):hover *){text-decoration-line:underline}.hover\\:cursor-not-allowed:hover{cursor:not-allowed}.hover\\:border-primary:hover{border-color:var(--color-primary)}.hover\\:bg-cyan-50:hover{background-color:var(--color-cyan-50)}.hover\\:text-cyan-900:hover{color:var(--color-cyan-900)}.hover\\:text-neutral-800:hover{color:var(--color-neutral-800)}}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true]{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true]{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true])::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true])::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
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
const ut = {}, pi = [], Kn = () => {
}, Lc = () => !1, Vo = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), ua = (n) => n.startsWith("onUpdate:"), Vt = Object.assign, ca = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, Vc = Object.prototype.hasOwnProperty, rt = (n, i) => Vc.call(n, i), Ne = Array.isArray, mi = (n) => xo(n) === "[object Map]", $o = (n) => xo(n) === "[object Set]", Ca = (n) => xo(n) === "[object Date]", qe = (n) => typeof n == "function", Tt = (n) => typeof n == "string", Pn = (n) => typeof n == "symbol", ht = (n) => n !== null && typeof n == "object", la = (n) => (ht(n) || qe(n)) && qe(n.then) && qe(n.catch), Su = Object.prototype.toString, xo = (n) => Su.call(n), $c = (n) => xo(n).slice(8, -1), Au = (n) => xo(n) === "[object Object]", fa = (n) => Tt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, oo = /* @__PURE__ */ aa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ho = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, Hc = /-(\w)/g, wr = Ho(
  (n) => n.replace(Hc, (i, a) => a ? a.toUpperCase() : "")
), Wc = /\B([A-Z])/g, ui = Ho(
  (n) => n.replace(Wc, "-$1").toLowerCase()
), ku = Ho((n) => n.charAt(0).toUpperCase() + n.slice(1)), Os = Ho(
  (n) => n ? `on${ku(n)}` : ""
), br = (n, i) => !Object.is(n, i), Po = (n, ...i) => {
  for (let a = 0; a < n.length; a++)
    n[a](...i);
}, Fs = (n, i, a, u = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: a
  });
}, Pu = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
}, Gc = (n) => {
  const i = Tt(n) ? Number(n) : NaN;
  return isNaN(i) ? n : i;
};
let Da;
const Wo = () => Da || (Da = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function da(n) {
  if (Ne(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++) {
      const u = n[a], f = Tt(u) ? zc(u) : da(u);
      if (f)
        for (const h in f)
          i[h] = f[h];
    }
    return i;
  } else if (Tt(n) || ht(n))
    return n;
}
const Yc = /;(?![^(]*\))/g, Xc = /:([^]+)/, Qc = /\/\*[^]*?\*\//g;
function zc(n) {
  const i = {};
  return n.replace(Qc, "").split(Yc).forEach((a) => {
    if (a) {
      const u = a.split(Xc);
      u.length > 1 && (i[u[0].trim()] = u[1].trim());
    }
  }), i;
}
function po(n) {
  let i = "";
  if (Tt(n))
    i = n;
  else if (Ne(n))
    for (let a = 0; a < n.length; a++) {
      const u = po(n[a]);
      u && (i += u + " ");
    }
  else if (ht(n))
    for (const a in n)
      n[a] && (i += a + " ");
  return i.trim();
}
const Jc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Zc = /* @__PURE__ */ aa(Jc);
function Iu(n) {
  return !!n || n === "";
}
function el(n, i) {
  if (n.length !== i.length) return !1;
  let a = !0;
  for (let u = 0; a && u < n.length; u++)
    a = _i(n[u], i[u]);
  return a;
}
function _i(n, i) {
  if (n === i) return !0;
  let a = Ca(n), u = Ca(i);
  if (a || u)
    return a && u ? n.getTime() === i.getTime() : !1;
  if (a = Pn(n), u = Pn(i), a || u)
    return n === i;
  if (a = Ne(n), u = Ne(i), a || u)
    return a && u ? el(n, i) : !1;
  if (a = ht(n), u = ht(i), a || u) {
    if (!a || !u)
      return !1;
    const f = Object.keys(n).length, h = Object.keys(i).length;
    if (f !== h)
      return !1;
    for (const y in n) {
      const O = n.hasOwnProperty(y), I = i.hasOwnProperty(y);
      if (O && !I || !O && I || !_i(n[y], i[y]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function tl(n, i) {
  return n.findIndex((a) => _i(a, i));
}
const Nu = (n) => !!(n && n.__v_isRef === !0), yt = (n) => Tt(n) ? n : n == null ? "" : Ne(n) || ht(n) && (n.toString === Su || !qe(n.toString)) ? Nu(n) ? yt(n.value) : JSON.stringify(n, Cu, 2) : String(n), Cu = (n, i) => Nu(i) ? Cu(n, i.value) : mi(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (a, [u, f], h) => (a[Ss(u, h) + " =>"] = f, a),
    {}
  )
} : $o(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((a) => Ss(a))
} : Pn(i) ? Ss(i) : ht(i) && !Ne(i) && !Au(i) ? String(i) : i, Ss = (n, i = "") => {
  var a;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Pn(n) ? `Symbol(${(a = n.description) != null ? a : i})` : n
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ut;
class Du {
  constructor(i = !1) {
    this.detached = i, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ut, !i && Ut && (this.index = (Ut.scopes || (Ut.scopes = [])).push(
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
      const a = Ut;
      try {
        return Ut = this, i();
      } finally {
        Ut = a;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ut, Ut = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ut = this.prevScope, this.prevScope = void 0);
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
        const f = this.parent.scopes.pop();
        f && f !== this && (this.parent.scopes[this.index] = f, f.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ru(n) {
  return new Du(n);
}
function ha() {
  return Ut;
}
function Ku(n, i = !1) {
  Ut && Ut.cleanups.push(n);
}
let ft;
const As = /* @__PURE__ */ new WeakSet();
class ju {
  constructor(i) {
    this.fn = i, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ut && Ut.active && Ut.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, As.has(this) && (As.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fu(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ra(this), Mu(this);
    const i = ft, a = kn;
    ft = this, kn = !0;
    try {
      return this.fn();
    } finally {
      qu(this), ft = i, kn = a, this.flags &= -3;
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
    this.flags & 64 ? As.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ms(this) && this.run();
  }
  get dirty() {
    return Ms(this);
  }
}
let Bu = 0, so, ao;
function Fu(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = ao, ao = n;
    return;
  }
  n.next = so, so = n;
}
function pa() {
  Bu++;
}
function ma() {
  if (--Bu > 0)
    return;
  if (ao) {
    let i = ao;
    for (ao = void 0; i; ) {
      const a = i.next;
      i.next = void 0, i.flags &= -9, i = a;
    }
  }
  let n;
  for (; so; ) {
    let i = so;
    for (so = void 0; i; ) {
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
function Mu(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function qu(n) {
  let i, a = n.depsTail, u = a;
  for (; u; ) {
    const f = u.prevDep;
    u.version === -1 ? (u === a && (a = f), ya(u), nl(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = f;
  }
  n.deps = i, n.depsTail = a;
}
function Ms(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (Uu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function Uu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === mo) || (n.globalVersion = mo, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Ms(n))))
    return;
  n.flags |= 2;
  const i = n.dep, a = ft, u = kn;
  ft = n, kn = !0;
  try {
    Mu(n);
    const f = n.fn(n._value);
    (i.version === 0 || br(f, n._value)) && (n.flags |= 128, n._value = f, i.version++);
  } catch (f) {
    throw i.version++, f;
  } finally {
    ft = a, kn = u, qu(n), n.flags &= -3;
  }
}
function ya(n, i = !1) {
  const { dep: a, prevSub: u, nextSub: f } = n;
  if (u && (u.nextSub = f, n.prevSub = void 0), f && (f.prevSub = u, n.nextSub = void 0), a.subs === n && (a.subs = u, !u && a.computed)) {
    a.computed.flags &= -5;
    for (let h = a.computed.deps; h; h = h.nextDep)
      ya(h, !0);
  }
  !i && !--a.sc && a.map && a.map.delete(a.key);
}
function nl(n) {
  const { prevDep: i, nextDep: a } = n;
  i && (i.nextDep = a, n.prevDep = void 0), a && (a.prevDep = i, n.nextDep = void 0);
}
let kn = !0;
const Lu = [];
function dr() {
  Lu.push(kn), kn = !1;
}
function hr() {
  const n = Lu.pop();
  kn = n === void 0 ? !0 : n;
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
let mo = 0;
class rl {
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
    if (!ft || !kn || ft === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== ft)
      a = this.activeLink = new rl(ft, this), ft.deps ? (a.prevDep = ft.depsTail, ft.depsTail.nextDep = a, ft.depsTail = a) : ft.deps = ft.depsTail = a, Vu(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const u = a.nextDep;
      u.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = u), a.prevDep = ft.depsTail, a.nextDep = void 0, ft.depsTail.nextDep = a, ft.depsTail = a, ft.deps === a && (ft.deps = u);
    }
    return a;
  }
  trigger(i) {
    this.version++, mo++, this.notify(i);
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
function Vu(n) {
  if (n.dep.sc++, n.sub.flags & 4) {
    const i = n.dep.computed;
    if (i && !n.dep.subs) {
      i.flags |= 20;
      for (let u = i.deps; u; u = u.nextDep)
        Vu(u);
    }
    const a = n.dep.subs;
    a !== n && (n.prevSub = a, a && (a.nextSub = n)), n.dep.subs = n;
  }
}
const Ro = /* @__PURE__ */ new WeakMap(), ii = Symbol(
  ""
), qs = Symbol(
  ""
), yo = Symbol(
  ""
);
function Lt(n, i, a) {
  if (kn && ft) {
    let u = Ro.get(n);
    u || Ro.set(n, u = /* @__PURE__ */ new Map());
    let f = u.get(a);
    f || (u.set(a, f = new va()), f.map = u, f.key = a), f.track();
  }
}
function cr(n, i, a, u, f, h) {
  const y = Ro.get(n);
  if (!y) {
    mo++;
    return;
  }
  const O = (I) => {
    I && I.trigger();
  };
  if (pa(), i === "clear")
    y.forEach(O);
  else {
    const I = Ne(n), L = I && fa(a);
    if (I && a === "length") {
      const B = Number(u);
      y.forEach((D, X) => {
        (X === "length" || X === yo || !Pn(X) && X >= B) && O(D);
      });
    } else
      switch ((a !== void 0 || y.has(void 0)) && O(y.get(a)), L && O(y.get(yo)), i) {
        case "add":
          I ? L && O(y.get("length")) : (O(y.get(ii)), mi(n) && O(y.get(qs)));
          break;
        case "delete":
          I || (O(y.get(ii)), mi(n) && O(y.get(qs)));
          break;
        case "set":
          mi(n) && O(y.get(ii));
          break;
      }
  }
  ma();
}
function il(n, i) {
  const a = Ro.get(n);
  return a && a.get(i);
}
function ci(n) {
  const i = et(n);
  return i === n ? i : (Lt(i, "iterate", yo), yn(n) ? i : i.map(Mt));
}
function Go(n) {
  return Lt(n = et(n), "iterate", yo), n;
}
const ol = {
  __proto__: null,
  [Symbol.iterator]() {
    return ks(this, Symbol.iterator, Mt);
  },
  concat(...n) {
    return ci(this).concat(
      ...n.map((i) => Ne(i) ? ci(i) : i)
    );
  },
  entries() {
    return ks(this, "entries", (n) => (n[1] = Mt(n[1]), n));
  },
  every(n, i) {
    return ar(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return ar(this, "filter", n, i, (a) => a.map(Mt), arguments);
  },
  find(n, i) {
    return ar(this, "find", n, i, Mt, arguments);
  },
  findIndex(n, i) {
    return ar(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return ar(this, "findLast", n, i, Mt, arguments);
  },
  findLastIndex(n, i) {
    return ar(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return ar(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return Ps(this, "includes", n);
  },
  indexOf(...n) {
    return Ps(this, "indexOf", n);
  },
  join(n) {
    return ci(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return Ps(this, "lastIndexOf", n);
  },
  map(n, i) {
    return ar(this, "map", n, i, void 0, arguments);
  },
  pop() {
    return no(this, "pop");
  },
  push(...n) {
    return no(this, "push", n);
  },
  reduce(n, ...i) {
    return Ka(this, "reduce", n, i);
  },
  reduceRight(n, ...i) {
    return Ka(this, "reduceRight", n, i);
  },
  shift() {
    return no(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(n, i) {
    return ar(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return no(this, "splice", n);
  },
  toReversed() {
    return ci(this).toReversed();
  },
  toSorted(n) {
    return ci(this).toSorted(n);
  },
  toSpliced(...n) {
    return ci(this).toSpliced(...n);
  },
  unshift(...n) {
    return no(this, "unshift", n);
  },
  values() {
    return ks(this, "values", Mt);
  }
};
function ks(n, i, a) {
  const u = Go(n), f = u[i]();
  return u !== n && !yn(n) && (f._next = f.next, f.next = () => {
    const h = f._next();
    return h.value && (h.value = a(h.value)), h;
  }), f;
}
const sl = Array.prototype;
function ar(n, i, a, u, f, h) {
  const y = Go(n), O = y !== n && !yn(n), I = y[i];
  if (I !== sl[i]) {
    const D = I.apply(n, h);
    return O ? Mt(D) : D;
  }
  let L = a;
  y !== n && (O ? L = function(D, X) {
    return a.call(this, Mt(D), X, n);
  } : a.length > 2 && (L = function(D, X) {
    return a.call(this, D, X, n);
  }));
  const B = I.call(y, L, u);
  return O && f ? f(B) : B;
}
function Ka(n, i, a, u) {
  const f = Go(n);
  let h = a;
  return f !== n && (yn(n) ? a.length > 3 && (h = function(y, O, I) {
    return a.call(this, y, O, I, n);
  }) : h = function(y, O, I) {
    return a.call(this, y, Mt(O), I, n);
  }), f[i](h, ...u);
}
function Ps(n, i, a) {
  const u = et(n);
  Lt(u, "iterate", yo);
  const f = u[i](...a);
  return (f === -1 || f === !1) && _a(a[0]) ? (a[0] = et(a[0]), u[i](...a)) : f;
}
function no(n, i, a = []) {
  dr(), pa();
  const u = et(n)[i].apply(n, a);
  return ma(), hr(), u;
}
const al = /* @__PURE__ */ aa("__proto__,__v_isRef,__isVue"), $u = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Pn)
);
function ul(n) {
  Pn(n) || (n = String(n));
  const i = et(this);
  return Lt(i, "has", n), i.hasOwnProperty(n);
}
class Hu {
  constructor(i = !1, a = !1) {
    this._isReadonly = i, this._isShallow = a;
  }
  get(i, a, u) {
    if (a === "__v_skip") return i.__v_skip;
    const f = this._isReadonly, h = this._isShallow;
    if (a === "__v_isReactive")
      return !f;
    if (a === "__v_isReadonly")
      return f;
    if (a === "__v_isShallow")
      return h;
    if (a === "__v_raw")
      return u === (f ? h ? gl : Xu : h ? Yu : Gu).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const y = Ne(i);
    if (!f) {
      let I;
      if (y && (I = ol[a]))
        return I;
      if (a === "hasOwnProperty")
        return ul;
    }
    const O = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      _t(i) ? i : u
    );
    return (Pn(a) ? $u.has(a) : al(a)) || (f || Lt(i, "get", a), h) ? O : _t(O) ? y && fa(a) ? O : O.value : ht(O) ? f ? Qu(O) : Yo(O) : O;
  }
}
class Wu extends Hu {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, f) {
    let h = i[a];
    if (!this._isShallow) {
      const I = xr(h);
      if (!yn(u) && !xr(u) && (h = et(h), u = et(u)), !Ne(i) && _t(h) && !_t(u))
        return I ? !1 : (h.value = u, !0);
    }
    const y = Ne(i) && fa(a) ? Number(a) < i.length : rt(i, a), O = Reflect.set(
      i,
      a,
      u,
      _t(i) ? i : f
    );
    return i === et(f) && (y ? br(u, h) && cr(i, "set", a, u) : cr(i, "add", a, u)), O;
  }
  deleteProperty(i, a) {
    const u = rt(i, a);
    i[a];
    const f = Reflect.deleteProperty(i, a);
    return f && u && cr(i, "delete", a, void 0), f;
  }
  has(i, a) {
    const u = Reflect.has(i, a);
    return (!Pn(a) || !$u.has(a)) && Lt(i, "has", a), u;
  }
  ownKeys(i) {
    return Lt(
      i,
      "iterate",
      Ne(i) ? "length" : ii
    ), Reflect.ownKeys(i);
  }
}
class cl extends Hu {
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
const ll = /* @__PURE__ */ new Wu(), fl = /* @__PURE__ */ new cl(), dl = /* @__PURE__ */ new Wu(!0);
const Us = (n) => n, So = (n) => Reflect.getPrototypeOf(n);
function hl(n, i, a) {
  return function(...u) {
    const f = this.__v_raw, h = et(f), y = mi(h), O = n === "entries" || n === Symbol.iterator && y, I = n === "keys" && y, L = f[n](...u), B = a ? Us : i ? Ko : Mt;
    return !i && Lt(
      h,
      "iterate",
      I ? qs : ii
    ), {
      // iterator protocol
      next() {
        const { value: D, done: X } = L.next();
        return X ? { value: D, done: X } : {
          value: O ? [B(D[0]), B(D[1])] : B(D),
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
function Ao(n) {
  return function(...i) {
    return n === "delete" ? !1 : n === "clear" ? void 0 : this;
  };
}
function pl(n, i) {
  const a = {
    get(f) {
      const h = this.__v_raw, y = et(h), O = et(f);
      n || (br(f, O) && Lt(y, "get", f), Lt(y, "get", O));
      const { has: I } = So(y), L = i ? Us : n ? Ko : Mt;
      if (I.call(y, f))
        return L(h.get(f));
      if (I.call(y, O))
        return L(h.get(O));
      h !== y && h.get(f);
    },
    get size() {
      const f = this.__v_raw;
      return !n && Lt(et(f), "iterate", ii), Reflect.get(f, "size", f);
    },
    has(f) {
      const h = this.__v_raw, y = et(h), O = et(f);
      return n || (br(f, O) && Lt(y, "has", f), Lt(y, "has", O)), f === O ? h.has(f) : h.has(f) || h.has(O);
    },
    forEach(f, h) {
      const y = this, O = y.__v_raw, I = et(O), L = i ? Us : n ? Ko : Mt;
      return !n && Lt(I, "iterate", ii), O.forEach((B, D) => f.call(h, L(B), L(D), y));
    }
  };
  return Vt(
    a,
    n ? {
      add: Ao("add"),
      set: Ao("set"),
      delete: Ao("delete"),
      clear: Ao("clear")
    } : {
      add(f) {
        !i && !yn(f) && !xr(f) && (f = et(f));
        const h = et(this);
        return So(h).has.call(h, f) || (h.add(f), cr(h, "add", f, f)), this;
      },
      set(f, h) {
        !i && !yn(h) && !xr(h) && (h = et(h));
        const y = et(this), { has: O, get: I } = So(y);
        let L = O.call(y, f);
        L || (f = et(f), L = O.call(y, f));
        const B = I.call(y, f);
        return y.set(f, h), L ? br(h, B) && cr(y, "set", f, h) : cr(y, "add", f, h), this;
      },
      delete(f) {
        const h = et(this), { has: y, get: O } = So(h);
        let I = y.call(h, f);
        I || (f = et(f), I = y.call(h, f)), O && O.call(h, f);
        const L = h.delete(f);
        return I && cr(h, "delete", f, void 0), L;
      },
      clear() {
        const f = et(this), h = f.size !== 0, y = f.clear();
        return h && cr(
          f,
          "clear",
          void 0,
          void 0
        ), y;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((f) => {
    a[f] = hl(f, n, i);
  }), a;
}
function ga(n, i) {
  const a = pl(n, i);
  return (u, f, h) => f === "__v_isReactive" ? !n : f === "__v_isReadonly" ? n : f === "__v_raw" ? u : Reflect.get(
    rt(a, f) && f in u ? a : u,
    f,
    h
  );
}
const ml = {
  get: /* @__PURE__ */ ga(!1, !1)
}, yl = {
  get: /* @__PURE__ */ ga(!1, !0)
}, vl = {
  get: /* @__PURE__ */ ga(!0, !1)
};
const Gu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), Xu = /* @__PURE__ */ new WeakMap(), gl = /* @__PURE__ */ new WeakMap();
function bl(n) {
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
function _l(n) {
  return n.__v_skip || !Object.isExtensible(n) ? 0 : bl($c(n));
}
function Yo(n) {
  return xr(n) ? n : ba(
    n,
    !1,
    ll,
    ml,
    Gu
  );
}
function wl(n) {
  return ba(
    n,
    !1,
    dl,
    yl,
    Yu
  );
}
function Qu(n) {
  return ba(
    n,
    !0,
    fl,
    vl,
    Xu
  );
}
function ba(n, i, a, u, f) {
  if (!ht(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const h = _l(n);
  if (h === 0)
    return n;
  const y = f.get(n);
  if (y)
    return y;
  const O = new Proxy(
    n,
    h === 2 ? u : a
  );
  return f.set(n, O), O;
}
function _r(n) {
  return xr(n) ? _r(n.__v_raw) : !!(n && n.__v_isReactive);
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
  return !rt(n, "__v_skip") && Object.isExtensible(n) && Fs(n, "__v_skip", !0), n;
}
const Mt = (n) => ht(n) ? Yo(n) : n, Ko = (n) => ht(n) ? Qu(n) : n;
function _t(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function Zt(n) {
  return zu(n, !1);
}
function Ls(n) {
  return zu(n, !0);
}
function zu(n, i) {
  return _t(n) ? n : new xl(n, i);
}
class xl {
  constructor(i, a) {
    this.dep = new va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : et(i), this._value = a ? i : Mt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || yn(i) || xr(i);
    i = u ? i : et(i), br(i, a) && (this._rawValue = i, this._value = u ? i : Mt(i), this.dep.trigger());
  }
}
function Ft(n) {
  return _t(n) ? n.value : n;
}
const El = {
  get: (n, i, a) => i === "__v_raw" ? n : Ft(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const f = n[i];
    return _t(f) && !_t(a) ? (f.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function Ju(n) {
  return _r(n) ? n : new Proxy(n, El);
}
function Tl(n) {
  const i = Ne(n) ? new Array(n.length) : {};
  for (const a in n)
    i[a] = Sl(n, a);
  return i;
}
class Ol {
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
    return il(et(this._object), this._key);
  }
}
function Sl(n, i, a) {
  const u = n[i];
  return _t(u) ? u : new Ol(n, i, a);
}
class Al {
  constructor(i, a, u) {
    this.fn = i, this.setter = a, this._value = void 0, this.dep = new va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ft !== this)
      return Fu(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return Uu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function kl(n, i, a = !1) {
  let u, f;
  return qe(n) ? u = n : (u = n.get, f = n.set), new Al(u, f, a);
}
const ko = {}, jo = /* @__PURE__ */ new WeakMap();
let ni;
function Pl(n, i = !1, a = ni) {
  if (a) {
    let u = jo.get(a);
    u || jo.set(a, u = []), u.push(n);
  }
}
function Il(n, i, a = ut) {
  const { immediate: u, deep: f, once: h, scheduler: y, augmentJob: O, call: I } = a, L = (Q) => f ? Q : yn(Q) || f === !1 || f === 0 ? lr(Q, 1) : lr(Q);
  let B, D, X, oe, te = !1, de = !1;
  if (_t(n) ? (D = () => n.value, te = yn(n)) : _r(n) ? (D = () => L(n), te = !0) : Ne(n) ? (de = !0, te = n.some((Q) => _r(Q) || yn(Q)), D = () => n.map((Q) => {
    if (_t(Q))
      return Q.value;
    if (_r(Q))
      return L(Q);
    if (qe(Q))
      return I ? I(Q, 2) : Q();
  })) : qe(n) ? i ? D = I ? () => I(n, 2) : n : D = () => {
    if (X) {
      dr();
      try {
        X();
      } finally {
        hr();
      }
    }
    const Q = ni;
    ni = B;
    try {
      return I ? I(n, 3, [oe]) : n(oe);
    } finally {
      ni = Q;
    }
  } : D = Kn, i && f) {
    const Q = D, $ = f === !0 ? 1 / 0 : f;
    D = () => lr(Q(), $);
  }
  const je = ha(), Ae = () => {
    B.stop(), je && je.active && ca(je.effects, B);
  };
  if (h && i) {
    const Q = i;
    i = (...$) => {
      Q(...$), Ae();
    };
  }
  let Re = de ? new Array(n.length).fill(ko) : ko;
  const Ve = (Q) => {
    if (!(!(B.flags & 1) || !B.dirty && !Q))
      if (i) {
        const $ = B.run();
        if (f || te || (de ? $.some((H, W) => br(H, Re[W])) : br($, Re))) {
          X && X();
          const H = ni;
          ni = B;
          try {
            const W = [
              $,
              // pass undefined as the old value when it's changed for the first time
              Re === ko ? void 0 : de && Re[0] === ko ? [] : Re,
              oe
            ];
            Re = $, I ? I(i, 3, W) : (
              // @ts-expect-error
              i(...W)
            );
          } finally {
            ni = H;
          }
        }
      } else
        B.run();
  };
  return O && O(Ve), B = new ju(D), B.scheduler = y ? () => y(Ve, !1) : Ve, oe = (Q) => Pl(Q, !1, B), X = B.onStop = () => {
    const Q = jo.get(B);
    if (Q) {
      if (I)
        I(Q, 4);
      else
        for (const $ of Q) $();
      jo.delete(B);
    }
  }, i ? u ? Ve(!0) : Re = B.run() : y ? y(Ve.bind(null, !0), !0) : B.run(), Ae.pause = B.pause.bind(B), Ae.resume = B.resume.bind(B), Ae.stop = Ae, Ae;
}
function lr(n, i = 1 / 0, a) {
  if (i <= 0 || !ht(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, _t(n))
    lr(n.value, i, a);
  else if (Ne(n))
    for (let u = 0; u < n.length; u++)
      lr(n[u], i, a);
  else if ($o(n) || mi(n))
    n.forEach((u) => {
      lr(u, i, a);
    });
  else if (Au(n)) {
    for (const u in n)
      lr(n[u], i, a);
    for (const u of Object.getOwnPropertySymbols(n))
      Object.prototype.propertyIsEnumerable.call(n, u) && lr(n[u], i, a);
  }
  return n;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Eo(n, i, a, u) {
  try {
    return u ? n(...u) : n();
  } catch (f) {
    To(f, i, a);
  }
}
function jn(n, i, a, u) {
  if (qe(n)) {
    const f = Eo(n, i, a, u);
    return f && la(f) && f.catch((h) => {
      To(h, i, a);
    }), f;
  }
  if (Ne(n)) {
    const f = [];
    for (let h = 0; h < n.length; h++)
      f.push(jn(n[h], i, a, u));
    return f;
  }
}
function To(n, i, a, u = !0) {
  const f = i ? i.vnode : null, { errorHandler: h, throwUnhandledErrorInProduction: y } = i && i.appContext.config || ut;
  if (i) {
    let O = i.parent;
    const I = i.proxy, L = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; O; ) {
      const B = O.ec;
      if (B) {
        for (let D = 0; D < B.length; D++)
          if (B[D](n, I, L) === !1)
            return;
      }
      O = O.parent;
    }
    if (h) {
      dr(), Eo(h, null, 10, [
        n,
        I,
        L
      ]), hr();
      return;
    }
  }
  Nl(n, a, f, u, y);
}
function Nl(n, i, a, u = !0, f = !1) {
  if (f)
    throw n;
  console.error(n);
}
const en = [];
let Rn = -1;
const yi = [];
let yr = null, fi = 0;
const Zu = /* @__PURE__ */ Promise.resolve();
let Bo = null;
function xa(n) {
  const i = Bo || Zu;
  return n ? i.then(this ? n.bind(this) : n) : i;
}
function Cl(n) {
  let i = Rn + 1, a = en.length;
  for (; i < a; ) {
    const u = i + a >>> 1, f = en[u], h = vo(f);
    h < n || h === n && f.flags & 2 ? i = u + 1 : a = u;
  }
  return i;
}
function Ea(n) {
  if (!(n.flags & 1)) {
    const i = vo(n), a = en[en.length - 1];
    !a || // fast path when the job id is larger than the tail
    !(n.flags & 2) && i >= vo(a) ? en.push(n) : en.splice(Cl(i), 0, n), n.flags |= 1, ec();
  }
}
function ec() {
  Bo || (Bo = Zu.then(nc));
}
function Vs(n) {
  Ne(n) ? yi.push(...n) : yr && n.id === -1 ? yr.splice(fi + 1, 0, n) : n.flags & 1 || (yi.push(n), n.flags |= 1), ec();
}
function ja(n, i, a = Rn + 1) {
  for (; a < en.length; a++) {
    const u = en[a];
    if (u && u.flags & 2) {
      if (n && u.id !== n.uid)
        continue;
      en.splice(a, 1), a--, u.flags & 4 && (u.flags &= -2), u(), u.flags & 4 || (u.flags &= -2);
    }
  }
}
function tc(n) {
  if (yi.length) {
    const i = [...new Set(yi)].sort(
      (a, u) => vo(a) - vo(u)
    );
    if (yi.length = 0, yr) {
      yr.push(...i);
      return;
    }
    for (yr = i, fi = 0; fi < yr.length; fi++) {
      const a = yr[fi];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    yr = null, fi = 0;
  }
}
const vo = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function nc(n) {
  try {
    for (Rn = 0; Rn < en.length; Rn++) {
      const i = en[Rn];
      i && !(i.flags & 8) && (i.flags & 4 && (i.flags &= -2), Eo(
        i,
        i.i,
        i.i ? 15 : 14
      ), i.flags & 4 || (i.flags &= -2));
    }
  } finally {
    for (; Rn < en.length; Rn++) {
      const i = en[Rn];
      i && (i.flags &= -2);
    }
    Rn = -1, en.length = 0, tc(), Bo = null, (en.length || yi.length) && nc();
  }
}
let Nt = null, rc = null;
function Fo(n) {
  const i = Nt;
  return Nt = n, rc = n && n.type.__scopeId || null, i;
}
function $s(n, i = Nt, a) {
  if (!i || n._n)
    return n;
  const u = (...f) => {
    u._d && Wa(-1);
    const h = Fo(i);
    let y;
    try {
      y = n(...f);
    } finally {
      Fo(h), u._d && Wa(1);
    }
    return y;
  };
  return u._n = !0, u._c = !0, u._d = !0, u;
}
function ri(n, i) {
  if (Nt === null)
    return n;
  const a = Jo(Nt), u = n.dirs || (n.dirs = []);
  for (let f = 0; f < i.length; f++) {
    let [h, y, O, I = ut] = i[f];
    h && (qe(h) && (h = {
      mounted: h,
      updated: h
    }), h.deep && lr(y), u.push({
      dir: h,
      instance: a,
      value: y,
      oldValue: void 0,
      arg: O,
      modifiers: I
    }));
  }
  return n;
}
function ei(n, i, a, u) {
  const f = n.dirs, h = i && i.dirs;
  for (let y = 0; y < f.length; y++) {
    const O = f[y];
    h && (O.oldValue = h[y].value);
    let I = O.dir[u];
    I && (dr(), jn(I, a, 8, [
      n.el,
      O,
      n,
      i
    ]), hr());
  }
}
const Dl = Symbol("_vte"), Rl = (n) => n.__isTeleport;
function Ta(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, Ta(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Oo(n, i) {
  return qe(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Vt({ name: n.name }, i, { setup: n })
  ) : n;
}
function ic(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function uo(n, i, a, u, f = !1) {
  if (Ne(n)) {
    n.forEach(
      (te, de) => uo(
        te,
        i && (Ne(i) ? i[de] : i),
        a,
        u,
        f
      )
    );
    return;
  }
  if (vi(u) && !f) {
    u.shapeFlag & 512 && u.type.__asyncResolved && u.component.subTree.component && uo(n, i, a, u.component.subTree);
    return;
  }
  const h = u.shapeFlag & 4 ? Jo(u.component) : u.el, y = f ? null : h, { i: O, r: I } = n, L = i && i.r, B = O.refs === ut ? O.refs = {} : O.refs, D = O.setupState, X = et(D), oe = D === ut ? () => !1 : (te) => rt(X, te);
  if (L != null && L !== I && (Tt(L) ? (B[L] = null, oe(L) && (D[L] = null)) : _t(L) && (L.value = null)), qe(I))
    Eo(I, O, 12, [y, B]);
  else {
    const te = Tt(I), de = _t(I);
    if (te || de) {
      const je = () => {
        if (n.f) {
          const Ae = te ? oe(I) ? D[I] : B[I] : I.value;
          f ? Ne(Ae) && ca(Ae, h) : Ne(Ae) ? Ae.includes(h) || Ae.push(h) : te ? (B[I] = [h], oe(I) && (D[I] = B[I])) : (I.value = [h], n.k && (B[n.k] = I.value));
        } else te ? (B[I] = y, oe(I) && (D[I] = y)) : de && (I.value = y, n.k && (B[n.k] = y));
      };
      y ? (je.id = -1, hn(je, a)) : je();
    }
  }
}
Wo().requestIdleCallback;
Wo().cancelIdleCallback;
const vi = (n) => !!n.type.__asyncLoader, oc = (n) => n.type.__isKeepAlive;
function Kl(n, i) {
  sc(n, "a", i);
}
function jl(n, i) {
  sc(n, "da", i);
}
function sc(n, i, a = qt) {
  const u = n.__wdc || (n.__wdc = () => {
    let f = a;
    for (; f; ) {
      if (f.isDeactivated)
        return;
      f = f.parent;
    }
    return n();
  });
  if (Xo(i, u, a), a) {
    let f = a.parent;
    for (; f && f.parent; )
      oc(f.parent.vnode) && Bl(u, i, a, f), f = f.parent;
  }
}
function Bl(n, i, a, u) {
  const f = Xo(
    i,
    n,
    u,
    !0
    /* prepend */
  );
  Oa(() => {
    ca(u[i], f);
  }, a);
}
function Xo(n, i, a = qt, u = !1) {
  if (a) {
    const f = a[n] || (a[n] = []), h = i.__weh || (i.__weh = (...y) => {
      dr();
      const O = ai(a), I = jn(i, a, n, y);
      return O(), hr(), I;
    });
    return u ? f.unshift(h) : f.push(h), h;
  }
}
const pr = (n) => (i, a = qt) => {
  (!_o || n === "sp") && Xo(n, (...u) => i(...u), a);
}, Fl = pr("bm"), ac = pr("m"), Ml = pr(
  "bu"
), ql = pr("u"), Ul = pr(
  "bum"
), Oa = pr("um"), Ll = pr(
  "sp"
), Vl = pr("rtg"), $l = pr("rtc");
function Hl(n, i = qt) {
  Xo("ec", n, i);
}
const Wl = Symbol.for("v-ndc");
function hi(n, i, a, u) {
  let f;
  const h = a, y = Ne(n);
  if (y || Tt(n)) {
    const O = y && _r(n);
    let I = !1, L = !1;
    O && (I = !yn(n), L = xr(n), n = Go(n)), f = new Array(n.length);
    for (let B = 0, D = n.length; B < D; B++)
      f[B] = i(
        I ? L ? Ko(Mt(n[B])) : Mt(n[B]) : n[B],
        B,
        void 0,
        h
      );
  } else if (typeof n == "number") {
    f = new Array(n);
    for (let O = 0; O < n; O++)
      f[O] = i(O + 1, O, void 0, h);
  } else if (ht(n))
    if (n[Symbol.iterator])
      f = Array.from(
        n,
        (O, I) => i(O, I, void 0, h)
      );
    else {
      const O = Object.keys(n);
      f = new Array(O.length);
      for (let I = 0, L = O.length; I < L; I++) {
        const B = O[I];
        f[I] = i(n[B], B, I, h);
      }
    }
  else
    f = [];
  return f;
}
function Gl(n, i, a = {}, u, f) {
  if (Nt.ce || Nt.parent && vi(Nt.parent) && Nt.parent.ce)
    return Xe(), Qs(
      bt,
      null,
      [kt("slot", a, u)],
      64
    );
  let h = n[i];
  h && h._c && (h._d = !1), Xe();
  const y = h && uc(h(a)), O = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  y && y.key, I = Qs(
    bt,
    {
      key: (O && !Pn(O) ? O : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!y && u ? "_fb" : "")
    },
    y || [],
    y && n._ === 1 ? 64 : -2
  );
  return h && h._c && (h._d = !0), I;
}
function uc(n) {
  return n.some((i) => xi(i) ? !(i.type === In || i.type === bt && !uc(i.children)) : !0) ? n : null;
}
const Hs = (n) => n ? Pc(n) ? Jo(n) : Hs(n.parent) : null, co = (
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
    $options: (n) => lc(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      Ea(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = xa.bind(n.proxy)),
    $watch: (n) => gf.bind(n)
  })
), Is = (n, i) => n !== ut && !n.__isScriptSetup && rt(n, i), Yl = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: f, props: h, accessCache: y, type: O, appContext: I } = n;
    let L;
    if (i[0] !== "$") {
      const oe = y[i];
      if (oe !== void 0)
        switch (oe) {
          case 1:
            return u[i];
          case 2:
            return f[i];
          case 4:
            return a[i];
          case 3:
            return h[i];
        }
      else {
        if (Is(u, i))
          return y[i] = 1, u[i];
        if (f !== ut && rt(f, i))
          return y[i] = 2, f[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (L = n.propsOptions[0]) && rt(L, i)
        )
          return y[i] = 3, h[i];
        if (a !== ut && rt(a, i))
          return y[i] = 4, a[i];
        Ws && (y[i] = 0);
      }
    }
    const B = co[i];
    let D, X;
    if (B)
      return i === "$attrs" && Lt(n.attrs, "get", ""), B(n);
    if (
      // css module (injected by vue-loader)
      (D = O.__cssModules) && (D = D[i])
    )
      return D;
    if (a !== ut && rt(a, i))
      return y[i] = 4, a[i];
    if (
      // global properties
      X = I.config.globalProperties, rt(X, i)
    )
      return X[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: f, ctx: h } = n;
    return Is(f, i) ? (f[i] = a, !0) : u !== ut && rt(u, i) ? (u[i] = a, !0) : rt(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (h[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: f, propsOptions: h }
  }, y) {
    let O;
    return !!a[y] || n !== ut && rt(n, y) || Is(i, y) || (O = h[0]) && rt(O, y) || rt(u, y) || rt(co, y) || rt(f.config.globalProperties, y);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : rt(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function Ba(n) {
  return Ne(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
function go(n) {
  const i = Mf();
  let a = n();
  return Js(), la(a) && (a = a.catch((u) => {
    throw ai(i), u;
  })), [a, () => ai(i)];
}
let Ws = !0;
function Xl(n) {
  const i = lc(n), a = n.proxy, u = n.ctx;
  Ws = !1, i.beforeCreate && Fa(i.beforeCreate, n, "bc");
  const {
    // state
    data: f,
    computed: h,
    methods: y,
    watch: O,
    provide: I,
    inject: L,
    // lifecycle
    created: B,
    beforeMount: D,
    mounted: X,
    beforeUpdate: oe,
    updated: te,
    activated: de,
    deactivated: je,
    beforeDestroy: Ae,
    beforeUnmount: Re,
    destroyed: Ve,
    unmounted: Q,
    render: $,
    renderTracked: H,
    renderTriggered: W,
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
  if (L && Ql(L, u, null), y)
    for (const ve in y) {
      const Me = y[ve];
      qe(Me) && (u[ve] = Me.bind(a));
    }
  if (f) {
    const ve = f.call(a, a);
    ht(ve) && (n.data = Yo(ve));
  }
  if (Ws = !0, h)
    for (const ve in h) {
      const Me = h[ve], pt = qe(Me) ? Me.bind(a, a) : qe(Me.get) ? Me.get.bind(a, a) : Kn, st = !qe(Me) && qe(Me.set) ? Me.set.bind(a) : Kn, vt = fr({
        get: pt,
        set: st
      });
      Object.defineProperty(u, ve, {
        enumerable: !0,
        configurable: !0,
        get: () => vt.value,
        set: (Pt) => vt.value = Pt
      });
    }
  if (O)
    for (const ve in O)
      cc(O[ve], u, a, ve);
  if (I) {
    const ve = qe(I) ? I.call(a) : I;
    Reflect.ownKeys(ve).forEach((Me) => {
      nf(Me, ve[Me]);
    });
  }
  B && Fa(B, n, "c");
  function Ce(ve, Me) {
    Ne(Me) ? Me.forEach((pt) => ve(pt.bind(a))) : Me && ve(Me.bind(a));
  }
  if (Ce(Fl, D), Ce(ac, X), Ce(Ml, oe), Ce(ql, te), Ce(Kl, de), Ce(jl, je), Ce(Hl, le), Ce($l, H), Ce(Vl, W), Ce(Ul, Re), Ce(Oa, Q), Ce(Ll, R), Ne(ye))
    if (ye.length) {
      const ve = n.exposed || (n.exposed = {});
      ye.forEach((Me) => {
        Object.defineProperty(ve, Me, {
          get: () => a[Me],
          set: (pt) => a[Me] = pt
        });
      });
    } else n.exposed || (n.exposed = {});
  $ && n.render === Kn && (n.render = $), Pe != null && (n.inheritAttrs = Pe), xe && (n.components = xe), ke && (n.directives = ke), R && ic(n);
}
function Ql(n, i, a = Kn) {
  Ne(n) && (n = Gs(n));
  for (const u in n) {
    const f = n[u];
    let h;
    ht(f) ? "default" in f ? h = lo(
      f.from || u,
      f.default,
      !0
    ) : h = lo(f.from || u) : h = lo(f), _t(h) ? Object.defineProperty(i, u, {
      enumerable: !0,
      configurable: !0,
      get: () => h.value,
      set: (y) => h.value = y
    }) : i[u] = h;
  }
}
function Fa(n, i, a) {
  jn(
    Ne(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function cc(n, i, a, u) {
  let f = u.includes(".") ? xc(a, u) : () => a[u];
  if (Tt(n)) {
    const h = i[n];
    qe(h) && Io(f, h);
  } else if (qe(n))
    Io(f, n.bind(a));
  else if (ht(n))
    if (Ne(n))
      n.forEach((h) => cc(h, i, a, u));
    else {
      const h = qe(n.handler) ? n.handler.bind(a) : i[n.handler];
      qe(h) && Io(f, h, n);
    }
}
function lc(n) {
  const i = n.type, { mixins: a, extends: u } = i, {
    mixins: f,
    optionsCache: h,
    config: { optionMergeStrategies: y }
  } = n.appContext, O = h.get(i);
  let I;
  return O ? I = O : !f.length && !a && !u ? I = i : (I = {}, f.length && f.forEach(
    (L) => Mo(I, L, y, !0)
  ), Mo(I, i, y)), ht(i) && h.set(i, I), I;
}
function Mo(n, i, a, u = !1) {
  const { mixins: f, extends: h } = i;
  h && Mo(n, h, a, !0), f && f.forEach(
    (y) => Mo(n, y, a, !0)
  );
  for (const y in i)
    if (!(u && y === "expose")) {
      const O = zl[y] || a && a[y];
      n[y] = O ? O(n[y], i[y]) : i[y];
    }
  return n;
}
const zl = {
  data: Ma,
  props: qa,
  emits: qa,
  // objects
  methods: ro,
  computed: ro,
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
  components: ro,
  directives: ro,
  // watch
  watch: Zl,
  // provide / inject
  provide: Ma,
  inject: Jl
};
function Ma(n, i) {
  return i ? n ? function() {
    return Vt(
      qe(n) ? n.call(this, this) : n,
      qe(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Jl(n, i) {
  return ro(Gs(n), Gs(i));
}
function Gs(n) {
  if (Ne(n)) {
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
function ro(n, i) {
  return n ? Vt(/* @__PURE__ */ Object.create(null), n, i) : i;
}
function qa(n, i) {
  return n ? Ne(n) && Ne(i) ? [.../* @__PURE__ */ new Set([...n, ...i])] : Vt(
    /* @__PURE__ */ Object.create(null),
    Ba(n),
    Ba(i ?? {})
  ) : i;
}
function Zl(n, i) {
  if (!n) return i;
  if (!i) return n;
  const a = Vt(/* @__PURE__ */ Object.create(null), n);
  for (const u in i)
    a[u] = Jt(n[u], i[u]);
  return a;
}
function fc() {
  return {
    app: null,
    config: {
      isNativeTag: Lc,
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
let ef = 0;
function tf(n, i) {
  return function(u, f = null) {
    qe(u) || (u = Vt({}, u)), f != null && !ht(f) && (f = null);
    const h = fc(), y = /* @__PURE__ */ new WeakSet(), O = [];
    let I = !1;
    const L = h.app = {
      _uid: ef++,
      _component: u,
      _props: f,
      _container: null,
      _context: h,
      _instance: null,
      version: Hf,
      get config() {
        return h.config;
      },
      set config(B) {
      },
      use(B, ...D) {
        return y.has(B) || (B && qe(B.install) ? (y.add(B), B.install(L, ...D)) : qe(B) && (y.add(B), B(L, ...D))), L;
      },
      mixin(B) {
        return h.mixins.includes(B) || h.mixins.push(B), L;
      },
      component(B, D) {
        return D ? (h.components[B] = D, L) : h.components[B];
      },
      directive(B, D) {
        return D ? (h.directives[B] = D, L) : h.directives[B];
      },
      mount(B, D, X) {
        if (!I) {
          const oe = L._ceVNode || kt(u, f);
          return oe.appContext = h, X === !0 ? X = "svg" : X === !1 && (X = void 0), n(oe, B, X), I = !0, L._container = B, B.__vue_app__ = L, Jo(oe.component);
        }
      },
      onUnmount(B) {
        O.push(B);
      },
      unmount() {
        I && (jn(
          O,
          L._instance,
          16
        ), n(null, L._container), delete L._container.__vue_app__);
      },
      provide(B, D) {
        return h.provides[B] = D, L;
      },
      runWithContext(B) {
        const D = oi;
        oi = L;
        try {
          return B();
        } finally {
          oi = D;
        }
      }
    };
    return L;
  };
}
let oi = null;
function nf(n, i) {
  if (qt) {
    let a = qt.provides;
    const u = qt.parent && qt.parent.provides;
    u === a && (a = qt.provides = Object.create(u)), a[n] = i;
  }
}
function lo(n, i, a = !1) {
  const u = qt || Nt;
  if (u || oi) {
    let f = oi ? oi._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (f && n in f)
      return f[n];
    if (arguments.length > 1)
      return a && qe(i) ? i.call(u && u.proxy) : i;
  }
}
function rf() {
  return !!(qt || Nt || oi);
}
const dc = {}, hc = () => Object.create(dc), pc = (n) => Object.getPrototypeOf(n) === dc;
function of(n, i, a, u = !1) {
  const f = {}, h = hc();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), mc(n, i, f, h);
  for (const y in n.propsOptions[0])
    y in f || (f[y] = void 0);
  a ? n.props = u ? f : wl(f) : n.type.props ? n.props = f : n.props = h, n.attrs = h;
}
function sf(n, i, a, u) {
  const {
    props: f,
    attrs: h,
    vnode: { patchFlag: y }
  } = n, O = et(f), [I] = n.propsOptions;
  let L = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || y > 0) && !(y & 16)
  ) {
    if (y & 8) {
      const B = n.vnode.dynamicProps;
      for (let D = 0; D < B.length; D++) {
        let X = B[D];
        if (Qo(n.emitsOptions, X))
          continue;
        const oe = i[X];
        if (I)
          if (rt(h, X))
            oe !== h[X] && (h[X] = oe, L = !0);
          else {
            const te = wr(X);
            f[te] = Ys(
              I,
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
    mc(n, i, f, h) && (L = !0);
    let B;
    for (const D in O)
      (!i || // for camelCase
      !rt(i, D) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((B = ui(D)) === D || !rt(i, B))) && (I ? a && // for camelCase
      (a[D] !== void 0 || // for kebab-case
      a[B] !== void 0) && (f[D] = Ys(
        I,
        O,
        D,
        void 0,
        n,
        !0
      )) : delete f[D]);
    if (h !== O)
      for (const D in h)
        (!i || !rt(i, D)) && (delete h[D], L = !0);
  }
  L && cr(n.attrs, "set", "");
}
function mc(n, i, a, u) {
  const [f, h] = n.propsOptions;
  let y = !1, O;
  if (i)
    for (let I in i) {
      if (oo(I))
        continue;
      const L = i[I];
      let B;
      f && rt(f, B = wr(I)) ? !h || !h.includes(B) ? a[B] = L : (O || (O = {}))[B] = L : Qo(n.emitsOptions, I) || (!(I in u) || L !== u[I]) && (u[I] = L, y = !0);
    }
  if (h) {
    const I = et(a), L = O || ut;
    for (let B = 0; B < h.length; B++) {
      const D = h[B];
      a[D] = Ys(
        f,
        I,
        D,
        L[D],
        n,
        !rt(L, D)
      );
    }
  }
  return y;
}
function Ys(n, i, a, u, f, h) {
  const y = n[a];
  if (y != null) {
    const O = rt(y, "default");
    if (O && u === void 0) {
      const I = y.default;
      if (y.type !== Function && !y.skipFactory && qe(I)) {
        const { propsDefaults: L } = f;
        if (a in L)
          u = L[a];
        else {
          const B = ai(f);
          u = L[a] = I.call(
            null,
            i
          ), B();
        }
      } else
        u = I;
      f.ce && f.ce._setProp(a, u);
    }
    y[
      0
      /* shouldCast */
    ] && (h && !O ? u = !1 : y[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === ui(a)) && (u = !0));
  }
  return u;
}
const af = /* @__PURE__ */ new WeakMap();
function yc(n, i, a = !1) {
  const u = a ? af : i.propsCache, f = u.get(n);
  if (f)
    return f;
  const h = n.props, y = {}, O = [];
  let I = !1;
  if (!qe(n)) {
    const B = (D) => {
      I = !0;
      const [X, oe] = yc(D, i, !0);
      Vt(y, X), oe && O.push(...oe);
    };
    !a && i.mixins.length && i.mixins.forEach(B), n.extends && B(n.extends), n.mixins && n.mixins.forEach(B);
  }
  if (!h && !I)
    return ht(n) && u.set(n, pi), pi;
  if (Ne(h))
    for (let B = 0; B < h.length; B++) {
      const D = wr(h[B]);
      Ua(D) && (y[D] = ut);
    }
  else if (h)
    for (const B in h) {
      const D = wr(B);
      if (Ua(D)) {
        const X = h[B], oe = y[D] = Ne(X) || qe(X) ? { type: X } : Vt({}, X), te = oe.type;
        let de = !1, je = !0;
        if (Ne(te))
          for (let Ae = 0; Ae < te.length; ++Ae) {
            const Re = te[Ae], Ve = qe(Re) && Re.name;
            if (Ve === "Boolean") {
              de = !0;
              break;
            } else Ve === "String" && (je = !1);
          }
        else
          de = qe(te) && te.name === "Boolean";
        oe[
          0
          /* shouldCast */
        ] = de, oe[
          1
          /* shouldCastTrue */
        ] = je, (de || rt(oe, "default")) && O.push(D);
      }
    }
  const L = [y, O];
  return ht(n) && u.set(n, L), L;
}
function Ua(n) {
  return n[0] !== "$" && !oo(n);
}
const Sa = (n) => n[0] === "_" || n === "$stable", Aa = (n) => Ne(n) ? n.map(An) : [An(n)], uf = (n, i, a) => {
  if (i._n)
    return i;
  const u = $s((...f) => Aa(i(...f)), a);
  return u._c = !1, u;
}, vc = (n, i, a) => {
  const u = n._ctx;
  for (const f in n) {
    if (Sa(f)) continue;
    const h = n[f];
    if (qe(h))
      i[f] = uf(f, h, u);
    else if (h != null) {
      const y = Aa(h);
      i[f] = () => y;
    }
  }
}, gc = (n, i) => {
  const a = Aa(i);
  n.slots.default = () => a;
}, bc = (n, i, a) => {
  for (const u in i)
    (a || !Sa(u)) && (n[u] = i[u]);
}, cf = (n, i, a) => {
  const u = n.slots = hc();
  if (n.vnode.shapeFlag & 32) {
    const f = i.__;
    f && Fs(u, "__", f, !0);
    const h = i._;
    h ? (bc(u, i, a), a && Fs(u, "_", h, !0)) : vc(i, u);
  } else i && gc(n, i);
}, lf = (n, i, a) => {
  const { vnode: u, slots: f } = n;
  let h = !0, y = ut;
  if (u.shapeFlag & 32) {
    const O = i._;
    O ? a && O === 1 ? h = !1 : bc(f, i, a) : (h = !i.$stable, vc(i, f)), y = i;
  } else i && (gc(n, i), y = { default: 1 });
  if (h)
    for (const O in f)
      !Sa(O) && y[O] == null && delete f[O];
}, hn = Nf;
function ff(n) {
  return df(n);
}
function df(n, i) {
  const a = Wo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: f,
    patchProp: h,
    createElement: y,
    createText: O,
    createComment: I,
    setText: L,
    setElementText: B,
    parentNode: D,
    nextSibling: X,
    setScopeId: oe = Kn,
    insertStaticContent: te
  } = n, de = (A, j, Z, ne = null, se = null, re = null, fe = void 0, pe = null, ae = !!j.dynamicChildren) => {
    if (A === j)
      return;
    A && !gr(A, j) && (ne = k(A), Pt(A, se, re, !0), A = null), j.patchFlag === -2 && (ae = !1, j.dynamicChildren = null);
    const { type: ie, ref: Te, shapeFlag: me } = j;
    switch (ie) {
      case zo:
        je(A, j, Z, ne);
        break;
      case In:
        Ae(A, j, Z, ne);
        break;
      case Cs:
        A == null && Re(j, Z, ne, fe);
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
    Te != null && se ? uo(Te, A && A.ref, re, j || A, !j) : Te == null && A && A.ref != null && uo(A.ref, null, re, A, !0);
  }, je = (A, j, Z, ne) => {
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
      j.el = I(j.children || ""),
      Z,
      ne
    ) : j.el = A.el;
  }, Re = (A, j, Z, ne) => {
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
  }, Q = ({ el: A, anchor: j }) => {
    let Z;
    for (; A && A !== j; )
      Z = X(A), f(A), A = Z;
    f(j);
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
    if (ae = A.el = y(
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
      Ns(A, re),
      fe,
      pe
    ), Se && ei(A, null, ne, "created"), W(ae, A, A.scopeId, fe, ne), Te) {
      for (const $e in Te)
        $e !== "value" && !oo($e) && h(ae, $e, null, Te[$e], re, ne);
      "value" in Te && h(ae, "value", null, Te.value, re), (ie = Te.onVnodeBeforeMount) && Dn(ie, ne, A);
    }
    Se && ei(A, null, ne, "beforeMount");
    const De = hf(se, Oe);
    De && Oe.beforeEnter(ae), u(ae, j, Z), ((ie = Te && Te.onVnodeMounted) || De || Se) && hn(() => {
      ie && Dn(ie, ne, A), De && Oe.enter(ae), Se && ei(A, null, ne, "mounted");
    }, se);
  }, W = (A, j, Z, ne, se) => {
    if (Z && oe(A, Z), ne)
      for (let re = 0; re < ne.length; re++)
        oe(A, ne[re]);
    if (se) {
      let re = se.subTree;
      if (j === re || Tc(re.type) && (re.ssContent === j || re.ssFallback === j)) {
        const fe = se.vnode;
        W(
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
      const Te = A[ie] = pe ? vr(A[ie]) : An(A[ie]);
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
    if (Z && ti(Z, !1), (Se = Oe.onVnodeBeforeUpdate) && Dn(Se, Z, j, A), Te && ei(j, A, Z, "beforeUpdate"), Z && ti(Z, !0), (me.innerHTML && Oe.innerHTML == null || me.textContent && Oe.textContent == null) && B(pe, ""), ie ? ye(
      A.dynamicChildren,
      ie,
      pe,
      Z,
      ne,
      Ns(j, se),
      re
    ) : fe || Me(
      A,
      j,
      pe,
      null,
      Z,
      ne,
      Ns(j, se),
      re,
      !1
    ), ae > 0) {
      if (ae & 16)
        Pe(pe, me, Oe, Z, se);
      else if (ae & 2 && me.class !== Oe.class && h(pe, "class", null, Oe.class, se), ae & 4 && h(pe, "style", me.style, Oe.style, se), ae & 8) {
        const De = j.dynamicProps;
        for (let $e = 0; $e < De.length; $e++) {
          const We = De[$e], ct = me[We], gt = Oe[We];
          (gt !== ct || We === "value") && h(pe, We, ct, gt, se, Z);
        }
      }
      ae & 1 && A.children !== j.children && B(pe, j.children);
    } else !fe && ie == null && Pe(pe, me, Oe, Z, se);
    ((Se = Oe.onVnodeUpdated) || Te) && hn(() => {
      Se && Dn(Se, Z, j, A), Te && ei(j, A, Z, "updated");
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
        !gr(ae, ie) || // - In the case of a component, it could contain anything.
        ae.shapeFlag & 198) ? D(ae.el) : (
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
          !oo(re) && !(re in Z) && h(
            A,
            re,
            j[re],
            null,
            se,
            ne
          );
      for (const re in Z) {
        if (oo(re)) continue;
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
    (j.key != null || se && j === se.subTree) && _c(
      A,
      j,
      !0
      /* shallow */
    )) : Me(
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
    const pe = A.component = Ff(
      A,
      ne,
      se
    );
    if (oc(A) && (pe.ctx.renderer = q), qf(pe, !1, fe), pe.asyncDep) {
      if (se && se.registerDep(pe, Ce, fe), !A.el) {
        const ae = pe.subTree = kt(In);
        Ae(null, ae, j, Z);
      }
    } else
      Ce(
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
    if (Tf(A, j, Z))
      if (ne.asyncDep && !ne.asyncResolved) {
        ve(ne, j, Z);
        return;
      } else
        ne.next = j, ne.update();
    else
      j.el = A.el, ne.vnode = j;
  }, Ce = (A, j, Z, ne, se, re, fe) => {
    const pe = () => {
      if (A.isMounted) {
        let { next: me, bu: Oe, u: Se, parent: De, vnode: $e } = A;
        {
          const lt = wc(A);
          if (lt) {
            me && (me.el = $e.el, ve(A, me, fe)), lt.asyncDep.then(() => {
              A.isUnmounted || pe();
            });
            return;
          }
        }
        let We = me, ct;
        ti(A, !1), me ? (me.el = $e.el, ve(A, me, fe)) : me = $e, Oe && Po(Oe), (ct = me.props && me.props.onVnodeBeforeUpdate) && Dn(ct, De, me, $e), ti(A, !0);
        const gt = Va(A), Ot = A.subTree;
        A.subTree = gt, de(
          Ot,
          gt,
          // parent may have changed if it's in a teleport
          D(Ot.el),
          // anchor may have changed if it's in a fragment
          k(Ot),
          A,
          se,
          re
        ), me.el = gt.el, We === null && Pa(A, gt.el), Se && hn(Se, se), (ct = me.props && me.props.onVnodeUpdated) && hn(
          () => Dn(ct, De, me, $e),
          se
        );
      } else {
        let me;
        const { el: Oe, props: Se } = j, { bm: De, m: $e, parent: We, root: ct, type: gt } = A, Ot = vi(j);
        ti(A, !1), De && Po(De), !Ot && (me = Se && Se.onVnodeBeforeMount) && Dn(me, We, j), ti(A, !0);
        {
          ct.ce && // @ts-expect-error _def is private
          ct.ce._def.shadowRoot !== !1 && ct.ce._injectChildStyle(gt);
          const lt = A.subTree = Va(A);
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
            () => Dn(me, We, lt),
            se
          );
        }
        (j.shapeFlag & 256 || We && vi(We.vnode) && We.vnode.shapeFlag & 256) && A.a && hn(A.a, se), A.isMounted = !0, j = Z = ne = null;
      }
    };
    A.scope.on();
    const ae = A.effect = new ju(pe);
    A.scope.off();
    const ie = A.update = ae.run.bind(ae), Te = A.job = ae.runIfDirty.bind(ae);
    Te.i = A, Te.id = A.uid, ae.scheduler = () => Ea(Te), ti(A, !0), ie();
  }, ve = (A, j, Z) => {
    j.component = A;
    const ne = A.vnode.props;
    A.vnode = j, A.next = null, sf(A, j.props, ne, Z), lf(A, j.children, Z), dr(), ja(A), hr();
  }, Me = (A, j, Z, ne, se, re, fe, pe, ae = !1) => {
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
        pt(
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
  }, pt = (A, j, Z, ne, se, re, fe, pe, ae) => {
    A = A || pi, j = j || pi;
    const ie = A.length, Te = j.length, me = Math.min(ie, Te);
    let Oe;
    for (Oe = 0; Oe < me; Oe++) {
      const Se = j[Oe] = ae ? vr(j[Oe]) : An(j[Oe]);
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
      const Se = A[ie], De = j[ie] = ae ? vr(j[ie]) : An(j[ie]);
      if (gr(Se, De))
        de(
          Se,
          De,
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
      const Se = A[me], De = j[Oe] = ae ? vr(j[Oe]) : An(j[Oe]);
      if (gr(Se, De))
        de(
          Se,
          De,
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
        const Se = Oe + 1, De = Se < Te ? j[Se].el : ne;
        for (; ie <= Oe; )
          de(
            null,
            j[ie] = ae ? vr(j[ie]) : An(j[ie]),
            Z,
            De,
            se,
            re,
            fe,
            pe,
            ae
          ), ie++;
      }
    } else if (ie > Oe)
      for (; ie <= me; )
        Pt(A[ie], se, re, !0), ie++;
    else {
      const Se = ie, De = ie, $e = /* @__PURE__ */ new Map();
      for (ie = De; ie <= Oe; ie++) {
        const tt = j[ie] = ae ? vr(j[ie]) : An(j[ie]);
        tt.key != null && $e.set(tt.key, ie);
      }
      let We, ct = 0;
      const gt = Oe - De + 1;
      let Ot = !1, lt = 0;
      const $t = new Array(gt);
      for (ie = 0; ie < gt; ie++) $t[ie] = 0;
      for (ie = Se; ie <= me; ie++) {
        const tt = A[ie];
        if (ct >= gt) {
          Pt(tt, se, re, !0);
          continue;
        }
        let ee;
        if (tt.key != null)
          ee = $e.get(tt.key);
        else
          for (We = De; We <= Oe; We++)
            if ($t[We - De] === 0 && gr(tt, j[We])) {
              ee = We;
              break;
            }
        ee === void 0 ? Pt(tt, se, re, !0) : ($t[ee - De] = ie + 1, ee >= lt ? lt = ee : Ot = !0, de(
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
      const Cn = Ot ? pf($t) : pi;
      for (We = Cn.length - 1, ie = gt - 1; ie >= 0; ie--) {
        const tt = De + ie, ee = j[tt], nn = tt + 1 < Te ? j[tt + 1].el : ne;
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
        ) : Ot && (We < 0 || ie !== Cn[We] ? vt(ee, Z, nn, 2) : We--);
      }
    }
  }, vt = (A, j, Z, ne, se = null) => {
    const { el: re, type: fe, transition: pe, children: ae, shapeFlag: ie } = A;
    if (ie & 6) {
      vt(A.component.subTree, j, Z, ne);
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
        vt(ae[me], j, Z, ne);
      u(A.anchor, j, Z);
      return;
    }
    if (fe === Cs) {
      Ve(A, j, Z);
      return;
    }
    if (ne !== 2 && ie & 1 && pe)
      if (ne === 0)
        pe.beforeEnter(re), u(re, j, Z), hn(() => pe.enter(re), se);
      else {
        const { leave: me, delayLeave: Oe, afterLeave: Se } = pe, De = () => {
          A.ctx.isUnmounted ? f(re) : u(re, j, Z);
        }, $e = () => {
          me(re, () => {
            De(), Se && Se();
          });
        };
        Oe ? Oe(re, De, $e) : $e();
      }
    else
      u(re, j, Z);
  }, Pt = (A, j, Z, ne = !1, se = !1) => {
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
    if (me === -2 && (se = !1), pe != null && (dr(), uo(pe, null, Z, A, !0), hr()), Se != null && (j.renderCache[Se] = void 0), Te & 256) {
      j.ctx.deactivate(A);
      return;
    }
    const De = Te & 1 && Oe, $e = !vi(A);
    let We;
    if ($e && (We = fe && fe.onVnodeBeforeUnmount) && Dn(We, j, A), Te & 6)
      tn(A.component, Z, ne);
    else {
      if (Te & 128) {
        A.suspense.unmount(Z, ne);
        return;
      }
      De && ei(A, null, j, "beforeUnmount"), Te & 64 ? A.type.remove(
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
      ) : (re === bt && me & 384 || !se && Te & 16) && wt(ae, j, Z), ne && It(A);
    }
    ($e && (We = fe && fe.onVnodeUnmounted) || De) && hn(() => {
      We && Dn(We, j, A), De && ei(A, null, j, "unmounted");
    }, Z);
  }, It = (A) => {
    const { type: j, el: Z, anchor: ne, transition: se } = A;
    if (j === bt) {
      Nn(Z, ne);
      return;
    }
    if (j === Cs) {
      Q(A);
      return;
    }
    const re = () => {
      f(Z), se && !se.persisted && se.afterLeave && se.afterLeave();
    };
    if (A.shapeFlag & 1 && se && !se.persisted) {
      const { leave: fe, delayLeave: pe } = se, ae = () => fe(Z, re);
      pe ? pe(A.el, re, ae) : ae();
    } else
      re();
  }, Nn = (A, j) => {
    let Z;
    for (; A !== j; )
      Z = X(A), f(A), A = Z;
    f(j);
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
    La(ae), La(ie), ne && Po(ne), Te && Ne(me) && me.forEach((Oe) => {
      Te.renderCache[Oe] = void 0;
    }), se.stop(), re && (re.flags |= 8, Pt(fe, A, j, Z)), pe && hn(pe, j), hn(() => {
      A.isUnmounted = !0;
    }, j), j && j.pendingBranch && !j.isUnmounted && A.asyncDep && !A.asyncResolved && A.suspenseId === j.pendingId && (j.deps--, j.deps === 0 && j.resolve());
  }, wt = (A, j, Z, ne = !1, se = !1, re = 0) => {
    for (let fe = re; fe < A.length; fe++)
      Pt(A[fe], j, Z, ne, se);
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
    A == null ? j._vnode && Pt(j._vnode, null, null, !0) : de(
      j._vnode || null,
      A,
      j,
      null,
      null,
      null,
      Z
    ), j._vnode = A, _ || (_ = !0, ja(), tc(), _ = !1);
  }, q = {
    p: de,
    um: Pt,
    m: vt,
    r: It,
    mt: it,
    mc: le,
    pc: Me,
    pbc: ye,
    n: k,
    o: n
  };
  return {
    render: K,
    hydrate: void 0,
    createApp: tf(K)
  };
}
function Ns({ type: n, props: i }, a) {
  return a === "svg" && n === "foreignObject" || a === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function ti({ effect: n, job: i }, a) {
  a ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function hf(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function _c(n, i, a = !1) {
  const u = n.children, f = i.children;
  if (Ne(u) && Ne(f))
    for (let h = 0; h < u.length; h++) {
      const y = u[h];
      let O = f[h];
      O.shapeFlag & 1 && !O.dynamicChildren && ((O.patchFlag <= 0 || O.patchFlag === 32) && (O = f[h] = vr(f[h]), O.el = y.el), !a && O.patchFlag !== -2 && _c(y, O)), O.type === zo && (O.el = y.el), O.type === In && !O.el && (O.el = y.el);
    }
}
function pf(n) {
  const i = n.slice(), a = [0];
  let u, f, h, y, O;
  const I = n.length;
  for (u = 0; u < I; u++) {
    const L = n[u];
    if (L !== 0) {
      if (f = a[a.length - 1], n[f] < L) {
        i[u] = f, a.push(u);
        continue;
      }
      for (h = 0, y = a.length - 1; h < y; )
        O = h + y >> 1, n[a[O]] < L ? h = O + 1 : y = O;
      L < n[a[h]] && (h > 0 && (i[u] = a[h - 1]), a[h] = u);
    }
  }
  for (h = a.length, y = a[h - 1]; h-- > 0; )
    a[h] = y, y = i[y];
  return a;
}
function wc(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : wc(i);
}
function La(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const mf = Symbol.for("v-scx"), yf = () => lo(mf);
function vf(n, i) {
  return ka(n, null, i);
}
function Io(n, i, a) {
  return ka(n, i, a);
}
function ka(n, i, a = ut) {
  const { immediate: u, deep: f, flush: h, once: y } = a, O = Vt({}, a), I = i && u || !i && h !== "post";
  let L;
  if (_o) {
    if (h === "sync") {
      const oe = yf();
      L = oe.__watcherHandles || (oe.__watcherHandles = []);
    } else if (!I) {
      const oe = () => {
      };
      return oe.stop = Kn, oe.resume = Kn, oe.pause = Kn, oe;
    }
  }
  const B = qt;
  O.call = (oe, te, de) => jn(oe, B, te, de);
  let D = !1;
  h === "post" ? O.scheduler = (oe) => {
    hn(oe, B && B.suspense);
  } : h !== "sync" && (D = !0, O.scheduler = (oe, te) => {
    te ? oe() : Ea(oe);
  }), O.augmentJob = (oe) => {
    i && (oe.flags |= 4), D && (oe.flags |= 2, B && (oe.id = B.uid, oe.i = B));
  };
  const X = Il(n, i, O);
  return _o && (L ? L.push(X) : I && X()), X;
}
function gf(n, i, a) {
  const u = this.proxy, f = Tt(n) ? n.includes(".") ? xc(u, n) : () => u[n] : n.bind(u, u);
  let h;
  qe(i) ? h = i : (h = i.handler, a = i);
  const y = ai(this), O = ka(f, h.bind(u), a);
  return y(), O;
}
function xc(n, i) {
  const a = i.split(".");
  return () => {
    let u = n;
    for (let f = 0; f < a.length && u; f++)
      u = u[a[f]];
    return u;
  };
}
const bf = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${wr(i)}Modifiers`] || n[`${ui(i)}Modifiers`];
function _f(n, i, ...a) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || ut;
  let f = a;
  const h = i.startsWith("update:"), y = h && bf(u, i.slice(7));
  y && (y.trim && (f = a.map((B) => Tt(B) ? B.trim() : B)), y.number && (f = a.map(Pu)));
  let O, I = u[O = Os(i)] || // also try camelCase event handler (#2249)
  u[O = Os(wr(i))];
  !I && h && (I = u[O = Os(ui(i))]), I && jn(
    I,
    n,
    6,
    f
  );
  const L = u[O + "Once"];
  if (L) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[O])
      return;
    n.emitted[O] = !0, jn(
      L,
      n,
      6,
      f
    );
  }
}
function Ec(n, i, a = !1) {
  const u = i.emitsCache, f = u.get(n);
  if (f !== void 0)
    return f;
  const h = n.emits;
  let y = {}, O = !1;
  if (!qe(n)) {
    const I = (L) => {
      const B = Ec(L, i, !0);
      B && (O = !0, Vt(y, B));
    };
    !a && i.mixins.length && i.mixins.forEach(I), n.extends && I(n.extends), n.mixins && n.mixins.forEach(I);
  }
  return !h && !O ? (ht(n) && u.set(n, null), null) : (Ne(h) ? h.forEach((I) => y[I] = null) : Vt(y, h), ht(n) && u.set(n, y), y);
}
function Qo(n, i) {
  return !n || !Vo(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), rt(n, i[0].toLowerCase() + i.slice(1)) || rt(n, ui(i)) || rt(n, i));
}
function Va(n) {
  const {
    type: i,
    vnode: a,
    proxy: u,
    withProxy: f,
    propsOptions: [h],
    slots: y,
    attrs: O,
    emit: I,
    render: L,
    renderCache: B,
    props: D,
    data: X,
    setupState: oe,
    ctx: te,
    inheritAttrs: de
  } = n, je = Fo(n);
  let Ae, Re;
  try {
    if (a.shapeFlag & 4) {
      const Q = f || u, $ = Q;
      Ae = An(
        L.call(
          $,
          Q,
          B,
          D,
          oe,
          X,
          te
        )
      ), Re = O;
    } else {
      const Q = i;
      Ae = An(
        Q.length > 1 ? Q(
          D,
          { attrs: O, slots: y, emit: I }
        ) : Q(
          D,
          null
        )
      ), Re = i.props ? O : xf(O);
    }
  } catch (Q) {
    fo.length = 0, To(Q, n, 1), Ae = kt(In);
  }
  let Ve = Ae;
  if (Re && de !== !1) {
    const Q = Object.keys(Re), { shapeFlag: $ } = Ve;
    Q.length && $ & 7 && (h && Q.some(ua) && (Re = Ef(
      Re,
      h
    )), Ve = Ei(Ve, Re, !1, !0));
  }
  return a.dirs && (Ve = Ei(Ve, null, !1, !0), Ve.dirs = Ve.dirs ? Ve.dirs.concat(a.dirs) : a.dirs), a.transition && Ta(Ve, a.transition), Ae = Ve, Fo(je), Ae;
}
function wf(n, i = !0) {
  let a;
  for (let u = 0; u < n.length; u++) {
    const f = n[u];
    if (xi(f)) {
      if (f.type !== In || f.children === "v-if") {
        if (a)
          return;
        a = f;
      }
    } else
      return;
  }
  return a;
}
const xf = (n) => {
  let i;
  for (const a in n)
    (a === "class" || a === "style" || Vo(a)) && ((i || (i = {}))[a] = n[a]);
  return i;
}, Ef = (n, i) => {
  const a = {};
  for (const u in n)
    (!ua(u) || !(u.slice(9) in i)) && (a[u] = n[u]);
  return a;
};
function Tf(n, i, a) {
  const { props: u, children: f, component: h } = n, { props: y, children: O, patchFlag: I } = i, L = h.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && I >= 0) {
    if (I & 1024)
      return !0;
    if (I & 16)
      return u ? $a(u, y, L) : !!y;
    if (I & 8) {
      const B = i.dynamicProps;
      for (let D = 0; D < B.length; D++) {
        const X = B[D];
        if (y[X] !== u[X] && !Qo(L, X))
          return !0;
      }
    }
  } else
    return (f || O) && (!O || !O.$stable) ? !0 : u === y ? !1 : u ? y ? $a(u, y, L) : !0 : !!y;
  return !1;
}
function $a(n, i, a) {
  const u = Object.keys(i);
  if (u.length !== Object.keys(n).length)
    return !0;
  for (let f = 0; f < u.length; f++) {
    const h = u[f];
    if (i[h] !== n[h] && !Qo(a, h))
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
const Tc = (n) => n.__isSuspense;
let Xs = 0;
const Of = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(n, i, a, u, f, h, y, O, I, L) {
    if (n == null)
      Af(
        i,
        a,
        u,
        f,
        h,
        y,
        O,
        I,
        L
      );
    else {
      if (h && h.deps > 0 && !n.suspense.isInFallback) {
        i.suspense = n.suspense, i.suspense.vnode = i, i.el = n.el;
        return;
      }
      kf(
        n,
        i,
        a,
        u,
        f,
        y,
        O,
        I,
        L
      );
    }
  },
  hydrate: Pf,
  normalize: If
}, Sf = Of;
function bo(n, i) {
  const a = n.props && n.props[i];
  qe(a) && a();
}
function Af(n, i, a, u, f, h, y, O, I) {
  const {
    p: L,
    o: { createElement: B }
  } = I, D = B("div"), X = n.suspense = Oc(
    n,
    f,
    u,
    i,
    D,
    a,
    h,
    y,
    O,
    I
  );
  L(
    null,
    X.pendingBranch = n.ssContent,
    D,
    null,
    u,
    X,
    h,
    y
  ), X.deps > 0 ? (bo(n, "onPending"), bo(n, "onFallback"), L(
    null,
    n.ssFallback,
    i,
    a,
    u,
    null,
    // fallback tree will not have suspense context
    h,
    y
  ), gi(X, n.ssFallback)) : X.resolve(!1, !0);
}
function kf(n, i, a, u, f, h, y, O, { p: I, um: L, o: { createElement: B } }) {
  const D = i.suspense = n.suspense;
  D.vnode = i, i.el = n.el;
  const X = i.ssContent, oe = i.ssFallback, { activeBranch: te, pendingBranch: de, isInFallback: je, isHydrating: Ae } = D;
  if (de)
    D.pendingBranch = X, gr(X, de) ? (I(
      de,
      X,
      D.hiddenContainer,
      null,
      f,
      D,
      h,
      y,
      O
    ), D.deps <= 0 ? D.resolve() : je && (Ae || (I(
      te,
      oe,
      a,
      u,
      f,
      null,
      // fallback tree will not have suspense context
      h,
      y,
      O
    ), gi(D, oe)))) : (D.pendingId = Xs++, Ae ? (D.isHydrating = !1, D.activeBranch = de) : L(de, f, D), D.deps = 0, D.effects.length = 0, D.hiddenContainer = B("div"), je ? (I(
      null,
      X,
      D.hiddenContainer,
      null,
      f,
      D,
      h,
      y,
      O
    ), D.deps <= 0 ? D.resolve() : (I(
      te,
      oe,
      a,
      u,
      f,
      null,
      // fallback tree will not have suspense context
      h,
      y,
      O
    ), gi(D, oe))) : te && gr(X, te) ? (I(
      te,
      X,
      a,
      u,
      f,
      D,
      h,
      y,
      O
    ), D.resolve(!0)) : (I(
      null,
      X,
      D.hiddenContainer,
      null,
      f,
      D,
      h,
      y,
      O
    ), D.deps <= 0 && D.resolve()));
  else if (te && gr(X, te))
    I(
      te,
      X,
      a,
      u,
      f,
      D,
      h,
      y,
      O
    ), gi(D, X);
  else if (bo(i, "onPending"), D.pendingBranch = X, X.shapeFlag & 512 ? D.pendingId = X.component.suspenseId : D.pendingId = Xs++, I(
    null,
    X,
    D.hiddenContainer,
    null,
    f,
    D,
    h,
    y,
    O
  ), D.deps <= 0)
    D.resolve();
  else {
    const { timeout: Re, pendingId: Ve } = D;
    Re > 0 ? setTimeout(() => {
      D.pendingId === Ve && D.fallback(oe);
    }, Re) : Re === 0 && D.fallback(oe);
  }
}
function Oc(n, i, a, u, f, h, y, O, I, L, B = !1) {
  const {
    p: D,
    m: X,
    um: oe,
    n: te,
    o: { parentNode: de, remove: je }
  } = L;
  let Ae;
  const Re = Cf(n);
  Re && i && i.pendingBranch && (Ae = i.pendingId, i.deps++);
  const Ve = n.props ? Gc(n.props.timeout) : void 0, Q = h, $ = {
    vnode: n,
    parent: i,
    parentComponent: a,
    namespace: y,
    container: u,
    hiddenContainer: f,
    deps: 0,
    pendingId: Xs++,
    timeout: typeof Ve == "number" ? Ve : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !B,
    isHydrating: B,
    isUnmounted: !1,
    effects: [],
    resolve(H = !1, W = !1) {
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
          h === Q ? te(R) : h,
          0
        ), Vs(xe));
      }), R && (de(R.el) === it && (h = te(R)), oe(R, ke, $, !0)), Be || X(ye, it, h, 0)), gi($, ye), $.pendingBranch = null, $.isInFallback = !1;
      let Ce = $.parent, ve = !1;
      for (; Ce; ) {
        if (Ce.pendingBranch) {
          Ce.effects.push(...xe), ve = !0;
          break;
        }
        Ce = Ce.parent;
      }
      !ve && !Be && Vs(xe), $.effects = [], Re && i && i.pendingBranch && Ae === i.pendingId && (i.deps--, i.deps === 0 && !W && i.resolve()), bo(le, "onResolve");
    },
    fallback(H) {
      if (!$.pendingBranch)
        return;
      const { vnode: W, activeBranch: le, parentComponent: R, container: ye, namespace: Pe } = $;
      bo(W, "onFallback");
      const xe = te(le), ke = () => {
        $.isInFallback && (D(
          null,
          H,
          ye,
          xe,
          R,
          null,
          // fallback tree will not have suspense context
          Pe,
          O,
          I
        ), gi($, H));
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
    move(H, W, le) {
      $.activeBranch && X($.activeBranch, H, W, le), $.container = H;
    },
    next() {
      return $.activeBranch && te($.activeBranch);
    },
    registerDep(H, W, le) {
      const R = !!$.pendingBranch;
      R && $.deps++;
      const ye = H.vnode.el;
      H.asyncDep.catch((Pe) => {
        To(Pe, H, 0);
      }).then((Pe) => {
        if (H.isUnmounted || $.isUnmounted || $.pendingId !== H.suspenseId)
          return;
        H.asyncResolved = !0;
        const { vnode: xe } = H;
        Zs(H, Pe), ye && (xe.el = ye);
        const ke = !ye && H.subTree.el;
        W(
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
          y,
          le
        ), ke && je(ke), Pa(H, xe.el), R && --$.deps === 0 && $.resolve();
      });
    },
    unmount(H, W) {
      $.isUnmounted = !0, $.activeBranch && oe(
        $.activeBranch,
        a,
        H,
        W
      ), $.pendingBranch && oe(
        $.pendingBranch,
        a,
        H,
        W
      );
    }
  };
  return $;
}
function Pf(n, i, a, u, f, h, y, O, I) {
  const L = i.suspense = Oc(
    i,
    u,
    a,
    n.parentNode,
    // eslint-disable-next-line no-restricted-globals
    document.createElement("div"),
    null,
    f,
    h,
    y,
    O,
    !0
  ), B = I(
    n,
    L.pendingBranch = i.ssContent,
    a,
    L,
    h,
    y
  );
  return L.deps === 0 && L.resolve(!1, !0), B;
}
function If(n) {
  const { shapeFlag: i, children: a } = n, u = i & 32;
  n.ssContent = Ha(
    u ? a.default : a
  ), n.ssFallback = u ? Ha(a.fallback) : kt(In);
}
function Ha(n) {
  let i;
  if (qe(n)) {
    const a = wi && n._c;
    a && (n._d = !1, Xe()), n = n(), a && (n._d = !0, i = rn, Sc());
  }
  return Ne(n) && (n = wf(n)), n = An(n), i && !n.dynamicChildren && (n.dynamicChildren = i.filter((a) => a !== n)), n;
}
function Nf(n, i) {
  i && i.pendingBranch ? Ne(n) ? i.effects.push(...n) : i.effects.push(n) : Vs(n);
}
function gi(n, i) {
  n.activeBranch = i;
  const { vnode: a, parentComponent: u } = n;
  let f = i.el;
  for (; !f && i.component; )
    i = i.component.subTree, f = i.el;
  a.el = f, u && u.subTree === a && (u.vnode.el = f, Pa(u, f));
}
function Cf(n) {
  const i = n.props && n.props.suspensible;
  return i != null && i !== !1;
}
const bt = Symbol.for("v-fgt"), zo = Symbol.for("v-txt"), In = Symbol.for("v-cmt"), Cs = Symbol.for("v-stc"), fo = [];
let rn = null;
function Xe(n = !1) {
  fo.push(rn = n ? null : []);
}
function Sc() {
  fo.pop(), rn = fo[fo.length - 1] || null;
}
let wi = 1;
function Wa(n, i = !1) {
  wi += n, n < 0 && rn && i && (rn.hasOnce = !0);
}
function Ac(n) {
  return n.dynamicChildren = wi > 0 ? rn || pi : null, Sc(), wi > 0 && rn && rn.push(n), n;
}
function Ze(n, i, a, u, f, h) {
  return Ac(
    _e(
      n,
      i,
      a,
      u,
      f,
      h,
      !0
    )
  );
}
function Qs(n, i, a, u, f) {
  return Ac(
    kt(
      n,
      i,
      a,
      u,
      f,
      !0
    )
  );
}
function xi(n) {
  return n ? n.__v_isVNode === !0 : !1;
}
function gr(n, i) {
  return n.type === i.type && n.key === i.key;
}
const kc = ({ key: n }) => n ?? null, No = ({
  ref: n,
  ref_key: i,
  ref_for: a
}) => (typeof n == "number" && (n = "" + n), n != null ? Tt(n) || _t(n) || qe(n) ? { i: Nt, r: n, k: i, f: !!a } : n : null);
function _e(n, i = null, a = null, u = 0, f = null, h = n === bt ? 0 : 1, y = !1, O = !1) {
  const I = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && kc(i),
    ref: i && No(i),
    scopeId: rc,
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
    dynamicProps: f,
    dynamicChildren: null,
    appContext: null,
    ctx: Nt
  };
  return O ? (Ia(I, a), h & 128 && n.normalize(I)) : a && (I.shapeFlag |= Tt(a) ? 8 : 16), wi > 0 && // avoid a block node from tracking itself
  !y && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (I.patchFlag > 0 || h & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  I.patchFlag !== 32 && rn.push(I), I;
}
const kt = Df;
function Df(n, i = null, a = null, u = 0, f = null, h = !1) {
  if ((!n || n === Wl) && (n = In), xi(n)) {
    const O = Ei(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && Ia(O, a), wi > 0 && !h && rn && (O.shapeFlag & 6 ? rn[rn.indexOf(n)] = O : rn.push(O)), O.patchFlag = -2, O;
  }
  if ($f(n) && (n = n.__vccOpts), i) {
    i = Rf(i);
    let { class: O, style: I } = i;
    O && !Tt(O) && (i.class = po(O)), ht(I) && (_a(I) && !Ne(I) && (I = Vt({}, I)), i.style = da(I));
  }
  const y = Tt(n) ? 1 : Tc(n) ? 128 : Rl(n) ? 64 : ht(n) ? 4 : qe(n) ? 2 : 0;
  return _e(
    n,
    i,
    a,
    u,
    f,
    y,
    h,
    !0
  );
}
function Rf(n) {
  return n ? _a(n) || pc(n) ? Vt({}, n) : n : null;
}
function Ei(n, i, a = !1, u = !1) {
  const { props: f, ref: h, patchFlag: y, children: O, transition: I } = n, L = i ? Kf(f || {}, i) : f, B = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: L,
    key: L && kc(L),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && h ? Ne(h) ? h.concat(No(i)) : [h, No(i)] : No(i)
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
    patchFlag: i && n.type !== bt ? y === -1 ? 16 : y | 16 : y,
    dynamicProps: n.dynamicProps,
    dynamicChildren: n.dynamicChildren,
    appContext: n.appContext,
    dirs: n.dirs,
    transition: I,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: n.component,
    suspense: n.suspense,
    ssContent: n.ssContent && Ei(n.ssContent),
    ssFallback: n.ssFallback && Ei(n.ssFallback),
    el: n.el,
    anchor: n.anchor,
    ctx: n.ctx,
    ce: n.ce
  };
  return I && u && Ta(
    B,
    I.clone(B)
  ), B;
}
function mn(n = " ", i = 0) {
  return kt(zo, null, n, i);
}
function Sn(n = "", i = !1) {
  return i ? (Xe(), Qs(In, null, n)) : kt(In, null, n);
}
function An(n) {
  return n == null || typeof n == "boolean" ? kt(In) : Ne(n) ? kt(
    bt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : xi(n) ? vr(n) : kt(zo, null, String(n));
}
function vr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Ei(n);
}
function Ia(n, i) {
  let a = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (Ne(i))
    a = 16;
  else if (typeof i == "object")
    if (u & 65) {
      const f = i.default;
      f && (f._c && (f._d = !1), Ia(n, f()), f._c && (f._d = !0));
      return;
    } else {
      a = 32;
      const f = i._;
      !f && !pc(i) ? i._ctx = Nt : f === 3 && Nt && (Nt.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else qe(i) ? (i = { default: i, _ctx: Nt }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [mn(i)]) : a = 8);
  n.children = i, n.shapeFlag |= a;
}
function Kf(...n) {
  const i = {};
  for (let a = 0; a < n.length; a++) {
    const u = n[a];
    for (const f in u)
      if (f === "class")
        i.class !== u.class && (i.class = po([i.class, u.class]));
      else if (f === "style")
        i.style = da([i.style, u.style]);
      else if (Vo(f)) {
        const h = i[f], y = u[f];
        y && h !== y && !(Ne(h) && h.includes(y)) && (i[f] = h ? [].concat(h, y) : y);
      } else f !== "" && (i[f] = u[f]);
  }
  return i;
}
function Dn(n, i, a, u = null) {
  jn(n, i, 7, [
    a,
    u
  ]);
}
const jf = fc();
let Bf = 0;
function Ff(n, i, a) {
  const u = n.type, f = (i ? i.appContext : n.appContext) || jf, h = {
    uid: Bf++,
    vnode: n,
    type: u,
    parent: i,
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
    scope: new Du(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: i ? i.provides : Object.create(f.provides),
    ids: i ? i.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: yc(u, f),
    emitsOptions: Ec(u, f),
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
  return h.ctx = { _: h }, h.root = i ? i.root : h, h.emit = _f.bind(null, h), n.ce && n.ce(h), h;
}
let qt = null;
const Mf = () => qt || Nt;
let qo, zs;
{
  const n = Wo(), i = (a, u) => {
    let f;
    return (f = n[a]) || (f = n[a] = []), f.push(u), (h) => {
      f.length > 1 ? f.forEach((y) => y(h)) : f[0](h);
    };
  };
  qo = i(
    "__VUE_INSTANCE_SETTERS__",
    (a) => qt = a
  ), zs = i(
    "__VUE_SSR_SETTERS__",
    (a) => _o = a
  );
}
const ai = (n) => {
  const i = qt;
  return qo(n), n.scope.on(), () => {
    n.scope.off(), qo(i);
  };
}, Js = () => {
  qt && qt.scope.off(), qo(null);
};
function Pc(n) {
  return n.vnode.shapeFlag & 4;
}
let _o = !1;
function qf(n, i = !1, a = !1) {
  i && zs(i);
  const { props: u, children: f } = n.vnode, h = Pc(n);
  of(n, u, h, i), cf(n, f, a || i);
  const y = h ? Uf(n, i) : void 0;
  return i && zs(!1), y;
}
function Uf(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Yl);
  const { setup: u } = a;
  if (u) {
    dr();
    const f = n.setupContext = u.length > 1 ? Vf(n) : null, h = ai(n), y = Eo(
      u,
      n,
      0,
      [
        n.props,
        f
      ]
    ), O = la(y);
    if (hr(), h(), (O || n.sp) && !vi(n) && ic(n), O) {
      if (y.then(Js, Js), i)
        return y.then((I) => {
          Zs(n, I);
        }).catch((I) => {
          To(I, n, 0);
        });
      n.asyncDep = y;
    } else
      Zs(n, y);
  } else
    Ic(n);
}
function Zs(n, i, a) {
  qe(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : ht(i) && (n.setupState = Ju(i)), Ic(n);
}
function Ic(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || Kn);
  {
    const f = ai(n);
    dr();
    try {
      Xl(n);
    } finally {
      hr(), f();
    }
  }
}
const Lf = {
  get(n, i) {
    return Lt(n, "get", ""), n[i];
  }
};
function Vf(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, Lf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function Jo(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(Ju(wa(n.exposed)), {
    get(i, a) {
      if (a in i)
        return i[a];
      if (a in co)
        return co[a](n);
    },
    has(i, a) {
      return a in i || a in co;
    }
  })) : n.proxy;
}
function $f(n) {
  return qe(n) && "__vccOpts" in n;
}
const fr = (n, i) => kl(n, i, _o);
function Ga(n, i, a) {
  const u = arguments.length;
  return u === 2 ? ht(i) && !Ne(i) ? xi(i) ? kt(n, null, [i]) : kt(n, i) : kt(n, null, i) : (u > 3 ? a = Array.prototype.slice.call(arguments, 2) : u === 3 && xi(a) && (a = [a]), kt(n, i, a));
}
const Hf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ea;
const Ya = typeof window < "u" && window.trustedTypes;
if (Ya)
  try {
    ea = /* @__PURE__ */ Ya.createPolicy("vue", {
      createHTML: (n) => n
    });
  } catch {
  }
const Nc = ea ? (n) => ea.createHTML(n) : (n) => n, Wf = "http://www.w3.org/2000/svg", Gf = "http://www.w3.org/1998/Math/MathML", ur = typeof document < "u" ? document : null, Xa = ur && /* @__PURE__ */ ur.createElement("template"), Yf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const f = i === "svg" ? ur.createElementNS(Wf, n) : i === "mathml" ? ur.createElementNS(Gf, n) : a ? ur.createElement(n, { is: a }) : ur.createElement(n);
    return n === "select" && u && u.multiple != null && f.setAttribute("multiple", u.multiple), f;
  },
  createText: (n) => ur.createTextNode(n),
  createComment: (n) => ur.createComment(n),
  setText: (n, i) => {
    n.nodeValue = i;
  },
  setElementText: (n, i) => {
    n.textContent = i;
  },
  parentNode: (n) => n.parentNode,
  nextSibling: (n) => n.nextSibling,
  querySelector: (n) => ur.querySelector(n),
  setScopeId(n, i) {
    n.setAttribute(i, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(n, i, a, u, f, h) {
    const y = a ? a.previousSibling : i.lastChild;
    if (f && (f === h || f.nextSibling))
      for (; i.insertBefore(f.cloneNode(!0), a), !(f === h || !(f = f.nextSibling)); )
        ;
    else {
      Xa.innerHTML = Nc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const O = Xa.content;
      if (u === "svg" || u === "mathml") {
        const I = O.firstChild;
        for (; I.firstChild; )
          O.appendChild(I.firstChild);
        O.removeChild(I);
      }
      i.insertBefore(O, a);
    }
    return [
      // first
      y ? y.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, Xf = Symbol("_vtc");
function Qf(n, i, a) {
  const u = n[Xf];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const Qa = Symbol("_vod"), zf = Symbol("_vsh"), Jf = Symbol(""), Zf = /(^|;)\s*display\s*:/;
function ed(n, i, a) {
  const u = n.style, f = Tt(a);
  let h = !1;
  if (a && !f) {
    if (i)
      if (Tt(i))
        for (const y of i.split(";")) {
          const O = y.slice(0, y.indexOf(":")).trim();
          a[O] == null && Co(u, O, "");
        }
      else
        for (const y in i)
          a[y] == null && Co(u, y, "");
    for (const y in a)
      y === "display" && (h = !0), Co(u, y, a[y]);
  } else if (f) {
    if (i !== a) {
      const y = u[Jf];
      y && (a += ";" + y), u.cssText = a, h = Zf.test(a);
    }
  } else i && n.removeAttribute("style");
  Qa in n && (n[Qa] = h ? u.display : "", n[zf] && (u.display = "none"));
}
const za = /\s*!important$/;
function Co(n, i, a) {
  if (Ne(a))
    a.forEach((u) => Co(n, i, u));
  else if (a == null && (a = ""), i.startsWith("--"))
    n.setProperty(i, a);
  else {
    const u = td(n, i);
    za.test(a) ? n.setProperty(
      ui(u),
      a.replace(za, ""),
      "important"
    ) : n[u] = a;
  }
}
const Ja = ["Webkit", "Moz", "ms"], Ds = {};
function td(n, i) {
  const a = Ds[i];
  if (a)
    return a;
  let u = wr(i);
  if (u !== "filter" && u in n)
    return Ds[i] = u;
  u = ku(u);
  for (let f = 0; f < Ja.length; f++) {
    const h = Ja[f] + u;
    if (h in n)
      return Ds[i] = h;
  }
  return i;
}
const Za = "http://www.w3.org/1999/xlink";
function eu(n, i, a, u, f, h = Zc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(Za, i.slice(6, i.length)) : n.setAttributeNS(Za, i, a) : a == null || h && !Iu(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    h ? "" : Pn(a) ? String(a) : a
  );
}
function tu(n, i, a, u, f) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? Nc(a) : a);
    return;
  }
  const h = n.tagName;
  if (i === "value" && h !== "PROGRESS" && // custom elements may use _value internally
  !h.includes("-")) {
    const O = h === "OPTION" ? n.getAttribute("value") || "" : n.value, I = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (O !== I || !("_value" in n)) && (n.value = I), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let y = !1;
  if (a === "" || a == null) {
    const O = typeof n[i];
    O === "boolean" ? a = Iu(a) : a == null && O === "string" ? (a = "", y = !0) : O === "number" && (a = 0, y = !0);
  }
  try {
    n[i] = a;
  } catch {
  }
  y && n.removeAttribute(f || i);
}
function Na(n, i, a, u) {
  n.addEventListener(i, a, u);
}
function nd(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const nu = Symbol("_vei");
function rd(n, i, a, u, f = null) {
  const h = n[nu] || (n[nu] = {}), y = h[i];
  if (u && y)
    y.value = u;
  else {
    const [O, I] = id(i);
    if (u) {
      const L = h[i] = ad(
        u,
        f
      );
      Na(n, O, L, I);
    } else y && (nd(n, O, y, I), h[i] = void 0);
  }
}
const ru = /(?:Once|Passive|Capture)$/;
function id(n) {
  let i;
  if (ru.test(n)) {
    i = {};
    let u;
    for (; u = n.match(ru); )
      n = n.slice(0, n.length - u[0].length), i[u[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : ui(n.slice(2)), i];
}
let Rs = 0;
const od = /* @__PURE__ */ Promise.resolve(), sd = () => Rs || (od.then(() => Rs = 0), Rs = Date.now());
function ad(n, i) {
  const a = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= a.attached)
      return;
    jn(
      ud(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = sd(), a;
}
function ud(n, i) {
  if (Ne(i)) {
    const a = n.stopImmediatePropagation;
    return n.stopImmediatePropagation = () => {
      a.call(n), n._stopped = !0;
    }, i.map(
      (u) => (f) => !f._stopped && u && u(f)
    );
  } else
    return i;
}
const iu = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // lowercase letter
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, cd = (n, i, a, u, f, h) => {
  const y = f === "svg";
  i === "class" ? Qf(n, u, y) : i === "style" ? ed(n, a, u) : Vo(i) ? ua(i) || rd(n, i, a, u, h) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : ld(n, i, u, y)) ? (tu(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && eu(n, i, u, y, h, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !Tt(u)) ? tu(n, wr(i), u, h, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), eu(n, i, u, y));
};
function ld(n, i, a, u) {
  if (u)
    return !!(i === "innerHTML" || i === "textContent" || i in n && iu(i) && qe(a));
  if (i === "spellcheck" || i === "draggable" || i === "translate" || i === "autocorrect" || i === "form" || i === "list" && n.tagName === "INPUT" || i === "type" && n.tagName === "TEXTAREA")
    return !1;
  if (i === "width" || i === "height") {
    const f = n.tagName;
    if (f === "IMG" || f === "VIDEO" || f === "CANVAS" || f === "SOURCE")
      return !1;
  }
  return iu(i) && Tt(a) ? !1 : i in n;
}
const Uo = (n) => {
  const i = n.props["onUpdate:modelValue"] || !1;
  return Ne(i) ? (a) => Po(i, a) : i;
}, bi = Symbol("_assign"), ou = {
  created(n, { value: i }, a) {
    n.checked = _i(i, a.props.value), n[bi] = Uo(a), Na(n, "change", () => {
      n[bi](wo(n));
    });
  },
  beforeUpdate(n, { value: i, oldValue: a }, u) {
    n[bi] = Uo(u), i !== a && (n.checked = _i(i, u.props.value));
  }
}, io = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(n, { value: i, modifiers: { number: a } }, u) {
    const f = $o(i);
    Na(n, "change", () => {
      const h = Array.prototype.filter.call(n.options, (y) => y.selected).map(
        (y) => a ? Pu(wo(y)) : wo(y)
      );
      n[bi](
        n.multiple ? f ? new Set(h) : h : h[0]
      ), n._assigning = !0, xa(() => {
        n._assigning = !1;
      });
    }), n[bi] = Uo(u);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(n, { value: i }) {
    su(n, i);
  },
  beforeUpdate(n, i, a) {
    n[bi] = Uo(a);
  },
  updated(n, { value: i }) {
    n._assigning || su(n, i);
  }
};
function su(n, i) {
  const a = n.multiple, u = Ne(i);
  if (!(a && !u && !$o(i))) {
    for (let f = 0, h = n.options.length; f < h; f++) {
      const y = n.options[f], O = wo(y);
      if (a)
        if (u) {
          const I = typeof O;
          I === "string" || I === "number" ? y.selected = i.some((L) => String(L) === String(O)) : y.selected = tl(i, O) > -1;
        } else
          y.selected = i.has(O);
      else if (_i(wo(y), i)) {
        n.selectedIndex !== f && (n.selectedIndex = f);
        return;
      }
    }
    !a && n.selectedIndex !== -1 && (n.selectedIndex = -1);
  }
}
function wo(n) {
  return "_value" in n ? n._value : n.value;
}
const fd = ["ctrl", "shift", "alt", "meta"], dd = {
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
  exact: (n, i) => fd.some((a) => n[`${a}Key`] && !i.includes(a))
}, di = (n, i) => {
  const a = n._withMods || (n._withMods = {}), u = i.join(".");
  return a[u] || (a[u] = (f, ...h) => {
    for (let y = 0; y < i.length; y++) {
      const O = dd[i[y]];
      if (O && O(f, i)) return;
    }
    return n(f, ...h);
  });
}, hd = /* @__PURE__ */ Vt({ patchProp: cd }, Yf);
let au;
function pd() {
  return au || (au = ff(hd));
}
const md = (...n) => {
  const i = pd().createApp(...n), { mount: a } = i;
  return i.mount = (u) => {
    const f = vd(u);
    if (!f) return;
    const h = i._component;
    !qe(h) && !h.render && !h.template && (h.template = f.innerHTML), f.nodeType === 1 && (f.textContent = "");
    const y = a(f, !1, yd(f));
    return f instanceof Element && (f.removeAttribute("v-cloak"), f.setAttribute("data-v-app", "")), y;
  }, i;
};
function yd(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function vd(n) {
  return Tt(n) ? document.querySelector(n) : n;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Cc;
const Zo = (n) => Cc = n, Dc = (
  /* istanbul ignore next */
  Symbol()
);
function ta(n) {
  return n && typeof n == "object" && Object.prototype.toString.call(n) === "[object Object]" && typeof n.toJSON != "function";
}
var ho;
(function(n) {
  n.direct = "direct", n.patchObject = "patch object", n.patchFunction = "patch function";
})(ho || (ho = {}));
function gd() {
  const n = Ru(!0), i = n.run(() => Zt({}));
  let a = [], u = [];
  const f = wa({
    install(h) {
      Zo(f), f._a = h, h.provide(Dc, f), h.config.globalProperties.$pinia = f, u.forEach((y) => a.push(y)), u = [];
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
  return f;
}
const Rc = () => {
};
function uu(n, i, a, u = Rc) {
  n.push(i);
  const f = () => {
    const h = n.indexOf(i);
    h > -1 && (n.splice(h, 1), u());
  };
  return !a && ha() && Ku(f), f;
}
function li(n, ...i) {
  n.slice().forEach((a) => {
    a(...i);
  });
}
const bd = (n) => n(), cu = Symbol(), Ks = Symbol();
function na(n, i) {
  n instanceof Map && i instanceof Map ? i.forEach((a, u) => n.set(u, a)) : n instanceof Set && i instanceof Set && i.forEach(n.add, n);
  for (const a in i) {
    if (!i.hasOwnProperty(a))
      continue;
    const u = i[a], f = n[a];
    ta(f) && ta(u) && n.hasOwnProperty(a) && !_t(u) && !_r(u) ? n[a] = na(f, u) : n[a] = u;
  }
  return n;
}
const _d = (
  /* istanbul ignore next */
  Symbol()
);
function wd(n) {
  return !ta(n) || !Object.prototype.hasOwnProperty.call(n, _d);
}
const { assign: mr } = Object;
function xd(n) {
  return !!(_t(n) && n.effect);
}
function Ed(n, i, a, u) {
  const { state: f, actions: h, getters: y } = i, O = a.state.value[n];
  let I;
  function L() {
    O || (a.state.value[n] = f ? f() : {});
    const B = Tl(a.state.value[n]);
    return mr(B, h, Object.keys(y || {}).reduce((D, X) => (D[X] = wa(fr(() => {
      Zo(a);
      const oe = a._s.get(n);
      return y[X].call(oe, oe);
    })), D), {}));
  }
  return I = Kc(n, L, i, a, u, !0), I;
}
function Kc(n, i, a = {}, u, f, h) {
  let y;
  const O = mr({ actions: {} }, a), I = { deep: !0 };
  let L, B, D = [], X = [], oe;
  const te = u.state.value[n];
  !h && !te && (u.state.value[n] = {}), Zt({});
  let de;
  function je(le) {
    let R;
    L = B = !1, typeof le == "function" ? (le(u.state.value[n]), R = {
      type: ho.patchFunction,
      storeId: n,
      events: oe
    }) : (na(u.state.value[n], le), R = {
      type: ho.patchObject,
      payload: le,
      storeId: n,
      events: oe
    });
    const ye = de = Symbol();
    xa().then(() => {
      de === ye && (L = !0);
    }), B = !0, li(D, R, u.state.value[n]);
  }
  const Ae = h ? function() {
    const { state: R } = a, ye = R ? R() : {};
    this.$patch((Pe) => {
      mr(Pe, ye);
    });
  } : (
    /* istanbul ignore next */
    Rc
  );
  function Re() {
    y.stop(), D = [], X = [], u._s.delete(n);
  }
  const Ve = (le, R = "") => {
    if (cu in le)
      return le[Ks] = R, le;
    const ye = function() {
      Zo(u);
      const Pe = Array.from(arguments), xe = [], ke = [];
      function it(ve) {
        xe.push(ve);
      }
      function Be(ve) {
        ke.push(ve);
      }
      li(X, {
        args: Pe,
        name: ye[Ks],
        store: $,
        after: it,
        onError: Be
      });
      let Ce;
      try {
        Ce = le.apply(this && this.$id === n ? this : $, Pe);
      } catch (ve) {
        throw li(ke, ve), ve;
      }
      return Ce instanceof Promise ? Ce.then((ve) => (li(xe, ve), ve)).catch((ve) => (li(ke, ve), Promise.reject(ve))) : (li(xe, Ce), Ce);
    };
    return ye[cu] = !0, ye[Ks] = R, ye;
  }, Q = {
    _p: u,
    // _s: scope,
    $id: n,
    $onAction: uu.bind(null, X),
    $patch: je,
    $reset: Ae,
    $subscribe(le, R = {}) {
      const ye = uu(D, le, R.detached, () => Pe()), Pe = y.run(() => Io(() => u.state.value[n], (xe) => {
        (R.flush === "sync" ? B : L) && le({
          storeId: n,
          type: ho.direct,
          events: oe
        }, xe);
      }, mr({}, I, R)));
      return ye;
    },
    $dispose: Re
  }, $ = Yo(Q);
  u._s.set(n, $);
  const W = (u._a && u._a.runWithContext || bd)(() => u._e.run(() => (y = Ru()).run(() => i({ action: Ve }))));
  for (const le in W) {
    const R = W[le];
    if (_t(R) && !xd(R) || _r(R))
      h || (te && wd(R) && (_t(R) ? R.value = te[le] : na(R, te[le])), u.state.value[n][le] = R);
    else if (typeof R == "function") {
      const ye = Ve(R, le);
      W[le] = ye, O.actions[le] = R;
    }
  }
  return mr($, W), mr(et($), W), Object.defineProperty($, "$state", {
    get: () => u.state.value[n],
    set: (le) => {
      je((R) => {
        mr(R, le);
      });
    }
  }), u._p.forEach((le) => {
    mr($, y.run(() => le({
      store: $,
      app: u._a,
      pinia: u,
      options: O
    })));
  }), te && h && a.hydrate && a.hydrate($.$state, te), L = !0, B = !0, $;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Td(n, i, a) {
  let u;
  const f = typeof i == "function";
  u = f ? a : i;
  function h(y, O) {
    const I = rf();
    return y = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    y || (I ? lo(Dc, null) : null), y && Zo(y), y = Cc, y._s.has(n) || (f ? Kc(n, i, u, y) : Ed(n, u, y)), y._s.get(n);
  }
  return h.$id = n, h;
}
var Od = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Sd(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Ad(n) {
  if (Object.prototype.hasOwnProperty.call(n, "__esModule")) return n;
  var i = n.default;
  if (typeof i == "function") {
    var a = function u() {
      var f = !1;
      try {
        f = this instanceof u;
      } catch {
      }
      return f ? Reflect.construct(i, arguments, this.constructor) : i.apply(this, arguments);
    };
    a.prototype = i.prototype;
  } else a = {};
  return Object.defineProperty(a, "__esModule", { value: !0 }), Object.keys(n).forEach(function(u) {
    var f = Object.getOwnPropertyDescriptor(n, u);
    Object.defineProperty(a, u, f.get ? f : {
      enumerable: !0,
      get: function() {
        return n[u];
      }
    });
  }), a;
}
var lu = {};
const kd = {}, Pd = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: kd
}, Symbol.toStringTag, { value: "Module" })), fu = /* @__PURE__ */ Ad(Pd);
var du;
function Id() {
  return du || (du = 1, function(n) {
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
      function f(k) {
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
      function y(k) {
        ke(k), k.cdata !== "" && (xe(k, "oncdata", k.cdata), k.cdata = ""), k.script !== "" && (xe(k, "onscript", k.script), k.script = "");
      }
      u.prototype = {
        end: function() {
          Ce(this);
        },
        write: wt,
        resume: function() {
          return this.error = null, this;
        },
        close: function() {
          return this.write(null);
        },
        flush: function() {
          y(this);
        }
      };
      var O;
      try {
        O = fu.Stream;
      } catch {
        O = function() {
        };
      }
      O || (O = function() {
      });
      var I = i.EVENTS.filter(function(k) {
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
        }, this._decoder = null, I.forEach(function(q) {
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
            var _ = fu.StringDecoder;
            this._decoder = new _("utf8");
          }
          k = this._decoder.write(k);
        }
        return this._parser.write(k.toString()), this.emit("data", k), !0;
      }, B.prototype.end = function(k) {
        return k && k.length && this.write(k), this._parser.end(), !0;
      }, B.prototype.on = function(k, _) {
        var K = this;
        return !K._parser["on" + k] && I.indexOf(k) !== -1 && (K._parser["on" + k] = function() {
          var q = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          q.splice(0, 0, k), K.emit.apply(K, q);
        }), O.prototype.on.call(K, k, _);
      };
      var D = "[CDATA[", X = "DOCTYPE", oe = "http://www.w3.org/XML/1998/namespace", te = "http://www.w3.org/2000/xmlns/", de = { xml: oe, xmlns: te }, je = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ae = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Re = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Ve = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function Q(k) {
        return k === " " || k === `
` || k === "\r" || k === "	";
      }
      function $(k) {
        return k === '"' || k === "'";
      }
      function H(k) {
        return k === ">" || Q(k);
      }
      function W(k, _) {
        return k.test(_);
      }
      function le(k, _) {
        return !W(k, _);
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
      function Ce(k) {
        return k.sawRoot && !k.closedRoot && ve(k, "Unclosed root tag"), k.state !== R.BEGIN && k.state !== R.BEGIN_WHITESPACE && k.state !== R.TEXT && Be(k, "Unexpected end"), ke(k), k.c = "", k.closed = !0, Pe(k, "onend"), u.call(k, k.strict, k.opt), k;
      }
      function ve(k, _) {
        if (typeof k != "object" || !(k instanceof u))
          throw new Error("bad call to strictFail");
        k.strict && Be(k, _);
      }
      function Me(k) {
        k.strict || (k.tagName = k.tagName[k.looseCase]());
        var _ = k.tags[k.tags.length - 1] || k, K = k.tag = { name: k.tagName, attributes: {} };
        k.opt.xmlns && (K.ns = _.ns), k.attribList.length = 0, xe(k, "onopentagstart", K);
      }
      function pt(k, _) {
        var K = k.indexOf(":"), q = K < 0 ? ["", k] : k.split(":"), He = q[0], A = q[1];
        return _ && k === "xmlns" && (He = "xmlns", A = ""), { prefix: He, local: A };
      }
      function st(k) {
        if (k.strict || (k.attribName = k.attribName[k.looseCase]()), k.attribList.indexOf(k.attribName) !== -1 || k.tag.attributes.hasOwnProperty(k.attribName)) {
          k.attribName = k.attribValue = "";
          return;
        }
        if (k.opt.xmlns) {
          var _ = pt(k.attribName, !0), K = _.prefix, q = _.local;
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
      function vt(k, _) {
        if (k.opt.xmlns) {
          var K = k.tag, q = pt(k.tagName);
          K.prefix = q.prefix, K.local = q.local, K.uri = K.ns[q.prefix] || "", K.prefix && !K.uri && (ve(k, "Unbound namespace prefix: " + JSON.stringify(k.tagName)), K.uri = q.prefix);
          var He = k.tags[k.tags.length - 1] || k;
          K.ns && He.ns !== K.ns && Object.keys(K.ns).forEach(function(Te) {
            xe(k, "onopennamespace", {
              prefix: Te,
              uri: K.ns[Te]
            });
          });
          for (var A = 0, j = k.attribList.length; A < j; A++) {
            var Z = k.attribList[A], ne = Z[0], se = Z[1], re = pt(ne, !0), fe = re.prefix, pe = re.local, ae = fe === "" ? "" : K.ns[fe] || "", ie = {
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
      function Pt(k) {
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
      function It(k) {
        var _ = k.entity, K = _.toLowerCase(), q, He = "";
        return k.ENTITIES[_] ? k.ENTITIES[_] : k.ENTITIES[K] ? k.ENTITIES[K] : (_ = K, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), q = parseInt(_, 16), He = q.toString(16)) : (_ = _.slice(1), q = parseInt(_, 10), He = q.toString(10))), _ = _.replace(/^0+/, ""), isNaN(q) || He.toLowerCase() !== _ ? (ve(k, "Invalid character entity"), "&" + k.entity + ";") : String.fromCodePoint(q));
      }
      function Nn(k, _) {
        _ === "<" ? (k.state = R.OPEN_WAKA, k.startTagPosition = k.position) : Q(_) || (ve(k, "Non-whitespace before first tag."), k.textNode = _, k.state = R.TEXT);
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
          return Ce(_);
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
              q === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = R.OPEN_WAKA, _.startTagPosition = _.position) : (!Q(q) && (!_.sawRoot || _.closedRoot) && ve(_, "Text data outside of root node."), q === "&" ? _.state = R.TEXT_ENTITY : _.textNode += q);
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
              else if (!Q(q)) if (W(je, q))
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
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = R.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + q, _.sgmlDecl = "") : (_.sgmlDecl + q).toUpperCase() === D ? (xe(_, "onopencdata"), _.state = R.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + q).toUpperCase() === X ? (_.state = R.DOCTYPE, (_.doctype || _.sawRoot) && ve(
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
              q === "?" ? _.state = R.PROC_INST_ENDING : Q(q) ? _.state = R.PROC_INST_BODY : _.procInstName += q;
              continue;
            case R.PROC_INST_BODY:
              if (!_.procInstBody && Q(q))
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
              W(Ae, q) ? _.tagName += q : (Me(_), q === ">" ? vt(_) : q === "/" ? _.state = R.OPEN_TAG_SLASH : (Q(q) || ve(_, "Invalid character in tag name"), _.state = R.ATTRIB));
              continue;
            case R.OPEN_TAG_SLASH:
              q === ">" ? (vt(_, !0), Pt(_)) : (ve(_, "Forward-slash in opening tag not followed by >"), _.state = R.ATTRIB);
              continue;
            case R.ATTRIB:
              if (Q(q))
                continue;
              q === ">" ? vt(_) : q === "/" ? _.state = R.OPEN_TAG_SLASH : W(je, q) ? (_.attribName = q, _.attribValue = "", _.state = R.ATTRIB_NAME) : ve(_, "Invalid attribute name");
              continue;
            case R.ATTRIB_NAME:
              q === "=" ? _.state = R.ATTRIB_VALUE : q === ">" ? (ve(_, "Attribute without value"), _.attribValue = _.attribName, st(_), vt(_)) : Q(q) ? _.state = R.ATTRIB_NAME_SAW_WHITE : W(Ae, q) ? _.attribName += q : ve(_, "Invalid attribute name");
              continue;
            case R.ATTRIB_NAME_SAW_WHITE:
              if (q === "=")
                _.state = R.ATTRIB_VALUE;
              else {
                if (Q(q))
                  continue;
                ve(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", xe(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", q === ">" ? vt(_) : W(je, q) ? (_.attribName = q, _.state = R.ATTRIB_NAME) : (ve(_, "Invalid attribute name"), _.state = R.ATTRIB);
              }
              continue;
            case R.ATTRIB_VALUE:
              if (Q(q))
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
              Q(q) ? _.state = R.ATTRIB : q === ">" ? vt(_) : q === "/" ? _.state = R.OPEN_TAG_SLASH : W(je, q) ? (ve(_, "No whitespace between attributes"), _.attribName = q, _.attribValue = "", _.state = R.ATTRIB_NAME) : ve(_, "Invalid attribute name");
              continue;
            case R.ATTRIB_VALUE_UNQUOTED:
              if (!H(q)) {
                q === "&" ? _.state = R.ATTRIB_VALUE_ENTITY_U : _.attribValue += q;
                continue;
              }
              st(_), q === ">" ? vt(_) : _.state = R.ATTRIB;
              continue;
            case R.CLOSE_TAG:
              if (_.tagName)
                q === ">" ? Pt(_) : W(Ae, q) ? _.tagName += q : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = R.SCRIPT) : (Q(q) || ve(_, "Invalid tagname in closing tag"), _.state = R.CLOSE_TAG_SAW_WHITE);
              else {
                if (Q(q))
                  continue;
                le(je, q) ? _.script ? (_.script += "</" + q, _.state = R.SCRIPT) : ve(_, "Invalid tagname in closing tag.") : _.tagName = q;
              }
              continue;
            case R.CLOSE_TAG_SAW_WHITE:
              if (Q(q))
                continue;
              q === ">" ? Pt(_) : ve(_, "Invalid characters in closing tag");
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
                var ne = It(_);
                _.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(ne) ? (_.entity = "", _.state = j, _.write(ne)) : (_[Z] += ne, _.entity = "", _.state = j);
              } else W(_.entity.length ? Ve : Re, q) ? _.entity += q : (ve(_, "Invalid character in entity name"), _[Z] += "&" + _.entity + q, _.entity = "", _.state = j);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && f(_), _;
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
  }(lu)), lu;
}
Id();
const dt = "sclElements", js = "id, tagName, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName", si = "attachedFiles", hu = "id, filename, file", Nd = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
var ra = { exports: {} }, Cd = ra.exports, pu;
function Dd() {
  return pu || (pu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(Cd, function() {
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
      function f(e, t, r) {
        for (var o, s = 0, c = t.length; s < c; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Od, y = Object.keys, O = Array.isArray;
      function I(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var L = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function D(e, t) {
        return B.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(L(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          te(e, r, t[r]);
        });
      }
      var oe = Object.defineProperty;
      function te(e, t, r, o) {
        oe(e, t, I(r && D(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), te(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var je = Object.getOwnPropertyDescriptor, Ae = [].slice;
      function Re(e, t, r) {
        return Ae.call(e, t, r);
      }
      function Ve(e, t) {
        return t(e);
      }
      function Q(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function $(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function H(e, t) {
        if (typeof t == "string" && D(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = H(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var d = e[t.substr(0, l)];
          return d == null ? void 0 : H(d, t.substr(l + 1));
        }
      }
      function W(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          Q(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) W(e, t[o], r[o]);
        } else {
          var c, l, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (l = t.substr(d + 1)) === "" ? r === void 0 ? O(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : W(d = !(d = e[c]) || !D(e, c) ? e[c] = {} : d, l, r)) : r === void 0 ? O(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function le(e) {
        var t, r = {};
        for (t in e) D(e, t) && (r[t] = e[t]);
        return r;
      }
      var R = [].concat;
      function ye(e) {
        return R.apply([], e);
      }
      var De = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ye([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), Pe = new Set(De.map(function(e) {
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
            var l, d = L(r);
            for (l in o = d === Object.prototype ? {} : Object.create(d), xe.set(r, o), r) D(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), xe = null, e;
      }
      var it = {}.toString;
      function Be(e) {
        return it.call(e).slice(8, -1);
      }
      var Ce = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ve = typeof Ce == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ce]) && t.apply(e);
      } : function() {
        return null;
      };
      function Me(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var pt = {};
      function st(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (O(e)) return e.slice();
          if (this === pt && typeof e == "string") return [e];
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
      var vt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Se = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], mt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Se), Pt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function It(e, t) {
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
      de(It).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(tn).from(It), de(wt).from(It);
      var k = mt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = It, K = mt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Pt[t] || r, this.inner = null);
        }
        return de(o).from(_), e[t] = o, e;
      }, {});
      K.Syntax = SyntaxError, K.Type = TypeError, K.Range = RangeError;
      var q = Se.reduce(function(e, t) {
        return e[t + "Error"] = K[t], e;
      }, {}), He = mt.reduce(function(e, t) {
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
          I(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ne(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? ne(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : I(o, r);
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
      He.ModifyError = tn, He.DexieError = It, He.BulkError = wt;
      var ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Te(e) {
        ie = e;
      }
      var me = {}, Oe = 100, De = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, L(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, L(t), e];
      }(), Se = De[0], mt = De[1], De = De[2], mt = mt && mt.then, $e = Se && Se.constructor, We = !!De, ct = function(e, t) {
        nn.push([e, t]), Ot && (queueMicrotask(ts), Ot = !1);
      }, gt = !0, Ot = !0, lt = [], $t = [], Cn = j, tt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ee = tt, nn = [], Ht = 0, Bn = [];
      function z(e) {
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
                var l = o._lib && sn();
                c && typeof c.then == "function" ? r(o, function(d, m) {
                  c instanceof z ? c._then(d, m) : c.then(d, m);
                }) : (o._state = !0, o._value = c, Oi(o)), l && an();
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
          var c = this, l = !e.global && (e !== ee || t !== Un), d = l && !Dt(), m = new z(function(g, w) {
            Or(c, new Ti(Ai(o, e, l, d), Ai(s, e, l, d), g, w, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = me, r;
      }, set: function(e) {
        te(this, "then", e && e.prototype === me ? Er : { get: function() {
          return e;
        }, set: Er.set });
      } };
      function Ti(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function Tr(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && sn(), t = Cn(t), e._state = !1, e._value = t, o = e, lt.some(function(s) {
          return s._value === o._value;
        }) || lt.push(o), Oi(e), r && an());
      }
      function Oi(e) {
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
          ++t.psd.ref, ++Ht, ct(es, [r, e, t]);
        } else e._listeners.push(t);
      }
      function es(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = ie && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var l = lt.length; l; ) if (lt[--l]._value === c._value) return lt.splice(l, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Ht == 0 && Sr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function ts() {
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
        for (var t = Bn.slice(0), r = t.length; r; ) t[--r]();
      }
      function Fn(e) {
        return new z(me, !1, e);
      }
      function Ke(e, t) {
        var r = ee;
        return function() {
          var o = sn(), s = ee;
          try {
            return Rt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Rt(s, !1), o && an();
          }
        };
      }
      X(z.prototype, { then: Er, _then: function(e, t) {
        Or(this, new Ti(null, null, e, t, ee));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Fn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Fn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return z.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return z.resolve(e()).then(function() {
            return Fn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new z(function(o, s) {
          var c = setTimeout(function() {
            return s(new K.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && te(z.prototype, Symbol.toStringTag, "Dexie.Promise"), tt.env = Si(), X(z, { all: function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return z.resolve(s).then(function(l) {
              e[c] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof z ? e : e && typeof e.then == "function" ? new z(function(t, r) {
          e.then(t, r);
        }) : new z(me, !0, e);
      }, reject: Fn, race: function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t, r) {
          e.map(function(o) {
            return z.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return ee;
      }, set: function(e) {
        return ee = e;
      } }, totalEchoes: { get: function() {
        return Un;
      } }, newPSD: Ct, usePSD: Wt, scheduler: { get: function() {
        return ct;
      }, set: function(e) {
        ct = e;
      } }, rejectionMapper: { get: function() {
        return Cn;
      }, set: function(e) {
        Cn = e;
      } }, follow: function(e, t) {
        return new z(function(r, o) {
          return Ct(function(s, c) {
            var l = ee;
            l.unhandleds = [], l.onunhandled = c, l.finalize = ne(function() {
              var d, m = this;
              d = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Bn.push(function g() {
                d(), Bn.splice(Bn.indexOf(g), 1);
              }), ++Ht, ct(function() {
                --Ht == 0 && Sr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), $e && ($e.allSettled && te(z, "allSettled", function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return z.resolve(s).then(function(l) {
              return o[c] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[c] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), $e.any && typeof AggregateError < "u" && te(z, "any", function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, l) {
            return z.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              s[l] = d, --o || r(new AggregateError(s));
            });
          });
        });
      }), $e.withResolvers && (z.withResolvers = $e.withResolvers));
      var Ge = { awaits: 0, echoes: 0, id: 0 }, ns = 0, Mn = [], qn = 0, Un = 0, rs = 0;
      function Ct(e, t, r, o) {
        var s = ee, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++rs, tt.env, c.env = We ? { Promise: z, PromiseProp: { value: z, configurable: !0, writable: !0 }, all: z.all, race: z.race, allSettled: z.allSettled, any: z.any, resolve: z.resolve, reject: z.reject } : {}, t && I(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Wt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function un() {
        return Ge.id || (Ge.id = ++ns), ++Ge.awaits, Ge.echoes += Oe, Ge.id;
      }
      function Dt() {
        return !!Ge.awaits && (--Ge.awaits == 0 && (Ge.id = 0), Ge.echoes = Ge.awaits * Oe, !0);
      }
      function Ln(e) {
        return Ge.echoes && e && e.constructor === $e ? (un(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), Ue(t);
        })) : e;
      }
      function is() {
        var e = Mn[Mn.length - 1];
        Mn.pop(), Rt(e, !1);
      }
      function Rt(e, t) {
        var r, o = ee;
        (t ? !Ge.echoes || qn++ && e === ee : !qn || --qn && e === ee) || queueMicrotask(t ? (function(s) {
          ++Un, Ge.echoes && --Ge.echoes != 0 || (Ge.echoes = Ge.awaits = Ge.id = 0), Mn.push(ee), Rt(s, !0);
        }).bind(null, e) : is), e !== ee && (ee = e, o === tt && (tt.env = Si()), We && (r = tt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Si() {
        var e = h.Promise;
        return We ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Wt(e, t, r, o, s) {
        var c = ee;
        try {
          return Rt(e, !0), t(r, o, s);
        } finally {
          Rt(c, !1);
        }
      }
      function Ai(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ee;
          r && un(), Rt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Rt(s, !1), o && queueMicrotask(Dt);
          }
        };
      }
      function Ar(e) {
        Promise === $e && Ge.echoes === 0 ? qn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + mt).indexOf("[native code]") === -1 && (un = Dt = A);
      var Ue = z.reject, Gt = "￿", St = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ki = "String expected.", cn = [], Vn = "__dbnames", kr = "readonly", Pr = "readwrite";
      function Yt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Pi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function $n(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ke(t))[e], t;
        };
      }
      function Ii() {
        throw K.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function be(e, t) {
        try {
          var r = Ni(e), o = Ni(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var l = s.length, d = c.length, m = l < d ? l : d, g = 0; g < m; ++g) if (s[g] !== c[g]) return s[g] < c[g] ? -1 : 1;
                return l === d ? 0 : l < d ? -1 : 1;
              }(Ci(e), Ci(t));
            case "Array":
              return function(s, c) {
                for (var l = s.length, d = c.length, m = l < d ? l : d, g = 0; g < m; ++g) {
                  var w = be(s[g], c[g]);
                  if (w !== 0) return w;
                }
                return l === d ? 0 : l < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Ni(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Be(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Ci(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Hn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var Di = (Ie.prototype._trans = function(e, t, r) {
        var o = this._tx || ee.trans, s = this.name, c = ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(g, w, p) {
          if (!p.schema[s]) throw new K.NotFound("Table " + s + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = sn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ee.trans ? o._promise(e, l, r) : Ct(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: ee.transless || ee }) : function g(w, p, T, v) {
            if (w.idbdb && (w._state.openComplete || ee.letThrough || w._vip)) {
              var b = w._createTransaction(p, T, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return g(w, p, T, v);
                })) : Ue(E);
              }
              return b._promise(p, function(E, x) {
                return Ct(function() {
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
            if (w._state.openComplete) return Ue(new K.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return Ue(new K.DatabaseClosed());
              w.open().catch(A);
            }
            return w._state.dbReadyPromise.then(function() {
              return g(w, p, T, v);
            });
          }(this.db, e, [this.name], l);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), Ue(g);
          })), m;
        } finally {
          d && an();
        }
      }, Ie.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ue(new K.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ie.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (O(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = y(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(g) {
            return 0 <= d.keyPath.indexOf(g);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(d.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, m) {
          return d.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Gt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && ie && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(d, m) {
          return be(d, m) === 0;
        }
        var l = t.reduce(function(p, m) {
          var g = p[0], w = p[1], p = o[m], T = e[m];
          return [g || p, g || !p ? Yt(w, p && p.multi ? function(v) {
            return v = H(v, m), O(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, H(v, m));
          }) : w];
        }, [null, null]), c = l[0], l = l[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, Ie.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ie.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ie.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ie.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ie.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ie.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ie.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ie.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, O(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ie.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ie.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Ii && (function(m, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function w() {
            this.constructor = m;
          }
          a(m, g), m.prototype = g === null ? Object.create(g) : (w.prototype = g.prototype, new w());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), l = e.prototype; l; l = L(l)) Object.getOwnPropertyNames(l).forEach(function(m) {
          return c.add(m);
        });
        function d(m) {
          if (!m) return m;
          var g, w = Object.create(e.prototype);
          for (g in m) if (!c.has(g)) try {
            w[g] = m[g];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Ie.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          I(this, e);
        });
      }, Ie.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = $n(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(d) {
          return d.numFailures ? z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ie.prototype.update = function(e, t) {
        return typeof e != "object" || O(e) ? this.where(":id").equals(e).modify(t) : (e = H(e, this.schema.primKey.keyPath), e === void 0 ? Ue(new K.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ie.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = $n(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ie.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Hn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? z.reject(o.failures[0]) : void 0;
          });
        });
      }, Ie.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Pi }).then(function(r) {
            return Hn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? z.reject(t.failures[0]) : void 0;
        });
      }, Ie.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, Ie.prototype.bulkAdd = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map($n(g)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ie.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map($n(g)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ie.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), s = e.map(function(l) {
          return l.changes;
        }), c = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(d) {
            var m = [], g = [];
            e.forEach(function(p, T) {
              var v = p.key, b = p.changes, E = d[T];
              if (E) {
                for (var x = 0, S = Object.keys(b); x < S.length; x++) {
                  var P = S[x], N = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (be(N, v) !== 0) throw new K.Constraint("Cannot update primary key in bulkUpdate()");
                  } else W(E, P, N);
                }
                c.push(T), m.push(v), g.push(E);
              }
            });
            var w = m.length;
            return r.mutate({ trans: l, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(p) {
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
      }, Ie.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Hn(t, e, s);
          });
        }).then(function(l) {
          var s = l.numFailures, c = l.lastResult, l = l.failures;
          if (s === 0) return c;
          throw new wt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), l);
        });
      }, Ie);
      function Ie() {
      }
      function vn(e) {
        function t(l, d) {
          if (d) {
            for (var m = arguments.length, g = new Array(m - 1); --m; ) g[m - 1] = arguments[m];
            return r[l].subscribe.apply(null, g), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(l, d, m) {
          if (typeof l != "object") {
            var g;
            d = d || pe;
            var w = { subscribers: [], fire: m = m || A, subscribe: function(p) {
              w.subscribers.indexOf(p) === -1 && (w.subscribers.push(p), w.fire = d(w.fire, p));
            }, unsubscribe: function(p) {
              w.subscribers = w.subscribers.filter(function(T) {
                return T !== p;
              }), w.fire = w.subscribers.reduce(d, m);
            } };
            return r[l] = t[l] = w;
          }
          y(g = l).forEach(function(p) {
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
      function gn(e, t) {
        return de(t).from({ prototype: e }), t;
      }
      function ln(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Ir(e, t) {
        e.filter = Yt(e.filter, t);
      }
      function Nr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Yt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Wn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new K.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function Ri(e, t, r) {
        var o = Wn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Gn(e, t, r, o) {
        var s = e.replayFilter ? Yt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, l = function(d, m, g) {
            var w, p;
            s && !s(m, g, function(T) {
              return m.stop(T);
            }, function(T) {
              return m.fail(T);
            }) || ((p = "" + (w = m.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(w)), D(c, p) || (c[p] = !0, t(d, m, g)));
          };
          return Promise.all([e.or._iterate(l, r), Ki(Ri(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return Ki(Ri(e, o, r), Yt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ki(e, t, r, o) {
        var s = Ke(o ? function(c, l, d) {
          return r(o(c), l, d);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var l = function() {
              return c.continue();
            };
            t && !t(c, function(d) {
              return l = d;
            }, function(d) {
              c.stop(d), l = A;
            }, function(d) {
              c.fail(d), l = A;
            }) || s(c.value, c, function(d) {
              return l = d;
            }), l();
          });
        });
      }
      var bn = (ji.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (O(r)) return f(f([], O(e) ? e : [], !0), r).sort();
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
      }, ji);
      function ji(e) {
        this["@@propmod"] = e;
      }
      var os = (Ee.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ue.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Yt(t.algorithm, e);
      }, Ee.prototype._iterate = function(e, t) {
        return Gn(this._ctx, e, t, this._ctx.table.core);
      }, Ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && I(r, e), t._ctx = r, t;
      }, Ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Gn(t, e, r, t.table.core);
        });
      }, Ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (ln(o, !0)) return s.count({ trans: r, query: { index: Wn(o, s.schema), range: o.range } }).then(function(l) {
            return Math.min(l, o.limit);
          });
          var c = 0;
          return Gn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, Ee.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(m, g) {
          return g ? c(m[r[g]], g - 1) : m[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function d(m, g) {
          return be(c(m, s), c(g, s)) * l;
        }
        return this.toArray(function(m) {
          return m.sort(d);
        }).then(t);
      }, Ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && ln(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = Wn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var l = [];
          return Gn(o, function(d) {
            return l.push(d);
          }, r, o.table.core).then(function() {
            return l;
          });
        }, e);
      }, Ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, ln(t) ? Nr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Nr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Nr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, Ee.prototype.until = function(e, t) {
        return Ir(this._ctx, function(r, o, s) {
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
        return Ir(this._ctx, function(r) {
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
          var s = Wn(t, t.table.core.schema);
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
        return Ir(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = D(t, o);
          return t[o] = !0, !s;
        }), this;
      }, Ee.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, l;
          l = typeof e == "function" ? e : (s = y(e), c = s.length, function(S) {
            for (var P = !1, N = 0; N < c; ++N) {
              var C = s[N], F = e[C], V = H(S, C);
              F instanceof bn ? (W(S, C, F.execute(V)), P = !0) : V !== F && (W(S, C, F), P = !0);
            }
            return P;
          });
          var d = r.table.core, p = d.schema.primaryKey, m = p.outbound, g = p.extractKey, w = 200, p = t.db._options.modifyChunkSize;
          p && (w = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function T(S, C) {
            var N = C.failures, C = C.numFailures;
            b += S - C;
            for (var F = 0, V = y(N); F < V.length; F++) {
              var M = V[F];
              v.push(N[M]);
            }
          }
          var v = [], b = 0, E = [], x = e === Bi;
          return t.clone().primaryKeys().then(function(S) {
            function P(C) {
              var F = Math.min(w, S.length - C), V = S.slice(C, C + F);
              return (x ? Promise.resolve([]) : d.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(M) {
                var U = [], Y = [], G = m ? [] : null, J = x ? V : [];
                if (!x) for (var he = 0; he < F; ++he) {
                  var we = M[he], ce = { value: ke(we), primKey: S[C + he] };
                  l.call(ce, ce.value, ce) !== !1 && (ce.value == null ? J.push(S[C + he]) : m || be(g(we), g(ce.value)) === 0 ? (Y.push(ce.value), m && G.push(S[C + he])) : (J.push(S[C + he]), U.push(ce.value)));
                }
                return Promise.resolve(0 < U.length && d.mutate({ trans: o, type: "add", values: U }).then(function(Fe) {
                  for (var ue in Fe.failures) J.splice(parseInt(ue), 1);
                  T(U.length, Fe);
                })).then(function() {
                  return (0 < Y.length || N && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: G, values: Y, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < C }).then(function(Fe) {
                    return T(Y.length, Fe);
                  });
                }).then(function() {
                  return (0 < J.length || N && x) && d.mutate({ trans: o, type: "delete", keys: J, criteria: N, isAdditionalChunk: 0 < C }).then(function(Fe) {
                    return Hn(r.table, J, Fe);
                  }).then(function(Fe) {
                    return T(J.length, Fe);
                  });
                }).then(function() {
                  return S.length > C + F && P(C + w);
                });
              });
            }
            var N = ln(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < v.length) throw new tn("Error modifying one or more objects", v, b, E);
              return S.length;
            });
          });
        });
      }, Ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ln(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Bi) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(m) {
              var d = m.failures, m = m.numFailures;
              if (m) throw new tn("Could not delete some values", Object.keys(d).map(function(g) {
                return d[g];
              }), c - m);
              return c - m;
            });
          });
        });
      }, Ee);
      function Ee() {
      }
      var Bi = function(e, t) {
        return t.value = null;
      };
      function ss(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function as(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function at(e, t, r) {
        return e = e instanceof Mi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function fn(e) {
        return new e.Collection(e, function() {
          return Fi("");
        }).limit(0);
      }
      function Yn(e, t, r, o) {
        var s, c, l, d, m, g, w, p = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return at(e, ki);
        function T(b) {
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, l = b === "next" ? ss : as;
          var E = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, S) {
            return l(x.lower, S.lower);
          });
          d = E.map(function(x) {
            return x.upper;
          }), m = E.map(function(x) {
            return x.lower;
          }), w = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return Kt(d[0], m[p - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var v = 0;
        return e._addAlgorithm(function(b, E, x) {
          var S = b.key;
          if (typeof S != "string") return !1;
          var P = c(S);
          if (t(P, m, v)) return !0;
          for (var N = null, C = v; C < p; ++C) {
            var F = function(V, M, U, Y, G, J) {
              for (var he = Math.min(V.length, Y.length), we = -1, ce = 0; ce < he; ++ce) {
                var Fe = M[ce];
                if (Fe !== Y[ce]) return G(V[ce], U[ce]) < 0 ? V.substr(0, ce) + U[ce] + U.substr(ce + 1) : G(V[ce], Y[ce]) < 0 ? V.substr(0, ce) + Y[ce] + U.substr(ce + 1) : 0 <= we ? V.substr(0, we) + M[we] + U.substr(we + 1) : null;
                G(V[ce], Fe) < 0 && (we = ce);
              }
              return he < Y.length && J === "next" ? V + U.substr(V.length) : he < V.length && J === "prev" ? V.substr(0, U.length) : we < 0 ? null : V.substr(0, we) + Y[we] + U.substr(we + 1);
            }(S, P, d[C], m[C], l, g);
            F === null && N === null ? v = C + 1 : (N === null || 0 < l(N, F)) && (N = F);
          }
          return E(N !== null ? function() {
            b.continue(N + w);
          } : x), !1;
        }), e;
      }
      function Kt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Fi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Mi = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? fn(this) : new this.Collection(this, function() {
            return Kt(e, t, !r, !o);
          });
        } catch {
          return at(this, St);
        }
      }, Ye.prototype.equals = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Fi(e);
        });
      }, Ye.prototype.above = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(e, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(e, void 0, !1);
        });
      }, Ye.prototype.below = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(void 0, e, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(void 0, e);
        });
      }, Ye.prototype.startsWith = function(e) {
        return typeof e != "string" ? at(this, ki) : this.between(e, e + Gt, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Yn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ye.prototype.equalsIgnoreCase = function(e) {
        return Yn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var e = st.apply(pt, arguments);
        return e.length === 0 ? fn(this) : Yn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = st.apply(pt, arguments);
        return e.length === 0 ? fn(this) : Yn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ye.prototype.anyOf = function() {
        var e = this, t = st.apply(pt, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return at(this, St);
        }
        if (t.length === 0) return fn(this);
        var o = new this.Collection(this, function() {
          return Kt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return o._addAlgorithm(function(c, l, d) {
          for (var m = c.key; 0 < r(m, t[s]); ) if (++s === t.length) return l(d), !1;
          return r(m, t[s]) === 0 || (l(function() {
            c.continue(t[s]);
          }), !1);
        }), o;
      }, Ye.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var e = st.apply(pt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return at(this, St);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(S, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, l = this._min, d = this._max;
        if (S.length === 0) return fn(this);
        if (!S.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return at(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", K.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, w, p = s;
        function T(P, N) {
          return p(P[0], N[0]);
        }
        try {
          (w = S.reduce(function(P, N) {
            for (var C = 0, F = P.length; C < F; ++C) {
              var V = P[C];
              if (o(N[0], V[1]) < 0 && 0 < o(N[1], V[0])) {
                V[0] = l(V[0], N[0]), V[1] = d(V[1], N[1]);
                break;
              }
            }
            return C === F && P.push(N), P;
          }, [])).sort(T);
        } catch {
          return at(this, St);
        }
        var v = 0, b = g ? function(P) {
          return 0 < s(P, w[v][1]);
        } : function(P) {
          return 0 <= s(P, w[v][1]);
        }, E = m ? function(P) {
          return 0 < c(P, w[v][0]);
        } : function(P) {
          return 0 <= c(P, w[v][0]);
        }, x = b, S = new this.Collection(this, function() {
          return Kt(w[0][0], w[w.length - 1][1], !m, !g);
        });
        return S._ondirectionchange = function(P) {
          p = P === "next" ? (x = b, s) : (x = E, c), w.sort(T);
        }, S._addAlgorithm(function(P, N, C) {
          for (var F, V = P.key; x(V); ) if (++v === w.length) return N(C), !1;
          return !b(F = V) && !E(F) || (r._cmp(V, w[v][1]) === 0 || r._cmp(V, w[v][0]) === 0 || N(function() {
            p === s ? P.continue(w[v][0]) : P.continue(w[v][1]);
          }), !1);
        }), S;
      }, Ye.prototype.startsWithAnyOf = function() {
        var e = st.apply(pt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? fn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : at(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function xt(e) {
        return Ke(function(t) {
          return _n(t), e(t.target.error), !1;
        });
      }
      function _n(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var wn = "storagemutated", Cr = "x-storagemutated-1", jt = vn(null, wn), us = (Et.prototype._lock = function() {
        return Q(!ee.global), ++this._reculock, this._reculock !== 1 || ee.global || (ee.lockOwnerFor = this), this;
      }, Et.prototype._unlock = function() {
        if (Q(!ee.global), --this._reculock == 0) for (ee.global || (ee.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
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
        if (Q(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new K.DatabaseClosed(o);
          case "MissingAPIError":
            throw new K.MissingAPI(o.message, o);
          default:
            throw new K.OpenFailed(o);
        }
        if (!this.active) throw new K.TransactionInactive();
        return Q(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ke(function(s) {
          _n(s), t._reject(e.error);
        }), e.onabort = Ke(function(s) {
          _n(s), t.active && t._reject(new K.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Ke(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && jt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Et.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ue(new K.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new K.TransactionInactive());
        if (this._locked()) return new z(function(c, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, l);
          }, ee]);
        });
        if (r) return Ct(function() {
          var c = new z(function(l, d) {
            o._lock();
            var m = t(l, d, o);
            m && m.then && m.then(l, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new z(function(c, l) {
          var d = t(c, l, o);
          d && d.then && d.then(c, l);
        });
        return s._lib = !0, s;
      }, Et.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Et.prototype.waitFor = function(e) {
        var t, r = this._root(), o = z.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new z(function(c, l) {
          o.then(function(d) {
            return r._waitingQueue.push(Ke(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(Ke(l.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, Et.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new K.Abort()));
      }, Et.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (D(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new K.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, Et);
      function Et() {
      }
      function Dr(e, t, r, o, s, c, l, d) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !l ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + qi(t), type: d };
      }
      function qi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Rr(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, l) {
          return l = o(c, l), l && (s[l[0]] = l[1]), s;
        }, {})) };
        var o;
      }
      var xn = function(e) {
        try {
          return e.only([[]]), xn = function() {
            return [[]];
          }, [[]];
        } catch {
          return xn = function() {
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
      function Ui(e) {
        return [].slice.call(e);
      }
      var cs = 0;
      function En(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ls(e, t, m) {
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = x.lower, b = x.upper, E = x.lowerOpen, x = x.upperOpen;
          return v === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(v, !!E) : t.bound(v, b, !!E, !!x);
        }
        function s(T) {
          var v, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var x = E.trans, S = E.type, P = E.keys, N = E.values, C = E.range;
            return new Promise(function(F, V) {
              F = Ke(F);
              var M = x.objectStore(b), U = M.keyPath == null, Y = S === "put" || S === "add";
              if (!Y && S !== "delete" && S !== "deleteRange") throw new Error("Invalid operation type: " + S);
              var G, J = (P || N || { length: 1 }).length;
              if (P && N && P.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (J === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(nt) {
                ++Fe, _n(nt);
              }
              var we = [], ce = [], Fe = 0;
              if (S === "deleteRange") {
                if (C.type === 4) return F({ numFailures: Fe, failures: ce, results: [], lastResult: void 0 });
                C.type === 3 ? we.push(G = M.clear()) : we.push(G = M.delete(o(C)));
              } else {
                var U = Y ? U ? [N, P] : [N, null] : [P, null], ue = U[0], ze = U[1];
                if (Y) for (var Je = 0; Je < J; ++Je) we.push(G = ze && ze[Je] !== void 0 ? M[S](ue[Je], ze[Je]) : M[S](ue[Je])), G.onerror = he;
                else for (Je = 0; Je < J; ++Je) we.push(G = M[S](ue[Je])), G.onerror = he;
              }
              function sr(nt) {
                nt = nt.target.result, we.forEach(function(zt, Zr) {
                  return zt.error != null && (ce[Zr] = zt.error);
                }), F({ numFailures: Fe, failures: ce, results: S === "delete" ? P : we.map(function(zt) {
                  return zt.result;
                }), lastResult: nt });
              }
              G.onerror = function(nt) {
                he(nt), sr(nt);
              }, G.onsuccess = sr;
            });
          }, getMany: function(E) {
            var x = E.trans, S = E.keys;
            return new Promise(function(P, N) {
              P = Ke(P);
              for (var C, F = x.objectStore(b), V = S.length, M = new Array(V), U = 0, Y = 0, G = function(we) {
                we = we.target, M[we._pos] = we.result, ++Y === U && P(M);
              }, J = xt(N), he = 0; he < V; ++he) S[he] != null && ((C = F.get(S[he]))._pos = he, C.onsuccess = G, C.onerror = J, ++U);
              U === 0 && P(M);
            });
          }, get: function(E) {
            var x = E.trans, S = E.key;
            return new Promise(function(P, N) {
              P = Ke(P);
              var C = x.objectStore(b).get(S);
              C.onsuccess = function(F) {
                return P(F.target.result);
              }, C.onerror = xt(N);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, S) {
              x = Ke(x);
              var P, N, C, U = E.trans, F = E.values, V = E.limit, G = E.query, M = V === 1 / 0 ? void 0 : V, Y = G.index, G = G.range, U = U.objectStore(b), Y = Y.isPrimaryKey ? U : U.index(Y.name), G = o(G);
              if (V === 0) return x({ result: [] });
              v ? ((M = F ? Y.getAll(G, M) : Y.getAllKeys(G, M)).onsuccess = function(J) {
                return x({ result: J.target.result });
              }, M.onerror = xt(S)) : (P = 0, N = !F && "openKeyCursor" in Y ? Y.openKeyCursor(G) : Y.openCursor(G), C = [], N.onsuccess = function(J) {
                var he = N.result;
                return he ? (C.push(F ? he.value : he.primaryKey), ++P === V ? x({ result: C }) : void he.continue()) : x({ result: C });
              }, N.onerror = xt(S));
            });
          }), openCursor: function(E) {
            var x = E.trans, S = E.values, P = E.query, N = E.reverse, C = E.unique;
            return new Promise(function(F, V) {
              F = Ke(F);
              var Y = P.index, M = P.range, U = x.objectStore(b), U = Y.isPrimaryKey ? U : U.index(Y.name), Y = N ? C ? "prevunique" : "prev" : C ? "nextunique" : "next", G = !S && "openKeyCursor" in U ? U.openKeyCursor(o(M), Y) : U.openCursor(o(M), Y);
              G.onerror = xt(V), G.onsuccess = Ke(function(J) {
                var he, we, ce, Fe, ue = G.result;
                ue ? (ue.___id = ++cs, ue.done = !1, he = ue.continue.bind(ue), we = (we = ue.continuePrimaryKey) && we.bind(ue), ce = ue.advance.bind(ue), Fe = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = x, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = Ke(V), ue.next = function() {
                  var ze = this, Je = 1;
                  return this.start(function() {
                    return Je-- ? ze.continue() : ze.stop();
                  }).then(function() {
                    return ze;
                  });
                }, ue.start = function(ze) {
                  function Je() {
                    if (G.result) try {
                      ze();
                    } catch (nt) {
                      ue.fail(nt);
                    }
                    else ue.done = !0, ue.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ue.stop();
                  }
                  var sr = new Promise(function(nt, zt) {
                    nt = Ke(nt), G.onerror = xt(zt), ue.fail = zt, ue.stop = function(Zr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Fe, nt(Zr);
                    };
                  });
                  return G.onsuccess = Ke(function(nt) {
                    G.onsuccess = Je, Je();
                  }), ue.continue = he, ue.continuePrimaryKey = we, ue.advance = ce, Je(), sr;
                }, F(ue)) : F(null);
              }, V);
            });
          }, count: function(E) {
            var x = E.query, S = E.trans, P = x.index, N = x.range;
            return new Promise(function(C, F) {
              var V = S.objectStore(b), M = P.isPrimaryKey ? V : V.index(P.name), V = o(N), M = V ? M.count(V) : M.count();
              M.onsuccess = Ke(function(U) {
                return C(U.target.result);
              }), M.onerror = xt(F);
            });
          } };
        }
        var c, l, d, w = (l = m, d = Ui((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(T) {
          return l.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = O(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Kr(v) }, indexes: Ui(T.indexNames).map(function(S) {
            return T.index(S);
          }).map(function(C) {
            var P = C.name, N = C.unique, F = C.multiEntry, C = C.keyPath, F = { name: P, compound: O(C), keyPath: C, unique: N, multiEntry: F, extractKey: Kr(C) };
            return E[En(C)] = F;
          }), getIndexByKeyPath: function(S) {
            return E[En(S)];
          } };
          return E[":id"] = x.primaryKey, v != null && (E[En(v)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < d.length && "getAll" in l.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = w.schema, g = w.hasGetAll, w = m.tables.map(s), p = {};
        return w.forEach(function(T) {
          return p[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!p[T]) throw new Error("Table '".concat(T, "' not found"));
          return p[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: xn(t), schema: m };
      }
      function fs(e, t, r, o) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = ls(t, s, o), e.dbcore.reduce(function(c, l) {
          return l = l.create, u(u({}, c), l(c));
        }, o)) };
      }
      function Xn(e, o) {
        var r = o.db, o = fs(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(l) {
            return l.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Qn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(l) {
            var d = function m(g, w) {
              return je(g, w) || (g = L(g)) && m(g, w);
            }(l, s);
            (!d || "value" in d && d.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? te(l, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              oe(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[s] = new e.Table(s, c));
          });
        });
      }
      function jr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function ds(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function hs(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Rr("$meta", Vi("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var l = c._reject.bind(c), d = ee.transless || ee;
        Ct(function() {
          return ee.trans = c, ee.transless = d, t !== 0 ? (Xn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(w) {
            return w ?? g;
          }) : z.resolve(g)).then(function(w) {
            return T = w, v = c, b = r, E = [], w = (p = e)._versions, x = p._dbSchema = Jn(0, p.idbdb, b), (w = w.filter(function(S) {
              return S._cfg.version >= T;
            })).length !== 0 ? (w.forEach(function(S) {
              E.push(function() {
                var P = x, N = S._cfg.dbschema;
                Zn(p, P, b), Zn(p, N, b), x = p._dbSchema = N;
                var C = Br(P, N);
                C.add.forEach(function(Y) {
                  Fr(b, Y[0], Y[1].primKey, Y[1].indexes);
                }), C.change.forEach(function(Y) {
                  if (Y.recreate) throw new K.Upgrade("Not yet support for changing primary key");
                  var G = b.objectStore(Y.name);
                  Y.add.forEach(function(J) {
                    return zn(G, J);
                  }), Y.change.forEach(function(J) {
                    G.deleteIndex(J.name), zn(G, J);
                  }), Y.del.forEach(function(J) {
                    return G.deleteIndex(J);
                  });
                });
                var F = S._cfg.contentUpgrade;
                if (F && S._cfg.version > T) {
                  Xn(p, b), v._memoizedTables = {};
                  var V = le(N);
                  C.del.forEach(function(Y) {
                    V[Y] = P[Y];
                  }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], y(V), V), v.schema = V;
                  var M, U = vt(F);
                  return U && un(), C = z.follow(function() {
                    var Y;
                    (M = F(v)) && U && (Y = Dt.bind(null, null), M.then(Y, Y));
                  }), M && typeof M.then == "function" ? z.resolve(M) : C.then(function() {
                    return M;
                  });
                }
              }), E.push(function(P) {
                var N, C, F = S._cfg.dbschema;
                N = F, C = P, [].slice.call(C.db.objectStoreNames).forEach(function(V) {
                  return N[V] == null && C.db.deleteObjectStore(V);
                }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), v.schema = p._dbSchema;
              }), E.push(function(P) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === S._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : P.objectStore("$meta").put(S._cfg.version, "version"));
              });
            }), function S() {
              return E.length ? z.resolve(E.shift()(v.idbtrans)).then(S) : z.resolve();
            }().then(function() {
              Li(x, b);
            })) : z.resolve();
            var p, T, v, b, E, x;
          }).catch(l)) : (y(s).forEach(function(w) {
            Fr(r, w, s[w].primKey, s[w].indexes);
          }), Xn(e, r), void z.follow(function() {
            return e.on.populate.fire(c);
          }).catch(l));
          var m, g;
        });
      }
      function ps(e, t) {
        Li(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Jn(0, e.idbdb, t);
        Zn(e, e._dbSchema, t);
        for (var o = 0, s = Br(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(l.name);
            l.add.forEach(function(m) {
              ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(m.src)), zn(d, m);
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
            var l = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) l.recreate = !0, o.change.push(l);
            else {
              var d = s.idxByName, m = c.idxByName, g = void 0;
              for (g in d) m[g] || l.del.push(g);
              for (g in m) {
                var w = d[g], p = m[g];
                w ? w.src !== p.src && l.change.push(p) : l.add.push(p);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && o.change.push(l);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Fr(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return zn(s, c);
        }), s;
      }
      function Li(e, t) {
        y(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ie && console.debug("Dexie: Creating missing table", r), Fr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function zn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Jn(e, t, r) {
        var o = {};
        return Re(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), l = Dr(qi(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), d = [], m = 0; m < c.indexNames.length; ++m) {
            var w = c.index(c.indexNames[m]), g = w.keyPath, w = Dr(w.name, g, !!w.unique, !!w.multiEntry, !1, g && typeof g != "string", !1);
            d.push(w);
          }
          o[s] = Rr(s, l, d);
        }), o;
      }
      function Zn(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], l = r.objectStore(c);
          e._hasGetAll = "getAll" in l;
          for (var d = 0; d < l.indexNames.length; ++d) {
            var m = l.indexNames[d], g = l.index(m).keyPath, w = typeof g == "string" ? g : "[" + Re(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[w]) && (g.name = m, delete t[c].idxByName[w], t[c].idxByName[m] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Vi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Dr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), O(c), r === 0, o);
        });
      }
      var ms = (dn.prototype._createTableSchema = Rr, dn.prototype._parseIndexSyntax = Vi, dn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        y(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new K.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new K.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(l) {
              if (l.auto) throw new K.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new K.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, dn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? I(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          I(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, jr(t, [t._allTables, t, t.Transaction.prototype]), Qn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(s), s), t._storeNames = y(s), this;
      }, dn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ae(this._cfg.contentUpgrade || A, e), this;
      }, dn);
      function dn() {
      }
      function Mr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new At(Vn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function qr(e) {
        return e && typeof e.databases == "function";
      }
      function Ur(e) {
        return Ct(function() {
          return ee.letThrough = !0, e();
        });
      }
      function Lr(e) {
        return !("from" in e);
      }
      var Qe = function(e, t) {
        if (!this) {
          var r = new Qe();
          return e && "d" in e && I(r, e), r;
        }
        I(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Tn(e, t, r) {
        var o = be(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Lr(e)) return I(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (be(r, e.from) < 0) return s ? Tn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Hi(e);
          if (0 < be(t, e.to)) return o ? Tn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Hi(e);
          be(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < be(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && On(e, s), o && r && On(e, o);
        }
      }
      function On(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, l = m.to, d = m.l, m = m.r;
          Tn(o, c, l), d && r(o, d), m && r(o, m);
        }(e, t);
      }
      function $i(e, t) {
        var r = er(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = er(e), l = c.next(s.from), d = l.value; !o.done && !l.done; ) {
          if (be(d.from, s.to) <= 0 && 0 <= be(d.to, s.from)) return !0;
          be(s.from, d.from) < 0 ? s = (o = r.next(d.from)).value : d = (l = c.next(s.from)).value;
        }
        return !1;
      }
      function er(e) {
        var t = Lr(e) ? null : { s: 0, n: e };
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
      function Hi(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Wi(r)), e.d = Wi(e);
      }
      function Wi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function tr(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? On(e[r], t[r]) : e[r] = function o(s) {
            var c, l, d = {};
            for (c in s) D(s, c) && (l = s[c], d[c] = !l || typeof l != "object" || Pe.has(l.constructor) ? l : o(l));
            return d;
          }(t[r]);
        }), e;
      }
      function Vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && $i(t[r], e[r]);
        });
      }
      X(Qe.prototype, ((mt = { add: function(e) {
        return On(this, e), this;
      }, addKey: function(e) {
        return Tn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Tn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = er(this).next(e).value;
        return t && be(t.from, e) <= 0 && 0 <= be(t.to, e);
      } })[Ce] = function() {
        return er(this);
      }, mt));
      var Xt = {}, $r = {}, Hr = !1;
      function nr(e) {
        tr($r, e), Hr || (Hr = !0, setTimeout(function() {
          Hr = !1, Wr($r, !($r = {}));
        }, 0));
      }
      function Wr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Xt); o < s.length; o++) Gi(l = s[o], e, r, t);
        else for (var c in e) {
          var l, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (l = Xt["idb://".concat(c, "/").concat(d)]) && Gi(l, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function Gi(e, t, r, o) {
        for (var s = [], c = 0, l = Object.entries(e.queries.query); c < l.length; c++) {
          for (var d = l[c], m = d[0], g = [], w = 0, p = d[1]; w < p.length; w++) {
            var T = p[w];
            Vr(t, T.obsSet) ? T.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && g.push(T);
          }
          o && s.push([m, g]);
        }
        if (o) for (var v = 0, b = s; v < b.length; v++) {
          var E = b[v], m = E[0], g = E[1];
          e.queries.query[m] = g;
        }
      }
      function ys(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Ue(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function l() {
          if (t.openCanceller !== o) throw new K.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new z(function(T, v) {
            if (l(), !r) throw new K.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new K.MissingAPI();
            E.onerror = xt(v), E.onblocked = Ke(e._fireOnBlocked), E.onupgradeneeded = Ke(function(x) {
              var S;
              w = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = _n, w.abort(), E.result.close(), (S = r.deleteDatabase(b)).onsuccess = S.onerror = Ke(function() {
                v(new K.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = xt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, p = x < 1, e.idbdb = E.result, c && ps(e, w), hs(e, x / 10, w, v));
            }, v), E.onsuccess = Ke(function() {
              w = null;
              var x, S, P, N, C, F = e.idbdb = E.result, V = Re(F.objectStoreNames);
              if (0 < V.length) try {
                var M = F.transaction((N = V).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) S = F, P = M, (x = e).verno = S.version / 10, P = x._dbSchema = Jn(0, S, P), x._storeNames = Re(S.objectStoreNames, 0), Qn(x, [x._allTables], y(P), P);
                else if (Zn(e, e._dbSchema, M), ((C = Br(Jn(0, (C = e).idbdb, M), C._dbSchema)).add.length || C.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), s = F.version + 1, c = !0, T(d());
                Xn(e, M);
              } catch {
              }
              cn.push(e), F.onversionchange = Ke(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), F.onclose = Ke(function(U) {
                e.on("close").fire(U);
              }), p && (C = e._deps, M = b, F = C.indexedDB, C = C.IDBKeyRange, qr(F) || M === Vn || Mr(F, C).put({ name: M }).catch(A)), T();
            }, v);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return z.reject(T);
          });
        }
        var m, g = t.dbReadyResolve, w = null, p = !1;
        return z.race([o, (typeof navigator > "u" ? z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function v() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(d)]).then(function() {
          return l(), t.onReadyBeingFired = [], z.resolve(Ur(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(ae, A);
              return t.onReadyBeingFired = [], z.resolve(Ur(function() {
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
          return o === t.openCanceller && e._close(), Ue(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return p && (T = {}, e.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new Qe(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new Qe(-1 / 0, [[[]]]);
          }), jt(wn).fire(T), Wr(T, !0)), e;
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
          return function(m) {
            var d = c(m), m = d.value;
            return d.done ? m : m && typeof m.then == "function" ? m.then(r, o) : O(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function rr(e, t, r) {
        for (var o = O(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var vs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function l(p, T, v) {
            var b = En(p), E = s[b] = s[b] || [], x = p == null ? 0 : typeof p == "string" ? 1 : p.length, S = 0 < T, S = u(u({}, v), { name: S ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: S, keyTail: T, keyLength: x, extractKey: Kr(p), unique: !S && v.unique });
            return E.push(S), S.isPrimaryKey || c.push(S), 1 < x && l(x === 2 ? p[0] : p.slice(0, x - 1), T + 1, v), E.sort(function(P, N) {
              return P.keyTail - N.keyTail;
            }), S;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var d = 0, m = o.indexes; d < m.length; d++) {
            var g = m[d];
            l(g.keyPath, 0, g);
          }
          function w(p) {
            var T, v = p.query.index;
            return v.isVirtual ? u(u({}, p), { query: { index: v.lowLevelIndex, range: (T = p.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: rr(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: rr(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = s[En(p)]) && p[0];
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
                P != null ? S.continue(rr(P, p.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : p.unique ? S.continue(S.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : S.continue();
              } }, continuePrimaryKey: { value: function(P, N) {
                S.continuePrimaryKey(rr(P, e.MAX_KEY, v), N);
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
        return r = r || {}, o = o || "", y(e).forEach(function(s) {
          var c, l, d;
          D(t, s) ? (c = e[s], l = t[s], typeof c == "object" && typeof l == "object" && c && l ? (d = Be(c)) !== Be(l) ? r[o + s] = t[s] : d === "Object" ? Yr(c, l, r, o + s + ".") : c !== l && (r[o + s] = t[s]) : c !== l && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), y(t).forEach(function(s) {
          D(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var gs = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = ee.trans, l = c.table(t).hook, d = l.deleting, m = l.creating, g = l.updating;
            switch (s.type) {
              case "add":
                if (m.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (m.fire === A && g.fire === A) break;
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
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: x }) : u({}, p)).type !== "delete" && (p.values = f([], p.values)), p.keys && (p.keys = f([], p.keys)), T = r, b = x, ((v = p).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(S) {
                var P = x.map(function(N, C) {
                  var F, V, M, U = S[C], Y = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(Y, N, U, E) : p.type === "add" || U === void 0 ? (F = m.fire.call(Y, N, p.values[C], E), N == null && F != null && (p.keys[C] = N = F, o.outbound || W(p.values[C], o.keyPath, N))) : (F = Yr(U, p.values[C]), (V = g.fire.call(Y, F, N, U, E)) && (M = p.values[C], Object.keys(V).forEach(function(G) {
                    D(M, G) ? M[G] = V[G] : W(M, G, V[G]);
                  }))), Y;
                });
                return r.mutate(p).then(function(N) {
                  for (var C = N.failures, F = N.results, V = N.numFailures, N = N.lastResult, M = 0; M < x.length; ++M) {
                    var U = (F || x)[M], Y = P[M];
                    U == null ? Y.onerror && Y.onerror(C[M]) : Y.onsuccess && Y.onsuccess(p.type === "put" && S[M] ? p.values[M] : U);
                  }
                  return { failures: C, results: F, numFailures: V, lastResult: N };
                }).catch(function(N) {
                  return P.forEach(function(C) {
                    return C.onerror && C.onerror(N);
                  }), Promise.reject(N);
                });
              });
            }
          } });
        } });
      } };
      function Yi(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) be(t.keys[s], e[c]) === 0 && (o.push(r ? ke(t.values[s]) : t.values[s]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var bs = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var s = Yi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? z.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ke(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Xi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Qi(e, t) {
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
      var _s = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Qe(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (ee.subscr && s !== "readonly") throw new K.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, l = c.primaryKey, p = c.indexes, d = l.extractKey, m = l.outbound, g = l.autoIncrement && p.filter(function(v) {
            return v.compound && v.keyPath.includes(l.keyPath);
          }), w = u(u({}, s), { mutate: function(v) {
            function b(G) {
              return G = "idb://".concat(t, "/").concat(o, "/").concat(G), N[G] || (N[G] = new Qe());
            }
            var E, x, S, P = v.trans, N = v.mutatedParts || (v.mutatedParts = {}), C = b(""), F = b(":dels"), V = v.type, Y = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Xr(l, v).filter(function(G) {
              return G;
            }), v.values] : [], M = Y[0], U = Y[1], Y = v.trans._cache;
            return O(M) ? (C.addKeys(M), (Y = V === "delete" || M.length === U.length ? Yi(M, Y) : null) || F.addKeys(M), (Y || U) && (E = b, x = Y, S = U, c.indexes.forEach(function(G) {
              var J = E(G.name || "");
              function he(ce) {
                return ce != null ? G.extractKey(ce) : null;
              }
              function we(ce) {
                return G.multiEntry && O(ce) ? ce.forEach(function(Fe) {
                  return J.addKey(Fe);
                }) : J.addKey(ce);
              }
              (x || S).forEach(function(ce, ze) {
                var ue = x && he(x[ze]), ze = S && he(S[ze]);
                be(ue, ze) !== 0 && (ue != null && we(ue), ze != null && we(ze));
              });
            }))) : M ? (U = { from: (U = M.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = M.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, F.add(U), C.add(U)) : (C.add(r), F.add(r), c.indexes.forEach(function(G) {
              return b(G.name).add(r);
            })), s.mutate(v).then(function(G) {
              return !M || v.type !== "add" && v.type !== "put" || (C.addKeys(G.results), g && g.forEach(function(J) {
                for (var he = v.values.map(function(ue) {
                  return J.extractKey(ue);
                }), we = J.keyPath.findIndex(function(ue) {
                  return ue === l.keyPath;
                }), ce = 0, Fe = G.results.length; ce < Fe; ++ce) he[ce][we] = G.results[ce];
                b(J.name).addKeys(he);
              })), P.mutatedParts = tr(P.mutatedParts || {}, N), G;
            });
          } }), p = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new Qe((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [l, new Qe(v.key)];
          }, getMany: function(v) {
            return [l, new Qe().addKeys(v.keys)];
          }, count: p, query: p, openCursor: p };
          return y(T).forEach(function(v) {
            w[v] = function(b) {
              var E = ee.subscr, x = !!E, S = Xi(ee, s) && Qi(v, b) ? b.obsSet = {} : E;
              if (x) {
                var P = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), S[U] || (S[U] = new Qe());
                }, N = P(""), C = P(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? C : P(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var F = v === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(U) {
                      if (v === "query") {
                        if (m && b.values) return F.then(function(he) {
                          return he = he.result, N.addKeys(he), U;
                        });
                        var Y = b.values ? U.result.map(d) : U.result;
                        (b.values ? N : C).addKeys(Y);
                      } else if (v === "openCursor") {
                        var G = U, J = b.values;
                        return G && Object.create(G, { key: { get: function() {
                          return C.addKey(G.primaryKey), G.key;
                        } }, primaryKey: { get: function() {
                          var he = G.primaryKey;
                          return C.addKey(he), he;
                        } }, value: { get: function() {
                          return J && N.addKey(G.primaryKey), G.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  C.add(r);
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
      function Qr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < be(r, o.lower) : 0 <= be(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? be(e, t.upper) < 0 : be(e, t.upper) <= 0));
        var r, o;
      }
      function Ji(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var l = t.query.index, d = l.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, w = l.extractKey, p = (l.lowLevelIndex || l).extractKey, T = T.reduce(function(v, b) {
          var E = v, x = [];
          if (b.type === "add" || b.type === "put") for (var S = new Qe(), P = b.values.length - 1; 0 <= P; --P) {
            var N, C = b.values[P], F = g(C);
            S.hasKey(F) || (N = w(C), (d && O(N) ? N.some(function(G) {
              return Qr(G, m);
            }) : Qr(N, m)) && (S.addKey(F), x.push(C)));
          }
          switch (b.type) {
            case "add":
              var V = new Qe().addKeys(t.values ? v.map(function(J) {
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
              var M = new Qe().addKeys(b.values.map(function(J) {
                return g(J);
              }));
              E = v.filter(function(J) {
                return !M.hasKey(t.values ? g(J) : J);
              }).concat(t.values ? x : x.map(function(J) {
                return g(J);
              }));
              break;
            case "delete":
              var U = new Qe().addKeys(b.keys);
              E = v.filter(function(J) {
                return !U.hasKey(t.values ? g(J) : J);
              });
              break;
            case "deleteRange":
              var Y = b.range;
              E = v.filter(function(J) {
                return !Qr(g(J), Y);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(v, b) {
          return be(p(v), p(b)) || be(g(v), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function Zi(e, t) {
        return be(e.lower, t.lower) === 0 && be(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ws(e, t) {
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
      function xs(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, c = t, setTimeout(function() {
            s.subscribers.size === 0 && Me(c, s);
          }, 3e3));
        });
      }
      var Es = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, s) {
          var c, l, d = e.transaction(r, o, s);
          return o === "readwrite" && (l = (c = new AbortController()).signal, s = function(m) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var g = /* @__PURE__ */ new Set(), w = 0, p = r; w < p.length; w++) {
                  var T = p[w], v = Xt["idb://".concat(t, "/").concat(T)];
                  if (v) {
                    var b = e.table(T), E = v.optimisticOps.filter(function(J) {
                      return J.trans === d;
                    });
                    if (d._explicit && m && d.mutatedParts) for (var x = 0, S = Object.values(v.queries.query); x < S.length; x++) for (var P = 0, N = (V = S[x]).slice(); P < N.length; P++) Vr((M = N[P]).obsSet, d.mutatedParts) && (Me(V, M), M.subscribers.forEach(function(J) {
                      return g.add(J);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(J) {
                        return J.trans !== d;
                      });
                      for (var C = 0, F = Object.values(v.queries.query); C < F.length; C++) for (var V, M, U, Y = 0, G = (V = F[C]).slice(); Y < G.length; Y++) (M = G[Y]).res != null && d.mutatedParts && (m && !M.dirty ? (U = Object.isFrozen(M.res), U = Ji(M.res, M.req, E, b, M, U), M.dirty ? (Me(V, M), M.subscribers.forEach(function(J) {
                        return g.add(J);
                      })) : U !== M.res && (M.res = U, M.promise = z.resolve({ result: U }))) : (M.dirty && Me(V, M), M.subscribers.forEach(function(J) {
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
          }, d.addEventListener("abort", s(!1), { signal: l }), d.addEventListener("error", s(!1), { signal: l }), d.addEventListener("complete", s(!0), { signal: l })), d;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var l = ee.trans;
            if (s.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Xt["idb://".concat(t, "/").concat(r)];
            return d ? (l = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Xr(s, c).some(function(m) {
              return m == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && nr(c.mutatedParts), l.then(function(m) {
              0 < m.numFailures && (Me(d.optimisticOps, c), (m = zi(0, c, m)) && d.optimisticOps.push(m), c.mutatedParts && nr(c.mutatedParts));
            }), l.catch(function() {
              Me(d.optimisticOps, c), c.mutatedParts && nr(c.mutatedParts);
            })) : l.then(function(m) {
              var g = zi(0, u(u({}, c), { values: c.values.map(function(w, p) {
                var T;
                return m.failures[p] || (w = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? ke(w) : u({}, w), W(w, s.keyPath, m.results[p])), w;
              }) }), m);
              d.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && nr(c.mutatedParts);
              });
            }), l) : o.mutate(c);
          }, query: function(c) {
            if (!Xi(ee, o) || !Qi("query", c)) return o.query(c);
            var l = ((g = ee.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", p = ee, d = p.requery, m = p.signal, g = function(b, E, x, S) {
              var P = Xt["idb://".concat(b, "/").concat(E)];
              if (!P) return [];
              if (!(E = P.queries[x])) return [null, !1, P, null];
              var N = E[(S.query ? S.query.index.name : null) || ""];
              if (!N) return [null, !1, P, null];
              switch (x) {
                case "query":
                  var C = N.find(function(F) {
                    return F.req.limit === S.limit && F.req.values === S.values && Zi(F.req.query.range, S.query.range);
                  });
                  return C ? [C, !0, P, N] : [N.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= S.limit && (!S.values || F.req.values) && ws(F.req.query.range, S.query.range);
                  }), !1, P, N];
                case "count":
                  return C = N.find(function(F) {
                    return Zi(F.req.query.range, S.query.range);
                  }), [C, !!C, P, N];
              }
            }(t, r, "query", c), w = g[0], p = g[1], T = g[2], v = g[3];
            return w && p ? w.obsSet = c.obsSet : (p = o.query(c).then(function(b) {
              var E = b.result;
              if (w && (w.res = E), l) {
                for (var x = 0, S = E.length; x < S; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = ke(E);
              return b;
            }).catch(function(b) {
              return v && w && Me(v, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(w) : (v = [w], (T = T || (Xt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), xs(w, v, d, m), w.promise.then(function(b) {
              return { result: Ji(b.result, c, T?.optimisticOps, o, w, l) };
            });
          } });
        } });
      } };
      function ir(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var At = (Le.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new K.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new K.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(ds), r.stores({}), this._state.autoSchema = !1, r);
      }, Le.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ee.letThrough || this._vip) ? e() : new z(function(r, o) {
          if (t._state.openComplete) return o(new K.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new K.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Le.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, l) {
          return c.level - l.level;
        }), this;
      }, Le.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Le.prototype.open = function() {
        var e = this;
        return Wt(tt, function() {
          return ys(e);
        });
      }, Le.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = cn.indexOf(this);
        if (0 <= t && cn.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new z(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new z(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Le.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new K.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new K.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Le.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new z(function(s, c) {
          function l() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = Ke(function() {
              var m, g, w;
              m = t._deps, g = t.name, w = m.indexedDB, m = m.IDBKeyRange, qr(w) || g === Vn || Mr(w, m).delete(g).catch(A), s();
            }), d.onerror = xt(c), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new K.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(l) : l();
        });
      }, Le.prototype.backendDB = function() {
        return this.idbdb;
      }, Le.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Le.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Le.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Le.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Le.prototype, "tables", { get: function() {
        var e = this;
        return y(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new K.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, ye(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Le.prototype._transaction = function(e, t, r) {
        var o = this, s = ee.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, l, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(g) {
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
            s && l.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!d) throw new K.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(w, p) {
            p(g);
          }) : Ue(g);
        }
        var m = (function g(w, p, T, v, b) {
          return z.resolve().then(function() {
            var E = ee.transless || ee, x = w._createTransaction(p, T, w._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return g(w, p, T, null, b);
              })) : Ue(N);
            }
            var S, P = vt(b);
            return P && un(), E = z.follow(function() {
              var N;
              (S = b.call(x, x)) && (P ? (N = Dt.bind(null, null), S.then(N, N)) : typeof S.next == "function" && typeof S.throw == "function" && (S = Gr(S)));
            }, E), (S && typeof S.then == "function" ? z.resolve(S).then(function(N) {
              return x.active ? N : Ue(new K.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return S;
            })).then(function(N) {
              return v && x._resolve(), x._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return x._reject(N), Ue(N);
            });
          });
        }).bind(null, this, c, l, s, r);
        return s ? s._promise(c, m, "lock") : ee.trans ? Wt(ee.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!D(this._allTables, e)) throw new K.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Le);
      function Le(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Le.dependencies;
        this._options = t = u({ addons: Le.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, l, d, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new z(function(p) {
          g.dbReadyResolve = p;
        }), g.openCanceller = new z(function(p, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = vn(this, "populate", "blocked", "versionchange", "close", { ready: [ae, A] }), this.once = function(p, T) {
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(p).unsubscribe(v), T.apply(r, b);
          };
          return r.on(p, v);
        }, this.on.ready.subscribe = Ve(this.on.ready.subscribe, function(p) {
          return function(T, v) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || z.resolve().then(T), v && p(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && p(T)) : (p(T), b = r, v || p(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, gn(os.prototype, function(S, x) {
          this.db = s;
          var v = Pi, b = null;
          if (x) try {
            v = x();
          } catch (P) {
            b = P;
          }
          var E = S._ctx, x = E.table, S = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: S !== j ? S : null };
        })), this.Table = (c = this, gn(Di.prototype, function(p, T, v) {
          this.db = c, this._tx = v, this.name = p, this.schema = T, this.hook = c._allTables[p] ? c._allTables[p].hook : vn(null, { creating: [se, A], reading: [Z, j], updating: [fe, A], deleting: [re, A] });
        })), this.Transaction = (l = this, gn(us.prototype, function(p, T, v, b, E) {
          var x = this;
          p !== "readonly" && T.forEach(function(S) {
            S = (S = v[S]) === null || S === void 0 ? void 0 : S.yProps, S && (T = T.concat(S.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = l, this.mode = p, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = vn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new z(function(S, P) {
            x._resolve = S, x._reject = P;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(S) {
            var P = x.active;
            return x.active = !1, x.on.error.fire(S), x.parent ? x.parent._reject(S) : P && x.idbtrans && x.idbtrans.abort(), Ue(S);
          });
        })), this.Version = (d = this, gn(ms.prototype, function(p) {
          this.db = d, this._cfg = { version: p, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, gn(Mi.prototype, function(p, T, v) {
          if (this.db = m, this._ctx = { table: p, index: T === ":id" ? null : T, or: v }, this._cmp = this._ascending = be, this._descending = function(b, E) {
            return be(E, b);
          }, this._max = function(b, E) {
            return 0 < be(b, E) ? b : E;
          }, this._min = function(b, E) {
            return be(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new K.MissingAPI();
        })), this.on("versionchange", function(p) {
          0 < p.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(p) {
          !p.newVersion || p.newVersion < p.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(p.oldVersion / 10));
        }), this._maxKey = xn(t.IDBKeyRange), this._createTransaction = function(p, T, v, b) {
          return new r.Transaction(p, T, v, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(p) {
          r.on("blocked").fire(p), cn.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(p);
          });
        }, this.use(bs), this.use(Es), this.use(_s), this.use(vs), this.use(gs);
        var w = new Proxy(this, { get: function(p, T, v) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return ir(r.table(E), w);
          };
          var b = Reflect.get(p, T, v);
          return b instanceof Di ? ir(b, w) : T === "tables" ? b.map(function(E) {
            return ir(E, w);
          }) : T === "_createTransaction" ? function() {
            return ir(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(p) {
          return p(r);
        });
      }
      var or, mt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ts = (zr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, zr.prototype[mt] = function() {
        return this;
      }, zr);
      function zr(e) {
        this._subscribe = e;
      }
      try {
        or = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        or = { indexedDB: null, IDBKeyRange: null };
      }
      function eo(e) {
        var t, r = !1, o = new Ts(function(s) {
          var c = vt(e), l, d = !1, m = {}, g = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, l && l.abort(), p && jt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(w);
          var p = !1, T = function() {
            return Ar(b);
          }, v = function(E) {
            tr(m, E), Vr(g, m) && T();
          }, b = function() {
            var E, x, S;
            !d && or.indexedDB && (m = {}, E = {}, l && l.abort(), l = new AbortController(), S = function(P) {
              var N = sn();
              try {
                c && un();
                var C = Ct(e, P);
                return C = c ? C.finally(Dt) : C;
              } finally {
                N && an();
              }
            }(x = { subscr: E, signal: l.signal, requery: T, querier: e, trans: null }), Promise.resolve(S).then(function(P) {
              r = !0, t = P, d || x.signal.aborted || (m = {}, function(N) {
                for (var C in N) if (D(N, C)) return;
                return 1;
              }(g = E) || p || (jt(wn, v), p = !0), Ar(function() {
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
      var Qt = At;
      function Jr(e) {
        var t = Bt;
        try {
          Bt = !0, jt.storagemutated.fire(e), Wr(e, !0);
        } finally {
          Bt = t;
        }
      }
      X(Qt, u(u({}, He), { delete: function(e) {
        return new Qt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Qt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Qt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (qr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Vn;
            });
          }) : Mr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Ue(new K.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          I(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ee.trans ? Wt(ee.transless, e) : e();
      }, vip: Ur, async: function(e) {
        return function() {
          try {
            var t = Gr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : z.resolve(t);
          } catch (r) {
            return Ue(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Gr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : z.resolve(o);
        } catch (s) {
          return Ue(s);
        }
      }, currentTransaction: { get: function() {
        return ee.trans || null;
      } }, waitFor: function(e, t) {
        return t = z.resolve(typeof e == "function" ? Qt.ignoreTransaction(e) : e).timeout(t || 6e4), ee.trans ? ee.trans.waitFor(t) : t;
      }, Promise: z, debug: { get: function() {
        return ie;
      }, set: function(e) {
        Te(e);
      } }, derive: de, extend: I, props: X, override: Ve, Events: vn, on: jt, liveQuery: eo, extendObservabilitySet: tr, getByKeyPath: H, setByKeyPath: W, delByKeyPath: function(e, t) {
        typeof t == "string" ? W(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          W(e, r, void 0);
        });
      }, shallowClone: le, deepClone: ke, getObjectDiff: Yr, cmp: be, asap: $, minKey: -1 / 0, addons: [], connections: cn, errnames: k, dependencies: or, cache: Xt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Qt.maxKey = xn(Qt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (jt(wn, function(e) {
        Bt || (e = new CustomEvent(Cr, { detail: e }), Bt = !0, dispatchEvent(e), Bt = !1);
      }), addEventListener(Cr, function(e) {
        e = e.detail, Bt || Jr(e);
      }));
      var pn, Bt = !1, to = function() {
      };
      return typeof BroadcastChannel < "u" && ((to = function() {
        (pn = new BroadcastChannel(Cr)).onmessage = function(e) {
          return e.data && Jr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), jt(wn, function(e) {
        Bt || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!At.disableBfCache && e.persisted) {
          ie && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = cn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !At.disableBfCache && e.persisted && (ie && console.debug("Dexie: handling persisted pageshow"), to(), Jr({ all: new Qe(-1 / 0, [[]]) }));
      })), z.rejectionMapper = function(e, t) {
        return !e || e instanceof It || e instanceof TypeError || e instanceof SyntaxError || !e.name || !q[e.name] ? e : (t = new q[e.name](t || e.message, e), "stack" in e && te(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Te(ie), u(At, Object.freeze({ __proto__: null, Dexie: At, liveQuery: eo, Entity: Ii, cmp: be, PropModification: bn, replacePrefix: function(e, t) {
        return new bn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new bn({ add: e });
      }, remove: function(e) {
        return new bn({ remove: e });
      }, default: At, RangeSet: Qe, mergeRanges: On, rangesOverlap: $i }), { default: At }), At;
    });
  }(ra)), ra.exports;
}
var Rd = Dd();
const ia = /* @__PURE__ */ Sd(Rd), mu = Symbol.for("Dexie"), Lo = globalThis[mu] || (globalThis[mu] = ia);
if (ia.semVer !== Lo.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ia.semVer} and ${Lo.semVer}`);
const {
  liveQuery: Xh,
  mergeRanges: Qh,
  rangesOverlap: zh,
  RangeSet: Jh,
  cmp: Zh,
  Entity: ep,
  PropModification: tp,
  replacePrefix: np,
  add: rp,
  remove: ip,
  DexieYProvider: op
} = Lo;
class Kd extends Lo {
  /**
   * @param {ConstructorParameters<DexieConstructor>[0]} databaseName - Name of the database
   * @param {ConstructorParameters<DexieConstructor>[1]} options - Options for Dexie
   */
  constructor(...i) {
    super(...i), this.upgrade();
  }
  async upgrade() {
    if (this.isOpen()) {
      this.close(), yu(this), await this.open();
      return;
    }
    yu(this);
  }
}
function yu(n) {
  return n.version(1).stores({
    [dt]: js
  }), n.version(2).stores({
    [dt]: js,
    [si]: hu
  }), n.version(2.1).stores({
    [dt]: js,
    [si]: hu
  }).upgrade((i) => {
    i.table(si).toCollection().modify((a) => {
      typeof a.file == "string" && (a.file = new Blob([a.file], { type: "text/xml" }));
    });
  }), n;
}
function ge(n, i) {
  return n?.attributes?.find((a) => a.name === i)?.value;
}
function vu(n) {
  const i = `${n.lnClass} ${n.lnInst}`;
  return n.prefix ? `${n.prefix} ${i}` : i;
}
function jc(n) {
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
function jd(n) {
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
function Bd(n) {
  const i = Object.fromEntries(n.entries());
  for (const a of n.keys()) {
    const u = n.getAll(a);
    u.length > 1 && (i[a] = u);
  }
  return i;
}
function gu(n) {
  return Object.entries(n).map(([i, a]) => ({
    name: i,
    value: String(a)
  }));
}
const Fd = (n) => n != null;
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
function Fc(n) {
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
function Md(n) {
  return {
    addRecord: i,
    createRecord: f,
    updateRecord: a,
    deleteRecord: u,
    findRecordById: L,
    findRecordsByTagName: B,
    findChildRecords: de,
    findChildRecordsByTagName: je,
    instantiate: D,
    ensureRelationship: y,
    ensurePrivateElement: O,
    recordExists: h,
    getPath: Ae,
    getParent: Re,
    close: Ve,
    db: n
  };
  async function i(Q) {
    const $ = { ...Q, id: crypto.randomUUID() };
    try {
      return await n.table(dt).add($), $;
    } catch (H) {
      const W = {
        msg: "could not add record",
        db: n.name,
        newRecord: $,
        err: H
      };
      throw console.error(W), new Error(JSON.stringify(W));
    }
  }
  async function a(Q) {
    try {
      if (await n.table(dt).update(Q.id, Q) < 1) {
        const H = { msg: "nothing has been updated", record: Q };
        throw console.error(H), new Error(JSON.stringify(H));
      }
    } catch ($) {
      console.error($);
    }
  }
  async function u(Q) {
    try {
      if (Q.children)
        for (const $ of Q.children) {
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
      if (Q.parent?.id) {
        const $ = await L(Q.parent.id);
        if (!$) throw new Error("parent relationship found but not parent record");
        await I($, Q);
      }
      await n.table(dt).delete(Q.id);
    } catch ($) {
      console.error($);
    }
  }
  async function f(Q, $) {
    try {
      const H = { ...Q, id: crypto.randomUUID() };
      return await n.table(dt).add(H), $ && await y($, H), {
        ...H,
        parent: $ ? { id: $.id, tagName: $.tagName } : null
      };
    } catch (H) {
      const W = {
        msg: "could not add record",
        db: n.name,
        table: Q.tagName,
        recordToCreate: Q,
        err: H
      };
      throw console.error(W), new Error(JSON.stringify(W));
    }
  }
  async function h(Q) {
    return await n.table(dt).where({ id: Q.id }).count() > 0;
  }
  async function y(Q, $) {
    const H = Q.children?.some((le) => le.id === $.id), W = $.parent?.id === Q.id;
    H || await n.table(dt).update(Q.id, {
      children: [...Q.children, { id: $.id, tagName: $.tagName }]
    }), W || ($.parent = {
      id: Q.id,
      tagName: Q.tagName
    }, await n.table(dt).update($.id, { parent: $.parent }));
  }
  async function O(Q) {
    let H = (await te("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((W) => W.parent?.id === Q.id);
    if (!H) {
      const W = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: Nd.default,
        value: "",
        children: []
      };
      H = await f(W), await y(Q, H);
    }
    return H;
  }
  async function I(Q, $) {
    $.parent = null, await a($), Q.children && (Q.children = Q.children.filter((H) => H.id !== $.id), await a(Q));
  }
  async function L(Q) {
    return await n.table(dt).get(Q);
  }
  async function B(Q) {
    return await n.table(dt).where({ tagName: Q }).toArray();
  }
  function D(Q) {
    const $ = X(Q);
    if (!$)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', Q), new Error('record does not have a "uuid" to move to "templateUUID"');
    Q.attributes?.push({ name: "templateUuid", value: $ }), oe(Q);
  }
  function X(Q) {
    const $ = Q.attributes?.find((H) => H.name === "uuid");
    if ($)
      return $.value;
  }
  function oe(Q) {
    Q.attributes || (Q.attributes = []);
    const $ = crypto.randomUUID(), H = Q.attributes.findIndex((le) => le.name === "uuid");
    H >= 0 ? Q.attributes[H].value = $ : Q.attributes.push({ name: "uuid", value: $ });
  }
  async function te(Q, $) {
    return qd(n, Q, $);
  }
  async function de(Q) {
    return Q.children?.length ? await n.table(dt).where({ "parent.id": Q.id }).toArray() : [];
  }
  async function je(Q, $) {
    return (await de(Q)).filter((W) => $.includes(W.tagName));
  }
  async function Ae(Q) {
    const $ = [Q];
    let W = await Re(Q);
    for (; W; )
      $.push(W), W = await Re(W);
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
              const xe = jc(ye);
              return `/${xe.prefix}${xe.lnClass}${xe.lnInst}`;
            case "DO":
            case "DA":
              return `.${ge(ye, "name")}`;
            case "SourceRef":
              const ke = Bc(ye);
              var Pe = `.${ke.input}`;
              return ke.inputInst && (Pe += `(${ke.inputInst})`), ke.pDA && (Pe += `.${ke.pDA}`), Pe;
            case "ControlRef":
              const it = Fc(ye);
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
  async function Re(Q) {
    switch (Q.tagName) {
      case "SourceRef":
        return H(Q, ["LNode"]);
      case "ControlRef":
        return H(Q, ["LNode"]);
      case "DA":
        const W = await $(Q);
        ot(W && W.tagName === "DOType", "Invalid DA parent");
        const le = ge(W, "id");
        return n.table(dt).where("tagName").equals("DO").and((Pe) => ge(Pe, "type") === le).first();
      case "DO":
        const R = await $(Q);
        ot(R && R.tagName === "LNodeType", "Invalid DO parent");
        const ye = ge(R, "id");
        return n.table(dt).where("tagName").equals("LNode").and((Pe) => ge(Pe, "lnType") === ye).first();
      case "LNode":
        return H(Q, ["Function", "SubFunction"]);
      case "SubFunction":
        return H(Q, ["Function"]);
      default:
        return $(Q);
    }
    async function $(W) {
      if (!W.parent?.id) return null;
      if (W.parent.tagName == "Private") {
        const le = await n.table(dt).get(W.parent.id);
        return le ? $(le) : null;
      }
      return n.table(dt).get(W.parent.id);
    }
    async function H(W, le) {
      if (!W.parent?.id) return null;
      const R = Array.isArray(le) ? W.parent && le.includes(W.parent.tagName) : W.parent?.tagName === le, ye = await n.table(dt).get(W.parent.id);
      return ot(ye, "Record has parent relationship but parent not found"), R ? ye : H(ye, le);
    }
  }
  function Ve() {
    n.close();
  }
}
async function qd(n, i, a) {
  try {
    return await n.table(dt).where({ tagName: i }).filter(
      (f) => !!f.attributes?.some((h) => h.name === a.name && h.value === a.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
  return [];
}
const on = /* @__PURE__ */ Td("structure/app", () => {
  const n = Zt(""), i = Ls();
  async function a(u) {
    const f = new Kd(u);
    await f.open(), n.value = u, i.value = Md(f);
  }
  return {
    activeFilename: n,
    sdk: i,
    initApp: a
  };
});
function Ud(n) {
  return ha() ? (Ku(n), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ld = () => {
};
function Bs(n, i, a) {
  var u;
  let f;
  _t(a) ? f = {
    evaluating: a
  } : f = {};
  const {
    lazy: h = !1,
    flush: y = "pre",
    evaluating: O = void 0,
    shallow: I = !0,
    onError: L = (u = globalThis.reportError) != null ? u : Ld
  } = f, B = Ls(!h), D = I ? Ls(i) : Zt(i);
  let X = 0;
  return vf(async (oe) => {
    if (!B.value)
      return;
    X++;
    const te = X;
    let de = !1;
    O && Promise.resolve().then(() => {
      O.value = !0;
    });
    try {
      const je = await n((Ae) => {
        oe(() => {
          O && (O.value = !1), de || Ae();
        });
      });
      te === X && (D.value = je);
    } catch (je) {
      L(je);
    } finally {
      O && te === X && (O.value = !1), de = !0;
    }
  }, { flush: y }), h ? fr(() => (B.value = !0, D.value)) : D;
}
function Vd(n) {
  return "inputName" in n;
}
function $d(n) {
  return "outputName" in n;
}
function bu(n) {
  return "dataName" in n;
}
function _u(n) {
  const i = ge(n, "varName"), a = ge(n, "dataName"), u = ge(n, "inputName"), f = ge(n, "outputName");
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
  if (f)
    return {
      varName: i,
      outputName: f
    };
  throw new Error(
    "Invalid variable record: must have either dataName, inputName, or outputName attribute"
  );
}
function Hd(n, i, a) {
  return {
    id: n.id,
    name: ge(n, "name") ?? "",
    fileReference: ge(n, "fileReference"),
    inputVars: i.map((u) => _u(u)),
    outputVars: a.map((u) => _u(u))
  };
}
function Wd(n, i, a) {
  return n.map((u) => {
    const f = u.children.filter((y) => y.tagName === "InputVar").map((y) => i.find((O) => O.id === y.id)).filter((y) => !!y), h = u.children.filter((y) => y.tagName === "OutputVar").map((y) => a.find((O) => O.id === y.id)).filter((y) => !!y);
    return Hd(u, f, h);
  });
}
async function wu() {
  const n = on();
  ot(n.sdk, "SDK not initialized");
  const i = await n.sdk.db.table(dt).where("tagName").equals("BehaviorDescription").or("tagName").equals("InputVar").or("tagName").equals("OutputVar").toArray().then((a) => {
    const u = a.filter((y) => y.tagName === "BehaviorDescription"), f = a.filter((y) => y.tagName === "InputVar"), h = a.filter((y) => y.tagName === "OutputVar");
    return [u, f, h];
  });
  return Wd(...i);
}
async function Gd(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = i.sdk.db.table(dt).where("tagName").equals("LNodeType");
  if (n) {
    const u = await a.and((f) => ge(f, "id") === n).first();
    if (!u) throw new Error("LNodeType not found for selected LNode");
    return u;
  }
  return a.toArray();
}
async function Yd(n) {
  const i = on();
  return ot(i.sdk, "SDK not initialized"), i.sdk.db.table(dt).where("tagName").equals("DOType").and((a) => n.includes(ge(a, "id") ?? "")).toArray();
}
async function Xd() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("DA");
}
async function Qd() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("SourceRef");
}
async function zd() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("ControlRef");
}
function Jd() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.findRecordsByTagName("LNode");
}
const Zd = { class: "flex flex-wrap gap-3" }, eh = { class: "modal-box max-w-[34rem]" }, th = { class: "text-lg font-bold" }, nh = { class: "grid grid-cols-2 gap-2" }, rh = { class: "flex flex-col gap-2 *:flex *:items-center *:gap-1.5" }, ih = ["value"], oh = { class: "grid grid-cols-2 items-center gap-2" }, sh = ["value"], ah = {
  key: 0,
  class: "grid grid-cols-2 items-center gap-2"
}, uh = ["aria-disabled"], ch = {
  value: "",
  disabled: "",
  selected: ""
}, lh = ["value"], fh = {
  key: 1,
  class: "grid grid-cols-2 items-center gap-2"
}, dh = ["aria-disabled"], hh = {
  value: "",
  disabled: "",
  selected: ""
}, ph = ["value"], mh = {
  key: 2,
  class: "grid grid-cols-2 items-center gap-2"
}, yh = ["aria-disabled"], vh = {
  value: "",
  disabled: "",
  selected: ""
}, gh = ["value"], bh = { class: "grid grid-cols-2 items-center gap-2" }, _h = ["defaultValue"], wh = /* @__PURE__ */ Oo({
  __name: "add-behavior-variable",
  props: {
    type: {},
    onSubmit: { type: Function },
    behaviorDescription: {}
  },
  async setup(n) {
    let i, a;
    const u = n, f = on(), h = Zt(null), y = ([i, a] = go(() => Jd()), i = await i, a(), i), O = ([i, a] = go(async () => Promise.all(
      y.map(async ($) => {
        const H = jc($);
        let W = await f.sdk.getParent($);
        for (; W && W.tagName !== "Function"; )
          W = await f.sdk.getParent(W);
        return ot(
          W?.tagName == "Function",
          `LNode '${vu(H)}' has no Function parent`
        ), {
          label: `${ge(W, "name")}/${vu(H)}`,
          id: H.id
        };
      })
    )), i = await i, a(), i), I = Zt(
      u.type === "input" ? "sourceRef" : "controlRef"
    ), L = Zt(""), B = Bs(async () => {
      const $ = L.value;
      let H = await Qd();
      if ($) {
        const W = [], le = await Promise.all(
          H.map((R) => f.sdk.getParent(R))
        );
        for (let [R, ye] of le.entries())
          ye && ye.id === $ && W.push(H[R]);
        H = W;
      }
      return H.map(Bc);
    }, []), D = Zt(""), X = fr(() => {
      const $ = B.value.find((H) => H.id === D.value);
      return $ ? `${$.input}_${$.inputInst}_${$.pDA}` : "";
    }), oe = Bs(async () => {
      const $ = L.value;
      let H = await zd();
      if ($) {
        const W = [], le = await Promise.all(
          H.map((R) => f.sdk.getParent(R))
        );
        for (let [R, ye] of le.entries())
          ye && ye.id === $ && W.push(H[R]);
        H = W;
      }
      return H.map(Fc);
    }, []), te = Zt(""), de = fr(() => {
      const $ = oe.value.find((H) => H.id === te.value);
      return $ ? `${$.output}_${$.outputInst}_${$.pDO}` : "";
    }), je = Bs(async () => {
      const $ = y.find((Be) => Be.id === L.value), H = await Gd(ge($, "lnType")), W = Array.isArray(H) ? H : [H], le = await Promise.all(
        W.map((Be) => f.sdk?.findChildRecordsByTagName(Be, ["DO"])) ?? []
      ).then((Be) => Be.flat()), R = le.map((Be) => ge(Be, "type")).filter(Fd), ye = await Yd(R), Pe = ye.map((Be) => Be.id);
      let xe = await Xd();
      xe = xe.filter(
        (Be) => Pe.some((Ce) => Be.parent?.id === Ce)
      );
      function ke({ parent: Be }) {
        const Ce = ge(
          ye.find(({ id: ve }) => ve === Be?.id),
          "id"
        );
        return le.find((ve) => ge(ve, "type") === Ce);
      }
      function it(Be) {
        const Ce = ke(Be);
        if (!(!Ce || !Ce.parent))
          return W.find((ve) => ve.id === Ce.parent.id);
      }
      return xe.map((Be) => ({
        ...jd(Be),
        doName: ge(ke(Be), "name"),
        lNodeType: ge(it(Be), "id")
      }));
    }, []), Ae = Zt(""), Re = fr(() => {
      const $ = je.value.find((H) => H.id === Ae.value);
      return $ ? `${$.doName}_${$.name}` : "";
    });
    function Ve($) {
      return [
        ...$.inputVars.map((H) => H.varName),
        ...$.outputVars.map((H) => H.varName)
      ].flat();
    }
    async function Q($) {
      const H = $.target, W = new FormData(H), le = Bd(W);
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
        const ye = le.sourceRef || le.controlRef, Pe = await f.sdk.findRecordById(String(ye));
        ot(Pe, "SourceRef/ControlRef not found");
        const ke = (await f.sdk.getPath(Pe)).joinNames(), it = ge(Pe, "uuid");
        R[u.type == "input" ? "inputName" : "outputName"] = ke, R[u.type == "input" ? "inputUuid" : "outputUuid"] = it;
      }
      if (le.type === "dataAttribute") {
        const ye = await f.sdk.findRecordById(String(le.dataAttribute));
        ot(ye, "DataAttribute not found"), ot(ye.parent, "DataAttribute has no parent");
        const Pe = await f.sdk.findRecordById(ye.parent.id), xe = ge(Pe, "id");
        ot(xe, "DO Type not found");
        const ke = await f.sdk?.db.table(dt).where("tagName").equals("DO").and((Ce) => ge(Ce, "type") === xe).first();
        ot(ke, "DO not found");
        const it = y.find((Ce) => Ce.id === le.lNode);
        R.lnodeUuid = ge(it, "uuid"), R.daName = ge(ye, "name"), R.doName = ge(ke, "name");
        const Be = await f.sdk.getPath(ye);
        R.dataName = Be.joinNames();
      }
      await u.onSubmit(R), H.reset(), L.value = "", D.value = "", te.value = "", Ae.value = "", I.value = u.type === "input" ? "sourceRef" : "controlRef";
    }
    return ($, H) => (Xe(), Ze("div", Zd, [
      _e("button", {
        type: "button",
        class: "btn btn-sm btn-primary btn-soft",
        onClick: H[0] || (H[0] = //@ts-ignore
        (...W) => h.value?.showModal && h.value?.showModal(...W))
      }, [
        Gl($.$slots, "default", {}, void 0)
      ]),
      _e("dialog", {
        ref_key: "dialog",
        ref: h,
        class: "modal text-neutral-700"
      }, [
        _e("div", eh, [
          _e("h3", th, "Add " + yt(u.type) + " variable", 1),
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
            onSubmit: di(Q, ["stop"]),
            class: "flex flex-col gap-4 mt-4"
          }, [
            _e("fieldset", null, [
              _e("div", nh, [
                H[9] || (H[9] = _e("legend", null, "Type", -1)),
                _e("div", rh, [
                  _e("label", null, [
                    ri(_e("input", {
                      type: "radio",
                      name: "type",
                      class: "radio radio-neutral",
                      "onUpdate:modelValue": H[1] || (H[1] = (W) => I.value = W),
                      value: u.type === "input" ? "sourceRef" : "controlRef",
                      checked: ""
                    }, null, 8, ih), [
                      [ou, I.value]
                    ]),
                    mn(" " + yt(u.type === "input" ? "SourceRef" : "ControlRef"), 1)
                  ]),
                  _e("label", null, [
                    ri(_e("input", {
                      type: "radio",
                      name: "type",
                      class: "radio radio-neutral",
                      "onUpdate:modelValue": H[2] || (H[2] = (W) => I.value = W),
                      value: "dataAttribute"
                    }, null, 512), [
                      [ou, I.value]
                    ]),
                    H[8] || (H[8] = mn(" Data Attribute "))
                  ])
                ])
              ])
            ]),
            _e("div", oh, [
              H[11] || (H[11] = _e("label", { for: "variable-function" }, "Function/LNode", -1)),
              ri(_e("select", {
                id: "variable-function",
                name: "lNode",
                class: "select select-bordered col-start-2",
                required: "",
                "onUpdate:modelValue": H[3] || (H[3] = (W) => L.value = W)
              }, [
                H[10] || (H[10] = _e("option", {
                  value: "",
                  disabled: "",
                  selected: ""
                }, "Choose an option", -1)),
                (Xe(!0), Ze(bt, null, hi(Ft(O), (W) => (Xe(), Ze("option", {
                  key: W.id,
                  value: W.id
                }, yt(W.label), 9, sh))), 128))
              ], 512), [
                [io, L.value]
              ])
            ]),
            I.value === "sourceRef" ? (Xe(), Ze("div", ah, [
              H[12] || (H[12] = _e("label", { for: "source-ref" }, "SourceRef", -1)),
              ri((Xe(), Ze("select", {
                id: "source-ref",
                name: "sourceRef",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Ft(B).length === 0,
                key: L.value,
                "onUpdate:modelValue": H[4] || (H[4] = (W) => D.value = W)
              }, [
                _e("option", ch, yt(Ft(B).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (Xe(!0), Ze(bt, null, hi(Ft(B), (W) => (Xe(), Ze("option", {
                  key: W.id,
                  value: W.id
                }, yt(W.input) + "(" + yt(W.inputInst) + ")." + yt(W.pDA), 9, lh))), 128))
              ], 8, uh)), [
                [io, D.value]
              ])
            ])) : Sn("", !0),
            I.value === "controlRef" ? (Xe(), Ze("div", fh, [
              H[13] || (H[13] = _e("label", { for: "control-ref" }, "ControlRef", -1)),
              ri((Xe(), Ze("select", {
                id: "control-ref",
                name: "controlRef",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Ft(oe).length === 0,
                key: L.value,
                "onUpdate:modelValue": H[5] || (H[5] = (W) => te.value = W)
              }, [
                _e("option", hh, yt(Ft(oe).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (Xe(!0), Ze(bt, null, hi(Ft(oe), (W) => (Xe(), Ze("option", {
                  key: W.id,
                  value: W.id
                }, yt(W.output) + "(" + yt(W.outputInst) + ") ", 9, ph))), 128))
              ], 8, dh)), [
                [io, te.value]
              ])
            ])) : Sn("", !0),
            I.value === "dataAttribute" ? (Xe(), Ze("div", mh, [
              H[14] || (H[14] = _e("label", { for: "data-attribute" }, "Data Attribute", -1)),
              ri((Xe(), Ze("select", {
                id: "data-attribute",
                name: "dataAttribute",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Ft(je).length === 0,
                key: L.value,
                "onUpdate:modelValue": H[6] || (H[6] = (W) => Ae.value = W)
              }, [
                _e("option", vh, yt(Ft(je).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (Xe(!0), Ze(bt, null, hi(Ft(je), (W) => (Xe(), Ze("option", {
                  key: W.id,
                  value: W.id
                }, yt(W.lNodeType) + "." + yt(W.doName) + "." + yt(W.name), 9, gh))), 128))
              ], 8, yh)), [
                [io, Ae.value]
              ])
            ])) : Sn("", !0),
            _e("div", bh, [
              H[15] || (H[15] = _e("label", { for: "input-variable-name" }, "Name", -1)),
              _e("input", {
                id: "input-variable-name",
                name: "name",
                placeholder: "Name",
                class: "input input-bordered col-start-2",
                required: "",
                defaultValue: I.value === "sourceRef" ? X.value : I.value === "controlRef" ? de.value : Re.value,
                onInput: H[7] || (H[7] = (W) => {
                  const le = W.target;
                  le.validationMessage && le.setCustomValidity("");
                })
              }, null, 40, _h)
            ]),
            H[16] || (H[16] = _e("div", { class: "modal-action" }, [
              _e("button", { class: "btn btn-primary" }, "Add Variable")
            ], -1))
          ], 32)
        ])
      ], 512)
    ]));
  }
}), xh = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [u, f] of i)
    a[u] = f;
  return a;
}, xu = /* @__PURE__ */ xh(wh, [["__scopeId", "data-v-40016595"]]);
var Eh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Th(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Do = { exports: {} }, Oh = Do.exports, Eu;
function Sh() {
  return Eu || (Eu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(Oh, function() {
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
      function f(e, t, r) {
        for (var o, s = 0, c = t.length; s < c; s++) !o && s in t || ((o = o || Array.prototype.slice.call(t, 0, s))[s] = t[s]);
        return e.concat(o || Array.prototype.slice.call(t));
      }
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Eh, y = Object.keys, O = Array.isArray;
      function I(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var L = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function D(e, t) {
        return B.call(e, t);
      }
      function X(e, t) {
        typeof t == "function" && (t = t(L(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          te(e, r, t[r]);
        });
      }
      var oe = Object.defineProperty;
      function te(e, t, r, o) {
        oe(e, t, I(r && D(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function de(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), te(e.prototype, "constructor", e), { extend: X.bind(null, e.prototype) };
        } };
      }
      var je = Object.getOwnPropertyDescriptor, Ae = [].slice;
      function Re(e, t, r) {
        return Ae.call(e, t, r);
      }
      function Ve(e, t) {
        return t(e);
      }
      function Q(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function $(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function H(e, t) {
        if (typeof t == "string" && D(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = H(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var d = e[t.substr(0, l)];
          return d == null ? void 0 : H(d, t.substr(l + 1));
        }
      }
      function W(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          Q(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) W(e, t[o], r[o]);
        } else {
          var c, l, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (l = t.substr(d + 1)) === "" ? r === void 0 ? O(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : W(d = !(d = e[c]) || !D(e, c) ? e[c] = {} : d, l, r)) : r === void 0 ? O(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function le(e) {
        var t, r = {};
        for (t in e) D(e, t) && (r[t] = e[t]);
        return r;
      }
      var R = [].concat;
      function ye(e) {
        return R.apply([], e);
      }
      var De = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(ye([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), Pe = new Set(De.map(function(e) {
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
            var l, d = L(r);
            for (l in o = d === Object.prototype ? {} : Object.create(d), xe.set(r, o), r) D(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), xe = null, e;
      }
      var it = {}.toString;
      function Be(e) {
        return it.call(e).slice(8, -1);
      }
      var Ce = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ve = typeof Ce == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ce]) && t.apply(e);
      } : function() {
        return null;
      };
      function Me(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var pt = {};
      function st(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (O(e)) return e.slice();
          if (this === pt && typeof e == "string") return [e];
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
      var vt = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Se = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], mt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Se), Pt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function It(e, t) {
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
      de(It).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), de(tn).from(It), de(wt).from(It);
      var k = mt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = It, K = mt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Pt[t] || r, this.inner = null);
        }
        return de(o).from(_), e[t] = o, e;
      }, {});
      K.Syntax = SyntaxError, K.Type = TypeError, K.Range = RangeError;
      var q = Se.reduce(function(e, t) {
        return e[t + "Error"] = K[t], e;
      }, {}), He = mt.reduce(function(e, t) {
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
          I(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ne(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? ne(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : I(o, r);
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
      He.ModifyError = tn, He.DexieError = It, He.BulkError = wt;
      var ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Te(e) {
        ie = e;
      }
      var me = {}, Oe = 100, De = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, L(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, L(t), e];
      }(), Se = De[0], mt = De[1], De = De[2], mt = mt && mt.then, $e = Se && Se.constructor, We = !!De, ct = function(e, t) {
        nn.push([e, t]), Ot && (queueMicrotask(ts), Ot = !1);
      }, gt = !0, Ot = !0, lt = [], $t = [], Cn = j, tt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: A, pgp: !1, env: {}, finalize: A }, ee = tt, nn = [], Ht = 0, Bn = [];
      function z(e) {
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
                var l = o._lib && sn();
                c && typeof c.then == "function" ? r(o, function(d, m) {
                  c instanceof z ? c._then(d, m) : c.then(d, m);
                }) : (o._state = !0, o._value = c, Oi(o)), l && an();
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
          var c = this, l = !e.global && (e !== ee || t !== Un), d = l && !Dt(), m = new z(function(g, w) {
            Or(c, new Ti(Ai(o, e, l, d), Ai(s, e, l, d), g, w, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = me, r;
      }, set: function(e) {
        te(this, "then", e && e.prototype === me ? Er : { get: function() {
          return e;
        }, set: Er.set });
      } };
      function Ti(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function Tr(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && sn(), t = Cn(t), e._state = !1, e._value = t, o = e, lt.some(function(s) {
          return s._value === o._value;
        }) || lt.push(o), Oi(e), r && an());
      }
      function Oi(e) {
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
          ++t.psd.ref, ++Ht, ct(es, [r, e, t]);
        } else e._listeners.push(t);
      }
      function es(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = ie && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var l = lt.length; l; ) if (lt[--l]._value === c._value) return lt.splice(l, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Ht == 0 && Sr(), --r.psd.ref || r.psd.finalize();
        }
      }
      function ts() {
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
        for (var t = Bn.slice(0), r = t.length; r; ) t[--r]();
      }
      function Fn(e) {
        return new z(me, !1, e);
      }
      function Ke(e, t) {
        var r = ee;
        return function() {
          var o = sn(), s = ee;
          try {
            return Rt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Rt(s, !1), o && an();
          }
        };
      }
      X(z.prototype, { then: Er, _then: function(e, t) {
        Or(this, new Ti(null, null, e, t, ee));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var t = e, r = arguments[1];
        return typeof t == "function" ? this.then(null, function(o) {
          return (o instanceof t ? r : Fn)(o);
        }) : this.then(null, function(o) {
          return (o && o.name === t ? r : Fn)(o);
        });
      }, finally: function(e) {
        return this.then(function(t) {
          return z.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return z.resolve(e()).then(function() {
            return Fn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new z(function(o, s) {
          var c = setTimeout(function() {
            return s(new K.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && te(z.prototype, Symbol.toStringTag, "Dexie.Promise"), tt.env = Si(), X(z, { all: function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return z.resolve(s).then(function(l) {
              e[c] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof z ? e : e && typeof e.then == "function" ? new z(function(t, r) {
          e.then(t, r);
        }) : new z(me, !0, e);
      }, reject: Fn, race: function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t, r) {
          e.map(function(o) {
            return z.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return ee;
      }, set: function(e) {
        return ee = e;
      } }, totalEchoes: { get: function() {
        return Un;
      } }, newPSD: Ct, usePSD: Wt, scheduler: { get: function() {
        return ct;
      }, set: function(e) {
        ct = e;
      } }, rejectionMapper: { get: function() {
        return Cn;
      }, set: function(e) {
        Cn = e;
      } }, follow: function(e, t) {
        return new z(function(r, o) {
          return Ct(function(s, c) {
            var l = ee;
            l.unhandleds = [], l.onunhandled = c, l.finalize = ne(function() {
              var d, m = this;
              d = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Bn.push(function g() {
                d(), Bn.splice(Bn.indexOf(g), 1);
              }), ++Ht, ct(function() {
                --Ht == 0 && Sr();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), $e && ($e.allSettled && te(z, "allSettled", function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return z.resolve(s).then(function(l) {
              return o[c] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[c] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), $e.any && typeof AggregateError < "u" && te(z, "any", function() {
        var e = st.apply(null, arguments).map(Ln);
        return new z(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, l) {
            return z.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              s[l] = d, --o || r(new AggregateError(s));
            });
          });
        });
      }), $e.withResolvers && (z.withResolvers = $e.withResolvers));
      var Ge = { awaits: 0, echoes: 0, id: 0 }, ns = 0, Mn = [], qn = 0, Un = 0, rs = 0;
      function Ct(e, t, r, o) {
        var s = ee, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++rs, tt.env, c.env = We ? { Promise: z, PromiseProp: { value: z, configurable: !0, writable: !0 }, all: z.all, race: z.race, allSettled: z.allSettled, any: z.any, resolve: z.resolve, reject: z.reject } : {}, t && I(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Wt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function un() {
        return Ge.id || (Ge.id = ++ns), ++Ge.awaits, Ge.echoes += Oe, Ge.id;
      }
      function Dt() {
        return !!Ge.awaits && (--Ge.awaits == 0 && (Ge.id = 0), Ge.echoes = Ge.awaits * Oe, !0);
      }
      function Ln(e) {
        return Ge.echoes && e && e.constructor === $e ? (un(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), Ue(t);
        })) : e;
      }
      function is() {
        var e = Mn[Mn.length - 1];
        Mn.pop(), Rt(e, !1);
      }
      function Rt(e, t) {
        var r, o = ee;
        (t ? !Ge.echoes || qn++ && e === ee : !qn || --qn && e === ee) || queueMicrotask(t ? (function(s) {
          ++Un, Ge.echoes && --Ge.echoes != 0 || (Ge.echoes = Ge.awaits = Ge.id = 0), Mn.push(ee), Rt(s, !0);
        }).bind(null, e) : is), e !== ee && (ee = e, o === tt && (tt.env = Si()), We && (r = tt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Si() {
        var e = h.Promise;
        return We ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Wt(e, t, r, o, s) {
        var c = ee;
        try {
          return Rt(e, !0), t(r, o, s);
        } finally {
          Rt(c, !1);
        }
      }
      function Ai(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = ee;
          r && un(), Rt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Rt(s, !1), o && queueMicrotask(Dt);
          }
        };
      }
      function Ar(e) {
        Promise === $e && Ge.echoes === 0 ? qn === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + mt).indexOf("[native code]") === -1 && (un = Dt = A);
      var Ue = z.reject, Gt = "￿", St = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ki = "String expected.", cn = [], Vn = "__dbnames", kr = "readonly", Pr = "readwrite";
      function Yt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Pi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function $n(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = ke(t))[e], t;
        };
      }
      function Ii() {
        throw K.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function be(e, t) {
        try {
          var r = Ni(e), o = Ni(t);
          if (r !== o) return r === "Array" ? 1 : o === "Array" ? -1 : r === "binary" ? 1 : o === "binary" ? -1 : r === "string" ? 1 : o === "string" ? -1 : r === "Date" ? 1 : o !== "Date" ? NaN : -1;
          switch (r) {
            case "number":
            case "Date":
            case "string":
              return t < e ? 1 : e < t ? -1 : 0;
            case "binary":
              return function(s, c) {
                for (var l = s.length, d = c.length, m = l < d ? l : d, g = 0; g < m; ++g) if (s[g] !== c[g]) return s[g] < c[g] ? -1 : 1;
                return l === d ? 0 : l < d ? -1 : 1;
              }(Ci(e), Ci(t));
            case "Array":
              return function(s, c) {
                for (var l = s.length, d = c.length, m = l < d ? l : d, g = 0; g < m; ++g) {
                  var w = be(s[g], c[g]);
                  if (w !== 0) return w;
                }
                return l === d ? 0 : l < d ? -1 : 1;
              }(e, t);
          }
        } catch {
        }
        return NaN;
      }
      function Ni(e) {
        var t = typeof e;
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = Be(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Ci(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function Hn(e, t, r) {
        var o = e.schema.yProps;
        return o ? (t && 0 < r.numFailures && (t = t.filter(function(s, c) {
          return !r.failures[c];
        })), Promise.all(o.map(function(s) {
          return s = s.updatesTable, t ? e.db.table(s).where("k").anyOf(t).delete() : e.db.table(s).clear();
        })).then(function() {
          return r;
        })) : r;
      }
      var Di = (Ie.prototype._trans = function(e, t, r) {
        var o = this._tx || ee.trans, s = this.name, c = ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(g, w, p) {
          if (!p.schema[s]) throw new K.NotFound("Table " + s + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = sn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === ee.trans ? o._promise(e, l, r) : Ct(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: ee.transless || ee }) : function g(w, p, T, v) {
            if (w.idbdb && (w._state.openComplete || ee.letThrough || w._vip)) {
              var b = w._createTransaction(p, T, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return g(w, p, T, v);
                })) : Ue(E);
              }
              return b._promise(p, function(E, x) {
                return Ct(function() {
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
            if (w._state.openComplete) return Ue(new K.DatabaseClosed(w._state.dbOpenError));
            if (!w._state.isBeingOpened) {
              if (!w._state.autoOpen) return Ue(new K.DatabaseClosed());
              w.open().catch(A);
            }
            return w._state.dbReadyPromise.then(function() {
              return g(w, p, T, v);
            });
          }(this.db, e, [this.name], l);
          return c && (m._consoleTask = c, m = m.catch(function(g) {
            return console.trace(g), Ue(g);
          })), m;
        } finally {
          d && an();
        }
      }, Ie.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ue(new K.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ie.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (O(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
        var t = y(e);
        if (t.length === 1) return this.where(t[0]).equals(e[t[0]]);
        var r = this.schema.indexes.concat(this.schema.primKey).filter(function(d) {
          if (d.compound && t.every(function(g) {
            return 0 <= d.keyPath.indexOf(g);
          })) {
            for (var m = 0; m < t.length; ++m) if (t.indexOf(d.keyPath[m]) === -1) return !1;
            return !0;
          }
          return !1;
        }).sort(function(d, m) {
          return d.keyPath.length - m.keyPath.length;
        })[0];
        if (r && this.db._maxKey !== Gt) {
          var c = r.keyPath.slice(0, t.length);
          return this.where(c).equals(c.map(function(m) {
            return e[m];
          }));
        }
        !r && ie && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(d, m) {
          return be(d, m) === 0;
        }
        var l = t.reduce(function(p, m) {
          var g = p[0], w = p[1], p = o[m], T = e[m];
          return [g || p, g || !p ? Yt(w, p && p.multi ? function(v) {
            return v = H(v, m), O(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, H(v, m));
          }) : w];
        }, [null, null]), c = l[0], l = l[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
      }, Ie.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, Ie.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, Ie.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, Ie.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, Ie.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, Ie.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, Ie.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, Ie.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, O(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ie.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ie.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Ii && (function(m, g) {
          if (typeof g != "function" && g !== null) throw new TypeError("Class extends value " + String(g) + " is not a constructor or null");
          function w() {
            this.constructor = m;
          }
          a(m, g), m.prototype = g === null ? Object.create(g) : (w.prototype = g.prototype, new w());
        }(s, t = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return r;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return o;
        }, e = s);
        for (var c = /* @__PURE__ */ new Set(), l = e.prototype; l; l = L(l)) Object.getOwnPropertyNames(l).forEach(function(m) {
          return c.add(m);
        });
        function d(m) {
          if (!m) return m;
          var g, w = Object.create(e.prototype);
          for (g in m) if (!c.has(g)) try {
            w[g] = m[g];
          } catch {
          }
          return w;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = d, this.hook("reading", d), e;
      }, Ie.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          I(this, e);
        });
      }, Ie.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = $n(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(d) {
          return d.numFailures ? z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ie.prototype.update = function(e, t) {
        return typeof e != "object" || O(e) ? this.where(":id").equals(e).modify(t) : (e = H(e, this.schema.primKey.keyPath), e === void 0 ? Ue(new K.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ie.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = $n(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? z.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            W(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ie.prototype.delete = function(e) {
        var t = this;
        return this._trans("readwrite", function(r) {
          return t.core.mutate({ trans: r, type: "delete", keys: [e] }).then(function(o) {
            return Hn(t, [e], o);
          }).then(function(o) {
            return o.numFailures ? z.reject(o.failures[0]) : void 0;
          });
        });
      }, Ie.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Pi }).then(function(r) {
            return Hn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? z.reject(t.failures[0]) : void 0;
        });
      }, Ie.prototype.bulkGet = function(e) {
        var t = this;
        return this._trans("readonly", function(r) {
          return t.core.getMany({ keys: e, trans: r }).then(function(o) {
            return o.map(function(s) {
              return t.hook.reading.fire(s);
            });
          });
        });
      }, Ie.prototype.bulkAdd = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map($n(g)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ie.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map($n(g)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ie.prototype.bulkUpdate = function(e) {
        var t = this, r = this.core, o = e.map(function(l) {
          return l.key;
        }), s = e.map(function(l) {
          return l.changes;
        }), c = [];
        return this._trans("readwrite", function(l) {
          return r.getMany({ trans: l, keys: o, cache: "clone" }).then(function(d) {
            var m = [], g = [];
            e.forEach(function(p, T) {
              var v = p.key, b = p.changes, E = d[T];
              if (E) {
                for (var x = 0, S = Object.keys(b); x < S.length; x++) {
                  var P = S[x], N = b[P];
                  if (P === t.schema.primKey.keyPath) {
                    if (be(N, v) !== 0) throw new K.Constraint("Cannot update primary key in bulkUpdate()");
                  } else W(E, P, N);
                }
                c.push(T), m.push(v), g.push(E);
              }
            });
            var w = m.length;
            return r.mutate({ trans: l, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(p) {
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
      }, Ie.prototype.bulkDelete = function(e) {
        var t = this, r = e.length;
        return this._trans("readwrite", function(o) {
          return t.core.mutate({ trans: o, type: "delete", keys: e }).then(function(s) {
            return Hn(t, e, s);
          });
        }).then(function(l) {
          var s = l.numFailures, c = l.lastResult, l = l.failures;
          if (s === 0) return c;
          throw new wt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), l);
        });
      }, Ie);
      function Ie() {
      }
      function vn(e) {
        function t(l, d) {
          if (d) {
            for (var m = arguments.length, g = new Array(m - 1); --m; ) g[m - 1] = arguments[m];
            return r[l].subscribe.apply(null, g), e;
          }
          if (typeof l == "string") return r[l];
        }
        var r = {};
        t.addEventType = c;
        for (var o = 1, s = arguments.length; o < s; ++o) c(arguments[o]);
        return t;
        function c(l, d, m) {
          if (typeof l != "object") {
            var g;
            d = d || pe;
            var w = { subscribers: [], fire: m = m || A, subscribe: function(p) {
              w.subscribers.indexOf(p) === -1 && (w.subscribers.push(p), w.fire = d(w.fire, p));
            }, unsubscribe: function(p) {
              w.subscribers = w.subscribers.filter(function(T) {
                return T !== p;
              }), w.fire = w.subscribers.reduce(d, m);
            } };
            return r[l] = t[l] = w;
          }
          y(g = l).forEach(function(p) {
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
      function gn(e, t) {
        return de(t).from({ prototype: e }), t;
      }
      function ln(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Ir(e, t) {
        e.filter = Yt(e.filter, t);
      }
      function Nr(e, t, r) {
        var o = e.replayFilter;
        e.replayFilter = o ? function() {
          return Yt(o(), t());
        } : t, e.justLimit = r && !o;
      }
      function Wn(e, t) {
        if (e.isPrimKey) return t.primaryKey;
        var r = t.getIndexByKeyPath(e.index);
        if (!r) throw new K.Schema("KeyPath " + e.index + " on object store " + t.name + " is not indexed");
        return r;
      }
      function Ri(e, t, r) {
        var o = Wn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Gn(e, t, r, o) {
        var s = e.replayFilter ? Yt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, l = function(d, m, g) {
            var w, p;
            s && !s(m, g, function(T) {
              return m.stop(T);
            }, function(T) {
              return m.fail(T);
            }) || ((p = "" + (w = m.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(w)), D(c, p) || (c[p] = !0, t(d, m, g)));
          };
          return Promise.all([e.or._iterate(l, r), Ki(Ri(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return Ki(Ri(e, o, r), Yt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ki(e, t, r, o) {
        var s = Ke(o ? function(c, l, d) {
          return r(o(c), l, d);
        } : r);
        return e.then(function(c) {
          if (c) return c.start(function() {
            var l = function() {
              return c.continue();
            };
            t && !t(c, function(d) {
              return l = d;
            }, function(d) {
              c.stop(d), l = A;
            }, function(d) {
              c.fail(d), l = A;
            }) || s(c.value, c, function(d) {
              return l = d;
            }), l();
          });
        });
      }
      var bn = (ji.prototype.execute = function(e) {
        var t = this["@@propmod"];
        if (t.add !== void 0) {
          var r = t.add;
          if (O(r)) return f(f([], O(e) ? e : [], !0), r).sort();
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
      }, ji);
      function ji(e) {
        this["@@propmod"] = e;
      }
      var os = (Ee.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ue.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Ee.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Ee.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Yt(t.algorithm, e);
      }, Ee.prototype._iterate = function(e, t) {
        return Gn(this._ctx, e, t, this._ctx.table.core);
      }, Ee.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && I(r, e), t._ctx = r, t;
      }, Ee.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ee.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Gn(t, e, r, t.table.core);
        });
      }, Ee.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (ln(o, !0)) return s.count({ trans: r, query: { index: Wn(o, s.schema), range: o.range } }).then(function(l) {
            return Math.min(l, o.limit);
          });
          var c = 0;
          return Gn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, Ee.prototype.sortBy = function(e, t) {
        var r = e.split(".").reverse(), o = r[0], s = r.length - 1;
        function c(m, g) {
          return g ? c(m[r[g]], g - 1) : m[o];
        }
        var l = this._ctx.dir === "next" ? 1 : -1;
        function d(m, g) {
          return be(c(m, s), c(g, s)) * l;
        }
        return this.toArray(function(m) {
          return m.sort(d);
        }).then(t);
      }, Ee.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && ln(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = Wn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var l = [];
          return Gn(o, function(d) {
            return l.push(d);
          }, r, o.table.core).then(function() {
            return l;
          });
        }, e);
      }, Ee.prototype.offset = function(e) {
        var t = this._ctx;
        return e <= 0 || (t.offset += e, ln(t) ? Nr(t, function() {
          var r = e;
          return function(o, s) {
            return r === 0 || (r === 1 ? --r : s(function() {
              o.advance(r), r = 0;
            }), !1);
          };
        }) : Nr(t, function() {
          var r = e;
          return function() {
            return --r < 0;
          };
        })), this;
      }, Ee.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Nr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, Ee.prototype.until = function(e, t) {
        return Ir(this._ctx, function(r, o, s) {
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
        return Ir(this._ctx, function(r) {
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
          var s = Wn(t, t.table.core.schema);
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
        return Ir(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = D(t, o);
          return t[o] = !0, !s;
        }), this;
      }, Ee.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, l;
          l = typeof e == "function" ? e : (s = y(e), c = s.length, function(S) {
            for (var P = !1, N = 0; N < c; ++N) {
              var C = s[N], F = e[C], V = H(S, C);
              F instanceof bn ? (W(S, C, F.execute(V)), P = !0) : V !== F && (W(S, C, F), P = !0);
            }
            return P;
          });
          var d = r.table.core, p = d.schema.primaryKey, m = p.outbound, g = p.extractKey, w = 200, p = t.db._options.modifyChunkSize;
          p && (w = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function T(S, C) {
            var N = C.failures, C = C.numFailures;
            b += S - C;
            for (var F = 0, V = y(N); F < V.length; F++) {
              var M = V[F];
              v.push(N[M]);
            }
          }
          var v = [], b = 0, E = [], x = e === Bi;
          return t.clone().primaryKeys().then(function(S) {
            function P(C) {
              var F = Math.min(w, S.length - C), V = S.slice(C, C + F);
              return (x ? Promise.resolve([]) : d.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(M) {
                var U = [], Y = [], G = m ? [] : null, J = x ? V : [];
                if (!x) for (var he = 0; he < F; ++he) {
                  var we = M[he], ce = { value: ke(we), primKey: S[C + he] };
                  l.call(ce, ce.value, ce) !== !1 && (ce.value == null ? J.push(S[C + he]) : m || be(g(we), g(ce.value)) === 0 ? (Y.push(ce.value), m && G.push(S[C + he])) : (J.push(S[C + he]), U.push(ce.value)));
                }
                return Promise.resolve(0 < U.length && d.mutate({ trans: o, type: "add", values: U }).then(function(Fe) {
                  for (var ue in Fe.failures) J.splice(parseInt(ue), 1);
                  T(U.length, Fe);
                })).then(function() {
                  return (0 < Y.length || N && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: G, values: Y, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < C }).then(function(Fe) {
                    return T(Y.length, Fe);
                  });
                }).then(function() {
                  return (0 < J.length || N && x) && d.mutate({ trans: o, type: "delete", keys: J, criteria: N, isAdditionalChunk: 0 < C }).then(function(Fe) {
                    return Hn(r.table, J, Fe);
                  }).then(function(Fe) {
                    return T(J.length, Fe);
                  });
                }).then(function() {
                  return S.length > C + F && P(C + w);
                });
              });
            }
            var N = ln(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return P(0).then(function() {
              if (0 < v.length) throw new tn("Error modifying one or more objects", v, b, E);
              return S.length;
            });
          });
        });
      }, Ee.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ln(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Bi) : this._write(function(r) {
          var o = e.table.core.schema.primaryKey, s = t;
          return e.table.core.count({ trans: r, query: { index: o, range: s } }).then(function(c) {
            return e.table.core.mutate({ trans: r, type: "deleteRange", range: s }).then(function(m) {
              var d = m.failures, m = m.numFailures;
              if (m) throw new tn("Could not delete some values", Object.keys(d).map(function(g) {
                return d[g];
              }), c - m);
              return c - m;
            });
          });
        });
      }, Ee);
      function Ee() {
      }
      var Bi = function(e, t) {
        return t.value = null;
      };
      function ss(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function as(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function at(e, t, r) {
        return e = e instanceof Mi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function fn(e) {
        return new e.Collection(e, function() {
          return Fi("");
        }).limit(0);
      }
      function Yn(e, t, r, o) {
        var s, c, l, d, m, g, w, p = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return at(e, ki);
        function T(b) {
          s = b === "next" ? function(x) {
            return x.toUpperCase();
          } : function(x) {
            return x.toLowerCase();
          }, c = b === "next" ? function(x) {
            return x.toLowerCase();
          } : function(x) {
            return x.toUpperCase();
          }, l = b === "next" ? ss : as;
          var E = r.map(function(x) {
            return { lower: c(x), upper: s(x) };
          }).sort(function(x, S) {
            return l(x.lower, S.lower);
          });
          d = E.map(function(x) {
            return x.upper;
          }), m = E.map(function(x) {
            return x.lower;
          }), w = (g = b) === "next" ? "" : o;
        }
        T("next"), e = new e.Collection(e, function() {
          return Kt(d[0], m[p - 1] + o);
        }), e._ondirectionchange = function(b) {
          T(b);
        };
        var v = 0;
        return e._addAlgorithm(function(b, E, x) {
          var S = b.key;
          if (typeof S != "string") return !1;
          var P = c(S);
          if (t(P, m, v)) return !0;
          for (var N = null, C = v; C < p; ++C) {
            var F = function(V, M, U, Y, G, J) {
              for (var he = Math.min(V.length, Y.length), we = -1, ce = 0; ce < he; ++ce) {
                var Fe = M[ce];
                if (Fe !== Y[ce]) return G(V[ce], U[ce]) < 0 ? V.substr(0, ce) + U[ce] + U.substr(ce + 1) : G(V[ce], Y[ce]) < 0 ? V.substr(0, ce) + Y[ce] + U.substr(ce + 1) : 0 <= we ? V.substr(0, we) + M[we] + U.substr(we + 1) : null;
                G(V[ce], Fe) < 0 && (we = ce);
              }
              return he < Y.length && J === "next" ? V + U.substr(V.length) : he < V.length && J === "prev" ? V.substr(0, U.length) : we < 0 ? null : V.substr(0, we) + Y[we] + U.substr(we + 1);
            }(S, P, d[C], m[C], l, g);
            F === null && N === null ? v = C + 1 : (N === null || 0 < l(N, F)) && (N = F);
          }
          return E(N !== null ? function() {
            b.continue(N + w);
          } : x), !1;
        }), e;
      }
      function Kt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Fi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Mi = (Object.defineProperty(Ye.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Ye.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? fn(this) : new this.Collection(this, function() {
            return Kt(e, t, !r, !o);
          });
        } catch {
          return at(this, St);
        }
      }, Ye.prototype.equals = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Fi(e);
        });
      }, Ye.prototype.above = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(e, void 0, !0);
        });
      }, Ye.prototype.aboveOrEqual = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(e, void 0, !1);
        });
      }, Ye.prototype.below = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(void 0, e, !1, !0);
        });
      }, Ye.prototype.belowOrEqual = function(e) {
        return e == null ? at(this, St) : new this.Collection(this, function() {
          return Kt(void 0, e);
        });
      }, Ye.prototype.startsWith = function(e) {
        return typeof e != "string" ? at(this, ki) : this.between(e, e + Gt, !0, !0);
      }, Ye.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Yn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Ye.prototype.equalsIgnoreCase = function(e) {
        return Yn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Ye.prototype.anyOfIgnoreCase = function() {
        var e = st.apply(pt, arguments);
        return e.length === 0 ? fn(this) : Yn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Ye.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = st.apply(pt, arguments);
        return e.length === 0 ? fn(this) : Yn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Ye.prototype.anyOf = function() {
        var e = this, t = st.apply(pt, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return at(this, St);
        }
        if (t.length === 0) return fn(this);
        var o = new this.Collection(this, function() {
          return Kt(t[0], t[t.length - 1]);
        });
        o._ondirectionchange = function(c) {
          r = c === "next" ? e._ascending : e._descending, t.sort(r);
        };
        var s = 0;
        return o._addAlgorithm(function(c, l, d) {
          for (var m = c.key; 0 < r(m, t[s]); ) if (++s === t.length) return l(d), !1;
          return r(m, t[s]) === 0 || (l(function() {
            c.continue(t[s]);
          }), !1);
        }), o;
      }, Ye.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.noneOf = function() {
        var e = st.apply(pt, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return at(this, St);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Ye.prototype.inAnyRange = function(S, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, l = this._min, d = this._max;
        if (S.length === 0) return fn(this);
        if (!S.every(function(P) {
          return P[0] !== void 0 && P[1] !== void 0 && s(P[0], P[1]) <= 0;
        })) return at(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", K.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, w, p = s;
        function T(P, N) {
          return p(P[0], N[0]);
        }
        try {
          (w = S.reduce(function(P, N) {
            for (var C = 0, F = P.length; C < F; ++C) {
              var V = P[C];
              if (o(N[0], V[1]) < 0 && 0 < o(N[1], V[0])) {
                V[0] = l(V[0], N[0]), V[1] = d(V[1], N[1]);
                break;
              }
            }
            return C === F && P.push(N), P;
          }, [])).sort(T);
        } catch {
          return at(this, St);
        }
        var v = 0, b = g ? function(P) {
          return 0 < s(P, w[v][1]);
        } : function(P) {
          return 0 <= s(P, w[v][1]);
        }, E = m ? function(P) {
          return 0 < c(P, w[v][0]);
        } : function(P) {
          return 0 <= c(P, w[v][0]);
        }, x = b, S = new this.Collection(this, function() {
          return Kt(w[0][0], w[w.length - 1][1], !m, !g);
        });
        return S._ondirectionchange = function(P) {
          p = P === "next" ? (x = b, s) : (x = E, c), w.sort(T);
        }, S._addAlgorithm(function(P, N, C) {
          for (var F, V = P.key; x(V); ) if (++v === w.length) return N(C), !1;
          return !b(F = V) && !E(F) || (r._cmp(V, w[v][1]) === 0 || r._cmp(V, w[v][0]) === 0 || N(function() {
            p === s ? P.continue(w[v][0]) : P.continue(w[v][1]);
          }), !1);
        }), S;
      }, Ye.prototype.startsWithAnyOf = function() {
        var e = st.apply(pt, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? fn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : at(this, "startsWithAnyOf() only works with strings");
      }, Ye);
      function Ye() {
      }
      function xt(e) {
        return Ke(function(t) {
          return _n(t), e(t.target.error), !1;
        });
      }
      function _n(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var wn = "storagemutated", Cr = "x-storagemutated-1", jt = vn(null, wn), us = (Et.prototype._lock = function() {
        return Q(!ee.global), ++this._reculock, this._reculock !== 1 || ee.global || (ee.lockOwnerFor = this), this;
      }, Et.prototype._unlock = function() {
        if (Q(!ee.global), --this._reculock == 0) for (ee.global || (ee.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
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
        if (Q(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new K.DatabaseClosed(o);
          case "MissingAPIError":
            throw new K.MissingAPI(o.message, o);
          default:
            throw new K.OpenFailed(o);
        }
        if (!this.active) throw new K.TransactionInactive();
        return Q(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = Ke(function(s) {
          _n(s), t._reject(e.error);
        }), e.onabort = Ke(function(s) {
          _n(s), t.active && t._reject(new K.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = Ke(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && jt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Et.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ue(new K.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new K.TransactionInactive());
        if (this._locked()) return new z(function(c, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, l);
          }, ee]);
        });
        if (r) return Ct(function() {
          var c = new z(function(l, d) {
            o._lock();
            var m = t(l, d, o);
            m && m.then && m.then(l, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new z(function(c, l) {
          var d = t(c, l, o);
          d && d.then && d.then(c, l);
        });
        return s._lib = !0, s;
      }, Et.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Et.prototype.waitFor = function(e) {
        var t, r = this._root(), o = z.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new z(function(c, l) {
          o.then(function(d) {
            return r._waitingQueue.push(Ke(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(Ke(l.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, Et.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new K.Abort()));
      }, Et.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (D(t, e)) return t[e];
        var r = this.schema[e];
        if (!r) throw new K.NotFound("Table " + e + " not part of transaction");
        return r = new this.db.Table(e, r, this), r.core = this.db.core.table(e), t[e] = r;
      }, Et);
      function Et() {
      }
      function Dr(e, t, r, o, s, c, l, d) {
        return { name: e, keyPath: t, unique: r, multi: o, auto: s, compound: c, src: (r && !l ? "&" : "") + (o ? "*" : "") + (s ? "++" : "") + qi(t), type: d };
      }
      function qi(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function Rr(e, t, r) {
        return { name: e, primKey: t, indexes: r, mappedClass: null, idxByName: (o = function(s) {
          return [s.name, s];
        }, r.reduce(function(s, c, l) {
          return l = o(c, l), l && (s[l[0]] = l[1]), s;
        }, {})) };
        var o;
      }
      var xn = function(e) {
        try {
          return e.only([[]]), xn = function() {
            return [[]];
          }, [[]];
        } catch {
          return xn = function() {
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
      function Ui(e) {
        return [].slice.call(e);
      }
      var cs = 0;
      function En(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function ls(e, t, m) {
        function o(x) {
          if (x.type === 3) return null;
          if (x.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var v = x.lower, b = x.upper, E = x.lowerOpen, x = x.upperOpen;
          return v === void 0 ? b === void 0 ? null : t.upperBound(b, !!x) : b === void 0 ? t.lowerBound(v, !!E) : t.bound(v, b, !!E, !!x);
        }
        function s(T) {
          var v, b = T.name;
          return { name: b, schema: T, mutate: function(E) {
            var x = E.trans, S = E.type, P = E.keys, N = E.values, C = E.range;
            return new Promise(function(F, V) {
              F = Ke(F);
              var M = x.objectStore(b), U = M.keyPath == null, Y = S === "put" || S === "add";
              if (!Y && S !== "delete" && S !== "deleteRange") throw new Error("Invalid operation type: " + S);
              var G, J = (P || N || { length: 1 }).length;
              if (P && N && P.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (J === 0) return F({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function he(nt) {
                ++Fe, _n(nt);
              }
              var we = [], ce = [], Fe = 0;
              if (S === "deleteRange") {
                if (C.type === 4) return F({ numFailures: Fe, failures: ce, results: [], lastResult: void 0 });
                C.type === 3 ? we.push(G = M.clear()) : we.push(G = M.delete(o(C)));
              } else {
                var U = Y ? U ? [N, P] : [N, null] : [P, null], ue = U[0], ze = U[1];
                if (Y) for (var Je = 0; Je < J; ++Je) we.push(G = ze && ze[Je] !== void 0 ? M[S](ue[Je], ze[Je]) : M[S](ue[Je])), G.onerror = he;
                else for (Je = 0; Je < J; ++Je) we.push(G = M[S](ue[Je])), G.onerror = he;
              }
              function sr(nt) {
                nt = nt.target.result, we.forEach(function(zt, Zr) {
                  return zt.error != null && (ce[Zr] = zt.error);
                }), F({ numFailures: Fe, failures: ce, results: S === "delete" ? P : we.map(function(zt) {
                  return zt.result;
                }), lastResult: nt });
              }
              G.onerror = function(nt) {
                he(nt), sr(nt);
              }, G.onsuccess = sr;
            });
          }, getMany: function(E) {
            var x = E.trans, S = E.keys;
            return new Promise(function(P, N) {
              P = Ke(P);
              for (var C, F = x.objectStore(b), V = S.length, M = new Array(V), U = 0, Y = 0, G = function(we) {
                we = we.target, M[we._pos] = we.result, ++Y === U && P(M);
              }, J = xt(N), he = 0; he < V; ++he) S[he] != null && ((C = F.get(S[he]))._pos = he, C.onsuccess = G, C.onerror = J, ++U);
              U === 0 && P(M);
            });
          }, get: function(E) {
            var x = E.trans, S = E.key;
            return new Promise(function(P, N) {
              P = Ke(P);
              var C = x.objectStore(b).get(S);
              C.onsuccess = function(F) {
                return P(F.target.result);
              }, C.onerror = xt(N);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, S) {
              x = Ke(x);
              var P, N, C, U = E.trans, F = E.values, V = E.limit, G = E.query, M = V === 1 / 0 ? void 0 : V, Y = G.index, G = G.range, U = U.objectStore(b), Y = Y.isPrimaryKey ? U : U.index(Y.name), G = o(G);
              if (V === 0) return x({ result: [] });
              v ? ((M = F ? Y.getAll(G, M) : Y.getAllKeys(G, M)).onsuccess = function(J) {
                return x({ result: J.target.result });
              }, M.onerror = xt(S)) : (P = 0, N = !F && "openKeyCursor" in Y ? Y.openKeyCursor(G) : Y.openCursor(G), C = [], N.onsuccess = function(J) {
                var he = N.result;
                return he ? (C.push(F ? he.value : he.primaryKey), ++P === V ? x({ result: C }) : void he.continue()) : x({ result: C });
              }, N.onerror = xt(S));
            });
          }), openCursor: function(E) {
            var x = E.trans, S = E.values, P = E.query, N = E.reverse, C = E.unique;
            return new Promise(function(F, V) {
              F = Ke(F);
              var Y = P.index, M = P.range, U = x.objectStore(b), U = Y.isPrimaryKey ? U : U.index(Y.name), Y = N ? C ? "prevunique" : "prev" : C ? "nextunique" : "next", G = !S && "openKeyCursor" in U ? U.openKeyCursor(o(M), Y) : U.openCursor(o(M), Y);
              G.onerror = xt(V), G.onsuccess = Ke(function(J) {
                var he, we, ce, Fe, ue = G.result;
                ue ? (ue.___id = ++cs, ue.done = !1, he = ue.continue.bind(ue), we = (we = ue.continuePrimaryKey) && we.bind(ue), ce = ue.advance.bind(ue), Fe = function() {
                  throw new Error("Cursor not stopped");
                }, ue.trans = x, ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = function() {
                  throw new Error("Cursor not started");
                }, ue.fail = Ke(V), ue.next = function() {
                  var ze = this, Je = 1;
                  return this.start(function() {
                    return Je-- ? ze.continue() : ze.stop();
                  }).then(function() {
                    return ze;
                  });
                }, ue.start = function(ze) {
                  function Je() {
                    if (G.result) try {
                      ze();
                    } catch (nt) {
                      ue.fail(nt);
                    }
                    else ue.done = !0, ue.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, ue.stop();
                  }
                  var sr = new Promise(function(nt, zt) {
                    nt = Ke(nt), G.onerror = xt(zt), ue.fail = zt, ue.stop = function(Zr) {
                      ue.stop = ue.continue = ue.continuePrimaryKey = ue.advance = Fe, nt(Zr);
                    };
                  });
                  return G.onsuccess = Ke(function(nt) {
                    G.onsuccess = Je, Je();
                  }), ue.continue = he, ue.continuePrimaryKey = we, ue.advance = ce, Je(), sr;
                }, F(ue)) : F(null);
              }, V);
            });
          }, count: function(E) {
            var x = E.query, S = E.trans, P = x.index, N = x.range;
            return new Promise(function(C, F) {
              var V = S.objectStore(b), M = P.isPrimaryKey ? V : V.index(P.name), V = o(N), M = V ? M.count(V) : M.count();
              M.onsuccess = Ke(function(U) {
                return C(U.target.result);
              }), M.onerror = xt(F);
            });
          } };
        }
        var c, l, d, w = (l = m, d = Ui((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(T) {
          return l.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = O(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Kr(v) }, indexes: Ui(T.indexNames).map(function(S) {
            return T.index(S);
          }).map(function(C) {
            var P = C.name, N = C.unique, F = C.multiEntry, C = C.keyPath, F = { name: P, compound: O(C), keyPath: C, unique: N, multiEntry: F, extractKey: Kr(C) };
            return E[En(C)] = F;
          }), getIndexByKeyPath: function(S) {
            return E[En(S)];
          } };
          return E[":id"] = x.primaryKey, v != null && (E[En(v)] = x.primaryKey), x;
        }) }, hasGetAll: 0 < d.length && "getAll" in l.objectStore(d[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), m = w.schema, g = w.hasGetAll, w = m.tables.map(s), p = {};
        return w.forEach(function(T) {
          return p[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!p[T]) throw new Error("Table '".concat(T, "' not found"));
          return p[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: xn(t), schema: m };
      }
      function fs(e, t, r, o) {
        var s = r.IDBKeyRange;
        return r.indexedDB, { dbcore: (o = ls(t, s, o), e.dbcore.reduce(function(c, l) {
          return l = l.create, u(u({}, c), l(c));
        }, o)) };
      }
      function Xn(e, o) {
        var r = o.db, o = fs(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(l) {
            return l.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function Qn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(l) {
            var d = function m(g, w) {
              return je(g, w) || (g = L(g)) && m(g, w);
            }(l, s);
            (!d || "value" in d && d.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? te(l, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              oe(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
            } }) : l[s] = new e.Table(s, c));
          });
        });
      }
      function jr(e, t) {
        t.forEach(function(r) {
          for (var o in r) r[o] instanceof e.Table && delete r[o];
        });
      }
      function ds(e, t) {
        return e._cfg.version - t._cfg.version;
      }
      function hs(e, t, r, o) {
        var s = e._dbSchema;
        r.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = Rr("$meta", Vi("")[0], []), e._storeNames.push("$meta"));
        var c = e._createTransaction("readwrite", e._storeNames, s);
        c.create(r), c._completion.catch(o);
        var l = c._reject.bind(c), d = ee.transless || ee;
        Ct(function() {
          return ee.trans = c, ee.transless = d, t !== 0 ? (Xn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(w) {
            return w ?? g;
          }) : z.resolve(g)).then(function(w) {
            return T = w, v = c, b = r, E = [], w = (p = e)._versions, x = p._dbSchema = Jn(0, p.idbdb, b), (w = w.filter(function(S) {
              return S._cfg.version >= T;
            })).length !== 0 ? (w.forEach(function(S) {
              E.push(function() {
                var P = x, N = S._cfg.dbschema;
                Zn(p, P, b), Zn(p, N, b), x = p._dbSchema = N;
                var C = Br(P, N);
                C.add.forEach(function(Y) {
                  Fr(b, Y[0], Y[1].primKey, Y[1].indexes);
                }), C.change.forEach(function(Y) {
                  if (Y.recreate) throw new K.Upgrade("Not yet support for changing primary key");
                  var G = b.objectStore(Y.name);
                  Y.add.forEach(function(J) {
                    return zn(G, J);
                  }), Y.change.forEach(function(J) {
                    G.deleteIndex(J.name), zn(G, J);
                  }), Y.del.forEach(function(J) {
                    return G.deleteIndex(J);
                  });
                });
                var F = S._cfg.contentUpgrade;
                if (F && S._cfg.version > T) {
                  Xn(p, b), v._memoizedTables = {};
                  var V = le(N);
                  C.del.forEach(function(Y) {
                    V[Y] = P[Y];
                  }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], y(V), V), v.schema = V;
                  var M, U = vt(F);
                  return U && un(), C = z.follow(function() {
                    var Y;
                    (M = F(v)) && U && (Y = Dt.bind(null, null), M.then(Y, Y));
                  }), M && typeof M.then == "function" ? z.resolve(M) : C.then(function() {
                    return M;
                  });
                }
              }), E.push(function(P) {
                var N, C, F = S._cfg.dbschema;
                N = F, C = P, [].slice.call(C.db.objectStoreNames).forEach(function(V) {
                  return N[V] == null && C.db.deleteObjectStore(V);
                }), jr(p, [p.Transaction.prototype]), Qn(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), v.schema = p._dbSchema;
              }), E.push(function(P) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === S._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : P.objectStore("$meta").put(S._cfg.version, "version"));
              });
            }), function S() {
              return E.length ? z.resolve(E.shift()(v.idbtrans)).then(S) : z.resolve();
            }().then(function() {
              Li(x, b);
            })) : z.resolve();
            var p, T, v, b, E, x;
          }).catch(l)) : (y(s).forEach(function(w) {
            Fr(r, w, s[w].primKey, s[w].indexes);
          }), Xn(e, r), void z.follow(function() {
            return e.on.populate.fire(c);
          }).catch(l));
          var m, g;
        });
      }
      function ps(e, t) {
        Li(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Jn(0, e.idbdb, t);
        Zn(e, e._dbSchema, t);
        for (var o = 0, s = Br(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(l.name);
            l.add.forEach(function(m) {
              ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(m.src)), zn(d, m);
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
            var l = { name: r, def: c, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (c.primKey.keyPath || "") || s.primKey.auto !== c.primKey.auto) l.recreate = !0, o.change.push(l);
            else {
              var d = s.idxByName, m = c.idxByName, g = void 0;
              for (g in d) m[g] || l.del.push(g);
              for (g in m) {
                var w = d[g], p = m[g];
                w ? w.src !== p.src && l.change.push(p) : l.add.push(p);
              }
              (0 < l.del.length || 0 < l.add.length || 0 < l.change.length) && o.change.push(l);
            }
          } else o.add.push([r, c]);
        }
        return o;
      }
      function Fr(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return zn(s, c);
        }), s;
      }
      function Li(e, t) {
        y(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (ie && console.debug("Dexie: Creating missing table", r), Fr(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function zn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Jn(e, t, r) {
        var o = {};
        return Re(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), l = Dr(qi(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), d = [], m = 0; m < c.indexNames.length; ++m) {
            var w = c.index(c.indexNames[m]), g = w.keyPath, w = Dr(w.name, g, !!w.unique, !!w.multiEntry, !1, g && typeof g != "string", !1);
            d.push(w);
          }
          o[s] = Rr(s, l, d);
        }), o;
      }
      function Zn(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], l = r.objectStore(c);
          e._hasGetAll = "getAll" in l;
          for (var d = 0; d < l.indexNames.length; ++d) {
            var m = l.indexNames[d], g = l.index(m).keyPath, w = typeof g == "string" ? g : "[" + Re(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[w]) && (g.name = m, delete t[c].idxByName[w], t[c].idxByName[m] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Vi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Dr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), O(c), r === 0, o);
        });
      }
      var ms = (dn.prototype._createTableSchema = Rr, dn.prototype._parseIndexSyntax = Vi, dn.prototype._parseStoresSpec = function(e, t) {
        var r = this;
        y(e).forEach(function(o) {
          if (e[o] !== null) {
            var s = r._parseIndexSyntax(e[o]), c = s.shift();
            if (!c) throw new K.Schema("Invalid schema for table " + o + ": " + e[o]);
            if (c.unique = !0, c.multi) throw new K.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(l) {
              if (l.auto) throw new K.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!l.keyPath) throw new K.Schema("Index must have a name and cannot be an empty string");
            }), s = r._createTableSchema(o, c, s), t[o] = s;
          }
        });
      }, dn.prototype.stores = function(r) {
        var t = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? I(this._cfg.storesSource, r) : r;
        var r = t._versions, o = {}, s = {};
        return r.forEach(function(c) {
          I(o, c._cfg.storesSource), s = c._cfg.dbschema = {}, c._parseStoresSpec(o, s);
        }), t._dbSchema = s, jr(t, [t._allTables, t, t.Transaction.prototype]), Qn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(s), s), t._storeNames = y(s), this;
      }, dn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ae(this._cfg.contentUpgrade || A, e), this;
      }, dn);
      function dn() {
      }
      function Mr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new At(Vn, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function qr(e) {
        return e && typeof e.databases == "function";
      }
      function Ur(e) {
        return Ct(function() {
          return ee.letThrough = !0, e();
        });
      }
      function Lr(e) {
        return !("from" in e);
      }
      var Qe = function(e, t) {
        if (!this) {
          var r = new Qe();
          return e && "d" in e && I(r, e), r;
        }
        I(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? t : e } : { d: 0 });
      };
      function Tn(e, t, r) {
        var o = be(t, r);
        if (!isNaN(o)) {
          if (0 < o) throw RangeError();
          if (Lr(e)) return I(e, { from: t, to: r, d: 1 });
          var s = e.l, o = e.r;
          if (be(r, e.from) < 0) return s ? Tn(s, t, r) : e.l = { from: t, to: r, d: 1, l: null, r: null }, Hi(e);
          if (0 < be(t, e.to)) return o ? Tn(o, t, r) : e.r = { from: t, to: r, d: 1, l: null, r: null }, Hi(e);
          be(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < be(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && On(e, s), o && r && On(e, o);
        }
      }
      function On(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, l = m.to, d = m.l, m = m.r;
          Tn(o, c, l), d && r(o, d), m && r(o, m);
        }(e, t);
      }
      function $i(e, t) {
        var r = er(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = er(e), l = c.next(s.from), d = l.value; !o.done && !l.done; ) {
          if (be(d.from, s.to) <= 0 && 0 <= be(d.to, s.from)) return !0;
          be(s.from, d.from) < 0 ? s = (o = r.next(d.from)).value : d = (l = c.next(s.from)).value;
        }
        return !1;
      }
      function er(e) {
        var t = Lr(e) ? null : { s: 0, n: e };
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
      function Hi(e) {
        var t, r, o = (((t = e.r) === null || t === void 0 ? void 0 : t.d) || 0) - (((r = e.l) === null || r === void 0 ? void 0 : r.d) || 0), s = 1 < o ? "r" : o < -1 ? "l" : "";
        s && (t = s == "r" ? "l" : "r", r = u({}, e), o = e[s], e.from = o.from, e.to = o.to, e[s] = o[s], r[s] = o[t], (e[t] = r).d = Wi(r)), e.d = Wi(e);
      }
      function Wi(r) {
        var t = r.r, r = r.l;
        return (t ? r ? Math.max(t.d, r.d) : t.d : r ? r.d : 0) + 1;
      }
      function tr(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? On(e[r], t[r]) : e[r] = function o(s) {
            var c, l, d = {};
            for (c in s) D(s, c) && (l = s[c], d[c] = !l || typeof l != "object" || Pe.has(l.constructor) ? l : o(l));
            return d;
          }(t[r]);
        }), e;
      }
      function Vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && $i(t[r], e[r]);
        });
      }
      X(Qe.prototype, ((mt = { add: function(e) {
        return On(this, e), this;
      }, addKey: function(e) {
        return Tn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Tn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = er(this).next(e).value;
        return t && be(t.from, e) <= 0 && 0 <= be(t.to, e);
      } })[Ce] = function() {
        return er(this);
      }, mt));
      var Xt = {}, $r = {}, Hr = !1;
      function nr(e) {
        tr($r, e), Hr || (Hr = !0, setTimeout(function() {
          Hr = !1, Wr($r, !($r = {}));
        }, 0));
      }
      function Wr(e, t) {
        t === void 0 && (t = !1);
        var r = /* @__PURE__ */ new Set();
        if (e.all) for (var o = 0, s = Object.values(Xt); o < s.length; o++) Gi(l = s[o], e, r, t);
        else for (var c in e) {
          var l, d = /^idb\:\/\/(.*)\/(.*)\//.exec(c);
          d && (c = d[1], d = d[2], (l = Xt["idb://".concat(c, "/").concat(d)]) && Gi(l, e, r, t));
        }
        r.forEach(function(m) {
          return m();
        });
      }
      function Gi(e, t, r, o) {
        for (var s = [], c = 0, l = Object.entries(e.queries.query); c < l.length; c++) {
          for (var d = l[c], m = d[0], g = [], w = 0, p = d[1]; w < p.length; w++) {
            var T = p[w];
            Vr(t, T.obsSet) ? T.subscribers.forEach(function(x) {
              return r.add(x);
            }) : o && g.push(T);
          }
          o && s.push([m, g]);
        }
        if (o) for (var v = 0, b = s; v < b.length; v++) {
          var E = b[v], m = E[0], g = E[1];
          e.queries.query[m] = g;
        }
      }
      function ys(e) {
        var t = e._state, r = e._deps.indexedDB;
        if (t.isBeingOpened || e.idbdb) return t.dbReadyPromise.then(function() {
          return t.dbOpenError ? Ue(t.dbOpenError) : e;
        });
        t.isBeingOpened = !0, t.dbOpenError = null, t.openComplete = !1;
        var o = t.openCanceller, s = Math.round(10 * e.verno), c = !1;
        function l() {
          if (t.openCanceller !== o) throw new K.DatabaseClosed("db.open() was cancelled");
        }
        function d() {
          return new z(function(T, v) {
            if (l(), !r) throw new K.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new K.MissingAPI();
            E.onerror = xt(v), E.onblocked = Ke(e._fireOnBlocked), E.onupgradeneeded = Ke(function(x) {
              var S;
              w = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = _n, w.abort(), E.result.close(), (S = r.deleteDatabase(b)).onsuccess = S.onerror = Ke(function() {
                v(new K.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = xt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, p = x < 1, e.idbdb = E.result, c && ps(e, w), hs(e, x / 10, w, v));
            }, v), E.onsuccess = Ke(function() {
              w = null;
              var x, S, P, N, C, F = e.idbdb = E.result, V = Re(F.objectStoreNames);
              if (0 < V.length) try {
                var M = F.transaction((N = V).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) S = F, P = M, (x = e).verno = S.version / 10, P = x._dbSchema = Jn(0, S, P), x._storeNames = Re(S.objectStoreNames, 0), Qn(x, [x._allTables], y(P), P);
                else if (Zn(e, e._dbSchema, M), ((C = Br(Jn(0, (C = e).idbdb, M), C._dbSchema)).add.length || C.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), F.close(), s = F.version + 1, c = !0, T(d());
                Xn(e, M);
              } catch {
              }
              cn.push(e), F.onversionchange = Ke(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), F.onclose = Ke(function(U) {
                e.on("close").fire(U);
              }), p && (C = e._deps, M = b, F = C.indexedDB, C = C.IDBKeyRange, qr(F) || M === Vn || Mr(F, C).put({ name: M }).catch(A)), T();
            }, v);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return z.reject(T);
          });
        }
        var m, g = t.dbReadyResolve, w = null, p = !1;
        return z.race([o, (typeof navigator > "u" ? z.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function v() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(d)]).then(function() {
          return l(), t.onReadyBeingFired = [], z.resolve(Ur(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(ae, A);
              return t.onReadyBeingFired = [], z.resolve(Ur(function() {
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
          return o === t.openCanceller && e._close(), Ue(T);
        }).finally(function() {
          t.openComplete = !0, g();
        }).then(function() {
          var T;
          return p && (T = {}, e.tables.forEach(function(v) {
            v.schema.indexes.forEach(function(b) {
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new Qe(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new Qe(-1 / 0, [[[]]]);
          }), jt(wn).fire(T), Wr(T, !0)), e;
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
          return function(m) {
            var d = c(m), m = d.value;
            return d.done ? m : m && typeof m.then == "function" ? m.then(r, o) : O(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function rr(e, t, r) {
        for (var o = O(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var vs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function l(p, T, v) {
            var b = En(p), E = s[b] = s[b] || [], x = p == null ? 0 : typeof p == "string" ? 1 : p.length, S = 0 < T, S = u(u({}, v), { name: S ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: S, keyTail: T, keyLength: x, extractKey: Kr(p), unique: !S && v.unique });
            return E.push(S), S.isPrimaryKey || c.push(S), 1 < x && l(x === 2 ? p[0] : p.slice(0, x - 1), T + 1, v), E.sort(function(P, N) {
              return P.keyTail - N.keyTail;
            }), S;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var d = 0, m = o.indexes; d < m.length; d++) {
            var g = m[d];
            l(g.keyPath, 0, g);
          }
          function w(p) {
            var T, v = p.query.index;
            return v.isVirtual ? u(u({}, p), { query: { index: v.lowLevelIndex, range: (T = p.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: rr(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: rr(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = s[En(p)]) && p[0];
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
                P != null ? S.continue(rr(P, p.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : p.unique ? S.continue(S.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : S.continue();
              } }, continuePrimaryKey: { value: function(P, N) {
                S.continuePrimaryKey(rr(P, e.MAX_KEY, v), N);
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
        return r = r || {}, o = o || "", y(e).forEach(function(s) {
          var c, l, d;
          D(t, s) ? (c = e[s], l = t[s], typeof c == "object" && typeof l == "object" && c && l ? (d = Be(c)) !== Be(l) ? r[o + s] = t[s] : d === "Object" ? Yr(c, l, r, o + s + ".") : c !== l && (r[o + s] = t[s]) : c !== l && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), y(t).forEach(function(s) {
          D(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var gs = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = ee.trans, l = c.table(t).hook, d = l.deleting, m = l.creating, g = l.updating;
            switch (s.type) {
              case "add":
                if (m.fire === A) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (m.fire === A && g.fire === A) break;
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
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: x }) : u({}, p)).type !== "delete" && (p.values = f([], p.values)), p.keys && (p.keys = f([], p.keys)), T = r, b = x, ((v = p).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(S) {
                var P = x.map(function(N, C) {
                  var F, V, M, U = S[C], Y = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(Y, N, U, E) : p.type === "add" || U === void 0 ? (F = m.fire.call(Y, N, p.values[C], E), N == null && F != null && (p.keys[C] = N = F, o.outbound || W(p.values[C], o.keyPath, N))) : (F = Yr(U, p.values[C]), (V = g.fire.call(Y, F, N, U, E)) && (M = p.values[C], Object.keys(V).forEach(function(G) {
                    D(M, G) ? M[G] = V[G] : W(M, G, V[G]);
                  }))), Y;
                });
                return r.mutate(p).then(function(N) {
                  for (var C = N.failures, F = N.results, V = N.numFailures, N = N.lastResult, M = 0; M < x.length; ++M) {
                    var U = (F || x)[M], Y = P[M];
                    U == null ? Y.onerror && Y.onerror(C[M]) : Y.onsuccess && Y.onsuccess(p.type === "put" && S[M] ? p.values[M] : U);
                  }
                  return { failures: C, results: F, numFailures: V, lastResult: N };
                }).catch(function(N) {
                  return P.forEach(function(C) {
                    return C.onerror && C.onerror(N);
                  }), Promise.reject(N);
                });
              });
            }
          } });
        } });
      } };
      function Yi(e, t, r) {
        try {
          if (!t || t.keys.length < e.length) return null;
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) be(t.keys[s], e[c]) === 0 && (o.push(r ? ke(t.values[s]) : t.values[s]), ++c);
          return o.length === e.length ? o : null;
        } catch {
          return null;
        }
      }
      var bs = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(t) {
          var r = e.table(t);
          return u(u({}, r), { getMany: function(o) {
            if (!o.cache) return r.getMany(o);
            var s = Yi(o.keys, o.trans._cache, o.cache === "clone");
            return s ? z.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? ke(c) : c }, c;
            });
          }, mutate: function(o) {
            return o.type !== "add" && (o.trans._cache = null), r.mutate(o);
          } });
        } };
      } };
      function Xi(e, t) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !t.schema.primaryKey.outbound;
      }
      function Qi(e, t) {
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
      var _s = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var t = e.schema.name, r = new Qe(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (ee.subscr && s !== "readonly") throw new K.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(ee.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, l = c.primaryKey, p = c.indexes, d = l.extractKey, m = l.outbound, g = l.autoIncrement && p.filter(function(v) {
            return v.compound && v.keyPath.includes(l.keyPath);
          }), w = u(u({}, s), { mutate: function(v) {
            function b(G) {
              return G = "idb://".concat(t, "/").concat(o, "/").concat(G), N[G] || (N[G] = new Qe());
            }
            var E, x, S, P = v.trans, N = v.mutatedParts || (v.mutatedParts = {}), C = b(""), F = b(":dels"), V = v.type, Y = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Xr(l, v).filter(function(G) {
              return G;
            }), v.values] : [], M = Y[0], U = Y[1], Y = v.trans._cache;
            return O(M) ? (C.addKeys(M), (Y = V === "delete" || M.length === U.length ? Yi(M, Y) : null) || F.addKeys(M), (Y || U) && (E = b, x = Y, S = U, c.indexes.forEach(function(G) {
              var J = E(G.name || "");
              function he(ce) {
                return ce != null ? G.extractKey(ce) : null;
              }
              function we(ce) {
                return G.multiEntry && O(ce) ? ce.forEach(function(Fe) {
                  return J.addKey(Fe);
                }) : J.addKey(ce);
              }
              (x || S).forEach(function(ce, ze) {
                var ue = x && he(x[ze]), ze = S && he(S[ze]);
                be(ue, ze) !== 0 && (ue != null && we(ue), ze != null && we(ze));
              });
            }))) : M ? (U = { from: (U = M.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = M.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, F.add(U), C.add(U)) : (C.add(r), F.add(r), c.indexes.forEach(function(G) {
              return b(G.name).add(r);
            })), s.mutate(v).then(function(G) {
              return !M || v.type !== "add" && v.type !== "put" || (C.addKeys(G.results), g && g.forEach(function(J) {
                for (var he = v.values.map(function(ue) {
                  return J.extractKey(ue);
                }), we = J.keyPath.findIndex(function(ue) {
                  return ue === l.keyPath;
                }), ce = 0, Fe = G.results.length; ce < Fe; ++ce) he[ce][we] = G.results[ce];
                b(J.name).addKeys(he);
              })), P.mutatedParts = tr(P.mutatedParts || {}, N), G;
            });
          } }), p = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new Qe((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [l, new Qe(v.key)];
          }, getMany: function(v) {
            return [l, new Qe().addKeys(v.keys)];
          }, count: p, query: p, openCursor: p };
          return y(T).forEach(function(v) {
            w[v] = function(b) {
              var E = ee.subscr, x = !!E, S = Xi(ee, s) && Qi(v, b) ? b.obsSet = {} : E;
              if (x) {
                var P = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), S[U] || (S[U] = new Qe());
                }, N = P(""), C = P(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? C : P(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var F = v === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(U) {
                      if (v === "query") {
                        if (m && b.values) return F.then(function(he) {
                          return he = he.result, N.addKeys(he), U;
                        });
                        var Y = b.values ? U.result.map(d) : U.result;
                        (b.values ? N : C).addKeys(Y);
                      } else if (v === "openCursor") {
                        var G = U, J = b.values;
                        return G && Object.create(G, { key: { get: function() {
                          return C.addKey(G.primaryKey), G.key;
                        } }, primaryKey: { get: function() {
                          var he = G.primaryKey;
                          return C.addKey(he), he;
                        } }, value: { get: function() {
                          return J && N.addKey(G.primaryKey), G.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  C.add(r);
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
      function Qr(e, t) {
        return r = e, ((o = t).lower === void 0 || (o.lowerOpen ? 0 < be(r, o.lower) : 0 <= be(r, o.lower))) && (e = e, (t = t).upper === void 0 || (t.upperOpen ? be(e, t.upper) < 0 : be(e, t.upper) <= 0));
        var r, o;
      }
      function Ji(e, t, T, o, s, c) {
        if (!T || T.length === 0) return e;
        var l = t.query.index, d = l.multiEntry, m = t.query.range, g = o.schema.primaryKey.extractKey, w = l.extractKey, p = (l.lowLevelIndex || l).extractKey, T = T.reduce(function(v, b) {
          var E = v, x = [];
          if (b.type === "add" || b.type === "put") for (var S = new Qe(), P = b.values.length - 1; 0 <= P; --P) {
            var N, C = b.values[P], F = g(C);
            S.hasKey(F) || (N = w(C), (d && O(N) ? N.some(function(G) {
              return Qr(G, m);
            }) : Qr(N, m)) && (S.addKey(F), x.push(C)));
          }
          switch (b.type) {
            case "add":
              var V = new Qe().addKeys(t.values ? v.map(function(J) {
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
              var M = new Qe().addKeys(b.values.map(function(J) {
                return g(J);
              }));
              E = v.filter(function(J) {
                return !M.hasKey(t.values ? g(J) : J);
              }).concat(t.values ? x : x.map(function(J) {
                return g(J);
              }));
              break;
            case "delete":
              var U = new Qe().addKeys(b.keys);
              E = v.filter(function(J) {
                return !U.hasKey(t.values ? g(J) : J);
              });
              break;
            case "deleteRange":
              var Y = b.range;
              E = v.filter(function(J) {
                return !Qr(g(J), Y);
              });
          }
          return E;
        }, e);
        return T === e ? e : (T.sort(function(v, b) {
          return be(p(v), p(b)) || be(g(v), g(b));
        }), t.limit && t.limit < 1 / 0 && (T.length > t.limit ? T.length = t.limit : e.length === t.limit && T.length < t.limit && (s.dirty = !0)), c ? Object.freeze(T) : T);
      }
      function Zi(e, t) {
        return be(e.lower, t.lower) === 0 && be(e.upper, t.upper) === 0 && !!e.lowerOpen == !!t.lowerOpen && !!e.upperOpen == !!t.upperOpen;
      }
      function ws(e, t) {
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
      function xs(e, t, r, o) {
        e.subscribers.add(r), o.addEventListener("abort", function() {
          var s, c;
          e.subscribers.delete(r), e.subscribers.size === 0 && (s = e, c = t, setTimeout(function() {
            s.subscribers.size === 0 && Me(c, s);
          }, 3e3));
        });
      }
      var Es = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var t = e.schema.name;
        return u(u({}, e), { transaction: function(r, o, s) {
          var c, l, d = e.transaction(r, o, s);
          return o === "readwrite" && (l = (c = new AbortController()).signal, s = function(m) {
            return function() {
              if (c.abort(), o === "readwrite") {
                for (var g = /* @__PURE__ */ new Set(), w = 0, p = r; w < p.length; w++) {
                  var T = p[w], v = Xt["idb://".concat(t, "/").concat(T)];
                  if (v) {
                    var b = e.table(T), E = v.optimisticOps.filter(function(J) {
                      return J.trans === d;
                    });
                    if (d._explicit && m && d.mutatedParts) for (var x = 0, S = Object.values(v.queries.query); x < S.length; x++) for (var P = 0, N = (V = S[x]).slice(); P < N.length; P++) Vr((M = N[P]).obsSet, d.mutatedParts) && (Me(V, M), M.subscribers.forEach(function(J) {
                      return g.add(J);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(J) {
                        return J.trans !== d;
                      });
                      for (var C = 0, F = Object.values(v.queries.query); C < F.length; C++) for (var V, M, U, Y = 0, G = (V = F[C]).slice(); Y < G.length; Y++) (M = G[Y]).res != null && d.mutatedParts && (m && !M.dirty ? (U = Object.isFrozen(M.res), U = Ji(M.res, M.req, E, b, M, U), M.dirty ? (Me(V, M), M.subscribers.forEach(function(J) {
                        return g.add(J);
                      })) : U !== M.res && (M.res = U, M.promise = z.resolve({ result: U }))) : (M.dirty && Me(V, M), M.subscribers.forEach(function(J) {
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
          }, d.addEventListener("abort", s(!1), { signal: l }), d.addEventListener("error", s(!1), { signal: l }), d.addEventListener("complete", s(!0), { signal: l })), d;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var l = ee.trans;
            if (s.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Xt["idb://".concat(t, "/").concat(r)];
            return d ? (l = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Xr(s, c).some(function(m) {
              return m == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && nr(c.mutatedParts), l.then(function(m) {
              0 < m.numFailures && (Me(d.optimisticOps, c), (m = zi(0, c, m)) && d.optimisticOps.push(m), c.mutatedParts && nr(c.mutatedParts));
            }), l.catch(function() {
              Me(d.optimisticOps, c), c.mutatedParts && nr(c.mutatedParts);
            })) : l.then(function(m) {
              var g = zi(0, u(u({}, c), { values: c.values.map(function(w, p) {
                var T;
                return m.failures[p] ? w : (w = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? ke(w) : u({}, w), W(w, s.keyPath, m.results[p]), w);
              }) }), m);
              d.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && nr(c.mutatedParts);
              });
            }), l) : o.mutate(c);
          }, query: function(c) {
            if (!Xi(ee, o) || !Qi("query", c)) return o.query(c);
            var l = ((g = ee.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", p = ee, d = p.requery, m = p.signal, g = function(b, E, x, S) {
              var P = Xt["idb://".concat(b, "/").concat(E)];
              if (!P) return [];
              if (!(E = P.queries[x])) return [null, !1, P, null];
              var N = E[(S.query ? S.query.index.name : null) || ""];
              if (!N) return [null, !1, P, null];
              switch (x) {
                case "query":
                  var C = N.find(function(F) {
                    return F.req.limit === S.limit && F.req.values === S.values && Zi(F.req.query.range, S.query.range);
                  });
                  return C ? [C, !0, P, N] : [N.find(function(F) {
                    return ("limit" in F.req ? F.req.limit : 1 / 0) >= S.limit && (!S.values || F.req.values) && ws(F.req.query.range, S.query.range);
                  }), !1, P, N];
                case "count":
                  return C = N.find(function(F) {
                    return Zi(F.req.query.range, S.query.range);
                  }), [C, !!C, P, N];
              }
            }(t, r, "query", c), w = g[0], p = g[1], T = g[2], v = g[3];
            return w && p ? w.obsSet = c.obsSet : (p = o.query(c).then(function(b) {
              var E = b.result;
              if (w && (w.res = E), l) {
                for (var x = 0, S = E.length; x < S; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = ke(E);
              return b;
            }).catch(function(b) {
              return v && w && Me(v, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(w) : (v = [w], (T = T || (Xt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), xs(w, v, d, m), w.promise.then(function(b) {
              return { result: Ji(b.result, c, T?.optimisticOps, o, w, l) };
            });
          } });
        } });
      } };
      function ir(e, t) {
        return new Proxy(e, { get: function(r, o, s) {
          return o === "db" ? t : Reflect.get(r, o, s);
        } });
      }
      var At = (Le.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new K.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new K.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var t = this._versions, r = t.filter(function(o) {
          return o._cfg.version === e;
        })[0];
        return r || (r = new this.Version(e), t.push(r), t.sort(ds), r.stores({}), this._state.autoSchema = !1, r);
      }, Le.prototype._whenReady = function(e) {
        var t = this;
        return this.idbdb && (this._state.openComplete || ee.letThrough || this._vip) ? e() : new z(function(r, o) {
          if (t._state.openComplete) return o(new K.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new K.DatabaseClosed());
            t.open().catch(A);
          }
          t._state.dbReadyPromise.then(r, o);
        }).then(e);
      }, Le.prototype.use = function(e) {
        var t = e.stack, r = e.create, o = e.level, s = e.name;
        return s && this.unuse({ stack: t, name: s }), e = this._middlewares[t] || (this._middlewares[t] = []), e.push({ stack: t, create: r, level: o ?? 10, name: s }), e.sort(function(c, l) {
          return c.level - l.level;
        }), this;
      }, Le.prototype.unuse = function(e) {
        var t = e.stack, r = e.name, o = e.create;
        return t && this._middlewares[t] && (this._middlewares[t] = this._middlewares[t].filter(function(s) {
          return o ? s.create !== o : !!r && s.name !== r;
        })), this;
      }, Le.prototype.open = function() {
        var e = this;
        return Wt(tt, function() {
          return ys(e);
        });
      }, Le.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, t = cn.indexOf(this);
        if (0 <= t && cn.splice(t, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new z(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new z(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Le.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new K.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new K.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Le.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new z(function(s, c) {
          function l() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = Ke(function() {
              var m, g, w;
              m = t._deps, g = t.name, w = m.indexedDB, m = m.IDBKeyRange, qr(w) || g === Vn || Mr(w, m).delete(g).catch(A), s();
            }), d.onerror = xt(c), d.onblocked = t._fireOnBlocked;
          }
          if (r) throw new K.InvalidArgument("Invalid closeOptions argument to db.delete()");
          o.isBeingOpened ? o.dbReadyPromise.then(l) : l();
        });
      }, Le.prototype.backendDB = function() {
        return this.idbdb;
      }, Le.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, Le.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, Le.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, Le.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(Le.prototype, "tables", { get: function() {
        var e = this;
        return y(this._allTables).map(function(t) {
          return e._allTables[t];
        });
      }, enumerable: !1, configurable: !0 }), Le.prototype.transaction = function() {
        var e = (function(t, r, o) {
          var s = arguments.length;
          if (s < 2) throw new K.InvalidArgument("Too few arguments");
          for (var c = new Array(s - 1); --s; ) c[s - 1] = arguments[s];
          return o = c.pop(), [t, ye(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Le.prototype._transaction = function(e, t, r) {
        var o = this, s = ee.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var c, l, d = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (l = t.map(function(g) {
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
            s && l.forEach(function(g) {
              if (s && s.storeNames.indexOf(g) === -1) {
                if (!d) throw new K.SubTransaction("Table " + g + " not included in parent transaction.");
                s = null;
              }
            }), d && s && !s.active && (s = null);
          }
        } catch (g) {
          return s ? s._promise(null, function(w, p) {
            p(g);
          }) : Ue(g);
        }
        var m = (function g(w, p, T, v, b) {
          return z.resolve().then(function() {
            var E = ee.transless || ee, x = w._createTransaction(p, T, w._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === k.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return g(w, p, T, null, b);
              })) : Ue(N);
            }
            var S, P = vt(b);
            return P && un(), E = z.follow(function() {
              var N;
              (S = b.call(x, x)) && (P ? (N = Dt.bind(null, null), S.then(N, N)) : typeof S.next == "function" && typeof S.throw == "function" && (S = Gr(S)));
            }, E), (S && typeof S.then == "function" ? z.resolve(S).then(function(N) {
              return x.active ? N : Ue(new K.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return S;
            })).then(function(N) {
              return v && x._resolve(), x._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return x._reject(N), Ue(N);
            });
          });
        }).bind(null, this, c, l, s, r);
        return s ? s._promise(c, m, "lock") : ee.trans ? Wt(ee.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!D(this._allTables, e)) throw new K.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Le);
      function Le(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Le.dependencies;
        this._options = t = u({ addons: Le.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, l, d, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: A, dbReadyPromise: null, cancelOpen: A, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new z(function(p) {
          g.dbReadyResolve = p;
        }), g.openCanceller = new z(function(p, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = vn(this, "populate", "blocked", "versionchange", "close", { ready: [ae, A] }), this.once = function(p, T) {
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(p).unsubscribe(v), T.apply(r, b);
          };
          return r.on(p, v);
        }, this.on.ready.subscribe = Ve(this.on.ready.subscribe, function(p) {
          return function(T, v) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || z.resolve().then(T), v && p(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && p(T)) : (p(T), b = r, v || p(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, gn(os.prototype, function(S, x) {
          this.db = s;
          var v = Pi, b = null;
          if (x) try {
            v = x();
          } catch (P) {
            b = P;
          }
          var E = S._ctx, x = E.table, S = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: S !== j ? S : null };
        })), this.Table = (c = this, gn(Di.prototype, function(p, T, v) {
          this.db = c, this._tx = v, this.name = p, this.schema = T, this.hook = c._allTables[p] ? c._allTables[p].hook : vn(null, { creating: [se, A], reading: [Z, j], updating: [fe, A], deleting: [re, A] });
        })), this.Transaction = (l = this, gn(us.prototype, function(p, T, v, b, E) {
          var x = this;
          p !== "readonly" && T.forEach(function(S) {
            S = (S = v[S]) === null || S === void 0 ? void 0 : S.yProps, S && (T = T.concat(S.map(function(P) {
              return P.updatesTable;
            })));
          }), this.db = l, this.mode = p, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = vn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new z(function(S, P) {
            x._resolve = S, x._reject = P;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(S) {
            var P = x.active;
            return x.active = !1, x.on.error.fire(S), x.parent ? x.parent._reject(S) : P && x.idbtrans && x.idbtrans.abort(), Ue(S);
          });
        })), this.Version = (d = this, gn(ms.prototype, function(p) {
          this.db = d, this._cfg = { version: p, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (m = this, gn(Mi.prototype, function(p, T, v) {
          if (this.db = m, this._ctx = { table: p, index: T === ":id" ? null : T, or: v }, this._cmp = this._ascending = be, this._descending = function(b, E) {
            return be(E, b);
          }, this._max = function(b, E) {
            return 0 < be(b, E) ? b : E;
          }, this._min = function(b, E) {
            return be(b, E) < 0 ? b : E;
          }, this._IDBKeyRange = m._deps.IDBKeyRange, !this._IDBKeyRange) throw new K.MissingAPI();
        })), this.on("versionchange", function(p) {
          0 < p.newVersion ? console.warn("Another connection wants to upgrade database '".concat(r.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(r.name, "'. Closing db now to resume the delete request.")), r.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(p) {
          !p.newVersion || p.newVersion < p.oldVersion ? console.warn("Dexie.delete('".concat(r.name, "') was blocked")) : console.warn("Upgrade '".concat(r.name, "' blocked by other connection holding version ").concat(p.oldVersion / 10));
        }), this._maxKey = xn(t.IDBKeyRange), this._createTransaction = function(p, T, v, b) {
          return new r.Transaction(p, T, v, r._options.chromeTransactionDurability, b);
        }, this._fireOnBlocked = function(p) {
          r.on("blocked").fire(p), cn.filter(function(T) {
            return T.name === r.name && T !== r && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(p);
          });
        }, this.use(bs), this.use(Es), this.use(_s), this.use(vs), this.use(gs);
        var w = new Proxy(this, { get: function(p, T, v) {
          if (T === "_vip") return !0;
          if (T === "table") return function(E) {
            return ir(r.table(E), w);
          };
          var b = Reflect.get(p, T, v);
          return b instanceof Di ? ir(b, w) : T === "tables" ? b.map(function(E) {
            return ir(E, w);
          }) : T === "_createTransaction" ? function() {
            return ir(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(p) {
          return p(r);
        });
      }
      var or, mt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ts = (zr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, zr.prototype[mt] = function() {
        return this;
      }, zr);
      function zr(e) {
        this._subscribe = e;
      }
      try {
        or = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        or = { indexedDB: null, IDBKeyRange: null };
      }
      function eo(e) {
        var t, r = !1, o = new Ts(function(s) {
          var c = vt(e), l, d = !1, m = {}, g = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, l && l.abort(), p && jt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(w);
          var p = !1, T = function() {
            return Ar(b);
          }, v = function(E) {
            tr(m, E), Vr(g, m) && T();
          }, b = function() {
            var E, x, S;
            !d && or.indexedDB && (m = {}, E = {}, l && l.abort(), l = new AbortController(), S = function(P) {
              var N = sn();
              try {
                c && un();
                var C = Ct(e, P);
                return C = c ? C.finally(Dt) : C;
              } finally {
                N && an();
              }
            }(x = { subscr: E, signal: l.signal, requery: T, querier: e, trans: null }), Promise.resolve(S).then(function(P) {
              r = !0, t = P, d || x.signal.aborted || (m = {}, function(N) {
                for (var C in N) if (D(N, C)) return;
                return 1;
              }(g = E) || p || (jt(wn, v), p = !0), Ar(function() {
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
      var Qt = At;
      function Jr(e) {
        var t = Bt;
        try {
          Bt = !0, jt.storagemutated.fire(e), Wr(e, !0);
        } finally {
          Bt = t;
        }
      }
      X(Qt, u(u({}, He), { delete: function(e) {
        return new Qt(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new Qt(e, { addons: [] }).open().then(function(t) {
          return t.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return t = Qt.dependencies, r = t.indexedDB, t = t.IDBKeyRange, (qr(r) ? Promise.resolve(r.databases()).then(function(o) {
            return o.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== Vn;
            });
          }) : Mr(r, t).toCollection().primaryKeys()).then(e);
        } catch {
          return Ue(new K.MissingAPI());
        }
        var t, r;
      }, defineClass: function() {
        return function(e) {
          I(this, e);
        };
      }, ignoreTransaction: function(e) {
        return ee.trans ? Wt(ee.transless, e) : e();
      }, vip: Ur, async: function(e) {
        return function() {
          try {
            var t = Gr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : z.resolve(t);
          } catch (r) {
            return Ue(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Gr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : z.resolve(o);
        } catch (s) {
          return Ue(s);
        }
      }, currentTransaction: { get: function() {
        return ee.trans || null;
      } }, waitFor: function(e, t) {
        return t = z.resolve(typeof e == "function" ? Qt.ignoreTransaction(e) : e).timeout(t || 6e4), ee.trans ? ee.trans.waitFor(t) : t;
      }, Promise: z, debug: { get: function() {
        return ie;
      }, set: function(e) {
        Te(e);
      } }, derive: de, extend: I, props: X, override: Ve, Events: vn, on: jt, liveQuery: eo, extendObservabilitySet: tr, getByKeyPath: H, setByKeyPath: W, delByKeyPath: function(e, t) {
        typeof t == "string" ? W(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          W(e, r, void 0);
        });
      }, shallowClone: le, deepClone: ke, getObjectDiff: Yr, cmp: be, asap: $, minKey: -1 / 0, addons: [], connections: cn, errnames: k, dependencies: or, cache: Xt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Qt.maxKey = xn(Qt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (jt(wn, function(e) {
        Bt || (e = new CustomEvent(Cr, { detail: e }), Bt = !0, dispatchEvent(e), Bt = !1);
      }), addEventListener(Cr, function(e) {
        e = e.detail, Bt || Jr(e);
      }));
      var pn, Bt = !1, to = function() {
      };
      return typeof BroadcastChannel < "u" && ((to = function() {
        (pn = new BroadcastChannel(Cr)).onmessage = function(e) {
          return e.data && Jr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), jt(wn, function(e) {
        Bt || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!At.disableBfCache && e.persisted) {
          ie && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = cn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !At.disableBfCache && e.persisted && (ie && console.debug("Dexie: handling persisted pageshow"), to(), Jr({ all: new Qe(-1 / 0, [[]]) }));
      })), z.rejectionMapper = function(e, t) {
        return !e || e instanceof It || e instanceof TypeError || e instanceof SyntaxError || !e.name || !q[e.name] ? e : (t = new q[e.name](t || e.message, e), "stack" in e && te(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Te(ie), u(At, Object.freeze({ __proto__: null, Dexie: At, liveQuery: eo, Entity: Ii, cmp: be, PropModification: bn, replacePrefix: function(e, t) {
        return new bn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new bn({ add: e });
      }, remove: function(e) {
        return new bn({ remove: e });
      }, default: At, RangeSet: Qe, mergeRanges: On, rangesOverlap: $i }), { default: At }), At;
    });
  }(Do)), Do.exports;
}
var Ah = Sh();
const oa = /* @__PURE__ */ Th(Ah), Tu = Symbol.for("Dexie"), sa = globalThis[Tu] || (globalThis[Tu] = oa);
if (oa.semVer !== sa.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${oa.semVer} and ${sa.semVer}`);
const {
  liveQuery: Mc,
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
function qc(n, i) {
  const a = Zt(i?.initialValue), u = n.subscribe({
    next: (f) => a.value = f,
    error: i?.onError
  });
  return Ud(() => {
    u.unsubscribe();
  }), a;
}
async function Ou() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.db.table(si).toArray();
}
async function kh(n, i) {
  const a = on();
  ot(a.sdk, "SDK not initialized");
  const u = a.sdk.db.table(si);
  if (await u.where("filename").equals(n.name).first())
    throw new Error("A file with the same name already exists.");
  const h = new Blob([await n.arrayBuffer()], { type: n.type }), y = {
    id: crypto.randomUUID(),
    filename: n.name,
    file: h
  };
  await u.add(y);
  const O = await a.sdk.findRecordById(i);
  return ot(O, "Parent not found"), await a.sdk.db.table(dt).update(O.id, {
    attributes: [...O.attributes, { name: "fileReference", value: n.name }]
  }), y;
}
async function Ph(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.db.table(si).get(n);
  ot(a, "Attachment not found"), await i.sdk.db.table(si).delete(n), await Uc(a.filename);
}
async function Uc(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.db.table(dt).where("tagName").equals("BehaviorDescription").and((u) => ge(u, "fileReference") === n).first();
  ot(a, "Behavior description not found"), await i.sdk.db.table(dt).update(a.id, {
    attributes: a.attributes.filter(
      (u) => u.name !== "fileReference"
    )
  });
}
const Ih = { class: "space-y-2" }, Nh = {
  key: 0,
  role: "alert",
  class: "alert alert-error alert-soft flex items-center justify-between"
}, Ch = {
  key: 1,
  class: "max-w-max flex items-center justify-between gap-4"
}, Dh = ["download", "title"], Rh = { class: "group-hover:underline underline-offset-2" }, Kh = /* @__PURE__ */ Oo({
  __name: "file-attachements",
  props: {
    behaviorDescription: {}
  },
  async setup(n) {
    let i, a;
    const u = n, f = Zt(!1), h = Zt("");
    async function y(oe) {
      f.value = !1, h.value = "";
      const te = oe.target;
      ot(oe.dataTransfer, "Invalid drop event");
      const { files: de } = oe.dataTransfer;
      if (oe.dataTransfer.clearData(), de.length == 0) return;
      if (de.length > 1) {
        h.value = "You cannot upload multiple files.";
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
    const I = Mc(Ou), L = qc(I, {
      initialValue: ([i, a] = go(() => Ou()), i = await i, a(), i)
    }), B = fr(() => {
      const oe = u.behaviorDescription?.fileReference, te = L.value.find((de) => de.filename == oe);
      return !te && oe ? {
        id: null,
        filename: oe,
        file: ""
      } : te;
    });
    async function D(oe) {
      let te = oe.currentTarget;
      if (ot(B.value, "Invalid download attempt"), !B.value.id) {
        alert("This file has been manually attached and cannot be downloaded.");
        return;
      }
      if (!te.href) {
        oe.preventDefault();
        const de = URL.createObjectURL(B.value.file);
        te.href = de, te.click(), URL.revokeObjectURL(de);
      }
    }
    async function X() {
      ot(B.value, "Invalid delete action"), B.value.id ? Ph(B.value.id) : Uc(B.value.filename);
    }
    return (oe, te) => (Xe(), Ze("div", Ih, [
      te[10] || (te[10] = _e("h2", { class: "font-medium" }, "Attached Behavior Description File:", -1)),
      B.value ? (Xe(), Ze("div", Ch, [
        _e("a", {
          class: po(["block link link-primary no-underline group", { "hover:cursor-not-allowed": !B.value.id }]),
          onClick: D,
          download: B.value?.filename,
          title: B.value.id ? void 0 : "This file has been manually attached and cannot be downloaded."
        }, [
          te[8] || (te[8] = _e("svg", {
            class: "size-4 inline fill-current mr-1.5",
            viewBox: "0 -960 960 960"
          }, [
            _e("path", { d: "m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z" })
          ], -1)),
          _e("span", Rh, yt(B.value.filename), 1)
        ], 10, Dh),
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
        onSubmit: te[4] || (te[4] = di(() => {
        }, ["prevent"])),
        class: "flex flex-col gap-4 max-w-xs"
      }, [
        h.value ? (Xe(), Ze("div", Nh, [
          mn(yt(h.value) + " ", 1),
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
        ])) : Sn("", !0),
        _e("label", {
          onDragenter: te[1] || (te[1] = di((de) => f.value = !0, ["prevent"])),
          onDragover: te[2] || (te[2] = di((de) => f.value = !0, ["prevent"])),
          onDragleave: te[3] || (te[3] = di((de) => f.value = !1, ["prevent"])),
          onDrop: di(y, ["prevent"]),
          class: po(["border border-dashed rounded-md px-4 py-4 cursor-pointer text-center font-medium transition-colors flex flex-col gap-1", {
            "border-primary bg-cyan-50 text-cyan-900": f.value,
            "border-gray-400 text-gray-600 hover:border-primary hover:bg-cyan-50 hover:text-cyan-900": !f.value
          }])
        }, [
          te[6] || (te[6] = mn(" Drop a file into this zone ")),
          te[7] || (te[7] = _e("span", { class: "font-light text-sm" }, "or click to select from your file system.", -1)),
          _e("input", {
            name: "file",
            type: "file",
            hidden: "",
            accept: ".xml, .pdf, image/png, image/jpeg, .txt",
            onChange: O
          }, null, 32)
        ], 34)
      ], 32))
    ]));
  }
}), jh = ["value"], Bh = { class: "w-full my-8" }, Fh = { class: "pr-3" }, Mh = { class: "font-medium text-lg" }, qh = { key: 0 }, Uh = { key: 1 }, Lh = { class: "font-medium text-lg" }, Vh = { key: 0 }, $h = { key: 1 }, Hh = { class: "*:py-4" }, Wh = /* @__PURE__ */ Oo({
  __name: "behavior-description-editor",
  async setup(n) {
    let i, a;
    const u = on(), f = Zt(""), h = qc(Mc(wu), {
      initialValue: ([i, a] = go(() => wu()), i = await i, a(), i)
    }), y = fr(
      () => h.value.find((B) => B.id === f.value)
    ), O = fr(() => {
      if (!y.value) return [];
      const { inputVars: B, outputVars: D } = y.value, X = Math.max(B.length, D.length);
      return Array.from({ length: X }, (oe, te) => ({
        inputVar: B[te] ?? null,
        outputVar: D[te] ?? null
      }));
    });
    async function I(B) {
      const D = await u.sdk.createRecord({
        tagName: "InputVar",
        attributes: gu(B),
        children: [],
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        parent: { id: f.value, tagName: "BehaviorDescription" },
        value: ""
      }), X = await u.sdk.findRecordById(f.value);
      ot(X, "BehaviorDescription not found"), await u.sdk.ensureRelationship(X, D);
    }
    async function L(B) {
      const D = await u.sdk.createRecord({
        tagName: "OutputVar",
        attributes: gu(B),
        children: [],
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        parent: { id: f.value, tagName: "BehaviorDescription" },
        value: ""
      }), X = await u.sdk.findRecordById(f.value);
      ot(X, "BehaviorDescription not found"), await u.sdk.ensureRelationship(X, D);
    }
    return (B, D) => (Xe(), Ze(bt, null, [
      D[9] || (D[9] = _e("h1", { class: "font-bold text-4xl my-4" }, "Behavior Description Editor", -1)),
      D[10] || (D[10] = _e("label", { for: "behavior-select" }, "Element:", -1)),
      D[11] || (D[11] = mn()),
      D[12] || (D[12] = _e("br", null, null, -1)),
      ri(_e("select", {
        "onUpdate:modelValue": D[0] || (D[0] = (X) => f.value = X),
        name: "behavior",
        id: "behavior-select",
        class: "border py-1"
      }, [
        D[1] || (D[1] = _e("option", {
          value: "",
          disabled: ""
        }, "No behavior description selected", -1)),
        (Xe(!0), Ze(bt, null, hi(Ft(h), (X) => (Xe(), Ze("option", {
          key: X.id,
          value: X.id
        }, yt(X.name), 9, jh))), 128))
      ], 512), [
        [io, f.value]
      ]),
      y.value ? (Xe(), Ze(bt, { key: 0 }, [
        _e("table", Bh, [
          D[8] || (D[8] = _e("thead", null, [
            _e("tr", { class: "text-left text-2xl" }, [
              _e("th", null, "Input Variables"),
              _e("th", null, "Output Variables")
            ])
          ], -1)),
          _e("tbody", null, [
            (Xe(!0), Ze(bt, null, hi(O.value, (X, oe) => (Xe(), Ze("tr", {
              key: oe,
              class: "*:align-top *:py-2"
            }, [
              _e("td", Fh, [
                X.inputVar ? (Xe(), Ze(bt, { key: 0 }, [
                  _e("div", Mh, yt(X.inputVar.varName), 1),
                  Ft(bu)(X.inputVar) ? (Xe(), Ze("div", qh, [
                    mn(yt(X.inputVar.dataName) + " ", 1),
                    D[2] || (D[2] = _e("span", { class: "bg-blue-200 text-xs px-1 rounded" }, "dataName", -1))
                  ])) : Sn("", !0),
                  Ft(Vd)(X.inputVar) ? (Xe(), Ze("div", Uh, [
                    mn(yt(X.inputVar.inputName) + " ", 1),
                    D[3] || (D[3] = _e("span", { class: "bg-orange-200 text-xs px-1 rounded" }, "inputName", -1))
                  ])) : Sn("", !0)
                ], 64)) : Sn("", !0)
              ]),
              _e("td", null, [
                X.outputVar ? (Xe(), Ze(bt, { key: 0 }, [
                  _e("div", Lh, yt(X.outputVar.varName), 1),
                  Ft(bu)(X.outputVar) ? (Xe(), Ze("div", Vh, [
                    mn(yt(X.outputVar.dataName) + " ", 1),
                    D[4] || (D[4] = _e("span", { class: "bg-blue-200 text-xs px-1 rounded" }, "dataName", -1))
                  ])) : Sn("", !0),
                  Ft($d)(X.outputVar) ? (Xe(), Ze("div", $h, [
                    mn(yt(X.outputVar.outputName) + " ", 1),
                    D[5] || (D[5] = _e("span", { class: "bg-orange-200 text-xs px-1 rounded" }, "outputName", -1))
                  ])) : Sn("", !0)
                ], 64)) : Sn("", !0)
              ])
            ]))), 128))
          ]),
          _e("tfoot", null, [
            _e("tr", Hh, [
              _e("td", null, [
                kt(xu, {
                  type: "input",
                  onSubmit: I,
                  behaviorDescription: y.value
                }, {
                  default: $s(() => D[6] || (D[6] = [
                    mn(" + Input Variable ")
                  ])),
                  _: 1,
                  __: [6]
                }, 8, ["behaviorDescription"])
              ]),
              _e("td", null, [
                kt(xu, {
                  type: "output",
                  onSubmit: L,
                  behaviorDescription: y.value
                }, {
                  default: $s(() => D[7] || (D[7] = [
                    mn(" + Output Variable ")
                  ])),
                  _: 1,
                  __: [7]
                }, 8, ["behaviorDescription"])
              ])
            ])
          ])
        ]),
        kt(Kh, { behaviorDescription: y.value }, null, 8, ["behaviorDescription"])
      ], 64)) : Sn("", !0)
    ], 64));
  }
}), Gh = ["id"], Yh = /* @__PURE__ */ Oo({
  __name: "app",
  props: {
    api: {}
  },
  async setup(n) {
    let i, a;
    const u = n, f = on(), h = "logic-editor", y = Zt();
    return [i, a] = go(() => f.initApp(u.api.activeFileName.value)), await i, a(), ac(() => {
      y.value = u.api.activeFileName.subscribe((O) => {
        f.initApp(O);
      });
    }), Oa(() => {
      y.value?.();
    }), (O, I) => (Xe(), Ze("section", {
      id: Ft(h),
      class: "h-full px-4"
    }, [
      kt(Wh)
    ], 8, Gh));
  }
});
function yp(n, i) {
  if (!document.getElementById(n)) {
    console.error({ msg: "could not find root element", rootId: n });
    return;
  }
  const u = md(
    /* @__PURE__ */ Oo({
      props: { api: i },
      setup(f) {
        return () => Ga(Sf, Ga(Yh, { ...f }));
      }
    }),
    { api: i }
  );
  return u.use(gd()), u.mount(`#${n}`), u.unmount;
}
export {
  yp as default
};
