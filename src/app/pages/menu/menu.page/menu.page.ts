// menu.page.ts
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceCartItem } from './../../../models/interface.cart.item';
import { CartService } from '../../../services/cart.service';
import { Observable, Subscription, map } from 'rxjs'; // Adicionado 'map' aqui
import { InterfaceProductCard } from '../../../models/interface.product.card';

@Component({
  selector: 'app-menu-page',
  standalone: false,
  templateUrl: './menu.page.html',
  styleUrl: './menu.page.css',
})
export class MenuPage implements OnInit, OnDestroy {
  allProducts: InterfaceProductCard[] = [];
  cartItems: InterfaceCartItem[] = []; // Mantido para caso precise em outra lógica
  selectedProduct: InterfaceProductCard | null = null;
  // cartQuantity = 0; // Removido, pois o contador será um Observable
  // private cartSubscription!: Subscription; // Removido, pois async pipe gerencia

  cartTotalQuantity$!: Observable<number>; // NOVO: Observable para a quantidade total do carrinho

  constructor(private router: Router, private cartService: CartService) {}

  ngOnInit(): void {
    this.allProducts = [
      {
        id: 1,
        name: 'Torta gateus mouse',
        description: 'Bolo mousse com camadas de chocolate',
        price: 89.9,
        image: 'bolo-gateus-mouse.png',
      },
      {
        id: 2,
        name: 'Torta mundo dos sabores',
        description: 'Torta colorida com frutas frescas e massa leve',
        price: 98.0,
        image: 'torta-sabores.png',
      },
      {
        id: 3,
        name: 'Torta granulada de brigadeiro',
        description: 'Bolo coberto com muito brigadeiro e granulado',
        price: 84.5,
        image: 'torta-brigadeiro2.png',
      },
      {
        id: 4,
        name: 'Torta brigadeiro amendoas',
        description: 'Brigadeiro com crocante de amêndoas por cima',
        price: 92.0,
        image: 'torta-brigadeiro-amendoas.png',
      },
      {
        id: 5,
        name: 'Torta prestigio',
        description: 'Torta de chocolate com recheio de coco estilo prestígio',
        price: 88.9,
        image: 'torta-prestigio1.png',
      },
      {
        id: 6,
        name: 'Torta musse chocolate',
        description: 'Bolo mousse leve e cremoso com cobertura refinada',
        price: 86.0,
        image: 'torta-musse.png',
      },
      {
        id: 7,
        name: 'Torta Prestigio',
        description: 'Camadas generosas de chocolate com recheio de coco',
        price: 89.0,
        image: 'torta-Prestigio.png',
      },
      {
        id: 8,
        name: 'Torta charlote',
        description: 'Torta charlote com frutas vermelhas e borda de biscoito',
        price: 99.0,
        image: 'torta-charlote.png',
      },
      {
        id: 9,
        name: 'Torta chocolate ganache',
        description: 'Torta coberta com ganache de chocolate meio amargo',
        price: 94.0,
        image: 'torta-chocolate-ganache.png',
      },
      {
        id: 10,
        name: 'Torta de Brigadeiro',
        description: 'Torta cremosa de brigadeiro com decoração de chocolate',
        price: 89.9,
        image: 'torta-de-Brigadeiro.png',
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
      {
        id: 13,
        name: 'Torta de morango',
        description: 'Torta rosa recheada com creme e morangos frescos',
        price: 87.0,
        image: 'torta-morango.png',
      },
      {
        id: 14,
        name: 'Torta mundo dos sabores',
        description: 'Torta colorida com decoração de brigadeiros sortidos',
        price: 105.0,
        image: 'torta-mundo-dos-sabores.png',
      },
      {
        id: 15,
        name: 'Cupcake Ferrero',
        description: 'Cupcake gourmet de chocolate Ferrero Rocher',
        price: 14.5,
        image: 'Cupcake-Ferrero.png',
      },
      {
        id: 16,
        name: 'kibe',
        description: 'Kibe frito recheado com carne temperada',
        price: 6.0,
        image: 'kibe.png',
      },
      {
        id: 17,
        name: 'coxinha1',
        description: 'Coxinha tradicional de frango com massa cremosa',
        price: 5.0,
        image: 'coxinha1.png',
      },
    ];

    // NOVO: Define o Observable para a quantidade total do carrinho
    this.cartTotalQuantity$ = this.cartService.cartItems$.pipe(
      map((items) => items.reduce((acc, item) => acc + item.quantity, 0))
    );

    // Se ainda precisar da lista `this.cartItems` no TS por outros motivos, mantenha esta inscrição.
    // Se for só para o contador, pode removê-la e simplificar.
    this.cartService.cartItems$.subscribe((items) => {
      this.cartItems = items;
    });
  }

  ngOnDestroy(): void {
    // O `async` pipe gerencia a desinscrição automaticamente para `cartTotalQuantity$`.
    // Se você manteve a inscrição manual para `this.cartItems` acima, você precisaria de uma Subscription para ela e desinscrevê-la aqui.
  }

  addToCart(product: InterfaceProductCard) {
    console.log(
      'DEBUG: MenuPage - Adicionando item via addToCart:',
      product.name
    );
    this.cartService.addItem({
      id: product.id ?? Math.floor(Math.random() * 100000),
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: 1,
    });
  }

  // getCartQuantity() não é mais usado no template, então pode ser removido
  // getCartQuantity(): number {
  //   return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  // }

  goToOrders() {
    this.router.navigate(['/encomendas']);
  }

  openProductModal(product: InterfaceProductCard): void {
    this.selectedProduct = product;
  }

  closeProductModal(): void {
    this.selectedProduct = null;
  }
}
