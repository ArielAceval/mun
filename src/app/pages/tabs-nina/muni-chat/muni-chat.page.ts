import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
  IonBackButton, IonCheckbox,
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { menuOutline, notificationsOutline } from 'ionicons/icons';

@Component({
  selector: 'app-muni-chat',
  templateUrl: 'muni-chat.page.html',
  styleUrls: ['muni-chat.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule,
    IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonButton, IonIcon,
    IonBackButton, IonCheckbox,
  ],
})
export class MuniChatPage {
  mensajeNina = 'Gracias, MUNI. He registrado mi sangrado.';
  preguntasPreescritas = [
    '¿Cómo me cambio en el colegio?',
    '¿Por qué me duele?',
  ];
  necesitaHablar = false;
  mensajeEnviado = false;

  constructor() {
    addIcons({ menuOutline, notificationsOutline });
  }

  enviarConsejo() {
    this.mensajeEnviado = true;
  }
}
