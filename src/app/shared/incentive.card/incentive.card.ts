import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-incentive-card',
  standalone: false,
  templateUrl: './incentive.card.html',
  styleUrl: './incentive.card.css'
})
export class IncentiveCard implements OnInit { // Corrigido para IncentiveCardComponent
  // Removido: isTermsModalOpen: boolean = false;
  // Removido: termsAccepted: boolean = false;

  constructor(private router: Router) { } // Injetar Router

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
  }

  /**
   * Redireciona para a página de cadastro (/auth/register).
   * Chamado ao clicar no botão "Cadastre-se".
   */
  goToRegisterPage(): void {
    this.router.navigate(['/auth/register']);
  }

  // Removido: openTermsModal(), closeTermsModal(), acceptTerms()
  // Toda a lógica de termos e condições será tratada na página de cadastro.
}
