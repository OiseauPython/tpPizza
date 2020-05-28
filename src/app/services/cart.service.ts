import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart = [];

  constructor() {}

  getCart() {
    return this.cart;
  }

  addProduct(pizza) {
    console.log("cart service");
    this.cart.push(pizza);
  }
}