import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  chevronBackOutline, chevronForwardOutline, chatbubbleOutline,
  notificationsOutline, menuOutline,
} from 'ionicons/icons';

@Component({
  selector: 'app-nina-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon],
})
export class NinaRegistroPage {
  diasSemana = [
    { label: 'L', num: 7,  activo: false, periodo: false },
    { label: 'M', num: 8,  activo: false, periodo: false },
    { label: 'M', num: 9,  activo: false, periodo: false },
    { label: 'J', num: 10, activo: true,  periodo: true  },
    { label: 'V', num: 11, activo: false, periodo: false },
    { label: 'S', num: 12, activo: false, periodo: false },
    { label: 'D', num: 13, activo: false, periodo: false },
  ];

  petalAngles = [0, 45, 90, 135, 180, 225, 270, 315];

  constructor(private router: Router) {
    addIcons({ chevronBackOutline, chevronForwardOutline, chatbubbleOutline, notificationsOutline, menuOutline });
  }

  navegarChat() {
    this.router.navigate(['/tabs-nina/muni-chat']);
  }
}
