import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidaAutomovilComponent } from './salida-automovil.component';

describe('SalidaAutomovilComponent', () => {
  let component: SalidaAutomovilComponent;
  let fixture: ComponentFixture<SalidaAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalidaAutomovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalidaAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
