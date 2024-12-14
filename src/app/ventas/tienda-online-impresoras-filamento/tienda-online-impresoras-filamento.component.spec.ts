import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiendaOnlineImpresorasFilamentoComponent } from './tienda-online-impresoras-filamento.component';

describe('TiendaOnlineImpresorasFilamentoComponent', () => {
  let component: TiendaOnlineImpresorasFilamentoComponent;
  let fixture: ComponentFixture<TiendaOnlineImpresorasFilamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TiendaOnlineImpresorasFilamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TiendaOnlineImpresorasFilamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
