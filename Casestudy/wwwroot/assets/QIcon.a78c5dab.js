import{Q as x,j as B,h as r,u as _,c as m,g as M}from"./index.c0e67443.js";const j=e=>x(B(e)),G=e=>x(e);function k(e,n){return e!==void 0&&e()||n}function H(e,n){if(e!==void 0){const a=e();if(a!=null)return a.slice()}return n}function c(e,n){return e!==void 0?n.concat(e()):n}function J(e,n){return e===void 0?n:n!==void 0?n.concat(e()):e()}function K(e,n,a,l,u,o){n.key=l+u;const s=r(e,n,a);return u===!0?_(s,o()):s}const D={xs:18,sm:24,md:32,lg:38,xl:46},F={size:String};function Q(e,n=D){return m(()=>e.size!==void 0?{fontSize:e.size in n?`${n[e.size]}px`:e.size}:null)}const h="0 0 24 24",b=e=>e,d=e=>`ionicons ${e}`,p={"mdi-":e=>`mdi ${e}`,"icon-":b,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":d,"ion-ios":d,"ion-logo":d,"iconfont ":b,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},S={o_:"-outlined",r_:"-round",s_:"-sharp"},R={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},q=new RegExp("^("+Object.keys(p).join("|")+")"),C=new RegExp("^("+Object.keys(S).join("|")+")"),y=new RegExp("^("+Object.keys(R).join("|")+")"),I=/^[Mm]\s?[-+]?\.?\d/,O=/^img:/,U=/^svguse:/,P=/^ion-/,V=/^(fa-(sharp|solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /;var L=j({name:"QIcon",props:{...F,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:n}){const{proxy:{$q:a}}=M(),l=Q(e),u=m(()=>"q-icon"+(e.left===!0?" on-left":"")+(e.right===!0?" on-right":"")+(e.color!==void 0?` text-${e.color}`:"")),o=m(()=>{let s,t=e.name;if(t==="none"||!t)return{none:!0};if(a.iconMapFn!==null){const i=a.iconMapFn(t);if(i!==void 0)if(i.icon!==void 0){if(t=i.icon,t==="none"||!t)return{none:!0}}else return{cls:i.cls,content:i.content!==void 0?i.content:" "}}if(I.test(t)===!0){const[i,v=h]=t.split("|");return{svg:!0,viewBox:v,nodes:i.split("&&").map(w=>{const[E,$,z]=w.split("@@");return r("path",{style:$,d:E,transform:z})})}}if(O.test(t)===!0)return{img:!0,src:t.substring(4)};if(U.test(t)===!0){const[i,v=h]=t.split("|");return{svguse:!0,src:i.substring(7),viewBox:v}}let f=" ";const g=t.match(q);if(g!==null)s=p[g[1]](t);else if(V.test(t)===!0)s=t;else if(P.test(t)===!0)s=`ionicons ion-${a.platform.is.ios===!0?"ios":"md"}${t.substring(3)}`;else if(y.test(t)===!0){s="notranslate material-symbols";const i=t.match(y);i!==null&&(t=t.substring(6),s+=R[i[1]]),f=t}else{s="notranslate material-icons";const i=t.match(C);i!==null&&(t=t.substring(2),s+=S[i[1]]),f=t}return{cls:s,content:f}});return()=>{const s={class:u.value,style:l.value,"aria-hidden":"true",role:"presentation"};return o.value.none===!0?r(e.tag,s,k(n.default)):o.value.img===!0?r("span",s,c(n.default,[r("img",{src:o.value.src})])):o.value.svg===!0?r("span",s,c(n.default,[r("svg",{viewBox:o.value.viewBox||"0 0 24 24"},o.value.nodes)])):o.value.svguse===!0?r("span",s,c(n.default,[r("svg",{viewBox:o.value.viewBox},[r("use",{"xlink:href":o.value.src})])])):(o.value.cls!==void 0&&(s.class+=" "+o.value.cls),r(e.tag,s,c(n.default,[o.value.content])))}}});export{L as Q,H as a,c as b,j as c,G as d,F as e,Q as f,J as g,k as h,K as i,D as u};
