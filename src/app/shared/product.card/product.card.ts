import { Component, EventEmitter, Input, Output } from '@angular/core';
import { InterfaceProductCard } from '../../models/interface.product.card';

@Component({
  selector: 'app-product-card',
  standalone: false,
  templateUrl: './product.card.html',
  styleUrl: './product.card.css'
})
export class ProductCard {
  @Input() productData!: InterfaceProductCard;
  @Output() onDetailsClick = new EventEmitter<InterfaceProductCard>();
  @Output() onOrderClick = new EventEmitter<InterfaceProductCard>();

  // Métodos simplificados
  showDetails() {
    this.onDetailsClick.emit(this.productData);
  }

  makeOrder() {
    this.onOrderClick.emit(this.productData);
  }
}
