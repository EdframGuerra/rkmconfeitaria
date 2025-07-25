import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service'; // ajuste o caminho se necessário

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(): boolean {
    if (this.authService.isAuthenticated() && this.authService.getUserType() === 'admin') {
      return true;
    }
    // Se não for admin, redireciona para home (ou outra página que preferir)
    this.router.navigate(['/home']);
    return false;
  }
}
