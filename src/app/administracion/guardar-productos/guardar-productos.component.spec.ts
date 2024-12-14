import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardarProductosComponent } from './guardar-productos.component';

describe('GuardarProductosComponent', () => {
  let component: GuardarProductosComponent;
  let fixture: ComponentFixture<GuardarProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GuardarProductosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GuardarProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
