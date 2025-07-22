// menu.page.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceCartItem } from './../../../models/interface.cart.item';

export interface InterfaceProductCard {
  id: number; // Opcional para novos produtos
  name: string;
  description: string;
  price: number;
  image: string;
}

@Component({
  selector: 'app-menu.page',
  standalone: false,
  templateUrl: './menu.page.html',
  styleUrl: './menu.page.css'
})
export class MenuPage implements OnInit {
  allProducts: InterfaceProductCard[] = [];
  cartItems: InterfaceCartItem[] = [];
  selectedProduct: InterfaceProductCard | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
   this.allProducts =  [
      {
    id:1,
    name: "Bolo de Brigadeiro",
    description: "Delicioso bolo de chocolate com cobertura de brigadeiro cremoso",
    price: 89.90,
    image: "bolo-brigadeiro.jpg"
  },
  {
    id:2,
    name: "Bolo de Cenoura",
    description: "Bolo fofinho de cenoura com cobertura de chocolate",
    price: 79.90,
    image: "bolo-cenoura.jpg"
  },
  {
    id:3,
    name: "Bolo de Red Velvet",
    description: "Bolo aveludado vermelho com recheio de cream cheese",
    price: 120.00,
    image: "bolo-red-velvet.jpg"
  },
  {
    id:4,
    name: "Bolo de Limão",
    description: "Bolo refrescante com raspas de limão e glacê cítrico",
    price: 85.50,
    image: "bolo-limao.jpg"
  },
  {
    id:5,
    name: "Bolo de Morango",
    description: "Bolo branco com recheio e cobertura de morangos frescos",
    price: 95.75,
    image: "bolo-morango.jpg"
  },
  {
    id:6,
    name: "Bolo de Chocolate Belga",
    description: "Bolo super chocolateado com chocolate belga premium",
    price: 135.00,
    image: "bolo-chocolate-belga.jpg"
  },
  {
    id:7,
    name: "Bolo de Coco",
    description: "Bolo macio de coco com cobertura de coco queimado",
    price: 75.00,
    image: "bolo-coco.jpg"
  },
  {
    id:8,
    name: "Bolo de Maracujá",
    description: "Bolo leve com recheio e cobertura de maracujá",
    price: 88.90,
    image: "bolo-maracuja.jpg"
  },
  {
    id:9,
    name: "Bolo de Abacaxi",
    description: "Bolo úmido com pedaços de abacaxi e calda caramelizada",
    price: 82.50,
    image: "bolo-abacaxi.jpg"
  },
  {
    id:10,
    name: "Bolo de Nozes",
    description: "Bolo rico em nozes com toque de canela",
    price: 110.00,
    image: "bolo-nozes.jpg"
  },
  {
    id:11,
    name: "Bolo de Baunilha",
    description: "Bolo clássico de baunilha com glacê simples",
    price: 65.00,
    image: "bolo-baunilha.jpg"
  },
  {
    id:12,
    name: "Bolo de Café",
    description: "Bolo aromático de café com recheio de creme de café",
    price: 92.00,
    image: "bolo-cafe.jpg"
  },
  {
    id:13,
    name: "Bolo de Laranja",
    description: "Bolo cítrico de laranja com calda de laranja",
    price: 78.50,
    image: "bolo-laranja.jpg"
  },
  {
    id:14,
    name: "Bolo de Milho",
    description: "Bolo caseiro de milho cremoso",
    price: 70.00,
    image: "bolo-milho.jpg"
  },
  {
    id:15,
    name: "Bolo de Amêndoas",
    description: "Bolo refinado com farinha de amêndoas e raspas de limão",
    price: 125.00,
    image: "bolo-amendoas.jpg"
  }
    ];

    // Carrega carrinho do localStorage
    const savedCart = localStorage.getItem('cart');
    this.cartItems = savedCart ? JSON.parse(savedCart) : [];
  }

  addToCart(product: InterfaceProductCard) {
    const found = this.cartItems.find(item => item.id === product.id);
    if (found) {
      found.quantity++;
    } else {
      this.cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1
      });
    }
    localStorage.setItem('cart', JSON.stringify(this.cartItems));
  }

  getCartQuantity(): number {
    return this.cartItems.reduce((acc, item) => acc + item.quantity, 0);
  }

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
