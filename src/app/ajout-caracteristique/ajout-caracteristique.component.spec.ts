import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCaracteristiqueComponent } from './ajout-caracteristique.component';

describe('AjoutCaracteristiqueComponent', () => {
  let component: AjoutCaracteristiqueComponent;
  let fixture: ComponentFixture<AjoutCaracteristiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutCaracteristiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCaracteristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
