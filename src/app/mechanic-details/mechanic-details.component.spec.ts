import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MechanicDetailsComponent } from './mechanic-details.component';

describe('MechanicDetailsComponent', () => {
  let component: MechanicDetailsComponent;
  let fixture: ComponentFixture<MechanicDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MechanicDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MechanicDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
