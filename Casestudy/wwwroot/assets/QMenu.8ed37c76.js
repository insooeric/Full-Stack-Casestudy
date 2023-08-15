import{r as w,c as u,w as M,H as ae,h as A,I as ne,o as se,g as ue,z as ie}from"./index.c0e67443.js";import{u as le,v as D,a as re,b as ce,c as fe,r as R,s as de,p as H,d as ve}from"./position-engine.d2224b83.js";import{u as me,e as ge,f as he,h as ye,i as Pe,j as ke,k as Te,l as Ce,m as Se,n as xe}from"./QScrollObserver.8917f4b3.js";import{u as Oe,a as be,c as qe}from"./focus-manager.b4734f87.js";import{c as Be,h as Ee}from"./QIcon.a78c5dab.js";import{a as Fe,r as we,b as K,c as Me}from"./ClosePopup.7e03939d.js";import{e as Ae}from"./QBtn.5221da2d.js";var Ie=Be({name:"QMenu",inheritAttrs:!1,props:{...le,...me,...Oe,...ge,persistent:Boolean,autoClose:Boolean,separateClosePopup:Boolean,noRouteDismiss:Boolean,noRefocus:Boolean,noFocus:Boolean,fit:Boolean,cover:Boolean,square:Boolean,anchor:{type:String,validator:D},self:{type:String,validator:D},offset:{type:Array,validator:re},scrollTarget:{default:void 0},touchPosition:Boolean,maxHeight:{type:String,default:null},maxWidth:{type:String,default:null}},emits:[...he,"click","escapeKey"],setup(t,{slots:Q,emit:c,attrs:d}){let n=null,f,i,v;const k=ue(),{proxy:m}=k,{$q:o}=m,a=w(null),s=w(!1),W=u(()=>t.persistent!==!0&&t.noRouteDismiss!==!0),j=be(t,o),{registerTick:I,removeTick:_}=ye(),{registerTimeout:T}=Pe(),{transitionProps:z,transitionStyle:L}=ke(t),{localScrollTarget:C,changeScrollEvent:U,unconfigureScrollTarget:$}=ce(t,E),{anchorEl:l,canShow:G}=fe({showing:s}),{hide:S}=Te({showing:s,canShow:G,handleShow:Y,handleHide:Z,hideOnRouteChange:W,processOnMount:!0}),{showPortal:x,hidePortal:O,renderPortal:J}=Ce(k,a,ee,"menu"),g={anchorEl:l,innerRef:a,onClickOutside(e){if(t.persistent!==!0&&s.value===!0)return S(e),(e.type==="touchstart"||e.target.classList.contains("q-dialog__backdrop"))&&ie(e),!0}},b=u(()=>H(t.anchor||(t.cover===!0?"center middle":"bottom start"),o.lang.rtl)),N=u(()=>t.cover===!0?b.value:H(t.self||"top start",o.lang.rtl)),V=u(()=>(t.square===!0?" q-menu--square":"")+(j.value===!0?" q-menu--dark q-dark":"")),X=u(()=>t.autoClose===!0?{onClick:p}:{}),q=u(()=>s.value===!0&&t.persistent!==!0);M(q,e=>{e===!0?(Me(y),ve(g)):(K(y),R(g))});function h(){qe(()=>{let e=a.value;e&&e.contains(document.activeElement)!==!0&&(e=e.querySelector("[autofocus][tabindex], [data-autofocus][tabindex]")||e.querySelector("[autofocus] [tabindex], [data-autofocus] [tabindex]")||e.querySelector("[autofocus], [data-autofocus]")||e,e.focus({preventScroll:!0}))})}function Y(e){if(n=t.noRefocus===!1?document.activeElement:null,Fe(F),x(),E(),f=void 0,e!==void 0&&(t.touchPosition||t.contextMenu)){const P=ae(e);if(P.left!==void 0){const{top:te,left:oe}=l.value.getBoundingClientRect();f={left:P.left-oe,top:P.top-te}}}i===void 0&&(i=M(()=>o.screen.width+"|"+o.screen.height+"|"+t.self+"|"+t.anchor+"|"+o.lang.rtl,r)),t.noFocus!==!0&&document.activeElement.blur(),I(()=>{r(),t.noFocus!==!0&&h()}),T(()=>{o.platform.is.ios===!0&&(v=t.autoClose,a.value.click()),r(),x(!0),c("show",e)},t.transitionDuration)}function Z(e){_(),O(),B(!0),n!==null&&(e===void 0||e.qClickOutside!==!0)&&(((e&&e.type.indexOf("key")===0?n.closest('[tabindex]:not([tabindex^="-"])'):void 0)||n).focus(),n=null),T(()=>{O(!0),c("hide",e)},t.transitionDuration)}function B(e){f=void 0,i!==void 0&&(i(),i=void 0),(e===!0||s.value===!0)&&(we(F),$(),R(g),K(y)),e!==!0&&(n=null)}function E(){(l.value!==null||t.scrollTarget!==void 0)&&(C.value=Se(l.value,t.scrollTarget),U(C.value,r))}function p(e){v!==!0?(xe(m,e),c("click",e)):v=!1}function F(e){q.value===!0&&t.noFocus!==!0&&Ae(a.value,e.target)!==!0&&h()}function y(e){c("escapeKey"),S(e)}function r(){de({targetEl:a.value,offset:t.offset,anchorEl:l.value,anchorOrigin:b.value,selfOrigin:N.value,absoluteOffset:f,fit:t.fit,cover:t.cover,maxHeight:t.maxHeight,maxWidth:t.maxWidth})}function ee(){return A(ne,z.value,()=>s.value===!0?A("div",{role:"menu",...d,ref:a,tabindex:-1,class:["q-menu q-position-engine scroll"+V.value,d.class],style:[d.style,L.value],...X.value},Ee(Q.default)):null)}return se(B),Object.assign(m,{focus:h,updatePosition:r}),J}});export{Ie as Q};
