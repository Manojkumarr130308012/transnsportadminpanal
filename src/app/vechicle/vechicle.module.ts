import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VechicleRoutingModule } from './vechicle-routing.module';
import { VechicleComponent } from './vechicle.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [VechicleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    VechicleRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule
  ]
})
export class VechicleModule {}
