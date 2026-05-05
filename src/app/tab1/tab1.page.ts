import { Component } from '@angular/core';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sparklesOutline, bookOutline, heartOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon],
})
export class Tab1Page {
  constructor() {
    addIcons({ sparklesOutline, bookOutline, heartOutline });
  }
}