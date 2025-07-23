import { Component } from '@angular/core';
import { InterfaceTestimonialCard } from '../../../models/interface.testimonial.card';
import { Router } from '@angular/router';
import { InterfaceProductCard } from './../../../models/interface.product.card';
import { InterfaceCartItem } from '../../../models/interface.cart.item';

@Component({
  selector: 'app-home-layout',
  standalone: false,
  templateUrl: './home.layout.html',
  styleUrl: './home.layout.css'
})
export class HomeLayout {
  products: InterfaceProductCard[] = [
  {
    name: 'Bolo 1',
    description: 'Descrição 1',
    price: 50,
    image: 'bolo1.png'
  },
  {
    name: 'Bolo 2',
    description: 'Descrição 2',
    price: 60,
    image: 'bolo2.png'
  },
  {
    name: 'Bolo 3',
    description: 'Descrição 3',
    price: 70,
    image: 'bolo3.png'
  }
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
      message: 'Já encomendei várias vezes e sempre superam minhas expectativas!',
    }
  ];

   constructor(private router: Router) { } // Injetar Router

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
    this.router.navigate(['/depoimento/deixar']);
  }

  goToAllTestimonials(): void {
    this.router.navigate(['/depoimentos']);
  }

    /**
   * Adiciona produto ao carrinho e redireciona para o cardápio.
   */
  makeOrder(item: InterfaceProductCard): void {
    const savedCart = localStorage.getItem('cart');
    const cart: InterfaceCartItem[] = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: item.id ?? Math.floor(Math.random() * 100000), // Garante um ID se estiver ausente
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigate(['/cardapio']);
  }

}
