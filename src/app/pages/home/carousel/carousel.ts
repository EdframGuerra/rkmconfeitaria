// carousel.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceProductCard } from '../../../models/interface.product.card';
import { InterfaceCartItem } from '../../../models/interface.cart.item';


@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css']
})
export class Carousel implements OnInit, OnDestroy {
  carouselItems: InterfaceProductCard[] = [
    {
      id: 1,
      name: 'Bolo deBrigadeiro',
      description: 'Delicioso bolo de chocolate com cobertura de brigadeiro cremoso',
      price: 89.90,
      image: 'bolo1.png'
    },
    {
      id: 2,
      name: 'Bolo de Cenoura',
      description: 'Bolo fofinho de cenoura com cobertura de chocolate',
      price: 79.90,
      image: 'bolo2.png'
    },
    {
      id: 3,
      name: 'Bolo Red Velvet',
      description: 'Bolo aveludado vermelho com recheio de cream cheese',
      price: 120.00,
      image: 'bolo3.png'
    },
    {
      id: 4,
      name: 'Bolo de Limão',
      description: 'Bolo refrescante com raspas de limão e glacê cítrico',
      price: 85.50,
      image: 'bolo4.png'
    }
  ];

  currentIndex = 0;
  autoplayInterval: any;
  selectedItem: InterfaceProductCard | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoplay();
  }

  ngOnDestroy(): void {
    this.clearAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  pauseAutoplay() {
    this.clearAutoplay();
  }

  resumeAutoplay() {
    this.startAutoplay();
  }

  clearAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;
  }

  openModal(item: InterfaceProductCard) {
    this.selectedItem = item;
  }

  closeModal() {
    this.selectedItem = null;
  }

  makeOrder(item: InterfaceProductCard) {
    const savedCart = localStorage.getItem('cart');
    const cart: InterfaceCartItem[] = savedCart ? JSON.parse(savedCart) : [];

    const existingItem = cart.find(i => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: item.id!,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    this.closeModal();
    this.router.navigate(['/cardapio']);
  }
}
