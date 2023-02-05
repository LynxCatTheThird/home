import{q as d,m as k,ak as e,B as y,aA as L,x as h,h as B,j as M,k as P,aB as S,av as v,at as z,z as t,_ as H,aC as D,aD as A,c as b,L as I,s as R,aE as U,aF as E,w as F,n as u,al as j,an as x,aG as T,aH as $,ar as q,ah as O,aI as w,aJ as G,F as W,d as N,aK as Z,aL as J,aM as K,aw as Q,aN as X,aO as Y,as as V,aP as ee,aQ as te,aR as se,b as oe,ap as ae,aS as ne,aT as le,aU as ie,aV as re}from"./nav-54ea99da.js";import{N as ce}from"./NoteDisplay-375913ec.js";import ue from"./DrawingControls-ef936e16.js";import{u as de}from"./index-0e2eb890.js";const _e={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},me=e("path",{fill:"currentColor",d:"M12 10H6.78A11 11 0 0 1 27 16h2A13 13 0 0 0 6 7.68V4H4v8h8zm8 12h5.22A11 11 0 0 1 5 16H3a13 13 0 0 0 23 8.32V28h2v-8h-8z"},null,-1),pe=[me];function ve(a,l){return d(),k("svg",_e,pe)}const he={name:"carbon-renew",render:ve},fe={class:"slidev-icon",viewBox:"0 0 32 32",width:"1.2em",height:"1.2em"},ge=e("path",{fill:"currentColor",d:"M16 30a14 14 0 1 1 14-14a14 14 0 0 1-14 14Zm0-26a12 12 0 1 0 12 12A12 12 0 0 0 16 4Z"},null,-1),xe=e("path",{fill:"currentColor",d:"M20.59 22L15 16.41V7h2v8.58l5 5.01L20.59 22z"},null,-1),we=[ge,xe];function ye(a,l){return d(),k("svg",fe,we)}const Se={name:"carbon-time",render:ye},ke="/assets/logo-title-horizontal-96c3c915.png";function Ce(){const a=y(Date.now()),l=L({interval:1e3}),_=h(()=>{const s=(l.value-a.value)/1e3,n=Math.floor(s%60).toString().padStart(2,"0");return`${Math.floor(s/60).toString().padStart(2,"0")}:${n}`});function m(){a.value=l.value}return{timer:_,resetTimer:m}}const be=B({__name:"NoteStatic",props:{class:{type:String,required:!1}},setup(a){const l=a;M(P);const _=h(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.note}),m=h(()=>{var s,n,o;return(o=(n=(s=S.value)==null?void 0:s.meta)==null?void 0:n.slide)==null?void 0:o.noteHTML});return(s,n)=>(d(),v(ce,{class:z(l.class),note:t(_),"note-html":t(m)},null,8,["class","note","note-html"]))}}),Te=H(be,[["__file","C:/Users/LynxCatTheThird/web/home/node_modules/@slidev/client/internals/NoteStatic.vue"]]),f=a=>(ne("data-v-574fd206"),a=a(),le(),a),$e={class:"bg-main h-full slidev-presenter"},Ne={class:"grid-container"},Ve={class:"grid-section top flex"},Be=f(()=>e("img",{src:ke,class:"ml-2 my-auto h-10 py-1 lg:h-14 lg:py-2"},null,-1)),Me=f(()=>e("div",{class:"flex-auto"},null,-1)),Pe={class:"text-2xl pl-2 pr-6 my-auto tabular-nums"},ze=f(()=>e("div",{class:"context"}," current ",-1)),He=f(()=>e("div",{class:"context"}," next ",-1)),Le={class:"grid-section note overflow-auto"},De={class:"grid-section bottom"},Ae={class:"progress-bar"},Ie=B({__name:"Presenter",setup(a){M(P);const l=y();D(),A(l);const _=b.titleTemplate.replace("%s",b.title||"Slidev");de({title:`Presenter - ${_}`});const{timer:m,resetTimer:s}=Ce(),n=y([]),o=h(()=>N.value<Z.value?{route:S.value,clicks:N.value+1}:J.value?{route:K.value,clicks:0}:null);return I(()=>{const C=l.value.querySelector("#slide-content"),r=R(U()),g=E();F(()=>{if(!g.value||X.value||!Y.value)return;const c=C.getBoundingClientRect(),i=(r.x-c.left)/c.width*100,p=(r.y-c.top)/c.height*100;if(!(i<0||i>100||p<0||p>100))return{x:i,y:p}},c=>{Q.cursor=c})}),(C,r)=>{const g=Se,c=he;return d(),k(W,null,[e("div",$e,[e("div",Ne,[e("div",Ve,[Be,Me,e("div",{class:"timer-btn my-auto relative w-22px h-22px cursor-pointer text-lg",opacity:"50 hover:100",onClick:r[0]||(r[0]=(...i)=>t(s)&&t(s)(...i))},[u(g,{class:"absolute"}),u(c,{class:"absolute opacity-0"})]),e("div",Pe,j(t(m)),1)]),e("div",{ref_key:"main",ref:l,class:"relative grid-section main flex flex-col p-2 lg:p-4",style:x(t(V))},[u($,{key:"main",class:"h-full w-full"},{default:T(()=>[u(ee,{context:"presenter"})]),_:1}),ze],4),e("div",{class:"relative grid-section next flex flex-col p-2 lg:p-4",style:x(t(V))},[t(o)?(d(),v($,{key:"next",class:"h-full w-full"},{default:T(()=>{var i;return[u(t(se),{is:(i=t(o).route)==null?void 0:i.component,"clicks-elements":n.value,"onUpdate:clicksElements":r[1]||(r[1]=p=>n.value=p),clicks:t(o).clicks,"clicks-disabled":!1,class:z(t(te)(t(o).route)),route:t(o).route,context:"previewNext"},null,8,["is","clicks-elements","clicks","class","route"])]}),_:1})):q("v-if",!0),He],4),e("div",Le,[(d(),v(Te,{key:1,class:"w-full h-full overflow-auto p-2 lg:p-4"}))]),e("div",De,[u(ie,{persist:!0})]),(d(),v(ue,{key:0}))]),e("div",Ae,[e("div",{class:"progress h-2px bg-primary transition-all",style:x({width:`${(t(oe)-1)/(t(ae)-1)*100}%`})},null,4)])]),u(re),u(G,{modelValue:t(w),"onUpdate:modelValue":r[2]||(r[2]=i=>O(w)?w.value=i:null)},null,8,["modelValue"])],64)}}});const je=H(Ie,[["__scopeId","data-v-574fd206"],["__file","C:/Users/LynxCatTheThird/web/home/node_modules/@slidev/client/internals/Presenter.vue"]]);export{je as default};