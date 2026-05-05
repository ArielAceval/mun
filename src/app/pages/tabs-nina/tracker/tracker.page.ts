import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-nina-tracker',
  templateUrl: 'tracker.page.html',
  styleUrls: ['tracker.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class NinaTrackerPage {
  selectedPains: string[] = [];
  dolorLevel = '';

  painTypes = [
    { emoji: '💉', label: 'Pinchazos', fondo: '#fff0f5' },
    { emoji: '🪨', label: 'Presión', fondo: '#f5f5f5' },
    { emoji: '🌀', label: 'Retorcijones', fondo: '#fff5f0' },
    { emoji: '🔥', label: 'Como fuego', fondo: '#fff8f0' },
  ];

  dolorLevels = ['😊', '😐', '😟', '😢'];

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }

  togglePain(pain: string) {
    const idx = this.selectedPains.indexOf(pain);
    if (idx === -1) this.selectedPains.push(pain); else this.selectedPains.splice(idx, 1);
  }

  selectDolorLevel(level: string) {
    this.dolorLevel = level;
  }

  guardar() {
    localStorage.setItem('mun_tracker_dolor', JSON.stringify({
      pains: this.selectedPains,
      nivel: this.dolorLevel,
    }));
  }
}
