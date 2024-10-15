import { inject, Injectable } from '@angular/core';
import { Prod } from '../interfaces/interfaces.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  public text:string = "Productos";

  private http = inject(HttpClient);
  private apiUrl = "https://fakestoreapi.com/products";

  private _prods: Prod[] = [];

    public get prods(): Prod[]{
        return this._prods;
    }

    public fetchProds() { 
      this.http.get<Prod[]>(this.apiUrl).subscribe({
        next: (response)=>{
          console.log(response);
          this._prods = response;
        },
        error: (error)=>{
          console.log(error);
        }
      })
    }
  

  constructor() { }
}
