import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaillCommandeComponent } from './detaill-commande.component';

describe('DetaillCommandeComponent', () => {
  let component: DetaillCommandeComponent;
  let fixture: ComponentFixture<DetaillCommandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetaillCommandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaillCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
