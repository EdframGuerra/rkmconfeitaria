import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceHighlightsCarousel } from './../../../models/interface.highlights.carousel';

@Component({
  selector: 'app-highlights-carousel',
  standalone: false,
  templateUrl: './highlights.carousel.html',
  styleUrl: './highlights.carousel.css'
})
export class HighlightsCarousel implements OnInit, OnDestroy {

  images: InterfaceHighlightsCarousel[] = [
    { url: 'bolo1.png', alt: 'Bolo confeitado' },
    { url: 'bolo2.png', alt: 'Bolo confeitado' },
    { url: 'bolo3.png', alt: 'Bolo confeitado' },
    { url: 'bolo4.png', alt: 'Bolo confeitado' },
    { url: 'bolo5.png', alt: 'Bolo confeitado' }
  ];

  currentIndex: number = 0;
  private intervalId: any;

  // ✅ Função trackBy em formato arrow
  trackByFn = (index: number, item: InterfaceHighlightsCarousel): string => item.url;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.startAutoSlide();
  }

  ngOnDestroy(): void {
    this.pauseAutoSlide();
  }

  getImagePath(image: string): string {
    return `assets/images/${image}`; // ✅ Corrigido o caminho
  }

  startAutoSlide(): void {
    this.intervalId = setInterval(() => this.nextSlide(), 5000);
  }

  pauseAutoSlide(): void {
    clearInterval(this.intervalId);
  }

  resetAutoSlide(): void {
    this.pauseAutoSlide();
    this.startAutoSlide();
  }

  nextSlide(): void {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  prevSlide(): void {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.resetAutoSlide();
  }

  goToProductPage(image: string): void {
    const productSlug = image.replace(/\.[^/.]+$/, '').toLowerCase();
    this.router.navigate(['/produtos', productSlug]);
  }
}
