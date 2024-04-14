import{g as f,V as p,b as c,a0 as C,o as l,c as d,X as i,Y as u,q as r,Z as m,T as _,W as g,h as x,m as $,s as B,y as A,_ as w}from"./index-oBWQfhjf.js";import{_ as S}from"./_plugin-vue_export-helper-x3n3nnut.js";const K=f({inheritAttrs:!1,name:"CTable",__name:"Table",props:{dark:{type:Boolean,default:!1},bordered:{type:Boolean,default:!1},hover:{type:Boolean,default:!1},striped:{type:Boolean,default:!1},sm:{type:Boolean,default:!1}},emits:["sort"],setup(o,{emit:e}){const{dark:t,bordered:s,hover:a,striped:n,sm:b}=o,y=e,h=p(),T=c(()=>_(["w-full text-left c-table",t&&"bg-dark text-white dark:bg-black/30",typeof h.class=="string"&&h.class]));return C("table",{dark:t,bordered:s,hover:a,striped:n,sm:b,onSort:(v,k)=>{y("sort",{key:v,order:k})}}),(v,k)=>(l(),d("table",u({class:T.value},r(m).omit(r(h),"class")),[i(v.$slots,"default")],16))}}),V=f({inheritAttrs:!1,__name:"Thead",props:{variant:{default:"default"}},setup(o){const e=o,t=p(),s=c(()=>_([e.variant==="light"&&"bg-slate-200/60 dark:bg-slate-200",e.variant==="dark"&&"bg-dark text-white dark:bg-black/30",typeof t.class=="string"&&t.class]));return C("thead",{variant:e.variant}),(a,n)=>(l(),d("thead",u({class:s.value},r(m).omit(r(t),"class")),[i(a.$slots,"default")],16))}}),j=f({inheritAttrs:!1,__name:"Tfoot",props:{variant:{default:"default"}},setup(o){const e=o,t=p(),s=c(()=>_([e.variant==="light"&&"bg-slate-200/60 dark:bg-slate-200",e.variant==="dark"&&"bg-dark text-white dark:bg-black/30",typeof t.class=="string"&&t.class]));return C("tfoot",{variant:e.variant}),(a,n)=>(l(),d("tfoot",u({class:s.value},r(m).omit(r(t),"class")),[i(a.$slots,"default")],16))}}),N={};function q(o,e){return l(),d("tbody",null,[i(o.$slots,"default")])}const D=S(N,[["render",q]]),E=f({inheritAttrs:!1,__name:"Tr",setup(o){const e=g("table",{dark:!1,bordered:!1,hover:!1,striped:!1,sm:!1}),t=p(),s=c(()=>_([(e==null?void 0:e.hover)&&"[&:hover_td]:bg-slate-100 [&:hover_td]:dark:bg-darkmode-300 [&:hover_td]:dark:bg-opacity-50",(e==null?void 0:e.striped)&&"[&:nth-of-type(odd)_td]:bg-slate-100 [&:nth-of-type(odd)_td]:dark:bg-darkmode-300 [&:nth-of-type(odd)_td]:dark:bg-opacity-50",typeof t.class=="string"&&t.class]));return(a,n)=>(l(),d("tr",u({class:s.value},r(m).omit(r(t),"class")),[i(a.$slots,"default")],16))}}),I={class:"flex justify-center"},M={key:0},O=f({inheritAttrs:!1,name:"CTh",__name:"Th",props:{sortableKey:{}},setup(o){const e=g("table",{dark:!1,bordered:!1,hover:!1,striped:!1,sm:!1}),t=g("thead",{variant:"default"}),s=o,a=p(),n=x(""),b=x(0),y=x(["","asc","desc"]),h=c(()=>_(["font-medium px-5 py-3 border-b-2 dark:border-darkmode-300",(t==null?void 0:t.variant)==="light"&&"border-b-0 text-slate-700",(t==null?void 0:t.variant)==="dark"&&"border-b-0",(e==null?void 0:e.dark)&&"border-slate-600 dark:border-darkmode-300",(e==null?void 0:e.bordered)&&"border-l border-r border-t",(e==null?void 0:e.sm)&&"px-4 py-2",typeof a.class=="string"&&a.class,s.sortableKey&&"cursor-pointer hover:text-primary"])),T=c(()=>n.value==="asc"?"ChevronDown":"ChevronUp"),v=()=>{s.sortableKey&&(b.value=(b.value+1)%y.value.length,n.value=y.value[b.value],e.onSort&&e.onSort(s.sortableKey,n.value))};return(k,U)=>(l(),d("th",u({class:h.value},r(m).omit(r(a),"class"),{onClick:v}),[$("div",I,[i(k.$slots,"default"),k.sortableKey&&n.value?(l(),d("div",M,[B(r(w),{icon:T.value},null,8,["icon"])])):A("",!0)])],16))}}),P=f({inheritAttrs:!1,__name:"Td",setup(o){const e=g("table",{dark:!1,bordered:!1,hover:!1,striped:!1,sm:!1}),t=p(),s=c(()=>_(["px-5 py-3 border-b dark:border-darkmode-300",(e==null?void 0:e.dark)&&"border-slate-600 dark:border-darkmode-300",(e==null?void 0:e.bordered)&&"border-l border-r border-t",(e==null?void 0:e.sm)&&"px-4 py-2",typeof t.class=="string"&&t.class]));return(a,n)=>(l(),d("td",u({class:s.value},r(m).omit(r(t),"class")),[i(a.$slots,"default")],16))}}),Y=Object.assign({},K,{Thead:V,Tfoot:j,Tbody:D,Tr:E,Th:O,Td:P});export{Y as T};
