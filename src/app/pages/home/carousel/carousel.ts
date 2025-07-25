import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceProductCard } from '../../../models/interface.product.card';
import { InterfaceCartItem } from '../../../models/interface.cart.item';

@Component({
  selector: 'app-carousel',
  standalone: false,
  templateUrl: './carousel.html',
  styleUrls: ['./carousel.css'],
})
export class Carousel implements OnInit {
  carouselItems: InterfaceProductCard[] = [
    {
      id: 1,
      name: 'Torta de Brigadeiro',
      description:
        'Delicioso bolo de chocolate com cobertura de brigadeiro cremoso',
      price: 89.9,
      image: 'torta-de-Brigadeiro.png',
    },
    {
      id: 2,
      name: 'Torta Charlote',
      description: 'Bolo fofinho de cenoura com cobertura de chocolate',
      price: 79.9,
      image: 'torta-charlote.png',
    },
    {
      id: 3,
      name: 'Torta sabores',
      description: 'Bolo aveludado vermelho com recheio de cream cheese',
      price: 120.0,
      image: 'torta-sabores.png',
    },
    {
      id: 4,
      name: 'Torta chocolate ganache',
      description: 'Bolo refrescante com raspas de limão e glacê cítrico',
      price: 85.5,
      image: 'torta-chocolate-ganache.png',
    },
    {
      id: 11,
      name: 'Torta de doce de leite',
      description: 'Torta doce e suave com cobertura de doce de leite',
      price: 91.0,
      image: 'torta-de-doce-de-leite.png',
    },
    {
      id: 12,
      name: 'Torta dois amores',
      description: 'Delicioso mix de chocolate branco e preto',
      price: 95.0,
      image: 'torta-dois-amores.png',
    },
  ];

  extendedItems: InterfaceProductCard[] = [];
  selectedItem: InterfaceProductCard | null = null;
  confirmationModalOpen = false;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.extendedItems = [...this.carouselItems, ...this.carouselItems];
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

    const existingItem = cart.find((i) => i.id === item.id);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      cart.push({
        id: item.id!,
        name: item.name,
        price: item.price,
        image: item.image,
        quantity: 1,
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    this.selectedItem = null;
    this.confirmationModalOpen = true;
  }

  closeConfirmationModal() {
    this.confirmationModalOpen = false;
    this.router.navigate(['/cardapio']);
  }
}
