import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SinglePizzaAdminPage } from './single-pizza-admin.page';

const routes: Routes = [
  {
    path: '',
    component: SinglePizzaAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SinglePizzaAdminPageRoutingModule {}
