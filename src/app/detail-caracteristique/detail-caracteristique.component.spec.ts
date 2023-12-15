import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailCaracteristiqueComponent } from './detail-caracteristique.component';

describe('DetailCaracteristiqueComponent', () => {
  let component: DetailCaracteristiqueComponent;
  let fixture: ComponentFixture<DetailCaracteristiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailCaracteristiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailCaracteristiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
