import{m as g,n as S,c as _,p as h,q as M,s as k,v as y,d as N,o as j,g as B,w as r,f as l,e as f,j as x,t as v,u as t,i as D,x as E,k as C,y as V,_ as I,D as $}from"./index-8VblRAgl.js";import{_ as w}from"./FormLabel.vue_vue_type_script_setup_true_lang-W088hPoC.js";function z(s){const o=g({name:"",taxId:"",enabledModules:[]}),{name:n,taxId:u,enabledModules:i}=S(o),d=_(()=>!!s);h(()=>{const c={};if(s){const a={...s,...c};Object.keys(o).forEach(e=>{a[e]!==void 0&&(o[e]=a[e])})}});const b=_(()=>n.value!==""&&u.value!=="");return{name:n,taxId:u,enabledModules:i,canSubmit:b,isEdit:d,submit:async(c,a)=>{const e=c?"update":"create";console.log(e),await{create:()=>y.post("/company",{...o}),update:()=>y.put(`/company/${s.id}`,{...o,id:s.id})}[e](),M().showSaveSuccess(),a(),k().fetchCompanies()}}}const R={class:"mb-4 flex items-center"},U={class:"mb-4 flex items-center"},q={class:"flex justify-center"},T=N({__name:"CreateCompanyModal",props:{company:{},idx:{}},emits:["close"],setup(s,{emit:o}){const n=o,{company:u}=s,{name:i,taxId:d,canSubmit:b,isEdit:m,submit:c}=z(u);return(a,e)=>(j(),B(t($),{open:!0,size:"md"},{default:r(()=>[l(t($).Panel,{class:"p-4 md:w-[400px]"},{default:r(()=>[f("div",{class:E(["relative mb-5",t(m)?"text-primary":"text-center text-xl"])},[x(v(t(m)?a.$t("feature-section8-title")+(a.idx+1):"新增公司")+" ",1),l(t(D),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:e[0]||(e[0]=()=>n("close"))})],2),f("div",R,[l(t(w),{class:"w-[120px]"},{default:r(()=>[x(v(a.$t("sub-account-name")),1)]),_:1}),l(t(C),{class:"flex-1",type:"text",placeholder:a.$t("signup-display-name-placeholder"),modelValue:t(i),"onUpdate:modelValue":e[1]||(e[1]=p=>V(i)?i.value=p:null)},null,8,["placeholder","modelValue"])]),f("div",U,[l(t(w),{class:"w-[120px]"},{default:r(()=>[x("統一編號")]),_:1}),l(t(C),{class:"flex-1",type:"text",placeholder:a.$t("error-message35"),modelValue:t(d),"onUpdate:modelValue":e[2]||(e[2]=p=>V(d)?d.value=p:null)},null,8,["placeholder","modelValue"])]),f("div",q,[l(t(I),{class:"flex-1",disabled:!t(b),variant:"primary",onClick:e[3]||(e[3]=()=>t(c)(t(m),()=>n("close")))},{default:r(()=>[x(v(a.$t("save-btn")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}))}});export{T as _};
