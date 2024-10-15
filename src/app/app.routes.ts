import { Routes } from '@angular/router';
import { ProdComponent } from './components/products/products.component';
import { DetallesComponent } from './components/detalles/detalles.component';

export const routes: Routes = [
    { path: "products", component: ProdComponent},
    { path: "detalles", component: DetallesComponent}
];
