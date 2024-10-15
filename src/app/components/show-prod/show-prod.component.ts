import { Component, Input } from '@angular/core';
import { Prod } from '../../interfaces/interfaces.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-show-prod',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './show-prod.component.html',
  styleUrl: './show-prod.component.css'
})
export class ShowProdComponent {

  @Input()
  public prod: Prod = {
    id: 0,
    title: "",
    price: 0,
    description: "",
    image: "",
    category: ""
  };
}
