import { Component, Input } from '@angular/core';
import { Prod, ProdG } from '../../interfaces/interfaces.component';

@Component({
  selector: 'app-show-general',
  standalone: true,
  imports: [],
  templateUrl: './show-general.component.html',
  styleUrl: './show-general.component.css'
})
export class ShowGeneralComponent {

  @Input()
  public prod: ProdG = {
    title: "",
    price: 0,
    image: ""
  };
}
