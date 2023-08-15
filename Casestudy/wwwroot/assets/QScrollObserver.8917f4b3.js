import{c as P,h as F,a as J}from"./QIcon.a78c5dab.js";import{c as h,h as w,r as y,y as Z,z as ee,g as p,P as te,w as O,A as q,B as T,C as B,f as ne,D as oe,T as ie,E as N,o as S,b as le,F as H,G as z}from"./index.c0e67443.js";import{u as W,a as j,r as M,b as ae}from"./focus-manager.b4734f87.js";import{u as se,a as re,v as ue,g as $,b as I,c as ce,d as Q}from"./QBtn.5221da2d.js";var Ee=P({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:n}){const t=h(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>w("div",{class:t.value},F(n.default))}}),ke=P({name:"QItem",props:{...W,...se,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:n,emit:t}){const{proxy:{$q:o}}=p(),i=j(e,o),{hasLink:f,linkAttrs:l,linkClass:a,linkTag:s,navigateOnClick:c}=re(),d=y(null),m=y(null),b=h(()=>e.clickable===!0||f.value===!0||e.tag==="label"),v=h(()=>e.disable!==!0&&b.value===!0),g=h(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(i.value===!0?" q-item--dark":"")+(f.value===!0&&e.active===null?a.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(v.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),E=h(()=>{if(e.insetLevel===void 0)return null;const u=o.lang.rtl===!0?"Right":"Left";return{["padding"+u]:16+e.insetLevel*56+"px"}});function k(u){v.value===!0&&(m.value!==null&&(u.qKeyEvent!==!0&&document.activeElement===d.value?m.value.focus():document.activeElement===m.value&&d.value.focus()),c(u))}function C(u){if(v.value===!0&&Z(u,13)===!0){ee(u),u.qKeyEvent=!0;const V=new MouseEvent("click",u);V.qKeyEvent=!0,d.value.dispatchEvent(V)}t("keyup",u)}function r(){const u=J(n.default,[]);return v.value===!0&&u.unshift(w("div",{class:"q-focus-helper",tabindex:-1,ref:m})),u}return()=>{const u={ref:d,class:g.value,style:E.value,role:"listitem",onClick:k,onKeyup:C};return v.value===!0?(u.tabindex=e.tabindex||"0",Object.assign(u,l.value)):b.value===!0&&(u["aria-disabled"]="true"),w(s.value,u,r())}}}),Ce=P({name:"QList",props:{...W,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:n}){const t=p(),o=j(e,t.proxy.$q),i=h(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(o.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>w(e.tag,{class:i.value},F(n.default))}});function Le(){if(window.getSelection!==void 0){const e=window.getSelection();e.empty!==void 0?e.empty():e.removeAllRanges!==void 0&&(e.removeAllRanges(),te.is.mobile!==!0&&e.addRange(document.createRange()))}else document.selection!==void 0&&document.selection.empty()}const $e={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},xe=["beforeShow","show","beforeHide","hide"];function Oe({showing:e,canShow:n,hideOnRouteChange:t,handleShow:o,handleHide:i,processOnMount:f}){const l=p(),{props:a,emit:s,proxy:c}=l;let d;function m(r){e.value===!0?g(r):b(r)}function b(r){if(a.disable===!0||r!==void 0&&r.qAnchorHandled===!0||n!==void 0&&n(r)!==!0)return;const u=a["onUpdate:modelValue"]!==void 0;u===!0&&(s("update:modelValue",!0),d=r,T(()=>{d===r&&(d=void 0)})),(a.modelValue===null||u===!1)&&v(r)}function v(r){e.value!==!0&&(e.value=!0,s("beforeShow",r),o!==void 0?o(r):s("show",r))}function g(r){if(a.disable===!0)return;const u=a["onUpdate:modelValue"]!==void 0;u===!0&&(s("update:modelValue",!1),d=r,T(()=>{d===r&&(d=void 0)})),(a.modelValue===null||u===!1)&&E(r)}function E(r){e.value!==!1&&(e.value=!1,s("beforeHide",r),i!==void 0?i(r):s("hide",r))}function k(r){a.disable===!0&&r===!0?a["onUpdate:modelValue"]!==void 0&&s("update:modelValue",!1):r===!0!==e.value&&(r===!0?v:E)(d)}O(()=>a.modelValue,k),t!==void 0&&ue(l)===!0&&O(()=>c.$route.fullPath,()=>{t.value===!0&&e.value===!0&&g()}),f===!0&&q(()=>{k(a.modelValue)});const C={show:b,hide:g,toggle:m};return Object.assign(c,C),C}let de=1,fe=document.body;function me(e,n){const t=document.createElement("div");if(t.id=n!==void 0?`q-portal--${n}--${de++}`:e,B.globalNodes!==void 0){const o=B.globalNodes.class;o!==void 0&&(t.className=o)}return fe.appendChild(t),t}function ve(e){e.remove()}const x=[];function ze(e){return x.find(n=>n.contentEl!==null&&n.contentEl.contains(e))}function be(e,n){do{if(e.$options.name==="QMenu"){if(e.hide(n),e.$props.separateClosePopup===!0)return $(e)}else if(e.__qPortal===!0){const t=$(e);return t!==void 0&&t.$options.name==="QPopupProxy"?(e.hide(n),t):e}e=$(e)}while(e!=null)}function _e(e,n,t){for(;t!==0&&e!==void 0&&e!==null;){if(e.__qPortal===!0){if(t--,e.$options.name==="QMenu"){e=be(e,n);continue}e.hide(n)}e=$(e)}}function ge(e){for(e=e.parent;e!=null;){if(e.type.name==="QGlobalDialog")return!0;if(e.type.name==="QDialog"||e.type.name==="QMenu")return!1;e=e.parent}return!1}function De(e,n,t,o){const i=y(!1),f=y(!1);let l=null;const a={},s=o==="dialog"&&ge(e);function c(m){if(m===!0){M(a),f.value=!0;return}f.value=!1,i.value===!1&&(s===!1&&l===null&&(l=me(!1,o)),i.value=!0,x.push(e.proxy),ae(a))}function d(m){if(f.value=!1,m!==!0)return;M(a),i.value=!1;const b=x.indexOf(e.proxy);b!==-1&&x.splice(b,1),l!==null&&(ve(l),l=null)}return ne(()=>{d(!0)}),e.proxy.__qPortal=!0,oe(e.proxy,"contentEl",()=>n.value),{showPortal:c,hidePortal:d,portalIsActive:i,portalIsAccessible:f,renderPortal:()=>s===!0?t():i.value===!0?[w(ie,{to:l},t())]:void 0}}const Ve={transitionShow:{type:String,default:"fade"},transitionHide:{type:String,default:"fade"},transitionDuration:{type:[String,Number],default:300}};function Be(e,n=()=>{},t=()=>{}){return{transitionProps:h(()=>{const o=`q-transition--${e.transitionShow||n()}`,i=`q-transition--${e.transitionHide||t()}`;return{appear:!0,enterFromClass:`${o}-enter-from`,enterActiveClass:`${o}-enter-active`,enterToClass:`${o}-enter-to`,leaveFromClass:`${i}-leave-from`,leaveActiveClass:`${i}-leave-active`,leaveToClass:`${i}-leave-to`}}),transitionStyle:h(()=>`--q-transition-duration: ${e.transitionDuration}ms`)}}function Me(){let e;const n=p();function t(){e=void 0}return N(t),S(t),{removeTick:t,registerTick(o){e=o,T(()=>{e===o&&(I(n)===!1&&e(),e=void 0)})}}}function Qe(){let e=null;const n=p();function t(){e!==null&&(clearTimeout(e),e=null)}return N(t),S(t),{removeTimeout:t,registerTimeout(o,i){t(),I(n)===!1&&(e=setTimeout(o,i))}}}const he=[null,document,document.body,document.scrollingElement,document.documentElement];function pe(e,n){let t=ce(n);if(t===void 0){if(e==null)return window;t=e.closest(".scroll,.scroll-y,.overflow-auto")}return he.includes(t)?window:t}function U(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function G(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}function K(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=U(e);if(t<=0){i!==n&&_(e,n);return}requestAnimationFrame(f=>{const l=f-o,a=i+(n-i)/Math.max(l,t)*l;_(e,a),a!==n&&K(e,n,t-l,f)})}function X(e,n,t=0){const o=arguments[3]===void 0?performance.now():arguments[3],i=G(e);if(t<=0){i!==n&&D(e,n);return}requestAnimationFrame(f=>{const l=f-o,a=i+(n-i)/Math.max(l,t)*l;D(e,a),a!==n&&X(e,n,t-l,f)})}function _(e,n){if(e===window){window.scrollTo(window.pageXOffset||window.scrollX||document.body.scrollLeft||0,n);return}e.scrollTop=n}function D(e,n){if(e===window){window.scrollTo(n,window.pageYOffset||window.scrollY||document.body.scrollTop||0);return}e.scrollLeft=n}function Re(e,n,t){if(t){K(e,n,t);return}_(e,n)}function Ae(e,n,t){if(t){X(e,n,t);return}D(e,n)}let L;function Fe(){if(L!==void 0)return L;const e=document.createElement("p"),n=document.createElement("div");Q(e,{width:"100%",height:"200px"}),Q(n,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),n.appendChild(e),document.body.appendChild(n);const t=e.offsetWidth;n.style.overflow="scroll";let o=e.offsetWidth;return t===o&&(o=n.clientWidth),n.remove(),L=t-o,L}function Ne(e,n=!0){return!e||e.nodeType!==Node.ELEMENT_NODE?!1:n?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"]))}function we(){const e=y(!le.value);return e.value===!1&&q(()=>{e.value=!0}),e}const Y=typeof ResizeObserver!="undefined",R=Y===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var He=P({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:n}){let t=null,o,i={width:-1,height:-1};function f(s){s===!0||e.debounce===0||e.debounce==="0"?l():t===null&&(t=setTimeout(l,e.debounce))}function l(){if(t!==null&&(clearTimeout(t),t=null),o){const{offsetWidth:s,offsetHeight:c}=o;(s!==i.width||c!==i.height)&&(i={width:s,height:c},n("resize",i))}}const{proxy:a}=p();if(Y===!0){let s;const c=d=>{o=a.$el.parentNode,o?(s=new ResizeObserver(f),s.observe(o),l()):d!==!0&&T(()=>{c(!0)})};return q(()=>{c()}),S(()=>{t!==null&&clearTimeout(t),s!==void 0&&(s.disconnect!==void 0?s.disconnect():o&&s.unobserve(o))}),H}else{let d=function(){t!==null&&(clearTimeout(t),t=null),c!==void 0&&(c.removeEventListener!==void 0&&c.removeEventListener("resize",f,z.passive),c=void 0)},m=function(){d(),o&&o.contentDocument&&(c=o.contentDocument.defaultView,c.addEventListener("resize",f,z.passive),l())};const s=we();let c;return q(()=>{T(()=>{o=a.$el,o&&m()})}),S(d),a.trigger=f,()=>{if(s.value===!0)return w("object",{style:R.style,tabindex:-1,type:"text/html",data:R.url,"aria-hidden":"true",onLoad:m})}}}});const{passive:A}=z,ye=["both","horizontal","vertical"];var We=P({name:"QScrollObserver",props:{axis:{type:String,validator:e=>ye.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:n}){const t={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let o=null,i,f;O(()=>e.scrollTarget,()=>{s(),a()});function l(){o!==null&&o();const m=Math.max(0,U(i)),b=G(i),v={top:m-t.position.top,left:b-t.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const g=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";t.position={top:m,left:b},t.directionChanged=t.direction!==g,t.delta=v,t.directionChanged===!0&&(t.direction=g,t.inflectionPoint=t.position),n("scroll",{...t})}function a(){i=pe(f,e.scrollTarget),i.addEventListener("scroll",c,A),c(!0)}function s(){i!==void 0&&(i.removeEventListener("scroll",c,A),i=void 0)}function c(m){if(m===!0||e.debounce===0||e.debounce==="0")l();else if(o===null){const[b,v]=e.debounce?[setTimeout(l,e.debounce),clearTimeout]:[requestAnimationFrame(l),cancelAnimationFrame];o=()=>{v(b),o=null}}}const{proxy:d}=p();return O(()=>d.$q.lang.rtl,l),q(()=>{f=d.$el.parentNode,a()}),S(()=>{o!==null&&o(),s()}),Object.assign(d,{trigger:c,getPosition:()=>t}),H}});export{He as Q,We as a,Ce as b,ke as c,Ee as d,Ve as e,xe as f,Fe as g,Me as h,Qe as i,Be as j,Oe as k,De as l,pe as m,be as n,ze as o,_e as p,Le as q,x as r,Ae as s,Re as t,$e as u,G as v,U as w,Ne as x};