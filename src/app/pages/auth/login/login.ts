import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importar para usar Template-Driven Forms
import { Router } from '@angular/router'; // Importar Router para navegação

// Interface para os dados do formulário de login
export interface LoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login implements OnInit { // Corrigido para LoginComponent
  loginData: LoginData = {
    email: '',
    password: ''
  };

  isTermsModalOpen: boolean = false;
  termsAccepted: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
  }

  /**
   * Simula a submissão do formulário de login.
   * Em um projeto real, aqui você enviaria as credenciais para um serviço de autenticação.
   */
  submitLogin(): void {
    console.log('Dados de login:', this.loginData);
    // Lógica de autenticação simulada
    if (this.loginData.email === 'admin@rkm.com' && this.loginData.password === 'admin123') {
      alert('Login de administrador bem-sucedido!');
      this.router.navigate(['/admin']); // Navegar para a área administrativa
    } else {
      alert('E-mail ou senha incorretos. Tente novamente.');
    }
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
   * Navega para a página de registro.
   */
  goToRegisterPage(): void {
    this.router.navigate(['/auth/register']);
  }
}
