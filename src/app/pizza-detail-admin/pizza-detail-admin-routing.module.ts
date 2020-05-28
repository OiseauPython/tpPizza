import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PizzaDetailAdminPage } from './pizza-detail-admin.page';

const routes: Routes = [
  {
    path: '',
    component: PizzaDetailAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PizzaDetailAdminPageRoutingModule {}
