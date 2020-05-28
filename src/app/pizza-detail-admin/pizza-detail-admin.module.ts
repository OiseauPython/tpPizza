import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PizzaDetailAdminPageRoutingModule } from './pizza-detail-admin-routing.module';

import { PizzaDetailAdminPage } from './pizza-detail-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PizzaDetailAdminPageRoutingModule
  ],
  declarations: [PizzaDetailAdminPage]
})
export class PizzaDetailAdminPageModule {}
