!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"0m1P":function(t,o,r){"use strict";r.r(o),r.d(o,"DesignationModule",function(){return C});var a=r("ofXK"),c=r("3Pt+"),l=r("tyNb"),s=r("lDzL"),d=r("5eHb"),b=r("PSD3"),u=r.n(b),f=r("CzMn"),m=r("fXoL"),g=r("1kSV");function v(e,t){if(1&e&&(m.Ub(0,"div",31),m.Ub(1,"div"),m.Ic(2),m.Tb(),m.Tb()),2&e){var i=t.row;m.Bb(2),m.Jc(i.designation)}}function h(e,t){if(1&e){var i=m.Vb();m.Ub(0,"span"),m.Ub(1,"button",32),m.ec("click",function(){m.Ac(i);var e=t.row,n=t.rowIndex,o=m.ic(),r=m.xc(43);return o.editRow(e,n,r)}),m.Pb(2,"i",33),m.Tb(),m.Ub(3,"button",34),m.ec("click",function(){m.Ac(i);var e=t.row;return m.ic().deleteSingleRow(e)}),m.Pb(4,"i",35),m.Tb(),m.Tb()}}function p(e,t){1&e&&(m.Ub(0,"small",53),m.Ic(1,"designation is required"),m.Tb())}function T(e,t){if(1&e){var i=m.Vb();m.Ub(0,"div",36),m.Ub(1,"h4",37),m.Ub(2,"div",38),m.Pb(3,"img",39),m.Ub(4,"div",40),m.Ub(5,"div",41),m.Ic(6," New Category"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(7,"button",42),m.ec("click",function(){return t.$implicit.dismiss()}),m.Ub(8,"span",43),m.Ub(9,"i",21),m.Ic(10,"close"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(11,"div",44),m.Ub(12,"form",45),m.ec("ngSubmit",function(){m.Ac(i);var e=m.ic();return e.onAddRowSave(e.register)}),m.Ub(13,"div",6),m.Ub(14,"div",46),m.Ub(15,"label"),m.Ic(16,"designation"),m.Ub(17,"span",47),m.Ic(18,"*"),m.Tb(),m.Tb(),m.Pb(19,"input",48),m.Gc(20,p,2,0,"small",49),m.Tb(),m.Tb(),m.Ub(21,"div",50),m.Ub(22,"button",51),m.Ic(23,"Submit"),m.Tb(),m.Ub(24,"button",52),m.ec("click",function(){return t.$implicit.close("Close click")}),m.Ic(25,"Close"),m.Tb(),m.Tb(),m.Tb(),m.Tb()}if(2&e){var n=m.ic();m.Bb(3),m.nc("src",n.newUserImg,m.Cc),m.Bb(9),m.nc("formGroup",n.register),m.Bb(8),m.nc("ngIf",!n.register.get("designation").valid&&n.register.get("designation").touched),m.Bb(2),m.nc("disabled",!n.register.valid)}}function w(e,t){1&e&&(m.Ub(0,"small",53),m.Ic(1,"designation is required"),m.Tb())}function U(e,t){if(1&e){var i=m.Vb();m.Ub(0,"div",36),m.Ub(1,"h4",37),m.Ub(2,"div",38),m.Pb(3,"img",39),m.Ub(4,"div",40),m.Ub(5,"div",41),m.Ic(6),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(7,"button",42),m.ec("click",function(){return t.$implicit.dismiss("Cross click")}),m.Ub(8,"span",43),m.Ub(9,"i",21),m.Ic(10,"close"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(11,"div",44),m.Ub(12,"form",54),m.ec("ngSubmit",function(){m.Ac(i);var e=m.ic();return e.onEditSave(e.editForm)}),m.Ub(13,"div",6),m.Ub(14,"div",46),m.Ub(15,"label"),m.Ic(16,"designation "),m.Ub(17,"span",47),m.Ic(18,"*"),m.Tb(),m.Tb(),m.Pb(19,"input",48),m.Gc(20,w,2,0,"small",49),m.Tb(),m.Tb(),m.Ub(21,"div",50),m.Ub(22,"button",51),m.Ic(23,"Save"),m.Tb(),m.Ub(24,"button",52),m.ec("click",function(){return t.$implicit.close()}),m.Ic(25,"Close"),m.Tb(),m.Tb(),m.Tb(),m.Tb()}if(2&e){var n=m.ic();m.Bb(3),m.nc("src",null==n.selectedRowData?null:n.selectedRowData.img,m.Cc),m.Bb(3),m.Lc(" ",null==n.selectedRowData?null:n.selectedRowData.firstName," ",null==n.selectedRowData?null:n.selectedRowData.lastName,""),m.Bb(6),m.nc("formGroup",n.editForm),m.Bb(8),m.nc("ngIf",!n.editForm.get("designation").valid&&n.editForm.get("designation").touched),m.Bb(2),m.nc("disabled",!n.editForm.valid)}}var y,S,k,I=[{path:"",component:(y=function(){function t(e,n,o,r){var a=this;i(this,t),this.fb=e,this.modalService=n,this.toastr=o,this.request=r,this.rows=[],this.scrollBarHorizontal=window.innerWidth<1200,this.newUserImg="assets/images/users/user-2.png",this.data=[],this.filteredData=[],this.loadingIndicator=!0,this.isRowSelected=!1,this.reorderable=!0,this.selected=[],this.columns=[{name:"username"},{name:"phone"},{name:"email"},{name:"password"}],this.genders=[{id:"1",value:"male"},{id:"2",value:"female"}],this.statusType=[{id:"1",value:"Active"},{id:"2",value:"Completed"},{id:"3",value:"Pending"}],this.designationType=[{id:"1",value:"Manager"},{id:"2",value:"Team Leader"},{id:"3",value:"Clerk"}],this.editForm=this.fb.group({designation:["",[c.s.required]]}),window.onresize=function(){a.scrollBarHorizontal=window.innerWidth<1200}}var o,r,a;return o=t,(r=[{key:"onSelect",value:function(t){var i,n=t.selected;this.selected.splice(0,this.selected.length),(i=this.selected).push.apply(i,e(n)),this.isRowSelected=0!==this.selected.length}},{key:"deleteSelected",value:function(){var e=this;u.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(function(t){t.value&&(e.selected.forEach(function(t){e.deleteRecord(t)}),e.deleteRecordSuccess(e.selected.length),e.selected=[],e.isRowSelected=!1)})}},{key:"ngOnInit",value:function(){this.viewdata(),this.register=this.fb.group({designation:["",[c.s.required]]})}},{key:"fetch",value:function(e){this.request.getdesignation().subscribe(function(t){console.log(t),e(t)},function(e){console.log(e)})}},{key:"addRow",value:function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.register.patchValue({id:this.getId(10,100),img:this.newUserImg})}},{key:"editRow",value:function(e,t,i){var n=this;this.modalService.open(i,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.request.fetchdesignationById(e._id).subscribe(function(t){n.editcustmergroup=t[0],console.log("ddddddd",n.editcustmergroup),n.IdValue=n.editcustmergroup._id,n.designationnamevalue=n.editcustmergroup.designation,n.editForm.setValue({designation:n.designationnamevalue}),n.selectedRowData=e})}},{key:"deleteSingleRow",value:function(e){var t=this;u.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(function(i){i.value&&(t.deleteRecord(e),t.deleteRecordSuccess(1))})}},{key:"deleteRecord",value:function(e){var t=this;console.log("row",e._id),this.request.deletedesignation(e._id).subscribe(function(e){console.log(e),t.viewdata()},function(e){console.log(e)})}},{key:"arrayRemove",value:function(e,t){return e.filter(function(e){return e.id!==t})}},{key:"onAddRowSave",value:function(e){var t=this;console.log(e.value),this.request.adddesignation(e.value).subscribe(function(i){"success"==i.status?(console.log(i),e.reset(),t.modalService.dismissAll(),t.viewdata(),t.addRecordSuccess()):"error"==i.status&&(console.log("res",i),e.reset(),t.modalService.dismissAll())},function(i){console.log("error",i),e.reset(),t.modalService.dismissAll()})}},{key:"viewdata",value:function(){var e=this;this.fetch(function(t){e.data=t,e.Countrys=t,e.filteredData=t,setTimeout(function(){e.loadingIndicator=!1},500)})}},{key:"onEditSave",value:function(e){var t=this;this.request.updatedesignation(this.IdValue,{Category:e.value.Category}).subscribe(function(e){if("success"==e.status)return t.modalService.dismissAll(),t.viewdata(),t.editRecordSuccess(),!0;"error"==e.status&&t.modalService.dismissAll()},function(e){console.log(e),t.modalService.dismissAll()})}},{key:"filterDatatable",value:function(e){var t=e.target.value.toLowerCase(),i=this.columns.length,n=Object.keys(this.filteredData[0]);this.Countrys=this.filteredData.filter(function(e){for(var o=0;o<i;o++)if(-1!==e[n[o]].toString().toLowerCase().indexOf(t)||!t)return!0}),this.table.offset=0}},{key:"getId",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"addRecordSuccess",value:function(){this.toastr.success("Add Record Successfully","")}},{key:"editRecordSuccess",value:function(){this.toastr.success("Edit Record Successfully","")}},{key:"deleteRecordSuccess",value:function(e){this.toastr.error(e+" Records Deleted Successfully","")}}])&&n(o.prototype,r),a&&n(o,a),t}(),y.\u0275fac=function(e){return new(e||y)(m.Ob(c.b),m.Ob(g.d),m.Ob(d.b),m.Ob(f.a))},y.\u0275cmp=m.Ib({type:y,selectors:[["app-designation"]],viewQuery:function(e,t){var i;1&e&&(m.Mc(s.c,1),m.Mc(s.c,1)),2&e&&(m.wc(i=m.fc())&&(t.table=i.first),m.wc(i=m.fc())&&(t.table2=i.first))},features:[m.Ab([d.b])],decls:44,vars:19,consts:[[1,"main-content"],[1,"section-body",2,"margin-top","20px"],[1,"row","clearfix"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"p-10"],[1,"row"],[1,"col-lg-6"],[1,"row","m-0"],[1,"col-lg-3","p-0"],[1,"ngxTableHeader"],[1,"table-title"],[1,"col-lg-5","p-0"],[1,"table-search-area"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field",3,"keyup"],[1,"col-lg-4","p-0"],[1,"header-buttons-left"],[1,"icon-button-demo","buttons"],[1,"btn","btn-icon","icon-left","btn-primary","rounded-button",3,"click"],[1,"material-icons"],[1,"btn","btn-icon","icon-left","btn-danger","rounded-button",3,"hidden","click"],["columnMode","force","rowHeight","auto",1,"material",3,"rows","loadingIndicator","headerHeight","footerHeight","limit","scrollbarH","reorderable","selected","selectionType","select"],["table",""],[3,"width","sortable","draggable","resizeable","canAutoResize","headerCheckboxable","checkboxable"],["name","Designation",3,"width"],["ngx-datatable-cell-template",""],["name","Actions","sortable","false",3,"width"],["addRecord",""],["editRecord",""],[1,"name-col-style"],[1,"btn","btn-tbl-edit","h-auto",3,"click"],[1,"fas","fa-pen"],[1,"btn","btn-tbl-delete","h-auto",3,"click"],[1,"far","fa-trash-alt"],[1,"modal-header","editRowModal"],["id","modal-basic-title",1,"modal-title"],[1,"table-modal-header"],["alt","avatar",3,"src"],[1,"modal-about"],[1,"font-weight-bold","p-t-10","font-17"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"register-form",3,"formGroup","ngSubmit"],[1,"col-lg-12"],[1,"text-danger"],["type","text","placeholder","designation","formControlName","designation","required","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-light",3,"click"],[1,"form-text","text-danger"],[3,"formGroup","ngSubmit"]],template:function(e,t){if(1&e){var i=m.Vb();m.Ub(0,"section",0),m.Ub(1,"div",1),m.Ub(2,"div",2),m.Ub(3,"div",3),m.Ub(4,"div",4),m.Ub(5,"div",5),m.Ub(6,"div",6),m.Ub(7,"div",7),m.Ub(8,"div",8),m.Ub(9,"div",9),m.Ub(10,"div",10),m.Ub(11,"div",11),m.Ub(12,"h2"),m.Ub(13,"strong"),m.Ic(14,"Designation"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(15,"div",12),m.Ub(16,"div",10),m.Ub(17,"div",13),m.Ub(18,"div"),m.Ub(19,"label",14),m.Ub(20,"i",15),m.Ic(21,"search"),m.Tb(),m.Tb(),m.Ub(22,"input",16),m.ec("keyup",function(e){return t.filterDatatable(e)}),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(23,"div",17),m.Ub(24,"div",10),m.Ub(25,"div",18),m.Ub(26,"div",19),m.Ub(27,"button",20),m.ec("click",function(){m.Ac(i);var e=m.xc(41);return t.addRow(e)}),m.Ub(28,"i",21),m.Ic(29,"add"),m.Tb(),m.Tb(),m.Ub(30,"button",22),m.ec("click",function(){return t.deleteSelected()}),m.Ub(31,"i",21),m.Ic(32,"delete"),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Ub(33,"ngx-datatable",23,24),m.ec("select",function(e){return t.onSelect(e)}),m.Pb(35,"ngx-datatable-column",25),m.Ub(36,"ngx-datatable-column",26),m.Gc(37,v,3,1,"ng-template",27),m.Tb(),m.Ub(38,"ngx-datatable-column",28),m.Gc(39,h,5,0,"ng-template",27),m.Tb(),m.Tb(),m.Gc(40,T,26,4,"ng-template",null,29,m.Hc),m.Gc(42,U,26,6,"ng-template",null,30,m.Hc),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb(),m.Tb()}2&e&&(m.Bb(30),m.nc("hidden",!t.isRowSelected),m.Bb(3),m.nc("rows",t.Countrys)("loadingIndicator",t.loadingIndicator)("headerHeight",60)("footerHeight",80)("limit",10)("scrollbarH",t.scrollBarHorizontal)("reorderable",t.reorderable)("selected",t.selected)("selectionType","checkbox"),m.Bb(2),m.nc("width",70)("sortable",!1)("draggable",!1)("resizeable",!1)("canAutoResize",!1)("headerCheckboxable",!0)("checkboxable",!0),m.Bb(1),m.nc("width",200),m.Bb(2),m.nc("width",100))},directives:[s.c,s.b,s.a,c.u,c.j,c.e,c.a,c.i,c.d,c.q,a.m],styles:[""]}),y)}],R=((k=function e(){i(this,e)}).\u0275mod=m.Mb({type:k}),k.\u0275inj=m.Lb({factory:function(e){return new(e||k)},imports:[[l.f.forChild(I)],l.f]}),k),C=((S=function e(){i(this,e)}).\u0275mod=m.Mb({type:S}),S.\u0275inj=m.Lb({factory:function(e){return new(e||S)},imports:[[a.c,c.f,c.p,R,s.d,d.a.forRoot()]]}),S)}}])}();