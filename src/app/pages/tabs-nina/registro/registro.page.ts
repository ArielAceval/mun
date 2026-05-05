import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-nina-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class NinaRegistroPage {
  days = [
    { label: 'L', num: 6 },
    { label: 'M', num: 7 },
    { label: 'M', num: 8 },
    { label: 'J', num: 9 },
    { label: 'V', num: 10 },
    { label: 'S', num: 11 },
    { label: 'D', num: 12 },
  ];
  todayNum = 10;

  petalAngles = Array.from({ length: 8 }, (_, i) => i * 45);

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }

  getDayClass(day: number): string {
    return day === this.todayNum ? 'day-today' : '';
  }
}
