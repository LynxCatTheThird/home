import{h as d,j as p,k as u,m as s,at as l,ak as r,al as c,q as i,_ as m}from"./nav-54ea99da.js";const k=["innerHTML"],y=["textContent"],f=["textContent"],v=d({__name:"NoteDisplay",props:{class:{type:String,required:!1},noteHtml:{type:String,required:!1},note:{type:String,required:!1},placeholder:{type:String,required:!1}},emits:["click"],setup(t){const n=t;return p(u),(o,e)=>t.noteHtml?(i(),s("div",{key:0,class:l(["prose overflow-auto outline-none",n.class]),onClick:e[0]||(e[0]=a=>o.$emit("click")),innerHTML:t.noteHtml},null,10,k)):t.note?(i(),s("div",{key:1,class:l(["prose overflow-auto outline-none",n.class]),onClick:e[1]||(e[1]=a=>o.$emit("click"))},[r("p",{textContent:c(t.note)},null,8,y)],2)):(i(),s("div",{key:2,class:l(["prose overflow-auto outline-none opacity-50 italic",n.class]),onClick:e[2]||(e[2]=a=>o.$emit("click"))},[r("p",{textContent:c(n.placeholder||"No notes.")},null,8,f)],2))}}),x=m(v,[["__file","C:/Users/LynxCatTheThird/web/home/node_modules/@slidev/client/internals/NoteDisplay.vue"]]);export{x as N};