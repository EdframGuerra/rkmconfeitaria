import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { InterfaceLogin } from '../../../models/interface.login';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
})
export class Login implements OnInit {
  loginData: InterfaceLogin = { email: '', password: '' };
  errorMessage: string = '';
  termsAccepted: boolean = false;
  isTermsModalOpen: boolean = false;
  isPrivacyModalOpen: boolean = false;
  title: string = 'Acesso ao Clube de Doces';

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    const nav = this.router.getCurrentNavigation();
    const fromAdmin = nav?.extras?.state?.['fromAdmin'];

    if (fromAdmin) {
      this.title = 'Área Administrativa';
    }
  }

  submitLogin(): void {
    this.errorMessage = '';

    if (!this.loginData.email || !this.loginData.password) {
      this.errorMessage = 'Por favor, preencha e-mail e senha.';
      return;
    }

    if (!this.termsAccepted) {
      this.errorMessage = 'Você deve aceitar os termos e condições.';
      return;
    }

    const loggedIn = this.authService.login(
      this.loginData.email,
      this.loginData.password
    );

    if (loggedIn) {
      const userType = this.authService.getUserType();
      if (userType === 'admin') {
        this.router.navigate(['/dashboard'], { state: { fromAdmin: true } });
      } else {
        this.router.navigate(['/home']);
      }
    } else {
      this.errorMessage = 'Credenciais inválidas. Tente novamente.';
    }
  }

  openTermsModal(): void {
    this.isTermsModalOpen = true;
  }

  closeTermsModal(): void {
    this.isTermsModalOpen = false;
  }

  openPrivacyModal(): void {
    this.isPrivacyModalOpen = true;
  }

  closePrivacyModal(): void {
    this.isPrivacyModalOpen = false;
  }
}
