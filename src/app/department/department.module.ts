import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DepartmentRoutingModule } from './department-routing.module';
import { DepartmentComponent } from './department.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [DepartmentComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DepartmentRoutingModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
  ],
})
export class DepartmentModule {}
