import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-nina-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class NinaHomePage {
  selectedMood = '';
  sangrado = 7;

  days = [
    { label: 'L', num: 6 },
    { label: 'M', num: 7 },
    { label: 'M', num: 8 },
    { label: 'J', num: 9 },
    { label: 'V', num: 10 },
    { label: 'S', num: 11 },
    { label: 'D', num: 12 },
  ];

  periodDays = [3, 4, 5, 6, 7, 8];
  todayNum = 10;
  moods = ['😢', '😕', '🙂', '😊'];

  constructor(private router: Router) {
    addIcons({ menuOutline, notificationsOutline });
  }

  selectMood(mood: string) {
    this.selectedMood = mood;
  }

  getDayClass(day: number): string {
    if (day === this.todayNum) return 'day-today';
    if (this.periodDays.includes(day)) return 'day-period';
    return '';
  }

  hasPeriodDot(day: number): boolean {
    return this.periodDays.includes(day);
  }

  goToRegistro() {
    this.router.navigate(['/tabs-nina/registro']);
  }
}
