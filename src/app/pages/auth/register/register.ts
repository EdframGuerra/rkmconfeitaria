import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InterfaceRegisterData } from '../../../models/interface.register.data';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.html',
  styleUrls: ['./register.css'],
})
export class Register implements OnInit {
  registerData: InterfaceRegisterData = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };

  isTermsModalOpen: boolean = false;
  isConfirmationModalOpen: boolean = false;
  termsAccepted: boolean = false;

  showPassword: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  submitRegistrationForm(): void {
    // 1. Pegar clientes existentes do localStorage
    const clientsJson = localStorage.getItem('clients');
    let clients: InterfaceRegisterData[] = clientsJson ? JSON.parse(clientsJson) : [];

    // 2. Verificar se email já existe para evitar duplicidade (opcional)
    const exists = clients.some(c => c.email === this.registerData.email);
    if (exists) {
      alert('Este e-mail já está cadastrado. Por favor, use outro.');
      return;
    }

    // 3. Adicionar novo cliente
    clients.push(this.registerData);

    // 4. Salvar novamente no localStorage
    localStorage.setItem('clients', JSON.stringify(clients));

    // 5. Abrir modal de confirmação
    this.isConfirmationModalOpen = true;
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

  closeConfirmationModal(): void {
    this.isConfirmationModalOpen = false;
    this.router.navigate(['/auth/login']); // Volta para login após cadastro
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
