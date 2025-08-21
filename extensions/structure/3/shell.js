(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(`.vue-flow{position:relative;width:100%;height:100%;overflow:hidden;z-index:0;direction:ltr}.vue-flow__container{position:absolute;height:100%;width:100%;left:0;top:0}.vue-flow__pane{z-index:1}.vue-flow__pane.draggable{cursor:grab}.vue-flow__pane.selection{cursor:pointer}.vue-flow__pane.dragging{cursor:grabbing}.vue-flow__transformationpane{transform-origin:0 0;z-index:2;pointer-events:none}.vue-flow__viewport{z-index:4;overflow:clip}.vue-flow__selection{z-index:6}.vue-flow__edge-labels{position:absolute;width:100%;height:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vue-flow__nodesselection-rect:focus,.vue-flow__nodesselection-rect:focus-visible{outline:none}.vue-flow .vue-flow__edges{pointer-events:none;overflow:visible}.vue-flow__edge-path,.vue-flow__connection-path{stroke:#b1b1b7;stroke-width:1;fill:none}.vue-flow__edge{pointer-events:visibleStroke;cursor:pointer}.vue-flow__edge.animated path{stroke-dasharray:5;animation:dashdraw .5s linear infinite}.vue-flow__edge.animated path.vue-flow__edge-interaction{stroke-dasharray:none;animation:none}.vue-flow__edge.inactive{pointer-events:none}.vue-flow__edge.selected,.vue-flow__edge:focus,.vue-flow__edge:focus-visible{outline:none}.vue-flow__edge.selected .vue-flow__edge-path,.vue-flow__edge:focus .vue-flow__edge-path,.vue-flow__edge:focus-visible .vue-flow__edge-path{stroke:#555}.vue-flow__edge-textwrapper{pointer-events:all}.vue-flow__edge-text{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none}.vue-flow__connection{pointer-events:none}.vue-flow__connection .animated{stroke-dasharray:5;animation:dashdraw .5s linear infinite}.vue-flow__connectionline{z-index:1001}.vue-flow__nodes{pointer-events:none;transform-origin:0 0}.vue-flow__node-default,.vue-flow__node-input,.vue-flow__node-output{border-width:1px;border-style:solid;border-color:#bbb}.vue-flow__node-default.selected,.vue-flow__node-default:focus,.vue-flow__node-default:focus-visible,.vue-flow__node-input.selected,.vue-flow__node-input:focus,.vue-flow__node-input:focus-visible,.vue-flow__node-output.selected,.vue-flow__node-output:focus,.vue-flow__node-output:focus-visible{outline:none;border:1px solid #555}.vue-flow__node{position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;pointer-events:all;transform-origin:0 0;box-sizing:border-box;cursor:default}.vue-flow__node.draggable{cursor:grab;pointer-events:all}.vue-flow__node.draggable.dragging{cursor:grabbing}.vue-flow__nodesselection{z-index:3;transform-origin:left top;pointer-events:none}.vue-flow__nodesselection-rect{position:absolute;pointer-events:all;cursor:grab}.vue-flow__nodesselection-rect.dragging{cursor:grabbing}.vue-flow__handle{position:absolute;pointer-events:none;min-width:5px;min-height:5px}.vue-flow__handle.connectable{pointer-events:all;cursor:crosshair}.vue-flow__handle-bottom{left:50%;bottom:0;transform:translate(-50%,50%)}.vue-flow__handle-top{left:50%;top:0;transform:translate(-50%,-50%)}.vue-flow__handle-left{top:50%;left:0;transform:translate(-50%,-50%)}.vue-flow__handle-right{top:50%;right:0;transform:translate(50%,-50%)}.vue-flow__edgeupdater{cursor:move;pointer-events:all}.vue-flow__panel{position:absolute;z-index:5;margin:15px}.vue-flow__panel.top{top:0}.vue-flow__panel.bottom{bottom:0}.vue-flow__panel.left{left:0}.vue-flow__panel.right{right:0}.vue-flow__panel.center{left:50%;transform:translate(-50%)}@keyframes dashdraw{0%{stroke-dashoffset:10}}:root{--vf-node-bg: #fff;--vf-node-text: #222;--vf-connection-path: #b1b1b7;--vf-handle: #555}.vue-flow__edge.updating .vue-flow__edge-path{stroke:#777}.vue-flow__edge-text{font-size:10px}.vue-flow__edge-textbg{fill:#fff}.vue-flow__connection-path{stroke:var(--vf-connection-path)}.vue-flow__node{cursor:grab}.vue-flow__node.selectable:focus,.vue-flow__node.selectable:focus-visible{outline:none}.vue-flow__node-default,.vue-flow__node-input,.vue-flow__node-output{padding:10px;border-radius:3px;width:150px;font-size:12px;text-align:center;border-width:1px;border-style:solid;color:var(--vf-node-text);background-color:var(--vf-node-bg);border-color:var(--vf-node-color)}.vue-flow__node-default.selected,.vue-flow__node-default.selected:hover,.vue-flow__node-input.selected,.vue-flow__node-input.selected:hover,.vue-flow__node-output.selected,.vue-flow__node-output.selected:hover{box-shadow:0 0 0 .5px var(--vf-box-shadow)}.vue-flow__node-default .vue-flow__handle,.vue-flow__node-input .vue-flow__handle,.vue-flow__node-output .vue-flow__handle{background:var(--vf-handle)}.vue-flow__node-default.selectable:hover,.vue-flow__node-input.selectable:hover,.vue-flow__node-output.selectable:hover{box-shadow:0 1px 4px 1px #00000014}.vue-flow__node-input{--vf-node-color: var(--vf-node-color, #0041d0);--vf-handle: var(--vf-node-color, #0041d0);--vf-box-shadow: var(--vf-node-color, #0041d0);background:var(--vf-node-bg);border-color:var(--vf-node-color, #0041d0)}.vue-flow__node-input.selected,.vue-flow__node-input:focus,.vue-flow__node-input:focus-visible{outline:none;border:1px solid var(--vf-node-color, #0041d0)}.vue-flow__node-default{--vf-handle: var(--vf-node-color, #1a192b);--vf-box-shadow: var(--vf-node-color, #1a192b);background:var(--vf-node-bg);border-color:var(--vf-node-color, #1a192b)}.vue-flow__node-default.selected,.vue-flow__node-default:focus,.vue-flow__node-default:focus-visible{outline:none;border:1px solid var(--vf-node-color, #1a192b)}.vue-flow__node-output{--vf-handle: var(--vf-node-color, #ff0072);--vf-box-shadow: var(--vf-node-color, #ff0072);background:var(--vf-node-bg);border-color:var(--vf-node-color, #ff0072)}.vue-flow__node-output.selected,.vue-flow__node-output:focus,.vue-flow__node-output:focus-visible{outline:none;border:1px solid var(--vf-node-color, #ff0072)}.vue-flow__nodesselection-rect,.vue-flow__selection{background:#0059dc14;border:1px dotted rgba(0,89,220,.8)}.vue-flow__nodesselection-rect:focus,.vue-flow__nodesselection-rect:focus-visible,.vue-flow__selection:focus,.vue-flow__selection:focus-visible{outline:none}.vue-flow__handle{width:6px;height:6px;background:var(--vf-handle);border:1px solid #fff;border-radius:100%}.vue-flow__controls{box-shadow:0 0 2px 1px #00000014}.vue-flow__controls-button{background:#fefefe;border:none;border-bottom:1px solid #eee;box-sizing:content-box;display:flex;justify-content:center;align-items:center;width:16px;height:16px;cursor:pointer;-webkit-user-select:none;user-select:none;padding:5px}.vue-flow__controls-button svg{width:100%;max-width:12px;max-height:12px}.vue-flow__controls-button:hover{background:#f4f4f4}.vue-flow__controls-button:disabled{pointer-events:none}.vue-flow__controls-button:disabled svg{fill-opacity:.4}.vue-flow__minimap{background-color:#fff}.vue-flow__minimap.pannable{cursor:grab}.vue-flow__minimap.dragging{cursor:grabbing}.vue-flow__minimap-mask.pannable{cursor:grab}/*! tailwindcss v4.1.12 | MIT License | https://tailwindcss.com */@layer properties{@supports (((-webkit-hyphens:none)) and (not (margin-trim:inline))) or ((-moz-orient:inline) and (not (color:rgb(from red r g b)))){*,:before,:after,::backdrop{--tw-rotate-x:initial;--tw-rotate-y:initial;--tw-rotate-z:initial;--tw-skew-x:initial;--tw-skew-y:initial}}}@layer theme{:root,:host{--font-sans:ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";--font-mono:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace;--default-font-family:var(--font-sans);--default-mono-font-family:var(--font-mono)}}@layer base{*,:after,:before,::backdrop{box-sizing:border-box;border:0 solid;margin:0;padding:0}::file-selector-button{box-sizing:border-box;border:0 solid;margin:0;padding:0}html,:host{-webkit-text-size-adjust:100%;tab-size:4;line-height:1.5;font-family:var(--default-font-family,ui-sans-serif,system-ui,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji");font-feature-settings:var(--default-font-feature-settings,normal);font-variation-settings:var(--default-font-variation-settings,normal);-webkit-tap-highlight-color:transparent}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;-webkit-text-decoration:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:var(--default-mono-font-family,ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace);font-feature-settings:var(--default-mono-font-feature-settings,normal);font-variation-settings:var(--default-mono-font-variation-settings,normal);font-size:1em}small{font-size:80%}sub,sup{vertical-align:baseline;font-size:75%;line-height:0;position:relative}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}:-moz-focusring{outline:auto}progress{vertical-align:baseline}summary{display:list-item}ol,ul,menu{list-style:none}img,svg,video,canvas,audio,iframe,embed,object{vertical-align:middle;display:block}img,video{max-width:100%;height:auto}button,input,select,optgroup,textarea{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}::file-selector-button{font:inherit;font-feature-settings:inherit;font-variation-settings:inherit;letter-spacing:inherit;color:inherit;opacity:1;background-color:#0000;border-radius:0}:where(select:is([multiple],[size])) optgroup{font-weight:bolder}:where(select:is([multiple],[size])) optgroup option{padding-inline-start:20px}::file-selector-button{margin-inline-end:4px}::placeholder{opacity:1}@supports (not ((-webkit-appearance:-apple-pay-button))) or (contain-intrinsic-size:1px){::placeholder{color:currentColor}@supports (color:color-mix(in lab,red,red)){::placeholder{color:color-mix(in oklab,currentcolor 50%,transparent)}}}textarea{resize:vertical}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-date-and-time-value{min-height:1lh;text-align:inherit}::-webkit-datetime-edit{display:inline-flex}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-datetime-edit{padding-block:0}::-webkit-datetime-edit-year-field{padding-block:0}::-webkit-datetime-edit-month-field{padding-block:0}::-webkit-datetime-edit-day-field{padding-block:0}::-webkit-datetime-edit-hour-field{padding-block:0}::-webkit-datetime-edit-minute-field{padding-block:0}::-webkit-datetime-edit-second-field{padding-block:0}::-webkit-datetime-edit-millisecond-field{padding-block:0}::-webkit-datetime-edit-meridiem-field{padding-block:0}::-webkit-calendar-picker-indicator{line-height:1}:-moz-ui-invalid{box-shadow:none}button,input:where([type=button],[type=reset],[type=submit]){appearance:button}::file-selector-button{appearance:button}::-webkit-inner-spin-button{height:auto}::-webkit-outer-spin-button{height:auto}[hidden]:where(:not([hidden=until-found])){display:none!important}:root,[data-theme]{background-color:var(--root-bg,var(--color-base-100));color:var(--color-base-content)}:root{--fx-noise:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='a'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='1.34' numOctaves='4' stitchTiles='stitch'%3E%3C/feTurbulence%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23a)' opacity='0.2'%3E%3C/rect%3E%3C/svg%3E")}@property --radialprogress{syntax: "<percentage>"; inherits: true; initial-value: 0%;}:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){scrollbar-gutter:stable;background-image:linear-gradient(var(--color-base-100),var(--color-base-100));--root-bg:var(--color-base-100)}@supports (color:color-mix(in lab,red,red)){:where(:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not(.drawer-open)>.drawer-toggle:checked)){--root-bg:color-mix(in srgb,var(--color-base-100),oklch(0% 0 0) 40%)}}:where(.modal[open],.modal-open,.modal-toggle:checked+.modal):not(.modal-start,.modal-end){scrollbar-gutter:stable}:root{scrollbar-color:currentColor #0000}@supports (color:color-mix(in lab,red,red)){:root{scrollbar-color:color-mix(in oklch,currentColor 35%,#0000)#0000}}:root:has(.modal-open,.modal[open],.modal:target,.modal-toggle:checked,.drawer:not([class*=drawer-open])>.drawer-toggle:checked){overflow:hidden}:where(:root),:root:has(input.theme-controller[value=spark]:checked),[data-theme=spark]{color-scheme:light;--color-base-100:oklch(98% 0 0);--color-base-200:oklch(97% 0 0);--color-base-300:oklch(92% 0 0);--color-base-content:oklch(37% 0 0);--color-primary:oklch(70% .213 47.604);--color-primary-content:oklch(97% .013 17.38);--color-secondary:oklch(95% .038 75.164);--color-secondary-content:oklch(66% .179 58.318);--color-accent:oklch(60% .118 184.704);--color-accent-content:oklch(98% .001 106.423);--color-neutral:oklch(55% .013 58.071);--color-neutral-content:oklch(98% .031 120.757);--color-info:oklch(70% .165 254.624);--color-info-content:oklch(98% .001 106.423);--color-success:oklch(72% .219 149.579);--color-success-content:oklch(98% .001 106.423);--color-warning:oklch(87% .169 91.605);--color-warning-content:oklch(98% .001 106.423);--color-error:oklch(63% .237 25.331);--color-error-content:oklch(98% .001 106.423);--radius-selector:.25rem;--radius-field:.25rem;--radius-box:.25rem;--size-selector:.21875rem;--size-field:.21875rem;--border:1.5px;--depth:1;--noise:1;--border-color:var(--color-base-content)}}@layer components;@layer utilities{.menu{--menu-active-fg:var(--color-neutral-content);--menu-active-bg:var(--color-neutral);flex-flow:column wrap;width:fit-content;padding:.5rem;font-size:.875rem;display:flex}.menu :where(li ul){white-space:nowrap;margin-inline-start:1rem;padding-inline-start:.5rem;position:relative}.menu :where(li ul):before{background-color:var(--color-base-content);opacity:.1;width:var(--border);content:"";inset-inline-start:0;position:absolute;top:.75rem;bottom:.75rem}.menu :where(li>.menu-dropdown:not(.menu-dropdown-show)){display:none}.menu :where(li:not(.menu-title)>:not(ul,details,.menu-title,.btn)),.menu :where(li:not(.menu-title)>details>summary:not(.menu-title)){border-radius:var(--radius-field);text-align:start;text-wrap:balance;-webkit-user-select:none;user-select:none;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;align-content:flex-start;align-items:center;gap:.5rem;padding-block:.375rem;padding-inline:.75rem;transition-property:color,background-color,box-shadow;transition-duration:.2s;transition-timing-function:cubic-bezier(0,0,.2,1);display:grid}.menu :where(li>details>summary){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li>details>summary){outline-offset:2px;outline:2px solid #0000}}.menu :where(li>details>summary)::-webkit-details-marker{display:none}:is(.menu :where(li>details>summary),.menu :where(li>.menu-dropdown-toggle)):after{content:"";transform-origin:50%;pointer-events:none;justify-self:flex-end;width:.375rem;height:.375rem;transition-property:rotate,translate;transition-duration:.2s;display:block;translate:0 -1px;rotate:-135deg;box-shadow:inset 2px 2px}.menu :where(li>details[open]>summary):after,.menu :where(li>.menu-dropdown-toggle.menu-dropdown-show):after{translate:0 1px;rotate:45deg}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{color:var(--color-base-content);--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn).menu-focus,.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title),li:not(.menu-title,.disabled)>details>summary:not(.menu-title)):not(.menu-active,:active,.btn):focus-visible{outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){cursor:pointer;background-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){background-color:color-mix(in oklab,var(--color-base-content)10%,transparent)}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){outline-offset:2px;outline:2px solid #0000}}.menu :where(li:not(.menu-title,.disabled)>:not(ul,details,.menu-title):not(.menu-active,:active,.btn):hover,li:not(.menu-title,.disabled)>details>summary:not(.menu-title):not(.menu-active,:active,.btn):hover){box-shadow:inset 0 1px #00000003,inset 0 -1px #ffffff03}.menu :where(li:empty){background-color:var(--color-base-content);opacity:.1;height:1px;margin:.5rem 1rem}.menu :where(li){flex-flow:column wrap;flex-shrink:0;align-items:stretch;display:flex;position:relative}.menu :where(li) .badge{justify-self:flex-end}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{outline-offset:2px;outline:2px solid #0000}}.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active{color:var(--menu-active-fg);background-color:var(--menu-active-bg);background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):not(:is(.menu :where(li)>:not(ul,.menu-title,details,.btn):active,.menu :where(li)>:not(ul,.menu-title,details,.btn).menu-active,.menu :where(li)>details>summary:active):active){box-shadow:0 2px calc(var(--depth)*3px) -2px var(--menu-active-bg)}.menu :where(li).menu-disabled{pointer-events:none;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.menu :where(li).menu-disabled{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.menu .dropdown:focus-within .menu-dropdown-toggle:after{translate:0 1px;rotate:45deg}.menu .dropdown-content{margin-top:.5rem;padding:.5rem}.menu .dropdown-content:before{display:none}.toggle{border:var(--border)solid currentColor;color:var(--input-color);cursor:pointer;appearance:none;vertical-align:middle;webkit-user-select:none;-webkit-user-select:none;user-select:none;--radius-selector-max:calc(var(--radius-selector) + var(--radius-selector) + var(--radius-selector));border-radius:calc(var(--radius-selector) + min(var(--toggle-p),var(--radius-selector-max)) + min(var(--border),var(--radius-selector-max)));padding:var(--toggle-p);flex-shrink:0;grid-template-columns:0fr 1fr 1fr;place-content:center;display:inline-grid;position:relative;box-shadow:inset 0 1px}@supports (color:color-mix(in lab,red,red)){.toggle{box-shadow:0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000) inset}}.toggle{--input-color:var(--color-base-content);transition:color .3s,grid-template-columns .2s}@supports (color:color-mix(in lab,red,red)){.toggle{--input-color:color-mix(in oklab,var(--color-base-content)50%,#0000)}}.toggle{--toggle-p:calc(var(--size)*.125);--size:calc(var(--size-selector,.25rem)*6);width:calc((var(--size)*2) - (var(--border) + var(--toggle-p))*2);height:var(--size)}.toggle>*{z-index:1;cursor:pointer;appearance:none;background-color:#0000;border:none;grid-column:2/span 1;grid-row-start:1;height:100%;padding:.125rem;transition:opacity .2s,rotate .4s}.toggle>:focus{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.toggle>:focus{outline-offset:2px;outline:2px solid #0000}}.toggle>:nth-child(2){color:var(--color-base-100);rotate:none}.toggle>:nth-child(3){color:var(--color-base-100);opacity:0;rotate:-15deg}.toggle:has(:checked)>:nth-child(2){opacity:0;rotate:15deg}.toggle:has(:checked)>:nth-child(3){opacity:1;rotate:none}.toggle:before{aspect-ratio:1;border-radius:var(--radius-selector);--tw-content:"";content:var(--tw-content);height:100%;box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px currentColor;background-color:currentColor;grid-row-start:1;grid-column-start:2;transition:background-color .1s,translate .2s,inset-inline-start .2s;position:relative;inset-inline-start:0;translate:0}@supports (color:color-mix(in lab,red,red)){.toggle:before{box-shadow:0 -1px oklch(0% 0 0/calc(var(--depth)*.1)) inset,0 8px 0 -4px oklch(100% 0 0/calc(var(--depth)*.1)) inset,0 1px color-mix(in oklab,currentColor calc(var(--depth)*10%),#0000)}}.toggle:before{background-size:auto,calc(var(--noise)*100%);background-image:none,var(--fx-noise)}@media (forced-colors:active){.toggle:before{outline-style:var(--tw-outline-style);outline-offset:-1px;outline-width:1px}}@media print{.toggle:before{outline-offset:-1rem;outline:.25rem solid}}.toggle:focus-visible,.toggle:has(:focus-visible){outline-offset:2px;outline:2px solid}.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked){background-color:var(--color-base-100);--input-color:var(--color-base-content);grid-template-columns:1fr 1fr 0fr}:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{background-color:currentColor}@starting-style{:is(.toggle:checked,.toggle[aria-checked=true],.toggle:has(>input:checked)):before{opacity:0}}.toggle:indeterminate{grid-template-columns:.5fr 1fr .5fr}.toggle:disabled{cursor:not-allowed;opacity:.3}.toggle:disabled:before{border:var(--border)solid currentColor;background-color:#0000}.input{cursor:text;border:var(--border)solid #0000;appearance:none;background-color:var(--color-base-100);vertical-align:middle;white-space:nowrap;width:clamp(3rem,20rem,100%);height:var(--size);touch-action:manipulation;border-color:var(--input-color);box-shadow:0 1px var(--input-color) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset;border-start-start-radius:var(--join-ss,var(--radius-field));border-start-end-radius:var(--join-se,var(--radius-field));border-end-end-radius:var(--join-ee,var(--radius-field));border-end-start-radius:var(--join-es,var(--radius-field));flex-shrink:1;align-items:center;gap:.5rem;padding-inline:.75rem;font-size:.875rem;display:inline-flex;position:relative}@supports (color:color-mix(in lab,red,red)){.input{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000) inset,0 -1px oklch(100% 0 0/calc(var(--depth)*.1)) inset}}.input{--size:calc(var(--size-field,.25rem)*10);--input-color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input{--input-color:color-mix(in oklab,var(--color-base-content)20%,#0000)}}.input:where(input){display:inline-flex}.input :where(input){appearance:none;background-color:#0000;border:none;width:100%;height:100%;display:inline-flex}.input :where(input):focus,.input :where(input):focus-within{--tw-outline-style:none;outline-style:none}@media (forced-colors:active){.input :where(input):focus,.input :where(input):focus-within{outline-offset:2px;outline:2px solid #0000}}.input :where(input[type=url]),.input :where(input[type=email]){direction:ltr}.input :where(input[type=date]){display:inline-block}.input:focus,.input:focus-within{--input-color:var(--color-base-content);box-shadow:0 1px var(--input-color)}@supports (color:color-mix(in lab,red,red)){.input:focus,.input:focus-within{box-shadow:0 1px color-mix(in oklab,var(--input-color)calc(var(--depth)*10%),#0000)}}.input:focus,.input:focus-within{outline:2px solid var(--input-color);outline-offset:2px;isolation:isolate;z-index:1}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){cursor:not-allowed;border-color:var(--color-base-200);background-color:var(--color-base-200);color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.input:has(>input[disabled]),.input:is(:disabled,[disabled]){color:color-mix(in oklab,var(--color-base-content)40%,transparent)}}:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){:is(.input:has(>input[disabled]),.input:is(:disabled,[disabled]))::placeholder{color:color-mix(in oklab,var(--color-base-content)20%,transparent)}}.input:has(>input[disabled]),.input:is(:disabled,[disabled]){box-shadow:none}.input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.input::-webkit-date-and-time-value{text-align:inherit}.input[type=number]::-webkit-inner-spin-button{margin-block:-.75rem;margin-inline-end:-.75rem}.input::-webkit-calendar-picker-indicator{position:absolute;inset-inline-end:.75em}.table{border-radius:var(--radius-box);text-align:left;width:100%;font-size:.875rem;position:relative}.table:where(:dir(rtl),[dir=rtl],[dir=rtl] *){text-align:right}@media (hover:hover){:is(.table tr.row-hover,.table tr.row-hover:nth-child(2n)):hover{background-color:var(--color-base-200)}}.table :where(th,td){vertical-align:middle;padding-block:.75rem;padding-inline:1rem}.table :where(thead,tfoot){white-space:nowrap;color:var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead,tfoot){color:color-mix(in oklab,var(--color-base-content)60%,transparent)}}.table :where(thead,tfoot){font-size:.875rem;font-weight:600}.table :where(tfoot){border-top:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(tfoot){border-top:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.table :where(.table-pin-rows thead tr){z-index:1;background-color:var(--color-base-100);position:sticky;top:0}.table :where(.table-pin-rows tfoot tr){z-index:1;background-color:var(--color-base-100);position:sticky;bottom:0}.table :where(.table-pin-cols tr th){background-color:var(--color-base-100);position:sticky;left:0;right:0}.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid var(--color-base-content)}@supports (color:color-mix(in lab,red,red)){.table :where(thead tr,tbody tr:not(:last-child)){border-bottom:var(--border)solid color-mix(in oklch,var(--color-base-content)5%,#0000)}}.absolute{position:absolute}.label{white-space:nowrap;color:currentColor;align-items:center;gap:.375rem;display:inline-flex}@supports (color:color-mix(in lab,red,red)){.label{color:color-mix(in oklab,currentColor 60%,transparent)}}.label:has(input){cursor:pointer}.label:is(.input>*,.select>*){white-space:nowrap;height:calc(100% - .5rem);font-size:inherit;align-items:center;padding-inline:.75rem;display:flex}.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid currentColor;margin-inline:-.75rem .75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):first-child{border-inline-end:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid currentColor;margin-inline:.75rem -.75rem}@supports (color:color-mix(in lab,red,red)){.label:is(.input>*,.select>*):last-child{border-inline-start:var(--border)solid color-mix(in oklab,currentColor 10%,#0000)}}.block{display:block}.table{display:table}.transform{transform:var(--tw-rotate-x,)var(--tw-rotate-y,)var(--tw-rotate-z,)var(--tw-skew-x,)var(--tw-skew-y,)}}@keyframes progress{50%{background-position-x:-115%}}@keyframes radio{0%{padding:5px}50%{padding:3px}}@keyframes toast{0%{opacity:0;scale:.9}to{opacity:1;scale:1}}@keyframes dropdown{0%{opacity:0}}@keyframes rating{0%,40%{filter:brightness(1.05)contrast(1.05);scale:1.1}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}@property --tw-rotate-x{syntax:"*";inherits:false}@property --tw-rotate-y{syntax:"*";inherits:false}@property --tw-rotate-z{syntax:"*";inherits:false}@property --tw-skew-x{syntax:"*";inherits:false}@property --tw-skew-y{syntax:"*";inherits:false}.root[data-v-fe8c57b4]{height:100%}`)),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
import { i as os, a as on, c as Wa, e as Ka, b as Qa, d as Ja, f as ja, g as is, h as rs, j as el, k as ss, l as as, m as tl, n as nl, o as ve, p as ls, q as kt, r as us, w as me, u as cs, s as ds, t as se, v as U, x as xe, y as be, z as ke, A as Ee, B as F, C as vn, D as ol, E as oe, F as Dn, G as Re, H as nt, I as _e, J as tt, K as il, L as rt, M as Ae, N as fo, O as fs, P as $e, Q as rl, R as Se, S as Xn, T as pe, U as Gn, V as yi, W as sl, X as al, Y as Et, Z as hs, _ as ge, $ as fe, a0 as wi, a1 as qn, a2 as pt, a3 as ll, a4 as jt, a5 as ul, a6 as cl, a7 as dl, a8 as fl } from "./runtime-core.esm-bundler-DNW37i4a.js";
let qo;
const Hi = typeof window < "u" && window.trustedTypes;
if (Hi)
  try {
    qo = /* @__PURE__ */ Hi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const gs = qo ? (e) => qo.createHTML(e) : (e) => e, hl = "http://www.w3.org/2000/svg", gl = "http://www.w3.org/1998/Math/MathML", Ke = typeof document < "u" ? document : null, Li = Ke && /* @__PURE__ */ Ke.createElement("template"), pl = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Ke.createElementNS(hl, e) : t === "mathml" ? Ke.createElementNS(gl, e) : n ? Ke.createElement(e, { is: n }) : Ke.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Ke.createTextNode(e),
  createComment: (e) => Ke.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ke.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, r) {
    const s = n ? n.previousSibling : t.lastChild;
    if (i && (i === r || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === r || !(i = i.nextSibling)); )
        ;
    else {
      Li.innerHTML = gs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const a = Li.content;
      if (o === "svg" || o === "mathml") {
        const l = a.firstChild;
        for (; l.firstChild; )
          a.appendChild(l.firstChild);
        a.removeChild(l);
      }
      t.insertBefore(a, n);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, vl = Symbol("_vtc");
function ml(e, t, n) {
  const o = e[vl];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Fi = Symbol("_vod"), yl = Symbol("_vsh"), wl = Symbol(""), _l = /(^|;)\s*display\s*:/;
function $l(e, t, n) {
  const o = e.style, i = on(n);
  let r = !1;
  if (n && !i) {
    if (t)
      if (on(t))
        for (const s of t.split(";")) {
          const a = s.slice(0, s.indexOf(":")).trim();
          n[a] == null && zn(o, a, "");
        }
      else
        for (const s in t)
          n[s] == null && zn(o, s, "");
    for (const s in n)
      s === "display" && (r = !0), zn(o, s, n[s]);
  } else if (i) {
    if (t !== n) {
      const s = o[wl];
      s && (n += ";" + s), o.cssText = n, r = _l.test(n);
    }
  } else t && e.removeAttribute("style");
  Fi in e && (e[Fi] = r ? o.display : "", e[yl] && (o.display = "none"));
}
const Yi = /\s*!important$/;
function zn(e, t, n) {
  if (ss(n))
    n.forEach((o) => zn(e, t, o));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = bl(e, t);
    Yi.test(n) ? e.setProperty(
      as(o),
      n.replace(Yi, ""),
      "important"
    ) : e[o] = n;
  }
}
const Xi = ["Webkit", "Moz", "ms"], ko = {};
function bl(e, t) {
  const n = ko[t];
  if (n)
    return n;
  let o = is(t);
  if (o !== "filter" && o in e)
    return ko[t] = o;
  o = tl(o);
  for (let i = 0; i < Xi.length; i++) {
    const r = Xi[i] + o;
    if (r in e)
      return ko[t] = r;
  }
  return t;
}
const Gi = "http://www.w3.org/1999/xlink";
function qi(e, t, n, o, i, r = ja(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Gi, t.slice(6, t.length)) : e.setAttributeNS(Gi, t, n) : n == null || r && !rs(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : el(n) ? String(n) : n
  );
}
function Zi(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? gs(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const a = r === "OPTION" ? e.getAttribute("value") || "" : e.value, l = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (a !== l || !("_value" in e)) && (e.value = l), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let s = !1;
  if (n === "" || n == null) {
    const a = typeof e[t];
    a === "boolean" ? n = rs(n) : n == null && a === "string" ? (n = "", s = !0) : a === "number" && (n = 0, s = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  s && e.removeAttribute(i || t);
}
function xl(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function El(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const Ui = Symbol("_vei");
function Sl(e, t, n, o, i = null) {
  const r = e[Ui] || (e[Ui] = {}), s = r[t];
  if (o && s)
    s.value = o;
  else {
    const [a, l] = Nl(t);
    if (o) {
      const u = r[t] = kl(
        o,
        i
      );
      xl(e, a, u, l);
    } else s && (El(e, a, s, l), r[t] = void 0);
  }
}
const Wi = /(?:Once|Passive|Capture)$/;
function Nl(e) {
  let t;
  if (Wi.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Wi); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : as(e.slice(2)), t];
}
let To = 0;
const Cl = /* @__PURE__ */ Promise.resolve(), Ml = () => To || (Cl.then(() => To = 0), To = Date.now());
function kl(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    nl(
      Tl(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Ml(), n;
}
function Tl(e, t) {
  if (ss(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Ki = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Il = (e, t, n, o, i, r) => {
  const s = i === "svg";
  t === "class" ? ml(e, o, s) : t === "style" ? $l(e, n, o) : Qa(t) ? Ja(t) || Sl(e, t, n, o, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Al(e, t, o, s)) ? (Zi(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && qi(e, t, o, s, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !on(o)) ? Zi(e, is(t), o, r, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), qi(e, t, o, s));
};
function Al(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Ki(t) && os(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Ki(t) && on(n) ? !1 : t in e;
}
const Dl = /* @__PURE__ */ Ka({ patchProp: Il }, pl);
let Qi;
function zl() {
  return Qi || (Qi = Wa(Dl));
}
const Pl = ((...e) => {
  const t = zl().createApp(...e), { mount: n } = t;
  return t.mount = (o) => {
    const i = Bl(o);
    if (!i) return;
    const r = t._component;
    !os(r) && !r.render && !r.template && (r.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const s = n(i, !1, Ol(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), s;
  }, t;
});
function Ol(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Bl(e) {
  return on(e) ? document.querySelector(e) : e;
}
var Rl = { NODE_ENV: "production" };
function ho(e) {
  return ls() ? (Dn(e), !0) : !1;
}
function Qe(e) {
  return typeof e == "function" ? e() : F(e);
}
const Vl = typeof window < "u" && typeof document < "u", Hl = (e) => typeof e < "u", Ll = Object.prototype.toString, Fl = (e) => Ll.call(e) === "[object Object]", Yl = () => {
};
function Xl(e, t) {
  function n(...o) {
    return new Promise((i, r) => {
      Promise.resolve(e(() => t.apply(this, o), { fn: t, thisArg: this, args: o })).then(i).catch(r);
    });
  }
  return n;
}
const ps = (e) => e();
function Gl(e = ps) {
  const t = _e(!0);
  function n() {
    t.value = !1;
  }
  function o() {
    t.value = !0;
  }
  const i = (...r) => {
    t.value && e(...r);
  };
  return { isActive: ul(t), pause: n, resume: o, eventFilter: i };
}
function Ji(e, t = !1, n = "Timeout") {
  return new Promise((o, i) => {
    setTimeout(t ? () => i(n) : o, e);
  });
}
function ql(e, t, n = {}) {
  const {
    eventFilter: o = ps,
    ...i
  } = n;
  return me(
    e,
    Xl(
      o,
      t
    ),
    i
  );
}
function Tt(e, t, n = {}) {
  const {
    eventFilter: o,
    ...i
  } = n, { eventFilter: r, pause: s, resume: a, isActive: l } = Gl(o);
  return { stop: ql(
    e,
    t,
    {
      ...i,
      eventFilter: r
    }
  ), pause: s, resume: a, isActive: l };
}
function Zl(e, t = {}) {
  if (!yi(e))
    return sl(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const o in e.value)
    n[o] = al(() => ({
      get() {
        return e.value[o];
      },
      set(i) {
        var r;
        if ((r = Qe(t.replaceRef)) != null ? r : !0)
          if (Array.isArray(e.value)) {
            const a = [...e.value];
            a[o] = i, e.value = a;
          } else {
            const a = { ...e.value, [o]: i };
            Object.setPrototypeOf(a, Object.getPrototypeOf(e.value)), e.value = a;
          }
        else
          e.value[o] = i;
      }
    }));
  return n;
}
function Zo(e, t = !1) {
  function n(d, { flush: h = "sync", deep: g = !1, timeout: b, throwOnTimeout: $ } = {}) {
    let S = null;
    const I = [new Promise((w) => {
      S = me(
        e,
        (k) => {
          d(k) !== t && (S?.(), w(k));
        },
        {
          flush: h,
          deep: g,
          immediate: !0
        }
      );
    })];
    return b != null && I.push(
      Ji(b, $).then(() => Qe(e)).finally(() => S?.())
    ), Promise.race(I);
  }
  function o(d, h) {
    if (!yi(d))
      return n((k) => k === d, h);
    const { flush: g = "sync", deep: b = !1, timeout: $, throwOnTimeout: S } = h ?? {};
    let _ = null;
    const w = [new Promise((k) => {
      _ = me(
        [e, d],
        ([O, H]) => {
          t !== (O === H) && (_?.(), k(O));
        },
        {
          flush: g,
          deep: b,
          immediate: !0
        }
      );
    })];
    return $ != null && w.push(
      Ji($, S).then(() => Qe(e)).finally(() => (_?.(), Qe(e)))
    ), Promise.race(w);
  }
  function i(d) {
    return n((h) => !!h, d);
  }
  function r(d) {
    return o(null, d);
  }
  function s(d) {
    return o(void 0, d);
  }
  function a(d) {
    return n(Number.isNaN, d);
  }
  function l(d, h) {
    return n((g) => {
      const b = Array.from(g);
      return b.includes(d) || b.includes(Qe(d));
    }, h);
  }
  function u(d) {
    return c(1, d);
  }
  function c(d = 1, h) {
    let g = -1;
    return n(() => (g += 1, g >= d), h);
  }
  return Array.isArray(Qe(e)) ? {
    toMatch: n,
    toContains: l,
    changed: u,
    changedTimes: c,
    get not() {
      return Zo(e, !t);
    }
  } : {
    toMatch: n,
    toBe: o,
    toBeTruthy: i,
    toBeNull: r,
    toBeNaN: a,
    toBeUndefined: s,
    changed: u,
    changedTimes: c,
    get not() {
      return Zo(e, !t);
    }
  };
}
function Uo(e) {
  return Zo(e);
}
function Ul(e) {
  var t;
  const n = Qe(e);
  return (t = n?.$el) != null ? t : n;
}
const vs = Vl ? window : void 0;
function ms(...e) {
  let t, n, o, i;
  if (typeof e[0] == "string" || Array.isArray(e[0]) ? ([n, o, i] = e, t = vs) : [t, n, o, i] = e, !t)
    return Yl;
  Array.isArray(n) || (n = [n]), Array.isArray(o) || (o = [o]);
  const r = [], s = () => {
    r.forEach((c) => c()), r.length = 0;
  }, a = (c, d, h, g) => (c.addEventListener(d, h, g), () => c.removeEventListener(d, h, g)), l = me(
    () => [Ul(t), Qe(i)],
    ([c, d]) => {
      if (s(), !c)
        return;
      const h = Fl(d) ? { ...d } : d;
      r.push(
        ...n.flatMap((g) => o.map((b) => a(c, g, b, h)))
      );
    },
    { immediate: !0, flush: "post" }
  ), u = () => {
    l(), s();
  };
  return ho(u), u;
}
function Wl(e) {
  return typeof e == "function" ? e : typeof e == "string" ? (t) => t.key === e : Array.isArray(e) ? (t) => e.includes(t.key) : () => !0;
}
function ji(...e) {
  let t, n, o = {};
  e.length === 3 ? (t = e[0], n = e[1], o = e[2]) : e.length === 2 ? typeof e[1] == "object" ? (t = !0, n = e[0], o = e[1]) : (t = e[0], n = e[1]) : (t = !0, n = e[0]);
  const {
    target: i = vs,
    eventName: r = "keydown",
    passive: s = !1,
    dedupe: a = !1
  } = o, l = Wl(t);
  return ms(i, r, (c) => {
    c.repeat && Qe(a) || l(c) && n(c);
  }, s);
}
function Kl(e) {
  return JSON.parse(JSON.stringify(e));
}
function Io(e, t, n, o = {}) {
  var i, r, s;
  const {
    clone: a = !1,
    passive: l = !1,
    eventName: u,
    deep: c = !1,
    defaultValue: d,
    shouldEmit: h
  } = o, g = vn(), b = n || g?.emit || ((i = g?.$emit) == null ? void 0 : i.bind(g)) || ((s = (r = g?.proxy) == null ? void 0 : r.$emit) == null ? void 0 : s.bind(g?.proxy));
  let $ = u;
  t || (t = "modelValue"), $ = $ || `update:${t.toString()}`;
  const S = (w) => a ? typeof a == "function" ? a(w) : Kl(w) : w, _ = () => Hl(e[t]) ? S(e[t]) : d, I = (w) => {
    h ? h(w) && b($, w) : b($, w);
  };
  if (l) {
    const w = _(), k = _e(w);
    let O = !1;
    return me(
      () => e[t],
      (H) => {
        O || (O = !0, k.value = S(H), tt(() => O = !1));
      }
    ), me(
      k,
      (H) => {
        !O && (H !== e[t] || c) && I(H);
      },
      { deep: c }
    ), k;
  } else
    return oe({
      get() {
        return _();
      },
      set(w) {
        I(w);
      }
    });
}
var Ql = { value: () => {
} };
function go() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o))
      throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Pn(n);
}
function Pn(e) {
  this._ = e;
}
function Jl(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n))
      throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Pn.prototype = go.prototype = {
  constructor: Pn,
  on: function(e, t) {
    var n = this._, o = Jl(e + "", n), i, r = -1, s = o.length;
    if (arguments.length < 2) {
      for (; ++r < s; )
        if ((i = (e = o[r]).type) && (i = jl(n[i], e.name)))
          return i;
      return;
    }
    if (t != null && typeof t != "function")
      throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (i = (e = o[r]).type)
        n[i] = er(n[i], e.name, t);
      else if (t == null)
        for (i in n)
          n[i] = er(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t)
      e[n] = t[n].slice();
    return new Pn(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0)
      for (var n = new Array(i), o = 0, i, r; o < i; ++o)
        n[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (r = this._[e], o = 0, i = r.length; o < i; ++o)
      r[o].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e))
      throw new Error("unknown type: " + e);
    for (var o = this._[e], i = 0, r = o.length; i < r; ++i)
      o[i].value.apply(t, n);
  }
};
function jl(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function er(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = Ql, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var Wo = "http://www.w3.org/1999/xhtml";
const tr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: Wo,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function po(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), tr.hasOwnProperty(t) ? { space: tr[t], local: e } : e;
}
function eu(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === Wo && t.documentElement.namespaceURI === Wo ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function tu(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ys(e) {
  var t = po(e);
  return (t.local ? tu : eu)(t);
}
function nu() {
}
function _i(e) {
  return e == null ? nu : function() {
    return this.querySelector(e);
  };
}
function ou(e) {
  typeof e != "function" && (e = _i(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], s = r.length, a = o[i] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = r[c]) && (u = e.call(l, l.__data__, c, r)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new De(o, this._parents);
}
function iu(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function ru() {
  return [];
}
function ws(e) {
  return e == null ? ru : function() {
    return this.querySelectorAll(e);
  };
}
function su(e) {
  return function() {
    return iu(e.apply(this, arguments));
  };
}
function au(e) {
  typeof e == "function" ? e = su(e) : e = ws(e);
  for (var t = this._groups, n = t.length, o = [], i = [], r = 0; r < n; ++r)
    for (var s = t[r], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (o.push(e.call(l, l.__data__, u, s)), i.push(l));
  return new De(o, i);
}
function _s(e) {
  return function() {
    return this.matches(e);
  };
}
function $s(e) {
  return function(t) {
    return t.matches(e);
  };
}
var lu = Array.prototype.find;
function uu(e) {
  return function() {
    return lu.call(this.children, e);
  };
}
function cu() {
  return this.firstElementChild;
}
function du(e) {
  return this.select(e == null ? cu : uu(typeof e == "function" ? e : $s(e)));
}
var fu = Array.prototype.filter;
function hu() {
  return Array.from(this.children);
}
function gu(e) {
  return function() {
    return fu.call(this.children, e);
  };
}
function pu(e) {
  return this.selectAll(e == null ? hu : gu(typeof e == "function" ? e : $s(e)));
}
function vu(e) {
  typeof e != "function" && (e = _s(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], s = r.length, a = o[i] = [], l, u = 0; u < s; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new De(o, this._parents);
}
function bs(e) {
  return new Array(e.length);
}
function mu() {
  return new De(this._enter || this._groups.map(bs), this._parents);
}
function Zn(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
Zn.prototype = {
  constructor: Zn,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function yu(e) {
  return function() {
    return e;
  };
}
function wu(e, t, n, o, i, r) {
  for (var s = 0, a, l = t.length, u = r.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = r[s], o[s] = a) : n[s] = new Zn(e, r[s]);
  for (; s < l; ++s)
    (a = t[s]) && (i[s] = a);
}
function _u(e, t, n, o, i, r, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = r.length, h = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (h[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? i[a] = l : u.set(g, l));
  for (a = 0; a < d; ++a)
    g = s.call(e, r[a], a, r) + "", (l = u.get(g)) ? (o[a] = l, l.__data__ = r[a], u.delete(g)) : n[a] = new Zn(e, r[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(h[a]) === l && (i[a] = l);
}
function $u(e) {
  return e.__data__;
}
function bu(e, t) {
  if (!arguments.length)
    return Array.from(this, $u);
  var n = t ? _u : wu, o = this._parents, i = this._groups;
  typeof e != "function" && (e = yu(e));
  for (var r = i.length, s = new Array(r), a = new Array(r), l = new Array(r), u = 0; u < r; ++u) {
    var c = o[u], d = i[u], h = d.length, g = xu(e.call(c, c && c.__data__, u, o)), b = g.length, $ = a[u] = new Array(b), S = s[u] = new Array(b), _ = l[u] = new Array(h);
    n(c, d, $, S, _, g, t);
    for (var I = 0, w = 0, k, O; I < b; ++I)
      if (k = $[I]) {
        for (I >= w && (w = I + 1); !(O = S[w]) && ++w < b; )
          ;
        k._next = O || null;
      }
  }
  return s = new De(s, o), s._enter = a, s._exit = l, s;
}
function xu(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function Eu() {
  return new De(this._exit || this._groups.map(bs), this._parents);
}
function Su(e, t, n) {
  var o = this.enter(), i = this, r = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? r.remove() : n(r), o && i ? o.merge(i).order() : i;
}
function Nu(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, r = o.length, s = Math.min(i, r), a = new Array(i), l = 0; l < s; ++l)
    for (var u = n[l], c = o[l], d = u.length, h = a[l] = new Array(d), g, b = 0; b < d; ++b)
      (g = u[b] || c[b]) && (h[b] = g);
  for (; l < i; ++l)
    a[l] = n[l];
  return new De(a, this._parents);
}
function Cu() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, r = o[i], s; --i >= 0; )
      (s = o[i]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function Mu(e) {
  e || (e = ku);
  function t(d, h) {
    return d && h ? e(d.__data__, h.__data__) : !d - !h;
  }
  for (var n = this._groups, o = n.length, i = new Array(o), r = 0; r < o; ++r) {
    for (var s = n[r], a = s.length, l = i[r] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new De(i, this._parents).order();
}
function ku(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function Tu() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function Iu() {
  return Array.from(this);
}
function Au() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, r = o.length; i < r; ++i) {
      var s = o[i];
      if (s)
        return s;
    }
  return null;
}
function Du() {
  let e = 0;
  for (const t of this)
    ++e;
  return e;
}
function zu() {
  return !this.node();
}
function Pu(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], r = 0, s = i.length, a; r < s; ++r)
      (a = i[r]) && e.call(a, a.__data__, r, i);
  return this;
}
function Ou(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Bu(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Ru(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function Vu(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function Hu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function Lu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function Fu(e, t) {
  var n = po(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? Bu : Ou : typeof t == "function" ? n.local ? Lu : Hu : n.local ? Vu : Ru)(n, t));
}
function xs(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function Yu(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function Xu(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function Gu(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function qu(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? Yu : typeof t == "function" ? Gu : Xu)(e, t, n ?? "")) : Pt(this.node(), e);
}
function Pt(e, t) {
  return e.style.getPropertyValue(t) || xs(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Zu(e) {
  return function() {
    delete this[e];
  };
}
function Uu(e, t) {
  return function() {
    this[e] = t;
  };
}
function Wu(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Ku(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Zu : typeof t == "function" ? Wu : Uu)(e, t)) : this.node()[e];
}
function Es(e) {
  return e.trim().split(/^|\s+/);
}
function $i(e) {
  return e.classList || new Ss(e);
}
function Ss(e) {
  this._node = e, this._names = Es(e.getAttribute("class") || "");
}
Ss.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Ns(e, t) {
  for (var n = $i(e), o = -1, i = t.length; ++o < i; )
    n.add(t[o]);
}
function Cs(e, t) {
  for (var n = $i(e), o = -1, i = t.length; ++o < i; )
    n.remove(t[o]);
}
function Qu(e) {
  return function() {
    Ns(this, e);
  };
}
function Ju(e) {
  return function() {
    Cs(this, e);
  };
}
function ju(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ns : Cs)(this, e);
  };
}
function ec(e, t) {
  var n = Es(e + "");
  if (arguments.length < 2) {
    for (var o = $i(this.node()), i = -1, r = n.length; ++i < r; )
      if (!o.contains(n[i]))
        return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? ju : t ? Qu : Ju)(n, t));
}
function tc() {
  this.textContent = "";
}
function nc(e) {
  return function() {
    this.textContent = e;
  };
}
function oc(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function ic(e) {
  return arguments.length ? this.each(e == null ? tc : (typeof e == "function" ? oc : nc)(e)) : this.node().textContent;
}
function rc() {
  this.innerHTML = "";
}
function sc(e) {
  return function() {
    this.innerHTML = e;
  };
}
function ac(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function lc(e) {
  return arguments.length ? this.each(e == null ? rc : (typeof e == "function" ? ac : sc)(e)) : this.node().innerHTML;
}
function uc() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function cc() {
  return this.each(uc);
}
function dc() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function fc() {
  return this.each(dc);
}
function hc(e) {
  var t = typeof e == "function" ? e : ys(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function gc() {
  return null;
}
function pc(e, t) {
  var n = typeof e == "function" ? e : ys(e), o = t == null ? gc : typeof t == "function" ? t : _i(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function vc() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function mc() {
  return this.each(vc);
}
function yc() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function wc() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function _c(e) {
  return this.select(e ? wc : yc);
}
function $c(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function bc(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function xc(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function Ec(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, r; n < i; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++o] = r;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function Sc(e, t, n) {
  return function() {
    var o = this.__on, i, r = bc(t);
    if (o) {
      for (var s = 0, a = o.length; s < a; ++s)
        if ((i = o[s]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = r, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), i = { type: e.type, name: e.name, value: t, listener: r, options: n }, o ? o.push(i) : this.__on = [i];
  };
}
function Nc(e, t, n) {
  var o = xc(e + ""), i, r = o.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (i = 0, c = a[l]; i < r; ++i)
          if ((s = o[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? Sc : Ec, i = 0; i < r; ++i)
    this.each(a(o[i], t, n));
  return this;
}
function Ms(e, t, n) {
  var o = xs(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function Cc(e, t) {
  return function() {
    return Ms(this, e, t);
  };
}
function Mc(e, t) {
  return function() {
    return Ms(this, e, t.apply(this, arguments));
  };
}
function kc(e, t) {
  return this.each((typeof t == "function" ? Mc : Cc)(e, t));
}
function* Tc() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, r = o.length, s; i < r; ++i)
      (s = o[i]) && (yield s);
}
var ks = [null];
function De(e, t) {
  this._groups = e, this._parents = t;
}
function mn() {
  return new De([[document.documentElement]], ks);
}
function Ic() {
  return this;
}
De.prototype = mn.prototype = {
  constructor: De,
  select: ou,
  selectAll: au,
  selectChild: du,
  selectChildren: pu,
  filter: vu,
  data: bu,
  enter: mu,
  exit: Eu,
  join: Su,
  merge: Nu,
  selection: Ic,
  order: Cu,
  sort: Mu,
  call: Tu,
  nodes: Iu,
  node: Au,
  size: Du,
  empty: zu,
  each: Pu,
  attr: Fu,
  style: qu,
  property: Ku,
  classed: ec,
  text: ic,
  html: lc,
  raise: cc,
  lower: fc,
  append: hc,
  insert: pc,
  remove: mc,
  clone: _c,
  datum: $c,
  on: Nc,
  dispatch: kc,
  [Symbol.iterator]: Tc
};
function Pe(e) {
  return typeof e == "string" ? new De([[document.querySelector(e)]], [document.documentElement]) : new De([[e]], ks);
}
function Ac(e) {
  let t;
  for (; t = e.sourceEvent; )
    e = t;
  return e;
}
function Le(e, t) {
  if (e = Ac(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const Dc = { passive: !1 }, rn = { capture: !0, passive: !1 };
function Ao(e) {
  e.stopImmediatePropagation();
}
function It(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Ts(e) {
  var t = e.document.documentElement, n = Pe(e).on("dragstart.drag", It, rn);
  "onselectstart" in t ? n.on("selectstart.drag", It, rn) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function Is(e, t) {
  var n = e.document.documentElement, o = Pe(e).on("dragstart.drag", null);
  t && (o.on("click.drag", It, rn), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
const $n = (e) => () => e;
function Ko(e, {
  sourceEvent: t,
  subject: n,
  target: o,
  identifier: i,
  active: r,
  x: s,
  y: a,
  dx: l,
  dy: u,
  dispatch: c
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    subject: { value: n, enumerable: !0, configurable: !0 },
    target: { value: o, enumerable: !0, configurable: !0 },
    identifier: { value: i, enumerable: !0, configurable: !0 },
    active: { value: r, enumerable: !0, configurable: !0 },
    x: { value: s, enumerable: !0, configurable: !0 },
    y: { value: a, enumerable: !0, configurable: !0 },
    dx: { value: l, enumerable: !0, configurable: !0 },
    dy: { value: u, enumerable: !0, configurable: !0 },
    _: { value: c }
  });
}
Ko.prototype.on = function() {
  var e = this._.on.apply(this._, arguments);
  return e === this._ ? this : e;
};
function zc(e) {
  return !e.ctrlKey && !e.button;
}
function Pc() {
  return this.parentNode;
}
function Oc(e, t) {
  return t ?? { x: e.x, y: e.y };
}
function Bc() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function Rc() {
  var e = zc, t = Pc, n = Oc, o = Bc, i = {}, r = go("start", "drag", "end"), s = 0, a, l, u, c, d = 0;
  function h(k) {
    k.on("mousedown.drag", g).filter(o).on("touchstart.drag", S).on("touchmove.drag", _, Dc).on("touchend.drag touchcancel.drag", I).style("touch-action", "none").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  function g(k, O) {
    if (!(c || !e.call(this, k, O))) {
      var H = w(this, t.call(this, k, O), k, O, "mouse");
      H && (Pe(k.view).on("mousemove.drag", b, rn).on("mouseup.drag", $, rn), Ts(k.view), Ao(k), u = !1, a = k.clientX, l = k.clientY, H("start", k));
    }
  }
  function b(k) {
    if (It(k), !u) {
      var O = k.clientX - a, H = k.clientY - l;
      u = O * O + H * H > d;
    }
    i.mouse("drag", k);
  }
  function $(k) {
    Pe(k.view).on("mousemove.drag mouseup.drag", null), Is(k.view, u), It(k), i.mouse("end", k);
  }
  function S(k, O) {
    if (e.call(this, k, O)) {
      var H = k.changedTouches, B = t.call(this, k, O), R = H.length, Q, Y;
      for (Q = 0; Q < R; ++Q)
        (Y = w(this, B, k, O, H[Q].identifier, H[Q])) && (Ao(k), Y("start", k, H[Q]));
    }
  }
  function _(k) {
    var O = k.changedTouches, H = O.length, B, R;
    for (B = 0; B < H; ++B)
      (R = i[O[B].identifier]) && (It(k), R("drag", k, O[B]));
  }
  function I(k) {
    var O = k.changedTouches, H = O.length, B, R;
    for (c && clearTimeout(c), c = setTimeout(function() {
      c = null;
    }, 500), B = 0; B < H; ++B)
      (R = i[O[B].identifier]) && (Ao(k), R("end", k, O[B]));
  }
  function w(k, O, H, B, R, Q) {
    var Y = r.copy(), V = Le(Q || H, O), N, W, f;
    if ((f = n.call(k, new Ko("beforestart", {
      sourceEvent: H,
      target: h,
      identifier: R,
      active: s,
      x: V[0],
      y: V[1],
      dx: 0,
      dy: 0,
      dispatch: Y
    }), B)) != null)
      return N = f.x - V[0] || 0, W = f.y - V[1] || 0, function E(v, C, x) {
        var A = V, M;
        switch (v) {
          case "start":
            i[R] = E, M = s++;
            break;
          case "end":
            delete i[R], --s;
          case "drag":
            V = Le(x || C, O), M = s;
            break;
        }
        Y.call(
          v,
          k,
          new Ko(v, {
            sourceEvent: C,
            subject: f,
            target: h,
            identifier: R,
            active: M,
            x: V[0] + N,
            y: V[1] + W,
            dx: V[0] - A[0],
            dy: V[1] - A[1],
            dispatch: Y
          }),
          B
        );
      };
  }
  return h.filter = function(k) {
    return arguments.length ? (e = typeof k == "function" ? k : $n(!!k), h) : e;
  }, h.container = function(k) {
    return arguments.length ? (t = typeof k == "function" ? k : $n(k), h) : t;
  }, h.subject = function(k) {
    return arguments.length ? (n = typeof k == "function" ? k : $n(k), h) : n;
  }, h.touchable = function(k) {
    return arguments.length ? (o = typeof k == "function" ? k : $n(!!k), h) : o;
  }, h.on = function() {
    var k = r.on.apply(r, arguments);
    return k === r ? h : k;
  }, h.clickDistance = function(k) {
    return arguments.length ? (d = (k = +k) * k, h) : Math.sqrt(d);
  }, h;
}
function bi(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function As(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t)
    n[o] = t[o];
  return n;
}
function yn() {
}
var sn = 0.7, Un = 1 / sn, At = "\\s*([+-]?\\d+)\\s*", an = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Xe = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", Vc = /^#([0-9a-f]{3,8})$/, Hc = new RegExp(`^rgb\\(${At},${At},${At}\\)$`), Lc = new RegExp(`^rgb\\(${Xe},${Xe},${Xe}\\)$`), Fc = new RegExp(`^rgba\\(${At},${At},${At},${an}\\)$`), Yc = new RegExp(`^rgba\\(${Xe},${Xe},${Xe},${an}\\)$`), Xc = new RegExp(`^hsl\\(${an},${Xe},${Xe}\\)$`), Gc = new RegExp(`^hsla\\(${an},${Xe},${Xe},${an}\\)$`), nr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
bi(yn, St, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: or,
  // Deprecated! Use color.formatHex.
  formatHex: or,
  formatHex8: qc,
  formatHsl: Zc,
  formatRgb: ir,
  toString: ir
});
function or() {
  return this.rgb().formatHex();
}
function qc() {
  return this.rgb().formatHex8();
}
function Zc() {
  return Ds(this).formatHsl();
}
function ir() {
  return this.rgb().formatRgb();
}
function St(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = Vc.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? rr(t) : n === 3 ? new Te(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? bn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? bn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = Hc.exec(e)) ? new Te(t[1], t[2], t[3], 1) : (t = Lc.exec(e)) ? new Te(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = Fc.exec(e)) ? bn(t[1], t[2], t[3], t[4]) : (t = Yc.exec(e)) ? bn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = Xc.exec(e)) ? lr(t[1], t[2] / 100, t[3] / 100, 1) : (t = Gc.exec(e)) ? lr(t[1], t[2] / 100, t[3] / 100, t[4]) : nr.hasOwnProperty(e) ? rr(nr[e]) : e === "transparent" ? new Te(NaN, NaN, NaN, 0) : null;
}
function rr(e) {
  return new Te(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function bn(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Te(e, t, n, o);
}
function Uc(e) {
  return e instanceof yn || (e = St(e)), e ? (e = e.rgb(), new Te(e.r, e.g, e.b, e.opacity)) : new Te();
}
function Qo(e, t, n, o) {
  return arguments.length === 1 ? Uc(e) : new Te(e, t, n, o ?? 1);
}
function Te(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
bi(Te, Qo, As(yn, {
  brighter(e) {
    return e = e == null ? Un : Math.pow(Un, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? sn : Math.pow(sn, e), new Te(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Te($t(this.r), $t(this.g), $t(this.b), Wn(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: sr,
  // Deprecated! Use color.formatHex.
  formatHex: sr,
  formatHex8: Wc,
  formatRgb: ar,
  toString: ar
}));
function sr() {
  return `#${wt(this.r)}${wt(this.g)}${wt(this.b)}`;
}
function Wc() {
  return `#${wt(this.r)}${wt(this.g)}${wt(this.b)}${wt((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function ar() {
  const e = Wn(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${$t(this.r)}, ${$t(this.g)}, ${$t(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function Wn(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function $t(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function wt(e) {
  return e = $t(e), (e < 16 ? "0" : "") + e.toString(16);
}
function lr(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Oe(e, t, n, o);
}
function Ds(e) {
  if (e instanceof Oe)
    return new Oe(e.h, e.s, e.l, e.opacity);
  if (e instanceof yn || (e = St(e)), !e)
    return new Oe();
  if (e instanceof Oe)
    return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), r = Math.max(t, n, o), s = NaN, a = r - i, l = (r + i) / 2;
  return a ? (t === r ? s = (n - o) / a + (n < o) * 6 : n === r ? s = (o - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? r + i : 2 - r - i, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Oe(s, a, l, e.opacity);
}
function Kc(e, t, n, o) {
  return arguments.length === 1 ? Ds(e) : new Oe(e, t, n, o ?? 1);
}
function Oe(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
bi(Oe, Kc, As(yn, {
  brighter(e) {
    return e = e == null ? Un : Math.pow(Un, e), new Oe(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? sn : Math.pow(sn, e), new Oe(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Te(
      Do(e >= 240 ? e - 240 : e + 120, i, o),
      Do(e, i, o),
      Do(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new Oe(ur(this.h), xn(this.s), xn(this.l), Wn(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = Wn(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${ur(this.h)}, ${xn(this.s) * 100}%, ${xn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function ur(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function xn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Do(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const xi = (e) => () => e;
function Qc(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Jc(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function jc(e) {
  return (e = +e) == 1 ? zs : function(t, n) {
    return n - t ? Jc(t, n, e) : xi(isNaN(t) ? n : t);
  };
}
function zs(e, t) {
  var n = t - e;
  return n ? Qc(e, n) : xi(isNaN(e) ? t : e);
}
const Kn = (function e(t) {
  var n = jc(t);
  function o(i, r) {
    var s = n((i = Qo(i)).r, (r = Qo(r)).r), a = n(i.g, r.g), l = n(i.b, r.b), u = zs(i.opacity, r.opacity);
    return function(c) {
      return i.r = s(c), i.g = a(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function ed(e, t) {
  t || (t = []);
  var n = e ? Math.min(t.length, e.length) : 0, o = t.slice(), i;
  return function(r) {
    for (i = 0; i < n; ++i)
      o[i] = e[i] * (1 - r) + t[i] * r;
    return o;
  };
}
function td(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}
function nd(e, t) {
  var n = t ? t.length : 0, o = e ? Math.min(n, e.length) : 0, i = new Array(o), r = new Array(n), s;
  for (s = 0; s < o; ++s)
    i[s] = en(e[s], t[s]);
  for (; s < n; ++s)
    r[s] = t[s];
  return function(a) {
    for (s = 0; s < o; ++s)
      r[s] = i[s](a);
    return r;
  };
}
function od(e, t) {
  var n = /* @__PURE__ */ new Date();
  return e = +e, t = +t, function(o) {
    return n.setTime(e * (1 - o) + t * o), n;
  };
}
function Fe(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
function id(e, t) {
  var n = {}, o = {}, i;
  (e === null || typeof e != "object") && (e = {}), (t === null || typeof t != "object") && (t = {});
  for (i in t)
    i in e ? n[i] = en(e[i], t[i]) : o[i] = t[i];
  return function(r) {
    for (i in n)
      o[i] = n[i](r);
    return o;
  };
}
var Jo = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, zo = new RegExp(Jo.source, "g");
function rd(e) {
  return function() {
    return e;
  };
}
function sd(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Ps(e, t) {
  var n = Jo.lastIndex = zo.lastIndex = 0, o, i, r, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (o = Jo.exec(e)) && (i = zo.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), a[s] ? a[s] += r : a[++s] = r), (o = o[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, l.push({ i: s, x: Fe(o, i) })), n = zo.lastIndex;
  return n < t.length && (r = t.slice(n), a[s] ? a[s] += r : a[++s] = r), a.length < 2 ? l[0] ? sd(l[0].x) : rd(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c)
      a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
function en(e, t) {
  var n = typeof t, o;
  return t == null || n === "boolean" ? xi(t) : (n === "number" ? Fe : n === "string" ? (o = St(t)) ? (t = o, Kn) : Ps : t instanceof St ? Kn : t instanceof Date ? od : td(t) ? ed : Array.isArray(t) ? nd : typeof t.valueOf != "function" && typeof t.toString != "function" || isNaN(t) ? id : Fe)(e, t);
}
var cr = 180 / Math.PI, jo = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Os(e, t, n, o, i, r) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * o) && (n -= e * l, o -= t * l), (a = Math.sqrt(n * n + o * o)) && (n /= a, o /= a, l /= a), e * o < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: i,
    translateY: r,
    rotate: Math.atan2(t, e) * cr,
    skewX: Math.atan(l) * cr,
    scaleX: s,
    scaleY: a
  };
}
var En;
function ad(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? jo : Os(t.a, t.b, t.c, t.d, t.e, t.f);
}
function ld(e) {
  return e == null || (En || (En = document.createElementNS("http://www.w3.org/2000/svg", "g")), En.setAttribute("transform", e), !(e = En.transform.baseVal.consolidate())) ? jo : (e = e.matrix, Os(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Bs(e, t, n, o) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function r(u, c, d, h, g, b) {
    if (u !== d || c !== h) {
      var $ = g.push("translate(", null, t, null, n);
      b.push({ i: $ - 4, x: Fe(u, d) }, { i: $ - 2, x: Fe(c, h) });
    } else (d || h) && g.push("translate(" + d + t + h + n);
  }
  function s(u, c, d, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: d.push(i(d) + "rotate(", null, o) - 2, x: Fe(u, c) })) : c && d.push(i(d) + "rotate(" + c + o);
  }
  function a(u, c, d, h) {
    u !== c ? h.push({ i: d.push(i(d) + "skewX(", null, o) - 2, x: Fe(u, c) }) : c && d.push(i(d) + "skewX(" + c + o);
  }
  function l(u, c, d, h, g, b) {
    if (u !== d || c !== h) {
      var $ = g.push(i(g) + "scale(", null, ",", null, ")");
      b.push({ i: $ - 4, x: Fe(u, d) }, { i: $ - 2, x: Fe(c, h) });
    } else (d !== 1 || h !== 1) && g.push(i(g) + "scale(" + d + "," + h + ")");
  }
  return function(u, c) {
    var d = [], h = [];
    return u = e(u), c = e(c), r(u.translateX, u.translateY, c.translateX, c.translateY, d, h), s(u.rotate, c.rotate, d, h), a(u.skewX, c.skewX, d, h), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, h), u = c = null, function(g) {
      for (var b = -1, $ = h.length, S; ++b < $; )
        d[(S = h[b]).i] = S.x(g);
      return d.join("");
    };
  };
}
var ud = Bs(ad, "px, ", "px)", "deg)"), cd = Bs(ld, ", ", ")", ")"), dd = 1e-12;
function dr(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function fd(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function hd(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const On = (function e(t, n, o) {
  function i(r, s) {
    var a = r[0], l = r[1], u = r[2], c = s[0], d = s[1], h = s[2], g = c - a, b = d - l, $ = g * g + b * b, S, _;
    if ($ < dd)
      _ = Math.log(h / u) / t, S = function(B) {
        return [
          a + B * g,
          l + B * b,
          u * Math.exp(t * B * _)
        ];
      };
    else {
      var I = Math.sqrt($), w = (h * h - u * u + o * $) / (2 * u * n * I), k = (h * h - u * u - o * $) / (2 * h * n * I), O = Math.log(Math.sqrt(w * w + 1) - w), H = Math.log(Math.sqrt(k * k + 1) - k);
      _ = (H - O) / t, S = function(B) {
        var R = B * _, Q = dr(O), Y = u / (n * I) * (Q * hd(t * R + O) - fd(O));
        return [
          a + Y * g,
          l + Y * b,
          u * Q / dr(t * R + O)
        ];
      };
    }
    return S.duration = _ * 1e3 * t / Math.SQRT2, S;
  }
  return i.rho = function(r) {
    var s = Math.max(1e-3, +r), a = s * s, l = a * a;
    return e(s, a, l);
  }, i;
})(Math.SQRT2, 2, 4);
var Ot = 0, Ut = 0, Yt = 0, Rs = 1e3, Qn, Wt, Jn = 0, Nt = 0, vo = 0, ln = typeof performance == "object" && performance.now ? performance : Date, Vs = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Ei() {
  return Nt || (Vs(gd), Nt = ln.now() + vo);
}
function gd() {
  Nt = 0;
}
function jn() {
  this._call = this._time = this._next = null;
}
jn.prototype = Hs.prototype = {
  constructor: jn,
  restart: function(e, t, n) {
    if (typeof e != "function")
      throw new TypeError("callback is not a function");
    n = (n == null ? Ei() : +n) + (t == null ? 0 : +t), !this._next && Wt !== this && (Wt ? Wt._next = this : Qn = this, Wt = this), this._call = e, this._time = n, ei();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, ei());
  }
};
function Hs(e, t, n) {
  var o = new jn();
  return o.restart(e, t, n), o;
}
function pd() {
  Ei(), ++Ot;
  for (var e = Qn, t; e; )
    (t = Nt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ot;
}
function fr() {
  Nt = (Jn = ln.now()) + vo, Ot = Ut = 0;
  try {
    pd();
  } finally {
    Ot = 0, md(), Nt = 0;
  }
}
function vd() {
  var e = ln.now(), t = e - Jn;
  t > Rs && (vo -= t, Jn = e);
}
function md() {
  for (var e, t = Qn, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : Qn = n);
  Wt = e, ei(o);
}
function ei(e) {
  if (!Ot) {
    Ut && (Ut = clearTimeout(Ut));
    var t = e - Nt;
    t > 24 ? (e < 1 / 0 && (Ut = setTimeout(fr, e - ln.now() - vo)), Yt && (Yt = clearInterval(Yt))) : (Yt || (Jn = ln.now(), Yt = setInterval(vd, Rs)), Ot = 1, Vs(fr));
  }
}
function hr(e, t, n) {
  var o = new jn();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var yd = go("start", "end", "cancel", "interrupt"), wd = [], Ls = 0, gr = 1, ti = 2, Bn = 3, pr = 4, ni = 5, Rn = 6;
function mo(e, t, n, o, i, r) {
  var s = e.__transition;
  if (!s)
    e.__transition = {};
  else if (n in s)
    return;
  _d(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: yd,
    tween: wd,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: Ls
  });
}
function Si(e, t) {
  var n = Ve(e, t);
  if (n.state > Ls)
    throw new Error("too late; already scheduled");
  return n;
}
function qe(e, t) {
  var n = Ve(e, t);
  if (n.state > Bn)
    throw new Error("too late; already running");
  return n;
}
function Ve(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t]))
    throw new Error("transition not found");
  return n;
}
function _d(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = Hs(r, 0, n.time);
  function r(u) {
    n.state = gr, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, h, g;
    if (n.state !== gr)
      return l();
    for (c in o)
      if (g = o[c], g.name === n.name) {
        if (g.state === Bn)
          return hr(s);
        g.state === pr ? (g.state = Rn, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete o[c]) : +c < t && (g.state = Rn, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete o[c]);
      }
    if (hr(function() {
      n.state === Bn && (n.state = pr, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = ti, n.on.call("start", e, e.__data__, n.index, n.group), n.state === ti) {
      for (n.state = Bn, i = new Array(h = n.tween.length), c = 0, d = -1; c < h; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++d] = g);
      i.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = ni, 1), d = -1, h = i.length; ++d < h; )
      i[d].call(e, c);
    n.state === ni && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Rn, n.timer.stop(), delete o[t];
    for (var u in o)
      return;
    delete e.__transition;
  }
}
function Vn(e, t) {
  var n = e.__transition, o, i, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((o = n[s]).name !== t) {
        r = !1;
        continue;
      }
      i = o.state > ti && o.state < ni, o.state = Rn, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function $d(e) {
  return this.each(function() {
    Vn(this, e);
  });
}
function bd(e, t) {
  var n, o;
  return function() {
    var i = qe(this, e), r = i.tween;
    if (r !== n) {
      o = n = r;
      for (var s = 0, a = o.length; s < a; ++s)
        if (o[s].name === t) {
          o = o.slice(), o.splice(s, 1);
          break;
        }
    }
    i.tween = o;
  };
}
function xd(e, t, n) {
  var o, i;
  if (typeof n != "function")
    throw new Error();
  return function() {
    var r = qe(this, e), s = r.tween;
    if (s !== o) {
      i = (o = s).slice();
      for (var a = { name: t, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === t) {
          i[l] = a;
          break;
        }
      l === u && i.push(a);
    }
    r.tween = i;
  };
}
function Ed(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = Ve(this.node(), n).tween, i = 0, r = o.length, s; i < r; ++i)
      if ((s = o[i]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? bd : xd)(n, e, t));
}
function Ni(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = qe(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return Ve(i, o).value[t];
  };
}
function Fs(e, t) {
  var n;
  return (typeof t == "number" ? Fe : t instanceof St ? Kn : (n = St(t)) ? (t = n, Kn) : Ps)(e, t);
}
function Sd(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Nd(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Cd(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === i ? null : s === o ? r : r = t(o = s, n);
  };
}
function Md(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === i ? null : s === o ? r : r = t(o = s, n);
  };
}
function kd(e, t, n) {
  var o, i, r;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === o && l === i ? r : (i = l, r = t(o = s, a)));
  };
}
function Td(e, t, n) {
  var o, i, r;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === o && l === i ? r : (i = l, r = t(o = s, a)));
  };
}
function Id(e, t) {
  var n = po(e), o = n === "transform" ? cd : Fs;
  return this.attrTween(e, typeof t == "function" ? (n.local ? Td : kd)(n, o, Ni(this, "attr." + e, t)) : t == null ? (n.local ? Nd : Sd)(n) : (n.local ? Md : Cd)(n, o, t));
}
function Ad(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function Dd(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function zd(e, t) {
  var n, o;
  function i() {
    var r = t.apply(this, arguments);
    return r !== o && (n = (o = r) && Dd(e, r)), n;
  }
  return i._value = t, i;
}
function Pd(e, t) {
  var n, o;
  function i() {
    var r = t.apply(this, arguments);
    return r !== o && (n = (o = r) && Ad(e, r)), n;
  }
  return i._value = t, i;
}
function Od(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2)
    return (n = this.tween(n)) && n._value;
  if (t == null)
    return this.tween(n, null);
  if (typeof t != "function")
    throw new Error();
  var o = po(e);
  return this.tween(n, (o.local ? zd : Pd)(o, t));
}
function Bd(e, t) {
  return function() {
    Si(this, e).delay = +t.apply(this, arguments);
  };
}
function Rd(e, t) {
  return t = +t, function() {
    Si(this, e).delay = t;
  };
}
function Vd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Bd : Rd)(t, e)) : Ve(this.node(), t).delay;
}
function Hd(e, t) {
  return function() {
    qe(this, e).duration = +t.apply(this, arguments);
  };
}
function Ld(e, t) {
  return t = +t, function() {
    qe(this, e).duration = t;
  };
}
function Fd(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? Hd : Ld)(t, e)) : Ve(this.node(), t).duration;
}
function Yd(e, t) {
  if (typeof t != "function")
    throw new Error();
  return function() {
    qe(this, e).ease = t;
  };
}
function Xd(e) {
  var t = this._id;
  return arguments.length ? this.each(Yd(t, e)) : Ve(this.node(), t).ease;
}
function Gd(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function")
      throw new Error();
    qe(this, e).ease = n;
  };
}
function qd(e) {
  if (typeof e != "function")
    throw new Error();
  return this.each(Gd(this._id, e));
}
function Zd(e) {
  typeof e != "function" && (e = _s(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], s = r.length, a = o[i] = [], l, u = 0; u < s; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new ot(o, this._parents, this._name, this._id);
}
function Ud(e) {
  if (e._id !== this._id)
    throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, r = Math.min(o, i), s = new Array(o), a = 0; a < r; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), h, g = 0; g < c; ++g)
      (h = l[g] || u[g]) && (d[g] = h);
  for (; a < o; ++a)
    s[a] = t[a];
  return new ot(s, this._parents, this._name, this._id);
}
function Wd(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function Kd(e, t, n) {
  var o, i, r = Wd(t) ? Si : qe;
  return function() {
    var s = r(this, e), a = s.on;
    a !== o && (i = (o = a).copy()).on(t, n), s.on = i;
  };
}
function Qd(e, t) {
  var n = this._id;
  return arguments.length < 2 ? Ve(this.node(), n).on.on(e) : this.each(Kd(n, e, t));
}
function Jd(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition)
      if (+n !== e)
        return;
    t && t.removeChild(this);
  };
}
function jd() {
  return this.on("end.remove", Jd(this._id));
}
function ef(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = _i(e));
  for (var o = this._groups, i = o.length, r = new Array(i), s = 0; s < i; ++s)
    for (var a = o[s], l = a.length, u = r[s] = new Array(l), c, d, h = 0; h < l; ++h)
      (c = a[h]) && (d = e.call(c, c.__data__, h, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[h] = d, mo(u[h], t, n, h, u, Ve(c, n)));
  return new ot(r, this._parents, t, n);
}
function tf(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = ws(e));
  for (var o = this._groups, i = o.length, r = [], s = [], a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var h = e.call(c, c.__data__, d, l), g, b = Ve(c, n), $ = 0, S = h.length; $ < S; ++$)
          (g = h[$]) && mo(g, t, n, $, h, b);
        r.push(h), s.push(c);
      }
  return new ot(r, s, t, n);
}
var nf = mn.prototype.constructor;
function of() {
  return new nf(this._groups, this._parents);
}
function rf(e, t) {
  var n, o, i;
  return function() {
    var r = Pt(this, e), s = (this.style.removeProperty(e), Pt(this, e));
    return r === s ? null : r === n && s === o ? i : i = t(n = r, o = s);
  };
}
function Ys(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function sf(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var s = Pt(this, e);
    return s === i ? null : s === o ? r : r = t(o = s, n);
  };
}
function af(e, t, n) {
  var o, i, r;
  return function() {
    var s = Pt(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Pt(this, e))), s === l ? null : s === o && l === i ? r : (i = l, r = t(o = s, a));
  };
}
function lf(e, t) {
  var n, o, i, r = "style." + t, s = "end." + r, a;
  return function() {
    var l = qe(this, e), u = l.on, c = l.value[r] == null ? a || (a = Ys(t)) : void 0;
    (u !== n || i !== c) && (o = (n = u).copy()).on(s, i = c), l.on = o;
  };
}
function uf(e, t, n) {
  var o = (e += "") == "transform" ? ud : Fs;
  return t == null ? this.styleTween(e, rf(e, o)).on("end.style." + e, Ys(e)) : typeof t == "function" ? this.styleTween(e, af(e, o, Ni(this, "style." + e, t))).each(lf(this._id, e)) : this.styleTween(e, sf(e, o, t), n).on("end.style." + e, null);
}
function cf(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function df(e, t, n) {
  var o, i;
  function r() {
    var s = t.apply(this, arguments);
    return s !== i && (o = (i = s) && cf(e, s, n)), o;
  }
  return r._value = t, r;
}
function ff(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2)
    return (o = this.tween(o)) && o._value;
  if (t == null)
    return this.tween(o, null);
  if (typeof t != "function")
    throw new Error();
  return this.tween(o, df(e, t, n ?? ""));
}
function hf(e) {
  return function() {
    this.textContent = e;
  };
}
function gf(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function pf(e) {
  return this.tween("text", typeof e == "function" ? gf(Ni(this, "text", e)) : hf(e == null ? "" : e + ""));
}
function vf(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function mf(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && vf(i)), t;
  }
  return o._value = e, o;
}
function yf(e) {
  var t = "text";
  if (arguments.length < 1)
    return (t = this.tween(t)) && t._value;
  if (e == null)
    return this.tween(t, null);
  if (typeof e != "function")
    throw new Error();
  return this.tween(t, mf(e));
}
function wf() {
  for (var e = this._name, t = this._id, n = Xs(), o = this._groups, i = o.length, r = 0; r < i; ++r)
    for (var s = o[r], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = Ve(l, t);
        mo(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new ot(o, this._parents, e, n);
}
function _f() {
  var e, t, n = this, o = n._id, i = n.size();
  return new Promise(function(r, s) {
    var a = { value: s }, l = { value: function() {
      --i === 0 && r();
    } };
    n.each(function() {
      var u = qe(this, o), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), i === 0 && r();
  });
}
var $f = 0;
function ot(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function Xs() {
  return ++$f;
}
var Ue = mn.prototype;
ot.prototype = {
  constructor: ot,
  select: ef,
  selectAll: tf,
  selectChild: Ue.selectChild,
  selectChildren: Ue.selectChildren,
  filter: Zd,
  merge: Ud,
  selection: of,
  transition: wf,
  call: Ue.call,
  nodes: Ue.nodes,
  node: Ue.node,
  size: Ue.size,
  empty: Ue.empty,
  each: Ue.each,
  on: Qd,
  attr: Id,
  attrTween: Od,
  style: uf,
  styleTween: ff,
  text: pf,
  textTween: yf,
  remove: jd,
  tween: Ed,
  delay: Vd,
  duration: Fd,
  ease: Xd,
  easeVarying: qd,
  end: _f,
  [Symbol.iterator]: Ue[Symbol.iterator]
};
function bf(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var xf = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: bf
};
function Ef(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function Sf(e) {
  var t, n;
  e instanceof ot ? (t = e._id, e = e._name) : (t = Xs(), (n = xf).time = Ei(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, r = 0; r < i; ++r)
    for (var s = o[r], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && mo(l, e, t, u, s, n || Ef(l, t));
  return new ot(o, this._parents, e, t);
}
mn.prototype.interrupt = $d;
mn.prototype.transition = Sf;
const Sn = (e) => () => e;
function Nf(e, {
  sourceEvent: t,
  target: n,
  transform: o,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function Je(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
Je.prototype = {
  constructor: Je,
  scale: function(e) {
    return e === 1 ? this : new Je(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new Je(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Bt = new Je(1, 0, 0);
Je.prototype;
function Po(e) {
  e.stopImmediatePropagation();
}
function Xt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Cf(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function Mf() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function vr() {
  return this.__zoom || Bt;
}
function kf(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function Tf() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function If(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], r = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s)
  );
}
function Af() {
  var e = Cf, t = Mf, n = If, o = kf, i = Tf, r = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = On, u = go("start", "zoom", "end"), c, d, h, g = 500, b = 150, $ = 0, S = 10;
  function _(f) {
    f.property("__zoom", vr).on("wheel.zoom", R, { passive: !1 }).on("mousedown.zoom", Q).on("dblclick.zoom", Y).filter(i).on("touchstart.zoom", V).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", W).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(f, E, v, C) {
    var x = f.selection ? f.selection() : f;
    x.property("__zoom", vr), f !== x ? O(f, E, v, C) : x.interrupt().each(function() {
      H(this, arguments).event(C).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, _.scaleBy = function(f, E, v, C) {
    _.scaleTo(f, function() {
      var x = this.__zoom.k, A = typeof E == "function" ? E.apply(this, arguments) : E;
      return x * A;
    }, v, C);
  }, _.scaleTo = function(f, E, v, C) {
    _.transform(f, function() {
      var x = t.apply(this, arguments), A = this.__zoom, M = v == null ? k(x) : typeof v == "function" ? v.apply(this, arguments) : v, z = A.invert(M), X = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(w(I(A, X), M, z), x, s);
    }, v, C);
  }, _.translateBy = function(f, E, v, C) {
    _.transform(f, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof v == "function" ? v.apply(this, arguments) : v
      ), t.apply(this, arguments), s);
    }, null, C);
  }, _.translateTo = function(f, E, v, C, x) {
    _.transform(f, function() {
      var A = t.apply(this, arguments), M = this.__zoom, z = C == null ? k(A) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(Bt.translate(z[0], z[1]).scale(M.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof v == "function" ? -v.apply(this, arguments) : -v
      ), A, s);
    }, C, x);
  };
  function I(f, E) {
    return E = Math.max(r[0], Math.min(r[1], E)), E === f.k ? f : new Je(E, f.x, f.y);
  }
  function w(f, E, v) {
    var C = E[0] - v[0] * f.k, x = E[1] - v[1] * f.k;
    return C === f.x && x === f.y ? f : new Je(f.k, C, x);
  }
  function k(f) {
    return [(+f[0][0] + +f[1][0]) / 2, (+f[0][1] + +f[1][1]) / 2];
  }
  function O(f, E, v, C) {
    f.on("start.zoom", function() {
      H(this, arguments).event(C).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(C).end();
    }).tween("zoom", function() {
      var x = this, A = arguments, M = H(x, A).event(C), z = t.apply(x, A), X = v == null ? k(z) : typeof v == "function" ? v.apply(x, A) : v, K = Math.max(z[1][0] - z[0][0], z[1][1] - z[0][1]), P = x.__zoom, G = typeof E == "function" ? E.apply(x, A) : E, L = l(P.invert(X).concat(K / P.k), G.invert(X).concat(K / G.k));
      return function(ne) {
        if (ne === 1)
          ne = G;
        else {
          var j = L(ne), ae = K / j[2];
          ne = new Je(ae, X[0] - j[0] * ae, X[1] - j[1] * ae);
        }
        M.zoom(null, ne);
      };
    });
  }
  function H(f, E, v) {
    return !v && f.__zooming || new B(f, E);
  }
  function B(f, E) {
    this.that = f, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(f, E), this.taps = 0;
  }
  B.prototype = {
    event: function(f) {
      return f && (this.sourceEvent = f), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(f, E) {
      return this.mouse && f !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && f !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && f !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(f) {
      var E = Pe(this.that).datum();
      u.call(
        f,
        this.that,
        new Nf(f, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function R(f, ...E) {
    if (!e.apply(this, arguments))
      return;
    var v = H(this, E).event(f), C = this.__zoom, x = Math.max(r[0], Math.min(r[1], C.k * Math.pow(2, o.apply(this, arguments)))), A = Le(f);
    if (v.wheel)
      (v.mouse[0][0] !== A[0] || v.mouse[0][1] !== A[1]) && (v.mouse[1] = C.invert(v.mouse[0] = A)), clearTimeout(v.wheel);
    else {
      if (C.k === x)
        return;
      v.mouse = [A, C.invert(A)], Vn(this), v.start();
    }
    Xt(f), v.wheel = setTimeout(M, b), v.zoom("mouse", n(w(I(C, x), v.mouse[0], v.mouse[1]), v.extent, s));
    function M() {
      v.wheel = null, v.end();
    }
  }
  function Q(f, ...E) {
    if (h || !e.apply(this, arguments))
      return;
    var v = f.currentTarget, C = H(this, E, !0).event(f), x = Pe(f.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", K, !0), A = Le(f, v), M = f.clientX, z = f.clientY;
    Ts(f.view), Po(f), C.mouse = [A, this.__zoom.invert(A)], Vn(this), C.start();
    function X(P) {
      if (Xt(P), !C.moved) {
        var G = P.clientX - M, L = P.clientY - z;
        C.moved = G * G + L * L > $;
      }
      C.event(P).zoom("mouse", n(w(C.that.__zoom, C.mouse[0] = Le(P, v), C.mouse[1]), C.extent, s));
    }
    function K(P) {
      x.on("mousemove.zoom mouseup.zoom", null), Is(P.view, C.moved), Xt(P), C.event(P).end();
    }
  }
  function Y(f, ...E) {
    if (e.apply(this, arguments)) {
      var v = this.__zoom, C = Le(f.changedTouches ? f.changedTouches[0] : f, this), x = v.invert(C), A = v.k * (f.shiftKey ? 0.5 : 2), M = n(w(I(v, A), C, x), t.apply(this, E), s);
      Xt(f), a > 0 ? Pe(this).transition().duration(a).call(O, M, C, f) : Pe(this).call(_.transform, M, C, f);
    }
  }
  function V(f, ...E) {
    if (e.apply(this, arguments)) {
      var v = f.touches, C = v.length, x = H(this, E, f.changedTouches.length === C).event(f), A, M, z, X;
      for (Po(f), M = 0; M < C; ++M)
        z = v[M], X = Le(z, this), X = [X, this.__zoom.invert(X), z.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== X[2] && (x.touch1 = X, x.taps = 0) : (x.touch0 = X, A = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (x.taps < 2 && (d = X[0], c = setTimeout(function() {
        c = null;
      }, g)), Vn(this), x.start());
    }
  }
  function N(f, ...E) {
    if (this.__zooming) {
      var v = H(this, E).event(f), C = f.changedTouches, x = C.length, A, M, z, X;
      for (Xt(f), A = 0; A < x; ++A)
        M = C[A], z = Le(M, this), v.touch0 && v.touch0[2] === M.identifier ? v.touch0[0] = z : v.touch1 && v.touch1[2] === M.identifier && (v.touch1[0] = z);
      if (M = v.that.__zoom, v.touch1) {
        var K = v.touch0[0], P = v.touch0[1], G = v.touch1[0], L = v.touch1[1], ne = (ne = G[0] - K[0]) * ne + (ne = G[1] - K[1]) * ne, j = (j = L[0] - P[0]) * j + (j = L[1] - P[1]) * j;
        M = I(M, Math.sqrt(ne / j)), z = [(K[0] + G[0]) / 2, (K[1] + G[1]) / 2], X = [(P[0] + L[0]) / 2, (P[1] + L[1]) / 2];
      } else if (v.touch0)
        z = v.touch0[0], X = v.touch0[1];
      else
        return;
      v.zoom("touch", n(w(M, z, X), v.extent, s));
    }
  }
  function W(f, ...E) {
    if (this.__zooming) {
      var v = H(this, E).event(f), C = f.changedTouches, x = C.length, A, M;
      for (Po(f), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, g), A = 0; A < x; ++A)
        M = C[A], v.touch0 && v.touch0[2] === M.identifier ? delete v.touch0 : v.touch1 && v.touch1[2] === M.identifier && delete v.touch1;
      if (v.touch1 && !v.touch0 && (v.touch0 = v.touch1, delete v.touch1), v.touch0)
        v.touch0[1] = this.__zoom.invert(v.touch0[0]);
      else if (v.end(), v.taps === 2 && (M = Le(M, this), Math.hypot(d[0] - M[0], d[1] - M[1]) < S)) {
        var z = Pe(this).on("dblclick.zoom");
        z && z.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : Sn(+f), _) : o;
  }, _.filter = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : Sn(!!f), _) : e;
  }, _.touchable = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : Sn(!!f), _) : i;
  }, _.extent = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : Sn([[+f[0][0], +f[0][1]], [+f[1][0], +f[1][1]]]), _) : t;
  }, _.scaleExtent = function(f) {
    return arguments.length ? (r[0] = +f[0], r[1] = +f[1], _) : [r[0], r[1]];
  }, _.translateExtent = function(f) {
    return arguments.length ? (s[0][0] = +f[0][0], s[1][0] = +f[1][0], s[0][1] = +f[0][1], s[1][1] = +f[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(f) {
    return arguments.length ? (n = f, _) : n;
  }, _.duration = function(f) {
    return arguments.length ? (a = +f, _) : a;
  }, _.interpolate = function(f) {
    return arguments.length ? (l = f, _) : l;
  }, _.on = function() {
    var f = u.on.apply(u, arguments);
    return f === u ? _ : f;
  }, _.clickDistance = function(f) {
    return arguments.length ? ($ = (f = +f) * f, _) : Math.sqrt($);
  }, _.tapDistance = function(f) {
    return arguments.length ? (S = +f, _) : S;
  }, _;
}
var J = /* @__PURE__ */ ((e) => (e.Left = "left", e.Top = "top", e.Right = "right", e.Bottom = "bottom", e))(J || {}), Ci = /* @__PURE__ */ ((e) => (e.Partial = "partial", e.Full = "full", e))(Ci || {}), vt = /* @__PURE__ */ ((e) => (e.Bezier = "default", e.SimpleBezier = "simple-bezier", e.Straight = "straight", e.Step = "step", e.SmoothStep = "smoothstep", e))(vt || {}), ht = /* @__PURE__ */ ((e) => (e.Strict = "strict", e.Loose = "loose", e))(ht || {}), eo = /* @__PURE__ */ ((e) => (e.Arrow = "arrow", e.ArrowClosed = "arrowclosed", e))(eo || {}), tn = /* @__PURE__ */ ((e) => (e.Free = "free", e.Vertical = "vertical", e.Horizontal = "horizontal", e))(tn || {}), Gs = /* @__PURE__ */ ((e) => (e.TopLeft = "top-left", e.TopCenter = "top-center", e.TopRight = "top-right", e.BottomLeft = "bottom-left", e.BottomCenter = "bottom-center", e.BottomRight = "bottom-right", e))(Gs || {});
const Df = ["INPUT", "SELECT", "TEXTAREA"], zf = typeof document < "u" ? document : null;
function oi(e) {
  var t, n;
  const o = ((n = (t = e.composedPath) == null ? void 0 : t.call(e)) == null ? void 0 : n[0]) || e.target, i = typeof o?.hasAttribute == "function" ? o.hasAttribute("contenteditable") : !1, r = typeof o?.closest == "function" ? o.closest(".nokey") : null;
  return Df.includes(o?.nodeName) || i || !!r;
}
function Pf(e) {
  return e.ctrlKey || e.metaKey || e.shiftKey || e.altKey;
}
function mr(e, t, n, o) {
  const i = t.replace("+", `
`).replace(`

`, `
+`).split(`
`).map((s) => s.trim().toLowerCase());
  if (i.length === 1)
    return e.toLowerCase() === t.toLowerCase();
  o || n.add(e.toLowerCase());
  const r = i.every(
    (s, a) => n.has(s) && Array.from(n.values())[a] === i[a]
  );
  return o && n.delete(e.toLowerCase()), r;
}
function Of(e, t) {
  return (n) => {
    if (!n.code && !n.key)
      return !1;
    const o = Bf(n.code, e);
    return Array.isArray(e) ? e.some((i) => mr(n[o], i, t, n.type === "keyup")) : mr(n[o], e, t, n.type === "keyup");
  };
}
function Bf(e, t) {
  return t.includes(e) ? "code" : "key";
}
function nn(e, t) {
  const n = oe(() => fe(t?.target) ?? zf), o = Xn(fe(e) === !0);
  let i = !1;
  const r = /* @__PURE__ */ new Set();
  let s = l(fe(e));
  me(
    () => fe(e),
    (u, c) => {
      typeof c == "boolean" && typeof u != "boolean" && a(), s = l(u);
    },
    {
      immediate: !0
    }
  ), ms(["blur", "contextmenu"], a), ji(
    (...u) => s(...u),
    (u) => {
      var c, d;
      const h = fe(t?.actInsideInputWithModifier) ?? !0, g = fe(t?.preventDefault) ?? !1;
      if (i = Pf(u), (!i || i && !h) && oi(u))
        return;
      const $ = ((d = (c = u.composedPath) == null ? void 0 : c.call(u)) == null ? void 0 : d[0]) || u.target, S = $?.nodeName === "BUTTON" || $?.nodeName === "A";
      !g && (i || !S) && u.preventDefault(), o.value = !0;
    },
    { eventName: "keydown", target: n }
  ), ji(
    (...u) => s(...u),
    (u) => {
      const c = fe(t?.actInsideInputWithModifier) ?? !0;
      if (o.value) {
        if ((!i || i && !c) && oi(u))
          return;
        i = !1, o.value = !1;
      }
    },
    { eventName: "keyup", target: n }
  );
  function a() {
    i = !1, r.clear(), o.value = fe(e) === !0;
  }
  function l(u) {
    return u === null ? (a(), () => !1) : typeof u == "boolean" ? (a(), o.value = u, () => !1) : Array.isArray(u) || typeof u == "string" ? Of(u, r) : u;
  }
  return o;
}
const qs = "vue-flow__node-desc", Zs = "vue-flow__edge-desc", Rf = "vue-flow__aria-live", Us = ["Enter", " ", "Escape"], Dt = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
function to(e) {
  return {
    ...e.computedPosition || { x: 0, y: 0 },
    width: e.dimensions.width || 0,
    height: e.dimensions.height || 0
  };
}
function no(e, t) {
  const n = Math.max(0, Math.min(e.x + e.width, t.x + t.width) - Math.max(e.x, t.x)), o = Math.max(0, Math.min(e.y + e.height, t.y + t.height) - Math.max(e.y, t.y));
  return Math.ceil(n * o);
}
function yo(e) {
  return {
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
function Ct(e, t = 0, n = 1) {
  return Math.min(Math.max(e, t), n);
}
function Ws(e, t) {
  return {
    x: Ct(e.x, t[0][0], t[1][0]),
    y: Ct(e.y, t[0][1], t[1][1])
  };
}
function yr(e) {
  const t = e.getRootNode();
  return "elementFromPoint" in t ? t : window.document;
}
function gt(e) {
  return e && typeof e == "object" && "id" in e && "source" in e && "target" in e;
}
function bt(e) {
  return e && typeof e == "object" && "id" in e && "position" in e && !gt(e);
}
function Kt(e) {
  return bt(e) && "computedPosition" in e;
}
function Nn(e) {
  return !Number.isNaN(e) && Number.isFinite(e);
}
function Vf(e) {
  return Nn(e.width) && Nn(e.height) && Nn(e.x) && Nn(e.y);
}
function Hf(e, t, n) {
  const o = {
    id: e.id.toString(),
    type: e.type ?? "default",
    dimensions: jt({
      width: 0,
      height: 0
    }),
    computedPosition: jt({
      z: 0,
      ...e.position
    }),
    // todo: shouldn't be defined initially, as we want to use handleBounds to check if a node was actually initialized or not
    handleBounds: {
      source: [],
      target: []
    },
    draggable: void 0,
    selectable: void 0,
    connectable: void 0,
    focusable: void 0,
    selected: !1,
    dragging: !1,
    resizing: !1,
    initialized: !1,
    isParent: !1,
    position: {
      x: 0,
      y: 0
    },
    data: Ne(e.data) ? e.data : {},
    events: jt(Ne(e.events) ? e.events : {})
  };
  return Object.assign(t ?? o, e, { id: e.id.toString(), parentNode: n });
}
function Ks(e, t, n) {
  var o, i;
  const r = {
    id: e.id.toString(),
    type: e.type ?? t?.type ?? "default",
    source: e.source.toString(),
    target: e.target.toString(),
    sourceHandle: (o = e.sourceHandle) == null ? void 0 : o.toString(),
    targetHandle: (i = e.targetHandle) == null ? void 0 : i.toString(),
    updatable: e.updatable ?? n?.updatable,
    selectable: e.selectable ?? n?.selectable,
    focusable: e.focusable ?? n?.focusable,
    data: Ne(e.data) ? e.data : {},
    events: jt(Ne(e.events) ? e.events : {}),
    label: e.label ?? "",
    interactionWidth: e.interactionWidth ?? n?.interactionWidth,
    ...n ?? {}
  };
  return Object.assign(t ?? r, e, { id: e.id.toString() });
}
function Qs(e, t, n, o) {
  const i = typeof e == "string" ? e : e.id, r = /* @__PURE__ */ new Set(), s = o === "source" ? "target" : "source";
  for (const a of n)
    a[s] === i && r.add(a[o]);
  return t.filter((a) => r.has(a.id));
}
function Lf(...e) {
  if (e.length === 3) {
    const [r, s, a] = e;
    return Qs(r, s, a, "target");
  }
  const [t, n] = e, o = typeof t == "string" ? t : t.id;
  return n.filter((r) => gt(r) && r.source === o).map((r) => n.find((s) => bt(s) && s.id === r.target));
}
function Ff(...e) {
  if (e.length === 3) {
    const [r, s, a] = e;
    return Qs(r, s, a, "source");
  }
  const [t, n] = e, o = typeof t == "string" ? t : t.id;
  return n.filter((r) => gt(r) && r.target === o).map((r) => n.find((s) => bt(s) && s.id === r.source));
}
function Js({ source: e, sourceHandle: t, target: n, targetHandle: o }) {
  return `vueflow__edge-${e}${t ?? ""}-${n}${o ?? ""}`;
}
function Yf(e, t) {
  return t.some(
    (n) => gt(n) && n.source === e.source && n.target === e.target && (n.sourceHandle === e.sourceHandle || !n.sourceHandle && !e.sourceHandle) && (n.targetHandle === e.targetHandle || !n.targetHandle && !e.targetHandle)
  );
}
function ii({ x: e, y: t }, { x: n, y: o, zoom: i }) {
  return {
    x: e * i + n,
    y: t * i + o
  };
}
function un({ x: e, y: t }, { x: n, y: o, zoom: i }, r = !1, s = [1, 1]) {
  const a = {
    x: (e - n) / i,
    y: (t - o) / i
  };
  return r ? wo(a, s) : a;
}
function js(e, t) {
  return {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x2, t.x2),
    y2: Math.max(e.y2, t.y2)
  };
}
function oo({ x: e, y: t, width: n, height: o }) {
  return {
    x: e,
    y: t,
    x2: e + n,
    y2: t + o
  };
}
function ea({ x: e, y: t, x2: n, y2: o }) {
  return {
    x: e,
    y: t,
    width: n - e,
    height: o - t
  };
}
function Xf(e, t) {
  return ea(js(oo(e), oo(t)));
}
function Mi(e) {
  let t = {
    x: Number.POSITIVE_INFINITY,
    y: Number.POSITIVE_INFINITY,
    x2: Number.NEGATIVE_INFINITY,
    y2: Number.NEGATIVE_INFINITY
  };
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    t = js(
      t,
      oo({
        ...o.computedPosition,
        ...o.dimensions
      })
    );
  }
  return ea(t);
}
function ta(e, t, n = { x: 0, y: 0, zoom: 1 }, o = !1, i = !1) {
  const r = {
    ...un(t, n),
    width: t.width / n.zoom,
    height: t.height / n.zoom
  }, s = [];
  for (const a of e) {
    const { dimensions: l, selectable: u = !0, hidden: c = !1 } = a, d = l.width ?? a.width ?? null, h = l.height ?? a.height ?? null;
    if (i && !u || c)
      continue;
    const g = no(r, to(a)), b = d === null || h === null, $ = o && g > 0, S = (d ?? 0) * (h ?? 0);
    (b || $ || g >= S || a.dragging) && s.push(a);
  }
  return s;
}
function mt(e, t) {
  const n = /* @__PURE__ */ new Set();
  if (typeof e == "string")
    n.add(e);
  else if (e.length >= 1)
    for (const o of e)
      n.add(o.id);
  return t.filter((o) => n.has(o.source) || n.has(o.target));
}
function wr(e, t, n, o, i, r = 0.1, s = { x: 0, y: 0 }) {
  const a = t / (e.width * (1 + r)), l = n / (e.height * (1 + r)), u = Math.min(a, l), c = Ct(u, o, i), d = e.x + e.width / 2, h = e.y + e.height / 2, g = t / 2 - d * c + (s.x ?? 0), b = n / 2 - h * c + (s.y ?? 0);
  return { x: g, y: b, zoom: c };
}
function Gf(e, t) {
  return {
    x: t.x + e.x,
    y: t.y + e.y,
    z: (e.z > t.z ? e.z : t.z) + 1
  };
}
function na(e, t) {
  if (!e.parentNode)
    return !1;
  const n = t(e.parentNode);
  return n ? n.selected ? !0 : na(n, t) : !1;
}
function cn(e, t) {
  return typeof e > "u" ? "" : typeof e == "string" ? e : `${t ? `${t}__` : ""}${Object.keys(e).sort().map((o) => `${o}=${e[o]}`).join("&")}`;
}
function ri(e) {
  const t = e.ctrlKey && dn() ? 10 : 1;
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * t;
}
function _r(e, t, n) {
  return e < t ? Ct(Math.abs(e - t), 1, t) / t : e > n ? -Ct(Math.abs(e - n), 1, t) / t : 0;
}
function oa(e, t, n = 15, o = 40) {
  const i = _r(e.x, o, t.width - o) * n, r = _r(e.y, o, t.height - o) * n;
  return [i, r];
}
function Oo(e, t) {
  if (t) {
    const n = e.position.x + e.dimensions.width - t.dimensions.width, o = e.position.y + e.dimensions.height - t.dimensions.height;
    if (n > 0 || o > 0 || e.position.x < 0 || e.position.y < 0) {
      let i = {};
      if (typeof t.style == "function" ? i = { ...t.style(t) } : t.style && (i = { ...t.style }), i.width = i.width ?? `${t.dimensions.width}px`, i.height = i.height ?? `${t.dimensions.height}px`, n > 0)
        if (typeof i.width == "string") {
          const r = Number(i.width.replace("px", ""));
          i.width = `${r + n}px`;
        } else
          i.width += n;
      if (o > 0)
        if (typeof i.height == "string") {
          const r = Number(i.height.replace("px", ""));
          i.height = `${r + o}px`;
        } else
          i.height += o;
      if (e.position.x < 0) {
        const r = Math.abs(e.position.x);
        if (t.position.x = t.position.x - r, typeof i.width == "string") {
          const s = Number(i.width.replace("px", ""));
          i.width = `${s + r}px`;
        } else
          i.width += r;
        e.position.x = 0;
      }
      if (e.position.y < 0) {
        const r = Math.abs(e.position.y);
        if (t.position.y = t.position.y - r, typeof i.height == "string") {
          const s = Number(i.height.replace("px", ""));
          i.height = `${s + r}px`;
        } else
          i.height += r;
        e.position.y = 0;
      }
      t.dimensions.width = Number(i.width.toString().replace("px", "")), t.dimensions.height = Number(i.height.toString().replace("px", "")), typeof t.style == "function" ? t.style = (r) => {
        const s = t.style;
        return {
          ...s(r),
          ...i
        };
      } : t.style = {
        ...t.style,
        ...i
      };
    }
  }
}
function $r(e, t) {
  var n, o;
  const i = e.filter((s) => s.type === "add" || s.type === "remove");
  for (const s of i)
    if (s.type === "add")
      t.findIndex((l) => l.id === s.item.id) === -1 && t.push(s.item);
    else if (s.type === "remove") {
      const a = t.findIndex((l) => l.id === s.id);
      a !== -1 && t.splice(a, 1);
    }
  const r = t.map((s) => s.id);
  for (const s of t)
    for (const a of e)
      if (a.id === s.id)
        switch (a.type) {
          case "select":
            s.selected = a.selected;
            break;
          case "position":
            if (Kt(s) && (typeof a.position < "u" && (s.position = a.position), typeof a.dragging < "u" && (s.dragging = a.dragging), s.expandParent && s.parentNode)) {
              const l = t[r.indexOf(s.parentNode)];
              l && Kt(l) && Oo(s, l);
            }
            break;
          case "dimensions":
            if (Kt(s) && (typeof a.dimensions < "u" && (s.dimensions = a.dimensions), typeof a.updateStyle < "u" && a.updateStyle && (s.style = {
              ...s.style || {},
              width: `${(n = a.dimensions) == null ? void 0 : n.width}px`,
              height: `${(o = a.dimensions) == null ? void 0 : o.height}px`
            }), typeof a.resizing < "u" && (s.resizing = a.resizing), s.expandParent && s.parentNode)) {
              const l = t[r.indexOf(s.parentNode)];
              l && Kt(l) && (!!l.dimensions.width && !!l.dimensions.height ? Oo(s, l) : tt(() => {
                Oo(s, l);
              }));
            }
            break;
        }
  return t;
}
function at(e, t) {
  return {
    id: e,
    type: "select",
    selected: t
  };
}
function br(e) {
  return {
    item: e,
    type: "add"
  };
}
function xr(e) {
  return {
    id: e,
    type: "remove"
  };
}
function Er(e, t, n, o, i) {
  return {
    id: e,
    source: t,
    target: n,
    sourceHandle: o || null,
    targetHandle: i || null,
    type: "remove"
  };
}
function ut(e, t = /* @__PURE__ */ new Set(), n = !1) {
  const o = [];
  for (const [i, r] of e) {
    const s = t.has(i);
    !(r.selected === void 0 && !s) && r.selected !== s && (n && (r.selected = s), o.push(at(r.id, s)));
  }
  return o;
}
function Z(e) {
  const t = /* @__PURE__ */ new Set();
  let n = !1;
  const o = () => t.size > 0;
  e && (n = !0, t.add(e));
  const i = (a) => {
    t.delete(a);
  };
  return {
    on: (a) => {
      e && n && t.delete(e), t.add(a);
      const l = () => {
        i(a), e && n && t.add(e);
      };
      return ho(l), {
        off: l
      };
    },
    off: i,
    trigger: (a) => Promise.all(Array.from(t).map((l) => l(a))),
    hasListeners: o,
    fns: t
  };
}
function Sr(e, t, n) {
  let o = e;
  do {
    if (o && o.matches(t))
      return !0;
    if (o === n)
      return !1;
    o = o.parentElement;
  } while (o);
  return !1;
}
function qf(e, t, n, o, i) {
  var r, s;
  const a = [];
  for (const l of e)
    (l.selected || l.id === i) && (!l.parentNode || !na(l, o)) && (l.draggable || t && typeof l.draggable > "u") && a.push(
      jt({
        id: l.id,
        position: l.position || { x: 0, y: 0 },
        distance: {
          x: n.x - ((r = l.computedPosition) == null ? void 0 : r.x) || 0,
          y: n.y - ((s = l.computedPosition) == null ? void 0 : s.y) || 0
        },
        from: l.computedPosition,
        extent: l.extent,
        parentNode: l.parentNode,
        dimensions: l.dimensions,
        expandParent: l.expandParent
      })
    );
  return a;
}
function Bo({
  id: e,
  dragItems: t,
  findNode: n
}) {
  const o = [];
  for (const i of t) {
    const r = n(i.id);
    r && o.push(r);
  }
  return [e ? o.find((i) => i.id === e) : o[0], o];
}
function ia(e) {
  if (Array.isArray(e))
    switch (e.length) {
      case 1:
        return [e[0], e[0], e[0], e[0]];
      case 2:
        return [e[0], e[1], e[0], e[1]];
      case 3:
        return [e[0], e[1], e[2], e[1]];
      case 4:
        return e;
      default:
        return [0, 0, 0, 0];
    }
  return [e, e, e, e];
}
function Zf(e, t, n) {
  const [o, i, r, s] = typeof e != "string" ? ia(e.padding) : [0, 0, 0, 0];
  return n && typeof n.computedPosition.x < "u" && typeof n.computedPosition.y < "u" && typeof n.dimensions.width < "u" && typeof n.dimensions.height < "u" ? [
    [n.computedPosition.x + s, n.computedPosition.y + o],
    [
      n.computedPosition.x + n.dimensions.width - i,
      n.computedPosition.y + n.dimensions.height - r
    ]
  ] : !1;
}
function Uf(e, t, n, o) {
  let i = e.extent || n;
  if ((i === "parent" || !Array.isArray(i) && i?.range === "parent") && !e.expandParent)
    if (e.parentNode && o && e.dimensions.width && e.dimensions.height) {
      const r = Zf(i, e, o);
      r && (i = r);
    } else
      t(new Me(Ce.NODE_EXTENT_INVALID, e.id)), i = n;
  else if (Array.isArray(i)) {
    const r = o?.computedPosition.x || 0, s = o?.computedPosition.y || 0;
    i = [
      [i[0][0] + r, i[0][1] + s],
      [i[1][0] + r, i[1][1] + s]
    ];
  } else if (i !== "parent" && i?.range && Array.isArray(i.range)) {
    const [r, s, a, l] = ia(i.padding), u = o?.computedPosition.x || 0, c = o?.computedPosition.y || 0;
    i = [
      [i.range[0][0] + u + l, i.range[0][1] + c + r],
      [i.range[1][0] + u - s, i.range[1][1] + c - a]
    ];
  }
  return i === "parent" ? [
    [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
    [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
  ] : i;
}
function Wf({ width: e, height: t }, n) {
  return [n[0], [n[1][0] - (e || 0), n[1][1] - (t || 0)]];
}
function ki(e, t, n, o, i) {
  const r = Wf(e.dimensions, Uf(e, n, o, i)), s = Ws(t, r);
  return {
    position: {
      x: s.x - (i?.computedPosition.x || 0),
      y: s.y - (i?.computedPosition.y || 0)
    },
    computedPosition: s
  };
}
function Rt(e, t, n = J.Left, o = !1) {
  const i = (t?.x ?? 0) + e.computedPosition.x, r = (t?.y ?? 0) + e.computedPosition.y, { width: s, height: a } = t ?? jf(e);
  if (o)
    return { x: i + s / 2, y: r + a / 2 };
  switch (t?.position ?? n) {
    case J.Top:
      return { x: i + s / 2, y: r };
    case J.Right:
      return { x: i + s, y: r + a / 2 };
    case J.Bottom:
      return { x: i + s / 2, y: r + a };
    case J.Left:
      return { x: i, y: r + a / 2 };
  }
}
function Nr(e, t) {
  return e && (t ? e.find((n) => n.id === t) : e[0]) || null;
}
function Kf({
  sourcePos: e,
  targetPos: t,
  sourceWidth: n,
  sourceHeight: o,
  targetWidth: i,
  targetHeight: r,
  width: s,
  height: a,
  viewport: l
}) {
  const u = {
    x: Math.min(e.x, t.x),
    y: Math.min(e.y, t.y),
    x2: Math.max(e.x + n, t.x + i),
    y2: Math.max(e.y + o, t.y + r)
  };
  u.x === u.x2 && (u.x2 += 1), u.y === u.y2 && (u.y2 += 1);
  const c = oo({
    x: (0 - l.x) / l.zoom,
    y: (0 - l.y) / l.zoom,
    width: s / l.zoom,
    height: a / l.zoom
  }), d = Math.max(0, Math.min(c.x2, u.x2) - Math.max(c.x, u.x)), h = Math.max(0, Math.min(c.y2, u.y2) - Math.max(c.y, u.y));
  return Math.ceil(d * h) > 0;
}
function Qf(e, t, n = !1) {
  const o = typeof e.zIndex == "number";
  let i = o ? e.zIndex : 0;
  const r = t(e.source), s = t(e.target);
  return !r || !s ? 0 : (n && (i = o ? e.zIndex : Math.max(r.computedPosition.z || 0, s.computedPosition.z || 0)), i);
}
var Ce = /* @__PURE__ */ ((e) => (e.MISSING_STYLES = "MISSING_STYLES", e.MISSING_VIEWPORT_DIMENSIONS = "MISSING_VIEWPORT_DIMENSIONS", e.NODE_INVALID = "NODE_INVALID", e.NODE_NOT_FOUND = "NODE_NOT_FOUND", e.NODE_MISSING_PARENT = "NODE_MISSING_PARENT", e.NODE_TYPE_MISSING = "NODE_TYPE_MISSING", e.NODE_EXTENT_INVALID = "NODE_EXTENT_INVALID", e.EDGE_INVALID = "EDGE_INVALID", e.EDGE_NOT_FOUND = "EDGE_NOT_FOUND", e.EDGE_SOURCE_MISSING = "EDGE_SOURCE_MISSING", e.EDGE_TARGET_MISSING = "EDGE_TARGET_MISSING", e.EDGE_TYPE_MISSING = "EDGE_TYPE_MISSING", e.EDGE_SOURCE_TARGET_SAME = "EDGE_SOURCE_TARGET_SAME", e.EDGE_SOURCE_TARGET_MISSING = "EDGE_SOURCE_TARGET_MISSING", e.EDGE_ORPHANED = "EDGE_ORPHANED", e.USEVUEFLOW_OPTIONS = "USEVUEFLOW_OPTIONS", e))(Ce || {});
const Cr = {
  MISSING_STYLES: () => "It seems that you haven't loaded the necessary styles. Please import '@vue-flow/core/dist/style.css' to ensure that the graph is rendered correctly",
  MISSING_VIEWPORT_DIMENSIONS: () => "The Vue Flow parent container needs a width and a height to render the graph",
  NODE_INVALID: (e) => `Node is invalid
Node: ${e}`,
  NODE_NOT_FOUND: (e) => `Node not found
Node: ${e}`,
  NODE_MISSING_PARENT: (e, t) => `Node is missing a parent
Node: ${e}
Parent: ${t}`,
  NODE_TYPE_MISSING: (e) => `Node type is missing
Type: ${e}`,
  NODE_EXTENT_INVALID: (e) => `Only child nodes can use a parent extent
Node: ${e}`,
  EDGE_INVALID: (e) => `An edge needs a source and a target
Edge: ${e}`,
  EDGE_SOURCE_MISSING: (e, t) => `Edge source is missing
Edge: ${e} 
Source: ${t}`,
  EDGE_TARGET_MISSING: (e, t) => `Edge target is missing
Edge: ${e} 
Target: ${t}`,
  EDGE_TYPE_MISSING: (e) => `Edge type is missing
Type: ${e}`,
  EDGE_SOURCE_TARGET_SAME: (e, t, n) => `Edge source and target are the same
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
  EDGE_SOURCE_TARGET_MISSING: (e, t, n) => `Edge source or target is missing
Edge: ${e} 
Source: ${t} 
Target: ${n}`,
  EDGE_ORPHANED: (e) => `Edge was orphaned (suddenly missing source or target) and has been removed
Edge: ${e}`,
  EDGE_NOT_FOUND: (e) => `Edge not found
Edge: ${e}`,
  // deprecation errors
  USEVUEFLOW_OPTIONS: () => "The options parameter is deprecated and will be removed in the next major version. Please use the id parameter instead"
};
class Me extends Error {
  constructor(t, ...n) {
    var o;
    super((o = Cr[t]) == null ? void 0 : o.call(Cr, ...n)), this.name = "VueFlowError", this.code = t, this.args = n;
  }
}
function Ti(e) {
  return "clientX" in e;
}
function Jf(e) {
  return "sourceEvent" in e;
}
function Ye(e, t) {
  const n = Ti(e);
  let o, i;
  return n ? (o = e.clientX, i = e.clientY) : "touches" in e && e.touches.length > 0 ? (o = e.touches[0].clientX, i = e.touches[0].clientY) : "changedTouches" in e && e.changedTouches.length > 0 ? (o = e.changedTouches[0].clientX, i = e.changedTouches[0].clientY) : (o = 0, i = 0), {
    x: o - (t?.left ?? 0),
    y: i - (t?.top ?? 0)
  };
}
const dn = () => {
  var e;
  return typeof navigator < "u" && ((e = navigator?.userAgent) == null ? void 0 : e.indexOf("Mac")) >= 0;
};
function jf(e) {
  var t, n;
  return {
    width: ((t = e.dimensions) == null ? void 0 : t.width) ?? e.width ?? 0,
    height: ((n = e.dimensions) == null ? void 0 : n.height) ?? e.height ?? 0
  };
}
function wo(e, t = [1, 1]) {
  return {
    x: t[0] * Math.round(e.x / t[0]),
    y: t[1] * Math.round(e.y / t[1])
  };
}
const eh = () => !0;
function Ro(e) {
  e?.classList.remove("valid", "connecting", "vue-flow__handle-valid", "vue-flow__handle-connecting");
}
function th(e, t, n) {
  const o = [], i = {
    x: e.x - n,
    y: e.y - n,
    width: n * 2,
    height: n * 2
  };
  for (const r of t.values())
    no(i, to(r)) > 0 && o.push(r);
  return o;
}
const nh = 250;
function oh(e, t, n, o) {
  var i, r;
  let s = [], a = Number.POSITIVE_INFINITY;
  const l = th(e, n, t + nh);
  for (const u of l) {
    const c = [...((i = u.handleBounds) == null ? void 0 : i.source) ?? [], ...((r = u.handleBounds) == null ? void 0 : r.target) ?? []];
    for (const d of c) {
      if (o.nodeId === d.nodeId && o.type === d.type && o.id === d.id)
        continue;
      const { x: h, y: g } = Rt(u, d, d.position, !0), b = Math.sqrt((h - e.x) ** 2 + (g - e.y) ** 2);
      b > t || (b < a ? (s = [{ ...d, x: h, y: g }], a = b) : b === a && s.push({ ...d, x: h, y: g }));
    }
  }
  if (!s.length)
    return null;
  if (s.length > 1) {
    const u = o.type === "source" ? "target" : "source";
    return s.find((c) => c.type === u) ?? s[0];
  }
  return s[0];
}
function Mr(e, {
  handle: t,
  connectionMode: n,
  fromNodeId: o,
  fromHandleId: i,
  fromType: r,
  doc: s,
  lib: a,
  flowId: l,
  isValidConnection: u = eh
}, c, d, h) {
  const g = r === "target", b = t ? s.querySelector(`.${a}-flow__handle[data-id="${l}-${t?.nodeId}-${t?.id}-${t?.type}"]`) : null, { x: $, y: S } = Ye(e), _ = s.elementFromPoint($, S), I = _?.classList.contains(`${a}-flow__handle`) ? _ : b, w = {
    handleDomNode: I,
    isValid: !1,
    connection: null,
    toHandle: null
  };
  if (I) {
    const k = ra(void 0, I), O = I.getAttribute("data-nodeid"), H = I.getAttribute("data-handleid"), B = I.classList.contains("connectable"), R = I.classList.contains("connectableend");
    if (!O || !k)
      return w;
    const Q = {
      source: g ? O : o,
      sourceHandle: g ? H : i,
      target: g ? o : O,
      targetHandle: g ? i : H
    };
    w.connection = Q;
    const V = B && R && (n === ht.Strict ? g && k === "source" || !g && k === "target" : O !== o || H !== i);
    w.isValid = V && u(Q, {
      nodes: d,
      edges: c,
      sourceNode: h(Q.source),
      targetNode: h(Q.target)
    }), w.toHandle = t;
  }
  return w;
}
function ra(e, t) {
  return e || (t?.classList.contains("target") ? "target" : t?.classList.contains("source") ? "source" : null);
}
function ih(e, t) {
  let n = null;
  return t ? n = "valid" : e && !t && (n = "invalid"), n;
}
function rh(e, t) {
  let n = null;
  return t ? n = !0 : e && !t && (n = !1), n;
}
function sh(e, t, n, o, i, r = !1) {
  var s, a, l;
  const u = o.get(e);
  if (!u)
    return null;
  const c = i === ht.Strict ? (s = u.handleBounds) == null ? void 0 : s[t] : [...((a = u.handleBounds) == null ? void 0 : a.source) ?? [], ...((l = u.handleBounds) == null ? void 0 : l.target) ?? []], d = (n ? c?.find((h) => h.id === n) : c?.[0]) ?? null;
  return d && r ? { ...d, ...Rt(u, d, d.position, !0) } : d;
}
const si = {
  [J.Left]: J.Right,
  [J.Right]: J.Left,
  [J.Top]: J.Bottom,
  [J.Bottom]: J.Top
}, ah = ["production", "prod"];
function _o(e, ...t) {
  sa() && console.warn(`[Vue Flow]: ${e}`, ...t);
}
function sa() {
  return !ah.includes(Rl.NODE_ENV);
}
function kr(e, t, n, o, i) {
  const r = t.querySelectorAll(`.vue-flow__handle.${e}`);
  return r?.length ? Array.from(r).map((s) => {
    const a = s.getBoundingClientRect();
    return {
      id: s.getAttribute("data-handleid"),
      type: e,
      nodeId: i,
      position: s.getAttribute("data-handlepos"),
      x: (a.left - n.left) / o,
      y: (a.top - n.top) / o,
      ...yo(s)
    };
  }) : null;
}
function ai(e, t, n, o, i, r = !1, s) {
  i.value = !1, e.selected ? (r || e.selected && t) && (o([e]), tt(() => {
    s.blur();
  })) : n([e]);
}
function Ne(e) {
  return typeof F(e) < "u";
}
function lh(e, t, n, o) {
  if (!e || !e.source || !e.target)
    return n(new Me(Ce.EDGE_INVALID, e?.id ?? "[ID UNKNOWN]")), !1;
  let i;
  return gt(e) ? i = e : i = {
    ...e,
    id: Js(e)
  }, i = Ks(i, void 0, o), Yf(i, t) ? !1 : i;
}
function uh(e, t, n, o, i) {
  if (!t.source || !t.target)
    return i(new Me(Ce.EDGE_INVALID, e.id)), !1;
  if (!n)
    return i(new Me(Ce.EDGE_NOT_FOUND, e.id)), !1;
  const { id: r, ...s } = e;
  return {
    ...s,
    id: o ? Js(t) : r,
    source: t.source,
    target: t.target,
    sourceHandle: t.sourceHandle,
    targetHandle: t.targetHandle
  };
}
function Tr(e, t, n) {
  const o = {}, i = [];
  for (let r = 0; r < e.length; ++r) {
    const s = e[r];
    if (!bt(s)) {
      n(
        new Me(Ce.NODE_INVALID, s?.id) || `[ID UNKNOWN|INDEX ${r}]`
      );
      continue;
    }
    const a = Hf(s, t(s.id), s.parentNode);
    s.parentNode && (o[s.parentNode] = !0), i[r] = a;
  }
  for (const r of i) {
    const s = t(r.parentNode) || i.find((a) => a.id === r.parentNode);
    r.parentNode && !s && n(new Me(Ce.NODE_MISSING_PARENT, r.id, r.parentNode)), (r.parentNode || o[r.id]) && (o[r.id] && (r.isParent = !0), s && (s.isParent = !0));
  }
  return i;
}
function Ir(e, t, n, o, i, r) {
  let s = i;
  const a = o.get(s) || /* @__PURE__ */ new Map();
  o.set(s, a.set(n, t)), s = `${i}-${e}`;
  const l = o.get(s) || /* @__PURE__ */ new Map();
  if (o.set(s, l.set(n, t)), r) {
    s = `${i}-${e}-${r}`;
    const u = o.get(s) || /* @__PURE__ */ new Map();
    o.set(s, u.set(n, t));
  }
}
function Vo(e, t, n) {
  e.clear();
  for (const o of n) {
    const { source: i, target: r, sourceHandle: s = null, targetHandle: a = null } = o, l = { edgeId: o.id, source: i, target: r, sourceHandle: s, targetHandle: a }, u = `${i}-${s}--${r}-${a}`, c = `${r}-${a}--${i}-${s}`;
    Ir("source", l, c, e, i, s), Ir("target", l, u, e, r, a);
  }
}
function Ar(e, t) {
  if (e.size !== t.size)
    return !1;
  for (const n of e)
    if (!t.has(n))
      return !1;
  return !0;
}
function Ho(e, t, n, o, i, r, s, a) {
  const l = [];
  for (const u of e) {
    const c = gt(u) ? u : lh(u, a, i, r);
    if (!c)
      continue;
    const d = n(c.source), h = n(c.target);
    if (!d || !h) {
      i(new Me(Ce.EDGE_SOURCE_TARGET_MISSING, c.id, c.source, c.target));
      continue;
    }
    if (!d) {
      i(new Me(Ce.EDGE_SOURCE_MISSING, c.id, c.source));
      continue;
    }
    if (!h) {
      i(new Me(Ce.EDGE_TARGET_MISSING, c.id, c.target));
      continue;
    }
    if (t && !t(c, {
      edges: a,
      nodes: s,
      sourceNode: d,
      targetNode: h
    })) {
      i(new Me(Ce.EDGE_INVALID, c.id));
      continue;
    }
    const g = o(c.id);
    l.push({
      ...Ks(c, g, r),
      sourceNode: d,
      targetNode: h
    });
  }
  return l;
}
const Dr = Symbol("vueFlow"), aa = Symbol("nodeId"), la = Symbol("nodeRef"), ch = Symbol("edgeId"), dh = Symbol("edgeRef"), $o = Symbol("slots");
function ua(e) {
  const {
    vueFlowRef: t,
    snapToGrid: n,
    snapGrid: o,
    noDragClassName: i,
    nodes: r,
    nodeExtent: s,
    nodeDragThreshold: a,
    viewport: l,
    autoPanOnNodeDrag: u,
    autoPanSpeed: c,
    nodesDraggable: d,
    panBy: h,
    findNode: g,
    multiSelectionActive: b,
    nodesSelectionActive: $,
    selectNodesOnDrag: S,
    removeSelectedElements: _,
    addSelectedNodes: I,
    updateNodePositions: w,
    emits: k
  } = we(), { onStart: O, onDrag: H, onStop: B, onClick: R, el: Q, disabled: Y, id: V, selectable: N, dragHandle: W } = e, f = Xn(!1);
  let E = [], v, C = null, x = { x: void 0, y: void 0 }, A = { x: 0, y: 0 }, M = null, z = !1, X = 0, K = !1;
  const P = gh(), G = ({ x: ie, y: ce }) => {
    x = { x: ie, y: ce };
    let ue = !1;
    if (E = E.map((y) => {
      const m = { x: ie - y.distance.x, y: ce - y.distance.y }, { computedPosition: p } = ki(
        y,
        n.value ? wo(m, o.value) : m,
        k.error,
        s.value,
        y.parentNode ? g(y.parentNode) : void 0
      );
      return ue = ue || y.position.x !== p.x || y.position.y !== p.y, y.position = p, y;
    }), !!ue && (w(E, !0, !0), f.value = !0, M)) {
      const [y, m] = Bo({
        id: V,
        dragItems: E,
        findNode: g
      });
      H({ event: M, node: y, nodes: m });
    }
  }, L = () => {
    if (!C)
      return;
    const [ie, ce] = oa(A, C, c.value);
    if (ie !== 0 || ce !== 0) {
      const ue = {
        x: (x.x ?? 0) - ie / l.value.zoom,
        y: (x.y ?? 0) - ce / l.value.zoom
      };
      h({ x: ie, y: ce }) && G(ue);
    }
    X = requestAnimationFrame(L);
  }, ne = (ie, ce) => {
    z = !0;
    const ue = g(V);
    !S.value && !b.value && ue && (ue.selected || _()), ue && fe(N) && S.value && ai(
      ue,
      b.value,
      I,
      _,
      $,
      !1,
      ce
    );
    const y = P(ie.sourceEvent);
    if (x = y, E = qf(r.value, d.value, y, g, V), E.length) {
      const [m, p] = Bo({
        id: V,
        dragItems: E,
        findNode: g
      });
      O({ event: ie.sourceEvent, node: m, nodes: p });
    }
  }, j = (ie, ce) => {
    var ue;
    ie.sourceEvent.type === "touchmove" && ie.sourceEvent.touches.length > 1 || (a.value === 0 && ne(ie, ce), x = P(ie.sourceEvent), C = ((ue = t.value) == null ? void 0 : ue.getBoundingClientRect()) || null, A = Ye(ie.sourceEvent, C));
  }, ae = (ie, ce) => {
    const ue = P(ie.sourceEvent);
    if (!K && z && u.value && (K = !0, L()), !z) {
      const y = ue.xSnapped - (x.x ?? 0), m = ue.ySnapped - (x.y ?? 0);
      Math.sqrt(y * y + m * m) > a.value && ne(ie, ce);
    }
    (x.x !== ue.xSnapped || x.y !== ue.ySnapped) && E.length && z && (M = ie.sourceEvent, A = Ye(ie.sourceEvent, C), G(ue));
  }, he = (ie) => {
    let ce = !1;
    if (!z && !f.value && !b.value) {
      const ue = ie.sourceEvent, y = P(ue), m = y.xSnapped - (x.x ?? 0), p = y.ySnapped - (x.y ?? 0), T = Math.sqrt(m * m + p * p);
      T !== 0 && T <= a.value && (R?.(ue), ce = !0);
    }
    if (E.length && !ce) {
      w(E, !1, !1);
      const [ue, y] = Bo({
        id: V,
        dragItems: E,
        findNode: g
      });
      B({ event: ie.sourceEvent, node: ue, nodes: y });
    }
    E = [], f.value = !1, K = !1, z = !1, x = { x: void 0, y: void 0 }, cancelAnimationFrame(X);
  };
  return me([() => fe(Y), Q], ([ie, ce], ue, y) => {
    if (ce) {
      const m = Pe(ce);
      ie || (v = Rc().on("start", (p) => j(p, ce)).on("drag", (p) => ae(p, ce)).on("end", (p) => he(p)).filter((p) => {
        const T = p.target, D = fe(W);
        return !p.button && (!i.value || !Sr(T, `.${i.value}`, ce) && (!D || Sr(T, D, ce)));
      }), m.call(v)), y(() => {
        m.on(".drag", null), v && (v.on("start", null), v.on("drag", null), v.on("end", null));
      });
    }
  }), f;
}
function fh() {
  return {
    doubleClick: Z(),
    click: Z(),
    mouseEnter: Z(),
    mouseMove: Z(),
    mouseLeave: Z(),
    contextMenu: Z(),
    updateStart: Z(),
    update: Z(),
    updateEnd: Z()
  };
}
function hh(e, t) {
  const n = fh();
  return n.doubleClick.on((o) => {
    var i, r;
    t.edgeDoubleClick(o), (r = (i = e.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o);
  }), n.click.on((o) => {
    var i, r;
    t.edgeClick(o), (r = (i = e.events) == null ? void 0 : i.click) == null || r.call(i, o);
  }), n.mouseEnter.on((o) => {
    var i, r;
    t.edgeMouseEnter(o), (r = (i = e.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o);
  }), n.mouseMove.on((o) => {
    var i, r;
    t.edgeMouseMove(o), (r = (i = e.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o);
  }), n.mouseLeave.on((o) => {
    var i, r;
    t.edgeMouseLeave(o), (r = (i = e.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o);
  }), n.contextMenu.on((o) => {
    var i, r;
    t.edgeContextMenu(o), (r = (i = e.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o);
  }), n.updateStart.on((o) => {
    var i, r;
    t.edgeUpdateStart(o), (r = (i = e.events) == null ? void 0 : i.updateStart) == null || r.call(i, o);
  }), n.update.on((o) => {
    var i, r;
    t.edgeUpdate(o), (r = (i = e.events) == null ? void 0 : i.update) == null || r.call(i, o);
  }), n.updateEnd.on((o) => {
    var i, r;
    t.edgeUpdateEnd(o), (r = (i = e.events) == null ? void 0 : i.updateEnd) == null || r.call(i, o);
  }), Object.entries(n).reduce(
    (o, [i, r]) => (o.emit[i] = r.trigger, o.on[i] = r.on, o),
    { emit: {}, on: {} }
  );
}
function gh() {
  const { viewport: e, snapGrid: t, snapToGrid: n, vueFlowRef: o } = we();
  return (i) => {
    var r;
    const s = ((r = o.value) == null ? void 0 : r.getBoundingClientRect()) ?? { left: 0, top: 0 }, a = Jf(i) ? i.sourceEvent : i, { x: l, y: u } = Ye(a, s), c = un({ x: l, y: u }, e.value), { x: d, y: h } = n.value ? wo(c, t.value) : c;
    return {
      xSnapped: d,
      ySnapped: h,
      ...c
    };
  };
}
function Cn() {
  return !0;
}
function ca({
  handleId: e,
  nodeId: t,
  type: n,
  isValidConnection: o,
  edgeUpdaterType: i,
  onEdgeUpdate: r,
  onEdgeUpdateEnd: s
}) {
  const {
    id: a,
    vueFlowRef: l,
    connectionMode: u,
    connectionRadius: c,
    connectOnClick: d,
    connectionClickStartHandle: h,
    nodesConnectable: g,
    autoPanOnConnect: b,
    autoPanSpeed: $,
    findNode: S,
    panBy: _,
    startConnection: I,
    updateConnection: w,
    endConnection: k,
    emits: O,
    viewport: H,
    edges: B,
    nodes: R,
    isValidConnection: Q,
    nodeLookup: Y
  } = we();
  let V = null, N = !1, W = null;
  function f(v) {
    var C;
    const x = fe(n) === "target", A = Ti(v), M = yr(v.target), z = v.currentTarget;
    if (z && (A && v.button === 0 || !A)) {
      let X = function(re) {
        y = Ye(re, ie), L = oh(
          un(y, H.value, !1, [1, 1]),
          c.value,
          Y.value,
          T
        ), m || (p(), m = !0);
        const le = Mr(
          re,
          {
            handle: L,
            connectionMode: u.value,
            fromNodeId: fe(t),
            fromHandleId: fe(e),
            fromType: x ? "target" : "source",
            isValidConnection: G,
            doc: M,
            lib: "vue",
            flowId: a,
            nodeLookup: Y.value
          },
          B.value,
          R.value,
          S
        );
        W = le.handleDomNode, V = le.connection, N = rh(!!L, le.isValid);
        const de = {
          // from stays the same
          ...ee,
          isValid: N,
          to: le.toHandle && N ? ii({ x: le.toHandle.x, y: le.toHandle.y }, H.value) : y,
          toHandle: le.toHandle,
          toPosition: N && le.toHandle ? le.toHandle.position : si[T.position],
          toNode: le.toHandle ? Y.value.get(le.toHandle.nodeId) : null
        };
        if (!(N && L && ee?.toHandle && de.toHandle && ee.toHandle.type === de.toHandle.type && ee.toHandle.nodeId === de.toHandle.nodeId && ee.toHandle.id === de.toHandle.id && ee.to.x === de.to.x && ee.to.y === de.to.y)) {
          if (w(
            L && N ? ii(
              {
                x: L.x,
                y: L.y
              },
              H.value
            ) : y,
            le.toHandle,
            ih(!!L, N)
          ), ee = de, !L && !N && !W)
            return Ro(ue);
          V && V.source !== V.target && W && (Ro(ue), ue = W, W.classList.add("connecting", "vue-flow__handle-connecting"), W.classList.toggle("valid", !!N), W.classList.toggle("vue-flow__handle-valid", !!N));
        }
      }, K = function(re) {
        (L || W) && V && N && (r ? r(re, V) : O.connect(V)), O.connectEnd(re), i && s?.(re), Ro(ue), cancelAnimationFrame(ne), k(re), m = !1, N = !1, V = null, W = null, M.removeEventListener("mousemove", X), M.removeEventListener("mouseup", K), M.removeEventListener("touchmove", X), M.removeEventListener("touchend", K);
      };
      const P = S(fe(t));
      let G = fe(o) || Q.value || Cn;
      !G && P && (G = (x ? P.isValidSourcePos : P.isValidTargetPos) || Cn);
      let L, ne = 0;
      const { x: j, y: ae } = Ye(v), he = ra(fe(i), z), ie = (C = l.value) == null ? void 0 : C.getBoundingClientRect();
      if (!ie || !he)
        return;
      const ce = sh(fe(t), he, fe(e), Y.value, u.value);
      if (!ce)
        return;
      let ue, y = Ye(v, ie), m = !1;
      const p = () => {
        if (!b.value)
          return;
        const [re, le] = oa(y, ie, $.value);
        _({ x: re, y: le }), ne = requestAnimationFrame(p);
      }, T = {
        ...ce,
        nodeId: fe(t),
        type: he,
        position: ce.position
      }, D = Y.value.get(fe(t)), q = {
        inProgress: !0,
        isValid: null,
        from: Rt(D, T, J.Left, !0),
        fromHandle: T,
        fromPosition: T.position,
        fromNode: D,
        to: y,
        toHandle: null,
        toPosition: si[T.position],
        toNode: null
      };
      I(
        {
          nodeId: fe(t),
          id: fe(e),
          type: he,
          position: z?.getAttribute("data-handlepos") || J.Top,
          ...y
        },
        {
          x: j - ie.left,
          y: ae - ie.top
        }
      ), O.connectStart({ event: v, nodeId: fe(t), handleId: fe(e), handleType: he });
      let ee = q;
      M.addEventListener("mousemove", X), M.addEventListener("mouseup", K), M.addEventListener("touchmove", X), M.addEventListener("touchend", K);
    }
  }
  function E(v) {
    var C, x;
    if (!d.value)
      return;
    const A = fe(n) === "target";
    if (!h.value) {
      O.clickConnectStart({ event: v, nodeId: fe(t), handleId: fe(e) }), I(
        {
          nodeId: fe(t),
          type: fe(n),
          id: fe(e),
          position: J.Top,
          ...Ye(v)
        },
        void 0,
        !0
      );
      return;
    }
    let M = fe(o) || Q.value || Cn;
    const z = S(fe(t));
    if (!M && z && (M = (A ? z.isValidSourcePos : z.isValidTargetPos) || Cn), z && (typeof z.connectable > "u" ? g.value : z.connectable) === !1)
      return;
    const X = yr(v.target), K = Mr(
      v,
      {
        handle: {
          nodeId: fe(t),
          id: fe(e),
          type: fe(n),
          position: J.Top,
          ...Ye(v)
        },
        connectionMode: u.value,
        fromNodeId: h.value.nodeId,
        fromHandleId: h.value.id ?? null,
        fromType: h.value.type,
        isValidConnection: M,
        doc: X,
        lib: "vue",
        flowId: a,
        nodeLookup: Y.value
      },
      B.value,
      R.value,
      S
    ), P = ((C = K.connection) == null ? void 0 : C.source) === ((x = K.connection) == null ? void 0 : x.target);
    K.isValid && K.connection && !P && O.connect(K.connection), O.clickConnectEnd(v), k(v, !0);
  }
  return {
    handlePointerDown: f,
    handleClick: E
  };
}
function ph() {
  return kt(aa, "");
}
function da(e) {
  const t = e ?? ph() ?? "", n = kt(la, _e(null)), { findNode: o, edges: i, emits: r } = we(), s = o(t);
  return s || r.error(new Me(Ce.NODE_NOT_FOUND, t)), {
    id: t,
    nodeEl: n,
    node: s,
    parentNode: oe(() => o(s.parentNode)),
    connectedEdges: oe(() => mt([s], i.value))
  };
}
function vh() {
  return {
    doubleClick: Z(),
    click: Z(),
    mouseEnter: Z(),
    mouseMove: Z(),
    mouseLeave: Z(),
    contextMenu: Z(),
    dragStart: Z(),
    drag: Z(),
    dragStop: Z()
  };
}
function mh(e, t) {
  const n = vh();
  return n.doubleClick.on((o) => {
    var i, r;
    t.nodeDoubleClick(o), (r = (i = e.events) == null ? void 0 : i.doubleClick) == null || r.call(i, o);
  }), n.click.on((o) => {
    var i, r;
    t.nodeClick(o), (r = (i = e.events) == null ? void 0 : i.click) == null || r.call(i, o);
  }), n.mouseEnter.on((o) => {
    var i, r;
    t.nodeMouseEnter(o), (r = (i = e.events) == null ? void 0 : i.mouseEnter) == null || r.call(i, o);
  }), n.mouseMove.on((o) => {
    var i, r;
    t.nodeMouseMove(o), (r = (i = e.events) == null ? void 0 : i.mouseMove) == null || r.call(i, o);
  }), n.mouseLeave.on((o) => {
    var i, r;
    t.nodeMouseLeave(o), (r = (i = e.events) == null ? void 0 : i.mouseLeave) == null || r.call(i, o);
  }), n.contextMenu.on((o) => {
    var i, r;
    t.nodeContextMenu(o), (r = (i = e.events) == null ? void 0 : i.contextMenu) == null || r.call(i, o);
  }), n.dragStart.on((o) => {
    var i, r;
    t.nodeDragStart(o), (r = (i = e.events) == null ? void 0 : i.dragStart) == null || r.call(i, o);
  }), n.drag.on((o) => {
    var i, r;
    t.nodeDrag(o), (r = (i = e.events) == null ? void 0 : i.drag) == null || r.call(i, o);
  }), n.dragStop.on((o) => {
    var i, r;
    t.nodeDragStop(o), (r = (i = e.events) == null ? void 0 : i.dragStop) == null || r.call(i, o);
  }), Object.entries(n).reduce(
    (o, [i, r]) => (o.emit[i] = r.trigger, o.on[i] = r.on, o),
    { emit: {}, on: {} }
  );
}
function fa() {
  const { getSelectedNodes: e, nodeExtent: t, updateNodePositions: n, findNode: o, snapGrid: i, snapToGrid: r, nodesDraggable: s, emits: a } = we();
  return (l, u = !1) => {
    const c = r.value ? i.value[0] : 5, d = r.value ? i.value[1] : 5, h = u ? 4 : 1, g = l.x * c * h, b = l.y * d * h, $ = [];
    for (const S of e.value)
      if (S.draggable || s && typeof S.draggable > "u") {
        const _ = { x: S.computedPosition.x + g, y: S.computedPosition.y + b }, { computedPosition: I } = ki(
          S,
          _,
          a.error,
          t.value,
          S.parentNode ? o(S.parentNode) : void 0
        );
        $.push({
          id: S.id,
          position: I,
          from: S.position,
          distance: { x: l.x, y: l.y },
          dimensions: S.dimensions
        });
      }
    n($, !0, !1);
  };
}
const Lo = 0.1, yh = (e) => ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
function st() {
  return _o("Viewport not initialized yet."), Promise.resolve(!1);
}
const wh = {
  zoomIn: st,
  zoomOut: st,
  zoomTo: st,
  fitView: st,
  setCenter: st,
  fitBounds: st,
  project: (e) => e,
  screenToFlowCoordinate: (e) => e,
  flowToScreenCoordinate: (e) => e,
  setViewport: st,
  setTransform: st,
  getViewport: () => ({ x: 0, y: 0, zoom: 1 }),
  getTransform: () => ({ x: 0, y: 0, zoom: 1 }),
  viewportInitialized: !1
};
function _h(e) {
  function t(o, i) {
    return new Promise((r) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(i?.interpolate === "linear" ? en : On).scaleBy(
        Fo(e.d3Selection, i?.duration, i?.ease, () => {
          r(!0);
        }),
        o
      ) : r(!1);
    });
  }
  function n(o, i, r, s) {
    return new Promise((a) => {
      var l;
      const { x: u, y: c } = Ws({ x: -o, y: -i }, e.translateExtent), d = Bt.translate(-u, -c).scale(r);
      e.d3Selection && e.d3Zoom ? (l = e.d3Zoom) == null || l.interpolate(s?.interpolate === "linear" ? en : On).transform(
        Fo(e.d3Selection, s?.duration, s?.ease, () => {
          a(!0);
        }),
        d
      ) : a(!1);
    });
  }
  return oe(() => e.d3Zoom && e.d3Selection && e.dimensions.width && e.dimensions.height ? {
    viewportInitialized: !0,
    // todo: allow passing scale as option
    zoomIn: (i) => t(1.2, i),
    zoomOut: (i) => t(1 / 1.2, i),
    zoomTo: (i, r) => new Promise((s) => {
      e.d3Selection && e.d3Zoom ? e.d3Zoom.interpolate(r?.interpolate === "linear" ? en : On).scaleTo(
        Fo(e.d3Selection, r?.duration, r?.ease, () => {
          s(!0);
        }),
        i
      ) : s(!1);
    }),
    setViewport: (i, r) => n(i.x, i.y, i.zoom, r),
    setTransform: (i, r) => n(i.x, i.y, i.zoom, r),
    getViewport: () => ({
      x: e.viewport.x,
      y: e.viewport.y,
      zoom: e.viewport.zoom
    }),
    getTransform: () => ({
      x: e.viewport.x,
      y: e.viewport.y,
      zoom: e.viewport.zoom
    }),
    fitView: (i = {
      padding: Lo,
      includeHiddenNodes: !1,
      duration: 0
    }) => {
      var r, s;
      const a = [];
      for (const h of e.nodes)
        h.dimensions.width && h.dimensions.height && (i?.includeHiddenNodes || !h.hidden) && (!((r = i.nodes) != null && r.length) || (s = i.nodes) != null && s.length && i.nodes.includes(h.id)) && a.push(h);
      if (!a.length)
        return Promise.resolve(!1);
      const l = Mi(a), { x: u, y: c, zoom: d } = wr(
        l,
        e.dimensions.width,
        e.dimensions.height,
        i.minZoom ?? e.minZoom,
        i.maxZoom ?? e.maxZoom,
        i.padding ?? Lo,
        i.offset
      );
      return n(u, c, d, i);
    },
    setCenter: (i, r, s) => {
      const a = typeof s?.zoom < "u" ? s.zoom : e.maxZoom, l = e.dimensions.width / 2 - i * a, u = e.dimensions.height / 2 - r * a;
      return n(l, u, a, s);
    },
    fitBounds: (i, r = { padding: Lo }) => {
      const { x: s, y: a, zoom: l } = wr(
        i,
        e.dimensions.width,
        e.dimensions.height,
        e.minZoom,
        e.maxZoom,
        r.padding
      );
      return n(s, a, l, r);
    },
    project: (i) => un(i, e.viewport, e.snapToGrid, e.snapGrid),
    screenToFlowCoordinate: (i) => {
      if (e.vueFlowRef) {
        const { x: r, y: s } = e.vueFlowRef.getBoundingClientRect(), a = {
          x: i.x - r,
          y: i.y - s
        };
        return un(a, e.viewport, e.snapToGrid, e.snapGrid);
      }
      return { x: 0, y: 0 };
    },
    flowToScreenCoordinate: (i) => {
      if (e.vueFlowRef) {
        const { x: r, y: s } = e.vueFlowRef.getBoundingClientRect(), a = {
          x: i.x + r,
          y: i.y + s
        };
        return ii(a, e.viewport);
      }
      return { x: 0, y: 0 };
    }
  } : wh);
}
function Fo(e, t = 0, n = yh, o = () => {
}) {
  const i = typeof t == "number" && t > 0;
  return i || o(), i ? e.transition().duration(t).ease(n).on("end", o) : e;
}
function $h(e, t, n) {
  const o = us(!0);
  return o.run(() => {
    const i = () => {
      o.run(() => {
        let $, S, _ = !!(n.nodes.value.length || n.edges.value.length);
        $ = Tt([e.modelValue, () => {
          var I, w;
          return (w = (I = e.modelValue) == null ? void 0 : I.value) == null ? void 0 : w.length;
        }], ([I]) => {
          I && Array.isArray(I) && (S?.pause(), n.setElements(I), !S && !_ && I.length ? _ = !0 : S?.resume());
        }), S = Tt(
          [n.nodes, n.edges, () => n.edges.value.length, () => n.nodes.value.length],
          ([I, w]) => {
            var k;
            (k = e.modelValue) != null && k.value && Array.isArray(e.modelValue.value) && ($?.pause(), e.modelValue.value = [...I, ...w], tt(() => {
              $?.resume();
            }));
          },
          { immediate: _ }
        ), Dn(() => {
          $?.stop(), S?.stop();
        });
      });
    }, r = () => {
      o.run(() => {
        let $, S, _ = !!n.nodes.value.length;
        $ = Tt([e.nodes, () => {
          var I, w;
          return (w = (I = e.nodes) == null ? void 0 : I.value) == null ? void 0 : w.length;
        }], ([I]) => {
          I && Array.isArray(I) && (S?.pause(), n.setNodes(I), !S && !_ && I.length ? _ = !0 : S?.resume());
        }), S = Tt(
          [n.nodes, () => n.nodes.value.length],
          ([I]) => {
            var w;
            (w = e.nodes) != null && w.value && Array.isArray(e.nodes.value) && ($?.pause(), e.nodes.value = [...I], tt(() => {
              $?.resume();
            }));
          },
          { immediate: _ }
        ), Dn(() => {
          $?.stop(), S?.stop();
        });
      });
    }, s = () => {
      o.run(() => {
        let $, S, _ = !!n.edges.value.length;
        $ = Tt([e.edges, () => {
          var I, w;
          return (w = (I = e.edges) == null ? void 0 : I.value) == null ? void 0 : w.length;
        }], ([I]) => {
          I && Array.isArray(I) && (S?.pause(), n.setEdges(I), !S && !_ && I.length ? _ = !0 : S?.resume());
        }), S = Tt(
          [n.edges, () => n.edges.value.length],
          ([I]) => {
            var w;
            (w = e.edges) != null && w.value && Array.isArray(e.edges.value) && ($?.pause(), e.edges.value = [...I], tt(() => {
              $?.resume();
            }));
          },
          { immediate: _ }
        ), Dn(() => {
          $?.stop(), S?.stop();
        });
      });
    }, a = () => {
      o.run(() => {
        me(
          () => t.maxZoom,
          () => {
            t.maxZoom && Ne(t.maxZoom) && n.setMaxZoom(t.maxZoom);
          },
          {
            immediate: !0
          }
        );
      });
    }, l = () => {
      o.run(() => {
        me(
          () => t.minZoom,
          () => {
            t.minZoom && Ne(t.minZoom) && n.setMinZoom(t.minZoom);
          },
          { immediate: !0 }
        );
      });
    }, u = () => {
      o.run(() => {
        me(
          () => t.translateExtent,
          () => {
            t.translateExtent && Ne(t.translateExtent) && n.setTranslateExtent(t.translateExtent);
          },
          {
            immediate: !0
          }
        );
      });
    }, c = () => {
      o.run(() => {
        me(
          () => t.nodeExtent,
          () => {
            t.nodeExtent && Ne(t.nodeExtent) && n.setNodeExtent(t.nodeExtent);
          },
          {
            immediate: !0
          }
        );
      });
    }, d = () => {
      o.run(() => {
        me(
          () => t.applyDefault,
          () => {
            Ne(t.applyDefault) && (n.applyDefault.value = t.applyDefault);
          },
          {
            immediate: !0
          }
        );
      });
    }, h = () => {
      o.run(() => {
        const $ = async (S) => {
          let _ = S;
          typeof t.autoConnect == "function" && (_ = await t.autoConnect(S)), _ !== !1 && n.addEdges([_]);
        };
        me(
          () => t.autoConnect,
          () => {
            Ne(t.autoConnect) && (n.autoConnect.value = t.autoConnect);
          },
          { immediate: !0 }
        ), me(
          n.autoConnect,
          (S, _, I) => {
            S ? n.onConnect($) : n.hooks.value.connect.off($), I(() => {
              n.hooks.value.connect.off($);
            });
          },
          { immediate: !0 }
        );
      });
    }, g = () => {
      const $ = [
        "id",
        "modelValue",
        "translateExtent",
        "nodeExtent",
        "edges",
        "nodes",
        "maxZoom",
        "minZoom",
        "applyDefault",
        "autoConnect"
      ];
      for (const S of Object.keys(t)) {
        const _ = S;
        if (!$.includes(_)) {
          const I = pe(() => t[_]), w = n[_];
          yi(w) && o.run(() => {
            me(
              I,
              (k) => {
                Ne(k) && (w.value = k);
              },
              { immediate: !0 }
            );
          });
        }
      }
    };
    (() => {
      i(), r(), s(), l(), a(), u(), c(), d(), h(), g();
    })();
  }), () => o.stop();
}
function bh() {
  return {
    edgesChange: Z(),
    nodesChange: Z(),
    nodeDoubleClick: Z(),
    nodeClick: Z(),
    nodeMouseEnter: Z(),
    nodeMouseMove: Z(),
    nodeMouseLeave: Z(),
    nodeContextMenu: Z(),
    nodeDragStart: Z(),
    nodeDrag: Z(),
    nodeDragStop: Z(),
    nodesInitialized: Z(),
    miniMapNodeClick: Z(),
    miniMapNodeDoubleClick: Z(),
    miniMapNodeMouseEnter: Z(),
    miniMapNodeMouseMove: Z(),
    miniMapNodeMouseLeave: Z(),
    connect: Z(),
    connectStart: Z(),
    connectEnd: Z(),
    clickConnectStart: Z(),
    clickConnectEnd: Z(),
    paneReady: Z(),
    init: Z(),
    move: Z(),
    moveStart: Z(),
    moveEnd: Z(),
    selectionDragStart: Z(),
    selectionDrag: Z(),
    selectionDragStop: Z(),
    selectionContextMenu: Z(),
    selectionStart: Z(),
    selectionEnd: Z(),
    viewportChangeStart: Z(),
    viewportChange: Z(),
    viewportChangeEnd: Z(),
    paneScroll: Z(),
    paneClick: Z(),
    paneContextMenu: Z(),
    paneMouseEnter: Z(),
    paneMouseMove: Z(),
    paneMouseLeave: Z(),
    edgeContextMenu: Z(),
    edgeMouseEnter: Z(),
    edgeMouseMove: Z(),
    edgeMouseLeave: Z(),
    edgeDoubleClick: Z(),
    edgeClick: Z(),
    edgeUpdateStart: Z(),
    edgeUpdate: Z(),
    edgeUpdateEnd: Z(),
    updateNodeInternals: Z(),
    error: Z((e) => _o(e.message))
  };
}
function xh(e, t) {
  il(() => {
    for (const [n, o] of Object.entries(t.value)) {
      const i = (r) => {
        e(n, r);
      };
      o.fns.add(i), ho(() => {
        o.off(i);
      });
    }
  });
}
function ha() {
  return {
    vueFlowRef: null,
    viewportRef: null,
    nodes: [],
    edges: [],
    connectionLookup: /* @__PURE__ */ new Map(),
    nodeTypes: {},
    edgeTypes: {},
    initialized: !1,
    dimensions: {
      width: 0,
      height: 0
    },
    viewport: { x: 0, y: 0, zoom: 1 },
    d3Zoom: null,
    d3Selection: null,
    d3ZoomHandler: null,
    minZoom: 0.5,
    maxZoom: 2,
    translateExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    nodeExtent: [
      [Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY],
      [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY]
    ],
    selectionMode: Ci.Full,
    paneDragging: !1,
    preventScrolling: !0,
    zoomOnScroll: !0,
    zoomOnPinch: !0,
    zoomOnDoubleClick: !0,
    panOnScroll: !1,
    panOnScrollSpeed: 0.5,
    panOnScrollMode: tn.Free,
    paneClickDistance: 0,
    panOnDrag: !0,
    edgeUpdaterRadius: 10,
    onlyRenderVisibleElements: !1,
    defaultViewport: { x: 0, y: 0, zoom: 1 },
    nodesSelectionActive: !1,
    userSelectionActive: !1,
    userSelectionRect: null,
    defaultMarkerColor: "#b1b1b7",
    connectionLineStyle: {},
    connectionLineType: null,
    connectionLineOptions: {
      type: vt.Bezier,
      style: {}
    },
    connectionMode: ht.Loose,
    connectionStartHandle: null,
    connectionEndHandle: null,
    connectionClickStartHandle: null,
    connectionPosition: { x: Number.NaN, y: Number.NaN },
    connectionRadius: 20,
    connectOnClick: !0,
    connectionStatus: null,
    isValidConnection: null,
    snapGrid: [15, 15],
    snapToGrid: !1,
    edgesUpdatable: !1,
    edgesFocusable: !0,
    nodesFocusable: !0,
    nodesConnectable: !0,
    nodesDraggable: !0,
    nodeDragThreshold: 1,
    elementsSelectable: !0,
    selectNodesOnDrag: !0,
    multiSelectionActive: !1,
    selectionKeyCode: "Shift",
    multiSelectionKeyCode: dn() ? "Meta" : "Control",
    zoomActivationKeyCode: dn() ? "Meta" : "Control",
    deleteKeyCode: "Backspace",
    panActivationKeyCode: "Space",
    hooks: bh(),
    applyDefault: !0,
    autoConnect: !1,
    fitViewOnInit: !1,
    fitViewOnInitDone: !1,
    noDragClassName: "nodrag",
    noWheelClassName: "nowheel",
    noPanClassName: "nopan",
    defaultEdgeOptions: void 0,
    elevateEdgesOnSelect: !1,
    elevateNodesOnSelect: !0,
    autoPanOnNodeDrag: !0,
    autoPanOnConnect: !0,
    autoPanSpeed: 15,
    disableKeyboardA11y: !1,
    ariaLiveMessage: ""
  };
}
const Eh = [
  "id",
  "vueFlowRef",
  "viewportRef",
  "initialized",
  "modelValue",
  "nodes",
  "edges",
  "maxZoom",
  "minZoom",
  "translateExtent",
  "hooks",
  "defaultEdgeOptions"
];
function Sh(e, t, n) {
  const o = _h(e), i = (y) => {
    const m = y ?? [];
    e.hooks.updateNodeInternals.trigger(m);
  }, r = (y) => Ff(y, e.nodes, e.edges), s = (y) => Lf(y, e.nodes, e.edges), a = (y) => mt(y, e.edges), l = ({ id: y, type: m, nodeId: p }) => {
    var T;
    const D = y ? `-${m}-${y}` : `-${m}`;
    return Array.from(((T = e.connectionLookup.get(`${p}${D}`)) == null ? void 0 : T.values()) ?? []);
  }, u = (y) => {
    if (y)
      return t.value.get(y);
  }, c = (y) => {
    if (y)
      return n.value.get(y);
  }, d = (y, m, p) => {
    var T, D;
    const te = [];
    for (const q of y) {
      const ee = {
        id: q.id,
        type: "position",
        dragging: p,
        from: q.from
      };
      if (m && (ee.position = q.position, q.parentNode)) {
        const re = u(q.parentNode);
        ee.position = {
          x: ee.position.x - (((T = re?.computedPosition) == null ? void 0 : T.x) ?? 0),
          y: ee.position.y - (((D = re?.computedPosition) == null ? void 0 : D.y) ?? 0)
        };
      }
      te.push(ee);
    }
    te?.length && e.hooks.nodesChange.trigger(te);
  }, h = (y) => {
    if (!e.vueFlowRef)
      return;
    const m = e.vueFlowRef.querySelector(".vue-flow__transformationpane");
    if (!m)
      return;
    const p = window.getComputedStyle(m), { m22: T } = new window.DOMMatrixReadOnly(p.transform), D = [];
    for (const te of y) {
      const q = te, ee = u(q.id);
      if (ee) {
        const re = yo(q.nodeElement);
        if (!!(re.width && re.height && (ee.dimensions.width !== re.width || ee.dimensions.height !== re.height || q.forceUpdate))) {
          const de = q.nodeElement.getBoundingClientRect();
          ee.dimensions = re, ee.handleBounds.source = kr("source", q.nodeElement, de, T, ee.id), ee.handleBounds.target = kr("target", q.nodeElement, de, T, ee.id), D.push({
            id: ee.id,
            type: "dimensions",
            dimensions: re
          });
        }
      }
    }
    !e.fitViewOnInitDone && e.fitViewOnInit && o.value.fitView().then(() => {
      e.fitViewOnInitDone = !0;
    }), D.length && e.hooks.nodesChange.trigger(D);
  }, g = (y, m) => {
    const p = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
    for (const q of y)
      bt(q) ? p.add(q.id) : gt(q) && T.add(q.id);
    const D = ut(t.value, p, !0), te = ut(n.value, T);
    if (e.multiSelectionActive) {
      for (const q of p)
        D.push(at(q, m));
      for (const q of T)
        te.push(at(q, m));
    }
    D.length && e.hooks.nodesChange.trigger(D), te.length && e.hooks.edgesChange.trigger(te);
  }, b = (y) => {
    if (e.multiSelectionActive) {
      const m = y.map((p) => at(p.id, !0));
      e.hooks.nodesChange.trigger(m);
      return;
    }
    e.hooks.nodesChange.trigger(ut(t.value, new Set(y.map((m) => m.id)), !0)), e.hooks.edgesChange.trigger(ut(n.value));
  }, $ = (y) => {
    if (e.multiSelectionActive) {
      const m = y.map((p) => at(p.id, !0));
      e.hooks.edgesChange.trigger(m);
      return;
    }
    e.hooks.edgesChange.trigger(ut(n.value, new Set(y.map((m) => m.id)))), e.hooks.nodesChange.trigger(ut(t.value, /* @__PURE__ */ new Set(), !0));
  }, S = (y) => {
    g(y, !0);
  }, _ = (y) => {
    const p = (y || e.nodes).map((T) => (T.selected = !1, at(T.id, !1)));
    e.hooks.nodesChange.trigger(p);
  }, I = (y) => {
    const p = (y || e.edges).map((T) => (T.selected = !1, at(T.id, !1)));
    e.hooks.edgesChange.trigger(p);
  }, w = (y) => {
    if (!y || !y.length)
      return g([], !1);
    const m = y.reduce(
      (p, T) => {
        const D = at(T.id, !1);
        return bt(T) ? p.nodes.push(D) : p.edges.push(D), p;
      },
      { nodes: [], edges: [] }
    );
    m.nodes.length && e.hooks.nodesChange.trigger(m.nodes), m.edges.length && e.hooks.edgesChange.trigger(m.edges);
  }, k = (y) => {
    var m;
    (m = e.d3Zoom) == null || m.scaleExtent([y, e.maxZoom]), e.minZoom = y;
  }, O = (y) => {
    var m;
    (m = e.d3Zoom) == null || m.scaleExtent([e.minZoom, y]), e.maxZoom = y;
  }, H = (y) => {
    var m;
    (m = e.d3Zoom) == null || m.translateExtent(y), e.translateExtent = y;
  }, B = (y) => {
    e.nodeExtent = y, i();
  }, R = (y) => {
    var m;
    (m = e.d3Zoom) == null || m.clickDistance(y);
  }, Q = (y) => {
    e.nodesDraggable = y, e.nodesConnectable = y, e.elementsSelectable = y;
  }, Y = (y) => {
    const m = y instanceof Function ? y(e.nodes) : y;
    !e.initialized && !m.length || (e.nodes = Tr(m, u, e.hooks.error.trigger));
  }, V = (y) => {
    const m = y instanceof Function ? y(e.edges) : y;
    if (!e.initialized && !m.length)
      return;
    const p = Ho(
      m,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    );
    Vo(e.connectionLookup, n.value, p), e.edges = p;
  }, N = (y) => {
    const m = y instanceof Function ? y([...e.nodes, ...e.edges]) : y;
    !e.initialized && !m.length || (Y(m.filter(bt)), V(m.filter(gt)));
  }, W = (y) => {
    let m = y instanceof Function ? y(e.nodes) : y;
    m = Array.isArray(m) ? m : [m];
    const p = Tr(m, u, e.hooks.error.trigger), T = [];
    for (const D of p)
      T.push(br(D));
    T.length && e.hooks.nodesChange.trigger(T);
  }, f = (y) => {
    let m = y instanceof Function ? y(e.edges) : y;
    m = Array.isArray(m) ? m : [m];
    const p = Ho(
      m,
      e.isValidConnection,
      u,
      c,
      e.hooks.error.trigger,
      e.defaultEdgeOptions,
      e.nodes,
      e.edges
    ), T = [];
    for (const D of p)
      T.push(br(D));
    T.length && e.hooks.edgesChange.trigger(T);
  }, E = (y, m = !0, p = !1) => {
    const T = y instanceof Function ? y(e.nodes) : y, D = Array.isArray(T) ? T : [T], te = [], q = [];
    function ee(le) {
      const de = a(le);
      for (const ye of de)
        (!Ne(ye.deletable) || ye.deletable) && q.push(Er(ye.id, ye.source, ye.target, ye.sourceHandle, ye.targetHandle));
    }
    function re(le) {
      const de = [];
      for (const ye of e.nodes)
        ye.parentNode === le && de.push(ye);
      if (de.length) {
        for (const ye of de)
          te.push(xr(ye.id));
        m && ee(de);
        for (const ye of de)
          re(ye.id);
      }
    }
    for (const le of D) {
      const de = typeof le == "string" ? u(le) : le;
      de && (Ne(de.deletable) && !de.deletable || (te.push(xr(de.id)), m && ee([de]), p && re(de.id)));
    }
    q.length && e.hooks.edgesChange.trigger(q), te.length && e.hooks.nodesChange.trigger(te);
  }, v = (y) => {
    const m = y instanceof Function ? y(e.edges) : y, p = Array.isArray(m) ? m : [m], T = [];
    for (const D of p) {
      const te = typeof D == "string" ? c(D) : D;
      te && (Ne(te.deletable) && !te.deletable || T.push(
        Er(
          typeof D == "string" ? D : D.id,
          te.source,
          te.target,
          te.sourceHandle,
          te.targetHandle
        )
      ));
    }
    e.hooks.edgesChange.trigger(T);
  }, C = (y, m, p = !0) => {
    const T = c(y.id);
    if (!T)
      return !1;
    const D = e.edges.indexOf(T), te = uh(y, m, T, p, e.hooks.error.trigger);
    if (te) {
      const [q] = Ho(
        [te],
        e.isValidConnection,
        u,
        c,
        e.hooks.error.trigger,
        e.defaultEdgeOptions,
        e.nodes,
        e.edges
      );
      return e.edges = e.edges.map((ee, re) => re === D ? q : ee), Vo(e.connectionLookup, n.value, [q]), q;
    }
    return !1;
  }, x = (y, m, p = { replace: !1 }) => {
    const T = c(y);
    if (!T)
      return;
    const D = typeof m == "function" ? m(T) : m;
    T.data = p.replace ? D : { ...T.data, ...D };
  }, A = (y) => $r(y, e.nodes), M = (y) => {
    const m = $r(y, e.edges);
    return Vo(e.connectionLookup, n.value, m), m;
  }, z = (y, m, p = { replace: !1 }) => {
    const T = u(y);
    if (!T)
      return;
    const D = typeof m == "function" ? m(T) : m;
    p.replace ? e.nodes.splice(e.nodes.indexOf(T), 1, D) : Object.assign(T, D);
  }, X = (y, m, p = { replace: !1 }) => {
    const T = u(y);
    if (!T)
      return;
    const D = typeof m == "function" ? m(T) : m;
    T.data = p.replace ? D : { ...T.data, ...D };
  }, K = (y, m, p = !1) => {
    p ? e.connectionClickStartHandle = y : e.connectionStartHandle = y, e.connectionEndHandle = null, e.connectionStatus = null, m && (e.connectionPosition = m);
  }, P = (y, m = null, p = null) => {
    e.connectionStartHandle && (e.connectionPosition = y, e.connectionEndHandle = m, e.connectionStatus = p);
  }, G = (y, m) => {
    e.connectionPosition = { x: Number.NaN, y: Number.NaN }, e.connectionEndHandle = null, e.connectionStatus = null, m ? e.connectionClickStartHandle = null : e.connectionStartHandle = null;
  }, L = (y) => {
    const m = Vf(y), p = m ? null : Kt(y) ? y : u(y.id);
    return !m && !p ? [null, null, m] : [m ? y : to(p), p, m];
  }, ne = (y, m = !0, p = e.nodes) => {
    const [T, D, te] = L(y);
    if (!T)
      return [];
    const q = [];
    for (const ee of p || e.nodes) {
      if (!te && (ee.id === D.id || !ee.computedPosition))
        continue;
      const re = to(ee), le = no(re, T);
      (m && le > 0 || le >= re.width * re.height || le >= Number(T.width) * Number(T.height)) && q.push(ee);
    }
    return q;
  }, j = (y, m, p = !0) => {
    const [T] = L(y);
    if (!T)
      return !1;
    const D = no(T, m);
    return p && D > 0 || D >= Number(T.width) * Number(T.height);
  }, ae = (y) => {
    const { viewport: m, dimensions: p, d3Zoom: T, d3Selection: D, translateExtent: te } = e;
    if (!T || !D || !y.x && !y.y)
      return !1;
    const q = Bt.translate(m.x + y.x, m.y + y.y).scale(m.zoom), ee = [
      [0, 0],
      [p.width, p.height]
    ], re = T.constrain()(q, ee, te), le = e.viewport.x !== re.x || e.viewport.y !== re.y || e.viewport.zoom !== re.k;
    return T.transform(D, re), le;
  }, he = (y) => {
    const m = y instanceof Function ? y(e) : y, p = [
      "d3Zoom",
      "d3Selection",
      "d3ZoomHandler",
      "viewportRef",
      "vueFlowRef",
      "dimensions",
      "hooks"
    ];
    Ne(m.defaultEdgeOptions) && (e.defaultEdgeOptions = m.defaultEdgeOptions);
    const T = m.modelValue || m.nodes || m.edges ? [] : void 0;
    T && (m.modelValue && T.push(...m.modelValue), m.nodes && T.push(...m.nodes), m.edges && T.push(...m.edges), N(T));
    const D = () => {
      Ne(m.maxZoom) && O(m.maxZoom), Ne(m.minZoom) && k(m.minZoom), Ne(m.translateExtent) && H(m.translateExtent);
    };
    for (const te of Object.keys(m)) {
      const q = te, ee = m[q];
      ![...Eh, ...p].includes(q) && Ne(ee) && (e[q] = ee);
    }
    Uo(() => e.d3Zoom).not.toBeNull().then(D), e.initialized || (e.initialized = !0);
  };
  return {
    updateNodePositions: d,
    updateNodeDimensions: h,
    setElements: N,
    setNodes: Y,
    setEdges: V,
    addNodes: W,
    addEdges: f,
    removeNodes: E,
    removeEdges: v,
    findNode: u,
    findEdge: c,
    updateEdge: C,
    updateEdgeData: x,
    updateNode: z,
    updateNodeData: X,
    applyEdgeChanges: M,
    applyNodeChanges: A,
    addSelectedElements: S,
    addSelectedNodes: b,
    addSelectedEdges: $,
    setMinZoom: k,
    setMaxZoom: O,
    setTranslateExtent: H,
    setNodeExtent: B,
    setPaneClickDistance: R,
    removeSelectedElements: w,
    removeSelectedNodes: _,
    removeSelectedEdges: I,
    startConnection: K,
    updateConnection: P,
    endConnection: G,
    setInteractive: Q,
    setState: he,
    getIntersectingNodes: ne,
    getIncomers: r,
    getOutgoers: s,
    getConnectedEdges: a,
    getHandleConnections: l,
    isNodeIntersecting: j,
    panBy: ae,
    fitView: (y) => o.value.fitView(y),
    zoomIn: (y) => o.value.zoomIn(y),
    zoomOut: (y) => o.value.zoomOut(y),
    zoomTo: (y, m) => o.value.zoomTo(y, m),
    setViewport: (y, m) => o.value.setViewport(y, m),
    setTransform: (y, m) => o.value.setTransform(y, m),
    getViewport: () => o.value.getViewport(),
    getTransform: () => o.value.getTransform(),
    setCenter: (y, m, p) => o.value.setCenter(y, m, p),
    fitBounds: (y, m) => o.value.fitBounds(y, m),
    project: (y) => o.value.project(y),
    screenToFlowCoordinate: (y) => o.value.screenToFlowCoordinate(y),
    flowToScreenCoordinate: (y) => o.value.flowToScreenCoordinate(y),
    toObject: () => {
      const y = [], m = [];
      for (const p of e.nodes) {
        const {
          computedPosition: T,
          handleBounds: D,
          selected: te,
          dimensions: q,
          isParent: ee,
          resizing: re,
          dragging: le,
          events: de,
          ...ye
        } = p;
        y.push(ye);
      }
      for (const p of e.edges) {
        const { selected: T, sourceNode: D, targetNode: te, events: q, ...ee } = p;
        m.push(ee);
      }
      return JSON.parse(
        JSON.stringify({
          nodes: y,
          edges: m,
          position: [e.viewport.x, e.viewport.y],
          zoom: e.viewport.zoom,
          viewport: e.viewport
        })
      );
    },
    fromObject: (y) => new Promise((m) => {
      const { nodes: p, edges: T, position: D, zoom: te, viewport: q } = y;
      if (p && Y(p), T && V(T), q?.x && q?.y || D) {
        const ee = q?.x || D[0], re = q?.y || D[1], le = q?.zoom || te || e.viewport.zoom;
        return Uo(() => o.value.viewportInitialized).toBe(!0).then(() => {
          o.value.setViewport({
            x: ee,
            y: re,
            zoom: le
          }).then(() => {
            m(!0);
          });
        });
      } else
        m(!0);
    }),
    updateNodeInternals: i,
    viewportHelper: o,
    $reset: () => {
      const y = ha();
      if (e.edges = [], e.nodes = [], e.d3Zoom && e.d3Selection) {
        const m = Bt.translate(y.defaultViewport.x ?? 0, y.defaultViewport.y ?? 0).scale(Ct(y.defaultViewport.zoom ?? 1, y.minZoom, y.maxZoom)), p = e.viewportRef.getBoundingClientRect(), T = [
          [0, 0],
          [p.width, p.height]
        ], D = e.d3Zoom.constrain()(m, T, y.translateExtent);
        e.d3Zoom.transform(e.d3Selection, D);
      }
      he(y);
    },
    $destroy: () => {
    }
  };
}
const Nh = ["data-id", "data-handleid", "data-nodeid", "data-handlepos"], Ch = {
  name: "Handle",
  compatConfig: { MODE: 3 }
}, io = /* @__PURE__ */ ve({
  ...Ch,
  props: {
    id: { default: null },
    type: {},
    position: { default: () => J.Top },
    isValidConnection: { type: Function },
    connectable: { type: [Boolean, Number, String, Function], default: void 0 },
    connectableStart: { type: Boolean, default: !0 },
    connectableEnd: { type: Boolean, default: !0 }
  },
  setup(e, { expose: t }) {
    const n = cl(e, ["position", "connectable", "connectableStart", "connectableEnd", "id"]), o = pe(() => n.type ?? "source"), i = pe(() => n.isValidConnection ?? null), {
      id: r,
      connectionStartHandle: s,
      connectionClickStartHandle: a,
      connectionEndHandle: l,
      vueFlowRef: u,
      nodesConnectable: c,
      noDragClassName: d,
      noPanClassName: h
    } = we(), { id: g, node: b, nodeEl: $, connectedEdges: S } = da(), _ = _e(), I = pe(() => typeof e.connectableStart < "u" ? e.connectableStart : !0), w = pe(() => typeof e.connectableEnd < "u" ? e.connectableEnd : !0), k = pe(
      () => {
        var V, N, W, f, E, v;
        return ((V = s.value) == null ? void 0 : V.nodeId) === g && ((N = s.value) == null ? void 0 : N.id) === e.id && ((W = s.value) == null ? void 0 : W.type) === o.value || ((f = l.value) == null ? void 0 : f.nodeId) === g && ((E = l.value) == null ? void 0 : E.id) === e.id && ((v = l.value) == null ? void 0 : v.type) === o.value;
      }
    ), O = pe(
      () => {
        var V, N, W;
        return ((V = a.value) == null ? void 0 : V.nodeId) === g && ((N = a.value) == null ? void 0 : N.id) === e.id && ((W = a.value) == null ? void 0 : W.type) === o.value;
      }
    ), { handlePointerDown: H, handleClick: B } = ca({
      nodeId: g,
      handleId: e.id,
      isValidConnection: i,
      type: o
    }), R = oe(() => typeof e.connectable == "string" && e.connectable === "single" ? !S.value.some((V) => {
      const N = V[`${o.value}Handle`];
      return V[o.value] !== g ? !1 : N ? N === e.id : !0;
    }) : typeof e.connectable == "number" ? S.value.filter((V) => {
      const N = V[`${o.value}Handle`];
      return V[o.value] !== g ? !1 : N ? N === e.id : !0;
    }).length < e.connectable : typeof e.connectable == "function" ? e.connectable(b, S.value) : Ne(e.connectable) ? e.connectable : c.value);
    rt(() => {
      var V;
      if (!b.dimensions.width || !b.dimensions.height)
        return;
      const N = (V = b.handleBounds[o.value]) == null ? void 0 : V.find((A) => A.id === e.id);
      if (!u.value || N)
        return;
      const W = u.value.querySelector(".vue-flow__transformationpane");
      if (!$.value || !_.value || !W || !e.id)
        return;
      const f = $.value.getBoundingClientRect(), E = _.value.getBoundingClientRect(), v = window.getComputedStyle(W), { m22: C } = new window.DOMMatrixReadOnly(v.transform), x = {
        id: e.id,
        position: e.position,
        x: (E.left - f.left) / C,
        y: (E.top - f.top) / C,
        type: o.value,
        nodeId: g,
        ...yo(_.value)
      };
      b.handleBounds[o.value] = [...b.handleBounds[o.value] ?? [], x];
    });
    function Q(V) {
      const N = Ti(V);
      R.value && I.value && (N && V.button === 0 || !N) && H(V);
    }
    function Y(V) {
      !g || !a.value && !I.value || R.value && B(V);
    }
    return t({
      handleClick: B,
      handlePointerDown: H,
      onClick: Y,
      onPointerDown: Q
    }), (V, N) => (U(), se("div", {
      ref_key: "handle",
      ref: _,
      "data-id": `${F(r)}-${F(g)}-${e.id}-${o.value}`,
      "data-handleid": e.id,
      "data-nodeid": F(g),
      "data-handlepos": V.position,
      class: nt(["vue-flow__handle", [
        `vue-flow__handle-${V.position}`,
        `vue-flow__handle-${e.id}`,
        F(d),
        F(h),
        o.value,
        {
          connectable: R.value,
          connecting: O.value,
          connectablestart: I.value,
          connectableend: w.value,
          connectionindicator: R.value && (I.value && !k.value || w.value && k.value)
        }
      ]]),
      onMousedown: Q,
      onTouchstartPassive: Q,
      onClick: Y
    }, [
      be(V.$slots, "default", { id: V.id })
    ], 42, Nh));
  }
}), bo = function({
  sourcePosition: e = J.Bottom,
  targetPosition: t = J.Top,
  label: n,
  connectable: o = !0,
  isValidTargetPos: i,
  isValidSourcePos: r,
  data: s
}) {
  const a = s.label ?? n;
  return [
    ge(io, { type: "target", position: t, connectable: o, isValidConnection: i }),
    typeof a != "string" && a ? ge(a) : ge(Ae, [a]),
    ge(io, { type: "source", position: e, connectable: o, isValidConnection: r })
  ];
};
bo.props = ["sourcePosition", "targetPosition", "label", "isValidTargetPos", "isValidSourcePos", "connectable", "data"];
bo.inheritAttrs = !1;
bo.compatConfig = { MODE: 3 };
const Mh = bo, xo = function({
  targetPosition: e = J.Top,
  label: t,
  connectable: n = !0,
  isValidTargetPos: o,
  data: i
}) {
  const r = i.label ?? t;
  return [
    ge(io, { type: "target", position: e, connectable: n, isValidConnection: o }),
    typeof r != "string" && r ? ge(r) : ge(Ae, [r])
  ];
};
xo.props = ["targetPosition", "label", "isValidTargetPos", "connectable", "data"];
xo.inheritAttrs = !1;
xo.compatConfig = { MODE: 3 };
const kh = xo, Eo = function({
  sourcePosition: e = J.Bottom,
  label: t,
  connectable: n = !0,
  isValidSourcePos: o,
  data: i
}) {
  const r = i.label ?? t;
  return [
    typeof r != "string" && r ? ge(r) : ge(Ae, [r]),
    ge(io, { type: "source", position: e, connectable: n, isValidConnection: o })
  ];
};
Eo.props = ["sourcePosition", "label", "isValidSourcePos", "connectable", "data"];
Eo.inheritAttrs = !1;
Eo.compatConfig = { MODE: 3 };
const Th = Eo, Ih = ["transform"], Ah = ["width", "height", "x", "y", "rx", "ry"], Dh = ["y"], zh = {
  name: "EdgeText",
  compatConfig: { MODE: 3 }
}, Ph = /* @__PURE__ */ ve({
  ...zh,
  props: {
    x: {},
    y: {},
    label: {},
    labelStyle: { default: () => ({}) },
    labelShowBg: { type: Boolean, default: !0 },
    labelBgStyle: { default: () => ({}) },
    labelBgPadding: { default: () => [2, 4] },
    labelBgBorderRadius: { default: 2 }
  },
  setup(e) {
    const t = _e({ x: 0, y: 0, width: 0, height: 0 }), n = _e(null), o = oe(() => `translate(${e.x - t.value.width / 2} ${e.y - t.value.height / 2})`);
    rt(i), me([() => e.x, () => e.y, n, () => e.label], i);
    function i() {
      if (!n.value)
        return;
      const r = n.value.getBBox();
      (r.width !== t.value.width || r.height !== t.value.height) && (t.value = r);
    }
    return (r, s) => (U(), se("g", {
      transform: o.value,
      class: "vue-flow__edge-textwrapper"
    }, [
      r.labelShowBg ? (U(), se("rect", {
        key: 0,
        class: "vue-flow__edge-textbg",
        width: `${t.value.width + 2 * r.labelBgPadding[0]}px`,
        height: `${t.value.height + 2 * r.labelBgPadding[1]}px`,
        x: -r.labelBgPadding[0],
        y: -r.labelBgPadding[1],
        style: Re(r.labelBgStyle),
        rx: r.labelBgBorderRadius,
        ry: r.labelBgBorderRadius
      }, null, 12, Ah)) : $e("", !0),
      Ee("text", qn(r.$attrs, {
        ref_key: "el",
        ref: n,
        class: "vue-flow__edge-text",
        y: t.value.height / 2,
        dy: "0.3em",
        style: r.labelStyle
      }), [
        be(r.$slots, "default", {}, () => [
          typeof r.label != "string" ? (U(), Se(pt(r.label), { key: 0 })) : (U(), se(Ae, { key: 1 }, [
            ll(Gn(r.label), 1)
          ], 64))
        ])
      ], 16, Dh)
    ], 8, Ih));
  }
}), Oh = ["id", "d", "marker-end", "marker-start"], Bh = ["d", "stroke-width"], Rh = {
  name: "BaseEdge",
  inheritAttrs: !1,
  compatConfig: { MODE: 3 }
}, So = /* @__PURE__ */ ve({
  ...Rh,
  props: {
    id: {},
    labelX: {},
    labelY: {},
    path: {},
    label: {},
    markerStart: {},
    markerEnd: {},
    interactionWidth: { default: 20 },
    labelStyle: {},
    labelShowBg: { type: Boolean },
    labelBgStyle: {},
    labelBgPadding: {},
    labelBgBorderRadius: {}
  },
  setup(e, { expose: t }) {
    const n = _e(null), o = _e(null), i = _e(null), r = wi();
    return t({
      pathEl: n,
      interactionEl: o,
      labelEl: i
    }), (s, a) => (U(), se(Ae, null, [
      Ee("path", qn(F(r), {
        id: s.id,
        ref_key: "pathEl",
        ref: n,
        d: s.path,
        class: "vue-flow__edge-path",
        "marker-end": s.markerEnd,
        "marker-start": s.markerStart
      }), null, 16, Oh),
      s.interactionWidth ? (U(), se("path", {
        key: 0,
        ref_key: "interactionEl",
        ref: o,
        fill: "none",
        d: s.path,
        "stroke-width": s.interactionWidth,
        "stroke-opacity": 0,
        class: "vue-flow__edge-interaction"
      }, null, 8, Bh)) : $e("", !0),
      s.label && s.labelX && s.labelY ? (U(), Se(Ph, {
        key: 1,
        ref_key: "labelEl",
        ref: i,
        x: s.labelX,
        y: s.labelY,
        label: s.label,
        "label-show-bg": s.labelShowBg,
        "label-bg-style": s.labelBgStyle,
        "label-bg-padding": s.labelBgPadding,
        "label-bg-border-radius": s.labelBgBorderRadius,
        "label-style": s.labelStyle
      }, null, 8, ["x", "y", "label", "label-show-bg", "label-bg-style", "label-bg-padding", "label-bg-border-radius", "label-style"])) : $e("", !0)
    ], 64));
  }
});
function ga({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: o
}) {
  const i = Math.abs(n - e) / 2, r = n < e ? n + i : n - i, s = Math.abs(o - t) / 2, a = o < t ? o + s : o - s;
  return [r, a, i, s];
}
function pa({
  sourceX: e,
  sourceY: t,
  targetX: n,
  targetY: o,
  sourceControlX: i,
  sourceControlY: r,
  targetControlX: s,
  targetControlY: a
}) {
  const l = e * 0.125 + i * 0.375 + s * 0.375 + n * 0.125, u = t * 0.125 + r * 0.375 + a * 0.375 + o * 0.125, c = Math.abs(l - e), d = Math.abs(u - t);
  return [l, u, c, d];
}
function Mn(e, t) {
  return e >= 0 ? 0.5 * e : t * 25 * Math.sqrt(-e);
}
function zr({ pos: e, x1: t, y1: n, x2: o, y2: i, c: r }) {
  let s, a;
  switch (e) {
    case J.Left:
      s = t - Mn(t - o, r), a = n;
      break;
    case J.Right:
      s = t + Mn(o - t, r), a = n;
      break;
    case J.Top:
      s = t, a = n - Mn(n - i, r);
      break;
    case J.Bottom:
      s = t, a = n + Mn(i - n, r);
      break;
  }
  return [s, a];
}
function va(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: o = J.Bottom,
    targetX: i,
    targetY: r,
    targetPosition: s = J.Top,
    curvature: a = 0.25
  } = e, [l, u] = zr({
    pos: o,
    x1: t,
    y1: n,
    x2: i,
    y2: r,
    c: a
  }), [c, d] = zr({
    pos: s,
    x1: i,
    y1: r,
    x2: t,
    y2: n,
    c: a
  }), [h, g, b, $] = pa({
    sourceX: t,
    sourceY: n,
    targetX: i,
    targetY: r,
    sourceControlX: l,
    sourceControlY: u,
    targetControlX: c,
    targetControlY: d
  });
  return [
    `M${t},${n} C${l},${u} ${c},${d} ${i},${r}`,
    h,
    g,
    b,
    $
  ];
}
function Pr({ pos: e, x1: t, y1: n, x2: o, y2: i }) {
  let r, s;
  switch (e) {
    case J.Left:
    case J.Right:
      r = 0.5 * (t + o), s = n;
      break;
    case J.Top:
    case J.Bottom:
      r = t, s = 0.5 * (n + i);
      break;
  }
  return [r, s];
}
function ma(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: o = J.Bottom,
    targetX: i,
    targetY: r,
    targetPosition: s = J.Top
  } = e, [a, l] = Pr({
    pos: o,
    x1: t,
    y1: n,
    x2: i,
    y2: r
  }), [u, c] = Pr({
    pos: s,
    x1: i,
    y1: r,
    x2: t,
    y2: n
  }), [d, h, g, b] = pa({
    sourceX: t,
    sourceY: n,
    targetX: i,
    targetY: r,
    sourceControlX: a,
    sourceControlY: l,
    targetControlX: u,
    targetControlY: c
  });
  return [
    `M${t},${n} C${a},${l} ${u},${c} ${i},${r}`,
    d,
    h,
    g,
    b
  ];
}
const Or = {
  [J.Left]: { x: -1, y: 0 },
  [J.Right]: { x: 1, y: 0 },
  [J.Top]: { x: 0, y: -1 },
  [J.Bottom]: { x: 0, y: 1 }
};
function Vh({
  source: e,
  sourcePosition: t = J.Bottom,
  target: n
}) {
  return t === J.Left || t === J.Right ? e.x < n.x ? { x: 1, y: 0 } : { x: -1, y: 0 } : e.y < n.y ? { x: 0, y: 1 } : { x: 0, y: -1 };
}
function Br(e, t) {
  return Math.sqrt((t.x - e.x) ** 2 + (t.y - e.y) ** 2);
}
function Hh({
  source: e,
  sourcePosition: t = J.Bottom,
  target: n,
  targetPosition: o = J.Top,
  center: i,
  offset: r
}) {
  const s = Or[t], a = Or[o], l = { x: e.x + s.x * r, y: e.y + s.y * r }, u = { x: n.x + a.x * r, y: n.y + a.y * r }, c = Vh({
    source: l,
    sourcePosition: t,
    target: u
  }), d = c.x !== 0 ? "x" : "y", h = c[d];
  let g, b, $;
  const S = { x: 0, y: 0 }, _ = { x: 0, y: 0 }, [I, w, k, O] = ga({
    sourceX: e.x,
    sourceY: e.y,
    targetX: n.x,
    targetY: n.y
  });
  if (s[d] * a[d] === -1) {
    b = i.x ?? I, $ = i.y ?? w;
    const B = [
      { x: b, y: l.y },
      { x: b, y: u.y }
    ], R = [
      { x: l.x, y: $ },
      { x: u.x, y: $ }
    ];
    s[d] === h ? g = d === "x" ? B : R : g = d === "x" ? R : B;
  } else {
    const B = [{ x: l.x, y: u.y }], R = [{ x: u.x, y: l.y }];
    if (d === "x" ? g = s.x === h ? R : B : g = s.y === h ? B : R, t === o) {
      const W = Math.abs(e[d] - n[d]);
      if (W <= r) {
        const f = Math.min(r - 1, r - W);
        s[d] === h ? S[d] = (l[d] > e[d] ? -1 : 1) * f : _[d] = (u[d] > n[d] ? -1 : 1) * f;
      }
    }
    if (t !== o) {
      const W = d === "x" ? "y" : "x", f = s[d] === a[W], E = l[W] > u[W], v = l[W] < u[W];
      (s[d] === 1 && (!f && E || f && v) || s[d] !== 1 && (!f && v || f && E)) && (g = d === "x" ? B : R);
    }
    const Q = { x: l.x + S.x, y: l.y + S.y }, Y = { x: u.x + _.x, y: u.y + _.y }, V = Math.max(Math.abs(Q.x - g[0].x), Math.abs(Y.x - g[0].x)), N = Math.max(Math.abs(Q.y - g[0].y), Math.abs(Y.y - g[0].y));
    V >= N ? (b = (Q.x + Y.x) / 2, $ = g[0].y) : (b = g[0].x, $ = (Q.y + Y.y) / 2);
  }
  return [[
    e,
    { x: l.x + S.x, y: l.y + S.y },
    ...g,
    { x: u.x + _.x, y: u.y + _.y },
    n
  ], b, $, k, O];
}
function Lh(e, t, n, o) {
  const i = Math.min(Br(e, t) / 2, Br(t, n) / 2, o), { x: r, y: s } = t;
  if (e.x === r && r === n.x || e.y === s && s === n.y)
    return `L${r} ${s}`;
  if (e.y === s) {
    const u = e.x < n.x ? -1 : 1, c = e.y < n.y ? 1 : -1;
    return `L ${r + i * u},${s}Q ${r},${s} ${r},${s + i * c}`;
  }
  const a = e.x < n.x ? 1 : -1, l = e.y < n.y ? -1 : 1;
  return `L ${r},${s + i * l}Q ${r},${s} ${r + i * a},${s}`;
}
function li(e) {
  const {
    sourceX: t,
    sourceY: n,
    sourcePosition: o = J.Bottom,
    targetX: i,
    targetY: r,
    targetPosition: s = J.Top,
    borderRadius: a = 5,
    centerX: l,
    centerY: u,
    offset: c = 20
  } = e, [d, h, g, b, $] = Hh({
    source: { x: t, y: n },
    sourcePosition: o,
    target: { x: i, y: r },
    targetPosition: s,
    center: { x: l, y: u },
    offset: c
  });
  return [d.reduce((_, I, w) => {
    let k;
    return w > 0 && w < d.length - 1 ? k = Lh(d[w - 1], I, d[w + 1], a) : k = `${w === 0 ? "M" : "L"}${I.x} ${I.y}`, _ += k, _;
  }, ""), h, g, b, $];
}
function Fh(e) {
  const { sourceX: t, sourceY: n, targetX: o, targetY: i } = e, [r, s, a, l] = ga({
    sourceX: t,
    sourceY: n,
    targetX: o,
    targetY: i
  });
  return [`M ${t},${n}L ${o},${i}`, r, s, a, l];
}
const Yh = ve({
  name: "StraightEdge",
  props: [
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, o, i] = Fh(e);
      return ge(So, {
        path: n,
        labelX: o,
        labelY: i,
        ...t,
        ...e
      });
    };
  }
}), Xh = Yh, Gh = ve({
  name: "SmoothStepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "borderRadius",
    "markerEnd",
    "markerStart",
    "interactionWidth",
    "offset"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, o, i] = li({
        ...e,
        sourcePosition: e.sourcePosition ?? J.Bottom,
        targetPosition: e.targetPosition ?? J.Top
      });
      return ge(So, {
        path: n,
        labelX: o,
        labelY: i,
        ...t,
        ...e
      });
    };
  }
}), ya = Gh, qh = ve({
  name: "StepEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  setup(e, { attrs: t }) {
    return () => ge(ya, { ...e, ...t, borderRadius: 0 });
  }
}), Zh = qh, Uh = ve({
  name: "BezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "curvature",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, o, i] = va({
        ...e,
        sourcePosition: e.sourcePosition ?? J.Bottom,
        targetPosition: e.targetPosition ?? J.Top
      });
      return ge(So, {
        path: n,
        labelX: o,
        labelY: i,
        ...t,
        ...e
      });
    };
  }
}), Wh = Uh, Kh = ve({
  name: "SimpleBezierEdge",
  props: [
    "sourcePosition",
    "targetPosition",
    "label",
    "labelStyle",
    "labelShowBg",
    "labelBgStyle",
    "labelBgPadding",
    "labelBgBorderRadius",
    "sourceY",
    "sourceX",
    "targetX",
    "targetY",
    "markerEnd",
    "markerStart",
    "interactionWidth"
  ],
  compatConfig: { MODE: 3 },
  setup(e, { attrs: t }) {
    return () => {
      const [n, o, i] = ma({
        ...e,
        sourcePosition: e.sourcePosition ?? J.Bottom,
        targetPosition: e.targetPosition ?? J.Top
      });
      return ge(So, {
        path: n,
        labelX: o,
        labelY: i,
        ...t,
        ...e
      });
    };
  }
}), Qh = Kh, Jh = {
  input: Th,
  default: Mh,
  output: kh
}, jh = {
  default: Wh,
  straight: Xh,
  step: Zh,
  smoothstep: ya,
  simplebezier: Qh
};
function eg(e, t, n) {
  const o = oe(() => ($) => t.value.get($)), i = oe(() => ($) => n.value.get($)), r = oe(() => {
    const $ = {
      ...jh,
      ...e.edgeTypes
    }, S = Object.keys($);
    for (const _ of e.edges)
      _.type && !S.includes(_.type) && ($[_.type] = _.type);
    return $;
  }), s = oe(() => {
    const $ = {
      ...Jh,
      ...e.nodeTypes
    }, S = Object.keys($);
    for (const _ of e.nodes)
      _.type && !S.includes(_.type) && ($[_.type] = _.type);
    return $;
  }), a = oe(() => e.onlyRenderVisibleElements ? ta(
    e.nodes,
    {
      x: 0,
      y: 0,
      width: e.dimensions.width,
      height: e.dimensions.height
    },
    e.viewport,
    !0
  ) : e.nodes), l = oe(() => {
    if (e.onlyRenderVisibleElements) {
      const $ = [];
      for (const S of e.edges) {
        const _ = t.value.get(S.source), I = t.value.get(S.target);
        Kf({
          sourcePos: _.computedPosition || { x: 0, y: 0 },
          targetPos: I.computedPosition || { x: 0, y: 0 },
          sourceWidth: _.dimensions.width,
          sourceHeight: _.dimensions.height,
          targetWidth: I.dimensions.width,
          targetHeight: I.dimensions.height,
          width: e.dimensions.width,
          height: e.dimensions.height,
          viewport: e.viewport
        }) && $.push(S);
      }
      return $;
    }
    return e.edges;
  }), u = oe(() => [...a.value, ...l.value]), c = oe(() => {
    const $ = [];
    for (const S of e.nodes)
      S.selected && $.push(S);
    return $;
  }), d = oe(() => {
    const $ = [];
    for (const S of e.edges)
      S.selected && $.push(S);
    return $;
  }), h = oe(() => [
    ...c.value,
    ...d.value
  ]), g = oe(() => {
    const $ = [];
    for (const S of e.nodes)
      S.dimensions.width && S.dimensions.height && S.handleBounds !== void 0 && $.push(S);
    return $;
  }), b = oe(
    () => a.value.length > 0 && g.value.length === a.value.length
  );
  return {
    getNode: o,
    getEdge: i,
    getElements: u,
    getEdgeTypes: r,
    getNodeTypes: s,
    getEdges: l,
    getNodes: a,
    getSelectedElements: h,
    getSelectedNodes: c,
    getSelectedEdges: d,
    getNodesInitialized: g,
    areNodesInitialized: b
  };
}
class yt {
  constructor() {
    this.currentId = 0, this.flows = /* @__PURE__ */ new Map();
  }
  static getInstance() {
    var t;
    const n = (t = vn()) == null ? void 0 : t.appContext.app, o = n?.config.globalProperties.$vueFlowStorage ?? yt.instance;
    return yt.instance = o ?? new yt(), n && (n.config.globalProperties.$vueFlowStorage = yt.instance), yt.instance;
  }
  set(t, n) {
    return this.flows.set(t, n);
  }
  get(t) {
    return this.flows.get(t);
  }
  remove(t) {
    return this.flows.delete(t);
  }
  create(t, n) {
    const o = ha(), i = ol(o), r = {};
    for (const [h, g] of Object.entries(i.hooks)) {
      const b = `on${h.charAt(0).toUpperCase() + h.slice(1)}`;
      r[b] = g.on;
    }
    const s = {};
    for (const [h, g] of Object.entries(i.hooks))
      s[h] = g.trigger;
    const a = oe(() => {
      const h = /* @__PURE__ */ new Map();
      for (const g of i.nodes)
        h.set(g.id, g);
      return h;
    }), l = oe(() => {
      const h = /* @__PURE__ */ new Map();
      for (const g of i.edges)
        h.set(g.id, g);
      return h;
    }), u = eg(i, a, l), c = Sh(i, a, l);
    c.setState({ ...i, ...n });
    const d = {
      ...r,
      ...u,
      ...c,
      ...Zl(i),
      nodeLookup: a,
      edgeLookup: l,
      emits: s,
      id: t,
      vueFlowVersion: "1.46.0",
      $destroy: () => {
        this.remove(t);
      }
    };
    return this.set(t, d), d;
  }
  getId() {
    return `vue-flow-${this.currentId++}`;
  }
}
function we(e) {
  const t = yt.getInstance(), n = ls(), o = typeof e == "object", i = o ? e : { id: e }, r = i.id, s = r ?? n?.vueFlowId;
  let a;
  if (n) {
    const l = kt(Dr, null);
    typeof l < "u" && l !== null && (!s || l.id === s) && (a = l);
  }
  if (a || s && (a = t.get(s)), !a || s && a.id !== s) {
    const l = r ?? t.getId(), u = t.create(l, i);
    a = u, (n ?? us(!0)).run(() => {
      me(
        u.applyDefault,
        (d, h, g) => {
          const b = (S) => {
            u.applyNodeChanges(S);
          }, $ = (S) => {
            u.applyEdgeChanges(S);
          };
          d ? (u.onNodesChange(b), u.onEdgesChange($)) : (u.hooks.value.nodesChange.off(b), u.hooks.value.edgesChange.off($)), g(() => {
            u.hooks.value.nodesChange.off(b), u.hooks.value.edgesChange.off($);
          });
        },
        { immediate: !0 }
      ), ho(() => {
        if (a) {
          const d = t.get(a.id);
          d ? d.$destroy() : _o(`No store instance found for id ${a.id} in storage.`);
        }
      });
    });
  } else
    o && a.setState(i);
  if (n && (Et(Dr, a), n.vueFlowId = a.id), o) {
    const l = vn();
    l?.type.name !== "VueFlow" && a.emits.error(new Me(Ce.USEVUEFLOW_OPTIONS));
  }
  return a;
}
function tg(e) {
  const { emits: t, dimensions: n } = we();
  let o;
  rt(() => {
    const i = e.value, r = () => {
      if (!i)
        return;
      const s = yo(i);
      (s.width === 0 || s.height === 0) && t.error(new Me(Ce.MISSING_VIEWPORT_DIMENSIONS)), n.value = { width: s.width || 500, height: s.height || 500 };
    };
    r(), window.addEventListener("resize", r), i && (o = new ResizeObserver(() => r()), o.observe(i)), fs(() => {
      window.removeEventListener("resize", r), o && i && o.unobserve(i);
    });
  });
}
const ng = {
  name: "UserSelection",
  compatConfig: { MODE: 3 }
}, og = /* @__PURE__ */ ve({
  ...ng,
  props: {
    userSelectionRect: {}
  },
  setup(e) {
    return (t, n) => (U(), se("div", {
      class: "vue-flow__selection vue-flow__container",
      style: Re({
        width: `${t.userSelectionRect.width}px`,
        height: `${t.userSelectionRect.height}px`,
        transform: `translate(${t.userSelectionRect.x}px, ${t.userSelectionRect.y}px)`
      })
    }, null, 4));
  }
}), ig = ["tabIndex"], rg = {
  name: "NodesSelection",
  compatConfig: { MODE: 3 }
}, sg = /* @__PURE__ */ ve({
  ...rg,
  setup(e) {
    const { emits: t, viewport: n, getSelectedNodes: o, noPanClassName: i, disableKeyboardA11y: r, userSelectionActive: s } = we(), a = fa(), l = _e(null), u = ua({
      el: l,
      onStart(b) {
        t.selectionDragStart(b), t.nodeDragStart(b);
      },
      onDrag(b) {
        t.selectionDrag(b), t.nodeDrag(b);
      },
      onStop(b) {
        t.selectionDragStop(b), t.nodeDragStop(b);
      }
    });
    rt(() => {
      var b;
      r.value || (b = l.value) == null || b.focus({ preventScroll: !0 });
    });
    const c = oe(() => Mi(o.value)), d = oe(() => ({
      width: `${c.value.width}px`,
      height: `${c.value.height}px`,
      top: `${c.value.y}px`,
      left: `${c.value.x}px`
    }));
    function h(b) {
      t.selectionContextMenu({ event: b, nodes: o.value });
    }
    function g(b) {
      r || Dt[b.key] && (b.preventDefault(), a(
        {
          x: Dt[b.key].x,
          y: Dt[b.key].y
        },
        b.shiftKey
      ));
    }
    return (b, $) => !F(s) && c.value.width && c.value.height ? (U(), se("div", {
      key: 0,
      class: nt(["vue-flow__nodesselection vue-flow__container", F(i)]),
      style: Re({ transform: `translate(${F(n).x}px,${F(n).y}px) scale(${F(n).zoom})` })
    }, [
      Ee("div", {
        ref_key: "el",
        ref: l,
        class: nt([{ dragging: F(u) }, "vue-flow__nodesselection-rect"]),
        style: Re(d.value),
        tabIndex: F(r) ? void 0 : -1,
        onContextmenu: h,
        onKeydown: g
      }, null, 46, ig)
    ], 6)) : $e("", !0);
  }
});
function ag(e, t) {
  return {
    x: e.clientX - t.left,
    y: e.clientY - t.top
  };
}
const lg = {
  name: "Pane",
  compatConfig: { MODE: 3 }
}, ug = /* @__PURE__ */ ve({
  ...lg,
  props: {
    isSelecting: { type: Boolean },
    selectionKeyPressed: { type: Boolean }
  },
  setup(e) {
    const {
      vueFlowRef: t,
      nodes: n,
      viewport: o,
      emits: i,
      userSelectionActive: r,
      removeSelectedElements: s,
      userSelectionRect: a,
      elementsSelectable: l,
      nodesSelectionActive: u,
      getSelectedEdges: c,
      getSelectedNodes: d,
      removeNodes: h,
      removeEdges: g,
      selectionMode: b,
      deleteKeyCode: $,
      multiSelectionKeyCode: S,
      multiSelectionActive: _,
      edgeLookup: I,
      nodeLookup: w,
      connectionLookup: k,
      defaultEdgeOptions: O,
      connectionStartHandle: H
    } = we(), B = _e(null), R = _e(/* @__PURE__ */ new Set()), Q = _e(/* @__PURE__ */ new Set()), Y = _e(), V = pe(() => l.value && (e.isSelecting || r.value)), N = pe(() => H.value !== null);
    let W = !1, f = !1;
    const E = nn($, { actInsideInputWithModifier: !1 }), v = nn(S);
    me(E, (P) => {
      P && (h(d.value), g(c.value), u.value = !1);
    }), me(v, (P) => {
      _.value = P;
    });
    function C(P, G) {
      return (L) => {
        L.target === G && P?.(L);
      };
    }
    function x(P) {
      if (W || N.value) {
        W = !1;
        return;
      }
      i.paneClick(P), s(), u.value = !1;
    }
    function A(P) {
      P.preventDefault(), P.stopPropagation(), i.paneContextMenu(P);
    }
    function M(P) {
      i.paneScroll(P);
    }
    function z(P) {
      var G, L, ne;
      if (Y.value = (G = t.value) == null ? void 0 : G.getBoundingClientRect(), !l.value || !e.isSelecting || P.button !== 0 || P.target !== B.value || !Y.value)
        return;
      (ne = (L = P.target) == null ? void 0 : L.setPointerCapture) == null || ne.call(L, P.pointerId);
      const { x: j, y: ae } = ag(P, Y.value);
      f = !0, W = !1, s(), a.value = {
        width: 0,
        height: 0,
        startX: j,
        startY: ae,
        x: j,
        y: ae
      }, i.selectionStart(P);
    }
    function X(P) {
      var G;
      if (!Y.value || !a.value)
        return;
      W = !0;
      const { x: L, y: ne } = Ye(P, Y.value), { startX: j = 0, startY: ae = 0 } = a.value, he = {
        startX: j,
        startY: ae,
        x: L < j ? L : j,
        y: ne < ae ? ne : ae,
        width: Math.abs(L - j),
        height: Math.abs(ne - ae)
      }, ie = R.value, ce = Q.value;
      R.value = new Set(
        ta(n.value, he, o.value, b.value === Ci.Partial, !0).map(
          (y) => y.id
        )
      ), Q.value = /* @__PURE__ */ new Set();
      const ue = ((G = O.value) == null ? void 0 : G.selectable) ?? !0;
      for (const y of R.value) {
        const m = k.value.get(y);
        if (m)
          for (const { edgeId: p } of m.values()) {
            const T = I.value.get(p);
            T && (T.selectable ?? ue) && Q.value.add(p);
          }
      }
      if (!Ar(ie, R.value)) {
        const y = ut(w.value, R.value, !0);
        i.nodesChange(y);
      }
      if (!Ar(ce, Q.value)) {
        const y = ut(I.value, Q.value);
        i.edgesChange(y);
      }
      a.value = he, r.value = !0, u.value = !1;
    }
    function K(P) {
      var G;
      P.button !== 0 || !f || ((G = P.target) == null || G.releasePointerCapture(P.pointerId), !r.value && a.value && P.target === B.value && x(P), r.value = !1, a.value = null, u.value = R.value.size > 0, i.selectionEnd(P), e.selectionKeyPressed && (W = !1), f = !1);
    }
    return (P, G) => (U(), se("div", {
      ref_key: "container",
      ref: B,
      class: nt(["vue-flow__pane vue-flow__container", { selection: P.isSelecting }]),
      onClick: G[0] || (G[0] = (L) => V.value ? void 0 : C(x, B.value)(L)),
      onContextmenu: G[1] || (G[1] = (L) => C(A, B.value)(L)),
      onWheelPassive: G[2] || (G[2] = (L) => C(M, B.value)(L)),
      onPointerenter: G[3] || (G[3] = (L) => V.value ? void 0 : F(i).paneMouseEnter(L)),
      onPointerdown: G[4] || (G[4] = (L) => V.value ? z(L) : F(i).paneMouseMove(L)),
      onPointermove: G[5] || (G[5] = (L) => V.value ? X(L) : F(i).paneMouseMove(L)),
      onPointerup: G[6] || (G[6] = (L) => V.value ? K(L) : void 0),
      onPointerleave: G[7] || (G[7] = (L) => F(i).paneMouseLeave(L))
    }, [
      be(P.$slots, "default"),
      F(r) && F(a) ? (U(), Se(og, {
        key: 0,
        "user-selection-rect": F(a)
      }, null, 8, ["user-selection-rect"])) : $e("", !0),
      F(u) && F(d).length ? (U(), Se(sg, { key: 1 })) : $e("", !0)
    ], 34));
  }
}), cg = {
  name: "Transform",
  compatConfig: { MODE: 3 }
}, dg = /* @__PURE__ */ ve({
  ...cg,
  setup(e) {
    const { viewport: t, fitViewOnInit: n, fitViewOnInitDone: o } = we(), i = oe(() => n.value ? !o.value : !1), r = oe(() => `translate(${t.value.x}px,${t.value.y}px) scale(${t.value.zoom})`);
    return (s, a) => (U(), se("div", {
      class: "vue-flow__transformationpane vue-flow__container",
      style: Re({ transform: r.value, opacity: i.value ? 0 : void 0 })
    }, [
      be(s.$slots, "default")
    ], 4));
  }
}), fg = {
  name: "Viewport",
  compatConfig: { MODE: 3 }
}, hg = /* @__PURE__ */ ve({
  ...fg,
  setup(e) {
    const {
      minZoom: t,
      maxZoom: n,
      defaultViewport: o,
      translateExtent: i,
      zoomActivationKeyCode: r,
      selectionKeyCode: s,
      panActivationKeyCode: a,
      panOnScroll: l,
      panOnScrollMode: u,
      panOnScrollSpeed: c,
      panOnDrag: d,
      zoomOnDoubleClick: h,
      zoomOnPinch: g,
      zoomOnScroll: b,
      preventScrolling: $,
      noWheelClassName: S,
      noPanClassName: _,
      emits: I,
      connectionStartHandle: w,
      userSelectionActive: k,
      paneDragging: O,
      d3Zoom: H,
      d3Selection: B,
      d3ZoomHandler: R,
      viewport: Q,
      viewportRef: Y,
      paneClickDistance: V
    } = we();
    tg(Y);
    const N = Xn(!1), W = Xn(!1);
    let f = null, E = !1, v = 0, C = {
      x: 0,
      y: 0,
      zoom: 0
    };
    const x = nn(a), A = nn(s), M = nn(r), z = pe(
      () => (!A.value || A.value && s.value === !0) && (x.value || d.value)
    ), X = pe(() => x.value || l.value), K = pe(() => A.value || s.value === !0 && z.value !== !0);
    rt(() => {
      if (!Y.value) {
        _o("Viewport element is missing");
        return;
      }
      const j = Y.value, ae = j.getBoundingClientRect(), he = Af().clickDistance(V.value).scaleExtent([t.value, n.value]).translateExtent(i.value), ie = Pe(j).call(he), ce = ie.on("wheel.zoom"), ue = Bt.translate(o.value.x ?? 0, o.value.y ?? 0).scale(Ct(o.value.zoom ?? 1, t.value, n.value)), y = [
        [0, 0],
        [ae.width, ae.height]
      ], m = he.constrain()(ue, y, i.value);
      he.transform(ie, m), he.wheelDelta(ri), H.value = he, B.value = ie, R.value = ce, Q.value = { x: m.x, y: m.y, zoom: m.k }, he.on("start", (p) => {
        var T;
        if (!p.sourceEvent)
          return null;
        v = p.sourceEvent.button, N.value = !0;
        const D = L(p.transform);
        ((T = p.sourceEvent) == null ? void 0 : T.type) === "mousedown" && (O.value = !0), C = D, I.viewportChangeStart(D), I.moveStart({ event: p, flowTransform: D });
      }), he.on("end", (p) => {
        if (!p.sourceEvent)
          return null;
        if (N.value = !1, O.value = !1, P(z.value, v ?? 0) && !E && I.paneContextMenu(p.sourceEvent), E = !1, G(C, p.transform)) {
          const T = L(p.transform);
          C = T, I.viewportChangeEnd(T), I.moveEnd({ event: p, flowTransform: T });
        }
      }), he.filter((p) => {
        var T;
        const D = M.value || b.value, te = g.value && p.ctrlKey, q = p.button;
        if (q === 1 && p.type === "mousedown" && (ne(p, "vue-flow__node") || ne(p, "vue-flow__edge")))
          return !0;
        if (!z.value && !D && !X.value && !h.value && !g.value || k.value || !h.value && p.type === "dblclick" || ne(p, S.value) && p.type === "wheel" || ne(p, _.value) && (p.type !== "wheel" || X.value && p.type === "wheel" && !M.value) || !g.value && p.ctrlKey && p.type === "wheel" || !D && !X.value && !te && p.type === "wheel")
          return !1;
        if (!g && p.type === "touchstart" && ((T = p.touches) == null ? void 0 : T.length) > 1)
          return p.preventDefault(), !1;
        if (!z.value && (p.type === "mousedown" || p.type === "touchstart") || s.value === !0 && Array.isArray(d.value) && d.value.includes(0) && q === 0 || Array.isArray(d.value) && !d.value.includes(q) && (p.type === "mousedown" || p.type === "touchstart"))
          return !1;
        const ee = Array.isArray(d.value) && d.value.includes(q) || s.value === !0 && Array.isArray(d.value) && !d.value.includes(0) || !q || q <= 1;
        return (!p.ctrlKey || x.value || p.type === "wheel") && ee;
      }), me(
        [k, z],
        () => {
          k.value && !N.value ? he.on("zoom", null) : k.value || he.on("zoom", (p) => {
            Q.value = { x: p.transform.x, y: p.transform.y, zoom: p.transform.k };
            const T = L(p.transform);
            E = P(z.value, v ?? 0), I.viewportChange(T), I.move({ event: p, flowTransform: T });
          });
        },
        { immediate: !0 }
      ), me(
        [k, X, u, M, g, $, S],
        () => {
          X.value && !M.value && !k.value ? ie.on(
            "wheel.zoom",
            (p) => {
              if (ne(p, S.value))
                return !1;
              const T = M.value || b.value, D = g.value && p.ctrlKey;
              if (!(!$.value || X.value || T || D))
                return !1;
              p.preventDefault(), p.stopImmediatePropagation();
              const q = ie.property("__zoom").k || 1, ee = dn();
              if (!x.value && p.ctrlKey && g.value && ee) {
                const Lt = Le(p), Ft = ri(p), Ua = q * 2 ** Ft;
                he.scaleTo(ie, Ua, Lt, p);
                return;
              }
              const re = p.deltaMode === 1 ? 20 : 1;
              let le = u.value === tn.Vertical ? 0 : p.deltaX * re, de = u.value === tn.Horizontal ? 0 : p.deltaY * re;
              !ee && p.shiftKey && u.value !== tn.Vertical && !le && de && (le = de, de = 0), he.translateBy(
                ie,
                -(le / q) * c.value,
                -(de / q) * c.value
              );
              const ye = L(ie.property("__zoom"));
              f && clearTimeout(f), W.value ? (I.move({ event: p, flowTransform: ye }), I.viewportChange(ye), f = setTimeout(() => {
                I.moveEnd({ event: p, flowTransform: ye }), I.viewportChangeEnd(ye), W.value = !1;
              }, 150)) : (W.value = !0, I.moveStart({ event: p, flowTransform: ye }), I.viewportChangeStart(ye));
            },
            { passive: !1 }
          ) : typeof ce < "u" && ie.on(
            "wheel.zoom",
            function(p, T) {
              const D = !$.value && p.type === "wheel" && !p.ctrlKey, te = M.value || b.value, q = g.value && p.ctrlKey;
              if (!te && !l.value && !q && p.type === "wheel" || D || ne(p, S.value))
                return null;
              p.preventDefault(), ce.call(this, p, T);
            },
            { passive: !1 }
          );
        },
        { immediate: !0 }
      );
    });
    function P(j, ae) {
      return ae === 2 && Array.isArray(j) && j.includes(2);
    }
    function G(j, ae) {
      return j.x !== ae.x && !Number.isNaN(ae.x) || j.y !== ae.y && !Number.isNaN(ae.y) || j.zoom !== ae.k && !Number.isNaN(ae.k);
    }
    function L(j) {
      return {
        x: j.x,
        y: j.y,
        zoom: j.k
      };
    }
    function ne(j, ae) {
      return j.target.closest(`.${ae}`);
    }
    return (j, ae) => (U(), se("div", {
      ref_key: "viewportRef",
      ref: Y,
      class: "vue-flow__viewport vue-flow__container"
    }, [
      xe(ug, {
        "is-selecting": K.value,
        "selection-key-pressed": F(A),
        class: nt({
          connecting: !!F(w),
          dragging: F(O),
          draggable: F(d) === !0 || Array.isArray(F(d)) && F(d).includes(0)
        })
      }, {
        default: ke(() => [
          xe(dg, null, {
            default: ke(() => [
              be(j.$slots, "default")
            ]),
            _: 3
          })
        ]),
        _: 3
      }, 8, ["is-selecting", "selection-key-pressed", "class"])
    ], 512));
  }
}), gg = ["id"], pg = ["id"], vg = ["id"], mg = {
  name: "A11yDescriptions",
  compatConfig: { MODE: 3 }
}, yg = /* @__PURE__ */ ve({
  ...mg,
  setup(e) {
    const { id: t, disableKeyboardA11y: n, ariaLiveMessage: o } = we();
    return (i, r) => (U(), se(Ae, null, [
      Ee("div", {
        id: `${F(qs)}-${F(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select a node. " + Gn(F(n) ? "" : "You can then use the arrow keys to move the node around.") + " You can then use the arrow keys to move the node around, press delete to remove it and press escape to cancel. ", 9, gg),
      Ee("div", {
        id: `${F(Zs)}-${F(t)}`,
        style: { display: "none" }
      }, " Press enter or space to select an edge. You can then press delete to remove it or press escape to cancel. ", 8, pg),
      F(n) ? $e("", !0) : (U(), se("div", {
        key: 0,
        id: `${F(Rf)}-${F(t)}`,
        "aria-live": "assertive",
        "aria-atomic": "true",
        style: { position: "absolute", width: "1px", height: "1px", margin: "-1px", border: "0", padding: "0", overflow: "hidden", clip: "rect(0px, 0px, 0px, 0px)", "clip-path": "inset(100%)" }
      }, Gn(F(o)), 9, vg))
    ], 64));
  }
});
function wg() {
  const e = we();
  me(
    () => e.viewportHelper.value.viewportInitialized,
    (t) => {
      t && setTimeout(() => {
        e.emits.init(e), e.emits.paneReady(e);
      }, 1);
    }
  );
}
function _g(e, t, n) {
  return n === J.Left ? e - t : n === J.Right ? e + t : e;
}
function $g(e, t, n) {
  return n === J.Top ? e - t : n === J.Bottom ? e + t : e;
}
const Ii = function({
  radius: e = 10,
  centerX: t = 0,
  centerY: n = 0,
  position: o = J.Top,
  type: i
}) {
  return ge("circle", {
    class: `vue-flow__edgeupdater vue-flow__edgeupdater-${i}`,
    cx: _g(t, e, o),
    cy: $g(n, e, o),
    r: e,
    stroke: "transparent",
    fill: "transparent"
  });
};
Ii.props = ["radius", "centerX", "centerY", "position", "type"];
Ii.compatConfig = { MODE: 3 };
const Rr = Ii, bg = ve({
  name: "Edge",
  compatConfig: { MODE: 3 },
  props: ["id"],
  setup(e) {
    const {
      id: t,
      addSelectedEdges: n,
      connectionMode: o,
      edgeUpdaterRadius: i,
      emits: r,
      nodesSelectionActive: s,
      noPanClassName: a,
      getEdgeTypes: l,
      removeSelectedEdges: u,
      findEdge: c,
      findNode: d,
      isValidConnection: h,
      multiSelectionActive: g,
      disableKeyboardA11y: b,
      elementsSelectable: $,
      edgesUpdatable: S,
      edgesFocusable: _,
      hooks: I
    } = we(), w = oe(() => c(e.id)), { emit: k, on: O } = hh(w.value, r), H = kt($o), B = vn(), R = _e(!1), Q = _e(!1), Y = _e(""), V = _e(null), N = _e("source"), W = _e(null), f = pe(
      () => typeof w.value.selectable > "u" ? $.value : w.value.selectable
    ), E = pe(() => typeof w.value.updatable > "u" ? S.value : w.value.updatable), v = pe(() => typeof w.value.focusable > "u" ? _.value : w.value.focusable);
    Et(ch, e.id), Et(dh, W);
    const C = oe(() => w.value.class instanceof Function ? w.value.class(w.value) : w.value.class), x = oe(() => w.value.style instanceof Function ? w.value.style(w.value) : w.value.style), A = oe(() => {
      const m = w.value.type || "default", p = H?.[`edge-${m}`];
      if (p)
        return p;
      let T = w.value.template ?? l.value[m];
      if (typeof T == "string" && B) {
        const D = Object.keys(B.appContext.components);
        D && D.includes(m) && (T = hs(m, !1));
      }
      return T && typeof T != "string" ? T : (r.error(new Me(Ce.EDGE_TYPE_MISSING, T)), !1);
    }), { handlePointerDown: M } = ca({
      nodeId: Y,
      handleId: V,
      type: N,
      isValidConnection: h,
      edgeUpdaterType: N,
      onEdgeUpdate: K,
      onEdgeUpdateEnd: P
    });
    return () => {
      const m = d(w.value.source), p = d(w.value.target), T = "pathOptions" in w.value ? w.value.pathOptions : {};
      if (!m && !p)
        return r.error(new Me(Ce.EDGE_SOURCE_TARGET_MISSING, w.value.id, w.value.source, w.value.target)), null;
      if (!m)
        return r.error(new Me(Ce.EDGE_SOURCE_MISSING, w.value.id, w.value.source)), null;
      if (!p)
        return r.error(new Me(Ce.EDGE_TARGET_MISSING, w.value.id, w.value.target)), null;
      if (!w.value || w.value.hidden || m.hidden || p.hidden)
        return null;
      let D;
      o.value === ht.Strict ? D = m.handleBounds.source : D = [...m.handleBounds.source || [], ...m.handleBounds.target || []];
      const te = Nr(D, w.value.sourceHandle);
      let q;
      o.value === ht.Strict ? q = p.handleBounds.target : q = [...p.handleBounds.target || [], ...p.handleBounds.source || []];
      const ee = Nr(q, w.value.targetHandle), re = te?.position || J.Bottom, le = ee?.position || J.Top, { x: de, y: ye } = Rt(m, te, re), { x: Lt, y: Ft } = Rt(p, ee, le);
      return w.value.sourceX = de, w.value.sourceY = ye, w.value.targetX = Lt, w.value.targetY = Ft, ge(
        "g",
        {
          ref: W,
          key: e.id,
          "data-id": e.id,
          class: [
            "vue-flow__edge",
            `vue-flow__edge-${A.value === !1 ? "default" : w.value.type || "default"}`,
            a.value,
            C.value,
            {
              updating: R.value,
              selected: w.value.selected,
              animated: w.value.animated,
              inactive: !f.value && !I.value.edgeClick.hasListeners()
            }
          ],
          tabIndex: v.value ? 0 : void 0,
          "aria-label": w.value.ariaLabel === null ? void 0 : w.value.ariaLabel ?? `Edge from ${w.value.source} to ${w.value.target}`,
          "aria-describedby": v.value ? `${Zs}-${t}` : void 0,
          "aria-roledescription": "edge",
          role: v.value ? "group" : "img",
          ...w.value.domAttributes,
          onClick: L,
          onContextmenu: ne,
          onDblclick: j,
          onMouseenter: ae,
          onMousemove: he,
          onMouseleave: ie,
          onKeyDown: v.value ? y : void 0
        },
        [
          Q.value ? null : ge(A.value === !1 ? l.value.default : A.value, {
            id: e.id,
            sourceNode: m,
            targetNode: p,
            source: w.value.source,
            target: w.value.target,
            type: w.value.type,
            updatable: E.value,
            selected: w.value.selected,
            animated: w.value.animated,
            label: w.value.label,
            labelStyle: w.value.labelStyle,
            labelShowBg: w.value.labelShowBg,
            labelBgStyle: w.value.labelBgStyle,
            labelBgPadding: w.value.labelBgPadding,
            labelBgBorderRadius: w.value.labelBgBorderRadius,
            data: w.value.data,
            events: { ...w.value.events, ...O },
            style: x.value,
            markerStart: `url('#${cn(w.value.markerStart, t)}')`,
            markerEnd: `url('#${cn(w.value.markerEnd, t)}')`,
            sourcePosition: re,
            targetPosition: le,
            sourceX: de,
            sourceY: ye,
            targetX: Lt,
            targetY: Ft,
            sourceHandleId: w.value.sourceHandle,
            targetHandleId: w.value.targetHandle,
            interactionWidth: w.value.interactionWidth,
            ...T
          }),
          [
            E.value === "source" || E.value === !0 ? [
              ge(
                "g",
                {
                  onMousedown: ce,
                  onMouseenter: z,
                  onMouseout: X
                },
                ge(Rr, {
                  position: re,
                  centerX: de,
                  centerY: ye,
                  radius: i.value,
                  type: "source",
                  "data-type": "source"
                })
              )
            ] : null,
            E.value === "target" || E.value === !0 ? [
              ge(
                "g",
                {
                  onMousedown: ue,
                  onMouseenter: z,
                  onMouseout: X
                },
                ge(Rr, {
                  position: le,
                  centerX: Lt,
                  centerY: Ft,
                  radius: i.value,
                  type: "target",
                  "data-type": "target"
                })
              )
            ] : null
          ]
        ]
      );
    };
    function z() {
      R.value = !0;
    }
    function X() {
      R.value = !1;
    }
    function K(m, p) {
      k.update({ event: m, edge: w.value, connection: p });
    }
    function P(m) {
      k.updateEnd({ event: m, edge: w.value }), Q.value = !1;
    }
    function G(m, p) {
      m.button === 0 && (Q.value = !0, Y.value = p ? w.value.target : w.value.source, V.value = (p ? w.value.targetHandle : w.value.sourceHandle) ?? null, N.value = p ? "target" : "source", k.updateStart({ event: m, edge: w.value }), M(m));
    }
    function L(m) {
      var p;
      const T = { event: m, edge: w.value };
      f.value && (s.value = !1, w.value.selected && g.value ? (u([w.value]), (p = W.value) == null || p.blur()) : n([w.value])), k.click(T);
    }
    function ne(m) {
      k.contextMenu({ event: m, edge: w.value });
    }
    function j(m) {
      k.doubleClick({ event: m, edge: w.value });
    }
    function ae(m) {
      k.mouseEnter({ event: m, edge: w.value });
    }
    function he(m) {
      k.mouseMove({ event: m, edge: w.value });
    }
    function ie(m) {
      k.mouseLeave({ event: m, edge: w.value });
    }
    function ce(m) {
      G(m, !0);
    }
    function ue(m) {
      G(m, !1);
    }
    function y(m) {
      var p;
      !b.value && Us.includes(m.key) && f.value && (m.key === "Escape" ? ((p = W.value) == null || p.blur(), u([c(e.id)])) : n([c(e.id)]));
    }
  }
}), xg = bg, Eg = ve({
  name: "ConnectionLine",
  compatConfig: { MODE: 3 },
  setup() {
    var e;
    const {
      id: t,
      connectionMode: n,
      connectionStartHandle: o,
      connectionEndHandle: i,
      connectionPosition: r,
      connectionLineType: s,
      connectionLineStyle: a,
      connectionLineOptions: l,
      connectionStatus: u,
      viewport: c,
      findNode: d
    } = we(), h = (e = kt($o)) == null ? void 0 : e["connection-line"], g = oe(() => {
      var I;
      return d((I = o.value) == null ? void 0 : I.nodeId);
    }), b = oe(() => {
      var I;
      return d((I = i.value) == null ? void 0 : I.nodeId) ?? null;
    }), $ = oe(() => ({
      x: (r.value.x - c.value.x) / c.value.zoom,
      y: (r.value.y - c.value.y) / c.value.zoom
    })), S = oe(
      () => l.value.markerStart ? `url(#${cn(l.value.markerStart, t)})` : ""
    ), _ = oe(
      () => l.value.markerEnd ? `url(#${cn(l.value.markerEnd, t)})` : ""
    );
    return () => {
      var I, w, k;
      if (!g.value || !o.value)
        return null;
      const O = o.value.id, H = o.value.type, B = g.value.handleBounds;
      let R = B?.[H] ?? [];
      if (n.value === ht.Loose) {
        const x = B?.[H === "source" ? "target" : "source"] ?? [];
        R = [...R, ...x];
      }
      if (!R)
        return null;
      const Q = (O ? R.find((x) => x.id === O) : R[0]) ?? null, Y = Q?.position ?? J.Top, { x: V, y: N } = Rt(g.value, Q, Y);
      let W = null;
      b.value && (n.value === ht.Strict ? W = ((I = b.value.handleBounds[H === "source" ? "target" : "source"]) == null ? void 0 : I.find(
        (x) => {
          var A;
          return x.id === ((A = i.value) == null ? void 0 : A.id);
        }
      )) || null : W = ((w = [...b.value.handleBounds.source ?? [], ...b.value.handleBounds.target ?? []]) == null ? void 0 : w.find(
        (x) => {
          var A;
          return x.id === ((A = i.value) == null ? void 0 : A.id);
        }
      )) || null);
      const f = ((k = i.value) == null ? void 0 : k.position) ?? (Y ? si[Y] : null);
      if (!Y || !f)
        return null;
      const E = s.value ?? l.value.type ?? vt.Bezier;
      let v = "";
      const C = {
        sourceX: V,
        sourceY: N,
        sourcePosition: Y,
        targetX: $.value.x,
        targetY: $.value.y,
        targetPosition: f
      };
      return E === vt.Bezier ? [v] = va(C) : E === vt.Step ? [v] = li({
        ...C,
        borderRadius: 0
      }) : E === vt.SmoothStep ? [v] = li(C) : E === vt.SimpleBezier ? [v] = ma(C) : v = `M${V},${N} ${$.value.x},${$.value.y}`, ge(
        "svg",
        { class: "vue-flow__edges vue-flow__connectionline vue-flow__container" },
        ge(
          "g",
          { class: "vue-flow__connection" },
          h ? ge(h, {
            sourceX: V,
            sourceY: N,
            sourcePosition: Y,
            targetX: $.value.x,
            targetY: $.value.y,
            targetPosition: f,
            sourceNode: g.value,
            sourceHandle: Q,
            targetNode: b.value,
            targetHandle: W,
            markerEnd: _.value,
            markerStart: S.value,
            connectionStatus: u.value
          }) : ge("path", {
            d: v,
            class: [l.value.class, u, "vue-flow__connection-path"],
            style: {
              ...a.value,
              ...l.value.style
            },
            "marker-end": _.value,
            "marker-start": S.value
          })
        )
      );
    };
  }
}), Sg = Eg, Ng = ["id", "markerWidth", "markerHeight", "markerUnits", "orient"], Cg = {
  name: "MarkerType",
  compatConfig: { MODE: 3 }
}, Mg = /* @__PURE__ */ ve({
  ...Cg,
  props: {
    id: {},
    type: {},
    color: { default: "none" },
    width: { default: 12.5 },
    height: { default: 12.5 },
    markerUnits: { default: "strokeWidth" },
    orient: { default: "auto-start-reverse" },
    strokeWidth: { default: 1 }
  },
  setup(e) {
    return (t, n) => (U(), se("marker", {
      id: t.id,
      class: "vue-flow__arrowhead",
      viewBox: "-10 -10 20 20",
      refX: "0",
      refY: "0",
      markerWidth: `${t.width}`,
      markerHeight: `${t.height}`,
      markerUnits: t.markerUnits,
      orient: t.orient
    }, [
      t.type === F(eo).ArrowClosed ? (U(), se("polyline", {
        key: 0,
        style: Re({
          stroke: t.color,
          fill: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        points: "-5,-4 0,0 -5,4 -5,-4"
      }, null, 4)) : $e("", !0),
      t.type === F(eo).Arrow ? (U(), se("polyline", {
        key: 1,
        style: Re({
          stroke: t.color,
          strokeWidth: t.strokeWidth
        }),
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        fill: "none",
        points: "-5,-4 0,0 -5,4"
      }, null, 4)) : $e("", !0)
    ], 8, Ng));
  }
}), kg = {
  class: "vue-flow__marker vue-flow__container",
  "aria-hidden": "true"
}, Tg = {
  name: "MarkerDefinitions",
  compatConfig: { MODE: 3 }
}, Ig = /* @__PURE__ */ ve({
  ...Tg,
  setup(e) {
    const { id: t, edges: n, connectionLineOptions: o, defaultMarkerColor: i } = we(), r = oe(() => {
      const s = /* @__PURE__ */ new Set(), a = [], l = (u) => {
        if (u) {
          const c = cn(u, t);
          s.has(c) || (typeof u == "object" ? a.push({ ...u, id: c, color: u.color || i.value }) : a.push({ id: c, color: i.value, type: u }), s.add(c));
        }
      };
      for (const u of [o.value.markerEnd, o.value.markerStart])
        l(u);
      for (const u of n.value)
        for (const c of [u.markerStart, u.markerEnd])
          l(c);
      return a.sort((u, c) => u.id.localeCompare(c.id));
    });
    return (s, a) => (U(), se("svg", kg, [
      Ee("defs", null, [
        (U(!0), se(Ae, null, fo(r.value, (l) => (U(), Se(Mg, {
          id: l.id,
          key: l.id,
          type: l.type,
          color: l.color,
          width: l.width,
          height: l.height,
          markerUnits: l.markerUnits,
          "stroke-width": l.strokeWidth,
          orient: l.orient
        }, null, 8, ["id", "type", "color", "width", "height", "markerUnits", "stroke-width", "orient"]))), 128))
      ])
    ]));
  }
}), Ag = {
  name: "Edges",
  compatConfig: { MODE: 3 }
}, Dg = /* @__PURE__ */ ve({
  ...Ag,
  setup(e) {
    const { findNode: t, getEdges: n, elevateEdgesOnSelect: o } = we();
    return (i, r) => (U(), se(Ae, null, [
      xe(Ig),
      (U(!0), se(Ae, null, fo(F(n), (s) => (U(), se("svg", {
        key: s.id,
        class: "vue-flow__edges vue-flow__container",
        style: Re({ zIndex: F(Qf)(s, F(t), F(o)) })
      }, [
        xe(F(xg), {
          id: s.id
        }, null, 8, ["id"])
      ], 4))), 128)),
      xe(F(Sg))
    ], 64));
  }
}), zg = ve({
  name: "Node",
  compatConfig: { MODE: 3 },
  props: ["id", "resizeObserver"],
  setup(e) {
    const {
      id: t,
      noPanClassName: n,
      selectNodesOnDrag: o,
      nodesSelectionActive: i,
      multiSelectionActive: r,
      emits: s,
      removeSelectedNodes: a,
      addSelectedNodes: l,
      updateNodeDimensions: u,
      onUpdateNodeInternals: c,
      getNodeTypes: d,
      nodeExtent: h,
      elevateNodesOnSelect: g,
      disableKeyboardA11y: b,
      ariaLiveMessage: $,
      snapToGrid: S,
      snapGrid: _,
      nodeDragThreshold: I,
      nodesDraggable: w,
      elementsSelectable: k,
      nodesConnectable: O,
      nodesFocusable: H,
      hooks: B
    } = we(), R = _e(null);
    Et(la, R), Et(aa, e.id);
    const Q = kt($o), Y = vn(), V = fa(), { node: N, parentNode: W } = da(e.id), { emit: f, on: E } = mh(N, s), v = pe(() => typeof N.draggable > "u" ? w.value : N.draggable), C = pe(() => typeof N.selectable > "u" ? k.value : N.selectable), x = pe(() => typeof N.connectable > "u" ? O.value : N.connectable), A = pe(() => typeof N.focusable > "u" ? H.value : N.focusable), M = oe(
      () => C.value || v.value || B.value.nodeClick.hasListeners() || B.value.nodeDoubleClick.hasListeners() || B.value.nodeMouseEnter.hasListeners() || B.value.nodeMouseMove.hasListeners() || B.value.nodeMouseLeave.hasListeners()
    ), z = pe(() => !!N.dimensions.width && !!N.dimensions.height), X = oe(() => {
      const p = N.type || "default", T = Q?.[`node-${p}`];
      if (T)
        return T;
      let D = N.template || d.value[p];
      if (typeof D == "string" && Y) {
        const te = Object.keys(Y.appContext.components);
        te && te.includes(p) && (D = hs(p, !1));
      }
      return D && typeof D != "string" ? D : (s.error(new Me(Ce.NODE_TYPE_MISSING, D)), !1);
    }), K = ua({
      id: e.id,
      el: R,
      disabled: () => !v.value,
      selectable: C,
      dragHandle: () => N.dragHandle,
      onStart(p) {
        f.dragStart(p);
      },
      onDrag(p) {
        f.drag(p);
      },
      onStop(p) {
        f.dragStop(p);
      },
      onClick(p) {
        y(p);
      }
    }), P = oe(() => N.class instanceof Function ? N.class(N) : N.class), G = oe(() => {
      const p = (N.style instanceof Function ? N.style(N) : N.style) || {}, T = N.width instanceof Function ? N.width(N) : N.width, D = N.height instanceof Function ? N.height(N) : N.height;
      return !p.width && T && (p.width = typeof T == "string" ? T : `${T}px`), !p.height && D && (p.height = typeof D == "string" ? D : `${D}px`), p;
    }), L = pe(() => Number(N.zIndex ?? G.value.zIndex ?? 0));
    return c((p) => {
      (p.includes(e.id) || !p.length) && j();
    }), rt(() => {
      me(
        () => N.hidden,
        (p = !1, T, D) => {
          !p && R.value && (e.resizeObserver.observe(R.value), D(() => {
            R.value && e.resizeObserver.unobserve(R.value);
          }));
        },
        { immediate: !0, flush: "post" }
      );
    }), me([() => N.type, () => N.sourcePosition, () => N.targetPosition], () => {
      tt(() => {
        u([{ id: e.id, nodeElement: R.value, forceUpdate: !0 }]);
      });
    }), me(
      [
        () => N.position.x,
        () => N.position.y,
        () => {
          var p;
          return (p = W.value) == null ? void 0 : p.computedPosition.x;
        },
        () => {
          var p;
          return (p = W.value) == null ? void 0 : p.computedPosition.y;
        },
        () => {
          var p;
          return (p = W.value) == null ? void 0 : p.computedPosition.z;
        },
        L,
        () => N.selected,
        () => N.dimensions.height,
        () => N.dimensions.width,
        () => {
          var p;
          return (p = W.value) == null ? void 0 : p.dimensions.height;
        },
        () => {
          var p;
          return (p = W.value) == null ? void 0 : p.dimensions.width;
        }
      ],
      ([p, T, D, te, q, ee]) => {
        const re = {
          x: p,
          y: T,
          z: ee + (g.value && N.selected ? 1e3 : 0)
        };
        typeof D < "u" && typeof te < "u" ? N.computedPosition = Gf({ x: D, y: te, z: q }, re) : N.computedPosition = re;
      },
      { flush: "post", immediate: !0 }
    ), me([() => N.extent, h], ([p, T], [D, te]) => {
      (p !== D || T !== te) && ne();
    }), N.extent === "parent" || typeof N.extent == "object" && "range" in N.extent && N.extent.range === "parent" ? Uo(() => z).toBe(!0).then(ne) : ne(), () => N.hidden ? null : ge(
      "div",
      {
        ref: R,
        "data-id": N.id,
        class: [
          "vue-flow__node",
          `vue-flow__node-${X.value === !1 ? "default" : N.type || "default"}`,
          {
            [n.value]: v.value,
            dragging: K?.value,
            draggable: v.value,
            selected: N.selected,
            selectable: C.value,
            parent: N.isParent
          },
          P.value
        ],
        style: {
          visibility: z.value ? "visible" : "hidden",
          zIndex: N.computedPosition.z ?? L.value,
          transform: `translate(${N.computedPosition.x}px,${N.computedPosition.y}px)`,
          pointerEvents: M.value ? "all" : "none",
          ...G.value
        },
        tabIndex: A.value ? 0 : void 0,
        role: A.value ? "group" : void 0,
        "aria-describedby": b.value ? void 0 : `${qs}-${t}`,
        "aria-label": N.ariaLabel,
        "aria-roledescription": "node",
        ...N.domAttributes,
        onMouseenter: ae,
        onMousemove: he,
        onMouseleave: ie,
        onContextmenu: ce,
        onClick: y,
        onDblclick: ue,
        onKeydown: m
      },
      [
        ge(X.value === !1 ? d.value.default : X.value, {
          id: N.id,
          type: N.type,
          data: N.data,
          events: { ...N.events, ...E },
          selected: N.selected,
          resizing: N.resizing,
          dragging: K.value,
          connectable: x.value,
          position: N.computedPosition,
          dimensions: N.dimensions,
          isValidTargetPos: N.isValidTargetPos,
          isValidSourcePos: N.isValidSourcePos,
          parent: N.parentNode,
          parentNodeId: N.parentNode,
          zIndex: N.computedPosition.z ?? L.value,
          targetPosition: N.targetPosition,
          sourcePosition: N.sourcePosition,
          label: N.label,
          dragHandle: N.dragHandle,
          onUpdateNodeInternals: j
        })
      ]
    );
    function ne() {
      const p = N.computedPosition, { computedPosition: T, position: D } = ki(
        N,
        S.value ? wo(p, _.value) : p,
        s.error,
        h.value,
        W.value
      );
      (N.computedPosition.x !== T.x || N.computedPosition.y !== T.y) && (N.computedPosition = { ...N.computedPosition, ...T }), (N.position.x !== D.x || N.position.y !== D.y) && (N.position = D);
    }
    function j() {
      R.value && u([{ id: e.id, nodeElement: R.value, forceUpdate: !0 }]);
    }
    function ae(p) {
      K?.value || f.mouseEnter({ event: p, node: N });
    }
    function he(p) {
      K?.value || f.mouseMove({ event: p, node: N });
    }
    function ie(p) {
      K?.value || f.mouseLeave({ event: p, node: N });
    }
    function ce(p) {
      return f.contextMenu({ event: p, node: N });
    }
    function ue(p) {
      return f.doubleClick({ event: p, node: N });
    }
    function y(p) {
      C.value && (!o.value || !v.value || I.value > 0) && ai(
        N,
        r.value,
        l,
        a,
        i,
        !1,
        R.value
      ), f.click({ event: p, node: N });
    }
    function m(p) {
      if (!(oi(p) || b.value))
        if (Us.includes(p.key) && C.value) {
          const T = p.key === "Escape";
          ai(
            N,
            r.value,
            l,
            a,
            i,
            T,
            R.value
          );
        } else v.value && N.selected && Dt[p.key] && (p.preventDefault(), $.value = `Moved selected node ${p.key.replace("Arrow", "").toLowerCase()}. New position, x: ${~~N.position.x}, y: ${~~N.position.y}`, V(
          {
            x: Dt[p.key].x,
            y: Dt[p.key].y
          },
          p.shiftKey
        ));
    }
  }
}), Pg = zg;
function Og(e = { includeHiddenNodes: !1 }) {
  const { nodes: t } = we();
  return oe(() => {
    if (t.value.length === 0)
      return !1;
    for (const n of t.value)
      if ((e.includeHiddenNodes || !n.hidden) && (n?.handleBounds === void 0 || n.dimensions.width === 0 || n.dimensions.height === 0))
        return !1;
    return !0;
  });
}
const Bg = { class: "vue-flow__nodes vue-flow__container" }, Rg = {
  name: "Nodes",
  compatConfig: { MODE: 3 }
}, Vg = /* @__PURE__ */ ve({
  ...Rg,
  setup(e) {
    const { getNodes: t, updateNodeDimensions: n, emits: o } = we(), i = Og(), r = _e();
    return me(
      i,
      (s) => {
        s && tt(() => {
          o.nodesInitialized(t.value);
        });
      },
      { immediate: !0 }
    ), rt(() => {
      r.value = new ResizeObserver((s) => {
        const a = s.map((l) => ({
          id: l.target.getAttribute("data-id"),
          nodeElement: l.target,
          forceUpdate: !0
        }));
        tt(() => n(a));
      });
    }), fs(() => {
      var s;
      return (s = r.value) == null ? void 0 : s.disconnect();
    }), (s, a) => (U(), se("div", Bg, [
      r.value ? (U(!0), se(Ae, { key: 0 }, fo(F(t), (l, u, c, d) => {
        const h = [l.id];
        if (d && d.key === l.id && rl(d, h))
          return d;
        const g = (U(), Se(F(Pg), {
          id: l.id,
          key: l.id,
          "resize-observer": r.value
        }, null, 8, ["id", "resize-observer"]));
        return g.memo = h, g;
      }, a, 0), 128)) : $e("", !0)
    ]));
  }
});
function Hg() {
  const { emits: e } = we();
  rt(() => {
    if (sa()) {
      const t = document.querySelector(".vue-flow__pane");
      t && window.getComputedStyle(t).zIndex !== "1" && e.error(new Me(Ce.MISSING_STYLES));
    }
  });
}
const Lg = /* @__PURE__ */ Ee("div", { class: "vue-flow__edge-labels" }, null, -1), Fg = {
  name: "VueFlow",
  compatConfig: { MODE: 3 }
}, Yg = /* @__PURE__ */ ve({
  ...Fg,
  props: {
    id: {},
    modelValue: {},
    nodes: {},
    edges: {},
    edgeTypes: {},
    nodeTypes: {},
    connectionMode: {},
    connectionLineType: {},
    connectionLineStyle: { default: void 0 },
    connectionLineOptions: { default: void 0 },
    connectionRadius: {},
    isValidConnection: { type: [Function, null], default: void 0 },
    deleteKeyCode: { default: void 0 },
    selectionKeyCode: { type: [Boolean, null], default: void 0 },
    multiSelectionKeyCode: { default: void 0 },
    zoomActivationKeyCode: { default: void 0 },
    panActivationKeyCode: { default: void 0 },
    snapToGrid: { type: Boolean, default: void 0 },
    snapGrid: {},
    onlyRenderVisibleElements: { type: Boolean, default: void 0 },
    edgesUpdatable: { type: [Boolean, String], default: void 0 },
    nodesDraggable: { type: Boolean, default: void 0 },
    nodesConnectable: { type: Boolean, default: void 0 },
    nodeDragThreshold: {},
    elementsSelectable: { type: Boolean, default: void 0 },
    selectNodesOnDrag: { type: Boolean, default: void 0 },
    panOnDrag: { type: [Boolean, Array], default: void 0 },
    minZoom: {},
    maxZoom: {},
    defaultViewport: {},
    translateExtent: {},
    nodeExtent: {},
    defaultMarkerColor: {},
    zoomOnScroll: { type: Boolean, default: void 0 },
    zoomOnPinch: { type: Boolean, default: void 0 },
    panOnScroll: { type: Boolean, default: void 0 },
    panOnScrollSpeed: {},
    panOnScrollMode: {},
    paneClickDistance: {},
    zoomOnDoubleClick: { type: Boolean, default: void 0 },
    preventScrolling: { type: Boolean, default: void 0 },
    selectionMode: {},
    edgeUpdaterRadius: {},
    fitViewOnInit: { type: Boolean, default: void 0 },
    connectOnClick: { type: Boolean, default: void 0 },
    applyDefault: { type: Boolean, default: void 0 },
    autoConnect: { type: [Boolean, Function], default: void 0 },
    noDragClassName: {},
    noWheelClassName: {},
    noPanClassName: {},
    defaultEdgeOptions: {},
    elevateEdgesOnSelect: { type: Boolean, default: void 0 },
    elevateNodesOnSelect: { type: Boolean, default: void 0 },
    disableKeyboardA11y: { type: Boolean, default: void 0 },
    edgesFocusable: { type: Boolean, default: void 0 },
    nodesFocusable: { type: Boolean, default: void 0 },
    autoPanOnConnect: { type: Boolean, default: void 0 },
    autoPanOnNodeDrag: { type: Boolean, default: void 0 },
    autoPanSpeed: {}
  },
  emits: ["nodesChange", "edgesChange", "nodesInitialized", "paneReady", "init", "updateNodeInternals", "error", "connect", "connectStart", "connectEnd", "clickConnectStart", "clickConnectEnd", "moveStart", "move", "moveEnd", "selectionDragStart", "selectionDrag", "selectionDragStop", "selectionContextMenu", "selectionStart", "selectionEnd", "viewportChangeStart", "viewportChange", "viewportChangeEnd", "paneScroll", "paneClick", "paneContextMenu", "paneMouseEnter", "paneMouseMove", "paneMouseLeave", "edgeUpdate", "edgeContextMenu", "edgeMouseEnter", "edgeMouseMove", "edgeMouseLeave", "edgeDoubleClick", "edgeClick", "edgeUpdateStart", "edgeUpdateEnd", "nodeContextMenu", "nodeMouseEnter", "nodeMouseMove", "nodeMouseLeave", "nodeDoubleClick", "nodeClick", "nodeDragStart", "nodeDrag", "nodeDragStop", "miniMapNodeClick", "miniMapNodeDoubleClick", "miniMapNodeMouseEnter", "miniMapNodeMouseMove", "miniMapNodeMouseLeave", "update:modelValue", "update:nodes", "update:edges"],
  setup(e, { expose: t, emit: n }) {
    const o = e, i = cs(), r = Io(o, "modelValue", n), s = Io(o, "nodes", n), a = Io(o, "edges", n), l = we(o), u = $h({ modelValue: r, nodes: s, edges: a }, o, l);
    return xh(n, l.hooks), wg(), Hg(), Et($o, i), ds(() => {
      u();
    }), t(l), (c, d) => (U(), se("div", {
      ref: F(l).vueFlowRef,
      class: "vue-flow"
    }, [
      xe(hg, null, {
        default: ke(() => [
          xe(Dg),
          Lg,
          xe(Vg),
          be(c.$slots, "zoom-pane")
        ]),
        _: 3
      }),
      be(c.$slots, "default"),
      xe(yg)
    ], 512));
  }
}), Xg = {
  name: "Panel",
  compatConfig: { MODE: 3 }
}, wa = /* @__PURE__ */ ve({
  ...Xg,
  props: {
    position: {}
  },
  setup(e) {
    const t = e, { userSelectionActive: n } = we(), o = oe(() => `${t.position}`.split("-"));
    return (i, r) => (U(), se("div", {
      class: nt(["vue-flow__panel", o.value]),
      style: Re({ pointerEvents: F(n) ? "none" : "all" })
    }, [
      be(i.$slots, "default")
    ], 6));
  }
});
var je = /* @__PURE__ */ ((e) => (e.Lines = "lines", e.Dots = "dots", e))(je || {});
const _a = function({ dimensions: e, size: t, color: n }) {
  return ge("path", {
    stroke: n,
    "stroke-width": t,
    d: `M${e[0] / 2} 0 V${e[1]} M0 ${e[1] / 2} H${e[0]}`
  });
}, $a = function({ radius: e, color: t }) {
  return ge("circle", { cx: e, cy: e, r: e, fill: t });
};
je.Lines + "", je.Dots + "";
const Gg = {
  [je.Dots]: "#81818a",
  [je.Lines]: "#eee"
}, qg = ["id", "x", "y", "width", "height", "patternTransform"], Zg = {
  key: 2,
  height: "100",
  width: "100"
}, Ug = ["fill"], Wg = ["x", "y", "fill"], Kg = {
  name: "Background",
  compatConfig: { MODE: 3 }
}, Qg = /* @__PURE__ */ ve({
  ...Kg,
  props: {
    id: {},
    variant: { default: () => je.Dots },
    gap: { default: 20 },
    size: { default: 1 },
    lineWidth: { default: 1 },
    patternColor: {},
    color: {},
    bgColor: {},
    height: { default: 100 },
    width: { default: 100 },
    x: { default: 0 },
    y: { default: 0 },
    offset: { default: 0 }
  },
  setup(e) {
    const { id: t, viewport: n } = we(), o = oe(() => {
      const s = n.value.zoom, [a, l] = Array.isArray(e.gap) ? e.gap : [e.gap, e.gap], u = [a * s || 1, l * s || 1], c = e.size * s, [d, h] = Array.isArray(e.offset) ? e.offset : [e.offset, e.offset], g = [d * s || 1 + u[0] / 2, h * s || 1 + u[1] / 2];
      return {
        scaledGap: u,
        offset: g,
        size: c
      };
    }), i = pe(() => `pattern-${t}${e.id ? `-${e.id}` : ""}`), r = pe(() => e.color || e.patternColor || Gg[e.variant || je.Dots]);
    return (s, a) => (U(), se("svg", {
      class: "vue-flow__background vue-flow__container",
      style: Re({
        height: `${s.height > 100 ? 100 : s.height}%`,
        width: `${s.width > 100 ? 100 : s.width}%`
      })
    }, [
      be(s.$slots, "pattern-container", { id: i.value }, () => [
        Ee("pattern", {
          id: i.value,
          x: F(n).x % o.value.scaledGap[0],
          y: F(n).y % o.value.scaledGap[1],
          width: o.value.scaledGap[0],
          height: o.value.scaledGap[1],
          patternTransform: `translate(-${o.value.offset[0]},-${o.value.offset[1]})`,
          patternUnits: "userSpaceOnUse"
        }, [
          be(s.$slots, "pattern", {}, () => [
            s.variant === F(je).Lines ? (U(), Se(F(_a), {
              key: 0,
              size: s.lineWidth,
              color: r.value,
              dimensions: o.value.scaledGap
            }, null, 8, ["size", "color", "dimensions"])) : s.variant === F(je).Dots ? (U(), Se(F($a), {
              key: 1,
              color: r.value,
              radius: o.value.size / 2
            }, null, 8, ["color", "radius"])) : $e("", !0),
            s.bgColor ? (U(), se("svg", Zg, [
              Ee("rect", {
                width: "100%",
                height: "100%",
                fill: s.bgColor
              }, null, 8, Ug)
            ])) : $e("", !0)
          ])
        ], 8, qg)
      ]),
      Ee("rect", {
        x: s.x,
        y: s.y,
        width: "100%",
        height: "100%",
        fill: `url(#${i.value})`
      }, null, 8, Wg),
      be(s.$slots, "default", { id: i.value })
    ], 4));
  }
}), Jg = {
  name: "ControlButton",
  compatConfig: { MODE: 3 }
}, jg = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, ep = {
  type: "button",
  class: "vue-flow__controls-button"
};
function tp(e, t, n, o, i, r) {
  return U(), se("button", ep, [
    be(e.$slots, "default")
  ]);
}
const ft = /* @__PURE__ */ jg(Jg, [["render", tp]]), np = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 32"
}, op = /* @__PURE__ */ Ee("path", { d: "M32 18.133H18.133V32h-4.266V18.133H0v-4.266h13.867V0h4.266v13.867H32z" }, null, -1), ip = [
  op
];
function rp(e, t) {
  return U(), se("svg", np, ip);
}
const sp = { render: rp }, ap = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 5"
}, lp = /* @__PURE__ */ Ee("path", { d: "M0 0h32v4.2H0z" }, null, -1), up = [
  lp
];
function cp(e, t) {
  return U(), se("svg", ap, up);
}
const dp = { render: cp }, fp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 32 30"
}, hp = /* @__PURE__ */ Ee("path", { d: "M3.692 4.63c0-.53.4-.938.939-.938h5.215V0H4.708C2.13 0 0 2.054 0 4.63v5.216h3.692V4.631zM27.354 0h-5.2v3.692h5.17c.53 0 .984.4.984.939v5.215H32V4.631A4.624 4.624 0 0 0 27.354 0zm.954 24.83c0 .532-.4.94-.939.94h-5.215v3.768h5.215c2.577 0 4.631-2.13 4.631-4.707v-5.139h-3.692v5.139zm-23.677.94a.919.919 0 0 1-.939-.94v-5.138H0v5.139c0 2.577 2.13 4.707 4.708 4.707h5.138V25.77H4.631z" }, null, -1), gp = [
  hp
];
function pp(e, t) {
  return U(), se("svg", fp, gp);
}
const vp = { render: pp }, mp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, yp = /* @__PURE__ */ Ee("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0 8 0 4.571 3.429 4.571 7.619v3.048H3.048A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047zm4.724-13.866H7.467V7.619c0-2.59 2.133-4.724 4.723-4.724 2.591 0 4.724 2.133 4.724 4.724v3.048z" }, null, -1), wp = [
  yp
];
function _p(e, t) {
  return U(), se("svg", mp, wp);
}
const $p = { render: _p }, bp = {
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 25 32"
}, xp = /* @__PURE__ */ Ee("path", { d: "M21.333 10.667H19.81V7.619C19.81 3.429 16.38 0 12.19 0c-4.114 1.828-1.37 2.133.305 2.438 1.676.305 4.42 2.59 4.42 5.181v3.048H3.047A3.056 3.056 0 0 0 0 13.714v15.238A3.056 3.056 0 0 0 3.048 32h18.285a3.056 3.056 0 0 0 3.048-3.048V13.714a3.056 3.056 0 0 0-3.048-3.047zM12.19 24.533a3.056 3.056 0 0 1-3.047-3.047 3.056 3.056 0 0 1 3.047-3.048 3.056 3.056 0 0 1 3.048 3.048 3.056 3.056 0 0 1-3.048 3.047z" }, null, -1), Ep = [
  xp
];
function Sp(e, t) {
  return U(), se("svg", bp, Ep);
}
const Np = { render: Sp }, Cp = {
  name: "Controls",
  compatConfig: { MODE: 3 }
}, Mp = /* @__PURE__ */ ve({
  ...Cp,
  props: {
    showZoom: { type: Boolean, default: !0 },
    showFitView: { type: Boolean, default: !0 },
    showInteractive: { type: Boolean, default: !0 },
    fitViewParams: {},
    position: { default: () => Gs.BottomLeft }
  },
  emits: ["zoomIn", "zoomOut", "fitView", "interactionChange"],
  setup(e, { emit: t }) {
    const {
      nodesDraggable: n,
      nodesConnectable: o,
      elementsSelectable: i,
      setInteractive: r,
      zoomIn: s,
      zoomOut: a,
      fitView: l,
      viewport: u,
      minZoom: c,
      maxZoom: d
    } = we(), h = pe(() => n.value || o.value || i.value), g = pe(() => u.value.zoom <= c.value), b = pe(() => u.value.zoom >= d.value);
    function $() {
      s(), t("zoomIn");
    }
    function S() {
      a(), t("zoomOut");
    }
    function _() {
      l(e.fitViewParams), t("fitView");
    }
    function I() {
      r(!h.value), t("interactionChange", !h.value);
    }
    return (w, k) => (U(), Se(F(wa), {
      class: "vue-flow__controls",
      position: w.position
    }, {
      default: ke(() => [
        be(w.$slots, "top"),
        w.showZoom ? (U(), se(Ae, { key: 0 }, [
          be(w.$slots, "control-zoom-in", {}, () => [
            xe(ft, {
              class: "vue-flow__controls-zoomin",
              disabled: b.value,
              onClick: $
            }, {
              default: ke(() => [
                be(w.$slots, "icon-zoom-in", {}, () => [
                  (U(), Se(pt(F(sp))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ]),
          be(w.$slots, "control-zoom-out", {}, () => [
            xe(ft, {
              class: "vue-flow__controls-zoomout",
              disabled: g.value,
              onClick: S
            }, {
              default: ke(() => [
                be(w.$slots, "icon-zoom-out", {}, () => [
                  (U(), Se(pt(F(dp))))
                ])
              ]),
              _: 3
            }, 8, ["disabled"])
          ])
        ], 64)) : $e("", !0),
        w.showFitView ? be(w.$slots, "control-fit-view", { key: 1 }, () => [
          xe(ft, {
            class: "vue-flow__controls-fitview",
            onClick: _
          }, {
            default: ke(() => [
              be(w.$slots, "icon-fit-view", {}, () => [
                (U(), Se(pt(F(vp))))
              ])
            ]),
            _: 3
          })
        ]) : $e("", !0),
        w.showInteractive ? be(w.$slots, "control-interactive", { key: 2 }, () => [
          w.showInteractive ? (U(), Se(ft, {
            key: 0,
            class: "vue-flow__controls-interactive",
            onClick: I
          }, {
            default: ke(() => [
              h.value ? be(w.$slots, "icon-unlock", { key: 0 }, () => [
                (U(), Se(pt(F(Np))))
              ]) : $e("", !0),
              h.value ? $e("", !0) : be(w.$slots, "icon-lock", { key: 1 }, () => [
                (U(), Se(pt(F($p))))
              ])
            ]),
            _: 3
          })) : $e("", !0)
        ]) : $e("", !0),
        be(w.$slots, "default")
      ]),
      _: 3
    }, 8, ["position"]));
  }
});
var kp = { value: () => {
} };
function Ai() {
  for (var e = 0, t = arguments.length, n = {}, o; e < t; ++e) {
    if (!(o = arguments[e] + "") || o in n || /[\s.]/.test(o)) throw new Error("illegal type: " + o);
    n[o] = [];
  }
  return new Hn(n);
}
function Hn(e) {
  this._ = e;
}
function Tp(e, t) {
  return e.trim().split(/^|\s+/).map(function(n) {
    var o = "", i = n.indexOf(".");
    if (i >= 0 && (o = n.slice(i + 1), n = n.slice(0, i)), n && !t.hasOwnProperty(n)) throw new Error("unknown type: " + n);
    return { type: n, name: o };
  });
}
Hn.prototype = Ai.prototype = {
  constructor: Hn,
  on: function(e, t) {
    var n = this._, o = Tp(e + "", n), i, r = -1, s = o.length;
    if (arguments.length < 2) {
      for (; ++r < s; ) if ((i = (e = o[r]).type) && (i = Ip(n[i], e.name))) return i;
      return;
    }
    if (t != null && typeof t != "function") throw new Error("invalid callback: " + t);
    for (; ++r < s; )
      if (i = (e = o[r]).type) n[i] = Vr(n[i], e.name, t);
      else if (t == null) for (i in n) n[i] = Vr(n[i], e.name, null);
    return this;
  },
  copy: function() {
    var e = {}, t = this._;
    for (var n in t) e[n] = t[n].slice();
    return new Hn(e);
  },
  call: function(e, t) {
    if ((i = arguments.length - 2) > 0) for (var n = new Array(i), o = 0, i, r; o < i; ++o) n[o] = arguments[o + 2];
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (r = this._[e], o = 0, i = r.length; o < i; ++o) r[o].value.apply(t, n);
  },
  apply: function(e, t, n) {
    if (!this._.hasOwnProperty(e)) throw new Error("unknown type: " + e);
    for (var o = this._[e], i = 0, r = o.length; i < r; ++i) o[i].value.apply(t, n);
  }
};
function Ip(e, t) {
  for (var n = 0, o = e.length, i; n < o; ++n)
    if ((i = e[n]).name === t)
      return i.value;
}
function Vr(e, t, n) {
  for (var o = 0, i = e.length; o < i; ++o)
    if (e[o].name === t) {
      e[o] = kp, e = e.slice(0, o).concat(e.slice(o + 1));
      break;
    }
  return n != null && e.push({ name: t, value: n }), e;
}
var ui = "http://www.w3.org/1999/xhtml";
const Hr = {
  svg: "http://www.w3.org/2000/svg",
  xhtml: ui,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
};
function No(e) {
  var t = e += "", n = t.indexOf(":");
  return n >= 0 && (t = e.slice(0, n)) !== "xmlns" && (e = e.slice(n + 1)), Hr.hasOwnProperty(t) ? { space: Hr[t], local: e } : e;
}
function Ap(e) {
  return function() {
    var t = this.ownerDocument, n = this.namespaceURI;
    return n === ui && t.documentElement.namespaceURI === ui ? t.createElement(e) : t.createElementNS(n, e);
  };
}
function Dp(e) {
  return function() {
    return this.ownerDocument.createElementNS(e.space, e.local);
  };
}
function ba(e) {
  var t = No(e);
  return (t.local ? Dp : Ap)(t);
}
function zp() {
}
function Di(e) {
  return e == null ? zp : function() {
    return this.querySelector(e);
  };
}
function Pp(e) {
  typeof e != "function" && (e = Di(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], s = r.length, a = o[i] = new Array(s), l, u, c = 0; c < s; ++c)
      (l = r[c]) && (u = e.call(l, l.__data__, c, r)) && ("__data__" in l && (u.__data__ = l.__data__), a[c] = u);
  return new ze(o, this._parents);
}
function Op(e) {
  return e == null ? [] : Array.isArray(e) ? e : Array.from(e);
}
function Bp() {
  return [];
}
function xa(e) {
  return e == null ? Bp : function() {
    return this.querySelectorAll(e);
  };
}
function Rp(e) {
  return function() {
    return Op(e.apply(this, arguments));
  };
}
function Vp(e) {
  typeof e == "function" ? e = Rp(e) : e = xa(e);
  for (var t = this._groups, n = t.length, o = [], i = [], r = 0; r < n; ++r)
    for (var s = t[r], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && (o.push(e.call(l, l.__data__, u, s)), i.push(l));
  return new ze(o, i);
}
function Ea(e) {
  return function() {
    return this.matches(e);
  };
}
function Sa(e) {
  return function(t) {
    return t.matches(e);
  };
}
var Hp = Array.prototype.find;
function Lp(e) {
  return function() {
    return Hp.call(this.children, e);
  };
}
function Fp() {
  return this.firstElementChild;
}
function Yp(e) {
  return this.select(e == null ? Fp : Lp(typeof e == "function" ? e : Sa(e)));
}
var Xp = Array.prototype.filter;
function Gp() {
  return Array.from(this.children);
}
function qp(e) {
  return function() {
    return Xp.call(this.children, e);
  };
}
function Zp(e) {
  return this.selectAll(e == null ? Gp : qp(typeof e == "function" ? e : Sa(e)));
}
function Up(e) {
  typeof e != "function" && (e = Ea(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], s = r.length, a = o[i] = [], l, u = 0; u < s; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new ze(o, this._parents);
}
function Na(e) {
  return new Array(e.length);
}
function Wp() {
  return new ze(this._enter || this._groups.map(Na), this._parents);
}
function ro(e, t) {
  this.ownerDocument = e.ownerDocument, this.namespaceURI = e.namespaceURI, this._next = null, this._parent = e, this.__data__ = t;
}
ro.prototype = {
  constructor: ro,
  appendChild: function(e) {
    return this._parent.insertBefore(e, this._next);
  },
  insertBefore: function(e, t) {
    return this._parent.insertBefore(e, t);
  },
  querySelector: function(e) {
    return this._parent.querySelector(e);
  },
  querySelectorAll: function(e) {
    return this._parent.querySelectorAll(e);
  }
};
function Kp(e) {
  return function() {
    return e;
  };
}
function Qp(e, t, n, o, i, r) {
  for (var s = 0, a, l = t.length, u = r.length; s < u; ++s)
    (a = t[s]) ? (a.__data__ = r[s], o[s] = a) : n[s] = new ro(e, r[s]);
  for (; s < l; ++s)
    (a = t[s]) && (i[s] = a);
}
function Jp(e, t, n, o, i, r, s) {
  var a, l, u = /* @__PURE__ */ new Map(), c = t.length, d = r.length, h = new Array(c), g;
  for (a = 0; a < c; ++a)
    (l = t[a]) && (h[a] = g = s.call(l, l.__data__, a, t) + "", u.has(g) ? i[a] = l : u.set(g, l));
  for (a = 0; a < d; ++a)
    g = s.call(e, r[a], a, r) + "", (l = u.get(g)) ? (o[a] = l, l.__data__ = r[a], u.delete(g)) : n[a] = new ro(e, r[a]);
  for (a = 0; a < c; ++a)
    (l = t[a]) && u.get(h[a]) === l && (i[a] = l);
}
function jp(e) {
  return e.__data__;
}
function ev(e, t) {
  if (!arguments.length) return Array.from(this, jp);
  var n = t ? Jp : Qp, o = this._parents, i = this._groups;
  typeof e != "function" && (e = Kp(e));
  for (var r = i.length, s = new Array(r), a = new Array(r), l = new Array(r), u = 0; u < r; ++u) {
    var c = o[u], d = i[u], h = d.length, g = tv(e.call(c, c && c.__data__, u, o)), b = g.length, $ = a[u] = new Array(b), S = s[u] = new Array(b), _ = l[u] = new Array(h);
    n(c, d, $, S, _, g, t);
    for (var I = 0, w = 0, k, O; I < b; ++I)
      if (k = $[I]) {
        for (I >= w && (w = I + 1); !(O = S[w]) && ++w < b; ) ;
        k._next = O || null;
      }
  }
  return s = new ze(s, o), s._enter = a, s._exit = l, s;
}
function tv(e) {
  return typeof e == "object" && "length" in e ? e : Array.from(e);
}
function nv() {
  return new ze(this._exit || this._groups.map(Na), this._parents);
}
function ov(e, t, n) {
  var o = this.enter(), i = this, r = this.exit();
  return typeof e == "function" ? (o = e(o), o && (o = o.selection())) : o = o.append(e + ""), t != null && (i = t(i), i && (i = i.selection())), n == null ? r.remove() : n(r), o && i ? o.merge(i).order() : i;
}
function iv(e) {
  for (var t = e.selection ? e.selection() : e, n = this._groups, o = t._groups, i = n.length, r = o.length, s = Math.min(i, r), a = new Array(i), l = 0; l < s; ++l)
    for (var u = n[l], c = o[l], d = u.length, h = a[l] = new Array(d), g, b = 0; b < d; ++b)
      (g = u[b] || c[b]) && (h[b] = g);
  for (; l < i; ++l)
    a[l] = n[l];
  return new ze(a, this._parents);
}
function rv() {
  for (var e = this._groups, t = -1, n = e.length; ++t < n; )
    for (var o = e[t], i = o.length - 1, r = o[i], s; --i >= 0; )
      (s = o[i]) && (r && s.compareDocumentPosition(r) ^ 4 && r.parentNode.insertBefore(s, r), r = s);
  return this;
}
function sv(e) {
  e || (e = av);
  function t(d, h) {
    return d && h ? e(d.__data__, h.__data__) : !d - !h;
  }
  for (var n = this._groups, o = n.length, i = new Array(o), r = 0; r < o; ++r) {
    for (var s = n[r], a = s.length, l = i[r] = new Array(a), u, c = 0; c < a; ++c)
      (u = s[c]) && (l[c] = u);
    l.sort(t);
  }
  return new ze(i, this._parents).order();
}
function av(e, t) {
  return e < t ? -1 : e > t ? 1 : e >= t ? 0 : NaN;
}
function lv() {
  var e = arguments[0];
  return arguments[0] = this, e.apply(null, arguments), this;
}
function uv() {
  return Array.from(this);
}
function cv() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, r = o.length; i < r; ++i) {
      var s = o[i];
      if (s) return s;
    }
  return null;
}
function dv() {
  let e = 0;
  for (const t of this) ++e;
  return e;
}
function fv() {
  return !this.node();
}
function hv(e) {
  for (var t = this._groups, n = 0, o = t.length; n < o; ++n)
    for (var i = t[n], r = 0, s = i.length, a; r < s; ++r)
      (a = i[r]) && e.call(a, a.__data__, r, i);
  return this;
}
function gv(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function pv(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function vv(e, t) {
  return function() {
    this.setAttribute(e, t);
  };
}
function mv(e, t) {
  return function() {
    this.setAttributeNS(e.space, e.local, t);
  };
}
function yv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttribute(e) : this.setAttribute(e, n);
  };
}
function wv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? this.removeAttributeNS(e.space, e.local) : this.setAttributeNS(e.space, e.local, n);
  };
}
function _v(e, t) {
  var n = No(e);
  if (arguments.length < 2) {
    var o = this.node();
    return n.local ? o.getAttributeNS(n.space, n.local) : o.getAttribute(n);
  }
  return this.each((t == null ? n.local ? pv : gv : typeof t == "function" ? n.local ? wv : yv : n.local ? mv : vv)(n, t));
}
function Ca(e) {
  return e.ownerDocument && e.ownerDocument.defaultView || e.document && e || e.defaultView;
}
function $v(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function bv(e, t, n) {
  return function() {
    this.style.setProperty(e, t, n);
  };
}
function xv(e, t, n) {
  return function() {
    var o = t.apply(this, arguments);
    o == null ? this.style.removeProperty(e) : this.style.setProperty(e, o, n);
  };
}
function Ev(e, t, n) {
  return arguments.length > 1 ? this.each((t == null ? $v : typeof t == "function" ? xv : bv)(e, t, n ?? "")) : Vt(this.node(), e);
}
function Vt(e, t) {
  return e.style.getPropertyValue(t) || Ca(e).getComputedStyle(e, null).getPropertyValue(t);
}
function Sv(e) {
  return function() {
    delete this[e];
  };
}
function Nv(e, t) {
  return function() {
    this[e] = t;
  };
}
function Cv(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    n == null ? delete this[e] : this[e] = n;
  };
}
function Mv(e, t) {
  return arguments.length > 1 ? this.each((t == null ? Sv : typeof t == "function" ? Cv : Nv)(e, t)) : this.node()[e];
}
function Ma(e) {
  return e.trim().split(/^|\s+/);
}
function zi(e) {
  return e.classList || new ka(e);
}
function ka(e) {
  this._node = e, this._names = Ma(e.getAttribute("class") || "");
}
ka.prototype = {
  add: function(e) {
    var t = this._names.indexOf(e);
    t < 0 && (this._names.push(e), this._node.setAttribute("class", this._names.join(" ")));
  },
  remove: function(e) {
    var t = this._names.indexOf(e);
    t >= 0 && (this._names.splice(t, 1), this._node.setAttribute("class", this._names.join(" ")));
  },
  contains: function(e) {
    return this._names.indexOf(e) >= 0;
  }
};
function Ta(e, t) {
  for (var n = zi(e), o = -1, i = t.length; ++o < i; ) n.add(t[o]);
}
function Ia(e, t) {
  for (var n = zi(e), o = -1, i = t.length; ++o < i; ) n.remove(t[o]);
}
function kv(e) {
  return function() {
    Ta(this, e);
  };
}
function Tv(e) {
  return function() {
    Ia(this, e);
  };
}
function Iv(e, t) {
  return function() {
    (t.apply(this, arguments) ? Ta : Ia)(this, e);
  };
}
function Av(e, t) {
  var n = Ma(e + "");
  if (arguments.length < 2) {
    for (var o = zi(this.node()), i = -1, r = n.length; ++i < r; ) if (!o.contains(n[i])) return !1;
    return !0;
  }
  return this.each((typeof t == "function" ? Iv : t ? kv : Tv)(n, t));
}
function Dv() {
  this.textContent = "";
}
function zv(e) {
  return function() {
    this.textContent = e;
  };
}
function Pv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.textContent = t ?? "";
  };
}
function Ov(e) {
  return arguments.length ? this.each(e == null ? Dv : (typeof e == "function" ? Pv : zv)(e)) : this.node().textContent;
}
function Bv() {
  this.innerHTML = "";
}
function Rv(e) {
  return function() {
    this.innerHTML = e;
  };
}
function Vv(e) {
  return function() {
    var t = e.apply(this, arguments);
    this.innerHTML = t ?? "";
  };
}
function Hv(e) {
  return arguments.length ? this.each(e == null ? Bv : (typeof e == "function" ? Vv : Rv)(e)) : this.node().innerHTML;
}
function Lv() {
  this.nextSibling && this.parentNode.appendChild(this);
}
function Fv() {
  return this.each(Lv);
}
function Yv() {
  this.previousSibling && this.parentNode.insertBefore(this, this.parentNode.firstChild);
}
function Xv() {
  return this.each(Yv);
}
function Gv(e) {
  var t = typeof e == "function" ? e : ba(e);
  return this.select(function() {
    return this.appendChild(t.apply(this, arguments));
  });
}
function qv() {
  return null;
}
function Zv(e, t) {
  var n = typeof e == "function" ? e : ba(e), o = t == null ? qv : typeof t == "function" ? t : Di(t);
  return this.select(function() {
    return this.insertBefore(n.apply(this, arguments), o.apply(this, arguments) || null);
  });
}
function Uv() {
  var e = this.parentNode;
  e && e.removeChild(this);
}
function Wv() {
  return this.each(Uv);
}
function Kv() {
  var e = this.cloneNode(!1), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Qv() {
  var e = this.cloneNode(!0), t = this.parentNode;
  return t ? t.insertBefore(e, this.nextSibling) : e;
}
function Jv(e) {
  return this.select(e ? Qv : Kv);
}
function jv(e) {
  return arguments.length ? this.property("__data__", e) : this.node().__data__;
}
function em(e) {
  return function(t) {
    e.call(this, t, this.__data__);
  };
}
function tm(e) {
  return e.trim().split(/^|\s+/).map(function(t) {
    var n = "", o = t.indexOf(".");
    return o >= 0 && (n = t.slice(o + 1), t = t.slice(0, o)), { type: t, name: n };
  });
}
function nm(e) {
  return function() {
    var t = this.__on;
    if (t) {
      for (var n = 0, o = -1, i = t.length, r; n < i; ++n)
        r = t[n], (!e.type || r.type === e.type) && r.name === e.name ? this.removeEventListener(r.type, r.listener, r.options) : t[++o] = r;
      ++o ? t.length = o : delete this.__on;
    }
  };
}
function om(e, t, n) {
  return function() {
    var o = this.__on, i, r = em(t);
    if (o) {
      for (var s = 0, a = o.length; s < a; ++s)
        if ((i = o[s]).type === e.type && i.name === e.name) {
          this.removeEventListener(i.type, i.listener, i.options), this.addEventListener(i.type, i.listener = r, i.options = n), i.value = t;
          return;
        }
    }
    this.addEventListener(e.type, r, n), i = { type: e.type, name: e.name, value: t, listener: r, options: n }, o ? o.push(i) : this.__on = [i];
  };
}
function im(e, t, n) {
  var o = tm(e + ""), i, r = o.length, s;
  if (arguments.length < 2) {
    var a = this.node().__on;
    if (a) {
      for (var l = 0, u = a.length, c; l < u; ++l)
        for (i = 0, c = a[l]; i < r; ++i)
          if ((s = o[i]).type === c.type && s.name === c.name)
            return c.value;
    }
    return;
  }
  for (a = t ? om : nm, i = 0; i < r; ++i) this.each(a(o[i], t, n));
  return this;
}
function Aa(e, t, n) {
  var o = Ca(e), i = o.CustomEvent;
  typeof i == "function" ? i = new i(t, n) : (i = o.document.createEvent("Event"), n ? (i.initEvent(t, n.bubbles, n.cancelable), i.detail = n.detail) : i.initEvent(t, !1, !1)), e.dispatchEvent(i);
}
function rm(e, t) {
  return function() {
    return Aa(this, e, t);
  };
}
function sm(e, t) {
  return function() {
    return Aa(this, e, t.apply(this, arguments));
  };
}
function am(e, t) {
  return this.each((typeof t == "function" ? sm : rm)(e, t));
}
function* lm() {
  for (var e = this._groups, t = 0, n = e.length; t < n; ++t)
    for (var o = e[t], i = 0, r = o.length, s; i < r; ++i)
      (s = o[i]) && (yield s);
}
var Da = [null];
function ze(e, t) {
  this._groups = e, this._parents = t;
}
function wn() {
  return new ze([[document.documentElement]], Da);
}
function um() {
  return this;
}
ze.prototype = wn.prototype = {
  constructor: ze,
  select: Pp,
  selectAll: Vp,
  selectChild: Yp,
  selectChildren: Zp,
  filter: Up,
  data: ev,
  enter: Wp,
  exit: nv,
  join: ov,
  merge: iv,
  selection: um,
  order: rv,
  sort: sv,
  call: lv,
  nodes: uv,
  node: cv,
  size: dv,
  empty: fv,
  each: hv,
  attr: _v,
  style: Ev,
  property: Mv,
  classed: Av,
  text: Ov,
  html: Hv,
  raise: Fv,
  lower: Xv,
  append: Gv,
  insert: Zv,
  remove: Wv,
  clone: Jv,
  datum: jv,
  on: im,
  dispatch: am,
  [Symbol.iterator]: lm
};
function dt(e) {
  return typeof e == "string" ? new ze([[document.querySelector(e)]], [document.documentElement]) : new ze([[e]], Da);
}
function cm(e) {
  let t;
  for (; t = e.sourceEvent; ) e = t;
  return e;
}
function lt(e, t) {
  if (e = cm(e), t === void 0 && (t = e.currentTarget), t) {
    var n = t.ownerSVGElement || t;
    if (n.createSVGPoint) {
      var o = n.createSVGPoint();
      return o.x = e.clientX, o.y = e.clientY, o = o.matrixTransform(t.getScreenCTM().inverse()), [o.x, o.y];
    }
    if (t.getBoundingClientRect) {
      var i = t.getBoundingClientRect();
      return [e.clientX - i.left - t.clientLeft, e.clientY - i.top - t.clientTop];
    }
  }
  return [e.pageX, e.pageY];
}
const ci = { capture: !0, passive: !1 };
function di(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function dm(e) {
  var t = e.document.documentElement, n = dt(e).on("dragstart.drag", di, ci);
  "onselectstart" in t ? n.on("selectstart.drag", di, ci) : (t.__noselect = t.style.MozUserSelect, t.style.MozUserSelect = "none");
}
function fm(e, t) {
  var n = e.document.documentElement, o = dt(e).on("dragstart.drag", null);
  t && (o.on("click.drag", di, ci), setTimeout(function() {
    o.on("click.drag", null);
  }, 0)), "onselectstart" in n ? o.on("selectstart.drag", null) : (n.style.MozUserSelect = n.__noselect, delete n.__noselect);
}
function Pi(e, t, n) {
  e.prototype = t.prototype = n, n.constructor = e;
}
function za(e, t) {
  var n = Object.create(e.prototype);
  for (var o in t) n[o] = t[o];
  return n;
}
function _n() {
}
var fn = 0.7, so = 1 / fn, zt = "\\s*([+-]?\\d+)\\s*", hn = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*", Ge = "\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*", hm = /^#([0-9a-f]{3,8})$/, gm = new RegExp(`^rgb\\(${zt},${zt},${zt}\\)$`), pm = new RegExp(`^rgb\\(${Ge},${Ge},${Ge}\\)$`), vm = new RegExp(`^rgba\\(${zt},${zt},${zt},${hn}\\)$`), mm = new RegExp(`^rgba\\(${Ge},${Ge},${Ge},${hn}\\)$`), ym = new RegExp(`^hsl\\(${hn},${Ge},${Ge}\\)$`), wm = new RegExp(`^hsla\\(${hn},${Ge},${Ge},${hn}\\)$`), Lr = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
Pi(_n, gn, {
  copy(e) {
    return Object.assign(new this.constructor(), this, e);
  },
  displayable() {
    return this.rgb().displayable();
  },
  hex: Fr,
  // Deprecated! Use color.formatHex.
  formatHex: Fr,
  formatHex8: _m,
  formatHsl: $m,
  formatRgb: Yr,
  toString: Yr
});
function Fr() {
  return this.rgb().formatHex();
}
function _m() {
  return this.rgb().formatHex8();
}
function $m() {
  return Pa(this).formatHsl();
}
function Yr() {
  return this.rgb().formatRgb();
}
function gn(e) {
  var t, n;
  return e = (e + "").trim().toLowerCase(), (t = hm.exec(e)) ? (n = t[1].length, t = parseInt(t[1], 16), n === 6 ? Xr(t) : n === 3 ? new Ie(t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, (t & 15) << 4 | t & 15, 1) : n === 8 ? kn(t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, (t & 255) / 255) : n === 4 ? kn(t >> 12 & 15 | t >> 8 & 240, t >> 8 & 15 | t >> 4 & 240, t >> 4 & 15 | t & 240, ((t & 15) << 4 | t & 15) / 255) : null) : (t = gm.exec(e)) ? new Ie(t[1], t[2], t[3], 1) : (t = pm.exec(e)) ? new Ie(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, 1) : (t = vm.exec(e)) ? kn(t[1], t[2], t[3], t[4]) : (t = mm.exec(e)) ? kn(t[1] * 255 / 100, t[2] * 255 / 100, t[3] * 255 / 100, t[4]) : (t = ym.exec(e)) ? Zr(t[1], t[2] / 100, t[3] / 100, 1) : (t = wm.exec(e)) ? Zr(t[1], t[2] / 100, t[3] / 100, t[4]) : Lr.hasOwnProperty(e) ? Xr(Lr[e]) : e === "transparent" ? new Ie(NaN, NaN, NaN, 0) : null;
}
function Xr(e) {
  return new Ie(e >> 16 & 255, e >> 8 & 255, e & 255, 1);
}
function kn(e, t, n, o) {
  return o <= 0 && (e = t = n = NaN), new Ie(e, t, n, o);
}
function bm(e) {
  return e instanceof _n || (e = gn(e)), e ? (e = e.rgb(), new Ie(e.r, e.g, e.b, e.opacity)) : new Ie();
}
function fi(e, t, n, o) {
  return arguments.length === 1 ? bm(e) : new Ie(e, t, n, o ?? 1);
}
function Ie(e, t, n, o) {
  this.r = +e, this.g = +t, this.b = +n, this.opacity = +o;
}
Pi(Ie, fi, za(_n, {
  brighter(e) {
    return e = e == null ? so : Math.pow(so, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fn : Math.pow(fn, e), new Ie(this.r * e, this.g * e, this.b * e, this.opacity);
  },
  rgb() {
    return this;
  },
  clamp() {
    return new Ie(xt(this.r), xt(this.g), xt(this.b), ao(this.opacity));
  },
  displayable() {
    return -0.5 <= this.r && this.r < 255.5 && -0.5 <= this.g && this.g < 255.5 && -0.5 <= this.b && this.b < 255.5 && 0 <= this.opacity && this.opacity <= 1;
  },
  hex: Gr,
  // Deprecated! Use color.formatHex.
  formatHex: Gr,
  formatHex8: xm,
  formatRgb: qr,
  toString: qr
}));
function Gr() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}`;
}
function xm() {
  return `#${_t(this.r)}${_t(this.g)}${_t(this.b)}${_t((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`;
}
function qr() {
  const e = ao(this.opacity);
  return `${e === 1 ? "rgb(" : "rgba("}${xt(this.r)}, ${xt(this.g)}, ${xt(this.b)}${e === 1 ? ")" : `, ${e})`}`;
}
function ao(e) {
  return isNaN(e) ? 1 : Math.max(0, Math.min(1, e));
}
function xt(e) {
  return Math.max(0, Math.min(255, Math.round(e) || 0));
}
function _t(e) {
  return e = xt(e), (e < 16 ? "0" : "") + e.toString(16);
}
function Zr(e, t, n, o) {
  return o <= 0 ? e = t = n = NaN : n <= 0 || n >= 1 ? e = t = NaN : t <= 0 && (e = NaN), new Be(e, t, n, o);
}
function Pa(e) {
  if (e instanceof Be) return new Be(e.h, e.s, e.l, e.opacity);
  if (e instanceof _n || (e = gn(e)), !e) return new Be();
  if (e instanceof Be) return e;
  e = e.rgb();
  var t = e.r / 255, n = e.g / 255, o = e.b / 255, i = Math.min(t, n, o), r = Math.max(t, n, o), s = NaN, a = r - i, l = (r + i) / 2;
  return a ? (t === r ? s = (n - o) / a + (n < o) * 6 : n === r ? s = (o - t) / a + 2 : s = (t - n) / a + 4, a /= l < 0.5 ? r + i : 2 - r - i, s *= 60) : a = l > 0 && l < 1 ? 0 : s, new Be(s, a, l, e.opacity);
}
function Em(e, t, n, o) {
  return arguments.length === 1 ? Pa(e) : new Be(e, t, n, o ?? 1);
}
function Be(e, t, n, o) {
  this.h = +e, this.s = +t, this.l = +n, this.opacity = +o;
}
Pi(Be, Em, za(_n, {
  brighter(e) {
    return e = e == null ? so : Math.pow(so, e), new Be(this.h, this.s, this.l * e, this.opacity);
  },
  darker(e) {
    return e = e == null ? fn : Math.pow(fn, e), new Be(this.h, this.s, this.l * e, this.opacity);
  },
  rgb() {
    var e = this.h % 360 + (this.h < 0) * 360, t = isNaN(e) || isNaN(this.s) ? 0 : this.s, n = this.l, o = n + (n < 0.5 ? n : 1 - n) * t, i = 2 * n - o;
    return new Ie(
      Yo(e >= 240 ? e - 240 : e + 120, i, o),
      Yo(e, i, o),
      Yo(e < 120 ? e + 240 : e - 120, i, o),
      this.opacity
    );
  },
  clamp() {
    return new Be(Ur(this.h), Tn(this.s), Tn(this.l), ao(this.opacity));
  },
  displayable() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && 0 <= this.l && this.l <= 1 && 0 <= this.opacity && this.opacity <= 1;
  },
  formatHsl() {
    const e = ao(this.opacity);
    return `${e === 1 ? "hsl(" : "hsla("}${Ur(this.h)}, ${Tn(this.s) * 100}%, ${Tn(this.l) * 100}%${e === 1 ? ")" : `, ${e})`}`;
  }
}));
function Ur(e) {
  return e = (e || 0) % 360, e < 0 ? e + 360 : e;
}
function Tn(e) {
  return Math.max(0, Math.min(1, e || 0));
}
function Yo(e, t, n) {
  return (e < 60 ? t + (n - t) * e / 60 : e < 180 ? n : e < 240 ? t + (n - t) * (240 - e) / 60 : t) * 255;
}
const Oa = (e) => () => e;
function Sm(e, t) {
  return function(n) {
    return e + n * t;
  };
}
function Nm(e, t, n) {
  return e = Math.pow(e, n), t = Math.pow(t, n) - e, n = 1 / n, function(o) {
    return Math.pow(e + o * t, n);
  };
}
function Cm(e) {
  return (e = +e) == 1 ? Ba : function(t, n) {
    return n - t ? Nm(t, n, e) : Oa(isNaN(t) ? n : t);
  };
}
function Ba(e, t) {
  var n = t - e;
  return n ? Sm(e, n) : Oa(isNaN(e) ? t : e);
}
const Wr = (function e(t) {
  var n = Cm(t);
  function o(i, r) {
    var s = n((i = fi(i)).r, (r = fi(r)).r), a = n(i.g, r.g), l = n(i.b, r.b), u = Ba(i.opacity, r.opacity);
    return function(c) {
      return i.r = s(c), i.g = a(c), i.b = l(c), i.opacity = u(c), i + "";
    };
  }
  return o.gamma = e, o;
})(1);
function ct(e, t) {
  return e = +e, t = +t, function(n) {
    return e * (1 - n) + t * n;
  };
}
var hi = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, Xo = new RegExp(hi.source, "g");
function Mm(e) {
  return function() {
    return e;
  };
}
function km(e) {
  return function(t) {
    return e(t) + "";
  };
}
function Tm(e, t) {
  var n = hi.lastIndex = Xo.lastIndex = 0, o, i, r, s = -1, a = [], l = [];
  for (e = e + "", t = t + ""; (o = hi.exec(e)) && (i = Xo.exec(t)); )
    (r = i.index) > n && (r = t.slice(n, r), a[s] ? a[s] += r : a[++s] = r), (o = o[0]) === (i = i[0]) ? a[s] ? a[s] += i : a[++s] = i : (a[++s] = null, l.push({ i: s, x: ct(o, i) })), n = Xo.lastIndex;
  return n < t.length && (r = t.slice(n), a[s] ? a[s] += r : a[++s] = r), a.length < 2 ? l[0] ? km(l[0].x) : Mm(t) : (t = l.length, function(u) {
    for (var c = 0, d; c < t; ++c) a[(d = l[c]).i] = d.x(u);
    return a.join("");
  });
}
var Kr = 180 / Math.PI, gi = {
  translateX: 0,
  translateY: 0,
  rotate: 0,
  skewX: 0,
  scaleX: 1,
  scaleY: 1
};
function Ra(e, t, n, o, i, r) {
  var s, a, l;
  return (s = Math.sqrt(e * e + t * t)) && (e /= s, t /= s), (l = e * n + t * o) && (n -= e * l, o -= t * l), (a = Math.sqrt(n * n + o * o)) && (n /= a, o /= a, l /= a), e * o < t * n && (e = -e, t = -t, l = -l, s = -s), {
    translateX: i,
    translateY: r,
    rotate: Math.atan2(t, e) * Kr,
    skewX: Math.atan(l) * Kr,
    scaleX: s,
    scaleY: a
  };
}
var In;
function Im(e) {
  const t = new (typeof DOMMatrix == "function" ? DOMMatrix : WebKitCSSMatrix)(e + "");
  return t.isIdentity ? gi : Ra(t.a, t.b, t.c, t.d, t.e, t.f);
}
function Am(e) {
  return e == null || (In || (In = document.createElementNS("http://www.w3.org/2000/svg", "g")), In.setAttribute("transform", e), !(e = In.transform.baseVal.consolidate())) ? gi : (e = e.matrix, Ra(e.a, e.b, e.c, e.d, e.e, e.f));
}
function Va(e, t, n, o) {
  function i(u) {
    return u.length ? u.pop() + " " : "";
  }
  function r(u, c, d, h, g, b) {
    if (u !== d || c !== h) {
      var $ = g.push("translate(", null, t, null, n);
      b.push({ i: $ - 4, x: ct(u, d) }, { i: $ - 2, x: ct(c, h) });
    } else (d || h) && g.push("translate(" + d + t + h + n);
  }
  function s(u, c, d, h) {
    u !== c ? (u - c > 180 ? c += 360 : c - u > 180 && (u += 360), h.push({ i: d.push(i(d) + "rotate(", null, o) - 2, x: ct(u, c) })) : c && d.push(i(d) + "rotate(" + c + o);
  }
  function a(u, c, d, h) {
    u !== c ? h.push({ i: d.push(i(d) + "skewX(", null, o) - 2, x: ct(u, c) }) : c && d.push(i(d) + "skewX(" + c + o);
  }
  function l(u, c, d, h, g, b) {
    if (u !== d || c !== h) {
      var $ = g.push(i(g) + "scale(", null, ",", null, ")");
      b.push({ i: $ - 4, x: ct(u, d) }, { i: $ - 2, x: ct(c, h) });
    } else (d !== 1 || h !== 1) && g.push(i(g) + "scale(" + d + "," + h + ")");
  }
  return function(u, c) {
    var d = [], h = [];
    return u = e(u), c = e(c), r(u.translateX, u.translateY, c.translateX, c.translateY, d, h), s(u.rotate, c.rotate, d, h), a(u.skewX, c.skewX, d, h), l(u.scaleX, u.scaleY, c.scaleX, c.scaleY, d, h), u = c = null, function(g) {
      for (var b = -1, $ = h.length, S; ++b < $; ) d[(S = h[b]).i] = S.x(g);
      return d.join("");
    };
  };
}
var Dm = Va(Im, "px, ", "px)", "deg)"), zm = Va(Am, ", ", ")", ")"), Pm = 1e-12;
function Qr(e) {
  return ((e = Math.exp(e)) + 1 / e) / 2;
}
function Om(e) {
  return ((e = Math.exp(e)) - 1 / e) / 2;
}
function Bm(e) {
  return ((e = Math.exp(2 * e)) - 1) / (e + 1);
}
const Rm = (function e(t, n, o) {
  function i(r, s) {
    var a = r[0], l = r[1], u = r[2], c = s[0], d = s[1], h = s[2], g = c - a, b = d - l, $ = g * g + b * b, S, _;
    if ($ < Pm)
      _ = Math.log(h / u) / t, S = function(B) {
        return [
          a + B * g,
          l + B * b,
          u * Math.exp(t * B * _)
        ];
      };
    else {
      var I = Math.sqrt($), w = (h * h - u * u + o * $) / (2 * u * n * I), k = (h * h - u * u - o * $) / (2 * h * n * I), O = Math.log(Math.sqrt(w * w + 1) - w), H = Math.log(Math.sqrt(k * k + 1) - k);
      _ = (H - O) / t, S = function(B) {
        var R = B * _, Q = Qr(O), Y = u / (n * I) * (Q * Bm(t * R + O) - Om(O));
        return [
          a + Y * g,
          l + Y * b,
          u * Q / Qr(t * R + O)
        ];
      };
    }
    return S.duration = _ * 1e3 * t / Math.SQRT2, S;
  }
  return i.rho = function(r) {
    var s = Math.max(1e-3, +r), a = s * s, l = a * a;
    return e(s, a, l);
  }, i;
})(Math.SQRT2, 2, 4);
var Ht = 0, Qt = 0, Gt = 0, Ha = 1e3, lo, Jt, uo = 0, Mt = 0, Co = 0, pn = typeof performance == "object" && performance.now ? performance : Date, La = typeof window == "object" && window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : function(e) {
  setTimeout(e, 17);
};
function Oi() {
  return Mt || (La(Vm), Mt = pn.now() + Co);
}
function Vm() {
  Mt = 0;
}
function co() {
  this._call = this._time = this._next = null;
}
co.prototype = Fa.prototype = {
  constructor: co,
  restart: function(e, t, n) {
    if (typeof e != "function") throw new TypeError("callback is not a function");
    n = (n == null ? Oi() : +n) + (t == null ? 0 : +t), !this._next && Jt !== this && (Jt ? Jt._next = this : lo = this, Jt = this), this._call = e, this._time = n, pi();
  },
  stop: function() {
    this._call && (this._call = null, this._time = 1 / 0, pi());
  }
};
function Fa(e, t, n) {
  var o = new co();
  return o.restart(e, t, n), o;
}
function Hm() {
  Oi(), ++Ht;
  for (var e = lo, t; e; )
    (t = Mt - e._time) >= 0 && e._call.call(void 0, t), e = e._next;
  --Ht;
}
function Jr() {
  Mt = (uo = pn.now()) + Co, Ht = Qt = 0;
  try {
    Hm();
  } finally {
    Ht = 0, Fm(), Mt = 0;
  }
}
function Lm() {
  var e = pn.now(), t = e - uo;
  t > Ha && (Co -= t, uo = e);
}
function Fm() {
  for (var e, t = lo, n, o = 1 / 0; t; )
    t._call ? (o > t._time && (o = t._time), e = t, t = t._next) : (n = t._next, t._next = null, t = e ? e._next = n : lo = n);
  Jt = e, pi(o);
}
function pi(e) {
  if (!Ht) {
    Qt && (Qt = clearTimeout(Qt));
    var t = e - Mt;
    t > 24 ? (e < 1 / 0 && (Qt = setTimeout(Jr, e - pn.now() - Co)), Gt && (Gt = clearInterval(Gt))) : (Gt || (uo = pn.now(), Gt = setInterval(Lm, Ha)), Ht = 1, La(Jr));
  }
}
function jr(e, t, n) {
  var o = new co();
  return t = t == null ? 0 : +t, o.restart((i) => {
    o.stop(), e(i + t);
  }, t, n), o;
}
var Ym = Ai("start", "end", "cancel", "interrupt"), Xm = [], Ya = 0, es = 1, vi = 2, Ln = 3, ts = 4, mi = 5, Fn = 6;
function Mo(e, t, n, o, i, r) {
  var s = e.__transition;
  if (!s) e.__transition = {};
  else if (n in s) return;
  Gm(e, n, {
    name: t,
    index: o,
    // For context during callback.
    group: i,
    // For context during callback.
    on: Ym,
    tween: Xm,
    time: r.time,
    delay: r.delay,
    duration: r.duration,
    ease: r.ease,
    timer: null,
    state: Ya
  });
}
function Bi(e, t) {
  var n = He(e, t);
  if (n.state > Ya) throw new Error("too late; already scheduled");
  return n;
}
function Ze(e, t) {
  var n = He(e, t);
  if (n.state > Ln) throw new Error("too late; already running");
  return n;
}
function He(e, t) {
  var n = e.__transition;
  if (!n || !(n = n[t])) throw new Error("transition not found");
  return n;
}
function Gm(e, t, n) {
  var o = e.__transition, i;
  o[t] = n, n.timer = Fa(r, 0, n.time);
  function r(u) {
    n.state = es, n.timer.restart(s, n.delay, n.time), n.delay <= u && s(u - n.delay);
  }
  function s(u) {
    var c, d, h, g;
    if (n.state !== es) return l();
    for (c in o)
      if (g = o[c], g.name === n.name) {
        if (g.state === Ln) return jr(s);
        g.state === ts ? (g.state = Fn, g.timer.stop(), g.on.call("interrupt", e, e.__data__, g.index, g.group), delete o[c]) : +c < t && (g.state = Fn, g.timer.stop(), g.on.call("cancel", e, e.__data__, g.index, g.group), delete o[c]);
      }
    if (jr(function() {
      n.state === Ln && (n.state = ts, n.timer.restart(a, n.delay, n.time), a(u));
    }), n.state = vi, n.on.call("start", e, e.__data__, n.index, n.group), n.state === vi) {
      for (n.state = Ln, i = new Array(h = n.tween.length), c = 0, d = -1; c < h; ++c)
        (g = n.tween[c].value.call(e, e.__data__, n.index, n.group)) && (i[++d] = g);
      i.length = d + 1;
    }
  }
  function a(u) {
    for (var c = u < n.duration ? n.ease.call(null, u / n.duration) : (n.timer.restart(l), n.state = mi, 1), d = -1, h = i.length; ++d < h; )
      i[d].call(e, c);
    n.state === mi && (n.on.call("end", e, e.__data__, n.index, n.group), l());
  }
  function l() {
    n.state = Fn, n.timer.stop(), delete o[t];
    for (var u in o) return;
    delete e.__transition;
  }
}
function Yn(e, t) {
  var n = e.__transition, o, i, r = !0, s;
  if (n) {
    t = t == null ? null : t + "";
    for (s in n) {
      if ((o = n[s]).name !== t) {
        r = !1;
        continue;
      }
      i = o.state > vi && o.state < mi, o.state = Fn, o.timer.stop(), o.on.call(i ? "interrupt" : "cancel", e, e.__data__, o.index, o.group), delete n[s];
    }
    r && delete e.__transition;
  }
}
function qm(e) {
  return this.each(function() {
    Yn(this, e);
  });
}
function Zm(e, t) {
  var n, o;
  return function() {
    var i = Ze(this, e), r = i.tween;
    if (r !== n) {
      o = n = r;
      for (var s = 0, a = o.length; s < a; ++s)
        if (o[s].name === t) {
          o = o.slice(), o.splice(s, 1);
          break;
        }
    }
    i.tween = o;
  };
}
function Um(e, t, n) {
  var o, i;
  if (typeof n != "function") throw new Error();
  return function() {
    var r = Ze(this, e), s = r.tween;
    if (s !== o) {
      i = (o = s).slice();
      for (var a = { name: t, value: n }, l = 0, u = i.length; l < u; ++l)
        if (i[l].name === t) {
          i[l] = a;
          break;
        }
      l === u && i.push(a);
    }
    r.tween = i;
  };
}
function Wm(e, t) {
  var n = this._id;
  if (e += "", arguments.length < 2) {
    for (var o = He(this.node(), n).tween, i = 0, r = o.length, s; i < r; ++i)
      if ((s = o[i]).name === e)
        return s.value;
    return null;
  }
  return this.each((t == null ? Zm : Um)(n, e, t));
}
function Ri(e, t, n) {
  var o = e._id;
  return e.each(function() {
    var i = Ze(this, o);
    (i.value || (i.value = {}))[t] = n.apply(this, arguments);
  }), function(i) {
    return He(i, o).value[t];
  };
}
function Xa(e, t) {
  var n;
  return (typeof t == "number" ? ct : t instanceof gn ? Wr : (n = gn(t)) ? (t = n, Wr) : Tm)(e, t);
}
function Km(e) {
  return function() {
    this.removeAttribute(e);
  };
}
function Qm(e) {
  return function() {
    this.removeAttributeNS(e.space, e.local);
  };
}
function Jm(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var s = this.getAttribute(e);
    return s === i ? null : s === o ? r : r = t(o = s, n);
  };
}
function jm(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var s = this.getAttributeNS(e.space, e.local);
    return s === i ? null : s === o ? r : r = t(o = s, n);
  };
}
function e0(e, t, n) {
  var o, i, r;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttribute(e) : (s = this.getAttribute(e), l = a + "", s === l ? null : s === o && l === i ? r : (i = l, r = t(o = s, a)));
  };
}
function t0(e, t, n) {
  var o, i, r;
  return function() {
    var s, a = n(this), l;
    return a == null ? void this.removeAttributeNS(e.space, e.local) : (s = this.getAttributeNS(e.space, e.local), l = a + "", s === l ? null : s === o && l === i ? r : (i = l, r = t(o = s, a)));
  };
}
function n0(e, t) {
  var n = No(e), o = n === "transform" ? zm : Xa;
  return this.attrTween(e, typeof t == "function" ? (n.local ? t0 : e0)(n, o, Ri(this, "attr." + e, t)) : t == null ? (n.local ? Qm : Km)(n) : (n.local ? jm : Jm)(n, o, t));
}
function o0(e, t) {
  return function(n) {
    this.setAttribute(e, t.call(this, n));
  };
}
function i0(e, t) {
  return function(n) {
    this.setAttributeNS(e.space, e.local, t.call(this, n));
  };
}
function r0(e, t) {
  var n, o;
  function i() {
    var r = t.apply(this, arguments);
    return r !== o && (n = (o = r) && i0(e, r)), n;
  }
  return i._value = t, i;
}
function s0(e, t) {
  var n, o;
  function i() {
    var r = t.apply(this, arguments);
    return r !== o && (n = (o = r) && o0(e, r)), n;
  }
  return i._value = t, i;
}
function a0(e, t) {
  var n = "attr." + e;
  if (arguments.length < 2) return (n = this.tween(n)) && n._value;
  if (t == null) return this.tween(n, null);
  if (typeof t != "function") throw new Error();
  var o = No(e);
  return this.tween(n, (o.local ? r0 : s0)(o, t));
}
function l0(e, t) {
  return function() {
    Bi(this, e).delay = +t.apply(this, arguments);
  };
}
function u0(e, t) {
  return t = +t, function() {
    Bi(this, e).delay = t;
  };
}
function c0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? l0 : u0)(t, e)) : He(this.node(), t).delay;
}
function d0(e, t) {
  return function() {
    Ze(this, e).duration = +t.apply(this, arguments);
  };
}
function f0(e, t) {
  return t = +t, function() {
    Ze(this, e).duration = t;
  };
}
function h0(e) {
  var t = this._id;
  return arguments.length ? this.each((typeof e == "function" ? d0 : f0)(t, e)) : He(this.node(), t).duration;
}
function g0(e, t) {
  if (typeof t != "function") throw new Error();
  return function() {
    Ze(this, e).ease = t;
  };
}
function p0(e) {
  var t = this._id;
  return arguments.length ? this.each(g0(t, e)) : He(this.node(), t).ease;
}
function v0(e, t) {
  return function() {
    var n = t.apply(this, arguments);
    if (typeof n != "function") throw new Error();
    Ze(this, e).ease = n;
  };
}
function m0(e) {
  if (typeof e != "function") throw new Error();
  return this.each(v0(this._id, e));
}
function y0(e) {
  typeof e != "function" && (e = Ea(e));
  for (var t = this._groups, n = t.length, o = new Array(n), i = 0; i < n; ++i)
    for (var r = t[i], s = r.length, a = o[i] = [], l, u = 0; u < s; ++u)
      (l = r[u]) && e.call(l, l.__data__, u, r) && a.push(l);
  return new it(o, this._parents, this._name, this._id);
}
function w0(e) {
  if (e._id !== this._id) throw new Error();
  for (var t = this._groups, n = e._groups, o = t.length, i = n.length, r = Math.min(o, i), s = new Array(o), a = 0; a < r; ++a)
    for (var l = t[a], u = n[a], c = l.length, d = s[a] = new Array(c), h, g = 0; g < c; ++g)
      (h = l[g] || u[g]) && (d[g] = h);
  for (; a < o; ++a)
    s[a] = t[a];
  return new it(s, this._parents, this._name, this._id);
}
function _0(e) {
  return (e + "").trim().split(/^|\s+/).every(function(t) {
    var n = t.indexOf(".");
    return n >= 0 && (t = t.slice(0, n)), !t || t === "start";
  });
}
function $0(e, t, n) {
  var o, i, r = _0(t) ? Bi : Ze;
  return function() {
    var s = r(this, e), a = s.on;
    a !== o && (i = (o = a).copy()).on(t, n), s.on = i;
  };
}
function b0(e, t) {
  var n = this._id;
  return arguments.length < 2 ? He(this.node(), n).on.on(e) : this.each($0(n, e, t));
}
function x0(e) {
  return function() {
    var t = this.parentNode;
    for (var n in this.__transition) if (+n !== e) return;
    t && t.removeChild(this);
  };
}
function E0() {
  return this.on("end.remove", x0(this._id));
}
function S0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = Di(e));
  for (var o = this._groups, i = o.length, r = new Array(i), s = 0; s < i; ++s)
    for (var a = o[s], l = a.length, u = r[s] = new Array(l), c, d, h = 0; h < l; ++h)
      (c = a[h]) && (d = e.call(c, c.__data__, h, a)) && ("__data__" in c && (d.__data__ = c.__data__), u[h] = d, Mo(u[h], t, n, h, u, He(c, n)));
  return new it(r, this._parents, t, n);
}
function N0(e) {
  var t = this._name, n = this._id;
  typeof e != "function" && (e = xa(e));
  for (var o = this._groups, i = o.length, r = [], s = [], a = 0; a < i; ++a)
    for (var l = o[a], u = l.length, c, d = 0; d < u; ++d)
      if (c = l[d]) {
        for (var h = e.call(c, c.__data__, d, l), g, b = He(c, n), $ = 0, S = h.length; $ < S; ++$)
          (g = h[$]) && Mo(g, t, n, $, h, b);
        r.push(h), s.push(c);
      }
  return new it(r, s, t, n);
}
var C0 = wn.prototype.constructor;
function M0() {
  return new C0(this._groups, this._parents);
}
function k0(e, t) {
  var n, o, i;
  return function() {
    var r = Vt(this, e), s = (this.style.removeProperty(e), Vt(this, e));
    return r === s ? null : r === n && s === o ? i : i = t(n = r, o = s);
  };
}
function Ga(e) {
  return function() {
    this.style.removeProperty(e);
  };
}
function T0(e, t, n) {
  var o, i = n + "", r;
  return function() {
    var s = Vt(this, e);
    return s === i ? null : s === o ? r : r = t(o = s, n);
  };
}
function I0(e, t, n) {
  var o, i, r;
  return function() {
    var s = Vt(this, e), a = n(this), l = a + "";
    return a == null && (l = a = (this.style.removeProperty(e), Vt(this, e))), s === l ? null : s === o && l === i ? r : (i = l, r = t(o = s, a));
  };
}
function A0(e, t) {
  var n, o, i, r = "style." + t, s = "end." + r, a;
  return function() {
    var l = Ze(this, e), u = l.on, c = l.value[r] == null ? a || (a = Ga(t)) : void 0;
    (u !== n || i !== c) && (o = (n = u).copy()).on(s, i = c), l.on = o;
  };
}
function D0(e, t, n) {
  var o = (e += "") == "transform" ? Dm : Xa;
  return t == null ? this.styleTween(e, k0(e, o)).on("end.style." + e, Ga(e)) : typeof t == "function" ? this.styleTween(e, I0(e, o, Ri(this, "style." + e, t))).each(A0(this._id, e)) : this.styleTween(e, T0(e, o, t), n).on("end.style." + e, null);
}
function z0(e, t, n) {
  return function(o) {
    this.style.setProperty(e, t.call(this, o), n);
  };
}
function P0(e, t, n) {
  var o, i;
  function r() {
    var s = t.apply(this, arguments);
    return s !== i && (o = (i = s) && z0(e, s, n)), o;
  }
  return r._value = t, r;
}
function O0(e, t, n) {
  var o = "style." + (e += "");
  if (arguments.length < 2) return (o = this.tween(o)) && o._value;
  if (t == null) return this.tween(o, null);
  if (typeof t != "function") throw new Error();
  return this.tween(o, P0(e, t, n ?? ""));
}
function B0(e) {
  return function() {
    this.textContent = e;
  };
}
function R0(e) {
  return function() {
    var t = e(this);
    this.textContent = t ?? "";
  };
}
function V0(e) {
  return this.tween("text", typeof e == "function" ? R0(Ri(this, "text", e)) : B0(e == null ? "" : e + ""));
}
function H0(e) {
  return function(t) {
    this.textContent = e.call(this, t);
  };
}
function L0(e) {
  var t, n;
  function o() {
    var i = e.apply(this, arguments);
    return i !== n && (t = (n = i) && H0(i)), t;
  }
  return o._value = e, o;
}
function F0(e) {
  var t = "text";
  if (arguments.length < 1) return (t = this.tween(t)) && t._value;
  if (e == null) return this.tween(t, null);
  if (typeof e != "function") throw new Error();
  return this.tween(t, L0(e));
}
function Y0() {
  for (var e = this._name, t = this._id, n = qa(), o = this._groups, i = o.length, r = 0; r < i; ++r)
    for (var s = o[r], a = s.length, l, u = 0; u < a; ++u)
      if (l = s[u]) {
        var c = He(l, t);
        Mo(l, e, n, u, s, {
          time: c.time + c.delay + c.duration,
          delay: 0,
          duration: c.duration,
          ease: c.ease
        });
      }
  return new it(o, this._parents, e, n);
}
function X0() {
  var e, t, n = this, o = n._id, i = n.size();
  return new Promise(function(r, s) {
    var a = { value: s }, l = { value: function() {
      --i === 0 && r();
    } };
    n.each(function() {
      var u = Ze(this, o), c = u.on;
      c !== e && (t = (e = c).copy(), t._.cancel.push(a), t._.interrupt.push(a), t._.end.push(l)), u.on = t;
    }), i === 0 && r();
  });
}
var G0 = 0;
function it(e, t, n, o) {
  this._groups = e, this._parents = t, this._name = n, this._id = o;
}
function qa() {
  return ++G0;
}
var We = wn.prototype;
it.prototype = {
  constructor: it,
  select: S0,
  selectAll: N0,
  selectChild: We.selectChild,
  selectChildren: We.selectChildren,
  filter: y0,
  merge: w0,
  selection: M0,
  transition: Y0,
  call: We.call,
  nodes: We.nodes,
  node: We.node,
  size: We.size,
  empty: We.empty,
  each: We.each,
  on: b0,
  attr: n0,
  attrTween: a0,
  style: D0,
  styleTween: O0,
  text: V0,
  textTween: F0,
  remove: E0,
  tween: Wm,
  delay: c0,
  duration: h0,
  ease: p0,
  easeVarying: m0,
  end: X0,
  [Symbol.iterator]: We[Symbol.iterator]
};
function q0(e) {
  return ((e *= 2) <= 1 ? e * e * e : (e -= 2) * e * e + 2) / 2;
}
var Z0 = {
  time: null,
  // Set on use.
  delay: 0,
  duration: 250,
  ease: q0
};
function U0(e, t) {
  for (var n; !(n = e.__transition) || !(n = n[t]); )
    if (!(e = e.parentNode))
      throw new Error(`transition ${t} not found`);
  return n;
}
function W0(e) {
  var t, n;
  e instanceof it ? (t = e._id, e = e._name) : (t = qa(), (n = Z0).time = Oi(), e = e == null ? null : e + "");
  for (var o = this._groups, i = o.length, r = 0; r < i; ++r)
    for (var s = o[r], a = s.length, l, u = 0; u < a; ++u)
      (l = s[u]) && Mo(l, e, t, u, s, n || U0(l, t));
  return new it(o, this._parents, e, t);
}
wn.prototype.interrupt = qm;
wn.prototype.transition = W0;
const An = (e) => () => e;
function K0(e, {
  sourceEvent: t,
  target: n,
  transform: o,
  dispatch: i
}) {
  Object.defineProperties(this, {
    type: { value: e, enumerable: !0, configurable: !0 },
    sourceEvent: { value: t, enumerable: !0, configurable: !0 },
    target: { value: n, enumerable: !0, configurable: !0 },
    transform: { value: o, enumerable: !0, configurable: !0 },
    _: { value: i }
  });
}
function et(e, t, n) {
  this.k = e, this.x = t, this.y = n;
}
et.prototype = {
  constructor: et,
  scale: function(e) {
    return e === 1 ? this : new et(this.k * e, this.x, this.y);
  },
  translate: function(e, t) {
    return e === 0 & t === 0 ? this : new et(this.k, this.x + this.k * e, this.y + this.k * t);
  },
  apply: function(e) {
    return [e[0] * this.k + this.x, e[1] * this.k + this.y];
  },
  applyX: function(e) {
    return e * this.k + this.x;
  },
  applyY: function(e) {
    return e * this.k + this.y;
  },
  invert: function(e) {
    return [(e[0] - this.x) / this.k, (e[1] - this.y) / this.k];
  },
  invertX: function(e) {
    return (e - this.x) / this.k;
  },
  invertY: function(e) {
    return (e - this.y) / this.k;
  },
  rescaleX: function(e) {
    return e.copy().domain(e.range().map(this.invertX, this).map(e.invert, e));
  },
  rescaleY: function(e) {
    return e.copy().domain(e.range().map(this.invertY, this).map(e.invert, e));
  },
  toString: function() {
    return "translate(" + this.x + "," + this.y + ") scale(" + this.k + ")";
  }
};
var Vi = new et(1, 0, 0);
et.prototype;
function Go(e) {
  e.stopImmediatePropagation();
}
function qt(e) {
  e.preventDefault(), e.stopImmediatePropagation();
}
function Q0(e) {
  return (!e.ctrlKey || e.type === "wheel") && !e.button;
}
function J0() {
  var e = this;
  return e instanceof SVGElement ? (e = e.ownerSVGElement || e, e.hasAttribute("viewBox") ? (e = e.viewBox.baseVal, [[e.x, e.y], [e.x + e.width, e.y + e.height]]) : [[0, 0], [e.width.baseVal.value, e.height.baseVal.value]]) : [[0, 0], [e.clientWidth, e.clientHeight]];
}
function ns() {
  return this.__zoom || Vi;
}
function j0(e) {
  return -e.deltaY * (e.deltaMode === 1 ? 0.05 : e.deltaMode ? 1 : 2e-3) * (e.ctrlKey ? 10 : 1);
}
function e1() {
  return navigator.maxTouchPoints || "ontouchstart" in this;
}
function t1(e, t, n) {
  var o = e.invertX(t[0][0]) - n[0][0], i = e.invertX(t[1][0]) - n[1][0], r = e.invertY(t[0][1]) - n[0][1], s = e.invertY(t[1][1]) - n[1][1];
  return e.translate(
    i > o ? (o + i) / 2 : Math.min(0, o) || Math.max(0, i),
    s > r ? (r + s) / 2 : Math.min(0, r) || Math.max(0, s)
  );
}
function n1() {
  var e = Q0, t = J0, n = t1, o = j0, i = e1, r = [0, 1 / 0], s = [[-1 / 0, -1 / 0], [1 / 0, 1 / 0]], a = 250, l = Rm, u = Ai("start", "zoom", "end"), c, d, h, g = 500, b = 150, $ = 0, S = 10;
  function _(f) {
    f.property("__zoom", ns).on("wheel.zoom", R, { passive: !1 }).on("mousedown.zoom", Q).on("dblclick.zoom", Y).filter(i).on("touchstart.zoom", V).on("touchmove.zoom", N).on("touchend.zoom touchcancel.zoom", W).style("-webkit-tap-highlight-color", "rgba(0,0,0,0)");
  }
  _.transform = function(f, E, v, C) {
    var x = f.selection ? f.selection() : f;
    x.property("__zoom", ns), f !== x ? O(f, E, v, C) : x.interrupt().each(function() {
      H(this, arguments).event(C).start().zoom(null, typeof E == "function" ? E.apply(this, arguments) : E).end();
    });
  }, _.scaleBy = function(f, E, v, C) {
    _.scaleTo(f, function() {
      var x = this.__zoom.k, A = typeof E == "function" ? E.apply(this, arguments) : E;
      return x * A;
    }, v, C);
  }, _.scaleTo = function(f, E, v, C) {
    _.transform(f, function() {
      var x = t.apply(this, arguments), A = this.__zoom, M = v == null ? k(x) : typeof v == "function" ? v.apply(this, arguments) : v, z = A.invert(M), X = typeof E == "function" ? E.apply(this, arguments) : E;
      return n(w(I(A, X), M, z), x, s);
    }, v, C);
  }, _.translateBy = function(f, E, v, C) {
    _.transform(f, function() {
      return n(this.__zoom.translate(
        typeof E == "function" ? E.apply(this, arguments) : E,
        typeof v == "function" ? v.apply(this, arguments) : v
      ), t.apply(this, arguments), s);
    }, null, C);
  }, _.translateTo = function(f, E, v, C, x) {
    _.transform(f, function() {
      var A = t.apply(this, arguments), M = this.__zoom, z = C == null ? k(A) : typeof C == "function" ? C.apply(this, arguments) : C;
      return n(Vi.translate(z[0], z[1]).scale(M.k).translate(
        typeof E == "function" ? -E.apply(this, arguments) : -E,
        typeof v == "function" ? -v.apply(this, arguments) : -v
      ), A, s);
    }, C, x);
  };
  function I(f, E) {
    return E = Math.max(r[0], Math.min(r[1], E)), E === f.k ? f : new et(E, f.x, f.y);
  }
  function w(f, E, v) {
    var C = E[0] - v[0] * f.k, x = E[1] - v[1] * f.k;
    return C === f.x && x === f.y ? f : new et(f.k, C, x);
  }
  function k(f) {
    return [(+f[0][0] + +f[1][0]) / 2, (+f[0][1] + +f[1][1]) / 2];
  }
  function O(f, E, v, C) {
    f.on("start.zoom", function() {
      H(this, arguments).event(C).start();
    }).on("interrupt.zoom end.zoom", function() {
      H(this, arguments).event(C).end();
    }).tween("zoom", function() {
      var x = this, A = arguments, M = H(x, A).event(C), z = t.apply(x, A), X = v == null ? k(z) : typeof v == "function" ? v.apply(x, A) : v, K = Math.max(z[1][0] - z[0][0], z[1][1] - z[0][1]), P = x.__zoom, G = typeof E == "function" ? E.apply(x, A) : E, L = l(P.invert(X).concat(K / P.k), G.invert(X).concat(K / G.k));
      return function(ne) {
        if (ne === 1) ne = G;
        else {
          var j = L(ne), ae = K / j[2];
          ne = new et(ae, X[0] - j[0] * ae, X[1] - j[1] * ae);
        }
        M.zoom(null, ne);
      };
    });
  }
  function H(f, E, v) {
    return !v && f.__zooming || new B(f, E);
  }
  function B(f, E) {
    this.that = f, this.args = E, this.active = 0, this.sourceEvent = null, this.extent = t.apply(f, E), this.taps = 0;
  }
  B.prototype = {
    event: function(f) {
      return f && (this.sourceEvent = f), this;
    },
    start: function() {
      return ++this.active === 1 && (this.that.__zooming = this, this.emit("start")), this;
    },
    zoom: function(f, E) {
      return this.mouse && f !== "mouse" && (this.mouse[1] = E.invert(this.mouse[0])), this.touch0 && f !== "touch" && (this.touch0[1] = E.invert(this.touch0[0])), this.touch1 && f !== "touch" && (this.touch1[1] = E.invert(this.touch1[0])), this.that.__zoom = E, this.emit("zoom"), this;
    },
    end: function() {
      return --this.active === 0 && (delete this.that.__zooming, this.emit("end")), this;
    },
    emit: function(f) {
      var E = dt(this.that).datum();
      u.call(
        f,
        this.that,
        new K0(f, {
          sourceEvent: this.sourceEvent,
          target: _,
          transform: this.that.__zoom,
          dispatch: u
        }),
        E
      );
    }
  };
  function R(f, ...E) {
    if (!e.apply(this, arguments)) return;
    var v = H(this, E).event(f), C = this.__zoom, x = Math.max(r[0], Math.min(r[1], C.k * Math.pow(2, o.apply(this, arguments)))), A = lt(f);
    if (v.wheel)
      (v.mouse[0][0] !== A[0] || v.mouse[0][1] !== A[1]) && (v.mouse[1] = C.invert(v.mouse[0] = A)), clearTimeout(v.wheel);
    else {
      if (C.k === x) return;
      v.mouse = [A, C.invert(A)], Yn(this), v.start();
    }
    qt(f), v.wheel = setTimeout(M, b), v.zoom("mouse", n(w(I(C, x), v.mouse[0], v.mouse[1]), v.extent, s));
    function M() {
      v.wheel = null, v.end();
    }
  }
  function Q(f, ...E) {
    if (h || !e.apply(this, arguments)) return;
    var v = f.currentTarget, C = H(this, E, !0).event(f), x = dt(f.view).on("mousemove.zoom", X, !0).on("mouseup.zoom", K, !0), A = lt(f, v), M = f.clientX, z = f.clientY;
    dm(f.view), Go(f), C.mouse = [A, this.__zoom.invert(A)], Yn(this), C.start();
    function X(P) {
      if (qt(P), !C.moved) {
        var G = P.clientX - M, L = P.clientY - z;
        C.moved = G * G + L * L > $;
      }
      C.event(P).zoom("mouse", n(w(C.that.__zoom, C.mouse[0] = lt(P, v), C.mouse[1]), C.extent, s));
    }
    function K(P) {
      x.on("mousemove.zoom mouseup.zoom", null), fm(P.view, C.moved), qt(P), C.event(P).end();
    }
  }
  function Y(f, ...E) {
    if (e.apply(this, arguments)) {
      var v = this.__zoom, C = lt(f.changedTouches ? f.changedTouches[0] : f, this), x = v.invert(C), A = v.k * (f.shiftKey ? 0.5 : 2), M = n(w(I(v, A), C, x), t.apply(this, E), s);
      qt(f), a > 0 ? dt(this).transition().duration(a).call(O, M, C, f) : dt(this).call(_.transform, M, C, f);
    }
  }
  function V(f, ...E) {
    if (e.apply(this, arguments)) {
      var v = f.touches, C = v.length, x = H(this, E, f.changedTouches.length === C).event(f), A, M, z, X;
      for (Go(f), M = 0; M < C; ++M)
        z = v[M], X = lt(z, this), X = [X, this.__zoom.invert(X), z.identifier], x.touch0 ? !x.touch1 && x.touch0[2] !== X[2] && (x.touch1 = X, x.taps = 0) : (x.touch0 = X, A = !0, x.taps = 1 + !!c);
      c && (c = clearTimeout(c)), A && (x.taps < 2 && (d = X[0], c = setTimeout(function() {
        c = null;
      }, g)), Yn(this), x.start());
    }
  }
  function N(f, ...E) {
    if (this.__zooming) {
      var v = H(this, E).event(f), C = f.changedTouches, x = C.length, A, M, z, X;
      for (qt(f), A = 0; A < x; ++A)
        M = C[A], z = lt(M, this), v.touch0 && v.touch0[2] === M.identifier ? v.touch0[0] = z : v.touch1 && v.touch1[2] === M.identifier && (v.touch1[0] = z);
      if (M = v.that.__zoom, v.touch1) {
        var K = v.touch0[0], P = v.touch0[1], G = v.touch1[0], L = v.touch1[1], ne = (ne = G[0] - K[0]) * ne + (ne = G[1] - K[1]) * ne, j = (j = L[0] - P[0]) * j + (j = L[1] - P[1]) * j;
        M = I(M, Math.sqrt(ne / j)), z = [(K[0] + G[0]) / 2, (K[1] + G[1]) / 2], X = [(P[0] + L[0]) / 2, (P[1] + L[1]) / 2];
      } else if (v.touch0) z = v.touch0[0], X = v.touch0[1];
      else return;
      v.zoom("touch", n(w(M, z, X), v.extent, s));
    }
  }
  function W(f, ...E) {
    if (this.__zooming) {
      var v = H(this, E).event(f), C = f.changedTouches, x = C.length, A, M;
      for (Go(f), h && clearTimeout(h), h = setTimeout(function() {
        h = null;
      }, g), A = 0; A < x; ++A)
        M = C[A], v.touch0 && v.touch0[2] === M.identifier ? delete v.touch0 : v.touch1 && v.touch1[2] === M.identifier && delete v.touch1;
      if (v.touch1 && !v.touch0 && (v.touch0 = v.touch1, delete v.touch1), v.touch0) v.touch0[1] = this.__zoom.invert(v.touch0[0]);
      else if (v.end(), v.taps === 2 && (M = lt(M, this), Math.hypot(d[0] - M[0], d[1] - M[1]) < S)) {
        var z = dt(this).on("dblclick.zoom");
        z && z.apply(this, arguments);
      }
    }
  }
  return _.wheelDelta = function(f) {
    return arguments.length ? (o = typeof f == "function" ? f : An(+f), _) : o;
  }, _.filter = function(f) {
    return arguments.length ? (e = typeof f == "function" ? f : An(!!f), _) : e;
  }, _.touchable = function(f) {
    return arguments.length ? (i = typeof f == "function" ? f : An(!!f), _) : i;
  }, _.extent = function(f) {
    return arguments.length ? (t = typeof f == "function" ? f : An([[+f[0][0], +f[0][1]], [+f[1][0], +f[1][1]]]), _) : t;
  }, _.scaleExtent = function(f) {
    return arguments.length ? (r[0] = +f[0], r[1] = +f[1], _) : [r[0], r[1]];
  }, _.translateExtent = function(f) {
    return arguments.length ? (s[0][0] = +f[0][0], s[1][0] = +f[1][0], s[0][1] = +f[0][1], s[1][1] = +f[1][1], _) : [[s[0][0], s[0][1]], [s[1][0], s[1][1]]];
  }, _.constrain = function(f) {
    return arguments.length ? (n = f, _) : n;
  }, _.duration = function(f) {
    return arguments.length ? (a = +f, _) : a;
  }, _.interpolate = function(f) {
    return arguments.length ? (l = f, _) : l;
  }, _.on = function() {
    var f = u.on.apply(u, arguments);
    return f === u ? _ : f;
  }, _.clickDistance = function(f) {
    return arguments.length ? ($ = (f = +f) * f, _) : Math.sqrt($);
  }, _.tapDistance = function(f) {
    return arguments.length ? (S = +f, _) : S;
  }, _;
}
const Za = Symbol("MiniMapSlots"), o1 = ["id", "x", "y", "rx", "ry", "width", "height", "fill", "stroke", "stroke-width", "shape-rendering"], i1 = {
  name: "MiniMapNode",
  compatConfig: { MODE: 3 },
  inheritAttrs: !1
}, r1 = /* @__PURE__ */ ve({
  ...i1,
  props: {
    id: {},
    type: {},
    selected: { type: Boolean },
    dragging: { type: Boolean },
    position: {},
    dimensions: {},
    borderRadius: {},
    color: {},
    shapeRendering: {},
    strokeColor: {},
    strokeWidth: {},
    hidden: { type: Boolean }
  },
  emits: ["click", "dblclick", "mouseenter", "mousemove", "mouseleave"],
  setup(e, { emit: t }) {
    const n = e, o = kt(Za), i = wi(), r = pe(() => i.style ?? {});
    function s(d) {
      t("click", d);
    }
    function a(d) {
      t("dblclick", d);
    }
    function l(d) {
      t("mouseenter", d);
    }
    function u(d) {
      t("mousemove", d);
    }
    function c(d) {
      t("mouseleave", d);
    }
    return (d, h) => !d.hidden && d.dimensions.width !== 0 && d.dimensions.height !== 0 ? (U(), se(Ae, { key: 0 }, [
      F(o)[`node-${n.type}`] ? (U(), Se(pt(F(o)[`node-${n.type}`]), fl(qn({ key: 0 }, { ...n, ...d.$attrs })), null, 16)) : (U(), se("rect", qn({
        key: 1,
        id: d.id
      }, d.$attrs, {
        class: ["vue-flow__minimap-node", { selected: d.selected, dragging: d.dragging }],
        x: d.position.x,
        y: d.position.y,
        rx: d.borderRadius,
        ry: d.borderRadius,
        width: d.dimensions.width,
        height: d.dimensions.height,
        fill: d.color || r.value.background || r.value.backgroundColor,
        stroke: d.strokeColor,
        "stroke-width": d.strokeWidth,
        "shape-rendering": d.shapeRendering,
        onClick: s,
        onDblclick: a,
        onMouseenter: l,
        onMousemove: u,
        onMouseleave: c
      }), null, 16, o1))
    ], 64)) : $e("", !0);
  }
}), s1 = ["width", "height", "viewBox", "aria-labelledby"], a1 = ["id"], l1 = ["d", "fill", "stroke", "stroke-width"], u1 = {
  name: "MiniMap",
  compatConfig: { MODE: 3 }
}, c1 = /* @__PURE__ */ ve({
  ...u1,
  props: {
    nodeColor: { type: [String, Function], default: "#e2e2e2" },
    nodeStrokeColor: { type: [String, Function], default: "transparent" },
    nodeClassName: { type: [String, Function] },
    nodeBorderRadius: { default: 5 },
    nodeStrokeWidth: { default: 2 },
    maskColor: { default: "rgb(240, 240, 240, 0.6)" },
    maskStrokeColor: { default: "none" },
    maskStrokeWidth: { default: 1 },
    position: { default: "bottom-right" },
    pannable: { type: Boolean, default: !1 },
    zoomable: { type: Boolean, default: !1 },
    width: {},
    height: {},
    ariaLabel: { default: "Vue Flow mini map" },
    inversePan: { type: Boolean, default: !1 },
    zoomStep: { default: 1 },
    offsetScale: { default: 5 },
    maskBorderRadius: { default: 0 }
  },
  emits: ["click", "nodeClick", "nodeDblclick", "nodeMouseenter", "nodeMousemove", "nodeMouseleave"],
  setup(e, { emit: t }) {
    const n = cs(), o = wi(), i = 200, r = 150, { id: s, edges: a, viewport: l, translateExtent: u, dimensions: c, emits: d, d3Selection: h, d3Zoom: g, getNodesInitialized: b } = we(), $ = _e();
    Et(Za, n);
    const S = pe(() => {
      var x;
      return e.width ?? ((x = o.style) == null ? void 0 : x.width) ?? i;
    }), _ = pe(() => {
      var x;
      return e.height ?? ((x = o.style) == null ? void 0 : x.height) ?? r;
    }), I = typeof window > "u" || window.chrome ? "crispEdges" : "geometricPrecision", w = oe(() => typeof e.nodeColor == "string" ? () => e.nodeColor : e.nodeColor), k = oe(
      () => typeof e.nodeStrokeColor == "string" ? () => e.nodeStrokeColor : e.nodeStrokeColor
    ), O = oe(
      () => typeof e.nodeClassName == "string" ? () => e.nodeClassName : typeof e.nodeClassName == "function" ? e.nodeClassName : () => ""
    ), H = oe(() => Mi(b.value.filter((x) => !x.hidden))), B = oe(() => ({
      x: -l.value.x / l.value.zoom,
      y: -l.value.y / l.value.zoom,
      width: c.value.width / l.value.zoom,
      height: c.value.height / l.value.zoom
    })), R = oe(
      () => b.value && b.value.length ? Xf(H.value, B.value) : B.value
    ), Q = oe(() => {
      const x = R.value.width / S.value, A = R.value.height / _.value;
      return Math.max(x, A);
    }), Y = oe(() => {
      const x = Q.value * S.value, A = Q.value * _.value, M = e.offsetScale * Q.value;
      return {
        offset: M,
        x: R.value.x - (x - R.value.width) / 2 - M,
        y: R.value.y - (A - R.value.height) / 2 - M,
        width: x + M * 2,
        height: A + M * 2
      };
    }), V = oe(() => !Y.value.x || !Y.value.y ? "" : `
    M${Y.value.x - Y.value.offset},${Y.value.y - Y.value.offset}
    h${Y.value.width + Y.value.offset * 2}
    v${Y.value.height + Y.value.offset * 2}
    h${-Y.value.width - Y.value.offset * 2}z
    M${B.value.x + e.maskBorderRadius},${B.value.y}
    h${B.value.width - 2 * e.maskBorderRadius}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 ${e.maskBorderRadius},${e.maskBorderRadius}
    v${B.value.height - 2 * e.maskBorderRadius}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 -${e.maskBorderRadius},${e.maskBorderRadius}
    h${-(B.value.width - 2 * e.maskBorderRadius)}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 -${e.maskBorderRadius},-${e.maskBorderRadius}
    v${-(B.value.height - 2 * e.maskBorderRadius)}
    a${e.maskBorderRadius},${e.maskBorderRadius} 0 0 1 ${e.maskBorderRadius},-${e.maskBorderRadius}z`);
    dl(
      (x) => {
        if ($.value) {
          const A = dt($.value), M = (K) => {
            if (K.sourceEvent.type !== "wheel" || !h.value || !g.value)
              return;
            const P = K.sourceEvent.ctrlKey && dn() ? 10 : 1, G = -K.sourceEvent.deltaY * (K.sourceEvent.deltaMode === 1 ? 0.05 : K.sourceEvent.deltaMode ? 1 : 2e-3) * e.zoomStep, L = l.value.zoom * 2 ** (G * P);
            g.value.scaleTo(h.value, L);
          }, z = (K) => {
            if (K.sourceEvent.type !== "mousemove" || !h.value || !g.value)
              return;
            const P = Q.value * Math.max(1, l.value.zoom) * (e.inversePan ? -1 : 1), G = {
              x: l.value.x - K.sourceEvent.movementX * P,
              y: l.value.y - K.sourceEvent.movementY * P
            }, L = [
              [0, 0],
              [c.value.width, c.value.height]
            ], ne = Vi.translate(G.x, G.y).scale(l.value.zoom), j = g.value.constrain()(ne, L, u.value);
            g.value.transform(h.value, j);
          }, X = n1().wheelDelta((K) => ri(K) * (e.zoomStep / 10)).on("zoom", e.pannable ? z : () => {
          }).on("zoom.wheel", e.zoomable ? M : () => {
          });
          A.call(X), x(() => {
            A.on("zoom", null);
          });
        }
      },
      { flush: "post" }
    );
    function N(x) {
      const [A, M] = lt(x);
      t("click", { event: x, position: { x: A, y: M } });
    }
    function W(x, A) {
      const M = { event: x, node: A, connectedEdges: mt([A], a.value) };
      d.miniMapNodeClick(M), t("nodeClick", M);
    }
    function f(x, A) {
      const M = { event: x, node: A, connectedEdges: mt([A], a.value) };
      d.miniMapNodeDoubleClick(M), t("nodeDblclick", M);
    }
    function E(x, A) {
      const M = { event: x, node: A, connectedEdges: mt([A], a.value) };
      d.miniMapNodeMouseEnter(M), t("nodeMouseenter", M);
    }
    function v(x, A) {
      const M = { event: x, node: A, connectedEdges: mt([A], a.value) };
      d.miniMapNodeMouseMove(M), t("nodeMousemove", M);
    }
    function C(x, A) {
      const M = { event: x, node: A, connectedEdges: mt([A], a.value) };
      d.miniMapNodeMouseLeave(M), t("nodeMouseleave", M);
    }
    return (x, A) => (U(), Se(F(wa), {
      position: x.position,
      class: nt(["vue-flow__minimap", { pannable: x.pannable, zoomable: x.zoomable }])
    }, {
      default: ke(() => [
        (U(), se("svg", {
          ref_key: "el",
          ref: $,
          width: S.value,
          height: _.value,
          viewBox: [Y.value.x, Y.value.y, Y.value.width, Y.value.height].join(" "),
          role: "img",
          "aria-labelledby": `vue-flow__minimap-${F(s)}`,
          onClick: N
        }, [
          x.ariaLabel ? (U(), se("title", {
            key: 0,
            id: `vue-flow__minimap-${F(s)}`
          }, Gn(x.ariaLabel), 9, a1)) : $e("", !0),
          (U(!0), se(Ae, null, fo(F(b), (M) => (U(), Se(r1, {
            id: M.id,
            key: M.id,
            f: "",
            position: M.computedPosition,
            dimensions: M.dimensions,
            selected: M.selected,
            dragging: M.dragging,
            style: Re(M.style),
            class: nt(O.value(M)),
            color: w.value(M),
            "border-radius": x.nodeBorderRadius,
            "stroke-color": k.value(M),
            "stroke-width": x.nodeStrokeWidth,
            "shape-rendering": F(I),
            type: M.type,
            hidden: M.hidden,
            onClick: (z) => W(z, M),
            onDblclick: (z) => f(z, M),
            onMouseenter: (z) => E(z, M),
            onMousemove: (z) => v(z, M),
            onMouseleave: (z) => C(z, M)
          }, null, 8, ["id", "position", "dimensions", "selected", "dragging", "style", "class", "color", "border-radius", "stroke-color", "stroke-width", "shape-rendering", "type", "hidden", "onClick", "onDblclick", "onMouseenter", "onMousemove", "onMouseleave"]))), 128)),
          Ee("path", {
            class: "vue-flow__minimap-mask",
            d: V.value,
            fill: x.maskColor,
            stroke: x.maskStrokeColor,
            "stroke-width": x.maskStrokeWidth,
            "fill-rule": "evenodd"
          }, null, 8, l1)
        ], 8, s1))
      ]),
      _: 1
    }, 8, ["position", "class"]));
  }
}), d1 = {
  key: 0,
  width: "16",
  height: "16",
  viewBox: "0 0 32 32"
}, f1 = {
  key: 1,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, h1 = {
  key: 2,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, g1 = {
  key: 3,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, p1 = {
  key: 4,
  width: "16",
  height: "16",
  viewBox: "0 0 24 24"
}, Zt = {
  __name: "icon",
  props: {
    name: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    return (t, n) => (U(), se(Ae, null, [
      e.name === "reset" ? (U(), se("svg", d1, [...n[0] || (n[0] = [
        Ee("path", { d: "M18 28A12 12 0 1 0 6 16v6.2l-3.6-3.6L1 20l6 6l6-6l-1.4-1.4L8 22.2V16a10 10 0 1 1 10 10Z" }, null, -1)
      ])])) : $e("", !0),
      e.name === "update" ? (U(), se("svg", f1, [...n[1] || (n[1] = [
        Ee("path", { d: "M14 20v-2h2.6l-3.2-3.2l1.425-1.425L18 16.55V14h2v6Zm-8.6 0L4 18.6L16.6 6H14V4h6v6h-2V7.4Zm3.775-9.425L4 5.4L5.4 4l5.175 5.175Z" }, null, -1)
      ])])) : $e("", !0),
      e.name === "sun" ? (U(), se("svg", h1, [...n[2] || (n[2] = [
        Ee("path", { d: "M12 17q-2.075 0-3.537-1.463Q7 14.075 7 12t1.463-3.538Q9.925 7 12 7t3.538 1.462Q17 9.925 17 12q0 2.075-1.462 3.537Q14.075 17 12 17ZM2 13q-.425 0-.712-.288Q1 12.425 1 12t.288-.713Q1.575 11 2 11h2q.425 0 .713.287Q5 11.575 5 12t-.287.712Q4.425 13 4 13Zm18 0q-.425 0-.712-.288Q19 12.425 19 12t.288-.713Q19.575 11 20 11h2q.425 0 .712.287q.288.288.288.713t-.288.712Q22.425 13 22 13Zm-8-8q-.425 0-.712-.288Q11 4.425 11 4V2q0-.425.288-.713Q11.575 1 12 1t.713.287Q13 1.575 13 2v2q0 .425-.287.712Q12.425 5 12 5Zm0 18q-.425 0-.712-.288Q11 22.425 11 22v-2q0-.425.288-.712Q11.575 19 12 19t.713.288Q13 19.575 13 20v2q0 .425-.287.712Q12.425 23 12 23ZM5.65 7.05L4.575 6q-.3-.275-.288-.7q.013-.425.288-.725q.3-.3.725-.3t.7.3L7.05 5.65q.275.3.275.7q0 .4-.275.7q-.275.3-.687.287q-.413-.012-.713-.287ZM18 19.425l-1.05-1.075q-.275-.3-.275-.712q0-.413.275-.688q.275-.3.688-.287q.412.012.712.287L19.425 18q.3.275.288.7q-.013.425-.288.725q-.3.3-.725.3t-.7-.3ZM16.95 7.05q-.3-.275-.287-.688q.012-.412.287-.712L18 4.575q.275-.3.7-.288q.425.013.725.288q.3.3.3.725t-.3.7L18.35 7.05q-.3.275-.7.275q-.4 0-.7-.275ZM4.575 19.425q-.3-.3-.3-.725t.3-.7l1.075-1.05q.3-.275.713-.275q.412 0 .687.275q.3.275.288.688q-.013.412-.288.712L6 19.425q-.275.3-.7.287q-.425-.012-.725-.287Z" }, null, -1)
      ])])) : $e("", !0),
      e.name === "moon" ? (U(), se("svg", g1, [...n[3] || (n[3] = [
        Ee("path", { d: "M12 21q-3.75 0-6.375-2.625T3 12q0-3.75 2.625-6.375T12 3q.35 0 .688.025q.337.025.662.075q-1.025.725-1.637 1.887Q11.1 6.15 11.1 7.5q0 2.25 1.575 3.825Q14.25 12.9 16.5 12.9q1.375 0 2.525-.613q1.15-.612 1.875-1.637q.05.325.075.662Q21 11.65 21 12q0 3.75-2.625 6.375T12 21Z" }, null, -1)
      ])])) : $e("", !0),
      e.name === "log" ? (U(), se("svg", p1, [...n[4] || (n[4] = [
        Ee("path", { d: "M20 19V7H4v12h16m0-16a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16m-7 14v-2h5v2h-5m-3.42-4L5.57 9H8.4l3.3 3.3c.39.39.39 1.03 0 1.42L8.42 17H5.59l3.99-4Z" }, null, -1)
      ])])) : $e("", !0)
    ], 64));
  }
}, v1 = /* @__PURE__ */ ve({
  __name: "diagram",
  props: {
    nodes: {},
    edges: {}
  },
  setup(e) {
    const { onInit: t, onNodeDragStop: n, onConnect: o, addEdges: i, setViewport: r, toObject: s } = we(), a = _e(!1);
    t((h) => {
      h.fitView();
    }), n(({ event: h, nodes: g, node: b }) => {
      console.log("Node Drag Stop", { event: h, nodes: g, node: b });
    }), o((h) => {
      i(h);
    });
    function l() {
      console.debug({ level: "debug", msg: "put your custom logic here" });
    }
    function u() {
      console.log(s());
    }
    function c() {
      r({ x: 0, y: 0, zoom: 1 });
    }
    function d() {
      a.value = !a.value;
    }
    return (h, g) => (U(), Se(F(Yg), {
      nodes: h.nodes,
      edges: h.edges,
      class: nt([{ dark: a.value }, "basic-flow"]),
      "default-viewport": { zoom: 1 },
      "min-zoom": 0.2,
      "max-zoom": 4
    }, {
      default: ke(() => [
        xe(F(Qg), {
          "pattern-color": "#aaa",
          gap: 16
        }),
        xe(F(c1)),
        xe(F(Mp), { position: "top-left" }, {
          default: ke(() => [
            xe(F(ft), {
              title: "Reset Transform",
              onClick: c
            }, {
              default: ke(() => [
                xe(Zt, { name: "reset" })
              ]),
              _: 1
            }),
            xe(F(ft), {
              title: "Custom Control",
              onClick: l
            }, {
              default: ke(() => [
                xe(Zt, { name: "update" })
              ]),
              _: 1
            }),
            xe(F(ft), {
              title: "Toggle Dark Mode",
              onClick: d
            }, {
              default: ke(() => [
                a.value ? (U(), Se(Zt, {
                  key: 0,
                  name: "sun"
                })) : (U(), Se(Zt, {
                  key: 1,
                  name: "moon"
                }))
              ]),
              _: 1
            }),
            xe(F(ft), {
              title: "Log `toObject`",
              onClick: u
            }, {
              default: ke(() => [
                xe(Zt, { name: "log" })
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }, 8, ["nodes", "edges", "class"]));
  }
}), m1 = [
  {
    id: "1",
    type: "input",
    data: { label: "Node 1" },
    position: { x: 250, y: 0 },
    class: "light"
  },
  {
    id: "2",
    type: "output",
    data: { label: "Node 2" },
    position: { x: 100, y: 100 },
    class: "light"
  },
  {
    id: "3",
    data: { label: "Node 3" },
    position: { x: 400, y: 100 },
    class: "light"
  },
  {
    id: "4",
    data: { label: "Node 4" },
    position: { x: 150, y: 200 },
    class: "light"
  },
  {
    id: "5",
    type: "output",
    data: { label: "Node 5" },
    position: { x: 300, y: 300 },
    class: "light"
  }
], y1 = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
    animated: !0
  },
  {
    id: "e1-3",
    source: "1",
    target: "3",
    label: "edge with arrowhead",
    markerEnd: eo.ArrowClosed
  },
  {
    id: "e4-5",
    type: "step",
    source: "4",
    target: "5",
    label: "Node 2",
    style: { stroke: "orange" },
    labelBgStyle: { fill: "orange" }
  },
  {
    id: "e3-4",
    type: "smoothstep",
    source: "3",
    target: "4",
    label: "smoothstep-edge"
  }
], w1 = {
  class: "root",
  name: "ext-structure-root"
}, _1 = /* @__PURE__ */ ve({
  __name: "app",
  props: {
    api: {}
  },
  setup(e) {
    const t = e;
    let n = _e(""), o = () => {
    };
    return rt(() => {
      o = t.api.activeFileName.subscribe((i, r) => {
        n.value = i;
      });
    }), ds(() => {
      o();
    }), (i, r) => (U(), se("div", w1, [
      r[0] || (r[0] = Ee("h3", null, "Data Structure", -1)),
      xe(v1, {
        nodes: F(m1),
        edges: F(y1)
      }, null, 8, ["nodes", "edges"])
    ]));
  }
}), $1 = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, b1 = /* @__PURE__ */ $1(_1, [["__scopeId", "data-v-fe8c57b4"]]);
function E1(e, t) {
  if (!document.getElementById(e)) {
    console.error({ msg: "could not found root element", rootId: e });
    return;
  }
  Pl(b1, { api: t }).mount(`#${e}`);
}
export {
  E1 as default
};
