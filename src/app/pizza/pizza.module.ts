import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PizzaPage } from './pizza.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { PizzaPageRoutingModule } from './pizza-routing.module';
import {SinglePizzaPageModule} from "../single-pizza/single-pizza.module";
import {AdminPageModule} from "../admin/admin.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        PizzaPageRoutingModule,
        SinglePizzaPageModule,
        AdminPageModule
    ],
  declarations: [PizzaPage]
})
export class PizzaPageModule {}
