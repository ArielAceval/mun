import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';
import { AuthService, UserRole } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  isLoginMode = true;
  nombre = '';
  email = '';
  password = '';
  rol: UserRole = 'nina';
  rolLogin: UserRole = 'nina';
  errorMsg = '';

  constructor(private authService: AuthService, private router: Router) {}

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
    this.errorMsg = '';
    this.nombre = '';
    this.email = '';
    this.password = '';
    this.rol = 'nina';
    this.rolLogin = 'nina';
  }

  onSubmit() {
    this.errorMsg = '';

    if (this.isLoginMode) {
      if (!this.email || !this.password) {
        this.errorMsg = 'Por favor completa todos los campos.';
        return;
      }
      // Modo demo: entra con el rol seleccionado en pantalla
      localStorage.setItem('mun_session', JSON.stringify({ nombre: this.email, email: this.email, rol: this.rolLogin }));
      this.router.navigate([this.rolLogin === 'nina' ? '/onboarding-nina' : '/onboarding-cuidador']);
    } else {
      if (!this.nombre || !this.email || !this.password) {
        this.errorMsg = 'Por favor completa todos los campos.';
        return;
      }
      const ok = this.authService.register(this.nombre, this.email, this.password, this.rol);
      if (!ok) {
        this.errorMsg = 'Este email ya está registrado.';
        return;
      }
      const user = this.authService.login(this.email, this.password);
      if (user) {
        this.router.navigate([user.rol === 'nina' ? '/onboarding-nina' : '/onboarding-cuidador']);
      }
    }
  }
}
