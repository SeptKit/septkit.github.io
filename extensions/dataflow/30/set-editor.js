(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.backdrop[data-v-49c86f9f]{position:fixed;inset:0;z-index:5;width:100vw;height:100vh;background:transparent}.dataflow-group[data-v-0fb60803]{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.dataflow-group [data-v-0fb60803]{align-self:center}.dataflow-group__line[data-v-0fb60803] *{border-color:var(--color-ocean-gray-200)}.dataflow-group__line--active[data-v-0fb60803] *{border-color:var(--color-ocean-gray-500)}.dataflow-group__left-port span[data-v-0fb60803],.dataflow-group__right-port span[data-v-0fb60803]{border:2px var(--tw-border-style) var(--color-ocean-gray-100);border-radius:var(--radius-sm);padding:.25rem .5rem}.dataflows[data-v-f2c7cc02] *{cursor:pointer;align-self:center}.dataflows__chevron-container[data-v-f2c7cc02]{position:relative;top:-.3rem;margin-left:7rem}.dataflows__icon-chevron-down[data-v-f2c7cc02]{color:var(--color-ocean-gray-300)}.dataflows__icon-badge[data-v-f2c7cc02]{z-index:1;position:relative;top:.5rem;justify-self:end;width:1rem;height:1rem;display:flex;align-items:center;justify-content:center;background-color:var(--color-primary);color:var(--color-white);border-radius:calc(Infinity * 1px);font-size:.5rem}.dataflows.dataflows--detailed[data-v-f2c7cc02]{grid-auto-rows:50px;margin-bottom:2rem}.dataflows.dataflows--detailed .dataflows__icon-chevron-down[data-v-f2c7cc02]{transition:transform .3s;transform:rotate(180deg)}.dataflows__left-port span[data-v-f2c7cc02],.dataflows__right-port span[data-v-f2c7cc02]{border:2px var(--tw-border-style) var(--color-ocean-gray-100);border-radius:var(--radius-sm);padding:.25rem .5rem}:where(.custom-plus-btn-left[data-v-14ecf761]){width:unset}.custom-plus-btn-left[data-v-14ecf761]{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.custom-plus-btn-left[data-v-14ecf761]{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.custom-plus-btn-left[data-v-14ecf761]{--btn-noise:var(--fx-noise)}.prose .custom-plus-btn-left[data-v-14ecf761]{text-decoration-line:none}@media (hover:hover){.custom-plus-btn-left[data-v-14ecf761]:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.custom-plus-btn-left[data-v-14ecf761]:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.custom-plus-btn-left[data-v-14ecf761]:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.custom-plus-btn-left[data-v-14ecf761]:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.custom-plus-btn-left[data-v-14ecf761]:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-left[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.custom-plus-btn-left[data-v-14ecf761]:is(input[type=checkbox],input[type=radio]){appearance:none}.custom-plus-btn-left[data-v-14ecf761]:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.custom-plus-btn-left[data-v-14ecf761]:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.custom-plus-btn-left[data-v-14ecf761]{z-index:10;width:var(--size);height:var(--size);width:calc(var(--spacing,.25rem)*5);height:calc(var(--spacing,.25rem)*5);--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);border-radius:3.40282e38px;grid-column:3/span 1;grid-row-start:4;align-self:center;margin-left:-12px;padding-inline:0}:where(.custom-plus-btn-right[data-v-14ecf761]){width:unset}.custom-plus-btn-right[data-v-14ecf761]{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.custom-plus-btn-right[data-v-14ecf761]{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.custom-plus-btn-right[data-v-14ecf761]{--btn-noise:var(--fx-noise)}.prose .custom-plus-btn-right[data-v-14ecf761]{text-decoration-line:none}@media (hover:hover){.custom-plus-btn-right[data-v-14ecf761]:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.custom-plus-btn-right[data-v-14ecf761]:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.custom-plus-btn-right[data-v-14ecf761]:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.custom-plus-btn-right[data-v-14ecf761]:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.custom-plus-btn-right[data-v-14ecf761]:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.custom-plus-btn-right[data-v-14ecf761]:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.custom-plus-btn-right[data-v-14ecf761]:is(input[type=checkbox],input[type=radio]){appearance:none}.custom-plus-btn-right[data-v-14ecf761]:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.custom-plus-btn-right[data-v-14ecf761]:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.custom-plus-btn-right[data-v-14ecf761]{width:var(--size);height:var(--size);width:calc(var(--spacing,.25rem)*5);height:calc(var(--spacing,.25rem)*5);--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);border-radius:3.40282e38px;grid-column:4/span 1;grid-row-start:4;align-self:center;margin-left:-9px;padding-inline:0}.layout[data-v-7e8ad238]{display:grid;height:100%;grid-template-columns:1fr 20rem;overflow-y:scroll}.sidebar[data-v-7e8ad238]{padding:1.5rem;border-left:1px solid var(--border-color);height:100%}.main[data-v-7e8ad238]{padding:1rem;height:100%}.root[data-v-980b55b9]{display:flex;flex-direction:column;gap:1rem}.tab[data-v-980b55b9]{transition:all .2s}.tabs[data-v-980b55b9]{width:auto;display:inline-block;margin:0 auto}/*! tailwindcss v4.1.11 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial;--tw-border-style:solid;--tw-font-weight:initial;--tw-blur:initial;--tw-brightness:initial;--tw-contrast:initial;--tw-grayscale:initial;--tw-hue-rotate:initial;--tw-invert:initial;--tw-opacity:initial;--tw-saturate:initial;--tw-sepia:initial;--tw-drop-shadow:initial;--tw-drop-shadow-color:initial;--tw-drop-shadow-alpha:100%;--tw-drop-shadow-size:initial;--tw-content:""}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--color-gray-200:oklch(92.8% .006 264.531);--color-black:#000;--color-white:#fff;--spacing:.25rem;--text-xs:.75rem;--text-xs--line-height:calc(1/.75);--text-sm:.875rem;--text-sm--line-height:calc(1.25/.875);--text-lg:1.125rem;--text-lg--line-height:calc(1.75/1.125);--font-weight-medium:500;--font-weight-semibold:600;--font-weight-bold:700;--radius-sm:.25rem;--radius-xl:.75rem;--default-transition-duration:.15s;--default-transition-timing-function:cubic-bezier(.4,0,.2,1);--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:where(:root),:root:has(input.theme-controller[value=ocean-light]:checked),[data-theme=ocean-light]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(58.13% .0903 209.8);--color-primary-content:oklch(100% 0 0);--color-secondary:oklch(65.24% .0821 207.95);--color-secondary-content:oklch(100% 0 0);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-300)}}@layer components;@layer utilities{.modal{pointer-events:none;visibility:hidden;width:100%;max-width:none;height:100%;max-height:none;color:inherit;transition:translate .3s ease-out,visibility .3s allow-discrete,background-color .3s ease-out,opacity .1s ease-out;overscroll-behavior:contain;z-index:999;background-color:#0000;place-items:center;margin:0;padding:0;display:grid;position:fixed;inset:0;overflow:hidden}.modal::backdrop{display:none}.modal.modal-open,.modal[open],.modal:target{pointer-events:auto;visibility:visible;opacity:1;background-color:#0006}:is(.modal.modal-open,.modal[open],.modal:target) .modal-box{opacity:1;translate:0;scale:1}@starting-style{.modal.modal-open,.modal[open],.modal:target{visibility:hidden;opacity:0}}.tab{cursor:pointer;appearance:none;text-align:center;webkit-user-select:none;-webkit-user-select:none;user-select:none;flex-wrap:wrap;justify-content:center;align-items:center;display:inline-flex;position:relative}@media (hover:hover){.tab:hover{color:var(--color-base-content)}}.tab{--tab-p:1rem;--tab-bg:var(--color-base-100);--tab-border-color:var(--color-base-300);--tab-radius-ss:0;--tab-radius-se:0;--tab-radius-es:0;--tab-radius-ee:0;--tab-order:0;--tab-radius-min:calc(.75rem - var(--border));order:var(--tab-order);height:var(--tab-height);border-color:#0000;padding-inline-start:var(--tab-p);padding-inline-end:var(--tab-p);font-size:.875rem}.tab:is(input[type=radio]){min-width:fit-content}.tab:is(input[type=radio]):after{content:attr(aria-label)}.tab:is(label){position:relative}.tab:is(label) input{cursor:pointer;appearance:none;opacity:0;position:absolute;inset:0}:is(.tab:checked,.tab:is(label:has(:checked)),.tab:is(.tab-active,[aria-selected=true]))+.tab-content{height:calc(100% - var(--tab-height) + var(--border));display:block}.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.tab:not(:checked,label:has(:checked),:hover,.tab-active,[aria-selected=true]){color:color-mix(in oklab,var(--color-base-content)50%,transparent)}}.tab:not(input):empty{cursor:default;flex-grow:1}.tab:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.tab:focus{outline-offset:2px;outline:2px solid #0000}}.tab:focus-visible,.tab:is(label:has(:checked:focus-visible)){outline-offset:-5px;outline:2px solid}.tab[disabled]{pointer-events:none;opacity:.4}.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.collapse-arrow>.collapse-title:after{content:"";transform-origin:75% 75%;pointer-events:none;top:1.9rem;width:.5rem;height:.5rem;transition-property:all;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);display:block;position:absolute;inset-inline-end:1.4rem;transform:translateY(-100%)rotate(45deg);box-shadow:2px 2px}.dropdown{position-area:var(--anchor-v,bottom)var(--anchor-h,span-right);display:inline-block;position:relative}.dropdown>:not(summary):focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.dropdown>:not(summary):focus{outline-offset:2px;outline:2px solid #0000}}.dropdown .dropdown-content{position:absolute}.dropdown:not(details,.dropdown-open,.dropdown-hover:hover,:focus-within) .dropdown-content{transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover],.dropdown .dropdown-content{z-index:999;transition-behavior:allow-discrete;transition-property:opacity,scale,display;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);animation:.2s dropdown}@starting-style{.dropdown[popover],.dropdown .dropdown-content{opacity:0;scale:95%}}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within)>[tabindex]:first-child{pointer-events:none}:is(.dropdown.dropdown-open,.dropdown:not(.dropdown-hover):focus,.dropdown:focus-within) .dropdown-content{opacity:1}.dropdown.dropdown-hover:hover .dropdown-content{opacity:1;scale:100%}.dropdown:is(details) summary::-webkit-details-marker{display:none}:is(.dropdown.dropdown-open,.dropdown:focus,.dropdown:focus-within) .dropdown-content{scale:100%}.dropdown:where([popover]){background:0 0}.dropdown[popover]{color:inherit;position:fixed}@supports not (position-area:bottom){.dropdown[popover]{margin:auto}.dropdown[popover].dropdown-open:not(:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}.dropdown[popover]::backdrop{background-color:oklab(0% none none/.3)}}.dropdown[popover]:not(.dropdown-open,:popover-open){transform-origin:top;opacity:0;display:none;scale:95%}:where(.btn){width:unset}.btn{cursor:pointer;text-align:center;vertical-align:middle;outline-offset:2px;webkit-user-select:none;-webkit-user-select:none;user-select:none;padding-inline:var(--btn-p);color:var(--btn-fg);--tw-prose-links:var(--btn-fg);height:var(--size);font-size:var(--fontsize,.875rem);outline-color:var(--btn-color,var(--color-base-content));background-color:var(--btn-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--btn-noise);border-width:var(--border);border-style:solid;border-color:var(--btn-border);text-shadow:0 .5px oklch(100% 0 0/calc(var(--depth)*.15));touch-action:manipulation;box-shadow:0 .5px 0 .5px oklch(100% 0 0/calc(var(--depth)*6%)) inset,var(--btn-shadow);--size:calc(var(--size-field,.25rem)*10);--btn-bg:var(--btn-color,var(--color-base-200));--btn-fg:var(--color-base-content);--btn-p:1rem;--btn-border:var(--btn-bg);border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-wrap:nowrap;flex-shrink:0;justify-content:center;align-items:center;gap:.375rem;font-weight:600;transition-property:color,background-color,border-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:inline-flex}@supports (color:color-mix(in lab,red,red)){.btn{--btn-border:color-mix(in oklab,var(--btn-bg),#000 calc(var(--depth)*5%))}}.btn{--btn-shadow:0 3px 2px -2px var(--btn-bg),0 4px 3px -2px var(--btn-bg)}@supports (color:color-mix(in lab,red,red)){.btn{--btn-shadow:0 3px 2px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000),0 4px 3px -2px color-mix(in oklab,var(--btn-bg)calc(var(--depth)*30%),#0000)}}.btn{--btn-noise:var(--fx-noise)}.prose .btn{text-decoration-line:none}@media (hover:hover){.btn:hover{--btn-bg:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:hover{--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}}.btn:focus-visible{isolation:isolate;outline-width:2px;outline-style:solid}.btn:active:not(.btn-active){--btn-bg:var(--btn-color,var(--color-base-200));translate:0 .5px}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-bg:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 5%)}}.btn:active:not(.btn-active){--btn-border:var(--btn-color,var(--color-base-200))}@supports (color:color-mix(in lab,red,red)){.btn:active:not(.btn-active){--btn-border:color-mix(in oklab,var(--btn-color,var(--color-base-200)),#000 7%)}}.btn:active:not(.btn-active){--btn-shadow:0 0 0 0 oklch(0% 0 0/0),0 0 0 0 oklch(0% 0 0/0)}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):not(.btn-link,.btn-ghost){box-shadow:none}.btn:is(:disabled,[disabled],.btn-disabled){pointer-events:none;--btn-border:#0000;--btn-noise:none;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled){--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}@media (hover:hover){.btn:is(:disabled,[disabled],.btn-disabled):hover{pointer-events:none;background-color:var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{background-color:color-mix(in oklab,var(--color-neutral)20%,transparent)}}.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-border:#0000;--btn-fg:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.btn:is(:disabled,[disabled],.btn-disabled):hover{--btn-fg:color-mix(in oklch,var(--color-base-content)20%,#0000)}}}.btn:is(input[type=checkbox],input[type=radio]){appearance:none}.btn:is(input[type=checkbox],input[type=radio]):after{content:attr(aria-label)}.btn:where(input:checked:not(.filter .btn)){--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content);isolation:isolate}.\\!pointer-events-none{pointer-events:none!important}.collapse:not(td,tr,colgroup){visibility:visible}.collapse{border-radius:var(--radius-box,1rem);isolation:isolate;grid-template-rows:max-content 0fr;width:100%;transition:grid-template-rows .2s;display:grid;position:relative;overflow:hidden}.collapse>input:is([type=checkbox],[type=radio]){appearance:none;opacity:0;z-index:1;grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.collapse:is([open],:focus:not(.collapse-close)),.collapse:not(.collapse-close):has(>input:is([type=checkbox],[type=radio]):checked){grid-template-rows:max-content 1fr}.collapse:is([open],:focus:not(.collapse-close))>.collapse-content,.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){visibility:visible;min-height:fit-content}.collapse:focus-visible,.collapse:has(>input:is([type=checkbox],[type=radio]):focus-visible){outline-color:var(--color-base-content);outline-offset:2px;outline-width:2px;outline-style:solid}.collapse:not(.collapse-close)>input[type=checkbox],.collapse:not(.collapse-close)>input[type=radio]:not(:checked),.collapse:not(.collapse-close)>.collapse-title{cursor:pointer}.collapse:focus:not(.collapse-close,.collapse[open])>.collapse-title{cursor:unset}.collapse:is([open],:focus:not(.collapse-close))>:where(.collapse-content),.collapse:not(.collapse-close)>:where(input:is([type=checkbox],[type=radio]):checked~.collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.collapse[open].collapse-arrow>.collapse-title:after,.collapse.collapse-open.collapse-arrow>.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse.collapse-open.collapse-plus>.collapse-title:after{content:"−"}.collapse.collapse-arrow:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-arrow:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{transform:translateY(-50%)rotate(225deg)}.collapse[open].collapse-plus>.collapse-title:after,.collapse.collapse-plus:focus:not(.collapse-close)>.collapse-title:after,.collapse.collapse-plus:not(.collapse-close)>input:is([type=checkbox],[type=radio]):checked~.collapse-title:after{content:"−"}.collapse:is(details){width:100%}.collapse:is(details) summary{display:block;position:relative}.collapse:is(details) summary::-webkit-details-marker{display:none}.collapse:is(details) summary{outline:none}.collapse-content{visibility:hidden;min-height:0;cursor:unset;grid-row-start:2;grid-column-start:1;padding-left:1rem;padding-right:1rem;transition:visibility .2s,padding .2s ease-out,background-color .2s ease-out}.collapse{visibility:collapse}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.range{appearance:none;webkit-appearance:none;--range-thumb:var(--color-base-100);--range-thumb-size:calc(var(--size-selector,.25rem)*6);--range-progress:currentColor;--range-fill:1;--range-p:.25rem;--range-bg:currentColor}@supports (color:color-mix(in lab,red,red)){.range{--range-bg:color-mix(in oklab,currentColor 10%,#0000)}}.range{cursor:pointer;vertical-align:middle;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));width:clamp(3rem,20rem,100%);height:var(--range-thumb-size);background-color:#0000;border:none;overflow:hidden}[dir=rtl] .range{--range-dir:-1}.range:focus{outline:none}.range:focus-visible{outline-offset:2px;outline:2px solid}.range::-webkit-slider-runnable-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}@media (forced-colors:active){.range::-webkit-slider-runnable-track{border:1px solid}.range::-moz-range-track{border:1px solid}}.range::-webkit-slider-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;appearance:none;webkit-appearance:none;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%;transform:translateY(-50%)}@supports (color:color-mix(in lab,red,red)){.range::-webkit-slider-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range::-moz-range-track{background-color:var(--range-bg);border-radius:var(--radius-selector);width:100%;height:calc(var(--range-thumb-size)*.5)}.range::-moz-range-thumb{box-sizing:border-box;border-radius:calc(var(--radius-selector) + min(var(--range-p),var(--radius-selector-max)));height:var(--range-thumb-size);width:var(--range-thumb-size);border:var(--range-p)solid;color:var(--range-progress);box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor,0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill));background-color:currentColor;position:relative;top:50%}@supports (color:color-mix(in lab,red,red)){.range::-moz-range-thumb{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000),0 0 0 2rem var(--range-thumb) inset,calc((var(--range-dir,1)*-100rem) - (var(--range-dir,1)*var(--range-thumb-size)/2)) 0 0 calc(100rem*var(--range-fill))}}.range:disabled{cursor:not-allowed;opacity:.3}.select{border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;text-overflow:ellipsis;box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-image:linear-gradient(45deg,#0000 50%,currentColor 50%),linear-gradient(135deg,currentColor 50%,#0000 50%);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.375rem;padding-inline:1rem 1.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.select{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.select{border-color:var(--input-color);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.select{--size:calc(var(--size-field,.25rem)*10)}[dir=rtl] .select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.select select{appearance:none;background:inherit;border-radius:inherit;border-style:none;width:calc(100% + 2.75rem);height:calc(100% - 2px);margin-inline:-1rem -1.75rem;padding-inline:1rem 1.75rem}.select select:focus,.select select:focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.select select:focus,.select select:focus-within{outline-offset:2px;outline:2px solid #0000}}.select select:not(:last-child){background-image:none;margin-inline-end:-1.375rem}.select:focus,.select:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.select:focus,.select:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.select:focus,.select:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.select:has(>select[disabled]),.select:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.select:has(>select[disabled]),.select:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.select:has(>select[disabled]),.select:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.select:has(>select[disabled])>select[disabled]{cursor:not-allowed}.collapse-title{grid-row-start:1;grid-column-start:1;width:100%;min-height:1lh;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out;position:relative}.checkbox{border:var(--border)solid var(--input-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.checkbox{border:var(--border)solid var(--input-color,color-mix(in oklab,var(--color-base-content)20%,#0000))}}.checkbox{cursor:pointer;appearance:none;border-radius:var(--radius-selector);vertical-align:middle;color:var(--color-base-content);box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 0 #0000 inset,0 0 #0000;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);flex-shrink:0;padding:.25rem;transition:background-color .2s,box-shadow .2s;display:inline-block;position:relative}.checkbox:before{--tw-content:"";content:var(--tw-content);opacity:0;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,70% 80%,70% 100%);width:100%;height:100%;box-shadow:0 3px oklch(100% 0 0/calc(var(--depth)*.1)) inset;background-color:currentColor;font-size:1rem;line-height:.75;transition:clip-path .3s .1s,opacity .1s .1s,rotate .3s .1s,translate .3s .1s;display:block;rotate:45deg}.checkbox:focus-visible{outline:2px solid var(--input-color,currentColor);outline-offset:2px}.checkbox:checked,.checkbox[aria-checked=true]{background-color:var(--input-color,#0000);box-shadow:0 0 #0000 inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1))}:is(.checkbox:checked,.checkbox[aria-checked=true]):before{clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 0%,70% 0%,70% 100%);opacity:1}@media (forced-colors:active){:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}@media print{:is(.checkbox:checked,.checkbox[aria-checked=true]):before{--tw-content:"✔︎";clip-path:none;background-color:#0000;rotate:none}}.checkbox:indeterminate:before{opacity:1;clip-path:polygon(20% 100%,20% 80%,50% 80%,50% 80%,80% 80%,80% 100%);translate:0 -35%;rotate:none}.checkbox:disabled{cursor:not-allowed;opacity:.2}.radio{cursor:pointer;appearance:none;vertical-align:middle;border:var(--border)solid var(--input-color,currentColor);border-radius:3.40282e38px;flex-shrink:0;padding:.25rem;display:inline-block;position:relative}@supports (color:color-mix(in lab,red,red)){.radio{border:var(--border)solid var(--input-color,color-mix(in srgb,currentColor 20%,#0000))}}.radio{box-shadow:0 1px oklch(0% 0 0/calc(var(--depth)*.1)) inset;--size:calc(var(--size-selector,.25rem)*6);width:var(--size);height:var(--size);color:var(--input-color,currentColor)}.radio:before{--tw-content:"";content:var(--tw-content);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);border-radius:3.40282e38px;width:100%;height:100%;display:block}.radio:focus-visible{outline:2px solid}.radio:checked,.radio[aria-checked=true]{background-color:var(--color-base-100);border-color:currentColor;animation:.2s ease-out radio}:is(.radio:checked,.radio[aria-checked=true]):before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px oklch(0% 0 0/calc(var(--depth)*.1));background-color:currentColor}@media (forced-colors:active){:is(.radio:checked,.radio[aria-checked=true]):before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{:is(.radio:checked,.radio[aria-checked=true]):before{outline-offset:-1rem;outline:.25rem solid}}.radio:disabled{cursor:not-allowed;opacity:.2}.absolute{position:absolute}.fixed{position:fixed}.relative{position:relative}.-top-3{top:calc(var(--spacing)*-3)}.top-0{top:calc(var(--spacing)*0)}.top-2{top:calc(var(--spacing)*2)}.-right-3{right:calc(var(--spacing)*-3)}.right-2{right:calc(var(--spacing)*2)}.right-\\[10\\%\\]{right:10%}.right-\\[70\\%\\]{right:70%}.left-\\[10\\%\\]{left:10%}.left-\\[70\\%\\]{left:70%}.modal-backdrop{color:#0000;z-index:-1;grid-row-start:1;grid-column-start:1;place-self:stretch stretch;display:grid}.modal-backdrop button{cursor:pointer}.-z-1{z-index:-1}.z-1{z-index:1}.z-2{z-index:2}.z-10{z-index:10}.col-span-1{grid-column:span 1/span 1}.col-span-2{grid-column:span 2/span 2}.col-span-full{grid-column:1/-1}.modal-box{background-color:var(--color-base-100);border-top-left-radius:var(--modal-tl,var(--radius-box));border-top-right-radius:var(--modal-tr,var(--radius-box));border-bottom-left-radius:var(--modal-bl,var(--radius-box));border-bottom-right-radius:var(--modal-br,var(--radius-box));opacity:0;overscroll-behavior:contain;grid-row-start:1;grid-column-start:1;width:91.6667%;max-width:32rem;max-height:100vh;padding:1.5rem;transition:translate .3s ease-out,scale .3s ease-out,opacity .2s ease-out 50ms,box-shadow .3s ease-out;overflow-y:auto;scale:95%;box-shadow:0 25px 50px -12px #00000040}.col-start-1{grid-column-start:1}.col-start-2{grid-column-start:2}.col-start-3{grid-column-start:3}.col-start-4{grid-column-start:4}.col-start-5{grid-column-start:5}.row-span-full{grid-row:1/-1}.row-start-1{grid-row-start:1}.row-start-2{grid-row-start:2}.row-start-3{grid-row-start:3}.row-start-4{grid-row-start:4}.container{width:100%}@media (min-width:40rem){.container{max-width:40rem}}@media (min-width:48rem){.container{max-width:48rem}}@media (min-width:64rem){.container{max-width:64rem}}@media (min-width:80rem){.container{max-width:80rem}}@media (min-width:96rem){.container{max-width:96rem}}.filter{flex-wrap:wrap;display:flex}.filter input[type=radio]{width:auto}.filter input{opacity:1;transition:margin .1s,opacity .3s,padding .3s,border-width .1s;overflow:hidden;scale:1}.filter input:not(:last-child){margin-inline-end:.25rem}.filter input.filter-reset{aspect-ratio:1}.filter input.filter-reset:after{content:"×"}.filter:not(:has(input:checked:not(.filter-reset))) .filter-reset,.filter:not(:has(input:checked:not(.filter-reset))) input[type=reset],.filter:has(input:checked:not(.filter-reset)) input:not(:checked,.filter-reset,input[type=reset]){opacity:0;border-width:0;width:0;margin-inline:0;padding-inline:0;scale:0}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.modal-action{justify-content:flex-end;gap:.5rem;margin-top:1.5rem;display:flex}.mt-2{margin-top:calc(var(--spacing)*2)}.mt-4{margin-top:calc(var(--spacing)*4)}.-mr-\\[8\\.5px\\]{margin-right:-8.5px}.-mr-\\[9px\\]{margin-right:-9px}.mr-2{margin-right:calc(var(--spacing)*2)}.mr-3{margin-right:calc(var(--spacing)*3)}.mr-\\[9px\\]{margin-right:9px}.mb-2{margin-bottom:calc(var(--spacing)*2)}.mb-4{margin-bottom:calc(var(--spacing)*4)}.mb-6{margin-bottom:calc(var(--spacing)*6)}.mb-8{margin-bottom:calc(var(--spacing)*8)}.-ml-\\[9px\\]{margin-left:-9px}.-ml-\\[12px\\]{margin-left:-12px}.ml-3{margin-left:calc(var(--spacing)*3)}.status{aspect-ratio:1;border-radius:var(--radius-selector);background-color:var(--color-base-content);width:.5rem;height:.5rem;display:inline-block}@supports (color:color-mix(in lab,red,red)){.status{background-color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.status{vertical-align:middle;color:#0000004d;background-position:50%;background-repeat:no-repeat}@supports (color:color-mix(in lab,red,red)){.status{color:#0000004d}@supports (color:color-mix(in lab,red,red)){.status{color:color-mix(in oklab,var(--color-black)30%,transparent)}}}.status{background-image:radial-gradient(circle at 35% 30%,oklch(1 0 0/calc(var(--depth)*.5)),#0000);box-shadow:0 2px 3px -1px}@supports (color:color-mix(in lab,red,red)){.status{box-shadow:0 2px 3px -1px color-mix(in oklab,currentColor calc(var(--depth)*100%),#0000)}}.badge{border-radius:var(--radius-selector);vertical-align:middle;color:var(--badge-fg);border:var(--border)solid var(--badge-color,var(--color-base-200));width:fit-content;padding-inline:calc(.25rem*3 - var(--border));background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);background-color:var(--badge-bg);--badge-bg:var(--badge-color,var(--color-base-100));--badge-fg:var(--color-base-content);--size:calc(var(--size-selector,.25rem)*6);height:var(--size);justify-content:center;align-items:center;gap:.5rem;font-size:.875rem;display:inline-flex}.tabs{--tabs-height:auto;--tabs-direction:row;--tab-height:calc(var(--size-field,.25rem)*10);height:var(--tabs-height);flex-wrap:wrap;flex-direction:var(--tabs-direction);display:flex}.alert{border-radius:var(--radius-box);color:var(--color-base-content);background-color:var(--alert-color,var(--color-base-200));text-align:start;border:var(--border)solid var(--color-base-200);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise);box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px #000,0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08));grid-template-columns:auto;grid-auto-flow:column;justify-content:start;place-items:center start;gap:1rem;padding-block:.75rem;padding-inline:1rem;font-size:.875rem;line-height:1.25rem;display:grid}@supports (color:color-mix(in lab,red,red)){.alert{box-shadow:0 3px 0 -2px oklch(100% 0 0/calc(var(--depth)*.08)) inset,0 1px color-mix(in oklab,color-mix(in oklab,#000 20%,var(--alert-color,var(--color-base-200)))calc(var(--depth)*20%),#0000),0 4px 3px -2px oklch(0% 0 0/calc(var(--depth)*.08))}}.alert:has(:nth-child(2)){grid-template-columns:auto minmax(auto,1fr)}.alert.alert-outline{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none}.alert.alert-dash{color:var(--alert-color);box-shadow:none;background-color:#0000;background-image:none;border-style:dashed}.alert.alert-soft{color:var(--alert-color,var(--color-base-content));background:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{background:color-mix(in oklab,var(--alert-color,var(--color-base-content))8%,var(--color-base-100))}}.alert.alert-soft{border-color:var(--alert-color,var(--color-base-content))}@supports (color:color-mix(in lab,red,red)){.alert.alert-soft{border-color:color-mix(in oklab,var(--alert-color,var(--color-base-content))10%,var(--color-base-100))}}.alert.alert-soft{box-shadow:none;background-image:none}.block{display:block}.flex{display:flex}.grid{display:grid}.inline-block{display:inline-block}.table{display:table}.btn-circle{width:var(--size);height:var(--size);border-radius:3.40282e38px;padding-inline:0}.size-5{width:calc(var(--spacing)*5);height:calc(var(--spacing)*5)}.h-5{height:calc(var(--spacing)*5)}.h-12{height:calc(var(--spacing)*12)}.h-18{height:calc(var(--spacing)*18)}.h-\\[2px\\]{height:2px}.h-\\[12px\\]{height:12px}.h-\\[20px\\]{height:20px}.h-\\[50px\\]{height:50px}.h-full{height:100%}.max-h-\\[85vh\\]{max-height:85vh}.min-h-\\[450px\\]{min-height:450px}.w-1\\/2{width:50%}.w-3\\/4{width:75%}.w-5{width:calc(var(--spacing)*5)}.w-\\[20px\\]{width:20px}.w-\\[50px\\]{width:50px}.w-full{width:100%}.max-w-\\[8ch\\]{max-width:8ch}.max-w-none{max-width:none}.flex-1{flex:1}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}.link{cursor:pointer;text-decoration-line:underline}.link:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.link:focus{outline-offset:2px;outline:2px solid #0000}}.link:focus-visible{outline-offset:2px;outline:2px solid}.list-disc{list-style-type:disc}.grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.grid-cols-\\[1fr_20px_0\\.5fr_20px_1fr\\]{grid-template-columns:1fr 20px .5fr 20px 1fr}.grid-cols-\\[1fr_20px_1fr_20px_1fr\\]{grid-template-columns:1fr 20px 1fr 20px 1fr}.grid-cols-\\[max-content_auto\\]{grid-template-columns:max-content auto}.grid-rows-\\[50px\\]{grid-template-rows:50px}.grid-rows-\\[50px_50px_1fr_80px\\]{grid-template-rows:50px 50px 1fr 80px}.grid-rows-\\[50px_50px_80px\\]{grid-template-rows:50px 50px 80px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-between{justify-content:space-between}.justify-center{justify-content:center}.gap-4{gap:calc(var(--spacing)*4)}.gap-x-2{column-gap:calc(var(--spacing)*2)}.self-center{align-self:center}.self-end{align-self:flex-end}.self-start{align-self:flex-start}.justify-self-center{justify-self:center}.justify-self-end{justify-self:flex-end}.justify-self-start{justify-self:flex-start}.truncate{text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.tabs-box{background-color:var(--color-base-200);--tabs-box-radius:calc(var(--radius-field) + var(--radius-field) + var(--radius-field));border-radius:calc(var(--radius-field) + min(.25rem,var(--tabs-box-radius)));box-shadow:0 -.5px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 .5px oklch(0% 0 0/calc(var(--depth)*.05)) inset;padding:.25rem}.tabs-box .tab{border-radius:var(--radius-field);border-style:none}.tabs-box .tab:focus-visible,.tabs-box .tab:is(label:has(:checked:focus-visible)){outline-offset:2px}.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){background-color:var(--tab-bg,var(--color-base-100));box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px var(--color-neutral),0 1px 6px -4px var(--color-neutral)}@supports (color:color-mix(in lab,red,red)){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){box-shadow:0 1px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px 1px -1px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*50%),#0000),0 1px 6px -4px color-mix(in oklab,var(--color-neutral)calc(var(--depth)*100%),#0000)}}@media (forced-colors:active){.tabs-box>:is(.tab-active,[aria-selected=true]):not(.tab-disabled,[disabled]),.tabs-box>:is(input:checked),.tabs-box>:is(label:has(:checked)){border:1px solid}}.rounded-box{border-radius:var(--radius-box)}.rounded-full{border-radius:3.40282e38px}.rounded-sm{border-radius:var(--radius-sm)}.rounded-xl{border-radius:var(--radius-xl)}.border,.border-1{border-style:var(--tw-border-style);border-width:1px}.border-2{border-style:var(--tw-border-style);border-width:2px}.border-dashed{--tw-border-style:dashed;border-style:dashed}.border-dotted{--tw-border-style:dotted;border-style:dotted}.border-none{--tw-border-style:none;border-style:none}.border-solid{--tw-border-style:solid;border-style:solid}.border-\\(--color-ocean-gray-100\\){border-color:var(--color-ocean-gray-100)}.border-\\(--color-ocean-gray-200\\){border-color:var(--color-ocean-gray-200)}.border-\\(--color-primary\\){border-color:var(--color-primary)}.border-\\[var\\(--color-gray-200\\)\\]{border-color:var(--color-gray-200)}.border-\\[var\\(--color-primary\\)\\]{border-color:var(--color-primary)}.\\!bg-\\(--color-ocean-gray-75\\){background-color:var(--color-ocean-gray-75)!important}.bg-\\(--color-ocean-gray-25\\){background-color:var(--color-ocean-gray-25)}.bg-\\(--color-ocean-gray-50\\){background-color:var(--color-ocean-gray-50)}.bg-\\(--color-ocean-gray-100\\){background-color:var(--color-ocean-gray-100)}.bg-\\(--color-primary\\){background-color:var(--color-primary)}.bg-base-100{background-color:var(--color-base-100)}.radio-sm{padding:.1875rem}.radio-sm[type=radio]{--size:calc(var(--size-selector,.25rem)*5)}.p-0{padding:calc(var(--spacing)*0)}.p-1{padding:calc(var(--spacing)*1)}.p-3{padding:calc(var(--spacing)*3)}.p-4{padding:calc(var(--spacing)*4)}.px-2{padding-inline:calc(var(--spacing)*2)}.px-5{padding-inline:calc(var(--spacing)*5)}.py-1{padding-block:calc(var(--spacing)*1)}.ps-5{padding-inline-start:calc(var(--spacing)*5)}.pt-1{padding-top:calc(var(--spacing)*1)}.pl-5{padding-left:calc(var(--spacing)*5)}.text-center{text-align:center}.text-lg{font-size:var(--text-lg);line-height:var(--tw-leading,var(--text-lg--line-height))}.text-sm{font-size:var(--text-sm);line-height:var(--tw-leading,var(--text-sm--line-height))}.text-xs{font-size:var(--text-xs);line-height:var(--tw-leading,var(--text-xs--line-height))}.font-bold{--tw-font-weight:var(--font-weight-bold);font-weight:var(--font-weight-bold)}.font-medium{--tw-font-weight:var(--font-weight-medium);font-weight:var(--font-weight-medium)}.font-semibold{--tw-font-weight:var(--font-weight-semibold);font-weight:var(--font-weight-semibold)}.text-\\(--color-ocean-gray-100\\){color:var(--color-ocean-gray-100)}.text-\\(--color-ocean-gray-200\\){color:var(--color-ocean-gray-200)}.text-\\(--color-primary\\){color:var(--color-primary)}.text-white{color:var(--color-white)}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none}.btn-ghost:not(.btn-active,:hover,:active:focus,:focus-visible):not(:disabled,[disabled],.btn-disabled){--btn-fg:currentColor;outline-color:currentColor}@media (hover:none){.btn-ghost:hover:not(.btn-active,:active,:focus-visible,:disabled,[disabled],.btn-disabled){--btn-shadow:"";--btn-bg:#0000;--btn-border:#0000;--btn-noise:none;--btn-fg:currentColor}}.filter{filter:var(--tw-blur,)var(--tw-brightness,)var(--tw-contrast,)var(--tw-grayscale,)var(--tw-hue-rotate,)var(--tw-invert,)var(--tw-saturate,)var(--tw-sepia,)var(--tw-drop-shadow,)}.transition{transition-property:color,background-color,border-color,outline-color,text-decoration-color,fill,stroke,--tw-gradient-from,--tw-gradient-via,--tw-gradient-to,opacity,box-shadow,transform,translate,scale,rotate,filter,-webkit-backdrop-filter,backdrop-filter,display,visibility,content-visibility,overlay,pointer-events;transition-timing-function:var(--tw-ease,var(--default-transition-timing-function));transition-duration:var(--tw-duration,var(--default-transition-duration))}.btn-sm{--fontsize:.75rem;--btn-p:.75rem;--size:calc(var(--size-field,.25rem)*8)}.btn-primary{--btn-color:var(--color-primary);--btn-fg:var(--color-primary-content)}:is(.\\*\\:pointer-events-auto>*){pointer-events:auto}.after\\:start-0:after{content:var(--tw-content);inset-inline-start:calc(var(--spacing)*0)}.after\\:\\!top-3:after{content:var(--tw-content);top:calc(var(--spacing)*3)!important}@media (hover:hover){.hover\\:cursor-pointer:hover{cursor:pointer}}.disabled\\:text-\\(--color-ocean-gray-300\\):disabled{color:var(--color-ocean-gray-300)}.\\[\\&_dt\\]\\:mr-1 dt{margin-right:calc(var(--spacing)*1)}.\\[\\&_dt\\,dd\\]\\:inline dt,.\\[\\&_dt\\,dd\\]\\:inline dd{display:inline}.\\[\\&\\>dt\\]\\:text-right>dt{text-align:right}}:root{--color-ocean-gray-00:#fff;--color-ocean-gray-25:#fafbfb;--color-ocean-gray-50:#f5f6f7;--color-ocean-gray-75:#eaeeef;--color-ocean-gray-100:#e1e4e6;--color-ocean-gray-150:#c6ced1;--color-ocean-gray-200:#bac1c4;--color-ocean-gray-250:#9fadb2;--color-ocean-gray-300:#889499;--color-ocean-gray-350:#72858c;--color-ocean-gray-400:#617177;--color-ocean-gray-450:#3f555e;--color-ocean-gray-500:#394d55;--color-ocean-gray-550:#34464d;--color-ocean-gray-600:#2e3e44;--color-ocean-gray-650:#27353b;--color-ocean-gray-700:#222e33;--color-ocean-gray-750:#1f272b;--color-ocean-gray-800:#171f22;--color-ocean-gray-850:#11171a;--color-ocean-gray-900:#0b0f11;--color-chart-1:#f7931e;--color-chart-2:#40535b;--color-chart-3:#2798aa;--color-chart-4:#6da89c;--color-chart-5:#a4cadd;--color-chart-6:#97b42d;--color-chart-7:#ffcb05;--color-chart-8:#ee652e;--color-chart-9:#528694;--color-chart-10:#a10f3b}@keyframes progress{50%{background-position-x:-115%}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@keyframes dropdown{0%{opacity:0}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}@property --tw-border-style{syntax:"*";inherits:false;initial-value:solid}@property --tw-font-weight{syntax:"*";inherits:false}@property --tw-blur{syntax:"*";inherits:false}@property --tw-brightness{syntax:"*";inherits:false}@property --tw-contrast{syntax:"*";inherits:false}@property --tw-grayscale{syntax:"*";inherits:false}@property --tw-hue-rotate{syntax:"*";inherits:false}@property --tw-invert{syntax:"*";inherits:false}@property --tw-opacity{syntax:"*";inherits:false}@property --tw-saturate{syntax:"*";inherits:false}@property --tw-sepia{syntax:"*";inherits:false}@property --tw-drop-shadow{syntax:"*";inherits:false}@property --tw-drop-shadow-color{syntax:"*";inherits:false}@property --tw-drop-shadow-alpha{syntax:"<percentage>";inherits:false;initial-value:100%}@property --tw-drop-shadow-size{syntax:"*";inherits:false}@property --tw-content{syntax:"*";inherits:false;initial-value:""}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Es(t) {
  const r = /* @__PURE__ */ Object.create(null);
  for (const i of t.split(",")) r[i] = 1;
  return (i) => i in r;
}
const Nt = {}, ko = [], Xn = () => {
}, uc = () => !1, fi = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // uppercase letter
(t.charCodeAt(2) > 122 || t.charCodeAt(2) < 97), Ds = (t) => t.startsWith("onUpdate:"), an = Object.assign, Rs = (t, r) => {
  const i = t.indexOf(r);
  i > -1 && t.splice(i, 1);
}, cc = Object.prototype.hasOwnProperty, St = (t, r) => cc.call(t, r), tt = Array.isArray, Lo = (t) => Fa(t) === "[object Map]", Ko = (t) => Fa(t) === "[object Set]", el = (t) => Fa(t) === "[object Date]", it = (t) => typeof t == "function", Ft = (t) => typeof t == "string", Vn = (t) => typeof t == "symbol", At = (t) => t !== null && typeof t == "object", Gl = (t) => (At(t) || it(t)) && it(t.then) && it(t.catch), Hl = Object.prototype.toString, Fa = (t) => Hl.call(t), dc = (t) => Fa(t).slice(8, -1), zl = (t) => Fa(t) === "[object Object]", As = (t) => Ft(t) && t !== "NaN" && t[0] !== "-" && "" + parseInt(t, 10) === t, Ca = /* @__PURE__ */ Es(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), pi = (t) => {
  const r = /* @__PURE__ */ Object.create(null);
  return (i) => r[i] || (r[i] = t(i));
}, fc = /-(\w)/g, Pn = pi(
  (t) => t.replace(fc, (r, i) => i ? i.toUpperCase() : "")
), pc = /\B([A-Z])/g, Eo = pi(
  (t) => t.replace(pc, "-$1").toLowerCase()
), hi = pi((t) => t.charAt(0).toUpperCase() + t.slice(1)), es = pi(
  (t) => t ? `on${hi(t)}` : ""
), Mr = (t, r) => !Object.is(t, r), Ya = (t, ...r) => {
  for (let i = 0; i < t.length; i++)
    t[i](...r);
}, ds = (t, r, i, l = !1) => {
  Object.defineProperty(t, r, {
    configurable: !0,
    enumerable: !1,
    writable: l,
    value: i
  });
}, ti = (t) => {
  const r = parseFloat(t);
  return isNaN(r) ? t : r;
};
let tl;
const mi = () => tl || (tl = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function kr(t) {
  if (tt(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++) {
      const l = t[i], d = Ft(l) ? yc(l) : kr(l);
      if (d)
        for (const f in d)
          r[f] = d[f];
    }
    return r;
  } else if (Ft(t) || At(t))
    return t;
}
const hc = /;(?![^(]*\))/g, mc = /:([^]+)/, vc = /\/\*[^]*?\*\//g;
function yc(t) {
  const r = {};
  return t.replace(vc, "").split(hc).forEach((i) => {
    if (i) {
      const l = i.split(mc);
      l.length > 1 && (r[l[0].trim()] = l[1].trim());
    }
  }), r;
}
function It(t) {
  let r = "";
  if (Ft(t))
    r = t;
  else if (tt(t))
    for (let i = 0; i < t.length; i++) {
      const l = It(t[i]);
      l && (r += l + " ");
    }
  else if (At(t))
    for (const i in t)
      t[i] && (r += i + " ");
  return r.trim();
}
function gc(t) {
  if (!t) return null;
  let { class: r, style: i } = t;
  return r && !Ft(r) && (t.class = It(r)), i && (t.style = kr(i)), t;
}
const bc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", wc = /* @__PURE__ */ Es(bc);
function Yl(t) {
  return !!t || t === "";
}
function _c(t, r) {
  if (t.length !== r.length) return !1;
  let i = !0;
  for (let l = 0; i && l < t.length; l++)
    i = Oo(t[l], r[l]);
  return i;
}
function Oo(t, r) {
  if (t === r) return !0;
  let i = el(t), l = el(r);
  if (i || l)
    return i && l ? t.getTime() === r.getTime() : !1;
  if (i = Vn(t), l = Vn(r), i || l)
    return t === r;
  if (i = tt(t), l = tt(r), i || l)
    return i && l ? _c(t, r) : !1;
  if (i = At(t), l = At(r), i || l) {
    if (!i || !l)
      return !1;
    const d = Object.keys(t).length, f = Object.keys(r).length;
    if (d !== f)
      return !1;
    for (const c in t) {
      const m = t.hasOwnProperty(c), g = r.hasOwnProperty(c);
      if (m && !g || !m && g || !Oo(t[c], r[c]))
        return !1;
    }
  }
  return String(t) === String(r);
}
function Ps(t, r) {
  return t.findIndex((i) => Oo(i, r));
}
const Xl = (t) => !!(t && t.__v_isRef === !0), ce = (t) => Ft(t) ? t : t == null ? "" : tt(t) || At(t) && (t.toString === Hl || !it(t.toString)) ? Xl(t) ? ce(t.value) : JSON.stringify(t, Ql, 2) : String(t), Ql = (t, r) => Xl(r) ? Ql(t, r.value) : Lo(r) ? {
  [`Map(${r.size})`]: [...r.entries()].reduce(
    (i, [l, d], f) => (i[ts(l, f) + " =>"] = d, i),
    {}
  )
} : Ko(r) ? {
  [`Set(${r.size})`]: [...r.values()].map((i) => ts(i))
} : Vn(r) ? ts(r) : At(r) && !tt(r) && !zl(r) ? String(r) : r, ts = (t, r = "") => {
  var i;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Vn(t) ? `Symbol(${(i = t.description) != null ? i : r})` : t
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let rn;
class Jl {
  constructor(r = !1) {
    this.detached = r, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = rn, !r && rn && (this.index = (rn.scopes || (rn.scopes = [])).push(
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
      const i = rn;
      try {
        return rn = this, r();
      } finally {
        rn = i;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = rn, rn = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (rn = this.prevScope, this.prevScope = void 0);
  }
  stop(r) {
    if (this._active) {
      this._active = !1;
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++)
        this.effects[i].stop();
      for (this.effects.length = 0, i = 0, l = this.cleanups.length; i < l; i++)
        this.cleanups[i]();
      if (this.cleanups.length = 0, this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++)
          this.scopes[i].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !r) {
        const d = this.parent.scopes.pop();
        d && d !== this && (this.parent.scopes[this.index] = d, d.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Zl(t) {
  return new Jl(t);
}
function ks() {
  return rn;
}
function eu(t, r = !1) {
  rn && rn.cleanups.push(t);
}
let Rt;
const ns = /* @__PURE__ */ new WeakSet();
class tu {
  constructor(r) {
    this.fn = r, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, rn && rn.active && rn.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ns.has(this) && (ns.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ru(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, nl(this), ou(this);
    const r = Rt, i = Un;
    Rt = this, Un = !0;
    try {
      return this.fn();
    } finally {
      au(this), Rt = r, Un = i, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let r = this.deps; r; r = r.nextDep)
        $s(r);
      this.deps = this.depsTail = void 0, nl(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ns.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    fs(this) && this.run();
  }
  get dirty() {
    return fs(this);
  }
}
let nu = 0, Sa, Ia;
function ru(t, r = !1) {
  if (t.flags |= 8, r) {
    t.next = Ia, Ia = t;
    return;
  }
  t.next = Sa, Sa = t;
}
function Ls() {
  nu++;
}
function js() {
  if (--nu > 0)
    return;
  if (Ia) {
    let r = Ia;
    for (Ia = void 0; r; ) {
      const i = r.next;
      r.next = void 0, r.flags &= -9, r = i;
    }
  }
  let t;
  for (; Sa; ) {
    let r = Sa;
    for (Sa = void 0; r; ) {
      const i = r.next;
      if (r.next = void 0, r.flags &= -9, r.flags & 1)
        try {
          r.trigger();
        } catch (l) {
          t || (t = l);
        }
      r = i;
    }
  }
  if (t) throw t;
}
function ou(t) {
  for (let r = t.deps; r; r = r.nextDep)
    r.version = -1, r.prevActiveLink = r.dep.activeLink, r.dep.activeLink = r;
}
function au(t) {
  let r, i = t.depsTail, l = i;
  for (; l; ) {
    const d = l.prevDep;
    l.version === -1 ? (l === i && (i = d), $s(l), xc(l)) : r = l, l.dep.activeLink = l.prevActiveLink, l.prevActiveLink = void 0, l = d;
  }
  t.deps = r, t.depsTail = i;
}
function fs(t) {
  for (let r = t.deps; r; r = r.nextDep)
    if (r.dep.version !== r.version || r.dep.computed && (iu(r.dep.computed) || r.dep.version !== r.version))
      return !0;
  return !!t._dirty;
}
function iu(t) {
  if (t.flags & 4 && !(t.flags & 16) || (t.flags &= -17, t.globalVersion === Aa) || (t.globalVersion = Aa, !t.isSSR && t.flags & 128 && (!t.deps && !t._dirty || !fs(t))))
    return;
  t.flags |= 2;
  const r = t.dep, i = Rt, l = Un;
  Rt = t, Un = !0;
  try {
    ou(t);
    const d = t.fn(t._value);
    (r.version === 0 || Mr(d, t._value)) && (t.flags |= 128, t._value = d, r.version++);
  } catch (d) {
    throw r.version++, d;
  } finally {
    Rt = i, Un = l, au(t), t.flags &= -3;
  }
}
function $s(t, r = !1) {
  const { dep: i, prevSub: l, nextSub: d } = t;
  if (l && (l.nextSub = d, t.prevSub = void 0), d && (d.prevSub = l, t.nextSub = void 0), i.subs === t && (i.subs = l, !l && i.computed)) {
    i.computed.flags &= -5;
    for (let f = i.computed.deps; f; f = f.nextDep)
      $s(f, !0);
  }
  !r && !--i.sc && i.map && i.map.delete(i.key);
}
function xc(t) {
  const { prevDep: r, nextDep: i } = t;
  r && (r.nextDep = i, t.prevDep = void 0), i && (i.prevDep = r, t.nextDep = void 0);
}
let Un = !0;
const su = [];
function Rr() {
  su.push(Un), Un = !1;
}
function Ar() {
  const t = su.pop();
  Un = t === void 0 ? !0 : t;
}
function nl(t) {
  const { cleanup: r } = t;
  if (t.cleanup = void 0, r) {
    const i = Rt;
    Rt = void 0;
    try {
      r();
    } finally {
      Rt = i;
    }
  }
}
let Aa = 0;
class Cc {
  constructor(r, i) {
    this.sub = r, this.dep = i, this.version = i.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Fs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(r) {
    this.computed = r, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(r) {
    if (!Rt || !Un || Rt === this.computed)
      return;
    let i = this.activeLink;
    if (i === void 0 || i.sub !== Rt)
      i = this.activeLink = new Cc(Rt, this), Rt.deps ? (i.prevDep = Rt.depsTail, Rt.depsTail.nextDep = i, Rt.depsTail = i) : Rt.deps = Rt.depsTail = i, lu(i);
    else if (i.version === -1 && (i.version = this.version, i.nextDep)) {
      const l = i.nextDep;
      l.prevDep = i.prevDep, i.prevDep && (i.prevDep.nextDep = l), i.prevDep = Rt.depsTail, i.nextDep = void 0, Rt.depsTail.nextDep = i, Rt.depsTail = i, Rt.deps === i && (Rt.deps = l);
    }
    return i;
  }
  trigger(r) {
    this.version++, Aa++, this.notify(r);
  }
  notify(r) {
    Ls();
    try {
      for (let i = this.subs; i; i = i.prevSub)
        i.sub.notify() && i.sub.dep.notify();
    } finally {
      js();
    }
  }
}
function lu(t) {
  if (t.dep.sc++, t.sub.flags & 4) {
    const r = t.dep.computed;
    if (r && !t.dep.subs) {
      r.flags |= 20;
      for (let l = r.deps; l; l = l.nextDep)
        lu(l);
    }
    const i = t.dep.subs;
    i !== t && (t.prevSub = i, i && (i.nextSub = t)), t.dep.subs = t;
  }
}
const ni = /* @__PURE__ */ new WeakMap(), So = Symbol(
  ""
), ps = Symbol(
  ""
), Pa = Symbol(
  ""
);
function on(t, r, i) {
  if (Un && Rt) {
    let l = ni.get(t);
    l || ni.set(t, l = /* @__PURE__ */ new Map());
    let d = l.get(i);
    d || (l.set(i, d = new Fs()), d.map = l, d.key = i), d.track();
  }
}
function Or(t, r, i, l, d, f) {
  const c = ni.get(t);
  if (!c) {
    Aa++;
    return;
  }
  const m = (g) => {
    g && g.trigger();
  };
  if (Ls(), r === "clear")
    c.forEach(m);
  else {
    const g = tt(t), q = g && As(i);
    if (g && i === "length") {
      const B = Number(l);
      c.forEach((G, re) => {
        (re === "length" || re === Pa || !Vn(re) && re >= B) && m(G);
      });
    } else
      switch ((i !== void 0 || c.has(void 0)) && m(c.get(i)), q && m(c.get(Pa)), r) {
        case "add":
          g ? q && m(c.get("length")) : (m(c.get(So)), Lo(t) && m(c.get(ps)));
          break;
        case "delete":
          g || (m(c.get(So)), Lo(t) && m(c.get(ps)));
          break;
        case "set":
          Lo(t) && m(c.get(So));
          break;
      }
  }
  js();
}
function Sc(t, r) {
  const i = ni.get(t);
  return i && i.get(r);
}
function Ro(t) {
  const r = _t(t);
  return r === t ? r : (on(r, "iterate", Pa), Dn(t) ? r : r.map(tn));
}
function vi(t) {
  return on(t = _t(t), "iterate", Pa), t;
}
const Ic = {
  __proto__: null,
  [Symbol.iterator]() {
    return rs(this, Symbol.iterator, tn);
  },
  concat(...t) {
    return Ro(this).concat(
      ...t.map((r) => tt(r) ? Ro(r) : r)
    );
  },
  entries() {
    return rs(this, "entries", (t) => (t[1] = tn(t[1]), t));
  },
  every(t, r) {
    return Sr(this, "every", t, r, void 0, arguments);
  },
  filter(t, r) {
    return Sr(this, "filter", t, r, (i) => i.map(tn), arguments);
  },
  find(t, r) {
    return Sr(this, "find", t, r, tn, arguments);
  },
  findIndex(t, r) {
    return Sr(this, "findIndex", t, r, void 0, arguments);
  },
  findLast(t, r) {
    return Sr(this, "findLast", t, r, tn, arguments);
  },
  findLastIndex(t, r) {
    return Sr(this, "findLastIndex", t, r, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(t, r) {
    return Sr(this, "forEach", t, r, void 0, arguments);
  },
  includes(...t) {
    return os(this, "includes", t);
  },
  indexOf(...t) {
    return os(this, "indexOf", t);
  },
  join(t) {
    return Ro(this).join(t);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...t) {
    return os(this, "lastIndexOf", t);
  },
  map(t, r) {
    return Sr(this, "map", t, r, void 0, arguments);
  },
  pop() {
    return wa(this, "pop");
  },
  push(...t) {
    return wa(this, "push", t);
  },
  reduce(t, ...r) {
    return rl(this, "reduce", t, r);
  },
  reduceRight(t, ...r) {
    return rl(this, "reduceRight", t, r);
  },
  shift() {
    return wa(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(t, r) {
    return Sr(this, "some", t, r, void 0, arguments);
  },
  splice(...t) {
    return wa(this, "splice", t);
  },
  toReversed() {
    return Ro(this).toReversed();
  },
  toSorted(t) {
    return Ro(this).toSorted(t);
  },
  toSpliced(...t) {
    return Ro(this).toSpliced(...t);
  },
  unshift(...t) {
    return wa(this, "unshift", t);
  },
  values() {
    return rs(this, "values", tn);
  }
};
function rs(t, r, i) {
  const l = vi(t), d = l[r]();
  return l !== t && !Dn(t) && (d._next = d.next, d.next = () => {
    const f = d._next();
    return f.value && (f.value = i(f.value)), f;
  }), d;
}
const Oc = Array.prototype;
function Sr(t, r, i, l, d, f) {
  const c = vi(t), m = c !== t && !Dn(t), g = c[r];
  if (g !== Oc[r]) {
    const G = g.apply(t, f);
    return m ? tn(G) : G;
  }
  let q = i;
  c !== t && (m ? q = function(G, re) {
    return i.call(this, tn(G), re, t);
  } : i.length > 2 && (q = function(G, re) {
    return i.call(this, G, re, t);
  }));
  const B = g.call(c, q, l);
  return m && d ? d(B) : B;
}
function rl(t, r, i, l) {
  const d = vi(t);
  let f = i;
  return d !== t && (Dn(t) ? i.length > 3 && (f = function(c, m, g) {
    return i.call(this, c, m, g, t);
  }) : f = function(c, m, g) {
    return i.call(this, c, tn(m), g, t);
  }), d[r](f, ...l);
}
function os(t, r, i) {
  const l = _t(t);
  on(l, "iterate", Pa);
  const d = l[r](...i);
  return (d === -1 || d === !1) && Ms(i[0]) ? (i[0] = _t(i[0]), l[r](...i)) : d;
}
function wa(t, r, i = []) {
  Rr(), Ls();
  const l = _t(t)[r].apply(t, i);
  return js(), Ar(), l;
}
const Nc = /* @__PURE__ */ Es("__proto__,__v_isRef,__isVue"), uu = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((t) => t !== "arguments" && t !== "caller").map((t) => Symbol[t]).filter(Vn)
);
function Tc(t) {
  Vn(t) || (t = String(t));
  const r = _t(this);
  return on(r, "has", t), r.hasOwnProperty(t);
}
class cu {
  constructor(r = !1, i = !1) {
    this._isReadonly = r, this._isShallow = i;
  }
  get(r, i, l) {
    if (i === "__v_skip") return r.__v_skip;
    const d = this._isReadonly, f = this._isShallow;
    if (i === "__v_isReactive")
      return !d;
    if (i === "__v_isReadonly")
      return d;
    if (i === "__v_isShallow")
      return f;
    if (i === "__v_raw")
      return l === (d ? f ? vu : mu : f ? hu : pu).get(r) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(r) === Object.getPrototypeOf(l) ? r : void 0;
    const c = tt(r);
    if (!d) {
      let g;
      if (c && (g = Ic[i]))
        return g;
      if (i === "hasOwnProperty")
        return Tc;
    }
    const m = Reflect.get(
      r,
      i,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      $t(r) ? r : l
    );
    return (Vn(i) ? uu.has(i) : Nc(i)) || (d || on(r, "get", i), f) ? m : $t(m) ? c && As(i) ? m : m.value : At(m) ? d ? yu(m) : Ma(m) : m;
  }
}
class du extends cu {
  constructor(r = !1) {
    super(!1, r);
  }
  set(r, i, l, d) {
    let f = r[i];
    if (!this._isShallow) {
      const g = Br(f);
      if (!Dn(l) && !Br(l) && (f = _t(f), l = _t(l)), !tt(r) && $t(f) && !$t(l))
        return g ? !1 : (f.value = l, !0);
    }
    const c = tt(r) && As(i) ? Number(i) < r.length : St(r, i), m = Reflect.set(
      r,
      i,
      l,
      $t(r) ? r : d
    );
    return r === _t(d) && (c ? Mr(l, f) && Or(r, "set", i, l) : Or(r, "add", i, l)), m;
  }
  deleteProperty(r, i) {
    const l = St(r, i);
    r[i];
    const d = Reflect.deleteProperty(r, i);
    return d && l && Or(r, "delete", i, void 0), d;
  }
  has(r, i) {
    const l = Reflect.has(r, i);
    return (!Vn(i) || !uu.has(i)) && on(r, "has", i), l;
  }
  ownKeys(r) {
    return on(
      r,
      "iterate",
      tt(r) ? "length" : So
    ), Reflect.ownKeys(r);
  }
}
class fu extends cu {
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
const Ec = /* @__PURE__ */ new du(), Dc = /* @__PURE__ */ new fu(), Rc = /* @__PURE__ */ new du(!0), Ac = /* @__PURE__ */ new fu(!0), hs = (t) => t, Va = (t) => Reflect.getPrototypeOf(t);
function Pc(t, r, i) {
  return function(...l) {
    const d = this.__v_raw, f = _t(d), c = Lo(f), m = t === "entries" || t === Symbol.iterator && c, g = t === "keys" && c, q = d[t](...l), B = i ? hs : r ? ri : tn;
    return !r && on(
      f,
      "iterate",
      g ? ps : So
    ), {
      // iterator protocol
      next() {
        const { value: G, done: re } = q.next();
        return re ? { value: G, done: re } : {
          value: m ? [B(G[0]), B(G[1])] : B(G),
          done: re
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function Wa(t) {
  return function(...r) {
    return t === "delete" ? !1 : t === "clear" ? void 0 : this;
  };
}
function kc(t, r) {
  const i = {
    get(d) {
      const f = this.__v_raw, c = _t(f), m = _t(d);
      t || (Mr(d, m) && on(c, "get", d), on(c, "get", m));
      const { has: g } = Va(c), q = r ? hs : t ? ri : tn;
      if (g.call(c, d))
        return q(f.get(d));
      if (g.call(c, m))
        return q(f.get(m));
      f !== c && f.get(d);
    },
    get size() {
      const d = this.__v_raw;
      return !t && on(_t(d), "iterate", So), Reflect.get(d, "size", d);
    },
    has(d) {
      const f = this.__v_raw, c = _t(f), m = _t(d);
      return t || (Mr(d, m) && on(c, "has", d), on(c, "has", m)), d === m ? f.has(d) : f.has(d) || f.has(m);
    },
    forEach(d, f) {
      const c = this, m = c.__v_raw, g = _t(m), q = r ? hs : t ? ri : tn;
      return !t && on(g, "iterate", So), m.forEach((B, G) => d.call(f, q(B), q(G), c));
    }
  };
  return an(
    i,
    t ? {
      add: Wa("add"),
      set: Wa("set"),
      delete: Wa("delete"),
      clear: Wa("clear")
    } : {
      add(d) {
        !r && !Dn(d) && !Br(d) && (d = _t(d));
        const f = _t(this);
        return Va(f).has.call(f, d) || (f.add(d), Or(f, "add", d, d)), this;
      },
      set(d, f) {
        !r && !Dn(f) && !Br(f) && (f = _t(f));
        const c = _t(this), { has: m, get: g } = Va(c);
        let q = m.call(c, d);
        q || (d = _t(d), q = m.call(c, d));
        const B = g.call(c, d);
        return c.set(d, f), q ? Mr(f, B) && Or(c, "set", d, f) : Or(c, "add", d, f), this;
      },
      delete(d) {
        const f = _t(this), { has: c, get: m } = Va(f);
        let g = c.call(f, d);
        g || (d = _t(d), g = c.call(f, d)), m && m.call(f, d);
        const q = f.delete(d);
        return g && Or(f, "delete", d, void 0), q;
      },
      clear() {
        const d = _t(this), f = d.size !== 0, c = d.clear();
        return f && Or(
          d,
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
  ].forEach((d) => {
    i[d] = Pc(d, t, r);
  }), i;
}
function yi(t, r) {
  const i = kc(t, r);
  return (l, d, f) => d === "__v_isReactive" ? !t : d === "__v_isReadonly" ? t : d === "__v_raw" ? l : Reflect.get(
    St(i, d) && d in l ? i : l,
    d,
    f
  );
}
const Lc = {
  get: /* @__PURE__ */ yi(!1, !1)
}, jc = {
  get: /* @__PURE__ */ yi(!1, !0)
}, $c = {
  get: /* @__PURE__ */ yi(!0, !1)
}, Fc = {
  get: /* @__PURE__ */ yi(!0, !0)
}, pu = /* @__PURE__ */ new WeakMap(), hu = /* @__PURE__ */ new WeakMap(), mu = /* @__PURE__ */ new WeakMap(), vu = /* @__PURE__ */ new WeakMap();
function Mc(t) {
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
function Bc(t) {
  return t.__v_skip || !Object.isExtensible(t) ? 0 : Mc(dc(t));
}
function Ma(t) {
  return Br(t) ? t : gi(
    t,
    !1,
    Ec,
    Lc,
    pu
  );
}
function Kc(t) {
  return gi(
    t,
    !1,
    Rc,
    jc,
    hu
  );
}
function yu(t) {
  return gi(
    t,
    !0,
    Dc,
    $c,
    mu
  );
}
function qc(t) {
  return gi(
    t,
    !0,
    Ac,
    Fc,
    vu
  );
}
function gi(t, r, i, l, d) {
  if (!At(t) || t.__v_raw && !(r && t.__v_isReactive))
    return t;
  const f = Bc(t);
  if (f === 0)
    return t;
  const c = d.get(t);
  if (c)
    return c;
  const m = new Proxy(
    t,
    f === 2 ? l : i
  );
  return d.set(t, m), m;
}
function Er(t) {
  return Br(t) ? Er(t.__v_raw) : !!(t && t.__v_isReactive);
}
function Br(t) {
  return !!(t && t.__v_isReadonly);
}
function Dn(t) {
  return !!(t && t.__v_isShallow);
}
function Ms(t) {
  return t ? !!t.__v_raw : !1;
}
function _t(t) {
  const r = t && t.__v_raw;
  return r ? _t(r) : t;
}
function bi(t) {
  return !St(t, "__v_skip") && Object.isExtensible(t) && ds(t, "__v_skip", !0), t;
}
const tn = (t) => At(t) ? Ma(t) : t, ri = (t) => At(t) ? yu(t) : t;
function $t(t) {
  return t ? t.__v_isRef === !0 : !1;
}
function Ue(t) {
  return gu(t, !1);
}
function Yn(t) {
  return gu(t, !0);
}
function gu(t, r) {
  return $t(t) ? t : new Uc(t, r);
}
class Uc {
  constructor(r, i) {
    this.dep = new Fs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = i ? r : _t(r), this._value = i ? r : tn(r), this.__v_isShallow = i;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(r) {
    const i = this._rawValue, l = this.__v_isShallow || Dn(r) || Br(r);
    r = l ? r : _t(r), Mr(r, i) && (this._rawValue = r, this._value = l ? r : tn(r), this.dep.trigger());
  }
}
function $e(t) {
  return $t(t) ? t.value : t;
}
function Vc(t) {
  return it(t) ? t() : $e(t);
}
const Wc = {
  get: (t, r, i) => r === "__v_raw" ? t : $e(Reflect.get(t, r, i)),
  set: (t, r, i, l) => {
    const d = t[r];
    return $t(d) && !$t(i) ? (d.value = i, !0) : Reflect.set(t, r, i, l);
  }
};
function bu(t) {
  return Er(t) ? t : new Proxy(t, Wc);
}
function Gc(t) {
  const r = tt(t) ? new Array(t.length) : {};
  for (const i in t)
    r[i] = wu(t, i);
  return r;
}
class Hc {
  constructor(r, i, l) {
    this._object = r, this._key = i, this._defaultValue = l, this.__v_isRef = !0, this._value = void 0;
  }
  get value() {
    const r = this._object[this._key];
    return this._value = r === void 0 ? this._defaultValue : r;
  }
  set value(r) {
    this._object[this._key] = r;
  }
  get dep() {
    return Sc(_t(this._object), this._key);
  }
}
class zc {
  constructor(r) {
    this._getter = r, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
function Yc(t, r, i) {
  return $t(t) ? t : it(t) ? new zc(t) : At(t) && arguments.length > 1 ? wu(t, r, i) : Ue(t);
}
function wu(t, r, i) {
  const l = t[r];
  return $t(l) ? l : new Hc(t, r, i);
}
class Xc {
  constructor(r, i, l) {
    this.fn = r, this.setter = i, this._value = void 0, this.dep = new Fs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Aa - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !i, this.isSSR = l;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    Rt !== this)
      return ru(this, !0), !0;
  }
  get value() {
    const r = this.dep.track();
    return iu(this), r && (r.version = this.dep.version), this._value;
  }
  set value(r) {
    this.setter && this.setter(r);
  }
}
function Qc(t, r, i = !1) {
  let l, d;
  return it(t) ? l = t : (l = t.get, d = t.set), new Xc(l, d, i);
}
const Ga = {}, oi = /* @__PURE__ */ new WeakMap();
let Co;
function Jc(t, r = !1, i = Co) {
  if (i) {
    let l = oi.get(i);
    l || oi.set(i, l = []), l.push(t);
  }
}
function Zc(t, r, i = Nt) {
  const { immediate: l, deep: d, once: f, scheduler: c, augmentJob: m, call: g } = i, q = (J) => d ? J : Dn(J) || d === !1 || d === 0 ? Nr(J, 1) : Nr(J);
  let B, G, re, Z, k = !1, j = !1;
  if ($t(t) ? (G = () => t.value, k = Dn(t)) : Er(t) ? (G = () => q(t), k = !0) : tt(t) ? (j = !0, k = t.some((J) => Er(J) || Dn(J)), G = () => t.map((J) => {
    if ($t(J))
      return J.value;
    if (Er(J))
      return q(J);
    if (it(J))
      return g ? g(J, 2) : J();
  })) : it(t) ? r ? G = g ? () => g(t, 2) : t : G = () => {
    if (re) {
      Rr();
      try {
        re();
      } finally {
        Ar();
      }
    }
    const J = Co;
    Co = B;
    try {
      return g ? g(t, 3, [Z]) : t(Z);
    } finally {
      Co = J;
    }
  } : G = Xn, r && d) {
    const J = G, Oe = d === !0 ? 1 / 0 : d;
    G = () => Nr(J(), Oe);
  }
  const F = ks(), X = () => {
    B.stop(), F && F.active && Rs(F.effects, B);
  };
  if (f && r) {
    const J = r;
    r = (...Oe) => {
      J(...Oe), X();
    };
  }
  let A = j ? new Array(t.length).fill(Ga) : Ga;
  const P = (J) => {
    if (!(!(B.flags & 1) || !B.dirty && !J))
      if (r) {
        const Oe = B.run();
        if (d || k || (j ? Oe.some((Y, ie) => Mr(Y, A[ie])) : Mr(Oe, A))) {
          re && re();
          const Y = Co;
          Co = B;
          try {
            const ie = [
              Oe,
              // pass undefined as the old value when it's changed for the first time
              A === Ga ? void 0 : j && A[0] === Ga ? [] : A,
              Z
            ];
            A = Oe, g ? g(r, 3, ie) : (
              // @ts-expect-error
              r(...ie)
            );
          } finally {
            Co = Y;
          }
        }
      } else
        B.run();
  };
  return m && m(P), B = new tu(G), B.scheduler = c ? () => c(P, !1) : P, Z = (J) => Jc(J, !1, B), re = B.onStop = () => {
    const J = oi.get(B);
    if (J) {
      if (g)
        g(J, 4);
      else
        for (const Oe of J) Oe();
      oi.delete(B);
    }
  }, r ? l ? P(!0) : A = B.run() : c ? c(P.bind(null, !0), !0) : B.run(), X.pause = B.pause.bind(B), X.resume = B.resume.bind(B), X.stop = X, X;
}
function Nr(t, r = 1 / 0, i) {
  if (r <= 0 || !At(t) || t.__v_skip || (i = i || /* @__PURE__ */ new Set(), i.has(t)))
    return t;
  if (i.add(t), r--, $t(t))
    Nr(t.value, r, i);
  else if (tt(t))
    for (let l = 0; l < t.length; l++)
      Nr(t[l], r, i);
  else if (Ko(t) || Lo(t))
    t.forEach((l) => {
      Nr(l, r, i);
    });
  else if (zl(t)) {
    for (const l in t)
      Nr(t[l], r, i);
    for (const l of Object.getOwnPropertySymbols(t))
      Object.prototype.propertyIsEnumerable.call(t, l) && Nr(t[l], r, i);
  }
  return t;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ba(t, r, i, l) {
  try {
    return l ? t(...l) : t();
  } catch (d) {
    wi(d, r, i);
  }
}
function Qn(t, r, i, l) {
  if (it(t)) {
    const d = Ba(t, r, i, l);
    return d && Gl(d) && d.catch((f) => {
      wi(f, r, i);
    }), d;
  }
  if (tt(t)) {
    const d = [];
    for (let f = 0; f < t.length; f++)
      d.push(Qn(t[f], r, i, l));
    return d;
  }
}
function wi(t, r, i, l = !0) {
  const d = r ? r.vnode : null, { errorHandler: f, throwUnhandledErrorInProduction: c } = r && r.appContext.config || Nt;
  if (r) {
    let m = r.parent;
    const g = r.proxy, q = `https://vuejs.org/error-reference/#runtime-${i}`;
    for (; m; ) {
      const B = m.ec;
      if (B) {
        for (let G = 0; G < B.length; G++)
          if (B[G](t, g, q) === !1)
            return;
      }
      m = m.parent;
    }
    if (f) {
      Rr(), Ba(f, null, 10, [
        t,
        g,
        q
      ]), Ar();
      return;
    }
  }
  ed(t, i, d, l, c);
}
function ed(t, r, i, l = !0, d = !1) {
  if (d)
    throw t;
  console.error(t);
}
const gn = [];
let Hn = -1;
const jo = [];
let $r = null, Po = 0;
const _u = /* @__PURE__ */ Promise.resolve();
let ai = null;
function Bs(t) {
  const r = ai || _u;
  return t ? r.then(this ? t.bind(this) : t) : r;
}
function td(t) {
  let r = Hn + 1, i = gn.length;
  for (; r < i; ) {
    const l = r + i >>> 1, d = gn[l], f = ka(d);
    f < t || f === t && d.flags & 2 ? r = l + 1 : i = l;
  }
  return r;
}
function Ks(t) {
  if (!(t.flags & 1)) {
    const r = ka(t), i = gn[gn.length - 1];
    !i || // fast path when the job id is larger than the tail
    !(t.flags & 2) && r >= ka(i) ? gn.push(t) : gn.splice(td(r), 0, t), t.flags |= 1, xu();
  }
}
function xu() {
  ai || (ai = _u.then(Su));
}
function nd(t) {
  tt(t) ? jo.push(...t) : $r && t.id === -1 ? $r.splice(Po + 1, 0, t) : t.flags & 1 || (jo.push(t), t.flags |= 1), xu();
}
function ol(t, r, i = Hn + 1) {
  for (; i < gn.length; i++) {
    const l = gn[i];
    if (l && l.flags & 2) {
      if (t && l.id !== t.uid)
        continue;
      gn.splice(i, 1), i--, l.flags & 4 && (l.flags &= -2), l(), l.flags & 4 || (l.flags &= -2);
    }
  }
}
function Cu(t) {
  if (jo.length) {
    const r = [...new Set(jo)].sort(
      (i, l) => ka(i) - ka(l)
    );
    if (jo.length = 0, $r) {
      $r.push(...r);
      return;
    }
    for ($r = r, Po = 0; Po < $r.length; Po++) {
      const i = $r[Po];
      i.flags & 4 && (i.flags &= -2), i.flags & 8 || i(), i.flags &= -2;
    }
    $r = null, Po = 0;
  }
}
const ka = (t) => t.id == null ? t.flags & 2 ? -1 : 1 / 0 : t.id;
function Su(t) {
  try {
    for (Hn = 0; Hn < gn.length; Hn++) {
      const r = gn[Hn];
      r && !(r.flags & 8) && (r.flags & 4 && (r.flags &= -2), Ba(
        r,
        r.i,
        r.i ? 15 : 14
      ), r.flags & 4 || (r.flags &= -2));
    }
  } finally {
    for (; Hn < gn.length; Hn++) {
      const r = gn[Hn];
      r && (r.flags &= -2);
    }
    Hn = -1, gn.length = 0, Cu(), ai = null, (gn.length || jo.length) && Su();
  }
}
let Ht = null, Iu = null;
function ii(t) {
  const r = Ht;
  return Ht = t, Iu = t && t.type.__scopeId || null, r;
}
function ms(t, r = Ht, i) {
  if (!r || t._n)
    return t;
  const l = (...d) => {
    l._d && gl(-1);
    const f = ii(r);
    let c;
    try {
      c = t(...d);
    } finally {
      ii(f), l._d && gl(1);
    }
    return c;
  };
  return l._n = !0, l._c = !0, l._d = !0, l;
}
function Je(t, r) {
  if (Ht === null)
    return t;
  const i = Ii(Ht), l = t.dirs || (t.dirs = []);
  for (let d = 0; d < r.length; d++) {
    let [f, c, m, g = Nt] = r[d];
    f && (it(f) && (f = {
      mounted: f,
      updated: f
    }), f.deep && Nr(c), l.push({
      dir: f,
      instance: i,
      value: c,
      oldValue: void 0,
      arg: m,
      modifiers: g
    }));
  }
  return t;
}
function _o(t, r, i, l) {
  const d = t.dirs, f = r && r.dirs;
  for (let c = 0; c < d.length; c++) {
    const m = d[c];
    f && (m.oldValue = f[c].value);
    let g = m.dir[l];
    g && (Rr(), Qn(g, i, 8, [
      t.el,
      m,
      t,
      r
    ]), Ar());
  }
}
const Ou = Symbol("_vte"), rd = (t) => t.__isTeleport, Oa = (t) => t && (t.disabled || t.disabled === ""), al = (t) => t && (t.defer || t.defer === ""), il = (t) => typeof SVGElement < "u" && t instanceof SVGElement, sl = (t) => typeof MathMLElement == "function" && t instanceof MathMLElement, vs = (t, r) => {
  const i = t && t.to;
  return Ft(i) ? r ? r(i) : null : i;
}, Nu = {
  name: "Teleport",
  __isTeleport: !0,
  process(t, r, i, l, d, f, c, m, g, q) {
    const {
      mc: B,
      pc: G,
      pbc: re,
      o: { insert: Z, querySelector: k, createText: j, createComment: F }
    } = q, X = Oa(r.props);
    let { shapeFlag: A, children: P, dynamicChildren: J } = r;
    if (t == null) {
      const Oe = r.el = j(""), Y = r.anchor = j("");
      Z(Oe, i, l), Z(Y, i, l);
      const ie = (N, de) => {
        A & 16 && (d && d.isCE && (d.ce._teleportTarget = N), B(
          P,
          N,
          de,
          d,
          f,
          c,
          m,
          g
        ));
      }, xe = () => {
        const N = r.target = vs(r.props, k), de = Tu(N, r, j, Z);
        N && (c !== "svg" && il(N) ? c = "svg" : c !== "mathml" && sl(N) && (c = "mathml"), X || (ie(N, de), Xa(r, !1)));
      };
      X && (ie(i, Y), Xa(r, !0)), al(r.props) ? (r.el.__isMounted = !1, yn(() => {
        xe(), delete r.el.__isMounted;
      }, f)) : xe();
    } else {
      if (al(r.props) && t.el.__isMounted === !1) {
        yn(() => {
          Nu.process(
            t,
            r,
            i,
            l,
            d,
            f,
            c,
            m,
            g,
            q
          );
        }, f);
        return;
      }
      r.el = t.el, r.targetStart = t.targetStart;
      const Oe = r.anchor = t.anchor, Y = r.target = t.target, ie = r.targetAnchor = t.targetAnchor, xe = Oa(t.props), N = xe ? i : Y, de = xe ? Oe : ie;
      if (c === "svg" || il(Y) ? c = "svg" : (c === "mathml" || sl(Y)) && (c = "mathml"), J ? (re(
        t.dynamicChildren,
        J,
        N,
        d,
        f,
        c,
        m
      ), Gs(t, r, !0)) : g || G(
        t,
        r,
        N,
        de,
        d,
        f,
        c,
        m,
        !1
      ), X)
        xe ? r.props && t.props && r.props.to !== t.props.to && (r.props.to = t.props.to) : Ha(
          r,
          i,
          Oe,
          q,
          1
        );
      else if ((r.props && r.props.to) !== (t.props && t.props.to)) {
        const Q = r.target = vs(
          r.props,
          k
        );
        Q && Ha(
          r,
          Q,
          null,
          q,
          0
        );
      } else xe && Ha(
        r,
        Y,
        ie,
        q,
        1
      );
      Xa(r, X);
    }
  },
  remove(t, r, i, { um: l, o: { remove: d } }, f) {
    const {
      shapeFlag: c,
      children: m,
      anchor: g,
      targetStart: q,
      targetAnchor: B,
      target: G,
      props: re
    } = t;
    if (G && (d(q), d(B)), f && d(g), c & 16) {
      const Z = f || !Oa(re);
      for (let k = 0; k < m.length; k++) {
        const j = m[k];
        l(
          j,
          r,
          i,
          Z,
          !!j.dynamicChildren
        );
      }
    }
  },
  move: Ha,
  hydrate: od
};
function Ha(t, r, i, { o: { insert: l }, m: d }, f = 2) {
  f === 0 && l(t.targetAnchor, r, i);
  const { el: c, anchor: m, shapeFlag: g, children: q, props: B } = t, G = f === 2;
  if (G && l(c, r, i), (!G || Oa(B)) && g & 16)
    for (let re = 0; re < q.length; re++)
      d(
        q[re],
        r,
        i,
        2
      );
  G && l(m, r, i);
}
function od(t, r, i, l, d, f, {
  o: { nextSibling: c, parentNode: m, querySelector: g, insert: q, createText: B }
}, G) {
  const re = r.target = vs(
    r.props,
    g
  );
  if (re) {
    const Z = Oa(r.props), k = re._lpa || re.firstChild;
    if (r.shapeFlag & 16)
      if (Z)
        r.anchor = G(
          c(t),
          r,
          m(t),
          i,
          l,
          d,
          f
        ), r.targetStart = k, r.targetAnchor = k && c(k);
      else {
        r.anchor = c(t);
        let j = k;
        for (; j; ) {
          if (j && j.nodeType === 8) {
            if (j.data === "teleport start anchor")
              r.targetStart = j;
            else if (j.data === "teleport anchor") {
              r.targetAnchor = j, re._lpa = r.targetAnchor && c(r.targetAnchor);
              break;
            }
          }
          j = c(j);
        }
        r.targetAnchor || Tu(re, r, B, q), G(
          k && c(k),
          r,
          re,
          i,
          l,
          d,
          f
        );
      }
    Xa(r, Z);
  }
  return r.anchor && c(r.anchor);
}
const No = Nu;
function Xa(t, r) {
  const i = t.ctx;
  if (i && i.ut) {
    let l, d;
    for (r ? (l = t.el, d = t.anchor) : (l = t.targetStart, d = t.targetAnchor); l && l !== d; )
      l.nodeType === 1 && l.setAttribute("data-v-owner", i.uid), l = l.nextSibling;
    i.ut();
  }
}
function Tu(t, r, i, l) {
  const d = r.targetStart = i(""), f = r.targetAnchor = i("");
  return d[Ou] = f, t && (l(d, t), l(f, t)), f;
}
function qs(t, r) {
  t.shapeFlag & 6 && t.component ? (t.transition = r, qs(t.component.subTree, r)) : t.shapeFlag & 128 ? (t.ssContent.transition = r.clone(t.ssContent), t.ssFallback.transition = r.clone(t.ssFallback)) : t.transition = r;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ot(t, r) {
  return it(t) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    an({ name: t.name }, r, { setup: t })
  ) : t;
}
function Eu(t) {
  t.ids = [t.ids[0] + t.ids[2]++ + "-", 0, 0];
}
function ad(t) {
  const r = nf(), i = Yn(null);
  if (r) {
    const d = r.refs === Nt ? r.refs = {} : r.refs;
    Object.defineProperty(d, t, {
      enumerable: !0,
      get: () => i.value,
      set: (f) => i.value = f
    });
  }
  return i;
}
function Na(t, r, i, l, d = !1) {
  if (tt(t)) {
    t.forEach(
      (k, j) => Na(
        k,
        r && (tt(r) ? r[j] : r),
        i,
        l,
        d
      )
    );
    return;
  }
  if ($o(l) && !d) {
    l.shapeFlag & 512 && l.type.__asyncResolved && l.component.subTree.component && Na(t, r, i, l.component.subTree);
    return;
  }
  const f = l.shapeFlag & 4 ? Ii(l.component) : l.el, c = d ? null : f, { i: m, r: g } = t, q = r && r.r, B = m.refs === Nt ? m.refs = {} : m.refs, G = m.setupState, re = _t(G), Z = G === Nt ? () => !1 : (k) => St(re, k);
  if (q != null && q !== g && (Ft(q) ? (B[q] = null, Z(q) && (G[q] = null)) : $t(q) && (q.value = null)), it(g))
    Ba(g, m, 12, [c, B]);
  else {
    const k = Ft(g), j = $t(g);
    if (k || j) {
      const F = () => {
        if (t.f) {
          const X = k ? Z(g) ? G[g] : B[g] : g.value;
          d ? tt(X) && Rs(X, f) : tt(X) ? X.includes(f) || X.push(f) : k ? (B[g] = [f], Z(g) && (G[g] = B[g])) : (g.value = [f], t.k && (B[t.k] = g.value));
        } else k ? (B[g] = c, Z(g) && (G[g] = c)) : j && (g.value = c, t.k && (B[t.k] = c));
      };
      c ? (F.id = -1, yn(F, i)) : F();
    }
  }
}
mi().requestIdleCallback;
mi().cancelIdleCallback;
const $o = (t) => !!t.type.__asyncLoader, Du = (t) => t.type.__isKeepAlive;
function id(t, r) {
  Ru(t, "a", r);
}
function sd(t, r) {
  Ru(t, "da", r);
}
function Ru(t, r, i = zt) {
  const l = t.__wdc || (t.__wdc = () => {
    let d = i;
    for (; d; ) {
      if (d.isDeactivated)
        return;
      d = d.parent;
    }
    return t();
  });
  if (_i(r, l, i), i) {
    let d = i.parent;
    for (; d && d.parent; )
      Du(d.parent.vnode) && ld(l, r, i, d), d = d.parent;
  }
}
function ld(t, r, i, l) {
  const d = _i(
    r,
    t,
    l,
    !0
    /* prepend */
  );
  Us(() => {
    Rs(l[r], d);
  }, i);
}
function _i(t, r, i = zt, l = !1) {
  if (i) {
    const d = i[t] || (i[t] = []), f = r.__weh || (r.__weh = (...c) => {
      Rr();
      const m = Ka(i), g = Qn(r, i, t, c);
      return m(), Ar(), g;
    });
    return l ? d.unshift(f) : d.push(f), f;
  }
}
const Lr = (t) => (r, i = zt) => {
  (!ja || t === "sp") && _i(t, (...l) => r(...l), i);
}, ud = Lr("bm"), Do = Lr("m"), cd = Lr(
  "bu"
), dd = Lr("u"), fd = Lr(
  "bum"
), Us = Lr("um"), pd = Lr(
  "sp"
), hd = Lr("rtg"), md = Lr("rtc");
function vd(t, r = zt) {
  _i("ec", t, r);
}
const yd = "components", Au = Symbol.for("v-ndc");
function gd(t) {
  return Ft(t) ? bd(yd, t, !1) || t : t || Au;
}
function bd(t, r, i = !0, l = !1) {
  const d = Ht || zt;
  if (d) {
    const f = d.type;
    {
      const m = lf(
        f,
        !1
      );
      if (m && (m === r || m === Pn(r) || m === hi(Pn(r))))
        return f;
    }
    const c = (
      // local registration
      // check instance[type] first which is resolved for options API
      ll(d[t] || f[t], r) || // global registration
      ll(d.appContext[t], r)
    );
    return !c && l ? f : c;
  }
}
function ll(t, r) {
  return t && (t[r] || t[Pn(r)] || t[hi(Pn(r))]);
}
function ft(t, r, i, l) {
  let d;
  const f = i, c = tt(t);
  if (c || Ft(t)) {
    const m = c && Er(t);
    let g = !1, q = !1;
    m && (g = !Dn(t), q = Br(t), t = vi(t)), d = new Array(t.length);
    for (let B = 0, G = t.length; B < G; B++)
      d[B] = r(
        g ? q ? ri(tn(t[B])) : tn(t[B]) : t[B],
        B,
        void 0,
        f
      );
  } else if (typeof t == "number") {
    d = new Array(t);
    for (let m = 0; m < t; m++)
      d[m] = r(m + 1, m, void 0, f);
  } else if (At(t))
    if (t[Symbol.iterator])
      d = Array.from(
        t,
        (m, g) => r(m, g, void 0, f)
      );
    else {
      const m = Object.keys(t);
      d = new Array(m.length);
      for (let g = 0, q = m.length; g < q; g++) {
        const B = m[g];
        d[g] = r(t[B], B, g, f);
      }
    }
  else
    d = [];
  return d;
}
function ul(t, r, i = {}, l, d) {
  if (Ht.ce || Ht.parent && $o(Ht.parent) && Ht.parent.ce)
    return r !== "default" && (i.name = r), te(), kt(
      Be,
      null,
      [yt("slot", i, l)],
      64
    );
  let f = t[r];
  f && f._c && (f._d = !1), te();
  const c = f && Pu(f(i)), m = i.key || // slot content array of a dynamic conditional slot may have a branch
  // key attached in the `createSlots` helper, respect that
  c && c.key, g = kt(
    Be,
    {
      key: (m && !Vn(m) ? m : `_${r}`) + // #7256 force differentiate fallback content from actual content
      (!c && l ? "_fb" : "")
    },
    c || [],
    c && t._ === 1 ? 64 : -2
  );
  return f && f._c && (f._d = !0), g;
}
function Pu(t) {
  return t.some((r) => zs(r) ? !(r.type === Pr || r.type === Be && !Pu(r.children)) : !0) ? t : null;
}
const ys = (t) => t ? Zu(t) ? Ii(t) : ys(t.parent) : null, Ta = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ an(/* @__PURE__ */ Object.create(null), {
    $: (t) => t,
    $el: (t) => t.vnode.el,
    $data: (t) => t.data,
    $props: (t) => t.props,
    $attrs: (t) => t.attrs,
    $slots: (t) => t.slots,
    $refs: (t) => t.refs,
    $parent: (t) => ys(t.parent),
    $root: (t) => ys(t.root),
    $host: (t) => t.ce,
    $emit: (t) => t.emit,
    $options: (t) => Lu(t),
    $forceUpdate: (t) => t.f || (t.f = () => {
      Ks(t.update);
    }),
    $nextTick: (t) => t.n || (t.n = Bs.bind(t.proxy)),
    $watch: (t) => qd.bind(t)
  })
), as = (t, r) => t !== Nt && !t.__isScriptSetup && St(t, r), wd = {
  get({ _: t }, r) {
    if (r === "__v_skip")
      return !0;
    const { ctx: i, setupState: l, data: d, props: f, accessCache: c, type: m, appContext: g } = t;
    let q;
    if (r[0] !== "$") {
      const Z = c[r];
      if (Z !== void 0)
        switch (Z) {
          case 1:
            return l[r];
          case 2:
            return d[r];
          case 4:
            return i[r];
          case 3:
            return f[r];
        }
      else {
        if (as(l, r))
          return c[r] = 1, l[r];
        if (d !== Nt && St(d, r))
          return c[r] = 2, d[r];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (q = t.propsOptions[0]) && St(q, r)
        )
          return c[r] = 3, f[r];
        if (i !== Nt && St(i, r))
          return c[r] = 4, i[r];
        gs && (c[r] = 0);
      }
    }
    const B = Ta[r];
    let G, re;
    if (B)
      return r === "$attrs" && on(t.attrs, "get", ""), B(t);
    if (
      // css module (injected by vue-loader)
      (G = m.__cssModules) && (G = G[r])
    )
      return G;
    if (i !== Nt && St(i, r))
      return c[r] = 4, i[r];
    if (
      // global properties
      re = g.config.globalProperties, St(re, r)
    )
      return re[r];
  },
  set({ _: t }, r, i) {
    const { data: l, setupState: d, ctx: f } = t;
    return as(d, r) ? (d[r] = i, !0) : l !== Nt && St(l, r) ? (l[r] = i, !0) : St(t.props, r) || r[0] === "$" && r.slice(1) in t ? !1 : (f[r] = i, !0);
  },
  has({
    _: { data: t, setupState: r, accessCache: i, ctx: l, appContext: d, propsOptions: f }
  }, c) {
    let m;
    return !!i[c] || t !== Nt && St(t, c) || as(r, c) || (m = f[0]) && St(m, c) || St(l, c) || St(Ta, c) || St(d.config.globalProperties, c);
  },
  defineProperty(t, r, i) {
    return i.get != null ? t._.accessCache[r] = 0 : St(i, "value") && this.set(t, r, i.value, null), Reflect.defineProperty(t, r, i);
  }
};
function cl(t) {
  return tt(t) ? t.reduce(
    (r, i) => (r[i] = null, r),
    {}
  ) : t;
}
let gs = !0;
function _d(t) {
  const r = Lu(t), i = t.proxy, l = t.ctx;
  gs = !1, r.beforeCreate && dl(r.beforeCreate, t, "bc");
  const {
    // state
    data: d,
    computed: f,
    methods: c,
    watch: m,
    provide: g,
    inject: q,
    // lifecycle
    created: B,
    beforeMount: G,
    mounted: re,
    beforeUpdate: Z,
    updated: k,
    activated: j,
    deactivated: F,
    beforeDestroy: X,
    beforeUnmount: A,
    destroyed: P,
    unmounted: J,
    render: Oe,
    renderTracked: Y,
    renderTriggered: ie,
    errorCaptured: xe,
    serverPrefetch: N,
    // public API
    expose: de,
    inheritAttrs: Q,
    // assets
    components: he,
    directives: z,
    filters: U
  } = r;
  if (q && xd(q, l, null), c)
    for (const H in c) {
      const le = c[H];
      it(le) && (l[H] = le.bind(i));
    }
  if (d) {
    const H = d.call(i, i);
    At(H) && (t.data = Ma(H));
  }
  if (gs = !0, f)
    for (const H in f) {
      const le = f[H], Ce = it(le) ? le.bind(i, i) : it(le.get) ? le.get.bind(i, i) : Xn, Te = !it(le) && it(le.set) ? le.set.bind(i) : Xn, Fe = Xe({
        get: Ce,
        set: Te
      });
      Object.defineProperty(l, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Fe.value,
        set: (Ge) => Fe.value = Ge
      });
    }
  if (m)
    for (const H in m)
      ku(m[H], l, i, H);
  if (g) {
    const H = it(g) ? g.call(i) : g;
    Reflect.ownKeys(H).forEach((le) => {
      Td(le, H[le]);
    });
  }
  B && dl(B, t, "c");
  function se(H, le) {
    tt(le) ? le.forEach((Ce) => H(Ce.bind(i))) : le && H(le.bind(i));
  }
  if (se(ud, G), se(Do, re), se(cd, Z), se(dd, k), se(id, j), se(sd, F), se(vd, xe), se(md, Y), se(hd, ie), se(fd, A), se(Us, J), se(pd, N), tt(de))
    if (de.length) {
      const H = t.exposed || (t.exposed = {});
      de.forEach((le) => {
        Object.defineProperty(H, le, {
          get: () => i[le],
          set: (Ce) => i[le] = Ce
        });
      });
    } else t.exposed || (t.exposed = {});
  Oe && t.render === Xn && (t.render = Oe), Q != null && (t.inheritAttrs = Q), he && (t.components = he), z && (t.directives = z), N && Eu(t);
}
function xd(t, r, i = Xn) {
  tt(t) && (t = bs(t));
  for (const l in t) {
    const d = t[l];
    let f;
    At(d) ? "default" in d ? f = Ea(
      d.from || l,
      d.default,
      !0
    ) : f = Ea(d.from || l) : f = Ea(d), $t(f) ? Object.defineProperty(r, l, {
      enumerable: !0,
      configurable: !0,
      get: () => f.value,
      set: (c) => f.value = c
    }) : r[l] = f;
  }
}
function dl(t, r, i) {
  Qn(
    tt(t) ? t.map((l) => l.bind(r.proxy)) : t.bind(r.proxy),
    r,
    i
  );
}
function ku(t, r, i, l) {
  let d = l.includes(".") ? Gu(i, l) : () => i[l];
  if (Ft(t)) {
    const f = r[t];
    it(f) && Ut(d, f);
  } else if (it(t))
    Ut(d, t.bind(i));
  else if (At(t))
    if (tt(t))
      t.forEach((f) => ku(f, r, i, l));
    else {
      const f = it(t.handler) ? t.handler.bind(i) : r[t.handler];
      it(f) && Ut(d, f, t);
    }
}
function Lu(t) {
  const r = t.type, { mixins: i, extends: l } = r, {
    mixins: d,
    optionsCache: f,
    config: { optionMergeStrategies: c }
  } = t.appContext, m = f.get(r);
  let g;
  return m ? g = m : !d.length && !i && !l ? g = r : (g = {}, d.length && d.forEach(
    (q) => si(g, q, c, !0)
  ), si(g, r, c)), At(r) && f.set(r, g), g;
}
function si(t, r, i, l = !1) {
  const { mixins: d, extends: f } = r;
  f && si(t, f, i, !0), d && d.forEach(
    (c) => si(t, c, i, !0)
  );
  for (const c in r)
    if (!(l && c === "expose")) {
      const m = Cd[c] || i && i[c];
      t[c] = m ? m(t[c], r[c]) : r[c];
    }
  return t;
}
const Cd = {
  data: fl,
  props: pl,
  emits: pl,
  // objects
  methods: xa,
  computed: xa,
  // lifecycle
  beforeCreate: vn,
  created: vn,
  beforeMount: vn,
  mounted: vn,
  beforeUpdate: vn,
  updated: vn,
  beforeDestroy: vn,
  beforeUnmount: vn,
  destroyed: vn,
  unmounted: vn,
  activated: vn,
  deactivated: vn,
  errorCaptured: vn,
  serverPrefetch: vn,
  // assets
  components: xa,
  directives: xa,
  // watch
  watch: Id,
  // provide / inject
  provide: fl,
  inject: Sd
};
function fl(t, r) {
  return r ? t ? function() {
    return an(
      it(t) ? t.call(this, this) : t,
      it(r) ? r.call(this, this) : r
    );
  } : r : t;
}
function Sd(t, r) {
  return xa(bs(t), bs(r));
}
function bs(t) {
  if (tt(t)) {
    const r = {};
    for (let i = 0; i < t.length; i++)
      r[t[i]] = t[i];
    return r;
  }
  return t;
}
function vn(t, r) {
  return t ? [...new Set([].concat(t, r))] : r;
}
function xa(t, r) {
  return t ? an(/* @__PURE__ */ Object.create(null), t, r) : r;
}
function pl(t, r) {
  return t ? tt(t) && tt(r) ? [.../* @__PURE__ */ new Set([...t, ...r])] : an(
    /* @__PURE__ */ Object.create(null),
    cl(t),
    cl(r ?? {})
  ) : r;
}
function Id(t, r) {
  if (!t) return r;
  if (!r) return t;
  const i = an(/* @__PURE__ */ Object.create(null), t);
  for (const l in r)
    i[l] = vn(t[l], r[l]);
  return i;
}
function ju() {
  return {
    app: null,
    config: {
      isNativeTag: uc,
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
let Od = 0;
function Nd(t, r) {
  return function(l, d = null) {
    it(l) || (l = an({}, l)), d != null && !At(d) && (d = null);
    const f = ju(), c = /* @__PURE__ */ new WeakSet(), m = [];
    let g = !1;
    const q = f.app = {
      _uid: Od++,
      _component: l,
      _props: d,
      _container: null,
      _context: f,
      _instance: null,
      version: cf,
      get config() {
        return f.config;
      },
      set config(B) {
      },
      use(B, ...G) {
        return c.has(B) || (B && it(B.install) ? (c.add(B), B.install(q, ...G)) : it(B) && (c.add(B), B(q, ...G))), q;
      },
      mixin(B) {
        return f.mixins.includes(B) || f.mixins.push(B), q;
      },
      component(B, G) {
        return G ? (f.components[B] = G, q) : f.components[B];
      },
      directive(B, G) {
        return G ? (f.directives[B] = G, q) : f.directives[B];
      },
      mount(B, G, re) {
        if (!g) {
          const Z = q._ceVNode || yt(l, d);
          return Z.appContext = f, re === !0 ? re = "svg" : re === !1 && (re = void 0), t(Z, B, re), g = !0, q._container = B, B.__vue_app__ = q, Ii(Z.component);
        }
      },
      onUnmount(B) {
        m.push(B);
      },
      unmount() {
        g && (Qn(
          m,
          q._instance,
          16
        ), t(null, q._container), delete q._container.__vue_app__);
      },
      provide(B, G) {
        return f.provides[B] = G, q;
      },
      runWithContext(B) {
        const G = Io;
        Io = q;
        try {
          return B();
        } finally {
          Io = G;
        }
      }
    };
    return q;
  };
}
let Io = null;
function Td(t, r) {
  if (zt) {
    let i = zt.provides;
    const l = zt.parent && zt.parent.provides;
    l === i && (i = zt.provides = Object.create(l)), i[t] = r;
  }
}
function Ea(t, r, i = !1) {
  const l = zt || Ht;
  if (l || Io) {
    let d = Io ? Io._context.provides : l ? l.parent == null || l.ce ? l.vnode.appContext && l.vnode.appContext.provides : l.parent.provides : void 0;
    if (d && t in d)
      return d[t];
    if (arguments.length > 1)
      return i && it(r) ? r.call(l && l.proxy) : r;
  }
}
function Ed() {
  return !!(zt || Ht || Io);
}
const $u = {}, Fu = () => Object.create($u), Mu = (t) => Object.getPrototypeOf(t) === $u;
function Dd(t, r, i, l = !1) {
  const d = {}, f = Fu();
  t.propsDefaults = /* @__PURE__ */ Object.create(null), Bu(t, r, d, f);
  for (const c in t.propsOptions[0])
    c in d || (d[c] = void 0);
  i ? t.props = l ? d : Kc(d) : t.type.props ? t.props = d : t.props = f, t.attrs = f;
}
function Rd(t, r, i, l) {
  const {
    props: d,
    attrs: f,
    vnode: { patchFlag: c }
  } = t, m = _t(d), [g] = t.propsOptions;
  let q = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (l || c > 0) && !(c & 16)
  ) {
    if (c & 8) {
      const B = t.vnode.dynamicProps;
      for (let G = 0; G < B.length; G++) {
        let re = B[G];
        if (Ci(t.emitsOptions, re))
          continue;
        const Z = r[re];
        if (g)
          if (St(f, re))
            Z !== f[re] && (f[re] = Z, q = !0);
          else {
            const k = Pn(re);
            d[k] = ws(
              g,
              m,
              k,
              Z,
              t,
              !1
            );
          }
        else
          Z !== f[re] && (f[re] = Z, q = !0);
      }
    }
  } else {
    Bu(t, r, d, f) && (q = !0);
    let B;
    for (const G in m)
      (!r || // for camelCase
      !St(r, G) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((B = Eo(G)) === G || !St(r, B))) && (g ? i && // for camelCase
      (i[G] !== void 0 || // for kebab-case
      i[B] !== void 0) && (d[G] = ws(
        g,
        m,
        G,
        void 0,
        t,
        !0
      )) : delete d[G]);
    if (f !== m)
      for (const G in f)
        (!r || !St(r, G)) && (delete f[G], q = !0);
  }
  q && Or(t.attrs, "set", "");
}
function Bu(t, r, i, l) {
  const [d, f] = t.propsOptions;
  let c = !1, m;
  if (r)
    for (let g in r) {
      if (Ca(g))
        continue;
      const q = r[g];
      let B;
      d && St(d, B = Pn(g)) ? !f || !f.includes(B) ? i[B] = q : (m || (m = {}))[B] = q : Ci(t.emitsOptions, g) || (!(g in l) || q !== l[g]) && (l[g] = q, c = !0);
    }
  if (f) {
    const g = _t(i), q = m || Nt;
    for (let B = 0; B < f.length; B++) {
      const G = f[B];
      i[G] = ws(
        d,
        g,
        G,
        q[G],
        t,
        !St(q, G)
      );
    }
  }
  return c;
}
function ws(t, r, i, l, d, f) {
  const c = t[i];
  if (c != null) {
    const m = St(c, "default");
    if (m && l === void 0) {
      const g = c.default;
      if (c.type !== Function && !c.skipFactory && it(g)) {
        const { propsDefaults: q } = d;
        if (i in q)
          l = q[i];
        else {
          const B = Ka(d);
          l = q[i] = g.call(
            null,
            r
          ), B();
        }
      } else
        l = g;
      d.ce && d.ce._setProp(i, l);
    }
    c[
      0
      /* shouldCast */
    ] && (f && !m ? l = !1 : c[
      1
      /* shouldCastTrue */
    ] && (l === "" || l === Eo(i)) && (l = !0));
  }
  return l;
}
const Ad = /* @__PURE__ */ new WeakMap();
function Ku(t, r, i = !1) {
  const l = i ? Ad : r.propsCache, d = l.get(t);
  if (d)
    return d;
  const f = t.props, c = {}, m = [];
  let g = !1;
  if (!it(t)) {
    const B = (G) => {
      g = !0;
      const [re, Z] = Ku(G, r, !0);
      an(c, re), Z && m.push(...Z);
    };
    !i && r.mixins.length && r.mixins.forEach(B), t.extends && B(t.extends), t.mixins && t.mixins.forEach(B);
  }
  if (!f && !g)
    return At(t) && l.set(t, ko), ko;
  if (tt(f))
    for (let B = 0; B < f.length; B++) {
      const G = Pn(f[B]);
      hl(G) && (c[G] = Nt);
    }
  else if (f)
    for (const B in f) {
      const G = Pn(B);
      if (hl(G)) {
        const re = f[B], Z = c[G] = tt(re) || it(re) ? { type: re } : an({}, re), k = Z.type;
        let j = !1, F = !0;
        if (tt(k))
          for (let X = 0; X < k.length; ++X) {
            const A = k[X], P = it(A) && A.name;
            if (P === "Boolean") {
              j = !0;
              break;
            } else P === "String" && (F = !1);
          }
        else
          j = it(k) && k.name === "Boolean";
        Z[
          0
          /* shouldCast */
        ] = j, Z[
          1
          /* shouldCastTrue */
        ] = F, (j || St(Z, "default")) && m.push(G);
      }
    }
  const q = [c, m];
  return At(t) && l.set(t, q), q;
}
function hl(t) {
  return t[0] !== "$" && !Ca(t);
}
const Vs = (t) => t[0] === "_" || t === "$stable", Ws = (t) => tt(t) ? t.map(zn) : [zn(t)], Pd = (t, r, i) => {
  if (r._n)
    return r;
  const l = ms((...d) => Ws(r(...d)), i);
  return l._c = !1, l;
}, qu = (t, r, i) => {
  const l = t._ctx;
  for (const d in t) {
    if (Vs(d)) continue;
    const f = t[d];
    if (it(f))
      r[d] = Pd(d, f, l);
    else if (f != null) {
      const c = Ws(f);
      r[d] = () => c;
    }
  }
}, Uu = (t, r) => {
  const i = Ws(r);
  t.slots.default = () => i;
}, Vu = (t, r, i) => {
  for (const l in r)
    (i || !Vs(l)) && (t[l] = r[l]);
}, kd = (t, r, i) => {
  const l = t.slots = Fu();
  if (t.vnode.shapeFlag & 32) {
    const d = r.__;
    d && ds(l, "__", d, !0);
    const f = r._;
    f ? (Vu(l, r, i), i && ds(l, "_", f, !0)) : qu(r, l);
  } else r && Uu(t, r);
}, Ld = (t, r, i) => {
  const { vnode: l, slots: d } = t;
  let f = !0, c = Nt;
  if (l.shapeFlag & 32) {
    const m = r._;
    m ? i && m === 1 ? f = !1 : Vu(d, r, i) : (f = !r.$stable, qu(r, d)), c = r;
  } else r && (Uu(t, r), c = { default: 1 });
  if (f)
    for (const m in d)
      !Vs(m) && c[m] == null && delete d[m];
}, yn = Yd;
function jd(t) {
  return $d(t);
}
function $d(t, r) {
  const i = mi();
  i.__VUE__ = !0;
  const {
    insert: l,
    remove: d,
    patchProp: f,
    createElement: c,
    createText: m,
    createComment: g,
    setText: q,
    setElementText: B,
    parentNode: G,
    nextSibling: re,
    setScopeId: Z = Xn,
    insertStaticContent: k
  } = t, j = (R, W, ge, _e = null, Ne = null, Se = null, Pe = void 0, Le = null, Ee = !!W.dynamicChildren) => {
    if (R === W)
      return;
    R && !_a(R, W) && (_e = D(R), Ge(R, Ne, Se, !0), R = null), W.patchFlag === -2 && (Ee = !1, W.dynamicChildren = null);
    const { type: Ie, ref: We, shapeFlag: je } = W;
    switch (Ie) {
      case Si:
        F(R, W, ge, _e);
        break;
      case Pr:
        X(R, W, ge, _e);
        break;
      case Qa:
        R == null && A(W, ge, _e, Pe);
        break;
      case Be:
        he(
          R,
          W,
          ge,
          _e,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        );
        break;
      default:
        je & 1 ? Oe(
          R,
          W,
          ge,
          _e,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        ) : je & 6 ? z(
          R,
          W,
          ge,
          _e,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        ) : (je & 64 || je & 128) && Ie.process(
          R,
          W,
          ge,
          _e,
          Ne,
          Se,
          Pe,
          Le,
          Ee,
          oe
        );
    }
    We != null && Ne ? Na(We, R && R.ref, Se, W || R, !W) : We == null && R && R.ref != null && Na(R.ref, null, Se, R, !0);
  }, F = (R, W, ge, _e) => {
    if (R == null)
      l(
        W.el = m(W.children),
        ge,
        _e
      );
    else {
      const Ne = W.el = R.el;
      W.children !== R.children && q(Ne, W.children);
    }
  }, X = (R, W, ge, _e) => {
    R == null ? l(
      W.el = g(W.children || ""),
      ge,
      _e
    ) : W.el = R.el;
  }, A = (R, W, ge, _e) => {
    [R.el, R.anchor] = k(
      R.children,
      W,
      ge,
      _e,
      R.el,
      R.anchor
    );
  }, P = ({ el: R, anchor: W }, ge, _e) => {
    let Ne;
    for (; R && R !== W; )
      Ne = re(R), l(R, ge, _e), R = Ne;
    l(W, ge, _e);
  }, J = ({ el: R, anchor: W }) => {
    let ge;
    for (; R && R !== W; )
      ge = re(R), d(R), R = ge;
    d(W);
  }, Oe = (R, W, ge, _e, Ne, Se, Pe, Le, Ee) => {
    W.type === "svg" ? Pe = "svg" : W.type === "math" && (Pe = "mathml"), R == null ? Y(
      W,
      ge,
      _e,
      Ne,
      Se,
      Pe,
      Le,
      Ee
    ) : N(
      R,
      W,
      Ne,
      Se,
      Pe,
      Le,
      Ee
    );
  }, Y = (R, W, ge, _e, Ne, Se, Pe, Le) => {
    let Ee, Ie;
    const { props: We, shapeFlag: je, transition: He, dirs: Ye } = R;
    if (Ee = R.el = c(
      R.type,
      Se,
      We && We.is,
      We
    ), je & 8 ? B(Ee, R.children) : je & 16 && xe(
      R.children,
      Ee,
      null,
      _e,
      Ne,
      is(R, Se),
      Pe,
      Le
    ), Ye && _o(R, null, _e, "created"), ie(Ee, R, R.scopeId, Pe, _e), We) {
      for (const dt in We)
        dt !== "value" && !Ca(dt) && f(Ee, dt, null, We[dt], Se, _e);
      "value" in We && f(Ee, "value", null, We.value, Se), (Ie = We.onVnodeBeforeMount) && Gn(Ie, _e, R);
    }
    Ye && _o(R, null, _e, "beforeMount");
    const nt = Fd(Ne, He);
    nt && He.beforeEnter(Ee), l(Ee, W, ge), ((Ie = We && We.onVnodeMounted) || nt || Ye) && yn(() => {
      Ie && Gn(Ie, _e, R), nt && He.enter(Ee), Ye && _o(R, null, _e, "mounted");
    }, Ne);
  }, ie = (R, W, ge, _e, Ne) => {
    if (ge && Z(R, ge), _e)
      for (let Se = 0; Se < _e.length; Se++)
        Z(R, _e[Se]);
    if (Ne) {
      let Se = Ne.subTree;
      if (W === Se || zu(Se.type) && (Se.ssContent === W || Se.ssFallback === W)) {
        const Pe = Ne.vnode;
        ie(
          R,
          Pe,
          Pe.scopeId,
          Pe.slotScopeIds,
          Ne.parent
        );
      }
    }
  }, xe = (R, W, ge, _e, Ne, Se, Pe, Le, Ee = 0) => {
    for (let Ie = Ee; Ie < R.length; Ie++) {
      const We = R[Ie] = Le ? Fr(R[Ie]) : zn(R[Ie]);
      j(
        null,
        We,
        W,
        ge,
        _e,
        Ne,
        Se,
        Pe,
        Le
      );
    }
  }, N = (R, W, ge, _e, Ne, Se, Pe) => {
    const Le = W.el = R.el;
    let { patchFlag: Ee, dynamicChildren: Ie, dirs: We } = W;
    Ee |= R.patchFlag & 16;
    const je = R.props || Nt, He = W.props || Nt;
    let Ye;
    if (ge && xo(ge, !1), (Ye = He.onVnodeBeforeUpdate) && Gn(Ye, ge, W, R), We && _o(W, R, ge, "beforeUpdate"), ge && xo(ge, !0), (je.innerHTML && He.innerHTML == null || je.textContent && He.textContent == null) && B(Le, ""), Ie ? de(
      R.dynamicChildren,
      Ie,
      Le,
      ge,
      _e,
      is(W, Ne),
      Se
    ) : Pe || le(
      R,
      W,
      Le,
      null,
      ge,
      _e,
      is(W, Ne),
      Se,
      !1
    ), Ee > 0) {
      if (Ee & 16)
        Q(Le, je, He, ge, Ne);
      else if (Ee & 2 && je.class !== He.class && f(Le, "class", null, He.class, Ne), Ee & 4 && f(Le, "style", je.style, He.style, Ne), Ee & 8) {
        const nt = W.dynamicProps;
        for (let dt = 0; dt < nt.length; dt++) {
          const pt = nt[dt], Et = je[pt], Bt = He[pt];
          (Bt !== Et || pt === "value") && f(Le, pt, Et, Bt, Ne, ge);
        }
      }
      Ee & 1 && R.children !== W.children && B(Le, W.children);
    } else !Pe && Ie == null && Q(Le, je, He, ge, Ne);
    ((Ye = He.onVnodeUpdated) || We) && yn(() => {
      Ye && Gn(Ye, ge, W, R), We && _o(W, R, ge, "updated");
    }, _e);
  }, de = (R, W, ge, _e, Ne, Se, Pe) => {
    for (let Le = 0; Le < W.length; Le++) {
      const Ee = R[Le], Ie = W[Le], We = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        Ee.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (Ee.type === Be || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !_a(Ee, Ie) || // - In the case of a component, it could contain anything.
        Ee.shapeFlag & 198) ? G(Ee.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          ge
        )
      );
      j(
        Ee,
        Ie,
        We,
        null,
        _e,
        Ne,
        Se,
        Pe,
        !0
      );
    }
  }, Q = (R, W, ge, _e, Ne) => {
    if (W !== ge) {
      if (W !== Nt)
        for (const Se in W)
          !Ca(Se) && !(Se in ge) && f(
            R,
            Se,
            W[Se],
            null,
            Ne,
            _e
          );
      for (const Se in ge) {
        if (Ca(Se)) continue;
        const Pe = ge[Se], Le = W[Se];
        Pe !== Le && Se !== "value" && f(R, Se, Le, Pe, Ne, _e);
      }
      "value" in ge && f(R, "value", W.value, ge.value, Ne);
    }
  }, he = (R, W, ge, _e, Ne, Se, Pe, Le, Ee) => {
    const Ie = W.el = R ? R.el : m(""), We = W.anchor = R ? R.anchor : m("");
    let { patchFlag: je, dynamicChildren: He, slotScopeIds: Ye } = W;
    Ye && (Le = Le ? Le.concat(Ye) : Ye), R == null ? (l(Ie, ge, _e), l(We, ge, _e), xe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      W.children || [],
      ge,
      We,
      Ne,
      Se,
      Pe,
      Le,
      Ee
    )) : je > 0 && je & 64 && He && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    R.dynamicChildren ? (de(
      R.dynamicChildren,
      He,
      ge,
      Ne,
      Se,
      Pe,
      Le
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (W.key != null || Ne && W === Ne.subTree) && Gs(
      R,
      W,
      !0
      /* shallow */
    )) : le(
      R,
      W,
      ge,
      We,
      Ne,
      Se,
      Pe,
      Le,
      Ee
    );
  }, z = (R, W, ge, _e, Ne, Se, Pe, Le, Ee) => {
    W.slotScopeIds = Le, R == null ? W.shapeFlag & 512 ? Ne.ctx.activate(
      W,
      ge,
      _e,
      Pe,
      Ee
    ) : U(
      W,
      ge,
      _e,
      Ne,
      Se,
      Pe,
      Ee
    ) : ne(R, W, Ee);
  }, U = (R, W, ge, _e, Ne, Se, Pe) => {
    const Le = R.component = tf(
      R,
      _e,
      Ne
    );
    if (Du(R) && (Le.ctx.renderer = oe), rf(Le, !1, Pe), Le.asyncDep) {
      if (Ne && Ne.registerDep(Le, se, Pe), !R.el) {
        const Ee = Le.subTree = yt(Pr);
        X(null, Ee, W, ge);
      }
    } else
      se(
        Le,
        R,
        W,
        ge,
        Ne,
        Se,
        Pe
      );
  }, ne = (R, W, ge) => {
    const _e = W.component = R.component;
    if (Hd(R, W, ge))
      if (_e.asyncDep && !_e.asyncResolved) {
        H(_e, W, ge);
        return;
      } else
        _e.next = W, _e.update();
    else
      W.el = R.el, _e.vnode = W;
  }, se = (R, W, ge, _e, Ne, Se, Pe) => {
    const Le = () => {
      if (R.isMounted) {
        let { next: je, bu: He, u: Ye, parent: nt, vnode: dt } = R;
        {
          const Dt = Wu(R);
          if (Dt) {
            je && (je.el = dt.el, H(R, je, Pe)), Dt.asyncDep.then(() => {
              R.isUnmounted || Le();
            });
            return;
          }
        }
        let pt = je, Et;
        xo(R, !1), je ? (je.el = dt.el, H(R, je, Pe)) : je = dt, He && Ya(He), (Et = je.props && je.props.onVnodeBeforeUpdate) && Gn(Et, nt, je, dt), xo(R, !0);
        const Bt = vl(R), Vt = R.subTree;
        R.subTree = Bt, j(
          Vt,
          Bt,
          // parent may have changed if it's in a teleport
          G(Vt.el),
          // anchor may have changed if it's in a fragment
          D(Vt),
          R,
          Ne,
          Se
        ), je.el = Bt.el, pt === null && zd(R, Bt.el), Ye && yn(Ye, Ne), (Et = je.props && je.props.onVnodeUpdated) && yn(
          () => Gn(Et, nt, je, dt),
          Ne
        );
      } else {
        let je;
        const { el: He, props: Ye } = W, { bm: nt, m: dt, parent: pt, root: Et, type: Bt } = R, Vt = $o(W);
        xo(R, !1), nt && Ya(nt), !Vt && (je = Ye && Ye.onVnodeBeforeMount) && Gn(je, pt, W), xo(R, !0);
        {
          Et.ce && // @ts-expect-error _def is private
          Et.ce._def.shadowRoot !== !1 && Et.ce._injectChildStyle(Bt);
          const Dt = R.subTree = vl(R);
          j(
            null,
            Dt,
            ge,
            _e,
            R,
            Ne,
            Se
          ), W.el = Dt.el;
        }
        if (dt && yn(dt, Ne), !Vt && (je = Ye && Ye.onVnodeMounted)) {
          const Dt = W;
          yn(
            () => Gn(je, pt, Dt),
            Ne
          );
        }
        (W.shapeFlag & 256 || pt && $o(pt.vnode) && pt.vnode.shapeFlag & 256) && R.a && yn(R.a, Ne), R.isMounted = !0, W = ge = _e = null;
      }
    };
    R.scope.on();
    const Ee = R.effect = new tu(Le);
    R.scope.off();
    const Ie = R.update = Ee.run.bind(Ee), We = R.job = Ee.runIfDirty.bind(Ee);
    We.i = R, We.id = R.uid, Ee.scheduler = () => Ks(We), xo(R, !0), Ie();
  }, H = (R, W, ge) => {
    W.component = R;
    const _e = R.vnode.props;
    R.vnode = W, R.next = null, Rd(R, W.props, _e, ge), Ld(R, W.children, ge), Rr(), ol(R), Ar();
  }, le = (R, W, ge, _e, Ne, Se, Pe, Le, Ee = !1) => {
    const Ie = R && R.children, We = R ? R.shapeFlag : 0, je = W.children, { patchFlag: He, shapeFlag: Ye } = W;
    if (He > 0) {
      if (He & 128) {
        Te(
          Ie,
          je,
          ge,
          _e,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        );
        return;
      } else if (He & 256) {
        Ce(
          Ie,
          je,
          ge,
          _e,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        );
        return;
      }
    }
    Ye & 8 ? (We & 16 && st(Ie, Ne, Se), je !== Ie && B(ge, je)) : We & 16 ? Ye & 16 ? Te(
      Ie,
      je,
      ge,
      _e,
      Ne,
      Se,
      Pe,
      Le,
      Ee
    ) : st(Ie, Ne, Se, !0) : (We & 8 && B(ge, ""), Ye & 16 && xe(
      je,
      ge,
      _e,
      Ne,
      Se,
      Pe,
      Le,
      Ee
    ));
  }, Ce = (R, W, ge, _e, Ne, Se, Pe, Le, Ee) => {
    R = R || ko, W = W || ko;
    const Ie = R.length, We = W.length, je = Math.min(Ie, We);
    let He;
    for (He = 0; He < je; He++) {
      const Ye = W[He] = Ee ? Fr(W[He]) : zn(W[He]);
      j(
        R[He],
        Ye,
        ge,
        null,
        Ne,
        Se,
        Pe,
        Le,
        Ee
      );
    }
    Ie > We ? st(
      R,
      Ne,
      Se,
      !0,
      !1,
      je
    ) : xe(
      W,
      ge,
      _e,
      Ne,
      Se,
      Pe,
      Le,
      Ee,
      je
    );
  }, Te = (R, W, ge, _e, Ne, Se, Pe, Le, Ee) => {
    let Ie = 0;
    const We = W.length;
    let je = R.length - 1, He = We - 1;
    for (; Ie <= je && Ie <= He; ) {
      const Ye = R[Ie], nt = W[Ie] = Ee ? Fr(W[Ie]) : zn(W[Ie]);
      if (_a(Ye, nt))
        j(
          Ye,
          nt,
          ge,
          null,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        );
      else
        break;
      Ie++;
    }
    for (; Ie <= je && Ie <= He; ) {
      const Ye = R[je], nt = W[He] = Ee ? Fr(W[He]) : zn(W[He]);
      if (_a(Ye, nt))
        j(
          Ye,
          nt,
          ge,
          null,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        );
      else
        break;
      je--, He--;
    }
    if (Ie > je) {
      if (Ie <= He) {
        const Ye = He + 1, nt = Ye < We ? W[Ye].el : _e;
        for (; Ie <= He; )
          j(
            null,
            W[Ie] = Ee ? Fr(W[Ie]) : zn(W[Ie]),
            ge,
            nt,
            Ne,
            Se,
            Pe,
            Le,
            Ee
          ), Ie++;
      }
    } else if (Ie > He)
      for (; Ie <= je; )
        Ge(R[Ie], Ne, Se, !0), Ie++;
    else {
      const Ye = Ie, nt = Ie, dt = /* @__PURE__ */ new Map();
      for (Ie = nt; Ie <= He; Ie++) {
        const xt = W[Ie] = Ee ? Fr(W[Ie]) : zn(W[Ie]);
        xt.key != null && dt.set(xt.key, Ie);
      }
      let pt, Et = 0;
      const Bt = He - nt + 1;
      let Vt = !1, Dt = 0;
      const sn = new Array(Bt);
      for (Ie = 0; Ie < Bt; Ie++) sn[Ie] = 0;
      for (Ie = Ye; Ie <= je; Ie++) {
        const xt = R[Ie];
        if (Et >= Bt) {
          Ge(xt, Ne, Se, !0);
          continue;
        }
        let we;
        if (xt.key != null)
          we = dt.get(xt.key);
        else
          for (pt = nt; pt <= He; pt++)
            if (sn[pt - nt] === 0 && _a(xt, W[pt])) {
              we = pt;
              break;
            }
        we === void 0 ? Ge(xt, Ne, Se, !0) : (sn[we - nt] = Ie + 1, we >= Dt ? Dt = we : Vt = !0, j(
          xt,
          W[we],
          ge,
          null,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        ), Et++);
      }
      const Wn = Vt ? Md(sn) : ko;
      for (pt = Wn.length - 1, Ie = Bt - 1; Ie >= 0; Ie--) {
        const xt = nt + Ie, we = W[xt], bn = xt + 1 < We ? W[xt + 1].el : _e;
        sn[Ie] === 0 ? j(
          null,
          we,
          ge,
          bn,
          Ne,
          Se,
          Pe,
          Le,
          Ee
        ) : Vt && (pt < 0 || Ie !== Wn[pt] ? Fe(we, ge, bn, 2) : pt--);
      }
    }
  }, Fe = (R, W, ge, _e, Ne = null) => {
    const { el: Se, type: Pe, transition: Le, children: Ee, shapeFlag: Ie } = R;
    if (Ie & 6) {
      Fe(R.component.subTree, W, ge, _e);
      return;
    }
    if (Ie & 128) {
      R.suspense.move(W, ge, _e);
      return;
    }
    if (Ie & 64) {
      Pe.move(R, W, ge, oe);
      return;
    }
    if (Pe === Be) {
      l(Se, W, ge);
      for (let je = 0; je < Ee.length; je++)
        Fe(Ee[je], W, ge, _e);
      l(R.anchor, W, ge);
      return;
    }
    if (Pe === Qa) {
      P(R, W, ge);
      return;
    }
    if (_e !== 2 && Ie & 1 && Le)
      if (_e === 0)
        Le.beforeEnter(Se), l(Se, W, ge), yn(() => Le.enter(Se), Ne);
      else {
        const { leave: je, delayLeave: He, afterLeave: Ye } = Le, nt = () => {
          R.ctx.isUnmounted ? d(Se) : l(Se, W, ge);
        }, dt = () => {
          je(Se, () => {
            nt(), Ye && Ye();
          });
        };
        He ? He(Se, nt, dt) : dt();
      }
    else
      l(Se, W, ge);
  }, Ge = (R, W, ge, _e = !1, Ne = !1) => {
    const {
      type: Se,
      props: Pe,
      ref: Le,
      children: Ee,
      dynamicChildren: Ie,
      shapeFlag: We,
      patchFlag: je,
      dirs: He,
      cacheIndex: Ye
    } = R;
    if (je === -2 && (Ne = !1), Le != null && (Rr(), Na(Le, null, ge, R, !0), Ar()), Ye != null && (W.renderCache[Ye] = void 0), We & 256) {
      W.ctx.deactivate(R);
      return;
    }
    const nt = We & 1 && He, dt = !$o(R);
    let pt;
    if (dt && (pt = Pe && Pe.onVnodeBeforeUnmount) && Gn(pt, W, R), We & 6)
      vt(R.component, ge, _e);
    else {
      if (We & 128) {
        R.suspense.unmount(ge, _e);
        return;
      }
      nt && _o(R, null, W, "beforeUnmount"), We & 64 ? R.type.remove(
        R,
        W,
        ge,
        oe,
        _e
      ) : Ie && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !Ie.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (Se !== Be || je > 0 && je & 64) ? st(
        Ie,
        W,
        ge,
        !1,
        !0
      ) : (Se === Be && je & 384 || !Ne && We & 16) && st(Ee, W, ge), _e && Qe(R);
    }
    (dt && (pt = Pe && Pe.onVnodeUnmounted) || nt) && yn(() => {
      pt && Gn(pt, W, R), nt && _o(R, null, W, "unmounted");
    }, ge);
  }, Qe = (R) => {
    const { type: W, el: ge, anchor: _e, transition: Ne } = R;
    if (W === Be) {
      Ze(ge, _e);
      return;
    }
    if (W === Qa) {
      J(R);
      return;
    }
    const Se = () => {
      d(ge), Ne && !Ne.persisted && Ne.afterLeave && Ne.afterLeave();
    };
    if (R.shapeFlag & 1 && Ne && !Ne.persisted) {
      const { leave: Pe, delayLeave: Le } = Ne, Ee = () => Pe(ge, Se);
      Le ? Le(R.el, Se, Ee) : Ee();
    } else
      Se();
  }, Ze = (R, W) => {
    let ge;
    for (; R !== W; )
      ge = re(R), d(R), R = ge;
    d(W);
  }, vt = (R, W, ge) => {
    const {
      bum: _e,
      scope: Ne,
      job: Se,
      subTree: Pe,
      um: Le,
      m: Ee,
      a: Ie,
      parent: We,
      slots: { __: je }
    } = R;
    ml(Ee), ml(Ie), _e && Ya(_e), We && tt(je) && je.forEach((He) => {
      We.renderCache[He] = void 0;
    }), Ne.stop(), Se && (Se.flags |= 8, Ge(Pe, R, W, ge)), Le && yn(Le, W), yn(() => {
      R.isUnmounted = !0;
    }, W), W && W.pendingBranch && !W.isUnmounted && R.asyncDep && !R.asyncResolved && R.suspenseId === W.pendingId && (W.deps--, W.deps === 0 && W.resolve());
  }, st = (R, W, ge, _e = !1, Ne = !1, Se = 0) => {
    for (let Pe = Se; Pe < R.length; Pe++)
      Ge(R[Pe], W, ge, _e, Ne);
  }, D = (R) => {
    if (R.shapeFlag & 6)
      return D(R.component.subTree);
    if (R.shapeFlag & 128)
      return R.suspense.next();
    const W = re(R.anchor || R.el), ge = W && W[Ou];
    return ge ? re(ge) : W;
  };
  let x = !1;
  const V = (R, W, ge) => {
    R == null ? W._vnode && Ge(W._vnode, null, null, !0) : j(
      W._vnode || null,
      R,
      W,
      null,
      null,
      null,
      ge
    ), W._vnode = R, x || (x = !0, ol(), Cu(), x = !1);
  }, oe = {
    p: j,
    um: Ge,
    m: Fe,
    r: Qe,
    mt: U,
    mc: xe,
    pc: le,
    pbc: de,
    n: D,
    o: t
  };
  return {
    render: V,
    hydrate: void 0,
    createApp: Nd(V)
  };
}
function is({ type: t, props: r }, i) {
  return i === "svg" && t === "foreignObject" || i === "mathml" && t === "annotation-xml" && r && r.encoding && r.encoding.includes("html") ? void 0 : i;
}
function xo({ effect: t, job: r }, i) {
  i ? (t.flags |= 32, r.flags |= 4) : (t.flags &= -33, r.flags &= -5);
}
function Fd(t, r) {
  return (!t || t && !t.pendingBranch) && r && !r.persisted;
}
function Gs(t, r, i = !1) {
  const l = t.children, d = r.children;
  if (tt(l) && tt(d))
    for (let f = 0; f < l.length; f++) {
      const c = l[f];
      let m = d[f];
      m.shapeFlag & 1 && !m.dynamicChildren && ((m.patchFlag <= 0 || m.patchFlag === 32) && (m = d[f] = Fr(d[f]), m.el = c.el), !i && m.patchFlag !== -2 && Gs(c, m)), m.type === Si && (m.el = c.el), m.type === Pr && !m.el && (m.el = c.el);
    }
}
function Md(t) {
  const r = t.slice(), i = [0];
  let l, d, f, c, m;
  const g = t.length;
  for (l = 0; l < g; l++) {
    const q = t[l];
    if (q !== 0) {
      if (d = i[i.length - 1], t[d] < q) {
        r[l] = d, i.push(l);
        continue;
      }
      for (f = 0, c = i.length - 1; f < c; )
        m = f + c >> 1, t[i[m]] < q ? f = m + 1 : c = m;
      q < t[i[f]] && (f > 0 && (r[l] = i[f - 1]), i[f] = l);
    }
  }
  for (f = i.length, c = i[f - 1]; f-- > 0; )
    i[f] = c, c = r[c];
  return i;
}
function Wu(t) {
  const r = t.subTree.component;
  if (r)
    return r.asyncDep && !r.asyncResolved ? r : Wu(r);
}
function ml(t) {
  if (t)
    for (let r = 0; r < t.length; r++)
      t[r].flags |= 8;
}
const Bd = Symbol.for("v-scx"), Kd = () => Ea(Bd);
function xi(t, r) {
  return Hs(t, null, r);
}
function Ut(t, r, i) {
  return Hs(t, r, i);
}
function Hs(t, r, i = Nt) {
  const { immediate: l, deep: d, flush: f, once: c } = i, m = an({}, i), g = r && l || !r && f !== "post";
  let q;
  if (ja) {
    if (f === "sync") {
      const Z = Kd();
      q = Z.__watcherHandles || (Z.__watcherHandles = []);
    } else if (!g) {
      const Z = () => {
      };
      return Z.stop = Xn, Z.resume = Xn, Z.pause = Xn, Z;
    }
  }
  const B = zt;
  m.call = (Z, k, j) => Qn(Z, B, k, j);
  let G = !1;
  f === "post" ? m.scheduler = (Z) => {
    yn(Z, B && B.suspense);
  } : f !== "sync" && (G = !0, m.scheduler = (Z, k) => {
    k ? Z() : Ks(Z);
  }), m.augmentJob = (Z) => {
    r && (Z.flags |= 4), G && (Z.flags |= 2, B && (Z.id = B.uid, Z.i = B));
  };
  const re = Zc(t, r, m);
  return ja && (q ? q.push(re) : g && re()), re;
}
function qd(t, r, i) {
  const l = this.proxy, d = Ft(t) ? t.includes(".") ? Gu(l, t) : () => l[t] : t.bind(l, l);
  let f;
  it(r) ? f = r : (f = r.handler, i = r);
  const c = Ka(this), m = Hs(d, f.bind(l), i);
  return c(), m;
}
function Gu(t, r) {
  const i = r.split(".");
  return () => {
    let l = t;
    for (let d = 0; d < i.length && l; d++)
      l = l[i[d]];
    return l;
  };
}
const Ud = (t, r) => r === "modelValue" || r === "model-value" ? t.modelModifiers : t[`${r}Modifiers`] || t[`${Pn(r)}Modifiers`] || t[`${Eo(r)}Modifiers`];
function Vd(t, r, ...i) {
  if (t.isUnmounted) return;
  const l = t.vnode.props || Nt;
  let d = i;
  const f = r.startsWith("update:"), c = f && Ud(l, r.slice(7));
  c && (c.trim && (d = i.map((B) => Ft(B) ? B.trim() : B)), c.number && (d = i.map(ti)));
  let m, g = l[m = es(r)] || // also try camelCase event handler (#2249)
  l[m = es(Pn(r))];
  !g && f && (g = l[m = es(Eo(r))]), g && Qn(
    g,
    t,
    6,
    d
  );
  const q = l[m + "Once"];
  if (q) {
    if (!t.emitted)
      t.emitted = {};
    else if (t.emitted[m])
      return;
    t.emitted[m] = !0, Qn(
      q,
      t,
      6,
      d
    );
  }
}
function Hu(t, r, i = !1) {
  const l = r.emitsCache, d = l.get(t);
  if (d !== void 0)
    return d;
  const f = t.emits;
  let c = {}, m = !1;
  if (!it(t)) {
    const g = (q) => {
      const B = Hu(q, r, !0);
      B && (m = !0, an(c, B));
    };
    !i && r.mixins.length && r.mixins.forEach(g), t.extends && g(t.extends), t.mixins && t.mixins.forEach(g);
  }
  return !f && !m ? (At(t) && l.set(t, null), null) : (tt(f) ? f.forEach((g) => c[g] = null) : an(c, f), At(t) && l.set(t, c), c);
}
function Ci(t, r) {
  return !t || !fi(r) ? !1 : (r = r.slice(2).replace(/Once$/, ""), St(t, r[0].toLowerCase() + r.slice(1)) || St(t, Eo(r)) || St(t, r));
}
function vl(t) {
  const {
    type: r,
    vnode: i,
    proxy: l,
    withProxy: d,
    propsOptions: [f],
    slots: c,
    attrs: m,
    emit: g,
    render: q,
    renderCache: B,
    props: G,
    data: re,
    setupState: Z,
    ctx: k,
    inheritAttrs: j
  } = t, F = ii(t);
  let X, A;
  try {
    if (i.shapeFlag & 4) {
      const J = d || l, Oe = J;
      X = zn(
        q.call(
          Oe,
          J,
          B,
          G,
          Z,
          re,
          k
        )
      ), A = m;
    } else {
      const J = r;
      X = zn(
        J.length > 1 ? J(
          G,
          { attrs: m, slots: c, emit: g }
        ) : J(
          G,
          null
        )
      ), A = r.props ? m : Wd(m);
    }
  } catch (J) {
    Da.length = 0, wi(J, t, 1), X = yt(Pr);
  }
  let P = X;
  if (A && j !== !1) {
    const J = Object.keys(A), { shapeFlag: Oe } = P;
    J.length && Oe & 7 && (f && J.some(Ds) && (A = Gd(
      A,
      f
    )), P = Fo(P, A, !1, !0));
  }
  return i.dirs && (P = Fo(P, null, !1, !0), P.dirs = P.dirs ? P.dirs.concat(i.dirs) : i.dirs), i.transition && qs(P, i.transition), X = P, ii(F), X;
}
const Wd = (t) => {
  let r;
  for (const i in t)
    (i === "class" || i === "style" || fi(i)) && ((r || (r = {}))[i] = t[i]);
  return r;
}, Gd = (t, r) => {
  const i = {};
  for (const l in t)
    (!Ds(l) || !(l.slice(9) in r)) && (i[l] = t[l]);
  return i;
};
function Hd(t, r, i) {
  const { props: l, children: d, component: f } = t, { props: c, children: m, patchFlag: g } = r, q = f.emitsOptions;
  if (r.dirs || r.transition)
    return !0;
  if (i && g >= 0) {
    if (g & 1024)
      return !0;
    if (g & 16)
      return l ? yl(l, c, q) : !!c;
    if (g & 8) {
      const B = r.dynamicProps;
      for (let G = 0; G < B.length; G++) {
        const re = B[G];
        if (c[re] !== l[re] && !Ci(q, re))
          return !0;
      }
    }
  } else
    return (d || m) && (!m || !m.$stable) ? !0 : l === c ? !1 : l ? c ? yl(l, c, q) : !0 : !!c;
  return !1;
}
function yl(t, r, i) {
  const l = Object.keys(r);
  if (l.length !== Object.keys(t).length)
    return !0;
  for (let d = 0; d < l.length; d++) {
    const f = l[d];
    if (r[f] !== t[f] && !Ci(i, f))
      return !0;
  }
  return !1;
}
function zd({ vnode: t, parent: r }, i) {
  for (; r; ) {
    const l = r.subTree;
    if (l.suspense && l.suspense.activeBranch === t && (l.el = t.el), l === t)
      (t = r.vnode).el = i, r = r.parent;
    else
      break;
  }
}
const zu = (t) => t.__isSuspense;
function Yd(t, r) {
  r && r.pendingBranch ? tt(t) ? r.effects.push(...t) : r.effects.push(t) : nd(t);
}
const Be = Symbol.for("v-fgt"), Si = Symbol.for("v-txt"), Pr = Symbol.for("v-cmt"), Qa = Symbol.for("v-stc"), Da = [];
let Nn = null;
function te(t = !1) {
  Da.push(Nn = t ? null : []);
}
function Xd() {
  Da.pop(), Nn = Da[Da.length - 1] || null;
}
let La = 1;
function gl(t, r = !1) {
  La += t, t < 0 && Nn && r && (Nn.hasOnce = !0);
}
function Yu(t) {
  return t.dynamicChildren = La > 0 ? Nn || ko : null, Xd(), La > 0 && Nn && Nn.push(t), t;
}
function pe(t, r, i, l, d, f) {
  return Yu(
    p(
      t,
      r,
      i,
      l,
      d,
      f,
      !0
    )
  );
}
function kt(t, r, i, l, d) {
  return Yu(
    yt(
      t,
      r,
      i,
      l,
      d,
      !0
    )
  );
}
function zs(t) {
  return t ? t.__v_isVNode === !0 : !1;
}
function _a(t, r) {
  return t.type === r.type && t.key === r.key;
}
const Xu = ({ key: t }) => t ?? null, Ja = ({
  ref: t,
  ref_key: r,
  ref_for: i
}) => (typeof t == "number" && (t = "" + t), t != null ? Ft(t) || $t(t) || it(t) ? { i: Ht, r: t, k: r, f: !!i } : t : null);
function p(t, r = null, i = null, l = 0, d = null, f = t === Be ? 0 : 1, c = !1, m = !1) {
  const g = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t,
    props: r,
    key: r && Xu(r),
    ref: r && Ja(r),
    scopeId: Iu,
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
    shapeFlag: f,
    patchFlag: l,
    dynamicProps: d,
    dynamicChildren: null,
    appContext: null,
    ctx: Ht
  };
  return m ? (Xs(g, i), f & 128 && t.normalize(g)) : i && (g.shapeFlag |= Ft(i) ? 8 : 16), La > 0 && // avoid a block node from tracking itself
  !c && // has current parent block
  Nn && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (g.patchFlag > 0 || f & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  g.patchFlag !== 32 && Nn.push(g), g;
}
const yt = Qd;
function Qd(t, r = null, i = null, l = 0, d = null, f = !1) {
  if ((!t || t === Au) && (t = Pr), zs(t)) {
    const m = Fo(
      t,
      r,
      !0
      /* mergeRef: true */
    );
    return i && Xs(m, i), La > 0 && !f && Nn && (m.shapeFlag & 6 ? Nn[Nn.indexOf(t)] = m : Nn.push(m)), m.patchFlag = -2, m;
  }
  if (uf(t) && (t = t.__vccOpts), r) {
    r = Jd(r);
    let { class: m, style: g } = r;
    m && !Ft(m) && (r.class = It(m)), At(g) && (Ms(g) && !tt(g) && (g = an({}, g)), r.style = kr(g));
  }
  const c = Ft(t) ? 1 : zu(t) ? 128 : rd(t) ? 64 : At(t) ? 4 : it(t) ? 2 : 0;
  return p(
    t,
    r,
    i,
    l,
    d,
    c,
    f,
    !0
  );
}
function Jd(t) {
  return t ? Ms(t) || Mu(t) ? an({}, t) : t : null;
}
function Fo(t, r, i = !1, l = !1) {
  const { props: d, ref: f, patchFlag: c, children: m, transition: g } = t, q = r ? Ju(d || {}, r) : d, B = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: t.type,
    props: q,
    key: q && Xu(q),
    ref: r && r.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      i && f ? tt(f) ? f.concat(Ja(r)) : [f, Ja(r)] : Ja(r)
    ) : f,
    scopeId: t.scopeId,
    slotScopeIds: t.slotScopeIds,
    children: m,
    target: t.target,
    targetStart: t.targetStart,
    targetAnchor: t.targetAnchor,
    staticCount: t.staticCount,
    shapeFlag: t.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: r && t.type !== Be ? c === -1 ? 16 : c | 16 : c,
    dynamicProps: t.dynamicProps,
    dynamicChildren: t.dynamicChildren,
    appContext: t.appContext,
    dirs: t.dirs,
    transition: g,
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
  return g && l && qs(
    B,
    g.clone(B)
  ), B;
}
function Ys(t = " ", r = 0) {
  return yt(Si, null, t, r);
}
function Qu(t, r) {
  const i = yt(Qa, null, t);
  return i.staticCount = r, i;
}
function ze(t = "", r = !1) {
  return r ? (te(), kt(Pr, null, t)) : yt(Pr, null, t);
}
function zn(t) {
  return t == null || typeof t == "boolean" ? yt(Pr) : tt(t) ? yt(
    Be,
    null,
    // #3666, avoid reference pollution when reusing vnode
    t.slice()
  ) : zs(t) ? Fr(t) : yt(Si, null, String(t));
}
function Fr(t) {
  return t.el === null && t.patchFlag !== -1 || t.memo ? t : Fo(t);
}
function Xs(t, r) {
  let i = 0;
  const { shapeFlag: l } = t;
  if (r == null)
    r = null;
  else if (tt(r))
    i = 16;
  else if (typeof r == "object")
    if (l & 65) {
      const d = r.default;
      d && (d._c && (d._d = !1), Xs(t, d()), d._c && (d._d = !0));
      return;
    } else {
      i = 32;
      const d = r._;
      !d && !Mu(r) ? r._ctx = Ht : d === 3 && Ht && (Ht.slots._ === 1 ? r._ = 1 : (r._ = 2, t.patchFlag |= 1024));
    }
  else it(r) ? (r = { default: r, _ctx: Ht }, i = 32) : (r = String(r), l & 64 ? (i = 16, r = [Ys(r)]) : i = 8);
  t.children = r, t.shapeFlag |= i;
}
function Ju(...t) {
  const r = {};
  for (let i = 0; i < t.length; i++) {
    const l = t[i];
    for (const d in l)
      if (d === "class")
        r.class !== l.class && (r.class = It([r.class, l.class]));
      else if (d === "style")
        r.style = kr([r.style, l.style]);
      else if (fi(d)) {
        const f = r[d], c = l[d];
        c && f !== c && !(tt(f) && f.includes(c)) && (r[d] = f ? [].concat(f, c) : c);
      } else d !== "" && (r[d] = l[d]);
  }
  return r;
}
function Gn(t, r, i, l = null) {
  Qn(t, r, 7, [
    i,
    l
  ]);
}
const Zd = ju();
let ef = 0;
function tf(t, r, i) {
  const l = t.type, d = (r ? r.appContext : t.appContext) || Zd, f = {
    uid: ef++,
    vnode: t,
    type: l,
    parent: r,
    appContext: d,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Jl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: r ? r.provides : Object.create(d.provides),
    ids: r ? r.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ku(l, d),
    emitsOptions: Hu(l, d),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: Nt,
    // inheritAttrs
    inheritAttrs: l.inheritAttrs,
    // state
    ctx: Nt,
    data: Nt,
    props: Nt,
    attrs: Nt,
    slots: Nt,
    refs: Nt,
    setupState: Nt,
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
  return f.ctx = { _: f }, f.root = r ? r.root : f, f.emit = Vd.bind(null, f), t.ce && t.ce(f), f;
}
let zt = null;
const nf = () => zt || Ht;
let li, _s;
{
  const t = mi(), r = (i, l) => {
    let d;
    return (d = t[i]) || (d = t[i] = []), d.push(l), (f) => {
      d.length > 1 ? d.forEach((c) => c(f)) : d[0](f);
    };
  };
  li = r(
    "__VUE_INSTANCE_SETTERS__",
    (i) => zt = i
  ), _s = r(
    "__VUE_SSR_SETTERS__",
    (i) => ja = i
  );
}
const Ka = (t) => {
  const r = zt;
  return li(t), t.scope.on(), () => {
    t.scope.off(), li(r);
  };
}, bl = () => {
  zt && zt.scope.off(), li(null);
};
function Zu(t) {
  return t.vnode.shapeFlag & 4;
}
let ja = !1;
function rf(t, r = !1, i = !1) {
  r && _s(r);
  const { props: l, children: d } = t.vnode, f = Zu(t);
  Dd(t, l, f, r), kd(t, d, i || r);
  const c = f ? of(t, r) : void 0;
  return r && _s(!1), c;
}
function of(t, r) {
  const i = t.type;
  t.accessCache = /* @__PURE__ */ Object.create(null), t.proxy = new Proxy(t.ctx, wd);
  const { setup: l } = i;
  if (l) {
    Rr();
    const d = t.setupContext = l.length > 1 ? sf(t) : null, f = Ka(t), c = Ba(
      l,
      t,
      0,
      [
        t.props,
        d
      ]
    ), m = Gl(c);
    if (Ar(), f(), (m || t.sp) && !$o(t) && Eu(t), m) {
      if (c.then(bl, bl), r)
        return c.then((g) => {
          wl(t, g);
        }).catch((g) => {
          wi(g, t, 0);
        });
      t.asyncDep = c;
    } else
      wl(t, c);
  } else
    ec(t);
}
function wl(t, r, i) {
  it(r) ? t.type.__ssrInlineRender ? t.ssrRender = r : t.render = r : At(r) && (t.setupState = bu(r)), ec(t);
}
function ec(t, r, i) {
  const l = t.type;
  t.render || (t.render = l.render || Xn);
  {
    const d = Ka(t);
    Rr();
    try {
      _d(t);
    } finally {
      Ar(), d();
    }
  }
}
const af = {
  get(t, r) {
    return on(t, "get", ""), t[r];
  }
};
function sf(t) {
  const r = (i) => {
    t.exposed = i || {};
  };
  return {
    attrs: new Proxy(t.attrs, af),
    slots: t.slots,
    emit: t.emit,
    expose: r
  };
}
function Ii(t) {
  return t.exposed ? t.exposeProxy || (t.exposeProxy = new Proxy(bu(bi(t.exposed)), {
    get(r, i) {
      if (i in r)
        return r[i];
      if (i in Ta)
        return Ta[i](t);
    },
    has(r, i) {
      return i in r || i in Ta;
    }
  })) : t.proxy;
}
function lf(t, r = !0) {
  return it(t) ? t.displayName || t.name : t.name || r && t.__name;
}
function uf(t) {
  return it(t) && "__vccOpts" in t;
}
const Xe = (t, r) => Qc(t, r, ja), cf = "3.5.17";
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let xs;
const _l = typeof window < "u" && window.trustedTypes;
if (_l)
  try {
    xs = /* @__PURE__ */ _l.createPolicy("vue", {
      createHTML: (t) => t
    });
  } catch {
  }
const tc = xs ? (t) => xs.createHTML(t) : (t) => t, df = "http://www.w3.org/2000/svg", ff = "http://www.w3.org/1998/Math/MathML", Ir = typeof document < "u" ? document : null, xl = Ir && /* @__PURE__ */ Ir.createElement("template"), pf = {
  insert: (t, r, i) => {
    r.insertBefore(t, i || null);
  },
  remove: (t) => {
    const r = t.parentNode;
    r && r.removeChild(t);
  },
  createElement: (t, r, i, l) => {
    const d = r === "svg" ? Ir.createElementNS(df, t) : r === "mathml" ? Ir.createElementNS(ff, t) : i ? Ir.createElement(t, { is: i }) : Ir.createElement(t);
    return t === "select" && l && l.multiple != null && d.setAttribute("multiple", l.multiple), d;
  },
  createText: (t) => Ir.createTextNode(t),
  createComment: (t) => Ir.createComment(t),
  setText: (t, r) => {
    t.nodeValue = r;
  },
  setElementText: (t, r) => {
    t.textContent = r;
  },
  parentNode: (t) => t.parentNode,
  nextSibling: (t) => t.nextSibling,
  querySelector: (t) => Ir.querySelector(t),
  setScopeId(t, r) {
    t.setAttribute(r, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(t, r, i, l, d, f) {
    const c = i ? i.previousSibling : r.lastChild;
    if (d && (d === f || d.nextSibling))
      for (; r.insertBefore(d.cloneNode(!0), i), !(d === f || !(d = d.nextSibling)); )
        ;
    else {
      xl.innerHTML = tc(
        l === "svg" ? `<svg>${t}</svg>` : l === "mathml" ? `<math>${t}</math>` : t
      );
      const m = xl.content;
      if (l === "svg" || l === "mathml") {
        const g = m.firstChild;
        for (; g.firstChild; )
          m.appendChild(g.firstChild);
        m.removeChild(g);
      }
      r.insertBefore(m, i);
    }
    return [
      // first
      c ? c.nextSibling : r.firstChild,
      // last
      i ? i.previousSibling : r.lastChild
    ];
  }
}, hf = Symbol("_vtc");
function mf(t, r, i) {
  const l = t[hf];
  l && (r = (r ? [r, ...l] : [...l]).join(" ")), r == null ? t.removeAttribute("class") : i ? t.setAttribute("class", r) : t.className = r;
}
const Cl = Symbol("_vod"), vf = Symbol("_vsh"), yf = Symbol(""), gf = /(^|;)\s*display\s*:/;
function bf(t, r, i) {
  const l = t.style, d = Ft(i);
  let f = !1;
  if (i && !d) {
    if (r)
      if (Ft(r))
        for (const c of r.split(";")) {
          const m = c.slice(0, c.indexOf(":")).trim();
          i[m] == null && Za(l, m, "");
        }
      else
        for (const c in r)
          i[c] == null && Za(l, c, "");
    for (const c in i)
      c === "display" && (f = !0), Za(l, c, i[c]);
  } else if (d) {
    if (r !== i) {
      const c = l[yf];
      c && (i += ";" + c), l.cssText = i, f = gf.test(i);
    }
  } else r && t.removeAttribute("style");
  Cl in t && (t[Cl] = f ? l.display : "", t[vf] && (l.display = "none"));
}
const Sl = /\s*!important$/;
function Za(t, r, i) {
  if (tt(i))
    i.forEach((l) => Za(t, r, l));
  else if (i == null && (i = ""), r.startsWith("--"))
    t.setProperty(r, i);
  else {
    const l = wf(t, r);
    Sl.test(i) ? t.setProperty(
      Eo(l),
      i.replace(Sl, ""),
      "important"
    ) : t[l] = i;
  }
}
const Il = ["Webkit", "Moz", "ms"], ss = {};
function wf(t, r) {
  const i = ss[r];
  if (i)
    return i;
  let l = Pn(r);
  if (l !== "filter" && l in t)
    return ss[r] = l;
  l = hi(l);
  for (let d = 0; d < Il.length; d++) {
    const f = Il[d] + l;
    if (f in t)
      return ss[r] = f;
  }
  return r;
}
const Ol = "http://www.w3.org/1999/xlink";
function Nl(t, r, i, l, d, f = wc(r)) {
  l && r.startsWith("xlink:") ? i == null ? t.removeAttributeNS(Ol, r.slice(6, r.length)) : t.setAttributeNS(Ol, r, i) : i == null || f && !Yl(i) ? t.removeAttribute(r) : t.setAttribute(
    r,
    f ? "" : Vn(i) ? String(i) : i
  );
}
function Tl(t, r, i, l, d) {
  if (r === "innerHTML" || r === "textContent") {
    i != null && (t[r] = r === "innerHTML" ? tc(i) : i);
    return;
  }
  const f = t.tagName;
  if (r === "value" && f !== "PROGRESS" && // custom elements may use _value internally
  !f.includes("-")) {
    const m = f === "OPTION" ? t.getAttribute("value") || "" : t.value, g = i == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      t.type === "checkbox" ? "on" : ""
    ) : String(i);
    (m !== g || !("_value" in t)) && (t.value = g), i == null && t.removeAttribute(r), t._value = i;
    return;
  }
  let c = !1;
  if (i === "" || i == null) {
    const m = typeof t[r];
    m === "boolean" ? i = Yl(i) : i == null && m === "string" ? (i = "", c = !0) : m === "number" && (i = 0, c = !0);
  }
  try {
    t[r] = i;
  } catch {
  }
  c && t.removeAttribute(d || r);
}
function Tr(t, r, i, l) {
  t.addEventListener(r, i, l);
}
function _f(t, r, i, l) {
  t.removeEventListener(r, i, l);
}
const El = Symbol("_vei");
function xf(t, r, i, l, d = null) {
  const f = t[El] || (t[El] = {}), c = f[r];
  if (l && c)
    c.value = l;
  else {
    const [m, g] = Cf(r);
    if (l) {
      const q = f[r] = Of(
        l,
        d
      );
      Tr(t, m, q, g);
    } else c && (_f(t, m, c, g), f[r] = void 0);
  }
}
const Dl = /(?:Once|Passive|Capture)$/;
function Cf(t) {
  let r;
  if (Dl.test(t)) {
    r = {};
    let l;
    for (; l = t.match(Dl); )
      t = t.slice(0, t.length - l[0].length), r[l[0].toLowerCase()] = !0;
  }
  return [t[2] === ":" ? t.slice(3) : Eo(t.slice(2)), r];
}
let ls = 0;
const Sf = /* @__PURE__ */ Promise.resolve(), If = () => ls || (Sf.then(() => ls = 0), ls = Date.now());
function Of(t, r) {
  const i = (l) => {
    if (!l._vts)
      l._vts = Date.now();
    else if (l._vts <= i.attached)
      return;
    Qn(
      Nf(l, i.value),
      r,
      5,
      [l]
    );
  };
  return i.value = t, i.attached = If(), i;
}
function Nf(t, r) {
  if (tt(r)) {
    const i = t.stopImmediatePropagation;
    return t.stopImmediatePropagation = () => {
      i.call(t), t._stopped = !0;
    }, r.map(
      (l) => (d) => !d._stopped && l && l(d)
    );
  } else
    return r;
}
const Rl = (t) => t.charCodeAt(0) === 111 && t.charCodeAt(1) === 110 && // lowercase letter
t.charCodeAt(2) > 96 && t.charCodeAt(2) < 123, Tf = (t, r, i, l, d, f) => {
  const c = d === "svg";
  r === "class" ? mf(t, l, c) : r === "style" ? bf(t, i, l) : fi(r) ? Ds(r) || xf(t, r, i, l, f) : (r[0] === "." ? (r = r.slice(1), !0) : r[0] === "^" ? (r = r.slice(1), !1) : Ef(t, r, l, c)) ? (Tl(t, r, l), !t.tagName.includes("-") && (r === "value" || r === "checked" || r === "selected") && Nl(t, r, l, c, f, r !== "value")) : /* #11081 force set props for possible async custom element */ t._isVueCE && (/[A-Z]/.test(r) || !Ft(l)) ? Tl(t, Pn(r), l, f, r) : (r === "true-value" ? t._trueValue = l : r === "false-value" && (t._falseValue = l), Nl(t, r, l, c));
};
function Ef(t, r, i, l) {
  if (l)
    return !!(r === "innerHTML" || r === "textContent" || r in t && Rl(r) && it(i));
  if (r === "spellcheck" || r === "draggable" || r === "translate" || r === "autocorrect" || r === "form" || r === "list" && t.tagName === "INPUT" || r === "type" && t.tagName === "TEXTAREA")
    return !1;
  if (r === "width" || r === "height") {
    const d = t.tagName;
    if (d === "IMG" || d === "VIDEO" || d === "CANVAS" || d === "SOURCE")
      return !1;
  }
  return Rl(r) && Ft(i) ? !1 : r in t;
}
const Kr = (t) => {
  const r = t.props["onUpdate:modelValue"] || !1;
  return tt(r) ? (i) => Ya(r, i) : r;
};
function Df(t) {
  t.target.composing = !0;
}
function Al(t) {
  const r = t.target;
  r.composing && (r.composing = !1, r.dispatchEvent(new Event("input")));
}
const Rn = Symbol("_assign"), Jn = {
  created(t, { modifiers: { lazy: r, trim: i, number: l } }, d) {
    t[Rn] = Kr(d);
    const f = l || d.props && d.props.type === "number";
    Tr(t, r ? "change" : "input", (c) => {
      if (c.target.composing) return;
      let m = t.value;
      i && (m = m.trim()), f && (m = ti(m)), t[Rn](m);
    }), i && Tr(t, "change", () => {
      t.value = t.value.trim();
    }), r || (Tr(t, "compositionstart", Df), Tr(t, "compositionend", Al), Tr(t, "change", Al));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(t, { value: r }) {
    t.value = r ?? "";
  },
  beforeUpdate(t, { value: r, oldValue: i, modifiers: { lazy: l, trim: d, number: f } }, c) {
    if (t[Rn] = Kr(c), t.composing) return;
    const m = (f || t.type === "number") && !/^0\d/.test(t.value) ? ti(t.value) : t.value, g = r ?? "";
    m !== g && (document.activeElement === t && t.type !== "range" && (l && r === i || d && t.value.trim() === g) || (t.value = g));
  }
}, Dr = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(t, r, i) {
    t[Rn] = Kr(i), Tr(t, "change", () => {
      const l = t._modelValue, d = Mo(t), f = t.checked, c = t[Rn];
      if (tt(l)) {
        const m = Ps(l, d), g = m !== -1;
        if (f && !g)
          c(l.concat(d));
        else if (!f && g) {
          const q = [...l];
          q.splice(m, 1), c(q);
        }
      } else if (Ko(l)) {
        const m = new Set(l);
        f ? m.add(d) : m.delete(d), c(m);
      } else
        c(nc(t, f));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Pl,
  beforeUpdate(t, r, i) {
    t[Rn] = Kr(i), Pl(t, r, i);
  }
};
function Pl(t, { value: r, oldValue: i }, l) {
  t._modelValue = r;
  let d;
  if (tt(r))
    d = Ps(r, l.props.value) > -1;
  else if (Ko(r))
    d = r.has(l.props.value);
  else {
    if (r === i) return;
    d = Oo(r, nc(t, !0));
  }
  t.checked !== d && (t.checked = d);
}
const Zn = {
  created(t, { value: r }, i) {
    t.checked = Oo(r, i.props.value), t[Rn] = Kr(i), Tr(t, "change", () => {
      t[Rn](Mo(t));
    });
  },
  beforeUpdate(t, { value: r, oldValue: i }, l) {
    t[Rn] = Kr(l), r !== i && (t.checked = Oo(r, l.props.value));
  }
}, jt = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(t, { value: r, modifiers: { number: i } }, l) {
    const d = Ko(r);
    Tr(t, "change", () => {
      const f = Array.prototype.filter.call(t.options, (c) => c.selected).map(
        (c) => i ? ti(Mo(c)) : Mo(c)
      );
      t[Rn](
        t.multiple ? d ? new Set(f) : f : f[0]
      ), t._assigning = !0, Bs(() => {
        t._assigning = !1;
      });
    }), t[Rn] = Kr(l);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(t, { value: r }) {
    kl(t, r);
  },
  beforeUpdate(t, r, i) {
    t[Rn] = Kr(i);
  },
  updated(t, { value: r }) {
    t._assigning || kl(t, r);
  }
};
function kl(t, r) {
  const i = t.multiple, l = tt(r);
  if (!(i && !l && !Ko(r))) {
    for (let d = 0, f = t.options.length; d < f; d++) {
      const c = t.options[d], m = Mo(c);
      if (i)
        if (l) {
          const g = typeof m;
          g === "string" || g === "number" ? c.selected = r.some((q) => String(q) === String(m)) : c.selected = Ps(r, m) > -1;
        } else
          c.selected = r.has(m);
      else if (Oo(Mo(c), r)) {
        t.selectedIndex !== d && (t.selectedIndex = d);
        return;
      }
    }
    !i && t.selectedIndex !== -1 && (t.selectedIndex = -1);
  }
}
function Mo(t) {
  return "_value" in t ? t._value : t.value;
}
function nc(t, r) {
  const i = r ? "_trueValue" : "_falseValue";
  return i in t ? t[i] : r;
}
const Rf = ["ctrl", "shift", "alt", "meta"], Af = {
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
  exact: (t, r) => Rf.some((i) => t[`${i}Key`] && !r.includes(i))
}, ui = (t, r) => {
  const i = t._withMods || (t._withMods = {}), l = r.join(".");
  return i[l] || (i[l] = (d, ...f) => {
    for (let c = 0; c < r.length; c++) {
      const m = Af[r[c]];
      if (m && m(d, r)) return;
    }
    return t(d, ...f);
  });
}, Pf = /* @__PURE__ */ an({ patchProp: Tf }, pf);
let Ll;
function kf() {
  return Ll || (Ll = jd(Pf));
}
const Lf = (...t) => {
  const r = kf().createApp(...t), { mount: i } = r;
  return r.mount = (l) => {
    const d = $f(l);
    if (!d) return;
    const f = r._component;
    !it(f) && !f.render && !f.template && (f.template = d.innerHTML), d.nodeType === 1 && (d.textContent = "");
    const c = i(d, !1, jf(d));
    return d instanceof Element && (d.removeAttribute("v-cloak"), d.setAttribute("data-v-app", "")), c;
  }, r;
};
function jf(t) {
  if (t instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && t instanceof MathMLElement)
    return "mathml";
}
function $f(t) {
  return Ft(t) ? document.querySelector(t) : t;
}
/*!
 * pinia v3.0.3
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */
let rc;
const Oi = (t) => rc = t, oc = (
  /* istanbul ignore next */
  Symbol()
);
function Cs(t) {
  return t && typeof t == "object" && Object.prototype.toString.call(t) === "[object Object]" && typeof t.toJSON != "function";
}
var Ra;
(function(t) {
  t.direct = "direct", t.patchObject = "patch object", t.patchFunction = "patch function";
})(Ra || (Ra = {}));
function Ff() {
  const t = Zl(!0), r = t.run(() => Ue({}));
  let i = [], l = [];
  const d = bi({
    install(f) {
      Oi(d), d._a = f, f.provide(oc, d), f.config.globalProperties.$pinia = d, l.forEach((c) => i.push(c)), l = [];
    },
    use(f) {
      return this._a ? i.push(f) : l.push(f), this;
    },
    _p: i,
    // it's actually undefined here
    // @ts-expect-error
    _a: null,
    _e: t,
    _s: /* @__PURE__ */ new Map(),
    state: r
  });
  return d;
}
const ac = () => {
};
function jl(t, r, i, l = ac) {
  t.push(r);
  const d = () => {
    const f = t.indexOf(r);
    f > -1 && (t.splice(f, 1), l());
  };
  return !i && ks() && eu(d), d;
}
function Ao(t, ...r) {
  t.slice().forEach((i) => {
    i(...r);
  });
}
const Mf = (t) => t(), $l = Symbol(), us = Symbol();
function Ss(t, r) {
  t instanceof Map && r instanceof Map ? r.forEach((i, l) => t.set(l, i)) : t instanceof Set && r instanceof Set && r.forEach(t.add, t);
  for (const i in r) {
    if (!r.hasOwnProperty(i))
      continue;
    const l = r[i], d = t[i];
    Cs(d) && Cs(l) && t.hasOwnProperty(i) && !$t(l) && !Er(l) ? t[i] = Ss(d, l) : t[i] = l;
  }
  return t;
}
const Bf = (
  /* istanbul ignore next */
  Symbol()
);
function Kf(t) {
  return !Cs(t) || !Object.prototype.hasOwnProperty.call(t, Bf);
}
const { assign: jr } = Object;
function qf(t) {
  return !!($t(t) && t.effect);
}
function Uf(t, r, i, l) {
  const { state: d, actions: f, getters: c } = r, m = i.state.value[t];
  let g;
  function q() {
    m || (i.state.value[t] = d ? d() : {});
    const B = Gc(i.state.value[t]);
    return jr(B, f, Object.keys(c || {}).reduce((G, re) => (G[re] = bi(Xe(() => {
      Oi(i);
      const Z = i._s.get(t);
      return c[re].call(Z, Z);
    })), G), {}));
  }
  return g = ic(t, q, r, i, l, !0), g;
}
function ic(t, r, i = {}, l, d, f) {
  let c;
  const m = jr({ actions: {} }, i), g = { deep: !0 };
  let q, B, G = [], re = [], Z;
  const k = l.state.value[t];
  !f && !k && (l.state.value[t] = {}), Ue({});
  let j;
  function F(xe) {
    let N;
    q = B = !1, typeof xe == "function" ? (xe(l.state.value[t]), N = {
      type: Ra.patchFunction,
      storeId: t,
      events: Z
    }) : (Ss(l.state.value[t], xe), N = {
      type: Ra.patchObject,
      payload: xe,
      storeId: t,
      events: Z
    });
    const de = j = Symbol();
    Bs().then(() => {
      j === de && (q = !0);
    }), B = !0, Ao(G, N, l.state.value[t]);
  }
  const X = f ? function() {
    const { state: N } = i, de = N ? N() : {};
    this.$patch((Q) => {
      jr(Q, de);
    });
  } : (
    /* istanbul ignore next */
    ac
  );
  function A() {
    c.stop(), G = [], re = [], l._s.delete(t);
  }
  const P = (xe, N = "") => {
    if ($l in xe)
      return xe[us] = N, xe;
    const de = function() {
      Oi(l);
      const Q = Array.from(arguments), he = [], z = [];
      function U(H) {
        he.push(H);
      }
      function ne(H) {
        z.push(H);
      }
      Ao(re, {
        args: Q,
        name: de[us],
        store: Oe,
        after: U,
        onError: ne
      });
      let se;
      try {
        se = xe.apply(this && this.$id === t ? this : Oe, Q);
      } catch (H) {
        throw Ao(z, H), H;
      }
      return se instanceof Promise ? se.then((H) => (Ao(he, H), H)).catch((H) => (Ao(z, H), Promise.reject(H))) : (Ao(he, se), se);
    };
    return de[$l] = !0, de[us] = N, de;
  }, J = {
    _p: l,
    // _s: scope,
    $id: t,
    $onAction: jl.bind(null, re),
    $patch: F,
    $reset: X,
    $subscribe(xe, N = {}) {
      const de = jl(G, xe, N.detached, () => Q()), Q = c.run(() => Ut(() => l.state.value[t], (he) => {
        (N.flush === "sync" ? B : q) && xe({
          storeId: t,
          type: Ra.direct,
          events: Z
        }, he);
      }, jr({}, g, N)));
      return de;
    },
    $dispose: A
  }, Oe = Ma(J);
  l._s.set(t, Oe);
  const ie = (l._a && l._a.runWithContext || Mf)(() => l._e.run(() => (c = Zl()).run(() => r({ action: P }))));
  for (const xe in ie) {
    const N = ie[xe];
    if ($t(N) && !qf(N) || Er(N))
      f || (k && Kf(N) && ($t(N) ? N.value = k[xe] : Ss(N, k[xe])), l.state.value[t][xe] = N);
    else if (typeof N == "function") {
      const de = P(N, xe);
      ie[xe] = de, m.actions[xe] = N;
    }
  }
  return jr(Oe, ie), jr(_t(Oe), ie), Object.defineProperty(Oe, "$state", {
    get: () => l.state.value[t],
    set: (xe) => {
      F((N) => {
        jr(N, xe);
      });
    }
  }), l._p.forEach((xe) => {
    jr(Oe, c.run(() => xe({
      store: Oe,
      app: l._a,
      pinia: l,
      options: m
    })));
  }), k && f && i.hydrate && i.hydrate(Oe.$state, k), q = !0, B = !0, Oe;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qs(t, r, i) {
  let l;
  const d = typeof r == "function";
  l = d ? i : r;
  function f(c, m) {
    const g = Ed();
    return c = // in test mode, ignore the argument provided as we can always retrieve a
    // pinia instance with getActivePinia()
    c || (g ? Ea(oc, null) : null), c && Oi(c), c = rc, c._s.has(t) || (d ? ic(t, r, l, c) : Uf(t, l, c)), c._s.get(t);
  }
  return f.$id = t, f;
}
function Mt(t) {
  const r = _t(t), i = {};
  for (const l in r) {
    const d = r[l];
    d.effect ? i[l] = // ...
    Xe({
      get: () => t[l],
      set(f) {
        t[l] = f;
      }
    }) : ($t(d) || Er(d)) && (i[l] = // ---
    Yc(t, l));
  }
  return i;
}
const Ni = /* @__PURE__ */ Qs("dataflow/sidebar", () => {
  const t = Ue(null);
  function r(l) {
    t.value = l;
  }
  function i(l) {
    const d = l === t.value ? null : l;
    r(d);
  }
  return {
    activeElement: t,
    setActiveElement: r,
    setOrResetActiveElement: i
  };
});
var Vf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Wf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var ei = { exports: {} }, Gf = ei.exports, Fl;
function Hf() {
  return Fl || (Fl = 1, function(t, r) {
    (function(i, l) {
      t.exports = l();
    })(Gf, function() {
      var i = function(e, n) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
          o.__proto__ = a;
        } || function(o, a) {
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
        })(e, n);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var n, o = 1, a = arguments.length; o < a; o++) for (var s in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          return e;
        }).apply(this, arguments);
      };
      function d(e, n, o) {
        for (var a, s = 0, u = n.length; s < u; s++) !a && s in n || ((a = a || Array.prototype.slice.call(n, 0, s))[s] = n[s]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var f = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Vf, c = Object.keys, m = Array.isArray;
      function g(e, n) {
        return typeof n != "object" || c(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || f.Promise || (f.Promise = Promise);
      var q = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function G(e, n) {
        return B.call(e, n);
      }
      function re(e, n) {
        typeof n == "function" && (n = n(q(e))), (typeof Reflect > "u" ? c : Reflect.ownKeys)(n).forEach(function(o) {
          k(e, o, n[o]);
        });
      }
      var Z = Object.defineProperty;
      function k(e, n, o, a) {
        Z(e, n, g(o && G(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function j(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), k(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
        } };
      }
      var F = Object.getOwnPropertyDescriptor, X = [].slice;
      function A(e, n, o) {
        return X.call(e, n, o);
      }
      function P(e, n) {
        return n(e);
      }
      function J(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        f.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Y(e, n) {
        if (typeof n == "string" && G(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, s = n.length; a < s; ++a) {
            var u = Y(e, n[a]);
            o.push(u);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : Y(v, n.substr(h + 1));
        }
      }
      function ie(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          J(typeof o != "string" && "length" in o);
          for (var a = 0, s = n.length; a < s; ++a) ie(e, n[a], o[a]);
        } else {
          var u, h, v = n.indexOf(".");
          v !== -1 ? (u = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? m(e) && !isNaN(parseInt(u)) ? e.splice(u, 1) : delete e[u] : e[u] = o : ie(v = !(v = e[u]) || !G(e, u) ? e[u] = {} : v, h, o)) : o === void 0 ? m(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function xe(e) {
        var n, o = {};
        for (n in e) G(e, n) && (o[n] = e[n]);
        return o;
      }
      var N = [].concat;
      function de(e) {
        return N.apply([], e);
      }
      var nt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(de([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return f[e];
      }), Q = new Set(nt.map(function(e) {
        return f[e];
      })), he = null;
      function z(e) {
        return he = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = he.get(o);
          if (a) return a;
          if (m(o)) {
            a = [], he.set(o, a);
            for (var s = 0, u = o.length; s < u; ++s) a.push(n(o[s]));
          } else if (Q.has(o.constructor)) a = o;
          else {
            var h, v = q(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), he.set(o, a), o) G(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), he = null, e;
      }
      var U = {}.toString;
      function ne(e) {
        return U.call(e).slice(8, -1);
      }
      var se = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", H = typeof se == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[se]) && n.apply(e);
      } : function() {
        return null;
      };
      function le(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var Ce = {};
      function Te(e) {
        var n, o, a, s;
        if (arguments.length === 1) {
          if (m(e)) return e.slice();
          if (this === Ce && typeof e == "string") return [e];
          if (s = H(e)) {
            for (o = []; !(a = s.next()).done; ) o.push(a.value);
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
      var Fe = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Ye = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Pt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ye), Ge = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Qe(e, n) {
        this.name = e, this.message = n;
      }
      function Ze(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, a, s) {
          return s.indexOf(o) === a;
        }).join(`
`);
      }
      function vt(e, n, o, a) {
        this.failures = n, this.failedKeys = a, this.successCount = o, this.message = Ze(e, n);
      }
      function st(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Ze(e, this.failures);
      }
      j(Qe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), j(vt).from(Qe), j(st).from(Qe);
      var D = Pt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), x = Qe, V = Pt.reduce(function(e, n) {
        var o = n + "Error";
        function a(s, u) {
          this.name = o, s ? typeof s == "string" ? (this.message = "".concat(s).concat(u ? `
 ` + u : ""), this.inner = u || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Ge[n] || o, this.inner = null);
        }
        return j(a).from(x), e[n] = a, e;
      }, {});
      V.Syntax = SyntaxError, V.Type = TypeError, V.Range = RangeError;
      var oe = Ye.reduce(function(e, n) {
        return e[n + "Error"] = V[n], e;
      }, {}), ct = Pt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = V[n]), e;
      }, {});
      function R() {
      }
      function W(e) {
        return e;
      }
      function ge(e, n) {
        return e == null || e === W ? n : function(o) {
          return n(e(o));
        };
      }
      function _e(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function Ne(e, n) {
        return e === R ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var u = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? _e(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? _e(s, this.onerror) : s), u !== void 0 ? u : o;
        };
      }
      function Se(e, n) {
        return e === R ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? _e(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? _e(a, this.onerror) : a);
        };
      }
      function Pe(e, n) {
        return e === R ? n : function(o) {
          var a = e.apply(this, arguments);
          g(o, a);
          var s = this.onsuccess, u = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? _e(s, this.onsuccess) : s), u && (this.onerror = this.onerror ? _e(u, this.onerror) : u), a === void 0 ? o === void 0 ? void 0 : o : g(a, o);
        };
      }
      function Le(e, n) {
        return e === R ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Ee(e, n) {
        return e === R ? n : function() {
          var o = e.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var a = this, s = arguments.length, u = new Array(s); s--; ) u[s] = arguments[s];
            return o.then(function() {
              return n.apply(a, u);
            });
          }
          return n.apply(this, arguments);
        };
      }
      ct.ModifyError = vt, ct.DexieError = Qe, ct.BulkError = st;
      var Ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function We(e) {
        Ie = e;
      }
      var je = {}, He = 100, nt = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, q(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, q(n), e];
      }(), Ye = nt[0], Pt = nt[1], nt = nt[2], Pt = Pt && Pt.then, dt = Ye && Ye.constructor, pt = !!nt, Et = function(e, n) {
        bn.push([e, n]), Vt && (queueMicrotask(Di), Vt = !1);
      }, Bt = !0, Vt = !0, Dt = [], sn = [], Wn = W, xt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: R, pgp: !1, env: {}, finalize: R }, we = xt, bn = [], ln = 0, er = [];
      function ye(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = we;
        if (typeof e != "function") {
          if (e !== je) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Vr(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, s) {
          try {
            s(function(u) {
              if (a._state === null) {
                if (u === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                u && typeof u.then == "function" ? o(a, function(v, b) {
                  u instanceof ye ? u._then(v, b) : u.then(v, b);
                }) : (a._state = !0, a._value = u, Uo(a)), h && _n();
              }
            }, Vr.bind(null, a));
          } catch (u) {
            Vr(a, u);
          }
        }(this, e);
      }
      var Ur = { get: function() {
        var e = we, n = or;
        function o(a, s) {
          var u = this, h = !e.global && (e !== we || n !== or), v = h && !Xt(), b = new ye(function(_, S) {
            Wr(u, new qo(Wo(a, e, h, v), Wo(s, e, h, v), _, S, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = je, o;
      }, set: function(e) {
        k(this, "then", e && e.prototype === je ? Ur : { get: function() {
          return e;
        }, set: Ur.set });
      } };
      function qo(e, n, o, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = s;
      }
      function Vr(e, n) {
        var o, a;
        sn.push(n), e._state === null && (o = e._lib && wn(), n = Wn(n), e._state = !1, e._value = n, a = e, Dt.some(function(s) {
          return s._value === a._value;
        }) || Dt.push(a), Uo(e), o && _n());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Wr(e, n[o]);
        var s = e._PSD;
        --s.ref || s.finalize(), ln === 0 && (++ln, Et(function() {
          --ln == 0 && Gr();
        }, []));
      }
      function Wr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++ln, Et(Ei, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Ei(e, n, o) {
        try {
          var a, s = n._value;
          !n._state && sn.length && (sn = []), a = Ie && n._consoleTask ? n._consoleTask.run(function() {
            return e(s);
          }) : e(s), n._state || sn.indexOf(s) !== -1 || function(u) {
            for (var h = Dt.length; h; ) if (Dt[--h]._value === u._value) return Dt.splice(h, 1);
          }(n), o.resolve(a);
        } catch (u) {
          o.reject(u);
        } finally {
          --ln == 0 && Gr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Di() {
        un(xt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = Bt;
        return Vt = Bt = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        Vt = Bt = !0;
      }
      function Gr() {
        var e = Dt;
        Dt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = er.slice(0), o = n.length; o; ) n[--o]();
      }
      function tr(e) {
        return new ye(je, !1, e);
      }
      function rt(e, n) {
        var o = we;
        return function() {
          var a = wn(), s = we;
          try {
            return Qt(o, !0), e.apply(this, arguments);
          } catch (u) {
            n && n(u);
          } finally {
            Qt(s, !1), a && _n();
          }
        };
      }
      re(ye.prototype, { then: Ur, _then: function(e, n) {
        Wr(this, new qo(null, null, e, n, we));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? o : tr)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? o : tr)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ye.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ye.resolve(e()).then(function() {
            return tr(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ye(function(a, s) {
          var u = setTimeout(function() {
            return s(new V.Timeout(n));
          }, e);
          o.then(a, s).finally(clearTimeout.bind(null, u));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && k(ye.prototype, Symbol.toStringTag, "Dexie.Promise"), xt.env = Vo(), re(ye, { all: function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(s, u) {
            return ye.resolve(s).then(function(h) {
              e[u] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ye ? e : e && typeof e.then == "function" ? new ye(function(n, o) {
          e.then(n, o);
        }) : new ye(je, !0, e);
      }, reject: tr, race: function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n, o) {
          e.map(function(a) {
            return ye.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return we;
      }, set: function(e) {
        return we = e;
      } }, totalEchoes: { get: function() {
        return or;
      } }, newPSD: Yt, usePSD: un, scheduler: { get: function() {
        return Et;
      }, set: function(e) {
        Et = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, n) {
        return new ye(function(o, a) {
          return Yt(function(s, u) {
            var h = we;
            h.unhandleds = [], h.onunhandled = u, h.finalize = _e(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? s() : u(b.unhandleds[0]);
              }, er.push(function _() {
                v(), er.splice(er.indexOf(_), 1);
              }), ++ln, Et(function() {
                --ln == 0 && Gr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), dt && (dt.allSettled && k(ye, "allSettled", function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(s, u) {
            return ye.resolve(s).then(function(h) {
              return a[u] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[u] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), dt.any && typeof AggregateError < "u" && k(ye, "any", function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(u, h) {
            return ye.resolve(u).then(function(v) {
              return n(v);
            }, function(v) {
              s[h] = v, --a || o(new AggregateError(s));
            });
          });
        });
      }), dt.withResolvers && (ye.withResolvers = dt.withResolvers));
      var ht = { awaits: 0, echoes: 0, id: 0 }, Ri = 0, nr = [], rr = 0, or = 0, Ai = 0;
      function Yt(e, n, o, a) {
        var s = we, u = Object.create(s);
        return u.parent = s, u.ref = 0, u.global = !1, u.id = ++Ai, xt.env, u.env = pt ? { Promise: ye, PromiseProp: { value: ye, configurable: !0, writable: !0 }, all: ye.all, race: ye.race, allSettled: ye.allSettled, any: ye.any, resolve: ye.resolve, reject: ye.reject } : {}, n && g(u, n), ++s.ref, u.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = un(u, e, o, a), u.ref === 0 && u.finalize(), a;
      }
      function xn() {
        return ht.id || (ht.id = ++Ri), ++ht.awaits, ht.echoes += He, ht.id;
      }
      function Xt() {
        return !!ht.awaits && (--ht.awaits == 0 && (ht.id = 0), ht.echoes = ht.awaits * He, !0);
      }
      function ar(e) {
        return ht.echoes && e && e.constructor === dt ? (xn(), e.then(function(n) {
          return Xt(), n;
        }, function(n) {
          return Xt(), lt(n);
        })) : e;
      }
      function Pi() {
        var e = nr[nr.length - 1];
        nr.pop(), Qt(e, !1);
      }
      function Qt(e, n) {
        var o, a = we;
        (n ? !ht.echoes || rr++ && e === we : !rr || --rr && e === we) || queueMicrotask(n ? (function(s) {
          ++or, ht.echoes && --ht.echoes != 0 || (ht.echoes = ht.awaits = ht.id = 0), nr.push(we), Qt(s, !0);
        }).bind(null, e) : Pi), e !== we && (we = e, a === xt && (xt.env = Vo()), pt && (o = xt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(f, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = f.Promise;
        return pt ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function un(e, n, o, a, s) {
        var u = we;
        try {
          return Qt(e, !0), n(o, a, s);
        } finally {
          Qt(u, !1);
        }
      }
      function Wo(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var s = we;
          o && xn(), Qt(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Qt(s, !1), a && queueMicrotask(Xt);
          }
        };
      }
      function Hr(e) {
        Promise === dt && ht.echoes === 0 ? rr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Pt).indexOf("[native code]") === -1 && (xn = Xt = R);
      var lt = ye.reject, cn = "￿", Wt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", Cn = [], ir = "__dbnames", zr = "readonly", Yr = "readwrite";
      function dn(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function sr(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = z(n))[e], n;
        };
      }
      function zo() {
        throw V.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Me(e, n) {
        try {
          var o = Yo(e), a = Yo(n);
          if (o !== a) return o === "Array" ? 1 : a === "Array" ? -1 : o === "binary" ? 1 : a === "binary" ? -1 : o === "string" ? 1 : a === "string" ? -1 : o === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(s, u) {
                for (var h = s.length, v = u.length, b = h < v ? h : v, _ = 0; _ < b; ++_) if (s[_] !== u[_]) return s[_] < u[_] ? -1 : 1;
                return h === v ? 0 : h < v ? -1 : 1;
              }(Xo(e), Xo(n));
            case "Array":
              return function(s, u) {
                for (var h = s.length, v = u.length, b = h < v ? h : v, _ = 0; _ < b; ++_) {
                  var S = Me(s[_], u[_]);
                  if (S !== 0) return S;
                }
                return h === v ? 0 : h < v ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function Yo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = ne(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Xo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function lr(e, n, o) {
        var a = e.schema.yProps;
        return a ? (n && 0 < o.numFailures && (n = n.filter(function(s, u) {
          return !o.failures[u];
        })), Promise.all(a.map(function(s) {
          return s = s.updatesTable, n ? e.db.table(s).where("k").anyOf(n).delete() : e.db.table(s).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var Qo = (et.prototype._trans = function(e, n, o) {
        var a = this._tx || we.trans, s = this.name, u = Ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, S, y) {
          if (!y.schema[s]) throw new V.NotFound("Table " + s + " not part of transaction");
          return n(y.idbtrans, y);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === we.trans ? a._promise(e, h, o) : Yt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: we.transless || we }) : function _(S, y, T, w) {
            if (S.idbdb && (S._state.openComplete || we.letThrough || S._vip)) {
              var C = S._createTransaction(y, T, S._dbSchema);
              try {
                C.create(), S._state.PR1398_maxLoop = 3;
              } catch (O) {
                return O.name === D.InvalidState && S.isOpen() && 0 < --S._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), S.close({ disableAutoOpen: !1 }), S.open().then(function() {
                  return _(S, y, T, w);
                })) : lt(O);
              }
              return C._promise(y, function(O, I) {
                return Yt(function() {
                  return we.trans = C, w(O, I, C);
                });
              }).then(function(O) {
                if (y === "readwrite") try {
                  C.idbtrans.commit();
                } catch {
                }
                return y === "readonly" ? O : C._completion.then(function() {
                  return O;
                });
              });
            }
            if (S._state.openComplete) return lt(new V.DatabaseClosed(S._state.dbOpenError));
            if (!S._state.isBeingOpened) {
              if (!S._state.autoOpen) return lt(new V.DatabaseClosed());
              S.open().catch(R);
            }
            return S._state.dbReadyPromise.then(function() {
              return _(S, y, T, w);
            });
          }(this.db, e, [this.name], h);
          return u && (b._consoleTask = u, b = b.catch(function(_) {
            return console.trace(_), lt(_);
          })), b;
        } finally {
          v && _n();
        }
      }, et.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? lt(new V.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return o.core.get({ trans: a, key: e }).then(function(s) {
            return o.hook.reading.fire(s);
          });
        }).then(n);
      }, et.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (m(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
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
        if (o && this.db._maxKey !== cn) {
          var u = o.keyPath.slice(0, n.length);
          return this.where(u).equals(u.map(function(b) {
            return e[b];
          }));
        }
        !o && Ie && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(v, b) {
          return Me(v, b) === 0;
        }
        var h = n.reduce(function(y, b) {
          var _ = y[0], S = y[1], y = a[b], T = e[b];
          return [_ || y, _ || !y ? dn(S, y && y.multi ? function(w) {
            return w = Y(w, b), m(w) && w.some(function(C) {
              return s(T, C);
            });
          } : function(w) {
            return s(T, Y(w, b));
          }) : S];
        }, [null, null]), u = h[0], h = h[1];
        return u ? this.where(u.name).equals(e[u.keyPath]).filter(h) : o ? this.filter(h) : this.where(n).equals("");
      }, et.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, et.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, et.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, et.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, et.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, et.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, et.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, et.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, m(e) ? "[".concat(e.join("+"), "]") : e));
      }, et.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, et.prototype.mapToClass = function(e) {
        var n, o = this.db, a = this.name;
        function s() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof zo && (function(b, _) {
          if (typeof _ != "function" && _ !== null) throw new TypeError("Class extends value " + String(_) + " is not a constructor or null");
          function S() {
            this.constructor = b;
          }
          i(b, _), b.prototype = _ === null ? Object.create(_) : (S.prototype = _.prototype, new S());
        }(s, n = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var u = /* @__PURE__ */ new Set(), h = e.prototype; h; h = q(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
          return u.add(b);
        });
        function v(b) {
          if (!b) return b;
          var _, S = Object.create(e.prototype);
          for (_ in b) if (!u.has(_)) try {
            S[_] = b[_];
          } catch {
          }
          return S;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = v, this.hook("reading", v), e;
      }, et.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          g(this, e);
        });
      }, et.prototype.add = function(e, n) {
        var o = this, a = this.schema.primKey, s = a.auto, u = a.keyPath, h = e;
        return u && s && (h = sr(u)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "add", keys: n != null ? [n] : null, values: [h] });
        }).then(function(v) {
          return v.numFailures ? ye.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (u) try {
            ie(e, u, v);
          } catch {
          }
          return v;
        });
      }, et.prototype.update = function(e, n) {
        return typeof e != "object" || m(e) ? this.where(":id").equals(e).modify(n) : (e = Y(e, this.schema.primKey.keyPath), e === void 0 ? lt(new V.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, et.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, s = a.auto, u = a.keyPath, h = e;
        return u && s && (h = sr(u)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? ye.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (u) try {
            ie(e, u, v);
          } catch {
          }
          return v;
        });
      }, et.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(a) {
            return lr(n, [e], a);
          }).then(function(a) {
            return a.numFailures ? ye.reject(a.failures[0]) : void 0;
          });
        });
      }, et.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return lr(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ye.reject(n.failures[0]) : void 0;
        });
      }, et.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(o) {
          return n.core.getMany({ keys: e, trans: o }).then(function(a) {
            return a.map(function(s) {
              return n.hook.reading.fire(s);
            });
          });
        });
      }, et.prototype.bulkAdd = function(e, n, o) {
        var a = this, s = Array.isArray(n) ? n : void 0, u = (o = o || (s ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && s) throw new V.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(sr(_)) : e;
          return a.core.mutate({ trans: h, type: "add", keys: s, values: _, wantResults: u }).then(function(C) {
            var y = C.numFailures, T = C.results, w = C.lastResult, C = C.failures;
            if (y === 0) return u ? T : w;
            throw new st("".concat(a.name, ".bulkAdd(): ").concat(y, " of ").concat(b, " operations failed"), C);
          });
        });
      }, et.prototype.bulkPut = function(e, n, o) {
        var a = this, s = Array.isArray(n) ? n : void 0, u = (o = o || (s ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && s) throw new V.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(sr(_)) : e;
          return a.core.mutate({ trans: h, type: "put", keys: s, values: _, wantResults: u }).then(function(C) {
            var y = C.numFailures, T = C.results, w = C.lastResult, C = C.failures;
            if (y === 0) return u ? T : w;
            throw new st("".concat(a.name, ".bulkPut(): ").concat(y, " of ").concat(b, " operations failed"), C);
          });
        });
      }, et.prototype.bulkUpdate = function(e) {
        var n = this, o = this.core, a = e.map(function(h) {
          return h.key;
        }), s = e.map(function(h) {
          return h.changes;
        }), u = [];
        return this._trans("readwrite", function(h) {
          return o.getMany({ trans: h, keys: a, cache: "clone" }).then(function(v) {
            var b = [], _ = [];
            e.forEach(function(y, T) {
              var w = y.key, C = y.changes, O = v[T];
              if (O) {
                for (var I = 0, E = Object.keys(C); I < E.length; I++) {
                  var L = E[I], $ = C[L];
                  if (L === n.schema.primKey.keyPath) {
                    if (Me($, w) !== 0) throw new V.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ie(O, L, $);
                }
                u.push(T), b.push(w), _.push(O);
              }
            });
            var S = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: s } }).then(function(y) {
              var T = y.numFailures, w = y.failures;
              if (T === 0) return S;
              for (var C = 0, O = Object.keys(w); C < O.length; C++) {
                var I, E = O[C], L = u[Number(E)];
                L != null && (I = w[E], delete w[E], w[L] = I);
              }
              throw new st("".concat(n.name, ".bulkUpdate(): ").concat(T, " of ").concat(S, " operations failed"), w);
            });
          });
        });
      }, et.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e }).then(function(s) {
            return lr(n, e, s);
          });
        }).then(function(h) {
          var s = h.numFailures, u = h.lastResult, h = h.failures;
          if (s === 0) return u;
          throw new st("".concat(n.name, ".bulkDelete(): ").concat(s, " of ").concat(o, " operations failed"), h);
        });
      }, et);
      function et() {
      }
      function kn(e) {
        function n(h, v) {
          if (v) {
            for (var b = arguments.length, _ = new Array(b - 1); --b; ) _[b - 1] = arguments[b];
            return o[h].subscribe.apply(null, _), e;
          }
          if (typeof h == "string") return o[h];
        }
        var o = {};
        n.addEventType = u;
        for (var a = 1, s = arguments.length; a < s; ++a) u(arguments[a]);
        return n;
        function u(h, v, b) {
          if (typeof h != "object") {
            var _;
            v = v || Le;
            var S = { subscribers: [], fire: b = b || R, subscribe: function(y) {
              S.subscribers.indexOf(y) === -1 && (S.subscribers.push(y), S.fire = v(S.fire, y));
            }, unsubscribe: function(y) {
              S.subscribers = S.subscribers.filter(function(T) {
                return T !== y;
              }), S.fire = S.subscribers.reduce(v, b);
            } };
            return o[h] = n[h] = S;
          }
          c(_ = h).forEach(function(y) {
            var T = _[y];
            if (m(T)) u(y, _[y][0], _[y][1]);
            else {
              if (T !== "asap") throw new V.InvalidArgument("Invalid event config");
              var w = u(y, W, function() {
                for (var C = arguments.length, O = new Array(C); C--; ) O[C] = arguments[C];
                w.subscribers.forEach(function(I) {
                  Oe(function() {
                    I.apply(null, O);
                  });
                });
              });
            }
          });
        }
      }
      function Ln(e, n) {
        return j(n).from({ prototype: e }), n;
      }
      function Sn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function Xr(e, n) {
        e.filter = dn(e.filter, n);
      }
      function Qr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return dn(a(), n());
        } : n, e.justLimit = o && !a;
      }
      function ur(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new V.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Jo(e, n, o) {
        var a = ur(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function cr(e, n, o, a) {
        var s = e.replayFilter ? dn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var u = {}, h = function(v, b, _) {
            var S, y;
            s && !s(b, _, function(T) {
              return b.stop(T);
            }, function(T) {
              return b.fail(T);
            }) || ((y = "" + (S = b.primaryKey)) == "[object ArrayBuffer]" && (y = "" + new Uint8Array(S)), G(u, y) || (u[y] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), Zo(Jo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, a, o), dn(e.algorithm, s), n, !e.keysOnly && e.valueMapper);
      }
      function Zo(e, n, o, a) {
        var s = rt(a ? function(u, h, v) {
          return o(a(u), h, v);
        } : o);
        return e.then(function(u) {
          if (u) return u.start(function() {
            var h = function() {
              return u.continue();
            };
            n && !n(u, function(v) {
              return h = v;
            }, function(v) {
              u.stop(v), h = R;
            }, function(v) {
              u.fail(v), h = R;
            }) || s(u.value, u, function(v) {
              return h = v;
            }), h();
          });
        });
      }
      var jn = (ea.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (m(o)) return d(d([], m(e) ? e : [], !0), o).sort();
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
          if (m(a)) return m(e) ? e.filter(function(s) {
            return !a.includes(s);
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
      }, ea);
      function ea(e) {
        this["@@propmod"] = e;
      }
      var ki = (Ve.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, lt.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Ve.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, lt.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Ve.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = dn(n.algorithm, e);
      }, Ve.prototype._iterate = function(e, n) {
        return cr(this._ctx, e, n, this._ctx.table.core);
      }, Ve.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && g(o, e), n._ctx = o, n;
      }, Ve.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ve.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return cr(n, e, o, n.table.core);
        });
      }, Ve.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx, s = a.table.core;
          if (Sn(a, !0)) return s.count({ trans: o, query: { index: ur(a, s.schema), range: a.range } }).then(function(h) {
            return Math.min(h, a.limit);
          });
          var u = 0;
          return cr(a, function() {
            return ++u, !1;
          }, o, s).then(function() {
            return u;
          });
        }).then(e);
      }, Ve.prototype.sortBy = function(e, n) {
        var o = e.split(".").reverse(), a = o[0], s = o.length - 1;
        function u(b, _) {
          return _ ? u(b[o[_]], _ - 1) : b[a];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function v(b, _) {
          return Me(u(b, s), u(_, s)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(v);
        }).then(n);
      }, Ve.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx;
          if (a.dir === "next" && Sn(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, u = ur(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: u, range: a.range } }).then(function(v) {
              return v = v.result, s ? v.map(s) : v;
            });
          }
          var h = [];
          return cr(a, function(v) {
            return h.push(v);
          }, o, a.table.core).then(function() {
            return h;
          });
        }, e);
      }, Ve.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, Sn(n) ? Qr(n, function() {
          var o = e;
          return function(a, s) {
            return o === 0 || (o === 1 ? --o : s(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : Qr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Ve.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, a, s) {
            return --n <= 0 && a(s), 0 <= n;
          };
        }, !0), this;
      }, Ve.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, a, s) {
          return !e(o.value) || (a(s), n);
        }), this;
      }, Ve.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Ve.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ve.prototype.filter = function(e) {
        var n;
        return Xr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = dn(n.isMatch, e), this;
      }, Ve.prototype.and = function(e) {
        return this.filter(e);
      }, Ve.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ve.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ve.prototype.desc = function() {
        return this.reverse();
      }, Ve.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.key, a);
        });
      }, Ve.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ve.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.primaryKey, a);
        });
      }, Ve.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, s) {
          o.push(s.key);
        }).then(function() {
          return o;
        }).then(e);
      }, Ve.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && Sn(n, !0) && 0 < n.limit) return this._read(function(a) {
          var s = ur(n, n.table.core.schema);
          return n.table.core.query({ trans: a, values: !1, limit: n.limit, query: { index: s, range: n.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, s) {
          o.push(s.primaryKey);
        }).then(function() {
          return o;
        }).then(e);
      }, Ve.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ve.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Ve.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ve.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Xr(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = G(n, a);
          return n[a] = !0, !s;
        }), this;
      }, Ve.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var s, u, h;
          h = typeof e == "function" ? e : (s = c(e), u = s.length, function(E) {
            for (var L = !1, $ = 0; $ < u; ++$) {
              var M = s[$], ee = e[M], fe = Y(E, M);
              ee instanceof jn ? (ie(E, M, ee.execute(fe)), L = !0) : fe !== ee && (ie(E, M, ee), L = !0);
            }
            return L;
          });
          var v = o.table.core, y = v.schema.primaryKey, b = y.outbound, _ = y.extractKey, S = 200, y = n.db._options.modifyChunkSize;
          y && (S = typeof y == "object" ? y[v.name] || y["*"] || 200 : y);
          function T(E, M) {
            var $ = M.failures, M = M.numFailures;
            C += E - M;
            for (var ee = 0, fe = c($); ee < fe.length; ee++) {
              var ae = fe[ee];
              w.push($[ae]);
            }
          }
          var w = [], C = 0, O = [], I = e === ta;
          return n.clone().primaryKeys().then(function(E) {
            function L(M) {
              var ee = Math.min(S, E.length - M), fe = E.slice(M, M + ee);
              return (I ? Promise.resolve([]) : v.getMany({ trans: a, keys: fe, cache: "immutable" })).then(function(ae) {
                var ue = [], ve = [], me = b ? [] : null, be = I ? fe : [];
                if (!I) for (var ke = 0; ke < ee; ++ke) {
                  var Ke = ae[ke], Re = { value: z(Ke), primKey: E[M + ke] };
                  h.call(Re, Re.value, Re) !== !1 && (Re.value == null ? be.push(E[M + ke]) : b || Me(_(Ke), _(Re.value)) === 0 ? (ve.push(Re.value), b && me.push(E[M + ke])) : (be.push(E[M + ke]), ue.push(Re.value)));
                }
                return Promise.resolve(0 < ue.length && v.mutate({ trans: a, type: "add", values: ue }).then(function(at) {
                  for (var De in at.failures) be.splice(parseInt(De), 1);
                  T(ue.length, at);
                })).then(function() {
                  return (0 < ve.length || $ && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: me, values: ve, criteria: $, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < M }).then(function(at) {
                    return T(ve.length, at);
                  });
                }).then(function() {
                  return (0 < be.length || $ && I) && v.mutate({ trans: a, type: "delete", keys: be, criteria: $, isAdditionalChunk: 0 < M }).then(function(at) {
                    return lr(o.table, be, at);
                  }).then(function(at) {
                    return T(be.length, at);
                  });
                }).then(function() {
                  return E.length > M + ee && L(M + S);
                });
              });
            }
            var $ = Sn(o) && o.limit === 1 / 0 && (typeof e != "function" || I) && { index: o.index, range: o.range };
            return L(0).then(function() {
              if (0 < w.length) throw new vt("Error modifying one or more objects", w, C, O);
              return E.length;
            });
          });
        });
      }, Ve.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !Sn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ta) : this._write(function(o) {
          var a = e.table.core.schema.primaryKey, s = n;
          return e.table.core.count({ trans: o, query: { index: a, range: s } }).then(function(u) {
            return e.table.core.mutate({ trans: o, type: "deleteRange", range: s }).then(function(b) {
              var v = b.failures, b = b.numFailures;
              if (b) throw new vt("Could not delete some values", Object.keys(v).map(function(_) {
                return v[_];
              }), u - b);
              return u - b;
            });
          });
        });
      }, Ve);
      function Ve() {
      }
      var ta = function(e, n) {
        return n.value = null;
      };
      function Li(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function ji(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function Tt(e, n, o) {
        return e = e instanceof ra ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function In(e) {
        return new e.Collection(e, function() {
          return na("");
        }).limit(0);
      }
      function dr(e, n, o, a) {
        var s, u, h, v, b, _, S, y = o.length;
        if (!o.every(function(C) {
          return typeof C == "string";
        })) return Tt(e, Go);
        function T(C) {
          s = C === "next" ? function(I) {
            return I.toUpperCase();
          } : function(I) {
            return I.toLowerCase();
          }, u = C === "next" ? function(I) {
            return I.toLowerCase();
          } : function(I) {
            return I.toUpperCase();
          }, h = C === "next" ? Li : ji;
          var O = o.map(function(I) {
            return { lower: u(I), upper: s(I) };
          }).sort(function(I, E) {
            return h(I.lower, E.lower);
          });
          v = O.map(function(I) {
            return I.upper;
          }), b = O.map(function(I) {
            return I.lower;
          }), S = (_ = C) === "next" ? "" : a;
        }
        T("next"), e = new e.Collection(e, function() {
          return Jt(v[0], b[y - 1] + a);
        }), e._ondirectionchange = function(C) {
          T(C);
        };
        var w = 0;
        return e._addAlgorithm(function(C, O, I) {
          var E = C.key;
          if (typeof E != "string") return !1;
          var L = u(E);
          if (n(L, b, w)) return !0;
          for (var $ = null, M = w; M < y; ++M) {
            var ee = function(fe, ae, ue, ve, me, be) {
              for (var ke = Math.min(fe.length, ve.length), Ke = -1, Re = 0; Re < ke; ++Re) {
                var at = ae[Re];
                if (at !== ve[Re]) return me(fe[Re], ue[Re]) < 0 ? fe.substr(0, Re) + ue[Re] + ue.substr(Re + 1) : me(fe[Re], ve[Re]) < 0 ? fe.substr(0, Re) + ve[Re] + ue.substr(Re + 1) : 0 <= Ke ? fe.substr(0, Ke) + ae[Ke] + ue.substr(Ke + 1) : null;
                me(fe[Re], at) < 0 && (Ke = Re);
              }
              return ke < ve.length && be === "next" ? fe + ue.substr(fe.length) : ke < fe.length && be === "prev" ? fe.substr(0, ue.length) : Ke < 0 ? null : fe.substr(0, Ke) + ve[Ke] + ue.substr(Ke + 1);
            }(E, L, v[M], b[M], h, _);
            ee === null && $ === null ? w = M + 1 : ($ === null || 0 < h($, ee)) && ($ = ee);
          }
          return O($ !== null ? function() {
            C.continue($ + S);
          } : I), !1;
        }), e;
      }
      function Jt(e, n, o, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: a };
      }
      function na(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ra = (Object.defineProperty(mt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), mt.prototype.between = function(e, n, o, a) {
        o = o !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || a) && (!o || !a) ? In(this) : new this.Collection(this, function() {
            return Jt(e, n, !o, !a);
          });
        } catch {
          return Tt(this, Wt);
        }
      }, mt.prototype.equals = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return na(e);
        });
      }, mt.prototype.above = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(e, void 0, !0);
        });
      }, mt.prototype.aboveOrEqual = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(e, void 0, !1);
        });
      }, mt.prototype.below = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(void 0, e, !1, !0);
        });
      }, mt.prototype.belowOrEqual = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(void 0, e);
        });
      }, mt.prototype.startsWith = function(e) {
        return typeof e != "string" ? Tt(this, Go) : this.between(e, e + cn, !0, !0);
      }, mt.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : dr(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], cn);
      }, mt.prototype.equalsIgnoreCase = function(e) {
        return dr(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, mt.prototype.anyOfIgnoreCase = function() {
        var e = Te.apply(Ce, arguments);
        return e.length === 0 ? In(this) : dr(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, mt.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Te.apply(Ce, arguments);
        return e.length === 0 ? In(this) : dr(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, cn);
      }, mt.prototype.anyOf = function() {
        var e = this, n = Te.apply(Ce, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return Tt(this, Wt);
        }
        if (n.length === 0) return In(this);
        var a = new this.Collection(this, function() {
          return Jt(n[0], n[n.length - 1]);
        });
        a._ondirectionchange = function(u) {
          o = u === "next" ? e._ascending : e._descending, n.sort(o);
        };
        var s = 0;
        return a._addAlgorithm(function(u, h, v) {
          for (var b = u.key; 0 < o(b, n[s]); ) if (++s === n.length) return h(v), !1;
          return o(b, n[s]) === 0 || (h(function() {
            u.continue(n[s]);
          }), !1);
        }), a;
      }, mt.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, mt.prototype.noneOf = function() {
        var e = Te.apply(Ce, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Tt(this, Wt);
        }
        var n = e.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, mt.prototype.inAnyRange = function(E, n) {
        var o = this, a = this._cmp, s = this._ascending, u = this._descending, h = this._min, v = this._max;
        if (E.length === 0) return In(this);
        if (!E.every(function(L) {
          return L[0] !== void 0 && L[1] !== void 0 && s(L[0], L[1]) <= 0;
        })) return Tt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", V.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, S, y = s;
        function T(L, $) {
          return y(L[0], $[0]);
        }
        try {
          (S = E.reduce(function(L, $) {
            for (var M = 0, ee = L.length; M < ee; ++M) {
              var fe = L[M];
              if (a($[0], fe[1]) < 0 && 0 < a($[1], fe[0])) {
                fe[0] = h(fe[0], $[0]), fe[1] = v(fe[1], $[1]);
                break;
              }
            }
            return M === ee && L.push($), L;
          }, [])).sort(T);
        } catch {
          return Tt(this, Wt);
        }
        var w = 0, C = _ ? function(L) {
          return 0 < s(L, S[w][1]);
        } : function(L) {
          return 0 <= s(L, S[w][1]);
        }, O = b ? function(L) {
          return 0 < u(L, S[w][0]);
        } : function(L) {
          return 0 <= u(L, S[w][0]);
        }, I = C, E = new this.Collection(this, function() {
          return Jt(S[0][0], S[S.length - 1][1], !b, !_);
        });
        return E._ondirectionchange = function(L) {
          y = L === "next" ? (I = C, s) : (I = O, u), S.sort(T);
        }, E._addAlgorithm(function(L, $, M) {
          for (var ee, fe = L.key; I(fe); ) if (++w === S.length) return $(M), !1;
          return !C(ee = fe) && !O(ee) || (o._cmp(fe, S[w][1]) === 0 || o._cmp(fe, S[w][0]) === 0 || $(function() {
            y === s ? L.continue(S[w][0]) : L.continue(S[w][1]);
          }), !1);
        }), E;
      }, mt.prototype.startsWithAnyOf = function() {
        var e = Te.apply(Ce, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? In(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + cn];
        })) : Tt(this, "startsWithAnyOf() only works with strings");
      }, mt);
      function mt() {
      }
      function Kt(e) {
        return rt(function(n) {
          return $n(n), e(n.target.error), !1;
        });
      }
      function $n(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Fn = "storagemutated", Jr = "x-storagemutated-1", Zt = kn(null, Fn), $i = (qt.prototype._lock = function() {
        return J(!we.global), ++this._reculock, this._reculock !== 1 || we.global || (we.lockOwnerFor = this), this;
      }, qt.prototype._unlock = function() {
        if (J(!we.global), --this._reculock == 0) for (we.global || (we.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            un(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, qt.prototype._locked = function() {
        return this._reculock && we.lockOwnerFor !== this;
      }, qt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (J(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new V.DatabaseClosed(a);
          case "MissingAPIError":
            throw new V.MissingAPI(a.message, a);
          default:
            throw new V.OpenFailed(a);
        }
        if (!this.active) throw new V.TransactionInactive();
        return J(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = rt(function(s) {
          $n(s), n._reject(e.error);
        }), e.onabort = rt(function(s) {
          $n(s), n.active && n._reject(new V.Abort(e.error)), n.active = !1, n.on("abort").fire(s);
        }), e.oncomplete = rt(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Zt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, qt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return lt(new V.ReadOnly("Transaction is readonly"));
        if (!this.active) return lt(new V.TransactionInactive());
        if (this._locked()) return new ye(function(u, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(u, h);
          }, we]);
        });
        if (o) return Yt(function() {
          var u = new ye(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return u.finally(function() {
            return a._unlock();
          }), u._lib = !0, u;
        });
        var s = new ye(function(u, h) {
          var v = n(u, h, a);
          v && v.then && v.then(u, h);
        });
        return s._lib = !0, s;
      }, qt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, qt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = ye.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function u() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = u);
        }());
        var s = o._waitingFor;
        return new ye(function(u, h) {
          a.then(function(v) {
            return o._waitingQueue.push(rt(u.bind(null, v)));
          }, function(v) {
            return o._waitingQueue.push(rt(h.bind(null, v)));
          }).finally(function() {
            o._waitingFor === s && (o._waitingFor = null);
          });
        });
      }, qt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new V.Abort()));
      }, qt.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (G(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new V.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, qt);
      function qt() {
      }
      function Zr(e, n, o, a, s, u, h, v) {
        return { name: e, keyPath: n, unique: o, multi: a, auto: s, compound: u, src: (o && !h ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + oa(n), type: v };
      }
      function oa(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function eo(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, o.reduce(function(s, u, h) {
          return h = a(u, h), h && (s[h[0]] = h[1]), s;
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
            return cn;
          }, cn;
        }
      };
      function to(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return Y(o, n);
        } : function(o) {
          return Y(o, e);
        };
        var n;
      }
      function aa(e) {
        return [].slice.call(e);
      }
      var Fi = 0;
      function Bn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Mi(e, n, b) {
        function a(I) {
          if (I.type === 3) return null;
          if (I.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = I.lower, C = I.upper, O = I.lowerOpen, I = I.upperOpen;
          return w === void 0 ? C === void 0 ? null : n.upperBound(C, !!I) : C === void 0 ? n.lowerBound(w, !!O) : n.bound(w, C, !!O, !!I);
        }
        function s(T) {
          var w, C = T.name;
          return { name: C, schema: T, mutate: function(O) {
            var I = O.trans, E = O.type, L = O.keys, $ = O.values, M = O.range;
            return new Promise(function(ee, fe) {
              ee = rt(ee);
              var ae = I.objectStore(C), ue = ae.keyPath == null, ve = E === "put" || E === "add";
              if (!ve && E !== "delete" && E !== "deleteRange") throw new Error("Invalid operation type: " + E);
              var me, be = (L || $ || { length: 1 }).length;
              if (L && $ && L.length !== $.length) throw new Error("Given keys array must have same length as given values array.");
              if (be === 0) return ee({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ke(Ct) {
                ++at, $n(Ct);
              }
              var Ke = [], Re = [], at = 0;
              if (E === "deleteRange") {
                if (M.type === 4) return ee({ numFailures: at, failures: Re, results: [], lastResult: void 0 });
                M.type === 3 ? Ke.push(me = ae.clear()) : Ke.push(me = ae.delete(a(M)));
              } else {
                var ue = ve ? ue ? [$, L] : [$, null] : [L, null], De = ue[0], bt = ue[1];
                if (ve) for (var wt = 0; wt < be; ++wt) Ke.push(me = bt && bt[wt] !== void 0 ? ae[E](De[wt], bt[wt]) : ae[E](De[wt])), me.onerror = ke;
                else for (wt = 0; wt < be; ++wt) Ke.push(me = ae[E](De[wt])), me.onerror = ke;
              }
              function Cr(Ct) {
                Ct = Ct.target.result, Ke.forEach(function(hn, wo) {
                  return hn.error != null && (Re[wo] = hn.error);
                }), ee({ numFailures: at, failures: Re, results: E === "delete" ? L : Ke.map(function(hn) {
                  return hn.result;
                }), lastResult: Ct });
              }
              me.onerror = function(Ct) {
                ke(Ct), Cr(Ct);
              }, me.onsuccess = Cr;
            });
          }, getMany: function(O) {
            var I = O.trans, E = O.keys;
            return new Promise(function(L, $) {
              L = rt(L);
              for (var M, ee = I.objectStore(C), fe = E.length, ae = new Array(fe), ue = 0, ve = 0, me = function(Ke) {
                Ke = Ke.target, ae[Ke._pos] = Ke.result, ++ve === ue && L(ae);
              }, be = Kt($), ke = 0; ke < fe; ++ke) E[ke] != null && ((M = ee.get(E[ke]))._pos = ke, M.onsuccess = me, M.onerror = be, ++ue);
              ue === 0 && L(ae);
            });
          }, get: function(O) {
            var I = O.trans, E = O.key;
            return new Promise(function(L, $) {
              L = rt(L);
              var M = I.objectStore(C).get(E);
              M.onsuccess = function(ee) {
                return L(ee.target.result);
              }, M.onerror = Kt($);
            });
          }, query: (w = _, function(O) {
            return new Promise(function(I, E) {
              I = rt(I);
              var L, $, M, ue = O.trans, ee = O.values, fe = O.limit, me = O.query, ae = fe === 1 / 0 ? void 0 : fe, ve = me.index, me = me.range, ue = ue.objectStore(C), ve = ve.isPrimaryKey ? ue : ue.index(ve.name), me = a(me);
              if (fe === 0) return I({ result: [] });
              w ? ((ae = ee ? ve.getAll(me, ae) : ve.getAllKeys(me, ae)).onsuccess = function(be) {
                return I({ result: be.target.result });
              }, ae.onerror = Kt(E)) : (L = 0, $ = !ee && "openKeyCursor" in ve ? ve.openKeyCursor(me) : ve.openCursor(me), M = [], $.onsuccess = function(be) {
                var ke = $.result;
                return ke ? (M.push(ee ? ke.value : ke.primaryKey), ++L === fe ? I({ result: M }) : void ke.continue()) : I({ result: M });
              }, $.onerror = Kt(E));
            });
          }), openCursor: function(O) {
            var I = O.trans, E = O.values, L = O.query, $ = O.reverse, M = O.unique;
            return new Promise(function(ee, fe) {
              ee = rt(ee);
              var ve = L.index, ae = L.range, ue = I.objectStore(C), ue = ve.isPrimaryKey ? ue : ue.index(ve.name), ve = $ ? M ? "prevunique" : "prev" : M ? "nextunique" : "next", me = !E && "openKeyCursor" in ue ? ue.openKeyCursor(a(ae), ve) : ue.openCursor(a(ae), ve);
              me.onerror = Kt(fe), me.onsuccess = rt(function(be) {
                var ke, Ke, Re, at, De = me.result;
                De ? (De.___id = ++Fi, De.done = !1, ke = De.continue.bind(De), Ke = (Ke = De.continuePrimaryKey) && Ke.bind(De), Re = De.advance.bind(De), at = function() {
                  throw new Error("Cursor not stopped");
                }, De.trans = I, De.stop = De.continue = De.continuePrimaryKey = De.advance = function() {
                  throw new Error("Cursor not started");
                }, De.fail = rt(fe), De.next = function() {
                  var bt = this, wt = 1;
                  return this.start(function() {
                    return wt-- ? bt.continue() : bt.stop();
                  }).then(function() {
                    return bt;
                  });
                }, De.start = function(bt) {
                  function wt() {
                    if (me.result) try {
                      bt();
                    } catch (Ct) {
                      De.fail(Ct);
                    }
                    else De.done = !0, De.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, De.stop();
                  }
                  var Cr = new Promise(function(Ct, hn) {
                    Ct = rt(Ct), me.onerror = Kt(hn), De.fail = hn, De.stop = function(wo) {
                      De.stop = De.continue = De.continuePrimaryKey = De.advance = at, Ct(wo);
                    };
                  });
                  return me.onsuccess = rt(function(Ct) {
                    me.onsuccess = wt, wt();
                  }), De.continue = ke, De.continuePrimaryKey = Ke, De.advance = Re, wt(), Cr;
                }, ee(De)) : ee(null);
              }, fe);
            });
          }, count: function(O) {
            var I = O.query, E = O.trans, L = I.index, $ = I.range;
            return new Promise(function(M, ee) {
              var fe = E.objectStore(C), ae = L.isPrimaryKey ? fe : fe.index(L.name), fe = a($), ae = fe ? ae.count(fe) : ae.count();
              ae.onsuccess = rt(function(ue) {
                return M(ue.target.result);
              }), ae.onerror = Kt(ee);
            });
          } };
        }
        var u, h, v, S = (h = b, v = aa((u = e).objectStoreNames), { schema: { name: u.name, tables: v.map(function(T) {
          return h.objectStore(T);
        }).map(function(T) {
          var w = T.keyPath, I = T.autoIncrement, C = m(w), O = {}, I = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: C, keyPath: w, autoIncrement: I, unique: !0, extractKey: to(w) }, indexes: aa(T.indexNames).map(function(E) {
            return T.index(E);
          }).map(function(M) {
            var L = M.name, $ = M.unique, ee = M.multiEntry, M = M.keyPath, ee = { name: L, compound: m(M), keyPath: M, unique: $, multiEntry: ee, extractKey: to(M) };
            return O[Bn(M)] = ee;
          }), getIndexByKeyPath: function(E) {
            return O[Bn(E)];
          } };
          return O[":id"] = I.primaryKey, w != null && (O[Bn(w)] = I.primaryKey), I;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = S.schema, _ = S.hasGetAll, S = b.tables.map(s), y = {};
        return S.forEach(function(T) {
          return y[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!y[T]) throw new Error("Table '".concat(T, "' not found"));
          return y[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: Mn(n), schema: b };
      }
      function Bi(e, n, o, a) {
        var s = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = Mi(n, s, a), e.dbcore.reduce(function(u, h) {
          return h = h.create, l(l({}, u), h(u));
        }, a)) };
      }
      function fr(e, a) {
        var o = a.db, a = Bi(e._middlewares, o, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var u = s.name;
          e.core.schema.tables.some(function(h) {
            return h.name === u;
          }) && (s.core = e.core.table(u), e[u] instanceof e.Table && (e[u].core = s.core));
        });
      }
      function pr(e, n, o, a) {
        o.forEach(function(s) {
          var u = a[s];
          n.forEach(function(h) {
            var v = function b(_, S) {
              return F(_, S) || (_ = q(_)) && b(_, S);
            }(h, s);
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? k(h, s, { get: function() {
              return this.table(s);
            }, set: function(b) {
              Z(this, s, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[s] = new e.Table(s, u));
          });
        });
      }
      function no(e, n) {
        n.forEach(function(o) {
          for (var a in o) o[a] instanceof e.Table && delete o[a];
        });
      }
      function Ki(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function qi(e, n, o, a) {
        var s = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = eo("$meta", sa("")[0], []), e._storeNames.push("$meta"));
        var u = e._createTransaction("readwrite", e._storeNames, s);
        u.create(o), u._completion.catch(a);
        var h = u._reject.bind(u), v = we.transless || we;
        Yt(function() {
          return we.trans = u, we.transless = v, n !== 0 ? (fr(e, o), _ = n, ((b = u).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(S) {
            return S ?? _;
          }) : ye.resolve(_)).then(function(S) {
            return T = S, w = u, C = o, O = [], S = (y = e)._versions, I = y._dbSchema = mr(0, y.idbdb, C), (S = S.filter(function(E) {
              return E._cfg.version >= T;
            })).length !== 0 ? (S.forEach(function(E) {
              O.push(function() {
                var L = I, $ = E._cfg.dbschema;
                vr(y, L, C), vr(y, $, C), I = y._dbSchema = $;
                var M = ro(L, $);
                M.add.forEach(function(ve) {
                  oo(C, ve[0], ve[1].primKey, ve[1].indexes);
                }), M.change.forEach(function(ve) {
                  if (ve.recreate) throw new V.Upgrade("Not yet support for changing primary key");
                  var me = C.objectStore(ve.name);
                  ve.add.forEach(function(be) {
                    return hr(me, be);
                  }), ve.change.forEach(function(be) {
                    me.deleteIndex(be.name), hr(me, be);
                  }), ve.del.forEach(function(be) {
                    return me.deleteIndex(be);
                  });
                });
                var ee = E._cfg.contentUpgrade;
                if (ee && E._cfg.version > T) {
                  fr(y, C), w._memoizedTables = {};
                  var fe = xe($);
                  M.del.forEach(function(ve) {
                    fe[ve] = L[ve];
                  }), no(y, [y.Transaction.prototype]), pr(y, [y.Transaction.prototype], c(fe), fe), w.schema = fe;
                  var ae, ue = Fe(ee);
                  return ue && xn(), M = ye.follow(function() {
                    var ve;
                    (ae = ee(w)) && ue && (ve = Xt.bind(null, null), ae.then(ve, ve));
                  }), ae && typeof ae.then == "function" ? ye.resolve(ae) : M.then(function() {
                    return ae;
                  });
                }
              }), O.push(function(L) {
                var $, M, ee = E._cfg.dbschema;
                $ = ee, M = L, [].slice.call(M.db.objectStoreNames).forEach(function(fe) {
                  return $[fe] == null && M.db.deleteObjectStore(fe);
                }), no(y, [y.Transaction.prototype]), pr(y, [y.Transaction.prototype], y._storeNames, y._dbSchema), w.schema = y._dbSchema;
              }), O.push(function(L) {
                y.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(y.idbdb.version / 10) === E._cfg.version ? (y.idbdb.deleteObjectStore("$meta"), delete y._dbSchema.$meta, y._storeNames = y._storeNames.filter(function($) {
                  return $ !== "$meta";
                })) : L.objectStore("$meta").put(E._cfg.version, "version"));
              });
            }), function E() {
              return O.length ? ye.resolve(O.shift()(w.idbtrans)).then(E) : ye.resolve();
            }().then(function() {
              ia(I, C);
            })) : ye.resolve();
            var y, T, w, C, O, I;
          }).catch(h)) : (c(s).forEach(function(S) {
            oo(o, S, s[S].primKey, s[S].indexes);
          }), fr(e, o), void ye.follow(function() {
            return e.on.populate.fire(u);
          }).catch(h));
          var b, _;
        });
      }
      function Ui(e, n) {
        ia(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = mr(0, e.idbdb, n);
        vr(e, e._dbSchema, n);
        for (var a = 0, s = ro(o, e._dbSchema).change; a < s.length; a++) {
          var u = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = n.objectStore(h.name);
            h.add.forEach(function(b) {
              Ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), hr(v, b);
            });
          }(s[a]);
          if (typeof u == "object") return u.value;
        }
      }
      function ro(e, n) {
        var o, a = { del: [], add: [], change: [] };
        for (o in e) n[o] || a.del.push(o);
        for (o in n) {
          var s = e[o], u = n[o];
          if (s) {
            var h = { name: o, def: u, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (u.primKey.keyPath || "") || s.primKey.auto !== u.primKey.auto) h.recreate = !0, a.change.push(h);
            else {
              var v = s.idxByName, b = u.idxByName, _ = void 0;
              for (_ in v) b[_] || h.del.push(_);
              for (_ in b) {
                var S = v[_], y = b[_];
                S ? S.src !== y.src && h.change.push(y) : h.add.push(y);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && a.change.push(h);
            }
          } else a.add.push([o, u]);
        }
        return a;
      }
      function oo(e, n, o, a) {
        var s = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(u) {
          return hr(s, u);
        }), s;
      }
      function ia(e, n) {
        c(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (Ie && console.debug("Dexie: Creating missing table", o), oo(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function hr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function mr(e, n, o) {
        var a = {};
        return A(n.objectStoreNames, 0).forEach(function(s) {
          for (var u = o.objectStore(s), h = Zr(oa(_ = u.keyPath), _ || "", !0, !1, !!u.autoIncrement, _ && typeof _ != "string", !0), v = [], b = 0; b < u.indexNames.length; ++b) {
            var S = u.index(u.indexNames[b]), _ = S.keyPath, S = Zr(S.name, _, !!S.unique, !!S.multiEntry, !1, _ && typeof _ != "string", !1);
            v.push(S);
          }
          a[s] = eo(s, h, v);
        }), a;
      }
      function vr(e, n, o) {
        for (var a = o.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var u = a[s], h = o.objectStore(u);
          e._hasGetAll = "getAll" in h;
          for (var v = 0; v < h.indexNames.length; ++v) {
            var b = h.indexNames[v], _ = h.index(b).keyPath, S = typeof _ == "string" ? _ : "[" + A(_).join("+") + "]";
            !n[u] || (_ = n[u].idxByName[S]) && (_.name = b, delete n[u].idxByName[S], n[u].idxByName[b] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function sa(e) {
        return e.split(",").map(function(n, o) {
          var u = n.split(":"), a = (s = u[1]) === null || s === void 0 ? void 0 : s.trim(), s = (n = u[0].trim()).replace(/([&*]|\+\+)/g, ""), u = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Zr(s, u || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), m(u), o === 0, a);
        });
      }
      var Vi = (On.prototype._createTableSchema = eo, On.prototype._parseIndexSyntax = sa, On.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        c(e).forEach(function(a) {
          if (e[a] !== null) {
            var s = o._parseIndexSyntax(e[a]), u = s.shift();
            if (!u) throw new V.Schema("Invalid schema for table " + a + ": " + e[a]);
            if (u.unique = !0, u.multi) throw new V.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(h) {
              if (h.auto) throw new V.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new V.Schema("Index must have a name and cannot be an empty string");
            }), s = o._createTableSchema(a, u, s), n[a] = s;
          }
        });
      }, On.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? g(this._cfg.storesSource, o) : o;
        var o = n._versions, a = {}, s = {};
        return o.forEach(function(u) {
          g(a, u._cfg.storesSource), s = u._cfg.dbschema = {}, u._parseStoresSpec(a, s);
        }), n._dbSchema = s, no(n, [n._allTables, n, n.Transaction.prototype]), pr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], c(s), s), n._storeNames = c(s), this;
      }, On.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Ee(this._cfg.contentUpgrade || R, e), this;
      }, On);
      function On() {
      }
      function ao(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new Gt(ir, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function so(e) {
        return Yt(function() {
          return we.letThrough = !0, e();
        });
      }
      function lo(e) {
        return !("from" in e);
      }
      var gt = function(e, n) {
        if (!this) {
          var o = new gt();
          return e && "d" in e && g(o, e), o;
        }
        g(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Kn(e, n, o) {
        var a = Me(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (lo(e)) return g(e, { from: n, to: o, d: 1 });
          var s = e.l, a = e.r;
          if (Me(o, e.from) < 0) return s ? Kn(s, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ua(e);
          if (0 < Me(n, e.to)) return a ? Kn(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ua(e);
          Me(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Me(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, s && !e.l && qn(e, s), a && o && qn(e, a);
        }
      }
      function qn(e, n) {
        lo(n) || function o(a, b) {
          var u = b.from, h = b.to, v = b.l, b = b.r;
          Kn(a, u, h), v && o(a, v), b && o(a, b);
        }(e, n);
      }
      function la(e, n) {
        var o = yr(n), a = o.next();
        if (a.done) return !1;
        for (var s = a.value, u = yr(e), h = u.next(s.from), v = h.value; !a.done && !h.done; ) {
          if (Me(v.from, s.to) <= 0 && 0 <= Me(v.to, s.from)) return !0;
          Me(s.from, v.from) < 0 ? s = (a = o.next(v.from)).value : v = (h = u.next(s.from)).value;
        }
        return !1;
      }
      function yr(e) {
        var n = lo(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Me(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Me(o, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function ua(e) {
        var n, o, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (n = s == "r" ? "l" : "r", o = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], o[s] = a[n], (e[n] = o).d = ca(o)), e.d = ca(e);
      }
      function ca(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function gr(e, n) {
        return c(n).forEach(function(o) {
          e[o] ? qn(e[o], n[o]) : e[o] = function a(s) {
            var u, h, v = {};
            for (u in s) G(s, u) && (h = s[u], v[u] = !h || typeof h != "object" || Q.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function uo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && la(n[o], e[o]);
        });
      }
      re(gt.prototype, ((Pt = { add: function(e) {
        return qn(this, e), this;
      }, addKey: function(e) {
        return Kn(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return Kn(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = yr(this).next(e).value;
        return n && Me(n.from, e) <= 0 && 0 <= Me(n.to, e);
      } })[se] = function() {
        return yr(this);
      }, Pt));
      var fn = {}, co = {}, fo = !1;
      function br(e) {
        gr(co, e), fo || (fo = !0, setTimeout(function() {
          fo = !1, po(co, !(co = {}));
        }, 0));
      }
      function po(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(fn); a < s.length; a++) da(h = s[a], e, o, n);
        else for (var u in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(u);
          v && (u = v[1], v = v[2], (h = fn["idb://".concat(u, "/").concat(v)]) && da(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function da(e, n, o, a) {
        for (var s = [], u = 0, h = Object.entries(e.queries.query); u < h.length; u++) {
          for (var v = h[u], b = v[0], _ = [], S = 0, y = v[1]; S < y.length; S++) {
            var T = y[S];
            uo(n, T.obsSet) ? T.subscribers.forEach(function(I) {
              return o.add(I);
            }) : a && _.push(T);
          }
          a && s.push([b, _]);
        }
        if (a) for (var w = 0, C = s; w < C.length; w++) {
          var O = C[w], b = O[0], _ = O[1];
          e.queries.query[b] = _;
        }
      }
      function Wi(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? lt(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, s = Math.round(10 * e.verno), u = !1;
        function h() {
          if (n.openCanceller !== a) throw new V.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new ye(function(T, w) {
            if (h(), !o) throw new V.MissingAPI();
            var C = e.name, O = n.autoSchema || !s ? o.open(C) : o.open(C, s);
            if (!O) throw new V.MissingAPI();
            O.onerror = Kt(w), O.onblocked = rt(e._fireOnBlocked), O.onupgradeneeded = rt(function(I) {
              var E;
              S = O.transaction, n.autoSchema && !e._options.allowEmptyDB ? (O.onerror = $n, S.abort(), O.result.close(), (E = o.deleteDatabase(C)).onsuccess = E.onerror = rt(function() {
                w(new V.NoSuchDatabase("Database ".concat(C, " doesnt exist")));
              })) : (S.onerror = Kt(w), I = I.oldVersion > Math.pow(2, 62) ? 0 : I.oldVersion, y = I < 1, e.idbdb = O.result, u && Ui(e, S), qi(e, I / 10, S, w));
            }, w), O.onsuccess = rt(function() {
              S = null;
              var I, E, L, $, M, ee = e.idbdb = O.result, fe = A(ee.objectStoreNames);
              if (0 < fe.length) try {
                var ae = ee.transaction(($ = fe).length === 1 ? $[0] : $, "readonly");
                if (n.autoSchema) E = ee, L = ae, (I = e).verno = E.version / 10, L = I._dbSchema = mr(0, E, L), I._storeNames = A(E.objectStoreNames, 0), pr(I, [I._allTables], c(L), L);
                else if (vr(e, e._dbSchema, ae), ((M = ro(mr(0, (M = e).idbdb, ae), M._dbSchema)).add.length || M.change.some(function(ue) {
                  return ue.add.length || ue.change.length;
                })) && !u) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), ee.close(), s = ee.version + 1, u = !0, T(v());
                fr(e, ae);
              } catch {
              }
              Cn.push(e), ee.onversionchange = rt(function(ue) {
                n.vcFired = !0, e.on("versionchange").fire(ue);
              }), ee.onclose = rt(function(ue) {
                e.on("close").fire(ue);
              }), y && (M = e._deps, ae = C, ee = M.indexedDB, M = M.IDBKeyRange, io(ee) || ae === ir || ao(ee, M).put({ name: ae }).catch(R)), T();
            }, w);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < s) return s = 0, v();
            }
            return ye.reject(T);
          });
        }
        var b, _ = n.dbReadyResolve, S = null, y = !1;
        return ye.race([a, (typeof navigator > "u" ? ye.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function w() {
            return indexedDB.databases().finally(T);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], ye.resolve(so(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(Ee, R);
              return n.onReadyBeingFired = [], ye.resolve(so(function() {
                return w(e.vip);
              })).then(T);
            }
          });
        }).finally(function() {
          n.openCanceller === a && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(T) {
          n.dbOpenError = T;
          try {
            S && S.abort();
          } catch {
          }
          return a === n.openCanceller && e._close(), lt(T);
        }).finally(function() {
          n.openComplete = !0, _();
        }).then(function() {
          var T;
          return y && (T = {}, e.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(C) {
              C.name && (T["idb://".concat(e.name, "/").concat(w.name, "/").concat(C.name)] = new gt(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(w.name, "/")] = T["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new gt(-1 / 0, [[[]]]);
          }), Zt(Fn).fire(T), po(T, !0)), e;
        });
      }
      function ho(e) {
        function n(u) {
          return e.next(u);
        }
        var o = s(n), a = s(function(u) {
          return e.throw(u);
        });
        function s(u) {
          return function(b) {
            var v = u(b), b = v.value;
            return v.done ? b : b && typeof b.then == "function" ? b.then(o, a) : m(b) ? Promise.all(b).then(o, a) : o(b);
          };
        }
        return s(n)();
      }
      function wr(e, n, o) {
        for (var a = m(e) ? e.slice() : [e], s = 0; s < o; ++s) a.push(n);
        return a;
      }
      var Gi = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, s = {}, u = [];
          function h(y, T, w) {
            var C = Bn(y), O = s[C] = s[C] || [], I = y == null ? 0 : typeof y == "string" ? 1 : y.length, E = 0 < T, E = l(l({}, w), { name: E ? "".concat(C, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: E, keyTail: T, keyLength: I, extractKey: to(y), unique: !E && w.unique });
            return O.push(E), E.isPrimaryKey || u.push(E), 1 < I && h(I === 2 ? y[0] : y.slice(0, I - 1), T + 1, w), O.sort(function(L, $) {
              return L.keyTail - $.keyTail;
            }), E;
          }
          n = h(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [n];
          for (var v = 0, b = a.indexes; v < b.length; v++) {
            var _ = b[v];
            h(_.keyPath, 0, _);
          }
          function S(y) {
            var T, w = y.query.index;
            return w.isVirtual ? l(l({}, y), { query: { index: w.lowLevelIndex, range: (T = y.query.range, w = w.keyTail, { type: T.type === 1 ? 2 : T.type, lower: wr(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, w), lowerOpen: !0, upper: wr(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, w), upperOpen: !0 }) } }) : y;
          }
          return l(l({}, o), { schema: l(l({}, a), { primaryKey: n, indexes: u, getIndexByKeyPath: function(y) {
            return (y = s[Bn(y)]) && y[0];
          } }), count: function(y) {
            return o.count(S(y));
          }, query: function(y) {
            return o.query(S(y));
          }, openCursor: function(y) {
            var T = y.query.index, w = T.keyTail, C = T.isVirtual, O = T.keyLength;
            return C ? o.openCursor(S(y)).then(function(E) {
              return E && I(E);
            }) : o.openCursor(y);
            function I(E) {
              return Object.create(E, { continue: { value: function(L) {
                L != null ? E.continue(wr(L, y.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : y.unique ? E.continue(E.key.slice(0, O).concat(y.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : E.continue();
              } }, continuePrimaryKey: { value: function(L, $) {
                E.continuePrimaryKey(wr(L, e.MAX_KEY, w), $);
              } }, primaryKey: { get: function() {
                return E.primaryKey;
              } }, key: { get: function() {
                var L = E.key;
                return O === 1 ? L[0] : L.slice(0, O);
              } }, value: { get: function() {
                return E.value;
              } } });
            }
          } });
        } });
      } };
      function mo(e, n, o, a) {
        return o = o || {}, a = a || "", c(e).forEach(function(s) {
          var u, h, v;
          G(n, s) ? (u = e[s], h = n[s], typeof u == "object" && typeof h == "object" && u && h ? (v = ne(u)) !== ne(h) ? o[a + s] = n[s] : v === "Object" ? mo(u, h, o, a + s + ".") : u !== h && (o[a + s] = n[s]) : u !== h && (o[a + s] = n[s])) : o[a + s] = void 0;
        }), c(n).forEach(function(s) {
          G(e, s) || (o[a + s] = n[s]);
        }), o;
      }
      function vo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var Hi = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return l(l({}, o), { mutate: function(s) {
            var u = we.trans, h = u.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (s.type) {
              case "add":
                if (b.fire === R) break;
                return u._promise("readwrite", function() {
                  return S(s);
                }, !0);
              case "put":
                if (b.fire === R && _.fire === R) break;
                return u._promise("readwrite", function() {
                  return S(s);
                }, !0);
              case "delete":
                if (v.fire === R) break;
                return u._promise("readwrite", function() {
                  return S(s);
                }, !0);
              case "deleteRange":
                if (v.fire === R) break;
                return u._promise("readwrite", function() {
                  return function y(T, w, C) {
                    return o.query({ trans: T, values: !1, query: { index: a, range: w }, limit: C }).then(function(O) {
                      var I = O.result;
                      return S({ type: "delete", keys: I, trans: T }).then(function(E) {
                        return 0 < E.numFailures ? Promise.reject(E.failures[0]) : I.length < C ? { failures: [], numFailures: 0, lastResult: void 0 } : y(T, l(l({}, w), { lower: I[I.length - 1], lowerOpen: !0 }), C);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return o.mutate(s);
            function S(y) {
              var T, w, C, O = we.trans, I = y.keys || vo(a, y);
              if (!I) throw new Error("Keys missing");
              return (y = y.type === "add" || y.type === "put" ? l(l({}, y), { keys: I }) : l({}, y)).type !== "delete" && (y.values = d([], y.values)), y.keys && (y.keys = d([], y.keys)), T = o, C = I, ((w = y).type === "add" ? Promise.resolve([]) : T.getMany({ trans: w.trans, keys: C, cache: "immutable" })).then(function(E) {
                var L = I.map(function($, M) {
                  var ee, fe, ae, ue = E[M], ve = { onerror: null, onsuccess: null };
                  return y.type === "delete" ? v.fire.call(ve, $, ue, O) : y.type === "add" || ue === void 0 ? (ee = b.fire.call(ve, $, y.values[M], O), $ == null && ee != null && (y.keys[M] = $ = ee, a.outbound || ie(y.values[M], a.keyPath, $))) : (ee = mo(ue, y.values[M]), (fe = _.fire.call(ve, ee, $, ue, O)) && (ae = y.values[M], Object.keys(fe).forEach(function(me) {
                    G(ae, me) ? ae[me] = fe[me] : ie(ae, me, fe[me]);
                  }))), ve;
                });
                return o.mutate(y).then(function($) {
                  for (var M = $.failures, ee = $.results, fe = $.numFailures, $ = $.lastResult, ae = 0; ae < I.length; ++ae) {
                    var ue = (ee || I)[ae], ve = L[ae];
                    ue == null ? ve.onerror && ve.onerror(M[ae]) : ve.onsuccess && ve.onsuccess(y.type === "put" && E[ae] ? y.values[ae] : ue);
                  }
                  return { failures: M, results: ee, numFailures: fe, lastResult: $ };
                }).catch(function($) {
                  return L.forEach(function(M) {
                    return M.onerror && M.onerror($);
                  }), Promise.reject($);
                });
              });
            }
          } });
        } });
      } };
      function fa(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], s = 0, u = 0; s < n.keys.length && u < e.length; ++s) Me(n.keys[s], e[u]) === 0 && (a.push(o ? z(n.values[s]) : n.values[s]), ++u);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var zi = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return l(l({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var s = fa(a.keys, a.trans._cache, a.cache === "clone");
            return s ? ye.resolve(s) : o.getMany(a).then(function(u) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? z(u) : u }, u;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function pa(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function ha(e, n) {
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
      var Yi = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new gt(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, u) {
          if (we.subscr && s !== "readonly") throw new V.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(we.querier));
          return e.transaction(a, s, u);
        }, table: function(a) {
          var s = e.table(a), u = s.schema, h = u.primaryKey, y = u.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && y.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), S = l(l({}, s), { mutate: function(w) {
            function C(me) {
              return me = "idb://".concat(n, "/").concat(a, "/").concat(me), $[me] || ($[me] = new gt());
            }
            var O, I, E, L = w.trans, $ = w.mutatedParts || (w.mutatedParts = {}), M = C(""), ee = C(":dels"), fe = w.type, ve = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [vo(h, w).filter(function(me) {
              return me;
            }), w.values] : [], ae = ve[0], ue = ve[1], ve = w.trans._cache;
            return m(ae) ? (M.addKeys(ae), (ve = fe === "delete" || ae.length === ue.length ? fa(ae, ve) : null) || ee.addKeys(ae), (ve || ue) && (O = C, I = ve, E = ue, u.indexes.forEach(function(me) {
              var be = O(me.name || "");
              function ke(Re) {
                return Re != null ? me.extractKey(Re) : null;
              }
              function Ke(Re) {
                return me.multiEntry && m(Re) ? Re.forEach(function(at) {
                  return be.addKey(at);
                }) : be.addKey(Re);
              }
              (I || E).forEach(function(Re, bt) {
                var De = I && ke(I[bt]), bt = E && ke(E[bt]);
                Me(De, bt) !== 0 && (De != null && Ke(De), bt != null && Ke(bt));
              });
            }))) : ae ? (ue = { from: (ue = ae.lower) !== null && ue !== void 0 ? ue : e.MIN_KEY, to: (ue = ae.upper) !== null && ue !== void 0 ? ue : e.MAX_KEY }, ee.add(ue), M.add(ue)) : (M.add(o), ee.add(o), u.indexes.forEach(function(me) {
              return C(me.name).add(o);
            })), s.mutate(w).then(function(me) {
              return !ae || w.type !== "add" && w.type !== "put" || (M.addKeys(me.results), _ && _.forEach(function(be) {
                for (var ke = w.values.map(function(De) {
                  return be.extractKey(De);
                }), Ke = be.keyPath.findIndex(function(De) {
                  return De === h.keyPath;
                }), Re = 0, at = me.results.length; Re < at; ++Re) ke[Re][Ke] = me.results[Re];
                C(be.name).addKeys(ke);
              })), L.mutatedParts = gr(L.mutatedParts || {}, $), me;
            });
          } }), y = function(C) {
            var O = C.query, C = O.index, O = O.range;
            return [C, new gt((C = O.lower) !== null && C !== void 0 ? C : e.MIN_KEY, (O = O.upper) !== null && O !== void 0 ? O : e.MAX_KEY)];
          }, T = { get: function(w) {
            return [h, new gt(w.key)];
          }, getMany: function(w) {
            return [h, new gt().addKeys(w.keys)];
          }, count: y, query: y, openCursor: y };
          return c(T).forEach(function(w) {
            S[w] = function(C) {
              var O = we.subscr, I = !!O, E = pa(we, s) && ha(w, C) ? C.obsSet = {} : O;
              if (I) {
                var L = function(ue) {
                  return ue = "idb://".concat(n, "/").concat(a, "/").concat(ue), E[ue] || (E[ue] = new gt());
                }, $ = L(""), M = L(":dels"), O = T[w](C), I = O[0], O = O[1];
                if ((w === "query" && I.isPrimaryKey && !C.values ? M : L(I.name || "")).add(O), !I.isPrimaryKey) {
                  if (w !== "count") {
                    var ee = w === "query" && b && C.values && s.query(l(l({}, C), { values: !1 }));
                    return s[w].apply(this, arguments).then(function(ue) {
                      if (w === "query") {
                        if (b && C.values) return ee.then(function(ke) {
                          return ke = ke.result, $.addKeys(ke), ue;
                        });
                        var ve = C.values ? ue.result.map(v) : ue.result;
                        (C.values ? $ : M).addKeys(ve);
                      } else if (w === "openCursor") {
                        var me = ue, be = C.values;
                        return me && Object.create(me, { key: { get: function() {
                          return M.addKey(me.primaryKey), me.key;
                        } }, primaryKey: { get: function() {
                          var ke = me.primaryKey;
                          return M.addKey(ke), ke;
                        } }, value: { get: function() {
                          return be && $.addKey(me.primaryKey), me.value;
                        } } });
                      }
                      return ue;
                    });
                  }
                  M.add(o);
                }
              }
              return s[w].apply(this, arguments);
            };
          }), S;
        } });
      } };
      function ma(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === a ? null : (n = l({}, n), m(n.keys) && (n.keys = n.keys.filter(function(s, u) {
          return !(u in o.failures);
        })), "values" in n && m(n.values) && (n.values = n.values.filter(function(s, u) {
          return !(u in o.failures);
        })), n);
      }
      function yo(e, n) {
        return o = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Me(o, a.lower) : 0 <= Me(o, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Me(e, n.upper) < 0 : Me(e, n.upper) <= 0));
        var o, a;
      }
      function va(e, n, T, a, s, u) {
        if (!T || T.length === 0) return e;
        var h = n.query.index, v = h.multiEntry, b = n.query.range, _ = a.schema.primaryKey.extractKey, S = h.extractKey, y = (h.lowLevelIndex || h).extractKey, T = T.reduce(function(w, C) {
          var O = w, I = [];
          if (C.type === "add" || C.type === "put") for (var E = new gt(), L = C.values.length - 1; 0 <= L; --L) {
            var $, M = C.values[L], ee = _(M);
            E.hasKey(ee) || ($ = S(M), (v && m($) ? $.some(function(me) {
              return yo(me, b);
            }) : yo($, b)) && (E.addKey(ee), I.push(M)));
          }
          switch (C.type) {
            case "add":
              var fe = new gt().addKeys(n.values ? w.map(function(be) {
                return _(be);
              }) : w), O = w.concat(n.values ? I.filter(function(be) {
                return be = _(be), !fe.hasKey(be) && (fe.addKey(be), !0);
              }) : I.map(function(be) {
                return _(be);
              }).filter(function(be) {
                return !fe.hasKey(be) && (fe.addKey(be), !0);
              }));
              break;
            case "put":
              var ae = new gt().addKeys(C.values.map(function(be) {
                return _(be);
              }));
              O = w.filter(function(be) {
                return !ae.hasKey(n.values ? _(be) : be);
              }).concat(n.values ? I : I.map(function(be) {
                return _(be);
              }));
              break;
            case "delete":
              var ue = new gt().addKeys(C.keys);
              O = w.filter(function(be) {
                return !ue.hasKey(n.values ? _(be) : be);
              });
              break;
            case "deleteRange":
              var ve = C.range;
              O = w.filter(function(be) {
                return !yo(_(be), ve);
              });
          }
          return O;
        }, e);
        return T === e ? e : (T.sort(function(w, C) {
          return Me(y(w), y(C)) || Me(_(w), _(C));
        }), n.limit && n.limit < 1 / 0 && (T.length > n.limit ? T.length = n.limit : e.length === n.limit && T.length < n.limit && (s.dirty = !0)), u ? Object.freeze(T) : T);
      }
      function ya(e, n) {
        return Me(e.lower, n.lower) === 0 && Me(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Xi(e, n) {
        return function(o, a, s, u) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Me(o, a)) === 0) {
            if (s && u) return 0;
            if (s) return 1;
            if (u) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, a, s, u) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Me(o, a)) === 0) {
            if (s && u) return 0;
            if (s) return -1;
            if (u) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function Qi(e, n, o, a) {
        e.subscribers.add(o), a.addEventListener("abort", function() {
          var s, u;
          e.subscribers.delete(o), e.subscribers.size === 0 && (s = e, u = n, setTimeout(function() {
            s.subscribers.size === 0 && le(u, s);
          }, 3e3));
        });
      }
      var Ji = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return l(l({}, e), { transaction: function(o, a, s) {
          var u, h, v = e.transaction(o, a, s);
          return a === "readwrite" && (h = (u = new AbortController()).signal, s = function(b) {
            return function() {
              if (u.abort(), a === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), S = 0, y = o; S < y.length; S++) {
                  var T = y[S], w = fn["idb://".concat(n, "/").concat(T)];
                  if (w) {
                    var C = e.table(T), O = w.optimisticOps.filter(function(be) {
                      return be.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var I = 0, E = Object.values(w.queries.query); I < E.length; I++) for (var L = 0, $ = (fe = E[I]).slice(); L < $.length; L++) uo((ae = $[L]).obsSet, v.mutatedParts) && (le(fe, ae), ae.subscribers.forEach(function(be) {
                      return _.add(be);
                    }));
                    else if (0 < O.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(be) {
                        return be.trans !== v;
                      });
                      for (var M = 0, ee = Object.values(w.queries.query); M < ee.length; M++) for (var fe, ae, ue, ve = 0, me = (fe = ee[M]).slice(); ve < me.length; ve++) (ae = me[ve]).res != null && v.mutatedParts && (b && !ae.dirty ? (ue = Object.isFrozen(ae.res), ue = va(ae.res, ae.req, O, C, ae, ue), ae.dirty ? (le(fe, ae), ae.subscribers.forEach(function(be) {
                        return _.add(be);
                      })) : ue !== ae.res && (ae.res = ue, ae.promise = ye.resolve({ result: ue }))) : (ae.dirty && le(fe, ae), ae.subscribers.forEach(function(be) {
                        return _.add(be);
                      })));
                    }
                  }
                }
                _.forEach(function(be) {
                  return be();
                });
              }
            };
          }, v.addEventListener("abort", s(!1), { signal: h }), v.addEventListener("error", s(!1), { signal: h }), v.addEventListener("complete", s(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(u) {
            var h = we.trans;
            if (s.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(u);
            var v = fn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(u), u.type !== "add" && u.type !== "put" || !(50 <= u.values.length || vo(s, u).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(u), u.mutatedParts && br(u.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (le(v.optimisticOps, u), (b = ma(0, u, b)) && v.optimisticOps.push(b), u.mutatedParts && br(u.mutatedParts));
            }), h.catch(function() {
              le(v.optimisticOps, u), u.mutatedParts && br(u.mutatedParts);
            })) : h.then(function(b) {
              var _ = ma(0, l(l({}, u), { values: u.values.map(function(S, y) {
                var T;
                return b.failures[y] ? S : (S = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? z(S) : l({}, S), ie(S, s.keyPath, b.results[y]), S);
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return u.mutatedParts && br(u.mutatedParts);
              });
            }), h) : a.mutate(u);
          }, query: function(u) {
            if (!pa(we, a) || !ha("query", u)) return a.query(u);
            var h = ((_ = we.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", y = we, v = y.requery, b = y.signal, _ = function(C, O, I, E) {
              var L = fn["idb://".concat(C, "/").concat(O)];
              if (!L) return [];
              if (!(O = L.queries[I])) return [null, !1, L, null];
              var $ = O[(E.query ? E.query.index.name : null) || ""];
              if (!$) return [null, !1, L, null];
              switch (I) {
                case "query":
                  var M = $.find(function(ee) {
                    return ee.req.limit === E.limit && ee.req.values === E.values && ya(ee.req.query.range, E.query.range);
                  });
                  return M ? [M, !0, L, $] : [$.find(function(ee) {
                    return ("limit" in ee.req ? ee.req.limit : 1 / 0) >= E.limit && (!E.values || ee.req.values) && Xi(ee.req.query.range, E.query.range);
                  }), !1, L, $];
                case "count":
                  return M = $.find(function(ee) {
                    return ya(ee.req.query.range, E.query.range);
                  }), [M, !!M, L, $];
              }
            }(n, o, "query", u), S = _[0], y = _[1], T = _[2], w = _[3];
            return S && y ? S.obsSet = u.obsSet : (y = a.query(u).then(function(C) {
              var O = C.result;
              if (S && (S.res = O), h) {
                for (var I = 0, E = O.length; I < E; ++I) Object.freeze(O[I]);
                Object.freeze(O);
              } else C.result = z(O);
              return C;
            }).catch(function(C) {
              return w && S && le(w, S), Promise.reject(C);
            }), S = { obsSet: u.obsSet, promise: y, subscribers: /* @__PURE__ */ new Set(), type: "query", req: u, dirty: !1 }, w ? w.push(S) : (w = [S], (T = T || (fn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[u.query.index.name || ""] = w)), Qi(S, w, v, b), S.promise.then(function(C) {
              return { result: va(C.result, u, T?.optimisticOps, a, S, h) };
            });
          } });
        } });
      } };
      function _r(e, n) {
        return new Proxy(e, { get: function(o, a, s) {
          return a === "db" ? n : Reflect.get(o, a, s);
        } });
      }
      var Gt = (ut.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new V.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new V.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Ki), o.stores({}), this._state.autoSchema = !1, o);
      }, ut.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || we.letThrough || this._vip) ? e() : new ye(function(o, a) {
          if (n._state.openComplete) return a(new V.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new V.DatabaseClosed());
            n.open().catch(R);
          }
          n._state.dbReadyPromise.then(o, a);
        }).then(e);
      }, ut.prototype.use = function(e) {
        var n = e.stack, o = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: n, name: s }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: a ?? 10, name: s }), e.sort(function(u, h) {
          return u.level - h.level;
        }), this;
      }, ut.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(s) {
          return a ? s.create !== a : !!o && s.name !== o;
        })), this;
      }, ut.prototype.open = function() {
        var e = this;
        return un(xt, function() {
          return Wi(e);
        });
      }, ut.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = Cn.indexOf(this);
        if (0 <= n && Cn.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new ye(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ye(function(o, a) {
          e.cancelOpen = a;
        }));
      }, ut.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new V.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new V.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, ut.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ye(function(s, u) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = rt(function() {
              var b, _, S;
              b = n._deps, _ = n.name, S = b.indexedDB, b = b.IDBKeyRange, io(S) || _ === ir || ao(S, b).delete(_).catch(R), s();
            }), v.onerror = Kt(u), v.onblocked = n._fireOnBlocked;
          }
          if (o) throw new V.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(h) : h();
        });
      }, ut.prototype.backendDB = function() {
        return this.idbdb;
      }, ut.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ut.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ut.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ut.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ut.prototype, "tables", { get: function() {
        var e = this;
        return c(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), ut.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var s = arguments.length;
          if (s < 2) throw new V.InvalidArgument("Too few arguments");
          for (var u = new Array(s - 1); --s; ) u[s - 1] = arguments[s];
          return a = u.pop(), [n, de(u), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ut.prototype._transaction = function(e, n, o) {
        var a = this, s = we.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var u, h, v = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (h = n.map(function(_) {
            if (_ = _ instanceof a.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), e == "r" || e === zr) u = zr;
          else {
            if (e != "rw" && e != Yr) throw new V.InvalidArgument("Invalid transaction mode: " + e);
            u = Yr;
          }
          if (s) {
            if (s.mode === zr && u === Yr) {
              if (!v) throw new V.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && h.forEach(function(_) {
              if (s && s.storeNames.indexOf(_) === -1) {
                if (!v) throw new V.SubTransaction("Table " + _ + " not included in parent transaction.");
                s = null;
              }
            }), v && s && !s.active && (s = null);
          }
        } catch (_) {
          return s ? s._promise(null, function(S, y) {
            y(_);
          }) : lt(_);
        }
        var b = (function _(S, y, T, w, C) {
          return ye.resolve().then(function() {
            var O = we.transless || we, I = S._createTransaction(y, T, S._dbSchema, w);
            if (I.explicit = !0, O = { trans: I, transless: O }, w) I.idbtrans = w.idbtrans;
            else try {
              I.create(), I.idbtrans._explicit = !0, S._state.PR1398_maxLoop = 3;
            } catch ($) {
              return $.name === D.InvalidState && S.isOpen() && 0 < --S._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), S.close({ disableAutoOpen: !1 }), S.open().then(function() {
                return _(S, y, T, null, C);
              })) : lt($);
            }
            var E, L = Fe(C);
            return L && xn(), O = ye.follow(function() {
              var $;
              (E = C.call(I, I)) && (L ? ($ = Xt.bind(null, null), E.then($, $)) : typeof E.next == "function" && typeof E.throw == "function" && (E = ho(E)));
            }, O), (E && typeof E.then == "function" ? ye.resolve(E).then(function($) {
              return I.active ? $ : lt(new V.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : O.then(function() {
              return E;
            })).then(function($) {
              return w && I._resolve(), I._completion.then(function() {
                return $;
              });
            }).catch(function($) {
              return I._reject($), lt($);
            });
          });
        }).bind(null, this, u, h, s, o);
        return s ? s._promise(u, b, "lock") : we.trans ? un(we.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, ut.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new V.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ut);
      function ut(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = ut.dependencies;
        this._options = n = l({ addons: ut.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, u, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: R, dbReadyPromise: null, cancelOpen: R, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new ye(function(y) {
          _.dbReadyResolve = y;
        }), _.openCanceller = new ye(function(y, T) {
          _.cancelOpen = T;
        }), this._state = _, this.name = e, this.on = kn(this, "populate", "blocked", "versionchange", "close", { ready: [Ee, R] }), this.once = function(y, T) {
          var w = function() {
            for (var C = [], O = 0; O < arguments.length; O++) C[O] = arguments[O];
            o.on(y).unsubscribe(w), T.apply(o, C);
          };
          return o.on(y, w);
        }, this.on.ready.subscribe = P(this.on.ready.subscribe, function(y) {
          return function(T, w) {
            ut.vip(function() {
              var C, O = o._state;
              O.openComplete ? (O.dbOpenError || ye.resolve().then(T), w && y(T)) : O.onReadyBeingFired ? (O.onReadyBeingFired.push(T), w && y(T)) : (y(T), C = o, w || y(function I() {
                C.on.ready.unsubscribe(T), C.on.ready.unsubscribe(I);
              }));
            });
          };
        }), this.Collection = (s = this, Ln(ki.prototype, function(E, I) {
          this.db = s;
          var w = Ho, C = null;
          if (I) try {
            w = I();
          } catch (L) {
            C = L;
          }
          var O = E._ctx, I = O.table, E = I.hook.reading.fire;
          this._ctx = { table: I, index: O.index, isPrimKey: !O.index || I.schema.primKey.keyPath && O.index === I.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: C, or: O.or, valueMapper: E !== W ? E : null };
        })), this.Table = (u = this, Ln(Qo.prototype, function(y, T, w) {
          this.db = u, this._tx = w, this.name = y, this.schema = T, this.hook = u._allTables[y] ? u._allTables[y].hook : kn(null, { creating: [Ne, R], reading: [ge, W], updating: [Pe, R], deleting: [Se, R] });
        })), this.Transaction = (h = this, Ln($i.prototype, function(y, T, w, C, O) {
          var I = this;
          y !== "readonly" && T.forEach(function(E) {
            E = (E = w[E]) === null || E === void 0 ? void 0 : E.yProps, E && (T = T.concat(E.map(function(L) {
              return L.updatesTable;
            })));
          }), this.db = h, this.mode = y, this.storeNames = T, this.schema = w, this.chromeTransactionDurability = C, this.idbtrans = null, this.on = kn(this, "complete", "error", "abort"), this.parent = O || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ye(function(E, L) {
            I._resolve = E, I._reject = L;
          }), this._completion.then(function() {
            I.active = !1, I.on.complete.fire();
          }, function(E) {
            var L = I.active;
            return I.active = !1, I.on.error.fire(E), I.parent ? I.parent._reject(E) : L && I.idbtrans && I.idbtrans.abort(), lt(E);
          });
        })), this.Version = (v = this, Ln(Vi.prototype, function(y) {
          this.db = v, this._cfg = { version: y, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(ra.prototype, function(y, T, w) {
          if (this.db = b, this._ctx = { table: y, index: T === ":id" ? null : T, or: w }, this._cmp = this._ascending = Me, this._descending = function(C, O) {
            return Me(O, C);
          }, this._max = function(C, O) {
            return 0 < Me(C, O) ? C : O;
          }, this._min = function(C, O) {
            return Me(C, O) < 0 ? C : O;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new V.MissingAPI();
        })), this.on("versionchange", function(y) {
          0 < y.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(y) {
          !y.newVersion || y.newVersion < y.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(y.oldVersion / 10));
        }), this._maxKey = Mn(n.IDBKeyRange), this._createTransaction = function(y, T, w, C) {
          return new o.Transaction(y, T, w, o._options.chromeTransactionDurability, C);
        }, this._fireOnBlocked = function(y) {
          o.on("blocked").fire(y), Cn.filter(function(T) {
            return T.name === o.name && T !== o && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(y);
          });
        }, this.use(zi), this.use(Ji), this.use(Yi), this.use(Gi), this.use(Hi);
        var S = new Proxy(this, { get: function(y, T, w) {
          if (T === "_vip") return !0;
          if (T === "table") return function(O) {
            return _r(o.table(O), S);
          };
          var C = Reflect.get(y, T, w);
          return C instanceof Qo ? _r(C, S) : T === "tables" ? C.map(function(O) {
            return _r(O, S);
          }) : T === "_createTransaction" ? function() {
            return _r(C.apply(this, arguments), S);
          } : C;
        } });
        this.vip = S, a.forEach(function(y) {
          return y(o);
        });
      }
      var xr, Pt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Zi = (go.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, go.prototype[Pt] = function() {
        return this;
      }, go);
      function go(e) {
        this._subscribe = e;
      }
      try {
        xr = { indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB, IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange };
      } catch {
        xr = { indexedDB: null, IDBKeyRange: null };
      }
      function ga(e) {
        var n, o = !1, a = new Zi(function(s) {
          var u = Fe(e), h, v = !1, b = {}, _ = {}, S = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), y && Zt.storagemutated.unsubscribe(w));
          } };
          s.start && s.start(S);
          var y = !1, T = function() {
            return Hr(C);
          }, w = function(O) {
            gr(b, O), uo(_, b) && T();
          }, C = function() {
            var O, I, E;
            !v && xr.indexedDB && (b = {}, O = {}, h && h.abort(), h = new AbortController(), E = function(L) {
              var $ = wn();
              try {
                u && xn();
                var M = Yt(e, L);
                return M = u ? M.finally(Xt) : M;
              } finally {
                $ && _n();
              }
            }(I = { subscr: O, signal: h.signal, requery: T, querier: e, trans: null }), Promise.resolve(E).then(function(L) {
              o = !0, n = L, v || I.signal.aborted || (b = {}, function($) {
                for (var M in $) if (G($, M)) return;
                return 1;
              }(_ = O) || y || (Zt(Fn, w), y = !0), Hr(function() {
                return !v && s.next && s.next(L);
              }));
            }, function(L) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(L?.name) || v || Hr(function() {
                v || s.error && s.error(L);
              });
            }));
          };
          return setTimeout(T, 0), S;
        });
        return a.hasValue = function() {
          return o;
        }, a.getValue = function() {
          return n;
        }, a;
      }
      var pn = Gt;
      function bo(e) {
        var n = en;
        try {
          en = !0, Zt.storagemutated.fire(e), po(e, !0);
        } finally {
          en = n;
        }
      }
      re(pn, l(l({}, ct), { delete: function(e) {
        return new pn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new pn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = pn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== ir;
            });
          }) : ao(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return lt(new V.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          g(this, e);
        };
      }, ignoreTransaction: function(e) {
        return we.trans ? un(we.transless, e) : e();
      }, vip: so, async: function(e) {
        return function() {
          try {
            var n = ho(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ye.resolve(n);
          } catch (o) {
            return lt(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = ho(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : ye.resolve(a);
        } catch (s) {
          return lt(s);
        }
      }, currentTransaction: { get: function() {
        return we.trans || null;
      } }, waitFor: function(e, n) {
        return n = ye.resolve(typeof e == "function" ? pn.ignoreTransaction(e) : e).timeout(n || 6e4), we.trans ? we.trans.waitFor(n) : n;
      }, Promise: ye, debug: { get: function() {
        return Ie;
      }, set: function(e) {
        We(e);
      } }, derive: j, extend: g, props: re, override: P, Events: kn, on: Zt, liveQuery: ga, extendObservabilitySet: gr, getByKeyPath: Y, setByKeyPath: ie, delByKeyPath: function(e, n) {
        typeof n == "string" ? ie(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          ie(e, o, void 0);
        });
      }, shallowClone: xe, deepClone: z, getObjectDiff: mo, cmp: Me, asap: Oe, minKey: -1 / 0, addons: [], connections: Cn, errnames: D, dependencies: xr, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), pn.maxKey = Mn(pn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Zt(Fn, function(e) {
        en || (e = new CustomEvent(Jr, { detail: e }), en = !0, dispatchEvent(e), en = !1);
      }), addEventListener(Jr, function(e) {
        e = e.detail, en || bo(e);
      }));
      var En, en = !1, ba = function() {
      };
      return typeof BroadcastChannel < "u" && ((ba = function() {
        (En = new BroadcastChannel(Jr)).onmessage = function(e) {
          return e.data && bo(e.data);
        };
      })(), typeof En.unref == "function" && En.unref(), Zt(Fn, function(e) {
        en || En.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Gt.disableBfCache && e.persisted) {
          Ie && console.debug("Dexie: handling persisted pagehide"), En?.close();
          for (var n = 0, o = Cn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Gt.disableBfCache && e.persisted && (Ie && console.debug("Dexie: handling persisted pageshow"), ba(), bo({ all: new gt(-1 / 0, [[]]) }));
      })), ye.rejectionMapper = function(e, n) {
        return !e || e instanceof Qe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !oe[e.name] ? e : (n = new oe[e.name](n || e.message, e), "stack" in e && k(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, We(Ie), l(Gt, Object.freeze({ __proto__: null, Dexie: Gt, liveQuery: ga, Entity: zo, cmp: Me, PropModification: jn, replacePrefix: function(e, n) {
        return new jn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new jn({ add: e });
      }, remove: function(e) {
        return new jn({ remove: e });
      }, default: Gt, RangeSet: gt, mergeRanges: qn, rangesOverlap: la }), { default: Gt }), Gt;
    });
  }(ei)), ei.exports;
}
var zf = Hf();
const Is = /* @__PURE__ */ Wf(zf), Ml = Symbol.for("Dexie"), ci = globalThis[Ml] || (globalThis[Ml] = Is);
if (Is.semVer !== ci.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Is.semVer} and ${ci.semVer}`);
const {
  liveQuery: ab,
  mergeRanges: ib,
  rangesOverlap: sb,
  RangeSet: lb,
  cmp: ub,
  Entity: cb,
  PropModification: db,
  replacePrefix: fb,
  add: pb,
  remove: hb,
  DexieYProvider: mb
} = ci;
var Yf = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Xf(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Qf(t) {
  if (Object.prototype.hasOwnProperty.call(t, "__esModule")) return t;
  var r = t.default;
  if (typeof r == "function") {
    var i = function l() {
      var d = !1;
      try {
        d = this instanceof l;
      } catch {
      }
      return d ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    i.prototype = r.prototype;
  } else i = {};
  return Object.defineProperty(i, "__esModule", { value: !0 }), Object.keys(t).forEach(function(l) {
    var d = Object.getOwnPropertyDescriptor(t, l);
    Object.defineProperty(i, l, d.get ? d : {
      enumerable: !0,
      get: function() {
        return t[l];
      }
    });
  }), i;
}
var Bl = {};
const Jf = {}, Zf = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: Jf
}, Symbol.toStringTag, { value: "Module" })), Kl = /* @__PURE__ */ Qf(Zf);
var ql;
function ep() {
  return ql || (ql = 1, function(t) {
    (function(r) {
      r.parser = function(D, x) {
        return new l(D, x);
      }, r.SAXParser = l, r.SAXStream = B, r.createStream = q, r.MAX_BUFFER_LENGTH = 64 * 1024;
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
      function l(D, x) {
        if (!(this instanceof l))
          return new l(D, x);
        var V = this;
        f(V), V.q = V.c = "", V.bufferCheckPosition = r.MAX_BUFFER_LENGTH, V.opt = x || {}, V.opt.lowercase = V.opt.lowercase || V.opt.lowercasetags, V.looseCase = V.opt.lowercase ? "toLowerCase" : "toUpperCase", V.tags = [], V.closed = V.closedRoot = V.sawRoot = !1, V.tag = V.error = null, V.strict = !!D, V.noscript = !!(D || V.opt.noscript), V.state = N.BEGIN, V.strictEntities = V.opt.strictEntities, V.ENTITIES = V.strictEntities ? Object.create(r.XML_ENTITIES) : Object.create(r.ENTITIES), V.attribList = [], V.opt.xmlns && (V.ns = Object.create(j)), V.opt.unquotedAttributeValues === void 0 && (V.opt.unquotedAttributeValues = !D), V.trackPosition = V.opt.position !== !1, V.trackPosition && (V.position = V.line = V.column = 0), Q(V, "onready");
      }
      Object.create || (Object.create = function(D) {
        function x() {
        }
        x.prototype = D;
        var V = new x();
        return V;
      }), Object.keys || (Object.keys = function(D) {
        var x = [];
        for (var V in D) D.hasOwnProperty(V) && x.push(V);
        return x;
      });
      function d(D) {
        for (var x = Math.max(r.MAX_BUFFER_LENGTH, 10), V = 0, oe = 0, ct = i.length; oe < ct; oe++) {
          var R = D[i[oe]].length;
          if (R > x)
            switch (i[oe]) {
              case "textNode":
                z(D);
                break;
              case "cdata":
                he(D, "oncdata", D.cdata), D.cdata = "";
                break;
              case "script":
                he(D, "onscript", D.script), D.script = "";
                break;
              default:
                ne(D, "Max buffer length exceeded: " + i[oe]);
            }
          V = Math.max(V, R);
        }
        var W = r.MAX_BUFFER_LENGTH - V;
        D.bufferCheckPosition = W + D.position;
      }
      function f(D) {
        for (var x = 0, V = i.length; x < V; x++)
          D[i[x]] = "";
      }
      function c(D) {
        z(D), D.cdata !== "" && (he(D, "oncdata", D.cdata), D.cdata = ""), D.script !== "" && (he(D, "onscript", D.script), D.script = "");
      }
      l.prototype = {
        end: function() {
          se(this);
        },
        write: st,
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
      var m;
      try {
        m = Kl.Stream;
      } catch {
        m = function() {
        };
      }
      m || (m = function() {
      });
      var g = r.EVENTS.filter(function(D) {
        return D !== "error" && D !== "end";
      });
      function q(D, x) {
        return new B(D, x);
      }
      function B(D, x) {
        if (!(this instanceof B))
          return new B(D, x);
        m.apply(this), this._parser = new l(D, x), this.writable = !0, this.readable = !0;
        var V = this;
        this._parser.onend = function() {
          V.emit("end");
        }, this._parser.onerror = function(oe) {
          V.emit("error", oe), V._parser.error = null;
        }, this._decoder = null, g.forEach(function(oe) {
          Object.defineProperty(V, "on" + oe, {
            get: function() {
              return V._parser["on" + oe];
            },
            set: function(ct) {
              if (!ct)
                return V.removeAllListeners(oe), V._parser["on" + oe] = ct, ct;
              V.on(oe, ct);
            },
            enumerable: !0,
            configurable: !1
          });
        });
      }
      B.prototype = Object.create(m.prototype, {
        constructor: {
          value: B
        }
      }), B.prototype.write = function(D) {
        if (typeof Buffer == "function" && typeof Buffer.isBuffer == "function" && Buffer.isBuffer(D)) {
          if (!this._decoder) {
            var x = Kl.StringDecoder;
            this._decoder = new x("utf8");
          }
          D = this._decoder.write(D);
        }
        return this._parser.write(D.toString()), this.emit("data", D), !0;
      }, B.prototype.end = function(D) {
        return D && D.length && this.write(D), this._parser.end(), !0;
      }, B.prototype.on = function(D, x) {
        var V = this;
        return !V._parser["on" + D] && g.indexOf(D) !== -1 && (V._parser["on" + D] = function() {
          var oe = arguments.length === 1 ? [arguments[0]] : Array.apply(null, arguments);
          oe.splice(0, 0, D), V.emit.apply(V, oe);
        }), m.prototype.on.call(V, D, x);
      };
      var G = "[CDATA[", re = "DOCTYPE", Z = "http://www.w3.org/XML/1998/namespace", k = "http://www.w3.org/2000/xmlns/", j = { xml: Z, xmlns: k }, F = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, X = /[:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/, A = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD]/, P = /[#:_A-Za-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\u00B7\u0300-\u036F\u203F-\u2040.\d-]/;
      function J(D) {
        return D === " " || D === `
` || D === "\r" || D === "	";
      }
      function Oe(D) {
        return D === '"' || D === "'";
      }
      function Y(D) {
        return D === ">" || J(D);
      }
      function ie(D, x) {
        return D.test(x);
      }
      function xe(D, x) {
        return !ie(D, x);
      }
      var N = 0;
      r.STATE = {
        BEGIN: N++,
        // leading byte order mark or whitespace
        BEGIN_WHITESPACE: N++,
        // leading whitespace
        TEXT: N++,
        // general stuff
        TEXT_ENTITY: N++,
        // &amp and such.
        OPEN_WAKA: N++,
        // <
        SGML_DECL: N++,
        // <!BLARG
        SGML_DECL_QUOTED: N++,
        // <!BLARG foo "bar
        DOCTYPE: N++,
        // <!DOCTYPE
        DOCTYPE_QUOTED: N++,
        // <!DOCTYPE "//blah
        DOCTYPE_DTD: N++,
        // <!DOCTYPE "//blah" [ ...
        DOCTYPE_DTD_QUOTED: N++,
        // <!DOCTYPE "//blah" [ "foo
        COMMENT_STARTING: N++,
        // <!-
        COMMENT: N++,
        // <!--
        COMMENT_ENDING: N++,
        // <!-- blah -
        COMMENT_ENDED: N++,
        // <!-- blah --
        CDATA: N++,
        // <![CDATA[ something
        CDATA_ENDING: N++,
        // ]
        CDATA_ENDING_2: N++,
        // ]]
        PROC_INST: N++,
        // <?hi
        PROC_INST_BODY: N++,
        // <?hi there
        PROC_INST_ENDING: N++,
        // <?hi "there" ?
        OPEN_TAG: N++,
        // <strong
        OPEN_TAG_SLASH: N++,
        // <strong /
        ATTRIB: N++,
        // <a
        ATTRIB_NAME: N++,
        // <a foo
        ATTRIB_NAME_SAW_WHITE: N++,
        // <a foo _
        ATTRIB_VALUE: N++,
        // <a foo=
        ATTRIB_VALUE_QUOTED: N++,
        // <a foo="bar
        ATTRIB_VALUE_CLOSED: N++,
        // <a foo="bar"
        ATTRIB_VALUE_UNQUOTED: N++,
        // <a foo=bar
        ATTRIB_VALUE_ENTITY_Q: N++,
        // <foo bar="&quot;"
        ATTRIB_VALUE_ENTITY_U: N++,
        // <foo bar=&quot
        CLOSE_TAG: N++,
        // </a
        CLOSE_TAG_SAW_WHITE: N++,
        // </a   >
        SCRIPT: N++,
        // <script> ...
        SCRIPT_ENDING: N++
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
        var x = r.ENTITIES[D], V = typeof x == "number" ? String.fromCharCode(x) : x;
        r.ENTITIES[D] = V;
      });
      for (var de in r.STATE)
        r.STATE[r.STATE[de]] = de;
      N = r.STATE;
      function Q(D, x, V) {
        D[x] && D[x](V);
      }
      function he(D, x, V) {
        D.textNode && z(D), Q(D, x, V);
      }
      function z(D) {
        D.textNode = U(D.opt, D.textNode), D.textNode && Q(D, "ontext", D.textNode), D.textNode = "";
      }
      function U(D, x) {
        return D.trim && (x = x.trim()), D.normalize && (x = x.replace(/\s+/g, " ")), x;
      }
      function ne(D, x) {
        return z(D), D.trackPosition && (x += `
Line: ` + D.line + `
Column: ` + D.column + `
Char: ` + D.c), x = new Error(x), D.error = x, Q(D, "onerror", x), D;
      }
      function se(D) {
        return D.sawRoot && !D.closedRoot && H(D, "Unclosed root tag"), D.state !== N.BEGIN && D.state !== N.BEGIN_WHITESPACE && D.state !== N.TEXT && ne(D, "Unexpected end"), z(D), D.c = "", D.closed = !0, Q(D, "onend"), l.call(D, D.strict, D.opt), D;
      }
      function H(D, x) {
        if (typeof D != "object" || !(D instanceof l))
          throw new Error("bad call to strictFail");
        D.strict && ne(D, x);
      }
      function le(D) {
        D.strict || (D.tagName = D.tagName[D.looseCase]());
        var x = D.tags[D.tags.length - 1] || D, V = D.tag = { name: D.tagName, attributes: {} };
        D.opt.xmlns && (V.ns = x.ns), D.attribList.length = 0, he(D, "onopentagstart", V);
      }
      function Ce(D, x) {
        var V = D.indexOf(":"), oe = V < 0 ? ["", D] : D.split(":"), ct = oe[0], R = oe[1];
        return x && D === "xmlns" && (ct = "xmlns", R = ""), { prefix: ct, local: R };
      }
      function Te(D) {
        if (D.strict || (D.attribName = D.attribName[D.looseCase]()), D.attribList.indexOf(D.attribName) !== -1 || D.tag.attributes.hasOwnProperty(D.attribName)) {
          D.attribName = D.attribValue = "";
          return;
        }
        if (D.opt.xmlns) {
          var x = Ce(D.attribName, !0), V = x.prefix, oe = x.local;
          if (V === "xmlns")
            if (oe === "xml" && D.attribValue !== Z)
              H(
                D,
                "xml: prefix must be bound to " + Z + `
Actual: ` + D.attribValue
              );
            else if (oe === "xmlns" && D.attribValue !== k)
              H(
                D,
                "xmlns: prefix must be bound to " + k + `
Actual: ` + D.attribValue
              );
            else {
              var ct = D.tag, R = D.tags[D.tags.length - 1] || D;
              ct.ns === R.ns && (ct.ns = Object.create(R.ns)), ct.ns[oe] = D.attribValue;
            }
          D.attribList.push([D.attribName, D.attribValue]);
        } else
          D.tag.attributes[D.attribName] = D.attribValue, he(D, "onattribute", {
            name: D.attribName,
            value: D.attribValue
          });
        D.attribName = D.attribValue = "";
      }
      function Fe(D, x) {
        if (D.opt.xmlns) {
          var V = D.tag, oe = Ce(D.tagName);
          V.prefix = oe.prefix, V.local = oe.local, V.uri = V.ns[oe.prefix] || "", V.prefix && !V.uri && (H(D, "Unbound namespace prefix: " + JSON.stringify(D.tagName)), V.uri = oe.prefix);
          var ct = D.tags[D.tags.length - 1] || D;
          V.ns && ct.ns !== V.ns && Object.keys(V.ns).forEach(function(We) {
            he(D, "onopennamespace", {
              prefix: We,
              uri: V.ns[We]
            });
          });
          for (var R = 0, W = D.attribList.length; R < W; R++) {
            var ge = D.attribList[R], _e = ge[0], Ne = ge[1], Se = Ce(_e, !0), Pe = Se.prefix, Le = Se.local, Ee = Pe === "" ? "" : V.ns[Pe] || "", Ie = {
              name: _e,
              value: Ne,
              prefix: Pe,
              local: Le,
              uri: Ee
            };
            Pe && Pe !== "xmlns" && !Ee && (H(D, "Unbound namespace prefix: " + JSON.stringify(Pe)), Ie.uri = Pe), D.tag.attributes[_e] = Ie, he(D, "onattribute", Ie);
          }
          D.attribList.length = 0;
        }
        D.tag.isSelfClosing = !!x, D.sawRoot = !0, D.tags.push(D.tag), he(D, "onopentag", D.tag), x || (!D.noscript && D.tagName.toLowerCase() === "script" ? D.state = N.SCRIPT : D.state = N.TEXT, D.tag = null, D.tagName = ""), D.attribName = D.attribValue = "", D.attribList.length = 0;
      }
      function Ge(D) {
        if (!D.tagName) {
          H(D, "Weird empty close tag."), D.textNode += "</>", D.state = N.TEXT;
          return;
        }
        if (D.script) {
          if (D.tagName !== "script") {
            D.script += "</" + D.tagName + ">", D.tagName = "", D.state = N.SCRIPT;
            return;
          }
          he(D, "onscript", D.script), D.script = "";
        }
        var x = D.tags.length, V = D.tagName;
        D.strict || (V = V[D.looseCase]());
        for (var oe = V; x--; ) {
          var ct = D.tags[x];
          if (ct.name !== oe)
            H(D, "Unexpected close tag");
          else
            break;
        }
        if (x < 0) {
          H(D, "Unmatched closing tag: " + D.tagName), D.textNode += "</" + D.tagName + ">", D.state = N.TEXT;
          return;
        }
        D.tagName = V;
        for (var R = D.tags.length; R-- > x; ) {
          var W = D.tag = D.tags.pop();
          D.tagName = D.tag.name, he(D, "onclosetag", D.tagName);
          var ge = {};
          for (var _e in W.ns)
            ge[_e] = W.ns[_e];
          var Ne = D.tags[D.tags.length - 1] || D;
          D.opt.xmlns && W.ns !== Ne.ns && Object.keys(W.ns).forEach(function(Se) {
            var Pe = W.ns[Se];
            he(D, "onclosenamespace", { prefix: Se, uri: Pe });
          });
        }
        x === 0 && (D.closedRoot = !0), D.tagName = D.attribValue = D.attribName = "", D.attribList.length = 0, D.state = N.TEXT;
      }
      function Qe(D) {
        var x = D.entity, V = x.toLowerCase(), oe, ct = "";
        return D.ENTITIES[x] ? D.ENTITIES[x] : D.ENTITIES[V] ? D.ENTITIES[V] : (x = V, x.charAt(0) === "#" && (x.charAt(1) === "x" ? (x = x.slice(2), oe = parseInt(x, 16), ct = oe.toString(16)) : (x = x.slice(1), oe = parseInt(x, 10), ct = oe.toString(10))), x = x.replace(/^0+/, ""), isNaN(oe) || ct.toLowerCase() !== x ? (H(D, "Invalid character entity"), "&" + D.entity + ";") : String.fromCodePoint(oe));
      }
      function Ze(D, x) {
        x === "<" ? (D.state = N.OPEN_WAKA, D.startTagPosition = D.position) : J(x) || (H(D, "Non-whitespace before first tag."), D.textNode = x, D.state = N.TEXT);
      }
      function vt(D, x) {
        var V = "";
        return x < D.length && (V = D.charAt(x)), V;
      }
      function st(D) {
        var x = this;
        if (this.error)
          throw this.error;
        if (x.closed)
          return ne(
            x,
            "Cannot write after close. Assign an onready handler."
          );
        if (D === null)
          return se(x);
        typeof D == "object" && (D = D.toString());
        for (var V = 0, oe = ""; oe = vt(D, V++), x.c = oe, !!oe; )
          switch (x.trackPosition && (x.position++, oe === `
` ? (x.line++, x.column = 0) : x.column++), x.state) {
            case N.BEGIN:
              if (x.state = N.BEGIN_WHITESPACE, oe === "\uFEFF")
                continue;
              Ze(x, oe);
              continue;
            case N.BEGIN_WHITESPACE:
              Ze(x, oe);
              continue;
            case N.TEXT:
              if (x.sawRoot && !x.closedRoot) {
                for (var ct = V - 1; oe && oe !== "<" && oe !== "&"; )
                  oe = vt(D, V++), oe && x.trackPosition && (x.position++, oe === `
` ? (x.line++, x.column = 0) : x.column++);
                x.textNode += D.substring(ct, V - 1);
              }
              oe === "<" && !(x.sawRoot && x.closedRoot && !x.strict) ? (x.state = N.OPEN_WAKA, x.startTagPosition = x.position) : (!J(oe) && (!x.sawRoot || x.closedRoot) && H(x, "Text data outside of root node."), oe === "&" ? x.state = N.TEXT_ENTITY : x.textNode += oe);
              continue;
            case N.SCRIPT:
              oe === "<" ? x.state = N.SCRIPT_ENDING : x.script += oe;
              continue;
            case N.SCRIPT_ENDING:
              oe === "/" ? x.state = N.CLOSE_TAG : (x.script += "<" + oe, x.state = N.SCRIPT);
              continue;
            case N.OPEN_WAKA:
              if (oe === "!")
                x.state = N.SGML_DECL, x.sgmlDecl = "";
              else if (!J(oe)) if (ie(F, oe))
                x.state = N.OPEN_TAG, x.tagName = oe;
              else if (oe === "/")
                x.state = N.CLOSE_TAG, x.tagName = "";
              else if (oe === "?")
                x.state = N.PROC_INST, x.procInstName = x.procInstBody = "";
              else {
                if (H(x, "Unencoded <"), x.startTagPosition + 1 < x.position) {
                  var R = x.position - x.startTagPosition;
                  oe = new Array(R).join(" ") + oe;
                }
                x.textNode += "<" + oe, x.state = N.TEXT;
              }
              continue;
            case N.SGML_DECL:
              if (x.sgmlDecl + oe === "--") {
                x.state = N.COMMENT, x.comment = "", x.sgmlDecl = "";
                continue;
              }
              x.doctype && x.doctype !== !0 && x.sgmlDecl ? (x.state = N.DOCTYPE_DTD, x.doctype += "<!" + x.sgmlDecl + oe, x.sgmlDecl = "") : (x.sgmlDecl + oe).toUpperCase() === G ? (he(x, "onopencdata"), x.state = N.CDATA, x.sgmlDecl = "", x.cdata = "") : (x.sgmlDecl + oe).toUpperCase() === re ? (x.state = N.DOCTYPE, (x.doctype || x.sawRoot) && H(
                x,
                "Inappropriately located doctype declaration"
              ), x.doctype = "", x.sgmlDecl = "") : oe === ">" ? (he(x, "onsgmldeclaration", x.sgmlDecl), x.sgmlDecl = "", x.state = N.TEXT) : (Oe(oe) && (x.state = N.SGML_DECL_QUOTED), x.sgmlDecl += oe);
              continue;
            case N.SGML_DECL_QUOTED:
              oe === x.q && (x.state = N.SGML_DECL, x.q = ""), x.sgmlDecl += oe;
              continue;
            case N.DOCTYPE:
              oe === ">" ? (x.state = N.TEXT, he(x, "ondoctype", x.doctype), x.doctype = !0) : (x.doctype += oe, oe === "[" ? x.state = N.DOCTYPE_DTD : Oe(oe) && (x.state = N.DOCTYPE_QUOTED, x.q = oe));
              continue;
            case N.DOCTYPE_QUOTED:
              x.doctype += oe, oe === x.q && (x.q = "", x.state = N.DOCTYPE);
              continue;
            case N.DOCTYPE_DTD:
              oe === "]" ? (x.doctype += oe, x.state = N.DOCTYPE) : oe === "<" ? (x.state = N.OPEN_WAKA, x.startTagPosition = x.position) : Oe(oe) ? (x.doctype += oe, x.state = N.DOCTYPE_DTD_QUOTED, x.q = oe) : x.doctype += oe;
              continue;
            case N.DOCTYPE_DTD_QUOTED:
              x.doctype += oe, oe === x.q && (x.state = N.DOCTYPE_DTD, x.q = "");
              continue;
            case N.COMMENT:
              oe === "-" ? x.state = N.COMMENT_ENDING : x.comment += oe;
              continue;
            case N.COMMENT_ENDING:
              oe === "-" ? (x.state = N.COMMENT_ENDED, x.comment = U(x.opt, x.comment), x.comment && he(x, "oncomment", x.comment), x.comment = "") : (x.comment += "-" + oe, x.state = N.COMMENT);
              continue;
            case N.COMMENT_ENDED:
              oe !== ">" ? (H(x, "Malformed comment"), x.comment += "--" + oe, x.state = N.COMMENT) : x.doctype && x.doctype !== !0 ? x.state = N.DOCTYPE_DTD : x.state = N.TEXT;
              continue;
            case N.CDATA:
              oe === "]" ? x.state = N.CDATA_ENDING : x.cdata += oe;
              continue;
            case N.CDATA_ENDING:
              oe === "]" ? x.state = N.CDATA_ENDING_2 : (x.cdata += "]" + oe, x.state = N.CDATA);
              continue;
            case N.CDATA_ENDING_2:
              oe === ">" ? (x.cdata && he(x, "oncdata", x.cdata), he(x, "onclosecdata"), x.cdata = "", x.state = N.TEXT) : oe === "]" ? x.cdata += "]" : (x.cdata += "]]" + oe, x.state = N.CDATA);
              continue;
            case N.PROC_INST:
              oe === "?" ? x.state = N.PROC_INST_ENDING : J(oe) ? x.state = N.PROC_INST_BODY : x.procInstName += oe;
              continue;
            case N.PROC_INST_BODY:
              if (!x.procInstBody && J(oe))
                continue;
              oe === "?" ? x.state = N.PROC_INST_ENDING : x.procInstBody += oe;
              continue;
            case N.PROC_INST_ENDING:
              oe === ">" ? (he(x, "onprocessinginstruction", {
                name: x.procInstName,
                body: x.procInstBody
              }), x.procInstName = x.procInstBody = "", x.state = N.TEXT) : (x.procInstBody += "?" + oe, x.state = N.PROC_INST_BODY);
              continue;
            case N.OPEN_TAG:
              ie(X, oe) ? x.tagName += oe : (le(x), oe === ">" ? Fe(x) : oe === "/" ? x.state = N.OPEN_TAG_SLASH : (J(oe) || H(x, "Invalid character in tag name"), x.state = N.ATTRIB));
              continue;
            case N.OPEN_TAG_SLASH:
              oe === ">" ? (Fe(x, !0), Ge(x)) : (H(x, "Forward-slash in opening tag not followed by >"), x.state = N.ATTRIB);
              continue;
            case N.ATTRIB:
              if (J(oe))
                continue;
              oe === ">" ? Fe(x) : oe === "/" ? x.state = N.OPEN_TAG_SLASH : ie(F, oe) ? (x.attribName = oe, x.attribValue = "", x.state = N.ATTRIB_NAME) : H(x, "Invalid attribute name");
              continue;
            case N.ATTRIB_NAME:
              oe === "=" ? x.state = N.ATTRIB_VALUE : oe === ">" ? (H(x, "Attribute without value"), x.attribValue = x.attribName, Te(x), Fe(x)) : J(oe) ? x.state = N.ATTRIB_NAME_SAW_WHITE : ie(X, oe) ? x.attribName += oe : H(x, "Invalid attribute name");
              continue;
            case N.ATTRIB_NAME_SAW_WHITE:
              if (oe === "=")
                x.state = N.ATTRIB_VALUE;
              else {
                if (J(oe))
                  continue;
                H(x, "Attribute without value"), x.tag.attributes[x.attribName] = "", x.attribValue = "", he(x, "onattribute", {
                  name: x.attribName,
                  value: ""
                }), x.attribName = "", oe === ">" ? Fe(x) : ie(F, oe) ? (x.attribName = oe, x.state = N.ATTRIB_NAME) : (H(x, "Invalid attribute name"), x.state = N.ATTRIB);
              }
              continue;
            case N.ATTRIB_VALUE:
              if (J(oe))
                continue;
              Oe(oe) ? (x.q = oe, x.state = N.ATTRIB_VALUE_QUOTED) : (x.opt.unquotedAttributeValues || ne(x, "Unquoted attribute value"), x.state = N.ATTRIB_VALUE_UNQUOTED, x.attribValue = oe);
              continue;
            case N.ATTRIB_VALUE_QUOTED:
              if (oe !== x.q) {
                oe === "&" ? x.state = N.ATTRIB_VALUE_ENTITY_Q : x.attribValue += oe;
                continue;
              }
              Te(x), x.q = "", x.state = N.ATTRIB_VALUE_CLOSED;
              continue;
            case N.ATTRIB_VALUE_CLOSED:
              J(oe) ? x.state = N.ATTRIB : oe === ">" ? Fe(x) : oe === "/" ? x.state = N.OPEN_TAG_SLASH : ie(F, oe) ? (H(x, "No whitespace between attributes"), x.attribName = oe, x.attribValue = "", x.state = N.ATTRIB_NAME) : H(x, "Invalid attribute name");
              continue;
            case N.ATTRIB_VALUE_UNQUOTED:
              if (!Y(oe)) {
                oe === "&" ? x.state = N.ATTRIB_VALUE_ENTITY_U : x.attribValue += oe;
                continue;
              }
              Te(x), oe === ">" ? Fe(x) : x.state = N.ATTRIB;
              continue;
            case N.CLOSE_TAG:
              if (x.tagName)
                oe === ">" ? Ge(x) : ie(X, oe) ? x.tagName += oe : x.script ? (x.script += "</" + x.tagName, x.tagName = "", x.state = N.SCRIPT) : (J(oe) || H(x, "Invalid tagname in closing tag"), x.state = N.CLOSE_TAG_SAW_WHITE);
              else {
                if (J(oe))
                  continue;
                xe(F, oe) ? x.script ? (x.script += "</" + oe, x.state = N.SCRIPT) : H(x, "Invalid tagname in closing tag.") : x.tagName = oe;
              }
              continue;
            case N.CLOSE_TAG_SAW_WHITE:
              if (J(oe))
                continue;
              oe === ">" ? Ge(x) : H(x, "Invalid characters in closing tag");
              continue;
            case N.TEXT_ENTITY:
            case N.ATTRIB_VALUE_ENTITY_Q:
            case N.ATTRIB_VALUE_ENTITY_U:
              var W, ge;
              switch (x.state) {
                case N.TEXT_ENTITY:
                  W = N.TEXT, ge = "textNode";
                  break;
                case N.ATTRIB_VALUE_ENTITY_Q:
                  W = N.ATTRIB_VALUE_QUOTED, ge = "attribValue";
                  break;
                case N.ATTRIB_VALUE_ENTITY_U:
                  W = N.ATTRIB_VALUE_UNQUOTED, ge = "attribValue";
                  break;
              }
              if (oe === ";") {
                var _e = Qe(x);
                x.opt.unparsedEntities && !Object.values(r.XML_ENTITIES).includes(_e) ? (x.entity = "", x.state = W, x.write(_e)) : (x[ge] += _e, x.entity = "", x.state = W);
              } else ie(x.entity.length ? P : A, oe) ? x.entity += oe : (H(x, "Invalid character in entity name"), x[ge] += "&" + x.entity + oe, x.entity = "", x.state = W);
              continue;
            default:
              throw new Error(x, "Unknown state: " + x.state);
          }
        return x.position >= x.bufferCheckPosition && d(x), x;
      }
      /*! http://mths.be/fromcodepoint v0.1.0 by @mathias */
      String.fromCodePoint || function() {
        var D = String.fromCharCode, x = Math.floor, V = function() {
          var oe = 16384, ct = [], R, W, ge = -1, _e = arguments.length;
          if (!_e)
            return "";
          for (var Ne = ""; ++ge < _e; ) {
            var Se = Number(arguments[ge]);
            if (!isFinite(Se) || // `NaN`, `+Infinity`, or `-Infinity`
            Se < 0 || // not a valid Unicode code point
            Se > 1114111 || // not a valid Unicode code point
            x(Se) !== Se)
              throw RangeError("Invalid code point: " + Se);
            Se <= 65535 ? ct.push(Se) : (Se -= 65536, R = (Se >> 10) + 55296, W = Se % 1024 + 56320, ct.push(R, W)), (ge + 1 === _e || ct.length > oe) && (Ne += D.apply(null, ct), ct.length = 0);
          }
          return Ne;
        };
        Object.defineProperty ? Object.defineProperty(String, "fromCodePoint", {
          value: V,
          configurable: !0,
          writable: !0
        }) : String.fromCodePoint = V;
      }();
    })(t);
  }(Bl)), Bl;
}
ep();
const qe = "sclElements", nn = {
  default: {
    prefix: "",
    uri: "http://www.iec.ch/61850/2003/SCL"
  },
  v2019C1: {
    prefix: "eIEC61850-6-100",
    uri: "http://www.iec.ch/61850/2019/SCL/6-100"
  }
};
var Os = { exports: {} }, tp = Os.exports, Ul;
function np() {
  return Ul || (Ul = 1, function(t, r) {
    (function(i, l) {
      t.exports = l();
    })(tp, function() {
      var i = function(e, n) {
        return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(o, a) {
          o.__proto__ = a;
        } || function(o, a) {
          for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (o[s] = a[s]);
        })(e, n);
      }, l = function() {
        return (l = Object.assign || function(e) {
          for (var n, o = 1, a = arguments.length; o < a; o++) for (var s in n = arguments[o]) Object.prototype.hasOwnProperty.call(n, s) && (e[s] = n[s]);
          return e;
        }).apply(this, arguments);
      };
      function d(e, n, o) {
        for (var a, s = 0, u = n.length; s < u; s++) !a && s in n || ((a = a || Array.prototype.slice.call(n, 0, s))[s] = n[s]);
        return e.concat(a || Array.prototype.slice.call(n));
      }
      var f = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : Yf, c = Object.keys, m = Array.isArray;
      function g(e, n) {
        return typeof n != "object" || c(n).forEach(function(o) {
          e[o] = n[o];
        }), e;
      }
      typeof Promise > "u" || f.Promise || (f.Promise = Promise);
      var q = Object.getPrototypeOf, B = {}.hasOwnProperty;
      function G(e, n) {
        return B.call(e, n);
      }
      function re(e, n) {
        typeof n == "function" && (n = n(q(e))), (typeof Reflect > "u" ? c : Reflect.ownKeys)(n).forEach(function(o) {
          k(e, o, n[o]);
        });
      }
      var Z = Object.defineProperty;
      function k(e, n, o, a) {
        Z(e, n, g(o && G(o, "get") && typeof o.get == "function" ? { get: o.get, set: o.set, configurable: !0 } : { value: o, configurable: !0, writable: !0 }, a));
      }
      function j(e) {
        return { from: function(n) {
          return e.prototype = Object.create(n.prototype), k(e.prototype, "constructor", e), { extend: re.bind(null, e.prototype) };
        } };
      }
      var F = Object.getOwnPropertyDescriptor, X = [].slice;
      function A(e, n, o) {
        return X.call(e, n, o);
      }
      function P(e, n) {
        return n(e);
      }
      function J(e) {
        if (!e) throw new Error("Assertion Failed");
      }
      function Oe(e) {
        f.setImmediate ? setImmediate(e) : setTimeout(e, 0);
      }
      function Y(e, n) {
        if (typeof n == "string" && G(e, n)) return e[n];
        if (!n) return e;
        if (typeof n != "string") {
          for (var o = [], a = 0, s = n.length; a < s; ++a) {
            var u = Y(e, n[a]);
            o.push(u);
          }
          return o;
        }
        var h = n.indexOf(".");
        if (h !== -1) {
          var v = e[n.substr(0, h)];
          return v == null ? void 0 : Y(v, n.substr(h + 1));
        }
      }
      function ie(e, n, o) {
        if (e && n !== void 0 && !("isFrozen" in Object && Object.isFrozen(e))) if (typeof n != "string" && "length" in n) {
          J(typeof o != "string" && "length" in o);
          for (var a = 0, s = n.length; a < s; ++a) ie(e, n[a], o[a]);
        } else {
          var u, h, v = n.indexOf(".");
          v !== -1 ? (u = n.substr(0, v), (h = n.substr(v + 1)) === "" ? o === void 0 ? m(e) && !isNaN(parseInt(u)) ? e.splice(u, 1) : delete e[u] : e[u] = o : ie(v = !(v = e[u]) || !G(e, u) ? e[u] = {} : v, h, o)) : o === void 0 ? m(e) && !isNaN(parseInt(n)) ? e.splice(n, 1) : delete e[n] : e[n] = o;
        }
      }
      function xe(e) {
        var n, o = {};
        for (n in e) G(e, n) && (o[n] = e[n]);
        return o;
      }
      var N = [].concat;
      function de(e) {
        return N.apply([], e);
      }
      var nt = "BigUint64Array,BigInt64Array,Array,Boolean,String,Date,RegExp,Blob,File,FileList,FileSystemFileHandle,FileSystemDirectoryHandle,ArrayBuffer,DataView,Uint8ClampedArray,ImageBitmap,ImageData,Map,Set,CryptoKey".split(",").concat(de([8, 16, 32, 64].map(function(e) {
        return ["Int", "Uint", "Float"].map(function(n) {
          return n + e + "Array";
        });
      }))).filter(function(e) {
        return f[e];
      }), Q = new Set(nt.map(function(e) {
        return f[e];
      })), he = null;
      function z(e) {
        return he = /* @__PURE__ */ new WeakMap(), e = function n(o) {
          if (!o || typeof o != "object") return o;
          var a = he.get(o);
          if (a) return a;
          if (m(o)) {
            a = [], he.set(o, a);
            for (var s = 0, u = o.length; s < u; ++s) a.push(n(o[s]));
          } else if (Q.has(o.constructor)) a = o;
          else {
            var h, v = q(o);
            for (h in a = v === Object.prototype ? {} : Object.create(v), he.set(o, a), o) G(o, h) && (a[h] = n(o[h]));
          }
          return a;
        }(e), he = null, e;
      }
      var U = {}.toString;
      function ne(e) {
        return U.call(e).slice(8, -1);
      }
      var se = typeof Symbol < "u" ? Symbol.iterator : "@@iterator", H = typeof se == "symbol" ? function(e) {
        var n;
        return e != null && (n = e[se]) && n.apply(e);
      } : function() {
        return null;
      };
      function le(e, n) {
        return n = e.indexOf(n), 0 <= n && e.splice(n, 1), 0 <= n;
      }
      var Ce = {};
      function Te(e) {
        var n, o, a, s;
        if (arguments.length === 1) {
          if (m(e)) return e.slice();
          if (this === Ce && typeof e == "string") return [e];
          if (s = H(e)) {
            for (o = []; !(a = s.next()).done; ) o.push(a.value);
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
      var Fe = typeof Symbol < "u" ? function(e) {
        return e[Symbol.toStringTag] === "AsyncFunction";
      } : function() {
        return !1;
      }, Ye = ["Unknown", "Constraint", "Data", "TransactionInactive", "ReadOnly", "Version", "NotFound", "InvalidState", "InvalidAccess", "Abort", "Timeout", "QuotaExceeded", "Syntax", "DataClone"], Pt = ["Modify", "Bulk", "OpenFailed", "VersionChange", "Schema", "Upgrade", "InvalidTable", "MissingAPI", "NoSuchDatabase", "InvalidArgument", "SubTransaction", "Unsupported", "Internal", "DatabaseClosed", "PrematureCommit", "ForeignAwait"].concat(Ye), Ge = { VersionChanged: "Database version changed by other database connection", DatabaseClosed: "Database has been closed", Abort: "Transaction aborted", TransactionInactive: "Transaction has already completed or failed", MissingAPI: "IndexedDB API missing. Please visit https://tinyurl.com/y2uuvskb" };
      function Qe(e, n) {
        this.name = e, this.message = n;
      }
      function Ze(e, n) {
        return e + ". Errors: " + Object.keys(n).map(function(o) {
          return n[o].toString();
        }).filter(function(o, a, s) {
          return s.indexOf(o) === a;
        }).join(`
`);
      }
      function vt(e, n, o, a) {
        this.failures = n, this.failedKeys = a, this.successCount = o, this.message = Ze(e, n);
      }
      function st(e, n) {
        this.name = "BulkError", this.failures = Object.keys(n).map(function(o) {
          return n[o];
        }), this.failuresByPos = n, this.message = Ze(e, this.failures);
      }
      j(Qe).from(Error).extend({ toString: function() {
        return this.name + ": " + this.message;
      } }), j(vt).from(Qe), j(st).from(Qe);
      var D = Pt.reduce(function(e, n) {
        return e[n] = n + "Error", e;
      }, {}), x = Qe, V = Pt.reduce(function(e, n) {
        var o = n + "Error";
        function a(s, u) {
          this.name = o, s ? typeof s == "string" ? (this.message = "".concat(s).concat(u ? `
 ` + u : ""), this.inner = u || null) : typeof s == "object" && (this.message = "".concat(s.name, " ").concat(s.message), this.inner = s) : (this.message = Ge[n] || o, this.inner = null);
        }
        return j(a).from(x), e[n] = a, e;
      }, {});
      V.Syntax = SyntaxError, V.Type = TypeError, V.Range = RangeError;
      var oe = Ye.reduce(function(e, n) {
        return e[n + "Error"] = V[n], e;
      }, {}), ct = Pt.reduce(function(e, n) {
        return ["Syntax", "Type", "Range"].indexOf(n) === -1 && (e[n + "Error"] = V[n]), e;
      }, {});
      function R() {
      }
      function W(e) {
        return e;
      }
      function ge(e, n) {
        return e == null || e === W ? n : function(o) {
          return n(e(o));
        };
      }
      function _e(e, n) {
        return function() {
          e.apply(this, arguments), n.apply(this, arguments);
        };
      }
      function Ne(e, n) {
        return e === R ? n : function() {
          var o = e.apply(this, arguments);
          o !== void 0 && (arguments[0] = o);
          var a = this.onsuccess, s = this.onerror;
          this.onsuccess = null, this.onerror = null;
          var u = n.apply(this, arguments);
          return a && (this.onsuccess = this.onsuccess ? _e(a, this.onsuccess) : a), s && (this.onerror = this.onerror ? _e(s, this.onerror) : s), u !== void 0 ? u : o;
        };
      }
      function Se(e, n) {
        return e === R ? n : function() {
          e.apply(this, arguments);
          var o = this.onsuccess, a = this.onerror;
          this.onsuccess = this.onerror = null, n.apply(this, arguments), o && (this.onsuccess = this.onsuccess ? _e(o, this.onsuccess) : o), a && (this.onerror = this.onerror ? _e(a, this.onerror) : a);
        };
      }
      function Pe(e, n) {
        return e === R ? n : function(o) {
          var a = e.apply(this, arguments);
          g(o, a);
          var s = this.onsuccess, u = this.onerror;
          return this.onsuccess = null, this.onerror = null, o = n.apply(this, arguments), s && (this.onsuccess = this.onsuccess ? _e(s, this.onsuccess) : s), u && (this.onerror = this.onerror ? _e(u, this.onerror) : u), a === void 0 ? o === void 0 ? void 0 : o : g(a, o);
        };
      }
      function Le(e, n) {
        return e === R ? n : function() {
          return n.apply(this, arguments) !== !1 && e.apply(this, arguments);
        };
      }
      function Ee(e, n) {
        return e === R ? n : function() {
          var o = e.apply(this, arguments);
          if (o && typeof o.then == "function") {
            for (var a = this, s = arguments.length, u = new Array(s); s--; ) u[s] = arguments[s];
            return o.then(function() {
              return n.apply(a, u);
            });
          }
          return n.apply(this, arguments);
        };
      }
      ct.ModifyError = vt, ct.DexieError = Qe, ct.BulkError = st;
      var Ie = typeof location < "u" && /^(http|https):\/\/(localhost|127\.0\.0\.1)/.test(location.href);
      function We(e) {
        Ie = e;
      }
      var je = {}, He = 100, nt = typeof Promise > "u" ? [] : function() {
        var e = Promise.resolve();
        if (typeof crypto > "u" || !crypto.subtle) return [e, q(e), e];
        var n = crypto.subtle.digest("SHA-512", new Uint8Array([0]));
        return [n, q(n), e];
      }(), Ye = nt[0], Pt = nt[1], nt = nt[2], Pt = Pt && Pt.then, dt = Ye && Ye.constructor, pt = !!nt, Et = function(e, n) {
        bn.push([e, n]), Vt && (queueMicrotask(Di), Vt = !1);
      }, Bt = !0, Vt = !0, Dt = [], sn = [], Wn = W, xt = { id: "global", global: !0, ref: 0, unhandleds: [], onunhandled: R, pgp: !1, env: {}, finalize: R }, we = xt, bn = [], ln = 0, er = [];
      function ye(e) {
        if (typeof this != "object") throw new TypeError("Promises must be constructed via new");
        this._listeners = [], this._lib = !1;
        var n = this._PSD = we;
        if (typeof e != "function") {
          if (e !== je) throw new TypeError("Not a function");
          return this._state = arguments[1], this._value = arguments[2], void (this._state === !1 && Vr(this, this._value));
        }
        this._state = null, this._value = null, ++n.ref, function o(a, s) {
          try {
            s(function(u) {
              if (a._state === null) {
                if (u === a) throw new TypeError("A promise cannot be resolved with itself.");
                var h = a._lib && wn();
                u && typeof u.then == "function" ? o(a, function(v, b) {
                  u instanceof ye ? u._then(v, b) : u.then(v, b);
                }) : (a._state = !0, a._value = u, Uo(a)), h && _n();
              }
            }, Vr.bind(null, a));
          } catch (u) {
            Vr(a, u);
          }
        }(this, e);
      }
      var Ur = { get: function() {
        var e = we, n = or;
        function o(a, s) {
          var u = this, h = !e.global && (e !== we || n !== or), v = h && !Xt(), b = new ye(function(_, S) {
            Wr(u, new qo(Wo(a, e, h, v), Wo(s, e, h, v), _, S, e));
          });
          return this._consoleTask && (b._consoleTask = this._consoleTask), b;
        }
        return o.prototype = je, o;
      }, set: function(e) {
        k(this, "then", e && e.prototype === je ? Ur : { get: function() {
          return e;
        }, set: Ur.set });
      } };
      function qo(e, n, o, a, s) {
        this.onFulfilled = typeof e == "function" ? e : null, this.onRejected = typeof n == "function" ? n : null, this.resolve = o, this.reject = a, this.psd = s;
      }
      function Vr(e, n) {
        var o, a;
        sn.push(n), e._state === null && (o = e._lib && wn(), n = Wn(n), e._state = !1, e._value = n, a = e, Dt.some(function(s) {
          return s._value === a._value;
        }) || Dt.push(a), Uo(e), o && _n());
      }
      function Uo(e) {
        var n = e._listeners;
        e._listeners = [];
        for (var o = 0, a = n.length; o < a; ++o) Wr(e, n[o]);
        var s = e._PSD;
        --s.ref || s.finalize(), ln === 0 && (++ln, Et(function() {
          --ln == 0 && Gr();
        }, []));
      }
      function Wr(e, n) {
        if (e._state !== null) {
          var o = e._state ? n.onFulfilled : n.onRejected;
          if (o === null) return (e._state ? n.resolve : n.reject)(e._value);
          ++n.psd.ref, ++ln, Et(Ei, [o, e, n]);
        } else e._listeners.push(n);
      }
      function Ei(e, n, o) {
        try {
          var a, s = n._value;
          !n._state && sn.length && (sn = []), a = Ie && n._consoleTask ? n._consoleTask.run(function() {
            return e(s);
          }) : e(s), n._state || sn.indexOf(s) !== -1 || function(u) {
            for (var h = Dt.length; h; ) if (Dt[--h]._value === u._value) return Dt.splice(h, 1);
          }(n), o.resolve(a);
        } catch (u) {
          o.reject(u);
        } finally {
          --ln == 0 && Gr(), --o.psd.ref || o.psd.finalize();
        }
      }
      function Di() {
        un(xt, function() {
          wn() && _n();
        });
      }
      function wn() {
        var e = Bt;
        return Vt = Bt = !1, e;
      }
      function _n() {
        var e, n, o;
        do
          for (; 0 < bn.length; ) for (e = bn, bn = [], o = e.length, n = 0; n < o; ++n) {
            var a = e[n];
            a[0].apply(null, a[1]);
          }
        while (0 < bn.length);
        Vt = Bt = !0;
      }
      function Gr() {
        var e = Dt;
        Dt = [], e.forEach(function(a) {
          a._PSD.onunhandled.call(null, a._value, a);
        });
        for (var n = er.slice(0), o = n.length; o; ) n[--o]();
      }
      function tr(e) {
        return new ye(je, !1, e);
      }
      function rt(e, n) {
        var o = we;
        return function() {
          var a = wn(), s = we;
          try {
            return Qt(o, !0), e.apply(this, arguments);
          } catch (u) {
            n && n(u);
          } finally {
            Qt(s, !1), a && _n();
          }
        };
      }
      re(ye.prototype, { then: Ur, _then: function(e, n) {
        Wr(this, new qo(null, null, e, n, we));
      }, catch: function(e) {
        if (arguments.length === 1) return this.then(null, e);
        var n = e, o = arguments[1];
        return typeof n == "function" ? this.then(null, function(a) {
          return (a instanceof n ? o : tr)(a);
        }) : this.then(null, function(a) {
          return (a && a.name === n ? o : tr)(a);
        });
      }, finally: function(e) {
        return this.then(function(n) {
          return ye.resolve(e()).then(function() {
            return n;
          });
        }, function(n) {
          return ye.resolve(e()).then(function() {
            return tr(n);
          });
        });
      }, timeout: function(e, n) {
        var o = this;
        return e < 1 / 0 ? new ye(function(a, s) {
          var u = setTimeout(function() {
            return s(new V.Timeout(n));
          }, e);
          o.then(a, s).finally(clearTimeout.bind(null, u));
        }) : this;
      } }), typeof Symbol < "u" && Symbol.toStringTag && k(ye.prototype, Symbol.toStringTag, "Dexie.Promise"), xt.env = Vo(), re(ye, { all: function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n, o) {
          e.length === 0 && n([]);
          var a = e.length;
          e.forEach(function(s, u) {
            return ye.resolve(s).then(function(h) {
              e[u] = h, --a || n(e);
            }, o);
          });
        });
      }, resolve: function(e) {
        return e instanceof ye ? e : e && typeof e.then == "function" ? new ye(function(n, o) {
          e.then(n, o);
        }) : new ye(je, !0, e);
      }, reject: tr, race: function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n, o) {
          e.map(function(a) {
            return ye.resolve(a).then(n, o);
          });
        });
      }, PSD: { get: function() {
        return we;
      }, set: function(e) {
        return we = e;
      } }, totalEchoes: { get: function() {
        return or;
      } }, newPSD: Yt, usePSD: un, scheduler: { get: function() {
        return Et;
      }, set: function(e) {
        Et = e;
      } }, rejectionMapper: { get: function() {
        return Wn;
      }, set: function(e) {
        Wn = e;
      } }, follow: function(e, n) {
        return new ye(function(o, a) {
          return Yt(function(s, u) {
            var h = we;
            h.unhandleds = [], h.onunhandled = u, h.finalize = _e(function() {
              var v, b = this;
              v = function() {
                b.unhandleds.length === 0 ? s() : u(b.unhandleds[0]);
              }, er.push(function _() {
                v(), er.splice(er.indexOf(_), 1);
              }), ++ln, Et(function() {
                --ln == 0 && Gr();
              }, []);
            }, h.finalize), e();
          }, n, o, a);
        });
      } }), dt && (dt.allSettled && k(ye, "allSettled", function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n) {
          e.length === 0 && n([]);
          var o = e.length, a = new Array(o);
          e.forEach(function(s, u) {
            return ye.resolve(s).then(function(h) {
              return a[u] = { status: "fulfilled", value: h };
            }, function(h) {
              return a[u] = { status: "rejected", reason: h };
            }).then(function() {
              return --o || n(a);
            });
          });
        });
      }), dt.any && typeof AggregateError < "u" && k(ye, "any", function() {
        var e = Te.apply(null, arguments).map(ar);
        return new ye(function(n, o) {
          e.length === 0 && o(new AggregateError([]));
          var a = e.length, s = new Array(a);
          e.forEach(function(u, h) {
            return ye.resolve(u).then(function(v) {
              return n(v);
            }, function(v) {
              s[h] = v, --a || o(new AggregateError(s));
            });
          });
        });
      }), dt.withResolvers && (ye.withResolvers = dt.withResolvers));
      var ht = { awaits: 0, echoes: 0, id: 0 }, Ri = 0, nr = [], rr = 0, or = 0, Ai = 0;
      function Yt(e, n, o, a) {
        var s = we, u = Object.create(s);
        return u.parent = s, u.ref = 0, u.global = !1, u.id = ++Ai, xt.env, u.env = pt ? { Promise: ye, PromiseProp: { value: ye, configurable: !0, writable: !0 }, all: ye.all, race: ye.race, allSettled: ye.allSettled, any: ye.any, resolve: ye.resolve, reject: ye.reject } : {}, n && g(u, n), ++s.ref, u.finalize = function() {
          --this.parent.ref || this.parent.finalize();
        }, a = un(u, e, o, a), u.ref === 0 && u.finalize(), a;
      }
      function xn() {
        return ht.id || (ht.id = ++Ri), ++ht.awaits, ht.echoes += He, ht.id;
      }
      function Xt() {
        return !!ht.awaits && (--ht.awaits == 0 && (ht.id = 0), ht.echoes = ht.awaits * He, !0);
      }
      function ar(e) {
        return ht.echoes && e && e.constructor === dt ? (xn(), e.then(function(n) {
          return Xt(), n;
        }, function(n) {
          return Xt(), lt(n);
        })) : e;
      }
      function Pi() {
        var e = nr[nr.length - 1];
        nr.pop(), Qt(e, !1);
      }
      function Qt(e, n) {
        var o, a = we;
        (n ? !ht.echoes || rr++ && e === we : !rr || --rr && e === we) || queueMicrotask(n ? (function(s) {
          ++or, ht.echoes && --ht.echoes != 0 || (ht.echoes = ht.awaits = ht.id = 0), nr.push(we), Qt(s, !0);
        }).bind(null, e) : Pi), e !== we && (we = e, a === xt && (xt.env = Vo()), pt && (o = xt.env.Promise, n = e.env, (a.global || e.global) && (Object.defineProperty(f, "Promise", n.PromiseProp), o.all = n.all, o.race = n.race, o.resolve = n.resolve, o.reject = n.reject, n.allSettled && (o.allSettled = n.allSettled), n.any && (o.any = n.any))));
      }
      function Vo() {
        var e = f.Promise;
        return pt ? { Promise: e, PromiseProp: Object.getOwnPropertyDescriptor(f, "Promise"), all: e.all, race: e.race, allSettled: e.allSettled, any: e.any, resolve: e.resolve, reject: e.reject } : {};
      }
      function un(e, n, o, a, s) {
        var u = we;
        try {
          return Qt(e, !0), n(o, a, s);
        } finally {
          Qt(u, !1);
        }
      }
      function Wo(e, n, o, a) {
        return typeof e != "function" ? e : function() {
          var s = we;
          o && xn(), Qt(n, !0);
          try {
            return e.apply(this, arguments);
          } finally {
            Qt(s, !1), a && queueMicrotask(Xt);
          }
        };
      }
      function Hr(e) {
        Promise === dt && ht.echoes === 0 ? rr === 0 ? e() : enqueueNativeMicroTask(e) : setTimeout(e, 0);
      }
      ("" + Pt).indexOf("[native code]") === -1 && (xn = Xt = R);
      var lt = ye.reject, cn = "￿", Wt = "Invalid key provided. Keys must be of type string, number, Date or Array<string | number | Date>.", Go = "String expected.", Cn = [], ir = "__dbnames", zr = "readonly", Yr = "readwrite";
      function dn(e, n) {
        return e ? n ? function() {
          return e.apply(this, arguments) && n.apply(this, arguments);
        } : e : n;
      }
      var Ho = { type: 3, lower: -1 / 0, lowerOpen: !1, upper: [[]], upperOpen: !1 };
      function sr(e) {
        return typeof e != "string" || /\./.test(e) ? function(n) {
          return n;
        } : function(n) {
          return n[e] === void 0 && e in n && delete (n = z(n))[e], n;
        };
      }
      function zo() {
        throw V.Type("Entity instances must never be new:ed. Instances are generated by the framework bypassing the constructor.");
      }
      function Me(e, n) {
        try {
          var o = Yo(e), a = Yo(n);
          if (o !== a) return o === "Array" ? 1 : a === "Array" ? -1 : o === "binary" ? 1 : a === "binary" ? -1 : o === "string" ? 1 : a === "string" ? -1 : o === "Date" ? 1 : a !== "Date" ? NaN : -1;
          switch (o) {
            case "number":
            case "Date":
            case "string":
              return n < e ? 1 : e < n ? -1 : 0;
            case "binary":
              return function(s, u) {
                for (var h = s.length, v = u.length, b = h < v ? h : v, _ = 0; _ < b; ++_) if (s[_] !== u[_]) return s[_] < u[_] ? -1 : 1;
                return h === v ? 0 : h < v ? -1 : 1;
              }(Xo(e), Xo(n));
            case "Array":
              return function(s, u) {
                for (var h = s.length, v = u.length, b = h < v ? h : v, _ = 0; _ < b; ++_) {
                  var S = Me(s[_], u[_]);
                  if (S !== 0) return S;
                }
                return h === v ? 0 : h < v ? -1 : 1;
              }(e, n);
          }
        } catch {
        }
        return NaN;
      }
      function Yo(e) {
        var n = typeof e;
        return n != "object" ? n : ArrayBuffer.isView(e) ? "binary" : (e = ne(e), e === "ArrayBuffer" ? "binary" : e);
      }
      function Xo(e) {
        return e instanceof Uint8Array ? e : ArrayBuffer.isView(e) ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : new Uint8Array(e);
      }
      function lr(e, n, o) {
        var a = e.schema.yProps;
        return a ? (n && 0 < o.numFailures && (n = n.filter(function(s, u) {
          return !o.failures[u];
        })), Promise.all(a.map(function(s) {
          return s = s.updatesTable, n ? e.db.table(s).where("k").anyOf(n).delete() : e.db.table(s).clear();
        })).then(function() {
          return o;
        })) : o;
      }
      var Qo = (et.prototype._trans = function(e, n, o) {
        var a = this._tx || we.trans, s = this.name, u = Ie && typeof console < "u" && console.createTask && console.createTask("Dexie: ".concat(e === "readonly" ? "read" : "write", " ").concat(this.name));
        function h(_, S, y) {
          if (!y.schema[s]) throw new V.NotFound("Table " + s + " not part of transaction");
          return n(y.idbtrans, y);
        }
        var v = wn();
        try {
          var b = a && a.db._novip === this.db._novip ? a === we.trans ? a._promise(e, h, o) : Yt(function() {
            return a._promise(e, h, o);
          }, { trans: a, transless: we.transless || we }) : function _(S, y, T, w) {
            if (S.idbdb && (S._state.openComplete || we.letThrough || S._vip)) {
              var C = S._createTransaction(y, T, S._dbSchema);
              try {
                C.create(), S._state.PR1398_maxLoop = 3;
              } catch (O) {
                return O.name === D.InvalidState && S.isOpen() && 0 < --S._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), S.close({ disableAutoOpen: !1 }), S.open().then(function() {
                  return _(S, y, T, w);
                })) : lt(O);
              }
              return C._promise(y, function(O, I) {
                return Yt(function() {
                  return we.trans = C, w(O, I, C);
                });
              }).then(function(O) {
                if (y === "readwrite") try {
                  C.idbtrans.commit();
                } catch {
                }
                return y === "readonly" ? O : C._completion.then(function() {
                  return O;
                });
              });
            }
            if (S._state.openComplete) return lt(new V.DatabaseClosed(S._state.dbOpenError));
            if (!S._state.isBeingOpened) {
              if (!S._state.autoOpen) return lt(new V.DatabaseClosed());
              S.open().catch(R);
            }
            return S._state.dbReadyPromise.then(function() {
              return _(S, y, T, w);
            });
          }(this.db, e, [this.name], h);
          return u && (b._consoleTask = u, b = b.catch(function(_) {
            return console.trace(_), lt(_);
          })), b;
        } finally {
          v && _n();
        }
      }, et.prototype.get = function(e, n) {
        var o = this;
        return e && e.constructor === Object ? this.where(e).first(n) : e == null ? lt(new V.Type("Invalid argument to Table.get()")) : this._trans("readonly", function(a) {
          return o.core.get({ trans: a, key: e }).then(function(s) {
            return o.hook.reading.fire(s);
          });
        }).then(n);
      }, et.prototype.where = function(e) {
        if (typeof e == "string") return new this.db.WhereClause(this, e);
        if (m(e)) return new this.db.WhereClause(this, "[".concat(e.join("+"), "]"));
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
        if (o && this.db._maxKey !== cn) {
          var u = o.keyPath.slice(0, n.length);
          return this.where(u).equals(u.map(function(b) {
            return e[b];
          }));
        }
        !o && Ie && console.warn("The query ".concat(JSON.stringify(e), " on ").concat(this.name, " would benefit from a ") + "compound index [".concat(n.join("+"), "]"));
        var a = this.schema.idxByName;
        function s(v, b) {
          return Me(v, b) === 0;
        }
        var h = n.reduce(function(y, b) {
          var _ = y[0], S = y[1], y = a[b], T = e[b];
          return [_ || y, _ || !y ? dn(S, y && y.multi ? function(w) {
            return w = Y(w, b), m(w) && w.some(function(C) {
              return s(T, C);
            });
          } : function(w) {
            return s(T, Y(w, b));
          }) : S];
        }, [null, null]), u = h[0], h = h[1];
        return u ? this.where(u.name).equals(e[u.keyPath]).filter(h) : o ? this.filter(h) : this.where(n).equals("");
      }, et.prototype.filter = function(e) {
        return this.toCollection().and(e);
      }, et.prototype.count = function(e) {
        return this.toCollection().count(e);
      }, et.prototype.offset = function(e) {
        return this.toCollection().offset(e);
      }, et.prototype.limit = function(e) {
        return this.toCollection().limit(e);
      }, et.prototype.each = function(e) {
        return this.toCollection().each(e);
      }, et.prototype.toArray = function(e) {
        return this.toCollection().toArray(e);
      }, et.prototype.toCollection = function() {
        return new this.db.Collection(new this.db.WhereClause(this));
      }, et.prototype.orderBy = function(e) {
        return new this.db.Collection(new this.db.WhereClause(this, m(e) ? "[".concat(e.join("+"), "]") : e));
      }, et.prototype.reverse = function() {
        return this.toCollection().reverse();
      }, et.prototype.mapToClass = function(e) {
        var n, o = this.db, a = this.name;
        function s() {
          return n !== null && n.apply(this, arguments) || this;
        }
        (this.schema.mappedClass = e).prototype instanceof zo && (function(b, _) {
          if (typeof _ != "function" && _ !== null) throw new TypeError("Class extends value " + String(_) + " is not a constructor or null");
          function S() {
            this.constructor = b;
          }
          i(b, _), b.prototype = _ === null ? Object.create(_) : (S.prototype = _.prototype, new S());
        }(s, n = e), Object.defineProperty(s.prototype, "db", { get: function() {
          return o;
        }, enumerable: !1, configurable: !0 }), s.prototype.table = function() {
          return a;
        }, e = s);
        for (var u = /* @__PURE__ */ new Set(), h = e.prototype; h; h = q(h)) Object.getOwnPropertyNames(h).forEach(function(b) {
          return u.add(b);
        });
        function v(b) {
          if (!b) return b;
          var _, S = Object.create(e.prototype);
          for (_ in b) if (!u.has(_)) try {
            S[_] = b[_];
          } catch {
          }
          return S;
        }
        return this.schema.readHook && this.hook.reading.unsubscribe(this.schema.readHook), this.schema.readHook = v, this.hook("reading", v), e;
      }, et.prototype.defineClass = function() {
        return this.mapToClass(function(e) {
          g(this, e);
        });
      }, et.prototype.add = function(e, n) {
        var o = this, a = this.schema.primKey, s = a.auto, u = a.keyPath, h = e;
        return u && s && (h = sr(u)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "add", keys: n != null ? [n] : null, values: [h] });
        }).then(function(v) {
          return v.numFailures ? ye.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (u) try {
            ie(e, u, v);
          } catch {
          }
          return v;
        });
      }, et.prototype.update = function(e, n) {
        return typeof e != "object" || m(e) ? this.where(":id").equals(e).modify(n) : (e = Y(e, this.schema.primKey.keyPath), e === void 0 ? lt(new V.InvalidArgument("Given object does not contain its primary key")) : this.where(":id").equals(e).modify(n));
      }, et.prototype.put = function(e, n) {
        var o = this, a = this.schema.primKey, s = a.auto, u = a.keyPath, h = e;
        return u && s && (h = sr(u)(e)), this._trans("readwrite", function(v) {
          return o.core.mutate({ trans: v, type: "put", values: [h], keys: n != null ? [n] : null });
        }).then(function(v) {
          return v.numFailures ? ye.reject(v.failures[0]) : v.lastResult;
        }).then(function(v) {
          if (u) try {
            ie(e, u, v);
          } catch {
          }
          return v;
        });
      }, et.prototype.delete = function(e) {
        var n = this;
        return this._trans("readwrite", function(o) {
          return n.core.mutate({ trans: o, type: "delete", keys: [e] }).then(function(a) {
            return lr(n, [e], a);
          }).then(function(a) {
            return a.numFailures ? ye.reject(a.failures[0]) : void 0;
          });
        });
      }, et.prototype.clear = function() {
        var e = this;
        return this._trans("readwrite", function(n) {
          return e.core.mutate({ trans: n, type: "deleteRange", range: Ho }).then(function(o) {
            return lr(e, null, o);
          });
        }).then(function(n) {
          return n.numFailures ? ye.reject(n.failures[0]) : void 0;
        });
      }, et.prototype.bulkGet = function(e) {
        var n = this;
        return this._trans("readonly", function(o) {
          return n.core.getMany({ keys: e, trans: o }).then(function(a) {
            return a.map(function(s) {
              return n.hook.reading.fire(s);
            });
          });
        });
      }, et.prototype.bulkAdd = function(e, n, o) {
        var a = this, s = Array.isArray(n) ? n : void 0, u = (o = o || (s ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && s) throw new V.InvalidArgument("bulkAdd(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(sr(_)) : e;
          return a.core.mutate({ trans: h, type: "add", keys: s, values: _, wantResults: u }).then(function(C) {
            var y = C.numFailures, T = C.results, w = C.lastResult, C = C.failures;
            if (y === 0) return u ? T : w;
            throw new st("".concat(a.name, ".bulkAdd(): ").concat(y, " of ").concat(b, " operations failed"), C);
          });
        });
      }, et.prototype.bulkPut = function(e, n, o) {
        var a = this, s = Array.isArray(n) ? n : void 0, u = (o = o || (s ? void 0 : n)) ? o.allKeys : void 0;
        return this._trans("readwrite", function(h) {
          var _ = a.schema.primKey, v = _.auto, _ = _.keyPath;
          if (_ && s) throw new V.InvalidArgument("bulkPut(): keys argument invalid on tables with inbound keys");
          if (s && s.length !== e.length) throw new V.InvalidArgument("Arguments objects and keys must have the same length");
          var b = e.length, _ = _ && v ? e.map(sr(_)) : e;
          return a.core.mutate({ trans: h, type: "put", keys: s, values: _, wantResults: u }).then(function(C) {
            var y = C.numFailures, T = C.results, w = C.lastResult, C = C.failures;
            if (y === 0) return u ? T : w;
            throw new st("".concat(a.name, ".bulkPut(): ").concat(y, " of ").concat(b, " operations failed"), C);
          });
        });
      }, et.prototype.bulkUpdate = function(e) {
        var n = this, o = this.core, a = e.map(function(h) {
          return h.key;
        }), s = e.map(function(h) {
          return h.changes;
        }), u = [];
        return this._trans("readwrite", function(h) {
          return o.getMany({ trans: h, keys: a, cache: "clone" }).then(function(v) {
            var b = [], _ = [];
            e.forEach(function(y, T) {
              var w = y.key, C = y.changes, O = v[T];
              if (O) {
                for (var I = 0, E = Object.keys(C); I < E.length; I++) {
                  var L = E[I], $ = C[L];
                  if (L === n.schema.primKey.keyPath) {
                    if (Me($, w) !== 0) throw new V.Constraint("Cannot update primary key in bulkUpdate()");
                  } else ie(O, L, $);
                }
                u.push(T), b.push(w), _.push(O);
              }
            });
            var S = b.length;
            return o.mutate({ trans: h, type: "put", keys: b, values: _, updates: { keys: a, changeSpecs: s } }).then(function(y) {
              var T = y.numFailures, w = y.failures;
              if (T === 0) return S;
              for (var C = 0, O = Object.keys(w); C < O.length; C++) {
                var I, E = O[C], L = u[Number(E)];
                L != null && (I = w[E], delete w[E], w[L] = I);
              }
              throw new st("".concat(n.name, ".bulkUpdate(): ").concat(T, " of ").concat(S, " operations failed"), w);
            });
          });
        });
      }, et.prototype.bulkDelete = function(e) {
        var n = this, o = e.length;
        return this._trans("readwrite", function(a) {
          return n.core.mutate({ trans: a, type: "delete", keys: e }).then(function(s) {
            return lr(n, e, s);
          });
        }).then(function(h) {
          var s = h.numFailures, u = h.lastResult, h = h.failures;
          if (s === 0) return u;
          throw new st("".concat(n.name, ".bulkDelete(): ").concat(s, " of ").concat(o, " operations failed"), h);
        });
      }, et);
      function et() {
      }
      function kn(e) {
        function n(h, v) {
          if (v) {
            for (var b = arguments.length, _ = new Array(b - 1); --b; ) _[b - 1] = arguments[b];
            return o[h].subscribe.apply(null, _), e;
          }
          if (typeof h == "string") return o[h];
        }
        var o = {};
        n.addEventType = u;
        for (var a = 1, s = arguments.length; a < s; ++a) u(arguments[a]);
        return n;
        function u(h, v, b) {
          if (typeof h != "object") {
            var _;
            v = v || Le;
            var S = { subscribers: [], fire: b = b || R, subscribe: function(y) {
              S.subscribers.indexOf(y) === -1 && (S.subscribers.push(y), S.fire = v(S.fire, y));
            }, unsubscribe: function(y) {
              S.subscribers = S.subscribers.filter(function(T) {
                return T !== y;
              }), S.fire = S.subscribers.reduce(v, b);
            } };
            return o[h] = n[h] = S;
          }
          c(_ = h).forEach(function(y) {
            var T = _[y];
            if (m(T)) u(y, _[y][0], _[y][1]);
            else {
              if (T !== "asap") throw new V.InvalidArgument("Invalid event config");
              var w = u(y, W, function() {
                for (var C = arguments.length, O = new Array(C); C--; ) O[C] = arguments[C];
                w.subscribers.forEach(function(I) {
                  Oe(function() {
                    I.apply(null, O);
                  });
                });
              });
            }
          });
        }
      }
      function Ln(e, n) {
        return j(n).from({ prototype: e }), n;
      }
      function Sn(e, n) {
        return !(e.filter || e.algorithm || e.or) && (n ? e.justLimit : !e.replayFilter);
      }
      function Xr(e, n) {
        e.filter = dn(e.filter, n);
      }
      function Qr(e, n, o) {
        var a = e.replayFilter;
        e.replayFilter = a ? function() {
          return dn(a(), n());
        } : n, e.justLimit = o && !a;
      }
      function ur(e, n) {
        if (e.isPrimKey) return n.primaryKey;
        var o = n.getIndexByKeyPath(e.index);
        if (!o) throw new V.Schema("KeyPath " + e.index + " on object store " + n.name + " is not indexed");
        return o;
      }
      function Jo(e, n, o) {
        var a = ur(e, n.schema);
        return n.openCursor({ trans: o, values: !e.keysOnly, reverse: e.dir === "prev", unique: !!e.unique, query: { index: a, range: e.range } });
      }
      function cr(e, n, o, a) {
        var s = e.replayFilter ? dn(e.filter, e.replayFilter()) : e.filter;
        if (e.or) {
          var u = {}, h = function(v, b, _) {
            var S, y;
            s && !s(b, _, function(T) {
              return b.stop(T);
            }, function(T) {
              return b.fail(T);
            }) || ((y = "" + (S = b.primaryKey)) == "[object ArrayBuffer]" && (y = "" + new Uint8Array(S)), G(u, y) || (u[y] = !0, n(v, b, _)));
          };
          return Promise.all([e.or._iterate(h, o), Zo(Jo(e, a, o), e.algorithm, h, !e.keysOnly && e.valueMapper)]);
        }
        return Zo(Jo(e, a, o), dn(e.algorithm, s), n, !e.keysOnly && e.valueMapper);
      }
      function Zo(e, n, o, a) {
        var s = rt(a ? function(u, h, v) {
          return o(a(u), h, v);
        } : o);
        return e.then(function(u) {
          if (u) return u.start(function() {
            var h = function() {
              return u.continue();
            };
            n && !n(u, function(v) {
              return h = v;
            }, function(v) {
              u.stop(v), h = R;
            }, function(v) {
              u.fail(v), h = R;
            }) || s(u.value, u, function(v) {
              return h = v;
            }), h();
          });
        });
      }
      var jn = (ea.prototype.execute = function(e) {
        var n = this["@@propmod"];
        if (n.add !== void 0) {
          var o = n.add;
          if (m(o)) return d(d([], m(e) ? e : [], !0), o).sort();
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
          if (m(a)) return m(e) ? e.filter(function(s) {
            return !a.includes(s);
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
      }, ea);
      function ea(e) {
        this["@@propmod"] = e;
      }
      var ki = (Ve.prototype._read = function(e, n) {
        var o = this._ctx;
        return o.error ? o.table._trans(null, lt.bind(null, o.error)) : o.table._trans("readonly", e).then(n);
      }, Ve.prototype._write = function(e) {
        var n = this._ctx;
        return n.error ? n.table._trans(null, lt.bind(null, n.error)) : n.table._trans("readwrite", e, "locked");
      }, Ve.prototype._addAlgorithm = function(e) {
        var n = this._ctx;
        n.algorithm = dn(n.algorithm, e);
      }, Ve.prototype._iterate = function(e, n) {
        return cr(this._ctx, e, n, this._ctx.table.core);
      }, Ve.prototype.clone = function(e) {
        var n = Object.create(this.constructor.prototype), o = Object.create(this._ctx);
        return e && g(o, e), n._ctx = o, n;
      }, Ve.prototype.raw = function() {
        return this._ctx.valueMapper = null, this;
      }, Ve.prototype.each = function(e) {
        var n = this._ctx;
        return this._read(function(o) {
          return cr(n, e, o, n.table.core);
        });
      }, Ve.prototype.count = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx, s = a.table.core;
          if (Sn(a, !0)) return s.count({ trans: o, query: { index: ur(a, s.schema), range: a.range } }).then(function(h) {
            return Math.min(h, a.limit);
          });
          var u = 0;
          return cr(a, function() {
            return ++u, !1;
          }, o, s).then(function() {
            return u;
          });
        }).then(e);
      }, Ve.prototype.sortBy = function(e, n) {
        var o = e.split(".").reverse(), a = o[0], s = o.length - 1;
        function u(b, _) {
          return _ ? u(b[o[_]], _ - 1) : b[a];
        }
        var h = this._ctx.dir === "next" ? 1 : -1;
        function v(b, _) {
          return Me(u(b, s), u(_, s)) * h;
        }
        return this.toArray(function(b) {
          return b.sort(v);
        }).then(n);
      }, Ve.prototype.toArray = function(e) {
        var n = this;
        return this._read(function(o) {
          var a = n._ctx;
          if (a.dir === "next" && Sn(a, !0) && 0 < a.limit) {
            var s = a.valueMapper, u = ur(a, a.table.core.schema);
            return a.table.core.query({ trans: o, limit: a.limit, values: !0, query: { index: u, range: a.range } }).then(function(v) {
              return v = v.result, s ? v.map(s) : v;
            });
          }
          var h = [];
          return cr(a, function(v) {
            return h.push(v);
          }, o, a.table.core).then(function() {
            return h;
          });
        }, e);
      }, Ve.prototype.offset = function(e) {
        var n = this._ctx;
        return e <= 0 || (n.offset += e, Sn(n) ? Qr(n, function() {
          var o = e;
          return function(a, s) {
            return o === 0 || (o === 1 ? --o : s(function() {
              a.advance(o), o = 0;
            }), !1);
          };
        }) : Qr(n, function() {
          var o = e;
          return function() {
            return --o < 0;
          };
        })), this;
      }, Ve.prototype.limit = function(e) {
        return this._ctx.limit = Math.min(this._ctx.limit, e), Qr(this._ctx, function() {
          var n = e;
          return function(o, a, s) {
            return --n <= 0 && a(s), 0 <= n;
          };
        }, !0), this;
      }, Ve.prototype.until = function(e, n) {
        return Xr(this._ctx, function(o, a, s) {
          return !e(o.value) || (a(s), n);
        }), this;
      }, Ve.prototype.first = function(e) {
        return this.limit(1).toArray(function(n) {
          return n[0];
        }).then(e);
      }, Ve.prototype.last = function(e) {
        return this.reverse().first(e);
      }, Ve.prototype.filter = function(e) {
        var n;
        return Xr(this._ctx, function(o) {
          return e(o.value);
        }), (n = this._ctx).isMatch = dn(n.isMatch, e), this;
      }, Ve.prototype.and = function(e) {
        return this.filter(e);
      }, Ve.prototype.or = function(e) {
        return new this.db.WhereClause(this._ctx.table, e, this);
      }, Ve.prototype.reverse = function() {
        return this._ctx.dir = this._ctx.dir === "prev" ? "next" : "prev", this._ondirectionchange && this._ondirectionchange(this._ctx.dir), this;
      }, Ve.prototype.desc = function() {
        return this.reverse();
      }, Ve.prototype.eachKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.key, a);
        });
      }, Ve.prototype.eachUniqueKey = function(e) {
        return this._ctx.unique = "unique", this.eachKey(e);
      }, Ve.prototype.eachPrimaryKey = function(e) {
        var n = this._ctx;
        return n.keysOnly = !n.isMatch, this.each(function(o, a) {
          e(a.primaryKey, a);
        });
      }, Ve.prototype.keys = function(e) {
        var n = this._ctx;
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, s) {
          o.push(s.key);
        }).then(function() {
          return o;
        }).then(e);
      }, Ve.prototype.primaryKeys = function(e) {
        var n = this._ctx;
        if (n.dir === "next" && Sn(n, !0) && 0 < n.limit) return this._read(function(a) {
          var s = ur(n, n.table.core.schema);
          return n.table.core.query({ trans: a, values: !1, limit: n.limit, query: { index: s, range: n.range } });
        }).then(function(a) {
          return a.result;
        }).then(e);
        n.keysOnly = !n.isMatch;
        var o = [];
        return this.each(function(a, s) {
          o.push(s.primaryKey);
        }).then(function() {
          return o;
        }).then(e);
      }, Ve.prototype.uniqueKeys = function(e) {
        return this._ctx.unique = "unique", this.keys(e);
      }, Ve.prototype.firstKey = function(e) {
        return this.limit(1).keys(function(n) {
          return n[0];
        }).then(e);
      }, Ve.prototype.lastKey = function(e) {
        return this.reverse().firstKey(e);
      }, Ve.prototype.distinct = function() {
        var e = this._ctx, e = e.index && e.table.schema.idxByName[e.index];
        if (!e || !e.multi) return this;
        var n = {};
        return Xr(this._ctx, function(s) {
          var a = s.primaryKey.toString(), s = G(n, a);
          return n[a] = !0, !s;
        }), this;
      }, Ve.prototype.modify = function(e) {
        var n = this, o = this._ctx;
        return this._write(function(a) {
          var s, u, h;
          h = typeof e == "function" ? e : (s = c(e), u = s.length, function(E) {
            for (var L = !1, $ = 0; $ < u; ++$) {
              var M = s[$], ee = e[M], fe = Y(E, M);
              ee instanceof jn ? (ie(E, M, ee.execute(fe)), L = !0) : fe !== ee && (ie(E, M, ee), L = !0);
            }
            return L;
          });
          var v = o.table.core, y = v.schema.primaryKey, b = y.outbound, _ = y.extractKey, S = 200, y = n.db._options.modifyChunkSize;
          y && (S = typeof y == "object" ? y[v.name] || y["*"] || 200 : y);
          function T(E, M) {
            var $ = M.failures, M = M.numFailures;
            C += E - M;
            for (var ee = 0, fe = c($); ee < fe.length; ee++) {
              var ae = fe[ee];
              w.push($[ae]);
            }
          }
          var w = [], C = 0, O = [], I = e === ta;
          return n.clone().primaryKeys().then(function(E) {
            function L(M) {
              var ee = Math.min(S, E.length - M), fe = E.slice(M, M + ee);
              return (I ? Promise.resolve([]) : v.getMany({ trans: a, keys: fe, cache: "immutable" })).then(function(ae) {
                var ue = [], ve = [], me = b ? [] : null, be = I ? fe : [];
                if (!I) for (var ke = 0; ke < ee; ++ke) {
                  var Ke = ae[ke], Re = { value: z(Ke), primKey: E[M + ke] };
                  h.call(Re, Re.value, Re) !== !1 && (Re.value == null ? be.push(E[M + ke]) : b || Me(_(Ke), _(Re.value)) === 0 ? (ve.push(Re.value), b && me.push(E[M + ke])) : (be.push(E[M + ke]), ue.push(Re.value)));
                }
                return Promise.resolve(0 < ue.length && v.mutate({ trans: a, type: "add", values: ue }).then(function(at) {
                  for (var De in at.failures) be.splice(parseInt(De), 1);
                  T(ue.length, at);
                })).then(function() {
                  return (0 < ve.length || $ && typeof e == "object") && v.mutate({ trans: a, type: "put", keys: me, values: ve, criteria: $, changeSpec: typeof e != "function" && e, isAdditionalChunk: 0 < M }).then(function(at) {
                    return T(ve.length, at);
                  });
                }).then(function() {
                  return (0 < be.length || $ && I) && v.mutate({ trans: a, type: "delete", keys: be, criteria: $, isAdditionalChunk: 0 < M }).then(function(at) {
                    return lr(o.table, be, at);
                  }).then(function(at) {
                    return T(be.length, at);
                  });
                }).then(function() {
                  return E.length > M + ee && L(M + S);
                });
              });
            }
            var $ = Sn(o) && o.limit === 1 / 0 && (typeof e != "function" || I) && { index: o.index, range: o.range };
            return L(0).then(function() {
              if (0 < w.length) throw new vt("Error modifying one or more objects", w, C, O);
              return E.length;
            });
          });
        });
      }, Ve.prototype.delete = function() {
        var e = this._ctx, n = e.range;
        return !Sn(e) || e.table.schema.yProps || !e.isPrimKey && n.type !== 3 ? this.modify(ta) : this._write(function(o) {
          var a = e.table.core.schema.primaryKey, s = n;
          return e.table.core.count({ trans: o, query: { index: a, range: s } }).then(function(u) {
            return e.table.core.mutate({ trans: o, type: "deleteRange", range: s }).then(function(b) {
              var v = b.failures, b = b.numFailures;
              if (b) throw new vt("Could not delete some values", Object.keys(v).map(function(_) {
                return v[_];
              }), u - b);
              return u - b;
            });
          });
        });
      }, Ve);
      function Ve() {
      }
      var ta = function(e, n) {
        return n.value = null;
      };
      function Li(e, n) {
        return e < n ? -1 : e === n ? 0 : 1;
      }
      function ji(e, n) {
        return n < e ? -1 : e === n ? 0 : 1;
      }
      function Tt(e, n, o) {
        return e = e instanceof ra ? new e.Collection(e) : e, e._ctx.error = new (o || TypeError)(n), e;
      }
      function In(e) {
        return new e.Collection(e, function() {
          return na("");
        }).limit(0);
      }
      function dr(e, n, o, a) {
        var s, u, h, v, b, _, S, y = o.length;
        if (!o.every(function(C) {
          return typeof C == "string";
        })) return Tt(e, Go);
        function T(C) {
          s = C === "next" ? function(I) {
            return I.toUpperCase();
          } : function(I) {
            return I.toLowerCase();
          }, u = C === "next" ? function(I) {
            return I.toLowerCase();
          } : function(I) {
            return I.toUpperCase();
          }, h = C === "next" ? Li : ji;
          var O = o.map(function(I) {
            return { lower: u(I), upper: s(I) };
          }).sort(function(I, E) {
            return h(I.lower, E.lower);
          });
          v = O.map(function(I) {
            return I.upper;
          }), b = O.map(function(I) {
            return I.lower;
          }), S = (_ = C) === "next" ? "" : a;
        }
        T("next"), e = new e.Collection(e, function() {
          return Jt(v[0], b[y - 1] + a);
        }), e._ondirectionchange = function(C) {
          T(C);
        };
        var w = 0;
        return e._addAlgorithm(function(C, O, I) {
          var E = C.key;
          if (typeof E != "string") return !1;
          var L = u(E);
          if (n(L, b, w)) return !0;
          for (var $ = null, M = w; M < y; ++M) {
            var ee = function(fe, ae, ue, ve, me, be) {
              for (var ke = Math.min(fe.length, ve.length), Ke = -1, Re = 0; Re < ke; ++Re) {
                var at = ae[Re];
                if (at !== ve[Re]) return me(fe[Re], ue[Re]) < 0 ? fe.substr(0, Re) + ue[Re] + ue.substr(Re + 1) : me(fe[Re], ve[Re]) < 0 ? fe.substr(0, Re) + ve[Re] + ue.substr(Re + 1) : 0 <= Ke ? fe.substr(0, Ke) + ae[Ke] + ue.substr(Ke + 1) : null;
                me(fe[Re], at) < 0 && (Ke = Re);
              }
              return ke < ve.length && be === "next" ? fe + ue.substr(fe.length) : ke < fe.length && be === "prev" ? fe.substr(0, ue.length) : Ke < 0 ? null : fe.substr(0, Ke) + ve[Ke] + ue.substr(Ke + 1);
            }(E, L, v[M], b[M], h, _);
            ee === null && $ === null ? w = M + 1 : ($ === null || 0 < h($, ee)) && ($ = ee);
          }
          return O($ !== null ? function() {
            C.continue($ + S);
          } : I), !1;
        }), e;
      }
      function Jt(e, n, o, a) {
        return { type: 2, lower: e, upper: n, lowerOpen: o, upperOpen: a };
      }
      function na(e) {
        return { type: 1, lower: e, upper: e };
      }
      var ra = (Object.defineProperty(mt.prototype, "Collection", { get: function() {
        return this._ctx.table.db.Collection;
      }, enumerable: !1, configurable: !0 }), mt.prototype.between = function(e, n, o, a) {
        o = o !== !1, a = a === !0;
        try {
          return 0 < this._cmp(e, n) || this._cmp(e, n) === 0 && (o || a) && (!o || !a) ? In(this) : new this.Collection(this, function() {
            return Jt(e, n, !o, !a);
          });
        } catch {
          return Tt(this, Wt);
        }
      }, mt.prototype.equals = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return na(e);
        });
      }, mt.prototype.above = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(e, void 0, !0);
        });
      }, mt.prototype.aboveOrEqual = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(e, void 0, !1);
        });
      }, mt.prototype.below = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(void 0, e, !1, !0);
        });
      }, mt.prototype.belowOrEqual = function(e) {
        return e == null ? Tt(this, Wt) : new this.Collection(this, function() {
          return Jt(void 0, e);
        });
      }, mt.prototype.startsWith = function(e) {
        return typeof e != "string" ? Tt(this, Go) : this.between(e, e + cn, !0, !0);
      }, mt.prototype.startsWithIgnoreCase = function(e) {
        return e === "" ? this.startsWith(e) : dr(this, function(n, o) {
          return n.indexOf(o[0]) === 0;
        }, [e], cn);
      }, mt.prototype.equalsIgnoreCase = function(e) {
        return dr(this, function(n, o) {
          return n === o[0];
        }, [e], "");
      }, mt.prototype.anyOfIgnoreCase = function() {
        var e = Te.apply(Ce, arguments);
        return e.length === 0 ? In(this) : dr(this, function(n, o) {
          return o.indexOf(n) !== -1;
        }, e, "");
      }, mt.prototype.startsWithAnyOfIgnoreCase = function() {
        var e = Te.apply(Ce, arguments);
        return e.length === 0 ? In(this) : dr(this, function(n, o) {
          return o.some(function(a) {
            return n.indexOf(a) === 0;
          });
        }, e, cn);
      }, mt.prototype.anyOf = function() {
        var e = this, n = Te.apply(Ce, arguments), o = this._cmp;
        try {
          n.sort(o);
        } catch {
          return Tt(this, Wt);
        }
        if (n.length === 0) return In(this);
        var a = new this.Collection(this, function() {
          return Jt(n[0], n[n.length - 1]);
        });
        a._ondirectionchange = function(u) {
          o = u === "next" ? e._ascending : e._descending, n.sort(o);
        };
        var s = 0;
        return a._addAlgorithm(function(u, h, v) {
          for (var b = u.key; 0 < o(b, n[s]); ) if (++s === n.length) return h(v), !1;
          return o(b, n[s]) === 0 || (h(function() {
            u.continue(n[s]);
          }), !1);
        }), a;
      }, mt.prototype.notEqual = function(e) {
        return this.inAnyRange([[-1 / 0, e], [e, this.db._maxKey]], { includeLowers: !1, includeUppers: !1 });
      }, mt.prototype.noneOf = function() {
        var e = Te.apply(Ce, arguments);
        if (e.length === 0) return new this.Collection(this);
        try {
          e.sort(this._ascending);
        } catch {
          return Tt(this, Wt);
        }
        var n = e.reduce(function(o, a) {
          return o ? o.concat([[o[o.length - 1][1], a]]) : [[-1 / 0, a]];
        }, null);
        return n.push([e[e.length - 1], this.db._maxKey]), this.inAnyRange(n, { includeLowers: !1, includeUppers: !1 });
      }, mt.prototype.inAnyRange = function(E, n) {
        var o = this, a = this._cmp, s = this._ascending, u = this._descending, h = this._min, v = this._max;
        if (E.length === 0) return In(this);
        if (!E.every(function(L) {
          return L[0] !== void 0 && L[1] !== void 0 && s(L[0], L[1]) <= 0;
        })) return Tt(this, "First argument to inAnyRange() must be an Array of two-value Arrays [lower,upper] where upper must not be lower than lower", V.InvalidArgument);
        var b = !n || n.includeLowers !== !1, _ = n && n.includeUppers === !0, S, y = s;
        function T(L, $) {
          return y(L[0], $[0]);
        }
        try {
          (S = E.reduce(function(L, $) {
            for (var M = 0, ee = L.length; M < ee; ++M) {
              var fe = L[M];
              if (a($[0], fe[1]) < 0 && 0 < a($[1], fe[0])) {
                fe[0] = h(fe[0], $[0]), fe[1] = v(fe[1], $[1]);
                break;
              }
            }
            return M === ee && L.push($), L;
          }, [])).sort(T);
        } catch {
          return Tt(this, Wt);
        }
        var w = 0, C = _ ? function(L) {
          return 0 < s(L, S[w][1]);
        } : function(L) {
          return 0 <= s(L, S[w][1]);
        }, O = b ? function(L) {
          return 0 < u(L, S[w][0]);
        } : function(L) {
          return 0 <= u(L, S[w][0]);
        }, I = C, E = new this.Collection(this, function() {
          return Jt(S[0][0], S[S.length - 1][1], !b, !_);
        });
        return E._ondirectionchange = function(L) {
          y = L === "next" ? (I = C, s) : (I = O, u), S.sort(T);
        }, E._addAlgorithm(function(L, $, M) {
          for (var ee, fe = L.key; I(fe); ) if (++w === S.length) return $(M), !1;
          return !C(ee = fe) && !O(ee) || (o._cmp(fe, S[w][1]) === 0 || o._cmp(fe, S[w][0]) === 0 || $(function() {
            y === s ? L.continue(S[w][0]) : L.continue(S[w][1]);
          }), !1);
        }), E;
      }, mt.prototype.startsWithAnyOf = function() {
        var e = Te.apply(Ce, arguments);
        return e.every(function(n) {
          return typeof n == "string";
        }) ? e.length === 0 ? In(this) : this.inAnyRange(e.map(function(n) {
          return [n, n + cn];
        })) : Tt(this, "startsWithAnyOf() only works with strings");
      }, mt);
      function mt() {
      }
      function Kt(e) {
        return rt(function(n) {
          return $n(n), e(n.target.error), !1;
        });
      }
      function $n(e) {
        e.stopPropagation && e.stopPropagation(), e.preventDefault && e.preventDefault();
      }
      var Fn = "storagemutated", Jr = "x-storagemutated-1", Zt = kn(null, Fn), $i = (qt.prototype._lock = function() {
        return J(!we.global), ++this._reculock, this._reculock !== 1 || we.global || (we.lockOwnerFor = this), this;
      }, qt.prototype._unlock = function() {
        if (J(!we.global), --this._reculock == 0) for (we.global || (we.lockOwnerFor = null); 0 < this._blockedFuncs.length && !this._locked(); ) {
          var e = this._blockedFuncs.shift();
          try {
            un(e[1], e[0]);
          } catch {
          }
        }
        return this;
      }, qt.prototype._locked = function() {
        return this._reculock && we.lockOwnerFor !== this;
      }, qt.prototype.create = function(e) {
        var n = this;
        if (!this.mode) return this;
        var o = this.db.idbdb, a = this.db._state.dbOpenError;
        if (J(!this.idbtrans), !e && !o) switch (a && a.name) {
          case "DatabaseClosedError":
            throw new V.DatabaseClosed(a);
          case "MissingAPIError":
            throw new V.MissingAPI(a.message, a);
          default:
            throw new V.OpenFailed(a);
        }
        if (!this.active) throw new V.TransactionInactive();
        return J(this._completion._state === null), (e = this.idbtrans = e || (this.db.core || o).transaction(this.storeNames, this.mode, { durability: this.chromeTransactionDurability })).onerror = rt(function(s) {
          $n(s), n._reject(e.error);
        }), e.onabort = rt(function(s) {
          $n(s), n.active && n._reject(new V.Abort(e.error)), n.active = !1, n.on("abort").fire(s);
        }), e.oncomplete = rt(function() {
          n.active = !1, n._resolve(), "mutatedParts" in e && Zt.storagemutated.fire(e.mutatedParts);
        }), this;
      }, qt.prototype._promise = function(e, n, o) {
        var a = this;
        if (e === "readwrite" && this.mode !== "readwrite") return lt(new V.ReadOnly("Transaction is readonly"));
        if (!this.active) return lt(new V.TransactionInactive());
        if (this._locked()) return new ye(function(u, h) {
          a._blockedFuncs.push([function() {
            a._promise(e, n, o).then(u, h);
          }, we]);
        });
        if (o) return Yt(function() {
          var u = new ye(function(h, v) {
            a._lock();
            var b = n(h, v, a);
            b && b.then && b.then(h, v);
          });
          return u.finally(function() {
            return a._unlock();
          }), u._lib = !0, u;
        });
        var s = new ye(function(u, h) {
          var v = n(u, h, a);
          v && v.then && v.then(u, h);
        });
        return s._lib = !0, s;
      }, qt.prototype._root = function() {
        return this.parent ? this.parent._root() : this;
      }, qt.prototype.waitFor = function(e) {
        var n, o = this._root(), a = ye.resolve(e);
        o._waitingFor ? o._waitingFor = o._waitingFor.then(function() {
          return a;
        }) : (o._waitingFor = a, o._waitingQueue = [], n = o.idbtrans.objectStore(o.storeNames[0]), function u() {
          for (++o._spinCount; o._waitingQueue.length; ) o._waitingQueue.shift()();
          o._waitingFor && (n.get(-1 / 0).onsuccess = u);
        }());
        var s = o._waitingFor;
        return new ye(function(u, h) {
          a.then(function(v) {
            return o._waitingQueue.push(rt(u.bind(null, v)));
          }, function(v) {
            return o._waitingQueue.push(rt(h.bind(null, v)));
          }).finally(function() {
            o._waitingFor === s && (o._waitingFor = null);
          });
        });
      }, qt.prototype.abort = function() {
        this.active && (this.active = !1, this.idbtrans && this.idbtrans.abort(), this._reject(new V.Abort()));
      }, qt.prototype.table = function(e) {
        var n = this._memoizedTables || (this._memoizedTables = {});
        if (G(n, e)) return n[e];
        var o = this.schema[e];
        if (!o) throw new V.NotFound("Table " + e + " not part of transaction");
        return o = new this.db.Table(e, o, this), o.core = this.db.core.table(e), n[e] = o;
      }, qt);
      function qt() {
      }
      function Zr(e, n, o, a, s, u, h, v) {
        return { name: e, keyPath: n, unique: o, multi: a, auto: s, compound: u, src: (o && !h ? "&" : "") + (a ? "*" : "") + (s ? "++" : "") + oa(n), type: v };
      }
      function oa(e) {
        return typeof e == "string" ? e : e ? "[" + [].join.call(e, "+") + "]" : "";
      }
      function eo(e, n, o) {
        return { name: e, primKey: n, indexes: o, mappedClass: null, idxByName: (a = function(s) {
          return [s.name, s];
        }, o.reduce(function(s, u, h) {
          return h = a(u, h), h && (s[h[0]] = h[1]), s;
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
            return cn;
          }, cn;
        }
      };
      function to(e) {
        return e == null ? function() {
        } : typeof e == "string" ? (n = e).split(".").length === 1 ? function(o) {
          return o[n];
        } : function(o) {
          return Y(o, n);
        } : function(o) {
          return Y(o, e);
        };
        var n;
      }
      function aa(e) {
        return [].slice.call(e);
      }
      var Fi = 0;
      function Bn(e) {
        return e == null ? ":id" : typeof e == "string" ? e : "[".concat(e.join("+"), "]");
      }
      function Mi(e, n, b) {
        function a(I) {
          if (I.type === 3) return null;
          if (I.type === 4) throw new Error("Cannot convert never type to IDBKeyRange");
          var w = I.lower, C = I.upper, O = I.lowerOpen, I = I.upperOpen;
          return w === void 0 ? C === void 0 ? null : n.upperBound(C, !!I) : C === void 0 ? n.lowerBound(w, !!O) : n.bound(w, C, !!O, !!I);
        }
        function s(T) {
          var w, C = T.name;
          return { name: C, schema: T, mutate: function(O) {
            var I = O.trans, E = O.type, L = O.keys, $ = O.values, M = O.range;
            return new Promise(function(ee, fe) {
              ee = rt(ee);
              var ae = I.objectStore(C), ue = ae.keyPath == null, ve = E === "put" || E === "add";
              if (!ve && E !== "delete" && E !== "deleteRange") throw new Error("Invalid operation type: " + E);
              var me, be = (L || $ || { length: 1 }).length;
              if (L && $ && L.length !== $.length) throw new Error("Given keys array must have same length as given values array.");
              if (be === 0) return ee({ numFailures: 0, failures: {}, results: [], lastResult: void 0 });
              function ke(Ct) {
                ++at, $n(Ct);
              }
              var Ke = [], Re = [], at = 0;
              if (E === "deleteRange") {
                if (M.type === 4) return ee({ numFailures: at, failures: Re, results: [], lastResult: void 0 });
                M.type === 3 ? Ke.push(me = ae.clear()) : Ke.push(me = ae.delete(a(M)));
              } else {
                var ue = ve ? ue ? [$, L] : [$, null] : [L, null], De = ue[0], bt = ue[1];
                if (ve) for (var wt = 0; wt < be; ++wt) Ke.push(me = bt && bt[wt] !== void 0 ? ae[E](De[wt], bt[wt]) : ae[E](De[wt])), me.onerror = ke;
                else for (wt = 0; wt < be; ++wt) Ke.push(me = ae[E](De[wt])), me.onerror = ke;
              }
              function Cr(Ct) {
                Ct = Ct.target.result, Ke.forEach(function(hn, wo) {
                  return hn.error != null && (Re[wo] = hn.error);
                }), ee({ numFailures: at, failures: Re, results: E === "delete" ? L : Ke.map(function(hn) {
                  return hn.result;
                }), lastResult: Ct });
              }
              me.onerror = function(Ct) {
                ke(Ct), Cr(Ct);
              }, me.onsuccess = Cr;
            });
          }, getMany: function(O) {
            var I = O.trans, E = O.keys;
            return new Promise(function(L, $) {
              L = rt(L);
              for (var M, ee = I.objectStore(C), fe = E.length, ae = new Array(fe), ue = 0, ve = 0, me = function(Ke) {
                Ke = Ke.target, ae[Ke._pos] = Ke.result, ++ve === ue && L(ae);
              }, be = Kt($), ke = 0; ke < fe; ++ke) E[ke] != null && ((M = ee.get(E[ke]))._pos = ke, M.onsuccess = me, M.onerror = be, ++ue);
              ue === 0 && L(ae);
            });
          }, get: function(O) {
            var I = O.trans, E = O.key;
            return new Promise(function(L, $) {
              L = rt(L);
              var M = I.objectStore(C).get(E);
              M.onsuccess = function(ee) {
                return L(ee.target.result);
              }, M.onerror = Kt($);
            });
          }, query: (w = _, function(O) {
            return new Promise(function(I, E) {
              I = rt(I);
              var L, $, M, ue = O.trans, ee = O.values, fe = O.limit, me = O.query, ae = fe === 1 / 0 ? void 0 : fe, ve = me.index, me = me.range, ue = ue.objectStore(C), ve = ve.isPrimaryKey ? ue : ue.index(ve.name), me = a(me);
              if (fe === 0) return I({ result: [] });
              w ? ((ae = ee ? ve.getAll(me, ae) : ve.getAllKeys(me, ae)).onsuccess = function(be) {
                return I({ result: be.target.result });
              }, ae.onerror = Kt(E)) : (L = 0, $ = !ee && "openKeyCursor" in ve ? ve.openKeyCursor(me) : ve.openCursor(me), M = [], $.onsuccess = function(be) {
                var ke = $.result;
                return ke ? (M.push(ee ? ke.value : ke.primaryKey), ++L === fe ? I({ result: M }) : void ke.continue()) : I({ result: M });
              }, $.onerror = Kt(E));
            });
          }), openCursor: function(O) {
            var I = O.trans, E = O.values, L = O.query, $ = O.reverse, M = O.unique;
            return new Promise(function(ee, fe) {
              ee = rt(ee);
              var ve = L.index, ae = L.range, ue = I.objectStore(C), ue = ve.isPrimaryKey ? ue : ue.index(ve.name), ve = $ ? M ? "prevunique" : "prev" : M ? "nextunique" : "next", me = !E && "openKeyCursor" in ue ? ue.openKeyCursor(a(ae), ve) : ue.openCursor(a(ae), ve);
              me.onerror = Kt(fe), me.onsuccess = rt(function(be) {
                var ke, Ke, Re, at, De = me.result;
                De ? (De.___id = ++Fi, De.done = !1, ke = De.continue.bind(De), Ke = (Ke = De.continuePrimaryKey) && Ke.bind(De), Re = De.advance.bind(De), at = function() {
                  throw new Error("Cursor not stopped");
                }, De.trans = I, De.stop = De.continue = De.continuePrimaryKey = De.advance = function() {
                  throw new Error("Cursor not started");
                }, De.fail = rt(fe), De.next = function() {
                  var bt = this, wt = 1;
                  return this.start(function() {
                    return wt-- ? bt.continue() : bt.stop();
                  }).then(function() {
                    return bt;
                  });
                }, De.start = function(bt) {
                  function wt() {
                    if (me.result) try {
                      bt();
                    } catch (Ct) {
                      De.fail(Ct);
                    }
                    else De.done = !0, De.start = function() {
                      throw new Error("Cursor behind last entry");
                    }, De.stop();
                  }
                  var Cr = new Promise(function(Ct, hn) {
                    Ct = rt(Ct), me.onerror = Kt(hn), De.fail = hn, De.stop = function(wo) {
                      De.stop = De.continue = De.continuePrimaryKey = De.advance = at, Ct(wo);
                    };
                  });
                  return me.onsuccess = rt(function(Ct) {
                    me.onsuccess = wt, wt();
                  }), De.continue = ke, De.continuePrimaryKey = Ke, De.advance = Re, wt(), Cr;
                }, ee(De)) : ee(null);
              }, fe);
            });
          }, count: function(O) {
            var I = O.query, E = O.trans, L = I.index, $ = I.range;
            return new Promise(function(M, ee) {
              var fe = E.objectStore(C), ae = L.isPrimaryKey ? fe : fe.index(L.name), fe = a($), ae = fe ? ae.count(fe) : ae.count();
              ae.onsuccess = rt(function(ue) {
                return M(ue.target.result);
              }), ae.onerror = Kt(ee);
            });
          } };
        }
        var u, h, v, S = (h = b, v = aa((u = e).objectStoreNames), { schema: { name: u.name, tables: v.map(function(T) {
          return h.objectStore(T);
        }).map(function(T) {
          var w = T.keyPath, I = T.autoIncrement, C = m(w), O = {}, I = { name: T.name, primaryKey: { name: null, isPrimaryKey: !0, outbound: w == null, compound: C, keyPath: w, autoIncrement: I, unique: !0, extractKey: to(w) }, indexes: aa(T.indexNames).map(function(E) {
            return T.index(E);
          }).map(function(M) {
            var L = M.name, $ = M.unique, ee = M.multiEntry, M = M.keyPath, ee = { name: L, compound: m(M), keyPath: M, unique: $, multiEntry: ee, extractKey: to(M) };
            return O[Bn(M)] = ee;
          }), getIndexByKeyPath: function(E) {
            return O[Bn(E)];
          } };
          return O[":id"] = I.primaryKey, w != null && (O[Bn(w)] = I.primaryKey), I;
        }) }, hasGetAll: 0 < v.length && "getAll" in h.objectStore(v[0]) && !(typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604) }), b = S.schema, _ = S.hasGetAll, S = b.tables.map(s), y = {};
        return S.forEach(function(T) {
          return y[T.name] = T;
        }), { stack: "dbcore", transaction: e.transaction.bind(e), table: function(T) {
          if (!y[T]) throw new Error("Table '".concat(T, "' not found"));
          return y[T];
        }, MIN_KEY: -1 / 0, MAX_KEY: Mn(n), schema: b };
      }
      function Bi(e, n, o, a) {
        var s = o.IDBKeyRange;
        return o.indexedDB, { dbcore: (a = Mi(n, s, a), e.dbcore.reduce(function(u, h) {
          return h = h.create, l(l({}, u), h(u));
        }, a)) };
      }
      function fr(e, a) {
        var o = a.db, a = Bi(e._middlewares, o, e._deps, a);
        e.core = a.dbcore, e.tables.forEach(function(s) {
          var u = s.name;
          e.core.schema.tables.some(function(h) {
            return h.name === u;
          }) && (s.core = e.core.table(u), e[u] instanceof e.Table && (e[u].core = s.core));
        });
      }
      function pr(e, n, o, a) {
        o.forEach(function(s) {
          var u = a[s];
          n.forEach(function(h) {
            var v = function b(_, S) {
              return F(_, S) || (_ = q(_)) && b(_, S);
            }(h, s);
            (!v || "value" in v && v.value === void 0) && (h === e.Transaction.prototype || h instanceof e.Transaction ? k(h, s, { get: function() {
              return this.table(s);
            }, set: function(b) {
              Z(this, s, { value: b, writable: !0, configurable: !0, enumerable: !0 });
            } }) : h[s] = new e.Table(s, u));
          });
        });
      }
      function no(e, n) {
        n.forEach(function(o) {
          for (var a in o) o[a] instanceof e.Table && delete o[a];
        });
      }
      function Ki(e, n) {
        return e._cfg.version - n._cfg.version;
      }
      function qi(e, n, o, a) {
        var s = e._dbSchema;
        o.objectStoreNames.contains("$meta") && !s.$meta && (s.$meta = eo("$meta", sa("")[0], []), e._storeNames.push("$meta"));
        var u = e._createTransaction("readwrite", e._storeNames, s);
        u.create(o), u._completion.catch(a);
        var h = u._reject.bind(u), v = we.transless || we;
        Yt(function() {
          return we.trans = u, we.transless = v, n !== 0 ? (fr(e, o), _ = n, ((b = u).storeNames.includes("$meta") ? b.table("$meta").get("version").then(function(S) {
            return S ?? _;
          }) : ye.resolve(_)).then(function(S) {
            return T = S, w = u, C = o, O = [], S = (y = e)._versions, I = y._dbSchema = mr(0, y.idbdb, C), (S = S.filter(function(E) {
              return E._cfg.version >= T;
            })).length !== 0 ? (S.forEach(function(E) {
              O.push(function() {
                var L = I, $ = E._cfg.dbschema;
                vr(y, L, C), vr(y, $, C), I = y._dbSchema = $;
                var M = ro(L, $);
                M.add.forEach(function(ve) {
                  oo(C, ve[0], ve[1].primKey, ve[1].indexes);
                }), M.change.forEach(function(ve) {
                  if (ve.recreate) throw new V.Upgrade("Not yet support for changing primary key");
                  var me = C.objectStore(ve.name);
                  ve.add.forEach(function(be) {
                    return hr(me, be);
                  }), ve.change.forEach(function(be) {
                    me.deleteIndex(be.name), hr(me, be);
                  }), ve.del.forEach(function(be) {
                    return me.deleteIndex(be);
                  });
                });
                var ee = E._cfg.contentUpgrade;
                if (ee && E._cfg.version > T) {
                  fr(y, C), w._memoizedTables = {};
                  var fe = xe($);
                  M.del.forEach(function(ve) {
                    fe[ve] = L[ve];
                  }), no(y, [y.Transaction.prototype]), pr(y, [y.Transaction.prototype], c(fe), fe), w.schema = fe;
                  var ae, ue = Fe(ee);
                  return ue && xn(), M = ye.follow(function() {
                    var ve;
                    (ae = ee(w)) && ue && (ve = Xt.bind(null, null), ae.then(ve, ve));
                  }), ae && typeof ae.then == "function" ? ye.resolve(ae) : M.then(function() {
                    return ae;
                  });
                }
              }), O.push(function(L) {
                var $, M, ee = E._cfg.dbschema;
                $ = ee, M = L, [].slice.call(M.db.objectStoreNames).forEach(function(fe) {
                  return $[fe] == null && M.db.deleteObjectStore(fe);
                }), no(y, [y.Transaction.prototype]), pr(y, [y.Transaction.prototype], y._storeNames, y._dbSchema), w.schema = y._dbSchema;
              }), O.push(function(L) {
                y.idbdb.objectStoreNames.contains("$meta") && (Math.ceil(y.idbdb.version / 10) === E._cfg.version ? (y.idbdb.deleteObjectStore("$meta"), delete y._dbSchema.$meta, y._storeNames = y._storeNames.filter(function($) {
                  return $ !== "$meta";
                })) : L.objectStore("$meta").put(E._cfg.version, "version"));
              });
            }), function E() {
              return O.length ? ye.resolve(O.shift()(w.idbtrans)).then(E) : ye.resolve();
            }().then(function() {
              ia(I, C);
            })) : ye.resolve();
            var y, T, w, C, O, I;
          }).catch(h)) : (c(s).forEach(function(S) {
            oo(o, S, s[S].primKey, s[S].indexes);
          }), fr(e, o), void ye.follow(function() {
            return e.on.populate.fire(u);
          }).catch(h));
          var b, _;
        });
      }
      function Ui(e, n) {
        ia(e._dbSchema, n), n.db.version % 10 != 0 || n.objectStoreNames.contains("$meta") || n.db.createObjectStore("$meta").add(Math.ceil(n.db.version / 10 - 1), "version");
        var o = mr(0, e.idbdb, n);
        vr(e, e._dbSchema, n);
        for (var a = 0, s = ro(o, e._dbSchema).change; a < s.length; a++) {
          var u = function(h) {
            if (h.change.length || h.recreate) return console.warn("Unable to patch indexes of table ".concat(h.name, " because it has changes on the type of index or primary key.")), { value: void 0 };
            var v = n.objectStore(h.name);
            h.add.forEach(function(b) {
              Ie && console.debug("Dexie upgrade patch: Creating missing index ".concat(h.name, ".").concat(b.src)), hr(v, b);
            });
          }(s[a]);
          if (typeof u == "object") return u.value;
        }
      }
      function ro(e, n) {
        var o, a = { del: [], add: [], change: [] };
        for (o in e) n[o] || a.del.push(o);
        for (o in n) {
          var s = e[o], u = n[o];
          if (s) {
            var h = { name: o, def: u, recreate: !1, del: [], add: [], change: [] };
            if ("" + (s.primKey.keyPath || "") != "" + (u.primKey.keyPath || "") || s.primKey.auto !== u.primKey.auto) h.recreate = !0, a.change.push(h);
            else {
              var v = s.idxByName, b = u.idxByName, _ = void 0;
              for (_ in v) b[_] || h.del.push(_);
              for (_ in b) {
                var S = v[_], y = b[_];
                S ? S.src !== y.src && h.change.push(y) : h.add.push(y);
              }
              (0 < h.del.length || 0 < h.add.length || 0 < h.change.length) && a.change.push(h);
            }
          } else a.add.push([o, u]);
        }
        return a;
      }
      function oo(e, n, o, a) {
        var s = e.db.createObjectStore(n, o.keyPath ? { keyPath: o.keyPath, autoIncrement: o.auto } : { autoIncrement: o.auto });
        return a.forEach(function(u) {
          return hr(s, u);
        }), s;
      }
      function ia(e, n) {
        c(e).forEach(function(o) {
          n.db.objectStoreNames.contains(o) || (Ie && console.debug("Dexie: Creating missing table", o), oo(n, o, e[o].primKey, e[o].indexes));
        });
      }
      function hr(e, n) {
        e.createIndex(n.name, n.keyPath, { unique: n.unique, multiEntry: n.multi });
      }
      function mr(e, n, o) {
        var a = {};
        return A(n.objectStoreNames, 0).forEach(function(s) {
          for (var u = o.objectStore(s), h = Zr(oa(_ = u.keyPath), _ || "", !0, !1, !!u.autoIncrement, _ && typeof _ != "string", !0), v = [], b = 0; b < u.indexNames.length; ++b) {
            var S = u.index(u.indexNames[b]), _ = S.keyPath, S = Zr(S.name, _, !!S.unique, !!S.multiEntry, !1, _ && typeof _ != "string", !1);
            v.push(S);
          }
          a[s] = eo(s, h, v);
        }), a;
      }
      function vr(e, n, o) {
        for (var a = o.db.objectStoreNames, s = 0; s < a.length; ++s) {
          var u = a[s], h = o.objectStore(u);
          e._hasGetAll = "getAll" in h;
          for (var v = 0; v < h.indexNames.length; ++v) {
            var b = h.indexNames[v], _ = h.index(b).keyPath, S = typeof _ == "string" ? _ : "[" + A(_).join("+") + "]";
            !n[u] || (_ = n[u].idxByName[S]) && (_.name = b, delete n[u].idxByName[S], n[u].idxByName[b] = _);
          }
        }
        typeof navigator < "u" && /Safari/.test(navigator.userAgent) && !/(Chrome\/|Edge\/)/.test(navigator.userAgent) && f.WorkerGlobalScope && f instanceof f.WorkerGlobalScope && [].concat(navigator.userAgent.match(/Safari\/(\d*)/))[1] < 604 && (e._hasGetAll = !1);
      }
      function sa(e) {
        return e.split(",").map(function(n, o) {
          var u = n.split(":"), a = (s = u[1]) === null || s === void 0 ? void 0 : s.trim(), s = (n = u[0].trim()).replace(/([&*]|\+\+)/g, ""), u = /^\[/.test(s) ? s.match(/^\[(.*)\]$/)[1].split("+") : s;
          return Zr(s, u || null, /\&/.test(n), /\*/.test(n), /\+\+/.test(n), m(u), o === 0, a);
        });
      }
      var Vi = (On.prototype._createTableSchema = eo, On.prototype._parseIndexSyntax = sa, On.prototype._parseStoresSpec = function(e, n) {
        var o = this;
        c(e).forEach(function(a) {
          if (e[a] !== null) {
            var s = o._parseIndexSyntax(e[a]), u = s.shift();
            if (!u) throw new V.Schema("Invalid schema for table " + a + ": " + e[a]);
            if (u.unique = !0, u.multi) throw new V.Schema("Primary key cannot be multiEntry*");
            s.forEach(function(h) {
              if (h.auto) throw new V.Schema("Only primary key can be marked as autoIncrement (++)");
              if (!h.keyPath) throw new V.Schema("Index must have a name and cannot be an empty string");
            }), s = o._createTableSchema(a, u, s), n[a] = s;
          }
        });
      }, On.prototype.stores = function(o) {
        var n = this.db;
        this._cfg.storesSource = this._cfg.storesSource ? g(this._cfg.storesSource, o) : o;
        var o = n._versions, a = {}, s = {};
        return o.forEach(function(u) {
          g(a, u._cfg.storesSource), s = u._cfg.dbschema = {}, u._parseStoresSpec(a, s);
        }), n._dbSchema = s, no(n, [n._allTables, n, n.Transaction.prototype]), pr(n, [n._allTables, n, n.Transaction.prototype, this._cfg.tables], c(s), s), n._storeNames = c(s), this;
      }, On.prototype.upgrade = function(e) {
        return this._cfg.contentUpgrade = Ee(this._cfg.contentUpgrade || R, e), this;
      }, On);
      function On() {
      }
      function ao(e, n) {
        var o = e._dbNamesDB;
        return o || (o = e._dbNamesDB = new Gt(ir, { addons: [], indexedDB: e, IDBKeyRange: n })).version(1).stores({ dbnames: "name" }), o.table("dbnames");
      }
      function io(e) {
        return e && typeof e.databases == "function";
      }
      function so(e) {
        return Yt(function() {
          return we.letThrough = !0, e();
        });
      }
      function lo(e) {
        return !("from" in e);
      }
      var gt = function(e, n) {
        if (!this) {
          var o = new gt();
          return e && "d" in e && g(o, e), o;
        }
        g(this, arguments.length ? { d: 1, from: e, to: 1 < arguments.length ? n : e } : { d: 0 });
      };
      function Kn(e, n, o) {
        var a = Me(n, o);
        if (!isNaN(a)) {
          if (0 < a) throw RangeError();
          if (lo(e)) return g(e, { from: n, to: o, d: 1 });
          var s = e.l, a = e.r;
          if (Me(o, e.from) < 0) return s ? Kn(s, n, o) : e.l = { from: n, to: o, d: 1, l: null, r: null }, ua(e);
          if (0 < Me(n, e.to)) return a ? Kn(a, n, o) : e.r = { from: n, to: o, d: 1, l: null, r: null }, ua(e);
          Me(n, e.from) < 0 && (e.from = n, e.l = null, e.d = a ? a.d + 1 : 1), 0 < Me(o, e.to) && (e.to = o, e.r = null, e.d = e.l ? e.l.d + 1 : 1), o = !e.r, s && !e.l && qn(e, s), a && o && qn(e, a);
        }
      }
      function qn(e, n) {
        lo(n) || function o(a, b) {
          var u = b.from, h = b.to, v = b.l, b = b.r;
          Kn(a, u, h), v && o(a, v), b && o(a, b);
        }(e, n);
      }
      function la(e, n) {
        var o = yr(n), a = o.next();
        if (a.done) return !1;
        for (var s = a.value, u = yr(e), h = u.next(s.from), v = h.value; !a.done && !h.done; ) {
          if (Me(v.from, s.to) <= 0 && 0 <= Me(v.to, s.from)) return !0;
          Me(s.from, v.from) < 0 ? s = (a = o.next(v.from)).value : v = (h = u.next(s.from)).value;
        }
        return !1;
      }
      function yr(e) {
        var n = lo(e) ? null : { s: 0, n: e };
        return { next: function(o) {
          for (var a = 0 < arguments.length; n; ) switch (n.s) {
            case 0:
              if (n.s = 1, a) for (; n.n.l && Me(o, n.n.from) < 0; ) n = { up: n, n: n.n.l, s: 1 };
              else for (; n.n.l; ) n = { up: n, n: n.n.l, s: 1 };
            case 1:
              if (n.s = 2, !a || Me(o, n.n.to) <= 0) return { value: n.n, done: !1 };
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
      function ua(e) {
        var n, o, a = (((n = e.r) === null || n === void 0 ? void 0 : n.d) || 0) - (((o = e.l) === null || o === void 0 ? void 0 : o.d) || 0), s = 1 < a ? "r" : a < -1 ? "l" : "";
        s && (n = s == "r" ? "l" : "r", o = l({}, e), a = e[s], e.from = a.from, e.to = a.to, e[s] = a[s], o[s] = a[n], (e[n] = o).d = ca(o)), e.d = ca(e);
      }
      function ca(o) {
        var n = o.r, o = o.l;
        return (n ? o ? Math.max(n.d, o.d) : n.d : o ? o.d : 0) + 1;
      }
      function gr(e, n) {
        return c(n).forEach(function(o) {
          e[o] ? qn(e[o], n[o]) : e[o] = function a(s) {
            var u, h, v = {};
            for (u in s) G(s, u) && (h = s[u], v[u] = !h || typeof h != "object" || Q.has(h.constructor) ? h : a(h));
            return v;
          }(n[o]);
        }), e;
      }
      function uo(e, n) {
        return e.all || n.all || Object.keys(e).some(function(o) {
          return n[o] && la(n[o], e[o]);
        });
      }
      re(gt.prototype, ((Pt = { add: function(e) {
        return qn(this, e), this;
      }, addKey: function(e) {
        return Kn(this, e, e), this;
      }, addKeys: function(e) {
        var n = this;
        return e.forEach(function(o) {
          return Kn(n, o, o);
        }), this;
      }, hasKey: function(e) {
        var n = yr(this).next(e).value;
        return n && Me(n.from, e) <= 0 && 0 <= Me(n.to, e);
      } })[se] = function() {
        return yr(this);
      }, Pt));
      var fn = {}, co = {}, fo = !1;
      function br(e) {
        gr(co, e), fo || (fo = !0, setTimeout(function() {
          fo = !1, po(co, !(co = {}));
        }, 0));
      }
      function po(e, n) {
        n === void 0 && (n = !1);
        var o = /* @__PURE__ */ new Set();
        if (e.all) for (var a = 0, s = Object.values(fn); a < s.length; a++) da(h = s[a], e, o, n);
        else for (var u in e) {
          var h, v = /^idb\:\/\/(.*)\/(.*)\//.exec(u);
          v && (u = v[1], v = v[2], (h = fn["idb://".concat(u, "/").concat(v)]) && da(h, e, o, n));
        }
        o.forEach(function(b) {
          return b();
        });
      }
      function da(e, n, o, a) {
        for (var s = [], u = 0, h = Object.entries(e.queries.query); u < h.length; u++) {
          for (var v = h[u], b = v[0], _ = [], S = 0, y = v[1]; S < y.length; S++) {
            var T = y[S];
            uo(n, T.obsSet) ? T.subscribers.forEach(function(I) {
              return o.add(I);
            }) : a && _.push(T);
          }
          a && s.push([b, _]);
        }
        if (a) for (var w = 0, C = s; w < C.length; w++) {
          var O = C[w], b = O[0], _ = O[1];
          e.queries.query[b] = _;
        }
      }
      function Wi(e) {
        var n = e._state, o = e._deps.indexedDB;
        if (n.isBeingOpened || e.idbdb) return n.dbReadyPromise.then(function() {
          return n.dbOpenError ? lt(n.dbOpenError) : e;
        });
        n.isBeingOpened = !0, n.dbOpenError = null, n.openComplete = !1;
        var a = n.openCanceller, s = Math.round(10 * e.verno), u = !1;
        function h() {
          if (n.openCanceller !== a) throw new V.DatabaseClosed("db.open() was cancelled");
        }
        function v() {
          return new ye(function(T, w) {
            if (h(), !o) throw new V.MissingAPI();
            var C = e.name, O = n.autoSchema || !s ? o.open(C) : o.open(C, s);
            if (!O) throw new V.MissingAPI();
            O.onerror = Kt(w), O.onblocked = rt(e._fireOnBlocked), O.onupgradeneeded = rt(function(I) {
              var E;
              S = O.transaction, n.autoSchema && !e._options.allowEmptyDB ? (O.onerror = $n, S.abort(), O.result.close(), (E = o.deleteDatabase(C)).onsuccess = E.onerror = rt(function() {
                w(new V.NoSuchDatabase("Database ".concat(C, " doesnt exist")));
              })) : (S.onerror = Kt(w), I = I.oldVersion > Math.pow(2, 62) ? 0 : I.oldVersion, y = I < 1, e.idbdb = O.result, u && Ui(e, S), qi(e, I / 10, S, w));
            }, w), O.onsuccess = rt(function() {
              S = null;
              var I, E, L, $, M, ee = e.idbdb = O.result, fe = A(ee.objectStoreNames);
              if (0 < fe.length) try {
                var ae = ee.transaction(($ = fe).length === 1 ? $[0] : $, "readonly");
                if (n.autoSchema) E = ee, L = ae, (I = e).verno = E.version / 10, L = I._dbSchema = mr(0, E, L), I._storeNames = A(E.objectStoreNames, 0), pr(I, [I._allTables], c(L), L);
                else if (vr(e, e._dbSchema, ae), ((M = ro(mr(0, (M = e).idbdb, ae), M._dbSchema)).add.length || M.change.some(function(ue) {
                  return ue.add.length || ue.change.length;
                })) && !u) return console.warn("Dexie SchemaDiff: Schema was extended without increasing the number passed to db.version(). Dexie will add missing parts and increment native version number to workaround this."), ee.close(), s = ee.version + 1, u = !0, T(v());
                fr(e, ae);
              } catch {
              }
              Cn.push(e), ee.onversionchange = rt(function(ue) {
                n.vcFired = !0, e.on("versionchange").fire(ue);
              }), ee.onclose = rt(function(ue) {
                e.on("close").fire(ue);
              }), y && (M = e._deps, ae = C, ee = M.indexedDB, M = M.IDBKeyRange, io(ee) || ae === ir || ao(ee, M).put({ name: ae }).catch(R)), T();
            }, w);
          }).catch(function(T) {
            switch (T?.name) {
              case "UnknownError":
                if (0 < n.PR1398_maxLoop) return n.PR1398_maxLoop--, console.warn("Dexie: Workaround for Chrome UnknownError on open()"), v();
                break;
              case "VersionError":
                if (0 < s) return s = 0, v();
            }
            return ye.reject(T);
          });
        }
        var b, _ = n.dbReadyResolve, S = null, y = !1;
        return ye.race([a, (typeof navigator > "u" ? ye.resolve() : !navigator.userAgentData && /Safari\//.test(navigator.userAgent) && !/Chrom(e|ium)\//.test(navigator.userAgent) && indexedDB.databases ? new Promise(function(T) {
          function w() {
            return indexedDB.databases().finally(T);
          }
          b = setInterval(w, 100), w();
        }).finally(function() {
          return clearInterval(b);
        }) : Promise.resolve()).then(v)]).then(function() {
          return h(), n.onReadyBeingFired = [], ye.resolve(so(function() {
            return e.on.ready.fire(e.vip);
          })).then(function T() {
            if (0 < n.onReadyBeingFired.length) {
              var w = n.onReadyBeingFired.reduce(Ee, R);
              return n.onReadyBeingFired = [], ye.resolve(so(function() {
                return w(e.vip);
              })).then(T);
            }
          });
        }).finally(function() {
          n.openCanceller === a && (n.onReadyBeingFired = null, n.isBeingOpened = !1);
        }).catch(function(T) {
          n.dbOpenError = T;
          try {
            S && S.abort();
          } catch {
          }
          return a === n.openCanceller && e._close(), lt(T);
        }).finally(function() {
          n.openComplete = !0, _();
        }).then(function() {
          var T;
          return y && (T = {}, e.tables.forEach(function(w) {
            w.schema.indexes.forEach(function(C) {
              C.name && (T["idb://".concat(e.name, "/").concat(w.name, "/").concat(C.name)] = new gt(-1 / 0, [[[]]]));
            }), T["idb://".concat(e.name, "/").concat(w.name, "/")] = T["idb://".concat(e.name, "/").concat(w.name, "/:dels")] = new gt(-1 / 0, [[[]]]);
          }), Zt(Fn).fire(T), po(T, !0)), e;
        });
      }
      function ho(e) {
        function n(u) {
          return e.next(u);
        }
        var o = s(n), a = s(function(u) {
          return e.throw(u);
        });
        function s(u) {
          return function(b) {
            var v = u(b), b = v.value;
            return v.done ? b : b && typeof b.then == "function" ? b.then(o, a) : m(b) ? Promise.all(b).then(o, a) : o(b);
          };
        }
        return s(n)();
      }
      function wr(e, n, o) {
        for (var a = m(e) ? e.slice() : [e], s = 0; s < o; ++s) a.push(n);
        return a;
      }
      var Gi = { stack: "dbcore", name: "VirtualIndexMiddleware", level: 1, create: function(e) {
        return l(l({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema, s = {}, u = [];
          function h(y, T, w) {
            var C = Bn(y), O = s[C] = s[C] || [], I = y == null ? 0 : typeof y == "string" ? 1 : y.length, E = 0 < T, E = l(l({}, w), { name: E ? "".concat(C, "(virtual-from:").concat(w.name, ")") : w.name, lowLevelIndex: w, isVirtual: E, keyTail: T, keyLength: I, extractKey: to(y), unique: !E && w.unique });
            return O.push(E), E.isPrimaryKey || u.push(E), 1 < I && h(I === 2 ? y[0] : y.slice(0, I - 1), T + 1, w), O.sort(function(L, $) {
              return L.keyTail - $.keyTail;
            }), E;
          }
          n = h(a.primaryKey.keyPath, 0, a.primaryKey), s[":id"] = [n];
          for (var v = 0, b = a.indexes; v < b.length; v++) {
            var _ = b[v];
            h(_.keyPath, 0, _);
          }
          function S(y) {
            var T, w = y.query.index;
            return w.isVirtual ? l(l({}, y), { query: { index: w.lowLevelIndex, range: (T = y.query.range, w = w.keyTail, { type: T.type === 1 ? 2 : T.type, lower: wr(T.lower, T.lowerOpen ? e.MAX_KEY : e.MIN_KEY, w), lowerOpen: !0, upper: wr(T.upper, T.upperOpen ? e.MIN_KEY : e.MAX_KEY, w), upperOpen: !0 }) } }) : y;
          }
          return l(l({}, o), { schema: l(l({}, a), { primaryKey: n, indexes: u, getIndexByKeyPath: function(y) {
            return (y = s[Bn(y)]) && y[0];
          } }), count: function(y) {
            return o.count(S(y));
          }, query: function(y) {
            return o.query(S(y));
          }, openCursor: function(y) {
            var T = y.query.index, w = T.keyTail, C = T.isVirtual, O = T.keyLength;
            return C ? o.openCursor(S(y)).then(function(E) {
              return E && I(E);
            }) : o.openCursor(y);
            function I(E) {
              return Object.create(E, { continue: { value: function(L) {
                L != null ? E.continue(wr(L, y.reverse ? e.MAX_KEY : e.MIN_KEY, w)) : y.unique ? E.continue(E.key.slice(0, O).concat(y.reverse ? e.MIN_KEY : e.MAX_KEY, w)) : E.continue();
              } }, continuePrimaryKey: { value: function(L, $) {
                E.continuePrimaryKey(wr(L, e.MAX_KEY, w), $);
              } }, primaryKey: { get: function() {
                return E.primaryKey;
              } }, key: { get: function() {
                var L = E.key;
                return O === 1 ? L[0] : L.slice(0, O);
              } }, value: { get: function() {
                return E.value;
              } } });
            }
          } });
        } });
      } };
      function mo(e, n, o, a) {
        return o = o || {}, a = a || "", c(e).forEach(function(s) {
          var u, h, v;
          G(n, s) ? (u = e[s], h = n[s], typeof u == "object" && typeof h == "object" && u && h ? (v = ne(u)) !== ne(h) ? o[a + s] = n[s] : v === "Object" ? mo(u, h, o, a + s + ".") : u !== h && (o[a + s] = n[s]) : u !== h && (o[a + s] = n[s])) : o[a + s] = void 0;
        }), c(n).forEach(function(s) {
          G(e, s) || (o[a + s] = n[s]);
        }), o;
      }
      function vo(e, n) {
        return n.type === "delete" ? n.keys : n.keys || n.values.map(e.extractKey);
      }
      var Hi = { stack: "dbcore", name: "HooksMiddleware", level: 2, create: function(e) {
        return l(l({}, e), { table: function(n) {
          var o = e.table(n), a = o.schema.primaryKey;
          return l(l({}, o), { mutate: function(s) {
            var u = we.trans, h = u.table(n).hook, v = h.deleting, b = h.creating, _ = h.updating;
            switch (s.type) {
              case "add":
                if (b.fire === R) break;
                return u._promise("readwrite", function() {
                  return S(s);
                }, !0);
              case "put":
                if (b.fire === R && _.fire === R) break;
                return u._promise("readwrite", function() {
                  return S(s);
                }, !0);
              case "delete":
                if (v.fire === R) break;
                return u._promise("readwrite", function() {
                  return S(s);
                }, !0);
              case "deleteRange":
                if (v.fire === R) break;
                return u._promise("readwrite", function() {
                  return function y(T, w, C) {
                    return o.query({ trans: T, values: !1, query: { index: a, range: w }, limit: C }).then(function(O) {
                      var I = O.result;
                      return S({ type: "delete", keys: I, trans: T }).then(function(E) {
                        return 0 < E.numFailures ? Promise.reject(E.failures[0]) : I.length < C ? { failures: [], numFailures: 0, lastResult: void 0 } : y(T, l(l({}, w), { lower: I[I.length - 1], lowerOpen: !0 }), C);
                      });
                    });
                  }(s.trans, s.range, 1e4);
                }, !0);
            }
            return o.mutate(s);
            function S(y) {
              var T, w, C, O = we.trans, I = y.keys || vo(a, y);
              if (!I) throw new Error("Keys missing");
              return (y = y.type === "add" || y.type === "put" ? l(l({}, y), { keys: I }) : l({}, y)).type !== "delete" && (y.values = d([], y.values)), y.keys && (y.keys = d([], y.keys)), T = o, C = I, ((w = y).type === "add" ? Promise.resolve([]) : T.getMany({ trans: w.trans, keys: C, cache: "immutable" })).then(function(E) {
                var L = I.map(function($, M) {
                  var ee, fe, ae, ue = E[M], ve = { onerror: null, onsuccess: null };
                  return y.type === "delete" ? v.fire.call(ve, $, ue, O) : y.type === "add" || ue === void 0 ? (ee = b.fire.call(ve, $, y.values[M], O), $ == null && ee != null && (y.keys[M] = $ = ee, a.outbound || ie(y.values[M], a.keyPath, $))) : (ee = mo(ue, y.values[M]), (fe = _.fire.call(ve, ee, $, ue, O)) && (ae = y.values[M], Object.keys(fe).forEach(function(me) {
                    G(ae, me) ? ae[me] = fe[me] : ie(ae, me, fe[me]);
                  }))), ve;
                });
                return o.mutate(y).then(function($) {
                  for (var M = $.failures, ee = $.results, fe = $.numFailures, $ = $.lastResult, ae = 0; ae < I.length; ++ae) {
                    var ue = (ee || I)[ae], ve = L[ae];
                    ue == null ? ve.onerror && ve.onerror(M[ae]) : ve.onsuccess && ve.onsuccess(y.type === "put" && E[ae] ? y.values[ae] : ue);
                  }
                  return { failures: M, results: ee, numFailures: fe, lastResult: $ };
                }).catch(function($) {
                  return L.forEach(function(M) {
                    return M.onerror && M.onerror($);
                  }), Promise.reject($);
                });
              });
            }
          } });
        } });
      } };
      function fa(e, n, o) {
        try {
          if (!n || n.keys.length < e.length) return null;
          for (var a = [], s = 0, u = 0; s < n.keys.length && u < e.length; ++s) Me(n.keys[s], e[u]) === 0 && (a.push(o ? z(n.values[s]) : n.values[s]), ++u);
          return a.length === e.length ? a : null;
        } catch {
          return null;
        }
      }
      var zi = { stack: "dbcore", level: -1, create: function(e) {
        return { table: function(n) {
          var o = e.table(n);
          return l(l({}, o), { getMany: function(a) {
            if (!a.cache) return o.getMany(a);
            var s = fa(a.keys, a.trans._cache, a.cache === "clone");
            return s ? ye.resolve(s) : o.getMany(a).then(function(u) {
              return a.trans._cache = { keys: a.keys, values: a.cache === "clone" ? z(u) : u }, u;
            });
          }, mutate: function(a) {
            return a.type !== "add" && (a.trans._cache = null), o.mutate(a);
          } });
        } };
      } };
      function pa(e, n) {
        return e.trans.mode === "readonly" && !!e.subscr && !e.trans.explicit && e.trans.db._options.cache !== "disabled" && !n.schema.primaryKey.outbound;
      }
      function ha(e, n) {
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
      var Yi = { stack: "dbcore", level: 0, name: "Observability", create: function(e) {
        var n = e.schema.name, o = new gt(e.MIN_KEY, e.MAX_KEY);
        return l(l({}, e), { transaction: function(a, s, u) {
          if (we.subscr && s !== "readonly") throw new V.ReadOnly("Readwrite transaction in liveQuery context. Querier source: ".concat(we.querier));
          return e.transaction(a, s, u);
        }, table: function(a) {
          var s = e.table(a), u = s.schema, h = u.primaryKey, y = u.indexes, v = h.extractKey, b = h.outbound, _ = h.autoIncrement && y.filter(function(w) {
            return w.compound && w.keyPath.includes(h.keyPath);
          }), S = l(l({}, s), { mutate: function(w) {
            function C(me) {
              return me = "idb://".concat(n, "/").concat(a, "/").concat(me), $[me] || ($[me] = new gt());
            }
            var O, I, E, L = w.trans, $ = w.mutatedParts || (w.mutatedParts = {}), M = C(""), ee = C(":dels"), fe = w.type, ve = w.type === "deleteRange" ? [w.range] : w.type === "delete" ? [w.keys] : w.values.length < 50 ? [vo(h, w).filter(function(me) {
              return me;
            }), w.values] : [], ae = ve[0], ue = ve[1], ve = w.trans._cache;
            return m(ae) ? (M.addKeys(ae), (ve = fe === "delete" || ae.length === ue.length ? fa(ae, ve) : null) || ee.addKeys(ae), (ve || ue) && (O = C, I = ve, E = ue, u.indexes.forEach(function(me) {
              var be = O(me.name || "");
              function ke(Re) {
                return Re != null ? me.extractKey(Re) : null;
              }
              function Ke(Re) {
                return me.multiEntry && m(Re) ? Re.forEach(function(at) {
                  return be.addKey(at);
                }) : be.addKey(Re);
              }
              (I || E).forEach(function(Re, bt) {
                var De = I && ke(I[bt]), bt = E && ke(E[bt]);
                Me(De, bt) !== 0 && (De != null && Ke(De), bt != null && Ke(bt));
              });
            }))) : ae ? (ue = { from: (ue = ae.lower) !== null && ue !== void 0 ? ue : e.MIN_KEY, to: (ue = ae.upper) !== null && ue !== void 0 ? ue : e.MAX_KEY }, ee.add(ue), M.add(ue)) : (M.add(o), ee.add(o), u.indexes.forEach(function(me) {
              return C(me.name).add(o);
            })), s.mutate(w).then(function(me) {
              return !ae || w.type !== "add" && w.type !== "put" || (M.addKeys(me.results), _ && _.forEach(function(be) {
                for (var ke = w.values.map(function(De) {
                  return be.extractKey(De);
                }), Ke = be.keyPath.findIndex(function(De) {
                  return De === h.keyPath;
                }), Re = 0, at = me.results.length; Re < at; ++Re) ke[Re][Ke] = me.results[Re];
                C(be.name).addKeys(ke);
              })), L.mutatedParts = gr(L.mutatedParts || {}, $), me;
            });
          } }), y = function(C) {
            var O = C.query, C = O.index, O = O.range;
            return [C, new gt((C = O.lower) !== null && C !== void 0 ? C : e.MIN_KEY, (O = O.upper) !== null && O !== void 0 ? O : e.MAX_KEY)];
          }, T = { get: function(w) {
            return [h, new gt(w.key)];
          }, getMany: function(w) {
            return [h, new gt().addKeys(w.keys)];
          }, count: y, query: y, openCursor: y };
          return c(T).forEach(function(w) {
            S[w] = function(C) {
              var O = we.subscr, I = !!O, E = pa(we, s) && ha(w, C) ? C.obsSet = {} : O;
              if (I) {
                var L = function(ue) {
                  return ue = "idb://".concat(n, "/").concat(a, "/").concat(ue), E[ue] || (E[ue] = new gt());
                }, $ = L(""), M = L(":dels"), O = T[w](C), I = O[0], O = O[1];
                if ((w === "query" && I.isPrimaryKey && !C.values ? M : L(I.name || "")).add(O), !I.isPrimaryKey) {
                  if (w !== "count") {
                    var ee = w === "query" && b && C.values && s.query(l(l({}, C), { values: !1 }));
                    return s[w].apply(this, arguments).then(function(ue) {
                      if (w === "query") {
                        if (b && C.values) return ee.then(function(ke) {
                          return ke = ke.result, $.addKeys(ke), ue;
                        });
                        var ve = C.values ? ue.result.map(v) : ue.result;
                        (C.values ? $ : M).addKeys(ve);
                      } else if (w === "openCursor") {
                        var me = ue, be = C.values;
                        return me && Object.create(me, { key: { get: function() {
                          return M.addKey(me.primaryKey), me.key;
                        } }, primaryKey: { get: function() {
                          var ke = me.primaryKey;
                          return M.addKey(ke), ke;
                        } }, value: { get: function() {
                          return be && $.addKey(me.primaryKey), me.value;
                        } } });
                      }
                      return ue;
                    });
                  }
                  M.add(o);
                }
              }
              return s[w].apply(this, arguments);
            };
          }), S;
        } });
      } };
      function ma(e, n, o) {
        if (o.numFailures === 0) return n;
        if (n.type === "deleteRange") return null;
        var a = n.keys ? n.keys.length : "values" in n && n.values ? n.values.length : 1;
        return o.numFailures === a ? null : (n = l({}, n), m(n.keys) && (n.keys = n.keys.filter(function(s, u) {
          return !(u in o.failures);
        })), "values" in n && m(n.values) && (n.values = n.values.filter(function(s, u) {
          return !(u in o.failures);
        })), n);
      }
      function yo(e, n) {
        return o = e, ((a = n).lower === void 0 || (a.lowerOpen ? 0 < Me(o, a.lower) : 0 <= Me(o, a.lower))) && (e = e, (n = n).upper === void 0 || (n.upperOpen ? Me(e, n.upper) < 0 : Me(e, n.upper) <= 0));
        var o, a;
      }
      function va(e, n, T, a, s, u) {
        if (!T || T.length === 0) return e;
        var h = n.query.index, v = h.multiEntry, b = n.query.range, _ = a.schema.primaryKey.extractKey, S = h.extractKey, y = (h.lowLevelIndex || h).extractKey, T = T.reduce(function(w, C) {
          var O = w, I = [];
          if (C.type === "add" || C.type === "put") for (var E = new gt(), L = C.values.length - 1; 0 <= L; --L) {
            var $, M = C.values[L], ee = _(M);
            E.hasKey(ee) || ($ = S(M), (v && m($) ? $.some(function(me) {
              return yo(me, b);
            }) : yo($, b)) && (E.addKey(ee), I.push(M)));
          }
          switch (C.type) {
            case "add":
              var fe = new gt().addKeys(n.values ? w.map(function(be) {
                return _(be);
              }) : w), O = w.concat(n.values ? I.filter(function(be) {
                return be = _(be), !fe.hasKey(be) && (fe.addKey(be), !0);
              }) : I.map(function(be) {
                return _(be);
              }).filter(function(be) {
                return !fe.hasKey(be) && (fe.addKey(be), !0);
              }));
              break;
            case "put":
              var ae = new gt().addKeys(C.values.map(function(be) {
                return _(be);
              }));
              O = w.filter(function(be) {
                return !ae.hasKey(n.values ? _(be) : be);
              }).concat(n.values ? I : I.map(function(be) {
                return _(be);
              }));
              break;
            case "delete":
              var ue = new gt().addKeys(C.keys);
              O = w.filter(function(be) {
                return !ue.hasKey(n.values ? _(be) : be);
              });
              break;
            case "deleteRange":
              var ve = C.range;
              O = w.filter(function(be) {
                return !yo(_(be), ve);
              });
          }
          return O;
        }, e);
        return T === e ? e : (T.sort(function(w, C) {
          return Me(y(w), y(C)) || Me(_(w), _(C));
        }), n.limit && n.limit < 1 / 0 && (T.length > n.limit ? T.length = n.limit : e.length === n.limit && T.length < n.limit && (s.dirty = !0)), u ? Object.freeze(T) : T);
      }
      function ya(e, n) {
        return Me(e.lower, n.lower) === 0 && Me(e.upper, n.upper) === 0 && !!e.lowerOpen == !!n.lowerOpen && !!e.upperOpen == !!n.upperOpen;
      }
      function Xi(e, n) {
        return function(o, a, s, u) {
          if (o === void 0) return a !== void 0 ? -1 : 0;
          if (a === void 0) return 1;
          if ((a = Me(o, a)) === 0) {
            if (s && u) return 0;
            if (s) return 1;
            if (u) return -1;
          }
          return a;
        }(e.lower, n.lower, e.lowerOpen, n.lowerOpen) <= 0 && 0 <= function(o, a, s, u) {
          if (o === void 0) return a !== void 0 ? 1 : 0;
          if (a === void 0) return -1;
          if ((a = Me(o, a)) === 0) {
            if (s && u) return 0;
            if (s) return -1;
            if (u) return 1;
          }
          return a;
        }(e.upper, n.upper, e.upperOpen, n.upperOpen);
      }
      function Qi(e, n, o, a) {
        e.subscribers.add(o), a.addEventListener("abort", function() {
          var s, u;
          e.subscribers.delete(o), e.subscribers.size === 0 && (s = e, u = n, setTimeout(function() {
            s.subscribers.size === 0 && le(u, s);
          }, 3e3));
        });
      }
      var Ji = { stack: "dbcore", level: 0, name: "Cache", create: function(e) {
        var n = e.schema.name;
        return l(l({}, e), { transaction: function(o, a, s) {
          var u, h, v = e.transaction(o, a, s);
          return a === "readwrite" && (h = (u = new AbortController()).signal, s = function(b) {
            return function() {
              if (u.abort(), a === "readwrite") {
                for (var _ = /* @__PURE__ */ new Set(), S = 0, y = o; S < y.length; S++) {
                  var T = y[S], w = fn["idb://".concat(n, "/").concat(T)];
                  if (w) {
                    var C = e.table(T), O = w.optimisticOps.filter(function(be) {
                      return be.trans === v;
                    });
                    if (v._explicit && b && v.mutatedParts) for (var I = 0, E = Object.values(w.queries.query); I < E.length; I++) for (var L = 0, $ = (fe = E[I]).slice(); L < $.length; L++) uo((ae = $[L]).obsSet, v.mutatedParts) && (le(fe, ae), ae.subscribers.forEach(function(be) {
                      return _.add(be);
                    }));
                    else if (0 < O.length) {
                      w.optimisticOps = w.optimisticOps.filter(function(be) {
                        return be.trans !== v;
                      });
                      for (var M = 0, ee = Object.values(w.queries.query); M < ee.length; M++) for (var fe, ae, ue, ve = 0, me = (fe = ee[M]).slice(); ve < me.length; ve++) (ae = me[ve]).res != null && v.mutatedParts && (b && !ae.dirty ? (ue = Object.isFrozen(ae.res), ue = va(ae.res, ae.req, O, C, ae, ue), ae.dirty ? (le(fe, ae), ae.subscribers.forEach(function(be) {
                        return _.add(be);
                      })) : ue !== ae.res && (ae.res = ue, ae.promise = ye.resolve({ result: ue }))) : (ae.dirty && le(fe, ae), ae.subscribers.forEach(function(be) {
                        return _.add(be);
                      })));
                    }
                  }
                }
                _.forEach(function(be) {
                  return be();
                });
              }
            };
          }, v.addEventListener("abort", s(!1), { signal: h }), v.addEventListener("error", s(!1), { signal: h }), v.addEventListener("complete", s(!0), { signal: h })), v;
        }, table: function(o) {
          var a = e.table(o), s = a.schema.primaryKey;
          return l(l({}, a), { mutate: function(u) {
            var h = we.trans;
            if (s.outbound || h.db._options.cache === "disabled" || h.explicit || h.idbtrans.mode !== "readwrite") return a.mutate(u);
            var v = fn["idb://".concat(n, "/").concat(o)];
            return v ? (h = a.mutate(u), u.type !== "add" && u.type !== "put" || !(50 <= u.values.length || vo(s, u).some(function(b) {
              return b == null;
            })) ? (v.optimisticOps.push(u), u.mutatedParts && br(u.mutatedParts), h.then(function(b) {
              0 < b.numFailures && (le(v.optimisticOps, u), (b = ma(0, u, b)) && v.optimisticOps.push(b), u.mutatedParts && br(u.mutatedParts));
            }), h.catch(function() {
              le(v.optimisticOps, u), u.mutatedParts && br(u.mutatedParts);
            })) : h.then(function(b) {
              var _ = ma(0, l(l({}, u), { values: u.values.map(function(S, y) {
                var T;
                return b.failures[y] || (S = (T = s.keyPath) !== null && T !== void 0 && T.includes(".") ? z(S) : l({}, S), ie(S, s.keyPath, b.results[y])), S;
              }) }), b);
              v.optimisticOps.push(_), queueMicrotask(function() {
                return u.mutatedParts && br(u.mutatedParts);
              });
            }), h) : a.mutate(u);
          }, query: function(u) {
            if (!pa(we, a) || !ha("query", u)) return a.query(u);
            var h = ((_ = we.trans) === null || _ === void 0 ? void 0 : _.db._options.cache) === "immutable", y = we, v = y.requery, b = y.signal, _ = function(C, O, I, E) {
              var L = fn["idb://".concat(C, "/").concat(O)];
              if (!L) return [];
              if (!(O = L.queries[I])) return [null, !1, L, null];
              var $ = O[(E.query ? E.query.index.name : null) || ""];
              if (!$) return [null, !1, L, null];
              switch (I) {
                case "query":
                  var M = $.find(function(ee) {
                    return ee.req.limit === E.limit && ee.req.values === E.values && ya(ee.req.query.range, E.query.range);
                  });
                  return M ? [M, !0, L, $] : [$.find(function(ee) {
                    return ("limit" in ee.req ? ee.req.limit : 1 / 0) >= E.limit && (!E.values || ee.req.values) && Xi(ee.req.query.range, E.query.range);
                  }), !1, L, $];
                case "count":
                  return M = $.find(function(ee) {
                    return ya(ee.req.query.range, E.query.range);
                  }), [M, !!M, L, $];
              }
            }(n, o, "query", u), S = _[0], y = _[1], T = _[2], w = _[3];
            return S && y ? S.obsSet = u.obsSet : (y = a.query(u).then(function(C) {
              var O = C.result;
              if (S && (S.res = O), h) {
                for (var I = 0, E = O.length; I < E; ++I) Object.freeze(O[I]);
                Object.freeze(O);
              } else C.result = z(O);
              return C;
            }).catch(function(C) {
              return w && S && le(w, S), Promise.reject(C);
            }), S = { obsSet: u.obsSet, promise: y, subscribers: /* @__PURE__ */ new Set(), type: "query", req: u, dirty: !1 }, w ? w.push(S) : (w = [S], (T = T || (fn["idb://".concat(n, "/").concat(o)] = { queries: { query: {}, count: {} }, objs: /* @__PURE__ */ new Map(), optimisticOps: [], unsignaledParts: {} })).queries.query[u.query.index.name || ""] = w)), Qi(S, w, v, b), S.promise.then(function(C) {
              return { result: va(C.result, u, T?.optimisticOps, a, S, h) };
            });
          } });
        } });
      } };
      function _r(e, n) {
        return new Proxy(e, { get: function(o, a, s) {
          return a === "db" ? n : Reflect.get(o, a, s);
        } });
      }
      var Gt = (ut.prototype.version = function(e) {
        if (isNaN(e) || e < 0.1) throw new V.Type("Given version is not a positive number");
        if (e = Math.round(10 * e) / 10, this.idbdb || this._state.isBeingOpened) throw new V.Schema("Cannot add version when database is open");
        this.verno = Math.max(this.verno, e);
        var n = this._versions, o = n.filter(function(a) {
          return a._cfg.version === e;
        })[0];
        return o || (o = new this.Version(e), n.push(o), n.sort(Ki), o.stores({}), this._state.autoSchema = !1, o);
      }, ut.prototype._whenReady = function(e) {
        var n = this;
        return this.idbdb && (this._state.openComplete || we.letThrough || this._vip) ? e() : new ye(function(o, a) {
          if (n._state.openComplete) return a(new V.DatabaseClosed(n._state.dbOpenError));
          if (!n._state.isBeingOpened) {
            if (!n._state.autoOpen) return void a(new V.DatabaseClosed());
            n.open().catch(R);
          }
          n._state.dbReadyPromise.then(o, a);
        }).then(e);
      }, ut.prototype.use = function(e) {
        var n = e.stack, o = e.create, a = e.level, s = e.name;
        return s && this.unuse({ stack: n, name: s }), e = this._middlewares[n] || (this._middlewares[n] = []), e.push({ stack: n, create: o, level: a ?? 10, name: s }), e.sort(function(u, h) {
          return u.level - h.level;
        }), this;
      }, ut.prototype.unuse = function(e) {
        var n = e.stack, o = e.name, a = e.create;
        return n && this._middlewares[n] && (this._middlewares[n] = this._middlewares[n].filter(function(s) {
          return a ? s.create !== a : !!o && s.name !== o;
        })), this;
      }, ut.prototype.open = function() {
        var e = this;
        return un(xt, function() {
          return Wi(e);
        });
      }, ut.prototype._close = function() {
        this.on.close.fire(new CustomEvent("close"));
        var e = this._state, n = Cn.indexOf(this);
        if (0 <= n && Cn.splice(n, 1), this.idbdb) {
          try {
            this.idbdb.close();
          } catch {
          }
          this.idbdb = null;
        }
        e.isBeingOpened || (e.dbReadyPromise = new ye(function(o) {
          e.dbReadyResolve = o;
        }), e.openCanceller = new ye(function(o, a) {
          e.cancelOpen = a;
        }));
      }, ut.prototype.close = function(o) {
        var n = (o === void 0 ? { disableAutoOpen: !0 } : o).disableAutoOpen, o = this._state;
        n ? (o.isBeingOpened && o.cancelOpen(new V.DatabaseClosed()), this._close(), o.autoOpen = !1, o.dbOpenError = new V.DatabaseClosed()) : (this._close(), o.autoOpen = this._options.autoOpen || o.isBeingOpened, o.openComplete = !1, o.dbOpenError = null);
      }, ut.prototype.delete = function(e) {
        var n = this;
        e === void 0 && (e = { disableAutoOpen: !0 });
        var o = 0 < arguments.length && typeof arguments[0] != "object", a = this._state;
        return new ye(function(s, u) {
          function h() {
            n.close(e);
            var v = n._deps.indexedDB.deleteDatabase(n.name);
            v.onsuccess = rt(function() {
              var b, _, S;
              b = n._deps, _ = n.name, S = b.indexedDB, b = b.IDBKeyRange, io(S) || _ === ir || ao(S, b).delete(_).catch(R), s();
            }), v.onerror = Kt(u), v.onblocked = n._fireOnBlocked;
          }
          if (o) throw new V.InvalidArgument("Invalid closeOptions argument to db.delete()");
          a.isBeingOpened ? a.dbReadyPromise.then(h) : h();
        });
      }, ut.prototype.backendDB = function() {
        return this.idbdb;
      }, ut.prototype.isOpen = function() {
        return this.idbdb !== null;
      }, ut.prototype.hasBeenClosed = function() {
        var e = this._state.dbOpenError;
        return e && e.name === "DatabaseClosed";
      }, ut.prototype.hasFailed = function() {
        return this._state.dbOpenError !== null;
      }, ut.prototype.dynamicallyOpened = function() {
        return this._state.autoSchema;
      }, Object.defineProperty(ut.prototype, "tables", { get: function() {
        var e = this;
        return c(this._allTables).map(function(n) {
          return e._allTables[n];
        });
      }, enumerable: !1, configurable: !0 }), ut.prototype.transaction = function() {
        var e = (function(n, o, a) {
          var s = arguments.length;
          if (s < 2) throw new V.InvalidArgument("Too few arguments");
          for (var u = new Array(s - 1); --s; ) u[s - 1] = arguments[s];
          return a = u.pop(), [n, de(u), a];
        }).apply(this, arguments);
        return this._transaction.apply(this, e);
      }, ut.prototype._transaction = function(e, n, o) {
        var a = this, s = we.trans;
        s && s.db === this && e.indexOf("!") === -1 || (s = null);
        var u, h, v = e.indexOf("?") !== -1;
        e = e.replace("!", "").replace("?", "");
        try {
          if (h = n.map(function(_) {
            if (_ = _ instanceof a.Table ? _.name : _, typeof _ != "string") throw new TypeError("Invalid table argument to Dexie.transaction(). Only Table or String are allowed");
            return _;
          }), e == "r" || e === zr) u = zr;
          else {
            if (e != "rw" && e != Yr) throw new V.InvalidArgument("Invalid transaction mode: " + e);
            u = Yr;
          }
          if (s) {
            if (s.mode === zr && u === Yr) {
              if (!v) throw new V.SubTransaction("Cannot enter a sub-transaction with READWRITE mode when parent transaction is READONLY");
              s = null;
            }
            s && h.forEach(function(_) {
              if (s && s.storeNames.indexOf(_) === -1) {
                if (!v) throw new V.SubTransaction("Table " + _ + " not included in parent transaction.");
                s = null;
              }
            }), v && s && !s.active && (s = null);
          }
        } catch (_) {
          return s ? s._promise(null, function(S, y) {
            y(_);
          }) : lt(_);
        }
        var b = (function _(S, y, T, w, C) {
          return ye.resolve().then(function() {
            var O = we.transless || we, I = S._createTransaction(y, T, S._dbSchema, w);
            if (I.explicit = !0, O = { trans: I, transless: O }, w) I.idbtrans = w.idbtrans;
            else try {
              I.create(), I.idbtrans._explicit = !0, S._state.PR1398_maxLoop = 3;
            } catch ($) {
              return $.name === D.InvalidState && S.isOpen() && 0 < --S._state.PR1398_maxLoop ? (console.warn("Dexie: Need to reopen db"), S.close({ disableAutoOpen: !1 }), S.open().then(function() {
                return _(S, y, T, null, C);
              })) : lt($);
            }
            var E, L = Fe(C);
            return L && xn(), O = ye.follow(function() {
              var $;
              (E = C.call(I, I)) && (L ? ($ = Xt.bind(null, null), E.then($, $)) : typeof E.next == "function" && typeof E.throw == "function" && (E = ho(E)));
            }, O), (E && typeof E.then == "function" ? ye.resolve(E).then(function($) {
              return I.active ? $ : lt(new V.PrematureCommit("Transaction committed too early. See http://bit.ly/2kdckMn"));
            }) : O.then(function() {
              return E;
            })).then(function($) {
              return w && I._resolve(), I._completion.then(function() {
                return $;
              });
            }).catch(function($) {
              return I._reject($), lt($);
            });
          });
        }).bind(null, this, u, h, s, o);
        return s ? s._promise(u, b, "lock") : we.trans ? un(we.transless, function() {
          return a._whenReady(b);
        }) : this._whenReady(b);
      }, ut.prototype.table = function(e) {
        if (!G(this._allTables, e)) throw new V.InvalidTable("Table ".concat(e, " does not exist"));
        return this._allTables[e];
      }, ut);
      function ut(e, n) {
        var o = this;
        this._middlewares = {}, this.verno = 0;
        var a = ut.dependencies;
        this._options = n = l({ addons: ut.addons, autoOpen: !0, indexedDB: a.indexedDB, IDBKeyRange: a.IDBKeyRange, cache: "cloned" }, n), this._deps = { indexedDB: n.indexedDB, IDBKeyRange: n.IDBKeyRange }, a = n.addons, this._dbSchema = {}, this._versions = [], this._storeNames = [], this._allTables = {}, this.idbdb = null, this._novip = this;
        var s, u, h, v, b, _ = { dbOpenError: null, isBeingOpened: !1, onReadyBeingFired: null, openComplete: !1, dbReadyResolve: R, dbReadyPromise: null, cancelOpen: R, openCanceller: null, autoSchema: !0, PR1398_maxLoop: 3, autoOpen: n.autoOpen };
        _.dbReadyPromise = new ye(function(y) {
          _.dbReadyResolve = y;
        }), _.openCanceller = new ye(function(y, T) {
          _.cancelOpen = T;
        }), this._state = _, this.name = e, this.on = kn(this, "populate", "blocked", "versionchange", "close", { ready: [Ee, R] }), this.once = function(y, T) {
          var w = function() {
            for (var C = [], O = 0; O < arguments.length; O++) C[O] = arguments[O];
            o.on(y).unsubscribe(w), T.apply(o, C);
          };
          return o.on(y, w);
        }, this.on.ready.subscribe = P(this.on.ready.subscribe, function(y) {
          return function(T, w) {
            ut.vip(function() {
              var C, O = o._state;
              O.openComplete ? (O.dbOpenError || ye.resolve().then(T), w && y(T)) : O.onReadyBeingFired ? (O.onReadyBeingFired.push(T), w && y(T)) : (y(T), C = o, w || y(function I() {
                C.on.ready.unsubscribe(T), C.on.ready.unsubscribe(I);
              }));
            });
          };
        }), this.Collection = (s = this, Ln(ki.prototype, function(E, I) {
          this.db = s;
          var w = Ho, C = null;
          if (I) try {
            w = I();
          } catch (L) {
            C = L;
          }
          var O = E._ctx, I = O.table, E = I.hook.reading.fire;
          this._ctx = { table: I, index: O.index, isPrimKey: !O.index || I.schema.primKey.keyPath && O.index === I.schema.primKey.name, range: w, keysOnly: !1, dir: "next", unique: "", algorithm: null, filter: null, replayFilter: null, justLimit: !0, isMatch: null, offset: 0, limit: 1 / 0, error: C, or: O.or, valueMapper: E !== W ? E : null };
        })), this.Table = (u = this, Ln(Qo.prototype, function(y, T, w) {
          this.db = u, this._tx = w, this.name = y, this.schema = T, this.hook = u._allTables[y] ? u._allTables[y].hook : kn(null, { creating: [Ne, R], reading: [ge, W], updating: [Pe, R], deleting: [Se, R] });
        })), this.Transaction = (h = this, Ln($i.prototype, function(y, T, w, C, O) {
          var I = this;
          y !== "readonly" && T.forEach(function(E) {
            E = (E = w[E]) === null || E === void 0 ? void 0 : E.yProps, E && (T = T.concat(E.map(function(L) {
              return L.updatesTable;
            })));
          }), this.db = h, this.mode = y, this.storeNames = T, this.schema = w, this.chromeTransactionDurability = C, this.idbtrans = null, this.on = kn(this, "complete", "error", "abort"), this.parent = O || null, this.active = !0, this._reculock = 0, this._blockedFuncs = [], this._resolve = null, this._reject = null, this._waitingFor = null, this._waitingQueue = null, this._spinCount = 0, this._completion = new ye(function(E, L) {
            I._resolve = E, I._reject = L;
          }), this._completion.then(function() {
            I.active = !1, I.on.complete.fire();
          }, function(E) {
            var L = I.active;
            return I.active = !1, I.on.error.fire(E), I.parent ? I.parent._reject(E) : L && I.idbtrans && I.idbtrans.abort(), lt(E);
          });
        })), this.Version = (v = this, Ln(Vi.prototype, function(y) {
          this.db = v, this._cfg = { version: y, storesSource: null, dbschema: {}, tables: {}, contentUpgrade: null };
        })), this.WhereClause = (b = this, Ln(ra.prototype, function(y, T, w) {
          if (this.db = b, this._ctx = { table: y, index: T === ":id" ? null : T, or: w }, this._cmp = this._ascending = Me, this._descending = function(C, O) {
            return Me(O, C);
          }, this._max = function(C, O) {
            return 0 < Me(C, O) ? C : O;
          }, this._min = function(C, O) {
            return Me(C, O) < 0 ? C : O;
          }, this._IDBKeyRange = b._deps.IDBKeyRange, !this._IDBKeyRange) throw new V.MissingAPI();
        })), this.on("versionchange", function(y) {
          0 < y.newVersion ? console.warn("Another connection wants to upgrade database '".concat(o.name, "'. Closing db now to resume the upgrade.")) : console.warn("Another connection wants to delete database '".concat(o.name, "'. Closing db now to resume the delete request.")), o.close({ disableAutoOpen: !1 });
        }), this.on("blocked", function(y) {
          !y.newVersion || y.newVersion < y.oldVersion ? console.warn("Dexie.delete('".concat(o.name, "') was blocked")) : console.warn("Upgrade '".concat(o.name, "' blocked by other connection holding version ").concat(y.oldVersion / 10));
        }), this._maxKey = Mn(n.IDBKeyRange), this._createTransaction = function(y, T, w, C) {
          return new o.Transaction(y, T, w, o._options.chromeTransactionDurability, C);
        }, this._fireOnBlocked = function(y) {
          o.on("blocked").fire(y), Cn.filter(function(T) {
            return T.name === o.name && T !== o && !T._state.vcFired;
          }).map(function(T) {
            return T.on("versionchange").fire(y);
          });
        }, this.use(zi), this.use(Ji), this.use(Yi), this.use(Gi), this.use(Hi);
        var S = new Proxy(this, { get: function(y, T, w) {
          if (T === "_vip") return !0;
          if (T === "table") return function(O) {
            return _r(o.table(O), S);
          };
          var C = Reflect.get(y, T, w);
          return C instanceof Qo ? _r(C, S) : T === "tables" ? C.map(function(O) {
            return _r(O, S);
          }) : T === "_createTransaction" ? function() {
            return _r(C.apply(this, arguments), S);
          } : C;
        } });
        this.vip = S, a.forEach(function(y) {
          return y(o);
        });
      }
      var xr, Pt = typeof Symbol < "u" && "observable" in Symbol ? Symbol.observable : "@@observable", Zi = (go.prototype.subscribe = function(e, n, o) {
        return this._subscribe(e && typeof e != "function" ? e : { next: e, error: n, complete: o });
      }, go.prototype[Pt] = function() {
        return this;
      }, go);
      function go(e) {
        this._subscribe = e;
      }
      try {
        xr = { indexedDB: f.indexedDB || f.mozIndexedDB || f.webkitIndexedDB || f.msIndexedDB, IDBKeyRange: f.IDBKeyRange || f.webkitIDBKeyRange };
      } catch {
        xr = { indexedDB: null, IDBKeyRange: null };
      }
      function ga(e) {
        var n, o = !1, a = new Zi(function(s) {
          var u = Fe(e), h, v = !1, b = {}, _ = {}, S = { get closed() {
            return v;
          }, unsubscribe: function() {
            v || (v = !0, h && h.abort(), y && Zt.storagemutated.unsubscribe(w));
          } };
          s.start && s.start(S);
          var y = !1, T = function() {
            return Hr(C);
          }, w = function(O) {
            gr(b, O), uo(_, b) && T();
          }, C = function() {
            var O, I, E;
            !v && xr.indexedDB && (b = {}, O = {}, h && h.abort(), h = new AbortController(), E = function(L) {
              var $ = wn();
              try {
                u && xn();
                var M = Yt(e, L);
                return M = u ? M.finally(Xt) : M;
              } finally {
                $ && _n();
              }
            }(I = { subscr: O, signal: h.signal, requery: T, querier: e, trans: null }), Promise.resolve(E).then(function(L) {
              o = !0, n = L, v || I.signal.aborted || (b = {}, function($) {
                for (var M in $) if (G($, M)) return;
                return 1;
              }(_ = O) || y || (Zt(Fn, w), y = !0), Hr(function() {
                return !v && s.next && s.next(L);
              }));
            }, function(L) {
              o = !1, ["DatabaseClosedError", "AbortError"].includes(L?.name) || v || Hr(function() {
                v || s.error && s.error(L);
              });
            }));
          };
          return setTimeout(T, 0), S;
        });
        return a.hasValue = function() {
          return o;
        }, a.getValue = function() {
          return n;
        }, a;
      }
      var pn = Gt;
      function bo(e) {
        var n = en;
        try {
          en = !0, Zt.storagemutated.fire(e), po(e, !0);
        } finally {
          en = n;
        }
      }
      re(pn, l(l({}, ct), { delete: function(e) {
        return new pn(e, { addons: [] }).delete();
      }, exists: function(e) {
        return new pn(e, { addons: [] }).open().then(function(n) {
          return n.close(), !0;
        }).catch("NoSuchDatabaseError", function() {
          return !1;
        });
      }, getDatabaseNames: function(e) {
        try {
          return n = pn.dependencies, o = n.indexedDB, n = n.IDBKeyRange, (io(o) ? Promise.resolve(o.databases()).then(function(a) {
            return a.map(function(s) {
              return s.name;
            }).filter(function(s) {
              return s !== ir;
            });
          }) : ao(o, n).toCollection().primaryKeys()).then(e);
        } catch {
          return lt(new V.MissingAPI());
        }
        var n, o;
      }, defineClass: function() {
        return function(e) {
          g(this, e);
        };
      }, ignoreTransaction: function(e) {
        return we.trans ? un(we.transless, e) : e();
      }, vip: so, async: function(e) {
        return function() {
          try {
            var n = ho(e.apply(this, arguments));
            return n && typeof n.then == "function" ? n : ye.resolve(n);
          } catch (o) {
            return lt(o);
          }
        };
      }, spawn: function(e, n, o) {
        try {
          var a = ho(e.apply(o, n || []));
          return a && typeof a.then == "function" ? a : ye.resolve(a);
        } catch (s) {
          return lt(s);
        }
      }, currentTransaction: { get: function() {
        return we.trans || null;
      } }, waitFor: function(e, n) {
        return n = ye.resolve(typeof e == "function" ? pn.ignoreTransaction(e) : e).timeout(n || 6e4), we.trans ? we.trans.waitFor(n) : n;
      }, Promise: ye, debug: { get: function() {
        return Ie;
      }, set: function(e) {
        We(e);
      } }, derive: j, extend: g, props: re, override: P, Events: kn, on: Zt, liveQuery: ga, extendObservabilitySet: gr, getByKeyPath: Y, setByKeyPath: ie, delByKeyPath: function(e, n) {
        typeof n == "string" ? ie(e, n, void 0) : "length" in n && [].map.call(n, function(o) {
          ie(e, o, void 0);
        });
      }, shallowClone: xe, deepClone: z, getObjectDiff: mo, cmp: Me, asap: Oe, minKey: -1 / 0, addons: [], connections: Cn, errnames: D, dependencies: xr, cache: fn, semVer: "4.2.0", version: "4.2.0".split(".").map(function(e) {
        return parseInt(e);
      }).reduce(function(e, n, o) {
        return e + n / Math.pow(10, 2 * o);
      }) })), pn.maxKey = Mn(pn.dependencies.IDBKeyRange), typeof dispatchEvent < "u" && typeof addEventListener < "u" && (Zt(Fn, function(e) {
        en || (e = new CustomEvent(Jr, { detail: e }), en = !0, dispatchEvent(e), en = !1);
      }), addEventListener(Jr, function(e) {
        e = e.detail, en || bo(e);
      }));
      var En, en = !1, ba = function() {
      };
      return typeof BroadcastChannel < "u" && ((ba = function() {
        (En = new BroadcastChannel(Jr)).onmessage = function(e) {
          return e.data && bo(e.data);
        };
      })(), typeof En.unref == "function" && En.unref(), Zt(Fn, function(e) {
        en || En.postMessage(e);
      })), typeof addEventListener < "u" && (addEventListener("pagehide", function(e) {
        if (!Gt.disableBfCache && e.persisted) {
          Ie && console.debug("Dexie: handling persisted pagehide"), En?.close();
          for (var n = 0, o = Cn; n < o.length; n++) o[n].close({ disableAutoOpen: !1 });
        }
      }), addEventListener("pageshow", function(e) {
        !Gt.disableBfCache && e.persisted && (Ie && console.debug("Dexie: handling persisted pageshow"), ba(), bo({ all: new gt(-1 / 0, [[]]) }));
      })), ye.rejectionMapper = function(e, n) {
        return !e || e instanceof Qe || e instanceof TypeError || e instanceof SyntaxError || !e.name || !oe[e.name] ? e : (n = new oe[e.name](n || e.message, e), "stack" in e && k(n, "stack", { get: function() {
          return this.inner.stack;
        } }), n);
      }, We(Ie), l(Gt, Object.freeze({ __proto__: null, Dexie: Gt, liveQuery: ga, Entity: zo, cmp: Me, PropModification: jn, replacePrefix: function(e, n) {
        return new jn({ replacePrefix: [e, n] });
      }, add: function(e) {
        return new jn({ add: e });
      }, remove: function(e) {
        return new jn({ remove: e });
      }, default: Gt, RangeSet: gt, mergeRanges: qn, rangesOverlap: la }), { default: Gt }), Gt;
    });
  }(Os)), Os.exports;
}
var rp = np();
const Ns = /* @__PURE__ */ Xf(rp), Vl = Symbol.for("Dexie"), Ts = globalThis[Vl] || (globalThis[Vl] = Ns);
if (Ns.semVer !== Ts.semVer)
  throw new Error(`Two different versions of Dexie loaded in the same app: ${Ns.semVer} and ${Ts.semVer}`);
const {
  liveQuery: vb,
  mergeRanges: yb,
  rangesOverlap: gb,
  RangeSet: bb,
  cmp: wb,
  Entity: _b,
  PropModification: xb,
  replacePrefix: Cb,
  add: Sb,
  remove: Ib,
  DexieYProvider: Ob
} = Ts;
function op(t) {
  return {
    createRecord: i,
    updateRecord: l,
    findChildRecords: c,
    findChildRecordsByTagName: m,
    findChildRecordsWithinDepthAndGivenTagName: g,
    findParentRecordsWithinDepthAndGivenTagName: q,
    findRecord: B,
    findRecordById: G,
    findAncestors: r,
    ensureRelationship: d,
    removeRelationship: f,
    db: t
  };
  async function r(Z, k = {}) {
    const { depth: j = 1 / 0, tagNames: F = [] } = k, X = F.length === 0, A = [];
    let P = Z;
    for (let Oe = 0; Oe < j && P.parent?.id; Oe++) {
      const Y = await t.table(qe).get(P.parent.id);
      if (!Y)
        break;
      A.push(Y), P = Y;
    }
    return X ? A : A.filter((Oe) => F.includes(Oe.tagName));
  }
  async function i(Z, k) {
    const F = {
      ...{
        id: "",
        tagName: "SCL",
        attributes: [],
        parent: null,
        namespace: nn.default,
        value: "",
        children: []
      },
      ...Z,
      id: crypto.randomUUID()
    };
    try {
      return await t.table(qe).add(F), k && await d(k, F), {
        ...F,
        parent: k ? { id: k.id, tagName: k.tagName } : null
      };
    } catch (X) {
      const A = {
        msg: "could not add record",
        db: t.name,
        table: Z.tagName,
        recordToCreate: Z,
        err: X
      };
      throw console.error(A), new Error(JSON.stringify(A));
    }
  }
  async function l(Z) {
    try {
      if (await t.table(qe).update(Z.id, Z) < 1) {
        const j = { msg: "nothing has been updated", record: Z };
        throw console.error(j), new Error(JSON.stringify(j));
      }
    } catch (k) {
      console.error(k);
    }
  }
  async function d(Z, k) {
    const j = Z.children?.some((X) => X.id === k.id), F = k.parent?.id === Z.id;
    if (j || (Z.children.push({ id: k.id, tagName: k.tagName }), await l(Z)), !F) {
      const X = {
        id: Z.id,
        tagName: Z.tagName
      };
      k.parent = X, await l(k);
    }
  }
  async function f(Z, k) {
    k.parent = null, await l(k), Z.children && (Z.children = Z.children.filter((j) => j.id !== k.id), await l(Z));
  }
  async function c(Z, k) {
    if (!Z.children?.length)
      return [];
    let j = (await t.table(qe).bulkGet(Z.children.map((F) => F.id))).filter(Boolean);
    return k?.tagNames && k.tagNames.length > 0 && (j = j.filter((F) => k?.tagNames?.includes(F.tagName))), k?.attrs && k.attrs.length > 0 && (j = j.filter(
      (F) => k.attrs.every(
        (X) => F.attributes.some(
          (A) => A.name === X.name && A.value === X.value
        )
      )
    )), j;
  }
  async function m(Z, k) {
    return (await c(Z)).filter((F) => k.includes(F.tagName));
  }
  async function g(Z, k, j) {
    const F = [];
    let X = [Z];
    for (let A = 0; A < k; A++) {
      const P = [];
      if (X.length === 0)
        break;
      for (const J of X) {
        const Oe = await c(J);
        Oe.length !== 0 && (P.push(...Oe), F.push(...Oe.filter((Y) => j.includes(Y.tagName))));
      }
      X = [...P];
    }
    return F;
  }
  async function q(Z, k, j = []) {
    const F = [];
    let X = Z;
    for (let A = 0; A < k; A++) {
      if (!X.parent)
        return F;
      const P = await t.table(qe).get(X.parent.id);
      if (!P)
        break;
      (j.length == 0 || j.length > 0 && j.includes(P.tagName)) && F.push(P), X = P;
    }
    return F;
  }
  async function B(Z) {
    const [k] = await re(Z);
    return k;
  }
  async function G(Z) {
    return await t.table(qe).get(Z);
  }
  async function re(Z) {
    try {
      const k = t.table(qe);
      let j = Z.tagNames && Z.tagNames.length > 0 ? k.where("tagName").anyOf(Z.tagNames) : k.toCollection();
      return Z.parent && (j = j.filter((X) => X.parent?.id === Z.parent?.id)), Z.attr && (j = j.filter((X) => X.attributes?.some(
        (P) => P.name === Z.attr.name && P.value === Z.attr.value
      ))), await j.toArray();
    } catch (k) {
      return console.error({ msg: "could not find records by options", options: Z, err: k }), [];
    }
  }
}
function Ae(t, r) {
  if (t) return;
  const i = "Invariant failed", l = r ? `${i}: ${r}` : i;
  throw console.error(l), new Error("Unexpected Error!");
}
function ap(t) {
  const r = {}, i = Object.keys(t).sort((l, d) => l.localeCompare(d));
  for (const l of i)
    r[l] = t[l];
  return r;
}
function ip(t, r) {
  return t.attributes?.find((i) => i.name === r);
}
function K(t, r) {
  return t?.attributes?.find((i) => i.name === r)?.value;
}
function An(t, r) {
  const i = t.attributes.find((l) => l.name === r)?.value;
  return Ae(i, `Attribute ${r} not found on record ${t.id}`), i;
}
function mn(t, r, i) {
  const l = t.attributes.find((d) => d.name === r);
  l ? l.value = i : t.attributes.push({ name: r, value: i });
}
var ot = /* @__PURE__ */ ((t) => (t.GOOSE = "GOOSE", t.SMV = "SMV", t.REPORT = "Report", t.INTERNAL = "Internal", t.WIRED = "Wired", t.CONTROL = "Control", t))(ot || {});
const Bo = {
  GOOSE: ["ST", "MX", "SP", "OR"],
  SMV: ["ST", "MX"],
  Report: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Wired: ["ST", "MX", "SP", "SV", "CF", "DC", "SG", "SE", "SR", "OR", "BL", "EX"],
  Control: [],
  Internal: []
}, $a = ["q", "t"];
function qa(t) {
  const { ensurePrivateElement: r } = Ti(t), i = Lt();
  async function l() {
    const Y = await m();
    return Y.length ? await re(Y) : [];
  }
  async function d() {
    const Y = await t.db.table(qe).where({ tagName: "LNodeType" }).toArray(), ie = [];
    for (const xe of Y)
      ie.push({
        id: xe.id,
        typeId: K(xe, "id") ?? "",
        lnClass: K(xe, "lnClass") ?? "",
        dataObjects: await f(xe)
      });
    return ie;
  }
  async function f(Y) {
    if (!Y.children) return [];
    const ie = [];
    for (const xe of Y.children) {
      if (xe.tagName !== "DO") continue;
      const N = await t.db.table(qe).get(xe.id);
      N && ie.push({
        id: N.id,
        name: K(N, "name") ?? "",
        type: K(N, "type") ?? "",
        desc: K(N, "desc") ?? "",
        dataAttributes: await c(N)
      });
    }
    return ie;
  }
  async function c(Y) {
    const ie = K(Y, "type");
    if (!ie) return [];
    const xe = (await t.db.table(qe).where({ tagName: "DOType" }).toArray()).find((de) => de.attributes?.find((Q) => Q.name === "id" && Q.value === ie));
    if (!xe?.children) return [];
    const N = [];
    for (const de of xe.children) {
      if (de.tagName !== "DA") continue;
      const Q = await t.db.table(qe).get(de.id);
      Q && N.push({
        id: Q.id,
        name: K(Q, "name") ?? "",
        type: K(Q, "type") ?? "",
        desc: K(Q, "desc") ?? "",
        bType: K(Q, "bType") ?? "",
        fc: K(Q, "fc") ?? ""
      });
    }
    return N;
  }
  async function m() {
    return (await t.db.table(qe).where({ tagName: "LNode" }).toArray()).map((ie) => ({
      id: ie.id,
      uuid: K(ie, "uuid") ?? "",
      iedName: K(ie, "iedName") ?? "",
      prefix: K(ie, "prefix") ?? "",
      lnClass: K(ie, "lnClass") ?? "",
      lnInst: K(ie, "lnInst") ?? "",
      lnType: K(ie, "lnType") ?? "",
      ldInst: K(ie, "ldInst") ?? "",
      dataObjects: []
    }));
  }
  async function g(Y) {
    const ie = await t.db.table(qe).get(Y);
    Ae(ie, "LNode record not found");
    const xe = await q(Y);
    if (!xe)
      return;
    const de = (await t.findChildRecordsWithinDepthAndGivenTagName(
      xe,
      1,
      ["LN"]
    )).find((Q) => {
      const he = K(Q, "inst") === K(ie, "lnInst"), z = K(Q, "lnClass") === K(ie, "lnClass"), U = (K(Q, "prefix") ?? "") === (K(ie, "prefix") ?? "");
      return he && z && U;
    });
    return Ae(de, "LN record not found for receiving LNode"), de;
  }
  async function q(Y) {
    const ie = await t.db.table(qe).get(Y), xe = await t.db.table(qe).where({ tagName: "IED" }).and(
      (Q) => K(Q, "name") === K(ie, "iedName")
    ).first();
    Ae(xe, "IED record not found for receiving LNode");
    const de = (await t.findChildRecordsWithinDepthAndGivenTagName(
      xe,
      3,
      ["LDevice"]
    )).find((Q) => K(Q, "inst") === K(ie, "ldInst"));
    return Ae(de, "LDevice record not found for receiving LNode"), de;
  }
  async function B(Y) {
    const ie = await t.db.table(qe).get(Y);
    Ae(ie, "LNode record not found");
    const xe = [];
    let N = ie;
    for (; N.parent && (N.parent.tagName == "Function" || N.parent.tagName == "SubFunction"); ) {
      const de = await t.db.table(qe).get(N.parent.id);
      Ae(de, "Parent record not found");
      const Q = await t.findChildRecordsWithinDepthAndGivenTagName(
        de,
        3,
        // Expected hierarchy: Private, ProcessResources, ProcessResource
        ["ProcessResource"]
      );
      xe.push(...Q), N = de;
    }
    return xe;
  }
  async function G(Y) {
    const ie = await t.db.table(qe).get(Y);
    if (!ie || !ie?.parent)
      return [];
    const xe = await t.db.table(qe).get(ie.parent.id);
    return xe?.tagName === "Function" || xe?.tagName === "SubFunction" ? await t.db.table(qe).where({ tagName: "FunctionRef" }).and(
      (Q) => K(Q, "functionUuid") === K(xe, "uuid")
    ).toArray() : [];
  }
  async function re(Y) {
    const ie = await t.db.table(qe).where({ tagName: "Private" }).toArray(), xe = await t.db.table(qe).where({ tagName: "DOS" }).toArray(), N = await t.db.table(qe).where({ tagName: "DAS" }).toArray(), de = await t.db.table(qe).where({ tagName: "SubscriberLNode" }).toArray();
    return Promise.all(
      Y.map(async (Q) => {
        const he = ie.find(
          (U) => U.parent?.id === Q.id && U.parent?.tagName === "LNode" && K(U, "type") === "eIEC61850-6-100"
        );
        if (!he?.children)
          return { ...Q, dataObjectSpecifications: [] };
        const z = [];
        for (const U of he.children) {
          if (U.tagName !== "DOS") continue;
          const ne = xe.find((H) => H.id === U.id);
          if (!ne) continue;
          const se = [];
          if (ne.children)
            for (const H of ne.children) {
              if (H.tagName !== "DAS") continue;
              const le = N.find((Te) => Te.id === H.id);
              if (!le) continue;
              let Ce = [];
              if (le.children) {
                const Te = le.children.filter((Ge) => Ge.tagName === "SubscriberLNode"), Fe = de.filter(
                  (Ge) => Te.some((Qe) => Qe.id === Ge.id)
                );
                for (const Ge of Fe)
                  Ce.push({
                    id: Ge.id,
                    inputName: K(Ge, "inputName") ?? "",
                    service: Js(Ge, "service"),
                    pLN: K(Ge, "pLN") ?? "",
                    resourceName: K(Ge, "resourceName") ?? ""
                  });
              }
              se.push({
                id: le.id,
                name: K(le, "name") ?? "",
                desc: K(le, "desc") ?? "",
                subscriberLnodes: Ce
              });
            }
          z.push({
            id: ne.id,
            name: K(ne, "name") ?? "",
            desc: K(ne, "desc") ?? "",
            dataAttributeSpecifications: se
          });
        }
        return { ...Q, dataObjectSpecifications: z };
      })
    );
  }
  async function Z(Y, ie, xe) {
    if (!Y) return "";
    const N = await t.db.table(qe).get(Y);
    if (!N) return "";
    const de = [];
    let Q = N;
    const he = ["LNode", "SubFunction", "Function", "Bay", "VoltageLevel", "Substation"];
    for (; Q && Q.parent; ) {
      if (he.includes(Q.tagName)) {
        const ne = K(Q, "name");
        ne && de.unshift(ne);
      }
      Q = await t.db.table(qe).get(Q.parent.id);
    }
    const z = (() => {
      const ne = N.attributes?.find((le) => le.name === "prefix")?.value || "", se = N.attributes?.find((le) => le.name === "lnClass")?.value || "", H = N.attributes?.find((le) => le.name === "lnInst")?.value || "";
      return `${ne}${se}${H}`;
    })();
    de.push(z);
    let U = de.join("/");
    return ie && (U += `.${ie}`, xe && (U += "." + xe)), U;
  }
  async function k(Y, ie) {
    const xe = await Z(Y), N = K(ie, "input"), de = K(ie, "inputInst"), Q = K(ie, "pDA");
    let he = `${xe}.${N}`;
    return de && (he += `(${de})`), Q && (he += `.${Q}`), he;
  }
  async function j(Y, ie) {
    const xe = await Z(Y), N = K(ie, "output"), de = K(ie, "outputInst");
    let Q = `${xe}.${N}`;
    return de && (Q += `(${de})`), Q;
  }
  async function F(Y) {
    const ie = await t.findRecordById(Y.id);
    Ae(ie, `LNode element with uuid ${Y.uuid} not found`);
    const xe = await r(ie), N = await t.findChildRecordsByTagName(xe, [
      "LNodeOutputs"
    ]);
    if (N.length == 1)
      return N[0];
    if (N.length == 0)
      return await t.createRecord(
        {
          tagName: "LNodeOutputs",
          namespace: nn.v2019C1
        },
        xe
      );
    const de = {
      msg: `More than one LNodeOutputs element found in LNode with uuid ${Y.uuid}`
    };
    throw new Error(JSON.stringify(de));
  }
  async function X(Y) {
    const ie = await t.findRecordById(Y.id);
    Ae(ie, `LNode element with uuid ${Y.uuid} not found`);
    const xe = await r(ie), N = await t.findChildRecordsByTagName(xe, [
      "LNodeInputs"
    ]);
    if (N.length == 1)
      return N[0];
    if (N.length == 0)
      return await t.createRecord(
        {
          tagName: "LNodeInputs",
          attributes: [],
          parent: null,
          namespace: nn.v2019C1,
          value: "",
          children: []
        },
        xe
      );
    const de = {
      msg: `More than one LNodeInputs element found in LNode with uuid ${Y.uuid}`
    };
    throw new Error(JSON.stringify(de));
  }
  async function A(Y, ie) {
    const xe = await t.findRecordById(Y.id);
    Ae(xe, `LNode element with uuid ${Y.uuid} not found`);
    const N = Y.dataObjectSpecifications?.find((z) => z.name === ie), de = i.lnodeTypes.find((z) => z.lnClass === Y.lnClass), Q = de?.dataObjects.find((z) => z.name === ie);
    if (!de || !Q) {
      const z = `LNodeType or DO type not found for LNode class ${Y.lnClass}, DO ${ie}`;
      throw console.error(z), new Error(z);
    }
    let he;
    if (!N) {
      const z = await r(xe);
      he = await J(ie, Q.desc, z);
    }
    if (!he && (he = await t.db.table(qe).get(N.id), !he))
      throw new Error(`DOS element with id ${N.id} not found`);
    return he;
  }
  async function P(Y, ie, xe, N, de) {
    const Q = K(ie, "name"), he = Y.dataObjectSpecifications?.find((le) => le.name === Q), z = he?.dataAttributeSpecifications.find((le) => le.name === xe), U = i.lnodeTypes.find((le) => le.lnClass === Y.lnClass), ne = U?.dataObjects.find((le) => le.name === Q), se = ne?.dataAttributes.find((le) => le.name === xe);
    if (!U || !ne || !se) {
      const le = `LNodeType, DO type or DA type not found for LNode class ${Y.lnClass}, DO ${Q}, DA ${xe}`;
      throw console.error(le), new Error(le);
    }
    let H;
    if (z || (H = await Oe(xe, se.desc, ie)), N) {
      const le = ne?.dataAttributes.find((Te) => Te.name === "q");
      if (!le)
        throw new Error(`DA type 'q' not allowed for DO ${xe}`);
      he?.dataAttributeSpecifications.find(
        (Te) => Te.name === le.name
      ) || await Oe(le.name, le.desc, ie);
    }
    if (de) {
      const le = ne?.dataAttributes.find((Te) => Te.name === "t");
      if (!le)
        throw new Error(`DA type 't' not allowed for DO ${Q}`);
      he?.dataAttributeSpecifications.find(
        (Te) => Te.name === le.name
      ) || await Oe(le.name, le.desc, ie);
    }
    return H;
  }
  async function J(Y, ie, xe) {
    const N = {
      tagName: "DOS",
      namespace: nn.v2019C1,
      attributes: [
        {
          name: "name",
          value: Y
        },
        {
          name: "desc",
          value: ie
        }
      ]
    };
    return await t.createRecord(N, xe);
  }
  async function Oe(Y, ie, xe) {
    const N = {
      tagName: "DAS",
      namespace: nn.v2019C1,
      attributes: [
        {
          name: "name",
          value: Y
        },
        {
          name: "desc",
          value: ie
        }
      ]
    };
    return await t.createRecord(N, xe);
  }
  return {
    findAllEnrichedLnodes: l,
    findAllLnodeTypes: d,
    findAllLnodes: m,
    findLnRecordForLnode: g,
    findLdeviceForLnode: q,
    findProcessResourcesForLnode: B,
    findFunctionRefsOfLnode: G,
    enrichWithDataObjectSpecifications: re,
    generatePathForLnode: Z,
    generatePathForSourceRef: k,
    generatePathForControlRef: j,
    ensureLnodeInputsElement: X,
    ensureLnodeOutputsElement: F,
    ensureDosElement: A,
    ensureDasElement: P
  };
}
function di(t) {
  return `${t.prefix}${t.lnClass}${t.lnInst}`;
}
function Js(t, r) {
  const i = t?.attributes?.find((d) => d.name === r)?.value;
  if (!i) return;
  switch (i.toUpperCase()) {
    case "GOOSE":
      return ot.GOOSE;
    case "SMV":
      return ot.SMV;
    case "REPORT":
      return ot.REPORT;
    case "WIRED":
      return ot.WIRED;
    case "CONTROL":
      return ot.CONTROL;
    case "INTERNAL":
      return ot.INTERNAL;
    default:
      return;
  }
}
function sp(t) {
  const r = Lt(), { findLnRecordForLnode: i, findLdeviceForLnode: l } = qa(t);
  async function d(z, U) {
    if (Ae(
      z.sourceLnodeId && z.destinationLnodeId,
      "Connection must have both source and destination LNode IDs to implement"
    ), Ae(z.dataflowType, "Connection must have a dataflow type to implement"), U.srcCbName)
      throw new Error("Dataflow is already implemented (srcCBName exists in ExtRef)");
    if (![ot.GOOSE, ot.REPORT, ot.SMV].includes(z.dataflowType))
      throw new Error(
        `Dataflow type ${z.dataflowType} is not supported for automatic implementation`
      );
    const se = await t.db.table(qe).get(z.sourceLnodeId);
    Ae(se, "Sending LNode record not found");
    const H = await t.db.table(qe).get(z.destinationLnodeId);
    Ae(H, "Receiving LNode record not found");
    const le = await l(z.sourceLnodeId);
    Ae(le, "LDevice of sending LNode not found");
    const Ce = (await t.findChildRecords(le, { tagNames: ["LN0"] }))[0];
    Ae(Ce, "LN0 record not found for LDevice");
    const Te = await P(
      z,
      se,
      H,
      le,
      Ce
    ), Fe = await A(
      z.dataflowType,
      An(Te, "name"),
      Ce
    );
    mn(Te, "datSet", An(Fe, "name")), await t.updateRecord(Te), await X(z, se, Fe), await re(
      z.dataflowType,
      le,
      Te
    ), await Q(
      z,
      U,
      An(Te, "name")
    ), await he(z, H, U), await r.refreshConnections();
  }
  async function f(z, U, ne) {
    const se = await t.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: z }
    });
    Ae(se, "IED record not found");
    const H = await t.findChildRecordsWithinDepthAndGivenTagName(se, 3, ["LDevice"]).then((Te) => Te.find((Fe) => K(Fe, "inst") === U));
    Ae(H, "LDevice record not found");
    const [le] = await t.findChildRecordsByTagName(H, ["LN0"]);
    Ae(le, "LN0 record not found for LDevice");
    const [Ce] = await t.findChildRecords(le, {
      tagNames: ["GSEControl", "SampledValueControl", "ReportControl"],
      attrs: [{ name: "name", value: ne }]
    });
    return Ae(Ce, "Control Block record not found"), lp(Ce);
  }
  async function c(z, U, ne) {
    const se = await t.findRecord({
      tagNames: ["IED"],
      attr: { name: "name", value: z }
    });
    Ae(se, "IED record not found");
    const H = await t.findChildRecordsWithinDepthAndGivenTagName(se, 3, ["LDevice"]).then((Te) => Te.find((Fe) => K(Fe, "inst") === U));
    Ae(H, "LDevice record not found");
    const [le] = await t.findChildRecordsByTagName(H, ["LN0"]);
    Ae(le, "LN0 record not found for LDevice");
    const [Ce] = await t.findChildRecords(le, {
      tagNames: ["DataSet"],
      attrs: [{ name: "name", value: ne }]
    });
    return Ae(Ce, "DataSet record not found"), up(Ce);
  }
  async function m(z) {
    const U = await t.db.table(qe).get(z);
    return Ae(U, "DataSet record not found"), (await t.findChildRecordsByTagName(U, ["FCDA"])).map(cp);
  }
  async function g(z) {
    const U = await t.db.table(qe).get(z);
    Ae(U, "ExtRef record not found");
    let ne = K(U, "intAddr") ?? "";
    const se = ["LN", "LDevice", "IED"];
    let H = U;
    for (; H.parent; ) {
      const le = await t.db.table(qe).get(H.parent.id);
      if (Ae(le, "Parent record not found"), se.includes(le.tagName)) {
        let Ce = "";
        le.tagName === "LN" ? Ce = `${K(le, "prefix") ?? ""}${K(le, "lnClass")}${K(le, "inst") ?? ""}` : le.tagName === "LDevice" ? Ce = K(le, "inst") ?? "" : Ce = K(le, "name") ?? "", ne = `${Ce}/${ne}`;
      }
      H = le;
    }
    return ne;
  }
  async function q(z, U) {
    const ne = await t.db.table(qe).get(z);
    Ae(ne, "Control Block record not found");
    const se = await t.db.table(qe).where({ tagName: "GSE" }).and(
      (Ze) => K(Ze, "cbName") === K(ne, "name") && K(Ze, "ldInst") === U
    ).first();
    Ae(se, "GSE Communication record not found for Control Block");
    const [H] = await t.findChildRecordsByTagName(se, [
      "MinTime"
    ]), [le] = await t.findChildRecordsByTagName(se, [
      "MaxTime"
    ]), Ce = await t.findChildRecordsWithinDepthAndGivenTagName(
      se,
      2,
      ["P"]
    ), Te = Ce.find(
      (Ze) => K(Ze, "type") === "VLAN-ID" || K(Ze, "type") === "tP_VLAN-ID"
    ), Fe = Ce.find(
      (Ze) => K(Ze, "type") === "VLAN-PRIORITY" || K(Ze, "type") === "tP_VLAN-PRIORITY"
    ), Ge = Ce.find(
      (Ze) => K(Ze, "type") === "MAC-Address" || K(Ze, "type") === "tP_MAC-Address"
    ), Qe = Ce.find(
      (Ze) => K(Ze, "type") === "APPID" || K(Ze, "type") === "tP_APPID"
    );
    return {
      appId: K(ne, "appID") ?? "",
      communicationDetails: {
        macAddress: Ge?.value ?? "",
        appId: Qe?.value ?? "",
        vlanId: Te?.value ?? "",
        vlanPriority: Fe?.value ?? "",
        minTime: H?.value ?? "",
        maxTime: le?.value ?? ""
      }
    };
  }
  async function B(z, U) {
    const ne = await t.db.table(qe).get(z);
    Ae(ne, "Control Block record not found");
    const [se] = await t.findChildRecordsByTagName(ne, [
      "SmvOpts"
    ]);
    Ae(se, "SmvOpts record not found for Control Block");
    const H = await t.db.table(qe).where({ tagName: "SMV" }).and(
      (Qe) => K(Qe, "cbName") === K(ne, "name") && K(Qe, "ldInst") === U
    ).first();
    Ae(H, "SMV Communication record not found for Control Block");
    const le = await t.findChildRecordsWithinDepthAndGivenTagName(
      H,
      2,
      ["P"]
    ), Ce = le.find(
      (Qe) => K(Qe, "type") === "VLAN-ID" || K(Qe, "type") === "tP_VLAN-ID"
    ), Te = le.find(
      (Qe) => K(Qe, "type") === "VLAN-PRIORITY" || K(Qe, "type") === "tP_VLAN-PRIORITY"
    ), Fe = le.find(
      (Qe) => K(Qe, "type") === "MAC-Address" || K(Qe, "type") === "tP_MAC-Address"
    ), Ge = le.find(
      (Qe) => K(Qe, "type") === "APPID" || K(Qe, "type") === "tP_APPID"
    );
    return {
      smvId: K(ne, "smvID") ?? "",
      multicast: K(ne, "multicast") ?? "",
      nofAsdu: K(ne, "nofASDU") ?? "",
      smpMod: K(ne, "smpMod") ?? "",
      smpRate: K(ne, "smpRate") ?? "",
      communicationDetails: {
        macAddress: Fe?.value ?? "",
        appId: Ge?.value ?? "",
        vlanId: Ce?.value ?? "",
        vlanPriority: Te?.value ?? ""
      },
      smvOpts: {
        refreshTime: K(se, "refreshTime") ?? "",
        sampleSynchronized: K(se, "sampleSynchronized") ?? "",
        sampleRate: K(se, "sampleRate") ?? "",
        dataSet: K(se, "dataSet") ?? "",
        security: K(se, "security") ?? "",
        synchSourceId: K(se, "synchSourceId") ?? ""
      }
    };
  }
  async function G(z) {
    const U = await t.db.table(qe).get(z);
    Ae(U, "Control Block record not found");
    const [ne] = await t.findChildRecordsByTagName(U, [
      "TrgOps"
    ]);
    Ae(ne, "TrgOps record not found for Control Block");
    const [se] = await t.findChildRecordsByTagName(U, [
      "OptFields"
    ]);
    return Ae(se, "OptFields record not found for Control Block"), {
      rptId: K(U, "rptID") ?? "",
      buffered: K(U, "buffered") ?? "",
      trgOps: {
        dchg: K(ne, "dchg") ?? "",
        dupd: K(ne, "dupd") ?? "",
        gi: K(ne, "gi") ?? "",
        period: K(ne, "period") ?? "",
        qchg: K(ne, "qchg") ?? ""
      },
      optFields: {
        bufOvfl: K(se, "bufOvfl") ?? "",
        configRef: K(se, "configRef") ?? "",
        dataRef: K(se, "dataRef") ?? "",
        dataSet: K(se, "dataSet") ?? "",
        entryId: K(se, "entryID") ?? "",
        reasonCode: K(se, "reasonCode") ?? "",
        seqNum: K(se, "seqNum") ?? "",
        timeStamp: K(se, "timeStamp") ?? ""
      }
    };
  }
  async function re(z, U, ne) {
    const se = await t.db.table(qe).where({ tagName: "Communication" }).first();
    Ae(se, "Communication record not found in SCL");
    const H = await t.findChildRecordsWithinDepthAndGivenTagName(
      se,
      2,
      ["ConnectedAP"]
    ), [le] = await t.findParentRecordsWithinDepthAndGivenTagName(
      ne,
      4,
      ["AccessPoint"]
    );
    Ae(le, "AccessPoint record not found"), Ae(le.parent, "AccessPoint has no parent");
    const Ce = await t.db.table(qe).get(le.parent.id);
    Ae(Ce, "IED record not found");
    const Te = H.find(
      (Ge) => K(Ge, "iedName") === K(Ce, "name") && K(Ge, "apName") === K(le, "name")
    );
    Ae(Te, "ConnectedAP record for sending IED not found");
    const Fe = K(ne, "name") ?? "";
    z === ot.GOOSE && await k(U, Fe, Te), z === ot.SMV && await Z(U, Fe, Te);
  }
  async function Z(z, U, ne) {
    if ((await t.findChildRecords(ne, {
      tagNames: ["SMV"],
      attrs: [
        { name: "cbName", value: U },
        {
          name: "ldInst",
          value: K(z, "inst") ?? ""
        }
      ]
    }))[0])
      return;
    const H = await t.db.table(qe).where({ tagName: "SMV" }).toArray(), le = await t.createRecord(
      {
        tagName: "SMV",
        attributes: [
          { name: "cbName", value: U },
          {
            name: "ldInst",
            value: K(z, "inst") ?? ""
          }
        ]
      },
      ne
    ), Ce = await t.createRecord(
      {
        tagName: "Address"
      },
      le
    );
    await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_VLAN-ID",
            namespace: Wl
          },
          { name: "type", value: "VLAN-ID" }
        ],
        value: "000"
      },
      Ce
    ), await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_VLAN-PRIORITY",
            namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
          },
          { name: "type", value: "VLAN-PRIORITY" }
        ],
        value: "7"
      },
      Ce
    );
    const Te = [], Fe = [];
    for (const Ze of H) {
      const vt = await t.findChildRecords(Ze, {
        tagNames: ["Address"]
      });
      Ae(vt[0], "Address record not found in SMV communication");
      const st = await t.findChildRecords(vt[0], {
        tagNames: ["P"],
        attrs: [{ name: "type", value: "MAC-Address" }]
      });
      if (st[0]) {
        const x = st[0].value;
        Te.push(x);
      }
      const D = await t.findChildRecords(vt[0], {
        tagNames: ["P"],
        attrs: [{ name: "type", value: "APPID" }]
      });
      if (D[0]) {
        const x = D[0].value;
        Fe.push(x);
      }
    }
    const Ge = j(
      262144,
      262655,
      Te
    );
    await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_MAC-Address",
            namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
          },
          { name: "type", value: "MAC-Address" }
        ],
        value: Ge
      },
      Ce
    );
    const Qe = F(16384, 32767, Fe);
    await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_APPID",
            namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
          },
          { name: "type", value: "APPID" }
        ],
        value: Qe
      },
      Ce
    );
  }
  async function k(z, U, ne) {
    if ((await t.findChildRecords(ne, {
      tagNames: ["GSE"],
      attrs: [
        { name: "cbName", value: U },
        {
          name: "ldInst",
          value: K(z, "inst") ?? ""
        }
      ]
    }))[0])
      return;
    const H = await t.db.table(qe).where({ tagName: "GSE" }).toArray(), le = await t.createRecord(
      {
        tagName: "GSE",
        attributes: [
          { name: "cbName", value: U },
          {
            name: "ldInst",
            value: K(z, "inst") ?? ""
          }
        ]
      },
      ne
    ), Ce = await t.createRecord(
      {
        tagName: "Address"
      },
      le
    );
    await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_VLAN-ID",
            namespace: Wl
          },
          { name: "type", value: "VLAN-ID" }
        ],
        value: "000"
      },
      Ce
    ), await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_VLAN-PRIORITY",
            namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
          },
          { name: "type", value: "VLAN-PRIORITY" }
        ],
        value: "4"
      },
      Ce
    );
    const Te = [], Fe = [];
    for (const Ze of H) {
      const vt = await t.findChildRecords(Ze, {
        tagNames: ["Address"]
      });
      Ae(vt[0], "Address record not found in SMV communication");
      const st = await t.findChildRecords(vt[0], {
        tagNames: ["P"],
        attrs: [{ name: "type", value: "MAC-Address" }]
      });
      if (st[0]) {
        const x = st[0].value;
        Te.push(x);
      }
      const D = await t.findChildRecords(vt[0], {
        tagNames: ["P"],
        attrs: [{ name: "type", value: "APPID" }]
      });
      if (D[0]) {
        const x = D[0].value;
        Fe.push(x);
      }
    }
    const Ge = j(
      65536,
      66047,
      Te
    );
    await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_MAC-Address",
            namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
          },
          { name: "type", value: "MAC-Address" }
        ],
        value: Ge
      },
      Ce
    );
    const Qe = F(1, 16383, Fe);
    await t.createRecord(
      {
        tagName: "P",
        attributes: [
          {
            name: "type",
            value: "tP_APPID",
            namespace: { prefix: "xsi", uri: "http://www.w3.org/2001/XMLSchema-instance" }
          },
          { name: "type", value: "APPID" }
        ],
        value: Qe
      },
      Ce
    ), await t.createRecord(
      {
        tagName: "MinTime",
        attributes: [
          { name: "multiplier", value: "m" },
          { name: "unit", value: "s" }
        ],
        value: "5"
      },
      le
    ), await t.createRecord(
      {
        tagName: "MaxTime",
        attributes: [
          { name: "multiplier", value: "m" },
          { name: "unit", value: "s" }
        ],
        value: "10000"
      },
      le
    );
  }
  function j(z, U, ne) {
    const se = "01-0C-CD";
    for (let H = z; H <= U; H++) {
      const le = H.toString(16).toUpperCase().padStart(6, "0"), Ce = `${le.slice(0, 2)}-${le.slice(2, 4)}-${le.slice(4, 6)}`, Te = se + "-" + Ce;
      if (!ne.includes(Te))
        return Te;
    }
    throw new Error("No available MAC Address found in the specified range");
  }
  function F(z, U, ne) {
    for (let se = z; se <= U; se++) {
      const H = se.toString(16).toUpperCase().padStart(4, "0");
      if (!ne.includes(H))
        return H;
    }
    throw new Error("No available APPID found in the specified range");
  }
  async function X(z, U, ne) {
    const Ce = Lt().lnodeTypes.find(
      (Ge) => Ge.typeId === K(U, "lnType") && Ge.lnClass === K(U, "lnClass")
    )?.dataObjects.find(
      (Ge) => Ge.name === z.sourceDataObject
    )?.dataAttributes?.find(
      (Ge) => Ge.name === z.sourceDataAttribute
    ), Te = (await t.findChildRecords(ne, {
      tagNames: ["FCDA"],
      attrs: [
        { name: "daName", value: z.sourceDataAttribute },
        { name: "doName", value: z.sourceDataObject },
        { name: "fc", value: Ce?.fc ?? "" },
        { name: "ldInst", value: K(U, "ldInst") ?? "" },
        { name: "lnClass", value: K(U, "lnClass") ?? "" },
        { name: "lnInst", value: K(U, "lnInst") ?? "" },
        { name: "prefix", value: K(U, "prefix") ?? "" }
      ]
    }))[0];
    return Te || await t.createRecord(
      {
        tagName: "FCDA",
        attributes: [
          { name: "daName", value: z.sourceDataAttribute },
          { name: "doName", value: z.sourceDataObject },
          { name: "fc", value: Ce?.fc ?? "" },
          { name: "ldInst", value: K(U, "ldInst") ?? "" },
          { name: "lnClass", value: K(U, "lnClass") ?? "" },
          { name: "lnInst", value: K(U, "lnInst") ?? "" },
          { name: "prefix", value: K(U, "prefix") ?? "" }
        ]
      },
      ne
    );
  }
  async function A(z, U, ne) {
    let se;
    if (z === ot.SMV) {
      const Ce = U.slice(U.length - 2);
      se = "PhsMeas" + parseInt(Ce, 10);
    } else
      se = U + "_DS";
    const H = (await t.findChildRecords(ne, {
      tagNames: ["DataSet"],
      attrs: [{ name: "name", value: se }]
    }))[0];
    return H || await t.createRecord(
      {
        tagName: "DataSet",
        attributes: [{ name: "name", value: se }]
      },
      ne
    );
  }
  async function P(z, U, ne, se, H) {
    const le = (await t.findParentRecordsWithinDepthAndGivenTagName(U, 1 / 0, [
      "Function"
    ]))[0];
    Ae(
      le,
      "Parent Function of sending LNode not found when implementing dataflow"
    );
    let Ce;
    if (z.dataflowType === ot.GOOSE && (Ce = await de(
      U,
      ne,
      le,
      se,
      H
    )), z.dataflowType === ot.SMV && (Ce = await Y(
      U,
      ne,
      se,
      H
    )), z.dataflowType === ot.REPORT) {
      const Fe = K(U, "lnClass") === "MMXU";
      Ce = await J(
        U,
        ne,
        le,
        se,
        H,
        Fe
      );
    }
    return Ae(Ce, "Control Block record could not be created"), Ce;
  }
  async function J(z, U, ne, se, H, le) {
    const Ce = (K(ne, "name") + "_RPT").replaceAll(" ", "_"), Te = K(U, "iedName");
    Ae(Te, "iedName of receiving LNode not found");
    const Fe = await t.findChildRecordsByTagName(H, [
      "ReportControl"
    ]);
    for (const oe of Fe) {
      const R = K(oe, "name")?.startsWith(Ce), W = (await t.findChildRecordsWithinDepthAndGivenTagName(
        oe,
        2,
        ["ClientLN"]
      ))[0];
      Ae(W, "ClientLN record inside ReportControl not found");
      const ge = K(W, "iedName") === Te;
      if (R && ge)
        return Oe(oe), oe;
    }
    const Qe = Fe.filter(
      (oe) => K(oe, "name")?.startsWith(Ce) ?? !1
    ).length + 1, Ze = Ce + Qe, vt = N(
      z,
      se,
      Ze
    ), st = {
      tagName: "ReportControl",
      attributes: [
        { name: "name", value: Ze },
        { name: "confRev", value: "1" },
        { name: "rptID", value: vt }
      ]
    };
    le ? st.attributes.push({ name: "buffered", value: "false" }) : (st.attributes.push({ name: "buffered", value: "true" }), st.attributes.push({ name: "bufTime", value: "100" }));
    const D = await t.createRecord(st, H), x = {
      tagName: "TrgOps",
      attributes: [
        { name: "dchg", value: "true" },
        { name: "dupd", value: "false" },
        { name: "gi", value: "true" },
        { name: "period", value: "false" },
        { name: "qchg", value: "true" }
      ]
    };
    le ? x.attributes.push({ name: "dupd", value: "true" }) : x.attributes.push({ name: "dupd", value: "false" }), await t.createRecord(x, D), await t.createRecord(
      {
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
        ]
      },
      D
    );
    const V = await t.createRecord(
      {
        tagName: "RptEnabled",
        attributes: [{ name: "max", value: "5" }]
      },
      D
    );
    return await xe(V, U), D;
  }
  async function Oe(z) {
    const U = K(z, "confRev"), ne = U ? parseInt(U, 10) + 1 : 1;
    mn(z, "confRev", ne.toString()), await t.updateRecord(z);
  }
  async function Y(z, U, ne, se) {
    const H = K(U, "iedName");
    Ae(H, "iedName of receiving LNode not found");
    const le = await t.findChildRecordsByTagName(se, [
      "SampledValueControl"
    ]);
    for (const Ze of le) {
      const vt = (await t.findChildRecordsByTagName(Ze, ["IEDName"]))[0];
      if (Ae(vt, "IEDName record inside SampledValueControl not found"), vt.value === H)
        return Oe(Ze), Ze;
    }
    const Ce = "MSVCB", Te = le.length + 1;
    if (Te > 99)
      throw new Error("Maximum number of SampledValueControl elements (99) exceeded");
    const Fe = Ce + Te.toString().padStart(2, "0"), Ge = N(
      z,
      ne,
      Fe
    ), Qe = await t.createRecord(
      {
        tagName: "SampledValueControl",
        attributes: [
          { name: "name", value: Fe },
          { name: "confRev", value: "1" },
          { name: "smvID", value: Ge },
          { name: "multicast", value: "true" },
          { name: "nofASDU", value: "2" },
          { name: "smpMod", value: "SmpPerSec" },
          { name: "smpRate", value: "80" }
        ]
      },
      se
    );
    return await ie(Qe, H), await t.createRecord(
      {
        tagName: "SmvOpts",
        attributes: [
          { name: "refreshTime", value: "false" },
          { name: "sampleSynchronized", value: "true" },
          { name: "sampleRate", value: "false" },
          { name: "dataSet", value: "false" },
          { name: "security", value: "false" },
          { name: "synchSourceId", value: "true" }
        ]
      },
      Qe
    ), Qe;
  }
  async function ie(z, U) {
    const ne = await t.db.table(qe).where({ tagName: "IED" }).and((H) => K(H, "name") === U).first();
    Ae(ne, "IED record of receiving LNode not found");
    const se = (await t.findChildRecordsByTagName(ne, ["AccessPoint"]))[0];
    Ae(se, "AccessPoint record of receiving IED not found"), await t.createRecord(
      {
        tagName: "IEDName",
        attributes: [
          {
            name: "apRef",
            value: K(se, "name") ?? ""
          }
        ],
        value: U ?? ""
      },
      z
    );
  }
  async function xe(z, U) {
    const ne = K(U, "iedName"), se = await t.db.table(qe).where({ tagName: "IED" }).and((le) => K(le, "name") === ne).first();
    Ae(se, "IED record of receiving LNode not found");
    const H = (await t.findChildRecordsByTagName(se, ["AccessPoint"]))[0];
    Ae(H, "AccessPoint record of receiving IED not found"), await t.createRecord(
      {
        tagName: "ClientLN",
        attributes: [
          {
            name: "apRef",
            value: K(H, "name") ?? ""
          },
          { name: "iedName", value: ne ?? "" },
          { name: "ldInst", value: K(U, "ldInst") ?? "" },
          { name: "prefix", value: K(U, "prefix") ?? "" },
          { name: "lnClass", value: K(U, "lnClass") ?? "" },
          { name: "lnInst", value: K(U, "lnInst") ?? "" }
        ]
      },
      z
    );
  }
  function N(z, U, ne) {
    const se = K(z, "iedName"), H = K(U, "inst");
    return `${se}${H}/LN0.${ne}`;
  }
  async function de(z, U, ne, se, H) {
    const le = (K(ne, "name") + "_GSE").replaceAll(" ", "_"), Ce = K(U, "iedName");
    Ae(Ce, "iedName of receiving LNode not found");
    const Te = await t.findChildRecordsByTagName(H, [
      "GSEControl"
    ]);
    for (const st of Te) {
      const x = K(st, "name")?.startsWith(le), V = (await t.findChildRecordsByTagName(st, ["IEDName"]))[0];
      Ae(V, "IEDName record inside GSEControl not found");
      const oe = V.value === Ce;
      if (x && oe)
        return Oe(st), st;
    }
    const Ge = Te.filter(
      (st) => K(st, "name")?.startsWith(le) ?? !1
    ).length + 1, Qe = le + Ge, Ze = N(
      z,
      se,
      Qe
    ), vt = await t.createRecord(
      {
        tagName: "GSEControl",
        attributes: [
          { name: "name", value: Qe },
          { name: "confRev", value: "1" },
          { name: "appID", value: Ze },
          { name: "type", value: "GOOSE" }
        ]
      },
      H
    );
    return await ie(vt, Ce), vt;
  }
  async function Q(z, U, ne) {
    Ae(
      z.sourceLnodeId,
      "Source LNode ID not set for dataflow connection to implement"
    ), Ae(z.dataflowType, "Dataflow type not set for dataflow connection to implement");
    const se = await t.db.table(qe).get(U.id);
    Ae(se, "ExtRef record not found"), mn(se, "doName", z.sourceDataObject), mn(se, "daName", z.sourceDataAttribute), mn(se, "serviceType", z.dataflowType);
    const H = await t.db.table(qe).get(z.sourceLnodeId);
    Ae(H, "Sending LNode record not found"), mn(
      se,
      "iedName",
      K(H, "iedName") ?? ""
    ), mn(
      se,
      "ldInst",
      K(H, "ldInst") ?? ""
    ), mn(
      se,
      "lnClass",
      K(H, "lnClass") ?? ""
    ), mn(
      se,
      "lnInst",
      K(H, "lnInst") ?? ""
    ), mn(
      se,
      "prefix",
      K(H, "prefix") ?? ""
    ), mn(se, "srcCBName", ne);
    const le = await l(z.sourceLnodeId);
    Ae(le, "LDevice for sending LNode not found");
    const Ce = (await t.findChildRecords(le, { tagNames: ["LN0"] }))[0];
    Ae(Ce, "LN0 record not found"), mn(
      se,
      "srcLDInst",
      K(le, "inst") ?? ""
    ), mn(
      se,
      "srcLNClass",
      K(Ce, "lnClass") ?? ""
    ), await t.updateRecord(se);
  }
  async function he(z, U, ne) {
    Ae(
      z.destinationLnodeId,
      "Destination LNode ID not set for dataflow connection to implement"
    );
    const se = await t.db.table(qe).get(z.id);
    Ae(se, "SourceRef record not found");
    const H = K(U, "iedName"), le = K(U, "ldInst");
    Ae(H, "iedName of receiving LNode not found"), Ae(le, "ldInst of receiving LNode not found");
    const Ce = await i(z.destinationLnodeId);
    Ae(Ce, "LN record for receiving LNode not found");
    const Te = K(Ce, "prefix"), Fe = K(Ce, "lnClass");
    Ae(Fe, "lnClass of receiving LN record not found");
    const Ge = K(Ce, "inst");
    if (ne.intAddr) {
      const Qe = `${H}${le}/${Te ?? ""}${Fe}${Ge ?? ""}.${ne.intAddr}`;
      mn(se, "extRefAddr", Qe);
    }
    Ae(ne.uuid, "ExtRef UUID not found when updating SourceRef"), mn(se, "extRefUuid", ne.uuid), await t.updateRecord(se);
  }
  return {
    implementDataflow: d,
    findControlBlock: f,
    findDataSet: c,
    findFcdasForDataSet: m,
    findGseControlBlockDetails: q,
    findSmvControlBlockDetails: B,
    findReportControlBlockDetails: G,
    findPathToExtRef: g
  };
}
function lp(t) {
  return {
    id: t.id,
    name: K(t, "name") ?? "",
    confRev: K(t, "confRev") ?? "",
    datSet: K(t, "datSet") ?? ""
  };
}
function up(t) {
  return {
    id: t.id,
    name: K(t, "name") ?? ""
  };
}
function cp(t) {
  return {
    id: t.id,
    doName: K(t, "doName") ?? "",
    daName: K(t, "daName") ?? "",
    fc: K(t, "fc") ?? ""
  };
}
function sc(t) {
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
function Ti(t) {
  async function r(d) {
    let [f] = await t.findChildRecords(d, {
      tagNames: ["Private"],
      attrs: [{ name: "type", value: nn.v2019C1.prefix }]
    });
    f || (f = await t.createRecord(
      {
        tagName: "Private",
        attributes: [{ name: "type", value: nn.v2019C1.prefix }]
      },
      d
    ));
    let c = await t.findRecordById(d.id);
    return Ae(c), d.children = c.children, f;
  }
  async function i(d) {
    const c = (await t.findAncestors(d)).filter((B) => !!ip(B, "name")), m = An(d, "name"), g = c.reverse().map((B) => An(B, "name"));
    return g.push(m), g.join("/");
  }
  async function l(d) {
    const f = await t.findRecord({
      tagNames: ["ExtRef"],
      attr: { name: "uuid", value: d }
    });
    return Ae(f, `ExtRef record not found for uuid: ${d}`), sc(f);
  }
  return {
    ensurePrivateElement: r,
    generatePath: i,
    findExtRefByUuid: l
  };
}
const Wl = {
  prefix: "xsi",
  uri: "http://www.w3.org/2001/XMLSchema-instance"
};
function Zs(t) {
  const r = Lt(), {
    generatePathForLnode: i,
    generatePathForSourceRef: l,
    generatePathForControlRef: d,
    findFunctionRefsOfLnode: f
  } = qa(t);
  async function c(F) {
    const X = [];
    for (const A of F)
      (await t.findParentRecordsWithinDepthAndGivenTagName(
        A,
        3,
        ["Application"]
      )).length === 1 && X.push(A);
    return X;
  }
  async function m(F) {
    const X = /* @__PURE__ */ new Map();
    for (const A of F) {
      const P = await t.findParentRecordsWithinDepthAndGivenTagName(
        A,
        3,
        ["Application"]
      );
      P.length === 1 && X.set(A.id, P[0].id);
    }
    return X;
  }
  async function g(F, X) {
    const A = await f(F.id);
    if (A.length === 0)
      return;
    const P = await c(A);
    for (const J of P) {
      let Oe = (await t.findChildRecords(J, {
        tagNames: ["SignalRole"],
        attrs: [{ name: "name", value: "Input" }]
      }))[0];
      Oe || (Oe = await t.createRecord(
        {
          tagName: "SignalRole",
          attributes: [
            { name: "name", value: "Input" },
            { name: "uuid", value: crypto.randomUUID() }
          ],
          namespace: nn.v2019C1
        },
        J
      ));
      for (const Y of X)
        await t.createRecord(
          {
            tagName: "LNodeInputRef",
            attributes: [
              {
                name: "sourceRef",
                value: await l(F.id, Y)
              },
              { name: "sourceRefUuid", value: K(Y, "uuid") || "" }
            ],
            namespace: nn.v2019C1
          },
          Oe
        );
    }
  }
  async function q(F, X) {
    const A = await f(F.id);
    if (A.length === 0)
      return;
    const P = await c(A);
    for (const J of P) {
      let Oe = (await t.findChildRecords(J, {
        tagNames: ["SignalRole"],
        attrs: [{ name: "name", value: "Output" }]
      }))[0];
      Oe || (Oe = await t.createRecord(
        {
          tagName: "SignalRole",
          attributes: [
            { name: "name", value: "Output" },
            { name: "uuid", value: crypto.randomUUID() }
          ],
          namespace: nn.v2019C1
        },
        J
      )), await t.createRecord(
        {
          tagName: "LNodeOutputRef",
          attributes: [
            {
              name: "controlRef",
              value: await d(F.id, X)
            },
            {
              name: "controlRefUuid",
              value: K(X, "uuid") || ""
            }
          ],
          namespace: nn.v2019C1
        },
        Oe
      );
    }
  }
  async function B(F, X, A, P) {
    const J = await f(F.id);
    if (J.length === 0)
      return;
    const Oe = await c(J), Y = await i(F.id, X, A);
    for (const ie of Oe)
      await Z(
        ie,
        "Process",
        Y,
        F.uuid,
        X,
        A
      ), P === ot.REPORT && await Z(
        ie,
        "Signalisation",
        Y,
        F.uuid,
        X,
        A
      );
  }
  async function G(F, X) {
    const A = await f(F.id);
    if (A.length === 0)
      return;
    const P = await c(A), J = await i(F.id, X);
    for (const Oe of P)
      await Z(
        Oe,
        "Control",
        J,
        F.uuid,
        X
      );
  }
  async function re(F, X, A, P, J) {
    const Oe = await f(F.id), Y = await m(
      Oe
    ), ie = await f(X.id), xe = await m(
      ie
    );
    let N = "", de, Q;
    if (A === ot.CONTROL ? (N = await i(X.id, P), de = X, Q = ie.filter(
      (H) => Array.from(xe.keys()).includes(H.id)
    )) : (N = await i(F.id, P, J), de = F, Q = Oe.filter(
      (H) => Array.from(Y.keys()).includes(H.id)
    )), Q.length === 0)
      return;
    for (const H of Q)
      A === ot.REPORT && await Z(
        H,
        "Signalisation",
        N,
        de.uuid,
        P,
        J
      ), A === ot.CONTROL && await Z(
        H,
        "Control",
        N,
        de.uuid,
        P
      );
    const z = r.lnodeTypes.find((H) => H.lnClass === de.lnClass)?.dataObjects.find((H) => H.name === P);
    if (z) {
      const H = await t.db.table(qe).where({ tagName: "DOType" }).and((Ce) => K(Ce, "id") === z.type).first(), le = K(H, "cdc");
      if (le === "DPL" || le === "LPL" || le === "VSD")
        for (const Ce of Q)
          await Z(
            Ce,
            "Information",
            N,
            de.uuid,
            P,
            J
          );
      else {
        const Ce = de.dataObjectSpecifications?.find((Fe) => Fe.name === P)?.dataAttributeSpecifications.find((Fe) => Fe.name === J);
        if (await t.db.table(qe).where({ tagName: "Val", "parent.id": Ce?.id }).first())
          for (const Fe of Q)
            await Z(
              Fe,
              "Setting",
              N,
              de.uuid,
              P,
              J
            );
      }
    }
    let U = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
    function se(H, le) {
      const Ce = H.find((Te) => Te.id === le);
      if (!Ce)
        throw new Error(`FunctionRef with id ${le} not found`);
      return Ce;
    }
    if (Y.size === 0)
      ne = new Set(
        ie.filter(
          (H) => Array.from(xe.keys()).includes(H.id)
        )
      );
    else if (xe.size === 0)
      ne = new Set(
        Oe.filter(
          (H) => Array.from(Y.keys()).includes(H.id)
        )
      );
    else
      for (const [
        H,
        le
      ] of Y)
        for (const [
          Ce,
          Te
        ] of xe) {
          const Fe = se(
            Oe,
            H
          ), Ge = se(
            ie,
            Ce
          );
          le === Te ? (U.add(Fe), U.add(Ge)) : (ne.add(Fe), ne.add(Ge));
        }
    for (const H of Q)
      ne.has(H) && await Z(
        H,
        "Process",
        N,
        de.uuid,
        P,
        J
      ), U.has(H) && await Z(
        H,
        "Internal",
        N,
        de.uuid,
        P,
        J
      );
  }
  async function Z(F, X, A, P, J, Oe) {
    const Y = await k(F, X);
    await j(Y, A, P, J, Oe);
  }
  async function k(F, X) {
    let A = (await t.findChildRecords(F, {
      tagNames: ["SignalRole"],
      attrs: [{ name: "name", value: X }]
    }))[0];
    return A || (A = await t.createRecord(
      {
        tagName: "SignalRole",
        attributes: [
          { name: "name", value: X },
          { name: "uuid", value: crypto.randomUUID() }
        ],
        namespace: nn.v2019C1
      },
      F
    ), A);
  }
  async function j(F, X, A, P, J) {
    const Oe = [
      { name: "data", value: X },
      { name: "lnodeUuid", value: A },
      { name: "doName", value: P }
    ];
    J && Oe.push({ name: "daName", value: J }), (await t.findChildRecords(F, {
      tagNames: ["LNodeDataRef"],
      attrs: Oe
    }))[0] || await t.createRecord(
      {
        tagName: "LNodeDataRef",
        attributes: Oe,
        namespace: nn.v2019C1
      },
      F
    );
  }
  return {
    createApplicationReferencesForSourceRefs: g,
    createApplicationReferencesForControlRef: q,
    createApplicationReferencesForSourcePlaceholder: B,
    createApplicationReferencesForControlDestinationPlaceholder: G,
    createApplicationReferencesForDosAndDas: re
  };
}
function lc(t) {
  const { generatePath: r } = Ti(t), {
    generatePathForLnode: i,
    ensureLnodeInputsElement: l,
    ensureLnodeOutputsElement: d,
    ensureDosElement: f,
    ensureDasElement: c,
    findLnRecordForLnode: m
  } = qa(t), {
    createApplicationReferencesForDosAndDas: g,
    createApplicationReferencesForControlRef: q,
    createApplicationReferencesForSourceRefs: B
  } = Zs(t), G = Lt();
  async function re() {
    const N = await t.db.table(qe).where({ tagName: "SourceRef" }).toArray();
    if (!N.length) return [];
    const de = [];
    for (const Q of N) {
      if (!Q.attributes) continue;
      const he = K(Q, "sourceLNodeUuid"), z = await t.db.table(qe).where({ tagName: "LNode" }).toArray().then(
        (Ze) => Ze.find(
          (vt) => vt.attributes?.some(
            (st) => st.name === "uuid" && st.value === he
          )
        )
      ), U = await t.findParentRecordsWithinDepthAndGivenTagName(Q, 3, ["LNode"]);
      if (U.length !== 1) {
        const Ze = {
          msg: "Destination LNode record not found for SourceRef id",
          id: Q.id
        };
        throw console.error(Ze), new Error(JSON.stringify(Ze));
      }
      const ne = await t.db.table(qe).where({ tagName: "IED" }).toArray();
      let se = !1;
      const H = K(z, "iedName");
      if (H) {
        const Ze = ne.find(
          (vt) => K(vt, "name") === H
        );
        Ae(Ze, `IED record not found for iedName: ${H}`), se = K(Ze, "manufacturer") !== "S_IED";
      }
      let le = !1;
      const Ce = K(U[0], "iedName");
      if (Ce) {
        const Ze = ne.find(
          (vt) => K(vt, "name") === Ce
        );
        Ae(
          Ze,
          `IED record not found for iedName: ${Ce}`
        ), le = K(Ze, "manufacturer") !== "S_IED";
      }
      const Te = !se || !le;
      let Fe = !1;
      const Ge = K(Q, "extRefUuid");
      if (Ge) {
        const Ze = await t.findRecord({
          tagNames: ["ExtRef"],
          attr: { name: "uuid", value: Ge }
        });
        Ae(Ze, `ExtRef record not found for uuid: ${Ge}`), Fe = !!K(Ze, "srcCBName");
      }
      const Qe = fp(
        Q,
        z?.id ?? null,
        U[0].id,
        Fe,
        Te,
        Ge
      );
      de.push(Qe);
    }
    return de;
  }
  async function Z() {
    const N = await t.db.table(qe).where({ tagName: "ControlRef" }).toArray();
    if (!N.length) return [];
    const de = [];
    for (const Q of N) {
      if (!Q.attributes) continue;
      const he = K(Q, "controlledLNodeUuid"), z = K(Q, "controlledDoName"), U = await t.db.table(qe).where({ tagName: "LNode" }).toArray().then(
        (H) => H.find(
          (le) => le.attributes?.some(
            (Ce) => Ce.name === "uuid" && Ce.value === he
          )
        )?.id
      ) ?? null, ne = await t.findParentRecordsWithinDepthAndGivenTagName(
        Q,
        3,
        // ControlRef ->  LNodeOutputs -> Private -> LNode
        ["LNode"]
      );
      if (ne.length !== 1) {
        const H = {
          msg: "LNode record not found for ControlRef id",
          id: Q.id
        };
        throw console.error(H), new Error(JSON.stringify(H));
      }
      const se = {
        controllerLnodeId: ne[0].id,
        controlledLnodeId: U,
        controlledDataObject: z ?? "",
        dataflowType: ot.CONTROL,
        outputInstance: K(Q, "outputInst") ?? "",
        outputName: K(Q, "output") ?? "",
        id: Q.id,
        preferredLnode: K(Q, "pLN") ?? "",
        preferredDataObject: K(Q, "pDO") ?? "",
        processResource: K(Q, "resourceName") ?? ""
      };
      de.push(se);
    }
    return de;
  }
  async function k(N, de, Q, he) {
    const z = await l(Q), U = await X(
      de,
      z,
      N
    ), ne = await f(de, N.signal);
    await c(
      de,
      ne,
      N.attribute,
      N.includeQuality,
      N.includeTimestamp
    ), he && (await B(Q, U), await g(
      de,
      Q,
      N.type,
      N.signal,
      N.attribute
    ), N.includeQuality && await g(
      de,
      Q,
      N.type,
      N.signal,
      "q"
    ), N.includeTimestamp && await g(
      de,
      Q,
      N.type,
      N.signal,
      "t"
    )), await G.refreshConnections(), await G.refreshLnode(de.id), await G.refreshPlaceholders();
  }
  async function j(N, de, Q, he) {
    const z = await d(de), U = pp(
      N,
      Q
    ), ne = await A(U);
    await t.ensureRelationship(z, ne), await f(Q, N.controlledSignal), he && (await q(de, ne), await g(
      de,
      Q,
      N.type,
      N.controlledSignal
    )), await G.refreshConnections(), await G.refreshLnode(Q.id);
  }
  async function F(N) {
    let de;
    N.processResourceId && (de = await t.db.table(qe).get(N.processResourceId), Ae(de, "ProcessResource record not found"));
    let Q = "";
    if (N.sourceLnodeUuid) {
      const z = await t.db.table(qe).where({ tagName: "LNode" }).and((U) => K(U, "uuid") === N.sourceLnodeUuid).first();
      Ae(z, "Source LNode record not found"), Q = await i(
        z.id,
        N.sourceDoName,
        N.sourceDaName
      );
    }
    const he = {
      tagName: "SourceRef",
      namespace: nn.v2019C1,
      attributes: [
        {
          name: "pLN",
          value: N.pLN
        },
        {
          name: "pDO",
          value: N.pDO
        },
        {
          name: "pDA",
          value: N.pDA
        },
        {
          name: "input",
          value: N.inputName
        },
        {
          name: "inputInst",
          value: N.inputInstance
        },
        {
          name: "service",
          value: N.dataflowType || ""
        },
        {
          name: "sourceLNodeUuid",
          value: N.sourceLnodeUuid
        },
        {
          name: "sourceDoName",
          value: N.sourceDoName
        },
        {
          name: "sourceDaName",
          value: N.sourceDaName
          // TODO: in the example SSD this was a combination fo SDS and DA name
        },
        {
          name: "uuid",
          value: crypto.randomUUID()
        },
        {
          name: "source",
          value: Q
        },
        {
          name: "resourceUuid",
          value: K(de, "uuid") || ""
        },
        {
          name: "resourceName",
          value: de ? await r(de) : ""
        }
      ]
    };
    return await t.createRecord(he);
  }
  async function X(N, de, Q) {
    const he = [], z = await F(
      cs(Q, N)
    );
    if (he.push(z), await t.ensureRelationship(de, z), Q.includeQuality) {
      const U = {
        ...Q,
        attribute: "q"
        // Set to 'q' for Quality
      }, ne = await F(
        cs(U, N)
      );
      he.push(ne), await t.ensureRelationship(de, ne);
    }
    if (Q.includeTimestamp) {
      const U = {
        ...Q,
        attribute: "t"
        // Set to 't' for Timestamp
      }, ne = await F(
        cs(U, N)
      );
      he.push(ne), await t.ensureRelationship(de, ne);
    }
    return he;
  }
  async function A(N) {
    let de;
    N.processResourceId && (de = await t.db.table(qe).get(N.processResourceId), Ae(de, "ProcessResource record not found"));
    let Q = "";
    if (N.controlledLnodeUuid) {
      const z = await t.db.table(qe).where({ tagName: "LNode" }).and((U) => K(U, "uuid") === N.controlledLnodeUuid).first();
      Ae(z, "Controlled LNode record not found"), Q = await i(
        z.id,
        N.controlledDoName
      );
    }
    const he = {
      tagName: "ControlRef",
      namespace: nn.v2019C1,
      attributes: [
        {
          name: "pDO",
          value: N.pDO
        },
        {
          name: "pLN",
          value: N.pLN
        },
        {
          name: "controlled",
          value: Q
        },
        {
          name: "output",
          value: N.output
        },
        {
          name: "outputInst",
          value: N.outputInst
        },
        {
          name: "controlledLNodeUuid",
          value: N.controlledLnodeUuid
        },
        {
          name: "controlledDoName",
          value: N.controlledDoName
        },
        {
          name: "uuid",
          value: crypto.randomUUID()
        },
        {
          name: "resourceUuid",
          value: K(de, "uuid") || ""
        },
        {
          name: "resourceName",
          value: de ? await r(de) : ""
        }
      ]
    };
    return await t.createRecord(he);
  }
  async function P(N, de, Q) {
    const he = await l(Q), ne = (await t.findChildRecordsByTagName(he, [
      "SourceRef"
    ])).map((se) => ({
      input: K(se, "input"),
      pDA: K(se, "pDA")
    })).filter(
      (se) => se.input === N && se.pDA === de
    );
    return ne.length === 0 ? 1 : ne.length + 1;
  }
  async function J(N, de) {
    const Q = await d(de), U = (await t.findChildRecordsByTagName(Q, [
      "ControlRef"
    ])).map((ne) => K(ne, "output")).filter((ne) => !!ne).filter(
      (ne) => ne === N
    );
    return U.length === 0 ? 1 : U.length + 1;
  }
  async function Oe(N) {
    const de = await l(N), he = (await t.findChildRecordsByTagName(de, [
      "SourceRef"
    ])).map((U) => K(U, "input")).filter((U) => !!U);
    return Array.from(new Set(he));
  }
  async function Y(N) {
    const de = await d(N), he = (await t.findChildRecordsByTagName(de, [
      "ControlRef"
    ])).map((U) => K(U, "output")).filter((U) => !!U);
    return Array.from(new Set(he));
  }
  async function ie(N) {
    if (!dp(N))
      return;
    const de = await m(N.destinationLnodeId);
    if (!de)
      return;
    const he = (await t.findChildRecordsWithinDepthAndGivenTagName(
      de,
      2,
      ["ExtRef"]
    )).filter((U) => {
      const ne = K(U, "pLN") === N.preferredLnode && K(U, "pDO") === N.preferredDataObject && K(U, "pDA") === N.preferredDataAttribute;
      Ae(
        N.dataflowType,
        "Dataflow type not set for dataflow connection to implement"
      );
      const se = K(U, "pServT"), H = se === void 0 || se === N.dataflowType, le = K(U, "srcCBName");
      return ne && H && !(le !== void 0 && le !== "");
    }), z = [];
    for (const U of he) {
      if (!K(U, "uuid")) {
        z.push(U);
        continue;
      }
      await t.db.table(qe).where({ tagName: "SourceRef" }).and(
        (se) => (!!K(se, "extRefUuid") && K(se, "extRefUuid")) === K(U, "uuid")
      ).first() || z.push(U);
    }
    return z[0];
  }
  async function xe(N) {
    const de = await t.db.table(qe).get(N.id);
    Ae(de, "SourceRef record not found");
    const Q = K(de, "extRefUuid");
    let he;
    if (Q) {
      if (he = await t.db.table(qe).where({ tagName: "ExtRef" }).and((z) => K(z, "uuid") === Q).first(), !he)
        throw new Error(`ExtRef with uuid ${Q} not found`);
    } else {
      const z = await ie(N);
      if (!z)
        return null;
      he = z;
    }
    return sc(he);
  }
  return {
    findAllExistingConnections: re,
    findAllExistingControlledConnections: Z,
    findExistingInputs: Oe,
    findExistingOutputs: Y,
    findMatchingExtRef: xe,
    createControlledConnection: j,
    createConnection: k,
    addSourceRefElement: F,
    addControlRefElement: A,
    calculateNextInputInstance: P,
    calculateNextOutputInstance: J
  };
}
function dp(t) {
  return t.preferredLnode.trim() !== "" && t.preferredDataObject.trim() !== "" && t.preferredDataAttribute.trim() !== "";
}
function fp(t, r, i, l, d, f) {
  return {
    id: t.id,
    sourceLnodeId: r,
    destinationLnodeId: i,
    sourceDataObject: K(t, "sourceDoName") ?? "",
    sourceDataAttribute: K(t, "sourceDaName") ?? "",
    dataflowType: Js(t, "service"),
    inputInstance: K(t, "inputInst") ?? "",
    input: K(t, "input") ?? "",
    preferredLnode: K(t, "pLN") ?? "",
    preferredDataObject: K(t, "pDO") ?? "",
    preferredDataAttribute: K(t, "pDA") ?? "",
    processResource: K(t, "resourceName") ?? "",
    isImplemented: l,
    notPossibleToImplement: d,
    extRefUuid: f
  };
}
function cs(t, r) {
  return {
    dataflowType: t.type,
    inputName: t.inputName,
    inputInstance: t.inputInstance,
    sourceLnodeUuid: r.uuid,
    processResourceId: "",
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
function pp(t, r) {
  return {
    pDO: t.controlledSignal,
    pLN: r.lnClass,
    output: t.outputName,
    outputInst: t.outputInstance,
    controlledLnodeUuid: r.uuid,
    controlledDoName: t.controlledSignal,
    processResourceId: ""
  };
}
function hp(t) {
  const {
    findAllEnrichedLnodes: r,
    findAllLnodes: i,
    ensureLnodeInputsElement: l,
    ensureLnodeOutputsElement: d,
    ensureDosElement: f,
    ensureDasElement: c
  } = qa(t), { addSourceRefElement: m, addControlRefElement: g } = lc(t), {
    createApplicationReferencesForSourceRefs: q,
    createApplicationReferencesForControlRef: B,
    createApplicationReferencesForSourcePlaceholder: G,
    createApplicationReferencesForControlDestinationPlaceholder: re
  } = Zs(t), { generatePath: Z } = Ti(t), k = Lt();
  async function j() {
    let Q = [];
    const he = await r();
    if (!he.length) return Q;
    for (const U of he) {
      const ne = U.dataObjectSpecifications ?? [];
      for (const se of ne) {
        const H = se.dataAttributeSpecifications ?? [];
        for (const le of H) {
          const Ce = le.subscriberLnodes ?? [];
          for (const Te of Ce)
            Q.push({
              lnodeId: U.id,
              id: Te.id,
              dataObject: se.name,
              dataAttribute: le.name,
              dataflowType: Te.service,
              preferredLnode: Te.pLN,
              input: Te.inputName,
              processResource: Te.resourceName,
              isFulfilled: void 0
            });
        }
      }
    }
    return await N(Q);
  }
  async function F() {
    let Q = [];
    const he = await r();
    if (!he.length) return Q;
    for (const z of he) {
      const U = z.dataObjectSpecifications ?? [];
      for (const ne of U) {
        const se = await t.db.table(qe).get(ne.id);
        Ae(se, `DOS record with id ${ne.id} not found`);
        const H = await t.findChildRecords(se, {
          tagNames: ["ControllingLNode"]
        });
        for (const le of H)
          Q.push({
            id: le.id,
            lnodeId: z.id,
            dataObject: ne.name,
            outputName: An(le, "outputName"),
            preferredLnode: K(le, "pLN") ?? "",
            processResource: K(le, "resourceName") ?? ""
          });
      }
    }
    return Q;
  }
  async function X() {
    const Q = [], z = (await Y()).filter((ne) => !ne.source && !ne.sourceLnodeUuid);
    for (const ne of z) {
      const se = await xe(ne.id, 3);
      Q.push({
        id: ne.id,
        dataflowType: ne.dataflowType,
        preferredLnode: ne.pLN,
        preferredDataObject: ne.pDO,
        preferredDataAttribute: ne.pDA,
        sourceLnodeUuid: ne.sourceLnodeUuid,
        source: ne.source,
        input: ne.input,
        inputInst: ne.inputInst,
        processResource: ne.processResource,
        lnodeId: se,
        isFulfilled: void 0
      });
    }
    return await de(Q);
  }
  async function A(Q, he, z) {
    const U = await l(he), ne = await mp(Q), se = await m(ne);
    await t.ensureRelationship(U, se), z && await q(he, [se]), await k.refreshPlaceholders();
  }
  async function P(Q, he, z) {
    let U = [{ name: "outputName", value: Q.outputName }];
    if (Q.preferredLnode && U.push({ name: "pLN", value: Q.preferredLnode }), Q.processResourceId) {
      const H = await t.db.table(qe).get(Q.processResourceId);
      Ae(H, "ProcessResource record not found");
      const le = await Z(H);
      U.push({
        name: "resourceName",
        value: le
      }), U.push({
        name: "resourceUuid",
        value: An(H, "uuid")
      });
    }
    const ne = he.dataObjectSpecifications?.find(
      (H) => H.name === Q.dataObject
    );
    let se;
    if (ne ? se = await t.findRecordById(ne.id) : se = await f(he, Q.dataObject), !se) {
      const H = "DOS element could not be found or created for destination placeholder";
      throw new Error(JSON.stringify(H));
    }
    await t.createRecord(
      {
        tagName: "ControllingLNode",
        attributes: U,
        namespace: nn.v2019C1
      },
      se
    ), z && await re(
      he,
      Q.dataObject
    ), await k.refreshLnode(he.id), await k.refreshPlaceholders();
  }
  async function J(Q, he, z) {
    let U = [{ name: "inputName", value: he.inputName }];
    if (he.preferredLnode && U.push({ name: "pLN", value: he.preferredLnode }), he.dataflowType && U.push({ name: "service", value: he.dataflowType }), he.processResourceId) {
      const H = await t.db.table(qe).get(he.processResourceId);
      Ae(H, "ProcessResource record not found");
      const le = await Z(H);
      U.push({
        name: "resourceName",
        value: le
      }), U.push({
        name: "resourceUuid",
        value: An(H, "uuid")
      });
    }
    const ne = await f(Q, he.dataObject), se = await c(Q, ne, he.dataAttribute);
    if (!se) {
      const H = "DAS element could not be found or created for source placeholder";
      throw new Error(JSON.stringify(H));
    }
    await t.createRecord(
      {
        tagName: "SubscriberLNode",
        attributes: U,
        namespace: nn.v2019C1
      },
      se
    ), z && await G(
      Q,
      he.dataObject,
      he.dataAttribute,
      he.dataflowType || void 0
    ), await k.refreshLnode(Q.id), await k.refreshPlaceholders();
  }
  async function Oe(Q, he, z) {
    const U = await d(he), ne = vp(Q), se = await g(ne);
    await t.ensureRelationship(U, se), z && await B(he, se), await k.refreshPlaceholders(), await k.refreshConnections();
  }
  async function Y() {
    const he = (await t.db.table(qe).where({ tagName: "SourceRef" }).toArray()).map(async (U) => ({
      id: U.id,
      uuid: K(U, "uuid") ?? "",
      pDO: K(U, "pDO") ?? "",
      pDA: K(U, "pDA") ?? "",
      pLN: K(U, "pLN") ?? "",
      input: K(U, "input") ?? "",
      inputInst: K(U, "inputInst") ?? "",
      source: K(U, "source") ?? "",
      sourceLnodeUuid: K(U, "sourceLNodeUuid") ?? "",
      dataflowType: Js(U, "service"),
      sourceDoName: K(U, "sourceDoName") ?? "",
      sourceDaName: K(U, "sourceDaName") ?? "",
      processResource: K(U, "resourceName") ?? "",
      // Add the lnClass for finding fulfilled placeholders
      lnClassOfParentLnode: await ie(U.id, 3)
    }));
    return await Promise.all(he);
  }
  async function ie(Q, he) {
    const z = await t.db.table(qe).get(Q);
    if (z) {
      const U = await t.findParentRecordsWithinDepthAndGivenTagName(
        z,
        he,
        ["LNode"]
      );
      return K(U[0], "lnClass");
    } else return "";
  }
  async function xe(Q, he) {
    const z = await t.db.table(qe).get(Q);
    if (z)
      return (await t.findParentRecordsWithinDepthAndGivenTagName(
        z,
        he,
        ["LNode"]
      ))?.[0]?.id ?? void 0;
  }
  async function N(Q) {
    const he = await Y(), z = [];
    for (const U of Q) {
      const ne = he.some((se) => !(U.preferredLnode && U.preferredLnode !== se.lnClassOfParentLnode || U.dataflowType && U.dataflowType !== se.dataflowType || U.dataObject && U.dataObject !== se.sourceDoName || U.dataAttribute && U.dataAttribute !== se.sourceDaName));
      z.push({
        ...U,
        isFulfilled: ne
      });
    }
    return z;
  }
  async function de(Q) {
    const he = await Y(), z = await i(), U = [];
    for (const ne of Q) {
      let se = !1;
      for (const H of he)
        if (!(H.id === ne.id || !H.source || !H.sourceLnodeUuid || await xe(H.id, 3) !== ne.lnodeId) && ne.input === H.input && !(ne.dataflowType && ne.dataflowType !== H.dataflowType)) {
          if (ne.preferredLnode) {
            const Te = z.find((Fe) => Fe.uuid === H.sourceLnodeUuid)?.lnClass;
            if (!Te || Te !== ne.preferredLnode) continue;
          }
          if (!(ne.preferredDataObject && ne.preferredDataObject !== H.sourceDoName) && !(ne.preferredDataAttribute && ne.preferredDataAttribute !== H.sourceDaName)) {
            se = !0;
            break;
          }
        }
      U.push({
        ...ne,
        isFulfilled: se
      });
    }
    return U;
  }
  return {
    findAllSourcePlaceholders: j,
    findAllDestinationPlaceholdersForControlDataflow: F,
    findAllDestinationPlaceholders: X,
    createControlDestinationPlaceholder: P,
    createControlSourcePlaceholder: Oe,
    createSourcePlaceholder: J,
    createDestinationPlaceholder: A
  };
}
async function mp(t) {
  return {
    dataflowType: t.dataflowType,
    inputName: t.inputName,
    inputInstance: t.inputInstance,
    sourceLnodeUuid: "",
    processResourceId: t.processResourceId,
    sourceDoName: "",
    sourceDaName: "",
    pLN: t.preferredLnode,
    pDO: t.preferredDataObject,
    pDA: t.preferredDataAttribute
  };
}
function vp(t) {
  return {
    pDO: t.preferredDataObject,
    pLN: t.preferredLnode,
    output: t.outputName,
    outputInst: t.outputInstance,
    controlledLnodeUuid: "",
    controlledDoName: "",
    processResourceId: t.processResourceId
  };
}
async function yp(t) {
  const r = new ci(t);
  await r.open();
  const i = op(r);
  return gp(i);
}
function gp(t) {
  return {
    ...Ti(t),
    ...qa(t),
    ...hp(t),
    ...lc(t),
    ...Zs(t),
    ...sp(t),
    dbRepository: t
  };
}
const Lt = /* @__PURE__ */ Qs("dataflow/app", () => {
  const t = Ue(""), r = Yn(), i = Yn(), l = Ue([]), d = Ue([]), f = Ue([]), c = Ue([]), m = Ue([]), g = Ue([]), q = Ue([]);
  async function B(j) {
    i.value = await yp(j), t.value = j, r.value = i.value.dbRepository, l.value = await i.value.findAllEnrichedLnodes(), d.value = await i.value.findAllLnodeTypes(), f.value = await i.value.findAllExistingConnections(), c.value = await i.value.findAllExistingControlledConnections(), m.value = await i.value.findAllSourcePlaceholders(), g.value = await i.value.findAllDestinationPlaceholdersForControlDataflow(), q.value = await i.value.findAllDestinationPlaceholders();
  }
  function G() {
  }
  async function re() {
    f.value = await i.value.findAllExistingConnections(), c.value = await i.value.findAllExistingControlledConnections();
  }
  async function Z(j) {
    const X = (await i.value.findAllEnrichedLnodes()).find((A) => A.id === j);
    if (X) {
      const A = l.value.findIndex((P) => P.id === j);
      A !== -1 && (l.value[A] = X);
    }
  }
  async function k() {
    m.value = await i.value.findAllSourcePlaceholders(), g.value = await i.value.findAllDestinationPlaceholdersForControlDataflow(), q.value = await i.value.findAllDestinationPlaceholders();
  }
  return {
    // states
    activeFilename: t,
    lnodes: l,
    lnodeTypes: d,
    connections: f,
    controlledConnections: c,
    sourcePlaceholders: m,
    destinationPlaceholdersForControlDataflow: g,
    destinationPlaceholders: q,
    // getters
    sdk: i,
    // actions
    initApp: B,
    closeDatabase: G,
    refreshConnections: re,
    refreshLnode: Z,
    refreshPlaceholders: k
  };
}), bp = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, wp = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, _p = { class: "mt-4" }, xp = { key: 0 }, Cp = { class: "mt-4" }, Sp = /* @__PURE__ */ Ot({
  __name: "controlled-dataflow.sidebar-details",
  props: {
    controlledConnection: {}
  },
  setup(t) {
    const r = t, i = Lt(), { lnodes: l } = Mt(i), d = Xe(() => l.value.find(
      (c) => c.id === r.controlledConnection.controlledLnodeId
    )?.dataObjectSpecifications?.find(
      (c) => c.name === r.controlledConnection.controlledDataObject
    ));
    return (f, c) => (te(), pe(Be, null, [
      c[7] || (c[7] = p("h2", { class: "text-lg font-bold mb-2" }, "Specified Controlled Dataflow", -1)),
      f.controlledConnection.dataflowType ? (te(), pe("span", bp, ce(f.controlledConnection.dataflowType), 1)) : ze("", !0),
      p("dl", wp, [
        p("div", null, [
          c[0] || (c[0] = p("dt", null, "Output:", -1)),
          p("dd", null, ce(f.controlledConnection.outputName), 1)
        ]),
        p("div", null, [
          c[1] || (c[1] = p("dt", null, "Output Instance:", -1)),
          p("dd", null, ce(f.controlledConnection.outputInstance || "-"), 1)
        ]),
        p("div", _p, [
          c[2] || (c[2] = p("dt", null, "Controlled DO:", -1)),
          p("dd", null, ce(f.controlledConnection.controlledDataObject || "-"), 1)
        ]),
        d.value?.desc ? (te(), pe("div", xp, [
          c[3] || (c[3] = p("dt", null, "Controlled DO Desc:", -1)),
          p("dd", null, ce(d.value.desc), 1)
        ])) : ze("", !0),
        p("div", null, [
          c[4] || (c[4] = p("dt", null, "Preferred LN:", -1)),
          p("dd", null, ce(f.controlledConnection.preferredLnode || "-"), 1)
        ]),
        p("div", Cp, [
          c[5] || (c[5] = p("dt", null, "Preferred DO:", -1)),
          p("dd", null, ce(f.controlledConnection.preferredDataObject || "-"), 1)
        ]),
        p("div", null, [
          c[6] || (c[6] = p("dt", null, "Process Resource:", -1)),
          p("dd", null, ce(f.controlledConnection.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), Ip = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]" }, Op = ["onClick"], Np = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, Tp = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm" }, Ep = ["onClick"], Dp = ["onClick"], Rp = ["data-testid"], Ap = ["onClick"], Pp = ["onClick"], kp = ["onClick"], Lp = ["onClick"], jp = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, $p = /* @__PURE__ */ Ot({
  __name: "controlled-dataflows",
  props: {
    controlledConnections: {}
  },
  setup(t) {
    const r = Ni(), { activeElement: i } = Mt(r);
    return (l, d) => (te(!0), pe(Be, null, ft(l.controlledConnections, (f, c) => (te(), pe("div", Ip, [
      p("div", {
        onClick: (m) => $e(r).setOrResetActiveElement(f.id),
        class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
      }, [
        p("span", Np, ce(f.outputName), 1),
        p("span", Tp, ce(f.outputInstance), 1)
      ], 8, Op),
      p("div", {
        onClick: (m) => $e(r).setOrResetActiveElement(f.id),
        class: It(["rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": $e(i) === f.id,
          "bg-(--color-ocean-gray-100)": $e(i) !== f.id
        }])
      }, null, 10, Ep),
      p("div", {
        class: "col-start-3 col-span-1 row-start-1 hover:cursor-pointer flex items-center",
        onClick: (m) => $e(r).setOrResetActiveElement(f.id)
      }, [
        p("div", {
          class: It(["h-[2px] w-full", {
            "bg-(--color-primary)": $e(i) === f.id,
            "bg-(--color-ocean-gray-100)": $e(i) !== f.id
          }]),
          "data-testid": `dataflow-controlled-connection-line-${c}`
        }, null, 10, Rp)
      ], 8, Dp),
      (te(), pe("svg", {
        onClick: (m) => $e(r).setOrResetActiveElement(f.id),
        height: "12",
        width: "8",
        class: "col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1 hover:cursor-pointer",
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        p("polygon", {
          points: "0,0 8,6 0,12",
          style: kr({
            fill: $e(i) === f.id ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
          })
        }, null, 4)
      ], 8, Ap)),
      p("div", {
        onClick: (m) => $e(r).setOrResetActiveElement(f.id),
        class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer"
      }, ce(f.dataflowType), 9, Pp),
      p("div", {
        onClick: (m) => $e(r).setOrResetActiveElement(f.id),
        class: It(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
          "bg-(--color-primary)": $e(i) === f.id,
          "bg-(--color-ocean-gray-100)": $e(i) !== f.id
        }])
      }, null, 10, kp),
      p("div", {
        onClick: (m) => $e(r).setOrResetActiveElement(f.id),
        class: "col-start-5 col-span-1 self-center justify-self-start hover:cursor-pointer"
      }, [
        p("span", jp, ce(f.controlledDataObject), 1)
      ], 8, Lp),
      $e(i) == f.id ? (te(), kt(No, {
        key: 0,
        to: "#sidebar-details"
      }, [
        yt(Sp, { "controlled-connection": f }, null, 8, ["controlled-connection"])
      ])) : ze("", !0)
    ]))), 256));
  }
}), Fp = { class: "grid grid-cols-2 gap-4" }, Mp = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Bp = ["value"], Kp = { class: "grid grid-cols-2 gap-4" }, qp = ["value", "title"], Up = { class: "grid grid-cols-2 gap-4" }, Vp = ["value", "title"], Wp = { class: "grid grid-cols-2 gap-4" }, Gp = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, Hp = ["value"], zp = { class: "grid grid-cols-2 gap-4" }, Yp = { class: "flex items-center" }, Xp = { class: "flex items-center" }, Qp = ["value"], Jp = { class: "grid grid-cols-2 gap-4" }, Zp = { class: "flex items-center" }, eh = /* @__PURE__ */ Ot({
  __name: "dataflow-form",
  props: {
    sourceLnode: {},
    destinationLnode: {},
    dataflowType: {},
    sourcePlaceholder: {},
    destinationPlaceholder: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { lnodeTypes: d, sdk: f } = Mt(l), c = Ue(Z()), m = Ue(!1), g = Ue([]), q = Ue(!0);
    Do(async () => {
      g.value = await f.value.findExistingInputs(r.destinationLnode);
    }), Ut(m, (A) => {
      A ? c.value.inputName = "" : c.value.inputName = c.value.signal;
    }), Ut(
      [
        () => c.value.inputName,
        () => c.value.attribute
      ],
      async ([A, P]) => {
        const J = await f.value.calculateNextInputInstance(
          A,
          P,
          r.destinationLnode
        );
        c.value.inputInstance = J.toString();
      }
    ), Ut(
      () => c.value.signal,
      (A, P) => {
        const J = c.value.inputName !== P && c.value.inputName !== "";
        !m.value && !J && (c.value.inputName = A);
      }
    ), xi(() => {
      switch (X(), c.value.type = r.dataflowType, r.dataflowType) {
        case ot.GOOSE:
        case ot.SMV:
          c.value.includeQuality = !0, c.value.includeTimestamp = !1;
          break;
        case ot.REPORT:
          c.value.includeQuality = !0, c.value.includeTimestamp = !0;
          break;
        default:
          c.value.includeQuality = !1, c.value.includeTimestamp = !1;
      }
    });
    const B = Xe(() => !r.dataflowType || !r.sourceLnode ? [] : d.value.find((A) => A.typeId === r.sourceLnode.lnType)?.dataObjects.filter(
      (A) => A.dataAttributes.some(
        (P) => Bo[r.dataflowType]?.includes(P.fc)
      )
    ).sort((A, P) => A.name.localeCompare(P.name)) ?? []), G = Xe(() => !r.dataflowType || !r.sourceLnode ? [] : d.value.find((A) => A.typeId === r.sourceLnode.lnType)?.dataObjects.find((A) => A.name === c.value.signal)?.dataAttributes.filter(
      (A) => Bo[r.dataflowType].includes(A.fc)
    ).filter((A) => !$a.includes(A.name)).sort((A, P) => A.name.localeCompare(P.name)) ?? []);
    re();
    function re() {
      const A = r.sourcePlaceholder?.dataObject ?? r.destinationPlaceholder?.preferredDataObject;
      if (A && B.value.length > 0) {
        const Oe = B.value.find((Y) => Y.name === A);
        c.value.signal = Oe ? Oe.name : "";
      }
      const P = r.sourcePlaceholder?.dataAttribute ?? r.destinationPlaceholder?.preferredDataAttribute;
      if (P && G.value.length > 0) {
        const Oe = G.value.find((Y) => Y.name === P);
        Oe && c.value.signal === A && (c.value.attribute = Oe.name);
      }
      const J = r.sourcePlaceholder?.input ?? r.destinationPlaceholder?.input;
      J && m.value === !1 && (c.value.inputName = J);
    }
    function Z() {
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
    function k(A) {
      for (const P of A)
        c.value[P] = "";
    }
    async function j() {
      try {
        if (!F(c.value))
          return;
        await f.value.createConnection(
          c.value,
          r.sourceLnode,
          r.destinationLnode,
          q.value
        ), i.handleClose();
      } catch (A) {
        console.error("Error creating dataflow:", A), alert(`Error creating dataflow: ${A instanceof Error ? A.message : "Unknown error"}`);
      }
    }
    function F(A) {
      return A.type ? A.signal ? A.attribute ? A.inputName ? !0 : (alert("Please enter an input name."), !1) : (alert("Please select an attribute (DA)."), !1) : (alert("Please select a signal (DO)."), !1) : (alert("Please select a dataflow type."), !1);
    }
    function X() {
      c.value = Z(), m.value = !1, q.value = !0;
    }
    return (A, P) => (te(), pe("form", {
      method: "dialog",
      onSubmit: j,
      class: "flex flex-col gap-4 mt-4"
    }, [
      p("div", Fp, [
        P[11] || (P[11] = p("label", {
          for: "source-select",
          class: "col-start-1 self-center"
        }, "Source", -1)),
        p("select", Mp, [
          p("option", {
            value: r.sourceLnode.id
          }, ce($e(di)(A.sourceLnode)), 9, Bp)
        ])
      ]),
      p("div", Kp, [
        P[13] || (P[13] = p("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Signal (DO)", -1)),
        Je(p("select", {
          id: "data-object-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": P[0] || (P[0] = (J) => c.value.signal = J),
          onChange: P[1] || (P[1] = (J) => k(["attribute"]))
        }, [
          P[12] || (P[12] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(B.value, (J) => (te(), pe("option", {
            key: J.name,
            value: J.name,
            title: J.desc ? `Desc: ${J.desc}` : ""
          }, ce(J.desc ? J.name + " ⓘ" : J.name), 9, qp))), 128))
        ], 544), [
          [jt, c.value.signal]
        ])
      ]),
      p("div", Up, [
        P[15] || (P[15] = p("label", {
          for: "data-attribute-select",
          class: "col-start-1 self-center"
        }, "Attribute (DA)", -1)),
        Je(p("select", {
          id: "data-attribute-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": P[2] || (P[2] = (J) => c.value.attribute = J)
        }, [
          P[14] || (P[14] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(G.value, (J) => (te(), pe("option", {
            key: J.name,
            value: J.name,
            title: J.desc ? `Desc: ${J.desc}` : ""
          }, ce(J.desc ? J.name + " ⓘ" : J.name), 9, Vp))), 128))
        ], 512), [
          [jt, c.value.attribute]
        ])
      ]),
      P[24] || (P[24] = p("hr", { class: "solid" }, null, -1)),
      p("div", Wp, [
        P[16] || (P[16] = p("label", {
          for: "destination-select",
          class: "col-start-1 self-center"
        }, "Destination", -1)),
        p("select", Gp, [
          p("option", {
            value: r.destinationLnode.id
          }, ce($e(di)(A.destinationLnode)), 9, Hp)
        ])
      ]),
      p("div", zp, [
        p("fieldset", null, [
          P[19] || (P[19] = p("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
          p("div", Yp, [
            Je(p("input", {
              type: "radio",
              id: "dataflow-new-input",
              name: "input",
              "onUpdate:modelValue": P[3] || (P[3] = (J) => m.value = J),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, m.value]
            ]),
            P[17] || (P[17] = p("label", { for: "dataflow-new-input" }, "New Input", -1))
          ]),
          p("div", Xp, [
            Je(p("input", {
              type: "radio",
              id: "dataflow-existing-input",
              name: "input",
              "onUpdate:modelValue": P[4] || (P[4] = (J) => m.value = J),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, m.value]
            ]),
            P[18] || (P[18] = p("label", { for: "dataflow-existing-input" }, "Existing Input", -1))
          ])
        ]),
        m.value ? ze("", !0) : Je((te(), pe("input", {
          key: 0,
          "aria-label": "New Input Name",
          required: "",
          type: "text",
          placeholder: "Input Name",
          class: "input col-start-2",
          "onUpdate:modelValue": P[5] || (P[5] = (J) => c.value.inputName = J)
        }, null, 512)), [
          [Jn, c.value.inputName]
        ]),
        m.value ? Je((te(), pe("select", {
          key: 1,
          "aria-label": "Existing Input Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": P[6] || (P[6] = (J) => c.value.inputName = J)
        }, [
          (te(!0), pe(Be, null, ft(g.value, (J) => (te(), pe("option", {
            key: J,
            value: J
          }, ce(J), 9, Qp))), 128))
        ], 512)), [
          [jt, c.value.inputName]
        ]) : ze("", !0)
      ]),
      p("div", Jp, [
        P[20] || (P[20] = p("label", {
          for: "input-instance-input",
          class: "col-start-1 self-center"
        }, "Input Instance", -1)),
        Je(p("input", {
          id: "input-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": P[7] || (P[7] = (J) => c.value.inputInstance = J)
        }, null, 512), [
          [Jn, c.value.inputInstance]
        ])
      ]),
      P[25] || (P[25] = p("hr", { class: "solid" }, null, -1)),
      p("div", null, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": P[8] || (P[8] = (J) => c.value.includeQuality = J),
          class: "checkbox mr-2",
          id: "checkbox-include-quality"
        }, null, 512), [
          [Dr, c.value.includeQuality]
        ]),
        P[21] || (P[21] = p("label", { for: "checkbox-include-quality" }, "Include Quality", -1))
      ]),
      p("div", null, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": P[9] || (P[9] = (J) => c.value.includeTimestamp = J),
          class: "checkbox mr-2",
          id: "checkbox-include-timestamp"
        }, null, 512), [
          [Dr, c.value.includeTimestamp]
        ]),
        P[22] || (P[22] = p("label", { for: "checkbox-include-timestamp" }, "Include Timestamp", -1))
      ]),
      p("div", Zp, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": P[10] || (P[10] = (J) => q.value = J),
          class: "checkbox mr-2",
          id: "dataflow-checkbox-add-references"
        }, null, 512), [
          [Dr, q.value]
        ]),
        P[23] || (P[23] = p("label", { for: "dataflow-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      P[26] || (P[26] = p("div", { class: "modal-action" }, [
        p("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          type: "submit",
          "data-testId": "save-dataflow-connection"
        }, " Save ")
      ], -1))
    ], 32));
  }
}), th = { class: "grid grid-cols-2 gap-4" }, nh = {
  id: "destination-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, rh = ["value"], oh = { class: "grid grid-cols-2 gap-4" }, ah = ["value", "title"], ih = { class: "grid grid-cols-2 gap-4" }, sh = {
  id: "source-select",
  required: "",
  disabled: "",
  class: "select col-start-2"
}, lh = ["value"], uh = { class: "grid grid-cols-2 gap-4" }, ch = { class: "flex items-center" }, dh = { class: "flex items-center" }, fh = ["value"], ph = { class: "grid grid-cols-2 gap-4" }, hh = { class: "flex items-center" }, mh = /* @__PURE__ */ Ot({
  __name: "controlled-dataflow-form",
  props: {
    sourceLnode: {},
    destinationLnode: {},
    dataflowType: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { lnodeTypes: d, sdk: f } = Mt(l), c = Ue(G()), m = Ue(!1), g = Ue([]), q = Ue(!0);
    Do(async () => {
      g.value = await f.value.findExistingOutputs(r.sourceLnode);
    }), Ut(m, (k) => {
      k ? c.value.outputName = "" : c.value.outputName = c.value.controlledSignal;
    }), Ut(
      () => c.value.outputName,
      async (k) => {
        const j = await f.value.calculateNextOutputInstance(
          k,
          r.sourceLnode
        );
        c.value.outputInstance = j.toString();
      }
    ), Ut(
      () => c.value.controlledSignal,
      (k, j) => {
        const F = c.value.outputName !== j && c.value.outputName !== "";
        !m.value && !F && (c.value.outputName = k);
      }
    );
    const B = Xe(() => r.destinationLnode ? d.value.find((j) => j.typeId === r.destinationLnode.lnType)?.dataObjects.map((j) => ({
      name: j.name,
      desc: j.desc
    })).sort((j, F) => j.name.localeCompare(F.name)) ?? [] : []);
    function G() {
      return {
        type: ot.CONTROL,
        controlledSignal: "",
        outputName: "",
        outputInstance: ""
      };
    }
    async function re() {
      try {
        if (!Z(c.value))
          return;
        await f.value.createControlledConnection(
          c.value,
          r.sourceLnode,
          r.destinationLnode,
          q.value
        ), i.handleClose();
      } catch (k) {
        console.error("Error creating controlled dataflow:", k), alert(`Error creating controlled dataflow: ${k instanceof Error ? k.message : "Unknown error"}`);
      }
    }
    function Z(k) {
      return k.type ? k.outputName ? k.controlledSignal ? !0 : (alert("Please select a controlled signal (DO)."), !1) : (alert("Please select an controller output name."), !1) : (alert("Please select a dataflow type."), !1);
    }
    return (k, j) => (te(), pe("form", {
      method: "dialog",
      onSubmit: re,
      class: "flex flex-col gap-4 mt-4"
    }, [
      p("div", th, [
        j[7] || (j[7] = p("label", {
          for: "destination-select",
          class: "col-start-1 self-center"
        }, "Controlled", -1)),
        p("select", nh, [
          p("option", {
            value: r.destinationLnode.id
          }, ce($e(di)(k.destinationLnode)), 9, rh)
        ])
      ]),
      p("div", oh, [
        j[9] || (j[9] = p("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Controlled Signal (DO)", -1)),
        Je(p("select", {
          id: "data-object-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": j[0] || (j[0] = (F) => c.value.controlledSignal = F)
        }, [
          j[8] || (j[8] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(B.value, (F) => (te(), pe("option", {
            key: F.name,
            value: F.name,
            title: F.desc ? `Desc: ${F.desc}` : ""
          }, ce(F.desc ? F.name + " ⓘ" : F.name), 9, ah))), 128))
        ], 512), [
          [jt, c.value.controlledSignal]
        ])
      ]),
      j[16] || (j[16] = p("hr", { class: "solid" }, null, -1)),
      p("div", ih, [
        j[10] || (j[10] = p("label", {
          for: "source-select",
          class: "col-start-1 self-center"
        }, "Controller", -1)),
        p("select", sh, [
          p("option", {
            value: r.sourceLnode.id
          }, ce($e(di)(k.sourceLnode)), 9, lh)
        ])
      ]),
      p("div", uh, [
        p("fieldset", null, [
          j[13] || (j[13] = p("legend", { class: "col-start-1 self-start" }, "Controller Output Name", -1)),
          p("div", ch, [
            Je(p("input", {
              type: "radio",
              id: "dataflow-control-new-output",
              name: "output",
              "onUpdate:modelValue": j[1] || (j[1] = (F) => m.value = F),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, m.value]
            ]),
            j[11] || (j[11] = p("label", { for: "dataflow-control-new-output" }, "New Output", -1))
          ]),
          p("div", dh, [
            Je(p("input", {
              type: "radio",
              id: "dataflow-control-existing-output",
              name: "output",
              "onUpdate:modelValue": j[2] || (j[2] = (F) => m.value = F),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, m.value]
            ]),
            j[12] || (j[12] = p("label", { for: "dataflow-control-existing-output" }, "Existing Output", -1))
          ])
        ]),
        m.value ? ze("", !0) : Je((te(), pe("input", {
          key: 0,
          "aria-label": "New Output Name",
          required: "",
          type: "text",
          placeholder: "Output Name",
          class: "input col-start-2",
          "onUpdate:modelValue": j[3] || (j[3] = (F) => c.value.outputName = F)
        }, null, 512)), [
          [Jn, c.value.outputName]
        ]),
        m.value ? Je((te(), pe("select", {
          key: 1,
          "aria-label": "Existing Output Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": j[4] || (j[4] = (F) => c.value.outputName = F)
        }, [
          (te(!0), pe(Be, null, ft(g.value, (F) => (te(), pe("option", {
            key: F,
            value: F
          }, ce(F), 9, fh))), 128))
        ], 512)), [
          [jt, c.value.outputName]
        ]) : ze("", !0)
      ]),
      p("div", ph, [
        j[14] || (j[14] = p("label", {
          for: "output-instance-input",
          class: "col-start-1 self-center"
        }, "Output Instance", -1)),
        Je(p("input", {
          id: "output-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": j[5] || (j[5] = (F) => c.value.outputInstance = F)
        }, null, 512), [
          [Jn, c.value.outputInstance]
        ])
      ]),
      j[17] || (j[17] = p("hr", { class: "solid" }, null, -1)),
      p("div", hh, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": j[6] || (j[6] = (F) => q.value = F),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [Dr, q.value]
        ]),
        j[15] || (j[15] = p("label", { for: "dataflow-control-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      j[18] || (j[18] = p("div", { class: "modal-action" }, [
        p("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          "data-testId": " save-dataflow-connection"
        }, " Save ")
      ], -1))
    ], 32));
  }
}), vh = { class: "grid grid-cols-2 gap-4 mt-4" }, yh = ["value", "disabled"], gh = /* @__PURE__ */ Ot({
  __name: "dataflow-creation",
  props: {
    sourceLnode: {},
    destinationLnode: {},
    sourcePlaceholder: {},
    destinationPlaceholder: {}
  },
  setup(t) {
    const r = t, i = Ue(null);
    r.sourcePlaceholder?.dataflowType ? i.value = r.sourcePlaceholder.dataflowType : r.destinationPlaceholder?.dataflowType ? i.value = r.destinationPlaceholder.dataflowType : i.value = null;
    const l = Xe(
      () => Object.values(ot).filter((c) => c !== ot.INTERNAL)
    ), d = Xe(
      () => r.sourceLnode?.lnClass === "IHMI" || r.sourceLnode?.lnClass === "ITCI"
    );
    function f(c) {
      const m = c.target.value;
      i.value = m;
    }
    return (c, m) => (te(), pe(Be, null, [
      m[3] || (m[3] = p("h3", { class: "font-bold text-lg" }, "Create Dataflow", -1)),
      p("div", vh, [
        m[2] || (m[2] = p("label", {
          for: "dataflow-type-select",
          class: "col-start-1 self-center"
        }, "Dataflow Type", -1)),
        Je(p("select", {
          id: "dataflow-type-select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": m[0] || (m[0] = (g) => i.value = g),
          onChange: f
        }, [
          m[1] || (m[1] = p("option", {
            key: "empty",
            value: null
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(l.value, (g) => (te(), pe("option", {
            key: g,
            value: g,
            disabled: g === $e(ot).CONTROL && !d.value
          }, ce(g), 9, yh))), 128))
        ], 544), [
          [jt, i.value]
        ])
      ]),
      m[4] || (m[4] = p("hr", { class: "solid mt-4" }, null, -1)),
      i.value !== $e(ot).CONTROL ? (te(), kt(eh, {
        key: 0,
        sourceLnode: r.sourceLnode,
        destinationLnode: r.destinationLnode,
        dataflowType: i.value,
        sourcePlaceholder: c.sourcePlaceholder,
        destinationPlaceholder: c.destinationPlaceholder
      }, null, 8, ["sourceLnode", "destinationLnode", "dataflowType", "sourcePlaceholder", "destinationPlaceholder"])) : (te(), kt(mh, {
        key: 1,
        sourceLnode: r.sourceLnode,
        destinationLnode: r.destinationLnode,
        dataflowType: i.value
      }, null, 8, ["sourceLnode", "destinationLnode", "dataflowType"]))
    ], 64));
  }
});
function bh(t) {
  return ks() ? (eu(t), !0) : !1;
}
const wh = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
const _h = () => {
};
function xh(t, r, i = {}) {
  const {
    immediate: l = !0,
    immediateCallback: d = !1
  } = i, f = Yn(!1);
  let c;
  function m() {
    c && (clearTimeout(c), c = void 0);
  }
  function g() {
    f.value = !1, m();
  }
  function q(...B) {
    d && t(), m(), f.value = !0, c = setTimeout(() => {
      f.value = !1, c = void 0, t(...B);
    }, Vc(r));
  }
  return l && (f.value = !0, wh && q()), bh(g), {
    isPending: qc(f),
    start: q,
    stop: g
  };
}
function Ua(t, r, i) {
  let l;
  $t(i) ? l = {
    evaluating: i
  } : l = {};
  const {
    lazy: d = !1,
    flush: f = "pre",
    evaluating: c = void 0,
    shallow: m = !0,
    onError: g = _h
  } = l, q = Yn(!d), B = m ? Yn(r) : Ue(r);
  let G = 0;
  return xi(async (re) => {
    if (!q.value)
      return;
    G++;
    const Z = G;
    let k = !1;
    c && Promise.resolve().then(() => {
      c.value = !0;
    });
    try {
      const j = await t((F) => {
        re(() => {
          c && (c.value = !1), k || F();
        });
      });
      Z === G && (B.value = j);
    } catch (j) {
      g(j);
    } finally {
      c && Z === G && (c.value = !1), k = !0;
    }
  }, { flush: f }), d ? Xe(() => (q.value = !0, B.value)) : B;
}
const Ch = { class: "grid grid-cols-2 gap-4 items-center" }, Sh = ["value"], Ih = { class: "grid grid-cols-2 gap-4 items-center" }, Oh = ["value"], Nh = { class: "grid grid-cols-2 gap-4 items-center" }, Th = ["value", "title"], Eh = { class: "grid grid-cols-2 gap-4 mt-4" }, Dh = { class: "flex items-center" }, Rh = { class: "flex items-center" }, Ah = ["value"], Ph = { class: "grid grid-cols-2 gap-4" }, kh = { class: "flex items-center" }, Lh = /* @__PURE__ */ Ot({
  __name: "control-dataflow-source-placeholder-form",
  props: {
    controllerLnode: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { lnodeTypes: d, sdk: f } = Mt(l), c = Ue(j()), m = Ue(!1), g = Ue([]), q = Ue(!0);
    Do(async () => {
      g.value = await f.value.findExistingOutputs(r.controllerLnode);
    }), Ut(m, (X) => {
      X ? c.value.outputName = "" : c.value.outputName = c.value.preferredDataObject;
    }), Ut(
      () => c.value.preferredDataObject,
      (X, A) => {
        const P = c.value.outputName !== A && c.value.outputName !== "";
        !m.value && !P && (c.value.outputName = X);
      }
    ), Ut(
      () => c.value.outputName,
      async (X) => {
        const A = await f.value.calculateNextOutputInstance(
          X,
          r.controllerLnode
        );
        c.value.outputInstance = A.toString();
      }
    );
    const B = Xe(
      () => [...d.value].sort((X, A) => X.lnClass.localeCompare(A.lnClass))
    ), G = Ua(async () => f.value ? (await f.value.findProcessResourcesForLnode(
      r.controllerLnode.id
    )).map((A) => ({
      name: An(A, "name"),
      id: A.id
    })).sort((A, P) => A.name.localeCompare(P.name)) : []), re = Xe(() => {
      if (!c.value.preferredLnode) return [];
      const X = d.value.find(
        (A) => A.lnClass === c.value.preferredLnode
      );
      return Ae(
        X,
        `LNodeType of class ${c.value.preferredLnode} not found`
      ), X?.dataObjects.map((A) => ({
        name: A.name,
        desc: A.desc,
        id: A.id
      })).sort((A, P) => A.name.localeCompare(P.name)) ?? [];
    });
    async function Z() {
      try {
        if (!k(c.value))
          return;
        await f.value.createControlSourcePlaceholder(
          c.value,
          r.controllerLnode,
          q.value
        ), i.handleClose();
      } catch (X) {
        console.error("Error creating control source placeholder port:", X), alert(`Error creating placeholder: ${X instanceof Error ? X.message : "Unknown error"}`);
      }
    }
    function k(X) {
      return X.outputName ? !0 : (alert("Please enter a controller output name."), !1);
    }
    function j() {
      return {
        dataflowType: ot.CONTROL,
        outputName: "",
        outputInstance: "",
        preferredLnode: "",
        preferredDataObject: "",
        processResourceId: ""
      };
    }
    function F(X) {
      for (const A of X)
        c.value[A] = "";
    }
    return (X, A) => (te(), pe("form", {
      onSubmit: Z,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      p("div", Ch, [
        A[11] || (A[11] = p("label", {
          for: "process-resource-select",
          class: "col-start-1"
        }, "Process Resource", -1)),
        Je(p("select", {
          id: "process-resource-select",
          name: "processResource",
          class: "select col-start-2",
          "onUpdate:modelValue": A[0] || (A[0] = (P) => c.value.processResourceId = P)
        }, [
          A[10] || (A[10] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft($e(G), (P) => (te(), pe("option", {
            key: P.id,
            value: P.id
          }, ce(P.name), 9, Sh))), 128))
        ], 512), [
          [jt, c.value.processResourceId]
        ])
      ]),
      p("div", Ih, [
        A[13] || (A[13] = p("label", { for: "preferred-lnode-select" }, "Preferred LNode", -1)),
        Je(p("select", {
          id: "preferred-lnode-select",
          name: "preferredLnode",
          class: "select col-start-2",
          "onUpdate:modelValue": A[1] || (A[1] = (P) => c.value.preferredLnode = P),
          onChange: A[2] || (A[2] = (P) => F(["preferredDataObject"]))
        }, [
          A[12] || (A[12] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(B.value, (P) => (te(), pe("option", {
            key: P.lnClass,
            value: P.lnClass
          }, ce(P.lnClass), 9, Oh))), 128))
        ], 544), [
          [jt, c.value.preferredLnode]
        ])
      ]),
      p("div", Nh, [
        A[15] || (A[15] = p("label", { for: "data-object-select" }, "Preferred Data Object", -1)),
        Je(p("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": A[3] || (A[3] = (P) => c.value.preferredDataObject = P)
        }, [
          A[14] || (A[14] = p("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(re.value, (P) => (te(), pe("option", {
            key: P.id,
            value: P.name,
            title: P.desc ? `Desc: ${P.desc}` : ""
          }, ce(P.desc ? P.name + " ⓘ" : P.name), 9, Th))), 128))
        ], 512), [
          [jt, c.value.preferredDataObject]
        ])
      ]),
      p("div", Eh, [
        p("fieldset", null, [
          A[18] || (A[18] = p("legend", { class: "col-start-1 self-start" }, "Controller Output Name", -1)),
          p("div", Dh, [
            Je(p("input", {
              type: "radio",
              id: "dataflow-control-new-output",
              name: "output",
              "onUpdate:modelValue": A[4] || (A[4] = (P) => m.value = P),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, m.value]
            ]),
            A[16] || (A[16] = p("label", { for: "dataflow-control-new-output" }, "New Output", -1))
          ]),
          p("div", Rh, [
            Je(p("input", {
              type: "radio",
              id: "dataflow-control-existing-output",
              name: "output",
              "onUpdate:modelValue": A[5] || (A[5] = (P) => m.value = P),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, m.value]
            ]),
            A[17] || (A[17] = p("label", { for: "dataflow-control-existing-output" }, "Existing Output", -1))
          ])
        ]),
        m.value ? ze("", !0) : Je((te(), pe("input", {
          key: 0,
          "aria-label": "New Output Name",
          required: "",
          type: "text",
          placeholder: "Output Name",
          class: "input col-start-2",
          "onUpdate:modelValue": A[6] || (A[6] = (P) => c.value.outputName = P)
        }, null, 512)), [
          [Jn, c.value.outputName]
        ]),
        m.value ? Je((te(), pe("select", {
          key: 1,
          "aria-label": "Existing Output Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": A[7] || (A[7] = (P) => c.value.outputName = P)
        }, [
          (te(!0), pe(Be, null, ft(g.value, (P) => (te(), pe("option", {
            key: P,
            value: P
          }, ce(P), 9, Ah))), 128))
        ], 512)), [
          [jt, c.value.outputName]
        ]) : ze("", !0)
      ]),
      p("div", Ph, [
        A[19] || (A[19] = p("label", {
          for: "output-instance-input",
          class: "col-start-1 self-center"
        }, "Output Instance", -1)),
        Je(p("input", {
          id: "output-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": A[8] || (A[8] = (P) => c.value.outputInstance = P)
        }, null, 512), [
          [Jn, c.value.outputInstance]
        ])
      ]),
      A[21] || (A[21] = p("hr", { class: "solid" }, null, -1)),
      p("div", kh, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": A[9] || (A[9] = (P) => q.value = P),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [Dr, q.value]
        ]),
        A[20] || (A[20] = p("label", { for: "dataflow-control-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      A[22] || (A[22] = p("div", { class: "modal-action" }, [
        p("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), jh = { class: "grid grid-cols-2 gap-4 items-center" }, $h = { class: "grid grid-cols-2 gap-4 items-center" }, Fh = ["value", "title"], Mh = { class: "grid grid-cols-2 gap-4 items-center" }, Bh = ["value", "title"], Kh = { class: "grid grid-cols-2 gap-4 items-center" }, qh = ["value"], Uh = { class: "grid grid-cols-2 gap-4 items-center" }, Vh = ["value"], Wh = { class: "flex items-center" }, Gh = /* @__PURE__ */ Ot({
  __name: "source-placeholder-form",
  props: {
    sourceLnode: {},
    dataflowType: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { lnodeTypes: d, sdk: f } = Mt(l), c = Ue(Z()), m = Ue(!0);
    Ut(
      () => r.dataflowType,
      () => {
        c.value = Z();
      },
      { immediate: !0 }
    );
    async function g() {
      try {
        await f.value.createSourcePlaceholder(
          r.sourceLnode,
          c.value,
          m.value
        ), i.handleClose();
      } catch (j) {
        console.error("Error creating source placeholder port:", j), alert(`Error creating placeholder: ${j instanceof Error ? j.message : "Unknown error"}`);
      }
    }
    const q = Ua(async () => f.value ? (await f.value.findProcessResourcesForLnode(r.sourceLnode.id)).map((F) => ({
      name: An(F, "name"),
      id: F.id
    })).sort((F, X) => F.name.localeCompare(X.name)) : []), B = Xe(
      () => [...d.value].sort((j, F) => j.lnClass.localeCompare(F.lnClass))
    ), G = Xe(() => {
      const j = d.value.find((F) => F.typeId === r.sourceLnode.lnType);
      return j ? r.dataflowType ? j.dataObjects.filter(
        (F) => F.dataAttributes.some(
          (X) => Bo[r.dataflowType].includes(X.fc)
        )
      ).sort((F, X) => F.name.localeCompare(X.name)) : j.dataObjects.sort((F, X) => F.name.localeCompare(X.name)) : [];
    }), re = Xe(() => {
      const j = d.value.find((F) => F.typeId === r.sourceLnode.lnType)?.dataObjects.find((F) => F.name === c.value.dataObject);
      return j ? r.dataflowType ? j.dataAttributes.filter((F) => Bo[r.dataflowType].includes(F.fc)).filter((F) => !$a.includes(F.name)).sort((F, X) => F.name.localeCompare(X.name)) : j.dataAttributes.filter((F) => !$a.includes(F.name)).sort((F, X) => F.name.localeCompare(X.name)) : [];
    });
    function Z() {
      return {
        dataObject: "",
        dataAttribute: "",
        inputName: "",
        dataflowType: r.dataflowType,
        processResourceId: "",
        preferredLnode: ""
      };
    }
    function k(j) {
      for (const F of j)
        c.value[F] = "";
    }
    return (j, F) => (te(), pe("form", {
      onSubmit: g,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      p("div", jh, [
        F[7] || (F[7] = p("label", { for: "input-name" }, "Input Name", -1)),
        Je(p("input", {
          required: "",
          id: "input-name",
          name: "inputName",
          "onUpdate:modelValue": F[0] || (F[0] = (X) => c.value.inputName = X),
          placeholder: "Input Name",
          class: "input col-start-2"
        }, null, 512), [
          [Jn, c.value.inputName]
        ])
      ]),
      p("div", $h, [
        F[9] || (F[9] = p("label", { for: "data-object-select" }, "Data Object", -1)),
        Je(p("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": F[1] || (F[1] = (X) => c.value.dataObject = X),
          onChange: F[2] || (F[2] = (X) => k(["dataAttribute"]))
        }, [
          F[8] || (F[8] = p("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(G.value, (X) => (te(), pe("option", {
            key: X.id,
            value: X.name,
            title: X.desc ? `Desc: ${X.desc}` : ""
          }, ce(X.desc ? X.name + " ⓘ" : X.name), 9, Fh))), 128))
        ], 544), [
          [jt, c.value.dataObject]
        ])
      ]),
      p("div", Mh, [
        F[11] || (F[11] = p("label", { for: "data-attribute-select" }, "Data Attribute", -1)),
        Je(p("select", {
          required: "",
          id: "data-attribute-select",
          name: "data attribute",
          "onUpdate:modelValue": F[3] || (F[3] = (X) => c.value.dataAttribute = X),
          class: "select col-start-2"
        }, [
          F[10] || (F[10] = p("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(re.value, (X) => (te(), pe("option", {
            key: X.id,
            value: X.name,
            title: X.desc ? `Desc: ${X.desc}` : ""
          }, ce(X.desc ? X.name + " ⓘ" : X.name), 9, Bh))), 128))
        ], 512), [
          [jt, c.value.dataAttribute]
        ])
      ]),
      p("div", Kh, [
        F[13] || (F[13] = p("label", {
          for: "process-resource-select",
          class: "col-start-1"
        }, "Process Resource", -1)),
        Je(p("select", {
          id: "process-resource-select",
          name: "processResource",
          class: "select col-start-2",
          "onUpdate:modelValue": F[4] || (F[4] = (X) => c.value.processResourceId = X)
        }, [
          F[12] || (F[12] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft($e(q), (X) => (te(), pe("option", {
            key: X.id,
            value: X.id
          }, ce(X.name), 9, qh))), 128))
        ], 512), [
          [jt, c.value.processResourceId]
        ])
      ]),
      p("div", Uh, [
        F[15] || (F[15] = p("label", { for: "preferred-lnode-select" }, "Preferred LNode", -1)),
        Je(p("select", {
          id: "preferred-lnode-select",
          name: "preferredLnode",
          class: "select col-start-2",
          "onUpdate:modelValue": F[5] || (F[5] = (X) => c.value.preferredLnode = X)
        }, [
          F[14] || (F[14] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(B.value, (X) => (te(), pe("option", {
            key: X.lnClass,
            value: X.lnClass
          }, ce(X.lnClass), 9, Vh))), 128))
        ], 512), [
          [jt, c.value.preferredLnode]
        ])
      ]),
      F[17] || (F[17] = p("hr", { class: "solid" }, null, -1)),
      p("div", Wh, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": F[6] || (F[6] = (X) => m.value = X),
          class: "checkbox mr-2",
          id: "source-placeholder-checkbox-add-references"
        }, null, 512), [
          [Dr, m.value]
        ]),
        F[16] || (F[16] = p("label", { for: "source-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      F[18] || (F[18] = p("div", { class: "modal-action" }, [
        p("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), Hh = {
  key: 0,
  class: "font-bold text-lg mb-4"
}, zh = {
  key: 1,
  class: "font-bold text-lg mb-4"
}, Yh = { class: "grid grid-cols-2 gap-4 items-center" }, Xh = ["value", "disabled"], Qh = /* @__PURE__ */ Ot({
  __name: "source-placeholder-port-creation",
  props: {
    sourceLnode: {}
  },
  setup(t) {
    const r = t, i = Ue(""), l = Xe(
      () => r.sourceLnode.lnClass === "IHMI" || r.sourceLnode.lnClass === "ITCI"
    ), d = Xe(
      () => Object.values(ot).filter((f) => f !== ot.INTERNAL)
    );
    return (f, c) => (te(), pe(Be, null, [
      i.value === $e(ot).CONTROL ? (te(), pe("h3", Hh, " Create Placeholder - Control data from ")) : (te(), pe("h3", zh, "Create Placeholder - Provide data")),
      p("div", Yh, [
        c[2] || (c[2] = p("label", { for: "dataflow-type-select" }, "Dataflow Type", -1)),
        Je(p("select", {
          id: "dataflow-type-select",
          name: "dataflowType",
          class: "select col-start-2",
          "onUpdate:modelValue": c[0] || (c[0] = (m) => i.value = m)
        }, [
          c[1] || (c[1] = p("option", { value: "" }, "-", -1)),
          (te(!0), pe(Be, null, ft(d.value, (m) => (te(), pe("option", {
            key: m,
            value: m,
            disabled: m === $e(ot).CONTROL && !l.value
          }, ce(m), 9, Xh))), 128))
        ], 512), [
          [jt, i.value]
        ])
      ]),
      c[3] || (c[3] = p("hr", { class: "solid mt-4" }, null, -1)),
      i.value !== $e(ot).CONTROL ? (te(), kt(Gh, {
        key: 2,
        sourceLnode: r.sourceLnode,
        dataflowType: i.value
      }, null, 8, ["sourceLnode", "dataflowType"])) : (te(), kt(Lh, {
        key: 3,
        controllerLnode: r.sourceLnode
      }, null, 8, ["controllerLnode"]))
    ], 64));
  }
}), Jh = { class: "grid grid-cols-2 gap-4 items-center" }, Zh = ["value", "title"], em = { class: "grid grid-cols-2 gap-4 items-center" }, tm = { class: "grid grid-cols-2 gap-4 items-center" }, nm = ["value"], rm = { class: "grid grid-cols-2 gap-4 items-center" }, om = ["value"], am = { class: "flex items-center" }, im = /* @__PURE__ */ Ot({
  __name: "control-dataflow-destination-placeholder-form",
  props: {
    controlledLnode: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { lnodeTypes: d, sdk: f } = Mt(l), c = Ue(Z()), m = Ue(!0);
    Ut(
      () => c.value.dataObject,
      (k, j) => {
        c.value.outputName !== j && c.value.outputName !== "" || (c.value.outputName = k);
      }
    );
    const g = Xe(
      () => d.value.filter((k) => k.lnClass === "IHMI" || k.lnClass === "ITCI").sort((k, j) => k.lnClass.localeCompare(j.lnClass))
    ), q = Ua(async () => f.value ? (await f.value.findProcessResourcesForLnode(
      r.controlledLnode.id
    )).map((j) => ({
      name: An(j, "name"),
      id: j.id
    })).sort((j, F) => j.name.localeCompare(F.name)) : []), B = Xe(() => {
      const k = d.value.find(
        (j) => j.typeId === r.controlledLnode.lnType
      );
      return Ae(k, `LNodeType of class ${r.controlledLnode.lnClass} not found`), k?.dataObjects.map((j) => ({
        name: j.name,
        desc: j.desc,
        id: j.id
      })).sort((j, F) => j.name.localeCompare(F.name)) ?? [];
    });
    async function G() {
      try {
        if (!re(c.value))
          return;
        await f.value.createControlDestinationPlaceholder(
          c.value,
          r.controlledLnode,
          m.value
        ), i.handleClose();
      } catch (k) {
        console.error("Error creating control destination placeholder port:", k), alert(`Error creating placeholder: ${k instanceof Error ? k.message : "Unknown error"}`);
      }
    }
    function re(k) {
      return k.outputName ? k.dataObject ? !0 : (alert("Please enter a data object to be controlled."), !1) : (alert("Please enter a controller output name."), !1);
    }
    function Z() {
      return {
        outputName: "",
        preferredLnode: "",
        dataObject: "",
        processResourceId: ""
      };
    }
    return (k, j) => (te(), pe("form", {
      onSubmit: G,
      method: "dialog",
      class: "flex flex-col gap-4 mt-4"
    }, [
      p("div", Jh, [
        j[6] || (j[6] = p("label", { for: "data-object-select" }, "Controlled Data Object", -1)),
        Je(p("select", {
          required: "",
          id: "data-object-select",
          name: "data object",
          class: "select col-start-2",
          "onUpdate:modelValue": j[0] || (j[0] = (F) => c.value.dataObject = F)
        }, [
          j[5] || (j[5] = p("option", {
            key: "empty",
            value: "",
            disabled: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(B.value, (F) => (te(), pe("option", {
            key: F.id,
            value: F.name,
            title: F.desc ? `Desc: ${F.desc}` : ""
          }, ce(F.desc ? F.name + " ⓘ" : F.name), 9, Zh))), 128))
        ], 512), [
          [jt, c.value.dataObject]
        ])
      ]),
      p("div", em, [
        j[7] || (j[7] = p("label", { for: "output-name" }, "Controller Output Name", -1)),
        Je(p("input", {
          id: "output-name",
          required: "",
          type: "text",
          placeholder: "Output Name",
          class: "input col-start-2",
          "onUpdate:modelValue": j[1] || (j[1] = (F) => c.value.outputName = F)
        }, null, 512), [
          [Jn, c.value.outputName]
        ])
      ]),
      p("div", tm, [
        j[9] || (j[9] = p("label", {
          for: "process-resource-select",
          class: "col-start-1"
        }, "Process Resource", -1)),
        Je(p("select", {
          id: "process-resource-select",
          name: "processResource",
          class: "select col-start-2",
          "onUpdate:modelValue": j[2] || (j[2] = (F) => c.value.processResourceId = F)
        }, [
          j[8] || (j[8] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft($e(q), (F) => (te(), pe("option", {
            key: F.id,
            value: F.id
          }, ce(F.name), 9, nm))), 128))
        ], 512), [
          [jt, c.value.processResourceId]
        ])
      ]),
      p("div", rm, [
        j[11] || (j[11] = p("label", { for: "preferred-lnode-select" }, "Preferred LNode", -1)),
        Je(p("select", {
          id: "preferred-lnode-select",
          name: "preferredLnode",
          class: "select col-start-2",
          "onUpdate:modelValue": j[3] || (j[3] = (F) => c.value.preferredLnode = F)
        }, [
          j[10] || (j[10] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(g.value, (F) => (te(), pe("option", {
            key: F.lnClass,
            value: F.lnClass
          }, ce(F.lnClass), 9, om))), 128))
        ], 512), [
          [jt, c.value.preferredLnode]
        ])
      ]),
      j[13] || (j[13] = p("hr", { class: "solid" }, null, -1)),
      p("div", am, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": j[4] || (j[4] = (F) => m.value = F),
          class: "checkbox mr-2",
          id: "dataflow-control-checkbox-add-references"
        }, null, 512), [
          [Dr, m.value]
        ]),
        j[12] || (j[12] = p("label", { for: "dataflow-control-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      j[14] || (j[14] = p("div", { class: "modal-action" }, [
        p("button", { class: "btn bg-(--color-primary) border-none text-white" }, "Save")
      ], -1))
    ], 32));
  }
}), sm = { class: "grid grid-cols-2 gap-4" }, lm = { class: "flex items-center" }, um = { class: "flex items-center" }, cm = ["value"], dm = { class: "grid grid-cols-2 gap-4" }, fm = { class: "grid grid-cols-2 gap-4" }, pm = ["value"], hm = { class: "grid grid-cols-2 gap-4" }, mm = ["value", "title"], vm = { class: "grid grid-cols-2 gap-4" }, ym = ["value", "title"], gm = { class: "grid grid-cols-2 gap-4" }, bm = ["value"], wm = { class: "flex items-center" }, _m = /* @__PURE__ */ Ot({
  __name: "destination-placeholder-form",
  props: {
    dataflowType: {},
    destinationLnode: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { lnodeTypes: d, sdk: f } = Mt(l), c = Ue(k()), m = Ue(!0), g = Ue(!1), q = Ue([]);
    Do(async () => {
      q.value = await f.value.findExistingInputs(r.destinationLnode);
    }), Ut(
      () => r.dataflowType,
      () => {
        c.value = k();
      },
      { immediate: !0 }
    ), Ut(g, () => {
      c.value.inputName = "";
    }), Ut(
      [
        () => c.value.inputName,
        () => c.value.preferredDataAttribute
      ],
      async ([X, A]) => {
        if (!X) {
          c.value.inputInstance = "";
          return;
        }
        const P = await f.value.calculateNextInputInstance(
          X,
          A,
          r.destinationLnode
        );
        c.value.inputInstance = P.toString();
      }
    );
    const B = Ua(async () => f.value ? (await f.value.findProcessResourcesForLnode(
      r.destinationLnode.id
    )).map((A) => ({
      name: An(A, "name"),
      id: A.id
    })).sort((A, P) => A.name.localeCompare(P.name)) : []), G = Xe(
      () => [...d.value].sort((X, A) => X.lnClass.localeCompare(A.lnClass))
    ), re = Xe(() => {
      const X = d.value.find(
        (A) => A.lnClass === c.value.preferredLnode
      );
      return X ? c.value.dataflowType ? X.dataObjects.filter(
        (A) => A.dataAttributes.some(
          (P) => Bo[c.value.dataflowType].includes(P.fc)
        )
      ).map((A) => ({
        name: A.name,
        desc: A.desc
      })).sort((A, P) => A.name.localeCompare(P.name)) : X.dataObjects.map((A) => ({
        name: A.name,
        desc: A.desc
      })).sort((A, P) => A.name.localeCompare(P.name)) : [];
    }), Z = Xe(() => {
      const X = d.value.find(
        (P) => P.lnClass === c.value.preferredLnode
      );
      if (!X) return [];
      const A = X.dataObjects.find(
        (P) => P.name === c.value.preferredDataObject
      );
      return A ? c.value.dataflowType ? A.dataAttributes.filter(
        (P) => Bo[c.value.dataflowType].includes(P.fc)
      ).filter((P) => !$a.includes(P.name)).sort((P, J) => P.name.localeCompare(J.name)) : A.dataAttributes.filter((P) => !$a.includes(P.name)).sort((P, J) => P.name.localeCompare(J.name)) : [];
    });
    function k() {
      return {
        dataflowType: r.dataflowType || null,
        inputName: "",
        inputInstance: "",
        preferredLnode: "",
        preferredDataObject: "",
        preferredDataAttribute: "",
        processResourceId: ""
      };
    }
    async function j() {
      try {
        await f.value.createDestinationPlaceholder(
          c.value,
          r.destinationLnode,
          m.value
        ), i.handleClose();
      } catch (X) {
        console.error("Error creating destination placeholder port:", X), alert(`Error creating placeholder: ${X instanceof Error ? X.message : "Unknown error"}`);
      }
    }
    function F(X) {
      for (const A of X)
        c.value[A] = "";
    }
    return (X, A) => (te(), pe("form", {
      method: "dialog",
      onSubmit: j,
      class: "flex flex-col gap-4 mt-4"
    }, [
      p("div", sm, [
        p("fieldset", null, [
          A[14] || (A[14] = p("legend", { class: "col-start-1 self-start" }, "Input Name", -1)),
          p("div", lm, [
            Je(p("input", {
              type: "radio",
              id: "destination-placeholder-new-input",
              name: "input",
              "onUpdate:modelValue": A[0] || (A[0] = (P) => g.value = P),
              value: !1,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, g.value]
            ]),
            A[12] || (A[12] = p("label", { for: "destination-placeholder-new-input" }, "New Input", -1))
          ]),
          p("div", um, [
            Je(p("input", {
              type: "radio",
              id: "destination-placeholder-existing-input",
              name: "input",
              "onUpdate:modelValue": A[1] || (A[1] = (P) => g.value = P),
              value: !0,
              class: "radio radio-sm mr-2"
            }, null, 512), [
              [Zn, g.value]
            ]),
            A[13] || (A[13] = p("label", { for: "destination-placeholder-existing-input" }, "Existing Input", -1))
          ])
        ]),
        g.value ? ze("", !0) : Je((te(), pe("input", {
          key: 0,
          "aria-label": "New Input Name",
          required: "",
          type: "text",
          placeholder: "Input Name",
          class: "input col-start-2",
          "onUpdate:modelValue": A[2] || (A[2] = (P) => c.value.inputName = P)
        }, null, 512)), [
          [Jn, c.value.inputName]
        ]),
        g.value ? Je((te(), pe("select", {
          key: 1,
          "aria-label": "Existing Input Name Select",
          required: "",
          class: "select col-start-2",
          "onUpdate:modelValue": A[3] || (A[3] = (P) => c.value.inputName = P)
        }, [
          (te(!0), pe(Be, null, ft(q.value, (P) => (te(), pe("option", {
            key: P,
            value: P
          }, ce(P), 9, cm))), 128))
        ], 512)), [
          [jt, c.value.inputName]
        ]) : ze("", !0)
      ]),
      p("div", dm, [
        A[15] || (A[15] = p("label", {
          for: "input-instance-input",
          class: "col-start-1 self-center"
        }, "Input Instance", -1)),
        Je(p("input", {
          id: "input-instance-input",
          required: "",
          disabled: "",
          type: "text",
          class: "input col-start-2",
          "onUpdate:modelValue": A[4] || (A[4] = (P) => c.value.inputInstance = P)
        }, null, 512), [
          [Jn, c.value.inputInstance]
        ])
      ]),
      p("div", fm, [
        A[17] || (A[17] = p("label", {
          for: "preferred-lnode-select",
          class: "col-start-1 self-center"
        }, "Preferred LNode", -1)),
        Je(p("select", {
          id: "preferred-lnode-select",
          class: "select col-start-2",
          "onUpdate:modelValue": A[5] || (A[5] = (P) => c.value.preferredLnode = P),
          onChange: A[6] || (A[6] = (P) => F(["preferredDataObject"]))
        }, [
          A[16] || (A[16] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(G.value, (P) => (te(), pe("option", {
            key: P.id,
            value: P.lnClass
          }, ce(P.lnClass), 9, pm))), 128))
        ], 544), [
          [jt, c.value.preferredLnode]
        ])
      ]),
      p("div", hm, [
        A[19] || (A[19] = p("label", {
          for: "data-object-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Object", -1)),
        Je(p("select", {
          id: "data-object-select",
          class: "select col-start-2",
          "onUpdate:modelValue": A[7] || (A[7] = (P) => c.value.preferredDataObject = P),
          onChange: A[8] || (A[8] = (P) => F(["preferredDataAttribute"]))
        }, [
          A[18] || (A[18] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(re.value, (P) => (te(), pe("option", {
            key: P.name,
            value: P.name,
            title: P.desc ? `Desc: ${P.desc}` : ""
          }, ce(P.desc ? P.name + " ⓘ" : P.name), 9, mm))), 128))
        ], 544), [
          [jt, c.value.preferredDataObject]
        ])
      ]),
      p("div", vm, [
        A[21] || (A[21] = p("label", {
          for: "data-attribute-select",
          class: "col-start-1 self-center"
        }, "Preferred Data Attribute", -1)),
        Je(p("select", {
          id: "data-attribute-select",
          class: "select col-start-2",
          "onUpdate:modelValue": A[9] || (A[9] = (P) => c.value.preferredDataAttribute = P)
        }, [
          A[20] || (A[20] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft(Z.value, (P) => (te(), pe("option", {
            key: P.name,
            value: P.name,
            title: P.desc ? `Desc: ${P.desc}` : ""
          }, ce(P.desc ? P.name + " ⓘ" : P.name), 9, ym))), 128))
        ], 512), [
          [jt, c.value.preferredDataAttribute]
        ])
      ]),
      p("div", gm, [
        A[23] || (A[23] = p("label", {
          for: "process-resource-select",
          class: "col-start-1"
        }, "Process Resource", -1)),
        Je(p("select", {
          id: "process-resource-select",
          name: "processResource",
          class: "select col-start-2",
          "onUpdate:modelValue": A[10] || (A[10] = (P) => c.value.processResourceId = P)
        }, [
          A[22] || (A[22] = p("option", {
            key: "empty",
            value: ""
          }, "-", -1)),
          (te(!0), pe(Be, null, ft($e(B), (P) => (te(), pe("option", {
            key: P.id,
            value: P.id
          }, ce(P.name), 9, bm))), 128))
        ], 512), [
          [jt, c.value.processResourceId]
        ])
      ]),
      A[25] || (A[25] = p("hr", { class: "solid" }, null, -1)),
      p("div", wm, [
        Je(p("input", {
          type: "checkbox",
          "onUpdate:modelValue": A[11] || (A[11] = (P) => m.value = P),
          class: "checkbox mr-2",
          id: "destination-placeholder-checkbox-add-references"
        }, null, 512), [
          [Dr, m.value]
        ]),
        A[24] || (A[24] = p("label", { for: "destination-placeholder-checkbox-add-references" }, "Add References to Application", -1))
      ]),
      A[26] || (A[26] = p("div", { class: "modal-action" }, [
        p("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          type: "submit"
        }, "Save")
      ], -1))
    ], 32));
  }
}), xm = {
  key: 0,
  class: "font-bold text-lg mb-4"
}, Cm = {
  key: 1,
  class: "font-bold text-lg mb-4"
}, Sm = { class: "grid grid-cols-2 gap-4 items-center" }, Im = ["value"], Om = /* @__PURE__ */ Ot({
  __name: "destination-placeholder-port-creation",
  props: {
    destinationLnode: {}
  },
  setup(t) {
    const r = t, i = Ue(""), l = Xe(
      () => Object.values(ot).filter((d) => d !== ot.INTERNAL)
    );
    return (d, f) => (te(), pe(Be, null, [
      i.value === $e(ot).CONTROL ? (te(), pe("h3", xm, " Create Placeholder - Controlled data by ")) : (te(), pe("h3", Cm, "Create Placeholder - Receive data from")),
      p("div", Sm, [
        f[2] || (f[2] = p("label", { for: "dataflow-type-select" }, "Dataflow Type", -1)),
        Je(p("select", {
          id: "dataflow-type-select",
          name: "dataflowType",
          class: "select col-start-2",
          "onUpdate:modelValue": f[0] || (f[0] = (c) => i.value = c)
        }, [
          f[1] || (f[1] = p("option", { value: "" }, "-", -1)),
          (te(!0), pe(Be, null, ft(l.value, (c) => (te(), pe("option", {
            key: c,
            value: c
          }, ce(c), 9, Im))), 128))
        ], 512), [
          [jt, i.value]
        ])
      ]),
      f[3] || (f[3] = p("hr", { class: "solid mt-4" }, null, -1)),
      i.value !== $e(ot).CONTROL ? (te(), kt(_m, {
        key: 2,
        destinationLnode: r.destinationLnode,
        dataflowType: i.value
      }, null, 8, ["destinationLnode", "dataflowType"])) : (te(), kt(im, {
        key: 3,
        controlledLnode: r.destinationLnode
      }, null, 8, ["controlledLnode"]))
    ], 64));
  }
}), Nm = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_80px]" }, Tm = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Em = { class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-center" }, Dm = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Rm = { class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-center" }, Am = { class: "col-span-full row-start-3" }, Pm = { class: "grid grid-cols-[1fr_20px_0.5fr_20px_1fr] h-[50px]" }, km = { class: "col-start-1 col-span-1 self-center justify-self-end" }, Lm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, jm = { class: "bg-(--color-primary) text-white col-start-3 self-center justify-self-center z-1 p-1 rounded-sm text-sm row-start-1" }, $m = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Fm = { class: "border-2 border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm" }, za = /* @__PURE__ */ Ot({
  __name: "single-dataflow-line",
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
    return (r, i) => (te(), pe("div", Nm, [
      i[2] || (i[2] = p("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2" }, null, -1)),
      p("div", Tm, ce(r.sendingSecondaryLabel), 1),
      p("div", Em, ce(r.sendingPrimaryLabel), 1),
      i[3] || (i[3] = p("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2" }, null, -1)),
      p("div", Dm, ce(r.receivingSecondaryLabel), 1),
      p("div", Rm, ce(r.receivingPrimaryLabel), 1),
      p("div", Am, [
        p("div", Pm, [
          p("div", km, [
            (te(!0), pe(Be, null, ft(r.sendingPortLabels, (l) => (te(), pe("span", Lm, ce(l), 1))), 256))
          ]),
          i[0] || (i[0] = Qu('<div class="rounded-full w-[20px] h-[20px] col-start-2 col-span-1 self-center justify-self-end -mr-[9px] bg-(--color-ocean-gray-100)"></div><div class="col-start-3 col-span-1 row-start-1 flex items-center"><div class="border h-[2px] w-full border-(--color-ocean-gray-100) border-solid"></div></div><svg height="12" width="8" class="col-start-3 col-span-1 self-center justify-self-end mr-[9px] row-start-1" xmlns="http://www.w3.org/2000/svg"><polygon points="0,0 8,6 0,12" style="fill:var(--color-ocean-gray-100);"></polygon></svg>', 3)),
          p("div", jm, ce(r.dataflowType), 1),
          i[1] || (i[1] = p("div", { class: "rounded-full w-[20px] h-[20px] col-start-4 col-span-1 self-center justify-self-start -ml-[9px] bg-(--color-ocean-gray-100)" }, null, -1)),
          p("div", $m, [
            (te(!0), pe(Be, null, ft(r.receivingPortLabels, (l) => (te(), pe("span", Fm, ce(l), 1))), 256))
          ])
        ])
      ])
    ]));
  }
}), Mm = { class: "bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2 p-3" }, Bm = { class: "text-center text-xs mb-4" }, Km = { class: "flex flex-col justify-between gap-4" }, qm = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-2 p-3" }, Um = { class: "text-center mb-4" }, Vm = { key: 0 }, Wm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Gm = { class: "collapse collapse-arrow mt-2" }, Hm = { class: "collapse-content text-sm px-5 pt-1" }, zm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, Ym = { key: 1 }, Xm = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, Qm = { class: "collapse collapse-arrow mt-2" }, Jm = { class: "collapse-content text-sm px-5 pt-1" }, Zm = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, ev = { class: "collapse collapse-arrow mt-2" }, tv = { class: "collapse-content text-sm px-5 pt-1" }, nv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, rv = { key: 2 }, ov = { class: "grid grid-cols-[max-content_auto] gap-x-2" }, av = { class: "collapse collapse-arrow mt-2" }, iv = { class: "collapse-content text-sm px-5 pt-1" }, sv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, lv = { class: "collapse collapse-arrow mt-2" }, uv = { class: "collapse-content text-sm px-5 pt-1" }, cv = { class: "grid grid-cols-[max-content_auto] gap-x-2 [&>dt]:text-right" }, dv = { class: "flex-1 bg-(--color-ocean-gray-50) rounded-xl border-(--color-ocean-gray-100) border-2 p-3" }, fv = { class: "text-center mb-4" }, pv = { class: "list-disc pl-5" }, hv = /* @__PURE__ */ Ot({
  __name: "implemented-dataflow-details",
  props: {
    dataflowType: {},
    ldInst: {},
    controlBlock: {},
    dataSet: {},
    fcdas: {},
    ln0Path: {}
  },
  setup(t) {
    const r = t, i = Lt(), { sdk: l } = Mt(i), d = Ue(), f = Ue(), c = Ue();
    return xi(() => {
      async function m() {
        r.dataflowType === ot.GOOSE ? d.value = await l.value.findGseControlBlockDetails(
          r.controlBlock.id,
          r.ldInst
        ) : r.dataflowType === ot.SMV ? f.value = await l.value.findSmvControlBlockDetails(
          r.controlBlock.id,
          r.ldInst
        ) : r.dataflowType === ot.REPORT && (c.value = await l.value.findReportControlBlockDetails(
          r.controlBlock.id
        ));
      }
      m();
    }), (m, g) => (te(), pe("div", Mm, [
      p("div", Bm, ce(m.ln0Path), 1),
      p("div", Km, [
        p("div", qm, [
          p("div", Um, ce(m.controlBlock.name), 1),
          d.value ? (te(), pe("div", Vm, [
            p("dl", Wm, [
              g[0] || (g[0] = p("dt", null, "App ID:", -1)),
              p("dd", null, ce(d.value.appId), 1),
              g[1] || (g[1] = p("dt", null, "ConfRev:", -1)),
              p("dd", null, ce(m.controlBlock.confRev), 1)
            ]),
            p("details", Gm, [
              g[6] || (g[6] = p("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              p("div", Hm, [
                p("dl", zm, [
                  g[2] || (g[2] = p("dt", null, "MAC Address:", -1)),
                  p("dd", null, ce(d.value.communicationDetails.macAddress), 1),
                  g[3] || (g[3] = p("dt", null, "App ID:", -1)),
                  p("dd", null, ce(d.value.communicationDetails.appId), 1),
                  g[4] || (g[4] = p("dt", null, "VLAN ID:", -1)),
                  p("dd", null, ce(d.value.communicationDetails.vlanId), 1),
                  g[5] || (g[5] = p("dt", null, "VLAN Priority:", -1)),
                  p("dd", null, ce(d.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : ze("", !0),
          f.value ? (te(), pe("div", Ym, [
            p("dl", Xm, [
              g[7] || (g[7] = p("dt", null, "SMV ID:", -1)),
              p("dd", null, ce(f.value.smvId), 1),
              g[8] || (g[8] = p("dt", null, "ConfRev:", -1)),
              p("dd", null, ce(m.controlBlock.confRev), 1),
              g[9] || (g[9] = p("dt", null, "Multicast:", -1)),
              p("dd", null, ce(f.value.multicast), 1),
              g[10] || (g[10] = p("dt", null, "NofASDU:", -1)),
              p("dd", null, ce(f.value.nofAsdu), 1),
              g[11] || (g[11] = p("dt", null, "SmpMod:", -1)),
              p("dd", null, ce(f.value.smpMod), 1),
              g[12] || (g[12] = p("dt", null, "SmpRate:", -1)),
              p("dd", null, ce(f.value.smpRate), 1)
            ]),
            p("details", Qm, [
              g[19] || (g[19] = p("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "SmvOpts", -1)),
              p("div", Jm, [
                p("dl", Zm, [
                  g[13] || (g[13] = p("dt", null, "RefreshTime:", -1)),
                  p("dd", null, ce(f.value.smvOpts.refreshTime), 1),
                  g[14] || (g[14] = p("dt", null, "SampleSynchronized:", -1)),
                  p("dd", null, ce(f.value.smvOpts.sampleSynchronized), 1),
                  g[15] || (g[15] = p("dt", null, "SampleRate:", -1)),
                  p("dd", null, ce(f.value.smvOpts.sampleRate), 1),
                  g[16] || (g[16] = p("dt", null, "DataSet:", -1)),
                  p("dd", null, ce(f.value.smvOpts.dataSet), 1),
                  g[17] || (g[17] = p("dt", null, "Security:", -1)),
                  p("dd", null, ce(f.value.smvOpts.security), 1),
                  g[18] || (g[18] = p("dt", null, "SynchSourceId:", -1)),
                  p("dd", null, ce(f.value.smvOpts.synchSourceId), 1)
                ])
              ])
            ]),
            p("details", ev, [
              g[24] || (g[24] = p("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, " Communication ", -1)),
              p("div", tv, [
                p("dl", nv, [
                  g[20] || (g[20] = p("dt", null, "MAC Address:", -1)),
                  p("dd", null, ce(f.value.communicationDetails.macAddress), 1),
                  g[21] || (g[21] = p("dt", null, "App ID:", -1)),
                  p("dd", null, ce(f.value.communicationDetails.appId), 1),
                  g[22] || (g[22] = p("dt", null, "VLAN ID:", -1)),
                  p("dd", null, ce(f.value.communicationDetails.vlanId), 1),
                  g[23] || (g[23] = p("dt", null, "VLAN Priority:", -1)),
                  p("dd", null, ce(f.value.communicationDetails.vlanPriority), 1)
                ])
              ])
            ])
          ])) : ze("", !0),
          c.value ? (te(), pe("div", rv, [
            p("dl", ov, [
              g[25] || (g[25] = p("dt", null, "RPT ID:", -1)),
              p("dd", null, ce(c.value.rptId), 1),
              g[26] || (g[26] = p("dt", null, "ConfRev:", -1)),
              p("dd", null, ce(m.controlBlock.confRev), 1),
              g[27] || (g[27] = p("dt", null, "Buffered:", -1)),
              p("dd", null, ce(c.value.buffered), 1)
            ]),
            p("details", av, [
              g[33] || (g[33] = p("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "TrgOps", -1)),
              p("div", iv, [
                p("dl", sv, [
                  g[28] || (g[28] = p("dt", null, "Dchg:", -1)),
                  p("dd", null, ce(c.value.trgOps.dchg), 1),
                  g[29] || (g[29] = p("dt", null, "Dupd:", -1)),
                  p("dd", null, ce(c.value.trgOps.dupd), 1),
                  g[30] || (g[30] = p("dt", null, "Gi:", -1)),
                  p("dd", null, ce(c.value.trgOps.gi), 1),
                  g[31] || (g[31] = p("dt", null, "Period:", -1)),
                  p("dd", null, ce(c.value.trgOps.period), 1),
                  g[32] || (g[32] = p("dt", null, "Qchg:", -1)),
                  p("dd", null, ce(c.value.trgOps.qchg), 1)
                ])
              ])
            ]),
            p("details", lv, [
              g[42] || (g[42] = p("summary", { class: "collapse-title after:start-0 after:!top-3 ps-5 p-0" }, "OptFields", -1)),
              p("div", uv, [
                p("dl", cv, [
                  g[34] || (g[34] = p("dt", null, "BufOvfl:", -1)),
                  p("dd", null, ce(c.value.optFields.bufOvfl), 1),
                  g[35] || (g[35] = p("dt", null, "ConfigRef:", -1)),
                  p("dd", null, ce(c.value.optFields.configRef), 1),
                  g[36] || (g[36] = p("dt", null, "DataRef:", -1)),
                  p("dd", null, ce(c.value.optFields.dataRef), 1),
                  g[37] || (g[37] = p("dt", null, "DataSet:", -1)),
                  p("dd", null, ce(c.value.optFields.dataSet), 1),
                  g[38] || (g[38] = p("dt", null, "EntryID:", -1)),
                  p("dd", null, ce(c.value.optFields.entryId), 1),
                  g[39] || (g[39] = p("dt", null, "ReasonCode:", -1)),
                  p("dd", null, ce(c.value.optFields.reasonCode), 1),
                  g[40] || (g[40] = p("dt", null, "SeqNum:", -1)),
                  p("dd", null, ce(c.value.optFields.seqNum), 1),
                  g[41] || (g[41] = p("dt", null, "TimeStamp:", -1)),
                  p("dd", null, ce(c.value.optFields.timeStamp), 1)
                ])
              ])
            ])
          ])) : ze("", !0)
        ]),
        p("div", dv, [
          p("div", fv, ce(m.dataSet.name), 1),
          p("ul", pv, [
            (te(!0), pe(Be, null, ft(m.fcdas, (q) => (te(), pe("li", null, ce(`${q.doName}.${q.daName} (fc: ${q.fc || "-"})`), 1))), 256))
          ])
        ])
      ])
    ]));
  }
}), mv = { class: "font-bold text-lg mb-4" }, vv = { key: 0 }, yv = { key: 1 }, gv = {
  key: 4,
  class: "modal-action"
}, bv = /* @__PURE__ */ Ot({
  __name: "implemented-dataflow-view",
  props: {
    connection: {},
    extRef: {}
  },
  setup(t) {
    const r = t, i = Tn(), l = Lt(), { sdk: d, lnodes: f } = Mt(l), c = Ue(""), m = Ue(""), g = Ue(""), q = Ue(), B = Ue(), G = Ue([]);
    Ut(
      () => r.extRef,
      async function(ie) {
        ie && (g.value = await d.value.findPathToExtRef(ie.id), ie.srcCbName && (q.value = await d.value.findControlBlock(
          ie.iedName,
          ie.ldInst,
          ie.srcCbName
        ), B.value = await d.value.findDataSet(
          ie.iedName,
          ie.ldInst,
          q.value.datSet
        ), G.value = await d.value.findFcdasForDataSet(B.value.id)));
      },
      { immediate: !0 }
    ), Ut(
      () => r.connection,
      async function(ie) {
        Ae(ie.sourceLnodeId, "Source LNode Id is undefined"), c.value = await d.value.generatePathForLnode(ie.sourceLnodeId), m.value = await d.value.generatePathForLnode(ie.destinationLnodeId);
      },
      { immediate: !0 }
    );
    const re = Xe(() => c.value.split("/").slice(-1).join("")), Z = Xe(() => c.value.split("/").slice(0, -1).join("/")), k = Xe(() => m.value.split("/").slice(-1).join("")), j = Xe(() => m.value.split("/").slice(0, -1).join("/")), F = Xe(() => {
      if (!r.connection.isImplemented) {
        const Y = f.value.find((ie) => ie.id === r.connection.sourceLnodeId);
        return Ae(Y, "Sending LNode not found"), `${Y.prefix}${Y.lnClass}${Y.lnInst}`;
      }
      return `${r.extRef?.prefix ?? ""}${r.extRef?.lnClass}${r.extRef?.lnInst ?? ""}`;
    }), X = Xe(() => {
      if (!r.connection.isImplemented) {
        const Y = f.value.find((ie) => ie.id === r.connection.sourceLnodeId);
        return Ae(Y, "Sending LNode not found"), `${Y.iedName}/${Y.ldInst}`;
      }
      return `${r.extRef?.iedName}/${r.extRef?.ldInst}`;
    }), A = Xe(() => g.value.split("/").slice(-2, -1).join("")), P = Xe(() => g.value.split("/").slice(0, -2).join("/")), J = Xe(() => `${r.extRef?.iedName}/${r.extRef?.srcLdInst}/${r.extRef?.srcPrefix}${r.extRef?.srcLnClass}${r.extRef?.srcLnInst}`);
    async function Oe() {
      try {
        if (!r.extRef)
          throw new Error("No matching ExtRef found for dataflow implementation");
        await d.value.implementDataflow(r.connection, r.extRef), i.handleClose();
      } catch (Y) {
        console.error("Error implementing dataflow:", Y), alert(`Error implementing dataflow: ${Y instanceof Error ? Y.message : "Unknown error"}`);
      }
    }
    return (Y, ie) => (te(), pe(Be, null, [
      p("h3", mv, ce(Y.connection.isImplemented ? "Implemented Dataflow Details" : "Implement Dataflow"), 1),
      Y.extRef ? ze("", !0) : (te(), pe("p", vv, "No matching ExtRef found for dataflow implementation.")),
      Y.connection.notPossibleToImplement ? (te(), pe("p", yv, "Sending or receiving LNode is not mapped to a real IED.")) : ze("", !0),
      Y.extRef && Y.connection.isImplemented ? (te(), pe(Be, { key: 2 }, [
        ie[0] || (ie[0] = p("h3", { class: "mb-4" }, "Specification:", -1)),
        yt(za, {
          sendingSecondaryLabel: Z.value,
          sendingPrimaryLabel: re.value,
          receivingSecondaryLabel: j.value,
          receivingPrimaryLabel: k.value,
          dataflowType: Y.connection.dataflowType,
          sendingPortLabels: [Y.connection.sourceDataObject, Y.connection.sourceDataAttribute],
          receivingPortLabels: [Y.connection.input, Y.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        ie[1] || (ie[1] = p("h3", { class: "mb-4" }, "Implementation:", -1)),
        yt(za, {
          sendingSecondaryLabel: X.value,
          sendingPrimaryLabel: F.value,
          receivingSecondaryLabel: P.value,
          receivingPrimaryLabel: A.value,
          dataflowType: Y.extRef.serviceType,
          sendingPortLabels: [Y.extRef.doName, Y.extRef.daName],
          receivingPortLabels: [Y.extRef.intAddr, Y.extRef.desc].filter(Boolean)
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        q.value && B.value ? (te(), kt(hv, {
          key: 0,
          controlBlock: q.value,
          dataSet: B.value,
          fcdas: G.value,
          ln0Path: J.value,
          dataflowType: Y.extRef.serviceType,
          ldInst: Y.extRef.srcLdInst
        }, null, 8, ["controlBlock", "dataSet", "fcdas", "ln0Path", "dataflowType", "ldInst"])) : ze("", !0)
      ], 64)) : ze("", !0),
      Y.extRef && !Y.connection.notPossibleToImplement && !Y.connection.isImplemented ? (te(), pe(Be, { key: 3 }, [
        ie[2] || (ie[2] = p("h3", { class: "mb-4" }, "Specification:", -1)),
        yt(za, {
          sendingSecondaryLabel: Z.value,
          sendingPrimaryLabel: re.value,
          receivingSecondaryLabel: j.value,
          receivingPrimaryLabel: k.value,
          dataflowType: Y.connection.dataflowType,
          sendingPortLabels: [Y.connection.sourceDataObject, Y.connection.sourceDataAttribute],
          receivingPortLabels: [Y.connection.input, Y.connection.inputInstance]
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"]),
        ie[3] || (ie[3] = p("h3", { class: "mb-4" }, "Matching ExtRef to implement:", -1)),
        yt(za, {
          sendingSecondaryLabel: X.value,
          sendingPrimaryLabel: F.value,
          receivingSecondaryLabel: P.value,
          receivingPrimaryLabel: A.value,
          dataflowType: Y.extRef.serviceType || Y.extRef.pServT || Y.connection.dataflowType,
          sendingPortLabels: [
            Y.extRef.pDo || Y.connection.sourceDataObject,
            Y.extRef.pDa || Y.connection.sourceDataAttribute
          ],
          receivingPortLabels: [Y.extRef.intAddr, Y.extRef.desc].filter(Boolean)
        }, null, 8, ["sendingSecondaryLabel", "sendingPrimaryLabel", "receivingSecondaryLabel", "receivingPrimaryLabel", "dataflowType", "sendingPortLabels", "receivingPortLabels"])
      ], 64)) : ze("", !0),
      !Y.connection.isImplemented && !Y.connection.notPossibleToImplement ? (te(), pe("div", gv, [
        p("button", {
          class: "btn bg-(--color-primary) border-none text-white",
          onClick: Oe
        }, " Implement ")
      ])) : ze("", !0)
    ], 64));
  }
}), Tn = /* @__PURE__ */ Qs("dataflow/dialog-store", () => {
  const t = {
    component: void 0,
    props: void 0
  }, r = Ue(), i = Ue(t), l = Ue(), d = Ma({
    DataflowCreation: Yn(gh),
    SourcePlaceholderCreation: Yn(Qh),
    DestinationPlaceholderCreation: Yn(Om),
    DataflowImplementation: Yn(bv)
  });
  function f() {
    i.value = {
      component: void 0,
      props: void 0
    };
  }
  function c() {
    r.value?.close(), xh(() => {
      f();
    }, 300);
  }
  function m(g, q, B) {
    i.value.component = bi(d[g]), i.value.props = q, B && (l.value = B), r.value?.showModal();
  }
  return {
    // states
    dialogRef: r,
    currentDialogContent: i,
    availableDialogContent: d,
    dialogAttributes: l,
    // getters
    // actions
    hardReset: f,
    handleClose: c,
    openDialogWithContent: m
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
    const i = t, l = r, d = Xe(() => ({
      left: `${i.x}px`,
      top: `${i.y}px`,
      display: i.isVisible ? "flex" : "none"
    }));
    function f(c) {
      c.action(), l("close");
    }
    return (c, m) => (te(), pe(Be, null, [
      c.isVisible ? (te(), pe("div", {
        key: 0,
        class: "menu bg-base-100 rounded-box fixed z-10",
        style: kr(d.value)
      }, [
        p("ul", null, [
          (te(!0), pe(Be, null, ft(c.items, (g) => (te(), pe("li", null, [
            p("a", {
              onClick: (q) => f(g)
            }, ce(g.label), 9, wv)
          ]))), 256))
        ])
      ], 4)) : ze("", !0),
      (te(), kt(No, { to: "body" }, [
        i.isVisible ? (te(), pe("div", {
          key: 0,
          class: "backdrop",
          onClick: m[0] || (m[0] = ui((g) => c.$emit("close"), ["prevent"])),
          onContextmenu: m[1] || (m[1] = ui((g) => c.$emit("close"), ["prevent"]))
        }, null, 32)) : ze("", !0)
      ]))
    ], 64));
  }
}), qr = (t, r) => {
  const i = t.__vccOpts || t;
  for (const [l, d] of r)
    i[l] = d;
  return i;
}, xv = /* @__PURE__ */ qr(_v, [["__scopeId", "data-v-49c86f9f"]]), Cv = {}, Sv = { class: "icon-chevron-down relative inline-block" };
function Iv(t, r) {
  return te(), pe("div", Sv, r[0] || (r[0] = [
    p("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "var(--color-base-100)",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      class: "lucide lucide-circle-chevron-down-icon lucide-circle-chevron-down"
    }, [
      p("circle", {
        cx: "12",
        cy: "12",
        r: "10"
      }),
      p("path", { d: "m16 10-4 4-4-4" })
    ], -1)
  ]));
}
const Ov = /* @__PURE__ */ qr(Cv, [["render", Iv]]), Nv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Tv = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, Ev = { class: "mt-4" }, Dv = { key: 0 }, Rv = { key: 1 }, Av = { class: "mt-4" }, Pv = /* @__PURE__ */ Ot({
  __name: "specified-dataflow.sidebar-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = Lt(), { lnodes: l } = Mt(i), d = Xe(() => l.value.find((m) => m.id === r.connection.sourceLnodeId)?.dataObjectSpecifications?.find(
      (m) => m.name === r.connection.sourceDataObject
    )), f = Xe(() => d?.value?.dataAttributeSpecifications?.find(
      (c) => c.name === r.connection.sourceDataAttribute
    ));
    return (c, m) => (te(), pe(Be, null, [
      m[10] || (m[10] = p("h2", { class: "text-lg font-bold mb-2" }, "Specified Dataflow", -1)),
      c.connection.dataflowType ? (te(), pe("span", Nv, ce(c.connection.dataflowType), 1)) : ze("", !0),
      p("dl", Tv, [
        p("div", null, [
          m[0] || (m[0] = p("dt", null, "Input:", -1)),
          p("dd", null, ce(c.connection.input), 1)
        ]),
        p("div", null, [
          m[1] || (m[1] = p("dt", null, "Input Instance:", -1)),
          p("dd", null, ce(c.connection.inputInstance || "-"), 1)
        ]),
        p("div", Ev, [
          m[2] || (m[2] = p("dt", null, "DO:", -1)),
          p("dd", null, ce(c.connection.sourceDataObject || "-"), 1)
        ]),
        d.value?.desc ? (te(), pe("div", Dv, [
          m[3] || (m[3] = p("dt", null, "DO Desc:", -1)),
          p("dd", null, ce(d.value.desc), 1)
        ])) : ze("", !0),
        p("div", null, [
          m[4] || (m[4] = p("dt", null, "DA:", -1)),
          p("dd", null, ce(c.connection.sourceDataAttribute || "-"), 1)
        ]),
        f.value?.desc ? (te(), pe("div", Rv, [
          m[5] || (m[5] = p("dt", null, "DA Desc:", -1)),
          p("dd", null, ce(f.value.desc), 1)
        ])) : ze("", !0),
        p("div", Av, [
          m[6] || (m[6] = p("dt", null, "Preferred LN:", -1)),
          p("dd", null, ce(c.connection.preferredLnode || "-"), 1)
        ]),
        p("div", null, [
          m[7] || (m[7] = p("dt", null, "Preferred DO:", -1)),
          p("dd", null, ce(c.connection.preferredDataObject || "-"), 1)
        ]),
        p("div", null, [
          m[8] || (m[8] = p("dt", null, "Preferred DA:", -1)),
          p("dd", null, ce(c.connection.preferredDataAttribute || "-"), 1)
        ]),
        p("div", null, [
          m[9] || (m[9] = p("dt", null, "Process Resource:", -1)),
          p("dd", null, ce(c.connection.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), kv = { key: 0 }, Lv = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, jv = { class: "flex flex-col gap-4" }, $v = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, Fv = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, Mv = /* @__PURE__ */ Ot({
  __name: "implemented-dataflow.sidebar-details",
  props: {
    connection: {}
  },
  setup(t) {
    const r = t, i = Lt(), { sdk: l } = Mt(i), d = Ue(null), f = Ue(null), c = Ue(null), m = Ue("");
    xi(() => {
      async function G() {
        !r.connection.extRefUuid || !r.connection.isImplemented || (d.value = await l.value.findExtRefByUuid(r.connection.extRefUuid), d.value.srcCbName && (f.value = await l.value.findControlBlock(
          d.value.iedName,
          d.value.ldInst,
          d.value.srcCbName
        ), c.value = await l.value.findDataSet(
          d.value.iedName,
          d.value.ldInst,
          f.value.datSet
        ), m.value = await l.value.findPathToExtRef(d.value.id)));
      }
      G();
    });
    const g = Xe(() => `${d.value?.iedName}/${d.value?.ldInst}/${d.value?.prefix}${d.value?.lnClass}${d.value?.lnInst}`), q = Xe(() => m.value.split("/").slice(0, -1).join("/")), B = Xe(() => `${d.value?.iedName}/${d.value?.srcLdInst}/${d.value?.srcPrefix}${d.value?.srcLnClass}${d.value?.srcLnInst}`);
    return (G, re) => (te(), pe(Be, null, [
      re[9] || (re[9] = p("h2", { class: "text-lg font-bold mb-2" }, "Implemented Dataflow", -1)),
      G.connection.isImplemented ? ze("", !0) : (te(), pe("p", kv, "Not implemented yet")),
      d.value ? (te(), pe(Be, { key: 1 }, [
        G.connection.dataflowType ? (te(), pe("span", Lv, ce(d.value.serviceType), 1)) : ze("", !0),
        p("div", jv, [
          p("dl", $v, [
            p("div", null, [
              re[0] || (re[0] = p("dt", null, "DO:", -1)),
              p("dd", null, ce(d.value.doName), 1)
            ]),
            p("div", null, [
              re[1] || (re[1] = p("dt", null, "DA:", -1)),
              p("dd", null, ce(d.value.daName), 1)
            ])
          ]),
          p("div", null, [
            re[2] || (re[2] = p("h3", { class: "font-semibold" }, "Sending IED/LD/LN", -1)),
            p("div", null, ce(g.value), 1)
          ]),
          p("div", null, [
            re[3] || (re[3] = p("h3", { class: "font-semibold" }, "Receiving IED/LD/LN", -1)),
            p("div", null, ce(q.value), 1)
          ]),
          p("div", null, [
            re[8] || (re[8] = p("h3", { class: "font-semibold" }, "Control Block and Data Set", -1)),
            p("dl", Fv, [
              p("div", null, [
                re[4] || (re[4] = p("dt", null, "Location:", -1)),
                p("dd", null, ce(B.value), 1)
              ]),
              p("div", null, [
                re[5] || (re[5] = p("dt", null, "Control Block:", -1)),
                p("dd", null, ce(f.value?.name), 1)
              ]),
              p("div", null, [
                re[6] || (re[6] = p("dt", null, "ConfRev:", -1)),
                p("dd", null, ce(f.value?.confRev), 1)
              ]),
              p("div", null, [
                re[7] || (re[7] = p("dt", null, "DataSet:", -1)),
                p("dd", null, ce(c.value?.name), 1)
              ])
            ])
          ])
        ])
      ], 64)) : ze("", !0)
    ], 64));
  }
}), Bv = ["onClick", "onContextmenu"], Kv = { class: "dataflow-group__left-port justify-self-end" }, qv = { class: "dataflow-group__left-port__source-data-object mr-2" }, Uv = { class: "dataflow-group__left-port__source-data-attribute" }, Vv = {
  height: "12",
  width: "8",
  class: "col-start-2 justify-self-end row-start-1",
  xmlns: "http://www.w3.org/2000/svg"
}, Wv = ["fill"], Gv = { class: "dataflow-group__right-port col-start-3 justify-self-start" }, Hv = { class: "dataflow-group__right-port__input mr-2" }, zv = { class: "dataflow-group__right-port__input-instance" }, Yv = /* @__PURE__ */ Ot({
  __name: "dataflow-group",
  props: {
    connections: {},
    isDataflowImplementationEnabled: { type: Boolean },
    showContextMenu: { type: Function }
  },
  setup(t) {
    const r = Ni(), { activeElement: i } = Mt(r), l = Ue(null);
    function d(f) {
      l.value === f ? l.value = null : l.value = f, r.setOrResetActiveElement(f.id);
    }
    return (f, c) => (te(), pe(Be, null, [
      (te(!0), pe(Be, null, ft(f.connections, (m) => (te(), pe("div", {
        key: m.id,
        class: "dataflow-group col-span-full h-[50px]",
        onClick: ui((g) => d(m), ["stop"]),
        onContextmenu: ui((g) => f.showContextMenu(g, m), ["right"])
      }, [
        p("div", Kv, [
          p("span", qv, ce(m.sourceDataObject), 1),
          p("span", Uv, ce(m.sourceDataAttribute), 1)
        ]),
        p("div", {
          class: It([
            "dataflow-group__line col-start-2 row-start-1 flex items-center",
            { "dataflow-group__line--active": $e(i) === m.id }
          ])
        }, [
          p("div", {
            class: It([
              "border h-[2px] w-full",
              {
                "border-solid": !f.isDataflowImplementationEnabled || m.isImplemented,
                "border-dashed": f.isDataflowImplementationEnabled && m.isImplemented,
                "border-dotted": f.isDataflowImplementationEnabled && m.notPossibleToImplement
              }
            ])
          }, null, 2)
        ], 2),
        (te(), pe("svg", Vv, [
          p("polygon", {
            points: "0,0 8,6 0,12",
            fill: $e(i) === m.id ? "var(--color-ocean-gray-500)" : "var(--color-ocean-gray-200)"
          }, null, 8, Wv)
        ])),
        p("div", Gv, [
          p("span", Hv, ce(m.input), 1),
          p("span", zv, ce(m.inputInstance), 1)
        ])
      ], 40, Bv))), 128)),
      l.value ? (te(), kt(No, {
        key: 0,
        to: "#sidebar-details"
      }, [
        f.isDataflowImplementationEnabled ? (te(), kt(Mv, {
          key: 1,
          connection: l.value
        }, null, 8, ["connection"])) : (te(), kt(Pv, {
          key: 0,
          connection: l.value
        }, null, 8, ["connection"]))
      ])) : ze("", !0)
    ], 64));
  }
}), Xv = /* @__PURE__ */ qr(Yv, [["__scopeId", "data-v-0fb60803"]]), Qv = ["onClick"], Jv = { class: "dataflows__left-port justify-self-end" }, Zv = { class: "dataflows__left-port__source-data-object mr-2" }, ey = { class: "dataflows__left-port__source-data-attribute" }, ty = { class: "dataflows__line col-start-3 row-start-1 flex items-center" }, ny = ["data-testid"], ry = {
  height: "12",
  width: "8",
  class: "col-start-3 justify-self-end mr-[9px] row-start-1",
  xmlns: "http://www.w3.org/2000/svg"
}, oy = { class: "dataflows__dataflowType bg-(--color-primary) text-white col-start-3 justify-self-center z-1 p-1 rounded-sm text-sm row-start-1" }, ay = { class: "dataflows__chevron-container col-start-3 justify-self-center row-start-1" }, iy = { class: "dataflows__icon-badge" }, sy = { class: "dataflows__right-port col-start-5 justify-self-start" }, ly = { class: "dataflows__right-port__input mr-2" }, uy = { class: "dataflows__right-port__input-instance" }, cy = /* @__PURE__ */ Ot({
  __name: "dataflows",
  props: {
    connections: {},
    isDataflowImplementationEnabled: { type: Boolean }
  },
  setup(t) {
    const r = t, i = Lt(), { sdk: l } = Mt(i), d = Tn(), f = Ue(!1), c = Ue(0), m = Ue(0), g = Ue([]), q = Ue(null), B = [
      ot.GOOSE,
      ot.REPORT,
      ot.SMV
    ], G = Xe(() => q.value ? re.value.find((J) => J.key === q.value)?.connections || [] : []), re = Xe(() => {
      const J = Z(r.connections);
      return Object.entries(J).sort(([Oe], [Y]) => Oe < Y ? -1 : Oe > Y ? 1 : 0).map(([Oe, Y]) => ({
        key: Oe,
        connections: Y.sort((ie) => ie.sourceDataAttribute === "q" || ie.sourceDataAttribute === "t" ? 1 : -1)
      }));
    });
    function Z(J) {
      return J.reduce(
        (Y, ie) => {
          const xe = `${ie.dataflowType}/${ie.input}/${ie.inputInstance}/${ie.sourceDataObject}`;
          return Y[xe] || (Y[xe] = []), Y[xe].push(ie), Y;
        },
        {}
      );
    }
    async function k(J) {
      const Oe = await l.value.findMatchingExtRef(J);
      d.openDialogWithContent(
        "DataflowImplementation",
        {
          extRef: Oe,
          connection: J
        },
        { class: "w-1/2 max-w-none" }
      );
    }
    function j(J) {
      return J ? B.includes(J) : !1;
    }
    function F(J, Oe) {
      !j(Oe.dataflowType) || !r.isDataflowImplementationEnabled || (J.preventDefault(), X(J), g.value = A(Oe), f.value = !0);
    }
    function X(J) {
      c.value = J.clientX, m.value = J.clientY;
    }
    function A(J) {
      return [
        {
          label: J.isImplemented ? "Show Implementation" : "Implement",
          action: () => k(J)
        }
      ];
    }
    function P(J) {
      q.value = q.value === J ? null : J;
    }
    return (J, Oe) => (te(), pe(Be, null, [
      (te(!0), pe(Be, null, ft(re.value, (Y, ie) => (te(), pe("div", {
        key: Y.key,
        class: It([
          "dataflows grid grid-cols-[1fr_20px_1fr_20px_1fr] grid-rows-[50px]",
          q.value === Y.key && "dataflows--detailed"
        ]),
        onClick: (xe) => P(Y.key)
      }, [
        p("div", Jv, [
          p("span", Zv, ce(Y.key.split("/")[3]), 1),
          p("span", ey, ce(Y.connections[0].sourceDataAttribute) + ", ... ", 1)
        ]),
        p("div", {
          class: It([
            "dataflows__left-lnode-port rounded-full w-[20px] h-[20px] col-start-2 justify-self-end -mr-[9px]",
            q.value === Y.key ? "bg-(--color-primary)" : "bg-(--color-ocean-gray-100)"
          ])
        }, null, 2),
        p("div", ty, [
          p("div", {
            class: It([
              "border h-[2px] w-full",
              q.value === Y.key ? "border-(--color-primary)" : "border-(--color-ocean-gray-100)",
              {
                "border-solid": !J.isDataflowImplementationEnabled || Y.connections[0].isImplemented,
                "border-dashed": J.isDataflowImplementationEnabled && !Y.connections[0].isImplemented,
                "border-dotted": J.isDataflowImplementationEnabled && Y.connections[0].notPossibleToImplement
              }
            ]),
            "data-testid": `dataflow-line-${ie}`
          }, null, 10, ny)
        ]),
        (te(), pe("svg", ry, [
          p("polygon", {
            points: "0,0 8,6 0,12",
            style: kr({
              fill: q.value === Y.key ? "var(--color-primary)" : "var(--color-ocean-gray-100)"
            })
          }, null, 4)
        ])),
        p("div", oy, ce(Y.key.split("/")[0]), 1),
        p("div", ay, [
          p("span", iy, ce(Y.connections.length), 1),
          yt(Ov, {
            class: It([
              "dataflows__icon-chevron-down",
              { "dataflows__icon-chevron-down--open": q.value === Y.key }
            ])
          }, null, 8, ["class"])
        ]),
        p("div", {
          class: It([
            "dataflows__right-lnode-port rounded-full w-[20px] h-[20px] col-start-4 justify-self-start -ml-[9px]",
            q.value === Y.key ? "bg-(--color-primary)" : "bg-(--color-ocean-gray-100)"
          ])
        }, null, 2),
        p("div", sy, [
          p("span", ly, ce(Y.key.split("/")[1]), 1),
          p("span", uy, ce(Y.key.split("/")[2]), 1)
        ]),
        q.value === Y.key ? (te(), kt(Xv, {
          key: 0,
          connections: G.value ?? [],
          "is-dataflow-implementation-enabled": J.isDataflowImplementationEnabled,
          "show-context-menu": F
        }, null, 8, ["connections", "is-dataflow-implementation-enabled"])) : ze("", !0)
      ], 10, Qv))), 128)),
      yt(xv, {
        x: c.value,
        y: m.value,
        isVisible: f.value,
        items: g.value,
        onClose: Oe[0] || (Oe[0] = (Y) => f.value = !1)
      }, null, 8, ["x", "y", "isVisible", "items"])
    ], 64));
  }
}), dy = /* @__PURE__ */ qr(cy, [["__scopeId", "data-v-f2c7cc02"]]), fy = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, py = {
  class: "[&_dt,dd]:inline [&_dt]:mr-1",
  "data-testid": "destination-placeholder-details"
}, hy = { class: "mt-4" }, my = { key: 0 }, vy = { key: 1 }, yy = {
  key: 2,
  class: "mt-4"
}, gy = /* @__PURE__ */ Ot({
  __name: "destination-placeholder.sidebar-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    const r = t, i = Lt(), { lnodeTypes: l } = Mt(i), d = Xe(() => l.value.find((m) => m.lnClass === r.placeholder.preferredLnode)?.dataObjects.find(
      (m) => m.name === r.placeholder.preferredDataObject
    )), f = Xe(() => d?.value?.dataAttributes?.find(
      (c) => c.name === r.placeholder.preferredDataAttribute
    ));
    return (c, m) => (te(), pe(Be, null, [
      m[9] || (m[9] = p("h2", { class: "text-lg font-bold mb-2" }, "Destination Placeholder", -1)),
      c.placeholder.dataflowType ? (te(), pe("span", fy, ce(c.placeholder.dataflowType), 1)) : ze("", !0),
      p("dl", py, [
        p("div", null, [
          m[0] || (m[0] = p("dt", null, "Input:", -1)),
          p("dd", null, ce(c.placeholder.input), 1)
        ]),
        p("div", null, [
          m[1] || (m[1] = p("dt", null, "Input Instance:", -1)),
          p("dd", null, ce(c.placeholder.inputInst || "-"), 1)
        ]),
        p("div", hy, [
          m[2] || (m[2] = p("dt", null, "Preferred LN:", -1)),
          p("dd", null, ce(c.placeholder.preferredLnode || "-"), 1)
        ]),
        p("div", null, [
          m[3] || (m[3] = p("dt", null, "Preferred DO:", -1)),
          p("dd", null, ce(c.placeholder.preferredDataObject || "-"), 1)
        ]),
        d.value?.desc ? (te(), pe("div", my, [
          m[4] || (m[4] = p("dt", null, "Preferred DO Desc:", -1)),
          p("dd", null, ce(d.value.desc), 1)
        ])) : ze("", !0),
        p("div", null, [
          m[5] || (m[5] = p("dt", null, "Preferred DA:", -1)),
          p("dd", null, ce(c.placeholder.preferredDataAttribute || "-"), 1)
        ]),
        f.value?.desc ? (te(), pe("div", vy, [
          m[6] || (m[6] = p("dt", null, "Preferred DA Desc:", -1)),
          p("dd", null, ce(f.value.desc), 1)
        ])) : ze("", !0),
        p("div", null, [
          m[7] || (m[7] = p("dt", null, "Process Resource:", -1)),
          p("dd", null, ce(c.placeholder.processResource || "-"), 1)
        ]),
        c.placeholder.isFulfilled != null ? (te(), pe("div", yy, [
          m[8] || (m[8] = p("dt", null, "Placeholder is fulfilled:", -1)),
          p("dd", null, ce(c.placeholder.isFulfilled), 1)
        ])) : ze("", !0)
      ])
    ], 64));
  }
}), by = {}, wy = {
  width: "16",
  height: "16",
  viewBox: "0 0 20 20",
  fill: "currentColor"
};
function _y(t, r) {
  return te(), pe("svg", wy, r[0] || (r[0] = [
    p("path", { d: "M5 11C4.44772 11 4 10.5523 4 10C4 9.44772 4.44772 9 5 9H15C15.5523 9 16 9.44772 16 10C16 10.5523 15.5523 11 15 11H5Z" }, null, -1),
    p("path", { d: "M9 5C9 4.44772 9.44772 4 10 4C10.5523 4 11 4.44772 11 5V15C11 15.5523 10.5523 16 10 16C9.44772 16 9 15.5523 9 15V5Z" }, null, -1)
  ]));
}
const To = /* @__PURE__ */ qr(by, [["render", _y]]), xy = { class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block" }, Cy = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, Sy = { class: "mt-4" }, Iy = /* @__PURE__ */ Ot({
  __name: "control-dataflow-destination-placeholder.sidebar-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    return (r, i) => (te(), pe(Be, null, [
      i[4] || (i[4] = p("h2", { class: "text-lg font-bold mb-2" }, "Controlled LNode Placeholder", -1)),
      p("span", xy, ce($e(ot).CONTROL), 1),
      p("dl", Cy, [
        p("div", null, [
          i[0] || (i[0] = p("dt", null, "Output:", -1)),
          p("dd", null, ce(r.placeholder.outputName), 1)
        ]),
        p("div", null, [
          i[1] || (i[1] = p("dt", null, "Controlled DO:", -1)),
          p("dd", null, ce(r.placeholder.dataObject || "-"), 1)
        ]),
        p("div", Sy, [
          i[2] || (i[2] = p("dt", null, "Preferred controller LN:", -1)),
          p("dd", null, ce(r.placeholder.preferredLnode || "-"), 1)
        ]),
        p("div", null, [
          i[3] || (i[3] = p("dt", null, "Process Resource:", -1)),
          p("dd", null, ce(r.placeholder.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), Oy = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, Ny = ["onClick"], Ty = ["data-testid"], Ey = ["onClick"], Dy = ["disabled", "onClick"], Ry = ["onClick"], Ay = ["onClick"], Py = { class: "col-start-5 col-span-1 self-center justify-self-start" }, ky = ["onClick"], Ly = ["onClick"], jy = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, $y = ["onClick"], Fy = ["data-testid"], My = ["onClick"], By = {
  class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn border-1 relative z-2 !bg-(--color-ocean-gray-75) text-(--color-ocean-gray-200) border-(--color-ocean-gray-200)",
  disabled: "",
  "aria-label": "Fulfill placeholder",
  title: "Fulfill placeholder"
}, Ky = ["onClick"], qy = ["onClick"], Uy = { class: "col-start-5 col-span-1 self-center justify-self-start" }, Vy = ["onClick"], Wy = /* @__PURE__ */ Ot({
  __name: "destination-placeholder-ports",
  props: {
    sourceLnode: {},
    destinationLnode: {}
  },
  setup(t) {
    const r = t, i = Lt(), l = Ni(), { destinationPlaceholders: d, destinationPlaceholdersForControlDataflow: f } = Mt(i), { activeElement: c } = Mt(l), m = Tn(), g = Xe(() => r.destinationLnode.id ? f.value.filter(
      (re) => re.lnodeId === r.destinationLnode.id
    ) : []), q = Xe(() => r.destinationLnode ? d?.value.filter((re) => re.lnodeId === r.destinationLnode?.id) : []), B = (re) => {
      if (r.sourceLnode)
        return re.preferredLnode ? r.sourceLnode.lnClass === re.preferredLnode : !0;
    };
    function G(re) {
      Ae(r.sourceLnode, "Source LNode is undefined"), m.openDialogWithContent("DataflowCreation", {
        sourceLnode: r.sourceLnode,
        destinationLnode: r.destinationLnode,
        destinationPlaceholder: re
      });
    }
    return (re, Z) => (te(), pe(Be, null, [
      (te(!0), pe(Be, null, ft(q.value, (k, j) => (te(), pe("div", {
        class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]",
        key: `destination-placeholder-port-${j}`
      }, [
        p("div", Oy, [
          p("div", {
            class: "flex items-center justify-self-end h-full w-3/4 hover:cursor-pointer",
            onClick: (F) => $e(l).setOrResetActiveElement(k.id)
          }, [
            p("div", {
              class: "relative w-full h-[12px]",
              "data-testid": `dest-placeholder-line-${j}`
            }, [
              (te(), pe("svg", {
                width: "100%",
                height: "12",
                class: It(["text-(--color-ocean-gray-100)", {
                  "text-(--color-primary)": $e(c) === k.id
                }])
              }, Z[0] || (Z[0] = [
                p("line", {
                  x1: "0",
                  y1: "6",
                  x2: "calc(100% - 10px)",
                  y2: "6",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-dasharray": "3,2"
                }, null, -1)
              ]), 2)),
              (te(), pe("svg", {
                width: "12",
                height: "12",
                class: It(["text-(--color-ocean-gray-100) absolute right-2 top-0", {
                  "text-(--color-primary)": $e(c) === k.id
                }]),
                viewBox: "0 0 12 12"
              }, Z[1] || (Z[1] = [
                p("polygon", {
                  points: "3.6,0 12,6 3.6,12",
                  fill: "currentColor"
                }, null, -1)
              ]), 2))
            ], 8, Ty)
          ], 8, Ny)
        ]),
        k.preferredLnode ? (te(), pe("div", {
          key: 0,
          onClick: (F) => $e(l).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-end z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer right-[70%]"
        }, ce(k.preferredLnode), 9, Ey)) : ze("", !0),
        p("button", {
          class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn bg-(--color-primary) border-1 text-white relative z-2",
          disabled: !r.sourceLnode || !r.destinationLnode || !B(k),
          style: kr(
            !r.sourceLnode || !r.destinationLnode || !B(k) ? {
              border: "1",
              backgroundColor: "var(--color-ocean-gray-75)",
              color: "var(--color-ocean-gray-200)",
              borderColor: "var(--color-ocean-gray-200)"
            } : { borderColor: "var(--color-primary)" }
          ),
          "aria-label": "Fulfill placeholder",
          title: "Fulfill placeholder",
          onClick: (F) => G(k)
        }, [
          yt(To)
        ], 12, Dy),
        k.preferredDataObject ? (te(), pe("div", {
          key: 1,
          onClick: (F) => $e(l).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-end z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer right-[10%] truncate max-w-[8ch]"
        }, ce(k.preferredDataObject), 9, Ry)) : ze("", !0),
        p("div", {
          onClick: (F) => $e(l).setOrResetActiveElement(k.id),
          class: It(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": $e(c) === k.id
          }])
        }, null, 10, Ay),
        p("div", Py, [
          p("span", {
            onClick: (F) => $e(l).setOrResetActiveElement(k.id),
            class: It([
              "relative inline-block px-2 py-1 mr-2 rounded-sm hover:cursor-pointer border-2",
              k.isFulfilled ? "border-solid" : "border-dashed",
              "border-(--color-ocean-gray-100)"
            ])
          }, [
            Ys(ce(k.input) + " ", 1),
            p("span", {
              class: It([{
                "bg-(--color-primary)": $e(c) === k.id
              }, "absolute -top-3 -right-3 bg-(--color-ocean-gray-100) text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"])
            }, " 1+ ", 2)
          ], 10, ky),
          p("span", {
            onClick: (F) => $e(l).setOrResetActiveElement(k.id),
            class: It([
              "px-2 py-1 rounded-sm hover:cursor-pointer border-2",
              k.isFulfilled ? "border-solid" : "border-dashed",
              "border-(--color-ocean-gray-100)"
            ])
          }, ce(k.inputInst), 11, Ly)
        ]),
        $e(c) == k.id ? (te(), kt(No, {
          key: 2,
          to: "#sidebar-details"
        }, [
          yt(gy, { placeholder: k }, null, 8, ["placeholder"])
        ])) : ze("", !0)
      ]))), 128)),
      (te(!0), pe(Be, null, ft(g.value, (k, j) => (te(), pe("div", {
        class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-[50px]",
        key: `destination-placeholder-port-${j}`
      }, [
        p("div", jy, [
          p("div", {
            class: "flex items-center justify-self-end h-full w-3/4 hover:cursor-pointer",
            onClick: (F) => $e(l).setOrResetActiveElement(k.id)
          }, [
            p("div", {
              class: "relative w-full h-[12px]",
              "data-testid": `control-dest-placeholder-line-${j}`
            }, [
              (te(), pe("svg", {
                width: "100%",
                height: "12",
                class: It(["text-(--color-ocean-gray-100)", {
                  "text-(--color-primary)": $e(c) === k.id
                }])
              }, Z[2] || (Z[2] = [
                p("line", {
                  x1: "0",
                  y1: "6",
                  x2: "calc(100% - 10px)",
                  y2: "6",
                  stroke: "currentColor",
                  "stroke-width": "2",
                  "stroke-dasharray": "3,2"
                }, null, -1)
              ]), 2)),
              (te(), pe("svg", {
                width: "12",
                height: "12",
                class: It(["text-(--color-ocean-gray-100) absolute right-2 top-0", {
                  "text-(--color-primary)": $e(c) === k.id
                }]),
                viewBox: "0 0 12 12"
              }, Z[3] || (Z[3] = [
                p("polygon", {
                  points: "3.6,0 12,6 3.6,12",
                  fill: "currentColor"
                }, null, -1)
              ]), 2))
            ], 8, Fy)
          ], 8, $y)
        ]),
        k.preferredLnode ? (te(), pe("div", {
          key: 0,
          onClick: (F) => $e(l).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-end z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer right-[70%]"
        }, ce(k.preferredLnode), 9, My)) : ze("", !0),
        p("button", By, [
          yt(To)
        ]),
        p("div", {
          onClick: (F) => $e(l).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-end z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer right-[10%] truncate max-w-[8ch]"
        }, ce(k.outputName), 9, Ky),
        p("div", {
          onClick: (F) => $e(l).setOrResetActiveElement(k.id),
          class: It(["rounded-full w-[20px] h-[20px] col-start-4 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-start -ml-[9px] hover:cursor-pointer", {
            "bg-(--color-primary)": $e(c) === k.id
          }])
        }, null, 10, qy),
        p("div", Uy, [
          p("span", {
            class: "border-2 border-dashed border-(--color-ocean-gray-100) px-2 py-1 mr-2 rounded-sm hover:cursor-pointer",
            onClick: (F) => $e(l).setOrResetActiveElement(k.id)
          }, ce(k.dataObject), 9, Vy)
        ]),
        $e(c) == k.id ? (te(), kt(No, {
          key: 1,
          to: "#sidebar-details"
        }, [
          yt(Iy, { placeholder: k }, null, 8, ["placeholder"])
        ])) : ze("", !0)
      ]))), 128))
    ], 64));
  }
}), Gy = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, Hy = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, zy = { class: "mt-4" }, Yy = { key: 0 }, Xy = { key: 1 }, Qy = { class: "mt-4" }, Jy = {
  key: 2,
  class: "mt-4"
}, Zy = /* @__PURE__ */ Ot({
  __name: "source-placeholder.sidebar-details",
  props: {
    placeholder: {},
    sourceLnodeId: {}
  },
  setup(t) {
    const r = t, i = Lt(), { lnodes: l } = Mt(i), d = Xe(() => l.value.find((m) => m.id === r.sourceLnodeId)?.dataObjectSpecifications?.find(
      (m) => m.name === r.placeholder.dataObject
    )), f = Xe(() => d?.value?.dataAttributeSpecifications?.find(
      (c) => c.name === r.placeholder.dataAttribute
    ));
    return (c, m) => (te(), pe(Be, null, [
      m[8] || (m[8] = p("h2", { class: "text-lg font-bold mb-2" }, "Source Placeholder", -1)),
      c.placeholder.dataflowType ? (te(), pe("span", Gy, ce(c.placeholder.dataflowType), 1)) : ze("", !0),
      p("dl", Hy, [
        p("div", null, [
          m[0] || (m[0] = p("dt", null, "Input:", -1)),
          p("dd", null, ce(c.placeholder.input), 1)
        ]),
        p("div", zy, [
          m[1] || (m[1] = p("dt", null, "DO:", -1)),
          p("dd", null, ce(c.placeholder.dataObject || "-"), 1)
        ]),
        d.value?.desc ? (te(), pe("div", Yy, [
          m[2] || (m[2] = p("dt", null, "DO Desc:", -1)),
          p("dd", null, ce(d.value?.desc), 1)
        ])) : ze("", !0),
        p("div", null, [
          m[3] || (m[3] = p("dt", null, "DA:", -1)),
          p("dd", null, ce(c.placeholder.dataAttribute || "-"), 1)
        ]),
        f.value?.desc ? (te(), pe("div", Xy, [
          m[4] || (m[4] = p("dt", null, "DA Desc:", -1)),
          p("dd", null, ce(f.value?.desc), 1)
        ])) : ze("", !0),
        p("div", Qy, [
          m[5] || (m[5] = p("dt", null, "Preferred LN:", -1)),
          p("dd", null, ce(c.placeholder.preferredLnode || "-"), 1)
        ]),
        p("div", null, [
          m[6] || (m[6] = p("dt", null, "Process Resource:", -1)),
          p("dd", null, ce(c.placeholder.processResource || "-"), 1)
        ]),
        c.placeholder.isFulfilled != null ? (te(), pe("div", Jy, [
          m[7] || (m[7] = p("dt", null, "Placeholder is fulfilled:", -1)),
          p("dd", null, ce(c.placeholder.isFulfilled), 1)
        ])) : ze("", !0)
      ])
    ], 64));
  }
}), eg = {
  key: 0,
  class: "bg-(--color-primary) text-white z-1 relative p-1 rounded-sm text-sm mb-4 inline-block"
}, tg = { class: "[&_dt,dd]:inline [&_dt]:mr-1" }, ng = { class: "mt-4" }, rg = /* @__PURE__ */ Ot({
  __name: "control-dataflow-source-placeholder.sidebar-details",
  props: {
    placeholder: {}
  },
  setup(t) {
    return (r, i) => (te(), pe(Be, null, [
      i[5] || (i[5] = p("h2", { class: "text-lg font-bold mb-2" }, "Controller Placeholder", -1)),
      r.placeholder.dataflowType ? (te(), pe("span", eg, ce(r.placeholder.dataflowType), 1)) : ze("", !0),
      p("dl", tg, [
        p("div", null, [
          i[0] || (i[0] = p("dt", null, "Output:", -1)),
          p("dd", null, ce(r.placeholder.outputName), 1)
        ]),
        p("div", null, [
          i[1] || (i[1] = p("dt", null, "Output Instance:", -1)),
          p("dd", null, ce(r.placeholder.outputInstance || "-"), 1)
        ]),
        p("div", ng, [
          i[2] || (i[2] = p("dt", null, "Preferred LN:", -1)),
          p("dd", null, ce(r.placeholder.preferredLnode || "-"), 1)
        ]),
        p("div", null, [
          i[3] || (i[3] = p("dt", null, "Preferred DO:", -1)),
          p("dd", null, ce(r.placeholder.preferredDataObject || "-"), 1)
        ]),
        p("div", null, [
          i[4] || (i[4] = p("dt", null, "Process Resource:", -1)),
          p("dd", null, ce(r.placeholder.processResource || "-"), 1)
        ])
      ])
    ], 64));
  }
}), og = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-12" }, ag = ["onClick"], ig = ["onClick"], sg = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, lg = ["onClick"], ug = ["onClick"], cg = ["onClick"], dg = ["onClick"], fg = ["disabled", "onClick"], pg = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] h-12" }, hg = ["onClick"], mg = { class: "border-2 border-(--color-ocean-gray-100) border-dashed px-2 py-1 mr-2 rounded-sm" }, vg = { class: "border-2 border-(--color-ocean-gray-100) border-dashed px-2 py-1 rounded-sm" }, yg = ["onClick"], gg = { class: "col-start-3 col-span-1 row-start-1 !pointer-events-none *:pointer-events-auto" }, bg = ["onClick"], wg = ["onClick"], _g = ["onClick"], xg = ["onClick"], Cg = {
  class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn border-1 relative z-2 !bg-(--color-ocean-gray-75) text-(--color-ocean-gray-200) border-(--color-ocean-gray-200)",
  disabled: "",
  "aria-label": "Fulfill placeholder",
  title: "Fulfill placeholder"
}, Sg = /* @__PURE__ */ Ot({
  __name: "source-placeholder-ports",
  props: {
    sourceLnode: {},
    destinationLnode: {}
  },
  setup(t) {
    const r = t, i = Ni(), { activeElement: l } = Mt(i), d = Lt(), { sourcePlaceholders: f, controlledConnections: c } = Mt(d), m = Tn(), g = Xe(() => r.sourceLnode.id ? f.value.filter((re) => re.lnodeId === r.sourceLnode.id) : []), q = Xe(() => r.sourceLnode.id ? c.value.filter(
      (re) => re.controllerLnodeId === r.sourceLnode.id && !re.controlledLnodeId
    ) : []), B = (re) => {
      if (r.destinationLnode)
        return re.preferredLnode ? r.destinationLnode.lnClass === re.preferredLnode ? r.destinationLnode : void 0 : r.destinationLnode;
    };
    function G(re) {
      Ae(r.destinationLnode, "Destination LNode is undefined"), m.openDialogWithContent("DataflowCreation", {
        sourceLnode: r.sourceLnode,
        destinationLnode: r.destinationLnode,
        sourcePlaceholder: re
      });
    }
    return (re, Z) => (te(), pe(Be, null, [
      (te(!0), pe(Be, null, ft(g.value, (k) => (te(), pe("div", og, [
        p("div", {
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer"
        }, [
          p("span", {
            class: It([k.isFulfilled ? "border-solid" : "border-dashed", "relative inline-block border-2 border-(--color-ocean-gray-100) px-2 py-1 rounded-sm"])
          }, [
            Ys(ce(k.dataObject) + "." + ce(k.dataAttribute) + " ", 1),
            p("span", {
              class: It([{
                "bg-(--color-primary)": $e(l) === k.id
              }, "absolute -top-3 -right-3 bg-(--color-ocean-gray-100) text-white text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center"])
            }, " 1+ ", 2)
          ], 2)
        ], 8, ag),
        p("div", {
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: It([{
            "bg-(--color-primary)": $e(l) === k.id
          }, "rounded-full size-5 col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[8.5px] hover:cursor-pointer"])
        }, null, 10, ig),
        p("div", sg, [
          p("div", {
            class: "flex items-center h-full w-3/4 hover:cursor-pointer",
            onClick: (j) => $e(i).setOrResetActiveElement(k.id)
          }, [
            p("div", {
              class: It(["h-[2px] w-full border border-dashed", {
                "border-[var(--color-primary)]": $e(l) === k.id,
                "border-[var(--color-gray-200)]": $e(l) !== k.id
              }]),
              onClick: (j) => $e(i).setOrResetActiveElement(k.id)
            }, null, 10, ug)
          ], 8, lg)
        ]),
        p("div", {
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[10%] truncate max-w-[8ch]"
        }, ce(k.input), 9, cg),
        k.preferredLnode ? (te(), pe("div", {
          key: 0,
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[70%]"
        }, ce(k.preferredLnode), 9, dg)) : ze("", !0),
        p("button", {
          class: "col-start-3 self-center justify-self-center p-4 rounded-sm text-sm row-start-1 btn bg-(--color-primary) border-1 text-white relative z-2",
          disabled: !r.sourceLnode || !r.destinationLnode || !B(k),
          style: kr(
            !r.sourceLnode || !r.destinationLnode || !B(k) ? {
              border: "1",
              backgroundColor: "var(--color-ocean-gray-75)",
              color: "var(--color-ocean-gray-200)",
              borderColor: "var(--color-ocean-gray-200)"
            } : { borderColor: "var(--color-primary)" }
          ),
          "aria-label": "Fulfill placeholder",
          title: "Fulfill placeholder",
          onClick: (j) => G(k)
        }, [
          yt(To)
        ], 12, fg),
        $e(l) == k.id ? (te(), kt(No, {
          key: 1,
          to: "#sidebar-details"
        }, [
          yt(Zy, {
            placeholder: k,
            sourceLnodeId: r.sourceLnode.id
          }, null, 8, ["placeholder", "sourceLnodeId"])
        ])) : ze("", !0)
      ]))), 256)),
      (te(!0), pe(Be, null, ft(q.value, (k) => (te(), pe("div", pg, [
        p("div", {
          class: "col-start-1 col-span-1 self-center justify-self-end hover:cursor-pointer",
          onClick: (j) => $e(i).setOrResetActiveElement(k.id)
        }, [
          p("span", mg, ce(k.outputName), 1),
          p("span", vg, ce(k.outputInstance), 1)
        ], 8, hg),
        p("div", {
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: It([{
            "bg-(--color-primary)": $e(l) === k.id
          }, "rounded-full size-5 col-start-2 col-span-1 bg-(--color-ocean-gray-100) self-center justify-self-end -mr-[8.5px] hover:cursor-pointer"])
        }, null, 10, yg),
        p("div", gg, [
          p("div", {
            class: "flex items-center h-full w-3/4 hover:cursor-pointer",
            onClick: (j) => $e(i).setOrResetActiveElement(k.id)
          }, [
            p("div", {
              class: It(["h-[2px] w-full border border-dashed", {
                "border-[var(--color-primary)]": $e(l) === k.id,
                "border-[var(--color-gray-200)]": $e(l) !== k.id
              }]),
              onClick: (j) => $e(i).setOrResetActiveElement(k.id)
            }, null, 10, wg)
          ], 8, bg)
        ]),
        p("div", {
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[10%] truncate max-w-[8ch]"
        }, ce(k.preferredDataObject), 9, _g),
        k.preferredLnode ? (te(), pe("div", {
          key: 0,
          onClick: (j) => $e(i).setOrResetActiveElement(k.id),
          class: "bg-(--color-ocean-gray-25) col-start-3 self-center justify-self-start z-1 relative p-1 rounded-sm text-sm row-start-1 hover:cursor-pointer left-[70%]"
        }, ce(k.preferredLnode), 9, xg)) : ze("", !0),
        p("button", Cg, [
          yt(To)
        ]),
        $e(l) == k.id ? (te(), kt(No, {
          key: 1,
          to: "#sidebar-details"
        }, [
          yt(rg, { placeholder: k }, null, 8, ["placeholder"])
        ])) : ze("", !0)
      ]))), 256))
    ], 64));
  }
}), Ig = { class: "grid grid-cols-[1fr_20px_1fr_20px_1fr] w-full mb-8 grid-rows-[50px_50px_1fr_80px]" }, Og = { class: "col-start-1 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Ng = ["value"], Tg = ["label"], Eg = ["value"], Dg = { class: "col-start-4 col-span-2 self-end justify-self-center row-start-1 text-center text-xs px-5" }, Rg = ["value"], Ag = ["label"], Pg = ["value"], kg = { class: "col-span-full row-start-3" }, Lg = /* @__PURE__ */ Ot({
  __name: "dataflow-visualisation",
  props: {
    isDataflowImplementationEnabled: { type: Boolean }
  },
  emits: ["sourceLnodeChange", "destinationLnodeChange"],
  setup(t, { emit: r }) {
    const i = r, l = Tn(), d = Lt(), { lnodes: f, connections: c, controlledConnections: m, sdk: g } = Mt(d), q = Ue(), B = Ue(), G = Ue(), re = Ue();
    Ut(
      () => f.value,
      () => {
        q.value = void 0, B.value = void 0;
      }
    );
    const Z = Ua(
      async () => await Promise.all(
        f.value.map(async (de) => {
          const he = (await g.value.generatePathForLnode(de.id))?.split("/");
          Ae(he.length > 0, "LNode path is invalid");
          const z = he[he.length - 1], U = he.slice(0, -1).join("/");
          return {
            lnodeId: de.id,
            path: U,
            label: z
          };
        })
      )
    ), k = Xe(() => {
      if (!Z.value)
        return {};
      const de = Z.value.filter(
        (Q) => Q.lnodeId !== B.value
      );
      return N(de);
    }), j = Xe(() => {
      if (!Z.value)
        return {};
      const de = Z.value.filter(
        (Q) => Q.lnodeId !== q.value
      );
      return N(de);
    }), F = Xe(() => !q.value || !B.value ? [] : c.value.filter(
      (de) => de.sourceLnodeId === q.value && de.destinationLnodeId === B.value
    )), X = Xe(() => !q.value || !B.value ? [] : m.value.filter(
      (de) => de.controllerLnodeId === q.value && de.controlledLnodeId === B.value
    )), A = Xe(
      () => Z.value?.find((de) => de.lnodeId === q.value)?.path ?? ""
    ), P = Xe(
      () => Z.value?.find((de) => de.lnodeId === B.value)?.path ?? ""
    );
    function J(de) {
      return f.value.find((Q) => Q.id === de) ?? void 0;
    }
    async function Oe(de) {
      q.value = de, G.value = J(de), i("sourceLnodeChange", de);
    }
    async function Y(de) {
      B.value = de, re.value = J(de), i("destinationLnodeChange", de);
    }
    function ie() {
      if (!G.value)
        throw new Error("Source LNode is undefined");
      l.openDialogWithContent("SourcePlaceholderCreation", {
        sourceLnode: G.value
      });
    }
    function xe() {
      if (!re.value)
        throw new Error("Destination LNode is undefined");
      l.openDialogWithContent("DestinationPlaceholderCreation", {
        destinationLnode: re.value
      });
    }
    function N(de) {
      const Q = de.sort((z, U) => z.label.localeCompare(U.label));
      let he = {};
      for (const z of Q) {
        const U = z.path;
        he[U] || (he[U] = []), he[U].push({
          lnodeId: z.lnodeId,
          label: z.label
        });
      }
      return ap(he);
    }
    return (de, Q) => (te(), pe("div", Ig, [
      Q[4] || (Q[4] = p("div", { class: "col-start-1 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2 min-h-[450px]" }, null, -1)),
      p("div", Og, ce(A.value), 1),
      p("select", {
        value: q.value ?? "",
        onChange: Q[0] || (Q[0] = (he) => Oe(he.target.value)),
        "data-testid": "select-source-lnode",
        class: "col-start-1 col-span-2 self-center justify-self-center row-start-2 text-lg text-center font-medium"
      }, [
        Q[2] || (Q[2] = p("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (te(!0), pe(Be, null, ft(k.value, (he, z) => (te(), pe("optgroup", {
          key: z,
          label: z
        }, [
          (te(!0), pe(Be, null, ft(he, (U) => (te(), pe("option", {
            key: U.lnodeId,
            value: U.lnodeId
          }, ce(U.label), 9, Eg))), 128))
        ], 8, Tg))), 128))
      ], 40, Ng),
      Q[5] || (Q[5] = p("div", { class: "col-start-4 col-span-2 row-span-full bg-(--color-ocean-gray-50) rounded-xl -z-1 border-(--color-ocean-gray-100) border-2 min-h-[450px]" }, null, -1)),
      p("div", Dg, ce(P.value), 1),
      p("select", {
        value: B.value ?? "",
        onChange: Q[1] || (Q[1] = (he) => Y(he.target.value)),
        "data-testid": "select-destination-lnode",
        class: "col-start-4 col-span-2 self-center justify-self-center row-start-2 text-lg text-center font-medium"
      }, [
        Q[3] || (Q[3] = p("option", {
          key: "null",
          value: ""
        }, "Select LNode", -1)),
        (te(!0), pe(Be, null, ft(j.value, (he, z) => (te(), pe("optgroup", {
          key: z,
          label: z
        }, [
          (te(!0), pe(Be, null, ft(he, (U) => (te(), pe("option", {
            key: U.lnodeId,
            value: U.lnodeId
          }, ce(U.label), 9, Pg))), 128))
        ], 8, Ag))), 128))
      ], 40, Rg),
      p("div", kg, [
        F.value.length > 0 ? (te(), kt(dy, {
          key: 0,
          connections: F.value,
          isDataflowImplementationEnabled: de.isDataflowImplementationEnabled
        }, null, 8, ["connections", "isDataflowImplementationEnabled"])) : ze("", !0),
        X.value.length > 0 ? (te(), kt($p, {
          key: 1,
          controlledConnections: X.value
        }, null, 8, ["controlledConnections"])) : ze("", !0),
        G.value && !de.isDataflowImplementationEnabled ? (te(), kt(Sg, {
          key: 2,
          sourceLnode: G.value,
          destinationLnode: re.value
        }, null, 8, ["sourceLnode", "destinationLnode"])) : ze("", !0),
        re.value && !de.isDataflowImplementationEnabled ? (te(), kt(Wy, {
          key: 3,
          sourceLnode: G.value,
          destinationLnode: re.value
        }, null, 8, ["sourceLnode", "destinationLnode"])) : ze("", !0)
      ]),
      G.value && !de.isDataflowImplementationEnabled ? (te(), pe("button", {
        key: 0,
        "aria-label": "Add source placeholder",
        title: "Add source placeholder",
        class: "custom-plus-btn-left",
        onClick: ie
      }, [
        yt(To)
      ])) : ze("", !0),
      re.value && !de.isDataflowImplementationEnabled ? (te(), pe("button", {
        key: 1,
        class: "custom-plus-btn-right",
        "aria-label": "Add destination placeholder",
        title: "Add destination placeholder",
        onClick: xe
      }, [
        yt(To)
      ])) : ze("", !0)
    ]));
  }
}), jg = /* @__PURE__ */ qr(Lg, [["__scopeId", "data-v-14ecf761"]]), $g = { class: "flex justify-between mb-6 w-full h-18" }, Fg = { key: 0 }, Mg = { class: "flex flex-col items-center justify-center w-full" }, Bg = ["disabled"], Kg = /* @__PURE__ */ Ot({
  __name: "dataflow-view",
  setup(t) {
    const r = Ue(), i = Ue(), l = Ue(!1), d = Tn(), f = Lt(), { lnodes: c } = Mt(f), m = Xe(() => G(r.value)), g = Xe(() => G(i.value));
    function q(Z) {
      r.value = Z;
    }
    function B(Z) {
      i.value = Z;
    }
    function G(Z) {
      return c.value.find((k) => k.id === Z) ?? void 0;
    }
    function re() {
      if (!m.value || !g.value)
        throw new Error("Source or Destination LNode is undefined");
      d.openDialogWithContent("DataflowCreation", {
        sourceLnode: m.value,
        destinationLnode: g.value
      });
    }
    return (Z, k) => (te(), pe(Be, null, [
      p("div", $g, [
        p("div", null, [
          k[1] || (k[1] = p("span", { class: "mr-3" }, "Specification", -1)),
          Je(p("input", {
            type: "checkbox",
            "onUpdate:modelValue": k[0] || (k[0] = (j) => l.value = j),
            class: "toggle"
          }, null, 512), [
            [Dr, l.value]
          ]),
          k[2] || (k[2] = p("span", { class: "ml-3" }, "Implementation", -1))
        ]),
        l.value ? (te(), pe("div", Fg, k[3] || (k[3] = [
          Qu('<div class="flex items-center"><div class="border w-[50px] h-[2px] mr-2"></div><span>Implemented</span></div><div class="flex items-center"><div class="border border-dashed w-[50px] h-[2px] mr-2"></div><span>Not implemented</span></div><div class="flex items-center"><div class="border border-dotted w-[50px] h-[2px] mr-2"></div><span>Not possible to implement</span></div>', 3)
        ]))) : ze("", !0)
      ]),
      p("div", Mg, [
        yt(jg, {
          onSourceLnodeChange: q,
          onDestinationLnodeChange: B,
          isDataflowImplementationEnabled: l.value
        }, null, 8, ["isDataflowImplementationEnabled"]),
        l.value ? ze("", !0) : (te(), pe("button", {
          key: 0,
          class: "btn bg-(--color-primary) border-none text-white disabled:text-(--color-ocean-gray-300)",
          onClick: re,
          disabled: !m.value || !g.value,
          "aria-label": "Add connection"
        }, [
          yt(To)
        ], 8, Bg))
      ])
    ], 64));
  }
}), qg = {}, Ug = { class: "layout" }, Vg = { class: "main" }, Wg = { class: "sidebar" };
function Gg(t, r) {
  return te(), pe("div", Ug, [
    p("div", Vg, [
      ul(t.$slots, "main", {}, void 0)
    ]),
    p("div", Wg, [
      ul(t.$slots, "sidebar", {}, void 0)
    ])
  ]);
}
const Hg = /* @__PURE__ */ qr(qg, [["render", Gg], ["__scopeId", "data-v-7e8ad238"]]), zg = {
  name: "sidebar",
  class: "root"
}, Yg = { class: "tabs tabs-box" }, Xg = { key: 0 }, Qg = { key: 1 }, Jg = /* @__PURE__ */ Ot({
  __name: "sidebar",
  setup(t) {
    const r = Ue("details");
    return (i, l) => (te(), pe("div", zg, [
      p("div", Yg, [
        Je(p("input", {
          type: "radio",
          value: "details",
          name: "tabs",
          "onUpdate:modelValue": l[0] || (l[0] = (d) => r.value = d),
          class: "tab",
          "aria-label": "Details"
        }, null, 512), [
          [Zn, r.value]
        ]),
        Je(p("input", {
          type: "radio",
          value: "advanced",
          name: "tabs",
          "onUpdate:modelValue": l[1] || (l[1] = (d) => r.value = d),
          class: "tab",
          "aria-label": "Advanced"
        }, null, 512), [
          [Zn, r.value]
        ])
      ]),
      p("div", null, [
        r.value === "details" ? (te(), pe("div", Xg, l[2] || (l[2] = [
          p("div", { id: "sidebar-details" }, null, -1)
        ]))) : ze("", !0),
        r.value === "advanced" ? (te(), pe("div", Qg)) : ze("", !0)
      ])
    ]));
  }
}), Zg = /* @__PURE__ */ qr(Jg, [["__scopeId", "data-v-980b55b9"]]), eb = {
  class: "modal",
  ref: "dialogRef"
}, tb = /* @__PURE__ */ Ot({
  __name: "dialog-container",
  setup(t) {
    const r = Tn(), { currentDialogContent: i } = Mt(r), l = ad("dialogRef");
    return Do(() => {
      l.value && (r.dialogRef = l.value);
    }), (d, f) => (te(), pe("dialog", eb, [
      p("div", {
        class: It(["modal-box max-h-[85vh]", $e(r).dialogAttributes?.class])
      }, [
        p("button", {
          class: "btn btn-sm btn-circle btn-ghost absolute right-2 top-2",
          "aria-label": "Close dialog",
          onClick: f[0] || (f[0] = //@ts-ignore
          (...c) => $e(r).handleClose && $e(r).handleClose(...c))
        }, " ✕ "),
        $e(i).component ? (te(), kt(gd($e(i).component), gc(Ju({ key: 0 }, $e(i).props)), null, 16)) : ze("", !0)
      ], 2),
      f[1] || (f[1] = p("form", {
        method: "dialog",
        class: "modal-backdrop"
      }, [
        p("button", null, "close")
      ], -1))
    ], 512));
  }
}), nb = ["id"], rb = { class: "px-5" }, ob = /* @__PURE__ */ Ot({
  __name: "app",
  props: {
    api: {}
  },
  setup(t) {
    const r = "ext-dataflow", i = t, l = Lt();
    let d = () => {
    };
    return Do(() => {
      d = i.api.activeFileName.subscribe((f) => {
        l.initApp(f);
      }), l.initApp(i.api.activeFileName.value);
    }), Us(() => {
      l.closeDatabase(), d();
    }), (f, c) => (te(), pe("article", {
      id: $e(r),
      style: { height: "100%" }
    }, [
      yt(Hg, null, {
        main: ms(() => [
          p("div", rb, [
            yt(Kg),
            yt(tb)
          ])
        ]),
        sidebar: ms(() => [
          yt(Zg)
        ]),
        _: 1
      })
    ], 8, nb));
  }
});
function Nb(t, r) {
  if (!document.getElementById(t)) {
    console.error({ msg: "could not found root element", rootId: t });
    return;
  }
  const l = Lf(ob, { api: r });
  return l.use(Ff()), l.mount(`#${t}`), l.unmount;
}
export {
  Nb as default
};
