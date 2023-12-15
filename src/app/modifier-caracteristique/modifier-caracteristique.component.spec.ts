import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCaracteristiqueComponent } from './modifier-caracteristique.component';

describe('ModifierCaracteristiqueComponent', () => {
  let component: ModifierCaracteristiqueComponent;
  let fixture: ComponentFixture<ModifierCaracteristiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCaracteristiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCaracteristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
