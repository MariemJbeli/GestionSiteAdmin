import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutModelComponent } from './ajout-model.component';

describe('AjoutModelComponent', () => {
  let component: AjoutModelComponent;
  let fixture: ComponentFixture<AjoutModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
