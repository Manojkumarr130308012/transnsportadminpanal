import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodstypeComponent } from './goodstype.component';

const routes: Routes = [
  {
    path: '',
    component: GoodstypeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoodstypeRoutingModule {}
