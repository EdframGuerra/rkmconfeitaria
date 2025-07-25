import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
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
    console.log('Dados do cadastro:', this.registerData);
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
    this.router.navigate(['/cardapio']);
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
}
