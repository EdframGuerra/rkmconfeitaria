import { Component, OnInit, OnDestroy } from '@angular/core'; // Adicionado OnInit e OnDestroy
import { InterfaceTestimonialCard } from '../../../models/interface.testimonial.card';
import { Router } from '@angular/router';
import { InterfaceProductCard } from './../../../models/interface.product.card';
import { InterfaceCartItem } from '../../../models/interface.cart.item';
import { CartService } from '../../../services/cart.service'; // Importar CartService
import { Subscription } from 'rxjs'; // Importar Subscription

@Component({
  selector: 'app-home-layout',
  standalone: false,
  templateUrl: './home.layout.html',
  styleUrl: './home.layout.css',
})
export class HomeLayout implements OnInit, OnDestroy { // Implementar OnInit e OnDestroy
  products: InterfaceProductCard[] = [
    {
      id: 1,
      name: 'Torta de Brigadeiro',
      description:
        'Delicioso bolo de chocolate com cobertura de brigadeiro',
      price: 89.9,
      image: 'torta-brigadeiro2.png',
    },
    {
      id: 3,
      name: 'Torta de morango',
      description: 'Bolo aveludado vermelho com recheio de cream cheese',
      price: 120.0,
      image: 'torta-morango.png',
    },
    {
      name: 'Torta mundo dos sabores',
      description: 'Descrição 3',
      price: 70,
      image: 'torta-mundo-dos-sabores.png',
    },
  ];

  testimonials: InterfaceTestimonialCard[] = [
    {
      id: 1,
      name: 'Ana Clara',
      rating: 5,
      message: 'O bolo de brigadeiro foi o sucesso da festa! Todos elogiaram.',
    },
    {
      id: 2,
      name: 'Carlos Eduardo',
      rating: 4,
      message: 'Atendimento excelente e a torta de limão estava perfeita!',
    },
    {
      id: 3,
      name: 'Márcia Fernandes',
      rating: 5,
      message:
        'Já encomendei várias vezes e sempre superam minhas expectativas!',
    },
  ];

  cartQuantity = 0; // Adicionado para exibir a quantidade no botão de finalizar pedido
  private cartSubscription!: Subscription; // Para gerenciar a inscrição

  constructor(private router: Router, private cartService: CartService) {} // Injetar Router e CartService

  ngOnInit(): void {
    // Inscreve-se no observable do carrinho para receber atualizações em tempo real
    this.cartSubscription = this.cartService.cartItems$.subscribe(items => {
      this.cartQuantity = items.reduce((acc, item) => acc + item.quantity, 0); // Atualiza a quantidade total
    });
  }

  ngOnDestroy(): void {
    // Garante que a inscrição seja cancelada para evitar vazamentos de memória
    if (this.cartSubscription) {
      this.cartSubscription.unsubscribe();
    }
  }

  /**
   * Navega para a página de Cardápio Completo.
   */
  goToCardapioCompleto(): void {
    this.router.navigate(['/cardapio']);
  }

  /**
   * Navega para a página/formulário de deixar depoimento.
   */
  goToLeaveTestimonial(): void {
    this.router.navigate(['/depoimentos/deixar']);
  }

  goToAllTestimonials(): void {
    this.router.navigate(['/depoimentos']);
  }

  /**
   * Adiciona produto ao carrinho e redireciona para o cardápio.
   */
  makeOrder(item: InterfaceProductCard): void {
    // Usa o serviço para adicionar o item, que por sua vez atualiza o BehaviorSubject
    this.cartService.addItem({
      id: item.id ?? Math.floor(Math.random() * 100000), // Garante um ID se estiver ausente
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1,
    });
    // Não é mais necessário manipular localStorage diretamente aqui
    this.router.navigate(['/cardapio']);
  }
}
