import { Component } from '@angular/core';
import { IonContent, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { sparklesOutline, bookOutline } from 'ionicons/icons';

@Component({
  selector: 'app-nina-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonIcon],
})
export class NinaHomePage {
  constructor() {
    addIcons({ sparklesOutline, bookOutline });
  }
}
