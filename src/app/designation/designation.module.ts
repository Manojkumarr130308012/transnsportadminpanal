import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DesignationRoutingModule } from './designation-routing.module';
import { DesignationComponent } from './designation.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [DesignationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DesignationRoutingModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
  ],
})
export class DesignationModule {}
