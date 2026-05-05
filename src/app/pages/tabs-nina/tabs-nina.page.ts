import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { homeOutline, happyOutline, chatbubbleOutline, bookOutline, personOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs-nina',
  templateUrl: 'tabs-nina.page.html',
  styleUrls: ['tabs-nina.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsNinaPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ homeOutline, happyOutline, chatbubbleOutline, bookOutline, personOutline });
  }
}
