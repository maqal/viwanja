import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ukaguzi1Component } from './ukaguzi1.component';

describe('Ukaguzi1Component', () => {
  let component: Ukaguzi1Component;
  let fixture: ComponentFixture<Ukaguzi1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Ukaguzi1Component]
    });
    fixture = TestBed.createComponent(Ukaguzi1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
