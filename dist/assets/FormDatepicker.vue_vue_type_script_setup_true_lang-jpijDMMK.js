import{d as v,r as W,c as M,C as S,o as V,i as x,h as w,V as C,W as F}from"./index-Ike7Oe7a.js";function p(e){return(a={})=>{const t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}}function m(e){return(a,t)=>{const n=t!=null&&t.context?String(t.context):"standalone";let o;if(n==="formatting"&&e.formattingValues){const r=e.defaultFormattingWidth||e.defaultWidth,i=t!=null&&t.width?String(t.width):r;o=e.formattingValues[i]||e.formattingValues[r]}else{const r=e.defaultWidth,i=t!=null&&t.width?String(t.width):e.defaultWidth;o=e.values[i]||e.values[r]}const l=e.argumentCallback?e.argumentCallback(a):a;return o[l]}}function h(e){return(a,t={})=>{const n=t.width,o=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],l=a.match(o);if(!l)return null;const r=l[0],i=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],f=Array.isArray(i)?z(i,s=>s.test(r)):D(i,s=>s.test(r));let u;u=e.valueCallback?e.valueCallback(f):f,u=t.valueCallback?t.valueCallback(u):u;const d=a.slice(r.length);return{value:u,rest:d}}}function D(e,a){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t)&&a(e[t]))return t}function z(e,a){for(let t=0;t<e.length;t++)if(a(e[t]))return t}function $(e){return(a,t={})=>{const n=a.match(e.matchPattern);if(!n)return null;const o=n[0],l=a.match(e.parsePattern);if(!l)return null;let r=e.valueCallback?e.valueCallback(l[0]):l[0];r=t.valueCallback?t.valueCallback(r):r;const i=a.slice(o.length);return{value:r,rest:i}}}const T={lessThanXSeconds:{one:"少於 1 秒",other:"少於 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分鐘",lessThanXMinutes:{one:"少於 1 分鐘",other:"少於 {{count}} 分鐘"},xMinutes:{one:"1 分鐘",other:"{{count}} 分鐘"},xHours:{one:"1 小時",other:"{{count}} 小時"},aboutXHours:{one:"大約 1 小時",other:"大約 {{count}} 小時"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大約 1 個星期",other:"大約 {{count}} 個星期"},xWeeks:{one:"1 個星期",other:"{{count}} 個星期"},aboutXMonths:{one:"大約 1 個月",other:"大約 {{count}} 個月"},xMonths:{one:"1 個月",other:"{{count}} 個月"},aboutXYears:{one:"大約 1 年",other:"大約 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超過 1 年",other:"超過 {{count}} 年"},almostXYears:{one:"將近 1 年",other:"將近 {{count}} 年"}},B=(e,a,t)=>{let n;const o=T[e];return typeof o=="string"?n=o:a===1?n=o.one:n=o.other.replace("{{count}}",String(a)),t!=null&&t.addSuffix?t.comparison&&t.comparison>0?n+"內":n+"前":n},N={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},X={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},_={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},A={date:p({formats:N,defaultWidth:"full"}),time:p({formats:X,defaultWidth:"full"}),dateTime:p({formats:_,defaultWidth:"full"})},E={lastWeek:"'上個'eeee p",yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:"'下個'eeee p",other:"P"},L=(e,a,t,n)=>E[e],R={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},H={narrow:["1","2","3","4"],abbreviated:["第一刻","第二刻","第三刻","第四刻"],wide:["第一刻鐘","第二刻鐘","第三刻鐘","第四刻鐘"]},O={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},Y={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["週日","週一","週二","週三","週四","週五","週六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},q={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},I={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜間"}},Q=(e,a)=>{const t=Number(e);switch(a==null?void 0:a.unit){case"date":return t+"日";case"hour":return t+"時";case"minute":return t+"分";case"second":return t+"秒";default:return"第 "+t}},K={ordinalNumber:Q,era:m({values:R,defaultWidth:"wide"}),quarter:m({values:H,defaultWidth:"wide",argumentCallback:e=>e-1}),month:m({values:O,defaultWidth:"wide"}),day:m({values:Y,defaultWidth:"wide"}),dayPeriod:m({values:q,defaultWidth:"wide",formattingValues:I,defaultFormattingWidth:"wide"})},U=/^(第\s*)?\d+(日|時|分|秒)?/i,j=/\d+/i,G={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},J={any:[/^(前)/i,/^(公元)/i]},Z={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻鐘/i},tt={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},et={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},at={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},nt={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^週[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},rt={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},ot={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨)/i},it={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},dt={ordinalNumber:$({matchPattern:U,parsePattern:j,valueCallback:e=>parseInt(e,10)}),era:h({matchPatterns:G,defaultMatchWidth:"wide",parsePatterns:J,defaultParseWidth:"any"}),quarter:h({matchPatterns:Z,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:h({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any"}),day:h({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:rt,defaultParseWidth:"any"}),dayPeriod:h({matchPatterns:ot,defaultMatchWidth:"any",parsePatterns:it,defaultParseWidth:"any"})},lt={code:"zh-TW",formatDistance:B,formatLong:A,formatRelative:L,localize:K,match:dt,options:{weekStartsOn:1,firstWeekContainsDate:4}},ut=v({__name:"FormDatepicker",props:{modelValue:{},formInputSize:{},rounded:{type:Boolean},monthPicker:{type:Boolean,default:!1},autoApply:{type:Boolean,default:!1},detail:{type:Boolean,default:!1}},emits:["update:modelValue","blur"],setup(e,{emit:a}){const t=e,n=a,o=d=>{const s=Number(d),c=new Date(s),y=c.getFullYear(),b=(c.getMonth()+1).toString().padStart(2,"0"),g=c.getDate().toString().padStart(2,"0"),P=c.getHours().toString().padStart(2,"0"),k=c.getMinutes().toString().padStart(2,"0");return t.detail?`${y}-${b}-${g} ${P}:${k}:00`:t.monthPicker?`${y}-${b}`:`${y}-${b}-${g}`},l=d=>Number(d)>0,r=d=>d?l(d)?o(d):d:"",i=W(r(t.modelValue)),f=M(()=>F(["disabled:bg-[#F6F6F6] disabled:cursor-not-allowed dark:disabled:bg-darkmode-800/50 dark:disabled:border-transparent disabled:text-[#939393]","[&[readonly]]:bg-slate-100 [&[readonly]]:cursor-not-allowed [&[readonly]]:dark:bg-darkmode-800/50 [&[readonly]]:dark:border-transparent","transition duration-200 ease-in-out w-full text-sm border-0 border-slate-200 shadow-sm rounded-md placeholder:text-slate-400/90 focus:ring-4 focus:ring-primary focus:ring-opacity-20 focus:border-primary focus:border-opacity-40 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 dark:placeholder:text-slate-500/80"])),u=()=>{n("blur",{target:{value:`${i.value}`}})};return S(i,d=>{n("update:modelValue",r(d))}),(d,s)=>(V(),x(w(C),{modelValue:i.value,"onUpdate:modelValue":s[0]||(s[0]=c=>i.value=c),class:"c-date-picker p-0","input-class-name":f.value,format:t.detail?"yyyy/MM/dd HH:mm:ss":t.monthPicker?"yyyy/MM":"yyyy/MM/dd","model-type":"timestamp","enable-time-picker":t.detail,"auto-apply":t.autoApply,onBlur:u,"month-picker":t.monthPicker,"format-locale":w(lt)},null,8,["modelValue","input-class-name","format","enable-time-picker","auto-apply","month-picker","format-locale"]))}});export{ut as _};