!function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,i){if(!e)return;if("string"==typeof e)return t(e,i);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return t(e,i)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var i=0;i<t.length;i++){var r=t[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{"7UCR":function(t,n,o){"use strict";o.r(n),o.d(n,"UserModule",function(){return F});var a=o("ofXK"),l=o("3Pt+"),c=o("tyNb"),s=o("lDzL"),b=o("5eHb"),d=o("PSD3"),u=o.n(d),m=o("CzMn"),f=o("fXoL"),h=o("1kSV");function v(e,t){if(1&e&&(f.Ub(0,"div",33),f.Ub(1,"div"),f.Ic(2),f.Tb(),f.Tb()),2&e){var i=t.row;f.Bb(2),f.Jc(i.username)}}function p(e,t){1&e&&f.Ic(0),2&e&&f.Kc(" ",t.row.phone," ")}function g(e,t){1&e&&f.Ic(0),2&e&&f.Kc(" ",t.row.email," ")}function T(e,t){if(1&e){var i=f.Vb();f.Ub(0,"span"),f.Ub(1,"button",34),f.ec("click",function(){f.Ac(i);var e=t.row,r=t.rowIndex,n=f.ic(),o=f.xc(47);return n.editRow(e,r,o)}),f.Pb(2,"i",35),f.Tb(),f.Ub(3,"button",36),f.ec("click",function(){f.Ac(i);var e=t.row;return f.ic().deleteSingleRow(e)}),f.Pb(4,"i",37),f.Tb(),f.Tb()}}function U(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1,"username is required"),f.Tb())}function w(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1," Phone is required"),f.Tb())}function y(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1," Please enter a valid email address"),f.Tb())}function I(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1," Please enter a password"),f.Tb())}function S(e,t){if(1&e){var i=f.Vb();f.Ub(0,"div",38),f.Ub(1,"h4",39),f.Ub(2,"div",40),f.Pb(3,"img",41),f.Ub(4,"div",42),f.Ub(5,"div",43),f.Ic(6," New Customer"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(7,"button",44),f.ec("click",function(){return t.$implicit.dismiss()}),f.Ub(8,"span",45),f.Ub(9,"i",21),f.Ic(10,"close"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(11,"div",46),f.Ub(12,"form",47),f.ec("ngSubmit",function(){f.Ac(i);var e=f.ic();return e.onAddRowSave(e.register)}),f.Ub(13,"div",6),f.Ub(14,"div",7),f.Ub(15,"label"),f.Ic(16,"name "),f.Ub(17,"span",48),f.Ic(18,"*"),f.Tb(),f.Tb(),f.Pb(19,"input",49),f.Gc(20,U,2,0,"small",50),f.Tb(),f.Ub(21,"div",7),f.Ub(22,"label"),f.Ic(23,"Phone"),f.Ub(24,"span",48),f.Ic(25,"*"),f.Tb(),f.Tb(),f.Pb(26,"input",51),f.Gc(27,w,2,0,"small",50),f.Tb(),f.Ub(28,"div",7),f.Ub(29,"label"),f.Ic(30,"Email"),f.Ub(31,"span",48),f.Ic(32,"*"),f.Tb(),f.Tb(),f.Pb(33,"input",52),f.Gc(34,y,2,0,"small",50),f.Tb(),f.Ub(35,"div",7),f.Ub(36,"label"),f.Ic(37,"Password"),f.Ub(38,"span",48),f.Ic(39,"*"),f.Tb(),f.Tb(),f.Pb(40,"input",53),f.Gc(41,I,2,0,"small",50),f.Tb(),f.Tb(),f.Ub(42,"div",54),f.Ub(43,"button",55),f.Ic(44,"Submit"),f.Tb(),f.Ub(45,"button",56),f.ec("click",function(){return t.$implicit.close("Close click")}),f.Ic(46,"Close"),f.Tb(),f.Tb(),f.Tb(),f.Tb()}if(2&e){var r=f.ic();f.Bb(3),f.nc("src",r.newUserImg,f.Cc),f.Bb(9),f.nc("formGroup",r.register),f.Bb(8),f.nc("ngIf",!r.register.get("username").valid&&r.register.get("username").touched),f.Bb(7),f.nc("ngIf",!r.register.get("phone").valid&&r.register.get("phone").touched),f.Bb(7),f.nc("ngIf",!r.register.get("email").valid&&r.register.get("email").touched),f.Bb(7),f.nc("ngIf",!r.register.get("password").valid&&r.register.get("password").touched),f.Bb(2),f.nc("disabled",!r.register.valid)}}function k(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1,"username is required"),f.Tb())}function R(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1," Phone is required"),f.Tb())}function B(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1," Please enter a valid email address"),f.Tb())}function C(e,t){1&e&&(f.Ub(0,"small",57),f.Ic(1," Please enter a password"),f.Tb())}function x(e,t){if(1&e){var i=f.Vb();f.Ub(0,"div",38),f.Ub(1,"h4",39),f.Ub(2,"div",40),f.Pb(3,"img",41),f.Ub(4,"div",42),f.Ub(5,"div",43),f.Ic(6),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(7,"button",44),f.ec("click",function(){return t.$implicit.dismiss("Cross click")}),f.Ub(8,"span",45),f.Ub(9,"i",21),f.Ic(10,"close"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(11,"div",46),f.Ub(12,"form",58),f.ec("ngSubmit",function(){f.Ac(i);var e=f.ic();return e.onEditSave(e.editForm)}),f.Ub(13,"div",6),f.Ub(14,"div",7),f.Ub(15,"label"),f.Ic(16,"name "),f.Ub(17,"span",48),f.Ic(18,"*"),f.Tb(),f.Tb(),f.Pb(19,"input",49),f.Gc(20,k,2,0,"small",50),f.Tb(),f.Ub(21,"div",7),f.Ub(22,"label"),f.Ic(23,"Phone"),f.Ub(24,"span",48),f.Ic(25,"*"),f.Tb(),f.Tb(),f.Pb(26,"input",51),f.Gc(27,R,2,0,"small",50),f.Tb(),f.Ub(28,"div",7),f.Ub(29,"label"),f.Ic(30,"Email"),f.Ub(31,"span",48),f.Ic(32,"*"),f.Tb(),f.Tb(),f.Pb(33,"input",52),f.Gc(34,B,2,0,"small",50),f.Tb(),f.Ub(35,"div",7),f.Ub(36,"label"),f.Ic(37,"Password"),f.Ub(38,"span",48),f.Ic(39,"*"),f.Tb(),f.Tb(),f.Pb(40,"input",53),f.Gc(41,C,2,0,"small",50),f.Tb(),f.Tb(),f.Ub(42,"div",54),f.Ub(43,"button",55),f.Ic(44,"Save"),f.Tb(),f.Ub(45,"button",56),f.ec("click",function(){return t.$implicit.close()}),f.Ic(46,"Close"),f.Tb(),f.Tb(),f.Tb(),f.Tb()}if(2&e){var r=f.ic();f.Bb(3),f.nc("src",null==r.selectedRowData?null:r.selectedRowData.img,f.Cc),f.Bb(3),f.Lc(" ",null==r.selectedRowData?null:r.selectedRowData.firstName," ",null==r.selectedRowData?null:r.selectedRowData.lastName,""),f.Bb(6),f.nc("formGroup",r.editForm),f.Bb(8),f.nc("ngIf",!r.editForm.get("username").valid&&r.editForm.get("username").touched),f.Bb(7),f.nc("ngIf",!r.editForm.get("phone").valid&&r.editForm.get("phone").touched),f.Bb(7),f.nc("ngIf",!r.editForm.get("email").valid&&r.editForm.get("email").touched),f.Bb(7),f.nc("ngIf",!r.editForm.get("password").valid&&r.editForm.get("password").touched),f.Bb(2),f.nc("disabled",!r.editForm.valid)}}var A,P,q,G=[{path:"",component:(A=function(){function t(e,r,n,o){var a=this;i(this,t),this.fb=e,this.modalService=r,this.toastr=n,this.request=o,this.rows=[],this.scrollBarHorizontal=window.innerWidth<1200,this.newUserImg="assets/images/users/user-2.png",this.data=[],this.filteredData=[],this.loadingIndicator=!0,this.isRowSelected=!1,this.reorderable=!0,this.selected=[],this.columns=[{name:"username"},{name:"phone"},{name:"email"},{name:"password"}],this.genders=[{id:"1",value:"male"},{id:"2",value:"female"}],this.statusType=[{id:"1",value:"Active"},{id:"2",value:"Completed"},{id:"3",value:"Pending"}],this.designationType=[{id:"1",value:"Manager"},{id:"2",value:"Team Leader"},{id:"3",value:"Clerk"}],this.editForm=this.fb.group({username:["",[l.s.required,l.s.pattern("[a-zA-Z]+")]],phone:["",[l.s.required]],email:["",[l.s.required,l.s.email,l.s.minLength(5)]],password:["",[l.s.required]]}),window.onresize=function(){a.scrollBarHorizontal=window.innerWidth<1200}}var n,o,a;return n=t,(o=[{key:"onSelect",value:function(t){var i,r=t.selected;this.selected.splice(0,this.selected.length),(i=this.selected).push.apply(i,e(r)),this.isRowSelected=0!==this.selected.length}},{key:"deleteSelected",value:function(){var e=this;u.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(function(t){t.value&&(e.selected.forEach(function(t){e.deleteRecord(t)}),e.deleteRecordSuccess(e.selected.length),e.selected=[],e.isRowSelected=!1)})}},{key:"ngOnInit",value:function(){this.viewdata(),this.register=this.fb.group({username:["",[l.s.required,l.s.pattern("[a-zA-Z]+")]],phone:["",[l.s.required]],email:["",[l.s.required,l.s.email,l.s.minLength(5)]],password:["",[l.s.required]]})}},{key:"fetch",value:function(e){this.request.getuser().subscribe(function(t){console.log(t),e(t)},function(e){console.log(e)})}},{key:"addRow",value:function(e){this.modalService.open(e,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.register.patchValue({id:this.getId(10,100),img:this.newUserImg})}},{key:"editRow",value:function(e,t,i){var r=this;this.modalService.open(i,{ariaLabelledBy:"modal-basic-title",size:"lg"}),this.request.fetchuserById(e._id).subscribe(function(t){r.editcustmergroup=t[0],console.log(t),r.custmernamevalue=r.editcustmergroup.username,r.custmerphonevalue=r.editcustmergroup.phone,r.custmeremailvalue=r.editcustmergroup.email,r.custmerpasswordvalue=r.editcustmergroup.password,r.IdValue=r.editcustmergroup._id,r.editForm.setValue({username:r.custmernamevalue,phone:r.custmerphonevalue,email:r.custmeremailvalue,password:r.custmerpasswordvalue}),r.selectedRowData=e})}},{key:"deleteSingleRow",value:function(e){var t=this;u.a.fire({title:"Are you sure?",showCancelButton:!0,confirmButtonColor:"#8963ff",cancelButtonColor:"#fb7823",confirmButtonText:"Yes"}).then(function(i){i.value&&(t.deleteRecord(e),t.deleteRecordSuccess(1))})}},{key:"deleteRecord",value:function(e){var t=this;console.log("row",e._id),this.request.deleteuser(e._id).subscribe(function(e){console.log(e),t.viewdata()},function(e){console.log(e)})}},{key:"arrayRemove",value:function(e,t){return e.filter(function(e){return e.id!==t})}},{key:"onAddRowSave",value:function(e){var t=this;console.log(e.value),this.request.adduser(e.value).subscribe(function(i){"success"==i.status?(console.log(i),e.reset(),t.modalService.dismissAll(),t.viewdata(),t.addRecordSuccess()):"error"==i.status&&(console.log("res",i),e.reset(),t.modalService.dismissAll())},function(i){console.log("error",i),e.reset(),t.modalService.dismissAll()})}},{key:"viewdata",value:function(){var e=this;this.fetch(function(t){e.data=t,e.Customers=t.response,e.filteredData=t.response,setTimeout(function(){e.loadingIndicator=!1},500)})}},{key:"onEditSave",value:function(e){var t=this;this.request.updateuser(this.IdValue,{username:e.value.username,phone:e.value.phone,email:e.value.email,password:e.value.password}).subscribe(function(e){if("success"==e.status)return t.modalService.dismissAll(),t.viewdata(),t.editRecordSuccess(),!0;"error"==e.status&&t.modalService.dismissAll()},function(e){console.log(e),t.modalService.dismissAll()})}},{key:"filterDatatable",value:function(e){var t=e.target.value.toLowerCase(),i=this.columns.length,r=Object.keys(this.filteredData[0]);this.Customers=this.filteredData.filter(function(e){for(var n=0;n<i;n++)if(-1!==e[r[n]].toString().toLowerCase().indexOf(t)||!t)return!0}),this.table.offset=0}},{key:"getId",value:function(e,t){return Math.floor(Math.random()*(t-e+1)+e)}},{key:"addRecordSuccess",value:function(){this.toastr.success("Add Record Successfully","")}},{key:"editRecordSuccess",value:function(){this.toastr.success("Edit Record Successfully","")}},{key:"deleteRecordSuccess",value:function(e){this.toastr.error(e+" Records Deleted Successfully","")}}])&&r(n.prototype,o),a&&r(n,a),t}(),A.\u0275fac=function(e){return new(e||A)(f.Ob(l.b),f.Ob(h.d),f.Ob(b.b),f.Ob(m.a))},A.\u0275cmp=f.Ib({type:A,selectors:[["app-user"]],viewQuery:function(e,t){var i;1&e&&(f.Mc(s.c,1),f.Mc(s.c,1)),2&e&&(f.wc(i=f.fc())&&(t.table=i.first),f.wc(i=f.fc())&&(t.table2=i.first))},features:[f.Ab([b.b])],decls:48,vars:19,consts:[[1,"main-content"],[1,"section-body",2,"margin-top","20px"],[1,"row","clearfix"],[1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],[1,"card"],[1,"p-10"],[1,"row"],[1,"col-lg-6"],[1,"row","m-0"],[1,"col-lg-3","p-0"],[1,"ngxTableHeader"],[1,"table-title"],[1,"col-lg-5","p-0"],[1,"table-search-area"],["for","search-input"],[1,"material-icons","search-icon"],["placeholder","Search","type","text","aria-label","Search box",1,"browser-default","search-field",3,"keyup"],[1,"col-lg-4","p-0"],[1,"header-buttons-left"],[1,"icon-button-demo","buttons"],[1,"btn","btn-icon","icon-left","btn-primary","rounded-button",3,"click"],[1,"material-icons"],[1,"btn","btn-icon","icon-left","btn-danger","rounded-button",3,"hidden","click"],["columnMode","force","rowHeight","auto",1,"material",3,"rows","loadingIndicator","headerHeight","footerHeight","limit","scrollbarH","reorderable","selected","selectionType","select"],["table",""],[3,"width","sortable","draggable","resizeable","canAutoResize","headerCheckboxable","checkboxable"],["name","Name",3,"width"],["ngx-datatable-cell-template",""],["name","Phone"],["name","Email"],["name","Actions","sortable","false",3,"width"],["addRecord",""],["editRecord",""],[1,"name-col-style"],[1,"btn","btn-tbl-edit","h-auto",3,"click"],[1,"fas","fa-pen"],[1,"btn","btn-tbl-delete","h-auto",3,"click"],[1,"far","fa-trash-alt"],[1,"modal-header","editRowModal"],["id","modal-basic-title",1,"modal-title"],[1,"table-modal-header"],["alt","avatar",3,"src"],[1,"modal-about"],[1,"font-weight-bold","p-t-10","font-17"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true"],[1,"modal-body"],[1,"register-form",3,"formGroup","ngSubmit"],[1,"text-danger"],["type","text","placeholder","name","formControlName","username","required","",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["type","number","placeholder","Phone","formControlName","phone","required","",1,"form-control"],["type","email","placeholder","Email","formControlName","email","required","",1,"form-control"],["type","password","placeholder","Password","formControlName","password","required","",1,"form-control"],[1,"modal-footer"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-light",3,"click"],[1,"form-text","text-danger"],[3,"formGroup","ngSubmit"]],template:function(e,t){if(1&e){var i=f.Vb();f.Ub(0,"section",0),f.Ub(1,"div",1),f.Ub(2,"div",2),f.Ub(3,"div",3),f.Ub(4,"div",4),f.Ub(5,"div",5),f.Ub(6,"div",6),f.Ub(7,"div",7),f.Ub(8,"div",8),f.Ub(9,"div",9),f.Ub(10,"div",10),f.Ub(11,"div",11),f.Ub(12,"h2"),f.Ub(13,"strong"),f.Ic(14,"User"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(15,"div",12),f.Ub(16,"div",10),f.Ub(17,"div",13),f.Ub(18,"div"),f.Ub(19,"label",14),f.Ub(20,"i",15),f.Ic(21,"search"),f.Tb(),f.Tb(),f.Ub(22,"input",16),f.ec("keyup",function(e){return t.filterDatatable(e)}),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(23,"div",17),f.Ub(24,"div",10),f.Ub(25,"div",18),f.Ub(26,"div",19),f.Ub(27,"button",20),f.ec("click",function(){f.Ac(i);var e=f.xc(45);return t.addRow(e)}),f.Ub(28,"i",21),f.Ic(29,"add"),f.Tb(),f.Tb(),f.Ub(30,"button",22),f.ec("click",function(){return t.deleteSelected()}),f.Ub(31,"i",21),f.Ic(32,"delete"),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Ub(33,"ngx-datatable",23,24),f.ec("select",function(e){return t.onSelect(e)}),f.Pb(35,"ngx-datatable-column",25),f.Ub(36,"ngx-datatable-column",26),f.Gc(37,v,3,1,"ng-template",27),f.Tb(),f.Ub(38,"ngx-datatable-column",28),f.Gc(39,p,1,1,"ng-template",27),f.Tb(),f.Ub(40,"ngx-datatable-column",29),f.Gc(41,g,1,1,"ng-template",27),f.Tb(),f.Ub(42,"ngx-datatable-column",30),f.Gc(43,T,5,0,"ng-template",27),f.Tb(),f.Tb(),f.Gc(44,S,47,7,"ng-template",null,31,f.Hc),f.Gc(46,x,47,9,"ng-template",null,32,f.Hc),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb(),f.Tb()}2&e&&(f.Bb(30),f.nc("hidden",!t.isRowSelected),f.Bb(3),f.nc("rows",t.Customers)("loadingIndicator",t.loadingIndicator)("headerHeight",60)("footerHeight",80)("limit",10)("scrollbarH",t.scrollBarHorizontal)("reorderable",t.reorderable)("selected",t.selected)("selectionType","checkbox"),f.Bb(2),f.nc("width",70)("sortable",!1)("draggable",!1)("resizeable",!1)("canAutoResize",!1)("headerCheckboxable",!0)("checkboxable",!0),f.Bb(1),f.nc("width",200),f.Bb(6),f.nc("width",100))},directives:[s.c,s.b,s.a,l.u,l.j,l.e,l.a,l.i,l.d,l.q,a.m,l.n],styles:[""]}),A)}],D=((P=function e(){i(this,e)}).\u0275mod=f.Mb({type:P}),P.\u0275inj=f.Lb({factory:function(e){return new(e||P)},imports:[[c.f.forChild(G)],c.f]}),P),z=o("mkVx"),H=o("tk/3"),F=((q=function e(){i(this,e)}).\u0275mod=f.Mb({type:q}),q.\u0275inj=f.Lb({factory:function(e){return new(e||q)},imports:[[a.c,l.f,l.p,D,s.d,H.c,b.a.forRoot(),z.a]]}),q)}}])}();