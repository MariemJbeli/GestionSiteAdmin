import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFamilleComponent } from './detail-famille.component';

describe('DetailFamilleComponent', () => {
  let component: DetailFamilleComponent;
  let fixture: ComponentFixture<DetailFamilleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailFamilleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailFamilleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
