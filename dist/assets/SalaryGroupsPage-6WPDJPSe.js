import{G as ee,r as j,n as Z,p as pe,q as le,c as I,x as oe,s as O,d as ae,o as u,i as y,w as t,g as a,e as s,f as l,h as e,_ as G,H as Q,I as W,l as ne,k as S,b as C,j as U,F as V,m as E,t as d,J as q,y as re,D as X,C as me,K as _e,L as fe,M as ve,a as he}from"./index-xbrZr5yp.js";import{T as o}from"./index-aNXz6pB6.js";import{_ as L}from"./FormLabel.vue_vue_type_script_setup_true_lang-azPn_ecF.js";import{_ as A}from"./FormDatepicker.vue_vue_type_script_setup_true_lang-b70DNpH5.js";function we(){const{fetchCalculateSalaries:p}=ee();return{loading:j(!1),fetchData:async(x,v)=>{console.log("payload",x);const h=await p(x);console.log("fetchCalculateSalaries response",h),v(h.data)}}}function ye(){const p=Z({companyId:"",name:"",yearMonth:"",startDate:"",endDate:"",paymentDate:"",salaries:[]}),D=pe(p),_=j(!1);le(()=>{});const x=I(()=>p.yearMonth&&p.startDate&&p.endDate&&p.paymentDate&&p.name&&p.companyId);return{payloadRefs:D,canSubmit:x,createSalaryGroup:async h=>{try{const T={...p};if(console.log("requestPayload",T),T.salaries=T.salaries.map(N=>({userId:N.user.id,salaryItems:N.salaryItems.map($=>({name:$.title,amount:$.amount,type:String($.type).toUpperCase()}))})),_.value=!0,(await oe.post("/salary/salary-group",T)).data.id)O().showSaveSuccess(),h();else throw Error("id not found")}catch(T){T instanceof Error&&console.log("[Debug] error",T.message),O().showSaveError()}finally{_.value=!1}},loading:_}}const be={class:"relative mb-5 text-center text-xl"},xe={class:"mb-4 flex items-center"},ge={class:"mb-4 flex items-center"},ke={class:"mb-4 flex items-center"},Se={class:"mb-4 flex items-center"},Te={class:"mb-4 flex items-center"},Ce={class:"flex justify-center"},De={key:0,class:"flex justify-center p-10"},$e={class:"max-h-[70vh] overflow-x-auto overflow-y-auto"},Me={class:"border p-5 text-right"},Ge={class:"mt-5 flex justify-center"},Ve={class:"flex flex-col gap-3 p-5 text-base"},Ne={class:"flex items-center justify-between"},Ye=s("span",null,"薪資年月：",-1),Ee={class:"flex items-center justify-between"},je=s("span",null,"薪資發放名稱：",-1),Ke={class:"flex items-center justify-between"},Be=s("span",null,"計算區間：",-1),Pe={class:"flex items-center justify-between"},ze=s("span",null,"發薪人數：",-1),Le={class:"flex items-center justify-between"},Ue=s("span",null,"應發總額：",-1),Ie={class:"flex items-center justify-between"},Re=s("span",null,"應減總額：",-1),qe={class:"flex items-center justify-between"},Fe=s("span",null,"實發總額：",-1),Ae={class:"mt-5 flex justify-center"},Oe=ae({__name:"CreateSalaryGroupModal",props:{companyId:{}},emits:["close"],setup(p,{emit:D}){const _=D,x=p,{fetchData:v,loading:h}=we(),{createSalaryGroup:T,payloadRefs:r,canSubmit:N,loading:$}=ye(),w=j("form"),g=Z({value:[]}),b=Z({value:[]}),i=I(()=>{const Y=new Set,c=new Set,n=new Set,k=new Set;let te=0,se=0,J=0;const ie=g.value.map(({salaryItems:R,user:m})=>{let B=0,K=0,P=0;const z={};return R.forEach(f=>{switch(f.type==="plus"&&c.add(f.name),f.type==="minus"&&n.add(f.name),f.type==="normal"&&Y.add(f.name),f.type==="company"&&k.add(f.name),z[f.name]=Number(z[f.name]||0)+Number(f.amount),f.type){case"NORMAL":case"PLUS":B+=Number(f.amount),P+=Number(f.amount),te+=Number(f.amount),J+=Number(f.amount);break;case"MINUS":K+=Number(f.amount),P-=Number(f.amount),se+=Number(f.amount),J-=Number(f.amount);break}}),{id:m==null?void 0:m.id,name:m==null?void 0:m.name,employee_id:m==null?void 0:m.employee_id,onboard_date:m==null?void 0:m.onboard_date,resignation_date:m==null?void 0:m.resignation_date,salary_type:m==null?void 0:m.salary_type,plusSalary:B,minusSalary:K,netSalary:P,...z}}).sort((R,m)=>{for(let B=0;B<b.value.length;B++){const K=b.value[B],P=(R==null?void 0:R[K.key])??0,z=(m==null?void 0:m[K.key])??0;if(P<z)return K.order==="asc"?-1:1;if(P>z)return K.order==="asc"?1:-1}return 0});return{normalCols:Y,plusCols:c,minusCols:n,companyCols:k,result:ie,totalPlusSalary:te,totalMinusSalary:se,totalNetSalary:J}}),M=I(()=>r.companyId.value&&r.yearMonth.value&&r.startDate.value&&r.endDate.value&&r.paymentDate.value),H=async()=>{const Y={companyId:r.companyId.value,yearMonth:r.yearMonth.value,startDate:r.startDate.value,endDate:r.endDate.value};await v(Y,c=>{g.value=c,w.value="table"})},F=Y=>{w.value=Y},de=()=>{w.value="result",r.salaries.value=g.value},ue=()=>{N&&T(()=>{_("close"),ee().fetchSalaryGroups({companyId:Number(r.companyId.value),page:0})})},ce=({key:Y,order:c})=>{console.log(Y,c);const n=b.value.findIndex(k=>k.key===Y);n!==-1?c===""?b.value.splice(n,1):b.value[n].order=c:b.value.push({key:Y,order:c})};return le(()=>{r.companyId.value=String(x.companyId)}),(Y,c)=>(u(),y(e(X),{open:!0,size:"md"},{default:t(()=>[a(e(X).Panel,{class:re(["p-4",[{"md:w-[400px]":["form","result"].includes(w.value),"max-w-[1200px] md:w-[80vw]":w.value==="table"}]])},{default:t(()=>[s("div",be,[l(" 薪資計算 "),a(e(G),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:c[0]||(c[0]=()=>_("close"))})]),Q(s("section",null,[s("div",xe,[a(e(L),{class:"w-[120px]"},{default:t(()=>[l("薪資發放名稱")]),_:1}),a(e(ne),{class:"flex-1",type:"text",modelValue:e(r).name.value,"onUpdate:modelValue":c[1]||(c[1]=n=>e(r).name.value=n)},null,8,["modelValue"])]),s("div",ge,[a(e(L),{class:"w-[120px]"},{default:t(()=>[l("薪資年月")]),_:1}),a(A,{class:"flex-1",modelValue:e(r).yearMonth.value,"onUpdate:modelValue":c[2]||(c[2]=n=>e(r).yearMonth.value=n),"month-picker":"","auto-apply":""},null,8,["modelValue"])]),s("div",ke,[a(e(L),{class:"w-[120px]"},{default:t(()=>[l("起始日")]),_:1}),a(A,{class:"flex-1",modelValue:e(r).startDate.value,"onUpdate:modelValue":c[3]||(c[3]=n=>e(r).startDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",Se,[a(e(L),{class:"w-[120px]"},{default:t(()=>[l("結束日")]),_:1}),a(A,{class:"flex-1",modelValue:e(r).endDate.value,"onUpdate:modelValue":c[4]||(c[4]=n=>e(r).endDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",Te,[a(e(L),{class:"w-[120px]"},{default:t(()=>[l("發薪日")]),_:1}),a(A,{class:"flex-1",modelValue:e(r).paymentDate.value,"onUpdate:modelValue":c[5]||(c[5]=n=>e(r).paymentDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",Ce,[a(e(S),{class:"mr-2 flex-1",variant:"primary",onClick:H,loading:e(h),disabled:e(h)||!M.value},{default:t(()=>[l(" 下一步 ")]),_:1},8,["loading","disabled"]),a(e(S),{class:"flex-1",variant:"primary",onClick:c[6]||(c[6]=()=>_("close"))},{default:t(()=>[l(" 關閉 ")]),_:1})])],512),[[W,w.value==="form"]]),Q(s("section",null,[g.value.length===0?(u(),C("div",De," 查無資料 ")):(u(),C(V,{key:1},[s("div",$e,[a(e(o),{bordered:"",onSort:ce},{default:t(()=>[a(e(o).Thead,null,{default:t(()=>[a(e(o).Tr,null,{default:t(()=>[a(e(o).Th,{class:"whitespace-nowrap",colspan:"5"}),i.value.normalCols.size>0?(u(),y(e(o).Th,{key:0,class:"whitespace-nowrap",colspan:i.value.normalCols.size},{default:t(()=>[l(" 薪資結構 ")]),_:1},8,["colspan"])):U("",!0),i.value.plusCols.size>0?(u(),y(e(o).Th,{key:1,class:"whitespace-nowrap",colspan:i.value.plusCols.size},{default:t(()=>[l(" 薪資科目加項 ")]),_:1},8,["colspan"])):U("",!0),i.value.minusCols.size>0?(u(),y(e(o).Th,{key:2,class:"whitespace-nowrap",colspan:i.value.minusCols.size},{default:t(()=>[l(" 薪資科目減項 ")]),_:1},8,["colspan"])):U("",!0),a(e(o).Th,{class:"whitespace-nowrap",colspan:"3"}),i.value.companyCols.size>0?(u(),y(e(o).Th,{key:3,class:"whitespace-nowrap",colspan:i.value.companyCols.size},{default:t(()=>[l(" 公司負擔 ")]),_:1},8,["colspan"])):U("",!0)]),_:1}),a(e(o).Tr,null,{default:t(()=>[a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("員工編號")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("姓名")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("到職日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("離職日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("計薪方式")]),_:1}),(u(!0),C(V,null,E(i.value.normalCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128)),(u(!0),C(V,null,E(i.value.plusCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128)),(u(!0),C(V,null,E(i.value.minusCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128)),a(e(o).Th,{class:"whitespace-nowrap",sortableKey:"plusSalary"},{default:t(()=>[l("應發金額")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap",sortableKey:"minusSalary"},{default:t(()=>[l("應減金額")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap",sortableKey:"netSalary"},{default:t(()=>[l("實發金額")]),_:1}),(u(!0),C(V,null,E(i.value.companyCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128))]),_:1})]),_:1}),a(e(o).Tbody,null,{default:t(()=>[(u(!0),C(V,null,E(i.value.result,n=>(u(),y(e(o).Tr,{key:`employSalary_${n.id}`},{default:t(()=>[a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.employee_id),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.name),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.onboard_date)+" "+d(n.onboard_date?e(q)(n.onboard_date).format("YYYY-MM-DD"):"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.resignation_date?e(q)(n.resignation_date).format("YYYY-MM-DD"):"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.salary_type),1)]),_:2},1024),(u(!0),C(V,null,E(i.value.normalCols.values(),k=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${k}`},{default:t(()=>[l(d(n[k]??"--"),1)]),_:2},1024))),128)),(u(!0),C(V,null,E(i.value.plusCols.values(),k=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${k}`},{default:t(()=>[l(d(n[k]??"--"),1)]),_:2},1024))),128)),(u(!0),C(V,null,E(i.value.minusCols.values(),k=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${k}`},{default:t(()=>[l(d(n[k]??"--"),1)]),_:2},1024))),128)),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.plusSalary??"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.minusSalary??"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.netSalary??"--"),1)]),_:2},1024),(u(!0),C(V,null,E(i.value.companyCols.values(),k=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${k}`},{default:t(()=>[l(d(n[k]??"--"),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),s("div",Me," Total Rows: "+d(i.value.result.length),1)],64)),s("div",Ge,[a(e(S),{variant:"primary",type:"button",class:"mr-2",disabled:g.value.length===0,onClick:de},{default:t(()=>[l(" 計算結果 ")]),_:1},8,["disabled"]),a(e(S),{variant:"primary",type:"button",onClick:c[7]||(c[7]=()=>F("form"))},{default:t(()=>[l(" 上一步 ")]),_:1})])],512),[[W,w.value==="table"]]),Q(s("section",null,[s("div",Ve,[s("div",Ne,[Ye,s("span",null,d(e(r).yearMonth.value),1)]),s("div",Ee,[je,s("span",null,d(e(r).name.value),1)]),s("div",Ke,[Be,s("span",null,d(e(r).startDate.value)+" ~ "+d(e(r).endDate.value),1)]),s("div",Pe,[ze,s("span",null,d(g.value.length)+"人",1)]),s("div",Le,[Ue,s("span",null,d(i.value.totalPlusSalary.toLocaleString()),1)]),s("div",Ie,[Re,s("span",null,d(i.value.totalMinusSalary.toLocaleString()),1)]),s("div",qe,[Fe,s("span",null,d(i.value.totalNetSalary.toLocaleString()),1)])]),s("div",Ae,[a(e(S),{variant:"primary",type:"button",class:"mr-2",disabled:!e(N)||e($),loading:e($),onClick:ue},{default:t(()=>[l(" 確認發放 ")]),_:1},8,["disabled","loading"]),a(e(S),{variant:"primary",type:"button",onClick:c[8]||(c[8]=()=>F("table"))},{default:t(()=>[l(" 上一步 ")]),_:1})])],512),[[W,w.value==="result"]])]),_:1},8,["class"])]),_:1}))}});function Xe(){const p=j(!1);return{exportSalary:async(_,x)=>{try{if(p.value=!0,await oe.post("/salary/export",{type:"salary",companyId:_.companyId,salaryGroupId:_.salaryGroupId}))O().showSaveSuccess(),x();else throw Error("Unknown Error")}catch(v){v instanceof Error&&console.log("[Debug] error",v.message),O().showError({title:"錯誤",content:"匯出失敗"})}finally{p.value=!1}},loading:p}}const He={class:"mb-4 flex items-center"},Je=s("option",{disabled:"",selected:"",value:""},"選擇發放名稱",-1),Qe=["value"],We={class:"flex justify-center"},Ze=ae({__name:"ExportSalaryModal",props:{companyId:{},salaryGroups:{}},emits:["close"],setup(p,{emit:D}){const _=D,{salaryGroups:x,companyId:v}=p,h=j(""),{exportSalary:T,loading:r}=Xe(),N=w=>{console.log("select group",w)},$=()=>{if(!h.value||!v)return;const w={companyId:v,salaryGroupId:h.value};T(w,()=>_("close"))};return(w,g)=>(u(),y(e(X),{open:!0,size:"md"},{default:t(()=>[a(e(X).Panel,{class:"p-4 md:w-[400px]"},{default:t(()=>[s("div",{class:re(["relative mb-5",["text-center text-xl"]])},[l(" 匯出薪資明細 "),a(e(G),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:g[0]||(g[0]=()=>_("close"))})]),s("div",He,[a(e(L),{class:"w-[120px]"},{default:t(()=>[l("薪資發放名稱")]),_:1}),a(e(me),{modelValue:h.value,"onUpdate:modelValue":g[1]||(g[1]=b=>h.value=b),class:"flex-1",onChange:N},{default:t(()=>[Je,(u(!0),C(V,null,E(w.salaryGroups,b=>(u(),C("option",{key:b.id,value:b.id},d(b.name),9,Qe))),128))]),_:1},8,["modelValue"])]),s("div",We,[a(e(S),{class:"flex-1",disabled:!h.value||e(r),loading:e(r),variant:"primary",onClick:$},{default:t(()=>[l(" 匯出 ")]),_:1},8,["disabled","loading"])])]),_:1})]),_:1}))}});function ea(p){const D=ee(),{fetchSalaries:_,fetchSalaryExtends:x,fetchSalaryGroups:v}=D,h=($,w)=>{_e().showModal({deleteType:"salaryGroup",title:fe.global.t("delete-alert-title"),content:"確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增",deleteData:{companyId:$,id:w}})},T=I(()=>D.salaries),r=I(()=>D.salaryGroups),N=I(()=>D.salaryExtends);return _({companyId:p,page:1}),x({companyId:p,page:1}),v({companyId:p,page:1}),{fetchSalaries:_,fetchSalaryExtends:x,fetchSalaryGroups:v,confirmDeleteSalaryGroup:h,salaries:T,salaryGroups:r,salaryExtends:N}}const aa={class:"flex justify-between"},ta={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},sa={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},la={class:"relative text-slate-500"},oa={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},na={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ra={class:"relative text-slate-500"},da={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ua={class:"relative text-slate-500"},ca={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ia={class:"relative text-slate-500"},pa={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ma={class:"relative text-slate-500"},_a={class:"mt-5 grid grid-cols-12 gap-6"},fa={class:"intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"},va={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ha={class:"relative text-slate-500"},wa={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ya={class:"relative text-slate-500"},ba={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},xa={class:"relative text-slate-500"},ga={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},ka={class:"font-medium"},Sa={class:"font-medium"},Ta={class:"font-medium"},Ca={class:"font-medium"},Da=s("div",{class:"font-medium"},d(0),-1),$a={class:"font-medium"},Ma={class:"font-medium"},Ga={class:"flex items-center justify-center"},ja=ae({__name:"SalaryGroupsPage",setup(p){const D=ve(),_=j(1),x=j(!1),v=j(!1),{salaryGroups:h,confirmDeleteSalaryGroup:T}=ea(1),r=()=>{v.value=!0},N=g=>{D.push({name:"GroupSalaries",params:{groupId:g}})},$=()=>{x.value=!0},w=g=>{T(_.value,g)};return(g,b)=>{const i=he("router-link");return u(),C("div",null,[s("div",aa,[s("div",ta,[s("div",sa,[s("div",la,[a(e(ne),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),a(e(G),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])]),s("div",oa,[s("div",na,[s("div",ra,[a(i,{to:"workrecord"},{default:t(()=>[a(e(S),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 加班/兼職出勤 ")]),_:1})]),_:1})])]),s("div",da,[s("div",ua,[a(i,{to:"salary-extend"},{default:t(()=>[a(e(S),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 薪資科別加減項 ")]),_:1})]),_:1})])]),s("div",ca,[s("div",ia,[a(i,{to:"userleave"},{default:t(()=>[a(e(S),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Settings",class:"mr-1 h-4 w-4"}),l(" 假勤申請 ")]),_:1})]),_:1})])]),s("div",pa,[s("div",ma,[a(i,{to:"leave"},{default:t(()=>[a(e(S),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Settings",class:"mr-1 h-4 w-4"}),l(" 假勤設定 ")]),_:1})]),_:1})])])])]),s("div",_a,[s("div",fa,[s("div",va,[s("div",ha,[a(e(S),{variant:"primary",type:"button",class:"m-3",onClick:r},{default:t(()=>[a(e(G),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 薪資計算 ")]),_:1})])]),s("div",wa,[s("div",ya,[a(e(S),{variant:"primary",type:"button",class:"m-3",onClick:$},{default:t(()=>[a(e(G),{icon:"Download",class:"mr-1 h-4 w-4"}),l(" 匯出薪資明細 ")]),_:1})])]),s("div",ba,[s("div",xa,[a(e(S),{variant:"primary",type:"button",class:"m-3",onClick:r,disabled:""},{default:t(()=>[a(e(G),{icon:"Send",class:"mr-1 h-4 w-4"}),l(" 薪資單寄送 ")]),_:1})])])]),s("div",ga,[a(e(o),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:t(()=>[a(e(o).Thead,null,{default:t(()=>[a(e(o).Tr,null,{default:t(()=>[a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("薪資年月")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("發放名稱")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("起始日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("結束日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("發放人數")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("發放日期")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("狀態")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("動作")]),_:1})]),_:1})]),_:1}),a(e(o).Tbody,null,{default:t(()=>[(u(!0),C(V,null,E(e(h),(M,H)=>(u(),y(e(o).Tr,{key:H,class:"intro-x"},{default:t(()=>[a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",ka,d(M.yearMonth),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Sa,d(M.name),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Ta,d(e(q)(M.startDate).format("YYYY-MM-DD")),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Ca,d(e(q)(M.endDate).format("YYYY-MM-DD")),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[Da]),_:1}),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",$a,d(e(q)(M.paymentDate).format("YYYY-MM-DD")),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Ma,d(new Date>new Date(M.paymentDate)?"已發放":"未發放"),1)]),_:2},1024),a(e(o).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:t(()=>[s("div",Ga,[a(e(S),{variant:"primary",type:"button",class:"m-3 w-24",onClick:F=>N(M.id)},{default:t(()=>[a(e(G),{icon:"LibraryBig",class:"mr-1 h-4 w-4"}),l(" 薪資單 ")]),_:2},1032,["onClick"]),a(e(S),{variant:"danger",type:"button",class:"m-3 w-20",onClick:F=>w(M.id)},{default:t(()=>[a(e(G),{icon:"Trash",class:"mr-1 h-4 w-4"}),l(" 刪除 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),v.value?(u(),y(e(Oe),{key:0,onClose:b[0]||(b[0]=M=>v.value=!1),companyId:_.value},null,8,["companyId"])):U("",!0),x.value?(u(),y(e(Ze),{key:1,onClose:b[1]||(b[1]=M=>x.value=!1),companyId:_.value,salaryGroups:e(h)},null,8,["companyId","salaryGroups"])):U("",!0)])}}});export{ja as default};
