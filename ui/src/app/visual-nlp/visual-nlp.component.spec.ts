import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualNLPComponent } from './visual-nlp.component';
import { NLPInputComponent } from '../nlp-input/nlp-input.component';
import { PartOfSpeechComponent } from '../part-of-speech/part-of-speech.component';
import { FormsModule } from '../../../node_modules/@angular/forms';
import { PosTagComponent } from '../pos-tag/pos-tag.component';

describe('VisualNLPComponent', () => {
  let component: VisualNLPComponent;
  let fixture: ComponentFixture<VisualNLPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualNLPComponent, NLPInputComponent, PartOfSpeechComponent, PosTagComponent ],
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
});
