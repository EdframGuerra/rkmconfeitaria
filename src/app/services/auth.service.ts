import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'userToken';
  private readonly userTypeKey = 'userType';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    // Admin hardcoded
    if (email === 'admin@rkm.com' && password === 'admin123') {
      localStorage.setItem(this.tokenKey, 'rkm-admin-token');
      localStorage.setItem(this.userTypeKey, 'admin');
      return true;
    }

    // Cliente: busca clientes cadastrados no localStorage
    const clientsJson = localStorage.getItem('clients');
    if (!clientsJson) return false; // Nenhum cliente cadastrado ainda

    const clients = JSON.parse(clientsJson) as Array<{ email: string; password: string }>;

    const client = clients.find(c => c.email === email && c.password === password);
    if (client) {
      localStorage.setItem(this.tokenKey, 'rkm-client-token');
      localStorage.setItem(this.userTypeKey, 'client');
      localStorage.setItem('userName', client.email);
      return true;
    }

    // Se não achou admin nem cliente válido
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userTypeKey);
    localStorage.removeItem('userName');
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUserType(): 'admin' | 'client' | null {
    return localStorage.getItem(this.userTypeKey) as 'admin' | 'client' | null;
  }
}
