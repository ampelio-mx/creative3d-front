import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosDescripcionComponent } from './servicios-descripcion.component';

describe('ServiciosDescripcionComponent', () => {
  let component: ServiciosDescripcionComponent;
  let fixture: ComponentFixture<ServiciosDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiciosDescripcionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
