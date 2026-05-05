import { Component, EnvironmentInjector, inject } from '@angular/core';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { gridOutline, bulbOutline } from 'ionicons/icons';

@Component({
  selector: 'app-tabs-cuidador',
  templateUrl: 'tabs-cuidador.page.html',
  styleUrls: ['tabs-cuidador.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel],
})
export class TabsCuidadorPage {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ gridOutline, bulbOutline });
  }
}
