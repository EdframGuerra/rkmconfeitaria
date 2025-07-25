import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceTestimonial } from '../../../models/interface.testimonial'; // Importar a interface Testimonial


@Component({
  selector: 'app-testimonials.page',
  standalone: false,
  templateUrl: './testimonials.page.html',
  styleUrl: './testimonials.page.css',
})
export class TestimonialsPage implements OnInit {
  allTestimonials: InterfaceTestimonial[] = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    const mockTestimonials: InterfaceTestimonial[] = [
      {
        id: 1,
        name: 'Profesor Juarez ',
        rating: 5,
        message:
          'O bolo de chocolate foi o destaque da festa da minha filha! Todo mundo elogiou e pediu o contato da confeitaria. Super recomendo!',
        email: 'mariana@example.com',
      },
      {
        id: 2,
        name: 'Bruno Santos.',
        rating: 5,
        message:
          'Os cupcakes que encomendei para o aniversário da minha esposa eram lindos e deliciosos. A apresentação foi impecável e o sabor incrível!',
        email: 'ricardo@example.com',
      },
      {
        id: 3,
        name: 'Dona Vilma',
        rating: 4,
        message:
          'Compro os macarons toda semana para o café da tarde na empresa. Meus colegas adoram e sempre pedem para eu trazer mais. A qualidade é excelente!',
        email: 'ana@example.com',
      },
      {
        id: 4,
        name: 'Carlos Junior.',
        rating: 5,
        message:
          'Os docinhos são maravilhosos! A RKM Confeitaria superou minhas expectativas. Pedirei novamente com certeza.',
        email: 'joao@example.com',
      },
      {
        id: 5,
        name: 'Leonam',
        rating: 5,
        message:
          'Atendimento excelente e produtos de altíssima qualidade. Meus convidados adoraram os brigadeiros gourmet!',
        email: 'carla@example.com',
      },
      {
        id: 6,
        name: 'Gabriel.',
        rating: 3,
        message:
          'O bolo estava bom, mas um pouco doce demais para o meu gosto.',
        email: 'pedro@example.com',
      },
      {
        id: 7,
        name: 'Marcos',
        rating: 5,
        message:
          'A torta de morango é divina! Fresca e com o ponto certo de doçura.',
        email: 'luisa@example.com',
      },
      {
        id: 8,
        name: 'Bruno G.',
        rating: 4,
        message: 'Os biscoitos são ótimos para acompanhar o café. Recomendo!',
        email: 'bruno@example.com',
      },
    ];

    const storedTestimonials = JSON.parse(
      localStorage.getItem('userTestimonials') || '[]'
    );

    this.allTestimonials = [...storedTestimonials, ...mockTestimonials];
  }

  goToLeaveTestimonial(): void {
    this.router.navigate(['/depoimentos/deixar']);
  }
}
