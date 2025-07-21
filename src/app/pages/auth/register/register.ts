import { Component, OnInit } from '@angular/core';
import { RegisterData } from '../../../models/register.data'; // Interface correta

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css'] // Corrigido: era "styleUrl"
})
export class Register implements OnInit {
  // Dados do formulário de cadastro
  registerData: RegisterData = {
    name: '',
    email: '',
    phone: ''
  };

  // Estados dos modais
  isTermsModalOpen: boolean = false;
  isRegisterFormModalOpen: boolean = false;

  // Estado de aceite dos termos
  termsAccepted: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  submitRegistrationForm(): void {
    console.log('Dados do cadastro:', this.registerData);
    alert('Cadastro realizado com sucesso! Bem-vindo ao Clube de Doces!');
  }

  openTermsModal(): void {
    this.isTermsModalOpen = true;
  }

  closeTermsModal(): void {
    this.isTermsModalOpen = false;
  }

  acceptTerms(): void {
    this.termsAccepted = true;
    this.closeTermsModal();
  }
}
