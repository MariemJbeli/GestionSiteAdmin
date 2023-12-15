import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutSFComponent } from './ajout-sf.component';

describe('AjoutSFComponent', () => {
  let component: AjoutSFComponent;
  let fixture: ComponentFixture<AjoutSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AjoutSFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
