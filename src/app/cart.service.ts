import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private Items: any[] = [];

  constructor() {}

  addToCart(product: any) {
    this.Items.push({ ...product, quantity: 1 });
  }

  getItems() {
    return this.Items;
  }

  delete(item: any) {
    this.Items = this.Items.filter(i => i.id !== item.id);
  }

  incrementQuantity(id: number) {
    let item = this.Items.find(i => i.id === id);
    if (item) {
      item.quantity++;
    }
  }

  decrementQuantity(id: number) {
    let item = this.Items.find(i => i.id === id);
    if (item) {
      item.quantity--;
    }
  }

  getTotal() {
    return this.Items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    },0);
  }
}