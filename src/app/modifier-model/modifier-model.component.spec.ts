import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierModelComponent } from './modifier-model.component';

describe('ModifierModelComponent', () => {
  let component: ModifierModelComponent;
  let fixture: ComponentFixture<ModifierModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
