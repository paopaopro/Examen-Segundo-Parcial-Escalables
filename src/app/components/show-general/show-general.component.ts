import { Component, Input } from '@angular/core';
import { Prod, ProdG } from '../../interfaces/interfaces.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-general',
  standalone: true,
  imports: [],
  templateUrl: './show-general.component.html',
  styleUrl: './show-general.component.css'
})
export class ShowGeneralComponent {

  constructor(private router: Router){}
  
  /* @Input()
  public prod: Prod = {
    id: 0,
    title: "",
    price: 0,
    image: "",
    description: '',
    category: ''
  }; */

  @Input()
  public prod!: Prod;

  viewDetails(): void {
    this.router.navigate(['/productsDetails', this.prod.id]); 
    console.log(this.prod.id);
}
}
