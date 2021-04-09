import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule
  ]
})
export class UserModule {}
