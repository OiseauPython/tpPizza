import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {SinglePizzaPageModule} from "./single-pizza/single-pizza.module";

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
    },
    {
        path: 'admin',
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminPageModule)
    },
    {
        path: 'auth',
        loadChildren: () => import('./auth/auth.module').then(m => m.AuthPageModule)
    },
    {
        path: 'pizza/:id',
        loadChildren: () => import('./single-pizza/single-pizza.module').then(m => m.SinglePizzaPageModule)
    },
    {
        path: 'pizza-detail',
        loadChildren: () => import('./pizza-detail/pizza-detail.module').then(m => m.PizzaDetailPageModule)
    },
    {
        path: 'single-pizza-admin',
        loadChildren: () => import('./single-pizza-admin/single-pizza-admin.module').then(m => m.SinglePizzaAdminPageModule)
    },
  {
    path: 'pizza-detail-admin',
    loadChildren: () => import('./pizza-detail-admin/pizza-detail-admin.module').then( m => m.PizzaDetailAdminPageModule)
  },
  {
    path: 'admin-form',
    loadChildren: () => import('./admin-form/admin-form.module').then( m => m.AdminFormPageModule)
  },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
