import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importar para usar Template-Driven Forms
import { Router } from '@angular/router'; // Importar Router para navegação
import { AuthService } from '../../../services/auth.service';
import { InterfaceLogin } from '../../../models/interface.login'; // Importar a interface LoginData

// Interface para os dados do formulário de login

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login { // Corrigido para LoginComponent
  loginData: InterfaceLogin = {
    email: '',
    password: ''
  };

  isTermsModalOpen: boolean = false;
  termsAccepted: boolean = false;

  constructor(private router: Router, private authService: AuthService) {}

submitLogin(): void {
  const success = this.authService.login(this.loginData.email, this.loginData.password);
  if (success) {
    alert('Login bem-sucedido!');
    this.router.navigate(['/admin']);
  } else {
    alert('E-mail ou senha incorretos.');
  }
}
termsModalAberto = false;

openTermsModal() {
  this.termsModalAberto = true;
}

closeTermsModal() {
  this.termsModalAberto = false;
}

acceptTerms() {
  // Aqui você pode fazer algo como marcar uma variável para controle posterior
  this.termsModalAberto = false;
  this.termsAccepted = true;
}

}
