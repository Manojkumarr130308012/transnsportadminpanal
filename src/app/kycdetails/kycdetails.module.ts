import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KycdetailsRoutingModule } from './kycdetails-routing.module';
import { KycdetailsComponent } from './kycdetails.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [KycdetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    KycdetailsRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule
  ]
})
export class KycdetailsModule {}
