import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-nina',
  standalone: true,
  imports: [CommonModule, IonContent],
  templateUrl: './onboarding-nina.page.html',
  styleUrls: ['./onboarding-nina.page.scss'],
})
export class OnboardingNinaPage {
  step = 1;

  edad: number | string | null = null;
  convivencia: string[] = [];
  cuerpo: string | null = null;
  estiloVida: string[] = [];
  productos: string[] = [];

  edades: (number | string)[] = [8, 9, 10, 11, 12, 13, 14, 'otro'];
  coloresEdad = [
    '#b8f0d8', '#f5c5d0', '#c8b8e8', '#f5e8b0',
    '#f5c5d0', '#c8b8e8', '#b8f0d8', 'white',
  ];

  convivenciaOpciones = [
    { emoji: '👨‍👩‍👧', label: 'Mamá/Papá' },
    { emoji: '👴👵', label: 'Abuelos' },
    { emoji: '👫', label: 'Tíos' },
    { emoji: '👧👦', label: 'Hermanos/as' },
    { emoji: '👦👦', label: 'Hermanos' },
    { emoji: '👫', label: 'Amigos' },
  ];

  cuerpoOpciones = [
    { emoji: '🧍‍♀️', label: 'Alta' },
    { emoji: '🧍‍♀️', label: 'Mediana' },
    { emoji: '🧍‍♀️', label: 'Bajita' },
    { emoji: '🧍‍♀️', label: 'Light/Curvy' },
  ];

  estiloOpciones = [
    { emoji: '📚', label: 'Estudias', fondo: '#e8f4ff' },
    { emoji: '🏀', label: 'Haces Deporte', fondo: '#e8ffe8' },
    { emoji: '🎨', label: 'Haces Arte', fondo: '#fff4e8' },
  ];

  productosOpciones = [
    { emoji: '🩸', label: 'Toallas desechables' },
    { emoji: '🌿', label: 'Toallas tela' },
    { emoji: '👙', label: 'Calzones menstruales' },
    { emoji: '🥤', label: 'Copa' },
    { emoji: '💊', label: 'Tampones' },
    { emoji: '✨', label: 'Nada aún' },
  ];

  get progreso() { return this.step === 1 ? 30 : 100; }

  constructor(private router: Router) {}

  skip() {
    this.router.navigate(['/tabs-nina/home']);
  }

  toggleMulti(arr: string[], val: string) {
    const idx = arr.indexOf(val);
    if (idx === -1) arr.push(val); else arr.splice(idx, 1);
  }

  isActive(arr: string[], val: string) {
    return arr.includes(val);
  }

  next() {
    if (this.step < 2) { this.step++; } else { this.finish(); }
  }

  finish() {
    localStorage.setItem('mun_onboarding_nina', JSON.stringify({
      edad: this.edad,
      convivencia: this.convivencia,
      cuerpo: this.cuerpo,
      estiloVida: this.estiloVida,
      productos: this.productos,
    }));
    this.router.navigate(['/cuestionario-menarquia']);
  }
}
