import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-customer-area',
  standalone: false,
  templateUrl: './customer.area.html',
  styleUrl: './customer.area.css'
})
export class CustomerArea implements OnInit {

  customerName: string = 'Cliente'; // valor padrão

  ngOnInit(): void {
    const user = this.getUser();
    if (user && user.name) {
      this.customerName = user.name;
    }
  }

  getUser(): any {
    const userData = localStorage.getItem('user');
    return userData ? JSON.parse(userData) : null;
  }

}
