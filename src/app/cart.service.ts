import { Injectable } from '@angular/core';
import { ITEMMODEL } from './shared/item.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems : ITEMMODEL [] = [];

  constructor() { }

getItems(){
  return this.cartItems
}

  onAddToCart(product:ITEMMODEL){
  
    let existingProduct = this.cartItems.find((item)=>{
    return item === product
    })
    
 if(!existingProduct){
this.cartItems.push(product)
  }else{
    existingProduct.qtty++
  }

   }
   getSubTotal(){
    let total = 0;
    this.cartItems.forEach(val =>{
      total += val.qtty * val.price
    })
    return total
   }

   onPlus(index:number){
      this.cartItems[index].qtty++
      
   }

   onMinus(index:number){
    if (this.cartItems[index].qtty > 1) {

       this.cartItems[index].qtty--
    }else{
      this.onDelete(index)
    }
   
   
 }

 onDelete(index:number){

this.cartItems[index].qtty = 1

this.cartItems.splice(index, 1)


 }
 onPercentage(){
  let service = 0;
  this.cartItems.forEach(() =>{
    service = (this.getSubTotal() * 10) / 100;
  })
 return service
 
 
  
 }

 priceNoDiscount(){
  let noDiscount = 0
  this.cartItems.forEach(() =>{
  noDiscount = this.getSubTotal() + this.onPercentage()
})
return noDiscount
 };

 onDiscount(){
  let discount = 0;
  this.cartItems.forEach(()=>{
  
  if (this.getSubTotal() > 40) {
    discount = (this.priceNoDiscount() * 15) / 100;
    // the last task was a bit confusing of what it wants
    // i didnt understood if i have to aplly the discount for the total sum of the products
    // or the total sum of the products + the service fee, so i choosed the last one!
    // this was the other code: discount = (this.getSubtotal() * 15) / 100;
  }
})
  return discount;
 }


 totalPrice(){
  let price = 0;
  this.cartItems.forEach(() => {
    price = (this.getSubTotal() + this.onPercentage()) - this.onDiscount()
  });
return price;  

 }

   
}
