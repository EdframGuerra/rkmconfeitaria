import { Component, OnInit } from '@angular/core';
import { TestimonialFormData } from '../../../models/interface.testimonial.form.data';
import { Router } from '@angular/router';

@Component({
  selector: 'app-leave-testimonial-form',
  standalone: false,
  templateUrl: './leave.testimonial.form.html',
  styleUrl: './leave.testimonial.form.css',
})
export class LeaveTestimonialForm implements OnInit {
  formData: TestimonialFormData = {
    name: '',
    email: '',
    isAnonymous: false,
    rating: 0, // Inicia com 0 estrelas
    message: '',
  };

  isTermsModalOpen: boolean = false;
  isConfirmationModalOpen: boolean = false;
  termsAccepted: boolean = false;

  // Simulação de usuário logado/cadastrado
  isUserRegistered: boolean = true; // Altere para 'false' para testar o fluxo de indução ao cadastro

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
    // Em um cenário real, você verificaria se o usuário está logado aqui.
    // if (!this.isUserRegistered) {
    //   this.showRegistrationInducement();
    // }
  }

  /**
   * Define a avaliação por estrelas.
   * @param star O número de estrelas selecionado.
   */
  setRating(star: number): void {
    this.formData.rating = star;
  }

  /**
   * Abre o modal de Termos e Condições.
   */
  openTermsModal(): void {
    this.isTermsModalOpen = true;
  }

  /**
   * Fecha o modal de Termos e Condições.
   */
  closeTermsModal(): void {
    this.isTermsModalOpen = false;
  }

  /**
   * Aceita os termos e condições.
   */
  acceptTerms(): void {
    this.termsAccepted = true;
    this.closeTermsModal();
  }

  /**
   * Simula a submissão do formulário de depoimento.
   */
  submitTestimonialForm(): void {
    if (!this.isUserRegistered) {
      alert(
        'Você precisa estar cadastrado para deixar um depoimento. Por favor, faça seu cadastro!'
      );
      this.router.navigate(['/auth/register']); // Redireciona para a página de cadastro
      return;
    }

    if (this.formData.rating === 0) {
      alert('Por favor, selecione uma avaliação em estrelas.');
      return;
    }

    console.log('Depoimento enviado:', this.formData);
    // Em um projeto real, você enviaria este depoimento para um serviço de backend.

    this.isConfirmationModalOpen = true; // Exibe modal de confirmação
  }

  /**
   * Fecha o modal de confirmação.
   */
  closeConfirmationModal(): void {
    this.isConfirmationModalOpen = false;
    this.router.navigate(['/depoimentos']); // Redireciona para a página de todos os depoimentos
  }

  /**
   * Exibe uma mensagem para induzir o cadastro (se o usuário não estiver registrado).
   */
  private showRegistrationInducement(): void {
    // Esta função pode ser chamada no ngOnInit se o usuário não estiver logado
    // ou quando ele tenta enviar o formulário sem estar cadastrado.
    // Implementar um modal ou um toast para esta mensagem.
    alert('Para deixar um depoimento, você precisa estar cadastrado.');
  }
}