import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualNLPComponent } from './visual-nlp.component';

describe('VisualNLPComponent', () => {
  let component: VisualNLPComponent;
  let fixture: ComponentFixture<VisualNLPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualNLPComponent ]
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
