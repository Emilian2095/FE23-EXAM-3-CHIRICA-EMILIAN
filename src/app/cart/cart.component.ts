import { Component } from '@angular/core';
import { ITEMMODEL } from '../shared/item.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {
items: ITEMMODEL [];
total: number;
service: number;
discount: number;
price: number;
noDiscount: number

constructor(private cS : CartService ){

this.items = cS.getItems()

this.total = cS.getSubTotal()
this.service = cS.onPercentage()
this.discount = cS.onDiscount()
this.price = cS.totalPrice()
this.noDiscount =cS.priceNoDiscount()

}

plusQtty(index:number){
   this.cS.onPlus(index)
   this.calculateTotal()
   this.servicePercentage()
   this.priceDiscount()
   this.totalPrice()
   this.priceNoDiscount()
}
minusQtty(index:number){
  this.cS.onMinus(index)
  this.calculateTotal()
  this.servicePercentage()
  this.priceDiscount()
  this.totalPrice()
  this.priceNoDiscount()

}
deleteQtty(index:number){
  this.cS.onDelete(index)
  this.calculateTotal()
  this.servicePercentage()
  this.priceDiscount()
  this.totalPrice()
  this.priceNoDiscount()

}

calculateTotal(){
  this.total = this.cS.getSubTotal()
}
servicePercentage(){
  this.service = this.cS.onPercentage()
}

priceDiscount(){
  this.discount = this.cS.onDiscount()
}
priceNoDiscount(){
  this.noDiscount = this.cS.priceNoDiscount()
}

totalPrice(){
  this.price = this.cS.totalPrice()
}
}
