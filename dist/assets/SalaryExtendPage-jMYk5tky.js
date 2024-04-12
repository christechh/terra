import{T as d}from"./index-7Gt0fBvr.js";import{u as L,p as X,q as A,c as M,s as H,v as J,T as F,y as N,d as O,o as E,i as D,w as s,g as t,e as a,f as l,t as v,h as e,_ as h,G as B,z as V,b as U,n as R,F as q,m as I,l as C,D as P,O as K,P as Q,r as j,C as W,j as Y}from"./index-Ike7Oe7a.js";import{_ as $}from"./FormLabel.vue_vue_type_script_setup_true_lang-DWAbhv1F.js";import{_ as Z}from"./FormDatepicker.vue_vue_type_script_setup_true_lang-jpijDMMK.js";import{u as ee}from"./useUser-dtGdUi1a.js";function te(f){const{companyId:c}=L(),u=X({companyId:c.value??1,userId:"1",type:"PLUS",name:"",description:"",amount:0,yearMonth:""}),{userId:w,type:m,name:p,description:b,amount:x,yearMonth:y}=A(u),k=M(()=>!!f);H(()=>{const S={};if(f){const n={...f,...S};Object.keys(u).forEach(i=>{n[i]!==void 0&&(u[i]=n[i])})}});const g=M(()=>w.value!==""&&m.value!==""&&p.value!==""&&x.value.toString()!==""&&x.value>=0&&y.value!=="");return{companyId:c,userId:w,type:m,name:p,description:b,amount:x,yearMonth:y,canSubmit:g,isEdit:k,submit:async(S,n)=>{const i=S?"update":"create";console.log(i),await{create:()=>N.post("/salary/salary-extend",{...u}),update:()=>N.patch(`/salary/salary-extend/${f.id}`,{...u,id:f.id})}[i](),J().showSaveSuccess(),n(),F().fetchSalaryExtendList({companyId:c.value??1,page:1})}}}const se={class:"relative mb-5 text-center text-xl"},ae={class:"mb-4 flex items-center"},le=["value"],oe={class:"mb-4 flex items-center"},de={class:"mb-4 flex items-center"},ne={class:"mb-4 flex items-center"},re={class:"mb-4 flex items-center"},ie=a("option",{value:"PLUS"},"加項",-1),ce=a("option",{value:"MINUS"},"減項",-1),ue={class:"mb-4 flex items-center"},me={class:"flex justify-center"},pe=O({__name:"CreateSalaryExtendModal",props:{salaryExtend:{},idx:{}},emits:["close"],setup(f,{emit:c}){const{companyId:u}=L(),{users:w}=ee(u.value??1),m=c,{salaryExtend:p}=f,{userId:b,name:x,description:y,type:k,amount:g,yearMonth:T,canSubmit:S,isEdit:n,submit:i}=te(p);return(_,o)=>(E(),D(e(P),{open:!0,size:"md"},{default:s(()=>[t(e(P).Panel,{class:"p-4 md:w-[600px]"},{default:s(()=>[a("div",se,[l(v(e(n)?"編輯科別加減項":"新增科別加減項")+" ",1),t(e(h),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:o[0]||(o[0]=()=>m("close"))})]),a("section",null,[a("div",ae,[t(e($),{class:"w-[120px]"},{default:s(()=>[l("選擇員工 *")]),_:1}),t(e(B),{class:"flex-1",type:"text",modelValue:e(b),"onUpdate:modelValue":o[1]||(o[1]=r=>V(b)?b.value=r:null)},{default:s(()=>[(E(!0),U(q,null,R(e(w),(r,G)=>(E(),U("option",{key:G,value:r.id},v(r.name),9,le))),128))]),_:1},8,["modelValue"])]),a("div",oe,[t(e($),{class:"w-[120px]"},{default:s(()=>[l("薪資年月 *")]),_:1}),t(e(Z),{class:"flex-1",modelValue:e(T),"onUpdate:modelValue":o[2]||(o[2]=r=>V(T)?T.value=r:null),"month-picker":"","auto-apply":""},null,8,["modelValue"])]),a("div",de,[t(e($),{class:"w-[120px]"},{default:s(()=>[l("薪資科目 *")]),_:1}),t(e(I),{class:"flex-1",type:"text",modelValue:e(x),"onUpdate:modelValue":o[3]||(o[3]=r=>V(x)?x.value=r:null)},null,8,["modelValue"])]),a("div",ne,[t(e($),{class:"w-[120px]"},{default:s(()=>[l("金額 *")]),_:1}),t(e(I),{class:"flex-1",type:"number",min:"0",step:"1",modelValue:e(g),"onUpdate:modelValue":o[4]||(o[4]=r=>V(g)?g.value=r:null),onkeyup:"value=value.replace(/^(0+)|[^\\d]+/g,'')"},null,8,["modelValue"])]),a("div",re,[t(e($),{class:"w-[120px]"},{default:s(()=>[l("加減項 *")]),_:1}),t(e(B),{class:"flex-1",type:"text",modelValue:e(k),"onUpdate:modelValue":o[5]||(o[5]=r=>V(k)?k.value=r:null)},{default:s(()=>[ie,ce]),_:1},8,["modelValue"])]),a("div",ue,[t(e($),{class:"w-[120px]"},{default:s(()=>[l("備註")]),_:1}),t(e(I),{class:"flex-1",type:"text",modelValue:e(y),"onUpdate:modelValue":o[6]||(o[6]=r=>V(y)?y.value=r:null)},null,8,["modelValue"])]),a("div",me,[t(e(C),{class:"mr-2 flex-1",variant:"primary",onClick:o[7]||(o[7]=()=>e(i)(e(n),()=>m("close"))),disabled:!e(S)},{default:s(()=>[l(v(e(n)?"儲存":"新增"),1)]),_:1},8,["disabled"])])])]),_:1})]),_:1}))}});function z(f){const c=F(),{fetchSalaryExtendList:u}=c,w=M(()=>c.salaryExtend),m=(p,b)=>{K().showModal({deleteType:"salaryExtend",title:Q.global.t("delete-alert-title"),content:"確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增",deleteData:{companyId:p,id:b}})};return u({companyId:f,page:1}),{salaryExtendList:w,confirmDeleteSalaryExtend:m,fetchSalaryExtendList:u}}const _e={class:"flex justify-between"},fe={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},xe={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},be={class:"relative text-slate-500"},ve={class:"mt-5 grid grid-cols-12 gap-6"},we={class:"intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"},ye={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},he={class:"relative text-slate-500"},ke={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ge={class:"relative text-slate-500"},Se={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},Ce={class:"relative text-slate-500"},Ee={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},Te={class:"relative text-slate-500"},Ve={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},$e={class:"font-medium"},Ie={class:"font-medium"},Me={class:"font-medium"},Ue={class:"font-medium"},De={class:"font-medium"},Le={class:"font-medium"},Ne={class:"flex items-center justify-center"},Oe=O({__name:"SalaryExtendPage",setup(f){const{companyId:c}=L(),{salaryExtendList:u,confirmDeleteSalaryExtend:w}=z(c.value??1),m=j(!1),p=j(-1);W(c,()=>{z(c.value??1)});const b=M(()=>u.value[p.value]||null),x=n=>{p.value=-1,n!==void 0&&(p.value=n),m.value=!0},y=()=>{console.log("onExportSalaryExtendClick")},k=()=>{console.log("onImportButtonClick")},g=()=>{console.log("onDownloadImportExampleClick")},T=n=>{w(c.value??1,n)},S=n=>({PLUS:"加項",MINUS:"減項"})[n]||"null";return(n,i)=>(E(),U("div",null,[a("div",_e,[a("div",fe,[a("div",xe,[a("div",be,[t(e(I),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),t(e(h),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])])]),a("div",ve,[a("div",we,[a("div",ye,[a("div",he,[t(e(C),{variant:"primary",type:"button",class:"m-3",onClick:i[0]||(i[0]=_=>x())},{default:s(()=>[t(e(h),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 新增薪資加減項 ")]),_:1})])]),a("div",ke,[a("div",ge,[t(e(C),{variant:"primary",type:"button",class:"m-3",disabled:"",onClick:k},{default:s(()=>[t(e(h),{icon:"Upload",class:"mr-1 h-4 w-4"}),l(" 匯入薪資加減項 ")]),_:1})])]),a("div",Se,[a("div",Ce,[t(e(C),{variant:"primary",type:"button",class:"m-3",disabled:"",onClick:y},{default:s(()=>[t(e(h),{icon:"Download",class:"mr-1 h-4 w-4"}),l(" 匯出薪資加減項 ")]),_:1})])]),a("div",Ee,[a("div",Te,[t(e(C),{variant:"danger",type:"button",class:"m-3",disabled:"",onClick:g},{default:s(()=>[t(e(h),{icon:"Download",class:"mr-1 h-4 w-4"}),l(" 薪資加減項匯入範例 ")]),_:1})])])]),a("div",Ve,[t(e(d),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:s(()=>[t(e(d).Thead,null,{default:s(()=>[t(e(d).Tr,null,{default:s(()=>[t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l(" 員工編號 ")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l("姓名")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l(" 薪資年月 ")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l("薪資科目")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l("金額")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l("加減項")]),_:1}),t(e(d).Th,{class:"whitespace-nowrap border-b-0"},{default:s(()=>[l("動作")]),_:1})]),_:1})]),_:1}),t(e(d).Tbody,null,{default:s(()=>[(E(!0),U(q,null,R(e(u),(_,o)=>(E(),D(e(d).Tr,{key:o,class:"intro-x"},{default:s(()=>[t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",$e,v(_.employeeId),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Ie,v(_.userName),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Me,v(_.yearMonth),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Ue,v(_.name),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",De,v(_.amount),1)]),_:2},1024),t(e(d).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:s(()=>[a("div",Le,v(S(_.type)),1)]),_:2},1024),t(e(d).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:s(()=>[a("div",Ne,[t(e(C),{variant:"primary",type:"button",class:"m-3 w-20",onClick:r=>x(o)},{default:s(()=>[t(e(h),{icon:"Edit",class:"mr-1 h-4 w-4"}),l(" 修改 ")]),_:2},1032,["onClick"]),t(e(C),{variant:"danger",type:"button",class:"m-3 w-20",onClick:r=>T(_.id)},{default:s(()=>[t(e(h),{icon:"Trash",class:"mr-1 h-4 w-4"}),l(" 刪除 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),m.value?(E(),D(e(pe),{key:0,salaryExtend:b.value,onClose:i[1]||(i[1]=_=>m.value=!1),idx:p.value},null,8,["salaryExtend","idx"])):Y("",!0)]))}});export{Oe as default};