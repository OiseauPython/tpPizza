import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SinglePizzaAdminPageRoutingModule } from './single-pizza-admin-routing.module';

import { SinglePizzaAdminPage } from './single-pizza-admin.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SinglePizzaAdminPageRoutingModule
    ],
    exports: [
        SinglePizzaAdminPage
    ],
    declarations: [SinglePizzaAdminPage]
})
export class SinglePizzaAdminPageModule {}
