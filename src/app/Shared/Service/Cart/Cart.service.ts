import { EventEmitter, Injectable } from '@angular/core';
import { Cart } from '../../Models/Cart/Cart.model';
import { Product } from '../../Models/product/Product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

Cart : Cart = {Products : []}
AddToCart = new EventEmitter<Product>();

  constructor() { }

AddItemToCart(product : Product){
  this.Cart.Products.push(product);
  this.AddToCart.emit(product);
}

getNumberOfProductinCart(){
  return this.Cart.Products.length
}


}
