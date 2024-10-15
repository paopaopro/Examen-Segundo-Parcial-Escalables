import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { ShowProdComponent } from './components/show-prod/show-prod.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { ProdComponent } from './components/products/products.component';
import { DetallesComponent } from './components/detalles/detalles.component';
import { ShowGeneralComponent } from './components/show-general/show-general.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, ShowProdComponent, MatButtonModule, ProdComponent, RouterLinkActive, RouterLink, MatSidenavModule, DetallesComponent, ShowGeneralComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
