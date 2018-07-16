import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NLPInputComponent } from './nlp-input.component';
import { FormsModule } from '@angular/forms';

describe('NLPInputComponent', () => {
  let component: NLPInputComponent;
  let fixture: ComponentFixture<NLPInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NLPInputComponent ],
      imports: [FormsModule]
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
