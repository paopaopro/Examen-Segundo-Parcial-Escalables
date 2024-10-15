import { Component, inject } from '@angular/core';
import { ShowProdComponent } from "../show-prod/show-prod.component";
import { NgFor, NgIf } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Prod } from '../../interfaces/interfaces.component';
import { ShowGeneralComponent } from "../show-general/show-general.component";

@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [ShowProdComponent, NgFor, NgIf, ShowGeneralComponent],
  templateUrl: './detalles.component.html',
  styleUrl: './detalles.component.css'
})
export class DetallesComponent {
  private ProdService = inject(ProductsService);

    public get text(): string{
        return this.ProdService.text;
    }

  constructor(){
    this.ProdService.fetchProds();
  }

  public get prods(): Prod[]{
    return this.ProdService.prods;
  }

  
}
