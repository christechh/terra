import{I as v,c as k,d as T,u as S,P as I,r as h,H as C,b as w,e as t,g as a,h as e,w as s,o as p,m as G,_ as x,f as d,F as B,n as $,i as E,t as l,l as N}from"./index-BNNQ-ZD2.js";import{T as r}from"./index-l3_pW_kP.js";function y(m,n){const c=v(),{fetchSalaries:i}=c,u=k(()=>c.salaries);return i({companyId:m,salaryGroupId:n,page:1}),{fetchSalaries:i,salaries:u}}const V={class:"flex justify-between"},j={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},F={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},M={class:"relative text-slate-500"},P={class:"mt-5 grid grid-cols-12 gap-6"},D=t("div",{class:"intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"},null,-1),H={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},L={class:"font-medium"},O={class:"font-medium"},R={class:"font-medium"},q={class:"font-medium"},z={class:"font-medium"},A={class:"font-medium"},J={class:"font-medium"},K={class:"flex items-center justify-center"},Y=T({__name:"GroupSalariesPage",setup(m){const{companyId:n}=S(),c=I(),{salaries:i}=y(n.value,c.params.groupId),u=h(!1),b=h(-1);C(n,()=>{y(n.value,c.params.groupId)});const g=_=>{b.value=-1,_!==void 0&&(b.value=_),u.value=!0};return(_,Q)=>(p(),w("div",null,[t("div",V,[t("div",j,[t("div",F,[t("div",M,[a(e(G),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),a(e(x),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])])]),t("div",P,[D,t("div",H,[a(e(r),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:s(()=>[a(e(r).Thead,null,{default:s(()=>[a(e(r).Tr,null,{default:s(()=>[a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("員工編號")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("姓名")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d(" 薪資發放名稱 ")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("薪資年月")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("應發金額")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("應減金額")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("實發金額")]),_:1}),a(e(r).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[d("動作")]),_:1})]),_:1})]),_:1}),a(e(r).Tbody,null,{default:s(()=>[(p(!0),w(B,null,$(e(i)[0]&&e(i)[0].salaries,(o,f)=>(p(),E(e(r).Tr,{key:f,class:"intro-x"},{default:s(()=>[a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",L,l(o.user.employeeId),1)]),_:2},1024),a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",O,l(o.user.name),1)]),_:2},1024),a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",R,l(o.salaryGroup.name),1)]),_:2},1024),a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",q,l(o.salaryGroup.yearMonth),1)]),_:2},1024),a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",z,l(o.salaryGroup.salaryItems),1)]),_:2},1024),a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",A,l(o.salaryGroup.salaryItems),1)]),_:2},1024),a(e(r).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[t("div",J,l(o.salaryGroup.salaryItems),1)]),_:2},1024),a(e(r).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:s(()=>[t("div",K,[a(e(N),{variant:"primary",type:"button",class:"m-3 w-24",onClick:U=>g(f),disabled:""},{default:s(()=>[a(e(x),{icon:"Eye",class:"mr-1 h-4 w-4"}),d(" 查看 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])])]))}});export{Y as default};
