var app=function(){"use strict";function t(){}const e=t=>t;function n(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(n)}function i(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(e,n,o){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function c(t,e,n=e){return t.set(n),e}const a="undefined"!=typeof window;let u=a?()=>window.performance.now():()=>Date.now(),f=a?t=>requestAnimationFrame(t):t;const d=new Set;function p(t){d.forEach(e=>{e.c(t)||(d.delete(e),e.f())}),0!==d.size&&f(p)}function h(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function v(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function y(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function _(){return $("")}function w(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function x(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function O(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function T(t,e){for(let n=0;n<t.options.length;n+=1){const o=t.options[n];if(o.__value===e)return void(o.selected=!0)}}function E(t,e,n){t.classList[n?"add":"remove"](e)}const R=new Set;let k,C=0;function P(t,e,n,o,r,i,s,l=0){const c=16.666/o;let a="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*i(t);a+=100*t+`%{${s(o,1-o)}}\n`}const u=a+`100% {${s(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(u)}_${l}`,d=t.ownerDocument;R.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(y("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${u}`,p.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,C+=1,f}function S(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),(C-=r)||f(()=>{C||(R.forEach(t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}}),R.clear())}))}function B(t){k=t}function F(){if(!k)throw new Error("Function called outside component initialization");return k}function j(t){F().$$.on_mount.push(t)}const H=[],L=[],D=[],I=[],M=Promise.resolve();let N=!1;function q(t){D.push(t)}let A=!1;const G=new Set;function W(){if(!A){A=!0;do{for(let t=0;t<H.length;t+=1){const e=H[t];B(e),K(e.$$)}for(H.length=0;L.length;)L.pop()();for(let t=0;t<D.length;t+=1){const e=D[t];G.has(e)||(G.add(e),e())}D.length=0}while(H.length);for(;I.length;)I.pop()();N=!1,A=!1,G.clear()}}function K(t){if(null!==t.fragment){t.update(),r(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}let X;function z(t,e,n){t.dispatchEvent(function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(`${e?"intro":"outro"}${n}`))}const V=new Set;let J;function Q(){J={r:0,c:[],p:J}}function U(){J.r||r(J.c),J=J.p}function Y(t,e){t&&t.i&&(V.delete(t),t.i(e))}function Z(t,e,n,o){if(t&&t.o){if(V.has(t))return;V.add(t),J.c.push(()=>{V.delete(t),o&&(n&&t.d(1),o())}),t.o(e)}}const tt={duration:0};function et(n,o,s,l){let c=o(n,s),a=l?0:1,h=null,g=null,m=null;function v(){m&&S(n,m)}function y(t,e){const n=t.b-a;return e*=Math.abs(n),{a:a,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:i=0,duration:s=300,easing:l=e,tick:$=t,css:b}=c||tt,_={start:u()+i,b:o};o||(_.group=J,J.r+=1),h?g=_:(b&&(v(),m=P(n,a,o,s,i,l,b)),o&&$(0,1),h=y(_,s),q(()=>z(n,o,"start")),function(t){let e;0===d.size&&f(p),new Promise(n=>{d.add(e={c:t,f:n})})}(t=>{if(g&&t>g.start&&(h=y(g,s),g=null,z(n,h.b,"start"),b&&(v(),m=P(n,a,h.b,h.duration,0,l,c.css))),h)if(t>=h.end)$(a=h.b,1-a),z(n,h.b,"end"),g||(h.b?v():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const e=t-h.start;a=h.a+h.d*l(e/h.duration),$(a,1-a)}return!(!h&&!g)}))}return{run(t){i(c)?(X||(X=Promise.resolve()).then(()=>{X=null}),X).then(()=>{c=c(),$(t)}):$(t)},end(){v(),h=g=null}}}function nt(t){t&&t.c()}function ot(t,e,o){const{fragment:s,on_mount:l,on_destroy:c,after_update:a}=t.$$;s&&s.m(e,o),q(()=>{const e=l.map(n).filter(i);c?c.push(...e):r(e),t.$$.on_mount=[]}),a.forEach(q)}function rt(t,e){const n=t.$$;null!==n.fragment&&(r(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function it(t,e){-1===t.$$.dirty[0]&&(H.push(t),N||(N=!0,M.then(W)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function st(e,n,i,s,l,c,a=[-1]){const u=k;B(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:o(),dirty:a};let p=!1;if(d.ctx=i?i(e,f,(t,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&l(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&it(e,t)),n}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const t=(h=n.target,Array.from(h.childNodes));d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();n.intro&&Y(e.$$.fragment),ot(e,n.target,n.anchor),W()}var h;B(u)}class lt{$destroy(){rt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}function ct(t){const e=t-1;return e*e*e+1}function at(t){return--t*t*t*t*t+1}function ut(t,{delay:n=0,duration:o=400,easing:r=e}){const i=+getComputedStyle(t).opacity;return{delay:n,duration:o,easing:r,css:t=>`opacity: ${t*i}`}}function ft(t,{delay:e=0,duration:n=400,easing:o=ct}){const r=getComputedStyle(t),i=+r.opacity,s=parseFloat(r.height),l=parseFloat(r.paddingTop),c=parseFloat(r.paddingBottom),a=parseFloat(r.marginTop),u=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:e,duration:n,easing:o,css:t=>"overflow: hidden;"+`opacity: ${Math.min(20*t,1)*i};`+`height: ${t*s}px;`+`padding-top: ${t*l}px;`+`padding-bottom: ${t*c}px;`+`margin-top: ${t*a}px;`+`margin-bottom: ${t*u}px;`+`border-top-width: ${t*f}px;`+`border-bottom-width: ${t*d}px;`}}const dt=[];const pt={TOP_RIGHT:"top-right",TOP_LEFT:"top-left",BOTTOM_RIGHT:"bottom-right",BOTTOM_LEFT:"bottom-left"},ht={CHECKBOX:"CHECKBOX",DROPDOWN:"DROPDOWN"},gt={position:pt.BOTTOM_RIGHT,isShowing:!0,controls:[{type:ht.CHECKBOX,label:"Demo",onChange:(t,{index:e,state:n,dispatcher:o})=>{o.update(o=>({...o,controls:n.controls.map((n,o)=>o===e?{...n,value:t}:n)}))},value:!0},{type:ht.DROPDOWN,label:"Position",onChange:(t,{index:e,dispatcher:n})=>{n.update(e=>({...e,position:t}))},options:[{label:"top-right",value:pt.TOP_RIGHT},{label:"top-left",value:pt.TOP_LEFT},{label:"bottom-right",value:pt.BOTTOM_RIGHT},{label:"bottom-left",value:pt.BOTTOM_LEFT}],value:pt.BOTTOM_RIGHT}]},mt=function(e,n=t){let o;const r=[];function i(t){if(s(e,t)&&(e=t,o)){const t=!dt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:i,update:function(t){i(t(e))},subscribe:function(s,l=t){const c=[s,l];return r.push(c),1===r.length&&(o=n(i)||t),s(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(null),vt=()=>mt.update(t=>({...gt,shortcuts:[{name:"togglePane",action:()=>{mt.update(t=>({...t,isShowing:!t.isShowing}))},keys:["KeyP"]}]}));function yt(t,e,n){const o=t.slice();return o[12]=e[n],o}function $t(t,e,n){const o=t.slice();return o[5]=e[n].label,o[6]=e[n].type,o[7]=e[n].onChange,o[8]=e[n].value,o[9]=e[n].options,o[11]=n,o}function bt(t){let e,n,o,i,s,l,c=t[5]+"";function a(){t[2].call(i,t[11])}function u(...e){return t[3](t[5],t[6],t[7],t[8],t[11],...e)}return{c(){e=y("label"),n=$(c),o=b(),x(i=y("input"),"class","right checkbox svelte-of0lk3"),x(i,"type","checkbox"),x(e,"class","label clearfix svelte-of0lk3")},m(r,c){g(r,e,c),h(e,n),h(e,o),h(e,i),i.checked=t[0].controls[t[11]].value,s||(l=[w(i,"change",a),w(i,"change",u)],s=!0)},p(e,o){t=e,1&o&&c!==(c=t[5]+"")&&O(n,c),1&o&&(i.checked=t[0].controls[t[11]].value)},d(t){t&&m(e),s=!1,r(l)}}}function _t(t){let e,n,o,r,i,s,l,c=t[5]+"",a=t[9],u=[];for(let e=0;e<a.length;e+=1)u[e]=wt(yt(t,a,e));return{c(){e=y("label"),n=$(c),o=b(),r=y("select");for(let t=0;t<u.length;t+=1)u[t].c();i=b(),x(r,"class","right svelte-of0lk3"),void 0===t[0].position&&q(()=>t[4].call(r)),x(e,"class","label clearfix svelte-of0lk3")},m(c,a){g(c,e,a),h(e,n),h(e,o),h(e,r);for(let t=0;t<u.length;t+=1)u[t].m(r,null);T(r,t[0].position),h(e,i),s||(l=w(r,"change",t[4]),s=!0)},p(t,e){if(1&e&&c!==(c=t[5]+"")&&O(n,c),1&e){let n;for(a=t[9],n=0;n<a.length;n+=1){const o=yt(t,a,n);u[n]?u[n].p(o,e):(u[n]=wt(o),u[n].c(),u[n].m(r,null))}for(;n<u.length;n+=1)u[n].d(1);u.length=a.length}1&e&&T(r,t[0].position)},d(t){t&&m(e),v(u,t),s=!1,l()}}}function wt(t){let e,n,o,r,i=t[12].label+"";return{c(){e=y("option"),n=$(i),x(e,"key",o=t[12].value),e.__value=r=t[12].value,e.value=e.__value},m(t,o){g(t,e,o),h(e,n)},p(t,s){1&s&&i!==(i=t[12].label+"")&&O(n,i),1&s&&o!==(o=t[12].value)&&x(e,"key",o),1&s&&r!==(r=t[12].value)&&(e.__value=r,e.value=e.__value)},d(t){t&&m(e)}}}function xt(t){let e,n,o=t[6]===ht.CHECKBOX&&bt(t),r=t[6]===ht.DROPDOWN&&_t(t);return{c(){o&&o.c(),e=b(),r&&r.c(),n=_()},m(t,i){o&&o.m(t,i),g(t,e,i),r&&r.m(t,i),g(t,n,i)},p(t,i){t[6]===ht.CHECKBOX?o?o.p(t,i):((o=bt(t)).c(),o.m(e.parentNode,e)):o&&(o.d(1),o=null),t[6]===ht.DROPDOWN?r?r.p(t,i):((r=_t(t)).c(),r.m(n.parentNode,n)):r&&(r.d(1),r=null)},d(t){o&&o.d(t),t&&m(e),r&&r.d(t),t&&m(n)}}}function Ot(e){let n,o=e[0].controls,r=[];for(let t=0;t<o.length;t+=1)r[t]=xt($t(e,o,t));return{c(){for(let t=0;t<r.length;t+=1)r[t].c();n=_()},m(t,e){for(let n=0;n<r.length;n+=1)r[n].m(t,e);g(t,n,e)},p(t,[e]){if(3&e){let i;for(o=t[0].controls,i=0;i<o.length;i+=1){const s=$t(t,o,i);r[i]?r[i].p(s,e):(r[i]=xt(s),r[i].c(),r[i].m(n.parentNode,n))}for(;i<r.length;i+=1)r[i].d(1);r.length=o.length}},i:t,o:t,d(t){v(r,t),t&&m(n)}}}function Tt(t,e,n){let o;l(t,mt,t=>n(0,o=t));const r=(t,{label:e,type:n,onChange:r,value:i,index:s,options:l})=>{r&&r(i,{index:s,state:o,dispatcher:mt,prevValue:i,options:l})};return[o,r,function(t){o.controls[t].value=this.checked,mt.set(o)},(t,e,n,o,i,s)=>r(0,{label:t,type:e,onChange:n,prevValue:o,value:s.target.checked,index:i}),function(){o.position=function(t){const e=t.querySelector(":checked")||t.options[0];return e&&e.__value}(this),mt.set(o)}]}vt();class Et extends lt{constructor(t){super(),st(this,t,Tt,Ot,s,{})}}function Rt(e){let n,o,r,i,s,l;return{c(){n=y("div"),(o=y("button")).textContent="X",x(o,"class","button svelte-1gjqbsv"),x(n,"class","right svelte-1gjqbsv")},m(t,r){var c;g(t,n,r),h(n,o),i=!0,s||(l=w(o,"click",(c=e[1],function(t){return t.stopPropagation(),c.call(this,t)})),s=!0)},p:t,i(t){i||(q(()=>{r||(r=et(n,ut,{duration:200},!0)),r.run(1)}),i=!0)},o(t){r||(r=et(n,ut,{duration:200},!1)),r.run(0),i=!1},d(t){t&&m(n),t&&r&&r.end(),s=!1,l()}}}function kt(t){let e,n,o,r,i;const s=[Pt,Ct],l=[];function c(t,e){return t[0].controls&&t[0].controls.length>0?0:1}return n=c(t),o=l[n]=s[n](t),{c(){e=y("div"),o.c(),x(e,"class","container text-sm svelte-1gjqbsv")},m(t,o){g(t,e,o),l[n].m(e,null),i=!0},p(t,r){let i=n;(n=c(t))!==i&&(Q(),Z(l[i],1,1,()=>{l[i]=null}),U(),(o=l[n])||(o=l[n]=s[n](t)).c(),Y(o,1),o.m(e,null))},i(t){i||(Y(o),q(()=>{r||(r=et(e,ft,{duration:300,ease:at},!0)),r.run(1)}),i=!0)},o(t){Z(o),r||(r=et(e,ft,{duration:300,ease:at},!1)),r.run(0),i=!1},d(t){t&&m(e),l[n].d(),t&&r&&r.end()}}}function Ct(e){let n;return{c(){(n=y("div")).textContent="Please setup the config using window.cipan_SetControls( ... )",x(n,"class","empty-config svelte-1gjqbsv")},m(t,e){g(t,n,e)},i:t,o:t,d(t){t&&m(n)}}}function Pt(t){let e,n,o;return n=new Et({}),{c(){e=y("div"),nt(n.$$.fragment),x(e,"class","controls svelte-1gjqbsv")},m(t,r){g(t,e,r),ot(n,e,null),o=!0},i(t){o||(Y(n.$$.fragment,t),o=!0)},o(t){Z(n.$$.fragment,t),o=!1},d(t){t&&m(e),rt(n)}}}function St(t){let e,n,o,r,i,s,l,c,a=t[0].isShowing&&Rt(t),u=t[0].isShowing&&kt(t);return{c(){e=y("div"),n=y("div"),(o=y("div")).textContent="Panel",r=b(),a&&a.c(),i=b(),u&&u.c(),x(o,"class","left svelte-1gjqbsv"),x(n,"class","header text-base clearfix svelte-1gjqbsv"),x(e,"class","control-panel svelte-1gjqbsv"),E(e,"fixed-top-right",t[0].position===pt.TOP_RIGHT),E(e,"fixed-top-left",t[0].position===pt.TOP_LEFT),E(e,"fixed-bottom-right",t[0].position===pt.BOTTOM_RIGHT),E(e,"fixed-bottom-left",t[0].position===pt.BOTTOM_LEFT)},m(f,d){g(f,e,d),h(e,n),h(n,o),h(n,r),a&&a.m(n,null),h(e,i),u&&u.m(e,null),s=!0,l||(c=w(n,"click",t[1]),l=!0)},p(t,[o]){t[0].isShowing?a?(a.p(t,o),1&o&&Y(a,1)):((a=Rt(t)).c(),Y(a,1),a.m(n,null)):a&&(Q(),Z(a,1,1,()=>{a=null}),U()),t[0].isShowing?u?(u.p(t,o),1&o&&Y(u,1)):((u=kt(t)).c(),Y(u,1),u.m(e,null)):u&&(Q(),Z(u,1,1,()=>{u=null}),U()),1&o&&E(e,"fixed-top-right",t[0].position===pt.TOP_RIGHT),1&o&&E(e,"fixed-top-left",t[0].position===pt.TOP_LEFT),1&o&&E(e,"fixed-bottom-right",t[0].position===pt.BOTTOM_RIGHT),1&o&&E(e,"fixed-bottom-left",t[0].position===pt.BOTTOM_LEFT)},i(t){s||(Y(a),Y(u),s=!0)},o(t){Z(a),Z(u),s=!1},d(t){t&&m(e),a&&a.d(),u&&u.d(),l=!1,c()}}}function Bt(t,e,n){let o;l(t,mt,t=>n(0,o=t));return[o,()=>{c(mt,o.isShowing=!o.isShowing,o)}]}class Ft extends lt{constructor(t){super(),st(this,t,Bt,St,s,{})}}function jt(t,e,n){let o;l(t,mt,t=>n(0,o=t));const r=t=>{if(!o.shortcuts)throw new Error("No Shortcuts List");o.shortcuts.map(e=>{e.keys.map(n=>{t.code===n&&e.action(o)})})};var i;return j(()=>{window.addEventListener("keypress",r)}),i=(()=>{window.removeEventListener("keypress",r)}),F().$$.on_destroy.push(i),[]}class Ht extends lt{constructor(t){super(),st(this,t,jt,null,s,{})}}function Lt(t,e,n){let o;l(t,mt,t=>n(0,o=t));return j(()=>{window.cipan_SetShortcuts=(t=>{const e=t=>{try{c(mt,o.controls=(t=>{if(!t.every((t,e)=>{if("object"==typeof t&&t instanceof Array)return!1;t.keys.forEach(t=>{});const n=t.name&&"string"==typeof t.name,o=t.action&&"function"==typeof t.action,r=t.keys&&"object"==typeof t.keys&&t.keys instanceof Array;if(!n)throw new Error(`"name" at index ${e} is invalid. The invalid value is ${t.name}`);if(!o)throw new Error(`"action" at index ${e} is invalid. The invalid value is ${t.action}`);if(!r)throw new Error(`"keys" at index ${e} is invalid. The invalid value is ${t.keys}`);return t.name&&"string"==typeof t.name&&t.action&&"function"==typeof t.action&&t.keys&&"object"==typeof t.keys&&t.keys instanceof Array}))throw new Error("Invalid data");return t})(t),o)}catch(t){console.error(`[ERROR 0001] Failed to set controls: ${t}`)}};t?"object"==typeof t&&t instanceof Array?e(t):"function"==typeof t?e(t(o,mt)):"string"==typeof t&&"reset"===t?vt():console.error('[ERROR 0003] Invalid value. Please pass array or function with at most two arguments. Pass "reset" to do factory reset.'):console.error("[ERROR 0002] Shortcuts value cannot be empty or null")}),window.cipan_SetControls=(t=>{const e=t=>{try{c(mt,o.controls=(t=>t)(t),o)}catch(t){console.error(`[ERROR 0001] Failed to set shortcuts: ${t}`)}};t?"object"==typeof t&&t instanceof Array?e(t):"function"==typeof t?e(t(o,mt)):console.error("[ERROR 0003] Invalid value. Please pass array or function with at most two arguments."):console.error("[ERROR 0002] Controls value cannot be empty or null")})}),[]}class Dt extends lt{constructor(t){super(),st(this,t,Lt,null,s,{})}}function It(e){let n,o,r,i,s,l;return n=new Ft({}),r=new Ht({}),s=new Dt({}),{c(){nt(n.$$.fragment),o=b(),nt(r.$$.fragment),i=b(),nt(s.$$.fragment)},m(t,e){ot(n,t,e),g(t,o,e),ot(r,t,e),g(t,i,e),ot(s,t,e),l=!0},p:t,i(t){l||(Y(n.$$.fragment,t),Y(r.$$.fragment,t),Y(s.$$.fragment,t),l=!0)},o(t){Z(n.$$.fragment,t),Z(r.$$.fragment,t),Z(s.$$.fragment,t),l=!1},d(t){rt(n,t),t&&m(o),rt(r,t),t&&m(i),rt(s,t)}}}return new class extends lt{constructor(t){super(),st(this,t,null,It,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
