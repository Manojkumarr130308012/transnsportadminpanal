import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GoodstypeRoutingModule } from './goodstype-routing.module';
import { GoodstypeComponent } from './goodstype.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';


import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [GoodstypeComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GoodstypeRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule
  ]
})
export class GoodstypeModule {}
