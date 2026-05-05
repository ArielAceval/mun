import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline, chevronDownOutline, chevronUpOutline } from 'ionicons/icons';

@Component({
  selector: 'app-cuidador-dashboard',
  templateUrl: 'dashboard.page.html',
  styleUrls: ['dashboard.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class CuidadorDashboardPage {
  acordeon1Abierto = true;
  acordeon2Abierto = false;
  acordeon3Abierto = false;

  constructor() {
    addIcons({ menuOutline, notificationsOutline, chevronDownOutline, chevronUpOutline });
  }

  toggleAcordeon1() { this.acordeon1Abierto = !this.acordeon1Abierto; }
  toggleAcordeon2() { this.acordeon2Abierto = !this.acordeon2Abierto; }
  toggleAcordeon3() { this.acordeon3Abierto = !this.acordeon3Abierto; }
}
