import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cuidador-tips',
  templateUrl: 'tips.page.html',
  styleUrls: ['tips.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class CuidadorTipsPage {
  acordeones = [
    {
      icon: '📅',
      titulo: 'RECOMENDACIONES GENERALES DE HIGIENE',
      subtitulo: 'Enseñando hábitos de cambio',
      sugerencia: 'Enséñale la regla de las 4 horas para productos absorbentes.',
      bodyIcon: '⏰',
      boton: false,
      open: true,
    },
    {
      icon: '🥦',
      titulo: 'BIENESTAR Y ALIMENTACIÓN',
      subtitulo: 'Alimentos para días sensibles',
      sugerencia: 'Incorporar alimentos antiinflamatorios (cúrcuma, piña). Evitar exceso de sal.',
      bodyIcon: '🥗',
      boton: false,
      open: false,
    },
    {
      icon: '🚦',
      titulo: 'ALERTA DE DOLOR O SANGRADO',
      subtitulo: 'Cuándo contactar a profesionales MUN',
      sugerencia: 'Si el dolor interrumpe el sueño, o el sangrado es extremo (>1 producto/hora), agenda con un especialista.',
      bodyIcon: '',
      boton: true,
      open: false,
    },
  ];

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }

  toggleAcordeon(i: number) {
    this.acordeones[i].open = !this.acordeones[i].open;
  }
}
