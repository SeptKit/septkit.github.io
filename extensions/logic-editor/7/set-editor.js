(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`select[data-v-bff78c81]:has(option[value=""]){color:var(--color-neutral-500)}:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true]))[data-v-bff78c81]{cursor:not-allowed}:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) select[data-v-bff78c81],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) fieldset[data-v-bff78c81],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) textarea[data-v-bff78c81],:is(:has(>select[aria-disabled=true]),:has(>fieldset[aria-disabled=true]),:has(>textarea[aria-disabled=true]),:has(>input[aria-disabled=true])) input[data-v-bff78c81]{pointer-events:none;-webkit-user-select:none;user-select:none}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-space-y-reverse:0;--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-orange-200:oklch(90.1% .076 70.697);--color-cyan-50:oklch(98.4% .019 200.873);--color-cyan-900:oklch(39.8% .07 227.392);--color-blue-200:oklch(88.2% .059 254.128);--color-gray-400:oklch(70.7% .022 261.325);--color-gray-600:oklch(44.6% .03 256.802);--color-neutral-400:oklch(70.8% 0 0);--color-neutral-500:oklch(55.6% 0 0);--color-neutral-700:oklch(37.1% 0 0);--color-neutral-800:oklch(26.9% 0 0);--spacing:.25rem;--container-xs:20rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--text-2xl:1.5rem;--text-2xl--line-height:calc(2/1.5);--text-4xl:2.25rem;--text-4xl--line-height:calc(2.5/2.25);--font-weight-light:300;--font-weight-medium:500;--font-weight-bold:700;--radius-md:.375rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-300)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.top-\\[1\\.5rem\\]{top:1.5rem}.right-\\[1\\.5rem\\]{right:1.5rem}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-2{grid-column-start:2}.my-4{margin-block:calc(var(--spacing)*4)}.my-8{margin-block:calc(var(--spacing)*8)}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-4{margin-top:calc(var(--spacing)*4)}.mr-1\\.5{margin-right:calc(var(--spacing)*1.5)}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.hidden{display:none}.inline{display:inline}.table{display:table}.size-4{width:calc(var(--spacing)*4);height:calc(var(--spacing)*4)}.size-4\\.5{width:calc(var(--spacing)*4.5);height:calc(var(--spacing)*4.5)}.h-full{height:100%}.w-full{width:100%}.max-w-\\[34rem\\]{max-width:34rem}.max-w-max{max-width:max-content}.max-w-xs{max-width:var(--container-xs)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.cursor-pointer{cursor:pointer}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.items-center{align-items:center}.justify-between{justify-content:space-between}.gap-1{gap:calc(var(--spacing)*1)}.gap-2{gap:calc(var(--spacing)*2)}.gap-3{gap:calc(var(--spacing)*3)}.gap-4{gap:calc(var(--spacing)*4)}:where(.space-y-2>:not(:last-child)){--tw-space-y-reverse:0;margin-block-start:calc(calc(var(--spacing)*2)*var(--tw-space-y-reverse));margin-block-end:calc(calc(var(--spacing)*2)*calc(1 - var(--tw-space-y-reverse)))}.rounded{border-radius:.25rem}.rounded-md{border-radius:var(--radius-md)}.border{border-style:var(--tw-border-style);border-width:1px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.alert-error{border-color:var(--color-error);color:var(--color-error-content);--alert-color:var(--color-error)}.border-gray-400{border-color:var(--color-gray-400)}.border-primary{border-color:var(--color-primary)}.bg-blue-200{background-color:var(--color-blue-200)}.bg-cyan-50{background-color:var(--color-cyan-50)}.bg-orange-200{background-color:var(--color-orange-200)}.fill-current{fill:currentColor}.px-1{padding-inline:calc(var(--spacing)*1)}.px-4{padding-inline:calc(var(--spacing)*4)}.py-1{padding-block:calc(var(--spacing)*1)}.py-4{padding-block:calc(var(--spacing)*4)}.pr-3{padding-right:calc(var(--spacing)*3)}.text-center{text-align:center}.text-left{text-align:left}.text-2xl{font-size:var(--text-2xl);line-height:var(--tw-leading,var(--text-2xl--line-height))}.text-4xl{font-size:var(--text-4xl);line-height:var(--tw-leading,var(--text-4xl--line-height))}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-light{--tw-font-weight:var(--font-weight-light);font-weight:var(--font-weight-light)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.link-primary{color:var(--color-primary)}@media (hover:hover){.link-primary:hover{color:var(--color-primary)}@supports (color:color-mix(in lab,red,red)){.link-primary:hover{color:color-mix(in oklab,var(--color-primary)80%,#000)}}}.text-cyan-900{color:var(--color-cyan-900)}.text-gray-600{color:var(--color-gray-600)}.text-neutral-400{color:var(--color-neutral-400)}.text-neutral-700{color:var(--color-neutral-700)}.no-underline{text-decoration-line:none}.underline-offset-2{text-underline-offset:2px}.saturate-75{--tw-saturate:saturate(75%);filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition-colors{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:not(.btn-active,:hover,:active:focus,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}@media (hover:none){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-fg:var(--btn-color,var(--color-base-content));--btn-bg:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-content))8%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:var(--btn-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-content))10%,var(--color-base-100))}}.btn-soft:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-noise:none}}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}.radio-neutral{--input-color:var(--color-neutral)}:is(.\\*\\:flex>*){display:flex}:is(.\\*\\:items-center>*){align-items:center}:is(.\\*\\:gap-1\\.5>*){gap:calc(var(--spacing)*1.5)}:is(.\\*\\:py-2>*){padding-block:calc(var(--spacing)*2)}:is(.\\*\\:py-4>*){padding-block:calc(var(--spacing)*4)}:is(.\\*\\:align-top>*){vertical-align:top}@media (hover:hover){.group-hover\\:underline:is(:where(.group):hover *){text-decoration-line:underline}.hover\\:cursor-not-allowed:hover{cursor:not-allowed}.hover\\:border-primary:hover{border-color:var(--color-primary)}.hover\\:bg-cyan-50:hover{background-color:var(--color-cyan-50)}.hover\\:text-cyan-900:hover{color:var(--color-cyan-900)}.hover\\:text-neutral-800:hover{color:var(--color-neutral-800)}}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true]{cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true]{color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true])::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(select[aria-disabled=true],fieldset[aria-disabled=true],textarea[aria-disabled=true],input[aria-disabled=true])::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-space-y-reverse{syntax:"*";inherits:false;initial-value:0}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
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
const ct = {}, pi = [], jn = () => {
}, qc = () => !1, Vo = (n) => n.charCodeAt(0) === 111 && n.charCodeAt(1) === 110 && // uppercase letter
(n.charCodeAt(2) > 122 || n.charCodeAt(2) < 97), ua = (n) => n.startsWith("onUpdate:"), Vt = Object.assign, ca = (n, i) => {
  const a = n.indexOf(i);
  a > -1 && n.splice(a, 1);
}, Uc = Object.prototype.hasOwnProperty, st = (n, i) => Uc.call(n, i), Ne = Array.isArray, mi = (n) => xo(n) === "[object Map]", $o = (n) => xo(n) === "[object Set]", Ia = (n) => xo(n) === "[object Date]", qe = (n) => typeof n == "function", Tt = (n) => typeof n == "string", Pn = (n) => typeof n == "symbol", ht = (n) => n !== null && typeof n == "object", la = (n) => (ht(n) || qe(n)) && qe(n.then) && qe(n.catch), Su = Object.prototype.toString, xo = (n) => Su.call(n), Lc = (n) => xo(n).slice(8, -1), Ou = (n) => xo(n) === "[object Object]", fa = (n) => Tt(n) && n !== "NaN" && n[0] !== "-" && "" + parseInt(n, 10) === n, oo = /* @__PURE__ */ aa(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ho = (n) => {
  const i = /* @__PURE__ */ Object.create(null);
  return (a) => i[a] || (i[a] = n(a));
}, Vc = /-(\w)/g, wr = Ho(
  (n) => n.replace(Vc, (i, a) => a ? a.toUpperCase() : "")
), $c = /\B([A-Z])/g, ci = Ho(
  (n) => n.replace($c, "-$1").toLowerCase()
), Au = Ho((n) => n.charAt(0).toUpperCase() + n.slice(1)), Ss = Ho(
  (n) => n ? `on${Au(n)}` : ""
), br = (n, i) => !Object.is(n, i), Po = (n, ...i) => {
  for (let a = 0; a < n.length; a++)
    n[a](...i);
}, Bs = (n, i, a, u = !1) => {
  Object.defineProperty(n, i, {
    configurable: !0,
    enumerable: !1,
    writable: u,
    value: a
  });
}, ku = (n) => {
  const i = parseFloat(n);
  return isNaN(i) ? n : i;
}, Hc = (n) => {
  const i = Tt(n) ? Number(n) : NaN;
  return isNaN(i) ? n : i;
};
let Da;
const Wo = () => Da || (Da = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function da(n) {
  if (Ne(n)) {
    const i = {};
    for (let a = 0; a < n.length; a++) {
      const u = n[a], f = Tt(u) ? Xc(u) : da(u);
      if (f)
        for (const h in f)
          i[h] = f[h];
    }
    return i;
  } else if (Tt(n) || ht(n))
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
const Qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", zc = /* @__PURE__ */ aa(Qc);
function Pu(n) {
  return !!n || n === "";
}
function Jc(n, i) {
  if (n.length !== i.length) return !1;
  let a = !0;
  for (let u = 0; a && u < n.length; u++)
    a = _i(n[u], i[u]);
  return a;
}
function _i(n, i) {
  if (n === i) return !0;
  let a = Ia(n), u = Ia(i);
  if (a || u)
    return a && u ? n.getTime() === i.getTime() : !1;
  if (a = Pn(n), u = Pn(i), a || u)
    return n === i;
  if (a = Ne(n), u = Ne(i), a || u)
    return a && u ? Jc(n, i) : !1;
  if (a = ht(n), u = ht(i), a || u) {
    if (!a || !u)
      return !1;
    const f = Object.keys(n).length, h = Object.keys(i).length;
    if (f !== h)
      return !1;
    for (const y in n) {
      const S = n.hasOwnProperty(y), I = i.hasOwnProperty(y);
      if (S && !I || !S && I || !_i(n[y], i[y]))
        return !1;
    }
  }
  return String(n) === String(i);
}
function Zc(n, i) {
  return n.findIndex((a) => _i(a, i));
}
const Cu = (n) => !!(n && n.__v_isRef === !0), vt = (n) => Tt(n) ? n : n == null ? "" : Ne(n) || ht(n) && (n.toString === Su || !qe(n.toString)) ? Cu(n) ? vt(n.value) : JSON.stringify(n, Nu, 2) : String(n), Nu = (n, i) => Cu(i) ? Nu(n, i.value) : mi(i) ? {
  [`Map(${i.size})`]: [...i.entries()].reduce(
    (a, [u, f], h) => (a[Os(u, h) + " =>"] = f, a),
    {}
  )
} : $o(i) ? {
  [`Set(${i.size})`]: [...i.values()].map((a) => Os(a))
} : Pn(i) ? Os(i) : ht(i) && !Ne(i) && !Ou(i) ? String(i) : i, Os = (n, i = "") => {
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
class Iu {
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
function Du(n) {
  return new Iu(n);
}
function ha() {
  return Ut;
}
function Ru(n, i = !1) {
  Ut && Ut.cleanups.push(n);
}
let dt;
const As = /* @__PURE__ */ new WeakSet();
class Ku {
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
    this.flags |= 2, Ra(this), Bu(this);
    const i = dt, a = kn;
    dt = this, kn = !0;
    try {
      return this.fn();
    } finally {
      Mu(this), dt = i, kn = a, this.flags &= -3;
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
let ju = 0, so, ao;
function Fu(n, i = !1) {
  if (n.flags |= 8, i) {
    n.next = ao, ao = n;
    return;
  }
  n.next = so, so = n;
}
function pa() {
  ju++;
}
function ma() {
  if (--ju > 0)
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
function Bu(n) {
  for (let i = n.deps; i; i = i.nextDep)
    i.version = -1, i.prevActiveLink = i.dep.activeLink, i.dep.activeLink = i;
}
function Mu(n) {
  let i, a = n.depsTail, u = a;
  for (; u; ) {
    const f = u.prevDep;
    u.version === -1 ? (u === a && (a = f), ya(u), el(u)) : i = u, u.dep.activeLink = u.prevActiveLink, u.prevActiveLink = void 0, u = f;
  }
  n.deps = i, n.depsTail = a;
}
function Ms(n) {
  for (let i = n.deps; i; i = i.nextDep)
    if (i.dep.version !== i.version || i.dep.computed && (qu(i.dep.computed) || i.dep.version !== i.version))
      return !0;
  return !!n._dirty;
}
function qu(n) {
  if (n.flags & 4 && !(n.flags & 16) || (n.flags &= -17, n.globalVersion === mo) || (n.globalVersion = mo, !n.isSSR && n.flags & 128 && (!n.deps && !n._dirty || !Ms(n))))
    return;
  n.flags |= 2;
  const i = n.dep, a = dt, u = kn;
  dt = n, kn = !0;
  try {
    Bu(n);
    const f = n.fn(n._value);
    (i.version === 0 || br(f, n._value)) && (n.flags |= 128, n._value = f, i.version++);
  } catch (f) {
    throw i.version++, f;
  } finally {
    dt = a, kn = u, Mu(n), n.flags &= -3;
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
function el(n) {
  const { prevDep: i, nextDep: a } = n;
  i && (i.nextDep = a, n.prevDep = void 0), a && (a.prevDep = i, n.nextDep = void 0);
}
let kn = !0;
const Uu = [];
function dr() {
  Uu.push(kn), kn = !1;
}
function hr() {
  const n = Uu.pop();
  kn = n === void 0 ? !0 : n;
}
function Ra(n) {
  const { cleanup: i } = n;
  if (n.cleanup = void 0, i) {
    const a = dt;
    dt = void 0;
    try {
      i();
    } finally {
      dt = a;
    }
  }
}
let mo = 0;
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
    if (!dt || !kn || dt === this.computed)
      return;
    let a = this.activeLink;
    if (a === void 0 || a.sub !== dt)
      a = this.activeLink = new tl(dt, this), dt.deps ? (a.prevDep = dt.depsTail, dt.depsTail.nextDep = a, dt.depsTail = a) : dt.deps = dt.depsTail = a, Lu(a);
    else if (a.version === -1 && (a.version = this.version, a.nextDep)) {
      const u = a.nextDep;
      u.prevDep = a.prevDep, a.prevDep && (a.prevDep.nextDep = u), a.prevDep = dt.depsTail, a.nextDep = void 0, dt.depsTail.nextDep = a, dt.depsTail = a, dt.deps === a && (dt.deps = u);
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
const Ro = /* @__PURE__ */ new WeakMap(), oi = Symbol(
  ""
), qs = Symbol(
  ""
), yo = Symbol(
  ""
);
function Lt(n, i, a) {
  if (kn && dt) {
    let u = Ro.get(n);
    u || Ro.set(n, u = /* @__PURE__ */ new Map());
    let f = u.get(a);
    f || (u.set(a, f = new va()), f.map = u, f.key = a), f.track();
  }
}
function lr(n, i, a, u, f, h) {
  const y = Ro.get(n);
  if (!y) {
    mo++;
    return;
  }
  const S = (I) => {
    I && I.trigger();
  };
  if (pa(), i === "clear")
    y.forEach(S);
  else {
    const I = Ne(n), L = I && fa(a);
    if (I && a === "length") {
      const F = Number(u);
      y.forEach((R, H) => {
        (H === "length" || H === yo || !Pn(H) && H >= F) && S(R);
      });
    } else
      switch ((a !== void 0 || y.has(void 0)) && S(y.get(a)), L && S(y.get(yo)), i) {
        case "add":
          I ? L && S(y.get("length")) : (S(y.get(oi)), mi(n) && S(y.get(qs)));
          break;
        case "delete":
          I || (S(y.get(oi)), mi(n) && S(y.get(qs)));
          break;
        case "set":
          mi(n) && S(y.get(oi));
          break;
      }
  }
  ma();
}
function nl(n, i) {
  const a = Ro.get(n);
  return a && a.get(i);
}
function li(n) {
  const i = nt(n);
  return i === n ? i : (Lt(i, "iterate", yo), yn(n) ? i : i.map(Mt));
}
function Go(n) {
  return Lt(n = nt(n), "iterate", yo), n;
}
const rl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ks(this, Symbol.iterator, Mt);
  },
  concat(...n) {
    return li(this).concat(
      ...n.map((i) => Ne(i) ? li(i) : i)
    );
  },
  entries() {
    return ks(this, "entries", (n) => (n[1] = Mt(n[1]), n));
  },
  every(n, i) {
    return ur(this, "every", n, i, void 0, arguments);
  },
  filter(n, i) {
    return ur(this, "filter", n, i, (a) => a.map(Mt), arguments);
  },
  find(n, i) {
    return ur(this, "find", n, i, Mt, arguments);
  },
  findIndex(n, i) {
    return ur(this, "findIndex", n, i, void 0, arguments);
  },
  findLast(n, i) {
    return ur(this, "findLast", n, i, Mt, arguments);
  },
  findLastIndex(n, i) {
    return ur(this, "findLastIndex", n, i, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(n, i) {
    return ur(this, "forEach", n, i, void 0, arguments);
  },
  includes(...n) {
    return Ps(this, "includes", n);
  },
  indexOf(...n) {
    return Ps(this, "indexOf", n);
  },
  join(n) {
    return li(this).join(n);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...n) {
    return Ps(this, "lastIndexOf", n);
  },
  map(n, i) {
    return ur(this, "map", n, i, void 0, arguments);
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
    return ur(this, "some", n, i, void 0, arguments);
  },
  splice(...n) {
    return no(this, "splice", n);
  },
  toReversed() {
    return li(this).toReversed();
  },
  toSorted(n) {
    return li(this).toSorted(n);
  },
  toSpliced(...n) {
    return li(this).toSpliced(...n);
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
const il = Array.prototype;
function ur(n, i, a, u, f, h) {
  const y = Go(n), S = y !== n && !yn(n), I = y[i];
  if (I !== il[i]) {
    const R = I.apply(n, h);
    return S ? Mt(R) : R;
  }
  let L = a;
  y !== n && (S ? L = function(R, H) {
    return a.call(this, Mt(R), H, n);
  } : a.length > 2 && (L = function(R, H) {
    return a.call(this, R, H, n);
  }));
  const F = I.call(y, L, u);
  return S && f ? f(F) : F;
}
function Ka(n, i, a, u) {
  const f = Go(n);
  let h = a;
  return f !== n && (yn(n) ? a.length > 3 && (h = function(y, S, I) {
    return a.call(this, y, S, I, n);
  }) : h = function(y, S, I) {
    return a.call(this, y, Mt(S), I, n);
  }), f[i](h, ...u);
}
function Ps(n, i, a) {
  const u = nt(n);
  Lt(u, "iterate", yo);
  const f = u[i](...a);
  return (f === -1 || f === !1) && _a(a[0]) ? (a[0] = nt(a[0]), u[i](...a)) : f;
}
function no(n, i, a = []) {
  dr(), pa();
  const u = nt(n)[i].apply(n, a);
  return ma(), hr(), u;
}
const ol = /* @__PURE__ */ aa("__proto__,__v_isRef,__isVue"), Vu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((n) => n !== "arguments" && n !== "caller").map((n) => Symbol[n]).filter(Pn)
);
function sl(n) {
  Pn(n) || (n = String(n));
  const i = nt(this);
  return Lt(i, "has", n), i.hasOwnProperty(n);
}
class $u {
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
      return u === (f ? h ? yl : Yu : h ? Gu : Wu).get(i) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(i) === Object.getPrototypeOf(u) ? i : void 0;
    const y = Ne(i);
    if (!f) {
      let I;
      if (y && (I = rl[a]))
        return I;
      if (a === "hasOwnProperty")
        return sl;
    }
    const S = Reflect.get(
      i,
      a,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      _t(i) ? i : u
    );
    return (Pn(a) ? Vu.has(a) : ol(a)) || (f || Lt(i, "get", a), h) ? S : _t(S) ? y && fa(a) ? S : S.value : ht(S) ? f ? Xu(S) : Yo(S) : S;
  }
}
class Hu extends $u {
  constructor(i = !1) {
    super(!1, i);
  }
  set(i, a, u, f) {
    let h = i[a];
    if (!this._isShallow) {
      const I = xr(h);
      if (!yn(u) && !xr(u) && (h = nt(h), u = nt(u)), !Ne(i) && _t(h) && !_t(u))
        return I ? !1 : (h.value = u, !0);
    }
    const y = Ne(i) && fa(a) ? Number(a) < i.length : st(i, a), S = Reflect.set(
      i,
      a,
      u,
      _t(i) ? i : f
    );
    return i === nt(f) && (y ? br(u, h) && lr(i, "set", a, u) : lr(i, "add", a, u)), S;
  }
  deleteProperty(i, a) {
    const u = st(i, a);
    i[a];
    const f = Reflect.deleteProperty(i, a);
    return f && u && lr(i, "delete", a, void 0), f;
  }
  has(i, a) {
    const u = Reflect.has(i, a);
    return (!Pn(a) || !Vu.has(a)) && Lt(i, "has", a), u;
  }
  ownKeys(i) {
    return Lt(
      i,
      "iterate",
      Ne(i) ? "length" : oi
    ), Reflect.ownKeys(i);
  }
}
class al extends $u {
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
const ul = /* @__PURE__ */ new Hu(), cl = /* @__PURE__ */ new al(), ll = /* @__PURE__ */ new Hu(!0);
const Us = (n) => n, Oo = (n) => Reflect.getPrototypeOf(n);
function fl(n, i, a) {
  return function(...u) {
    const f = this.__v_raw, h = nt(f), y = mi(h), S = n === "entries" || n === Symbol.iterator && y, I = n === "keys" && y, L = f[n](...u), F = a ? Us : i ? Ko : Mt;
    return !i && Lt(
      h,
      "iterate",
      I ? qs : oi
    ), {
      // iterator protocol
      next() {
        const { value: R, done: H } = L.next();
        return H ? { value: R, done: H } : {
          value: S ? [F(R[0]), F(R[1])] : F(R),
          done: H
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
function dl(n, i) {
  const a = {
    get(f) {
      const h = this.__v_raw, y = nt(h), S = nt(f);
      n || (br(f, S) && Lt(y, "get", f), Lt(y, "get", S));
      const { has: I } = Oo(y), L = i ? Us : n ? Ko : Mt;
      if (I.call(y, f))
        return L(h.get(f));
      if (I.call(y, S))
        return L(h.get(S));
      h !== y && h.get(f);
    },
    get size() {
      const f = this.__v_raw;
      return !n && Lt(nt(f), "iterate", oi), Reflect.get(f, "size", f);
    },
    has(f) {
      const h = this.__v_raw, y = nt(h), S = nt(f);
      return n || (br(f, S) && Lt(y, "has", f), Lt(y, "has", S)), f === S ? h.has(f) : h.has(f) || h.has(S);
    },
    forEach(f, h) {
      const y = this, S = y.__v_raw, I = nt(S), L = i ? Us : n ? Ko : Mt;
      return !n && Lt(I, "iterate", oi), S.forEach((F, R) => f.call(h, L(F), L(R), y));
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
        !i && !yn(f) && !xr(f) && (f = nt(f));
        const h = nt(this);
        return Oo(h).has.call(h, f) || (h.add(f), lr(h, "add", f, f)), this;
      },
      set(f, h) {
        !i && !yn(h) && !xr(h) && (h = nt(h));
        const y = nt(this), { has: S, get: I } = Oo(y);
        let L = S.call(y, f);
        L || (f = nt(f), L = S.call(y, f));
        const F = I.call(y, f);
        return y.set(f, h), L ? br(h, F) && lr(y, "set", f, h) : lr(y, "add", f, h), this;
      },
      delete(f) {
        const h = nt(this), { has: y, get: S } = Oo(h);
        let I = y.call(h, f);
        I || (f = nt(f), I = y.call(h, f)), S && S.call(h, f);
        const L = h.delete(f);
        return I && lr(h, "delete", f, void 0), L;
      },
      clear() {
        const f = nt(this), h = f.size !== 0, y = f.clear();
        return h && lr(
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
    a[f] = fl(f, n, i);
  }), a;
}
function ga(n, i) {
  const a = dl(n, i);
  return (u, f, h) => f === "__v_isReactive" ? !n : f === "__v_isReadonly" ? n : f === "__v_raw" ? u : Reflect.get(
    st(a, f) && f in u ? a : u,
    f,
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
const Wu = /* @__PURE__ */ new WeakMap(), Gu = /* @__PURE__ */ new WeakMap(), Yu = /* @__PURE__ */ new WeakMap(), yl = /* @__PURE__ */ new WeakMap();
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
  return n.__v_skip || !Object.isExtensible(n) ? 0 : vl(Lc(n));
}
function Yo(n) {
  return xr(n) ? n : ba(
    n,
    !1,
    ul,
    hl,
    Wu
  );
}
function bl(n) {
  return ba(
    n,
    !1,
    ll,
    pl,
    Gu
  );
}
function Xu(n) {
  return ba(
    n,
    !0,
    cl,
    ml,
    Yu
  );
}
function ba(n, i, a, u, f) {
  if (!ht(n) || n.__v_raw && !(i && n.__v_isReactive))
    return n;
  const h = gl(n);
  if (h === 0)
    return n;
  const y = f.get(n);
  if (y)
    return y;
  const S = new Proxy(
    n,
    h === 2 ? u : a
  );
  return f.set(n, S), S;
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
function nt(n) {
  const i = n && n.__v_raw;
  return i ? nt(i) : n;
}
function wa(n) {
  return !st(n, "__v_skip") && Object.isExtensible(n) && Bs(n, "__v_skip", !0), n;
}
const Mt = (n) => ht(n) ? Yo(n) : n, Ko = (n) => ht(n) ? Xu(n) : n;
function _t(n) {
  return n ? n.__v_isRef === !0 : !1;
}
function Zt(n) {
  return Qu(n, !1);
}
function Ls(n) {
  return Qu(n, !0);
}
function Qu(n, i) {
  return _t(n) ? n : new _l(n, i);
}
class _l {
  constructor(i, a) {
    this.dep = new va(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = a ? i : nt(i), this._value = a ? i : Mt(i), this.__v_isShallow = a;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(i) {
    const a = this._rawValue, u = this.__v_isShallow || yn(i) || xr(i);
    i = u ? i : nt(i), br(i, a) && (this._rawValue = i, this._value = u ? i : Mt(i), this.dep.trigger());
  }
}
function Bt(n) {
  return _t(n) ? n.value : n;
}
const wl = {
  get: (n, i, a) => i === "__v_raw" ? n : Bt(Reflect.get(n, i, a)),
  set: (n, i, a, u) => {
    const f = n[i];
    return _t(f) && !_t(a) ? (f.value = a, !0) : Reflect.set(n, i, a, u);
  }
};
function zu(n) {
  return _r(n) ? n : new Proxy(n, wl);
}
function xl(n) {
  const i = Ne(n) ? new Array(n.length) : {};
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
    return nl(nt(this._object), this._key);
  }
}
function Tl(n, i, a) {
  const u = n[i];
  return _t(u) ? u : new El(n, i, a);
}
class Sl {
  constructor(i, a, u) {
    this.fn = i, this.setter = a, this._value = void 0, this.dep = new va(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = mo - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !a, this.isSSR = u;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    dt !== this)
      return Fu(this, !0), !0;
  }
  get value() {
    const i = this.dep.track();
    return qu(this), i && (i.version = this.dep.version), this._value;
  }
  set value(i) {
    this.setter && this.setter(i);
  }
}
function Ol(n, i, a = !1) {
  let u, f;
  return qe(n) ? u = n : (u = n.get, f = n.set), new Sl(u, f, a);
}
const ko = {}, jo = /* @__PURE__ */ new WeakMap();
let ni;
function Al(n, i = !1, a = ni) {
  if (a) {
    let u = jo.get(a);
    u || jo.set(a, u = []), u.push(n);
  }
}
function kl(n, i, a = ct) {
  const { immediate: u, deep: f, once: h, scheduler: y, augmentJob: S, call: I } = a, L = (pe) => f ? pe : yn(pe) || f === !1 || f === 0 ? fr(pe, 1) : fr(pe);
  let F, R, H, ie, te = !1, fe = !1;
  if (_t(n) ? (R = () => n.value, te = yn(n)) : _r(n) ? (R = () => L(n), te = !0) : Ne(n) ? (fe = !0, te = n.some((pe) => _r(pe) || yn(pe)), R = () => n.map((pe) => {
    if (_t(pe))
      return pe.value;
    if (_r(pe))
      return L(pe);
    if (qe(pe))
      return I ? I(pe, 2) : pe();
  })) : qe(n) ? i ? R = I ? () => I(n, 2) : n : R = () => {
    if (H) {
      dr();
      try {
        H();
      } finally {
        hr();
      }
    }
    const pe = ni;
    ni = F;
    try {
      return I ? I(n, 3, [ie]) : n(ie);
    } finally {
      ni = pe;
    }
  } : R = jn, i && f) {
    const pe = R, ge = f === !0 ? 1 / 0 : f;
    R = () => fr(pe(), ge);
  }
  const Be = ha(), Pe = () => {
    F.stop(), Be && Be.active && ca(Be.effects, F);
  };
  if (h && i) {
    const pe = i;
    i = (...ge) => {
      pe(...ge), Pe();
    };
  }
  let Ie = fe ? new Array(n.length).fill(ko) : ko;
  const Fe = (pe) => {
    if (!(!(F.flags & 1) || !F.dirty && !pe))
      if (i) {
        const ge = F.run();
        if (f || te || (fe ? ge.some((Q, z) => br(Q, Ie[z])) : br(ge, Ie))) {
          H && H();
          const Q = ni;
          ni = F;
          try {
            const z = [
              ge,
              // pass undefined as the old value when it's changed for the first time
              Ie === ko ? void 0 : fe && Ie[0] === ko ? [] : Ie,
              ie
            ];
            Ie = ge, I ? I(i, 3, z) : (
              // @ts-expect-error
              i(...z)
            );
          } finally {
            ni = Q;
          }
        }
      } else
        F.run();
  };
  return S && S(Fe), F = new Ku(R), F.scheduler = y ? () => y(Fe, !1) : Fe, ie = (pe) => Al(pe, !1, F), H = F.onStop = () => {
    const pe = jo.get(F);
    if (pe) {
      if (I)
        I(pe, 4);
      else
        for (const ge of pe) ge();
      jo.delete(F);
    }
  }, i ? u ? Fe(!0) : Ie = F.run() : y ? y(Fe.bind(null, !0), !0) : F.run(), Pe.pause = F.pause.bind(F), Pe.resume = F.resume.bind(F), Pe.stop = Pe, Pe;
}
function fr(n, i = 1 / 0, a) {
  if (i <= 0 || !ht(n) || n.__v_skip || (a = a || /* @__PURE__ */ new Set(), a.has(n)))
    return n;
  if (a.add(n), i--, _t(n))
    fr(n.value, i, a);
  else if (Ne(n))
    for (let u = 0; u < n.length; u++)
      fr(n[u], i, a);
  else if ($o(n) || mi(n))
    n.forEach((u) => {
      fr(u, i, a);
    });
  else if (Ou(n)) {
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
function Eo(n, i, a, u) {
  try {
    return u ? n(...u) : n();
  } catch (f) {
    To(f, i, a);
  }
}
function Fn(n, i, a, u) {
  if (qe(n)) {
    const f = Eo(n, i, a, u);
    return f && la(f) && f.catch((h) => {
      To(h, i, a);
    }), f;
  }
  if (Ne(n)) {
    const f = [];
    for (let h = 0; h < n.length; h++)
      f.push(Fn(n[h], i, a, u));
    return f;
  }
}
function To(n, i, a, u = !0) {
  const f = i ? i.vnode : null, { errorHandler: h, throwUnhandledErrorInProduction: y } = i && i.appContext.config || ct;
  if (i) {
    let S = i.parent;
    const I = i.proxy, L = `https://vuejs.org/error-reference/#runtime-${a}`;
    for (; S; ) {
      const F = S.ec;
      if (F) {
        for (let R = 0; R < F.length; R++)
          if (F[R](n, I, L) === !1)
            return;
      }
      S = S.parent;
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
  Pl(n, a, f, u, y);
}
function Pl(n, i, a, u = !0, f = !1) {
  if (f)
    throw n;
  console.error(n);
}
const en = [];
let Rn = -1;
const yi = [];
let yr = null, di = 0;
const Ju = /* @__PURE__ */ Promise.resolve();
let Fo = null;
function xa(n) {
  const i = Fo || Ju;
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
    !(n.flags & 2) && i >= vo(a) ? en.push(n) : en.splice(Cl(i), 0, n), n.flags |= 1, Zu();
  }
}
function Zu() {
  Fo || (Fo = Ju.then(tc));
}
function Vs(n) {
  Ne(n) ? yi.push(...n) : yr && n.id === -1 ? yr.splice(di + 1, 0, n) : n.flags & 1 || (yi.push(n), n.flags |= 1), Zu();
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
function ec(n) {
  if (yi.length) {
    const i = [...new Set(yi)].sort(
      (a, u) => vo(a) - vo(u)
    );
    if (yi.length = 0, yr) {
      yr.push(...i);
      return;
    }
    for (yr = i, di = 0; di < yr.length; di++) {
      const a = yr[di];
      a.flags & 4 && (a.flags &= -2), a.flags & 8 || a(), a.flags &= -2;
    }
    yr = null, di = 0;
  }
}
const vo = (n) => n.id == null ? n.flags & 2 ? -1 : 1 / 0 : n.id;
function tc(n) {
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
    Rn = -1, en.length = 0, ec(), Fo = null, (en.length || yi.length) && tc();
  }
}
let Nt = null, nc = null;
function Bo(n) {
  const i = Nt;
  return Nt = n, nc = n && n.type.__scopeId || null, i;
}
function $s(n, i = Nt, a) {
  if (!i || n._n)
    return n;
  const u = (...f) => {
    u._d && Wa(-1);
    const h = Bo(i);
    let y;
    try {
      y = n(...f);
    } finally {
      Bo(h), u._d && Wa(1);
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
    let [h, y, S, I = ct] = i[f];
    h && (qe(h) && (h = {
      mounted: h,
      updated: h
    }), h.deep && fr(y), u.push({
      dir: h,
      instance: a,
      value: y,
      oldValue: void 0,
      arg: S,
      modifiers: I
    }));
  }
  return n;
}
function ei(n, i, a, u) {
  const f = n.dirs, h = i && i.dirs;
  for (let y = 0; y < f.length; y++) {
    const S = f[y];
    h && (S.oldValue = h[y].value);
    let I = S.dir[u];
    I && (dr(), Fn(I, a, 8, [
      n.el,
      S,
      n,
      i
    ]), hr());
  }
}
const Nl = Symbol("_vte"), Il = (n) => n.__isTeleport;
function Ta(n, i) {
  n.shapeFlag & 6 && n.component ? (n.transition = i, Ta(n.component.subTree, i)) : n.shapeFlag & 128 ? (n.ssContent.transition = i.clone(n.ssContent), n.ssFallback.transition = i.clone(n.ssFallback)) : n.transition = i;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function So(n, i) {
  return qe(n) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Vt({ name: n.name }, i, { setup: n })
  ) : n;
}
function rc(n) {
  n.ids = [n.ids[0] + n.ids[2]++ + "-", 0, 0];
}
function uo(n, i, a, u, f = !1) {
  if (Ne(n)) {
    n.forEach(
      (te, fe) => uo(
        te,
        i && (Ne(i) ? i[fe] : i),
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
  const h = u.shapeFlag & 4 ? Jo(u.component) : u.el, y = f ? null : h, { i: S, r: I } = n, L = i && i.r, F = S.refs === ct ? S.refs = {} : S.refs, R = S.setupState, H = nt(R), ie = R === ct ? () => !1 : (te) => st(H, te);
  if (L != null && L !== I && (Tt(L) ? (F[L] = null, ie(L) && (R[L] = null)) : _t(L) && (L.value = null)), qe(I))
    Eo(I, S, 12, [y, F]);
  else {
    const te = Tt(I), fe = _t(I);
    if (te || fe) {
      const Be = () => {
        if (n.f) {
          const Pe = te ? ie(I) ? R[I] : F[I] : I.value;
          f ? Ne(Pe) && ca(Pe, h) : Ne(Pe) ? Pe.includes(h) || Pe.push(h) : te ? (F[I] = [h], ie(I) && (R[I] = F[I])) : (I.value = [h], n.k && (F[n.k] = I.value));
        } else te ? (F[I] = y, ie(I) && (R[I] = y)) : fe && (I.value = y, n.k && (F[n.k] = y));
      };
      y ? (Be.id = -1, hn(Be, a)) : Be();
    }
  }
}
Wo().requestIdleCallback;
Wo().cancelIdleCallback;
const vi = (n) => !!n.type.__asyncLoader, ic = (n) => n.type.__isKeepAlive;
function Dl(n, i) {
  oc(n, "a", i);
}
function Rl(n, i) {
  oc(n, "da", i);
}
function oc(n, i, a = qt) {
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
      ic(f.parent.vnode) && Kl(u, i, a, f), f = f.parent;
  }
}
function Kl(n, i, a, u) {
  const f = Xo(
    i,
    n,
    u,
    !0
    /* prepend */
  );
  Sa(() => {
    ca(u[i], f);
  }, a);
}
function Xo(n, i, a = qt, u = !1) {
  if (a) {
    const f = a[n] || (a[n] = []), h = i.__weh || (i.__weh = (...y) => {
      dr();
      const S = ui(a), I = Fn(i, a, n, y);
      return S(), hr(), I;
    });
    return u ? f.unshift(h) : f.push(h), h;
  }
}
const pr = (n) => (i, a = qt) => {
  (!_o || n === "sp") && Xo(n, (...u) => i(...u), a);
}, jl = pr("bm"), sc = pr("m"), Fl = pr(
  "bu"
), Bl = pr("u"), Ml = pr(
  "bum"
), Sa = pr("um"), ql = pr(
  "sp"
), Ul = pr("rtg"), Ll = pr("rtc");
function Vl(n, i = qt) {
  Xo("ec", n, i);
}
const $l = Symbol.for("v-ndc");
function ii(n, i, a, u) {
  let f;
  const h = a, y = Ne(n);
  if (y || Tt(n)) {
    const S = y && _r(n);
    let I = !1, L = !1;
    S && (I = !yn(n), L = xr(n), n = Go(n)), f = new Array(n.length);
    for (let F = 0, R = n.length; F < R; F++)
      f[F] = i(
        I ? L ? Ko(Mt(n[F])) : Mt(n[F]) : n[F],
        F,
        void 0,
        h
      );
  } else if (typeof n == "number") {
    f = new Array(n);
    for (let S = 0; S < n; S++)
      f[S] = i(S + 1, S, void 0, h);
  } else if (ht(n))
    if (n[Symbol.iterator])
      f = Array.from(
        n,
        (S, I) => i(S, I, void 0, h)
      );
    else {
      const S = Object.keys(n);
      f = new Array(S.length);
      for (let I = 0, L = S.length; I < L; I++) {
        const F = S[I];
        f[I] = i(n[F], F, I, h);
      }
    }
  else
    f = [];
  return f;
}
function Hl(n, i, a = {}, u, f) {
  if (Nt.ce || Nt.parent && vi(Nt.parent) && Nt.parent.ce)
    return We(), Qs(
      gt,
      null,
      [kt("slot", a, u)],
      64
    );
  let h = n[i];
  h && h._c && (h._d = !1), We();
  const y = h && ac(h(a)), S = a.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  y && y.key, I = Qs(
    gt,
    {
      key: (S && !Pn(S) ? S : `_${i}`) + // #7256 force differentiate fallback content from actual content
      (!y && u ? "_fb" : "")
    },
    y || [],
    y && n._ === 1 ? 64 : -2
  );
  return h && h._c && (h._d = !0), I;
}
function ac(n) {
  return n.some((i) => xi(i) ? !(i.type === Cn || i.type === gt && !ac(i.children)) : !0) ? n : null;
}
const Hs = (n) => n ? kc(n) ? Jo(n) : Hs(n.parent) : null, co = (
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
    $options: (n) => cc(n),
    $forceUpdate: (n) => n.f || (n.f = () => {
      Ea(n.update);
    }),
    $nextTick: (n) => n.n || (n.n = xa.bind(n.proxy)),
    $watch: (n) => yf.bind(n)
  })
), Cs = (n, i) => n !== ct && !n.__isScriptSetup && st(n, i), Wl = {
  get({ _: n }, i) {
    if (i === "__v_skip")
      return !0;
    const { ctx: a, setupState: u, data: f, props: h, accessCache: y, type: S, appContext: I } = n;
    let L;
    if (i[0] !== "$") {
      const ie = y[i];
      if (ie !== void 0)
        switch (ie) {
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
        if (Cs(u, i))
          return y[i] = 1, u[i];
        if (f !== ct && st(f, i))
          return y[i] = 2, f[i];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (L = n.propsOptions[0]) && st(L, i)
        )
          return y[i] = 3, h[i];
        if (a !== ct && st(a, i))
          return y[i] = 4, a[i];
        Ws && (y[i] = 0);
      }
    }
    const F = co[i];
    let R, H;
    if (F)
      return i === "$attrs" && Lt(n.attrs, "get", ""), F(n);
    if (
      // css module (injected by vue-loader)
      (R = S.__cssModules) && (R = R[i])
    )
      return R;
    if (a !== ct && st(a, i))
      return y[i] = 4, a[i];
    if (
      // global properties
      H = I.config.globalProperties, st(H, i)
    )
      return H[i];
  },
  set({ _: n }, i, a) {
    const { data: u, setupState: f, ctx: h } = n;
    return Cs(f, i) ? (f[i] = a, !0) : u !== ct && st(u, i) ? (u[i] = a, !0) : st(n.props, i) || i[0] === "$" && i.slice(1) in n ? !1 : (h[i] = a, !0);
  },
  has({
    _: { data: n, setupState: i, accessCache: a, ctx: u, appContext: f, propsOptions: h }
  }, y) {
    let S;
    return !!a[y] || n !== ct && st(n, y) || Cs(i, y) || (S = h[0]) && st(S, y) || st(u, y) || st(co, y) || st(f.config.globalProperties, y);
  },
  defineProperty(n, i, a) {
    return a.get != null ? n._.accessCache[i] = 0 : st(a, "value") && this.set(n, i, a.value, null), Reflect.defineProperty(n, i, a);
  }
};
function Fa(n) {
  return Ne(n) ? n.reduce(
    (i, a) => (i[a] = null, i),
    {}
  ) : n;
}
function go(n) {
  const i = Ff();
  let a = n();
  return Js(), la(a) && (a = a.catch((u) => {
    throw ui(i), u;
  })), [a, () => ui(i)];
}
let Ws = !0;
function Gl(n) {
  const i = cc(n), a = n.proxy, u = n.ctx;
  Ws = !1, i.beforeCreate && Ba(i.beforeCreate, n, "bc");
  const {
    // state
    data: f,
    computed: h,
    methods: y,
    watch: S,
    provide: I,
    inject: L,
    // lifecycle
    created: F,
    beforeMount: R,
    mounted: H,
    beforeUpdate: ie,
    updated: te,
    activated: fe,
    deactivated: Be,
    beforeDestroy: Pe,
    beforeUnmount: Ie,
    destroyed: Fe,
    unmounted: pe,
    render: ge,
    renderTracked: Q,
    renderTriggered: z,
    errorCaptured: J,
    serverPrefetch: A,
    // public API
    expose: se,
    inheritAttrs: Te,
    // assets
    components: ae,
    directives: Ee,
    filters: Qe
  } = i;
  if (L && Yl(L, u, null), y)
    for (const ue in y) {
      const De = y[ue];
      qe(De) && (u[ue] = De.bind(a));
    }
  if (f) {
    const ue = f.call(a, a);
    ht(ue) && (n.data = Yo(ue));
  }
  if (Ws = !0, h)
    for (const ue in h) {
      const De = h[ue], Je = qe(De) ? De.bind(a, a) : qe(De.get) ? De.get.bind(a, a) : jn, at = !qe(De) && qe(De.set) ? De.set.bind(a) : jn, yt = Kn({
        get: Je,
        set: at
      });
      Object.defineProperty(u, ue, {
        enumerable: !0,
        configurable: !0,
        get: () => yt.value,
        set: (Pt) => yt.value = Pt
      });
    }
  if (S)
    for (const ue in S)
      uc(S[ue], u, a, ue);
  if (I) {
    const ue = qe(I) ? I.call(a) : I;
    Reflect.ownKeys(ue).forEach((De) => {
      ef(De, ue[De]);
    });
  }
  F && Ba(F, n, "c");
  function Ke(ue, De) {
    Ne(De) ? De.forEach((Je) => ue(Je.bind(a))) : De && ue(De.bind(a));
  }
  if (Ke(jl, R), Ke(sc, H), Ke(Fl, ie), Ke(Bl, te), Ke(Dl, fe), Ke(Rl, Be), Ke(Vl, J), Ke(Ll, Q), Ke(Ul, z), Ke(Ml, Ie), Ke(Sa, pe), Ke(ql, A), Ne(se))
    if (se.length) {
      const ue = n.exposed || (n.exposed = {});
      se.forEach((De) => {
        Object.defineProperty(ue, De, {
          get: () => a[De],
          set: (Je) => a[De] = Je
        });
      });
    } else n.exposed || (n.exposed = {});
  ge && n.render === jn && (n.render = ge), Te != null && (n.inheritAttrs = Te), ae && (n.components = ae), Ee && (n.directives = Ee), A && rc(n);
}
function Yl(n, i, a = jn) {
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
function Ba(n, i, a) {
  Fn(
    Ne(n) ? n.map((u) => u.bind(i.proxy)) : n.bind(i.proxy),
    i,
    a
  );
}
function uc(n, i, a, u) {
  let f = u.includes(".") ? wc(a, u) : () => a[u];
  if (Tt(n)) {
    const h = i[n];
    qe(h) && Co(f, h);
  } else if (qe(n))
    Co(f, n.bind(a));
  else if (ht(n))
    if (Ne(n))
      n.forEach((h) => uc(h, i, a, u));
    else {
      const h = qe(n.handler) ? n.handler.bind(a) : i[n.handler];
      qe(h) && Co(f, h, n);
    }
}
function cc(n) {
  const i = n.type, { mixins: a, extends: u } = i, {
    mixins: f,
    optionsCache: h,
    config: { optionMergeStrategies: y }
  } = n.appContext, S = h.get(i);
  let I;
  return S ? I = S : !f.length && !a && !u ? I = i : (I = {}, f.length && f.forEach(
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
      const S = Xl[y] || a && a[y];
      n[y] = S ? S(n[y], i[y]) : i[y];
    }
  return n;
}
const Xl = {
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
  watch: zl,
  // provide / inject
  provide: Ma,
  inject: Ql
};
function Ma(n, i) {
  return i ? n ? function() {
    return Vt(
      qe(n) ? n.call(this, this) : n,
      qe(i) ? i.call(this, this) : i
    );
  } : i : n;
}
function Ql(n, i) {
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
    Fa(n),
    Fa(i ?? {})
  ) : i;
}
function zl(n, i) {
  if (!n) return i;
  if (!i) return n;
  const a = Vt(/* @__PURE__ */ Object.create(null), n);
  for (const u in i)
    a[u] = Jt(n[u], i[u]);
  return a;
}
function lc() {
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
let Jl = 0;
function Zl(n, i) {
  return function(u, f = null) {
    qe(u) || (u = Vt({}, u)), f != null && !ht(f) && (f = null);
    const h = lc(), y = /* @__PURE__ */ new WeakSet(), S = [];
    let I = !1;
    const L = h.app = {
      _uid: Jl++,
      _component: u,
      _props: f,
      _container: null,
      _context: h,
      _instance: null,
      version: Vf,
      get config() {
        return h.config;
      },
      set config(F) {
      },
      use(F, ...R) {
        return y.has(F) || (F && qe(F.install) ? (y.add(F), F.install(L, ...R)) : qe(F) && (y.add(F), F(L, ...R))), L;
      },
      mixin(F) {
        return h.mixins.includes(F) || h.mixins.push(F), L;
      },
      component(F, R) {
        return R ? (h.components[F] = R, L) : h.components[F];
      },
      directive(F, R) {
        return R ? (h.directives[F] = R, L) : h.directives[F];
      },
      mount(F, R, H) {
        if (!I) {
          const ie = L._ceVNode || kt(u, f);
          return ie.appContext = h, H === !0 ? H = "svg" : H === !1 && (H = void 0), n(ie, F, H), I = !0, L._container = F, F.__vue_app__ = L, Jo(ie.component);
        }
      },
      onUnmount(F) {
        S.push(F);
      },
      unmount() {
        I && (Fn(
          S,
          L._instance,
          16
        ), n(null, L._container), delete L._container.__vue_app__);
      },
      provide(F, R) {
        return h.provides[F] = R, L;
      },
      runWithContext(F) {
        const R = si;
        si = L;
        try {
          return F();
        } finally {
          si = R;
        }
      }
    };
    return L;
  };
}
let si = null;
function ef(n, i) {
  if (qt) {
    let a = qt.provides;
    const u = qt.parent && qt.parent.provides;
    u === a && (a = qt.provides = Object.create(u)), a[n] = i;
  }
}
function lo(n, i, a = !1) {
  const u = qt || Nt;
  if (u || si) {
    let f = si ? si._context.provides : u ? u.parent == null || u.ce ? u.vnode.appContext && u.vnode.appContext.provides : u.parent.provides : void 0;
    if (f && n in f)
      return f[n];
    if (arguments.length > 1)
      return a && qe(i) ? i.call(u && u.proxy) : i;
  }
}
function tf() {
  return !!(qt || Nt || si);
}
const fc = {}, dc = () => Object.create(fc), hc = (n) => Object.getPrototypeOf(n) === fc;
function nf(n, i, a, u = !1) {
  const f = {}, h = dc();
  n.propsDefaults = /* @__PURE__ */ Object.create(null), pc(n, i, f, h);
  for (const y in n.propsOptions[0])
    y in f || (f[y] = void 0);
  a ? n.props = u ? f : bl(f) : n.type.props ? n.props = f : n.props = h, n.attrs = h;
}
function rf(n, i, a, u) {
  const {
    props: f,
    attrs: h,
    vnode: { patchFlag: y }
  } = n, S = nt(f), [I] = n.propsOptions;
  let L = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (u || y > 0) && !(y & 16)
  ) {
    if (y & 8) {
      const F = n.vnode.dynamicProps;
      for (let R = 0; R < F.length; R++) {
        let H = F[R];
        if (Qo(n.emitsOptions, H))
          continue;
        const ie = i[H];
        if (I)
          if (st(h, H))
            ie !== h[H] && (h[H] = ie, L = !0);
          else {
            const te = wr(H);
            f[te] = Ys(
              I,
              S,
              te,
              ie,
              n,
              !1
            );
          }
        else
          ie !== h[H] && (h[H] = ie, L = !0);
      }
    }
  } else {
    pc(n, i, f, h) && (L = !0);
    let F;
    for (const R in S)
      (!i || // for camelCase
      !st(i, R) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((F = ci(R)) === R || !st(i, F))) && (I ? a && // for camelCase
      (a[R] !== void 0 || // for kebab-case
      a[F] !== void 0) && (f[R] = Ys(
        I,
        S,
        R,
        void 0,
        n,
        !0
      )) : delete f[R]);
    if (h !== S)
      for (const R in h)
        (!i || !st(i, R)) && (delete h[R], L = !0);
  }
  L && lr(n.attrs, "set", "");
}
function pc(n, i, a, u) {
  const [f, h] = n.propsOptions;
  let y = !1, S;
  if (i)
    for (let I in i) {
      if (oo(I))
        continue;
      const L = i[I];
      let F;
      f && st(f, F = wr(I)) ? !h || !h.includes(F) ? a[F] = L : (S || (S = {}))[F] = L : Qo(n.emitsOptions, I) || (!(I in u) || L !== u[I]) && (u[I] = L, y = !0);
    }
  if (h) {
    const I = nt(a), L = S || ct;
    for (let F = 0; F < h.length; F++) {
      const R = h[F];
      a[R] = Ys(
        f,
        I,
        R,
        L[R],
        n,
        !st(L, R)
      );
    }
  }
  return y;
}
function Ys(n, i, a, u, f, h) {
  const y = n[a];
  if (y != null) {
    const S = st(y, "default");
    if (S && u === void 0) {
      const I = y.default;
      if (y.type !== Function && !y.skipFactory && qe(I)) {
        const { propsDefaults: L } = f;
        if (a in L)
          u = L[a];
        else {
          const F = ui(f);
          u = L[a] = I.call(
            null,
            i
          ), F();
        }
      } else
        u = I;
      f.ce && f.ce._setProp(a, u);
    }
    y[
      0
      /* shouldCast */
    ] && (h && !S ? u = !1 : y[
      1
      /* shouldCastTrue */
    ] && (u === "" || u === ci(a)) && (u = !0));
  }
  return u;
}
const of = /* @__PURE__ */ new WeakMap();
function mc(n, i, a = !1) {
  const u = a ? of : i.propsCache, f = u.get(n);
  if (f)
    return f;
  const h = n.props, y = {}, S = [];
  let I = !1;
  if (!qe(n)) {
    const F = (R) => {
      I = !0;
      const [H, ie] = mc(R, i, !0);
      Vt(y, H), ie && S.push(...ie);
    };
    !a && i.mixins.length && i.mixins.forEach(F), n.extends && F(n.extends), n.mixins && n.mixins.forEach(F);
  }
  if (!h && !I)
    return ht(n) && u.set(n, pi), pi;
  if (Ne(h))
    for (let F = 0; F < h.length; F++) {
      const R = wr(h[F]);
      Ua(R) && (y[R] = ct);
    }
  else if (h)
    for (const F in h) {
      const R = wr(F);
      if (Ua(R)) {
        const H = h[F], ie = y[R] = Ne(H) || qe(H) ? { type: H } : Vt({}, H), te = ie.type;
        let fe = !1, Be = !0;
        if (Ne(te))
          for (let Pe = 0; Pe < te.length; ++Pe) {
            const Ie = te[Pe], Fe = qe(Ie) && Ie.name;
            if (Fe === "Boolean") {
              fe = !0;
              break;
            } else Fe === "String" && (Be = !1);
          }
        else
          fe = qe(te) && te.name === "Boolean";
        ie[
          0
          /* shouldCast */
        ] = fe, ie[
          1
          /* shouldCastTrue */
        ] = Be, (fe || st(ie, "default")) && S.push(R);
      }
    }
  const L = [y, S];
  return ht(n) && u.set(n, L), L;
}
function Ua(n) {
  return n[0] !== "$" && !oo(n);
}
const Oa = (n) => n[0] === "_" || n === "$stable", Aa = (n) => Ne(n) ? n.map(An) : [An(n)], sf = (n, i, a) => {
  if (i._n)
    return i;
  const u = $s((...f) => Aa(i(...f)), a);
  return u._c = !1, u;
}, yc = (n, i, a) => {
  const u = n._ctx;
  for (const f in n) {
    if (Oa(f)) continue;
    const h = n[f];
    if (qe(h))
      i[f] = sf(f, h, u);
    else if (h != null) {
      const y = Aa(h);
      i[f] = () => y;
    }
  }
}, vc = (n, i) => {
  const a = Aa(i);
  n.slots.default = () => a;
}, gc = (n, i, a) => {
  for (const u in i)
    (a || !Oa(u)) && (n[u] = i[u]);
}, af = (n, i, a) => {
  const u = n.slots = dc();
  if (n.vnode.shapeFlag & 32) {
    const f = i.__;
    f && Bs(u, "__", f, !0);
    const h = i._;
    h ? (gc(u, i, a), a && Bs(u, "_", h, !0)) : yc(i, u);
  } else i && vc(n, i);
}, uf = (n, i, a) => {
  const { vnode: u, slots: f } = n;
  let h = !0, y = ct;
  if (u.shapeFlag & 32) {
    const S = i._;
    S ? a && S === 1 ? h = !1 : gc(f, i, a) : (h = !i.$stable, yc(i, f)), y = i;
  } else i && (vc(n, i), y = { default: 1 });
  if (h)
    for (const S in f)
      !Oa(S) && y[S] == null && delete f[S];
}, hn = Pf;
function cf(n) {
  return lf(n);
}
function lf(n, i) {
  const a = Wo();
  a.__VUE__ = !0;
  const {
    insert: u,
    remove: f,
    patchProp: h,
    createElement: y,
    createText: S,
    createComment: I,
    setText: L,
    setElementText: F,
    parentNode: R,
    nextSibling: H,
    setScopeId: ie = jn,
    insertStaticContent: te
  } = n, fe = (k, j, X, ee = null, oe = null, ne = null, he = void 0, ye = null, ce = !!j.dynamicChildren) => {
    if (k === j)
      return;
    k && !gr(k, j) && (ee = P(k), Pt(k, oe, ne, !0), k = null), j.patchFlag === -2 && (ce = !1, j.dynamicChildren = null);
    const { type: re, ref: Oe, shapeFlag: ve } = j;
    switch (re) {
      case zo:
        Be(k, j, X, ee);
        break;
      case Cn:
        Pe(k, j, X, ee);
        break;
      case Is:
        k == null && Ie(j, X, ee, he);
        break;
      case gt:
        ae(
          k,
          j,
          X,
          ee,
          oe,
          ne,
          he,
          ye,
          ce
        );
        break;
      default:
        ve & 1 ? ge(
          k,
          j,
          X,
          ee,
          oe,
          ne,
          he,
          ye,
          ce
        ) : ve & 6 ? Ee(
          k,
          j,
          X,
          ee,
          oe,
          ne,
          he,
          ye,
          ce
        ) : (ve & 64 || ve & 128) && re.process(
          k,
          j,
          X,
          ee,
          oe,
          ne,
          he,
          ye,
          ce,
          q
        );
    }
    Oe != null && oe ? uo(Oe, k && k.ref, ne, j || k, !j) : Oe == null && k && k.ref != null && uo(k.ref, null, ne, k, !0);
  }, Be = (k, j, X, ee) => {
    if (k == null)
      u(
        j.el = S(j.children),
        X,
        ee
      );
    else {
      const oe = j.el = k.el;
      j.children !== k.children && L(oe, j.children);
    }
  }, Pe = (k, j, X, ee) => {
    k == null ? u(
      j.el = I(j.children || ""),
      X,
      ee
    ) : j.el = k.el;
  }, Ie = (k, j, X, ee) => {
    [k.el, k.anchor] = te(
      k.children,
      j,
      X,
      ee,
      k.el,
      k.anchor
    );
  }, Fe = ({ el: k, anchor: j }, X, ee) => {
    let oe;
    for (; k && k !== j; )
      oe = H(k), u(k, X, ee), k = oe;
    u(j, X, ee);
  }, pe = ({ el: k, anchor: j }) => {
    let X;
    for (; k && k !== j; )
      X = H(k), f(k), k = X;
    f(j);
  }, ge = (k, j, X, ee, oe, ne, he, ye, ce) => {
    j.type === "svg" ? he = "svg" : j.type === "math" && (he = "mathml"), k == null ? Q(
      j,
      X,
      ee,
      oe,
      ne,
      he,
      ye,
      ce
    ) : A(
      k,
      j,
      oe,
      ne,
      he,
      ye,
      ce
    );
  }, Q = (k, j, X, ee, oe, ne, he, ye) => {
    let ce, re;
    const { props: Oe, shapeFlag: ve, transition: Ae, dirs: ke } = k;
    if (ce = k.el = y(
      k.type,
      ne,
      Oe && Oe.is,
      Oe
    ), ve & 8 ? F(ce, k.children) : ve & 16 && J(
      k.children,
      ce,
      null,
      ee,
      oe,
      Ns(k, ne),
      he,
      ye
    ), ke && ei(k, null, ee, "created"), z(ce, k, k.scopeId, he, ee), Oe) {
      for (const Ve in Oe)
        Ve !== "value" && !oo(Ve) && h(ce, Ve, null, Oe[Ve], ne, ee);
      "value" in Oe && h(ce, "value", null, Oe.value, ne), (re = Oe.onVnodeBeforeMount) && Dn(re, ee, k);
    }
    ke && ei(k, null, ee, "beforeMount");
    const Re = ff(oe, Ae);
    Re && Ae.beforeEnter(ce), u(ce, j, X), ((re = Oe && Oe.onVnodeMounted) || Re || ke) && hn(() => {
      re && Dn(re, ee, k), Re && Ae.enter(ce), ke && ei(k, null, ee, "mounted");
    }, oe);
  }, z = (k, j, X, ee, oe) => {
    if (X && ie(k, X), ee)
      for (let ne = 0; ne < ee.length; ne++)
        ie(k, ee[ne]);
    if (oe) {
      let ne = oe.subTree;
      if (j === ne || Ec(ne.type) && (ne.ssContent === j || ne.ssFallback === j)) {
        const he = oe.vnode;
        z(
          k,
          he,
          he.scopeId,
          he.slotScopeIds,
          oe.parent
        );
      }
    }
  }, J = (k, j, X, ee, oe, ne, he, ye, ce = 0) => {
    for (let re = ce; re < k.length; re++) {
      const Oe = k[re] = ye ? vr(k[re]) : An(k[re]);
      fe(
        null,
        Oe,
        j,
        X,
        ee,
        oe,
        ne,
        he,
        ye
      );
    }
  }, A = (k, j, X, ee, oe, ne, he) => {
    const ye = j.el = k.el;
    let { patchFlag: ce, dynamicChildren: re, dirs: Oe } = j;
    ce |= k.patchFlag & 16;
    const ve = k.props || ct, Ae = j.props || ct;
    let ke;
    if (X && ti(X, !1), (ke = Ae.onVnodeBeforeUpdate) && Dn(ke, X, j, k), Oe && ei(j, k, X, "beforeUpdate"), X && ti(X, !0), (ve.innerHTML && Ae.innerHTML == null || ve.textContent && Ae.textContent == null) && F(ye, ""), re ? se(
      k.dynamicChildren,
      re,
      ye,
      X,
      ee,
      Ns(j, oe),
      ne
    ) : he || De(
      k,
      j,
      ye,
      null,
      X,
      ee,
      Ns(j, oe),
      ne,
      !1
    ), ce > 0) {
      if (ce & 16)
        Te(ye, ve, Ae, X, oe);
      else if (ce & 2 && ve.class !== Ae.class && h(ye, "class", null, Ae.class, oe), ce & 4 && h(ye, "style", ve.style, Ae.style, oe), ce & 8) {
        const Re = j.dynamicProps;
        for (let Ve = 0; Ve < Re.length; Ve++) {
          const Ge = Re[Ve], lt = ve[Ge], bt = Ae[Ge];
          (bt !== lt || Ge === "value") && h(ye, Ge, lt, bt, oe, X);
        }
      }
      ce & 1 && k.children !== j.children && F(ye, j.children);
    } else !he && re == null && Te(ye, ve, Ae, X, oe);
    ((ke = Ae.onVnodeUpdated) || Oe) && hn(() => {
      ke && Dn(ke, X, j, k), Oe && ei(j, k, X, "updated");
    }, ee);
  }, se = (k, j, X, ee, oe, ne, he) => {
    for (let ye = 0; ye < j.length; ye++) {
      const ce = k[ye], re = j[ye], Oe = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        ce.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (ce.type === gt || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !gr(ce, re) || // - In the case of a component, it could contain anything.
        ce.shapeFlag & 198) ? R(ce.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          X
        )
      );
      fe(
        ce,
        re,
        Oe,
        null,
        ee,
        oe,
        ne,
        he,
        !0
      );
    }
  }, Te = (k, j, X, ee, oe) => {
    if (j !== X) {
      if (j !== ct)
        for (const ne in j)
          !oo(ne) && !(ne in X) && h(
            k,
            ne,
            j[ne],
            null,
            oe,
            ee
          );
      for (const ne in X) {
        if (oo(ne)) continue;
        const he = X[ne], ye = j[ne];
        he !== ye && ne !== "value" && h(k, ne, ye, he, oe, ee);
      }
      "value" in X && h(k, "value", j.value, X.value, oe);
    }
  }, ae = (k, j, X, ee, oe, ne, he, ye, ce) => {
    const re = j.el = k ? k.el : S(""), Oe = j.anchor = k ? k.anchor : S("");
    let { patchFlag: ve, dynamicChildren: Ae, slotScopeIds: ke } = j;
    ke && (ye = ye ? ye.concat(ke) : ke), k == null ? (u(re, X, ee), u(Oe, X, ee), J(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      j.children || [],
      X,
      Oe,
      oe,
      ne,
      he,
      ye,
      ce
    )) : ve > 0 && ve & 64 && Ae && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    k.dynamicChildren ? (se(
      k.dynamicChildren,
      Ae,
      X,
      oe,
      ne,
      he,
      ye
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (j.key != null || oe && j === oe.subTree) && bc(
      k,
      j,
      !0
      /* shallow */
    )) : De(
      k,
      j,
      X,
      Oe,
      oe,
      ne,
      he,
      ye,
      ce
    );
  }, Ee = (k, j, X, ee, oe, ne, he, ye, ce) => {
    j.slotScopeIds = ye, k == null ? j.shapeFlag & 512 ? oe.ctx.activate(
      j,
      X,
      ee,
      he,
      ce
    ) : Qe(
      j,
      X,
      ee,
      oe,
      ne,
      he,
      ce
    ) : He(k, j, ce);
  }, Qe = (k, j, X, ee, oe, ne, he) => {
    const ye = k.component = jf(
      k,
      ee,
      oe
    );
    if (ic(k) && (ye.ctx.renderer = q), Bf(ye, !1, he), ye.asyncDep) {
      if (oe && oe.registerDep(ye, Ke, he), !k.el) {
        const ce = ye.subTree = kt(Cn);
        Pe(null, ce, j, X);
      }
    } else
      Ke(
        ye,
        k,
        j,
        X,
        oe,
        ne,
        he
      );
  }, He = (k, j, X) => {
    const ee = j.component = k.component;
    if (xf(k, j, X))
      if (ee.asyncDep && !ee.asyncResolved) {
        ue(ee, j, X);
        return;
      } else
        ee.next = j, ee.update();
    else
      j.el = k.el, ee.vnode = j;
  }, Ke = (k, j, X, ee, oe, ne, he) => {
    const ye = () => {
      if (k.isMounted) {
        let { next: ve, bu: Ae, u: ke, parent: Re, vnode: Ve } = k;
        {
          const ft = _c(k);
          if (ft) {
            ve && (ve.el = Ve.el, ue(k, ve, he)), ft.asyncDep.then(() => {
              k.isUnmounted || ye();
            });
            return;
          }
        }
        let Ge = ve, lt;
        ti(k, !1), ve ? (ve.el = Ve.el, ue(k, ve, he)) : ve = Ve, Ae && Po(Ae), (lt = ve.props && ve.props.onVnodeBeforeUpdate) && Dn(lt, Re, ve, Ve), ti(k, !0);
        const bt = Va(k), St = k.subTree;
        k.subTree = bt, fe(
          St,
          bt,
          // parent may have changed if it's in a teleport
          R(St.el),
          // anchor may have changed if it's in a fragment
          P(St),
          k,
          oe,
          ne
        ), ve.el = bt.el, Ge === null && Pa(k, bt.el), ke && hn(ke, oe), (lt = ve.props && ve.props.onVnodeUpdated) && hn(
          () => Dn(lt, Re, ve, Ve),
          oe
        );
      } else {
        let ve;
        const { el: Ae, props: ke } = j, { bm: Re, m: Ve, parent: Ge, root: lt, type: bt } = k, St = vi(j);
        ti(k, !1), Re && Po(Re), !St && (ve = ke && ke.onVnodeBeforeMount) && Dn(ve, Ge, j), ti(k, !0);
        {
          lt.ce && // @ts-expect-error _def is private
          lt.ce._def.shadowRoot !== !1 && lt.ce._injectChildStyle(bt);
          const ft = k.subTree = Va(k);
          fe(
            null,
            ft,
            X,
            ee,
            k,
            oe,
            ne
          ), j.el = ft.el;
        }
        if (Ve && hn(Ve, oe), !St && (ve = ke && ke.onVnodeMounted)) {
          const ft = j;
          hn(
            () => Dn(ve, Ge, ft),
            oe
          );
        }
        (j.shapeFlag & 256 || Ge && vi(Ge.vnode) && Ge.vnode.shapeFlag & 256) && k.a && hn(k.a, oe), k.isMounted = !0, j = X = ee = null;
      }
    };
    k.scope.on();
    const ce = k.effect = new Ku(ye);
    k.scope.off();
    const re = k.update = ce.run.bind(ce), Oe = k.job = ce.runIfDirty.bind(ce);
    Oe.i = k, Oe.id = k.uid, ce.scheduler = () => Ea(Oe), ti(k, !0), re();
  }, ue = (k, j, X) => {
    j.component = k;
    const ee = k.vnode.props;
    k.vnode = j, k.next = null, rf(k, j.props, ee, X), uf(k, j.children, X), dr(), ja(k), hr();
  }, De = (k, j, X, ee, oe, ne, he, ye, ce = !1) => {
    const re = k && k.children, Oe = k ? k.shapeFlag : 0, ve = j.children, { patchFlag: Ae, shapeFlag: ke } = j;
    if (Ae > 0) {
      if (Ae & 128) {
        at(
          re,
          ve,
          X,
          ee,
          oe,
          ne,
          he,
          ye,
          ce
        );
        return;
      } else if (Ae & 256) {
        Je(
          re,
          ve,
          X,
          ee,
          oe,
          ne,
          he,
          ye,
          ce
        );
        return;
      }
    }
    ke & 8 ? (Oe & 16 && wt(re, oe, ne), ve !== re && F(X, ve)) : Oe & 16 ? ke & 16 ? at(
      re,
      ve,
      X,
      ee,
      oe,
      ne,
      he,
      ye,
      ce
    ) : wt(re, oe, ne, !0) : (Oe & 8 && F(X, ""), ke & 16 && J(
      ve,
      X,
      ee,
      oe,
      ne,
      he,
      ye,
      ce
    ));
  }, Je = (k, j, X, ee, oe, ne, he, ye, ce) => {
    k = k || pi, j = j || pi;
    const re = k.length, Oe = j.length, ve = Math.min(re, Oe);
    let Ae;
    for (Ae = 0; Ae < ve; Ae++) {
      const ke = j[Ae] = ce ? vr(j[Ae]) : An(j[Ae]);
      fe(
        k[Ae],
        ke,
        X,
        null,
        oe,
        ne,
        he,
        ye,
        ce
      );
    }
    re > Oe ? wt(
      k,
      oe,
      ne,
      !0,
      !1,
      ve
    ) : J(
      j,
      X,
      ee,
      oe,
      ne,
      he,
      ye,
      ce,
      ve
    );
  }, at = (k, j, X, ee, oe, ne, he, ye, ce) => {
    let re = 0;
    const Oe = j.length;
    let ve = k.length - 1, Ae = Oe - 1;
    for (; re <= ve && re <= Ae; ) {
      const ke = k[re], Re = j[re] = ce ? vr(j[re]) : An(j[re]);
      if (gr(ke, Re))
        fe(
          ke,
          Re,
          X,
          null,
          oe,
          ne,
          he,
          ye,
          ce
        );
      else
        break;
      re++;
    }
    for (; re <= ve && re <= Ae; ) {
      const ke = k[ve], Re = j[Ae] = ce ? vr(j[Ae]) : An(j[Ae]);
      if (gr(ke, Re))
        fe(
          ke,
          Re,
          X,
          null,
          oe,
          ne,
          he,
          ye,
          ce
        );
      else
        break;
      ve--, Ae--;
    }
    if (re > ve) {
      if (re <= Ae) {
        const ke = Ae + 1, Re = ke < Oe ? j[ke].el : ee;
        for (; re <= Ae; )
          fe(
            null,
            j[re] = ce ? vr(j[re]) : An(j[re]),
            X,
            Re,
            oe,
            ne,
            he,
            ye,
            ce
          ), re++;
      }
    } else if (re > Ae)
      for (; re <= ve; )
        Pt(k[re], oe, ne, !0), re++;
    else {
      const ke = re, Re = re, Ve = /* @__PURE__ */ new Map();
      for (re = Re; re <= Ae; re++) {
        const rt = j[re] = ce ? vr(j[re]) : An(j[re]);
        rt.key != null && Ve.set(rt.key, re);
      }
      let Ge, lt = 0;
      const bt = Ae - Re + 1;
      let St = !1, ft = 0;
      const $t = new Array(bt);
      for (re = 0; re < bt; re++) $t[re] = 0;
      for (re = ke; re <= ve; re++) {
        const rt = k[re];
        if (lt >= bt) {
          Pt(rt, oe, ne, !0);
          continue;
        }
        let Z;
        if (rt.key != null)
          Z = Ve.get(rt.key);
        else
          for (Ge = Re; Ge <= Ae; Ge++)
            if ($t[Ge - Re] === 0 && gr(rt, j[Ge])) {
              Z = Ge;
              break;
            }
        Z === void 0 ? Pt(rt, oe, ne, !0) : ($t[Z - Re] = re + 1, Z >= ft ? ft = Z : St = !0, fe(
          rt,
          j[Z],
          X,
          null,
          oe,
          ne,
          he,
          ye,
          ce
        ), lt++);
      }
      const In = St ? df($t) : pi;
      for (Ge = In.length - 1, re = bt - 1; re >= 0; re--) {
        const rt = Re + re, Z = j[rt], nn = rt + 1 < Oe ? j[rt + 1].el : ee;
        $t[re] === 0 ? fe(
          null,
          Z,
          X,
          nn,
          oe,
          ne,
          he,
          ye,
          ce
        ) : St && (Ge < 0 || re !== In[Ge] ? yt(Z, X, nn, 2) : Ge--);
      }
    }
  }, yt = (k, j, X, ee, oe = null) => {
    const { el: ne, type: he, transition: ye, children: ce, shapeFlag: re } = k;
    if (re & 6) {
      yt(k.component.subTree, j, X, ee);
      return;
    }
    if (re & 128) {
      k.suspense.move(j, X, ee);
      return;
    }
    if (re & 64) {
      he.move(k, j, X, q);
      return;
    }
    if (he === gt) {
      u(ne, j, X);
      for (let ve = 0; ve < ce.length; ve++)
        yt(ce[ve], j, X, ee);
      u(k.anchor, j, X);
      return;
    }
    if (he === Is) {
      Fe(k, j, X);
      return;
    }
    if (ee !== 2 && re & 1 && ye)
      if (ee === 0)
        ye.beforeEnter(ne), u(ne, j, X), hn(() => ye.enter(ne), oe);
      else {
        const { leave: ve, delayLeave: Ae, afterLeave: ke } = ye, Re = () => {
          k.ctx.isUnmounted ? f(ne) : u(ne, j, X);
        }, Ve = () => {
          ve(ne, () => {
            Re(), ke && ke();
          });
        };
        Ae ? Ae(ne, Re, Ve) : Ve();
      }
    else
      u(ne, j, X);
  }, Pt = (k, j, X, ee = !1, oe = !1) => {
    const {
      type: ne,
      props: he,
      ref: ye,
      children: ce,
      dynamicChildren: re,
      shapeFlag: Oe,
      patchFlag: ve,
      dirs: Ae,
      cacheIndex: ke
    } = k;
    if (ve === -2 && (oe = !1), ye != null && (dr(), uo(ye, null, X, k, !0), hr()), ke != null && (j.renderCache[ke] = void 0), Oe & 256) {
      j.ctx.deactivate(k);
      return;
    }
    const Re = Oe & 1 && Ae, Ve = !vi(k);
    let Ge;
    if (Ve && (Ge = he && he.onVnodeBeforeUnmount) && Dn(Ge, j, k), Oe & 6)
      tn(k.component, X, ee);
    else {
      if (Oe & 128) {
        k.suspense.unmount(X, ee);
        return;
      }
      Re && ei(k, null, j, "beforeUnmount"), Oe & 64 ? k.type.remove(
        k,
        j,
        X,
        q,
        ee
      ) : re && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !re.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (ne !== gt || ve > 0 && ve & 64) ? wt(
        re,
        j,
        X,
        !1,
        !0
      ) : (ne === gt && ve & 384 || !oe && Oe & 16) && wt(ce, j, X), ee && Ct(k);
    }
    (Ve && (Ge = he && he.onVnodeUnmounted) || Re) && hn(() => {
      Ge && Dn(Ge, j, k), Re && ei(k, null, j, "unmounted");
    }, X);
  }, Ct = (k) => {
    const { type: j, el: X, anchor: ee, transition: oe } = k;
    if (j === gt) {
      Nn(X, ee);
      return;
    }
    if (j === Is) {
      pe(k);
      return;
    }
    const ne = () => {
      f(X), oe && !oe.persisted && oe.afterLeave && oe.afterLeave();
    };
    if (k.shapeFlag & 1 && oe && !oe.persisted) {
      const { leave: he, delayLeave: ye } = oe, ce = () => he(X, ne);
      ye ? ye(k.el, ne, ce) : ce();
    } else
      ne();
  }, Nn = (k, j) => {
    let X;
    for (; k !== j; )
      X = H(k), f(k), k = X;
    f(j);
  }, tn = (k, j, X) => {
    const {
      bum: ee,
      scope: oe,
      job: ne,
      subTree: he,
      um: ye,
      m: ce,
      a: re,
      parent: Oe,
      slots: { __: ve }
    } = k;
    La(ce), La(re), ee && Po(ee), Oe && Ne(ve) && ve.forEach((Ae) => {
      Oe.renderCache[Ae] = void 0;
    }), oe.stop(), ne && (ne.flags |= 8, Pt(he, k, j, X)), ye && hn(ye, j), hn(() => {
      k.isUnmounted = !0;
    }, j), j && j.pendingBranch && !j.isUnmounted && k.asyncDep && !k.asyncResolved && k.suspenseId === j.pendingId && (j.deps--, j.deps === 0 && j.resolve());
  }, wt = (k, j, X, ee = !1, oe = !1, ne = 0) => {
    for (let he = ne; he < k.length; he++)
      Pt(k[he], j, X, ee, oe);
  }, P = (k) => {
    if (k.shapeFlag & 6)
      return P(k.component.subTree);
    if (k.shapeFlag & 128)
      return k.suspense.next();
    const j = H(k.anchor || k.el), X = j && j[Nl];
    return X ? H(X) : j;
  };
  let _ = !1;
  const K = (k, j, X) => {
    k == null ? j._vnode && Pt(j._vnode, null, null, !0) : fe(
      j._vnode || null,
      k,
      j,
      null,
      null,
      null,
      X
    ), j._vnode = k, _ || (_ = !0, ja(), ec(), _ = !1);
  }, q = {
    p: fe,
    um: Pt,
    m: yt,
    r: Ct,
    mt: Qe,
    mc: J,
    pc: De,
    pbc: se,
    n: P,
    o: n
  };
  return {
    render: K,
    hydrate: void 0,
    createApp: Zl(K)
  };
}
function Ns({ type: n, props: i }, a) {
  return a === "svg" && n === "foreignObject" || a === "mathml" && n === "annotation-xml" && i && i.encoding && i.encoding.includes("html") ? void 0 : a;
}
function ti({ effect: n, job: i }, a) {
  a ? (n.flags |= 32, i.flags |= 4) : (n.flags &= -33, i.flags &= -5);
}
function ff(n, i) {
  return (!n || n && !n.pendingBranch) && i && !i.persisted;
}
function bc(n, i, a = !1) {
  const u = n.children, f = i.children;
  if (Ne(u) && Ne(f))
    for (let h = 0; h < u.length; h++) {
      const y = u[h];
      let S = f[h];
      S.shapeFlag & 1 && !S.dynamicChildren && ((S.patchFlag <= 0 || S.patchFlag === 32) && (S = f[h] = vr(f[h]), S.el = y.el), !a && S.patchFlag !== -2 && bc(y, S)), S.type === zo && (S.el = y.el), S.type === Cn && !S.el && (S.el = y.el);
    }
}
function df(n) {
  const i = n.slice(), a = [0];
  let u, f, h, y, S;
  const I = n.length;
  for (u = 0; u < I; u++) {
    const L = n[u];
    if (L !== 0) {
      if (f = a[a.length - 1], n[f] < L) {
        i[u] = f, a.push(u);
        continue;
      }
      for (h = 0, y = a.length - 1; h < y; )
        S = h + y >> 1, n[a[S]] < L ? h = S + 1 : y = S;
      L < n[a[h]] && (h > 0 && (i[u] = a[h - 1]), a[h] = u);
    }
  }
  for (h = a.length, y = a[h - 1]; h-- > 0; )
    a[h] = y, y = i[y];
  return a;
}
function _c(n) {
  const i = n.subTree.component;
  if (i)
    return i.asyncDep && !i.asyncResolved ? i : _c(i);
}
function La(n) {
  if (n)
    for (let i = 0; i < n.length; i++)
      n[i].flags |= 8;
}
const hf = Symbol.for("v-scx"), pf = () => lo(hf);
function mf(n, i) {
  return ka(n, null, i);
}
function Co(n, i, a) {
  return ka(n, i, a);
}
function ka(n, i, a = ct) {
  const { immediate: u, deep: f, flush: h, once: y } = a, S = Vt({}, a), I = i && u || !i && h !== "post";
  let L;
  if (_o) {
    if (h === "sync") {
      const ie = pf();
      L = ie.__watcherHandles || (ie.__watcherHandles = []);
    } else if (!I) {
      const ie = () => {
      };
      return ie.stop = jn, ie.resume = jn, ie.pause = jn, ie;
    }
  }
  const F = qt;
  S.call = (ie, te, fe) => Fn(ie, F, te, fe);
  let R = !1;
  h === "post" ? S.scheduler = (ie) => {
    hn(ie, F && F.suspense);
  } : h !== "sync" && (R = !0, S.scheduler = (ie, te) => {
    te ? ie() : Ea(ie);
  }), S.augmentJob = (ie) => {
    i && (ie.flags |= 4), R && (ie.flags |= 2, F && (ie.id = F.uid, ie.i = F));
  };
  const H = kl(n, i, S);
  return _o && (L ? L.push(H) : I && H()), H;
}
function yf(n, i, a) {
  const u = this.proxy, f = Tt(n) ? n.includes(".") ? wc(u, n) : () => u[n] : n.bind(u, u);
  let h;
  qe(i) ? h = i : (h = i.handler, a = i);
  const y = ui(this), S = ka(f, h.bind(u), a);
  return y(), S;
}
function wc(n, i) {
  const a = i.split(".");
  return () => {
    let u = n;
    for (let f = 0; f < a.length && u; f++)
      u = u[a[f]];
    return u;
  };
}
const vf = (n, i) => i === "modelValue" || i === "model-value" ? n.modelModifiers : n[`${i}Modifiers`] || n[`${wr(i)}Modifiers`] || n[`${ci(i)}Modifiers`];
function gf(n, i, ...a) {
  if (n.isUnmounted) return;
  const u = n.vnode.props || ct;
  let f = a;
  const h = i.startsWith("update:"), y = h && vf(u, i.slice(7));
  y && (y.trim && (f = a.map((F) => Tt(F) ? F.trim() : F)), y.number && (f = a.map(ku)));
  let S, I = u[S = Ss(i)] || // also try camelCase event handler (#2249)
  u[S = Ss(wr(i))];
  !I && h && (I = u[S = Ss(ci(i))]), I && Fn(
    I,
    n,
    6,
    f
  );
  const L = u[S + "Once"];
  if (L) {
    if (!n.emitted)
      n.emitted = {};
    else if (n.emitted[S])
      return;
    n.emitted[S] = !0, Fn(
      L,
      n,
      6,
      f
    );
  }
}
function xc(n, i, a = !1) {
  const u = i.emitsCache, f = u.get(n);
  if (f !== void 0)
    return f;
  const h = n.emits;
  let y = {}, S = !1;
  if (!qe(n)) {
    const I = (L) => {
      const F = xc(L, i, !0);
      F && (S = !0, Vt(y, F));
    };
    !a && i.mixins.length && i.mixins.forEach(I), n.extends && I(n.extends), n.mixins && n.mixins.forEach(I);
  }
  return !h && !S ? (ht(n) && u.set(n, null), null) : (Ne(h) ? h.forEach((I) => y[I] = null) : Vt(y, h), ht(n) && u.set(n, y), y);
}
function Qo(n, i) {
  return !n || !Vo(i) ? !1 : (i = i.slice(2).replace(/Once$/, ""), st(n, i[0].toLowerCase() + i.slice(1)) || st(n, ci(i)) || st(n, i));
}
function Va(n) {
  const {
    type: i,
    vnode: a,
    proxy: u,
    withProxy: f,
    propsOptions: [h],
    slots: y,
    attrs: S,
    emit: I,
    render: L,
    renderCache: F,
    props: R,
    data: H,
    setupState: ie,
    ctx: te,
    inheritAttrs: fe
  } = n, Be = Bo(n);
  let Pe, Ie;
  try {
    if (a.shapeFlag & 4) {
      const pe = f || u, ge = pe;
      Pe = An(
        L.call(
          ge,
          pe,
          F,
          R,
          ie,
          H,
          te
        )
      ), Ie = S;
    } else {
      const pe = i;
      Pe = An(
        pe.length > 1 ? pe(
          R,
          { attrs: S, slots: y, emit: I }
        ) : pe(
          R,
          null
        )
      ), Ie = i.props ? S : _f(S);
    }
  } catch (pe) {
    fo.length = 0, To(pe, n, 1), Pe = kt(Cn);
  }
  let Fe = Pe;
  if (Ie && fe !== !1) {
    const pe = Object.keys(Ie), { shapeFlag: ge } = Fe;
    pe.length && ge & 7 && (h && pe.some(ua) && (Ie = wf(
      Ie,
      h
    )), Fe = Ei(Fe, Ie, !1, !0));
  }
  return a.dirs && (Fe = Ei(Fe, null, !1, !0), Fe.dirs = Fe.dirs ? Fe.dirs.concat(a.dirs) : a.dirs), a.transition && Ta(Fe, a.transition), Pe = Fe, Bo(Be), Pe;
}
function bf(n, i = !0) {
  let a;
  for (let u = 0; u < n.length; u++) {
    const f = n[u];
    if (xi(f)) {
      if (f.type !== Cn || f.children === "v-if") {
        if (a)
          return;
        a = f;
      }
    } else
      return;
  }
  return a;
}
const _f = (n) => {
  let i;
  for (const a in n)
    (a === "class" || a === "style" || Vo(a)) && ((i || (i = {}))[a] = n[a]);
  return i;
}, wf = (n, i) => {
  const a = {};
  for (const u in n)
    (!ua(u) || !(u.slice(9) in i)) && (a[u] = n[u]);
  return a;
};
function xf(n, i, a) {
  const { props: u, children: f, component: h } = n, { props: y, children: S, patchFlag: I } = i, L = h.emitsOptions;
  if (i.dirs || i.transition)
    return !0;
  if (a && I >= 0) {
    if (I & 1024)
      return !0;
    if (I & 16)
      return u ? $a(u, y, L) : !!y;
    if (I & 8) {
      const F = i.dynamicProps;
      for (let R = 0; R < F.length; R++) {
        const H = F[R];
        if (y[H] !== u[H] && !Qo(L, H))
          return !0;
      }
    }
  } else
    return (f || S) && (!S || !S.$stable) ? !0 : u === y ? !1 : u ? y ? $a(u, y, L) : !0 : !!y;
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
const Ec = (n) => n.__isSuspense;
let Xs = 0;
const Ef = {
  name: "Suspense",
  // In order to make Suspense tree-shakable, we need to avoid importing it
  // directly in the renderer. The renderer checks for the __isSuspense flag
  // on a vnode's type and calls the `process` method, passing in renderer
  // internals.
  __isSuspense: !0,
  process(n, i, a, u, f, h, y, S, I, L) {
    if (n == null)
      Sf(
        i,
        a,
        u,
        f,
        h,
        y,
        S,
        I,
        L
      );
    else {
      if (h && h.deps > 0 && !n.suspense.isInFallback) {
        i.suspense = n.suspense, i.suspense.vnode = i, i.el = n.el;
        return;
      }
      Of(
        n,
        i,
        a,
        u,
        f,
        y,
        S,
        I,
        L
      );
    }
  },
  hydrate: Af,
  normalize: kf
}, Tf = Ef;
function bo(n, i) {
  const a = n.props && n.props[i];
  qe(a) && a();
}
function Sf(n, i, a, u, f, h, y, S, I) {
  const {
    p: L,
    o: { createElement: F }
  } = I, R = F("div"), H = n.suspense = Tc(
    n,
    f,
    u,
    i,
    R,
    a,
    h,
    y,
    S,
    I
  );
  L(
    null,
    H.pendingBranch = n.ssContent,
    R,
    null,
    u,
    H,
    h,
    y
  ), H.deps > 0 ? (bo(n, "onPending"), bo(n, "onFallback"), L(
    null,
    n.ssFallback,
    i,
    a,
    u,
    null,
    // fallback tree will not have suspense context
    h,
    y
  ), gi(H, n.ssFallback)) : H.resolve(!1, !0);
}
function Of(n, i, a, u, f, h, y, S, { p: I, um: L, o: { createElement: F } }) {
  const R = i.suspense = n.suspense;
  R.vnode = i, i.el = n.el;
  const H = i.ssContent, ie = i.ssFallback, { activeBranch: te, pendingBranch: fe, isInFallback: Be, isHydrating: Pe } = R;
  if (fe)
    R.pendingBranch = H, gr(H, fe) ? (I(
      fe,
      H,
      R.hiddenContainer,
      null,
      f,
      R,
      h,
      y,
      S
    ), R.deps <= 0 ? R.resolve() : Be && (Pe || (I(
      te,
      ie,
      a,
      u,
      f,
      null,
      // fallback tree will not have suspense context
      h,
      y,
      S
    ), gi(R, ie)))) : (R.pendingId = Xs++, Pe ? (R.isHydrating = !1, R.activeBranch = fe) : L(fe, f, R), R.deps = 0, R.effects.length = 0, R.hiddenContainer = F("div"), Be ? (I(
      null,
      H,
      R.hiddenContainer,
      null,
      f,
      R,
      h,
      y,
      S
    ), R.deps <= 0 ? R.resolve() : (I(
      te,
      ie,
      a,
      u,
      f,
      null,
      // fallback tree will not have suspense context
      h,
      y,
      S
    ), gi(R, ie))) : te && gr(H, te) ? (I(
      te,
      H,
      a,
      u,
      f,
      R,
      h,
      y,
      S
    ), R.resolve(!0)) : (I(
      null,
      H,
      R.hiddenContainer,
      null,
      f,
      R,
      h,
      y,
      S
    ), R.deps <= 0 && R.resolve()));
  else if (te && gr(H, te))
    I(
      te,
      H,
      a,
      u,
      f,
      R,
      h,
      y,
      S
    ), gi(R, H);
  else if (bo(i, "onPending"), R.pendingBranch = H, H.shapeFlag & 512 ? R.pendingId = H.component.suspenseId : R.pendingId = Xs++, I(
    null,
    H,
    R.hiddenContainer,
    null,
    f,
    R,
    h,
    y,
    S
  ), R.deps <= 0)
    R.resolve();
  else {
    const { timeout: Ie, pendingId: Fe } = R;
    Ie > 0 ? setTimeout(() => {
      R.pendingId === Fe && R.fallback(ie);
    }, Ie) : Ie === 0 && R.fallback(ie);
  }
}
function Tc(n, i, a, u, f, h, y, S, I, L, F = !1) {
  const {
    p: R,
    m: H,
    um: ie,
    n: te,
    o: { parentNode: fe, remove: Be }
  } = L;
  let Pe;
  const Ie = Cf(n);
  Ie && i && i.pendingBranch && (Pe = i.pendingId, i.deps++);
  const Fe = n.props ? Hc(n.props.timeout) : void 0, pe = h, ge = {
    vnode: n,
    parent: i,
    parentComponent: a,
    namespace: y,
    container: u,
    hiddenContainer: f,
    deps: 0,
    pendingId: Xs++,
    timeout: typeof Fe == "number" ? Fe : -1,
    activeBranch: null,
    pendingBranch: null,
    isInFallback: !F,
    isHydrating: F,
    isUnmounted: !1,
    effects: [],
    resolve(Q = !1, z = !1) {
      const {
        vnode: J,
        activeBranch: A,
        pendingBranch: se,
        pendingId: Te,
        effects: ae,
        parentComponent: Ee,
        container: Qe
      } = ge;
      let He = !1;
      ge.isHydrating ? ge.isHydrating = !1 : Q || (He = A && se.transition && se.transition.mode === "out-in", He && (A.transition.afterLeave = () => {
        Te === ge.pendingId && (H(
          se,
          Qe,
          h === pe ? te(A) : h,
          0
        ), Vs(ae));
      }), A && (fe(A.el) === Qe && (h = te(A)), ie(A, Ee, ge, !0)), He || H(se, Qe, h, 0)), gi(ge, se), ge.pendingBranch = null, ge.isInFallback = !1;
      let Ke = ge.parent, ue = !1;
      for (; Ke; ) {
        if (Ke.pendingBranch) {
          Ke.effects.push(...ae), ue = !0;
          break;
        }
        Ke = Ke.parent;
      }
      !ue && !He && Vs(ae), ge.effects = [], Ie && i && i.pendingBranch && Pe === i.pendingId && (i.deps--, i.deps === 0 && !z && i.resolve()), bo(J, "onResolve");
    },
    fallback(Q) {
      if (!ge.pendingBranch)
        return;
      const { vnode: z, activeBranch: J, parentComponent: A, container: se, namespace: Te } = ge;
      bo(z, "onFallback");
      const ae = te(J), Ee = () => {
        ge.isInFallback && (R(
          null,
          Q,
          se,
          ae,
          A,
          null,
          // fallback tree will not have suspense context
          Te,
          S,
          I
        ), gi(ge, Q));
      }, Qe = Q.transition && Q.transition.mode === "out-in";
      Qe && (J.transition.afterLeave = Ee), ge.isInFallback = !0, ie(
        J,
        A,
        null,
        // no suspense so unmount hooks fire now
        !0
        // shouldRemove
      ), Qe || Ee();
    },
    move(Q, z, J) {
      ge.activeBranch && H(ge.activeBranch, Q, z, J), ge.container = Q;
    },
    next() {
      return ge.activeBranch && te(ge.activeBranch);
    },
    registerDep(Q, z, J) {
      const A = !!ge.pendingBranch;
      A && ge.deps++;
      const se = Q.vnode.el;
      Q.asyncDep.catch((Te) => {
        To(Te, Q, 0);
      }).then((Te) => {
        if (Q.isUnmounted || ge.isUnmounted || ge.pendingId !== Q.suspenseId)
          return;
        Q.asyncResolved = !0;
        const { vnode: ae } = Q;
        Zs(Q, Te), se && (ae.el = se);
        const Ee = !se && Q.subTree.el;
        z(
          Q,
          ae,
          // component may have been moved before resolve.
          // if this is not a hydration, instance.subTree will be the comment
          // placeholder.
          fe(se || Q.subTree.el),
          // anchor will not be used if this is hydration, so only need to
          // consider the comment placeholder case.
          se ? null : te(Q.subTree),
          ge,
          y,
          J
        ), Ee && Be(Ee), Pa(Q, ae.el), A && --ge.deps === 0 && ge.resolve();
      });
    },
    unmount(Q, z) {
      ge.isUnmounted = !0, ge.activeBranch && ie(
        ge.activeBranch,
        a,
        Q,
        z
      ), ge.pendingBranch && ie(
        ge.pendingBranch,
        a,
        Q,
        z
      );
    }
  };
  return ge;
}
function Af(n, i, a, u, f, h, y, S, I) {
  const L = i.suspense = Tc(
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
    S,
    !0
  ), F = I(
    n,
    L.pendingBranch = i.ssContent,
    a,
    L,
    h,
    y
  );
  return L.deps === 0 && L.resolve(!1, !0), F;
}
function kf(n) {
  const { shapeFlag: i, children: a } = n, u = i & 32;
  n.ssContent = Ha(
    u ? a.default : a
  ), n.ssFallback = u ? Ha(a.fallback) : kt(Cn);
}
function Ha(n) {
  let i;
  if (qe(n)) {
    const a = wi && n._c;
    a && (n._d = !1, We()), n = n(), a && (n._d = !0, i = rn, Sc());
  }
  return Ne(n) && (n = bf(n)), n = An(n), i && !n.dynamicChildren && (n.dynamicChildren = i.filter((a) => a !== n)), n;
}
function Pf(n, i) {
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
const gt = Symbol.for("v-fgt"), zo = Symbol.for("v-txt"), Cn = Symbol.for("v-cmt"), Is = Symbol.for("v-stc"), fo = [];
let rn = null;
function We(n = !1) {
  fo.push(rn = n ? null : []);
}
function Sc() {
  fo.pop(), rn = fo[fo.length - 1] || null;
}
let wi = 1;
function Wa(n, i = !1) {
  wi += n, n < 0 && rn && i && (rn.hasOnce = !0);
}
function Oc(n) {
  return n.dynamicChildren = wi > 0 ? rn || pi : null, Sc(), wi > 0 && rn && rn.push(n), n;
}
function ze(n, i, a, u, f, h) {
  return Oc(
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
  return Oc(
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
const Ac = ({ key: n }) => n ?? null, No = ({
  ref: n,
  ref_key: i,
  ref_for: a
}) => (typeof n == "number" && (n = "" + n), n != null ? Tt(n) || _t(n) || qe(n) ? { i: Nt, r: n, k: i, f: !!a } : n : null);
function _e(n, i = null, a = null, u = 0, f = null, h = n === gt ? 0 : 1, y = !1, S = !1) {
  const I = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n,
    props: i,
    key: i && Ac(i),
    ref: i && No(i),
    scopeId: nc,
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
  return S ? (Ca(I, a), h & 128 && n.normalize(I)) : a && (I.shapeFlag |= Tt(a) ? 8 : 16), wi > 0 && // avoid a block node from tracking itself
  !y && // has current parent block
  rn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (I.patchFlag > 0 || h & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  I.patchFlag !== 32 && rn.push(I), I;
}
const kt = Nf;
function Nf(n, i = null, a = null, u = 0, f = null, h = !1) {
  if ((!n || n === $l) && (n = Cn), xi(n)) {
    const S = Ei(
      n,
      i,
      !0
      /* mergeRef: true */
    );
    return a && Ca(S, a), wi > 0 && !h && rn && (S.shapeFlag & 6 ? rn[rn.indexOf(n)] = S : rn.push(S)), S.patchFlag = -2, S;
  }
  if (Lf(n) && (n = n.__vccOpts), i) {
    i = If(i);
    let { class: S, style: I } = i;
    S && !Tt(S) && (i.class = po(S)), ht(I) && (_a(I) && !Ne(I) && (I = Vt({}, I)), i.style = da(I));
  }
  const y = Tt(n) ? 1 : Ec(n) ? 128 : Il(n) ? 64 : ht(n) ? 4 : qe(n) ? 2 : 0;
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
function If(n) {
  return n ? _a(n) || hc(n) ? Vt({}, n) : n : null;
}
function Ei(n, i, a = !1, u = !1) {
  const { props: f, ref: h, patchFlag: y, children: S, transition: I } = n, L = i ? Df(f || {}, i) : f, F = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: n.type,
    props: L,
    key: L && Ac(L),
    ref: i && i.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      a && h ? Ne(h) ? h.concat(No(i)) : [h, No(i)] : No(i)
    ) : h,
    scopeId: n.scopeId,
    slotScopeIds: n.slotScopeIds,
    children: S,
    target: n.target,
    targetStart: n.targetStart,
    targetAnchor: n.targetAnchor,
    staticCount: n.staticCount,
    shapeFlag: n.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: i && n.type !== gt ? y === -1 ? 16 : y | 16 : y,
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
    F,
    I.clone(F)
  ), F;
}
function mn(n = " ", i = 0) {
  return kt(zo, null, n, i);
}
function On(n = "", i = !1) {
  return i ? (We(), Qs(Cn, null, n)) : kt(Cn, null, n);
}
function An(n) {
  return n == null || typeof n == "boolean" ? kt(Cn) : Ne(n) ? kt(
    gt,
    null,
    // #3666, avoid reference pollution when reusing vnode
    n.slice()
  ) : xi(n) ? vr(n) : kt(zo, null, String(n));
}
function vr(n) {
  return n.el === null && n.patchFlag !== -1 || n.memo ? n : Ei(n);
}
function Ca(n, i) {
  let a = 0;
  const { shapeFlag: u } = n;
  if (i == null)
    i = null;
  else if (Ne(i))
    a = 16;
  else if (typeof i == "object")
    if (u & 65) {
      const f = i.default;
      f && (f._c && (f._d = !1), Ca(n, f()), f._c && (f._d = !0));
      return;
    } else {
      a = 32;
      const f = i._;
      !f && !hc(i) ? i._ctx = Nt : f === 3 && Nt && (Nt.slots._ === 1 ? i._ = 1 : (i._ = 2, n.patchFlag |= 1024));
    }
  else qe(i) ? (i = { default: i, _ctx: Nt }, a = 32) : (i = String(i), u & 64 ? (a = 16, i = [mn(i)]) : a = 8);
  n.children = i, n.shapeFlag |= a;
}
function Df(...n) {
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
  Fn(n, i, 7, [
    a,
    u
  ]);
}
const Rf = lc();
let Kf = 0;
function jf(n, i, a) {
  const u = n.type, f = (i ? i.appContext : n.appContext) || Rf, h = {
    uid: Kf++,
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
    scope: new Iu(
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
    propsOptions: mc(u, f),
    emitsOptions: xc(u, f),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: ct,
    // inheritAttrs
    inheritAttrs: u.inheritAttrs,
    // state
    ctx: ct,
    data: ct,
    props: ct,
    attrs: ct,
    slots: ct,
    refs: ct,
    setupState: ct,
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
  return h.ctx = { _: h }, h.root = i ? i.root : h, h.emit = gf.bind(null, h), n.ce && n.ce(h), h;
}
let qt = null;
const Ff = () => qt || Nt;
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
const ui = (n) => {
  const i = qt;
  return qo(n), n.scope.on(), () => {
    n.scope.off(), qo(i);
  };
}, Js = () => {
  qt && qt.scope.off(), qo(null);
};
function kc(n) {
  return n.vnode.shapeFlag & 4;
}
let _o = !1;
function Bf(n, i = !1, a = !1) {
  i && zs(i);
  const { props: u, children: f } = n.vnode, h = kc(n);
  nf(n, u, h, i), af(n, f, a || i);
  const y = h ? Mf(n, i) : void 0;
  return i && zs(!1), y;
}
function Mf(n, i) {
  const a = n.type;
  n.accessCache = /* @__PURE__ */ Object.create(null), n.proxy = new Proxy(n.ctx, Wl);
  const { setup: u } = a;
  if (u) {
    dr();
    const f = n.setupContext = u.length > 1 ? Uf(n) : null, h = ui(n), y = Eo(
      u,
      n,
      0,
      [
        n.props,
        f
      ]
    ), S = la(y);
    if (hr(), h(), (S || n.sp) && !vi(n) && rc(n), S) {
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
    Pc(n);
}
function Zs(n, i, a) {
  qe(i) ? n.type.__ssrInlineRender ? n.ssrRender = i : n.render = i : ht(i) && (n.setupState = zu(i)), Pc(n);
}
function Pc(n, i, a) {
  const u = n.type;
  n.render || (n.render = u.render || jn);
  {
    const f = ui(n);
    dr();
    try {
      Gl(n);
    } finally {
      hr(), f();
    }
  }
}
const qf = {
  get(n, i) {
    return Lt(n, "get", ""), n[i];
  }
};
function Uf(n) {
  const i = (a) => {
    n.exposed = a || {};
  };
  return {
    attrs: new Proxy(n.attrs, qf),
    slots: n.slots,
    emit: n.emit,
    expose: i
  };
}
function Jo(n) {
  return n.exposed ? n.exposeProxy || (n.exposeProxy = new Proxy(zu(wa(n.exposed)), {
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
function Lf(n) {
  return qe(n) && "__vccOpts" in n;
}
const Kn = (n, i) => Ol(n, i, _o);
function Ga(n, i, a) {
  const u = arguments.length;
  return u === 2 ? ht(i) && !Ne(i) ? xi(i) ? kt(n, null, [i]) : kt(n, i) : kt(n, null, i) : (u > 3 ? a = Array.prototype.slice.call(arguments, 2) : u === 3 && xi(a) && (a = [a]), kt(n, i, a));
}
const Vf = "3.5.17";
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
const Cc = ea ? (n) => ea.createHTML(n) : (n) => n, $f = "http://www.w3.org/2000/svg", Hf = "http://www.w3.org/1998/Math/MathML", cr = typeof document < "u" ? document : null, Xa = cr && /* @__PURE__ */ cr.createElement("template"), Wf = {
  insert: (n, i, a) => {
    i.insertBefore(n, a || null);
  },
  remove: (n) => {
    const i = n.parentNode;
    i && i.removeChild(n);
  },
  createElement: (n, i, a, u) => {
    const f = i === "svg" ? cr.createElementNS($f, n) : i === "mathml" ? cr.createElementNS(Hf, n) : a ? cr.createElement(n, { is: a }) : cr.createElement(n);
    return n === "select" && u && u.multiple != null && f.setAttribute("multiple", u.multiple), f;
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
  insertStaticContent(n, i, a, u, f, h) {
    const y = a ? a.previousSibling : i.lastChild;
    if (f && (f === h || f.nextSibling))
      for (; i.insertBefore(f.cloneNode(!0), a), !(f === h || !(f = f.nextSibling)); )
        ;
    else {
      Xa.innerHTML = Cc(
        u === "svg" ? `<svg>${n}</svg>` : u === "mathml" ? `<math>${n}</math>` : n
      );
      const S = Xa.content;
      if (u === "svg" || u === "mathml") {
        const I = S.firstChild;
        for (; I.firstChild; )
          S.appendChild(I.firstChild);
        S.removeChild(I);
      }
      i.insertBefore(S, a);
    }
    return [
      // first
      y ? y.nextSibling : i.firstChild,
      // last
      a ? a.previousSibling : i.lastChild
    ];
  }
}, Gf = Symbol("_vtc");
function Yf(n, i, a) {
  const u = n[Gf];
  u && (i = (i ? [i, ...u] : [...u]).join(" ")), i == null ? n.removeAttribute("class") : a ? n.setAttribute("class", i) : n.className = i;
}
const Qa = Symbol("_vod"), Xf = Symbol("_vsh"), Qf = Symbol(""), zf = /(^|;)\s*display\s*:/;
function Jf(n, i, a) {
  const u = n.style, f = Tt(a);
  let h = !1;
  if (a && !f) {
    if (i)
      if (Tt(i))
        for (const y of i.split(";")) {
          const S = y.slice(0, y.indexOf(":")).trim();
          a[S] == null && Io(u, S, "");
        }
      else
        for (const y in i)
          a[y] == null && Io(u, y, "");
    for (const y in a)
      y === "display" && (h = !0), Io(u, y, a[y]);
  } else if (f) {
    if (i !== a) {
      const y = u[Qf];
      y && (a += ";" + y), u.cssText = a, h = zf.test(a);
    }
  } else i && n.removeAttribute("style");
  Qa in n && (n[Qa] = h ? u.display : "", n[Xf] && (u.display = "none"));
}
const za = /\s*!important$/;
function Io(n, i, a) {
  if (Ne(a))
    a.forEach((u) => Io(n, i, u));
  else if (a == null && (a = ""), i.startsWith("--"))
    n.setProperty(i, a);
  else {
    const u = Zf(n, i);
    za.test(a) ? n.setProperty(
      ci(u),
      a.replace(za, ""),
      "important"
    ) : n[u] = a;
  }
}
const Ja = ["Webkit", "Moz", "ms"], Ds = {};
function Zf(n, i) {
  const a = Ds[i];
  if (a)
    return a;
  let u = wr(i);
  if (u !== "filter" && u in n)
    return Ds[i] = u;
  u = Au(u);
  for (let f = 0; f < Ja.length; f++) {
    const h = Ja[f] + u;
    if (h in n)
      return Ds[i] = h;
  }
  return i;
}
const Za = "http://www.w3.org/1999/xlink";
function eu(n, i, a, u, f, h = zc(i)) {
  u && i.startsWith("xlink:") ? a == null ? n.removeAttributeNS(Za, i.slice(6, i.length)) : n.setAttributeNS(Za, i, a) : a == null || h && !Pu(a) ? n.removeAttribute(i) : n.setAttribute(
    i,
    h ? "" : Pn(a) ? String(a) : a
  );
}
function tu(n, i, a, u, f) {
  if (i === "innerHTML" || i === "textContent") {
    a != null && (n[i] = i === "innerHTML" ? Cc(a) : a);
    return;
  }
  const h = n.tagName;
  if (i === "value" && h !== "PROGRESS" && // custom elements may use _value internally
  !h.includes("-")) {
    const S = h === "OPTION" ? n.getAttribute("value") || "" : n.value, I = a == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      n.type === "checkbox" ? "on" : ""
    ) : String(a);
    (S !== I || !("_value" in n)) && (n.value = I), a == null && n.removeAttribute(i), n._value = a;
    return;
  }
  let y = !1;
  if (a === "" || a == null) {
    const S = typeof n[i];
    S === "boolean" ? a = Pu(a) : a == null && S === "string" ? (a = "", y = !0) : S === "number" && (a = 0, y = !0);
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
function ed(n, i, a, u) {
  n.removeEventListener(i, a, u);
}
const nu = Symbol("_vei");
function td(n, i, a, u, f = null) {
  const h = n[nu] || (n[nu] = {}), y = h[i];
  if (u && y)
    y.value = u;
  else {
    const [S, I] = nd(i);
    if (u) {
      const L = h[i] = od(
        u,
        f
      );
      Na(n, S, L, I);
    } else y && (ed(n, S, y, I), h[i] = void 0);
  }
}
const ru = /(?:Once|Passive|Capture)$/;
function nd(n) {
  let i;
  if (ru.test(n)) {
    i = {};
    let u;
    for (; u = n.match(ru); )
      n = n.slice(0, n.length - u[0].length), i[u[0].toLowerCase()] = !0;
  }
  return [n[2] === ":" ? n.slice(3) : ci(n.slice(2)), i];
}
let Rs = 0;
const rd = /* @__PURE__ */ Promise.resolve(), id = () => Rs || (rd.then(() => Rs = 0), Rs = Date.now());
function od(n, i) {
  const a = (u) => {
    if (!u._vts)
      u._vts = Date.now();
    else if (u._vts <= a.attached)
      return;
    Fn(
      sd(u, a.value),
      i,
      5,
      [u]
    );
  };
  return a.value = n, a.attached = id(), a;
}
function sd(n, i) {
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
n.charCodeAt(2) > 96 && n.charCodeAt(2) < 123, ad = (n, i, a, u, f, h) => {
  const y = f === "svg";
  i === "class" ? Yf(n, u, y) : i === "style" ? Jf(n, a, u) : Vo(i) ? ua(i) || td(n, i, a, u, h) : (i[0] === "." ? (i = i.slice(1), !0) : i[0] === "^" ? (i = i.slice(1), !1) : ud(n, i, u, y)) ? (tu(n, i, u), !n.tagName.includes("-") && (i === "value" || i === "checked" || i === "selected") && eu(n, i, u, y, h, i !== "value")) : /* #11081 force set props for possible async custom element */ n._isVueCE && (/[A-Z]/.test(i) || !Tt(u)) ? tu(n, wr(i), u, h, i) : (i === "true-value" ? n._trueValue = u : i === "false-value" && (n._falseValue = u), eu(n, i, u, y));
};
function ud(n, i, a, u) {
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
        (y) => a ? ku(wo(y)) : wo(y)
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
      const y = n.options[f], S = wo(y);
      if (a)
        if (u) {
          const I = typeof S;
          I === "string" || I === "number" ? y.selected = i.some((L) => String(L) === String(S)) : y.selected = Zc(i, S) > -1;
        } else
          y.selected = i.has(S);
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
const cd = ["ctrl", "shift", "alt", "meta"], ld = {
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
  exact: (n, i) => cd.some((a) => n[`${a}Key`] && !i.includes(a))
}, hi = (n, i) => {
  const a = n._withMods || (n._withMods = {}), u = i.join(".");
  return a[u] || (a[u] = (f, ...h) => {
    for (let y = 0; y < i.length; y++) {
      const S = ld[i[y]];
      if (S && S(f, i)) return;
    }
    return n(f, ...h);
  });
}, fd = /* @__PURE__ */ Vt({ patchProp: ad }, Wf);
let au;
function dd() {
  return au || (au = cf(fd));
}
const hd = (...n) => {
  const i = dd().createApp(...n), { mount: a } = i;
  return i.mount = (u) => {
    const f = md(u);
    if (!f) return;
    const h = i._component;
    !qe(h) && !h.render && !h.template && (h.template = f.innerHTML), f.nodeType === 1 && (f.textContent = "");
    const y = a(f, !1, pd(f));
    return f instanceof Element && (f.removeAttribute("v-cloak"), f.setAttribute("data-v-app", "")), y;
  }, i;
};
function pd(n) {
  if (n instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && n instanceof MathMLElement)
    return "mathml";
}
function md(n) {
  return Tt(n) ? document.querySelector(n) : n;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let Nc;
const Zo = (n) => Nc = n, Ic = (
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
function yd() {
  const n = Du(!0), i = n.run(() => Zt({}));
  let a = [], u = [];
  const f = wa({
    install(h) {
      Zo(f), f._a = h, h.provide(Ic, f), h.config.globalProperties.$pinia = f, u.forEach((y) => a.push(y)), u = [];
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
const Dc = () => {
};
function uu(n, i, a, u = Dc) {
  n.push(i);
  const f = () => {
    const h = n.indexOf(i);
    h > -1 && (n.splice(h, 1), u());
  };
  return !a && ha() && Ru(f), f;
}
function fi(n, ...i) {
  n.slice().forEach((a) => {
    a(...i);
  });
}
const vd = (n) => n(), cu = Symbol(), Ks = Symbol();
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
const gd = (
  /* istanbul ignore next */
  Symbol()
);
function bd(n) {
  return !ta(n) || !Object.prototype.hasOwnProperty.call(n, gd);
}
const { assign: mr } = Object;
function _d(n) {
  return !!(_t(n) && n.effect);
}
function wd(n, i, a, u) {
  const { state: f, actions: h, getters: y } = i, S = a.state.value[n];
  let I;
  function L() {
    S || (a.state.value[n] = f ? f() : {});
    const F = xl(a.state.value[n]);
    return mr(F, h, Object.keys(y || {}).reduce((R, H) => (R[H] = wa(Kn(() => {
      Zo(a);
      const ie = a._s.get(n);
      return y[H].call(ie, ie);
    })), R), {}));
  }
  return I = Rc(n, L, i, a, u, !0), I;
}
function Rc(n, i, a = {}, u, f, h) {
  let y;
  const S = mr({ actions: {} }, a), I = { deep: !0 };
  let L, F, R = [], H = [], ie;
  const te = u.state.value[n];
  !h && !te && (u.state.value[n] = {}), Zt({});
  let fe;
  function Be(J) {
    let A;
    L = F = !1, typeof J == "function" ? (J(u.state.value[n]), A = {
      type: ho.patchFunction,
      storeId: n,
      events: ie
    }) : (na(u.state.value[n], J), A = {
      type: ho.patchObject,
      payload: J,
      storeId: n,
      events: ie
    });
    const se = fe = Symbol();
    xa().then(() => {
      fe === se && (L = !0);
    }), F = !0, fi(R, A, u.state.value[n]);
  }
  const Pe = h ? function() {
    const { state: A } = a, se = A ? A() : {};
    this.$patch((Te) => {
      mr(Te, se);
    });
  } : (
    /* istanbul ignore next */
    Dc
  );
  function Ie() {
    y.stop(), R = [], H = [], u._s.delete(n);
  }
  const Fe = (J, A = "") => {
    if (cu in J)
      return J[Ks] = A, J;
    const se = function() {
      Zo(u);
      const Te = Array.from(arguments), ae = [], Ee = [];
      function Qe(ue) {
        ae.push(ue);
      }
      function He(ue) {
        Ee.push(ue);
      }
      fi(H, {
        args: Te,
        name: se[Ks],
        store: ge,
        after: Qe,
        onError: He
      });
      let Ke;
      try {
        Ke = J.apply(this && this.$id === n ? this : ge, Te);
      } catch (ue) {
        throw fi(Ee, ue), ue;
      }
      return Ke instanceof Promise ? Ke.then((ue) => (fi(ae, ue), ue)).catch((ue) => (fi(Ee, ue), Promise.reject(ue))) : (fi(ae, Ke), Ke);
    };
    return se[cu] = !0, se[Ks] = A, se;
  }, pe = {
    _p: u,
    // _s: scope,
    $id: n,
    $onAction: uu.bind(null, H),
    $patch: Be,
    $reset: Pe,
    $subscribe(J, A = {}) {
      const se = uu(R, J, A.detached, () => Te()), Te = y.run(() => Co(() => u.state.value[n], (ae) => {
        (A.flush === "sync" ? F : L) && J({
          storeId: n,
          type: ho.direct,
          events: ie
        }, ae);
      }, mr({}, I, A)));
      return se;
    },
    $dispose: Ie
  }, ge = Yo(pe);
  u._s.set(n, ge);
  const z = (u._a && u._a.runWithContext || vd)(() => u._e.run(() => (y = Du()).run(() => i({ action: Fe }))));
  for (const J in z) {
    const A = z[J];
    if (_t(A) && !_d(A) || _r(A))
      h || (te && bd(A) && (_t(A) ? A.value = te[J] : na(A, te[J])), u.state.value[n][J] = A);
    else if (typeof A == "function") {
      const se = Fe(A, J);
      z[J] = se, S.actions[J] = A;
    }
  }
  return mr(ge, z), mr(nt(ge), z), Object.defineProperty(ge, "$state", {
    get: () => u.state.value[n],
    set: (J) => {
      Be((A) => {
        mr(A, J);
      });
    }
  }), u._p.forEach((J) => {
    mr(ge, y.run(() => J({
      store: ge,
      app: u._a,
      pinia: u,
      options: S
    })));
  }), te && h && a.hydrate && a.hydrate(ge.$state, te), L = !0, F = !0, ge;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function xd(n, i, a) {
  let u;
  const f = typeof i == "function";
  u = f ? a : i;
  function h(y, S) {
    const I = tf();
    return y = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    y || (I ? lo(Ic, null) : null), y && Zo(y), y = Nc, y._s.has(n) || (f ? Rc(n, i, u, y) : wd(n, u, y)), y._s.get(n);
  }
  return h.$id = n, h;
}
var Ed = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Td(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
function Sd(n) {
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
const Od = {}, Ad = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Od
}, Symbol.toStringTag, { value: "Module" })), fu = /* @__PURE__ */ Sd(Ad);
var du;
function kd() {
  return du || (du = 1, function(n) {
    (function(i) {
      i.parser = function(P, _) {
        return new u(P, _);
      }, i.SAXParser = u, i.SAXStream = F, i.createStream = L, i.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function u(P, _) {
        if (!(this instanceof u))
          return new u(P, _);
        var K = this;
        h(K), K.q = K.c = "", K.bufferCheckPosition = i.MAX_BUFFER_LENGTH, K.opt = _ || {}, K.opt.lowercase = K.opt.lowercase || K.opt.lowercasetags, K.looseCase = K.opt.lowercase ? "toLowerCase" : "toUpperCase", K.tags = [], K.closed = K.closedRoot = K.sawRoot = !1, K.tag = K.error = null, K.strict = !!P, K.noscript = !!(P || K.opt.noscript), K.state = A.BEGIN, K.strictEntities = K.opt.strictEntities, K.ENTITIES = K.strictEntities ? Object.create(i.XML_ENTITIES) : Object.create(i.ENTITIES), K.attribList = [], K.opt.xmlns && (K.ns = Object.create(fe)), K.opt.unquotedAttributeValues === void 0 && (K.opt.unquotedAttributeValues = !P), K.trackPosition = K.opt.position !== !1, K.trackPosition && (K.position = K.line = K.column = 0), Te(K, "onready");
      }
      Object.create || (Object.create = function(P) {
        function _() {
        }
        _.prototype = P;
        var K = new _();
        return K;
      }), Object.keys || (Object.keys = function(P) {
        var _ = [];
        for (var K in P) P.hasOwnProperty(K) && _.push(K);
        return _;
      });
      function f(P) {
        for (var _ = Math.max(i.MAX_BUFFER_LENGTH, 10), K = 0, q = 0, $e = a.length; q < $e; q++) {
          var k = P[a[q]].length;
          if (k > _)
            switch (a[q]) {
              case "textNode":
                Ee(P);
                break;
              case "cdata":
                ae(P, "oncdata", P.cdata), P.cdata = "";
                break;
              case "script":
                ae(P, "onscript", P.script), P.script = "";
                break;
              default:
                He(P, "Max buffer length exceeded: " + a[q]);
            }
          K = Math.max(K, k);
        }
        var j = i.MAX_BUFFER_LENGTH - K;
        P.bufferCheckPosition = j + P.position;
      }
      function h(P) {
        for (var _ = 0, K = a.length; _ < K; _++)
          P[a[_]] = "";
      }
      function y(P) {
        Ee(P), P.cdata !== "" && (ae(P, "oncdata", P.cdata), P.cdata = ""), P.script !== "" && (ae(P, "onscript", P.script), P.script = "");
      }
      u.prototype = {
        end: function() {
          Ke(this);
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
      var S;
      try {
        S = fu.Stream;
      } catch {
        S = function() {
        };
      }
      S || (S = function() {
      });
      var I = i.EVENTS.filter(function(P) {
        return P !== "error" && P !== "end";
      });
      function L(P, _) {
        return new F(P, _);
      }
      function F(P, _) {
        if (!(this instanceof F))
          return new F(P, _);
        S.apply(this), this._parser = new u(P, _), this.writable = !0, this.readable = !0;
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
            set: function($e) {
              if (!$e)
                return K.removeAllListeners(q), K._parser["on" + q] = $e, $e;
              K.on(q, $e);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      F.prototype = Object.create(S.prototype, {
        constructor: {
          value: F
        }
      }), F.prototype.write = function(P) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(P)) {
          if (!this._decoder) {
            var _ = fu.StringDecoder;
            this._decoder = new _("utf8");
          }
          P = this._decoder.write(P);
        }
        return this._parser.write(P.toString()), this.emit("data", P), !0;
      }, F.prototype.end = function(P) {
        return P && P.length && this.write(P), this._parser.end(), !0;
      }, F.prototype.on = function(P, _) {
        var K = this;
        return !K._parser["on" + P] && I.indexOf(P) !== -1 && (K._parser["on" + P] = function() {
          var q = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          q.splice(0, 0, P), K.emit.apply(K, q);
        }), S.prototype.on.call(K, P, _);
      };
      var R = "[CDATA[", H = "DOCTYPE", ie = "http://www.w3.org/XML/1998/namespace", te = "http://www.w3.org/2000/xmlns/", fe = { xml: ie, xmlns: te }, Be = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Pe = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, Ie = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, Fe = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function pe(P) {
        return P === " " || P === `
` || P === "\r" || P === "	";
      }
      function ge(P) {
        return P === '"' || P === "'";
      }
      function Q(P) {
        return P === ">" || pe(P);
      }
      function z(P, _) {
        return P.test(_);
      }
      function J(P, _) {
        return !z(P, _);
      }
      var A = 0;
      i.STATE = {
        BEGIN: A++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: A++,
        // leading whitespace
        TEXT: A++,
        // general stuff
        TEXT_ENTITY: A++,
        // &amp and such.
        OPEN_WAKA: A++,
        // <
        SGML_DECL: A++,
        // <!BLARG
        SGML_DECL_QUOTED: A++,
        // <!BLARG foo "bar
        DOCTYPE: A++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: A++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: A++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: A++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: A++,
        // <!-
        COMMENT: A++,
        // <!--
        COMMENT_ENDING: A++,
        // <!-- blah -
        COMMENT_ENDED: A++,
        // <!-- blah --
        CDATA: A++,
        // <![CDATA[ something
        CDATA_ENDING: A++,
        // ]
        CDATA_ENDING_2: A++,
        // ]]
        PROC_INST: A++,
        // <?hi
        PROC_INST_BODY: A++,
        // <?hi there
        PROC_INST_ENDING: A++,
        // <?hi "there" ?
        OPEN_TAG: A++,
        // <strong
        OPEN_TAG_SLASH: A++,
        // <strong /
        ATTRIB: A++,
        // <a
        ATTRIB_NAME: A++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: A++,
        // <a foo _
        ATTRIB_VALUE: A++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: A++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: A++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: A++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: A++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: A++,
        // <foo bar=&quot
        CLOSE_TAG: A++,
        // </a
        CLOSE_TAG_SAW_WHITE: A++,
        // </a   >
        SCRIPT: A++,
        // <script> ...
        SCRIPT_ENDING: A++
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
      }, Object.keys(i.ENTITIES).forEach(function(P) {
        var _ = i.ENTITIES[P], K = typeof _ == "number" ? String.fromCharCode(_) : _;
        i.ENTITIES[P] = K;
      });
      for (var se in i.STATE)
        i.STATE[i.STATE[se]] = se;
      A = i.STATE;
      function Te(P, _, K) {
        P[_] && P[_](K);
      }
      function ae(P, _, K) {
        P.textNode && Ee(P), Te(P, _, K);
      }
      function Ee(P) {
        P.textNode = Qe(P.opt, P.textNode), P.textNode && Te(P, "ontext", P.textNode), P.textNode = "";
      }
      function Qe(P, _) {
        return P.trim && (_ = _.trim()), P.normalize && (_ = _.replace(/\s+/g, " ")), _;
      }
      function He(P, _) {
        return Ee(P), P.trackPosition && (_ += `
Line: ` + P.line + `
Column: ` + P.column + `
Char: ` + P.c), _ = new Error(_), P.error = _, Te(P, "onerror", _), P;
      }
      function Ke(P) {
        return P.sawRoot && !P.closedRoot && ue(P, "Unclosed root tag"), P.state !== A.BEGIN && P.state !== A.BEGIN_WHITESPACE && P.state !== A.TEXT && He(P, "Unexpected end"), Ee(P), P.c = "", P.closed = !0, Te(P, "onend"), u.call(P, P.strict, P.opt), P;
      }
      function ue(P, _) {
        if (typeof P != "object" || !(P instanceof u))
          throw new Error("bad call to strictFail");
        P.strict && He(P, _);
      }
      function De(P) {
        P.strict || (P.tagName = P.tagName[P.looseCase]());
        var _ = P.tags[P.tags.length - 1] || P, K = P.tag = { name: P.tagName, attributes: {} };
        P.opt.xmlns && (K.ns = _.ns), P.attribList.length = 0, ae(P, "onopentagstart", K);
      }
      function Je(P, _) {
        var K = P.indexOf(":"), q = K < 0 ? ["", P] : P.split(":"), $e = q[0], k = q[1];
        return _ && P === "xmlns" && ($e = "xmlns", k = ""), { prefix: $e, local: k };
      }
      function at(P) {
        if (P.strict || (P.attribName = P.attribName[P.looseCase]()), P.attribList.indexOf(P.attribName) !== -1 || P.tag.attributes.hasOwnProperty(P.attribName)) {
          P.attribName = P.attribValue = "";
          return;
        }
        if (P.opt.xmlns) {
          var _ = Je(P.attribName, !0), K = _.prefix, q = _.local;
          if (K === "xmlns")
            if (q === "xml" && P.attribValue !== ie)
              ue(
                P,
                "xml: prefix must be bound to " + ie + `
Actual: ` + P.attribValue
              );
            else if (q === "xmlns" && P.attribValue !== te)
              ue(
                P,
                "xmlns: prefix must be bound to " + te + `
Actual: ` + P.attribValue
              );
            else {
              var $e = P.tag, k = P.tags[P.tags.length - 1] || P;
              $e.ns === k.ns && ($e.ns = Object.create(k.ns)), $e.ns[q] = P.attribValue;
            }
          P.attribList.push([P.attribName, P.attribValue]);
        } else
          P.tag.attributes[P.attribName] = P.attribValue, ae(P, "onattribute", {
            name: P.attribName,
            value: P.attribValue
          });
        P.attribName = P.attribValue = "";
      }
      function yt(P, _) {
        if (P.opt.xmlns) {
          var K = P.tag, q = Je(P.tagName);
          K.prefix = q.prefix, K.local = q.local, K.uri = K.ns[q.prefix] || "", K.prefix && !K.uri && (ue(P, "Unbound namespace prefix: " + JSON.stringify(P.tagName)), K.uri = q.prefix);
          var $e = P.tags[P.tags.length - 1] || P;
          K.ns && $e.ns !== K.ns && Object.keys(K.ns).forEach(function(Oe) {
            ae(P, "onopennamespace", {
              prefix: Oe,
              uri: K.ns[Oe]
            });
          });
          for (var k = 0, j = P.attribList.length; k < j; k++) {
            var X = P.attribList[k], ee = X[0], oe = X[1], ne = Je(ee, !0), he = ne.prefix, ye = ne.local, ce = he === "" ? "" : K.ns[he] || "", re = {
              name: ee,
              value: oe,
              prefix: he,
              local: ye,
              uri: ce
            };
            he && he !== "xmlns" && !ce && (ue(P, "Unbound namespace prefix: " + JSON.stringify(he)), re.uri = he), P.tag.attributes[ee] = re, ae(P, "onattribute", re);
          }
          P.attribList.length = 0;
        }
        P.tag.isSelfClosing = !!_, P.sawRoot = !0, P.tags.push(P.tag), ae(P, "onopentag", P.tag), _ || (!P.noscript && P.tagName.toLowerCase() === "script" ? P.state = A.SCRIPT : P.state = A.TEXT, P.tag = null, P.tagName = ""), P.attribName = P.attribValue = "", P.attribList.length = 0;
      }
      function Pt(P) {
        if (!P.tagName) {
          ue(P, "Weird empty close tag."), P.textNode += "</>", P.state = A.TEXT;
          return;
        }
        if (P.script) {
          if (P.tagName !== "script") {
            P.script += "</" + P.tagName + ">", P.tagName = "", P.state = A.SCRIPT;
            return;
          }
          ae(P, "onscript", P.script), P.script = "";
        }
        var _ = P.tags.length, K = P.tagName;
        P.strict || (K = K[P.looseCase]());
        for (var q = K; _--; ) {
          var $e = P.tags[_];
          if ($e.name !== q)
            ue(P, "Unexpected close tag");
          else
            break;
        }
        if (_ < 0) {
          ue(P, "Unmatched closing tag: " + P.tagName), P.textNode += "</" + P.tagName + ">", P.state = A.TEXT;
          return;
        }
        P.tagName = K;
        for (var k = P.tags.length; k-- > _; ) {
          var j = P.tag = P.tags.pop();
          P.tagName = P.tag.name, ae(P, "onclosetag", P.tagName);
          var X = {};
          for (var ee in j.ns)
            X[ee] = j.ns[ee];
          var oe = P.tags[P.tags.length - 1] || P;
          P.opt.xmlns && j.ns !== oe.ns && Object.keys(j.ns).forEach(function(ne) {
            var he = j.ns[ne];
            ae(P, "onclosenamespace", { prefix: ne, uri: he });
          });
        }
        _ === 0 && (P.closedRoot = !0), P.tagName = P.attribValue = P.attribName = "", P.attribList.length = 0, P.state = A.TEXT;
      }
      function Ct(P) {
        var _ = P.entity, K = _.toLowerCase(), q, $e = "";
        return P.ENTITIES[_] ? P.ENTITIES[_] : P.ENTITIES[K] ? P.ENTITIES[K] : (_ = K, _.charAt(0) === "#" && (_.charAt(1) === "x" ? (_ = _.slice(2), q = parseInt(_, 16), $e = q.toString(16)) : (_ = _.slice(1), q = parseInt(_, 10), $e = q.toString(10))), _ = _.replace(/^0+/, ""), isNaN(q) || $e.toLowerCase() !== _ ? (ue(P, "Invalid character entity"), "&" + P.entity + ";") : String.fromCodePoint(q));
      }
      function Nn(P, _) {
        _ === "<" ? (P.state = A.OPEN_WAKA, P.startTagPosition = P.position) : pe(_) || (ue(P, "Non-whitespace before first tag."), P.textNode = _, P.state = A.TEXT);
      }
      function tn(P, _) {
        var K = "";
        return _ < P.length && (K = P.charAt(_)), K;
      }
      function wt(P) {
        var _ = this;
        if (this.error)
          throw this.error;
        if (_.closed)
          return He(
            _,
            "Cannot write after close. Assign an onready handler."
          );
        if (P === null)
          return Ke(_);
        typeof P == "object" && (P = P.toString());
        for (var K = 0, q = ""; q = tn(P, K++), _.c = q, !!q; )
          switch (_.trackPosition && (_.position++, q === `
` ? (_.line++, _.column = 0) : _.column++), _.state) {
            case A.BEGIN:
              if (_.state = A.BEGIN_WHITESPACE, q === "\uFEFF")
                continue;
              Nn(_, q);
              continue;
            case A.BEGIN_WHITESPACE:
              Nn(_, q);
              continue;
            case A.TEXT:
              if (_.sawRoot && !_.closedRoot) {
                for (var $e = K - 1; q && q !== "<" && q !== "&"; )
                  q = tn(P, K++), q && _.trackPosition && (_.position++, q === `
` ? (_.line++, _.column = 0) : _.column++);
                _.textNode += P.substring($e, K - 1);
              }
              q === "<" && !(_.sawRoot && _.closedRoot && !_.strict) ? (_.state = A.OPEN_WAKA, _.startTagPosition = _.position) : (!pe(q) && (!_.sawRoot || _.closedRoot) && ue(_, "Text data outside of root node."), q === "&" ? _.state = A.TEXT_ENTITY : _.textNode += q);
              continue;
            case A.SCRIPT:
              q === "<" ? _.state = A.SCRIPT_ENDING : _.script += q;
              continue;
            case A.SCRIPT_ENDING:
              q === "/" ? _.state = A.CLOSE_TAG : (_.script += "<" + q, _.state = A.SCRIPT);
              continue;
            case A.OPEN_WAKA:
              if (q === "!")
                _.state = A.SGML_DECL, _.sgmlDecl = "";
              else if (!pe(q)) if (z(Be, q))
                _.state = A.OPEN_TAG, _.tagName = q;
              else if (q === "/")
                _.state = A.CLOSE_TAG, _.tagName = "";
              else if (q === "?")
                _.state = A.PROC_INST, _.procInstName = _.procInstBody = "";
              else {
                if (ue(_, "Unencoded <"), _.startTagPosition + 1 < _.position) {
                  var k = _.position - _.startTagPosition;
                  q = new Array(k).join(" ") + q;
                }
                _.textNode += "<" + q, _.state = A.TEXT;
              }
              continue;
            case A.SGML_DECL:
              if (_.sgmlDecl + q === "--") {
                _.state = A.COMMENT, _.comment = "", _.sgmlDecl = "";
                continue;
              }
              _.doctype && _.doctype !== !0 && _.sgmlDecl ? (_.state = A.DOCTYPE_DTD, _.doctype += "<!" + _.sgmlDecl + q, _.sgmlDecl = "") : (_.sgmlDecl + q).toUpperCase() === R ? (ae(_, "onopencdata"), _.state = A.CDATA, _.sgmlDecl = "", _.cdata = "") : (_.sgmlDecl + q).toUpperCase() === H ? (_.state = A.DOCTYPE, (_.doctype || _.sawRoot) && ue(
                _,
                "Inappropriately located doctype declaration"
              ), _.doctype = "", _.sgmlDecl = "") : q === ">" ? (ae(_, "onsgmldeclaration", _.sgmlDecl), _.sgmlDecl = "", _.state = A.TEXT) : (ge(q) && (_.state = A.SGML_DECL_QUOTED), _.sgmlDecl += q);
              continue;
            case A.SGML_DECL_QUOTED:
              q === _.q && (_.state = A.SGML_DECL, _.q = ""), _.sgmlDecl += q;
              continue;
            case A.DOCTYPE:
              q === ">" ? (_.state = A.TEXT, ae(_, "ondoctype", _.doctype), _.doctype = !0) : (_.doctype += q, q === "[" ? _.state = A.DOCTYPE_DTD : ge(q) && (_.state = A.DOCTYPE_QUOTED, _.q = q));
              continue;
            case A.DOCTYPE_QUOTED:
              _.doctype += q, q === _.q && (_.q = "", _.state = A.DOCTYPE);
              continue;
            case A.DOCTYPE_DTD:
              q === "]" ? (_.doctype += q, _.state = A.DOCTYPE) : q === "<" ? (_.state = A.OPEN_WAKA, _.startTagPosition = _.position) : ge(q) ? (_.doctype += q, _.state = A.DOCTYPE_DTD_QUOTED, _.q = q) : _.doctype += q;
              continue;
            case A.DOCTYPE_DTD_QUOTED:
              _.doctype += q, q === _.q && (_.state = A.DOCTYPE_DTD, _.q = "");
              continue;
            case A.COMMENT:
              q === "-" ? _.state = A.COMMENT_ENDING : _.comment += q;
              continue;
            case A.COMMENT_ENDING:
              q === "-" ? (_.state = A.COMMENT_ENDED, _.comment = Qe(_.opt, _.comment), _.comment && ae(_, "oncomment", _.comment), _.comment = "") : (_.comment += "-" + q, _.state = A.COMMENT);
              continue;
            case A.COMMENT_ENDED:
              q !== ">" ? (ue(_, "Malformed comment"), _.comment += "--" + q, _.state = A.COMMENT) : _.doctype && _.doctype !== !0 ? _.state = A.DOCTYPE_DTD : _.state = A.TEXT;
              continue;
            case A.CDATA:
              q === "]" ? _.state = A.CDATA_ENDING : _.cdata += q;
              continue;
            case A.CDATA_ENDING:
              q === "]" ? _.state = A.CDATA_ENDING_2 : (_.cdata += "]" + q, _.state = A.CDATA);
              continue;
            case A.CDATA_ENDING_2:
              q === ">" ? (_.cdata && ae(_, "oncdata", _.cdata), ae(_, "onclosecdata"), _.cdata = "", _.state = A.TEXT) : q === "]" ? _.cdata += "]" : (_.cdata += "]]" + q, _.state = A.CDATA);
              continue;
            case A.PROC_INST:
              q === "?" ? _.state = A.PROC_INST_ENDING : pe(q) ? _.state = A.PROC_INST_BODY : _.procInstName += q;
              continue;
            case A.PROC_INST_BODY:
              if (!_.procInstBody && pe(q))
                continue;
              q === "?" ? _.state = A.PROC_INST_ENDING : _.procInstBody += q;
              continue;
            case A.PROC_INST_ENDING:
              q === ">" ? (ae(_, "onprocessinginstruction", {
                name: _.procInstName,
                body: _.procInstBody
              }), _.procInstName = _.procInstBody = "", _.state = A.TEXT) : (_.procInstBody += "?" + q, _.state = A.PROC_INST_BODY);
              continue;
            case A.OPEN_TAG:
              z(Pe, q) ? _.tagName += q : (De(_), q === ">" ? yt(_) : q === "/" ? _.state = A.OPEN_TAG_SLASH : (pe(q) || ue(_, "Invalid character in tag name"), _.state = A.ATTRIB));
              continue;
            case A.OPEN_TAG_SLASH:
              q === ">" ? (yt(_, !0), Pt(_)) : (ue(_, "Forward-slash in opening tag not followed by >"), _.state = A.ATTRIB);
              continue;
            case A.ATTRIB:
              if (pe(q))
                continue;
              q === ">" ? yt(_) : q === "/" ? _.state = A.OPEN_TAG_SLASH : z(Be, q) ? (_.attribName = q, _.attribValue = "", _.state = A.ATTRIB_NAME) : ue(_, "Invalid attribute name");
              continue;
            case A.ATTRIB_NAME:
              q === "=" ? _.state = A.ATTRIB_VALUE : q === ">" ? (ue(_, "Attribute without value"), _.attribValue = _.attribName, at(_), yt(_)) : pe(q) ? _.state = A.ATTRIB_NAME_SAW_WHITE : z(Pe, q) ? _.attribName += q : ue(_, "Invalid attribute name");
              continue;
            case A.ATTRIB_NAME_SAW_WHITE:
              if (q === "=")
                _.state = A.ATTRIB_VALUE;
              else {
                if (pe(q))
                  continue;
                ue(_, "Attribute without value"), _.tag.attributes[_.attribName] = "", _.attribValue = "", ae(_, "onattribute", {
                  name: _.attribName,
                  value: ""
                }), _.attribName = "", q === ">" ? yt(_) : z(Be, q) ? (_.attribName = q, _.state = A.ATTRIB_NAME) : (ue(_, "Invalid attribute name"), _.state = A.ATTRIB);
              }
              continue;
            case A.ATTRIB_VALUE:
              if (pe(q))
                continue;
              ge(q) ? (_.q = q, _.state = A.ATTRIB_VALUE_QUOTED) : (_.opt.unquotedAttributeValues || He(_, "Unquoted attribute value"), _.state = A.ATTRIB_VALUE_UNQUOTED, _.attribValue = q);
              continue;
            case A.ATTRIB_VALUE_QUOTED:
              if (q !== _.q) {
                q === "&" ? _.state = A.ATTRIB_VALUE_ENTITY_Q : _.attribValue += q;
                continue;
              }
              at(_), _.q = "", _.state = A.ATTRIB_VALUE_CLOSED;
              continue;
            case A.ATTRIB_VALUE_CLOSED:
              pe(q) ? _.state = A.ATTRIB : q === ">" ? yt(_) : q === "/" ? _.state = A.OPEN_TAG_SLASH : z(Be, q) ? (ue(_, "No whitespace between attributes"), _.attribName = q, _.attribValue = "", _.state = A.ATTRIB_NAME) : ue(_, "Invalid attribute name");
              continue;
            case A.ATTRIB_VALUE_UNQUOTED:
              if (!Q(q)) {
                q === "&" ? _.state = A.ATTRIB_VALUE_ENTITY_U : _.attribValue += q;
                continue;
              }
              at(_), q === ">" ? yt(_) : _.state = A.ATTRIB;
              continue;
            case A.CLOSE_TAG:
              if (_.tagName)
                q === ">" ? Pt(_) : z(Pe, q) ? _.tagName += q : _.script ? (_.script += "</" + _.tagName, _.tagName = "", _.state = A.SCRIPT) : (pe(q) || ue(_, "Invalid tagname in closing tag"), _.state = A.CLOSE_TAG_SAW_WHITE);
              else {
                if (pe(q))
                  continue;
                J(Be, q) ? _.script ? (_.script += "</" + q, _.state = A.SCRIPT) : ue(_, "Invalid tagname in closing tag.") : _.tagName = q;
              }
              continue;
            case A.CLOSE_TAG_SAW_WHITE:
              if (pe(q))
                continue;
              q === ">" ? Pt(_) : ue(_, "Invalid characters in closing tag");
              continue;
            case A.TEXT_ENTITY:
            case A.ATTRIB_VALUE_ENTITY_Q:
            case A.ATTRIB_VALUE_ENTITY_U:
              var j, X;
              switch (_.state) {
                case A.TEXT_ENTITY:
                  j = A.TEXT, X = "textNode";
                  break;
                case A.ATTRIB_VALUE_ENTITY_Q:
                  j = A.ATTRIB_VALUE_QUOTED, X = "attribValue";
                  break;
                case A.ATTRIB_VALUE_ENTITY_U:
                  j = A.ATTRIB_VALUE_UNQUOTED, X = "attribValue";
                  break;
              }
              if (q === ";") {
                var ee = Ct(_);
                _.opt.unparsedEntities && !Object.values(i.XML_ENTITIES).includes(ee) ? (_.entity = "", _.state = j, _.write(ee)) : (_[X] += ee, _.entity = "", _.state = j);
              } else z(_.entity.length ? Fe : Ie, q) ? _.entity += q : (ue(_, "Invalid character in entity name"), _[X] += "&" + _.entity + q, _.entity = "", _.state = j);
              continue;
            default:
              throw new Error(_, "Unknown state: " + _.state);
          }
        return _.position >= _.bufferCheckPosition && f(_), _;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var P = String.fromCharCode, _ = Math.floor, K = function() {
          var q = 16384, $e = [], k, j, X = -1, ee = arguments.length;
          if (!ee)
            return "";
          for (var oe = ""; ++X < ee; ) {
            var ne = Number(arguments[X]);
            if (!isFinite(ne) || // `NaN`, `+Infinity`, or `-Infinity`
            ne < 0 || // not a valid Unicode code point
            ne > 1114111 || // not a valid Unicode code point
            _(ne) !== ne)
              throw RangeError("Invalid code point: " + ne);
            ne <= 65535 ? $e.push(ne) : (ne -= 65536, k = (ne >> 10) + 55296, j = ne % 1024 + 56320, $e.push(k, j)), (X + 1 === ee || $e.length > q) && (oe += P.apply(null, $e), $e.length = 0);
          }
          return oe;
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
kd();
const mt = "sclElements", js = "id, tagName, &attributes.uuid, &attributes.id, attributes.name, parent.id, parent.tagName, *children.id, *children.tagName", ai = "attachedFiles", hu = "id, filename, file", Pd = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  }
};
var ra = { exports: {} }, Cd = ra.exports, pu;
function Nd() {
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
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Ed, y = Object.keys, S = Array.isArray;
      function I(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var L = Object.getPrototypeOf, F = {}.hasOwnProperty;
      function R(e, t) {
        return F.call(e, t);
      }
      function H(e, t) {
        typeof t == "function" && (t = t(L(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          te(e, r, t[r]);
        });
      }
      var ie = Object.defineProperty;
      function te(e, t, r, o) {
        ie(e, t, I(r && R(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function fe(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), te(e.prototype, "constructor", e), { extend: H.bind(null, e.prototype) };
        } };
      }
      var Be = Object.getOwnPropertyDescriptor, Pe = [].slice;
      function Ie(e, t, r) {
        return Pe.call(e, t, r);
      }
      function Fe(e, t) {
        return t(e);
      }
      function pe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function ge(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Q(e, t) {
        if (typeof t == "string" && R(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = Q(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var d = e[t.substr(0, l)];
          return d == null ? void 0 : Q(d, t.substr(l + 1));
        }
      }
      function z(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          pe(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) z(e, t[o], r[o]);
        } else {
          var c, l, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (l = t.substr(d + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : z(d = !(d = e[c]) || !R(e, c) ? e[c] = {} : d, l, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function J(e) {
        var t, r = {};
        for (t in e) R(e, t) && (r[t] = e[t]);
        return r;
      }
      var A = [].concat;
      function se(e) {
        return A.apply([], e);
      }
      var Re = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(se([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), Te = new Set(Re.map(function(e) {
        return h[e];
      })), ae = null;
      function Ee(e) {
        return ae = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = ae.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], ae.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (Te.has(r.constructor)) o = r;
          else {
            var l, d = L(r);
            for (l in o = d === Object.prototype ? {} : Object.create(d), ae.set(r, o), r) R(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), ae = null, e;
      }
      var Qe = {}.toString;
      function He(e) {
        return Qe.call(e).slice(8, -1);
      }
      var Ke = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ue = typeof Ke == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ke]) && t.apply(e);
      } : function() {
        return null;
      };
      function De(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Je = {};
      function at(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === Je && typeof e == "string") return [e];
          if (s = ue(e)) {
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
      }, ke = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], pt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ke), Pt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ct(e, t) {
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
      fe(Ct).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), fe(tn).from(Ct), fe(wt).from(Ct);
      var P = pt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = Ct, K = pt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Pt[t] || r, this.inner = null);
        }
        return fe(o).from(_), e[t] = o, e;
      }, {});
      K.Syntax = SyntaxError, K.Type = TypeError, K.Range = RangeError;
      var q = ke.reduce(function(e, t) {
        return e[t + "Error"] = K[t], e;
      }, {}), $e = pt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = K[t]), e;
      }, {});
      function k() {
      }
      function j(e) {
        return e;
      }
      function X(e, t) {
        return e == null || e === j ? t : function(r) {
          return t(e(r));
        };
      }
      function ee(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function oe(e, t) {
        return e === k ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? ee(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? ee(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function ne(e, t) {
        return e === k ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? ee(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? ee(o, this.onerror) : o);
        };
      }
      function he(e, t) {
        return e === k ? t : function(r) {
          var o = e.apply(this, arguments);
          I(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ee(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? ee(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : I(o, r);
        };
      }
      function ye(e, t) {
        return e === k ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ce(e, t) {
        return e === k ? t : function() {
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
      $e.ModifyError = tn, $e.DexieError = Ct, $e.BulkError = wt;
      var re = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Oe(e) {
        re = e;
      }
      var ve = {}, Ae = 100, Re = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, L(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, L(t), e];
      }(), ke = Re[0], pt = Re[1], Re = Re[2], pt = pt && pt.then, Ve = ke && ke.constructor, Ge = !!Re, lt = function(e, t) {
        nn.push([e, t]), St && (queueMicrotask(ts), St = !1);
      }, bt = !0, St = !0, ft = [], $t = [], In = j, rt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: k, pgp: !1, env: {}, finalize: k }, Z = rt, nn = [], Ht = 0, Bn = [];
      function G(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = Z;
        if (typeof e != "function") {
          if (e !== ve) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Tr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var l = o._lib && sn();
                c && typeof c.then == "function" ? r(o, function(d, m) {
                  c instanceof G ? c._then(d, m) : c.then(d, m);
                }) : (o._state = !0, o._value = c, Si(o)), l && an();
              }
            }, Tr.bind(null, o));
          } catch (c) {
            Tr(o, c);
          }
        }(this, e);
      }
      var Er = { get: function() {
        var e = Z, t = Ln;
        function r(o, s) {
          var c = this, l = !e.global && (e !== Z || t !== Ln), d = l && !Dt(), m = new G(function(g, w) {
            Sr(c, new Ti(Ai(o, e, l, d), Ai(s, e, l, d), g, w, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ve, r;
      }, set: function(e) {
        te(this, "then", e && e.prototype === ve ? Er : { get: function() {
          return e;
        }, set: Er.set });
      } };
      function Ti(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function Tr(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && sn(), t = In(t), e._state = !1, e._value = t, o = e, ft.some(function(s) {
          return s._value === o._value;
        }) || ft.push(o), Si(e), r && an());
      }
      function Si(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) Sr(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ht === 0 && (++Ht, lt(function() {
          --Ht == 0 && Or();
        }, []));
      }
      function Sr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ht, lt(es, [r, e, t]);
        } else e._listeners.push(t);
      }
      function es(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = re && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var l = ft.length; l; ) if (ft[--l]._value === c._value) return ft.splice(l, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Ht == 0 && Or(), --r.psd.ref || r.psd.finalize();
        }
      }
      function ts() {
        Wt(rt, function() {
          sn() && an();
        });
      }
      function sn() {
        var e = bt;
        return St = bt = !1, e;
      }
      function an() {
        var e, t, r;
        do
          for (; 0 < nn.length; ) for (e = nn, nn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < nn.length);
        St = bt = !0;
      }
      function Or() {
        var e = ft;
        ft = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Bn.slice(0), r = t.length; r; ) t[--r]();
      }
      function Mn(e) {
        return new G(ve, !1, e);
      }
      function je(e, t) {
        var r = Z;
        return function() {
          var o = sn(), s = Z;
          try {
            return Rt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Rt(s, !1), o && an();
          }
        };
      }
      H(G.prototype, { then: Er, _then: function(e, t) {
        Sr(this, new Ti(null, null, e, t, Z));
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
          return G.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return G.resolve(e()).then(function() {
            return Mn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new G(function(o, s) {
          var c = setTimeout(function() {
            return s(new K.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && te(G.prototype, Symbol.toStringTag, "Dexie.Promise"), rt.env = Oi(), H(G, { all: function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return G.resolve(s).then(function(l) {
              e[c] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof G ? e : e && typeof e.then == "function" ? new G(function(t, r) {
          e.then(t, r);
        }) : new G(ve, !0, e);
      }, reject: Mn, race: function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t, r) {
          e.map(function(o) {
            return G.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return Z;
      }, set: function(e) {
        return Z = e;
      } }, totalEchoes: { get: function() {
        return Ln;
      } }, newPSD: It, usePSD: Wt, scheduler: { get: function() {
        return lt;
      }, set: function(e) {
        lt = e;
      } }, rejectionMapper: { get: function() {
        return In;
      }, set: function(e) {
        In = e;
      } }, follow: function(e, t) {
        return new G(function(r, o) {
          return It(function(s, c) {
            var l = Z;
            l.unhandleds = [], l.onunhandled = c, l.finalize = ee(function() {
              var d, m = this;
              d = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Bn.push(function g() {
                d(), Bn.splice(Bn.indexOf(g), 1);
              }), ++Ht, lt(function() {
                --Ht == 0 && Or();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), Ve && (Ve.allSettled && te(G, "allSettled", function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return G.resolve(s).then(function(l) {
              return o[c] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[c] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), Ve.any && typeof AggregateError < "u" && te(G, "any", function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, l) {
            return G.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              s[l] = d, --o || r(new AggregateError(s));
            });
          });
        });
      }), Ve.withResolvers && (G.withResolvers = Ve.withResolvers));
      var Ye = { awaits: 0, echoes: 0, id: 0 }, ns = 0, qn = [], Un = 0, Ln = 0, rs = 0;
      function It(e, t, r, o) {
        var s = Z, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++rs, rt.env, c.env = Ge ? { Promise: G, PromiseProp: { value: G, configurable: !0, writable: !0 }, all: G.all, race: G.race, allSettled: G.allSettled, any: G.any, resolve: G.resolve, reject: G.reject } : {}, t && I(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Wt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function un() {
        return Ye.id || (Ye.id = ++ns), ++Ye.awaits, Ye.echoes += Ae, Ye.id;
      }
      function Dt() {
        return !!Ye.awaits && (--Ye.awaits == 0 && (Ye.id = 0), Ye.echoes = Ye.awaits * Ae, !0);
      }
      function Vn(e) {
        return Ye.echoes && e && e.constructor === Ve ? (un(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), Ue(t);
        })) : e;
      }
      function is() {
        var e = qn[qn.length - 1];
        qn.pop(), Rt(e, !1);
      }
      function Rt(e, t) {
        var r, o = Z;
        (t ? !Ye.echoes || Un++ && e === Z : !Un || --Un && e === Z) || queueMicrotask(t ? (function(s) {
          ++Ln, Ye.echoes && --Ye.echoes != 0 || (Ye.echoes = Ye.awaits = Ye.id = 0), qn.push(Z), Rt(s, !0);
        }).bind(null, e) : is), e !== Z && (Z = e, o === rt && (rt.env = Oi()), Ge && (r = rt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Oi() {
        var e = h.Promise;
        return Ge ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Wt(e, t, r, o, s) {
        var c = Z;
        try {
          return Rt(e, !0), t(r, o, s);
        } finally {
          Rt(c, !1);
        }
      }
      function Ai(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = Z;
          r && un(), Rt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Rt(s, !1), o && queueMicrotask(Dt);
          }
        };
      }
      function Ar(e) {
        Promise === Ve && Ye.echoes === 0 ? Un === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + pt).indexOf("[native code]") === -1 && (un = Dt = k);
      var Ue = G.reject, Gt = "￿", Ot = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ki = "String expected.", cn = [], $n = "__dbnames", kr = "readonly", Pr = "readwrite";
      function Yt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Pi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Hn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ee(t))[e], t;
        };
      }
      function Ci() {
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
              }(Ii(e), Ii(t));
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = He(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Ii(e) {
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
      var Di = (Ce.prototype._trans = function(e, t, r) {
        var o = this._tx || Z.trans, s = this.name, c = re && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(g, w, p) {
          if (!p.schema[s]) throw new K.NotFound("Table " + s + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = sn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === Z.trans ? o._promise(e, l, r) : It(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: Z.transless || Z }) : function g(w, p, T, v) {
            if (w.idbdb && (w._state.openComplete || Z.letThrough || w._vip)) {
              var b = w._createTransaction(p, T, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === P.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return g(w, p, T, v);
                })) : Ue(E);
              }
              return b._promise(p, function(E, x) {
                return It(function() {
                  return Z.trans = b, v(E, x, b);
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
              w.open().catch(k);
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
      }, Ce.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ue(new K.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ce.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
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
        !r && re && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(d, m) {
          return be(d, m) === 0;
        }
        var l = t.reduce(function(p, m) {
          var g = p[0], w = p[1], p = o[m], T = e[m];
          return [g || p, g || !p ? Yt(w, p && p.multi ? function(v) {
            return v = Q(v, m), S(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, Q(v, m));
          }) : w];
        }, [null, null]), c = l[0], l = l[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
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
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ce.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ce.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Ci && (function(m, g) {
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
      }, Ce.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          I(this, e);
        });
      }, Ce.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(d) {
          return d.numFailures ? G.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            z(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ce.prototype.update = function(e, t) {
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = Q(e, this.schema.primKey.keyPath), e === void 0 ? Ue(new K.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ce.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? G.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            z(e, c, d);
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
            return o.numFailures ? G.reject(o.failures[0]) : void 0;
          });
        });
      }, Ce.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Pi }).then(function(r) {
            return Wn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? G.reject(t.failures[0]) : void 0;
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
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkUpdate = function(e) {
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
                for (var x = 0, O = Object.keys(b); x < O.length; x++) {
                  var C = O[x], N = b[C];
                  if (C === t.schema.primKey.keyPath) {
                    if (be(N, v) !== 0) throw new K.Constraint("Cannot update primary key in bulkUpdate()");
                  } else z(E, C, N);
                }
                c.push(T), m.push(v), g.push(E);
              }
            });
            var w = m.length;
            return r.mutate({ trans: l, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(p) {
              var T = p.numFailures, v = p.failures;
              if (T === 0) return w;
              for (var b = 0, E = Object.keys(v); b < E.length; b++) {
                var x, O = E[b], C = c[Number(O)];
                C != null && (x = v[O], delete v[O], v[C] = x);
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
        }).then(function(l) {
          var s = l.numFailures, c = l.lastResult, l = l.failures;
          if (s === 0) return c;
          throw new wt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), l);
        });
      }, Ce);
      function Ce() {
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
            d = d || ye;
            var w = { subscribers: [], fire: m = m || k, subscribe: function(p) {
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
            if (S(T)) c(p, g[p][0], g[p][1]);
            else {
              if (T !== "asap") throw new K.InvalidArgument("Invalid event config");
              var v = c(p, j, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                v.subscribers.forEach(function(x) {
                  ge(function() {
                    x.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function gn(e, t) {
        return fe(t).from({ prototype: e }), t;
      }
      function ln(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Cr(e, t) {
        e.filter = Yt(e.filter, t);
      }
      function Nr(e, t, r) {
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
      function Ri(e, t, r) {
        var o = Gn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Yn(e, t, r, o) {
        var s = e.replayFilter ? Yt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, l = function(d, m, g) {
            var w, p;
            s && !s(m, g, function(T) {
              return m.stop(T);
            }, function(T) {
              return m.fail(T);
            }) || ((p = "" + (w = m.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(w)), R(c, p) || (c[p] = !0, t(d, m, g)));
          };
          return Promise.all([e.or._iterate(l, r), Ki(Ri(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return Ki(Ri(e, o, r), Yt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ki(e, t, r, o) {
        var s = je(o ? function(c, l, d) {
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
              c.stop(d), l = k;
            }, function(d) {
              c.fail(d), l = k;
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
          if (S(r)) return f(f([], S(e) ? e : [], !0), r).sort();
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
          if (S(o)) return S(e) ? e.filter(function(s) {
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
      var os = (Se.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ue.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Se.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Se.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Yt(t.algorithm, e);
      }, Se.prototype._iterate = function(e, t) {
        return Yn(this._ctx, e, t, this._ctx.table.core);
      }, Se.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && I(r, e), t._ctx = r, t;
      }, Se.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Se.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Yn(t, e, r, t.table.core);
        });
      }, Se.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (ln(o, !0)) return s.count({ trans: r, query: { index: Gn(o, s.schema), range: o.range } }).then(function(l) {
            return Math.min(l, o.limit);
          });
          var c = 0;
          return Yn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, Se.prototype.sortBy = function(e, t) {
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
      }, Se.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && ln(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = Gn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var l = [];
          return Yn(o, function(d) {
            return l.push(d);
          }, r, o.table.core).then(function() {
            return l;
          });
        }, e);
      }, Se.prototype.offset = function(e) {
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
      }, Se.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Nr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, Se.prototype.until = function(e, t) {
        return Cr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, Se.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, Se.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Se.prototype.filter = function(e) {
        var t;
        return Cr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Yt(t.isMatch, e), this;
      }, Se.prototype.and = function(e) {
        return this.filter(e);
      }, Se.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Se.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Se.prototype.desc = function() {
        return this.reverse();
      }, Se.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, Se.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Se.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, Se.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Se.prototype.primaryKeys = function(e) {
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
      }, Se.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Se.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, Se.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Se.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Cr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = R(t, o);
          return t[o] = !0, !s;
        }), this;
      }, Se.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, l;
          l = typeof e == "function" ? e : (s = y(e), c = s.length, function(O) {
            for (var C = !1, N = 0; N < c; ++N) {
              var D = s[N], B = e[D], V = Q(O, D);
              B instanceof bn ? (z(O, D, B.execute(V)), C = !0) : V !== B && (z(O, D, B), C = !0);
            }
            return C;
          });
          var d = r.table.core, p = d.schema.primaryKey, m = p.outbound, g = p.extractKey, w = 200, p = t.db._options.modifyChunkSize;
          p && (w = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function T(O, D) {
            var N = D.failures, D = D.numFailures;
            b += O - D;
            for (var B = 0, V = y(N); B < V.length; B++) {
              var M = V[B];
              v.push(N[M]);
            }
          }
          var v = [], b = 0, E = [], x = e === Fi;
          return t.clone().primaryKeys().then(function(O) {
            function C(D) {
              var B = Math.min(w, O.length - D), V = O.slice(D, D + B);
              return (x ? Promise.resolve([]) : d.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(M) {
                var U = [], W = [], $ = m ? [] : null, Y = x ? V : [];
                if (!x) for (var me = 0; me < B; ++me) {
                  var we = M[me], de = { value: Ee(we), primKey: O[D + me] };
                  l.call(de, de.value, de) !== !1 && (de.value == null ? Y.push(O[D + me]) : m || be(g(we), g(de.value)) === 0 ? (W.push(de.value), m && $.push(O[D + me])) : (Y.push(O[D + me]), U.push(de.value)));
                }
                return Promise.resolve(0 < U.length && d.mutate({ trans: o, type: "add", values: U }).then(function(Me) {
                  for (var le in Me.failures) Y.splice(parseInt(le), 1);
                  T(U.length, Me);
                })).then(function() {
                  return (0 < W.length || N && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: $, values: W, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(Me) {
                    return T(W.length, Me);
                  });
                }).then(function() {
                  return (0 < Y.length || N && x) && d.mutate({ trans: o, type: "delete", keys: Y, criteria: N, isAdditionalChunk: 0 < D }).then(function(Me) {
                    return Wn(r.table, Y, Me);
                  }).then(function(Me) {
                    return T(Y.length, Me);
                  });
                }).then(function() {
                  return O.length > D + B && C(D + w);
                });
              });
            }
            var N = ln(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return C(0).then(function() {
              if (0 < v.length) throw new tn("Error modifying one or more objects", v, b, E);
              return O.length;
            });
          });
        });
      }, Se.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ln(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Fi) : this._write(function(r) {
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
      }, Se);
      function Se() {
      }
      var Fi = function(e, t) {
        return t.value = null;
      };
      function ss(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function as(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function ut(e, t, r) {
        return e = e instanceof Mi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function fn(e) {
        return new e.Collection(e, function() {
          return Bi("");
        }).limit(0);
      }
      function Xn(e, t, r, o) {
        var s, c, l, d, m, g, w, p = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return ut(e, ki);
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
          }).sort(function(x, O) {
            return l(x.lower, O.lower);
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
          var O = b.key;
          if (typeof O != "string") return !1;
          var C = c(O);
          if (t(C, m, v)) return !0;
          for (var N = null, D = v; D < p; ++D) {
            var B = function(V, M, U, W, $, Y) {
              for (var me = Math.min(V.length, W.length), we = -1, de = 0; de < me; ++de) {
                var Me = M[de];
                if (Me !== W[de]) return $(V[de], U[de]) < 0 ? V.substr(0, de) + U[de] + U.substr(de + 1) : $(V[de], W[de]) < 0 ? V.substr(0, de) + W[de] + U.substr(de + 1) : 0 <= we ? V.substr(0, we) + M[we] + U.substr(we + 1) : null;
                $(V[de], Me) < 0 && (we = de);
              }
              return me < W.length && Y === "next" ? V + U.substr(V.length) : me < V.length && Y === "prev" ? V.substr(0, U.length) : we < 0 ? null : V.substr(0, we) + W[we] + U.substr(we + 1);
            }(O, C, d[D], m[D], l, g);
            B === null && N === null ? v = D + 1 : (N === null || 0 < l(N, B)) && (N = B);
          }
          return E(N !== null ? function() {
            b.continue(N + w);
          } : x), !1;
        }), e;
      }
      function Kt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Bi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Mi = (Object.defineProperty(Xe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Xe.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? fn(this) : new this.Collection(this, function() {
            return Kt(e, t, !r, !o);
          });
        } catch {
          return ut(this, Ot);
        }
      }, Xe.prototype.equals = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Bi(e);
        });
      }, Xe.prototype.above = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(e, void 0, !0);
        });
      }, Xe.prototype.aboveOrEqual = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(e, void 0, !1);
        });
      }, Xe.prototype.below = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(void 0, e, !1, !0);
        });
      }, Xe.prototype.belowOrEqual = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(void 0, e);
        });
      }, Xe.prototype.startsWith = function(e) {
        return typeof e != "string" ? ut(this, ki) : this.between(e, e + Gt, !0, !0);
      }, Xe.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Xn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Xe.prototype.equalsIgnoreCase = function(e) {
        return Xn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Xe.prototype.anyOfIgnoreCase = function() {
        var e = at.apply(Je, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Xe.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = at.apply(Je, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Xe.prototype.anyOf = function() {
        var e = this, t = at.apply(Je, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return ut(this, Ot);
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
      }, Xe.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Xe.prototype.noneOf = function() {
        var e = at.apply(Je, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return ut(this, Ot);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Xe.prototype.inAnyRange = function(O, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, l = this._min, d = this._max;
        if (O.length === 0) return fn(this);
        if (!O.every(function(C) {
          return C[0] !== void 0 && C[1] !== void 0 && s(C[0], C[1]) <= 0;
        })) return ut(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", K.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, w, p = s;
        function T(C, N) {
          return p(C[0], N[0]);
        }
        try {
          (w = O.reduce(function(C, N) {
            for (var D = 0, B = C.length; D < B; ++D) {
              var V = C[D];
              if (o(N[0], V[1]) < 0 && 0 < o(N[1], V[0])) {
                V[0] = l(V[0], N[0]), V[1] = d(V[1], N[1]);
                break;
              }
            }
            return D === B && C.push(N), C;
          }, [])).sort(T);
        } catch {
          return ut(this, Ot);
        }
        var v = 0, b = g ? function(C) {
          return 0 < s(C, w[v][1]);
        } : function(C) {
          return 0 <= s(C, w[v][1]);
        }, E = m ? function(C) {
          return 0 < c(C, w[v][0]);
        } : function(C) {
          return 0 <= c(C, w[v][0]);
        }, x = b, O = new this.Collection(this, function() {
          return Kt(w[0][0], w[w.length - 1][1], !m, !g);
        });
        return O._ondirectionchange = function(C) {
          p = C === "next" ? (x = b, s) : (x = E, c), w.sort(T);
        }, O._addAlgorithm(function(C, N, D) {
          for (var B, V = C.key; x(V); ) if (++v === w.length) return N(D), !1;
          return !b(B = V) && !E(B) || (r._cmp(V, w[v][1]) === 0 || r._cmp(V, w[v][0]) === 0 || N(function() {
            p === s ? C.continue(w[v][0]) : C.continue(w[v][1]);
          }), !1);
        }), O;
      }, Xe.prototype.startsWithAnyOf = function() {
        var e = at.apply(Je, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? fn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : ut(this, "startsWithAnyOf() only works with strings");
      }, Xe);
      function Xe() {
      }
      function xt(e) {
        return je(function(t) {
          return _n(t), e(t.target.error), !1;
        });
      }
      function _n(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var wn = "storagemutated", Ir = "x-storagemutated-1", jt = vn(null, wn), us = (Et.prototype._lock = function() {
        return pe(!Z.global), ++this._reculock, this._reculock !== 1 || Z.global || (Z.lockOwnerFor = this), this;
      }, Et.prototype._unlock = function() {
        if (pe(!Z.global), --this._reculock == 0) for (Z.global || (Z.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Wt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Et.prototype._locked = function() {
        return this._reculock && Z.lockOwnerFor !== this;
      }, Et.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (pe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new K.DatabaseClosed(o);
          case "MissingAPIError":
            throw new K.MissingAPI(o.message, o);
          default:
            throw new K.OpenFailed(o);
        }
        if (!this.active) throw new K.TransactionInactive();
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(s) {
          _n(s), t._reject(e.error);
        }), e.onabort = je(function(s) {
          _n(s), t.active && t._reject(new K.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = je(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && jt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Et.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ue(new K.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new K.TransactionInactive());
        if (this._locked()) return new G(function(c, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, l);
          }, Z]);
        });
        if (r) return It(function() {
          var c = new G(function(l, d) {
            o._lock();
            var m = t(l, d, o);
            m && m.then && m.then(l, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new G(function(c, l) {
          var d = t(c, l, o);
          d && d.then && d.then(c, l);
        });
        return s._lib = !0, s;
      }, Et.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Et.prototype.waitFor = function(e) {
        var t, r = this._root(), o = G.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new G(function(c, l) {
          o.then(function(d) {
            return r._waitingQueue.push(je(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(je(l.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, Et.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new K.Abort()));
      }, Et.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (R(t, e)) return t[e];
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
          return Q(r, t);
        } : function(r) {
          return Q(r, e);
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
            var x = E.trans, O = E.type, C = E.keys, N = E.values, D = E.range;
            return new Promise(function(B, V) {
              B = je(B);
              var M = x.objectStore(b), U = M.keyPath == null, W = O === "put" || O === "add";
              if (!W && O !== "delete" && O !== "deleteRange") throw new Error("Invalid operation type: " + O);
              var $, Y = (C || N || { length: 1 }).length;
              if (C && N && C.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (Y === 0) return B({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function me(it) {
                ++Me, _n(it);
              }
              var we = [], de = [], Me = 0;
              if (O === "deleteRange") {
                if (D.type === 4) return B({ numFailures: Me, failures: de, results: [], lastResult: void 0 });
                D.type === 3 ? we.push($ = M.clear()) : we.push($ = M.delete(o(D)));
              } else {
                var U = W ? U ? [N, C] : [N, null] : [C, null], le = U[0], et = U[1];
                if (W) for (var tt = 0; tt < Y; ++tt) we.push($ = et && et[tt] !== void 0 ? M[O](le[tt], et[tt]) : M[O](le[tt])), $.onerror = me;
                else for (tt = 0; tt < Y; ++tt) we.push($ = M[O](le[tt])), $.onerror = me;
              }
              function ar(it) {
                it = it.target.result, we.forEach(function(zt, Zr) {
                  return zt.error != null && (de[Zr] = zt.error);
                }), B({ numFailures: Me, failures: de, results: O === "delete" ? C : we.map(function(zt) {
                  return zt.result;
                }), lastResult: it });
              }
              $.onerror = function(it) {
                me(it), ar(it);
              }, $.onsuccess = ar;
            });
          }, getMany: function(E) {
            var x = E.trans, O = E.keys;
            return new Promise(function(C, N) {
              C = je(C);
              for (var D, B = x.objectStore(b), V = O.length, M = new Array(V), U = 0, W = 0, $ = function(we) {
                we = we.target, M[we._pos] = we.result, ++W === U && C(M);
              }, Y = xt(N), me = 0; me < V; ++me) O[me] != null && ((D = B.get(O[me]))._pos = me, D.onsuccess = $, D.onerror = Y, ++U);
              U === 0 && C(M);
            });
          }, get: function(E) {
            var x = E.trans, O = E.key;
            return new Promise(function(C, N) {
              C = je(C);
              var D = x.objectStore(b).get(O);
              D.onsuccess = function(B) {
                return C(B.target.result);
              }, D.onerror = xt(N);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, O) {
              x = je(x);
              var C, N, D, U = E.trans, B = E.values, V = E.limit, $ = E.query, M = V === 1 / 0 ? void 0 : V, W = $.index, $ = $.range, U = U.objectStore(b), W = W.isPrimaryKey ? U : U.index(W.name), $ = o($);
              if (V === 0) return x({ result: [] });
              v ? ((M = B ? W.getAll($, M) : W.getAllKeys($, M)).onsuccess = function(Y) {
                return x({ result: Y.target.result });
              }, M.onerror = xt(O)) : (C = 0, N = !B && "openKeyCursor" in W ? W.openKeyCursor($) : W.openCursor($), D = [], N.onsuccess = function(Y) {
                var me = N.result;
                return me ? (D.push(B ? me.value : me.primaryKey), ++C === V ? x({ result: D }) : void me.continue()) : x({ result: D });
              }, N.onerror = xt(O));
            });
          }), openCursor: function(E) {
            var x = E.trans, O = E.values, C = E.query, N = E.reverse, D = E.unique;
            return new Promise(function(B, V) {
              B = je(B);
              var W = C.index, M = C.range, U = x.objectStore(b), U = W.isPrimaryKey ? U : U.index(W.name), W = N ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", $ = !O && "openKeyCursor" in U ? U.openKeyCursor(o(M), W) : U.openCursor(o(M), W);
              $.onerror = xt(V), $.onsuccess = je(function(Y) {
                var me, we, de, Me, le = $.result;
                le ? (le.___id = ++cs, le.done = !1, me = le.continue.bind(le), we = (we = le.continuePrimaryKey) && we.bind(le), de = le.advance.bind(le), Me = function() {
                  throw new Error("Cursor not stopped");
                }, le.trans = x, le.stop = le.continue = le.continuePrimaryKey = le.advance = function() {
                  throw new Error("Cursor not started");
                }, le.fail = je(V), le.next = function() {
                  var et = this, tt = 1;
                  return this.start(function() {
                    return tt-- ? et.continue() : et.stop();
                  }).then(function() {
                    return et;
                  });
                }, le.start = function(et) {
                  function tt() {
                    if ($.result) try {
                      et();
                    } catch (it) {
                      le.fail(it);
                    }
                    else le.done = !0, le.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, le.stop();
                  }
                  var ar = new Promise(function(it, zt) {
                    it = je(it), $.onerror = xt(zt), le.fail = zt, le.stop = function(Zr) {
                      le.stop = le.continue = le.continuePrimaryKey = le.advance = Me, it(Zr);
                    };
                  });
                  return $.onsuccess = je(function(it) {
                    $.onsuccess = tt, tt();
                  }), le.continue = me, le.continuePrimaryKey = we, le.advance = de, tt(), ar;
                }, B(le)) : B(null);
              }, V);
            });
          }, count: function(E) {
            var x = E.query, O = E.trans, C = x.index, N = x.range;
            return new Promise(function(D, B) {
              var V = O.objectStore(b), M = C.isPrimaryKey ? V : V.index(C.name), V = o(N), M = V ? M.count(V) : M.count();
              M.onsuccess = je(function(U) {
                return D(U.target.result);
              }), M.onerror = xt(B);
            });
          } };
        }
        var c, l, d, w = (l = m, d = Ui((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(T) {
          return l.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = S(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Kr(v) }, indexes: Ui(T.indexNames).map(function(O) {
            return T.index(O);
          }).map(function(D) {
            var C = D.name, N = D.unique, B = D.multiEntry, D = D.keyPath, B = { name: C, compound: S(D), keyPath: D, unique: N, multiEntry: B, extractKey: Kr(D) };
            return E[En(D)] = B;
          }), getIndexByKeyPath: function(O) {
            return E[En(O)];
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
      function Qn(e, o) {
        var r = o.db, o = fs(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(l) {
            return l.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function zn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(l) {
            var d = function m(g, w) {
              return Be(g, w) || (g = L(g)) && m(g, w);
            }(l, s);
            (!d || "value" in d && d.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? te(l, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              ie(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
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
        var l = c._reject.bind(c), d = Z.transless || Z;
        It(function() {
          return Z.trans = c, Z.transless = d, t !== 0 ? (Qn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(w) {
            return w ?? g;
          }) : G.resolve(g)).then(function(w) {
            return T = w, v = c, b = r, E = [], w = (p = e)._versions, x = p._dbSchema = Zn(0, p.idbdb, b), (w = w.filter(function(O) {
              return O._cfg.version >= T;
            })).length !== 0 ? (w.forEach(function(O) {
              E.push(function() {
                var C = x, N = O._cfg.dbschema;
                er(p, C, b), er(p, N, b), x = p._dbSchema = N;
                var D = Fr(C, N);
                D.add.forEach(function(W) {
                  Br(b, W[0], W[1].primKey, W[1].indexes);
                }), D.change.forEach(function(W) {
                  if (W.recreate) throw new K.Upgrade("Not yet support for changing primary key");
                  var $ = b.objectStore(W.name);
                  W.add.forEach(function(Y) {
                    return Jn($, Y);
                  }), W.change.forEach(function(Y) {
                    $.deleteIndex(Y.name), Jn($, Y);
                  }), W.del.forEach(function(Y) {
                    return $.deleteIndex(Y);
                  });
                });
                var B = O._cfg.contentUpgrade;
                if (B && O._cfg.version > T) {
                  Qn(p, b), v._memoizedTables = {};
                  var V = J(N);
                  D.del.forEach(function(W) {
                    V[W] = C[W];
                  }), jr(p, [p.Transaction.prototype]), zn(p, [p.Transaction.prototype], y(V), V), v.schema = V;
                  var M, U = yt(B);
                  return U && un(), D = G.follow(function() {
                    var W;
                    (M = B(v)) && U && (W = Dt.bind(null, null), M.then(W, W));
                  }), M && typeof M.then == "function" ? G.resolve(M) : D.then(function() {
                    return M;
                  });
                }
              }), E.push(function(C) {
                var N, D, B = O._cfg.dbschema;
                N = B, D = C, [].slice.call(D.db.objectStoreNames).forEach(function(V) {
                  return N[V] == null && D.db.deleteObjectStore(V);
                }), jr(p, [p.Transaction.prototype]), zn(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), v.schema = p._dbSchema;
              }), E.push(function(C) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === O._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : C.objectStore("$meta").put(O._cfg.version, "version"));
              });
            }), function O() {
              return E.length ? G.resolve(E.shift()(v.idbtrans)).then(O) : G.resolve();
            }().then(function() {
              Li(x, b);
            })) : G.resolve();
            var p, T, v, b, E, x;
          }).catch(l)) : (y(s).forEach(function(w) {
            Br(r, w, s[w].primKey, s[w].indexes);
          }), Qn(e, r), void G.follow(function() {
            return e.on.populate.fire(c);
          }).catch(l));
          var m, g;
        });
      }
      function ps(e, t) {
        Li(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Zn(0, e.idbdb, t);
        er(e, e._dbSchema, t);
        for (var o = 0, s = Fr(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(l.name);
            l.add.forEach(function(m) {
              re && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(m.src)), Jn(d, m);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Fr(e, t) {
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
      function Br(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Jn(s, c);
        }), s;
      }
      function Li(e, t) {
        y(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (re && console.debug("Dexie: Creating missing table", r), Br(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Jn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Zn(e, t, r) {
        var o = {};
        return Ie(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), l = Dr(qi(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), d = [], m = 0; m < c.indexNames.length; ++m) {
            var w = c.index(c.indexNames[m]), g = w.keyPath, w = Dr(w.name, g, !!w.unique, !!w.multiEntry, !1, g && typeof g != "string", !1);
            d.push(w);
          }
          o[s] = Rr(s, l, d);
        }), o;
      }
      function er(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], l = r.objectStore(c);
          e._hasGetAll = "getAll" in l;
          for (var d = 0; d < l.indexNames.length; ++d) {
            var m = l.indexNames[d], g = l.index(m).keyPath, w = typeof g == "string" ? g : "[" + Ie(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[w]) && (g.name = m, delete t[c].idxByName[w], t[c].idxByName[m] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Vi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Dr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(c), r === 0, o);
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
        }), t._dbSchema = s, jr(t, [t._allTables, t, t.Transaction.prototype]), zn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(s), s), t._storeNames = y(s), this;
      }, dn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ce(this._cfg.contentUpgrade || k, e), this;
      }, dn);
      function dn() {
      }
      function Mr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new At($n, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function qr(e) {
        return e && typeof e.databases == "function";
      }
      function Ur(e) {
        return It(function() {
          return Z.letThrough = !0, e();
        });
      }
      function Lr(e) {
        return !("from" in e);
      }
      var Ze = function(e, t) {
        if (!this) {
          var r = new Ze();
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
          be(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < be(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Sn(e, s), o && r && Sn(e, o);
        }
      }
      function Sn(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, l = m.to, d = m.l, m = m.r;
          Tn(o, c, l), d && r(o, d), m && r(o, m);
        }(e, t);
      }
      function $i(e, t) {
        var r = tr(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = tr(e), l = c.next(s.from), d = l.value; !o.done && !l.done; ) {
          if (be(d.from, s.to) <= 0 && 0 <= be(d.to, s.from)) return !0;
          be(s.from, d.from) < 0 ? s = (o = r.next(d.from)).value : d = (l = c.next(s.from)).value;
        }
        return !1;
      }
      function tr(e) {
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
      function nr(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? Sn(e[r], t[r]) : e[r] = function o(s) {
            var c, l, d = {};
            for (c in s) R(s, c) && (l = s[c], d[c] = !l || typeof l != "object" || Te.has(l.constructor) ? l : o(l));
            return d;
          }(t[r]);
        }), e;
      }
      function Vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && $i(t[r], e[r]);
        });
      }
      H(Ze.prototype, ((pt = { add: function(e) {
        return Sn(this, e), this;
      }, addKey: function(e) {
        return Tn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Tn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = tr(this).next(e).value;
        return t && be(t.from, e) <= 0 && 0 <= be(t.to, e);
      } })[Ke] = function() {
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
          return new G(function(T, v) {
            if (l(), !r) throw new K.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new K.MissingAPI();
            E.onerror = xt(v), E.onblocked = je(e._fireOnBlocked), E.onupgradeneeded = je(function(x) {
              var O;
              w = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = _n, w.abort(), E.result.close(), (O = r.deleteDatabase(b)).onsuccess = O.onerror = je(function() {
                v(new K.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = xt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, p = x < 1, e.idbdb = E.result, c && ps(e, w), hs(e, x / 10, w, v));
            }, v), E.onsuccess = je(function() {
              w = null;
              var x, O, C, N, D, B = e.idbdb = E.result, V = Ie(B.objectStoreNames);
              if (0 < V.length) try {
                var M = B.transaction((N = V).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) O = B, C = M, (x = e).verno = O.version / 10, C = x._dbSchema = Zn(0, O, C), x._storeNames = Ie(O.objectStoreNames, 0), zn(x, [x._allTables], y(C), C);
                else if (er(e, e._dbSchema, M), ((D = Fr(Zn(0, (D = e).idbdb, M), D._dbSchema)).add.length || D.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), B.close(), s = B.version + 1, c = !0, T(d());
                Qn(e, M);
              } catch {
              }
              cn.push(e), B.onversionchange = je(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), B.onclose = je(function(U) {
                e.on("close").fire(U);
              }), p && (D = e._deps, M = b, B = D.indexedDB, D = D.IDBKeyRange, qr(B) || M === $n || Mr(B, D).put({ name: M }).catch(k)), T();
            }, v);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return G.reject(T);
          });
        }
        var m, g = t.dbReadyResolve, w = null, p = !1;
        return G.race([o, (typeof navigator > "u" ? G.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function v() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(d)]).then(function() {
          return l(), t.onReadyBeingFired = [], G.resolve(Ur(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(ce, k);
              return t.onReadyBeingFired = [], G.resolve(Ur(function() {
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
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new Ze(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new Ze(-1 / 0, [[[]]]);
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
            return d.done ? m : m && typeof m.then == "function" ? m.then(r, o) : S(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function ir(e, t, r) {
        for (var o = S(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var vs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function l(p, T, v) {
            var b = En(p), E = s[b] = s[b] || [], x = p == null ? 0 : typeof p == "string" ? 1 : p.length, O = 0 < T, O = u(u({}, v), { name: O ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: O, keyTail: T, keyLength: x, extractKey: Kr(p), unique: !O && v.unique });
            return E.push(O), O.isPrimaryKey || c.push(O), 1 < x && l(x === 2 ? p[0] : p.slice(0, x - 1), T + 1, v), E.sort(function(C, N) {
              return C.keyTail - N.keyTail;
            }), O;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var d = 0, m = o.indexes; d < m.length; d++) {
            var g = m[d];
            l(g.keyPath, 0, g);
          }
          function w(p) {
            var T, v = p.query.index;
            return v.isVirtual ? u(u({}, p), { query: { index: v.lowLevelIndex, range: (T = p.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: ir(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: ir(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = s[En(p)]) && p[0];
          } }), count: function(p) {
            return r.count(w(p));
          }, query: function(p) {
            return r.query(w(p));
          }, openCursor: function(p) {
            var T = p.query.index, v = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(w(p)).then(function(O) {
              return O && x(O);
            }) : r.openCursor(p);
            function x(O) {
              return Object.create(O, { continue: { value: function(C) {
                C != null ? O.continue(ir(C, p.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : p.unique ? O.continue(O.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : O.continue();
              } }, continuePrimaryKey: { value: function(C, N) {
                O.continuePrimaryKey(ir(C, e.MAX_KEY, v), N);
              } }, primaryKey: { get: function() {
                return O.primaryKey;
              } }, key: { get: function() {
                var C = O.key;
                return E === 1 ? C[0] : C.slice(0, E);
              } }, value: { get: function() {
                return O.value;
              } } });
            }
          } });
        } });
      } };
      function Yr(e, t, r, o) {
        return r = r || {}, o = o || "", y(e).forEach(function(s) {
          var c, l, d;
          R(t, s) ? (c = e[s], l = t[s], typeof c == "object" && typeof l == "object" && c && l ? (d = He(c)) !== He(l) ? r[o + s] = t[s] : d === "Object" ? Yr(c, l, r, o + s + ".") : c !== l && (r[o + s] = t[s]) : c !== l && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), y(t).forEach(function(s) {
          R(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var gs = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = Z.trans, l = c.table(t).hook, d = l.deleting, m = l.creating, g = l.updating;
            switch (s.type) {
              case "add":
                if (m.fire === k) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (m.fire === k && g.fire === k) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === k) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === k) break;
                return c._promise("readwrite", function() {
                  return function p(T, v, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: v }, limit: b }).then(function(E) {
                      var x = E.result;
                      return w({ type: "delete", keys: x, trans: T }).then(function(O) {
                        return 0 < O.numFailures ? Promise.reject(O.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : p(T, u(u({}, v), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(p) {
              var T, v, b, E = Z.trans, x = p.keys || Xr(o, p);
              if (!x) throw new Error("Keys missing");
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: x }) : u({}, p)).type !== "delete" && (p.values = f([], p.values)), p.keys && (p.keys = f([], p.keys)), T = r, b = x, ((v = p).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(O) {
                var C = x.map(function(N, D) {
                  var B, V, M, U = O[D], W = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(W, N, U, E) : p.type === "add" || U === void 0 ? (B = m.fire.call(W, N, p.values[D], E), N == null && B != null && (p.keys[D] = N = B, o.outbound || z(p.values[D], o.keyPath, N))) : (B = Yr(U, p.values[D]), (V = g.fire.call(W, B, N, U, E)) && (M = p.values[D], Object.keys(V).forEach(function($) {
                    R(M, $) ? M[$] = V[$] : z(M, $, V[$]);
                  }))), W;
                });
                return r.mutate(p).then(function(N) {
                  for (var D = N.failures, B = N.results, V = N.numFailures, N = N.lastResult, M = 0; M < x.length; ++M) {
                    var U = (B || x)[M], W = C[M];
                    U == null ? W.onerror && W.onerror(D[M]) : W.onsuccess && W.onsuccess(p.type === "put" && O[M] ? p.values[M] : U);
                  }
                  return { failures: D, results: B, numFailures: V, lastResult: N };
                }).catch(function(N) {
                  return C.forEach(function(D) {
                    return D.onerror && D.onerror(N);
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
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) be(t.keys[s], e[c]) === 0 && (o.push(r ? Ee(t.values[s]) : t.values[s]), ++c);
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
            return s ? G.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ee(c) : c }, c;
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
        var t = e.schema.name, r = new Ze(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (Z.subscr && s !== "readonly") throw new K.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Z.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, l = c.primaryKey, p = c.indexes, d = l.extractKey, m = l.outbound, g = l.autoIncrement && p.filter(function(v) {
            return v.compound && v.keyPath.includes(l.keyPath);
          }), w = u(u({}, s), { mutate: function(v) {
            function b($) {
              return $ = "idb://".concat(t, "/").concat(o, "/").concat($), N[$] || (N[$] = new Ze());
            }
            var E, x, O, C = v.trans, N = v.mutatedParts || (v.mutatedParts = {}), D = b(""), B = b(":dels"), V = v.type, W = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Xr(l, v).filter(function($) {
              return $;
            }), v.values] : [], M = W[0], U = W[1], W = v.trans._cache;
            return S(M) ? (D.addKeys(M), (W = V === "delete" || M.length === U.length ? Yi(M, W) : null) || B.addKeys(M), (W || U) && (E = b, x = W, O = U, c.indexes.forEach(function($) {
              var Y = E($.name || "");
              function me(de) {
                return de != null ? $.extractKey(de) : null;
              }
              function we(de) {
                return $.multiEntry && S(de) ? de.forEach(function(Me) {
                  return Y.addKey(Me);
                }) : Y.addKey(de);
              }
              (x || O).forEach(function(de, et) {
                var le = x && me(x[et]), et = O && me(O[et]);
                be(le, et) !== 0 && (le != null && we(le), et != null && we(et));
              });
            }))) : M ? (U = { from: (U = M.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = M.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, B.add(U), D.add(U)) : (D.add(r), B.add(r), c.indexes.forEach(function($) {
              return b($.name).add(r);
            })), s.mutate(v).then(function($) {
              return !M || v.type !== "add" && v.type !== "put" || (D.addKeys($.results), g && g.forEach(function(Y) {
                for (var me = v.values.map(function(le) {
                  return Y.extractKey(le);
                }), we = Y.keyPath.findIndex(function(le) {
                  return le === l.keyPath;
                }), de = 0, Me = $.results.length; de < Me; ++de) me[de][we] = $.results[de];
                b(Y.name).addKeys(me);
              })), C.mutatedParts = nr(C.mutatedParts || {}, N), $;
            });
          } }), p = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new Ze((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [l, new Ze(v.key)];
          }, getMany: function(v) {
            return [l, new Ze().addKeys(v.keys)];
          }, count: p, query: p, openCursor: p };
          return y(T).forEach(function(v) {
            w[v] = function(b) {
              var E = Z.subscr, x = !!E, O = Xi(Z, s) && Qi(v, b) ? b.obsSet = {} : E;
              if (x) {
                var C = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), O[U] || (O[U] = new Ze());
                }, N = C(""), D = C(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? D : C(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var B = v === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(U) {
                      if (v === "query") {
                        if (m && b.values) return B.then(function(me) {
                          return me = me.result, N.addKeys(me), U;
                        });
                        var W = b.values ? U.result.map(d) : U.result;
                        (b.values ? N : D).addKeys(W);
                      } else if (v === "openCursor") {
                        var $ = U, Y = b.values;
                        return $ && Object.create($, { key: { get: function() {
                          return D.addKey($.primaryKey), $.key;
                        } }, primaryKey: { get: function() {
                          var me = $.primaryKey;
                          return D.addKey(me), me;
                        } }, value: { get: function() {
                          return Y && N.addKey($.primaryKey), $.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  D.add(r);
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
        return r.numFailures === o ? null : (t = u({}, t), S(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && S(t.values) && (t.values = t.values.filter(function(s, c) {
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
          if (b.type === "add" || b.type === "put") for (var O = new Ze(), C = b.values.length - 1; 0 <= C; --C) {
            var N, D = b.values[C], B = g(D);
            O.hasKey(B) || (N = w(D), (d && S(N) ? N.some(function($) {
              return Qr($, m);
            }) : Qr(N, m)) && (O.addKey(B), x.push(D)));
          }
          switch (b.type) {
            case "add":
              var V = new Ze().addKeys(t.values ? v.map(function(Y) {
                return g(Y);
              }) : v), E = v.concat(t.values ? x.filter(function(Y) {
                return Y = g(Y), !V.hasKey(Y) && (V.addKey(Y), !0);
              }) : x.map(function(Y) {
                return g(Y);
              }).filter(function(Y) {
                return !V.hasKey(Y) && (V.addKey(Y), !0);
              }));
              break;
            case "put":
              var M = new Ze().addKeys(b.values.map(function(Y) {
                return g(Y);
              }));
              E = v.filter(function(Y) {
                return !M.hasKey(t.values ? g(Y) : Y);
              }).concat(t.values ? x : x.map(function(Y) {
                return g(Y);
              }));
              break;
            case "delete":
              var U = new Ze().addKeys(b.keys);
              E = v.filter(function(Y) {
                return !U.hasKey(t.values ? g(Y) : Y);
              });
              break;
            case "deleteRange":
              var W = b.range;
              E = v.filter(function(Y) {
                return !Qr(g(Y), W);
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
            s.subscribers.size === 0 && De(c, s);
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
                    var b = e.table(T), E = v.optimisticOps.filter(function(Y) {
                      return Y.trans === d;
                    });
                    if (d._explicit && m && d.mutatedParts) for (var x = 0, O = Object.values(v.queries.query); x < O.length; x++) for (var C = 0, N = (V = O[x]).slice(); C < N.length; C++) Vr((M = N[C]).obsSet, d.mutatedParts) && (De(V, M), M.subscribers.forEach(function(Y) {
                      return g.add(Y);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(Y) {
                        return Y.trans !== d;
                      });
                      for (var D = 0, B = Object.values(v.queries.query); D < B.length; D++) for (var V, M, U, W = 0, $ = (V = B[D]).slice(); W < $.length; W++) (M = $[W]).res != null && d.mutatedParts && (m && !M.dirty ? (U = Object.isFrozen(M.res), U = Ji(M.res, M.req, E, b, M, U), M.dirty ? (De(V, M), M.subscribers.forEach(function(Y) {
                        return g.add(Y);
                      })) : U !== M.res && (M.res = U, M.promise = G.resolve({ result: U }))) : (M.dirty && De(V, M), M.subscribers.forEach(function(Y) {
                        return g.add(Y);
                      })));
                    }
                  }
                }
                g.forEach(function(Y) {
                  return Y();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: l }), d.addEventListener("error", s(!1), { signal: l }), d.addEventListener("complete", s(!0), { signal: l })), d;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var l = Z.trans;
            if (s.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Xt["idb://".concat(t, "/").concat(r)];
            return d ? (l = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Xr(s, c).some(function(m) {
              return m == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && rr(c.mutatedParts), l.then(function(m) {
              0 < m.numFailures && (De(d.optimisticOps, c), (m = zi(0, c, m)) && d.optimisticOps.push(m), c.mutatedParts && rr(c.mutatedParts));
            }), l.catch(function() {
              De(d.optimisticOps, c), c.mutatedParts && rr(c.mutatedParts);
            })) : l.then(function(m) {
              var g = zi(0, u(u({}, c), { values: c.values.map(function(w, p) {
                var T;
                return m.failures[p] || (w = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? Ee(w) : u({}, w), z(w, s.keyPath, m.results[p])), w;
              }) }), m);
              d.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && rr(c.mutatedParts);
              });
            }), l) : o.mutate(c);
          }, query: function(c) {
            if (!Xi(Z, o) || !Qi("query", c)) return o.query(c);
            var l = ((g = Z.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", p = Z, d = p.requery, m = p.signal, g = function(b, E, x, O) {
              var C = Xt["idb://".concat(b, "/").concat(E)];
              if (!C) return [];
              if (!(E = C.queries[x])) return [null, !1, C, null];
              var N = E[(O.query ? O.query.index.name : null) || ""];
              if (!N) return [null, !1, C, null];
              switch (x) {
                case "query":
                  var D = N.find(function(B) {
                    return B.req.limit === O.limit && B.req.values === O.values && Zi(B.req.query.range, O.query.range);
                  });
                  return D ? [D, !0, C, N] : [N.find(function(B) {
                    return ("limit" in B.req ? B.req.limit : 1 / 0) >= O.limit && (!O.values || B.req.values) && ws(B.req.query.range, O.query.range);
                  }), !1, C, N];
                case "count":
                  return D = N.find(function(B) {
                    return Zi(B.req.query.range, O.query.range);
                  }), [D, !!D, C, N];
              }
            }(t, r, "query", c), w = g[0], p = g[1], T = g[2], v = g[3];
            return w && p ? w.obsSet = c.obsSet : (p = o.query(c).then(function(b) {
              var E = b.result;
              if (w && (w.res = E), l) {
                for (var x = 0, O = E.length; x < O; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = Ee(E);
              return b;
            }).catch(function(b) {
              return v && w && De(v, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(w) : (v = [w], (T = T || (Xt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), xs(w, v, d, m), w.promise.then(function(b) {
              return { result: Ji(b.result, c, T?.optimisticOps, o, w, l) };
            });
          } });
        } });
      } };
      function or(e, t) {
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
        return this.idbdb && (this._state.openComplete || Z.letThrough || this._vip) ? e() : new G(function(r, o) {
          if (t._state.openComplete) return o(new K.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new K.DatabaseClosed());
            t.open().catch(k);
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
        return Wt(rt, function() {
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
        e.isBeingOpened || (e.dbReadyPromise = new G(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new G(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Le.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new K.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new K.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Le.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new G(function(s, c) {
          function l() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = je(function() {
              var m, g, w;
              m = t._deps, g = t.name, w = m.indexedDB, m = m.IDBKeyRange, qr(w) || g === $n || Mr(w, m).delete(g).catch(k), s();
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
          return o = c.pop(), [t, se(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Le.prototype._transaction = function(e, t, r) {
        var o = this, s = Z.trans;
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
          return G.resolve().then(function() {
            var E = Z.transless || Z, x = w._createTransaction(p, T, w._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === P.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return g(w, p, T, null, b);
              })) : Ue(N);
            }
            var O, C = yt(b);
            return C && un(), E = G.follow(function() {
              var N;
              (O = b.call(x, x)) && (C ? (N = Dt.bind(null, null), O.then(N, N)) : typeof O.next == "function" && typeof O.throw == "function" && (O = Gr(O)));
            }, E), (O && typeof O.then == "function" ? G.resolve(O).then(function(N) {
              return x.active ? N : Ue(new K.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return O;
            })).then(function(N) {
              return v && x._resolve(), x._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return x._reject(N), Ue(N);
            });
          });
        }).bind(null, this, c, l, s, r);
        return s ? s._promise(c, m, "lock") : Z.trans ? Wt(Z.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!R(this._allTables, e)) throw new K.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Le);
      function Le(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Le.dependencies;
        this._options = t = u({ addons: Le.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, l, d, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: k, dbReadyPromise: null, cancelOpen: k, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new G(function(p) {
          g.dbReadyResolve = p;
        }), g.openCanceller = new G(function(p, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = vn(this, "populate", "blocked", "versionchange", "close", { ready: [ce, k] }), this.once = function(p, T) {
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(p).unsubscribe(v), T.apply(r, b);
          };
          return r.on(p, v);
        }, this.on.ready.subscribe = Fe(this.on.ready.subscribe, function(p) {
          return function(T, v) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || G.resolve().then(T), v && p(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && p(T)) : (p(T), b = r, v || p(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, gn(os.prototype, function(O, x) {
          this.db = s;
          var v = Pi, b = null;
          if (x) try {
            v = x();
          } catch (C) {
            b = C;
          }
          var E = O._ctx, x = E.table, O = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: O !== j ? O : null };
        })), this.Table = (c = this, gn(Di.prototype, function(p, T, v) {
          this.db = c, this._tx = v, this.name = p, this.schema = T, this.hook = c._allTables[p] ? c._allTables[p].hook : vn(null, { creating: [oe, k], reading: [X, j], updating: [he, k], deleting: [ne, k] });
        })), this.Transaction = (l = this, gn(us.prototype, function(p, T, v, b, E) {
          var x = this;
          p !== "readonly" && T.forEach(function(O) {
            O = (O = v[O]) === null || O === void 0 ? void 0 : O.yProps, O && (T = T.concat(O.map(function(C) {
              return C.updatesTable;
            })));
          }), this.db = l, this.mode = p, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = vn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new G(function(O, C) {
            x._resolve = O, x._reject = C;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(O) {
            var C = x.active;
            return x.active = !1, x.on.error.fire(O), x.parent ? x.parent._reject(O) : C && x.idbtrans && x.idbtrans.abort(), Ue(O);
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
            return or(r.table(E), w);
          };
          var b = Reflect.get(p, T, v);
          return b instanceof Di ? or(b, w) : T === "tables" ? b.map(function(E) {
            return or(E, w);
          }) : T === "_createTransaction" ? function() {
            return or(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(p) {
          return p(r);
        });
      }
      var sr, pt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ts = (zr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, zr.prototype[pt] = function() {
        return this;
      }, zr);
      function zr(e) {
        this._subscribe = e;
      }
      try {
        sr = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        sr = { indexedDB: null, IDBKeyRange: null };
      }
      function eo(e) {
        var t, r = !1, o = new Ts(function(s) {
          var c = yt(e), l, d = !1, m = {}, g = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, l && l.abort(), p && jt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(w);
          var p = !1, T = function() {
            return Ar(b);
          }, v = function(E) {
            nr(m, E), Vr(g, m) && T();
          }, b = function() {
            var E, x, O;
            !d && sr.indexedDB && (m = {}, E = {}, l && l.abort(), l = new AbortController(), O = function(C) {
              var N = sn();
              try {
                c && un();
                var D = It(e, C);
                return D = c ? D.finally(Dt) : D;
              } finally {
                N && an();
              }
            }(x = { subscr: E, signal: l.signal, requery: T, querier: e, trans: null }), Promise.resolve(O).then(function(C) {
              r = !0, t = C, d || x.signal.aborted || (m = {}, function(N) {
                for (var D in N) if (R(N, D)) return;
                return 1;
              }(g = E) || p || (jt(wn, v), p = !0), Ar(function() {
                return !d && s.next && s.next(C);
              }));
            }, function(C) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(C?.name) || d || Ar(function() {
                d || s.error && s.error(C);
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
        var t = Ft;
        try {
          Ft = !0, jt.storagemutated.fire(e), Wr(e, !0);
        } finally {
          Ft = t;
        }
      }
      H(Qt, u(u({}, $e), { delete: function(e) {
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
              return s !== $n;
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
        return Z.trans ? Wt(Z.transless, e) : e();
      }, vip: Ur, async: function(e) {
        return function() {
          try {
            var t = Gr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : G.resolve(t);
          } catch (r) {
            return Ue(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Gr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : G.resolve(o);
        } catch (s) {
          return Ue(s);
        }
      }, currentTransaction: { get: function() {
        return Z.trans || null;
      } }, waitFor: function(e, t) {
        return t = G.resolve(typeof e == "function" ? Qt.ignoreTransaction(e) : e).timeout(t || 6e4), Z.trans ? Z.trans.waitFor(t) : t;
      }, Promise: G, debug: { get: function() {
        return re;
      }, set: function(e) {
        Oe(e);
      } }, derive: fe, extend: I, props: H, override: Fe, Events: vn, on: jt, liveQuery: eo, extendObservabilitySet: nr, getByKeyPath: Q, setByKeyPath: z, delByKeyPath: function(e, t) {
        typeof t == "string" ? z(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          z(e, r, void 0);
        });
      }, shallowClone: J, deepClone: Ee, getObjectDiff: Yr, cmp: be, asap: ge, minKey: -1 / 0, addons: [], connections: cn, errnames: P, dependencies: sr, cache: Xt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Qt.maxKey = xn(Qt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (jt(wn, function(e) {
        Ft || (e = new CustomEvent(Ir, { detail: e }), Ft = !0, dispatchEvent(e), Ft = !1);
      }), addEventListener(Ir, function(e) {
        e = e.detail, Ft || Jr(e);
      }));
      var pn, Ft = !1, to = function() {
      };
      return typeof BroadcastChannel < "u" && ((to = function() {
        (pn = new BroadcastChannel(Ir)).onmessage = function(e) {
          return e.data && Jr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), jt(wn, function(e) {
        Ft || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!At.disableBfCache && e.persisted) {
          re && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = cn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !At.disableBfCache && e.persisted && (re && console.debug("Dexie: handling persisted pageshow"), to(), Jr({ all: new Ze(-1 / 0, [[]]) }));
      })), G.rejectionMapper = function(e, t) {
        return !e || e instanceof Ct || e instanceof TypeError || e instanceof SyntaxError || !e.name || !q[e.name] ? e : (t = new q[e.name](t || e.message, e), "stack" in e && te(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Oe(re), u(At, Object.freeze({ __proto__: null, Dexie: At, liveQuery: eo, Entity: Ci, cmp: be, PropModification: bn, replacePrefix: function(e, t) {
        return new bn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new bn({ add: e });
      }, remove: function(e) {
        return new bn({ remove: e });
      }, default: At, RangeSet: Ze, mergeRanges: Sn, rangesOverlap: $i }), { default: At }), At;
    });
  }(ra)), ra.exports;
}
var Id = Nd();
const ia = /* @__PURE__ */ Td(Id), mu = Symbol.for("Dexie"), Lo = globalThis[mu] || (globalThis[mu] = ia);
if (ia.semVer !== Lo.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${ia.semVer} and ${Lo.semVer}`);
const {
  liveQuery: zh,
  mergeRanges: Jh,
  rangesOverlap: Zh,
  RangeSet: ep,
  cmp: tp,
  Entity: np,
  PropModification: rp,
  replacePrefix: ip,
  add: op,
  remove: sp,
  DexieYProvider: ap
} = Lo;
class Dd extends Lo {
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
    [mt]: js
  }), n.version(2).stores({
    [mt]: js,
    [ai]: hu
  }), n.version(2.1).stores({
    [mt]: js,
    [ai]: hu
  }).upgrade((i) => {
    i.table(ai).toCollection().modify((a) => {
      typeof a.file == "string" && (a.file = new Blob([a.file], { type: "text/xml" }));
    });
  }), n;
}
function xe(n, i) {
  return n?.attributes?.find((a) => a.name === i)?.value;
}
function Rd(n) {
  return {
    id: n.id,
    uuid: xe(n, "uuid") ?? "",
    iedName: xe(n, "iedName") ?? "",
    prefix: xe(n, "prefix") ?? "",
    lnClass: xe(n, "lnClass") ?? "",
    lnInst: xe(n, "lnInst") ?? "",
    lnType: xe(n, "lnType") ?? ""
  };
}
function Kd(n) {
  return {
    id: n.id,
    name: xe(n, "name") ?? "",
    type: xe(n, "type") ?? "",
    bType: xe(n, "bType") ?? "",
    dataObjectId: xe(n, "dataObjectId") ?? "",
    fc: xe(n, "fc") ?? ""
  };
}
function ot(n, i) {
  if (n) return;
  const a = "Invariant failed", u = i ? `${a}: ${i}` : a;
  throw console.error(u), new Error("Unexpected Error!");
}
function jd(n) {
  const i = Object.fromEntries(n.entries());
  for (const a of n.keys()) {
    const u = n.getAll(a);
    u.length > 1 && (i[a] = u);
  }
  return i;
}
function vu(n) {
  return Object.entries(n).map(([i, a]) => ({
    name: i,
    value: String(a)
  }));
}
const Fd = (n) => n != null;
function Bd(n) {
  const i = {}, a = Object.keys(n).sort((u, f) => u.localeCompare(f));
  for (const u of a)
    i[u] = n[u];
  return i;
}
function Kc(n) {
  return {
    id: n.id,
    uuid: xe(n, "uuid"),
    desc: xe(n, "desc"),
    templateUuid: xe(n, "templateUuid"),
    originUuid: xe(n, "originUuid"),
    pLN: xe(n, "pLN"),
    pDO: xe(n, "pDO"),
    resourceName: xe(n, "resourceName"),
    resourceUuid: xe(n, "resourceUuid"),
    pDA: xe(n, "pDA"),
    input: xe(n, "input"),
    source: xe(n, "source"),
    sourceLNodeUuid: xe(n, "sourceLNodeUuid"),
    sourceDoName: xe(n, "sourceDoName"),
    sourceDaName: xe(n, "sourceDaName"),
    service: xe(n, "service"),
    inputInst: xe(n, "inputInst"),
    extRefAddr: xe(n, "extRefAddr"),
    extRefUuid: xe(n, "extRefUuid")
  };
}
function jc(n) {
  return {
    id: n.id,
    uuid: xe(n, "uuid"),
    desc: xe(n, "desc"),
    templateUuid: xe(n, "templateUuid"),
    originUuid: xe(n, "originUuid"),
    pLN: xe(n, "pLN"),
    pDO: xe(n, "pDO"),
    resourceName: xe(n, "resourceName"),
    resourceUuid: xe(n, "resourceUuid"),
    pDA: xe(n, "pDA"),
    output: xe(n, "output"),
    controlled: xe(n, "controlled"),
    controlLNodeUuid: xe(n, "controlLNodeUuid"),
    controlDoName: xe(n, "controlDoName"),
    controlDaName: xe(n, "controlDaName"),
    service: xe(n, "service"),
    outputInst: xe(n, "outputInst"),
    extRefAddr: xe(n, "extRefAddr"),
    extRefUuid: xe(n, "extRefUuid")
  };
}
function Md(n) {
  return {
    addRecord: i,
    createRecord: f,
    updateRecord: a,
    deleteRecord: u,
    findRecordById: L,
    findRecordsByTagName: F,
    findChildRecords: fe,
    findChildRecordsByTagName: Be,
    findChildRecordsWithinDepthAndGivenTagName: Pe,
    findParentByTagName: pe,
    instantiate: R,
    ensureRelationship: y,
    ensurePrivateElement: S,
    recordExists: h,
    getPath: Ie,
    getParent: Fe,
    close: ge,
    db: n
  };
  async function i(Q) {
    const z = { ...Q, id: crypto.randomUUID() };
    try {
      return await n.table(mt).add(z), z;
    } catch (J) {
      const A = {
        msg: "could not add record",
        db: n.name,
        newRecord: z,
        err: J
      };
      throw console.error(A), new Error(JSON.stringify(A));
    }
  }
  async function a(Q) {
    try {
      if (await n.table(mt).update(Q.id, Q) < 1) {
        const J = { msg: "nothing has been updated", record: Q };
        throw console.error(J), new Error(JSON.stringify(J));
      }
    } catch (z) {
      console.error(z);
    }
  }
  async function u(Q) {
    try {
      if (Q.children)
        for (const z of Q.children) {
          const J = await L(z.id);
          if (!J) {
            console.warn({
              msg: "deleteRecord: child relationship found but not child record, continuing",
              child: z
            });
            continue;
          }
          await u(J);
        }
      if (Q.parent?.id) {
        const z = await L(Q.parent.id);
        if (!z) throw new Error("parent relationship found but not parent record");
        await I(z, Q);
      }
      await n.table(mt).delete(Q.id);
    } catch (z) {
      console.error(z);
    }
  }
  async function f(Q, z) {
    try {
      const J = { ...Q, id: crypto.randomUUID() };
      return await n.table(mt).add(J), z && await y(z, J), {
        ...J,
        parent: z ? { id: z.id, tagName: z.tagName } : null
      };
    } catch (J) {
      const A = {
        msg: "could not add record",
        db: n.name,
        table: Q.tagName,
        recordToCreate: Q,
        err: J
      };
      throw console.error(A), new Error(JSON.stringify(A));
    }
  }
  async function h(Q) {
    return await n.table(mt).where({ id: Q.id }).count() > 0;
  }
  async function y(Q, z) {
    const J = Q.children?.some((se) => se.id === z.id), A = z.parent?.id === Q.id;
    J || await n.table(mt).update(Q.id, {
      children: [...Q.children, { id: z.id, tagName: z.tagName }]
    }), A || (z.parent = {
      id: Q.id,
      tagName: Q.tagName
    }, await n.table(mt).update(z.id, { parent: z.parent }));
  }
  async function S(Q) {
    let J = (await te("Private", {
      name: "type",
      value: "eIEC61850-6-100"
    })).find((A) => A.parent?.id === Q.id);
    if (!J) {
      const A = {
        tagName: "Private",
        attributes: [{ name: "type", value: "eIEC61850-6-100" }],
        parent: null,
        namespace: Pd.default,
        value: "",
        children: []
      };
      J = await f(A), await y(Q, J);
    }
    return J;
  }
  async function I(Q, z) {
    z.parent = null, await a(z), Q.children && (Q.children = Q.children.filter((J) => J.id !== z.id), await a(Q));
  }
  async function L(Q) {
    return await n.table(mt).get(Q);
  }
  async function F(Q) {
    return await n.table(mt).where({ tagName: Q }).toArray();
  }
  function R(Q) {
    const z = H(Q);
    if (!z)
      throw console.error('record does not have a "uuid" to move to "templateUUID"', Q), new Error('record does not have a "uuid" to move to "templateUUID"');
    Q.attributes?.push({ name: "templateUuid", value: z }), ie(Q);
  }
  function H(Q) {
    const z = Q.attributes?.find((J) => J.name === "uuid");
    if (z)
      return z.value;
  }
  function ie(Q) {
    Q.attributes || (Q.attributes = []);
    const z = crypto.randomUUID(), J = Q.attributes.findIndex((se) => se.name === "uuid");
    J >= 0 ? Q.attributes[J].value = z : Q.attributes.push({ name: "uuid", value: z });
  }
  async function te(Q, z) {
    return qd(n, Q, z);
  }
  async function fe(Q) {
    return Q.children?.length ? await n.table(mt).where({ "parent.id": Q.id }).toArray() : [];
  }
  async function Be(Q, z) {
    return (await fe(Q)).filter((A) => z.includes(A.tagName));
  }
  async function Pe(Q, z, J = 1 / 0) {
    const A = [];
    let se = [Q];
    for (let Te = 0; Te < J; Te++) {
      const ae = [];
      if (se.length === 0)
        break;
      for (const Ee of se) {
        const Qe = await fe(Ee);
        Qe.length !== 0 && (ae.push(...Qe), A.push(...Qe.filter((He) => z.includes(He.tagName))));
      }
      se = [...ae];
    }
    return A;
  }
  async function Ie(Q) {
    const z = [Q];
    let A = await Fe(Q);
    for (; A; )
      z.push(A), A = await Fe(A);
    class se extends Array {
      constructor(...ae) {
        super(...ae);
      }
      joinNames() {
        return this.map((ae) => {
          switch (ae.tagName) {
            case "Substation":
            case "VoltageLevel":
            case "Bay":
            case "Function":
            case "SubFunction":
              return `/${xe(ae, "name")}`;
            case "LNode":
              const Qe = Rd(ae);
              return `/${Qe.prefix}${Qe.lnClass}${Qe.lnInst}`;
            case "DOS":
            case "DAS":
              return `.${xe(ae, "name")}`;
            case "SourceRef":
              const He = Kc(ae);
              var Ee = `.${He.input}`;
              return He.inputInst && (Ee += `(${He.inputInst})`), He.pDA && (Ee += `.${He.pDA}`), Ee;
            case "ControlRef":
              const Ke = jc(ae);
              var Ee = `.${Ke.output}`;
              return Ke.outputInst && (Ee += `(${Ke.outputInst})`), Ee;
            default:
              return;
          }
        }).filter(Boolean).join("").replace(/^\//, "");
      }
    }
    return new se(...z.reverse());
  }
  async function Fe(Q) {
    switch (Q.tagName) {
      case "SourceRef":
        return pe(Q, ["LNode"]);
      case "ControlRef":
        return pe(Q, ["LNode"]);
      case "LNode":
        return pe(Q, ["Function", "SubFunction"]);
      case "SubFunction":
        return pe(Q, ["Function"]);
      default:
        return z(Q);
    }
    async function z(J) {
      if (!J.parent?.id) return null;
      if (J.parent.tagName == "Private") {
        const A = await n.table(mt).get(J.parent.id);
        return A ? z(A) : null;
      }
      return n.table(mt).get(J.parent.id);
    }
  }
  async function pe(Q, z) {
    if (!Q.parent?.id) return null;
    const J = Array.isArray(z) ? Q.parent && z.includes(Q.parent.tagName) : Q.parent?.tagName === z, A = await n.table(mt).get(Q.parent.id);
    return ot(A, "Record has parent relationship but parent not found"), J ? A : pe(A, z);
  }
  function ge() {
    n.close();
  }
}
async function qd(n, i, a) {
  try {
    return await n.table(mt).where({ tagName: i }).filter(
      (f) => !!f.attributes?.some((h) => h.name === a.name && h.value === a.value)
    ).toArray();
  } catch (u) {
    console.error({ msg: "could not find record by attribute", tagName: i, attr: a, err: u });
  }
  return [];
}
const on = /* @__PURE__ */ xd("structure/app", () => {
  const n = Zt(""), i = Ls();
  async function a(u) {
    const f = new Dd(u);
    await f.open(), n.value = u, i.value = Md(f);
  }
  return {
    activeFilename: n,
    sdk: i,
    initApp: a
  };
});
function Ud(n) {
  return ha() ? (Ru(n), !0) : !1;
}
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const Ld = () => {
};
function Fs(n, i, a) {
  var u;
  let f;
  _t(a) ? f = {
    evaluating: a
  } : f = {};
  const {
    lazy: h = !1,
    flush: y = "pre",
    evaluating: S = void 0,
    shallow: I = !0,
    onError: L = (u = globalThis.reportError) != null ? u : Ld
  } = f, F = Ls(!h), R = I ? Ls(i) : Zt(i);
  let H = 0;
  return mf(async (ie) => {
    if (!F.value)
      return;
    H++;
    const te = H;
    let fe = !1;
    S && Promise.resolve().then(() => {
      S.value = !0;
    });
    try {
      const Be = await n((Pe) => {
        ie(() => {
          S && (S.value = !1), fe || Pe();
        });
      });
      te === H && (R.value = Be);
    } catch (Be) {
      L(Be);
    } finally {
      S && te === H && (S.value = !1), fe = !0;
    }
  }, { flush: y }), h ? Kn(() => (F.value = !0, R.value)) : R;
}
function Vd(n) {
  return "inputName" in n;
}
function $d(n) {
  return "outputName" in n;
}
function gu(n) {
  return "dataName" in n;
}
function bu(n) {
  const i = xe(n, "varName"), a = xe(n, "dataName"), u = xe(n, "inputName"), f = xe(n, "outputName");
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
    name: xe(n, "name") ?? "",
    fileReference: xe(n, "fileReference"),
    inputVars: i.map((u) => bu(u)),
    outputVars: a.map((u) => bu(u))
  };
}
function Wd(n, i, a) {
  return n.map((u) => {
    const f = u.children.filter((y) => y.tagName === "InputVar").map((y) => i.find((S) => S.id === y.id)).filter((y) => !!y), h = u.children.filter((y) => y.tagName === "OutputVar").map((y) => a.find((S) => S.id === y.id)).filter((y) => !!y);
    return Hd(u, f, h);
  });
}
async function _u() {
  const n = on();
  ot(n.sdk, "SDK not initialized");
  const i = await n.sdk.db.table(mt).where("tagName").equals("BehaviorDescription").or("tagName").equals("InputVar").or("tagName").equals("OutputVar").toArray().then((a) => {
    const u = a.filter((y) => y.tagName === "BehaviorDescription"), f = a.filter((y) => y.tagName === "InputVar"), h = a.filter((y) => y.tagName === "OutputVar");
    return [u, f, h];
  });
  return Wd(...i);
}
async function Gd(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = i.sdk.db.table(mt).where("tagName").equals("LNodeType");
  if (n) {
    const u = await a.and((f) => xe(f, "id") === n).first();
    if (!u) throw new Error("LNodeType not found for selected LNode");
    return u;
  }
  return a.toArray();
}
async function Yd(n) {
  const i = on();
  return ot(i.sdk, "SDK not initialized"), i.sdk.db.table(mt).where("tagName").equals("DOType").and((a) => n.includes(xe(a, "id") ?? "")).toArray();
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
async function Jd(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.findRecordById(n.id);
  ot(a, "BehaviorDescription not found"), ot(a.parent, "BehaviorDescription has no parent");
  const u = await i.sdk.findParentByTagName(a, [
    "Substation",
    "VoltageLevel",
    "Function",
    "SubFunction"
  ]);
  return ot(u, "BehaviorDescription parent not found"), i.sdk.findChildRecordsWithinDepthAndGivenTagName(u, ["LNode"]);
}
const Zd = { class: "flex flex-wrap gap-3" }, eh = { class: "modal-box max-w-[34rem]" }, th = { class: "text-lg font-bold" }, nh = { class: "grid grid-cols-2 gap-2" }, rh = { class: "flex flex-col gap-2 *:flex *:items-center *:gap-1.5" }, ih = ["value", "checked"], oh = ["checked"], sh = { class: "grid grid-cols-2 items-center gap-2" }, ah = ["label"], uh = ["value"], ch = {
  key: 0,
  class: "grid grid-cols-2 items-center gap-2"
}, lh = ["aria-disabled"], fh = {
  value: "",
  disabled: "",
  selected: ""
}, dh = ["value"], hh = {
  key: 1,
  class: "grid grid-cols-2 items-center gap-2"
}, ph = ["aria-disabled"], mh = {
  value: "",
  disabled: "",
  selected: ""
}, yh = ["value"], vh = {
  key: 2,
  class: "grid grid-cols-2 items-center gap-2"
}, gh = ["aria-disabled"], bh = {
  value: "",
  disabled: "",
  selected: ""
}, _h = ["value"], wh = { class: "grid grid-cols-2 items-center gap-2" }, xh = ["defaultValue"], Eh = /* @__PURE__ */ So({
  __name: "add-behavior-variable",
  props: {
    type: {},
    onSubmit: { type: Function },
    behaviorDescription: {}
  },
  async setup(n) {
    let i, a;
    const u = n, f = on(), h = Zt(null), y = ([i, a] = go(() => Jd(u.behaviorDescription)), i = await i, a(), i), S = ([i, a] = go(async () => Promise.all(
      y.map(async (J) => {
        const se = (await f.sdk.getPath(J)).joinNames().split("/");
        ot(se.length > 0, "LNode path is invalid");
        const Te = se[se.length - 1], ae = se.slice(0, -1).join("/");
        return {
          id: J.id,
          lnodeId: J.id,
          path: ae,
          label: Te
        };
      })
    )), i = await i, a(), i), I = z(S), L = Kn(() => u.type === "input" ? "sourceRef" : "dataAttribute"), F = Zt(L.value), R = Zt(""), H = Fs(async () => {
      const J = R.value;
      let A = await Qd();
      if (J) {
        const se = [], Te = await Promise.all(
          A.map((ae) => f.sdk.getParent(ae))
        );
        for (let [ae, Ee] of Te.entries())
          Ee && Ee.id === J && se.push(A[ae]);
        A = se;
      }
      return A.map(Kc);
    }, []), ie = Zt(""), te = Kn(() => {
      const J = H.value.find((A) => A.id === ie.value);
      return J ? `${J.input}_${J.inputInst}_${J.pDA}` : "";
    }), fe = Fs(async () => {
      const J = R.value;
      let A = await zd();
      if (J) {
        const se = [], Te = await Promise.all(
          A.map((ae) => f.sdk.getParent(ae))
        );
        for (let [ae, Ee] of Te.entries())
          Ee && Ee.id === J && se.push(A[ae]);
        A = se;
      }
      return A.map(jc);
    }, []), Be = Zt(""), Pe = Kn(() => {
      const J = fe.value.find((A) => A.id === Be.value);
      return J ? `${J.output}_${J.outputInst}_${J.pDO}` : "";
    }), Ie = Fs(async () => {
      const J = y.find((ue) => ue.id === R.value), A = await Gd(xe(J, "lnType")), se = Array.isArray(A) ? A : [A], Te = await Promise.all(
        se.map((ue) => f.sdk?.findChildRecordsByTagName(ue, ["DO"])) ?? []
      ).then((ue) => ue.flat()), ae = Te.map((ue) => xe(ue, "type")).filter(Fd), Ee = await Yd(ae), Qe = Ee.map((ue) => ue.id);
      let He = await Xd();
      He = He.filter(
        (ue) => Qe.some((De) => ue.parent?.id === De)
      );
      function Ke({ parent: ue }) {
        const De = xe(
          Ee.find(({ id: Je }) => Je === ue?.id),
          "id"
        );
        return Te.find((Je) => xe(Je, "type") === De);
      }
      return He.map((ue) => ({
        ...Kd(ue),
        doName: xe(Ke(ue), "name")
      }));
    }, []), Fe = Zt(""), pe = Kn(() => {
      const J = Ie.value.find((A) => A.id === Fe.value);
      return J ? `${J.doName}_${J.name}` : "";
    });
    function ge(J) {
      return [
        ...J.inputVars.map((A) => A.varName),
        ...J.outputVars.map((A) => A.varName)
      ].flat();
    }
    async function Q(J) {
      const A = J.target, se = new FormData(A), Te = jd(se);
      let ae = {
        varName: String(Te.name).trim()
      };
      if (ge(u.behaviorDescription).includes(ae.varName)) {
        J.preventDefault();
        const Ee = A.elements.namedItem("name");
        Ee.setCustomValidity("Variable name is already taken"), Ee.reportValidity();
        return;
      }
      if (Te.type === "sourceRef" || Te.type === "controlRef") {
        const Ee = Te.sourceRef || Te.controlRef, Qe = await f.sdk.findRecordById(String(Ee));
        ot(Qe, "SourceRef/ControlRef not found");
        const Ke = (await f.sdk.getPath(Qe)).joinNames(), ue = xe(Qe, "uuid");
        ae[u.type == "input" ? "inputName" : "outputName"] = Ke, ae[u.type == "input" ? "inputUuid" : "outputUuid"] = ue;
      }
      if (Te.type === "dataAttribute") {
        const Ee = await f.sdk.findRecordById(String(Te.dataAttribute));
        ot(Ee, "DataAttribute not found"), ot(Ee.parent, "DataAttribute has no parent");
        const Qe = await f.sdk.findRecordById(Ee.parent.id), He = xe(Qe, "id");
        ot(He, "DO Type not found");
        const Ke = await f.sdk?.db.table(mt).where("tagName").equals("DO").and((Je) => xe(Je, "type") === He).first();
        ot(Ke, "DO not found");
        const ue = y.find((Je) => Je.id === Te.lNode);
        ot(ue, "LNode not found"), ae.lnodeUuid = xe(ue, "uuid"), ae.daName = xe(Ee, "name"), ae.doName = xe(Ke, "name");
        const De = await f.sdk.getPath(ue);
        ae.dataName = De.joinNames() + `.${ae.doName}.${ae.daName}`;
      }
      await u.onSubmit(ae), A.reset(), R.value = "", ie.value = "", Be.value = "", Fe.value = "", F.value = L.value;
    }
    function z(J) {
      const A = J.sort((Te, ae) => Te.label.localeCompare(ae.label));
      let se = {};
      for (const Te of A) {
        const ae = Te.path;
        se[ae] || (se[ae] = []), se[ae].push({
          lnodeId: Te.lnodeId,
          label: Te.label
        });
      }
      return Bd(se);
    }
    return (J, A) => (We(), ze("div", Zd, [
      _e("button", {
        type: "button",
        class: "btn btn-sm btn-primary btn-soft",
        onClick: A[0] || (A[0] = //@ts-ignore
        (...se) => h.value?.showModal && h.value?.showModal(...se))
      }, [
        Hl(J.$slots, "default", {}, void 0)
      ]),
      _e("dialog", {
        ref_key: "dialog",
        ref: h,
        class: "modal text-neutral-700"
      }, [
        _e("div", eh, [
          _e("h3", th, "Add " + vt(u.type) + " variable", 1),
          A[17] || (A[17] = _e("form", { method: "dialog" }, [
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
            onSubmit: hi(Q, ["stop"]),
            class: "flex flex-col gap-4 mt-4"
          }, [
            _e("fieldset", null, [
              _e("div", nh, [
                A[9] || (A[9] = _e("legend", null, "Type", -1)),
                _e("div", rh, [
                  _e("label", null, [
                    ri(_e("input", {
                      type: "radio",
                      name: "type",
                      class: "radio radio-neutral",
                      "onUpdate:modelValue": A[1] || (A[1] = (se) => F.value = se),
                      value: u.type === "input" ? "sourceRef" : "controlRef",
                      checked: u.type === "input"
                    }, null, 8, ih), [
                      [ou, F.value]
                    ]),
                    mn(" " + vt(u.type === "input" ? "SourceRef" : "ControlRef"), 1)
                  ]),
                  _e("label", null, [
                    ri(_e("input", {
                      type: "radio",
                      name: "type",
                      class: "radio radio-neutral",
                      "onUpdate:modelValue": A[2] || (A[2] = (se) => F.value = se),
                      value: "dataAttribute",
                      checked: u.type === "output"
                    }, null, 8, oh), [
                      [ou, F.value]
                    ]),
                    A[8] || (A[8] = mn(" Data Attribute "))
                  ])
                ])
              ])
            ]),
            _e("div", sh, [
              A[11] || (A[11] = _e("label", { for: "lnode-select" }, "LNode", -1)),
              ri(_e("select", {
                id: "lnode-select",
                name: "lNode",
                class: "select select-bordered col-start-2",
                required: "",
                "onUpdate:modelValue": A[3] || (A[3] = (se) => R.value = se)
              }, [
                A[10] || (A[10] = _e("option", {
                  value: "",
                  disabled: "",
                  selected: ""
                }, "Choose an option", -1)),
                (We(!0), ze(gt, null, ii(Bt(I), (se, Te) => (We(), ze("optgroup", { label: Te }, [
                  (We(!0), ze(gt, null, ii(se, (ae) => (We(), ze("option", {
                    key: ae.lnodeId,
                    value: ae.lnodeId
                  }, vt(ae.label), 9, uh))), 128))
                ], 8, ah))), 256))
              ], 512), [
                [io, R.value]
              ])
            ]),
            F.value === "sourceRef" ? (We(), ze("div", ch, [
              A[12] || (A[12] = _e("label", { for: "source-ref" }, "SourceRef", -1)),
              ri((We(), ze("select", {
                id: "source-ref",
                name: "sourceRef",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Bt(H).length === 0,
                key: R.value,
                "onUpdate:modelValue": A[4] || (A[4] = (se) => ie.value = se)
              }, [
                _e("option", fh, vt(Bt(H).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (We(!0), ze(gt, null, ii(Bt(H), (se) => (We(), ze("option", {
                  key: se.id,
                  value: se.id
                }, vt(se.input) + "(" + vt(se.inputInst) + ")." + vt(se.pDA), 9, dh))), 128))
              ], 8, lh)), [
                [io, ie.value]
              ])
            ])) : On("", !0),
            F.value === "controlRef" ? (We(), ze("div", hh, [
              A[13] || (A[13] = _e("label", { for: "control-ref" }, "ControlRef", -1)),
              ri((We(), ze("select", {
                id: "control-ref",
                name: "controlRef",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Bt(fe).length === 0,
                key: R.value,
                "onUpdate:modelValue": A[5] || (A[5] = (se) => Be.value = se)
              }, [
                _e("option", mh, vt(Bt(fe).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (We(!0), ze(gt, null, ii(Bt(fe), (se) => (We(), ze("option", {
                  key: se.id,
                  value: se.id
                }, vt(se.output) + "(" + vt(se.outputInst) + ") ", 9, yh))), 128))
              ], 8, ph)), [
                [io, Be.value]
              ])
            ])) : On("", !0),
            F.value === "dataAttribute" ? (We(), ze("div", vh, [
              A[14] || (A[14] = _e("label", { for: "data-attribute" }, "Data Attribute", -1)),
              ri((We(), ze("select", {
                id: "data-attribute",
                name: "dataAttribute",
                class: "select select-bordered col-start-2",
                required: "",
                "aria-disabled": Bt(Ie).length === 0,
                key: R.value,
                "onUpdate:modelValue": A[6] || (A[6] = (se) => Fe.value = se)
              }, [
                _e("option", bh, vt(Bt(Ie).length == 0 ? "No options for selected LNode" : "Choose an option"), 1),
                (We(!0), ze(gt, null, ii(Bt(Ie), (se) => (We(), ze("option", {
                  key: se.id,
                  value: se.id
                }, vt(se.doName) + "." + vt(se.name), 9, _h))), 128))
              ], 8, gh)), [
                [io, Fe.value]
              ])
            ])) : On("", !0),
            _e("div", wh, [
              A[15] || (A[15] = _e("label", { for: "input-variable-name" }, "Name", -1)),
              _e("input", {
                id: "input-variable-name",
                name: "name",
                placeholder: "Name",
                class: "input input-bordered col-start-2",
                required: "",
                defaultValue: F.value === "sourceRef" ? te.value : F.value === "controlRef" ? Pe.value : pe.value,
                onInput: A[7] || (A[7] = (se) => {
                  const Te = se.target;
                  Te.validationMessage && Te.setCustomValidity("");
                })
              }, null, 40, xh)
            ]),
            A[16] || (A[16] = _e("div", { class: "modal-action" }, [
              _e("button", { class: "btn btn-primary" }, "Add Variable")
            ], -1))
          ], 32)
        ])
      ], 512)
    ]));
  }
}), Th = (n, i) => {
  const a = n.__vccOpts || n;
  for (const [u, f] of i)
    a[u] = f;
  return a;
}, wu = /* @__PURE__ */ Th(Eh, [["__scopeId", "data-v-bff78c81"]]);
var Sh = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Oh(n) {
  return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n;
}
var Do = { exports: {} }, Ah = Do.exports, xu;
function kh() {
  return xu || (xu = 1, function(n, i) {
    (function(a, u) {
      n.exports = u();
    })(Ah, function() {
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
      var h = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Sh, y = Object.keys, S = Array.isArray;
      function I(e, t) {
        return typeof t != "object" || y(t).forEach(function(r) {
          e[r] = t[r];
        }), e;
      }
      typeof Promise > "u" || h.Promise || (h.Promise = Promise);
      var L = Object.getPrototypeOf, F = {}.hasOwnProperty;
      function R(e, t) {
        return F.call(e, t);
      }
      function H(e, t) {
        typeof t == "function" && (t = t(L(e))), (typeof Reflect > "u" ? y : Reflect.ownKeys)(t).forEach(function(r) {
          te(e, r, t[r]);
        });
      }
      var ie = Object.defineProperty;
      function te(e, t, r, o) {
        ie(e, t, I(r && R(r, "get") && typeof r.get == "function" ? { get: r.get, set: r.set, configurable: !0 } : { value: r, configurable: !0, writable: !0 }, o));
      }
      function fe(e) {
        return { from: function(t) {
          return e.prototype = Object.create(t.prototype), te(e.prototype, "constructor", e), { extend: H.bind(null, e.prototype) };
        } };
      }
      var Be = Object.getOwnPropertyDescriptor, Pe = [].slice;
      function Ie(e, t, r) {
        return Pe.call(e, t, r);
      }
      function Fe(e, t) {
        return t(e);
      }
      function pe(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function ge(e) {
        h.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Q(e, t) {
        if (typeof t == "string" && R(e, t)) return e[t];
        if (!t) return e;
        if (typeof t != "string") {
          for (var r = [], o = 0, s = t.length; o < s; ++o) {
            var c = Q(e, t[o]);
            r.push(c);
          }
          return r;
        }
        var l = t.indexOf(".");
        if (l !== -1) {
          var d = e[t.substr(0, l)];
          return d == null ? void 0 : Q(d, t.substr(l + 1));
        }
      }
      function z(e, t, r) {
        if (e && t !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof t != "string" && "length" in t) {
          pe(typeof r != "string" && "length" in r);
          for (var o = 0, s = t.length; o < s; ++o) z(e, t[o], r[o]);
        } else {
          var c, l, d = t.indexOf(".");
          d !== -1 ? (c = t.substr(0, d), (l = t.substr(d + 1)) === "" ? r === void 0 ? S(e) && !isNaN(parseInt(c)) ? e.splice(c, 1) : delete e[c] : e[c] = r : z(d = !(d = e[c]) || !R(e, c) ? e[c] = {} : d, l, r)) : r === void 0 ? S(e) && !isNaN(parseInt(t)) ? e.splice(t, 1) : delete e[t] : e[t] = r;
        }
      }
      function J(e) {
        var t, r = {};
        for (t in e) R(e, t) && (r[t] = e[t]);
        return r;
      }
      var A = [].concat;
      function se(e) {
        return A.apply([], e);
      }
      var Re = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(se([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(t) {
          return t + e + "Array";
        });
      }))).filter(function(e) {
        return h[e];
      }), Te = new Set(Re.map(function(e) {
        return h[e];
      })), ae = null;
      function Ee(e) {
        return ae = /* @__PURE__ */ new WeakMap(), e = function t(r) {
          if (!r || typeof r != "object") return r;
          var o = ae.get(r);
          if (o) return o;
          if (S(r)) {
            o = [], ae.set(r, o);
            for (var s = 0, c = r.length; s < c; ++s) o.push(t(r[s]));
          } else if (Te.has(r.constructor)) o = r;
          else {
            var l, d = L(r);
            for (l in o = d === Object.prototype ? {} : Object.create(d), ae.set(r, o), r) R(r, l) && (o[l] = t(r[l]));
          }
          return o;
        }(e), ae = null, e;
      }
      var Qe = {}.toString;
      function He(e) {
        return Qe.call(e).slice(8, -1);
      }
      var Ke = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", ue = typeof Ke == "symbol" ? function(e) {
        var t;
        return e != null && (t = e[Ke]) && t.apply(e);
      } : function() {
        return null;
      };
      function De(e, t) {
        return t = e.indexOf(t), 0 <= t && e.splice(t, 1), 0 <= t;
      }
      var Je = {};
      function at(e) {
        var t, r, o, s;
        if (arguments.length === 1) {
          if (S(e)) return e.slice();
          if (this === Je && typeof e == "string") return [e];
          if (s = ue(e)) {
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
      }, ke = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], pt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(ke), Pt = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Ct(e, t) {
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
      fe(Ct).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), fe(tn).from(Ct), fe(wt).from(Ct);
      var P = pt.reduce(function(e, t) {
        return e[t] = t + "Error", e;
      }, {}), _ = Ct, K = pt.reduce(function(e, t) {
        var r = t + "Error";
        function o(s, c) {
          this.name = r, s ? typeof s == "string" ? (this.message = "".concat(s).concat(c ? `
 ` + c : ""), this.inner = c || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Pt[t] || r, this.inner = null);
        }
        return fe(o).from(_), e[t] = o, e;
      }, {});
      K.Syntax = SyntaxError, K.Type = TypeError, K.Range = RangeError;
      var q = ke.reduce(function(e, t) {
        return e[t + "Error"] = K[t], e;
      }, {}), $e = pt.reduce(function(e, t) {
        return ["Syntax", "Type", "Range"].indexOf(t) === -1 && (e[t + "Error"] = K[t]), e;
      }, {});
      function k() {
      }
      function j(e) {
        return e;
      }
      function X(e, t) {
        return e == null || e === j ? t : function(r) {
          return t(e(r));
        };
      }
      function ee(e, t) {
        return function() {
          e.apply(this, arguments), t.apply(this, arguments);
        };
      }
      function oe(e, t) {
        return e === k ? t : function() {
          var r = e.apply(this, arguments);
          r !== void 0 && (arguments[0] = r);
          var o = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var c = t.apply(this, arguments);
          return o && (this.onsuccess = this.onsuccess ? ee(o, this.onsuccess) : o), s && (this.onerror = this.onerror ? ee(s, this.onerror) : s), c !== void 0 ? c : r;
        };
      }
      function ne(e, t) {
        return e === k ? t : function() {
          e.apply(this, arguments);
          var r = this.onsuccess, o = this.onerror;
          this.onsuccess = this.onerror = null, t.apply(this, arguments), r && (this.onsuccess = this.onsuccess ? ee(r, this.onsuccess) : r), o && (this.onerror = this.onerror ? ee(o, this.onerror) : o);
        };
      }
      function he(e, t) {
        return e === k ? t : function(r) {
          var o = e.apply(this, arguments);
          I(r, o);
          var s = this.onsuccess, c = this.onerror;
          return this.onsuccess = null, this.onerror = null, r = t.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? ee(s, this.onsuccess) : s), c && (this.onerror = this.onerror ? ee(c, this.onerror) : c), o === void 0 ? r === void 0 ? void 0 : r : I(o, r);
        };
      }
      function ye(e, t) {
        return e === k ? t : function() {
          return t.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function ce(e, t) {
        return e === k ? t : function() {
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
      $e.ModifyError = tn, $e.DexieError = Ct, $e.BulkError = wt;
      var re = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function Oe(e) {
        re = e;
      }
      var ve = {}, Ae = 100, Re = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, L(e), e];
        var t = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [t, L(t), e];
      }(), ke = Re[0], pt = Re[1], Re = Re[2], pt = pt && pt.then, Ve = ke && ke.constructor, Ge = !!Re, lt = function(e, t) {
        nn.push([e, t]), St && (queueMicrotask(ts), St = !1);
      }, bt = !0, St = !0, ft = [], $t = [], In = j, rt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: k, pgp: !1, env: {}, finalize: k }, Z = rt, nn = [], Ht = 0, Bn = [];
      function G(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var t = this._PSD = Z;
        if (typeof e != "function") {
          if (e !== ve) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Tr(this, this._value));
        }
        this._state = null, this._value = null, ++t.ref, function r(o, s) {
          try {
            s(function(c) {
              if (o._state === null) {
                if (c === o) throw new TypeError("A promise cannot be resolved with itself.");
                var l = o._lib && sn();
                c && typeof c.then == "function" ? r(o, function(d, m) {
                  c instanceof G ? c._then(d, m) : c.then(d, m);
                }) : (o._state = !0, o._value = c, Si(o)), l && an();
              }
            }, Tr.bind(null, o));
          } catch (c) {
            Tr(o, c);
          }
        }(this, e);
      }
      var Er = { get: function() {
        var e = Z, t = Ln;
        function r(o, s) {
          var c = this, l = !e.global && (e !== Z || t !== Ln), d = l && !Dt(), m = new G(function(g, w) {
            Sr(c, new Ti(Ai(o, e, l, d), Ai(s, e, l, d), g, w, e));
          });
          return this._consoleTask && (m._consoleTask = this._consoleTask), m;
        }
        return r.prototype = ve, r;
      }, set: function(e) {
        te(this, "then", e && e.prototype === ve ? Er : { get: function() {
          return e;
        }, set: Er.set });
      } };
      function Ti(e, t, r, o, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof t == "function" ? t : null, this.resolve = r, this.reject = o, this.psd = s;
      }
      function Tr(e, t) {
        var r, o;
        $t.push(t), e._state === null && (r = e._lib && sn(), t = In(t), e._state = !1, e._value = t, o = e, ft.some(function(s) {
          return s._value === o._value;
        }) || ft.push(o), Si(e), r && an());
      }
      function Si(e) {
        var t = e._listeners;
        e._listeners = [];
        for (var r = 0, o = t.length; r < o; ++r) Sr(e, t[r]);
        var s = e._PSD;
        --s.ref || s.finalize(), Ht === 0 && (++Ht, lt(function() {
          --Ht == 0 && Or();
        }, []));
      }
      function Sr(e, t) {
        if (e._state !== null) {
          var r = e._state ? t.onFulfilled : t.onRejected;
          if (r === null) return (e._state ? t.resolve : t.reject)(e._value);
          ++t.psd.ref, ++Ht, lt(es, [r, e, t]);
        } else e._listeners.push(t);
      }
      function es(e, t, r) {
        try {
          var o, s = t._value;
          !t._state && $t.length && ($t = []), o = re && t._consoleTask ? t._consoleTask.run(function() {
            return e(s);
          }) : e(s), t._state || $t.indexOf(s) !== -1 || function(c) {
            for (var l = ft.length; l; ) if (ft[--l]._value === c._value) return ft.splice(l, 1);
          }(t), r.resolve(o);
        } catch (c) {
          r.reject(c);
        } finally {
          --Ht == 0 && Or(), --r.psd.ref || r.psd.finalize();
        }
      }
      function ts() {
        Wt(rt, function() {
          sn() && an();
        });
      }
      function sn() {
        var e = bt;
        return St = bt = !1, e;
      }
      function an() {
        var e, t, r;
        do
          for (; 0 < nn.length; ) for (e = nn, nn = [], r = e.length, t = 0; t < r; ++t) {
            var o = e[t];
            o[0].apply(null, o[1]);
          }
        while (0 < nn.length);
        St = bt = !0;
      }
      function Or() {
        var e = ft;
        ft = [], e.forEach(function(o) {
          o._PSD.onunhandled.call(null, o._value, o);
        });
        for (var t = Bn.slice(0), r = t.length; r; ) t[--r]();
      }
      function Mn(e) {
        return new G(ve, !1, e);
      }
      function je(e, t) {
        var r = Z;
        return function() {
          var o = sn(), s = Z;
          try {
            return Rt(r, !0), e.apply(this, arguments);
          } catch (c) {
            t && t(c);
          } finally {
            Rt(s, !1), o && an();
          }
        };
      }
      H(G.prototype, { then: Er, _then: function(e, t) {
        Sr(this, new Ti(null, null, e, t, Z));
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
          return G.resolve(e()).then(function() {
            return t;
          });
        }, function(t) {
          return G.resolve(e()).then(function() {
            return Mn(t);
          });
        });
      }, timeout: function(e, t) {
        var r = this;
        return e < 1 / 0 ? new G(function(o, s) {
          var c = setTimeout(function() {
            return s(new K.Timeout(t));
          }, e);
          r.then(o, s).finally(clearTimeout.bind(null, c));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && te(G.prototype, Symbol.toStringTag, "Dexie.Promise"), rt.env = Oi(), H(G, { all: function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t, r) {
          e.length === 0 && t([]);
          var o = e.length;
          e.forEach(function(s, c) {
            return G.resolve(s).then(function(l) {
              e[c] = l, --o || t(e);
            }, r);
          });
        });
      }, resolve: function(e) {
        return e instanceof G ? e : e && typeof e.then == "function" ? new G(function(t, r) {
          e.then(t, r);
        }) : new G(ve, !0, e);
      }, reject: Mn, race: function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t, r) {
          e.map(function(o) {
            return G.resolve(o).then(t, r);
          });
        });
      }, PSD: { get: function() {
        return Z;
      }, set: function(e) {
        return Z = e;
      } }, totalEchoes: { get: function() {
        return Ln;
      } }, newPSD: It, usePSD: Wt, scheduler: { get: function() {
        return lt;
      }, set: function(e) {
        lt = e;
      } }, rejectionMapper: { get: function() {
        return In;
      }, set: function(e) {
        In = e;
      } }, follow: function(e, t) {
        return new G(function(r, o) {
          return It(function(s, c) {
            var l = Z;
            l.unhandleds = [], l.onunhandled = c, l.finalize = ee(function() {
              var d, m = this;
              d = function() {
                m.unhandleds.length === 0 ? s() : c(m.unhandleds[0]);
              }, Bn.push(function g() {
                d(), Bn.splice(Bn.indexOf(g), 1);
              }), ++Ht, lt(function() {
                --Ht == 0 && Or();
              }, []);
            }, l.finalize), e();
          }, t, r, o);
        });
      } }), Ve && (Ve.allSettled && te(G, "allSettled", function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t) {
          e.length === 0 && t([]);
          var r = e.length, o = new Array(r);
          e.forEach(function(s, c) {
            return G.resolve(s).then(function(l) {
              return o[c] = { status: "fulfilled", value: l };
            }, function(l) {
              return o[c] = { status: "rejected", reason: l };
            }).then(function() {
              return --r || t(o);
            });
          });
        });
      }), Ve.any && typeof AggregateError < "u" && te(G, "any", function() {
        var e = at.apply(null, arguments).map(Vn);
        return new G(function(t, r) {
          e.length === 0 && r(new AggregateError([]));
          var o = e.length, s = new Array(o);
          e.forEach(function(c, l) {
            return G.resolve(c).then(function(d) {
              return t(d);
            }, function(d) {
              s[l] = d, --o || r(new AggregateError(s));
            });
          });
        });
      }), Ve.withResolvers && (G.withResolvers = Ve.withResolvers));
      var Ye = { awaits: 0, echoes: 0, id: 0 }, ns = 0, qn = [], Un = 0, Ln = 0, rs = 0;
      function It(e, t, r, o) {
        var s = Z, c = Object.create(s);
        return c.parent = s, c.ref = 0, c.global = !1, c.id = ++rs, rt.env, c.env = Ge ? { Promise: G, PromiseProp: { value: G, configurable: !0, writable: !0 }, all: G.all, race: G.race, allSettled: G.allSettled, any: G.any, resolve: G.resolve, reject: G.reject } : {}, t && I(c, t), ++s.ref, c.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, o = Wt(c, e, r, o), c.ref === 0 && c.finalize(), o;
      }
      function un() {
        return Ye.id || (Ye.id = ++ns), ++Ye.awaits, Ye.echoes += Ae, Ye.id;
      }
      function Dt() {
        return !!Ye.awaits && (--Ye.awaits == 0 && (Ye.id = 0), Ye.echoes = Ye.awaits * Ae, !0);
      }
      function Vn(e) {
        return Ye.echoes && e && e.constructor === Ve ? (un(), e.then(function(t) {
          return Dt(), t;
        }, function(t) {
          return Dt(), Ue(t);
        })) : e;
      }
      function is() {
        var e = qn[qn.length - 1];
        qn.pop(), Rt(e, !1);
      }
      function Rt(e, t) {
        var r, o = Z;
        (t ? !Ye.echoes || Un++ && e === Z : !Un || --Un && e === Z) || queueMicrotask(t ? (function(s) {
          ++Ln, Ye.echoes && --Ye.echoes != 0 || (Ye.echoes = Ye.awaits = Ye.id = 0), qn.push(Z), Rt(s, !0);
        }).bind(null, e) : is), e !== Z && (Z = e, o === rt && (rt.env = Oi()), Ge && (r = rt.env.Promise, t = e.env, (o.global || e.global) && (Object.defineProperty(h, "Promise", t.PromiseProp), r.all = t.all, r.race = t.race, r.resolve = t.resolve, r.reject = t.reject, t.allSettled && (r.allSettled = t.allSettled), t.any && (r.any = t.any))));
      }
      function Oi() {
        var e = h.Promise;
        return Ge ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(h, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function Wt(e, t, r, o, s) {
        var c = Z;
        try {
          return Rt(e, !0), t(r, o, s);
        } finally {
          Rt(c, !1);
        }
      }
      function Ai(e, t, r, o) {
        return typeof e != "function" ? e : function() {
          var s = Z;
          r && un(), Rt(t, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Rt(s, !1), o && queueMicrotask(Dt);
          }
        };
      }
      function Ar(e) {
        Promise === Ve && Ye.echoes === 0 ? Un === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + pt).indexOf("[native code]") === -1 && (un = Dt = k);
      var Ue = G.reject, Gt = "￿", Ot = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", ki = "String expected.", cn = [], $n = "__dbnames", kr = "readonly", Pr = "readwrite";
      function Yt(e, t) {
        return e ? t ? function() {
          return e.apply(this, arguments) && t.apply(this, arguments);
        } : e : t;
      }
      var Pi = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function Hn(e) {
        return typeof e != "string" || /\./.test(e) ? function(t) {
          return t;
        } : function(t) {
          return t[e] === void 0 && e in t && delete (t = Ee(t))[e], t;
        };
      }
      function Ci() {
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
              }(Ii(e), Ii(t));
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
        return t != "object" ? t : ArrayBuffer.isView(e) ? "binary" : (e = He(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Ii(e) {
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
      var Di = (Ce.prototype._trans = function(e, t, r) {
        var o = this._tx || Z.trans, s = this.name, c = re && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function l(g, w, p) {
          if (!p.schema[s]) throw new K.NotFound("Table " + s + " not part of transaction");
          return t(p.idbtrans, p);
        }
        var d = sn();
        try {
          var m = o && o.db._novip === this.db._novip ? o === Z.trans ? o._promise(e, l, r) : It(function() {
            return o._promise(e, l, r);
          }, { trans: o, transless: Z.transless || Z }) : function g(w, p, T, v) {
            if (w.idbdb && (w._state.openComplete || Z.letThrough || w._vip)) {
              var b = w._createTransaction(p, T, w._dbSchema);
              try {
                b.create(), w._state.PR1398_maxLoop = 3;
              } catch (E) {
                return E.name === P.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                  return g(w, p, T, v);
                })) : Ue(E);
              }
              return b._promise(p, function(E, x) {
                return It(function() {
                  return Z.trans = b, v(E, x, b);
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
              w.open().catch(k);
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
      }, Ce.prototype.get = function(e, t) {
        var r = this;
        return e && e.constructor === Object ? this.where(e).first(t) : e == null ? Ue(new K.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(o) {
          return r.core.get({ trans: o, key: e }).then(function(s) {
            return r.hook.reading.fire(s);
          });
        }).then(t);
      }, Ce.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (S(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
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
        !r && re && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(t.join("+"), "]"));
        var o = this.schema.idxByName;
        function s(d, m) {
          return be(d, m) === 0;
        }
        var l = t.reduce(function(p, m) {
          var g = p[0], w = p[1], p = o[m], T = e[m];
          return [g || p, g || !p ? Yt(w, p && p.multi ? function(v) {
            return v = Q(v, m), S(v) && v.some(function(b) {
              return s(T, b);
            });
          } : function(v) {
            return s(T, Q(v, m));
          }) : w];
        }, [null, null]), c = l[0], l = l[1];
        return c ? this.where(c.name).equals(e[c.keyPath]).filter(l) : r ? this.filter(l) : this.where(t).equals("");
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
        return new this.db.Collection(new this.db.WhereClause(this, S(e) ? "[".concat(e.join("+"), "]") : e));
      }, Ce.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, Ce.prototype.mapToClass = function(e) {
        var t, r = this.db, o = this.name;
        function s() {
          return t !== null && t.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof Ci && (function(m, g) {
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
      }, Ce.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          I(this, e);
        });
      }, Ce.prototype.add = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "add", keys: t != null ? [t] : null, values: [l] });
        }).then(function(d) {
          return d.numFailures ? G.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            z(e, c, d);
          } catch {
          }
          return d;
        });
      }, Ce.prototype.update = function(e, t) {
        return typeof e != "object" || S(e) ? this.where(":id").equals(e).modify(t) : (e = Q(e, this.schema.primKey.keyPath), e === void 0 ? Ue(new K.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(t));
      }, Ce.prototype.put = function(e, t) {
        var r = this, o = this.schema.primKey, s = o.auto, c = o.keyPath, l = e;
        return c && s && (l = Hn(c)(e)), this._trans("readwrite", function(d) {
          return r.core.mutate({ trans: d, type: "put", values: [l], keys: t != null ? [t] : null });
        }).then(function(d) {
          return d.numFailures ? G.reject(d.failures[0]) : d.lastResult;
        }).then(function(d) {
          if (c) try {
            z(e, c, d);
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
            return o.numFailures ? G.reject(o.failures[0]) : void 0;
          });
        });
      }, Ce.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(t) {
          return e.core.mutate({ trans: t, type: "deleteRange", range: Pi }).then(function(r) {
            return Wn(e, null, r);
          });
        }).then(function(t) {
          return t.numFailures ? G.reject(t.failures[0]) : void 0;
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
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: l, type: "add", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkAdd(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkPut = function(e, t, r) {
        var o = this, s = Array.isArray(t) ? t : void 0, c = (r = r || (s ? void 0 : t)) ? r.allKeys : void 0;
        return this._trans("readwrite", function(l) {
          var g = o.schema.primKey, d = g.auto, g = g.keyPath;
          if (g && s) throw new K.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new K.InvalidArgument("Arguments objects and keys must have the same length");
          var m = e.length, g = g && d ? e.map(Hn(g)) : e;
          return o.core.mutate({ trans: l, type: "put", keys: s, values: g, wantResults: c }).then(function(b) {
            var p = b.numFailures, T = b.results, v = b.lastResult, b = b.failures;
            if (p === 0) return c ? T : v;
            throw new wt("".concat(o.name, ".bulkPut(): ").concat(p, " of ").concat(m, " operations failed"), b);
          });
        });
      }, Ce.prototype.bulkUpdate = function(e) {
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
                for (var x = 0, O = Object.keys(b); x < O.length; x++) {
                  var C = O[x], N = b[C];
                  if (C === t.schema.primKey.keyPath) {
                    if (be(N, v) !== 0) throw new K.Constraint("Cannot update primary key in bulkUpdate()");
                  } else z(E, C, N);
                }
                c.push(T), m.push(v), g.push(E);
              }
            });
            var w = m.length;
            return r.mutate({ trans: l, type: "put", keys: m, values: g, updates: { keys: o, changeSpecs: s } }).then(function(p) {
              var T = p.numFailures, v = p.failures;
              if (T === 0) return w;
              for (var b = 0, E = Object.keys(v); b < E.length; b++) {
                var x, O = E[b], C = c[Number(O)];
                C != null && (x = v[O], delete v[O], v[C] = x);
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
        }).then(function(l) {
          var s = l.numFailures, c = l.lastResult, l = l.failures;
          if (s === 0) return c;
          throw new wt("".concat(t.name, ".bulkDelete(): ").concat(s, " of ").concat(r, " operations failed"), l);
        });
      }, Ce);
      function Ce() {
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
            d = d || ye;
            var w = { subscribers: [], fire: m = m || k, subscribe: function(p) {
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
            if (S(T)) c(p, g[p][0], g[p][1]);
            else {
              if (T !== "asap") throw new K.InvalidArgument("Invalid event config");
              var v = c(p, j, function() {
                for (var b = arguments.length, E = new Array(b); b--; ) E[b] = arguments[b];
                v.subscribers.forEach(function(x) {
                  ge(function() {
                    x.apply(null, E);
                  });
                });
              });
            }
          });
        }
      }
      function gn(e, t) {
        return fe(t).from({ prototype: e }), t;
      }
      function ln(e, t) {
        return !(e.filter || e.algorithm || e.or) && (t ? e.justLimit : !e.replayFilter);
      }
      function Cr(e, t) {
        e.filter = Yt(e.filter, t);
      }
      function Nr(e, t, r) {
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
      function Ri(e, t, r) {
        var o = Gn(e, t.schema);
        return t.openCursor({ trans: r, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: o, range: e.range } });
      }
      function Yn(e, t, r, o) {
        var s = e.replayFilter ? Yt(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var c = {}, l = function(d, m, g) {
            var w, p;
            s && !s(m, g, function(T) {
              return m.stop(T);
            }, function(T) {
              return m.fail(T);
            }) || ((p = "" + (w = m.primaryKey)) == "[object ArrayBuffer]" && (p = "" + new Uint8Array(w)), R(c, p) || (c[p] = !0, t(d, m, g)));
          };
          return Promise.all([e.or._iterate(l, r), Ki(Ri(e, o, r), e.algorithm, l, !e.keysOnly && e.valueMapper)]);
        }
        return Ki(Ri(e, o, r), Yt(e.algorithm, s), t, !e.keysOnly && e.valueMapper);
      }
      function Ki(e, t, r, o) {
        var s = je(o ? function(c, l, d) {
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
              c.stop(d), l = k;
            }, function(d) {
              c.fail(d), l = k;
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
          if (S(r)) return f(f([], S(e) ? e : [], !0), r).sort();
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
          if (S(o)) return S(e) ? e.filter(function(s) {
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
      var os = (Se.prototype._read = function(e, t) {
        var r = this._ctx;
        return r.error ? r.table._trans(null, Ue.bind(null, r.error)) : r.table._trans("readonly", e).then(t);
      }, Se.prototype._write = function(e) {
        var t = this._ctx;
        return t.error ? t.table._trans(null, Ue.bind(null, t.error)) : t.table._trans("readwrite", e, "locked");
      }, Se.prototype._addAlgorithm = function(e) {
        var t = this._ctx;
        t.algorithm = Yt(t.algorithm, e);
      }, Se.prototype._iterate = function(e, t) {
        return Yn(this._ctx, e, t, this._ctx.table.core);
      }, Se.prototype.clone = function(e) {
        var t = Object.create(this.constructor.prototype), r = Object.create(this._ctx);
        return e && I(r, e), t._ctx = r, t;
      }, Se.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Se.prototype.each = function(e) {
        var t = this._ctx;
        return this._read(function(r) {
          return Yn(t, e, r, t.table.core);
        });
      }, Se.prototype.count = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx, s = o.table.core;
          if (ln(o, !0)) return s.count({ trans: r, query: { index: Gn(o, s.schema), range: o.range } }).then(function(l) {
            return Math.min(l, o.limit);
          });
          var c = 0;
          return Yn(o, function() {
            return ++c, !1;
          }, r, s).then(function() {
            return c;
          });
        }).then(e);
      }, Se.prototype.sortBy = function(e, t) {
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
      }, Se.prototype.toArray = function(e) {
        var t = this;
        return this._read(function(r) {
          var o = t._ctx;
          if (o.dir === "next" && ln(o, !0) && 0 < o.limit) {
            var s = o.valueMapper, c = Gn(o, o.table.core.schema);
            return o.table.core.query({ trans: r, limit: o.limit, values: !0, query: { index: c, range: o.range } }).then(function(d) {
              return d = d.result, s ? d.map(s) : d;
            });
          }
          var l = [];
          return Yn(o, function(d) {
            return l.push(d);
          }, r, o.table.core).then(function() {
            return l;
          });
        }, e);
      }, Se.prototype.offset = function(e) {
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
      }, Se.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Nr(this._ctx, function() {
          var t = e;
          return function(r, o, s) {
            return --t <= 0 && o(s), 0 <= t;
          };
        }, !0), this;
      }, Se.prototype.until = function(e, t) {
        return Cr(this._ctx, function(r, o, s) {
          return !e(r.value) || (o(s), t);
        }), this;
      }, Se.prototype.first = function(e) {
        return this.limit(1).toArray(function(t) {
          return t[0];
        }).then(e);
      }, Se.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Se.prototype.filter = function(e) {
        var t;
        return Cr(this._ctx, function(r) {
          return e(r.value);
        }), (t = this._ctx).isMatch = Yt(t.isMatch, e), this;
      }, Se.prototype.and = function(e) {
        return this.filter(e);
      }, Se.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Se.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Se.prototype.desc = function() {
        return this.reverse();
      }, Se.prototype.eachKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.key, o);
        });
      }, Se.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Se.prototype.eachPrimaryKey = function(e) {
        var t = this._ctx;
        return t.keysOnly = !t.isMatch, this.each(function(r, o) {
          e(o.primaryKey, o);
        });
      }, Se.prototype.keys = function(e) {
        var t = this._ctx;
        t.keysOnly = !t.isMatch;
        var r = [];
        return this.each(function(o, s) {
          r.push(s.key);
        }).then(function() {
          return r;
        }).then(e);
      }, Se.prototype.primaryKeys = function(e) {
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
      }, Se.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Se.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(t) {
          return t[0];
        }).then(e);
      }, Se.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Se.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var t = {};
        return Cr(this._ctx, function(s) {
          var o = s.primaryKey.toString(), s = R(t, o);
          return t[o] = !0, !s;
        }), this;
      }, Se.prototype.modify = function(e) {
        var t = this, r = this._ctx;
        return this._write(function(o) {
          var s, c, l;
          l = typeof e == "function" ? e : (s = y(e), c = s.length, function(O) {
            for (var C = !1, N = 0; N < c; ++N) {
              var D = s[N], B = e[D], V = Q(O, D);
              B instanceof bn ? (z(O, D, B.execute(V)), C = !0) : V !== B && (z(O, D, B), C = !0);
            }
            return C;
          });
          var d = r.table.core, p = d.schema.primaryKey, m = p.outbound, g = p.extractKey, w = 200, p = t.db._options.modifyChunkSize;
          p && (w = typeof p == "object" ? p[d.name] || p["*"] || 200 : p);
          function T(O, D) {
            var N = D.failures, D = D.numFailures;
            b += O - D;
            for (var B = 0, V = y(N); B < V.length; B++) {
              var M = V[B];
              v.push(N[M]);
            }
          }
          var v = [], b = 0, E = [], x = e === Fi;
          return t.clone().primaryKeys().then(function(O) {
            function C(D) {
              var B = Math.min(w, O.length - D), V = O.slice(D, D + B);
              return (x ? Promise.resolve([]) : d.getMany({ trans: o, keys: V, cache: "immutable" })).then(function(M) {
                var U = [], W = [], $ = m ? [] : null, Y = x ? V : [];
                if (!x) for (var me = 0; me < B; ++me) {
                  var we = M[me], de = { value: Ee(we), primKey: O[D + me] };
                  l.call(de, de.value, de) !== !1 && (de.value == null ? Y.push(O[D + me]) : m || be(g(we), g(de.value)) === 0 ? (W.push(de.value), m && $.push(O[D + me])) : (Y.push(O[D + me]), U.push(de.value)));
                }
                return Promise.resolve(0 < U.length && d.mutate({ trans: o, type: "add", values: U }).then(function(Me) {
                  for (var le in Me.failures) Y.splice(parseInt(le), 1);
                  T(U.length, Me);
                })).then(function() {
                  return (0 < W.length || N && typeof e == "object") && d.mutate({ trans: o, type: "put", keys: $, values: W, criteria: N, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < D }).then(function(Me) {
                    return T(W.length, Me);
                  });
                }).then(function() {
                  return (0 < Y.length || N && x) && d.mutate({ trans: o, type: "delete", keys: Y, criteria: N, isAdditionalChunk: 0 < D }).then(function(Me) {
                    return Wn(r.table, Y, Me);
                  }).then(function(Me) {
                    return T(Y.length, Me);
                  });
                }).then(function() {
                  return O.length > D + B && C(D + w);
                });
              });
            }
            var N = ln(r) && r.limit === 1 / 0 && (typeof e != "function" || x) && { index: r.index, range: r.range };
            return C(0).then(function() {
              if (0 < v.length) throw new tn("Error modifying one or more objects", v, b, E);
              return O.length;
            });
          });
        });
      }, Se.prototype.delete = function() {
        var e = this._ctx, t = e.range;
        return !ln(e) || e.table.schema.yProps || !e.isPrimKey && t.type !== 3 ? this.modify(Fi) : this._write(function(r) {
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
      }, Se);
      function Se() {
      }
      var Fi = function(e, t) {
        return t.value = null;
      };
      function ss(e, t) {
        return e < t ? -1 : e === t ? 0 : 1;
      }
      function as(e, t) {
        return t < e ? -1 : e === t ? 0 : 1;
      }
      function ut(e, t, r) {
        return e = e instanceof Mi ? new e.Collection(e) : e, e._ctx.error = new (r || TypeError)(t), e;
      }
      function fn(e) {
        return new e.Collection(e, function() {
          return Bi("");
        }).limit(0);
      }
      function Xn(e, t, r, o) {
        var s, c, l, d, m, g, w, p = r.length;
        if (!r.every(function(b) {
          return typeof b == "string";
        })) return ut(e, ki);
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
          }).sort(function(x, O) {
            return l(x.lower, O.lower);
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
          var O = b.key;
          if (typeof O != "string") return !1;
          var C = c(O);
          if (t(C, m, v)) return !0;
          for (var N = null, D = v; D < p; ++D) {
            var B = function(V, M, U, W, $, Y) {
              for (var me = Math.min(V.length, W.length), we = -1, de = 0; de < me; ++de) {
                var Me = M[de];
                if (Me !== W[de]) return $(V[de], U[de]) < 0 ? V.substr(0, de) + U[de] + U.substr(de + 1) : $(V[de], W[de]) < 0 ? V.substr(0, de) + W[de] + U.substr(de + 1) : 0 <= we ? V.substr(0, we) + M[we] + U.substr(we + 1) : null;
                $(V[de], Me) < 0 && (we = de);
              }
              return me < W.length && Y === "next" ? V + U.substr(V.length) : me < V.length && Y === "prev" ? V.substr(0, U.length) : we < 0 ? null : V.substr(0, we) + W[we] + U.substr(we + 1);
            }(O, C, d[D], m[D], l, g);
            B === null && N === null ? v = D + 1 : (N === null || 0 < l(N, B)) && (N = B);
          }
          return E(N !== null ? function() {
            b.continue(N + w);
          } : x), !1;
        }), e;
      }
      function Kt(e, t, r, o) {
        return { type: 2, lower: e, upper: t, lowerOpen: r, upperOpen: o };
      }
      function Bi(e) {
        return { type: 1, lower: e, upper: e };
      }
      var Mi = (Object.defineProperty(Xe.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), Xe.prototype.between = function(e, t, r, o) {
        r = r !== !1, o = o === !0;
        try {
          return 0 < this._cmp(e, t) || this._cmp(e, t) === 0 && (r || o) && (!r || !o) ? fn(this) : new this.Collection(this, function() {
            return Kt(e, t, !r, !o);
          });
        } catch {
          return ut(this, Ot);
        }
      }, Xe.prototype.equals = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Bi(e);
        });
      }, Xe.prototype.above = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(e, void 0, !0);
        });
      }, Xe.prototype.aboveOrEqual = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(e, void 0, !1);
        });
      }, Xe.prototype.below = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(void 0, e, !1, !0);
        });
      }, Xe.prototype.belowOrEqual = function(e) {
        return e == null ? ut(this, Ot) : new this.Collection(this, function() {
          return Kt(void 0, e);
        });
      }, Xe.prototype.startsWith = function(e) {
        return typeof e != "string" ? ut(this, ki) : this.between(e, e + Gt, !0, !0);
      }, Xe.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : Xn(this, function(t, r) {
          return t.indexOf(r[0]) === 0;
        }, [e], Gt);
      }, Xe.prototype.equalsIgnoreCase = function(e) {
        return Xn(this, function(t, r) {
          return t === r[0];
        }, [e], "");
      }, Xe.prototype.anyOfIgnoreCase = function() {
        var e = at.apply(Je, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.indexOf(t) !== -1;
        }, e, "");
      }, Xe.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = at.apply(Je, arguments);
        return e.length === 0 ? fn(this) : Xn(this, function(t, r) {
          return r.some(function(o) {
            return t.indexOf(o) === 0;
          });
        }, e, Gt);
      }, Xe.prototype.anyOf = function() {
        var e = this, t = at.apply(Je, arguments), r = this._cmp;
        try {
          t.sort(r);
        } catch {
          return ut(this, Ot);
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
      }, Xe.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, Xe.prototype.noneOf = function() {
        var e = at.apply(Je, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return ut(this, Ot);
        }
        var t = e.reduce(function(r, o) {
          return r ? r.concat([[r[r.length - 1][1], o]]) : [[-1 / 0, o]];
        }, null);
        return t.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(t, { includeLowers: !1, includeUppers: !1 });
      }, Xe.prototype.inAnyRange = function(O, t) {
        var r = this, o = this._cmp, s = this._ascending, c = this._descending, l = this._min, d = this._max;
        if (O.length === 0) return fn(this);
        if (!O.every(function(C) {
          return C[0] !== void 0 && C[1] !== void 0 && s(C[0], C[1]) <= 0;
        })) return ut(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", K.InvalidArgument);
        var m = !t || t.includeLowers !== !1, g = t && t.includeUppers === !0, w, p = s;
        function T(C, N) {
          return p(C[0], N[0]);
        }
        try {
          (w = O.reduce(function(C, N) {
            for (var D = 0, B = C.length; D < B; ++D) {
              var V = C[D];
              if (o(N[0], V[1]) < 0 && 0 < o(N[1], V[0])) {
                V[0] = l(V[0], N[0]), V[1] = d(V[1], N[1]);
                break;
              }
            }
            return D === B && C.push(N), C;
          }, [])).sort(T);
        } catch {
          return ut(this, Ot);
        }
        var v = 0, b = g ? function(C) {
          return 0 < s(C, w[v][1]);
        } : function(C) {
          return 0 <= s(C, w[v][1]);
        }, E = m ? function(C) {
          return 0 < c(C, w[v][0]);
        } : function(C) {
          return 0 <= c(C, w[v][0]);
        }, x = b, O = new this.Collection(this, function() {
          return Kt(w[0][0], w[w.length - 1][1], !m, !g);
        });
        return O._ondirectionchange = function(C) {
          p = C === "next" ? (x = b, s) : (x = E, c), w.sort(T);
        }, O._addAlgorithm(function(C, N, D) {
          for (var B, V = C.key; x(V); ) if (++v === w.length) return N(D), !1;
          return !b(B = V) && !E(B) || (r._cmp(V, w[v][1]) === 0 || r._cmp(V, w[v][0]) === 0 || N(function() {
            p === s ? C.continue(w[v][0]) : C.continue(w[v][1]);
          }), !1);
        }), O;
      }, Xe.prototype.startsWithAnyOf = function() {
        var e = at.apply(Je, arguments);
        return e.every(function(t) {
          return typeof t == "string";
        }) ? e.length === 0 ? fn(this) : this.inAnyRange(e.map(function(t) {
          return [t, t + Gt];
        })) : ut(this, "startsWithAnyOf() only works with strings");
      }, Xe);
      function Xe() {
      }
      function xt(e) {
        return je(function(t) {
          return _n(t), e(t.target.error), !1;
        });
      }
      function _n(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var wn = "storagemutated", Ir = "x-storagemutated-1", jt = vn(null, wn), us = (Et.prototype._lock = function() {
        return pe(!Z.global), ++this._reculock, this._reculock !== 1 || Z.global || (Z.lockOwnerFor = this), this;
      }, Et.prototype._unlock = function() {
        if (pe(!Z.global), --this._reculock == 0) for (Z.global || (Z.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            Wt(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, Et.prototype._locked = function() {
        return this._reculock && Z.lockOwnerFor !== this;
      }, Et.prototype.create = function(e) {
        var t = this;
        if (!this.mode) return this;
        var r = this.db.idbdb, o = this.db._state.dbOpenError;
        if (pe(!this.idbtrans), !e && !r) switch (o && o.name) {
          case "DatabaseClosedError":
            throw new K.DatabaseClosed(o);
          case "MissingAPIError":
            throw new K.MissingAPI(o.message, o);
          default:
            throw new K.OpenFailed(o);
        }
        if (!this.active) throw new K.TransactionInactive();
        return pe(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || r).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = je(function(s) {
          _n(s), t._reject(e.error);
        }), e.onabort = je(function(s) {
          _n(s), t.active && t._reject(new K.Abort(e.error)), t.active = !1, t.on("abort").fire(s);
        }), e.oncomplete = je(function() {
          t.active = !1, t._resolve(), "mutatedParts" in e && jt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, Et.prototype._promise = function(e, t, r) {
        var o = this;
        if (e === "readwrite" && this.mode !== "readwrite") return Ue(new K.ReadOnly("Transaction is readonly"));
        if (!this.active) return Ue(new K.TransactionInactive());
        if (this._locked()) return new G(function(c, l) {
          o._blockedFuncs.push([function() {
            o._promise(e, t, r).then(c, l);
          }, Z]);
        });
        if (r) return It(function() {
          var c = new G(function(l, d) {
            o._lock();
            var m = t(l, d, o);
            m && m.then && m.then(l, d);
          });
          return c.finally(function() {
            return o._unlock();
          }), c._lib = !0, c;
        });
        var s = new G(function(c, l) {
          var d = t(c, l, o);
          d && d.then && d.then(c, l);
        });
        return s._lib = !0, s;
      }, Et.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, Et.prototype.waitFor = function(e) {
        var t, r = this._root(), o = G.resolve(e);
        r._waitingFor ? r._waitingFor = r._waitingFor.then(function() {
          return o;
        }) : (r._waitingFor = o, r._waitingQueue = [], t = r.idbtrans.objectStore(r.storeNames[0]), function c() {
          for (++r._spinCount; r._waitingQueue.length; ) r._waitingQueue.shift()();
          r._waitingFor && (t.get(-1 / 0).onsuccess = c);
        }());
        var s = r._waitingFor;
        return new G(function(c, l) {
          o.then(function(d) {
            return r._waitingQueue.push(je(c.bind(null, d)));
          }, function(d) {
            return r._waitingQueue.push(je(l.bind(null, d)));
          }).finally(function() {
            r._waitingFor === s && (r._waitingFor = null);
          });
        });
      }, Et.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new K.Abort()));
      }, Et.prototype.table = function(e) {
        var t = this._memoizedTables || (this._memoizedTables = {});
        if (R(t, e)) return t[e];
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
          return Q(r, t);
        } : function(r) {
          return Q(r, e);
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
            var x = E.trans, O = E.type, C = E.keys, N = E.values, D = E.range;
            return new Promise(function(B, V) {
              B = je(B);
              var M = x.objectStore(b), U = M.keyPath == null, W = O === "put" || O === "add";
              if (!W && O !== "delete" && O !== "deleteRange") throw new Error("Invalid operation type: " + O);
              var $, Y = (C || N || { length: 1 }).length;
              if (C && N && C.length !== N.length) throw new Error("Given keys array must have same length as given values array.");
              if (Y === 0) return B({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function me(it) {
                ++Me, _n(it);
              }
              var we = [], de = [], Me = 0;
              if (O === "deleteRange") {
                if (D.type === 4) return B({ numFailures: Me, failures: de, results: [], lastResult: void 0 });
                D.type === 3 ? we.push($ = M.clear()) : we.push($ = M.delete(o(D)));
              } else {
                var U = W ? U ? [N, C] : [N, null] : [C, null], le = U[0], et = U[1];
                if (W) for (var tt = 0; tt < Y; ++tt) we.push($ = et && et[tt] !== void 0 ? M[O](le[tt], et[tt]) : M[O](le[tt])), $.onerror = me;
                else for (tt = 0; tt < Y; ++tt) we.push($ = M[O](le[tt])), $.onerror = me;
              }
              function ar(it) {
                it = it.target.result, we.forEach(function(zt, Zr) {
                  return zt.error != null && (de[Zr] = zt.error);
                }), B({ numFailures: Me, failures: de, results: O === "delete" ? C : we.map(function(zt) {
                  return zt.result;
                }), lastResult: it });
              }
              $.onerror = function(it) {
                me(it), ar(it);
              }, $.onsuccess = ar;
            });
          }, getMany: function(E) {
            var x = E.trans, O = E.keys;
            return new Promise(function(C, N) {
              C = je(C);
              for (var D, B = x.objectStore(b), V = O.length, M = new Array(V), U = 0, W = 0, $ = function(we) {
                we = we.target, M[we._pos] = we.result, ++W === U && C(M);
              }, Y = xt(N), me = 0; me < V; ++me) O[me] != null && ((D = B.get(O[me]))._pos = me, D.onsuccess = $, D.onerror = Y, ++U);
              U === 0 && C(M);
            });
          }, get: function(E) {
            var x = E.trans, O = E.key;
            return new Promise(function(C, N) {
              C = je(C);
              var D = x.objectStore(b).get(O);
              D.onsuccess = function(B) {
                return C(B.target.result);
              }, D.onerror = xt(N);
            });
          }, query: (v = g, function(E) {
            return new Promise(function(x, O) {
              x = je(x);
              var C, N, D, U = E.trans, B = E.values, V = E.limit, $ = E.query, M = V === 1 / 0 ? void 0 : V, W = $.index, $ = $.range, U = U.objectStore(b), W = W.isPrimaryKey ? U : U.index(W.name), $ = o($);
              if (V === 0) return x({ result: [] });
              v ? ((M = B ? W.getAll($, M) : W.getAllKeys($, M)).onsuccess = function(Y) {
                return x({ result: Y.target.result });
              }, M.onerror = xt(O)) : (C = 0, N = !B && "openKeyCursor" in W ? W.openKeyCursor($) : W.openCursor($), D = [], N.onsuccess = function(Y) {
                var me = N.result;
                return me ? (D.push(B ? me.value : me.primaryKey), ++C === V ? x({ result: D }) : void me.continue()) : x({ result: D });
              }, N.onerror = xt(O));
            });
          }), openCursor: function(E) {
            var x = E.trans, O = E.values, C = E.query, N = E.reverse, D = E.unique;
            return new Promise(function(B, V) {
              B = je(B);
              var W = C.index, M = C.range, U = x.objectStore(b), U = W.isPrimaryKey ? U : U.index(W.name), W = N ? D ? "prevunique" : "prev" : D ? "nextunique" : "next", $ = !O && "openKeyCursor" in U ? U.openKeyCursor(o(M), W) : U.openCursor(o(M), W);
              $.onerror = xt(V), $.onsuccess = je(function(Y) {
                var me, we, de, Me, le = $.result;
                le ? (le.___id = ++cs, le.done = !1, me = le.continue.bind(le), we = (we = le.continuePrimaryKey) && we.bind(le), de = le.advance.bind(le), Me = function() {
                  throw new Error("Cursor not stopped");
                }, le.trans = x, le.stop = le.continue = le.continuePrimaryKey = le.advance = function() {
                  throw new Error("Cursor not started");
                }, le.fail = je(V), le.next = function() {
                  var et = this, tt = 1;
                  return this.start(function() {
                    return tt-- ? et.continue() : et.stop();
                  }).then(function() {
                    return et;
                  });
                }, le.start = function(et) {
                  function tt() {
                    if ($.result) try {
                      et();
                    } catch (it) {
                      le.fail(it);
                    }
                    else le.done = !0, le.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, le.stop();
                  }
                  var ar = new Promise(function(it, zt) {
                    it = je(it), $.onerror = xt(zt), le.fail = zt, le.stop = function(Zr) {
                      le.stop = le.continue = le.continuePrimaryKey = le.advance = Me, it(Zr);
                    };
                  });
                  return $.onsuccess = je(function(it) {
                    $.onsuccess = tt, tt();
                  }), le.continue = me, le.continuePrimaryKey = we, le.advance = de, tt(), ar;
                }, B(le)) : B(null);
              }, V);
            });
          }, count: function(E) {
            var x = E.query, O = E.trans, C = x.index, N = x.range;
            return new Promise(function(D, B) {
              var V = O.objectStore(b), M = C.isPrimaryKey ? V : V.index(C.name), V = o(N), M = V ? M.count(V) : M.count();
              M.onsuccess = je(function(U) {
                return D(U.target.result);
              }), M.onerror = xt(B);
            });
          } };
        }
        var c, l, d, w = (l = m, d = Ui((c = e).objectStoreNames), { schema: { name: c.name, tables: d.map(function(T) {
          return l.objectStore(T);
        }).map(function(T) {
          var v = T.keyPath, x = T.autoIncrement, b = S(v), E = {}, x = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: v == null, compound: b, keyPath: v, autoIncrement: x, unique: !0, extractKey: Kr(v) }, indexes: Ui(T.indexNames).map(function(O) {
            return T.index(O);
          }).map(function(D) {
            var C = D.name, N = D.unique, B = D.multiEntry, D = D.keyPath, B = { name: C, compound: S(D), keyPath: D, unique: N, multiEntry: B, extractKey: Kr(D) };
            return E[En(D)] = B;
          }), getIndexByKeyPath: function(O) {
            return E[En(O)];
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
      function Qn(e, o) {
        var r = o.db, o = fs(e._middlewares, r, e._deps, o);
        e.core = o.dbcore, e.tables.forEach(function(s) {
          var c = s.name;
          e.core.schema.tables.some(function(l) {
            return l.name === c;
          }) && (s.core = e.core.table(c), e[c] instanceof e.Table && (e[c].core = s.core));
        });
      }
      function zn(e, t, r, o) {
        r.forEach(function(s) {
          var c = o[s];
          t.forEach(function(l) {
            var d = function m(g, w) {
              return Be(g, w) || (g = L(g)) && m(g, w);
            }(l, s);
            (!d || "value" in d && d.value === void 0) && (l === e.Transaction.prototype || l instanceof e.Transaction ? te(l, s, { get: function() {
              return this.table(s);
            }, set: function(m) {
              ie(this, s, { value: m, writable: !0, configurable: !0, enumerable: !0 });
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
        var l = c._reject.bind(c), d = Z.transless || Z;
        It(function() {
          return Z.trans = c, Z.transless = d, t !== 0 ? (Qn(e, r), g = t, ((m = c).storeNames.includes("$meta") ? m.table("$meta").get("version").then(function(w) {
            return w ?? g;
          }) : G.resolve(g)).then(function(w) {
            return T = w, v = c, b = r, E = [], w = (p = e)._versions, x = p._dbSchema = Zn(0, p.idbdb, b), (w = w.filter(function(O) {
              return O._cfg.version >= T;
            })).length !== 0 ? (w.forEach(function(O) {
              E.push(function() {
                var C = x, N = O._cfg.dbschema;
                er(p, C, b), er(p, N, b), x = p._dbSchema = N;
                var D = Fr(C, N);
                D.add.forEach(function(W) {
                  Br(b, W[0], W[1].primKey, W[1].indexes);
                }), D.change.forEach(function(W) {
                  if (W.recreate) throw new K.Upgrade("Not yet support for changing primary key");
                  var $ = b.objectStore(W.name);
                  W.add.forEach(function(Y) {
                    return Jn($, Y);
                  }), W.change.forEach(function(Y) {
                    $.deleteIndex(Y.name), Jn($, Y);
                  }), W.del.forEach(function(Y) {
                    return $.deleteIndex(Y);
                  });
                });
                var B = O._cfg.contentUpgrade;
                if (B && O._cfg.version > T) {
                  Qn(p, b), v._memoizedTables = {};
                  var V = J(N);
                  D.del.forEach(function(W) {
                    V[W] = C[W];
                  }), jr(p, [p.Transaction.prototype]), zn(p, [p.Transaction.prototype], y(V), V), v.schema = V;
                  var M, U = yt(B);
                  return U && un(), D = G.follow(function() {
                    var W;
                    (M = B(v)) && U && (W = Dt.bind(null, null), M.then(W, W));
                  }), M && typeof M.then == "function" ? G.resolve(M) : D.then(function() {
                    return M;
                  });
                }
              }), E.push(function(C) {
                var N, D, B = O._cfg.dbschema;
                N = B, D = C, [].slice.call(D.db.objectStoreNames).forEach(function(V) {
                  return N[V] == null && D.db.deleteObjectStore(V);
                }), jr(p, [p.Transaction.prototype]), zn(p, [p.Transaction.prototype], p._storeNames, p._dbSchema), v.schema = p._dbSchema;
              }), E.push(function(C) {
                p.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(p.idbdb.version / 10) === O._cfg.version ? (p.idbdb.deleteObjectStore("$meta"), delete p._dbSchema.$meta, p._storeNames = p._storeNames.filter(function(N) {
                  return N !== "$meta";
                })) : C.objectStore("$meta").put(O._cfg.version, "version"));
              });
            }), function O() {
              return E.length ? G.resolve(E.shift()(v.idbtrans)).then(O) : G.resolve();
            }().then(function() {
              Li(x, b);
            })) : G.resolve();
            var p, T, v, b, E, x;
          }).catch(l)) : (y(s).forEach(function(w) {
            Br(r, w, s[w].primKey, s[w].indexes);
          }), Qn(e, r), void G.follow(function() {
            return e.on.populate.fire(c);
          }).catch(l));
          var m, g;
        });
      }
      function ps(e, t) {
        Li(e._dbSchema, t), t.db.version % 10 != 0 || t.objectStoreNames.contains("$meta") || t.db.createObjectStore("$meta").add(Math.ceil(t.db.version / 10 - 1), "version");
        var r = Zn(0, e.idbdb, t);
        er(e, e._dbSchema, t);
        for (var o = 0, s = Fr(r, e._dbSchema).change; o < s.length; o++) {
          var c = function(l) {
            if (l.change.length || l.recreate) return console.warn("Unable to patch indexes of table ".concat(l.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var d = t.objectStore(l.name);
            l.add.forEach(function(m) {
              re && console.debug("Dexie upgrade patch: Creating missing index ".concat(l.name, ".").concat(m.src)), Jn(d, m);
            });
          }(s[o]);
          if (typeof c == "object") return c.value;
        }
      }
      function Fr(e, t) {
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
      function Br(e, t, r, o) {
        var s = e.db.createObjectStore(t, r.keyPath ? { keyPath: r.keyPath, autoIncrement: r.auto } : { autoIncrement: r.auto });
        return o.forEach(function(c) {
          return Jn(s, c);
        }), s;
      }
      function Li(e, t) {
        y(e).forEach(function(r) {
          t.db.objectStoreNames.contains(r) || (re && console.debug("Dexie: Creating missing table", r), Br(t, r, e[r].primKey, e[r].indexes));
        });
      }
      function Jn(e, t) {
        e.createIndex(t.name, t.keyPath, { unique: t.unique, multiEntry: t.multi });
      }
      function Zn(e, t, r) {
        var o = {};
        return Ie(t.objectStoreNames, 0).forEach(function(s) {
          for (var c = r.objectStore(s), l = Dr(qi(g = c.keyPath), g || "", !0, !1, !!c.autoIncrement, g && typeof g != "string", !0), d = [], m = 0; m < c.indexNames.length; ++m) {
            var w = c.index(c.indexNames[m]), g = w.keyPath, w = Dr(w.name, g, !!w.unique, !!w.multiEntry, !1, g && typeof g != "string", !1);
            d.push(w);
          }
          o[s] = Rr(s, l, d);
        }), o;
      }
      function er(e, t, r) {
        for (var o = r.db.objectStoreNames, s = 0; s < o.length; ++s) {
          var c = o[s], l = r.objectStore(c);
          e._hasGetAll = "getAll" in l;
          for (var d = 0; d < l.indexNames.length; ++d) {
            var m = l.indexNames[d], g = l.index(m).keyPath, w = typeof g == "string" ? g : "[" + Ie(g).join("+") + "]";
            !t[c] || (g = t[c].idxByName[w]) && (g.name = m, delete t[c].idxByName[w], t[c].idxByName[m] = g);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && h.WorkerGlobalScope && h instanceof h.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function Vi(e) {
        return e.split(",").map(function(t, r) {
          var c = t.split(":"), o = (s = c[1]) === null || s === void 0 ? void 0 : s.trim(), s = (t = c[0].trim()).replace(/([&*]|\+\+)/g, ""), c = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Dr(s, c || null, /\&/.test(t), /\*/.test(t), /\+\+/.test(t), S(c), r === 0, o);
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
        }), t._dbSchema = s, jr(t, [t._allTables, t, t.Transaction.prototype]), zn(t, [t._allTables, t, t.Transaction.prototype, this._cfg.tables], y(s), s), t._storeNames = y(s), this;
      }, dn.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = ce(this._cfg.contentUpgrade || k, e), this;
      }, dn);
      function dn() {
      }
      function Mr(e, t) {
        var r = e._dbNamesDB;
        return r || (r = e._dbNamesDB = new At($n, { addons: [], indexedDB: e, IDBKeyRange: t })).version(1).stores({ dbnames: "name" }), r.table("dbnames");
      }
      function qr(e) {
        return e && typeof e.databases == "function";
      }
      function Ur(e) {
        return It(function() {
          return Z.letThrough = !0, e();
        });
      }
      function Lr(e) {
        return !("from" in e);
      }
      var Ze = function(e, t) {
        if (!this) {
          var r = new Ze();
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
          be(t, e.from) < 0 && (e.from = t, e.l = null, e.d = o ? o.d + 1 : 1), 0 < be(r, e.to) && (e.to = r, e.r = null, e.d = e.l ? e.l.d + 1 : 1), r = !e.r, s && !e.l && Sn(e, s), o && r && Sn(e, o);
        }
      }
      function Sn(e, t) {
        Lr(t) || function r(o, m) {
          var c = m.from, l = m.to, d = m.l, m = m.r;
          Tn(o, c, l), d && r(o, d), m && r(o, m);
        }(e, t);
      }
      function $i(e, t) {
        var r = tr(t), o = r.next();
        if (o.done) return !1;
        for (var s = o.value, c = tr(e), l = c.next(s.from), d = l.value; !o.done && !l.done; ) {
          if (be(d.from, s.to) <= 0 && 0 <= be(d.to, s.from)) return !0;
          be(s.from, d.from) < 0 ? s = (o = r.next(d.from)).value : d = (l = c.next(s.from)).value;
        }
        return !1;
      }
      function tr(e) {
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
      function nr(e, t) {
        return y(t).forEach(function(r) {
          e[r] ? Sn(e[r], t[r]) : e[r] = function o(s) {
            var c, l, d = {};
            for (c in s) R(s, c) && (l = s[c], d[c] = !l || typeof l != "object" || Te.has(l.constructor) ? l : o(l));
            return d;
          }(t[r]);
        }), e;
      }
      function Vr(e, t) {
        return e.all || t.all || Object.keys(e).some(function(r) {
          return t[r] && $i(t[r], e[r]);
        });
      }
      H(Ze.prototype, ((pt = { add: function(e) {
        return Sn(this, e), this;
      }, addKey: function(e) {
        return Tn(this, e, e), this;
      }, addKeys: function(e) {
        var t = this;
        return e.forEach(function(r) {
          return Tn(t, r, r);
        }), this;
      }, hasKey: function(e) {
        var t = tr(this).next(e).value;
        return t && be(t.from, e) <= 0 && 0 <= be(t.to, e);
      } })[Ke] = function() {
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
          return new G(function(T, v) {
            if (l(), !r) throw new K.MissingAPI();
            var b = e.name, E = t.autoSchema || !s ? r.open(b) : r.open(b, s);
            if (!E) throw new K.MissingAPI();
            E.onerror = xt(v), E.onblocked = je(e._fireOnBlocked), E.onupgradeneeded = je(function(x) {
              var O;
              w = E.transaction, t.autoSchema && !e._options.allowEmptyDB ? (E.onerror = _n, w.abort(), E.result.close(), (O = r.deleteDatabase(b)).onsuccess = O.onerror = je(function() {
                v(new K.NoSuchDatabase("Database ".concat(b, " doesnt exist")));
              })) : (w.onerror = xt(v), x = x.oldVersion > Math.pow(2, 62) ? 0 : x.oldVersion, p = x < 1, e.idbdb = E.result, c && ps(e, w), hs(e, x / 10, w, v));
            }, v), E.onsuccess = je(function() {
              w = null;
              var x, O, C, N, D, B = e.idbdb = E.result, V = Ie(B.objectStoreNames);
              if (0 < V.length) try {
                var M = B.transaction((N = V).length === 1 ? N[0] : N, "readonly");
                if (t.autoSchema) O = B, C = M, (x = e).verno = O.version / 10, C = x._dbSchema = Zn(0, O, C), x._storeNames = Ie(O.objectStoreNames, 0), zn(x, [x._allTables], y(C), C);
                else if (er(e, e._dbSchema, M), ((D = Fr(Zn(0, (D = e).idbdb, M), D._dbSchema)).add.length || D.change.some(function(U) {
                  return U.add.length || U.change.length;
                })) && !c) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), B.close(), s = B.version + 1, c = !0, T(d());
                Qn(e, M);
              } catch {
              }
              cn.push(e), B.onversionchange = je(function(U) {
                t.vcFired = !0, e.on("versionchange").fire(U);
              }), B.onclose = je(function(U) {
                e.on("close").fire(U);
              }), p && (D = e._deps, M = b, B = D.indexedDB, D = D.IDBKeyRange, qr(B) || M === $n || Mr(B, D).put({ name: M }).catch(k)), T();
            }, v);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < t.PR1398_maxLoop) return t.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), d();
                break;
              case "VersionError":
                if (0 < s) return s = 0, d();
            }
            return G.reject(T);
          });
        }
        var m, g = t.dbReadyResolve, w = null, p = !1;
        return G.race([o, (typeof navigator > "u" ? G.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function v() {
            return indexedDB.databases().finally(T);
          }
          m = setInterval(v, 100), v();
        }).finally(function() {
          return clearInterval(m);
        }) : Promise.resolve()).then(d)]).then(function() {
          return l(), t.onReadyBeingFired = [], G.resolve(Ur(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < t.onReadyBeingFired.length) {
              var v = t.onReadyBeingFired.reduce(ce, k);
              return t.onReadyBeingFired = [], G.resolve(Ur(function() {
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
              b.name && (T["idb://".concat(e.name, "/").concat(v.name, "/").concat(b.name)] = new Ze(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(v.name, "/")] = T["idb://".concat(e.name, "/").concat(v.name, "/:dels")] = new Ze(-1 / 0, [[[]]]);
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
            return d.done ? m : m && typeof m.then == "function" ? m.then(r, o) : S(m) ? Promise.all(m).then(r, o) : r(m);
          };
        }
        return s(t)();
      }
      function ir(e, t, r) {
        for (var o = S(e) ? e.slice() : [e], s = 0; s < r; ++s) o.push(t);
        return o;
      }
      var vs = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema, s = {}, c = [];
          function l(p, T, v) {
            var b = En(p), E = s[b] = s[b] || [], x = p == null ? 0 : typeof p == "string" ? 1 : p.length, O = 0 < T, O = u(u({}, v), { name: O ? "".concat(b, "(virtual-from:").concat(v.name, ")") : v.name, lowLevelIndex: v, isVirtual: O, keyTail: T, keyLength: x, extractKey: Kr(p), unique: !O && v.unique });
            return E.push(O), O.isPrimaryKey || c.push(O), 1 < x && l(x === 2 ? p[0] : p.slice(0, x - 1), T + 1, v), E.sort(function(C, N) {
              return C.keyTail - N.keyTail;
            }), O;
          }
          t = l(o.primaryKey.keyPath, 0, o.primaryKey), s[":id"] = [t];
          for (var d = 0, m = o.indexes; d < m.length; d++) {
            var g = m[d];
            l(g.keyPath, 0, g);
          }
          function w(p) {
            var T, v = p.query.index;
            return v.isVirtual ? u(u({}, p), { query: { index: v.lowLevelIndex, range: (T = p.query.range, v = v.keyTail, { type: T.type === 1 ? 2 : T.type, lower: ir(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, v), lowerOpen: !0, upper: ir(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, v), upperOpen: !0 }) } }) : p;
          }
          return u(u({}, r), { schema: u(u({}, o), { primaryKey: t, indexes: c, getIndexByKeyPath: function(p) {
            return (p = s[En(p)]) && p[0];
          } }), count: function(p) {
            return r.count(w(p));
          }, query: function(p) {
            return r.query(w(p));
          }, openCursor: function(p) {
            var T = p.query.index, v = T.keyTail, b = T.isVirtual, E = T.keyLength;
            return b ? r.openCursor(w(p)).then(function(O) {
              return O && x(O);
            }) : r.openCursor(p);
            function x(O) {
              return Object.create(O, { continue: { value: function(C) {
                C != null ? O.continue(ir(C, p.reverse ? e.MAX_KEY : e.MIN_KEY, v)) : p.unique ? O.continue(O.key.slice(0, E).concat(p.reverse ? e.MIN_KEY : e.MAX_KEY, v)) : O.continue();
              } }, continuePrimaryKey: { value: function(C, N) {
                O.continuePrimaryKey(ir(C, e.MAX_KEY, v), N);
              } }, primaryKey: { get: function() {
                return O.primaryKey;
              } }, key: { get: function() {
                var C = O.key;
                return E === 1 ? C[0] : C.slice(0, E);
              } }, value: { get: function() {
                return O.value;
              } } });
            }
          } });
        } });
      } };
      function Yr(e, t, r, o) {
        return r = r || {}, o = o || "", y(e).forEach(function(s) {
          var c, l, d;
          R(t, s) ? (c = e[s], l = t[s], typeof c == "object" && typeof l == "object" && c && l ? (d = He(c)) !== He(l) ? r[o + s] = t[s] : d === "Object" ? Yr(c, l, r, o + s + ".") : c !== l && (r[o + s] = t[s]) : c !== l && (r[o + s] = t[s])) : r[o + s] = void 0;
        }), y(t).forEach(function(s) {
          R(e, s) || (r[o + s] = t[s]);
        }), r;
      }
      function Xr(e, t) {
        return t.type === "delete" ? t.keys : t.keys || t.values.map(e.extractKey);
      }
      var gs = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return u(u({}, e), { table: function(t) {
          var r = e.table(t), o = r.schema.primaryKey;
          return u(u({}, r), { mutate: function(s) {
            var c = Z.trans, l = c.table(t).hook, d = l.deleting, m = l.creating, g = l.updating;
            switch (s.type) {
              case "add":
                if (m.fire === k) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "put":
                if (m.fire === k && g.fire === k) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "delete":
                if (d.fire === k) break;
                return c._promise("readwrite", function() {
                  return w(s);
                }, !0);
              case "deleteRange":
                if (d.fire === k) break;
                return c._promise("readwrite", function() {
                  return function p(T, v, b) {
                    return r.query({ trans: T, values: !1, query: { index: o, range: v }, limit: b }).then(function(E) {
                      var x = E.result;
                      return w({ type: "delete", keys: x, trans: T }).then(function(O) {
                        return 0 < O.numFailures ? Promise.reject(O.failures[0]) : x.length < b ? { failures: [], numFailures: 0, lastResult: void 0 } : p(T, u(u({}, v), { lower: x[x.length - 1], lowerOpen: !0 }), b);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return r.mutate(s);
            function w(p) {
              var T, v, b, E = Z.trans, x = p.keys || Xr(o, p);
              if (!x) throw new Error("Keys missing");
              return (p = p.type === "add" || p.type === "put" ? u(u({}, p), { keys: x }) : u({}, p)).type !== "delete" && (p.values = f([], p.values)), p.keys && (p.keys = f([], p.keys)), T = r, b = x, ((v = p).type === "add" ? Promise.resolve([]) : T.getMany({ trans: v.trans, keys: b, cache: "immutable" })).then(function(O) {
                var C = x.map(function(N, D) {
                  var B, V, M, U = O[D], W = { onerror: null, onsuccess: null };
                  return p.type === "delete" ? d.fire.call(W, N, U, E) : p.type === "add" || U === void 0 ? (B = m.fire.call(W, N, p.values[D], E), N == null && B != null && (p.keys[D] = N = B, o.outbound || z(p.values[D], o.keyPath, N))) : (B = Yr(U, p.values[D]), (V = g.fire.call(W, B, N, U, E)) && (M = p.values[D], Object.keys(V).forEach(function($) {
                    R(M, $) ? M[$] = V[$] : z(M, $, V[$]);
                  }))), W;
                });
                return r.mutate(p).then(function(N) {
                  for (var D = N.failures, B = N.results, V = N.numFailures, N = N.lastResult, M = 0; M < x.length; ++M) {
                    var U = (B || x)[M], W = C[M];
                    U == null ? W.onerror && W.onerror(D[M]) : W.onsuccess && W.onsuccess(p.type === "put" && O[M] ? p.values[M] : U);
                  }
                  return { failures: D, results: B, numFailures: V, lastResult: N };
                }).catch(function(N) {
                  return C.forEach(function(D) {
                    return D.onerror && D.onerror(N);
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
          for (var o = [], s = 0, c = 0; s < t.keys.length && c < e.length; ++s) be(t.keys[s], e[c]) === 0 && (o.push(r ? Ee(t.values[s]) : t.values[s]), ++c);
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
            return s ? G.resolve(s) : r.getMany(o).then(function(c) {
              return o.trans._cache = { keys: o.keys, values: o.cache === "clone" ? Ee(c) : c }, c;
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
        var t = e.schema.name, r = new Ze(e.MIN_KEY, e.MAX_KEY);
        return u(u({}, e), { transaction: function(o, s, c) {
          if (Z.subscr && s !== "readonly") throw new K.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(Z.querier));
          return e.transaction(o, s, c);
        }, table: function(o) {
          var s = e.table(o), c = s.schema, l = c.primaryKey, p = c.indexes, d = l.extractKey, m = l.outbound, g = l.autoIncrement && p.filter(function(v) {
            return v.compound && v.keyPath.includes(l.keyPath);
          }), w = u(u({}, s), { mutate: function(v) {
            function b($) {
              return $ = "idb://".concat(t, "/").concat(o, "/").concat($), N[$] || (N[$] = new Ze());
            }
            var E, x, O, C = v.trans, N = v.mutatedParts || (v.mutatedParts = {}), D = b(""), B = b(":dels"), V = v.type, W = v.type === "deleteRange" ? [v.range] : v.type === "delete" ? [v.keys] : v.values.length < 50 ? [Xr(l, v).filter(function($) {
              return $;
            }), v.values] : [], M = W[0], U = W[1], W = v.trans._cache;
            return S(M) ? (D.addKeys(M), (W = V === "delete" || M.length === U.length ? Yi(M, W) : null) || B.addKeys(M), (W || U) && (E = b, x = W, O = U, c.indexes.forEach(function($) {
              var Y = E($.name || "");
              function me(de) {
                return de != null ? $.extractKey(de) : null;
              }
              function we(de) {
                return $.multiEntry && S(de) ? de.forEach(function(Me) {
                  return Y.addKey(Me);
                }) : Y.addKey(de);
              }
              (x || O).forEach(function(de, et) {
                var le = x && me(x[et]), et = O && me(O[et]);
                be(le, et) !== 0 && (le != null && we(le), et != null && we(et));
              });
            }))) : M ? (U = { from: (U = M.lower) !== null && U !== void 0 ? U : e.MIN_KEY, to: (U = M.upper) !== null && U !== void 0 ? U : e.MAX_KEY }, B.add(U), D.add(U)) : (D.add(r), B.add(r), c.indexes.forEach(function($) {
              return b($.name).add(r);
            })), s.mutate(v).then(function($) {
              return !M || v.type !== "add" && v.type !== "put" || (D.addKeys($.results), g && g.forEach(function(Y) {
                for (var me = v.values.map(function(le) {
                  return Y.extractKey(le);
                }), we = Y.keyPath.findIndex(function(le) {
                  return le === l.keyPath;
                }), de = 0, Me = $.results.length; de < Me; ++de) me[de][we] = $.results[de];
                b(Y.name).addKeys(me);
              })), C.mutatedParts = nr(C.mutatedParts || {}, N), $;
            });
          } }), p = function(b) {
            var E = b.query, b = E.index, E = E.range;
            return [b, new Ze((b = E.lower) !== null && b !== void 0 ? b : e.MIN_KEY, (E = E.upper) !== null && E !== void 0 ? E : e.MAX_KEY)];
          }, T = { get: function(v) {
            return [l, new Ze(v.key)];
          }, getMany: function(v) {
            return [l, new Ze().addKeys(v.keys)];
          }, count: p, query: p, openCursor: p };
          return y(T).forEach(function(v) {
            w[v] = function(b) {
              var E = Z.subscr, x = !!E, O = Xi(Z, s) && Qi(v, b) ? b.obsSet = {} : E;
              if (x) {
                var C = function(U) {
                  return U = "idb://".concat(t, "/").concat(o, "/").concat(U), O[U] || (O[U] = new Ze());
                }, N = C(""), D = C(":dels"), E = T[v](b), x = E[0], E = E[1];
                if ((v === "query" && x.isPrimaryKey && !b.values ? D : C(x.name || "")).add(E), !x.isPrimaryKey) {
                  if (v !== "count") {
                    var B = v === "query" && m && b.values && s.query(u(u({}, b), { values: !1 }));
                    return s[v].apply(this, arguments).then(function(U) {
                      if (v === "query") {
                        if (m && b.values) return B.then(function(me) {
                          return me = me.result, N.addKeys(me), U;
                        });
                        var W = b.values ? U.result.map(d) : U.result;
                        (b.values ? N : D).addKeys(W);
                      } else if (v === "openCursor") {
                        var $ = U, Y = b.values;
                        return $ && Object.create($, { key: { get: function() {
                          return D.addKey($.primaryKey), $.key;
                        } }, primaryKey: { get: function() {
                          var me = $.primaryKey;
                          return D.addKey(me), me;
                        } }, value: { get: function() {
                          return Y && N.addKey($.primaryKey), $.value;
                        } } });
                      }
                      return U;
                    });
                  }
                  D.add(r);
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
        return r.numFailures === o ? null : (t = u({}, t), S(t.keys) && (t.keys = t.keys.filter(function(s, c) {
          return !(c in r.failures);
        })), "values" in t && S(t.values) && (t.values = t.values.filter(function(s, c) {
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
          if (b.type === "add" || b.type === "put") for (var O = new Ze(), C = b.values.length - 1; 0 <= C; --C) {
            var N, D = b.values[C], B = g(D);
            O.hasKey(B) || (N = w(D), (d && S(N) ? N.some(function($) {
              return Qr($, m);
            }) : Qr(N, m)) && (O.addKey(B), x.push(D)));
          }
          switch (b.type) {
            case "add":
              var V = new Ze().addKeys(t.values ? v.map(function(Y) {
                return g(Y);
              }) : v), E = v.concat(t.values ? x.filter(function(Y) {
                return Y = g(Y), !V.hasKey(Y) && (V.addKey(Y), !0);
              }) : x.map(function(Y) {
                return g(Y);
              }).filter(function(Y) {
                return !V.hasKey(Y) && (V.addKey(Y), !0);
              }));
              break;
            case "put":
              var M = new Ze().addKeys(b.values.map(function(Y) {
                return g(Y);
              }));
              E = v.filter(function(Y) {
                return !M.hasKey(t.values ? g(Y) : Y);
              }).concat(t.values ? x : x.map(function(Y) {
                return g(Y);
              }));
              break;
            case "delete":
              var U = new Ze().addKeys(b.keys);
              E = v.filter(function(Y) {
                return !U.hasKey(t.values ? g(Y) : Y);
              });
              break;
            case "deleteRange":
              var W = b.range;
              E = v.filter(function(Y) {
                return !Qr(g(Y), W);
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
            s.subscribers.size === 0 && De(c, s);
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
                    var b = e.table(T), E = v.optimisticOps.filter(function(Y) {
                      return Y.trans === d;
                    });
                    if (d._explicit && m && d.mutatedParts) for (var x = 0, O = Object.values(v.queries.query); x < O.length; x++) for (var C = 0, N = (V = O[x]).slice(); C < N.length; C++) Vr((M = N[C]).obsSet, d.mutatedParts) && (De(V, M), M.subscribers.forEach(function(Y) {
                      return g.add(Y);
                    }));
                    else if (0 < E.length) {
                      v.optimisticOps = v.optimisticOps.filter(function(Y) {
                        return Y.trans !== d;
                      });
                      for (var D = 0, B = Object.values(v.queries.query); D < B.length; D++) for (var V, M, U, W = 0, $ = (V = B[D]).slice(); W < $.length; W++) (M = $[W]).res != null && d.mutatedParts && (m && !M.dirty ? (U = Object.isFrozen(M.res), U = Ji(M.res, M.req, E, b, M, U), M.dirty ? (De(V, M), M.subscribers.forEach(function(Y) {
                        return g.add(Y);
                      })) : U !== M.res && (M.res = U, M.promise = G.resolve({ result: U }))) : (M.dirty && De(V, M), M.subscribers.forEach(function(Y) {
                        return g.add(Y);
                      })));
                    }
                  }
                }
                g.forEach(function(Y) {
                  return Y();
                });
              }
            };
          }, d.addEventListener("abort", s(!1), { signal: l }), d.addEventListener("error", s(!1), { signal: l }), d.addEventListener("complete", s(!0), { signal: l })), d;
        }, table: function(r) {
          var o = e.table(r), s = o.schema.primaryKey;
          return u(u({}, o), { mutate: function(c) {
            var l = Z.trans;
            if (s.outbound || l.db._options.cache === "disabled" || l.explicit || l.idbtrans.mode !== "readwrite") return o.mutate(c);
            var d = Xt["idb://".concat(t, "/").concat(r)];
            return d ? (l = o.mutate(c), c.type !== "add" && c.type !== "put" || !(50 <= c.values.length || Xr(s, c).some(function(m) {
              return m == null;
            })) ? (d.optimisticOps.push(c), c.mutatedParts && rr(c.mutatedParts), l.then(function(m) {
              0 < m.numFailures && (De(d.optimisticOps, c), (m = zi(0, c, m)) && d.optimisticOps.push(m), c.mutatedParts && rr(c.mutatedParts));
            }), l.catch(function() {
              De(d.optimisticOps, c), c.mutatedParts && rr(c.mutatedParts);
            })) : l.then(function(m) {
              var g = zi(0, u(u({}, c), { values: c.values.map(function(w, p) {
                var T;
                return m.failures[p] ? w : (w = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? Ee(w) : u({}, w), z(w, s.keyPath, m.results[p]), w);
              }) }), m);
              d.optimisticOps.push(g), queueMicrotask(function() {
                return c.mutatedParts && rr(c.mutatedParts);
              });
            }), l) : o.mutate(c);
          }, query: function(c) {
            if (!Xi(Z, o) || !Qi("query", c)) return o.query(c);
            var l = ((g = Z.trans) === null || g === void 0 ? void 0 : g.db._options.cache) === "immutable", p = Z, d = p.requery, m = p.signal, g = function(b, E, x, O) {
              var C = Xt["idb://".concat(b, "/").concat(E)];
              if (!C) return [];
              if (!(E = C.queries[x])) return [null, !1, C, null];
              var N = E[(O.query ? O.query.index.name : null) || ""];
              if (!N) return [null, !1, C, null];
              switch (x) {
                case "query":
                  var D = N.find(function(B) {
                    return B.req.limit === O.limit && B.req.values === O.values && Zi(B.req.query.range, O.query.range);
                  });
                  return D ? [D, !0, C, N] : [N.find(function(B) {
                    return ("limit" in B.req ? B.req.limit : 1 / 0) >= O.limit && (!O.values || B.req.values) && ws(B.req.query.range, O.query.range);
                  }), !1, C, N];
                case "count":
                  return D = N.find(function(B) {
                    return Zi(B.req.query.range, O.query.range);
                  }), [D, !!D, C, N];
              }
            }(t, r, "query", c), w = g[0], p = g[1], T = g[2], v = g[3];
            return w && p ? w.obsSet = c.obsSet : (p = o.query(c).then(function(b) {
              var E = b.result;
              if (w && (w.res = E), l) {
                for (var x = 0, O = E.length; x < O; ++x) Object.freeze(E[x]);
                Object.freeze(E);
              } else b.result = Ee(E);
              return b;
            }).catch(function(b) {
              return v && w && De(v, w), Promise.reject(b);
            }), w = { obsSet: c.obsSet, promise: p, subscribers: /* @__PURE__ */ new Set(), type: "query", req: c, dirty: !1 }, v ? v.push(w) : (v = [w], (T = T || (Xt["idb://".concat(t, "/").concat(r)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[c.query.index.name || ""] = v)), xs(w, v, d, m), w.promise.then(function(b) {
              return { result: Ji(b.result, c, T?.optimisticOps, o, w, l) };
            });
          } });
        } });
      } };
      function or(e, t) {
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
        return this.idbdb && (this._state.openComplete || Z.letThrough || this._vip) ? e() : new G(function(r, o) {
          if (t._state.openComplete) return o(new K.DatabaseClosed(t._state.dbOpenError));
          if (!t._state.isBeingOpened) {
            if (!t._state.autoOpen) return void o(new K.DatabaseClosed());
            t.open().catch(k);
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
        return Wt(rt, function() {
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
        e.isBeingOpened || (e.dbReadyPromise = new G(function(r) {
          e.dbReadyResolve = r;
        }), e.openCanceller = new G(function(r, o) {
          e.cancelOpen = o;
        }));
      }, Le.prototype.close = function(r) {
        var t = (r === void 0 ? { disableAutoOpen: !0 } : r).disableAutoOpen, r = this._state;
        t ? (r.isBeingOpened && r.cancelOpen(new K.DatabaseClosed()), this._close(), r.autoOpen = !1, r.dbOpenError = new K.DatabaseClosed()) : (this._close(), r.autoOpen = this._options.autoOpen || r.isBeingOpened, r.openComplete = !1, r.dbOpenError = null);
      }, Le.prototype.delete = function(e) {
        var t = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var r = 0 < arguments.length && typeof arguments[0] != "object", o = this._state;
        return new G(function(s, c) {
          function l() {
            t.close(e);
            var d = t._deps.indexedDB.deleteDatabase(t.name);
            d.onsuccess = je(function() {
              var m, g, w;
              m = t._deps, g = t.name, w = m.indexedDB, m = m.IDBKeyRange, qr(w) || g === $n || Mr(w, m).delete(g).catch(k), s();
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
          return o = c.pop(), [t, se(c), o];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, Le.prototype._transaction = function(e, t, r) {
        var o = this, s = Z.trans;
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
          return G.resolve().then(function() {
            var E = Z.transless || Z, x = w._createTransaction(p, T, w._dbSchema, v);
            if (x.explicit = !0, E = { trans: x, transless: E }, v) x.idbtrans = v.idbtrans;
            else try {
              x.create(), x.idbtrans._explicit = !0, w._state.PR1398_maxLoop = 3;
            } catch (N) {
              return N.name === P.InvalidState && w.isOpen() && 0 < --w._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), w.close({ disableAutoOpen: !1 }), w.open().then(function() {
                return g(w, p, T, null, b);
              })) : Ue(N);
            }
            var O, C = yt(b);
            return C && un(), E = G.follow(function() {
              var N;
              (O = b.call(x, x)) && (C ? (N = Dt.bind(null, null), O.then(N, N)) : typeof O.next == "function" && typeof O.throw == "function" && (O = Gr(O)));
            }, E), (O && typeof O.then == "function" ? G.resolve(O).then(function(N) {
              return x.active ? N : Ue(new K.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : E.then(function() {
              return O;
            })).then(function(N) {
              return v && x._resolve(), x._completion.then(function() {
                return N;
              });
            }).catch(function(N) {
              return x._reject(N), Ue(N);
            });
          });
        }).bind(null, this, c, l, s, r);
        return s ? s._promise(c, m, "lock") : Z.trans ? Wt(Z.transless, function() {
          return o._whenReady(m);
        }) : this._whenReady(m);
      }, Le.prototype.table = function(e) {
        if (!R(this._allTables, e)) throw new K.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, Le);
      function Le(e, t) {
        var r = this;
        this._middlewares = {}, this.verno = 0;
        var o = Le.dependencies;
        this._options = t = u({ addons: Le.addons, autoOpen: !0, indexedDB: o.indexedDB, IDBKeyRange: o.IDBKeyRange, cache: "cloned" }, t), this._deps = { indexedDB: t.indexedDB, IDBKeyRange: t.IDBKeyRange }, o = t.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, c, l, d, m, g = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: k, dbReadyPromise: null, cancelOpen: k, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: t.autoOpen };
        g.dbReadyPromise = new G(function(p) {
          g.dbReadyResolve = p;
        }), g.openCanceller = new G(function(p, T) {
          g.cancelOpen = T;
        }), this._state = g, this.name = e, this.on = vn(this, "populate", "blocked", "versionchange", "close", { ready: [ce, k] }), this.once = function(p, T) {
          var v = function() {
            for (var b = [], E = 0; E < arguments.length; E++) b[E] = arguments[E];
            r.on(p).unsubscribe(v), T.apply(r, b);
          };
          return r.on(p, v);
        }, this.on.ready.subscribe = Fe(this.on.ready.subscribe, function(p) {
          return function(T, v) {
            Le.vip(function() {
              var b, E = r._state;
              E.openComplete ? (E.dbOpenError || G.resolve().then(T), v && p(T)) : E.onReadyBeingFired ? (E.onReadyBeingFired.push(T), v && p(T)) : (p(T), b = r, v || p(function x() {
                b.on.ready.unsubscribe(T), b.on.ready.unsubscribe(x);
              }));
            });
          };
        }), this.Collection = (s = this, gn(os.prototype, function(O, x) {
          this.db = s;
          var v = Pi, b = null;
          if (x) try {
            v = x();
          } catch (C) {
            b = C;
          }
          var E = O._ctx, x = E.table, O = x.hook.reading.fire;
          this._ctx = { table: x, index: E.index, isPrimKey: !E.index || x.schema.primKey.keyPath && E.index === x.schema.primKey.name, range: v, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: b, or: E.or, valueMapper: O !== j ? O : null };
        })), this.Table = (c = this, gn(Di.prototype, function(p, T, v) {
          this.db = c, this._tx = v, this.name = p, this.schema = T, this.hook = c._allTables[p] ? c._allTables[p].hook : vn(null, { creating: [oe, k], reading: [X, j], updating: [he, k], deleting: [ne, k] });
        })), this.Transaction = (l = this, gn(us.prototype, function(p, T, v, b, E) {
          var x = this;
          p !== "readonly" && T.forEach(function(O) {
            O = (O = v[O]) === null || O === void 0 ? void 0 : O.yProps, O && (T = T.concat(O.map(function(C) {
              return C.updatesTable;
            })));
          }), this.db = l, this.mode = p, this.storeNames = T, this.schema = v, this.chromeTransactionDurability = b, this.idbtrans = null, this.on = vn(this, "complete", "error", "abort"), this.parent = E || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new G(function(O, C) {
            x._resolve = O, x._reject = C;
          }), this._completion.then(function() {
            x.active = !1, x.on.complete.fire();
          }, function(O) {
            var C = x.active;
            return x.active = !1, x.on.error.fire(O), x.parent ? x.parent._reject(O) : C && x.idbtrans && x.idbtrans.abort(), Ue(O);
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
            return or(r.table(E), w);
          };
          var b = Reflect.get(p, T, v);
          return b instanceof Di ? or(b, w) : T === "tables" ? b.map(function(E) {
            return or(E, w);
          }) : T === "_createTransaction" ? function() {
            return or(b.apply(this, arguments), w);
          } : b;
        } });
        this.vip = w, o.forEach(function(p) {
          return p(r);
        });
      }
      var sr, pt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Ts = (zr.prototype.subscribe = function(e, t, r) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: t, complete: r });
      }, zr.prototype[pt] = function() {
        return this;
      }, zr);
      function zr(e) {
        this._subscribe = e;
      }
      try {
        sr = { indexedDB: h.indexedDB || h.mozIndexedDB || h.webkitIndexedDB || h.msIndexedDB, IDBKeyRange: h.IDBKeyRange || h.webkitIDBKeyRange };
      } catch {
        sr = { indexedDB: null, IDBKeyRange: null };
      }
      function eo(e) {
        var t, r = !1, o = new Ts(function(s) {
          var c = yt(e), l, d = !1, m = {}, g = {}, w = { get closed() {
            return d;
          }, unsubscribe: function() {
            d || (d = !0, l && l.abort(), p && jt.storagemutated.unsubscribe(v));
          } };
          s.start && s.start(w);
          var p = !1, T = function() {
            return Ar(b);
          }, v = function(E) {
            nr(m, E), Vr(g, m) && T();
          }, b = function() {
            var E, x, O;
            !d && sr.indexedDB && (m = {}, E = {}, l && l.abort(), l = new AbortController(), O = function(C) {
              var N = sn();
              try {
                c && un();
                var D = It(e, C);
                return D = c ? D.finally(Dt) : D;
              } finally {
                N && an();
              }
            }(x = { subscr: E, signal: l.signal, requery: T, querier: e, trans: null }), Promise.resolve(O).then(function(C) {
              r = !0, t = C, d || x.signal.aborted || (m = {}, function(N) {
                for (var D in N) if (R(N, D)) return;
                return 1;
              }(g = E) || p || (jt(wn, v), p = !0), Ar(function() {
                return !d && s.next && s.next(C);
              }));
            }, function(C) {
              r = !1, ["DatabaseClosedError", "AbortError"].includes(C?.name) || d || Ar(function() {
                d || s.error && s.error(C);
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
        var t = Ft;
        try {
          Ft = !0, jt.storagemutated.fire(e), Wr(e, !0);
        } finally {
          Ft = t;
        }
      }
      H(Qt, u(u({}, $e), { delete: function(e) {
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
              return s !== $n;
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
        return Z.trans ? Wt(Z.transless, e) : e();
      }, vip: Ur, async: function(e) {
        return function() {
          try {
            var t = Gr(e.apply(this, arguments));
            return t && typeof t.then == "function" ? t : G.resolve(t);
          } catch (r) {
            return Ue(r);
          }
        };
      }, spawn: function(e, t, r) {
        try {
          var o = Gr(e.apply(r, t || []));
          return o && typeof o.then == "function" ? o : G.resolve(o);
        } catch (s) {
          return Ue(s);
        }
      }, currentTransaction: { get: function() {
        return Z.trans || null;
      } }, waitFor: function(e, t) {
        return t = G.resolve(typeof e == "function" ? Qt.ignoreTransaction(e) : e).timeout(t || 6e4), Z.trans ? Z.trans.waitFor(t) : t;
      }, Promise: G, debug: { get: function() {
        return re;
      }, set: function(e) {
        Oe(e);
      } }, derive: fe, extend: I, props: H, override: Fe, Events: vn, on: jt, liveQuery: eo, extendObservabilitySet: nr, getByKeyPath: Q, setByKeyPath: z, delByKeyPath: function(e, t) {
        typeof t == "string" ? z(e, t, void 0) : "length" in t && [].map.call(t, function(r) {
          z(e, r, void 0);
        });
      }, shallowClone: J, deepClone: Ee, getObjectDiff: Yr, cmp: be, asap: ge, minKey: -1 / 0, addons: [], connections: cn, errnames: P, dependencies: sr, cache: Xt, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, t, r) {
        return e + t / Math.pow(10, 2 * r);
      }) })), Qt.maxKey = xn(Qt.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (jt(wn, function(e) {
        Ft || (e = new CustomEvent(Ir, { detail: e }), Ft = !0, dispatchEvent(e), Ft = !1);
      }), addEventListener(Ir, function(e) {
        e = e.detail, Ft || Jr(e);
      }));
      var pn, Ft = !1, to = function() {
      };
      return typeof BroadcastChannel < "u" && ((to = function() {
        (pn = new BroadcastChannel(Ir)).onmessage = function(e) {
          return e.data && Jr(e.data);
        };
      })(), typeof pn.unref == "function" && pn.unref(), jt(wn, function(e) {
        Ft || pn.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!At.disableBfCache && e.persisted) {
          re && console.debug("Dexie: handling persisted pagehide"), pn?.close();
          for (var t = 0, r = cn; t < r.length; t++) r[t].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !At.disableBfCache && e.persisted && (re && console.debug("Dexie: handling persisted pageshow"), to(), Jr({ all: new Ze(-1 / 0, [[]]) }));
      })), G.rejectionMapper = function(e, t) {
        return !e || e instanceof Ct || e instanceof TypeError || e instanceof SyntaxError || !e.name || !q[e.name] ? e : (t = new q[e.name](t || e.message, e), "stack" in e && te(t, "stack", { get: function() {
          return this.inner.stack;
        } }), t);
      }, Oe(re), u(At, Object.freeze({ __proto__: null, Dexie: At, liveQuery: eo, Entity: Ci, cmp: be, PropModification: bn, replacePrefix: function(e, t) {
        return new bn({ replacePrefix: [e, t] });
      }, add: function(e) {
        return new bn({ add: e });
      }, remove: function(e) {
        return new bn({ remove: e });
      }, default: At, RangeSet: Ze, mergeRanges: Sn, rangesOverlap: $i }), { default: At }), At;
    });
  }(Do)), Do.exports;
}
var Ph = kh();
const oa = /* @__PURE__ */ Oh(Ph), Eu = Symbol.for("Dexie"), sa = globalThis[Eu] || (globalThis[Eu] = oa);
if (oa.semVer !== sa.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${oa.semVer} and ${sa.semVer}`);
const {
  liveQuery: Fc,
  mergeRanges: up,
  rangesOverlap: cp,
  RangeSet: lp,
  cmp: fp,
  Entity: dp,
  PropModification: hp,
  replacePrefix: pp,
  add: mp,
  remove: yp,
  DexieYProvider: vp
} = sa;
function Bc(n, i) {
  const a = Zt(i?.initialValue), u = n.subscribe({
    next: (f) => a.value = f,
    error: i?.onError
  });
  return Ud(() => {
    u.unsubscribe();
  }), a;
}
async function Tu() {
  const n = on();
  return ot(n.sdk, "SDK not initialized"), n.sdk.db.table(ai).toArray();
}
async function Ch(n, i) {
  const a = on();
  ot(a.sdk, "SDK not initialized");
  const u = a.sdk.db.table(ai);
  if (await u.where("filename").equals(n.name).first())
    throw new Error("A file with the same name already exists.");
  const h = new Blob([await n.arrayBuffer()], { type: n.type }), y = {
    id: crypto.randomUUID(),
    filename: n.name,
    file: h
  };
  await u.add(y);
  const S = await a.sdk.findRecordById(i);
  return ot(S, "Parent not found"), await a.sdk.db.table(mt).update(S.id, {
    attributes: [...S.attributes, { name: "fileReference", value: n.name }]
  }), y;
}
async function Nh(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.db.table(ai).get(n);
  ot(a, "Attachment not found"), await i.sdk.db.table(ai).delete(n), await Mc(a.filename);
}
async function Mc(n) {
  const i = on();
  ot(i.sdk, "SDK not initialized");
  const a = await i.sdk.db.table(mt).where("tagName").equals("BehaviorDescription").and((u) => xe(u, "fileReference") === n).first();
  ot(a, "Behavior description not found"), await i.sdk.db.table(mt).update(a.id, {
    attributes: a.attributes.filter(
      (u) => u.name !== "fileReference"
    )
  });
}
const Ih = { class: "space-y-2" }, Dh = {
  key: 0,
  role: "alert",
  class: "alert alert-error alert-soft flex items-center justify-between"
}, Rh = {
  key: 1,
  class: "max-w-max flex items-center justify-between gap-4"
}, Kh = ["download", "title"], jh = { class: "group-hover:underline underline-offset-2" }, Fh = /* @__PURE__ */ So({
  __name: "file-attachements",
  props: {
    behaviorDescription: {}
  },
  async setup(n) {
    let i, a;
    const u = n, f = Zt(!1), h = Zt("");
    async function y(ie) {
      f.value = !1, h.value = "";
      const te = ie.target;
      ot(ie.dataTransfer, "Invalid drop event");
      const { files: fe } = ie.dataTransfer;
      if (ie.dataTransfer.clearData(), fe.length == 0) return;
      if (fe.length > 1) {
        h.value = "You cannot upload multiple files.";
        return;
      }
      const Pe = te.closest("form").elements.namedItem("file");
      Pe.files = fe, Pe.dispatchEvent(new Event("change"));
    }
    async function S(ie) {
      const te = ie.target;
      if (h.value = "", !(!te.files || te.files.length == 0))
        try {
          await Ch(te.files[0], u.behaviorDescription?.id || "");
        } catch (fe) {
          h.value = fe instanceof Error ? fe.message : String(fe);
          return;
        }
    }
    const I = Fc(Tu), L = Bc(I, {
      initialValue: ([i, a] = go(() => Tu()), i = await i, a(), i)
    }), F = Kn(() => {
      const ie = u.behaviorDescription?.fileReference, te = L.value.find((fe) => fe.filename == ie);
      return !te && ie ? {
        id: null,
        filename: ie,
        file: ""
      } : te;
    });
    async function R(ie) {
      let te = ie.currentTarget;
      if (ot(F.value, "Invalid download attempt"), !F.value.id) {
        alert("This file has been manually attached and cannot be downloaded.");
        return;
      }
      if (!te.href) {
        ie.preventDefault();
        const fe = URL.createObjectURL(F.value.file);
        te.href = fe, te.click(), URL.revokeObjectURL(fe);
      }
    }
    async function H() {
      ot(F.value, "Invalid delete action"), F.value.id ? Nh(F.value.id) : Mc(F.value.filename);
    }
    return (ie, te) => (We(), ze("div", Ih, [
      te[10] || (te[10] = _e("h2", { class: "font-medium" }, "Attached Behavior Description File:", -1)),
      F.value ? (We(), ze("div", Rh, [
        _e("a", {
          class: po(["block link link-primary no-underline group", { "hover:cursor-not-allowed": !F.value.id }]),
          onClick: R,
          download: F.value?.filename,
          title: F.value.id ? void 0 : "This file has been manually attached and cannot be downloaded."
        }, [
          te[8] || (te[8] = _e("svg", {
            class: "size-4 inline fill-current mr-1.5",
            viewBox: "0 -960 960 960"
          }, [
            _e("path", { d: "m720-120 160-160-56-56-64 64v-167h-80v167l-64-64-56 56 160 160ZM560 0v-80h320V0H560ZM240-160q-33 0-56.5-23.5T160-240v-560q0-33 23.5-56.5T240-880h280l240 240v121h-80v-81H480v-200H240v560h240v80H240Zm0-80v-560 560Z" })
          ], -1)),
          _e("span", jh, vt(F.value.filename), 1)
        ], 10, Kh),
        _e("button", {
          class: "cursor-pointer text-neutral-400 hover:text-neutral-800",
          title: "Remove attachment",
          onClick: H
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
      ])) : (We(), ze("form", {
        key: 0,
        method: "POST",
        onSubmit: te[4] || (te[4] = hi(() => {
        }, ["prevent"])),
        class: "flex flex-col gap-4 max-w-xs"
      }, [
        h.value ? (We(), ze("div", Dh, [
          mn(vt(h.value) + " ", 1),
          _e("button", {
            class: "cursor-pointer size-4 saturate-75",
            "aria-label": "Hide error",
            onClick: te[0] || (te[0] = (fe) => h.value = "")
          }, te[5] || (te[5] = [
            _e("svg", { viewBox: "0 0 64 64" }, [
              _e("path", {
                class: "fill-current",
                d: "M 16 14 C 15.488 14 14.976938 14.194937 14.585938 14.585938 C 13.804937 15.366937 13.804937 16.633063 14.585938 17.414062 L 29.171875 32 L 14.585938 46.585938 C 13.804938 47.366938 13.804937 48.633063 14.585938 49.414062 C 14.976937 49.805062 15.488 50 16 50 C 16.512 50 17.023062 49.805062 17.414062 49.414062 L 32 34.828125 L 46.585938 49.414062 C 47.366938 50.195063 48.633063 50.195062 49.414062 49.414062 C 50.195063 48.633062 50.195062 47.366937 49.414062 46.585938 L 34.828125 32 L 49.414062 17.414062 C 50.195063 16.633063 50.195062 15.366938 49.414062 14.585938 C 48.633062 13.804938 47.366937 13.804938 46.585938 14.585938 L 32 29.171875 L 17.414062 14.585938 C 17.023062 14.194938 16.512 14 16 14 z"
              })
            ], -1)
          ]))
        ])) : On("", !0),
        _e("label", {
          onDragenter: te[1] || (te[1] = hi((fe) => f.value = !0, ["prevent"])),
          onDragover: te[2] || (te[2] = hi((fe) => f.value = !0, ["prevent"])),
          onDragleave: te[3] || (te[3] = hi((fe) => f.value = !1, ["prevent"])),
          onDrop: hi(y, ["prevent"]),
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
            onChange: S
          }, null, 32)
        ], 34)
      ], 32))
    ]));
  }
}), Bh = ["value"], Mh = { class: "w-full my-8" }, qh = { class: "pr-3" }, Uh = { class: "font-medium text-lg" }, Lh = { key: 0 }, Vh = { key: 1 }, $h = { class: "font-medium text-lg" }, Hh = { key: 0 }, Wh = { key: 1 }, Gh = { class: "*:py-4" }, Yh = /* @__PURE__ */ So({
  __name: "behavior-description-editor",
  async setup(n) {
    let i, a;
    const u = on(), f = Zt(""), h = Bc(Fc(_u), {
      initialValue: ([i, a] = go(() => _u()), i = await i, a(), i)
    }), y = Kn(
      () => h.value.find((F) => F.id === f.value)
    ), S = Kn(() => {
      if (!y.value) return [];
      const { inputVars: F, outputVars: R } = y.value, H = Math.max(F.length, R.length);
      return Array.from({ length: H }, (ie, te) => ({
        inputVar: F[te] ?? null,
        outputVar: R[te] ?? null
      }));
    });
    async function I(F) {
      const R = await u.sdk.createRecord({
        tagName: "InputVar",
        attributes: vu(F),
        children: [],
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        parent: { id: f.value, tagName: "BehaviorDescription" },
        value: ""
      }), H = await u.sdk.findRecordById(f.value);
      ot(H, "BehaviorDescription not found"), await u.sdk.ensureRelationship(H, R);
    }
    async function L(F) {
      const R = await u.sdk.createRecord({
        tagName: "OutputVar",
        attributes: vu(F),
        children: [],
        namespace: { prefix: "eIEC61850-6-100", uri: "http://www.iec.ch/61850/2019/SCL/6-100" },
        parent: { id: f.value, tagName: "BehaviorDescription" },
        value: ""
      }), H = await u.sdk.findRecordById(f.value);
      ot(H, "BehaviorDescription not found"), await u.sdk.ensureRelationship(H, R);
    }
    return (F, R) => (We(), ze(gt, null, [
      R[9] || (R[9] = _e("h1", { class: "font-bold text-4xl my-4" }, "Behavior Description Editor", -1)),
      R[10] || (R[10] = _e("label", { for: "behavior-select" }, "Element:", -1)),
      R[11] || (R[11] = mn()),
      R[12] || (R[12] = _e("br", null, null, -1)),
      ri(_e("select", {
        "onUpdate:modelValue": R[0] || (R[0] = (H) => f.value = H),
        name: "behavior",
        id: "behavior-select",
        class: "border py-1"
      }, [
        R[1] || (R[1] = _e("option", {
          value: "",
          disabled: ""
        }, "No behavior description selected", -1)),
        (We(!0), ze(gt, null, ii(Bt(h), (H) => (We(), ze("option", {
          key: H.id,
          value: H.id
        }, vt(H.name), 9, Bh))), 128))
      ], 512), [
        [io, f.value]
      ]),
      y.value ? (We(), ze(gt, { key: 0 }, [
        _e("table", Mh, [
          R[8] || (R[8] = _e("thead", null, [
            _e("tr", { class: "text-left text-2xl" }, [
              _e("th", null, "Input Variables"),
              _e("th", null, "Output Variables")
            ])
          ], -1)),
          _e("tbody", null, [
            (We(!0), ze(gt, null, ii(S.value, (H, ie) => (We(), ze("tr", {
              key: ie,
              class: "*:align-top *:py-2"
            }, [
              _e("td", qh, [
                H.inputVar ? (We(), ze(gt, { key: 0 }, [
                  _e("div", Uh, vt(H.inputVar.varName), 1),
                  Bt(gu)(H.inputVar) ? (We(), ze("div", Lh, [
                    mn(vt(H.inputVar.dataName) + " ", 1),
                    R[2] || (R[2] = _e("span", { class: "bg-blue-200 text-xs px-1 rounded" }, "dataName", -1))
                  ])) : On("", !0),
                  Bt(Vd)(H.inputVar) ? (We(), ze("div", Vh, [
                    mn(vt(H.inputVar.inputName) + " ", 1),
                    R[3] || (R[3] = _e("span", { class: "bg-orange-200 text-xs px-1 rounded" }, "inputName", -1))
                  ])) : On("", !0)
                ], 64)) : On("", !0)
              ]),
              _e("td", null, [
                H.outputVar ? (We(), ze(gt, { key: 0 }, [
                  _e("div", $h, vt(H.outputVar.varName), 1),
                  Bt(gu)(H.outputVar) ? (We(), ze("div", Hh, [
                    mn(vt(H.outputVar.dataName) + " ", 1),
                    R[4] || (R[4] = _e("span", { class: "bg-blue-200 text-xs px-1 rounded" }, "dataName", -1))
                  ])) : On("", !0),
                  Bt($d)(H.outputVar) ? (We(), ze("div", Wh, [
                    mn(vt(H.outputVar.outputName) + " ", 1),
                    R[5] || (R[5] = _e("span", { class: "bg-orange-200 text-xs px-1 rounded" }, "outputName", -1))
                  ])) : On("", !0)
                ], 64)) : On("", !0)
              ])
            ]))), 128))
          ]),
          _e("tfoot", null, [
            _e("tr", Gh, [
              _e("td", null, [
                kt(wu, {
                  type: "input",
                  onSubmit: I,
                  behaviorDescription: y.value
                }, {
                  default: $s(() => R[6] || (R[6] = [
                    mn(" + Input Variable ")
                  ])),
                  _: 1,
                  __: [6]
                }, 8, ["behaviorDescription"])
              ]),
              _e("td", null, [
                kt(wu, {
                  type: "output",
                  onSubmit: L,
                  behaviorDescription: y.value
                }, {
                  default: $s(() => R[7] || (R[7] = [
                    mn(" + Output Variable ")
                  ])),
                  _: 1,
                  __: [7]
                }, 8, ["behaviorDescription"])
              ])
            ])
          ])
        ]),
        kt(Fh, { behaviorDescription: y.value }, null, 8, ["behaviorDescription"])
      ], 64)) : On("", !0)
    ], 64));
  }
}), Xh = ["id"], Qh = /* @__PURE__ */ So({
  __name: "app",
  props: {
    api: {}
  },
  async setup(n) {
    let i, a;
    const u = n, f = on(), h = "logic-editor", y = Zt();
    return [i, a] = go(() => f.initApp(u.api.activeFileName.value)), await i, a(), sc(() => {
      y.value = u.api.activeFileName.subscribe((S) => {
        f.initApp(S);
      });
    }), Sa(() => {
      y.value?.();
    }), (S, I) => (We(), ze("section", {
      id: Bt(h),
      class: "h-full px-4"
    }, [
      kt(Yh)
    ], 8, Xh));
  }
});
function gp(n, i) {
  if (!document.getElementById(n)) {
    console.error({ msg: "could not find root element", rootId: n });
    return;
  }
  const u = hd(
    /* @__PURE__ */ So({
      props: { api: i },
      setup(f) {
        return () => Ga(Tf, Ga(Qh, { ...f }));
      }
    }),
    { api: i }
  );
  return u.use(yd()), u.mount(`#${n}`), u.unmount;
}
export {
  gp as default
};
