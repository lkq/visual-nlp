import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosSentenceComponent } from './pos-sentence.component';
import { PosTagComponent } from '../pos-token/pos-token.component';

describe('PartOfSpeechComponent', () => {
  let component: PosSentenceComponent;
  let fixture: ComponentFixture<PosSentenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosSentenceComponent, PosTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosSentenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
