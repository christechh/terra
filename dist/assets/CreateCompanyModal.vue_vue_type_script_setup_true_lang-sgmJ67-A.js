import{p as w,q as g,c as _,s as S,v as M,x as N,y,d as k,o as z,i as B,w as r,f as l,e as f,g as x,t as v,h as t,l as D,z as E,m as C,A as V,_ as I,D as $}from"./index-gJgnG53e.js";import{_ as h}from"./FormLabel.vue_vue_type_script_setup_true_lang-FtTE1i6h.js";function j(s){const o=w({name:"",taxId:"",enabledModules:[]}),{name:n,taxId:u,enabledModules:i}=g(o),c=_(()=>!!s);S(()=>{const d={};if(s){const a={...s,...d};Object.keys(o).forEach(e=>{a[e]!==void 0&&(o[e]=a[e])})}});const b=_(()=>n.value!==""&&u.value!=="");return{name:n,taxId:u,enabledModules:i,canSubmit:b,isEdit:c,submit:async(d,a)=>{const e=d?"update":"create";console.log(e),await{create:()=>y.post("/company",{...o}),update:()=>y.patch(`/company/${s.id}`,{...o,id:s.id})}[e](),M().showSaveSuccess(),a(),N().fetchCompanies()}}}const R={class:"mb-4 flex items-center"},U={class:"mb-4 flex items-center"},q={class:"flex justify-center"},P=k({__name:"CreateCompanyModal",props:{company:{},idx:{}},emits:["close"],setup(s,{emit:o}){const n=o,{company:u}=s,{name:i,taxId:c,canSubmit:b,isEdit:m,submit:d}=j(u);return(a,e)=>(z(),B(t($),{open:!0,size:"md"},{default:r(()=>[l(t($).Panel,{class:"p-4 md:w-[400px]"},{default:r(()=>[f("div",{class:E(["relative mb-5",t(m)?"text-primary":"text-center text-xl"])},[x(v(t(m)?a.$t("feature-section8-title"):"新增公司")+" ",1),l(t(D),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:e[0]||(e[0]=()=>n("close"))})],2),f("div",R,[l(t(h),{class:"w-[120px]"},{default:r(()=>[x(v(a.$t("sub-account-name")),1)]),_:1}),l(t(C),{class:"flex-1",type:"text",placeholder:a.$t("signup-display-name-placeholder"),modelValue:t(i),"onUpdate:modelValue":e[1]||(e[1]=p=>V(i)?i.value=p:null)},null,8,["placeholder","modelValue"])]),f("div",U,[l(t(h),{class:"w-[120px]"},{default:r(()=>[x("統一編號")]),_:1}),l(t(C),{class:"flex-1",type:"text",placeholder:a.$t("error-message35"),modelValue:t(c),"onUpdate:modelValue":e[2]||(e[2]=p=>V(c)?c.value=p:null)},null,8,["placeholder","modelValue"])]),f("div",q,[l(t(I),{class:"flex-1",disabled:!t(b),variant:"primary",onClick:e[3]||(e[3]=()=>t(d)(t(m),()=>n("close")))},{default:r(()=>[x(v(a.$t("save-btn")),1)]),_:1},8,["disabled"])])]),_:1})]),_:1}))}});export{P as _};
