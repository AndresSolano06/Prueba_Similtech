import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrosAutomovilComponent } from './registros-automovil.component';

describe('RegistrosAutomovilComponent', () => {
  let component: RegistrosAutomovilComponent;
  let fixture: ComponentFixture<RegistrosAutomovilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrosAutomovilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrosAutomovilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
