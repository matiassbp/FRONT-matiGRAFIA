// login.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Output() loginSuccess: EventEmitter<void> = new EventEmitter<void>();

  constructor(private authService: AuthService) {}

  username: string = '';
  password: string = '';

  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      response => {
        // Emitir evento de inicio de sesión exitoso
        console.log("Inicio de sesión exitoso");
        this.loginSuccess.emit();
      },
      error => {
        // Manejar errores aquí
        console.log("Error al iniciar sesión");
        console.error(error);
      }
    );
  }
}
