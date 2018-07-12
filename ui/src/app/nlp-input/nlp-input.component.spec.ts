import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NLPInputComponent } from './nlpinput.component';

describe('NLPInputComponent', () => {
  let component: NLPInputComponent;
  let fixture: ComponentFixture<NLPInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NLPInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NLPInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
