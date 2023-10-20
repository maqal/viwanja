import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ukaguzi2Component } from './ukaguzi2.component';

describe('Ukaguzi2Component', () => {
  let component: Ukaguzi2Component;
  let fixture: ComponentFixture<Ukaguzi2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ukaguzi2Component]
    });
    fixture = TestBed.createComponent(Ukaguzi2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
