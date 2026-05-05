import { Component } from '@angular/core';
import { IonContent, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-nina-tracker',
  templateUrl: 'tracker.page.html',
  styleUrls: ['tracker.page.scss'],
  standalone: true,
  imports: [CommonModule, IonContent, IonGrid, IonRow, IonCol],
})
export class NinaTrackerPage {
  selectedMoods: string[] = [];
  selectedSymptoms: string[] = [];
  showSaved = false;

  moods = [
    { emoji: '😊', label: 'Feliz', color: '#FFE5B4' },
    { emoji: '😔', label: 'Triste', color: '#B4D4FF' },
    { emoji: '😰', label: 'Ansiosa', color: '#FFE5F5' },
    { emoji: '😌', label: 'Tranquila', color: '#D4FFE5' },
    { emoji: '😤', label: 'Frustrada', color: '#FFD4D4' },
    { emoji: '😴', label: 'Cansada', color: '#E5D4FF' },
  ];

  sensorySymptoms = [
    { emoji: '🤕', label: 'Dolor de Cabeza', color: '#FFE5F5' },
    { emoji: '💢', label: 'Cólicos', color: '#FFD4D4' },
    { emoji: '🌊', label: 'Hinchazón', color: '#B4D4FF' },
    { emoji: '🍽️', label: 'Apetito', color: '#FFE5B4' },
    { emoji: '🎧', label: 'Sonido', color: '#FFE5D4' },
    { emoji: '💡', label: 'Luz', color: '#FFF9E5' },
  ];

  toggleMood(label: string) {
    if (this.selectedMoods.includes(label)) {
      this.selectedMoods = this.selectedMoods.filter(m => m !== label);
    } else {
      this.selectedMoods.push(label);
    }
  }

  toggleSymptom(label: string) {
    if (this.selectedSymptoms.includes(label)) {
      this.selectedSymptoms = this.selectedSymptoms.filter(s => s !== label);
    } else {
      this.selectedSymptoms.push(label);
    }
  }

  handleSave() {
    this.showSaved = true;
    setTimeout(() => this.showSaved = false, 2000);
  }
}
