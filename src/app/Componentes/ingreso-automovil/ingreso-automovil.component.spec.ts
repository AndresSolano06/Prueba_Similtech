import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresoAutomovilComponent } from './ingreso-automovil.component';

describe('IngresoAutomovilComponent', () => {
  let component: IngresoAutomovilComponent;
  let fixture: ComponentFixture<IngresoAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresoAutomovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresoAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
