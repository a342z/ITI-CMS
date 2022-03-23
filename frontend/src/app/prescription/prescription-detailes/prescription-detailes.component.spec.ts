import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrescriptionDetailesComponent } from './prescription-detailes.component';

describe('PrescriptionDetailesComponent', () => {
  let component: PrescriptionDetailesComponent;
  let fixture: ComponentFixture<PrescriptionDetailesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrescriptionDetailesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrescriptionDetailesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
