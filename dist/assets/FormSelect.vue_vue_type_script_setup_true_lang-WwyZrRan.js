import{g as m,V as u,W as p,b as l,o as f,c as b,X as g,Y as y,q as a,Z as _,T as k,K as V,$ as v}from"./index-oBWQfhjf.js";const h=m({inheritAttrs:!1,__name:"FormLabel",setup(n){const e=u(),s=p("formInline",!1),t=l(()=>k(["inline-block mb-2",s&&"mb-2 sm:mb-0 sm:mr-5 sm:text-right",typeof e.class=="string"&&e.class]));return(r,c)=>(f(),b("label",y({class:t.value},a(_).omit(a(e),"class")),[g(r.$slots,"default")],16))}}),I=m({inheritAttrs:!1,__name:"FormSelect",props:{modelValue:{},formSelectSize:{}},emits:["update:modelValue"],setup(n,{emit:e}){const s=n,t=u(),r=p("formInline",!1),c=l(()=>k(["bg-input_bg disabled:bg-slate-100 disabled:cursor-not-allowed disabled:dark:bg-darkmode-800/50","[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50","transition duration-200 ease-in-out w-full text-sm border-slate-200 shadow-sm rounded-md py-2 px-3 pr-8 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50",s.formSelectSize=="sm"&&"text-xs py-1.5 pl-2 pr-8",s.formSelectSize=="lg"&&"text-lg py-1.5 pl-4 pr-8",r&&"flex-1",typeof t.class=="string"&&t.class])),S=e,d=l({get(){return s.modelValue},set(o){S("update:modelValue",o)}});return(o,i)=>V((f(),b("select",y({class:c.value},a(_).omit(a(t),"class"),{"onUpdate:modelValue":i[0]||(i[0]=x=>d.value=x)}),[g(o.$slots,"default")],16)),[[v,d.value]])}});export{h as _,I as a};