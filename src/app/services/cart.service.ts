import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { InterfaceCartItem } from '../models/interface.cart.item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<InterfaceCartItem[]>(this.getCartFromStorage());
  cartItems$ = this.cartItemsSubject.asObservable();

  private getCartFromStorage(): InterfaceCartItem[] {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  }

  private updateStorage(items: InterfaceCartItem[]) {
    localStorage.setItem('cart', JSON.stringify(items));
  }

  getCartItems(): InterfaceCartItem[] {
    return this.cartItemsSubject.getValue();
  }

  addItem(item: InterfaceCartItem) {
    const items = [...this.getCartItems()];
    const index = items.findIndex(i => i.id === item.id);

    if (index > -1) {
      items[index].quantity += item.quantity;
    } else {
      items.push({ ...item });
    }

    this.cartItemsSubject.next(items);
    this.updateStorage(items);
  }

  removeItem(itemId: number) {
    const items = this.getCartItems().filter(item => item.id !== itemId);
    this.cartItemsSubject.next(items);
    this.updateStorage(items);
  }

  clearCart() {
    this.cartItemsSubject.next([]);
    this.updateStorage([]);
  }
}
