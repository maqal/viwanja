import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FarmRegisterComponent } from './farm-register.component';

describe('FarmRegisterComponent', () => {
  let component: FarmRegisterComponent;
  let fixture: ComponentFixture<FarmRegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FarmRegisterComponent]
    });
    fixture = TestBed.createComponent(FarmRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
