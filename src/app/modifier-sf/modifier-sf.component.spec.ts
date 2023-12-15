import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierSFComponent } from './modifier-sf.component';

describe('ModifierSFComponent', () => {
  let component: ModifierSFComponent;
  let fixture: ComponentFixture<ModifierSFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierSFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierSFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
