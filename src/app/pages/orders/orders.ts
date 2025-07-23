// orders.ts
import { Component, OnInit } from '@angular/core';
import { InterfaceCartItem } from '../../models/interface.cart.item';

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders implements OnInit {
  cartItems: InterfaceCartItem[] = [];

  ngOnInit(): void {
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  removeItem(itemId: number): void {
    this.cartItems = this.cartItems.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  finalizeOrder(): void {
    const phoneNumber = '5571986893011';
    let message = 'Olá, gostaria de finalizar meu pedido:\n\n';

    this.cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - R$ ${(item.price * item.quantity).toFixed(2)}\n`;
    });

    message += `\nTotal: R$ ${this.getTotal().toFixed(2)}`;
    message += '\n\nPor favor, confirme os detalhes para entrega.';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // Limpa o carrinho após finalizar
    this.cartItems = [];
    localStorage.setItem('cart', JSON.stringify([]));
  }
}
