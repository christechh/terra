import{T as d}from"./index-hO9Hz3qR.js";import{p as q,q as z,c as I,s as O,v as X,P as j,y as N,d as A,o as C,i as L,w as s,f as t,e as a,g as o,t as w,h as e,l as y,E as B,A as E,b as M,n as F,F as R,m as $,_ as S,D as P,L as G,M as H,r as U,j as J}from"./index-gJgnG53e.js";import{_ as T}from"./FormLabel.vue_vue_type_script_setup_true_lang-FtTE1i6h.js";import{_ as K}from"./FormDatepicker.vue_vue_type_script_setup_true_lang-6d158fgj.js";import{u as Q}from"./useUser-1RWIge6k.js";function W(m){const u=q({companyId:"1",userId:"1",type:"PLUS",name:"",description:"",amount:0,yearMonth:""}),{companyId:f,userId:x,type:p,name:i,description:b,amount:_,yearMonth:h}=z(u),k=I(()=>!!m);O(()=>{const v={};if(m){const r={...m,...v};Object.keys(u).forEach(c=>{r[c]!==void 0&&(u[c]=r[c])})}});const g=I(()=>x.value!==""&&p.value!==""&&i.value!==""&&_.value.toString()!==""&&_.value>=0&&h.value!=="");return{companyId:f,userId:x,type:p,name:i,description:b,amount:_,yearMonth:h,canSubmit:g,isEdit:k,submit:async(v,r)=>{const c=v?"update":"create";console.log(c),await{create:()=>N.post("/salary/salary-extend",{...u}),update:()=>N.patch(`/salary/salary-extend/${m.id}`,{...u,id:m.id})}[c](),X().showSaveSuccess(),r(),j().fetchSalaryExtendList({companyId:"1",page:1})}}}const Y={class:"relative mb-5 text-center text-xl"},Z={class:"mb-4 flex items-center"},ee=["value"],te={class:"mb-4 flex items-center"},se={class:"mb-4 flex items-center"},ae={class:"mb-4 flex items-center"},le={class:"mb-4 flex items-center"},oe=a("option",{value:"PLUS"},"加項",-1),de=a("option",{value:"MINUS"},"減項",-1),ne={class:"mb-4 flex items-center"},re={class:"flex justify-center"},ie=A({__name:"CreateSalaryExtendModal",props:{salaryExtend:{},idx:{}},emits:["close"],setup(m,{emit:u}){const{users:f}=Q(),x=u,{salaryExtend:p}=m,{userId:i,name:b,description:_,type:h,amount:k,yearMonth:g,canSubmit:V,isEdit:v,submit:r}=W(p);return(c,l)=>(C(),L(e(P),{open:!0,size:"md"},{default:s(()=>[t(e(P).Panel,{class:"p-4 md:w-[600px]"},{default:s(()=>[a("div",Y,[o(w(e(v)?"編輯科別加減項":"新增科別加減項")+" ",1),t(e(y),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:l[0]||(l[0]=()=>x("close"))})]),a("section",null,[a("div",Z,[t(e(T),{class:"w-[120px]"},{default:s(()=>[o("選擇員工 *")]),_:1}),t(e(B),{class:"flex-1",type:"text",modelValue:e(i),"onUpdate:modelValue":l[1]||(l[1]=n=>E(i)?i.value=n:null)},{default:s(()=>[(C(!0),M(R,null,F(e(f),(n,D)=>(C(),M("option",{key:D,value:n.id},w(n.name),9,ee))),128))]),_:1},8,["modelValue"])]),a("div",te,[t(e(T),{class:"w-[120px]"},{default:s(()=>[o("薪資年月 *")]),_:1}),t(e(K),{class:"flex-1",modelValue:e(g),"onUpdate:modelValue":l[2]||(l[2]=n=>E(g)?g.value=n:null),"month-picker":"","auto-apply":""},null,8,["modelValue"])]),a("div",se,[t(e(T),{class:"w-[120px]"},{default:s(()=>[o("薪資科目 *")]),_:1}),t(e($),{class:"flex-1",type:"text",modelValue:e(b),"onUpdate:modelValue":l[3]||(l[3]=n=>E(b)?b.value=n:null)},null,8,["modelValue"])]),a("div",ae,[t(e(T),{class:"w-[120px]"},{default:s(()=>[o("金額 *")]),_:1}),t(e($),{class:"flex-1",type:"number",min:"0",step:"1",modelValue:e(k),"onUpdate:modelValue":l[4]||(l[4]=n=>E(k)?k.value=n:null),onkeyup:"value=value.replace(/^(0+)|[^\\d]+/g,'')"},null,8,["modelValue"])]),a("div",le,[t(e(T),{class:"w-[120px]"},{default:s(()=>[o("加減項 *")]),_:1}),t(e(B),{class:"flex-1",type:"text",modelValue:e(h),"onUpdate:modelValue":l[5]||(l[5]=n=>E(h)?h.value=n:null)},{default:s(()=>[oe,de]),_:1},8,["modelValue"])]),a("div",ne,[t(e(T),{class:"w-[120px]"},{default:s(()=>[o("備註")]),_:1}),t(e($),{class:"flex-1",type:"text",modelValue:e(_),"onUpdate:modelValue":l[6]||(l[6]=n=>E(_)?_.value=n:null)},null,8,["modelValue"])]),a("div",re,[t(e(S),{class:"mr-2 flex-1",variant:"primary",onClick:l[7]||(l[7]=()=>e(r)(e(v),()=>x("close"))),disabled:!e(V)},{default:s(()=>[o(w(e(v)?"儲存":"新增"),1)]),_:1},8,["disabled"])])])]),_:1})]),_:1}))}});function ce(m){const u=j(),{fetchSalaryExtendList:f}=u,x=I(()=>u.salaryExtend),p=(i,b)=>{G().showModal({deleteType:"salaryExtend",title:H.global.t("delete-alert-title"),content:"確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增",deleteData:{companyId:i,id:b}})};return f({companyId:m,page:1}),{salaryExtendList:x,confirmDeleteSalaryExtend:p,fetchSalaryExtendList:f}}const ue={class:"flex justify-between"},me={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},pe={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},_e={class:"relative text-slate-500"},fe={class:"mt-5 grid grid-cols-12 gap-6"},xe={class:"intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"},be={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ve={class:"relative text-slate-500"},we={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},he={class:"relative text-slate-500"},ye={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ke={class:"relative text-slate-500"},ge={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},Se={class:"relative text-slate-500"},Ce={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},Ee={class:"font-medium"},Te={class:"font-medium"},Ve={class:"font-medium"},$e={class:"font-medium"},Ie={class:"font-medium"},Me={class:"font-medium"},De={class:"flex items-center justify-center"},je=A({__name:"SalaryExtendPage",setup(m){const u=U(1),{salaryExtendList:f,confirmDeleteSalaryExtend:x}=ce("1"),p=U(!1),i=U(-1),b=I(()=>f.value[i.value]||null),_=r=>{i.value=-1,r!==void 0&&(i.value=r),p.value=!0},h=()=>{console.log("onExportSalaryExtendClick")},k=()=>{console.log("onImportButtonClick")},g=()=>{console.log("onDownloadImportExampleClick")},V=r=>{x(u.value,r)},v=r=>({PLUS:"加項",MINUS:"減項"})[r]||"null";return(r,c)=>(C(),M("div",null,[a("div",ue,[a("div",me,[a("div",pe,[a("div",_e,[t(e($),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),t(e(y),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])])]),a("div",fe,[a("div",xe,[a("div",be,[a("div",ve,[t(e(S),{variant:"primary",type:"button",class:"m-3",onClick:c[0]||(c[0]=l=>_())},{default:s(()=>[t(e(y),{icon:"Plus",class:"mr-1 h-4 w-4"}),o(" 新增薪資加減項 ")]),_:1})])]),a("div",we,[a("div",he,[t(e(S),{variant:"primary",type:"button",class:"m-3",disabled:"",onClick:k},{default:s(()=>[t(e(y),{icon:"Upload",class:"mr-1 h-4 w-4"}),o(" 匯入薪資加減項 ")]),_:1})])]),a("div",ye,[a("div",ke,[t(e(S),{variant:"primary",type:"button",class:"m-3",disabled:"",onClick:h},{default:s(()=>[t(e(y),{icon:"Download",class:"mr-1 h-4 w-4"}),o(" 匯出薪資加減項 ")]),_:1})])]),a("div",ge,[a("div",Se,[t(e(S),{variant:"danger",type:"button",class:"m-3",disabled:"",onClick:g},{default:s(()=>[t(e(y),{icon:"Download",class:"mr-1 h-4 w-4"}),o(" 薪資加減項匯入範例 ")]),_:1})])])]),a("div",Ce,[t(e(d),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:s(()=>[t(e(d).Thead,null,{default:s(()=>[t(e(d).Tr,null,{default:s(()=>[t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o(" 員工編號 ")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("姓名")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o(" 薪資年月 ")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("薪資科目")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("金額")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("加減項")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[o("動作")]),_:1})]),_:1})]),_:1}),t(e(d).Tbody,null,{default:s(()=>[(C(!0),M(R,null,F(e(f),(l,n)=>(C(),L(e(d).Tr,{key:n,class:"intro-x"},{default:s(()=>[t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Ee,w(l.employeeId),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Te,w(l.userName),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Ve,w(l.yearMonth),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",$e,w(l.name),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Ie,w(l.amount),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Me,w(v(l.type)),1)]),_:2},1024),t(e(d).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:s(()=>[a("div",De,[t(e(S),{variant:"primary",type:"button",class:"m-3 w-20",onClick:D=>_(n)},{default:s(()=>[t(e(y),{icon:"Edit",class:"mr-1 h-4 w-4"}),o(" 修改 ")]),_:2},1032,["onClick"]),t(e(S),{variant:"danger",type:"button",class:"m-3 w-20",onClick:D=>V(l.id)},{default:s(()=>[t(e(y),{icon:"Trash",class:"mr-1 h-4 w-4"}),o(" 刪除 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),p.value?(C(),L(e(ie),{key:0,salaryExtend:b.value,onClose:c[1]||(c[1]=l=>p.value=!1),idx:i.value},null,8,["salaryExtend","idx"])):J("",!0)]))}});export{je as default};
