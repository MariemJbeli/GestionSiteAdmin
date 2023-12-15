import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnecterClientComponent } from './connecter-client.component';

describe('ConnecterClientComponent', () => {
  let component: ConnecterClientComponent;
  let fixture: ComponentFixture<ConnecterClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnecterClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConnecterClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
