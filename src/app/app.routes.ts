import { Routes } from '@angular/router';
import { MainPageComponent } from './Paginas/main-page/main-page.component';
import { DetailProductPageComponent } from './Paginas/detail-product-page/detail-product-page.component';
import { CategoryPageComponent } from './Paginas/category-page/category-page.component';
import { ProfileComponent } from './Paginas/profile/profile.component';
import { ShoppingBagPageComponent } from './Paginas/shopping-bag-page/shopping-bag-page.component';

export const routes: Routes = [
    { path: '', redirectTo: '/Inicio', pathMatch: 'full' },
    { path: 'Inicio', component: MainPageComponent },
    { path: 'Categorias', component: CategoryPageComponent },
    {path: 'Producto', component: DetailProductPageComponent}, 
    {path: 'Perfil', component: ProfileComponent},
    {path: 'Bolsadecompra', component: ShoppingBagPageComponent}

];

export default routes;
