import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service'; // ajuste o caminho conforme seu projeto

@Component({
  selector: 'app-customer-area',
  standalone: false,
  templateUrl: './customer.area.html',
  styleUrls: ['./customer.area.css']
})
export class CustomerArea implements OnInit {

  customerName: string = 'Cliente';

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (!this.authService.isAuthenticated() || this.authService.getUserType() !== 'client') {
      this.showLoginRequiredModal();
    } else {
      this.customerName = this.getCustomerName() || 'Cliente';
    }
  }

  getCustomerName(): string | null {
    return localStorage.getItem('userName');
  }

  showLoginRequiredModal(): void {
    Swal.fire({
      icon: 'warning',
      title: 'Acesso restrito',
      text: 'Você precisa estar logado como cliente para acessar a Área do Cliente.',
      confirmButtonText: 'Fazer Login',
      confirmButtonColor: '#e91e63'
    }).then(() => {
      this.router.navigate(['/auth/login']);
    });
  }
}

