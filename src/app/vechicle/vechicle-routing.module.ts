import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VechicleComponent } from './vechicle.component';

const routes: Routes = [
  {
    path: '',
    component: VechicleComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VechicleRoutingModule {}
