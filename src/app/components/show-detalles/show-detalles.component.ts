import { Component, inject, Input, OnInit } from '@angular/core';
import { Prod } from '../../interfaces/interfaces.component';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-detalles',
  standalone: true,
  imports: [],
  templateUrl: './show-detalles.component.html',
  styleUrl: './show-detalles.component.css'
})
export class ShowDetallesComponent implements OnInit{
  /* @Input()
  public prod: Prod = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
    category: ""
  }; */

  /* public prod!: Prod; */

  private productService = inject(ProductsService);
  private route = inject(ActivatedRoute);
  
  public product!: Prod;

  ngOnInit(): void {
    // Obtener el ID del producto desde los parámetros de la ruta
    const productId = Number(this.route.snapshot.paramMap.get('id'));

    if (productId) {
      // Llamar a fetchProducts() para asegurar que los productos estén disponibles
      this.productService.fetchProds();
      // Usar el método getProductById del servicio
      this.product = this.productService.getProductById(productId)!;

      if (!this.product) {
        console.error('No se encontro el producto con el ID: ${productId}.');
      }
    } else {
      console.error('ID de producto inválido.');
  }
}

}
