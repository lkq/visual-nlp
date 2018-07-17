import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualNLPComponent } from './visual-nlp.component';
import { NLPInputComponent } from '../nlp-input/nlp-input.component';
import { PosSentenceComponent } from '../pos-sentence/pos-sentence.component';
import { FormsModule } from '@angular/forms';
import { PosTagComponent } from '../pos-token/pos-token.component';

describe('VisualNLPComponent', () => {
  let component: VisualNLPComponent;
  let fixture: ComponentFixture<VisualNLPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualNLPComponent, NLPInputComponent, PosSentenceComponent, PosTagComponent ],
      imports: [FormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualNLPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should process textwhen submit', () => {
    component.onSubmitTextToProcess('');
    expect(component.nlpResults.partOfSpeech).toBeTruthy();
    expect(component.nlpResults.partOfSpeech.length).toEqual(8);
  });
});
