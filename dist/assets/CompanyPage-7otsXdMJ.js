import{d as C,u as $,r as w,c as B,b as x,e as d,f as t,h as e,w as s,g as v,i as N,F as k,o as c,l as S,j as i,k as o,_,m as V,t as b}from"./index-VpZhjMSo.js";import{T as a}from"./index-zpbfB0Kk.js";import{_ as D}from"./CreateCompanyModal.vue_vue_type_script_setup_true_lang-ASXUppYe.js";import"./FormLabel.vue_vue_type_script_setup_true_lang-5wNsczAW.js";const I={class:"mt-5 grid grid-cols-12 gap-6"},j={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},E={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},F={class:"relative text-slate-500"},P={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},A={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},L={class:"relative text-slate-500"},M={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},O={class:"font-medium"},q={class:"font-medium"},z={class:"font-medium"},G=d("div",{class:"font-medium"},null,-1),H=d("div",{class:"font-medium"},null,-1),J=d("div",{class:"font-medium"},null,-1),K=d("div",{class:"font-medium"},null,-1),Q=d("div",{class:"font-medium"},null,-1),R={class:"flex items-center justify-center"},ee=C({__name:"CompanyPage",setup(U){const{companies:p,confirmDeleteCompany:g}=$(),m=w(!1),l=w(-1),y=B(()=>p.value[l.value]||null),f=u=>{l.value=-1,u!==void 0&&(l.value=u),m.value=!0};return(u,n)=>(c(),x(k,null,[d("div",I,[d("div",j,[d("div",E,[d("div",F,[t(e(S),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),t(e(i),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])]),d("div",P,[d("div",A,[d("div",L,[t(e(_),{variant:"primary",type:"button",class:"m-3",onClick:n[0]||(n[0]=()=>f())},{default:s(()=>[t(e(i),{icon:"Plus",class:"mr-1 h-4 w-4"}),o(" 新增公司 ")]),_:1})])])]),d("div",M,[t(e(a),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:s(()=>[t(e(a).Thead,null,{default:s(()=>[t(e(a).Tr,null,{default:s(()=>[t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("ID")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("公司名稱")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("統一編號")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("勞報單")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("財務報表")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("人事管理")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("電子發票")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("財務分析")]),_:1}),t(e(a).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("動作")]),_:1})]),_:1})]),_:1}),t(e(a).Tbody,null,{default:s(()=>[(c(!0),x(k,null,V(e(p),(r,h)=>(c(),v(e(a).Tr,{key:h,class:"intro-x"},{default:s(()=>[t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[d("div",O,b(r.id),1)]),_:2},1024),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[d("div",q,b(r.name),1)]),_:2},1024),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[d("div",z,b(r.taxId),1)]),_:2},1024),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[G]),_:1}),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[H]),_:1}),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[J]),_:1}),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[K]),_:1}),t(e(a).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[Q]),_:1}),t(e(a).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:s(()=>[d("div",R,[t(e(_),{variant:"primary",type:"button",class:"m-3 w-20",onClick:T=>f(h)},{default:s(()=>[t(e(i),{icon:"Edit",class:"mr-1 h-4 w-4"}),o(" 修改 ")]),_:2},1032,["onClick"]),t(e(_),{variant:"danger",type:"button",class:"m-3 w-20",onClick:T=>e(g)(r.id)},{default:s(()=>[t(e(i),{icon:"Trash",class:"mr-1 h-4 w-4"}),o(" 刪除 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),m.value?(c(),v(e(D),{key:0,onClose:n[1]||(n[1]=r=>m.value=!1),company:y.value,idx:l.value},null,8,["company","idx"])):N("",!0)],64))}});export{ee as default};
