import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartOfSpeechComponent } from './part-of-speech.component';

describe('PartOfSpeechComponent', () => {
  let component: PartOfSpeechComponent;
  let fixture: ComponentFixture<PartOfSpeechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartOfSpeechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartOfSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
