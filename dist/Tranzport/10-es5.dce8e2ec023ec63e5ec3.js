!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var i=Object.prototype.toString.call(e).slice(8,-1);"Object"===i&&e.constructor&&(i=e.constructor.name);if("Map"===i||"Set"===i)return Array.from(e);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,i=new Array(t);r<t;r++)i[r]=e[r];return i}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{d7gL:function(t,o,a){"use strict";a.r(o),a.d(o,"CustomerModule",function(){return T});var n=a("ofXK"),c=a("3Pt+"),l=a("tyNb"),s=a("lDzL"),b=a("5eHb"),d=a("PSD3"),u=a.n(d),m=a("CzMn"),f=a("fXoL"),h=a("1kSV");function v(e,t){if(1&e&&(f.Sb(0,"div",33),f.Sb(1,"div"),f.Ec(2),f.Rb(),f.Rb()),2&e){var r=t.row;f.zb(2),f.Fc(r.username)}}function p(e,t){1&e&&f.Ec(0),2&e&&f.Gc(" ",t.row.phone," ")}function S(e,t){1&e&&f.Ec(0),2&e&&f.Gc(" ",t.row.email," ")}function g(e,t){if(1&e){var r=f.Tb();f.Sb(0,"span"),f.Sb(1,"button",34),f.cc("click",function(){f.wc(r);var e=t.row,i=t.rowIndex,o=f.ec(),a=f.tc(47);return o.editRow(e,i,a)}),f.Nb(2,"i",35),f.Rb(),f.Sb(3,"button",36),f.cc("click",function(){f.wc(r);var e=t.row;return f.ec().deleteSingleRow(e)}),f.Nb(4,"i",37),f.Rb(),f.Rb()}}function R(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1,"username is required"),f.Rb())}function w(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1," Phone is required"),f.Rb())}function y(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1," Please enter a valid email address"),f.Rb())}function E(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1," Please enter a password"),f.Rb())}function k(e,t){if(1&e){var r=f.Tb();f.Sb(0,"div",38),f.Sb(1,"h4",39),f.Sb(2,"div",40),f.Nb(3,"img",41),f.Sb(4,"div",42),f.Sb(5,"div",43),f.Ec(6," New Customer"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(7,"button",44),f.cc("click",function(){return t.$implicit.dismiss()}),f.Sb(8,"span",45),f.Sb(9,"i",21),f.Ec(10,"close"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(11,"div",46),f.Sb(12,"form",47),f.cc("ngSubmit",function(){f.wc(r);var e=f.ec();return e.onAddRowSave(e.register)}),f.Sb(13,"div",6),f.Sb(14,"div",7),f.Sb(15,"label"),f.Ec(16,"name "),f.Sb(17,"span",48),f.Ec(18,"*"),f.Rb(),f.Rb(),f.Nb(19,"input",49),f.Cc(20,R,2,0,"small",50),f.Rb(),f.Sb(21,"div",7),f.Sb(22,"label"),f.Ec(23,"Phone"),f.Sb(24,"span",48),f.Ec(25,"*"),f.Rb(),f.Rb(),f.Nb(26,"input",51),f.Cc(27,w,2,0,"small",50),f.Rb(),f.Sb(28,"div",7),f.Sb(29,"label"),f.Ec(30,"Email"),f.Sb(31,"span",48),f.Ec(32,"*"),f.Rb(),f.Rb(),f.Nb(33,"input",52),f.Cc(34,y,2,0,"small",50),f.Rb(),f.Sb(35,"div",7),f.Sb(36,"label"),f.Ec(37,"Password"),f.Sb(38,"span",48),f.Ec(39,"*"),f.Rb(),f.Rb(),f.Nb(40,"input",53),f.Cc(41,E,2,0,"small",50),f.Rb(),f.Rb(),f.Sb(42,"div",54),f.Sb(43,"button",55),f.Ec(44,"Submit"),f.Rb(),f.Sb(45,"button",56),f.cc("click",function(){return t.$implicit.close("Close click")}),f.Ec(46,"Close"),f.Rb(),f.Rb(),f.Rb(),f.Rb()}if(2&e){var i=f.ec();f.zb(3),f.jc("src",i.newUserImg,f.yc),f.zb(9),f.jc("formGroup",i.register),f.zb(8),f.jc("ngIf",!i.register.get("username").valid&&i.register.get("username").touched),f.zb(7),f.jc("ngIf",!i.register.get("phone").valid&&i.register.get("phone").touched),f.zb(7),f.jc("ngIf",!i.register.get("email").valid&&i.register.get("email").touched),f.zb(7),f.jc("ngIf",!i.register.get("password").valid&&i.register.get("password").touched),f.zb(2),f.jc("disabled",!i.register.valid)}}function C(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1,"username is required"),f.Rb())}function z(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1," Phone is required"),f.Rb())}function I(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1," Please enter a valid email address"),f.Rb())}function j(e,t){1&e&&(f.Sb(0,"small",57),f.Ec(1," Please enter a password"),f.Rb())}function x(e,t){if(1&e){var r=f.Tb();f.Sb(0,"div",38),f.Sb(1,"h4",39),f.Sb(2,"div",40),f.Nb(3,"img",41),f.Sb(4,"div",42),f.Sb(5,"div",43),f.Ec(6),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(7,"button",44),f.cc("click",function(){return t.$implicit.dismiss("Cross click")}),f.Sb(8,"span",45),f.Sb(9,"i",21),f.Ec(10,"close"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(11,"div",46),f.Sb(12,"form",58),f.cc("ngSubmit",function(){f.wc(r);var e=f.ec();return e.onEditSave(e.editForm)}),f.Sb(13,"div",6),f.Sb(14,"div",7),f.Sb(15,"label"),f.Ec(16,"name "),f.Sb(17,"span",48),f.Ec(18,"*"),f.Rb(),f.Rb(),f.Nb(19,"input",49),f.Cc(20,C,2,0,"small",50),f.Rb(),f.Sb(21,"div",7),f.Sb(22,"label"),f.Ec(23,"Phone"),f.Sb(24,"span",48),f.Ec(25,"*"),f.Rb(),f.Rb(),f.Nb(26,"input",51),f.Cc(27,z,2,0,"small",50),f.Rb(),f.Sb(28,"div",7),f.Sb(29,"label"),f.Ec(30,"Email"),f.Sb(31,"span",48),f.Ec(32,"*"),f.Rb(),f.Rb(),f.Nb(33,"input",52),f.Cc(34,I,2,0,"small",50),f.Rb(),f.Sb(35,"div",7),f.Sb(36,"label"),f.Ec(37,"Password"),f.Sb(38,"span",48),f.Ec(39,"*"),f.Rb(),f.Rb(),f.Nb(40,"input",53),f.Cc(41,j,2,0,"small",50),f.Rb(),f.Rb(),f.Sb(42,"div",54),f.Sb(43,"button",55),f.Ec(44,"Save"),f.Rb(),f.Sb(45,"button",56),f.cc("click",function(){return t.$implicit.close()}),f.Ec(46,"Close"),f.Rb(),f.Rb(),f.Rb(),f.Rb()}if(2&e){var i=f.ec();f.zb(3),f.jc("src",null==i.selectedRowData?null:i.selectedRowData.img,f.yc),f.zb(3),f.Hc(" ",null==i.selectedRowData?null:i.selectedRowData.firstName," ",null==i.selectedRowData?null:i.selectedRowData.lastName,""),f.zb(6),f.jc("formGroup",i.editForm),f.zb(8),f.jc("ngIf",!i.editForm.get("username").valid&&i.editForm.get("username").touched),f.zb(7),f.jc("ngIf",!i.editForm.get("phone").valid&&i.editForm.get("phone").touched),f.zb(7),f.jc("ngIf",!i.editForm.get("email").valid&&i.editForm.get("email").touched),f.zb(7),f.jc("ngIf",!i.editForm.get("password").valid&&i.editForm.get("password").touched),f.zb(2),f.jc("disabled",!i.editForm.valid)}}var A,q,N,D=[{path:"",component:(A=function(){function t(e,i,o,a){var n=this;r(this,t),this.fb=e,this.modalService=i,this.toastr=o,this.request=a,this.rows=[],this.scrollBarHorizontal=window.innerWidth<1200,this.newUserImg="assets/images/users/user-2.png",this.data=[],this.filteredData=[],this.loadingIndicator=!0,this.isRowSelected=!1,this.reorderable=!0,this.selected=[],this.columns=[{name:"username"},{name:"phone"},{name:"email"},{name:"password"}],this.genders=[{id:"1",value:"male"},{id:"2",value:"female"}],this.statusType=[{id:"1",value:"Active"},{id:"2",value:"Completed"},{id:"3",value:"Pending"}],this.designationType=[{id:"1",value:"Manager"},{id:"2",value:"Team Leader"},{id:"3",value:"Clerk"}],this.editForm=this.fb.group({username:["",[c.r.required,c.r.pattern("[a-zA-Z]+")]],phone:["",[c.r.required]],email:["",[c.r.required,c.r.email,c.r.minLength(5)]],password:["",[c.r.required]]}),window.onresize=function(){n.scrollBarHorizontal=window.innerWidth<1200}}var o,a,n;return o=t,(a=[{key:"onSelect",value:function(t){var r,i=t.selected;this.selected.splice(0,this.selected.length),(r=this.selected).push.apply(r,e(i)),this.isRowSelected=0!==this.selected.length}},{key:"deleteSelected",value:function(){var e=this;u.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(function(t){t.value&&(e.selected.forEach(function(t){e.deleteRecord(t)}),e.deleteRecordSuccess(e.selected.length),e.selected=[],e.isRowSelected=!1)})}},{key:"ngOnInit",value:function(){this.viewdata(),this.register=this.fb.group({username:["",[c.r.required,c.r.pattern("[a-zA-Z]+")]],phone:["",[c.r.required]],email:["",[c.r.required,c.r.email,c.r.minLength(5)]],password:["",[c.r.required]]})}},{key:"fetch",value:function(e){this.request.getcustomer().subscribe(function(t){console.log(t),e(t)},function(e){console.log(e)})}},{key:"addRow",value:function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.register.patchValue({id:this.getId(10,100),img:this.newUserImg})}},{key:"editRow",value:function(e,t,r){var i=this;this.modalService.open(r,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.request.fetchcustomerById(e._id).subscribe(function(t){i.editcustmergroup=t[0],console.log(t),i.custmernamevalue=i.editcustmergroup.username,i.custmerphonevalue=i.editcustmergroup.phone,i.custmeremailvalue=i.editcustmergroup.email,i.custmerpasswordvalue=i.editcustmergroup.password,i.IdValue=i.editcustmergroup._id,i.editForm.setValue({username:i.custmernamevalue,phone:i.custmerphonevalue,email:i.custmeremailvalue,password:i.custmerpasswordvalue}),i.selectedRowData=e})}},{key:"deleteSingleRow",value:function(e){var t=this;u.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(function(r){r.value&&(t.deleteRecord(e),t.deleteRecordSuccess(1))})}},{key:"deleteRecord",value:function(e){var t=this;console.log("row",e._id),this.request.deletecustomer(e._id).subscribe(function(e){console.log(e),t.viewdata()},function(e){console.log(e)})}},{key:"arrayRemove",value:function(e,t){return e.filter(function(e){return e.id!==t})}},{key:"onAddRowSave",value:function(e){var t=this;console.log(e.value),this.request.addcustomer(e.value).subscribe(function(r){"success"==r.status?(console.log(r),e.reset(),t.modalService.dismissAll(),t.viewdata(),t.addRecordSuccess()):"error"==r.status&&(console.log("res",r),e.reset(),t.modalService.dismissAll())},function(r){console.log("error",r),e.reset(),t.modalService.dismissAll()})}},{key:"viewdata",value:function(){var e=this;this.fetch(function(t){e.data=t,e.Customers=t.response,e.filteredData=t.response,setTimeout(function(){e.loadingIndicator=!1},500)})}},{key:"onEditSave",value:function(e){var t=this;this.request.updatecustomer(this.IdValue,{username:e.value.username,phone:e.value.phone,email:e.value.email,password:e.value.password}).subscribe(function(e){if("success"==e.status)return t.modalService.dismissAll(),t.viewdata(),t.editRecordSuccess(),!0;"error"==e.status&&t.modalService.dismissAll()},function(e){console.log(e),t.modalService.dismissAll()})}},{key:"filterDatatable",value:function(e){var t=e.target.value.toLowerCase(),r=this.columns.length,i=Object.keys(this.filteredData[0]);this.Customers=this.filteredData.filter(function(e){for(var o=0;o<r;o++)if(-1!==e[i[o]].toString().toLowerCase().indexOf(t)||!t)return!0}),this.table.offset=0}},{key:"getId",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"addRecordSuccess",value:function(){this.toastr.success("Add Record Successfully","")}},{key:"editRecordSuccess",value:function(){this.toastr.success("Edit Record Successfully","")}},{key:"deleteRecordSuccess",value:function(e){this.toastr.error(e+" Records Deleted Successfully","")}}])&&i(o.prototype,a),n&&i(o,n),t}(),A.\u0275fac=function(e){return new(e||A)(f.Mb(c.b),f.Mb(h.d),f.Mb(b.b),f.Mb(m.a))},A.\u0275cmp=f.Gb({type:A,selectors:[["app-customer"]],viewQuery:function(e,t){var r;1&e&&(f.Ic(s.c,1),f.Ic(s.c,1)),2&e&&(f.sc(r=f.dc())&&(t.table=r.first),f.sc(r=f.dc())&&(t.table2=r.first))},features:[f.yb([b.b])],decls:48,vars:19,consts:[[1,"main-content"],[1,"section-body",2,"margin-top","20px"],[1,"row","clearfix"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"p-10"],[1,"row"],[1,"col-lg-6"],[1,"row","m-0"],[1,"col-lg-3","p-0"],[1,"ngxTableHeader"],[1,"table-title"],[1,"col-lg-5","p-0"],[1,"table-search-area"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field",3,"keyup"],[1,"col-lg-4","p-0"],[1,"header-buttons-left"],[1,"icon-button-demo","buttons"],[1,"btn","btn-icon","icon-left","btn-primary","rounded-button",3,"click"],[1,"material-icons"],[1,"btn","btn-icon","icon-left","btn-danger","rounded-button",3,"hidden","click"],["columnMode","force","rowHeight","auto",1,"material",3,"rows","loadingIndicator","headerHeight","footerHeight","limit","scrollbarH","reorderable","selected","selectionType","select"],["table",""],[3,"width","sortable","draggable","resizeable","canAutoResize","headerCheckboxable","checkboxable"],["name","Name",3,"width"],["ngx-datatable-cell-template",""],["name","Phone"],["name","Email"],["name","Actions","sortable","false",3,"width"],["addRecord",""],["editRecord",""],[1,"name-col-style"],[1,"btn","btn-tbl-edit","h-auto",3,"click"],[1,"fas","fa-pen"],[1,"btn","btn-tbl-delete","h-auto",3,"click"],[1,"far","fa-trash-alt"],[1,"modal-header","editRowModal"],["id","modal-basic-title",1,"modal-title"],[1,"table-modal-header"],["alt","avatar",3,"src"],[1,"modal-about"],[1,"font-weight-bold","p-t-10","font-17"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"register-form",3,"formGroup","ngSubmit"],[1,"text-danger"],["type","text","placeholder","name","formControlName","username","required","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","placeholder","Phone","formControlName","phone","required","",1,"form-control"],["type","email","placeholder","Email","formControlName","email","required","",1,"form-control"],["type","password","placeholder","Password","formControlName","password","required","",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-light",3,"click"],[1,"form-text","text-danger"],[3,"formGroup","ngSubmit"]],template:function(e,t){if(1&e){var r=f.Tb();f.Sb(0,"section",0),f.Sb(1,"div",1),f.Sb(2,"div",2),f.Sb(3,"div",3),f.Sb(4,"div",4),f.Sb(5,"div",5),f.Sb(6,"div",6),f.Sb(7,"div",7),f.Sb(8,"div",8),f.Sb(9,"div",9),f.Sb(10,"div",10),f.Sb(11,"div",11),f.Sb(12,"h2"),f.Sb(13,"strong"),f.Ec(14,"Customer"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(15,"div",12),f.Sb(16,"div",10),f.Sb(17,"div",13),f.Sb(18,"div"),f.Sb(19,"label",14),f.Sb(20,"i",15),f.Ec(21,"search"),f.Rb(),f.Rb(),f.Sb(22,"input",16),f.cc("keyup",function(e){return t.filterDatatable(e)}),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(23,"div",17),f.Sb(24,"div",10),f.Sb(25,"div",18),f.Sb(26,"div",19),f.Sb(27,"button",20),f.cc("click",function(){f.wc(r);var e=f.tc(45);return t.addRow(e)}),f.Sb(28,"i",21),f.Ec(29,"add"),f.Rb(),f.Rb(),f.Sb(30,"button",22),f.cc("click",function(){return t.deleteSelected()}),f.Sb(31,"i",21),f.Ec(32,"delete"),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Sb(33,"ngx-datatable",23,24),f.cc("select",function(e){return t.onSelect(e)}),f.Nb(35,"ngx-datatable-column",25),f.Sb(36,"ngx-datatable-column",26),f.Cc(37,v,3,1,"ng-template",27),f.Rb(),f.Sb(38,"ngx-datatable-column",28),f.Cc(39,p,1,1,"ng-template",27),f.Rb(),f.Sb(40,"ngx-datatable-column",29),f.Cc(41,S,1,1,"ng-template",27),f.Rb(),f.Sb(42,"ngx-datatable-column",30),f.Cc(43,g,5,0,"ng-template",27),f.Rb(),f.Rb(),f.Cc(44,k,47,7,"ng-template",null,31,f.Dc),f.Cc(46,x,47,9,"ng-template",null,32,f.Dc),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb(),f.Rb()}2&e&&(f.zb(30),f.jc("hidden",!t.isRowSelected),f.zb(3),f.jc("rows",t.Customers)("loadingIndicator",t.loadingIndicator)("headerHeight",60)("footerHeight",80)("limit",10)("scrollbarH",t.scrollBarHorizontal)("reorderable",t.reorderable)("selected",t.selected)("selectionType","checkbox"),f.zb(2),f.jc("width",70)("sortable",!1)("draggable",!1)("resizeable",!1)("canAutoResize",!1)("headerCheckboxable",!0)("checkboxable",!0),f.zb(1),f.jc("width",200),f.zb(6),f.jc("width",100))},directives:[s.c,s.b,s.a,c.t,c.j,c.e,c.a,c.i,c.d,c.p,n.m,c.m],styles:[""]}),A)}],P=((N=function e(){r(this,e)}).\u0275mod=f.Kb({type:N}),N.\u0275inj=f.Jb({factory:function(e){return new(e||N)},imports:[[l.f.forChild(D)],l.f]}),N),T=((q=function e(){r(this,e)}).\u0275mod=f.Kb({type:q}),q.\u0275inj=f.Jb({factory:function(e){return new(e||q)},imports:[[n.c,c.f,c.o,P,s.d,b.a.forRoot()]]}),q)}}])}();