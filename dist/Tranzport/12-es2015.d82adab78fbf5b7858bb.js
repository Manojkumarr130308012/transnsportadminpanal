(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{Mtsd:function(e,t,o){"use strict";o.r(t),o.d(t,"GoodstypeModule",function(){return k});var i=o("ofXK"),s=o("3Pt+"),c=o("tyNb"),l=o("lDzL"),r=o("5eHb"),d=o("PSD3"),a=o.n(d),n=o("CzMn"),b=o("fXoL"),u=o("1kSV");function h(e,t){if(1&e&&(b.Sb(0,"div",31),b.Sb(1,"div"),b.Ec(2),b.Rb(),b.Rb()),2&e){const e=t.row;b.zb(2),b.Fc(e.GoodsName)}}function m(e,t){if(1&e){const e=b.Tb();b.Sb(0,"span"),b.Sb(1,"button",32),b.cc("click",function(){b.wc(e);const o=t.row,i=t.rowIndex,s=b.ec(),c=b.tc(45);return s.editRow(o,i,c)}),b.Nb(2,"i",33),b.Rb(),b.Sb(3,"button",34),b.cc("click",function(){b.wc(e);const o=t.row;return b.ec().deleteSingleRow(o)}),b.Nb(4,"i",35),b.Rb(),b.Rb()}}function f(e,t){1&e&&(b.Sb(0,"small",51),b.Ec(1,"goodsname is required"),b.Rb())}function S(e,t){if(1&e){const e=b.Tb();b.Sb(0,"div",36),b.Sb(1,"h4",37),b.Sb(2,"div",38),b.Sb(3,"div",39),b.Sb(4,"div",40),b.Ec(5," New goodsname"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(6,"button",41),b.cc("click",function(){return t.$implicit.dismiss()}),b.Sb(7,"span",42),b.Sb(8,"i",21),b.Ec(9,"close"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(10,"div",43),b.Sb(11,"form",44),b.cc("ngSubmit",function(){b.wc(e);const t=b.ec();return t.onAddRowSave(t.register)}),b.Sb(12,"div",6),b.Sb(13,"div",7),b.Sb(14,"label"),b.Ec(15,"goodsname "),b.Sb(16,"span",45),b.Ec(17,"*"),b.Rb(),b.Rb(),b.Nb(18,"input",46),b.Cc(19,f,2,0,"small",47),b.Rb(),b.Rb(),b.Sb(20,"div",48),b.Sb(21,"button",49),b.Ec(22,"Submit"),b.Rb(),b.Sb(23,"button",50),b.cc("click",function(){return t.$implicit.close("Close click")}),b.Ec(24,"Close"),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&e){const e=b.ec();b.zb(11),b.jc("formGroup",e.register),b.zb(8),b.jc("ngIf",!e.register.get("GoodsName").valid&&e.register.get("GoodsName").touched),b.zb(2),b.jc("disabled",!e.register.valid)}}function R(e,t){1&e&&(b.Sb(0,"small",51),b.Ec(1,"Goodsname is required"),b.Rb())}function g(e,t){if(1&e){const e=b.Tb();b.Sb(0,"div",36),b.Sb(1,"h4",37),b.Sb(2,"div",38),b.Sb(3,"div",39),b.Sb(4,"div",40),b.Ec(5),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(6,"button",41),b.cc("click",function(){return t.$implicit.dismiss("Cross click")}),b.Sb(7,"span",42),b.Sb(8,"i",21),b.Ec(9,"close"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(10,"div",43),b.Sb(11,"form",52),b.cc("ngSubmit",function(){b.wc(e);const t=b.ec();return t.onEditSave(t.editForm)}),b.Sb(12,"div",6),b.Sb(13,"div",7),b.Sb(14,"label"),b.Ec(15,"goodsname "),b.Sb(16,"span",45),b.Ec(17,"*"),b.Rb(),b.Rb(),b.Nb(18,"input",46),b.Cc(19,R,2,0,"small",47),b.Rb(),b.Rb(),b.Sb(20,"div",48),b.Sb(21,"button",49),b.Ec(22,"Save"),b.Rb(),b.Sb(23,"button",50),b.cc("click",function(){return t.$implicit.close()}),b.Ec(24,"Close"),b.Rb(),b.Rb(),b.Rb(),b.Rb()}if(2&e){const e=b.ec();b.zb(5),b.Gc(" ",null==e.selectedRowData?null:e.selectedRowData.GoodsName,""),b.zb(6),b.jc("formGroup",e.editForm),b.zb(8),b.jc("ngIf",!e.editForm.get("GoodsName").valid&&e.editForm.get("GoodsName").touched),b.zb(2),b.jc("disabled",!e.editForm.valid)}}const p=[{path:"",component:(()=>{class e{constructor(e,t,o,i){this.fb=e,this.modalService=t,this.toastr=o,this.request=i,this.rows=[],this.scrollBarHorizontal=window.innerWidth<1200,this.newUserImg="assets/images/users/user-2.png",this.data=[],this.filteredData=[],this.loadingIndicator=!0,this.isRowSelected=!1,this.reorderable=!0,this.selected=[],this.columns=[{name:"GoodsName"}],this.genders=[{id:"1",value:"male"},{id:"2",value:"female"}],this.statusType=[{id:"1",value:"Active"},{id:"2",value:"Completed"},{id:"3",value:"Pending"}],this.designationType=[{id:"1",value:"Manager"},{id:"2",value:"Team Leader"},{id:"3",value:"Clerk"}],this.editForm=this.fb.group({GoodsName:["",[s.r.required]]}),window.onresize=()=>{this.scrollBarHorizontal=window.innerWidth<1200}}onSelect({selected:e}){this.selected.splice(0,this.selected.length),this.selected.push(...e),this.isRowSelected=0!==this.selected.length}deleteSelected(){a.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(e=>{e.value&&(this.selected.forEach(e=>{this.deleteRecord(e)}),this.deleteRecordSuccess(this.selected.length),this.selected=[],this.isRowSelected=!1)})}ngOnInit(){this.viewdata(),this.register=this.fb.group({GoodsName:["",[s.r.required]]})}fetch(e){this.request.getgoodstype().subscribe(t=>{console.log(t),e(t)},e=>{console.log(e)})}addRow(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.register.patchValue({id:this.getId(10,100),img:this.newUserImg})}editRow(e,t,o){this.modalService.open(o,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.request.fetchgoodstypeById(e._id).subscribe(t=>{this.editcustmergroup=t[0],console.log(t),this.GoodsNamenamevalue=this.editcustmergroup.GoodsName,this.IdValue=this.editcustmergroup._id,this.editForm.setValue({GoodsName:this.GoodsNamenamevalue}),this.selectedRowData=e})}deleteSingleRow(e){a.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(t=>{t.value&&(this.deleteRecord(e),this.deleteRecordSuccess(1))})}deleteRecord(e){console.log("row",e._id),this.request.deletegoodstype(e._id).subscribe(e=>{console.log(e),this.viewdata()},e=>{console.log(e)})}arrayRemove(e,t){return e.filter(function(e){return e.id!==t})}onAddRowSave(e){console.log(e.value),this.request.addgoodstype(e.value).subscribe(t=>{"success"==t.status?(console.log(t),e.reset(),this.modalService.dismissAll(),this.viewdata(),this.addRecordSuccess()):"error"==t.status&&(console.log("res",t),e.reset(),this.modalService.dismissAll())},t=>{console.log("error",t),e.reset(),this.modalService.dismissAll()})}viewdata(){this.fetch(e=>{this.data=e,this.Customers=e.response,this.filteredData=e.response,setTimeout(()=>{this.loadingIndicator=!1},500)})}onEditSave(e){this.request.updategoodstype(this.IdValue,{GoodsName:e.value.GoodsName}).subscribe(e=>{if("success"==e.status)return this.modalService.dismissAll(),this.viewdata(),this.editRecordSuccess(),!0;"error"==e.status&&this.modalService.dismissAll()},e=>{console.log(e),this.modalService.dismissAll()})}filterDatatable(e){const t=e.target.value.toLowerCase(),o=this.columns.length,i=Object.keys(this.filteredData[0]);this.Customers=this.filteredData.filter(function(e){for(let s=0;s<o;s++)if(-1!==e[i[s]].toString().toLowerCase().indexOf(t)||!t)return!0}),this.table.offset=0}getId(e,t){return Math.floor(Math.random()*(t-e+1)+e)}addRecordSuccess(){this.toastr.success("Add Record Successfully","")}editRecordSuccess(){this.toastr.success("Edit Record Successfully","")}deleteRecordSuccess(e){this.toastr.error(e+" Records Deleted Successfully","")}}return e.\u0275fac=function(t){return new(t||e)(b.Mb(s.b),b.Mb(u.d),b.Mb(r.b),b.Mb(n.a))},e.\u0275cmp=b.Gb({type:e,selectors:[["app-goodstype"]],viewQuery:function(e,t){if(1&e&&(b.Ic(l.c,1),b.Ic(l.c,1)),2&e){let e;b.sc(e=b.dc())&&(t.table=e.first),b.sc(e=b.dc())&&(t.table2=e.first)}},features:[b.yb([r.b])],decls:46,vars:19,consts:[[1,"main-content"],[1,"section-body",2,"margin-top","20px"],[1,"row","clearfix"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"p-10"],[1,"row"],[1,"col-lg-6"],[1,"row","m-0"],[1,"col-lg-3","p-0"],[1,"ngxTableHeader"],[1,"table-title"],[1,"col-lg-5","p-0"],[1,"table-search-area"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field",3,"keyup"],[1,"col-lg-4","p-0"],[1,"header-buttons-left"],[1,"icon-button-demo","buttons"],[1,"btn","btn-icon","icon-left","btn-primary","rounded-button",3,"click"],[1,"material-icons"],[1,"btn","btn-icon","icon-left","btn-danger","rounded-button",3,"hidden","click"],["columnMode","force","rowHeight","auto",1,"material",3,"rows","loadingIndicator","headerHeight","footerHeight","limit","scrollbarH","reorderable","selected","selectionType","select"],["table",""],[3,"width","sortable","draggable","resizeable","canAutoResize","headerCheckboxable","checkboxable"],["name","Name",3,"width"],["ngx-datatable-cell-template",""],["name","Actions","sortable","false",3,"width"],["addRecord",""],["editRecord",""],[1,"name-col-style"],[1,"btn","btn-tbl-edit","h-auto",3,"click"],[1,"fas","fa-pen"],[1,"btn","btn-tbl-delete","h-auto",3,"click"],[1,"far","fa-trash-alt"],[1,"modal-header","editRowModal"],["id","modal-basic-title",1,"modal-title"],[1,"table-modal-header"],[1,"modal-about"],[1,"font-weight-bold","p-t-10","font-17"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"register-form",3,"formGroup","ngSubmit"],[1,"text-danger"],["type","text","placeholder","name","formControlName","GoodsName","required","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-light",3,"click"],[1,"form-text","text-danger"],[3,"formGroup","ngSubmit"]],template:function(e,t){if(1&e){const e=b.Tb();b.Sb(0,"p"),b.Ec(1,"goodstype works!"),b.Rb(),b.Sb(2,"section",0),b.Sb(3,"div",1),b.Sb(4,"div",2),b.Sb(5,"div",3),b.Sb(6,"div",4),b.Sb(7,"div",5),b.Sb(8,"div",6),b.Sb(9,"div",7),b.Sb(10,"div",8),b.Sb(11,"div",9),b.Sb(12,"div",10),b.Sb(13,"div",11),b.Sb(14,"h2"),b.Sb(15,"strong"),b.Ec(16,"Customer"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(17,"div",12),b.Sb(18,"div",10),b.Sb(19,"div",13),b.Sb(20,"div"),b.Sb(21,"label",14),b.Sb(22,"i",15),b.Ec(23,"search"),b.Rb(),b.Rb(),b.Sb(24,"input",16),b.cc("keyup",function(e){return t.filterDatatable(e)}),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(25,"div",17),b.Sb(26,"div",10),b.Sb(27,"div",18),b.Sb(28,"div",19),b.Sb(29,"button",20),b.cc("click",function(){b.wc(e);const o=b.tc(43);return t.addRow(o)}),b.Sb(30,"i",21),b.Ec(31,"add"),b.Rb(),b.Rb(),b.Sb(32,"button",22),b.cc("click",function(){return t.deleteSelected()}),b.Sb(33,"i",21),b.Ec(34,"delete"),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Sb(35,"ngx-datatable",23,24),b.cc("select",function(e){return t.onSelect(e)}),b.Nb(37,"ngx-datatable-column",25),b.Sb(38,"ngx-datatable-column",26),b.Cc(39,h,3,1,"ng-template",27),b.Rb(),b.Sb(40,"ngx-datatable-column",28),b.Cc(41,m,5,0,"ng-template",27),b.Rb(),b.Rb(),b.Cc(42,S,25,3,"ng-template",null,29,b.Dc),b.Cc(44,g,25,4,"ng-template",null,30,b.Dc),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb(),b.Rb()}2&e&&(b.zb(32),b.jc("hidden",!t.isRowSelected),b.zb(3),b.jc("rows",t.Customers)("loadingIndicator",t.loadingIndicator)("headerHeight",60)("footerHeight",80)("limit",10)("scrollbarH",t.scrollBarHorizontal)("reorderable",t.reorderable)("selected",t.selected)("selectionType","checkbox"),b.zb(2),b.jc("width",70)("sortable",!1)("draggable",!1)("resizeable",!1)("canAutoResize",!1)("headerCheckboxable",!0)("checkboxable",!0),b.zb(1),b.jc("width",200),b.zb(2),b.jc("width",100))},directives:[l.c,l.b,l.a,s.t,s.j,s.e,s.a,s.i,s.d,s.p,i.m],styles:[""]}),e})()}];let v=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(t){return new(t||e)},imports:[[c.f.forChild(p)],c.f]}),e})();var w=o("mkVx"),y=o("tk/3");let k=(()=>{class e{}return e.\u0275mod=b.Kb({type:e}),e.\u0275inj=b.Jb({factory:function(t){return new(t||e)},imports:[[i.c,s.f,s.o,v,l.d,y.c,r.a.forRoot(),w.a]]}),e})()}}]);