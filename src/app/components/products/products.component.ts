import { Component, inject } from '@angular/core';
import { ShowProdComponent } from "../show-prod/show-prod.component";
import { NgFor, NgIf } from '@angular/common';
import { ProductsService } from '../../services/products.service';
import { Prod } from '../../interfaces/interfaces.component';
import { ShowGeneralComponent } from "../show-general/show-general.component";

@Component({
  selector: 'app-prod',
  standalone: true,
  imports: [ShowProdComponent, NgIf, NgFor, ShowGeneralComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProdComponent {

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
