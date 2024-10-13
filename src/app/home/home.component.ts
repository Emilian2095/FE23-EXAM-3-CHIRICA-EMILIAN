import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { ITEMMODEL } from '../shared/item.model';
import { ITEMS } from '../shared/items';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  item: ITEMMODEL[] = ITEMS;

  
  
}
