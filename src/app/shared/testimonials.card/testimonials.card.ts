import { Component, Input, OnInit } from '@angular/core';
import { InterfaceTestimonialCard } from '../../models/interface.testimonial.card';

@Component({
  selector: 'app-testimonials-card',
  standalone: false,
  templateUrl: './testimonials.card.html',
  styleUrl: './testimonials.card.css'
})
export class TestimonialsCard implements OnInit {
  @Input() testimonial!: InterfaceTestimonialCard; // Recebe o objeto de depoimento

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
    // Opcional: Se o rating puder ser decimal (ex: 4.5), você precisaria de lógica para estrelas-meio.
  }
}
