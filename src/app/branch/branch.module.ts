import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BranchRoutingModule } from './branch-routing.module';
import { BranchComponent } from './branch.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { ArchwizardModule } from 'angular-archwizard';
import { AngularEditorModule } from '@kolkov/angular-editor';

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [BranchComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BranchRoutingModule,
    NgxDatatableModule,
    HttpClientModule,
    ToastrModule.forRoot(),ArchwizardModule,AngularEditorModule
  ]
})
export class BranchModule {}
