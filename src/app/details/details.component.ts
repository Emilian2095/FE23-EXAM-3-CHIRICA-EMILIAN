import { Component } from '@angular/core';
import { ITEMMODEL } from '../shared/item.model';
import { ActivatedRoute } from '@angular/router';
import { ITEMS } from '../shared/items';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {

  item: ITEMMODEL;
  constructor(
    private itemRoute: ActivatedRoute,
    private serviceOfTheCart:CartService
  ){
let id = parseInt(this.itemRoute.snapshot.params['id'])
  
this.item = ITEMS[id]
  }

addToCart(){
this.serviceOfTheCart.onAddToCart(this.item);
}

}
