import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-nina-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class NinaProfilePage {
  pictogramas = [
    { emoji: '🩹', label: 'Toalla' },
    { emoji: '👕', label: 'Cambiarse' },
    { emoji: '👗', label: 'Cambio ropa' },
    { emoji: '🏅', label: 'Mérito' },
    { emoji: '👖', label: 'Leggings' },
    { emoji: '🔴', label: 'Periodos' },
  ];

  deportes = [
    { emoji: '🏊‍♀️', label: 'Period swimwear' },
    { emoji: '🏃‍♀️', label: 'Leggings' },
    { emoji: '🚴‍♀️', label: 'Bikers' },
  ];

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }
}
