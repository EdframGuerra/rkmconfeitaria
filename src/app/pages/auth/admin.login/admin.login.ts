import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'; // Importar para usar Template-Driven Forms
import { Router } from '@angular/router'; // Importar Router para navegação

// Interface para os dados do formulário de login administrativo
export interface AdminLoginData {
  email: string;
  password: string;
}
@Component({
  selector: 'app-admin.login',
  standalone: false,
  templateUrl: './admin.login.html',
  styleUrl: './admin.login.css'
})
export class AdminLogin implements OnInit { // Corrigido para AdminLoginComponent
  adminLoginData: AdminLoginData = {
    email: '',
    password: ''
  };

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Lógica de inicialização, se necessária.
  }

  /**
   * Simula a submissão do formulário de login administrativo.
   * Em um projeto real, aqui você enviaria as credenciais para um serviço de autenticação de admin.
   */
  submitAdminLogin(): void {
    console.log('Dados de login Admin:', this.adminLoginData);
    // Lógica de autenticação simulada para admin
    if (this.adminLoginData.email === 'admin@rkm.com' && this.adminLoginData.password === 'admin123') {
      alert('Login de administrador bem-sucedido!');
      // TODO: Navegar para a área administrativa (Dashboard ou página de gerenciamento)
      this.router.navigate(['/admin/dashboard']); // Exemplo de rota para o dashboard admin
    } else {
      alert('Credenciais de administrador inválidas. Tente novamente.');
    }
  }
}
