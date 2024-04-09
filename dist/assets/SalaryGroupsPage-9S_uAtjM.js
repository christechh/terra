import{H as Q,r as j,p as O,q as me,s as le,c as L,y as oe,v as F,d as W,o as u,i as y,w as t,f as a,e as s,g as l,h as e,l as G,I as H,J,m as ne,_ as C,b as D,j as I,F as M,n as Y,t as d,K as R,z as re,D as A,E as _e,L as fe,M as ve,u as he,N as we,a as ye}from"./index-gJgnG53e.js";import{T as o}from"./index-hO9Hz3qR.js";import{_ as B}from"./FormLabel.vue_vue_type_script_setup_true_lang-FtTE1i6h.js";import{_ as q}from"./FormDatepicker.vue_vue_type_script_setup_true_lang-6d158fgj.js";function be(){const{fetchCalculateSalaries:p}=Q();return{loading:j(!1),fetchData:async(x,g)=>{console.log("payload",x);const b=await p(x);console.log("fetchCalculateSalaries response",b),g(b.data)}}}function xe(){const p=O({companyId:"",name:"",yearMonth:"",startDate:"",endDate:"",paymentDate:"",salaries:[]}),h=me(p),f=j(!1);le(()=>{});const x=L(()=>p.yearMonth&&p.startDate&&p.endDate&&p.paymentDate&&p.name&&p.companyId);return{payloadRefs:h,canSubmit:x,createSalaryGroup:async b=>{try{const k={...p};if(console.log("requestPayload",k),k.salaries=k.salaries.map(N=>({userId:N.user.id,salaryItems:N.salaryItems.map($=>({name:$.title,amount:$.amount,type:String($.type).toUpperCase()}))})),f.value=!0,(await oe.post("/salary/salary-group",k)).data.id)F().showSaveSuccess(),b();else throw Error("id not found")}catch(k){k instanceof Error&&console.log("[Debug] error",k.message),F().showSaveError()}finally{f.value=!1}},loading:f}}const ge={class:"relative mb-5 text-center text-xl"},ke={class:"mb-4 flex items-center"},Se={class:"mb-4 flex items-center"},Te={class:"mb-4 flex items-center"},De={class:"mb-4 flex items-center"},Ce={class:"mb-4 flex items-center"},$e={class:"flex justify-center"},Me={key:0,class:"flex justify-center p-10"},Ne={class:"max-h-[70vh] overflow-x-auto overflow-y-auto"},Ve={class:"border p-5 text-right"},Ge={class:"mt-5 flex justify-center"},Ye={class:"flex flex-col gap-3 p-5 text-base"},Ee={class:"flex items-center justify-between"},je=s("span",null,"薪資年月：",-1),Ke={class:"flex items-center justify-between"},Pe=s("span",null,"薪資發放名稱：",-1),ze={class:"flex items-center justify-between"},Be=s("span",null,"計算區間：",-1),Ie={class:"flex items-center justify-between"},Le=s("span",null,"發薪人數：",-1),Ue={class:"flex items-center justify-between"},Re=s("span",null,"應發總額：",-1),qe={class:"flex items-center justify-between"},Fe=s("span",null,"應減總額：",-1),Ae={class:"flex items-center justify-between"},Xe=s("span",null,"實發總額：",-1),He={class:"mt-5 flex justify-center"},Je=W({__name:"CreateSalaryGroupModal",props:{companyId:{}},emits:["close"],setup(p,{emit:h}){const f=h,x=p,{fetchData:g,loading:b}=be(),{createSalaryGroup:k,payloadRefs:r,canSubmit:N,loading:$}=xe(),w=j("form"),S=O({value:[]}),m=O({value:[]}),i=L(()=>{const V=new Set,c=new Set,n=new Set,T=new Set;let ae=0,te=0,X=0;const pe=S.value.map(({salaryItems:U,user:_})=>{let K=0,E=0,P=0;const z={};return U.forEach(v=>{switch(v.type==="plus"&&c.add(v.name),v.type==="minus"&&n.add(v.name),v.type==="normal"&&V.add(v.name),v.type==="company"&&T.add(v.name),z[v.name]=Number(z[v.name]||0)+Number(v.amount),v.type){case"NORMAL":case"PLUS":K+=Number(v.amount),P+=Number(v.amount),ae+=Number(v.amount),X+=Number(v.amount);break;case"MINUS":E+=Number(v.amount),P-=Number(v.amount),te+=Number(v.amount),X-=Number(v.amount);break}}),{id:_==null?void 0:_.id,name:_==null?void 0:_.name,employee_id:_==null?void 0:_.employee_id,onboard_date:_==null?void 0:_.onboard_date,resignation_date:_==null?void 0:_.resignation_date,salary_type:_==null?void 0:_.salary_type,plusSalary:K,minusSalary:E,netSalary:P,...z}}).sort((U,_)=>{for(let K=0;K<m.value.length;K++){const E=m.value[K],P=(U==null?void 0:U[E.key])??0,z=(_==null?void 0:_[E.key])??0;if(P<z)return E.order==="asc"?-1:1;if(P>z)return E.order==="asc"?1:-1}return 0});return{normalCols:V,plusCols:c,minusCols:n,companyCols:T,result:pe,totalPlusSalary:ae,totalMinusSalary:te,totalNetSalary:X}}),Z=L(()=>r.companyId.value&&r.yearMonth.value&&r.startDate.value&&r.endDate.value&&r.paymentDate.value),de=async()=>{const V={companyId:r.companyId.value,yearMonth:r.yearMonth.value,startDate:r.startDate.value,endDate:r.endDate.value};await g(V,c=>{S.value=c,w.value="table"})},ee=V=>{w.value=V},ue=()=>{w.value="result",r.salaries.value=S.value},ce=()=>{N&&k(()=>{f("close"),Q().fetchSalaryGroups({companyId:Number(r.companyId.value),page:0})})},ie=({key:V,order:c})=>{console.log(V,c);const n=m.value.findIndex(T=>T.key===V);n!==-1?c===""?m.value.splice(n,1):m.value[n].order=c:m.value.push({key:V,order:c})};return le(()=>{r.companyId.value=String(x.companyId)}),(V,c)=>(u(),y(e(A),{open:!0,size:"md"},{default:t(()=>[a(e(A).Panel,{class:re(["p-4",[{"md:w-[400px]":["form","result"].includes(w.value),"max-w-[1200px] md:w-[80vw]":w.value==="table"}]])},{default:t(()=>[s("div",ge,[l(" 薪資計算 "),a(e(G),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:c[0]||(c[0]=()=>f("close"))})]),H(s("section",null,[s("div",ke,[a(e(B),{class:"w-[120px]"},{default:t(()=>[l("薪資發放名稱")]),_:1}),a(e(ne),{class:"flex-1",type:"text",modelValue:e(r).name.value,"onUpdate:modelValue":c[1]||(c[1]=n=>e(r).name.value=n)},null,8,["modelValue"])]),s("div",Se,[a(e(B),{class:"w-[120px]"},{default:t(()=>[l("薪資年月")]),_:1}),a(q,{class:"flex-1",modelValue:e(r).yearMonth.value,"onUpdate:modelValue":c[2]||(c[2]=n=>e(r).yearMonth.value=n),"month-picker":"","auto-apply":""},null,8,["modelValue"])]),s("div",Te,[a(e(B),{class:"w-[120px]"},{default:t(()=>[l("起始日")]),_:1}),a(q,{class:"flex-1",modelValue:e(r).startDate.value,"onUpdate:modelValue":c[3]||(c[3]=n=>e(r).startDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",De,[a(e(B),{class:"w-[120px]"},{default:t(()=>[l("結束日")]),_:1}),a(q,{class:"flex-1",modelValue:e(r).endDate.value,"onUpdate:modelValue":c[4]||(c[4]=n=>e(r).endDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",Ce,[a(e(B),{class:"w-[120px]"},{default:t(()=>[l("發薪日")]),_:1}),a(q,{class:"flex-1",modelValue:e(r).paymentDate.value,"onUpdate:modelValue":c[5]||(c[5]=n=>e(r).paymentDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",$e,[a(e(C),{class:"mr-2 flex-1",variant:"primary",onClick:de,loading:e(b),disabled:e(b)||!Z.value},{default:t(()=>[l(" 下一步 ")]),_:1},8,["loading","disabled"]),a(e(C),{class:"flex-1",variant:"primary",onClick:c[6]||(c[6]=()=>f("close"))},{default:t(()=>[l(" 關閉 ")]),_:1})])],512),[[J,w.value==="form"]]),H(s("section",null,[S.value.length===0?(u(),D("div",Me," 查無資料 ")):(u(),D(M,{key:1},[s("div",Ne,[a(e(o),{bordered:"",onSort:ie},{default:t(()=>[a(e(o).Thead,null,{default:t(()=>[a(e(o).Tr,null,{default:t(()=>[a(e(o).Th,{class:"whitespace-nowrap",colspan:"5"}),i.value.normalCols.size>0?(u(),y(e(o).Th,{key:0,class:"whitespace-nowrap",colspan:i.value.normalCols.size},{default:t(()=>[l(" 薪資結構 ")]),_:1},8,["colspan"])):I("",!0),i.value.plusCols.size>0?(u(),y(e(o).Th,{key:1,class:"whitespace-nowrap",colspan:i.value.plusCols.size},{default:t(()=>[l(" 薪資科目加項 ")]),_:1},8,["colspan"])):I("",!0),i.value.minusCols.size>0?(u(),y(e(o).Th,{key:2,class:"whitespace-nowrap",colspan:i.value.minusCols.size},{default:t(()=>[l(" 薪資科目減項 ")]),_:1},8,["colspan"])):I("",!0),a(e(o).Th,{class:"whitespace-nowrap",colspan:"3"}),i.value.companyCols.size>0?(u(),y(e(o).Th,{key:3,class:"whitespace-nowrap",colspan:i.value.companyCols.size},{default:t(()=>[l(" 公司負擔 ")]),_:1},8,["colspan"])):I("",!0)]),_:1}),a(e(o).Tr,null,{default:t(()=>[a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("員工編號")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("姓名")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("到職日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("離職日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap"},{default:t(()=>[l("計薪方式")]),_:1}),(u(!0),D(M,null,Y(i.value.normalCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128)),(u(!0),D(M,null,Y(i.value.plusCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128)),(u(!0),D(M,null,Y(i.value.minusCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128)),a(e(o).Th,{class:"whitespace-nowrap",sortableKey:"plusSalary"},{default:t(()=>[l("應發金額")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap",sortableKey:"minusSalary"},{default:t(()=>[l("應減金額")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap",sortableKey:"netSalary"},{default:t(()=>[l("實發金額")]),_:1}),(u(!0),D(M,null,Y(i.value.companyCols.values(),n=>(u(),y(e(o).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:t(()=>[l(d(n),1)]),_:2},1032,["sortableKey"]))),128))]),_:1})]),_:1}),a(e(o).Tbody,null,{default:t(()=>[(u(!0),D(M,null,Y(i.value.result,n=>(u(),y(e(o).Tr,{key:`employSalary_${n.id}`},{default:t(()=>[a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.employee_id),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.name),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.onboard_date)+" "+d(n.onboard_date?e(R)(n.onboard_date).format("YYYY-MM-DD"):"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.resignation_date?e(R)(n.resignation_date).format("YYYY-MM-DD"):"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.salary_type),1)]),_:2},1024),(u(!0),D(M,null,Y(i.value.normalCols.values(),T=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${T}`},{default:t(()=>[l(d(n[T]??"--"),1)]),_:2},1024))),128)),(u(!0),D(M,null,Y(i.value.plusCols.values(),T=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${T}`},{default:t(()=>[l(d(n[T]??"--"),1)]),_:2},1024))),128)),(u(!0),D(M,null,Y(i.value.minusCols.values(),T=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${T}`},{default:t(()=>[l(d(n[T]??"--"),1)]),_:2},1024))),128)),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.plusSalary??"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.minusSalary??"--"),1)]),_:2},1024),a(e(o).Td,{class:"whitespace-nowrap"},{default:t(()=>[l(d(n.netSalary??"--"),1)]),_:2},1024),(u(!0),D(M,null,Y(i.value.companyCols.values(),T=>(u(),y(e(o).Td,{class:"whitespace-nowrap",key:`${T}`},{default:t(()=>[l(d(n[T]??"--"),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),s("div",Ve," Total Rows: "+d(i.value.result.length),1)],64)),s("div",Ge,[a(e(C),{variant:"primary",type:"button",class:"mr-2",disabled:S.value.length===0,onClick:ue},{default:t(()=>[l(" 計算結果 ")]),_:1},8,["disabled"]),a(e(C),{variant:"primary",type:"button",onClick:c[7]||(c[7]=()=>ee("form"))},{default:t(()=>[l(" 上一步 ")]),_:1})])],512),[[J,w.value==="table"]]),H(s("section",null,[s("div",Ye,[s("div",Ee,[je,s("span",null,d(e(r).yearMonth.value),1)]),s("div",Ke,[Pe,s("span",null,d(e(r).name.value),1)]),s("div",ze,[Be,s("span",null,d(e(r).startDate.value)+" ~ "+d(e(r).endDate.value),1)]),s("div",Ie,[Le,s("span",null,d(S.value.length)+"人",1)]),s("div",Ue,[Re,s("span",null,d(i.value.totalPlusSalary.toLocaleString()),1)]),s("div",qe,[Fe,s("span",null,d(i.value.totalMinusSalary.toLocaleString()),1)]),s("div",Ae,[Xe,s("span",null,d(i.value.totalNetSalary.toLocaleString()),1)])]),s("div",He,[a(e(C),{variant:"primary",type:"button",class:"mr-2",disabled:!e(N)||e($),loading:e($),onClick:ce},{default:t(()=>[l(" 確認發放 ")]),_:1},8,["disabled","loading"]),a(e(C),{variant:"primary",type:"button",onClick:c[8]||(c[8]=()=>ee("table"))},{default:t(()=>[l(" 上一步 ")]),_:1})])],512),[[J,w.value==="result"]])]),_:1},8,["class"])]),_:1}))}});function Oe(){const p=j(!1);return{exportSalary:async(f,x)=>{try{if(p.value=!0,await oe.post("/salary/export",{type:"salary",companyId:f.companyId,salaryGroupId:f.salaryGroupId}))F().showSaveSuccess(),x();else throw Error("Unknown Error")}catch(g){g instanceof Error&&console.log("[Debug] error",g.message),F().showError({title:"錯誤",content:"匯出失敗"})}finally{p.value=!1}},loading:p}}const Qe={class:"mb-4 flex items-center"},We=s("option",{disabled:"",selected:"",value:""},"選擇發放名稱",-1),Ze=["value"],ea={class:"flex justify-center"},aa=W({__name:"ExportSalaryModal",props:{companyId:{},salaryGroups:{}},emits:["close"],setup(p,{emit:h}){const f=h,{salaryGroups:x,companyId:g}=p,b=j(""),{exportSalary:k,loading:r}=Oe(),N=w=>{console.log("select group",w)},$=()=>{if(!b.value||!g)return;const w={companyId:g,salaryGroupId:b.value};k(w,()=>f("close"))};return(w,S)=>(u(),y(e(A),{open:!0,size:"md"},{default:t(()=>[a(e(A).Panel,{class:"p-4 md:w-[400px]"},{default:t(()=>[s("div",{class:re(["relative mb-5",["text-center text-xl"]])},[l(" 匯出薪資明細 "),a(e(G),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:S[0]||(S[0]=()=>f("close"))})]),s("div",Qe,[a(e(B),{class:"w-[120px]"},{default:t(()=>[l("薪資發放名稱")]),_:1}),a(e(_e),{modelValue:b.value,"onUpdate:modelValue":S[1]||(S[1]=m=>b.value=m),class:"flex-1",onChange:N},{default:t(()=>[We,(u(!0),D(M,null,Y(w.salaryGroups,m=>(u(),D("option",{key:m.id,value:m.id},d(m.name),9,Ze))),128))]),_:1},8,["modelValue"])]),s("div",ea,[a(e(C),{class:"flex-1",disabled:!b.value||e(r),loading:e(r),variant:"primary",onClick:$},{default:t(()=>[l(" 匯出 ")]),_:1},8,["disabled","loading"])])]),_:1})]),_:1}))}});function se(p){const h=Q(),{fetchSalaryExtends:f,fetchSalaryGroups:x}=h,g=(N,$)=>{fe().showModal({deleteType:"salaryGroup",title:ve.global.t("delete-alert-title"),content:"確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增",deleteData:{companyId:N,id:$}})},b=L(()=>h.salaries),k=L(()=>h.salaryGroups),r=L(()=>h.salaryExtends);return f({companyId:p,page:1}),x({companyId:p,page:1}),{fetchSalaryExtends:f,fetchSalaryGroups:x,confirmDeleteSalaryGroup:g,salaries:b,salaryGroups:k,salaryExtends:r}}const ta={class:"flex justify-between"},sa={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},la={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},oa={class:"relative text-slate-500"},na={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},ra={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},da={class:"relative text-slate-500"},ua={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ca={class:"relative text-slate-500"},ia={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},pa={class:"relative text-slate-500"},ma={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},_a={class:"relative text-slate-500"},fa={class:"mt-5 grid grid-cols-12 gap-6"},va={class:"intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"},ha={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},wa={class:"relative text-slate-500"},ya={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ba={class:"relative text-slate-500"},xa={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ga={class:"relative text-slate-500"},ka={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},Sa={class:"font-medium"},Ta={class:"font-medium"},Da={class:"font-medium"},Ca={class:"font-medium"},$a=s("div",{class:"font-medium"},d(0),-1),Ma={class:"font-medium"},Na={class:"font-medium"},Va={class:"flex items-center justify-center"},Ka=W({__name:"SalaryGroupsPage",setup(p){const{companyId:h}=he(),f=j(!1),x=j(!1);we(h,()=>{se(h.value)});const{salaryGroups:g,confirmDeleteSalaryGroup:b}=se(h.value),k=()=>{x.value=!0},r=()=>{f.value=!0},N=$=>{b(Number(h.value)??-1,$)};return($,w)=>{const S=ye("router-link");return u(),D("div",null,[s("div",ta,[s("div",sa,[s("div",la,[s("div",oa,[a(e(ne),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),a(e(G),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])]),s("div",na,[s("div",ra,[s("div",da,[a(S,{to:"workrecord"},{default:t(()=>[a(e(C),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 加班/兼職出勤 ")]),_:1})]),_:1})])]),s("div",ua,[s("div",ca,[a(S,{to:"salary-extend"},{default:t(()=>[a(e(C),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 薪資科別加減項 ")]),_:1})]),_:1})])]),s("div",ia,[s("div",pa,[a(S,{to:"userleave"},{default:t(()=>[a(e(C),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Settings",class:"mr-1 h-4 w-4"}),l(" 假勤申請 ")]),_:1})]),_:1})])]),s("div",ma,[s("div",_a,[a(S,{to:"leave"},{default:t(()=>[a(e(C),{variant:"primary",type:"button",class:"m-3"},{default:t(()=>[a(e(G),{icon:"Settings",class:"mr-1 h-4 w-4"}),l(" 假勤設定 ")]),_:1})]),_:1})])])])]),s("div",fa,[s("div",va,[s("div",ha,[s("div",wa,[a(e(C),{variant:"primary",type:"button",class:"m-3",onClick:k},{default:t(()=>[a(e(G),{icon:"Plus",class:"mr-1 h-4 w-4"}),l(" 薪資計算 ")]),_:1})])]),s("div",ya,[s("div",ba,[a(e(C),{variant:"primary",type:"button",class:"m-3",onClick:r},{default:t(()=>[a(e(G),{icon:"Download",class:"mr-1 h-4 w-4"}),l(" 匯出薪資明細 ")]),_:1})])]),s("div",xa,[s("div",ga,[a(e(C),{variant:"primary",type:"button",class:"m-3",onClick:k,disabled:""},{default:t(()=>[a(e(G),{icon:"Send",class:"mr-1 h-4 w-4"}),l(" 薪資單寄送 ")]),_:1})])])]),s("div",ka,[a(e(o),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:t(()=>[a(e(o).Thead,null,{default:t(()=>[a(e(o).Tr,null,{default:t(()=>[a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("薪資年月")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("發放名稱")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("起始日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("結束日")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("發放人數")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("發放日期")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("狀態")]),_:1}),a(e(o).Th,{class:"whitespace-nowrap border-b-0"},{default:t(()=>[l("動作")]),_:1})]),_:1})]),_:1}),a(e(o).Tbody,null,{default:t(()=>[(u(!0),D(M,null,Y(e(g),(m,i)=>(u(),y(e(o).Tr,{key:i,class:"intro-x"},{default:t(()=>[a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Sa,d(m.yearMonth),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Ta,d(m.name),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Da,d(e(R)(m.startDate).format("YYYY-MM-DD")),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Ca,d(e(R)(m.endDate).format("YYYY-MM-DD")),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[$a]),_:1}),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Ma,d(e(R)(m.paymentDate).format("YYYY-MM-DD")),1)]),_:2},1024),a(e(o).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:t(()=>[s("div",Na,d(new Date>new Date(m.paymentDate)?"已發放":"未發放"),1)]),_:2},1024),a(e(o).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:t(()=>[s("div",Va,[a(e(C),{variant:"danger",type:"button",class:"m-3 w-20",onClick:Z=>N(m.id)},{default:t(()=>[a(e(G),{icon:"Trash",class:"mr-1 h-4 w-4"}),l(" 刪除 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),x.value?(u(),y(e(Je),{key:0,onClose:w[0]||(w[0]=m=>x.value=!1),companyId:e(h)},null,8,["companyId"])):I("",!0),f.value?(u(),y(e(aa),{key:1,onClose:w[1]||(w[1]=m=>f.value=!1),companyId:e(h),salaryGroups:e(g)},null,8,["companyId","salaryGroups"])):I("",!0)])}}});export{Ka as default};