import{B as a,c as n,L as u,M as e,R as d}from"./index-gJgnG53e.js";function S(){const t=a(),{fetchUsers:s}=t,o=n(()=>t.users),l=r=>{u().showModal({deleteType:"user",title:e.global.t("delete-alert-title"),content:e.global.t("page-delete-check-desc"),deleteData:{id:r}})},c=()=>{d().showModal({title:e.global.t("新增成功"),content:e.global.t("是否要前往計算薪資？"),confirmButtonText:"前往計算薪資"})};return s(),{users:o,fetchUsers:s,confirmDeleteUser:l,confirmLinkSalary:c}}export{S as u};