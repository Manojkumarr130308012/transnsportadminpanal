import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpecialityRoutingModule } from './speciality-routing.module';
import { SpecialityComponent } from './speciality.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [SpecialityComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpecialityRoutingModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
  ],
})
export class SpecialityModule {}
