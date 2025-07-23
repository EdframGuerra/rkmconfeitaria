import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importar para usar Template-Driven Forms
import { Router } from '@angular/router'; // Importar Router para redirecionamento
import { InterfaceRegisterData } from '../../../models/interface.register.data';


@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css']
})
export class Register implements OnInit {
  // Dados do formulário de cadastro
  registerData: InterfaceRegisterData = {
     name: '',
  email: '',
  phone: '',
  password: '',
    // dob: '' // Removido se não for usado no HTML ou na interface RegisterData
  };

  // Estados dos modais
  isTermsModalOpen: boolean = false;
  isConfirmationModalOpen: boolean = false; // Novo modal de confirmação

  // Estado de aceite dos termos
  termsAccepted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
  }

  /**
   * Simula a submissão do formulário de cadastro.
   * Exibe mensagem de boas-vindas personalizada e redireciona.
   */
  submitRegistrationForm(): void {
    console.log('Dados do cadastro:', this.registerData);
    // Lógica para enviar os dados para o backend (simulado)

    // Exibe o modal de confirmação de cadastro
    this.isConfirmationModalOpen = true;
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
    this.closeTermsModal(); // Fecha o modal de termos
  }

  /**
   * Fecha o modal de confirmação e redireciona (ou faz outra ação).
   */
  closeConfirmationModal(): void {
    this.isConfirmationModalOpen = false;
    // Opcional: Redirecionar o usuário para a Home ou página de login após o cadastro
    this.router.navigate(['/cardapio']);
  }
}
