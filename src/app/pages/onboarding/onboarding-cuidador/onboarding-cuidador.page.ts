import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-onboarding-cuidador',
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent],
  templateUrl: './onboarding-cuidador.page.html',
  styleUrls: ['./onboarding-cuidador.page.scss'],
})
export class OnboardingCuidadorPage {
  step = 1;

  // Paso 1
  nombreHija = '';
  fechaNacimiento = '';
  complexion = '';
  actividad: string[] = [];
  escolaridad: string[] = [];
  alimentacion: string[] = [];
  alergias = '';

  // Paso 2
  razonFalta = '';
  frecuenciaFalta = '';
  productos: string[] = [];

  complexionOpciones = ['Delgada', 'Mediana', 'Robusta', 'Curvy'];
  actividadOpciones = ['Sedentaria', 'Moderada', 'Activa', 'Atleta'];
  escolaridadOpciones = ['Colegio', 'Home School', 'Mixto'];
  alimentacionOpciones = ['Omnívora', 'Vegetariana', 'Vegana'];

  razonOpciones = ['Salud', 'Menstruación', 'Viajes', 'Otras razones'];
  frecuenciaOpciones = ['Nunca', 'Raramente', 'A veces', 'Frecuentemente'];

  productosOpciones = [
    { emoji: '🩸', label: 'Toallas desechables' },
    { emoji: '🌿', label: 'Toallas tela' },
    { emoji: '👙', label: 'Calzones menstruales' },
    { emoji: '🥤', label: 'Copa' },
    { emoji: '💊', label: 'Tampones' },
    { emoji: '✨', label: 'Nada aún' },
    { emoji: '➕', label: 'Otros' },
  ];

  get progreso() { return this.step === 1 ? 60 : 100; }

  constructor(private router: Router) {}

  skip() {
    this.router.navigate(['/tabs-cuidador/dashboard']);
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
    localStorage.setItem('mun_onboarding_cuidador', JSON.stringify({
      nombreHija: this.nombreHija,
      fechaNacimiento: this.fechaNacimiento,
      complexion: this.complexion,
      actividad: this.actividad,
      escolaridad: this.escolaridad,
      alimentacion: this.alimentacion,
      alergias: this.alergias,
      razonFalta: this.razonFalta,
      frecuenciaFalta: this.frecuenciaFalta,
      productos: this.productos,
    }));
    this.router.navigate(['/tabs-cuidador/dashboard']);
  }
}
