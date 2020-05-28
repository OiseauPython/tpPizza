import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TabsPage} from './tabs.page';
import {AuthGuard} from "../services/auth-gard.service";


const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'pizza',
                loadChildren: () => import('../pizza/pizza.module').then(m => m.PizzaPageModule)
            },
            {
                path: 'pizza/:id',
                loadChildren: () => import('../pizza-detail/pizza-detail.module').then(m => m.PizzaDetailPageModule)
            },
            {
                path: 'admin/:id',
                loadChildren: () => import('../pizza-detail-admin/pizza-detail-admin.module').then(m => m.PizzaDetailAdminPageModule)
            },
            {
                path: 'panier',
                loadChildren: () => import('../panier/panier.module').then(m => m.PanierPageModule)
            },
            {
                path: 'admin', canActivate: [AuthGuard],
                loadChildren: () => import('../admin/admin.module').then(m => m.AdminPageModule)
            },
            {
                path: 'auth',
                loadChildren: () => import('../auth/auth.module').then(m => m.AuthPageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/pizza',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/pizza',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
