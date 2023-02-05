import{h as _,j as d,k as h,ai as p,c as m,aj as u,m as n,ak as t,al as o,z as s,F as f,am as g,an as v,ao as x,q as r,ap as y,aq as b,n as k,ar as N,as as w,_ as P}from"./nav-54ea99da.js";import{N as T}from"./NoteDisplay-375913ec.js";import{u as j}from"./index-0e2eb890.js";const C={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},V={class:"opacity-50"},z={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),q={key:0,class:"border-gray-400/50 mb-8"},F=_({__name:"PresenterPrint",setup(M){d(h),p(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),j({title:`Notes - ${m.title}`});const l=u(()=>x.slice(0,-1).map(a=>{var i;return(i=a.meta)==null?void 0:i.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,i)=>(r(),n("div",{id:"page-root",style:v(s(w))},[t("div",C,[t("div",L,[t("h1",S,o(s(m).title),1),t("div",V,o(new Date().toLocaleString()),1)]),(r(!0),n(f,null,g(s(l),(e,c)=>(r(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",z,[t("div",B,[t("div",D,o(e==null?void 0:e.no)+"/"+o(s(y)),1),b(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(T,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<s(l).length-1?(r(),n("hr",q)):N("v-if",!0)]))),128))])],4))}}),U=P(F,[["__file","C:/Users/LynxCatTheThird/web/home/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{U as default};
