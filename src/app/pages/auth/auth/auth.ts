import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  standalone: false,
  templateUrl: './auth.html',
  styleUrl: './auth.css'
})
export class Auth implements OnInit { // O nome da classe é AuthComponent

  constructor() { }

  ngOnInit(): void {
    // Lógica de inicialização para o layout de autenticação, se houver.
  }

}
