import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private readonly tokenKey = 'userToken';

  constructor(private router: Router) {}

  login(email: string, password: string): boolean {
    if (email === 'admin@rkm.com' && password === 'admin123') {
      localStorage.setItem(this.tokenKey, 'rkm-admin');
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem(this.tokenKey) === 'rkm-admin';
  }
}

