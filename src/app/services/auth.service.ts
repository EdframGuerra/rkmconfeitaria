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

    // Cliente - aqui você pode colocar validação real depois
    if (email && password) {
      localStorage.setItem(this.tokenKey, 'rkm-client-token');
      localStorage.setItem(this.userTypeKey, 'client');
      return true;
    }

    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    localStorage.removeItem(this.userTypeKey);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem(this.tokenKey);
  }

  getUserType(): 'admin' | 'client' | null {
    return localStorage.getItem(this.userTypeKey) as 'admin' | 'client' | null;
  }
}
