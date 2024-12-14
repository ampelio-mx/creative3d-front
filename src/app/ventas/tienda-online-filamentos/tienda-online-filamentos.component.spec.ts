import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOnlineFilamentosComponent } from './tienda-online-filamentos.component';

describe('TiendaOnlineFilamentosComponent', () => {
  let component: TiendaOnlineFilamentosComponent;
  let fixture: ComponentFixture<TiendaOnlineFilamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaOnlineFilamentosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOnlineFilamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
