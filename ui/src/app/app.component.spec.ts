import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { VisualNLPComponent } from './visual-nlp/visual-nlp.component';
import { PosSentenceComponent } from './pos-sentence/pos-sentence.component';
import { PosTagComponent } from './pos-token/pos-token.component';
import { NLPInputComponent } from './nlp-input/nlp-input.component';
import { FormsModule } from '@angular/forms';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        PosSentenceComponent,
        PosTagComponent,
        NLPInputComponent,
        VisualNLPComponent
      ],
      imports: [FormsModule]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Visual NLP');
  }));
});
