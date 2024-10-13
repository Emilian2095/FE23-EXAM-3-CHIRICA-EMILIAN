import { Component } from '@angular/core';
import { ITEMS } from '../shared/items';
import { ITEMMODEL } from '../shared/item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  items: ITEMMODEL [] = ITEMS;

  constructor(private cS: CartService){}

  addToCart(item:ITEMMODEL){

this.cS.onAddToCart(item)
  
}
}
