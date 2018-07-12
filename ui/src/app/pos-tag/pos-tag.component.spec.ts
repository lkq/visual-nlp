import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PosTagComponent } from './pos-tag.component';

describe('PosTagComponent', () => {
  let component: PosTagComponent;
  let fixture: ComponentFixture<PosTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PosTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PosTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
