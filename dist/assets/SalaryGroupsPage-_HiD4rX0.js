import{J as Q,h as j,r as H,t as me,d as le,b as R,i as oe,e as A,g as W,o as d,j as w,k as a,s as t,m as s,n as o,q as e,_ as U,K as X,L as J,x as ne,z as V,c as T,y as B,F as $,A as N,p as u,M as te,C as re,D as q,E as fe,G as _e,N as ve,u as he,w as ye}from"./index-oBWQfhjf.js";import{T as l}from"./index-aiEbVBin.js";import{_ as L,a as we}from"./FormSelect.vue_vue_type_script_setup_true_lang-WwyZrRan.js";import{_ as Y}from"./FormDatepicker.vue_vue_type_script_setup_true_lang-SjeT_L7l.js";import"./_plugin-vue_export-helper-x3n3nnut.js";function be(){const{fetchCalculateSalaries:f}=Q();return{loading:j(!1),fetchData:async(k,b)=>{console.log("payload",k);const y=await f(k);console.log("fetchCalculateSalaries response",y),b(y.data)}}}function xe(){const f=H({companyId:-1,name:"",yearMonth:"",startDate:"",endDate:"",paymentDate:"",salaries:[]}),C=me(f),i=j(!1);le(()=>{});const k=R(()=>f.yearMonth&&f.startDate&&f.endDate&&f.paymentDate&&f.name&&f.companyId);return{payloadRefs:C,canSubmit:k,createSalaryGroup:async y=>{try{const S={...f};if(console.log("requestPayload",S),S.salaries=S.salaries.map(D=>({userId:D.user.id,salaryItems:D.salaryItems.map(G=>({name:G.title,amount:G.amount,type:String(G.type).toUpperCase()}))})),i.value=!0,(await oe.post("/salary/salary-group",S)).data.id)A().showSaveSuccess(),y();else throw Error("id not found")}catch(S){S instanceof Error&&console.log("[Debug] error",S.message),A().showSaveError()}finally{i.value=!1}},loading:i}}const ge={class:"relative mb-5 text-center text-xl"},ke={class:"mb-4 flex items-center"},Se={class:"mb-4 flex items-center"},Te={class:"mb-4 flex items-center"},Ce={class:"mb-4 flex items-center"},$e={class:"mb-4 flex items-center"},De={class:"flex justify-center"},Me={key:0,class:"flex justify-center p-10"},Ne={class:"max-h-[70vh] overflow-x-auto overflow-y-auto"},Ge={class:"border p-5 text-right"},Ve={class:"mt-5 flex justify-center"},Ee={class:"flex flex-col gap-3 p-5 text-base"},je={class:"flex items-center justify-between"},Ke=s("span",null,"薪資年月：",-1),Pe={class:"flex items-center justify-between"},ze=s("span",null,"薪資發放名稱：",-1),Le={class:"flex items-center justify-between"},Ue=s("span",null,"計算區間：",-1),Be={class:"flex items-center justify-between"},Ie=s("span",null,"發薪人數：",-1),Re={class:"flex items-center justify-between"},Ye=s("span",null,"應發總額：",-1),Ae={class:"flex items-center justify-between"},qe=s("span",null,"應減總額：",-1),Oe={class:"flex items-center justify-between"},Fe=s("span",null,"實發總額：",-1),Xe={class:"mt-5 flex justify-center"},Je=W({__name:"CreateSalaryGroupModal",props:{companyId:{}},emits:["close"],setup(f,{emit:C}){const i=C,k=f,{fetchData:b,loading:y}=be(),{createSalaryGroup:S,payloadRefs:r,canSubmit:D,loading:G}=xe(),h=j("form"),x=H({value:[]}),p=H({value:[]}),m=R(()=>{const M=new Set,c=new Set,n=new Set,g=new Set;let ee=0,ae=0,F=0;const pe=x.value.map(({salaryItems:I,user:_})=>{let K=0,E=0,P=0;const z={};return I.forEach(v=>{switch(v.type==="PLUS"&&c.add(v.name),v.type==="MINUS"&&n.add(v.name),v.type==="NORMAL"&&M.add(v.name),v.type==="COMPANY"&&g.add(v.name),z[v.name]=Number(z[v.name]||0)+Number(v.amount),v.type){case"NORMAL":case"PLUS":K+=Number(v.amount),P+=Number(v.amount),ee+=Number(v.amount),F+=Number(v.amount);break;case"MINUS":E+=Number(v.amount),P-=Number(v.amount),ae+=Number(v.amount),F-=Number(v.amount);break}}),{id:_==null?void 0:_.id,name:_==null?void 0:_.name,employee_id:_==null?void 0:_.employee_id,onboard_date:_==null?void 0:_.onboard_date,resignation_date:_==null?void 0:_.resignation_date,salary_type:_==null?void 0:_.salary_type,plusSalary:K,minusSalary:E,netSalary:P,...z}}).sort((I,_)=>{for(let K=0;K<p.value.length;K++){const E=p.value[K],P=(I==null?void 0:I[E.key])??0,z=(_==null?void 0:_[E.key])??0;if(P<z)return E.order==="asc"?-1:1;if(P>z)return E.order==="asc"?1:-1}return 0});return{normalCols:M,plusCols:c,minusCols:n,companyCols:g,result:pe,totalPlusSalary:ee,totalMinusSalary:ae,totalNetSalary:F}}),O=R(()=>r.companyId.value&&r.yearMonth.value&&r.startDate.value&&r.endDate.value&&r.paymentDate.value),de=async()=>{const M={companyId:r.companyId.value,yearMonth:r.yearMonth.value,startDate:r.startDate.value,endDate:r.endDate.value};await b(M,c=>{x.value=c,h.value="table"})},Z=M=>{h.value=M},ue=()=>{h.value="result",r.salaries.value=x.value},ce=()=>{D&&S(()=>{i("close"),Q().fetchSalaryGroups({companyId:Number(r.companyId.value??1),page:0})})},ie=({key:M,order:c})=>{console.log(M,c);const n=p.value.findIndex(g=>g.key===M);n!==-1?c===""?p.value.splice(n,1):p.value[n].order=c:p.value.push({key:M,order:c})};return le(()=>{r.companyId.value=k.companyId}),(M,c)=>(d(),w(e(q),{open:!0,size:"md"},{default:a(()=>[t(e(q).Panel,{class:re(["p-4",[{"md:w-[400px]":["form","result"].includes(h.value),"max-w-[1200px] md:w-[80vw]":h.value==="table"}]])},{default:a(()=>[s("div",ge,[o(" 薪資計算 "),t(e(U),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:c[0]||(c[0]=()=>i("close"))})]),X(s("section",null,[s("div",ke,[t(e(L),{class:"w-[120px]"},{default:a(()=>[o("薪資發放名稱")]),_:1}),t(e(ne),{class:"flex-1",type:"text",modelValue:e(r).name.value,"onUpdate:modelValue":c[1]||(c[1]=n=>e(r).name.value=n)},null,8,["modelValue"])]),s("div",Se,[t(e(L),{class:"w-[120px]"},{default:a(()=>[o("薪資年月")]),_:1}),t(Y,{class:"flex-1",modelValue:e(r).yearMonth.value,"onUpdate:modelValue":c[2]||(c[2]=n=>e(r).yearMonth.value=n),"month-picker":"","auto-apply":""},null,8,["modelValue"])]),s("div",Te,[t(e(L),{class:"w-[120px]"},{default:a(()=>[o("起始日")]),_:1}),t(Y,{class:"flex-1",modelValue:e(r).startDate.value,"onUpdate:modelValue":c[3]||(c[3]=n=>e(r).startDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",Ce,[t(e(L),{class:"w-[120px]"},{default:a(()=>[o("結束日")]),_:1}),t(Y,{class:"flex-1",modelValue:e(r).endDate.value,"onUpdate:modelValue":c[4]||(c[4]=n=>e(r).endDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",$e,[t(e(L),{class:"w-[120px]"},{default:a(()=>[o("發薪日")]),_:1}),t(Y,{class:"flex-1",modelValue:e(r).paymentDate.value,"onUpdate:modelValue":c[5]||(c[5]=n=>e(r).paymentDate.value=n),"auto-apply":""},null,8,["modelValue"])]),s("div",De,[t(e(V),{class:"mr-2 flex-1",variant:"outline-primary",onClick:c[6]||(c[6]=()=>i("close"))},{default:a(()=>[o(" 關閉 ")]),_:1}),t(e(V),{class:"flex-1",variant:"primary",onClick:de,loading:e(y),disabled:e(y)||!O.value},{default:a(()=>[o(" 下一步 ")]),_:1},8,["loading","disabled"])])],512),[[J,h.value==="form"]]),X(s("section",null,[x.value.length===0?(d(),T("div",Me," 查無資料 ")):(d(),T($,{key:1},[s("div",Ne,[t(e(l),{bordered:"",onSort:ie},{default:a(()=>[t(e(l).Thead,null,{default:a(()=>[t(e(l).Tr,null,{default:a(()=>[t(e(l).Th,{class:"whitespace-nowrap",colspan:"5"}),m.value.normalCols.size>0?(d(),w(e(l).Th,{key:0,class:"whitespace-nowrap",colspan:m.value.normalCols.size},{default:a(()=>[o(" 薪資結構 ")]),_:1},8,["colspan"])):B("",!0),m.value.plusCols.size>0?(d(),w(e(l).Th,{key:1,class:"whitespace-nowrap",colspan:m.value.plusCols.size},{default:a(()=>[o(" 薪資科目加項 ")]),_:1},8,["colspan"])):B("",!0),m.value.minusCols.size>0?(d(),w(e(l).Th,{key:2,class:"whitespace-nowrap",colspan:m.value.minusCols.size},{default:a(()=>[o(" 薪資科目減項 ")]),_:1},8,["colspan"])):B("",!0),t(e(l).Th,{class:"whitespace-nowrap",colspan:"3"}),m.value.companyCols.size>0?(d(),w(e(l).Th,{key:3,class:"whitespace-nowrap",colspan:m.value.companyCols.size},{default:a(()=>[o(" 公司負擔 ")]),_:1},8,["colspan"])):B("",!0)]),_:1}),t(e(l).Tr,null,{default:a(()=>[t(e(l).Th,{class:"whitespace-nowrap"},{default:a(()=>[o("員工編號")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap"},{default:a(()=>[o("姓名")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap"},{default:a(()=>[o("到職日")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap"},{default:a(()=>[o("離職日")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap"},{default:a(()=>[o("計薪方式")]),_:1}),(d(!0),T($,null,N(m.value.normalCols.values(),n=>(d(),w(e(l).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:a(()=>[o(u(n),1)]),_:2},1032,["sortableKey"]))),128)),(d(!0),T($,null,N(m.value.plusCols.values(),n=>(d(),w(e(l).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:a(()=>[o(u(n),1)]),_:2},1032,["sortableKey"]))),128)),(d(!0),T($,null,N(m.value.minusCols.values(),n=>(d(),w(e(l).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:a(()=>[o(u(n),1)]),_:2},1032,["sortableKey"]))),128)),t(e(l).Th,{class:"whitespace-nowrap",sortableKey:"plusSalary"},{default:a(()=>[o("應發金額")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap",sortableKey:"minusSalary"},{default:a(()=>[o("應減金額")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap",sortableKey:"netSalary"},{default:a(()=>[o("實發金額")]),_:1}),(d(!0),T($,null,N(m.value.companyCols.values(),n=>(d(),w(e(l).Th,{class:"whitespace-nowrap",key:`${n}`,sortableKey:n},{default:a(()=>[o(u(n),1)]),_:2},1032,["sortableKey"]))),128))]),_:1})]),_:1}),t(e(l).Tbody,null,{default:a(()=>[(d(!0),T($,null,N(m.value.result,n=>(d(),w(e(l).Tr,{key:`employSalary_${n.id}`},{default:a(()=>[t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.employee_id),1)]),_:2},1024),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.name),1)]),_:2},1024),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.onboard_date?e(te)(n.onboard_date).format("YYYY-MM-DD"):"--"),1)]),_:2},1024),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.resignation_date?e(te)(n.resignation_date).format("YYYY-MM-DD"):"--"),1)]),_:2},1024),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.salary_type),1)]),_:2},1024),(d(!0),T($,null,N(m.value.normalCols.values(),g=>(d(),w(e(l).Td,{class:"whitespace-nowrap",key:`${g}`},{default:a(()=>[o(u(n[g]??"--"),1)]),_:2},1024))),128)),(d(!0),T($,null,N(m.value.plusCols.values(),g=>(d(),w(e(l).Td,{class:"whitespace-nowrap",key:`${g}`},{default:a(()=>[o(u(n[g]??"--"),1)]),_:2},1024))),128)),(d(!0),T($,null,N(m.value.minusCols.values(),g=>(d(),w(e(l).Td,{class:"whitespace-nowrap",key:`${g}`},{default:a(()=>[o(u(n[g]??"--"),1)]),_:2},1024))),128)),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.plusSalary??"--"),1)]),_:2},1024),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.minusSalary??"--"),1)]),_:2},1024),t(e(l).Td,{class:"whitespace-nowrap"},{default:a(()=>[o(u(n.netSalary??"--"),1)]),_:2},1024),(d(!0),T($,null,N(m.value.companyCols.values(),g=>(d(),w(e(l).Td,{class:"whitespace-nowrap",key:`${g}`},{default:a(()=>[o(u(n[g]??"--"),1)]),_:2},1024))),128))]),_:2},1024))),128))]),_:1})]),_:1})]),s("div",Ge," Total Rows: "+u(m.value.result.length),1)],64)),s("div",Ve,[t(e(V),{variant:"outline-primary",type:"button",class:"mr-2",onClick:c[7]||(c[7]=()=>Z("form"))},{default:a(()=>[o(" 上一步 ")]),_:1}),t(e(V),{variant:"primary",type:"button",disabled:x.value.length===0,onClick:ue},{default:a(()=>[o(" 計算結果 ")]),_:1},8,["disabled"])])],512),[[J,h.value==="table"]]),X(s("section",null,[s("div",Ee,[s("div",je,[Ke,s("span",null,u(e(r).yearMonth.value),1)]),s("div",Pe,[ze,s("span",null,u(e(r).name.value),1)]),s("div",Le,[Ue,s("span",null,u(e(r).startDate.value)+" ~ "+u(e(r).endDate.value),1)]),s("div",Be,[Ie,s("span",null,u(x.value.length)+"人",1)]),s("div",Re,[Ye,s("span",null,u(m.value.totalPlusSalary.toLocaleString()),1)]),s("div",Ae,[qe,s("span",null,u(m.value.totalMinusSalary.toLocaleString()),1)]),s("div",Oe,[Fe,s("span",null,u(m.value.totalNetSalary.toLocaleString()),1)])]),s("div",Xe,[t(e(V),{variant:"outline-primary",type:"button",class:"flex-1 mr-2",onClick:c[8]||(c[8]=()=>Z("table"))},{default:a(()=>[o(" 上一步 ")]),_:1}),t(e(V),{variant:"primary",type:"button",class:"flex-1",disabled:!e(D)||e(G),loading:e(G),onClick:ce},{default:a(()=>[o(" 確認發放 ")]),_:1},8,["disabled","loading"])])],512),[[J,h.value==="result"]])]),_:1},8,["class"])]),_:1}))}});function He(){const f=j(!1);return{exportSalary:async(i,k)=>{try{if(f.value=!0,await oe.post("/salary/export",{type:"salary",companyId:i.companyId,salaryGroupId:i.salaryGroupId}))A().showSaveSuccess(),k();else throw Error("Unknown Error")}catch(b){b instanceof Error&&console.log("[Debug] error",b.message),A().showError({title:"錯誤",content:"匯出失敗"})}finally{f.value=!1}},loading:f}}const Qe={class:"mb-4 flex items-center"},We=s("option",{disabled:"",selected:"",value:""},"選擇發放名稱",-1),Ze=["value"],ea={class:"flex justify-center"},aa=W({__name:"ExportSalaryModal",props:{companyId:{},salaryGroups:{}},emits:["close"],setup(f,{emit:C}){const i=C,{salaryGroups:k,companyId:b}=f,y=j(""),{exportSalary:S,loading:r}=He(),D=h=>{console.log("select group",h)},G=()=>{if(!y.value||!b)return;const h={companyId:b,salaryGroupId:y.value};S(h,()=>i("close"))};return(h,x)=>(d(),w(e(q),{open:!0,size:"md"},{default:a(()=>[t(e(q).Panel,{class:"p-4 md:w-[400px]"},{default:a(()=>[s("div",{class:re(["relative mb-5",["text-center text-xl"]])},[o(" 匯出薪資明細 "),t(e(U),{icon:"X",class:"absolute right-0 top-0 cursor-pointer text-[#939393]",onClick:x[0]||(x[0]=()=>i("close"))})]),s("div",Qe,[t(e(L),{class:"w-[120px]"},{default:a(()=>[o("薪資發放名稱")]),_:1}),t(e(we),{modelValue:y.value,"onUpdate:modelValue":x[1]||(x[1]=p=>y.value=p),class:"flex-1",onChange:D},{default:a(()=>[We,(d(!0),T($,null,N(h.salaryGroups,p=>(d(),T("option",{key:p.id,value:p.id},u(p.name),9,Ze))),128))]),_:1},8,["modelValue"])]),s("div",ea,[t(e(V),{class:"flex-1",disabled:!y.value||e(r),loading:e(r),variant:"primary",onClick:G},{default:a(()=>[o(" 匯出 ")]),_:1},8,["disabled","loading"])])]),_:1})]),_:1}))}});function se(f){const C=Q(),{fetchSalaryExtends:i,fetchSalaryGroups:k}=C,b=(r,D)=>{fe().showModal({deleteType:"salaryGroup",title:_e.global.t("delete-alert-title"),content:"確定要刪除這筆資料嗎？刪除後無法復原，需要重新新增",deleteData:{companyId:r,id:D}})},y=R(()=>C.salaryGroups),S=R(()=>C.salaryExtends);return i({companyId:f,page:1}),k({companyId:f,page:1}),{fetchSalaryExtends:i,fetchSalaryGroups:k,confirmDeleteSalaryGroup:b,salaryGroups:y,salaryExtends:S}}const ta={class:"flex justify-between"},sa={class:"intro-y col-span-12 mt-2 flex flex-wrap items-center sm:flex-nowrap"},la={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},oa={class:"relative text-slate-500"},na={class:"mt-5 grid grid-cols-12 gap-6"},ra={class:"intro-y col-span-12 flex flex-wrap items-center sm:flex-nowrap"},da={class:"mt-3 w-full sm:ml-auto sm:mt-0 sm:w-auto md:ml-0"},ua={class:"relative text-slate-500"},ca={class:"intro-y col-span-12 overflow-auto lg:overflow-visible"},ia={class:"font-medium"},pa=["src"],ma={class:"font-medium"},fa=["href"],_a={class:"font-medium"},va={class:"font-medium"},ha={class:"font-medium"},ya={class:"font-medium"},wa={class:"flex items-center justify-center"},Ta=W({__name:"SalaryGroupsPage",setup(f){const C=ve(),{companyId:i}=he(),k=j(!1),b=j(!1);ye(i,()=>{se(i.value??1)});const{salaryGroups:y,confirmDeleteSalaryGroup:S}=se(i.value??1),r=()=>{b.value=!0},D=h=>{C.push({name:"GroupSalaries",params:{groupId:h}})},G=h=>{S(i.value??1,h)};return(h,x)=>(d(),T("div",null,[s("div",ta,[s("div",sa,[s("div",la,[s("div",oa,[t(e(ne),{type:"text",class:"!box w-56 pr-10",placeholder:"Search..."}),t(e(U),{icon:"Search",class:"absolute inset-y-0 right-0 my-auto mr-3 h-4 w-4"})])])])]),s("div",na,[s("div",ra,[s("div",da,[s("div",ua,[t(e(V),{variant:"primary",type:"button",class:"m-3",onClick:r},{default:a(()=>[t(e(U),{icon:"Plus",class:"mr-1 h-4 w-4"}),o(" 新建廣告 ")]),_:1})])])]),s("div",ca,[t(e(l),{class:"-mt-2 border-separate border-spacing-y-[10px]"},{default:a(()=>[t(e(l).Thead,null,{default:a(()=>[t(e(l).Tr,null,{default:a(()=>[t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("圖片")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("轉址")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("過期日")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("順位")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("是否認證")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("創建時間")]),_:1}),t(e(l).Th,{class:"whitespace-nowrap border-b-0"},{default:a(()=>[o("動作")]),_:1})]),_:1})]),_:1}),t(e(l).Tbody,null,{default:a(()=>[(d(!0),T($,null,N(e(y),(p,m)=>(d(),w(e(l).Tr,{key:m,class:"intro-x"},{default:a(()=>[t(e(l).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:a(()=>[s("div",ia,[s("img",{src:p.image_url,class:"w-20",alt:""},null,8,pa)])]),_:2},1024),t(e(l).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:a(()=>[s("div",ma,[s("a",{href:p.redirect_url,target:"_blank"},u(p.redirect_url),9,fa)])]),_:2},1024),t(e(l).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:a(()=>[s("div",_a,u(p.expiration_date),1)]),_:2},1024),t(e(l).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:a(()=>[s("div",va,u(p.sequence),1)]),_:2},1024),t(e(l).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:a(()=>[s("div",ha,u(p.valid),1)]),_:2},1024),t(e(l).Td,{class:"border-b-0 bg-white text-center shadow-[20px_3px_20px_#0000000b] first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600"},{default:a(()=>[s("div",ya,u(p.created_at),1)]),_:2},1024),t(e(l).Td,{class:"relative w-56 border-b-0 bg-white py-0 shadow-[20px_3px_20px_#0000000b] before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 first:rounded-l-md last:rounded-r-md dark:bg-darkmode-600 before:dark:bg-darkmode-400"},{default:a(()=>[s("div",wa,[t(e(V),{variant:"primary",type:"button",class:"m-3 w-24",onClick:O=>D(p.id)},{default:a(()=>[t(e(U),{icon:"Edit",class:"mr-1 h-4 w-4"}),o(" 修改 ")]),_:2},1032,["onClick"]),t(e(V),{variant:"danger",type:"button",class:"m-3 w-20",onClick:O=>G(p.id)},{default:a(()=>[t(e(U),{icon:"Trash",class:"mr-1 h-4 w-4"}),o(" 刪除 ")]),_:2},1032,["onClick"])])]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})])]),b.value?(d(),w(e(Je),{key:0,onClose:x[0]||(x[0]=p=>b.value=!1),companyId:e(i)??1},null,8,["companyId"])):B("",!0),k.value?(d(),w(e(aa),{key:1,onClose:x[1]||(x[1]=p=>k.value=!1),companyId:e(i)??1,salaryGroups:e(y)},null,8,["companyId","salaryGroups"])):B("",!0)]))}});export{Ta as default};