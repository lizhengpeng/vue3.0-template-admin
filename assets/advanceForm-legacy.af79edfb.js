!function(){var e=document.createElement("style");e.innerHTML=".FormInfo[data-v-588635bc]{margin-top:20px}.FormInfo .demo-ruleForm[data-v-588635bc]{text-align:left}.FormInfo .info[data-v-588635bc]{text-align:left;padding-left:20px;margin-bottom:20px;font-size:12px}.FormInfo .card-header[data-v-588635bc]{display:flex;justify-content:space-between;align-items:center}.FormInfo .text[data-v-588635bc]{font-size:14px}.FormInfo .item[data-v-588635bc]{margin-bottom:18px}.FormInfo .box-card[data-v-588635bc]{width:100%}.FormInfo .el-row[data-v-588635bc]{margin-bottom:20px}",document.head.appendChild(e),System.register(["./vendor-legacy.7c43af7f.js","./index-legacy.24d027f9.js"],(function(e){"use strict";var n,t,l,o,r,a,u,i,d,c,f,s,m,p,b;return{setters:[function(e){n=e.d,t=e.e,l=e.n,o=e.r,r=e.f,a=e._,u=e.p,i=e.a,d=e.i,c=e.o,f=e.c,s=e.b,m=e.t,p=e.A,b=e.w},function(){}],execute:function(){var v=e("default",n({name:"AdvanceForm",setup:function(){var e=t(),n=l([{province:"上海市",city:"浦东新区",name:"王小虎1",address:"上海市普陀区金沙江路 1518 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎2",address:"上海市普陀区金沙江路 1517 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎3",address:"上海市普陀区金沙江路 1519 弄",edit:!1},{province:"上海市",city:"浦东新区",name:"王小虎4",address:"上海市普陀区金沙江路 1516 弄",edit:!0}]),u=l({name:"",region:"",date1:"",date2:"",delivery:!1,type:[],resource:"",desc:""}),i=o();r((function(){console.log("show sizeFormRef.value",i.value)}));return{handleAddRecord:function(){n.push({province:"",city:"",name:"",address:"",edit:!0})},handleEdit:function(e,t){console.log(e,t),n[e].edit=!0},handleSave:function(e,t){return console.log(e,t),function(e){return Object.keys(e).some((function(n){return""===e[n]}))}(t)?(a.warning("保存前请完善信息！"),!1):(n[e].edit=!1,n[e]=t,a({type:"success",message:"保存成功"}),!0)},handleDelete:function(e,t){console.log(e,t),n.splice(e,1)},tableData:n,handleBack:function(){e.go(-1)},sizeForm:u,activityForm:i,submitForm:function(){i.value.validate((function(e){return e?(a({type:"success",message:"创建成功"}),!0):(console.log("error submit!!"),!1)}))},resetForm:function(){i.value.resetFields()}}}})),y=b();u("data-v-588635bc");var g={class:"FormInfo"},w={class:"info"},_=p("高级表单"),h=s("span",{style:{"text-align":"left"}},"高级表单常见于一次性输入和提交大批量数据的场景。",-1),V={class:"grid-content bg-purple-dark"},F={class:"card-header"},k=s("i",{class:"el-icon-arrow-left"},null,-1),x=p("返回"),z=s("span",null,"表单信息",-1),U=s("div",null,null,-1),C={style:{"text-align":"left"}},I=s("span",null,"记录管理",-1),j={key:1,class:"name-wrapper"},A={key:1},D={key:1},E={key:1},R=p("保存"),S=p("编辑"),$=p("删除"),B={style:{margin:"5px"}},H=p("+ 新增记录"),L={class:"grid-content bg-purple-dark"},M={style:{"text-align":"left"}},O=s("span",null,"活动管理",-1),T=p("-"),q=p("立即创建"),G=p("取消");i();var J=y((function(e,n,t,l,o,r){var a=d("el-divider"),u=d("el-button"),i=d("el-input"),b=d("el-tag"),v=d("el-popover"),J=d("el-table-column"),K=d("el-popconfirm"),N=d("el-table"),P=d("el-card"),Q=d("el-col"),W=d("el-row"),X=d("el-form-item"),Y=d("el-option"),Z=d("el-select"),ee=d("el-date-picker"),ne=d("el-time-picker"),te=d("el-checkbox-button"),le=d("el-checkbox-group"),oe=d("el-radio"),re=d("el-radio-group"),ae=d("el-form");return c(),f("div",g,[s("div",w,[s(a,{"content-position":"left"},{default:y((function(){return[_]})),_:1}),h]),s(W,null,{default:y((function(){return[s(Q,{offset:1,span:22},{default:y((function(){return[s("div",V,[s(P,{class:"box-card"},{header:y((function(){return[s("div",F,[s(u,{class:"button",type:"text",onClick:e.handleBack},{default:y((function(){return[k,x]})),_:1},8,["onClick"]),z,U])]})),default:y((function(){return[s("div",C,[I,s(a)]),s(N,{data:e.tableData,style:{width:"100%"}},{default:y((function(){return[s(J,{label:"姓名",width:"180"},{default:y((function(e){return[s(v,{effect:"light",trigger:"hover",placement:"top"},{default:y((function(){return[s("p",null,"姓名: "+m(e.row.name),1),s("p",null,"住址: "+m(e.row.address),1)]})),reference:y((function(){return[e.row.edit?(c(),f(i,{key:0,modelValue:e.row.name,"onUpdate:modelValue":function(n){return e.row.name=n}},null,8,["modelValue","onUpdate:modelValue"])):(c(),f("div",j,[s(b,{size:"medium"},{default:y((function(){return[p(m(e.row.name),1)]})),_:2},1024)]))]})),_:2},1024)]})),_:1}),s(J,{prop:"province",label:"省份",width:"120"},{default:y((function(e){return[e.row.edit?(c(),f(i,{key:0,modelValue:e.row.province,"onUpdate:modelValue":function(n){return e.row.province=n}},null,8,["modelValue","onUpdate:modelValue"])):(c(),f("span",A,m(e.row.province),1))]})),_:1}),s(J,{prop:"city",label:"市区",width:"120"},{default:y((function(e){return[e.row.edit?(c(),f(i,{key:0,modelValue:e.row.city,"onUpdate:modelValue":function(n){return e.row.city=n}},null,8,["modelValue","onUpdate:modelValue"])):(c(),f("span",D,m(e.row.city),1))]})),_:1}),s(J,{prop:"address",label:"详细地址"},{default:y((function(e){return[e.row.edit?(c(),f(i,{key:0,modelValue:e.row.address,"onUpdate:modelValue":function(n){return e.row.address=n}},null,8,["modelValue","onUpdate:modelValue"])):(c(),f("span",E,m(e.row.address),1))]})),_:1}),s(J,{label:"操作",width:"200"},{default:y((function(n){return[n.row.edit?(c(),f(u,{key:0,size:"mini",type:"success",icon:"el-icon-check",onClick:function(t){return e.handleSave(n.$index,n.row)}},{default:y((function(){return[R]})),_:2},1032,["onClick"])):(c(),f(u,{key:1,size:"mini",icon:"el-icon-edit",onClick:function(t){return e.handleEdit(n.$index,n.row)}},{default:y((function(){return[S]})),_:2},1032,["onClick"])),s(K,{"confirm-button-text":"确定","cancel-button-text":"取消",icon:"el-icon-info","icon-color":"red",title:"确定删除该条记录吗？",onConfirm:function(t){return e.handleDelete(n.$index,n.row)}},{reference:y((function(){return[s(u,{size:"mini",icon:"el-icon-delete",type:"danger"},{default:y((function(){return[$]})),_:1})]})),_:2},1032,["onConfirm"])]})),_:1})]})),_:1},8,["data"]),s("div",B,[s(u,{onClick:e.handleAddRecord},{default:y((function(){return[H]})),_:1},8,["onClick"])])]})),_:1})])]})),_:1})]})),_:1}),s(W,null,{default:y((function(){return[s(Q,{offset:1,span:22},{default:y((function(){return[s("div",L,[s(P,{class:"box-card"},{default:y((function(){return[s("div",M,[O,s(a)]),s(ae,{ref:"activityForm",style:{"text-align":"left"},model:e.sizeForm,"label-width":"80px",size:"mini"},{default:y((function(){return[s(X,{label:"活动名称"},{default:y((function(){return[s(i,{modelValue:e.sizeForm.name,"onUpdate:modelValue":n[1]||(n[1]=function(n){return e.sizeForm.name=n})},null,8,["modelValue"])]})),_:1}),s(X,{label:"活动区域"},{default:y((function(){return[s(Z,{modelValue:e.sizeForm.region,"onUpdate:modelValue":n[2]||(n[2]=function(n){return e.sizeForm.region=n}),placeholder:"请选择活动区域"},{default:y((function(){return[s(Y,{label:"区域一",value:"shanghai"}),s(Y,{label:"区域二",value:"beijing"})]})),_:1},8,["modelValue"])]})),_:1}),s(X,{label:"活动时间"},{default:y((function(){return[s(Q,{span:11},{default:y((function(){return[s(ee,{modelValue:e.sizeForm.date1,"onUpdate:modelValue":n[3]||(n[3]=function(n){return e.sizeForm.date1=n}),type:"date",placeholder:"选择日期",style:{width:"100%"}},null,8,["modelValue"])]})),_:1}),s(Q,{class:"line",span:2},{default:y((function(){return[T]})),_:1}),s(Q,{span:11},{default:y((function(){return[s(ne,{modelValue:e.sizeForm.date2,"onUpdate:modelValue":n[4]||(n[4]=function(n){return e.sizeForm.date2=n}),placeholder:"选择时间",style:{width:"100%"}},null,8,["modelValue"])]})),_:1})]})),_:1}),s(X,{label:"活动性质"},{default:y((function(){return[s(le,{modelValue:e.sizeForm.type,"onUpdate:modelValue":n[5]||(n[5]=function(n){return e.sizeForm.type=n})},{default:y((function(){return[s(te,{label:"美食/餐厅线上活动",name:"type"}),s(te,{label:"地推活动",name:"type"}),s(te,{label:"线下主题活动",name:"type"})]})),_:1},8,["modelValue"])]})),_:1}),s(X,{label:"特殊资源"},{default:y((function(){return[s(re,{modelValue:e.sizeForm.resource,"onUpdate:modelValue":n[6]||(n[6]=function(n){return e.sizeForm.resource=n}),size:"medium"},{default:y((function(){return[s(oe,{border:"",label:"线上品牌商赞助"}),s(oe,{border:"",label:"线下场地免费"})]})),_:1},8,["modelValue"])]})),_:1}),s(X,{size:"large"},{default:y((function(){return[s(u,{type:"primary",onClick:e.submitForm},{default:y((function(){return[q]})),_:1},8,["onClick"]),s(u,null,{default:y((function(){return[G]})),_:1})]})),_:1})]})),_:1},8,["model"])]})),_:1})])]})),_:1})]})),_:1})])}));v.render=J,v.__scopeId="data-v-588635bc"}}}))}();