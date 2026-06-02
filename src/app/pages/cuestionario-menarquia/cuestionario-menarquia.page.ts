import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { IonContent } from '@ionic/angular/standalone';

interface QuestionStep { type: 'question'; id: number; block: number; }
interface BlockEndStep { type: 'block-end'; block: number; }
interface CompleteStep { type: 'complete'; }
type Step = QuestionStep | BlockEndStep | CompleteStep;

interface VisualOption { label: string; description: string; emoji: string; }

interface QuestionDef {
  text: string;
  type: 'single' | 'multi' | 'numeric' | 'visual';
  options?: string[] | VisualOption[];
}

const STORAGE_KEY = 'mun_cuestionario_menarquia';

@Component({
  selector: 'app-cuestionario-menarquia',
  standalone: true,
  imports: [CommonModule, IonContent],
  templateUrl: './cuestionario-menarquia.page.html',
  styleUrls: ['./cuestionario-menarquia.page.scss'],
})
export class CuestionarioMenarquiaPage implements OnInit {
  stepIndex = 0;
  answers: Record<number, any> = {};
  state: 'resume-prompt' | 'answering' = 'answering';
  private savedStepIndex = 0;
  private savedAnswers: Record<number, any> = {};

  readonly ages = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17];

  readonly questionDefs: Record<number, QuestionDef> = {
    1: {
      text: '¿Sabes qué es la regla, menstruación o menarquia?',
      type: 'single',
      options: ['Sí, lo tengo claro', 'Más o menos', 'No, no lo sé bien'],
    },
    2: {
      text: '¿Sabes por qué se produce?',
      type: 'single',
      options: ['Sí', 'No', 'Tengo dudas'],
    },
    3: {
      text: '¿Alguien te explicó qué era la menarquia? ¿Quién?',
      type: 'multi',
      options: ['Mamá', 'Papá', 'Abuela u otro familiar', 'Profesora', 'Amiga', 'Internet o redes sociales', 'Nadie me explicó'],
    },
    8: {
      text: '¿A qué edad te llegó tu primera menstruación?',
      type: 'numeric',
    },
    9: {
      text: '¿Cuando llega tu menstruación es con dolor?',
      type: 'single',
      options: ['Sí, siempre', 'A veces', 'No, sin dolor', 'Todavía no me ha llegado'],
    },
    10: {
      text: '¿El dolor te impide hacer tus actividades normales?\nClases, deporte, quedar con amigas…',
      type: 'single',
      options: ['Sí, me quedo en casa', 'A veces me cuesta', 'No me afecta', 'No he tenido dolor'],
    },
    11: {
      text: '¿Has notado otros cambios en estos días?',
      type: 'multi',
      options: ['Dolor en los pechos', 'Dolor de cabeza', 'Más cansancio', 'Cambios de humor', 'Náuseas', 'Hinchazón', 'Ninguno'],
    },
    12: {
      text: '¿Cómo describirías el sangrado?',
      type: 'visual',
      options: [
        { label: 'Leve', description: 'Manchitas', emoji: '🩸' },
        { label: 'Moderado', description: 'Flujo normal', emoji: '🩸🩸' },
        { label: 'Abundante', description: 'Flujo intenso', emoji: '🩸🩸🩸' },
      ] as VisualOption[],
    },
  };

  constructor(private router: Router) {}

  ngOnInit() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return;
    const data = JSON.parse(saved);
    if (data.completed) {
      this.router.navigate(['/tabs-nina/home']);
      return;
    }
    if (data.stepIndex > 0) {
      this.savedStepIndex = data.stepIndex;
      this.savedAnswers = data.answers || {};
      this.state = 'resume-prompt';
    }
  }

  resumeProgress() {
    this.stepIndex = this.savedStepIndex;
    this.answers = { ...this.savedAnswers };
    this.state = 'answering';
  }

  startFresh() {
    this.answers = {};
    this.stepIndex = 0;
    this.state = 'answering';
    this.saveProgress();
  }

  get steps(): Step[] {
    const s: Step[] = [];
    s.push({ type: 'question', id: 1, block: 1 });
    s.push({ type: 'question', id: 2, block: 1 });
    s.push({ type: 'question', id: 3, block: 1 });
    s.push({ type: 'block-end', block: 1 });
    s.push({ type: 'question', id: 8, block: 3 });
    s.push({ type: 'question', id: 9, block: 3 });
    if (this.showQ10) s.push({ type: 'question', id: 10, block: 3 });
    s.push({ type: 'question', id: 11, block: 3 });
    if (this.showQ12) s.push({ type: 'question', id: 12, block: 3 });
    s.push({ type: 'block-end', block: 3 });
    s.push({ type: 'complete' });
    return s;
  }

  get currentStep(): Step {
    return this.steps[this.stepIndex] ?? { type: 'complete' };
  }

  get currentQuestionId(): number {
    return this.currentStep.type === 'question' ? (this.currentStep as QuestionStep).id : 0;
  }

  get currentQuestion(): QuestionDef | null {
    const id = this.currentQuestionId;
    return id ? (this.questionDefs[id] ?? null) : null;
  }

  get showQ10(): boolean {
    return this.answers[9] === 'Sí, siempre' || this.answers[9] === 'A veces';
  }

  get showQ12(): boolean {
    const q8 = this.answers[8];
    return q8 !== undefined && q8 !== 'Todavía no me ha llegado';
  }

  get blockSegments(): number[] {
    const s = this.steps;
    return [1, 2, 3, 4, 5].map(block => {
      const blockSteps = s.filter(st =>
        (st.type === 'question' || st.type === 'block-end') && (st as any).block === block
      );
      if (blockSteps.length === 0) return 0;
      const firstIdx = s.indexOf(blockSteps[0]);
      const lastIdx = s.indexOf(blockSteps[blockSteps.length - 1]);
      if (this.stepIndex > lastIdx) return 100;
      if (this.stepIndex < firstIdx) return 0;
      const stepsInBlock = lastIdx - firstIdx + 1;
      return Math.round(((this.stepIndex - firstIdx) / stepsInBlock) * 100);
    });
  }

  get muniMessage(): string {
    const step = this.currentStep;
    if (step.type === 'complete') return '¡Increíble! Gracias por contarme todo esto. ¡Eres la mejor! 🌟';
    if (step.type === 'block-end') {
      const block = (step as BlockEndStep).block;
      if (block === 1) return '¡Lo hiciste genial! Ahora cuéntame sobre tu ciclo 🌸';
      return '¡Increíble trabajo! Ya terminamos todos los bloques 💜';
    }
    const block = (step as QuestionStep).block;
    if (block === 1) return 'Estoy aquí para escucharte. No hay respuestas incorrectas 💜';
    return '¡Lo estás haciendo muy bien! Cuéntame sobre tu ciclo 🌸';
  }

  get blockEndEmoji(): string {
    const block = (this.currentStep as BlockEndStep).block;
    return block === 1 ? '✨' : '🌸';
  }

  get blockEndBlockName(): string {
    const block = (this.currentStep as BlockEndStep).block;
    if (block === 1) return 'Lo que sé sobre la menstruación';
    if (block === 3) return 'Mi ciclo y mis síntomas';
    return '';
  }

  get blockEndSubtitle(): string {
    const block = (this.currentStep as BlockEndStep).block;
    if (block === 1) return 'A continuación: Mi ciclo y mis síntomas';
    return '¡Ya terminaste todos los bloques de esta etapa!';
  }

  get stringOptions(): string[] {
    const q = this.currentQuestion;
    if (!q || (q.type !== 'single' && q.type !== 'multi')) return [];
    return (q.options as string[]) ?? [];
  }

  get visualOptions(): VisualOption[] {
    const q = this.currentQuestion;
    if (!q || q.type !== 'visual') return [];
    return (q.options as VisualOption[]) ?? [];
  }

  setAnswer(id: number, value: any) {
    this.answers[id] = value;
  }

  toggleMulti(id: number, value: string) {
    if (!Array.isArray(this.answers[id])) this.answers[id] = [];
    const arr: string[] = this.answers[id];
    const idx = arr.indexOf(value);
    if (idx === -1) arr.push(value); else arr.splice(idx, 1);
  }

  isSelected(id: number, value: any): boolean {
    return this.answers[id] === value;
  }

  isMultiSelected(id: number, value: string): boolean {
    return Array.isArray(this.answers[id]) && this.answers[id].includes(value);
  }

  get canGoNext(): boolean {
    const step = this.currentStep;
    if (step.type !== 'question') return true;
    const id = this.currentQuestionId;
    const q = this.questionDefs[id];
    if (!q) return true;
    const ans = this.answers[id];
    if (q.type === 'multi') return Array.isArray(ans) && ans.length > 0;
    return ans !== undefined && ans !== null;
  }

  get nextLabel(): string {
    if (this.currentStep.type === 'block-end') return 'Continuar →';
    return 'Siguiente';
  }

  next() {
    if (!this.canGoNext) return;
    if (this.stepIndex < this.steps.length - 1) {
      this.stepIndex++;
      this.saveProgress();
    }
  }

  back() {
    if (this.stepIndex > 0) {
      this.stepIndex--;
    } else {
      this.router.navigate(['/onboarding-nina']);
    }
  }

  exitAndSave() {
    this.saveProgress();
    this.router.navigate(['/tabs-nina/home']);
  }

  finish() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      stepIndex: this.stepIndex,
      answers: this.answers,
      completed: true,
    }));
    this.router.navigate(['/tabs-nina/home']);
  }

  private saveProgress() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      stepIndex: this.stepIndex,
      answers: this.answers,
      completed: false,
    }));
  }
}
