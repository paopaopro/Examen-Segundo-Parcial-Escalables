import { Routes } from '@angular/router';
import { ProdComponent } from './components/products/products.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ShowDetallesComponent } from './components/show-detalles/show-detalles.component';

export const routes: Routes = [
    { path: "products", component: ProdComponent},
    { path: "detalles", component: DetallesComponent},
    { path: "productsDetails/:id", component: ShowDetallesComponent},
    { path: "", component: ProdComponent}
];
