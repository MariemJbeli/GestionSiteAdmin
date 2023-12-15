import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vitrine2Component } from './vitrine2.component';

describe('Vitrine2Component', () => {
  let component: Vitrine2Component;
  let fixture: ComponentFixture<Vitrine2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Vitrine2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Vitrine2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
