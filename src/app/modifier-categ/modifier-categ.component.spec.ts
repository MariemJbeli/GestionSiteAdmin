import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierCategComponent } from './modifier-categ.component';

describe('ModifierCategComponent', () => {
  let component: ModifierCategComponent;
  let fixture: ComponentFixture<ModifierCategComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifierCategComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifierCategComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
