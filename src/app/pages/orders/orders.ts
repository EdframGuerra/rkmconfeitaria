// orders.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { InterfaceCartItem } from '../../models/interface.cart.item';
import { CartService } from '../../services/cart.service'; // Adicionado
import { Subscription } from 'rxjs'; // Adicionado

@Component({
  selector: 'app-orders',
  standalone: false,
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class Orders implements OnInit, OnDestroy {
  cartItems: InterfaceCartItem[] = [];
  private cartSubscription!: Subscription; // Para gerenciar a inscrição

  constructor(private cartService: CartService) {} // Injeta CartService

  ngOnInit(): void {
    // Inscreve-se no observable do carrinho para receber atualizações em tempo real
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items; // A lista local de itens do carrinho é atualizada pelo serviço
    });
    // O cartService já carrega os itens do localStorage em sua inicialização
    // Não é mais necessário this.cartItems = savedCart ? JSON.parse(savedCart) : []; aqui.
  }

  ngOnDestroy(): void {
    // Garante que a inscrição seja cancelada para evitar vazamentos de memória
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  getTotal(): number {
    return this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }

  removeItem(itemId: number): void {
    // Usa o serviço para remover o item
    this.cartService.removeItem(itemId);
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

    // Limpa o carrinho usando o serviço
    this.cartService.clearCart();
  }
}
