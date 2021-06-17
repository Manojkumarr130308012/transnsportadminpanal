import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StateRoutingModule } from './state-routing.module';
import { StateComponent } from './state.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [StateComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    StateRoutingModule,
    NgxDatatableModule,
    ToastrModule.forRoot(),
  ],
})
export class StateModule {}
